/**
 * Gulp Task:  build
 *
 */

import Registry from 'undertaker-registry'

class Build extends Registry {
  init(gulp) {
    gulp.task('build', done => {
      console.log('test')
      done()
    })
  }
}

export default new Build()