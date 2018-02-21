/**
 * Gulp Configuration File
 *
 * @author Analia Mok
 */

/*
  Project Information
 */
var project = 'analiamok';
var projectUrl = "localhost/analiamok";

// Browsers you care about for autoprefixing.
// Browserlist https://github.com/ai/browserslist
var AUTOPREFIXER_BROWSERS = [
  'last 2 version',
  '> 1%',
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4',
  'bb >= 10'
];

/*
  Dependencies
 */
var gulp = require('gulp');

// CSS Related
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var minifyCSS = require('gulp-csso');

// JS Related
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var jshintStyle = require('jshint-stylish');
var babel = require('gulp-babel');

// Utility
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload();
var notify = require('gulp-notify');
var pump = require('pump');
var plumber = require('gulp-plumber');
var lineEndCorrector = require('gulp-line-ending-corrector');

/*
  Tasks
*/

// BrowserSync
gulp.task('browser-sync', function () {
  browserSync.init({

    // Project URL.
    proxy: projectUrl,
    open: true,

    // Inject CSS changes.
    // Commnet it to reload browser for every CSS change.
    injectChanges: true,

    // Use a specific port (instead of the one auto-detected by Browsersync).
    //port: 80,

  });
});

// JS Tasks
// - Babel Compilation
// - Script Concatenation
// - Uglifies/Minifies Concatenated script
gulp.task('js', ['jshint'], function () {
  return gulp.src([
    './assets/js/main.js',
  ])
  .pipe(babel({
    presets: ['env']
  }))
  .pipe(concat('main.js'))
  .on('error', function (err) {
    console.log(err.toString());
    this.emit("end");
  })
  .pipe(gulp.dest('./dist/'))
  .pipe(uglify())
  .pipe(rename({extname: '.min.js'}))
  .pipe(gulp.dest('./dist/js'))
  .pipe(notify({message: 'JavaScript Compilation Completed', onLast: true}));
});

gulp.task('jshint', function () {
  return gulp.src('./assets/js/**/*.js')
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter(jshintStyle))
    .on('error', notify.onError(function (error) {
      return error.message;
    }))
});

// Sass Compilation
gulp.task('sass', function () {
  return gulp.src('./assets/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', function(){
      notify({message: sass.logError, onLast: true});
      this.emit('end');
    }))
    .pipe(sourcemaps.write({includeContent: false}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(sourcemaps.write(''))
    .pipe(lineEndCorrector()) // Consistent Line Endings for non UNIX systems.
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream())
    .pipe(notify({message: 'Sass Compilation Successfully', onLast: true}));
});

// Watch Tasks for Reloading
gulp.task('default', ['sass', 'js', 'browser-sync'], function () {
  gulp.watch("../plugins/**/*.php", reload); // PHP Changes
  gulp.watch("./assets/sass/**/*.scss", ['sass']); // Sass changes
  gulp.watch("./assets/js/*.js", ['js', reload]); // JS changes
});
