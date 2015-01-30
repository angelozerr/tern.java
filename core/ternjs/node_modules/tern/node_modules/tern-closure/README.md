# tern-closure

[tern-closure][tern-closure] is a plugin which adds support for [Closure
Compiler annotations][compiler] and the [Closure Library][library] to the
Javascript code intelligence system [Tern][tern].

## Installation

Currently, tern-closure only works with the NodeJS [Tern Server][tern-server],
and not within a browser.

The easiest way to install tern-closure is to use a recent version of
[npm][npm]. In the directory where you installed the [tern package][tern-npm],
simply run

```
$ npm install tern-closure
```

<!-- TODO: Mention global installation once supported. -->
<!-- TODO: Rundown of setup with common plugins. -->

## Configuration

In order for Tern to load the tern-closure plugin once it is installed, you must
include `closure` in the `plugins` section of your [Tern configuration
file][tern-config]. You must also explicitly disable the default `doc_comment`
plugin, which will interfere with tern-closure.

Here is a minimal example `.tern-project` configuration file:

```json
{
  "plugins": {
    "doc_comment": false,
    "closure": {}
  }
}
```

### Options
 * `finder` Configuration for finding the files that provide types. See
   [Finders][finders] below. *Optional. Default: None.*
 * `debug` Whether tern-closure should print debug output. *Optional. Default:
   Match Tern `debug` option.*

### Finders

tern-closure uses "finders" to find the files providing Closure names via
`goog.provide`. Finders allow tern-closure to load and interpret the files
providing names required via `goog.require` or referenced in JSDoc type strings
so it better understands the context of a given file.

The `finder` section of the options object for `closure` in your `.tern-project`
file specifies what finder implementation you want to use, and what options you
want to pass to the finder. By default, no finder is used, and files are not
automatically loaded. Currently, only one finder implementation is included with
tern-closure, `grep`.

*Common finder options:*
 * `name` The name of the finder you want to use. *Required.*
 * `debug` Whether the finder should print debug output. *Optional. Default:
   Match tern-closure `debug` option.*

#### grep

`grep` is a basic finder which uses the `grep` command-line utility to search
for `goog.provide` statements at startup and create a map of Closure names to
providing files.

*Options:*

 * `dirs` An array of path strings indicating which directories to search for
   files. Paths can either be absolute, or relative to the project directory.
   *Optional. Default: `['.']` (just the project directory).*

Here is an example `.tern-project` file:

```json
{
  "plugins": {
    "doc_comment": false,
    "closure": {
      "finder": {
        "name": "grep",
        "dirs": [
          "relevant/project/subdir",
          "/absolute/path/to/library"
        ]
      }
    }
  }
}
```

#### Additional finders

You can easily use a finder not included in this repository, or implement your
own. This allows you to search for names in different ways, on demand, and to
use existing indexes of your codebase.

Given a finder name `name`, tern-closure first looks in its own `lib/finder`
directory, then attempts to load `name` using `require()`, so a third-party
finder module can be installed as an npm package.

A finder module must implement a simple interface:

 * It must export a constructor `function(projectDir: string, options: Object)`
   which takes the project directory and an options object as parameters.
   Options are specified in the Tern configuration file.
 
 * Instances of that constructor must have a method `findFile(name: string, cb:
   function(file: string))`, which takes as arguments a Closure name `name` to
   find and a callback function `cb` to call with the path to file providing
   `name`. `cb` should be called asynchronously, even if the providing file is
   known when `findFile` is called. This allows finders to execute I/O
   operations to find files on demand.

Please note that while tern-closure is in a `0.X.X` release, the finder API may
be subject to breaking changes.

## Bug reports and feature requests

Please file bug reports and feature requests as issues on the [issues
page][tern-closure-issues] of the tern-closure repository.

## Contributing

Pull requests to tern-closure are welcome. Please see the
[CONTRIBUTING.md][contributing] file for requirements and guidelines.

Disclaimer: tern-closure is not an official Google product, and is maintained on
a best-effort basis.

[tern-closure]: https://github.com/google/tern-closure
[tern-closure-issues]: https://github.com/google/tern-closure/issues
[tern]: http://ternjs.net
[tern-server]: http://ternjs.net/doc/manual.html#server
[compiler]: https://developers.google.com/closure/compiler/docs/js-for-compiler
[library]: https://developers.google.com/closure/library/
[npm]: https://www.npmjs.org/
[tern-npm]: https://www.npmjs.org/package/tern
[tern-config]: http://ternjs.net/doc/manual.html#configuration
[finders]: https://github.com/google/tern-closure#finders
[contributing]: https://github.com/google/tern-closure/blob/master/CONTRIBUTING.md
