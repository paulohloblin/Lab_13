var gulp = require ('gulp');
var sass = require ('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))

});

gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
    // для watch в gulp 4.0 + больше нельзя вставлять просто имя функции
    //https://stackoverflow.com/questions/39665773/gulp-error-watch-task-has-to-be-a-function
})