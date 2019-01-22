# starterkit
Complete starter kit for react-native projects.

# editor instructions
1.Add this extensions to your editor
```
ESLint
Prettier-Code formatter
Flow Language Support
```
2.Add following lines to your editor workspace settings for prettier, flow and eslint work
```
  // Format a file on save. A formatter must be available, the file must not be auto-saved, and editor must not be shutting down.
  "editor.formatOnSave": true,
  // Support using flow through your node_modules folder, WARNING: Checking this box is a security risk. When you open a project we will   immediately run code contained within it.
  "flow.useNPMPackagedFlow": true,
  // Enable/disable JavaScript validation. (For Flow)
  "javascript.validate.enable": false,
  // Enable/disable default JavaScript formatter (For Prettier)
  "javascript.format.enable": false,
  // Use 'prettier-eslint' instead of 'prettier'. Other settings will only be fallbacks in case they could not be inferred from eslint rules.
  "prettier.eslintIntegration": true
```
