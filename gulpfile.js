var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var babel = require("gulp-babel");

gulp.task('build', function() {
  return gulp.src("week4/src/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("week4/dist"));
});

gulp.task('dev', gulp.series('build', function() {
    return nodemon({
        script: 'week4/dist/jane.js',
        ext: 'js',
        ignore: ['week4/dist/'],
        env: { 'NODE_ENV': 'development' },
        tasks: ['build']
    });
}));