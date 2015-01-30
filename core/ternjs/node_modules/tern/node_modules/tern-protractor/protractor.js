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
     "!doc": "Create a shallow copy of ElementArrayFinder.",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder.prototype.clone"
    },
    "all": {
     "!type": "fn(subLocator: +webdriver.Locator) -> +ElementArrayFinder",
     "!doc": "Calls to ElementArrayFinder may be chained to find an array of elements\nusing the current elements in this ElementArrayFinder as the starting point.\nThis function returns a new ElementArrayFinder which would contain the\nchildren elements found (and could also be empty).",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder.prototype.all"
    },
    "filter": {
     "!type": "fn(filterFn: fn(arg0: +ElementFinder, arg1: number) -> +webdriver.WebElement.Promise) -> +ElementArrayFinder",
     "!doc": "Apply a filter function to each element within the ElementArrayFinder. Returns\na new ElementArrayFinder with all elements that pass the filter function. The\nfilter function receives the ElementFinder as the first argument\nand the index as a second arg.\nThis does not actually retrieve the underlying list of elements, so it can\nbe used in page objects.",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder.prototype.filter"
    },
    "get": {
     "!type": "fn(index: number) -> +ElementFinder",
     "!doc": "Get an element within the ElementArrayFinder by index. The index starts at 0.\nNegative indices are wrapped (i.e. -i means ith element from last)\nThis does not actually retrieve the underlying element.",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder.prototype.get"
    },
    "first": {
     "!type": "fn() -> +ElementFinder",
     "!doc": "Get the first matching element for the ElementArrayFinder. This does not\nactually retrieve the underlying element.",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder.prototype.first"
    },
    "last": {
     "!type": "fn() -> +ElementFinder",
     "!doc": "Get the last matching element for the ElementArrayFinder. This does not\nactually retrieve the underlying element.",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder.prototype.last"
    },
    "count": {
     "!type": "fn() -> +webdriver.promise.Promise",
     "!doc": "Count the number of elements represented by the ElementArrayFinder.",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder.prototype.count"
    },
    "locator": {
     "!type": "fn() -> +webdriver.Locator",
     "!doc": "Returns the most relevant locator.",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder.prototype.locator"
    },
    "each": {
     "!type": "fn(fn: fn(arg0: +ElementFinder))",
     "!doc": "Calls the input function on each ElementFinder represented by the ElementArrayFinder.",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder.prototype.each"
    },
    "map": {
     "!type": "fn(mapFn: fn(arg0: +ElementFinder, arg1: number)) -> +webdriver.promise.Promise",
     "!doc": "Apply a map function to each element within the ElementArrayFinder. The\ncallback receives the ElementFinder as the first argument and the index as\na second arg.",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder.prototype.map"
    },
    "reduce": {
     "!type": "fn(reduceFn: fn(arg0: number, arg1: +ElementFinder, arg2: number, arg3: [ElementFinder]), initialValue: ?) -> +webdriver.promise.Promise",
     "!doc": "Apply a reduce function against an accumulator and every element found \nusing the locator (from left-to-right). The reduce function has to reduce\nevery element into a single value (the accumulator). Returns promise of \nthe accumulator. The reduce function receives the accumulator, current \nElementFinder, the index, and the entire array of ElementFinders, \nrespectively.",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder.prototype.reduce"
    },
    "evaluate": {
     "!type": "fn(expression: string) -> +ElementArrayFinder",
     "!doc": "Evaluates the input as if it were on the scope of the current underlying\nelements.",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder.prototype.evaluate"
    },
    "allowAnimations": {
     "!type": "fn(value: string) -> +ElementArrayFinder",
     "!doc": "Determine if animation is allowed on the current underlying elements.",
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
    "clone": {
     "!type": "fn() -> +ElementFinder",
     "!doc": "Create a shallow copy of ElementFinder.",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder.prototype.clone"
    },
    "locator": {
     "!type": "fn() -> +webdriver.Locator",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder.prototype.locator"
    },
    "getWebElement": {
     "!type": "fn() -> +webdriver.WebElement",
     "!doc": "Returns the WebElement represented by this ElementFinder.\nThrows the WebDriver error if the element doesn't exist.",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder.prototype.getWebElement"
    },
    "then": {
     "!type": "fn(fn: fn(arg0: +webdriver.promise.Promise)) -> +webdriver.promise.Promise",
     "!doc": "Access the underlying actionResult of ElementFinder. Implementation allows\nElementFinder to be used as a webdriver.promise.Promise",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder.prototype.then"
    },
    "all": {
     "!type": "fn(subLocator: +webdriver.Locator) -> +ElementArrayFinder",
     "!doc": "Calls to element may be chained to find an array of elements within a parent.",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder.prototype.all"
    },
    "element": {
     "!type": "fn(subLocator: +webdriver.Locator) -> +ElementFinder",
     "!doc": "Calls to element may be chained to find elements within a parent.",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder.prototype.element"
    },
    "$$": {
     "!type": "fn(selector: string) -> +ElementArrayFinder",
     "!doc": "Shortcut for querying the document directly with css.",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder.prototype.$$"
    },
    "$": {
     "!type": "fn(selector: string) -> +ElementFinder",
     "!doc": "Shortcut for querying the document directly with css.",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder.prototype.$"
    },
    "isPresent": {
     "!type": "fn() -> +ElementFinder",
     "!doc": "Determine whether the element is present on the page.",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder.prototype.isPresent"
    },
    "isElementPresent": {
     "!type": "fn(subLocator: +webdriver.Locator) -> +ElementFinder",
     "!doc": "Override for WebElement.prototype.isElementPresent so that protractor waits\nfor Angular to settle before making the check.",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder.prototype.isElementPresent"
    },
    "evaluate": {
     "!type": "fn(expression: string) -> +ElementFinder",
     "!doc": "Evaluates the input as if it were on the scope of the current element.",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder.prototype.evaluate"
    },
    "allowAnimations": {
     "!type": "fn(value: string) -> +ElementFinder",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder.prototype.allowAnimations"
    },
    "isPending": {
     "!type": "fn() -> +boolean",
     "!doc": "Webdriver relies on this function to be present on Promises, so adding\nthis dummy function as we inherited from webdriver.promise.Promise, but\nthis function is irrelevant to our usage",
     "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder.prototype.isPending"
    }
   }
  },
  "Protractor": {
   "prototype": {
    "!proto": "webdriver.WebDriver.prototype",
    "waitForAngular": {
     "!type": "fn() -> +webdriver.promise.Promise",
     "!doc": "Instruct webdriver to wait until Angular has finished rendering and has\nno outstanding $http calls before continuing.",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.waitForAngular"
    },
    "findElement": {
     "!type": "fn() -> +webdriver.WebElement",
     "!doc": "Waits for Angular to finish rendering before searching for elements.",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.findElement"
    },
    "findElements": {
     "!type": "fn() -> +webdriver.promise.Promise",
     "!doc": "Waits for Angular to finish rendering before searching for elements.",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.findElements"
    },
    "isElementPresent": {
     "!type": "fn() -> +webdriver.promise.Promise",
     "!doc": "Tests if an element is present on the page.",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.isElementPresent"
    },
    "addMockModule": {
     "!type": "fn(name: string, script: string, varArgs: ?)",
     "!doc": "Add a module to load before Angular whenever Protractor.get is called.\nModules will be registered after existing modules already on the page,\nso any module registered here will override preexisting modules with the same\nname.",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.addMockModule"
    },
    "clearMockModules": {
     "!doc": "Clear the list of registered mock modules.",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.clearMockModules"
    },
    "removeMockModule": {
     "!type": "fn(name: string)",
     "!doc": "Remove a registered mock module.",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.removeMockModule"
    },
    "get": {
     "!type": "fn(destination: string, opt_timeout?: number)",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.get"
    },
    "refresh": {
     "!type": "fn(opt_timeout?: number)",
     "!doc": "See webdriver.WebDriver.refresh\n\nMakes a full reload of the current page and loads mock modules before\nAngular. Assumes that the page being loaded uses Angular.\nIf you need to access a page which does not have Angular on load, use\nthe wrapped webdriver directly.",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.refresh"
    },
    "navigate": {
     "!doc": "Mixin navigation methods back into the navigation object so that\nthey are invoked as before, i.e. driver.navigate().refresh()",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.navigate"
    },
    "setLocation": {
     "!type": "fn(url: string) -> +webdriver.promise.Promise",
     "!doc": "Browse to another page using in-page navigation.",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.setLocation"
    },
    "getLocationAbsUrl": {
     "!doc": "Returns the current absolute url from AngularJS.",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.getLocationAbsUrl"
    },
    "debugger": {
     "!doc": "Pauses the test and injects some helper functions into the browser, so that\ndebugging may be done in the browser console.\n\nThis should be used under node in debug mode, i.e. with\nprotractor debug <configuration.js>",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.debugger"
    },
    "pause": {
     "!type": "fn(opt_debugPort?: number)",
     "!doc": "Beta (unstable) pause function for debugging webdriver tests. Use\nbrowser.pause() in your test to enter the protractor debugger from that\npoint in the control flow.\nDoes not require changes to the command line (no need to add 'debug').",
     "!url": "http://angular.github.io/protractor/#/api?view=Protractor.prototype.pause"
    }
   }
  },
  "ProtractorBy": {
   "prototype": {
    "!proto": "WebdriverBy.prototype",
    "addLocator": {
     "!type": "fn(name: string, script: fn())",
     "!doc": "Add a locator to this instance of ProtractorBy. This locator can then be\nused with element(by.locatorName(args)).",
     "!url": "http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.addLocator"
    },
    "binding": {
     "!type": "fn(bindingDescriptor: string) -> ?",
     "!doc": "Find an element by binding.",
     "!url": "http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.binding"
    },
    "exactBinding": {
     "!type": "fn(bindingDescriptor: string) -> ?",
     "!doc": "Find an element by exact binding.",
     "!url": "http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.exactBinding"
    },
    "model": {
     "!type": "fn(model: string)",
     "!doc": "Find an element by ng-model expression.",
     "!url": "http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.model"
    },
    "buttonText": {
     "!type": "fn(searchText: string) -> ?",
     "!doc": "Find a button by text.",
     "!url": "http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.buttonText"
    },
    "partialButtonText": {
     "!type": "fn(searchText: string) -> ?",
     "!doc": "Find a button by partial text.",
     "!url": "http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.partialButtonText"
    },
    "repeater": {
     "!doc": "Find elements inside an ng-repeat.",
     "!url": "http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.repeater"
    },
    "cssContainingText": {
     "!doc": "Find elements by CSS which contain a certain string.",
     "!url": "http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.cssContainingText"
    },
    "options": {
     "!type": "fn(optionsDescriptor: string)",
     "!doc": "Find an element by ng-options expression.",
     "!url": "http://angular.github.io/protractor/#/api?view=ProtractorBy.prototype.options"
    }
   }
  },
  "WebdriverBy": {
   "prototype": {
    "!proto": "webdriver.By",
    "!doc": "webdriver's By is an enum of locator functions, so we must set it to\na prototype before inheriting from it.",
    "!url": "http://angular.github.io/protractor/#/api?view=WebdriverBy.prototype"
   }
  },
  "webdriver": {
   "Locator": {
    "!type": "fn(using: string, value: string)",
    "!doc": "An element locator.",
    "!url": "http://angular.github.io/protractor/#/api?view=webdriver.Locator",
    "checkLocator": {
     "!type": "fn(value: ?) -> +webdriver.Locator",
     "!doc": "Verifies that a <code ng-non-bindable>value</code> is a valid locator to use for searching for\nelements on the page.",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.Locator.checkLocator"
    },
    "prototype": {}
   },
   "By": {
    "!doc": "A collection of factory functions for creating [webdriver.Locator](webdriver.Locator)\ninstances.",
    "!url": "http://angular.github.io/protractor/#/api?view=webdriver.By",
    "className": {
     "!type": "fn(className: string) -> +webdriver.Locator",
     "!doc": "Locates elements that have a specific class name. The returned locator\nis equivalent to searching for elements with the CSS selector \".clazz\".",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.By.className"
    },
    "css": {
     "!type": "fn(selector: string) -> +webdriver.Locator",
     "!doc": "Locates elements using a CSS selector. For browsers that do not support\nCSS selectors, WebDriver implementations may return an\ninvalid selector error. An\nimplementation may, however, emulate the CSS selector API.",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.By.css"
    },
    "id": {
     "!type": "fn(id: string) -> +webdriver.Locator",
     "!doc": "Locates an element by its ID.",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.By.id"
    },
    "linkText": {
     "!type": "fn(text: string) -> +webdriver.Locator",
     "!doc": "Locates link elements whose visible\ntext matches the given string.",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.By.linkText"
    },
    "js": {
     "!type": "fn(script: string, var_args: ?) -> fn(arg0: +webdriver.WebDriver) -> +webdriver.promise.Promise",
     "!doc": "Locates an elements by evaluating a\nJavaScript expression.\nThe result of this expression must be an element or list of elements.",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.By.js"
    },
    "name": {
     "!type": "fn(name: string) -> +webdriver.Locator",
     "!doc": "Locates elements whose <code ng-non-bindable>name</code> attribute has the given value.",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.By.name"
    },
    "partialLinkText": {
     "!type": "fn(text: string) -> +webdriver.Locator",
     "!doc": "Locates link elements whose visible\ntext contains the given substring.",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.By.partialLinkText"
    },
    "tagName": {
     "!type": "fn(text: string) -> +webdriver.Locator",
     "!doc": "Locates elements with a given tag name. The returned locator is\nequivalent to using the <code ng-non-bindable>getElementsByTagName</code> DOM function.",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.By.tagName"
    },
    "xpath": {
     "!type": "fn(xpath: string) -> +webdriver.Locator",
     "!doc": "Locates elements matching a XPath selector. Care should be taken when\nusing an XPath selector with a [webdriver.WebElement](webdriver.WebElement) as WebDriver\nwill respect the context in the specified in the selector. For example,\ngiven the selector <code ng-non-bindable>\"//div\"</code>, WebDriver will search from the\ndocument root regardless of whether the locator was used with a\nWebElement.",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.By.xpath"
    }
   },
   "WebDriver": {
    "!type": "fn(session: +webdriver.Session, executor: +webdriver.CommandExecutor, opt_flow?: +webdriver.promise.ControlFlow)",
    "!doc": "Creates a new WebDriver client, which provides control over a browser.\n\nEvery WebDriver command returns a <code ng-non-bindable>webdriver.promise.Promise</code> that\nrepresents the result of that command. Callbacks may be registered on this\nobject to manipulate the command result or catch an expected error. Any\ncommands scheduled with a callback are considered sub-commands and will\nexecute before the next command in the current frame. For example:\n<pre><code>\n  var message = [];\n  driver.call(message.push, message, 'a').then(function() {\n    driver.call(message.push, message, 'b');\n  });\n  driver.call(message.push, message, 'c');\n  driver.call(function() {\n    alert('message is abc? ' + (message.join('') == 'abc'));\n  });\n</code></pre>",
    "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver",
    "attachToSession": {
     "!type": "fn(executor: +webdriver.CommandExecutor, sessionId: string, opt_flow?: +webdriver.promise.ControlFlow) -> +webdriver.WebDriver",
     "!doc": "Creates a new WebDriver client for an existing session.",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.attachToSession"
    },
    "createSession": {
     "!type": "fn(executor: +webdriver.CommandExecutor, desiredCapabilities: +webdriver.Capabilities, opt_flow?: +webdriver.promise.ControlFlow) -> +webdriver.WebDriver",
     "!doc": "Creates a new WebDriver session.",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.createSession"
    },
    "prototype": {
     "controlFlow": {
      "!type": "fn() -> +webdriver.promise.ControlFlow",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.controlFlow"
     },
     "schedule": {
      "!type": "fn(command: +webdriver.Command, description: string) -> ?",
      "!doc": "Schedules a <code ng-non-bindable>webdriver.Command</code> to be executed by this driver's\n<code ng-non-bindable>webdriver.CommandExecutor</code>.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.schedule"
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
      "!doc": "Schedules a command to quit the current session. After calling quit, this\ninstance will be invalidated and may no longer be used to issue commands\nagainst the browser.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.quit"
     },
     "actions": {
      "!type": "fn() -> +webdriver.ActionSequence",
      "!doc": "Creates a new action sequence using this driver. The sequence will not be\nscheduled for execution until webdriver.ActionSequence#perform is\ncalled. Example:\n<pre><code>\n  driver.actions().\n      mouseDown(element1).\n      mouseMove(element2).\n      mouseUp().\n      perform();\n</code></pre>",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.actions"
     },
     "executeScript": {
      "!type": "fn(script: string, var_args: ?) -> ?",
      "!doc": "Schedules a command to execute JavaScript in the context of the currently\nselected frame or window. The script fragment will be executed as the body\nof an anonymous function. If the script is provided as a function object,\nthat function will be converted to a string for injection into the target\nwindow.\n\nAny arguments provided in addition to the script will be included as script\narguments and may be referenced using the <code ng-non-bindable>arguments</code> object.\nArguments may be a boolean, number, string, or <code ng-non-bindable>webdriver.WebElement</code>.\nArrays and objects may also be used as script arguments as long as each item\nadheres to the types previously mentioned.\n\nThe script may refer to any variables accessible from the current window.\nFurthermore, the script will execute in the window's context, thus\n<code ng-non-bindable>document</code> may be used to refer to the current document. Any local\nvariables will not be available once the script has finished executing,\nthough global variables will persist.\n\nIf the script has a return value (i.e. if the script contains a return\nstatement), then the following steps will be taken for resolving this\nfunctions return value:\n<ul>\n<li>For a HTML element, the value will resolve to a\n    <code ng-non-bindable>webdriver.WebElement</code></li>\n<li>Null and undefined return values will resolve to null</li>\n<li>Booleans, numbers, and strings will resolve as is</li>\n<li>Functions will resolve to their string representation</li>\n<li>For arrays and objects, each member item will be converted according to\n    the rules above</li>\n</ul>",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.executeScript"
     },
     "executeAsyncScript": {
      "!type": "fn(script: string, var_args: ?) -> ?",
      "!doc": "Schedules a command to execute asynchronous JavaScript in the context of the\ncurrently selected frame or window. The script fragment will be executed as\nthe body of an anonymous function. If the script is provided as a function\nobject, that function will be converted to a string for injection into the\ntarget window.\n\nAny arguments provided in addition to the script will be included as script\narguments and may be referenced using the <code ng-non-bindable>arguments</code> object.\nArguments may be a boolean, number, string, or <code ng-non-bindable>webdriver.WebElement</code>.\nArrays and objects may also be used as script arguments as long as each item\nadheres to the types previously mentioned.\n\nUnlike executing synchronous JavaScript with\n<code ng-non-bindable>webdriver.WebDriver.prototype.executeScript</code>, scripts executed with\nthis function must explicitly signal they are finished by invoking the\nprovided callback. This callback will always be injected into the\nexecuted function as the last argument, and thus may be referenced with\n<code ng-non-bindable>arguments[arguments.length - 1]</code>. The following steps will be taken\nfor resolving this functions return value against the first argument to the\nscript's callback function:\n<ul>\n<li>For a HTML element, the value will resolve to a\n    <code ng-non-bindable>webdriver.WebElement</code></li>\n<li>Null and undefined return values will resolve to null</li>\n<li>Booleans, numbers, and strings will resolve as is</li>\n<li>Functions will resolve to their string representation</li>\n<li>For arrays and objects, each member item will be converted according to\n    the rules above</li>\n</ul>\n\nExample #1: Performing a sleep that is synchronized with the currently\nselected window:\n<code><pre>\nvar start = new Date().getTime();\ndriver.executeAsyncScript(\n    'window.setTimeout(arguments[arguments.length - 1], 500);').\n    then(function() {\n      console.log('Elapsed time: ' + (new Date().getTime() - start) + ' ms');\n    });\n</pre></code>\n\nExample #2: Synchronizing a test with an AJAX application:\n<code><pre>\nvar button = driver.findElement(By.id('compose-button'));\nbutton.click();\ndriver.executeAsyncScript(\n    'var callback = arguments[arguments.length - 1];' +\n    'mailClient.getComposeWindowWidget().onload(callback);');\ndriver.switchTo().frame('composeWidget');\ndriver.findElement(By.id('to')).sendKeys('dog@example.com');\n</pre></code>\n\nExample #3: Injecting a XMLHttpRequest and waiting for the result. In this\nexample, the inject script is specified with a function literal. When using\nthis format, the function is converted to a string for injection, so it\nshould not reference any symbols not defined in the scope of the page under\ntest.\n<code><pre>\ndriver.executeAsyncScript(function() {\n  var callback = arguments[arguments.length - 1];\n  var xhr = new XMLHttpRequest();\n  xhr.open(\"GET\", \"/resource/data.json\", true);\n  xhr.onreadystatechange = function() {\n    if (xhr.readyState == 4) {\n      callback(xhr.responseText);\n    }\n  }\n  xhr.send('');\n}).then(function(str) {\n  console.log(JSON.parse(str)['food']);\n});\n</pre></code>",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.executeAsyncScript"
     },
     "call": {
      "!type": "fn(fn: fn(arg0: undefined) -> +T, opt_scope?: +Object, var_args: ?) -> ?",
      "!doc": "Schedules a command to execute a custom function.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.call"
     },
     "wait": {
      "!type": "fn(condition: ?, timeout: number, opt_message?: string) -> ?",
      "!doc": "Schedules a command to wait for a condition to hold, as defined by some\nuser supplied function. If any errors occur while evaluating the wait, they\nwill be allowed to propagate.\n\n<p>In the event a condition returns a webdriver.promise.Promise, the\npolling loop will wait for it to be resolved and use the resolved value for\nevaluating whether the condition has been satisfied. The resolution time for\na promise is factored into whether a wait has timed out.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.wait"
     },
     "sleep": {
      "!type": "fn(ms: number) -> ?",
      "!doc": "Schedules a command to make the driver sleep for the given amount of time.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.sleep"
     },
     "getWindowHandle": {
      "!type": "fn() -> ?",
      "!doc": "Schedules a command to retrieve they current window handle.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.getWindowHandle"
     },
     "getAllWindowHandles": {
      "!type": "fn() -> ?",
      "!doc": "Schedules a command to retrieve the current list of available window handles.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.getAllWindowHandles"
     },
     "getPageSource": {
      "!type": "fn() -> ?",
      "!doc": "Schedules a command to retrieve the current page's source. The page source\nreturned is a representation of the underlying DOM: do not expect it to be\nformatted or escaped in the same way as the response sent from the web\nserver.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.getPageSource"
     },
     "close": {
      "!type": "fn() -> ?",
      "!doc": "Schedules a command to close the current window.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.close"
     },
     "get": {
      "!type": "fn(url: string) -> ?",
      "!doc": "Schedules a command to navigate to the given URL.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.get"
     },
     "getCurrentUrl": {
      "!type": "fn() -> ?",
      "!doc": "Schedules a command to retrieve the URL of the current page.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.getCurrentUrl"
     },
     "getTitle": {
      "!type": "fn() -> ?",
      "!doc": "Schedules a command to retrieve the current page's title.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.getTitle"
     },
     "findElement": {
      "!type": "fn(locator: +webdriver.Locator) -> +webdriver.WebElement",
      "!doc": "Schedule a command to find an element on the page. If the element cannot be\nfound, a bot.ErrorCode.NO_SUCH_ELEMENT result will be returned\nby the driver. Unlike other commands, this error cannot be suppressed. In\nother words, scheduling a command to find an element doubles as an assert\nthat the element is present on the page. To test whether an element is\npresent on the page, use [#isElementPresent](webdriver.WebDriver.prototype.isElementPresent) instead.\n\n<p>The search criteria for an element may be defined using one of the\nfactories in the [webdriver.By](webdriver.By) namespace, or as a short-hand\nwebdriver.By.Hash object. For example, the following two statements\nare equivalent:\n<code><pre>\nvar e1 = driver.findElement(By.id('foo'));\nvar e2 = driver.findElement({id:'foo'});\n</pre></code>\n\n<p>You may also provide a custom locator function, which takes as input\nthis WebDriver instance and returns a [webdriver.WebElement](webdriver.WebElement), or a\npromise that will resolve to a WebElement. For example, to find the first\nvisible link on a page, you could write:\n<code><pre>\nvar link = driver.findElement(firstVisibleLink);\n\nfunction firstVisibleLink(driver) {\n  var links = driver.findElements(By.tagName('a'));\n  return webdriver.promise.filter(links, function(link) {\n    return links.isDisplayed();\n  }).then(function(visibleLinks) {\n    return visibleLinks[0];\n  });\n}\n</pre></code>\n\n<p>When running in the browser, a WebDriver cannot manipulate DOM elements\ndirectly; it may do so only through a [webdriver.WebElement](webdriver.WebElement) reference.\nThis function may be used to generate a WebElement from a DOM element. A\nreference to the DOM element will be stored in a known location and this\ndriver will attempt to retrieve it through [#executeScript](webdriver.WebDriver.prototype.executeScript). If the\nelement cannot be found (eg, it belongs to a different document than the\none this instance is currently focused on), a\nbot.ErrorCode.NO_SUCH_ELEMENT error will be returned.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.findElement"
     },
     "isElementPresent": {
      "!type": "fn(locatorOrElement: +webdriver.Locator) -> ?",
      "!doc": "Schedules a command to test if an element is present on the page.\n\n<p>If given a DOM element, this function will check if it belongs to the\ndocument the driver is currently focused on. Otherwise, the function will\ntest if at least one element can be found with the given search criteria.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.isElementPresent"
     },
     "findElements": {
      "!type": "fn(locator: +webdriver.Locator) -> ?",
      "!doc": "Schedule a command to search for multiple elements on the page.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.prototype.findElements"
     },
     "takeScreenshot": {
      "!type": "fn() -> ?",
      "!doc": "Schedule a command to take a screenshot. The driver makes a best effort to\nreturn a screenshot of the following, in order of preference:\n<ol>\n  <li>Entire page\n  <li>Current window\n  <li>Visible portion of the current frame\n  <li>The screenshot of the entire display containing the browser\n</ol>",
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
     "!doc": "Interface for navigating back and forth in the browser history.",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Navigation",
     "prototype": {
      "to": {
       "!type": "fn(url: string) -> ?",
       "!doc": "Schedules a command to navigate to a new URL.",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Navigation.prototype.to"
      },
      "back": {
       "!type": "fn() -> ?",
       "!doc": "Schedules a command to move backwards in the browser history.",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Navigation.prototype.back"
      },
      "forward": {
       "!type": "fn() -> ?",
       "!doc": "Schedules a command to move forwards in the browser history.",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Navigation.prototype.forward"
      },
      "refresh": {
       "!type": "fn() -> ?",
       "!doc": "Schedules a command to refresh the current page.",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Navigation.prototype.refresh"
      }
     }
    },
    "Options": {
     "!type": "fn(driver: +webdriver.WebDriver)",
     "!doc": "Provides methods for managing browser and driver state.",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Options",
     "prototype": {
      "addCookie": {
       "!type": "fn(name: string, value: string, opt_path?: string, opt_domain?: string, opt_isSecure?: +boolean, opt_expiry?: number) -> ?",
       "!doc": "Schedules a command to add a cookie.",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Options.prototype.addCookie"
      },
      "deleteAllCookies": {
       "!type": "fn() -> ?",
       "!doc": "Schedules a command to delete all cookies visible to the current page.",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Options.prototype.deleteAllCookies"
      },
      "deleteCookie": {
       "!type": "fn(name: string) -> ?",
       "!doc": "Schedules a command to delete the cookie with the given name. This command is\na no-op if there is no cookie with the given name visible to the current\npage.",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Options.prototype.deleteCookie"
      },
      "getCookies": {
       "!type": "fn() -> ?",
       "!doc": "Schedules a command to retrieve all cookies visible to the current page.\nEach cookie will be returned as a JSON object as described by the WebDriver\nwire protocol.",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Options.prototype.getCookies"
      },
      "getCookie": {
       "!type": "fn(name: string) -> ?",
       "!doc": "Schedules a command to retrieve the cookie with the given name. Returns null\nif there is no such cookie. The cookie will be returned as a JSON object as\ndescribed by the WebDriver wire protocol.",
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
     "!doc": "An interface for managing timeout behavior for WebDriver instances.",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Timeouts",
     "prototype": {
      "implicitlyWait": {
       "!type": "fn(ms: number) -> ?",
       "!doc": "Specifies the amount of time the driver should wait when searching for an\nelement if it is not immediately present.\n<p/>\nWhen searching for a single element, the driver should poll the page\nuntil the element has been found, or this timeout expires before failing\nwith a <code ng-non-bindable>bot.ErrorCode.NO_SUCH_ELEMENT</code> error. When searching\nfor multiple elements, the driver should poll the page until at least one\nelement has been found or this timeout has expired.\n<p/>\nSetting the wait timeout to 0 (its default value), disables implicit\nwaiting.\n<p/>\nIncreasing the implicit wait timeout should be used judiciously as it\nwill have an adverse effect on test run time, especially when used with\nslower location strategies like XPath.",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Timeouts.prototype.implicitlyWait"
      },
      "setScriptTimeout": {
       "!type": "fn(ms: number) -> ?",
       "!doc": "Sets the amount of time to wait, in milliseconds, for an asynchronous script\nto finish execution before returning an error. If the timeout is less than or\nequal to 0, the script will be allowed to run indefinitely.",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Timeouts.prototype.setScriptTimeout"
      },
      "pageLoadTimeout": {
       "!type": "fn(ms: number) -> ?",
       "!doc": "Sets the amount of time to wait for a page load to complete before returning\nan error.  If the timeout is negative, page loads may be indefinite.",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Timeouts.prototype.pageLoadTimeout"
      }
     }
    },
    "Window": {
     "!type": "fn(driver: +webdriver.WebDriver)",
     "!doc": "An interface for managing the current window.",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Window",
     "prototype": {
      "getPosition": {
       "!type": "fn() -> ?",
       "!doc": "Retrieves the window's current position, relative to the top left corner of\nthe screen.",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Window.prototype.getPosition"
      },
      "setPosition": {
       "!type": "fn(x: number, y: number) -> ?",
       "!doc": "Repositions the current window.",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Window.prototype.setPosition"
      },
      "getSize": {
       "!type": "fn() -> ?",
       "!doc": "Retrieves the window's current size.",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Window.prototype.getSize"
      },
      "setSize": {
       "!type": "fn(width: number, height: number) -> ?",
       "!doc": "Resizes the current window.",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Window.prototype.setSize"
      },
      "maximize": {
       "!type": "fn() -> ?",
       "!doc": "Maximizes the current window.",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Window.prototype.maximize"
      }
     }
    },
    "Logs": {
     "!type": "fn(driver: +webdriver.WebDriver)",
     "!doc": "Interface for managing WebDriver log records.",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Logs",
     "prototype": {
      "get": {
       "!type": "fn(type: +webdriver.logging.Type) -> ?",
       "!doc": "Fetches available log entries for the given type.\n\n<p/>Note that log buffers are reset after each call, meaning that\navailable log entries correspond to those entries not yet returned for a\ngiven log type. In practice, this means that this call will return the\navailable log entries since the last call, or from the start of the\nsession.",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Logs.prototype.get"
      },
      "getAvailableLogTypes": {
       "!type": "fn() -> ?",
       "!doc": "Retrieves the log types available to this driver.",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.Logs.prototype.getAvailableLogTypes"
      }
     }
    },
    "TargetLocator": {
     "!type": "fn(driver: +webdriver.WebDriver)",
     "!doc": "An interface for changing the focus of the driver to another frame or window.",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.TargetLocator",
     "prototype": {
      "activeElement": {
       "!type": "fn() -> +webdriver.WebElementPromise",
       "!doc": "Schedules a command retrieve the <code ng-non-bindable>document.activeElement</code> element on\nthe current document, or <code ng-non-bindable>document.body</code> if activeElement is not\navailable.",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.TargetLocator.prototype.activeElement"
      },
      "defaultContent": {
       "!type": "fn() -> ?",
       "!doc": "Schedules a command to switch focus of all future commands to the first frame\non the page.",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.TargetLocator.prototype.defaultContent"
      },
      "frame": {
       "!type": "fn(nameOrIndex: string) -> ?",
       "!doc": "Schedules a command to switch the focus of all future commands to another\nframe on the page.\n<p/>\nIf the frame is specified by a number, the command will switch to the frame\nby its (zero-based) index into the <code ng-non-bindable>window.frames</code> collection.\n<p/>\nIf the frame is specified by a string, the command will select the frame by\nits name or ID. To select sub-frames, simply separate the frame names/IDs by\ndots. As an example, \"main.child\" will select the frame with the name \"main\"\nand then its child \"child\".\n<p/>\nIf the specified frame can not be found, the deferred result will errback\nwith a <code ng-non-bindable>bot.ErrorCode.NO_SUCH_FRAME</code> error.",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.TargetLocator.prototype.frame"
      },
      "window": {
       "!type": "fn(nameOrHandle: string) -> ?",
       "!doc": "Schedules a command to switch the focus of all future commands to another\nwindow. Windows may be specified by their <code ng-non-bindable>window.name</code> attribute or\nby its handle (as returned by <code ng-non-bindable>webdriver.WebDriver#getWindowHandles</code>).\n<p/>\nIf the specificed window can not be found, the deferred result will errback\nwith a <code ng-non-bindable>bot.ErrorCode.NO_SUCH_WINDOW</code> error.",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.TargetLocator.prototype.window"
      },
      "alert": {
       "!type": "fn() -> +webdriver.AlertPromise",
       "!doc": "Schedules a command to change focus to the active alert dialog. This command\nwill return a bot.ErrorCode.NO_SUCH_ALERT error if an alert dialog\nis not currently open.",
       "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebDriver.TargetLocator.prototype.alert"
      }
     }
    }
   },
   "Key": {
    "chord": {
     "!type": "fn(var_args: string) -> string",
     "!doc": "Simulate pressing many keys at once in a \"chord\". Takes a sequence of\nwebdriver.Keys or strings, appends each of the values to a string,\nand adds the chord termination key (webdriver.Key.NULL) and returns\nthe resultant string.\n\nNote: when the low-level webdriver key handlers see Keys.NULL, active\nmodifier keys (CTRL/ALT/SHIFT/etc) release via a keyup event.",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.Key.chord"
    }
   },
   "WebElement": {
    "!type": "fn(driver: +webdriver.WebDriver, id: ?)",
    "!doc": "Represents a DOM element. WebElements can be found by searching from the\ndocument root using a <code ng-non-bindable>webdriver.WebDriver</code> instance, or by searching\nunder another <code ng-non-bindable>webdriver.WebElement</code>:\n<pre><code>\n  driver.get('http://www.google.com');\n  var searchForm = driver.findElement(By.tagName('form'));\n  var searchBox = searchForm.findElement(By.name('q'));\n  searchBox.sendKeys('webdriver');\n</code></pre>\n\nThe WebElement is implemented as a promise for compatibility with the promise\nAPI. It will always resolve itself when its internal state has been fully\nresolved and commands may be issued against the element. This can be used to\ncatch errors when an element cannot be located on the page:\n<pre><code>\n  driver.findElement(By.id('not-there')).then(function(element) {\n    alert('Found an element that was not expected to be there!');\n  }, function(error) {\n    alert('The element was not found, as expected');\n  });\n</code></pre>",
    "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement",
    "equals": {
     "!type": "fn(a: +webdriver.WebElement, b: +webdriver.WebElement) -> ?",
     "!doc": "Compares to WebElements for equality.",
     "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.equals"
    },
    "prototype": {
     "getDriver": {
      "!type": "fn() -> +webdriver.WebDriver",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.getDriver"
     },
     "getId": {
      "!type": "fn() -> ?",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.getId"
     },
     "findElement": {
      "!type": "fn(locator: +webdriver.Locator) -> +webdriver.WebElement",
      "!doc": "Schedule a command to find a descendant of this element. If the element\ncannot be found, a <code ng-non-bindable>bot.ErrorCode.NO_SUCH_ELEMENT</code> result will\nbe returned by the driver. Unlike other commands, this error cannot be\nsuppressed. In other words, scheduling a command to find an element doubles\nas an assert that the element is present on the page. To test whether an\nelement is present on the page, use <code ng-non-bindable>#isElementPresent</code> instead.\n\n<p>The search criteria for an element may be defined using one of the\nfactories in the [webdriver.By](webdriver.By) namespace, or as a short-hand\nwebdriver.By.Hash object. For example, the following two statements\nare equivalent:\n<code><pre>\nvar e1 = element.findElement(By.id('foo'));\nvar e2 = element.findElement({id:'foo'});\n</pre></code>\n\n<p>You may also provide a custom locator function, which takes as input\nthis WebDriver instance and returns a [webdriver.WebElement](webdriver.WebElement), or a\npromise that will resolve to a WebElement. For example, to find the first\nvisible link on a page, you could write:\n<code><pre>\nvar link = element.findElement(firstVisibleLink);\n\nfunction firstVisibleLink(element) {\n  var links = element.findElements(By.tagName('a'));\n  return webdriver.promise.filter(links, function(link) {\n    return links.isDisplayed();\n  }).then(function(visibleLinks) {\n    return visibleLinks[0];\n  });\n}\n</pre></code>",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.findElement"
     },
     "isElementPresent": {
      "!type": "fn(locator: +webdriver.Locator) -> ?",
      "!doc": "Schedules a command to test if there is at least one descendant of this\nelement that matches the given search criteria.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.isElementPresent"
     },
     "findElements": {
      "!type": "fn(locator: +webdriver.Locator) -> ?",
      "!doc": "Schedules a command to find all of the descendants of this element that\nmatch the given search criteria.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.findElements"
     },
     "click": {
      "!type": "fn() -> ?",
      "!doc": "Schedules a command to click on this element.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.click"
     },
     "sendKeys": {
      "!type": "fn(var_args: string) -> ?",
      "!doc": "Schedules a command to type a sequence on the DOM element represented by this\ninstance.\n<p/>\nModifier keys (SHIFT, CONTROL, ALT, META) are stateful; once a modifier is\nprocessed in the keysequence, that key state is toggled until one of the\nfollowing occurs:\n<ul>\n<li>The modifier key is encountered again in the sequence. At this point the\nstate of the key is toggled (along with the appropriate keyup/down events).\n</li>\n<li>The <code ng-non-bindable>webdriver.Key.NULL</code> key is encountered in the sequence. When\nthis key is encountered, all modifier keys current in the down state are\nreleased (with accompanying keyup events). The NULL key can be used to\nsimulate common keyboard shortcuts:\n<code><pre>\n    element.sendKeys(\"text was\",\n                     webdriver.Key.CONTROL, \"a\", webdriver.Key.NULL,\n                     \"now text is\");\n    // Alternatively:\n    element.sendKeys(\"text was\",\n                     webdriver.Key.chord(webdriver.Key.CONTROL, \"a\"),\n                     \"now text is\");\n</pre></code></li>\n<li>The end of the keysequence is encountered. When there are no more keys\nto type, all depressed modifier keys are released (with accompanying keyup\nevents).\n</li>\n</ul>\n<strong>Note:</strong> On browsers where native keyboard events are not yet\nsupported (e.g. Firefox on OS X), key events will be synthesized. Special\npunctionation keys will be synthesized according to a standard QWERTY en-us\nkeyboard layout.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.sendKeys"
     },
     "getTagName": {
      "!type": "fn() -> ?",
      "!doc": "Schedules a command to query for the tag/node name of this element.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.getTagName"
     },
     "getCssValue": {
      "!type": "fn(cssStyleProperty: string) -> ?",
      "!doc": "Schedules a command to query for the computed style of the element\nrepresented by this instance. If the element inherits the named style from\nits parent, the parent will be queried for its value.  Where possible, color\nvalues will be converted to their hex representation (e.g. #00ff00 instead of\nrgb(0, 255, 0)).\n<p/>\n<em>Warning:</em> the value returned will be as the browser interprets it, so\nit may be tricky to form a proper assertion.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.getCssValue"
     },
     "getAttribute": {
      "!type": "fn(attributeName: string) -> ?",
      "!doc": "Schedules a command to query for the value of the given attribute of the\nelement. Will return the current value, even if it has been modified after\nthe page has been loaded. More exactly, this method will return the value of\nthe given attribute, unless that attribute is not present, in which case the\nvalue of the property with the same name is returned. If neither value is\nset, null is returned (for example, the \"value\" property of a textarea\nelement). The \"style\" attribute is converted as best can be to a\ntext representation with a trailing semi-colon. The following are deemed to\nbe \"boolean\" attributes and will return either \"true\" or null:\n\n<p>async, autofocus, autoplay, checked, compact, complete, controls, declare,\ndefaultchecked, defaultselected, defer, disabled, draggable, ended,\nformnovalidate, hidden, indeterminate, iscontenteditable, ismap, itemscope,\nloop, multiple, muted, nohref, noresize, noshade, novalidate, nowrap, open,\npaused, pubdate, readonly, required, reversed, scoped, seamless, seeking,\nselected, spellcheck, truespeed, willvalidate\n\n<p>Finally, the following commonly mis-capitalized attribute/property names\nare evaluated as expected:\n<ul>\n  <li>\"class\"\n  <li>\"readonly\"\n</ul>",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.getAttribute"
     },
     "getText": {
      "!type": "fn() -> ?",
      "!doc": "Get the visible (i.e. not hidden by CSS) innerText of this element, including\nsub-elements, without any leading or trailing whitespace.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.getText"
     },
     "getSize": {
      "!type": "fn() -> ?",
      "!doc": "Schedules a command to compute the size of this element's bounding box, in\npixels.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.getSize"
     },
     "getLocation": {
      "!type": "fn() -> ?",
      "!doc": "Schedules a command to compute the location of this element in page space.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.getLocation"
     },
     "isEnabled": {
      "!type": "fn() -> ?",
      "!doc": "Schedules a command to query whether the DOM element represented by this\ninstance is enabled, as dicted by the <code ng-non-bindable>disabled</code> attribute.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.isEnabled"
     },
     "isSelected": {
      "!type": "fn() -> ?",
      "!doc": "Schedules a command to query whether this element is selected.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.isSelected"
     },
     "submit": {
      "!type": "fn() -> ?",
      "!doc": "Schedules a command to submit the form containing this element (or this\nelement if it is a FORM element). This command is a no-op if the element is\nnot contained in a form.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.submit"
     },
     "clear": {
      "!type": "fn() -> ?",
      "!doc": "Schedules a command to clear the <code ng-non-bindable>value</code> of this element. This command\nhas no effect if the underlying DOM element is neither a text INPUT element\nnor a TEXTAREA element.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.clear"
     },
     "isDisplayed": {
      "!type": "fn() -> ?",
      "!doc": "Schedules a command to test whether this element is currently displayed.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.isDisplayed"
     },
     "getOuterHtml": {
      "!type": "fn() -> ?",
      "!doc": "Schedules a command to retrieve the outer HTML of this element.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.getOuterHtml"
     },
     "getInnerHtml": {
      "!type": "fn() -> ?",
      "!doc": "Schedules a command to retrieve the inner HTML of this element.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElement.prototype.getInnerHtml"
     }
    }
   },
   "WebElementPromise": {
    "!type": "fn(driver: +webdriver.WebDriver, el: ?)",
    "!doc": "WebElementPromise is a promise that will be fulfilled with a WebElement.\nThis serves as a forward proxy on WebElement, allowing calls to be\nscheduled without directly on this instance before the underlying\nWebElement has been fulfilled. In other words, the following two statements\nare equivalent:\n<pre><code>\n    driver.findElement({id: 'my-button'}).click();\n    driver.findElement({id: 'my-button'}).then(function(el) {\n      return el.click();\n    });\n</code></pre>",
    "!url": "http://angular.github.io/protractor/#/api?view=webdriver.WebElementPromise"
   },
   "Alert": {
    "!type": "fn(driver: +webdriver.WebDriver, text: string)",
    "!doc": "Represents a modal dialog such as <code ng-non-bindable>alert</code>, <code ng-non-bindable>confirm</code>, or\n<code ng-non-bindable>prompt</code>. Provides functions to retrieve the message displayed with\nthe alert, accept or dismiss the alert, and set the response text (in the\ncase of <code ng-non-bindable>prompt</code>).",
    "!url": "http://angular.github.io/protractor/#/api?view=webdriver.Alert",
    "prototype": {
     "getText": {
      "!type": "fn() -> ?",
      "!doc": "Retrieves the message text displayed with this alert. For instance, if the\nalert were opened with alert(\"hello\"), then this would return \"hello\".",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.Alert.prototype.getText"
     },
     "accept": {
      "!type": "fn() -> ?",
      "!doc": "Accepts this alert.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.Alert.prototype.accept"
     },
     "dismiss": {
      "!type": "fn() -> ?",
      "!doc": "Dismisses this alert.",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.Alert.prototype.dismiss"
     },
     "sendKeys": {
      "!type": "fn(text: string) -> ?",
      "!doc": "Sets the response text on this alert. This command will return an error if\nthe underlying alert does not support response text (e.g. window.alert and\nwindow.confirm).",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.Alert.prototype.sendKeys"
     }
    }
   },
   "AlertPromise": {
    "!type": "fn(driver: +webdriver.WebDriver, alert: ?)",
    "!doc": "AlertPromise is a promise that will be fulfilled with an Alert. This promise\nserves as a forward proxy on an Alert, allowing calls to be scheduled\ndirectly on this instance before the underlying Alert has been fulfilled. In\nother words, the following two statements are equivalent:\n<pre><code>\n    driver.switchTo().alert().dismiss();\n    driver.switchTo().alert().then(function(alert) {\n      return alert.dismiss();\n    });\n</code></pre>",
    "!url": "http://angular.github.io/protractor/#/api?view=webdriver.AlertPromise"
   },
   "UnhandledAlertError": {
    "!type": "fn(message: string, text: string, alert: +webdriver.Alert)",
    "!doc": "An error returned to indicate that there is an unhandled modal dialog on the\ncurrent page.",
    "!url": "http://angular.github.io/protractor/#/api?view=webdriver.UnhandledAlertError",
    "prototype": {
     "getAlertText": {
      "!type": "fn() -> string",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.UnhandledAlertError.prototype.getAlertText"
     },
     "getAlert": {
      "!type": "fn() -> +webdriver.Alert",
      "!url": "http://angular.github.io/protractor/#/api?view=webdriver.UnhandledAlertError.prototype.getAlert"
     }
    }
   }
  },
  "cancel": {
   "!url": "http://angular.github.io/protractor/#/api?view=cancel"
  },
  "isPending": {
   "!url": "http://angular.github.io/protractor/#/api?view=isPending"
  },
  "then": {
   "!url": "http://angular.github.io/protractor/#/api?view=then"
  },
  "thenCatch": {
   "!url": "http://angular.github.io/protractor/#/api?view=thenCatch"
  },
  "thenFinally": {
   "!url": "http://angular.github.io/protractor/#/api?view=thenFinally"
  },
  "getId": {
   "!doc": "Defers returning the element ID until the wrapped WebElement has been\nresolved.",
   "!url": "http://angular.github.io/protractor/#/api?view=getId"
  },
  "getText": {
   "!doc": "Defer returning text until the promised alert has been resolved.",
   "!url": "http://angular.github.io/protractor/#/api?view=getText"
  },
  "accept": {
   "!doc": "Defers action until the alert has been located.",
   "!url": "http://angular.github.io/protractor/#/api?view=accept"
  },
  "dismiss": {
   "!doc": "Defers action until the alert has been located.",
   "!url": "http://angular.github.io/protractor/#/api?view=dismiss"
  },
  "sendKeys": {
   "!doc": "Defers action until the alert has been located.",
   "!url": "http://angular.github.io/protractor/#/api?view=sendKeys"
  }
 },
 "element": {
  "all": {
   "!type": "fn(locator: +webdriver.Locator) -> +ElementArrayFinder",
   "!doc": "ElementArrayFinder is used for operations on an array of elements (as opposed\nto a single element).\n\nThe ElementArrayFinder is used to set up a chain of conditions that identify\nan array of elements. In particular, you can call all(locator) and\nfilter(filterFn) to return a new ElementArrayFinder modified by the\nconditions, and you can call get(index) to return a single ElementFinder at\nposition 'index'.\n\nSimilar to jquery, ElementArrayFinder will search all branches of the DOM\nto find the elements that satisfy the conditions (i.e. all, filter, get).\nHowever, an ElementArrayFinder will not actually retrieve the elements until\nan action is called, which means it can be set up in helper files (i.e.\npage objects) before the page is available, and reused as the page changes.\n\nYou can treat an ElementArrayFinder as an array of WebElements for most\npurposes, in particular, you may perform actions (i.e. click, getText) on\nthem as you would an array of WebElements. The action will apply to\nevery element identified by the ElementArrayFinder. ElementArrayFinder\nextends Promise, and once an action is performed on an ElementArrayFinder,\nthe latest result can be accessed using then, and will be returned as an\narray of the results; the array has length equal to the length of the\nelements found by the ElementArrayFinder and each result represents the\nresult of performing the action on the element. Unlike a WebElement, an\nElementArrayFinder will wait for the angular app to settle before\nperforming finds or actions.",
   "!url": "http://angular.github.io/protractor/#/api?view=ElementArrayFinder"
  },
  "!type": "fn(locator: +webdriver.Locator) -> +ElementFinder",
  "!doc": "The ElementFinder simply represents a single element of an\nElementArrayFinder (and is more like a convenience object). As a result,\nanything that can be done with an ElementFinder, can also be done using\nan ElementArrayFinder.\n\nThe ElementFinder can be treated as a WebElement for most purposes, in \nparticular, you may perform actions (i.e. click, getText) on them as you\nwould a WebElement. ElementFinders extend Promise, and once an action \nis performed on an ElementFinder, the latest result from the chain can be \naccessed using then. Unlike a WebElement, an ElementFinder will wait for\nangular to settle before performing finds or actions.\n\nElementFinder can be used to build a chain of locators that is used to find\nan element. An ElementFinder does not actually attempt to find the element \nuntil an action is called, which means they can be set up in helper files \nbefore the page is available. ",
  "!url": "http://angular.github.io/protractor/#/api?view=ElementFinder"
 },
 "browser": {
  "!type": "+Protractor",
  "!url": "http://angular.github.io/protractor/#/api?view=Protractor"
 },
 "by": {
  "!type": "+ProtractorBy",
  "!doc": "The Protractor Locators. These provide ways of finding elements in\nAngular applications by binding, model, etc.",
  "!url": "http://angular.github.io/protractor/#/api?view=ProtractorBy"
 }
};
    
})