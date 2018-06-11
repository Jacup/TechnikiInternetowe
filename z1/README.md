## My Gulp 101

Zainstaluj [node](https://nodejs.org/en/). Następnie zainstaluj:
[Gulp](https://gulpjs.com) which automate and enhance your workflow oraz
[Browsersync](https://browsersync.io/#instal).
Przeczytaj też [Browsersync + Gulp.js](https://www.browsersync.io/docs/gulp).

### Konfiguracja środowiska do pracy z HTML5+CSS3+JavaScript.

* Edytory:
  * [Atom](https://atom.io) – a hackable text editor for the 21st Century.
    - [Atom Flight Manual](https://atom.io/docs/latest/) – the latest version
    - [Keyboard shortcuts](https://github.com/nwinkler/atom-keyboard-shortcuts)
    - [Linters](http://atomlinter.github.io) –
      [linter-htmllint](https://github.com/htmllint/htmllint/wiki/Options[options]),
      SCSS, ESlint, …
  * [Visual Studio Code](https://code.visualstudio.coma/download) edytor.
* [Gulp](http://gulpjs.com) – a toolkit for automating painful or
  time-consuming tasks in your development workflow, so you can stop
  messing around and build something. (old stuff)
* [Git](https://git-scm.com/book/en/v2):
  - [GitHub Account Setup and Configuration](https://git-scm.com/book/en/v2/GitHub-Account-Setup-and-Configuration)
  - M. Hartl, [Learn Enough Git to Be Dangerous](https://www.learnenough.com/git-tutorial)


### Kilkanaście(!) użytecznych poleceń

```sh
## Użyteczne pakiety, ale na razie można je pominąć(?)
npm install --global gulp-cli     # used when run: gulp -T
npm install --global browser-sync # ułatwia korzystanie z programu browser-sync

# W pustym katalogu wykonaj polecenie
npm init

npm install --save-dev gulp
npm install --save-dev browser-sync

# How to get help on some NPM command?
npm help ls
npm ls --global --long --depth 0
```

Instalacja pakietów z pliku **_packages.json_**:

```sh
npm install # https://docs.npmjs.com/getting-started/using-a-package.json
# List available tasks
gulp -T
gulp # run the default task from gulpfile.js
# in our gulpfile.js it starts Browsersync on localhost:3000
```

Uruchamiamy edytor Atom i zmieniamy kolor w pliku
_style.scss_ (**format SASS**).


### Nowy projekt H5C3J

Utwórz nowe repozytorium i wykonaj te polecenia w głównym katalogu repozytorium.

```sh
npm init                                # tworzy plik package.json
npm install --save-dev gulp browser-sync
# dodaj swój plik gulpfile.js
# run the default task
#   gulp
```

Nie zapomnij dodać do pliku **.gitignore** katalog **_node_modules_**.


### AJAX

Eloquent JavaScript:

* http://eloquentjavascript.net/10_modules.html
* http://eloquentjavascript.net/12_browser.html
* http://eloquentjavascript.net/13_dom.html
* http://eloquentjavascript.net/14_event.html


### CORS

* [Using CORS](https://www.html5rocks.com/en/tutorials/cors/)
* [HTTP access control (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)

The code below is copied from http://www.test-cors.org/.

```js
var createCORSRequest = function(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // Most browsers.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // IE8 & IE9
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
};

var url = 'http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html';
var method = 'GET';
var xhr = createCORSRequest(method, url);

xhr.onload = function() {
  console.log('CORS is enabled');
};
xhr.onerror = function() {
  console.log('CORS requests are not available');
};
xhr.send();
```

Promises…

```js
get(url2).then(
  function(text) {
    console.log(JSON.parse(text).articles[1].title);
  },
  function(error) {
    console.log('Failed to fetch data: ' + error);
  }
);
```
