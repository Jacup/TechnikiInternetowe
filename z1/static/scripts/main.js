// alert("hello from main.js");

console.log("hello from main.js");

// Modern JavaScript Explained For Dinosaurs

// How to install moments library:
//  http://momentjs.com/

// 1. Download

// 2. NPM
//    npm init
//    npm install moment --save
//    add this script tag to head in index.html
//  Uncomment these lines

// console.log(moment().startOf('day').fromNow());

// 3. Alternatively use Webpack

//    npm install webpack --save-dev

//  Change index.html to use bundle.js instead of main.js and run
//    $ ./node_modules/.bin/webpack scripts/main.js scripts/bundle.js

// Uncomment these lines

// console.log("hello from bundle.js");

// var moment = require('moment');
// console.log(moment().startOf('day').fromNow());

// Add webpack.config.js
// Run
//    $ ./node_modules/.bin/webpack

// 4. Transpiling with Babel
//    $ npm install babel-core babel-preset-env babel-loader --save-dev
//  Edit web.config.js

// Replace require with import
//
// import moment from 'moment';
//
// console.log("hello from transpiled with Babel bundle.js");
//
// console.log(moment().startOf('day').fromNow());
// var name = "Wlodek", time = "today";
// console.log(`Hello ${name}. How are you ${time}?`);

// ./node_modules/.bin/webpack

// 5. Using a task runner
//    Update packages.js
//  Run
//    $ npm run build
//  Run in separate tab:
//    $ npm run watch
