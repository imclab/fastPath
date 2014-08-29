transposer [![Build Status](https://travis-ci.org/krakenjs/kraken-devtools.png)](https://travis-ci.org/pvenkatakrishnan/transposer)
==========

An attempt at an optimized jsonpath parser

Check the spec here:
http://goessner.net/articles/JsonPath/

The tape tests have most of the patterns supported by the spec.

|  Pattern |  Description |
|---|---|
|  $ |  the root object/element |
|  @ |  the current object/element |
|  . or [] | child operator  |
|  .. | recursive descent |
| * | wildcard - All objects/elements regardless of their names |
| [] | Native array operator |
| [,] | Names or array indices |
| [start : end : step] | Slices subset of the array based on the start, end and step values |
| ?() | applies a filter |

