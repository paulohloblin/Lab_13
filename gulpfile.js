let gulp = require ('gulp');
let sass = require ('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))

});

gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
    //https://stackoverflow.com/questions/39665773/gulp-error-watch-task-has-to-be-a-function
})