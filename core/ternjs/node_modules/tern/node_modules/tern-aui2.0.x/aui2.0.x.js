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
  "config": {
   "A": {
    "AceEditor": {
     "AutoCompleteBaseConfig": {
      "fillMode": {
       "!type": "number",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteBase.html#attribute_fillMode",
       "!doc": "The mode in which the AutoComplete should operate. Can be one of these:\nINSERT - value 0 or OVERWRITE - value 1. In case of INSERT mode, when\nEditor adds a suggestion, it will be added next to the matched\nexpression. In case of OVERWRITE mode, the suggestion will overwrite the\nmatched expression.",
       "!data": {
        "submodule": "aui-ace-autocomplete-base"
       }
      },
      "filters": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteBase.html#attribute_filters",
       "!doc": "Provides an array of filter functions which will filter the results. By\ndefault there is one function which provides phrase match filtering.",
       "!data": {
        "submodule": "aui-ace-autocomplete-base"
       }
      },
      "processor": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteBase.html#attribute_processor",
       "!doc": "The default processor which will be used to process matches.",
       "!data": {
        "submodule": "aui-ace-autocomplete-base"
       }
      },
      "showListKey": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteBase.html#attribute_showListKey",
       "!doc": "The keyboard combination which should be used to show the list with found\nresults.",
       "!data": {
        "submodule": "aui-ace-autocomplete-base"
       }
      },
      "sorters": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteBase.html#attribute_sorters",
       "!doc": "Provides an array of sorter functions which will sort the results. By\ndefault there is one function which sorts the results in ascending order.",
       "!data": {
        "submodule": "aui-ace-autocomplete-base"
       }
      }
     },
     "AutoCompleteFreemarkerConfig": {
      "!proto": "config.A.AceEditor.TemplateProcessorConfig",
      "directives": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteFreemarker.html#attribute_directives",
       "!doc": "Contains the list of supported directives according to Freemarker\nspecification.",
       "!data": {
        "submodule": "aui-ace-autocomplete-freemarker"
       }
      },
      "directivesMatcher": {
       "!type": "?",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteFreemarker.html#attribute_directivesMatcher",
       "!doc": "Contains the regular expression which checks for directive\npresence.",
       "!data": {
        "submodule": "aui-ace-autocomplete-freemarker"
       }
      },
      "host": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteFreemarker.html#attribute_host",
       "!doc": "The Editor in which the current instance is plugged.",
       "!data": {
        "submodule": "aui-ace-autocomplete-freemarker"
       }
      },
      "variables": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteFreemarker.html#attribute_variables",
       "!doc": "Contains the supported variables.",
       "!data": {
        "submodule": "aui-ace-autocomplete-freemarker"
       }
      },
      "variablesMatcher": {
       "!type": "?",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteFreemarker.html#attribute_variablesMatcher",
       "!doc": "Contains the regular expression which will check for variable\nmatch.",
       "!data": {
        "submodule": "aui-ace-autocomplete-freemarker"
       }
      }
     },
     "AutoCompleteListConfig": {
      "!proto": "config.OverlayConfig",
      "host": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteList.html#attribute_host",
       "!doc": "The Editor in which the current instance is plugged.",
       "!data": {
        "submodule": "aui-ace-autocomplete-list"
       }
      },
      "listNode": {
       "!type": "+node.Node",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteList.html#attribute_listNode",
       "!doc": "A Node in which results will be shown.",
       "!data": {
        "submodule": "aui-ace-autocomplete-list"
       }
      },
      "loadingMessage": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteList.html#attribute_loadingMessage",
       "!doc": "A string, representing the loading message.",
       "!data": {
        "submodule": "aui-ace-autocomplete-list"
       }
      },
      "results": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteList.html#attribute_results",
       "!doc": "Contains the current set of results in the list.",
       "!data": {
        "submodule": "aui-ace-autocomplete-list"
       }
      },
      "selectedEntry": {
       "!type": "?",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteList.html#attribute_selectedEntry",
       "!doc": "Provides the currently selected entry.",
       "!data": {
        "submodule": "aui-ace-autocomplete-list"
       }
      },
      "strings": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteList.html#attribute_strings",
       "!doc": "Collection of strings used to label elements of the UI.",
       "!data": {
        "submodule": "aui-ace-autocomplete-list"
       }
      }
     },
     "TemplateProcessorConfig": {
      "!proto": "config.BaseConfig",
      "directives": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.TemplateProcessor.html#attribute_directives",
       "!doc": "Contains an array of all possible directives for the\ncorresponding language.",
       "!data": {
        "submodule": "aui-ace-autocomplete-templateprocessor"
       }
      },
      "host": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.TemplateProcessor.html#attribute_host",
       "!doc": "The Editor in which the current instance is plugged.",
       "!data": {
        "submodule": "aui-ace-autocomplete-templateprocessor"
       }
      },
      "variables": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.TemplateProcessor.html#attribute_variables",
       "!doc": "Contains the supported variables for the corresponding language.",
       "!data": {
        "submodule": "aui-ace-autocomplete-templateprocessor"
       }
      }
     },
     "AutoCompleteVelocityConfig": {
      "!proto": "config.A.AceEditor.TemplateProcessorConfig",
      "directives": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteVelocity.html#attribute_directives",
       "!doc": "Contains the list of supported directives according to Velocity\nspecification.",
       "!data": {
        "submodule": "aui-ace-autocomplete-velocity"
       }
      },
      "directivesMatcher": {
       "!type": "?",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteVelocity.html#attribute_directivesMatcher",
       "!doc": "Contains the regular expression which checks for directive.",
       "!data": {
        "submodule": "aui-ace-autocomplete-velocity"
       }
      },
      "host": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteVelocity.html#attribute_host",
       "!doc": "The Editor in which the current instance is plugged.",
       "!data": {
        "submodule": "aui-ace-autocomplete-velocity"
       }
      },
      "variables": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteVelocity.html#attribute_variables",
       "!doc": "Contains the supported variables.",
       "!data": {
        "submodule": "aui-ace-autocomplete-velocity"
       }
      },
      "variablesMatcher": {
       "!type": "?",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteVelocity.html#attribute_variablesMatcher",
       "!doc": "Contains the regular expression which will check for variable\nmatch.",
       "!data": {
        "submodule": "aui-ace-autocomplete-velocity"
       }
      }
     }
    },
    "AceEditorConfig": {
     "!proto": "config.WidgetConfig",
     "height": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.html#attribute_height",
      "!doc": "The height of ACE Editor."
     },
     "highlightActiveLine": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.html#attribute_highlightActiveLine",
      "!doc": "Determine if the active line of code\nwill be highlighted or not."
     },
     "mode": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.html#attribute_mode",
      "!doc": "Correspond to the language being typed."
     },
     "readOnly": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.html#attribute_readOnly",
      "!doc": "Determine if the code will be\neditable or not."
     },
     "showPrintMargin": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.html#attribute_showPrintMargin",
      "!doc": "Determine if print margin will\nbe visible or not."
     },
     "tabSize": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.html#attribute_tabSize",
      "!doc": "The indentation size of tab key."
     },
     "useSoftTabs": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.html#attribute_useSoftTabs",
      "!doc": "Determine if the tab key will act as\nspace characters or tab characters."
     },
     "useWrapMode": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.html#attribute_useWrapMode",
      "!doc": "Determine if the line will break\nwhen it reaches the end of the line."
     },
     "value": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.html#attribute_value",
      "!doc": "Some predefined value on the editor."
     },
     "width": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.html#attribute_width",
      "!doc": "The width of ACE Editor."
     }
    },
    "Plugin": {
     "AriaConfig": {
      "!proto": "config.Plugin.BaseConfig",
      "attributes": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Plugin.Aria.html#attribute_attributes",
       "!doc": "The ARIA attributes collection."
      },
      "attributeValueFormat": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Plugin.Aria.html#attribute_attributeValueFormat",
       "!doc": "The ARIA attribute value format."
      },
      "attributeNode": {
       "!type": "?",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Plugin.Aria.html#attribute_attributeNode",
       "!doc": "Node container for the ARIA attribute."
      },
      "roleName": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Plugin.Aria.html#attribute_roleName",
       "!doc": "The ARIA role name."
      },
      "roleNode": {
       "!type": "?",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Plugin.Aria.html#attribute_roleNode",
       "!doc": "Node container for the ARIA role."
      },
      "validateW3C": {
       "!type": "bool",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Plugin.Aria.html#attribute_validateW3C",
       "!doc": "Checks if the attribute is valid with W3C rules."
      }
     }
    },
    "AudioConfig": {
     "!proto": "config.A.ComponentConfig",
     "url": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Audio.html#attribute_url",
      "!doc": "URL used by Audio to play."
     },
     "oggUrl": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Audio.html#attribute_oggUrl",
      "!doc": "URL (on .ogg format) used by Audio to play."
     },
     "type": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Audio.html#attribute_type",
      "!doc": "The type of audio."
     },
     "swfWidth": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Audio.html#attribute_swfWidth",
      "!doc": "The width of Audios fallback using Flash."
     },
     "swfHeight": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Audio.html#attribute_swfHeight",
      "!doc": "The height of Audios fallback using Flash."
     },
     "swfUrl": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Audio.html#attribute_swfUrl",
      "!doc": "URL (on .swf format) used by Audio to create\na fallback player with Flash."
     },
     "fixedAttributes": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Audio.html#attribute_fixedAttributes",
      "!doc": "An additional list of attributes."
     },
     "flashVars": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Audio.html#attribute_flashVars",
      "!doc": "Variables used by Flash player."
     },
     "render": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Audio.html#attribute_render",
      "!doc": "If `true` the render phase will be automatically invoked\npreventing the `.render()` manual call."
     }
    },
    "AutosizeIframeConfig": {
     "!proto": "config.Plugin.BaseConfig",
     "height": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AutosizeIframe.html#attribute_height",
      "!doc": "The height of the iframe."
     },
     "monitorHeight": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AutosizeIframe.html#attribute_monitorHeight",
      "!doc": "Indicates if the height should be monitored."
     },
     "width": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AutosizeIframe.html#attribute_width",
      "!doc": "The width of the iframe."
     }
    },
    "ButtonExtConfig": {
     "domType": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonExt.html#attribute_domType",
      "!doc": "Defines the HTML type attribute of element e.g. `<input type=\"button\">`."
     },
     "icon": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonExt.html#attribute_icon",
      "!doc": "Contains a CSS class of the icon to use. A list of icons can be found\n[here](http://liferay.github.io/alloy-bootstrap/base-css.html#icons)."
     },
     "iconElement": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonExt.html#attribute_iconElement",
      "!doc": "Defines markup template for icon, passed in as a node e.g.\n`Y.Node.create(<i></i>)`."
     },
     "iconAlign": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonExt.html#attribute_iconAlign",
      "!doc": "Sets position of icon."
     },
     "primary": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonExt.html#attribute_primary",
      "!doc": "Sets button style to primary."
     }
    },
    "ButtonSearchCancelConfig": {
     "!proto": "config.BaseConfig",
     "container": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonSearchCancel.html#attribute_container",
      "!doc": "Defines the event delegation container of `ButtonSearchCancel`\ninstance."
     },
     "gutter": {
      "!type": "[?]",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonSearchCancel.html#attribute_gutter",
      "!doc": "Defines the space surrounding the cancel icon rendered on the input.\nUseful when the user needs a different alignment. Gutter values are\nadded to the X and Y alignment values of the button search cancel."
     },
     "iconClass": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonSearchCancel.html#attribute_iconClass",
      "!doc": "Icon CSS class to be used on the search cancel button."
     },
     "trigger": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonSearchCancel.html#attribute_trigger",
      "!doc": "Defines the CSS selector for the input elements the button search\ncancel renders. Supports single or multiple node selector."
     },
     "zIndex": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonSearchCancel.html#attribute_zIndex",
      "!doc": "Defines the z-index of the button search cancel."
     }
    },
    "CarouselConfig": {
     "!proto": "config.A.ComponentConfig",
     "activeIndex": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Carousel.html#attribute_activeIndex",
      "!doc": "Index of the first visible item of the carousel."
     },
     "animationTime": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Carousel.html#attribute_animationTime",
      "!doc": "Duration of the animation in seconds when change index on\nCarousel."
     },
     "intervalTime": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Carousel.html#attribute_intervalTime",
      "!doc": "Interval time in seconds between an item transition."
     },
     "itemSelector": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Carousel.html#attribute_itemSelector",
      "!doc": "CSS Selector whitch determines the items to be loaded to the\nCarousel."
     },
     "nodeMenu": {
      "!type": "+node.Node|string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Carousel.html#attribute_nodeMenu",
      "!doc": "Node container of the navigation items."
     },
     "nodeMenuItemSelector": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Carousel.html#attribute_nodeMenuItemSelector",
      "!doc": "CSS selector to match the navigation items."
     },
     "playing": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Carousel.html#attribute_playing",
      "!doc": "Attributes that determines the status of transitions between\nitems."
     }
    },
    "CharCounterConfig": {
     "!proto": "config.BaseConfig",
     "counter": {
      "!type": "+node.Node|string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.CharCounter.html#attribute_counter",
      "!doc": "Node or Selector to display the information of the counter."
     },
     "maxLength": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.CharCounter.html#attribute_maxLength",
      "!doc": "Max number of characters the [input](A.CharCounter.html#attr_input)\ncan have."
     },
     "input": {
      "!type": "+node.Node|string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.CharCounter.html#attribute_input",
      "!doc": "Node or Selector for the input field. Required."
     }
    },
    "ColorPaletteConfig": {
     "!proto": "config.WidgetConfig",
     "items": {
      "!type": "[?]",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPalette.html#attribute_items",
      "!doc": "Colors available to the `ColorPalette`.",
      "!data": {
       "submodule": "aui-color-palette"
      }
     }
    },
    "ColorPickerBaseConfig": {
     "bodyContent": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPickerBase.html#attribute_bodyContent",
      "!doc": "The content of body.",
      "!data": {
       "submodule": "aui-color-picker-base"
      }
     },
     "color": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPickerBase.html#attribute_color",
      "!doc": "Currently selected color.",
      "!data": {
       "submodule": "aui-color-picker-base"
      }
     },
     "colorPalette": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPickerBase.html#attribute_colorPalette",
      "!doc": "Default colors available to the color palette.",
      "!data": {
       "submodule": "aui-color-picker-base"
      }
     },
     "currentTrigger": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPickerBase.html#attribute_currentTrigger",
      "!doc": "Current `trigger` node.",
      "!data": {
       "submodule": "aui-color-picker-base"
      }
     },
     "defaultColor": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPickerBase.html#attribute_defaultColor",
      "!doc": "Provides the default color used for the `recentColors` palette.",
      "!data": {
       "submodule": "aui-color-picker-base"
      }
     },
     "hsvPalette": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPickerBase.html#attribute_hsvPalette",
      "!doc": "`HSVPalette` used for selecting custom colors not present in\n`defualtColors`.",
      "!data": {
       "submodule": "aui-color-picker-base"
      }
     },
     "recentColors": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPickerBase.html#attribute_recentColors",
      "!doc": "Colors that have been selected recently from the `HSVPalette`.",
      "!data": {
       "submodule": "aui-color-picker-base"
      }
     },
     "renderColorPalette": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPickerBase.html#attribute_renderColorPalette",
      "!doc": "Determines if the color palette is rendered on load.",
      "!data": {
       "submodule": "aui-color-picker-base"
      }
     },
     "renderHSVPalette": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPickerBase.html#attribute_renderHSVPalette",
      "!doc": "Determines if the `HSVPalette` is rendered on load.",
      "!data": {
       "submodule": "aui-color-picker-base"
      }
     },
     "strings": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPickerBase.html#attribute_strings",
      "!doc": "Collection of strings used to label elements of the UI.",
      "!data": {
       "submodule": "aui-color-picker-base"
      }
     },
     "trigger": {
      "!type": "+node.Node|string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPickerBase.html#attribute_trigger",
      "!doc": "Trigger node that opens the color palette.",
      "!data": {
       "submodule": "aui-color-picker-base"
      }
     },
     "triggerEvent": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPickerBase.html#attribute_triggerEvent",
      "!doc": "Trigger event that fires on `trigger` click.",
      "!data": {
       "submodule": "aui-color-picker-base"
      }
     }
    },
    "ColorPickerPopoverConfig": {
     "!proto": "config.A.PopoverConfig",
     "align": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPickerPopover.html#attribute_align",
      "!doc": "The alignment configuration for `ColorPickerPopover`.",
      "!data": {
       "submodule": "aui-color-picker-popover"
      }
     },
     "visible": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPickerPopover.html#attribute_visible",
      "!doc": "Determines if `ColorPickerPopover` is visible or not.",
      "!data": {
       "submodule": "aui-color-picker-popover"
      }
     }
    },
    "HSVPaletteConfig": {
     "!proto": "config.WidgetConfig",
     "controls": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HSVPalette.html#attribute_controls",
      "!doc": "Determines if HSVA and RGB input `controls` are visible.",
      "!data": {
       "submodule": "aui-hsv-palette"
      }
     },
     "fieldValidator": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HSVPalette.html#attribute_fieldValidator",
      "!doc": "Collection of regular expressions used to validate field values.",
      "!data": {
       "submodule": "aui-hsv-palette"
      }
     },
     "selected": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HSVPalette.html#attribute_selected",
      "!doc": "Currently `selected` color value.",
      "!data": {
       "submodule": "aui-hsv-palette"
      }
     },
     "strings": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HSVPalette.html#attribute_strings",
      "!doc": "Collection of strings used to label elements of the UI.",
      "!data": {
       "submodule": "aui-hsv-palette"
      }
     }
    },
    "HSVAPaletteModalConfig": {
     "!proto": "config.A.ModalConfig",
     "hsv": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HSVAPaletteModal.html#attribute_hsv",
      "!doc": "Configuration options for the `HSVPalette`.",
      "!data": {
       "submodule": "aui-hsv-palette-modal"
      }
     },
     "selected": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HSVAPaletteModal.html#attribute_selected",
      "!doc": "Currently `selected` color value.",
      "!data": {
       "submodule": "aui-hsv-palette-modal"
      }
     }
    },
    "ComponentConfig": {
     "!proto": "config.WidgetConfig",
     "useARIA": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Component.html#attribute_useARIA",
      "!doc": "Indicates if use of the WAI-ARIA Roles and States should be enabled\nfor the Widget."
     },
     "hideClass": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Component.html#attribute_hideClass",
      "!doc": "CSS class added to hide the `boundingBox` when\n[visible](A.Component.html#attr_visible) is set to `false`."
     },
     "render": {
      "!type": "bool|+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Component.html#attribute_render",
      "!doc": "If `true` the render phase will be autimatically invoked preventing\nthe `.render()` manual call."
     }
    },
    "DataTable": {
     "CellEditorSupportConfig": {
      "editEvent": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTable.CellEditorSupport.html#attribute_editEvent",
       "!doc": "TODO. Wanna help? Please send a Pull Request.",
       "!data": {
        "submodule": "aui-datatable-edit"
       }
      }
     }
    },
    "BaseCellEditorConfig": {
     "!proto": "config.OverlayConfig",
     "editable": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseCellEditor.html#attribute_editable",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-edit"
      }
     },
     "elementName": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseCellEditor.html#attribute_elementName",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-edit"
      }
     },
     "footerContent": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseCellEditor.html#attribute_footerContent",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-edit"
      }
     },
     "hideOnSave": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseCellEditor.html#attribute_hideOnSave",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-edit"
      }
     },
     "inputFormatter": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseCellEditor.html#attribute_inputFormatter",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-edit"
      }
     },
     "outputFormatter": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseCellEditor.html#attribute_outputFormatter",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-edit"
      }
     },
     "showToolbar": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseCellEditor.html#attribute_showToolbar",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-edit"
      }
     },
     "strings": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseCellEditor.html#attribute_strings",
      "!doc": "Collection of strings used to label elements of the UI.",
      "!data": {
       "submodule": "aui-datatable-edit"
      }
     },
     "tabIndex": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseCellEditor.html#attribute_tabIndex",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-edit"
      }
     },
     "toolbar": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseCellEditor.html#attribute_toolbar",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-edit"
      }
     },
     "unescapeValue": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseCellEditor.html#attribute_unescapeValue",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-edit"
      }
     },
     "validator": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseCellEditor.html#attribute_validator",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-edit"
      }
     },
     "value": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseCellEditor.html#attribute_value",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-edit"
      }
     },
     "visible": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseCellEditor.html#attribute_visible",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-edit"
      }
     }
    },
    "BaseOptionsCellEditorConfig": {
     "!proto": "config.A.BaseCellEditorConfig",
     "inputFormatter": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseOptionsCellEditor.html#attribute_inputFormatter",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-edit"
      }
     },
     "options": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseOptionsCellEditor.html#attribute_options",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-edit"
      }
     },
     "outputFormatter": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseOptionsCellEditor.html#attribute_outputFormatter",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-edit"
      }
     },
     "selectedAttrName": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseOptionsCellEditor.html#attribute_selectedAttrName",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-edit"
      }
     },
     "strings": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseOptionsCellEditor.html#attribute_strings",
      "!doc": "Collection of strings used to label elements of the UI.",
      "!data": {
       "submodule": "aui-datatable-edit"
      }
     }
    },
    "DropDownCellEditorConfig": {
     "!proto": "config.A.BaseOptionsCellEditorConfig",
     "multiple": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DropDownCellEditor.html#attribute_multiple",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-edit"
      }
     }
    },
    "CheckboxCellEditorConfig": {
     "!proto": "config.A.BaseOptionsCellEditorConfig",
     "selectedAttrName": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.CheckboxCellEditor.html#attribute_selectedAttrName",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-edit"
      }
     }
    },
    "DateCellEditorConfig": {
     "!proto": "config.A.BaseCellEditorConfig",
     "bodyContent": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DateCellEditor.html#attribute_bodyContent",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-edit"
      }
     },
     "calendar": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DateCellEditor.html#attribute_calendar",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-edit"
      }
     },
     "dateFormat": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DateCellEditor.html#attribute_dateFormat",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-edit"
      }
     },
     "inputFormatter": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DateCellEditor.html#attribute_inputFormatter",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-edit"
      }
     },
     "outputFormatter": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DateCellEditor.html#attribute_outputFormatter",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-edit"
      }
     }
    },
    "DataTableHighlightConfig": {
     "!proto": "config.Plugin.BaseConfig",
     "activeBorderWidth": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTableHighlight.html#attribute_activeBorderWidth",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-highlight"
      }
     },
     "overlayActiveNode": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTableHighlight.html#attribute_overlayActiveNode",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-highlight"
      }
     },
     "overlayNode": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTableHighlight.html#attribute_overlayNode",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-highlight"
      }
     },
     "highlightRange": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTableHighlight.html#attribute_highlightRange",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-highlight"
      }
     },
     "rangeBorderWidth": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTableHighlight.html#attribute_rangeBorderWidth",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-highlight"
      }
     },
     "type": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTableHighlight.html#attribute_type",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-highlight"
      }
     }
    },
    "PropertyListConfig": {
     "!proto": "config.DataTableConfig",
     "columns": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.PropertyList.html#attribute_columns",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-property-list"
      }
     },
     "scrollable": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.PropertyList.html#attribute_scrollable",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-property-list"
      }
     },
     "editEvent": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.PropertyList.html#attribute_editEvent",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-property-list"
      }
     },
     "width": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.PropertyList.html#attribute_width",
      "!doc": "TODO. Wanna help? Please send a Pull Request.\n\nDataTable scroll breaks when width value is a number\nSee http://yuilibrary.com/projects/yui3/ticket/2532600",
      "!data": {
       "submodule": "aui-datatable-property-list"
      }
     },
     "strings": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.PropertyList.html#attribute_strings",
      "!doc": "Colection of strings used to label elements of the UI.",
      "!data": {
       "submodule": "aui-datatable-property-list"
      }
     }
    },
    "DataTableSelectionConfig": {
     "activeCell": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTableSelection.html#attribute_activeCell",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-selection"
      }
     },
     "activeCoord": {
      "!type": "[?]",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTableSelection.html#attribute_activeCoord",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-selection"
      }
     },
     "activeRow": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTableSelection.html#attribute_activeRow",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-selection"
      }
     },
     "selection": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTableSelection.html#attribute_selection",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-selection"
      }
     },
     "tabIndex": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTableSelection.html#attribute_tabIndex",
      "!doc": "TODO. Wanna help? Please send a Pull Request.",
      "!data": {
       "submodule": "aui-datatable-selection"
      }
     }
    },
    "DatePickerDelegateConfig": {
     "activeInput": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerDelegate.html#attribute_activeInput",
      "!doc": "The active input element that holds the calendar instance.",
      "!data": {
       "submodule": "aui-datepicker-delegate"
      }
     },
     "container": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerDelegate.html#attribute_container",
      "!doc": "Contains an element.",
      "!data": {
       "submodule": "aui-datepicker-delegate"
      }
     },
     "dateSeparator": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerDelegate.html#attribute_dateSeparator",
      "!doc": "Character that separate dates.",
      "!data": {
       "submodule": "aui-datepicker-delegate"
      }
     },
     "mask": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerDelegate.html#attribute_mask",
      "!doc": "Defines the date format.",
      "!data": {
       "submodule": "aui-datepicker-delegate"
      }
     },
     "trigger": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerDelegate.html#attribute_trigger",
      "!doc": "Stores a trigger.",
      "!data": {
       "submodule": "aui-datepicker-delegate"
      }
     },
     "valueExtractor": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerDelegate.html#attribute_valueExtractor",
      "!doc": "Extracts a value from a function.",
      "!data": {
       "submodule": "aui-datepicker-delegate"
      }
     },
     "valueFormatter": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerDelegate.html#attribute_valueFormatter",
      "!doc": "Formats a value from a function.",
      "!data": {
       "submodule": "aui-datepicker-delegate"
      }
     }
    },
    "DatePickerNativeBaseConfig": {
     "nativeMask": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerNativeBase.html#attribute_nativeMask",
      "!doc": "Defines the native date mask.",
      "!data": {
       "submodule": "aui-datepicker-native"
      }
     },
     "nativeType": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerNativeBase.html#attribute_nativeType",
      "!doc": "Defines the type attribute in an HTML element.",
      "!data": {
       "submodule": "aui-datepicker-native"
      }
     }
    },
    "DatePickerPopoverConfig": {
     "autoHide": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerPopover.html#attribute_autoHide",
      "!doc": "Sets the initial visibility.",
      "!data": {
       "submodule": "aui-datepicker-popover"
      }
     },
     "popover": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerPopover.html#attribute_popover",
      "!doc": "Stores the configuration of the `Popover` instance.",
      "!data": {
       "submodule": "aui-datepicker-popover"
      }
     },
     "popoverCssClass": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerPopover.html#attribute_popoverCssClass",
      "!doc": "Defines the CSS classname of the `Popover`.",
      "!data": {
       "submodule": "aui-datepicker-popover"
      }
     }
    },
    "DatePickerBaseConfig": {
     "calendar": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerBase.html#attribute_calendar",
      "!doc": "Stores the configuration of the `Calendar` instance."
     },
     "autoHide": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerBase.html#attribute_autoHide",
      "!doc": "Sets the initial visibility."
     },
     "panes": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerBase.html#attribute_panes",
      "!doc": "Defines how many panes should be rendered."
     }
    },
    "AvailableFieldConfig": {
     "!proto": "config.BaseConfig",
     "draggable": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AvailableField.html#attribute_draggable",
      "!doc": "Defines if the field is draggable or not.",
      "!data": {
       "submodule": "aui-diagram-builder-base"
      }
     },
     "label": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AvailableField.html#attribute_label",
      "!doc": "The descriptor of a field.",
      "!data": {
       "submodule": "aui-diagram-builder-base"
      }
     },
     "iconClass": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AvailableField.html#attribute_iconClass",
      "!doc": "The CSS class name used in the icon.",
      "!data": {
       "submodule": "aui-diagram-builder-base"
      }
     },
     "id": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AvailableField.html#attribute_id",
      "!doc": "The identifier of a field.",
      "!data": {
       "submodule": "aui-diagram-builder-base"
      }
     },
     "node": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AvailableField.html#attribute_node",
      "!doc": "The node used in a field.",
      "!data": {
       "submodule": "aui-diagram-builder-base"
      }
     },
     "type": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AvailableField.html#attribute_type",
      "!doc": "The type of a field.",
      "!data": {
       "submodule": "aui-diagram-builder-base"
      }
     }
    },
    "FieldSupportConfig": {
     "fields": {
      "!type": "[?]",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FieldSupport.html#attribute_fields",
      "!doc": "The collection of fields.",
      "!data": {
       "submodule": "aui-diagram-builder-base"
      }
     },
     "maxFields": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FieldSupport.html#attribute_maxFields",
      "!doc": "Defines the maximum number of fields.",
      "!data": {
       "submodule": "aui-diagram-builder-base"
      }
     }
    },
    "DiagramBuilderBaseConfig": {
     "!proto": "config.A.ComponentConfig",
     "availableFields": {
      "!type": "[?]",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilderBase.html#attribute_availableFields",
      "!doc": "List of available fields.",
      "!data": {
       "submodule": "aui-diagram-builder-base"
      }
     },
     "availableFieldsDragConfig": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilderBase.html#attribute_availableFieldsDragConfig",
      "!doc": "The configuration object for draggable available fields.",
      "!data": {
       "submodule": "aui-diagram-builder-base"
      }
     },
     "canvas": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilderBase.html#attribute_canvas",
      "!doc": "A node created using the `CANVAS_TEMPLATE` template.",
      "!data": {
       "submodule": "aui-diagram-builder-base"
      }
     },
     "dropConfig": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilderBase.html#attribute_dropConfig",
      "!doc": "The configuration object for drop container node.",
      "!data": {
       "submodule": "aui-diagram-builder-base"
      }
     },
     "contentContainer": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilderBase.html#attribute_contentContainer",
      "!doc": "Host node for content created using the `CONTENT_CONTAINER_TEMPLATE`\ntemplate.",
      "!data": {
       "submodule": "aui-diagram-builder-base"
      }
     },
     "dropContainer": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilderBase.html#attribute_dropContainer",
      "!doc": "Host node for drop created using the `DROP_CONTAINER_TEMPLATE`\ntemplate.",
      "!data": {
       "submodule": "aui-diagram-builder-base"
      }
     },
     "fieldsContainer": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilderBase.html#attribute_fieldsContainer",
      "!doc": "Host node for fields created using the `FIELDS_CONTAINER_TEMPLATE`\ntemplate.",
      "!data": {
       "submodule": "aui-diagram-builder-base"
      }
     },
     "propertyList": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilderBase.html#attribute_propertyList",
      "!doc": "Stores an instance of `A.PropertyList`.",
      "!data": {
       "submodule": "aui-diagram-builder-base"
      }
     },
     "strings": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilderBase.html#attribute_strings",
      "!doc": "Collection of strings used to label elements of the UI.",
      "!data": {
       "submodule": "aui-diagram-builder-base"
      }
     },
     "tabView": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilderBase.html#attribute_tabView",
      "!doc": "Stores an instance of `A.TabView`.",
      "!data": {
       "submodule": "aui-diagram-builder-base"
      }
     },
     "toolbar": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilderBase.html#attribute_toolbar",
      "!doc": "Stores an instance of `A.Toolbar`.",
      "!data": {
       "submodule": "aui-diagram-builder-base"
      }
     },
     "toolbarContainer": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilderBase.html#attribute_toolbarContainer",
      "!doc": "Host node for toolbar created using the `TOOLBAR_CONTAINER_TEMPLATE`\ntemplate.",
      "!data": {
       "submodule": "aui-diagram-builder-base"
      }
     }
    },
    "ConnectorConfig": {
     "!proto": "config.BaseConfig",
     "coord": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#attribute_coord",
      "!doc": "Converts a coordinate to X and Y positions.",
      "!data": {
       "submodule": "aui-diagram-builder-connector"
      }
     },
     "arrowPoints": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#attribute_arrowPoints",
      "!doc": "Arrow points from `A.PolygonUtil` instance.",
      "!data": {
       "submodule": "aui-diagram-builder-connector"
      }
     },
     "builder": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#attribute_builder",
      "!doc": "Stores an instance of `A.DiagramBuilder`.",
      "!data": {
       "submodule": "aui-diagram-builder-connector"
      }
     },
     "color": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#attribute_color",
      "!doc": "The color used in the connector.",
      "!data": {
       "submodule": "aui-diagram-builder-connector"
      }
     },
     "graphic": {
      "!type": "+graphics.Graphic",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#attribute_graphic",
      "!doc": "Graphic used to represent the connector.",
      "!data": {
       "submodule": "aui-diagram-builder-connector"
      }
     },
     "lazyDraw": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#attribute_lazyDraw",
      "!doc": "Determine if the draw should be delayed or not.",
      "!data": {
       "submodule": "aui-diagram-builder-connector"
      }
     },
     "name": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#attribute_name",
      "!doc": "The name of the connector.",
      "!data": {
       "submodule": "aui-diagram-builder-connector"
      }
     },
     "nodeName": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#attribute_nodeName",
      "!doc": "The connector node name.",
      "!data": {
       "submodule": "aui-diagram-builder-connector"
      }
     },
     "p1": {
      "!type": "[?]",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#attribute_p1",
      "!doc": "Origin connector position.",
      "!data": {
       "submodule": "aui-diagram-builder-connector"
      }
     },
     "p2": {
      "!type": "[?]",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#attribute_p2",
      "!doc": "Destination connector position.",
      "!data": {
       "submodule": "aui-diagram-builder-connector"
      }
     },
     "selected": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#attribute_selected",
      "!doc": "Checks if a connector is selected or not.",
      "!data": {
       "submodule": "aui-diagram-builder-connector"
      }
     },
     "shape": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#attribute_shape",
      "!doc": "Graphic used to represent the connectors shape.",
      "!data": {
       "submodule": "aui-diagram-builder-connector"
      }
     },
     "shapeArrow": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#attribute_shapeArrow",
      "!doc": "Graphic used to represent the connectors shape arrow.",
      "!data": {
       "submodule": "aui-diagram-builder-connector"
      }
     },
     "shapeArrowHover": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#attribute_shapeArrowHover",
      "!doc": "Collection of styles applied when mouse is over the shape arrow.",
      "!data": {
       "submodule": "aui-diagram-builder-connector"
      }
     },
     "shapeArrowSelected": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#attribute_shapeArrowSelected",
      "!doc": "Collection of styles applied when shape arrow is selected.",
      "!data": {
       "submodule": "aui-diagram-builder-connector"
      }
     },
     "shapeHover": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#attribute_shapeHover",
      "!doc": "Collection of styles applied when mouse is over the shape.",
      "!data": {
       "submodule": "aui-diagram-builder-connector"
      }
     },
     "shapeSelected": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#attribute_shapeSelected",
      "!doc": "Collection of styles applied when shape is selected.",
      "!data": {
       "submodule": "aui-diagram-builder-connector"
      }
     },
     "showName": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#attribute_showName",
      "!doc": "Sets the visibility of the connector name.",
      "!data": {
       "submodule": "aui-diagram-builder-connector"
      }
     },
     "transition": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#attribute_transition",
      "!doc": "Stores the uid, source and target data from a connector.",
      "!data": {
       "submodule": "aui-diagram-builder-connector"
      }
     },
     "visible": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#attribute_visible",
      "!doc": "Indicates whether or not the connector is visible.",
      "!data": {
       "submodule": "aui-diagram-builder-connector"
      }
     }
    },
    "DiagramBuilderConfig": {
     "!proto": "config.A.DiagramBuilderBaseConfig",
     "connector": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#attribute_connector",
      "!doc": "Stores an instance of `A.Connector`.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "fieldsDragConfig": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#attribute_fieldsDragConfig",
      "!doc": "Configuration object for draggable fields.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "graphic": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#attribute_graphic",
      "!doc": "Stores an instance of `A.Graphic`.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "highlightDropZones": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#attribute_highlightDropZones",
      "!doc": "Checks if the drop zones should be highlighted or not.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "strings": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#attribute_strings",
      "!doc": "Collection of strings used to label elements of the UI.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "showSuggestConnector": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#attribute_showSuggestConnector",
      "!doc": "Checks if a connector suggestion is visible or not.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "suggestConnectorOverlay": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#attribute_suggestConnectorOverlay",
      "!doc": "Stores an instance of `A.Overlay` used in the connector suggestion.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     }
    },
    "DiagramNodeConfig": {
     "!proto": "config.OverlayConfig",
     "builder": {
      "!type": "+DiagramBuilder",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#attribute_builder",
      "!doc": "Stores an instance of `A.DiagramBuilderBase`.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "connectors": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#attribute_connectors",
      "!doc": "A map of connectors.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "controlsToolbar": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#attribute_controlsToolbar",
      "!doc": "A toolbar to represent controls.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "description": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#attribute_description",
      "!doc": "The description of the node.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "graphic": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#attribute_graphic",
      "!doc": "Stores an instance of `A.Graphic`.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "height": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#attribute_height",
      "!doc": "The height of the node.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "highlighted": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#attribute_highlighted",
      "!doc": "Checks if a node is highlighted or not.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "name": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#attribute_name",
      "!doc": "The name of the node.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "required": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#attribute_required",
      "!doc": "Checks if a node is required or not.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "selected": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#attribute_selected",
      "!doc": "Checks if a node is selected or not.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "shapeBoundary": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#attribute_shapeBoundary",
      "!doc": "A graphic shape to represent a boundary.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "highlightBoundaryStroke": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#attribute_highlightBoundaryStroke",
      "!doc": "Represents a stroke to highlight a boundary.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "shapeInvite": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#attribute_shapeInvite",
      "!doc": "Configuration object to generate the shape invite graphic.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "strings": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#attribute_strings",
      "!doc": "Collection of strings used to label elements of the UI.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "tabIndex": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#attribute_tabIndex",
      "!doc": "Specify the tab order of elements.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "transitions": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#attribute_transitions",
      "!doc": "Map of transitions that stores the uid, source and target data from\nconnectors.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "type": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#attribute_type",
      "!doc": "The type of the node.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "width": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#attribute_width",
      "!doc": "The width of the node.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "zIndex": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#attribute_zIndex",
      "!doc": "Specify the stack order of elements.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     }
    },
    "DiagramNodeStateConfig": {
     "!proto": "config.A.DiagramNodeConfig",
     "height": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeState.html#attribute_height",
      "!doc": "The height of the node.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "type": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeState.html#attribute_type",
      "!doc": "The type of the node.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "width": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeState.html#attribute_width",
      "!doc": "The width of the node.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     }
    },
    "DiagramNodeConditionConfig": {
     "!proto": "config.A.DiagramNodeStateConfig",
     "height": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeCondition.html#attribute_height",
      "!doc": "The height of the node.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "type": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeCondition.html#attribute_type",
      "!doc": "The type of the node.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "width": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeCondition.html#attribute_width",
      "!doc": "The width of the node.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     }
    },
    "DiagramNodeStartConfig": {
     "!proto": "config.A.DiagramNodeStateConfig",
     "type": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeStart.html#attribute_type",
      "!doc": "The type of the node.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     }
    },
    "DiagramNodeEndConfig": {
     "!proto": "config.A.DiagramNodeStateConfig",
     "type": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeEnd.html#attribute_type",
      "!doc": "The type of the node.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     }
    },
    "DiagramNodeJoinConfig": {
     "!proto": "config.A.DiagramNodeStateConfig",
     "height": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeJoin.html#attribute_height",
      "!doc": "The height of the node.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "type": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeJoin.html#attribute_type",
      "!doc": "The type of the node.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "width": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeJoin.html#attribute_width",
      "!doc": "The width of the node.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     }
    },
    "DiagramNodeForkConfig": {
     "!proto": "config.A.DiagramNodeStateConfig",
     "height": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeFork.html#attribute_height",
      "!doc": "The height of the node.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "type": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeFork.html#attribute_type",
      "!doc": "The type of the node.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "width": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeFork.html#attribute_width",
      "!doc": "The width of the node.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     }
    },
    "DiagramNodeTaskConfig": {
     "!proto": "config.A.DiagramNodeStateConfig",
     "height": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeTask.html#attribute_height",
      "!doc": "The height of the node.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "type": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeTask.html#attribute_type",
      "!doc": "The type of the node.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     },
     "width": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeTask.html#attribute_width",
      "!doc": "The width of the node.",
      "!data": {
       "submodule": "aui-diagram-builder-impl"
      }
     }
    },
    "FormBuilderAvailableFieldConfig": {
     "!proto": "config.A.AvailableFieldConfig",
     "hiddenAttributes": {
      "!type": "[?]",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderAvailableField.html#attribute_hiddenAttributes",
      "!doc": "List of hidden attributes.",
      "!data": {
       "submodule": "aui-form-builder-base"
      }
     },
     "name": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderAvailableField.html#attribute_name",
      "!doc": "The name of the input field.",
      "!data": {
       "submodule": "aui-form-builder-base"
      }
     },
     "options": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderAvailableField.html#attribute_options",
      "!doc": "Collection of options.",
      "!data": {
       "submodule": "aui-form-builder-base"
      }
     },
     "predefinedValue": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderAvailableField.html#attribute_predefinedValue",
      "!doc": "Specifies a predefined value for the input field.",
      "!data": {
       "submodule": "aui-form-builder-base"
      }
     },
     "readOnlyAttributes": {
      "!type": "[?]",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderAvailableField.html#attribute_readOnlyAttributes",
      "!doc": "List of read-only input fields.",
      "!data": {
       "submodule": "aui-form-builder-base"
      }
     },
     "required": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderAvailableField.html#attribute_required",
      "!doc": "Checks if an input field is required. In other words, it needs\ncontent to be valid.",
      "!data": {
       "submodule": "aui-form-builder-base"
      }
     },
     "showLabel": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderAvailableField.html#attribute_showLabel",
      "!doc": "If `true` the label is showed.",
      "!data": {
       "submodule": "aui-form-builder-base"
      }
     },
     "tip": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderAvailableField.html#attribute_tip",
      "!doc": "Hint to help the user to fill the input field.",
      "!data": {
       "submodule": "aui-form-builder-base"
      }
     },
     "unique": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderAvailableField.html#attribute_unique",
      "!doc": "Checks if the input field is unique or not.",
      "!data": {
       "submodule": "aui-form-builder-base"
      }
     },
     "width": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderAvailableField.html#attribute_width",
      "!doc": "The width of the input field.",
      "!data": {
       "submodule": "aui-form-builder-base"
      }
     }
    },
    "FormBuilderConfig": {
     "!proto": "config.A.DiagramBuilderBaseConfig",
     "allowRemoveRequiredFields": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilder.html#attribute_allowRemoveRequiredFields",
      "!doc": "Checks if removing required fields is permitted or not.",
      "!data": {
       "submodule": "aui-form-builder-base"
      }
     },
     "enableEditing": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilder.html#attribute_enableEditing",
      "!doc": "Enables a field to be editable.",
      "!data": {
       "submodule": "aui-form-builder-base"
      }
     },
     "fieldsSortableListConfig": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilder.html#attribute_fieldsSortableListConfig",
      "!doc": "Collection of sortable fields.",
      "!data": {
       "submodule": "aui-form-builder-base"
      }
     },
     "strings": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilder.html#attribute_strings",
      "!doc": "Collection of strings used to label elements of the UI.",
      "!data": {
       "submodule": "aui-form-builder-base"
      }
     }
    },
    "FormBuilderFieldConfig": {
     "!proto": "config.A.FormBuilderFieldBaseConfig",
     "acceptChildren": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_acceptChildren",
      "!doc": "If `true` children are accepted.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "builder": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_builder",
      "!doc": "The `A.FormBuilder` instance.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "controlsToolbar": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_controlsToolbar",
      "!doc": "Collection of toolbar controls.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "dataType": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_dataType",
      "!doc": "Indicates which is the type of data for the input field.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "disabled": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_disabled",
      "!doc": "Checks if the input field is disabled or not.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "selected": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_selected",
      "!doc": "Checks if the input field is selected or not.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "hiddenAttributes": {
      "!type": "[?]",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_hiddenAttributes",
      "!doc": "List of hidden attributes.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "id": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_id",
      "!doc": "The id of the input field.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "label": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_label",
      "!doc": "The label of the input field.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "localizationMap": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_localizationMap",
      "!doc": "Collection for content localization.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "name": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_name",
      "!doc": "The name of the input field.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "parent": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_parent",
      "!doc": "Container for the field parent.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "predefinedValue": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_predefinedValue",
      "!doc": "Specifies a predefined value for the input field.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "readOnly": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_readOnly",
      "!doc": "Checks if an input field is read-only.\nIn other words, it cannot be modified.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "readOnlyAttributes": {
      "!type": "[?]",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_readOnlyAttributes",
      "!doc": "List of read-only input fields.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "required": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_required",
      "!doc": "Checks if an input field is required.\nIn other words, it needs content to be valid.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "showLabel": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_showLabel",
      "!doc": "If `true` the label is showed.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "strings": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_strings",
      "!doc": "Collection of strings used to label elements of the UI.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "tabIndex": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_tabIndex",
      "!doc": "Specify the tab order.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "template": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_template",
      "!doc": "Reusable block of markup used to generate the field.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "tip": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_tip",
      "!doc": "Hint to help the user to fill the input field.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "type": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_type",
      "!doc": "Defines the type of field.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "unique": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_unique",
      "!doc": "Checks if the input field is unique or not.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "zIndex": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_zIndex",
      "!doc": "Stack order of the field. An element with greater stack order is\nalways in front of an element with a lower stack order.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "dropZoneNode": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_dropZoneNode",
      "!doc": "Node used to generate the drop zone.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "labelNode": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_labelNode",
      "!doc": "Node used to generate a label.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "requiredFlagNode": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_requiredFlagNode",
      "!doc": "Node used to generate the required flag.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "templateNode": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_templateNode",
      "!doc": "Node used to generate a template.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     },
     "tipFlagNode": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#attribute_tipFlagNode",
      "!doc": "Node used to generate a tip.",
      "!data": {
       "submodule": "aui-form-builder-field-base"
      }
     }
    },
    "FormBuilderButtonFieldConfig": {
     "!proto": "config.A.FormBuilderFieldConfig",
     "acceptChildren": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderButtonField.html#attribute_acceptChildren",
      "!doc": "If `true` children are accepted.",
      "!data": {
       "submodule": "aui-form-builder-field-button"
      }
     },
     "buttonType": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderButtonField.html#attribute_buttonType",
      "!doc": "Defines the button type attribute, e.g. `type=\"reset\"`.",
      "!data": {
       "submodule": "aui-form-builder-field-button"
      }
     },
     "predefinedValue": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderButtonField.html#attribute_predefinedValue",
      "!doc": "Specifies a predefined value for the button field.",
      "!data": {
       "submodule": "aui-form-builder-field-button"
      }
     },
     "showLabel": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderButtonField.html#attribute_showLabel",
      "!doc": "If `true` the label is showed.",
      "!data": {
       "submodule": "aui-form-builder-field-button"
      }
     },
     "template": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderButtonField.html#attribute_template",
      "!doc": "Reusable block of markup used to generate the field.",
      "!data": {
       "submodule": "aui-form-builder-field-button"
      }
     }
    },
    "FormBuilderCheckBoxFieldConfig": {
     "!proto": "config.A.FormBuilderFieldConfig",
     "dataType": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderCheckBoxField.html#attribute_dataType",
      "!doc": "Indicates which is the type of data for the input field.",
      "!data": {
       "submodule": "aui-form-builder-field-checkbox"
      }
     },
     "predefinedValue": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderCheckBoxField.html#attribute_predefinedValue",
      "!doc": "Specifies a predefined value for the checkbox field.",
      "!data": {
       "submodule": "aui-form-builder-field-checkbox"
      }
     },
     "template": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderCheckBoxField.html#attribute_template",
      "!doc": "Reusable block of markup used to generate the field.",
      "!data": {
       "submodule": "aui-form-builder-field-checkbox"
      }
     }
    },
    "FormBuilderFieldsetFieldConfig": {
     "!proto": "config.A.FormBuilderFieldConfig",
     "acceptChildren": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderFieldsetField.html#attribute_acceptChildren",
      "!doc": "If `true` children are accepted.",
      "!data": {
       "submodule": "aui-form-builder-field-fieldset"
      }
     },
     "dataType": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderFieldsetField.html#attribute_dataType",
      "!doc": "Indicates which is the type of data for the input field.",
      "!data": {
       "submodule": "aui-form-builder-field-fieldset"
      }
     },
     "labelNode": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderFieldsetField.html#attribute_labelNode",
      "!doc": "Markup used to generate a label.",
      "!data": {
       "submodule": "aui-form-builder-field-fieldset"
      }
     },
     "template": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderFieldsetField.html#attribute_template",
      "!doc": "Reusable block of markup used to generate the field.",
      "!data": {
       "submodule": "aui-form-builder-field-fieldset"
      }
     }
    },
    "FormBuilderFileUploadFieldConfig": {
     "!proto": "config.A.FormBuilderFieldConfig",
     "template": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderFileUploadField.html#attribute_template",
      "!doc": "Reusable block of markup used to generate the field.",
      "!data": {
       "submodule": "aui-form-builder-field-upload"
      }
     }
    },
    "OptionsEditorConfig": {
     "!proto": "config.A.RadioCellEditorConfig",
     "editable": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.OptionsEditor.html#attribute_editable",
      "!doc": "Defines if a field is editable.",
      "!data": {
       "submodule": "aui-form-builder-field-multiple-choice"
      }
     }
    },
    "FormBuilderMultipleChoiceFieldConfig": {
     "!proto": "config.A.FormBuilderFieldConfig",
     "acceptChildren": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderMultipleChoiceField.html#attribute_acceptChildren",
      "!doc": "If `true` children are accepted.",
      "!data": {
       "submodule": "aui-form-builder-field-multiple-choice"
      }
     },
     "options": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderMultipleChoiceField.html#attribute_options",
      "!doc": "Collection of options. Each option is made of a label and value.",
      "!data": {
       "submodule": "aui-form-builder-field-multiple-choice"
      }
     },
     "optionTemplate": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderMultipleChoiceField.html#attribute_optionTemplate",
      "!doc": "Markup used to generate each item from `options` attribute.",
      "!data": {
       "submodule": "aui-form-builder-field-multiple-choice"
      }
     },
     "predefinedValue": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderMultipleChoiceField.html#attribute_predefinedValue",
      "!doc": "Specifies a predefined value for the multiple choice field.",
      "!data": {
       "submodule": "aui-form-builder-field-multiple-choice"
      }
     }
    },
    "FormBuilderRadioFieldConfig": {
     "!proto": "config.A.FormBuilderMultipleChoiceFieldConfig",
     "predefinedValue": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderRadioField.html#attribute_predefinedValue",
      "!doc": "Specifies a predefined value for the radio field.",
      "!data": {
       "submodule": "aui-form-builder-field-radio"
      }
     },
     "template": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderRadioField.html#attribute_template",
      "!doc": "Reusable block of markup used to generate the field.",
      "!data": {
       "submodule": "aui-form-builder-field-radio"
      }
     }
    },
    "FormBuilderSelectFieldConfig": {
     "!proto": "config.A.FormBuilderMultipleChoiceFieldConfig",
     "multiple": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderSelectField.html#attribute_multiple",
      "!doc": "Checks if the drop-down list allows multiple selections.",
      "!data": {
       "submodule": "aui-form-builder-field-select"
      }
     },
     "template": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderSelectField.html#attribute_template",
      "!doc": "Reusable block of markup used to generate the field.",
      "!data": {
       "submodule": "aui-form-builder-field-select"
      }
     }
    },
    "FormBuilderTextFieldConfig": {
     "!proto": "config.A.FormBuilderFieldConfig",
     "template": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderTextField.html#attribute_template",
      "!doc": "Reusable block of markup used to generate the field.",
      "!data": {
       "submodule": "aui-form-builder-field-text"
      }
     },
     "width": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderTextField.html#attribute_width",
      "!doc": "The width of the input field.",
      "!data": {
       "submodule": "aui-form-builder-field-text"
      }
     }
    },
    "FormBuilderTextAreaFieldConfig": {
     "!proto": "config.A.FormBuilderTextFieldConfig",
     "template": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderTextAreaField.html#attribute_template",
      "!doc": "Reusable block of markup used to generate the field.",
      "!data": {
       "submodule": "aui-form-builder-field-textarea"
      }
     }
    },
    "FormValidatorConfig": {
     "!proto": "config.BaseConfig",
     "boundingBox": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#attribute_boundingBox",
      "!doc": "The widgets outermost node, used for sizing and positioning."
     },
     "containerErrorClass": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#attribute_containerErrorClass",
      "!doc": "Container for the CSS error class."
     },
     "containerValidClass": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#attribute_containerValidClass",
      "!doc": "Container for the CSS valid class."
     },
     "errorClass": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#attribute_errorClass",
      "!doc": "Defines the CSS error class."
     },
     "extractRules": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#attribute_extractRules",
      "!doc": "If `true` the validation rules are extracted from the DOM."
     },
     "fieldContainer": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#attribute_fieldContainer",
      "!doc": "Container for a field."
     },
     "fieldStrings": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#attribute_fieldStrings",
      "!doc": "Collection of strings used on a field."
     },
     "labelCssClass": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#attribute_labelCssClass",
      "!doc": "The CSS class for `<label>`."
     },
     "messageContainer": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#attribute_messageContainer",
      "!doc": "Container for the form message."
     },
     "strings": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#attribute_strings",
      "!doc": "Collection of strings used to label elements of the UI."
     },
     "rules": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#attribute_rules",
      "!doc": "Collection of rules to validate fields."
     },
     "selectText": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#attribute_selectText",
      "!doc": "Defines if the text will be selected or not after validation."
     },
     "showMessages": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#attribute_showMessages",
      "!doc": "Defines if the validation messages will be showed or not."
     },
     "showAllMessages": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#attribute_showAllMessages",
      "!doc": "Defines if all validation messages will be showed or not."
     },
     "stackErrorContainer": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#attribute_stackErrorContainer",
      "!doc": "Defines a container for the stack errors."
     },
     "validateOnBlur": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#attribute_validateOnBlur",
      "!doc": "If `true` the field will be validated on blur event."
     },
     "validateOnInput": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#attribute_validateOnInput",
      "!doc": "If `true` the field will be validated on input event."
     },
     "validClass": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#attribute_validClass",
      "!doc": "Defines the CSS valid class."
     }
    },
    "ImageCropperConfig": {
     "!proto": "config.A.ComponentConfig",
     "cropHeight": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageCropper.html#attribute_cropHeight",
      "!doc": "The height of a selected area to crop."
     },
     "cropWidth": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageCropper.html#attribute_cropWidth",
      "!doc": "The width of a selected area to crop."
     },
     "minWidth": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageCropper.html#attribute_minWidth",
      "!doc": "The minimum width of a selected area to crop."
     },
     "minHeight": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageCropper.html#attribute_minHeight",
      "!doc": "The minimum height of a selected area to crop."
     },
     "movable": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageCropper.html#attribute_movable",
      "!doc": "Determine if the crop area should move or not."
     },
     "preserveRatio": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageCropper.html#attribute_preserveRatio",
      "!doc": "Determine if the crop area should preserve the\naspect ratio or not."
     },
     "region": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageCropper.html#attribute_region",
      "!doc": "Determine the region of a selected area to crop."
     },
     "resizable": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageCropper.html#attribute_resizable",
      "!doc": "Determine if the crop area should resize or not."
     },
     "x": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageCropper.html#attribute_x",
      "!doc": "The X position of a selected area to crop."
     },
     "y": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageCropper.html#attribute_y",
      "!doc": "The Y position of a selected area to crop."
     }
    },
    "ImageViewerConfig": {
     "!proto": "config.WidgetConfig",
     "anim": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_anim",
      "!doc": "If `true` the navigation is animated.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "bodyContent": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_bodyContent",
      "!doc": "The content of body.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "caption": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_caption",
      "!doc": "The caption of the displayed image.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "captionFromTitle": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_captionFromTitle",
      "!doc": "If `true` the [caption](A.ImageViewer.html#attr_caption) will be\npulled from the title DOM attribute.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "centered": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_centered",
      "!doc": "If `true` the Overlay with the image will be positioned\non the center of the viewport.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "currentIndex": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_currentIndex",
      "!doc": "Index of the current image.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "image": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_image",
      "!doc": "Image node element used to load the images.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "imageAnim": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_imageAnim",
      "!doc": "Configuration attributes passed to the [Anim](Anim.html) class.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "infoTemplate": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_infoTemplate",
      "!doc": "String template used to display the information.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "links": {
      "!type": "string|+dom.NodeList",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_links",
      "!doc": "Selector or NodeList containing the links where the\n`A.ImageViewer` extracts the information to generate the\nthumbnails.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "loading": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_loading",
      "!doc": "Whether the image is during a loading state.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "modal": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_modal",
      "!doc": "Displays the modal the viewport. Set to `false` to disable.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "preloadAllImages": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_preloadAllImages",
      "!doc": "Preloads the neighbor image (i.e., the previous and next image\nbased on the current load one).",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "showClose": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_showClose",
      "!doc": "Shows close icon control.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "showControls": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_showControls",
      "!doc": "Shows the controls.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "tabIndex": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_tabIndex",
      "!doc": "Specify the tab order of elements.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "totalLinks": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_totalLinks",
      "!doc": "Helper attribute to get the `size` of the\n[links](A.ImageViewer.html#attr_links) NodeList.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "visible": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_visible",
      "!doc": "Determines if the `A.ImageViewer` should be visible or not.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "zIndex": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_zIndex",
      "!doc": "Specify the stack order of elements.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "controlLeftEl": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_controlLeftEl",
      "!doc": "The element to be used as left control.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "controlRightEl": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_controlRightEl",
      "!doc": "The element to be used as right control.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "captionEl": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_captionEl",
      "!doc": "The element to be used as caption.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "closeEl": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_closeEl",
      "!doc": "The element to be used as close.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "infoEl": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_infoEl",
      "!doc": "The element to be used as info.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "loader": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_loader",
      "!doc": "HTML element to contain the `img` which is being loaded.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "loadingEl": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_loadingEl",
      "!doc": "The element to be used as loading.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "maxHeight": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_maxHeight",
      "!doc": "The maximum height of the element.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     },
     "maxWidth": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#attribute_maxWidth",
      "!doc": "The maximum width of the element.",
      "!data": {
       "submodule": "aui-image-viewer-base"
      }
     }
    },
    "ImageGalleryConfig": {
     "!proto": "config.A.ImageViewerConfig",
     "autoPlay": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageGallery.html#attribute_autoPlay",
      "!doc": "If `true` the slide show will be played when the\n`A.ImageGallery` is displayed.",
      "!data": {
       "submodule": "aui-image-viewer-gallery"
      }
     },
     "delay": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageGallery.html#attribute_delay",
      "!doc": "Delay in milliseconds to change to the next image.",
      "!data": {
       "submodule": "aui-image-viewer-gallery"
      }
     },
     "pagination": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageGallery.html#attribute_pagination",
      "!doc": "[A.Pagination](A.Pagination.html) configuration Object. The\n`A.Pagination` handles the thumbnails control.",
      "!data": {
       "submodule": "aui-image-viewer-gallery"
      }
     },
     "paginationEl": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageGallery.html#attribute_paginationEl",
      "!doc": "Element which contains the [A.Pagination](A.Pagination.html) with the\nthumbnails.",
      "!data": {
       "submodule": "aui-image-viewer-gallery"
      }
     },
     "paginationInstance": {
      "!type": "+aui_pagination.A.Pagination",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageGallery.html#attribute_paginationInstance",
      "!doc": "Stores the [A.Pagination](A.Pagination.html) instance.",
      "!data": {
       "submodule": "aui-image-viewer-gallery"
      }
     },
     "paused": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageGallery.html#attribute_paused",
      "!doc": "If `true` the slide show is paused.",
      "!data": {
       "submodule": "aui-image-viewer-gallery"
      }
     },
     "pausedLabel": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageGallery.html#attribute_pausedLabel",
      "!doc": "Label to display when the slide show is paused.",
      "!data": {
       "submodule": "aui-image-viewer-gallery"
      }
     },
     "playing": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageGallery.html#attribute_playing",
      "!doc": "If `true` the slide show is playing.",
      "!data": {
       "submodule": "aui-image-viewer-gallery"
      }
     },
     "playingLabel": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageGallery.html#attribute_playingLabel",
      "!doc": "Label to display when the slide show is playing.",
      "!data": {
       "submodule": "aui-image-viewer-gallery"
      }
     },
     "repeat": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageGallery.html#attribute_repeat",
      "!doc": "Restart the navigation when reach the last element.",
      "!data": {
       "submodule": "aui-image-viewer-gallery"
      }
     },
     "showPlayer": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageGallery.html#attribute_showPlayer",
      "!doc": "Shows the player controls (i.e., pause and show buttons).",
      "!data": {
       "submodule": "aui-image-viewer-gallery"
      }
     },
     "toolbar": {
      "!type": "+Toolbar constructor.",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageGallery.html#attribute_toolbar",
      "!doc": "[A.Toolbar](A.Toolbar.html) with a play, and pause buttons.",
      "!data": {
       "submodule": "aui-image-viewer-gallery"
      }
     },
     "useOriginalImage": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageGallery.html#attribute_useOriginalImage",
      "!doc": "If `true` will use the original image as thumbnails.",
      "!data": {
       "submodule": "aui-image-viewer-gallery"
      }
     }
    },
    "MediaViewerPluginConfig": {
     "!proto": "config.Plugin.BaseConfig",
     "providers": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.MediaViewerPlugin.html#attribute_providers",
      "!doc": "Contains the templates, options and definitions for each provider\n(Flash, Youtube, Vimeo)."
     }
    },
    "IORequestConfig": {
     "!proto": "config.Plugin.BaseConfig",
     "autoLoad": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.IORequest.html#attribute_autoLoad",
      "!doc": "If `true` invoke the [start](A.IORequest.html#method_start) method\nautomatically, initializing the IO transaction.",
      "!data": {
       "submodule": "aui-io-request"
      }
     },
     "cache": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.IORequest.html#attribute_cache",
      "!doc": "If `false` the current timestamp will be appended to the\nurl, avoiding the url to be cached.",
      "!data": {
       "submodule": "aui-io-request"
      }
     },
     "dataType": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.IORequest.html#attribute_dataType",
      "!doc": "The type of the request (i.e., could be xml, json, javascript, text).",
      "!data": {
       "submodule": "aui-io-request"
      }
     },
     "responseData": {
      "!type": "string|+JSONObject|+XMLDocument",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.IORequest.html#attribute_responseData",
      "!doc": "This is a normalized attribute for the response data. Its useful to\nretrieve the correct type for the\n[dataType](A.IORequest.html#attr_dataType) (i.e., in json requests\nthe `responseData`) is a JSONObject.",
      "!data": {
       "submodule": "aui-io-request"
      }
     },
     "uri": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.IORequest.html#attribute_uri",
      "!doc": "URI to be requested using AJAX.",
      "!data": {
       "submodule": "aui-io-request"
      }
     },
     "active": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.IORequest.html#attribute_active",
      "!doc": "Whether the transaction is active or not.",
      "!data": {
       "submodule": "aui-io-request"
      }
     },
     "cfg": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.IORequest.html#attribute_cfg",
      "!doc": "Object containing all the [IO Configuration Attributes](A.io.html).\nThis Object is passed to the `A.io` internally.",
      "!data": {
       "submodule": "aui-io-request"
      }
     },
     "transaction": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.IORequest.html#attribute_transaction",
      "!doc": "Stores the IO Object of the current transaction.",
      "!data": {
       "submodule": "aui-io-request"
      }
     },
     "arguments": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.IORequest.html#attribute_arguments",
      "!doc": "See [IO\nConfiguration](http://developer.yahoo.com/yui/3/io/#configuration).",
      "!data": {
       "submodule": "aui-io-request"
      }
     },
     "context": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.IORequest.html#attribute_context",
      "!doc": "See [IO\nConfiguration](http://developer.yahoo.com/yui/3/io/#configuration).",
      "!data": {
       "submodule": "aui-io-request"
      }
     },
     "data": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.IORequest.html#attribute_data",
      "!doc": "See [IO\nConfiguration](http://developer.yahoo.com/yui/3/io/#configuration).",
      "!data": {
       "submodule": "aui-io-request"
      }
     },
     "form": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.IORequest.html#attribute_form",
      "!doc": "See [IO\nConfiguration](http://developer.yahoo.com/yui/3/io/#configuration).",
      "!data": {
       "submodule": "aui-io-request"
      }
     },
     "headers": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.IORequest.html#attribute_headers",
      "!doc": "Set the correct ACCEPT header based on the dataType.",
      "!data": {
       "submodule": "aui-io-request"
      }
     },
     "method": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.IORequest.html#attribute_method",
      "!doc": "See [IO\nConfiguration](http://developer.yahoo.com/yui/3/io/#configuration).",
      "!data": {
       "submodule": "aui-io-request"
      }
     },
     "selector": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.IORequest.html#attribute_selector",
      "!doc": "A selector to be used to query against the response of the\nrequest. Only works if the response is XML or HTML.",
      "!data": {
       "submodule": "aui-io-request"
      }
     },
     "sync": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.IORequest.html#attribute_sync",
      "!doc": "See [IO\nConfiguration](http://developer.yahoo.com/yui/3/io/#configuration).",
      "!data": {
       "submodule": "aui-io-request"
      }
     },
     "timeout": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.IORequest.html#attribute_timeout",
      "!doc": "See [IO\nConfiguration](http://developer.yahoo.com/yui/3/io/#configuration).",
      "!data": {
       "submodule": "aui-io-request"
      }
     },
     "xdr": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.IORequest.html#attribute_xdr",
      "!doc": "See [IO\nConfiguration](http://developer.yahoo.com/yui/3/io/#configuration).",
      "!data": {
       "submodule": "aui-io-request"
      }
     }
    },
    "ModalConfig": {
     "!proto": "config.WidgetConfig",
     "bodyContent": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Modal.html#attribute_bodyContent",
      "!doc": "Determine the content of Modals body section.\n\nTemporary fix for widget-stdmod bug when bodyContent initializes\nempty. this._currFillNode is never updated if _uiSetFillHeight is not\ncalled."
     },
     "destroyOnHide": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Modal.html#attribute_destroyOnHide",
      "!doc": "Determine if Modal should be destroyed when hidden."
     },
     "draggable": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Modal.html#attribute_draggable",
      "!doc": "Determine if Modal should be draggable or not."
     },
     "resizable": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Modal.html#attribute_resizable",
      "!doc": "Determine if Modal should be resizable or not."
     },
     "toolbars": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Modal.html#attribute_toolbars",
      "!doc": "Determine the content of Modals header section."
     }
    },
    "PaginationConfig": {
     "!proto": "config.A.ComponentConfig",
     "circular": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Pagination.html#attribute_circular",
      "!doc": "When enabled this property allows the navigation to go back to the\nbeggining when it reaches the last page, the opposite behavior is\nalso true. Incremental page navigation could happen clicking the\ncontrol arrows or invoking `.next()` and `.prev()` methods."
     },
     "formatter": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Pagination.html#attribute_formatter",
      "!doc": "A formatter function to format each pagination item."
     },
     "items": {
      "!type": "+dom.NodeList",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Pagination.html#attribute_items",
      "!doc": "Holds the page items as a `NodeList`. The list could be queried from\nthe DOM trough Widget `HTML_PARSER` or generated if\n[total](A.Pagination.html#attr_total) is specified."
     },
     "offset": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Pagination.html#attribute_offset",
      "!doc": "Initial page offset."
     },
     "page": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Pagination.html#attribute_page",
      "!doc": "Determines if pagination controls (Next and Prev) are rendered."
     },
     "total": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Pagination.html#attribute_total",
      "!doc": "Total number of page links available. If set, the new\n[items](A.Pagination.html#attr_items) node list will be rendered."
     },
     "strings": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Pagination.html#attribute_strings",
      "!doc": "Collection of strings used to label elements of the UI."
     }
    },
    "PaletteConfig": {
     "!proto": "config.WidgetConfig",
     "columns": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Palette.html#attribute_columns",
      "!doc": "Specifies how many columns should contain the Palette. If the\nvalue is a positive number, the Palette will generate as many\ncolumns as specified in this property and it will fit the\nprovided `items` in these columns."
     },
     "containerNode": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Palette.html#attribute_containerNode",
      "!doc": "Container node of the palette. If found, palette widget will not\ngenerate content."
     },
     "formatter": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Palette.html#attribute_formatter",
      "!doc": "Provides a function, which will be used to format the content\nduring Palette creation."
     },
     "items": {
      "!type": "[?]",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Palette.html#attribute_items",
      "!doc": "An array of Palette items. These items will be rendered in the\nPalette according to the specified `columns`."
     },
     "selected": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Palette.html#attribute_selected",
      "!doc": "Provides the index of currently selected item."
     },
     "toggleSelection": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Palette.html#attribute_toggleSelection",
      "!doc": "If true, on user interaction if the user clicks on an already\nselected element, it will be unselected."
     }
    },
    "ParseContentConfig": {
     "!proto": "config.Plugin.BaseConfig",
     "queue": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ParseContent.html#attribute_queue",
      "!doc": "A queue of elements to be parsed."
     }
    },
    "PopoverConfig": {
     "!proto": "config.WidgetConfig",
     "triggerToggleEvent": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Popover.html#attribute_triggerToggleEvent",
      "!doc": "DOM event to hide the tooltip."
     }
    },
    "ProgressBarConfig": {
     "!proto": "config.A.ComponentConfig",
     "useARIA": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ProgressBar.html#attribute_useARIA",
      "!doc": "Boolean indicating if use of the WAI-ARIA Roles and States\nshould be enabled."
     },
     "height": {
      "!type": "number|string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ProgressBar.html#attribute_height",
      "!doc": "Display height of the progressbar."
     },
     "label": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ProgressBar.html#attribute_label",
      "!doc": "Display label of the progressbar. If not specified try to query\nusing HTML_PARSER an element inside boundingBox which matches\n`aui-progressbar-text` and get its innerHTML to be\nused as label."
     },
     "max": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ProgressBar.html#attribute_max",
      "!doc": "Represents the top value for the bar. The bar will be fully\nextended when reaching this value. Values higher than this will\nbe ignored."
     },
     "min": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ProgressBar.html#attribute_min",
      "!doc": "Represents the lowest value for the bar. The bar will be\ntotally collapsed when reaching this value. Values lower than\nthis will be ignored."
     },
     "orientation": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ProgressBar.html#attribute_orientation",
      "!doc": "Display orientation of the progressbar (i.e. vertical or\nhorizontal)."
     },
     "ratio": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ProgressBar.html#attribute_ratio",
      "!doc": "Calculate the ratio based on `max` and `min` values."
     },
     "step": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ProgressBar.html#attribute_step",
      "!doc": "Calculate the progressbar step based on `ratio` value."
     },
     "textNode": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ProgressBar.html#attribute_textNode",
      "!doc": "DOM Node to display the text of the progressbar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches `aui-progressbar-text`."
     },
     "value": {
      "!type": "number|string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ProgressBar.html#attribute_value",
      "!doc": "The value for the bar. Valid values are in between the minValue\nand maxValue attributes."
     }
    },
    "RatingConfig": {
     "!proto": "config.A.ComponentConfig",
     "disabled": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Rating.html#attribute_disabled",
      "!doc": "Whether the Rating is disabled or not.\nDisabled Ratings dont allow hover or click,\njust display selected stars."
     },
     "canReset": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Rating.html#attribute_canReset",
      "!doc": "If `true` could be reseted\n(i.e., have no values selected)."
     },
     "cssClasses": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Rating.html#attribute_cssClasses",
      "!doc": "CSS classes applied on Rating."
     },
     "defaultSelected": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Rating.html#attribute_defaultSelected",
      "!doc": "The number of selected starts when the Rating render."
     },
     "elements": {
      "!type": "+dom.NodeList",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Rating.html#attribute_elements",
      "!doc": "[NodeList](NodeList.html) of elements used on the\nRating. Each element is one Star."
     },
     "hiddenInput": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Rating.html#attribute_hiddenInput",
      "!doc": "Hidden input to handle the selected value. This hidden input\nreplace the radio elements and keep the same name."
     },
     "inputName": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Rating.html#attribute_inputName",
      "!doc": "Name of the [hiddenInput](A.Rating.html#attr_hiddenInput) element. If\nnot specified will use the name of the replaced radio."
     },
     "label": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Rating.html#attribute_label",
      "!doc": "Label to be displayed with the Rating elements."
     },
     "labelNode": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Rating.html#attribute_labelNode",
      "!doc": "DOM Node to display the text of the StarRating. If not\nspecified try to query using HTML_PARSER an element inside\nboundingBox which matches `aui-rating-label-element`."
     },
     "selectedIndex": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Rating.html#attribute_selectedIndex",
      "!doc": "Stores the index of the selected element."
     },
     "showTitle": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Rating.html#attribute_showTitle",
      "!doc": "If `true` will extract the value of the\n`title` attribute on the radio, and use it on the\ngenerated Rating elements."
     },
     "size": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Rating.html#attribute_size",
      "!doc": "Number of Rating elements to be displayed."
     },
     "title": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Rating.html#attribute_title",
      "!doc": "If set, will be used when there is no DOM `title` on the\nradio elements."
     },
     "value": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Rating.html#attribute_value",
      "!doc": "Stores the value of the current selected Rating element."
     }
    },
    "ThumbRatingConfig": {
     "!proto": "config.A.RatingConfig",
     "cssClasses": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ThumbRating.html#attribute_cssClasses",
      "!doc": "CSS classes applied on ThumbRating."
     },
     "size": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ThumbRating.html#attribute_size",
      "!doc": "The size on ThumbRating is always 2 (i.e., thumb up and thumb down)."
     }
    },
    "SchedulerCalendarConfig": {
     "!proto": "config.ModelListConfig",
     "color": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerCalendar.html#attribute_color",
      "!doc": "Contains the `color` of the scheduler calendar.",
      "!data": {
       "submodule": "aui-scheduler-base-calendar"
      }
     },
     "disabled": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerCalendar.html#attribute_disabled",
      "!doc": "Determines if the calender is enabled.",
      "!data": {
       "submodule": "aui-scheduler-base-calendar"
      }
     },
     "name": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerCalendar.html#attribute_name",
      "!doc": "Determines the name for this calendar.",
      "!data": {
       "submodule": "aui-scheduler-base-calendar"
      }
     },
     "palette": {
      "!type": "[?]",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerCalendar.html#attribute_palette",
      "!doc": "Contains a list of colors for the calendar.",
      "!data": {
       "submodule": "aui-scheduler-base-calendar"
      }
     },
     "scheduler": {
      "!type": "+aui_scheduler.A.SchedulerBase",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerCalendar.html#attribute_scheduler",
      "!doc": "Contains this `SchedulerCalendar`s `SchedulerBase object.",
      "!data": {
       "submodule": "aui-scheduler-base-calendar"
      }
     },
     "visible": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerCalendar.html#attribute_visible",
      "!doc": "Indicates whether the calendar is visible.",
      "!data": {
       "submodule": "aui-scheduler-base-calendar"
      }
     }
    },
    "SchedulerEventConfig": {
     "!proto": "config.ModelConfig",
     "allDay": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#attribute_allDay",
      "!doc": "Determines whether a new event will take place all day. When enabled,\nthe event will not contain 24-hour clock date inputs.",
      "!data": {
       "submodule": "aui-scheduler-base-event"
      }
     },
     "content": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#attribute_content",
      "!doc": "Contains the content of Scheduler events body section.",
      "!data": {
       "submodule": "aui-scheduler-base-event"
      }
     },
     "color": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#attribute_color",
      "!doc": "Contains the `color` of a calendar event.",
      "!data": {
       "submodule": "aui-scheduler-base-event"
      }
     },
     "colorBrightnessFactor": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#attribute_colorBrightnessFactor",
      "!doc": "Contains the color brightness factor is applied to the `color`\nattribute.",
      "!data": {
       "submodule": "aui-scheduler-base-event"
      }
     },
     "colorSaturationFactor": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#attribute_colorSaturationFactor",
      "!doc": "Contains the color saturation factor is applied to the `color`\nattribute.",
      "!data": {
       "submodule": "aui-scheduler-base-event"
      }
     },
     "titleDateFormat": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#attribute_titleDateFormat",
      "!doc": "Contains the formatted title date for this scheduler event, taking\ninto account ISO time. The value will not contain an `endDate` if\nthis event is `allDay`.",
      "!data": {
       "submodule": "aui-scheduler-base-event"
      }
     },
     "endDate": {
      "!type": "+datatype_date.Date",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#attribute_endDate",
      "!doc": "Contains the date corresponding to the current ending date of a\nscheduled event. By default, the value is one hour after the\n`startDate`.",
      "!data": {
       "submodule": "aui-scheduler-base-event"
      }
     },
     "disabled": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#attribute_disabled",
      "!doc": "Determines if the event is disabled.",
      "!data": {
       "submodule": "aui-scheduler-base-event"
      }
     },
     "meeting": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#attribute_meeting",
      "!doc": "Determines if the event is a meeting.",
      "!data": {
       "submodule": "aui-scheduler-base-event"
      }
     },
     "node": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#attribute_node",
      "!doc": "Contains the event `NodeList`.",
      "!data": {
       "submodule": "aui-scheduler-base-event"
      }
     },
     "reminder": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#attribute_reminder",
      "!doc": "Determines if the event is requires reminder.",
      "!data": {
       "submodule": "aui-scheduler-base-event"
      }
     },
     "repeated": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#attribute_repeated",
      "!doc": "Determines if the event is to be repeated.",
      "!data": {
       "submodule": "aui-scheduler-base-event"
      }
     },
     "scheduler": {
      "!type": "+aui_scheduler.A.SchedulerBase",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#attribute_scheduler",
      "!doc": "Contains this `SchedulerEvent`s `SchedulerBase object.",
      "!data": {
       "submodule": "aui-scheduler-base-event"
      }
     },
     "startDate": {
      "!type": "+datatype_date.Date",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#attribute_startDate",
      "!doc": "Contains the date corresponding to the current starting date of a\nscheduled event. By default, the value is the date set on the users\ncomputer.",
      "!data": {
       "submodule": "aui-scheduler-base-event"
      }
     },
     "visible": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#attribute_visible",
      "!doc": "Indicates whether the event is visible.",
      "!data": {
       "submodule": "aui-scheduler-base-event"
      }
     }
    },
    "SchedulerViewConfig": {
     "!proto": "config.A.ComponentConfig",
     "bodyContent": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerView.html#attribute_bodyContent",
      "!doc": "Determines the content of Scheduler views body section.",
      "!data": {
       "submodule": "aui-scheduler-base-view"
      }
     },
     "filterFn": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerView.html#attribute_filterFn",
      "!doc": "Applies a filter to `SchedulerEvent`s.",
      "!data": {
       "submodule": "aui-scheduler-base-view"
      }
     },
     "height": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerView.html#attribute_height",
      "!doc": "Contains the height of a `SchedulerView` in pixels.",
      "!data": {
       "submodule": "aui-scheduler-base-view"
      }
     },
     "isoTime": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerView.html#attribute_isoTime",
      "!doc": "Indicates whether this `SchedulerView` should use international\nstandard time.",
      "!data": {
       "submodule": "aui-scheduler-base-view"
      }
     },
     "name": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerView.html#attribute_name",
      "!doc": "Determines the name for this view.",
      "!data": {
       "submodule": "aui-scheduler-base-view"
      }
     },
     "navigationDateFormatter": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerView.html#attribute_navigationDateFormatter",
      "!doc": "Contains the function that formats the navigation date.",
      "!data": {
       "submodule": "aui-scheduler-base-view"
      }
     },
     "nextDate": {
      "!type": "+datatype_date.Date",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerView.html#attribute_nextDate",
      "!doc": "Contains the next `Date` in the `SchedulerView`.",
      "!data": {
       "submodule": "aui-scheduler-base-view"
      }
     },
     "prevDate": {
      "!type": "+datatype_date.Date",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerView.html#attribute_prevDate",
      "!doc": "Contains the previous `Date` in the `SchedulerView`.",
      "!data": {
       "submodule": "aui-scheduler-base-view"
      }
     },
     "scheduler": {
      "!type": "+aui_scheduler.A.SchedulerBase",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerView.html#attribute_scheduler",
      "!doc": "Contains this `SchedulerView`s `SchedulerBase object.",
      "!data": {
       "submodule": "aui-scheduler-base-view"
      }
     },
     "scrollable": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerView.html#attribute_scrollable",
      "!doc": "Indicates whether this `SchedulerView` is scrollable.",
      "!data": {
       "submodule": "aui-scheduler-base-view"
      }
     },
     "triggerNode": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerView.html#attribute_triggerNode",
      "!doc": "Contains the `Node` that triggers.",
      "!data": {
       "submodule": "aui-scheduler-base-view"
      }
     },
     "visible": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerView.html#attribute_visible",
      "!doc": "Indicates whether the calendar is visible.",
      "!data": {
       "submodule": "aui-scheduler-base-view"
      }
     }
    },
    "SchedulerBaseConfig": {
     "!proto": "config.A.ComponentConfig",
     "activeView": {
      "!type": "+aui_scheduler.A.SchedulerView",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerBase.html#attribute_activeView",
      "!doc": "Contains the active view.",
      "!data": {
       "submodule": "aui-scheduler-base"
      }
     },
     "date": {
      "!type": "+datatype_date.Date",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerBase.html#attribute_date",
      "!doc": "Contains the date corresponding to the current date which is the\nvalue of the date set on the users computer.",
      "!data": {
       "submodule": "aui-scheduler-base"
      }
     },
     "eventRecorder": {
      "!type": "+aui_scheduler.A.SchedulerEventRecorder",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerBase.html#attribute_eventRecorder",
      "!doc": "Contains the `Scheduler`s `SchedulerEventRecorder` instance.",
      "!data": {
       "submodule": "aui-scheduler-base"
      }
     },
     "strings": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerBase.html#attribute_strings",
      "!doc": "Contains the collection of strings used to label elements of the UI.",
      "!data": {
       "submodule": "aui-scheduler-base"
      }
     },
     "navigationDateFormatter": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerBase.html#attribute_navigationDateFormatter",
      "!doc": "Contains the function that formats the navigation date.",
      "!data": {
       "submodule": "aui-scheduler-base"
      }
     },
     "views": {
      "!type": "[?]",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerBase.html#attribute_views",
      "!doc": "Contains the list of views belonging to this `Scheduler`.",
      "!data": {
       "submodule": "aui-scheduler-base"
      }
     },
     "viewDate": {
      "!type": "+datatype_date.Date",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerBase.html#attribute_viewDate",
      "!doc": "Contains the `Scheduler`s current date. If there is an `activeView`,\nthis attribute will contain the `activeView`s current date.",
      "!data": {
       "submodule": "aui-scheduler-base"
      }
     },
     "firstDayOfWeek": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerBase.html#attribute_firstDayOfWeek",
      "!doc": "First day of the week: Sunday is 0, Monday is 1.",
      "!data": {
       "submodule": "aui-scheduler-base"
      }
     },
     "todayDate": {
      "!type": "+datatype_date.Date",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerBase.html#attribute_todayDate",
      "!doc": "Today date representation. This option allows the developer to\nspecify the date he wants to be used as the today date.",
      "!data": {
       "submodule": "aui-scheduler-base"
      }
     }
    },
    "SchedulerEventRecorderConfig": {
     "!proto": "config.A.SchedulerEventConfig",
     "allDay": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventRecorder.html#attribute_allDay",
      "!doc": "Determines whether a new event will take place all day. When enabled,\nthe event will not contain 24-hour clock date inputs.",
      "!data": {
       "submodule": "aui-scheduler-event-recorder"
      }
     },
     "content": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventRecorder.html#attribute_content",
      "!doc": "Determines the content of this Scheduler event recorders body\nsection.",
      "!data": {
       "submodule": "aui-scheduler-event-recorder"
      }
     },
     "duration": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventRecorder.html#attribute_duration",
      "!doc": "Contains the duration of an `event` in minutes.",
      "!data": {
       "submodule": "aui-scheduler-event-recorder"
      }
     },
     "dateFormat": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventRecorder.html#attribute_dateFormat",
      "!doc": "Contains the default date format for an `event`.",
      "!data": {
       "submodule": "aui-scheduler-event-recorder"
      }
     },
     "event": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventRecorder.html#attribute_event",
      "!doc": "A scheduler `event` is the wrapper object that contains an `event`\ntitle, start and end times and a description.",
      "!data": {
       "submodule": "aui-scheduler-event-recorder"
      }
     },
     "popover": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventRecorder.html#attribute_popover",
      "!doc": "Contains the scheduler event recorders `popover` instance.",
      "!data": {
       "submodule": "aui-scheduler-event-recorder"
      }
     },
     "strings": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventRecorder.html#attribute_strings",
      "!doc": "Collection of strings used to label elements of the UI.\nThis attribute defaults to `{}` unless the attribute is set.\nWhen this attribute is set, the passed value merges with a\npseudo-default collection of strings.",
      "!data": {
       "submodule": "aui-scheduler-event-recorder"
      }
     },
     "bodyTemplate": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventRecorder.html#attribute_bodyTemplate",
      "!doc": "Contains the `SchedulerEventRecorder`s body template.",
      "!data": {
       "submodule": "aui-scheduler-event-recorder"
      }
     },
     "headerTemplate": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventRecorder.html#attribute_headerTemplate",
      "!doc": "Contains the `SchedulerEventRecorder`s header template.",
      "!data": {
       "submodule": "aui-scheduler-event-recorder"
      }
     }
    },
    "SchedulerAgendaViewConfig": {
     "!proto": "config.A.SchedulerViewConfig",
     "bodyContent": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerAgendaView.html#attribute_bodyContent",
      "!doc": "Determines the content of Scheduler view agendas body section.",
      "!data": {
       "submodule": "aui-scheduler-view-agenda"
      }
     },
     "eventsDateFormatter": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerAgendaView.html#attribute_eventsDateFormatter",
      "!doc": "Contains the function that formats the events date.",
      "!data": {
       "submodule": "aui-scheduler-view-agenda"
      }
     },
     "headerDayDateFormatter": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerAgendaView.html#attribute_headerDayDateFormatter",
      "!doc": "Contains the function that formats the header day date.",
      "!data": {
       "submodule": "aui-scheduler-view-agenda"
      }
     },
     "headerExtraDateFormatter": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerAgendaView.html#attribute_headerExtraDateFormatter",
      "!doc": "Contains the function that formats the header extra date.",
      "!data": {
       "submodule": "aui-scheduler-view-agenda"
      }
     },
     "infoDayDateFormatter": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerAgendaView.html#attribute_infoDayDateFormatter",
      "!doc": "Contains the function that formats the info day date.",
      "!data": {
       "submodule": "aui-scheduler-view-agenda"
      }
     },
     "infoLabelBigDateFormatter": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerAgendaView.html#attribute_infoLabelBigDateFormatter",
      "!doc": "Contains the function that formats the info label date.",
      "!data": {
       "submodule": "aui-scheduler-view-agenda"
      }
     },
     "infoLabelSmallDateFormatter": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerAgendaView.html#attribute_infoLabelSmallDateFormatter",
      "!doc": "Contains the function that formats the info label small date.",
      "!data": {
       "submodule": "aui-scheduler-view-agenda"
      }
     },
     "name": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerAgendaView.html#attribute_name",
      "!doc": "Determines the name for this agenda.",
      "!data": {
       "submodule": "aui-scheduler-view-agenda"
      }
     },
     "strings": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerAgendaView.html#attribute_strings",
      "!doc": "Contains the collection of strings used to label elements of the UI.",
      "!data": {
       "submodule": "aui-scheduler-view-agenda"
      }
     }
    },
    "SchedulerDayViewConfig": {
     "!proto": "config.A.SchedulerViewConfig",
     "bodyContent": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#attribute_bodyContent",
      "!doc": "Determines the content of Scheduler day views body section.",
      "!data": {
       "submodule": "aui-scheduler-view-day"
      }
     },
     "days": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#attribute_days",
      "!doc": "Contains the number of day columns this view displays.",
      "!data": {
       "submodule": "aui-scheduler-view-day"
      }
     },
     "delegateConfig": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#attribute_delegateConfig",
      "!doc": "Configures this views `DD.Delegate`.",
      "!data": {
       "submodule": "aui-scheduler-view-day"
      }
     },
     "eventWidth": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#attribute_eventWidth",
      "!doc": "Contains the width of a `SchedulerView` in pixels.",
      "!data": {
       "submodule": "aui-scheduler-view-day"
      }
     },
     "filterFn": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#attribute_filterFn",
      "!doc": "Applies a filter to `SchedulerEvent`s.",
      "!data": {
       "submodule": "aui-scheduler-view-day"
      }
     },
     "headerDateFormatter": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#attribute_headerDateFormatter",
      "!doc": "Contains the function that formats the header date.",
      "!data": {
       "submodule": "aui-scheduler-view-day"
      }
     },
     "headerView": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#attribute_headerView",
      "!doc": "Contains the header view.",
      "!data": {
       "submodule": "aui-scheduler-view-day"
      }
     },
     "headerViewConfig": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#attribute_headerViewConfig",
      "!doc": "Configures the header day view.",
      "!data": {
       "submodule": "aui-scheduler-view-day"
      }
     },
     "hourHeight": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#attribute_hourHeight",
      "!doc": "Contains the height of an hour in pixels.",
      "!data": {
       "submodule": "aui-scheduler-view-day"
      }
     },
     "name": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#attribute_name",
      "!doc": "Determines the name for this day view.",
      "!data": {
       "submodule": "aui-scheduler-view-day"
      }
     },
     "navigationDateFormatter": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#attribute_navigationDateFormatter",
      "!doc": "Contains the function that formats the navigation date.",
      "!data": {
       "submodule": "aui-scheduler-view-day"
      }
     },
     "strings": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#attribute_strings",
      "!doc": "Contains the collection of strings used to label elements of the UI.",
      "!data": {
       "submodule": "aui-scheduler-view-day"
      }
     },
     "headerTableNode!~YUIDOC_LINE~!return": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#attribute_headerTableNode!~YUIDOC_LINE~!return",
      "!doc": "Contains the function that returns the `headerTable` node.",
      "!data": {
       "submodule": "aui-scheduler-view-day"
      }
     },
     "headerViewLabelNode!~YUIDOC_LINE~!return": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#attribute_headerViewLabelNode!~YUIDOC_LINE~!return",
      "!doc": "Contains the function that returns the `headerViewLabel` node.",
      "!data": {
       "submodule": "aui-scheduler-view-day"
      }
     },
     "resizerNode!~YUIDOC_LINE~!return": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#attribute_resizerNode!~YUIDOC_LINE~!return",
      "!doc": "Contains the function that returns the `resizer` node.",
      "!data": {
       "submodule": "aui-scheduler-view-day"
      }
     },
     "tableNode!~YUIDOC_LINE~!return": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#attribute_tableNode!~YUIDOC_LINE~!return",
      "!doc": "Contains the function that returns the `table` node.",
      "!data": {
       "submodule": "aui-scheduler-view-day"
      }
     },
     "colDaysNode!~YUIDOC_LINE~!return": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#attribute_colDaysNode!~YUIDOC_LINE~!return",
      "!doc": "Contains the function that returns the `colDays` node.",
      "!data": {
       "submodule": "aui-scheduler-view-day"
      }
     },
     "colHeaderDaysNode!~YUIDOC_LINE~!return": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#attribute_colHeaderDaysNode!~YUIDOC_LINE~!return",
      "!doc": "Contains the function that returns the `colHeaderDays` node.",
      "!data": {
       "submodule": "aui-scheduler-view-day"
      }
     },
     "markercellsNode!~YUIDOC_LINE~!return": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#attribute_markercellsNode!~YUIDOC_LINE~!return",
      "!doc": "Contains the function that returns the `markercells` node.",
      "!data": {
       "submodule": "aui-scheduler-view-day"
      }
     },
     "timesNode!~YUIDOC_LINE~!return": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#attribute_timesNode!~YUIDOC_LINE~!return",
      "!doc": "Contains the function that returns the `times` node.",
      "!data": {
       "submodule": "aui-scheduler-view-day"
      }
     }
    },
    "SchedulerMonthViewConfig": {
     "!proto": "config.A.SchedulerTableViewConfig",
     "displayDaysInterval": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerMonthView.html#attribute_displayDaysInterval",
      "!doc": "Contains the number of Days to display in a month view.",
      "!data": {
       "submodule": "aui-scheduler-view-month"
      }
     },
     "name": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerMonthView.html#attribute_name",
      "!doc": "Determines the name for this month view.",
      "!data": {
       "submodule": "aui-scheduler-view-month"
      }
     },
     "navigationDateFormatter": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerMonthView.html#attribute_navigationDateFormatter",
      "!doc": "Contains the function that formats the navigation date.",
      "!data": {
       "submodule": "aui-scheduler-view-month"
      }
     }
    },
    "SchedulerTableViewDDConfig": {
     "delegateConfig": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableViewDD.html#attribute_delegateConfig",
      "!doc": "Configures this views `DD.Delegate`.",
      "!data": {
       "submodule": "aui-scheduler-view-table-dd"
      }
     }
    },
    "SchedulerTableViewConfig": {
     "!proto": "config.A.SchedulerViewConfig",
     "bodyContent": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#attribute_bodyContent",
      "!doc": "Determines the content of Scheduler table views body section.",
      "!data": {
       "submodule": "aui-scheduler-view-table"
      }
     },
     "displayDaysInterval": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#attribute_displayDaysInterval",
      "!doc": "Contains the number of days to display per interval in the\n`SchedulerTableView`.",
      "!data": {
       "submodule": "aui-scheduler-view-table"
      }
     },
     "displayRows": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#attribute_displayRows",
      "!doc": "Contains the number of rows to display in the `SchedulerTableView`.",
      "!data": {
       "submodule": "aui-scheduler-view-table"
      }
     },
     "fixedHeight": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#attribute_fixedHeight",
      "!doc": "Indicates whether the height of the `SchedulerTableView` is fixed.",
      "!data": {
       "submodule": "aui-scheduler-view-table"
      }
     },
     "name": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#attribute_name",
      "!doc": "Determines the name for this `SchedulerTableView`.",
      "!data": {
       "submodule": "aui-scheduler-view-table"
      }
     },
     "headerDateFormatter": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#attribute_headerDateFormatter",
      "!doc": "Contains the function that formats the header date.",
      "!data": {
       "submodule": "aui-scheduler-view-table"
      }
     },
     "navigationDateFormatter": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#attribute_navigationDateFormatter",
      "!doc": "Contains the function that formats the navigation date.",
      "!data": {
       "submodule": "aui-scheduler-view-table"
      }
     },
     "scrollable": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#attribute_scrollable",
      "!doc": "Indicates whether the `SchedulerTableView` is scrollable.",
      "!data": {
       "submodule": "aui-scheduler-view-table"
      }
     },
     "strings": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#attribute_strings",
      "!doc": "Contains the collection of strings used to label elements of the UI.",
      "!data": {
       "submodule": "aui-scheduler-view-table"
      }
     },
     "headerTableNode": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#attribute_headerTableNode",
      "!doc": "Contains the function that returns the `headerTable` node.",
      "!data": {
       "submodule": "aui-scheduler-view-table"
      }
     },
     "colHeaderDaysNode": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#attribute_colHeaderDaysNode",
      "!doc": "Contains the function that returns the `colHeaderDays` node.",
      "!data": {
       "submodule": "aui-scheduler-view-table"
      }
     },
     "rowsContainerNode": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#attribute_rowsContainerNode",
      "!doc": "Contains the function that returns the `rowsContainer` node.",
      "!data": {
       "submodule": "aui-scheduler-view-table"
      }
     },
     "tableGridNode": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#attribute_tableGridNode",
      "!doc": "Contains the function that returns the `tableGrid` node.",
      "!data": {
       "submodule": "aui-scheduler-view-table"
      }
     }
    },
    "SchedulerWeekViewConfig": {
     "!proto": "config.A.SchedulerDayViewConfig",
     "bodyContent": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerWeekView.html#attribute_bodyContent",
      "!doc": "Determines the content of Scheduler week views body section.",
      "!data": {
       "submodule": "aui-scheduler-view-week"
      }
     },
     "days": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerWeekView.html#attribute_days",
      "!doc": "Contains the number of days in a week.",
      "!data": {
       "submodule": "aui-scheduler-view-week"
      }
     },
     "headerViewConfig": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerWeekView.html#attribute_headerViewConfig",
      "!doc": "Configures the header week view.",
      "!data": {
       "submodule": "aui-scheduler-view-week"
      }
     },
     "name": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerWeekView.html#attribute_name",
      "!doc": "Determines the name for this week view.",
      "!data": {
       "submodule": "aui-scheduler-view-week"
      }
     },
     "navigationDateFormatter": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerWeekView.html#attribute_navigationDateFormatter",
      "!doc": "Contains the formatted navigation date formatter for this week view.",
      "!data": {
       "submodule": "aui-scheduler-view-week"
      }
     }
    },
    "TernarySearchNodeConfig": {
     "!proto": "config.BaseConfig",
     "character": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TernarySearchNode.html#attribute_character",
      "!doc": "String formed by a single letter.",
      "!data": {
       "submodule": "aui-search-ternary-search-node"
      }
     },
     "child": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TernarySearchNode.html#attribute_child",
      "!doc": "The child node in the tree.",
      "!data": {
       "submodule": "aui-search-ternary-search-node"
      }
     },
     "largerNode": {
      "!type": "+aui_search.A.TernarySearchNode",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TernarySearchNode.html#attribute_largerNode",
      "!doc": "The larger node in the tree.",
      "!data": {
       "submodule": "aui-search-ternary-search-node"
      }
     },
     "smallerNode": {
      "!type": "+aui_search.A.TernarySearchNode",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TernarySearchNode.html#attribute_smallerNode",
      "!doc": "The smaller node in the tree.",
      "!data": {
       "submodule": "aui-search-ternary-search-node"
      }
     },
     "word": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TernarySearchNode.html#attribute_word",
      "!doc": "String formed by a group of letters.",
      "!data": {
       "submodule": "aui-search-ternary-search-node"
      }
     }
    },
    "SortableLayoutConfig": {
     "!proto": "config.BaseConfig",
     "delegateConfig": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableLayout.html#attribute_delegateConfig",
      "!doc": "Configuration object for delegate."
     },
     "proxyNode": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableLayout.html#attribute_proxyNode",
      "!doc": "Proxy drag node used instead of dragging the original node."
     },
     "dragNodes": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableLayout.html#attribute_dragNodes",
      "!doc": "The CSS class name used to define which nodes are draggable."
     },
     "dropContainer": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableLayout.html#attribute_dropContainer",
      "!doc": "The container which serves to host dropped elements."
     },
     "dropNodes": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableLayout.html#attribute_dropNodes",
      "!doc": "The CSS class name used to define which nodes serve as container to\nbe dropped."
     },
     "groups": {
      "!type": "[?]",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableLayout.html#attribute_groups",
      "!doc": "List of elements to add this sortable layout into."
     },
     "lazyStart": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableLayout.html#attribute_lazyStart",
      "!doc": "Specifies if the start should be delayed."
     },
     "placeholder": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableLayout.html#attribute_placeholder",
      "!doc": "Simulates the position of the dragged element."
     },
     "proxy": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableLayout.html#attribute_proxy",
      "!doc": "Proxy element to be used when dragging."
     }
    },
    "SortableListConfig": {
     "!proto": "config.BaseConfig",
     "dd": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableList.html#attribute_dd",
      "!doc": "Drag & Drop plugin attached to the widget."
     },
     "dropCondition": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableList.html#attribute_dropCondition",
      "!doc": "Validates the condition for an element to be dropped."
     },
     "dropContainer": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableList.html#attribute_dropContainer",
      "!doc": "The container which serves to host dropped elements."
     },
     "dropOn": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableList.html#attribute_dropOn",
      "!doc": "The CSS class name used to define which nodes serve as container to\nbe dropped."
     },
     "helper": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableList.html#attribute_helper",
      "!doc": "Indicates that the element is being dragged."
     },
     "nodes": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableList.html#attribute_nodes",
      "!doc": "The CSS class name used to define which nodes are draggable."
     },
     "placeholder": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableList.html#attribute_placeholder",
      "!doc": "Simulates the position of the dragged element."
     },
     "proxy": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableList.html#attribute_proxy",
      "!doc": "Proxy element to be used when dragging."
     },
     "sortCondition": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableList.html#attribute_sortCondition",
      "!doc": "Validates the condition for an element to be sorted."
     }
    },
    "TabConfig": {
     "!proto": "config.TabConfig",
     "disabled": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Tab.html#attribute_disabled",
      "!doc": "TODO. Wanna help? Please send a Pull Request."
     }
    },
    "TabViewConfig": {
     "!proto": "config.TabViewConfig",
     "stacked": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TabView.html#attribute_stacked",
      "!doc": "Determine the orientation of tabs.\nCan be stacked (vertical) or not (horizontal)."
     },
     "type": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TabView.html#attribute_type",
      "!doc": "Determine the type of tabs."
     }
    },
    "TimePickerBaseConfig": {
     "autocomplete": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TimePickerBase.html#attribute_autocomplete",
      "!doc": "Default `AutoComplete` configuration options."
     },
     "dateSeparator": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TimePickerBase.html#attribute_dateSeparator",
      "!doc": "Value seperator for `queryDelimiter` attribute of `AutoComplete` class."
     },
     "mask": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TimePickerBase.html#attribute_mask",
      "!doc": "Format for displayed time."
     },
     "popoverCssClass": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TimePickerBase.html#attribute_popoverCssClass",
      "!doc": "CSS class for popover."
     },
     "values": {
      "!type": "[?]",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TimePickerBase.html#attribute_values",
      "!doc": "Time values available to `AutoComplete` instance."
     }
    },
    "TogglerConfig": {
     "!proto": "config.BaseConfig",
     "animated": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toggler.html#attribute_animated",
      "!doc": "Determine if the Toggler transitions will animate."
     },
     "animating": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toggler.html#attribute_animating",
      "!doc": "Determine if the Toggler transitions are being animated in that\nmoment."
     },
     "bindDOMEvents": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toggler.html#attribute_bindDOMEvents",
      "!doc": "Determine if the Toggler should bind DOM events or not."
     },
     "content": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toggler.html#attribute_content",
      "!doc": "The content of a Toogler instance."
     },
     "expanded": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toggler.html#attribute_expanded",
      "!doc": "Determine if the content starts as toggled on/off on page load."
     },
     "header": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toggler.html#attribute_header",
      "!doc": "The header of a Toogler instance."
     },
     "transition": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toggler.html#attribute_transition",
      "!doc": "Transition definitions such as duration and type of easing effect."
     }
    },
    "TogglerDelegateConfig": {
     "!proto": "config.BaseConfig",
     "animated": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TogglerDelegate.html#attribute_animated",
      "!doc": "Determine if the Toggler Delegate transitions will animate."
     },
     "closeAllOnExpand": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TogglerDelegate.html#attribute_closeAllOnExpand",
      "!doc": "Determine if the Toggler Delegate switches\nwill be set to off when one switch is toggled on."
     },
     "container": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TogglerDelegate.html#attribute_container",
      "!doc": "The container of Toggler Delegate instance."
     },
     "content": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TogglerDelegate.html#attribute_content",
      "!doc": "The content of a Toogler Delegate instance."
     },
     "expanded": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TogglerDelegate.html#attribute_expanded",
      "!doc": "Determine if the content starts as toggled on/off on page load."
     },
     "header": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TogglerDelegate.html#attribute_header",
      "!doc": "The header of a Toogler Delegate instance."
     },
     "transition": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TogglerDelegate.html#attribute_transition",
      "!doc": "Transition definitions such as duration and type of easing effect."
     }
    },
    "ToolbarConfig": {
     "!proto": "config.A.ComponentConfig",
     "children": {
      "!type": "[?]",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toolbar.html#attribute_children",
      "!doc": "A list of child elements."
     },
     "toolbarRenderer": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toolbar.html#attribute_toolbarRenderer",
      "!doc": "Define a new `ToolbarRenderer`."
     }
    },
    "TooltipConfig": {
     "!proto": "config.WidgetConfig",
     "animated": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Tooltip.html#attribute_animated",
      "!doc": "Determine if the transitions will animate or not."
     },
     "constrain": {
      "!type": "bool|+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Tooltip.html#attribute_constrain",
      "!doc": "Determine the tooltip constrain node."
     },
     "formatter": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Tooltip.html#attribute_formatter",
      "!doc": "Format the title attribute before set the content of the tooltip."
     },
     "opacity": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Tooltip.html#attribute_opacity",
      "!doc": "Determine the opacity."
     },
     "triggerShowEvent": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Tooltip.html#attribute_triggerShowEvent",
      "!doc": "DOM event to show the tooltip."
     }
    },
    "TooltipDelegateConfig": {
     "!proto": "config.BaseConfig",
     "align": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TooltipDelegate.html#attribute_align",
      "!doc": "The alignment configuration for this widget."
     },
     "container": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TooltipDelegate.html#attribute_container",
      "!doc": "The container of Toggler Delegate instance."
     },
     "duration": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TooltipDelegate.html#attribute_duration",
      "!doc": "Determine the duration of the tooltip animation."
     },
     "opacity": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TooltipDelegate.html#attribute_opacity",
      "!doc": "Determine the opacity of the tooltip."
     },
     "triggerHideEvent": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TooltipDelegate.html#attribute_triggerHideEvent",
      "!doc": "DOM event to hide the tooltip."
     },
     "triggerShowEvent": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TooltipDelegate.html#attribute_triggerShowEvent",
      "!doc": "DOM event to show the tooltip."
     },
     "zIndex": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TooltipDelegate.html#attribute_zIndex",
      "!doc": "Specify the zIndex for the tooltips."
     }
    },
    "TreeDataConfig": {
     "!proto": "config.BaseConfig",
     "container": {
      "!type": "+node.Node|string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#attribute_container",
      "!doc": "Container to nest children nodes. If it has a container its not a leaf.",
      "!data": {
       "submodule": "aui-tree-data"
      }
     },
     "children": {
      "!type": "[?]",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#attribute_children",
      "!doc": "Array of children (i.e. could be a JSON metadata object or a TreeNode\ninstance).",
      "!data": {
       "submodule": "aui-tree-data"
      }
     },
     "index": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#attribute_index",
      "!doc": "Index the nodes.",
      "!data": {
       "submodule": "aui-tree-data"
      }
     }
    },
    "TreeViewIOConfig": {
     "io": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeViewIO.html#attribute_io",
      "!doc": "IO options for the current TreeNode load the children.",
      "!data": {
       "submodule": "aui-tree-io"
      }
     }
    },
    "TreeNodeConfig": {
     "!proto": "config.BaseConfig",
     "boundingBox": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#attribute_boundingBox",
      "!doc": "The widgets outermost node, used for sizing and positioning.",
      "!data": {
       "submodule": "aui-tree-node"
      }
     },
     "contentBox": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#attribute_contentBox",
      "!doc": "The direct descendant of a widgets\nbounding box and houses its content.",
      "!data": {
       "submodule": "aui-tree-node"
      }
     },
     "cssClasses": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#attribute_cssClasses",
      "!doc": "CSS classes used on TreeNode.",
      "!data": {
       "submodule": "aui-tree-node"
      }
     },
     "draggable": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#attribute_draggable",
      "!doc": "If true the TreeNode is draggable.",
      "!data": {
       "submodule": "aui-tree-node"
      }
     },
     "ownerTree": {
      "!type": "+TreeView",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#attribute_ownerTree",
      "!doc": "TreeView which contains the current TreeNode.",
      "!data": {
       "submodule": "aui-tree-node"
      }
     },
     "label": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#attribute_label",
      "!doc": "Label of the TreeNode.",
      "!data": {
       "submodule": "aui-tree-node"
      }
     },
     "expanded": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#attribute_expanded",
      "!doc": "Whether the TreeNode is expanded by default.",
      "!data": {
       "submodule": "aui-tree-node"
      }
     },
     "id": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#attribute_id",
      "!doc": "Id of the TreeNode.",
      "!data": {
       "submodule": "aui-tree-node"
      }
     },
     "leaf": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#attribute_leaf",
      "!doc": "Whether the TreeNode could have children or not (i.e. if any\nchildren is present the TreeNode is a leaf).",
      "!data": {
       "submodule": "aui-tree-node"
      }
     },
     "nextSibling": {
      "!type": "+aui_tree.TreeNode",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#attribute_nextSibling",
      "!doc": "Next sibling of the current TreeNode.",
      "!data": {
       "submodule": "aui-tree-node"
      }
     },
     "prevSibling": {
      "!type": "+aui_tree.TreeNode",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#attribute_prevSibling",
      "!doc": "Previous sibling of the current TreeNode.",
      "!data": {
       "submodule": "aui-tree-node"
      }
     },
     "parentNode": {
      "!type": "+aui_tree.TreeNode",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#attribute_parentNode",
      "!doc": "Parent node of the current TreeNode.",
      "!data": {
       "submodule": "aui-tree-node"
      }
     },
     "labelEl": {
      "!type": "+node.Node|string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#attribute_labelEl",
      "!doc": "Label element to house the `label` attribute.",
      "!data": {
       "submodule": "aui-tree-node"
      }
     },
     "hitAreaEl": {
      "!type": "+node.Node|string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#attribute_hitAreaEl",
      "!doc": "Hitarea element.",
      "!data": {
       "submodule": "aui-tree-node"
      }
     },
     "alwaysShowHitArea": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#attribute_alwaysShowHitArea",
      "!doc": "Always show the hitarea icon.",
      "!data": {
       "submodule": "aui-tree-node"
      }
     },
     "iconEl": {
      "!type": "+node.Node|string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#attribute_iconEl",
      "!doc": "Icon element.",
      "!data": {
       "submodule": "aui-tree-node"
      }
     },
     "tabIndex": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#attribute_tabIndex",
      "!doc": "Specify the tab order.",
      "!data": {
       "submodule": "aui-tree-node"
      }
     },
     "rendered": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#attribute_rendered",
      "!doc": "If true the TreeNode is rendered.",
      "!data": {
       "submodule": "aui-tree-node"
      }
     }
    },
    "TreeNodeIOConfig": {
     "!proto": "config.A.TreeNodeConfig",
     "loading": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeIO.html#attribute_loading",
      "!doc": "Whether the current TreeNode IO transaction is loading.",
      "!data": {
       "submodule": "aui-tree-node"
      }
     },
     "loaded": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeIO.html#attribute_loaded",
      "!doc": "Whether the current TreeNode has loaded the content.",
      "!data": {
       "submodule": "aui-tree-node"
      }
     },
     "cache": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeIO.html#attribute_cache",
      "!doc": "Whether the current TreeNode should cache the loaded content or not.",
      "!data": {
       "submodule": "aui-tree-node"
      }
     },
     "leaf": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeIO.html#attribute_leaf",
      "!doc": "Whether the TreeNode could have children or not (i.e. if any\nchildren is present the TreeNode is a leaf).",
      "!data": {
       "submodule": "aui-tree-node"
      }
     }
    },
    "TreeNodeCheckConfig": {
     "!proto": "config.A.TreeNodeIOConfig",
     "checked": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeCheck.html#attribute_checked",
      "!doc": "Whether the TreeNode is checked or not.",
      "!data": {
       "submodule": "aui-tree-node"
      }
     },
     "checkName": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeCheck.html#attribute_checkName",
      "!doc": "Name of the checkbox element used on the current TreeNode.",
      "!data": {
       "submodule": "aui-tree-node"
      }
     },
     "checkContainerEl": {
      "!type": "+node.Node|string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeCheck.html#attribute_checkContainerEl",
      "!doc": "Container element for the checkbox.",
      "!data": {
       "submodule": "aui-tree-node"
      }
     },
     "checkEl": {
      "!type": "+node.Node|string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeCheck.html#attribute_checkEl",
      "!doc": "Checkbox element.",
      "!data": {
       "submodule": "aui-tree-node"
      }
     }
    },
    "TreeNodeRadioConfig": {
     "!proto": "config.A.TreeNodeTaskConfig",
     "cssClasses": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeRadio.html#attribute_cssClasses",
      "!doc": "CSS classes used on TreeNodeRadio.",
      "!data": {
       "submodule": "aui-tree-node"
      }
     }
    },
    "TreeViewPaginatorConfig": {
     "paginator": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeViewPaginator.html#attribute_paginator",
      "!doc": "Paginator.",
      "!data": {
       "submodule": "aui-tree-paginator"
      }
     }
    },
    "TreeViewConfig": {
     "!proto": "config.A.ComponentConfig",
     "type": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeView.html#attribute_type",
      "!doc": "Type of the treeview (i.e. could be file or normal).",
      "!data": {
       "submodule": "aui-tree-view"
      }
     },
     "lastSelected": {
      "!type": "+aui_tree.TreeNode",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeView.html#attribute_lastSelected",
      "!doc": "Last selected TreeNode.",
      "!data": {
       "submodule": "aui-tree-view"
      }
     },
     "lazyLoad": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeView.html#attribute_lazyLoad",
      "!doc": "Determine if its going to be lazy loaded or not.",
      "!data": {
       "submodule": "aui-tree-view"
      }
     },
     "selectOnToggle": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeView.html#attribute_selectOnToggle",
      "!doc": "Determine if its going to be selected on toggle.",
      "!data": {
       "submodule": "aui-tree-view"
      }
     }
    },
    "TreeViewDDConfig": {
     "!proto": "config.A.TreeViewConfig",
     "helper": {
      "!type": "+node.Node|string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeViewDD.html#attribute_helper",
      "!doc": "Dragdrop helper element.",
      "!data": {
       "submodule": "aui-tree-view"
      }
     },
     "scrollDelay": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeViewDD.html#attribute_scrollDelay",
      "!doc": "Delay of the scroll while dragging the TreeNodes.",
      "!data": {
       "submodule": "aui-tree-view"
      }
     },
     "dropAction": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeViewDD.html#attribute_dropAction",
      "!doc": "Drop action (i.e. could be append, below or above).",
      "!data": {
       "submodule": "aui-tree-view"
      }
     },
     "lastY": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeViewDD.html#attribute_lastY",
      "!doc": "Last Y.",
      "!data": {
       "submodule": "aui-tree-view"
      }
     },
     "node": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeViewDD.html#attribute_node",
      "!doc": "Node.",
      "!data": {
       "submodule": "aui-tree-view"
      }
     },
     "nodeContent": {
      "!type": "+node.Node",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeViewDD.html#attribute_nodeContent",
      "!doc": "Reference for the current drop node.",
      "!data": {
       "submodule": "aui-tree-view"
      }
     }
    },
    "VideoConfig": {
     "!proto": "config.A.ComponentConfig",
     "url": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Video.html#attribute_url",
      "!doc": "URL used by Video to play."
     },
     "ogvUrl": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Video.html#attribute_ogvUrl",
      "!doc": "URL (on .ogv format) used by Video to play."
     },
     "swfUrl": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Video.html#attribute_swfUrl",
      "!doc": "URL (on .swf format) used by Video to create\na fallback player with Flash."
     },
     "poster": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Video.html#attribute_poster",
      "!doc": "Image displayed before playback starts."
     },
     "fixedAttributes": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Video.html#attribute_fixedAttributes",
      "!doc": "An additional list of attributes."
     },
     "flashVars": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Video.html#attribute_flashVars",
      "!doc": "Variables used by Flash player."
     },
     "render": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Video.html#attribute_render",
      "!doc": "If `true` the render phase will be automatically invoked\npreventing the `.render()` manual call."
     }
    },
    "WidgetCssClassConfig": {
     "cssClass": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetCssClass.html#attribute_cssClass",
      "!doc": "CSS class to be automatically added to the `boundingBox`."
     }
    },
    "WidgetPositionAlignSuggestionConfig": {
     "position": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetPositionAlignSuggestion.html#attribute_position",
      "!doc": "Determine the position of the tooltip."
     },
     "alignNode": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetPositionAlignSuggestion.html#attribute_alignNode",
      "!doc": "Suggest alignment for the node based on the `position` suggestion."
     }
    },
    "WidgetToolbarsConfig": {
     "toolbars": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetToolbars.html#attribute_toolbars",
      "!doc": "Collection of `A.Toolbar` instances."
     },
     "toolbarPosition": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetToolbars.html#attribute_toolbarPosition",
      "!doc": "Collection of toolbars header, body, and footer positions."
     }
    },
    "WidgetTransitionConfig": {
     "animated": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetTransition.html#attribute_animated",
      "!doc": "Determine if the transitions will animate or not."
     },
     "delay": {
      "!type": "+Object",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetTransition.html#attribute_delay",
      "!doc": "Determine the delay (in milliseconds) after widgets transition\nanimation. By default theres no delay."
     },
     "duration": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetTransition.html#attribute_duration",
      "!doc": "Determine the duration of the transition."
     },
     "opacity": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetTransition.html#attribute_opacity",
      "!doc": "Determine the opacity."
     },
     "stickDuration": {
      "!type": "number",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetTransition.html#attribute_stickDuration",
      "!doc": "Determine the duration (in milliseconds) for the widget to stick\nvisibility after the trigger element. By default the stick duration is\nnot specified."
     }
    },
    "WidgetTriggerConfig": {
     "bindDOMEvents": {
      "!type": "bool",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetTrigger.html#attribute_bindDOMEvents",
      "!doc": "Determine if the Toggler should bind DOM events or not."
     },
     "trigger": {
      "!type": "?",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetTrigger.html#attribute_trigger",
      "!doc": "Trigger node to change widget visibility state."
     },
     "triggerHideEvent": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetTrigger.html#attribute_triggerHideEvent",
      "!doc": "DOM event to hide the tooltip."
     },
     "triggerShowEvent": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetTrigger.html#attribute_triggerShowEvent",
      "!doc": "DOM event to show the tooltip."
     },
     "triggerToggleEvent": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetTrigger.html#attribute_triggerToggleEvent",
      "!doc": "DOM event to toggle the tooltip."
     }
    }
   }
  },
  "_yui": {
   "aui_ace_editor": {
    "!data": {
     "module": "aui-ace-editor",
     "submodules": {
      "aui-ace-autocomplete-base": {},
      "aui-ace-autocomplete-freemarker": {},
      "aui-ace-autocomplete-list": {},
      "aui-ace-autocomplete-plugin": {},
      "aui-ace-autocomplete-templateprocessor": {},
      "aui-ace-autocomplete-velocity": {}
     }
    },
    "A": {
     "AceEditor": {
      "!type": "fn(config: +config.A.AceEditorConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/AceEditor.html",
      "prototype": {
       "!proto": "widget.Widget.prototype",
       "getEditor": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.html#method_getEditor",
        "!doc": "Get editor."
       },
       "getSelection": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.html#method_getSelection",
        "!doc": "Get a text selection."
       },
       "getSession": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.html#method_getSession",
        "!doc": "Get session."
       },
       "gotoLine": {
        "!type": "fn(line: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.html#method_gotoLine",
        "!doc": "Go to a specific line of code."
       },
       "insert": {
        "!type": "fn(text: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.html#method_insert",
        "!doc": "Insert content into the editor."
       }
      },
      "AutoCompleteBase": {
       "!type": "fn(config: +config.A.AceEditor.AutoCompleteBaseConfig)",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteBase.html",
       "FILL_MODE_INSERT": {
        "!type": "?",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteBase.html#property_FILL_MODE_INSERT",
        "!doc": "Exposes a constant for insert fill mode. See `fillMode` for more information.",
        "!data": {
         "submodule": "aui-ace-autocomplete-base"
        }
       },
       "FILL_MODE_OVERWRITE": {
        "!type": "?",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteBase.html#property_FILL_MODE_OVERWRITE",
        "!doc": "Exposes a constant for overwrite fill mode. See `fillMode` for more\ninformation.",
        "!data": {
         "submodule": "aui-ace-autocomplete-base"
        }
       },
       "NAME": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteBase.html#property_NAME",
        "!doc": "Static property which provides a string to identify the class.",
        "!data": {
         "submodule": "aui-ace-autocomplete-base"
        }
       },
       "NS": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteBase.html#property_NS",
        "!doc": "Static property which provides a string to identify the namespace.",
        "!data": {
         "submodule": "aui-ace-autocomplete-base"
        }
       },
       "ATTRS": {
        "!type": "+Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteBase.html#property_ATTRS",
        "!doc": "Static property used to define the default attribute\nconfiguration for AutoCompleteBase.",
        "!data": {
         "submodule": "aui-ace-autocomplete-base"
        }
       }
      },
      "AutoCompleteFreemarker": {
       "!type": "fn(config: +config.A.AceEditor.AutoCompleteFreemarkerConfig)",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteFreemarker.html",
       "prototype": {
        "!proto": "aui_ace_editor.A.AceEditor.TemplateProcessor.prototype",
        "getMatch": {
         "!type": "fn(content: string) -> +Object",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteFreemarker.html#method_getMatch",
         "!doc": "Checks if the provided content contains directive or variable.",
         "!data": {
          "submodule": "aui-ace-autocomplete-freemarker"
         }
        }
       },
       "NAME": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteFreemarker.html#property_NAME",
        "!doc": "Static property which provides a string to identify the class.",
        "!data": {
         "submodule": "aui-ace-autocomplete-freemarker"
        }
       },
       "NS": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteFreemarker.html#property_NS",
        "!doc": "Static property provides a string to identify the namespace.",
        "!data": {
         "submodule": "aui-ace-autocomplete-freemarker"
        }
       },
       "ATTRS": {
        "!type": "+Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteFreemarker.html#property_ATTRS",
        "!doc": "Static property used to define the default attribute\nconfiguration for the Freemarker.",
        "!data": {
         "submodule": "aui-ace-autocomplete-freemarker"
        }
       }
      },
      "AutoCompleteList": {
       "!type": "fn(config: +config.A.AceEditor.AutoCompleteListConfig)",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteList.html",
       "!data": {
        "augments": [
         "A.WidgetAutohide"
        ],
        "extends": [
         "aui_ace_editor.A.AceEditor.AutoCompleteBase"
        ]
       },
       "prototype": {
        "!proto": "overlay.Overlay.prototype"
       },
       "NAME": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteList.html#property_NAME",
        "!doc": "Static property which provides a string to identify the class.",
        "!data": {
         "submodule": "aui-ace-autocomplete-list"
        }
       },
       "NS": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteList.html#property_NS",
        "!doc": "Static property provides a string to identify the namespace.",
        "!data": {
         "submodule": "aui-ace-autocomplete-list"
        }
       },
       "ATTRS": {
        "!type": "+Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteList.html#property_ATTRS",
        "!doc": "Static property used to define the default attribute\nconfiguration for the AutoCompleteList.",
        "!data": {
         "submodule": "aui-ace-autocomplete-list"
        }
       },
       "CSS_PREFIX": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteList.html#property_CSS_PREFIX",
        "!doc": "The prefix of all CSS Classes.",
        "!data": {
         "submodule": "aui-ace-autocomplete-list"
        }
       },
       "HTML_PARSER": {
        "!type": "?",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteList.html#property_HTML_PARSER",
        "!doc": "Object hash, defining how attribute values are to be parsed from\nmarkup contained in the widgets content box.",
        "!data": {
         "submodule": "aui-ace-autocomplete-list"
        }
       }
      },
      "TemplateProcessor": {
       "!type": "fn(config: +config.A.AceEditor.TemplateProcessorConfig)",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.TemplateProcessor.html",
       "prototype": {
        "!proto": "base.Base.prototype",
        "getResults": {
         "!type": "fn(match: +Object, callbackSuccess: fn(), callbackError: fn())",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.TemplateProcessor.html#method_getResults",
         "!doc": "Accepts match and depending on its type processes directives or\nvariables. In case of success, calls the provided success callback,\nor the error callback otherwise.",
         "!data": {
          "submodule": "aui-ace-autocomplete-templateprocessor"
         }
        },
        "getSuggestion": {
         "!type": "fn(match: +Object, selectedSuggestion: string) -> string",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.TemplateProcessor.html#method_getSuggestion",
         "!doc": "Formats the selected suggestion depending on the match type and\ncurrently selected editor mode. The match type can be one of:\nMATCH_DIRECTOVES or MATCH_VARIABLES. The selected editor mode can be\none of the following: INSERT or OVERWRITE. See {{#crossLink\n\"AceEditor.AutoCompleteBase/fillMode:attribute\"}}{{/crossLink}}",
         "!data": {
          "submodule": "aui-ace-autocomplete-templateprocessor"
         }
        }
       },
       "NAME": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.TemplateProcessor.html#property_NAME",
        "!doc": "Static property which provides a string to identify the class.",
        "!data": {
         "submodule": "aui-ace-autocomplete-templateprocessor"
        }
       },
       "NS": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.TemplateProcessor.html#property_NS",
        "!doc": "Static property provides a string to identify the namespace.",
        "!data": {
         "submodule": "aui-ace-autocomplete-templateprocessor"
        }
       },
       "ATTRS": {
        "!type": "+Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.TemplateProcessor.html#property_ATTRS",
        "!doc": "Static property used to define the default attribute\nconfiguration for the TemplateProcessor.",
        "!data": {
         "submodule": "aui-ace-autocomplete-templateprocessor"
        }
       }
      },
      "AutoCompleteVelocity": {
       "!type": "fn(config: +config.A.AceEditor.AutoCompleteVelocityConfig)",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteVelocity.html",
       "prototype": {
        "!proto": "aui_ace_editor.A.AceEditor.TemplateProcessor.prototype",
        "getMatch": {
         "!type": "fn(content: string) -> +Object",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteVelocity.html#method_getMatch",
         "!doc": "Checks if the provided content contains directive or variable.",
         "!data": {
          "submodule": "aui-ace-autocomplete-velocity"
         }
        }
       },
       "NAME": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteVelocity.html#property_NAME",
        "!doc": "Static property which provides a string to identify the class.",
        "!data": {
         "submodule": "aui-ace-autocomplete-velocity"
        }
       },
       "NS": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteVelocity.html#property_NS",
        "!doc": "Static property provides a string to identify the namespace.",
        "!data": {
         "submodule": "aui-ace-autocomplete-velocity"
        }
       },
       "ATTRS": {
        "!type": "+Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.AutoCompleteVelocity.html#property_ATTRS",
        "!doc": "Static property used to define the default attribute\nconfiguration for the Velocity.",
        "!data": {
         "submodule": "aui-ace-autocomplete-velocity"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.html#property_NAME",
       "!doc": "Static property provides a string to identify the class."
      },
      "EXTENDS": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends."
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the ACE Editor."
      },
      "UI_ATTRS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AceEditor.html#property_UI_ATTRS",
       "!doc": "Static property used to define the UI attributes."
      }
     },
     "Plugin": {
      "Aria": {
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Plugin.Aria.html",
       "!data": {
        "for": "aui_aria.A.Plugin.Aria"
       },
       "prototype": {
        "!proto": "plugin.Plugin.Base.prototype"
       },
       "W3C_ATTRIBUTES": {
        "!type": "+Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Plugin.Aria.html#property_W3C_ATTRIBUTES",
        "!doc": "Static property used to define [W3Cs Supported States and\nProperties](http://www.w3.org/TR/wai-aria/states_and_properties)."
       },
       "W3C_ROLES": {
        "!type": "+Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Plugin.Aria.html#property_W3C_ROLES",
        "!doc": "Static property used to define [W3Cs Roles Model](http://www.w3.org/TR/wai-\naria/roles)."
       }
      }
     }
    }
   },
   "aui_aria": {
    "!data": {
     "module": "aui-aria"
    },
    "A": {
     "Plugin": {
      "Aria": {
       "!type": "fn(config: +config.A.Plugin.AriaConfig)",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Plugin.Aria.html",
       "prototype": {
        "!proto": "plugin.Plugin.Base.prototype",
        "isValidAttribute": {
         "!type": "fn(attrName: ?) -> bool",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Plugin.Aria.html#method_isValidAttribute",
         "!doc": "Checks if the ARIA attribute is valid."
        },
        "isValidRole": {
         "!type": "fn(roleName: ?) -> bool",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Plugin.Aria.html#method_isValidRole",
         "!doc": "Checks if the ARIA role is valid."
        },
        "setAttribute": {
         "!type": "fn(attrName: ?, attrValue: ?, node: ?) -> bool",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Plugin.Aria.html#method_setAttribute",
         "!doc": "Set a single ARIA attribute."
        },
        "setAttributes": {
         "!type": "fn(attributes: ?)",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Plugin.Aria.html#method_setAttributes",
         "!doc": "Set a list of ARIA attributes."
        },
        "setRole": {
         "!type": "fn(roleName: ?, node: ?) -> bool",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Plugin.Aria.html#method_setRole",
         "!doc": "Set a single ARIA role."
        },
        "setRoles": {
         "!type": "fn(roles: ?)",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Plugin.Aria.html#method_setRoles",
         "!doc": "Set a list of ARIA roles."
        }
       },
       "NAME": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Plugin.Aria.html#property_NAME",
        "!doc": "Static property provides a string to identify the class."
       },
       "NS": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Plugin.Aria.html#property_NS",
        "!doc": "Static property provides a string to identify the namespace."
       },
       "ATTRS": {
        "!type": "+Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Plugin.Aria.html#property_ATTRS",
        "!doc": "Static property used to define the default attribute configuration for\nthe `A.Aria`."
       },
       "EXTENDS": {
        "!type": "+Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Plugin.Aria.html#property_EXTENDS",
        "!doc": "Static property used to define which component it extends."
       }
      }
     }
    }
   },
   "aui_arraysort": {
    "!data": {
     "module": "aui-arraysort"
    },
    "A": {
     "ArraySort": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ArraySort.html",
      "!data": {
       "extends": [
        "arraysort.ArraySort"
       ]
      },
      "prototype": {
       "compareIgnoreWhiteSpace": {
        "!type": "fn(a: ?, b: ?, desc: ?, compareFn: ?) -> ?",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ArraySort.html#method_compareIgnoreWhiteSpace",
        "!doc": "Compare two arrays ignoring white spaces."
       },
       "stableSort": {
        "!type": "fn(array: ?, compareFn: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ArraySort.html#method_stableSort",
        "!doc": "Sorts an object array keeping the order of equal items. ECMA script\nstandard does not specify the behaviour when the compare function\nreturns the value 0;"
       }
      }
     }
    }
   },
   "aui_audio": {
    "!data": {
     "module": "aui-audio"
    },
    "A": {
     "Audio": {
      "!type": "fn(config: +config.A.AudioConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Audio.html",
      "prototype": {
       "!proto": "aui_component.A.Component.prototype",
       "load": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Audio.html#method_load",
        "!doc": "Load audio track."
       },
       "pause": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Audio.html#method_pause",
        "!doc": "Pause audio track."
       },
       "play": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Audio.html#method_play",
        "!doc": "Play audio track."
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Audio.html#property_NAME",
       "!doc": "Static property provides a string to identify the class."
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Audio.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Audio."
      },
      "BIND_UI_ATTRS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Audio.html#property_BIND_UI_ATTRS",
       "!doc": "Static property used to define the attributes\nfor the bindUI lifecycle phase."
      },
      "SYNC_UI_ATTRS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Audio.html#property_SYNC_UI_ATTRS",
       "!doc": "Static property used to define the attributes\nfor the syncUI lifecycle phase."
      }
     }
    }
   },
   "aui_autosize_iframe": {
    "!data": {
     "module": "aui-autosize-iframe"
    },
    "A": {
     "AutosizeIframe": {
      "!type": "fn(config: +config.A.AutosizeIframeConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AutosizeIframe.html",
      "prototype": {
       "!proto": "plugin.Plugin.Base.prototype",
       "pauseMonitor": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AutosizeIframe.html#method_pauseMonitor",
        "!doc": "Stops to monitor the height."
       },
       "restartMonitor": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AutosizeIframe.html#method_restartMonitor",
        "!doc": "Restarts to monitor the height."
       },
       "getContentHeight": {
        "!type": "fn(iframeWin: ?) -> number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AutosizeIframe.html#method_getContentHeight",
        "!doc": "Returns the content height of a window."
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AutosizeIframe.html#property_NAME",
       "!doc": "Static property provides a string to identify the class."
      },
      "NS": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AutosizeIframe.html#property_NS",
       "!doc": "Static property provides a string to identify the namespace."
      },
      "EXTENDS": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AutosizeIframe.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends."
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AutosizeIframe.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.AutosizeIframe`."
      }
     }
    }
   },
   "aui_button": {
    "!data": {
     "module": "aui-button"
    },
    "A": {
     "ButtonExt": {
      "!type": "fn(config: +config.A.ButtonExtConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonExt.html",
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonExt.html#property_ATTRS",
       "!doc": "Defines the default attribute configuration for the `ButtonExt`."
      },
      "HTML_PARSER": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonExt.html#property_HTML_PARSER",
       "!doc": "Defines how attribute values are to be parsed from markup contained in\n`ButtonExt`."
      },
      "getTypedButtonTemplate": {
       "!type": "fn(template: string, type: string) -> string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonExt.html#method_getTypedButtonTemplate",
       "!doc": "Updates the HTML markup specified as the `template` argument with the\npassed `type`."
      },
      "prototype": {
       "syncButtonExtUI": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonExt.html#method_syncButtonExtUI",
        "!doc": "Updates icon image, icon alignment, and primary button style."
       }
      }
     },
     "ButtonCore": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonCore.html",
      "CLASS_NAMES": {
       "!type": "?",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonCore.html#property_CLASS_NAMES",
       "!doc": "Contains CSS class names to use for `ButtonCore`."
      }
     },
     "Button": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Button.html",
      "!data": {
       "extends": [
        "aui_button.A.ButtonExt",
        "aui_widget_cssclass.A.WidgetCssClass",
        "aui_widget_toggle.A.WidgetToggle"
       ]
      },
      "prototype": {
       "!proto": "button.Button.prototype",
       "getWidgetLazyConstructorFromNodeData": {
        "!type": "fn(node: +node.Node) -> +Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Button.html#method_getWidgetLazyConstructorFromNodeData",
        "!doc": "Returns an object literal containing widget constructor data specified in\nthe node."
       },
       "hasWidgetLazyConstructorData": {
        "!type": "fn(node: +node.Node) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Button.html#method_hasWidgetLazyConstructorData",
        "!doc": "Returns a boolean, true if node has widget constructor data."
       },
       "setWidgetLazyConstructorNodeData": {
        "!type": "fn(node: +node.Node, config: +config.A.ButtonSetWidgetLazyConstructorNodeDataConfig)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Button.html#method_setWidgetLazyConstructorNodeData",
        "!doc": "Updates nodes widget constructor data attribute with config."
       },
       "syncIconUI": {
        "!type": "fn(buttonElement: +node.Node, iconElement: +node.Node, iconAlign: string)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Button.html#method_syncIconUI",
        "!doc": "Updates icon alignment in button."
       }
      },
      "CSS_PREFIX": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Button.html#property_CSS_PREFIX",
       "!doc": "Static property provides a string to identify the CSS prefix."
      }
     },
     "ButtonGroup": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonGroup.html",
      "prototype": {
       "item": {
        "!type": "fn(index: number) -> +button.Button|+node.Node",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonGroup.html#method_item",
        "!doc": "Returns the `item` or `node` of specified `index`."
       },
       "select": {
        "!type": "fn(items: [?])",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonGroup.html#method_select",
        "!doc": "Selects items by adding the active class name."
       },
       "toggleSelect": {
        "!type": "fn(items: [?], forceSelection: bool)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonGroup.html#method_toggleSelect",
        "!doc": "Toggles selection by adding or removing the active class name."
       },
       "unselect": {
        "!type": "fn(items: [?])",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonGroup.html#method_unselect",
        "!doc": "Selects items by adding the active class name."
       }
      }
     },
     "ButtonSearchCancel": {
      "!type": "fn(config: +config.A.ButtonSearchCancelConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonSearchCancel.html",
      "prototype": {
       "!proto": "base.Base.prototype",
       "initializer": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonSearchCancel.html#method_initializer",
        "!doc": "Construction logic executed during `ButtonSearchCancel` instantiation.\nLifecycle."
       },
       "bindUI": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonSearchCancel.html#method_bindUI",
        "!doc": "Bind events on the UI. Lifecycle."
       },
       "getButtonForElement": {
        "!type": "fn(element: +node.Node) -> +node.Node",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonSearchCancel.html#method_getButtonForElement",
        "!doc": "Delegates events on the UI. Lifecycle."
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ButtonSearchCancel.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute configuration for\nthe `ButtonSearchCancel`."
      }
     }
    }
   },
   "aui_carousel": {
    "!data": {
     "module": "aui-carousel"
    },
    "A": {
     "Carousel": {
      "!type": "fn(config: +config.A.CarouselConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Carousel.html",
      "prototype": {
       "!proto": "aui_component.A.Component.prototype",
       "item": {
        "!type": "fn(val: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Carousel.html#method_item",
        "!doc": "Set the `activeIndex` attribute which\nactivates a certain item on Carousel based on its index."
       },
       "next": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Carousel.html#method_next",
        "!doc": "Go to the next index."
       },
       "pause": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Carousel.html#method_pause",
        "!doc": "Set the `playing` attribute\nto false which pauses the animation."
       },
       "play": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Carousel.html#method_play",
        "!doc": "Set the `playing` attribute\nto true which starts the animation."
       },
       "prev": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Carousel.html#method_prev",
        "!doc": "Go to previous index."
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Carousel.html#property_NAME",
       "!doc": "Static property provides a string to identify the class."
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Carousel.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Carousel."
      }
     }
    }
   },
   "aui_char_counter": {
    "!data": {
     "module": "aui-char-counter"
    },
    "A": {
     "CharCounter": {
      "!type": "fn(config: +config.A.CharCounterConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.CharCounter.html",
      "prototype": {
       "!proto": "base.Base.prototype",
       "checkLength": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.CharCounter.html#method_checkLength",
        "!doc": "Check the current value of the\n[input](A.CharCounter.html#attr_input), truncate the data if needed,\nand re-sync the UI. Fired from\n[_onInputChange](A.CharCounter.html#method__onInputChange)."
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.CharCounter.html#property_NAME",
       "!doc": "Static property provides a string to identify the class."
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.CharCounter.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the CharCounter."
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.CharCounter.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends."
      }
     }
    }
   },
   "aui_collection": {
    "!data": {
     "module": "aui-collection",
     "submodules": {
      "aui-linkedset": {},
      "aui-map": {},
      "aui-set": {}
     }
    },
    "A": {
     "LinkedSet": {
      "!type": "fn(config: +config.A.LinkedSetConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.LinkedSet.html",
      "prototype": {
       "!proto": "A.Set.prototype",
       "values": {
        "!type": "fn() -> [?]",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.LinkedSet.html#method_values",
        "!doc": "Gets a list view of the values contained in this linked set.",
        "!data": {
         "submodule": "aui-linkedset"
        }
       }
      }
     },
     "HashMap": {
      "!type": "fn(config: +config.A.HashMapConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HashMap.html",
      "prototype": {
       "!proto": "base.Base.prototype",
       "clear": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HashMap.html#method_clear",
        "!doc": "Fires the `clear` custom event.",
        "!data": {
         "submodule": "aui-map"
        }
       },
       "getValue": {
        "!type": "fn(key: ?) -> +Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HashMap.html#method_getValue",
        "!doc": "Returns the value from a key in this map.",
        "!data": {
         "submodule": "aui-map"
        }
       },
       "has": {
        "!type": "fn(key: ?, opt_hash: ?) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HashMap.html#method_has",
        "!doc": "Checks if this map has the specified key.",
        "!data": {
         "submodule": "aui-map"
        }
       },
       "hasValue": {
        "!type": "fn(value: ?) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HashMap.html#method_hasValue",
        "!doc": "Returns `true` if this map contains a certain value.",
        "!data": {
         "submodule": "aui-map"
        }
       },
       "keys": {
        "!type": "fn() -> +Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HashMap.html#method_keys",
        "!doc": "Returns a collection of the keys contained in this map.",
        "!data": {
         "submodule": "aui-map"
        }
       },
       "isEmpty": {
        "!type": "fn() -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HashMap.html#method_isEmpty",
        "!doc": "Returns `true` if this map contains no key-value mappings.",
        "!data": {
         "submodule": "aui-map"
        }
       },
       "put": {
        "!type": "fn(key: ?, value: ?, opt_hash: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HashMap.html#method_put",
        "!doc": "Fires the `put` custom event.",
        "!data": {
         "submodule": "aui-map"
        }
       },
       "putAll": {
        "!type": "fn(map: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HashMap.html#method_putAll",
        "!doc": "Copies all of the mappings from the specified map to this map.",
        "!data": {
         "submodule": "aui-map"
        }
       },
       "remove": {
        "!type": "fn(key: ?, opt_hash: ?) -> +Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HashMap.html#method_remove",
        "!doc": "Fires the `remove` custom event.",
        "!data": {
         "submodule": "aui-map"
        }
       },
       "size": {
        "!type": "fn() -> number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HashMap.html#method_size",
        "!doc": "Returns the number of key-value mappings in this map.",
        "!data": {
         "submodule": "aui-map"
        }
       },
       "values": {
        "!type": "fn() -> +Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HashMap.html#method_values",
        "!doc": "Returns a collection of the values contained in this map.",
        "!data": {
         "submodule": "aui-map"
        }
       }
      }
     },
     "HashSet": {
      "!type": "fn(config: +config.A.HashSetConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HashSet.html",
      "prototype": {
       "!proto": "base.Base.prototype",
       "add": {
        "!type": "fn(value: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HashSet.html#method_add",
        "!doc": "Fires the `add` custom event.",
        "!data": {
         "submodule": "aui-set"
        }
       },
       "clear": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HashSet.html#method_clear",
        "!doc": "Fires the `clear` custom event.",
        "!data": {
         "submodule": "aui-set"
        }
       },
       "has": {
        "!type": "fn(value: ?, opt_hash: ?) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HashSet.html#method_has",
        "!doc": "Checks if this set has the specified key.",
        "!data": {
         "submodule": "aui-set"
        }
       },
       "isEmpty": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HashSet.html#method_isEmpty",
        "!doc": "Returns `true` if this set contains no elements.",
        "!data": {
         "submodule": "aui-set"
        }
       },
       "remove": {
        "!type": "fn(value: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HashSet.html#method_remove",
        "!doc": "Fires the `remove` custom event with an argument.",
        "!data": {
         "submodule": "aui-set"
        }
       },
       "size": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HashSet.html#method_size",
        "!doc": "Get the size of the map.",
        "!data": {
         "submodule": "aui-set"
        }
       },
       "values": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HashSet.html#method_values",
        "!doc": "Get the keys of the map.",
        "!data": {
         "submodule": "aui-set"
        }
       }
      }
     }
    }
   },
   "aui_color_picker": {
    "!data": {
     "module": "aui-color-picker",
     "submodules": {
      "aui-color-palette": {},
      "aui-color-picker-base": {},
      "aui-color-picker-popover": {},
      "aui-hsv-palette": {},
      "aui-hsv-palette-modal": {},
      "aui-hsva-palette": {}
     }
    },
    "A": {
     "ColorPalette": {
      "!type": "fn(config: +config.A.ColorPaletteConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPalette.html",
      "!data": {
       "extends": [
        "aui_palette.A.Palette",
        "aui_widget_cssclass.A.WidgetCssClass",
        "aui_widget_toggle.A.WidgetToggle"
       ]
      },
      "prototype": {
       "!proto": "widget.Widget.prototype"
      },
      "CSS_PREFIX": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPalette.html#property_CSS_PREFIX",
       "!doc": "Static property provides a string to identify the CSS prefix.",
       "!data": {
        "submodule": "aui-color-palette"
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPalette.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-color-palette"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPalette.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `ColorPalette`.",
       "!data": {
        "submodule": "aui-color-palette"
       }
      }
     },
     "ColorPickerBase": {
      "!type": "fn(config: +config.A.ColorPickerBaseConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPickerBase.html",
      "prototype": {
       "reset": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPickerBase.html#method_reset",
        "!doc": "Resets the `ColorPickerBase` to its default state.",
        "!data": {
         "submodule": "aui-color-picker-base"
        }
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPickerBase.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `ColorPickerBase`.",
       "!data": {
        "submodule": "aui-color-picker-base"
       }
      },
      "CSS_PREFIX": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPickerBase.html#property_CSS_PREFIX",
       "!doc": "Static property provides a string to identify the CSS prefix.",
       "!data": {
        "submodule": "aui-color-picker-base"
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPickerBase.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-color-picker-base"
       }
      }
     },
     "ColorPickerPopover": {
      "!type": "fn(config: +config.A.ColorPickerPopoverConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPickerPopover.html",
      "!data": {
       "augments": [
        "A.WidgetAutohide"
       ],
       "extends": [
        "aui_color_picker.A.ColorPickerBase",
        "aui_widget_cssclass.A.WidgetCssClass",
        "aui_widget_toggle.A.WidgetToggle"
       ]
      },
      "prototype": {
       "!proto": "aui_popover.A.Popover.prototype"
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPickerPopover.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `ColorPickerPopover`.",
       "!data": {
        "submodule": "aui-color-picker-popover"
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPickerPopover.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-color-picker-popover"
       }
      },
      "NS": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ColorPickerPopover.html#property_NS",
       "!doc": "Static property provides a string to identify the namespace.",
       "!data": {
        "submodule": "aui-color-picker-popover"
       }
      }
     },
     "HSVPalette": {
      "!type": "fn(config: +config.A.HSVPaletteConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HSVPalette.html",
      "!data": {
       "extends": [
        "aui_widget_cssclass.A.WidgetCssClass",
        "aui_widget_toggle.A.WidgetToggle"
       ]
      },
      "prototype": {
       "!proto": "widget.Widget.prototype"
      },
      "CSS_PREFIX": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HSVPalette.html#property_CSS_PREFIX",
       "!doc": "Static property provides a string to identify the CSS prefix.",
       "!data": {
        "submodule": "aui-hsv-palette"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HSVPalette.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `HSVPalette`.",
       "!data": {
        "submodule": "aui-hsv-palette"
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HSVPalette.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-hsv-palette"
       }
      },
      "NS": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HSVPalette.html#property_NS",
       "!doc": "Static property provides a string to identify the namespace.",
       "!data": {
        "submodule": "aui-hsv-palette"
       }
      }
     },
     "HSVAPaletteModal": {
      "!type": "fn(config: +config.A.HSVAPaletteModalConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HSVAPaletteModal.html",
      "prototype": {
       "!proto": "aui_modal.A.Modal.prototype"
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HSVAPaletteModal.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `HSVAPaletteModal`.",
       "!data": {
        "submodule": "aui-hsv-palette-modal"
       }
      },
      "CSS_PREFIX": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HSVAPaletteModal.html#property_CSS_PREFIX",
       "!doc": "Static property provides a string to identify the CSS prefix.",
       "!data": {
        "submodule": "aui-hsv-palette-modal"
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HSVAPaletteModal.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-hsv-palette-modal"
       }
      },
      "NS": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HSVAPaletteModal.html#property_NS",
       "!doc": "Static property provides a string to identify the namespace.",
       "!data": {
        "submodule": "aui-hsv-palette-modal"
       }
      }
     },
     "HSVAPalette": {
      "!type": "fn(config: +config.A.HSVAPaletteConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HSVAPalette.html",
      "prototype": {
       "!proto": "aui_color_picker.A.HSVPalette.prototype"
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HSVAPalette.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-hsva-palette"
       }
      },
      "NS": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HSVAPalette.html#property_NS",
       "!doc": "Static property provides a string to identify the namespace.",
       "!data": {
        "submodule": "aui-hsva-palette"
       }
      }
     }
    }
   },
   "aui_component": {
    "!data": {
     "module": "aui-component"
    },
    "A": {
     "Component": {
      "!type": "fn(config: +config.A.ComponentConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Component.html",
      "!data": {
       "extends": [
        "aui_widget_cssclass.A.WidgetCssClass",
        "aui_widget_toggle.A.WidgetToggle"
       ]
      },
      "prototype": {
       "!proto": "widget.Widget.prototype",
       "clone": {
        "!type": "fn(config: +config.A.ComponentCloneConfig) -> +widget.Widget",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Component.html#method_clone",
        "!doc": "Clone the current `A.Component`."
       },
       "getById": {
        "!type": "fn(id: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Component.html#method_getById",
        "!doc": "Gets components instance by id."
       },
       "create": {
        "!type": "fn(config: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Component.html#method_create",
        "!doc": "Applies standard extensions from a given config to create a new class using\nthe static `Base.build` method."
       },
       "build": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Component.html#method_build",
        "!doc": "Applies extensions to a class using the static `Base.build` method."
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Component.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute configuration for\nthe Component."
      },
      "_INSTANCES": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Component.html#property__INSTANCES",
       "!doc": "Static property used to define the map to store Component instances by id."
      },
      "CSS_PREFIX": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Component.html#property_CSS_PREFIX",
       "!doc": "Static property provides a string to identify the CSS prefix."
      }
     }
    }
   },
   "aui_datatable": {
    "!data": {
     "module": "aui-datatable",
     "submodules": {
      "aui-datatable-edit": {},
      "aui-datatable-highlight": {},
      "aui-datatable-property-list": {},
      "aui-datatable-selection": {}
     }
    },
    "A": {
     "DataTable": {
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/DataTable.html",
      "!data": {
       "for": "datatable.DataTable"
      },
      "prototype": {
       "!proto": "datatable.DataTable.Base.prototype"
      },
      "CellEditorSupport": {
       "!type": "fn(config: +config.A.DataTable.CellEditorSupportConfig)",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTable.CellEditorSupport.html",
       "NAME": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTable.CellEditorSupport.html#property_NAME",
        "!doc": "Static property provides a string to identify the class.",
        "!data": {
         "submodule": "aui-datatable-edit"
        }
       },
       "EDITOR_ZINDEX": {
        "!type": "number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTable.CellEditorSupport.html#property_EDITOR_ZINDEX",
        "!doc": "TODO. Wanna help? Please send a Pull Request.",
        "!data": {
         "submodule": "aui-datatable-edit"
        }
       },
       "ATTRS": {
        "!type": "+Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTable.CellEditorSupport.html#property_ATTRS",
        "!doc": "Static property used to define the default attribute\nconfiguration for the CellEditorSupport.",
        "!data": {
         "submodule": "aui-datatable-edit"
        }
       },
       "prototype": {
        "getEditor": {
         "!type": "fn(record: ?, column: ?)",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTable.CellEditorSupport.html#method_getEditor",
         "!doc": "TODO. Wanna help? Please send a Pull Request.",
         "!data": {
          "submodule": "aui-datatable-edit"
         }
        },
        "getCellEditor": {
         "!type": "fn()",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTable.CellEditorSupport.html#method_getCellEditor",
         "!doc": "TODO. Wanna help? Please send a Pull Request.",
         "!data": {
          "submodule": "aui-datatable-edit"
         }
        },
        "getRecordColumnValue": {
         "!type": "fn(record: ?, column: ?)",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTable.CellEditorSupport.html#method_getRecordColumnValue",
         "!doc": "TODO. Wanna help? Please send a Pull Request.",
         "!data": {
          "submodule": "aui-datatable-edit"
         }
        }
       }
      }
     },
     "BaseCellEditor": {
      "!type": "fn(config: +config.A.BaseCellEditorConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseCellEditor.html",
      "prototype": {
       "!proto": "overlay.Overlay.prototype",
       "formatValue": {
        "!type": "fn(formatter: ?, val: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseCellEditor.html#method_formatValue",
        "!doc": "TODO. Wanna help? Please send a Pull Request.",
        "!data": {
         "submodule": "aui-datatable-edit"
        }
       },
       "getValue": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseCellEditor.html#method_getValue",
        "!doc": "TODO. Wanna help? Please send a Pull Request.",
        "!data": {
         "submodule": "aui-datatable-edit"
        }
       },
       "getElementsValue": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseCellEditor.html#method_getElementsValue",
        "!doc": "TODO. Wanna help? Please send a Pull Request.\n\nNOTE FOR DEVELOPERS: Yoy *may* want to replace the methods from\nthis section on your implementation.",
        "!data": {
         "submodule": "aui-datatable-edit"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseCellEditor.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-datatable-edit"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseCellEditor.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the BaseCellEditor.",
       "!data": {
        "submodule": "aui-datatable-edit"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseCellEditor.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-datatable-edit"
       }
      },
      "UI_ATTRS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseCellEditor.html#property_UI_ATTRS",
       "!doc": "TODO. Wanna help? Please send a Pull Request.",
       "!data": {
        "submodule": "aui-datatable-edit"
       }
      }
     },
     "BaseOptionsCellEditor": {
      "!type": "fn(config: +config.A.BaseOptionsCellEditorConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseOptionsCellEditor.html",
      "prototype": {
       "!proto": "aui_datatable.A.BaseCellEditor.prototype",
       "addNewOption": {
        "!type": "fn(name: ?, value: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseOptionsCellEditor.html#method_addNewOption",
        "!doc": "TODO. Wanna help? Please send a Pull Request.",
        "!data": {
         "submodule": "aui-datatable-edit"
        }
       },
       "removeOption": {
        "!type": "fn(optionRow: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseOptionsCellEditor.html#method_removeOption",
        "!doc": "TODO. Wanna help? Please send a Pull Request.",
        "!data": {
         "submodule": "aui-datatable-edit"
        }
       },
       "saveOptions": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseOptionsCellEditor.html#method_saveOptions",
        "!doc": "TODO. Wanna help? Please send a Pull Request.",
        "!data": {
         "submodule": "aui-datatable-edit"
        }
       },
       "toggleEdit": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseOptionsCellEditor.html#method_toggleEdit",
        "!doc": "TODO. Wanna help? Please send a Pull Request.",
        "!data": {
         "submodule": "aui-datatable-edit"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseOptionsCellEditor.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-datatable-edit"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseOptionsCellEditor.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the BaseOptionsCellEditor.",
       "!data": {
        "submodule": "aui-datatable-edit"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseOptionsCellEditor.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-datatable-edit"
       }
      },
      "UI_ATTRS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.BaseOptionsCellEditor.html#property_UI_ATTRS",
       "!doc": "TODO. Wanna help? Please send a Pull Request.",
       "!data": {
        "submodule": "aui-datatable-edit"
       }
      }
     },
     "TextCellEditor": {
      "!type": "fn(config: +config.A.TextCellEditorConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TextCellEditor.html",
      "prototype": {
       "!proto": "aui_datatable.A.BaseCellEditor.prototype"
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TextCellEditor.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-datatable-edit"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TextCellEditor.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-datatable-edit"
       }
      }
     },
     "TextAreaCellEditor": {
      "!type": "fn(config: +config.A.TextAreaCellEditorConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TextAreaCellEditor.html",
      "prototype": {
       "!proto": "aui_datatable.A.BaseCellEditor.prototype"
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TextAreaCellEditor.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-datatable-edit"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TextAreaCellEditor.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-datatable-edit"
       }
      }
     },
     "DropDownCellEditor": {
      "!type": "fn(config: +config.A.DropDownCellEditorConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DropDownCellEditor.html",
      "prototype": {
       "!proto": "aui_datatable.A.BaseOptionsCellEditor.prototype",
       "getElementsValue": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DropDownCellEditor.html#method_getElementsValue",
        "!doc": "TODO. Wanna help? Please send a Pull Request.",
        "!data": {
         "submodule": "aui-datatable-edit"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DropDownCellEditor.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-datatable-edit"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DropDownCellEditor.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the DropDownCellEditor.",
       "!data": {
        "submodule": "aui-datatable-edit"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DropDownCellEditor.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-datatable-edit"
       }
      },
      "UI_ATTRS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DropDownCellEditor.html#property_UI_ATTRS",
       "!doc": "TODO. Wanna help? Please send a Pull Request.",
       "!data": {
        "submodule": "aui-datatable-edit"
       }
      }
     },
     "CheckboxCellEditor": {
      "!type": "fn(config: +config.A.CheckboxCellEditorConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.CheckboxCellEditor.html",
      "prototype": {
       "!proto": "aui_datatable.A.BaseOptionsCellEditor.prototype",
       "getElementsValue": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.CheckboxCellEditor.html#method_getElementsValue",
        "!doc": "TODO. Wanna help? Please send a Pull Request.",
        "!data": {
         "submodule": "aui-datatable-edit"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.CheckboxCellEditor.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-datatable-edit"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.CheckboxCellEditor.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the CheckboxCellEditor.",
       "!data": {
        "submodule": "aui-datatable-edit"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.CheckboxCellEditor.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-datatable-edit"
       }
      }
     },
     "RadioCellEditor": {
      "!type": "fn(config: +config.A.RadioCellEditorConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.RadioCellEditor.html",
      "prototype": {
       "!proto": "aui_datatable.A.CheckboxCellEditor.prototype",
       "getElementsValue": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.RadioCellEditor.html#method_getElementsValue",
        "!doc": "TODO. Wanna help? Please send a Pull Request.",
        "!data": {
         "submodule": "aui-datatable-edit"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.RadioCellEditor.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-datatable-edit"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.RadioCellEditor.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-datatable-edit"
       }
      }
     },
     "DateCellEditor": {
      "!type": "fn(config: +config.A.DateCellEditorConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DateCellEditor.html",
      "prototype": {
       "!proto": "aui_datatable.A.BaseCellEditor.prototype",
       "getElementsValue": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DateCellEditor.html#method_getElementsValue",
        "!doc": "TODO. Wanna help? Please send a Pull Request.",
        "!data": {
         "submodule": "aui-datatable-edit"
        }
       },
       "formatDate": {
        "!type": "fn(date: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DateCellEditor.html#method_formatDate",
        "!doc": "TODO. Wanna help? Please send a Pull Request.",
        "!data": {
         "submodule": "aui-datatable-edit"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DateCellEditor.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-datatable-edit"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DateCellEditor.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-datatable-edit"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DateCellEditor.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the DateCellEditor.",
       "!data": {
        "submodule": "aui-datatable-edit"
       }
      }
     },
     "DataTableHighlight": {
      "!type": "fn(config: +config.A.DataTableHighlightConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTableHighlight.html",
      "prototype": {
       "!proto": "plugin.Plugin.Base.prototype",
       "clear": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTableHighlight.html#method_clear",
        "!doc": "TODO. Wanna help? Please send a Pull Request.",
        "!data": {
         "submodule": "aui-datatable-highlight"
        }
       },
       "getActiveRegion": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTableHighlight.html#method_getActiveRegion",
        "!doc": "TODO. Wanna help? Please send a Pull Request.",
        "!data": {
         "submodule": "aui-datatable-highlight"
        }
       },
       "getSelectionRegion": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTableHighlight.html#method_getSelectionRegion",
        "!doc": "TODO. Wanna help? Please send a Pull Request.",
        "!data": {
         "submodule": "aui-datatable-highlight"
        }
       }
      },
      "NS": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTableHighlight.html#property_NS",
       "!doc": "TODO. Wanna help? Please send a Pull Request.",
       "!data": {
        "submodule": "aui-datatable-highlight"
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTableHighlight.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-datatable-highlight"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTableHighlight.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the DataTableHighlight.",
       "!data": {
        "submodule": "aui-datatable-highlight"
       }
      }
     },
     "PropertyList": {
      "!type": "fn(config: +config.A.PropertyListConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.PropertyList.html",
      "!data": {
       "extends": [
        "aui_widget_cssclass.A.WidgetCssClass",
        "aui_widget_toggle.A.WidgetToggle"
       ]
      },
      "prototype": {
       "!proto": "datatable.DataTable.prototype",
       "getDefaultEditor": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.PropertyList.html#method_getDefaultEditor",
        "!doc": "TODO. Wanna help? Please send a Pull Request.",
        "!data": {
         "submodule": "aui-datatable-property-list"
        }
       }
      },
      "CSS_PREFIX": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.PropertyList.html#property_CSS_PREFIX",
       "!doc": "TODO. Wanna help? Please send a Pull Request.",
       "!data": {
        "submodule": "aui-datatable-property-list"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.PropertyList.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the PropertyList.",
       "!data": {
        "submodule": "aui-datatable-property-list"
       }
      }
     },
     "DataTableSelection": {
      "!type": "fn(config: +config.A.DataTableSelectionConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTableSelection.html",
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTableSelection.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the DataTableSelection.",
       "!data": {
        "submodule": "aui-datatable-selection"
       }
      },
      "prototype": {
       "captureSelection": {
        "!type": "fn(coords: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTableSelection.html#method_captureSelection",
        "!doc": "TODO. Wanna help? Please send a Pull Request.",
        "!data": {
         "submodule": "aui-datatable-selection"
        }
       },
       "getActiveColumn": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTableSelection.html#method_getActiveColumn",
        "!doc": "TODO. Wanna help? Please send a Pull Request.",
        "!data": {
         "submodule": "aui-datatable-selection"
        }
       },
       "getActiveRecord": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTableSelection.html#method_getActiveRecord",
        "!doc": "TODO. Wanna help? Please send a Pull Request.",
        "!data": {
         "submodule": "aui-datatable-selection"
        }
       },
       "getCoord": {
        "!type": "fn(seed: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTableSelection.html#method_getCoord",
        "!doc": "TODO. Wanna help? Please send a Pull Request.",
        "!data": {
         "submodule": "aui-datatable-selection"
        }
       },
       "getColumn": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTableSelection.html#method_getColumn",
        "!doc": "TODO. Wanna help? Please send a Pull Request.",
        "!data": {
         "submodule": "aui-datatable-selection"
        }
       },
       "getRow": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataTableSelection.html#method_getRow",
        "!doc": "TODO. Wanna help? Please send a Pull Request.\n\nAdd support to get a row by seed on DataTable getRow\nSee http://yuilibrary.com/projects/yui3/ticket/2532605",
        "!data": {
         "submodule": "aui-datatable-selection"
        }
       }
      }
     }
    }
   },
   "aui_datatype_date_parse": {
    "!data": {
     "module": "aui-datatype-date-parse"
    },
    "A": {
     "DateParser": {
      "!type": "fn(opt_pattern: string)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DateParser.html",
      "TOKEN_PREFIX": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DateParser.html#property_TOKEN_PREFIX",
       "!doc": "Static property provides a string to identify the token prefix, e.g. %A."
      },
      "TWO_DIGIT_YEAR_BASE": {
       "!type": "number",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DateParser.html#property_TWO_DIGIT_YEAR_BASE",
       "!doc": "Static property provides a base year to sum two digit years, e.g. For the\nmask %Y, \"13\" will be parsed to 2013."
      },
      "prototype": {
       "compilePattern": {
        "!type": "fn(pattern: string)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DateParser.html#method_compilePattern",
        "!doc": "\"Compiles\" the strftime pattern. The same DateParser instance can be\nreused to other \"compiled\" masks."
       },
       "parse": {
        "!type": "fn(mask: string, text: string, opt_date: +datatype_date.Date) -> +datatype_date.Date",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DateParser.html#method_parse",
        "!doc": "Takes a string mask and a text as input and parses it as a native\nJavaScript Date."
       }
      },
      "HINTS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DateParser.html#property_HINTS",
       "!doc": "Static property provides an object that contains hints information for\npossible token values, e.g. year, month, day etc."
      },
      "HINTS.AGGREGATES": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DateParser.html#property_HINTS.AGGREGATES",
       "!doc": "Static property provides an object that contains hints information for\naggregates tokens."
      },
      "HINTS.AMPM": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DateParser.html#property_HINTS.AMPM",
       "!doc": "Static property provides an object that contains hints information for\nampm tokens."
      },
      "HINTS.YEAR": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DateParser.html#property_HINTS.YEAR",
       "!doc": "Static property provides an object that contains hints information for\nyear tokens."
      },
      "HINTS.MONTH": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DateParser.html#property_HINTS.MONTH",
       "!doc": "Static property provides an object that contains hints information for\nmonth tokens."
      },
      "HINTS.DAY": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DateParser.html#property_HINTS.DAY",
       "!doc": "Static property provides an object that contains hints information for\nday tokens."
      },
      "HINTS.HOURS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DateParser.html#property_HINTS.HOURS",
       "!doc": "Static property provides an object that contains hints information for\nhours tokens."
      },
      "HINTS.MINUTES": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DateParser.html#property_HINTS.MINUTES",
       "!doc": "Static property provides an object that contains hints information for\nminutes tokens."
      },
      "HINTS.SECONDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DateParser.html#property_HINTS.SECONDS",
       "!doc": "Static property provides an object that contains hints information for\nseconds tokens."
      },
      "HINTS.TZ": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DateParser.html#property_HINTS.TZ",
       "!doc": "Static property provides an object that contains hints information for\ntimezone tokens."
      }
     }
    },
    "Date": {
     "!url": "http://alloyui.com/versions/2.0.x/api/classes/Date.html",
     "!data": {
      "for": "datatype_date.Date"
     },
     "parse": {
      "!type": "fn(mask: string, text: string, opt_date: +datatype_date.Date) -> +datatype_date.Date",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/Date.html#method_parse",
      "!doc": "Takes a string mask and a text as input and parses it as a native JavaScript\nDate. **If only one argument is passed**, the YUI parser will be called for\nbackwards compatibility."
     }
    }
   },
   "aui_datatype": {
    "!data": {
     "module": "aui-datatype"
    },
    "A": {
     "DataType": {
      "Boolean": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.Boolean.html",
       "prototype": {
        "parse": {
         "!type": "fn(data: ?) -> bool",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.Boolean.html#method_parse",
         "!doc": "Parses any `falsey` value to `false` and `non-falsey` to `true`."
        }
       }
      },
      "String": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.String.html",
       "prototype": {
        "evaluate": {
         "!type": "fn(data: ?) -> bool|number|string",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.String.html#method_evaluate",
         "!doc": "Evaluates a string to a primitive value (if possible). Supports\n`true` and `false` also. Unrecognized strings are\nreturned without any modification."
        }
       }
      },
      "DateMath": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html",
       "DAY": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#property_DAY",
        "!doc": "Constant field representing Day."
       },
       "WEEK": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#property_WEEK",
        "!doc": "Constant field representing Week."
       },
       "YEAR": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#property_YEAR",
        "!doc": "Constant field representing Year."
       },
       "MONTH": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#property_MONTH",
        "!doc": "Constant field representing Month."
       },
       "MINUTES": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#property_MINUTES",
        "!doc": "Constant field representing Minutes."
       },
       "HOUR": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#property_HOUR",
        "!doc": "Constant field representing Hour."
       },
       "SECONDS": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#property_SECONDS",
        "!doc": "Constant field representing Seconds."
       },
       "MAX_MONTH_LENGTH": {
        "!type": "number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#property_MAX_MONTH_LENGTH",
        "!doc": "Constant field representing the number of maximum days in a month."
       },
       "WEEK_LENGTH": {
        "!type": "number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#property_WEEK_LENGTH",
        "!doc": "Constant field representing the number of maximum days in a week."
       },
       "ONE_DAY_MS": {
        "!type": "number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#property_ONE_DAY_MS",
        "!doc": "Constant field representing one day, in milliseconds."
       },
       "ONE_HOUR_MS": {
        "!type": "number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#property_ONE_HOUR_MS",
        "!doc": "Constant field representing one hour, in milliseconds."
       },
       "ONE_MINUTE_MS": {
        "!type": "number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#property_ONE_MINUTE_MS",
        "!doc": "Constant field representing one minute, in milliseconds."
       },
       "ONE_SECOND_MS": {
        "!type": "number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#property_ONE_SECOND_MS",
        "!doc": "Constant field representing one second, in milliseconds."
       },
       "WEEK_ONE_JAN_DATE": {
        "!type": "number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#property_WEEK_ONE_JAN_DATE",
        "!doc": "Constant field representing the date in first week of January\nwhich identifies the first week of the year.\n\nIn the U.S, Jan 1st is normally used based on a Sunday start of week. ISO\n8601, used widely throughout Europe, uses Jan 4th, based on a Monday\nstart of week."
       },
       "prototype": {
        "add": {
         "!type": "fn(date: +datatype_date.Date, field: string, amount: number) -> +datatype_date.Date",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_add",
         "!doc": "Adds the specified amount of time to the this instance."
        },
        "compare": {
         "!type": "fn(d1: +datatype_date.Date, d2: +datatype_date.Date) -> bool",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_compare",
         "!doc": "Compare dates."
        },
        "copyHours": {
         "!type": "fn(d1: ?, d2: ?)",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_copyHours",
         "!doc": "Copies hours, minutes, seconds and milliseconds."
        },
        "subtract": {
         "!type": "fn(date: +datatype_date.Date, field: number, amount: number) -> +datatype_date.Date",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_subtract",
         "!doc": "Subtracts the specified amount of time from the this instance."
        },
        "before": {
         "!type": "fn(date: +datatype_date.Date, compareTo: +datatype_date.Date) -> bool",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_before",
         "!doc": "Determines whether a given date is before another date on the calendar."
        },
        "after": {
         "!type": "fn(date: +datatype_date.Date, compareTo: +datatype_date.Date) -> bool",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_after",
         "!doc": "Determines whether a given date is after another date on the calendar."
        },
        "between": {
         "!type": "fn(date: +datatype_date.Date, dateBegin: +datatype_date.Date, dateEnd: +datatype_date.Date) -> bool",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_between",
         "!doc": "Determines whether a given date is between two other dates on the\ncalendar."
        },
        "getJan1": {
         "!type": "fn(calendarYear: number) -> +datatype_date.Date",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_getJan1",
         "!doc": "Retrieves a JavaScript Date object representing January 1 of any given\nyear."
        },
        "getDayOffset": {
         "!type": "fn(d1: +datatype_date.Date, d2: +datatype_date.Date) -> number",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_getDayOffset",
         "!doc": "Calculates the number of days between the specified dates."
        },
        "getHoursOffset": {
         "!type": "fn(d1: +datatype_date.Date, d2: +datatype_date.Date) -> number",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_getHoursOffset",
         "!doc": "Calculates the number of hours between the specified dates."
        },
        "getMinutesOffset": {
         "!type": "fn(d1: +datatype_date.Date, d2: +datatype_date.Date) -> number",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_getMinutesOffset",
         "!doc": "Calculates the number of minutes between the specified dates."
        },
        "getSecondsOffset": {
         "!type": "fn(d1: +datatype_date.Date, d2: +datatype_date.Date) -> number",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_getSecondsOffset",
         "!doc": "Calculates the number of seconds between the specified dates."
        },
        "getOffset": {
         "!type": "fn(d1: ?, d2: ?, constantAmount: ?)",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_getOffset",
         "!doc": "Returns the amount of time subtracted."
        },
        "getWeekNumber": {
         "!type": "fn(date: +datatype_date.Date, firstDayOfWeek: number, janDate: number) -> number",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_getWeekNumber",
         "!doc": "Calculates the week number for the given date. Can currently support standard\nU.S. week numbers, based on Jan 1st defining the 1st week of the year, and\nISO8601 week numbers, based on Jan 4th defining the 1st week of the year."
        },
        "getFirstDayOfWeek": {
         "!type": "fn(dt: +datatype_date.Date, startOfWeek: number) -> +datatype_date.Date",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_getFirstDayOfWeek",
         "!doc": "Gets the first day of the week, for the give date."
        },
        "isWeekDay": {
         "!type": "fn(date: +datatype_date.Date) -> ?",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_isWeekDay",
         "!doc": "Checks if the passed date is a week day."
        },
        "isTueOrThu": {
         "!type": "fn(date: +datatype_date.Date) -> ?",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_isTueOrThu",
         "!doc": "Checks if the passed date is a Tuesday or Thursday."
        },
        "isMonWedOrFri": {
         "!type": "fn(date: +datatype_date.Date) -> ?",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_isMonWedOrFri",
         "!doc": "Checks if the passed date is a Monday, Wednesday or Friday."
        },
        "isNextDay": {
         "!type": "fn(date1: +datatype_date.Date, date2: +datatype_date.Date) -> ?",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_isNextDay",
         "!doc": "Checks if the {date2} is the next day."
        },
        "isNextDayBoundary": {
         "!type": "fn(date1: +datatype_date.Date, date2: +datatype_date.Date) -> ?",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_isNextDayBoundary",
         "!doc": "Checks if the {date2} is the next day at 00:00:00."
        },
        "isDayOverlap": {
         "!type": "fn(date1: +datatype_date.Date, date2: +datatype_date.Date) -> ?",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_isDayOverlap",
         "!doc": "Checks if the passed date is between two days."
        },
        "isToday": {
         "!type": "fn(date: +datatype_date.Date) -> ?",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_isToday",
         "!doc": "Checks if the passed date is today."
        },
        "isSameMonth": {
         "!type": "fn(d1: +datatype_date.Date, d2: +datatype_date.Date) -> ?",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_isSameMonth",
         "!doc": "Checks if the passed dates are in the same month."
        },
        "isYearOverlapWeek": {
         "!type": "fn(weekBeginDate: +datatype_date.Date) -> bool",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_isYearOverlapWeek",
         "!doc": "Determines if a given week overlaps two different years."
        },
        "isMonthOverlapWeek": {
         "!type": "fn(weekBeginDate: +datatype_date.Date) -> bool",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_isMonthOverlapWeek",
         "!doc": "Determines if a given week overlaps two different months."
        },
        "findMonthStart": {
         "!type": "fn(date: +datatype_date.Date) -> +datatype_date.Date",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_findMonthStart",
         "!doc": "Getss the first day of a month containing a given date."
        },
        "findMonthEnd": {
         "!type": "fn(date: +datatype_date.Date) -> +datatype_date.Date",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_findMonthEnd",
         "!doc": "Gets the last day of a month containing a given date."
        },
        "clearTime": {
         "!type": "fn(date: +datatype_date.Date) -> +datatype_date.Date",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_clearTime",
         "!doc": "Clears the time fields from a given date, effectively setting the time to\n12 noon."
        },
        "safeClearTime": {
         "!type": "fn(date: +datatype_date.Date) -> +datatype_date.Date",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_safeClearTime",
         "!doc": "Clears the time fields from a given date, effectively setting the time to\n12 noon. This is \"safe\" because clones the date before clear, not\naffecting the passed reference."
        },
        "toLastHour": {
         "!type": "fn(date: +datatype_date.Date) -> +datatype_date.Date",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_toLastHour",
         "!doc": "Sets the time fields from a given date to the last possible hour."
        },
        "toMidnight": {
         "!type": "fn(date: +datatype_date.Date) -> +datatype_date.Date",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_toMidnight",
         "!doc": "Sets the time fields from a given date to midnight."
        },
        "clone": {
         "!type": "fn(date: +datatype_date.Date) -> +datatype_date.Date",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_clone",
         "!doc": "Clones the passed date object."
        },
        "getDate": {
         "!type": "fn(y: number, m: number, d: number) -> +datatype_date.Date",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_getDate",
         "!doc": "Returns a new JavaScript Date object, representing the given year,\nmonth and date. Time fields (hr, min, sec, ms) on the new Date object\nare set to 0. The method allows Date instances to be created with the a\nyear less than 100. \"new Date(year, month, date)\" implementations\nset the year to 19xx if a year (xx) which is less than 100 is provided.\n\n**NOTE:** Validation on argument values is not performed. It is the\ncallers responsibility to ensure arguments are valid as per the\nECMAScript-262 Date object specification for the\nnew Date(year, month[, date]) constructor."
        },
        "getDaysInMonth": {
         "!type": "fn(year: ?, month: ?) -> +datatype_date.Date",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_getDaysInMonth",
         "!doc": "Gets date from a given month and year."
        },
        "toUsTimeString": {
         "!type": "fn(date: ?, padHours: ?, omitMinutes: ?, hideAmPm: ?) -> string",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_toUsTimeString",
         "!doc": "Converts a date to US time format."
        },
        "toIsoTimeString": {
         "!type": "fn(date: ?, showSeconds: ?) -> string",
         "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DataType.DateMath.html#method_toIsoTimeString",
         "!doc": "Converts a date to ISO time format."
        }
       }
      }
     }
    }
   },
   "aui_datepicker": {
    "!data": {
     "module": "aui-datepicker",
     "submodules": {
      "aui-datepicker-delegate": {},
      "aui-datepicker-native": {},
      "aui-datepicker-popover": {}
     }
    },
    "A": {
     "DatePickerDelegate": {
      "!type": "fn(config: +config.A.DatePickerDelegateConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerDelegate.html",
      "prototype": {
       "getSelectedDates": {
        "!type": "fn(node: ?) -> +Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerDelegate.html#method_getSelectedDates",
        "!doc": "Gets the selected dates.",
        "!data": {
         "submodule": "aui-datepicker-delegate"
        }
       },
       "getParsedDatesFromInputValue": {
        "!type": "fn(opt_value: ?) -> +Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerDelegate.html#method_getParsedDatesFromInputValue",
        "!doc": "Gets parsed dates from input value.",
        "!data": {
         "submodule": "aui-datepicker-delegate"
        }
       },
       "useInputNode": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerDelegate.html#method_useInputNode",
        "!doc": "Method not implemented.",
        "!data": {
         "submodule": "aui-datepicker-delegate"
        }
       },
       "useInputNodeOnce": {
        "!type": "fn(node: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerDelegate.html#method_useInputNodeOnce",
        "!doc": "Triggers `useInputNode` method once.",
        "!data": {
         "submodule": "aui-datepicker-delegate"
        }
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerDelegate.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute configuration for the\n`DatePickerDelegate`.",
       "!data": {
        "submodule": "aui-datepicker-delegate"
       }
      }
     },
     "DatePickerNativeBase": {
      "!type": "fn(config: +config.A.DatePickerNativeBaseConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerNativeBase.html",
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerNativeBase.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute configuration for the\n`DatePickerNativeBase`.",
       "!data": {
        "submodule": "aui-datepicker-native"
       }
      },
      "prototype": {
       "bindNativeUI": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerNativeBase.html#method_bindNativeUI",
        "!doc": "Bind the events on the `DatePickerNativeBase` UI. Lifecycle.",
        "!data": {
         "submodule": "aui-datepicker-native"
        }
       },
       "clearSelection": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerNativeBase.html#method_clearSelection",
        "!doc": "Clears selected dates in the native calendar.",
        "!data": {
         "submodule": "aui-datepicker-native"
        }
       },
       "deselectDates": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerNativeBase.html#method_deselectDates",
        "!doc": "Deselects dates in the native calendar.",
        "!data": {
         "submodule": "aui-datepicker-native"
        }
       },
       "hide": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerNativeBase.html#method_hide",
        "!doc": "Blurs native calendar.",
        "!data": {
         "submodule": "aui-datepicker-native"
        }
       },
       "show": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerNativeBase.html#method_show",
        "!doc": "Focus native calendar.",
        "!data": {
         "submodule": "aui-datepicker-native"
        }
       },
       "selectDates": {
        "!type": "fn(dates: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerNativeBase.html#method_selectDates",
        "!doc": "Selects a date in the native calendar.",
        "!data": {
         "submodule": "aui-datepicker-native"
        }
       },
       "useInputNode": {
        "!type": "fn(node: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerNativeBase.html#method_useInputNode",
        "!doc": "Renders the widget in an `<input>` node.",
        "!data": {
         "submodule": "aui-datepicker-native"
        }
       }
      }
     },
     "DatePickerPopover": {
      "!type": "fn(config: +config.A.DatePickerPopoverConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerPopover.html",
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerPopover.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute configuration for the\n`DatePickerPopover`.",
       "!data": {
        "submodule": "aui-datepicker-popover"
       }
      },
      "prototype": {
       "alignTo": {
        "!type": "fn(node: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerPopover.html#method_alignTo",
        "!doc": "Sets the `Popover` alignment.",
        "!data": {
         "submodule": "aui-datepicker-popover"
        }
       },
       "getPopover": {
        "!type": "fn() -> +Popover",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerPopover.html#method_getPopover",
        "!doc": "Returns an existent `Popover` instance or creates a new one if it\ndoesnt exists.",
        "!data": {
         "submodule": "aui-datepicker-popover"
        }
       },
       "hide": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerPopover.html#method_hide",
        "!doc": "Hides the `Popover`.",
        "!data": {
         "submodule": "aui-datepicker-popover"
        }
       },
       "show": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerPopover.html#method_show",
        "!doc": "Shows the `Popover`.",
        "!data": {
         "submodule": "aui-datepicker-popover"
        }
       }
      }
     },
     "DatePickerBase": {
      "!type": "fn(config: +config.A.DatePickerBaseConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerBase.html",
      "PANES": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerBase.html#property_PANES",
       "!doc": "Lists `CalendarBase` pane templates."
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerBase.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute configuration for the\n`DatePickerBase`."
      },
      "prototype": {
       "clearSelection": {
        "!type": "fn(silent: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerBase.html#method_clearSelection",
        "!doc": "Clears a selection in the `Calendar`."
       },
       "deselectDates": {
        "!type": "fn(dates: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerBase.html#method_deselectDates",
        "!doc": "Deselects a date in the `Calendar`."
       },
       "getCalendar": {
        "!type": "fn() -> +calendar.Calendar",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerBase.html#method_getCalendar",
        "!doc": "Returns an existent `Calendar` instance or creates a new one if it\ndoesnt exists."
       },
       "selectDates": {
        "!type": "fn(dates: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerBase.html#method_selectDates",
        "!doc": "Selects a date in the `Calendar`."
       },
       "useInputNode": {
        "!type": "fn(node: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DatePickerBase.html#method_useInputNode",
        "!doc": "Renders the widget in an `<input>` node."
       }
      }
     }
    }
   },
   "aui_diagram_builder": {
    "!data": {
     "module": "aui-diagram-builder",
     "submodules": {
      "aui-diagram-builder-base": {},
      "aui-diagram-builder-connector": {},
      "aui-diagram-builder-impl": {}
     }
    },
    "A": {
     "AvailableField": {
      "!type": "fn(config: +config.A.AvailableFieldConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AvailableField.html",
      "prototype": {
       "!proto": "base.Base.prototype"
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AvailableField.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-diagram-builder-base"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AvailableField.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.AvailableField`.",
       "!data": {
        "submodule": "aui-diagram-builder-base"
       }
      },
      "EXTENDS": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.AvailableField.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-diagram-builder-base"
       }
      }
     },
     "FieldSupport": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FieldSupport.html",
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FieldSupport.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.FieldSupport`.",
       "!data": {
        "submodule": "aui-diagram-builder-base"
       }
      },
      "prototype": {
       "addField": {
        "!type": "fn(field: ?, index: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FieldSupport.html#method_addField",
        "!doc": "Adds a single field in the field list.",
        "!data": {
         "submodule": "aui-diagram-builder-base"
        }
       },
       "createFields": {
        "!type": "fn(val: ?) -> +A.ArrayList",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FieldSupport.html#method_createFields",
        "!doc": "Creates a collection of fields.",
        "!data": {
         "submodule": "aui-diagram-builder-base"
        }
       },
       "removeField": {
        "!type": "fn(field: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FieldSupport.html#method_removeField",
        "!doc": "Removes a single field from the field list.",
        "!data": {
         "submodule": "aui-diagram-builder-base"
        }
       },
       "createField": {
        "!type": "fn(val: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FieldSupport.html#method_createField",
        "!doc": "Creates a single field.\n\nNOTE FOR DEVELOPERS: Yoy *may* want to replace the\nmethods from this section on your implementation.",
        "!data": {
         "submodule": "aui-diagram-builder-base"
        }
       }
      }
     },
     "DiagramBuilderBase": {
      "!type": "fn(config: +config.A.DiagramBuilderBaseConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilderBase.html",
      "!data": {
       "extends": [
        "aui_diagram_builder.A.FieldSupport"
       ]
      },
      "prototype": {
       "!proto": "aui_component.A.Component.prototype",
       "isAvailableFieldsDrag": {
        "!type": "fn(drag: ?) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilderBase.html#method_isAvailableFieldsDrag",
        "!doc": "Checks if the `availableFields` are draggable.",
        "!data": {
         "submodule": "aui-diagram-builder-base"
        }
       },
       "plotFields": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilderBase.html#method_plotFields",
        "!doc": "Plots a collection of fields.",
        "!data": {
         "submodule": "aui-diagram-builder-base"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilderBase.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-diagram-builder-base"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilderBase.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.DiagramBuilderBase`.",
       "!data": {
        "submodule": "aui-diagram-builder-base"
       }
      },
      "HTML_PARSER": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilderBase.html#property_HTML_PARSER",
       "!doc": "Object hash, defining how attribute values have to be parsed from markup.",
       "!data": {
        "submodule": "aui-diagram-builder-base"
       }
      },
      "UI_ATTRS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilderBase.html#property_UI_ATTRS",
       "!doc": "Static property used to define the UI attributes.",
       "!data": {
        "submodule": "aui-diagram-builder-base"
       }
      },
      "AUGMENTS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilderBase.html#property_AUGMENTS",
       "!doc": "Static property used to define the augmented classes.",
       "!data": {
        "submodule": "aui-diagram-builder-base"
       }
      }
     },
     "Connector": {
      "!type": "fn(config: +config.A.ConnectorConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html",
      "prototype": {
       "!proto": "base.Base.prototype",
       "draw": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#method_draw",
        "!doc": "Responsible for drawing the connectors.",
        "!data": {
         "submodule": "aui-diagram-builder-connector"
        }
       },
       "getProperties": {
        "!type": "fn() -> [?]",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#method_getProperties",
        "!doc": "Gets the list of properties from the property model.",
        "!data": {
         "submodule": "aui-diagram-builder-connector"
        }
       },
       "getPropertyModel": {
        "!type": "fn() -> [?]",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#method_getPropertyModel",
        "!doc": "Gets the model defition of a property.",
        "!data": {
         "submodule": "aui-diagram-builder-connector"
        }
       },
       "getStrings": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#method_getStrings",
        "!doc": "Gets the collection of strings used to label elements of the UI.",
        "!data": {
         "submodule": "aui-diagram-builder-connector"
        }
       },
       "hide": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#method_hide",
        "!doc": "Sets the visibility to `false`.",
        "!data": {
         "submodule": "aui-diagram-builder-connector"
        }
       },
       "show": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#method_show",
        "!doc": "Sets the visibility to `true`.",
        "!data": {
         "submodule": "aui-diagram-builder-connector"
        }
       },
       "toJSON": {
        "!type": "fn() -> +Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#method_toJSON",
        "!doc": "Converts serializable attributes to JSON format.",
        "!data": {
         "submodule": "aui-diagram-builder-connector"
        }
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.Connector`.",
       "!data": {
        "submodule": "aui-diagram-builder-connector"
       }
      },
      "STRINGS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Connector.html#property_STRINGS",
       "!doc": "Collection of strings used to label elements of the UI.",
       "!data": {
        "submodule": "aui-diagram-builder-connector"
       }
      }
     },
     "DiagramBuilder": {
      "!type": "fn(config: +config.A.DiagramBuilderConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html",
      "prototype": {
       "!proto": "aui_diagram_builder.A.DiagramBuilderBase.prototype",
       "syncConnectionsUI": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#method_syncConnectionsUI",
        "!doc": "Syncs the connections in the UI.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "clearFields": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#method_clearFields",
        "!doc": "Fetches all fields and destroys each instance of it.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "closeEditProperties": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#method_closeEditProperties",
        "!doc": "Disables the settings tab and selects the field tab.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "connect": {
        "!type": "fn(diagramNode1: ?, diagramNode2: ?, optConnector: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#method_connect",
        "!doc": "Gets two `A.DiagramNode` instances and connect them.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "connectAll": {
        "!type": "fn(nodes: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#method_connectAll",
        "!doc": "Creates a connector for each node that has source and target\nproperties.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "createField": {
        "!type": "fn(val: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#method_createField",
        "!doc": "Creates a new field based on the field class type.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "deleteSelectedConnectors": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#method_deleteSelectedConnectors",
        "!doc": "Fetches all selected connectors and disconnect them.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "deleteSelectedNode": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#method_deleteSelectedNode",
        "!doc": "Fetches the selected node and delete it.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "eachConnector": {
        "!type": "fn(fn: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#method_eachConnector",
        "!doc": "An utility function to loop through all connectors.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "editConnector": {
        "!type": "fn(connector: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#method_editConnector",
        "!doc": "Enables the settings tab, sets the connector properties in the\nproperty list, and stores the connector in the `editingConnector` and\n`selectedConnector` attributes.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "editNode": {
        "!type": "fn(diagramNode: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#method_editNode",
        "!doc": "Enables the settings tab, sets the node properties in the property\nlist, and stores the node in the `editingNode` and `selectedNode`\nattributes.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "getFieldClass": {
        "!type": "fn(type: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#method_getFieldClass",
        "!doc": "Gets the field class based on the `A.DiagramBuilder` type. If the type\ndoesnt exist, logs an error message.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "getNodesByTransitionProperty": {
        "!type": "fn(property: ?, value: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#method_getNodesByTransitionProperty",
        "!doc": "Returns a collection of nodes by its transition property.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "getSelectedConnectors": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#method_getSelectedConnectors",
        "!doc": "Returns a collection of selected connectors.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "getSourceNodes": {
        "!type": "fn(diagramNode: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#method_getSourceNodes",
        "!doc": "Returns a collection of source nodes.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "hideSuggestConnectorOverlay": {
        "!type": "fn(diagramNode: ?, drag: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#method_hideSuggestConnectorOverlay",
        "!doc": "Hides the suggest connector overlay.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "isAbleToConnect": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#method_isAbleToConnect",
        "!doc": "Checks if a node is able to connect with another.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "isFieldsDrag": {
        "!type": "fn(drag: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#method_isFieldsDrag",
        "!doc": "Checks if the field is draggable.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "plotField": {
        "!type": "fn(field: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#method_plotField",
        "!doc": "Renders a field in the `dropContainer`.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "select": {
        "!type": "fn(diagramNode: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#method_select",
        "!doc": "Selects and focus a certain node.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "showSuggestConnectorOverlay": {
        "!type": "fn(xy: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#method_showSuggestConnectorOverlay",
        "!doc": "Shows the suggest connector overlay in a certain X and Y position.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "stopEditing": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#method_stopEditing",
        "!doc": "Clears node/connectors selections and close edit properties.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "toJSON": {
        "!type": "fn() -> +Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#method_toJSON",
        "!doc": "Converts fields to JSON format.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "unselectConnectors": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#method_unselectConnectors",
        "!doc": "Clears connectors selection.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "unselectNodes": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#method_unselectNodes",
        "!doc": "Clears nodes selection.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.DiagramBuilder`.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      },
      "EXTENDS": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      },
      "FIELDS_TAB": {
       "!type": "number",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#property_FIELDS_TAB",
       "!doc": "The index of the fields tab.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      },
      "SETTINGS_TAB": {
       "!type": "number",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramBuilder.html#property_SETTINGS_TAB",
       "!doc": "The index of the settings tab.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      }
     },
     "DiagramNodeManagerBase": {
      "!type": "fn(config: +config.A.DiagramNodeManagerBaseConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeManagerBase.html",
      "prototype": {
       "!proto": "base.Base.prototype"
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeManagerBase.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      },
      "EXTENDS": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeManagerBase.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      }
     },
     "DiagramNode": {
      "!type": "fn(config: +config.A.DiagramNodeConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html",
      "prototype": {
       "!proto": "overlay.Overlay.prototype",
       "addTransition": {
        "!type": "fn(transition: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#method_addTransition",
        "!doc": "Adds a transition into the node.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "alignTransition": {
        "!type": "fn(transition: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#method_alignTransition",
        "!doc": "Aligns a single transition.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "alignTransitions": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#method_alignTransitions",
        "!doc": "Aligns a collection of transitions.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "close": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#method_close",
        "!doc": "Destroys this instance.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "connect": {
        "!type": "fn(transition: ?, optConnector: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#method_connect",
        "!doc": "Checks if a transition is connected, if not creates a new\n`A.Connector` instance.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "connectDrop": {
        "!type": "fn(event: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#method_connectDrop",
        "!doc": "Calls the `connectNode` method with `publishedTarget` parameter.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "connectEnd": {
        "!type": "fn(event: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#method_connectEnd",
        "!doc": "Handles the `connectEnd` event.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "connectMove": {
        "!type": "fn(event: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#method_connectMove",
        "!doc": "Sets the connector position based on the mouse X and Y positions.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "connectNode": {
        "!type": "fn(diagramNode: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#method_connectNode",
        "!doc": "Prepares the transition and connects a node.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "connectOutTarget": {
        "!type": "fn(event: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#method_connectOutTarget",
        "!doc": "Sets the `publishedTarget` attribute to null and hiddes the\n`publishedSource`s invite.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "connectOverTarget": {
        "!type": "fn(event: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#method_connectOverTarget",
        "!doc": "If `publishedSource` is different from the current instance, sets the\n`publishedTarget` to the current instance.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "connectStart": {
        "!type": "fn(event: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#method_connectStart",
        "!doc": "Highlights each diagram node and fires a `publishedSource` event.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "disconnect": {
        "!type": "fn(transition: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#method_disconnect",
        "!doc": "Checks if a transition is connected, if yes removes the transition.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "eachConnector": {
        "!type": "fn(fn: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#method_eachConnector",
        "!doc": "An utility function to loop through all connectors.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "getConnector": {
        "!type": "fn(transition: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#method_getConnector",
        "!doc": "Returns a connector based on the transition uid.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "getContainer": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#method_getContainer",
        "!doc": "Returns the `dropContainer` or bounding boxs parent node.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "getLeftTop": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#method_getLeftTop",
        "!doc": "Returns the left and top positions of a node based in its container.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "getProperties": {
        "!type": "fn() -> [?]",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#method_getProperties",
        "!doc": "Gets the list of properties from the property model.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "getPropertyModel": {
        "!type": "fn() -> [?]",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#method_getPropertyModel",
        "!doc": "Gets the model defition of a property.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "isBoundaryDrag": {
        "!type": "fn(drag: ?) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#method_isBoundaryDrag",
        "!doc": "Checks if boundary is draggable.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "isTransitionConnected": {
        "!type": "fn(transition: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#method_isTransitionConnected",
        "!doc": "Checks if a connector has an transition uid property.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "prepareTransition": {
        "!type": "fn(val: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#method_prepareTransition",
        "!doc": "Builds the transition configuration object.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "removeTransition": {
        "!type": "fn(transition: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#method_removeTransition",
        "!doc": "Removes the transition uid from a transition.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "renderShapeBoundary": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#method_renderShapeBoundary",
        "!doc": "Renders the `shapeBoundary` attribute.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "renderShapeInvite": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#method_renderShapeInvite",
        "!doc": "Renders the `shapeInvite` attribute.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       },
       "syncConnectionsUI": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#method_syncConnectionsUI",
        "!doc": "Syncs the connections in the UI.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      },
      "UI_ATTRS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#property_UI_ATTRS",
       "!doc": "Static property used to define the UI attributes.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.DiagramNode`.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      },
      "EXTENDS": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      },
      "CIRCLE_POINTS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#property_CIRCLE_POINTS",
       "!doc": "Coordinates to generate a circle graphic.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      },
      "DIAMOND_POINTS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#property_DIAMOND_POINTS",
       "!doc": "Coordinates to generate a diamond graphic.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      },
      "SQUARE_POINTS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNode.html#property_SQUARE_POINTS",
       "!doc": "Coordinates to generate a square graphic.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      }
     },
     "DiagramNodeState": {
      "!type": "fn(config: +config.A.DiagramNodeStateConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeState.html",
      "prototype": {
       "!proto": "aui_diagram_builder.A.DiagramNode.prototype",
       "renderShapeBoundary": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeState.html#method_renderShapeBoundary",
        "!doc": "Renders the shape boundary.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeState.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeState.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.DiagramNodeState`.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      },
      "EXTENDS": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeState.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      }
     },
     "DiagramNodeCondition": {
      "!type": "fn(config: +config.A.DiagramNodeConditionConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeCondition.html",
      "prototype": {
       "!proto": "aui_diagram_builder.A.DiagramNodeState.prototype",
       "renderShapeBoundary": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeCondition.html#method_renderShapeBoundary",
        "!doc": "Renders the shape boundary.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeCondition.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeCondition.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.DiagramNodeCondition`.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      },
      "EXTENDS": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeCondition.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      }
     },
     "DiagramNodeStart": {
      "!type": "fn(config: +config.A.DiagramNodeStartConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeStart.html",
      "prototype": {
       "!proto": "aui_diagram_builder.A.DiagramNodeState.prototype"
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeStart.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeStart.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.DiagramNodeStart`.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      },
      "EXTENDS": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeStart.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      }
     },
     "DiagramNodeEnd": {
      "!type": "fn(config: +config.A.DiagramNodeEndConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeEnd.html",
      "prototype": {
       "!proto": "aui_diagram_builder.A.DiagramNodeState.prototype"
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeEnd.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeEnd.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.DiagramNodeEnd`.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      },
      "EXTENDS": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeEnd.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      }
     },
     "DiagramNodeJoin": {
      "!type": "fn(config: +config.A.DiagramNodeJoinConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeJoin.html",
      "prototype": {
       "!proto": "aui_diagram_builder.A.DiagramNodeState.prototype"
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeJoin.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeJoin.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.DiagramNodeJoin`.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      },
      "EXTENDS": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeJoin.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      }
     },
     "DiagramNodeFork": {
      "!type": "fn(config: +config.A.DiagramNodeForkConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeFork.html",
      "prototype": {
       "!proto": "aui_diagram_builder.A.DiagramNodeState.prototype"
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeFork.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeFork.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.DiagramNodeFork`.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      },
      "EXTENDS": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeFork.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      }
     },
     "DiagramNodeTask": {
      "!type": "fn(config: +config.A.DiagramNodeTaskConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeTask.html",
      "prototype": {
       "!proto": "aui_diagram_builder.A.DiagramNodeState.prototype",
       "renderShapeBoundary": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeTask.html#method_renderShapeBoundary",
        "!doc": "Renders the shape boundary.",
        "!data": {
         "submodule": "aui-diagram-builder-impl"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeTask.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeTask.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.DiagramNodeTask`.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      },
      "EXTENDS": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.DiagramNodeTask.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-diagram-builder-impl"
       }
      }
     }
    }
   },
   "aui_event": {
    "!data": {
     "module": "aui-event",
     "submodules": {
      "aui-event-base": {},
      "aui-event-delegate-change": {},
      "aui-event-delegate-submit": {},
      "aui-event-input": {}
     }
    },
    "A": {
     "FormBuilderAvailableField": {
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderAvailableField.html",
      "!data": {
       "for": "aui_form_builder.A.FormBuilderAvailableField"
      },
      "prototype": {
       "!proto": "aui_diagram_builder.A.AvailableField.prototype",
       "hasModifier": {
        "!type": "fn() -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderAvailableField.html#method_hasModifier",
        "!doc": "Checks if an event is triggered by a keyboard key like `CTRL`, `ALT`\nor `SHIFT`.",
        "!data": {
         "submodule": "aui-event-base"
        }
       },
       "isKey": {
        "!type": "fn(name: ?) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderAvailableField.html#method_isKey",
        "!doc": "Checks if an event is triggered by a keyboard key.",
        "!data": {
         "submodule": "aui-event-base"
        }
       },
       "isKeyInRange": {
        "!type": "fn(start: ?, end: ?) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderAvailableField.html#method_isKeyInRange",
        "!doc": "Checks if an event is triggered by a keyboard key located between two\nother keys.",
        "!data": {
         "submodule": "aui-event-base"
        }
       },
       "isKeyInSet": {
        "!type": "fn() -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderAvailableField.html#method_isKeyInSet",
        "!doc": "Checks if an event is triggered by a keyboard key contained in the\nkey set.",
        "!data": {
         "submodule": "aui-event-base"
        }
       },
       "isModifyingKey": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderAvailableField.html#method_isModifyingKey",
        "!doc": "Checks if an event is triggered by `ENTER`, `TAB`, `ESC` keyboard\nkeys or by a key located between `PAGE UP` and `DOWN`.",
        "!data": {
         "submodule": "aui-event-base"
        }
       },
       "isNavKey": {
        "!type": "fn() -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderAvailableField.html#method_isNavKey",
        "!doc": "TODO. Wanna help? Please send a Pull Request.",
        "!data": {
         "submodule": "aui-event-base"
        }
       },
       "isSpecialKey": {
        "!type": "fn() -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderAvailableField.html#method_isSpecialKey",
        "!doc": "Checks if an event is triggered by a special keyboard key like\n`SHIFT`, `CAPS LOCK`, etc.",
        "!data": {
         "submodule": "aui-event-base"
        }
       },
       "delegate": {
        "!type": "fn(node: ?, subscription: ?, notifier: ?, filter: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderAvailableField.html#method_delegate",
        "!doc": "Implementation logic for subscription via `node.delegate`.",
        "!data": {
         "submodule": "aui-event-input"
        }
       },
       "detach": {
        "!type": "fn(node: ?, subscription: ?, notifier: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderAvailableField.html#method_detach",
        "!doc": "Implementation logic for cleaning up a detached subscription.",
        "!data": {
         "submodule": "aui-event-input"
        }
       },
       "detachDelegate": {
        "!type": "fn(node: ?, subscription: ?, notifier: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderAvailableField.html#method_detachDelegate",
        "!doc": "Implementation logic for cleaning up a detached delegate subscription.",
        "!data": {
         "submodule": "aui-event-input"
        }
       },
       "on": {
        "!type": "fn(node: ?, subscription: ?, notifier: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderAvailableField.html#method_on",
        "!doc": "Implementation logic for event subscription.",
        "!data": {
         "submodule": "aui-event-input"
        }
       }
      }
     }
    }
   },
   "aui_form_builder": {
    "!data": {
     "module": "aui-form-builder",
     "submodules": {
      "aui-form-builder-base": {},
      "aui-form-builder-field-base": {},
      "aui-form-builder-field-button": {},
      "aui-form-builder-field-checkbox": {},
      "aui-form-builder-field-fieldset": {},
      "aui-form-builder-field-upload": {},
      "aui-form-builder-field-multiple-choice": {},
      "aui-form-builder-field-radio": {},
      "aui-form-builder-field-select": {},
      "aui-form-builder-field-text": {},
      "aui-form-builder-field-textarea": {}
     }
    },
    "A": {
     "FormBuilderAvailableField": {
      "!type": "fn(config: +config.A.FormBuilderAvailableFieldConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderAvailableField.html",
      "prototype": {
       "!proto": "aui_diagram_builder.A.AvailableField.prototype"
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderAvailableField.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-form-builder-base"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderAvailableField.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.FormBuilderAvailableField`.",
       "!data": {
        "submodule": "aui-form-builder-base"
       }
      },
      "EXTENDS": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderAvailableField.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-form-builder-base"
       }
      }
     },
     "FormBuilder": {
      "!type": "fn(config: +config.A.FormBuilderConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilder.html",
      "prototype": {
       "!proto": "aui_diagram_builder.A.DiagramBuilderBase.prototype",
       "closeEditProperties": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilder.html#method_closeEditProperties",
        "!doc": "Selects the field tab and disables the setting tabs.",
        "!data": {
         "submodule": "aui-form-builder-base"
        }
       },
       "createField": {
        "!type": "fn(config: ?) -> +Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilder.html#method_createField",
        "!doc": "Creates a field and returns its configuration.",
        "!data": {
         "submodule": "aui-form-builder-base"
        }
       },
       "duplicateField": {
        "!type": "fn(field: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilder.html#method_duplicateField",
        "!doc": "Gets the current field index and then clones the field. Inserts the\nnew one after the current field index, inside of the current field\nparent.",
        "!data": {
         "submodule": "aui-form-builder-base"
        }
       },
       "editField": {
        "!type": "fn(field: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilder.html#method_editField",
        "!doc": "Checks if the current field is a `A.FormBuilderField` instance and\nselects it.",
        "!data": {
         "submodule": "aui-form-builder-base"
        }
       },
       "getFieldClass": {
        "!type": "fn(type: ?) -> +Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilder.html#method_getFieldClass",
        "!doc": "Gets the field class based on the `A.FormBuilder` type. If the type\ndoesnt exist, logs an error message.",
        "!data": {
         "submodule": "aui-form-builder-base"
        }
       },
       "getFieldProperties": {
        "!type": "fn(field: ?) -> [?]",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilder.html#method_getFieldProperties",
        "!doc": "Gets a list of properties from the field.",
        "!data": {
         "submodule": "aui-form-builder-base"
        }
       },
       "insertField": {
        "!type": "fn(field: ?, index: ?, parent: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilder.html#method_insertField",
        "!doc": "Removes field from previous parent and inserts into the new parent.",
        "!data": {
         "submodule": "aui-form-builder-base"
        }
       },
       "openEditProperties": {
        "!type": "fn(field: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilder.html#method_openEditProperties",
        "!doc": "Enables the settings tab.",
        "!data": {
         "submodule": "aui-form-builder-base"
        }
       },
       "plotField": {
        "!type": "fn(field: ?, container: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilder.html#method_plotField",
        "!doc": "Renders a field in the container.",
        "!data": {
         "submodule": "aui-form-builder-base"
        }
       },
       "plotFields": {
        "!type": "fn(fields: ?, container: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilder.html#method_plotFields",
        "!doc": "Renders a list of fields in the container.",
        "!data": {
         "submodule": "aui-form-builder-base"
        }
       },
       "selectFields": {
        "!type": "fn(fields: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilder.html#method_selectFields",
        "!doc": "Adds fields to a `A.LinkedSet` instance.",
        "!data": {
         "submodule": "aui-form-builder-base"
        }
       },
       "simulateFocusField": {
        "!type": "fn(field: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilder.html#method_simulateFocusField",
        "!doc": "Triggers a focus event in the current field and a blur event in the\nlast focused field.",
        "!data": {
         "submodule": "aui-form-builder-base"
        }
       },
       "unselectFields": {
        "!type": "fn(fields: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilder.html#method_unselectFields",
        "!doc": "Removes fields from the `A.LinkedSet` instance.",
        "!data": {
         "submodule": "aui-form-builder-base"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilder.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-form-builder-base"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilder.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.FormBuilder`.",
       "!data": {
        "submodule": "aui-form-builder-base"
       }
      },
      "UI_ATTRS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilder.html#property_UI_ATTRS",
       "!doc": "Static property used to define the UI attributes.",
       "!data": {
        "submodule": "aui-form-builder-base"
       }
      },
      "EXTENDS": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilder.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-form-builder-base"
       }
      },
      "FIELDS_TAB": {
       "!type": "number",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilder.html#property_FIELDS_TAB",
       "!doc": "Static property used to define the fields tab.",
       "!data": {
        "submodule": "aui-form-builder-base"
       }
      },
      "SETTINGS_TAB": {
       "!type": "number",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilder.html#property_SETTINGS_TAB",
       "!doc": "Static property used to define the settings tab.",
       "!data": {
        "submodule": "aui-form-builder-base"
       }
      }
     },
     "FormBuilderFieldBase": {
      "!type": "fn(config: +config.A.FormBuilderFieldBaseConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderFieldBase.html",
      "!data": {
       "extends": [
        "aui_diagram_builder.A.FieldSupport"
       ]
      },
      "prototype": {
       "!proto": "aui_component.A.Component.prototype"
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderFieldBase.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-form-builder-field-base"
       }
      },
      "AUGMENTS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderFieldBase.html#property_AUGMENTS",
       "!doc": "Static property used to define the augmented classes.",
       "!data": {
        "submodule": "aui-form-builder-field-base"
       }
      }
     },
     "FormBuilderField": {
      "!type": "fn(config: +config.A.FormBuilderFieldConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html",
      "prototype": {
       "!proto": "aui_form_builder.A.FormBuilderFieldBase.prototype",
       "createField": {
        "!type": "fn(val: ?) -> +Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#method_createField",
        "!doc": "Creates the field using the `createField` method from\n`A.FormBuilder`.",
        "!data": {
         "submodule": "aui-form-builder-field-base"
        }
       },
       "getHTML": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#method_getHTML",
        "!doc": "Gets the field markup.\n\nTo developer: Implement this",
        "!data": {
         "submodule": "aui-form-builder-field-base"
        }
       },
       "getNode": {
        "!type": "fn() -> +node.Node",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#method_getNode",
        "!doc": "Creates a `Node` from the HTML string.",
        "!data": {
         "submodule": "aui-form-builder-field-base"
        }
       },
       "getProperties": {
        "!type": "fn() -> [?]",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#method_getProperties",
        "!doc": "Gets properties from the property model.",
        "!data": {
         "submodule": "aui-form-builder-field-base"
        }
       },
       "getPropertyModel": {
        "!type": "fn() -> [?]",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#method_getPropertyModel",
        "!doc": "Returns a list of property models. Each property model is made of a\nname, attribute, editor, and formatter.",
        "!data": {
         "submodule": "aui-form-builder-field-base"
        }
       },
       "_getToolbarItems": {
        "!type": "fn() -> [?]",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#method__getToolbarItems",
        "!doc": "Gets a list of toolbar items.",
        "!data": {
         "submodule": "aui-form-builder-field-base"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-form-builder-field-base"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.FormBuilderField`.",
       "!data": {
        "submodule": "aui-form-builder-field-base"
       }
      },
      "UI_ATTRS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#property_UI_ATTRS",
       "!doc": "Static property used to define the UI attributes.",
       "!data": {
        "submodule": "aui-form-builder-field-base"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-form-builder-field-base"
       }
      },
      "HTML_PARSER": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderField.html#property_HTML_PARSER",
       "!doc": "Object hash, defining how attribute values have to be parsed from markup.",
       "!data": {
        "submodule": "aui-form-builder-field-base"
       }
      }
     },
     "FormBuilderButtonField": {
      "!type": "fn(config: +config.A.FormBuilderButtonFieldConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderButtonField.html",
      "prototype": {
       "!proto": "aui_form_builder.A.FormBuilderField.prototype",
       "getHTML": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderButtonField.html#method_getHTML",
        "!doc": "Injects data into the template and returns the HTML result.",
        "!data": {
         "submodule": "aui-form-builder-field-button"
        }
       },
       "getPropertyModel": {
        "!type": "fn() -> [?]",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderButtonField.html#method_getPropertyModel",
        "!doc": "Returns a list of property models including the `A.RadioCellEditor`\nmodel.",
        "!data": {
         "submodule": "aui-form-builder-field-button"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderButtonField.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-form-builder-field-button"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderButtonField.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.FormBuilderButtonField`.",
       "!data": {
        "submodule": "aui-form-builder-field-button"
       }
      },
      "UI_ATTRS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderButtonField.html#property_UI_ATTRS",
       "!doc": "Static property used to define the UI attributes.",
       "!data": {
        "submodule": "aui-form-builder-field-button"
       }
      },
      "CSS_PREFIX": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderButtonField.html#property_CSS_PREFIX",
       "!doc": "Static property provides a string to identify the CSS prefix.",
       "!data": {
        "submodule": "aui-form-builder-field-button"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderButtonField.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-form-builder-field-button"
       }
      }
     },
     "FormBuilderCheckBoxField": {
      "!type": "fn(config: +config.A.FormBuilderCheckBoxFieldConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderCheckBoxField.html",
      "prototype": {
       "!proto": "aui_form_builder.A.FormBuilderField.prototype",
       "getPropertyModel": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderCheckBoxField.html#method_getPropertyModel",
        "!doc": "Returns a list of property models including the `A.RadioCellEditor`\nmodel.",
        "!data": {
         "submodule": "aui-form-builder-field-checkbox"
        }
       },
       "getHTML": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderCheckBoxField.html#method_getHTML",
        "!doc": "Injects data into the template and returns the HTML result.",
        "!data": {
         "submodule": "aui-form-builder-field-checkbox"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderCheckBoxField.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-form-builder-field-checkbox"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderCheckBoxField.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.FormBuilderCheckBoxField`.",
       "!data": {
        "submodule": "aui-form-builder-field-checkbox"
       }
      },
      "CSS_PREFIX": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderCheckBoxField.html#property_CSS_PREFIX",
       "!doc": "Static property provides a string to identify the CSS prefix.",
       "!data": {
        "submodule": "aui-form-builder-field-checkbox"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderCheckBoxField.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-form-builder-field-checkbox"
       }
      }
     },
     "FormBuilderFieldsetField": {
      "!type": "fn(config: +config.A.FormBuilderFieldsetFieldConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderFieldsetField.html",
      "prototype": {
       "!proto": "aui_form_builder.A.FormBuilderField.prototype",
       "getHTML": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderFieldsetField.html#method_getHTML",
        "!doc": "Injects data into the template and returns the HTML result.",
        "!data": {
         "submodule": "aui-form-builder-field-fieldset"
        }
       },
       "getPropertyModel": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderFieldsetField.html#method_getPropertyModel",
        "!doc": "Returns a list of property models including the `A.TextCellEditor()`\nand `A.RadioCellEditor` models.",
        "!data": {
         "submodule": "aui-form-builder-field-fieldset"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderFieldsetField.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-form-builder-field-fieldset"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderFieldsetField.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.FormBuilderFieldsetField`.",
       "!data": {
        "submodule": "aui-form-builder-field-fieldset"
       }
      },
      "UI_ATTRS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderFieldsetField.html#property_UI_ATTRS",
       "!doc": "Static property used to define the UI attributes.",
       "!data": {
        "submodule": "aui-form-builder-field-fieldset"
       }
      },
      "CSS_PREFIX": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderFieldsetField.html#property_CSS_PREFIX",
       "!doc": "Static property provides a string to identify the CSS prefix.",
       "!data": {
        "submodule": "aui-form-builder-field-fieldset"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderFieldsetField.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-form-builder-field-fieldset"
       }
      }
     },
     "FormBuilderFileUploadField": {
      "!type": "fn(config: +config.A.FormBuilderFileUploadFieldConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderFileUploadField.html",
      "prototype": {
       "!proto": "aui_form_builder.A.FormBuilderField.prototype",
       "getHTML": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderFileUploadField.html#method_getHTML",
        "!doc": "Injects data into the template and returns the HTML result.",
        "!data": {
         "submodule": "aui-form-builder-field-upload"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderFileUploadField.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-form-builder-field-upload"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderFileUploadField.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.FormBuilderFileUploadField`.",
       "!data": {
        "submodule": "aui-form-builder-field-upload"
       }
      },
      "CSS_PREFIX": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderFileUploadField.html#property_CSS_PREFIX",
       "!doc": "Static property provides a string to identify the CSS prefix.",
       "!data": {
        "submodule": "aui-form-builder-field-upload"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderFileUploadField.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-form-builder-field-upload"
       }
      }
     },
     "OptionsEditor": {
      "!type": "fn(config: +config.A.OptionsEditorConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.OptionsEditor.html",
      "prototype": {
       "!proto": "aui_datatable.A.RadioCellEditor.prototype"
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.OptionsEditor.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-form-builder-field-multiple-choice"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.OptionsEditor.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.OptionsEditor`.",
       "!data": {
        "submodule": "aui-form-builder-field-multiple-choice"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.OptionsEditor.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-form-builder-field-multiple-choice"
       }
      }
     },
     "FormBuilderMultipleChoiceField": {
      "!type": "fn(config: +config.A.FormBuilderMultipleChoiceFieldConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderMultipleChoiceField.html",
      "prototype": {
       "!proto": "aui_form_builder.A.FormBuilderField.prototype",
       "getPropertyModel": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderMultipleChoiceField.html#method_getPropertyModel",
        "!doc": "Returns a list of property models including the `A.RadioCellEditor`\nmodel.",
        "!data": {
         "submodule": "aui-form-builder-field-multiple-choice"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderMultipleChoiceField.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-form-builder-field-multiple-choice"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderMultipleChoiceField.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.FormBuilderMultipleChoiceField`.",
       "!data": {
        "submodule": "aui-form-builder-field-multiple-choice"
       }
      },
      "UI_ATTRS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderMultipleChoiceField.html#property_UI_ATTRS",
       "!doc": "Static property used to define the UI attributes.",
       "!data": {
        "submodule": "aui-form-builder-field-multiple-choice"
       }
      },
      "CSS_PREFIX": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderMultipleChoiceField.html#property_CSS_PREFIX",
       "!doc": "Static property provides a string to identify the CSS prefix.",
       "!data": {
        "submodule": "aui-form-builder-field-multiple-choice"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderMultipleChoiceField.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-form-builder-field-multiple-choice"
       }
      }
     },
     "FormBuilderRadioField": {
      "!type": "fn(config: +config.A.FormBuilderRadioFieldConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderRadioField.html",
      "prototype": {
       "!proto": "aui_form_builder.A.FormBuilderMultipleChoiceField.prototype",
       "getHTML": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderRadioField.html#method_getHTML",
        "!doc": "Returns the HTML template.",
        "!data": {
         "submodule": "aui-form-builder-field-radio"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderRadioField.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-form-builder-field-radio"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderRadioField.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.FormBuilderRadioField`.",
       "!data": {
        "submodule": "aui-form-builder-field-radio"
       }
      },
      "CSS_PREFIX": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderRadioField.html#property_CSS_PREFIX",
       "!doc": "Static property provides a string to identify the CSS prefix.",
       "!data": {
        "submodule": "aui-form-builder-field-radio"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderRadioField.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-form-builder-field-radio"
       }
      }
     },
     "FormBuilderSelectField": {
      "!type": "fn(config: +config.A.FormBuilderSelectFieldConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderSelectField.html",
      "prototype": {
       "!proto": "aui_form_builder.A.FormBuilderMultipleChoiceField.prototype",
       "getHTML": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderSelectField.html#method_getHTML",
        "!doc": "Injects data into the template and returns the HTML result.",
        "!data": {
         "submodule": "aui-form-builder-field-select"
        }
       },
       "getPropertyModel": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderSelectField.html#method_getPropertyModel",
        "!doc": "Returns a list of property models including the `A.RadioCellEditor`\nmodel.",
        "!data": {
         "submodule": "aui-form-builder-field-select"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderSelectField.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-form-builder-field-select"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderSelectField.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.FormBuilderSelectField`.",
       "!data": {
        "submodule": "aui-form-builder-field-select"
       }
      },
      "UI_ATTRS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderSelectField.html#property_UI_ATTRS",
       "!doc": "Static property used to define the UI attributes.",
       "!data": {
        "submodule": "aui-form-builder-field-select"
       }
      },
      "CSS_PREFIX": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderSelectField.html#property_CSS_PREFIX",
       "!doc": "Static property provides a string to identify the CSS prefix.",
       "!data": {
        "submodule": "aui-form-builder-field-select"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderSelectField.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-form-builder-field-select"
       }
      }
     },
     "FormBuilderTextField": {
      "!type": "fn(config: +config.A.FormBuilderTextFieldConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderTextField.html",
      "prototype": {
       "!proto": "aui_form_builder.A.FormBuilderField.prototype",
       "getHTML": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderTextField.html#method_getHTML",
        "!doc": "Injects data into the template and returns the HTML result.",
        "!data": {
         "submodule": "aui-form-builder-field-text"
        }
       },
       "getPropertyModel": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderTextField.html#method_getPropertyModel",
        "!doc": "Returns a list of property models including the `A.RadioCellEditor`\nmodel.",
        "!data": {
         "submodule": "aui-form-builder-field-text"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderTextField.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-form-builder-field-text"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderTextField.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.FormBuilderTextField`.",
       "!data": {
        "submodule": "aui-form-builder-field-text"
       }
      },
      "CSS_PREFIX": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderTextField.html#property_CSS_PREFIX",
       "!doc": "Static property provides a string to identify the CSS prefix.",
       "!data": {
        "submodule": "aui-form-builder-field-text"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderTextField.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-form-builder-field-text"
       }
      }
     },
     "FormBuilderTextAreaField": {
      "!type": "fn(config: +config.A.FormBuilderTextAreaFieldConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderTextAreaField.html",
      "prototype": {
       "!proto": "aui_form_builder.A.FormBuilderTextField.prototype",
       "getPropertyModel": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderTextAreaField.html#method_getPropertyModel",
        "!doc": "Returns a list of property models including the\n`A.TextAreaCellEditor` model.",
        "!data": {
         "submodule": "aui-form-builder-field-textarea"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderTextAreaField.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-form-builder-field-textarea"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderTextAreaField.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.FormBuilderTextAreaField`.",
       "!data": {
        "submodule": "aui-form-builder-field-textarea"
       }
      },
      "CSS_PREFIX": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderTextAreaField.html#property_CSS_PREFIX",
       "!doc": "Static property provides a string to identify the CSS prefix.",
       "!data": {
        "submodule": "aui-form-builder-field-textarea"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormBuilderTextAreaField.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-form-builder-field-textarea"
       }
      }
     }
    }
   },
   "aui_form_validator": {
    "!data": {
     "module": "aui-form-validator"
    },
    "A": {
     "FormValidator": {
      "!type": "fn(config: +config.A.FormValidatorConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html",
      "prototype": {
       "!proto": "base.Base.prototype",
       "addFieldError": {
        "!type": "fn(field: ?, ruleName: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#method_addFieldError",
        "!doc": "Adds a validation error in the field."
       },
       "clearFieldError": {
        "!type": "fn(field: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#method_clearFieldError",
        "!doc": "Removes a validation error in the field."
       },
       "eachRule": {
        "!type": "fn(fn: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#method_eachRule",
        "!doc": "Executes a function to each rule."
       },
       "findFieldContainer": {
        "!type": "fn(field: ?) -> +node.Node",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#method_findFieldContainer",
        "!doc": "Gets the ancestor of a given field."
       },
       "focusInvalidField": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#method_focusInvalidField",
        "!doc": "Focus on the invalid field."
       },
       "getField": {
        "!type": "fn(fieldOrFieldName: ?) -> +node.Node",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#method_getField",
        "!doc": "Gets a field from the form."
       },
       "getFieldsByName": {
        "!type": "fn(fieldName: ?) -> +dom.NodeList",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#method_getFieldsByName",
        "!doc": "Gets a list of fields based on its name."
       },
       "getFieldError": {
        "!type": "fn(field: ?) -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#method_getFieldError",
        "!doc": "Gets a list of fields with errors."
       },
       "getFieldStackErrorContainer": {
        "!type": "fn(field: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#method_getFieldStackErrorContainer",
        "!doc": "Gets the stack error container of a field."
       },
       "getFieldErrorMessage": {
        "!type": "fn(field: ?, rule: ?) -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#method_getFieldErrorMessage",
        "!doc": "Gets the error message of a field."
       },
       "hasErrors": {
        "!type": "fn() -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#method_hasErrors",
        "!doc": "Returns `true` if there are errors."
       },
       "highlight": {
        "!type": "fn(field: ?, valid: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#method_highlight",
        "!doc": "Highlights a field with error or success."
       },
       "normalizeRuleValue": {
        "!type": "fn(ruleValue: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#method_normalizeRuleValue",
        "!doc": "Normalizes rule value."
       },
       "unhighlight": {
        "!type": "fn(field: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#method_unhighlight",
        "!doc": "Removes the highlight of a field."
       },
       "printStackError": {
        "!type": "fn(field: ?, container: ?, errors: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#method_printStackError",
        "!doc": "Prints the stack error messages into a container."
       },
       "resetAllFields": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#method_resetAllFields",
        "!doc": "Resets the CSS class and content of all fields."
       },
       "resetField": {
        "!type": "fn(field: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#method_resetField",
        "!doc": "Resets the CSS class and content of a field."
       },
       "resetFieldCss": {
        "!type": "fn(field: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#method_resetFieldCss",
        "!doc": "Removes the CSS classes of a field."
       },
       "validatable": {
        "!type": "fn(field: ?) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#method_validatable",
        "!doc": "Checks if a field can be validated or not."
       },
       "validate": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#method_validate",
        "!doc": "Validates all fields."
       },
       "validateField": {
        "!type": "fn(field: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#method_validateField",
        "!doc": "Validates a single field."
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#property_NAME",
       "!doc": "Static property provides a string to identify the class."
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.FormValidator`."
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.FormValidator.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends."
      }
     }
    }
   },
   "aui_image_cropper": {
    "!data": {
     "module": "aui-image-cropper"
    },
    "A": {
     "ImageCropper": {
      "!type": "fn(config: +config.A.ImageCropperConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageCropper.html",
      "prototype": {
       "!proto": "aui_component.A.Component.prototype",
       "syncImageUI": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageCropper.html#method_syncImageUI",
        "!doc": "Sync the image on the UI."
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageCropper.html#property_NAME",
       "!doc": "Static property provides a string to identify the class."
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageCropper.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Image Cropper."
      },
      "UI_ATTRS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageCropper.html#property_UI_ATTRS",
       "!doc": "Static property used to define the UI attributes."
      }
     }
    }
   },
   "aui_image_viewer": {
    "!data": {
     "module": "aui-image-viewer",
     "submodules": {
      "aui-image-viewer-base": {},
      "aui-image-viewer-gallery": {}
     }
    },
    "A": {
     "ImageViewer": {
      "!type": "fn(config: +config.A.ImageViewerConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html",
      "!data": {
       "extends": [
        "widget_stdmod.WidgetStdMod",
        "widget_position.WidgetPosition",
        "widget_stack.WidgetStack",
        "widget_position_align.WidgetPositionAlign",
        "widget_position_constrain.WidgetPositionConstrain",
        "widget_modality.WidgetModality"
       ]
      },
      "prototype": {
       "!proto": "widget.Widget.prototype",
       "close": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#method_close",
        "!doc": "Hides the `A.ImageViewer` instance.",
        "!data": {
         "submodule": "aui-image-viewer-base"
        }
       },
       "getLink": {
        "!type": "fn(currentIndex: number) -> +node.Node",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#method_getLink",
        "!doc": "Gets the `Node` reference to the `currentIndex` element from\nthe [links](A.ImageViewer.html#attr_links).",
        "!data": {
         "submodule": "aui-image-viewer-base"
        }
       },
       "getCurrentLink": {
        "!type": "fn() -> +node.Node",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#method_getCurrentLink",
        "!doc": "Gets the current loaded node link reference.",
        "!data": {
         "submodule": "aui-image-viewer-base"
        }
       },
       "loadImage": {
        "!type": "fn(src: string)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#method_loadImage",
        "!doc": "Loads an image `src` on the `A.ImageViewer`.",
        "!data": {
         "submodule": "aui-image-viewer-base"
        }
       },
       "hasLink": {
        "!type": "fn(currentIndex: number) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#method_hasLink",
        "!doc": "Checks if there is a node reference for the `currentIndex`.",
        "!data": {
         "submodule": "aui-image-viewer-base"
        }
       },
       "hasNext": {
        "!type": "fn() -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#method_hasNext",
        "!doc": "Checks if there is a next element to navigate.",
        "!data": {
         "submodule": "aui-image-viewer-base"
        }
       },
       "hasPrev": {
        "!type": "fn() -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#method_hasPrev",
        "!doc": "Checks if there is a previous element to navigate.",
        "!data": {
         "submodule": "aui-image-viewer-base"
        }
       },
       "hideControls": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#method_hideControls",
        "!doc": "Hide all UI controls (i.e., arrows, close icon etc).",
        "!data": {
         "submodule": "aui-image-viewer-base"
        }
       },
       "next": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#method_next",
        "!doc": "Loads the previous image.",
        "!data": {
         "submodule": "aui-image-viewer-base"
        }
       },
       "preloadAllImages": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#method_preloadAllImages",
        "!doc": "Preloads all images.",
        "!data": {
         "submodule": "aui-image-viewer-base"
        }
       },
       "preloadImage": {
        "!type": "fn(currentIndex: number)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#method_preloadImage",
        "!doc": "Preloads an image based on its `index`.",
        "!data": {
         "submodule": "aui-image-viewer-base"
        }
       },
       "showLoading": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#method_showLoading",
        "!doc": "Shows the loading icon.",
        "!data": {
         "submodule": "aui-image-viewer-base"
        }
       },
       "show": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#method_show",
        "!doc": "Shows the `A.ImageViewer` UI.",
        "!data": {
         "submodule": "aui-image-viewer-base"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-image-viewer-base"
       }
      },
      "CSS_PREFIX": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#property_CSS_PREFIX",
       "!doc": "Static property provides a string to identify the CSS prefix.",
       "!data": {
        "submodule": "aui-image-viewer-base"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageViewer.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.ImageViewer`.",
       "!data": {
        "submodule": "aui-image-viewer-base"
       }
      }
     },
     "ImageGallery": {
      "!type": "fn(config: +config.A.ImageGalleryConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageGallery.html",
      "prototype": {
       "!proto": "aui_image_viewer.A.ImageViewer.prototype",
       "hidePagination": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageGallery.html#method_hidePagination",
        "!doc": "Hides the [A.Pagination](A.Pagination.html) with the thumbnails list.",
        "!data": {
         "submodule": "aui-image-viewer-gallery"
        }
       },
       "pause": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageGallery.html#method_pause",
        "!doc": "Pauses the slide show.",
        "!data": {
         "submodule": "aui-image-viewer-gallery"
        }
       },
       "play": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageGallery.html#method_play",
        "!doc": "Plays the slide show.",
        "!data": {
         "submodule": "aui-image-viewer-gallery"
        }
       },
       "show": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageGallery.html#method_show",
        "!doc": "Shows the `A.ImageGallery`.\n\n**NOTE:**Overloads the [ImageViewer](A.ImageViewer.html) show method\nto not loadImage, the changeRequest now is responsible to do that if\nwe invoke the superclass show method its loading the image, and the\nchangeRequest loads again, avoiding double request.",
        "!data": {
         "submodule": "aui-image-viewer-gallery"
        }
       },
       "showPagination": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageGallery.html#method_showPagination",
        "!doc": "Shows the [A.Pagination](A.Pagination.html) with the thumbnails list.",
        "!data": {
         "submodule": "aui-image-viewer-gallery"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageGallery.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-image-viewer-gallery"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageGallery.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.ImageGallery`.",
       "!data": {
        "submodule": "aui-image-viewer-gallery"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ImageGallery.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-image-viewer-gallery"
       }
      }
     }
    }
   },
   "aui_media_viewer_plugin": {
    "!data": {
     "module": "aui-media-viewer-plugin"
    },
    "A": {
     "MediaViewerPlugin": {
      "!type": "fn(config: +config.A.MediaViewerPluginConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.MediaViewerPlugin.html",
      "prototype": {
       "!proto": "plugin.Plugin.Base.prototype",
       "close": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.MediaViewerPlugin.html#method_close",
        "!doc": "Checks if the media type is an image, if not empty the content."
       },
       "loadMedia": {
        "!type": "fn(linkHref: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.MediaViewerPlugin.html#method_loadMedia",
        "!doc": "Loads a media based on the `providers` and include it on a container."
       },
       "preloadImage": {
        "!type": "fn(index: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.MediaViewerPlugin.html#method_preloadImage",
        "!doc": "Preloads an image."
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.MediaViewerPlugin.html#property_NAME",
       "!doc": "Static property provides a string to identify the class."
      },
      "NS": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.MediaViewerPlugin.html#property_NS",
       "!doc": "Static property provides a string to identify the namespace."
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.MediaViewerPlugin.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.MediaViewerPlugin`."
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.MediaViewerPlugin.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends."
      }
     }
    }
   },
   "aui_io": {
    "!data": {
     "module": "aui-io",
     "submodules": {
      "aui-io-request": {}
     }
    },
    "A": {
     "IORequest": {
      "!type": "fn(config: +config.A.IORequestConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.IORequest.html",
      "!data": {
       "augments": [
        "io"
       ]
      },
      "prototype": {
       "!proto": "plugin.Plugin.Base.prototype",
       "getFormattedData": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.IORequest.html#method_getFormattedData",
        "!doc": "Applies the `YUI.AUI.defaults.io.dataFormatter` if\ndefined and return the formatted data.",
        "!data": {
         "submodule": "aui-io-request"
        }
       },
       "start": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.IORequest.html#method_start",
        "!doc": "Starts the IO transaction. Used to refresh the content also.",
        "!data": {
         "submodule": "aui-io-request"
        }
       },
       "stop": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.IORequest.html#method_stop",
        "!doc": "Stops the IO transaction.",
        "!data": {
         "submodule": "aui-io-request"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.IORequest.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-io-request"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.IORequest.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the IORequest.",
       "!data": {
        "submodule": "aui-io-request"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.IORequest.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-io-request"
       }
      }
     },
     "io": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.io.html",
      "prototype": {
       "A.io.request": {
        "!type": "fn(uri: string, config: +config.A.ioA.io.requestConfig) -> +IORequest",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.io.html#method_A.io.request",
        "!doc": "Static method to invoke the [IORequest](A.IORequest.html).\nLikewise [IO](A.io.html).",
        "!data": {
         "submodule": "aui-io-request"
        }
       }
      }
     }
    }
   },
   "aui_modal": {
    "!data": {
     "module": "aui-modal"
    },
    "A": {
     "Modal": {
      "!type": "fn(config: +config.A.ModalConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Modal.html",
      "!data": {
       "augments": [
        "A.WidgetPosition",
        "A.WidgetStdMod",
        "A.WidgetAutohide",
        "A.WidgetModality",
        "A.WidgetPositionAlign",
        "A.WidgetPositionConstrain",
        "A.WidgetStack"
       ],
       "extends": [
        "aui_widget_toolbars.A.WidgetToolbars"
       ]
      },
      "prototype": {
       "!proto": "widget.Widget.prototype"
      },
      "CSS_PREFIX": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Modal.html#property_CSS_PREFIX",
       "!doc": "Static property provides a string to identify the CSS prefix."
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Modal.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Modal."
      },
      "TEMPLATES": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Modal.html#property_TEMPLATES",
       "!doc": "Static property provides a set of reusable templates."
      }
     }
    }
   },
   "aui_node": {
    "!data": {
     "module": "aui-node",
     "submodules": {
      "aui-node-base": {},
      "aui-node-html5-print": {},
      "aui-node-html5": {}
     }
    },
    "A": {
     "Node": {
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Node.html",
      "!data": {
       "for": "node.Node"
      },
      "prototype": {
       "ancestorsByClassName": {
        "!type": "fn(className: string) -> +dom.NodeList",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Node.html#method_ancestorsByClassName",
        "!doc": "Returns the current ancestors of the node element filtered by a\nclassName. This is an optimized method for finding ancestors by a\nspecific CSS class name.\n\nExample:\n\n```\nA.one(#nodeId).ancestorsByClassName(aui-hide);\n```",
        "!data": {
         "submodule": "aui-node-base"
        }
       },
       "attr": {
        "!type": "fn(name: string, value: string) -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Node.html#method_attr",
        "!doc": "Gets or sets the value of an attribute for the first element in the set\nof matched elements. If only the `name` is passed it works as a getter.\n\nExample:\n\n```\nvar node = A.one(#nodeId);\nnode.attr(title, Setting a new title attribute);\n// Alert the value of the title attribute: Setting a new title attribute\nalert( node.attr(title) );\n```",
        "!data": {
         "submodule": "aui-node-base"
        }
       },
       "clone": {
        "!type": "fn() -> +node.Node",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Node.html#method_clone",
        "!doc": "Normalizes the behavior of cloning a node, which by default should not\nclone the events that are attached to it.\n\nExample:\n\n```\nvar node = A.one(#nodeId);\nnode.clone().appendTo(body);\n```",
        "!data": {
         "submodule": "aui-node-base"
        }
       },
       "center": {
        "!type": "fn(val: [?]|+node.Node|+Region|string) -> !this",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Node.html#method_center",
        "!doc": "Centralizes the current Node instance with the passed `val` Array, Node,\nString, or Region, if not specified, the body will be used.\n\nExample:\n\n```\nvar node = A.one(#nodeId);\n// Center the `node` with the `#container`.\nnode.center(#container);\n```",
        "!data": {
         "submodule": "aui-node-base"
        }
       },
       "getDOM": {
        "!type": "fn() -> +HTMLNode",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Node.html#method_getDOM",
        "!doc": "Retrieves the DOM node bound to a Node instance. See\n[getDOMNode](Node.html#method_getDOMNode).",
        "!data": {
         "submodule": "aui-node-base"
        }
       },
       "getBorderWidth": {
        "!type": "fn(sides: string) -> number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Node.html#method_getBorderWidth",
        "!doc": "Returns the combined width of the border for the specified sides.",
        "!data": {
         "submodule": "aui-node-base"
        }
       }
      }
     },
     "NodeList": {
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.NodeList.html",
      "!data": {
       "extends": [
        "aui_node.A.Node"
       ],
       "for": "node.NodeList"
      },
      "prototype": {
       "all": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.NodeList.html#method_all",
        "!doc": "See [Node all](Node.html#method_all).",
        "!data": {
         "submodule": "aui-node-base"
        }
       },
       "first": {
        "!type": "fn() -> +node.Node",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.NodeList.html#method_first",
        "!doc": "Returns the first element in the node list collection.",
        "!data": {
         "submodule": "aui-node-base"
        }
       },
       "getDOM": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.NodeList.html#method_getDOM",
        "!doc": "See [Node getDOMNode](Node.html#method_getDOMNode).",
        "!data": {
         "submodule": "aui-node-base"
        }
       },
       "last": {
        "!type": "fn() -> +node.Node",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.NodeList.html#method_last",
        "!doc": "Returns the last element in the node list collection.",
        "!data": {
         "submodule": "aui-node-base"
        }
       },
       "one": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.NodeList.html#method_one",
        "!doc": "See [Node one](Node.html#method_one).",
        "!data": {
         "submodule": "aui-node-base"
        }
       },
       "getBody": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.NodeList.html#method_getBody",
        "!doc": "Gets the body node. Shortcut to `A.one(body)`.",
        "!data": {
         "submodule": "aui-node-base"
        }
       },
       "getDoc": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.NodeList.html#method_getDoc",
        "!doc": "Gets the document node. Shortcut to `A.one(document)`.",
        "!data": {
         "submodule": "aui-node-base"
        }
       },
       "getWin": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.NodeList.html#method_getWin",
        "!doc": "Gets the window node. Shortcut to `A.one(window)`.",
        "!data": {
         "submodule": "aui-node-base"
        }
       }
      }
     },
     "HTML5": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HTML5.html",
      "prototype": {
       "onAfterPrint": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HTML5.html#method_onAfterPrint",
        "!doc": "Fires after a print.",
        "!data": {
         "submodule": "aui-node-html5-print"
        }
       },
       "onBeforePrint": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HTML5.html#method_onBeforePrint",
        "!doc": "Fires before a print.",
        "!data": {
         "submodule": "aui-node-html5-print"
        }
       },
       "parseCSS": {
        "!type": "fn(cssText: ?) -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HTML5.html#method_parseCSS",
        "!doc": "Navigates through the CSS joining rules and replacing content.",
        "!data": {
         "submodule": "aui-node-html5-print"
        }
       },
       "restoreHTML": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HTML5.html#method_restoreHTML",
        "!doc": "Restores the HTML from the `bodyClone` and `bodyEl` attributes.",
        "!data": {
         "submodule": "aui-node-html5-print"
        }
       },
       "writeHTML": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HTML5.html#method_writeHTML",
        "!doc": "Generates the HTML for print.",
        "!data": {
         "submodule": "aui-node-html5-print"
        }
       },
       "IECreateFix": {
        "!type": "fn(frag: +node.Node|+DocumentFragment, content: string) -> +node.Node|+DocumentFragment",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.HTML5.html#method_IECreateFix",
        "!doc": "Receives a `frag` and a HTML content. This method shivs the HTML5\nnodes appended to a Node or fragment which is not on the document\nyet.",
        "!data": {
         "submodule": "aui-node-html5"
        }
       }
      }
     }
    },
    "Node": {
     "!url": "http://alloyui.com/versions/2.0.x/api/classes/Node.html",
     "!data": {
      "extends": [
       "node.EventTarget"
      ],
      "for": "node.Node"
     },
     "prototype": {
      "getCenterXY": {
       "!type": "fn() -> [?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/Node.html#method_getCenterXY",
       "!doc": "Gets the current center position of the node in page coordinates.",
       "!data": {
        "submodule": "aui-node-base"
       }
      },
      "getMargin": {
       "!type": "fn(sides: string) -> number",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/Node.html#method_getMargin",
       "!doc": "Returns the combined size of the margin for the specified sides.",
       "!data": {
        "submodule": "aui-node-base"
       }
      },
      "getPadding": {
       "!type": "fn(sides: string) -> number",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/Node.html#method_getPadding",
       "!doc": "Returns the combined width of the border for the specified sides.",
       "!data": {
        "submodule": "aui-node-base"
       }
      },
      "guid": {
       "!type": "fn() -> string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/Node.html#method_guid",
       "!doc": "Sets the id of the Node instance if the object does not have one. The\ngenerated id is based on a guid created by the\n[stamp](YUI.html#method_stamp) method.",
       "!data": {
        "submodule": "aui-node-base"
       }
      },
      "hover": {
       "!type": "fn(overFn: string, outFn: string) -> +node.Node",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/Node.html#method_hover",
       "!doc": "Creates a hover interaction.",
       "!data": {
        "submodule": "aui-node-base"
       }
      },
      "html": {
       "!type": "fn(value: string)",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/Node.html#method_html",
       "!doc": "Gets or sets the HTML contents of the node. If the `value` is passed its\nset the content of the element, otherwise it works as a getter for the\ncurrent content.\n\nExample:\n\n```\nvar node = A.one(#nodeId);\nnode.html(Setting new HTML);\n// Alert the value of the current content\nalert( node.html() );\n```",
       "!data": {
        "submodule": "aui-node-base"
       }
      },
      "outerHTML": {
       "!type": "fn() -> string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/Node.html#method_outerHTML",
       "!doc": "Gets the outerHTML of a node, which islike innerHTML, except that it\nactually contains the HTML of the node itself.",
       "!data": {
        "submodule": "aui-node-base"
       }
      },
      "placeAfter": {
       "!type": "fn(newNode: +node.Node) -> !this",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/Node.html#method_placeAfter",
       "!doc": "Inserts a `newNode` after the node instance (i.e., as the next sibling).\nIf the reference node has no parent, then does nothing.\n\nExample:\n\n```\nvar titleNode = A.one(#titleNode);\nvar descriptionNode = A.one(#descriptionNode);\n// the description is usually shown after the title\ntitleNode.placeAfter(descriptionNode);\n```",
       "!data": {
        "submodule": "aui-node-base"
       }
      },
      "placeBefore": {
       "!type": "fn(newNode: +node.Node) -> !this",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/Node.html#method_placeBefore",
       "!doc": "Inserts a `newNode` before the node instance (i.e., as the previous\nsibling). If the reference node has no parent, then does nothing.\n\nExample:\n\n```\nvar descriptionNode = A.one(#descriptionNode);\nvar titleNode = A.one(#titleNode);\n// the title is usually shown before the description\ndescriptionNode.placeBefore(titleNode);\n```",
       "!data": {
        "submodule": "aui-node-base"
       }
      },
      "prependTo": {
       "!type": "fn(selector: +node.Node|string) -> !this",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/Node.html#method_prependTo",
       "!doc": "Inserts the node instance to the begining of the `selector` node (i.e.,\ninsert before the `firstChild` of the `selector`).\n\nExample:\n\n```\nvar node = A.one(#nodeId);\nnode.prependTo(body);\n```",
       "!data": {
        "submodule": "aui-node-base"
       }
      },
      "radioClass": {
       "!type": "fn(cssClass: string) -> !this",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/Node.html#method_radioClass",
       "!doc": "Adds one or more CSS classes to an element and remove the class(es) from\nthe siblings of the element.",
       "!data": {
        "submodule": "aui-node-base"
       }
      },
      "resetId": {
       "!type": "fn(prefix: string) -> !this",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/Node.html#method_resetId",
       "!doc": "Generates an unique identifier and reset the id attribute of the node\ninstance using the new value. Invokes the [guid](Node.html#method_guid).",
       "!data": {
        "submodule": "aui-node-base"
       }
      },
      "selectText": {
       "!type": "fn(start: number, end: number)",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/Node.html#method_selectText",
       "!doc": "Selects a substring of text inside of the input element.",
       "!data": {
        "submodule": "aui-node-base"
       }
      },
      "selectable": {
       "!type": "fn(noRecurse: ?) -> !this",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/Node.html#method_selectable",
       "!doc": "Enables text selection for this element (normalized across browsers).",
       "!data": {
        "submodule": "aui-node-base"
       }
      },
      "swallowEvent": {
       "!type": "fn(eventName: string|[?], preventDefault: bool) -> !this",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/Node.html#method_swallowEvent",
       "!doc": "Stops the specified event(s) from bubbling and optionally prevents the\ndefault action.\n\nExample:\n\n```\nvar anchor = A.one(a#anchorId);\nanchor.swallowEvent(click);\n```",
       "!data": {
        "submodule": "aui-node-base"
       }
      },
      "text": {
       "!type": "fn(text: string)",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/Node.html#method_text",
       "!doc": "Gets or sets the combined text contents of the node instance, including\nits descendants. If the `text` is passed its set the content of the\nelement, otherwise it works as a getter for the current content.\n\nExample:\n\n```\nvar node = A.one(#nodeId);\nnode.text(Setting new text content);\n// Alert the value of the current content\nalert( node.text() );\n```",
       "!data": {
        "submodule": "aui-node-base"
       }
      },
      "toggle": {
       "!type": "fn(on: bool, callback: fn()) -> !this",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/Node.html#method_toggle",
       "!doc": "Displays or hide the node instance.\n\nNOTE: This method assume that your node were hidden because of the\naui-hide css class were being used. This wont manipulate the inline\n`style.display` property.",
       "!data": {
        "submodule": "aui-node-base"
       }
      },
      "unselectable": {
       "!type": "fn(noRecurse: ?) -> !this",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/Node.html#method_unselectable",
       "!doc": "Disables text selection for this element (normalized across browsers).",
       "!data": {
        "submodule": "aui-node-base"
       }
      },
      "val": {
       "!type": "fn(value: string)",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/Node.html#method_val",
       "!doc": "Gets or sets the value attribute of the node instance. If the `value` is\npassed its set the value of the element, otherwise it works as a getter\nfor the current value.\n\nExample:\n\n```\nvar input = A.one(#inputId);\ninput.val(Setting new input value);\n// Alert the value of the input\nalert( input.val() );\n```",
       "!data": {
        "submodule": "aui-node-base"
       }
      },
      "width": {
       "!type": "fn() -> number",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/Node.html#method_width",
       "!doc": "Returns the width of the content, not including the padding, border or\nmargin. If a width is passed, the nodes overall width is set to that size.\n\nExample:\n\n```\nvar node = A.one(#nodeId);\nnode.width(); //return content width\nnode.width(100); // sets box width\n```",
       "!data": {
        "submodule": "aui-node-base"
       }
      },
      "height": {
       "!type": "fn() -> number",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/Node.html#method_height",
       "!doc": "Returns the height of the content, not including the padding, border or\nmargin. If a height is passed, the nodes overall height is set to that size.\n\nExample:\n\n```\nvar node = A.one(#nodeId);\nnode.height(); //return content height\nnode.height(100); // sets box height\n```",
       "!data": {
        "submodule": "aui-node-base"
       }
      },
      "innerWidth": {
       "!type": "fn() -> number",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/Node.html#method_innerWidth",
       "!doc": "Returns the size of the box from inside of the border, which is the\n`offsetWidth` plus the padding on the left and right.\n\nExample:\n\n```\nvar node = A.one(#nodeId);\nnode.innerWidth();\n```",
       "!data": {
        "submodule": "aui-node-base"
       }
      },
      "innerHeight": {
       "!type": "fn() -> number",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/Node.html#method_innerHeight",
       "!doc": "Returns the size of the box from inside of the border, which is offsetHeight\nplus the padding on the top and bottom.\n\nExample:\n\n```\nvar node = A.one(#nodeId);\nnode.innerHeight();\n```",
       "!data": {
        "submodule": "aui-node-base"
       }
      },
      "outerWidth": {
       "!type": "fn() -> number",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/Node.html#method_outerWidth",
       "!doc": "Returns the outer width of the box including the border, if true is passed as\nthe first argument, the margin is included.\n\nExample:\n\n```\nvar node = A.one(#nodeId);\nnode.outerWidth();\nnode.outerWidth(true); // includes margin\n```",
       "!data": {
        "submodule": "aui-node-base"
       }
      },
      "outerHeight": {
       "!type": "fn() -> number",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/Node.html#method_outerHeight",
       "!doc": "Returns the outer height of the box including the border, if true is passed\nas the first argument, the margin is included.\n\nExample:\n\n```\nvar node = A.one(#nodeId);\nnode.outerHeight();\nnode.outerHeight(true); // includes margin\n```",
       "!data": {
        "submodule": "aui-node-base"
       }
      }
     }
    }
   },
   "aui_pagination": {
    "!data": {
     "module": "aui-pagination"
    },
    "A": {
     "Pagination": {
      "!type": "fn(config: +config.A.PaginationConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Pagination.html",
      "prototype": {
       "!proto": "aui_component.A.Component.prototype",
       "getItem": {
        "!type": "fn(i: +node.Node|number) -> +node.Node",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Pagination.html#method_getItem",
        "!doc": "Retrieve the item node from the passesed item index parameter.\nIf passed item is a node instead of the index returns itself."
       },
       "getOffsetPageNumber": {
        "!type": "fn() -> number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Pagination.html#method_getOffsetPageNumber",
        "!doc": "Retrieve page number including offset e.g., if offset is 100 and\nactive page is 5, this method returns 105."
       },
       "getOffsetTotalPages": {
        "!type": "fn() -> number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Pagination.html#method_getOffsetTotalPages",
        "!doc": "Retrieve total number of pages including offset e.g., if offset is\n100 and total 10, this method returns 110."
       },
       "getTotalItems": {
        "!type": "fn() -> number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Pagination.html#method_getTotalItems",
        "!doc": "Retrieve total number of dom items representing the links, including\nthe arrow control items. Do not include the offset."
       },
       "next": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Pagination.html#method_next",
        "!doc": "Navigate to the next page."
       },
       "prev": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Pagination.html#method_prev",
        "!doc": "Navigate to the previous page."
       },
       "setState": {
        "!type": "fn(state: +Object)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Pagination.html#method_setState",
        "!doc": "Set the new pagination state. The state is a payload object\ncontaining the page number, e.g. `{page:1}`."
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Pagination.html#property_NAME",
       "!doc": "Static property provides a string to identify the class."
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Pagination.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute configuration for\nthe `A.Pagination`."
      },
      "HTML_PARSER": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Pagination.html#property_HTML_PARSER",
       "!doc": "Object hash, defining how attribute values are to be parsed from markup\ncontained in the widgets content box."
      },
      "BIND_UI_ATTRS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Pagination.html#property_BIND_UI_ATTRS",
       "!doc": "Static property used to define the attributes for the bindUI lifecycle\nphase."
      },
      "UI_ATTRS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Pagination.html#property_UI_ATTRS",
       "!doc": "Static property used to define the UI attributes."
      }
     }
    }
   },
   "aui_palette": {
    "!data": {
     "module": "aui-palette"
    },
    "A": {
     "Palette": {
      "!type": "fn(config: +config.A.PaletteConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Palette.html",
      "prototype": {
       "!proto": "widget.Widget.prototype",
       "getItem": {
        "!type": "fn(row: number, col: number) -> +Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Palette.html#method_getItem",
        "!doc": "Returns an item in the Palette by row and column."
       },
       "getItemByIndex": {
        "!type": "fn(index: number) -> +Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Palette.html#method_getItemByIndex",
        "!doc": "Returns an item in the Palette by its index."
       },
       "getItemByValue": {
        "!type": "fn(value: +Object|number|string) -> +Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Palette.html#method_getItemByValue",
        "!doc": "Returns an item in the Palette by its value."
       },
       "select": {
        "!type": "fn(valueOrIndex: number|+Object)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Palette.html#method_select",
        "!doc": "Selects an item in the Palette."
       },
       "toggleSelection": {
        "!type": "fn(valueOrIndex: number|+Object, force: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Palette.html#method_toggleSelection",
        "!doc": "Toggles the section of an item. The item must be specified by its\nvalue or index. A second param indicates if the selection should be\nforced."
       },
       "unselect": {
        "!type": "fn(valueOrIndex: number|+Object)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Palette.html#method_unselect",
        "!doc": "Unselects an item. The item must be specified by its value or index."
       }
      },
      "HTML_PARSER": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Palette.html#property_HTML_PARSER",
       "!doc": "Object hash, defining how attribute values have to be parsed from\nmarkup contained in the Palettes content box."
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Palette.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Palette."
      }
     }
    }
   },
   "aui_parse_content": {
    "!data": {
     "module": "aui-parse-content"
    },
    "A": {
     "ParseContent": {
      "!type": "fn(config: +config.A.ParseContentConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ParseContent.html",
      "prototype": {
       "!proto": "plugin.Plugin.Base.prototype",
       "globalEval": {
        "!type": "fn(data: string)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ParseContent.html#method_globalEval",
        "!doc": "Global eval the <data>data</data> passed."
       },
       "parseContent": {
        "!type": "fn(content: string) -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ParseContent.html#method_parseContent",
        "!doc": "Extract the `script` tags from the string content and\nevaluate the chunks."
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ParseContent.html#property_NAME",
       "!doc": "Static property provides a string to identify the class."
      },
      "NS": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ParseContent.html#property_NS",
       "!doc": "Static property provides a string to identify the namespace."
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ParseContent.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the ParseContent."
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ParseContent.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends."
      }
     }
    }
   },
   "aui_popover": {
    "!data": {
     "module": "aui-popover"
    },
    "A": {
     "Popover": {
      "!type": "fn(config: +config.A.PopoverConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Popover.html",
      "!data": {
       "augments": [
        "A.WidgetPosition",
        "A.WidgetStdMod",
        "A.WidgetAutohide",
        "A.WidgetModality",
        "A.WidgetPositionAlign",
        "A.WidgetPositionConstrain",
        "A.WidgetStack"
       ],
       "extends": [
        "aui_widget_cssclass.A.WidgetCssClass",
        "aui_widget_toggle.A.WidgetToggle",
        "aui_widget_toolbars.A.WidgetToolbars",
        "aui_widget_cssclass.A.WidgetPositionAlignSuggestion"
       ]
      },
      "prototype": {
       "!proto": "widget.Widget.prototype"
      },
      "CSS_PREFIX": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Popover.html#property_CSS_PREFIX",
       "!doc": "Static property provides a string to identify the CSS prefix."
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Popover.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Popover."
      },
      "TEMPLATES": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Popover.html#property_TEMPLATES",
       "!doc": "Static property provides a set of reusable templates."
      }
     }
    }
   },
   "aui_progressbar": {
    "!data": {
     "module": "aui-progressbar"
    },
    "A": {
     "ProgressBar": {
      "!type": "fn(config: +config.A.ProgressBarConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ProgressBar.html",
      "prototype": {
       "!proto": "aui_component.A.Component.prototype"
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ProgressBar.html#property_NAME",
       "!doc": "Static property provides a string to identify the class."
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ProgressBar.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the ProgressBar."
      },
      "HTML_PARSER": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ProgressBar.html#property_HTML_PARSER",
       "!doc": "Object hash, defining how attribute values are to be parsed from\nmarkup contained in the widgets bounding box."
      },
      "UI_ATTRS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ProgressBar.html#property_UI_ATTRS",
       "!doc": "Static property used to define the UI attributes."
      }
     }
    }
   },
   "aui_rating": {
    "!data": {
     "module": "aui-rating"
    },
    "A": {
     "Rating": {
      "!type": "fn(config: +config.A.RatingConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Rating.html",
      "prototype": {
       "!proto": "aui_component.A.Component.prototype",
       "clearSelection": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Rating.html#method_clearSelection",
        "!doc": "Clear all selected starts to the default state."
       },
       "select": {
        "!type": "fn(index: number)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Rating.html#method_select",
        "!doc": "Select the `index` Rating element."
       },
       "fillTo": {
        "!type": "fn(index: number, className: string)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Rating.html#method_fillTo",
        "!doc": "Add the `className` on the the `index` element\nand all the previous Rating elements."
       },
       "indexOf": {
        "!type": "fn(elem: +node.Node) -> number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Rating.html#method_indexOf",
        "!doc": "Find the index of the `elem`."
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Rating.html#property_NAME",
       "!doc": "Static property provides a string to identify the class."
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Rating.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Rating."
      },
      "HTML_PARSER": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Rating.html#property_HTML_PARSER",
       "!doc": "Object hash, defining how attribute values are to be parsed from\nmarkup contained in the widgets content box."
      }
     },
     "ThumbRating": {
      "!type": "fn(config: +config.A.ThumbRatingConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ThumbRating.html",
      "prototype": {
       "!proto": "aui_rating.A.Rating.prototype",
       "fillTo": {
        "!type": "fn(index: number, className: string)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ThumbRating.html#method_fillTo",
        "!doc": "Add the `className` on the the `index` element\nand all the previous Rating elements."
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ThumbRating.html#property_NAME",
       "!doc": "Static property provides a string to identify the class."
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ThumbRating.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the ThumbRating."
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ThumbRating.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends."
      }
     }
    }
   },
   "aui_scheduler": {
    "!data": {
     "module": "aui-scheduler",
     "submodules": {
      "aui-scheduler-base-calendar": {},
      "aui-scheduler-base-event": {},
      "aui-scheduler-base-view": {},
      "aui-scheduler-base": {},
      "aui-scheduler-event-recorder": {},
      "aui-scheduler-view-agenda": {},
      "aui-scheduler-view-day": {},
      "aui-scheduler-view-month": {},
      "aui-scheduler-view-table-dd": {},
      "aui-scheduler-view-table": {},
      "aui-scheduler-view-week": {}
     }
    },
    "A": {
     "SchedulerCalendar": {
      "!type": "fn(config: +config.A.SchedulerCalendarConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerCalendar.html",
      "prototype": {
       "!proto": "app.ModelList.prototype"
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerCalendar.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `SchedulerCalendar`.",
       "!data": {
        "submodule": "aui-scheduler-base-calendar"
       }
      }
     },
     "SchedulerEvent": {
      "!type": "fn(config: +config.A.SchedulerEventConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html",
      "prototype": {
       "!proto": "app.Model.prototype",
       "addPaddingNode": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#method_addPaddingNode",
        "!doc": "Sometimes an event will require a padding node that mimics the\nbehavior of the scheduler `event`s `node`. This can occur in the\nweek view when an event spans multiple days.\n\nFor example, an event beginning at 10pm on January 1 and ending on\n3am January 2nd would require a padding node. The `event`s `node`\nappears from January 1 from 10:00pm to 11:59pm and the `paddingNode`\nis rendered on the table from January 2 from 12:00am to 3:00am.",
        "!data": {
         "submodule": "aui-scheduler-base-event"
        }
       },
       "clone": {
        "!type": "fn() -> +Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#method_clone",
        "!doc": "Clones the scheduler `event`.",
        "!data": {
         "submodule": "aui-scheduler-base-event"
        }
       },
       "copyDates": {
        "!type": "fn(evt: +aui_scheduler.A.SchedulerEvent, options: +Object)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#method_copyDates",
        "!doc": "Copies the dates from the `event` parameter to the instance `event`.",
        "!data": {
         "submodule": "aui-scheduler-base-event"
        }
       },
       "copyPropagateAttrValues": {
        "!type": "fn(evt: +aui_scheduler.A.SchedulerEvent, dontCopyMap: bool, options: +Object)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#method_copyPropagateAttrValues",
        "!doc": "Copies the propagate attribute vales from an `event` to this `event`.",
        "!data": {
         "submodule": "aui-scheduler-base-event"
        }
       },
       "getDaysDuration": {
        "!type": "fn() -> number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#method_getDaysDuration",
        "!doc": "Gets the number of days an `event` is scheduled to take place.",
        "!data": {
         "submodule": "aui-scheduler-base-event"
        }
       },
       "getHoursDuration": {
        "!type": "fn() -> number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#method_getHoursDuration",
        "!doc": "Gets the number of hours an `event` is scheduled to take place.",
        "!data": {
         "submodule": "aui-scheduler-base-event"
        }
       },
       "getMinutesDuration": {
        "!type": "fn() -> number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#method_getMinutesDuration",
        "!doc": "Gets the number of minutes an `event` is scheduled to take place.",
        "!data": {
         "submodule": "aui-scheduler-base-event"
        }
       },
       "getSecondsDuration": {
        "!type": "fn() -> number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#method_getSecondsDuration",
        "!doc": "Gets the number of seconds an `event` is scheduled to take place.",
        "!data": {
         "submodule": "aui-scheduler-base-event"
        }
       },
       "sameEndDate": {
        "!type": "fn(evt: +aui_scheduler.A.SchedulerEvent) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#method_sameEndDate",
        "!doc": "Determines if an `event`s end date is this same as this `event`.",
        "!data": {
         "submodule": "aui-scheduler-base-event"
        }
       },
       "sameStartDate": {
        "!type": "fn(evt: +aui_scheduler.A.SchedulerEvent) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#method_sameStartDate",
        "!doc": "Determines if an `event`s start date is this same as this `event`.",
        "!data": {
         "submodule": "aui-scheduler-base-event"
        }
       },
       "isAfter": {
        "!type": "fn(evt: +aui_scheduler.A.SchedulerEvent) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#method_isAfter",
        "!doc": "Determines if an `event` is after this `event`.",
        "!data": {
         "submodule": "aui-scheduler-base-event"
        }
       },
       "isBefore": {
        "!type": "fn(evt: +aui_scheduler.A.SchedulerEvent) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#method_isBefore",
        "!doc": "Determines if an `event` is before this `event`.",
        "!data": {
         "submodule": "aui-scheduler-base-event"
        }
       },
       "intersects": {
        "!type": "fn(evt: +aui_scheduler.A.SchedulerEvent) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#method_intersects",
        "!doc": "Determines if an `event` interescts with this `event`.",
        "!data": {
         "submodule": "aui-scheduler-base-event"
        }
       },
       "intersectHours": {
        "!type": "fn(evt: +aui_scheduler.A.SchedulerEvent) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#method_intersectHours",
        "!doc": "Determines if an `event`s hours interescts with this `event`s\nhours.",
        "!data": {
         "submodule": "aui-scheduler-base-event"
        }
       },
       "isDayBoundaryEvent": {
        "!type": "fn() -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#method_isDayBoundaryEvent",
        "!doc": "Determines if a this `event` starts or ends at the beginning or end\nof a day.",
        "!data": {
         "submodule": "aui-scheduler-base-event"
        }
       },
       "isDayOverlapEvent": {
        "!type": "fn() -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#method_isDayOverlapEvent",
        "!doc": "Checks if the passed date is between `startDate` and `endDate`.",
        "!data": {
         "submodule": "aui-scheduler-base-event"
        }
       },
       "getClearEndDate": {
        "!type": "fn() -> +datatype_date.Date",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#method_getClearEndDate",
        "!doc": "Clears the time fields from the `endDate`, effectively setting the\ntime to 12 noon.",
        "!data": {
         "submodule": "aui-scheduler-base-event"
        }
       },
       "getClearStartDate": {
        "!type": "fn() -> +datatype_date.Date",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#method_getClearStartDate",
        "!doc": "Clears the time fields from the `startDate`, effectively setting the\ntime to 12 noon.",
        "!data": {
         "submodule": "aui-scheduler-base-event"
        }
       },
       "move": {
        "!type": "fn(date: +datatype_date.Date, options: +Object)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#method_move",
        "!doc": "Moves this Scheduler event to a new date specified by the date\nparameter.",
        "!data": {
         "submodule": "aui-scheduler-base-event"
        }
       },
       "setContent": {
        "!type": "fn(content: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#method_setContent",
        "!doc": "Replaces each nodes current content with the `content`.",
        "!data": {
         "submodule": "aui-scheduler-base-event"
        }
       },
       "setTitle": {
        "!type": "fn(content: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#method_setTitle",
        "!doc": "Replaces each nodes current title with the `content`.",
        "!data": {
         "submodule": "aui-scheduler-base-event"
        }
       },
       "syncNodeContentUI": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#method_syncNodeContentUI",
        "!doc": "Sets the content of the Scheduler event to the content attribute\nvalue.",
        "!data": {
         "submodule": "aui-scheduler-base-event"
        }
       },
       "syncNodeTitleUI": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#method_syncNodeTitleUI",
        "!doc": "Sets the title of the Scheduler event to the a formated date.",
        "!data": {
         "submodule": "aui-scheduler-base-event"
        }
       },
       "split": {
        "!type": "fn() -> [?]",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#method_split",
        "!doc": "Splits an event into multiple days. Since an event can span across\nmultiple days in the week view, this event will be split into chunks\nfor each day column.",
        "!data": {
         "submodule": "aui-scheduler-base-event"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-scheduler-base-event"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `SchedulerEvent`.",
       "!data": {
        "submodule": "aui-scheduler-base-event"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-scheduler-base-event"
       }
      },
      "PROPAGATE_ATTRS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvent.html#property_PROPAGATE_ATTRS",
       "!doc": "Defines the propegate attribute keys for `Scheduler` events.",
       "!data": {
        "submodule": "aui-scheduler-base-event"
       }
      }
     },
     "SchedulerView": {
      "!type": "fn(config: +config.A.SchedulerViewConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerView.html",
      "!data": {
       "extends": [
        "widget_stdmod.WidgetStdMod"
       ]
      },
      "prototype": {
       "!proto": "aui_component.A.Component.prototype",
       "getAdjustedViewDate": {
        "!type": "fn(date: +datatype_date.Date) -> +datatype_date.Date",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerView.html#method_getAdjustedViewDate",
        "!doc": "Returns a date value of the date with its time adjusted\nto midnight.",
        "!data": {
         "submodule": "aui-scheduler-base-view"
        }
       },
       "flushViewCache": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerView.html#method_flushViewCache",
        "!doc": "Removes all data from `evtDateStack`, `evtRenderedStack` and\n`rowDateTableStack`.",
        "!data": {
         "submodule": "aui-scheduler-base-view"
        }
       },
       "getNextDate": {
        "!type": "fn() -> +datatype_date.Date",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerView.html#method_getNextDate",
        "!doc": "Returns the value of the date that follows the views current\ndate.",
        "!data": {
         "submodule": "aui-scheduler-base-view"
        }
       },
       "getPrevDate": {
        "!type": "fn() -> +datatype_date.Date",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerView.html#method_getPrevDate",
        "!doc": "Returns the value of the date that preceeds the views current\ndate.",
        "!data": {
         "submodule": "aui-scheduler-base-view"
        }
       },
       "getToday": {
        "!type": "fn() -> +datatype_date.Date",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerView.html#method_getToday",
        "!doc": "Returns the value of the current date.",
        "!data": {
         "submodule": "aui-scheduler-base-view"
        }
       },
       "limitDate": {
        "!type": "fn(date: +datatype_date.Date, maxDate: +datatype_date.Date) -> +datatype_date.Date",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerView.html#method_limitDate",
        "!doc": "Returns a clone of a given `date` that will adjust to the `maxDate`\nif it occurs after `maxDate`.",
        "!data": {
         "submodule": "aui-scheduler-base-view"
        }
       },
       "plotEvents": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerView.html#method_plotEvents",
        "!doc": "Plots all events in the current view.",
        "!data": {
         "submodule": "aui-scheduler-base-view"
        }
       },
       "syncStdContent": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerView.html#method_syncStdContent",
        "!doc": "Sync `SchedulerView` StdContent.",
        "!data": {
         "submodule": "aui-scheduler-base-view"
        }
       },
       "syncEventUI": {
        "!type": "fn(evt: +aui_scheduler.A.SchedulerEvent)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerView.html#method_syncEventUI",
        "!doc": "Sync `event` on the UI.",
        "!data": {
         "submodule": "aui-scheduler-base-view"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerView.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-scheduler-base-view"
       }
      },
      "AUGMENTS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerView.html#property_AUGMENTS",
       "!doc": "Static property used to define the augmented classes.",
       "!data": {
        "submodule": "aui-scheduler-base-view"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerView.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `SchedulerView`.",
       "!data": {
        "submodule": "aui-scheduler-base-view"
       }
      },
      "BIND_UI_ATTRS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerView.html#property_BIND_UI_ATTRS",
       "!doc": "Static property used to define the attributes\nfor the bindUI lifecycle phase.",
       "!data": {
        "submodule": "aui-scheduler-base-view"
       }
      }
     },
     "SchedulerEvents": {
      "!type": "fn(config: +config.A.SchedulerEventsConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvents.html",
      "prototype": {
       "!proto": "app.ModelList.prototype",
       "comparator": {
        "!type": "fn(model: +Object) -> number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvents.html#method_comparator",
        "!doc": "Compares the inputs of a start and end date to see if adding `1` to the\nstart date time is larger than the difference between start and end date\ntimes.",
        "!data": {
         "submodule": "aui-scheduler-base"
        }
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEvents.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `SchedulerEvents`.",
       "!data": {
        "submodule": "aui-scheduler-base"
       }
      }
     },
     "SchedulerEventSupport": {
      "!type": "fn(config: +config.A.SchedulerEventSupportConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventSupport.html",
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventSupport.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `SchedulerEventSupport`.",
       "!data": {
        "submodule": "aui-scheduler-base"
       }
      },
      "prototype": {
       "addEvents": {
        "!type": "fn(models: [?]|+app.ModelList|+app.Model|+aui_scheduler.A.SchedulerEvent) -> +aui_scheduler.A.SchedulerEvents",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventSupport.html#method_addEvents",
        "!doc": "Adds and returns the collection of events for this `Scheduler`.",
        "!data": {
         "submodule": "aui-scheduler-base"
        }
       },
       "eachEvent": {
        "!type": "fn(fn: fn()) -> +aui_scheduler.A.SchedulerEvents",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventSupport.html#method_eachEvent",
        "!doc": "Applies a `function` to the collection of `Scheduler` events.",
        "!data": {
         "submodule": "aui-scheduler-base"
        }
       },
       "flushEvents": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventSupport.html#method_flushEvents",
        "!doc": "Deletes each event in the collection of `Scheduler` events.",
        "!data": {
         "submodule": "aui-scheduler-base"
        }
       },
       "getEventByClientId": {
        "!type": "fn(clientId: string) -> +Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventSupport.html#method_getEventByClientId",
        "!doc": "Returns the event by matching its `clientId`.",
        "!data": {
         "submodule": "aui-scheduler-base"
        }
       },
       "getEvents": {
        "!type": "fn(filterFn: fn()) -> [?]",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventSupport.html#method_getEvents",
        "!doc": "Gets a collection of events.",
        "!data": {
         "submodule": "aui-scheduler-base"
        }
       },
       "getEventsByDay": {
        "!type": "fn(date: +datatype_date.Date, includeOverlap: bool) -> [?]",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventSupport.html#method_getEventsByDay",
        "!doc": "Gets a collection of events within a given day. It will filter\noverlapping events by default unless `includeOverlap` is true.",
        "!data": {
         "submodule": "aui-scheduler-base"
        }
       },
       "getIntersectEvents": {
        "!type": "fn(date: +datatype_date.Date) -> [?]",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventSupport.html#method_getIntersectEvents",
        "!doc": "Returns the list of all events that intersect with a given date. Events\nthat are not visible are not included in this list.",
        "!data": {
         "submodule": "aui-scheduler-base"
        }
       },
       "removeEvents": {
        "!type": "fn(models: [?]|+app.ModelList|+app.Model|+aui_scheduler.A.SchedulerEvent) -> +aui_scheduler.A.SchedulerEvents",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventSupport.html#method_removeEvents",
        "!doc": "Removes given `SchedulerEvents` from the scheduler.",
        "!data": {
         "submodule": "aui-scheduler-base"
        }
       },
       "resetEvents": {
        "!type": "fn(models: [?]|+app.ModelList|+app.Model|+aui_scheduler.A.SchedulerEvent) -> +aui_scheduler.A.SchedulerEvents",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventSupport.html#method_resetEvents",
        "!doc": "Completely replaces all `SchedulerEvents` in the list with the given\n`SchedulerEvents`.",
        "!data": {
         "submodule": "aui-scheduler-base"
        }
       }
      }
     },
     "SchedulerBase": {
      "!type": "fn(config: +config.A.SchedulerBaseConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerBase.html",
      "!data": {
       "extends": [
        "aui_scheduler.A.SchedulerEventSupport",
        "widget_stdmod.WidgetStdMod"
       ]
      },
      "prototype": {
       "!proto": "aui_component.A.Component.prototype",
       "getViewByName": {
        "!type": "fn(name: string) -> +aui_scheduler.A.SchedulerView",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerBase.html#method_getViewByName",
        "!doc": "Returns the `SchedulerView` that belongs to a given name.",
        "!data": {
         "submodule": "aui-scheduler-base"
        }
       },
       "getStrings": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerBase.html#method_getStrings",
        "!doc": "Returns this `Scheduler`s `strings` attribute value.",
        "!data": {
         "submodule": "aui-scheduler-base"
        }
       },
       "getString": {
        "!type": "fn(key: string) -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerBase.html#method_getString",
        "!doc": "Returns the string that matches the `key` type.",
        "!data": {
         "submodule": "aui-scheduler-base"
        }
       },
       "renderView": {
        "!type": "fn(view: +aui_scheduler.A.SchedulerView)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerBase.html#method_renderView",
        "!doc": "Renders the `SchedulerView` based on the given `view` parameter\nunder `instance.bodyNode`.",
        "!data": {
         "submodule": "aui-scheduler-base"
        }
       },
       "plotViewEvents": {
        "!type": "fn(view: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerBase.html#method_plotViewEvents",
        "!doc": "Plots all events for the current view.",
        "!data": {
         "submodule": "aui-scheduler-base"
        }
       },
       "syncEventsUI": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerBase.html#method_syncEventsUI",
        "!doc": "Plots the `activeView` events value.",
        "!data": {
         "submodule": "aui-scheduler-base"
        }
       },
       "renderButtonGroup": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerBase.html#method_renderButtonGroup",
        "!doc": "Renders a new `ButtonGroup` and attaches it to the `Scheduler`\ninstances as a property `instance.buttonGroup`. It is rendered under\nthe `Scheduler` instances `viewsNode`.",
        "!data": {
         "submodule": "aui-scheduler-base"
        }
       },
       "syncStdContent": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerBase.html#method_syncStdContent",
        "!doc": "Sync `SchedulerBase` StdContent.",
        "!data": {
         "submodule": "aui-scheduler-base"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerBase.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-scheduler-base"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerBase.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `SchedulerBase`.",
       "!data": {
        "submodule": "aui-scheduler-base"
       }
      },
      "HTML_PARSER": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerBase.html#property_HTML_PARSER",
       "!doc": "Contains an object hash, defining how attribute values are to be parsed\nfrom markup contained in the widgets bounding box.",
       "!data": {
        "submodule": "aui-scheduler-base"
       }
      },
      "UI_ATTRS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerBase.html#property_UI_ATTRS",
       "!doc": "Static property used to define the UI attributes.",
       "!data": {
        "submodule": "aui-scheduler-base"
       }
      },
      "AUGMENTS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerBase.html#property_AUGMENTS",
       "!doc": "Static property used to define the augmented classes.",
       "!data": {
        "submodule": "aui-scheduler-base"
       }
      }
     },
     "SchedulerEventRecorder": {
      "!type": "fn(config: +config.A.SchedulerEventRecorderConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventRecorder.html",
      "prototype": {
       "!proto": "aui_scheduler.A.SchedulerEvent.prototype",
       "getContentNode": {
        "!type": "fn() -> +node.Node",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventRecorder.html#method_getContentNode",
        "!doc": "Gets the content node belonging to the `popover`.",
        "!data": {
         "submodule": "aui-scheduler-event-recorder"
        }
       },
       "getFormattedDate": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventRecorder.html#method_getFormattedDate",
        "!doc": "Returns the formatted date including start and end hours if the event\nis not `allDay`.",
        "!data": {
         "submodule": "aui-scheduler-event-recorder"
        }
       },
       "getTemplateData": {
        "!type": "fn() -> +Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventRecorder.html#method_getTemplateData",
        "!doc": "Returns this Scheduler event recorders `content`, and dates.",
        "!data": {
         "submodule": "aui-scheduler-event-recorder"
        }
       },
       "getUpdatedSchedulerEvent": {
        "!type": "fn(optAttrMap: +Object) -> +Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventRecorder.html#method_getUpdatedSchedulerEvent",
        "!doc": "Returns an updated event and also merges in any additional attributes\npassed in as `optAttrMap`.",
        "!data": {
         "submodule": "aui-scheduler-event-recorder"
        }
       },
       "hidePopover": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventRecorder.html#method_hidePopover",
        "!doc": "Hides this Scheduler event recorders `popover` component.",
        "!data": {
         "submodule": "aui-scheduler-event-recorder"
        }
       },
       "populateForm": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventRecorder.html#method_populateForm",
        "!doc": "Loads template data into the Scheduler event recorders form.",
        "!data": {
         "submodule": "aui-scheduler-event-recorder"
        }
       },
       "serializeForm": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventRecorder.html#method_serializeForm",
        "!doc": "Converts this event recorders form node object to a string.",
        "!data": {
         "submodule": "aui-scheduler-event-recorder"
        }
       },
       "showPopover": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventRecorder.html#method_showPopover",
        "!doc": "Hides this Scheduler event recorders `popover` component.",
        "!data": {
         "submodule": "aui-scheduler-event-recorder"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventRecorder.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-scheduler-event-recorder"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventRecorder.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `SchedulerEventRecorder`.",
       "!data": {
        "submodule": "aui-scheduler-event-recorder"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerEventRecorder.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-scheduler-event-recorder"
       }
      }
     },
     "SchedulerAgendaView": {
      "!type": "fn(config: +config.A.SchedulerAgendaViewConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerAgendaView.html",
      "prototype": {
       "!proto": "aui_scheduler.A.SchedulerView.prototype",
       "getNextDate": {
        "!type": "fn() -> +datatype_date.Date",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerAgendaView.html#method_getNextDate",
        "!doc": "Returns the value of the date that follows the agenda views current\ndate.",
        "!data": {
         "submodule": "aui-scheduler-view-agenda"
        }
       },
       "getPrevDate": {
        "!type": "fn() -> +datatype_date.Date",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerAgendaView.html#method_getPrevDate",
        "!doc": "Returns the value of the date that preceeds the agenda views current\ndate.",
        "!data": {
         "submodule": "aui-scheduler-view-agenda"
        }
       },
       "plotEvents": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerAgendaView.html#method_plotEvents",
        "!doc": "Plots all events in the current view.",
        "!data": {
         "submodule": "aui-scheduler-view-agenda"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerAgendaView.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-scheduler-view-agenda"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerAgendaView.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `SchedulerAgendaView`.",
       "!data": {
        "submodule": "aui-scheduler-view-agenda"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerAgendaView.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-scheduler-view-agenda"
       }
      }
     },
     "SchedulerDayView": {
      "!type": "fn(config: +config.A.SchedulerDayViewConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html",
      "prototype": {
       "!proto": "aui_scheduler.A.SchedulerView.prototype",
       "syncStdContent": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#method_syncStdContent",
        "!doc": "Sync SchedulerView StdContent.",
        "!data": {
         "submodule": "aui-scheduler-view-day"
        }
       },
       "calculateEventHeight": {
        "!type": "fn(duration: number) -> number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#method_calculateEventHeight",
        "!doc": "Calculates and returns the height of an event based on a given\n`duration`.",
        "!data": {
         "submodule": "aui-scheduler-view-day"
        }
       },
       "calculateTop": {
        "!type": "fn(date: +datatype_date.Date) -> number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#method_calculateTop",
        "!doc": "Calculates and returns the value needed to get the `top` property\ngive a `date`.",
        "!data": {
         "submodule": "aui-scheduler-view-day"
        }
       },
       "getNextDate": {
        "!type": "fn() -> +datatype_date.Date",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#method_getNextDate",
        "!doc": "Returns the value of the date that follows the day views current\ndate.",
        "!data": {
         "submodule": "aui-scheduler-view-day"
        }
       },
       "getPrevDate": {
        "!type": "fn() -> +datatype_date.Date",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#method_getPrevDate",
        "!doc": "Returns the value of the date that preceeds the day views current\ndate.",
        "!data": {
         "submodule": "aui-scheduler-view-day"
        }
       },
       "getColumnByDate": {
        "!type": "fn(date: +datatype_date.Date) -> number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#method_getColumnByDate",
        "!doc": "Returns the column `Node` determined by a given `Date`.",
        "!data": {
         "submodule": "aui-scheduler-view-day"
        }
       },
       "getColumnShimByDate": {
        "!type": "fn(date: +datatype_date.Date) -> number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#method_getColumnShimByDate",
        "!doc": "Returns the column shim `Node` determined by a given `Date`.",
        "!data": {
         "submodule": "aui-scheduler-view-day"
        }
       },
       "getDateByColumn": {
        "!type": "fn(colNumber: ?) -> ?",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#method_getDateByColumn",
        "!doc": "Returns the `Date` determined by a given column `Node`.",
        "!data": {
         "submodule": "aui-scheduler-view-day"
        }
       },
       "getDateDaysOffset": {
        "!type": "fn(date: +datatype_date.Date) -> number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#method_getDateDaysOffset",
        "!doc": "Returns the number of offset days.",
        "!data": {
         "submodule": "aui-scheduler-view-day"
        }
       },
       "getYCoordTime": {
        "!type": "fn(top: number) -> [?]",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#method_getYCoordTime",
        "!doc": "Returns the time at the Y coordinate from a given top position.",
        "!data": {
         "submodule": "aui-scheduler-view-day"
        }
       },
       "plotEvent": {
        "!type": "fn(evt: +aui_scheduler.A.SchedulerEvent)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#method_plotEvent",
        "!doc": "Plots a given event for the day view.",
        "!data": {
         "submodule": "aui-scheduler-view-day"
        }
       },
       "plotEvents": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#method_plotEvents",
        "!doc": "Plots all events in the current view.",
        "!data": {
         "submodule": "aui-scheduler-view-day"
        }
       },
       "syncColumnsUI": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#method_syncColumnsUI",
        "!doc": "Syncs the `SchedulerView` `columns` instance. Lifecycle.",
        "!data": {
         "submodule": "aui-scheduler-view-day"
        }
       },
       "syncDaysHeaderUI": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#method_syncDaysHeaderUI",
        "!doc": "Syncs the `SchedulerView` `daysHeader` instance. Lifecycle.",
        "!data": {
         "submodule": "aui-scheduler-view-day"
        }
       },
       "syncEventsIntersectionUI": {
        "!type": "fn(columnEvents: [?])",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#method_syncEventsIntersectionUI",
        "!doc": "Syncs the `SchedulerView` `eventsIntersection` instance. Lifecycle.",
        "!data": {
         "submodule": "aui-scheduler-view-day"
        }
       },
       "syncEventHeightUI": {
        "!type": "fn(evt: +aui_scheduler.A.SchedulerEvent)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#method_syncEventHeightUI",
        "!doc": "Syncs the `SchedulerView` `eventHeight` instance. Lifecycle.",
        "!data": {
         "submodule": "aui-scheduler-view-day"
        }
       },
       "syncEventTopUI": {
        "!type": "fn(evt: +aui_scheduler.A.SchedulerEvent)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#method_syncEventTopUI",
        "!doc": "Syncs the `SchedulerView` `eventTop` instance. Lifecycle.",
        "!data": {
         "submodule": "aui-scheduler-view-day"
        }
       },
       "syncHeaderViewUI": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#method_syncHeaderViewUI",
        "!doc": "Syncs the `SchedulerView` `headerView` instance. Lifecycle.",
        "!data": {
         "submodule": "aui-scheduler-view-day"
        }
       },
       "calculateYDelta": {
        "!type": "fn(startXY: [?], xy: [?])",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#method_calculateYDelta",
        "!doc": "Calculates the Y delta between two XY coordinates.",
        "!data": {
         "submodule": "aui-scheduler-view-day"
        }
       },
       "findEventIntersections": {
        "!type": "fn(evt: +aui_scheduler.A.SchedulerEvent, Array: [?]) -> [?]",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#method_findEventIntersections",
        "!doc": "Returns a collection of `SchedulerEvents` as the parameter `events`\nthat intersect with `evt`.",
        "!data": {
         "submodule": "aui-scheduler-view-day"
        }
       },
       "getXYDelta": {
        "!type": "fn(event: +event_custom.EventFacade)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#method_getXYDelta",
        "!doc": "Calculates the XY delta between the `event.currentTarget` XY\ncoordinates as well as the XY coordinates from the event page.",
        "!data": {
         "submodule": "aui-scheduler-view-day"
        }
       },
       "getTickY": {
        "!type": "fn() -> number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#method_getTickY",
        "!doc": "Returns the nearest multiple of 10 to half the height of this\n`SchedulerView`.",
        "!data": {
         "submodule": "aui-scheduler-view-day"
        }
       },
       "roundToNearestHour": {
        "!type": "fn(date: +datatype_date.Date, time: [?])",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#method_roundToNearestHour",
        "!doc": "Rounds a given `Date` to a given hour represented as time.",
        "!data": {
         "submodule": "aui-scheduler-view-day"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-scheduler-view-day"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `SchedulerDayView`.",
       "!data": {
        "submodule": "aui-scheduler-view-day"
       }
      },
      "HTML_PARSER": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#property_HTML_PARSER",
       "!doc": "Contains an object hash, defining how attribute values are to be parsed\nfrom markup contained in the widgets bounding box.",
       "!data": {
        "submodule": "aui-scheduler-view-day"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerDayView.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-scheduler-view-day"
       }
      }
     },
     "SchedulerMonthView": {
      "!type": "fn(config: +config.A.SchedulerMonthViewConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerMonthView.html",
      "prototype": {
       "!proto": "aui_scheduler.A.SchedulerTableView.prototype",
       "getAdjustedViewDate": {
        "!type": "fn(date: +datatype_date.Date) -> +datatype_date.Date",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerMonthView.html#method_getAdjustedViewDate",
        "!doc": "Returns a date value of the first day of the month with its time\nadjusted to midnight.",
        "!data": {
         "submodule": "aui-scheduler-view-month"
        }
       },
       "getNextDate": {
        "!type": "fn() -> +datatype_date.Date",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerMonthView.html#method_getNextDate",
        "!doc": "Returns the value of the date that follows the month views current\ndate.",
        "!data": {
         "submodule": "aui-scheduler-view-month"
        }
       },
       "getPrevDate": {
        "!type": "fn() -> +datatype_date.Date",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerMonthView.html#method_getPrevDate",
        "!doc": "Returns the value of the date that preceeds the month views current\ndate.",
        "!data": {
         "submodule": "aui-scheduler-view-month"
        }
       },
       "plotEvents": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerMonthView.html#method_plotEvents",
        "!doc": "Plots all events in the current view.",
        "!data": {
         "submodule": "aui-scheduler-view-month"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerMonthView.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-scheduler-view-month"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerMonthView.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `SchedulerMonthView`.",
       "!data": {
        "submodule": "aui-scheduler-view-month"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerMonthView.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-scheduler-view-month"
       }
      }
     },
     "SchedulerTableViewDD": {
      "!type": "fn(config: +config.A.SchedulerTableViewDDConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableViewDD.html",
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableViewDD.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `SchedulerTableViewDD`.",
       "!data": {
        "submodule": "aui-scheduler-view-table-dd"
       }
      },
      "prototype": {
       "viewDDBindUI": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableViewDD.html#method_viewDDBindUI",
        "!doc": "Binds the scheduler view `DD.Delegate` events on the UI. Lifecycle.",
        "!data": {
         "submodule": "aui-scheduler-view-table-dd"
        }
       },
       "viewDDRenderUI": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableViewDD.html#method_viewDDRenderUI",
        "!doc": "Renders the scheduler view `DD.Delegate` instance. Lifecycle.",
        "!data": {
         "submodule": "aui-scheduler-view-table-dd"
        }
       },
       "viewDDSyncUI": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableViewDD.html#method_viewDDSyncUI",
        "!doc": "Syncs the scheduler view `DD.Delegate` instance. Lifecycle.",
        "!data": {
         "submodule": "aui-scheduler-view-table-dd"
        }
       },
       "removeLasso": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableViewDD.html#method_removeLasso",
        "!doc": "Removes the table view lasso.",
        "!data": {
         "submodule": "aui-scheduler-view-table-dd"
        }
       },
       "removeProxy": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableViewDD.html#method_removeProxy",
        "!doc": "Removes the table view proxy node.",
        "!data": {
         "submodule": "aui-scheduler-view-table-dd"
        }
       },
       "renderLasso": {
        "!type": "fn(startPos: [?], endPos: [?])",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableViewDD.html#method_renderLasso",
        "!doc": "Renders the table view lasso at the given `ij` coordinates for the table\nmatrix. It represents the selection for the table view, e.g. `j`\nrepresents a row and `i` a column, for `startPos` being `[0,0]` and\n`endPos` being `[0,3]`, this method will render three nodes representing\nthe selected lasso.",
        "!data": {
         "submodule": "aui-scheduler-view-table-dd"
        }
       }
      }
     },
     "SchedulerTableView": {
      "!type": "fn(config: +config.A.SchedulerTableViewConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html",
      "prototype": {
       "!proto": "aui_scheduler.A.SchedulerView.prototype",
       "buildEventsRow": {
        "!type": "fn(rowStartDate: +datatype_date.Date, rowEndDate: +datatype_date.Date, rowDisplayIndex: number) -> +node.Node",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#method_buildEventsRow",
        "!doc": "Builds a row of events.",
        "!data": {
         "submodule": "aui-scheduler-view-table"
        }
       },
       "buildEventsTable": {
        "!type": "fn(rowStartDate: +datatype_date.Date, rowEndDate: +datatype_date.Date) -> +node.Node",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#method_buildEventsTable",
        "!doc": "Builds a table of events.",
        "!data": {
         "submodule": "aui-scheduler-view-table"
        }
       },
       "buildEventsTitleRow": {
        "!type": "fn(tableNode: +node.Node, rowStartDate: +datatype_date.Date, rowEndDate: +datatype_date.Date) -> +node.Node",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#method_buildEventsTitleRow",
        "!doc": "Builds a row with the title and todays date.",
        "!data": {
         "submodule": "aui-scheduler-view-table"
        }
       },
       "buildGridRowNode": {
        "!type": "fn(rowIndex: number) -> +node.Node",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#method_buildGridRowNode",
        "!doc": "Builds a new row `Node` and appends a table grid `Node`. Returns the\nrow `Node`.",
        "!data": {
         "submodule": "aui-scheduler-view-table"
        }
       },
       "flushViewCache": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#method_flushViewCache",
        "!doc": "Removes all data from `evtDateStack`, `evtRenderedStack` and\n`rowDateTableStack`.",
        "!data": {
         "submodule": "aui-scheduler-view-table"
        }
       },
       "getIntersectEvents": {
        "!type": "fn(date: +datatype_date.Date) -> [?]",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#method_getIntersectEvents",
        "!doc": "Returns the list of all events that intersect with a given date.",
        "!data": {
         "submodule": "aui-scheduler-view-table"
        }
       },
       "getNextDate": {
        "!type": "fn() -> +datatype_date.Date",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#method_getNextDate",
        "!doc": "Returns the value of the date that follows the `SchedulerTableView`s\n        current date.",
        "!data": {
         "submodule": "aui-scheduler-view-table"
        }
       },
       "getPrevDate": {
        "!type": "fn() -> +datatype_date.Date",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#method_getPrevDate",
        "!doc": "Returns the value of the date that preceeds the\n`SchedulerTableView`s current date.",
        "!data": {
         "submodule": "aui-scheduler-view-table"
        }
       },
       "hideEventsOverlay": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#method_hideEventsOverlay",
        "!doc": "Hides this `SchedulerViewTable` events `overlay` component.",
        "!data": {
         "submodule": "aui-scheduler-view-table"
        }
       },
       "loopDates": {
        "!type": "fn(startDate: +datatype_date.Date, endDate: +datatype_date.Date, fn: fn(), incrementBy: string, factor: number)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#method_loopDates",
        "!doc": "Applies a given function to each date between `startDate` and\n`endDate`.",
        "!data": {
         "submodule": "aui-scheduler-view-table"
        }
       },
       "plotEvents": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#method_plotEvents",
        "!doc": "Plots all events in the current view.",
        "!data": {
         "submodule": "aui-scheduler-view-table"
        }
       },
       "syncDaysHeaderUI": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#method_syncDaysHeaderUI",
        "!doc": "Updates the `SchedulerTableView`s `colHeaderDaysNode` to reflect\nany changes made to the instance attributes.",
        "!data": {
         "submodule": "aui-scheduler-view-table"
        }
       },
       "syncGridUI": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#method_syncGridUI",
        "!doc": "Updates the `SchedulerTableView`s column grid by moving styling to\nthe current day cell `Node`.",
        "!data": {
         "submodule": "aui-scheduler-view-table"
        }
       },
       "syncStdContent": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#method_syncStdContent",
        "!doc": "Sync SchedulerView content.",
        "!data": {
         "submodule": "aui-scheduler-view-table"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-scheduler-view-table"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `SchedulerTableView`.",
       "!data": {
        "submodule": "aui-scheduler-view-table"
       }
      },
      "HTML_PARSER": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#property_HTML_PARSER",
       "!doc": "Contains an object hash, defining how attribute values are to be parsed\nfrom markup contained in the widgets bounding box.",
       "!data": {
        "submodule": "aui-scheduler-view-table"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerTableView.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-scheduler-view-table"
       }
      }
     },
     "SchedulerWeekView": {
      "!type": "fn(config: +config.A.SchedulerWeekViewConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerWeekView.html",
      "prototype": {
       "!proto": "aui_scheduler.A.SchedulerDayView.prototype",
       "getAdjustedViewDate": {
        "!type": "fn(date: +datatype_date.Date) -> +datatype_date.Date",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerWeekView.html#method_getAdjustedViewDate",
        "!doc": "Returns a date value of the first day of the week with its time\nadjusted to midnight.",
        "!data": {
         "submodule": "aui-scheduler-view-week"
        }
       },
       "getNextDate": {
        "!type": "fn() -> +datatype_date.Date",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerWeekView.html#method_getNextDate",
        "!doc": "Returns the value of the date that follows the week views current\ndate.",
        "!data": {
         "submodule": "aui-scheduler-view-week"
        }
       },
       "getPrevDate": {
        "!type": "fn() -> +datatype_date.Date",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerWeekView.html#method_getPrevDate",
        "!doc": "Returns the value of the date that preceeds the week views current\ndate.",
        "!data": {
         "submodule": "aui-scheduler-view-week"
        }
       },
       "getToday": {
        "!type": "fn() -> +datatype_date.Date",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerWeekView.html#method_getToday",
        "!doc": "Returns the value of the week views current date.",
        "!data": {
         "submodule": "aui-scheduler-view-week"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerWeekView.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-scheduler-view-week"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerWeekView.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `SchedulerWeekView`.",
       "!data": {
        "submodule": "aui-scheduler-view-week"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SchedulerWeekView.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-scheduler-view-week"
       }
      }
     }
    }
   },
   "aui_search": {
    "!data": {
     "module": "aui-search",
     "submodules": {
      "aui-search-ternary-search-node": {},
      "aui-search-ternary-search-tree": {}
     }
    },
    "A": {
     "TernarySearchNode": {
      "!type": "fn(config: +config.A.TernarySearchNodeConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TernarySearchNode.html",
      "prototype": {
       "!proto": "base.Base.prototype",
       "isEndOfWord": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TernarySearchNode.html#method_isEndOfWord",
        "!doc": "Converts the `word` attribute value to a `Boolean` and ensures a\n`Boolean` type.",
        "!data": {
         "submodule": "aui-search-ternary-search-node"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TernarySearchNode.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-search-ternary-search-node"
       }
      },
      "NS": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TernarySearchNode.html#property_NS",
       "!doc": "Static property provides a string to identify the namespace.",
       "!data": {
        "submodule": "aui-search-ternary-search-node"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TernarySearchNode.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.TernarySearchNode`.",
       "!data": {
        "submodule": "aui-search-ternary-search-node"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TernarySearchNode.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-search-ternary-search-node"
       }
      }
     },
     "TernarySearchTree": {
      "!type": "fn(config: +config.A.TernarySearchTreeConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TernarySearchTree.html",
      "prototype": {
       "!proto": "base.Base.prototype",
       "add": {
        "!type": "fn(word: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TernarySearchTree.html#method_add",
        "!doc": "Adds a word in the tree.",
        "!data": {
         "submodule": "aui-search-ternary-search-tree"
        }
       },
       "contains": {
        "!type": "fn(word: ?) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TernarySearchTree.html#method_contains",
        "!doc": "Checks if the argument is part of the tree.",
        "!data": {
         "submodule": "aui-search-ternary-search-tree"
        }
       },
       "empty": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TernarySearchTree.html#method_empty",
        "!doc": "Set trees root to `null`.",
        "!data": {
         "submodule": "aui-search-ternary-search-tree"
        }
       },
       "patternMatch": {
        "!type": "fn(pattern: ?) -> [?]",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TernarySearchTree.html#method_patternMatch",
        "!doc": "Checks if a pattern match.",
        "!data": {
         "submodule": "aui-search-ternary-search-tree"
        }
       },
       "prefixSearch": {
        "!type": "fn(prefix: ?) -> [?]",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TernarySearchTree.html#method_prefixSearch",
        "!doc": "Searches for a prefix in the tree.",
        "!data": {
         "submodule": "aui-search-ternary-search-tree"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TernarySearchTree.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-search-ternary-search-tree"
       }
      },
      "NS": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TernarySearchTree.html#property_NS",
       "!doc": "Static property provides a string to identify the namespace.",
       "!data": {
        "submodule": "aui-search-ternary-search-tree"
       }
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TernarySearchTree.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends.",
       "!data": {
        "submodule": "aui-search-ternary-search-tree"
       }
      }
     }
    }
   },
   "aui_selector": {
    "!data": {
     "module": "aui-selector"
    },
    "A": {
     "Selector": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Selector.html",
      "!data": {
       "extends": [
        "yui.Selector"
       ]
      },
      "prototype": {
       "button": {
        "!type": "fn(node: ?) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Selector.html#method_button",
        "!doc": "Checks if the node is a button element or contains `type=\"button\"`."
       },
       "checkbox": {
        "!type": "fn() -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Selector.html#method_checkbox",
        "!doc": "Checks if the node contains `type=\"checkbox\"`."
       },
       "checked": {
        "!type": "fn(node: ?) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Selector.html#method_checked",
        "!doc": "Checks if the node is checked or not."
       },
       "disabled": {
        "!type": "fn(node: ?) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Selector.html#method_disabled",
        "!doc": "Checks if the node is disabled or not."
       },
       "empty": {
        "!type": "fn(node: ?) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Selector.html#method_empty",
        "!doc": "Checks if the node is empty or not."
       },
       "enabled": {
        "!type": "fn(node: ?) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Selector.html#method_enabled",
        "!doc": "Checks if the node is enabled or not."
       },
       "file": {
        "!type": "fn() -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Selector.html#method_file",
        "!doc": "Checks if the node contains `type=\"file\"`."
       },
       "header": {
        "!type": "fn(node: ?) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Selector.html#method_header",
        "!doc": "Checks if the node is a header (e.g. `<h1>`, `<h2>`, ...) or not."
       },
       "hidden": {
        "!type": "fn(node: ?) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Selector.html#method_hidden",
        "!doc": "Checks if the node is hidden or not."
       },
       "image": {
        "!type": "fn() -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Selector.html#method_image",
        "!doc": "Checks if the node contains `type=\"image\"`."
       },
       "input": {
        "!type": "fn(node: ?) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Selector.html#method_input",
        "!doc": "Checks if the node is an input (e.g. `<textarea>`, `<input>`, ...) or not."
       },
       "parent": {
        "!type": "fn(node: ?) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Selector.html#method_parent",
        "!doc": "Checks if the node contains a child or not."
       },
       "password": {
        "!type": "fn() -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Selector.html#method_password",
        "!doc": "Checks if the node contains `type=\"password\"`."
       },
       "radio": {
        "!type": "fn() -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Selector.html#method_radio",
        "!doc": "Checks if the node contains `type=\"radio\"`."
       },
       "reset": {
        "!type": "fn() -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Selector.html#method_reset",
        "!doc": "Checks if the node contains `type=\"reset\"`."
       },
       "selected": {
        "!type": "fn(node: ?) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Selector.html#method_selected",
        "!doc": "Checks if the node is selected or not."
       },
       "submit": {
        "!type": "fn() -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Selector.html#method_submit",
        "!doc": "Checks if the node contains `type=\"submit\"`."
       },
       "text": {
        "!type": "fn() -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Selector.html#method_text",
        "!doc": "Checks if the node contains `type=\"text\"`."
       },
       "visible": {
        "!type": "fn(node: ?) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Selector.html#method_visible",
        "!doc": "Checks if the node is visible or not."
       }
      }
     }
    }
   },
   "aui_sortable_layout": {
    "!data": {
     "module": "aui-sortable-layout"
    },
    "A": {
     "SortableLayout": {
      "!type": "fn(config: +config.A.SortableLayoutConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableLayout.html",
      "prototype": {
       "!proto": "base.Base.prototype",
       "addDropNode": {
        "!type": "fn(node: ?, config: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableLayout.html#method_addDropNode",
        "!doc": "Checks if the `Node` isnt a drop node. If not, creates a new Drop\ninstance and adds to drop target group."
       },
       "addDropTarget": {
        "!type": "fn(drop: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableLayout.html#method_addDropTarget",
        "!doc": "Adds a Drop instance to a group."
       },
       "alignPlaceholder": {
        "!type": "fn(region: ?, isTarget: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableLayout.html#method_alignPlaceholder",
        "!doc": "Sync placeholder size and set its X and Y positions."
       },
       "calculateDirections": {
        "!type": "fn(drag: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableLayout.html#method_calculateDirections",
        "!doc": "Calculates drags X and Y directions."
       },
       "calculateQuadrant": {
        "!type": "fn(drag: ?, drop: ?) -> number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableLayout.html#method_calculateQuadrant",
        "!doc": "Calculates quadrant position."
       },
       "getPlaceholderXY": {
        "!type": "fn(region: ?, isTarget: ?) -> [?]",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableLayout.html#method_getPlaceholderXY",
        "!doc": "Gets placeholder X and Y positions."
       },
       "removeDropTarget": {
        "!type": "fn(drop: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableLayout.html#method_removeDropTarget",
        "!doc": "Removes a Drop instance from group."
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableLayout.html#property_NAME",
       "!doc": "Static property provides a string to identify the class."
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableLayout.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.SortableLayout`."
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableLayout.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends."
      }
     }
    }
   },
   "aui_sortable_list": {
    "!data": {
     "module": "aui-sortable-list"
    },
    "A": {
     "SortableList": {
      "!type": "fn(config: +config.A.SortableListConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableList.html",
      "prototype": {
       "!proto": "base.Base.prototype",
       "add": {
        "!type": "fn(node: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableList.html#method_add",
        "!doc": "Creates a drag instance from a single node."
       },
       "addAll": {
        "!type": "fn(nodes: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableList.html#method_addAll",
        "!doc": "Creates drag instances from a list of nodes."
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableList.html#property_NAME",
       "!doc": "Static property provides a string to identify the class."
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableList.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the `A.SortableList`."
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.SortableList.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends."
      }
     }
    }
   },
   "aui_tabview": {
    "!data": {
     "module": "aui-tabview"
    },
    "A": {
     "Tab": {
      "!type": "fn(config: +config.A.TabConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Tab.html",
      "prototype": {
       "!proto": "swfdetect.Tab.prototype"
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Tab.html#property_NAME",
       "!doc": "Static property provides a string to identify the class."
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Tab.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Tab."
      },
      "CSS_PREFIX": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Tab.html#property_CSS_PREFIX",
       "!doc": "Static property provides a string to identify the CSS prefix."
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Tab.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "TabView": {
      "!type": "fn(config: +config.A.TabViewConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TabView.html",
      "prototype": {
       "!proto": "tabview.TabView.prototype",
       "disableTab": {
        "!type": "fn(i: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TabView.html#method_disableTab",
        "!doc": "Disable tab based on its index."
       },
       "enableTab": {
        "!type": "fn(i: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TabView.html#method_enableTab",
        "!doc": "Enable tab based on its index."
       },
       "getActiveTab": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TabView.html#method_getActiveTab",
        "!doc": "Get the tabs."
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TabView.html#property_NAME",
       "!doc": "Static property provides a string to identify the class."
      },
      "CSS_PREFIX": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TabView.html#property_CSS_PREFIX",
       "!doc": "Static property provides a string to identify the CSS prefix."
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TabView.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the TabView."
      },
      "UI_ATTRS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TabView.html#property_UI_ATTRS",
       "!doc": "Static property used to define the UI attributes."
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TabView.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends."
      }
     }
    }
   },
   "aui_text": {
    "!data": {
     "module": "aui-text"
    },
    "A": {
     "TimePickerBase": {
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TimePickerBase.html",
      "!data": {
       "for": "aui_timepicker.A.TimePickerBase"
      },
      "prototype": {
       "match": {
        "!type": "fn(str: string, group: string, flags: string)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TimePickerBase.html#method_match",
        "!doc": "Tests a string against an Unicode pattern. Returns the first match."
       },
       "test": {
        "!type": "fn(str: string, group: string, flags: string)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TimePickerBase.html#method_test",
        "!doc": "Tests a string against an Unicode pattern. Returns true or false."
       }
      }
     }
    }
   },
   "aui_timepicker": {
    "!data": {
     "module": "aui-timepicker"
    },
    "A": {
     "TimePickerBase": {
      "!type": "fn(config: +config.A.TimePickerBaseConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TimePickerBase.html",
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TimePickerBase.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute configuration for the\n`TimePickerBase`."
      },
      "prototype": {
       "clearSelection": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TimePickerBase.html#method_clearSelection",
        "!doc": "Clears selection."
       },
       "getAutoComplete": {
        "!type": "fn(node: +node.Node) -> +Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TimePickerBase.html#method_getAutoComplete",
        "!doc": "Creates and returns a new instance of `AutoComplete`."
       },
       "selectDates": {
        "!type": "fn(dates: +Object)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TimePickerBase.html#method_selectDates",
        "!doc": "Sets selected date."
       },
       "useInputNode": {
        "!type": "fn(node: +node.Node)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TimePickerBase.html#method_useInputNode",
        "!doc": "Syncs `TimePicker` values to input node value."
       }
      }
     }
    }
   },
   "aui_timer": {
    "!data": {
     "module": "aui-timer"
    },
    "A": {
     "Timer": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Timer.html",
      "prototype": {
       "clearInterval": {
        "!type": "fn(id: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Timer.html#method_clearInterval",
        "!doc": "Cancels repeated action which was set up using `setInterval` function."
       },
       "clearTimeout": {
        "!type": "fn(id: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Timer.html#method_clearTimeout",
        "!doc": "Clears the delay set by `setTimeout` function."
       },
       "intervalTime": {
        "!type": "fn(newInterval: ?) -> number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Timer.html#method_intervalTime",
        "!doc": "Defines the fixed time delay between each interval."
       },
       "isRepeatable": {
        "!type": "fn(task: ?) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Timer.html#method_isRepeatable",
        "!doc": "Checks if the task is repeatable or not."
       },
       "setTimeout": {
        "!type": "fn(fn: ?, ms: ?, context: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Timer.html#method_setTimeout",
        "!doc": "Calls a function after a specified delay."
       },
       "setInterval": {
        "!type": "fn(fn: ?, ms: ?, context: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Timer.html#method_setInterval",
        "!doc": "Calls a function repeatedly, with a fixed time delay between each call to\nthat function."
       },
       "register": {
        "!type": "fn(repeats: ?, fn: ?, ms: ?, context: ?, args: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Timer.html#method_register",
        "!doc": "Adds a new task to the timer."
       },
       "run": {
        "!type": "fn(task: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Timer.html#method_run",
        "!doc": "Runs the task function."
       },
       "unregister": {
        "!type": "fn(repeats: ?, id: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Timer.html#method_unregister",
        "!doc": "Removes a task from the timer."
       }
      },
      "A.clearInterval": {
       "!type": "fn(id: ?)",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Timer.html#method_A.clearInterval",
       "!doc": "Cancels repeated action which was set up using `setInterval` function."
      },
      "A.clearTimeout": {
       "!type": "fn(id: ?)",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Timer.html#method_A.clearTimeout",
       "!doc": "Clears the delay set by `setTimeout` function."
      },
      "A.setInterval": {
       "!type": "fn(fn: ?, ms: ?, context: ?)",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Timer.html#method_A.setInterval",
       "!doc": "Calls a function repeatedly, with a fixed time delay between each call to\nthat function."
      },
      "A.setTimeout": {
       "!type": "fn(fn: ?, ms: ?, context: ?)",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Timer.html#method_A.setTimeout",
       "!doc": "Calls a function after a specified delay."
      }
     }
    }
   },
   "aui_toggler": {
    "!data": {
     "module": "aui-toggler"
    },
    "A": {
     "Toggler": {
      "!type": "fn(config: +config.A.TogglerConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toggler.html",
      "prototype": {
       "!proto": "base.Base.prototype",
       "headerEventHandler": {
        "!type": "fn(event: ?, instance: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toggler.html#method_headerEventHandler",
        "!doc": "Handle header events."
       },
       "animate": {
        "!type": "fn(config: ?, fn: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toggler.html#method_animate",
        "!doc": "Expand Toggler with an animation."
       },
       "collapse": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toggler.html#method_collapse",
        "!doc": "Hide Toggler content."
       },
       "expand": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toggler.html#method_expand",
        "!doc": "Show Toggler content."
       },
       "getContentHeight": {
        "!type": "fn() -> number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toggler.html#method_getContentHeight",
        "!doc": "Return the height of content."
       },
       "toggle": {
        "!type": "fn(expand: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toggler.html#method_toggle",
        "!doc": "Show or hide content."
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toggler.html#property_NAME",
       "!doc": "Static property provides a string to identify the class."
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toggler.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Toggler."
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toggler.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends."
      }
     },
     "TogglerDelegate": {
      "!type": "fn(config: +config.A.TogglerDelegateConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TogglerDelegate.html",
      "prototype": {
       "!proto": "base.Base.prototype",
       "collapseAll": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TogglerDelegate.html#method_collapseAll",
        "!doc": "Expand all items."
       },
       "createAll": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TogglerDelegate.html#method_createAll",
        "!doc": "Forces toggler creation on delegated header elements."
       },
       "headerEventHandler": {
        "!type": "fn(event: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TogglerDelegate.html#method_headerEventHandler",
        "!doc": "Handle header events."
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TogglerDelegate.html#property_NAME",
       "!doc": "Static property provides a string to identify the class."
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TogglerDelegate.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Toggler Delegate."
      },
      "EXTENDS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TogglerDelegate.html#property_EXTENDS",
       "!doc": "Static property used to define which component it extends."
      }
     }
    }
   },
   "aui_toolbar": {
    "!data": {
     "module": "aui-toolbar"
    },
    "A": {
     "Toolbar": {
      "!type": "fn(config: +config.A.ToolbarConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toolbar.html",
      "prototype": {
       "!proto": "aui_component.A.Component.prototype",
       "add": {
        "!type": "fn(children: ?, where: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toolbar.html#method_add",
        "!doc": "Insert children on Toolbar."
       },
       "clear": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toolbar.html#method_clear",
        "!doc": "Clear children from Toolbar."
       },
       "getEnclosingWidget": {
        "!type": "fn(seed: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toolbar.html#method_getEnclosingWidget",
        "!doc": "Find the first ancestor node that is a widget bounding box."
       },
       "item": {
        "!type": "fn(index: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toolbar.html#method_item",
        "!doc": "Get a certain item based on its index."
       },
       "remove": {
        "!type": "fn(where: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toolbar.html#method_remove",
        "!doc": "Remove children from Toolbar."
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toolbar.html#property_NAME",
       "!doc": "Static property provides a string to identify the class."
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toolbar.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Toolbar."
      },
      "UI_ATTRS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toolbar.html#property_UI_ATTRS",
       "!doc": "Static property used to define the UI attributes."
      },
      "A.Toolbar.isSupportedWidget": {
       "!type": "fn(o: ?)",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toolbar.html#method_A.Toolbar.isSupportedWidget",
       "!doc": "Check if type is supported."
      },
      "CONTENT_TEMPLATE": {
       "!type": "?",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toolbar.html#property_CONTENT_TEMPLATE",
       "!doc": "Static property provide a content template."
      },
      "TEMPLATES": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Toolbar.html#property_TEMPLATES",
       "!doc": "Static property provide a group of templates."
      }
     },
     "ToolbarRenderer": {
      "!type": "fn(config: +config.A.ToolbarRendererConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ToolbarRenderer.html",
      "TEMPLATES": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ToolbarRenderer.html#property_TEMPLATES",
       "!doc": "Static property provides a set of templates."
      },
      "RENDERER": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ToolbarRenderer.html#property_RENDERER",
       "!doc": "Static property used to define how\nthings are going to be rendered."
      },
      "prototype": {
       "button": {
        "!type": "fn(childRenderHints: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ToolbarRenderer.html#method_button",
        "!doc": "Define how a button should be rendered."
       },
       "group": {
        "!type": "fn(childRenderHints: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ToolbarRenderer.html#method_group",
        "!doc": "Define how a group should be rendered."
       },
       "render": {
        "!type": "fn(children: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ToolbarRenderer.html#method_render",
        "!doc": "Render children in a document fragment."
       },
       "renderNode": {
        "!type": "fn(child: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.ToolbarRenderer.html#method_renderNode",
        "!doc": "Render node."
       }
      }
     }
    }
   },
   "aui_tooltip": {
    "!data": {
     "module": "aui-tooltip"
    },
    "A": {
     "Tooltip": {
      "!type": "fn(config: +config.A.TooltipConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Tooltip.html",
      "!data": {
       "augments": [
        "A.WidgetPosition",
        "A.WidgetStdMod",
        "A.WidgetAutohide",
        "A.WidgetPositionAlign",
        "A.WidgetPositionConstrain",
        "A.WidgetStack"
       ],
       "extends": [
        "aui_widget_cssclass.A.WidgetCssClass",
        "aui_widget_toggle.A.WidgetToggle",
        "aui_widget_toolbars.A.WidgetToolbars",
        "aui_widget_cssclass.A.WidgetPositionAlignSuggestion"
       ]
      },
      "prototype": {
       "!proto": "widget.Widget.prototype"
      },
      "CSS_PREFIX": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Tooltip.html#property_CSS_PREFIX",
       "!doc": "Static property provides a string to identify the CSS prefix."
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Tooltip.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Tooltip."
      },
      "TEMPLATES": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Tooltip.html#property_TEMPLATES",
       "!doc": "Static property provides a set of reusable templates."
      }
     },
     "TooltipDelegate": {
      "!type": "fn(config: +config.A.TooltipDelegateConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TooltipDelegate.html",
      "prototype": {
       "!proto": "base.Base.prototype",
       "_onUserHideInteraction": {
        "!type": "fn(event: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TooltipDelegate.html#method__onUserHideInteraction",
        "!doc": "Show tooltip on user interaction."
       },
       "_onUserShowInteraction": {
        "!type": "fn(event: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TooltipDelegate.html#method__onUserShowInteraction",
        "!doc": "Show tooltip on user interaction."
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TooltipDelegate.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Toggler Delegate."
      }
     }
    }
   },
   "aui_tree": {
    "!data": {
     "module": "aui-tree",
     "submodules": {
      "aui-tree-data": {},
      "aui-tree-io": {},
      "aui-tree-node": {},
      "aui-tree-paginator": {},
      "aui-tree-view": {}
     }
    },
    "A": {
     "TreeData": {
      "!type": "fn(config: +config.A.TreeDataConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html",
      "prototype": {
       "!proto": "base.Base.prototype",
       "getNodeById": {
        "!type": "fn(uid: string) -> +aui_tree.TreeNode",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_getNodeById",
        "!doc": "Get a TreeNode by id.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "isRegistered": {
        "!type": "fn(node: +aui_tree.TreeNode) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_isRegistered",
        "!doc": "Whether the TreeNode is registered on this TreeData.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "updateReferences": {
        "!type": "fn(node: +aui_tree.TreeNode, parentNode: +aui_tree.TreeNode, ownerTree: +TreeView)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_updateReferences",
        "!doc": "Update the references of the passed TreeNode.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "refreshIndex": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_refreshIndex",
        "!doc": "Refresh the index (i.e. re-index all nodes).",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "registerNode": {
        "!type": "fn(node: +aui_tree.TreeNode)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_registerNode",
        "!doc": "Register the passed TreeNode on this TreeData.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "updateIndex": {
        "!type": "fn(index: +Object)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_updateIndex",
        "!doc": "Update the [index](A.TreeData.html#attr_index) attribute value.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "unregisterNode": {
        "!type": "fn(node: +aui_tree.TreeNode)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_unregisterNode",
        "!doc": "Unregister the passed TreeNode from this TreeData.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "collapseAll": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_collapseAll",
        "!doc": "Collapse all children of the TreeData.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "expandAll": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_expandAll",
        "!doc": "Expand all children of the TreeData.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "selectAll": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_selectAll",
        "!doc": "Select all children of the TreeData.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "unselectAll": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_unselectAll",
        "!doc": "Unselect all children of the TreeData.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "eachChildren": {
        "!type": "fn(fn: fn(), deep: bool)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_eachChildren",
        "!doc": "Loop each children and execute the `fn` callback.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "eachParent": {
        "!type": "fn(fn: fn())",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_eachParent",
        "!doc": "Loop each parent node and execute the `fn` callback.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "bubbleEvent": {
        "!type": "fn(eventType: string, args: [?], cancelBubbling: bool, stopActionPropagation: bool)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_bubbleEvent",
        "!doc": "Bubble event to all parent nodes.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "createNode": {
        "!type": "fn(options: +Object) -> +aui_tree.TreeNode",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_createNode",
        "!doc": "Create a TreeNode instance.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "appendChild": {
        "!type": "fn(node: +aui_tree.TreeNode, cancelBubbling: bool)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_appendChild",
        "!doc": "Append a child node to the TreeData.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "item": {
        "!type": "fn(index: number) -> +aui_tree.TreeNode",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_item",
        "!doc": "Get a TreeNode children by index.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "indexOf": {
        "!type": "fn(node: +aui_tree.TreeNode) -> number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_indexOf",
        "!doc": "Index of the passed TreeNode on the\n[children](A.TreeData.html#attr_children) attribute.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "hasChildNodes": {
        "!type": "fn() -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_hasChildNodes",
        "!doc": "Whether the TreeData contains children or not.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "getChildren": {
        "!type": "fn(deep: bool) -> [?]",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_getChildren",
        "!doc": "Get an Array of the children nodes of the current TreeData.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "getEventOutputMap": {
        "!type": "fn(node: +TreeData) -> +Object",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_getEventOutputMap",
        "!doc": "Get an object containing metadata for the custom events.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "removeChild": {
        "!type": "fn(node: +TreeData)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_removeChild",
        "!doc": "Remove the passed `node` from the current TreeData.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "_removeChild": {
        "!type": "fn(node: +TreeData)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method__removeChild",
        "!doc": "Remove the passed `node` from the current TreeData.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "empty": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_empty",
        "!doc": "Delete all children of the current TreeData.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "insert": {
        "!type": "fn(treeNode: +aui_tree.TreeNode, refTreeNode: +aui_tree.TreeNode, where: +aui_tree.TreeNode)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_insert",
        "!doc": "Insert `treeNode` before or after the `refTreeNode`.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "insertAfter": {
        "!type": "fn(treeNode: +aui_tree.TreeNode, refTreeNode: +aui_tree.TreeNode)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_insertAfter",
        "!doc": "Insert `treeNode` after the `refTreeNode`.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "insertBefore": {
        "!type": "fn(treeNode: +aui_tree.TreeNode, refTreeNode: +aui_tree.TreeNode)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_insertBefore",
        "!doc": "Insert `treeNode` before the `refTreeNode`.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       },
       "getNodeByChild": {
        "!type": "fn(child: +node.Node) -> +aui_tree.TreeNode",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#method_getNodeByChild",
        "!doc": "Get a TreeNode instance by a child DOM Node.",
        "!data": {
         "submodule": "aui-tree-data"
        }
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeData.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the TreeData.",
       "!data": {
        "submodule": "aui-tree-data"
       }
      }
     },
     "TreeViewIO": {
      "!type": "fn(config: +config.A.TreeViewIOConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeViewIO.html",
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeViewIO.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the TreeViewIO.",
       "!data": {
        "submodule": "aui-tree-io"
       }
      },
      "prototype": {
       "initIO": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeViewIO.html#method_initIO",
        "!doc": "Initialize the IO transaction setup on the\n[io](A.TreeViewIO.html#attr_io) attribute.",
        "!data": {
         "submodule": "aui-tree-io"
        }
       },
       "ioStartHandler": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeViewIO.html#method_ioStartHandler",
        "!doc": "IO Start handler.",
        "!data": {
         "submodule": "aui-tree-io"
        }
       },
       "ioCompleteHandler": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeViewIO.html#method_ioCompleteHandler",
        "!doc": "IO Complete handler.",
        "!data": {
         "submodule": "aui-tree-io"
        }
       },
       "ioSuccessHandler": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeViewIO.html#method_ioSuccessHandler",
        "!doc": "IO Success handler.",
        "!data": {
         "submodule": "aui-tree-io"
        }
       },
       "ioFailureHandler": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeViewIO.html#method_ioFailureHandler",
        "!doc": "IO Failure handler.",
        "!data": {
         "submodule": "aui-tree-io"
        }
       }
      }
     },
     "TreeNode": {
      "!type": "fn(config: +config.A.TreeNodeConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html",
      "!data": {
       "extends": [
        "aui_tree.A.TreeData"
       ]
      },
      "prototype": {
       "!proto": "base.Base.prototype",
       "render": {
        "!type": "fn(container: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#method_render",
        "!doc": "Render TreeNode.",
        "!data": {
         "submodule": "aui-tree-node"
        }
       },
       "appendChild": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#method_appendChild",
        "!doc": "Append child on TreeNode.",
        "!data": {
         "submodule": "aui-tree-node"
        }
       },
       "collapse": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#method_collapse",
        "!doc": "Collapse the current TreeNode.",
        "!data": {
         "submodule": "aui-tree-node"
        }
       },
       "collapseAll": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#method_collapseAll",
        "!doc": "Collapse all TreeNodes.",
        "!data": {
         "submodule": "aui-tree-node"
        }
       },
       "contains": {
        "!type": "fn(node: +aui_tree.TreeNode) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#method_contains",
        "!doc": "Check if the current TreeNode contains the passed `node`.",
        "!data": {
         "submodule": "aui-tree-node"
        }
       },
       "createNodes": {
        "!type": "fn(nodes: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#method_createNodes",
        "!doc": "Create nodes.",
        "!data": {
         "submodule": "aui-tree-node"
        }
       },
       "expand": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#method_expand",
        "!doc": "Expand the current TreeNode.",
        "!data": {
         "submodule": "aui-tree-node"
        }
       },
       "expandAll": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#method_expandAll",
        "!doc": "Expand all TreeNodes.",
        "!data": {
         "submodule": "aui-tree-node"
        }
       },
       "getDepth": {
        "!type": "fn() -> number",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#method_getDepth",
        "!doc": "Get the depth of the current TreeNode.",
        "!data": {
         "submodule": "aui-tree-node"
        }
       },
       "hasChildNodes": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#method_hasChildNodes",
        "!doc": "Check if it has child nodes.",
        "!data": {
         "submodule": "aui-tree-node"
        }
       },
       "isSelected": {
        "!type": "fn() -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#method_isSelected",
        "!doc": "Whether the current TreeNode is selected or not.",
        "!data": {
         "submodule": "aui-tree-node"
        }
       },
       "isLeaf": {
        "!type": "fn() -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#method_isLeaf",
        "!doc": "Whether the current TreeNode is ancestor of the passed `node` or not.",
        "!data": {
         "submodule": "aui-tree-node"
        }
       },
       "toggle": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#method_toggle",
        "!doc": "Toggle the current TreeNode, `collapsed` or `expanded`.",
        "!data": {
         "submodule": "aui-tree-node"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-tree-node"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNode.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the TreeNode.",
       "!data": {
        "submodule": "aui-tree-node"
       }
      }
     },
     "TreeNodeIO": {
      "!type": "fn(config: +config.A.TreeNodeIOConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeIO.html",
      "!data": {
       "extends": [
        "aui_tree.A.TreeViewPaginator",
        "aui_tree.A.TreeViewIO"
       ]
      },
      "prototype": {
       "!proto": "aui_tree.A.TreeNode.prototype",
       "createNodes": {
        "!type": "fn(nodes: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeIO.html#method_createNodes",
        "!doc": "Create nodes.",
        "!data": {
         "submodule": "aui-tree-node"
        }
       },
       "expand": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeIO.html#method_expand",
        "!doc": "Expand the current TreeNodeIO.",
        "!data": {
         "submodule": "aui-tree-node"
        }
       },
       "_onIOSuccess": {
        "!type": "fn(event: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeIO.html#method__onIOSuccess",
        "!doc": "Fire when IO success.",
        "!data": {
         "submodule": "aui-tree-node"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeIO.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-tree-node"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeIO.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the TreeNode.",
       "!data": {
        "submodule": "aui-tree-node"
       }
      }
     },
     "TreeNodeCheck": {
      "!type": "fn(config: +config.A.TreeNodeCheckConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeCheck.html",
      "prototype": {
       "!proto": "aui_tree.A.TreeNodeIO.prototype",
       "check": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeCheck.html#method_check",
        "!doc": "Check the current TreeNode.",
        "!data": {
         "submodule": "aui-tree-node"
        }
       },
       "uncheck": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeCheck.html#method_uncheck",
        "!doc": "Uncheck the current TreeNode.",
        "!data": {
         "submodule": "aui-tree-node"
        }
       },
       "toggleCheck": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeCheck.html#method_toggleCheck",
        "!doc": "Toggle the check status of the current TreeNode.",
        "!data": {
         "submodule": "aui-tree-node"
        }
       },
       "isChecked": {
        "!type": "fn() -> ?",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeCheck.html#method_isChecked",
        "!doc": "Whether the current TreeNodeCheck is checked.",
        "!data": {
         "submodule": "aui-tree-node"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeCheck.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-tree-node"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeCheck.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the TreeNode.",
       "!data": {
        "submodule": "aui-tree-node"
       }
      }
     },
     "TreeNodeTask": {
      "!type": "fn(config: +config.A.TreeNodeTaskConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeTask.html",
      "prototype": {
       "!proto": "aui_tree.A.TreeNodeCheck.prototype",
       "check": {
        "!type": "fn(originalTarget: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeTask.html#method_check",
        "!doc": "Check the current TreeNodeTask.",
        "!data": {
         "submodule": "aui-tree-node"
        }
       },
       "uncheck": {
        "!type": "fn(originalTarget: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeTask.html#method_uncheck",
        "!doc": "Uncheck the current TreeNodeTask.",
        "!data": {
         "submodule": "aui-tree-node"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeTask.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-tree-node"
       }
      }
     },
     "TreeNodeRadio": {
      "!type": "fn(config: +config.A.TreeNodeRadioConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeRadio.html",
      "prototype": {
       "!proto": "aui_tree.A.TreeNodeTask.prototype",
       "check": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeRadio.html#method_check",
        "!doc": "Check the current TreeNodeRadio.",
        "!data": {
         "submodule": "aui-tree-node"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeRadio.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-tree-node"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeNodeRadio.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the TreeNodeRadio.",
       "!data": {
        "submodule": "aui-tree-node"
       }
      }
     },
     "TreeViewPaginator": {
      "!type": "fn(config: +config.A.TreeViewPaginatorConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeViewPaginator.html",
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeViewPaginator.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the TreeView.",
       "!data": {
        "submodule": "aui-tree-paginator"
       }
      }
     },
     "TreeView": {
      "!type": "fn(config: +config.A.TreeViewConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeView.html",
      "!data": {
       "extends": [
        "aui_tree.A.TreeData",
        "aui_tree.A.TreeViewPaginator",
        "aui_tree.A.TreeViewIO"
       ]
      },
      "prototype": {
       "!proto": "aui_component.A.Component.prototype",
       "createNodes": {
        "!type": "fn(nodes: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeView.html#method_createNodes",
        "!doc": "Create Nodes.",
        "!data": {
         "submodule": "aui-tree-view"
        }
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeView.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-tree-view"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeView.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the TreeView.",
       "!data": {
        "submodule": "aui-tree-view"
       }
      }
     },
     "TreeViewDD": {
      "!type": "fn(config: +config.A.TreeViewDDConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeViewDD.html",
      "prototype": {
       "!proto": "aui_tree.A.TreeView.prototype"
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeViewDD.html#property_NAME",
       "!doc": "Static property provides a string to identify the class.",
       "!data": {
        "submodule": "aui-tree-view"
       }
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.TreeViewDD.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the TreeViewDD.",
       "!data": {
        "submodule": "aui-tree-view"
       }
      }
     }
    },
    "TreeNode": {
     "!type": "fn()",
     "!url": "http://alloyui.com/versions/2.0.x/api/classes/TreeNode.html",
     "prototype": {
      "nodeTypes": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/TreeNode.html#property_nodeTypes",
       "!doc": "TreeNode types hash map.\n\n```\nA.TreeNode.nodeTypes = {\n radio: A.TreeNodeRadio,\n task: A.TreeNodeTask,\n check: A.TreeNodeCheck,\n node: A.TreeNode,\n io: A.TreeNodeIO\n};\n```",
       "!data": {
        "submodule": "aui-tree-node"
       }
      }
     }
    }
   },
   "aui_url": {
    "!data": {
     "module": "aui-url"
    },
    "A": {
     "Url": {
      "!type": "fn(config: +config.A.UrlConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html",
      "prototype": {
       "addParameter": {
        "!type": "fn(key: ?, values: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_addParameter",
        "!doc": "Adds a single parameter in the URL."
       },
       "addParameters": {
        "!type": "fn(parameters: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_addParameters",
        "!doc": "Adds a list of parameters in the URL."
       },
       "hasParameter": {
        "!type": "fn(key: ?) -> bool",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_hasParameter",
        "!doc": "Checks if the URL has a parameter."
       },
       "getParameter": {
        "!type": "fn(key: ?) -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_getParameter",
        "!doc": "Gets a single parameter."
       },
       "getParameters": {
        "!type": "fn() -> [?]",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_getParameters",
        "!doc": "Gets a list of parameters."
       },
       "getAnchor": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_getAnchor",
        "!doc": "Gets the anchor."
       },
       "getAuthority": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_getAuthority",
        "!doc": "Gets the authority."
       },
       "getDirectory": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_getDirectory",
        "!doc": "Gets the directory."
       },
       "getFile": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_getFile",
        "!doc": "Gets the file."
       },
       "getHost": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_getHost",
        "!doc": "Gets the host."
       },
       "getPassword": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_getPassword",
        "!doc": "Gets the password."
       },
       "getPath": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_getPath",
        "!doc": "Gets the path."
       },
       "getPort": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_getPort",
        "!doc": "Gets the port."
       },
       "getProtocol": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_getProtocol",
        "!doc": "Gets the protocol."
       },
       "getQuery": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_getQuery",
        "!doc": "Gets the query."
       },
       "getRelative": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_getRelative",
        "!doc": "Gets the relative."
       },
       "getSource": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_getSource",
        "!doc": "Gets the source."
       },
       "getUser": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_getUser",
        "!doc": "Gets the user."
       },
       "getUserInfo": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_getUserInfo",
        "!doc": "Gets the user info."
       },
       "removeParameter": {
        "!type": "fn(key: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_removeParameter",
        "!doc": "Removes a single parameter from the parameters list."
       },
       "removeParameters": {
        "!type": "fn(parameters: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_removeParameters",
        "!doc": "Removes a list of parameters from the parameters list."
       },
       "setParameter": {
        "!type": "fn(key: ?, opt_values: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_setParameter",
        "!doc": "Sets a single parameter."
       },
       "setParameters": {
        "!type": "fn(parameters: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_setParameters",
        "!doc": "Sets a list of parameters."
       },
       "setAnchor": {
        "!type": "fn(val: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_setAnchor",
        "!doc": "Sets the anchor."
       },
       "setAuthority": {
        "!type": "fn(val: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_setAuthority",
        "!doc": "Sets the authority."
       },
       "setDirectory": {
        "!type": "fn(val: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_setDirectory",
        "!doc": "Sets the directory."
       },
       "setFile": {
        "!type": "fn(val: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_setFile",
        "!doc": "Sets the file."
       },
       "setHost": {
        "!type": "fn(val: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_setHost",
        "!doc": "Sets the host."
       },
       "setPassword": {
        "!type": "fn(val: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_setPassword",
        "!doc": "Sets the password."
       },
       "setPath": {
        "!type": "fn(val: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_setPath",
        "!doc": "Sets the path."
       },
       "setPort": {
        "!type": "fn(val: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_setPort",
        "!doc": "Sets the port."
       },
       "setProtocol": {
        "!type": "fn(val: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_setProtocol",
        "!doc": "Sets the protocol."
       },
       "setRelative": {
        "!type": "fn(val: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_setRelative",
        "!doc": "Sets the relative."
       },
       "setSource": {
        "!type": "fn(val: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_setSource",
        "!doc": "Sets the source."
       },
       "setUser": {
        "!type": "fn(val: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_setUser",
        "!doc": "Sets the user."
       },
       "setUserInfo": {
        "!type": "fn(val: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_setUserInfo",
        "!doc": "Sets the user info."
       },
       "toString": {
        "!type": "fn() -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Url.html#method_toString",
        "!doc": "Generates the entire URL based on each attribute."
       }
      }
     }
    }
   },
   "aui_video": {
    "!data": {
     "module": "aui-video"
    },
    "A": {
     "Video": {
      "!type": "fn(config: +config.A.VideoConfig)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Video.html",
      "prototype": {
       "!proto": "aui_component.A.Component.prototype",
       "load": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Video.html#method_load",
        "!doc": "Load video track."
       },
       "pause": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Video.html#method_pause",
        "!doc": "Pause video track."
       },
       "play": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Video.html#method_play",
        "!doc": "Play video track."
       }
      },
      "NAME": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Video.html#property_NAME",
       "!doc": "Static property provides a string to identify the class."
      },
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Video.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Video."
      },
      "BIND_UI_ATTRS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Video.html#property_BIND_UI_ATTRS",
       "!doc": "Static property used to define the attributes\nfor the bindUI lifecycle phase."
      },
      "SYNC_UI_ATTRS": {
       "!type": "[?]",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.Video.html#property_SYNC_UI_ATTRS",
       "!doc": "Static property used to define the attributes\nfor the syncUI lifecycle phase."
      }
     }
    }
   },
   "aui_widget_cssclass": {
    "!data": {
     "module": "aui-widget-cssclass"
    },
    "A": {
     "WidgetCssClass": {
      "!type": "fn(The: +Object)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetCssClass.html",
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetCssClass.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration for the Component."
      },
      "CSS_CLASS_CONTENT_SUFFIX": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetCssClass.html#property_CSS_CLASS_CONTENT_SUFFIX",
       "!doc": "Static property used to define the default suffix for cssClass attribute\nvalue applied on `contentBox` node."
      }
     },
     "WidgetPositionAlignSuggestion": {
      "!type": "fn(The: +Object)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetPositionAlignSuggestion.html",
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetPositionAlignSuggestion.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration."
      },
      "prototype": {
       "POSITION_ALIGN_SUGGESTION": {
        "!type": "?",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetPositionAlignSuggestion.html#property_POSITION_ALIGN_SUGGESTION",
        "!doc": "Property defining the align points based on the suggested `position`."
       },
       "initializer": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetPositionAlignSuggestion.html#method_initializer",
        "!doc": "Construction logic executed during WidgetPositionAlignSuggestion\ninstantiation. Lifecycle."
       }
      }
     }
    }
   },
   "aui_widget_toggle": {
    "!data": {
     "module": "aui-widget-toggle"
    },
    "A": {
     "WidgetToggle": {
      "!type": "fn(The: +Object)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetToggle.html",
      "prototype": {
       "toggle": {
        "!type": "fn(visible: bool)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetToggle.html#method_toggle",
        "!doc": "Toggles widget visibility."
       }
      }
     }
    }
   },
   "aui_widget_toolbars": {
    "!data": {
     "module": "aui-widget-toolbars"
    },
    "A": {
     "WidgetToolbars": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetToolbars.html",
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetToolbars.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute configuration."
      },
      "prototype": {
       "addToolbar": {
        "!type": "fn(toolbar: ?, section: ?) -> +aui_toolbar.A.Toolbar",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetToolbars.html#method_addToolbar",
        "!doc": "Includes a `A.Toolbar` instance into the widget."
       },
       "getToolbar": {
        "!type": "fn(section: ?) -> +aui_toolbar.A.Toolbar",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetToolbars.html#method_getToolbar",
        "!doc": "Gets the `A.Toolbar` instance based on its section."
       },
       "getToolbarSection": {
        "!type": "fn(section: ?) -> string",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetToolbars.html#method_getToolbarSection",
        "!doc": "Gets the toolbars section. If no argument is passed, returns the\n`StdMod.FOOTER`."
       },
       "removeToolbar": {
        "!type": "fn(section: ?)",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetToolbars.html#method_removeToolbar",
        "!doc": "Destroys the `A.Toolbar` instance based on its section."
       }
      }
     }
    }
   },
   "aui_widget_transition": {
    "!data": {
     "module": "aui-widget-transition"
    },
    "A": {
     "WidgetTransition": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetTransition.html",
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetTransition.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute configuration."
      }
     },
     "WidgetTrigger": {
      "!type": "fn(The: +Object)",
      "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetTrigger.html",
      "ATTRS": {
       "!type": "+Object",
       "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetTrigger.html#property_ATTRS",
       "!doc": "Static property used to define the default attribute\nconfiguration."
      },
      "prototype": {
       "initializer": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/2.0.x/api/classes/A.WidgetTrigger.html#method_initializer",
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