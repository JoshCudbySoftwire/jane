var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var babel = require("gulp-babel");

gulp.task('build', function() {
  return gulp.src("src/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('dev', gulp.series('build', function() {
    return nodemon({
        script: 'dist/jane.js',
        ext: 'js',
        ignore: ['dist/'],
        env: { 'NODE_ENV': 'development' },
        tasks: ['build']
    });
}));