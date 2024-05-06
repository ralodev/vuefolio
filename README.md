# Vuefolio

<p align="center">
<img align="center" width="800" src="https://i.postimg.cc/nz6T6gfB/vuefolio-netlify-app.webp">
</p>

Welcome to the Vuefolio Template project! This template is designed to help you create a professional portfolio by simply updating the `i18n` localization files and making minor adjustments. Whether you're a designer, developer, or any professional, this template can be adapted to fit your needs and showcase your work in multiple languages.

## Features

- **Vue.js Framework**: Built with Vue.js for a dynamic and responsive user interface.
- **Multi-language Support**: Easily switch between languages with pre-configured `i18n` settings.
- **Responsive Design**: Looks great on both mobile and desktop devices.
- **Customizable Styling**: Change colors and fonts with minimal adjustments.
- **SEO Friendly**: Pre-configured with basic SEO best practices.
- **Great Scores**: Highly performant in website audits ([PageSpeed](https://pagespeed.web.dev/analysis/https-vuefolio-netlify-app/ijy8r6njbj?form_factor=desktop))

<p align="center">
<img align="center" width="600" src="https://i.postimg.cc/C5kJY7wt/image.webp">
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

## Setting Up

### Setting Up Your Messaging Service
To configure the messaging service, follow these steps:

1. Go to [Web3Forms](https://web3forms.com/)
2. Click on `Create your Access Key`. 
3. Enter your email address in the provided field and submit the form.
4. Check your email for a message that includes your Access Key, which looks something like `a123b456-1ab2-12ab-1a23-123456789012`. Copy this key.
5. In VSCode open the file `src/components/contact/contactForm.vue` and replace `YOUR_ACCESS_KEY` with the Access Key you copied.

That's it! You're all set to receive emails from submissions made via your contact form. For additional customizations, refer to the [Web3Forms documentation](https://docs.web3forms.com/).


**Why Use Web3Forms for Your Contact Form?**

This project utilizes Web3Forms due to its:

- Easy setup process.
- Free tier that allows up to 250 submissions per month.
- Built-in SPAM protection.
- Integration with hCaptcha for enhanced security.

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
2. Opent the tailwind.config.js file and replace the `primary` or `base` palette with the values of the new one you generated.

This will update the primary color in all of the components of the application. Play with different combinations or with the same color in both of the palettes to explore your possibilities!

<p align="center">
   <img align="center" width="100" src="https://i.postimg.cc/Y2Ns0K2v/gray-theme.jpg">
   <img align="center" width="100" src="https://i.postimg.cc/pXqcQfFx/green-theme.jpg">
   <img align="center" width="100" src="https://i.postimg.cc/fTwg02kB/orange-theme.jpg">
   <img align="center" width="100" src="https://i.postimg.cc/L85CxJtP/pink-theme.jpg">
</p>

### Adding Your Content
Projects: Update the projects.ts file of your main language (e.g. `src/i18n/en/en_projects.ts`) Customize the information to showcase your projects, **keeping the syntax as it is to avoid errors**.

_Note: You only need to add the static properties like urls and images in the main language (english, unless changed) file._

Do the same for achievements, experience and education.

## Deployment
To deploy your portfolio, you can opt for a straightforward solution using [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/), as these platforms handle the deployment process seamlessly. If you prefer deploying via GitHub Pages, some additional configuration will be necessary.

### Deploy on GitHub Pages

1. Configure the `base` in `vite.config.ts`

If you are deploying to a *profile* repository, (e.g. `https://<USERNAME>.github.io/`), or to a custom domain through GitHub Pages (eg. `www.example.com`), skip to the next step.

If you are deploying to a project repository (eg. your repository name is `repo_name` and is located at `https://<USERNAME>.github.io/repo_name/`), open the `vite.config.ts` file and adjust the `base` setting to `'/repo_name/'`.

2. Deploying your site to GitHub Pages

You can deploy to GitHub Pages from a branch following these steps:

- In the terminal, navigate to your project directory and run `pnpm build`. This command generates a `dist` directory.
- Create a new branch in your GitHub repository, and push the contents of the dist directory to this branch. Then, set up GitHub Pages to deploy from this branch.

Alternatively, for an automated deployment, consider using GitHub Actions by following the guidelines provided in the [Vitejs documentation on deploying to GitHub Pages](https://vitejs.dev/guide/static-deploy#github-pages).

## Give a star
If you find this project useful, please consider giving it a star ⭐ on GitHub!

## License
Distributed under the MIT License. See LICENSE for more information.

## Author
Raúl López (ralodev) - 
[contact@ralo.dev](mailto:contact@ralo.dev) 

[<img src="https://img.shields.io/badge/LinkedIn-282C34?logo=linkedin&logoColor=0077B5" alt="LinkedIn logo" title="LinkedIn" height="25" />](https://www.linkedin.com/in/raul-lc)


## Acknowledgements
- Inspired in Dopefolio by [@Rammcodes](https://github.com/rammcodes)
