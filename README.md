# Starter Kit

Complete starter kit for react-native projects.

## Description

This repository created for initilazing react-native apps fast as we can and keep our focus on the coding. Project includes the requirements for almost all react-native projects. Also i used markdown files for petite descriptions of components and screens. Throughout the project i used yarn and i encourage you to use yarn.

## Libraries

Libraries installed to project :

- > react-native-navigation : 2.7.0
- > react-native-firebase : 5.2.1
- > redux : 4.0.1
- > react-redux : 6.0.0
- > redux-saga : 0.16.2
- > redux-persist : 5.10.0
- > redux-logger : 3.0.6
- > react-native-swiper : 1.5.14
- > react-native-keyboard-aware-scroll-view : 0.8.0

## Firebase Installation

>**Android**

- Put your google-services.json under android/app/

## Coding Style

Project configurated coding with Airbnb standarts and **Eslint** - **Prettier** installed and configured.
Also project configurated coding with static type checking with flow. **Flow** installed and configurated for using this coding styles please follow the editor configuration instractions.

## Editor Instructions

**1** .Add this extensions to your editor

```js
ESLint// For writing code according to Airbnb standarts...
Prettier-Code formatter// Fixes many mistakes according to Eslint Airbnb standart for our project...
Flow Language Support// Support us to static type checking with react-native...
markdownlint// Linter for .md descriptions which is written inside of the project...
```

**2**. Add following lines to your editor workspace settings for prettier, flow and eslint work.(**If you are using vscode skip this step because workspace setting for vscode included inside of the repository**)

```js

  // Format a file on save. A formatter must be available, the file must not be auto-saved, and editor must not be shutting down.
  "editor.formatOnSave": true,
  // Support using flow through your node_modules folder, WARNING: Checking this box is a security risk. When you open a project we will immediately run code contained within it.
  "flow.useNPMPackagedFlow": true,
  // Enable/disable JavaScript validation. (For Flow)
  "javascript.validate.enable": false,
  // Enable/disable default JavaScript formatter (For Prettier)
  "javascript.format.enable": false,
  // Use 'prettier-eslint' instead of 'prettier'. Other settings will only be fallbacks in case they could not be inferred from eslint rules.
  "prettier.eslintIntegration": true
```

## Scripts

- yarn run-android : this script cleans android build and re-builds the app.
- yarn flow-start : Starts a Flow server.
- yarn flow-stop : Stops a Flow server.
- yarn flow-status : Shows current Flow errors by asking the Flow server.
- yarn flow-coverage : Shows coverage information for a given file.

## ToDo

- [x] Android Support
- [ ] iOS Support
- [x] Adding simple Jest test
- [x] Adding markdown descriptions to components and screens
- [ ] Cucumber scenario & Appium test for login scenario
- [ ] react-navigation support
- [ ] react-native-firebase notificaton utility functions

## License

[MIT](https://opensource.org/licenses/mit-license.html)
