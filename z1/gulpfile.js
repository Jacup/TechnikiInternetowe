const gulp        = require('gulp');
const browserSync = require('browser-sync').create();

const sass        = require('gulp-sass');
const jshint      = require('gulp-jshint');
const asciidoctor = require('gulp-asciidoctor');

const del = require('del');

const paths = {
  styles: {
    src: 'src/scss/**/*.scss',
    dest: 'docs/assets/stylesheets/'
  },
  scripts: {
    src: 'src/scripts/**/*.js',
    dest: 'docs/assets/javascripts/'
  },
  html: {
    src: 'src/html/*.html',
    dest: 'docs/'
  },
  images: {
    src: 'src/images/*.jpg',
    dest: 'docs/assets/images/'
  },
  adoc: {
    src: 'src/adoc/*.adoc',
    dest: 'docs/'
  }
};

var reload = browserSync.reload;

gulp.task('serve', ['html', 'images', 'sass', 'lint'], function() {
  browserSync.init({
    server: "docs",
    browser: ["firefox"],
    // browser: ["google chrome"],
    // browser: ["firefox", "google chrome"],
    index: "index.html"
    // directory: true
  });

  gulp.watch(paths.images.src, ['images']);

  gulp.watch(paths.styles.src, ['sass']);
  gulp.watch(paths.scripts.src, ['lint']);

  gulp.watch(paths.adoc.src, ['adoc']);

  gulp.watch(paths.html.src, ['html']);
  // watch scss AND html files, doing different things with each.
  // gulp.watch("*.html").on("change", reload);
});

gulp.task('clean', function() {
  return del(['docs/*.html', '!docs/unicorn.html']).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
  });
});

gulp.task('sass', function() {
  return gulp.src(paths.styles.src)
    .pipe(sass())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream()); // auto-inject into browsers
});

gulp.task('lint', function() {
  return gulp.src(paths.scripts.src)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream()); // auto-inject into browsers
});

gulp.task('html', function() {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());
});

gulp.task('images', function() {
  return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest));
    // .pipe(browserSync.stream());
});

gulp.task('adoc', function() {
  return gulp.src(paths.adoc.src)
    .pipe(asciidoctor({
      safe: 'safe', // unsafe, safe, server or secure
      doctype: 'article',
      header_footer: true,
      attributes: ['showtitle']
    }))
    .pipe(gulp.dest(paths.adoc.dest))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

// TODO

// process JS files and return the stream.
// gulp.task('js', function () {
//   return gulp.src('js/*js')
//   .pipe(browserify())
//   .pipe(uglify())
//   .pipe(gulp.dest('dist/js'));
// });

// create a task that ensures the `js` task is complete before
// reloading browsers
// gulp.task('js-watch', ['js'], function (done) {
//   browserSync.reload();
//   done();
// });
