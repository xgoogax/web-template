var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var inject = require('gulp-inject');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function(){
   return gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(rename('main.css'))
    .pipe(gulp.dest('./css'))
});

gulp.task('inject', ['sass'], function () {
  var target = gulp.src('./index.html');
  var sources = gulp.src(['./css/main.css'], {read: false});
 
  return target.pipe(inject(sources))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({stream: true})) //browserreload
});

gulp.task('default', ['inject'], function(){
    browserSync.init({
       server: {
           baseDir: "./"
       }
   });
    gulp.watch('./sass/*/*.scss',['inject']);
});
