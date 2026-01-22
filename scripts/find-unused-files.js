/**
 * Script to find potentially unused files in the frontend
 * Run: node scripts/find-unused-files.js
 */

const fs = require('fs');
const path = require('path');

const frontendRoot = path.resolve(__dirname, '../');
const srcRoot = path.join(frontendRoot, 'src');

console.log('🔍 Analyzing Unused Frontend Files and Folders\n');
console.log('='.repeat(60));

const unusedFiles = [];
const usedComponents = new Set();
const usedHooks = new Set();
const usedPages = new Set();

// Read App.tsx to see what's imported
const appPath = path.join(srcRoot, 'App.tsx');
if (fs.existsSync(appPath)) {
  const appContent = fs.readFileSync(appPath, 'utf8');
  
  // Extract imports
  const importRegex = /import\s+.*?\s+from\s+['"](.*?)['"]/g;
  let match;
  while ((match = importRegex.exec(appContent)) !== null) {
    const importPath = match[1];
    if (importPath.startsWith('./') || importPath.startsWith('../')) {
      usedComponents.add(importPath);
    } else if (importPath.startsWith('@/')) {
      usedComponents.add(importPath.replace('@/', 'src/'));
    }
  }
}

// Recursively search for imports in all files
function findImports(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findImports(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const importRegex = /import\s+.*?\s+from\s+['"](.*?)['"]/g;
        let match;
        while ((match = importRegex.exec(content)) !== null) {
          const importPath = match[1];
          if (importPath.startsWith('./') || importPath.startsWith('../')) {
            const resolvedPath = path.resolve(dir, importPath).replace(/\\/g, '/');
            const relativePath = resolvedPath.replace(path.resolve(srcRoot).replace(/\\/g, '/'), 'src').replace(/^\//, '');
            usedComponents.add(relativePath);
          } else if (importPath.startsWith('@/')) {
            usedComponents.add(importPath.replace('@/', 'src/'));
          }
        }
      } catch (e) {
        // Skip files that can't be read
      }
    }
  });
}

// Find all imports
findImports(srcRoot);

// Check UI components
console.log('\n1️⃣  Checking UI Components...');
const uiComponentsDir = path.join(srcRoot, 'components/ui');
if (fs.existsSync(uiComponentsDir)) {
  const uiFiles = fs.readdirSync(uiComponentsDir);
  
  uiFiles.forEach(file => {
    if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const componentName = file.replace(/\.(tsx|ts)$/, '');
      const importPath1 = `@/components/ui/${componentName}`;
      const importPath2 = `./components/ui/${componentName}`;
      const importPath3 = `../components/ui/${componentName}`;
      
      let isUsed = false;
      usedComponents.forEach(used => {
        if (used.includes(`components/ui/${componentName}`) || 
            used.includes(`ui/${componentName}`)) {
          isUsed = true;
        }
      });
      
      if (!isUsed) {
        console.log(`   ⚠️  ${file} - NOT imported anywhere`);
        unusedFiles.push({
          file: `components/ui/${file}`,
          type: 'UI Component',
          reason: 'Not imported in any file'
        });
      }
    }
  });
}

// Check hooks
console.log('\n2️⃣  Checking Hooks...');
const hooksDir = path.join(srcRoot, 'hooks');
if (fs.existsSync(hooksDir)) {
  const hookFiles = fs.readdirSync(hooksDir);
  
  hookFiles.forEach(file => {
    if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const hookName = file.replace(/\.(tsx|ts)$/, '');
      let isUsed = false;
      
      usedComponents.forEach(used => {
        if (used.includes(`hooks/${hookName}`)) {
          isUsed = true;
        }
      });
      
      if (!isUsed) {
        console.log(`   ⚠️  ${file} - NOT imported anywhere`);
        unusedFiles.push({
          file: `hooks/${file}`,
          type: 'Hook',
          reason: 'Not imported in any file'
        });
      } else {
        console.log(`   ✅ ${file} - is being used`);
      }
    }
  });
}

