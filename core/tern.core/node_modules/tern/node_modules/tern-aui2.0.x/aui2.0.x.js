(function(mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
        return mod(require("tern/lib/infer"), require("tern/lib/tern"));
    if (typeof define == "function" && define.amd) // AMD
        return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
    mod(tern, tern);
})(function(infer, tern) {
    "use strict";
    
  tern.registerPlugin("aui2.0.x", function(server, options) {
    server._aui = {};
    return { defs : defs };
  });
    
  var defs = {
 "!name": "aui2.0.x",
 "!define": {
  "_yui": {
   "aui_ace_editor": {
    "A": {
     "AutoCompleteBase": {
      "!type": "fn(config: +Object) -> +_yui.aui_ace_editor.A.AutoCompleteBase",
      "Base.FILL_MODE_INSERT": {
       "!type": "?",
       "!doc": "Exposes a constant for insert fill mode. See <code>fillMode</code> for more information."
      },
      "Base.FILL_MODE_OVERWRITE": {
       "!type": "?",
       "!doc": "Exposes a constant for overwrite fill mode. See <code>fillMode</code> for more information."
      },
      "AutoCompleteBase.NAME": {
       "!type": "string",
       "!doc": "Static property which provides a string to identify the class."
      },
      "AutoCompleteBase.NS": {
       "!type": "string",
       "!doc": "Static property which provides a string to identify the namespace."
      },
      "AutoCompleteBase.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for AutoCompleteBase."
      },
      "prototype": {
       "fillMode": {
        "!type": "number",
        "!doc": "The mode in which the AutoComplete should operate. Can be one of these:\nINSERT - value 0 or OVERWRITE - value 1\nIn case of INSERT mode, when Editor adds a suggestion, it will be added next to the matched expression.\nIn case of OVERWRITE mode, the suggestion will overwrite the matched expression."
       },
       "filters": {
        "!type": "+Array",
        "!doc": "Provides an array of filter functions which will filter the results. By default there is one function which provides phrase match filtering."
       },
       "processor": {
        "!type": "+Object",
        "!doc": "The default processor which will be used to process matches."
       },
       "showListKey": {
        "!type": "+Object",
        "!doc": "The keyboard combination which should be used to show the list with found results."
       },
       "sorters": {
        "!type": "+Array",
        "!doc": "Provides an array of sorter functions which will sort the results. By default there is one function which sorts the results in ascending order."
       }
      }
     },
     "Freemarker": {
      "!type": "fn(config: +Object) -> +_yui.aui_ace_editor.A.Freemarker",
      "prototype": {
       "!proto": "A.AceEditor.TemplateProcessor.prototype",
       "getMatch": {
        "!type": "fn(content: string) -> +Object",
        "!doc": "Checks if the provided content contains directive or variable."
       },
       "directives": {
        "!type": "+Array",
        "!doc": "Contains the list of supported directives according to Freemarker specification."
       },
       "directivesMatcher": {
        "!type": "?",
        "!doc": "Contains the regular expression which checks for directive presence."
       },
       "host": {
        "!type": "+Object",
        "!doc": "The Editor in which the current instance is plugged."
       },
       "variables": {
        "!type": "+Object",
        "!doc": "Contains the supported variables."
       },
       "variablesMatcher": {
        "!type": "?",
        "!doc": "Contains the regular expression which will check for variable match."
       }
      },
      "Freemarker.NAME": {
       "!type": "string",
       "!doc": "Static property which provides a string to identify the class."
      },
      "Freemarker.NS": {
       "!type": "string",
       "!doc": "The namespace of the plugin."
      },
      "Freemarker.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Freemarker."
      }
     },
     "AutoCompleteList": {
      "!type": "fn(config: +Object) -> +_yui.aui_ace_editor.A.AutoCompleteList",
      "prototype": {
       "!proto": "A.Overlay.prototype",
       "host": {
        "!type": "+Object",
        "!doc": "The Editor in which the current instance is plugged."
       },
       "listNode": {
        "!type": "+aui_node.Node",
        "!doc": "A Node in which results will be shown."
       },
       "loadingMessage": {
        "!type": "string",
        "!doc": "A string, representing the loading message."
       },
       "results": {
        "!type": "+Array",
        "!doc": "Contains the current set of results in the list."
       },
       "selectedEntry": {
        "!type": "?",
        "!doc": "Provides the currently selected entry."
       },
       "strings": {
        "!type": "+Object",
        "!doc": "Collection of strings used to label elements of the UI."
       }
      },
      "AutoCompleteList.NAME": {
       "!type": "string",
       "!doc": "Static property which provides a string to identify the class."
      },
      "AutoCompleteList.NS": {
       "!type": "string",
       "!doc": "The namespace of the plugin."
      },
      "AutoCompleteList.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the AutoCompleteList."
      },
      "AutoCompleteList.CSS_PREFIX": {
       "!type": "string",
       "!doc": "The prefix of all CSS Classes."
      },
      "AutoCompleteList.HTML_PARSER": {
       "!type": "?",
       "!doc": "Object hash, defining how attribute values are to be parsed from markup contained in the widgets content box."
      }
     },
     "TemplateProcessor": {
      "!type": "fn(config: +Object) -> +_yui.aui_ace_editor.A.TemplateProcessor",
      "prototype": {
       "!proto": "A.Base.prototype",
       "getResults": {
        "!type": "fn(match: +Object, callbackSuccess: fn(), callbackError: fn())",
        "!doc": "Accepts match and depending on its type processes directives or variables.\nIn case of success, calls the provided success callback, or the error callback otherwise."
       },
       "getSuggestion": {
        "!type": "fn(match: +Object, selectedSuggestion: string) -> string",
        "!doc": "Formats the selected suggestion depending on the match type and currently selected editor mode.\nThe match type can be one of:\nMATCH_DIRECTOVES or MATCH_VARIABLES.\nThe selected editor mode can be one of the following:\nINSERT or OVERWRITE.\nSee {{#crossLink \"AceEditor.AutoCompleteBase/fillMode:attribute\"}}{{/crossLink}}"
       },
       "directives": {
        "!type": "+Array",
        "!doc": "Contains an array of all possible directives for the corresponding language."
       },
       "host": {
        "!type": "+Object",
        "!doc": "The Editor in which the current instance is plugged."
       },
       "variables": {
        "!type": "+Object",
        "!doc": "Contains the supported variables for the corresponding language."
       }
      },
      "TemplateProcessor.NAME": {
       "!type": "string",
       "!doc": "Static property which provides a string to identify the class."
      },
      "TemplateProcessor.NS": {
       "!type": "string",
       "!doc": "The namespace of the plugin."
      },
      "TemplateProcessor.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the TemplateProcessor."
      }
     },
     "Velocity": {
      "!type": "fn(config: +Object) -> +_yui.aui_ace_editor.A.Velocity",
      "prototype": {
       "!proto": "A.AceEditor.TemplateProcessor.prototype",
       "getMatch": {
        "!type": "fn(content: string) -> +Object",
        "!doc": "Checks if the provided content contains directive or variable."
       },
       "directives": {
        "!type": "+Array",
        "!doc": "Contains the list of supported directives according to Velocity specification."
       },
       "directivesMatcher": {
        "!type": "?",
        "!doc": "Contains the regular expression which checks for directive."
       },
       "host": {
        "!type": "+Object",
        "!doc": "he Editor in which the current instance is plugged."
       },
       "variables": {
        "!type": "+Object",
        "!doc": "Contains the supported variables."
       },
       "variablesMatcher": {
        "!type": "?",
        "!doc": "Contains the regular expression which will check for variable match."
       }
      },
      "Velocity.NAME": {
       "!type": "string",
       "!doc": "Static property which provides a string to identify the class."
      },
      "Velocity.NS": {
       "!type": "string",
       "!doc": "The namespace of the plugin."
      },
      "Velocity.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Velocity."
      }
     },
     "AceEditor": {
      "!type": "fn(config: +Object) -> +_yui.aui_ace_editor.A.AceEditor",
      "prototype": {
       "!proto": "A.Widget.prototype",
       "height": {
        "!type": "number",
        "!doc": "The height of ACE Editor."
       },
       "highlightActiveLine": {
        "!type": "bool",
        "!doc": "Determine if the active line of code\nwill be highlighted or not."
       },
       "mode": {
        "!type": "string",
        "!doc": "Correspond to the language being typed."
       },
       "readOnly": {
        "!type": "bool",
        "!doc": "Determine if the code will be\neditable or not."
       },
       "showPrintMargin": {
        "!type": "bool",
        "!doc": "Determine if print margin will\nbe visible or not."
       },
       "tabSize": {
        "!type": "number",
        "!doc": "The indentation size of tab key."
       },
       "useSoftTabs": {
        "!type": "bool",
        "!doc": "Determine if the tab key will act as\nspace characters or tab characters."
       },
       "useWrapMode": {
        "!type": "bool",
        "!doc": "Determine if the line will break\nwhen it reaches the end of the line."
       },
       "value": {
        "!type": "string",
        "!doc": "Some predefined value on the editor."
       },
       "width": {
        "!type": "number",
        "!doc": "The width of ACE Editor."
       },
       "getEditor": {
        "!type": "fn()",
        "!doc": "Get editor."
       },
       "getSelection": {
        "!type": "fn()",
        "!doc": "Get a text selection."
       },
       "getSession": {
        "!type": "fn()",
        "!doc": "Get session."
       },
       "gotoLine": {
        "!type": "fn(line: ?)",
        "!doc": "Go to a specific line of code."
       },
       "insert": {
        "!type": "fn(text: ?)",
        "!doc": "Insert content into the editor."
       }
      },
      "AceEditor.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "AceEditor.EXTENDS": {
       "!type": "string",
       "!doc": "Static property used to define which component it extends."
      },
      "AceEditor.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the ACE Editor."
      },
      "AceEditor.UI_ATTRS": {
       "!type": "+Array",
       "!doc": "Static property used to define the UI attributes."
      }
     }
    }
   },
   "aui_aria": {
    "A": {
     "Aria": {
      "!type": "fn(config: +Object) -> +_yui.aui_aria.A.Aria",
      "prototype": {
       "!proto": "A.Plugin.Base.prototype",
       "attributes": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "attributeValueFormat": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "attributeNode": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "roleName": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "roleNode": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "validateW3C": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "isValidAttribute": {
        "!type": "fn(attrName: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "isValidRole": {
        "!type": "fn(roleName: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "setAttribute": {
        "!type": "fn(attrName: ?, attrValue: ?, node: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "setAttributes": {
        "!type": "fn(attributes: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "setRole": {
        "!type": "fn(roleName: ?, node: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "setRoles": {
        "!type": "fn(roles: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "Aria.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "Aria.NS": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the namespace."
      },
      "Aria.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Aria."
      },
      "Aria.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     }
    }
   },
   "aui_arraysort": {
    "A": {
     "ArraySort": {
      "!type": "fn() -> +_yui.aui_arraysort.A.ArraySort",
      "prototype": {
       "compareIgnoreWhiteSpace": {
        "!type": "fn(a: ?, b: ?, desc: ?, compareFn: ?) -> ?",
        "!doc": "Compare two arrays ignoring white spaces."
       },
       "stableSort": {
        "!type": "fn(array: ?, compareFn: ?)",
        "!doc": "Sorts an object array keeping the order of equal items. ECMA script\nstandard does not specify the behaviour when the compare function\nreturns the value 0;"
       }
      }
     }
    }
   },
   "aui_audio": {
    "A": {
     "Audio": {
      "!type": "fn(config: +Object) -> +_yui.aui_audio.A.Audio",
      "prototype": {
       "!proto": "_yui.aui_component.A.Component.prototype",
       "url": {
        "!type": "string",
        "!doc": "URL used by Audio to play."
       },
       "oggUrl": {
        "!type": "string",
        "!doc": "URL (on .ogg format) used by Audio to play."
       },
       "type": {
        "!type": "string",
        "!doc": "The type of audio."
       },
       "swfWidth": {
        "!type": "string",
        "!doc": "The width of Audios fallback using Flash."
       },
       "swfHeight": {
        "!type": "string",
        "!doc": "The height of Audios fallback using Flash."
       },
       "swfUrl": {
        "!type": "string",
        "!doc": "URL (on .swf format) used by Audio to create\na fallback player with Flash."
       },
       "fixedAttributes": {
        "!type": "+Object",
        "!doc": "An additional list of attributes."
       },
       "flashVars": {
        "!type": "+Object",
        "!doc": "Variables used by Flash player."
       },
       "render": {
        "!type": "bool",
        "!doc": "If <code>true</code> the render phase will be automatically invoked\npreventing the <code>.render()</code> manual call."
       },
       "load": {
        "!type": "fn()",
        "!doc": "Load audio track."
       },
       "pause": {
        "!type": "fn()",
        "!doc": "Pause audio track."
       },
       "play": {
        "!type": "fn()",
        "!doc": "Play audio track."
       }
      },
      "Audio.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "Audio.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Audio."
      },
      "Audio.BIND_UI_ATTRS": {
       "!type": "+Array",
       "!doc": "Static property used to define the attributes\nfor the bindUI lifecycle phase."
      },
      "Audio.SYNC_UI_ATTRS": {
       "!type": "+Array",
       "!doc": "Static property used to define the attributes\nfor the syncUI lifecycle phase."
      }
     }
    }
   },
   "aui_autocomplete": {
    "AutoComplete": {
     "!type": "fn(config: +Object) -> +_yui.aui_autocomplete.AutoComplete",
     "prototype": {
      "!proto": "Component.prototype",
      "alwaysShowContainer": {
       "!type": "bool",
       "!doc": "Always show the results container, instead of only showing when the\nuser is requesting them."
      },
      "autoHighlight": {
       "!type": "bool",
       "!doc": "Automatically highlight the first item in the list when the results are\nmade visible."
      },
      "applyLocalFilter": {
       "!type": "bool",
       "!doc": "If set to true, the <a href=\"AutoComplete.html#method_filterResults\">filterResults</a>\nmethod will be run on the response from the data source."
      },
      "button": {
       "!type": "bool",
       "!doc": "To use a button"
      },
      "dataSource": {
       "!type": "+Object",
       "!doc": "The data source that results will be read from. This can either be\nan existing <a href=\"DataSource.html\">DataSource</a> object, or it can be a\nvalue that would be passed to <a href=\"DataSource.html\">DataSource</a>."
      },
      "dataSourceType": {
       "!type": "string",
       "!doc": "The type of the data source passed into <a href=\"AutoComplete.html#config_dataSource\">dataSource</a>.\nThis can be used to explicitly declare what kind of <a href=\"DataSource.html\">DataSource</a> object will\nbe created."
      },
      "delimChar": {
       "!type": "string",
       "!doc": "The character used to indicate the beginning or ending of a new value. Most commonly used\nis a \",\"."
      },
      "forceSelection": {
       "!type": "bool",
       "!doc": "If <a href=\"AutoComplete.html#config_typeAhead\">typeAhead</a> is true, this\nwill clear a selection when the overlay closes unless a user explicitly selects an item."
      },
      "input": {
       "!type": "string",
       "!doc": "The input field which will recieve the users input."
      },
      "matchKey": {
       "!type": "string",
       "!doc": "The key or numeric index in the schema to match the result against."
      },
      "maxResultsDisplayed": {
       "!type": "number",
       "!doc": "The maximum number of results to display."
      },
      "minQueryLength": {
       "!type": "number",
       "!doc": "The minimum number of characters required to query the data source."
      },
      "queryDelay": {
       "!type": "number",
       "!doc": "The amount of time in seconds to delay before submitting the query."
      },
      "queryInterval": {
       "!type": "number",
       "!doc": "When IME usage is detected or interval detection is explicitly enabled,\nAutoComplete will detect the input value at the given interval and send a\nquery if the value has changed."
      },
      "queryMatchCase": {
       "!type": "bool",
       "!doc": "When <a href=\"AutoComplete.html#config_applyLocalFilter\">applyLocalFilter</a> is true,\nsetting this to true will match only results with the same case."
      },
      "queryMatchContains": {
       "!type": "bool",
       "!doc": "When <a href=\"AutoComplete.html#config_applyLocalFilter\">applyLocalFilter</a> is true,\nsetting this to true will match results which contain the query anywhere in the text,\ninstead of just matching just items that start with the query."
      },
      "queryQuestionMark": {
       "!type": "bool",
       "!doc": "For IO DataSources, AutoComplete will automatically insert a \"?\" between the server URI and\nthe encoded query string. To prevent this behavior, you can\nset this value to false. If you need to customize this even further, you\ncan override the <a href=\"AutoComplete.html#method_generateRequest\">generateRequest</a> method."
      },
      "schema": {
       "!type": "+Object",
       "!doc": "A valid configuration object for any of <a href=\"module_datasource.html\">DataSource</a> schema plugins."
      },
      "schemaType": {
       "!type": "string",
       "!doc": "A valid type of <a href=\"module_datasource.html\">DataSource</a> schema plugin, such as array, json, xml, etc."
      },
      "suppressInputUpdate": {
       "!type": "bool",
       "!doc": "Whether or not the input field should be updated with selections."
      },
      "typeAhead": {
       "!type": "bool",
       "!doc": "If <a href=\"AutoComplete.html#config_autoHighlight\">autoHighlight</a> is enabled, whether or not the\ninput field should be automatically updated with the first result as the user types,\nautomatically selecting the portion of the text the user has not typed yet."
      },
      "typeAheadDelay": {
       "!type": "number",
       "!doc": "If <a href=\"AutoComplete.html#config_typeAhead\">typeAhead</a> is true, number of seconds\nto delay before updating the input. In order to prevent certain race conditions, this value must\nalways be greater than the <a href=\"AutoComplete.html#config_queryDelay\">queryDelay</a>."
      },
      "uniqueName": {
       "!type": "string",
       "!doc": "The unique ID of the input element."
      },
      "doBeforeExpandContainer": {
       "!type": "fn(query: string, allResults: +Object) -> bool",
       "!doc": "An overridable method that is executed before the result container is shown.\nThe method can return false to prevent the container from being shown."
      },
      "doBeforeLoadData": {
       "!type": "fn(event: +EventFacade) -> bool",
       "!doc": "An overridable method that is executed before the result overlay is loaded with results."
      },
      "filterResults": {
       "!type": "fn(event: +EventFacade) -> +Object",
       "!doc": "Executed by the data source as a mechanism to do simple client-side\nfiltering of the results."
      },
      "formatResult": {
       "!type": "fn(result: +Object, request: string, resultMatch: string) -> string",
       "!doc": "An overridable method for formatting the result of the query before its displayed in the overlay."
      },
      "generateRequest": {
       "!type": "fn(query: string) -> +Object",
       "!doc": "An overridable method that creates an object to be passed to the sendRequest\nmethod of the data source object. Useful to overwrite if you wish to create\na custom request object before its sent."
      },
      "handleResponse": {
       "!type": "fn(event: +EventFacade)",
       "!doc": "Handles the response for the display of the results. This is a callback method\nthat is fired by the sendRequest method so that results are ready to be accessed."
      },
      "sendQuery": {
       "!type": "fn(query: string)",
       "!doc": "Sends a query request to the data source object."
      }
     },
     "AutoComplete.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "AutoComplete.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the AutoComplete."
     }
    }
   },
   "aui_autosize_iframe": {
    "A": {
     "AutosizeIframe": {
      "!type": "fn(config: +Object) -> +_yui.aui_autosize_iframe.A.AutosizeIframe",
      "prototype": {
       "!proto": "A.Plugin.Base.prototype",
       "height": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "monitorHeight": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "width": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "pauseMonitor": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "restartMonitor": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getContentHeight": {
        "!type": "fn(iframeWin: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "AutosizeIframe.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "AutosizeIframe.NS": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the namespace."
      },
      "AutosizeIframe.EXTENDS": {
       "!type": "string",
       "!doc": "Static property used to define which component it extends."
      },
      "AutosizeIframe.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the AutosizeIframe."
      }
     }
    }
   },
   "aui_button": {
    "ButtonExt": {
     "!type": "fn(config: +Object) -> +_yui.aui_button.ButtonExt",
     "prototype": {
      "undefined": {
       "!type": "fn()",
       "!doc": "Maps an array or object to a resulting array, using the return value of\nfn as the values for the new array. Like A.each, this function can accept\nan object or an array."
      },
      "icon": {
       "!type": "?",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "iconElement": {
       "!type": "?",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "iconAlign": {
       "!type": "string",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "primary": {
       "!type": "bool",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "syncButtonExtUI": {
       "!type": "fn()",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      }
     },
     "ButtonExt.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the ButtonExt."
     },
     "ButtonExt.HTML_PARSER": {
      "!type": "+Object",
      "!doc": "TODO. Wanna help? Please send a Pull Request."
     },
     "getTypedButtonTemplate": {
      "!type": "fn(type: ?)",
      "!doc": "Get typed buttons template."
     }
    },
    "A": {
     "ButtonCore": {
      "!type": "fn() -> +_yui.aui_button.A.ButtonCore",
      "ButtonCore.CLASS_NAMES": {
       "!type": "?",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "prototype": {
       "_uiSetLabel": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "Button.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "Button.CSS_PREFIX": {
       "!type": "string",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "Button.CLASS_NAMES": {
       "!type": "string",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      }
     },
     "Button": {
      "!type": "fn() -> +_yui.aui_button.A.Button",
      "prototype": {
       "!proto": "Button.prototype",
       "getWidgetLazyConstructorFromNodeData": {
        "!type": "fn(node: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "hasWidgetLazyConstructorData": {
        "!type": "fn(node: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "setWidgetLazyConstructorNodeData": {
        "!type": "fn(node: ?, config: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "syncIconUI": {
        "!type": "fn(buttonElement: ?, iconElement: ?, iconAlign: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "Button.CSS_PREFIX": {
       "!type": "string",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "ToggleButton.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "ToggleButton.CSS_PREFIX": {
       "!type": "+typeName",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "ToggleButton.CLASS_NAMES": {
       "!type": "+typeName",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      }
     },
     "ToggleButton": {
      "!type": "fn(config: +Object) -> +_yui.aui_button.A.ToggleButton",
      "ButtonGroup.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "ButtonGroup.CSS_PREFIX": {
       "!type": "+typeName",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "ButtonGroup.CLASS_NAMES": {
       "!type": "+typeName",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      }
     },
     "ButtonGroup": {
      "!type": "fn() -> +_yui.aui_button.A.ButtonGroup",
      "prototype": {
       "item": {
        "!type": "fn(index: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "select": {
        "!type": "fn(items: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "toggleSelect": {
        "!type": "fn(items: ?, forceSelection: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "unselect": {
        "!type": "fn(items: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      }
     },
     "ButtonSearchCancel": {
      "!type": "fn(config: +Object) -> +_yui.aui_button.A.ButtonSearchCancel",
      "prototype": {
       "!proto": "A.Base.prototype",
       "initializer": {
        "!type": "fn()",
        "!doc": "Construction logic executed during CharCounter instantiation.\nLifecycle."
       },
       "destroy": {
        "!type": "fn()",
        "!doc": "Destructor lifecycle implementation for the AutosizeIframe class.\nLifecycle."
       },
       "bindDelegateUI": {
        "!type": "fn()",
        "!doc": "Delegate events on the UI. Lifecycle."
       },
       "getButtonForElement": {
        "!type": "fn(element: +_yui.aui_node.Node) -> +aui_node.Node",
        "!doc": "Delegate events on the UI. Lifecycle."
       },
       "container": {
        "!type": "?",
        "!doc": "The container of Toggler Delegate instance."
       },
       "gutter": {
        "!type": "+Array",
        "!doc": "Gutter values are added to the x and y alignment values of the\nbutton search cancel. They can be utilized as a padding in case\nthe user needs a different alignment."
       },
       "iconClass": {
        "!type": "string",
        "!doc": "Icon css class to be used on the search cancel button."
       },
       "trigger": {
        "!type": "string",
        "!doc": "Selector to the button search cancel be applied. Supports single\nor multiple node selector."
       },
       "zIndex": {
        "!type": "number",
        "!doc": "Button search cancel z-index."
       }
      }
     }
    }
   },
   "aui_button_item": {
    "ButtonItem": {
     "!type": "fn(config: +Object) -> +_yui.aui_button_item.ButtonItem",
     "prototype": {
      "!proto": "Component.prototype",
      "activeState": {
       "!type": "bool",
       "!doc": "Whether to track the active state of the button."
      },
      "classNames": {
       "!type": "+Object",
       "!doc": "An object map of the CSS class names to use for the different interaction states."
      },
      "defaultState": {
       "!type": "bool",
       "!doc": "Whether to apply the default interaction state to the button"
      },
      "handler": {
       "!type": "fn()",
       "!doc": "An event callback to handle when a user interacts with the button.\nThis can either be a function that will be attached on click, or\nan object map that accepts the following keys:\n<code>{fn: // The function to execute\ncontext: // The context to execute the function in\ntype: // The type of event to listen for (defaults to \"click\")\n}</code>"
      },
      "hoverState": {
       "!type": "bool",
       "!doc": "An id that can be used to identify a button."
      },
      "icon": {
       "!type": "string",
       "!doc": "The icon to use inside of the button. Possible values are:"
      },
      "iconNode": {
       "!type": "string",
       "!doc": "DOM Node to display the icon of the ButtonItem. If not\nspecified try to query using HTML_PARSER an element inside\nboundingBox which matches <code>aui-button-icon</code>."
      },
      "label": {
       "!type": "string",
       "!doc": "Text to use inside of the button."
      },
      "labelNode": {
       "!type": "string",
       "!doc": "DOM Node to display the text of the ButtonItem. If not\nspecified try to query using HTML_PARSER an element inside\nboundingBox which matches <code>aui-button-label</code>."
      },
      "title": {
       "!type": "string",
       "!doc": "Text to use as the title attribute of the button."
      },
      "type": {
       "!type": "string",
       "!doc": "Button type."
      }
     },
     "ButtonItem.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "ButtonItem.AUGMENTS": {
      "!type": "+array",
      "!doc": "Static property provides an array to specify which classes augment this one."
     },
     "ButtonItem.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the ButtonItem."
     },
     "ButtonItem.HTML_PARSER": {
      "!type": "+Object",
      "!doc": "Object hash, defining how attribute values are to be parsed from\nmarkup contained in the widgets content box."
     }
    }
   },
   "aui_carousel": {
    "A": {
     "Carousel": {
      "!type": "fn(config: +Object) -> +_yui.aui_carousel.A.Carousel",
      "Carousel.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "Carousel.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Carousel."
      },
      "prototype": {
       "activeIndex": {
        "!type": "number",
        "!doc": "Index of the first visible item of the carousel."
       },
       "animationTime": {
        "!type": "number",
        "!doc": "Duration of the animation in seconds when change index on\nCarousel."
       },
       "intervalTime": {
        "!type": "number",
        "!doc": "Interval time in seconds between an item transition."
       },
       "itemSelector": {
        "!type": "string",
        "!doc": "CSS Selector whitch determines the items to be loaded to the\nCarousel."
       },
       "nodeMenu": {
        "!type": "+aui_node.Node",
        "!doc": "Node container of the navigation items."
       },
       "nodeMenuItemSelector": {
        "!type": "string",
        "!doc": "CSS selector to match the navigation items."
       },
       "playing": {
        "!type": "bool",
        "!doc": "Attributes that determines the status of transitions between\nitems."
       },
       "item": {
        "!type": "fn(val: ?)",
        "!doc": "Set the <code>activeIndex</code> attribute which\nactivates a certain item on Carousel based on its index."
       },
       "next": {
        "!type": "fn()",
        "!doc": "Go to the next index."
       },
       "pause": {
        "!type": "fn()",
        "!doc": "Set the <code>playing</code> attribute\nto false which pauses the animation."
       },
       "play": {
        "!type": "fn()",
        "!doc": "Set the <code>playing</code> attribute\nto true which starts the animation."
       },
       "prev": {
        "!type": "fn()",
        "!doc": "Go to previous index."
       }
      }
     }
    }
   },
   "aui_char_counter": {
    "A": {
     "CharCounter": {
      "!type": "fn(config: +Object) -> +_yui.aui_char_counter.A.CharCounter",
      "prototype": {
       "!proto": "A.Base.prototype",
       "counter": {
        "!type": "+aui_node.Node",
        "!doc": "Node or Selector to display the information of the counter."
       },
       "maxLength": {
        "!type": "number",
        "!doc": "Max number of characters the <a\nhref=\"CharCounter.html#config_input\">input</a> can have."
       },
       "input": {
        "!type": "+aui_node.Node",
        "!doc": "Node or Selector for the input field. Required."
       },
       "checkLength": {
        "!type": "fn()",
        "!doc": "Check the current value of the <a\nhref=\"CharCounter.html#config_input\">input</a>, truncate the data if\nneeded, and re-sync the UI. Fired from <a\n href=\"CharCounter.html#method__onInputChange\">_onInputChange</a>."
       }
      },
      "CharCounter.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "CharCounter.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the CharCounter."
      },
      "CharCounter.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     }
    }
   },
   "aui_collection": {
    "A": {
     "LinkedSet": {
      "!type": "fn(config: +Object) -> +_yui.aui_collection.A.LinkedSet",
      "prototype": {
       "!proto": "A.Set.prototype",
       "values": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      }
     },
     "HashMap": {
      "!type": "fn(config: +Object) -> +_yui.aui_collection.A.HashMap",
      "prototype": {
       "!proto": "A.Base.prototype",
       "clear": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getValue": {
        "!type": "fn(key: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "has": {
        "!type": "fn(key: ?, opt_hash: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "hasValue": {
        "!type": "fn(value: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "keys": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "isEmpty": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "put": {
        "!type": "fn(key: ?, value: ?, opt_hash: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "putAll": {
        "!type": "fn(map: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "remove": {
        "!type": "fn(key: ?, opt_hash: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "size": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "values": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      }
     },
     "HashSet": {
      "!type": "fn(config: +Object) -> +_yui.aui_collection.A.HashSet",
      "prototype": {
       "!proto": "A.Base.prototype",
       "add": {
        "!type": "fn(value: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "clear": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "has": {
        "!type": "fn(value: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "isEmpty": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "remove": {
        "!type": "fn(value: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "size": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "values": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      }
     }
    }
   },
   "aui_color_picker": {
    "A": {
     "ColorPalette": {
      "!type": "fn(config: +Object) -> +_yui.aui_color_picker.A.ColorPalette",
      "prototype": {
       "!proto": "A.Widget.prototype",
       "items": {
        "!type": "+Array",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "ColorPalette.CSS_PREFIX": {
       "!type": "string",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "ColorPalette.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "ColorPalette.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the ColorPalette."
      }
     },
     "ColorPickerBase": {
      "!type": "fn(config: +Object) -> +_yui.aui_color_picker.A.ColorPickerBase",
      "prototype": {
       "reset": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "bodyContent": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "color": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "colorPalette": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "currentTrigger": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "defaultColor": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "hsvPalette": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "recentColors": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "renderColorPalette": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "renderHSVPalette": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "strings": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "trigger": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "triggerEvent": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "ColorPickerBase.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the ColorPickerBase."
      },
      "ColorPickerBase.CSS_PREFIX": {
       "!type": "string",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "ColorPickerBase.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      }
     },
     "ColorPickerPopover": {
      "!type": "fn(config: +Object) -> +_yui.aui_color_picker.A.ColorPickerPopover",
      "prototype": {
       "!proto": "A.Popover.prototype",
       "align": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "visible": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "ColorPickerPopover.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the ColorPickerPopover."
      },
      "ColorPickerPopover.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "ColorPickerPopover.NS": {
       "!type": "string",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      }
     },
     "HSVPalette": {
      "!type": "fn(config: +Object) -> +_yui.aui_color_picker.A.HSVPalette",
      "prototype": {
       "!proto": "Widget.prototype",
       "controls": {
        "!type": "bool",
        "!doc": "Determines if HSVA and RGB input `controls` are visible."
       },
       "fieldValidator": {
        "!type": "+Object",
        "!doc": "Collection of regular expressions used to validate field values."
       },
       "selected": {
        "!type": "string",
        "!doc": "Currently `selected` color value."
       },
       "strings": {
        "!type": "+Object",
        "!doc": "Collection of strings used to label elements of the UI."
       }
      },
      "CSS_PREFIX": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the CSS prefix."
      },
      "ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `HSVPalette`."
      },
      "NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "NS": {
       "!type": "string",
       "!doc": "The namespace of the plugin."
      }
     },
     "HSVAPaletteModal": {
      "!type": "fn(config: +Object) -> +_yui.aui_color_picker.A.HSVAPaletteModal",
      "prototype": {
       "!proto": "_yui.aui_modal.A.Modal.prototype",
       "hsv": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "selected": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "HSVAPaletteModal.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the HSVAPaletteModal."
      },
      "HSVAPaletteModal.CSS_PREFIX": {
       "!type": "string",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "HSVAPaletteModal.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "HSVAPaletteModal.NS": {
       "!type": "string",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      }
     },
     "HSVAPalette": {
      "!type": "fn(config: +Object) -> +_yui.aui_color_picker.A.HSVAPalette",
      "prototype": {
       "!proto": "_yui.aui_color_picker.A.HSVPalette.prototype"
      },
      "HSVAPalette.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "HSVAPalette.NS": {
       "!type": "string",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      }
     }
    },
    "ColorPicker": {
     "!type": "fn(config: +Object) -> +_yui.aui_color_picker.ColorPicker",
     "prototype": {
      "!proto": "_yui.aui_overlay.OverlayContext.prototype",
      "undefined": {
       "!type": "fn()"
      }
     },
     "ColorPicker.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "ColorPicker.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the ColorPicker."
     }
    }
   },
   "aui_component": {
    "A": {
     "Component": {
      "!type": "fn(config: +Object) -> +_yui.aui_component.A.Component",
      "prototype": {
       "!proto": "A.Widget.prototype",
       "clone": {
        "!type": "fn(config: +Object) -> +Widget",
        "!doc": "Clone the current Component."
       },
       "useARIA": {
        "!type": "bool",
        "!doc": "Boolean indicating if use of the WAI-ARIA Roles and States should be\nenabled for the Widget."
       },
       "hideClass": {
        "!type": "string",
        "!doc": "CSS class added to hide the <code>boundingBox</code> when\n<a href=\"Component.html#config_visible\">visible</a> is set to\n<code>false</code>."
       },
       "render": {
        "!type": "bool",
        "!doc": "If <code>true</code> the render phase will be autimatically invoked\npreventing the <code>.render()</code> manual call."
       },
       "getById": {
        "!type": "fn(id: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "create": {
        "!type": "fn(config: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "build": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "Component.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Component."
      },
      "Component._INSTANCES": {
       "!type": "+Object",
       "!doc": "Static property used to define the map to store Component instances by id."
      },
      "Component.CSS_PREFIX": {
       "!type": "string",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      }
     }
    }
   },
   "aui_datatable": {
    "A": {
     "CellEditorSupport": {
      "!type": "fn(config: +Object) -> +_yui.aui_datatable.A.CellEditorSupport",
      "prototype": {
       "dataSource": {
        "!type": "+Object",
        "!doc": "The data source that results will be read from. This can either be\nan existing <a href=\"DataSource.html\">DataSource</a> object, or it can be a\nvalue that would be passed to <a href=\"DataSource.html\">DataSource</a>."
       },
       "dataSourceType": {
        "!type": "string",
        "!doc": "The type of the data source passed into <a href=\"AutoComplete.html#config_dataSource\">dataSource</a>.\nThis can be used to explicitly declare what kind of <a href=\"DataSource.html\">DataSource</a> object will\nbe created."
       },
       "schema": {
        "!type": "+Object",
        "!doc": "A valid configuration object for any of <a href=\"module_datasource.html\">DataSource</a> schema plugins."
       },
       "schemaType": {
        "!type": "string",
        "!doc": "A valid type of <a href=\"module_datasource.html\">DataSource</a> schema plugin, such as array, json, xml, etc."
       },
       "button": {
        "!type": "bool",
        "!doc": "To use a button"
       },
       "delimChar": {
        "!type": "string",
        "!doc": "The character used to indicate the beginning or ending of a new value. Most commonly used\nis a \",\"."
       },
       "forceSelection": {
        "!type": "bool",
        "!doc": "If <a href=\"AutoComplete.html#config_typeAhead\">typeAhead</a> is true, this\nwill clear a selection when the overlay closes unless a user explicitly selects an item."
       },
       "input": {
        "!type": "string",
        "!doc": "The input field which will recieve the users input."
       },
       "matchKey": {
        "!type": "string",
        "!doc": "The key or numeric index in the schema to match the result against."
       },
       "minQueryLength": {
        "!type": "number",
        "!doc": "The minimum number of characters required to query the data source."
       },
       "queryDelay": {
        "!type": "number",
        "!doc": "The amount of time in seconds to delay before submitting the query."
       },
       "queryInterval": {
        "!type": "number",
        "!doc": "When IME usage is detected or interval detection is explicitly enabled,\nAutoComplete will detect the input value at the given interval and send a\nquery if the value has changed."
       },
       "queryMatchCase": {
        "!type": "bool",
        "!doc": "When <a href=\"AutoComplete.html#config_applyLocalFilter\">applyLocalFilter</a> is true,\nsetting this to true will match only results with the same case."
       },
       "queryMatchContains": {
        "!type": "bool",
        "!doc": "When <a href=\"AutoComplete.html#config_applyLocalFilter\">applyLocalFilter</a> is true,\nsetting this to true will match results which contain the query anywhere in the text,\ninstead of just matching just items that start with the query."
       },
       "queryQuestionMark": {
        "!type": "bool",
        "!doc": "For IO DataSources, AutoComplete will automatically insert a \"?\" between the server URI and\nthe encoded query string. To prevent this behavior, you can\nset this value to false. If you need to customize this even further, you\ncan override the <a href=\"AutoComplete.html#method_generateRequest\">generateRequest</a> method."
       },
       "suppressInputUpdate": {
        "!type": "bool",
        "!doc": "Whether or not the input field should be updated with selections."
       },
       "typeAhead": {
        "!type": "bool",
        "!doc": "If <a href=\"AutoComplete.html#config_autoHighlight\">autoHighlight</a> is enabled, whether or not the\ninput field should be automatically updated with the first result as the user types,\nautomatically selecting the portion of the text the user has not typed yet."
       },
       "typeAheadDelay": {
        "!type": "number",
        "!doc": "If <a href=\"AutoComplete.html#config_typeAhead\">typeAhead</a> is true, number of seconds\nto delay before updating the input. In order to prevent certain race conditions, this value must\nalways be greater than the <a href=\"AutoComplete.html#config_queryDelay\">queryDelay</a>."
       },
       "uniqueName": {
        "!type": "string",
        "!doc": "The unique ID of the input element."
       },
       "doBeforeLoadData": {
        "!type": "fn(event: +EventFacade) -> bool",
        "!doc": "An overridable method that is executed before the result overlay is loaded with results."
       },
       "formatResult": {
        "!type": "fn(result: +Object, request: string, resultMatch: string) -> string",
        "!doc": "An overridable method for formatting the result of the query before its displayed in the overlay."
       },
       "generateRequest": {
        "!type": "fn(query: string) -> +Object",
        "!doc": "An overridable method that creates an object to be passed to the sendRequest\nmethod of the data source object. Useful to overwrite if you wish to create\na custom request object before its sent."
       },
       "handleResponse": {
        "!type": "fn(event: +EventFacade)",
        "!doc": "Handles the response for the display of the results. This is a callback method\nthat is fired by the sendRequest method so that results are ready to be accessed."
       },
       "editEvent": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getEditor": {
        "!type": "fn(record: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getCellEditor": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getRecordColumnValue": {
        "!type": "fn(record: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "AutoComplete.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the AutoComplete."
      },
      "CellEditorSupport.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "CellEditorSupport.EDITOR_ZINDEX": {
       "!type": "number",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "CellEditorSupport.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the CellEditorSupport."
      }
     },
     "BaseCellEditor": {
      "!type": "fn(config: +Object)",
      "prototype": {
       "!proto": "A.Overlay.prototype",
       "editable": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "elementName": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "footerContent": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "hideOnSave": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "inputFormatter": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "outputFormatter": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "showToolbar": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "strings": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "tabIndex": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "toolbar": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "unescapeValue": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "validator": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "value": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "visible": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "formatValue": {
        "!type": "fn(formatter: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getValue": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getElementsValue": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request.\n\nNOTE FOR DEVELOPERS: Yoy *may* want to replace the methods from\nthis section on your implementation."
       }
      },
      "BaseCellEditor.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "BaseCellEditor.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the BaseCellEditor."
      },
      "BaseCellEditor.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      },
      "BaseCellEditor.UI_ATTRS": {
       "!type": "+Array",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      }
     },
     "BaseOptionsCellEditor": {
      "!type": "fn(config: +Object)",
      "prototype": {
       "!proto": "_yui.aui_datatable.A.BaseCellEditor.prototype",
       "inputFormatter": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "options": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "outputFormatter": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "selectedAttrName": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "strings": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "addNewOption": {
        "!type": "fn(name: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "removeOption": {
        "!type": "fn(optionRow: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "saveOptions": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "toggleEdit": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "BaseOptionsCellEditor.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "BaseOptionsCellEditor.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the BaseOptionsCellEditor."
      },
      "BaseOptionsCellEditor.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      },
      "BaseOptionsCellEditor.UI_ATTRS": {
       "!type": "+Array",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      }
     },
     "TextCellEditor": {
      "!type": "fn(config: +Object) -> +_yui.aui_datatable.A.TextCellEditor",
      "prototype": {
       "!proto": "_yui.aui_datatable.A.BaseCellEditor.prototype"
      },
      "TextCellEditor.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "TextCellEditor.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "TextAreaCellEditor": {
      "!type": "fn(config: +Object) -> +_yui.aui_datatable.A.TextAreaCellEditor",
      "TextAreaCellEditor.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "TextAreaCellEditor.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "DropDownCellEditor": {
      "!type": "fn(config: +Object) -> +_yui.aui_datatable.A.DropDownCellEditor",
      "DropDownCellEditor.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "DropDownCellEditor.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the DropDownCellEditor."
      },
      "prototype": {
       "multiple": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getElementsValue": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "DropDownCellEditor.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      },
      "DropDownCellEditor.UI_ATTRS": {
       "!type": "+Array",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      }
     },
     "CheckboxCellEditor": {
      "!type": "fn(config: +Object) -> +_yui.aui_datatable.A.CheckboxCellEditor",
      "CheckboxCellEditor.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "CheckboxCellEditor.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the CheckboxCellEditor."
      },
      "prototype": {
       "selectedAttrName": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getElementsValue": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "CheckboxCellEditor.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "RadioCellEditor": {
      "!type": "fn(config: +Object) -> +_yui.aui_datatable.A.RadioCellEditor",
      "RadioCellEditor.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "RadioCellEditor.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      },
      "prototype": {
       "getElementsValue": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      }
     },
     "DateCellEditor": {
      "!type": "fn(config: +Object) -> +_yui.aui_datatable.A.DateCellEditor",
      "DateCellEditor.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "DateCellEditor.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      },
      "DateCellEditor.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the DateCellEditor."
      },
      "prototype": {
       "bodyContent": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "calendar": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "dateFormat": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "inputFormatter": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "outputFormatter": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getElementsValue": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "formatDate": {
        "!type": "fn(date: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      }
     },
     "DataTableHighlight": {
      "!type": "fn(config: +Object) -> +_yui.aui_datatable.A.DataTableHighlight",
      "prototype": {
       "!proto": "A.Plugin.Base.prototype",
       "clear": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getActiveRegion": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getSelectionRegion": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "activeBorderWidth": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "overlayActiveNode": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "overlayNode": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "highlightRange": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "rangeBorderWidth": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "type": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "DataTableHighlight.NS": {
       "!type": "string",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "DataTableHighlight.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "DataTableHighlight.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the DataTableHighlight."
      }
     },
     "PropertyList": {
      "!type": "fn(config: +Object) -> +_yui.aui_datatable.A.PropertyList",
      "prototype": {
       "!proto": "A.DataTable.prototype",
       "getDefaultEditor": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "columns": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "scrollable": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "editEvent": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "width": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request.\n\nDataTable scroll breaks when width value is a number\nSee http://yuilibrary.com/projects/yui3/ticket/2532600"
       },
       "strings": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "PropertyList.CSS_PREFIX": {
       "!type": "string",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "PropertyList.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the PropertyList."
      }
     },
     "DataTableSelection": {
      "!type": "fn(config: +Object) -> +_yui.aui_datatable.A.DataTableSelection",
      "DataTableSelection.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the DataTableSelection."
      },
      "prototype": {
       "activeCell": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "activeCoord": {
        "!type": "+Array",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "activeRow": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "selection": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "tabIndex": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "captureSelection": {
        "!type": "fn(coords: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getActiveColumn": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getActiveRecord": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getCoord": {
        "!type": "fn(seed: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getColumn": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getRow": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request.\n\nAdd support to get a row by seed on DataTable getRow\nSee http://yuilibrary.com/projects/yui3/ticket/2532605"
       }
      }
     }
    }
   },
   "aui_datatype_date_parse": {
    "A": {
     "DateParser": {
      "!type": "fn(opt_pattern: string) -> +_yui.aui_datatype_date_parse.A.DateParser",
      "DateParser.TOKEN_PREFIX": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the token prefix, e.g. %A."
      },
      "DateParser.TWO_DIGIT_YEAR_BASE": {
       "!type": "number",
       "!doc": "Static property provides a base year to sum two digit years, e.g. For the\nmask %Y, \"13\" will be parsed to 2013."
      },
      "prototype": {
       "compilePattern": {
        "!type": "fn(pattern: string)",
        "!doc": "\"Compiles\" the strftime pattern. The same DateParser instance can be\nreused to other \"compiled\" masks."
       }
      }
     },
     "Date": {
      "!type": "fn()",
      "parse": {
       "!type": "fn(mask: string, text: string, opt_date: +_yui.aui_datatype_date_parse.Date) -> +aui_datatype_date_parse.Date",
       "!doc": "Takes a string mask and a text as input and parses it as a native JavaScript Date.\n**If only one argument is passed**, the YUI parser will be called for backwards compatibility."
      }
     }
    },
    "Date": {
     "!type": "fn()",
     "prototype": {
      "parse": {
       "!type": "fn(mask: string, text: string, opt_date: +_yui.aui_datatype_date_parse.Date) -> +aui_datatype_date_parse.Date",
       "!doc": "Takes a string mask and a text as input and parses it as a native JavaScript Date."
      }
     },
     "DateParser.HINTS": {
      "!type": "+Object",
      "!doc": "Static property provides an object that contains hints information for\npossible token values, e.g. year, month, day etc."
     },
     "DateParser.HINTS.AGGREGATES": {
      "!type": "+Object",
      "!doc": "Static property provides an object that contains hints information for\naggregates tokens."
     },
     "DateParser.HINTS.AMPM": {
      "!type": "+Object",
      "!doc": "Static property provides an object that contains hints information for\nampm tokens."
     },
     "DateParser.HINTS.YEAR": {
      "!type": "+Object",
      "!doc": "Static property provides an object that contains hints information for\nyear tokens."
     },
     "DateParser.HINTS.MONTH": {
      "!type": "+Object",
      "!doc": "Static property provides an object that contains hints information for\nmonth tokens."
     },
     "DateParser.HINTS.DAY": {
      "!type": "+Object",
      "!doc": "Static property provides an object that contains hints information for\nday tokens."
     },
     "DateParser.HINTS.HOURS": {
      "!type": "+Object",
      "!doc": "Static property provides an object that contains hints information for\nhours tokens."
     },
     "DateParser.HINTS.MINUTES": {
      "!type": "+Object",
      "!doc": "Static property provides an object that contains hints information for\nminutes tokens."
     },
     "DateParser.HINTS.SECONDS": {
      "!type": "+Object",
      "!doc": "Static property provides an object that contains hints information for\nseconds tokens."
     },
     "DateParser.HINTS.TZ": {
      "!type": "+Object",
      "!doc": "Static property provides an object that contains hints information for\ntimezone tokens."
     }
    }
   },
   "aui_datatype": {
    "DataType": {
     "Boolean": {
      "!type": "fn()",
      "prototype": {
       "parse": {
        "!type": "fn(data: ?) -> bool",
        "!doc": "Parses any <code>falsey</code> value to <code>false</code> and\n<code>non-falsey</code> to <code>true</code>."
       }
      }
     },
     "String": {
      "!type": "fn()",
      "prototype": {
       "evaluate": {
        "!type": "fn(data: ?) -> bool",
        "!doc": "Evaluates a string to a primitive value (if possible). Supports\n<code>true</code> and <code>false</code> also. Unrecognized strings are\nreturned without any modification."
       }
      }
     }
    }
   },
   "datatype": {
    "A": {
     "DataType": {
      "DateMath": {
       "!type": "fn()",
       "DAY": {
        "!type": "string",
        "!doc": "Constant field representing Day."
       },
       "WEEK": {
        "!type": "string",
        "!doc": "Constant field representing Week."
       },
       "YEAR": {
        "!type": "string",
        "!doc": "Constant field representing Year."
       },
       "MONTH": {
        "!type": "string",
        "!doc": "Constant field representing Month."
       },
       "MINUTES": {
        "!type": "string",
        "!doc": "Constant field representing Minutes."
       },
       "HOUR": {
        "!type": "string",
        "!doc": "Constant field representing Hour."
       },
       "SECONDS": {
        "!type": "string",
        "!doc": "Constant field representing Seconds."
       },
       "MAX_MONTH_LENGTH": {
        "!type": "number",
        "!doc": "Constant field representing the number of maximum days in a month."
       },
       "WEEK_LENGTH": {
        "!type": "number",
        "!doc": "Constant field representing the number of maximum days in a week."
       },
       "ONE_DAY_MS": {
        "!type": "number",
        "!doc": "Constant field representing one day, in milliseconds."
       },
       "ONE_HOUR_MS": {
        "!type": "number",
        "!doc": "Constant field representing one hour, in milliseconds."
       },
       "ONE_MINUTE_MS": {
        "!type": "number",
        "!doc": "Constant field representing one minute, in milliseconds."
       },
       "ONE_SECOND_MS": {
        "!type": "number",
        "!doc": "Constant field representing one second, in milliseconds."
       },
       "WEEK_ONE_JAN_DATE": {
        "!type": "number",
        "!doc": "Constant field representing the date in first week of January\nwhich identifies the first week of the year.\n<p>\nIn the U.S, Jan 1st is normally used based on a Sunday start of week.\nISO 8601, used widely throughout Europe, uses Jan 4th, based on a Monday start of week.\n</p>"
       },
       "prototype": {
        "add": {
         "!type": "fn(date: +_yui.aui_datatype_date_parse.Date, field: string, amount: number) -> +aui_datatype_date_parse.Date",
         "!doc": "Adds the specified amount of time to the this instance."
        },
        "compare": {
         "!type": "fn(d1: +_yui.aui_datatype_date_parse.Date, d2: +_yui.aui_datatype_date_parse.Date) -> bool",
         "!doc": "Compare dates."
        },
        "copyHours": {
         "!type": "fn(d1: ?, d2: ?)",
         "!doc": "TODO. Wanna help? Please send a Pull Request."
        },
        "subtract": {
         "!type": "fn(date: +_yui.aui_datatype_date_parse.Date, field: number, amount: number) -> +aui_datatype_date_parse.Date",
         "!doc": "Subtract the specified amount of time from the this instance."
        },
        "before": {
         "!type": "fn(date: +_yui.aui_datatype_date_parse.Date, compareTo: +_yui.aui_datatype_date_parse.Date) -> bool",
         "!doc": "Determine whether a given date is before another date on the calendar."
        },
        "after": {
         "!type": "fn(date: +_yui.aui_datatype_date_parse.Date, compareTo: +_yui.aui_datatype_date_parse.Date) -> bool",
         "!doc": "Determine whether a given date is after another date on the calendar."
        },
        "between": {
         "!type": "fn(date: +_yui.aui_datatype_date_parse.Date, dateBegin: +_yui.aui_datatype_date_parse.Date, dateEnd: +_yui.aui_datatype_date_parse.Date) -> bool",
         "!doc": "Determine whether a given date is between two other dates on the calendar."
        },
        "getJan1": {
         "!type": "fn(calendarYear: number) -> +aui_datatype_date_parse.Date",
         "!doc": "Retrieve a JavaScript Date object representing January 1 of any given year."
        },
        "getDayOffset": {
         "!type": "fn(d1: +_yui.aui_datatype_date_parse.Date, d2: +_yui.aui_datatype_date_parse.Date) -> number",
         "!doc": "Calculate the number of days between the specified dates."
        },
        "getHoursOffset": {
         "!type": "fn(d1: +_yui.aui_datatype_date_parse.Date, d2: +_yui.aui_datatype_date_parse.Date) -> number",
         "!doc": "Calculate the number of hours between the specified dates."
        },
        "getMinutesOffset": {
         "!type": "fn(d1: +_yui.aui_datatype_date_parse.Date, d2: +_yui.aui_datatype_date_parse.Date) -> number",
         "!doc": "Calculate the number of minutes between the specified dates."
        },
        "getSecondsOffset": {
         "!type": "fn(d1: +_yui.aui_datatype_date_parse.Date, d2: +_yui.aui_datatype_date_parse.Date) -> number",
         "!doc": "Calculate the number of seconds between the specified dates."
        },
        "getOffset": {
         "!type": "fn(d1: ?, d2: ?, constantAmount: ?)",
         "!doc": "TODO. Wanna help? Please send a Pull Request."
        },
        "getWeekNumber": {
         "!type": "fn(date: +_yui.aui_datatype_date_parse.Date, firstDayOfWeek: number, janDate: number) -> number",
         "!doc": "Calculate the week number for the given date. Can currently support standard\nU.S. week numbers, based on Jan 1st defining the 1st week of the year, and\nISO8601 week numbers, based on Jan 4th defining the 1st week of the year."
        },
        "getFirstDayOfWeek": {
         "!type": "fn(dt: +_yui.aui_datatype_date_parse.Date, startOfWeek: number) -> +aui_datatype_date_parse.Date",
         "!doc": "Get the first day of the week, for the give date."
        },
        "isWeekDay": {
         "!type": "fn(date: +_yui.aui_datatype_date_parse.Date) -> ?",
         "!doc": "Check if the passed date is a week day."
        },
        "isTueOrThu": {
         "!type": "fn(date: +_yui.aui_datatype_date_parse.Date) -> ?",
         "!doc": "Check if the passed date is a Tuesday or Thursday."
        },
        "isMonWedOrFri": {
         "!type": "fn(date: +_yui.aui_datatype_date_parse.Date) -> ?",
         "!doc": "Check if the passed date is a Monday, Wednesday or Friday."
        },
        "isNextDay": {
         "!type": "fn(date1: +_yui.aui_datatype_date_parse.Date, date2: +_yui.aui_datatype_date_parse.Date) -> ?",
         "!doc": "Check if the {date2} is the next day."
        },
        "isNextDayBoundary": {
         "!type": "fn(date1: +_yui.aui_datatype_date_parse.Date, date2: +_yui.aui_datatype_date_parse.Date) -> ?",
         "!doc": "Check if the {date2} is the next day at 00:00:00."
        },
        "isDayOverlap": {
         "!type": "fn(date1: +_yui.aui_datatype_date_parse.Date, date2: +_yui.aui_datatype_date_parse.Date) -> ?",
         "!doc": "Check if the passed date is between two days."
        },
        "isToday": {
         "!type": "fn(date: +_yui.aui_datatype_date_parse.Date) -> ?",
         "!doc": "Check if the passed date is today."
        },
        "isSameMonth": {
         "!type": "fn(d1: +_yui.aui_datatype_date_parse.Date, d2: +_yui.aui_datatype_date_parse.Date) -> ?",
         "!doc": "Check if the passed dates are in the same month."
        },
        "isYearOverlapWeek": {
         "!type": "fn(weekBeginDate: +_yui.aui_datatype_date_parse.Date) -> bool",
         "!doc": "Determine if a given week overlaps two different years."
        },
        "isMonthOverlapWeek": {
         "!type": "fn(weekBeginDate: +_yui.aui_datatype_date_parse.Date) -> bool",
         "!doc": "Determine if a given week overlaps two different months."
        },
        "findMonthStart": {
         "!type": "fn(date: +_yui.aui_datatype_date_parse.Date) -> +aui_datatype_date_parse.Date",
         "!doc": "Get the first day of a month containing a given date."
        },
        "findMonthEnd": {
         "!type": "fn(date: +_yui.aui_datatype_date_parse.Date) -> +aui_datatype_date_parse.Date",
         "!doc": "Get the last day of a month containing a given date."
        },
        "clearTime": {
         "!type": "fn(date: +_yui.aui_datatype_date_parse.Date) -> +aui_datatype_date_parse.Date",
         "!doc": "Clear the time fields from a given date, effectively setting the time to 12 noon."
        },
        "safeClearTime": {
         "!type": "fn(date: +_yui.aui_datatype_date_parse.Date) -> +aui_datatype_date_parse.Date",
         "!doc": "Clear the time fields from a given date, effectively setting the time to\n12 noon. This is \"safe\" because clones the date before clear, not affecting\nthe passed reference."
        },
        "toLastHour": {
         "!type": "fn(date: +_yui.aui_datatype_date_parse.Date) -> +aui_datatype_date_parse.Date",
         "!doc": "Set the time fields from a given date to the last possible hour."
        },
        "toMidnight": {
         "!type": "fn(date: +_yui.aui_datatype_date_parse.Date) -> +aui_datatype_date_parse.Date",
         "!doc": "Set the time fields from a given date to midnight."
        },
        "clone": {
         "!type": "fn(date: +_yui.aui_datatype_date_parse.Date) -> +aui_datatype_date_parse.Date",
         "!doc": "Clone the passed date object."
        },
        "getDate": {
         "!type": "fn(y: number, m: number, d: number) -> +aui_datatype_date_parse.Date",
         "!doc": "Return a new JavaScript Date object, representing the given year,\nmonth and date.Time fields (hr, min, sec, ms) on the new Date object\nare set to 0. The method allows Date instances to be created with the a\nyear less than 100. \"new Date(year, month, date)\" implementations\nset the year to 19xx if a year (xx) which is less than 100 is provided.\n\n<em>NOTE:</em>Validation on argument values is not performed. It is the\ncallers responsibility to ensure arguments are valid as per the\nECMAScript-262 Date object specification for the\nnew Date(year, month[, date]) constructor."
        },
        "getDaysInMonth": {
         "!type": "fn(year: ?, month: ?)",
         "!doc": "TODO. Wanna help? Please send a Pull Request."
        },
        "toUsTimeString": {
         "!type": "fn(date: ?, padHours: ?, omitMinutes: ?, hideAmPm: ?)",
         "!doc": "TODO. Wanna help? Please send a Pull Request."
        },
        "toIsoTimeString": {
         "!type": "fn(date: ?, showSeconds: ?)",
         "!doc": "TODO. Wanna help? Please send a Pull Request."
        }
       }
      }
     }
    }
   },
   "aui_datepicker": {
    "A": {
     "DatePickerDelegate": {
      "!type": "fn(config: +Object) -> +_yui.aui_datepicker.A.DatePickerDelegate",
      "prototype": {
       "getSelectedDates": {
        "!type": "fn(node: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getParsedDatesFromInputValue": {
        "!type": "fn(opt_value: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "useInputNode": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "useInputNodeOnce": {
        "!type": "fn(node: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "activeInput": {
        "!type": "?",
        "!doc": "The active input element that holds the calendar instance."
       },
       "container": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "dateSeparator": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "mask": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "content": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "valueExtractor": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "valueFormatter": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "DatePickerDelegate.ATTRS": {
       "!type": "+Object",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      }
     },
     "DatePickerNativeBase": {
      "!type": "fn(config: +Object) -> +_yui.aui_datepicker.A.DatePickerNativeBase",
      "DatePickerNativeBase.ATTRS": {
       "!type": "+Object",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "prototype": {
       "nativeMask": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "nativeType": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "bindNativeUI": {
        "!type": "fn()",
        "!doc": "Bind the events on the DatePickerNativeBase UI. Lifecycle."
       },
       "clearSelection": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "deselectDates": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "hide": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "show": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "selectDates": {
        "!type": "fn(dates: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "useInputNode": {
        "!type": "fn(node: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      }
     },
     "DatePickerPopover": {
      "!type": "fn(config: +Object) -> +_yui.aui_datepicker.A.DatePickerPopover",
      "DatePickerPopover.ATTRS": {
       "!type": "+Object",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "prototype": {
       "autoHide": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "popover": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "popoverCssClass": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "alignTo": {
        "!type": "fn(node: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getPopover": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "hide": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "show": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      }
     },
     "DatePickerBase": {
      "!type": "fn(config: +Object) -> +_yui.aui_datepicker.A.DatePickerBase",
      "DatePickerBase.PANES": {
       "!type": "+Array",
       "!doc": "Static property used to define the default attribute\nconfiguration for the DatePickerBase."
      },
      "DatePickerBase.ATTRS": {
       "!type": "+Object",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "prototype": {
       "calendar": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "autoHide": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "panes": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "clearSelection": {
        "!type": "fn(silent: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "deselectDates": {
        "!type": "fn(dates: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getCalendar": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "selectDates": {
        "!type": "fn(dates: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "useInputNode": {
        "!type": "fn(node: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      }
     }
    },
    "DatepickerManager": {
     "!type": "fn(config: +Object) -> +_yui.aui_datepicker.DatepickerManager",
     "prototype": {
      "!proto": "_yui.aui_overlay.OverlayManager.prototype",
      "calendar": {
       "!type": "+Object",
       "!doc": "<a href=\"Calendar.html\">Calendar</a> configuration Object.</a>"
      },
      "formatter": {
       "!type": "fn()",
       "!doc": "Function to format the array of the selected dates before set the\nvalue of the input."
      },
      "setValue": {
       "!type": "bool",
       "!doc": "If true set the selected date with the correct\ndateFormat to the value of the input field\nwhich is hosting the Calendar."
      },
      "stack": {
       "!type": "bool",
       "!doc": "If true is able to do stacking with another overlays."
      },
      "zIndexBase": {
       "!type": "number",
       "!doc": "ZIndex default value passed to the\n<a href=\"OverlayManager.html#config_zIndexBase\">zIndexBase</a> of\n<a href=\"OverlayManager.html\">OverlayManager</a>."
      },
      "dateFormat": {
       "!type": "string",
       "!doc": "The default date format string which can be overriden for\nlocalization support. The format must be valid according to\n<a href=\"DataType.Date.html\">A.DataType.Date.format</a>."
      }
     }
    },
    "DatePickerSelect": {
     "!type": "fn(config: +Object) -> +_yui.aui_datepicker.DatePickerSelect",
     "prototype": {
      "!proto": "Component.prototype",
      "appendOrder": {
       "!type": "+Array",
       "!doc": "The order the selects elements are appended to the\n<a href=\"DatePickerSelect.html#config_srcNode\">srcNode</a>."
      },
      "buttonNode": {
       "!type": "string",
       "!doc": "DOM Node to display the button of the DatePickerSelect. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-buttonitem</code>."
      },
      "calendar": {
       "!type": "+Object",
       "!doc": "<a href=\"Calendar.html\">Calendar</a> configuration Object.</a>"
      },
      "dayNode": {
       "!type": "string",
       "!doc": "DOM Node to display the day of the DatePickerSelect. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-datepicker-year</code>."
      },
      "dayNodeName": {
       "!type": "string",
       "!doc": "Name attribute used on the\n<a href=\"DatePickerSelect.html#config_dayNode\">dayNode</a>."
      },
      "locale": {
       "!type": "string",
       "!doc": "Current locale"
      },
      "monthNode": {
       "!type": "string",
       "!doc": "DOM Node to display the month of the DatePickerSelect. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-datepicker-year</code>."
      },
      "monthNodeName": {
       "!type": "string",
       "!doc": "Name attribute used on the\n<a href=\"DatePickerSelect.html#config_monthNode\">monthNode</a>."
      },
      "nullableDay": {
       "!type": "bool",
       "!doc": "If true the select element for the day will be nullable"
      },
      "nullableMonth": {
       "!type": "bool",
       "!doc": "If true the select element for the month will be nullable"
      },
      "nullableYear": {
       "!type": "bool",
       "!doc": "If true the select element for the year will be nullable"
      },
      "populateDay": {
       "!type": "bool",
       "!doc": "If true the select element for the days will be automatic\npopulated."
      },
      "populateMonth": {
       "!type": "bool",
       "!doc": "If true the select element for the month will be automatic\npopulated."
      },
      "populateYear": {
       "!type": "bool",
       "!doc": "If true the select element for the year will be automatic\npopulated."
      },
      "selectWrapperNode": {
       "!type": "string",
       "!doc": "DOM Node to display the selects of the DatePickerSelect. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-datepicker-select-wrapper</code>."
      },
      "trigger": {
       "!type": "+aui_node.Node",
       "!doc": "Trigger element to open the calendar. Inherited from\n<a href=\"OverlayContext.html#config_trigger\">OverlayContext</a>."
      },
      "yearNode": {
       "!type": "string",
       "!doc": "DOM Node to display the year of the DatePickerSelect. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-datepicker-year</code>."
      },
      "yearNodeName": {
       "!type": "string",
       "!doc": "Name attribute used on the\n<a href=\"DatePickerSelect.html#config_yearNode\">yearNode</a>."
      },
      "yearRange": {
       "!type": "+Array",
       "!doc": "Year range to be displayed on the year select element. By default\nit displays from -10 to +10 years from the current year."
      },
      "getCurrentDate": {
       "!type": "fn() -> +aui_datatype_date_parse.Date",
       "!doc": "Get current date."
      },
      "getDaysInMonth": {
       "!type": "fn(year: number, month: number) -> number",
       "!doc": "Get the number of days in the passed year and month."
      }
     },
     "DatePickerSelect.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "DatePickerSelect.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the DatePickerSelect."
     },
     "DatePickerSelect.HTML_PARSER": {
      "!type": "+Object",
      "!doc": "Object hash, defining how attribute values are to be parsed from\nmarkup contained in the widgets content box."
     }
    }
   },
   "aui_delayed_task": {
    "DelayedTask": {
     "!type": "fn(config: +Object, fn: fn(), scope: +Object, args: ?) -> +_yui.aui_delayed_task.DelayedTask",
     "prototype": {
      "delay": {
       "!type": "fn(delay: number, newFn: fn(), newScope: +Object, newArgs: ?)",
       "!doc": "<p>This function is responsible to execute the user callback, passed in\nthe <code>constructor</code> after <code>delay</code> milliseconds.</p>\n\nExample:\n\n<pre><code>// executes after 1000ms the callback\ndelayed.delay(1000);</code></pre>"
      },
      "cancel": {
       "!type": "fn()",
       "!doc": "Cancel the delayed task in case its running (i.e., clearInterval from\nthe current running <a href=\"DelayedTask.html#property__id\">_id</a>)."
      }
     }
    }
   },
   "aui_diagram_builder": {
    "A": {
     "AvailableField": {
      "!type": "fn(config: +Object) -> +_yui.aui_diagram_builder.A.AvailableField",
      "prototype": {
       "!proto": "A.Base.prototype",
       "draggable": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "label": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "iconClass": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "id": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "node": {
        "!type": "+aui_node.Node",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "type": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "AvailableField.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "AvailableField.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the AvailableField."
      },
      "AvailableField.EXTENDS": {
       "!type": "string",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "FieldSupport": {
      "!type": "fn() -> +_yui.aui_diagram_builder.A.FieldSupport",
      "FieldSupport.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the FieldSupport."
      },
      "prototype": {
       "fields": {
        "!type": "+Array",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "maxFields": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "addField": {
        "!type": "fn(field: ?, index: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "createFields": {
        "!type": "fn(val: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "removeField": {
        "!type": "fn(field: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "createField": {
        "!type": "fn(val: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request.\n\nNOTE FOR DEVELOPERS: Yoy *may* want to replace the\nmethods from this section on your implementation."
       }
      }
     },
     "DiagramBuilderBase": {
      "!type": "fn(config: +Object) -> +_yui.aui_diagram_builder.A.DiagramBuilderBase",
      "prototype": {
       "!proto": "_yui.aui_component.A.Component.prototype",
       "availableFields": {
        "!type": "+Array",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "availableFieldsDragConfig": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "canvas": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "dropConfig": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "contentContainer": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "dropContainer": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "fieldsContainer": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "propertyList": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "strings": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "tabView": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "toolbar": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "toolbarContainer": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "isAvailableFieldsDrag": {
        "!type": "fn(drag: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "plotFields": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "DiagramBuilderBase.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "DiagramBuilderBase.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the DiagramBuilderBase."
      },
      "DiagramBuilderBase.HTML_PARSER": {
       "!type": "+Object",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "DiagramBuilderBase.UI_ATTRS": {
       "!type": "+Array",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "DiagramBuilderBase.AUGMENTS": {
       "!type": "+Array",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      }
     },
     "Connector": {
      "!type": "fn(config: +Object) -> +_yui.aui_diagram_builder.A.Connector",
      "prototype": {
       "!proto": "A.Base.prototype",
       "draw": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getProperties": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getPropertyModel": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getStrings": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "hide": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "show": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "coord": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "toJSON": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "arrowPoints": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "builder": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "color": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "graphic": {
        "!type": "+Graphic",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "lazyDraw": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "name": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "nodeName": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "p1": {
        "!type": "+Array",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "p2": {
        "!type": "+Array",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "selected": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "shape": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "shapeArrow": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "shapeArrowHover": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "shapeArrowSelected": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "shapeHover": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "shapeSelected": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "showName": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "transition": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "visible": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "Connector.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Connector."
      },
      "Connector.STRINGS": {
       "!type": "+Object",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      }
     },
     "DiagramBuilder": {
      "!type": "fn(config: +Object) -> +_yui.aui_diagram_builder.A.DiagramBuilder",
      "prototype": {
       "!proto": "_yui.aui_diagram_builder.A.DiagramBuilderBase.prototype",
       "connector": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "fieldsDragConfig": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "graphic": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "highlightDropZones": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "strings": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "showSuggestConnector": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "suggestConnectorOverlay": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "syncConnectionsUI": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "clearFields": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "closeEditProperties": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "connect": {
        "!type": "fn(diagramNode1: ?, diagramNode2: ?, optConnector: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "connectAll": {
        "!type": "fn(nodes: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "createField": {
        "!type": "fn(val: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "deleteSelectedConnectors": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "deleteSelectedNode": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "eachConnector": {
        "!type": "fn(fn: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "editConnector": {
        "!type": "fn(connector: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "editNode": {
        "!type": "fn(diagramNode: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getFieldClass": {
        "!type": "fn(type: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getNodesByTransitionProperty": {
        "!type": "fn(property: ?, value: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getSelectedConnectors": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getSourceNodes": {
        "!type": "fn(diagramNode: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "hideSuggestConnetorOverlay": {
        "!type": "fn(diagramNode: ?, drag: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "isAbleToConnect": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "isFieldsDrag": {
        "!type": "fn(drag: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "plotField": {
        "!type": "fn(field: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "select": {
        "!type": "fn(diagramNode: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "showSuggestConnetorOverlay": {
        "!type": "fn(xy: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "stopEditing": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "toJSON": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "unselectConnectors": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "unselectNodes": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "DiagramBuilder.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "DiagramBuilder.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the DiagramBuilder."
      },
      "DiagramBuilder.EXTENDS": {
       "!type": "string",
       "!doc": "Static property used to define which component it extends."
      },
      "DiagramBuilder.FIELDS_TAB": {
       "!type": "number",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "DiagramBuilder.SETTINGS_TAB": {
       "!type": "number",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      }
     },
     "DiagramNodeManagerBase": {
      "!type": "fn(config: +Object) -> +_yui.aui_diagram_builder.A.DiagramNodeManagerBase",
      "prototype": {
       "!proto": "A.Base.prototype"
      },
      "DiagramNodeManagerBase.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "DiagramNodeManagerBase.EXTENDS": {
       "!type": "string",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "DiagramNode": {
      "!type": "fn(config: +Object) -> +_yui.aui_diagram_builder.A.DiagramNode",
      "prototype": {
       "!proto": "A.Overlay.prototype",
       "builder": {
        "!type": "+DiagramBuilder",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "connectors": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "controlsToolbar": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "description": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "graphic": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "height": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "highlighted": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "name": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "required": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "selected": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "shapeBoundary": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "highlightBoundaryStroke": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "shapeInvite": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "strings": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "tabIndex": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "transitions": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "type": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "width": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "zIndex": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "addTransition": {
        "!type": "fn(transition: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "alignTransition": {
        "!type": "fn(transition: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "alignTransitions": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "close": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "connect": {
        "!type": "fn(transition: ?, optConnector: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "connectDrop": {
        "!type": "fn(event: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "connectEnd": {
        "!type": "fn(event: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "connectMove": {
        "!type": "fn(event: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "connectNode": {
        "!type": "fn(diagramNode: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "connectOutTarget": {
        "!type": "fn(event: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "connectOverTarget": {
        "!type": "fn(event: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "connectStart": {
        "!type": "fn(event: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "disconnect": {
        "!type": "fn(transition: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "eachConnector": {
        "!type": "fn(fn: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getConnector": {
        "!type": "fn(transition: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getContainer": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getLeftTop": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getProperties": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getPropertyModel": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "isBoundaryDrag": {
        "!type": "fn(drag: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "isTransitionConnected": {
        "!type": "fn(transition: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "prepareTransition": {
        "!type": "fn(val: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "removeTransition": {
        "!type": "fn(transition: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "renderShapeBoundary": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "renderShapeInvite": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "syncConnectionsUI": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "DiagramNode.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "DiagramNode.UI_ATTRS": {
       "!type": "+Array",
       "!doc": "Static property used to define the UI attributes."
      },
      "DiagramNode.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the DiagramNode."
      },
      "DiagramNode.EXTENDS": {
       "!type": "string",
       "!doc": "Static property used to define which component it extends."
      },
      "DiagramNode.CIRCLE_POINTS": {
       "!type": "+Array",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "DiagramNode.DIAMOND_POINTS": {
       "!type": "+Array",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "DiagramNode.SQUARE_POINTS": {
       "!type": "+Array",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      }
     },
     "DiagramNodeState": {
      "!type": "fn(config: +Object) -> +_yui.aui_diagram_builder.A.DiagramNodeState",
      "prototype": {
       "!proto": "_yui.aui_diagram_builder.A.DiagramNode.prototype",
       "height": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "type": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "width": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "renderShapeBoundary": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "DiagramNodeState.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "DiagramNodeState.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the DiagramNodeState."
      },
      "DiagramNodeState.EXTENDS": {
       "!type": "string",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "DiagramNodeCondition": {
      "!type": "fn(config: +Object) -> +_yui.aui_diagram_builder.A.DiagramNodeCondition",
      "prototype": {
       "!proto": "_yui.aui_diagram_builder.A.DiagramNodeState.prototype",
       "height": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "type": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "width": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "renderShapeBoundary": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "DiagramNodeCondition.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "DiagramNodeCondition.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the DiagramNodeCondition."
      },
      "DiagramNodeCondition.EXTENDS": {
       "!type": "string",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "DiagramNodeStart": {
      "!type": "fn(config: +Object) -> +_yui.aui_diagram_builder.A.DiagramNodeStart",
      "prototype": {
       "!proto": "_yui.aui_diagram_builder.A.DiagramNodeState.prototype",
       "type": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "DiagramNodeStart.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "DiagramNodeStart.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the DiagramNodeStart."
      },
      "DiagramNodeStart.EXTENDS": {
       "!type": "string",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "DiagramNodeEnd": {
      "!type": "fn(config: +Object) -> +_yui.aui_diagram_builder.A.DiagramNodeEnd",
      "prototype": {
       "!proto": "_yui.aui_diagram_builder.A.DiagramNodeState.prototype",
       "type": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "DiagramNodeEnd.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "DiagramNodeEnd.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the DiagramNodeEnd."
      },
      "DiagramNodeEnd.EXTENDS": {
       "!type": "string",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "DiagramNodeJoin": {
      "!type": "fn(config: +Object) -> +_yui.aui_diagram_builder.A.DiagramNodeJoin",
      "prototype": {
       "!proto": "_yui.aui_diagram_builder.A.DiagramNodeState.prototype",
       "height": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "type": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "width": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "DiagramNodeJoin.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "DiagramNodeJoin.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the DiagramNodeJoin."
      },
      "DiagramNodeJoin.EXTENDS": {
       "!type": "string",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "DiagramNodeFork": {
      "!type": "fn(config: +Object) -> +_yui.aui_diagram_builder.A.DiagramNodeFork",
      "prototype": {
       "!proto": "_yui.aui_diagram_builder.A.DiagramNodeState.prototype",
       "height": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "type": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "width": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "DiagramNodeFork.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "DiagramNodeFork.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the DiagramNodeFork."
      },
      "DiagramNodeFork.EXTENDS": {
       "!type": "string",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "DiagramNodeTask": {
      "!type": "fn(config: +Object) -> +_yui.aui_diagram_builder.A.DiagramNodeTask",
      "prototype": {
       "!proto": "_yui.aui_diagram_builder.A.DiagramNodeState.prototype",
       "height": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "type": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "width": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "renderShapeBoundary": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "DiagramNodeTask.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "DiagramNodeTask.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the DiagramNodeTask."
      },
      "DiagramNodeTask.EXTENDS": {
       "!type": "string",
       "!doc": "Static property used to define which component it extends."
      }
     }
    }
   },
   "aui_editable": {
    "Editable": {
     "!type": "fn(config: +Object) -> +_yui.aui_editable.Editable",
     "prototype": {
      "!proto": "Component.prototype",
      "undefined": {
       "!type": "fn()"
      },
      "cancelButton": {
       "!type": "string",
       "!doc": "<a href=\"ButtonItem.html\">ButtonItem</a> constructor Object for the\ncancelButton."
      },
      "contentText": {
       "!type": "string",
       "!doc": "Content text."
      },
      "eventType": {
       "!type": "string",
       "!doc": "Event type to initialize the editable."
      },
      "formatInput": {
       "!type": "fn()",
       "!doc": "Function to format the input text displayed on the input."
      },
      "formatOutput": {
       "!type": "fn()",
       "!doc": "Function to format the output text displayed on the input."
      },
      "icons": {
       "!type": "+Array",
       "!doc": "Array with icons for the <a href=\"Toolbar.html\">Toolbar</a>."
      },
      "inputType": {
       "!type": "string",
       "!doc": "Type of the input used to edit the <a\nhref=\"Editable.html#config_node\">node</a>."
      },
      "node": {
       "!type": "+aui_node.Node",
       "!doc": "Node to setup the editable."
      },
      "renderTo": {
       "!type": "string",
       "!doc": "Node to render the editable."
      },
      "saveButton": {
       "!type": "string",
       "!doc": "<a href=\"ButtonItem.html\">ButtonItem</a> constructor Object for the\nsaveButton."
      },
      "cancel": {
       "!type": "fn()",
       "!doc": "Cancel the editable. Return to the original state."
      },
      "save": {
       "!type": "fn()",
       "!doc": "Save the editable. Fires the\n<a href=\"Editable.html#event_save\">save</a> event."
      }
     },
     "Editable.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "Editable.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Editable."
     }
    }
   },
   "aui_form_builder": {
    "A": {
     "FormBuilderAvailableField": {
      "!type": "fn(config: +Object) -> +_yui.aui_form_builder.A.FormBuilderAvailableField",
      "prototype": {
       "!proto": "_yui.aui_diagram_builder.A.AvailableField.prototype",
       "hasModifier": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "isKey": {
        "!type": "fn(name: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "isKeyInRange": {
        "!type": "fn(start: ?, end: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "isKeyInSet": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "isNavKey": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "isSpecialKey": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "delegate": {
        "!type": "fn(node: ?, subscription: ?, notifier: ?, filter: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "detach": {
        "!type": "fn(node: ?, subscription: ?, notifier: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "detachDelegate": {
        "!type": "fn(node: ?, subscription: ?, notifier: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "on": {
        "!type": "fn(node: ?, subscription: ?, notifier: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "hiddenAttributes": {
        "!type": "+Array",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "name": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "options": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "predefinedValue": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "readOnlyAttributes": {
        "!type": "+Array",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "required": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "showLabel": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "tip": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "unique": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "width": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "FormBuilderAvailableField.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "FormBuilderAvailableField.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the ModuleName."
      },
      "FormBuilderAvailableField.EXTENDS": {
       "!type": "string",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "FormBuilder": {
      "!type": "fn(config: +Object) -> +_yui.aui_form_builder.A.FormBuilder",
      "prototype": {
       "!proto": "_yui.aui_diagram_builder.A.DiagramBuilderBase.prototype",
       "allowRemoveRequiredFields": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "enableEditing": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "fieldsSortableListConfig": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "strings": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "closeEditProperties": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "createField": {
        "!type": "fn(config: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "duplicateField": {
        "!type": "fn(field: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "editField": {
        "!type": "fn(field: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getFieldClass": {
        "!type": "fn(type: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getFieldProperties": {
        "!type": "fn(field: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "insertField": {
        "!type": "fn(field: ?, index: ?, parent: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "openEditProperties": {
        "!type": "fn(field: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "plotField": {
        "!type": "fn(field: ?, container: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "plotFields": {
        "!type": "fn(fields: ?, container: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "selectFields": {
        "!type": "fn(fields: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "simulateFocusField": {
        "!type": "fn(field: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "unselectFields": {
        "!type": "fn(fields: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "FormBuilder.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "FormBuilder.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the FormBuilder."
      },
      "FormBuilder.UI_ATTRS": {
       "!type": "+Array",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "FormBuilder.EXTENDS": {
       "!type": "string",
       "!doc": "Static property used to define which component it extends."
      },
      "FormBuilder.FIELDS_TAB": {
       "!type": "number",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "FormBuilder.SETTINGS_TAB": {
       "!type": "number",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      }
     },
     "FormBuilderFieldBase": {
      "!type": "fn(config: +Object) -> +_yui.aui_form_builder.A.FormBuilderFieldBase",
      "prototype": {
       "!proto": "Component.prototype"
      },
      "FormBuilderFieldBase.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "FormBuilderFieldBase.AUGMENTS": {
       "!type": "+Array",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      }
     },
     "FormBuilderField": {
      "!type": "fn(config: +Object) -> +_yui.aui_form_builder.A.FormBuilderField",
      "prototype": {
       "!proto": "_yui.aui_form_builder.A.FormBuilderFieldBase.prototype",
       "acceptChildren": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "builder": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "controlsToolbar": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "dataType": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "disabled": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "selected": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "hiddenAttributes": {
        "!type": "+Array",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "id": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "label": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "localizationMap": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "name": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "parent": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "predefinedValue": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "readOnly": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "readOnlyAttributes": {
        "!type": "+Array",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "required": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "showLabel": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "strings": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "tabIndex": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "template": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "tip": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "type": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "unique": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "zIndex": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "dropZoneNode": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "labelNode": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "requiredFlagNode": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "templateNode": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "tipFlagNode": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "createField": {
        "!type": "fn(val: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getHTML": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request.\nTo developer: Implement this"
       },
       "getNode": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getAttributesForCloning": {
        "!type": "fn() -> +Object",
        "!doc": "Gets all necessary attributes for cloning this field."
       },
       "getProperties": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getPropertyModel": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "_getToolbarItems": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "FormBuilderField.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "FormBuilderField.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the FormBuilderField."
      },
      "FormBuilderField.UI_ATTRS": {
       "!type": "+Array",
       "!doc": "Static property used to define the UI attributes."
      },
      "FormBuilderField.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      },
      "FormBuilderField.HTML_PARSER": {
       "!type": "+Object",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      }
     },
     "FormBuilderButtonField": {
      "!type": "fn(config: +Object) -> +_yui.aui_form_builder.A.FormBuilderButtonField",
      "prototype": {
       "!proto": "_yui.aui_form_builder.A.FormBuilderField.prototype",
       "acceptChildren": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "buttonType": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "predefinedValue": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "showLabel": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "template": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getHTML": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getPropertyModel": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "FormBuilderButtonField.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "FormBuilderButtonField.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the FormBuilderButtonField."
      },
      "FormBuilderButtonField.UI_ATTRS": {
       "!type": "+Array",
       "!doc": "Static property used to define the UI attributes."
      },
      "FormBuilderButtonField.CSS_PREFIX": {
       "!type": "string",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "FormBuilderButtonField.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "FormBuilderCheckBoxField": {
      "!type": "fn(config: +Object) -> +_yui.aui_form_builder.A.FormBuilderCheckBoxField",
      "prototype": {
       "!proto": "_yui.aui_form_builder.A.FormBuilderField.prototype",
       "dataType": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "predefinedValue": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "template": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getPropertyModel": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getHTML": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "FormBuilderCheckBoxField.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "FormBuilderCheckBoxField.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the FormBuilderCheckBoxField."
      },
      "FormBuilderCheckBoxField.CSS_PREFIX": {
       "!type": "?",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "FormBuilderCheckBoxField.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "FormBuilderFieldsetField": {
      "!type": "fn(config: +Object) -> +_yui.aui_form_builder.A.FormBuilderFieldsetField",
      "prototype": {
       "!proto": "_yui.aui_form_builder.A.FormBuilderField.prototype",
       "acceptChildren": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "dataType": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "labelNode": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "template": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getHTML": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getPropertyModel": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "FormBuilderFieldsetField.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "FormBuilderFieldsetField.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the FormBuilderFieldsetField."
      },
      "FormBuilderFieldsetField.UI_ATTRS": {
       "!type": "+Array",
       "!doc": "Static property used to define the UI attributes."
      },
      "FormBuilderFieldsetField.CSS_PREFIX": {
       "!type": "string",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "FormBuilderFieldsetField.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "FormBuilderFileUploadField": {
      "!type": "fn(config: +Object) -> +_yui.aui_form_builder.A.FormBuilderFileUploadField",
      "prototype": {
       "!proto": "_yui.aui_form_builder.A.FormBuilderField.prototype",
       "template": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getHTML": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "FormBuilderFileUploadField.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "FormBuilderFileUploadField.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the FormBuilderFileUploadField."
      },
      "FormBuilderFileUploadField.CSS_PREFIX": {
       "!type": "string",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "FormBuilderFileUploadField.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "OptionsEditor": {
      "!type": "fn(config: +Object) -> +_yui.aui_form_builder.A.OptionsEditor",
      "prototype": {
       "!proto": "_yui.aui_datatable.A.RadioCellEditor.prototype",
       "editable": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "OptionsEditor.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "OptionsEditor.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the OptionsEditor."
      },
      "OptionsEditor.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "FormBuilderMultipleChoiceField": {
      "!type": "fn(config: +Object) -> +_yui.aui_form_builder.A.FormBuilderMultipleChoiceField",
      "prototype": {
       "!proto": "_yui.aui_form_builder.A.FormBuilderField.prototype",
       "acceptChildren": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "options": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "optionTemplate": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "predefinedValue": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getPropertyModel": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "FormBuilderMultipleChoiceField.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "FormBuilderMultipleChoiceField.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the FormBuilderMultipleChoiceField."
      },
      "FormBuilderMultipleChoiceField.UI_ATTRS": {
       "!type": "+Array",
       "!doc": "Static property used to define the UI attributes."
      },
      "FormBuilderMultipleChoiceField.CSS_PREFIX": {
       "!type": "string",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "FormBuilderMultipleChoiceField.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "FormBuilderRadioField": {
      "!type": "fn(config: +Object) -> +_yui.aui_form_builder.A.FormBuilderRadioField",
      "prototype": {
       "!proto": "_yui.aui_form_builder.A.FormBuilderMultipleChoiceField.prototype",
       "template": {
        "!type": "?",
        "!doc": "Reusable block of markup used to generate the field."
       },
       "getHTML": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "FormBuilderRadioField.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "FormBuilderRadioField.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the FormBuilderRadioField."
      },
      "FormBuilderRadioField.CSS_PREFIX": {
       "!type": "string",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "FormBuilderRadioField.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "FormBuilderSelectField": {
      "!type": "fn(config: +Object) -> +_yui.aui_form_builder.A.FormBuilderSelectField",
      "prototype": {
       "!proto": "_yui.aui_form_builder.A.FormBuilderMultipleChoiceField.prototype",
       "multiple": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "template": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getHTML": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getPropertyModel": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "FormBuilderSelectField.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "FormBuilderSelectField.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the FormBuilderSelectField."
      },
      "FormBuilderSelectField.UI_ATTRS": {
       "!type": "+Array",
       "!doc": "Static property used to define the UI attributes."
      },
      "FormBuilderSelectField.CSS_PREFIX": {
       "!type": "?",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "FormBuilderSelectField.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "FormBuilderTextField": {
      "!type": "fn(config: +Object) -> +_yui.aui_form_builder.A.FormBuilderTextField",
      "prototype": {
       "!proto": "_yui.aui_form_builder.A.FormBuilderField.prototype",
       "template": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "width": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getHTML": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getPropertyModel": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "FormBuilderTextField.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "FormBuilderTextField.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the FormBuilderTextField."
      },
      "FormBuilderTextField.CSS_PREFIX": {
       "!type": "string",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "FormBuilderTextField.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "FormBuilderTextAreaField": {
      "!type": "fn(config: +Object) -> +_yui.aui_form_builder.A.FormBuilderTextAreaField",
      "prototype": {
       "!proto": "_yui.aui_form_builder.A.FormBuilderTextField.prototype",
       "template": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getPropertyModel": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "FormBuilderTextAreaField.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "FormBuilderTextAreaField.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the FormBuilderTextAreaField."
      },
      "FormBuilderTextAreaField.CSS_PREFIX": {
       "!type": "?",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "FormBuilderTextAreaField.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     }
    }
   },
   "aui_form_validator": {
    "A": {
     "FormValidator": {
      "!type": "fn(config: +Object) -> +_yui.aui_form_validator.A.FormValidator",
      "prototype": {
       "!proto": "A.Base.prototype",
       "boundingBox": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "containerErrorClass": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "containerValidClass": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "errorClass": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "extractRules": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "fieldContainer": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "fieldStrings": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "labelCssClass": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "messageContainer": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "strings": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "rules": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "selectText": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "showMessages": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "showAllMessages": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "stackErrorContainer": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "validateOnBlur": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "validateOnInput": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "validClass": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "addFieldError": {
        "!type": "fn(field: ?, ruleName: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "clearFieldError": {
        "!type": "fn(field: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "eachRule": {
        "!type": "fn(fn: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "findFieldContainer": {
        "!type": "fn(field: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "focusInvalidField": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getField": {
        "!type": "fn(fieldOrFieldName: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getFieldsByName": {
        "!type": "fn(fieldName: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getFieldError": {
        "!type": "fn(field: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getFieldStackErrorContainer": {
        "!type": "fn(field: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getFieldErrorMessage": {
        "!type": "fn(field: ?, rule: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "hasErrors": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "highlight": {
        "!type": "fn(field: ?, valid: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "normalizeRuleValue": {
        "!type": "fn(ruleValue: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "unhighlight": {
        "!type": "fn(field: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "printStackError": {
        "!type": "fn(field: ?, container: ?, errors: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "resetAllFields": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "resetField": {
        "!type": "fn(field: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "resetFieldCss": {
        "!type": "fn(field: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "validatable": {
        "!type": "fn(field: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "validate": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "validateField": {
        "!type": "fn(field: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "FormValidator.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "FormValidator.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the FormValidator."
      },
      "FormValidator.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     }
    }
   },
   "aui_image_cropper": {
    "A": {
     "ImageCropper": {
      "!type": "fn(config: +Object) -> +_yui.aui_image_cropper.A.ImageCropper",
      "prototype": {
       "!proto": "_yui.aui_component.A.Component.prototype",
       "undefined": {
        "!type": "fn()",
        "!doc": "Check if validator nodes render after the input and lables textNode"
       },
       "cropHeight": {
        "!type": "number",
        "!doc": "The height of a selected area to crop."
       },
       "cropWidth": {
        "!type": "number",
        "!doc": "The width of a selected area to crop."
       },
       "minWidth": {
        "!type": "number",
        "!doc": "The minimum width of a selected area to crop."
       },
       "minHeight": {
        "!type": "number",
        "!doc": "The minimum height of a selected area to crop."
       },
       "movable": {
        "!type": "bool",
        "!doc": "Determine if the crop area should move or not."
       },
       "preserveRatio": {
        "!type": "bool",
        "!doc": "Determine if the crop area should preserve the\naspect ratio or not."
       },
       "region": {
        "!type": "+Object",
        "!doc": "Determine the region of a selected area to crop."
       },
       "resizable": {
        "!type": "bool",
        "!doc": "Determine if the crop area should resize or not."
       },
       "x": {
        "!type": "number",
        "!doc": "The X position of a selected area to crop."
       },
       "y": {
        "!type": "number",
        "!doc": "The Y position of a selected area to crop."
       },
       "syncImageUI": {
        "!type": "fn()",
        "!doc": "Sync the image on the UI."
       }
      },
      "ImageCropper.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "ImageCropper.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Image Cropper."
      },
      "ImageCropper.UI_ATTRS": {
       "!type": "+Array",
       "!doc": "Static property used to define the UI attributes."
      }
     }
    }
   },
   "aui_image_viewer": {
    "A": {
     "ImageViewer": {
      "!type": "fn(config: +Object) -> +_yui.aui_image_viewer.A.ImageViewer",
      "prototype": {
       "!proto": "A.Widget.prototype",
       "close": {
        "!type": "fn()",
        "!doc": "Close the ImageViewer."
       },
       "getLink": {
        "!type": "fn(currentIndex: number) -> +aui_node.Node",
        "!doc": "Get the Node reference to the <code>currentIndex</code> element from\nthe <a href=\"ImageViewer.html#config_links\">links</a>."
       },
       "getCurrentLink": {
        "!type": "fn() -> +aui_node.Node",
        "!doc": "Get the current loaded node link reference."
       },
       "loadImage": {
        "!type": "fn(src: string)",
        "!doc": "Load an image <code>src</code> on the ImageViewer."
       },
       "hasLink": {
        "!type": "fn(currentIndex: number) -> bool",
        "!doc": "Check if there is a node reference for the <code>currentIndex</code>."
       },
       "hasNext": {
        "!type": "fn() -> bool",
        "!doc": "Check if there is a next element to navigate."
       },
       "hasPrev": {
        "!type": "fn() -> bool",
        "!doc": "Check if there is a previous element to navigate."
       },
       "hideControls": {
        "!type": "fn()",
        "!doc": "Hide all UI controls (i.e., arrows, close icon etc)."
       },
       "next": {
        "!type": "fn()",
        "!doc": "Load the previous image."
       },
       "preloadAllImages": {
        "!type": "bool",
        "!doc": "Preload the neighbor image (i.e., the previous and next image based\non the current load one)."
       },
       "preloadImage": {
        "!type": "fn(currentIndex: number)",
        "!doc": "Preload an image based on its <code>index</code>."
       },
       "showLoading": {
        "!type": "fn()",
        "!doc": "Show the loading icon."
       },
       "show": {
        "!type": "fn()",
        "!doc": "Show the ImageViewer UI."
       },
       "anim": {
        "!type": "bool",
        "!doc": "If <code>true</code> the navigation is animated."
       },
       "bodyContent": {
        "!type": "string",
        "!doc": "The content of body."
       },
       "caption": {
        "!type": "string",
        "!doc": "The caption of the displayed image."
       },
       "captionFromTitle": {
        "!type": "bool",
        "!doc": "If <code>true</code> the <a\nhref=\"ImageViewer.html#config_caption\">caption</a> will be pulled\nfrom the title DOM attribute."
       },
       "centered": {
        "!type": "bool",
        "!doc": "If <code>true</code> the Overlay with the image will be positioned\non the center of the viewport."
       },
       "currentIndex": {
        "!type": "number",
        "!doc": "Index of the current image."
       },
       "image": {
        "!type": "+aui_node.Node",
        "!doc": "Image node element used to load the images."
       },
       "imageAnim": {
        "!type": "+Object",
        "!doc": "Configuration attributes passed to the <a href=\"Anim.html\">Anim</a>\nclass."
       },
       "infoTemplate": {
        "!type": "string",
        "!doc": "String template used to display the information."
       },
       "links": {
        "!type": "string",
        "!doc": "Selector or NodeList containing the links where the ImageViewer\nextracts the information to generate the thumbnails."
       },
       "loading": {
        "!type": "bool",
        "!doc": "Whether the image is during a loading state."
       },
       "modal": {
        "!type": "bool",
        "!doc": "Displays the modal the viewport. Set to <code>false</code> to\ndisable."
       },
       "showClose": {
        "!type": "bool",
        "!doc": "Show close icon control."
       },
       "showControls": {
        "!type": "bool",
        "!doc": "Show the controls."
       },
       "tabIndex": {
        "!type": "number",
        "!doc": "Specify the tab order of elements."
       },
       "totalLinks": {
        "!type": "bool",
        "!doc": "Helper attribute to get the <code>size</code> of the <a\nhref=\"ImageViewer.html#config_links\">links</a> NodeList."
       },
       "visible": {
        "!type": "bool",
        "!doc": "Determine if the ImageViewer should be visible or not."
       },
       "zIndex": {
        "!type": "number",
        "!doc": "Specify the stack order of elements."
       },
       "controlLeftEl": {
        "!type": "+aui_node.Node",
        "!doc": "The element to be used as left control."
       },
       "controlRightEl": {
        "!type": "+aui_node.Node",
        "!doc": "The element to be used as right control."
       },
       "captionEl": {
        "!type": "+aui_node.Node",
        "!doc": "The element to be used as caption."
       },
       "closeEl": {
        "!type": "+aui_node.Node",
        "!doc": "The element to be used as close."
       },
       "infoEl": {
        "!type": "+aui_node.Node",
        "!doc": "The element to be used as info."
       },
       "loader": {
        "!type": "+aui_node.Node",
        "!doc": "HTML element to house the <code>img</code> which is being loaded."
       },
       "loadingEl": {
        "!type": "+aui_node.Node",
        "!doc": "The element to be used as loading."
       },
       "maxHeight": {
        "!type": "number",
        "!doc": "The maximum height of the element"
       },
       "maxWidth": {
        "!type": "number",
        "!doc": "The maximum width of the element"
       }
      },
      "ImageViewer.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "ImageViewer.CSS_PREFIX": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the CSS prefix."
      },
      "ImageViewer.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the ImageViewer."
      }
     },
     "ImageGallery": {
      "!type": "fn(config: +Object) -> +_yui.aui_image_viewer.A.ImageGallery",
      "prototype": {
       "!proto": "_yui.aui_image_viewer.A.ImageViewer.prototype",
       "autoPlay": {
        "!type": "bool",
        "!doc": "If <code>true</code> the slide show will be played when the\nImageGallery is displayed."
       },
       "delay": {
        "!type": "number",
        "!doc": "Delay in milliseconds to change to the next image."
       },
       "pagination": {
        "!type": "+Object",
        "!doc": "<a href=\"Pagination.html\">Pagination</a> configuration Object. The\n<code>Pagination</code> handles the thumbnails control."
       },
       "paginationEl": {
        "!type": "+aui_node.Node",
        "!doc": "Element which contains the <a href=\"Pagination.html\">Pagination</a>\nwith the thumbnails."
       },
       "paginationInstance": {
        "!type": "+Pagination",
        "!doc": "Stores the <a href=\"Pagination.html\">Pagination</a> instance."
       },
       "paused": {
        "!type": "bool",
        "!doc": "If <code>true</code> the slide show is paused."
       },
       "pausedLabel": {
        "!type": "string",
        "!doc": "Label to display when the slide show is paused."
       },
       "playing": {
        "!type": "bool",
        "!doc": "If <code>true</code> the slide show is playing."
       },
       "playingLabel": {
        "!type": "string",
        "!doc": "Label to display when the slide show is playing."
       },
       "repeat": {
        "!type": "bool",
        "!doc": "Restart the navigation when reach the last element."
       },
       "showPlayer": {
        "!type": "bool",
        "!doc": "Show the player controls (i.e., pause and show buttons)."
       },
       "toolbar": {
        "!type": "+Toolbar constructor.",
        "!doc": "<a href=\"Toolbar.html\">Toolbar</a> with a play, and pause buttons."
       },
       "useOriginalImage": {
        "!type": "bool",
        "!doc": "If <code>true</code> will use the original image as thumbnails."
       },
       "hidePagination": {
        "!type": "fn()",
        "!doc": "Hide the <a href=\"Pagination.html\">Pagination</a>\nwith the thumbnails list."
       },
       "pause": {
        "!type": "fn()",
        "!doc": "Pause the slide show."
       },
       "play": {
        "!type": "fn()",
        "!doc": "Play the slide show."
       },
       "show": {
        "!type": "fn()",
        "!doc": "<p>Show the ImageGallery.</p>\n\n<p><strong>NOTE:</strong>Overloads the <a\nhref=\"ImageViewer.html\">ImageViewer</a> show method to not loadImage, the\nchangeRequest now is responsible to do that if we invoke the superclass\nshow method its loading the image, and the changeRequest loads again,\navoiding double request.</p>"
       },
       "showPagination": {
        "!type": "fn()",
        "!doc": "Show the <a href=\"Pagination.html\">Pagination</a>\nwith the thumbnails list."
       }
      },
      "ImageGallery.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "ImageGallery.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the ImageGallery."
      },
      "ImageGallery.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     }
    }
   },
   "aui_media_viewer_plugin": {
    "A": {
     "MediaViewerPlugin": {
      "!type": "fn(config: +Object) -> +_yui.aui_media_viewer_plugin.A.MediaViewerPlugin",
      "prototype": {
       "!proto": "A.Plugin.Base.prototype",
       "providers": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "close": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "loadMedia": {
        "!type": "fn(linkHref: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "preloadImage": {
        "!type": "fn(index: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "MediaViewerPlugin.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "MediaViewerPlugin.NS": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the namespace."
      },
      "MediaViewerPlugin.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the MediaViewerPlugin."
      },
      "MediaViewerPlugin.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     }
    }
   },
   "aui_io": {
    "A": {
     "IORequest": {
      "!type": "fn(config: +Object) -> +_yui.aui_io.A.IORequest",
      "prototype": {
       "!proto": "A.Plugin.Base.prototype",
       "autoLoad": {
        "!type": "bool",
        "!doc": "If <code>true</code> invoke the\n<a href=\"IORequest.html#method_start\">start</a> method\nautomatically, initializing the IO transaction."
       },
       "cache": {
        "!type": "bool",
        "!doc": "If <code>false</code> the current timestamp will be appended to the\nurl, avoiding the url to be cached."
       },
       "dataType": {
        "!type": "string",
        "!doc": "The type of the request (i.e., could be xml, json, javascript, text)."
       },
       "responseData": {
        "!type": "string",
        "!doc": "This is a normalized attribute for the response data. Its useful\nto retrieve the correct type for the\n<a href=\"IORequest.html#config_dataType\">dataType</a> (i.e., in json\nrequests the <code>responseData</code>) is a JSONObject."
       },
       "uri": {
        "!type": "string",
        "!doc": "URI to be requested using AJAX."
       },
       "active": {
        "!type": "bool",
        "!doc": "Whether the transaction is active or not."
       },
       "cfg": {
        "!type": "string",
        "!doc": "Object containing all the\n<a href=\"io.html#configattributes\">IO Configuration Attributes</a>.\nThis Object is passed to the <code>A.io</code> internally."
       },
       "transaction": {
        "!type": "+Object",
        "!doc": "Stores the IO Object of the current transaction."
       },
       "arguments": {
        "!type": "+Object",
        "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
       },
       "context": {
        "!type": "+Object",
        "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
       },
       "data": {
        "!type": "+Object",
        "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
       },
       "form": {
        "!type": "+Object",
        "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
       },
       "headers": {
        "!type": "+Object",
        "!doc": "Set the correct ACCEPT header based on the dataType."
       },
       "method": {
        "!type": "string",
        "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
       },
       "selector": {
        "!type": "string",
        "!doc": "A selector to be used to query against the response of the\nrequest. Only works if the response is XML or HTML."
       },
       "sync": {
        "!type": "bool",
        "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
       },
       "timeout": {
        "!type": "number",
        "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
       },
       "xdr": {
        "!type": "+Object",
        "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
       },
       "getFormattedData": {
        "!type": "fn() -> string",
        "!doc": "Applies the <code>YUI.AUI.defaults.io.dataFormatter</code> if\ndefined and return the formatted data."
       },
       "start": {
        "!type": "fn()",
        "!doc": "Starts the IO transaction. Used to refresh the content also."
       },
       "stop": {
        "!type": "fn()",
        "!doc": "Stops the IO transaction."
       }
      },
      "IORequest.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "IORequest.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the IORequest."
      },
      "IORequest.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "io": {
      "!type": "fn()",
      "prototype": {
       "A.io.request": {
        "!type": "fn(uri: string, config: +Object) -> +aui_io.IORequest",
        "!doc": "Static method to invoke the <a href=\"IORequest.html\">IORequest</a>. Likewise <a href=\"io.html#method_io\">io</a>."
       }
      }
     },
     "Plugin": {
      "IO": {
       "!type": "fn(config: +Object) -> +_yui.aui_io.A.Plugin.IO",
       "prototype": {
        "!proto": "_yui.aui_io.IORequest.prototype",
        "node": {
         "!type": "+aui_node.Node",
         "!doc": "Plug IO in any object we want, the setContent will use the node to\nset the content."
        },
        "failureMessage": {
         "!type": "string",
         "!doc": "Message to be set on the content when the transaction fails."
        },
        "loadingMask": {
         "!type": "+Object",
         "!doc": "Options passed to the <a href=\"LoadingMask.html\">LoadingMask</a>."
        },
        "parseContent": {
         "!type": "bool",
         "!doc": "If true the <a href=\"ParseContent.html\">ParseContent</a> plugin\nwill be plugged to the <a href=\"A.Plugin.IO.html#config_node\">node</a>."
        },
        "showLoading": {
         "!type": "fn()",
         "!doc": "Invoke the <a href=\"OverlayMask.html#method_show\">OverlayMask show</a> method."
        },
        "section": {
         "!type": "string",
         "!doc": "Section where the content will be set in case you are plugging it\non a instace of <a href=\"WidgetStdMod.html\">WidgetStdMod</a>."
        },
        "type": {
         "!type": "string",
         "!doc": "Type of the <code>instance</code> we are pluggin the A.Plugin.IO.\nCould be a Node, or a Widget."
        },
        "where": {
         "!type": "string",
         "!doc": "Where to insert the content, AFTER, BEFORE or REPLACE. If youre plugging a Node, there is a fourth option called OUTER that will not only replace the entire node itself. This is different from REPLACE, in that REPLACE will replace the *contents* of the node, OUTER will replace the entire Node itself."
        },
        "hideLoading": {
         "!type": "fn()",
         "!doc": "Invoke the <a href=\"OverlayMask.html#method_hide\">OverlayMask hide</a> method."
        },
        "setContent": {
         "!type": "fn()",
         "!doc": "Set the content of the <a href=\"A.Plugin.IO.html#config_node\">node</a>."
        },
        "start": {
         "!type": "fn()",
         "!doc": "Overload to the <a href=\"IORequest.html#method_start\">IORequest\nstart</a> method. Check if the <code>host</code> is already rendered,\notherwise wait to after render phase and to show the LoadingMask."
        }
       },
       "A.Plugin.IO.NAME": {
        "!type": "string",
        "!doc": "Static property provides a string to identify the class."
       },
       "A.Plugin.IO.NS": {
        "!type": "string",
        "!doc": "Static property provides a string to identify the namespace."
       },
       "A.Plugin.IO.ATTRS": {
        "!type": "+Object",
        "!doc": "Static property used to define the default attribute\nconfiguration for the A.Plugin.IO."
       }
      }
     }
    },
    "IORequest": {
     "!type": "fn(config: +Object) -> +_yui.aui_io.IORequest",
     "prototype": {
      "!proto": "Plugin.Base.prototype",
      "autoLoad": {
       "!type": "bool",
       "!doc": "If <code>true</code> invoke the\n<a href=\"IORequest.html#method_start\">start</a> method automatically,\ninitializing the IO transaction."
      },
      "cache": {
       "!type": "bool",
       "!doc": "If <code>false</code> the current timestamp will be appended to the\nurl, avoiding the url to be cached."
      },
      "dataType": {
       "!type": "string",
       "!doc": "The type of the request (i.e., could be xml, json, javascript, text)."
      },
      "responseData": {
       "!type": "string",
       "!doc": "This is a normalized attribute for the response data. Its useful\nto retrieve the correct type for the\n<a href=\"IORequest.html#config_dataType\">dataType</a> (i.e., in json\nrequests the <code>responseData</code>) is a JSONObject."
      },
      "uri": {
       "!type": "string",
       "!doc": "URI to be requested using AJAX."
      },
      "active": {
       "!type": "bool",
       "!doc": "Whether the transaction is active or not."
      },
      "cfg": {
       "!type": "string",
       "!doc": "Object containing all the\n<a href=\"io.html#configattributes\">IO Configuration Attributes</a>.\nThis Object is passed to the <code>A.io</code> internally."
      },
      "transaction": {
       "!type": "+Object",
       "!doc": "Stores the IO Object of the current transaction."
      },
      "arguments": {
       "!type": "+Object",
       "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
      },
      "context": {
       "!type": "+Object",
       "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
      },
      "data": {
       "!type": "+Object",
       "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
      },
      "form": {
       "!type": "+Object",
       "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
      },
      "headers": {
       "!type": "+Object",
       "!doc": "Set the correct ACCEPT header based on the dataType."
      },
      "method": {
       "!type": "string",
       "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
      },
      "selector": {
       "!type": "string",
       "!doc": "A selector to be used to query against the response of the\nrequest. Only works if the response is XML or HTML."
      },
      "sync": {
       "!type": "bool",
       "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
      },
      "timeout": {
       "!type": "number",
       "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
      },
      "xdr": {
       "!type": "+Object",
       "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
      },
      "start": {
       "!type": "fn()",
       "!doc": "Starts the IO transaction. Used to refresh the content also."
      },
      "stop": {
       "!type": "fn()",
       "!doc": "Stops the IO transaction."
      }
     },
     "IORequest.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "IORequest.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the IORequest."
     }
    }
   },
   "aui_live_search": {
    "LiveSearch": {
     "!type": "fn(config: +Object) -> +_yui.aui_live_search.LiveSearch",
     "prototype": {
      "!proto": "Base.prototype",
      "data": {
       "!type": "fn()",
       "!doc": "<p>Function to extract the content from the node for the indexing. The\ndefault uses the <code>node.html()</code>. In case if you need to\nindex the id of the nodes, here goes one example:</p>\n\nExample indexing the id of the node instead of the HTML:\n\n<pre><code>function(node) {\n return node.attr(id);\n}\n</code></pre>"
      },
      "delay": {
       "!type": "number",
       "!doc": "Number of milliseconds the filter will be applied to the node list\nafter the user stop typing."
      },
      "hide": {
       "!type": "fn()",
       "!doc": "Function to be executed to hide the node when the data of that node\nnot matches with the filter."
      },
      "index": {
       "!type": "+Array",
       "!doc": "Index for the nodes content."
      },
      "input": {
       "!type": "+aui_node.Node",
       "!doc": "The <code>value</code> of this input node is used to filter the\nresults."
      },
      "matchRegex": {
       "!type": "+RegExp",
       "!doc": "The input <code>value</code> need to matches with this RegExp to be\naccept as a filter (i.e., in order to accept only digits you\ncould use /\\d+/g)."
      },
      "nodes": {
       "!type": "+aui_node.Node",
       "!doc": "Nodes to be indexed for the filtering."
      },
      "searchValue": {
       "!type": "string",
       "!doc": "The text value to search for"
      },
      "show": {
       "!type": "fn()",
       "!doc": "Function to be executed to show the node when the data of that node\nmatches with the filter."
      },
      "filter": {
       "!type": "fn(query: string) -> +Array",
       "!doc": "Filter the <a href=\"LiveSearch.html#config_nodes\">nodes</a> based on\nthe input value."
      },
      "refreshIndex": {
       "!type": "fn()",
       "!doc": "Refreshes the <a href=\"LiveSearch.html#config_index\">index</a>."
      },
      "search": {
       "!type": "fn(value: string)",
       "!doc": "Searches for the user supplied value."
      }
     },
     "LiveSearch.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "LiveSearch.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the LiveSearch."
     }
    }
   },
   "aui_loading_mask": {
    "LoadingMask": {
     "!type": "fn(config: +Object) -> +_yui.aui_loading_mask.LoadingMask",
     "prototype": {
      "!proto": "Plugin.Base.prototype",
      "messageEl": {
       "!type": "string",
       "!doc": "Node element to display the message."
      },
      "strings": {
       "!type": "+Object",
       "!doc": "Strings used on the LoadingMask. See\n<a href=\"Widget.html#method_strings\">strings</a>."
      },
      "target": {
       "!type": "+aui_node.Node",
       "!doc": "Node where the mask will be positioned and re-dimensioned."
      },
      "centerMessage": {
       "!type": "fn()",
       "!doc": "Center the\n<a href=\"LoadingMask.html#config_messageEl\">messageEl</a> with the\n<a href=\"LoadingMask.html#config_target\">target</a> node."
      },
      "refreshMask": {
       "!type": "fn()",
       "!doc": "Invoke the\n<a href=\"LoadingMask.html#property_overlayMask\">overlayMask</a>\n<code>refreshMask</code> method."
      },
      "hide": {
       "!type": "fn()",
       "!doc": "Invoke the\n<a href=\"LoadingMask.html#property_overlayMask\">overlayMask</a>\n<code>hide</code> method."
      },
      "show": {
       "!type": "fn()",
       "!doc": "Invoke the\n<a href=\"LoadingMask.html#property_overlayMask\">overlayMask</a>\n<code>show</code> method."
      },
      "toggle": {
       "!type": "fn()",
       "!doc": "Invoke the\n<a href=\"LoadingMask.html#property_overlayMask\">overlayMask</a>\n<code>toggle</code> method."
      }
     },
     "LoadingMask.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "LoadingMask.NS": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the namespace."
     },
     "LoadingMask.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the LoadingMask."
     }
    }
   },
   "aui_modal": {
    "A": {
     "Modal": {
      "!type": "fn(config: +Object) -> +_yui.aui_modal.A.Modal",
      "prototype": {
       "!proto": "A.Widget.prototype",
       "bodyContent": {
        "!type": "string",
        "!doc": "Determine the content of Modals body section.\n\nTemporary fix for widget-stdmod bug when bodyContent initializes empty.\nthis._currFillNode is never updated if _uiSetFillHeight is not called."
       },
       "destroyOnHide": {
        "!type": "bool",
        "!doc": "Determine if Modal should be destroyed when hidden."
       },
       "draggable": {
        "!type": "+Object",
        "!doc": "Determine if Modal should be draggable or not."
       },
       "resizable": {
        "!type": "+Object",
        "!doc": "Determine if Modal should be resizable or not."
       },
       "toolbars": {
        "!type": "fn()",
        "!doc": "Determine the content of Modals header section."
       }
      },
      "Modal.CSS_PREFIX": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the CSS prefix."
      },
      "Modal.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Modal."
      },
      "Modal.TEMPLATES": {
       "!type": "+Object",
       "!doc": "Static property provides a set of reusable templates."
      }
     }
    }
   },
   "aui_node": {
    "A": {
     "Node": {
      "!type": "fn() -> +_yui.aui_node.A.Node",
      "prototype": {
       "ancestorsByClassName": {
        "!type": "fn(className: string, testSelf: bool) -> +NodeList",
        "!doc": "Return the current ancestors of the node element filtered by a className.\nThis is an optimized method for finding ancestors by a specific CSS class name.\n\nExample:\n\n<pre><code>\nA.one(#nodeId).ancestorsByClassName(aui-hide);\n</code></pre>"
       },
       "attr": {
        "!type": "fn(name: string, value: string) -> string",
        "!doc": "Get or Set the value of an attribute for the first element in the\nset of matched elements. If only the <code>name</code> is passed it\nworks as a getter.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.attr(title, Setting a new title attribute);\n// Alert the value of the title attribute: Setting a new title attribute\nalert( node.attr(title) );\n</code></pre>"
       },
       "clone": {
        "!type": "fn() -> +aui_node.Node",
        "!doc": "Normalizes the behavior of cloning a node, which by default should not clone\nthe events that are attached to it.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.clone().appendTo(body);\n</code></pre>"
       },
       "center": {
        "!type": "fn(val: +Array) -> !this",
        "!doc": "Centralize the current Node instance with the passed <code>val</code>\nArray, Node, String, or Region, if not specified, the body will be used.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\n// Center the <code>node</code> with the <code>#container</code>.\nnode.center(#container);\n</code></pre>"
       },
       "empty": {
        "!type": "fn() -> !this",
        "!doc": "This method removes not only child (and other descendant) elements,\nbut also any text within the set of matched elements. This is because,\naccording to the DOM specification, any string of text within an element\nis considered a child node of that element.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.empty();\n</code></pre>"
       },
       "getDOM": {
        "!type": "fn() -> +HTMLNode",
        "!doc": "Retrieves the DOM node bound to a Node instance. See\n<a href=\"Node.html#method_getDOMNode\">getDOMNode</a>."
       },
       "getBorderWidth": {
        "!type": "fn(sides: string) -> number",
        "!doc": "Return the combined width of the border for the specified sides."
       }
      }
     },
     "NodeList": {
      "!type": "fn() -> +_yui.aui_node.A.NodeList",
      "prototype": {
       "all": {
        "!type": "fn()",
        "!doc": "See <a href=\"Node.html#method_all\">Node all</a>."
       },
       "first": {
        "!type": "fn() -> +aui_node.Node",
        "!doc": "Return the first element in the node list collection."
       },
       "getDOM": {
        "!type": "fn()",
        "!doc": "See <a href=\"Node.html#method_getDOM\">Node getDOM</a>."
       },
       "last": {
        "!type": "fn() -> +aui_node.Node",
        "!doc": "Return the last element in the node list collection."
       },
       "one": {
        "!type": "fn()",
        "!doc": "See <a href=\"Node.html#method_one\">Node one</a>."
       },
       "getBody": {
        "!type": "fn()",
        "!doc": "Get the body node. Shortcut to <code>A.one(body)</code>."
       },
       "getDoc": {
        "!type": "fn()",
        "!doc": "Get the document node. Shortcut to <code>A.one(document)</code>."
       },
       "getWin": {
        "!type": "fn()",
        "!doc": "Get the window node. Shortcut to <code>A.one(window)</code>."
       }
      }
     },
     "HTML5": {
      "!type": "fn()",
      "prototype": {
       "onAfterPrint": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "onBeforePrint": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "parseCSS": {
        "!type": "fn(cssText: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "restoreHTML": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "writeHTML": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "IECreateFix": {
        "!type": "fn(frag: +_yui.aui_node.Node, content: string) -> +aui_node.Node",
        "!doc": "Receive a <code>frag</code> and a HTML content. This method\nshivs the HTML5 nodes appended to a Node or fragment which is not\non the document yet."
       }
      }
     }
    },
    "Node": {
     "!type": "fn()",
     "prototype": {
      "getCenterXY": {
       "!type": "fn() -> +Array",
       "!doc": "Get the current center position of the node in page coordinates."
      },
      "getMargin": {
       "!type": "fn(sides: string) -> number",
       "!doc": "Return the combined size of the margin for the specified sides."
      },
      "getPadding": {
       "!type": "fn(sides: string) -> number",
       "!doc": "Return the combined width of the border for the specified sides."
      },
      "guid": {
       "!type": "fn() -> string",
       "!doc": "Set the id of the Node instance if the object does not have one. The\ngenerated id is based on a guid created by the\n<a href=\"YUI.html#method_stamp\">stamp</a> method."
      },
      "hover": {
       "!type": "fn(overFn: string, outFn: string) -> +aui_node.Node",
       "!doc": "Create a hover interaction."
      },
      "html": {
       "!type": "fn(value: string)",
       "!doc": "Get or Set the HTML contents of the node. If the <code>value</code>\nis passed its set the content of the element, otherwise it works as a\ngetter for the current content.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.html(Setting new HTML);\n// Alert the value of the current content\nalert( node.html() );\n</code></pre>"
      },
      "outerHTML": {
       "!type": "fn() -> string",
       "!doc": "Get the outerHTML of a node, which islike innerHTML, except that it\nactually contains the HTML of the node itself."
      },
      "placeAfter": {
       "!type": "fn(newNode: +_yui.aui_node.Node) -> !this",
       "!doc": "Inserts a <code>newNode</code> after the node instance (i.e., as the next\nsibling). If the reference node has no parent, then does nothing.\n\nExample:\n\n<pre><code>var titleNode = A.one(#titleNode);\nvar descriptionNode = A.one(#descriptionNode);\n// the description is usually shown after the title\ntitleNode.placeAfter(descriptionNode);\n</code></pre>"
      },
      "placeBefore": {
       "!type": "fn(newNode: +_yui.aui_node.Node) -> !this",
       "!doc": "Inserts a <code>newNode</code> before the node instance (i.e., as the previous\nsibling). If the reference node has no parent, then does nothing.\n\nExample:\n\n<pre><code>var descriptionNode = A.one(#descriptionNode);\nvar titleNode = A.one(#titleNode);\n// the title is usually shown before the description\ndescriptionNode.placeBefore(titleNode);\n</code></pre>"
      },
      "prependTo": {
       "!type": "fn(selector: +_yui.aui_node.Node) -> !this",
       "!doc": "Inserts the node instance to the begining of the <code>selector</code>\nnode (i.e., insert before the <code>firstChild</code> of the\n<code>selector</code>).\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.prependTo(body);\n</code></pre>"
      },
      "radioClass": {
       "!type": "fn(cssClass: string) -> !this",
       "!doc": "Add one or more CSS classes to an element and remove the class(es)\nfrom the siblings of the element."
      },
      "resetId": {
       "!type": "fn(prefix: string) -> !this",
       "!doc": "Generate an unique identifier and reset the id attribute of the node\ninstance using the new value. Invokes the\n<a href=\"Node.html#method_guid\">guid</a>."
      },
      "selectText": {
       "!type": "fn(start: number, end: number)",
       "!doc": "Select a substring of text inside of the input element."
      },
      "selectable": {
       "!type": "fn(noRecurse: ?) -> !this",
       "!doc": "Enable text selection for this element (normalized across browsers)."
      },
      "swallowEvent": {
       "!type": "fn(eventName: string, preventDefault: bool) -> !this",
       "!doc": "Stop the specified event(s) from bubbling and optionally prevents the\ndefault action.\n\nExample:\n\n<pre><code>var anchor = A.one(a#anchorId);\nanchor.swallowEvent(click);\n</code></pre>"
      },
      "text": {
       "!type": "fn(text: string)",
       "!doc": "Get or Set the combined text contents of the node instance,\nincluding its descendants. If the <code>text</code>\nis passed its set the content of the element, otherwise it works as a\ngetter for the current content.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.text(Setting new text content);\n// Alert the value of the current content\nalert( node.text() );\n</code></pre>"
      },
      "toggle": {
       "!type": "fn(on: bool, callback: fn()) -> !this",
       "!doc": "Displays or hide the node instance.\n\nNOTE: This method assume that your node were hidden\nbecause of the aui-hide css class were being used. This wont\nmanipulate the inline <code>style.display</code> property."
      },
      "unselectable": {
       "!type": "fn(noRecurse: ?) -> !this",
       "!doc": "Disable text selection for this element (normalized across browsers)."
      },
      "val": {
       "!type": "fn(value: string)",
       "!doc": "Get or Set the value attribute of the node instance. If the\n<code>value</code> is passed its set the value of the element,\notherwise it works as a getter for the current value.\n\nExample:\n\n<pre><code>var input = A.one(#inputId);\ninput.val(Setting new input value);\n// Alert the value of the input\nalert( input.val() );\n</code></pre>"
      },
      "width": {
       "!type": "fn() -> number",
       "!doc": "Return the width of the content, not including\nthe padding, border or margin. If a width is passed,\nthe nodes overall width is set to that size.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.width(); //return content width\nnode.width(100); // sets box width\n</code></pre>"
      },
      "height": {
       "!type": "fn() -> number",
       "!doc": "Return the height of the content, not including\nthe padding, border or margin. If a height is passed,\nthe nodes overall height is set to that size.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.height(); //return content height\nnode.height(100); // sets box height\n</code></pre>"
      },
      "innerWidth": {
       "!type": "fn() -> number",
       "!doc": "Return the size of the box from inside of the border,\nwhich is the offsetWidth plus the padding on the left and right.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.innerWidth();\n</code></pre>"
      },
      "innerHeight": {
       "!type": "fn() -> number",
       "!doc": "Return the size of the box from inside of the border,\nwhich is offsetHeight plus the padding on the top and bottom.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.innerHeight();\n</code></pre>"
      },
      "outerWidth": {
       "!type": "fn() -> number",
       "!doc": "Return the outer width of the box including the border,\nif true is passed as the first argument, the margin is included.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.outerWidth();\nnode.outerWidth(true); // includes margin\n</code></pre>"
      },
      "outerHeight": {
       "!type": "fn() -> number",
       "!doc": "Return the outer height of the box including the border,\nif true is passed as the first argument, the margin is included.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.outerHeight();\nnode.outerHeight(true); // includes margin\n</code></pre>"
      }
     }
    }
   },
   "aui_overlay": {
    "OverlayContext": {
     "!type": "fn(config: +Object) -> +_yui.aui_overlay.OverlayContext",
     "prototype": {
      "!proto": "_yui.aui_overlay.OverlayBase.prototype",
      "align": {
       "!type": "+Object",
       "!doc": "Inherited from <a href=\"Overlay.html#config_align\">Overlay</a>."
      },
      "cancellableHide": {
       "!type": "bool",
       "!doc": "Cancel auto hide delay if the user interact with the Overlay\n(focus, click, mouseover)"
      },
      "currentNode": {
       "!type": "+aui_node.Node",
       "!doc": "OverlayContext allow multiple elements to be the\n<a href=\"OverlayContext.html#config_trigger\">trigger</a>, the\ncurrentNode stores the current active one."
      },
      "hideOn": {
       "!type": "string",
       "!doc": "The event which is responsible to hide the OverlayContext."
      },
      "hideOnDocumentClick": {
       "!type": "bool",
       "!doc": "If true the instance is registered on the\n<a href=\"OverlayContextManager.html\">OverlayContextManager</a> static\nclass and will be hide when the user click on document."
      },
      "hideDelay": {
       "!type": "number",
       "!doc": "Number of milliseconds after the hide method is invoked to hide the\nOverlayContext."
      },
      "showOn": {
       "!type": "string",
       "!doc": "The event which is responsible to show the OverlayContext."
      },
      "showDelay": {
       "!type": "number",
       "!doc": "Number of milliseconds after the show method is invoked to show the\nOverlayContext."
      },
      "trigger": {
       "!type": "+aui_node.Node",
       "!doc": "Node, NodeList or Selector which will be used as trigger elements\nto show or hide the OverlayContext."
      },
      "useARIA": {
       "!type": "bool",
       "!doc": "True if Overlay should use ARIA plugin"
      },
      "visible": {
       "!type": "bool",
       "!doc": "If true the OverlayContext is visible by default after the render phase.\nInherited from <a href=\"Overlay.html\">Overlay</a>."
      },
      "hide": {
       "!type": "fn()",
       "!doc": "Shows the OverlayContext."
      },
      "toggle": {
       "!type": "fn(event: +EventFacade)",
       "!doc": "Toggles visibility of the OverlayContext."
      },
      "clearIntervals": {
       "!type": "fn()",
       "!doc": "Clear the intervals to show or hide the OverlayContext. See\n<a href=\"OverlayContext.html#config_hideDelay\">hideDelay</a> and\n<a href=\"OverlayContext.html#config_showDelay\">showDelay</a>."
      },
      "refreshAlign": {
       "!type": "fn()",
       "!doc": "Refreshes the alignment of the OverlayContext with the\n<a href=\"OverlayContext.html#config_currentNode\">currentNode</a>. See\nalso <a href=\"OverlayContext.html#config_align\">align</a>."
      },
      "updateCurrentNode": {
       "!type": "fn(event: +EventFacade)",
       "!doc": "Update the\n<a href=\"OverlayContext.html#config_currentNode\">currentNode</a> with the\n<a href=\"OverlayContext.html#config_align\">align</a> node or the\nevent.currentTarget and in last case with the first item of the\n<a href=\"OverlayContext.html#config_trigger\">trigger</a>."
      }
     },
     "OverlayContext.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "OverlayContext.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the OverlayContext."
     }
    },
    "OverlayContextPanel": {
     "!type": "fn(config: +Object) -> +_yui.aui_overlay.OverlayContextPanel",
     "prototype": {
      "!proto": "_yui.aui_overlay.OverlayContext.prototype",
      "anim": {
       "!type": "+Object",
       "!doc": "Enable or disable the animation for hide and show. Used as the\n<a href=\"Anim.html\">Anim</a> configuration attributes.\n\n<pre><code>anim: {\n show: {\n \tduration: .9\n },\n hide: {\n \tduration: .2\n }\n}\n</code></pre>"
      },
      "arrow": {
       "!type": "string",
       "!doc": "Position where the arrow will be placed. See\n<a href=\"OverlayContextPanel.html#config_showArrow\">showArrow</a>. If its\nnot set, it will get the value set on the\n<a href=\"OverlayContext.html#config_align\">align</a> point. Here is a\nlist of valid arrows bc, bl, br, cc, lb, lc, lt, rb,\nrc, rl."
      },
      "hideOn": {
       "!type": "string",
       "!doc": "See <a href=\"OverlayContext.html#config_hideOn\">hideOn</a>."
      },
      "showOn": {
       "!type": "string",
       "!doc": "See <a href=\"OverlayContext.html#config_showOn\">showOn</a>."
      },
      "showArrow": {
       "!type": "bool",
       "!doc": "If true the OverlayContextPanel will show an arrow positioned on the\n<a href=\"OverlayContextPanel.html#config_arrow\">arrow</a> point."
      },
      "stack": {
       "!type": "bool",
       "!doc": "Gives stacking habilities to the OverlayContextPanel."
      },
      "align": {
       "!type": "fn(node: +_yui.aui_node.Node, points: [+Array])",
       "!doc": "Aligns the OverlayContextPanel to the provided node (or viewport) using the\nprovided points. Inherited from\n<a href=\"Overlay.html#method_align\">Overlay</a>."
      },
      "fixPointerColor": {
       "!type": "fn()",
       "!doc": "OverlayContextPanel uses a imageless arrow, which involves some CSS technics.\nThis method is meant to fix the color of the borders of the arrow."
      },
      "getAlignPoint": {
       "!type": "fn() -> string",
       "!doc": "Normalize the align point value. The align point cc is not a valid\nposition for the arrow and then its normalized to the bc point."
      },
      "hide": {
       "!type": "fn(event: +EventFacade)",
       "!doc": "Hides the OverlayContextPanel."
      }
     },
     "OverlayContextPanel.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "OverlayContextPanel.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the OverlayContextPanel."
     }
    },
    "OverlayManager": {
     "!type": "fn(config: +Object) -> +_yui.aui_overlay.OverlayManager",
     "prototype": {
      "!proto": "Base.prototype",
      "zIndexBase": {
       "!type": "number",
       "!doc": "The zIndex base to be used on the stacking for all overlays\nregistered on the OverlayManager."
      },
      "bringToTop": {
       "!type": "fn(overlay: +Overlay)",
       "!doc": "Set the passed overlay zIndex to the highest value."
      },
      "register": {
       "!type": "fn(overlay: +Overlay) -> +Array",
       "!doc": "Register the passed <a href=\"Overlay.html\">Overlay</a> to this\nOverlayManager."
      },
      "remove": {
       "!type": "fn(overlay: +Overlay) -> +Null",
       "!doc": "Remove the passed <a href=\"Overlay.html\">Overlay</a> from this\nOverlayManager."
      },
      "each": {
       "!type": "fn(fn: fn()) -> +Null",
       "!doc": "Loop through all registered <a href=\"Overlay.html\">Overlay</a> and\nexecute a callback."
      },
      "showAll": {
       "!type": "fn()",
       "!doc": "Invoke the <a href=\"Overlay.html#method_show\">show</a> method from\nall registered Overlays."
      },
      "hideAll": {
       "!type": "fn()",
       "!doc": "Invoke the <a href=\"Overlay.html#method_hide\">hide</a> method from\nall registered Overlays."
      },
      "sortByZIndexDesc": {
       "!type": "fn(a: +Overlay, b: +Overlay) -> number",
       "!doc": "zIndex comparator. Used on Array.sort."
      }
     },
     "OverlayManager.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "OverlayManager.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the OverlayManager."
     }
    },
    "OverlayMask": {
     "!type": "fn(config: +Object) -> +_yui.aui_overlay.OverlayMask",
     "prototype": {
      "!proto": "_yui.aui_overlay.OverlayBase.prototype",
      "alignPoints": {
       "!type": "+Array",
       "!doc": "Points to align the <a href=\"Overlay.html\">Overlay</a> used as\nmask."
      },
      "background": {
       "!type": "string",
       "!doc": "Background color of the mask."
      },
      "target": {
       "!type": "+aui_node.Node",
       "!doc": "Node where the mask will be positioned and re-dimensioned. The\ndefault is the document, which means that if not specified the mask\ntakes the full screen."
      },
      "opacity": {
       "!type": "number",
       "!doc": "CSS opacity of the mask."
      },
      "shim": {
       "!type": "bool",
       "!doc": "Use shim option."
      },
      "visible": {
       "!type": "bool",
       "!doc": "If true the Overlay is visible by default after the render phase.\nInherited from <a href=\"Overlay.html\">Overlay</a>."
      },
      "zIndex": {
       "!type": "number",
       "!doc": "zIndex of the OverlayMask."
      },
      "getTargetSize": {
       "!type": "fn() -> +Object",
       "!doc": "Get the size of the\n<a href=\"OverlayMask.html#config_target\">target</a>. Used to dimension\nthe mask node."
      },
      "refreshMask": {
       "!type": "fn()",
       "!doc": "Repaint the OverlayMask UI, respecting the\n<a href=\"OverlayMask.html#config_target\">target</a> size and the\n<a href=\"OverlayMask.html#config_alignPoints\">alignPoints</a>."
      }
     },
     "OverlayMask.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "OverlayMask.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the OverlayMask."
     }
    }
   },
   "aui_pagination": {
    "A": {
     "Pagination": {
      "!type": "fn(config: +Object) -> +_yui.aui_pagination.A.Pagination",
      "prototype": {
       "!proto": "_yui.aui_component.A.Component.prototype",
       "circular": {
        "!type": "bool",
        "!doc": "When enabled this property allows the navigation to go back to\nthe beggining when it reaches the last page, the opposite behavior\nis also true. Incremental page navigation could happen clicking the\ncontrol arrows or invoking <code>.next()</code> and\n<code>.prev()</code> methods."
       },
       "formatter": {
        "!type": "fn()",
        "!doc": "A formatter function to format each pagination item."
       },
       "items": {
        "!type": "+NodeList",
        "!doc": "Holds the page items as a NodeList. The list could be queried\nfrom the DOM trough Widget HTML_PARSER or generated if\n<a href=\"Pagination.html#config_total\">total</a> is specified."
       },
       "offset": {
        "!type": "number",
        "!doc": "Initial page offset."
       },
       "page": {
        "!type": "number",
        "!doc": "Page to display on initial paint."
       },
       "total": {
        "!type": "number",
        "!doc": "Total number of page links available. If set, the new\n<a href=\"Pagination.html#config_items\">items</a> node list will\nbe rendered."
       },
       "strings": {
        "!type": "+Object",
        "!doc": "Text used on Pagination."
       },
       "getItem": {
        "!type": "fn(i: +_yui.aui_node.Node) -> +aui_node.Node",
        "!doc": "Retrieve the item node from the passesed item index parameter.\nIf passed item is a node instead of the index returns itself."
       },
       "getOffsetPageNumber": {
        "!type": "fn() -> number",
        "!doc": "Retrieve page number inclusing offset e.g., if offset\nis 100 and active page is 5, this method returns 105."
       },
       "getOffsetTotalPages": {
        "!type": "fn() -> number",
        "!doc": "Retrieve total number of pages including offset e.g., if offset\nis 100 and total 10, this method returns 110."
       },
       "getTotalItems": {
        "!type": "fn() -> number",
        "!doc": "Retrieve total number of dom items representing the links,\nincluding the arrow control items. Do not include the offset."
       },
       "next": {
        "!type": "fn()",
        "!doc": "Navigate to the next page."
       },
       "prev": {
        "!type": "fn()",
        "!doc": "Navigate to the previous page."
       },
       "setState": {
        "!type": "fn(state: ?)",
        "!doc": "Set the new pagination state. The state is a payload object\ncontaining the page number, e.g. <code>{page:1}</code>."
       }
      },
      "Pagination.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "Pagination.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Pagination."
      },
      "Pagination.HTML_PARSER": {
       "!type": "+Object",
       "!doc": "Object hash, defining how attribute values are to be parsed from\nmarkup contained in the widgets content box."
      },
      "Pagination.BIND_UI_ATTRS": {
       "!type": "+Array",
       "!doc": "Static property used to define the attributes\nfor the bindUI lifecycle phase."
      },
      "Pagination.UI_ATTRS": {
       "!type": "+Array",
       "!doc": "Static property used to define the UI attributes."
      }
     }
    }
   },
   "aui_palette": {
    "A": {
     "Palette": {
      "!type": "fn(config: +Object) -> +_yui.aui_palette.A.Palette",
      "prototype": {
       "!proto": "A.Widget.prototype",
       "getItem": {
        "!type": "fn(row: number, col: number) -> +Object",
        "!doc": "Returns an item in the Palette by row and column."
       },
       "getItemByIndex": {
        "!type": "fn(index: number) -> +Object",
        "!doc": "Returns an item in the Palette by its index."
       },
       "getItemByValue": {
        "!type": "fn(value: +Object) -> +Object",
        "!doc": "Returns an item in the Palette by its value."
       },
       "select": {
        "!type": "fn(valueOrIndex: number)",
        "!doc": "Selects an item in the Palette."
       },
       "toggleSelection": {
        "!type": "bool",
        "!doc": "If true, on user interaction if the user clicks on an already selected element, it will be unselected."
       },
       "unselect": {
        "!type": "fn(valueOrIndex: number)",
        "!doc": "Unselects an item. The item must be specified by its value or index."
       },
       "columns": {
        "!type": "number",
        "!doc": "Specifies how many columns should contain the Palette.\nIf the value is a positive number, the Palette will generate as many columns as specified in this property and it will fit\nthe provided <code>items</code> in these columns."
       },
       "containerNode": {
        "!type": "+aui_node.Node",
        "!doc": "Container node of the palette. If found, palette widget will not\ngenerate content."
       },
       "formatter": {
        "!type": "fn()",
        "!doc": "Provides a function, which will be used to format the content during Palette creation."
       },
       "items": {
        "!type": "+Array",
        "!doc": "An array of Palette items. These items will be rendered in the Palette according to the specified <code>columns</code>."
       },
       "selected": {
        "!type": "number",
        "!doc": "Provides the index of currently selected item."
       }
      },
      "Palette.HTML_PARSER": {
       "!type": "+Object",
       "!doc": "Object hash, defining how attribute values have to be parsed from\nmarkup contained in the Palettes content box."
      },
      "Palette.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Palette."
      }
     }
    }
   },
   "aui_parse_content": {
    "A": {
     "ParseContent": {
      "!type": "fn(config: +Object) -> +_yui.aui_parse_content.A.ParseContent",
      "prototype": {
       "!proto": "Plugin.Base.prototype",
       "queue": {
        "!type": "?",
        "!doc": "A queue of elements to be parsed."
       },
       "preserveScriptNodes": {
        "!type": "?",
        "!doc": "When true, script nodes will not be removed from original content,\ninstead the script type attribute will be set to `text/plain`."
       },
       "globalEval": {
        "!type": "fn(data: string)",
        "!doc": "Global eval the <data>data</data> passed."
       },
       "parseContent": {
        "!type": "fn(content: string) -> string",
        "!doc": "Extract the `script` tags from the string content and\nevaluate the chunks."
       }
      },
      "NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "NS": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the namespace."
      },
      "ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the ParseContent."
      },
      "EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     }
    }
   },
   "aui_popover": {
    "Popover": {
     "!type": "fn(config: +Object) -> +_yui.aui_popover.Popover",
     "prototype": {
      "!proto": "Widget.prototype",
      "triggerToggleEvent": {
       "!type": "string",
       "!doc": "DOM event to hide the tooltip."
      }
     },
     "Popover.CSS_PREFIX": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the CSS prefix."
     },
     "A.Popover.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Popover."
     },
     "Popover.TEMPLATES": {
      "!type": "+Object",
      "!doc": "Static property provides a set of reusable templates."
     }
    }
   },
   "aui_progressbar": {
    "A": {
     "ProgressBar": {
      "!type": "fn(config: +Object) -> +_yui.aui_progressbar.A.ProgressBar",
      "prototype": {
       "!proto": "_yui.aui_component.A.Component.prototype",
       "useARIA": {
        "!type": "bool",
        "!doc": "Boolean indicating if use of the WAI-ARIA Roles and States\nshould be enabled."
       },
       "height": {
        "!type": "number",
        "!doc": "Display height of the progressbar."
       },
       "label": {
        "!type": "string",
        "!doc": "Display label of the progressbar. If not specified try to query\nusing HTML_PARSER an element inside boundingBox which matches\n<code>aui-progressbar-text</code> and get its innerHTML to be\nused as label."
       },
       "max": {
        "!type": "number",
        "!doc": "Represents the top value for the bar. The bar will be fully\nextended when reaching this value. Values higher than this will\nbe ignored."
       },
       "min": {
        "!type": "number",
        "!doc": "Represents the lowest value for the bar. The bar will be\ntotally collapsed when reaching this value. Values lower than\nthis will be ignored."
       },
       "orientation": {
        "!type": "string",
        "!doc": "Display orientation of the progressbar (i.e. vertical or\nhorizontal)."
       },
       "ratio": {
        "!type": "number",
        "!doc": "Calculate the ratio based on <code>max</code> and\n<code>min</code> values."
       },
       "step": {
        "!type": "number",
        "!doc": "Calculate the progressbar step based on <code>ratio</code>\nvalue."
       },
       "textNode": {
        "!type": "string",
        "!doc": "DOM Node to display the text of the progressbar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-progressbar-text</code>."
       },
       "value": {
        "!type": "number",
        "!doc": "The value for the bar. Valid values are in between the minValue\nand maxValue attributes."
       }
      },
      "ProgressBar.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "ProgressBar.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the ProgressBar."
      },
      "ProgressBar.HTML_PARSER": {
       "!type": "+Object",
       "!doc": "Object hash, defining how attribute values are to be parsed from\nmarkup contained in the widgets bounding box."
      },
      "ProgressBar.UI_ATTRS": {
       "!type": "+Array",
       "!doc": "Static property used to define the UI attributes."
      }
     }
    }
   },
   "aui_promise": {
    "A": {
     "CancellablePromise": {
      "!type": "fn(fn: fn(), opt_errorCallback: fn()) -> +_yui.aui_promise.A.CancellablePromise",
      "prototype": {
       "!proto": "{Promise}.prototype",
       "thenAways": {
        "!type": "fn(callback: fn()) -> +Promise",
        "!doc": "Adds a callback that will be invoked whether the Promise is fulfilled or\nrejected. The callback receives no argument, and a new child Promise is\ncreated. This is useful for ensuring that cleanup takes place after certain\nasynchronous operations. Callbacks added with `thenAlways` will be executed\nin the same order with other calls to `then`, `thenAlways`."
       },
       "thenCatch": {
        "!type": "fn(callback: fn()) -> +Promise",
        "!doc": "Adds a callback that will be invoked only if the Promise is rejected. This is\nequivalent to `then(null, onRejected)`."
       },
       "cancel": {
        "!type": "fn(opt_message: string)",
        "!doc": "Cancels the Promise by rejecting it with a `A.CancellablePromise.Error`. No\naction is performed if the Promise is already resolved."
       },
       "undefined": {
        "!type": "fn()"
       }
      }
     }
    }
   },
   "aui_rating": {
    "A": {
     "Rating": {
      "!type": "fn(config: +Object) -> +_yui.aui_rating.A.Rating",
      "prototype": {
       "!proto": "_yui.aui_component.A.Component.prototype",
       "disabled": {
        "!type": "bool",
        "!doc": "Whether the Rating is disabled or not.\nDisabled Ratings dont allow hover or click,\njust display selected stars."
       },
       "canReset": {
        "!type": "bool",
        "!doc": "If <code>true</code> could be reseted\n(i.e., have no values selected)."
       },
       "cssClasses": {
        "!type": "+Object",
        "!doc": "CSS classes applied on Rating."
       },
       "defaultSelected": {
        "!type": "number",
        "!doc": "The number of selected starts when the Rating render."
       },
       "elements": {
        "!type": "+NodeList",
        "!doc": "<a href=\"NodeList.html\">NodeList</a> of elements used on the\nRating. Each element is one Star."
       },
       "hiddenInput": {
        "!type": "+aui_node.Node",
        "!doc": "Hidden input to handle the selected value. This hidden input\nreplace the radio elements and keep the same name."
       },
       "inputName": {
        "!type": "string",
        "!doc": "Name of the <a\nhref=\"Rating.html#config_hiddenInput\">hiddenInput</a> element. If\nnot specified will use the name of the replaced radio."
       },
       "label": {
        "!type": "string",
        "!doc": "Label to be displayed with the Rating elements."
       },
       "labelNode": {
        "!type": "string",
        "!doc": "DOM Node to display the text of the StarRating. If not\nspecified try to query using HTML_PARSER an element inside\nboundingBox which matches <code>aui-rating-label-element</code>."
       },
       "selectedIndex": {
        "!type": "number",
        "!doc": "Stores the index of the selected element."
       },
       "showTitle": {
        "!type": "bool",
        "!doc": "If <code>true</code> will extract the value of the\n<code>title</code> attribute on the radio, and use it on the\ngenerated Rating elements."
       },
       "size": {
        "!type": "number",
        "!doc": "Number of Rating elements to be displayed."
       },
       "title": {
        "!type": "string",
        "!doc": "If set, will be used when there is no DOM <code>title</code> on the\nradio elements."
       },
       "value": {
        "!type": "string",
        "!doc": "Stores the value of the current selected Rating element."
       },
       "clearSelection": {
        "!type": "fn()",
        "!doc": "Clear all selected starts to the default state."
       },
       "select": {
        "!type": "fn(index: number)",
        "!doc": "Select the <code>index</code> Rating element."
       },
       "fillTo": {
        "!type": "fn(index: number, className: string)",
        "!doc": "Add the <code>className</code> on the the <code>index</code> element\nand all the previous Rating elements."
       },
       "indexOf": {
        "!type": "fn(elem: +_yui.aui_node.Node) -> number",
        "!doc": "Find the index of the <code>elem</code>."
       }
      },
      "Rating.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "Rating.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Rating."
      },
      "StarRating.HTML_PARSER": {
       "!type": "+Object",
       "!doc": "Object hash, defining how attribute values are to be parsed from\nmarkup contained in the widgets content box."
      }
     },
     "ThumbRating": {
      "!type": "fn(config: +Object) -> +_yui.aui_rating.A.ThumbRating",
      "prototype": {
       "!proto": "_yui.aui_rating.A.Rating.prototype",
       "cssClasses": {
        "!type": "+Object",
        "!doc": "CSS classes applied on ThumbRating."
       },
       "size": {
        "!type": "number",
        "!doc": "The size on ThumbRating is always 2 (i.e., thumb up and thumb down)."
       },
       "fillTo": {
        "!type": "fn(index: number, className: string)",
        "!doc": "Add the <code>className</code> on the the <code>index</code> element\nand all the previous Rating elements."
       }
      },
      "ThumbRating.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "ThumbRating.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the ThumbRating."
      },
      "ThumbRating.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     }
    }
   },
   "aui_resize": {
    "Resize": {
     "!type": "fn(config: +Object) -> +_yui.aui_resize.Resize",
     "prototype": {
      "!proto": "Base.prototype",
      "autoHide": {
       "!type": "bool",
       "!doc": "False to ensure that the resize handles are always visible, true to\ndisplay them only when the user mouses over the resizable borders."
      },
      "handles": {
       "!type": "+Array",
       "!doc": "The handles to use (any combination of): t, b, r, l, bl,\nbr, tl, tr. Can use a shortcut of All."
      },
      "node": {
       "!type": "+aui_node.Node",
       "!doc": "The selector or element to resize. Required."
      },
      "proxy": {
       "!type": "bool",
       "!doc": "Resize a proxy element instead of the real element."
      },
      "proxyEl": {
       "!type": "string",
       "!doc": "The Resize proxy element."
      },
      "resizing": {
       "!type": "bool",
       "!doc": "True when the element is being Resized."
      },
      "wrap": {
       "!type": "bool",
       "!doc": "True to wrap an element with a div if needed (required for textareas\nand images, defaults to false) in favor of the handles config option.\nThe wrapper element type (default div) could be over-riden passing the\n<code>wrapper</code> attribute."
      },
      "wrapTypes": {
       "!type": "+Regex",
       "!doc": "Elements that requires a wrapper by default. Normally are elements\nwhich cannot have children elements."
      },
      "wrapper": {
       "!type": "string",
       "!doc": "Element to wrap the <code>wrapTypes</code>. This element will house\nthe handles elements."
      },
      "changeHeightHandles": {
       "!type": "bool",
       "!doc": "Whether the handle being dragged can change the height."
      },
      "changeLeftHandles": {
       "!type": "bool",
       "!doc": "Whether the handle being dragged can change the left."
      },
      "changeTopHandles": {
       "!type": "bool",
       "!doc": "Whether the handle being dragged can change the top."
      },
      "changeWidthHandles": {
       "!type": "bool",
       "!doc": "Whether the handle being dragged can change the width."
      },
      "delegate": {
       "!type": "+Object",
       "!doc": "Store DD.Delegate reference for the respective Resize instance."
      },
      "eachHandle": {
       "!type": "fn(fn: fn())",
       "!doc": "<p>Loop through each handle which is being used and executes a callback.</p>\n<p>Example:</p>\n<pre><code>instance.eachHandle(\n     function(handleName, index) { ... }\n );</code></pre>"
      }
     },
     "Resize.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "Resize.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Resize."
     }
    }
   },
   "aui_scheduler": {
    "A": {
     "SchedulerCalendar": {
      "!type": "fn(config: +Object) -> +_yui.aui_scheduler.A.SchedulerCalendar",
      "prototype": {
       "!proto": "A.ModelList.prototype",
       "constrain": {
        "!type": "string",
        "!doc": "Will attempt to constrain the resize node to the boundaries. Arguments:<br>\nview: Contrain to Viewport<br>\n#selector_string: Constrain to this node<br>\n{Region Object}: An Object Literal containing a valid region (top, right, bottom, left) of page positions"
       },
       "minHeight": {
        "!type": "number",
        "!doc": "The minimum height of the element"
       },
       "minWidth": {
        "!type": "number",
        "!doc": "The minimum width of the element"
       },
       "maxHeight": {
        "!type": "number",
        "!doc": "The maximum height of the element"
       },
       "maxWidth": {
        "!type": "number",
        "!doc": "The maximum width of the element"
       },
       "preserveRatio": {
        "!type": "bool",
        "!doc": "Maintain the elements ratio when resizing."
       },
       "tickX": {
        "!type": "number",
        "!doc": "The number of x ticks to span the resize to."
       },
       "tickY": {
        "!type": "number",
        "!doc": "The number of y ticks to span the resize to."
       },
       "constrainBorderInfo": {
        "!type": "+Object",
        "!doc": "Cache the border widths of the contrain node if constrain\noption is being used."
       },
       "color": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "disabled": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "name": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "palette": {
        "!type": "+Array",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "scheduler": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "visible": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "SchedulerCalendar.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the SchedulerCalendar."
      }
     },
     "SchedulerEvent": {
      "!type": "fn(config: +Object) -> +_yui.aui_scheduler.A.SchedulerEvent",
      "prototype": {
       "!proto": "A.Model.prototype",
       "allDay": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "borderColor": {
        "!type": "string",
        "!doc": "Determines the CSS border color of a calendar event."
       },
       "borderStyle": {
        "!type": "string",
        "!doc": "Determines the CSS border style of a calendar event."
       },
       "borderWidth": {
        "!type": "string",
        "!doc": "Determines the CSS border width of a calendar event."
       },
       "content": {
        "!type": "?",
        "!doc": "Contains the content of Scheduler events body section."
       },
       "color": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "colorBrightnessFactor": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "colorSaturationFactor": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "titleDateFormat": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "endDate": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "disabled": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "meeting": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "node": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "reminder": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "repeated": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "scheduler": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "startDate": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "visible": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "addPaddingNode": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "clone": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "copyDates": {
        "!type": "fn(evt: ?, options: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "copyPropagateAttrValues": {
        "!type": "fn(evt: ?, dontCopyMap: ?, options: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getDaysDuration": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getHoursDuration": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getMinutesDuration": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getSecondsDuration": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "sameEndDate": {
        "!type": "fn(evt: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "sameStartDate": {
        "!type": "fn(evt: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "isAfter": {
        "!type": "fn(evt: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "isBefore": {
        "!type": "fn(evt: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "intersects": {
        "!type": "fn(evt: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "intersectHours": {
        "!type": "fn(evt: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "isDayBoundaryEvent": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "isDayOverlapEvent": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getClearEndDate": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getClearStartDate": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "move": {
        "!type": "fn(date: ?, options: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "setContent": {
        "!type": "fn(content: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "setTitle": {
        "!type": "fn(content: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "syncNodeContentUI": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "syncNodeTitleUI": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "split": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "SchedulerEvent.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "SchedulerEvent.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the SchedulerEvent."
      },
      "SchedulerEvent.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      },
      "SchedulerEvent.PROPAGATE_ATTRS": {
       "!type": "+Array",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      }
     },
     "SchedulerView": {
      "!type": "fn(config: +Object) -> +_yui.aui_scheduler.A.SchedulerView",
      "prototype": {
       "!proto": "_yui.aui_component.A.Component.prototype",
       "bodyContent": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "filterFn": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "height": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "isoTime": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "name": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "navigationDateFormatter": {
        "!type": "fn()",
        "!doc": "The function to format the navigation header date."
       },
       "nextDate": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "prevDate": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "scheduler": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "scrollable": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "triggerNode": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "visible": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getAdjustedViewDate": {
        "!type": "fn(val: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "flushViewCache": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getNextDate": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getPrevDate": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getToday": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "limitDate": {
        "!type": "fn(date: ?, maxDate: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "plotEvents": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "syncStdContent": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "syncEventUI": {
        "!type": "fn(evt: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "SchedulerView.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "SchedulerView.AUGMENTS": {
       "!type": "+Array",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "SchedulerView.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the SchedulerView."
      },
      "SchedulerView.BIND_UI_ATTRS": {
       "!type": "+Array",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      }
     },
     "SchedulerEvents": {
      "!type": "fn(config: +Object) -> +_yui.aui_scheduler.A.SchedulerEvents",
      "prototype": {
       "!proto": "A.ModelList.prototype",
       "comparator": {
        "!type": "fn(model: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "SchedulerEvents.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the SchedulerEvents."
      }
     },
     "SchedulerEventSupport": {
      "!type": "fn(config: +Object) -> +_yui.aui_scheduler.A.SchedulerEventSupport",
      "SchedulerEventSupport.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the SchedulerEventSupport."
      },
      "prototype": {
       "addEvents": {
        "!type": "fn(models: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "eachEvent": {
        "!type": "fn(fn: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "flushEvents": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getEventByClientId": {
        "!type": "fn(clientId: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getEvents": {
        "!type": "fn(filterFn: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getEventsByDay": {
        "!type": "fn(date: ?, includeOverlap: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getIntersectEvents": {
        "!type": "fn(date: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "removeEvents": {
        "!type": "fn(models: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "resetEvents": {
        "!type": "fn(models: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      }
     },
     "SchedulerBase": {
      "!type": "fn(config: +Object) -> +_yui.aui_scheduler.A.SchedulerBase",
      "prototype": {
       "!proto": "_yui.aui_component.A.Component.prototype",
       "activeView": {
        "!type": "+SchedulerView",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "date": {
        "!type": "+aui_datatype_date_parse.Date",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "eventRecorder": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "strings": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "navigationDateFormatter": {
        "!type": "fn()",
        "!doc": "The function to format the navigation header date."
       },
       "views": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "viewDate": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "firstDayOfWeek": {
        "!type": "number",
        "!doc": "First day of the week: Sunday is 0, Monday is 1."
       },
       "todayDate": {
        "!type": "+aui_datatype_date_parse.Date",
        "!doc": "Today date representation. This option allows the developer to\nspecify the date he wants to be used as the today date."
       },
       "getViewByName": {
        "!type": "fn(name: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getStrings": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getString": {
        "!type": "fn(key: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "renderView": {
        "!type": "fn(view: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "plotViewEvents": {
        "!type": "fn(view: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "syncEventsUI": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "renderButtonGroup": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "syncStdContent": {
        "!type": "fn()",
        "!doc": "Sync SchedulerBase StdContent."
       }
      },
      "SchedulerBase.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "SchedulerBase.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the SchedulerBase."
      },
      "SchedulerBase.HTML_PARSER": {
       "!type": "+Object",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "SchedulerBase.UI_ATTRS": {
       "!type": "+Array",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "SchedulerBase.AUGMENTS": {
       "!type": "+Array",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      }
     },
     "SchedulerEventRecorder": {
      "!type": "fn(config: +Object) -> +_yui.aui_scheduler.A.SchedulerEventRecorder",
      "prototype": {
       "!proto": "_yui.aui_scheduler.A.SchedulerEvent.prototype",
       "allDay": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "content": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "duration": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "dateFormat": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "event": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "eventClass": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "popover": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "strings": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "template": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getFormattedDate": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getTemplateData": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getUpdatedSchedulerEvent": {
        "!type": "fn(optAttrMap: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "hidePopover": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "populateForm": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "serializeForm": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "SchedulerEventRecorder.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "SchedulerEventRecorder.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the SchedulerEventRecorder."
      },
      "SchedulerEventRecorder.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "SchedulerAgendaView": {
      "!type": "fn(config: +Object) -> +_yui.aui_scheduler.A.SchedulerAgendaView",
      "prototype": {
       "!proto": "_yui.aui_scheduler.A.SchedulerView.prototype",
       "bodyContent": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "eventsDateFormatter": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "headerDayDateFormatter": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "headerExtraDateFormatter": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "infoDayDateFormatter": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "infoLabelBigDateFormatter": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "infoLabelSmallDateFormatter": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "name": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "strings": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getNextDate": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getPrevDate": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "plotEvents": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "SchedulerAgendaView.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "SchedulerAgendaView.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the SchedulerAgendaView."
      },
      "SchedulerAgendaView.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "SchedulerDayView": {
      "!type": "fn(config: +Object) -> +_yui.aui_scheduler.A.SchedulerDayView",
      "prototype": {
       "!proto": "_yui.aui_scheduler.A.SchedulerView.prototype",
       "bodyContent": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "days": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "delegateConfig": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "eventWidth": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "filterFn": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "headerDateFormatter": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "headerView": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "headerViewConfig": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "hourHeight": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "name": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "navigationDateFormatter": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "strings": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "headerTableNode": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "headerViewLabelNode": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "resizerNode": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "tableNode": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "colDaysNode": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "colHeaderDaysNode": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "markercellsNode": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "timesNode": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "syncStdContent": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "calculateEventHeight": {
        "!type": "fn(duration: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "calculateTop": {
        "!type": "fn(date: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getNextDate": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getPrevDate": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getColumnByDate": {
        "!type": "fn(date: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getColumnShimByDate": {
        "!type": "fn(date: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getDateByColumn": {
        "!type": "fn(colNumber: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getDateDaysOffset": {
        "!type": "fn(date: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getYCoordTime": {
        "!type": "fn(top: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "plotEvent": {
        "!type": "fn(evt: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "plotEvents": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "syncColumnsUI": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "syncDaysHeaderUI": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "syncEventsIntersectionUI": {
        "!type": "fn(columnEvents: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "syncEventHeightUI": {
        "!type": "fn(evt: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "syncEventTopUI": {
        "!type": "fn(evt: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "syncHeaderViewUI": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "calculateYDelta": {
        "!type": "fn(startXY: ?, xy: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "findEventIntersections": {
        "!type": "fn(evt: ?, events: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getXYDelta": {
        "!type": "fn(event: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getTickY": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "roundToNearestHour": {
        "!type": "fn(date: ?, time: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "SchedulerDayView.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "SchedulerDayView.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the SchedulerDayView."
      },
      "SchedulerDayView.HTML_PARSER": {
       "!type": "+typeName",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "SchedulerDayView.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "SchedulerMonthView": {
      "!type": "fn(config: +Object) -> +_yui.aui_scheduler.A.SchedulerMonthView",
      "prototype": {
       "!proto": "_yui.aui_scheduler.A.SchedulerTableView.prototype",
       "displayDaysInterval": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "name": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "navigationDateFormatter": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getAdjustedViewDate": {
        "!type": "fn(val: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getNextDate": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getPrevDate": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "plotEvents": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "SchedulerMonthView.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "SchedulerMonthView.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the SchedulerMonthView."
      },
      "SchedulerMonthView.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "SchedulerTableViewDD": {
      "!type": "fn(config: +Object) -> +_yui.aui_scheduler.A.SchedulerTableViewDD",
      "SchedulerTableViewDD.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the SchedulerTableViewDD."
      },
      "prototype": {
       "delegateConfig": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "viewDDBindUI": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "viewDDRenderUI": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "viewDDSyncUI": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "removeLasso": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "removeProxy": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "renderLasso": {
        "!type": "fn(startPos: ?, endPos: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      }
     },
     "SchedulerTableView": {
      "!type": "fn(config: +Object) -> +_yui.aui_scheduler.A.SchedulerTableView",
      "prototype": {
       "!proto": "_yui.aui_scheduler.A.SchedulerView.prototype",
       "bodyContent": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "displayDaysInterval": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "displayRows": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "fixedHeight": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "name": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "headerDateFormatter": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "navigationDateFormatter": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "scrollable": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "strings": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "headerTableNode": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "colHeaderDaysNode": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "rowsContainerNode": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "tableGridNode": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "buildEventsRow": {
        "!type": "fn(rowStartDate: ?, rowEndDate: ?, rowDisplayIndex: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "buildEventsTable": {
        "!type": "fn(rowStartDate: ?, rowEndDate: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "buildEventsTitleRow": {
        "!type": "fn(tableNode: ?, rowStartDate: ?, rowEndDate: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "buildGridRowNode": {
        "!type": "fn(rowIndex: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "flushViewCache": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getIntersectEvents": {
        "!type": "fn(date: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getNextDate": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getPrevDate": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "hideEventsOverlay": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "loopDates": {
        "!type": "fn(startDate: ?, endDate: ?, fn: ?, incrementBy: ?, factor: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "plotEvents": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "syncDaysHeaderUI": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "syncGridUI": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "syncStdContent": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "SchedulerTableView.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "SchedulerTableView.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the SchedulerTableView."
      },
      "SchedulerTableView.HTML_PARSER": {
       "!type": "+Object",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "SchedulerTableView.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "SchedulerWeekView": {
      "!type": "fn(config: +Object) -> +_yui.aui_scheduler.A.SchedulerWeekView",
      "prototype": {
       "!proto": "_yui.aui_scheduler.A.SchedulerDayView.prototype",
       "bodyContent": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "days": {
        "!type": "number",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "headerViewConfig": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "name": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "navigationDateFormatter": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getAdjustedViewDate": {
        "!type": "fn(val: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getNextDate": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getPrevDate": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getToday": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "SchedulerWeekView.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "SchedulerWeekView.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the SchedulerWeekView."
      },
      "SchedulerWeekView.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     }
    }
   },
   "aui_search": {
    "A": {
     "TernarySearchNode": {
      "!type": "fn(config: +Object) -> +_yui.aui_search.A.TernarySearchNode",
      "prototype": {
       "!proto": "A.Base.prototype",
       "character": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "child": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "largerNode": {
        "!type": "+TernarySearchNode",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "smallerNode": {
        "!type": "+TernarySearchNode",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "word": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "isEndOfWord": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "TernarySearchNode.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "TernarySearchNode.NS": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the namespace."
      },
      "TernarySearchNode.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the TernarySearchNode."
      },
      "TernarySearchNode.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "TernarySearchTree": {
      "!type": "fn(config: +Object) -> +_yui.aui_search.A.TernarySearchTree",
      "prototype": {
       "!proto": "A.Base.prototype",
       "add": {
        "!type": "fn(word: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "contains": {
        "!type": "fn(word: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "empty": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "patternMatch": {
        "!type": "fn(pattern: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "prefixSearch": {
        "!type": "fn(prefix: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "TernarySearchTree.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "TernarySearchTree.NS": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the namespace."
      },
      "TernarySearchTree.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     }
    }
   },
   "aui_selector": {
    "A": {
     "Selector": {
      "!type": "fn() -> +_yui.aui_selector.A.Selector",
      "prototype": {
       "button": {
        "!type": "fn(node: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "checkbox": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "checked": {
        "!type": "fn(node: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "disabled": {
        "!type": "fn(node: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "empty": {
        "!type": "fn(node: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "enabled": {
        "!type": "fn(node: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "file": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "header": {
        "!type": "fn(node: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "hidden": {
        "!type": "fn(node: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "image": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "input": {
        "!type": "fn(node: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "parent": {
        "!type": "fn(node: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "password": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "radio": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "reset": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "selected": {
        "!type": "fn(node: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "submit": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "text": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "visible": {
        "!type": "fn(node: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      }
     }
    }
   },
   "aui_sortable_layout": {
    "A": {
     "SortableLayout": {
      "!type": "fn(config: +Object) -> +_yui.aui_sortable_layout.A.SortableLayout",
      "prototype": {
       "!proto": "A.Base.prototype",
       "delegateConfig": {
        "!type": "+Object",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "proxyNode": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "dragNodes": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "dropContainer": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "dropNodes": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "groups": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "lazyStart": {
        "!type": "bool",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "placeholder": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "proxy": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "addDropNode": {
        "!type": "fn(node: ?, config: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "addDropTarget": {
        "!type": "fn(drop: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "alignPlaceholder": {
        "!type": "fn(region: ?, isTarget: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "calculateDirections": {
        "!type": "fn(drag: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "calculateQuadrant": {
        "!type": "fn(drag: ?, drop: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getPlaceholderXY": {
        "!type": "fn(region: ?, isTarget: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "removeDropTarget": {
        "!type": "fn(drop: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "SortableLayout.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "SortableLayout.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the SortableLayout."
      },
      "SortableLayout.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     }
    }
   },
   "aui_sortable_list": {
    "A": {
     "SortableList": {
      "!type": "fn(config: +Object) -> +_yui.aui_sortable_list.A.SortableList",
      "prototype": {
       "!proto": "A.Base.prototype",
       "dd": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "dropCondition": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "dropContainer": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "dropOn": {
        "!type": "string",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "helper": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "nodes": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "placeholder": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "proxy": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "sortCondition": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "add": {
        "!type": "fn(node: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "addAll": {
        "!type": "fn(nodes: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      },
      "SortableList.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "SortableList.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the SortableList."
      },
      "SortableList.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     }
    }
   },
   "aui_tabview": {
    "A": {
     "Tab": {
      "!type": "fn(config: +Object) -> +_yui.aui_tabview.A.Tab",
      "prototype": {
       "addScreenRoutes": {
        "!type": "fn(or: +Object) -> !this",
        "!doc": "Adds one or more screens to the application."
       },
       "addSurfaces": {
        "!type": "fn(or: +Surface) -> !this",
        "!doc": "Adds one or more surfaces to the application."
       },
       "dispatch": {
        "!type": "fn() -> +Promise",
        "!doc": "Dispatches to the first route handler that matches the current path, if\nany."
       },
       "matchesPath": {
        "!type": "fn(value: string) -> bool",
        "!doc": "Matches if the `ScreenRouter` can handle the tested `value` path, if not\nreturns null."
       },
       "navigate": {
        "!type": "fn(path: string) -> +Promise",
        "!doc": "Prefetches the specified path if there is a route handler that matches."
       },
       "_defStartNavigateFn": {
        "!type": "fn(event: +EventFacade)",
        "!doc": "Starts navigation to a path."
       },
       "_doNavigate": {
        "!type": "fn(path: string, opt_replaceHistory: bool) -> +Promise",
        "!doc": "Starts navigation to a path."
       },
       "_preventNavigateFn": {
        "!type": "fn(event: +EventFacade)",
        "!doc": "Fires when navigation is prevented from `startNavigate` event."
       },
       "defaultTitle": {
        "!type": "string",
        "!doc": "Defines the default document title in case the screen doesnt have\nany `title`."
       },
       "linkSelector": {
        "!type": "string",
        "!doc": "CSS selector string used to filter link click events so that only the\nlinks which match it will have the enhanced navigation behavior."
       },
       "basePath": {
        "!type": "string",
        "!doc": "Absolute base path from which all routes should be evaluated."
       },
       "addContent": {
        "!type": "fn(screenId: string, opt_content: string) -> +aui_node.Node",
        "!doc": "Adds screen content to a surface. If content hasnt been passed, see if\nan element exists in the DOM that matches the id. By convention, the\nelement should already be nested in the right element and should have an\nid that is a concatentation of the surface id + - + the screen id."
       },
       "createChild": {
        "!type": "fn(screenId: string) -> +aui_node.Node",
        "!doc": "Creates child node of the surface."
       },
       "getChild": {
        "!type": "fn(screenId: string) -> +aui_node.Node",
        "!doc": "Gets child node of the surface."
       },
       "getEl": {
        "!type": "fn(opt_id: string) -> +aui_node.Node",
        "!doc": "Retrieves the surface element from DOM, and sets it to the el property of\nthe current instance."
       },
       "show": {
        "!type": "fn(screenId: string) -> +Promise",
        "!doc": "Shows screen content from a surface."
       },
       "remove": {
        "!type": "fn(screenId: string)",
        "!doc": "Removes screen content from a surface."
       },
       "toString": {
        "!type": "fn() -> string"
       },
       "transition": {
        "!type": "fn()",
        "!doc": "If false, the screen will be disposed after being deactivated.\nIf true, the surface content will be left in the DOM with\ndisplay:none."
       },
       "_makeId": {
        "!type": "fn(screenId: string) -> string",
        "!doc": "Make the id for the element that holds content for a screen."
       },
       "id": {
        "!type": "string",
        "!doc": "The screen id."
       },
       "abortRequest": {
        "!type": "fn()",
        "!doc": "Aborts any outstanding request."
       },
       "getSurfaceContent": {
        "!type": "fn(surfaceId: string, opt_contents: string) -> string",
        "!doc": "Returns the content for the given surface, or null if the surface isnt\nused by this screen. This will be called when a screen is initially\nconstructed or, if a screen is non-cacheable, when navigated."
       },
       "load": {
        "!type": "fn() -> +CancellablePromise",
        "!doc": "Loads the content for all surfaces in one AJAX request from the server."
       },
       "_setScreenTitleFromFragment": {
        "!type": "fn(frag: +_yui.aui_node.Node)",
        "!doc": "Retrieves the title from the provided content and sets it to title\nattribute of the class."
       },
       "cacheable": {
        "!type": "bool",
        "!doc": "If false, the screen will be disposed after being deactivated.\nIf true, the surface content will be left in the DOM with\ndisplay:none."
       },
       "method": {
        "!type": "string",
        "!doc": "Ajax request method."
       },
       "titleSelector": {
        "!type": "string",
        "!doc": "CSS selector used to extract a page title from the content of a page\nloaded via Pjax.\n\nBy default this is set to extract the title from the `<title>`\nelement, but you could customize it to extract the title from an\n`<h1>`, or from any other element, if thats more appropriate for the\ncontent youre loading."
       },
       "timeout": {
        "!type": "number",
        "!doc": "Time in milliseconds after which an Ajax request should time out."
       },
       "urlParams": {
        "!type": "string",
        "!doc": "Could be String or Object with multiple keys and values. If String,\nthe defaule value will be \"1\". If an Object with multiple keys and\nvalues, they will be concatenated to the URL."
       },
       "path": {
        "!type": "string",
        "!doc": "Defines the path which will trigger the rendering of the screen,\nspecified in `screen` attribute. Could be `String`, `RegExp` or\n`Function`. In case of `Function`, it will receive the URL as\nparameter and it should return true if this URL could be handled by\nthe screen."
       },
       "screen": {
        "!type": "+A.Screen",
        "!doc": "Defines the screen which will be rendered once a URL in the\napplication matches the path, specified in `path` attribute. Could be\n`A.Screen` or its extension, like `A.HTMLScreen`."
       },
       "activate": {
        "!type": "fn()",
        "!doc": "Fires when the screen is active. Allows a screen to perform any setup\nthat requires its DOM to be visible. Lifecycle."
       },
       "beforeDeactivate": {
        "!type": "fn() -> bool",
        "!doc": "Gives the Screen a chance to cancel the navigation and stop itself from\nbeing deactivated. Can be used, for example, if the screen has unsaved\nstate. Lifecycle.\n\nClean-up should not be preformed here, since the navigation may still be\ncancelled. Do clean-up in deactivate."
       },
       "flip": {
        "!type": "fn() -> +Promise",
        "!doc": "Allows a screen to perform any setup immediately before the DOM is\nmade visible. Lifecycle."
       },
       "deactivate": {
        "!type": "fn()",
        "!doc": "Allows a screen to do any cleanup necessary after it has been\ndeactivated, for example cancelling outstanding XHRs or stopping\ntimers. Lifecycle."
       },
       "destructor": {
        "!type": "fn()",
        "!doc": "Destroys a cacheable screen."
       },
       "getSurfacesContent": {
        "!type": "fn(path: string) -> string",
        "!doc": "Returns all contents for the surfaces. This will pass an `opt_contents`\nto `getSurfaceContent` with all information you need to fulfill the\nsurfaces. Lifecycle."
       },
       "_setId": {
        "!type": "fn(val: string) -> string",
        "!doc": "Sets the id attribute."
       },
       "_valueId": {
        "!type": "fn() -> string",
        "!doc": "Value of the id attribute."
       },
       "title": {
        "!type": "string",
        "!doc": "The document.title to set when the screen is active."
       },
       "addCache": {
        "!type": "fn(surfaceId: string, content: string)",
        "!doc": "Adds content to the cache."
       },
       "clearCache": {
        "!type": "fn()",
        "!doc": "Clears the cache."
       },
       "disabled": {
        "!type": "?"
       }
      },
      "TRANSITION": {
       "!type": "?",
       "!doc": "Transition function that returns a promise, the navigation will be paused\nuntil all surfaces promise have completed. This is useful for\nanimations."
      },
      "Tab.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "Tab.CSS_PREFIX": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the CSS prefix."
      },
      "Tab.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "TabView": {
      "!type": "fn(config: +Object) -> +_yui.aui_tabview.A.TabView",
      "prototype": {
       "!proto": "TabView.prototype",
       "stacked": {
        "!type": "bool",
        "!doc": "Determine the orientation of tabs.\nCan be stacked (vertical) or not (horizontal)."
       },
       "type": {
        "!type": "string",
        "!doc": "Determine the type of tabs."
       },
       "disableTab": {
        "!type": "fn(i: ?)",
        "!doc": "Disable tab based on its index."
       },
       "enableTab": {
        "!type": "fn(i: ?)",
        "!doc": "Enable tab based on its index."
       },
       "getActiveTab": {
        "!type": "fn()",
        "!doc": "Get the tabs."
       }
      },
      "TabView.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "TabView.CSS_PREFIX": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the CSS prefix."
      },
      "TabView.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the TabView."
      },
      "TabView.UI_ATTRS": {
       "!type": "+Array",
       "!doc": "Static property used to define the UI attributes."
      },
      "TabView.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     }
    }
   },
   "aui_textboxlist": {
    "Textboxlist": {
     "!type": "fn(config: +Object) -> +_yui.aui_textboxlist.Textboxlist",
     "prototype": {
      "!proto": "_yui.aui_autocomplete.AutoComplete.prototype",
      "undefined": {
       "!type": "fn()",
       "!doc": "Mapping UTF-8 groups of characters. Based on Steven Levithans XRegExp\nproject (http://xregexp.com)"
      },
      "match": {
       "!type": "fn(str: string, group: string, flags: string)",
       "!doc": "Tests a string against an Unicode pattern. Returns the first match."
      },
      "test": {
       "!type": "fn(str: string, group: string, flags: string)",
       "!doc": "Tests a string against an Unicode pattern. Returns true or false."
      }
     },
     "Textboxlist.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "Textboxlist.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Textboxlist."
     }
    }
   },
   "aui_timepicker": {
    "A": {
     "TimePickerBase": {
      "!type": "fn(config: +Object) -> +_yui.aui_timepicker.A.TimePickerBase",
      "TimePickerBase.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the TimePickerBase."
      },
      "prototype": {
       "autocomplete": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "dateSeparator": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "mask": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "popoverCssClass": {
        "!type": "?",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "values": {
        "!type": "+Array",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "clearSelection": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getAutoComplete": {
        "!type": "fn(node: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "selectDates": {
        "!type": "fn(dates: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "useInputNode": {
        "!type": "fn(node: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      }
     }
    }
   },
   "aui_toggler": {
    "A": {
     "Toggler": {
      "!type": "fn(config: +Object) -> +_yui.aui_toggler.A.Toggler",
      "prototype": {
       "!proto": "A.Base.prototype",
       "clearInterval": {
        "!type": "fn(id: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "clearTimeout": {
        "!type": "fn(id: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "intervalTime": {
        "!type": "fn(newInterval: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "isRepeatable": {
        "!type": "fn(task: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "setTimeout": {
        "!type": "fn(fn: ?, ms: ?, context: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "setInterval": {
        "!type": "fn(fn: ?, ms: ?, context: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "register": {
        "!type": "fn(repeats: ?, fn: ?, ms: ?, context: ?, args: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "run": {
        "!type": "fn(task: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "unregister": {
        "!type": "fn(repeats: ?, id: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "animated": {
        "!type": "bool",
        "!doc": "Determine if the Toggler transitions will animate."
       },
       "animating": {
        "!type": "bool",
        "!doc": "Determine if the Toggler transitions are being animated in that moment."
       },
       "bindDOMEvents": {
        "!type": "bool",
        "!doc": "Determine if the Toggler should bind DOM events or not."
       },
       "content": {
        "!type": "?",
        "!doc": "The content of a Toogler instance."
       },
       "expanded": {
        "!type": "bool",
        "!doc": "Determine if the content starts as toggled on/off on page load."
       },
       "header": {
        "!type": "?",
        "!doc": "The header of a Toogler instance."
       },
       "transition": {
        "!type": "+Object",
        "!doc": "Transition definitions such as duration and type of easing effect."
       },
       "headerEventHandler": {
        "!type": "fn(event: ?, instance: ?)",
        "!doc": "Handle header events."
       },
       "animate": {
        "!type": "fn(config: ?, fn: ?)",
        "!doc": "Expand Toggler with an animation."
       },
       "collapse": {
        "!type": "fn()",
        "!doc": "Hide Toggler content."
       },
       "expand": {
        "!type": "fn()",
        "!doc": "Show Toggler content."
       },
       "getContentHeight": {
        "!type": "fn() -> number",
        "!doc": "Return the height of content."
       },
       "toggle": {
        "!type": "fn(expand: ?)",
        "!doc": "Show or hide content."
       }
      },
      "Toggler.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "Toggler.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Toggler."
      },
      "Toggler.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "TogglerDelegate": {
      "!type": "fn(config: +Object) -> +_yui.aui_toggler.A.TogglerDelegate",
      "prototype": {
       "!proto": "A.Base.prototype",
       "animated": {
        "!type": "bool",
        "!doc": "Determine if the Toggler Delegate transitions will animate."
       },
       "closeAllOnExpand": {
        "!type": "bool",
        "!doc": "Determine if the Toggler Delegate switches\nwill be set to off when one switch is toggled on."
       },
       "container": {
        "!type": "?",
        "!doc": "The container of Toggler Delegate instance."
       },
       "content": {
        "!type": "string",
        "!doc": "The content of a Toogler Delegate instance."
       },
       "expanded": {
        "!type": "bool",
        "!doc": "Determine if the content starts as toggled on/off on page load."
       },
       "header": {
        "!type": "string",
        "!doc": "The header of a Toogler Delegate instance."
       },
       "transition": {
        "!type": "+Object",
        "!doc": "Transition definitions such as duration and type of easing effect."
       },
       "collapseAll": {
        "!type": "fn()",
        "!doc": "Expand all items."
       },
       "createAll": {
        "!type": "fn()",
        "!doc": "Forces toggler creation on delegated header elements."
       },
       "headerEventHandler": {
        "!type": "fn(event: ?)",
        "!doc": "Handle header events."
       }
      },
      "TogglerDelegate.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "TogglerDelegate.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Toggler Delegate."
      },
      "TogglerDelegate.EXTENDS": {
       "!type": "+Object",
       "!doc": "Static property used to define which component it extends."
      }
     }
    }
   },
   "aui_toolbar": {
    "A": {
     "Toolbar": {
      "!type": "fn(config: +Object) -> +_yui.aui_toolbar.A.Toolbar",
      "prototype": {
       "!proto": "_yui.aui_component.A.Component.prototype",
       "undefined": {
        "!type": "fn()",
        "!doc": "Checks if the path to the node is fully expanded. A path to a node\nshould typically include all its toggler-content ancestors."
       },
       "children": {
        "!type": "+Array",
        "!doc": "A list of child elements."
       },
       "toolbarRenderer": {
        "!type": "?",
        "!doc": "Define a new <code>ToolbarRenderer</code>."
       },
       "add": {
        "!type": "fn(children: ?, where: ?)",
        "!doc": "Insert children on Toolbar."
       },
       "clear": {
        "!type": "fn()",
        "!doc": "Clear children from Toolbar."
       },
       "getEnclosingWidget": {
        "!type": "fn(seed: ?)",
        "!doc": "Find the first ancestor node that is a widget bounding box."
       },
       "item": {
        "!type": "fn(index: ?)",
        "!doc": "Get a certain item based on its index."
       },
       "remove": {
        "!type": "fn(where: ?)",
        "!doc": "Remove children from Toolbar."
       }
      },
      "Toolbar.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "Toolbar.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Toolbar."
      },
      "Toolbar.UI_ATTRS": {
       "!type": "+Array",
       "!doc": "Static property used to define the UI attributes."
      },
      "A.Toolbar.isSupportedWidget": {
       "!type": "fn(o: ?)",
       "!doc": "Check if type is supported."
      },
      "CONTENT_TEMPLATE": {
       "!type": "?",
       "!doc": "Static property provide a content template."
      },
      "TEMPLATES": {
       "!type": "+Object",
       "!doc": "Static property provide a group of templates."
      }
     },
     "ToolbarRenderer": {
      "!type": "fn(config: +Object) -> +_yui.aui_toolbar.A.ToolbarRenderer",
      "ToolbarRenderer.TEMPLATES": {
       "!type": "+Object",
       "!doc": "Static property provides a set of templates."
      },
      "ToolbarRenderer.RENDERER": {
       "!type": "+Object",
       "!doc": "Static property used to define how\nthings are going to be rendered."
      },
      "prototype": {
       "button": {
        "!type": "fn(childRenderHints: ?)",
        "!doc": "Define how a button should be rendered."
       },
       "group": {
        "!type": "fn(childRenderHints: ?)",
        "!doc": "Define how a group should be rendered."
       },
       "render": {
        "!type": "fn(children: ?)",
        "!doc": "Render children in a document fragment."
       },
       "renderNode": {
        "!type": "fn(child: ?)",
        "!doc": "Render node."
       }
      }
     }
    }
   },
   "aui_tooltip": {
    "Tooltip": {
     "!type": "fn(config: +Object) -> +_yui.aui_tooltip.Tooltip",
     "prototype": {
      "!proto": "Widget.prototype",
      "bodyContent": {
       "!type": "string",
       "!doc": "Determine the bodyContent"
      },
      "constrain": {
       "!type": "bool",
       "!doc": "Determine the tooltip constrain node."
      },
      "duration": {
       "!type": "number",
       "!doc": "Determine the duration of the tooltip animation."
      },
      "footerContent": {
       "!type": "string",
       "!doc": "Determine the footerContent"
      },
      "formatter": {
       "!type": "fn()",
       "!doc": "Format the title attribute before set the content of the tooltip."
      },
      "headerContent": {
       "!type": "string",
       "!doc": "Determine the headerContent"
      },
      "html": {
       "!type": "bool",
       "!doc": "Determines if the tooltip allows arbitary HTML or is plain text."
      },
      "opacity": {
       "!type": "number",
       "!doc": "Determine the opacity of the tooltip."
      },
      "stickDuration": {
       "!type": "number",
       "!doc": "Determine the duration for the tooltip to stick visibility after\nthe mouse leaves the trigger element. By default the stick duration\nis not specified, therefore the tooltip starts the hide transition\nsynchronously."
      },
      "triggerShowEvent": {
       "!type": "string",
       "!doc": "DOM event to show the tooltip."
      },
      "undefined": {
       "!type": "fn()",
       "!doc": "Prevents display:none from being applied to the tooltip when it is hidden because we\ncannot properly align a hidden tooltip with display:none since we cant accurately\nget its computed x and y position."
      },
      "anim": {
       "!type": "+Object",
       "!doc": "See <a href=\"OverlayContextPanel.html#config_anim\">OverlayContextPanel anim</a>."
      },
      "align": {
       "!type": "+Object",
       "!doc": "See <a href=\"Overlay.html#config_align\">OverlayContextPanel align</a>."
      },
      "showOn": {
       "!type": "string",
       "!doc": "See <a href=\"OverlayContext.html#config_showOn\">OverlayContext showOn</a>."
      },
      "hideOn": {
       "!type": "string",
       "!doc": "See <a href=\"OverlayContext.html#config_showOn\">OverlayContext showOn</a>."
      },
      "hideDelay": {
       "!type": "number",
       "!doc": "See <a href=\"OverlayContext.html#config_hideDelay\">OverlayContext hideDelay</a>."
      },
      "title": {
       "!type": "bool",
       "!doc": "Use the content of the <code>title</code> attribute as the Tooltip\ncontent."
      },
      "show": {
       "!type": "fn()",
       "!doc": "Over-ride the <code>show</code> to invoke the\n<a href=\"Tooltip.html#method__loadBodyContentFromTitle\">_loadBodyContentFromTitle</a>.\nSee <a href=\"OverlayContext.html#config_show\">OverlayContext show</a>."
      }
     },
     "Tooltip.CSS_PREFIX": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the CSS prefix."
     },
     "A.Tooltip.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Tooltip."
     },
     "Tooltip.TEMPLATES": {
      "!type": "+Object",
      "!doc": "Static property provides a set of reusable templates."
     },
     "Tooltip.NAME": {
      "!type": "string",
      "!doc": "Static property provides a string to identify the class."
     },
     "Tooltip.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Tooltip."
     }
    },
    "A": {
     "TooltipDelegate": {
      "!type": "fn(config: +Object) -> +_yui.aui_tooltip.A.TooltipDelegate",
      "prototype": {
       "!proto": "A.Base.prototype",
       "_onUserHideInteraction": {
        "!type": "fn(event: ?)",
        "!doc": "Show tooltip on user interaction."
       },
       "_onUserShowInteraction": {
        "!type": "fn(event: ?)",
        "!doc": "Show tooltip on user interaction."
       },
       "align": {
        "!type": "+Object",
        "!doc": "The alignment configuration for this widget."
       },
       "container": {
        "!type": "?",
        "!doc": "The container of Toggler Delegate instance."
       },
       "duration": {
        "!type": "number",
        "!doc": "Determine the duration of the tooltip animation."
       },
       "html": {
        "!type": "bool",
        "!doc": "Determines if the tooltip allows arbitary HTML or is plain text."
       },
       "opacity": {
        "!type": "number",
        "!doc": "Determine the opacity of the tooltip."
       },
       "triggerHideEvent": {
        "!type": "string",
        "!doc": "DOM event to hide the tooltip."
       },
       "triggerShowEvent": {
        "!type": "string",
        "!doc": "DOM event to show the tooltip."
       },
       "zIndex": {
        "!type": "number",
        "!doc": "Specify the zIndex for the tooltips."
       }
      },
      "TooltipDelegate.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Toggler Delegate."
      }
     }
    }
   },
   "aui_tree": {
    "A": {
     "TreeData": {
      "!type": "fn(config: +Object) -> +_yui.aui_tree.A.TreeData",
      "prototype": {
       "!proto": "A.Base.prototype",
       "container": {
        "!type": "+aui_node.Node",
        "!doc": "Container to nest children nodes. If it has a container its not a leaf."
       },
       "children": {
        "!type": "+Array",
        "!doc": "Array of children (i.e. could be a JSON metadata object or a TreeNode instance)."
       },
       "index": {
        "!type": "+Object",
        "!doc": "Index the nodes."
       },
       "getNodeById": {
        "!type": "fn(uid: string) -> +aui_tree.TreeNode",
        "!doc": "Get a TreeNode by id."
       },
       "isRegistered": {
        "!type": "fn(node: +_yui.aui_tree.TreeNode) -> bool",
        "!doc": "Whether the TreeNode is registered on this TreeData."
       },
       "updateReferences": {
        "!type": "fn(TreeNode: +_yui.aui_node.Node, TreeNode: +ParentNode, TreeView: +OwnerTree)",
        "!doc": "Update the references of the passed TreeNode."
       },
       "refreshIndex": {
        "!type": "fn()",
        "!doc": "Refresh the index (i.e. re-index all nodes)."
       },
       "registerNode": {
        "!type": "fn(node: +_yui.aui_tree.TreeNode)",
        "!doc": "Register the passed TreeNode on this TreeData."
       },
       "updateIndex": {
        "!type": "fn(index: +Object)",
        "!doc": "Update the <a href=\"TreeData.html#config_index\">index</a> attribute value."
       },
       "unregisterNode": {
        "!type": "fn(node: +_yui.aui_tree.TreeNode)",
        "!doc": "Unregister the passed TreeNode from this TreeData."
       },
       "collapseAll": {
        "!type": "fn()",
        "!doc": "Collapse all children of the TreeData."
       },
       "expandAll": {
        "!type": "fn()",
        "!doc": "Expand all children of the TreeData."
       },
       "selectAll": {
        "!type": "fn()",
        "!doc": "Select all children of the TreeData."
       },
       "unselectAll": {
        "!type": "fn()",
        "!doc": "Unselect all children of the TreeData."
       },
       "eachChildren": {
        "!type": "fn(fn: fn(), fn: bool)",
        "!doc": "Loop each children and execute the <code>fn</code> callback."
       },
       "eachParent": {
        "!type": "fn(fn: fn())",
        "!doc": "Loop each parent node and execute the <code>fn</code> callback."
       },
       "bubbleEvent": {
        "!type": "fn(eventType: string, args: +Array, cancelBubbling: bool, stopActionPropagation: bool)",
        "!doc": "Bubble event to all parent nodes."
       },
       "createNode": {
        "!type": "fn(options: +Object) -> +aui_tree.TreeNode",
        "!doc": "Create a TreeNode instance."
       },
       "appendChild": {
        "!type": "fn(node: +_yui.aui_tree.TreeNode, cancelBubbling: bool)",
        "!doc": "Append a child node to the TreeData."
       },
       "item": {
        "!type": "fn(index: number) -> +aui_tree.TreeNode",
        "!doc": "Get a TreeNode children by index."
       },
       "indexOf": {
        "!type": "fn(node: +_yui.aui_tree.TreeNode) -> number",
        "!doc": "Index of the passed TreeNode on the <a\nhref=\"TreeData.html#config_children\">children</a> attribute."
       },
       "hasChildNodes": {
        "!type": "fn() -> bool",
        "!doc": "Whether the TreeData contains children or not."
       },
       "getChildren": {
        "!type": "fn(deep: bool) -> +Array",
        "!doc": "Get an Array of the children nodes of the current TreeData."
       },
       "getEventOutputMap": {
        "!type": "fn(node: +TreeData) -> +Object",
        "!doc": "Get an object containing metadata for the custom events."
       },
       "removeChild": {
        "!type": "fn(node: +TreeData)",
        "!doc": "Remove the passed <code>node</code> from the current TreeData."
       },
       "_removeChild": {
        "!type": "fn(node: +TreeData)",
        "!doc": "Remove the passed <code>node</code> from the current TreeData."
       },
       "empty": {
        "!type": "fn()",
        "!doc": "Delete all children of the current TreeData."
       },
       "insert": {
        "!type": "fn(treeNode: +_yui.aui_tree.TreeNode, refTreeNode: +_yui.aui_tree.TreeNode, where: +_yui.aui_tree.TreeNode)",
        "!doc": "Insert <code>treeNode</code> before or after the <code>refTreeNode</code>."
       },
       "insertAfter": {
        "!type": "fn(treeNode: +_yui.aui_tree.TreeNode, refTreeNode: +_yui.aui_tree.TreeNode)",
        "!doc": "Insert <code>treeNode</code> after the <code>refTreeNode</code>."
       },
       "insertBefore": {
        "!type": "fn(treeNode: +_yui.aui_tree.TreeNode, refTreeNode: +_yui.aui_tree.TreeNode)",
        "!doc": "Insert <code>treeNode</code> before the <code>refTreeNode</code>."
       },
       "getNodeByChild": {
        "!type": "fn(child: +_yui.aui_node.Node) -> +aui_tree.TreeNode",
        "!doc": "Get a TreeNode instance by a child DOM Node."
       }
      },
      "TreeData.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the TreeData."
      }
     },
     "TreeViewIO": {
      "!type": "fn(config: +Object) -> +_yui.aui_tree.A.TreeViewIO",
      "TreeViewIO.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the TreeViewIO."
      },
      "prototype": {
       "io": {
        "!type": "+Object",
        "!doc": "IO options for the current TreeNode load the children."
       },
       "createNodes": {
        "!type": "fn(nodes: ?)",
        "!doc": "Create nodes."
       },
       "initIO": {
        "!type": "fn()",
        "!doc": "Initialize the IO transaction setup on the\n[io](A.TreeViewIO.html#attr_io) attribute."
       },
       "ioStartHandler": {
        "!type": "fn()",
        "!doc": "IO Start handler."
       },
       "ioCompleteHandler": {
        "!type": "fn()",
        "!doc": "IO Complete handler."
       },
       "ioSuccessHandler": {
        "!type": "fn()",
        "!doc": "IO Success handler."
       },
       "ioFailureHandler": {
        "!type": "fn()",
        "!doc": "IO Failure handler."
       }
      }
     },
     "TreeNode": {
      "!type": "fn(config: +Object) -> +_yui.aui_tree.A.TreeNode",
      "prototype": {
       "!proto": "A.Base.prototype",
       "boundingBox": {
        "!type": "?",
        "!doc": "The widgets outermost node, used for sizing and positioning."
       },
       "contentBox": {
        "!type": "?",
        "!doc": "The direct descendant of a widgets\nbounding box and houses its content."
       },
       "cssClasses": {
        "!type": "+Object",
        "!doc": "CSS classes used on TreeNode."
       },
       "draggable": {
        "!type": "bool",
        "!doc": "If true the TreeNode is draggable."
       },
       "ownerTree": {
        "!type": "+TreeView",
        "!doc": "TreeView which contains the current TreeNode."
       },
       "label": {
        "!type": "string",
        "!doc": "Label of the TreeNode."
       },
       "expanded": {
        "!type": "bool",
        "!doc": "Whether the TreeNode is expanded by default."
       },
       "id": {
        "!type": "string",
        "!doc": "Id of the TreeNode."
       },
       "leaf": {
        "!type": "bool",
        "!doc": "Whether the TreeNode could have children or not (i.e. if any\nchildren is present the TreeNode is a leaf)."
       },
       "nextSibling": {
        "!type": "+aui_tree.TreeNode",
        "!doc": "Next sibling of the current TreeNode."
       },
       "prevSibling": {
        "!type": "+aui_tree.TreeNode",
        "!doc": "Previous sibling of the current TreeNode."
       },
       "parentNode": {
        "!type": "+aui_tree.TreeNode",
        "!doc": "Parent node of the current TreeNode."
       },
       "labelEl": {
        "!type": "+aui_node.Node",
        "!doc": "Label element to house the <code>label</code> attribute."
       },
       "hitAreaEl": {
        "!type": "+aui_node.Node",
        "!doc": "Hitarea element."
       },
       "alwaysShowHitArea": {
        "!type": "bool",
        "!doc": "Always show the hitarea icon."
       },
       "iconEl": {
        "!type": "+aui_node.Node",
        "!doc": "Icon element."
       },
       "tabIndex": {
        "!type": "?",
        "!doc": "Specify the tab order."
       },
       "rendered": {
        "!type": "bool",
        "!doc": "If true the TreeNode is rendered."
       },
       "render": {
        "!type": "fn(container: ?)",
        "!doc": "Render TreeNode."
       },
       "appendChild": {
        "!type": "fn()",
        "!doc": "Append child on TreeNode."
       },
       "collapse": {
        "!type": "fn()",
        "!doc": "Collapse the current TreeNode."
       },
       "collapseAll": {
        "!type": "fn()",
        "!doc": "Collapse all TreeNodes."
       },
       "contains": {
        "!type": "fn(node: +_yui.aui_tree.TreeNode) -> bool",
        "!doc": "Check if the current TreeNode contains the passed <code>node</code>."
       },
       "expand": {
        "!type": "fn()",
        "!doc": "Expand the current TreeNode."
       },
       "expandAll": {
        "!type": "fn()",
        "!doc": "Expand all TreeNodes."
       },
       "getDepth": {
        "!type": "fn() -> number",
        "!doc": "Get the depth of the current TreeNode."
       },
       "hasChildNodes": {
        "!type": "fn()",
        "!doc": "Check if it has child nodes."
       },
       "isSelected": {
        "!type": "fn() -> bool",
        "!doc": "Whether the current TreeNode is selected or not."
       },
       "isLeaf": {
        "!type": "fn() -> bool",
        "!doc": "Whether the current TreeNode is ancestor of the passed <code>node</code> or not."
       },
       "toggle": {
        "!type": "fn()",
        "!doc": "Toggle the current TreeNode, <code>collapsed</code> or <code>expanded</code>."
       }
      },
      "TreeNode.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "TreeNode.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the TreeNode."
      }
     },
     "TreeNodeIO": {
      "!type": "fn(config: +Object) -> +_yui.aui_tree.A.TreeNodeIO",
      "prototype": {
       "!proto": "_yui.aui_tree.A.TreeNode.prototype",
       "loading": {
        "!type": "bool",
        "!doc": "Whether the current TreeNode IO transaction is loading."
       },
       "loaded": {
        "!type": "bool",
        "!doc": "Whether the current TreeNode has loaded the content."
       },
       "cache": {
        "!type": "bool",
        "!doc": "Whether the current TreeNode should cache the loaded content or not."
       },
       "leaf": {
        "!type": "bool",
        "!doc": "Whether the TreeNode could have children or not (i.e. if any\nchildren is present the TreeNode is a leaf)."
       },
       "expand": {
        "!type": "fn()",
        "!doc": "Expand the current TreeNodeIO."
       },
       "_onIOSuccess": {
        "!type": "fn(event: ?)",
        "!doc": "Fire when IO success."
       }
      },
      "TreeNode.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "TreeNode.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the TreeNode."
      }
     },
     "TreeNodeCheck": {
      "!type": "fn(config: +Object) -> +_yui.aui_tree.A.TreeNodeCheck",
      "prototype": {
       "!proto": "_yui.aui_tree.A.TreeNodeIO.prototype",
       "checked": {
        "!type": "bool",
        "!doc": "Whether the TreeNode is checked or not."
       },
       "checkName": {
        "!type": "string",
        "!doc": "Name of the checkbox element used on the current TreeNode."
       },
       "checkContainerEl": {
        "!type": "+aui_node.Node",
        "!doc": "Container element for the checkbox."
       },
       "checkEl": {
        "!type": "+aui_node.Node",
        "!doc": "Checkbox element."
       },
       "check": {
        "!type": "fn()",
        "!doc": "Check the current TreeNode."
       },
       "uncheck": {
        "!type": "fn()",
        "!doc": "Uncheck the current TreeNode."
       },
       "toggleCheck": {
        "!type": "fn()",
        "!doc": "Toggle the check status of the current TreeNode."
       },
       "isChecked": {
        "!type": "fn() -> ?",
        "!doc": "Whether the current TreeNodeCheck is checked."
       }
      },
      "TreeNode.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "TreeNode.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the TreeNode."
      }
     },
     "TreeNodeTask": {
      "!type": "fn(config: +Object) -> +_yui.aui_tree.A.TreeNodeTask",
      "prototype": {
       "!proto": "_yui.aui_tree.A.TreeNodeCheck.prototype",
       "check": {
        "!type": "fn(originalTarget: ?)",
        "!doc": "Check the current TreeNodeTask."
       },
       "uncheck": {
        "!type": "fn(originalTarget: ?)",
        "!doc": "Uncheck the current TreeNodeTask."
       }
      },
      "TreeNode.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      }
     },
     "TreeNodeRadio": {
      "!type": "fn(config: +Object) -> +_yui.aui_tree.A.TreeNodeRadio",
      "prototype": {
       "!proto": "_yui.aui_tree.A.TreeNodeTask.prototype",
       "cssClasses": {
        "!type": "+Object",
        "!doc": "CSS classes used on TreeNodeRadio."
       },
       "check": {
        "!type": "fn()",
        "!doc": "Check the current TreeNodeRadio."
       }
      },
      "TreeNodeRadio.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "TreeNodeRadio.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the TreeNodeRadio."
      }
     },
     "TreeViewPaginator": {
      "!type": "fn(config: +Object) -> +_yui.aui_tree.A.TreeViewPaginator",
      "TreeViewPaginator.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the TreeView."
      },
      "prototype": {
       "paginator": {
        "!type": "+Object",
        "!doc": "Paginator."
       }
      }
     },
     "TreeView": {
      "!type": "fn(config: +Object) -> +_yui.aui_tree.A.TreeView",
      "prototype": {
       "!proto": "_yui.aui_tree.A.TreeData.prototype",
       "type": {
        "!type": "string",
        "!doc": "Type of the treeview (i.e. could be file or normal)."
       },
       "lastSelected": {
        "!type": "+aui_tree.TreeNode",
        "!doc": "Last selected TreeNode."
       },
       "lazyLoad": {
        "!type": "bool",
        "!doc": "Determine if its going to be lazy loaded or not."
       },
       "selectOnToggle": {
        "!type": "bool",
        "!doc": "Determine if its going to be selected on toggle."
       }
      },
      "TreeView.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "TreeView.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the TreeView."
      }
     },
     "TreeViewDD": {
      "!type": "fn(config: +Object) -> +_yui.aui_tree.A.TreeViewDD",
      "prototype": {
       "!proto": "_yui.aui_tree.A.TreeView.prototype",
       "helper": {
        "!type": "+aui_node.Node",
        "!doc": "Dragdrop helper element."
       },
       "scrollDelay": {
        "!type": "number",
        "!doc": "Delay of the scroll while dragging the TreeNodes."
       },
       "dropAction": {
        "!type": "string",
        "!doc": "Drop action (i.e. could be append, below or above)."
       },
       "lastY": {
        "!type": "number",
        "!doc": "Last Y."
       },
       "node": {
        "!type": "?",
        "!doc": "Node."
       },
       "nodeContent": {
        "!type": "+aui_node.Node",
        "!doc": "Reference for the current drop node."
       }
      },
      "TreeViewDD.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "TreeViewDD.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the TreeViewDD."
      }
     }
    },
    "TreeNode": {
     "!type": "fn()",
     "prototype": {
      "A.TreeNode.nodeTypes": {
       "!type": "+Object",
       "!doc": "TreeNode types hash map.\n\n<pre><code>A.TreeNode.nodeTypes = {\n radio: A.TreeNodeRadio,\n task: A.TreeNodeTask,\n check: A.TreeNodeCheck,\n node: A.TreeNode,\n io: A.TreeNodeIO\n};</code></pre>"
      }
     }
    }
   },
   "aui_url": {
    "A": {
     "Url": {
      "!type": "fn(config: +Object) -> +_yui.aui_url.A.Url",
      "prototype": {
       "undefined": {
        "!type": "fn()"
       },
       "addParameter": {
        "!type": "fn(key: ?, values: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "addParameters": {
        "!type": "fn(parameters: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "hasParameter": {
        "!type": "fn(key: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getParameter": {
        "!type": "fn(key: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getParameters": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getAnchor": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getAuthority": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getDirectory": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getFile": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getHost": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getPassword": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getPath": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getPort": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getProtocol": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getQuery": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getRelative": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getSource": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getUser": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "getUserInfo": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "removeParameter": {
        "!type": "fn(key: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "removeParameters": {
        "!type": "fn(parameters: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "setParameter": {
        "!type": "fn(key: ?, opt_values: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "setParameters": {
        "!type": "fn(parameters: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "setAnchor": {
        "!type": "fn(val: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "setAuthority": {
        "!type": "fn(val: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "setDirectory": {
        "!type": "fn(val: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "setFile": {
        "!type": "fn(val: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "setHost": {
        "!type": "fn(val: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "setPassword": {
        "!type": "fn(val: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "setPath": {
        "!type": "fn(val: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "setPort": {
        "!type": "fn(val: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "setProtocol": {
        "!type": "fn(val: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "setRelative": {
        "!type": "fn(val: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "setSource": {
        "!type": "fn(val: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "setUser": {
        "!type": "fn(val: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "setUserInfo": {
        "!type": "fn(val: ?)",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       },
       "toString": {
        "!type": "fn()",
        "!doc": "TODO. Wanna help? Please send a Pull Request."
       }
      }
     }
    }
   },
   "aui_video": {
    "A": {
     "Video": {
      "!type": "fn(config: +Object) -> +_yui.aui_video.A.Video",
      "prototype": {
       "!proto": "_yui.aui_component.A.Component.prototype",
       "url": {
        "!type": "string",
        "!doc": "URL used by Video to play."
       },
       "ogvUrl": {
        "!type": "string",
        "!doc": "URL (on .ogv format) used by Video to play."
       },
       "swfUrl": {
        "!type": "string",
        "!doc": "URL (on .swf format) used by Video to create\na fallback player with Flash."
       },
       "poster": {
        "!type": "string",
        "!doc": "Image displayed before playback starts."
       },
       "fixedAttributes": {
        "!type": "+Object",
        "!doc": "An additional list of attributes."
       },
       "flashPlayerVersion": {
        "!type": "string",
        "!doc": "The required Flash version for the swf player"
       },
       "flashVars": {
        "!type": "+Object",
        "!doc": "Variables used by Flash player."
       },
       "render": {
        "!type": "bool",
        "!doc": "If <code>true</code> the render phase will be automatically invoked\npreventing the <code>.render()</code> manual call."
       },
       "load": {
        "!type": "fn()",
        "!doc": "Load video track."
       },
       "pause": {
        "!type": "fn()",
        "!doc": "Pause video track."
       },
       "play": {
        "!type": "fn()",
        "!doc": "Play video track."
       }
      },
      "Video.NAME": {
       "!type": "string",
       "!doc": "Static property provides a string to identify the class."
      },
      "Video.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Video."
      },
      "Video.BIND_UI_ATTRS": {
       "!type": "+Array",
       "!doc": "Static property used to define the attributes\nfor the bindUI lifecycle phase."
      },
      "Video.SYNC_UI_ATTRS": {
       "!type": "+Array",
       "!doc": "Static property used to define the attributes\nfor the syncUI lifecycle phase."
      }
     }
    }
   },
   "aui_widget_cssclass": {
    "A": {
     "WidgetCssClass": {
      "!type": "fn(The: +Object)",
      "WidgetCssClass.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Component."
      },
      "prototype": {
       "cssClass": {
        "!type": "string",
        "!doc": "CSS class to be automatically added to the <code>boundingBox</code>."
       }
      },
      "WidgetCssClass.CSS_CLASS_CONTENT_SUFFIX": {
       "!type": "string",
       "!doc": "Static property used to define the default suffix for cssClass attribute value\napplied on <code>contentBox</code> node."
      }
     },
     "WidgetPositionAlignSuggestion": {
      "!type": "fn(The: +Object)",
      "WidgetPositionAlignSuggestion.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration."
      },
      "prototype": {
       "position": {
        "!type": "string",
        "!doc": "Determine the position of the tooltip."
       },
       "POSITION_ALIGN_SUGGESTION": {
        "!type": "?",
        "!doc": "Property defining the align points based on the suggested\n<code>position</code>."
       },
       "initializer": {
        "!type": "fn()",
        "!doc": "Construction logic executed during WidgetPositionAlignSuggestion\ninstantiation. Lifecycle."
       },
       "alignNode": {
        "!type": "?",
        "!doc": "Suggest alignment for the node based on the <code>position</code> suggestion."
       }
      }
     }
    }
   },
   "aui_widget_toggle": {
    "A": {
     "WidgetToggle": {
      "!type": "fn(The: +Object)",
      "prototype": {
       "toggle": {
        "!type": "fn(visible: bool)",
        "!doc": "Toggles widget visibility."
       }
      }
     }
    }
   },
   "aui_widget_toolbars": {
    "WidgetToolbars": {
     "!type": "fn() -> +_yui.aui_widget_toolbars.WidgetToolbars",
     "WidgetToolbars.ATTRS": {
      "!type": "+Object",
      "!doc": "Static property used to define the default attribute\nconfiguration."
     },
     "prototype": {
      "toolbars": {
       "!type": "?",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "toolbarPosition": {
       "!type": "+Object",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "addToolbar": {
       "!type": "fn(toolbar: ?, section: ?)",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "getToolbar": {
       "!type": "fn(section: ?)",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "getToolbarSection": {
       "!type": "fn(section: ?)",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      },
      "removeToolbar": {
       "!type": "fn(section: ?)",
       "!doc": "TODO. Wanna help? Please send a Pull Request."
      }
     }
    },
    "A": {
     "WidgetTrigger": {
      "!type": "fn(The: +Object)",
      "WidgetTrigger.ATTRS": {
       "!type": "+Object",
       "!doc": "Static property used to define the default attribute\nconfiguration."
      },
      "prototype": {
       "bindDOMEvents": {
        "!type": "bool",
        "!doc": "Determine if the Toggler should bind DOM events or not."
       },
       "trigger": {
        "!type": "?",
        "!doc": "Trigger node to change widget visibility state."
       },
       "triggerHideEvent": {
        "!type": "string",
        "!doc": "DOM event to hide the tooltip."
       },
       "triggerShowEvent": {
        "!type": "string",
        "!doc": "DOM event to show the tooltip."
       },
       "triggerToggleEvent": {
        "!type": "string",
        "!doc": "DOM event to toggle the tooltip."
       },
       "initializer": {
        "!type": "fn()",
        "!doc": "Construction logic executed during WidgetTrigger\ninstantiation. Lifecycle."
       }
      }
     }
    }
   }
  }
 },
 "AUI": "YUI"
};
    
})