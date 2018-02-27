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
gulp.task('js', ['jshint'], function () { // FIXME
  return gulp.src([
    './assets/js/src/*.js'
  ])
  .pipe(sourcemaps.init({loadMaps: true}))
  // .pipe(babel({
  //   presets: ['env']
  // }))
  .pipe(concat('script.js'))
  .on('error', function (err) {
    console.log(err.toString());
    this.emit("end");
  })
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./assets/js'))
  .pipe(uglify())
  .pipe(rename({extname: '.min.js'}))
  .pipe(gulp.dest('./assets/js'))
  .pipe(browserSync.reload({stream:true}))
  .pipe(notify({message: 'Task: JS Completed', onLast: true}));
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

// gulp.task('styles', function () {
//   gulp.src('./scss/style.scss')
//     .pipe(sass({
//       includePaths: './scss/**/*.scss',
//       outputStyle:'compressed'
//     }))
//     .pipe(sourcemaps.init())
//     .pipe(sass().on('error', sass.logError))
//     .pipe(sourcemaps.write('./assets/css/'))
//     .pipe(gulp.dest('./assets/css/'))
//     .pipe(notify({message: 'Task: Styles Completed!'}))
// });

//
// Task: styles
// 1. Sass configuration
// 2. Autoprefix
// 2b. line correction
// 3. Write uncompressed file to css folder
// 4. Compress file
// 5. Write min file to css folder
//
gulp.task('styles', function() {
  return gulp.src('./assets/scss/**/*.scss')
        .pipe(sass({
          outputStyle: 'compressed'
        }))
        .pipe(sass().on('error', function(){
          notify({message: sass.logError, onLast: true});
          this.emit('end');
        }))
        .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe(lineEndCorrector()) // Consistent Line Endings for non UNIX systems.
        .pipe(gulp.dest('./assets/css/'))
        .pipe(uglifycss())
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest('./assets/css/'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(notify({message: 'Task: Styles Completed!', sound: false}));
});

// Watch Tasks for Reloading
gulp.task('default', ['styles', 'js', 'browser-sync'], function () {
  gulp.watch("../plugins/**/*.php", reload); // PHP Changes
  gulp.watch("./assets/scss/**/*.scss", ['styles']); // Sass changes
  gulp.watch("./assets/js/src/*.js", ['js']); // JS changes
  gulp.watch("./content/**/*.htm").on('change', browserSync.reload); // Reload template files on change
  gulp.watch("./layouts/**/*.htm").on('change', browserSync.reload);
  gulp.watch("./pages/**/*.htm").on('change', browserSync.reload);
  gulp.watch("./partials/**/*.htm").on('change', browserSync.reload);
});
