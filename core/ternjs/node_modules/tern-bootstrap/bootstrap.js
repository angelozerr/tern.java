(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  tern.registerPlugin("bootstrap", function(server, options) {

    return {
      defs : defs
    };
  });
  
  var defs = {
  "!name": "bootstrap",
  "!define": {
    "carouselOption": {
      "interval": {
        "!type": "number",
        "!doc": "The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle."
      },
      "pause": {
        "!type": "string",
        "!doc": "Pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave."
      },
      "wrap": {
        "!type": "bool",
        "!doc": "Whether the carousel should cycle continuously or have hard stops."
      }
    },
    "popoverOption": {
      "animation": {
        "!type": "bool",
        "!doc": "Apply a CSS fade transition to the popover"
      },
      "container": {
        "!type": "string|bool",
        "!doc": "\n            Appends the popover to a specific element. Example: container: 'body'. This option is particularly useful in that it allows you to position the popover in the flow of the document near the triggering element - which will prevent the popover from floating away from the triggering element during a window resize.\n          "
      },
      "content": {
        "!type": "string|?",
        "!doc": "\n            Default content value if data-content attribute isn't present.\n            If a function is given, it will be called with its this reference set to the element that the popover is attached to.\n          "
      },
      "delay": {
        "!type": "number|?",
        "!doc": "\n           Delay showing and hiding the popover (ms) - does not apply to manual trigger type\n           If a number is supplied, delay is applied to both hide/show\n           Object structure is: delay: { \"show\": 500, \"hide\": 100 }\n          "
      },
      "html": {
        "!type": "bool",
        "!doc": "Insert HTML into the popover. If false, jQuery's text method will be used to insert content into the DOM. Use text if you're worried about XSS attacks."
      },
      "placement": {
        "!type": "string|?",
        "!doc": "\n            How to position the popover - top | bottom | left | right | auto.When \"auto\" is specified, it will dynamically reorient the popover. For example, if placement is \"auto left\", the popover will display to the left when possible, otherwise it will display right.\n            When a function is used to determine the placement, it is called with the popover DOM node as its first argument and the triggering element DOM node as its second. The this context is set to the popover instance.\n          "
      },
      "selector": {
        "!type": "string",
        "!doc": "If a selector is provided, popover objects will be delegated to the specified targets. In practice, this is used to enable dynamic HTML content to have popovers added. See this and an informative example."
      },
      "template": {
        "!type": "string",
        "!doc": "\n            Base HTML to use when creating the popover.\n            The popover's title will be injected into the .popover-title.\n            The popover's content will be injected into the .popover-content.\n            .arrow will become the popover's arrow.\n            The outermost wrapper element should have the .popover class.\n          "
      },
      "title": {
        "!type": "string|?",
        "!doc": "\n            Default title value if title attribute isn't present.\n            If a function is given, it will be called with its this reference set to the element that the popover is attached to.\n          "
      },
      "trigger": {
        "!type": "string",
        "!doc": "How popover is triggered - click | hover | focus | manual. You may pass multiple triggers; separate them with a space."
      }
    },
    "modalOption": {
      "backdrop": {
        "!type": "+boolean or the string 'static'",
        "!doc": "Includes a modal-backdrop element. Alternatively, specify static for a backdrop which doesn't close the modal on click."
      },
      "keyboard": {
        "!type": "bool",
        "!doc": "Closes the modal when escape key is pressed"
      },
      "show": {
        "!type": "bool",
        "!doc": "Shows the modal when initialized."
      }
    },
    "collapseOption": {
      "parent": {
        "!type": "+selector",
        "!doc": "If a selector is provided, then all collapsible elements under the specified parent will be closed when this collapsible item is shown. (similar to traditional accordion behavior - this is dependent on the panel class)"
      }
    },
    "affixOption": {
      "offset": {
        "!type": "number|?|?",
        "!doc": "Pixels to offset from screen when calculating position of scroll. If a single number is provided, the offset will be applied in both top and bottom directions. To provide a unique, bottom and top offset just provide an object offset: { top: 10 } or offset: { top: 10, bottom: 5 }. Use a function when you need to dynamically calculate an offset."
      }
    },
    "tooltipOption": {
      "animation": {
        "!type": "bool",
        "!doc": "Apply a CSS fade transition to the tooltip"
      },
      "container": {
        "!type": "string|bool",
        "!doc": "\n            Appends the tooltip to a specific element. Example: container: 'body'. This option is particularly useful in that it allows you to position the tooltip in the flow of the document  near the triggering element - which will prevent the tooltip from floating away from the triggering element during a window resize.\n          "
      },
      "delay": {
        "!type": "number|?",
        "!doc": "\n            Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type\n            If a number is supplied, delay is applied to both hide/show\n            Object structure is: delay: { \"show\": 500, \"hide\": 100 }\n          "
      },
      "html": {
        "!type": "bool",
        "!doc": "Insert HTML into the tooltip. If false, jQuery's text method will be used to insert content into the DOM. Use text if you're worried about XSS attacks."
      },
      "placement": {
        "!type": "string|?",
        "!doc": "\n            How to position the tooltip - top | bottom | left | right | auto.When \"auto\" is specified, it will dynamically reorient the tooltip. For example, if placement is \"auto left\", the tooltip will display to the left when possible, otherwise it will display right.\n            When a function is used to determine the placement, it is called with the tooltip DOM node as its first argument and the triggering element DOM node as its second. The this context is set to the tooltip instance.\n          "
      },
      "selector": {
        "!type": "string",
        "!doc": "If a selector is provided, tooltip objects will be delegated to the specified targets. In practice, this is used to enable dynamic HTML content to have tooltips added. See this and an informative example."
      },
      "template": {
        "!type": "string",
        "!doc": "\n            Base HTML to use when creating the tooltip.\n            The tooltip's title will be injected into the .tooltip-inner.\n            .tooltip-arrow will become the tooltip's arrow.\n            The outermost wrapper element should have the .tooltip class.\n          "
      },
      "title": {
        "!type": "string|?",
        "!doc": "\n            Default title value if title attribute isn't present.\n            If a function is given, it will be called with its this reference set to the element that the tooltip is attached to.\n          "
      },
      "trigger": {
        "!type": "string",
        "!doc": "How tooltip is triggered - click | hover | focus | manual. You may pass multiple triggers; separate them with a space."
      }
    }
  },
  "jQuery": {
    "fn": {
      "transition": {
        "!type": "fn() -> !this",
        "!doc": "For simple transition effects, include transition.js once alongside the other JS files. If you're using the compiled (or minified) bootstrap.js, there is no need to include this—it's already there.",
        "!url": "http://getbootstrap.com/javascript/#transitions"
      },
      "modal": {
        "!type": "fn(options?: +modalOption) -> !this",
        "!doc": "Modals are streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults.",
        "!url": "http://getbootstrap.com/javascript/#modals"
      },
      "dropdown": {
        "!type": "fn() -> !this",
        "!doc": "Add dropdown menus to nearly anything with this simple plugin, including the navbar, tabs, and pills.",
        "!url": "http://getbootstrap.com/javascript/#dropdowns"
      },
      "scrollspy": {
        "!type": "fn() -> !this",
        "!doc": "The ScrollSpy plugin is for automatically updating nav targets based on scroll position. Scroll the area below the navbar and watch the active class change. The dropdown sub items will be highlighted as well.",
        "!url": "http://getbootstrap.com/javascript/#scrollspy"
      },
      "tab": {
        "!type": "fn() -> !this",
        "!doc": "Add quick, dynamic tab functionality to transition through panes of local content, even via dropdown menus.",
        "!url": "http://getbootstrap.com/javascript/#tabs"
      },
      "tooltip": {
        "!type": "fn(options?: +tooltipOption) -> !this",
        "!doc": "Inspired by the excellent jQuery.tipsy plugin written by Jason Frame; Tooltips are an updated version, which don't rely on images, use CSS3 for animations, and data-attributes for local title storage.",
        "!url": "http://getbootstrap.com/javascript/#tooltips"
      },
      "popover": {
        "!type": "fn(options?: +popoverOption) -> !this",
        "!doc": "Add small overlays of content, like those on the iPad, to any element for housing secondary information.",
        "!url": "http://getbootstrap.com/javascript/#popovers"
      },
      "alert": {
        "!type": "fn() -> !this",
        "!doc": "Add dismiss functionality to all alert messages with this plugin.",
        "!url": "http://getbootstrap.com/javascript/#alerts"
      },
      "button": {
        "!type": "fn() -> !this",
        "!doc": "Do more with buttons. Control button states or create groups of buttons for more components like toolbars.",
        "!url": "http://getbootstrap.com/javascript/#buttons"
      },
      "collapse": {
        "!type": "fn(options?: +collapseOption) -> !this",
        "!doc": "Flexible plugin that utilizes a handful of classes for easy toggle behavior.",
        "!url": "http://getbootstrap.com/javascript/#collapse"
      },
      "carousel": {
        "!type": "fn(options?: +carouselOption) -> !this",
        "!doc": "A slideshow component for cycling through elements, like a carousel. Nested carousels are not supported.",
        "!url": "http://getbootstrap.com/javascript/#carousel"
      },
      "affix": {
        "!type": "fn(options?: +affixOption) -> !this",
        "!doc": "The affix plugin toggles position: fixed; on and off, emulating the effect found with position: sticky;. The subnavigation on the right is a live demo of the affix plugin.",
        "!url": "http://getbootstrap.com/javascript/#affix"
      }
    }
  }
};
});