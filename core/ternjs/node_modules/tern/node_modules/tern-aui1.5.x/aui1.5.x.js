(function(mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
        return mod(require("tern/lib/infer"), require("tern/lib/tern"));
    if (typeof define == "function" && define.amd) // AMD
        return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
    mod(tern, tern);
})(function(infer, tern) {
    "use strict";
    
  tern.registerPlugin("aui1.5.x", function(server, options) {
    server._aui = {};
    return { defs : defs };
  });
    
  var defs = {
 "!name": "aui1.5.x",
 "!define": {
  "config": {
   "AutoCompleteConfig": {
    "!proto": "config.ComponentConfig",
    "alwaysShowContainer": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#attribute_alwaysShowContainer",
     "!doc": "Always show the results container, instead of only showing when the \nuser is requesting them."
    },
    "autoHighlight": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#attribute_autoHighlight",
     "!doc": "Automatically highlight the first item in the list when the results are\nmade visible."
    },
    "applyLocalFilter": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#attribute_applyLocalFilter",
     "!doc": "If set to true, the <a href=\"AutoComplete.html#method_filterResults\">filterResults</a> \nmethod will be run on the response from the data source."
    },
    "button": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#attribute_button",
     "!doc": "To use a button"
    },
    "dataSource": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#attribute_dataSource",
     "!doc": "The data source that results will be read from. This can either be\nan existing <a href=\"DataSource.html\">DataSource</a> object, or it can be a\nvalue that would be passed to <a href=\"DataSource.html\">DataSource</a>."
    },
    "dataSourceType": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#attribute_dataSourceType",
     "!doc": "The type of the data source passed into <a href=\"AutoComplete.html#config_dataSource\">dataSource</a>.\nThis can be used to explicitly declare what kind of <a href=\"DataSource.html\">DataSource</a> object will\nbe created."
    },
    "delimChar": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#attribute_delimChar",
     "!doc": "The character used to indicate the beginning or ending of a new value. Most commonly used\nis a \",\"."
    },
    "forceSelection": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#attribute_forceSelection",
     "!doc": "If <a href=\"AutoComplete.html#config_typeAhead\">typeAhead</a> is true, this\nwill clear a selection when the overlay closes unless a user explicitly selects an item."
    },
    "input": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#attribute_input",
     "!doc": "The input field which will recieve the users input."
    },
    "matchKey": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#attribute_matchKey",
     "!doc": "The key or numeric index in the schema to match the result against."
    },
    "maxResultsDisplayed": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#attribute_maxResultsDisplayed",
     "!doc": "The maximum number of results to display."
    },
    "minQueryLength": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#attribute_minQueryLength",
     "!doc": "The minimum number of characters required to query the data source."
    },
    "queryDelay": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#attribute_queryDelay",
     "!doc": "The amount of time in seconds to delay before submitting the query."
    },
    "queryInterval": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#attribute_queryInterval",
     "!doc": "When IME usage is detected or interval detection is explicitly enabled,\nAutoComplete will detect the input value at the given interval and send a\nquery if the value has changed."
    },
    "queryMatchCase": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#attribute_queryMatchCase",
     "!doc": "When <a href=\"AutoComplete.html#config_applyLocalFilter\">applyLocalFilter</a> is true,\nsetting this to true will match only results with the same case."
    },
    "queryMatchContains": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#attribute_queryMatchContains",
     "!doc": "When <a href=\"AutoComplete.html#config_applyLocalFilter\">applyLocalFilter</a> is true,\nsetting this to true will match results which contain the query anywhere in the text,\ninstead of just matching just items that start with the query."
    },
    "queryQuestionMark": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#attribute_queryQuestionMark",
     "!doc": "For IO DataSources, AutoComplete will automatically insert a \"?\" between the server URI and \nthe encoded query string. To prevent this behavior, you can\nset this value to false. If you need to customize this even further, you\ncan override the <a href=\"AutoComplete.html#method_generateRequest\">generateRequest</a> method."
    },
    "schema": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#attribute_schema",
     "!doc": "A valid configuration object for any of <a href=\"module_datasource.html\">DataSource</a> schema plugins."
    },
    "schemaType": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#attribute_schemaType",
     "!doc": "A valid type of <a href=\"module_datasource.html\">DataSource</a> schema plugin, such as array, json, xml, etc."
    },
    "suppressInputUpdate": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#attribute_suppressInputUpdate",
     "!doc": "Whether or not the input field should be updated with selections."
    },
    "typeAhead": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#attribute_typeAhead",
     "!doc": "If <a href=\"AutoComplete.html#config_autoHighlight\">autoHighlight</a> is enabled, whether or not the \ninput field should be automatically updated with the first result as the user types, \nautomatically selecting the portion of the text the user has not typed yet."
    },
    "typeAheadDelay": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#attribute_typeAheadDelay",
     "!doc": "If <a href=\"AutoComplete.html#config_typeAhead\">typeAhead</a> is true, number of seconds \nto delay before updating the input. In order to prevent certain race conditions, this value must\nalways be greater than the <a href=\"AutoComplete.html#config_queryDelay\">queryDelay</a>."
    },
    "uniqueName": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#attribute_uniqueName",
     "!doc": "The unique ID of the input element."
    }
   },
   "ButtonItemConfig": {
    "!proto": "config.ComponentConfig",
    "activeState": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ButtonItem.html#attribute_activeState",
     "!doc": "Whether to track the active state of the button."
    },
    "classNames": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ButtonItem.html#attribute_classNames",
     "!doc": "An object map of the CSS class names to use for the different interaction states."
    },
    "defaultState": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ButtonItem.html#attribute_defaultState",
     "!doc": "Whether to apply the default interaction state to the button"
    },
    "handler": {
     "!type": "fn()",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ButtonItem.html#attribute_handler",
     "!doc": "An event callback to handle when a user interacts with the button.\nThis can either be a function that will be attached on click, or\nan object map that accepts the following keys:\n<code>{fn: // The function to execute\ncontext: // The context to execute the function in\ntype: // The type of event to listen for (defaults to \"click\")\n}</code>"
    },
    "hoverState": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ButtonItem.html#attribute_hoverState",
     "!doc": "An id that can be used to identify a button."
    },
    "icon": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ButtonItem.html#attribute_icon",
     "!doc": "The icon to use inside of the button. Possible values are:"
    },
    "iconNode": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ButtonItem.html#attribute_iconNode",
     "!doc": "DOM Node to display the icon of the ButtonItem. If not\nspecified try to query using HTML_PARSER an element inside\nboundingBox which matches <code>aui-button-icon</code>."
    },
    "label": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ButtonItem.html#attribute_label",
     "!doc": "Text to use inside of the button."
    },
    "labelNode": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ButtonItem.html#attribute_labelNode",
     "!doc": "DOM Node to display the text of the ButtonItem. If not\nspecified try to query using HTML_PARSER an element inside\nboundingBox which matches <code>aui-button-label</code>."
    },
    "title": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ButtonItem.html#attribute_title",
     "!doc": "Text to use as the title attribute of the button."
    },
    "type": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ButtonItem.html#attribute_type",
     "!doc": "Button type."
    }
   },
   "CalendarConfig": {
    "!proto": "config.CalendarBaseConfig",
    "allowNone": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#attribute_allowNone",
     "!doc": "Wheather displays the \"none\" link on the Calendar footer."
    },
    "blankDays": {
     "!type": "+dom.NodeList",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#attribute_blankDays",
     "!doc": "NodeList containing all the DOM elements for\neach blank day. If not specified try to query using HTML_PARSER\nan element inside contentBox which matches\n<code>aui-calendar-day-blank</code>."
    },
    "currentDay": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#attribute_currentDay",
     "!doc": "Current day number."
    },
    "currentMonth": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#attribute_currentMonth",
     "!doc": "Current month number."
    },
    "currentYear": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#attribute_currentYear",
     "!doc": "Current year number."
    },
    "dateFormat": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#attribute_dateFormat",
     "!doc": "The default date format string which can be overriden for\nlocalization support. The format must be valid according to\n<a href=\"DataType.Date.html\">A.DataType.Date.format</a>."
    },
    "dates": {
     "!type": "+yui.Array",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#attribute_dates",
     "!doc": "Dates which the calendar will show as selected by default."
    },
    "firstDayOfWeek": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#attribute_firstDayOfWeek",
     "!doc": "First day of the week: Sunday is 0, Monday is 1."
    },
    "headerContentNode": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#attribute_headerContentNode",
     "!doc": "DOM node reference to be the header of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-hd</code>."
    },
    "headerTitleNode": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#attribute_headerTitleNode",
     "!doc": "DOM node reference to be the title of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-title</code>."
    },
    "iconNextNode": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#attribute_iconNextNode",
     "!doc": "DOM node reference to be the icon next of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-prev</code>."
    },
    "iconPrevNode": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#attribute_iconPrevNode",
     "!doc": "DOM node reference to be the icon prev of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-prev</code>."
    },
    "maxDate": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#attribute_maxDate",
     "!doc": "Maximum allowable date. Values supported by the Date\nconstructor are supported."
    },
    "minDate": {
     "!type": "+Date",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#attribute_minDate",
     "!doc": "Minimum allowable date. Values supported by the Date\nconstructor are supported."
    },
    "monthDays": {
     "!type": "+dom.NodeList",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#attribute_monthDays",
     "!doc": "NodeList reference containing the days of the month of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-day</code>."
    },
    "monthDaysNode": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#attribute_monthDaysNode",
     "!doc": "DOM node reference which contains all month days nodes of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-monthdays</code>."
    },
    "noneLinkNode": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#attribute_noneLinkNode",
     "!doc": "DOM node reference to be the \"none\" link of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-title</code>."
    },
    "paddingDaysEnd": {
     "!type": "+dom.NodeList",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#attribute_paddingDaysEnd",
     "!doc": "NodeList containing all the DOM elements for\neach blank day. If not specified try to query using HTML_PARSER\nan element inside contentBox which matches\n<code>aui-calendar-day-blank</code>."
    },
    "paddingDaysStart": {
     "!type": "+dom.NodeList",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#attribute_paddingDaysStart",
     "!doc": "NodeList containing all the DOM elements for\neach blank day. If not specified try to query using HTML_PARSER\nan element inside contentBox which matches\n<code>aui-calendar-day-blank</code>."
    },
    "selectMultipleDates": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#attribute_selectMultipleDates",
     "!doc": "Wether accepts to select multiple dates."
    },
    "setValue": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#attribute_setValue",
     "!doc": "If true set the selected date with the correct\n<a href=\"Calendar.html#config_dateFormat\">dateFormat</a> to the\nvalue of the input field which is hosting the Calendar."
    },
    "showOtherMonth": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#attribute_showOtherMonth",
     "!doc": "Wheather displays the days for the other months."
    },
    "showToday": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#attribute_showToday",
     "!doc": "Wheather displays the \"today\" link on the Calendar footer."
    },
    "todayLinkNode": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#attribute_todayLinkNode",
     "!doc": "DOM node reference to be the \"today\" link of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-title</code>."
    },
    "weekDays": {
     "!type": "+dom.NodeList",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#attribute_weekDays",
     "!doc": "NodeList reference containing the days of the week of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-week</code>."
    },
    "weekDaysNode": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#attribute_weekDaysNode",
     "!doc": "DOM node reference which contains all week days nodes of the Calendar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-calendar-weekdays</code>."
    }
   },
   "CharCounterConfig": {
    "!proto": "config.BaseConfig",
    "counter": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/CharCounter.html#attribute_counter",
     "!doc": "Node or Selector to display the information of the counter."
    },
    "maxLength": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/CharCounter.html#attribute_maxLength",
     "!doc": "Max number of characters the <a\nhref=\"CharCounter.html#config_input\">input</a> can have."
    },
    "input": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/CharCounter.html#attribute_input",
     "!doc": "Node or Selector for the input field. Required."
    }
   },
   "ComponentConfig": {
    "!proto": "config.WidgetConfig",
    "useARIA": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Component.html#attribute_useARIA",
     "!doc": "Boolean indicating if use of the WAI-ARIA Roles and States should be\nenabled for the Widget."
    },
    "cssClass": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Component.html#attribute_cssClass",
     "!doc": "CSS class to be automatically added to the <code>boundingBox</code>."
    },
    "hideClass": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Component.html#attribute_hideClass",
     "!doc": "css class added to hide the <code>boundingBox</code> when\n<a href=\"Component.html#config_visible\">visible</a> is set to\n<code>false</code>."
    },
    "render": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Component.html#attribute_render",
     "!doc": "If <code>true</code> the render phase will be autimatically invoked\npreventing the <code>.render()</code> manual call."
    }
   },
   "CellEditorSupportConfig": {
    "!proto": "config.BaseConfig",
    "dataSource": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/CellEditorSupport.html#attribute_dataSource",
     "!doc": "The data source that results will be read from. This can either be\nan existing <a href=\"DataSource.html\">DataSource</a> object, or it can be a\nvalue that would be passed to <a href=\"DataSource.html\">DataSource</a>."
    },
    "dataSourceType": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/CellEditorSupport.html#attribute_dataSourceType",
     "!doc": "The type of the data source passed into <a href=\"AutoComplete.html#config_dataSource\">dataSource</a>.\nThis can be used to explicitly declare what kind of <a href=\"DataSource.html\">DataSource</a> object will\nbe created."
    },
    "schema": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/CellEditorSupport.html#attribute_schema",
     "!doc": "A valid configuration object for any of <a href=\"module_datasource.html\">DataSource</a> schema plugins."
    },
    "schemaType": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/CellEditorSupport.html#attribute_schemaType",
     "!doc": "A valid type of <a href=\"module_datasource.html\">DataSource</a> schema plugin, such as array, json, xml, etc."
    },
    "button": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/CellEditorSupport.html#attribute_button",
     "!doc": "To use a button"
    },
    "delimChar": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/CellEditorSupport.html#attribute_delimChar",
     "!doc": "The character used to indicate the beginning or ending of a new value. Most commonly used\nis a \",\"."
    },
    "forceSelection": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/CellEditorSupport.html#attribute_forceSelection",
     "!doc": "If <a href=\"AutoComplete.html#config_typeAhead\">typeAhead</a> is true, this\nwill clear a selection when the overlay closes unless a user explicitly selects an item."
    },
    "input": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/CellEditorSupport.html#attribute_input",
     "!doc": "The input field which will recieve the users input."
    },
    "matchKey": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/CellEditorSupport.html#attribute_matchKey",
     "!doc": "The key or numeric index in the schema to match the result against."
    },
    "minQueryLength": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/CellEditorSupport.html#attribute_minQueryLength",
     "!doc": "The minimum number of characters required to query the data source."
    },
    "queryDelay": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/CellEditorSupport.html#attribute_queryDelay",
     "!doc": "The amount of time in seconds to delay before submitting the query."
    },
    "queryInterval": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/CellEditorSupport.html#attribute_queryInterval",
     "!doc": "When IME usage is detected or interval detection is explicitly enabled,\nAutoComplete will detect the input value at the given interval and send a\nquery if the value has changed."
    },
    "queryMatchCase": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/CellEditorSupport.html#attribute_queryMatchCase",
     "!doc": "When <a href=\"AutoComplete.html#config_applyLocalFilter\">applyLocalFilter</a> is true,\nsetting this to true will match only results with the same case."
    },
    "queryMatchContains": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/CellEditorSupport.html#attribute_queryMatchContains",
     "!doc": "When <a href=\"AutoComplete.html#config_applyLocalFilter\">applyLocalFilter</a> is true,\nsetting this to true will match results which contain the query anywhere in the text,\ninstead of just matching just items that start with the query."
    },
    "queryQuestionMark": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/CellEditorSupport.html#attribute_queryQuestionMark",
     "!doc": "For IO DataSources, AutoComplete will automatically insert a \"?\" between the server URI and \nthe encoded query string. To prevent this behavior, you can\nset this value to false. If you need to customize this even further, you\ncan override the <a href=\"AutoComplete.html#method_generateRequest\">generateRequest</a> method."
    },
    "suppressInputUpdate": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/CellEditorSupport.html#attribute_suppressInputUpdate",
     "!doc": "Whether or not the input field should be updated with selections."
    },
    "typeAhead": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/CellEditorSupport.html#attribute_typeAhead",
     "!doc": "If <a href=\"AutoComplete.html#config_autoHighlight\">autoHighlight</a> is enabled, whether or not the \ninput field should be automatically updated with the first result as the user types, \nautomatically selecting the portion of the text the user has not typed yet."
    },
    "typeAheadDelay": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/CellEditorSupport.html#attribute_typeAheadDelay",
     "!doc": "If <a href=\"AutoComplete.html#config_typeAhead\">typeAhead</a> is true, number of seconds \nto delay before updating the input. In order to prevent certain race conditions, this value must\nalways be greater than the <a href=\"AutoComplete.html#config_queryDelay\">queryDelay</a>."
    },
    "uniqueName": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/CellEditorSupport.html#attribute_uniqueName",
     "!doc": "The unique ID of the input element."
    }
   },
   "DatepickerManagerConfig": {
    "!proto": "config.OverlayManagerConfig",
    "calendar": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatepickerManager.html#attribute_calendar",
     "!doc": "<a href=\"Calendar.html\">Calendar</a> configuration Object.</a>"
    },
    "formatter": {
     "!type": "fn()",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatepickerManager.html#attribute_formatter",
     "!doc": "Function to format the array of the selected dates before set the\nvalue of the input."
    },
    "setValue": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatepickerManager.html#attribute_setValue",
     "!doc": "If true set the selected date with the correct\n<a href=\"Calendar.html#config_dateFormat\">dateFormat</a> to the\nvalue of the input field which is hosting the Calendar."
    },
    "stack": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatepickerManager.html#attribute_stack",
     "!doc": "If true is able to do stacking with another overlays."
    },
    "zIndexBase": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatepickerManager.html#attribute_zIndexBase",
     "!doc": "ZIndex default value passed to the\n<a href=\"OverlayManager.html#config_zIndexBase\">zIndexBase</a> of\n<a href=\"OverlayManager.html\">OverlayManager</a>."
    }
   },
   "DatePickerSelectConfig": {
    "!proto": "config.ComponentConfig",
    "appendOrder": {
     "!type": "+yui.Array",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatePickerSelect.html#attribute_appendOrder",
     "!doc": "The order the selects elements are appended to the\n<a href=\"DatePickerSelect.html#config_srcNode\">srcNode</a>."
    },
    "buttonNode": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatePickerSelect.html#attribute_buttonNode",
     "!doc": "DOM Node to display the button of the DatePickerSelect. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-buttonitem</code>."
    },
    "calendar": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatePickerSelect.html#attribute_calendar",
     "!doc": "<a href=\"Calendar.html\">Calendar</a> configuration Object.</a>"
    },
    "dayNode": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatePickerSelect.html#attribute_dayNode",
     "!doc": "DOM Node to display the day of the DatePickerSelect. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-datepicker-year</code>."
    },
    "dayNodeName": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatePickerSelect.html#attribute_dayNodeName",
     "!doc": "Name attribute used on the\n<a href=\"DatePickerSelect.html#config_dayNode\">dayNode</a>."
    },
    "monthNode": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatePickerSelect.html#attribute_monthNode",
     "!doc": "DOM Node to display the month of the DatePickerSelect. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-datepicker-year</code>."
    },
    "monthNodeName": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatePickerSelect.html#attribute_monthNodeName",
     "!doc": "Name attribute used on the\n<a href=\"DatePickerSelect.html#config_monthNode\">monthNode</a>."
    },
    "nullableDay": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatePickerSelect.html#attribute_nullableDay",
     "!doc": "If true the select element for the day will be nullable"
    },
    "nullableMonth": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatePickerSelect.html#attribute_nullableMonth",
     "!doc": "If true the select element for the month will be nullable"
    },
    "nullableYear": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatePickerSelect.html#attribute_nullableYear",
     "!doc": "If true the select element for the year will be nullable"
    },
    "populateDay": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatePickerSelect.html#attribute_populateDay",
     "!doc": "If true the select element for the days will be automatic\npopulated."
    },
    "populateMonth": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatePickerSelect.html#attribute_populateMonth",
     "!doc": "If true the select element for the month will be automatic\npopulated."
    },
    "populateYear": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatePickerSelect.html#attribute_populateYear",
     "!doc": "If true the select element for the year will be automatic\npopulated."
    },
    "selectWrapperNode": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatePickerSelect.html#attribute_selectWrapperNode",
     "!doc": "DOM Node to display the selects of the DatePickerSelect. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-datepicker-select-wrapper</code>."
    },
    "trigger": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatePickerSelect.html#attribute_trigger",
     "!doc": "Trigger element to open the calendar. Inherited from\n<a href=\"OverlayContext.html#config_trigger\">OverlayContext</a>."
    },
    "yearNode": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatePickerSelect.html#attribute_yearNode",
     "!doc": "DOM Node to display the year of the DatePickerSelect. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-datepicker-year</code>."
    },
    "yearNodeName": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatePickerSelect.html#attribute_yearNodeName",
     "!doc": "Name attribute used on the\n<a href=\"DatePickerSelect.html#config_yearNode\">yearNode</a>."
    },
    "yearRange": {
     "!type": "+yui.Array",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatePickerSelect.html#attribute_yearRange",
     "!doc": "Year range to be displayed on the year select element. By default\nit displays from -10 to +10 years from the current year."
    }
   },
   "DialogConfig": {
    "!proto": "config.PanelConfig",
    "bodyContent": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Dialog.html#attribute_bodyContent",
     "!doc": "See <a href=\"WidgetStdMod.html#config_bodyContent\">WidgetStdMod bodyContent</a>."
    },
    "buttons": {
     "!type": "+yui.Array",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Dialog.html#attribute_buttons",
     "!doc": "<p>Array of object literals, each containing a set of properties\ndefining a button to be appended into the Dialogs footer. Each\nbutton object in the buttons array can have two properties:</p>\n\n<dl>\n   <dt>text:</dt>\n   <dd>\n       The text that will display on the face of the button. The text can include\n       HTML, as long as it is compliant with HTML Button specifications.\n   </dd>\n   <dt>handler:</dt>\n   <dd>\n       A reference to a function that should fire when the button is clicked.\n       (In this case scope of this function is always its Dialog instance.)\n   </dd>\n</dl>"
    },
    "close": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Dialog.html#attribute_close",
     "!doc": "If <code>true</code> the close icon will be displayed on the\nDialog header."
    },
    "constrain2view": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Dialog.html#attribute_constrain2view",
     "!doc": "Will attempt to constrain the dialog to the boundaries of the\nviewport region."
    },
    "destroyOnClose": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Dialog.html#attribute_destroyOnClose",
     "!doc": "Invoke the <a href=\"Dialog.html#method_destroy\">destroy</a>\nmethod when the dialog is closed (i.e., remove the Dialog\n<code>boundingBox</code> from the body, purge events etc)."
    },
    "draggable": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Dialog.html#attribute_draggable",
     "!doc": "Boolean specifying if the Panel should be draggable."
    },
    "dragConfig": {
     "!type": "?",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Dialog.html#attribute_dragConfig",
     "!doc": "Drag configuration."
    },
    "dragInstance": {
     "!type": "+A.DD.Drag",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Dialog.html#attribute_dragInstance",
     "!doc": "Stores the Drag instance for the <code>A.DD.Drag</code> used by\nthis Dialog."
    },
    "modal": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Dialog.html#attribute_modal",
     "!doc": "True if the Panel should be displayed in a modal fashion,\nautomatically creating a transparent mask over the document that\nwill not be removed until the Dialog is dismissed. Uses\n<a href=\"OverlayMask.html\">OverlayMask</a>."
    },
    "resizableConfig": {
     "!type": "?",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Dialog.html#attribute_resizableConfig",
     "!doc": "Resize configuration."
    },
    "resizableInstance": {
     "!type": "+A.DD.Drag",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Dialog.html#attribute_resizableInstance",
     "!doc": "Stores the Resize instance for the <code>A.Resize</code> used by\nthis Dialog."
    },
    "resizable": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Dialog.html#attribute_resizable",
     "!doc": "Boolean specifying if the Panel should be resizable."
    },
    "stack": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Dialog.html#attribute_stack",
     "!doc": "If <code>true</code> give stacking habilities to the Dialog."
    },
    "strings": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Dialog.html#attribute_strings",
     "!doc": "Collection of strings used to label elements of the Dialogs UI."
    }
   },
   "EditableConfig": {
    "!proto": "config.ComponentConfig",
    "cancelButton": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Editable.html#attribute_cancelButton",
     "!doc": "<a href=\"ButtonItem.html\">ButtonItem</a> constructor Object for the\ncancelButton."
    },
    "contentText": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Editable.html#attribute_contentText",
     "!doc": "Content text."
    },
    "formatInput": {
     "!type": "fn()",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Editable.html#attribute_formatInput",
     "!doc": "Function to format the input text displayed on the input."
    },
    "formatOutput": {
     "!type": "fn()",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Editable.html#attribute_formatOutput",
     "!doc": "Function to format the output text displayed on the input."
    },
    "node": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Editable.html#attribute_node",
     "!doc": "Node to setup the editable."
    },
    "eventType": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Editable.html#attribute_eventType",
     "!doc": "Event type to initialize the editable."
    },
    "renderTo": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Editable.html#attribute_renderTo",
     "!doc": "Node to render the editable."
    },
    "saveButton": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Editable.html#attribute_saveButton",
     "!doc": "<a href=\"ButtonItem.html\">ButtonItem</a> constructor Object for the\nsaveButton."
    },
    "icons": {
     "!type": "+yui.Array",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Editable.html#attribute_icons",
     "!doc": "Array with icons for the <a href=\"Toolbar.html\">Toolbar</a>."
    },
    "inputType": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Editable.html#attribute_inputType",
     "!doc": "Type of the input used to edit the <a\nhref=\"Editable.html#config_node\">node</a>."
    }
   },
   "ImageViewerConfig": {
    "!proto": "config.OverlayBaseConfig",
    "anim": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#attribute_anim",
     "!doc": "If <code>true</code> the navigation is animated."
    },
    "caption": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#attribute_caption",
     "!doc": "The caption of the displayed image."
    },
    "captionFromTitle": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#attribute_captionFromTitle",
     "!doc": "If <code>true</code> the <a\nhref=\"ImageViewer.html#config_caption\">caption</a> will be pulled\nfrom the title DOM attribute."
    },
    "centered": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#attribute_centered",
     "!doc": "If <code>true</code> the Overlay with the image will be positioned\non the center of the viewport."
    },
    "currentIndex": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#attribute_currentIndex",
     "!doc": "Index of the current image."
    },
    "image": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#attribute_image",
     "!doc": "Image node element used to load the images."
    },
    "imageAnim": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#attribute_imageAnim",
     "!doc": "Configuration attributes passed to the <a href=\"Anim.html\">Anim</a>\nclass."
    },
    "infoTemplate": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#attribute_infoTemplate",
     "!doc": "String template used to display the information."
    },
    "links": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#attribute_links",
     "!doc": "Selector or NodeList containing the links where the ImageViewer\nextracts the information to generate the thumbnails."
    },
    "loading": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#attribute_loading",
     "!doc": "Whether the image is during a loading state."
    },
    "modal": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#attribute_modal",
     "!doc": "Displays the modal <a href=\"OverlayMask.html\">OverlayMask</a> on\nthe viewport. Set to <code>false</code> to disable."
    },
    "preloadAllImages": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#attribute_preloadAllImages",
     "!doc": "Preload the neighbor image (i.e., the previous and next image based\non the current load one)."
    },
    "showClose": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#attribute_showClose",
     "!doc": "Show close icon control."
    },
    "showArrows": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#attribute_showArrows",
     "!doc": "Show the arrow controls."
    },
    "totalLinks": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#attribute_totalLinks",
     "!doc": "Helper attribute to get the <code>size</code> of the <a\nhref=\"ImageViewer.html#config_links\">links</a> NodeList."
    },
    "arrowLeftEl": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#attribute_arrowLeftEl",
     "!doc": "The element to be used as arrow left."
    },
    "arrowRightEl": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#attribute_arrowRightEl",
     "!doc": "The element to be used as arrow right."
    },
    "captionEl": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#attribute_captionEl",
     "!doc": "The element to be used as caption."
    },
    "closeEl": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#attribute_closeEl",
     "!doc": "The element to be used as close."
    },
    "infoEl": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#attribute_infoEl",
     "!doc": "The element to be used as info."
    },
    "loader": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#attribute_loader",
     "!doc": "HTML element to house the <code>img</code> which is being loaded."
    },
    "loadingEl": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#attribute_loadingEl",
     "!doc": "The element to be used as loading."
    },
    "maxHeight": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#attribute_maxHeight",
     "!doc": "The maximum height of the element"
    },
    "maxWidth": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#attribute_maxWidth",
     "!doc": "The maximum width of the element"
    }
   },
   "ImageGalleryConfig": {
    "!proto": "config.ImageViewerConfig",
    "autoPlay": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageGallery.html#attribute_autoPlay",
     "!doc": "If <code>true</code> the slide show will be played when the\nImageGallery is displayed."
    },
    "delay": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageGallery.html#attribute_delay",
     "!doc": "Delay in milliseconds to change to the next image."
    },
    "paginator": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageGallery.html#attribute_paginator",
     "!doc": "<a href=\"Paginator.html\">Paginator</a> configuration Object. The\n<code>Paginator</code> handles the thumbnails control."
    },
    "paginatorEl": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageGallery.html#attribute_paginatorEl",
     "!doc": "Element which contains the <a href=\"Paginator.html\">Paginator</a>\nwith the thumbnails."
    },
    "paginatorInstance": {
     "!type": "+aui_paginator.Paginator",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageGallery.html#attribute_paginatorInstance",
     "!doc": "Stores the <a href=\"Paginator.html\">Paginator</a> instance."
    },
    "paused": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageGallery.html#attribute_paused",
     "!doc": "If <code>true</code> the slide show is paused."
    },
    "pausedLabel": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageGallery.html#attribute_pausedLabel",
     "!doc": "Label to display when the slide show is paused."
    },
    "playing": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageGallery.html#attribute_playing",
     "!doc": "If <code>true</code> the slide show is playing."
    },
    "playingLabel": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageGallery.html#attribute_playingLabel",
     "!doc": "Label to display when the slide show is playing."
    },
    "repeat": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageGallery.html#attribute_repeat",
     "!doc": "Restart the navigation when reach the last element."
    },
    "showPlayer": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageGallery.html#attribute_showPlayer",
     "!doc": "Show the player controls (i.e., pause and show buttons)."
    },
    "toolbar": {
     "!type": "+Toolbar constructor.",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageGallery.html#attribute_toolbar",
     "!doc": "<a href=\"Toolbar.html\">Toolbar</a> with a play, and pause buttons."
    },
    "useOriginalImage": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageGallery.html#attribute_useOriginalImage",
     "!doc": "If <code>true</code> will use the original image as thumbnails."
    }
   },
   "A": {
    "Plugin": {
     "IOConfig": {
      "!proto": "config.IORequestConfig",
      "node": {
       "!type": "+node.Node",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.Plugin.IO.html#attribute_node",
       "!doc": "Plug IO in any object we want, the setContent will use the node to\nset the content."
      },
      "failureMessage": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.Plugin.IO.html#attribute_failureMessage",
       "!doc": "Message to be set on the content when the transaction fails."
      },
      "loadingMask": {
       "!type": "+yui.Object",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.Plugin.IO.html#attribute_loadingMask",
       "!doc": "Options passed to the <a href=\"LoadingMask.html\">LoadingMask</a>."
      },
      "parseContent": {
       "!type": "bool",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.Plugin.IO.html#attribute_parseContent",
       "!doc": "If true the <a href=\"ParseContent.html\">ParseContent</a> plugin\nwill be plugged to the <a href=\"A.Plugin.IO.html#config_node\">node</a>."
      },
      "showLoading": {
       "!type": "bool",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.Plugin.IO.html#attribute_showLoading",
       "!doc": "Show the <a href=\"LoadingMask.html\">LoadingMask</a> covering the <a\nhref=\"A.Plugin.IO.html#config_node\">node</a> while loading."
      },
      "section": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.Plugin.IO.html#attribute_section",
       "!doc": "Section where the content will be set in case you are plugging it\non a instace of <a href=\"WidgetStdMod.html\">WidgetStdMod</a>."
      },
      "type": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.Plugin.IO.html#attribute_type",
       "!doc": "Type of the <code>instance</code> we are pluggin the A.Plugin.IO.\nCould be a Node, or a Widget."
      },
      "where": {
       "!type": "string",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.Plugin.IO.html#attribute_where",
       "!doc": "Where to insert the content, AFTER, BEFORE or REPLACE. If youre plugging a Node, there is a fourth option called OUTER that will not only replace the entire node itself. This is different from REPLACE, in that REPLACE will replace the *contents* of the node, OUTER will replace the entire Node itself."
      }
     }
    }
   },
   "IORequestConfig": {
    "!proto": "config.Plugin.BaseConfig",
    "autoLoad": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/IORequest.html#attribute_autoLoad",
     "!doc": "If <code>true</code> invoke the\n<a href=\"IORequest.html#method_start\">start</a> method automatically,\ninitializing the IO transaction."
    },
    "cache": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/IORequest.html#attribute_cache",
     "!doc": "If <code>false</code> the current timestamp will be appended to the\nurl, avoiding the url to be cached."
    },
    "dataType": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/IORequest.html#attribute_dataType",
     "!doc": "The type of the request (i.e., could be xml, json, javascript, text)."
    },
    "responseData": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/IORequest.html#attribute_responseData",
     "!doc": "This is a normalized attribute for the response data. Its useful\nto retrieve the correct type for the\n<a href=\"IORequest.html#config_dataType\">dataType</a> (i.e., in json\nrequests the <code>responseData</code>) is a JSONObject."
    },
    "uri": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/IORequest.html#attribute_uri",
     "!doc": "URI to be requested using AJAX."
    },
    "active": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/IORequest.html#attribute_active",
     "!doc": "Whether the transaction is active or not."
    },
    "cfg": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/IORequest.html#attribute_cfg",
     "!doc": "Object containing all the\n<a href=\"io.html#configattributes\">IO Configuration Attributes</a>.\nThis Object is passed to the <code>A.io</code> internally."
    },
    "transaction": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/IORequest.html#attribute_transaction",
     "!doc": "Stores the IO Object of the current transaction."
    },
    "arguments": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/IORequest.html#attribute_arguments",
     "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
    },
    "context": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/IORequest.html#attribute_context",
     "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
    },
    "data": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/IORequest.html#attribute_data",
     "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
    },
    "form": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/IORequest.html#attribute_form",
     "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
    },
    "headers": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/IORequest.html#attribute_headers",
     "!doc": "Set the correct ACCEPT header based on the dataType."
    },
    "method": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/IORequest.html#attribute_method",
     "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
    },
    "selector": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/IORequest.html#attribute_selector",
     "!doc": "A selector to be used to query against the response of the\nrequest. Only works if the response is XML or HTML."
    },
    "sync": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/IORequest.html#attribute_sync",
     "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
    },
    "timeout": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/IORequest.html#attribute_timeout",
     "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
    },
    "xdr": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/IORequest.html#attribute_xdr",
     "!doc": "See <a href=\"http://developer.yahoo.com/yui/3/io/#configuration\">IO\nConfiguration</a>."
    }
   },
   "LiveSearchConfig": {
    "!proto": "config.BaseConfig",
    "data": {
     "!type": "fn()",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/LiveSearch.html#attribute_data",
     "!doc": "<p>Function to extract the content from the node for the indexing. The\ndefault uses the <code>node.html()</code>. In case if you need to\nindex the id of the nodes, here goes one example:</p>\n\nExample indexing the id of the node instead of the HTML:\n\n<pre><code>function(node) {\n return node.attr(id);\n}\n</code></pre>"
    },
    "delay": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/LiveSearch.html#attribute_delay",
     "!doc": "Number of milliseconds the filter will be applied to the node list\nafter the user stop typing."
    },
    "hide": {
     "!type": "fn()",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/LiveSearch.html#attribute_hide",
     "!doc": "Function to be executed to hide the node when the data of that node\nnot matches with the filter."
    },
    "index": {
     "!type": "+yui.Array",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/LiveSearch.html#attribute_index",
     "!doc": "Index for the nodes content."
    },
    "input": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/LiveSearch.html#attribute_input",
     "!doc": "The <code>value</code> of this input node is used to filter the\nresults."
    },
    "matchRegex": {
     "!type": "+RegExp",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/LiveSearch.html#attribute_matchRegex",
     "!doc": "The input <code>value</code> need to matches with this RegExp to be\naccept as a filter (i.e., in order to accept only digits you\ncould use /\\d+/g)."
    },
    "nodes": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/LiveSearch.html#attribute_nodes",
     "!doc": "Nodes to be indexed for the filtering."
    },
    "searchValue": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/LiveSearch.html#attribute_searchValue",
     "!doc": "The text value to search for"
    },
    "show": {
     "!type": "fn()",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/LiveSearch.html#attribute_show",
     "!doc": "Function to be executed to show the node when the data of that node\nmatches with the filter."
    }
   },
   "LoadingMaskConfig": {
    "!proto": "config.Plugin.BaseConfig",
    "messageEl": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/LoadingMask.html#attribute_messageEl",
     "!doc": "Node element to display the message."
    },
    "strings": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/LoadingMask.html#attribute_strings",
     "!doc": "Strings used on the LoadingMask. See\n<a href=\"Widget.html#method_strings\">strings</a>."
    },
    "target": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/LoadingMask.html#attribute_target",
     "!doc": "Node where the mask will be positioned and re-dimensioned."
    }
   },
   "OverlayContextPanelConfig": {
    "!proto": "config.OverlayContextConfig",
    "anim": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContextPanel.html#attribute_anim",
     "!doc": "Enable or disable the animation for hide and show. Used as the\n<a href=\"Anim.html\">Anim</a> configuration attributes.\n\n<pre><code>anim: {\n show: {\n \tduration: .9\n },\n hide: {\n \tduration: .2\n }\n}\n</code></pre>"
    },
    "arrow": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContextPanel.html#attribute_arrow",
     "!doc": "Position where the arrow will be placed. See\n<a href=\"OverlayContextPanel.html#config_showArrow\">showArrow</a>. If its\nnot set, it will get the value set on the\n<a href=\"OverlayContext.html#config_align\">align</a> point. Here is a\nlist of valid arrows bc, bl, br, cc, lb, lc, lt, rb,\nrc, rl."
    },
    "hideOn": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContextPanel.html#attribute_hideOn",
     "!doc": "See <a href=\"OverlayContext.html#config_hideOn\">hideOn</a>."
    },
    "showOn": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContextPanel.html#attribute_showOn",
     "!doc": "See <a href=\"OverlayContext.html#config_showOn\">showOn</a>."
    },
    "showArrow": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContextPanel.html#attribute_showArrow",
     "!doc": "If true the OverlayContextPanel will show an arrow positioned on the\n<a href=\"OverlayContextPanel.html#config_arrow\">arrow</a> point."
    },
    "stack": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContextPanel.html#attribute_stack",
     "!doc": "Gives stacking habilities to the OverlayContextPanel."
    }
   },
   "OverlayContextConfig": {
    "!proto": "config.OverlayBaseConfig",
    "align": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContext.html#attribute_align",
     "!doc": "Inherited from <a href=\"Overlay.html#config_align\">Overlay</a>."
    },
    "cancellableHide": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContext.html#attribute_cancellableHide",
     "!doc": "Cancel auto hide delay if the user interact with the Overlay\n(focus, click, mouseover)"
    },
    "currentNode": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContext.html#attribute_currentNode",
     "!doc": "OverlayContext allow multiple elements to be the\n<a href=\"OverlayContext.html#config_trigger\">trigger</a>, the\ncurrentNode stores the current active one."
    },
    "hideOn": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContext.html#attribute_hideOn",
     "!doc": "The event which is responsible to hide the OverlayContext."
    },
    "hideOnDocumentClick": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContext.html#attribute_hideOnDocumentClick",
     "!doc": "If true the instance is registered on the\n<a href=\"OverlayContextManager.html\">OverlayContextManager</a> static\nclass and will be hide when the user click on document."
    },
    "hideDelay": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContext.html#attribute_hideDelay",
     "!doc": "Number of milliseconds after the hide method is invoked to hide the\nOverlayContext."
    },
    "showOn": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContext.html#attribute_showOn",
     "!doc": "The event which is responsible to show the OverlayContext."
    },
    "showDelay": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContext.html#attribute_showDelay",
     "!doc": "Number of milliseconds after the show method is invoked to show the\nOverlayContext."
    },
    "trigger": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContext.html#attribute_trigger",
     "!doc": "Node, NodeList or Selector which will be used as trigger elements\nto show or hide the OverlayContext."
    },
    "useARIA": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContext.html#attribute_useARIA",
     "!doc": "True if Overlay should use ARIA plugin"
    },
    "visible": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContext.html#attribute_visible",
     "!doc": "If true the OverlayContext is visible by default after the render phase.\nInherited from <a href=\"Overlay.html\">Overlay</a>."
    }
   },
   "OverlayManagerConfig": {
    "!proto": "config.BaseConfig",
    "zIndexBase": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayManager.html#attribute_zIndexBase",
     "!doc": "The zIndex base to be used on the stacking for all overlays\nregistered on the OverlayManager."
    }
   },
   "OverlayMaskConfig": {
    "!proto": "config.OverlayBaseConfig",
    "alignPoints": {
     "!type": "+yui.Array",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayMask.html#attribute_alignPoints",
     "!doc": "Points to align the <a href=\"Overlay.html\">Overlay</a> used as\nmask."
    },
    "background": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayMask.html#attribute_background",
     "!doc": "Background color of the mask."
    },
    "target": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayMask.html#attribute_target",
     "!doc": "Node where the mask will be positioned and re-dimensioned. The\ndefault is the document, which means that if not specified the mask\ntakes the full screen."
    },
    "opacity": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayMask.html#attribute_opacity",
     "!doc": "CSS opacity of the mask."
    },
    "shim": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayMask.html#attribute_shim",
     "!doc": "Use shim option."
    },
    "visible": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayMask.html#attribute_visible",
     "!doc": "If true the Overlay is visible by default after the render phase.\nInherited from <a href=\"Overlay.html\">Overlay</a>."
    },
    "zIndex": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayMask.html#attribute_zIndex",
     "!doc": "zIndex of the OverlayMask."
    }
   },
   "PaginatorConfig": {
    "!proto": "config.BaseConfig",
    "alwaysVisible": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#attribute_alwaysVisible",
     "!doc": "If true the Paginator will be always visible, even when the number\nof pages is 0. To hide the paginator controls automatically when\nthere is no pages to display use <code>false</code>."
    },
    "containers": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#attribute_containers",
     "!doc": "The Paginator controls UI could be displayed in more than one\ncontainer (i.e., in the header and footer of a list). Pass a\n<a href=\"NodeList.html\">NodeList</a> or a selector to grab the\ncontainers."
    },
    "firstPageLink": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#attribute_firstPageLink",
     "!doc": "The <a href=\"Node.html\">Node</a> or template to be used as the\nfirst link element."
    },
    "firstPageLinkLabel": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#attribute_firstPageLinkLabel",
     "!doc": "The label used as content of the\n<a href=\"Paginator.html#config_firstPageLink\">firstPageLink</a> element."
    },
    "lastPageLink": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#attribute_lastPageLink",
     "!doc": "The <a href=\"Node.html\">Node</a> or template to be used as the\nlast link element."
    },
    "lastPageLinkLabel": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#attribute_lastPageLinkLabel",
     "!doc": "The label used as content of the\n<a href=\"Paginator.html#config_lastPageLink\">lastPageLink</a> element."
    },
    "maxPageLinks": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#attribute_maxPageLinks",
     "!doc": "The max number of page links to be displayed. If lower than the\ntotal number of pages they are still navigable using next and prev\nlinks."
    },
    "nextPageLink": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#attribute_nextPageLink",
     "!doc": "The <a href=\"Node.html\">Node</a> or template to be used as the\nnext link element."
    },
    "nextPageLinkLabel": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#attribute_nextPageLinkLabel",
     "!doc": "The label used as content of the\n<a href=\"Paginator.html#config_nextPageLink\">nextPageLink</a> element."
    },
    "page": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#attribute_page",
     "!doc": "Page to display on initial paint."
    },
    "pageContainerTemplate": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#attribute_pageContainerTemplate",
     "!doc": "HTML Template for the page links container."
    },
    "pageLinkContent": {
     "!type": "fn()",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#attribute_pageLinkContent",
     "!doc": "<p>Function which set the content of the each page element. The passed\nfunction receive as arguments the reference for the page element\nnode, the page number and the index of the page element.</p>\n\nExample:\n\n<pre><code>function(pageEl, pageNumber, index) {\n\t pageEl.html(pageNumber);\n\t}</code></pre>"
    },
    "pageLinkTemplate": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#attribute_pageLinkTemplate",
     "!doc": "HTML Template for the link elements."
    },
    "pageReportEl": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#attribute_pageReportEl",
     "!doc": "Node element to display the page report (i.e., (1 of 100))."
    },
    "pageReportLabelTemplate": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#attribute_pageReportLabelTemplate",
     "!doc": "Template for the\n<a href=\"Paginator.html#config_pageReportEl\">pageReportEl</a> content.\nNote the placeholders for the page {page} and the total pages\n{totalPages}."
    },
    "prevPageLink": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#attribute_prevPageLink",
     "!doc": "The <a href=\"Node.html\">Node</a> or template to be used as the\nprev link element."
    },
    "prevPageLinkLabel": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#attribute_prevPageLinkLabel",
     "!doc": "The label used as content of the\n<a href=\"Paginator.html#config_prevPageLink\">prevPageLink</a> element."
    },
    "rowsPerPageOptions": {
     "!type": "+yui.Array",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#attribute_rowsPerPageOptions",
     "!doc": "Array to be displayed on the generated HTML Select element with the\n<a href=\"Paginator.html#config_rowsPerPage\">rowsPerPage</a>\ninformation. (i.e., [1,3,5,7], will display these values on the\nselect)"
    },
    "rowsPerPage": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#attribute_rowsPerPage",
     "!doc": "Number of records constituting a \"page\"."
    },
    "rowsPerPageEl": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#attribute_rowsPerPageEl",
     "!doc": "Node element to display the\n<a href=\"Paginator.html#config_rowsPerPage\">rowsPerPage</a>."
    },
    "state": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#attribute_state",
     "!doc": "Generates information to the <code>changeRequest</code> event. See\n<a href=\"Paginator.html#method_changeRequest\">changeRequest</a>."
    },
    "template": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#attribute_template",
     "!doc": "Template used to render controls. The string will be used as\ninnerHTML on all specified container nodes. Bracketed keys (e.g.\n{pageLinks}) in the string will be replaced with an instance of the\nso named ui component."
    },
    "total": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#attribute_total",
     "!doc": "Total number of records to paginate through."
    },
    "totalEl": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#attribute_totalEl",
     "!doc": "Node element to display the total information."
    },
    "totalLabel": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#attribute_totalLabel",
     "!doc": "The label markup to the total information."
    },
    "totalPages": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#attribute_totalPages",
     "!doc": "Number of pages. Calculated based on the\n<a href=\"Paginator.html#config_total\">total</a> divided by the\n<a href=\"Paginator.html#config_rowsPerPage\">rowsPerPage</a>."
    }
   },
   "PanelConfig": {
    "!proto": "config.WidgetConfig",
    "collapsed": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Panel.html#attribute_collapsed",
     "!doc": "Whether the panel is displayed collapsed."
    },
    "collapsible": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Panel.html#attribute_collapsible",
     "!doc": "Whether the panel is able to be collapsed."
    },
    "title": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Panel.html#attribute_title",
     "!doc": "The title to be displayed on the Panel."
    },
    "icons": {
     "!type": "+yui.Array",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Panel.html#attribute_icons",
     "!doc": "<p>Array of <a href=\"ButtonItem.html\">ButtonItem</a> configuration objects to be displayed as icons\non the Panel title.</p>\n\nExample:\n\n<pre><code>icons: [ { icon: close, id: close } ]</code></pre>\n\nFor more information how to use this option see\n<a href=\"ButtonItem.html\">ButtonItem</a>."
    },
    "strings": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Panel.html#attribute_strings",
     "!doc": "Collection of strings used to label elements of the Panels UI."
    },
    "useARIA": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Panel.html#attribute_useARIA",
     "!doc": "True if Panel should use ARIA plugin"
    }
   },
   "ProgressBarConfig": {
    "!proto": "config.ComponentConfig",
    "height": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ProgressBar.html#attribute_height",
     "!doc": "Display height of the progressbar."
    },
    "label": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ProgressBar.html#attribute_label",
     "!doc": "Display label of the progressbar. If not specified try to query\nusing HTML_PARSER an element inside contentBox which matches\n<code>aui-progressbar-text</code> and get its innerHTML to be\nused as label."
    },
    "max": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ProgressBar.html#attribute_max",
     "!doc": "Represents the top value for the bar. The bar will be fully\nextended when reaching this value. Values higher than this will\nbe ignored."
    },
    "min": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ProgressBar.html#attribute_min",
     "!doc": "Represents the lowest value for the bar. The bar will be\ntotally collapsed when reaching this value. Values lower than\nthis will be ignored."
    },
    "orientation": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ProgressBar.html#attribute_orientation",
     "!doc": "Display orientation of the progressbar (i.e. vertical or\nhorizontal)."
    },
    "ratio": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ProgressBar.html#attribute_ratio",
     "!doc": "Calculate the ratio based on <code>max</code> and\n<code>min</code> values."
    },
    "step": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ProgressBar.html#attribute_step",
     "!doc": "Calculate the progressbar step based on <code>ratio</code>\nvalue."
    },
    "statusNode": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ProgressBar.html#attribute_statusNode",
     "!doc": "DOM Node to display the satus bar of the progressbar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-progressbar-status</code>."
    },
    "textNode": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ProgressBar.html#attribute_textNode",
     "!doc": "DOM Node to display the text of the progressbar. If not\nspecified try to query using HTML_PARSER an element inside\ncontentBox which matches <code>aui-progressbar-text</code>."
    },
    "value": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ProgressBar.html#attribute_value",
     "!doc": "The value for the bar. Valid values are in between the minValue\nand maxValue attributes."
    }
   },
   "RatingConfig": {
    "!proto": "config.ComponentConfig",
    "disabled": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Rating.html#attribute_disabled",
     "!doc": "Whether the Rating is disabled or not. Disabled Ratings dont allow\nhover or click, just display selected stars."
    },
    "canReset": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Rating.html#attribute_canReset",
     "!doc": "If <code>true</code> could be reseted (i.e., have no values\nselected)."
    },
    "defaultSelected": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Rating.html#attribute_defaultSelected",
     "!doc": "The number of selected starts when the Rating render."
    },
    "elements": {
     "!type": "+dom.NodeList",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Rating.html#attribute_elements",
     "!doc": "<a href=\"NodeList.html\">NodeList</a> of elements used on the\nRating. Each element is one Star."
    },
    "hiddenInput": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Rating.html#attribute_hiddenInput",
     "!doc": "Hidden input to handle the selected value. This hidden input\nreplace the radio elements and keep the same name."
    },
    "inputName": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Rating.html#attribute_inputName",
     "!doc": "Name of the <a\nhref=\"Rating.html#config_hiddenInput\">hiddenInput</a> element. If\nnot specified will use the name of the replaced radio."
    },
    "label": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Rating.html#attribute_label",
     "!doc": "Label to be displayed with the Rating elements."
    },
    "labelNode": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Rating.html#attribute_labelNode",
     "!doc": "DOM Node to display the text of the StarRating. If not\nspecified try to query using HTML_PARSER an element inside\nboundingBox which matches <code>aui-rating-label-element</code>."
    },
    "selectedIndex": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Rating.html#attribute_selectedIndex",
     "!doc": "Stores the index of the selected element."
    },
    "showTitle": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Rating.html#attribute_showTitle",
     "!doc": "If <code>true</code> will extract the value of the\n<code>title</code> attribute on the radio, and use it on the\ngenerated Rating elements."
    },
    "size": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Rating.html#attribute_size",
     "!doc": "Number of Rating elements to be displayed."
    },
    "title": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Rating.html#attribute_title",
     "!doc": "If set, will be used when there is no DOM <code>title</code> on the\nradio elements."
    },
    "value": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Rating.html#attribute_value",
     "!doc": "Stores the value of the current selected Rating element."
    }
   },
   "ThumbRatingConfig": {
    "!proto": "config.RatingConfig",
    "size": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ThumbRating.html#attribute_size",
     "!doc": "The size on ThumbRating is always 2 (i.e., thumb up and thumb down)."
    }
   },
   "ResizeConfig": {
    "!proto": "config.BaseConfig",
    "autoHide": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Resize.html#attribute_autoHide",
     "!doc": "False to ensure that the resize handles are always visible, true to\ndisplay them only when the user mouses over the resizable borders."
    },
    "handles": {
     "!type": "+yui.Array",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Resize.html#attribute_handles",
     "!doc": "The handles to use (any combination of): t, b, r, l, bl,\nbr, tl, tr. Can use a shortcut of All."
    },
    "node": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Resize.html#attribute_node",
     "!doc": "The selector or element to resize. Required."
    },
    "proxy": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Resize.html#attribute_proxy",
     "!doc": "Resize a proxy element instead of the real element."
    },
    "proxyEl": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Resize.html#attribute_proxyEl",
     "!doc": "The Resize proxy element."
    },
    "resizing": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Resize.html#attribute_resizing",
     "!doc": "True when the element is being Resized."
    },
    "wrap": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Resize.html#attribute_wrap",
     "!doc": "True to wrap an element with a div if needed (required for textareas\nand images, defaults to false) in favor of the handles config option.\nThe wrapper element type (default div) could be over-riden passing the\n<code>wrapper</code> attribute."
    },
    "wrapTypes": {
     "!type": "+Regex",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Resize.html#attribute_wrapTypes",
     "!doc": "Elements that requires a wrapper by default. Normally are elements\nwhich cannot have children elements."
    },
    "wrapper": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Resize.html#attribute_wrapper",
     "!doc": "Element to wrap the <code>wrapTypes</code>. This element will house\nthe handles elements."
    }
   },
   "TextboxlistConfig": {
    "!proto": "config.AutoCompleteConfig",
    "constrain": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Textboxlist.html#attribute_constrain",
     "!doc": "Will attempt to constrain the resize node to the boundaries. Arguments:<br>\nview: Contrain to Viewport<br>\n#selector_string: Constrain to this node<br>\n{Region Object}: An Object Literal containing a valid region (top, right, bottom, left) of page positions"
    },
    "minHeight": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Textboxlist.html#attribute_minHeight",
     "!doc": "The minimum height of the element"
    },
    "minWidth": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Textboxlist.html#attribute_minWidth",
     "!doc": "The minimum width of the element"
    },
    "maxHeight": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Textboxlist.html#attribute_maxHeight",
     "!doc": "The maximum height of the element"
    },
    "maxWidth": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Textboxlist.html#attribute_maxWidth",
     "!doc": "The maximum width of the element"
    },
    "preserveRatio": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Textboxlist.html#attribute_preserveRatio",
     "!doc": "Maintain the elements ratio when resizing."
    },
    "tickX": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Textboxlist.html#attribute_tickX",
     "!doc": "The number of x ticks to span the resize to."
    },
    "tickY": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Textboxlist.html#attribute_tickY",
     "!doc": "The number of y ticks to span the resize to."
    },
    "dateFormat": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Textboxlist.html#attribute_dateFormat",
     "!doc": "The default date format string which can be overriden for\nlocalization support. The format must be valid according to\n<a href=\"DataType.Date.html\">A.DataType.Date.format</a>."
    },
    "firstDayOfWeek": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Textboxlist.html#attribute_firstDayOfWeek",
     "!doc": "First day of the week: Sunday is 0, Monday is 1."
    }
   },
   "ToolbarConfig": {
    "!proto": "config.ComponentConfig",
    "activeState": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Toolbar.html#attribute_activeState",
     "!doc": "Receives an interaction state of active when the user clicks on it."
    },
    "children": {
     "!type": "+yui.Array",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Toolbar.html#attribute_children",
     "!doc": "Receives the toolbar items."
    },
    "defaultState": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Toolbar.html#attribute_defaultState",
     "!doc": "Receives a default interaction state."
    },
    "hoverState": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Toolbar.html#attribute_hoverState",
     "!doc": "Receives an interaction state of hover during the\n<code>mouseover</code> event."
    },
    "defaultChildType": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Toolbar.html#attribute_defaultChildType",
     "!doc": "The default type of child widget to render into the Element"
    },
    "orientation": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Toolbar.html#attribute_orientation",
     "!doc": "Representing the orientation of the progress bar. Could be\n<code>horizontal</code> or <code>vertical</code>."
    }
   },
   "TooltipConfig": {
    "!proto": "config.OverlayContextPanelConfig",
    "anim": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Tooltip.html#attribute_anim",
     "!doc": "See <a href=\"OverlayContextPanel.html#config_anim\">OverlayContextPanel anim</a>."
    },
    "align": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Tooltip.html#attribute_align",
     "!doc": "See <a href=\"Overlay.html#config_align\">OverlayContextPanel align</a>."
    },
    "showOn": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Tooltip.html#attribute_showOn",
     "!doc": "See <a href=\"OverlayContext.html#config_showOn\">OverlayContext showOn</a>."
    },
    "hideOn": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Tooltip.html#attribute_hideOn",
     "!doc": "See <a href=\"OverlayContext.html#config_showOn\">OverlayContext showOn</a>."
    },
    "hideDelay": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Tooltip.html#attribute_hideDelay",
     "!doc": "See <a href=\"OverlayContext.html#config_hideDelay\">OverlayContext hideDelay</a>."
    },
    "title": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Tooltip.html#attribute_title",
     "!doc": "Use the content of the <code>title</code> attribute as the Tooltip\ncontent."
    }
   },
   "TreeDataConfig": {
    "!proto": "config.BaseConfig",
    "container": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#attribute_container",
     "!doc": "Container to nest children nodes. If has cntainer its not a leaf."
    },
    "children": {
     "!type": "+yui.Array",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#attribute_children",
     "!doc": "Array of children (i.e. could be a JSON metadata object or a TreeNode instance)."
    },
    "index": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#attribute_index",
     "!doc": "Index the nodes."
    }
   },
   "TreeNodeConfig": {
    "!proto": "config.TreeDataConfig",
    "draggable": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNode.html#attribute_draggable",
     "!doc": "If true the TreeNode is draggable."
    },
    "ownerTree": {
     "!type": "+aui_tree.TreeView",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNode.html#attribute_ownerTree",
     "!doc": "TreeView which contains the current TreeNode."
    },
    "label": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNode.html#attribute_label",
     "!doc": "Label of the TreeNode."
    },
    "expanded": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNode.html#attribute_expanded",
     "!doc": "Whether the TreeNode is expanded by default."
    },
    "id": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNode.html#attribute_id",
     "!doc": "Id of the TreeNode."
    },
    "leaf": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNode.html#attribute_leaf",
     "!doc": "Whether the TreeNode could have children or not (i.e. if any\nchildren is present the TreeNode is a leaf)."
    },
    "nextSibling": {
     "!type": "+aui_tree.TreeNode",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNode.html#attribute_nextSibling",
     "!doc": "Next sibling of the current TreeNode."
    },
    "prevSibling": {
     "!type": "+aui_tree.TreeNode",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNode.html#attribute_prevSibling",
     "!doc": "Previous sibling of the current TreeNode."
    },
    "parentNode": {
     "!type": "+aui_tree.TreeNode",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNode.html#attribute_parentNode",
     "!doc": "Parent node of the current TreeNode."
    },
    "labelEl": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNode.html#attribute_labelEl",
     "!doc": "Label element to house the <code>label</code> attribute."
    },
    "hitAreaEl": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNode.html#attribute_hitAreaEl",
     "!doc": "Hitarea element."
    },
    "alwaysShowHitArea": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNode.html#attribute_alwaysShowHitArea",
     "!doc": "Always show the hitarea icon."
    },
    "iconEl": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNode.html#attribute_iconEl",
     "!doc": "Icon element."
    }
   },
   "TreeNodeIOConfig": {
    "!proto": "config.TreeNodeConfig",
    "io": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNodeIO.html#attribute_io",
     "!doc": "IO options for the current TreeNode load the children."
    },
    "loading": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNodeIO.html#attribute_loading",
     "!doc": "Whether the current TreeNode IO transaction is loading."
    },
    "loaded": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNodeIO.html#attribute_loaded",
     "!doc": "Whether the current TreeNode has loaded the content."
    },
    "cache": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNodeIO.html#attribute_cache",
     "!doc": "Whether the current TreeNode should cache the loaded content or not."
    }
   },
   "TreeNodeCheckConfig": {
    "!proto": "config.TreeNodeIOConfig",
    "checked": {
     "!type": "bool",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNodeCheck.html#attribute_checked",
     "!doc": "Whether the TreeNode is checked or not."
    },
    "checkName": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNodeCheck.html#attribute_checkName",
     "!doc": "Name of the checkbox element used on the current TreeNode."
    },
    "checkContainerEl": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNodeCheck.html#attribute_checkContainerEl",
     "!doc": "Container element for the checkbox."
    },
    "checkEl": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNodeCheck.html#attribute_checkEl",
     "!doc": "Checkbox element."
    }
   },
   "TreeViewConfig": {
    "!proto": "config.TreeDataConfig",
    "type": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeView.html#attribute_type",
     "!doc": "Type of the treeview (i.e. could be file or normal)."
    },
    "lastSelected": {
     "!type": "+aui_tree.TreeNode",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeView.html#attribute_lastSelected",
     "!doc": "Last selected TreeNode."
    },
    "io": {
     "!type": "+yui.Object",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeView.html#attribute_io",
     "!doc": "IO metadata for loading the children using ajax."
    }
   },
   "TreeViewDDConfig": {
    "!proto": "config.TreeViewConfig",
    "helper": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeViewDD.html#attribute_helper",
     "!doc": "Dragdrop helper element."
    },
    "scrollDelay": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeViewDD.html#attribute_scrollDelay",
     "!doc": "Delay of the scroll while dragging the TreeNodes."
    },
    "dropAction": {
     "!type": "string",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeViewDD.html#attribute_dropAction",
     "!doc": "Drop action (i.e. could be append, below or above)."
    },
    "lastY": {
     "!type": "number",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeViewDD.html#attribute_lastY",
     "!doc": "Last Y."
    },
    "nodeContent": {
     "!type": "+node.Node",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeViewDD.html#attribute_nodeContent",
     "!doc": "Reference for the current drop node."
    }
   }
  },
  "_yui": {
   "aui_autocomplete": {
    "!data": {
     "module": "aui-autocomplete"
    },
    "AutoComplete": {
     "!type": "fn(config: +config.AutoCompleteConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html",
     "prototype": {
      "!proto": "aui_component.Component.prototype",
      "doBeforeExpandContainer": {
       "!type": "fn(query: string, allResults: +yui.Object) -> bool",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#method_doBeforeExpandContainer",
       "!doc": "An overridable method that is executed before the result container is shown.\nThe method can return false to prevent the container from being shown."
      },
      "doBeforeLoadData": {
       "!type": "fn(event: +event_custom.EventFacade) -> bool",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#method_doBeforeLoadData",
       "!doc": "An overridable method that is executed before the result overlay is loaded with results."
      },
      "filterResults": {
       "!type": "fn(event: +event_custom.EventFacade) -> +yui.Object",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#method_filterResults",
       "!doc": "Executed by the data source as a mechanism to do simple client-side\nfiltering of the results."
      },
      "formatResult": {
       "!type": "fn(result: +yui.Object, request: string, resultMatch: string) -> string",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#method_formatResult",
       "!doc": "An overridable method for formatting the result of the query before its displayed in the overlay."
      },
      "generateRequest": {
       "!type": "fn(query: string) -> +yui.Object",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#method_generateRequest",
       "!doc": "An overridable method that creates an object to be passed to the sendRequest\nmethod of the data source object. Useful to overwrite if you wish to create\na custom request object before its sent."
      },
      "handleResponse": {
       "!type": "fn(event: +event_custom.EventFacade)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#method_handleResponse",
       "!doc": "Handles the response for the display of the results. This is a callback method\nthat is fired by the sendRequest method so that results are ready to be accessed."
      },
      "sendQuery": {
       "!type": "fn(query: string)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#method_sendQuery",
       "!doc": "Sends a query request to the data source object."
      }
     },
     "AutoComplete.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#property_AutoComplete.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "AutoComplete.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/AutoComplete.html#property_AutoComplete.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the AutoComplete."
     }
    }
   },
   "aui_button_item": {
    "!data": {
     "module": "aui-button-item"
    },
    "ButtonItem": {
     "!type": "fn(config: +config.ButtonItemConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ButtonItem.html",
     "prototype": {
      "!proto": "aui_component.Component.prototype",
      "undefined": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/ButtonItem.html",
       "!doc": "Maps an array or object to a resulting array, using the\nreturn value of fn as the values for the new array.\nLike A.each, this function can accept an object or an array."
      }
     },
     "ButtonItem.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/ButtonItem.html#property_ButtonItem.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "ButtonItem.AUGMENTS": {
      "!type": "+array",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/ButtonItem.html#property_ButtonItem.AUGMENTS",
      "!doc": "Static property provides an array to specify which classes augment this one."
     },
     "ButtonItem.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/ButtonItem.html#property_ButtonItem.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the ButtonItem."
     },
     "ButtonItem.HTML_PARSER": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/ButtonItem.html#property_ButtonItem.HTML_PARSER",
      "!doc": "Object hash, defining how attribute values are to be parsed from\nmarkup contained in the widgets content box."
     }
    }
   },
   "aui_calendar": {
    "!data": {
     "module": "aui-calendar"
    },
    "Calendar": {
     "!type": "fn(config: +config.CalendarConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html",
     "prototype": {
      "!proto": "calendar.CalendarBase.prototype",
      "clear": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#method_clear",
       "!doc": "Clear all selected dates on the Calendar."
      },
      "eachSelectedDate": {
       "!type": "fn(fn: fn(), dates: +Dates)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#method_eachSelectedDate",
       "!doc": "Loop each date from <a href=\"Calendar.html#config_dates\">dates</a> and\nexecutes a callback."
      },
      "findMonthStart": {
       "!type": "fn(year: number, month: number) -> number",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#method_findMonthStart",
       "!doc": "Get the first day of the month of the passed year."
      },
      "formatDate": {
       "!type": "fn(date: +Date, mask: string) -> string",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#method_formatDate",
       "!doc": "Format a date with the passed mask. Used on\n<a href=\"Calendar.html#config_dateFormat\">dateFormat</a>."
      },
      "getCurrentDate": {
       "!type": "fn() -> +Date",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#method_getCurrentDate",
       "!doc": "Get current date."
      },
      "getDaysInMonth": {
       "!type": "fn(year: number, month: number) -> number",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#method_getDaysInMonth",
       "!doc": "Get the number of days in the passed year and month."
      },
      "getDetailedSelectedDates": {
       "!type": "fn() -> +yui.Array",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#method_getDetailedSelectedDates",
       "!doc": "Get an Array with selected dates with detailed information (day, month, year).\n<pre><code>[{\n   year: date.getFullYear(),\n   month: date.getMonth(),\n   day: date.getDate()\n}]</code></pre>"
      },
      "getFirstDayOfWeek": {
       "!type": "fn(year: number, month: number) -> number",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#method_getFirstDayOfWeek",
       "!doc": "Get the first day of week of the passed year and month."
      },
      "getFormattedSelectedDates": {
       "!type": "fn() -> +yui.Array",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#method_getFormattedSelectedDates",
       "!doc": "Get the selected dates formatted by the\n<a href=\"Calendar.html#config_dateFormat\">dateFormat</a>."
      },
      "getSelectedDates": {
       "!type": "fn() -> +yui.Array",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#method_getSelectedDates",
       "!doc": "Get the selected dates."
      },
      "isAlreadySelected": {
       "!type": "fn(date: +Date) -> bool",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#method_isAlreadySelected",
       "!doc": "Check if a date is already selected."
      },
      "isOutOfRangeDate": {
       "!type": "fn(date: +Date)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#method_isOutOfRangeDate",
       "!doc": "Check if the passed date is out of range. Compared with the\n<a href=\"Calendar.html#config_minDate\">minDate</a> and\n<a href=\"Calendar.html#config_maxDate\">maxDate</a>."
      },
      "navigateMonth": {
       "!type": "fn(offset: number)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#method_navigateMonth",
       "!doc": "Navigate through months and re-sync the UI."
      },
      "removeDate": {
       "!type": "fn(date: +Date)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#method_removeDate",
       "!doc": "Remove the passed date from\n<a href=\"Calendar.html#config_dates\">dates</a>."
      },
      "selectNextMonth": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#method_selectNextMonth",
       "!doc": "Navigate to the next month. Fired from the next icon on the Calendar\nheader."
      },
      "selectPrevMonth": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#method_selectPrevMonth",
       "!doc": "Navigate to the previous month. Fired from the previous icon on the\nCalendar header."
      },
      "selectToday": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#method_selectToday",
       "!doc": "Select today date on the Calendar."
      },
      "setCurrentDate": {
       "!type": "fn(date: +Date)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#method_setCurrentDate",
       "!doc": "Update the currentDay, currentMonth and currentYear values."
      }
     },
     "Calendar.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#property_Calendar.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "Calendar.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#property_Calendar.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Calendar."
     },
     "ProgressBar.HTML_PARSER": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/Calendar.html#property_ProgressBar.HTML_PARSER",
      "!doc": "Object hash, defining how attribute values are to be parsed from\nmarkup contained in the widgets content box."
     }
    },
    "DatePickerSelect": {
     "!type": "fn(config: +config.DatePickerSelectConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatePickerSelect.html",
     "prototype": {
      "!proto": "aui_component.Component.prototype"
     },
     "DatePickerSelect.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatePickerSelect.html#property_DatePickerSelect.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "DatePickerSelect.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatePickerSelect.html#property_DatePickerSelect.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the DatePickerSelect."
     },
     "DatePickerSelect.HTML_PARSER": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/DatePickerSelect.html#property_DatePickerSelect.HTML_PARSER",
      "!doc": "Object hash, defining how attribute values are to be parsed from\nmarkup contained in the widgets content box."
     }
    }
   },
   "aui_char_counter": {
    "!data": {
     "module": "aui-char-counter"
    },
    "CharCounter": {
     "!type": "fn(config: +config.CharCounterConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/CharCounter.html",
     "prototype": {
      "!proto": "base.Base.prototype",
      "checkLength": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/CharCounter.html#method_checkLength",
       "!doc": "Check the current value of the <a\nhref=\"CharCounter.html#config_input\">input</a>, truncate the data if\nneeded, and re-sync the UI. Fired from <a\n href=\"CharCounter.html#method__onInputChange\">_onInputChange</a>."
      }
     },
     "CharCounter.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/CharCounter.html#property_CharCounter.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "CharCounter.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/CharCounter.html#property_CharCounter.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the CharCounter."
     }
    }
   },
   "aui_color_picker": {
    "!data": {
     "module": "aui-color-picker"
    },
    "ColorPicker": {
     "!type": "fn(config: +config.ColorPickerConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ColorPicker.html",
     "prototype": {
      "!proto": "aui_overlay.OverlayContext.prototype"
     },
     "ColorPicker.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/ColorPicker.html#property_ColorPicker.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "ColorPicker.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/ColorPicker.html#property_ColorPicker.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the ColorPicker."
     }
    }
   },
   "aui_component": {
    "!data": {
     "module": "aui-component"
    },
    "Component": {
     "!type": "fn(config: +config.ComponentConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Component.html",
     "prototype": {
      "!proto": "widget.Widget.prototype",
      "clone": {
       "!type": "fn(config: +config.cloneConfig) -> +widget.Widget",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Component.html#method_clone",
       "!doc": "Clone the current Component."
      },
      "toggle": {
       "!type": "fn(visible: ?)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Component.html#method_toggle",
       "!doc": "Toggle the visibility of the Panel toggling the value of the\n<a href=\"Widget.html#config_visible\">visible</a> attribute."
      }
     },
     "Component.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/Component.html#property_Component.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "Component.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/Component.html#property_Component.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Component."
     }
    },
    "CellEditorSupport": {
     "!type": "fn(config: +config.CellEditorSupportConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/CellEditorSupport.html",
     "prototype": {
      "!proto": "base.Base.prototype",
      "doBeforeLoadData": {
       "!type": "fn(event: +event_custom.EventFacade) -> bool",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/CellEditorSupport.html#method_doBeforeLoadData",
       "!doc": "An overridable method that is executed before the result overlay is loaded with results."
      },
      "formatResult": {
       "!type": "fn(result: +yui.Object, request: string, resultMatch: string) -> string",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/CellEditorSupport.html#method_formatResult",
       "!doc": "An overridable method for formatting the result of the query before its displayed in the overlay."
      },
      "generateRequest": {
       "!type": "fn(query: string) -> +yui.Object",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/CellEditorSupport.html#method_generateRequest",
       "!doc": "An overridable method that creates an object to be passed to the sendRequest\nmethod of the data source object. Useful to overwrite if you wish to create\na custom request object before its sent."
      },
      "handleResponse": {
       "!type": "fn(event: +event_custom.EventFacade)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/CellEditorSupport.html#method_handleResponse",
       "!doc": "Handles the response for the display of the results. This is a callback method\nthat is fired by the sendRequest method so that results are ready to be accessed."
      }
     },
     "AutoComplete.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/CellEditorSupport.html#property_AutoComplete.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the AutoComplete."
     }
    }
   },
   "aui_datatype": {
    "!data": {
     "module": "aui-datatype"
    },
    "DataType": {
     "Boolean": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/DataType.Boolean.html",
      "prototype": {
       "parse": {
        "!type": "fn(data: ?) -> bool",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/DataType.Boolean.html#method_parse",
        "!doc": "Parses any <code>falsey</code> value to <code>false</code> and\n<code>non-falsey</code> to <code>true</code>."
       }
      }
     },
     "String": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/DataType.String.html",
      "prototype": {
       "evaluate": {
        "!type": "fn(data: ?) -> bool",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/DataType.String.html#method_evaluate",
        "!doc": "Evaluates a string to a primitive value (if possible). Supports\n<code>true</code> and <code>false</code> also. Unrecognized strings are\nreturned without any modification."
       }
      }
     }
    },
    "A": {
     "DataType": {
      "DateMath": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html",
       "DAY": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#property_DAY",
        "!doc": "Constant field representing Day"
       },
       "WEEK": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#property_WEEK",
        "!doc": "Constant field representing Week"
       },
       "YEAR": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#property_YEAR",
        "!doc": "Constant field representing Year"
       },
       "MONTH": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#property_MONTH",
        "!doc": "Constant field representing Month"
       },
       "MINUTES": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#property_MINUTES",
        "!doc": "Constant field representing Minutes"
       },
       "HOUR": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#property_HOUR",
        "!doc": "Constant field representing Hour"
       },
       "SECONDS": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#property_SECONDS",
        "!doc": "Constant field representing Seconds"
       },
       "MAX_MONTH_LENGTH": {
        "!type": "number",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#property_MAX_MONTH_LENGTH",
        "!doc": "Constant field representing the number of maximum days in a month"
       },
       "WEEK_LENGTH": {
        "!type": "number",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#property_WEEK_LENGTH",
        "!doc": "Constant field representing the number of maximum days in a week"
       },
       "ONE_DAY_MS": {
        "!type": "number",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#property_ONE_DAY_MS",
        "!doc": "Constant field representing one day, in milliseconds"
       },
       "ONE_HOUR_MS": {
        "!type": "number",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#property_ONE_HOUR_MS",
        "!doc": "Constant field representing one hour, in milliseconds"
       },
       "ONE_MINUTE_MS": {
        "!type": "number",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#property_ONE_MINUTE_MS",
        "!doc": "Constant field representing one minute, in milliseconds"
       },
       "ONE_SECOND_MS": {
        "!type": "number",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#property_ONE_SECOND_MS",
        "!doc": "Constant field representing one second, in milliseconds"
       },
       "WEEK_ONE_JAN_DATE": {
        "!type": "number",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#property_WEEK_ONE_JAN_DATE",
        "!doc": "Constant field representing the date in first week of January\nwhich identifies the first week of the year.\n<p>\nIn the U.S, Jan 1st is normally used based on a Sunday start of week.\nISO 8601, used widely throughout Europe, uses Jan 4th, based on a Monday start of week.\n</p>"
       },
       "prototype": {
        "add": {
         "!type": "fn(date: +Date, field: string, amount: number) -> +Date",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_add",
         "!doc": "Adds the specified amount of time to the this instance."
        },
        "compare": {
         "!type": "fn(d1: +Date, d2: +Date) -> bool",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_compare",
         "!doc": "Compare dates."
        },
        "subtract": {
         "!type": "fn(date: +Date, field: number, amount: number) -> +Date",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_subtract",
         "!doc": "Subtracts the specified amount of time from the this instance."
        },
        "before": {
         "!type": "fn(date: +Date, compareTo: +Date) -> bool",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_before",
         "!doc": "Determines whether a given date is before another date on the calendar."
        },
        "after": {
         "!type": "fn(date: +Date, compareTo: +Date) -> bool",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_after",
         "!doc": "Determines whether a given date is after another date on the calendar."
        },
        "between": {
         "!type": "fn(date: +Date, dateBegin: +Date, dateEnd: +Date) -> bool",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_between",
         "!doc": "Determines whether a given date is between two other dates on the calendar."
        },
        "getJan1": {
         "!type": "fn(calendarYear: number) -> +Date",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_getJan1",
         "!doc": "Retrieves a JavaScript Date object representing January 1 of any given year."
        },
        "getDayOffset": {
         "!type": "fn(d1: +Date, d2: +Date) -> number",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_getDayOffset",
         "!doc": "Calculates the number of days between the specified dates."
        },
        "getHoursOffset": {
         "!type": "fn(d1: +Date, d2: +Date) -> number",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_getHoursOffset",
         "!doc": "Calculates the number of hours between the specified dates."
        },
        "getMinutesOffset": {
         "!type": "fn(d1: +Date, d2: +Date) -> number",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_getMinutesOffset",
         "!doc": "Calculates the number of minutes between the specified dates."
        },
        "getSecondsOffset": {
         "!type": "fn(d1: +Date, d2: +Date) -> number",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_getSecondsOffset",
         "!doc": "Calculates the number of seconds between the specified dates."
        },
        "getWeekNumber": {
         "!type": "fn(date: +Date, firstDayOfWeek: number, janDate: number) -> number",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_getWeekNumber",
         "!doc": "Calculates the week number for the given date. Can currently support standard\nU.S. week numbers, based on Jan 1st defining the 1st week of the year, and\nISO8601 week numbers, based on Jan 4th defining the 1st week of the year."
        },
        "undefined": {
         "!type": "fn(dt: +Date, startOfWeek: number) -> +Date",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html",
         "!doc": "Get the first day of the week, for the give date."
        },
        "isWeekDay": {
         "!type": "fn(date: +Date) -> ?",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_isWeekDay",
         "!doc": "Chechs if the passed date is a week day."
        },
        "isTueOrThu": {
         "!type": "fn(date: +Date) -> ?",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_isTueOrThu",
         "!doc": "Chechs if the passed date is a Tuesday or Thursday."
        },
        "isMonWedOrFri": {
         "!type": "fn(date: +Date) -> ?",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_isMonWedOrFri",
         "!doc": "Chechs if the passed date is a Monday, Wednesday or Friday."
        },
        "isNextDay": {
         "!type": "fn(date1: +Date, date2: +Date) -> ?",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_isNextDay",
         "!doc": "Chechs if the {date2} is the next day."
        },
        "isNextDayBoundary": {
         "!type": "fn(date1: +Date, date2: +Date) -> ?",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_isNextDayBoundary",
         "!doc": "Chechs if the {date2} is the next day at 00:00:00."
        },
        "isDayOverlap": {
         "!type": "fn(date1: +Date, date2: +Date) -> ?",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_isDayOverlap",
         "!doc": "Chechs if the passed date is between two days."
        },
        "isToday": {
         "!type": "fn(date: +Date) -> ?",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_isToday",
         "!doc": "Chechs if the passed date is today."
        },
        "isSameMonth": {
         "!type": "fn(d1: +Date, d2: +Date) -> ?",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_isSameMonth",
         "!doc": "Chechs if the passed dates are in the same month."
        },
        "isYearOverlapWeek": {
         "!type": "fn(weekBeginDate: +Date) -> bool",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_isYearOverlapWeek",
         "!doc": "Determines if a given week overlaps two different years."
        },
        "isMonthOverlapWeek": {
         "!type": "fn(weekBeginDate: +Date) -> bool",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_isMonthOverlapWeek",
         "!doc": "Determines if a given week overlaps two different months."
        },
        "findMonthStart": {
         "!type": "fn(date: +Date) -> +Date",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_findMonthStart",
         "!doc": "Gets the first day of a month containing a given date."
        },
        "findMonthEnd": {
         "!type": "fn(date: +Date) -> +Date",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_findMonthEnd",
         "!doc": "Gets the last day of a month containing a given date."
        },
        "clearTime": {
         "!type": "fn(date: +Date) -> +Date",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_clearTime",
         "!doc": "Clears the time fields from a given date, effectively setting the time to 12 noon."
        },
        "safeClearTime": {
         "!type": "fn(date: +Date) -> +Date",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_safeClearTime",
         "!doc": "Clears the time fields from a given date, effectively setting the time to\n12 noon. This is \"safe\" because clones the date before clear, not affecting\nthe passed reference."
        },
        "toMidnight": {
         "!type": "fn(date: +Date) -> +Date",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_toMidnight",
         "!doc": "Set the time fields from a given date to midnight."
        },
        "clone": {
         "!type": "fn(date: +Date) -> +Date",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_clone",
         "!doc": "Clone the passed date object."
        },
        "getDate": {
         "!type": "fn(y: number, m: number, d: number) -> +Date",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.DataType.DateMath.html#method_getDate",
         "!doc": "Returns a new JavaScript Date object, representing the given year, month and date. Time fields (hr, min, sec, ms) on the new Date object\nare set to 0. The method allows Date instances to be created with the a year less than 100. \"new Date(year, month, date)\" implementations\nset the year to 19xx if a year (xx) which is less than 100 is provided.\n<p>\n<em>NOTE:</em>Validation on argument values is not performed. It is the callers responsibility to ensure\narguments are valid as per the ECMAScript-262 Date object specification for the new Date(year, month[, date]) constructor.\n</p>"
        }
       }
      }
     }
    }
   },
   "aui_delayed_task": {
    "!data": {
     "module": "aui-delayed-task"
    },
    "DelayedTask": {
     "!type": "fn(config: +config.DelayedTaskConfig, fn: fn(), scope: +yui.Object, args: ?)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/DelayedTask.html",
     "prototype": {
      "delay": {
       "!type": "fn(delay: number, newFn: fn(), newScope: +yui.Object, newArgs: ?)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/DelayedTask.html#method_delay",
       "!doc": "<p>This function is responsible to execute the user callback, passed in\nthe <code>constructor</code> after <code>delay</code> milliseconds.</p>\n\nExample:\n\n<pre><code>// executes after 1000ms the callback\ndelayed.delay(1000);</code></pre>"
      },
      "cancel": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/DelayedTask.html#method_cancel",
       "!doc": "Cancel the delayed task in case its running (i.e., clearInterval from\nthe current running <a href=\"DelayedTask.html#property__id\">_id</a>)."
      }
     }
    }
   },
   "aui_dialog": {
    "!data": {
     "module": "aui-dialog"
    },
    "Dialog": {
     "!type": "fn(config: +config.DialogConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Dialog.html",
     "prototype": {
      "!proto": "aui_panel.Panel.prototype",
      "alignToViewport": {
       "!type": "fn(int: ?, int: ?)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Dialog.html#method_alignToViewport",
       "!doc": "Aligns the Dialog to the viewport."
      },
      "close": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Dialog.html#method_close",
       "!doc": "Fires the close event to close the Dialog."
      }
     },
     "Dialog.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/Dialog.html#property_Dialog.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "Dialog.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/Dialog.html#property_Dialog.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Dialog."
     }
    },
    "DialogManager": {
     "!type": "fn(config: +config.DialogManagerConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/DialogManager.html",
     "prototype": {
      "!proto": "aui_overlay.OverlayManager.prototype",
      "findByChild": {
       "!type": "fn(child: +node.Node) -> +widget.Widget",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/DialogManager.html#method_findByChild",
       "!doc": "Find the <a href=\"Widget.html\">Widget</a> instance based on a child\nelement."
      },
      "closeByChild": {
       "!type": "fn(child: +node.Node) -> +aui_dialog.Dialog",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/DialogManager.html#method_closeByChild",
       "!doc": "<p>Invoke the <a href=\"Dialog.html#method_close\">close</a> method from\nthe Dialog which contains the <code>child</code> element.</p>\n\nExample:\n\n<pre><code>A.DialogManager.closeByChild(#dialogContent1);</code></pre>"
      },
      "refreshByChild": {
       "!type": "fn(child: +node.Node)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/DialogManager.html#method_refreshByChild",
       "!doc": "<p>Invoke the <a href=\"IOPlugin.html#method_start\">start</a> method\nfrom the <a href=\"IOPlugin.html\">IOPlugin</a> plugged on this Dialog\ninstance. If there is no IOPlugin plugged it does nothing.</p>\n\nExample:\n\n<pre><code>A.DialogManager.refreshByChild(#dialogContent1);</code></pre>"
      }
     }
    }
   },
   "aui_editable": {
    "!data": {
     "module": "aui-editable"
    },
    "Editable": {
     "!type": "fn(config: +config.EditableConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Editable.html",
     "prototype": {
      "!proto": "aui_component.Component.prototype",
      "cancel": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Editable.html#method_cancel",
       "!doc": "Cancel the editable. Return to the original state."
      },
      "save": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Editable.html#method_save",
       "!doc": "Save the editable. Fires the\n<a href=\"Editable.html#event_save\">save</a> event."
      }
     },
     "Editable.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/Editable.html#property_Editable.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "Editable.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/Editable.html#property_Editable.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Editable."
     }
    }
   },
   "aui_event": {
    "!data": {
     "module": "aui-event"
    },
    "AUI~event~input": {
     "!type": "fn()",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/AUI~event~input.html",
     "A.Node.DOM_EVENTS.input": {
      "!type": "+Event.Handle",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/AUI~event~input.html#property_A.Node.DOM_EVENTS.input",
      "!doc": "A.Node.DOM_EVENTS.input event."
     },
     "prototype": {
      "void();": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/AUI~event~input.html#method_void();"
      }
     }
    }
   },
   "aui_image_viewer": {
    "!data": {
     "module": "aui-image-viewer"
    },
    "ImageViewer": {
     "!type": "fn(config: +config.ImageViewerConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html",
     "prototype": {
      "!proto": "aui_overlay.OverlayBase.prototype",
      "close": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#method_close",
       "!doc": "Close the ImageViewer."
      },
      "getLink": {
       "!type": "fn(currentIndex: number) -> +node.Node",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#method_getLink",
       "!doc": "Get the Node reference to the <code>currentIndex</code> element from\nthe <a href=\"ImageViewer.html#config_links\">links</a>."
      },
      "getCurrentLink": {
       "!type": "fn() -> +node.Node",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#method_getCurrentLink",
       "!doc": "Get the current loaded node link reference."
      },
      "loadImage": {
       "!type": "fn(src: string)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#method_loadImage",
       "!doc": "Load an image <code>src</code> on the ImageViewer."
      },
      "hasLink": {
       "!type": "fn(currentIndex: number) -> bool",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#method_hasLink",
       "!doc": "Check if there is a node reference for the <code>currentIndex</code>."
      },
      "hasNext": {
       "!type": "fn() -> bool",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#method_hasNext",
       "!doc": "Check if there is a next element to navigate."
      },
      "hasPrev": {
       "!type": "fn() -> bool",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#method_hasPrev",
       "!doc": "Check if there is a previous element to navigate."
      },
      "hideControls": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#method_hideControls",
       "!doc": "Hide all UI controls (i.e., arrows, close icon etc)."
      },
      "hideMask": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#method_hideMask",
       "!doc": "Hide the <a href=\"OverlayMask.html\">OverlayMask</a> used when <a\nhref=\"ImageViewer.html#config_modal\">modal</a> is <code>true</code>."
      },
      "next": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#method_next",
       "!doc": "Load the previous image."
      },
      "preloadAllImages": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#method_preloadAllImages",
       "!doc": "Preload all images."
      },
      "preloadImage": {
       "!type": "fn(currentIndex: number)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#method_preloadImage",
       "!doc": "Preload an image based on its <code>index</code>."
      },
      "showLoading": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#method_showLoading",
       "!doc": "Show the loading icon."
      },
      "showMask": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#method_showMask",
       "!doc": "Show the the OverlayMask used on the <a\nhref=\"ImageViewer.html#config_modal\">modal</a>."
      },
      "show": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#method_show",
       "!doc": "Show the ImageViewer UI."
      }
     },
     "ImageViewer.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#property_ImageViewer.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "ImageViewer.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageViewer.html#property_ImageViewer.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the ImageViewer."
     }
    },
    "ImageGallery": {
     "!type": "fn(config: +config.ImageGalleryConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageGallery.html",
     "prototype": {
      "!proto": "aui_image_viewer.ImageViewer.prototype",
      "hidePaginator": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageGallery.html#method_hidePaginator",
       "!doc": "Hide the <a href=\"Paginator.html\">Paginator</a> with the thumbnails\nlist."
      },
      "pause": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageGallery.html#method_pause",
       "!doc": "Pause the slide show."
      },
      "play": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageGallery.html#method_play",
       "!doc": "Play the slide show."
      },
      "show": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageGallery.html#method_show",
       "!doc": "<p>Show the ImageGallery.</p>\n\n<p><strong>NOTE:</strong>Overloads the <a\nhref=\"ImageViewer.html\">ImageViewer</a> show method to not loadImage, the\nchangeRequest now is responsible to do that if we invoke the superclass\nshow method its loading the image, and the changeRequest loads again,\navoiding double request.</p>"
      },
      "showPaginator": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageGallery.html#method_showPaginator",
       "!doc": "Show the <a href=\"Paginator.html\">Paginator</a> with the thumbnails\nlist."
      }
     },
     "ImageGallery.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageGallery.html#property_ImageGallery.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "ImageGallery.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/ImageGallery.html#property_ImageGallery.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the ImageGallery."
     }
    }
   },
   "aui_io": {
    "!data": {
     "module": "aui-io"
    },
    "A": {
     "Plugin": {
      "IO": {
       "!type": "fn(config: +config.A.Plugin.IOConfig)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.Plugin.IO.html",
       "prototype": {
        "!proto": "aui_io.IORequest.prototype",
        "hideLoading": {
         "!type": "fn()",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.Plugin.IO.html#method_hideLoading",
         "!doc": "Invoke the <a href=\"OverlayMask.html#method_hide\">OverlayMask hide</a> method."
        },
        "setContent": {
         "!type": "fn()",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.Plugin.IO.html#method_setContent",
         "!doc": "Set the content of the <a href=\"A.Plugin.IO.html#config_node\">node</a>."
        },
        "showLoading": {
         "!type": "fn()",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.Plugin.IO.html#method_showLoading",
         "!doc": "Invoke the <a href=\"OverlayMask.html#method_show\">OverlayMask show</a> method."
        },
        "start": {
         "!type": "fn()",
         "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.Plugin.IO.html#method_start",
         "!doc": "Overload to the <a href=\"IORequest.html#method_start\">IORequest\nstart</a> method. Check if the <code>host</code> is already rendered,\notherwise wait to after render phase and to show the LoadingMask."
        }
       },
       "A.Plugin.IO.NAME": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.Plugin.IO.html#property_A.Plugin.IO.NAME",
        "!doc": "Static property provides a string to identify the class."
       },
       "A.Plugin.IO.NS": {
        "!type": "string",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.Plugin.IO.html#property_A.Plugin.IO.NS",
        "!doc": "Static property provides a string to identify the namespace."
       },
       "A.Plugin.IO.ATTRS": {
        "!type": "+yui.Object",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.Plugin.IO.html#property_A.Plugin.IO.ATTRS",
        "!doc": "Static property used to define the default attribute\nconfiguration for the A.Plugin.IO."
       }
      }
     },
     "io": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.io.html",
      "prototype": {
       "A.io.request": {
        "!type": "fn(uri: string, config: +config.A.io.requestConfig) -> +aui_io.IORequest",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.io.html#method_A.io.request",
        "!doc": "Static method to invoke the <a href=\"IORequest.html\">IORequest</a>. Likewise <a href=\"io.html#method_io\">io</a>."
       }
      }
     }
    },
    "IORequest": {
     "!type": "fn(config: +config.IORequestConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/IORequest.html",
     "prototype": {
      "!proto": "plugin.Plugin.Base.prototype",
      "start": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/IORequest.html#method_start",
       "!doc": "Starts the IO transaction. Used to refresh the content also."
      },
      "stop": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/IORequest.html#method_stop",
       "!doc": "Stops the IO transaction."
      }
     },
     "IORequest.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/IORequest.html#property_IORequest.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "IORequest.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/IORequest.html#property_IORequest.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the IORequest."
     }
    }
   },
   "aui_live_search": {
    "!data": {
     "module": "aui-live-search"
    },
    "LiveSearch": {
     "!type": "fn(config: +config.LiveSearchConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/LiveSearch.html",
     "prototype": {
      "!proto": "base.Base.prototype",
      "filter": {
       "!type": "fn(query: string) -> +yui.Array",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/LiveSearch.html#method_filter",
       "!doc": "Filter the <a href=\"LiveSearch.html#config_nodes\">nodes</a> based on\nthe input value."
      },
      "refreshIndex": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/LiveSearch.html#method_refreshIndex",
       "!doc": "Refreshes the <a href=\"LiveSearch.html#config_index\">index</a>."
      },
      "search": {
       "!type": "fn(value: string)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/LiveSearch.html#method_search",
       "!doc": "Searches for the user supplied value."
      }
     },
     "LiveSearch.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/LiveSearch.html#property_LiveSearch.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "LiveSearch.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/LiveSearch.html#property_LiveSearch.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the LiveSearch."
     }
    }
   },
   "aui_loading_mask": {
    "!data": {
     "module": "aui-loading-mask"
    },
    "LoadingMask": {
     "!type": "fn(config: +config.LoadingMaskConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/LoadingMask.html",
     "prototype": {
      "!proto": "plugin.Plugin.Base.prototype",
      "centerMessage": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/LoadingMask.html#method_centerMessage",
       "!doc": "Center the\n<a href=\"LoadingMask.html#config_messageEl\">messageEl</a> with the\n<a href=\"LoadingMask.html#config_target\">target</a> node."
      },
      "refreshMask": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/LoadingMask.html#method_refreshMask",
       "!doc": "Invoke the\n<a href=\"LoadingMask.html#property_overlayMask\">overlayMask</a>\n<code>refreshMask</code> method."
      },
      "hide": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/LoadingMask.html#method_hide",
       "!doc": "Invoke the\n<a href=\"LoadingMask.html#property_overlayMask\">overlayMask</a>\n<code>hide</code> method."
      },
      "show": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/LoadingMask.html#method_show",
       "!doc": "Invoke the\n<a href=\"LoadingMask.html#property_overlayMask\">overlayMask</a>\n<code>show</code> method."
      },
      "toggle": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/LoadingMask.html#method_toggle",
       "!doc": "Invoke the\n<a href=\"LoadingMask.html#property_overlayMask\">overlayMask</a>\n<code>toggle</code> method."
      }
     },
     "LoadingMask.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/LoadingMask.html#property_LoadingMask.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "LoadingMask.NS": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/LoadingMask.html#property_LoadingMask.NS",
      "!doc": "Static property provides a string to identify the namespace."
     },
     "LoadingMask.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/LoadingMask.html#property_LoadingMask.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the LoadingMask."
     }
    }
   },
   "aui_nested_list": {
    "!data": {
     "module": "aui-nested-list"
    },
    "NestedList": {
     "!type": "fn(config: +config.NestedListConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/NestedList.html",
     "prototype": {
      "!proto": "base.Base.prototype"
     },
     "NestedList.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/NestedList.html#property_NestedList.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "NestedList.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/NestedList.html#property_NestedList.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the NestedList."
     }
    }
   },
   "aui_node": {
    "!data": {
     "module": "aui-node"
    },
    "A": {
     "Node": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.Node.html",
      "prototype": {
       "ancestors": {
        "!type": "fn(selector: string) -> +dom.NodeList",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.Node.html#method_ancestors",
        "!doc": "<p>Returns the current ancestors of the node element filtered by a className.\nThis is an optimized method for finding ancestors by a specific CSS class name.</p>\n\nExample:\n\n<pre><code>\nA.one(#nodeId).ancestorsByClassName(aui-helper-hidden);\n</code></pre>"
       },
       "appendTo": {
        "!type": "fn(selector: +node.Node) -> !this",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.Node.html#method_appendTo",
        "!doc": "<p>Insert the node instance to the end of the <code>selector</code>\nelement.</p>\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\n// using another Node instance\nvar body = A.one(body);\nnode.appendTo(body);\n// using a CSS selector\nnode.appendTo(#container);\n</code></pre>"
       },
       "attr": {
        "!type": "fn(name: string, value: string) -> string",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.Node.html#method_attr",
        "!doc": "<p>Get or Set the value of an attribute for the first element in the\nset of matched elements. If only the <code>name</code> is passed it\nworks as a getter.</p>\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.attr(title, Setting a new title attribute);\n// Alert the value of the title attribute: Setting a new title attribute\nalert( node.attr(title) );\n</code></pre>"
       },
       "clone": {
        "!type": "fn() -> +node.Node",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.Node.html#method_clone",
        "!doc": "Normalizes the behavior of cloning a node, which by default should not clone\nthe events that are attached to it.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.clone().appendTo(body);\n</code></pre>"
       },
       "center": {
        "!type": "fn(val: +yui.Array) -> !this",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.Node.html#method_center",
        "!doc": "<p>Centralize the current Node instance with the passed\n<code>val</code> Array, Node, String, or Region, if not specified, the body will be\nused.</p>\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\n// Center the <code>node</code> with the <code>#container</code>.\nnode.center(#container);\n</code></pre>"
       },
       "empty": {
        "!type": "fn() -> !this",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.Node.html#method_empty",
        "!doc": "<p>This method removes not only child (and other descendant) elements,\nbut also any text within the set of matched elements. This is because,\naccording to the DOM specification, any string of text within an element\nis considered a child node of that element.</p>\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.empty();\n</code></pre>"
       },
       "getDOM": {
        "!type": "fn() -> +HTMLNode",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.Node.html#method_getDOM",
        "!doc": "Retrieves the DOM node bound to a Node instance. See\n<a href=\"Node.html#method_getDOMNode\">getDOMNode</a>."
       },
       "getBorderWidth": {
        "!type": "fn(sides: string) -> number",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.Node.html#method_getBorderWidth",
        "!doc": "Return the combined width of the border for the specified sides."
       }
      }
     },
     "NodeList": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.NodeList.html",
      "prototype": {
       "all": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.NodeList.html#method_all",
        "!doc": "See <a href=\"Node.html#method_all\">Node all</a>."
       },
       "first": {
        "!type": "fn() -> +node.Node",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.NodeList.html#method_first",
        "!doc": "Returns the first element in the node list collection."
       },
       "getDOM": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.NodeList.html#method_getDOM",
        "!doc": "See <a href=\"Node.html#method_getDOM\">Node getDOM</a>."
       },
       "last": {
        "!type": "fn() -> +node.Node",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.NodeList.html#method_last",
        "!doc": "Returns the last element in the node list collection."
       },
       "one": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.NodeList.html#method_one",
        "!doc": "See <a href=\"Node.html#method_one\">Node one</a>."
       },
       "getBody": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.NodeList.html#method_getBody",
        "!doc": "Get the body node. Shortcut to <code>A.one(body)</code>."
       },
       "getDoc": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.NodeList.html#method_getDoc",
        "!doc": "Get the document node. Shortcut to <code>A.one(document)</code>."
       },
       "getWin": {
        "!type": "fn()",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.NodeList.html#method_getWin",
        "!doc": "Get the window node. Shortcut to <code>A.one(window)</code>."
       }
      }
     },
     "HTML5": {
      "!type": "fn()",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.HTML5.html",
      "prototype": {
       "IECreateFix": {
        "!type": "fn(frag: +node.Node, content: string) -> +node.Node",
        "!url": "http://alloyui.com/versions/1.5.x/api/classes/A.HTML5.html#method_IECreateFix",
        "!doc": "Receives a <code>frag</code> and a HTML content. This method\nshivs the HTML5 nodes appended to a Node or fragment which is not\non the document yet."
       }
      }
     }
    }
   },
   "node": {
    "Node": {
     "!type": "fn(node: +DOMNode)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html",
     "prototype": {
      "getCenterXY": {
       "!type": "fn() -> +yui.Array",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method_getCenterXY",
       "!doc": "Gets the current center position of the node in page coordinates."
      },
      "getMargin": {
       "!type": "fn(sides: string) -> number",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method_getMargin",
       "!doc": "Return the combined size of the margin for the specified sides."
      },
      "getPadding": {
       "!type": "fn(sides: string) -> number",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method_getPadding",
       "!doc": "Return the combined width of the border for the specified sides."
      },
      "guid": {
       "!type": "fn(prefix: string) -> string",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method_guid",
       "!doc": "Set the id of the Node instance if the object does not have one. The\ngenerated id is based on a guid created by the\n<a href=\"YUI.html#method_stamp\">stamp</a> method."
      },
      "hover": {
       "!type": "fn(overFn: string, outFn: string) -> +node.Node",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method_hover",
       "!doc": "Create a hover interaction."
      },
      "html": {
       "!type": "fn(value: string)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method_html",
       "!doc": "<p>Get or Set the HTML contents of the node. If the <code>value</code>\nis passed its set the content of the element, otherwise it works as a\ngetter for the current content.</p>\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.html(Setting new HTML);\n// Alert the value of the current content\nalert( node.html() );\n</code></pre>"
      },
      "undefined": {
       "!type": "fn() -> string",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html",
       "!doc": "Gets the outerHTML of a node, which islike innerHTML, except that it\nactually contains the HTML of the node itself."
      },
      "placeAfter": {
       "!type": "fn(newNode: +node.Node) -> !this",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method_placeAfter",
       "!doc": "<p>Inserts a <code>newNode</code> after the node instance (i.e., as the next\nsibling). If the reference node has no parent, then does nothing.</p>\n\nExample:\n\n<pre><code>var titleNode = A.one(#titleNode);\nvar descriptionNode = A.one(#descriptionNode);\n// the description is usually shown after the title\ntitleNode.placeAfter(descriptionNode);\n</code></pre>"
      },
      "placeBefore": {
       "!type": "fn(newNode: +node.Node) -> !this",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method_placeBefore",
       "!doc": "<p>Inserts a <code>newNode</code> before the node instance (i.e., as the previous\nsibling). If the reference node has no parent, then does nothing.</p>\n\nExample:\n\n<pre><code>var descriptionNode = A.one(#descriptionNode);\nvar titleNode = A.one(#titleNode);\n// the title is usually shown before the description\ndescriptionNode.placeBefore(titleNode);\n</code></pre>"
      },
      "prependTo": {
       "!type": "fn(selector: +node.Node) -> !this",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method_prependTo",
       "!doc": "<p>Inserts the node instance to the begining of the <code>selector</code>\nnode (i.e., insert before the <code>firstChild</code> of the\n<code>selector</code>).</p>\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.prependTo(body);\n</code></pre>"
      },
      "radioClass": {
       "!type": "fn(cssClass: string) -> !this",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method_radioClass",
       "!doc": "Add one or more CSS classes to an element and remove the class(es)\nfrom the siblings of the element."
      },
      "resetId": {
       "!type": "fn(prefix: string) -> !this",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method_resetId",
       "!doc": "Generate an unique identifier and reset the id attribute of the node\ninstance using the new value. Invokes the\n<a href=\"Node.html#method_guid\">guid</a>."
      },
      "selectText": {
       "!type": "fn(start: number, end: number)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method_selectText",
       "!doc": "Selects a substring of text inside of the input element."
      },
      "selectable": {
       "!type": "fn() -> !this",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method_selectable",
       "!doc": "Enables text selection for this element (normalized across browsers)."
      },
      "swallowEvent": {
       "!type": "fn(eventName: string, preventDefault: bool) -> !this",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method_swallowEvent",
       "!doc": "<p>Stops the specified event(s) from bubbling and optionally prevents the\ndefault action.</p>\n\nExample:\n\n<pre><code>var anchor = A.one(a#anchorId);\nanchor.swallowEvent(click);\n</code></pre>"
      },
      "text": {
       "!type": "fn(text: string)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method_text",
       "!doc": "<p>Get or Set the combined text contents of the node instance,\nincluding its descendants. If the <code>text</code>\nis passed its set the content of the element, otherwise it works as a\ngetter for the current content.</p>\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.text(Setting new text content);\n// Alert the value of the current content\nalert( node.text() );\n</code></pre>"
      },
      "toggle": {
       "!type": "fn(on: bool, callback: fn()) -> !this",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method_toggle",
       "!doc": "<p>Displays or hide the node instance.</p>\n\n<p><string>NOTE:</string> This method assume that your node were hidden\nbecause of the aui-helper-hidden css class were being used. This wont\nmanipulate the inline <code>style.display</code> property.</p>"
      },
      "unselectable": {
       "!type": "fn() -> !this",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method_unselectable",
       "!doc": "Disables text selection for this element (normalized across browsers)."
      },
      "val": {
       "!type": "fn(value: string)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method_val",
       "!doc": "<p>Get or Set the value attribute of the node instance. If the\n<code>value</code> is passed its set the value of the element,\notherwise it works as a getter for the current value.</p>\n\nExample:\n\n<pre><code>var input = A.one(#inputId);\ninput.val(Setting new input value);\n// Alert the value of the input\nalert( input.val() );\n</code></pre>"
      },
      "_getBoxStyleAsNumber": {
       "!type": "fn(sides: string, map: string) -> number",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method__getBoxStyleAsNumber",
       "!doc": "Return the combined size of the box style for the specified sides."
      },
      "hide": {
       "!type": "fn(cssClass: string) -> !this",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method_hide",
       "!doc": "<p>Hide the node adding a css class on it. If <code>cssClass</code> is not\npassed as argument, the className aui-helper-hidden will be used by\ndefault.</p>\n\n<p><string>NOTE:</string> This method assume that your node were visible\nbecause the absence of aui-helper-hidden css class. This wont\nmanipulate the inline <code>style.display</code> property.</p>"
      },
      "show": {
       "!type": "fn(cssClass: string) -> !this",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method_show",
       "!doc": "<p>Show the node removing a css class used to hide it. Use the same\nclassName added using the <a href=\"A.Node.html#method_hide\">hide</a>\nmethod. If <code>cssClass</code> is not passed as argument, the\nclassName aui-helper-hidden will be used by default.</p>\n\n<p><string>NOTE:</string> This method assume that your node were hidden\nbecause of the aui-helper-hidden css class were being used. This wont\nmanipulate the inline <code>style.display</code> property.</p>"
      },
      "width": {
       "!type": "fn() -> number",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method_width",
       "!doc": "Returns the width of the content, not including\nthe padding, border or margin. If a width is passed,\nthe nodes overall width is set to that size.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.width(); //returns content width\nnode.width(100); // sets box width\n</code></pre>"
      },
      "height": {
       "!type": "fn() -> number",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method_height",
       "!doc": "Returns the height of the content, not including\nthe padding, border or margin. If a height is passed,\nthe nodes overall height is set to that size.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.height(); //returns content height\nnode.height(100); // sets box height\n</code></pre>"
      },
      "innerWidth": {
       "!type": "fn() -> number",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method_innerWidth",
       "!doc": "Returns the size of the box from inside of the border,\nwhich is the offsetWidth plus the padding on the left and right.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.innerWidth();\n</code></pre>"
      },
      "innerHeight": {
       "!type": "fn() -> number",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method_innerHeight",
       "!doc": "Returns the size of the box from inside of the border,\nwhich is offsetHeight plus the padding on the top and bottom.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.innerHeight();\n</code></pre>"
      },
      "outerWidth": {
       "!type": "fn() -> number",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method_outerWidth",
       "!doc": "Returns the outer width of the box including the border,\nif true is passed as the first argument, the margin is included.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.outerWidth();\nnode.outerWidth(true); // includes margin\n</code></pre>"
      },
      "outerHeight": {
       "!type": "fn() -> number",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Node.html#method_outerHeight",
       "!doc": "Returns the outer height of the box including the border,\nif true is passed as the first argument, the margin is included.\n\nExample:\n\n<pre><code>var node = A.one(#nodeId);\nnode.outerHeight();\nnode.outerHeight(true); // includes margin\n</code></pre>"
      }
     }
    }
   },
   "aui_overlay": {
    "!data": {
     "module": "aui-overlay"
    },
    "OverlayContextPanel": {
     "!type": "fn(config: +config.OverlayContextPanelConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContextPanel.html",
     "prototype": {
      "!proto": "aui_overlay.OverlayContext.prototype",
      "align": {
       "!type": "fn(node: +node.Node, points: [+yui.Array])",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContextPanel.html#method_align",
       "!doc": "Aligns the OverlayContextPanel to the provided node (or viewport) using the\nprovided points. Inherited from\n<a href=\"Overlay.html#method_align\">Overlay</a>."
      },
      "fixPointerColor": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContextPanel.html#method_fixPointerColor",
       "!doc": "OverlayContextPanel uses a imageless arrow, which involves some CSS technics.\nThis method is meant to fix the color of the borders of the arrow."
      },
      "getAlignPoint": {
       "!type": "fn() -> string",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContextPanel.html#method_getAlignPoint",
       "!doc": "Normalize the align point value. The align point cc is not a valid\nposition for the arrow and then its normalized to the bc point."
      },
      "hide": {
       "!type": "fn(event: +event_custom.EventFacade)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContextPanel.html#method_hide",
       "!doc": "Hides the OverlayContextPanel."
      }
     },
     "OverlayContextPanel.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContextPanel.html#property_OverlayContextPanel.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "OverlayContextPanel.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContextPanel.html#property_OverlayContextPanel.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the OverlayContextPanel."
     }
    },
    "OverlayContext": {
     "!type": "fn(config: +config.OverlayContextConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContext.html",
     "prototype": {
      "!proto": "aui_overlay.OverlayBase.prototype",
      "hide": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContext.html#method_hide",
       "!doc": "Shows the OverlayContext."
      },
      "toggle": {
       "!type": "fn(event: +event_custom.EventFacade)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContext.html#method_toggle",
       "!doc": "Toggles visibility of the OverlayContext."
      },
      "clearIntervals": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContext.html#method_clearIntervals",
       "!doc": "Clear the intervals to show or hide the OverlayContext. See\n<a href=\"OverlayContext.html#config_hideDelay\">hideDelay</a> and\n<a href=\"OverlayContext.html#config_showDelay\">showDelay</a>."
      },
      "refreshAlign": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContext.html#method_refreshAlign",
       "!doc": "Refreshes the alignment of the OverlayContext with the\n<a href=\"OverlayContext.html#config_currentNode\">currentNode</a>. See\nalso <a href=\"OverlayContext.html#config_align\">align</a>."
      },
      "updateCurrentNode": {
       "!type": "fn(event: +event_custom.EventFacade)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContext.html#method_updateCurrentNode",
       "!doc": "Update the\n<a href=\"OverlayContext.html#config_currentNode\">currentNode</a> with the\n<a href=\"OverlayContext.html#config_align\">align</a> node or the\nevent.currentTarget and in last case with the first item of the\n<a href=\"OverlayContext.html#config_trigger\">trigger</a>."
      }
     },
     "OverlayContext.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContext.html#property_OverlayContext.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "OverlayContext.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayContext.html#property_OverlayContext.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the OverlayContext."
     }
    },
    "OverlayManager": {
     "!type": "fn(config: +config.OverlayManagerConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayManager.html",
     "prototype": {
      "!proto": "base.Base.prototype",
      "bringToTop": {
       "!type": "fn(overlay: +overlay.Overlay)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayManager.html#method_bringToTop",
       "!doc": "Set the passed overlay zIndex to the highest value."
      },
      "register": {
       "!type": "fn(overlay: +overlay.Overlay) -> +yui.Array",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayManager.html#method_register",
       "!doc": "Register the passed <a href=\"Overlay.html\">Overlay</a> to this\nOverlayManager."
      },
      "remove": {
       "!type": "fn(overlay: +overlay.Overlay) -> +Null",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayManager.html#method_remove",
       "!doc": "Remove the passed <a href=\"Overlay.html\">Overlay</a> from this\nOverlayManager."
      },
      "each": {
       "!type": "fn(fn: fn()) -> +Null",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayManager.html#method_each",
       "!doc": "Loop through all registered <a href=\"Overlay.html\">Overlay</a> and\nexecute a callback."
      },
      "showAll": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayManager.html#method_showAll",
       "!doc": "Invoke the <a href=\"Overlay.html#method_show\">show</a> method from\nall registered Overlays."
      },
      "hideAll": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayManager.html#method_hideAll",
       "!doc": "Invoke the <a href=\"Overlay.html#method_hide\">hide</a> method from\nall registered Overlays."
      },
      "sortByZIndexDesc": {
       "!type": "fn(a: +overlay.Overlay, b: +overlay.Overlay) -> number",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayManager.html#method_sortByZIndexDesc",
       "!doc": "zIndex comparator. Used on Array.sort."
      }
     },
     "OverlayManager.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayManager.html#property_OverlayManager.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "OverlayManager.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayManager.html#property_OverlayManager.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the OverlayManager."
     }
    },
    "OverlayMask": {
     "!type": "fn(config: +config.OverlayMaskConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayMask.html",
     "prototype": {
      "!proto": "aui_overlay.OverlayBase.prototype",
      "getTargetSize": {
       "!type": "fn() -> +yui.Object",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayMask.html#method_getTargetSize",
       "!doc": "Get the size of the\n<a href=\"OverlayMask.html#config_target\">target</a>. Used to dimension\nthe mask node."
      },
      "refreshMask": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayMask.html#method_refreshMask",
       "!doc": "Repaint the OverlayMask UI, respecting the\n<a href=\"OverlayMask.html#config_target\">target</a> size and the\n<a href=\"OverlayMask.html#config_alignPoints\">alignPoints</a>."
      }
     },
     "OverlayMask.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayMask.html#property_OverlayMask.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "OverlayMask.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/OverlayMask.html#property_OverlayMask.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the OverlayMask."
     }
    }
   },
   "aui_paginator": {
    "!data": {
     "module": "aui-paginator"
    },
    "Paginator": {
     "!type": "fn(config: +config.PaginatorConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html",
     "prototype": {
      "!proto": "base.Base.prototype",
      "calculateRange": {
       "!type": "fn(name: +Type) -> +yui.Object",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#method_calculateRange",
       "!doc": "Create a range to display on the pageLinks, keep the current page on\ncenter."
      },
      "changeRequest": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#method_changeRequest",
       "!doc": "Fires <a href=\"Paginator.html#event_changeRequest\">changeRequest</a>\nevent. This is the most important event because its responsible to\nupdate the UI, invoked <code>.setState(newState)</code> to update the\nUI."
      },
      "eachContainer": {
       "!type": "fn(fn: fn())",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#method_eachContainer",
       "!doc": "Loop through all\n<a href=\"Paginator.html#config_containers\">containers</a> and execute the\npassed callback."
      },
      "hasNextPage": {
       "!type": "fn() -> bool",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#method_hasNextPage",
       "!doc": "Check if there is a next page."
      },
      "hasPage": {
       "!type": "fn(page: number) -> bool",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#method_hasPage",
       "!doc": "Check if the <code>page</code> exists."
      },
      "hasPrevPage": {
       "!type": "fn() -> bool",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#method_hasPrevPage",
       "!doc": "Check if there is a previous page."
      },
      "setState": {
       "!type": "fn(v: +yui.Object)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#method_setState",
       "!doc": "Public setter for <a href=\"Paginator.html#config_state\">state</a>."
      }
     },
     "Paginator.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#property_Paginator.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "Paginator.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/Paginator.html#property_Paginator.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Paginator."
     }
    }
   },
   "aui_panel": {
    "!data": {
     "module": "aui-panel"
    },
    "Panel": {
     "!type": "fn(object: +yui.Object)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Panel.html",
     "prototype": {
      "!proto": "widget.Widget.prototype",
      "collapse": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Panel.html#method_collapse",
       "!doc": "Collapse the panel setting the\n<a href=\"Panel.html#config_collapsed\">collapsed</a> attribute to\n<code>true</code>."
      },
      "expand": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Panel.html#method_expand",
       "!doc": "Expand the panel setting the\n<a href=\"Panel.html#config_collapsed\">collapsed</a> attribute to\n<code>false</code>."
      },
      "toggle": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Panel.html#method_toggle",
       "!doc": "Toggle the visibility of the Panel toggling the value of the\n<a href=\"Widget.html#config_visible\">visible</a> attribute."
      },
      "toggleCollapse": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Panel.html#method_toggleCollapse",
       "!doc": "Toggle the <a href=\"Panel.html#config_collapsed\">collapsed</a> value.\nExpanding and collapsing the Panel."
      }
     },
     "Panel.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/Panel.html#property_Panel.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Panel."
     }
    }
   },
   "aui_parse_content": {
    "!data": {
     "module": "aui-parse-content"
    },
    "ParseContent": {
     "!type": "fn(config: +config.ParseContentConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ParseContent.html",
     "prototype": {
      "!proto": "plugin.Plugin.Base.prototype",
      "globalEval": {
       "!type": "fn(data: string)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/ParseContent.html#method_globalEval",
       "!doc": "Global eval the <data>data</data> passed."
      },
      "parseContent": {
       "!type": "fn(content: string) -> string",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/ParseContent.html#method_parseContent",
       "!doc": "Extract the <code>script</code> tags from the string content and\nevaluate the chunks."
      }
     },
     "ParseContent.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/ParseContent.html#property_ParseContent.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "ParseContent.NS": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/ParseContent.html#property_ParseContent.NS",
      "!doc": "Static property provides a string to identify the namespace."
     },
     "ParseContent.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/ParseContent.html#property_ParseContent.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the ParseContent."
     }
    }
   },
   "aui_portal_layout": {
    "!data": {
     "module": "aui-portal-layout"
    },
    "PortalLayout": {
     "!type": "fn(config: +config.PortalLayoutConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/PortalLayout.html",
     "prototype": {
      "!proto": "base.Base.prototype"
     },
     "PortalLayout.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/PortalLayout.html#property_PortalLayout.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "PortalLayout.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/PortalLayout.html#property_PortalLayout.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the PortalLayout."
     }
    }
   },
   "aui_progressbar": {
    "!data": {
     "module": "aui-progressbar"
    },
    "ProgressBar": {
     "!type": "fn(config: +config.ProgressBarConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ProgressBar.html",
     "prototype": {
      "!proto": "aui_component.Component.prototype"
     },
     "ProgressBar.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/ProgressBar.html#property_ProgressBar.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "ProgressBar.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/ProgressBar.html#property_ProgressBar.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the ProgressBar."
     },
     "ProgressBar.HTML_PARSER": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/ProgressBar.html#property_ProgressBar.HTML_PARSER",
      "!doc": "Object hash, defining how attribute values are to be parsed from\nmarkup contained in the widgets content box."
     }
    }
   },
   "aui_rating": {
    "!data": {
     "module": "aui-rating"
    },
    "Rating": {
     "!type": "fn(config: +config.RatingConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Rating.html",
     "prototype": {
      "!proto": "aui_component.Component.prototype",
      "clearSelection": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Rating.html#method_clearSelection",
       "!doc": "Clear all selected starts to the default state."
      },
      "select": {
       "!type": "fn(index: number)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Rating.html#method_select",
       "!doc": "Selects the <code>index</code> Rating element."
      },
      "fillTo": {
       "!type": "fn(index: number, className: string)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Rating.html#method_fillTo",
       "!doc": "Add the <code>className</code> on the the <code>index</code> element\nand all the previous Rating elements."
      },
      "indexOf": {
       "!type": "fn(elem: +node.Node) -> number",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Rating.html#method_indexOf",
       "!doc": "Finds the index of the <code>elem</code>."
      }
     },
     "Rating.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/Rating.html#property_Rating.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "Rating.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/Rating.html#property_Rating.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Rating."
     },
     "StarRating.HTML_PARSER": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/Rating.html#property_StarRating.HTML_PARSER",
      "!doc": "Object hash, defining how attribute values are to be parsed from\nmarkup contained in the widgets content box."
     }
    },
    "ThumbRating": {
     "!type": "fn(config: +config.ThumbRatingConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/ThumbRating.html",
     "prototype": {
      "!proto": "aui_rating.Rating.prototype",
      "fillTo": {
       "!type": "fn(index: number, className: string)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/ThumbRating.html#method_fillTo",
       "!doc": "Add the <code>className</code> on the the <code>index</code> element\nand all the previous Rating elements."
      }
     },
     "ThumbRating.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/ThumbRating.html#property_ThumbRating.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "ThumbRating.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/ThumbRating.html#property_ThumbRating.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the ThumbRating."
     }
    }
   },
   "aui_resize": {
    "!data": {
     "module": "aui-resize"
    },
    "Resize": {
     "!type": "fn(config: +config.ResizeConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Resize.html",
     "prototype": {
      "!proto": "base.Base.prototype",
      "changeHeightHandles": {
       "!type": "bool",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Resize.html#property_changeHeightHandles",
       "!doc": "Whether the handle being dragged can change the height."
      },
      "changeLeftHandles": {
       "!type": "bool",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Resize.html#property_changeLeftHandles",
       "!doc": "Whether the handle being dragged can change the left."
      },
      "changeTopHandles": {
       "!type": "bool",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Resize.html#property_changeTopHandles",
       "!doc": "Whether the handle being dragged can change the top."
      },
      "changeWidthHandles": {
       "!type": "bool",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Resize.html#property_changeWidthHandles",
       "!doc": "Whether the handle being dragged can change the width."
      },
      "delegate": {
       "!type": "+yui.Object",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Resize.html#property_delegate",
       "!doc": "Store DD.Delegate reference for the respective Resize instance."
      },
      "eachHandle": {
       "!type": "fn(fn: fn())",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Resize.html#method_eachHandle",
       "!doc": "<p>Loop through each handle which is being used and executes a callback.</p>\n<p>Example:</p>\n<pre><code>instance.eachHandle(\n     function(handleName, index) { ... }\n );</code></pre>"
      }
     },
     "Resize.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/Resize.html#property_Resize.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "Resize.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/Resize.html#property_Resize.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Resize."
     }
    }
   },
   "aui_textboxlist": {
    "!data": {
     "module": "aui-textboxlist"
    },
    "Textboxlist": {
     "!type": "fn(config: +config.TextboxlistConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Textboxlist.html",
     "prototype": {
      "!proto": "aui_autocomplete.AutoComplete.prototype",
      "constrainBorderInfo": {
       "!type": "+yui.Object",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Textboxlist.html#property_constrainBorderInfo",
       "!doc": "Cache the border widths of the contrain node if constrain\noption is being used."
      },
      "undefined": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Textboxlist.html",
       "!doc": "Mapping UTF-8 groups of characters. Based on Steven Levithans XRegExp\nproject (http://xregexp.com)"
      },
      "match": {
       "!type": "fn(str: string, group: string, flags: string)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Textboxlist.html#method_match",
       "!doc": "Tests a string against an Unicode pattern. Returns the first match."
      },
      "test": {
       "!type": "fn(str: string, group: string, flags: string)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Textboxlist.html#method_test",
       "!doc": "Tests a string against an Unicode pattern. Returns true or false."
      }
     },
     "Textboxlist.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/Textboxlist.html#property_Textboxlist.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "Textboxlist.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/Textboxlist.html#property_Textboxlist.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Textboxlist."
     }
    }
   },
   "aui_toolbar": {
    "!data": {
     "module": "aui-toolbar"
    }
   },
   "aui_tooltip": {
    "!data": {
     "module": "aui-tooltip"
    },
    "Tooltip": {
     "!type": "fn(config: +config.TooltipConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/Tooltip.html",
     "prototype": {
      "!proto": "aui_overlay.OverlayContextPanel.prototype",
      "undefined": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Tooltip.html",
       "!doc": "Prevents display:none from being applied to the tooltip when it is hidden because we\ncannot properly align a hidden tooltip with display:none since we cant accurately\nget its computed x and y position."
      },
      "show": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/Tooltip.html#method_show",
       "!doc": "Over-ride the <code>show</code> to invoke the\n<a href=\"Tooltip.html#method__loadBodyContentFromTitle\">_loadBodyContentFromTitle</a>.\nSee <a href=\"OverlayContext.html#config_show\">OverlayContext show</a>."
      }
     },
     "Tooltip.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/Tooltip.html#property_Tooltip.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "Tooltip.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/Tooltip.html#property_Tooltip.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the Tooltip."
     }
    }
   },
   "aui_tree": {
    "!data": {
     "module": "aui-tree"
    },
    "TreeData": {
     "!type": "fn(config: +config.TreeDataConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html",
     "prototype": {
      "!proto": "base.Base.prototype",
      "getNodeById": {
       "!type": "fn(uid: string) -> +aui_tree.TreeNode",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#method_getNodeById",
       "!doc": "Get a TreeNode by id."
      },
      "isRegistered": {
       "!type": "fn(node: +aui_tree.TreeNode) -> bool",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#method_isRegistered",
       "!doc": "Whether the TreeNode is registered on this TreeData."
      },
      "updateReferences": {
       "!type": "fn(TreeNode: +node.Node, TreeNode: +ParentNode, TreeView: +OwnerTree)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#method_updateReferences",
       "!doc": "Update the references of the passed TreeNode."
      },
      "refreshIndex": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#method_refreshIndex",
       "!doc": "Refresh the index (i.e. re-index all nodes)."
      },
      "registerNode": {
       "!type": "fn(node: +aui_tree.TreeNode)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#method_registerNode",
       "!doc": "Register the passed TreeNode on this TreeData."
      },
      "updateIndex": {
       "!type": "fn(index: +yui.Object)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#method_updateIndex",
       "!doc": "Update the <a href=\"TreeData.html#config_index\">index</a> attribute value."
      },
      "unregisterNode": {
       "!type": "fn(node: +aui_tree.TreeNode)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#method_unregisterNode",
       "!doc": "Unregister the passed TreeNode from this TreeData."
      },
      "collapseAll": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#method_collapseAll",
       "!doc": "Collapse all children of the TreeData."
      },
      "expandAll": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#method_expandAll",
       "!doc": "Expand all children of the TreeData."
      },
      "selectAll": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#method_selectAll",
       "!doc": "Unselect all children of the TreeData."
      },
      "eachChildren": {
       "!type": "fn(fn: fn())",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#method_eachChildren",
       "!doc": "Loop each parent node and execute the <code>fn</code> callback."
      },
      "bubbleEvent": {
       "!type": "fn(eventType: string, args: +yui.Array, cancelBubbling: bool, stopActionPropagation: bool)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#method_bubbleEvent",
       "!doc": "Bubble event to all parent nodes."
      },
      "createNode": {
       "!type": "fn(options: +yui.Object) -> +aui_tree.TreeNode",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#method_createNode",
       "!doc": "Create a TreeNode instance."
      },
      "appendChild": {
       "!type": "fn(node: +aui_tree.TreeNode, cancelBubbling: bool)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#method_appendChild",
       "!doc": "Append a child node to the TreeData."
      },
      "item": {
       "!type": "fn(index: number) -> +aui_tree.TreeNode",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#method_item",
       "!doc": "Get a TreeNode children by index."
      },
      "indexOf": {
       "!type": "fn(node: +aui_tree.TreeNode) -> number",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#method_indexOf",
       "!doc": "Index of the passed TreeNode on the <a\nhref=\"TreeData.html#config_children\">children</a> attribute."
      },
      "hasChildNodes": {
       "!type": "fn() -> bool",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#method_hasChildNodes",
       "!doc": "Whether the TreeData contains children or not."
      },
      "getChildren": {
       "!type": "fn(deep: bool) -> +yui.Array",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#method_getChildren",
       "!doc": "Get an Array of the children nodes of the current TreeData."
      },
      "getEventOutputMap": {
       "!type": "fn(node: +aui_tree.TreeData) -> +yui.Object",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#method_getEventOutputMap",
       "!doc": "Get an object containing metadata for the custom events."
      },
      "removeChild": {
       "!type": "fn(node: +aui_tree.TreeData)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#method_removeChild",
       "!doc": "Remove the passed <code>node</code> from the current TreeData."
      },
      "_removeChild": {
       "!type": "fn(node: +aui_tree.TreeData)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#method__removeChild",
       "!doc": "Remove the passed <code>node</code> from the current TreeData."
      },
      "empty": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#method_empty",
       "!doc": "Delete all children of the current TreeData."
      },
      "insert": {
       "!type": "fn(treeNode: +aui_tree.TreeNode, refTreeNode: +aui_tree.TreeNode, where: +aui_tree.TreeNode)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#method_insert",
       "!doc": "Insert <code>treeNode</code> before or after the <code>refTreeNode</code>."
      },
      "insertAfter": {
       "!type": "fn(treeNode: +aui_tree.TreeNode, refTreeNode: +aui_tree.TreeNode)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#method_insertAfter",
       "!doc": "Insert <code>treeNode</code> after the <code>refTreeNode</code>."
      },
      "insertBefore": {
       "!type": "fn(treeNode: +aui_tree.TreeNode, refTreeNode: +aui_tree.TreeNode)",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#method_insertBefore",
       "!doc": "Insert <code>treeNode</code> before the <code>refTreeNode</code>."
      },
      "getNodeByChild": {
       "!type": "fn(child: +node.Node) -> +aui_tree.TreeNode",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#method_getNodeByChild",
       "!doc": "Get a TreeNode instance by a child DOM Node."
      }
     },
     "TreeData.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#property_TreeData.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "TreeData.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeData.html#property_TreeData.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the TreeData."
     }
    },
    "TreeNode": {
     "!type": "fn(config: +config.TreeNodeConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNode.html",
     "prototype": {
      "!proto": "aui_tree.TreeData.prototype",
      "collapse": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNode.html#method_collapse",
       "!doc": "Collapse the current TreeNode."
      },
      "contains": {
       "!type": "fn(node: +aui_tree.TreeNode) -> bool",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNode.html#method_contains",
       "!doc": "Check if the current TreeNode contains the passed <code>node</code>."
      },
      "expand": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNode.html#method_expand",
       "!doc": "Expand the current TreeNode."
      },
      "getDepth": {
       "!type": "fn() -> number",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNode.html#method_getDepth",
       "!doc": "Get the depth of the current TreeNode."
      },
      "isSelected": {
       "!type": "fn() -> bool",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNode.html#method_isSelected",
       "!doc": "Whether the current TreeNode is selected or not."
      },
      "isLeaf": {
       "!type": "fn() -> bool",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNode.html#method_isLeaf",
       "!doc": "Whether the current TreeNode is ancestor of the passed <code>node</code> or not."
      },
      "toggle": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNode.html#method_toggle",
       "!doc": "Toggle the current TreeNode, <code>collapsed</code> or <code>expanded</code>."
      },
      "A.TreeNode.nodeTypes": {
       "!type": "+yui.Object",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNode.html#property_A.TreeNode.nodeTypes",
       "!doc": "TreeNode types hash map.\n\n<pre><code>A.TreeNode.nodeTypes = {\n radio: A.TreeNodeRadio,\n task: A.TreeNodeTask,\n check: A.TreeNodeCheck,\n node: A.TreeNode,\n io: A.TreeNodeIO\n};</code></pre>"
      }
     },
     "TreeNode.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNode.html#property_TreeNode.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "TreeNode.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNode.html#property_TreeNode.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the TreeNode."
     }
    },
    "TreeNodeIO": {
     "!type": "fn(config: +config.TreeNodeIOConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNodeIO.html",
     "prototype": {
      "!proto": "aui_tree.TreeNode.prototype",
      "initIO": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNodeIO.html#method_initIO",
       "!doc": "Initialize the IO transaction setup on the <a\nhref=\"TreeNode.html#config_io\">io</a> attribute."
      },
      "ioStartHandler": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNodeIO.html#method_ioStartHandler",
       "!doc": "IO Start handler."
      },
      "ioCompleteHandler": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNodeIO.html#method_ioCompleteHandler",
       "!doc": "IO Complete handler."
      },
      "ioSuccessHandler": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNodeIO.html#method_ioSuccessHandler",
       "!doc": "IO Success handler."
      },
      "ioFailureHandler": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNodeIO.html#method_ioFailureHandler",
       "!doc": "IO Failure handler."
      }
     },
     "TreeNode.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNodeIO.html#property_TreeNode.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "TreeNode.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNodeIO.html#property_TreeNode.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the TreeNode."
     }
    },
    "TreeNodeCheck": {
     "!type": "fn(config: +config.TreeNodeCheckConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNodeCheck.html",
     "prototype": {
      "!proto": "aui_tree.TreeNodeIO.prototype",
      "check": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNodeCheck.html#method_check",
       "!doc": "Check the current TreeNode."
      },
      "uncheck": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNodeCheck.html#method_uncheck",
       "!doc": "Uncheck the current TreeNode."
      },
      "toggleCheck": {
       "!type": "fn()",
       "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNodeCheck.html#method_toggleCheck",
       "!doc": "Toggle the check status of the current TreeNode."
      }
     },
     "TreeNode.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNodeCheck.html#property_TreeNode.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "TreeNode.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNodeCheck.html#property_TreeNode.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the TreeNode."
     }
    },
    "TreeNodeTask": {
     "!type": "fn(config: +config.TreeNodeTaskConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNodeTask.html",
     "prototype": {
      "!proto": "aui_tree.TreeNodeCheck.prototype"
     },
     "TreeNode.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNodeTask.html#property_TreeNode.NAME",
      "!doc": "Static property provides a string to identify the class."
     }
    },
    "TreeNodeRadio": {
     "!type": "fn(config: +config.TreeNodeRadioConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNodeRadio.html",
     "prototype": {
      "!proto": "aui_tree.TreeNodeTask.prototype"
     },
     "TreeNode.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeNodeRadio.html#property_TreeNode.NAME",
      "!doc": "Static property provides a string to identify the class."
     }
    },
    "TreeView": {
     "!type": "fn(config: +config.TreeViewConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeView.html",
     "prototype": {
      "!proto": "aui_tree.TreeData.prototype"
     },
     "TreeView.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeView.html#property_TreeView.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "TreeView.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeView.html#property_TreeView.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the TreeView."
     }
    },
    "TreeViewDD": {
     "!type": "fn(config: +config.TreeViewDDConfig)",
     "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeViewDD.html",
     "prototype": {
      "!proto": "aui_tree.TreeView.prototype"
     },
     "TreeViewDD.NAME": {
      "!type": "string",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeViewDD.html#property_TreeViewDD.NAME",
      "!doc": "Static property provides a string to identify the class."
     },
     "TreeViewDD.ATTRS": {
      "!type": "+yui.Object",
      "!url": "http://alloyui.com/versions/1.5.x/api/classes/TreeViewDD.html#property_TreeViewDD.ATTRS",
      "!doc": "Static property used to define the default attribute\nconfiguration for the TreeViewDD."
     }
    }
   }
  }
 },
 "AUI": "YUI"
};
    
})