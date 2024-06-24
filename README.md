<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">xotoboil-multifront-webpack</h1>
</p>
<p align="center">
    <em>Empower Frontend Devs with Simplicity Across Multifront 🚀</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/xotosphere/xotoboil-multifront-webpack?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/xotosphere/xotoboil-multifront-webpack?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/xotosphere/xotoboil-multifront-webpack?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/xotosphere/xotoboil-multifront-webpack?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/Sass-CC6699.svg?style=flat&logo=Sass&logoColor=white" alt="Sass">
	<img src="https://img.shields.io/badge/YAML-CB171E.svg?style=flat&logo=YAML&logoColor=white" alt="YAML">
	<img src="https://img.shields.io/badge/Webpack-8DD6F9.svg?style=flat&logo=Webpack&logoColor=black" alt="Webpack">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<br>
	<img src="https://img.shields.io/badge/Vue.js-4FC08D.svg?style=flat&logo=vuedotjs&logoColor=white" alt="Vue.js">
	<img src="https://img.shields.io/badge/SemVer-3F4551.svg?style=flat&logo=SemVer&logoColor=white" alt="SemVer">
	<img src="https://img.shields.io/badge/Lodash-3492FF.svg?style=flat&logo=Lodash&logoColor=white" alt="Lodash">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/Ajv-23C8D2.svg?style=flat&logo=Ajv&logoColor=white" alt="Ajv">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

