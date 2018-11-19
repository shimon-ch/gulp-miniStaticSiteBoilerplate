import gulp from 'gulp'
import css from './gulp/tasks/css.js'
import js from './gulp/tasks/js'
import image from './gulp/tasks/image'
import watch from './gulp/tasks/watch'
import build from './gulp/tasks/build'

gulp.registry(css)
gulp.registry(js)
gulp.registry(image)
gulp.registry(watch)
gulp.registry(build)