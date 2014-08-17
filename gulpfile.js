var gulp = require('gulp');
var raml2html = require('gulp-raml2html');

var paths = {
  raml: ['raml/**/*']
};

gulp.task('default', ['doc']);

gulp.task('doc', function() {
  gulp.src(paths.raml)
    .pipe(raml2html())
    .on('error', handleError)
    .pipe(gulp.dest('build'))
    .on('error', handleError);
});

gulp.task('watch', function() {
  gulp.watch(paths.raml, ['doc']);
});

function handleError(err) {
  console.log(err.toString())
  this.emit('end')
}