##  Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Modules](#-modules)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Running xotoboil-multifront-webpack](#-running-xotoboil-multifront-webpack)
>   - [ Tests](#-tests)
> - [ Project Roadmap](#-project-roadmap)
> - [ Contributing](#-contributing)
> - [ License](#-license)
> - [ Acknowledgments](#-acknowledgments)

---

##  Overview

The xotoboil-multifront-webpack project provides a scalable solution for managing multiple frontend modules within a single repository. Leveraging tools like webpack and module federation, the project enables seamless development and deployment workflows. With specialized configurations for each package, such as the home section, developers can efficiently build, serve, and bundle frontend components. By orchestrating parallel executions and maintaining dependencies, the project simplifies the creation of complex and dynamic user interfaces across various views, enhancing overall user experience and productivity.


---

##  Repository Structure

```sh
└── xotoboil-multifront-webpack/
    ├── README.md
    ├── package.json
    ├── packages
    │   ├── body
    │   │   ├── package.json
    │   │   ├── src
    │   │   │   ├── App.vue
    │   │   │   ├── app.ts
    │   │   │   ├── declarations
    │   │   │   │   └── shims-vue.d.ts
    │   │   │   └── index.ts
    │   │   ├── tsconfig.json
    │   │   └── webpack.config.js
    │   ├── home
    │   │   ├── package.json
    │   │   ├── public
    │   │   │   └── index.html
    │   │   ├── src
    │   │   │   └── index.ts
    │   │   ├── tsconfig.json
    │   │   └── webpack.config.js
    │   └── navigation
    │       ├── .babelrc
    │       ├── package.json
    │       ├── src
    │       │   ├── Footer.tsx
    │       │   ├── Header.tsx
    │       │   └── index.ts
    │       ├── tsconfig.json
    │       └── webpack.config.js
    └── yarn.lock
```

---

##  Modules

<details closed><summary>.</summary>

| File                                                                                              | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---                                                                                               | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [package.json](https://github.com/xotosphere/xotoboil-multifront-webpack/blob/master/package.json) | Code Summary:**The code snippet orchestrates parallel execution of start commands across multiple packages in the repository, enabling seamless development workflow using `concurrently` and `wsrun`.                                                                                                                                                                                                                                                                       |
| [yarn.lock](https://github.com/xotosphere/xotoboil-multifront-webpack/blob/master/yarn.lock)       | Summary: This code snippet in the body package of xotoboil-multifront-webpack repo manages the main application component, facilitating frontend display and functionality across multiple views.By defining and controlling the behavior of the App.vue file, the code influences the overall user experience and interface within the repository's frontend structure.For further insights, explore the package's intricate features within the project's extensive README. |

</details>

<details closed><summary>packages.home</summary>

| File                                                                                                                      | Summary                                                                                                                                                                                                         |
| ---                                                                                                                       | ---                                                                                                                                                                                                             |
| [tsconfig.json](https://github.com/xotosphere/xotoboil-multifront-webpack/blob/master/packages/home/tsconfig.json)         | Code in `packages/home/src/index.ts` manages front-end setup for home section. Supports module bundling via webpack. Configured for ES5 target with strict type checking.                                       |
| [package.json](https://github.com/xotosphere/xotoboil-multifront-webpack/blob/master/packages/home/package.json)           | Code Summary:** `home` package configures scripts for serving and building the frontend. Manages dependencies using Babel and Webpack, maintaining project compilation and execution.                           |
| [webpack.config.js](https://github.com/xotosphere/xotoboil-multifront-webpack/blob/master/packages/home/webpack.config.js) | Code Summary-packages/home/webpack.config.js:**Configures webpack to build and serve a home module. Sets up module federation for sharing home with navigation and body. HtmlWebpackPlugin for HTML templating. |

</details>

<details closed><summary>packages.home.public</summary>

| File                                                                                                               | Summary                                                                                                                                                                               |
| ---                                                                                                                | ---                                                                                                                                                                                   |
| [index.html](https://github.com/xotosphere/xotoboil-multifront-webpack/blob/master/packages/home/public/index.html) | Code snippet in `packages/navigation/Header.tsx` integrates header component into parent repository's front end, enhancing user experience with consistent branding across all pages. |

</details>

<details closed><summary>packages.home.src</summary>

| File                                                                                                        | Summary                                                                                                                                                           |
| ---                                                                                                         | ---                                                                                                                                                               |
| [index.ts](https://github.com/xotosphere/xotoboil-multifront-webpack/blob/master/packages/home/src/index.ts) | Code snippet registers and initializes micro-frontends header, footer, and body in a Single-SPA application, based on the main repository's modular architecture. |

</details>

<details closed><summary>packages.navigation</summary>

| File                                                                                                                            | Summary                                                                                                                                                                                                                                                    |
| ---                                                                                                                             | ---                                                                                                                                                                                                                                                        |
| [tsconfig.json](https://github.com/xotosphere/xotoboil-multifront-webpack/blob/master/packages/navigation/tsconfig.json)         | Code snippet in `navigation` package handles rendering site header and footer components in the front-end, conforming to React standards in the parent repository's architecture.                                                                          |
| [package.json](https://github.com/xotosphere/xotoboil-multifront-webpack/blob/master/packages/navigation/package.json)           | Code Summary:** The `navigation` package orchestrates frontend components for the app's header and footer, facilitating seamless navigation. It supports React and TypeScript with necessary build configurations in the parent repository's architecture. |
| [webpack.config.js](https://github.com/xotosphere/xotoboil-multifront-webpack/blob/master/packages/navigation/webpack.config.js) | Code in `packages/navigation/webpack.config.js` exposes Header and Footer components via Module Federation, enabling remote use within the parent repository's architecture.                                                                               |

</details>

<details closed><summary>packages.navigation.src</summary>

| File                                                                                                                  | Summary                                                                                                                                                                                                                |
| ---                                                                                                                   | ---                                                                                                                                                                                                                    |
| [Header.tsx](https://github.com/xotosphere/xotoboil-multifront-webpack/blob/master/packages/navigation/src/Header.tsx) | Header Component for Plugin Integration:** 💻Code in `Header.tsx` serves as integration point for React header plugin in a micro frontends architecture, utilizing `single-spa-react`.                                  |
| [Footer.tsx](https://github.com/xotosphere/xotoboil-multifront-webpack/blob/master/packages/navigation/src/Footer.tsx) | Code Summary:** The code snippet in `packages/navigation/src/Footer.tsx` defines a React footer component integrated for mounting, bootstrapping, and unmounting within a single-spa architecture.                     |
| [index.ts](https://github.com/xotosphere/xotoboil-multifront-webpack/blob/master/packages/navigation/src/index.ts)     | Role:** Integrates **Footer** and **Header** components in navigation package for consistent UI across the application. Maintains seamless user experience and enhances navigation structure in the parent repository. |

</details>

<details closed><summary>packages.body</summary>

| File                                                                                                                      | Summary                                                                                                                                                                                                                  |
| ---                                                                                                                       | ---                                                                                                                                                                                                                      |
| [tsconfig.json](https://github.com/xotosphere/xotoboil-multifront-webpack/blob/master/packages/body/tsconfig.json)         | Code in packages/body enforces strict typing and ES features. It ensures consistent file naming and improves module resolution in the multi-front architecture.                                                          |
| [package.json](https://github.com/xotosphere/xotoboil-multifront-webpack/blob/master/packages/body/package.json)           | Code snippet in `packages/body/package.json` configures build and start scripts for the Body package, serving and building web content on port 3002 using Vue and related dependencies in the multi-frontend repository. |
| [webpack.config.js](https://github.com/xotosphere/xotoboil-multifront-webpack/blob/master/packages/body/webpack.config.js) | Code in packages/body/webpack.config.js sets up module federation for body package. It exposes Body component & configures shared modules for seamless composition in the repository's architecture.                     |

</details>

<details closed><summary>packages.body.src</summary>

| File                                                                                                        | Summary                                                                                                                                                                                                                                                                                                  |
| ---                                                                                                         | ---                                                                                                                                                                                                                                                                                                      |
| [app.ts](https://github.com/xotosphere/xotoboil-multifront-webpack/blob/master/packages/body/src/app.ts)     | Summary: The code snippet in `packages/body/src/app.ts` utilizes `single-spa-vue` to create a Vue.js app for integrating front-end modules within the parent repository's architecture. Key features include lifecycle management functions for bootstrapping, mounting, and unmounting the application. |
| [App.vue](https://github.com/xotosphere/xotoboil-multifront-webpack/blob/master/packages/body/src/App.vue)   | Code snippet in `packages/body/src/App.vue` defines the body component in Vue.js. It displays a styled container with content, crucial for the frontend architecture of the repository.                                                                                                                  |
| [index.ts](https://github.com/xotosphere/xotoboil-multifront-webpack/blob/master/packages/body/src/index.ts) | Code snippet in `packages/body/src/index.ts` imports and initializes the main application logic from `app.ts`. This module acts as the entry point for the body component in the xotoboil-multifront-webpack repository's architecture.                                                                   |

</details>

<details closed><summary>packages.body.src.declarations</summary>

| File                                                                                                                                 | Summary                                                                                                                                                |
| ---                                                                                                                                  | ---                                                                                                                                                    |
| [shims-vue.d.ts](https://github.com/xotosphere/xotoboil-multifront-webpack/blob/master/packages/body/src/declarations/shims-vue.d.ts) | Code snippet in shims-vue.d.ts declares Vue component type for TypeScript, crucial for type safety in Vue components across the repository's packages. |

</details>
