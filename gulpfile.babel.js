// ---------  ALL REQUIRED PLUGIN ---------- //
import gulp from 'gulp';

import rename from "gulp-rename";
import browserSync from 'browser-sync';
import { reload } from 'browser-sync';
import sass from 'gulp-sass';
import autoPrefixer from 'gulp-autoprefixer';
import imagemin from 'gulp-imagemin';

// ------------ ERROR HANDLING ------------- //

function errorLog(error) {
  console.error.bind(error);
  this.emit('end');
}

// -------------- SCRIPT TASK -------------- //

gulp.task('script', function () {
  gulp.src('app/js/scriptMain.js')
    .pipe(rename("script.js"))
    .pipe(gulp.dest('app/js/'))
    .pipe(reload({
      stream: true
    }));
});


//  ES6 SCRIPT TASK //

gulp.task('es6-script', function () {
  gulp.src('app/js/es6-scriptMain.js')
    .pipe(rename("es6-script.js"))
    .pipe(gulp.dest('app/js/'))
    .pipe(reload({
      stream: true
    }));
});

// --------------- STYLES TASK -------------- //

gulp.task('style', function () {
  gulp.src('app/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .on('error', console.error.bind(console))
    .pipe(autoPrefixer('last 2 versions'))
    .pipe(gulp.dest('app/css/'))
    .pipe(reload({
      stream: true
    }));
});

//  ES6 STYLE TASK //

gulp.task('es6-style', function () {
  gulp.src('app/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .on('error', console.error.bind(console))
    .pipe(autoPrefixer('last 2 versions'))
    .pipe(gulp.dest('app/css/'))
    .pipe(reload({
      stream: true
    }));
});

// ------------ IMAGE COMPRESSION ----------- //

gulp.task('image', function () {
  gulp.src('app/resources/images/*')
    .pipe(imagemin([
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 5
      }),
      imagemin.svgo({
        plugins: [{
          removeViewBox: true
        }]
      })
    ]))
    .pipe(gulp.dest('app/images'));
});

// --------------- HTML TASK --------------- //

gulp.task('html', function () {
  gulp.src('app/**/*.html')
    .pipe(reload({
      stream: true
    }))
});

// Browser-sync Task //
gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: "./app/"
    }
  });
});

// --------------- WATCH TASK -------------- //

gulp.task('watch', function () {
  gulp.watch('app/scss/**/*.scss', ['style', 'es6-style'])
  gulp.watch('app/**/*.html', ['html'])
  gulp.watch('app/js/*.js', ['script', 'es6-script'])
});

// --------------- DEFAULT TASK -------------- //

gulp.task('default', ['script', 'es6-script', 'html', 'style', 'image', 'browser-sync', 'watch']);