## CBD Website

This is the repository for the CBD website, which can be accessed at
https://alla2021.github.io/CBD-website/

This is the source code for a website about CBD (cannabidiol), a non-psychoactive compound found in cannabis plants. The website provides information about the benefits and uses of CBD, as well as different products available on the market.

Getting started

To get started with the development of this website, you need to have Node.js installed on your computer.

Once you have Node.js installed, follow these steps:

Clone this repository to your local machine:

bash
Copy code
git clone https://github.com/alla2021/CBD-website.git
Install the dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
This will start a local server at http://localhost:3000 where you can view the website.

Dependencies

This project uses the following dependencies:

browser-sync - for live reloading and syncing of the browser across multiple devices
del - for cleaning the dist directory before building
gulp - for task automation
gulp-autoprefixer - for adding vendor prefixes to CSS rules
gulp-clean-css - for minifying CSS
gulp-concat - for concatenating files
gulp-notify - for displaying notifications on errors
gulp-plumber - for handling errors without breaking the Gulp task
gulp-sass - for compiling Sass to CSS
gulp-sass-lint - for linting Sass code
gulp-uglify - for minifying JavaScript
gulp-zip - for creating a ZIP archive of the project
sass - for Sass preprocessing

Development

The src directory contains the source code of the website. The dist directory contains the compiled code that is served to the user.

To start development, run the npm start command. This will start a local server and watch for changes in the src directory. Whenever a file is changed, the appropriate Gulp task will be executed to compile the code and reload the browser.

To build the production version of the website, run the npm run build command. This will compile the code in the src directory and output it to the dist directory. The production version of the website is optimized for performance and minified to reduce its size.

