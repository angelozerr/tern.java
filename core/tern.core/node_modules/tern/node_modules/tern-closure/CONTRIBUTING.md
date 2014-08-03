# Contributing to tern-closure

tern-closure welcomes bug fixes and patches.

Before making changes that interface with the core Tern library, it might be a
good idea to read the [Tern reference manual][tern-ref] and [blog
post][tern-blog], which together give a pretty good overview of how Tern works.
The core Tern code is quite dense, and not the kind of code you grok on first
read.

## Tests

Currently, all of tern-closure's tests use Tern's nifty [test
framework][tern-tests]. Test cases are in the `test/cases` directory, and
consist of sample code to parse interspersed with comments which serve as
assertions on inference results.

To run all of the tests, run:

```
node test/runcases.js
```

or

```
npm test
```

You can restrict the tests to a particular case file by passing the filename as
an argument.

Pull requests with failing tests will not be accepted, and tests should be added
for new behavior.


## Style

tern-closure favors the more roomy style of the Closure library over the compact
style of the Tern core. We follow the [Google JavaScript style guide][jsstyle],
including JSDoc for methods.

You can lint your changes using and [gjslint][gjslint] (the Google Closure
linter) and [JSHint][jshint]:

```
gjslint --flagfile=.gjslintflags
jshint .
```

Simple `gjslint` errors can be automatically fixed using `fixjsstyle`:

```
fixjsstyle --flagfile=.gjslintflags
```

## Licensing

In all cases, contributors must sign a contributor license agreement with
Google,
either for an individual or corporation, before a patch/pull request can be
accepted. Please fill out the agreement for an individual or a
corporation, as appropriate.

* https://developers.google.com/open-source/cla/individual

* https://developers.google.com/open-source/cla/corporate

[tern-ref]: http://ternjs.net/doc/manual.html
[tern-blog]: http://marijnhaverbeke.nl/blog/tern.html
[tern-tests]: https://github.com/marijnh/tern/blob/master/test/runcases.js
[jsstyle]: http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml
[jshint]: http://www.jshint.com/
[gjslint]: https://developers.google.com/closure/utilities/