// Check pages (all should be used in App.tsx)
console.log('\n3️⃣  Checking Pages...');
const pagesDir = path.join(srcRoot, 'pages');
if (fs.existsSync(pagesDir)) {
  const pageFiles = fs.readdirSync(pagesDir);
  const appContent = fs.readFileSync(appPath, 'utf8');
  
  pageFiles.forEach(file => {
    if (file.endsWith('.tsx')) {
      const pageName = file.replace(/\.tsx$/, '');
      if (!appContent.includes(pageName)) {
        console.log(`   ⚠️  ${file} - NOT used in App.tsx routes`);
        unusedFiles.push({
          file: `pages/${file}`,
          type: 'Page',
          reason: 'Not used in App.tsx routes'
        });
      } else {
        console.log(`   ✅ ${file} - is used in routes`);
      }
    }
  });
}

// Check for duplicate use-toast files
console.log('\n4️⃣  Checking for Duplicate Files...');
const useToast1 = path.join(srcRoot, 'hooks/use-toast.ts');
const useToast2 = path.join(srcRoot, 'components/ui/use-toast.ts');
if (fs.existsSync(useToast1) && fs.existsSync(useToast2)) {
  console.log('   ⚠️  Duplicate use-toast.ts found:');
  console.log('      - hooks/use-toast.ts');
  console.log('      - components/ui/use-toast.ts');
  
  // Check which one is used
  const appContent = fs.readFileSync(appPath, 'utf8');
  if (appContent.includes('@/hooks/use-toast') || appContent.includes('./hooks/use-toast')) {
    console.log('   💡 hooks/use-toast.ts is being used');
    unusedFiles.push({
      file: 'components/ui/use-toast.ts',
      type: 'Duplicate',
      reason: 'Duplicate of hooks/use-toast.ts (hooks version is used)'
    });
  } else if (appContent.includes('@/components/ui/use-toast') || appContent.includes('./components/ui/use-toast')) {
    console.log('   💡 components/ui/use-toast.ts is being used');
    unusedFiles.push({
      file: 'hooks/use-toast.ts',
      type: 'Duplicate',
      reason: 'Duplicate of components/ui/use-toast.ts (components version is used)'
    });
  }
}

// Check App.css
console.log('\n5️⃣  Checking App.css...');
const appCssPath = path.join(srcRoot, 'App.css');
if (fs.existsSync(appCssPath)) {
  const appContent = fs.readFileSync(appPath, 'utf8');
  if (!appContent.includes('App.css') && !appContent.includes('./App.css')) {
    console.log('   ⚠️  App.css is NOT imported in App.tsx');
    unusedFiles.push({
      file: 'App.css',
      type: 'Stylesheet',
      reason: 'Not imported in App.tsx'
    });
  } else {
    console.log('   ✅ App.css is imported');
  }
}

// Check assets
console.log('\n6️⃣  Checking Assets...');
const assetsDir = path.join(srcRoot, 'assets');
if (fs.existsSync(assetsDir)) {
  const assetFiles = fs.readdirSync(assetsDir);
  console.log(`   📁 Found ${assetFiles.length} asset files`);
  console.log('   💡 Note: Asset usage requires manual checking in components');
}

// Summary
console.log('\n' + '='.repeat(60));
console.log('\n📊 Summary of Potentially Unused Files:\n');

if (unusedFiles.length === 0) {
  console.log('✅ No unused files found! All files appear to be in use.\n');
} else {
  unusedFiles.forEach((item, index) => {
    console.log(`${index + 1}. ${item.file}`);
    console.log(`   Type: ${item.type}`);
    console.log(`   Reason: ${item.reason}`);
    console.log('');
  });
}

console.log('💡 Notes:');
console.log('   - UI components from shadcn/ui are often unused until needed');
console.log('   - Some components might be used dynamically or conditionally');
console.log('   - Always verify before deleting any files!');
console.log('   - Check asset usage manually in component files\n');
