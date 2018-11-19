/**
 * Gulp Task:  Watch
 *
 */

import Registry from 'undertaker-registry'
import browserSync from 'browser-sync'

class Reload extends Registry {
  init(gulp) {
    gulp.task('reload', callback => {
      browserSync.reload()
      callback()
    })
  }
}

export default new Reload()