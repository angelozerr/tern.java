(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  tern.registerPlugin("snabbt", function(server, options) {

    return {
      defs: defs
    };
  });

  var defs = {
    "!name": "snabbt",
    "!define": {
      "Float32Array": {
        
      },
      "snabbtObj": {
        "then": {
          "!type": "fn(config: +snabbtConfigObj) -> !this"
        }
      },
      "snabbtConfigObj": {
        "position": {
          "!type": "[number]",
          "!doc": "Pixel offsets in each x-, y- and z-direction"
        },
        "rotation": {
          "!type": "[number]",
          "!doc": "Rotation in radians in x-, y- and z-direction"
        },
        "scale": {
          "!type": "[number]",
          "!doc": "Scale in x- and y-direction"
        },
        "rotation_post": {
          "!type": "[number]",
          "!doc": "Rotation applied after position and rotation"
        },
        "width": {
          "!type": "number",
          "!doc": "Element width in pixels"
        },
        "height": {
          "!type": "number",
          "!doc": "Element height in pixels"
        },
        "opacity": {
          "!type": "number",
          "!doc": "Element opacity(0 - 1)"
        },
        "duration": {
          "!type": "number",
          "!doc": "Animation duration in milliseconds"
        },
        "delay": {
          "!type": "number",
          "!doc": "Delay before the animation is started in milliseconds"
        },
        "loop": {
          "!type": "number",
          "!doc": "Number of times to repeat the animation"
        },
        "callback": {
          "!type": "fn()",
          "!doc": "Function to be called when animation is completed"
        },
        "easing": {
          "!type": "fn(value: number)",
          "!doc": "snabbt.js includes four easing functions: linear, ease, ease-in and ease-out. You can also use your own easing functions or use the physics based spring easing"
        },
        "spring_constant": {
          "!type": "number",
          "!doc": "The stiffness of the spring"
        },
        "spring_deacceleration": {
          "!type": "number",
          "!doc": "Controls how fast the velocity decreases"
        },
        "spring_mass ": {
          "!type": "number",
          "!doc": "The 'weight' of the object"
        },
        "value_feeder": {
          "!type": "fn(i: number)",
          "!doc": "The animation object is very simple to work with but has it limitations. Sometimes you want to do the transforms in another order. This is where value feeding comes handy. The value_feeder parameter expects a function that takes one parameter which will progress from 0 to 1. Every time it is called you should return a snabbtjs.matrix(see Matrix API) representing the current transform."
        }
      }
    },
    "snabbt": {
      "!type": "fn(element: +Element, config: +snabbtConfigObj) -> +snabbtObj",
      "!doc": ""      
    },
    "snabbtjs": {
      "ident": {
        "!type": "fn() -> +Float32Array",
        "!doc": "Returns the identity matrix"
      },
      "trans": {
        "!type": "fn(x: number, y: number, z: number) -> +Float32Array",
        "!doc": "Returns a translation matrix"
      },
      "rotX": {
        "!type": "fn(radians: number) -> +Float32Array",
        "!doc": "Returns a rotation around the x-axis"
      },
      "rotY": {
        "!type": "fn(radians: number) -> +Float32Array",
        "!doc": "Returns a rotation around the y-axis"
      },
      "rotZ": {
        "!type": "fn(radians: number) -> +Float32Array",
        "!doc": "Returns a rotation around the z-axis"
      },
      "scale": {
        "!type": "fn(x: number, y: number) -> +Float32Array",
        "!doc": " Returns a scaling matrix"
      },
      "skew": {
        "!type": "fn(ax: number, ay: number) -> +Float32Array",
        "!doc": " Returns a skew matrix"
      },
      "mult": {
        "!type": "fn(a: [number], b: [number]) -> +Float32Array",
        "!doc": "Returns the matrix multiplication product of A * B"
      }
    }
  }
});
