/**
 * Gulp Task:  Watch
 *
 */

import Registry from 'undertaker-registry'
import browserSync from 'browser-sync';
import config from '../../project.config'

class Watch extends Registry {
  init(gulp) {
    gulp.task('watch', () => {
      browserSync.init({
        server: {
          baseDir: 'public/',
        },
      })

      gulp.watch('source/sass/**/*.scss', gulp.series(config.defaultTasks.css))
      gulp.watch('source/js/**/*.js', gulp.series(config.defaultTasks.js, config.defaultTasks.reload))
      gulp.watch('source/img/**/*', gulp.series(config.defaultTasks.image))
    })
  }
}

export default new Watch()

// TODO
// publicディレクトリをコピーしつつ、htmlをsjisに変換(変換するかどうかは判定有りにするかも)
// Cmd+CでWatch終了