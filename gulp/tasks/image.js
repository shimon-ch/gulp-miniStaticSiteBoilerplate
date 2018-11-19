/**
 * Gulp Task:  Imagemin
 *
 */

import Registry from 'undertaker-registry'
import browserSync from 'browser-sync'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import newer from 'gulp-newer'
import imagemin from 'gulp-imagemin'
import pngquant from 'imagemin-pngquant'
import mozjpeg from 'imagemin-mozjpeg'

class Imagemin extends Registry {
  init(gulp) {
    gulp.task('imagemin', () => {
      return (
        gulp.src('source/img/**')
          .pipe(newer('public/assets/img'))
          .pipe(
            plumber({
              errorHandler: notify.onError('<%= error.message %>'),
            })
          )
          .pipe(
            imagemin([
              pngquant({
                quality: '75-85', // 画質
                speed: 1, // 最低のスピード
                floyd: 0, // ディザリングなし
              }),
              mozjpeg({
                quality: 85, // 画質
                progressive: true,
              }),
              imagemin.svgo(),
              imagemin.optipng(),
              imagemin.gifsicle(),
            ])
          )
          .pipe(gulp.dest('public/assets/img'))
          .pipe(browserSync.stream())
      )
    })
  }
}

export default new Imagemin()