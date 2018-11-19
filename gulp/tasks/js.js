/**
 * Gulp Task:  Js
 *
 */

import Registry from 'undertaker-registry'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import newer from 'gulp-newer'
import babel from 'gulp-babel'
import prettierPlugin from 'gulp-prettier-plugin'

class Js extends Registry {
  init(gulp) {
    gulp.task('js', () => {
      return (
        gulp.src('source/js/**/*.js')
          .pipe(newer('public/assets/js'))
          .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>'),
          }))
          .pipe(babel({
            presets: ['@babel/env']
          }))
          .pipe(gulp.dest('public/assets/js'))
      )
    })
  }
}

export default new Js()