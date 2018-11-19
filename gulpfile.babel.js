import gulp from 'gulp'
import css from './gulp/tasks/css.js'
import js from './gulp/tasks/js'
import imagemin from './gulp/tasks/image'
import reload from './gulp/tasks/reload'
import watch from './gulp/tasks/watch'
import build from './gulp/tasks/build'

gulp.registry(css)
gulp.registry(js)
gulp.registry(imagemin)
gulp.registry(reload)
gulp.registry(watch)
gulp.registry(build)