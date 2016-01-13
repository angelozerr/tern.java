(function(mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
        return mod(require("tern/lib/infer"), require("tern/lib/tern"));
    if (typeof define == "function" && define.amd) // AMD
        return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
    mod(tern, tern);
})(function(infer, tern) {
    "use strict";
    
  tern.registerPlugin("protractor", function(server, options) {
    server._protractor = {};
    return { defs : defs };
  });
    
  var defs = {
 "!name": "protractor",
 "!define": {
  "ElementArrayFinder": {
   "prototype": {
    "click": {
     "!type": "webdriver.WebElement.prototype.click"
    },
    "sendKeys": {
     "!type": "webdriver.WebElement.prototype.sendKeys"
    },
    "getTagName": {
     "!type": "webdriver.WebElement.prototype.getTagName"
    },
    "getCssValue": {
     "!type": "webdriver.WebElement.prototype.getCssValue"
    },
    "getAttribute": {
     "!type": "webdriver.WebElement.prototype.getAttribute"
    },
    "getText": {
     "!type": "webdriver.WebElement.prototype.getText"
    },
    "getSize": {
     "!type": "webdriver.WebElement.prototype.getSize"
    },
    "getLocation": {
     "!type": "webdriver.WebElement.prototype.getLocation"
    },
    "isEnabled": {
     "!type": "webdriver.WebElement.prototype.isEnabled"
    },
    "isSelected": {
     "!type": "webdriver.WebElement.prototype.isSelected"
    },
    "submit": {
     "!type": "webdriver.WebElement.prototype.submit"
    },
    "clear": {
     "!type": "webdriver.WebElement.prototype.clear"
    },
    "isDisplayed": {
     "!type": "webdriver.WebElement.prototype.isDisplayed"
    },
    "getOuterHtml": {
     "!type": "webdriver.WebElement.prototype.getOuterHtml"
    },
    "getInnerHtml": {
     "!type": "webdriver.WebElement.prototype.getInnerHtml"
    },
    "getId": {
     "!type": "webdriver.WebElement.prototype.getId"
    },
    "clone": {
     "!type": "fn() -> +ElementArrayFinder",
     "!doc": "<p>Create a shallow copy of ElementArrayFinder.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder.prototype.clone"
    },
    "all": {
     "!type": "fn(subLocator: +webdriver.Locator) -> +ElementArrayFinder",
     "!doc": "<p>Calls to ElementArrayFinder may be chained to find an array of elements\nusing the current elements in this ElementArrayFinder as the starting point.\nThis function returns a new ElementArrayFinder which would contain the\nchildren elements found (and could also be empty).</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder.prototype.all"
    },
    "filter": {
     "!type": "fn(filterFn: fn(arg0: +ElementFinder, arg1: number) -> +webdriver.WebElement.Promise) -> +ElementArrayFinder",
     "!doc": "<p>Apply a filter function to each element within the ElementArrayFinder. Returns\na new ElementArrayFinder with all elements that pass the filter function. The\nfilter function receives the ElementFinder as the first argument\nand the index as a second arg.\nThis does not actually retrieve the underlying list of elements, so it can\nbe used in page objects.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder.prototype.filter"
    },
    "get": {
     "!type": "fn(index: number) -> +ElementFinder",
     "!doc": "<p>Get an element within the ElementArrayFinder by index. The index starts at 0.\nNegative indices are wrapped (i.e. -i means ith element from last)\nThis does not actually retrieve the underlying element.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder.prototype.get"
    },
    "first": {
     "!type": "fn() -> +ElementFinder",
     "!doc": "<p>Get the first matching element for the ElementArrayFinder. This does not\nactually retrieve the underlying element.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder.prototype.first"
    },
    "last": {
     "!type": "fn() -> +ElementFinder",
     "!doc": "<p>Get the last matching element for the ElementArrayFinder. This does not\nactually retrieve the underlying element.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder.prototype.last"
    },
    "count": {
     "!type": "fn() -> +webdriver.promise.Promise",
     "!doc": "<p>Count the number of elements represented by the ElementArrayFinder.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder.prototype.count"
    },
    "locator": {
     "!type": "fn() -> +webdriver.Locator",
     "!doc": "<p>Returns the most relevant locator.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder.prototype.locator"
    },
    "each": {
     "!type": "fn(fn: fn(arg0: +ElementFinder))",
     "!doc": "<p>Calls the input function on each ElementFinder represented by the ElementArrayFinder.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder.prototype.each"
    },
    "map": {
     "!type": "fn(mapFn: fn(arg0: +ElementFinder, arg1: number)) -> +webdriver.promise.Promise",
     "!doc": "<p>Apply a map function to each element within the ElementArrayFinder. The\ncallback receives the ElementFinder as the first argument and the index as\na second arg.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder.prototype.map"
    },
    "reduce": {
     "!type": "fn(reduceFn: fn(arg0: number, arg1: +ElementFinder, arg2: number, arg3: [ElementFinder]), initialValue: ?) -> +webdriver.promise.Promise",
     "!doc": "<p>Apply a reduce function against an accumulator and every element found\nusing the locator (from left-to-right). The reduce function has to reduce\nevery element into a single value (the accumulator). Returns promise of\nthe accumulator. The reduce function receives the accumulator, current\nElementFinder, the index, and the entire array of ElementFinders,\nrespectively.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder.prototype.reduce"
    },
    "evaluate": {
     "!type": "fn(expression: string) -> +ElementArrayFinder",
     "!doc": "<p>Evaluates the input as if it were on the scope of the current underlying\nelements.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder.prototype.evaluate"
    },
    "allowAnimations": {
     "!type": "fn(value: string) -> +ElementArrayFinder",
     "!doc": "<p>Determine if animation is allowed on the current underlying elements.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder.prototype.allowAnimations"
    }
   }
  },
  "ElementFinder": {
   "prototype": {
    "click": {
     "!type": "webdriver.WebElement.prototype.click"
    },
    "sendKeys": {
     "!type": "webdriver.WebElement.prototype.sendKeys"
    },
    "getTagName": {
     "!type": "webdriver.WebElement.prototype.getTagName"
    },
    "getCssValue": {
     "!type": "webdriver.WebElement.prototype.getCssValue"
    },
    "getAttribute": {
     "!type": "webdriver.WebElement.prototype.getAttribute"
    },
    "getText": {
     "!type": "webdriver.WebElement.prototype.getText"
    },
    "getSize": {
     "!type": "webdriver.WebElement.prototype.getSize"
    },
    "getLocation": {
     "!type": "webdriver.WebElement.prototype.getLocation"
    },
    "isEnabled": {
     "!type": "webdriver.WebElement.prototype.isEnabled"
    },
    "isSelected": {
     "!type": "webdriver.WebElement.prototype.isSelected"
    },
    "submit": {
     "!type": "webdriver.WebElement.prototype.submit"
    },
    "clear": {
     "!type": "webdriver.WebElement.prototype.clear"
    },
    "isDisplayed": {
     "!type": "webdriver.WebElement.prototype.isDisplayed"
    },
    "getOuterHtml": {
     "!type": "webdriver.WebElement.prototype.getOuterHtml"
    },
    "getInnerHtml": {
     "!type": "webdriver.WebElement.prototype.getInnerHtml"
    },
    "getId": {
     "!type": "webdriver.WebElement.prototype.getId"
    },
    "then": {
     "!type": "fn(fn: fn(arg0: +webdriver.promise.Promise)) -> +webdriver.promise.Promise",
     "!doc": "<p>Access the underlying actionResult of ElementFinder.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder.prototype.then"
    },
    "clone": {
     "!type": "fn() -> +ElementFinder",
     "!doc": "<p>Create a shallow copy of ElementFinder.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder.prototype.clone"
    },
    "locator": {
     "!type": "fn() -> +webdriver.Locator",
     "!doc": "See [<code ng-non-bindable>ElementArrayFinder.prototype.locator</code>](ElementArrayFinder.prototype.locator)",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder.prototype.locator"
    },
    "getWebElement": {
     "!type": "fn() -> +webdriver.WebElement",
     "!doc": "<p>Returns the WebElement represented by this ElementFinder.\nThrows the WebDriver error if the element doesn&#39;t exist.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder.prototype.getWebElement"
    },
    "all": {
     "!type": "fn(subLocator: +webdriver.Locator) -> +ElementArrayFinder",
     "!doc": "<p>Calls to <code ng-non-bindable>all</code> may be chained to find an array of elements within a\nparent.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder.prototype.all"
    },
    "element": {
     "!type": "fn(subLocator: +webdriver.Locator) -> +ElementFinder",
     "!doc": "<p>Calls to <code ng-non-bindable>element</code> may be chained to find elements within a parent.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder.prototype.element"
    },
    "$$": {
     "!type": "fn(selector: string) -> +ElementArrayFinder",
     "!doc": "<p>Calls to <code ng-non-bindable>$$</code> may be chained to find an array of elements within a\nparent.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder.prototype.$$"
    },
    "$": {
     "!type": "fn(selector: string) -> +ElementFinder",
     "!doc": "<p>Calls to <code ng-non-bindable>$</code> may be chained to find elements within a parent.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder.prototype.$"
    },
    "isPresent": {
     "!type": "fn() -> +ElementFinder",
     "!doc": "<p>Determine whether the element is present on the page.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder.prototype.isPresent"
    },
    "isElementPresent": {
     "!type": "fn(subLocator: +webdriver.Locator) -> +ElementFinder",
     "!doc": "<p>Same as ElementFinder.isPresent(), except this checks whether the element\nidentified by the subLocator is present, rather than the current element\nfinder. i.e. <code>element(by.css(&#39;#abc&#39;)).element(by.css(&#39;#def&#39;)).isPresent()</code> is\nidentical to <code>element(by.css(&#39;#abc&#39;)).isElementPresent(by.css(&#39;#def&#39;))</code>.</p>\n<br />See <code ng-non-bindable>ElementFinder.isPresent</code>",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder.prototype.isElementPresent"
    },
    "evaluate": {
     "!type": "fn(expression: string) -> +ElementFinder",
     "!doc": "<p>Evaluates the input as if it were on the scope of the current element.</p>\n<br />See <code ng-non-bindable>ElementArrayFinder.evaluate</code>",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder.prototype.evaluate"
    },
    "allowAnimations": {
     "!type": "fn(value: string) -> +ElementFinder",
     "!doc": "See <code ng-non-bindable>ElementArrayFinder.prototype.allowAnimations.</code>",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder.prototype.allowAnimations"
    }
   }
  },
  "build$": {},
  "build$$": {},
  "Protractor": {
   "prototype": {
    "!proto": "webdriver.WebDriver.prototype",
    "getProcessedConfig": {
     "!type": "fn() -> +q.Promise",
     "!doc": "<p>Get the processed configuration object that is currently being run. This\nwill contain the specs and capabilities properties of the current runner\ninstance.</p>\n<p>Set by the runner.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.getProcessedConfig"
    },
    "forkNewDriverInstance": {
     "!type": "fn(opt_useSameUrl: +boolean, opt_copyMockModules: +boolean) -> +Protractor",
     "!doc": "<p>Fork another instance of protractor for use in interactive tests.</p>\n<p>Set by the runner.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.forkNewDriverInstance"
    },
    "restart": {
     "!doc": "<p>Restart the browser instance.</p>\n<p>Set by the runner.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.restart"
    },
    "useAllAngular2AppRoots": {
     "!doc": "<p>Instead of using a single root element, search through all angular apps\navailable on the page when finding elements or waiting for stability.\nOnly compatible with Angular2.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.useAllAngular2AppRoots"
    },
    "waitForAngular": {
     "!type": "fn(opt_description?: string) -> +webdriver.promise.Promise",
     "!doc": "<p>Instruct webdriver to wait until Angular has finished rendering and has\nno outstanding $http or $timeout calls before continuing.\nNote that Protractor automatically applies this command before every\nWebDriver action.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.waitForAngular"
    },
    "findElement": {
     "!type": "fn() -> +webdriver.WebElement",
     "!doc": "<p>Waits for Angular to finish rendering before searching for elements.</p>\n<br />See <code ng-non-bindable>webdriver.WebDriver.findElement</code>",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.findElement"
    },
    "findElements": {
     "!type": "fn() -> +webdriver.promise.Promise",
     "!doc": "<p>Waits for Angular to finish rendering before searching for elements.</p>\n<br />See <code ng-non-bindable>webdriver.WebDriver.findElements</code>",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.findElements"
    },
    "isElementPresent": {
     "!type": "fn() -> +webdriver.promise.Promise",
     "!doc": "<p>Tests if an element is present on the page.</p>\n<br />See <code ng-non-bindable>webdriver.WebDriver.isElementPresent</code>",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.isElementPresent"
    },
    "addMockModule": {
     "!type": "fn(name: string, script: string, varArgs: ?)",
     "!doc": "<p>Add a module to load before Angular whenever Protractor.get is called.\nModules will be registered after existing modules already on the page,\nso any module registered here will override preexisting modules with the same\nname.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.addMockModule"
    },
    "clearMockModules": {
     "!doc": "<p>Clear the list of registered mock modules.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.clearMockModules"
    },
    "removeMockModule": {
     "!type": "fn(name: string)",
     "!doc": "<p>Remove a registered mock module.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.removeMockModule"
    },
    "getRegisteredMockModules": {
     "!type": "fn() -> [undefined]",
     "!doc": "<p>Get a list of the current mock modules.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.getRegisteredMockModules"
    },
    "get": {
     "!type": "fn(destination: string, opt_timeout?: number)",
     "!doc": "See <code ng-non-bindable>webdriver.WebDriver.get</code><br />Navigate to the given destination and loads mock modules before Angular. Assumes that the page being loaded uses Angular. If you need to access a page which does not have Angular on load, use the wrapped webdriver directly.",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.get"
    },
    "refresh": {
     "!type": "fn(opt_timeout?: number)",
     "!doc": "See <code ng-non-bindable>webdriver.WebDriver.refresh</code><br />Makes a full reload of the current page and loads mock modules before Angular. Assumes that the page being loaded uses Angular. If you need to access a page which does not have Angular on load, use the wrapped webdriver directly.",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.refresh"
    },
    "navigate": {
     "!doc": "<p>Mixin navigation methods back into the navigation object so that\nthey are invoked as before, i.e. driver.navigate().refresh()</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.navigate"
    },
    "setLocation": {
     "!type": "fn(url: string) -> +webdriver.promise.Promise",
     "!doc": "<p>Browse to another page using in-page navigation.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.setLocation"
    },
    "getLocationAbsUrl": {
     "!doc": "<p>Returns the current absolute url from AngularJS.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.getLocationAbsUrl"
    },
    "debugger": {
     "!doc": "<p>Adds a task to the control flow to pause the test and inject helper functions\ninto the browser, so that debugging may be done in the browser console.</p>\n<p>This should be used under node in debug mode, i.e. with\nprotractor debug <configuration.js></p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.debugger"
    },
    "enterRepl": {
     "!type": "fn(opt_debugPort?: number)",
     "!doc": "<p>Beta (unstable) enterRepl function for entering the repl loop from\nany point in the control flow. Use browser.enterRepl() in your test.\nDoes not require changes to the command line (no need to add &#39;debug&#39;).\nNote, if you are wrapping your own instance of Protractor, you must\nexpose globals &#39;browser&#39; and &#39;protractor&#39; for pause to work.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.enterRepl"
    },
    "pause": {
     "!type": "fn(opt_debugPort?: number)",
     "!doc": "<p>Beta (unstable) pause function for debugging webdriver tests. Use\nbrowser.pause() in your test to enter the protractor debugger from that\npoint in the control flow.\nDoes not require changes to the command line (no need to add &#39;debug&#39;).\nNote, if you are wrapping your own instance of Protractor, you must\nexpose globals &#39;browser&#39; and &#39;protractor&#39; for pause to work.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.pause"
    }
   }
  },
  "ProtractorBy": {
   "prototype": {
    "!proto": "WebdriverBy.prototype",
    "addLocator": {
     "!type": "fn(name: string, script: fn())",
     "!doc": "<p>Add a locator to this instance of ProtractorBy. This locator can then be\nused with element(by.locatorName(args)).</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.addLocator"
    },
    "binding": {
     "!type": "fn(bindingDescriptor: string) -> ?",
     "!doc": "<p>Find an element by text binding. Does a partial match, so any elements bound\nto variables containing the input string will be returned.</p>\n<p>Note: For AngularJS version 1.2, the interpolation brackets, (usually {{}}),\nare optionally allowed in the binding description string. For Angular version\n1.3+, they are not allowed, and no elements will be found if they are used.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.binding"
    },
    "exactBinding": {
     "!type": "fn(bindingDescriptor: string) -> ?",
     "!doc": "<p>Find an element by exact binding.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.exactBinding"
    },
    "model": {
     "!type": "fn(model: string)",
     "!doc": "<p>Find an element by ng-model expression.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.model"
    },
    "buttonText": {
     "!type": "fn(searchText: string) -> ?",
     "!doc": "<p>Find a button by text.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.buttonText"
    },
    "partialButtonText": {
     "!type": "fn(searchText: string) -> ?",
     "!doc": "<p>Find a button by partial text.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.partialButtonText"
    },
    "repeater": {
     "!type": "fn(repeatDescriptor: string) -> ?",
     "!doc": "<p>Find elements inside an ng-repeat.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.repeater"
    },
    "exactRepeater": {
     "!type": "fn(repeatDescriptor: string) -> ?",
     "!doc": "<p>Find an element by exact repeater.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.exactRepeater"
    },
    "cssContainingText": {
     "!doc": "<p>Find elements by CSS which contain a certain string.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.cssContainingText"
    },
    "options": {
     "!type": "fn(optionsDescriptor: string)",
     "!doc": "<p>Find an element by ng-options expression.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.options"
    },
    "deepCss": {
     "!doc": "<p>Find an element by css selector within the Shadow DOM.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.deepCss"
    }
   }
  },
  "WebdriverBy": {
   "prototype": {
    "!proto": "webdriver.By",
    "!doc": "<p>webdriver&#39;s By is an enum of locator functions, so we must set it to\na prototype before inheriting from it.</p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=WebdriverBy.prototype"
   }
  },
  "ExpectedConditions": {
   "!doc": "<p>Represents a library of canned expected conditions that are useful for\nprotractor, especially when dealing with non-angular apps.</p>\n<p>Each condition returns a function that evaluates to a promise. You may mix\nmultiple conditions using <code>and</code>, <code>or</code>, and/or <code>not</code>. You may also\nmix these conditions with any other conditions that you write.</p>\n<p>See <a href=\"https://selenium.googlecode.com/git/docs/api/java/org/openqa\">https://selenium.googlecode.com/git/docs/api/java/org/openqa</a> ...\n    /selenium/support/ui/ExpectedConditions.html</p>\n",
   "!url": "http://angular.github.io/protractor/#/api?view=ExpectedConditions",
   "prototype": {
    "not": {
     "!type": "fn(expectedCondition: fn()) -> fn()",
     "!doc": "<p>Negates the result of a promise.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ExpectedConditions.prototype.not"
    },
    "and": {
     "!type": "fn(fns: [undefined]) -> fn()",
     "!doc": "<p>Chain a number of expected conditions using logical_and, short circuiting\nat the first expected condition that evaluates to false.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ExpectedConditions.prototype.and"
    },
    "or": {
     "!type": "fn(fns: [undefined]) -> fn()",
     "!doc": "<p>Chain a number of expected conditions using logical_or, short circuiting\nat the first expected condition that evaluates to true.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ExpectedConditions.prototype.or"
    },
    "alertIsPresent": {
     "!type": "fn() -> fn()",
     "!doc": "<p>Expect an alert to be present.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ExpectedConditions.prototype.alertIsPresent"
    },
    "elementToBeClickable": {
     "!type": "fn(elementFinder: +ElementFinder) -> fn()",
     "!doc": "<p>An Expectation for checking an element is visible and enabled such that you\ncan click it.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ExpectedConditions.prototype.elementToBeClickable"
    },
    "textToBePresentInElement": {
     "!type": "fn(elementFinder: +ElementFinder, text: string) -> fn()",
     "!doc": "<p>An expectation for checking if the given text is present in the\nelement. Returns false if the elementFinder does not find an element.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ExpectedConditions.prototype.textToBePresentInElement"
    },
    "textToBePresentInElementValue": {
     "!type": "fn(elementFinder: +ElementFinder, text: string) -> fn()",
     "!doc": "<p>An expectation for checking if the given text is present in the elementâ€™s\nvalue. Returns false if the elementFinder does not find an element.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ExpectedConditions.prototype.textToBePresentInElementValue"
    },
    "titleContains": {
     "!type": "fn(title: string) -> fn()",
     "!doc": "<p>An expectation for checking that the title contains a case-sensitive\nsubstring.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ExpectedConditions.prototype.titleContains"
    },
    "titleIs": {
     "!type": "fn(title: string) -> fn()",
     "!doc": "<p>An expectation for checking the title of a page.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ExpectedConditions.prototype.titleIs"
    },
    "presenceOf": {
     "!type": "fn(elementFinder: +ElementFinder) -> fn()",
     "!doc": "<p>An expectation for checking that an element is present on the DOM\nof a page. This does not necessarily mean that the element is visible.\nThis is the opposite of &#39;stalenessOf&#39;.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ExpectedConditions.prototype.presenceOf"
    },
    "stalenessOf": {
     "!type": "fn(elementFinder: +ElementFinder) -> fn()",
     "!doc": "<p>An expectation for checking that an element is not attached to the DOM\nof a page. This is the opposite of &#39;presenceOf&#39;.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ExpectedConditions.prototype.stalenessOf"
    },
    "visibilityOf": {
     "!type": "fn(elementFinder: +ElementFinder) -> fn()",
     "!doc": "<p>An expectation for checking that an element is present on the DOM of a\npage and visible. Visibility means that the element is not only displayed\nbut also has a height and width that is greater than 0. This is the opposite \nof &#39;invisibilityOf&#39;.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ExpectedConditions.prototype.visibilityOf"
    },
    "invisibilityOf": {
     "!type": "fn(elementFinder: +ElementFinder) -> fn()",
     "!doc": "<p>An expectation for checking that an element is either invisible or not\npresent on the DOM. This is the opposite of &#39;visibilityOf&#39;.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ExpectedConditions.prototype.invisibilityOf"
    },
    "elementToBeSelected": {
     "!type": "fn(elementFinder: +ElementFinder) -> fn()",
     "!doc": "<p>An expectation for checking the selection is selected.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=ExpectedConditions.prototype.elementToBeSelected"
    }
   }
  },
  "webdriver": {
   "Locator": {
    "!type": "fn(using: string, value: string)",
    "!doc": "<p>An element locator.</p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=webdriver.Locator",
    "checkLocator": {
     "!type": "fn(value: ?) -> +webdriver.Locator",
     "!doc": "<p>Verifies that a <code ng-non-bindable>value</code> is a valid locator to use for searching for\nelements on the page.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.Locator.checkLocator"
    },
    "prototype": {}
   },
   "By": {
    "!doc": "<p>A collection of factory functions for creating [<code ng-non-bindable>webdriver.Locator</code>](webdriver.Locator)\ninstances.</p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=webdriver.By",
    "className": {
     "!type": "fn(className: string) -> +webdriver.Locator",
     "!doc": "<p>Locates elements that have a specific class name. The returned locator\nis equivalent to searching for elements with the CSS selector &quot;.clazz&quot;.</p>\n<br />See [<code ng-non-bindable>http:&#x2F;&#x2F;www.w3.org&#x2F;TR&#x2F;2011&#x2F;WD-html5-20110525&#x2F;elements.html#classes</code>](http://www.w3.org/TR/2011/WD-html5-20110525/elements.html#classes)<br />See [<code ng-non-bindable>http:&#x2F;&#x2F;www.w3.org&#x2F;TR&#x2F;CSS2&#x2F;selector.html#class-html</code>](http://www.w3.org/TR/CSS2/selector.html#class-html)",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.By.className"
    },
    "css": {
     "!type": "fn(selector: string) -> +webdriver.Locator",
     "!doc": "<p>Locates elements using a CSS selector. For browsers that do not support\nCSS selectors, WebDriver implementations may return an\ninvalid selector error. An\nimplementation may, however, emulate the CSS selector API.</p>\n<br />See [<code ng-non-bindable>http:&#x2F;&#x2F;www.w3.org&#x2F;TR&#x2F;CSS2&#x2F;selector.html</code>](http://www.w3.org/TR/CSS2/selector.html)",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.By.css"
    },
    "id": {
     "!type": "fn(id: string) -> +webdriver.Locator",
     "!doc": "<p>Locates an element by its ID.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.By.id"
    },
    "linkText": {
     "!type": "fn(text: string) -> +webdriver.Locator",
     "!doc": "<p>Locates link elements whose [visible text](webdriver.WebElement.prototype.getText) matches the given string.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.By.linkText"
    },
    "js": {
     "!type": "fn(script: string, var_args: ?) -> fn(arg0: +webdriver.WebDriver) -> +webdriver.promise.Promise",
     "!doc": "<p>Locates an elements by evaluating a\n[JavaScript expression](webdriver.WebDriver.prototype.executeScript).\nThe result of this expression must be an element or list of elements.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.By.js"
    },
    "name": {
     "!type": "fn(name: string) -> +webdriver.Locator",
     "!doc": "<p>Locates elements whose <code ng-non-bindable>name</code> attribute has the given value.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.By.name"
    },
    "partialLinkText": {
     "!type": "fn(text: string) -> +webdriver.Locator",
     "!doc": "<p>Locates link elements whose [visible text](webdriver.WebElement.prototype.getText) contains the given substring.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.By.partialLinkText"
    },
    "tagName": {
     "!type": "fn(text: string) -> +webdriver.Locator",
     "!doc": "<p>Locates elements with a given tag name. The returned locator is\nequivalent to using the\n<a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Element.getElementsByTagName\">getElementsByTagName</a>\nDOM function.</p>\n<br />See [<code ng-non-bindable>http:&#x2F;&#x2F;www.w3.org&#x2F;TR&#x2F;REC-DOM-Level-1&#x2F;level-one-core.html</code>](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html)",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.By.tagName"
    },
    "xpath": {
     "!type": "fn(xpath: string) -> +webdriver.Locator",
     "!doc": "<p>Locates elements matching a XPath selector. Care should be taken when\nusing an XPath selector with a [<code ng-non-bindable>webdriver.WebElement</code>](webdriver.WebElement) as WebDriver\nwill respect the context in the specified in the selector. For example,\ngiven the selector <code ng-non-bindable>&amp;quot;&#x2F;&#x2F;div&amp;quot;</code>, WebDriver will search from the\ndocument root regardless of whether the locator was used with a\nWebElement.</p>\n<br />See [<code ng-non-bindable>http:&#x2F;&#x2F;www.w3.org&#x2F;TR&#x2F;xpath&#x2F;</code>](http://www.w3.org/TR/xpath/)",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.By.xpath"
    }
   },
   "WebDriver": {
    "!type": "fn(session: +webdriver.Session, executor: +webdriver.CommandExecutor, opt_flow?: +webdriver.promise.ControlFlow)",
    "!doc": "<p>Creates a new WebDriver client, which provides control over a browser.</p>\n<p>Every WebDriver command returns a <code ng-non-bindable>webdriver.promise.Promise</code> that\nrepresents the result of that command. Callbacks may be registered on this\nobject to manipulate the command result or catch an expected error. Any\ncommands scheduled with a callback are considered sub-commands and will\nexecute before the next command in the current frame. For example:</p>\n<pre><code>var message = [];\ndriver.call(message.push, message, &#39;a&#39;).then(function() {\n  driver.call(message.push, message, &#39;b&#39;);\n});\ndriver.call(message.push, message, &#39;c&#39;);\ndriver.call(function() {\n  alert(&#39;message is abc? &#39; + (message.join(&#39;&#39;) == &#39;abc&#39;));\n});\n</code></pre>",
    "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver",
    "attachToSession": {
     "!type": "fn(executor: +webdriver.CommandExecutor, sessionId: string, opt_flow?: +webdriver.promise.ControlFlow) -> +webdriver.WebDriver",
     "!doc": "<p>Creates a new WebDriver client for an existing session.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.attachToSession"
    },
    "createSession": {
     "!type": "fn(executor: +webdriver.CommandExecutor, desiredCapabilities: +webdriver.Capabilities, opt_flow?: +webdriver.promise.ControlFlow) -> +webdriver.WebDriver",
     "!doc": "<p>Creates a new WebDriver session.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.createSession"
    },
    "prototype": {
     "controlFlow": {
      "!type": "fn() -> +webdriver.promise.ControlFlow",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.controlFlow"
     },
     "schedule": {
      "!type": "fn(command: +webdriver.Command, description: string) -> ?",
      "!doc": "<p>Schedules a <code ng-non-bindable>webdriver.Command</code> to be executed by this driver&#39;s\n<code ng-non-bindable>webdriver.CommandExecutor</code>.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.schedule"
     },
     "setFileDetector": {
      "!type": "fn(detector: +webdriver.FileDetector)",
      "!doc": "<p>Sets the [file detector](webdriver.FileDetector) that should be\nused with this instance.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.setFileDetector"
     },
     "getSession": {
      "!type": "fn() -> ?",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.getSession"
     },
     "getCapabilities": {
      "!type": "fn() -> ?",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.getCapabilities"
     },
     "quit": {
      "!type": "fn() -> ?",
      "!doc": "<p>Schedules a command to quit the current session. After calling quit, this\ninstance will be invalidated and may no longer be used to issue commands\nagainst the browser.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.quit"
     },
     "actions": {
      "!type": "fn() -> +webdriver.ActionSequence",
      "!doc": "<p>Creates a new action sequence using this driver. The sequence will not be\nscheduled for execution until <code ng-non-bindable>webdriver.ActionSequence#perform</code> is\ncalled. Example:</p>\n<pre><code>driver.actions().\n    mouseDown(element1).\n    mouseMove(element2).\n    mouseUp().\n    perform();\n</code></pre>",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.actions"
     },
     "touchActions": {
      "!type": "fn() -> +webdriver.TouchSequence",
      "!doc": "<p>Creates a new touch sequence using this driver. The sequence will not be\nscheduled for execution until <code ng-non-bindable>webdriver.TouchSequence#perform</code> is\ncalled. Example:</p>\n<pre><code>driver.touchActions().\n    tap(element1).\n    doubleTap(element2).\n    perform();\n</code></pre>",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.touchActions"
     },
     "executeScript": {
      "!type": "fn(script: string, var_args: ?) -> ?",
      "!doc": "<p>Schedules a command to execute JavaScript in the context of the currently\nselected frame or window. The script fragment will be executed as the body\nof an anonymous function. If the script is provided as a function object,\nthat function will be converted to a string for injection into the target\nwindow.</p>\n<p>Any arguments provided in addition to the script will be included as script\narguments and may be referenced using the <code ng-non-bindable>arguments</code> object.\nArguments may be a boolean, number, string, or <code ng-non-bindable>webdriver.WebElement</code>.\nArrays and objects may also be used as script arguments as long as each item\nadheres to the types previously mentioned.</p>\n<p>The script may refer to any variables accessible from the current window.\nFurthermore, the script will execute in the window&#39;s context, thus\n<code ng-non-bindable>document</code> may be used to refer to the current document. Any local\nvariables will not be available once the script has finished executing,\nthough global variables will persist.</p>\n<p>If the script has a return value (i.e. if the script contains a return\nstatement), then the following steps will be taken for resolving this\nfunctions return value:</p>\n<ul>\n<li>For a HTML element, the value will resolve to a\n  [<code ng-non-bindable>webdriver.WebElement</code>](webdriver.WebElement)</li>\n<li>Null and undefined return values will resolve to null</li></li>\n<li>Booleans, numbers, and strings will resolve as is</li></li>\n<li>Functions will resolve to their string representation</li></li>\n<li>For arrays and objects, each member item will be converted according to\n  the rules above</li>\n</ul>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.executeScript"
     },
     "executeAsyncScript": {
      "!type": "fn(script: string, var_args: ?) -> ?",
      "!doc": "<p>Schedules a command to execute asynchronous JavaScript in the context of the\ncurrently selected frame or window. The script fragment will be executed as\nthe body of an anonymous function. If the script is provided as a function\nobject, that function will be converted to a string for injection into the\ntarget window.</p>\n<p>Any arguments provided in addition to the script will be included as script\narguments and may be referenced using the <code ng-non-bindable>arguments</code> object.\nArguments may be a boolean, number, string, or <code ng-non-bindable>webdriver.WebElement</code>.\nArrays and objects may also be used as script arguments as long as each item\nadheres to the types previously mentioned.</p>\n<p>Unlike executing synchronous JavaScript with [<code ng-non-bindable>#executeScript</code>](webdriver.WebDriver.prototype.executeScript),\nscripts executed with this function must explicitly signal they are finished\nby invoking the provided callback. This callback will always be injected\ninto the executed function as the last argument, and thus may be referenced\nwith <code ng-non-bindable>arguments[arguments.length - 1]</code>. The following steps will be\ntaken for resolving this functions return value against the first argument\nto the script&#39;s callback function:</p>\n<ul>\n<li>For a HTML element, the value will resolve to a\n  [<code ng-non-bindable>webdriver.WebElement</code>](webdriver.WebElement)</li>\n<li>Null and undefined return values will resolve to null</li>\n<li>Booleans, numbers, and strings will resolve as is</li>\n<li>Functions will resolve to their string representation</li>\n<li>For arrays and objects, each member item will be converted according to\n  the rules above</li>\n</ul>\n<p><strong>Example #1:</strong> Performing a sleep that is synchronized with the currently\nselected window:</p>\n<pre><code>var start = new Date().getTime();\ndriver.executeAsyncScript(\n    &#39;window.setTimeout(arguments[arguments.length - 1], 500);&#39;).\n    then(function() {\n      console.log(\n          &#39;Elapsed time: &#39; + (new Date().getTime() - start) + &#39; ms&#39;);\n    });\n</code></pre><p><strong>Example #2:</strong> Synchronizing a test with an AJAX application:</p>\n<pre><code>var button = driver.findElement(By.id(&#39;compose-button&#39;));\nbutton.click();\ndriver.executeAsyncScript(\n    &#39;var callback = arguments[arguments.length - 1];&#39; +\n    &#39;mailClient.getComposeWindowWidget().onload(callback);&#39;);\ndriver.switchTo().frame(&#39;composeWidget&#39;);\ndriver.findElement(By.id(&#39;to&#39;)).sendKeys(&#39;dog@example.com&#39;);\n</code></pre><p><strong>Example #3:</strong> Injecting a XMLHttpRequest and waiting for the result. In\nthis example, the inject script is specified with a function literal. When\nusing this format, the function is converted to a string for injection, so it\nshould not reference any symbols not defined in the scope of the page under\ntest.</p>\n<pre><code>driver.executeAsyncScript(function() {\n  var callback = arguments[arguments.length - 1];\n  var xhr = new XMLHttpRequest();\n  xhr.open(&quot;GET&quot;, &quot;/resource/data.json&quot;, true);\n  xhr.onreadystatechange = function() {\n    if (xhr.readyState == 4) {\n      callback(xhr.responseText);\n    }\n  };\n  xhr.send(&#39;&#39;);\n}).then(function(str) {\n  console.log(JSON.parse(str)[&#39;food&#39;]);\n});\n</code></pre>",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.executeAsyncScript"
     },
     "call": {
      "!type": "fn(fn: fn(arg0: undefined) -> +T, opt_scope?: +Object, var_args: ?) -> ?",
      "!doc": "<p>Schedules a command to execute a custom function.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.call"
     },
     "wait": {
      "!type": "fn(condition: ?, opt_timeout?: number, opt_message?: string) -> ?",
      "!doc": "<p>Schedules a command to wait for a condition to hold. The condition may be\nspecified by a <code ng-non-bindable>webdriver.until.Condition</code>, as a custom function, or\nas a <code ng-non-bindable>webdriver.promise.Promise</code>.</p>\n<p>For a <code ng-non-bindable>webdriver.until.Condition</code> or function, the wait will repeatedly\nevaluate the condition until it returns a truthy value. If any errors occur\nwhile evaluating the condition, they will be allowed to propagate. In the\nevent a condition returns a <code ng-non-bindable>promise</code>, the\npolling loop will wait for it to be resolved and use the resolved value for\nwhether the condition has been satisified. Note the resolution time for\na promise is factored into whether a wait has timed out.</p>\n<p><em>Example:</em> waiting up to 10 seconds for an element to be present and visible\non the page.</p>\n<pre><code>var button = driver.wait(until.elementLocated(By.id(&#39;foo&#39;)), 10000);\nbutton.click();\n</code></pre><p>This function may also be used to block the command flow on the resolution\nof a <code ng-non-bindable>promise</code>. When given a promise, the\ncommand will simply wait for its resolution before completing. A timeout may\nbe provided to fail the command if the promise does not resolve before the\ntimeout expires.</p>\n<p><em>Example:</em> Suppose you have a function, <code>startTestServer</code>, that returns a\npromise for when a server is ready for requests. You can block a <code>WebDriver</code>\nclient on this promise with:</p>\n<pre><code>var started = startTestServer();\ndriver.wait(started, 5 * 1000, &#39;Server should start within 5 seconds&#39;);\ndriver.get(getServerUrl());\n</code></pre>",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.wait"
     },
     "sleep": {
      "!type": "fn(ms: number) -> ?",
      "!doc": "<p>Schedules a command to make the driver sleep for the given amount of time.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.sleep"
     },
     "getWindowHandle": {
      "!type": "fn() -> ?",
      "!doc": "<p>Schedules a command to retrieve they current window handle.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.getWindowHandle"
     },
     "getAllWindowHandles": {
      "!type": "fn() -> ?",
      "!doc": "<p>Schedules a command to retrieve the current list of available window handles.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.getAllWindowHandles"
     },
     "getPageSource": {
      "!type": "fn() -> ?",
      "!doc": "<p>Schedules a command to retrieve the current page&#39;s source. The page source\nreturned is a representation of the underlying DOM: do not expect it to be\nformatted or escaped in the same way as the response sent from the web\nserver.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.getPageSource"
     },
     "close": {
      "!type": "fn() -> ?",
      "!doc": "<p>Schedules a command to close the current window.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.close"
     },
     "get": {
      "!type": "fn(url: string) -> ?",
      "!doc": "<p>Schedules a command to navigate to the given URL.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.get"
     },
     "getCurrentUrl": {
      "!type": "fn() -> ?",
      "!doc": "<p>Schedules a command to retrieve the URL of the current page.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.getCurrentUrl"
     },
     "getTitle": {
      "!type": "fn() -> ?",
      "!doc": "<p>Schedules a command to retrieve the current page&#39;s title.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.getTitle"
     },
     "findElement": {
      "!type": "fn(locator: +webdriver.Locator) -> +webdriver.WebElement",
      "!doc": "<p>Schedule a command to find an element on the page. If the element cannot be\nfound, a <code ng-non-bindable>bot.ErrorCode.NO_SUCH_ELEMENT</code> result will be returned\nby the driver. Unlike other commands, this error cannot be suppressed. In\nother words, scheduling a command to find an element doubles as an assert\nthat the element is present on the page. To test whether an element is\npresent on the page, use [<code ng-non-bindable>#isElementPresent</code>](webdriver.WebDriver.prototype.isElementPresent) instead.</p>\n<p>The search criteria for an element may be defined using one of the\nfactories in the [<code ng-non-bindable>webdriver.By</code>](webdriver.By) namespace, or as a short-hand\n<code ng-non-bindable>webdriver.By.Hash</code> object. For example, the following two statements\nare equivalent:</p>\n<pre><code>var e1 = driver.findElement(By.id(&#39;foo&#39;));\nvar e2 = driver.findElement({id:&#39;foo&#39;});\n</code></pre><p>You may also provide a custom locator function, which takes as input\nthis WebDriver instance and returns a [<code ng-non-bindable>webdriver.WebElement</code>](webdriver.WebElement), or a\npromise that will resolve to a WebElement. For example, to find the first\nvisible link on a page, you could write:</p>\n<pre><code>var link = driver.findElement(firstVisibleLink);\n\nfunction firstVisibleLink(driver) {\n  var links = driver.findElements(By.tagName(&#39;a&#39;));\n  return webdriver.promise.filter(links, function(link) {\n    return links.isDisplayed();\n  }).then(function(visibleLinks) {\n    return visibleLinks[0];\n  });\n}\n</code></pre><p>When running in the browser, a WebDriver cannot manipulate DOM elements\ndirectly; it may do so only through a [<code ng-non-bindable>webdriver.WebElement</code>](webdriver.WebElement) reference.\nThis function may be used to generate a WebElement from a DOM element. A\nreference to the DOM element will be stored in a known location and this\ndriver will attempt to retrieve it through [<code ng-non-bindable>#executeScript</code>](webdriver.WebDriver.prototype.executeScript). If the\nelement cannot be found (eg, it belongs to a different document than the\none this instance is currently focused on), a\n<code ng-non-bindable>bot.ErrorCode.NO_SUCH_ELEMENT</code> error will be returned.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.findElement"
     },
     "isElementPresent": {
      "!type": "fn(locatorOrElement: +webdriver.Locator) -> ?",
      "!doc": "<p>Schedules a command to test if an element is present on the page.</p>\n<p>If given a DOM element, this function will check if it belongs to the\ndocument the driver is currently focused on. Otherwise, the function will\ntest if at least one element can be found with the given search criteria.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.isElementPresent"
     },
     "findElements": {
      "!type": "fn(locator: +webdriver.Locator) -> ?",
      "!doc": "<p>Schedule a command to search for multiple elements on the page.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.findElements"
     },
     "takeScreenshot": {
      "!type": "fn() -> ?",
      "!doc": "<p>Schedule a command to take a screenshot. The driver makes a best effort to\nreturn a screenshot of the following, in order of preference:</p>\n<ol>\n  <li>Entire page\n  <li>Current window\n  <li>Visible portion of the current frame\n  <li>The screenshot of the entire display containing the browser\n</ol>",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.takeScreenshot"
     },
     "manage": {
      "!type": "fn() -> +webdriver.WebDriver.Options",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.manage"
     },
     "navigate": {
      "!type": "fn() -> +webdriver.WebDriver.Navigation",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.navigate"
     },
     "switchTo": {
      "!type": "fn() -> +webdriver.WebDriver.TargetLocator",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.switchTo"
     }
    },
    "Navigation": {
     "!type": "fn(driver: +webdriver.WebDriver)",
     "!doc": "<p>Interface for navigating back and forth in the browser history.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Navigation",
     "prototype": {
      "to": {
       "!type": "fn(url: string) -> ?",
       "!doc": "<p>Schedules a command to navigate to a new URL.</p>\n",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Navigation.prototype.to"
      },
      "back": {
       "!type": "fn() -> ?",
       "!doc": "<p>Schedules a command to move backwards in the browser history.</p>\n",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Navigation.prototype.back"
      },
      "forward": {
       "!type": "fn() -> ?",
       "!doc": "<p>Schedules a command to move forwards in the browser history.</p>\n",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Navigation.prototype.forward"
      },
      "refresh": {
       "!type": "fn() -> ?",
       "!doc": "<p>Schedules a command to refresh the current page.</p>\n",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Navigation.prototype.refresh"
      }
     }
    },
    "Options": {
     "!type": "fn(driver: +webdriver.WebDriver)",
     "!doc": "<p>Provides methods for managing browser and driver state.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Options",
     "prototype": {
      "addCookie": {
       "!type": "fn(name: string, value: string, opt_path?: string, opt_domain?: string, opt_isSecure?: +boolean, opt_expiry?: number) -> ?",
       "!doc": "<p>Schedules a command to add a cookie.</p>\n",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Options.prototype.addCookie"
      },
      "deleteAllCookies": {
       "!type": "fn() -> ?",
       "!doc": "<p>Schedules a command to delete all cookies visible to the current page.</p>\n",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Options.prototype.deleteAllCookies"
      },
      "deleteCookie": {
       "!type": "fn(name: string) -> ?",
       "!doc": "<p>Schedules a command to delete the cookie with the given name. This command is\na no-op if there is no cookie with the given name visible to the current\npage.</p>\n",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Options.prototype.deleteCookie"
      },
      "getCookies": {
       "!type": "fn() -> ?",
       "!doc": "<p>Schedules a command to retrieve all cookies visible to the current page.\nEach cookie will be returned as a JSON object as described by the WebDriver\nwire protocol.</p>\n<br />See [<code ng-non-bindable>https:&#x2F;&#x2F;github.com&#x2F;SeleniumHQ&#x2F;selenium&#x2F;wiki&#x2F;JsonWireProtocol#cookie-json-object</code>](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#cookie-json-object)",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Options.prototype.getCookies"
      },
      "getCookie": {
       "!type": "fn(name: string) -> ?",
       "!doc": "<p>Schedules a command to retrieve the cookie with the given name. Returns null\nif there is no such cookie. The cookie will be returned as a JSON object as\ndescribed by the WebDriver wire protocol.</p>\n<br />See [<code ng-non-bindable>https:&#x2F;&#x2F;github.com&#x2F;SeleniumHQ&#x2F;selenium&#x2F;wiki&#x2F;JsonWireProtocol#cookie-json-object</code>](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol#cookie-json-object)",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Options.prototype.getCookie"
      },
      "logs": {
       "!type": "fn() -> +webdriver.WebDriver.Logs",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Options.prototype.logs"
      },
      "timeouts": {
       "!type": "fn() -> +webdriver.WebDriver.Timeouts",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Options.prototype.timeouts"
      },
      "window": {
       "!type": "fn() -> +webdriver.WebDriver.Window",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Options.prototype.window"
      }
     }
    },
    "Timeouts": {
     "!type": "fn(driver: +webdriver.WebDriver)",
     "!doc": "<p>An interface for managing timeout behavior for WebDriver instances.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Timeouts",
     "prototype": {
      "implicitlyWait": {
       "!type": "fn(ms: number) -> ?",
       "!doc": "<p>Specifies the amount of time the driver should wait when searching for an\nelement if it is not immediately present.</p>\n<p>When searching for a single element, the driver should poll the page\nuntil the element has been found, or this timeout expires before failing\nwith a <code ng-non-bindable>bot.ErrorCode.NO_SUCH_ELEMENT</code> error. When searching\nfor multiple elements, the driver should poll the page until at least one\nelement has been found or this timeout has expired.</p>\n<p>Setting the wait timeout to 0 (its default value), disables implicit\nwaiting.</p>\n<p>Increasing the implicit wait timeout should be used judiciously as it\nwill have an adverse effect on test run time, especially when used with\nslower location strategies like XPath.</p>\n",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Timeouts.prototype.implicitlyWait"
      },
      "setScriptTimeout": {
       "!type": "fn(ms: number) -> ?",
       "!doc": "<p>Sets the amount of time to wait, in milliseconds, for an asynchronous script\nto finish execution before returning an error. If the timeout is less than or\nequal to 0, the script will be allowed to run indefinitely.</p>\n",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Timeouts.prototype.setScriptTimeout"
      },
      "pageLoadTimeout": {
       "!type": "fn(ms: number) -> ?",
       "!doc": "<p>Sets the amount of time to wait for a page load to complete before returning\nan error.  If the timeout is negative, page loads may be indefinite.</p>\n",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Timeouts.prototype.pageLoadTimeout"
      }
     }
    },
    "Window": {
     "!type": "fn(driver: +webdriver.WebDriver)",
     "!doc": "<p>An interface for managing the current window.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Window",
     "prototype": {
      "getPosition": {
       "!type": "fn() -> ?",
       "!doc": "<p>Retrieves the window&#39;s current position, relative to the top left corner of\nthe screen.</p>\n",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Window.prototype.getPosition"
      },
      "setPosition": {
       "!type": "fn(x: number, y: number) -> ?",
       "!doc": "<p>Repositions the current window.</p>\n",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Window.prototype.setPosition"
      },
      "getSize": {
       "!type": "fn() -> ?",
       "!doc": "<p>Retrieves the window&#39;s current size.</p>\n",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Window.prototype.getSize"
      },
      "setSize": {
       "!type": "fn(width: number, height: number) -> ?",
       "!doc": "<p>Resizes the current window.</p>\n",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Window.prototype.setSize"
      },
      "maximize": {
       "!type": "fn() -> ?",
       "!doc": "<p>Maximizes the current window.</p>\n",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Window.prototype.maximize"
      }
     }
    },
    "Logs": {
     "!type": "fn(driver: +webdriver.WebDriver)",
     "!doc": "<p>Interface for managing WebDriver log records.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Logs",
     "prototype": {
      "get": {
       "!type": "fn(type: +webdriver.logging.Type) -> ?",
       "!doc": "<p>Fetches available log entries for the given type.</p>\n<p>Note that log buffers are reset after each call, meaning that available\nlog entries correspond to those entries not yet returned for a given log\ntype. In practice, this means that this call will return the available log\nentries since the last call, or from the start of the session.</p>\n",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Logs.prototype.get"
      },
      "getAvailableLogTypes": {
       "!type": "fn() -> ?",
       "!doc": "<p>Retrieves the log types available to this driver.</p>\n",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Logs.prototype.getAvailableLogTypes"
      }
     }
    },
    "TargetLocator": {
     "!type": "fn(driver: +webdriver.WebDriver)",
     "!doc": "<p>An interface for changing the focus of the driver to another frame or window.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.TargetLocator",
     "prototype": {
      "activeElement": {
       "!type": "fn() -> +webdriver.WebElementPromise",
       "!doc": "<p>Schedules a command retrieve the <code ng-non-bindable>document.activeElement</code> element on\nthe current document, or <code ng-non-bindable>document.body</code> if activeElement is not\navailable.</p>\n",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.TargetLocator.prototype.activeElement"
      },
      "defaultContent": {
       "!type": "fn() -> ?",
       "!doc": "<p>Schedules a command to switch focus of all future commands to the first frame\non the page.</p>\n",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.TargetLocator.prototype.defaultContent"
      },
      "frame": {
       "!type": "fn(nameOrIndex: string) -> ?",
       "!doc": "<p>Schedules a command to switch the focus of all future commands to another\nframe on the page.</p>\n<p>If the frame is specified by a number, the command will switch to the frame\nby its (zero-based) index into\n<a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Window.frames\">window.frames</a>.</p>\n<p>If the frame is specified by a string, the command will select the frame by\nits name or ID. To select sub-frames, simply separate the frame names/IDs by\ndots. As an example, &quot;main.child&quot; will select the frame with the name &quot;main&quot;\nand then its child &quot;child&quot;.</p>\n<p>If the specified frame can not be found, the deferred result will errback\nwith a <code ng-non-bindable>bot.ErrorCode.NO_SUCH_FRAME</code> error.</p>\n",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.TargetLocator.prototype.frame"
      },
      "window": {
       "!type": "fn(nameOrHandle: string) -> ?",
       "!doc": "<p>Schedules a command to switch the focus of all future commands to another\nwindow. Windows may be specified by their <code ng-non-bindable>window.name</code> attribute or\nby its handle (as returned by <code ng-non-bindable>webdriver.WebDriver#getWindowHandles</code>).</p>\n<p>If the specificed window can not be found, the deferred result will errback\nwith a <code ng-non-bindable>bot.ErrorCode.NO_SUCH_WINDOW</code> error.</p>\n",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.TargetLocator.prototype.window"
      },
      "alert": {
       "!type": "fn() -> +webdriver.AlertPromise",
       "!doc": "<p>Schedules a command to change focus to the active alert dialog. This command\nwill return a <code ng-non-bindable>bot.ErrorCode.NO_SUCH_ALERT</code> error if an alert dialog\nis not currently open.</p>\n",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.TargetLocator.prototype.alert"
      }
     }
    }
   },
   "Key": {
    "chord": {
     "!type": "fn(var_args: string) -> string",
     "!doc": "<p>Simulate pressing many keys at once in a &quot;chord&quot;. Takes a sequence of\n[<code ng-non-bindable>webdriver.Key</code>](webdriver.Key)s or strings, appends each of the values to a string,\nand adds the chord termination key (<code ng-non-bindable>webdriver.Key.NULL</code>) and returns\nthe resultant string.</p>\n<p>Note: when the low-level webdriver key handlers see Keys.NULL, active\nmodifier keys (CTRL/ALT/SHIFT/etc) release via a keyup event.</p>\n<br />See [<code ng-non-bindable>http:&#x2F;&#x2F;code.google.com&#x2F;p&#x2F;webdriver&#x2F;issues&#x2F;detail?id=79</code>](http://code.google.com/p/webdriver/issues/detail?id=79)",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.Key.chord"
    },
    "!doc": "<p>Representations of pressable keys that aren&#39;t text.  These are stored in\nthe Unicode PUA (Private Use Area) code points, 0xE000-0xF8FF.  Refer to\n<a href=\"http://www.google.com.au/search?&amp;q=unicode+pua&amp;btnG=Search\">http://www.google.com.au/search?&amp;q=unicode+pua&amp;btnG=Search</a></p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=webdriver.Key"
   },
   "WebElement": {
    "!type": "fn(driver: +webdriver.WebDriver, id: ?)",
    "!doc": "<p>Represents a DOM element. WebElements can be found by searching from the\ndocument root using a [<code ng-non-bindable>webdriver.WebDriver</code>](webdriver.WebDriver) instance, or by searching\nunder another WebElement:</p>\n<pre><code>driver.get(&#39;http://www.google.com&#39;);\nvar searchForm = driver.findElement(By.tagName(&#39;form&#39;));\nvar searchBox = searchForm.findElement(By.name(&#39;q&#39;));\nsearchBox.sendKeys(&#39;webdriver&#39;);\n</code></pre><p>The WebElement is implemented as a promise for compatibility with the promise\nAPI. It will always resolve itself when its internal state has been fully\nresolved and commands may be issued against the element. This can be used to\ncatch errors when an element cannot be located on the page:</p>\n<pre><code>driver.findElement(By.id(&#39;not-there&#39;)).then(function(element) {\n  alert(&#39;Found an element that was not expected to be there!&#39;);\n}, function(error) {\n  alert(&#39;The element was not found, as expected&#39;);\n});\n</code></pre>",
    "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement",
    "equals": {
     "!type": "fn(a: +webdriver.WebElement, b: +webdriver.WebElement) -> ?",
     "!doc": "<p>Compares to WebElements for equality.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.equals"
    },
    "prototype": {
     "getDriver": {
      "!type": "fn() -> +webdriver.WebDriver",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.getDriver"
     },
     "getId": {
      "!type": "fn() -> ?",
      "!doc": "See [<code ng-non-bindable>https:&#x2F;&#x2F;github.com&#x2F;SeleniumHQ&#x2F;selenium&#x2F;wiki&#x2F;JsonWireProtocol</code>](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol)",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.getId"
     },
     "getRawId": {
      "!type": "fn() -> ?",
      "!doc": "<p>Returns the raw ID string ID for this element.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.getRawId"
     },
     "serialize": {
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.serialize"
     },
     "findElement": {
      "!type": "fn(locator: +webdriver.Locator) -> +webdriver.WebElement",
      "!doc": "<p>Schedule a command to find a descendant of this element. If the element\ncannot be found, a <code ng-non-bindable>bot.ErrorCode.NO_SUCH_ELEMENT</code> result will\nbe returned by the driver. Unlike other commands, this error cannot be\nsuppressed. In other words, scheduling a command to find an element doubles\nas an assert that the element is present on the page. To test whether an\nelement is present on the page, use [<code ng-non-bindable>#isElementPresent</code>](webdriver.WebElement.prototype.isElementPresent) instead.</p>\n<p>The search criteria for an element may be defined using one of the\nfactories in the [<code ng-non-bindable>webdriver.By</code>](webdriver.By) namespace, or as a short-hand\n<code ng-non-bindable>webdriver.By.Hash</code> object. For example, the following two statements\nare equivalent:</p>\n<pre><code>var e1 = element.findElement(By.id(&#39;foo&#39;));\nvar e2 = element.findElement({id:&#39;foo&#39;});\n</code></pre><p>You may also provide a custom locator function, which takes as input\nthis WebDriver instance and returns a [<code ng-non-bindable>webdriver.WebElement</code>](webdriver.WebElement), or a\npromise that will resolve to a WebElement. For example, to find the first\nvisible link on a page, you could write:</p>\n<pre><code>var link = element.findElement(firstVisibleLink);\n\nfunction firstVisibleLink(element) {\n  var links = element.findElements(By.tagName(&#39;a&#39;));\n  return webdriver.promise.filter(links, function(link) {\n    return links.isDisplayed();\n  }).then(function(visibleLinks) {\n    return visibleLinks[0];\n  });\n}\n</code></pre>",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.findElement"
     },
     "isElementPresent": {
      "!type": "fn(locator: +webdriver.Locator) -> ?",
      "!doc": "<p>Schedules a command to test if there is at least one descendant of this\nelement that matches the given search criteria.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.isElementPresent"
     },
     "findElements": {
      "!type": "fn(locator: +webdriver.Locator) -> ?",
      "!doc": "<p>Schedules a command to find all of the descendants of this element that\nmatch the given search criteria.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.findElements"
     },
     "click": {
      "!type": "fn() -> ?",
      "!doc": "<p>Schedules a command to click on this element.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.click"
     },
     "sendKeys": {
      "!type": "fn(var_args: string) -> ?",
      "!doc": "<p>Schedules a command to type a sequence on the DOM element represented by this\ninstance.</p>\n<p>Modifier keys (SHIFT, CONTROL, ALT, META) are stateful; once a modifier is\nprocessed in the keysequence, that key state is toggled until one of the\nfollowing occurs:</p>\n<ul>\n<li>The modifier key is encountered again in the sequence. At this point the\nstate of the key is toggled (along with the appropriate keyup/down events).</li>\n<li><p>The <code ng-non-bindable>webdriver.Key.NULL</code> key is encountered in the sequence. When\nthis key is encountered, all modifier keys current in the down state are\nreleased (with accompanying keyup events). The NULL key can be used to\nsimulate common keyboard shortcuts:</p>\n<pre><code>  element.sendKeys(&quot;text was&quot;,\n                   webdriver.Key.CONTROL, &quot;a&quot;, webdriver.Key.NULL,\n                   &quot;now text is&quot;);\n  // Alternatively:\n  element.sendKeys(&quot;text was&quot;,\n                   webdriver.Key.chord(webdriver.Key.CONTROL, &quot;a&quot;),\n                   &quot;now text is&quot;);\n</code></pre></li>\n<li><p>The end of the keysequence is encountered. When there are no more keys\nto type, all depressed modifier keys are released (with accompanying keyup\nevents).</p>\n</li>\n</ul>\n<p>If this element is a file input (<code ng-non-bindable>&lt;input type=\"file\"&gt;</code>), the\nspecified key sequence should specify the path to the file to attach to\nthe element. This is analgous to the user clicking &quot;Browse...&quot; and entering\nthe path into the file select dialog.</p>\n<pre><code>var form = driver.findElement(By.css(&#39;form&#39;));\nvar element = form.findElement(By.css(&#39;input[type=file]&#39;));\nelement.sendKeys(&#39;/path/to/file.txt&#39;);\nform.submit();\n</code></pre><p>For uploads to function correctly, the entered path must reference a file\non the <em>browser&#39;s</em> machine, not the local machine running this script. When\nrunning against a remote Selenium server, a [<code ng-non-bindable>webdriver.FileDetector</code>](webdriver.FileDetector)\nmay be used to transparently copy files to the remote machine before\nattempting to upload them in the browser.</p>\n<p><strong>Note:</strong> On browsers where native keyboard events are not supported\n(e.g. Firefox on OS X), key events will be synthesized. Special\npunctionation keys will be synthesized according to a standard QWERTY en-us\nkeyboard layout.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.sendKeys"
     },
     "getTagName": {
      "!type": "fn() -> ?",
      "!doc": "<p>Schedules a command to query for the tag/node name of this element.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.getTagName"
     },
     "getCssValue": {
      "!type": "fn(cssStyleProperty: string) -> ?",
      "!doc": "<p>Schedules a command to query for the computed style of the element\nrepresented by this instance. If the element inherits the named style from\nits parent, the parent will be queried for its value.  Where possible, color\nvalues will be converted to their hex representation (e.g. #00ff00 instead of\nrgb(0, 255, 0)).</p>\n<p><em>Warning:</em> the value returned will be as the browser interprets it, so\nit may be tricky to form a proper assertion.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.getCssValue"
     },
     "getAttribute": {
      "!type": "fn(attributeName: string) -> ?",
      "!doc": "<p>Schedules a command to query for the value of the given attribute of the\nelement. Will return the current value, even if it has been modified after\nthe page has been loaded. More exactly, this method will return the value of\nthe given attribute, unless that attribute is not present, in which case the\nvalue of the property with the same name is returned. If neither value is\nset, null is returned (for example, the &quot;value&quot; property of a textarea\nelement). The &quot;style&quot; attribute is converted as best can be to a\ntext representation with a trailing semi-colon. The following are deemed to\nbe &quot;boolean&quot; attributes and will return either &quot;true&quot; or null:</p>\n<p>async, autofocus, autoplay, checked, compact, complete, controls, declare,\ndefaultchecked, defaultselected, defer, disabled, draggable, ended,\nformnovalidate, hidden, indeterminate, iscontenteditable, ismap, itemscope,\nloop, multiple, muted, nohref, noresize, noshade, novalidate, nowrap, open,\npaused, pubdate, readonly, required, reversed, scoped, seamless, seeking,\nselected, spellcheck, truespeed, willvalidate</p>\n<p>Finally, the following commonly mis-capitalized attribute/property names\nare evaluated as expected:</p>\n<ul>\n<li>&quot;class&quot;</li>\n<li>&quot;readonly&quot;</li>\n</ul>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.getAttribute"
     },
     "getText": {
      "!type": "fn() -> ?",
      "!doc": "<p>Get the visible (i.e. not hidden by CSS) innerText of this element, including\nsub-elements, without any leading or trailing whitespace.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.getText"
     },
     "getSize": {
      "!type": "fn() -> ?",
      "!doc": "<p>Schedules a command to compute the size of this element&#39;s bounding box, in\npixels.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.getSize"
     },
     "getLocation": {
      "!type": "fn() -> ?",
      "!doc": "<p>Schedules a command to compute the location of this element in page space.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.getLocation"
     },
     "isEnabled": {
      "!type": "fn() -> ?",
      "!doc": "<p>Schedules a command to query whether the DOM element represented by this\ninstance is enabled, as dicted by the <code ng-non-bindable>disabled</code> attribute.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.isEnabled"
     },
     "isSelected": {
      "!type": "fn() -> ?",
      "!doc": "<p>Schedules a command to query whether this element is selected.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.isSelected"
     },
     "submit": {
      "!type": "fn() -> ?",
      "!doc": "<p>Schedules a command to submit the form containing this element (or this\nelement if it is a FORM element). This command is a no-op if the element is\nnot contained in a form.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.submit"
     },
     "clear": {
      "!type": "fn() -> ?",
      "!doc": "<p>Schedules a command to clear the <code ng-non-bindable>value</code> of this element. This command\nhas no effect if the underlying DOM element is neither a text INPUT element\nnor a TEXTAREA element.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.clear"
     },
     "isDisplayed": {
      "!type": "fn() -> ?",
      "!doc": "<p>Schedules a command to test whether this element is currently displayed.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.isDisplayed"
     },
     "takeScreenshot": {
      "!type": "fn(opt_scroll?: +boolean) -> ?",
      "!doc": "<p>Take a screenshot of the visible region encompassed by this element&#39;s\nbounding rectangle.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.takeScreenshot"
     },
     "getOuterHtml": {
      "!type": "fn() -> ?",
      "!doc": "<p>Schedules a command to retrieve the outer HTML of this element.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.getOuterHtml"
     },
     "getInnerHtml": {
      "!type": "fn() -> ?",
      "!doc": "<p>Schedules a command to retrieve the inner HTML of this element.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.getInnerHtml"
     }
    }
   },
   "WebElementPromise": {
    "!type": "fn(driver: +webdriver.WebDriver, el: ?)",
    "!doc": "<p>WebElementPromise is a promise that will be fulfilled with a WebElement.\nThis serves as a forward proxy on WebElement, allowing calls to be\nscheduled without directly on this instance before the underlying\nWebElement has been fulfilled. In other words, the following two statements\nare equivalent:</p>\n<pre><code>driver.findElement({id: &#39;my-button&#39;}).click();\ndriver.findElement({id: &#39;my-button&#39;}).then(function(el) {\n  return el.click();\n});\n</code></pre>",
    "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElementPromise",
    "prototype": {
     "cancel": {
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElementPromise.prototype.cancel"
     },
     "isPending": {
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElementPromise.prototype.isPending"
     },
     "then": {
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElementPromise.prototype.then"
     },
     "thenCatch": {
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElementPromise.prototype.thenCatch"
     },
     "thenFinally": {
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElementPromise.prototype.thenFinally"
     },
     "getId": {
      "!doc": "<p>Defers returning the element ID until the wrapped WebElement has been\nresolved.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElementPromise.prototype.getId"
     }
    }
   },
   "Alert": {
    "!type": "fn(driver: +webdriver.WebDriver, text: string)",
    "!doc": "<p>Represents a modal dialog such as <code ng-non-bindable>alert</code>, <code ng-non-bindable>confirm</code>, or\n<code ng-non-bindable>prompt</code>. Provides functions to retrieve the message displayed with\nthe alert, accept or dismiss the alert, and set the response text (in the\ncase of <code ng-non-bindable>prompt</code>).</p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=webdriver.Alert",
    "prototype": {
     "getText": {
      "!type": "fn() -> ?",
      "!doc": "<p>Retrieves the message text displayed with this alert. For instance, if the\nalert were opened with alert(&quot;hello&quot;), then this would return &quot;hello&quot;.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.Alert.prototype.getText"
     },
     "accept": {
      "!type": "fn() -> ?",
      "!doc": "<p>Accepts this alert.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.Alert.prototype.accept"
     },
     "dismiss": {
      "!type": "fn() -> ?",
      "!doc": "<p>Dismisses this alert.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.Alert.prototype.dismiss"
     },
     "sendKeys": {
      "!type": "fn(text: string) -> ?",
      "!doc": "<p>Sets the response text on this alert. This command will return an error if\nthe underlying alert does not support response text (e.g. window.alert and\nwindow.confirm).</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.Alert.prototype.sendKeys"
     }
    }
   },
   "AlertPromise": {
    "!type": "fn(driver: +webdriver.WebDriver, alert: ?)",
    "!doc": "<p>AlertPromise is a promise that will be fulfilled with an Alert. This promise\nserves as a forward proxy on an Alert, allowing calls to be scheduled\ndirectly on this instance before the underlying Alert has been fulfilled. In\nother words, the following two statements are equivalent:</p>\n<pre><code>driver.switchTo().alert().dismiss();\ndriver.switchTo().alert().then(function(alert) {\n  return alert.dismiss();\n});\n</code></pre>",
    "!url": "http://angular.github.io/protractor/#/api?view=webdriver.AlertPromise",
    "prototype": {
     "cancel": {
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.AlertPromise.prototype.cancel"
     },
     "isPending": {
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.AlertPromise.prototype.isPending"
     },
     "then": {
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.AlertPromise.prototype.then"
     },
     "thenCatch": {
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.AlertPromise.prototype.thenCatch"
     },
     "thenFinally": {
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.AlertPromise.prototype.thenFinally"
     },
     "getText": {
      "!doc": "<p>Defer returning text until the promised alert has been resolved.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.AlertPromise.prototype.getText"
     },
     "accept": {
      "!doc": "<p>Defers action until the alert has been located.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.AlertPromise.prototype.accept"
     },
     "dismiss": {
      "!doc": "<p>Defers action until the alert has been located.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.AlertPromise.prototype.dismiss"
     },
     "sendKeys": {
      "!doc": "<p>Defers action until the alert has been located.</p>\n",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.AlertPromise.prototype.sendKeys"
     }
    }
   },
   "UnhandledAlertError": {
    "!type": "fn(message: string, text: string, alert: +webdriver.Alert)",
    "!doc": "<p>An error returned to indicate that there is an unhandled modal dialog on the\ncurrent page.</p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=webdriver.UnhandledAlertError",
    "prototype": {
     "getAlertText": {
      "!type": "fn() -> string",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.UnhandledAlertError.prototype.getAlertText"
     }
    }
   },
   "FileDetector": {
    "!doc": "<p>Used with [<code ng-non-bindable>WebElement#sendKeys</code>](webdriver.WebElement.prototype.sendKeys) on file\ninput elements (<code ng-non-bindable>&lt;input type=\"file\"&gt;</code>) to detect when the entered key\nsequence defines the path to a file.</p>\n<p>By default, [WebElement&#39;s](webdriver.WebElement) will enter all\nkey sequences exactly as entered. You may set a\n[file detector](webdriver.WebDriver.prototype.setFileDetector) on the parent\nWebDriver instance to define custom behavior for handling file elements. Of\nparticular note is the <code ng-non-bindable>selenium-webdriver&#x2F;remote.FileDetector</code>, which\nshould be used when running against a remote\n<a href=\"http://docs.seleniumhq.org/download/\">Selenium Server</a>.</p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=webdriver.FileDetector"
   }
  },
  "promise": {
   "!url": "http://angular.github.io/protractor/#/api?view=promise",
   "captureStackTrace": {
    "!type": "fn(name: string, msg: string, topFn: fn()) -> +Error",
    "!doc": "<p>Generates an error to capture the current stack trace.</p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=promise.captureStackTrace"
   },
   "CancellationError": {
    "!doc": "<p>Error used when the computation of a promise is cancelled.</p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=promise.CancellationError"
   },
   "MultipleUnhandledRejectionError": {
    "!doc": "<p>Error used when there are multiple unhandled promise rejections detected\nwithin a task or callback.</p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=promise.MultipleUnhandledRejectionError"
   },
   "Thenable": {
    "!doc": "<p>Thenable is a promise-like object with a <code ng-non-bindable>then</code> method which may be\nused to schedule callbacks on a promised value.</p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=promise.Thenable"
   },
   "Promise": {
    "!doc": "<p>Represents the eventual value of a completed operation. Each promise may be\nin one of three states: pending, fulfilled, or rejected. Each promise starts\nin the pending state and may make a single transition to either a\nfulfilled or rejected state, at which point the promise is considered\nresolved.</p>\n<br />See [<code ng-non-bindable>http:&#x2F;&#x2F;promises-aplus.github.io&#x2F;promises-spec&#x2F;</code>](http://promises-aplus.github.io/promises-spec/)",
    "!url": "http://angular.github.io/protractor/#/api?view=promise.Promise"
   },
   "Deferred": {
    "!doc": "<p>Represents a value that will be resolved at some point in the future. This\nclass represents the protected &quot;producer&quot; half of a Promise - each Deferred\nhas a <code ng-non-bindable>promise</code> property that may be returned to consumers for\nregistering callbacks, reserving the ability to resolve the deferred to the\nproducer.</p>\n<p>If this Deferred is rejected and there are no listeners registered before\nthe next turn of the event loop, the rejection will be passed to the\n<code ng-non-bindable>webdriver.promise.ControlFlow</code> as an unhandled failure.</p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=promise.Deferred"
   },
   "isPromise": {
    "!type": "fn(value: ?) -> +boolean",
    "!doc": "<p>Determines whether a <code ng-non-bindable>value</code> should be treated as a promise.\nAny object whose &quot;then&quot; property is a function will be considered a promise.</p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=promise.isPromise"
   },
   "delayed": {
    "!type": "fn(ms: number) -> +promise.Promise",
    "!doc": "<p>Creates a promise that will be resolved at a set time in the future.</p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=promise.delayed"
   },
   "defer": {
    "!type": "fn() -> ?",
    "!doc": "<p>Creates a new deferred object.</p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=promise.defer"
   },
   "fulfilled": {
    "!type": "fn(opt_value?: +T) -> ?",
    "!doc": "<p>Creates a promise that has been resolved with the given value.</p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=promise.fulfilled"
   },
   "rejected": {
    "!type": "fn(opt_reason?: ?) -> ?",
    "!doc": "<p>Creates a promise that has been rejected with the given reason.</p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=promise.rejected"
   },
   "checkedNodeCall": {
    "!type": "fn(fn: fn(), var_args: undefined) -> +promise.Promise",
    "!doc": "<p>Wraps a function that expects a node-style callback as its final\nargument. This callback expects two arguments: an error value (which will be\nnull if the call succeeded), and the success value as the second argument.\nThe callback will the resolve or reject the returned promise, based on its arguments.</p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=promise.checkedNodeCall"
   },
   "when": {
    "!type": "fn(value: ?, opt_callback?: fn(), opt_errback?: fn()) -> +promise.Promise",
    "!doc": "<p>Registers an observer on a promised <code ng-non-bindable>value</code>, returning a new promise\nthat will be resolved when the value is. If <code ng-non-bindable>value</code> is not a promise,\nthen the return promise will be immediately resolved.</p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=promise.when"
   },
   "asap": {
    "!type": "fn(value: ?, callback: fn(), opt_errback?: fn())",
    "!doc": "<p>Invokes the appropriate callback function as soon as a promised\n<code ng-non-bindable>value</code> is resolved. This function is similar to\n<code ng-non-bindable>webdriver.promise.when</code>, except it does not return a new promise.</p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=promise.asap"
   },
   "all": {
    "!type": "fn(arr: [undefined]) -> ?",
    "!doc": "<p>Given an array of promises, will return a promise that will be fulfilled\nwith the fulfillment values of the input array&#39;s values. If any of the\ninput array&#39;s promises are rejected, the returned promise will be rejected\nwith the same reason.</p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=promise.all"
   },
   "map": {
    "!type": "fn(arr: [TYPE], fn: fn(arg0: +TYPE, arg1: number, arg2: [TYPE]) -> undefined, opt_self?: +SELF)",
    "!doc": "<p>Calls a function for each element in an array and inserts the result into a\nnew array, which is used as the fulfillment value of the promise returned\nby this function.</p>\n<p>If the return value of the mapping function is a promise, this function\nwill wait for it to be fulfilled before inserting it into the new array.</p>\n<p>If the mapping function throws or returns a rejected promise, the\npromise returned by this function will be rejected with the same reason.\nOnly the first failure will be reported; all subsequent errors will be\nsilently ignored.</p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=promise.map"
   },
   "filter": {
    "!type": "fn(arr: [TYPE], fn: fn(arg0: +TYPE, arg1: number, arg2: [TYPE]) -> +boolean, opt_self?: +SELF)",
    "!doc": "<p>Calls a function for each element in an array, and if the function returns\ntrue adds the element to a new array.</p>\n<p>If the return value of the filter function is a promise, this function\nwill wait for it to be fulfilled before determining whether to insert the\nelement into the new array.</p>\n<p>If the filter function throws or returns a rejected promise, the promise\nreturned by this function will be rejected with the same reason. Only the\nfirst failure will be reported; all subsequent errors will be silently\nignored.</p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=promise.filter"
   },
   "fullyResolved": {
    "!type": "fn(value: ?) -> +promise.Promise",
    "!doc": "<p>Returns a promise that will be resolved with the input value in a\nfully-resolved state. If the value is an array, each element will be fully\nresolved. Likewise, if the value is an object, all keys will be fully\nresolved. In both cases, all nested arrays and objects will also be\nfully resolved.  All fields are resolved in place; the returned promise will\nresolve on <code ng-non-bindable>value</code> and not a copy.</p>\n<p>Warning: This function makes no checks against objects that contain\ncyclical references:</p>\n<pre><code>var value = {};\nvalue[&#39;self&#39;] = value;\npromise.fullyResolved(value);  // Stack overflow.\n</code></pre>",
    "!url": "http://angular.github.io/protractor/#/api?view=promise.fullyResolved"
   },
   "ControlFlow": {
    "!doc": "<p>Handles the execution of scheduled tasks, each of which may be an\nasynchronous operation. The control flow will ensure tasks are executed in\nthe ordered scheduled, starting each task only once those before it have\ncompleted.</p>\n<p>Each task scheduled within this flow may return a\n<code ng-non-bindable>webdriver.promise.Promise</code> to indicate it is an asynchronous\noperation. The ControlFlow will wait for such promises to be resolved before\nmarking the task as completed.</p>\n<p>Tasks and each callback registered on a <code ng-non-bindable>webdriver.promise.Promise</code>\nwill be run in their own ControlFlow frame.  Any tasks scheduled within a\nframe will take priority over previously scheduled tasks. Furthermore, if any\nof the tasks in the frame fail, the remainder of the tasks in that frame will\nbe discarded and the failure will be propagated to the user through the\ncallback/task&#39;s promised result.</p>\n<p>Each time a ControlFlow empties its task queue, it will fire an\n<code ng-non-bindable>IDLE</code> event. Conversely,\nwhenever the flow terminates due to an unhandled error, it will remove all\nremaining tasks in its queue and fire an\n<code ng-non-bindable>webdriver.promise.ControlFlow.EventType.UNCAUGHT_EXCEPTION UNCAUGHT_EXCEPTION</code> event. If there are no listeners registered with the\nflow, the error will be rethrown to the global error handler.</p>\n<p>Refer to the <code ng-non-bindable>webdriver.promise</code> module documentation for a detailed\nexplanation of how the ControlFlow coordinates task execution.</p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=promise.ControlFlow",
    "EventType": {
     "!doc": "<p>Events that may be emitted by an <code ng-non-bindable>webdriver.promise.ControlFlow</code>.</p>\n",
     "!url": "http://angular.github.io/protractor/#/api?view=promise.ControlFlow.EventType"
    }
   },
   "setDefaultFlow": {
    "!type": "fn(flow: +promise.ControlFlow)",
    "!doc": "<p>Changes the default flow to use when no others are active.</p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=promise.setDefaultFlow"
   },
   "controlFlow": {
    "!type": "fn() -> +promise.ControlFlow",
    "!url": "http://angular.github.io/protractor/#/api?view=promise.controlFlow"
   },
   "createFlow": {
    "!type": "fn(callback: fn(arg0: +promise.ControlFlow)) -> +promise.Promise",
    "!doc": "<p>Creates a new control flow. The provided callback will be invoked as the\nfirst task within the new flow, with the flow as its sole argument. Returns\na promise that resolves to the callback result.</p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=promise.createFlow"
   },
   "isGenerator": {
    "!type": "fn(fn: fn()) -> +boolean",
    "!doc": "<p>Tests is a function is a generator.</p>\n",
    "!url": "http://angular.github.io/protractor/#/api?view=promise.isGenerator"
   },
   "consume": {
    "!type": "fn(generatorFn: fn(), opt_self?: +Object, var_args: ?) -> ?",
    "!doc": "<p>Consumes a <code ng-non-bindable>GeneratorFunction</code>. Each time the generator yields a\npromise, this function will wait for it to be fulfilled before feeding the\nfulfilled value back into <code ng-non-bindable>next</code>. Likewise, if a yielded promise is\nrejected, the rejection error will be passed to <code ng-non-bindable>throw</code>.</p>\n<p><strong>Example 1:</strong> the Fibonacci Sequence.</p>\n<pre><code>promise.consume(function* fibonacci() {\n  var n1 = 1, n2 = 1;\n  for (var i = 0; i &lt; 4; ++i) {\n    var tmp = yield n1 + n2;\n    n1 = n2;\n    n2 = tmp;\n  }\n  return n1 + n2;\n}).then(function(result) {\n  console.log(result);  // 13\n});\n</code></pre><p><strong>Example 2:</strong> a generator that throws.</p>\n<pre><code>promise.consume(function* () {\n  yield promise.delayed(250).then(function() {\n    throw Error(&#39;boom&#39;);\n  });\n}).thenCatch(function(e) {\n  console.log(e.toString());  // Error: boom\n});\n</code></pre>",
    "!url": "http://angular.github.io/protractor/#/api?view=promise.consume"
   }
  }
 },
 "element": {
  "all": {
   "!type": "fn(locator: +webdriver.Locator) -> +ElementArrayFinder",
   "!doc": "<p>ElementArrayFinder is used for operations on an array of elements (as opposed\nto a single element).</p>\n<p>The ElementArrayFinder is used to set up a chain of conditions that identify\nan array of elements. In particular, you can call all(locator) and\nfilter(filterFn) to return a new ElementArrayFinder modified by the\nconditions, and you can call get(index) to return a single ElementFinder at\nposition &#39;index&#39;.</p>\n<p>Similar to jquery, ElementArrayFinder will search all branches of the DOM\nto find the elements that satisfy the conditions (i.e. all, filter, get).\nHowever, an ElementArrayFinder will not actually retrieve the elements until\nan action is called, which means it can be set up in helper files (i.e.\npage objects) before the page is available, and reused as the page changes.</p>\n<p>You can treat an ElementArrayFinder as an array of WebElements for most\npurposes, in particular, you may perform actions (i.e. click, getText) on\nthem as you would an array of WebElements. The action will apply to\nevery element identified by the ElementArrayFinder. ElementArrayFinder\nextends Promise, and once an action is performed on an ElementArrayFinder,\nthe latest result can be accessed using then, and will be returned as an\narray of the results; the array has length equal to the length of the\nelements found by the ElementArrayFinder and each result represents the\nresult of performing the action on the element. Unlike a WebElement, an\nElementArrayFinder will wait for the angular app to settle before\nperforming finds or actions.</p>\n",
   "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder"
  },
  "!type": "fn(locator: +webdriver.Locator) -> +ElementFinder",
  "!doc": "<p>The ElementFinder simply represents a single element of an\nElementArrayFinder (and is more like a convenience object). As a result,\nanything that can be done with an ElementFinder, can also be done using\nan ElementArrayFinder.</p>\n<p>The ElementFinder can be treated as a WebElement for most purposes, in\nparticular, you may perform actions (i.e. click, getText) on them as you\nwould a WebElement. Once an action is performed on an ElementFinder, the\nlatest result from the chain can be accessed using the then method.\nUnlike a WebElement, an ElementFinder will wait for angular to settle before\nperforming finds or actions.</p>\n<p>ElementFinder can be used to build a chain of locators that is used to find\nan element. An ElementFinder does not actually attempt to find the element\nuntil an action is called, which means they can be set up in helper files\nbefore the page is available.</p>\n",
  "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder"
 },
 "$": {
  "!type": "fn() -> +build$",
  "!doc": "<p>Shortcut for querying the document directly with css.\n<code>element(by.css(&#39;.abc&#39;))</code> is equivalent to <code>$(&#39;.abc&#39;)</code></p>\n",
  "!url": "http://angular.github.io/protractor/#/api?view=build$"
 },
 "$$": {
  "!type": "fn() -> +build$$",
  "!doc": "<p>Shortcut for querying the document directly with css.\n<code>element.all(by.css(&#39;.abc&#39;))</code> is equivalent to <code>$$(&#39;.abc&#39;)</code></p>\n",
  "!url": "http://angular.github.io/protractor/#/api?view=build$$"
 },
 "browser": {
  "!type": "+Protractor",
  "!url": "http://angular.github.io/protractor/#/api?view=Protractor"
 },
 "by": {
  "!type": "+ProtractorBy",
  "!doc": "<p>The Protractor Locators. These provide ways of finding elements in\nAngular applications by binding, model, etc.</p>\n",
  "!url": "http://angular.github.io/protractor/#/api?view=ProtractorBy"
 }
};
    
})