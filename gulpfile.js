var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var babel = require("gulp-babel");
var run = require('gulp-run');

gulp.task('build', function() {
  return gulp.src("src/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('dev', gulp.series('build', function() {
    return nodemon({
        script: 'dist/index.js',
        ext: 'js',
        ignore: ['dist/', 'test/'],
        env: { 'NODE_ENV': 'development' },
        tasks: ['build', 'test']
    });
}));

gulp.task('test', () => {
    return run("mocha test/**/*.js --require babel-core/register").exec();
})

gulp.task('background-test', (done) => {
    return nodemon({
        script: "banter.js",
        ext: 'js',
        ignore: ['dist/'],
        tasks: ['test'],
        done: done
    });
});
