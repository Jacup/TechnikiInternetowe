var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    asciidoctor = require('gulp-asciidoctor'),
    del = require('del');

gulp.task('styles', function() {
  return sass('src/styles/**/*.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', function() {
  return gulp.src('src/scripts/**/*.js')
    // .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(imagemin({ optimizationLevel: 7, progressive: true, interlaced: true }))
    .pipe(gulp.dest('dist/assets/img'))
    .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('clean', function() {
  return del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img']);
});

gulp.task('adoc', function() {
  return gulp.src('src/articles/**/*.adoc')
    // .pipe(asciidoctor({ header_footer: false, attributes: ['showtitle'] }))
    .pipe(asciidoctor({ base_dir: 'pwd', attributes: ['showtitle'] }))
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'ADoc task complete' }));
});

gulp.task('watch', function() {
  // watch .scss files
  gulp.watch('src/styles/**/*.scss', ['styles']);
  // watch .js files
  gulp.watch('src/scripts/**/*.js', ['scripts']);
  // watch image files
  gulp.watch('src/images/**/*', ['images']);
  // watch asciidoctor files
  gulp.watch('src/articles/**/*.adoc', ['adoc']);
});

gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'images', 'adoc');
});
