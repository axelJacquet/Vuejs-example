# Testing Vue.js

## Prerequisites

- [Nodejs version 8.x](https://nodejs.org/en/)
- [Vue CLI](https://cli.vuejs.org/)

For development, we recommend :

- [Visual Code](https://code.visualstudio.com/)
- [Vue.js Extension Pack in Visual Code](https://marketplace.visualstudio.com/items?itemName=mubaidr.vuejs-extension-pack)
- [Browser Vue.js devtools](https://github.com/vuejs/vue-devtools#vue-devtools)

## Build

`npm install`

Installs all of the specified packages of your project.

## Run

`npm run serve`

The `serve` command starts a dev server (based on [webpack-dev-server](https://github.com/webpack/webpack-dev-server) proxied through [Browsersync](https://www.browsersync.io/)) that comes with Hot-Module-Replacement (HMR) working out of the box.

NB : if you want Browsersync to live reload your page, edit your `vue.config.js` file to `true` in your proxy `reload` attribute.

This should redirect you to http://localhost:3000 for your application and http://localhost:3001 for Browsersync options.

## Build

`npm run build`

You can deploy the built content in the `dist/` directory to any static file server.

## Setup VSCode

Run the `Setup VS Code` and `Setup ESLint` from the recommended settings in Vue.js extension pack documentation into your Workspace settings :

- Enable FormatOnSave & Eslint for .vue files

```
"editor.formatOnSave": true,
"eslint.validate": [
  "javascript",
  "javascriptreact",
  "vue"
]
```

- Configure ESLint

Create/update eslint config file (.eslintrc.js or .eslintrc.json) in your project folder, then fill it with :

```
module.exports = {
  plugins: ['vue'], // enable vue plugin
  extends: ['plugin:vue/essential', 'prettier'], // activate vue related rules
}
```

## Starting over ?

Project was initiated using Vue CLI :

```
npm install -g @vue/cli
vue create vue-hello-world
```
