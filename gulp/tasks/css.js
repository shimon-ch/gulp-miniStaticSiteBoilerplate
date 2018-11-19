/**
 * Gulp Task:  Css
 *
 */

import Registry from 'undertaker-registry'
import browserSync from 'browser-sync'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import newer from 'gulp-newer'
import sass from 'gulp-sass'
import packageImporter from 'node-sass-package-importer'
import postcss from 'gulp-postcss'
import postcssPresetEnv from 'postcss-preset-env'
import cssmqpacker from 'css-mqpacker'
import cssnano from 'cssnano'

class Css extends Registry {
  init(gulp) {
    gulp.task('css', () => {
      const sassOptions = {
        outputStyle: 'expanded',
        sourceComments: false,
        importer: packageImporter({
          extensions: ['.scss', '.css']
        })
      }

      const postcssOptions = [
        postcssPresetEnv({
          browsers: [
            'last 2 versions',
            'Android >= 6.0'
          ],
          autoprefixer: {
            grid: true
          }
        }),
        cssnano(),
        cssmqpacker()
      ]

      return (
        gulp.src('source/sass/**/*.scss')
          .pipe(newer('public/assets/css'))
          .pipe(plumber({
            errorHandler: notify.onError('<%= error.message %>'),
          }))
          .pipe(sass(sassOptions))
          .pipe(gulp.dest('public/assets/css'))
          .pipe(postcss(postcssOptions))
          .pipe(gulp.dest('public/assets/css'))
          .pipe(browserSync.stream())
      )
    })
  }
}

export default new Css()