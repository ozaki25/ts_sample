'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const webserver = require('gulp-webserver');
const ts = require("gulp-typescript");
const tsify = require("tsify");
const tslint = require("gulp-tslint");

gulp.task('build', () => {
    runSequence(['browserify']);
});

gulp.task('browserify', () => {
    browserify({
        basedir: '.',
        debug:   true,
        entries: ['ts/app.ts'],
        cache: {},
        packageCache: {}
    })
        .plugin(tsify, {
            "noImplicitAny": true,
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
    gulp.watch('./ts/**/*.ts', ['build', 'tslint']);
});

gulp.task('server', () => {
    gulp.src('./')
        .pipe(webserver({
            host: '127.0.0.1',
            livereload: true
        })
    );
});

gulp.task("tslint", () => {
    gulp.src('./ts/**/*.ts')
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report())
});

gulp.task('default', ['build', 'watch', 'server', 'tslint']);
