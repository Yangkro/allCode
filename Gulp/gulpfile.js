// 引入gulp
const gulp = require('gulp')
// 使用gulp.task 创建任务
gulp.task('first', () => {
  console.log('第一个gulp任务执行了')

  // 使用gulp获取要执行的文件
  gulp.src('./src/css/base.css')
  .pipe(gulp.dest('dist/css'))
})