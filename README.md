![Uprising](https://i.imgur.com/hpL0rn1.jpg)

# Mauro-Sample-Store

Mauro-Sample-Store is a boilerplate Shopify - Online Store 2.0 theme and build process built on top of the [Shopify CLI](https://shopify.dev/themes/tools/cli) and Dawn.
\
&nbsp;
## Table of Contents

  - [Dev environment setup](#dev-environment-setup)
  - [Shopify CLI Setup](#shopify-cli-setup)
    - [Installation](#installation)
    - [Authenticate and Connect](#authenticate-and-connect)
    - [(Optional) Populate Dummy Data](#optional-populate-dummy-data)
    - [Shopify CLI - Notes](#shopify-cli---notes)
  - [Starting Development](#starting-development)
  - [Src Directory File Structure](#src-directory-file-structure)
    - [Scripts](#scripts)
      - [Templates](#templates)
      - [Sections](#sections)
      - [Snippets](#snippets)
      - [Core](#core)
    - [Styles](#styles)
      - [Templates](#templates-1)
      - [Sections](#sections-1)
      - [Snippets](#snippets-1)
      - [Core](#core-1)
    - [Assets](#assets)
\
&nbsp;

## Dev environment setup
Since this project uses a webpack build process in parallel with the shopify cli, you'll need to make sure you have all of that set up before starting development.

- Make sure you have node version `14.15.4` installed on your computer. The package.json scripts should automatically use the correct version of node when starting up but you'll need to make sure you have nvm installed on your device before that'll work as expected. 
  - [NVM installation instructions](https://github.com/nvm-sh/nvm#install--update-script)
  \
  &nbsp;

- In the root directory, install all dependencies with 
    ```
    npm install
    ``` 
    or 
    ```
    yarn install
    ``` 
  - Make sure all developers on your team are using the same package manager. reference the package-lock.json or yarn-lock.json files to see what package manager was used previously if working on a support track. 
  \
  &nbsp;

## Shopify CLI Setup
### Installation
Before you start using Shopify CLI to develop themes, make sure that you do the following tasks:

- [Install](https://shopify.dev/themes/tools/cli/installation) Shopify CLI.
- If you want to use a [development store](https://shopify.dev/themes/tools/development-stores) to build a theme, create or log in to a Shopify Partner account, and then create a development store.
- Important: Make sure that you have a **collaborator** account or a **staff** account with the the **Manage themes** permission or **Themes** permission for the store that you want to work on, or you're the owner of the store.
- Note the URL of the store that you want to work on.
- Make sure that you're connected to the internet. Most Shopify CLI commands need an internet connection to run. 
  
### Authenticate and Connect

In order to start development, you'll need to authenticate with shopify and the store you'll be working on. 
- Start by authenticating with the shopify by running 
  
  ```
  shopify login
  ```

  - Make sure you have collaborator access to the store, are a staff member, or owner of the store you're login into. 
  - You can optionally add the flag ```--store <storename>.myshopify.com``` to log directly into a store using your partner portal credentials like so:
    - Example: 
      ```
      shopify login --store store-name.myshopify.com
      ```
    \
    &nbsp;
- After logging in, you can verify what store you're connected to by running 
  
  ```
  shopify store
  ```
- Once you're logged in, you can run 
  ```
  shopify switch
  ```
   and select the store from the displayed menu in your terminal. 
  
### (Optional) Populate Dummy Data 

- If you're starting with a blank slate, 
  ```
  shopify populate
  ``` 
  is useful for populating your store with dummy data. 
  
    ```
    shopify populate [ products | customers | draftorders ] [ --count <NUMBER> ]
    ```

  note: this doesn't include product images 

- You can optionally use the CSV in src/_theme-setup/seed-data to populate products with placeholder images 

### Shopify CLI - Notes
- Development Themes: 
  - Shopify development themes don't appear in the theme section of the shopify admin, rather they are temporary, hidden themes that are connected to the Shopify store that you're using for development. When you connect your theme to a store as a development theme, you can use that store's data for local testing.
  - Your development theme is deleted when you run shopify logout. If you want a preview link for the theme that can be accessed after you log out, then you should push your development theme to an unpublished theme on your store.
  - Your development theme can be used to perform the following tasks:
    - View changes in real time to a theme that you're developing locally
    - Customize and interact with the theme using the Shopify admin theme editor
    - Share a password-protected preview of the theme with other developers

## Starting Development 

- This theme ships with the following commands:

  ```
  npm run start
  ```
  - Starts webpack in development mode & runs [shopify theme serve]() 
  \
  &nbsp;
  ```
  npm run deploy 
  ```
  - Starts the webpack production build and pushes the compiled code to theme selected from the menu presented in the terminal
  \
  &nbsp;
  ```
  npm run deploy:new
  ``` 
  - Starts the webpack production build and pushes the compiled code to a new theme 
  \
  &nbsp;
  ```
  npm run webpack:watch
  ``` 
  - Starts webpack in development mode
  \
  &nbsp;
  ```
  npm run webpack:build
  ``` 
  - Starts webpack in production mode
  \
  &nbsp;
  ```
  npm run shopify:serve
  ``` 
  - Creates a shopify developer theme and live server
  \
  &nbsp;
  ```
  npm run shopify:pull
  ``` 
  - Pulls the selected theme code from the store on to your local machine
  \
  &nbsp;
  ```
  npm run lint
  ``` 
  - Runs linter for styles, js, and liquid 
  \
  &nbsp;
  ```
  npm run lint:js
  ``` 
  - Runs linter for js
  \
  &nbsp;
  ```
  npm run lint:css
  ``` 
  - Runs linter for styles (css, scss, sass)
  \
  &nbsp;
  ```
  npm run lint:shopify
  ``` 
  - Runs linter for liquid and the compiled css and js in the assets directory
  \
  &nbsp;
  ```
  npm run fix
  ``` 
  - Will automatically fix any javascript, style, and liquid errors that it can (you can see what it can automatically correct by running the lint commands above)
  \
  &nbsp;
  ```
  npm run fix:js
  ``` 
  - Will automatically fix any javascript errors that it can (you can see what it can automatically correct by running the lint commands above)
  \
  &nbsp;
  ```
  npm run fix:css
  ``` 
  - Will automatically fix any style errors that it can (you can see what it can automatically correct by running the lint commands above)
  \
  &nbsp;
  ```
  npm run fix:shopify
  ``` 
  - Will automatically fix any shopify errors that it can (you can see what it can automatically correct by running the lint commands above)


## Src Directory File Structure
This section on the readme is still a WIP. It should be pretty close but it'll require some modifications as things change and evolve.

### Scripts 
Useful links
- [Web Component Documentation](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Preact Documentation](https://preactjs.com/guide/v10/getting-started)


#### Templates  
Template-specific js lives here.
#### Sections
The section directory should only contain js that applies to entire liquid sections. 

- Section JS should be tied in to liquid code using [web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components).
- Preact is also included in the webpack build process and can be [used in conjunction](https://preactjs.com/guide/v10/web-components) with web components for sections and pages that require more complex state management and user interaction. 

#### Snippets 
The snippet directory should be used to apply js to repeated UI elements like product cards, quantity adjusters, etc. These scripts should also make use of web components.

#### Core 
The core directory is ignored by webpack. You should include and require any global preact components, 

### Styles
Useful Links
- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind Theme Configuration](https://tailwindcss.com/docs/theme)
- [Sass Documentation](https://sass-lang.com/documentation)
- [BEM Methodology](https://en.bem.info/methodology/key-concepts/)

#### Style Library:
The theme currently uses tailwind.css for its style library. 

- Swapping it out for bootstrap 5 shouldn't be a difficult process to accomplish since by default tailwind utility classes aren't part of the dawn markup and all styles inherit from the dawn theme's css variables. 
- Tailwind provides us with all of the bootstrap functionality that we use normally: grids, utility classes, theming without the potential for internal or third party collisions. This makes it a great tool for us to use when working on purchased themes that potentially use another style library or working with dawn on a custom build.

#### Removing tailwind and adding bootstrap
  - Remove tailwindcss package.
    ```
    npm uninstall tailwindcss
    ```
  
  - Remove tailwind config.
      
    ```
    rm src/tailwind.config.js
    ```

  - Remove tailwind require from .config/postcss.config.js.
    ```
    module.exports = {
      plugins: [
        ...
         require('tailwindcss')(path.resolve(__dirname, '../src/tailwind.config.js')),
        ...
      ]
    }
    ```

  - Remove tailwindcss imports from src/styles/templates/global.scss
    ```
    @import "tailwindcss/base";
    @import "tailwindcss/components";

    ...

    @import "tailwindcss/utilities";
    ```
  - Install bootstrap
    ```
    npm install bootstrap
    ```
  - Import bootstrap into src/styles/global.scss
    ```
    @import "~bootstrap/scss/bootstrap";
    ```

#### Templates
This directory should have the filename structure `'template-[template name].scss`. After the webpack compilation process runs, you can include it in your liquid components by the same filename with the .css extension

example: 
`template-search.scss` ==> `template-search.css`

#### Sections
The section directory should only contain stylesheets that apply to entire liquid sections. Section stylesheets should have a filename structure `'section-[section name].scss`. After the webpack compilation process runs, you can include it in your liquid components by the same filename with the .css extension

example: 
`section-search.scss` ==> `section-search.css`

#### Snippets
This directory should have the filename structure `'component-[component name].scss`. After the webpack compilation process runs, you can include it in your liquid components by the same filename with the .css extension

example: 
`component-search.scss` ==> `component-search.css`

#### Core
The core directory is ignored by webpack. Any stylesheets included here should be imported and used in the `global.scss` file.

### Assets
This is the directory where webpack will inject all of it's files after a successful compilation so it's the closest thing to a `dist` directory we have at the moment. If you are working with a premium theme purchased from the theme store, add the contents of that theme's asset directory here prepending every file name like so `static.[file name].[extension]`. This will keep webpack from deleting them after a successful compilation and they'll be uploaded to shopify with the rest of the theme files. 
