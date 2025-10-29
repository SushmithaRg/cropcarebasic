const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx and .ts files
function findTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findTsxFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to fix imports in a file
function fixImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  // Define the import mappings
  const importMappings = {
    '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
    '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
    '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
    '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
    '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
    '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
    '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
    '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
    '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
    '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
    '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
    '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
    '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
    '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
    '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
    '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
    '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
    '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
    '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
    '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
    '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
    '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
    '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
    '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
    '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
    '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
    'class-variance-authority@0.7.1': 'class-variance-authority',
    'lucide-react@0.487.0': 'lucide-react',
    'input-otp@1.4.2': 'input-otp',
    'react-resizable-panels@2.1.7': 'react-resizable-panels',
    'react-hook-form@7.55.0': 'react-hook-form',
    'react-day-picker@8.10.1': 'react-day-picker',
    'next-themes@0.4.6': 'next-themes',
    'embla-carousel-react@8.6.0': 'embla-carousel-react',
    'cmdk@1.1.1': 'cmdk', // cSpell:ignore cmdk
    'sonner@2.0.3': 'sonner',
    'recharts@2.15.2': 'recharts',
    'vaul@1.1.2': 'vaul' // cSpell:ignore vaul
  };
  
  // Replace all versioned imports
  for (const [versionedImport, cleanImport] of Object.entries(importMappings)) {
    const regex = new RegExp(versionedImport.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    if (content.includes(versionedImport)) {
      content = content.replace(regex, cleanImport);
      changed = true;
    }
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed imports in: ${filePath}`);
  }
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const tsxFiles = findTsxFiles(srcDir);

console.log(`Found ${tsxFiles.length} TypeScript files to process...`);

tsxFiles.forEach(fixImports);

console.log('Import fixing complete!');
