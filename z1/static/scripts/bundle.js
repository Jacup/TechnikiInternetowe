/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 120);
/******/ })
/************************************************************************/
/******/ ({

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ })

/******/ });