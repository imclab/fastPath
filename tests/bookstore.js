'use strict';
var Transposer = require('../lib/transposer'),
    jsonPath = require ('JSONPath'),
    test = require('tape'),
    _ = require('lodash');

test('transposer', function (t) {

    var obj = { "store": {
            "book": [
                { "category": "reference",
                    "author": "Nigel Rees",
                    "title": "Sayings of the Century",
                    "price": 8.95
                },
                { "category": "fiction",
                    "author": "Evelyn Waugh",
                    "title": "Sword of Honour",
                    "price": 12.99
                },
                { "category": "fiction",
                    "author": "Herman Melville",
                    "title": "Moby Dick",
                    "isbn": "0-553-21311-3",
                    "price": 8.99
                },
                { "category": "fiction",
                    "author": "J. R. R. Tolkien",
                    "title": "The Lord of the Rings",
                    "isbn": "0-395-19395-8",
                    "price": 22.99
                }
            ],
                "bicycle": {
                "color": "red",
                    "price": 19.95
            }
        }
    };

    t.test('should be able to parse simple object refs', function (t) {

        var exp = '$.store.book[*].author',
            tr = new Transposer(exp);
        t.deepEqual(tr.eval(obj), jsonPath.eval(obj, exp));
        t.end();
    });

    t.test('should be able to parse simple object refs', function (t) {

        var exp = '$..author',
            tr = new Transposer(exp);
        t.deepEqual(tr.eval(obj), jsonPath.eval(obj, exp));
        t.end();
    });


    t.test('should be able to parse simple object refs', function (t) {

        var exp = '$.store.*',
            tr = new Transposer(exp);
        t.deepEqual(tr.eval(obj), jsonPath.eval(obj, exp));
        t.end();
    });


    t.test('should be able to parse simple object refs', function (t) {

        var exp = '$.store..price',
            tr = new Transposer(exp);
        t.deepEqual(tr.eval(obj), jsonPath.eval(obj, exp));
        t.end();
    });


    t.test('should be able to parse simple object refs', function (t) {

        var exp = '$..book[2]',
            tr = new Transposer(exp);
        t.deepEqual(tr.eval(obj), jsonPath.eval(obj, exp));
        t.end();
    });


    t.test('should be able to parse simple object refs', function (t) {

        var exp = '$..book[(@.length-1)]',
            tr = new Transposer(exp);
        t.deepEqual(tr.eval(obj), jsonPath.eval(obj, exp));
        t.end();
    });

    /*t.test('should be able to parse simple object refs', function (t) {

        var exp = '$..book[-1:]',
            tr = new Transposer(exp);
        t.deepEqual(tr.eval(obj), jsonPath.eval(obj, exp));
        t.end();
    });*/

    t.test('should be able to parse simple object refs', function (t) {

        var exp = '$..book[0,1]',
            tr = new Transposer(exp);
        t.deepEqual(tr.eval(obj), jsonPath.eval(obj, exp));
        t.end();
    });

    /*t.test('should be able to parse simple object refs', function (t) {

        var exp = '$..book[:2]',
            tr = new Transposer(exp);
        t.deepEqual(tr.eval(obj), jsonPath.eval(obj, exp));
        t.end();
    });*/

    t.test('should be able to parse simple object refs', function (t) {

        var exp = '$..book[?(@.isbn)]',
            tr = new Transposer(exp);
        t.deepEqual(tr.eval(obj), jsonPath.eval(obj, exp));
        t.end();
    });

    t.test('should be able to parse simple object refs', function (t) {

        var exp = '$..book[?(@.price<10)]',
            tr = new Transposer(exp);
        t.deepEqual(tr.eval(obj), jsonPath.eval(obj, exp));
        t.end();
    });

    t.test('should be able to parse simple object refs', function (t) {

        var exp = '$..*',
            tr = new Transposer(exp);
        t.deepEqual(_.difference(tr.eval(obj), jsonPath.eval(obj, exp)), []);
        t.end();
    });

});
