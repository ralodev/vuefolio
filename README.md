# Vuefolio

<p align="center">
<img align="center" width="800" src="https://i.postimg.cc/zvdTLyYq/vuefolio.webp">
</p>

Welcome to the Vuefolio Template project! This template is designed to help you create a professional portfolio by simply updating the `i18n` localization files and making minor adjustments. Whether you're a designer, developer, or any professional, this template can be adapted to fit your needs and showcase your work in multiple languages.

<p align="center">
   <img align="center" width="600" src="https://i.postimg.cc/cCqfwprb/vuefolio.gif">
</p>

## Features

- **Vue.js Framework**: Built with Vue.js for a dynamic and responsive user interface.
- **Multi-language Support**: Easily switch between languages with pre-configured `i18n` settings.
- **Responsive Design**: Looks great on both mobile and desktop devices.
- **Customizable Styling**: Change colors and fonts with minimal adjustments.
- **SEO Friendly**: Pre-configured with basic SEO best practices.
- **Great Scores**: Highly performant in website audits ([PageSpeed](https://pagespeed.web.dev/analysis/https-vuefolio-netlify-app/h7bzs3qwrb?form_factor=desktop))

<p align="center">
<img align="center" width="600" src="https://i.postimg.cc/QNSQYy9v/pagespeed.webp">
</p>

## Getting Started

Follow these steps to set up your portfolio:

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 12.x or higher)
- [Git](https://git-scm.com/)
- [pnpm](https://pnpm.io/) (This project uses `pnpm` for efficient, fast, and disk space saving package management)


### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ralodev/vuefolio.git
   cd vuefolio
   ```
2. Install dependencies:
    ```bash
    pnpm install
    ```
3. Start the development server:
    ```bash
    pnpm dev
    ```
Visit http://localhost:5173 to view your project live.

## Customizing Your Portfolio

### Language Configuration
Edit i18n Files: Navigate to the i18n directory. 
Here, you'll find directories with typescript files for each supported language (e.g., en/en_about.ts, en/en_experience.ts, etc.). Edit these files to update text throughout the template.

#### Add New Languages: 
To add a new language:
Duplicate one of the existing language directories and and rename it and the files inside (e.g., `src/i18n/en` to `src/i18n/fr`, `./fr/en_about.ts` to `./fr/fr_about.ts` for French).

Update the content inside your new file to the desired language.
Register the new language in the i18n configuration file `src/i18n/messages.ts`.

### Theme Customization
To change the visual appearance:

Change the primary color: 
1. Navigate to [UIColors](https://uicolors.app/create) and generate a palette with the color of your preference
2. Opent the tailwind.config.js file and replace the current palette with the new one you generated.

This will update the primary color in all of the components of the application.

### Adding Your Content
Projects: Update the projects.ts file of your main language (e.g. `src/i18n/en/en_projects.ts`) Customize the information to showcase your projects, **keeping the syntax as it is to avoid errors**.

_Note: You only need to add the static properties like urls and images in the main language (english, unless changed) file._

Do the same for achievements, experience and education.

## Deployment
To deploy your portfolio:

1. Build the project:
```bash
pnpm run build
```
2. Deploy the build directory to your preferred hosting service (e.g., GitHub Pages, Netlify, Vercel).

## Give a star
If you find this project useful, please consider giving it a star ⭐ on GitHub!

## License
Distributed under the MIT License. See LICENSE for more information.

## Author
Raúl López (ralodev) - 
[contact@ralo.dev](mailto:contact@ralo.dev) 

[<img src="https://img.shields.io/badge/LinkedIn-282C34?logo=linkedin&logoColor=0077B5" alt="LinkedIn logo" title="LinkedIn" height="25" />](https://www.linkedin.com/in/raul-lc)


## Acknowledgements
Vuejs
