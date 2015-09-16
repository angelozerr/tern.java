(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  tern.registerPlugin("phaser", function(server, options) {
    server.addDefs(defs);
  });
  
  var defs = {
		  "!name": "phaser",
		  "!define": {
		   "PhaserTextStyle": {
		    "font": {
		     "!type": "string",
		     "!doc": "The style and size of the font."
		    },
		    "fontStyle": {
		     "!type": "string",
		     "!doc": "The style of the font (eg. 'italic'): overrides the value in `style.font`."
		    },
		    "fontVariant": {
		     "!type": "string",
		     "!doc": "The variant of the font (eg. 'small-caps'): overrides the value in `style.font`."
		    },
		    "fontWeight": {
		     "!type": "string",
		     "!doc": "The weight of the font (eg. 'bold'): overrides the value in `style.font`."
		    },
		    "fontSize": {
		     "!type": "string|number",
		     "!doc": "The size of the font (eg. 32 or '32px'): overrides the value in `style.font`."
		    },
		    "backgroundColor": {
		     "!type": "string",
		     "!doc": "A canvas fillstyle that will be used as the background for the whole Text object. Set to `null` to disable."
		    },
		    "fill": {
		     "!type": "string",
		     "!doc": "A canvas fillstyle that will be used on the text eg 'red', '#00FF00'."
		    },
		    "align": {
		     "!type": "string",
		     "!doc": "Horizontal alignment of each line in multiline text. Can be: 'left', 'center' or 'right'. Does not affect single lines of text (see `textBounds` and `boundsAlignH` for that)."
		    },
		    "boundsAlignH": {
		     "!type": "string",
		     "!doc": "Horizontal alignment of the text within the `textBounds`. Can be: 'left', 'center' or 'right'."
		    },
		    "boundsAlignV": {
		     "!type": "string",
		     "!doc": "Vertical alignment of the text within the `textBounds`. Can be: 'top', 'middle' or 'bottom'."
		    },
		    "stroke": {
		     "!type": "string",
		     "!doc": "A canvas stroke style that will be used on the text stroke eg 'blue', '#FCFF00'."
		    },
		    "strokeThickness": {
		     "!type": "number",
		     "!doc": "A number that represents the thickness of the stroke. Default is 0 (no stroke)."
		    },
		    "wordWrap": {
		     "!type": "bool",
		     "!doc": "Indicates if word wrap should be used."
		    },
		    "wordWrapWidth": {
		     "!type": "number",
		     "!doc": "The width in pixels at which text will wrap."
		    },
		    "tabs": {
		     "!type": "number",
		     "!doc": "The size (in pixels) of the tabs, for when text includes tab characters. 0 disables. Can be an array of varying tab sizes, one per tab stop."
		    }
		   },
		   "PhaserTextsetStyleStyle": {
		    "font": {
		     "!type": "string",
		     "!doc": "The style and size of the font."
		    },
		    "fontStyle": {
		     "!type": "string",
		     "!doc": "The style of the font (eg. 'italic'): overrides the value in `style.font`."
		    },
		    "fontVariant": {
		     "!type": "string",
		     "!doc": "The variant of the font (eg. 'small-caps'): overrides the value in `style.font`."
		    },
		    "fontWeight": {
		     "!type": "string",
		     "!doc": "The weight of the font (eg. 'bold'): overrides the value in `style.font`."
		    },
		    "fontSize": {
		     "!type": "string|number",
		     "!doc": "The size of the font (eg. 32 or '32px'): overrides the value in `style.font`."
		    },
		    "backgroundColor": {
		     "!type": "string",
		     "!doc": "A canvas fillstyle that will be used as the background for the whole Text object. Set to `null` to disable."
		    },
		    "fill": {
		     "!type": "string",
		     "!doc": "A canvas fillstyle that will be used on the text eg 'red', '#00FF00'."
		    },
		    "align": {
		     "!type": "string",
		     "!doc": "Horizontal alignment of each line in multiline text. Can be: 'left', 'center' or 'right'. Does not affect single lines of text (see `textBounds` and `boundsAlignH` for that)."
		    },
		    "boundsAlignH": {
		     "!type": "string",
		     "!doc": "Horizontal alignment of the text within the `textBounds`. Can be: 'left', 'center' or 'right'."
		    },
		    "boundsAlignV": {
		     "!type": "string",
		     "!doc": "Vertical alignment of the text within the `textBounds`. Can be: 'top', 'middle' or 'bottom'."
		    },
		    "stroke": {
		     "!type": "string",
		     "!doc": "A canvas stroke style that will be used on the text stroke eg 'blue', '#FCFF00'."
		    },
		    "strokeThickness": {
		     "!type": "number",
		     "!doc": "A number that represents the thickness of the stroke. Default is 0 (no stroke)."
		    },
		    "wordWrap": {
		     "!type": "bool",
		     "!doc": "Indicates if word wrap should be used."
		    },
		    "wordWrapWidth": {
		     "!type": "number",
		     "!doc": "The width in pixels at which text will wrap."
		    },
		    "tabs": {
		     "!type": "number|+array",
		     "!doc": "The size (in pixels) of the tabs, for when text includes tab characters. 0 disables. Can be an array of varying tab sizes, one per tab stop."
		    }
		   },
		   "PhaserPhysics.P2.BodyaddPolygonOptions": {
		    "optimalDecomp": {
		     "!type": "bool",
		     "!doc": "Set to true if you need optimal decomposition. Warning: very slow for polygons with more than 10 vertices."
		    },
		    "skipSimpleCheck": {
		     "!type": "bool",
		     "!doc": "Set to true if you already know that the path is not intersecting itself."
		    },
		    "removeCollinearPoints": {
		     "!type": "bool|number",
		     "!doc": "Set to a number (angle threshold value) to remove collinear points, or false to keep all points."
		    }
		   },
		   "anonymousAABBOptions": {
		    "upperBound": {
		     "!type": "[?]"
		    },
		    "lowerBound": {
		     "!type": "[?]"
		    }
		   },
		   "anonymousRayOptions": {
		    "from": {
		     "!type": "+array"
		    },
		    "to": {
		     "!type": "+array"
		    },
		    "checkCollisionResponse": {
		     "!type": "bool"
		    },
		    "skipBackfaces": {
		     "!type": "bool"
		    },
		    "collisionMask": {
		     "!type": "number"
		    },
		    "collisionGroup": {
		     "!type": "number"
		    },
		    "mode": {
		     "!type": "number"
		    },
		    "callback": {
		     "!type": "number"
		    }
		   },
		   "anonymousConstraintOptions": {
		    "collideConnected": {
		     "!type": "?"
		    }
		   },
		   "anonymousDistanceConstraintOptions": {
		    "distance": {
		     "!type": "number",
		     "!doc": "The distance to keep between the anchor points. Defaults to the current distance between the bodies."
		    },
		    "localAnchorA": {
		     "!type": "[?]",
		     "!doc": "The anchor point for bodyA, defined locally in bodyA frame. Defaults to [0,0]."
		    },
		    "localAnchorB": {
		     "!type": "[?]",
		     "!doc": "The anchor point for bodyB, defined locally in bodyB frame. Defaults to [0,0]."
		    },
		    "maxForce": {
		     "!type": "?",
		     "!doc": "Maximum force to apply."
		    }
		   },
		   "anonymousGearConstraintOptions": {
		    "angle": {
		     "!type": "number",
		     "!doc": "Relative angle between the bodies. Will be set to the current angle between the bodies (the gear ratio is accounted for)."
		    },
		    "ratio": {
		     "!type": "number",
		     "!doc": "Gear ratio."
		    },
		    "maxTorque": {
		     "!type": "number",
		     "!doc": "Maximum torque to apply."
		    }
		   },
		   "anonymousLockConstraintOptions": {
		    "localOffsetB": {
		     "!type": "[?]",
		     "!doc": "The offset of bodyB in bodyA's frame. If not given the offset is computed from current positions."
		    },
		    "localAngleB": {
		     "!type": "number",
		     "!doc": "The angle of bodyB in bodyA's frame. If not given, the angle is computed from current angles."
		    },
		    "maxForce": {
		     "!type": "number"
		    }
		   },
		   "anonymousPrismaticConstraintOptions": {
		    "maxForce": {
		     "!type": "number",
		     "!doc": "Max force to be applied by the constraint"
		    },
		    "localAnchorA": {
		     "!type": "[?]",
		     "!doc": "Body A's anchor point, defined in its own local frame."
		    },
		    "localAnchorB": {
		     "!type": "[?]",
		     "!doc": "Body B's anchor point, defined in its own local frame."
		    },
		    "localAxisA": {
		     "!type": "[?]",
		     "!doc": "An axis, defined in body A frame, that body B's anchor point may slide along."
		    },
		    "disableRotationalLock": {
		     "!type": "bool",
		     "!doc": "If set to true, bodyB will be free to rotate around its anchor point."
		    },
		    "upperLimit": {
		     "!type": "number"
		    },
		    "lowerLimit": {
		     "!type": "number"
		    }
		   },
		   "anonymousRevoluteConstraintOptions": {
		    "worldPivot": {
		     "!type": "[?]",
		     "!doc": "A pivot point given in world coordinates. If specified, localPivotA and localPivotB are automatically computed from this value."
		    },
		    "localPivotA": {
		     "!type": "[?]",
		     "!doc": "The point relative to the center of mass of bodyA which bodyA is constrained to."
		    },
		    "localPivotB": {
		     "!type": "[?]",
		     "!doc": "See localPivotA."
		    },
		    "maxForce": {
		     "!type": "number",
		     "!doc": "The maximum force that should be applied to constrain the bodies."
		    }
		   },
		   "anonymousAngleLockEquationOptions": {
		    "angle": {
		     "!type": "number",
		     "!doc": "Angle to add to the local vector in body A."
		    },
		    "ratio": {
		     "!type": "number",
		     "!doc": "Gear ratio"
		    }
		   },
		   "anonymousRotationalLockEquationOptions": {
		    "angle": {
		     "!type": "number",
		     "!doc": "Angle to add to the local vector in bodyA."
		    }
		   },
		   "emitEvent": {
		    "type": {
		     "!type": "string"
		    }
		   },
		   "anonymousContactMaterialOptions": {
		    "friction": {
		     "!type": "number",
		     "!doc": "Friction coefficient."
		    },
		    "restitution": {
		     "!type": "number",
		     "!doc": "Restitution coefficient aka \"bounciness\"."
		    },
		    "stiffness": {
		     "!type": "number",
		     "!doc": "ContactEquation stiffness."
		    },
		    "relaxation": {
		     "!type": "number",
		     "!doc": "ContactEquation relaxation."
		    },
		    "frictionStiffness": {
		     "!type": "number",
		     "!doc": "FrictionEquation stiffness."
		    },
		    "frictionRelaxation": {
		     "!type": "number",
		     "!doc": "FrictionEquation relaxation."
		    },
		    "surfaceVelocity": {
		     "!type": "number",
		     "!doc": "Surface velocity."
		    }
		   },
		   "anonymousBodyOptions": {
		    "force": {
		     "!type": "[?]"
		    },
		    "position": {
		     "!type": "[?]"
		    },
		    "velocity": {
		     "!type": "[?]"
		    },
		    "allowSleep": {
		     "!type": "bool"
		    },
		    "collisionResponse": {
		     "!type": "bool"
		    },
		    "angle": {
		     "!type": "number"
		    },
		    "angularForce": {
		     "!type": "number"
		    },
		    "angularVelocity": {
		     "!type": "number"
		    },
		    "ccdIterations": {
		     "!type": "number"
		    },
		    "ccdSpeedThreshold": {
		     "!type": "number"
		    },
		    "fixedRotation": {
		     "!type": "number"
		    },
		    "gravityScale": {
		     "!type": "number"
		    },
		    "id": {
		     "!type": "number"
		    },
		    "mass": {
		     "!type": "number",
		     "!doc": "A number >= 0. If zero, the .type will be set to Body.STATIC."
		    },
		    "sleepSpeedLimit": {
		     "!type": "number"
		    },
		    "sleepTimeLimit": {
		     "!type": "number"
		    }
		   },
		   "fromPolygonOptions": {
		    "optimalDecomp": {
		     "!type": "bool",
		     "!doc": "Set to true if you need optimal decomposition. Warning: very slow for polygons with more than 10 vertices."
		    },
		    "skipSimpleCheck": {
		     "!type": "bool",
		     "!doc": "Set to true if you already know that the path is not intersecting itself."
		    },
		    "removeCollinearPoints": {
		     "!type": "bool|number",
		     "!doc": "Set to a number (angle threshold value) to remove collinear points, or false to keep all points."
		    }
		   },
		   "anonymousLinearSpringOptions": {
		    "restLength": {
		     "!type": "number",
		     "!doc": "A number > 0. Default is the current distance between the world anchor points."
		    },
		    "stiffness": {
		     "!type": "number",
		     "!doc": "Spring constant (see Hookes Law). A number >= 0."
		    },
		    "damping": {
		     "!type": "number",
		     "!doc": "A number >= 0. Default: 1"
		    },
		    "worldAnchorA": {
		     "!type": "[?]",
		     "!doc": "Where to hook the spring to body A, in world coordinates. Overrides the option \"localAnchorA\" if given."
		    },
		    "worldAnchorB": {
		     "!type": "[?]"
		    },
		    "localAnchorA": {
		     "!type": "[?]",
		     "!doc": "Where to hook the spring to body A, in local body coordinates. Defaults to the body center."
		    },
		    "localAnchorB": {
		     "!type": "[?]"
		    }
		   },
		   "anonymousRotationalSpringOptions": {
		    "restAngle": {
		     "!type": "number",
		     "!doc": "The relative angle of bodies at which the spring is at rest. If not given, it's set to the current relative angle between the bodies."
		    },
		    "stiffness": {
		     "!type": "number",
		     "!doc": "Spring constant (see Hookes Law). A number >= 0."
		    },
		    "damping": {
		     "!type": "number",
		     "!doc": "A number >= 0."
		    }
		   },
		   "anonymousSpringOptions": {
		    "stiffness": {
		     "!type": "number",
		     "!doc": "Spring constant (see Hookes Law). A number >= 0."
		    },
		    "damping": {
		     "!type": "number",
		     "!doc": "A number >= 0. Default: 1"
		    },
		    "localAnchorA": {
		     "!type": "[?]",
		     "!doc": "Where to hook the spring to body A, in local body coordinates. Defaults to the body center."
		    },
		    "localAnchorB": {
		     "!type": "[?]"
		    },
		    "worldAnchorA": {
		     "!type": "[?]",
		     "!doc": "Where to hook the spring to body A, in world coordinates. Overrides the option \"localAnchorA\" if given."
		    },
		    "worldAnchorB": {
		     "!type": "[?]"
		    }
		   },
		   "anonymousWheelConstraintOptions": {
		    "localForwardVector": {
		     "!type": "[?]",
		     "!doc": "local wheel forward vector in local body space. Default is zero."
		    },
		    "localPosition": {
		     "!type": "[?]",
		     "!doc": "The local position of the wheen in the chassis body. Default is zero - the center of the body."
		    },
		    "sideFriction": {
		     "!type": "[?]",
		     "!doc": "The max friction force in the sideways direction."
		    }
		   },
		   "anonymousBoxOptions": {
		    "width": {
		     "!type": "number",
		     "!doc": "Total width of the box"
		    },
		    "height": {
		     "!type": "number",
		     "!doc": "Total height of the box"
		    }
		   },
		   "anonymousCapsuleOptions": {
		    "length": {
		     "!type": "number",
		     "!doc": "The distance between the end points"
		    },
		    "radius": {
		     "!type": "number",
		     "!doc": "Radius of the capsule"
		    }
		   },
		   "anonymousCircleOptions": {
		    "radius": {
		     "!type": "number",
		     "!doc": "The radius of this circle"
		    }
		   },
		   "anonymousConvexOptions": {
		    "vertices": {
		     "!type": "[?]",
		     "!doc": "An array of vertices that span this shape. Vertices are given in counter-clockwise (CCW) direction."
		    },
		    "axes": {
		     "!type": "[?]",
		     "!doc": "An array of unit length vectors, representing the symmetry axes in the convex."
		    }
		   },
		   "anonymousHeightfieldOptions": {
		    "heights": {
		     "!type": "+array",
		     "!doc": "An array of Y values that will be used to construct the terrain."
		    },
		    "minValue": {
		     "!type": "number",
		     "!doc": "Minimum value of the data points in the data array. Will be computed automatically if not given."
		    },
		    "maxValue": {
		     "!type": "number",
		     "!doc": "Maximum value."
		    },
		    "elementWidth": {
		     "!type": "number",
		     "!doc": "World spacing between the data points in X direction."
		    }
		   },
		   "anonymousLineOptions": {
		    "length": {
		     "!type": "number",
		     "!doc": "The total length of the line"
		    }
		   },
		   "anonymousShapeOptions": {
		    "position": {
		     "!type": "+array"
		    },
		    "angle": {
		     "!type": "number"
		    },
		    "collisionGroup": {
		     "!type": "number"
		    },
		    "collisionMask": {
		     "!type": "number"
		    },
		    "sensor": {
		     "!type": "bool"
		    },
		    "collisionResponse": {
		     "!type": "bool"
		    },
		    "type": {
		     "!type": "?"
		    }
		   },
		   "anonymousGSSolverOptions": {
		    "iterations": {
		     "!type": "number"
		    },
		    "tolerance": {
		     "!type": "number"
		    }
		   },
		   "anonymousWorldOptions": {
		    "solver": {
		     "!type": "+Solver",
		     "!doc": "Defaults to GSSolver."
		    },
		    "gravity": {
		     "!type": "[?]",
		     "!doc": "Defaults to y=-9.78."
		    },
		    "broadphase": {
		     "!type": "+Broadphase",
		     "!doc": "Defaults to SAPBroadphase"
		    },
		    "islandSplit": {
		     "!type": "bool"
		    }
		   },
		   "PhaserPhysics.P2createBodyOptions": {
		    "optimalDecomp": {
		     "!type": "bool",
		     "!doc": "Set to true if you need optimal decomposition. Warning: very slow for polygons with more than 10 vertices."
		    },
		    "skipSimpleCheck": {
		     "!type": "bool",
		     "!doc": "Set to true if you already know that the path is not intersecting itself."
		    },
		    "removeCollinearPoints": {
		     "!type": "bool|number",
		     "!doc": "Set to a number (angle threshold value) to remove collinear points, or false to keep all points."
		    }
		   },
		   "PhaserPhysics.P2createParticleOptions": {
		    "optimalDecomp": {
		     "!type": "bool",
		     "!doc": "Set to true if you need optimal decomposition. Warning: very slow for polygons with more than 10 vertices."
		    },
		    "skipSimpleCheck": {
		     "!type": "bool",
		     "!doc": "Set to true if you already know that the path is not intersecting itself."
		    },
		    "removeCollinearPoints": {
		     "!type": "bool|number",
		     "!doc": "Set to a number (angle threshold value) to remove collinear points, or false to keep all points."
		    }
		   },
		   "module:PIXIPIXICanvasRendererOptions": {
		    "view": {
		     "!type": "+HTMLCanvasElement",
		     "!doc": "the canvas to use as a view, optional"
		    },
		    "transparent": {
		     "!type": "bool",
		     "!doc": "If the render view is transparent, default false"
		    },
		    "autoResize": {
		     "!type": "bool",
		     "!doc": "If the render view is automatically resized, default false"
		    },
		    "resolution": {
		     "!type": "number",
		     "!doc": "the resolution of the renderer retina would be 2"
		    },
		    "clearBeforeRender": {
		     "!type": "bool",
		     "!doc": "This sets if the CanvasRenderer will clear the canvas or not before the new render pass."
		    }
		   },
		   "module:PIXIPIXIWebGLRendererOptions": {
		    "view": {
		     "!type": "+HTMLCanvasElement",
		     "!doc": "the canvas to use as a view, optional"
		    },
		    "transparent": {
		     "!type": "bool",
		     "!doc": "If the render view is transparent, default false"
		    },
		    "autoResize": {
		     "!type": "bool",
		     "!doc": "If the render view is automatically resized, default false"
		    },
		    "antialias": {
		     "!type": "bool",
		     "!doc": "sets antialias (only applicable in chrome at the moment)"
		    },
		    "preserveDrawingBuffer": {
		     "!type": "bool",
		     "!doc": "enables drawing buffer preservation, enable this if you need to call toDataUrl on the webgl context"
		    },
		    "resolution": {
		     "!type": "number",
		     "!doc": "the resolution of the renderer retina would be 2"
		    }
		   }
		  },
		  "Phaser": {
		   "Animation": {
		    "!type": "fn(game: +Phaser.Game, parent: +Phaser.Sprite, name: string, frameData: +Phaser.FrameData, frames: [?]|[?], frameRate: number, loop: bool, loop: bool)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "delay": {
		      "!type": "number"
		     },
		     "loop": {
		      "!type": "bool"
		     },
		     "loopCount": {
		      "!type": "number"
		     },
		     "killOnComplete": {
		      "!type": "bool"
		     },
		     "isFinished": {
		      "!type": "bool"
		     },
		     "isPlaying": {
		      "!type": "bool"
		     },
		     "isPaused": {
		      "!type": "bool"
		     },
		     "currentFrame": {
		      "!type": "+Phaser.Frame"
		     },
		     "onStart": {
		      "!type": "+Phaser.Signal"
		     },
		     "onUpdate": {
		      "!type": "+Phaser.Signal|+null"
		     },
		     "onComplete": {
		      "!type": "+Phaser.Signal"
		     },
		     "onLoop": {
		      "!type": "+Phaser.Signal"
		     },
		     "play": {
		      "!type": "fn(frameRate: number, loop: bool, killOnComplete: bool) -> +Phaser.Animation"
		     },
		     "restart": {
		      "!type": "fn()"
		     },
		     "setFrame": {
		      "!type": "fn(frameId: string|number, useLocalFrameIndex: bool)"
		     },
		     "stop": {
		      "!type": "fn(resetFrame: bool, dispatchComplete: bool)"
		     },
		     "onPause": {
		      "!type": "fn()"
		     },
		     "onResume": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "next": {
		      "!type": "fn(quantity: number)"
		     },
		     "previous": {
		      "!type": "fn(quantity: number)"
		     },
		     "updateFrameData": {
		      "!type": "fn(frameData: +Phaser.FrameData)"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "complete": {
		      "!type": "fn()"
		     },
		     "paused": {
		      "!type": "bool"
		     },
		     "frameTotal": {
		      "!type": "number"
		     },
		     "frame": {
		      "!type": "number"
		     },
		     "speed": {
		      "!type": "number"
		     },
		     "enableUpdate": {
		      "!type": "bool"
		     }
		    },
		    "generateFrameNames": {
		     "!type": "fn(prefix: string, start: number, stop: number, suffix: string, zeroPad: number) -> [?]"
		    }
		   },
		   "AnimationManager": {
		    "!type": "fn(sprite: +Phaser.Sprite)",
		    "prototype": {
		     "sprite": {
		      "!type": "+Phaser.Sprite"
		     },
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "currentFrame": {
		      "!type": "+Phaser.Frame"
		     },
		     "currentAnim": {
		      "!type": "+Phaser.Animation"
		     },
		     "updateIfVisible": {
		      "!type": "bool"
		     },
		     "isLoaded": {
		      "!type": "bool"
		     },
		     "add": {
		      "!type": "fn(name: string, frames: [?], frameRate: number, loop: bool, useNumericIndex: bool) -> +Phaser.Animation"
		     },
		     "validateFrames": {
		      "!type": "fn(frames: [?], useNumericIndex: bool) -> bool"
		     },
		     "play": {
		      "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> +Phaser.Animation"
		     },
		     "stop": {
		      "!type": "fn(name: string, resetFrame: bool)"
		     },
		     "update": {
		      "!type": "fn() -> bool"
		     },
		     "next": {
		      "!type": "fn(quantity: number)"
		     },
		     "previous": {
		      "!type": "fn(quantity: number)"
		     },
		     "getAnimation": {
		      "!type": "fn(name: string) -> +Phaser.Animation"
		     },
		     "refreshFrame": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "frameData": {
		      "!type": "+Phaser.FrameData"
		     },
		     "frameTotal": {
		      "!type": "number"
		     },
		     "paused": {
		      "!type": "bool"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "frame": {
		      "!type": "number"
		     },
		     "frameName": {
		      "!type": "string"
		     }
		    }
		   },
		   "AnimationParser": {
		    "!type": "fn()",
		    "spriteSheet": {
		     "!type": "fn(game: +Phaser.Game, key: string|+Image, frameWidth: number, frameHeight: number, frameMax: number, margin: number, spacing: number) -> +Phaser.FrameData"
		    },
		    "JSONData": {
		     "!type": "fn(game: +Phaser.Game, json: ?) -> +Phaser.FrameData"
		    },
		    "JSONDataHash": {
		     "!type": "fn(game: +Phaser.Game, json: ?) -> +Phaser.FrameData"
		    },
		    "XMLData": {
		     "!type": "fn(game: +Phaser.Game, xml: ?) -> +Phaser.FrameData"
		    }
		   },
		   "Frame": {
		    "!type": "fn(index: number, x: number, y: number, width: number, height: number, name: string)",
		    "prototype": {
		     "index": {
		      "!type": "number"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "centerX": {
		      "!type": "number"
		     },
		     "centerY": {
		      "!type": "number"
		     },
		     "distance": {
		      "!type": "number"
		     },
		     "rotated": {
		      "!type": "bool"
		     },
		     "rotationDirection": {
		      "!type": "string"
		     },
		     "trimmed": {
		      "!type": "bool"
		     },
		     "sourceSizeW": {
		      "!type": "number"
		     },
		     "sourceSizeH": {
		      "!type": "number"
		     },
		     "spriteSourceSizeX": {
		      "!type": "number"
		     },
		     "spriteSourceSizeY": {
		      "!type": "number"
		     },
		     "spriteSourceSizeW": {
		      "!type": "number"
		     },
		     "spriteSourceSizeH": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "resize": {
		      "!type": "fn(width: number, height: number)"
		     },
		     "setTrim": {
		      "!type": "fn(trimmed: bool, actualWidth: number, actualHeight: number, destX: number, destY: number, destWidth: number, destHeight: number)"
		     },
		     "clone": {
		      "!type": "fn() -> +Phaser.Frame"
		     },
		     "getRect": {
		      "!type": "fn(out: +Phaser.Rectangle) -> +Phaser.Rectangle"
		     }
		    }
		   },
		   "FrameData": {
		    "!type": "fn()",
		    "prototype": {
		     "addFrame": {
		      "!type": "fn(frame: +Phaser.Frame) -> +Phaser.Frame"
		     },
		     "getFrame": {
		      "!type": "fn(index: number) -> +Phaser.Frame"
		     },
		     "getFrameByName": {
		      "!type": "fn(name: string) -> +Phaser.Frame"
		     },
		     "checkFrameName": {
		      "!type": "fn(name: string) -> bool"
		     },
		     "clone": {
		      "!type": "fn() -> +Phaser.FrameData"
		     },
		     "getFrameRange": {
		      "!type": "fn(start: number, end: number, output: [?]) -> [?]"
		     },
		     "getFrames": {
		      "!type": "fn(frames: [?], useNumericIndex: bool, output: [?]) -> [?]"
		     },
		     "getFrameIndexes": {
		      "!type": "fn(frames: [?], useNumericIndex: bool, output: [?]) -> [?]"
		     },
		     "total": {
		      "!type": "number"
		     }
		    }
		   },
		   "Camera": {
		    "!type": "fn(game: +Phaser.Game, id: number, x: number, y: number, width: number, height: number)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "world": {
		      "!type": "+Phaser.World"
		     },
		     "id": {
		      "!type": "number"
		     },
		     "view": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "deadzone": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "visible": {
		      "!type": "bool"
		     },
		     "roundPx": {
		      "!type": "bool"
		     },
		     "atLimit": {
		      "!type": "bool"
		     },
		     "target": {
		      "!type": "+Phaser.Sprite"
		     },
		     "displayObject": {
		      "!type": "+PIXI.DisplayObject"
		     },
		     "scale": {
		      "!type": "+Phaser.Point"
		     },
		     "totalInView": {
		      "!type": "number"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "follow": {
		      "!type": "fn(target: +Phaser.Sprite|+Phaser.Image|+Phaser.Text, style: number)"
		     },
		     "unfollow": {
		      "!type": "fn()"
		     },
		     "focusOn": {
		      "!type": "fn(displayObject: +any)"
		     },
		     "focusOnXY": {
		      "!type": "fn(x: number, y: number)"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "setBoundsToWorld": {
		      "!type": "fn()"
		     },
		     "checkBounds": {
		      "!type": "fn()"
		     },
		     "setPosition": {
		      "!type": "fn(x: number, y: number)"
		     },
		     "setSize": {
		      "!type": "fn(width: number, height: number)"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "position": {
		      "!type": "+Phaser.Point"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     }
		    },
		    "FOLLOW_LOCKON": {
		     "!type": "number"
		    },
		    "FOLLOW_PLATFORMER": {
		     "!type": "number"
		    },
		    "FOLLOW_TOPDOWN": {
		     "!type": "number"
		    },
		    "FOLLOW_TOPDOWN_TIGHT": {
		     "!type": "number"
		    }
		   },
		   "Create": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "bmd": {
		      "!type": "+Phaser.BitmapData"
		     },
		     "canvas": {
		      "!type": "+HTMLCanvasElement"
		     },
		     "ctx": {
		      "!type": "+CanvasRenderingContext2D"
		     },
		     "palettes": {
		      "!type": "+array"
		     },
		     "texture": {
		      "!type": "fn(key: string, data: +array, pixelWidth: number, pixelHeight: number, palette: number) -> +PIXI.Texture"
		     },
		     "grid": {
		      "!type": "fn(key: string, width: number, height: number, cellWidth: number, cellHeight: number, color: string) -> +PIXI.Texture"
		     }
		    },
		    "PALETTE_ARNE": {
		     "!type": "number"
		    },
		    "PALETTE_JMP": {
		     "!type": "number"
		    },
		    "PALETTE_CGA": {
		     "!type": "number"
		    },
		    "PALETTE_C64": {
		     "!type": "number"
		    },
		    "PALETTE_JAPANESE_MACHINE": {
		     "!type": "number"
		    }
		   },
		   "Filter": {
		    "!type": "fn(game: +Phaser.Game, uniforms: ?, fragmentSrc: [?]|string)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "dirty": {
		      "!type": "bool"
		     },
		     "padding": {
		      "!type": "number"
		     },
		     "prevPoint": {
		      "!type": "+Phaser.Point"
		     },
		     "uniforms": {},
		     "fragmentSrc": {
		      "!type": "+array|string"
		     },
		     "init": {
		      "!type": "fn()"
		     },
		     "setResolution": {
		      "!type": "fn(width: number, height: number)"
		     },
		     "update": {
		      "!type": "fn(pointer: +Phaser.Pointer)"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     }
		    }
		   },
		   "FlexGrid": {
		    "!type": "fn(manager: +Phaser.ScaleManager, width: number, height: number)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "manager": {
		      "!type": "+Phaser.ScaleManager"
		     },
		     "positionCustom": {
		      "!type": "+Phaser.Point"
		     },
		     "scaleCustom": {
		      "!type": "+Phaser.Point"
		     },
		     "setSize": {
		      "!type": "fn(width: number, height: number)"
		     },
		     "createCustomLayer": {
		      "!type": "fn(width: number, height: number, children: [?]) -> +Phaser.FlexLayer"
		     },
		     "createFluidLayer": {
		      "!type": "fn(children: +array) -> +Phaser.FlexLayer"
		     },
		     "createFullLayer": {
		      "!type": "fn(children: +array) -> +Phaser.FlexLayer"
		     },
		     "createFixedLayer": {
		      "!type": "fn(children: [?]) -> +Phaser.FlexLayer"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "onResize": {
		      "!type": "fn(width: number, height: number)"
		     },
		     "refresh": {
		      "!type": "fn()"
		     },
		     "fitSprite": {
		      "!type": "fn(sprite: +Phaser.Sprite)"
		     },
		     "debug": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "FlexLayer": {
		    "!type": "fn(manager: +Phaser.FlexGrid, position: +Phaser.Point, bounds: +Phaser.Rectangle, scale: +Phaser.Point)",
		    "prototype": {
		     "manager": {
		      "!type": "+Phaser.ScaleManager"
		     },
		     "grid": {
		      "!type": "+Phaser.FlexGrid"
		     },
		     "persist": {},
		     "position": {
		      "!type": "+Phaser.Point"
		     },
		     "bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "scale": {
		      "!type": "+Phaser.Point"
		     },
		     "topLeft": {
		      "!type": "+Phaser.Point"
		     },
		     "topMiddle": {
		      "!type": "+Phaser.Point"
		     },
		     "topRight": {
		      "!type": "+Phaser.Point"
		     },
		     "bottomLeft": {
		      "!type": "+Phaser.Point"
		     },
		     "bottomMiddle": {
		      "!type": "+Phaser.Point"
		     },
		     "bottomRight": {
		      "!type": "+Phaser.Point"
		     },
		     "resize": {
		      "!type": "fn()"
		     },
		     "debug": {
		      "!type": "fn()"
		     },
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "z": {
		      "!type": "number"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "physicsType": {
		      "!type": "number"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "ignoreDestroy": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "classType": {},
		     "cursor": {
		      "!type": "+DisplayObject"
		     },
		     "enableBody": {
		      "!type": "bool"
		     },
		     "enableBodyDebug": {
		      "!type": "bool"
		     },
		     "physicsBodyType": {
		      "!type": "number"
		     },
		     "physicsSortDirection": {
		      "!type": "number"
		     },
		     "onDestroy": {
		      "!type": "+Phaser.Signal"
		     },
		     "cursorIndex": {
		      "!type": "number"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "hash": {
		      "!type": "+array"
		     },
		     "add": {
		      "!type": "fn(child: +DisplayObject, silent: bool) -> +DisplayObject"
		     },
		     "addToHash": {
		      "!type": "fn(child: +DisplayObject) -> bool"
		     },
		     "removeFromHash": {
		      "!type": "fn(child: +DisplayObject) -> bool"
		     },
		     "addMultiple": {
		      "!type": "fn(children: [?]|+Phaser.Group, silent: bool) -> [?]|+Phaser.Group"
		     },
		     "addAt": {
		      "!type": "fn(child: +DisplayObject, index: number, silent: bool) -> +DisplayObject"
		     },
		     "getAt": {
		      "!type": "fn(index: number) -> +DisplayObject|number"
		     },
		     "create": {
		      "!type": "fn(x: number, y: number, key: string, frame: number|string, exists: bool) -> +DisplayObject"
		     },
		     "createMultiple": {
		      "!type": "fn(quantity: number, key: string, frame: number|string, exists: bool)"
		     },
		     "updateZ": {
		      "!type": "fn()"
		     },
		     "resetCursor": {
		      "!type": "fn(index: number) -> +any"
		     },
		     "next": {
		      "!type": "fn() -> +any"
		     },
		     "previous": {
		      "!type": "fn() -> +any"
		     },
		     "swap": {
		      "!type": "fn(child1: +any, child2: +any)"
		     },
		     "bringToTop": {
		      "!type": "fn(child: +any) -> +any"
		     },
		     "sendToBack": {
		      "!type": "fn(child: +any) -> +any"
		     },
		     "moveUp": {
		      "!type": "fn(child: +any) -> +any"
		     },
		     "moveDown": {
		      "!type": "fn(child: +any) -> +any"
		     },
		     "xy": {
		      "!type": "fn(index: number, x: number, y: number)"
		     },
		     "reverse": {
		      "!type": "fn()"
		     },
		     "getIndex": {
		      "!type": "fn(child: +any) -> number"
		     },
		     "replace": {
		      "!type": "fn(oldChild: +any, newChild: +any) -> +any"
		     },
		     "hasProperty": {
		      "!type": "fn(child: +any, key: [?]) -> bool"
		     },
		     "setProperty": {
		      "!type": "fn(child: +any, key: +array, value: +any, operation: number, force: bool) -> bool"
		     },
		     "checkProperty": {
		      "!type": "fn(child: +any, key: +array, value: +any, force: bool) -> bool"
		     },
		     "set": {
		      "!type": "fn(child: +Phaser.Sprite, key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool) -> bool"
		     },
		     "setAll": {
		      "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)"
		     },
		     "setAllChildren": {
		      "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)"
		     },
		     "checkAll": {
		      "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, force: bool)"
		     },
		     "addAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "subAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "multiplyAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "divideAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "callAllExists": {
		      "!type": "fn(callback: string, existsValue: bool, parameter: +any)"
		     },
		     "callbackFromArray": {
		      "!type": "fn(child: ?, callback: +array, length: number)"
		     },
		     "callAll": {
		      "!type": "fn(method: string, context: string, args: +any)"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "filter": {
		      "!type": "fn(predicate: fn(), checkExists: bool) -> +Phaser.ArraySet"
		     },
		     "forEach": {
		      "!type": "fn(callback: fn(), callbackContext: ?, checkExists: bool, args: +any)"
		     },
		     "forEachExists": {
		      "!type": "fn(callback: fn(), callbackContext: ?, args: +any)"
		     },
		     "forEachAlive": {
		      "!type": "fn(callback: fn(), callbackContext: ?, args: +any)"
		     },
		     "forEachDead": {
		      "!type": "fn(callback: fn(), callbackContext: ?, args: +any)"
		     },
		     "sort": {
		      "!type": "fn(key: string, order: number)"
		     },
		     "customSort": {
		      "!type": "fn(sortHandler: fn(), context: ?)"
		     },
		     "ascendingSortHandler": {
		      "!type": "fn(a: ?, b: ?)"
		     },
		     "descendingSortHandler": {
		      "!type": "fn(a: ?, b: ?)"
		     },
		     "iterate": {
		      "!type": "fn(key: string, value: +any, returnType: number, callback: fn(), callbackContext: ?, args: [?]) -> +any"
		     },
		     "getFirstExists": {
		      "!type": "fn(exists: bool) -> +any"
		     },
		     "getFirstAlive": {
		      "!type": "fn() -> +any"
		     },
		     "getFirstDead": {
		      "!type": "fn() -> +any"
		     },
		     "getTop": {
		      "!type": "fn() -> +any"
		     },
		     "getBottom": {
		      "!type": "fn() -> +any"
		     },
		     "countLiving": {
		      "!type": "fn() -> number"
		     },
		     "countDead": {
		      "!type": "fn() -> number"
		     },
		     "getRandom": {
		      "!type": "fn(startIndex: number, length: number) -> +any"
		     },
		     "remove": {
		      "!type": "fn(child: +any, destroy: bool, silent: bool) -> bool"
		     },
		     "moveAll": {
		      "!type": "fn(group: +Phaser.Group, silent: bool) -> +Phaser.Group"
		     },
		     "removeAll": {
		      "!type": "fn(destroy: bool, silent: bool)"
		     },
		     "removeBetween": {
		      "!type": "fn(startIndex: number, endIndex: number, destroy: bool, silent: bool)"
		     },
		     "destroy": {
		      "!type": "fn(destroyChildren: bool, soft: bool)"
		     },
		     "total": {
		      "!type": "number"
		     },
		     "length": {
		      "!type": "number"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "rotation": {
		      "!type": "number"
		     },
		     "visible": {
		      "!type": "bool"
		     },
		     "alpha": {
		      "!type": "number"
		     },
		     "children": {}
		    }
		   },
		   "Game": {
		    "!type": "fn(width: number|string, height: number|string, renderer: number, parent: string|+HTMLElement, state: ?, transparent: bool, antialias: bool, physicsConfig: ?)",
		    "prototype": {
		     "id": {
		      "!type": "number"
		     },
		     "config": {},
		     "physicsConfig": {},
		     "parent": {
		      "!type": "string|+HTMLElement"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     },
		     "resolution": {
		      "!type": "number"
		     },
		     "transparent": {
		      "!type": "bool"
		     },
		     "antialias": {
		      "!type": "bool"
		     },
		     "preserveDrawingBuffer": {
		      "!type": "bool"
		     },
		     "renderer": {
		      "!type": "+PIXI.CanvasRenderer|+PIXI.WebGLRenderer"
		     },
		     "renderType": {
		      "!type": "number"
		     },
		     "state": {
		      "!type": "+Phaser.StateManager"
		     },
		     "isBooted": {
		      "!type": "bool"
		     },
		     "isRunning": {
		      "!type": "bool"
		     },
		     "raf": {
		      "!type": "+Phaser.RequestAnimationFrame"
		     },
		     "add": {
		      "!type": "+Phaser.GameObjectFactory"
		     },
		     "make": {
		      "!type": "+Phaser.GameObjectCreator"
		     },
		     "cache": {
		      "!type": "+Phaser.Cache"
		     },
		     "input": {
		      "!type": "+Phaser.Input"
		     },
		     "load": {
		      "!type": "+Phaser.Loader"
		     },
		     "math": {
		      "!type": "+Phaser.Math"
		     },
		     "net": {
		      "!type": "+Phaser.Net"
		     },
		     "scale": {
		      "!type": "+Phaser.ScaleManager"
		     },
		     "sound": {
		      "!type": "+Phaser.SoundManager"
		     },
		     "stage": {
		      "!type": "+Phaser.Stage"
		     },
		     "time": {
		      "!type": "+Phaser.Time"
		     },
		     "tweens": {
		      "!type": "+Phaser.TweenManager"
		     },
		     "world": {
		      "!type": "+Phaser.World"
		     },
		     "physics": {
		      "!type": "+Phaser.Physics"
		     },
		     "plugins": {
		      "!type": "+Phaser.PluginManager"
		     },
		     "rnd": {
		      "!type": "+Phaser.RandomDataGenerator"
		     },
		     "device": {
		      "!type": "+Phaser.Device"
		     },
		     "camera": {
		      "!type": "+Phaser.Camera"
		     },
		     "canvas": {
		      "!type": "+HTMLCanvasElement"
		     },
		     "context": {
		      "!type": "+CanvasRenderingContext2D"
		     },
		     "debug": {
		      "!type": "+Phaser.Utils.Debug"
		     },
		     "particles": {
		      "!type": "+Phaser.Particles"
		     },
		     "create": {
		      "!type": "+Phaser.Create"
		     },
		     "lockRender": {
		      "!type": "bool"
		     },
		     "stepping": {
		      "!type": "bool"
		     },
		     "pendingStep": {
		      "!type": "bool"
		     },
		     "stepCount": {
		      "!type": "number"
		     },
		     "onPause": {
		      "!type": "+Phaser.Signal"
		     },
		     "onResume": {
		      "!type": "+Phaser.Signal"
		     },
		     "onBlur": {
		      "!type": "+Phaser.Signal"
		     },
		     "onFocus": {
		      "!type": "+Phaser.Signal"
		     },
		     "currentUpdateID": {
		      "!type": "number"
		     },
		     "updatesThisFrame": {
		      "!type": "number"
		     },
		     "fpsProblemNotifier": {
		      "!type": "+Phaser.Signal"
		     },
		     "forceSingleUpdate": {
		      "!type": "bool"
		     },
		     "parseConfig": {
		      "!type": "fn()"
		     },
		     "boot": {
		      "!type": "fn()"
		     },
		     "showDebugHeader": {
		      "!type": "fn()"
		     },
		     "setUpRenderer": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn(time: number)"
		     },
		     "updateLogic": {
		      "!type": "fn(timeStep: number)"
		     },
		     "updateRender": {
		      "!type": "fn(elapsedTime: number)"
		     },
		     "enableStep": {
		      "!type": "fn()"
		     },
		     "disableStep": {
		      "!type": "fn()"
		     },
		     "step": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "gamePaused": {
		      "!type": "fn(event: ?)"
		     },
		     "gameResumed": {
		      "!type": "fn(event: ?)"
		     },
		     "focusLoss": {
		      "!type": "fn(event: ?)"
		     },
		     "focusGain": {
		      "!type": "fn(event: ?)"
		     },
		     "paused": {
		      "!type": "bool"
		     }
		    }
		   },
		   "Group": {
		    "!type": "fn(game: +Phaser.Game, parent: +DisplayObject|+null, name: string, addToStage: bool, enableBody: bool, physicsBodyType: number)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "z": {
		      "!type": "number"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "physicsType": {
		      "!type": "number"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "ignoreDestroy": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "classType": {},
		     "cursor": {
		      "!type": "+DisplayObject"
		     },
		     "enableBody": {
		      "!type": "bool"
		     },
		     "enableBodyDebug": {
		      "!type": "bool"
		     },
		     "physicsBodyType": {
		      "!type": "number"
		     },
		     "physicsSortDirection": {
		      "!type": "number"
		     },
		     "onDestroy": {
		      "!type": "+Phaser.Signal"
		     },
		     "cursorIndex": {
		      "!type": "number"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "hash": {
		      "!type": "+array"
		     },
		     "add": {
		      "!type": "fn(child: +DisplayObject, silent: bool) -> +DisplayObject"
		     },
		     "addToHash": {
		      "!type": "fn(child: +DisplayObject) -> bool"
		     },
		     "removeFromHash": {
		      "!type": "fn(child: +DisplayObject) -> bool"
		     },
		     "addMultiple": {
		      "!type": "fn(children: [?]|+Phaser.Group, silent: bool) -> [?]|+Phaser.Group"
		     },
		     "addAt": {
		      "!type": "fn(child: +DisplayObject, index: number, silent: bool) -> +DisplayObject"
		     },
		     "getAt": {
		      "!type": "fn(index: number) -> +DisplayObject|number"
		     },
		     "create": {
		      "!type": "fn(x: number, y: number, key: string, frame: number|string, exists: bool) -> +DisplayObject"
		     },
		     "createMultiple": {
		      "!type": "fn(quantity: number, key: string, frame: number|string, exists: bool)"
		     },
		     "updateZ": {
		      "!type": "fn()"
		     },
		     "resetCursor": {
		      "!type": "fn(index: number) -> +any"
		     },
		     "next": {
		      "!type": "fn() -> +any"
		     },
		     "previous": {
		      "!type": "fn() -> +any"
		     },
		     "swap": {
		      "!type": "fn(child1: +any, child2: +any)"
		     },
		     "bringToTop": {
		      "!type": "fn(child: +any) -> +any"
		     },
		     "sendToBack": {
		      "!type": "fn(child: +any) -> +any"
		     },
		     "moveUp": {
		      "!type": "fn(child: +any) -> +any"
		     },
		     "moveDown": {
		      "!type": "fn(child: +any) -> +any"
		     },
		     "xy": {
		      "!type": "fn(index: number, x: number, y: number)"
		     },
		     "reverse": {
		      "!type": "fn()"
		     },
		     "getIndex": {
		      "!type": "fn(child: +any) -> number"
		     },
		     "replace": {
		      "!type": "fn(oldChild: +any, newChild: +any) -> +any"
		     },
		     "hasProperty": {
		      "!type": "fn(child: +any, key: [?]) -> bool"
		     },
		     "setProperty": {
		      "!type": "fn(child: +any, key: +array, value: +any, operation: number, force: bool) -> bool"
		     },
		     "checkProperty": {
		      "!type": "fn(child: +any, key: +array, value: +any, force: bool) -> bool"
		     },
		     "set": {
		      "!type": "fn(child: +Phaser.Sprite, key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool) -> bool"
		     },
		     "setAll": {
		      "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)"
		     },
		     "setAllChildren": {
		      "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)"
		     },
		     "checkAll": {
		      "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, force: bool)"
		     },
		     "addAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "subAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "multiplyAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "divideAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "callAllExists": {
		      "!type": "fn(callback: string, existsValue: bool, parameter: +any)"
		     },
		     "callbackFromArray": {
		      "!type": "fn(child: ?, callback: +array, length: number)"
		     },
		     "callAll": {
		      "!type": "fn(method: string, context: string, args: +any)"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "filter": {
		      "!type": "fn(predicate: fn(), checkExists: bool) -> +Phaser.ArraySet"
		     },
		     "forEach": {
		      "!type": "fn(callback: fn(), callbackContext: ?, checkExists: bool, args: +any)"
		     },
		     "forEachExists": {
		      "!type": "fn(callback: fn(), callbackContext: ?, args: +any)"
		     },
		     "forEachAlive": {
		      "!type": "fn(callback: fn(), callbackContext: ?, args: +any)"
		     },
		     "forEachDead": {
		      "!type": "fn(callback: fn(), callbackContext: ?, args: +any)"
		     },
		     "sort": {
		      "!type": "fn(key: string, order: number)"
		     },
		     "customSort": {
		      "!type": "fn(sortHandler: fn(), context: ?)"
		     },
		     "ascendingSortHandler": {
		      "!type": "fn(a: ?, b: ?)"
		     },
		     "descendingSortHandler": {
		      "!type": "fn(a: ?, b: ?)"
		     },
		     "iterate": {
		      "!type": "fn(key: string, value: +any, returnType: number, callback: fn(), callbackContext: ?, args: [?]) -> +any"
		     },
		     "getFirstExists": {
		      "!type": "fn(exists: bool) -> +any"
		     },
		     "getFirstAlive": {
		      "!type": "fn() -> +any"
		     },
		     "getFirstDead": {
		      "!type": "fn() -> +any"
		     },
		     "getTop": {
		      "!type": "fn() -> +any"
		     },
		     "getBottom": {
		      "!type": "fn() -> +any"
		     },
		     "countLiving": {
		      "!type": "fn() -> number"
		     },
		     "countDead": {
		      "!type": "fn() -> number"
		     },
		     "getRandom": {
		      "!type": "fn(startIndex: number, length: number) -> +any"
		     },
		     "remove": {
		      "!type": "fn(child: +any, destroy: bool, silent: bool) -> bool"
		     },
		     "moveAll": {
		      "!type": "fn(group: +Phaser.Group, silent: bool) -> +Phaser.Group"
		     },
		     "removeAll": {
		      "!type": "fn(destroy: bool, silent: bool)"
		     },
		     "removeBetween": {
		      "!type": "fn(startIndex: number, endIndex: number, destroy: bool, silent: bool)"
		     },
		     "destroy": {
		      "!type": "fn(destroyChildren: bool, soft: bool)"
		     },
		     "total": {
		      "!type": "number"
		     },
		     "length": {
		      "!type": "number"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "rotation": {
		      "!type": "number"
		     },
		     "visible": {
		      "!type": "bool"
		     },
		     "alpha": {
		      "!type": "number"
		     },
		     "children": {}
		    },
		    "RETURN_NONE": {
		     "!type": "number"
		    },
		    "RETURN_TOTAL": {
		     "!type": "number"
		    },
		    "RETURN_CHILD": {
		     "!type": "number"
		    },
		    "SORT_ASCENDING": {
		     "!type": "number"
		    },
		    "SORT_DESCENDING": {
		     "!type": "number"
		    }
		   },
		   "Plugin": {
		    "!type": "fn(game: +Phaser.Game, parent: +any)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "parent": {
		      "!type": "+any"
		     },
		     "active": {
		      "!type": "bool"
		     },
		     "visible": {
		      "!type": "bool"
		     },
		     "hasPreUpdate": {
		      "!type": "bool"
		     },
		     "hasUpdate": {
		      "!type": "bool"
		     },
		     "hasPostUpdate": {
		      "!type": "bool"
		     },
		     "hasRender": {
		      "!type": "bool"
		     },
		     "hasPostRender": {
		      "!type": "bool"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "render": {
		      "!type": "fn()"
		     },
		     "postRender": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "PluginManager": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "plugins": {
		      "!type": "[?]"
		     },
		     "add": {
		      "!type": "fn(plugin: ?|+Phaser.Plugin, parameter: ?) -> +Phaser.Plugin"
		     },
		     "remove": {
		      "!type": "fn(plugin: +Phaser.Plugin)"
		     },
		     "removeAll": {
		      "!type": "fn()"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "render": {
		      "!type": "fn()"
		     },
		     "postRender": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "ScaleManager": {
		    "!type": "fn(game: +Phaser.Game, width: number|string, height: number|string)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "dom": {
		      "!type": "+Phaser.DOM"
		     },
		     "grid": {
		      "!type": "+Phaser.FlexGrid"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     },
		     "minWidth": {
		      "!type": "number"
		     },
		     "maxWidth": {
		      "!type": "number"
		     },
		     "minHeight": {
		      "!type": "number"
		     },
		     "maxHeight": {
		      "!type": "number"
		     },
		     "offset": {
		      "!type": "+Phaser.Point"
		     },
		     "forceLandscape": {
		      "!type": "bool"
		     },
		     "forcePortrait": {
		      "!type": "bool"
		     },
		     "incorrectOrientation": {
		      "!type": "bool"
		     },
		     "onOrientationChange": {
		      "!type": "+Phaser.Signal"
		     },
		     "enterIncorrectOrientation": {
		      "!type": "+Phaser.Signal"
		     },
		     "leaveIncorrectOrientation": {
		      "!type": "+Phaser.Signal"
		     },
		     "fullScreenTarget": {
		      "!type": "+DOMElement"
		     },
		     "onFullScreenInit": {
		      "!type": "+Phaser.Signal"
		     },
		     "onFullScreenChange": {
		      "!type": "+Phaser.Signal"
		     },
		     "onFullScreenError": {
		      "!type": "+Phaser.Signal"
		     },
		     "screenOrientation": {
		      "!type": "string"
		     },
		     "scaleFactor": {
		      "!type": "+Phaser.Point"
		     },
		     "scaleFactorInversed": {
		      "!type": "+Phaser.Point"
		     },
		     "margin": {
		      "!type": "+Bounds-like"
		     },
		     "bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "aspectRatio": {
		      "!type": "number"
		     },
		     "sourceAspectRatio": {
		      "!type": "number"
		     },
		     "windowConstraints": {
		      "!type": "string"
		     },
		     "compatibility": {
		      "!type": "bool"
		     },
		     "parentIsWindow": {
		      "!type": "bool"
		     },
		     "parentNode": {
		      "!type": "+DOMElement"
		     },
		     "parentScaleFactor": {
		      "!type": "+Phaser.Point"
		     },
		     "trackParentInterval": {
		      "!type": "number"
		     },
		     "onSizeChange": {
		      "!type": "+Phaser.Signal"
		     },
		     "boot": {
		      "!type": "fn()"
		     },
		     "parseConfig": {
		      "!type": "fn(config: ?)"
		     },
		     "setupScale": {
		      "!type": "fn(width: number|string, height: number|string)"
		     },
		     "setGameSize": {
		      "!type": "fn(width: number, height: number)"
		     },
		     "setUserScale": {
		      "!type": "fn(hScale: number, vScale: +numer, hTrim: number, vTrim: number)"
		     },
		     "setResizeCallback": {
		      "!type": "fn(callback: fn(), context: ?)"
		     },
		     "setMinMax": {
		      "!type": "fn(minWidth: number, minHeight: number, maxWidth: number, maxHeight: number)"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "forceOrientation": {
		      "!type": "fn(forceLandscape: bool, forcePortrait: bool)"
		     },
		     "refresh": {
		      "!type": "fn()"
		     },
		     "getParentBounds": {
		      "!type": "fn(target: +Phaser.Rectangle) -> +Phaser.Rectangle"
		     },
		     "createFullScreenTarget": {
		      "!type": "fn()"
		     },
		     "startFullScreen": {
		      "!type": "fn(antialias: bool, allowTrampoline: bool) -> bool"
		     },
		     "stopFullScreen": {
		      "!type": "fn() -> bool"
		     },
		     "scaleSprite": {
		      "!type": "fn(sprite: +Phaser.Sprite|+Phaser.Image, width: number, height: number, letterBox: bool) -> +Phaser.Sprite|+Phaser.Image"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "boundingParent": {
		      "!type": "+DOMElement"
		     },
		     "scaleMode": {
		      "!type": "number"
		     },
		     "fullScreenScaleMode": {
		      "!type": "number"
		     },
		     "currentScaleMode": {
		      "!type": "number"
		     },
		     "pageAlignHorizontally": {
		      "!type": "bool"
		     },
		     "pageAlignVertically": {
		      "!type": "bool"
		     },
		     "isFullScreen": {
		      "!type": "bool"
		     },
		     "isPortrait": {
		      "!type": "bool"
		     },
		     "isLandscape": {
		      "!type": "bool"
		     },
		     "isGamePortrait": {
		      "!type": "bool"
		     },
		     "isGameLandscape": {
		      "!type": "bool"
		     }
		    },
		    "EXACT_FIT": {
		     "!type": "number"
		    },
		    "NO_SCALE": {
		     "!type": "number"
		    },
		    "SHOW_ALL": {
		     "!type": "number"
		    },
		    "RESIZE": {
		     "!type": "number"
		    },
		    "USER_SCALE": {
		     "!type": "number"
		    }
		   },
		   "Signal": {
		    "!type": "fn()",
		    "prototype": {
		     "memorize": {
		      "!type": "bool"
		     },
		     "active": {
		      "!type": "bool"
		     },
		     "has": {
		      "!type": "fn(listener: fn(), context: ?) -> bool"
		     },
		     "add": {
		      "!type": "fn(listener: fn(), listenerContext: ?, priority: number, args: +any) -> +Phaser.SignalBinding"
		     },
		     "addOnce": {
		      "!type": "fn(listener: fn(), listenerContext: ?, priority: number, args: +any) -> +Phaser.SignalBinding"
		     },
		     "remove": {
		      "!type": "fn(listener: fn(), context: ?) -> fn()"
		     },
		     "removeAll": {
		      "!type": "fn(context: ?)"
		     },
		     "getNumListeners": {
		      "!type": "fn() -> number"
		     },
		     "halt": {
		      "!type": "fn()"
		     },
		     "dispatch": {
		      "!type": "fn(params: +any)"
		     },
		     "forget": {
		      "!type": "fn()"
		     },
		     "dispose": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "SignalBinding": {
		    "!type": "fn(signal: +Phaser.Signal, listener: fn(), isOnce: bool, listenerContext: ?, priority: number, args: +any)",
		    "prototype": {
		     "context": {},
		     "callCount": {
		      "!type": "number"
		     },
		     "active": {
		      "!type": "bool"
		     },
		     "params": {
		      "!type": "+array|+null"
		     },
		     "execute": {
		      "!type": "fn(paramsArr: [?]) -> +any"
		     },
		     "detach": {
		      "!type": "fn() -> fn()|+null"
		     },
		     "isBound": {
		      "!type": "fn() -> bool"
		     },
		     "isOnce": {
		      "!type": "fn() -> bool"
		     },
		     "getListener": {
		      "!type": "fn() -> fn()"
		     },
		     "getSignal": {
		      "!type": "fn() -> +Phaser.Signal"
		     }
		    }
		   },
		   "Stage": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "disableVisibilityChange": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "currentRenderOrderID": {
		      "!type": "number"
		     },
		     "parseConfig": {
		      "!type": "fn(config: ?)"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "updateTransform": {
		      "!type": "fn()"
		     },
		     "checkVisibility": {
		      "!type": "fn()"
		     },
		     "visibilityChange": {
		      "!type": "fn(event: +Event)"
		     },
		     "setBackgroundColor": {
		      "!type": "fn(backgroundColor: number|string)"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "backgroundColor": {
		      "!type": "number|string"
		     },
		     "smoothed": {
		      "!type": "bool"
		     }
		    }
		   },
		   "State": {
		    "!type": "fn()",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "key": {
		      "!type": "string"
		     },
		     "add": {
		      "!type": "+Phaser.GameObjectFactory"
		     },
		     "make": {
		      "!type": "+Phaser.GameObjectCreator"
		     },
		     "camera": {
		      "!type": "+Phaser.Camera"
		     },
		     "cache": {
		      "!type": "+Phaser.Cache"
		     },
		     "input": {
		      "!type": "+Phaser.Input"
		     },
		     "load": {
		      "!type": "+Phaser.Loader"
		     },
		     "math": {
		      "!type": "+Phaser.Math"
		     },
		     "sound": {
		      "!type": "+Phaser.SoundManager"
		     },
		     "scale": {
		      "!type": "+Phaser.ScaleManager"
		     },
		     "stage": {
		      "!type": "+Phaser.Stage"
		     },
		     "time": {
		      "!type": "+Phaser.Time"
		     },
		     "tweens": {
		      "!type": "+Phaser.TweenManager"
		     },
		     "world": {
		      "!type": "+Phaser.World"
		     },
		     "particles": {
		      "!type": "+Phaser.Particles"
		     },
		     "physics": {
		      "!type": "+Phaser.Physics"
		     },
		     "rnd": {
		      "!type": "+Phaser.RandomDataGenerator"
		     },
		     "init": {
		      "!type": "fn()"
		     },
		     "preload": {
		      "!type": "fn()"
		     },
		     "loadUpdate": {
		      "!type": "fn()"
		     },
		     "loadRender": {
		      "!type": "fn()"
		     },
		     "create": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "preRender": {
		      "!type": "fn()"
		     },
		     "render": {
		      "!type": "fn()"
		     },
		     "resize": {
		      "!type": "fn()"
		     },
		     "paused": {
		      "!type": "fn()"
		     },
		     "resumed": {
		      "!type": "fn()"
		     },
		     "pauseUpdate": {
		      "!type": "fn()"
		     },
		     "shutdown": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "StateManager": {
		    "!type": "fn(game: +Phaser.Game, pendingState: +Phaser.State|?)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "states": {},
		     "current": {
		      "!type": "string"
		     },
		     "onStateChange": {
		      "!type": "+Phaser.Signal"
		     },
		     "onInitCallback": {
		      "!type": "fn()"
		     },
		     "onPreloadCallback": {
		      "!type": "fn()"
		     },
		     "onCreateCallback": {
		      "!type": "fn()"
		     },
		     "onUpdateCallback": {
		      "!type": "fn()"
		     },
		     "onRenderCallback": {
		      "!type": "fn()"
		     },
		     "onResizeCallback": {
		      "!type": "fn()"
		     },
		     "onPreRenderCallback": {
		      "!type": "fn()"
		     },
		     "onLoadUpdateCallback": {
		      "!type": "fn()"
		     },
		     "onLoadRenderCallback": {
		      "!type": "fn()"
		     },
		     "onPausedCallback": {
		      "!type": "fn()"
		     },
		     "onResumedCallback": {
		      "!type": "fn()"
		     },
		     "onPauseUpdateCallback": {
		      "!type": "fn()"
		     },
		     "onShutDownCallback": {
		      "!type": "fn()"
		     },
		     "add": {
		      "!type": "fn(key: string, state: +Phaser.State|?|fn(), autoStart: bool)"
		     },
		     "remove": {
		      "!type": "fn(key: string)"
		     },
		     "start": {
		      "!type": "fn(key: string, clearWorld: bool, clearCache: bool, parameter: ?)"
		     },
		     "restart": {
		      "!type": "fn(clearWorld: bool, clearCache: bool, parameter: ?)"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "clearCurrentState": {
		      "!type": "fn()"
		     },
		     "checkState": {
		      "!type": "fn(key: string) -> bool"
		     },
		     "link": {
		      "!type": "fn(key: string)"
		     },
		     "unlink": {
		      "!type": "fn(key: string)"
		     },
		     "getCurrentState": {
		      "!type": "fn() -> ?"
		     },
		     "loadComplete": {
		      "!type": "fn()"
		     },
		     "pause": {
		      "!type": "fn()"
		     },
		     "resume": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "pauseUpdate": {
		      "!type": "fn()"
		     },
		     "preRender": {
		      "!type": "fn(elapsedTime: number)"
		     },
		     "resize": {
		      "!type": "fn()"
		     },
		     "render": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "created": {
		      "!type": "bool"
		     }
		    }
		   },
		   "World": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "camera": {
		      "!type": "+Phaser.Camera"
		     },
		     "_definedSize": {
		      "!type": "bool"
		     },
		     "_width": {
		      "!type": "number"
		     },
		     "_height": {
		      "!type": "number"
		     },
		     "boot": {
		      "!type": "fn()"
		     },
		     "stateChange": {
		      "!type": "fn()"
		     },
		     "setBounds": {
		      "!type": "fn(x: number, y: number, width: number, height: number)"
		     },
		     "resize": {
		      "!type": "fn(width: number, height: number)"
		     },
		     "shutdown": {
		      "!type": "fn()"
		     },
		     "wrap": {
		      "!type": "fn(sprite: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Text, padding: number, useBounds: bool, horizontal: bool, vertical: bool)"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     },
		     "centerX": {
		      "!type": "number"
		     },
		     "centerY": {
		      "!type": "number"
		     },
		     "randomX": {
		      "!type": "number"
		     },
		     "randomY": {
		      "!type": "number"
		     },
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "z": {
		      "!type": "number"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "physicsType": {
		      "!type": "number"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "ignoreDestroy": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "classType": {},
		     "cursor": {
		      "!type": "+DisplayObject"
		     },
		     "enableBody": {
		      "!type": "bool"
		     },
		     "enableBodyDebug": {
		      "!type": "bool"
		     },
		     "physicsBodyType": {
		      "!type": "number"
		     },
		     "physicsSortDirection": {
		      "!type": "number"
		     },
		     "onDestroy": {
		      "!type": "+Phaser.Signal"
		     },
		     "cursorIndex": {
		      "!type": "number"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "hash": {
		      "!type": "+array"
		     },
		     "add": {
		      "!type": "fn(child: +DisplayObject, silent: bool) -> +DisplayObject"
		     },
		     "addToHash": {
		      "!type": "fn(child: +DisplayObject) -> bool"
		     },
		     "removeFromHash": {
		      "!type": "fn(child: +DisplayObject) -> bool"
		     },
		     "addMultiple": {
		      "!type": "fn(children: [?]|+Phaser.Group, silent: bool) -> [?]|+Phaser.Group"
		     },
		     "addAt": {
		      "!type": "fn(child: +DisplayObject, index: number, silent: bool) -> +DisplayObject"
		     },
		     "getAt": {
		      "!type": "fn(index: number) -> +DisplayObject|number"
		     },
		     "create": {
		      "!type": "fn(x: number, y: number, key: string, frame: number|string, exists: bool) -> +DisplayObject"
		     },
		     "createMultiple": {
		      "!type": "fn(quantity: number, key: string, frame: number|string, exists: bool)"
		     },
		     "updateZ": {
		      "!type": "fn()"
		     },
		     "resetCursor": {
		      "!type": "fn(index: number) -> +any"
		     },
		     "next": {
		      "!type": "fn() -> +any"
		     },
		     "previous": {
		      "!type": "fn() -> +any"
		     },
		     "swap": {
		      "!type": "fn(child1: +any, child2: +any)"
		     },
		     "bringToTop": {
		      "!type": "fn(child: +any) -> +any"
		     },
		     "sendToBack": {
		      "!type": "fn(child: +any) -> +any"
		     },
		     "moveUp": {
		      "!type": "fn(child: +any) -> +any"
		     },
		     "moveDown": {
		      "!type": "fn(child: +any) -> +any"
		     },
		     "xy": {
		      "!type": "fn(index: number, x: number, y: number)"
		     },
		     "reverse": {
		      "!type": "fn()"
		     },
		     "getIndex": {
		      "!type": "fn(child: +any) -> number"
		     },
		     "replace": {
		      "!type": "fn(oldChild: +any, newChild: +any) -> +any"
		     },
		     "hasProperty": {
		      "!type": "fn(child: +any, key: [?]) -> bool"
		     },
		     "setProperty": {
		      "!type": "fn(child: +any, key: +array, value: +any, operation: number, force: bool) -> bool"
		     },
		     "checkProperty": {
		      "!type": "fn(child: +any, key: +array, value: +any, force: bool) -> bool"
		     },
		     "set": {
		      "!type": "fn(child: +Phaser.Sprite, key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool) -> bool"
		     },
		     "setAll": {
		      "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)"
		     },
		     "setAllChildren": {
		      "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)"
		     },
		     "checkAll": {
		      "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, force: bool)"
		     },
		     "addAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "subAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "multiplyAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "divideAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "callAllExists": {
		      "!type": "fn(callback: string, existsValue: bool, parameter: +any)"
		     },
		     "callbackFromArray": {
		      "!type": "fn(child: ?, callback: +array, length: number)"
		     },
		     "callAll": {
		      "!type": "fn(method: string, context: string, args: +any)"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "filter": {
		      "!type": "fn(predicate: fn(), checkExists: bool) -> +Phaser.ArraySet"
		     },
		     "forEach": {
		      "!type": "fn(callback: fn(), callbackContext: ?, checkExists: bool, args: +any)"
		     },
		     "forEachExists": {
		      "!type": "fn(callback: fn(), callbackContext: ?, args: +any)"
		     },
		     "forEachAlive": {
		      "!type": "fn(callback: fn(), callbackContext: ?, args: +any)"
		     },
		     "forEachDead": {
		      "!type": "fn(callback: fn(), callbackContext: ?, args: +any)"
		     },
		     "sort": {
		      "!type": "fn(key: string, order: number)"
		     },
		     "customSort": {
		      "!type": "fn(sortHandler: fn(), context: ?)"
		     },
		     "ascendingSortHandler": {
		      "!type": "fn(a: ?, b: ?)"
		     },
		     "descendingSortHandler": {
		      "!type": "fn(a: ?, b: ?)"
		     },
		     "iterate": {
		      "!type": "fn(key: string, value: +any, returnType: number, callback: fn(), callbackContext: ?, args: [?]) -> +any"
		     },
		     "getFirstExists": {
		      "!type": "fn(exists: bool) -> +any"
		     },
		     "getFirstAlive": {
		      "!type": "fn() -> +any"
		     },
		     "getFirstDead": {
		      "!type": "fn() -> +any"
		     },
		     "getTop": {
		      "!type": "fn() -> +any"
		     },
		     "getBottom": {
		      "!type": "fn() -> +any"
		     },
		     "countLiving": {
		      "!type": "fn() -> number"
		     },
		     "countDead": {
		      "!type": "fn() -> number"
		     },
		     "getRandom": {
		      "!type": "fn(startIndex: number, length: number) -> +any"
		     },
		     "remove": {
		      "!type": "fn(child: +any, destroy: bool, silent: bool) -> bool"
		     },
		     "moveAll": {
		      "!type": "fn(group: +Phaser.Group, silent: bool) -> +Phaser.Group"
		     },
		     "removeAll": {
		      "!type": "fn(destroy: bool, silent: bool)"
		     },
		     "removeBetween": {
		      "!type": "fn(startIndex: number, endIndex: number, destroy: bool, silent: bool)"
		     },
		     "destroy": {
		      "!type": "fn(destroyChildren: bool, soft: bool)"
		     },
		     "total": {
		      "!type": "number"
		     },
		     "length": {
		      "!type": "number"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "rotation": {
		      "!type": "number"
		     },
		     "visible": {
		      "!type": "bool"
		     },
		     "alpha": {
		      "!type": "number"
		     },
		     "children": {}
		    }
		   },
		   "BitmapData": {
		    "!type": "fn(game: +Phaser.Game, key: string, width: number, height: number)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "key": {
		      "!type": "string"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     },
		     "canvas": {
		      "!type": "+HTMLCanvasElement"
		     },
		     "context": {
		      "!type": "+CanvasRenderingContext2D"
		     },
		     "ctx": {
		      "!type": "+CanvasRenderingContext2D"
		     },
		     "imageData": {
		      "!type": "+ImageData"
		     },
		     "data": {
		      "!type": "+Uint8ClampedArray"
		     },
		     "pixels": {
		      "!type": "+Uint32Array"
		     },
		     "baseTexture": {
		      "!type": "+PIXI.BaseTexture"
		     },
		     "texture": {
		      "!type": "+PIXI.Texture"
		     },
		     "textureFrame": {
		      "!type": "+Phaser.Frame"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "disableTextureUpload": {
		      "!type": "bool"
		     },
		     "dirty": {
		      "!type": "bool"
		     },
		     "move": {
		      "!type": "fn(x: number, y: number) -> +Phaser.BitmapData"
		     },
		     "moveH": {
		      "!type": "fn(distance: number) -> +Phaser.BitmapData"
		     },
		     "moveV": {
		      "!type": "fn(distance: number) -> +Phaser.BitmapData"
		     },
		     "add": {
		      "!type": "fn(object: +Phaser.Sprite|[?]|+Phaser.Image|[?]) -> +Phaser.BitmapData"
		     },
		     "load": {
		      "!type": "fn(source: +Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapData|+Image|+HTMLCanvasElement|string) -> +Phaser.BitmapData"
		     },
		     "clear": {
		      "!type": "fn(x: number, y: number, width: number, height: number) -> +Phaser.BitmapData"
		     },
		     "cls": {
		      "!type": "fn()"
		     },
		     "fill": {
		      "!type": "fn(r: number, g: number, b: number, a: number) -> +Phaser.BitmapData"
		     },
		     "generateTexture": {
		      "!type": "fn(key: string) -> +PIXI.Texture"
		     },
		     "resize": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "update": {
		      "!type": "fn(x: number, y: number, width: number, height: number) -> +Phaser.BitmapData"
		     },
		     "processPixelRGB": {
		      "!type": "fn(callback: fn(), callbackContext: ?, x: number, y: number, width: number, height: number) -> +Phaser.BitmapData"
		     },
		     "processPixel": {
		      "!type": "fn(callback: fn(), callbackContext: ?, x: number, y: number, width: number, height: number) -> +Phaser.BitmapData"
		     },
		     "replaceRGB": {
		      "!type": "fn(r1: number, g1: number, b1: number, a1: number, r2: number, g2: number, b2: number, a2: number, region: +Phaser.Rectangle) -> +Phaser.BitmapData"
		     },
		     "setHSL": {
		      "!type": "fn(h: number, s: number, l: number, region: +Phaser.Rectangle) -> +Phaser.BitmapData"
		     },
		     "shiftHSL": {
		      "!type": "fn(h: number, s: number, l: number, region: +Phaser.Rectangle) -> +Phaser.BitmapData"
		     },
		     "setPixel32": {
		      "!type": "fn(x: number, y: number, red: number, green: number, blue: number, alpha: number, immediate: bool) -> +Phaser.BitmapData"
		     },
		     "setPixel": {
		      "!type": "fn(x: number, y: number, red: number, green: number, blue: number, immediate: bool) -> +Phaser.BitmapData"
		     },
		     "getPixel": {
		      "!type": "fn(x: number, y: number, out: ?) -> ?"
		     },
		     "getPixel32": {
		      "!type": "fn(x: number, y: number) -> number"
		     },
		     "getPixelRGB": {
		      "!type": "fn(x: number, y: number, out: ?, hsl: bool, hsv: bool) -> ?"
		     },
		     "getPixels": {
		      "!type": "fn(rect: +Phaser.Rectangle) -> +ImageData"
		     },
		     "getFirstPixel": {
		      "!type": "fn(direction: number) -> ?"
		     },
		     "getBounds": {
		      "!type": "fn(rect: +Phaser.Rectangle) -> +Phaser.Rectangle"
		     },
		     "addToWorld": {
		      "!type": "fn(x: number, y: number, anchorX: number, anchorY: number, scaleX: number, scaleY: number) -> +Phaser.Image"
		     },
		     "copy": {
		      "!type": "fn(source: +Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapData|+Image|+HTMLCanvasElement|string, x: number, y: number, width: number, height: number, tx: number, ty: number, newWidth: number, newHeight: number, rotate: number, anchorX: number, anchorY: number, scaleX: number, scaleY: number, alpha: number, blendMode: string, roundPx: bool) -> +Phaser.BitmapData"
		     },
		     "copyRect": {
		      "!type": "fn(source: +Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapData|+Image|string, area: +Phaser.Rectangle, x: number, y: number, alpha: number, blendMode: string, roundPx: bool) -> +Phaser.BitmapData"
		     },
		     "draw": {
		      "!type": "fn(source: +Phaser.Sprite|+Phaser.Image|+Phaser.Text, x: number, y: number, width: number, height: number, blendMode: string, roundPx: bool) -> +Phaser.BitmapData"
		     },
		     "drawGroup": {
		      "!type": "fn(group: +Phaser.Group, blendMode: string, roundPx: bool) -> +Phaser.BitmapData"
		     },
		     "drawFull": {
		      "!type": "fn(parent: +Phaser.World|+Phaser.Group|+Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapText, blendMode: string, roundPx: bool) -> +Phaser.BitmapData"
		     },
		     "shadow": {
		      "!type": "fn(color: string, blur: number, x: number, y: number) -> +Phaser.BitmapData"
		     },
		     "alphaMask": {
		      "!type": "fn(source: +Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapData|+Image|+HTMLCanvasElement|string, mask: +Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapData|+Image|+HTMLCanvasElement|string, sourceRect: +Phaser.Rectangle, maskRect: +Phaser.Rectangle) -> +Phaser.BitmapData"
		     },
		     "extract": {
		      "!type": "fn(destination: +Phaser.BitmapData, r: number, g: number, b: number, a: number, resize: bool, r2: number, g2: number, b2: number) -> +Phaser.BitmapData"
		     },
		     "rect": {
		      "!type": "fn(x: number, y: number, width: number, height: number, fillStyle: string) -> +Phaser.BitmapData"
		     },
		     "text": {
		      "!type": "fn(text: string, x: number, y: number, font: string, color: string, shadow: bool) -> +Phaser.BitmapData"
		     },
		     "circle": {
		      "!type": "fn(x: number, y: number, radius: number, fillStyle: string) -> +Phaser.BitmapData"
		     },
		     "line": {
		      "!type": "fn(x1: number, y1: number, x2: number, y2: number, color: string, width: number) -> +Phaser.BitmapData"
		     },
		     "textureLine": {
		      "!type": "fn(line: +Phaser.Line, image: string|+Image, repeat: string) -> +Phaser.BitmapData"
		     },
		     "render": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "blendReset": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "blendSourceOver": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "blendSourceIn": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "blendSourceOut": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "blendSourceAtop": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "blendDestinationOver": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "blendDestinationIn": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "blendDestinationOut": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "blendDestinationAtop": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "blendXor": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "blendAdd": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "blendMultiply": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "blendScreen": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "blendOverlay": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "blendDarken": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "blendLighten": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "blendColorDodge": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "blendColorBurn": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "blendHardLight": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "blendSoftLight": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "blendDifference": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "blendExclusion": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "blendHue": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "blendSaturation": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "blendColor": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     },
		     "blendLuminosity": {
		      "!type": "fn() -> +Phaser.BitmapData"
		     }
		    },
		    "getTransform": {
		     "!type": "fn(translateX: number, translateY: number, scaleX: number, scaleY: number, skewX: number, skewY: number) -> ?"
		    }
		   },
		   "BitmapText": {
		    "!type": "fn(game: +Phaser.Game, x: number, y: number, font: string, text: string, size: number, align: string)",
		    "prototype": {
		     "type": {
		      "!type": "number"
		     },
		     "physicsType": {
		      "!type": "number"
		     },
		     "textWidth": {
		      "!type": "number"
		     },
		     "textHeight": {
		      "!type": "number"
		     },
		     "anchor": {
		      "!type": "+Phaser.Point"
		     },
		     "dirty": {
		      "!type": "bool"
		     },
		     "preUpdate": {
		      "!type": "fn() -> bool"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "setText": {
		      "!type": "fn(text: string)"
		     },
		     "purgeGlyphs": {
		      "!type": "fn() -> number"
		     },
		     "align": {
		      "!type": "string"
		     },
		     "tint": {
		      "!type": "number"
		     },
		     "font": {
		      "!type": "string"
		     },
		     "fontSize": {
		      "!type": "number"
		     },
		     "text": {
		      "!type": "string"
		     },
		     "maxWidth": {
		      "!type": "number"
		     },
		     "smoothed": {
		      "!type": "bool"
		     },
		     "children": {},
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "components": {},
		     "z": {
		      "!type": "number"
		     },
		     "events": {
		      "!type": "+Phaser.Events"
		     },
		     "animations": {
		      "!type": "+Phaser.AnimationManager"
		     },
		     "key": {
		      "!type": "string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture"
		     },
		     "world": {
		      "!type": "+Phaser.Point"
		     },
		     "debug": {
		      "!type": "bool"
		     },
		     "previousPosition": {
		      "!type": "+Phaser.Point"
		     },
		     "previousRotation": {
		      "!type": "number"
		     },
		     "renderOrderID": {
		      "!type": "number"
		     },
		     "fresh": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "autoCull": {
		      "!type": "bool"
		     },
		     "inCamera": {
		      "!type": "bool"
		     },
		     "offsetX": {
		      "!type": "number"
		     },
		     "offsetY": {
		      "!type": "number"
		     },
		     "left": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "destroyPhase": {
		      "!type": "bool"
		     },
		     "destroy": {
		      "!type": "fn(destroyChildren: bool)"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "input": {
		      "!type": "+Phaser.InputHandler|+null"
		     },
		     "inputEnabled": {
		      "!type": "bool"
		     },
		     "checkWorldBounds": {
		      "!type": "bool"
		     },
		     "outOfBoundsKill": {
		      "!type": "bool"
		     },
		     "inWorld": {
		      "!type": "bool"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "lifespan": {
		      "!type": "number"
		     },
		     "revive": {
		      "!type": "fn(health: number) -> +PIXI.DisplayObject"
		     },
		     "kill": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "body": {
		      "!type": "+Phaser.Physics.Arcade.Body|+Phaser.Physics.P2.Body|+Phaser.Physics.Ninja.Body|+null"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "reset": {
		      "!type": "fn(x: number, y: number, health: number) -> +PIXI.DisplayObject"
		     }
		    }
		   },
		   "Button": {
		    "!type": "fn(game: +Phaser.Game, x: number, y: number, key: string, callback: fn(), callbackContext: ?, overFrame: string|number, outFrame: string|number, downFrame: string|number, upFrame: string|number)",
		    "prototype": {
		     "type": {
		      "!type": "number"
		     },
		     "physicsType": {
		      "!type": "number"
		     },
		     "onOverSound": {
		      "!type": "+Phaser.Sound|+Phaser.AudioSprite|+null"
		     },
		     "onOutSound": {
		      "!type": "+Phaser.Sound|+Phaser.AudioSprite|+null"
		     },
		     "onDownSound": {
		      "!type": "+Phaser.Sound|+Phaser.AudioSprite|+null"
		     },
		     "onUpSound": {
		      "!type": "+Phaser.Sound|+Phaser.AudioSprite|+null"
		     },
		     "onOverSoundMarker": {
		      "!type": "string"
		     },
		     "onOutSoundMarker": {
		      "!type": "string"
		     },
		     "onDownSoundMarker": {
		      "!type": "string"
		     },
		     "onUpSoundMarker": {
		      "!type": "string"
		     },
		     "onInputOver": {
		      "!type": "+Phaser.Signal"
		     },
		     "onInputOut": {
		      "!type": "+Phaser.Signal"
		     },
		     "onInputDown": {
		      "!type": "+Phaser.Signal"
		     },
		     "onInputUp": {
		      "!type": "+Phaser.Signal"
		     },
		     "onOverMouseOnly": {
		      "!type": "bool"
		     },
		     "freezeFrames": {
		      "!type": "bool"
		     },
		     "forceOut": {
		      "!type": "bool"
		     },
		     "clearFrames": {
		      "!type": "fn()"
		     },
		     "removedFromWorld": {
		      "!type": "fn()"
		     },
		     "setFrames": {
		      "!type": "fn(overFrame: string|number, outFrame: string|number, downFrame: string|number, upFrame: string|number)"
		     },
		     "setSounds": {
		      "!type": "fn(overSound: +Phaser.Sound|+Phaser.AudioSprite, overMarker: string, downSound: +Phaser.Sound|+Phaser.AudioSprite, downMarker: string, outSound: +Phaser.Sound|+Phaser.AudioSprite, outMarker: string, upSound: +Phaser.Sound|+Phaser.AudioSprite, upMarker: string)"
		     },
		     "setOverSound": {
		      "!type": "fn(sound: +Phaser.Sound|+Phaser.AudioSprite, marker: string)"
		     },
		     "setOutSound": {
		      "!type": "fn(sound: +Phaser.Sound|+Phaser.AudioSprite, marker: string)"
		     },
		     "setDownSound": {
		      "!type": "fn(sound: +Phaser.Sound|+Phaser.AudioSprite, marker: string)"
		     },
		     "setUpSound": {
		      "!type": "fn(sound: +Phaser.Sound|+Phaser.AudioSprite, marker: string)"
		     },
		     "onInputOverHandler": {
		      "!type": "fn(sprite: +Phaser.Button, pointer: +Phaser.Pointer)"
		     },
		     "onInputOutHandler": {
		      "!type": "fn(sprite: +Phaser.Button, pointer: +Phaser.Pointer)"
		     },
		     "onInputDownHandler": {
		      "!type": "fn(sprite: +Phaser.Button, pointer: +Phaser.Pointer)"
		     },
		     "onInputUpHandler": {
		      "!type": "fn(sprite: +Phaser.Button, pointer: +Phaser.Pointer)"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "anchor": {},
		     "texture": {},
		     "tint": {},
		     "tintedTexture": {},
		     "blendMode": {},
		     "shader": {},
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "components": {},
		     "z": {
		      "!type": "number"
		     },
		     "events": {
		      "!type": "+Phaser.Events"
		     },
		     "animations": {
		      "!type": "+Phaser.AnimationManager"
		     },
		     "key": {
		      "!type": "string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture"
		     },
		     "world": {
		      "!type": "+Phaser.Point"
		     },
		     "debug": {
		      "!type": "bool"
		     },
		     "previousPosition": {
		      "!type": "+Phaser.Point"
		     },
		     "previousRotation": {
		      "!type": "number"
		     },
		     "renderOrderID": {
		      "!type": "number"
		     },
		     "fresh": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "play": {
		      "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> +Phaser.Animation"
		     },
		     "autoCull": {
		      "!type": "bool"
		     },
		     "inCamera": {
		      "!type": "bool"
		     },
		     "offsetX": {
		      "!type": "number"
		     },
		     "offsetY": {
		      "!type": "number"
		     },
		     "left": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "bringToTop": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "sendToBack": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "moveUp": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "moveDown": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "cropRect": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "crop": {
		      "!type": "fn(rect: +Phaser.Rectangle, copy: bool)"
		     },
		     "updateCrop": {
		      "!type": "fn()"
		     },
		     "destroyPhase": {
		      "!type": "bool"
		     },
		     "destroy": {
		      "!type": "fn(destroyChildren: bool)"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "input": {
		      "!type": "+Phaser.InputHandler|+null"
		     },
		     "inputEnabled": {
		      "!type": "bool"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "lifespan": {
		      "!type": "number"
		     },
		     "revive": {
		      "!type": "fn(health: number) -> +PIXI.DisplayObject"
		     },
		     "kill": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "loadTexture": {
		      "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)"
		     },
		     "setFrame": {
		      "!type": "fn(frame: +Phaser.Frame)"
		     },
		     "resizeFrame": {
		      "!type": "fn(parent: ?, width: number, height: number)"
		     },
		     "resetFrame": {
		      "!type": "fn()"
		     },
		     "frame": {
		      "!type": "number"
		     },
		     "frameName": {
		      "!type": "string"
		     },
		     "overlap": {
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> bool"
		     },
		     "reset": {
		      "!type": "fn(x: number, y: number, health: number) -> +PIXI.DisplayObject"
		     },
		     "smoothed": {
		      "!type": "bool"
		     }
		    }
		   },
		   "Component": {
		    "Angle": {
		     "!type": "fn()",
		     "prototype": {
		      "angle": {
		       "!type": "number"
		      }
		     }
		    },
		    "Animation": {
		     "!type": "fn()",
		     "prototype": {
		      "play": {
		       "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> +Phaser.Animation"
		      }
		     }
		    },
		    "AutoCull": {
		     "!type": "fn()",
		     "prototype": {
		      "autoCull": {
		       "!type": "bool"
		      },
		      "inCamera": {
		       "!type": "bool"
		      }
		     }
		    },
		    "Bounds": {
		     "!type": "fn()",
		     "prototype": {
		      "offsetX": {
		       "!type": "number"
		      },
		      "offsetY": {
		       "!type": "number"
		      },
		      "left": {
		       "!type": "number"
		      },
		      "right": {
		       "!type": "number"
		      },
		      "top": {
		       "!type": "number"
		      },
		      "bottom": {
		       "!type": "number"
		      }
		     }
		    },
		    "BringToTop": {
		     "!type": "fn()",
		     "prototype": {
		      "bringToTop": {
		       "!type": "fn() -> +PIXI.DisplayObject"
		      },
		      "sendToBack": {
		       "!type": "fn() -> +PIXI.DisplayObject"
		      },
		      "moveUp": {
		       "!type": "fn() -> +PIXI.DisplayObject"
		      },
		      "moveDown": {
		       "!type": "fn() -> +PIXI.DisplayObject"
		      }
		     }
		    },
		    "!type": "fn()",
		    "Core": {
		     "!type": "fn()",
		     "install": {
		      "!type": "fn()"
		     },
		     "init": {
		      "!type": "fn()"
		     },
		     "prototype": {
		      "game": {
		       "!type": "+Phaser.Game"
		      },
		      "name": {
		       "!type": "string"
		      },
		      "components": {},
		      "z": {
		       "!type": "number"
		      },
		      "events": {
		       "!type": "+Phaser.Events"
		      },
		      "animations": {
		       "!type": "+Phaser.AnimationManager"
		      },
		      "key": {
		       "!type": "string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture"
		      },
		      "world": {
		       "!type": "+Phaser.Point"
		      },
		      "debug": {
		       "!type": "bool"
		      },
		      "previousPosition": {
		       "!type": "+Phaser.Point"
		      },
		      "previousRotation": {
		       "!type": "number"
		      },
		      "renderOrderID": {
		       "!type": "number"
		      },
		      "fresh": {
		       "!type": "bool"
		      },
		      "pendingDestroy": {
		       "!type": "bool"
		      },
		      "exists": {
		       "!type": "bool"
		      },
		      "update": {
		       "!type": "fn()"
		      },
		      "postUpdate": {
		       "!type": "fn()"
		      }
		     }
		    },
		    "Crop": {
		     "!type": "fn()",
		     "prototype": {
		      "cropRect": {
		       "!type": "+Phaser.Rectangle"
		      },
		      "crop": {
		       "!type": "fn(rect: +Phaser.Rectangle, copy: bool)"
		      },
		      "updateCrop": {
		       "!type": "fn()"
		      }
		     }
		    },
		    "Delta": {
		     "!type": "fn()",
		     "prototype": {
		      "deltaX": {
		       "!type": "number"
		      },
		      "deltaY": {
		       "!type": "number"
		      },
		      "deltaZ": {
		       "!type": "number"
		      }
		     }
		    },
		    "Destroy": {
		     "!type": "fn()",
		     "prototype": {
		      "destroyPhase": {
		       "!type": "bool"
		      },
		      "destroy": {
		       "!type": "fn(destroyChildren: bool)"
		      }
		     }
		    },
		    "FixedToCamera": {
		     "!type": "fn()",
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "prototype": {
		      "fixedToCamera": {
		       "!type": "bool"
		      },
		      "cameraOffset": {
		       "!type": "+Phaser.Point"
		      }
		     }
		    },
		    "Health": {
		     "!type": "fn()",
		     "prototype": {
		      "health": {
		       "!type": "number"
		      },
		      "maxHealth": {
		       "!type": "number"
		      },
		      "damage": {},
		      "heal": {}
		     }
		    },
		    "InCamera": {
		     "!type": "fn()",
		     "prototype": {
		      "inCamera": {
		       "!type": "bool"
		      }
		     }
		    },
		    "InputEnabled": {
		     "!type": "fn()",
		     "prototype": {
		      "input": {
		       "!type": "+Phaser.InputHandler|+null"
		      },
		      "inputEnabled": {
		       "!type": "bool"
		      }
		     }
		    },
		    "InWorld": {
		     "!type": "fn()",
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "prototype": {
		      "checkWorldBounds": {
		       "!type": "bool"
		      },
		      "outOfBoundsKill": {
		       "!type": "bool"
		      },
		      "inWorld": {
		       "!type": "bool"
		      }
		     }
		    },
		    "LifeSpan": {
		     "!type": "fn()",
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "prototype": {
		      "alive": {
		       "!type": "bool"
		      },
		      "lifespan": {
		       "!type": "number"
		      },
		      "revive": {
		       "!type": "fn(health: number) -> +PIXI.DisplayObject"
		      },
		      "kill": {
		       "!type": "fn() -> +PIXI.DisplayObject"
		      }
		     }
		    },
		    "LoadTexture": {
		     "!type": "fn()",
		     "prototype": {
		      "loadTexture": {
		       "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)"
		      },
		      "setFrame": {
		       "!type": "fn(frame: +Phaser.Frame)"
		      },
		      "resizeFrame": {
		       "!type": "fn(parent: ?, width: number, height: number)"
		      },
		      "resetFrame": {
		       "!type": "fn()"
		      },
		      "frame": {
		       "!type": "number"
		      },
		      "frameName": {
		       "!type": "string"
		      }
		     }
		    },
		    "Overlap": {
		     "!type": "fn()",
		     "prototype": {
		      "overlap": {
		       "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> bool"
		      }
		     }
		    },
		    "PhysicsBody": {
		     "!type": "fn()",
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "prototype": {
		      "body": {
		       "!type": "+Phaser.Physics.Arcade.Body|+Phaser.Physics.P2.Body|+Phaser.Physics.Ninja.Body|+null"
		      },
		      "x": {
		       "!type": "number"
		      },
		      "y": {
		       "!type": "number"
		      }
		     }
		    },
		    "Reset": {
		     "!type": "fn()",
		     "prototype": {
		      "reset": {
		       "!type": "fn(x: number, y: number, health: number) -> +PIXI.DisplayObject"
		      }
		     }
		    },
		    "ScaleMinMax": {
		     "!type": "fn()",
		     "prototype": {
		      "transformCallback": {
		       "!type": "fn()"
		      },
		      "transformCallbackContext": {},
		      "scaleMin": {
		       "!type": "+Phaser.Point"
		      },
		      "scaleMax": {
		       "!type": "+Phaser.Point"
		      },
		      "setScaleMinMax": {
		       "!type": "fn(minX: number|+null, minY: number|+null, maxX: number|+null, maxY: number|+null)"
		      }
		     }
		    },
		    "Smoothed": {
		     "!type": "fn()",
		     "prototype": {
		      "smoothed": {
		       "!type": "bool"
		      }
		     }
		    }
		   },
		   "Events": {
		    "!type": "fn(sprite: +Phaser.Sprite)",
		    "prototype": {
		     "parent": {
		      "!type": "+Phaser.Sprite"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "onAddedToGroup": {
		      "!type": "+Phaser.Signal"
		     },
		     "onRemovedFromGroup": {
		      "!type": "+Phaser.Signal"
		     },
		     "onRemovedFromWorld": {
		      "!type": "+Phaser.Signal"
		     },
		     "onDestroy": {
		      "!type": "+Phaser.Signal"
		     },
		     "onKilled": {
		      "!type": "+Phaser.Signal"
		     },
		     "onRevived": {
		      "!type": "+Phaser.Signal"
		     },
		     "onOutOfBounds": {
		      "!type": "+Phaser.Signal"
		     },
		     "onEnterBounds": {
		      "!type": "+Phaser.Signal"
		     },
		     "onInputOver": {
		      "!type": "+Phaser.Signal"
		     },
		     "onInputOut": {
		      "!type": "+Phaser.Signal"
		     },
		     "onInputDown": {
		      "!type": "+Phaser.Signal"
		     },
		     "onInputUp": {
		      "!type": "+Phaser.Signal"
		     },
		     "onDragStart": {
		      "!type": "+Phaser.Signal"
		     },
		     "onDragUpdate": {
		      "!type": "+Phaser.Signal"
		     },
		     "onDragStop": {
		      "!type": "+Phaser.Signal"
		     },
		     "onAnimationStart": {
		      "!type": "+Phaser.Signal"
		     },
		     "onAnimationComplete": {
		      "!type": "+Phaser.Signal"
		     },
		     "onAnimationLoop": {
		      "!type": "+Phaser.Signal"
		     }
		    }
		   },
		   "Creature": {
		    "!type": "fn(game: +Phaser.Game, x: number, y: number, key: string|+PIXI.Texture, mesh: string, animation: string)",
		    "prototype": {
		     "type": {
		      "!type": "number"
		     },
		     "animation": {
		      "!type": "+CreatureAnimation"
		     },
		     "manager": {
		      "!type": "+CreatureManager"
		     },
		     "timeDelta": {
		      "!type": "number"
		     },
		     "texture": {
		      "!type": "+PIXI.Texture"
		     },
		     "creatureBoundsMin": {
		      "!type": "+Phaser.Point"
		     },
		     "creatureBoundsMax": {
		      "!type": "+Phaser.Point"
		     },
		     "vertices": {
		      "!type": "+PIXI.Float32Array"
		     },
		     "uvs": {
		      "!type": "+PIXI.Float32Array"
		     },
		     "indices": {
		      "!type": "+PIXI.Uint16Array"
		     },
		     "colors": {
		      "!type": "+PIXI.Uint16Array"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "setAnimation": {
		      "!type": "fn(key: string)"
		     },
		     "play": {
		      "!type": "fn(loop: bool)"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "isPlaying": {
		      "!type": "bool"
		     },
		     "loop": {
		      "!type": "bool"
		     },
		     "children": {},
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "components": {},
		     "z": {
		      "!type": "number"
		     },
		     "events": {
		      "!type": "+Phaser.Events"
		     },
		     "animations": {
		      "!type": "+Phaser.AnimationManager"
		     },
		     "key": {
		      "!type": "string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture"
		     },
		     "world": {
		      "!type": "+Phaser.Point"
		     },
		     "debug": {
		      "!type": "bool"
		     },
		     "previousPosition": {
		      "!type": "+Phaser.Point"
		     },
		     "previousRotation": {
		      "!type": "number"
		     },
		     "renderOrderID": {
		      "!type": "number"
		     },
		     "fresh": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "autoCull": {
		      "!type": "bool"
		     },
		     "inCamera": {
		      "!type": "bool"
		     },
		     "bringToTop": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "sendToBack": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "moveUp": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "moveDown": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "destroyPhase": {
		      "!type": "bool"
		     },
		     "destroy": {
		      "!type": "fn(destroyChildren: bool)"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "lifespan": {
		      "!type": "number"
		     },
		     "revive": {
		      "!type": "fn(health: number) -> +PIXI.DisplayObject"
		     },
		     "kill": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "reset": {
		      "!type": "fn(x: number, y: number, health: number) -> +PIXI.DisplayObject"
		     }
		    }
		   },
		   "GameObjectCreator": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "world": {
		      "!type": "+Phaser.World"
		     },
		     "image": {
		      "!type": "fn(x: number, y: number, key: string|+Phaser.RenderTexture|+PIXI.Texture, frame: string|number) -> +Phaser.Image"
		     },
		     "sprite": {
		      "!type": "fn(x: number, y: number, key: string|+Phaser.RenderTexture|+PIXI.Texture, frame: string|number) -> +Phaser.Sprite"
		     },
		     "tween": {
		      "!type": "fn(obj: ?) -> +Phaser.Tween"
		     },
		     "group": {
		      "!type": "fn(parent: +any, name: string, addToStage: bool, enableBody: bool, physicsBodyType: number) -> +Phaser.Group"
		     },
		     "spriteBatch": {
		      "!type": "fn(parent: +any, name: string, addToStage: bool) -> +Phaser.SpriteBatch"
		     },
		     "audio": {
		      "!type": "fn(key: string, volume: number, loop: bool, connect: bool) -> +Phaser.Sound"
		     },
		     "audioSprite": {
		      "!type": "fn(key: string) -> +Phaser.AudioSprite"
		     },
		     "sound": {
		      "!type": "fn(key: string, volume: number, loop: bool, connect: bool) -> +Phaser.Sound"
		     },
		     "tileSprite": {
		      "!type": "fn(x: number, y: number, width: number, height: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+PIXI.Texture, frame: string|number) -> +Phaser.TileSprite"
		     },
		     "rope": {
		      "!type": "fn(x: number, y: number, width: number, height: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+PIXI.Texture, frame: string|number) -> +Phaser.Rope"
		     },
		     "text": {
		      "!type": "fn(x: number, y: number, text: string, style: ?) -> +Phaser.Text"
		     },
		     "button": {
		      "!type": "fn(x: number, y: number, key: string, callback: fn(), callbackContext: ?, overFrame: string|number, outFrame: string|number, downFrame: string|number, upFrame: string|number) -> +Phaser.Button"
		     },
		     "graphics": {
		      "!type": "fn(x: number, y: number) -> +Phaser.Graphics"
		     },
		     "emitter": {
		      "!type": "fn(x: number, y: number, maxParticles: number) -> +Phaser.Emitter"
		     },
		     "retroFont": {
		      "!type": "fn(font: string, characterWidth: number, characterHeight: number, chars: string, charsPerRow: number, xSpacing: number, ySpacing: number, xOffset: number, yOffset: number) -> +Phaser.RetroFont"
		     },
		     "bitmapText": {
		      "!type": "fn(x: number, y: number, font: string, text: string, size: number, align: string) -> +Phaser.BitmapText"
		     },
		     "tilemap": {
		      "!type": "fn(key: string, tileWidth: number, tileHeight: number, width: number, height: number)"
		     },
		     "renderTexture": {
		      "!type": "fn(width: number, height: number, key: string, addToCache: bool) -> +Phaser.RenderTexture"
		     },
		     "bitmapData": {
		      "!type": "fn(width: number, height: number, key: string, addToCache: bool) -> +Phaser.BitmapData"
		     },
		     "filter": {
		      "!type": "fn(filter: string, arg1: +any) -> +Phaser.Filter"
		     }
		    }
		   },
		   "GameObjectFactory": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "world": {
		      "!type": "+Phaser.World"
		     },
		     "existing": {
		      "!type": "fn(object: +any) -> +any"
		     },
		     "image": {
		      "!type": "fn(x: number, y: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, group: +Phaser.Group) -> +Phaser.Image"
		     },
		     "sprite": {
		      "!type": "fn(x: number, y: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, group: +Phaser.Group) -> +Phaser.Sprite"
		     },
		     "creature": {
		      "!type": "fn(x: number, y: number, key: string|+PIXI.Texture, group: +Phaser.Group) -> +Phaser.Creature"
		     },
		     "tween": {
		      "!type": "fn(object: ?) -> +Phaser.Tween"
		     },
		     "group": {
		      "!type": "fn(parent: +any, name: string, addToStage: bool, enableBody: bool, physicsBodyType: number) -> +Phaser.Group"
		     },
		     "physicsGroup": {
		      "!type": "fn(physicsBodyType: number, parent: +any, name: string, addToStage: bool) -> +Phaser.Group"
		     },
		     "spriteBatch": {
		      "!type": "fn(parent: +Phaser.Group|+null, name: string, addToStage: bool) -> +Phaser.SpriteBatch"
		     },
		     "audio": {
		      "!type": "fn(key: string, volume: number, loop: bool, connect: bool) -> +Phaser.Sound"
		     },
		     "sound": {
		      "!type": "fn(key: string, volume: number, loop: bool, connect: bool) -> +Phaser.Sound"
		     },
		     "audioSprite": {
		      "!type": "fn(key: string) -> +Phaser.AudioSprite"
		     },
		     "tileSprite": {
		      "!type": "fn(x: number, y: number, width: number, height: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, group: +Phaser.Group) -> +Phaser.TileSprite"
		     },
		     "rope": {
		      "!type": "fn(x: number, y: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, points: [?], group: +Phaser.Group) -> +Phaser.Rope"
		     },
		     "text": {
		      "!type": "fn(x: number, y: number, text: string, style: ?, group: +Phaser.Group) -> +Phaser.Text"
		     },
		     "button": {
		      "!type": "fn(x: number, y: number, key: string, callback: fn(), callbackContext: ?, overFrame: string|number, outFrame: string|number, downFrame: string|number, upFrame: string|number, group: +Phaser.Group) -> +Phaser.Button"
		     },
		     "graphics": {
		      "!type": "fn(x: number, y: number, group: +Phaser.Group) -> +Phaser.Graphics"
		     },
		     "emitter": {
		      "!type": "fn(x: number, y: number, maxParticles: number) -> +Phaser.Particles.Arcade.Emitter"
		     },
		     "retroFont": {
		      "!type": "fn(font: string, characterWidth: number, characterHeight: number, chars: string, charsPerRow: number, xSpacing: number, ySpacing: number, xOffset: number, yOffset: number) -> +Phaser.RetroFont"
		     },
		     "bitmapText": {
		      "!type": "fn(x: number, y: number, font: string, text: string, size: number, group: +Phaser.Group) -> +Phaser.BitmapText"
		     },
		     "tilemap": {
		      "!type": "fn(key: string, tileWidth: number, tileHeight: number, width: number, height: number) -> +Phaser.Tilemap"
		     },
		     "renderTexture": {
		      "!type": "fn(width: number, height: number, key: string, addToCache: bool) -> +Phaser.RenderTexture"
		     },
		     "video": {
		      "!type": "fn(key: string|+null, url: string|+null) -> +Phaser.Video"
		     },
		     "bitmapData": {
		      "!type": "fn(width: number, height: number, key: string, addToCache: bool) -> +Phaser.BitmapData"
		     },
		     "filter": {
		      "!type": "fn(filter: string, arg1: +any) -> +Phaser.Filter"
		     },
		     "plugin": {
		      "!type": "fn(plugin: ?|+Phaser.Plugin, parameter: ?) -> +Phaser.Plugin"
		     }
		    }
		   },
		   "Graphics": {
		    "!type": "fn(game: +Phaser.Game, x: number, y: number)",
		    "prototype": {
		     "type": {
		      "!type": "number"
		     },
		     "physicsType": {
		      "!type": "number"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn(destroyChildren: bool)"
		     },
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "components": {},
		     "z": {
		      "!type": "number"
		     },
		     "events": {
		      "!type": "+Phaser.Events"
		     },
		     "animations": {
		      "!type": "+Phaser.AnimationManager"
		     },
		     "key": {
		      "!type": "string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture"
		     },
		     "world": {
		      "!type": "+Phaser.Point"
		     },
		     "debug": {
		      "!type": "bool"
		     },
		     "previousPosition": {
		      "!type": "+Phaser.Point"
		     },
		     "previousRotation": {
		      "!type": "number"
		     },
		     "renderOrderID": {
		      "!type": "number"
		     },
		     "fresh": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "autoCull": {
		      "!type": "bool"
		     },
		     "inCamera": {
		      "!type": "bool"
		     },
		     "offsetX": {
		      "!type": "number"
		     },
		     "offsetY": {
		      "!type": "number"
		     },
		     "left": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "destroyPhase": {
		      "!type": "bool"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "input": {
		      "!type": "+Phaser.InputHandler|+null"
		     },
		     "inputEnabled": {
		      "!type": "bool"
		     },
		     "checkWorldBounds": {
		      "!type": "bool"
		     },
		     "outOfBoundsKill": {
		      "!type": "bool"
		     },
		     "inWorld": {
		      "!type": "bool"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "lifespan": {
		      "!type": "number"
		     },
		     "revive": {
		      "!type": "fn(health: number) -> +PIXI.DisplayObject"
		     },
		     "kill": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "body": {
		      "!type": "+Phaser.Physics.Arcade.Body|+Phaser.Physics.P2.Body|+Phaser.Physics.Ninja.Body|+null"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "reset": {
		      "!type": "fn(x: number, y: number, health: number) -> +PIXI.DisplayObject"
		     }
		    }
		   },
		   "Image": {
		    "!type": "fn(game: +Phaser.Game, x: number, y: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+PIXI.Texture, frame: string|number)",
		    "prototype": {
		     "type": {
		      "!type": "number"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "anchor": {},
		     "texture": {},
		     "tint": {},
		     "tintedTexture": {},
		     "blendMode": {},
		     "shader": {},
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "components": {},
		     "z": {
		      "!type": "number"
		     },
		     "events": {
		      "!type": "+Phaser.Events"
		     },
		     "animations": {
		      "!type": "+Phaser.AnimationManager"
		     },
		     "key": {
		      "!type": "string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture"
		     },
		     "world": {
		      "!type": "+Phaser.Point"
		     },
		     "debug": {
		      "!type": "bool"
		     },
		     "previousPosition": {
		      "!type": "+Phaser.Point"
		     },
		     "previousRotation": {
		      "!type": "number"
		     },
		     "renderOrderID": {
		      "!type": "number"
		     },
		     "fresh": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "play": {
		      "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> +Phaser.Animation"
		     },
		     "autoCull": {
		      "!type": "bool"
		     },
		     "inCamera": {
		      "!type": "bool"
		     },
		     "offsetX": {
		      "!type": "number"
		     },
		     "offsetY": {
		      "!type": "number"
		     },
		     "left": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "bringToTop": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "sendToBack": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "moveUp": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "moveDown": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "cropRect": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "crop": {
		      "!type": "fn(rect: +Phaser.Rectangle, copy: bool)"
		     },
		     "updateCrop": {
		      "!type": "fn()"
		     },
		     "destroyPhase": {
		      "!type": "bool"
		     },
		     "destroy": {
		      "!type": "fn(destroyChildren: bool)"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "input": {
		      "!type": "+Phaser.InputHandler|+null"
		     },
		     "inputEnabled": {
		      "!type": "bool"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "lifespan": {
		      "!type": "number"
		     },
		     "revive": {
		      "!type": "fn(health: number) -> +PIXI.DisplayObject"
		     },
		     "kill": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "loadTexture": {
		      "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)"
		     },
		     "setFrame": {
		      "!type": "fn(frame: +Phaser.Frame)"
		     },
		     "resizeFrame": {
		      "!type": "fn(parent: ?, width: number, height: number)"
		     },
		     "resetFrame": {
		      "!type": "fn()"
		     },
		     "frame": {
		      "!type": "number"
		     },
		     "frameName": {
		      "!type": "string"
		     },
		     "overlap": {
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> bool"
		     },
		     "reset": {
		      "!type": "fn(x: number, y: number, health: number) -> +PIXI.DisplayObject"
		     },
		     "smoothed": {
		      "!type": "bool"
		     }
		    }
		   },
		   "Particle": {
		    "!type": "fn(game: +Phaser.Game, x: number, y: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+PIXI.Texture, frame: string|number)",
		    "prototype": {
		     "autoScale": {
		      "!type": "bool"
		     },
		     "scaleData": {
		      "!type": "+array"
		     },
		     "autoAlpha": {
		      "!type": "bool"
		     },
		     "alphaData": {
		      "!type": "+array"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "onEmit": {
		      "!type": "fn()"
		     },
		     "setAlphaData": {
		      "!type": "fn()"
		     },
		     "setScaleData": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn(x: number, y: number, health: number) -> ?"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "physicsType": {
		      "!type": "number"
		     },
		     "preUpdate": {
		      "!type": "fn() -> bool"
		     },
		     "anchor": {},
		     "texture": {},
		     "tint": {},
		     "tintedTexture": {},
		     "blendMode": {},
		     "shader": {},
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "components": {},
		     "z": {
		      "!type": "number"
		     },
		     "events": {
		      "!type": "+Phaser.Events"
		     },
		     "animations": {
		      "!type": "+Phaser.AnimationManager"
		     },
		     "key": {
		      "!type": "string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture"
		     },
		     "world": {
		      "!type": "+Phaser.Point"
		     },
		     "debug": {
		      "!type": "bool"
		     },
		     "previousPosition": {
		      "!type": "+Phaser.Point"
		     },
		     "previousRotation": {
		      "!type": "number"
		     },
		     "renderOrderID": {
		      "!type": "number"
		     },
		     "fresh": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "play": {
		      "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> +Phaser.Animation"
		     },
		     "autoCull": {
		      "!type": "bool"
		     },
		     "inCamera": {
		      "!type": "bool"
		     },
		     "offsetX": {
		      "!type": "number"
		     },
		     "offsetY": {
		      "!type": "number"
		     },
		     "left": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "bringToTop": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "sendToBack": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "moveUp": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "moveDown": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "cropRect": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "crop": {
		      "!type": "fn(rect: +Phaser.Rectangle, copy: bool)"
		     },
		     "updateCrop": {
		      "!type": "fn()"
		     },
		     "deltaX": {
		      "!type": "number"
		     },
		     "deltaY": {
		      "!type": "number"
		     },
		     "deltaZ": {
		      "!type": "number"
		     },
		     "destroyPhase": {
		      "!type": "bool"
		     },
		     "destroy": {
		      "!type": "fn(destroyChildren: bool)"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "health": {
		      "!type": "number"
		     },
		     "maxHealth": {
		      "!type": "number"
		     },
		     "damage": {},
		     "heal": {},
		     "input": {
		      "!type": "+Phaser.InputHandler|+null"
		     },
		     "inputEnabled": {
		      "!type": "bool"
		     },
		     "checkWorldBounds": {
		      "!type": "bool"
		     },
		     "outOfBoundsKill": {
		      "!type": "bool"
		     },
		     "inWorld": {
		      "!type": "bool"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "lifespan": {
		      "!type": "number"
		     },
		     "revive": {
		      "!type": "fn(health: number) -> +PIXI.DisplayObject"
		     },
		     "kill": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "loadTexture": {
		      "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)"
		     },
		     "setFrame": {
		      "!type": "fn(frame: +Phaser.Frame)"
		     },
		     "resizeFrame": {
		      "!type": "fn(parent: ?, width: number, height: number)"
		     },
		     "resetFrame": {
		      "!type": "fn()"
		     },
		     "frame": {
		      "!type": "number"
		     },
		     "frameName": {
		      "!type": "string"
		     },
		     "overlap": {
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> bool"
		     },
		     "body": {
		      "!type": "+Phaser.Physics.Arcade.Body|+Phaser.Physics.P2.Body|+Phaser.Physics.Ninja.Body|+null"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "transformCallback": {
		      "!type": "fn()"
		     },
		     "transformCallbackContext": {},
		     "scaleMin": {
		      "!type": "+Phaser.Point"
		     },
		     "scaleMax": {
		      "!type": "+Phaser.Point"
		     },
		     "setScaleMinMax": {
		      "!type": "fn(minX: number|+null, minY: number|+null, maxX: number|+null, maxY: number|+null)"
		     },
		     "smoothed": {
		      "!type": "bool"
		     }
		    }
		   },
		   "RenderTexture": {
		    "!type": "fn(game: +Phaser.Game, key: string, width: number, height: number, key: string, scaleMode: number, resolution: number)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "key": {
		      "!type": "string"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "renderXY": {
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapText|+Phaser.Group, x: number, y: number, clear: bool)"
		     },
		     "renderRawXY": {
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapText|+Phaser.Group, x: number, y: number, clear: bool)"
		     },
		     "render": {
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapText|+Phaser.Group, matrix: +Phaser.Matrix, clear: bool)"
		     }
		    }
		   },
		   "RetroFont": {
		    "!type": "fn(game: +Phaser.Game, key: string, characterWidth: number, characterHeight: number, chars: string, charsPerRow: number, xSpacing: number, ySpacing: number, xOffset: number, yOffset: number)",
		    "prototype": {
		     "characterWidth": {
		      "!type": "number"
		     },
		     "characterHeight": {
		      "!type": "number"
		     },
		     "characterSpacingX": {
		      "!type": "number"
		     },
		     "characterSpacingY": {
		      "!type": "number"
		     },
		     "characterPerRow": {
		      "!type": "number"
		     },
		     "offsetX": {
		      "!type": "number"
		     },
		     "offsetY": {
		      "!type": "number"
		     },
		     "align": {
		      "!type": "string"
		     },
		     "multiLine": {
		      "!type": "bool"
		     },
		     "autoUpperCase": {
		      "!type": "bool"
		     },
		     "customSpacingX": {
		      "!type": "number"
		     },
		     "customSpacingY": {
		      "!type": "number"
		     },
		     "fixedWidth": {
		      "!type": "number"
		     },
		     "fontSet": {
		      "!type": "+Image"
		     },
		     "frameData": {
		      "!type": "+Phaser.FrameData"
		     },
		     "stamp": {
		      "!type": "+Phaser.Image"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "setFixedWidth": {
		      "!type": "fn(width: number, lineAlignment: string)"
		     },
		     "setText": {
		      "!type": "fn(content: string, multiLine: bool, characterSpacing: number, lineSpacing: number, lineAlignment: string, allowLowerCase: bool)"
		     },
		     "buildRetroFontText": {
		      "!type": "fn()"
		     },
		     "pasteLine": {
		      "!type": "fn(line: string, x: number, y: number, customSpacingX: number)"
		     },
		     "getLongestLine": {
		      "!type": "fn() -> number"
		     },
		     "removeUnsupportedCharacters": {
		      "!type": "fn(stripCR: bool) -> string"
		     },
		     "updateOffset": {
		      "!type": "fn(xOffset: number, yOffset: number)"
		     },
		     "text": {
		      "!type": "string"
		     },
		     "smoothed": {
		      "!type": "string"
		     },
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "key": {
		      "!type": "string"
		     },
		     "renderXY": {
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapText|+Phaser.Group, x: number, y: number, clear: bool)"
		     },
		     "renderRawXY": {
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapText|+Phaser.Group, x: number, y: number, clear: bool)"
		     },
		     "render": {
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapText|+Phaser.Group, matrix: +Phaser.Matrix, clear: bool)"
		     }
		    },
		    "ALIGN_LEFT": {
		     "!type": "string"
		    },
		    "ALIGN_RIGHT": {
		     "!type": "string"
		    },
		    "ALIGN_CENTER": {
		     "!type": "string"
		    },
		    "TEXT_SET1": {
		     "!type": "string"
		    },
		    "TEXT_SET2": {
		     "!type": "string"
		    },
		    "TEXT_SET3": {
		     "!type": "string"
		    },
		    "TEXT_SET4": {
		     "!type": "string"
		    },
		    "TEXT_SET5": {
		     "!type": "string"
		    },
		    "TEXT_SET6": {
		     "!type": "string"
		    },
		    "TEXT_SET7": {
		     "!type": "string"
		    },
		    "TEXT_SET8": {
		     "!type": "string"
		    },
		    "TEXT_SET9": {
		     "!type": "string"
		    },
		    "TEXT_SET10": {
		     "!type": "string"
		    },
		    "TEXT_SET11": {
		     "!type": "string"
		    }
		   },
		   "Rope": {
		    "!type": "fn(game: +Phaser.Game, x: number, y: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+PIXI.Texture, frame: string|number, points: [?])",
		    "prototype": {
		     "type": {
		      "!type": "number"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn(x: number, y: number) -> ?"
		     },
		     "updateAnimation": {
		      "!type": "fn()"
		     },
		     "segments": {
		      "!type": "[?]"
		     },
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "components": {},
		     "z": {
		      "!type": "number"
		     },
		     "events": {
		      "!type": "+Phaser.Events"
		     },
		     "animations": {
		      "!type": "+Phaser.AnimationManager"
		     },
		     "key": {
		      "!type": "string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture"
		     },
		     "world": {
		      "!type": "+Phaser.Point"
		     },
		     "debug": {
		      "!type": "bool"
		     },
		     "previousPosition": {
		      "!type": "+Phaser.Point"
		     },
		     "previousRotation": {
		      "!type": "number"
		     },
		     "renderOrderID": {
		      "!type": "number"
		     },
		     "fresh": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "play": {
		      "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> +Phaser.Animation"
		     },
		     "autoCull": {
		      "!type": "bool"
		     },
		     "inCamera": {
		      "!type": "bool"
		     },
		     "offsetX": {
		      "!type": "number"
		     },
		     "offsetY": {
		      "!type": "number"
		     },
		     "left": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "bringToTop": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "sendToBack": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "moveUp": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "moveDown": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "cropRect": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "crop": {
		      "!type": "fn(rect: +Phaser.Rectangle, copy: bool)"
		     },
		     "updateCrop": {
		      "!type": "fn()"
		     },
		     "deltaX": {
		      "!type": "number"
		     },
		     "deltaY": {
		      "!type": "number"
		     },
		     "deltaZ": {
		      "!type": "number"
		     },
		     "destroyPhase": {
		      "!type": "bool"
		     },
		     "destroy": {
		      "!type": "fn(destroyChildren: bool)"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "input": {
		      "!type": "+Phaser.InputHandler|+null"
		     },
		     "inputEnabled": {
		      "!type": "bool"
		     },
		     "checkWorldBounds": {
		      "!type": "bool"
		     },
		     "outOfBoundsKill": {
		      "!type": "bool"
		     },
		     "inWorld": {
		      "!type": "bool"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "lifespan": {
		      "!type": "number"
		     },
		     "revive": {
		      "!type": "fn(health: number) -> +PIXI.DisplayObject"
		     },
		     "kill": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "loadTexture": {
		      "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)"
		     },
		     "setFrame": {
		      "!type": "fn(frame: +Phaser.Frame)"
		     },
		     "resizeFrame": {
		      "!type": "fn(parent: ?, width: number, height: number)"
		     },
		     "resetFrame": {
		      "!type": "fn()"
		     },
		     "frame": {
		      "!type": "number"
		     },
		     "frameName": {
		      "!type": "string"
		     },
		     "overlap": {
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> bool"
		     },
		     "body": {
		      "!type": "+Phaser.Physics.Arcade.Body|+Phaser.Physics.P2.Body|+Phaser.Physics.Ninja.Body|+null"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "transformCallback": {
		      "!type": "fn()"
		     },
		     "transformCallbackContext": {},
		     "scaleMin": {
		      "!type": "+Phaser.Point"
		     },
		     "scaleMax": {
		      "!type": "+Phaser.Point"
		     },
		     "setScaleMinMax": {
		      "!type": "fn(minX: number|+null, minY: number|+null, maxX: number|+null, maxY: number|+null)"
		     },
		     "smoothed": {
		      "!type": "bool"
		     }
		    }
		   },
		   "Sprite": {
		    "!type": "fn(game: +Phaser.Game, x: number, y: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+PIXI.Texture, frame: string|number)",
		    "prototype": {
		     "type": {
		      "!type": "number"
		     },
		     "physicsType": {
		      "!type": "number"
		     },
		     "preUpdate": {
		      "!type": "fn() -> bool"
		     },
		     "anchor": {},
		     "texture": {},
		     "tint": {},
		     "tintedTexture": {},
		     "blendMode": {},
		     "shader": {},
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "components": {},
		     "z": {
		      "!type": "number"
		     },
		     "events": {
		      "!type": "+Phaser.Events"
		     },
		     "animations": {
		      "!type": "+Phaser.AnimationManager"
		     },
		     "key": {
		      "!type": "string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture"
		     },
		     "world": {
		      "!type": "+Phaser.Point"
		     },
		     "debug": {
		      "!type": "bool"
		     },
		     "previousPosition": {
		      "!type": "+Phaser.Point"
		     },
		     "previousRotation": {
		      "!type": "number"
		     },
		     "renderOrderID": {
		      "!type": "number"
		     },
		     "fresh": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "play": {
		      "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> +Phaser.Animation"
		     },
		     "autoCull": {
		      "!type": "bool"
		     },
		     "inCamera": {
		      "!type": "bool"
		     },
		     "offsetX": {
		      "!type": "number"
		     },
		     "offsetY": {
		      "!type": "number"
		     },
		     "left": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "bringToTop": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "sendToBack": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "moveUp": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "moveDown": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "cropRect": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "crop": {
		      "!type": "fn(rect: +Phaser.Rectangle, copy: bool)"
		     },
		     "updateCrop": {
		      "!type": "fn()"
		     },
		     "deltaX": {
		      "!type": "number"
		     },
		     "deltaY": {
		      "!type": "number"
		     },
		     "deltaZ": {
		      "!type": "number"
		     },
		     "destroyPhase": {
		      "!type": "bool"
		     },
		     "destroy": {
		      "!type": "fn(destroyChildren: bool)"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "health": {
		      "!type": "number"
		     },
		     "maxHealth": {
		      "!type": "number"
		     },
		     "damage": {},
		     "heal": {},
		     "input": {
		      "!type": "+Phaser.InputHandler|+null"
		     },
		     "inputEnabled": {
		      "!type": "bool"
		     },
		     "checkWorldBounds": {
		      "!type": "bool"
		     },
		     "outOfBoundsKill": {
		      "!type": "bool"
		     },
		     "inWorld": {
		      "!type": "bool"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "lifespan": {
		      "!type": "number"
		     },
		     "revive": {
		      "!type": "fn(health: number) -> +PIXI.DisplayObject"
		     },
		     "kill": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "loadTexture": {
		      "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)"
		     },
		     "setFrame": {
		      "!type": "fn(frame: +Phaser.Frame)"
		     },
		     "resizeFrame": {
		      "!type": "fn(parent: ?, width: number, height: number)"
		     },
		     "resetFrame": {
		      "!type": "fn()"
		     },
		     "frame": {
		      "!type": "number"
		     },
		     "frameName": {
		      "!type": "string"
		     },
		     "overlap": {
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> bool"
		     },
		     "body": {
		      "!type": "+Phaser.Physics.Arcade.Body|+Phaser.Physics.P2.Body|+Phaser.Physics.Ninja.Body|+null"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "reset": {
		      "!type": "fn(x: number, y: number, health: number) -> +PIXI.DisplayObject"
		     },
		     "transformCallback": {
		      "!type": "fn()"
		     },
		     "transformCallbackContext": {},
		     "scaleMin": {
		      "!type": "+Phaser.Point"
		     },
		     "scaleMax": {
		      "!type": "+Phaser.Point"
		     },
		     "setScaleMinMax": {
		      "!type": "fn(minX: number|+null, minY: number|+null, maxX: number|+null, maxY: number|+null)"
		     },
		     "smoothed": {
		      "!type": "bool"
		     }
		    }
		   },
		   "SpriteBatch": {
		    "!type": "fn(game: +Phaser.Game, parent: +Phaser.Group|+Phaser.Sprite|+null, name: string, addToStage: bool)",
		    "prototype": {
		     "type": {
		      "!type": "number"
		     },
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "z": {
		      "!type": "number"
		     },
		     "physicsType": {
		      "!type": "number"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "ignoreDestroy": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "classType": {},
		     "cursor": {
		      "!type": "+DisplayObject"
		     },
		     "enableBody": {
		      "!type": "bool"
		     },
		     "enableBodyDebug": {
		      "!type": "bool"
		     },
		     "physicsBodyType": {
		      "!type": "number"
		     },
		     "physicsSortDirection": {
		      "!type": "number"
		     },
		     "onDestroy": {
		      "!type": "+Phaser.Signal"
		     },
		     "cursorIndex": {
		      "!type": "number"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "hash": {
		      "!type": "+array"
		     },
		     "add": {
		      "!type": "fn(child: +DisplayObject, silent: bool) -> +DisplayObject"
		     },
		     "addToHash": {
		      "!type": "fn(child: +DisplayObject) -> bool"
		     },
		     "removeFromHash": {
		      "!type": "fn(child: +DisplayObject) -> bool"
		     },
		     "addMultiple": {
		      "!type": "fn(children: [?]|+Phaser.Group, silent: bool) -> [?]|+Phaser.Group"
		     },
		     "addAt": {
		      "!type": "fn(child: +DisplayObject, index: number, silent: bool) -> +DisplayObject"
		     },
		     "getAt": {
		      "!type": "fn(index: number) -> +DisplayObject|number"
		     },
		     "create": {
		      "!type": "fn(x: number, y: number, key: string, frame: number|string, exists: bool) -> +DisplayObject"
		     },
		     "createMultiple": {
		      "!type": "fn(quantity: number, key: string, frame: number|string, exists: bool)"
		     },
		     "updateZ": {
		      "!type": "fn()"
		     },
		     "resetCursor": {
		      "!type": "fn(index: number) -> +any"
		     },
		     "next": {
		      "!type": "fn() -> +any"
		     },
		     "previous": {
		      "!type": "fn() -> +any"
		     },
		     "swap": {
		      "!type": "fn(child1: +any, child2: +any)"
		     },
		     "bringToTop": {
		      "!type": "fn(child: +any) -> +any"
		     },
		     "sendToBack": {
		      "!type": "fn(child: +any) -> +any"
		     },
		     "moveUp": {
		      "!type": "fn(child: +any) -> +any"
		     },
		     "moveDown": {
		      "!type": "fn(child: +any) -> +any"
		     },
		     "xy": {
		      "!type": "fn(index: number, x: number, y: number)"
		     },
		     "reverse": {
		      "!type": "fn()"
		     },
		     "getIndex": {
		      "!type": "fn(child: +any) -> number"
		     },
		     "replace": {
		      "!type": "fn(oldChild: +any, newChild: +any) -> +any"
		     },
		     "hasProperty": {
		      "!type": "fn(child: +any, key: [?]) -> bool"
		     },
		     "setProperty": {
		      "!type": "fn(child: +any, key: +array, value: +any, operation: number, force: bool) -> bool"
		     },
		     "checkProperty": {
		      "!type": "fn(child: +any, key: +array, value: +any, force: bool) -> bool"
		     },
		     "set": {
		      "!type": "fn(child: +Phaser.Sprite, key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool) -> bool"
		     },
		     "setAll": {
		      "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)"
		     },
		     "setAllChildren": {
		      "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)"
		     },
		     "checkAll": {
		      "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, force: bool)"
		     },
		     "addAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "subAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "multiplyAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "divideAll": {
		      "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		     },
		     "callAllExists": {
		      "!type": "fn(callback: string, existsValue: bool, parameter: +any)"
		     },
		     "callbackFromArray": {
		      "!type": "fn(child: ?, callback: +array, length: number)"
		     },
		     "callAll": {
		      "!type": "fn(method: string, context: string, args: +any)"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "filter": {
		      "!type": "fn(predicate: fn(), checkExists: bool) -> +Phaser.ArraySet"
		     },
		     "forEach": {
		      "!type": "fn(callback: fn(), callbackContext: ?, checkExists: bool, args: +any)"
		     },
		     "forEachExists": {
		      "!type": "fn(callback: fn(), callbackContext: ?, args: +any)"
		     },
		     "forEachAlive": {
		      "!type": "fn(callback: fn(), callbackContext: ?, args: +any)"
		     },
		     "forEachDead": {
		      "!type": "fn(callback: fn(), callbackContext: ?, args: +any)"
		     },
		     "sort": {
		      "!type": "fn(key: string, order: number)"
		     },
		     "customSort": {
		      "!type": "fn(sortHandler: fn(), context: ?)"
		     },
		     "ascendingSortHandler": {
		      "!type": "fn(a: ?, b: ?)"
		     },
		     "descendingSortHandler": {
		      "!type": "fn(a: ?, b: ?)"
		     },
		     "iterate": {
		      "!type": "fn(key: string, value: +any, returnType: number, callback: fn(), callbackContext: ?, args: [?]) -> +any"
		     },
		     "getFirstExists": {
		      "!type": "fn(exists: bool) -> +any"
		     },
		     "getFirstAlive": {
		      "!type": "fn() -> +any"
		     },
		     "getFirstDead": {
		      "!type": "fn() -> +any"
		     },
		     "getTop": {
		      "!type": "fn() -> +any"
		     },
		     "getBottom": {
		      "!type": "fn() -> +any"
		     },
		     "countLiving": {
		      "!type": "fn() -> number"
		     },
		     "countDead": {
		      "!type": "fn() -> number"
		     },
		     "getRandom": {
		      "!type": "fn(startIndex: number, length: number) -> +any"
		     },
		     "remove": {
		      "!type": "fn(child: +any, destroy: bool, silent: bool) -> bool"
		     },
		     "moveAll": {
		      "!type": "fn(group: +Phaser.Group, silent: bool) -> +Phaser.Group"
		     },
		     "removeAll": {
		      "!type": "fn(destroy: bool, silent: bool)"
		     },
		     "removeBetween": {
		      "!type": "fn(startIndex: number, endIndex: number, destroy: bool, silent: bool)"
		     },
		     "destroy": {
		      "!type": "fn(destroyChildren: bool, soft: bool)"
		     },
		     "total": {
		      "!type": "number"
		     },
		     "length": {
		      "!type": "number"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "rotation": {
		      "!type": "number"
		     },
		     "visible": {
		      "!type": "bool"
		     },
		     "alpha": {
		      "!type": "number"
		     },
		     "children": {}
		    }
		   },
		   "Text": {
		    "!type": "fn(game: +Phaser.Game, x: number, y: number, text: string, style: +PhaserTextStyle)",
		    "prototype": {
		     "type": {
		      "!type": "number"
		     },
		     "physicsType": {
		      "!type": "number"
		     },
		     "padding": {
		      "!type": "+Phaser.Point"
		     },
		     "textBounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "canvas": {
		      "!type": "+HTMLCanvasElement"
		     },
		     "context": {
		      "!type": "+HTMLCanvasElement"
		     },
		     "colors": {
		      "!type": "+array"
		     },
		     "strokeColors": {
		      "!type": "+array"
		     },
		     "fontStyles": {
		      "!type": "+array"
		     },
		     "fontWeights": {
		      "!type": "+array"
		     },
		     "autoRound": {
		      "!type": "bool"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn(destroyChildren: bool)"
		     },
		     "setShadow": {
		      "!type": "fn(x: number, y: number, color: string, blur: number, shadowStroke: bool, shadowFill: bool) -> +Phaser.Text"
		     },
		     "setStyle": {
		      "!type": "fn(style: +PhaserTextsetStyleStyle) -> +Phaser.Text"
		     },
		     "updateShadow": {
		      "!type": "fn(state: bool)"
		     },
		     "clearColors": {
		      "!type": "fn() -> +Phaser.Text"
		     },
		     "clearFontValues": {
		      "!type": "fn() -> +Phaser.Text"
		     },
		     "addColor": {
		      "!type": "fn(color: string, position: number) -> +Phaser.Text"
		     },
		     "addStrokeColor": {
		      "!type": "fn(color: string, position: number) -> +Phaser.Text"
		     },
		     "addFontStyle": {
		      "!type": "fn(style: string, position: number) -> +Phaser.Text"
		     },
		     "addFontWeight": {
		      "!type": "fn(style: string, position: number) -> +Phaser.Text"
		     },
		     "setText": {
		      "!type": "fn(text: string) -> +Phaser.Text"
		     },
		     "parseList": {
		      "!type": "fn(list: +array) -> +Phaser.Text"
		     },
		     "setTextBounds": {
		      "!type": "fn(x: number, y: number, width: number, height: number) -> +Phaser.Text"
		     },
		     "getBounds": {
		      "!type": "fn(matrix: +Phaser.Matrix) -> +Phaser.Rectangle"
		     },
		     "text": {
		      "!type": "string"
		     },
		     "cssFont": {
		      "!type": "string"
		     },
		     "font": {
		      "!type": "string"
		     },
		     "fontSize": {
		      "!type": "number|string"
		     },
		     "fontWeight": {
		      "!type": "string"
		     },
		     "fontStyle": {
		      "!type": "string"
		     },
		     "fontVariant": {
		      "!type": "string"
		     },
		     "fill": {},
		     "align": {
		      "!type": "string"
		     },
		     "resolution": {
		      "!type": "number"
		     },
		     "tabs": {
		      "!type": "number|+array"
		     },
		     "boundsAlignH": {
		      "!type": "string"
		     },
		     "boundsAlignV": {
		      "!type": "string"
		     },
		     "stroke": {
		      "!type": "string"
		     },
		     "strokeThickness": {
		      "!type": "number"
		     },
		     "wordWrap": {
		      "!type": "bool"
		     },
		     "wordWrapWidth": {
		      "!type": "number"
		     },
		     "lineSpacing": {
		      "!type": "number"
		     },
		     "shadowOffsetX": {
		      "!type": "number"
		     },
		     "shadowOffsetY": {
		      "!type": "number"
		     },
		     "shadowColor": {
		      "!type": "string"
		     },
		     "shadowBlur": {
		      "!type": "number"
		     },
		     "shadowStroke": {
		      "!type": "bool"
		     },
		     "shadowFill": {
		      "!type": "bool"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     },
		     "anchor": {},
		     "texture": {},
		     "tint": {},
		     "tintedTexture": {},
		     "blendMode": {},
		     "shader": {},
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "components": {},
		     "z": {
		      "!type": "number"
		     },
		     "events": {
		      "!type": "+Phaser.Events"
		     },
		     "animations": {
		      "!type": "+Phaser.AnimationManager"
		     },
		     "key": {
		      "!type": "string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture"
		     },
		     "world": {
		      "!type": "+Phaser.Point"
		     },
		     "debug": {
		      "!type": "bool"
		     },
		     "previousPosition": {
		      "!type": "+Phaser.Point"
		     },
		     "previousRotation": {
		      "!type": "number"
		     },
		     "renderOrderID": {
		      "!type": "number"
		     },
		     "fresh": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "play": {
		      "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> +Phaser.Animation"
		     },
		     "autoCull": {
		      "!type": "bool"
		     },
		     "inCamera": {
		      "!type": "bool"
		     },
		     "offsetX": {
		      "!type": "number"
		     },
		     "offsetY": {
		      "!type": "number"
		     },
		     "left": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "bringToTop": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "sendToBack": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "moveUp": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "moveDown": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "cropRect": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "crop": {
		      "!type": "fn(rect: +Phaser.Rectangle, copy: bool)"
		     },
		     "updateCrop": {
		      "!type": "fn()"
		     },
		     "deltaX": {
		      "!type": "number"
		     },
		     "deltaY": {
		      "!type": "number"
		     },
		     "deltaZ": {
		      "!type": "number"
		     },
		     "destroyPhase": {
		      "!type": "bool"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "health": {
		      "!type": "number"
		     },
		     "maxHealth": {
		      "!type": "number"
		     },
		     "damage": {},
		     "heal": {},
		     "input": {
		      "!type": "+Phaser.InputHandler|+null"
		     },
		     "inputEnabled": {
		      "!type": "bool"
		     },
		     "checkWorldBounds": {
		      "!type": "bool"
		     },
		     "outOfBoundsKill": {
		      "!type": "bool"
		     },
		     "inWorld": {
		      "!type": "bool"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "lifespan": {
		      "!type": "number"
		     },
		     "revive": {
		      "!type": "fn(health: number) -> +PIXI.DisplayObject"
		     },
		     "kill": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "loadTexture": {
		      "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)"
		     },
		     "setFrame": {
		      "!type": "fn(frame: +Phaser.Frame)"
		     },
		     "resizeFrame": {
		      "!type": "fn(parent: ?, width: number, height: number)"
		     },
		     "resetFrame": {
		      "!type": "fn()"
		     },
		     "frame": {
		      "!type": "number"
		     },
		     "frameName": {
		      "!type": "string"
		     },
		     "overlap": {
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> bool"
		     },
		     "body": {
		      "!type": "+Phaser.Physics.Arcade.Body|+Phaser.Physics.P2.Body|+Phaser.Physics.Ninja.Body|+null"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "reset": {
		      "!type": "fn(x: number, y: number, health: number) -> +PIXI.DisplayObject"
		     },
		     "transformCallback": {
		      "!type": "fn()"
		     },
		     "transformCallbackContext": {},
		     "scaleMin": {
		      "!type": "+Phaser.Point"
		     },
		     "scaleMax": {
		      "!type": "+Phaser.Point"
		     },
		     "setScaleMinMax": {
		      "!type": "fn(minX: number|+null, minY: number|+null, maxX: number|+null, maxY: number|+null)"
		     },
		     "smoothed": {
		      "!type": "bool"
		     }
		    }
		   },
		   "TileSprite": {
		    "!type": "fn(game: +Phaser.Game, x: number, y: number, width: number, height: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+PIXI.Texture, frame: string|number)",
		    "prototype": {
		     "type": {
		      "!type": "number"
		     },
		     "physicsType": {
		      "!type": "number"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "autoScroll": {
		      "!type": "fn(x: number, y: number)"
		     },
		     "stopScroll": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn(destroyChildren: bool)"
		     },
		     "reset": {
		      "!type": "fn(x: number, y: number) -> ?"
		     },
		     "_width": {},
		     "_height": {},
		     "tileScale": {},
		     "tileScaleOffset": {},
		     "tilePosition": {},
		     "renderable": {},
		     "tint": {},
		     "textureDebug": {},
		     "blendMode": {},
		     "canvasBuffer": {},
		     "tilingTexture": {},
		     "tilePattern": {},
		     "refreshTexture": {},
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "components": {},
		     "z": {
		      "!type": "number"
		     },
		     "events": {
		      "!type": "+Phaser.Events"
		     },
		     "animations": {
		      "!type": "+Phaser.AnimationManager"
		     },
		     "key": {
		      "!type": "string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture"
		     },
		     "world": {
		      "!type": "+Phaser.Point"
		     },
		     "debug": {
		      "!type": "bool"
		     },
		     "previousPosition": {
		      "!type": "+Phaser.Point"
		     },
		     "previousRotation": {
		      "!type": "number"
		     },
		     "renderOrderID": {
		      "!type": "number"
		     },
		     "fresh": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "play": {
		      "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> +Phaser.Animation"
		     },
		     "autoCull": {
		      "!type": "bool"
		     },
		     "inCamera": {
		      "!type": "bool"
		     },
		     "offsetX": {
		      "!type": "number"
		     },
		     "offsetY": {
		      "!type": "number"
		     },
		     "left": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "bringToTop": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "sendToBack": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "moveUp": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "moveDown": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "destroyPhase": {
		      "!type": "bool"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "health": {
		      "!type": "number"
		     },
		     "maxHealth": {
		      "!type": "number"
		     },
		     "damage": {},
		     "heal": {},
		     "input": {
		      "!type": "+Phaser.InputHandler|+null"
		     },
		     "inputEnabled": {
		      "!type": "bool"
		     },
		     "checkWorldBounds": {
		      "!type": "bool"
		     },
		     "outOfBoundsKill": {
		      "!type": "bool"
		     },
		     "inWorld": {
		      "!type": "bool"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "lifespan": {
		      "!type": "number"
		     },
		     "revive": {
		      "!type": "fn(health: number) -> +PIXI.DisplayObject"
		     },
		     "kill": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "loadTexture": {
		      "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)"
		     },
		     "setFrame": {
		      "!type": "fn(frame: +Phaser.Frame)"
		     },
		     "resizeFrame": {
		      "!type": "fn(parent: ?, width: number, height: number)"
		     },
		     "resetFrame": {
		      "!type": "fn()"
		     },
		     "frame": {
		      "!type": "number"
		     },
		     "frameName": {
		      "!type": "string"
		     },
		     "overlap": {
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> bool"
		     },
		     "body": {
		      "!type": "+Phaser.Physics.Arcade.Body|+Phaser.Physics.P2.Body|+Phaser.Physics.Ninja.Body|+null"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "smoothed": {
		      "!type": "bool"
		     }
		    }
		   },
		   "Video": {
		    "!type": "fn(game: +Phaser.Game, key: string|+null, url: string|+null)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "key": {
		      "!type": "string"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "disableTextureUpload": {
		      "!type": "bool"
		     },
		     "touchLocked": {
		      "!type": "bool"
		     },
		     "onPlay": {
		      "!type": "+Phaser.Signal"
		     },
		     "onChangeSource": {
		      "!type": "+Phaser.Signal"
		     },
		     "onComplete": {
		      "!type": "+Phaser.Signal"
		     },
		     "onAccess": {
		      "!type": "+Phaser.Signal"
		     },
		     "onError": {
		      "!type": "+Phaser.Signal"
		     },
		     "onTimeout": {
		      "!type": "+Phaser.Signal"
		     },
		     "timeout": {
		      "!type": "number"
		     },
		     "video": {
		      "!type": "+HTMLVideoElement"
		     },
		     "videoStream": {
		      "!type": "+MediaStream"
		     },
		     "isStreaming": {
		      "!type": "bool"
		     },
		     "retryLimit": {
		      "!type": "number"
		     },
		     "retry": {
		      "!type": "number"
		     },
		     "retryInterval": {
		      "!type": "number"
		     },
		     "texture": {
		      "!type": "+PIXI.Texture"
		     },
		     "textureFrame": {
		      "!type": "+Phaser.Frame"
		     },
		     "snapshot": {
		      "!type": "+Phaser.BitmapData"
		     },
		     "connectToMediaStream": {
		      "!type": "fn(video: +HTMLVideoElement, stream: +MediaStream) -> +Phaser.Video"
		     },
		     "startMediaStream": {
		      "!type": "fn(captureAudio: bool, width: number, height: number) -> +Phaser.Video"
		     },
		     "createVideoFromBlob": {
		      "!type": "fn(blob: +Blob) -> +Phaser.Video"
		     },
		     "createVideoFromURL": {
		      "!type": "fn(url: string, autoplay: bool) -> +Phaser.Video"
		     },
		     "updateTexture": {
		      "!type": "fn(event: ?, width: number, height: number)"
		     },
		     "complete": {
		      "!type": "fn()"
		     },
		     "play": {
		      "!type": "fn(loop: bool, playbackRate: number) -> +Phaser.Video"
		     },
		     "stop": {
		      "!type": "fn() -> +Phaser.Video"
		     },
		     "add": {
		      "!type": "fn(object: +Phaser.Sprite|[?]|+Phaser.Image|[?]) -> +Phaser.Video"
		     },
		     "addToWorld": {
		      "!type": "fn(x: number, y: number, anchorX: number, anchorY: number, scaleX: number, scaleY: number) -> +Phaser.Image"
		     },
		     "render": {
		      "!type": "fn()"
		     },
		     "changeSource": {
		      "!type": "fn(src: string, autoplay: bool) -> +Phaser.Video"
		     },
		     "setTouchLock": {
		      "!type": "fn()"
		     },
		     "unlock": {
		      "!type": "fn()"
		     },
		     "grab": {
		      "!type": "fn(clear: bool, alpha: number, blendMode: string) -> +Phaser.BitmapData"
		     },
		     "removeVideoElement": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "mute": {
		      "!type": "bool"
		     },
		     "paused": {
		      "!type": "bool"
		     },
		     "volume": {
		      "!type": "number"
		     },
		     "playbackRate": {
		      "!type": "number"
		     },
		     "loop": {
		      "!type": "bool"
		     },
		     "playing": {
		      "!type": "bool"
		     }
		    }
		   },
		   "Circle": {
		    "!type": "fn(x: number, y: number, diameter: number)",
		    "prototype": {
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "circumference": {
		      "!type": "fn() -> number"
		     },
		     "random": {
		      "!type": "fn(out: +Phaser.Point|?) -> +Phaser.Point"
		     },
		     "getBounds": {
		      "!type": "fn() -> +Phaser.Rectangle"
		     },
		     "setTo": {
		      "!type": "fn(x: number, y: number, diameter: number) -> +Circle"
		     },
		     "copyFrom": {
		      "!type": "fn(source: +any) -> +Circle"
		     },
		     "copyTo": {
		      "!type": "fn(dest: +any) -> ?"
		     },
		     "distance": {
		      "!type": "fn(dest: ?, round: bool) -> number"
		     },
		     "clone": {
		      "!type": "fn(output: +Phaser.Circle) -> +Phaser.Circle"
		     },
		     "contains": {
		      "!type": "fn(x: number, y: number) -> bool"
		     },
		     "circumferencePoint": {
		      "!type": "fn(angle: number, asDegrees: bool, out: +Phaser.Point) -> +Phaser.Point"
		     },
		     "offset": {
		      "!type": "fn(dx: number, dy: number) -> +Circle"
		     },
		     "offsetPoint": {
		      "!type": "fn(point: +Point) -> +Circle"
		     },
		     "diameter": {
		      "!type": "number"
		     },
		     "radius": {
		      "!type": "number"
		     },
		     "left": {},
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "area": {
		      "!type": "number"
		     },
		     "empty": {
		      "!type": "bool"
		     }
		    },
		    "contains": {
		     "!type": "fn(a: +Phaser.Circle, x: number, y: number) -> bool"
		    },
		    "equals": {
		     "!type": "fn(a: +Phaser.Circle, b: +Phaser.Circle) -> bool"
		    },
		    "intersects": {
		     "!type": "fn(a: +Phaser.Circle, b: +Phaser.Circle) -> bool"
		    },
		    "circumferencePoint": {
		     "!type": "fn(a: +Phaser.Circle, angle: number, asDegrees: bool, out: +Phaser.Point) -> +Phaser.Point"
		    },
		    "intersectsRectangle": {
		     "!type": "fn(c: +Phaser.Circle, r: +Phaser.Rectangle) -> bool"
		    }
		   },
		   "Ellipse": {
		    "!type": "fn(x: number, y: number, width: number, height: number)",
		    "prototype": {
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "setTo": {
		      "!type": "fn(x: number, y: number, width: number, height: number) -> +Phaser.Ellipse"
		     },
		     "getBounds": {
		      "!type": "fn() -> +Phaser.Rectangle"
		     },
		     "copyFrom": {
		      "!type": "fn(source: +any) -> +Phaser.Ellipse"
		     },
		     "copyTo": {
		      "!type": "fn(dest: +any) -> ?"
		     },
		     "clone": {
		      "!type": "fn(output: +Phaser.Ellipse) -> +Phaser.Ellipse"
		     },
		     "contains": {
		      "!type": "fn(x: number, y: number) -> bool"
		     },
		     "random": {
		      "!type": "fn(out: +Phaser.Point|?) -> +Phaser.Point"
		     },
		     "left": {},
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "empty": {
		      "!type": "bool"
		     }
		    },
		    "contains": {
		     "!type": "fn(a: +Phaser.Ellipse, x: number, y: number) -> bool"
		    }
		   },
		   "Line": {
		    "!type": "fn(x1: number, y1: number, x2: number, y2: number)",
		    "prototype": {
		     "start": {
		      "!type": "+Phaser.Point"
		     },
		     "end": {
		      "!type": "+Phaser.Point"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "setTo": {
		      "!type": "fn(x1: number, y1: number, x2: number, y2: number) -> +Phaser.Line"
		     },
		     "fromSprite": {
		      "!type": "fn(startSprite: +Phaser.Sprite, endSprite: +Phaser.Sprite, useCenter: bool) -> +Phaser.Line"
		     },
		     "fromAngle": {
		      "!type": "fn(x: number, y: number, angle: number, length: number) -> +Phaser.Line"
		     },
		     "rotate": {
		      "!type": "fn(angle: number, asDegrees: bool) -> +Phaser.Line"
		     },
		     "rotateAround": {
		      "!type": "fn(angle: number, asDegrees: bool) -> +Phaser.Line"
		     },
		     "intersects": {
		      "!type": "fn(line: +Phaser.Line, asSegment: bool, result: +Phaser.Point) -> +Phaser.Point"
		     },
		     "reflect": {
		      "!type": "fn(line: +Phaser.Line) -> number"
		     },
		     "midPoint": {
		      "!type": "fn(out: +Phaser.Point) -> +Phaser.Point"
		     },
		     "centerOn": {
		      "!type": "fn(x: number, y: number) -> +Phaser.Line"
		     },
		     "pointOnLine": {
		      "!type": "fn(x: number, y: number) -> bool"
		     },
		     "pointOnSegment": {
		      "!type": "fn(x: number, y: number) -> bool"
		     },
		     "random": {
		      "!type": "fn(out: +Phaser.Point|?) -> +Phaser.Point"
		     },
		     "coordinatesOnLine": {
		      "!type": "fn(stepRate: number, results: +array) -> +array"
		     },
		     "clone": {
		      "!type": "fn(output: +Phaser.Line) -> +Phaser.Line"
		     },
		     "length": {
		      "!type": "number"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "slope": {
		      "!type": "number"
		     },
		     "perpSlope": {
		      "!type": "number"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "left": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     },
		     "normalX": {
		      "!type": "number"
		     },
		     "normalY": {
		      "!type": "number"
		     },
		     "normalAngle": {
		      "!type": "number"
		     }
		    },
		    "intersectsPoints": {
		     "!type": "fn(a: +Phaser.Point, b: +Phaser.Point, e: +Phaser.Point, f: +Phaser.Point, asSegment: bool, result: +Phaser.Point|?) -> +Phaser.Point"
		    },
		    "intersects": {
		     "!type": "fn(a: +Phaser.Line, b: +Phaser.Line, asSegment: bool, result: +Phaser.Point) -> +Phaser.Point"
		    },
		    "reflect": {
		     "!type": "fn(a: +Phaser.Line, b: +Phaser.Line) -> number"
		    }
		   },
		   "Matrix": {
		    "!type": "fn(a: number, b: number, c: number, d: number, tx: number, ty: number)",
		    "prototype": {
		     "a": {
		      "!type": "number"
		     },
		     "b": {
		      "!type": "number"
		     },
		     "c": {
		      "!type": "number"
		     },
		     "d": {
		      "!type": "number"
		     },
		     "tx": {
		      "!type": "number"
		     },
		     "ty": {
		      "!type": "number"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "fromArray": {
		      "!type": "fn(array: [?]) -> +Phaser.Matrix"
		     },
		     "setTo": {
		      "!type": "fn(a: number, b: number, c: number, d: number, tx: number, ty: number) -> +Phaser.Matrix"
		     },
		     "clone": {
		      "!type": "fn(output: +Phaser.Matrix) -> +Phaser.Matrix"
		     },
		     "copyTo": {
		      "!type": "fn(matrix: +Phaser.Matrix) -> +Phaser.Matrix"
		     },
		     "copyFrom": {
		      "!type": "fn(matrix: +Phaser.Matrix) -> +Phaser.Matrix"
		     },
		     "toArray": {
		      "!type": "fn(transpose: bool, array: +PIXI.Float32Array) -> +PIXI.Float32Array"
		     },
		     "apply": {
		      "!type": "fn(pos: +Phaser.Point, newPos: +Phaser.Point) -> +Phaser.Point"
		     },
		     "applyInverse": {
		      "!type": "fn(pos: +Phaser.Point, newPos: +Phaser.Point) -> +Phaser.Point"
		     },
		     "translate": {
		      "!type": "fn(x: number, y: number) -> +Phaser.Matrix"
		     },
		     "scale": {
		      "!type": "fn(x: number, y: number) -> +Phaser.Matrix"
		     },
		     "rotate": {
		      "!type": "fn(angle: number) -> +Phaser.Matrix"
		     },
		     "append": {
		      "!type": "fn(matrix: +Phaser.Matrix) -> +Phaser.Matrix"
		     },
		     "identity": {
		      "!type": "fn() -> +Phaser.Matrix"
		     }
		    }
		   },
		   "Point": {
		    "!type": "fn(x: number, y: number)",
		    "prototype": {
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "copyFrom": {
		      "!type": "fn(source: +any) -> +Phaser.Point"
		     },
		     "invert": {
		      "!type": "fn() -> +Phaser.Point"
		     },
		     "setTo": {
		      "!type": "fn(x: number, y: number) -> +Phaser.Point"
		     },
		     "set": {
		      "!type": "fn(x: number, y: number) -> +Phaser.Point"
		     },
		     "add": {
		      "!type": "fn(x: number, y: number) -> +Phaser.Point"
		     },
		     "subtract": {
		      "!type": "fn(x: number, y: number) -> +Phaser.Point"
		     },
		     "multiply": {
		      "!type": "fn(x: number, y: number) -> +Phaser.Point"
		     },
		     "divide": {
		      "!type": "fn(x: number, y: number) -> +Phaser.Point"
		     },
		     "clampX": {
		      "!type": "fn(min: number, max: number) -> +Phaser.Point"
		     },
		     "clampY": {
		      "!type": "fn(min: number, max: number) -> +Phaser.Point"
		     },
		     "clamp": {
		      "!type": "fn(min: number, max: number) -> +Phaser.Point"
		     },
		     "clone": {
		      "!type": "fn(output: +Phaser.Point) -> +Phaser.Point"
		     },
		     "copyTo": {
		      "!type": "fn(dest: +any) -> ?"
		     },
		     "distance": {
		      "!type": "fn(dest: ?, round: bool) -> number"
		     },
		     "equals": {
		      "!type": "fn(a: +Phaser.Point|+any) -> bool"
		     },
		     "angle": {
		      "!type": "fn(a: +Phaser.Point|+any, asDegrees: bool) -> number"
		     },
		     "rotate": {
		      "!type": "fn(x: number, y: number, angle: number, asDegrees: bool, distance: number) -> +Phaser.Point"
		     },
		     "getMagnitude": {
		      "!type": "fn() -> number"
		     },
		     "getMagnitudeSq": {
		      "!type": "fn() -> number"
		     },
		     "setMagnitude": {
		      "!type": "fn(magnitude: number) -> +Phaser.Point"
		     },
		     "normalize": {
		      "!type": "fn() -> +Phaser.Point"
		     },
		     "isZero": {
		      "!type": "fn() -> bool"
		     },
		     "dot": {
		      "!type": "fn(a: +Phaser.Point) -> number"
		     },
		     "cross": {
		      "!type": "fn(a: +Phaser.Point) -> number"
		     },
		     "perp": {
		      "!type": "fn() -> +Phaser.Point"
		     },
		     "rperp": {
		      "!type": "fn() -> +Phaser.Point"
		     },
		     "normalRightHand": {
		      "!type": "fn() -> +Phaser.Point"
		     },
		     "floor": {
		      "!type": "fn() -> +Phaser.Point"
		     },
		     "ceil": {
		      "!type": "fn() -> +Phaser.Point"
		     }
		    },
		    "add": {
		     "!type": "fn(a: +Phaser.Point, b: +Phaser.Point, out: +Phaser.Point) -> +Phaser.Point"
		    },
		    "subtract": {
		     "!type": "fn(a: +Phaser.Point, b: +Phaser.Point, out: +Phaser.Point) -> +Phaser.Point"
		    },
		    "multiply": {
		     "!type": "fn(a: +Phaser.Point, b: +Phaser.Point, out: +Phaser.Point) -> +Phaser.Point"
		    },
		    "divide": {
		     "!type": "fn(a: +Phaser.Point, b: +Phaser.Point, out: +Phaser.Point) -> +Phaser.Point"
		    },
		    "equals": {
		     "!type": "fn(a: +Phaser.Point, b: +Phaser.Point) -> bool"
		    },
		    "angle": {
		     "!type": "fn(a: +Phaser.Point, b: +Phaser.Point) -> number"
		    },
		    "negative": {
		     "!type": "fn(a: +Phaser.Point, out: +Phaser.Point) -> +Phaser.Point"
		    },
		    "multiplyAdd": {
		     "!type": "fn(a: +Phaser.Point, b: +Phaser.Point, s: number, out: +Phaser.Point) -> +Phaser.Point"
		    },
		    "interpolate": {
		     "!type": "fn(a: +Phaser.Point, b: +Phaser.Point, f: number, out: +Phaser.Point) -> +Phaser.Point"
		    },
		    "perp": {
		     "!type": "fn(a: +Phaser.Point, out: +Phaser.Point) -> +Phaser.Point"
		    },
		    "rperp": {
		     "!type": "fn(a: +Phaser.Point, out: +Phaser.Point) -> +Phaser.Point"
		    },
		    "distance": {
		     "!type": "fn(a: ?, b: ?, round: bool) -> number"
		    },
		    "project": {
		     "!type": "fn(a: +Phaser.Point, b: +Phaser.Point, out: +Phaser.Point) -> +Phaser.Point"
		    },
		    "projectUnit": {
		     "!type": "fn(a: +Phaser.Point, b: +Phaser.Point, out: +Phaser.Point) -> +Phaser.Point"
		    },
		    "normalRightHand": {
		     "!type": "fn(a: +Phaser.Point, out: +Phaser.Point) -> +Phaser.Point"
		    },
		    "normalize": {
		     "!type": "fn(a: +Phaser.Point, out: +Phaser.Point) -> +Phaser.Point"
		    },
		    "rotate": {
		     "!type": "fn(a: +Phaser.Point, x: number, y: number, angle: number, asDegrees: bool, distance: number) -> +Phaser.Point"
		    },
		    "centroid": {
		     "!type": "fn(points: [?], out: +Phaser.Point) -> +Phaser.Point"
		    },
		    "parse": {
		     "!type": "fn(obj: ?, xProp: string, yProp: string) -> +Phaser.Point"
		    }
		   },
		   "Polygon": {
		    "!type": "fn(points: [?]|[?]|+Phaser.Point|number)",
		    "prototype": {
		     "area": {
		      "!type": "number"
		     },
		     "closed": {
		      "!type": "bool"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "toNumberArray": {
		      "!type": "fn(output: +array) -> +array"
		     },
		     "flatten": {
		      "!type": "fn() -> +Phaser.Polygon"
		     },
		     "clone": {
		      "!type": "fn(output: +Phaser.Polygon) -> +Phaser.Polygon"
		     },
		     "contains": {
		      "!type": "fn(x: number, y: number) -> bool"
		     },
		     "setTo": {
		      "!type": "fn(points: [?]|[?]|+Phaser.Point|number) -> +Phaser.Polygon"
		     },
		     "points": {
		      "!type": "[?]"
		     }
		    }
		   },
		   "Rectangle": {
		    "!type": "fn(x: number, y: number, width: number, height: number)",
		    "prototype": {
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "offset": {
		      "!type": "fn(dx: number, dy: number) -> +Phaser.Rectangle"
		     },
		     "offsetPoint": {
		      "!type": "fn(point: +Phaser.Point) -> +Phaser.Rectangle"
		     },
		     "setTo": {
		      "!type": "fn(x: number, y: number, width: number, height: number) -> +Phaser.Rectangle"
		     },
		     "scale": {
		      "!type": "fn(x: number, y: number) -> +Phaser.Rectangle"
		     },
		     "centerOn": {
		      "!type": "fn(x: number, y: number) -> +Phaser.Rectangle"
		     },
		     "floor": {
		      "!type": "fn()"
		     },
		     "floorAll": {
		      "!type": "fn()"
		     },
		     "ceil": {
		      "!type": "fn()"
		     },
		     "ceilAll": {
		      "!type": "fn()"
		     },
		     "copyFrom": {
		      "!type": "fn(source: +any) -> +Phaser.Rectangle"
		     },
		     "copyTo": {
		      "!type": "fn(source: +any) -> ?"
		     },
		     "inflate": {
		      "!type": "fn(dx: number, dy: number) -> +Phaser.Rectangle"
		     },
		     "size": {
		      "!type": "fn(output: +Phaser.Point) -> +Phaser.Point"
		     },
		     "resize": {
		      "!type": "fn(width: number, height: number) -> +Phaser.Rectangle"
		     },
		     "clone": {
		      "!type": "fn(output: +Phaser.Rectangle) -> +Phaser.Rectangle"
		     },
		     "contains": {
		      "!type": "fn(x: number, y: number) -> bool"
		     },
		     "containsRect": {
		      "!type": "fn(b: +Phaser.Rectangle) -> bool"
		     },
		     "equals": {
		      "!type": "fn(b: +Phaser.Rectangle) -> bool"
		     },
		     "intersection": {
		      "!type": "fn(b: +Phaser.Rectangle, out: +Phaser.Rectangle) -> +Phaser.Rectangle"
		     },
		     "intersects": {
		      "!type": "fn(b: +Phaser.Rectangle) -> bool"
		     },
		     "intersectsRaw": {
		      "!type": "fn(left: number, right: number, top: number, bottom: number, tolerance: number) -> bool"
		     },
		     "union": {
		      "!type": "fn(b: +Phaser.Rectangle, out: +Phaser.Rectangle) -> +Phaser.Rectangle"
		     },
		     "random": {
		      "!type": "fn(out: +Phaser.Point|?) -> +Phaser.Point"
		     },
		     "halfWidth": {
		      "!type": "number"
		     },
		     "halfHeight": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "bottomLeft": {
		      "!type": "+Phaser.Point"
		     },
		     "bottomRight": {
		      "!type": "+Phaser.Point"
		     },
		     "left": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "volume": {
		      "!type": "number"
		     },
		     "perimeter": {
		      "!type": "number"
		     },
		     "centerX": {
		      "!type": "number"
		     },
		     "centerY": {
		      "!type": "number"
		     },
		     "randomX": {
		      "!type": "number"
		     },
		     "randomY": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "topLeft": {
		      "!type": "+Phaser.Point"
		     },
		     "topRight": {
		      "!type": "+Phaser.Point"
		     },
		     "empty": {
		      "!type": "bool"
		     },
		     "aabb": {
		      "!type": "fn(points: [?], out: +Phaser.Rectangle) -> +Phaser.Rectangle"
		     }
		    },
		    "inflate": {
		     "!type": "fn(a: +Phaser.Rectangle, dx: number, dy: number) -> +Phaser.Rectangle"
		    },
		    "inflatePoint": {
		     "!type": "fn(a: +Phaser.Rectangle, point: +Phaser.Point) -> +Phaser.Rectangle"
		    },
		    "size": {
		     "!type": "fn(a: +Phaser.Rectangle, output: +Phaser.Point) -> +Phaser.Point"
		    },
		    "clone": {
		     "!type": "fn(a: +Phaser.Rectangle, output: +Phaser.Rectangle) -> +Phaser.Rectangle"
		    },
		    "contains": {
		     "!type": "fn(a: +Phaser.Rectangle, x: number, y: number) -> bool"
		    },
		    "containsRaw": {
		     "!type": "fn(rx: number, ry: number, rw: number, rh: number, x: number, y: number) -> bool"
		    },
		    "containsPoint": {
		     "!type": "fn(a: +Phaser.Rectangle, point: +Phaser.Point) -> bool"
		    },
		    "containsRect": {
		     "!type": "fn(a: +Phaser.Rectangle, b: +Phaser.Rectangle) -> bool"
		    },
		    "equals": {
		     "!type": "fn(a: +Phaser.Rectangle, b: +Phaser.Rectangle) -> bool"
		    },
		    "sameDimensions": {
		     "!type": "fn(a: +Phaser.Rectangle, b: +Phaser.Rectangle) -> bool"
		    },
		    "intersection": {
		     "!type": "fn(a: +Phaser.Rectangle, b: +Phaser.Rectangle, output: +Phaser.Rectangle) -> +Phaser.Rectangle"
		    },
		    "intersects": {
		     "!type": "fn(a: +Phaser.Rectangle, b: +Phaser.Rectangle) -> bool"
		    },
		    "intersectsRaw": {
		     "!type": "fn(left: number, right: number, top: number, bottom: number, tolerance: number) -> bool"
		    },
		    "union": {
		     "!type": "fn(a: +Phaser.Rectangle, b: +Phaser.Rectangle, output: +Phaser.Rectangle) -> +Phaser.Rectangle"
		    }
		   },
		   "RoundedRectangle": {
		    "!type": "fn(x: number, y: number, width: number, height: number, radius: number)",
		    "prototype": {
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     },
		     "radius": {
		      "!type": "number"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "clone": {
		      "!type": "fn() -> +Phaser.RoundedRectangle"
		     },
		     "contains": {
		      "!type": "fn(x: number, y: number) -> bool"
		     }
		    }
		   },
		   "DeviceButton": {
		    "!type": "fn(parent: +Phaser.Pointer|+Phaser.SinglePad, buttonCode: number)",
		    "prototype": {
		     "parent": {
		      "!type": "+Phaser.Pointer|+Phaser.SinglePad"
		     },
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "event": {},
		     "isDown": {
		      "!type": "bool"
		     },
		     "isUp": {
		      "!type": "bool"
		     },
		     "timeDown": {
		      "!type": "number"
		     },
		     "duration": {
		      "!type": "number"
		     },
		     "timeUp": {
		      "!type": "number"
		     },
		     "repeats": {
		      "!type": "number"
		     },
		     "altKey": {
		      "!type": "bool"
		     },
		     "shiftKey": {
		      "!type": "bool"
		     },
		     "ctrlKey": {
		      "!type": "bool"
		     },
		     "value": {
		      "!type": "number"
		     },
		     "buttonCode": {
		      "!type": "number"
		     },
		     "onDown": {
		      "!type": "+Phaser.Signal"
		     },
		     "onUp": {
		      "!type": "+Phaser.Signal"
		     },
		     "onFloat": {
		      "!type": "+Phaser.Signal"
		     },
		     "start": {
		      "!type": "fn(event: ?, value: number)"
		     },
		     "stop": {
		      "!type": "fn(event: ?, value: number)"
		     },
		     "padFloat": {
		      "!type": "fn(value: number)"
		     },
		     "justPressed": {
		      "!type": "fn(duration: number) -> bool"
		     },
		     "justReleased": {
		      "!type": "fn(duration: number) -> bool"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Gamepad": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "enabled": {
		      "!type": "bool"
		     },
		     "callbackContext": {},
		     "onConnectCallback": {
		      "!type": "fn()"
		     },
		     "onDisconnectCallback": {
		      "!type": "fn()"
		     },
		     "onDownCallback": {
		      "!type": "fn()"
		     },
		     "onUpCallback": {
		      "!type": "fn()"
		     },
		     "onAxisCallback": {
		      "!type": "fn()"
		     },
		     "onFloatCallback": {
		      "!type": "fn()"
		     },
		     "addCallbacks": {
		      "!type": "fn(context: ?, callbacks: ?)"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "setDeadZones": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "justPressed": {
		      "!type": "fn(buttonCode: number, duration: number) -> bool"
		     },
		     "isDown": {
		      "!type": "fn(buttonCode: number) -> bool"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "active": {
		      "!type": "bool"
		     },
		     "supported": {
		      "!type": "bool"
		     },
		     "padsConnected": {
		      "!type": "number"
		     },
		     "pad1": {
		      "!type": "+Phaser.SinglePad"
		     },
		     "pad2": {
		      "!type": "+Phaser.SinglePad"
		     },
		     "pad3": {
		      "!type": "+Phaser.SinglePad"
		     },
		     "pad4": {
		      "!type": "+Phaser.SinglePad"
		     }
		    }
		   },
		   "Input": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "hitCanvas": {
		      "!type": "+HTMLCanvasElement"
		     },
		     "hitContext": {
		      "!type": "+CanvasRenderingContext2D"
		     },
		     "moveCallbacks": {
		      "!type": "+array"
		     },
		     "pollRate": {
		      "!type": "number"
		     },
		     "enabled": {
		      "!type": "bool"
		     },
		     "multiInputOverride": {
		      "!type": "number"
		     },
		     "position": {
		      "!type": "+Phaser.Point"
		     },
		     "speed": {
		      "!type": "+Phaser.Point"
		     },
		     "circle": {
		      "!type": "+Phaser.Circle"
		     },
		     "scale": {
		      "!type": "+Phaser.Point"
		     },
		     "maxPointers": {
		      "!type": "number"
		     },
		     "tapRate": {
		      "!type": "number"
		     },
		     "doubleTapRate": {
		      "!type": "number"
		     },
		     "holdRate": {
		      "!type": "number"
		     },
		     "justPressedRate": {
		      "!type": "number"
		     },
		     "justReleasedRate": {
		      "!type": "number"
		     },
		     "recordPointerHistory": {
		      "!type": "bool"
		     },
		     "recordRate": {
		      "!type": "number"
		     },
		     "recordLimit": {
		      "!type": "number"
		     },
		     "pointer1": {
		      "!type": "+Phaser.Pointer"
		     },
		     "pointer2": {
		      "!type": "+Phaser.Pointer"
		     },
		     "pointer3": {
		      "!type": "+Phaser.Pointer"
		     },
		     "pointer4": {
		      "!type": "+Phaser.Pointer"
		     },
		     "pointer5": {
		      "!type": "+Phaser.Pointer"
		     },
		     "pointer6": {
		      "!type": "+Phaser.Pointer"
		     },
		     "pointer7": {
		      "!type": "+Phaser.Pointer"
		     },
		     "pointer8": {
		      "!type": "+Phaser.Pointer"
		     },
		     "pointer9": {
		      "!type": "+Phaser.Pointer"
		     },
		     "pointer10": {
		      "!type": "+Phaser.Pointer"
		     },
		     "pointers": {
		      "!type": "[?]"
		     },
		     "activePointer": {
		      "!type": "+Phaser.Pointer"
		     },
		     "mousePointer": {
		      "!type": "+Pointer"
		     },
		     "mouse": {
		      "!type": "+Phaser.Mouse"
		     },
		     "keyboard": {
		      "!type": "+Phaser.Keyboard"
		     },
		     "touch": {
		      "!type": "+Phaser.Touch"
		     },
		     "mspointer": {
		      "!type": "+Phaser.MSPointer"
		     },
		     "gamepad": {
		      "!type": "+Phaser.Gamepad"
		     },
		     "resetLocked": {
		      "!type": "bool"
		     },
		     "onDown": {
		      "!type": "+Phaser.Signal"
		     },
		     "onUp": {
		      "!type": "+Phaser.Signal"
		     },
		     "onTap": {
		      "!type": "+Phaser.Signal"
		     },
		     "onHold": {
		      "!type": "+Phaser.Signal"
		     },
		     "minPriorityID": {
		      "!type": "number"
		     },
		     "interactiveItems": {
		      "!type": "+Phaser.ArraySet"
		     },
		     "boot": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "addMoveCallback": {
		      "!type": "fn(callback: fn(), context: ?)"
		     },
		     "deleteMoveCallback": {
		      "!type": "fn(callback: fn(), context: ?)"
		     },
		     "addPointer": {
		      "!type": "fn() -> +Phaser.Pointer|+null"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn(hard: bool)"
		     },
		     "resetSpeed": {
		      "!type": "fn(x: number, y: number)"
		     },
		     "startPointer": {
		      "!type": "fn(event: +any) -> +Phaser.Pointer"
		     },
		     "updatePointer": {
		      "!type": "fn(event: +any) -> +Phaser.Pointer"
		     },
		     "stopPointer": {
		      "!type": "fn(event: +any) -> +Phaser.Pointer"
		     },
		     "getPointer": {
		      "!type": "fn(isActive: bool) -> +Phaser.Pointer"
		     },
		     "getPointerFromIdentifier": {
		      "!type": "fn(identifier: number) -> +Phaser.Pointer"
		     },
		     "getPointerFromId": {
		      "!type": "fn(pointerId: number) -> +Phaser.Pointer"
		     },
		     "getLocalPosition": {
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image, pointer: +Phaser.Pointer) -> +Phaser.Point"
		     },
		     "hitTest": {
		      "!type": "fn(displayObject: +DisplayObject, pointer: +Phaser.Pointer, localPoint: +Phaser.Point)"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "pollLocked": {
		      "!type": "bool"
		     },
		     "totalInactivePointers": {
		      "!type": "number"
		     },
		     "totalActivePointers": {
		      "!type": "+integers"
		     },
		     "worldX": {
		      "!type": "number"
		     },
		     "worldY": {
		      "!type": "number"
		     }
		    },
		    "MOUSE_OVERRIDES_TOUCH": {
		     "!type": "number"
		    },
		    "TOUCH_OVERRIDES_MOUSE": {
		     "!type": "number"
		    },
		    "MOUSE_TOUCH_COMBINE": {
		     "!type": "number"
		    },
		    "MAX_POINTERS": {
		     "!type": "number"
		    }
		   },
		   "InputHandler": {
		    "!type": "fn(sprite: +Phaser.Sprite)",
		    "prototype": {
		     "sprite": {
		      "!type": "+Phaser.Sprite"
		     },
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "enabled": {
		      "!type": "bool"
		     },
		     "checked": {
		      "!type": "bool"
		     },
		     "priorityID": {
		      "!type": "number"
		     },
		     "useHandCursor": {
		      "!type": "bool"
		     },
		     "isDragged": {
		      "!type": "bool"
		     },
		     "allowHorizontalDrag": {
		      "!type": "bool"
		     },
		     "allowVerticalDrag": {
		      "!type": "bool"
		     },
		     "bringToTop": {
		      "!type": "bool"
		     },
		     "snapOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "snapOnDrag": {
		      "!type": "bool"
		     },
		     "snapOnRelease": {
		      "!type": "bool"
		     },
		     "snapX": {
		      "!type": "number"
		     },
		     "snapY": {
		      "!type": "number"
		     },
		     "snapOffsetX": {
		      "!type": "number"
		     },
		     "snapOffsetY": {
		      "!type": "number"
		     },
		     "pixelPerfectOver": {
		      "!type": "bool"
		     },
		     "pixelPerfectClick": {
		      "!type": "bool"
		     },
		     "pixelPerfectAlpha": {
		      "!type": "number"
		     },
		     "draggable": {
		      "!type": "bool"
		     },
		     "boundsRect": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "boundsSprite": {
		      "!type": "+Phaser.Sprite"
		     },
		     "consumePointerEvent": {
		      "!type": "bool"
		     },
		     "scaleLayer": {
		      "!type": "bool"
		     },
		     "dragOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "dragFromCenter": {
		      "!type": "bool"
		     },
		     "dragStartPoint": {
		      "!type": "+Phaser.Point"
		     },
		     "snapPoint": {
		      "!type": "+Phaser.Point"
		     },
		     "start": {
		      "!type": "fn(priority: number, useHandCursor: bool) -> +Phaser.Sprite"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "validForInput": {
		      "!type": "fn(highestID: number, highestRenderID: number, includePixelPerfect: bool) -> bool"
		     },
		     "isPixelPerfect": {
		      "!type": "fn() -> bool"
		     },
		     "pointerX": {
		      "!type": "fn(pointer: number) -> number"
		     },
		     "pointerY": {
		      "!type": "fn(pointer: number) -> number"
		     },
		     "pointerDown": {
		      "!type": "fn(pointer: number) -> bool"
		     },
		     "pointerUp": {
		      "!type": "fn(pointer: number) -> bool"
		     },
		     "pointerTimeDown": {
		      "!type": "fn(pointer: number) -> number"
		     },
		     "pointerTimeUp": {
		      "!type": "fn(pointer: +Phaser.Pointer) -> number"
		     },
		     "pointerOver": {
		      "!type": "fn(index: number) -> bool"
		     },
		     "pointerOut": {
		      "!type": "fn(index: number) -> bool"
		     },
		     "pointerTimeOver": {
		      "!type": "fn(pointer: +Phaser.Pointer) -> number"
		     },
		     "pointerTimeOut": {
		      "!type": "fn(pointer: +Phaser.Pointer) -> number"
		     },
		     "pointerDragged": {
		      "!type": "fn(pointer: +Phaser.Pointer) -> bool"
		     },
		     "checkPointerDown": {
		      "!type": "fn(pointer: +Phaser.Pointer, fastTest: bool) -> bool"
		     },
		     "checkPointerOver": {
		      "!type": "fn(pointer: +Phaser.Pointer, fastTest: bool) -> bool"
		     },
		     "checkPixel": {
		      "!type": "fn(x: number, y: number, pointer: +Phaser.Pointer) -> bool"
		     },
		     "update": {
		      "!type": "fn(pointer: +Phaser.Pointer)"
		     },
		     "updateDrag": {
		      "!type": "fn(pointer: +Phaser.Pointer) -> bool"
		     },
		     "justOver": {
		      "!type": "fn(pointer: +Phaser.Pointer, delay: number) -> bool"
		     },
		     "justOut": {
		      "!type": "fn(pointer: +Phaser.Pointer, delay: number) -> bool"
		     },
		     "justPressed": {
		      "!type": "fn(pointer: +Phaser.Pointer, delay: number) -> bool"
		     },
		     "justReleased": {
		      "!type": "fn(pointer: +Phaser.Pointer, delay: number) -> bool"
		     },
		     "overDuration": {
		      "!type": "fn(pointer: +Phaser.Pointer) -> number"
		     },
		     "downDuration": {
		      "!type": "fn(pointer: +Phaser.Pointer) -> number"
		     },
		     "enableDrag": {
		      "!type": "fn(lockCenter: bool, bringToTop: bool, pixelPerfect: bool, alphaThreshold: bool, boundsRect: +Phaser.Rectangle, boundsSprite: +Phaser.Sprite)"
		     },
		     "disableDrag": {
		      "!type": "fn()"
		     },
		     "startDrag": {
		      "!type": "fn(pointer: +Phaser.Pointer)"
		     },
		     "globalToLocalX": {
		      "!type": "fn(x: number)"
		     },
		     "globalToLocalY": {
		      "!type": "fn(y: number)"
		     },
		     "stopDrag": {
		      "!type": "fn(pointer: +Phaser.Pointer)"
		     },
		     "setDragLock": {
		      "!type": "fn(allowHorizontal: bool, allowVertical: bool)"
		     },
		     "enableSnap": {
		      "!type": "fn(snapX: number, snapY: number, onDrag: bool, onRelease: bool, snapOffsetX: number, snapOffsetY: number)"
		     },
		     "disableSnap": {
		      "!type": "fn()"
		     },
		     "checkBoundsRect": {
		      "!type": "fn()"
		     },
		     "checkBoundsSprite": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Key": {
		    "!type": "fn(game: +Phaser.Game, keycode: number)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "event": {},
		     "isDown": {
		      "!type": "bool"
		     },
		     "isUp": {
		      "!type": "bool"
		     },
		     "altKey": {
		      "!type": "bool"
		     },
		     "ctrlKey": {
		      "!type": "bool"
		     },
		     "shiftKey": {
		      "!type": "bool"
		     },
		     "timeDown": {
		      "!type": "number"
		     },
		     "duration": {
		      "!type": "number"
		     },
		     "timeUp": {
		      "!type": "number"
		     },
		     "repeats": {
		      "!type": "number"
		     },
		     "keyCode": {
		      "!type": "number"
		     },
		     "onDown": {
		      "!type": "+Phaser.Signal"
		     },
		     "onHoldCallback": {
		      "!type": "fn()"
		     },
		     "onHoldContext": {},
		     "onUp": {
		      "!type": "+Phaser.Signal"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "processKeyDown": {
		      "!type": "fn(event: +KeyboardEvent)"
		     },
		     "processKeyUp": {
		      "!type": "fn(event: +KeyboardEvent)"
		     },
		     "reset": {
		      "!type": "fn(hard: bool)"
		     },
		     "downDuration": {
		      "!type": "fn(duration: number) -> bool"
		     },
		     "upDuration": {
		      "!type": "fn(duration: number) -> bool"
		     }
		    }
		   },
		   "Keyboard": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "enabled": {
		      "!type": "bool"
		     },
		     "event": {},
		     "pressEvent": {},
		     "callbackContext": {},
		     "onDownCallback": {
		      "!type": "fn()"
		     },
		     "onPressCallback": {
		      "!type": "fn()"
		     },
		     "onUpCallback": {
		      "!type": "fn()"
		     },
		     "addCallbacks": {
		      "!type": "fn(context: ?, onDown: fn(), onUp: fn(), onPress: fn())"
		     },
		     "addKey": {
		      "!type": "fn(keycode: number) -> +Phaser.Key"
		     },
		     "addKeys": {
		      "!type": "fn(keys: ?) -> ?"
		     },
		     "removeKey": {
		      "!type": "fn(keycode: number)"
		     },
		     "createCursorKeys": {
		      "!type": "fn() -> ?"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "addKeyCapture": {
		      "!type": "fn(keycode: number|+array|?)"
		     },
		     "removeKeyCapture": {
		      "!type": "fn(keycode: number)"
		     },
		     "clearCaptures": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "processKeyDown": {
		      "!type": "fn(event: +KeyboardEvent)"
		     },
		     "processKeyPress": {
		      "!type": "fn(event: +KeyboardEvent)"
		     },
		     "processKeyUp": {
		      "!type": "fn(event: +KeyboardEvent)"
		     },
		     "reset": {
		      "!type": "fn(hard: bool)"
		     },
		     "downDuration": {
		      "!type": "fn(keycode: number, duration: number) -> bool"
		     },
		     "upDuration": {
		      "!type": "fn(keycode: number, duration: number) -> bool"
		     },
		     "isDown": {
		      "!type": "fn(keycode: number) -> bool"
		     },
		     "lastChar": {
		      "!type": "string"
		     },
		     "lastKey": {
		      "!type": "+Phaser.Key"
		     }
		    }
		   },
		   "Mouse": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "input": {
		      "!type": "+Phaser.Input"
		     },
		     "callbackContext": {},
		     "mouseDownCallback": {
		      "!type": "fn()"
		     },
		     "mouseUpCallback": {
		      "!type": "fn()"
		     },
		     "mouseOutCallback": {
		      "!type": "fn()"
		     },
		     "mouseOverCallback": {
		      "!type": "fn()"
		     },
		     "mouseWheelCallback": {
		      "!type": "fn()"
		     },
		     "capture": {
		      "!type": "bool"
		     },
		     "button": {
		      "!type": "number"
		     },
		     "wheelDelta": {
		      "!type": "number"
		     },
		     "enabled": {
		      "!type": "bool"
		     },
		     "locked": {
		      "!type": "bool"
		     },
		     "stopOnGameOut": {
		      "!type": "bool"
		     },
		     "pointerLock": {
		      "!type": "+Phaser.Signal"
		     },
		     "event": {
		      "!type": "+MouseEvent|+null"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "onMouseDown": {
		      "!type": "fn(event: +MouseEvent)"
		     },
		     "onMouseMove": {
		      "!type": "fn(event: +MouseEvent)"
		     },
		     "onMouseUp": {
		      "!type": "fn(event: +MouseEvent)"
		     },
		     "onMouseUpGlobal": {
		      "!type": "fn(event: +MouseEvent)"
		     },
		     "onMouseOut": {
		      "!type": "fn(event: +MouseEvent)"
		     },
		     "onMouseOver": {
		      "!type": "fn(event: +MouseEvent)"
		     },
		     "onMouseWheel": {
		      "!type": "fn(event: +MouseEvent)"
		     },
		     "requestPointerLock": {
		      "!type": "fn()"
		     },
		     "pointerLockChange": {
		      "!type": "fn(event: +Event)"
		     },
		     "releasePointerLock": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     }
		    },
		    "NO_BUTTON": {
		     "!type": "number"
		    },
		    "LEFT_BUTTON": {
		     "!type": "number"
		    },
		    "MIDDLE_BUTTON": {
		     "!type": "number"
		    },
		    "RIGHT_BUTTON": {
		     "!type": "number"
		    },
		    "BACK_BUTTON": {
		     "!type": "number"
		    },
		    "FORWARD_BUTTON": {
		     "!type": "number"
		    },
		    "WHEEL_UP": {
		     "!type": "number"
		    },
		    "WHEEL_DOWN": {
		     "!type": "number"
		    }
		   },
		   "MSPointer": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "input": {
		      "!type": "+Phaser.Input"
		     },
		     "callbackContext": {},
		     "pointerDownCallback": {
		      "!type": "fn()"
		     },
		     "pointerMoveCallback": {
		      "!type": "fn()"
		     },
		     "pointerUpCallback": {
		      "!type": "fn()"
		     },
		     "capture": {
		      "!type": "bool"
		     },
		     "button": {
		      "!type": "number"
		     },
		     "event": {
		      "!type": "+MSPointerEvent|+null"
		     },
		     "enabled": {
		      "!type": "bool"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "onPointerDown": {
		      "!type": "fn(event: +PointerEvent)"
		     },
		     "onPointerMove": {
		      "!type": "fn(event: +PointerEvent)"
		     },
		     "onPointerUp": {
		      "!type": "fn(event: +PointerEvent)"
		     },
		     "onPointerUpGlobal": {
		      "!type": "fn(event: +PointerEvent)"
		     },
		     "onPointerOut": {
		      "!type": "fn(event: +PointerEvent)"
		     },
		     "stop": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Pointer": {
		    "!type": "fn(game: +Phaser.Game, id: number)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "id": {
		      "!type": "number"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "identifier": {
		      "!type": "number"
		     },
		     "pointerId": {
		      "!type": "number"
		     },
		     "target": {
		      "!type": "+any"
		     },
		     "button": {
		      "!type": "+any"
		     },
		     "leftButton": {
		      "!type": "+Phaser.DeviceButton"
		     },
		     "middleButton": {
		      "!type": "+Phaser.DeviceButton"
		     },
		     "rightButton": {
		      "!type": "+Phaser.DeviceButton"
		     },
		     "backButton": {
		      "!type": "+Phaser.DeviceButton"
		     },
		     "forwardButton": {
		      "!type": "+Phaser.DeviceButton"
		     },
		     "eraserButton": {
		      "!type": "+Phaser.DeviceButton"
		     },
		     "withinGame": {
		      "!type": "bool"
		     },
		     "clientX": {
		      "!type": "number"
		     },
		     "clientY": {
		      "!type": "number"
		     },
		     "pageX": {
		      "!type": "number"
		     },
		     "pageY": {
		      "!type": "number"
		     },
		     "screenX": {
		      "!type": "number"
		     },
		     "screenY": {
		      "!type": "number"
		     },
		     "rawMovementX": {
		      "!type": "number"
		     },
		     "rawMovementY": {
		      "!type": "number"
		     },
		     "movementX": {
		      "!type": "number"
		     },
		     "movementY": {
		      "!type": "number"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "isMouse": {
		      "!type": "bool"
		     },
		     "isDown": {
		      "!type": "bool"
		     },
		     "isUp": {
		      "!type": "bool"
		     },
		     "timeDown": {
		      "!type": "number"
		     },
		     "timeUp": {
		      "!type": "number"
		     },
		     "previousTapTime": {
		      "!type": "number"
		     },
		     "totalTouches": {
		      "!type": "number"
		     },
		     "msSinceLastClick": {
		      "!type": "number"
		     },
		     "targetObject": {
		      "!type": "+any"
		     },
		     "active": {
		      "!type": "bool"
		     },
		     "dirty": {
		      "!type": "bool"
		     },
		     "position": {
		      "!type": "+Phaser.Point"
		     },
		     "positionDown": {
		      "!type": "+Phaser.Point"
		     },
		     "positionUp": {
		      "!type": "+Phaser.Point"
		     },
		     "circle": {
		      "!type": "+Phaser.Circle"
		     },
		     "resetButtons": {
		      "!type": "fn()"
		     },
		     "updateButtons": {
		      "!type": "fn(event: +MouseEvent)"
		     },
		     "start": {
		      "!type": "fn(event: +any)"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "move": {
		      "!type": "fn(event: +MouseEvent|+PointerEvent|+TouchEvent, fromClick: bool)"
		     },
		     "processInteractiveObjects": {
		      "!type": "fn(fromClick: bool) -> bool"
		     },
		     "leave": {
		      "!type": "fn(event: +MouseEvent|+PointerEvent|+TouchEvent)"
		     },
		     "stop": {
		      "!type": "fn(event: +MouseEvent|+PointerEvent|+TouchEvent)"
		     },
		     "justPressed": {
		      "!type": "fn(duration: number) -> bool"
		     },
		     "justReleased": {
		      "!type": "fn(duration: number) -> bool"
		     },
		     "addClickTrampoline": {
		      "!type": "fn(name: string, callback: fn(), callbackContext: ?, callbackArgs: [?]|+null)"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "resetMovement": {
		      "!type": "fn()"
		     },
		     "duration": {
		      "!type": "number"
		     },
		     "worldX": {
		      "!type": "number"
		     },
		     "worldY": {
		      "!type": "number"
		     }
		    },
		    "NO_BUTTON": {
		     "!type": "number"
		    },
		    "LEFT_BUTTON": {
		     "!type": "number"
		    },
		    "RIGHT_BUTTON": {
		     "!type": "number"
		    },
		    "MIDDLE_BUTTON": {
		     "!type": "number"
		    },
		    "BACK_BUTTON": {
		     "!type": "number"
		    },
		    "FORWARD_BUTTON": {
		     "!type": "number"
		    },
		    "ERASER_BUTTON": {
		     "!type": "number"
		    }
		   },
		   "SinglePad": {
		    "!type": "fn(game: +Phaser.Game, padParent: ?)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "index": {
		      "!type": "number"
		     },
		     "connected": {
		      "!type": "bool"
		     },
		     "callbackContext": {},
		     "onConnectCallback": {
		      "!type": "fn()"
		     },
		     "onDisconnectCallback": {
		      "!type": "fn()"
		     },
		     "onDownCallback": {
		      "!type": "fn()"
		     },
		     "onUpCallback": {
		      "!type": "fn()"
		     },
		     "onAxisCallback": {
		      "!type": "fn()"
		     },
		     "onFloatCallback": {
		      "!type": "fn()"
		     },
		     "deadZone": {
		      "!type": "number"
		     },
		     "addCallbacks": {
		      "!type": "fn(context: ?, callbacks: ?)"
		     },
		     "getButton": {
		      "!type": "fn(buttonCode: number) -> +Phaser.DeviceButton"
		     },
		     "pollStatus": {
		      "!type": "fn()"
		     },
		     "connect": {
		      "!type": "fn(rawPad: ?)"
		     },
		     "disconnect": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "processAxisChange": {
		      "!type": "fn(axisState: ?)"
		     },
		     "processButtonDown": {
		      "!type": "fn(buttonCode: number, value: ?)"
		     },
		     "processButtonUp": {
		      "!type": "fn(buttonCode: number, value: ?)"
		     },
		     "processButtonFloat": {
		      "!type": "fn(buttonCode: number, value: ?)"
		     },
		     "axis": {
		      "!type": "fn(axisCode: number) -> number"
		     },
		     "isDown": {
		      "!type": "fn(buttonCode: number) -> bool"
		     },
		     "isUp": {
		      "!type": "fn(buttonCode: number) -> bool"
		     },
		     "justReleased": {
		      "!type": "fn(buttonCode: number, duration: number) -> bool"
		     },
		     "justPressed": {
		      "!type": "fn(buttonCode: number, duration: number) -> bool"
		     },
		     "buttonValue": {
		      "!type": "fn(buttonCode: number) -> number"
		     },
		     "reset": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Touch": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "enabled": {
		      "!type": "bool"
		     },
		     "touchLockCallbacks": {
		      "!type": "+array"
		     },
		     "callbackContext": {},
		     "touchStartCallback": {
		      "!type": "fn()"
		     },
		     "touchMoveCallback": {
		      "!type": "fn()"
		     },
		     "touchEndCallback": {
		      "!type": "fn()"
		     },
		     "touchEnterCallback": {
		      "!type": "fn()"
		     },
		     "touchLeaveCallback": {
		      "!type": "fn()"
		     },
		     "touchCancelCallback": {
		      "!type": "fn()"
		     },
		     "preventDefault": {
		      "!type": "bool"
		     },
		     "event": {
		      "!type": "+TouchEvent"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "consumeTouchMove": {
		      "!type": "fn()"
		     },
		     "addTouchLockCallback": {
		      "!type": "fn(callback: fn(), context: ?)"
		     },
		     "removeTouchLockCallback": {
		      "!type": "fn(callback: fn(), context: ?) -> bool"
		     },
		     "onTouchStart": {
		      "!type": "fn(event: +TouchEvent)"
		     },
		     "onTouchCancel": {
		      "!type": "fn(event: +TouchEvent)"
		     },
		     "onTouchEnter": {
		      "!type": "fn(event: +TouchEvent)"
		     },
		     "onTouchLeave": {
		      "!type": "fn(event: +TouchEvent)"
		     },
		     "onTouchMove": {
		      "!type": "fn(event: +TouchEvent)"
		     },
		     "onTouchEnd": {
		      "!type": "fn(event: +TouchEvent)"
		     },
		     "stop": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Cache": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "autoResolveURL": {
		      "!type": "bool"
		     },
		     "onSoundUnlock": {
		      "!type": "+Phaser.Signal"
		     },
		     "addCanvas": {
		      "!type": "fn(key: string, canvas: +HTMLCanvasElement, context: +CanvasRenderingContext2D)"
		     },
		     "addImage": {
		      "!type": "fn(key: string, url: string, data: ?) -> ?"
		     },
		     "addDefaultImage": {
		      "!type": "fn()"
		     },
		     "addMissingImage": {
		      "!type": "fn()"
		     },
		     "addSound": {
		      "!type": "fn(key: string, url: string, data: ?, webAudio: bool, audioTag: bool)"
		     },
		     "addText": {
		      "!type": "fn(key: string, url: string, data: ?)"
		     },
		     "addPhysicsData": {
		      "!type": "fn(key: string, url: string, JSONData: ?, format: number)"
		     },
		     "addTilemap": {
		      "!type": "fn(key: string, url: string, mapData: ?, format: number)"
		     },
		     "addBinary": {
		      "!type": "fn(key: string, binaryData: ?)"
		     },
		     "addBitmapData": {
		      "!type": "fn(key: string, bitmapData: +Phaser.BitmapData, frameData: +Phaser.FrameData|+null) -> +Phaser.BitmapData"
		     },
		     "addBitmapFont": {
		      "!type": "fn(key: string, url: string, data: ?, atlasData: ?, xSpacing: number, ySpacing: number)"
		     },
		     "addJSON": {
		      "!type": "fn(key: string, url: string, data: ?)"
		     },
		     "addXML": {
		      "!type": "fn(key: string, url: string, data: ?)"
		     },
		     "addVideo": {
		      "!type": "fn(key: string, url: string, data: ?, isBlob: bool)"
		     },
		     "addShader": {
		      "!type": "fn(key: string, url: string, data: ?)"
		     },
		     "addRenderTexture": {
		      "!type": "fn(key: string, texture: +Phaser.RenderTexture)"
		     },
		     "addSpriteSheet": {
		      "!type": "fn(key: string, url: string, data: ?, frameWidth: number, frameHeight: number, frameMax: number, margin: number, spacing: number)"
		     },
		     "addTextureAtlas": {
		      "!type": "fn(key: string, url: string, data: ?, atlasData: ?, format: number)"
		     },
		     "reloadSound": {
		      "!type": "fn(key: string)"
		     },
		     "reloadSoundComplete": {
		      "!type": "fn(key: string)"
		     },
		     "updateSound": {
		      "!type": "fn(key: string)"
		     },
		     "decodedSound": {
		      "!type": "fn(key: string, data: ?)"
		     },
		     "isSoundDecoded": {
		      "!type": "fn(key: string) -> bool"
		     },
		     "isSoundReady": {
		      "!type": "fn(key: string) -> bool"
		     },
		     "checkKey": {
		      "!type": "fn(cache: number, key: string) -> bool"
		     },
		     "checkURL": {
		      "!type": "fn(url: string) -> bool"
		     },
		     "checkCanvasKey": {
		      "!type": "fn(key: string) -> bool"
		     },
		     "checkImageKey": {
		      "!type": "fn(key: string) -> bool"
		     },
		     "checkTextureKey": {
		      "!type": "fn(key: string) -> bool"
		     },
		     "checkSoundKey": {
		      "!type": "fn(key: string) -> bool"
		     },
		     "checkTextKey": {
		      "!type": "fn(key: string) -> bool"
		     },
		     "checkPhysicsKey": {
		      "!type": "fn(key: string) -> bool"
		     },
		     "checkTilemapKey": {
		      "!type": "fn(key: string) -> bool"
		     },
		     "checkBinaryKey": {
		      "!type": "fn(key: string) -> bool"
		     },
		     "checkBitmapDataKey": {
		      "!type": "fn(key: string) -> bool"
		     },
		     "checkBitmapFontKey": {
		      "!type": "fn(key: string) -> bool"
		     },
		     "checkJSONKey": {
		      "!type": "fn(key: string) -> bool"
		     },
		     "checkXMLKey": {
		      "!type": "fn(key: string) -> bool"
		     },
		     "checkVideoKey": {
		      "!type": "fn(key: string) -> bool"
		     },
		     "checkShaderKey": {
		      "!type": "fn(key: string) -> bool"
		     },
		     "checkRenderTextureKey": {
		      "!type": "fn(key: string) -> bool"
		     },
		     "getItem": {
		      "!type": "fn(key: string, cache: number, method: string, property: string) -> ?"
		     },
		     "getCanvas": {
		      "!type": "fn(key: string) -> ?"
		     },
		     "getImage": {
		      "!type": "fn(key: string, full: bool) -> +Image"
		     },
		     "getTextureFrame": {
		      "!type": "fn(key: string) -> +Phaser.Frame"
		     },
		     "getSound": {
		      "!type": "fn(key: string) -> +Phaser.Sound"
		     },
		     "getSoundData": {
		      "!type": "fn(key: string) -> ?"
		     },
		     "getText": {
		      "!type": "fn(key: string) -> ?"
		     },
		     "getPhysicsData": {
		      "!type": "fn(key: string, object: string, fixtureKey: string) -> ?"
		     },
		     "getTilemapData": {
		      "!type": "fn(key: string) -> ?"
		     },
		     "getBinary": {
		      "!type": "fn(key: string) -> ?"
		     },
		     "getBitmapData": {
		      "!type": "fn(key: string) -> +Phaser.BitmapData"
		     },
		     "getBitmapFont": {
		      "!type": "fn(key: string) -> +Phaser.BitmapFont"
		     },
		     "getJSON": {
		      "!type": "fn(key: string, clone: bool) -> ?"
		     },
		     "getXML": {
		      "!type": "fn(key: string) -> ?"
		     },
		     "getVideo": {
		      "!type": "fn(key: string) -> +Phaser.Video"
		     },
		     "getShader": {
		      "!type": "fn(key: string) -> string"
		     },
		     "getRenderTexture": {
		      "!type": "fn(key: string) -> ?"
		     },
		     "getBaseTexture": {
		      "!type": "fn(key: string, cache: number) -> +PIXI.BaseTexture"
		     },
		     "getFrame": {
		      "!type": "fn(key: string, cache: number) -> +Phaser.Frame"
		     },
		     "getFrameCount": {
		      "!type": "fn(key: string, cache: number) -> number"
		     },
		     "getFrameData": {
		      "!type": "fn(key: string, cache: number) -> +Phaser.FrameData"
		     },
		     "hasFrameData": {
		      "!type": "fn(key: string, cache: number) -> bool"
		     },
		     "updateFrameData": {
		      "!type": "fn(key: string, frameData: number, cache: number)"
		     },
		     "getFrameByIndex": {
		      "!type": "fn(key: string, index: number, cache: number) -> +Phaser.Frame"
		     },
		     "getFrameByName": {
		      "!type": "fn(key: string, name: string, cache: number) -> +Phaser.Frame"
		     },
		     "getPixiTexture": {
		      "!type": "fn(key: string) -> +PIXI.Texture"
		     },
		     "getPixiBaseTexture": {
		      "!type": "fn(key: string) -> +PIXI.BaseTexture"
		     },
		     "getURL": {
		      "!type": "fn(url: string) -> ?"
		     },
		     "getKeys": {
		      "!type": "fn(cache: number) -> [?]"
		     },
		     "removeCanvas": {
		      "!type": "fn(key: string)"
		     },
		     "removeImage": {
		      "!type": "fn(key: string, removeFromPixi: bool)"
		     },
		     "removeSound": {
		      "!type": "fn(key: string)"
		     },
		     "removeText": {
		      "!type": "fn(key: string)"
		     },
		     "removePhysics": {
		      "!type": "fn(key: string)"
		     },
		     "removeTilemap": {
		      "!type": "fn(key: string)"
		     },
		     "removeBinary": {
		      "!type": "fn(key: string)"
		     },
		     "removeBitmapData": {
		      "!type": "fn(key: string)"
		     },
		     "removeBitmapFont": {
		      "!type": "fn(key: string)"
		     },
		     "removeJSON": {
		      "!type": "fn(key: string)"
		     },
		     "removeXML": {
		      "!type": "fn(key: string)"
		     },
		     "removeVideo": {
		      "!type": "fn(key: string)"
		     },
		     "removeShader": {
		      "!type": "fn(key: string)"
		     },
		     "removeRenderTexture": {
		      "!type": "fn(key: string)"
		     },
		     "removeSpriteSheet": {
		      "!type": "fn(key: string)"
		     },
		     "removeTextureAtlas": {
		      "!type": "fn(key: string)"
		     },
		     "clearGLTextures": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     }
		    },
		    "CANVAS": {
		     "!type": "number"
		    },
		    "IMAGE": {
		     "!type": "number"
		    },
		    "TEXTURE": {
		     "!type": "number"
		    },
		    "SOUND": {
		     "!type": "number"
		    },
		    "TEXT": {
		     "!type": "number"
		    },
		    "PHYSICS": {
		     "!type": "number"
		    },
		    "TILEMAP": {
		     "!type": "number"
		    },
		    "BINARY": {
		     "!type": "number"
		    },
		    "BITMAPDATA": {
		     "!type": "number"
		    },
		    "BITMAPFONT": {
		     "!type": "number"
		    },
		    "JSON": {
		     "!type": "number"
		    },
		    "XML": {
		     "!type": "number"
		    },
		    "VIDEO": {
		     "!type": "number"
		    },
		    "SHADER": {
		     "!type": "number"
		    },
		    "RENDER_TEXTURE": {
		     "!type": "number"
		    }
		   },
		   "Loader": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "cache": {
		      "!type": "+Phaser.Cache"
		     },
		     "resetLocked": {
		      "!type": "bool"
		     },
		     "isLoading": {
		      "!type": "bool"
		     },
		     "hasLoaded": {
		      "!type": "bool"
		     },
		     "preloadSprite": {},
		     "crossOrigin": {
		      "!type": "bool|string"
		     },
		     "baseURL": {
		      "!type": "string"
		     },
		     "path": {
		      "!type": "string"
		     },
		     "onLoadStart": {
		      "!type": "+Phaser.Signal"
		     },
		     "onLoadComplete": {
		      "!type": "+Phaser.Signal"
		     },
		     "onPackComplete": {
		      "!type": "+Phaser.Signal"
		     },
		     "onFileStart": {
		      "!type": "+Phaser.Signal"
		     },
		     "onFileComplete": {
		      "!type": "+Phaser.Signal"
		     },
		     "onFileError": {
		      "!type": "+Phaser.Signal"
		     },
		     "useXDomainRequest": {
		      "!type": "bool"
		     },
		     "enableParallel": {
		      "!type": "number"
		     },
		     "maxParallelDownloads": {
		      "!type": "number"
		     },
		     "_withSyncPointDepth": {
		      "!type": "number"
		     },
		     "setPreloadSprite": {
		      "!type": "fn(sprite: +Phaser.Sprite|+Phaser.Image, direction: number)"
		     },
		     "resize": {
		      "!type": "fn()"
		     },
		     "checkKeyExists": {
		      "!type": "fn(type: string, key: string) -> bool"
		     },
		     "getAssetIndex": {
		      "!type": "fn(type: string, key: string) -> number"
		     },
		     "getAsset": {
		      "!type": "fn(type: string, key: string) -> +any"
		     },
		     "reset": {
		      "!type": "fn(hard: bool, clearEvents: bool)"
		     },
		     "addToFileList": {
		      "!type": "fn(type: string, key: string, url: string, properties: ?, overwrite: bool, extension: string) -> +Phaser.Loader"
		     },
		     "replaceInFileList": {
		      "!type": "fn(type: string, key: string, url: string, properties: ?)"
		     },
		     "pack": {
		      "!type": "fn(key: string, url: string, data: ?, callbackContext: ?) -> +Phaser.Loader"
		     },
		     "image": {
		      "!type": "fn(key: string, url: string, overwrite: bool) -> +Phaser.Loader"
		     },
		     "images": {
		      "!type": "fn(keys: +array, urls: +array) -> +Phaser.Loader"
		     },
		     "text": {
		      "!type": "fn(key: string, url: string, overwrite: bool) -> +Phaser.Loader"
		     },
		     "json": {
		      "!type": "fn(key: string, url: string, overwrite: bool) -> +Phaser.Loader"
		     },
		     "shader": {
		      "!type": "fn(key: string, url: string, overwrite: bool) -> +Phaser.Loader"
		     },
		     "xml": {
		      "!type": "fn(key: string, url: string, overwrite: bool) -> +Phaser.Loader"
		     },
		     "script": {
		      "!type": "fn(key: string, url: string, callback: fn(), callbackContext: ?) -> +Phaser.Loader"
		     },
		     "binary": {
		      "!type": "fn(key: string, url: string, callback: fn(), callbackContext: ?) -> +Phaser.Loader"
		     },
		     "spritesheet": {
		      "!type": "fn(key: string, url: string, frameWidth: number, frameHeight: number, frameMax: number, margin: number, spacing: number) -> +Phaser.Loader"
		     },
		     "audio": {
		      "!type": "fn(key: string, urls: string|[?]|[?], autoDecode: bool) -> +Phaser.Loader"
		     },
		     "audiosprite": {
		      "!type": "fn(key: string, urls: [?]|string, jsonURL: string, jsonData: string|?, autoDecode: bool) -> +Phaser.Loader"
		     },
		     "video": {
		      "!type": "fn(key: string, urls: string|[?]|[?], loadEvent: string, asBlob: bool) -> +Phaser.Loader"
		     },
		     "tilemap": {
		      "!type": "fn(key: string, url: string, data: ?|string, format: number) -> +Phaser.Loader"
		     },
		     "physics": {
		      "!type": "fn(key: string, url: string, data: ?|string, format: string) -> +Phaser.Loader"
		     },
		     "bitmapFont": {
		      "!type": "fn(key: string, textureURL: string, atlasURL: string, atlasData: ?, xSpacing: number, ySpacing: number) -> +Phaser.Loader"
		     },
		     "atlasJSONArray": {
		      "!type": "fn(key: string, textureURL: string, atlasURL: string, atlasData: ?) -> +Phaser.Loader"
		     },
		     "atlasJSONHash": {
		      "!type": "fn(key: string, textureURL: string, atlasURL: string, atlasData: ?) -> +Phaser.Loader"
		     },
		     "atlasXML": {
		      "!type": "fn(key: string, textureURL: string, atlasURL: string, atlasData: ?) -> +Phaser.Loader"
		     },
		     "atlas": {
		      "!type": "fn(key: string, textureURL: string, atlasURL: string, atlasData: ?, format: number) -> +Phaser.Loader"
		     },
		     "withSyncPoints": {
		      "!type": "fn(callback: fn(), callbackContext: ?) -> +Phaser.Loader"
		     },
		     "addSyncPoint": {
		      "!type": "fn(type: string, key: string) -> +Phaser.Loader"
		     },
		     "removeFile": {
		      "!type": "fn(type: string, key: string)"
		     },
		     "removeAll": {
		      "!type": "fn()"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "transformUrl": {
		      "!type": "fn(url: string, file: ?) -> string"
		     },
		     "totalLoadedFiles": {
		      "!type": "fn() -> number"
		     },
		     "totalQueuedFiles": {
		      "!type": "fn() -> number"
		     },
		     "totalLoadedPacks": {
		      "!type": "fn() -> number"
		     },
		     "totalQueuedPacks": {
		      "!type": "fn() -> number"
		     },
		     "progressFloat": {
		      "!type": "number"
		     },
		     "progress": {
		      "!type": "number"
		     }
		    },
		    "TEXTURE_ATLAS_JSON_ARRAY": {
		     "!type": "number"
		    },
		    "TEXTURE_ATLAS_JSON_HASH": {
		     "!type": "number"
		    },
		    "TEXTURE_ATLAS_XML_STARLING": {
		     "!type": "number"
		    },
		    "PHYSICS_LIME_CORONA_JSON": {
		     "!type": "number"
		    },
		    "PHYSICS_PHASER_JSON": {
		     "!type": "number"
		    }
		   },
		   "LoaderParser": {
		    "!type": "fn()",
		    "bitmapFont": {
		     "!type": "fn(xml: ?, baseTexture: +PIXI.BaseTexture, xSpacing: number, ySpacing: number) -> ?"
		    },
		    "xmlBitmapFont": {
		     "!type": "fn(xml: ?, baseTexture: +PIXI.BaseTexture, xSpacing: number, ySpacing: number) -> ?"
		    },
		    "jsonBitmapFont": {
		     "!type": "fn(json: ?, baseTexture: +PIXI.BaseTexture, xSpacing: number, ySpacing: number) -> ?"
		    }
		   },
		   "Math": {
		    "!type": "fn()",
		    "PI2": {
		     "!type": "number"
		    },
		    "prototype": {
		     "fuzzyEqual": {
		      "!type": "fn(a: number, b: number, epsilon: number) -> bool"
		     },
		     "fuzzyLessThan": {
		      "!type": "fn(a: number, b: number, epsilon: number) -> bool"
		     },
		     "fuzzyGreaterThan": {
		      "!type": "fn(a: number, b: number, epsilon: number) -> bool"
		     },
		     "fuzzyCeil": {
		      "!type": "fn(val: number, epsilon: number) -> bool"
		     },
		     "fuzzyFloor": {
		      "!type": "fn(val: number, epsilon: number) -> bool"
		     },
		     "average": {
		      "!type": "fn() -> number"
		     },
		     "shear": {
		      "!type": "fn(n: number) -> number"
		     },
		     "snapTo": {
		      "!type": "fn(input: number, gap: number, start: number) -> number"
		     },
		     "snapToFloor": {
		      "!type": "fn(input: number, gap: number, start: number) -> number"
		     },
		     "snapToCeil": {
		      "!type": "fn(input: number, gap: number, start: number) -> number"
		     },
		     "roundTo": {
		      "!type": "fn(value: number, place: number, base: number) -> number"
		     },
		     "floorTo": {
		      "!type": "fn(value: number, place: number, base: number) -> number"
		     },
		     "ceilTo": {
		      "!type": "fn(value: number, place: number, base: number) -> number"
		     },
		     "angleBetween": {
		      "!type": "fn(x1: number, y1: number, x2: number, y2: number) -> number"
		     },
		     "angleBetweenY": {
		      "!type": "fn(x1: number, y1: number, x2: number, y2: number) -> number"
		     },
		     "angleBetweenPoints": {
		      "!type": "fn(point1: +Phaser.Point, point2: +Phaser.Point) -> number"
		     },
		     "angleBetweenPointsY": {
		      "!type": "fn(point1: +Phaser.Point, point2: +Phaser.Point) -> number"
		     },
		     "reverseAngle": {
		      "!type": "fn(angleRad: number) -> number"
		     },
		     "normalizeAngle": {
		      "!type": "fn(angleRad: number) -> number"
		     },
		     "maxAdd": {
		      "!type": "fn(value: number, amount: number, max: number) -> number"
		     },
		     "minSub": {
		      "!type": "fn(value: number, amount: number, min: number) -> number"
		     },
		     "wrap": {
		      "!type": "fn(value: number, min: number, max: number) -> number"
		     },
		     "wrapValue": {
		      "!type": "fn(value: number, amount: number, max: number) -> number"
		     },
		     "isOdd": {
		      "!type": "fn(n: number) -> bool"
		     },
		     "isEven": {
		      "!type": "fn(n: number) -> bool"
		     },
		     "min": {
		      "!type": "fn() -> number"
		     },
		     "max": {
		      "!type": "fn() -> number"
		     },
		     "minProperty": {
		      "!type": "fn() -> number"
		     },
		     "maxProperty": {
		      "!type": "fn() -> number"
		     },
		     "wrapAngle": {
		      "!type": "fn(angle: number, radians: bool) -> number"
		     },
		     "linearInterpolation": {
		      "!type": "fn(v: [?], k: number) -> number"
		     },
		     "bezierInterpolation": {
		      "!type": "fn(v: [?], k: number) -> number"
		     },
		     "catmullRomInterpolation": {
		      "!type": "fn(v: [?], k: number) -> number"
		     },
		     "linear": {
		      "!type": "fn(p0: number, p1: number, t: number) -> number"
		     },
		     "bernstein": {
		      "!type": "fn(n: number, i: number) -> number"
		     },
		     "factorial": {
		      "!type": "fn(value: number) -> number"
		     },
		     "catmullRom": {
		      "!type": "fn(p0: number, p1: number, p2: number, p3: number, t: number) -> number"
		     },
		     "difference": {
		      "!type": "fn(a: number, b: number) -> number"
		     },
		     "roundAwayFromZero": {
		      "!type": "fn(value: number) -> number"
		     },
		     "sinCosGenerator": {
		      "!type": "fn(length: number, sinAmplitude: number, cosAmplitude: number, frequency: number) -> ?"
		     },
		     "distance": {
		      "!type": "fn(x1: number, y1: number, x2: number, y2: number) -> number"
		     },
		     "distanceSq": {
		      "!type": "fn(x1: number, y1: number, x2: number, y2: number) -> number"
		     },
		     "distancePow": {
		      "!type": "fn(x1: number, y1: number, x2: number, y2: number, pow: number) -> number"
		     },
		     "clamp": {
		      "!type": "fn(x: number, a: number, b: number) -> number"
		     },
		     "clampBottom": {
		      "!type": "fn(x: number, a: number) -> number"
		     },
		     "within": {
		      "!type": "fn(a: number, b: number, tolerance: number) -> bool"
		     },
		     "mapLinear": {
		      "!type": "fn(x: number, a1: number, a2: number, b1: number, b2: number) -> number"
		     },
		     "smoothstep": {
		      "!type": "fn(x: number, min: number, max: number) -> number"
		     },
		     "smootherstep": {
		      "!type": "fn(x: number, min: number, max: number) -> number"
		     },
		     "sign": {
		      "!type": "fn(x: number) -> number"
		     },
		     "percent": {
		      "!type": "fn(a: number, b: number, base: number) -> number"
		     },
		     "degToRad": {
		      "!type": "fn(degrees: number) -> number"
		     },
		     "radToDeg": {
		      "!type": "fn(radians: number) -> number"
		     },
		     "chanceRoll": {
		      "!type": "fn(chance: number) -> bool"
		     }
		    }
		   },
		   "QuadTree": {
		    "!type": "fn(x: number, y: number, width: number, height: number, maxObjects: number, maxLevels: number, level: number)",
		    "prototype": {
		     "maxObjects": {
		      "!type": "number"
		     },
		     "maxLevels": {
		      "!type": "number"
		     },
		     "level": {
		      "!type": "number"
		     },
		     "bounds": {},
		     "objects": {
		      "!type": "+array"
		     },
		     "nodes": {
		      "!type": "+array"
		     },
		     "reset": {
		      "!type": "fn(x: number, y: number, width: number, height: number, maxObjects: number, maxLevels: number, level: number)"
		     },
		     "populate": {
		      "!type": "fn(group: +Phaser.Group)"
		     },
		     "populateHandler": {
		      "!type": "fn(sprite: +Phaser.Sprite|?)"
		     },
		     "split": {
		      "!type": "fn()"
		     },
		     "insert": {
		      "!type": "fn(body: +Phaser.Physics.Arcade.Body|?)"
		     },
		     "getIndex": {
		      "!type": "fn(rect: +Phaser.Rectangle|?) -> number"
		     },
		     "retrieve": {
		      "!type": "fn(source: +Phaser.Sprite|+Phaser.Rectangle) -> +array"
		     },
		     "clear": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "RandomDataGenerator": {
		    "!type": "fn(seeds: [?])",
		    "prototype": {
		     "sow": {
		      "!type": "fn(seeds: [?])"
		     },
		     "integer": {
		      "!type": "fn() -> number"
		     },
		     "frac": {
		      "!type": "fn() -> number"
		     },
		     "real": {
		      "!type": "fn() -> number"
		     },
		     "integerInRange": {
		      "!type": "fn(min: number, max: number) -> number"
		     },
		     "between": {
		      "!type": "fn(min: number, max: number) -> number"
		     },
		     "realInRange": {
		      "!type": "fn(min: number, max: number) -> number"
		     },
		     "normal": {
		      "!type": "fn() -> number"
		     },
		     "uuid": {
		      "!type": "fn() -> string"
		     },
		     "pick": {
		      "!type": "fn(ary: [?]) -> +any"
		     },
		     "weightedPick": {
		      "!type": "fn(ary: [?]) -> +any"
		     },
		     "timestamp": {
		      "!type": "fn(min: number, max: number) -> number"
		     },
		     "angle": {
		      "!type": "fn() -> number"
		     }
		    }
		   },
		   "Net": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "getHostName": {
		      "!type": "fn() -> string"
		     },
		     "checkDomainName": {
		      "!type": "fn(domain: string) -> bool"
		     },
		     "updateQueryString": {
		      "!type": "fn(key: string, value: string, redirect: bool, url: string) -> string"
		     },
		     "getQueryString": {
		      "!type": "fn(parameter: string) -> string|?"
		     },
		     "decodeURI": {
		      "!type": "fn(value: string) -> string"
		     }
		    }
		   },
		   "Particles": {
		    "Arcade": {
		     "!type": "fn()",
		     "Emitter": {
		      "!type": "fn(game: +Phaser.Game, x: number, y: number, maxParticles: number)",
		      "prototype": {
		       "maxParticles": {
		        "!type": "number"
		       },
		       "name": {
		        "!type": "string"
		       },
		       "type": {
		        "!type": "number"
		       },
		       "physicsType": {
		        "!type": "number"
		       },
		       "area": {
		        "!type": "+Phaser.Rectangle"
		       },
		       "minParticleSpeed": {
		        "!type": "+Phaser.Point"
		       },
		       "maxParticleSpeed": {
		        "!type": "+Phaser.Point"
		       },
		       "minParticleScale": {
		        "!type": "number"
		       },
		       "maxParticleScale": {
		        "!type": "number"
		       },
		       "scaleData": {
		        "!type": "+array"
		       },
		       "minRotation": {
		        "!type": "number"
		       },
		       "maxRotation": {
		        "!type": "number"
		       },
		       "minParticleAlpha": {
		        "!type": "number"
		       },
		       "maxParticleAlpha": {
		        "!type": "number"
		       },
		       "alphaData": {
		        "!type": "+array"
		       },
		       "gravity": {
		        "!type": "number"
		       },
		       "particleClass": {
		        "!type": "+any"
		       },
		       "particleDrag": {
		        "!type": "+Phaser.Point"
		       },
		       "angularDrag": {
		        "!type": "number"
		       },
		       "frequency": {
		        "!type": "number"
		       },
		       "lifespan": {
		        "!type": "number"
		       },
		       "bounce": {
		        "!type": "+Phaser.Point"
		       },
		       "on": {
		        "!type": "bool"
		       },
		       "particleAnchor": {
		        "!type": "+Phaser.Point"
		       },
		       "blendMode": {
		        "!type": "number"
		       },
		       "emitX": {
		        "!type": "number"
		       },
		       "emitY": {
		        "!type": "number"
		       },
		       "autoScale": {
		        "!type": "bool"
		       },
		       "autoAlpha": {
		        "!type": "bool"
		       },
		       "particleBringToTop": {
		        "!type": "bool"
		       },
		       "particleSendToBack": {
		        "!type": "bool"
		       },
		       "update": {
		        "!type": "fn()"
		       },
		       "makeParticles": {
		        "!type": "fn(keys: +array|string, frames: +array|number, quantity: number, collide: bool, collideWorldBounds: bool) -> +Phaser.Particles.Arcade.Emitter"
		       },
		       "kill": {
		        "!type": "fn()"
		       },
		       "revive": {
		        "!type": "fn()"
		       },
		       "explode": {
		        "!type": "fn(lifespan: number, quantity: number)"
		       },
		       "flow": {
		        "!type": "fn(lifespan: number, frequency: number, quantity: number, total: number, immediate: bool)"
		       },
		       "start": {
		        "!type": "fn(explode: bool, lifespan: number, frequency: number, quantity: number, forceQuantity: number)"
		       },
		       "emitParticle": {
		        "!type": "fn() -> bool"
		       },
		       "destroy": {
		        "!type": "fn()"
		       },
		       "setSize": {
		        "!type": "fn(width: number, height: number)"
		       },
		       "setXSpeed": {
		        "!type": "fn(min: number, max: number)"
		       },
		       "setYSpeed": {
		        "!type": "fn(min: number, max: number)"
		       },
		       "setRotation": {
		        "!type": "fn(min: number, max: number)"
		       },
		       "setAlpha": {
		        "!type": "fn(min: number, max: number, rate: number, ease: fn(), yoyo: bool)"
		       },
		       "setScale": {
		        "!type": "fn(minX: number, maxX: number, minY: number, maxY: number, rate: number, ease: fn(), yoyo: bool)"
		       },
		       "at": {
		        "!type": "fn(object: ?|+Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Text|+PIXI.DisplayObject)"
		       },
		       "width": {
		        "!type": "number"
		       },
		       "height": {
		        "!type": "number"
		       },
		       "x": {
		        "!type": "number"
		       },
		       "y": {
		        "!type": "number"
		       },
		       "left": {
		        "!type": "number"
		       },
		       "right": {
		        "!type": "number"
		       },
		       "top": {
		        "!type": "number"
		       },
		       "bottom": {
		        "!type": "number"
		       },
		       "game": {
		        "!type": "+Phaser.Game"
		       },
		       "z": {
		        "!type": "number"
		       },
		       "alive": {
		        "!type": "bool"
		       },
		       "exists": {
		        "!type": "bool"
		       },
		       "ignoreDestroy": {
		        "!type": "bool"
		       },
		       "pendingDestroy": {
		        "!type": "bool"
		       },
		       "classType": {},
		       "cursor": {
		        "!type": "+DisplayObject"
		       },
		       "enableBody": {
		        "!type": "bool"
		       },
		       "enableBodyDebug": {
		        "!type": "bool"
		       },
		       "physicsBodyType": {
		        "!type": "number"
		       },
		       "physicsSortDirection": {
		        "!type": "number"
		       },
		       "onDestroy": {
		        "!type": "+Phaser.Signal"
		       },
		       "cursorIndex": {
		        "!type": "number"
		       },
		       "fixedToCamera": {
		        "!type": "bool"
		       },
		       "cameraOffset": {
		        "!type": "+Phaser.Point"
		       },
		       "hash": {
		        "!type": "+array"
		       },
		       "add": {
		        "!type": "fn(child: +DisplayObject, silent: bool) -> +DisplayObject"
		       },
		       "addToHash": {
		        "!type": "fn(child: +DisplayObject) -> bool"
		       },
		       "removeFromHash": {
		        "!type": "fn(child: +DisplayObject) -> bool"
		       },
		       "addMultiple": {
		        "!type": "fn(children: [?]|+Phaser.Group, silent: bool) -> [?]|+Phaser.Group"
		       },
		       "addAt": {
		        "!type": "fn(child: +DisplayObject, index: number, silent: bool) -> +DisplayObject"
		       },
		       "getAt": {
		        "!type": "fn(index: number) -> +DisplayObject|number"
		       },
		       "create": {
		        "!type": "fn(x: number, y: number, key: string, frame: number|string, exists: bool) -> +DisplayObject"
		       },
		       "createMultiple": {
		        "!type": "fn(quantity: number, key: string, frame: number|string, exists: bool)"
		       },
		       "updateZ": {
		        "!type": "fn()"
		       },
		       "resetCursor": {
		        "!type": "fn(index: number) -> +any"
		       },
		       "next": {
		        "!type": "fn() -> +any"
		       },
		       "previous": {
		        "!type": "fn() -> +any"
		       },
		       "swap": {
		        "!type": "fn(child1: +any, child2: +any)"
		       },
		       "bringToTop": {
		        "!type": "fn(child: +any) -> +any"
		       },
		       "sendToBack": {
		        "!type": "fn(child: +any) -> +any"
		       },
		       "moveUp": {
		        "!type": "fn(child: +any) -> +any"
		       },
		       "moveDown": {
		        "!type": "fn(child: +any) -> +any"
		       },
		       "xy": {
		        "!type": "fn(index: number, x: number, y: number)"
		       },
		       "reverse": {
		        "!type": "fn()"
		       },
		       "getIndex": {
		        "!type": "fn(child: +any) -> number"
		       },
		       "replace": {
		        "!type": "fn(oldChild: +any, newChild: +any) -> +any"
		       },
		       "hasProperty": {
		        "!type": "fn(child: +any, key: [?]) -> bool"
		       },
		       "setProperty": {
		        "!type": "fn(child: +any, key: +array, value: +any, operation: number, force: bool) -> bool"
		       },
		       "checkProperty": {
		        "!type": "fn(child: +any, key: +array, value: +any, force: bool) -> bool"
		       },
		       "set": {
		        "!type": "fn(child: +Phaser.Sprite, key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool) -> bool"
		       },
		       "setAll": {
		        "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)"
		       },
		       "setAllChildren": {
		        "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)"
		       },
		       "checkAll": {
		        "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, force: bool)"
		       },
		       "addAll": {
		        "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		       },
		       "subAll": {
		        "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		       },
		       "multiplyAll": {
		        "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		       },
		       "divideAll": {
		        "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		       },
		       "callAllExists": {
		        "!type": "fn(callback: string, existsValue: bool, parameter: +any)"
		       },
		       "callbackFromArray": {
		        "!type": "fn(child: ?, callback: +array, length: number)"
		       },
		       "callAll": {
		        "!type": "fn(method: string, context: string, args: +any)"
		       },
		       "preUpdate": {
		        "!type": "fn()"
		       },
		       "postUpdate": {
		        "!type": "fn()"
		       },
		       "filter": {
		        "!type": "fn(predicate: fn(), checkExists: bool) -> +Phaser.ArraySet"
		       },
		       "forEach": {
		        "!type": "fn(callback: fn(), callbackContext: ?, checkExists: bool, args: +any)"
		       },
		       "forEachExists": {
		        "!type": "fn(callback: fn(), callbackContext: ?, args: +any)"
		       },
		       "forEachAlive": {
		        "!type": "fn(callback: fn(), callbackContext: ?, args: +any)"
		       },
		       "forEachDead": {
		        "!type": "fn(callback: fn(), callbackContext: ?, args: +any)"
		       },
		       "sort": {
		        "!type": "fn(key: string, order: number)"
		       },
		       "customSort": {
		        "!type": "fn(sortHandler: fn(), context: ?)"
		       },
		       "ascendingSortHandler": {
		        "!type": "fn(a: ?, b: ?)"
		       },
		       "descendingSortHandler": {
		        "!type": "fn(a: ?, b: ?)"
		       },
		       "iterate": {
		        "!type": "fn(key: string, value: +any, returnType: number, callback: fn(), callbackContext: ?, args: [?]) -> +any"
		       },
		       "getFirstExists": {
		        "!type": "fn(exists: bool) -> +any"
		       },
		       "getFirstAlive": {
		        "!type": "fn() -> +any"
		       },
		       "getFirstDead": {
		        "!type": "fn() -> +any"
		       },
		       "getTop": {
		        "!type": "fn() -> +any"
		       },
		       "getBottom": {
		        "!type": "fn() -> +any"
		       },
		       "countLiving": {
		        "!type": "fn() -> number"
		       },
		       "countDead": {
		        "!type": "fn() -> number"
		       },
		       "getRandom": {
		        "!type": "fn(startIndex: number, length: number) -> +any"
		       },
		       "remove": {
		        "!type": "fn(child: +any, destroy: bool, silent: bool) -> bool"
		       },
		       "moveAll": {
		        "!type": "fn(group: +Phaser.Group, silent: bool) -> +Phaser.Group"
		       },
		       "removeAll": {
		        "!type": "fn(destroy: bool, silent: bool)"
		       },
		       "removeBetween": {
		        "!type": "fn(startIndex: number, endIndex: number, destroy: bool, silent: bool)"
		       },
		       "total": {
		        "!type": "number"
		       },
		       "length": {
		        "!type": "number"
		       },
		       "angle": {
		        "!type": "number"
		       },
		       "rotation": {
		        "!type": "number"
		       },
		       "visible": {
		        "!type": "bool"
		       },
		       "alpha": {
		        "!type": "number"
		       },
		       "children": {}
		      }
		     }
		    },
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "emitters": {},
		     "ID": {
		      "!type": "number"
		     },
		     "add": {
		      "!type": "fn(emitter: +Phaser.Emitter) -> +Phaser.Emitter"
		     },
		     "remove": {
		      "!type": "fn(emitter: +Phaser.Emitter)"
		     },
		     "update": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Physics": {
		    "Arcade": {
		     "Body": {
		      "!type": "fn(sprite: +Phaser.Sprite)",
		      "prototype": {
		       "sprite": {
		        "!type": "+Phaser.Sprite"
		       },
		       "game": {
		        "!type": "+Phaser.Game"
		       },
		       "type": {
		        "!type": "number"
		       },
		       "enable": {
		        "!type": "bool"
		       },
		       "offset": {
		        "!type": "+Phaser.Point"
		       },
		       "position": {
		        "!type": "+Phaser.Point"
		       },
		       "prev": {
		        "!type": "+Phaser.Point"
		       },
		       "allowRotation": {
		        "!type": "bool"
		       },
		       "rotation": {
		        "!type": "number"
		       },
		       "preRotation": {
		        "!type": "number"
		       },
		       "width": {
		        "!type": "number"
		       },
		       "height": {
		        "!type": "number"
		       },
		       "sourceWidth": {
		        "!type": "number"
		       },
		       "sourceHeight": {
		        "!type": "number"
		       },
		       "halfWidth": {
		        "!type": "number"
		       },
		       "halfHeight": {
		        "!type": "number"
		       },
		       "center": {
		        "!type": "+Phaser.Point"
		       },
		       "velocity": {
		        "!type": "+Phaser.Point"
		       },
		       "newVelocity": {
		        "!type": "+Phaser.Point"
		       },
		       "deltaMax": {
		        "!type": "+Phaser.Point"
		       },
		       "acceleration": {
		        "!type": "+Phaser.Point"
		       },
		       "drag": {
		        "!type": "+Phaser.Point"
		       },
		       "allowGravity": {
		        "!type": "bool"
		       },
		       "gravity": {
		        "!type": "+Phaser.Point"
		       },
		       "bounce": {
		        "!type": "+Phaser.Point"
		       },
		       "maxVelocity": {
		        "!type": "+Phaser.Point"
		       },
		       "friction": {
		        "!type": "+Phaser.Point"
		       },
		       "angularVelocity": {
		        "!type": "number"
		       },
		       "angularAcceleration": {
		        "!type": "number"
		       },
		       "angularDrag": {
		        "!type": "number"
		       },
		       "maxAngular": {
		        "!type": "number"
		       },
		       "mass": {
		        "!type": "number"
		       },
		       "angle": {
		        "!type": "number"
		       },
		       "speed": {
		        "!type": "number"
		       },
		       "facing": {
		        "!type": "number"
		       },
		       "immovable": {
		        "!type": "bool"
		       },
		       "moves": {
		        "!type": "bool"
		       },
		       "customSeparateX": {
		        "!type": "bool"
		       },
		       "customSeparateY": {
		        "!type": "bool"
		       },
		       "overlapX": {
		        "!type": "number"
		       },
		       "overlapY": {
		        "!type": "number"
		       },
		       "embedded": {
		        "!type": "bool"
		       },
		       "collideWorldBounds": {
		        "!type": "bool"
		       },
		       "checkCollision": {},
		       "touching": {},
		       "wasTouching": {},
		       "blocked": {},
		       "tilePadding": {
		        "!type": "+Phaser.Point"
		       },
		       "dirty": {
		        "!type": "bool"
		       },
		       "skipQuadTree": {
		        "!type": "bool"
		       },
		       "syncBounds": {
		        "!type": "bool"
		       },
		       "updateBounds": {
		        "!type": "fn()"
		       },
		       "preUpdate": {
		        "!type": "fn()"
		       },
		       "postUpdate": {
		        "!type": "fn()"
		       },
		       "destroy": {
		        "!type": "fn()"
		       },
		       "checkWorldBounds": {
		        "!type": "fn()"
		       },
		       "setSize": {
		        "!type": "fn(width: number, height: number, offsetX: number, offsetY: number)"
		       },
		       "reset": {
		        "!type": "fn(x: number, y: number)"
		       },
		       "hitTest": {
		        "!type": "fn(x: number, y: number) -> bool"
		       },
		       "onFloor": {
		        "!type": "fn() -> bool"
		       },
		       "onWall": {
		        "!type": "fn() -> bool"
		       },
		       "deltaAbsX": {
		        "!type": "fn() -> number"
		       },
		       "deltaAbsY": {
		        "!type": "fn() -> number"
		       },
		       "deltaX": {
		        "!type": "fn() -> number"
		       },
		       "deltaY": {
		        "!type": "fn() -> number"
		       },
		       "deltaZ": {
		        "!type": "fn() -> number"
		       },
		       "bottom": {
		        "!type": "number"
		       },
		       "right": {
		        "!type": "number"
		       },
		       "x": {
		        "!type": "number"
		       },
		       "y": {
		        "!type": "number"
		       },
		       "render": {
		        "!type": "fn(context: ?, body: +Phaser.Physics.Arcade.Body, color: string, filled: bool)"
		       },
		       "renderBodyInfo": {
		        "!type": "fn(body: +Phaser.Physics.Arcade.Body, x: number, y: number, color: string)"
		       }
		      }
		     },
		     "TilemapCollision": {
		      "!type": "fn()",
		      "prototype": {
		       "TILE_BIAS": {
		        "!type": "number"
		       }
		      }
		     },
		     "!type": "fn(game: +Phaser.Game)",
		     "prototype": {
		      "game": {
		       "!type": "+Phaser.Game"
		      },
		      "gravity": {
		       "!type": "+Phaser.Point"
		      },
		      "bounds": {
		       "!type": "+Phaser.Rectangle"
		      },
		      "checkCollision": {},
		      "maxObjects": {
		       "!type": "number"
		      },
		      "maxLevels": {
		       "!type": "number"
		      },
		      "OVERLAP_BIAS": {
		       "!type": "number"
		      },
		      "forceX": {
		       "!type": "bool"
		      },
		      "sortDirection": {
		       "!type": "number"
		      },
		      "skipQuadTree": {
		       "!type": "bool"
		      },
		      "isPaused": {
		       "!type": "bool"
		      },
		      "quadTree": {
		       "!type": "+Phaser.QuadTree"
		      },
		      "setBounds": {
		       "!type": "fn(x: number, y: number, width: number, height: number)"
		      },
		      "setBoundsToWorld": {
		       "!type": "fn()"
		      },
		      "enable": {
		       "!type": "fn(object: ?|+array|+Phaser.Group, children: bool)"
		      },
		      "enableBody": {
		       "!type": "fn(object: ?)"
		      },
		      "updateMotion": {
		       "!type": "fn(The: +Phaser.Physics.Arcade.Body)"
		      },
		      "computeVelocity": {
		       "!type": "fn(axis: number, body: +Phaser.Physics.Arcade.Body, velocity: number, acceleration: number, drag: number, max: number) -> number"
		      },
		      "overlap": {
		       "!type": "fn(object1: +Phaser.Sprite|+Phaser.Group|+Phaser.Particles.Emitter|+array, object2: +Phaser.Sprite|+Phaser.Group|+Phaser.Particles.Emitter|+array, overlapCallback: fn(), processCallback: fn(), callbackContext: ?) -> bool"
		      },
		      "collide": {
		       "!type": "fn(object1: +Phaser.Sprite|+Phaser.Group|+Phaser.Particles.Emitter|+Phaser.TilemapLayer|+array, object2: +Phaser.Sprite|+Phaser.Group|+Phaser.Particles.Emitter|+Phaser.TilemapLayer|+array, collideCallback: fn(), processCallback: fn(), callbackContext: ?) -> bool"
		      },
		      "sortLeftRight": {
		       "!type": "fn(a: +Phaser.Sprite, b: +Phaser.Sprite) -> number"
		      },
		      "sortRightLeft": {
		       "!type": "fn(a: +Phaser.Sprite, b: +Phaser.Sprite) -> number"
		      },
		      "sortTopBottom": {
		       "!type": "fn(a: +Phaser.Sprite, b: +Phaser.Sprite) -> number"
		      },
		      "sortBottomTop": {
		       "!type": "fn(a: +Phaser.Sprite, b: +Phaser.Sprite) -> number"
		      },
		      "sort": {
		       "!type": "fn(group: +Phaser.Group, sortDirection: number)"
		      },
		      "intersects": {
		       "!type": "fn(body1: +Phaser.Physics.Arcade.Body, body2: +Phaser.Physics.Arcade.Body) -> bool"
		      },
		      "getObjectsUnderPointer": {
		       "!type": "fn(pointer: +Phaser.Pointer, group: +Phaser.Group, callback: fn(), callbackContext: ?) -> [?]"
		      },
		      "getObjectsAtLocation": {
		       "!type": "fn(x: number, y: number, group: +Phaser.Group, callback: fn(), callbackContext: ?, callbackArg: ?) -> [?]"
		      },
		      "moveToObject": {
		       "!type": "fn(displayObject: +any, destination: +any, speed: number, maxTime: number) -> number"
		      },
		      "moveToPointer": {
		       "!type": "fn(displayObject: +any, speed: number, pointer: +Phaser.Pointer, maxTime: number) -> number"
		      },
		      "moveToXY": {
		       "!type": "fn(displayObject: +any, x: number, y: number, speed: number, maxTime: number) -> number"
		      },
		      "velocityFromAngle": {
		       "!type": "fn(angle: number, speed: number, point: +Phaser.Point|?) -> +Phaser.Point"
		      },
		      "velocityFromRotation": {
		       "!type": "fn(rotation: number, speed: number, point: +Phaser.Point|?) -> +Phaser.Point"
		      },
		      "accelerationFromRotation": {
		       "!type": "fn(rotation: number, speed: number, point: +Phaser.Point|?) -> +Phaser.Point"
		      },
		      "accelerateToObject": {
		       "!type": "fn(displayObject: +any, destination: +any, speed: number, xSpeedMax: number, ySpeedMax: number) -> number"
		      },
		      "accelerateToPointer": {
		       "!type": "fn(displayObject: +any, pointer: +Phaser.Pointer, speed: number, xSpeedMax: number, ySpeedMax: number) -> number"
		      },
		      "accelerateToXY": {
		       "!type": "fn(displayObject: +any, x: number, y: number, speed: number, xSpeedMax: number, ySpeedMax: number) -> number"
		      },
		      "distanceBetween": {
		       "!type": "fn(source: +any, target: +any) -> number"
		      },
		      "distanceToXY": {
		       "!type": "fn(displayObject: +any, x: number, y: number) -> number"
		      },
		      "distanceToPointer": {
		       "!type": "fn(displayObject: +any, pointer: +Phaser.Pointer) -> number"
		      },
		      "angleBetween": {
		       "!type": "fn(source: +any, target: +any) -> number"
		      },
		      "angleToXY": {
		       "!type": "fn(displayObject: +any, x: number, y: number) -> number"
		      },
		      "angleToPointer": {
		       "!type": "fn(displayObject: +any, pointer: +Phaser.Pointer) -> number"
		      }
		     },
		     "SORT_NONE": {
		      "!type": "number"
		     },
		     "LEFT_RIGHT": {
		      "!type": "number"
		     },
		     "RIGHT_LEFT": {
		      "!type": "number"
		     },
		     "TOP_BOTTOM": {
		      "!type": "number"
		     },
		     "BOTTOM_TOP": {
		      "!type": "number"
		     }
		    },
		    "Ninja": {
		     "AABB": {
		      "!type": "fn(body: +Phaser.Physics.Ninja.Body, x: number, y: number, width: number, height: number)",
		      "prototype": {
		       "body": {
		        "!type": "+Phaser.Physics.Ninja.Body"
		       },
		       "system": {
		        "!type": "+Phaser.Physics.Ninja"
		       },
		       "pos": {
		        "!type": "+Phaser.Point"
		       },
		       "oldpos": {
		        "!type": "+Phaser.Point"
		       },
		       "xw": {
		        "!type": "number"
		       },
		       "yw": {
		        "!type": "number"
		       },
		       "width": {
		        "!type": "number"
		       },
		       "height": {
		        "!type": "number"
		       },
		       "velocity": {
		        "!type": "+Phaser.Point"
		       },
		       "aabbTileProjections": {},
		       "integrate": {
		        "!type": "fn()"
		       },
		       "reportCollisionVsWorld": {
		        "!type": "fn(px: number, py: number, dx: number, dy: number)"
		       },
		       "reportCollisionVsBody": {
		        "!type": "fn(px: number, py: number, dx: number, dy: number, obj: number)"
		       },
		       "collideWorldBounds": {
		        "!type": "fn()"
		       },
		       "collideAABBVsAABB": {
		        "!type": "fn(aabb: +Phaser.Physics.Ninja.AABB)"
		       },
		       "collideAABBVsTile": {
		        "!type": "fn(tile: +Phaser.Physics.Ninja.Tile)"
		       },
		       "resolveTile": {
		        "!type": "fn(x: number, y: number, body: +Phaser.Physics.Ninja.AABB, tile: +Phaser.Physics.Ninja.Tile) -> bool"
		       },
		       "projAABB_Full": {
		        "!type": "fn(x: number, y: number, obj: +Phaser.Physics.Ninja.AABB, t: +Phaser.Physics.Ninja.Tile) -> number"
		       },
		       "projAABB_Half": {
		        "!type": "fn(x: number, y: number, obj: +Phaser.Physics.Ninja.AABB, t: +Phaser.Physics.Ninja.Tile) -> number"
		       },
		       "projAABB_45Deg": {
		        "!type": "fn(x: number, y: number, obj: +Phaser.Physics.Ninja.AABB, t: +Phaser.Physics.Ninja.Tile) -> number"
		       },
		       "projAABB_22DegS": {
		        "!type": "fn(x: number, y: number, obj: +Phaser.Physics.Ninja.AABB, t: +Phaser.Physics.Ninja.Tile) -> number"
		       },
		       "projAABB_22DegB": {
		        "!type": "fn(x: number, y: number, obj: +Phaser.Physics.Ninja.AABB, t: +Phaser.Physics.Ninja.Tile) -> number"
		       },
		       "projAABB_67DegS": {
		        "!type": "fn(x: number, y: number, obj: +Phaser.Physics.Ninja.AABB, t: +Phaser.Physics.Ninja.Tile) -> number"
		       },
		       "projAABB_67DegB": {
		        "!type": "fn(x: number, y: number, obj: +Phaser.Physics.Ninja.AABB, t: +Phaser.Physics.Ninja.Tile) -> number"
		       },
		       "projAABB_Convex": {
		        "!type": "fn(x: number, y: number, obj: +Phaser.Physics.Ninja.AABB, t: +Phaser.Physics.Ninja.Tile) -> number"
		       },
		       "projAABB_Concave": {
		        "!type": "fn(x: number, y: number, obj: +Phaser.Physics.Ninja.AABB, t: +Phaser.Physics.Ninja.Tile) -> number"
		       },
		       "destroy": {
		        "!type": "fn()"
		       },
		       "render": {
		        "!type": "fn(context: ?, xOffset: number, yOffset: number, color: string, filled: bool)"
		       }
		      }
		     },
		     "Body": {
		      "!type": "fn(system: +Phaser.Physics.Ninja, sprite: +Phaser.Sprite, type: number, id: number, radius: number, x: number, y: number, width: number, height: number)",
		      "prototype": {
		       "sprite": {
		        "!type": "+Phaser.Sprite"
		       },
		       "game": {
		        "!type": "+Phaser.Game"
		       },
		       "type": {
		        "!type": "number"
		       },
		       "system": {
		        "!type": "+Phaser.Physics.Ninja"
		       },
		       "aabb": {
		        "!type": "+Phaser.Physics.Ninja.AABB"
		       },
		       "tile": {
		        "!type": "+Phaser.Physics.Ninja.Tile"
		       },
		       "circle": {
		        "!type": "+Phaser.Physics.Ninja.Circle"
		       },
		       "shape": {},
		       "drag": {
		        "!type": "number"
		       },
		       "friction": {
		        "!type": "number"
		       },
		       "gravityScale": {
		        "!type": "number"
		       },
		       "bounce": {
		        "!type": "number"
		       },
		       "velocity": {
		        "!type": "+Phaser.Point"
		       },
		       "facing": {
		        "!type": "number"
		       },
		       "immovable": {
		        "!type": "bool"
		       },
		       "collideWorldBounds": {
		        "!type": "bool"
		       },
		       "checkCollision": {},
		       "touching": {},
		       "wasTouching": {},
		       "maxSpeed": {
		        "!type": "number"
		       },
		       "preUpdate": {
		        "!type": "fn()"
		       },
		       "postUpdate": {
		        "!type": "fn()"
		       },
		       "setZeroVelocity": {
		        "!type": "fn()"
		       },
		       "reset": {
		        "!type": "fn()"
		       },
		       "deltaAbsX": {
		        "!type": "fn() -> number"
		       },
		       "deltaAbsY": {
		        "!type": "fn() -> number"
		       },
		       "deltaX": {
		        "!type": "fn() -> number"
		       },
		       "deltaY": {
		        "!type": "fn() -> number"
		       },
		       "destroy": {
		        "!type": "fn()"
		       },
		       "x": {
		        "!type": "number"
		       },
		       "y": {
		        "!type": "number"
		       },
		       "width": {
		        "!type": "number"
		       },
		       "height": {
		        "!type": "number"
		       },
		       "bottom": {
		        "!type": "number"
		       },
		       "right": {
		        "!type": "number"
		       },
		       "speed": {
		        "!type": "number"
		       },
		       "angle": {
		        "!type": "number"
		       },
		       "render": {
		        "!type": "fn(context: ?, body: +Phaser.Physics.Ninja.Body, color: string, filled: bool)"
		       }
		      }
		     },
		     "Circle": {
		      "!type": "fn(body: +Phaser.Physics.Ninja.Body, x: number, y: number, radius: number)",
		      "prototype": {
		       "body": {
		        "!type": "+Phaser.Physics.Ninja.Body"
		       },
		       "system": {
		        "!type": "+Phaser.Physics.Ninja"
		       },
		       "pos": {
		        "!type": "+Phaser.Point"
		       },
		       "oldpos": {
		        "!type": "+Phaser.Point"
		       },
		       "radius": {
		        "!type": "number"
		       },
		       "xw": {
		        "!type": "number"
		       },
		       "yw": {
		        "!type": "number"
		       },
		       "width": {
		        "!type": "number"
		       },
		       "height": {
		        "!type": "number"
		       },
		       "velocity": {
		        "!type": "+Phaser.Point"
		       },
		       "circleTileProjections": {},
		       "integrate": {
		        "!type": "fn()"
		       },
		       "reportCollisionVsWorld": {
		        "!type": "fn(px: number, py: number, dx: number, dy: number, obj: number)"
		       },
		       "collideWorldBounds": {
		        "!type": "fn()"
		       },
		       "collideCircleVsTile": {
		        "!type": "fn(t: +Phaser.Physics.Ninja.Tile) -> bool"
		       },
		       "resolveCircleTile": {
		        "!type": "fn(x: number, y: number, oH: number, oV: number, obj: +Phaser.Physics.Ninja.Circle, t: +Phaser.Physics.Ninja.Tile) -> number"
		       },
		       "projCircle_Full": {
		        "!type": "fn(x: number, y: number, oH: number, oV: number, obj: +Phaser.Physics.Ninja.Circle, t: +Phaser.Physics.Ninja.Tile) -> number"
		       },
		       "projCircle_45Deg": {
		        "!type": "fn(x: number, y: number, oH: number, oV: number, obj: +Phaser.Physics.Ninja.Circle, t: +Phaser.Physics.Ninja.Tile) -> number"
		       },
		       "projCircle_Concave": {
		        "!type": "fn(x: number, y: number, oH: number, oV: number, obj: +Phaser.Physics.Ninja.Circle, t: +Phaser.Physics.Ninja.Tile) -> number"
		       },
		       "projCircle_Convex": {
		        "!type": "fn(x: number, y: number, oH: number, oV: number, obj: +Phaser.Physics.Ninja.Circle, t: +Phaser.Physics.Ninja.Tile) -> number"
		       },
		       "projCircle_Half": {
		        "!type": "fn(x: number, y: number, oH: number, oV: number, obj: +Phaser.Physics.Ninja.Circle, t: +Phaser.Physics.Ninja.Tile) -> number"
		       },
		       "projCircle_22DegS": {
		        "!type": "fn(x: number, y: number, oH: number, oV: number, obj: +Phaser.Physics.Ninja.Circle, t: +Phaser.Physics.Ninja.Tile) -> number"
		       },
		       "projCircle_22DegB": {
		        "!type": "fn(x: number, y: number, oH: number, oV: number, obj: +Phaser.Physics.Ninja.Circle, t: +Phaser.Physics.Ninja.Tile) -> number"
		       },
		       "projCircle_67DegS": {
		        "!type": "fn(x: number, y: number, oH: number, oV: number, obj: +Phaser.Physics.Ninja.Circle, t: +Phaser.Physics.Ninja.Tile) -> number"
		       },
		       "projCircle_67DegB": {
		        "!type": "fn(x: number, y: number, oH: number, oV: number, obj: +Phaser.Physics.Ninja.Circle, t: +Phaser.Physics.Ninja.Tile) -> number"
		       },
		       "destroy": {
		        "!type": "fn()"
		       },
		       "render": {
		        "!type": "fn(context: ?, xOffset: number, yOffset: number, color: string, filled: bool)"
		       }
		      }
		     },
		     "Tile": {
		      "!type": "fn(body: +Phaser.Physics.Ninja.Body, x: number, y: number, width: number, height: number, type: number)",
		      "prototype": {
		       "body": {
		        "!type": "+Phaser.Physics.Ninja.Body"
		       },
		       "system": {
		        "!type": "+Phaser.Physics.Ninja"
		       },
		       "id": {
		        "!type": "number"
		       },
		       "type": {
		        "!type": "number"
		       },
		       "pos": {
		        "!type": "+Phaser.Point"
		       },
		       "oldpos": {
		        "!type": "+Phaser.Point"
		       },
		       "xw": {
		        "!type": "number"
		       },
		       "yw": {
		        "!type": "number"
		       },
		       "width": {
		        "!type": "number"
		       },
		       "height": {
		        "!type": "number"
		       },
		       "velocity": {
		        "!type": "+Phaser.Point"
		       },
		       "integrate": {
		        "!type": "fn()"
		       },
		       "collideWorldBounds": {
		        "!type": "fn()"
		       },
		       "reportCollisionVsWorld": {
		        "!type": "fn(px: number, py: number, dx: number, dy: number, obj: number)"
		       },
		       "setType": {
		        "!type": "fn(id: number)"
		       },
		       "clear": {
		        "!type": "fn()"
		       },
		       "destroy": {
		        "!type": "fn()"
		       },
		       "x": {
		        "!type": "number"
		       },
		       "y": {
		        "!type": "number"
		       },
		       "bottom": {
		        "!type": "number"
		       },
		       "right": {
		        "!type": "number"
		       }
		      }
		     },
		     "!type": "fn(game: +Phaser.Game)",
		     "prototype": {
		      "game": {
		       "!type": "+Phaser.Game"
		      },
		      "time": {
		       "!type": "+Phaser.Time"
		      },
		      "gravity": {
		       "!type": "number"
		      },
		      "bounds": {
		       "!type": "+Phaser.Rectangle"
		      },
		      "maxObjects": {
		       "!type": "number"
		      },
		      "maxLevels": {
		       "!type": "number"
		      },
		      "quadTree": {
		       "!type": "+Phaser.QuadTree"
		      },
		      "enableAABB": {
		       "!type": "fn(object: ?|+array|+Phaser.Group, children: bool)"
		      },
		      "enableCircle": {
		       "!type": "fn(object: ?|+array|+Phaser.Group, radius: number, children: bool)"
		      },
		      "enableTile": {
		       "!type": "fn(object: ?|+array|+Phaser.Group, id: number, children: bool)"
		      },
		      "enable": {
		       "!type": "fn(object: ?|+array|+Phaser.Group, type: number, id: number, radius: number, children: bool)"
		      },
		      "enableBody": {
		       "!type": "fn(object: ?)"
		      },
		      "setBounds": {
		       "!type": "fn(x: number, y: number, width: number, height: number)"
		      },
		      "setBoundsToWorld": {
		       "!type": "fn()"
		      },
		      "clearTilemapLayerBodies": {
		       "!type": "fn(map: +Phaser.Tilemap, layer: number|string|+Phaser.TilemapLayer)"
		      },
		      "convertTilemap": {
		       "!type": "fn(map: +Phaser.Tilemap, layer: number|string|+Phaser.TilemapLayer, slopeMap: ?) -> +array"
		      },
		      "overlap": {
		       "!type": "fn(object1: +Phaser.Sprite|+Phaser.Group|+Phaser.Particles.Emitter, object2: +Phaser.Sprite|+Phaser.Group|+Phaser.Particles.Emitter|+array, overlapCallback: fn(), processCallback: fn(), callbackContext: ?) -> bool"
		      },
		      "collide": {
		       "!type": "fn(object1: +Phaser.Sprite|+Phaser.Group|+Phaser.Particles.Emitter|+Phaser.TilemapLayer, object2: +Phaser.Sprite|+Phaser.Group|+Phaser.Particles.Emitter|+Phaser.TilemapLayer|+array, collideCallback: fn(), processCallback: fn(), callbackContext: ?) -> bool"
		      },
		      "separate": {
		       "!type": "fn(body1: +Phaser.Physics.Ninja.Body, body2: +Phaser.Physics.Ninja.Body) -> bool"
		      }
		     }
		    },
		    "Body": {
		     "prototype": {
		      "moveTo": {
		       "!type": "fn(speed: number, angle: number)"
		      },
		      "moveBackward": {
		       "!type": "fn(speed: number, angle: number)"
		      },
		      "moveLeft": {
		       "!type": "fn(speed: number)"
		      },
		      "moveRight": {
		       "!type": "fn(speed: number)"
		      },
		      "moveUp": {
		       "!type": "fn(speed: number)"
		      },
		      "moveDown": {
		       "!type": "fn(speed: number)"
		      }
		     }
		    },
		    "P2": {
		     "Body": {
		      "!type": "fn(game: +Phaser.Game, sprite: +Phaser.Sprite, x: number, y: number, mass: number)",
		      "prototype": {
		       "game": {
		        "!type": "+Phaser.Game"
		       },
		       "world": {
		        "!type": "+Phaser.Physics.P2"
		       },
		       "sprite": {
		        "!type": "+Phaser.Sprite"
		       },
		       "type": {
		        "!type": "number"
		       },
		       "offset": {
		        "!type": "+Phaser.Point"
		       },
		       "data": {
		        "!type": "+p2.Body"
		       },
		       "velocity": {
		        "!type": "+Phaser.Physics.P2.InversePointProxy"
		       },
		       "force": {
		        "!type": "+Phaser.Physics.P2.InversePointProxy"
		       },
		       "gravity": {
		        "!type": "+Phaser.Point"
		       },
		       "onBeginContact": {
		        "!type": "+Phaser.Signal"
		       },
		       "onEndContact": {
		        "!type": "+Phaser.Signal"
		       },
		       "collidesWith": {
		        "!type": "+array"
		       },
		       "removeNextStep": {
		        "!type": "bool"
		       },
		       "debugBody": {
		        "!type": "+Phaser.Physics.P2.BodyDebug"
		       },
		       "dirty": {
		        "!type": "bool"
		       },
		       "createBodyCallback": {
		        "!type": "fn(object: +Phaser.Sprite|+Phaser.TileSprite|+Phaser.Physics.P2.Body|+p2.Body, callback: fn(), callbackContext: ?)"
		       },
		       "createGroupCallback": {
		        "!type": "fn(group: +Phaser.Physics.CollisionGroup, callback: fn(), callbackContext: ?)"
		       },
		       "getCollisionMask": {
		        "!type": "fn() -> number"
		       },
		       "updateCollisionMask": {
		        "!type": "fn(shape: +p2.Shape)"
		       },
		       "setCollisionGroup": {
		        "!type": "fn(group: +Phaser.Physics.CollisionGroup, shape: +p2.Shape)"
		       },
		       "clearCollision": {
		        "!type": "fn(clearGroup: bool, clearMask: bool, shape: +p2.Shape)"
		       },
		       "collides": {
		        "!type": "fn(group: +Phaser.Physics.CollisionGroup|+array, callback: fn(), callbackContext: ?, shape: +p2.Shape)"
		       },
		       "adjustCenterOfMass": {
		        "!type": "fn()"
		       },
		       "getVelocityAtPoint": {
		        "!type": "fn(result: [?], relativePoint: [?]) -> [?]"
		       },
		       "applyDamping": {
		        "!type": "fn(dt: number)"
		       },
		       "applyImpulse": {
		        "!type": "fn(impulse: +Float32Array|[?], worldX: number, worldY: number)"
		       },
		       "applyImpulseLocal": {
		        "!type": "fn(impulse: +Float32Array|[?], localX: number, localY: number)"
		       },
		       "applyForce": {
		        "!type": "fn(force: +Float32Array|[?], worldX: number, worldY: number)"
		       },
		       "setZeroForce": {
		        "!type": "fn()"
		       },
		       "setZeroRotation": {
		        "!type": "fn()"
		       },
		       "setZeroVelocity": {
		        "!type": "fn()"
		       },
		       "setZeroDamping": {
		        "!type": "fn()"
		       },
		       "toLocalFrame": {
		        "!type": "fn(out: +Float32Array|[?], worldPoint: +Float32Array|[?])"
		       },
		       "toWorldFrame": {
		        "!type": "fn(out: [?], localPoint: [?])"
		       },
		       "rotateLeft": {
		        "!type": "fn(speed: number)"
		       },
		       "rotateRight": {
		        "!type": "fn(speed: number)"
		       },
		       "moveForward": {
		        "!type": "fn(speed: number)"
		       },
		       "moveBackward": {
		        "!type": "fn(speed: number)"
		       },
		       "thrust": {
		        "!type": "fn(speed: number)"
		       },
		       "reverse": {
		        "!type": "fn(speed: number)"
		       },
		       "moveLeft": {
		        "!type": "fn(speed: number)"
		       },
		       "moveRight": {
		        "!type": "fn(speed: number)"
		       },
		       "moveUp": {
		        "!type": "fn(speed: number)"
		       },
		       "moveDown": {
		        "!type": "fn(speed: number)"
		       },
		       "preUpdate": {
		        "!type": "fn()"
		       },
		       "postUpdate": {
		        "!type": "fn()"
		       },
		       "reset": {
		        "!type": "fn(x: number, y: number, resetDamping: bool, resetMass: bool)"
		       },
		       "addToWorld": {
		        "!type": "fn()"
		       },
		       "removeFromWorld": {
		        "!type": "fn()"
		       },
		       "destroy": {
		        "!type": "fn()"
		       },
		       "clearShapes": {
		        "!type": "fn()"
		       },
		       "addShape": {
		        "!type": "fn(shape: +p2.Shape, offsetX: number, offsetY: number, rotation: number) -> +p2.Shape"
		       },
		       "addCircle": {
		        "!type": "fn(radius: number, offsetX: number, offsetY: number, rotation: number) -> +p2.Circle"
		       },
		       "addRectangle": {
		        "!type": "fn(width: number, height: number, offsetX: number, offsetY: number, rotation: number) -> +p2.Box"
		       },
		       "addPlane": {
		        "!type": "fn(offsetX: number, offsetY: number, rotation: number) -> +p2.Plane"
		       },
		       "addParticle": {
		        "!type": "fn(offsetX: number, offsetY: number, rotation: number) -> +p2.Particle"
		       },
		       "addLine": {
		        "!type": "fn(length: number, offsetX: number, offsetY: number, rotation: number) -> +p2.Line"
		       },
		       "addCapsule": {
		        "!type": "fn(length: number, radius: number, offsetX: number, offsetY: number, rotation: number) -> +p2.Capsule"
		       },
		       "addPolygon": {
		        "!type": "fn(options: +PhaserPhysics.P2.BodyaddPolygonOptions, points: [?]|number) -> bool"
		       },
		       "removeShape": {
		        "!type": "fn(shape: +p2.Circle|+p2.Rectangle|+p2.Plane|+p2.Line|+p2.Particle) -> bool"
		       },
		       "setCircle": {
		        "!type": "fn(radius: number, offsetX: number, offsetY: number, rotation: number)"
		       },
		       "setRectangle": {
		        "!type": "fn(width: number, height: number, offsetX: number, offsetY: number, rotation: number) -> +p2.Rectangle"
		       },
		       "setRectangleFromSprite": {
		        "!type": "fn(sprite: +Phaser.Sprite|+Phaser.Image) -> +p2.Rectangle"
		       },
		       "setMaterial": {
		        "!type": "fn(material: +Phaser.Physics.P2.Material, shape: +p2.Shape)"
		       },
		       "shapeChanged": {
		        "!type": "fn()"
		       },
		       "addPhaserPolygon": {
		        "!type": "fn(key: string, object: string)"
		       },
		       "addFixture": {
		        "!type": "fn(fixtureData: string) -> +array"
		       },
		       "loadPolygon": {
		        "!type": "fn(key: string, object: string|?) -> bool"
		       },
		       "static": {
		        "!type": "bool"
		       },
		       "dynamic": {
		        "!type": "bool"
		       },
		       "kinematic": {
		        "!type": "bool"
		       },
		       "allowSleep": {
		        "!type": "bool"
		       },
		       "angle": {
		        "!type": "number"
		       },
		       "angularDamping": {
		        "!type": "number"
		       },
		       "angularForce": {
		        "!type": "number"
		       },
		       "angularVelocity": {
		        "!type": "number"
		       },
		       "damping": {
		        "!type": "number"
		       },
		       "fixedRotation": {
		        "!type": "bool"
		       },
		       "inertia": {
		        "!type": "number"
		       },
		       "mass": {
		        "!type": "number"
		       },
		       "motionState": {
		        "!type": "number"
		       },
		       "rotation": {
		        "!type": "number"
		       },
		       "sleepSpeedLimit": {
		        "!type": "number"
		       },
		       "x": {
		        "!type": "number"
		       },
		       "y": {
		        "!type": "number"
		       },
		       "id": {
		        "!type": "number"
		       },
		       "debug": {
		        "!type": "bool"
		       },
		       "collideWorldBounds": {
		        "!type": "bool"
		       }
		      },
		      "DYNAMIC": {},
		      "STATIC": {},
		      "KINEMATIC": {}
		     },
		     "BodyDebug": {
		      "!type": "fn(game: +Phaser.Game, body: +Phaser.Physics.P2.Body, settings: ?)",
		      "prototype": {
		       "ppu": {
		        "!type": "number"
		       },
		       "body": {
		        "!type": "+Phaser.Physics.P2.Body"
		       },
		       "canvas": {
		        "!type": "+Phaser.Graphics"
		       },
		       "updateSpriteTransform": {
		        "!type": "fn()"
		       },
		       "draw": {
		        "!type": "fn()"
		       },
		       "game": {
		        "!type": "+Phaser.Game"
		       },
		       "name": {
		        "!type": "string"
		       },
		       "z": {
		        "!type": "number"
		       },
		       "type": {
		        "!type": "number"
		       },
		       "physicsType": {
		        "!type": "number"
		       },
		       "alive": {
		        "!type": "bool"
		       },
		       "exists": {
		        "!type": "bool"
		       },
		       "ignoreDestroy": {
		        "!type": "bool"
		       },
		       "pendingDestroy": {
		        "!type": "bool"
		       },
		       "classType": {},
		       "cursor": {
		        "!type": "+DisplayObject"
		       },
		       "enableBody": {
		        "!type": "bool"
		       },
		       "enableBodyDebug": {
		        "!type": "bool"
		       },
		       "physicsBodyType": {
		        "!type": "number"
		       },
		       "physicsSortDirection": {
		        "!type": "number"
		       },
		       "onDestroy": {
		        "!type": "+Phaser.Signal"
		       },
		       "cursorIndex": {
		        "!type": "number"
		       },
		       "fixedToCamera": {
		        "!type": "bool"
		       },
		       "cameraOffset": {
		        "!type": "+Phaser.Point"
		       },
		       "hash": {
		        "!type": "+array"
		       },
		       "add": {
		        "!type": "fn(child: +DisplayObject, silent: bool) -> +DisplayObject"
		       },
		       "addToHash": {
		        "!type": "fn(child: +DisplayObject) -> bool"
		       },
		       "removeFromHash": {
		        "!type": "fn(child: +DisplayObject) -> bool"
		       },
		       "addMultiple": {
		        "!type": "fn(children: [?]|+Phaser.Group, silent: bool) -> [?]|+Phaser.Group"
		       },
		       "addAt": {
		        "!type": "fn(child: +DisplayObject, index: number, silent: bool) -> +DisplayObject"
		       },
		       "getAt": {
		        "!type": "fn(index: number) -> +DisplayObject|number"
		       },
		       "create": {
		        "!type": "fn(x: number, y: number, key: string, frame: number|string, exists: bool) -> +DisplayObject"
		       },
		       "createMultiple": {
		        "!type": "fn(quantity: number, key: string, frame: number|string, exists: bool)"
		       },
		       "updateZ": {
		        "!type": "fn()"
		       },
		       "resetCursor": {
		        "!type": "fn(index: number) -> +any"
		       },
		       "next": {
		        "!type": "fn() -> +any"
		       },
		       "previous": {
		        "!type": "fn() -> +any"
		       },
		       "swap": {
		        "!type": "fn(child1: +any, child2: +any)"
		       },
		       "bringToTop": {
		        "!type": "fn(child: +any) -> +any"
		       },
		       "sendToBack": {
		        "!type": "fn(child: +any) -> +any"
		       },
		       "moveUp": {
		        "!type": "fn(child: +any) -> +any"
		       },
		       "moveDown": {
		        "!type": "fn(child: +any) -> +any"
		       },
		       "xy": {
		        "!type": "fn(index: number, x: number, y: number)"
		       },
		       "reverse": {
		        "!type": "fn()"
		       },
		       "getIndex": {
		        "!type": "fn(child: +any) -> number"
		       },
		       "replace": {
		        "!type": "fn(oldChild: +any, newChild: +any) -> +any"
		       },
		       "hasProperty": {
		        "!type": "fn(child: +any, key: [?]) -> bool"
		       },
		       "setProperty": {
		        "!type": "fn(child: +any, key: +array, value: +any, operation: number, force: bool) -> bool"
		       },
		       "checkProperty": {
		        "!type": "fn(child: +any, key: +array, value: +any, force: bool) -> bool"
		       },
		       "set": {
		        "!type": "fn(child: +Phaser.Sprite, key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool) -> bool"
		       },
		       "setAll": {
		        "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)"
		       },
		       "setAllChildren": {
		        "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)"
		       },
		       "checkAll": {
		        "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, force: bool)"
		       },
		       "addAll": {
		        "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		       },
		       "subAll": {
		        "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		       },
		       "multiplyAll": {
		        "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		       },
		       "divideAll": {
		        "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)"
		       },
		       "callAllExists": {
		        "!type": "fn(callback: string, existsValue: bool, parameter: +any)"
		       },
		       "callbackFromArray": {
		        "!type": "fn(child: ?, callback: +array, length: number)"
		       },
		       "callAll": {
		        "!type": "fn(method: string, context: string, args: +any)"
		       },
		       "preUpdate": {
		        "!type": "fn()"
		       },
		       "update": {
		        "!type": "fn()"
		       },
		       "postUpdate": {
		        "!type": "fn()"
		       },
		       "filter": {
		        "!type": "fn(predicate: fn(), checkExists: bool) -> +Phaser.ArraySet"
		       },
		       "forEach": {
		        "!type": "fn(callback: fn(), callbackContext: ?, checkExists: bool, args: +any)"
		       },
		       "forEachExists": {
		        "!type": "fn(callback: fn(), callbackContext: ?, args: +any)"
		       },
		       "forEachAlive": {
		        "!type": "fn(callback: fn(), callbackContext: ?, args: +any)"
		       },
		       "forEachDead": {
		        "!type": "fn(callback: fn(), callbackContext: ?, args: +any)"
		       },
		       "sort": {
		        "!type": "fn(key: string, order: number)"
		       },
		       "customSort": {
		        "!type": "fn(sortHandler: fn(), context: ?)"
		       },
		       "ascendingSortHandler": {
		        "!type": "fn(a: ?, b: ?)"
		       },
		       "descendingSortHandler": {
		        "!type": "fn(a: ?, b: ?)"
		       },
		       "iterate": {
		        "!type": "fn(key: string, value: +any, returnType: number, callback: fn(), callbackContext: ?, args: [?]) -> +any"
		       },
		       "getFirstExists": {
		        "!type": "fn(exists: bool) -> +any"
		       },
		       "getFirstAlive": {
		        "!type": "fn() -> +any"
		       },
		       "getFirstDead": {
		        "!type": "fn() -> +any"
		       },
		       "getTop": {
		        "!type": "fn() -> +any"
		       },
		       "getBottom": {
		        "!type": "fn() -> +any"
		       },
		       "countLiving": {
		        "!type": "fn() -> number"
		       },
		       "countDead": {
		        "!type": "fn() -> number"
		       },
		       "getRandom": {
		        "!type": "fn(startIndex: number, length: number) -> +any"
		       },
		       "remove": {
		        "!type": "fn(child: +any, destroy: bool, silent: bool) -> bool"
		       },
		       "moveAll": {
		        "!type": "fn(group: +Phaser.Group, silent: bool) -> +Phaser.Group"
		       },
		       "removeAll": {
		        "!type": "fn(destroy: bool, silent: bool)"
		       },
		       "removeBetween": {
		        "!type": "fn(startIndex: number, endIndex: number, destroy: bool, silent: bool)"
		       },
		       "destroy": {
		        "!type": "fn(destroyChildren: bool, soft: bool)"
		       },
		       "total": {
		        "!type": "number"
		       },
		       "length": {
		        "!type": "number"
		       },
		       "angle": {
		        "!type": "number"
		       },
		       "x": {
		        "!type": "number"
		       },
		       "y": {
		        "!type": "number"
		       },
		       "rotation": {
		        "!type": "number"
		       },
		       "visible": {
		        "!type": "bool"
		       },
		       "alpha": {
		        "!type": "number"
		       },
		       "children": {}
		      }
		     },
		     "CollisionGroup": {
		      "!type": "fn(bitmask: number)",
		      "prototype": {
		       "mask": {
		        "!type": "number"
		       }
		      }
		     },
		     "ContactMaterial": {
		      "!type": "fn(materialA: +Phaser.Physics.P2.Material, materialB: +Phaser.Physics.P2.Material, options: ?)"
		     },
		     "DistanceConstraint": {
		      "!type": "fn(world: +Phaser.Physics.P2, bodyA: +p2.Body, bodyB: +p2.Body, distance: number, localAnchorA: [?], localAnchorB: [?], maxForce: ?)",
		      "prototype": {
		       "game": {
		        "!type": "+Phaser.Game"
		       },
		       "world": {
		        "!type": "+Phaser.Physics.P2"
		       }
		      }
		     },
		     "FixtureList": {
		      "!type": "fn(list: [?])",
		      "prototype": {
		       "init": {
		        "!type": "fn()"
		       },
		       "setCategory": {
		        "!type": "fn(bit: number, fixtureKey: string)"
		       },
		       "setMask": {
		        "!type": "fn(bit: number, fixtureKey: string)"
		       },
		       "setSensor": {
		        "!type": "fn(value: bool, fixtureKey: string)"
		       },
		       "setMaterial": {
		        "!type": "fn(material: ?, fixtureKey: string)"
		       },
		       "getFixtures": {
		        "!type": "fn(keys: +array)"
		       },
		       "getFixtureByKey": {
		        "!type": "fn(key: string)"
		       },
		       "getGroup": {
		        "!type": "fn(groupID: number)"
		       },
		       "parse": {
		        "!type": "fn()"
		       },
		       "flatten": {
		        "!type": "fn(array: +array)"
		       }
		      }
		     },
		     "GearConstraint": {
		      "!type": "fn(world: +Phaser.Physics.P2, bodyA: +p2.Body, bodyB: +p2.Body, angle: number, ratio: number)",
		      "prototype": {
		       "game": {
		        "!type": "+Phaser.Game"
		       },
		       "world": {
		        "!type": "+Phaser.Physics.P2"
		       }
		      }
		     },
		     "InversePointProxy": {
		      "!type": "fn(world: +Phaser.Physics.P2, destination: +any)",
		      "prototype": {
		       "x": {
		        "!type": "number"
		       },
		       "y": {
		        "!type": "number"
		       },
		       "mx": {
		        "!type": "number"
		       },
		       "my": {
		        "!type": "number"
		       }
		      }
		     },
		     "LockConstraint": {
		      "!type": "fn(world: +Phaser.Physics.P2, bodyA: +p2.Body, bodyB: +p2.Body, offset: [?], angle: number, maxForce: number)",
		      "prototype": {
		       "game": {
		        "!type": "+Phaser.Game"
		       },
		       "world": {
		        "!type": "+Phaser.Physics.P2"
		       }
		      }
		     },
		     "Material": {
		      "!type": "fn(name: string)",
		      "prototype": {
		       "name": {
		        "!type": "string"
		       }
		      }
		     },
		     "PointProxy": {
		      "!type": "fn(world: +Phaser.Physics.P2, destination: +any)",
		      "prototype": {
		       "x": {
		        "!type": "number"
		       },
		       "y": {
		        "!type": "number"
		       },
		       "mx": {
		        "!type": "number"
		       },
		       "my": {
		        "!type": "number"
		       }
		      }
		     },
		     "PrismaticConstraint": {
		      "!type": "fn(world: +Phaser.Physics.P2, bodyA: +p2.Body, bodyB: +p2.Body, lockRotation: bool, anchorA: [?], anchorB: [?], axis: [?], maxForce: number)",
		      "prototype": {
		       "game": {
		        "!type": "+Phaser.Game"
		       },
		       "world": {
		        "!type": "+Phaser.Physics.P2"
		       }
		      }
		     },
		     "RevoluteConstraint": {
		      "!type": "fn(world: +Phaser.Physics.P2, bodyA: +p2.Body, pivotA: +Float32Array, bodyB: +p2.Body, pivotB: +Float32Array, maxForce: number, worldPivot: +Float32Array)",
		      "prototype": {
		       "game": {
		        "!type": "+Phaser.Game"
		       },
		       "world": {
		        "!type": "+Phaser.Physics.P2"
		       }
		      }
		     },
		     "RotationalSpring": {
		      "!type": "fn(world: +Phaser.Physics.P2, bodyA: +p2.Body, bodyB: +p2.Body, restAngle: number, stiffness: number, damping: number)",
		      "prototype": {
		       "game": {
		        "!type": "+Phaser.Game"
		       },
		       "world": {
		        "!type": "+Phaser.Physics.P2"
		       },
		       "data": {
		        "!type": "+p2.RotationalSpring"
		       }
		      }
		     },
		     "Spring": {
		      "!type": "fn(world: +Phaser.Physics.P2, bodyA: +p2.Body, bodyB: +p2.Body, restLength: number, stiffness: number, damping: number, worldA: [?], worldB: [?], localA: [?], localB: [?])",
		      "prototype": {
		       "game": {
		        "!type": "+Phaser.Game"
		       },
		       "world": {
		        "!type": "+Phaser.Physics.P2"
		       },
		       "data": {
		        "!type": "+p2.LinearSpring"
		       }
		      }
		     },
		     "!type": "fn(game: +Phaser.Game, config: ?)",
		     "prototype": {
		      "game": {
		       "!type": "+Phaser.Game"
		      },
		      "config": {},
		      "world": {
		       "!type": "+p2.World"
		      },
		      "frameRate": {
		       "!type": "number"
		      },
		      "useElapsedTime": {
		       "!type": "bool"
		      },
		      "paused": {
		       "!type": "bool"
		      },
		      "materials": {
		       "!type": "+array.<Phaser.Physics.P2.Material>"
		      },
		      "gravity": {
		       "!type": "+Phaser.Physics.P2.InversePointProxy"
		      },
		      "walls": {},
		      "onBodyAdded": {
		       "!type": "+Phaser.Signal"
		      },
		      "onBodyRemoved": {
		       "!type": "+Phaser.Signal"
		      },
		      "onSpringAdded": {
		       "!type": "+Phaser.Signal"
		      },
		      "onSpringRemoved": {
		       "!type": "+Phaser.Signal"
		      },
		      "onConstraintAdded": {
		       "!type": "+Phaser.Signal"
		      },
		      "onConstraintRemoved": {
		       "!type": "+Phaser.Signal"
		      },
		      "onContactMaterialAdded": {
		       "!type": "+Phaser.Signal"
		      },
		      "onContactMaterialRemoved": {
		       "!type": "+Phaser.Signal"
		      },
		      "postBroadphaseCallback": {
		       "!type": "fn()"
		      },
		      "callbackContext": {},
		      "onBeginContact": {
		       "!type": "+Phaser.Signal"
		      },
		      "onEndContact": {
		       "!type": "+Phaser.Signal"
		      },
		      "collisionGroups": {
		       "!type": "+array"
		      },
		      "nothingCollisionGroup": {
		       "!type": "+Phaser.Physics.P2.CollisionGroup"
		      },
		      "boundsCollisionGroup": {
		       "!type": "+Phaser.Physics.P2.CollisionGroup"
		      },
		      "everythingCollisionGroup": {
		       "!type": "+Phaser.Physics.P2.CollisionGroup"
		      },
		      "boundsCollidesWith": {
		       "!type": "+array"
		      },
		      "removeBodyNextStep": {
		       "!type": "fn(body: +Phaser.Physics.P2.Body)"
		      },
		      "preUpdate": {
		       "!type": "fn()"
		      },
		      "enable": {
		       "!type": "fn(object: ?|+array|+Phaser.Group, debug: bool, children: bool)"
		      },
		      "enableBody": {
		       "!type": "fn(object: ?, debug: bool)"
		      },
		      "setImpactEvents": {
		       "!type": "fn(state: bool)"
		      },
		      "setPostBroadphaseCallback": {
		       "!type": "fn(callback: fn(), context: ?)"
		      },
		      "beginContactHandler": {
		       "!type": "fn(event: ?)"
		      },
		      "endContactHandler": {
		       "!type": "fn(event: ?)"
		      },
		      "updateBoundsCollisionGroup": {
		       "!type": "fn(setCollisionGroup: bool)"
		      },
		      "setBounds": {
		       "!type": "fn(x: number, y: number, width: number, height: number, left: bool, right: bool, top: bool, bottom: bool, setCollisionGroup: bool)"
		      },
		      "pause": {
		       "!type": "fn()"
		      },
		      "resume": {
		       "!type": "fn()"
		      },
		      "update": {
		       "!type": "fn()"
		      },
		      "reset": {
		       "!type": "fn()"
		      },
		      "clear": {
		       "!type": "fn()"
		      },
		      "destroy": {
		       "!type": "fn()"
		      },
		      "addBody": {
		       "!type": "fn(body: +Phaser.Physics.P2.Body) -> bool"
		      },
		      "removeBody": {
		       "!type": "fn(body: +Phaser.Physics.P2.Body) -> +Phaser.Physics.P2.Body"
		      },
		      "addSpring": {
		       "!type": "fn(spring: +Phaser.Physics.P2.Spring|+p2.LinearSpring|+p2.RotationalSpring) -> +Phaser.Physics.P2.Spring"
		      },
		      "removeSpring": {
		       "!type": "fn(spring: +Phaser.Physics.P2.Spring) -> +Phaser.Physics.P2.Spring"
		      },
		      "createDistanceConstraint": {
		       "!type": "fn(bodyA: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, bodyB: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, distance: number, localAnchorA: [?], localAnchorB: [?], maxForce: number) -> +Phaser.Physics.P2.DistanceConstraint"
		      },
		      "createGearConstraint": {
		       "!type": "fn(bodyA: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, bodyB: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, angle: number, ratio: number) -> +Phaser.Physics.P2.GearConstraint"
		      },
		      "createRevoluteConstraint": {
		       "!type": "fn(bodyA: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, pivotA: [?], bodyB: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, pivotB: [?], maxForce: number, worldPivot: +Float32Array) -> +Phaser.Physics.P2.RevoluteConstraint"
		      },
		      "createLockConstraint": {
		       "!type": "fn(bodyA: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, bodyB: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, offset: [?], angle: number, maxForce: number) -> +Phaser.Physics.P2.LockConstraint"
		      },
		      "createPrismaticConstraint": {
		       "!type": "fn(bodyA: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, bodyB: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, lockRotation: bool, anchorA: [?], anchorB: [?], axis: [?], maxForce: number) -> +Phaser.Physics.P2.PrismaticConstraint"
		      },
		      "addConstraint": {
		       "!type": "fn(constraint: +Phaser.Physics.P2.Constraint) -> +Phaser.Physics.P2.Constraint"
		      },
		      "removeConstraint": {
		       "!type": "fn(constraint: +Phaser.Physics.P2.Constraint) -> +Phaser.Physics.P2.Constraint"
		      },
		      "addContactMaterial": {
		       "!type": "fn(material: +Phaser.Physics.P2.ContactMaterial) -> +Phaser.Physics.P2.ContactMaterial"
		      },
		      "removeContactMaterial": {
		       "!type": "fn(material: +Phaser.Physics.P2.ContactMaterial) -> +Phaser.Physics.P2.ContactMaterial"
		      },
		      "getContactMaterial": {
		       "!type": "fn(materialA: +Phaser.Physics.P2.Material, materialB: +Phaser.Physics.P2.Material) -> +Phaser.Physics.P2.ContactMaterial|bool"
		      },
		      "setMaterial": {
		       "!type": "fn(material: +Phaser.Physics.P2.Material, bodies: +array.<Phaser.Physics.P2.Body>)"
		      },
		      "createMaterial": {
		       "!type": "fn(name: string, body: +Phaser.Physics.P2.Body) -> +Phaser.Physics.P2.Material"
		      },
		      "createContactMaterial": {
		       "!type": "fn(materialA: +Phaser.Physics.P2.Material, materialB: +Phaser.Physics.P2.Material, options: ?) -> +Phaser.Physics.P2.ContactMaterial"
		      },
		      "getBodies": {
		       "!type": "fn() -> +array.<Phaser.Physics.P2.Body>"
		      },
		      "getBody": {
		       "!type": "fn(object: ?) -> +p2.Body"
		      },
		      "getSprings": {
		       "!type": "fn() -> +array.<Phaser.Physics.P2.Spring>"
		      },
		      "getConstraints": {
		       "!type": "fn() -> +array.<Phaser.Physics.P2.Constraint>"
		      },
		      "hitTest": {
		       "!type": "fn(worldPoint: +Phaser.Point, bodies: [?], precision: number, filterStatic: bool) -> [?]"
		      },
		      "toJSON": {
		       "!type": "fn() -> ?"
		      },
		      "createCollisionGroup": {
		       "!type": "fn(object: +Phaser.Group|+Phaser.Sprite)"
		      },
		      "createSpring": {
		       "!type": "fn(bodyA: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, bodyB: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, restLength: number, stiffness: number, damping: number, worldA: [?], worldB: [?], localA: [?], localB: [?]) -> +Phaser.Physics.P2.Spring"
		      },
		      "createRotationalSpring": {
		       "!type": "fn(bodyA: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, bodyB: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, restAngle: number, stiffness: number, damping: number) -> +Phaser.Physics.P2.RotationalSpring"
		      },
		      "createBody": {
		       "!type": "fn(x: number, y: number, mass: number, addToWorld: bool, options: +PhaserPhysics.P2createBodyOptions, points: [?]|number) -> +Phaser.Physics.P2.Body"
		      },
		      "createParticle": {
		       "!type": "fn(x: number, y: number, mass: number, addToWorld: bool, options: +PhaserPhysics.P2createParticleOptions, points: [?]|number)"
		      },
		      "convertCollisionObjects": {
		       "!type": "fn(map: +Phaser.Tilemap, layer: number|string|+Phaser.TilemapLayer, addToWorld: bool) -> +array"
		      },
		      "clearTilemapLayerBodies": {
		       "!type": "fn(map: +Phaser.Tilemap, layer: number|string|+Phaser.TilemapLayer)"
		      },
		      "convertTilemap": {
		       "!type": "fn(map: +Phaser.Tilemap, layer: number|string|+Phaser.TilemapLayer, addToWorld: bool, optimize: bool) -> +array"
		      },
		      "mpx": {
		       "!type": "fn(v: number) -> number"
		      },
		      "pxm": {
		       "!type": "fn(v: number) -> number"
		      },
		      "mpxi": {
		       "!type": "fn(v: number) -> number"
		      },
		      "pxmi": {
		       "!type": "fn(v: number) -> number"
		      },
		      "friction": {
		       "!type": "number"
		      },
		      "restitution": {
		       "!type": "number"
		      },
		      "contactMaterial": {
		       "!type": "+p2.ContactMaterial"
		      },
		      "applySpringForces": {
		       "!type": "bool"
		      },
		      "applyDamping": {
		       "!type": "bool"
		      },
		      "applyGravity": {
		       "!type": "bool"
		      },
		      "solveConstraints": {
		       "!type": "bool"
		      },
		      "time": {
		       "!type": "bool"
		      },
		      "emitImpactEvent": {
		       "!type": "bool"
		      },
		      "sleepMode": {
		       "!type": "number"
		      },
		      "total": {
		       "!type": "number"
		      }
		     }
		    },
		    "prototype": {
		     "setBoundsToWorld": {
		      "!type": "fn()"
		     },
		     "setWorldMaterial": {
		      "!type": "fn(material: +Phaser.Physics.P2.Material, left: bool, right: bool, top: bool, bottom: bool)"
		     },
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "config": {},
		     "arcade": {
		      "!type": "+Phaser.Physics.Arcade"
		     },
		     "p2": {
		      "!type": "+Phaser.Physics.P2"
		     },
		     "ninja": {
		      "!type": "+Phaser.Physics.Ninja"
		     },
		     "box2d": {
		      "!type": "+Phaser.Physics.Box2D"
		     },
		     "chipmunk": {
		      "!type": "+Phaser.Physics.Chipmunk"
		     },
		     "matter": {
		      "!type": "+Phaser.Physics.Matter"
		     },
		     "parseConfig": {
		      "!type": "fn()"
		     },
		     "startSystem": {
		      "!type": "fn(system: number)"
		     },
		     "enable": {
		      "!type": "fn(object: ?|+array, system: number, debug: bool)"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "clear": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     }
		    },
		    "P2y": {
		     "prototype": {
		      "setCollisionGroup": {
		       "!type": "fn(object: +Phaser.Group|+Phaser.Sprite, group: +Phaser.Physics.CollisionGroup)"
		      }
		     }
		    },
		    "!type": "fn(game: +Phaser.Game, physicsConfig: ?)",
		    "ARCADE": {
		     "!type": "number"
		    },
		    "P2JS": {
		     "!type": "number"
		    },
		    "NINJA": {
		     "!type": "number"
		    },
		    "BOX2D": {
		     "!type": "number"
		    },
		    "CHIPMUNK": {
		     "!type": "number"
		    },
		    "MATTERJS": {
		     "!type": "number"
		    }
		   },
		   "Phyiscs": {
		    "Ninja": {
		     "AABB": {
		      "prototype": {
		       "reportCollision": {
		        "!type": "fn(px: number, py: number, dx: number, dy: number)"
		       }
		      }
		     }
		    }
		   },
		   "AudioSprite": {
		    "!type": "fn(game: +Phaser.Game, key: string)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "key": {
		      "!type": "string"
		     },
		     "config": {},
		     "autoplayKey": {
		      "!type": "string"
		     },
		     "autoplay": {
		      "!type": "bool"
		     },
		     "sounds": {},
		     "play": {
		      "!type": "fn(marker: string, volume: number) -> +Phaser.Sound"
		     },
		     "stop": {
		      "!type": "fn(marker: string)"
		     },
		     "get": {
		      "!type": "fn(marker: string) -> +Phaser.Sound"
		     }
		    }
		   },
		   "Sound": {
		    "!type": "fn(game: +Phaser.Game, key: string, volume: number, loop: bool)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "key": {
		      "!type": "string"
		     },
		     "loop": {
		      "!type": "bool"
		     },
		     "volume": {
		      "!type": "number"
		     },
		     "markers": {},
		     "context": {
		      "!type": "+AudioContext"
		     },
		     "autoplay": {
		      "!type": "bool"
		     },
		     "totalDuration": {
		      "!type": "number"
		     },
		     "startTime": {
		      "!type": "number"
		     },
		     "currentTime": {
		      "!type": "number"
		     },
		     "duration": {
		      "!type": "number"
		     },
		     "durationMS": {
		      "!type": "number"
		     },
		     "position": {
		      "!type": "number"
		     },
		     "stopTime": {
		      "!type": "number"
		     },
		     "paused": {
		      "!type": "bool"
		     },
		     "pausedPosition": {
		      "!type": "number"
		     },
		     "pausedTime": {
		      "!type": "number"
		     },
		     "isPlaying": {
		      "!type": "bool"
		     },
		     "currentMarker": {
		      "!type": "string"
		     },
		     "fadeTween": {
		      "!type": "+Phaser.Tween"
		     },
		     "pendingPlayback": {
		      "!type": "bool"
		     },
		     "override": {
		      "!type": "bool"
		     },
		     "allowMultiple": {
		      "!type": "bool"
		     },
		     "usingWebAudio": {
		      "!type": "bool"
		     },
		     "usingAudioTag": {
		      "!type": "bool"
		     },
		     "externalNode": {},
		     "masterGainNode": {},
		     "gainNode": {},
		     "onDecoded": {
		      "!type": "+Phaser.Signal"
		     },
		     "onPlay": {
		      "!type": "+Phaser.Signal"
		     },
		     "onPause": {
		      "!type": "+Phaser.Signal"
		     },
		     "onResume": {
		      "!type": "+Phaser.Signal"
		     },
		     "onLoop": {
		      "!type": "+Phaser.Signal"
		     },
		     "onStop": {
		      "!type": "+Phaser.Signal"
		     },
		     "onMute": {
		      "!type": "+Phaser.Signal"
		     },
		     "onMarkerComplete": {
		      "!type": "+Phaser.Signal"
		     },
		     "onFadeComplete": {
		      "!type": "+Phaser.Signal"
		     },
		     "soundHasUnlocked": {
		      "!type": "fn(key: string)"
		     },
		     "addMarker": {
		      "!type": "fn(name: string, start: number, duration: number, volume: number, loop: bool)"
		     },
		     "removeMarker": {
		      "!type": "fn(name: string)"
		     },
		     "onEndedHandler": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "loopFull": {
		      "!type": "fn(volume: number) -> +Phaser.Sound"
		     },
		     "play": {
		      "!type": "fn(marker: string, position: number, volume: number, loop: bool, forceRestart: bool) -> +Phaser.Sound"
		     },
		     "restart": {
		      "!type": "fn(marker: string, position: number, volume: number, loop: bool)"
		     },
		     "pause": {
		      "!type": "fn()"
		     },
		     "resume": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "fadeIn": {
		      "!type": "fn(duration: number, loop: bool, marker: string)"
		     },
		     "fadeOut": {
		      "!type": "fn(duration: number)"
		     },
		     "fadeTo": {
		      "!type": "fn(duration: number, volume: number)"
		     },
		     "destroy": {
		      "!type": "fn(remove: bool)"
		     },
		     "isDecoding": {
		      "!type": "bool"
		     },
		     "isDecoded": {
		      "!type": "bool"
		     },
		     "mute": {
		      "!type": "bool"
		     }
		    }
		   },
		   "SoundManager": {
		    "!type": "fn()",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "onSoundDecode": {
		      "!type": "+Phaser.Signal"
		     },
		     "onVolumeChange": {
		      "!type": "+Phaser.Signal"
		     },
		     "onMute": {
		      "!type": "+Phaser.Signal"
		     },
		     "onUnMute": {
		      "!type": "+Phaser.Signal"
		     },
		     "context": {
		      "!type": "+AudioContext"
		     },
		     "usingWebAudio": {
		      "!type": "bool"
		     },
		     "usingAudioTag": {
		      "!type": "bool"
		     },
		     "noAudio": {
		      "!type": "bool"
		     },
		     "connectToMaster": {
		      "!type": "bool"
		     },
		     "touchLocked": {
		      "!type": "bool"
		     },
		     "channels": {
		      "!type": "number"
		     },
		     "boot": {
		      "!type": "fn()"
		     },
		     "setTouchLock": {
		      "!type": "fn()"
		     },
		     "unlock": {
		      "!type": "fn() -> bool"
		     },
		     "stopAll": {
		      "!type": "fn()"
		     },
		     "pauseAll": {
		      "!type": "fn()"
		     },
		     "resumeAll": {
		      "!type": "fn()"
		     },
		     "decode": {
		      "!type": "fn(key: string, sound: +Phaser.Sound)"
		     },
		     "setDecodedCallback": {
		      "!type": "fn(files: string|+array, callback: fn(), callbackContext: ?)"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "add": {
		      "!type": "fn(key: string, volume: number, loop: bool, connect: bool) -> +Phaser.Sound"
		     },
		     "addSprite": {
		      "!type": "fn(key: string) -> +Phaser.AudioSprite"
		     },
		     "remove": {
		      "!type": "fn(sound: +Phaser.Sound) -> bool"
		     },
		     "removeByKey": {
		      "!type": "fn(key: string) -> number"
		     },
		     "play": {
		      "!type": "fn(key: string, volume: number, loop: bool) -> +Phaser.Sound"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "mute": {
		      "!type": "bool"
		     },
		     "volume": {
		      "!type": "number"
		     }
		    }
		   },
		   "TweenManager": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "frameBased": {
		      "!type": "bool"
		     },
		     "getAll": {
		      "!type": "fn() -> [?]"
		     },
		     "removeAll": {
		      "!type": "fn()"
		     },
		     "removeFrom": {
		      "!type": "fn(obj: ?|[?]|+Phaser.Group, children: bool)"
		     },
		     "add": {
		      "!type": "fn(tween: +Phaser.Tween) -> +Phaser.Tween"
		     },
		     "create": {
		      "!type": "fn(object: ?) -> +Phaser.Tween"
		     },
		     "remove": {
		      "!type": "fn(tween: +Phaser.Tween)"
		     },
		     "update": {
		      "!type": "fn() -> bool"
		     },
		     "isTweening": {
		      "!type": "fn(object: ?) -> bool"
		     },
		     "pauseAll": {
		      "!type": "fn()"
		     },
		     "resumeAll": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Canvas": {
		    "!type": "fn()",
		    "create": {
		     "!type": "fn(parent: ?, width: number, height: number, id: string, skipPool: bool) -> +HTMLCanvasElement"
		    },
		    "setBackgroundColor": {
		     "!type": "fn(canvas: +HTMLCanvasElement, color: string) -> +HTMLCanvasElement"
		    },
		    "setTouchAction": {
		     "!type": "fn(canvas: +HTMLCanvasElement, value: string) -> +HTMLCanvasElement"
		    },
		    "setUserSelect": {
		     "!type": "fn(canvas: +HTMLCanvasElement, value: string) -> +HTMLCanvasElement"
		    },
		    "addToDOM": {
		     "!type": "fn(canvas: +HTMLCanvasElement, parent: string|+HTMLElement, overflowHidden: bool) -> +HTMLCanvasElement"
		    },
		    "removeFromDOM": {
		     "!type": "fn(canvas: +HTMLCanvasElement)"
		    },
		    "setTransform": {
		     "!type": "fn(context: +CanvasRenderingContext2D, translateX: number, translateY: number, scaleX: number, scaleY: number, skewX: number, skewY: number) -> +CanvasRenderingContext2D"
		    },
		    "setSmoothingEnabled": {
		     "!type": "fn(context: +CanvasRenderingContext2D, value: bool) -> +CanvasRenderingContext2D"
		    },
		    "getSmoothingEnabled": {
		     "!type": "fn(context: +CanvasRenderingContext2D) -> bool"
		    },
		    "setImageRenderingCrisp": {
		     "!type": "fn(canvas: +HTMLCanvasElement) -> +HTMLCanvasElement"
		    },
		    "setImageRenderingBicubic": {
		     "!type": "fn(canvas: +HTMLCanvasElement) -> +HTMLCanvasElement"
		    }
		   },
		   "Device": {
		    "!type": "fn()",
		    "prototype": {
		     "deviceReadyAt": {
		      "!type": "number"
		     },
		     "initialized": {
		      "!type": "bool"
		     },
		     "desktop": {
		      "!type": "bool"
		     },
		     "iOS": {
		      "!type": "bool"
		     },
		     "cocoonJS": {
		      "!type": "bool"
		     },
		     "cocoonJSApp": {
		      "!type": "bool"
		     },
		     "cordova": {
		      "!type": "bool"
		     },
		     "node": {
		      "!type": "bool"
		     },
		     "nodeWebkit": {
		      "!type": "bool"
		     },
		     "electron": {
		      "!type": "bool"
		     },
		     "ejecta": {
		      "!type": "bool"
		     },
		     "crosswalk": {
		      "!type": "bool"
		     },
		     "android": {
		      "!type": "bool"
		     },
		     "chromeOS": {
		      "!type": "bool"
		     },
		     "linux": {
		      "!type": "bool"
		     },
		     "macOS": {
		      "!type": "bool"
		     },
		     "windows": {
		      "!type": "bool"
		     },
		     "windowsPhone": {
		      "!type": "bool"
		     },
		     "canvas": {
		      "!type": "bool"
		     },
		     "canvasBitBltShift": {
		      "!type": "bool"
		     },
		     "webGL": {
		      "!type": "bool"
		     },
		     "file": {
		      "!type": "bool"
		     },
		     "fileSystem": {
		      "!type": "bool"
		     },
		     "localStorage": {
		      "!type": "bool"
		     },
		     "worker": {
		      "!type": "bool"
		     },
		     "css3D": {
		      "!type": "bool"
		     },
		     "pointerLock": {
		      "!type": "bool"
		     },
		     "typedArray": {
		      "!type": "bool"
		     },
		     "vibration": {
		      "!type": "bool"
		     },
		     "getUserMedia": {
		      "!type": "bool"
		     },
		     "quirksMode": {
		      "!type": "bool"
		     },
		     "touch": {
		      "!type": "bool"
		     },
		     "mspointer": {
		      "!type": "bool"
		     },
		     "wheelEvent": {
		      "!type": "string"
		     },
		     "arora": {
		      "!type": "bool"
		     },
		     "chrome": {
		      "!type": "bool"
		     },
		     "chromeVersion": {
		      "!type": "number"
		     },
		     "epiphany": {
		      "!type": "bool"
		     },
		     "firefox": {
		      "!type": "bool"
		     },
		     "firefoxVersion": {
		      "!type": "number"
		     },
		     "ie": {
		      "!type": "bool"
		     },
		     "ieVersion": {
		      "!type": "number"
		     },
		     "trident": {
		      "!type": "bool"
		     },
		     "tridentVersion": {
		      "!type": "number"
		     },
		     "mobileSafari": {
		      "!type": "bool"
		     },
		     "midori": {
		      "!type": "bool"
		     },
		     "opera": {
		      "!type": "bool"
		     },
		     "safari": {
		      "!type": "bool"
		     },
		     "webApp": {
		      "!type": "bool"
		     },
		     "silk": {
		      "!type": "bool"
		     },
		     "audioData": {
		      "!type": "bool"
		     },
		     "webAudio": {
		      "!type": "bool"
		     },
		     "ogg": {
		      "!type": "bool"
		     },
		     "opus": {
		      "!type": "bool"
		     },
		     "mp3": {
		      "!type": "bool"
		     },
		     "wav": {
		      "!type": "bool"
		     },
		     "m4a": {
		      "!type": "bool"
		     },
		     "webm": {
		      "!type": "bool"
		     },
		     "oggVideo": {
		      "!type": "bool"
		     },
		     "h264Video": {
		      "!type": "bool"
		     },
		     "mp4Video": {
		      "!type": "bool"
		     },
		     "webmVideo": {
		      "!type": "bool"
		     },
		     "vp9Video": {
		      "!type": "bool"
		     },
		     "hlsVideo": {
		      "!type": "bool"
		     },
		     "iPhone": {
		      "!type": "bool"
		     },
		     "iPhone4": {
		      "!type": "bool"
		     },
		     "iPad": {
		      "!type": "bool"
		     },
		     "pixelRatio": {
		      "!type": "number"
		     },
		     "littleEndian": {
		      "!type": "bool"
		     },
		     "LITTLE_ENDIAN": {
		      "!type": "bool"
		     },
		     "support32bit": {
		      "!type": "bool"
		     },
		     "fullscreen": {
		      "!type": "bool"
		     },
		     "requestFullscreen": {
		      "!type": "string"
		     },
		     "cancelFullscreen": {
		      "!type": "string"
		     },
		     "fullscreenKeyboard": {
		      "!type": "bool"
		     },
		     "canPlayAudio": {
		      "!type": "fn(type: string) -> bool"
		     },
		     "canPlayVideo": {
		      "!type": "fn(type: string) -> bool"
		     },
		     "isConsoleOpen": {
		      "!type": "fn()"
		     },
		     "isAndroidStockBrowser": {
		      "!type": "fn()"
		     }
		    },
		    "onInitialized": {},
		    "whenReady": {
		     "!type": "fn(handler: fn(), context: ?, nonPrimer: bool)"
		    },
		    "_initialize": {
		     "_checkOS": {
		      "!type": "fn()"
		     },
		     "_checkFeatures": {
		      "!type": "fn()"
		     },
		     "_checkInput": {
		      "!type": "fn()"
		     },
		     "_checkFullScreenSupport": {
		      "!type": "fn()"
		     },
		     "_checkBrowser": {
		      "!type": "fn()"
		     },
		     "_checkVideo": {
		      "!type": "fn()"
		     },
		     "_checkAudio": {
		      "!type": "fn()"
		     },
		     "_checkDevice": {
		      "!type": "fn()"
		     },
		     "_checkIsLittleEndian": {
		      "!type": "fn()"
		     },
		     "_checkIsUint8ClampedImageData": {
		      "!type": "fn()"
		     },
		     "_checkCSS3D": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "DOM": {
		    "!type": "fn()",
		    "getOffset": {
		     "!type": "fn(element: +DOMElement, point: +Phaser.Point) -> +Phaser.Point"
		    },
		    "getBounds": {
		     "!type": "fn(element: +DOMElement|?, cushion: number) -> ?|bool"
		    },
		    "getAspectRatio": {
		     "!type": "fn(object: +DOMElement|?) -> number"
		    },
		    "inLayoutViewport": {
		     "!type": "fn(element: +DOMElement|?, cushion: number) -> bool"
		    },
		    "getScreenOrientation": {
		     "!type": "fn(primaryFallback: string)"
		    },
		    "visualBounds": {
		     "!type": "number"
		    },
		    "layoutBounds": {
		     "!type": "number"
		    },
		    "documentBounds": {
		     "!type": "number"
		    },
		    "scrollX": {
		     "!type": "number"
		    },
		    "scrollY": {
		     "!type": "number"
		    }
		   },
		   "RequestAnimationFrame": {
		    "!type": "fn(game: +Phaser.Game, forceSetTimeOut: bool)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "isRunning": {
		      "!type": "bool"
		     },
		     "forceSetTimeOut": {
		      "!type": "bool"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "updateRAF": {
		      "!type": "fn()"
		     },
		     "updateSetTimeout": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "isSetTimeOut": {
		      "!type": "fn() -> bool"
		     },
		     "isRAF": {
		      "!type": "fn() -> bool"
		     }
		    }
		   },
		   "ImageCollection": {
		    "!type": "fn(name: string, firstgid: number, width: number, height: number, margin: number, spacing: number, properties: ?)",
		    "prototype": {
		     "name": {
		      "!type": "string"
		     },
		     "firstgid": {
		      "!type": "number"
		     },
		     "imageWidth": {
		      "!type": "number"
		     },
		     "imageHeight": {
		      "!type": "number"
		     },
		     "imageMargin": {
		      "!type": "number"
		     },
		     "imageSpacing": {
		      "!type": "number"
		     },
		     "properties": {},
		     "images": {
		      "!type": "+array"
		     },
		     "total": {
		      "!type": "number"
		     },
		     "containsImageIndex": {
		      "!type": "fn(imageIndex: number) -> bool"
		     },
		     "addImage": {
		      "!type": "fn(gid: number, image: string)"
		     }
		    }
		   },
		   "Tile": {
		    "!type": "fn(layer: ?, index: number, x: number, y: number, width: number, height: number)",
		    "prototype": {
		     "layer": {},
		     "index": {
		      "!type": "number"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "rotation": {
		      "!type": "number"
		     },
		     "flipped": {
		      "!type": "bool"
		     },
		     "worldX": {
		      "!type": "number"
		     },
		     "worldY": {
		      "!type": "number"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     },
		     "centerX": {
		      "!type": "number"
		     },
		     "centerY": {
		      "!type": "number"
		     },
		     "alpha": {
		      "!type": "number"
		     },
		     "properties": {},
		     "scanned": {
		      "!type": "bool"
		     },
		     "faceTop": {
		      "!type": "bool"
		     },
		     "faceBottom": {
		      "!type": "bool"
		     },
		     "faceLeft": {
		      "!type": "bool"
		     },
		     "faceRight": {
		      "!type": "bool"
		     },
		     "collideLeft": {
		      "!type": "bool"
		     },
		     "collideRight": {
		      "!type": "bool"
		     },
		     "collideUp": {
		      "!type": "bool"
		     },
		     "collideDown": {
		      "!type": "bool"
		     },
		     "collisionCallback": {
		      "!type": "fn()"
		     },
		     "collisionCallbackContext": {},
		     "containsPoint": {
		      "!type": "fn(x: number, y: number) -> bool"
		     },
		     "intersects": {
		      "!type": "fn(x: number, y: number, right: number, bottom: number)"
		     },
		     "setCollisionCallback": {
		      "!type": "fn(callback: fn(), context: ?)"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "setCollision": {
		      "!type": "fn(left: bool, right: bool, up: bool, down: bool)"
		     },
		     "resetCollision": {
		      "!type": "fn()"
		     },
		     "isInteresting": {
		      "!type": "fn(collides: bool, faces: bool) -> bool"
		     },
		     "copy": {
		      "!type": "fn(tile: +Phaser.Tile)"
		     },
		     "collides": {
		      "!type": "bool"
		     },
		     "canCollide": {
		      "!type": "bool"
		     },
		     "left": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     }
		    }
		   },
		   "Tilemap": {
		    "!type": "fn(game: +Phaser.Game, key: string, tileWidth: number, tileHeight: number, width: number, height: number)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "key": {
		      "!type": "string"
		     },
		     "width": {
		      "!type": "number"
		     },
		     "height": {
		      "!type": "number"
		     },
		     "tileWidth": {
		      "!type": "number"
		     },
		     "tileHeight": {
		      "!type": "number"
		     },
		     "orientation": {
		      "!type": "string"
		     },
		     "format": {
		      "!type": "number"
		     },
		     "version": {
		      "!type": "number"
		     },
		     "properties": {},
		     "widthInPixels": {
		      "!type": "number"
		     },
		     "heightInPixels": {
		      "!type": "number"
		     },
		     "layers": {
		      "!type": "+array"
		     },
		     "tilesets": {
		      "!type": "+array"
		     },
		     "imagecollections": {
		      "!type": "+array"
		     },
		     "tiles": {
		      "!type": "+array"
		     },
		     "objects": {
		      "!type": "+array"
		     },
		     "collideIndexes": {
		      "!type": "+array"
		     },
		     "collision": {
		      "!type": "+array"
		     },
		     "images": {
		      "!type": "+array"
		     },
		     "currentLayer": {
		      "!type": "number"
		     },
		     "debugMap": {
		      "!type": "+array"
		     },
		     "create": {
		      "!type": "fn(name: string, width: number, height: number, tileWidth: number, tileHeight: number, group: +Phaser.Group) -> +Phaser.TilemapLayer"
		     },
		     "setTileSize": {
		      "!type": "fn(tileWidth: number, tileHeight: number)"
		     },
		     "addTilesetImage": {
		      "!type": "fn(tileset: string, key: string|+Phaser.BitmapData, tileWidth: number, tileHeight: number, tileMargin: number, tileSpacing: number, gid: number) -> +Phaser.Tileset"
		     },
		     "createFromObjects": {
		      "!type": "fn(name: string, gid: number, key: string, frame: number|string, exists: bool, autoCull: bool, group: +Phaser.Group, CustomClass: ?, adjustY: bool)"
		     },
		     "createFromTiles": {
		      "!type": "fn(tiles: number|[?], replacements: number|[?], key: string, layer: number|string|+Phaser.TilemapLayer, group: +Phaser.Group, properties: ?) -> number"
		     },
		     "createLayer": {
		      "!type": "fn(layer: number|string, width: number, height: number, group: +Phaser.Group) -> +Phaser.TilemapLayer"
		     },
		     "createBlankLayer": {
		      "!type": "fn(name: string, width: number, height: number, tileWidth: number, tileHeight: number, group: +Phaser.Group) -> +Phaser.TilemapLayer"
		     },
		     "getIndex": {
		      "!type": "fn(location: +array, name: string) -> number"
		     },
		     "getLayerIndex": {
		      "!type": "fn(name: string) -> number"
		     },
		     "getTilesetIndex": {
		      "!type": "fn(name: string) -> number"
		     },
		     "getImageIndex": {
		      "!type": "fn(name: string) -> number"
		     },
		     "getObjectIndex": {
		      "!type": "fn(name: string) -> number"
		     },
		     "setTileIndexCallback": {
		      "!type": "fn(indexes: number|+array, callback: fn(), callbackContext: ?, layer: number|string|+Phaser.TilemapLayer)"
		     },
		     "setTileLocationCallback": {
		      "!type": "fn(x: number, y: number, width: number, height: number, callback: fn(), callbackContext: ?, layer: number|string|+Phaser.TilemapLayer)"
		     },
		     "setCollision": {
		      "!type": "fn(indexes: number|+array, collides: bool, layer: number|string|+Phaser.TilemapLayer, recalculate: bool)"
		     },
		     "setCollisionBetween": {
		      "!type": "fn(start: number, stop: number, collides: bool, layer: number|string|+Phaser.TilemapLayer, recalculate: bool)"
		     },
		     "setCollisionByExclusion": {
		      "!type": "fn(indexes: +array, collides: bool, layer: number|string|+Phaser.TilemapLayer, recalculate: bool)"
		     },
		     "setCollisionByIndex": {
		      "!type": "fn(index: number, collides: bool, layer: number, recalculate: bool)"
		     },
		     "getLayer": {
		      "!type": "fn(layer: number|string|+Phaser.TilemapLayer) -> number"
		     },
		     "setPreventRecalculate": {
		      "!type": "fn(value: bool)"
		     },
		     "calculateFaces": {
		      "!type": "fn(layer: number)"
		     },
		     "getTileAbove": {
		      "!type": "fn(layer: number, x: number, y: number)"
		     },
		     "getTileBelow": {
		      "!type": "fn(layer: number, x: number, y: number)"
		     },
		     "getTileLeft": {
		      "!type": "fn(layer: number, x: number, y: number)"
		     },
		     "getTileRight": {
		      "!type": "fn(layer: number, x: number, y: number)"
		     },
		     "setLayer": {
		      "!type": "fn(layer: number|string|+Phaser.TilemapLayer)"
		     },
		     "hasTile": {
		      "!type": "fn(x: number, y: number, layer: number|string|+Phaser.TilemapLayer) -> bool"
		     },
		     "removeTile": {
		      "!type": "fn(x: number, y: number, layer: number|string|+Phaser.TilemapLayer) -> +Phaser.Tile"
		     },
		     "removeTileWorldXY": {
		      "!type": "fn(x: number, y: number, tileWidth: number, tileHeight: number, layer: number|string|+Phaser.TilemapLayer) -> +Phaser.Tile"
		     },
		     "putTile": {
		      "!type": "fn(tile: +Phaser.Tile|number|+null, x: number, y: number, layer: number|string|+Phaser.TilemapLayer) -> +Phaser.Tile"
		     },
		     "putTileWorldXY": {
		      "!type": "fn(tile: +Phaser.Tile|number, x: number, y: number, tileWidth: number, tileHeight: number, layer: number|string|+Phaser.TilemapLayer) -> +Phaser.Tile"
		     },
		     "searchTileIndex": {
		      "!type": "fn(index: number, skip: number, reverse: number, layer: number|string|+Phaser.TilemapLayer) -> +Phaser.Tile"
		     },
		     "getTile": {
		      "!type": "fn(x: number, y: number, layer: number|string|+Phaser.TilemapLayer, nonNull: bool) -> +Phaser.Tile"
		     },
		     "getTileWorldXY": {
		      "!type": "fn(x: number, y: number, tileWidth: number, tileHeight: number, layer: number|string|+Phaser.TilemapLayer, nonNull: bool) -> +Phaser.Tile"
		     },
		     "copy": {
		      "!type": "fn(x: number, y: number, width: number, height: number, layer: number|string|+Phaser.TilemapLayer) -> +array"
		     },
		     "paste": {
		      "!type": "fn(x: number, y: number, tileblock: +array, layer: number|string|+Phaser.TilemapLayer)"
		     },
		     "swap": {
		      "!type": "fn(tileA: number, tileB: number, x: number, y: number, width: number, height: number, layer: number|string|+Phaser.TilemapLayer)"
		     },
		     "forEach": {
		      "!type": "fn(callback: number, context: number, x: number, y: number, width: number, height: number, layer: number|string|+Phaser.TilemapLayer)"
		     },
		     "replace": {
		      "!type": "fn(source: number, dest: number, x: number, y: number, width: number, height: number, layer: number|string|+Phaser.TilemapLayer)"
		     },
		     "random": {
		      "!type": "fn(x: number, y: number, width: number, height: number, layer: number|string|+Phaser.TilemapLayer)"
		     },
		     "shuffle": {
		      "!type": "fn(x: number, y: number, width: number, height: number, layer: number|string|+Phaser.TilemapLayer)"
		     },
		     "fill": {
		      "!type": "fn(index: number, x: number, y: number, width: number, height: number, layer: number|string|+Phaser.TilemapLayer)"
		     },
		     "removeAllLayers": {
		      "!type": "fn()"
		     },
		     "dump": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "layer": {
		      "!type": "number|string|+Phaser.TilemapLayer"
		     }
		    },
		    "CSV": {
		     "!type": "number"
		    },
		    "TILED_JSON": {
		     "!type": "number"
		    },
		    "NORTH": {
		     "!type": "number"
		    },
		    "EAST": {
		     "!type": "number"
		    },
		    "SOUTH": {
		     "!type": "number"
		    },
		    "WEST": {
		     "!type": "number"
		    }
		   },
		   "TilemapLayer": {
		    "!type": "fn(game: +Phaser.Game, tilemap: +Phaser.Tilemap, index: number, width: number, height: number)",
		    "prototype": {
		     "map": {
		      "!type": "+Phaser.Tilemap"
		     },
		     "index": {
		      "!type": "number"
		     },
		     "layer": {},
		     "canvas": {
		      "!type": "+HTMLCanvasElement"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "physicsType": {
		      "!type": "number"
		     },
		     "renderSettings": {
		      "!type": "bool"
		     },
		     "debug": {
		      "!type": "bool"
		     },
		     "exists": {
		      "!type": "bool"
		     },
		     "debugSettings": {
		      "!type": "string"
		     },
		     "scrollFactorX": {
		      "!type": "number"
		     },
		     "scrollFactorY": {
		      "!type": "number"
		     },
		     "dirty": {
		      "!type": "bool"
		     },
		     "rayStepRate": {
		      "!type": "number"
		     },
		     "ensureSharedCopyCanvas": {
		      "!type": "fn()"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "resize": {
		      "!type": "fn(width: number, height: number)"
		     },
		     "resizeWorld": {
		      "!type": "fn()"
		     },
		     "getTileX": {
		      "!type": "fn(x: number) -> number"
		     },
		     "getTileY": {
		      "!type": "fn(y: number) -> number"
		     },
		     "getTileXY": {
		      "!type": "fn(x: number, y: number, point: +Phaser.Point|?) -> +Phaser.Point|?"
		     },
		     "getRayCastTiles": {
		      "!type": "fn(line: +Phaser.Line, stepRate: number, collides: bool, interestingFace: bool) -> [?]"
		     },
		     "getTiles": {
		      "!type": "fn(x: number, y: number, width: number, height: number, collides: bool, interestingFace: bool) -> +array.<Phaser.Tile>"
		     },
		     "resetTilesetCache": {
		      "!type": "fn()"
		     },
		     "setScale": {
		      "!type": "fn(xScale: number, yScale: number)"
		     },
		     "render": {
		      "!type": "fn()"
		     },
		     "anchor": {},
		     "texture": {},
		     "tint": {},
		     "tintedTexture": {},
		     "blendMode": {},
		     "shader": {},
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "components": {},
		     "z": {
		      "!type": "number"
		     },
		     "events": {
		      "!type": "+Phaser.Events"
		     },
		     "animations": {
		      "!type": "+Phaser.AnimationManager"
		     },
		     "key": {
		      "!type": "string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture"
		     },
		     "world": {
		      "!type": "+Phaser.Point"
		     },
		     "previousPosition": {
		      "!type": "+Phaser.Point"
		     },
		     "previousRotation": {
		      "!type": "number"
		     },
		     "renderOrderID": {
		      "!type": "number"
		     },
		     "fresh": {
		      "!type": "bool"
		     },
		     "pendingDestroy": {
		      "!type": "bool"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "play": {
		      "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> +Phaser.Animation"
		     },
		     "autoCull": {
		      "!type": "bool"
		     },
		     "inCamera": {
		      "!type": "bool"
		     },
		     "offsetX": {
		      "!type": "number"
		     },
		     "offsetY": {
		      "!type": "number"
		     },
		     "left": {
		      "!type": "number"
		     },
		     "right": {
		      "!type": "number"
		     },
		     "top": {
		      "!type": "number"
		     },
		     "bottom": {
		      "!type": "number"
		     },
		     "bringToTop": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "sendToBack": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "moveUp": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "moveDown": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "cropRect": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "crop": {
		      "!type": "fn(rect: +Phaser.Rectangle, copy: bool)"
		     },
		     "updateCrop": {
		      "!type": "fn()"
		     },
		     "deltaX": {
		      "!type": "number"
		     },
		     "deltaY": {
		      "!type": "number"
		     },
		     "deltaZ": {
		      "!type": "number"
		     },
		     "destroyPhase": {
		      "!type": "bool"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "cameraOffset": {
		      "!type": "+Phaser.Point"
		     },
		     "health": {
		      "!type": "number"
		     },
		     "maxHealth": {
		      "!type": "number"
		     },
		     "damage": {},
		     "heal": {},
		     "input": {
		      "!type": "+Phaser.InputHandler|+null"
		     },
		     "inputEnabled": {
		      "!type": "bool"
		     },
		     "checkWorldBounds": {
		      "!type": "bool"
		     },
		     "outOfBoundsKill": {
		      "!type": "bool"
		     },
		     "inWorld": {
		      "!type": "bool"
		     },
		     "alive": {
		      "!type": "bool"
		     },
		     "lifespan": {
		      "!type": "number"
		     },
		     "revive": {
		      "!type": "fn(health: number) -> +PIXI.DisplayObject"
		     },
		     "kill": {
		      "!type": "fn() -> +PIXI.DisplayObject"
		     },
		     "loadTexture": {
		      "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)"
		     },
		     "setFrame": {
		      "!type": "fn(frame: +Phaser.Frame)"
		     },
		     "resizeFrame": {
		      "!type": "fn(parent: ?, width: number, height: number)"
		     },
		     "resetFrame": {
		      "!type": "fn()"
		     },
		     "frame": {
		      "!type": "number"
		     },
		     "frameName": {
		      "!type": "string"
		     },
		     "overlap": {
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> bool"
		     },
		     "body": {
		      "!type": "+Phaser.Physics.Arcade.Body|+Phaser.Physics.P2.Body|+Phaser.Physics.Ninja.Body|+null"
		     },
		     "x": {
		      "!type": "number"
		     },
		     "y": {
		      "!type": "number"
		     },
		     "reset": {
		      "!type": "fn(x: number, y: number, health: number) -> +PIXI.DisplayObject"
		     },
		     "transformCallback": {
		      "!type": "fn()"
		     },
		     "transformCallbackContext": {},
		     "scaleMin": {
		      "!type": "+Phaser.Point"
		     },
		     "scaleMax": {
		      "!type": "+Phaser.Point"
		     },
		     "setScaleMinMax": {
		      "!type": "fn(minX: number|+null, minY: number|+null, maxX: number|+null, maxY: number|+null)"
		     },
		     "smoothed": {
		      "!type": "bool"
		     }
		    }
		   },
		   "TilemapParser": {
		    "!type": "fn()",
		    "INSERT_NULL": {
		     "!type": "bool"
		    },
		    "parse": {
		     "!type": "fn(game: +Phaser.Game, key: string, tileWidth: number, tileHeight: number, width: number, height: number) -> ?"
		    },
		    "parseCSV": {
		     "!type": "fn(data: string, tileWidth: number, tileHeight: number) -> ?"
		    },
		    "getEmptyData": {
		     "!type": "fn() -> ?"
		    },
		    "parseJSON": {
		     "!type": "fn(json: ?) -> ?"
		    }
		   },
		   "Tileset": {
		    "!type": "fn(name: string, firstgid: number, width: number, height: number, margin: number, spacing: number, properties: ?)",
		    "prototype": {
		     "name": {
		      "!type": "string"
		     },
		     "firstgid": {
		      "!type": "number"
		     },
		     "tileWidth": {
		      "!type": "number"
		     },
		     "tileHeight": {
		      "!type": "number"
		     },
		     "tileMargin": {
		      "!type": "number"
		     },
		     "tileSpacing": {
		      "!type": "number"
		     },
		     "properties": {},
		     "image": {},
		     "rows": {
		      "!type": "number"
		     },
		     "columns": {
		      "!type": "number"
		     },
		     "total": {
		      "!type": "number"
		     },
		     "draw": {
		      "!type": "fn(context: +CanvasRenderingContext2D, x: number, y: number, index: number)"
		     },
		     "containsTileIndex": {
		      "!type": "fn() -> bool"
		     },
		     "setImage": {
		      "!type": "fn(image: +Image)"
		     },
		     "setSpacing": {
		      "!type": "fn(margin: number, spacing: number)"
		     }
		    }
		   },
		   "Time": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "time": {
		      "!type": "number"
		     },
		     "prevTime": {
		      "!type": "number"
		     },
		     "now": {
		      "!type": "number"
		     },
		     "elapsed": {
		      "!type": "number"
		     },
		     "elapsedMS": {
		      "!type": "number"
		     },
		     "physicsElapsed": {
		      "!type": "number"
		     },
		     "physicsElapsedMS": {
		      "!type": "number"
		     },
		     "desiredFps": {
		      "!type": "number"
		     },
		     "suggestedFps": {
		      "!type": "number"
		     },
		     "slowMotion": {
		      "!type": "number"
		     },
		     "advancedTiming": {
		      "!type": "bool"
		     },
		     "frames": {
		      "!type": "number"
		     },
		     "fps": {
		      "!type": "number"
		     },
		     "fpsMin": {
		      "!type": "number"
		     },
		     "fpsMax": {
		      "!type": "number"
		     },
		     "msMin": {
		      "!type": "number"
		     },
		     "msMax": {
		      "!type": "number"
		     },
		     "pauseDuration": {
		      "!type": "number"
		     },
		     "timeToCall": {
		      "!type": "number"
		     },
		     "timeExpected": {
		      "!type": "number"
		     },
		     "events": {
		      "!type": "+Phaser.Timer"
		     },
		     "boot": {
		      "!type": "fn()"
		     },
		     "add": {
		      "!type": "fn(timer: +Phaser.Timer) -> +Phaser.Timer"
		     },
		     "create": {
		      "!type": "fn(autoDestroy: bool) -> +Phaser.Timer"
		     },
		     "removeAll": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn(time: number)"
		     },
		     "totalElapsedSeconds": {
		      "!type": "fn() -> number"
		     },
		     "elapsedSince": {
		      "!type": "fn(since: number) -> number"
		     },
		     "elapsedSecondsSince": {
		      "!type": "fn(since: number) -> number"
		     },
		     "reset": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Timer": {
		    "!type": "fn(game: +Phaser.Game, autoDestroy: bool)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "running": {
		      "!type": "bool"
		     },
		     "autoDestroy": {
		      "!type": "bool"
		     },
		     "expired": {
		      "!type": "bool"
		     },
		     "elapsed": {
		      "!type": "number"
		     },
		     "events": {
		      "!type": "[?]"
		     },
		     "onComplete": {
		      "!type": "+Phaser.Signal"
		     },
		     "nextTick": {
		      "!type": "number"
		     },
		     "timeCap": {
		      "!type": "number"
		     },
		     "paused": {
		      "!type": "bool"
		     },
		     "add": {
		      "!type": "fn(delay: number, callback: fn(), callbackContext: ?, arguments: ?) -> +Phaser.TimerEvent"
		     },
		     "repeat": {
		      "!type": "fn(delay: number, repeatCount: number, callback: fn(), callbackContext: ?, arguments: ?) -> +Phaser.TimerEvent"
		     },
		     "loop": {
		      "!type": "fn(delay: number, callback: fn(), callbackContext: ?, arguments: ?) -> +Phaser.TimerEvent"
		     },
		     "start": {
		      "!type": "fn(delay: number)"
		     },
		     "stop": {
		      "!type": "fn(clearEvents: bool)"
		     },
		     "remove": {
		      "!type": "fn(event: +Phaser.TimerEvent)"
		     },
		     "order": {
		      "!type": "fn()"
		     },
		     "clearPendingEvents": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn(time: number) -> bool"
		     },
		     "pause": {
		      "!type": "fn()"
		     },
		     "adjustEvents": {
		      "!type": "fn()"
		     },
		     "resume": {
		      "!type": "fn()"
		     },
		     "removeAll": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "next": {
		      "!type": "number"
		     },
		     "duration": {
		      "!type": "number"
		     },
		     "length": {
		      "!type": "number"
		     },
		     "ms": {
		      "!type": "number"
		     },
		     "seconds": {
		      "!type": "number"
		     }
		    },
		    "MINUTE": {
		     "!type": "number"
		    },
		    "SECOND": {
		     "!type": "number"
		    },
		    "HALF": {
		     "!type": "number"
		    },
		    "QUARTER": {
		     "!type": "number"
		    }
		   },
		   "TimerEvent": {
		    "!type": "fn(timer: +Phaser.Timer, delay: number, tick: number, repeatCount: number, loop: bool, callback: fn(), callbackContext: ?, arguments: [?])",
		    "prototype": {
		     "timer": {
		      "!type": "+Phaser.Timer"
		     },
		     "delay": {
		      "!type": "number"
		     },
		     "tick": {
		      "!type": "number"
		     },
		     "repeatCount": {
		      "!type": "number"
		     },
		     "loop": {
		      "!type": "bool"
		     },
		     "callback": {
		      "!type": "fn()"
		     },
		     "callbackContext": {},
		     "args": {
		      "!type": "[?]"
		     },
		     "pendingDelete": {
		      "!type": "bool"
		     }
		    }
		   },
		   "Easing": {
		    "!type": "fn()",
		    "Linear": {
		     "!type": "fn()",
		     "prototype": {
		      "None": {
		       "!type": "fn(k: number) -> number"
		      }
		     }
		    },
		    "Quadratic": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> number"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> number"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> number"
		      }
		     }
		    },
		    "Cubic": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> number"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> number"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> number"
		      }
		     }
		    },
		    "Quartic": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> number"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> number"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> number"
		      }
		     }
		    },
		    "Quintic": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> number"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> number"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> number"
		      }
		     }
		    },
		    "Sinusoidal": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> number"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> number"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> number"
		      }
		     }
		    },
		    "Exponential": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> number"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> number"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> number"
		      }
		     }
		    },
		    "Circular": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> number"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> number"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> number"
		      }
		     }
		    },
		    "Elastic": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> number"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> number"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> number"
		      }
		     }
		    },
		    "Back": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> number"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> number"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> number"
		      }
		     }
		    },
		    "Bounce": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> number"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> number"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> number"
		      }
		     }
		    }
		   },
		   "Tween": {
		    "!type": "fn(target: ?, game: +Phaser.Game, manager: +Phaser.TweenManager)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "target": {},
		     "manager": {
		      "!type": "+Phaser.TweenManager"
		     },
		     "timeline": {
		      "!type": "[?]"
		     },
		     "reverse": {
		      "!type": "bool"
		     },
		     "timeScale": {
		      "!type": "number"
		     },
		     "repeatCounter": {
		      "!type": "number"
		     },
		     "pendingDelete": {
		      "!type": "bool"
		     },
		     "onStart": {
		      "!type": "+Phaser.Signal"
		     },
		     "onLoop": {
		      "!type": "+Phaser.Signal"
		     },
		     "onRepeat": {
		      "!type": "+Phaser.Signal"
		     },
		     "onChildComplete": {
		      "!type": "+Phaser.Signal"
		     },
		     "onComplete": {
		      "!type": "+Phaser.Signal"
		     },
		     "isRunning": {
		      "!type": "bool"
		     },
		     "current": {
		      "!type": "number"
		     },
		     "properties": {},
		     "chainedTween": {
		      "!type": "+Phaser.Tween"
		     },
		     "isPaused": {
		      "!type": "bool"
		     },
		     "frameBased": {
		      "!type": "bool"
		     },
		     "to": {
		      "!type": "fn(properties: ?, duration: number, ease: fn()|string, autoStart: bool, delay: number, repeat: number, yoyo: bool) -> +Phaser.Tween"
		     },
		     "from": {
		      "!type": "fn(properties: ?, duration: number, ease: fn()|string, autoStart: bool, delay: number, repeat: number, yoyo: bool) -> +Phaser.Tween"
		     },
		     "start": {
		      "!type": "fn(index: number) -> +Phaser.Tween"
		     },
		     "stop": {
		      "!type": "fn(complete: bool) -> +Phaser.Tween"
		     },
		     "updateTweenData": {
		      "!type": "fn(property: string, value: number|fn(), index: number) -> +Phaser.Tween"
		     },
		     "delay": {
		      "!type": "fn(duration: number, index: number) -> +Phaser.Tween"
		     },
		     "repeat": {
		      "!type": "fn(total: number) -> +Phaser.Tween"
		     },
		     "repeatDelay": {
		      "!type": "fn(duration: number, index: number) -> +Phaser.Tween"
		     },
		     "yoyo": {
		      "!type": "fn(enable: bool, yoyoDelay: number, index: number) -> +Phaser.Tween"
		     },
		     "yoyoDelay": {
		      "!type": "fn(duration: number, index: number) -> +Phaser.Tween"
		     },
		     "easing": {
		      "!type": "fn(ease: fn()|string, index: number) -> +Phaser.Tween"
		     },
		     "interpolation": {
		      "!type": "fn(interpolation: fn(), context: ?, index: number) -> +Phaser.Tween"
		     },
		     "chain": {
		      "!type": "fn(tweens: +Phaser.Tween) -> +Phaser.Tween"
		     },
		     "loop": {
		      "!type": "fn(value: bool) -> +Phaser.Tween"
		     },
		     "onUpdateCallback": {
		      "!type": "fn(callback: fn(), callbackContext: ?) -> +Phaser.Tween"
		     },
		     "pause": {
		      "!type": "fn()"
		     },
		     "resume": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn(time: number) -> bool"
		     },
		     "generateData": {
		      "!type": "fn(frameRate: number, data: +array) -> +array"
		     },
		     "totalDuration": {
		      "!type": "+Phaser.TweenData"
		     }
		    }
		   },
		   "TweenData": {
		    "!type": "fn(parent: +Phaser.Tween)",
		    "prototype": {
		     "parent": {
		      "!type": "+Phaser.Tween"
		     },
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "duration": {
		      "!type": "number"
		     },
		     "percent": {
		      "!type": "number"
		     },
		     "value": {
		      "!type": "number"
		     },
		     "repeatCounter": {
		      "!type": "number"
		     },
		     "repeatDelay": {
		      "!type": "number"
		     },
		     "interpolate": {
		      "!type": "bool"
		     },
		     "yoyo": {
		      "!type": "bool"
		     },
		     "yoyoDelay": {
		      "!type": "number"
		     },
		     "inReverse": {
		      "!type": "bool"
		     },
		     "delay": {
		      "!type": "number"
		     },
		     "dt": {
		      "!type": "number"
		     },
		     "startTime": {
		      "!type": "number"
		     },
		     "easingFunction": {
		      "!type": "fn()"
		     },
		     "interpolationFunction": {
		      "!type": "fn()"
		     },
		     "interpolationContext": {},
		     "isRunning": {
		      "!type": "bool"
		     },
		     "isFrom": {
		      "!type": "bool"
		     },
		     "to": {
		      "!type": "fn(properties: ?, duration: number, ease: fn(), delay: number, repeat: number, yoyo: bool) -> +Phaser.TweenData"
		     },
		     "from": {
		      "!type": "fn(properties: ?, duration: number, ease: fn(), delay: number, repeat: number, yoyo: bool) -> +Phaser.TweenData"
		     },
		     "start": {
		      "!type": "fn() -> +Phaser.TweenData"
		     },
		     "update": {
		      "!type": "fn(time: number) -> number"
		     },
		     "generateData": {
		      "!type": "fn(frameRate: number) -> +array"
		     }
		    },
		    "PENDING": {
		     "!type": "number"
		    },
		    "RUNNING": {
		     "!type": "number"
		    },
		    "LOOPED": {
		     "!type": "number"
		    },
		    "COMPLETE": {
		     "!type": "number"
		    }
		   },
		   "ArraySet": {
		    "!type": "fn(list: [?])",
		    "prototype": {
		     "position": {
		      "!type": "number"
		     },
		     "list": {
		      "!type": "[?]"
		     },
		     "add": {
		      "!type": "fn(item: +any) -> +any"
		     },
		     "getIndex": {
		      "!type": "fn(item: +any) -> number"
		     },
		     "getByKey": {
		      "!type": "fn(property: string, value: +any) -> +any"
		     },
		     "exists": {
		      "!type": "fn(item: +any) -> bool"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "remove": {
		      "!type": "fn(item: +any) -> +any"
		     },
		     "setAll": {
		      "!type": "fn(key: +any, value: +any)"
		     },
		     "callAll": {
		      "!type": "fn(key: string, parameter: ?)"
		     },
		     "removeAll": {
		      "!type": "fn(destroy: bool)"
		     },
		     "total": {
		      "!type": "number"
		     },
		     "first": {
		      "!type": "+any"
		     },
		     "next": {
		      "!type": "+any"
		     }
		    }
		   },
		   "ArrayUtils": {
		    "!type": "fn()",
		    "getRandomItem": {
		     "!type": "fn(objects: [?], startIndex: number, length: number) -> ?"
		    },
		    "removeRandomItem": {
		     "!type": "fn(objects: [?], startIndex: number, length: number) -> ?"
		    },
		    "shuffle": {
		     "!type": "fn(array: [?]) -> [?]"
		    },
		    "transposeMatrix": {
		     "!type": "fn(array: [?]) -> [?]"
		    },
		    "rotateMatrix": {
		     "!type": "fn(matrix: [?], direction: number|string) -> [?]"
		    },
		    "findClosest": {
		     "!type": "fn(value: number, arr: [?]) -> number"
		    },
		    "rotate": {
		     "!type": "fn(array: [?]) -> +any"
		    },
		    "prototype": {
		     "numberArray": {
		      "!type": "fn(start: number, end: number) -> [?]"
		     },
		     "numberArrayStep": {
		      "!type": "fn(start: number, end: number, step: number) -> [?]"
		     }
		    }
		   },
		   "Color": {
		    "!type": "fn()",
		    "packPixel": {
		     "!type": "fn(r: number, g: number, b: number, a: number) -> number"
		    },
		    "unpackPixel": {
		     "!type": "fn(rgba: number, out: ?, hsl: bool, hsv: bool) -> ?"
		    },
		    "fromRGBA": {
		     "!type": "fn(rgba: number, out: ?) -> ?"
		    },
		    "toRGBA": {
		     "!type": "fn(r: number, g: number, b: number, a: number) -> number"
		    },
		    "RGBtoHSL": {
		     "!type": "fn(r: number, g: number, b: number, out: ?) -> ?"
		    },
		    "HSLtoRGB": {
		     "!type": "fn(h: number, s: number, l: number, out: ?) -> ?"
		    },
		    "RGBtoHSV": {
		     "!type": "fn(r: number, g: number, b: number, out: ?) -> ?"
		    },
		    "HSVtoRGB": {
		     "!type": "fn(h: number, s: number, v: number, out: ?) -> ?"
		    },
		    "hueToColor": {
		     "!type": "fn(p: number, q: number, t: number) -> number"
		    },
		    "createColor": {
		     "!type": "fn(r: number, g: number, b: number, a: number, h: number, s: number, l: number, v: number) -> ?"
		    },
		    "updateColor": {
		     "!type": "fn(out: ?) -> number"
		    },
		    "getColor32": {
		     "!type": "fn(a: number, r: number, g: number, b: number) -> number"
		    },
		    "getColor": {
		     "!type": "fn(r: number, g: number, b: number) -> number"
		    },
		    "RGBtoString": {
		     "!type": "fn(r: number, g: number, b: number, a: number, prefix: string) -> string"
		    },
		    "hexToRGB": {
		     "!type": "fn(hex: string) -> number"
		    },
		    "hexToColor": {
		     "!type": "fn(hex: string, out: ?) -> ?"
		    },
		    "webToColor": {
		     "!type": "fn(web: string, out: ?) -> ?"
		    },
		    "valueToColor": {
		     "!type": "fn(value: string|number, out: ?) -> ?"
		    },
		    "componentToHex": {
		     "!type": "fn(color: number) -> string"
		    },
		    "HSVColorWheel": {
		     "!type": "fn(s: number, v: number) -> +array"
		    },
		    "HSLColorWheel": {
		     "!type": "fn(s: number, l: number) -> +array"
		    },
		    "interpolateColor": {
		     "!type": "fn(color1: number, color2: number, steps: number, currentStep: number, alpha: number) -> number"
		    },
		    "interpolateColorWithRGB": {
		     "!type": "fn(color: number, r: number, g: number, b: number, steps: number, currentStep: number) -> number"
		    },
		    "interpolateRGB": {
		     "!type": "fn(r1: number, g1: number, b1: number, r2: number, g2: number, b2: number, steps: number, currentStep: number) -> number"
		    },
		    "getRandomColor": {
		     "!type": "fn(min: number, max: number, alpha: number) -> number"
		    },
		    "getRGB": {
		     "!type": "fn(color: number) -> ?"
		    },
		    "getWebRGB": {
		     "!type": "fn(color: number|?) -> string"
		    },
		    "getAlpha": {
		     "!type": "fn(color: number) -> number"
		    },
		    "getAlphaFloat": {
		     "!type": "fn(color: number) -> number"
		    },
		    "getRed": {
		     "!type": "fn(color: number) -> number"
		    },
		    "getGreen": {
		     "!type": "fn(color: number) -> number"
		    },
		    "getBlue": {
		     "!type": "fn(color: number) -> number"
		    },
		    "blendNormal": {
		     "!type": "fn(a: number, b: number) -> number"
		    },
		    "blendLighten": {
		     "!type": "fn(a: number, b: number) -> number"
		    },
		    "blendDarken": {
		     "!type": "fn(a: number, b: number) -> number"
		    },
		    "blendMultiply": {
		     "!type": "fn(a: number, b: number) -> number"
		    },
		    "blendAverage": {
		     "!type": "fn(a: number, b: number) -> number"
		    },
		    "blendAdd": {
		     "!type": "fn(a: number, b: number) -> number"
		    },
		    "blendSubtract": {
		     "!type": "fn(a: number, b: number) -> number"
		    },
		    "blendDifference": {
		     "!type": "fn(a: number, b: number) -> number"
		    },
		    "blendNegation": {
		     "!type": "fn(a: number, b: number) -> number"
		    },
		    "blendScreen": {
		     "!type": "fn(a: number, b: number) -> number"
		    },
		    "blendExclusion": {
		     "!type": "fn(a: number, b: number) -> number"
		    },
		    "blendOverlay": {
		     "!type": "fn(a: number, b: number) -> number"
		    },
		    "blendSoftLight": {
		     "!type": "fn(a: number, b: number) -> number"
		    },
		    "blendHardLight": {
		     "!type": "fn(a: number, b: number) -> number"
		    },
		    "blendColorDodge": {
		     "!type": "fn(a: number, b: number) -> number"
		    },
		    "blendColorBurn": {
		     "!type": "fn(a: number, b: number) -> number"
		    },
		    "blendLinearDodge": {
		     "!type": "fn(a: number, b: number) -> number"
		    },
		    "blendLinearBurn": {
		     "!type": "fn(a: number, b: number) -> number"
		    },
		    "blendLinearLight": {
		     "!type": "fn(a: number, b: number) -> number"
		    },
		    "blendVividLight": {
		     "!type": "fn(a: number, b: number) -> number"
		    },
		    "blendPinLight": {
		     "!type": "fn(a: number, b: number) -> number"
		    },
		    "blendHardMix": {
		     "!type": "fn(a: number, b: number) -> number"
		    },
		    "blendReflect": {
		     "!type": "fn(a: number, b: number) -> number"
		    },
		    "blendGlow": {
		     "!type": "fn(a: number, b: number) -> number"
		    },
		    "blendPhoenix": {
		     "!type": "fn(a: number, b: number) -> number"
		    }
		   },
		   "Utils": {
		    "Debug": {
		     "!type": "fn(game: +Phaser.Game)",
		     "prototype": {
		      "game": {
		       "!type": "+Phaser.Game"
		      },
		      "sprite": {
		       "!type": "+Phaser.Image"
		      },
		      "bmd": {
		       "!type": "+Phaser.BitmapData"
		      },
		      "canvas": {
		       "!type": "+HTMLCanvasElement"
		      },
		      "context": {
		       "!type": "+CanvasRenderingContext2D"
		      },
		      "font": {
		       "!type": "string"
		      },
		      "columnWidth": {
		       "!type": "number"
		      },
		      "lineHeight": {
		       "!type": "number"
		      },
		      "renderShadow": {
		       "!type": "bool"
		      },
		      "currentX": {
		       "!type": "number"
		      },
		      "currentY": {
		       "!type": "number"
		      },
		      "currentAlpha": {
		       "!type": "number"
		      },
		      "dirty": {
		       "!type": "bool"
		      },
		      "boot": {
		       "!type": "fn()"
		      },
		      "preUpdate": {
		       "!type": "fn()"
		      },
		      "reset": {
		       "!type": "fn()"
		      },
		      "start": {
		       "!type": "fn(x: number, y: number, color: string, columnWidth: number)"
		      },
		      "stop": {
		       "!type": "fn()"
		      },
		      "line": {
		       "!type": "fn()"
		      },
		      "soundInfo": {
		       "!type": "fn(sound: +Phaser.Sound, x: number, y: number, color: string)"
		      },
		      "cameraInfo": {
		       "!type": "fn(camera: +Phaser.Camera, x: number, y: number, color: string)"
		      },
		      "timer": {
		       "!type": "fn(timer: +Phaser.Timer, x: number, y: number, color: string)"
		      },
		      "pointer": {
		       "!type": "fn(pointer: +Phaser.Pointer, hideIfUp: bool, downColor: string, upColor: string, color: string)"
		      },
		      "spriteInputInfo": {
		       "!type": "fn(sprite: +Phaser.Sprite|+Phaser.Image, x: number, y: number, color: string)"
		      },
		      "key": {
		       "!type": "fn(key: +Phaser.Key, x: number, y: number, color: string)"
		      },
		      "inputInfo": {
		       "!type": "fn(x: number, y: number, color: string)"
		      },
		      "spriteBounds": {
		       "!type": "fn(sprite: +Phaser.Sprite|+Phaser.Image, color: string, filled: bool)"
		      },
		      "ropeSegments": {
		       "!type": "fn(rope: +Phaser.Rope, color: string, filled: bool)"
		      },
		      "spriteInfo": {
		       "!type": "fn(sprite: +Phaser.Sprite, x: number, y: number, color: string)"
		      },
		      "spriteCoords": {
		       "!type": "fn(sprite: +Phaser.Sprite|+Phaser.Image, x: number, y: number, color: string)"
		      },
		      "lineInfo": {
		       "!type": "fn(line: +Phaser.Line, x: number, y: number, color: string)"
		      },
		      "pixel": {
		       "!type": "fn(x: number, y: number, color: string, size: number)"
		      },
		      "geom": {
		       "!type": "fn(object: +Phaser.Rectangle|?, color: string, filled: bool)"
		      },
		      "text": {
		       "!type": "fn(text: string, x: number, y: number, color: string, font: string)"
		      },
		      "quadTree": {
		       "!type": "fn(quadtree: +Phaser.QuadTree, color: string)"
		      },
		      "body": {
		       "!type": "fn(sprite: +Phaser.Sprite, color: string, filled: bool)"
		      },
		      "bodyInfo": {
		       "!type": "fn(sprite: +Phaser.Sprite, x: number, y: number, color: string)"
		      },
		      "box2dWorld": {
		       "!type": "fn()"
		      },
		      "box2dBody": {
		       "!type": "fn(sprite: +Phaser.Sprite, color: string)"
		      },
		      "destroy": {
		       "!type": "fn()"
		      }
		     }
		    },
		    "!type": "fn()",
		    "getProperty": {
		     "!type": "fn(obj: ?, prop: string) -> ?"
		    },
		    "setProperty": {
		     "!type": "fn(obj: ?, prop: string) -> ?"
		    },
		    "prototype": {
		     "randomChoice": {
		      "!type": "fn(choice1: +any, choice2: +any) -> +any"
		     }
		    },
		    "parseDimension": {
		     "!type": "fn(size: string|number, dimension: number) -> number"
		    },
		    "pad": {
		     "!type": "fn(str: string, len: number, pad: string, dir: number) -> string"
		    },
		    "isPlainObject": {
		     "!type": "fn(obj: ?) -> bool"
		    },
		    "extend": {
		     "!type": "fn(deep: bool, target: ?) -> ?"
		    },
		    "mixinPrototype": {
		     "!type": "fn(target: ?, mixin: ?, replace: bool)"
		    },
		    "mixin": {
		     "!type": "fn(from: ?, to: ?) -> ?"
		    }
		   },
		   "LinkedList": {
		    "!type": "fn()",
		    "prototype": {
		     "next": {},
		     "prev": {},
		     "first": {},
		     "last": {},
		     "total": {
		      "!type": "number"
		     },
		     "add": {
		      "!type": "fn(item: ?) -> ?"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "remove": {
		      "!type": "fn(item: ?)"
		     },
		     "callAll": {
		      "!type": "fn(callback: fn())"
		     }
		    }
		   }
		  },
		  "!type": "fn()",
		  "<anonymous>~glMatrix": {
		   "setMatrixArrayType": {
		    "!type": "fn(type: +Type)"
		   },
		   "toRadian": {
		    "!type": "fn(Angle: number)"
		   }
		  },
		  "<anonymous>~vec2": {
		   "create": {
		    "!type": "fn() -> +vec2"
		   },
		   "clone": {
		    "!type": "fn(a: +vec2) -> +vec2"
		   },
		   "fromValues": {
		    "!type": "fn(x: number, y: number) -> +vec2"
		   },
		   "copy": {
		    "!type": "fn(out: +vec2, a: +vec2) -> +vec2"
		   },
		   "set": {
		    "!type": "fn(out: +vec2, x: number, y: number) -> +vec2"
		   },
		   "add": {
		    "!type": "fn(out: +vec2, a: +vec2, b: +vec2) -> +vec2"
		   },
		   "subtract": {
		    "!type": "fn(out: +vec2, a: +vec2, b: +vec2) -> +vec2"
		   },
		   "sub": {
		    "!type": "fn()"
		   },
		   "multiply": {
		    "!type": "fn(out: +vec2, a: +vec2, b: +vec2) -> +vec2"
		   },
		   "mul": {
		    "!type": "fn()"
		   },
		   "divide": {
		    "!type": "fn(out: +vec2, a: +vec2, b: +vec2) -> +vec2"
		   },
		   "div": {
		    "!type": "fn()"
		   },
		   "min": {
		    "!type": "fn(out: +vec2, a: +vec2, b: +vec2) -> +vec2"
		   },
		   "max": {
		    "!type": "fn(out: +vec2, a: +vec2, b: +vec2) -> +vec2"
		   },
		   "scale": {
		    "!type": "fn(out: +vec2, a: +vec2, b: number) -> +vec2"
		   },
		   "scaleAndAdd": {
		    "!type": "fn(out: +vec2, a: +vec2, b: +vec2, scale: number) -> +vec2"
		   },
		   "distance": {
		    "!type": "fn(a: +vec2, b: +vec2) -> number"
		   },
		   "dist": {
		    "!type": "fn()"
		   },
		   "squaredDistance": {
		    "!type": "fn(a: +vec2, b: +vec2) -> number"
		   },
		   "sqrDist": {
		    "!type": "fn()"
		   },
		   "length": {
		    "!type": "fn(a: +vec2) -> number"
		   },
		   "len": {
		    "!type": "fn()"
		   },
		   "squaredLength": {
		    "!type": "fn(a: +vec2) -> number"
		   },
		   "sqrLen": {
		    "!type": "fn()"
		   },
		   "negate": {
		    "!type": "fn(out: +vec2, a: +vec2) -> +vec2"
		   },
		   "inverse": {
		    "!type": "fn(out: +vec2, a: +vec2) -> +vec2"
		   },
		   "normalize": {
		    "!type": "fn(out: +vec2, a: +vec2) -> +vec2"
		   },
		   "dot": {
		    "!type": "fn(a: +vec2, b: +vec2) -> number"
		   },
		   "cross": {
		    "!type": "fn(out: +vec3, a: +vec2, b: +vec2) -> +vec3"
		   },
		   "lerp": {
		    "!type": "fn(out: +vec2, a: +vec2, b: +vec2, t: number) -> +vec2"
		   },
		   "random": {
		    "!type": "fn(out: +vec2, scale: number) -> +vec2"
		   },
		   "transformMat2": {
		    "!type": "fn(out: +vec2, a: +vec2, m: +mat2) -> +vec2"
		   },
		   "transformMat2d": {
		    "!type": "fn(out: +vec2, a: +vec2, m: +mat2d) -> +vec2"
		   },
		   "transformMat3": {
		    "!type": "fn(out: +vec2, a: +vec2, m: +mat3) -> +vec2"
		   },
		   "transformMat4": {
		    "!type": "fn(out: +vec2, a: +vec2, m: +mat4) -> +vec2"
		   },
		   "forEach": {
		    "!type": "fn(a: [?], stride: number, offset: number, count: number, fn: fn(), arg: ?) -> [?]"
		   },
		   "str": {
		    "!type": "fn(vec: +vec2) -> string"
		   }
		  },
		  "<anonymous>~vec3": {
		   "create": {
		    "!type": "fn() -> +vec3"
		   },
		   "clone": {
		    "!type": "fn(a: +vec3) -> +vec3"
		   },
		   "fromValues": {
		    "!type": "fn(x: number, y: number, z: number) -> +vec3"
		   },
		   "copy": {
		    "!type": "fn(out: +vec3, a: +vec3) -> +vec3"
		   },
		   "set": {
		    "!type": "fn(out: +vec3, x: number, y: number, z: number) -> +vec3"
		   },
		   "add": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> +vec3"
		   },
		   "subtract": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> +vec3"
		   },
		   "sub": {
		    "!type": "fn()"
		   },
		   "multiply": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> +vec3"
		   },
		   "mul": {
		    "!type": "fn()"
		   },
		   "divide": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> +vec3"
		   },
		   "div": {
		    "!type": "fn()"
		   },
		   "min": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> +vec3"
		   },
		   "max": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> +vec3"
		   },
		   "scale": {
		    "!type": "fn(out: +vec3, a: +vec3, b: number) -> +vec3"
		   },
		   "scaleAndAdd": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3, scale: number) -> +vec3"
		   },
		   "distance": {
		    "!type": "fn(a: +vec3, b: +vec3) -> number"
		   },
		   "dist": {
		    "!type": "fn()"
		   },
		   "squaredDistance": {
		    "!type": "fn(a: +vec3, b: +vec3) -> number"
		   },
		   "sqrDist": {
		    "!type": "fn()"
		   },
		   "length": {
		    "!type": "fn(a: +vec3) -> number"
		   },
		   "len": {
		    "!type": "fn()"
		   },
		   "squaredLength": {
		    "!type": "fn(a: +vec3) -> number"
		   },
		   "sqrLen": {
		    "!type": "fn()"
		   },
		   "negate": {
		    "!type": "fn(out: +vec3, a: +vec3) -> +vec3"
		   },
		   "inverse": {
		    "!type": "fn(out: +vec3, a: +vec3) -> +vec3"
		   },
		   "normalize": {
		    "!type": "fn(out: +vec3, a: +vec3) -> +vec3"
		   },
		   "dot": {
		    "!type": "fn(a: +vec3, b: +vec3) -> number"
		   },
		   "cross": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> +vec3"
		   },
		   "lerp": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3, t: number) -> +vec3"
		   },
		   "random": {
		    "!type": "fn(out: +vec3, scale: number) -> +vec3"
		   },
		   "transformMat4": {
		    "!type": "fn(out: +vec3, a: +vec3, m: +mat4) -> +vec3"
		   },
		   "transformMat3": {
		    "!type": "fn(out: +vec3, a: +vec3, m: +mat4) -> +vec3"
		   },
		   "transformQuat": {
		    "!type": "fn(out: +vec3, a: +vec3, q: +quat) -> +vec3"
		   },
		   "rotateX": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3, c: number) -> +vec3"
		   },
		   "rotateY": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3, c: number) -> +vec3"
		   },
		   "rotateZ": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3, c: number) -> +vec3"
		   },
		   "forEach": {
		    "!type": "fn(a: [?], stride: number, offset: number, count: number, fn: fn(), arg: ?) -> [?]"
		   },
		   "str": {
		    "!type": "fn(vec: +vec3) -> string"
		   }
		  },
		  "<anonymous>~vec4": {
		   "create": {
		    "!type": "fn() -> +vec4"
		   },
		   "clone": {
		    "!type": "fn(a: +vec4) -> +vec4"
		   },
		   "fromValues": {
		    "!type": "fn(x: number, y: number, z: number, w: number) -> +vec4"
		   },
		   "copy": {
		    "!type": "fn(out: +vec4, a: +vec4) -> +vec4"
		   },
		   "set": {
		    "!type": "fn(out: +vec4, x: number, y: number, z: number, w: number) -> +vec4"
		   },
		   "add": {
		    "!type": "fn(out: +vec4, a: +vec4, b: +vec4) -> +vec4"
		   },
		   "subtract": {
		    "!type": "fn(out: +vec4, a: +vec4, b: +vec4) -> +vec4"
		   },
		   "sub": {
		    "!type": "fn()"
		   },
		   "multiply": {
		    "!type": "fn(out: +vec4, a: +vec4, b: +vec4) -> +vec4"
		   },
		   "mul": {
		    "!type": "fn()"
		   },
		   "divide": {
		    "!type": "fn(out: +vec4, a: +vec4, b: +vec4) -> +vec4"
		   },
		   "div": {
		    "!type": "fn()"
		   },
		   "min": {
		    "!type": "fn(out: +vec4, a: +vec4, b: +vec4) -> +vec4"
		   },
		   "max": {
		    "!type": "fn(out: +vec4, a: +vec4, b: +vec4) -> +vec4"
		   },
		   "scale": {
		    "!type": "fn(out: +vec4, a: +vec4, b: number) -> +vec4"
		   },
		   "scaleAndAdd": {
		    "!type": "fn(out: +vec4, a: +vec4, b: +vec4, scale: number) -> +vec4"
		   },
		   "distance": {
		    "!type": "fn(a: +vec4, b: +vec4) -> number"
		   },
		   "dist": {
		    "!type": "fn()"
		   },
		   "squaredDistance": {
		    "!type": "fn(a: +vec4, b: +vec4) -> number"
		   },
		   "sqrDist": {
		    "!type": "fn()"
		   },
		   "length": {
		    "!type": "fn(a: +vec4) -> number"
		   },
		   "len": {
		    "!type": "fn()"
		   },
		   "squaredLength": {
		    "!type": "fn(a: +vec4) -> number"
		   },
		   "sqrLen": {
		    "!type": "fn()"
		   },
		   "negate": {
		    "!type": "fn(out: +vec4, a: +vec4) -> +vec4"
		   },
		   "inverse": {
		    "!type": "fn(out: +vec4, a: +vec4) -> +vec4"
		   },
		   "normalize": {
		    "!type": "fn(out: +vec4, a: +vec4) -> +vec4"
		   },
		   "dot": {
		    "!type": "fn(a: +vec4, b: +vec4) -> number"
		   },
		   "lerp": {
		    "!type": "fn(out: +vec4, a: +vec4, b: +vec4, t: number) -> +vec4"
		   },
		   "random": {
		    "!type": "fn(out: +vec4, scale: number) -> +vec4"
		   },
		   "transformMat4": {
		    "!type": "fn(out: +vec4, a: +vec4, m: +mat4) -> +vec4"
		   },
		   "transformQuat": {
		    "!type": "fn(out: +vec4, a: +vec4, q: +quat) -> +vec4"
		   },
		   "forEach": {
		    "!type": "fn(a: [?], stride: number, offset: number, count: number, fn: fn(), arg: ?) -> [?]"
		   },
		   "str": {
		    "!type": "fn(vec: +vec4) -> string"
		   }
		  },
		  "<anonymous>~mat2": {
		   "create": {
		    "!type": "fn() -> +mat2"
		   },
		   "clone": {
		    "!type": "fn(a: +mat2) -> +mat2"
		   },
		   "copy": {
		    "!type": "fn(out: +mat2, a: +mat2) -> +mat2"
		   },
		   "identity": {
		    "!type": "fn(out: +mat2) -> +mat2"
		   },
		   "transpose": {
		    "!type": "fn(out: +mat2, a: +mat2) -> +mat2"
		   },
		   "invert": {
		    "!type": "fn(out: +mat2, a: +mat2) -> +mat2"
		   },
		   "adjoint": {
		    "!type": "fn(out: +mat2, a: +mat2) -> +mat2"
		   },
		   "determinant": {
		    "!type": "fn(a: +mat2) -> number"
		   },
		   "multiply": {
		    "!type": "fn(out: +mat2, a: +mat2, b: +mat2) -> +mat2"
		   },
		   "mul": {
		    "!type": "fn()"
		   },
		   "rotate": {
		    "!type": "fn(out: +mat2, a: +mat2, rad: number) -> +mat2"
		   },
		   "scale": {
		    "!type": "fn(out: +mat2, a: +mat2, v: +vec2) -> +mat2"
		   },
		   "str": {
		    "!type": "fn(mat: +mat2) -> string"
		   },
		   "frob": {
		    "!type": "fn(a: +mat2) -> number"
		   },
		   "LDU": {
		    "!type": "fn(L: +mat2, D: +mat2, U: +mat2, a: +mat2)"
		   }
		  },
		  "<anonymous>~mat2d": {
		   "create": {
		    "!type": "fn() -> +mat2d"
		   },
		   "clone": {
		    "!type": "fn(a: +mat2d) -> +mat2d"
		   },
		   "copy": {
		    "!type": "fn(out: +mat2d, a: +mat2d) -> +mat2d"
		   },
		   "identity": {
		    "!type": "fn(out: +mat2d) -> +mat2d"
		   },
		   "invert": {
		    "!type": "fn(out: +mat2d, a: +mat2d) -> +mat2d"
		   },
		   "determinant": {
		    "!type": "fn(a: +mat2d) -> number"
		   },
		   "multiply": {
		    "!type": "fn(out: +mat2d, a: +mat2d, b: +mat2d) -> +mat2d"
		   },
		   "mul": {
		    "!type": "fn()"
		   },
		   "rotate": {
		    "!type": "fn(out: +mat2d, a: +mat2d, rad: number) -> +mat2d"
		   },
		   "scale": {
		    "!type": "fn(out: +mat2d, a: +mat2d, v: +vec2) -> +mat2d"
		   },
		   "translate": {
		    "!type": "fn(out: +mat2d, a: +mat2d, v: +vec2) -> +mat2d"
		   },
		   "str": {
		    "!type": "fn(a: +mat2d) -> string"
		   },
		   "frob": {
		    "!type": "fn(a: +mat2d) -> number"
		   }
		  },
		  "<anonymous>~mat3": {
		   "create": {
		    "!type": "fn() -> +mat3"
		   },
		   "fromMat4": {
		    "!type": "fn(out: +mat3, a: +mat4) -> +mat3"
		   },
		   "clone": {
		    "!type": "fn(a: +mat3) -> +mat3"
		   },
		   "copy": {
		    "!type": "fn(out: +mat3, a: +mat3) -> +mat3"
		   },
		   "identity": {
		    "!type": "fn(out: +mat3) -> +mat3"
		   },
		   "transpose": {
		    "!type": "fn(out: +mat3, a: +mat3) -> +mat3"
		   },
		   "invert": {
		    "!type": "fn(out: +mat3, a: +mat3) -> +mat3"
		   },
		   "adjoint": {
		    "!type": "fn(out: +mat3, a: +mat3) -> +mat3"
		   },
		   "determinant": {
		    "!type": "fn(a: +mat3) -> number"
		   },
		   "multiply": {
		    "!type": "fn(out: +mat3, a: +mat3, b: +mat3) -> +mat3"
		   },
		   "mul": {
		    "!type": "fn()"
		   },
		   "translate": {
		    "!type": "fn(out: +mat3, a: +mat3, v: +vec2) -> +mat3"
		   },
		   "rotate": {
		    "!type": "fn(out: +mat3, a: +mat3, rad: number) -> +mat3"
		   },
		   "scale": {
		    "!type": "fn(out: +mat3, a: +mat3, v: +vec2) -> +mat3"
		   },
		   "fromMat2d": {
		    "!type": "fn(out: +mat3, a: +mat2d) -> +mat3"
		   },
		   "fromQuat": {
		    "!type": "fn(out: +mat3, q: +quat) -> +mat3"
		   },
		   "normalFromMat4": {
		    "!type": "fn(out: +mat3, a: +mat4) -> +mat3"
		   },
		   "str": {
		    "!type": "fn(mat: +mat3) -> string"
		   },
		   "frob": {
		    "!type": "fn(a: +mat3) -> number"
		   }
		  },
		  "<anonymous>~mat4": {
		   "create": {
		    "!type": "fn() -> +mat4"
		   },
		   "clone": {
		    "!type": "fn(a: +mat4) -> +mat4"
		   },
		   "copy": {
		    "!type": "fn(out: +mat4, a: +mat4) -> +mat4"
		   },
		   "identity": {
		    "!type": "fn(out: +mat4) -> +mat4"
		   },
		   "transpose": {
		    "!type": "fn(out: +mat4, a: +mat4) -> +mat4"
		   },
		   "invert": {
		    "!type": "fn(out: +mat4, a: +mat4) -> +mat4"
		   },
		   "adjoint": {
		    "!type": "fn(out: +mat4, a: +mat4) -> +mat4"
		   },
		   "determinant": {
		    "!type": "fn(a: +mat4) -> number"
		   },
		   "multiply": {
		    "!type": "fn(out: +mat4, a: +mat4, b: +mat4) -> +mat4"
		   },
		   "mul": {
		    "!type": "fn()"
		   },
		   "translate": {
		    "!type": "fn(out: +mat4, a: +mat4, v: +vec3) -> +mat4"
		   },
		   "scale": {
		    "!type": "fn(out: +mat4, a: +mat4, v: +vec3) -> +mat4"
		   },
		   "rotate": {
		    "!type": "fn(out: +mat4, a: +mat4, rad: number, axis: +vec3) -> +mat4"
		   },
		   "rotateX": {
		    "!type": "fn(out: +mat4, a: +mat4, rad: number) -> +mat4"
		   },
		   "rotateY": {
		    "!type": "fn(out: +mat4, a: +mat4, rad: number) -> +mat4"
		   },
		   "rotateZ": {
		    "!type": "fn(out: +mat4, a: +mat4, rad: number) -> +mat4"
		   },
		   "fromRotationTranslation": {
		    "!type": "fn(out: +mat4, q: +quat4, v: +vec3) -> +mat4"
		   },
		   "frustum": {
		    "!type": "fn(out: +mat4, left: number, right: number, bottom: number, top: number, near: number, far: number) -> +mat4"
		   },
		   "perspective": {
		    "!type": "fn(out: +mat4, fovy: number, aspect: number, near: number, far: number) -> +mat4"
		   },
		   "ortho": {
		    "!type": "fn(out: +mat4, left: number, right: number, bottom: number, top: number, near: number, far: number) -> +mat4"
		   },
		   "lookAt": {
		    "!type": "fn(out: +mat4, eye: +vec3, center: +vec3, up: +vec3) -> +mat4"
		   },
		   "str": {
		    "!type": "fn(mat: +mat4) -> string"
		   },
		   "frob": {
		    "!type": "fn(a: +mat4) -> number"
		   }
		  },
		  "<anonymous>~quat": {
		   "create": {
		    "!type": "fn() -> +quat"
		   },
		   "rotationTo": {},
		   "setAxes": {},
		   "clone": {
		    "!type": "fn(a: +quat) -> +quat"
		   },
		   "fromValues": {
		    "!type": "fn(x: number, y: number, z: number, w: number) -> +quat"
		   },
		   "copy": {
		    "!type": "fn(out: +quat, a: +quat) -> +quat"
		   },
		   "set": {
		    "!type": "fn(out: +quat, x: number, y: number, z: number, w: number) -> +quat"
		   },
		   "identity": {
		    "!type": "fn(out: +quat) -> +quat"
		   },
		   "setAxisAngle": {
		    "!type": "fn(out: +quat, axis: +vec3, rad: number) -> +quat"
		   },
		   "add": {
		    "!type": "fn(out: +quat, a: +quat, b: +quat) -> +quat"
		   },
		   "multiply": {
		    "!type": "fn(out: +quat, a: +quat, b: +quat) -> +quat"
		   },
		   "mul": {
		    "!type": "fn()"
		   },
		   "scale": {
		    "!type": "fn(out: +quat, a: +quat, b: number) -> +quat"
		   },
		   "rotateX": {
		    "!type": "fn(out: +quat, a: +quat, rad: number) -> +quat"
		   },
		   "rotateY": {
		    "!type": "fn(out: +quat, a: +quat, rad: number) -> +quat"
		   },
		   "rotateZ": {
		    "!type": "fn(out: +quat, a: +quat, rad: number) -> +quat"
		   },
		   "calculateW": {
		    "!type": "fn(out: +quat, a: +quat) -> +quat"
		   },
		   "dot": {
		    "!type": "fn(a: +quat, b: +quat) -> number"
		   },
		   "lerp": {
		    "!type": "fn(out: +quat, a: +quat, b: +quat, t: number) -> +quat"
		   },
		   "slerp": {
		    "!type": "fn(out: +quat, a: +quat, b: +quat, t: number) -> +quat"
		   },
		   "invert": {
		    "!type": "fn(out: +quat, a: +quat) -> +quat"
		   },
		   "conjugate": {
		    "!type": "fn(out: +quat, a: +quat) -> +quat"
		   },
		   "length": {
		    "!type": "fn(a: +quat) -> number"
		   },
		   "len": {
		    "!type": "fn()"
		   },
		   "squaredLength": {
		    "!type": "fn(a: +quat) -> number"
		   },
		   "sqrLen": {
		    "!type": "fn()"
		   },
		   "normalize": {
		    "!type": "fn(out: +quat, a: +quat) -> +quat"
		   },
		   "fromMat3": {
		    "!type": "fn(out: +quat, m: +mat3) -> +quat"
		   },
		   "str": {
		    "!type": "fn(vec: +quat) -> string"
		   }
		  },
		  "<anonymous>": {
		   "Polygon": {
		    "!type": "fn()"
		   },
		   "AABB": {
		    "!type": "fn(options: ?)"
		   },
		   "Broadphase": {
		    "!type": "fn()"
		   },
		   "NaiveBroadphase": {
		    "!type": "fn()"
		   },
		   "Narrowphase": {
		    "!type": "fn()"
		   },
		   "Ray": {
		    "!type": "fn(options: +anonymousRayOptions)"
		   },
		   "RaycastResult": {
		    "!type": "fn()"
		   },
		   "SAPBroadphase": {
		    "!type": "fn()"
		   },
		   "Constraint": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body, type: number, options: ?)"
		   },
		   "DistanceConstraint": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body, options: +anonymousDistanceConstraintOptions)"
		   },
		   "GearConstraint": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body, options: ?)"
		   },
		   "LockConstraint": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body, options: ?)"
		   },
		   "PrismaticConstraint": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body, options: ?)"
		   },
		   "RevoluteConstraint": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body, options: ?)"
		   },
		   "AngleLockEquation": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body, options: ?)"
		   },
		   "ContactEquation": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body)"
		   },
		   "Equation": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body, minForce: number, maxForce: number)"
		   },
		   "FrictionEquation": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body, slipForce: number)"
		   },
		   "RotationalLockEquation": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body, options: ?)"
		   },
		   "RotationalVelocityEquation": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body)"
		   },
		   "EventEmitter": {
		    "!type": "fn()"
		   },
		   "ContactMaterial": {
		    "!type": "fn(materialA: +Material, materialB: +Material, options: ?)"
		   },
		   "Material": {
		    "!type": "fn(id: number)"
		   },
		   "Body": {
		    "!type": "fn(, options: ?)"
		   },
		   "LinearSpring": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body, options: ?)"
		   },
		   "RotationalSpring": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body, options: ?)"
		   },
		   "Spring": {
		    "!type": "fn(bodyA: +Body, bodyB: +Body, options: ?)"
		   },
		   "TopDownVehicle": {
		    "!type": "fn(chassisBody: +Body, options: ?)"
		   },
		   "WheelConstraint": {
		    "!type": "fn(vehicle: +Vehicle, options: +anonymousWheelConstraintOptions)"
		   },
		   "Box": {
		    "!type": "fn(options: +anonymousBoxOptions)"
		   },
		   "Capsule": {
		    "!type": "fn(options: +anonymousCapsuleOptions)"
		   },
		   "Circle": {
		    "!type": "fn(options: +options)"
		   },
		   "Convex": {
		    "!type": "fn(options: +anonymousConvexOptions)"
		   },
		   "Heightfield": {
		    "!type": "fn(options: +anonymousHeightfieldOptions)"
		   },
		   "Line": {
		    "!type": "fn(options: +anonymousLineOptions)"
		   },
		   "Particle": {
		    "!type": "fn(options: ?)"
		   },
		   "Plane": {
		    "!type": "fn(options: ?)"
		   },
		   "Shape": {
		    "!type": "fn(options: +anonymousShapeOptions)"
		   },
		   "GSSolver": {
		    "!type": "fn(options: ?)"
		   },
		   "Solver": {
		    "!type": "fn()"
		   },
		   "ContactEquationPool": {
		    "!type": "fn()"
		   },
		   "FrictionEquationPool": {
		    "!type": "fn()"
		   },
		   "IslandNodePool": {
		    "!type": "fn()"
		   },
		   "IslandPool": {
		    "!type": "fn()"
		   },
		   "OverlapKeeper": {
		    "!type": "fn()"
		   },
		   "OverlapKeeperRecord": {
		    "!type": "fn(bodyA: +Body, shapeA: +Shape, bodyB: +Body, shapeB: +Shape)"
		   },
		   "OverlapKeeperRecordPool": {
		    "!type": "fn()"
		   },
		   "Pool": {
		    "!type": "fn()"
		   },
		   "TupleDictionary": {
		    "!type": "fn()"
		   },
		   "Utils": {
		    "!type": "fn()"
		   },
		   "Island": {
		    "!type": "fn()"
		   },
		   "IslandManager": {
		    "!type": "fn(options: ?)"
		   },
		   "IslandNode": {
		    "!type": "fn(body: +Body)"
		   },
		   "World": {
		    "!type": "fn(options: ?)"
		   }
		  },
		  "<anonymous>~Polygon": {
		   "prototype": {
		    "vertices": {}
		   }
		  },
		  "<anonymous>~AABB": {
		   "prototype": {
		    "lowerBound": {},
		    "upperBound": {}
		   }
		  },
		  "<anonymous>~Broadphase": {
		   "prototype": {
		    "result": {},
		    "world": {},
		    "boundingVolumeType": {
		     "!type": "number"
		    }
		   },
		   "AABB": {
		    "!type": "number"
		   },
		   "BOUNDING_CIRCLE": {
		    "!type": "number"
		   }
		  },
		  "<anonymous>~Narrowphase": {
		   "prototype": {
		    "contactEquations": {},
		    "frictionEquations": {},
		    "enableFriction": {},
		    "enabledEquations": {},
		    "slipForce": {},
		    "frictionCoefficient": {},
		    "surfaceVelocity": {
		     "!type": "number"
		    },
		    "contactEquationPool": {
		     "!type": "+ContactEquationPool"
		    },
		    "frictionEquationPool": {
		     "!type": "+FrictionEquationPool"
		    },
		    "restitution": {},
		    "stiffness": {
		     "!type": "number"
		    },
		    "relaxation": {
		     "!type": "number"
		    },
		    "frictionStiffness": {},
		    "frictionRelaxation": {},
		    "enableFrictionReduction": {},
		    "contactSkinSize": {
		     "!type": "number"
		    }
		   }
		  },
		  "<anonymous>~Ray": {
		   "prototype": {
		    "from": {
		     "!type": "+array"
		    },
		    "to": {
		     "!type": "+array"
		    },
		    "checkCollisionResponse": {
		     "!type": "bool"
		    },
		    "skipBackfaces": {
		     "!type": "bool"
		    },
		    "collisionMask": {
		     "!type": "number"
		    },
		    "collisionGroup": {
		     "!type": "number"
		    },
		    "mode": {
		     "!type": "number"
		    },
		    "callback": {
		     "!type": "fn()"
		    },
		    "direction": {
		     "!type": "+array"
		    },
		    "length": {
		     "!type": "number"
		    }
		   },
		   "CLOSEST": {
		    "!type": "number"
		   },
		   "ANY": {
		    "!type": "number"
		   },
		   "ALL": {
		    "!type": "number"
		   }
		  },
		  "<anonymous>~RaycastResult": {
		   "prototype": {
		    "normal": {
		     "!type": "+array"
		    },
		    "shape": {
		     "!type": "+Shape"
		    },
		    "body": {
		     "!type": "+Body"
		    },
		    "faceIndex": {
		     "!type": "number"
		    },
		    "fraction": {
		     "!type": "number"
		    },
		    "isStopped": {
		     "!type": "bool"
		    }
		   }
		  },
		  "<anonymous>~SAPBroadphase": {
		   "prototype": {
		    "axisList": {},
		    "axisIndex": {}
		   }
		  },
		  "<anonymous>~Constraint": {
		   "prototype": {
		    "type": {
		     "!type": "number"
		    },
		    "equations": {},
		    "bodyA": {},
		    "bodyB": {},
		    "collideConnected": {}
		   },
		   "DISTANCE": {
		    "!type": "number"
		   },
		   "GEAR": {
		    "!type": "number"
		   },
		   "LOCK": {
		    "!type": "number"
		   },
		   "PRISMATIC": {
		    "!type": "number"
		   },
		   "REVOLUTE": {
		    "!type": "number"
		   }
		  },
		  "<anonymous>~DistanceConstraint": {
		   "prototype": {
		    "localAnchorA": {},
		    "localAnchorB": {},
		    "distance": {},
		    "maxForce": {
		     "!type": "number"
		    },
		    "upperLimitEnabled": {
		     "!type": "bool"
		    },
		    "upperLimit": {
		     "!type": "number"
		    },
		    "lowerLimitEnabled": {
		     "!type": "bool"
		    },
		    "lowerLimit": {
		     "!type": "number"
		    },
		    "position": {
		     "!type": "number"
		    }
		   }
		  },
		  "<anonymous>~GearConstraint": {
		   "prototype": {
		    "ratio": {},
		    "angle": {}
		   }
		  },
		  "<anonymous>~LockConstraint": {
		   "prototype": {
		    "localOffsetB": {
		     "!type": "[?]"
		    },
		    "localAngleB": {
		     "!type": "number"
		    }
		   }
		  },
		  "<anonymous>~PrismaticConstraint": {
		   "prototype": {
		    "localAnchorA": {},
		    "localAnchorB": {},
		    "localAxisA": {},
		    "position": {},
		    "lowerLimitEnabled": {},
		    "upperLimitEnabled": {},
		    "lowerLimit": {},
		    "upperLimit": {},
		    "motorEquation": {},
		    "motorEnabled": {},
		    "motorSpeed": {}
		   }
		  },
		  "<anonymous>~RevoluteConstraint": {
		   "prototype": {
		    "pivotA": {
		     "!type": "[?]"
		    },
		    "pivotB": {
		     "!type": "[?]"
		    },
		    "motorEnabled": {
		     "!type": "bool"
		    },
		    "angle": {},
		    "lowerLimitEnabled": {},
		    "upperLimitEnabled": {},
		    "lowerLimit": {},
		    "upperLimit": {}
		   }
		  },
		  "<anonymous>~ContactEquation": {
		   "prototype": {
		    "contactPointA": {},
		    "contactPointB": {},
		    "normalA": {},
		    "restitution": {},
		    "firstImpact": {},
		    "shapeA": {},
		    "shapeB": {}
		   }
		  },
		  "<anonymous>~Equation": {
		   "prototype": {
		    "minForce": {},
		    "maxForce": {},
		    "bodyA": {},
		    "bodyB": {},
		    "stiffness": {},
		    "relaxation": {},
		    "G": {},
		    "needsUpdate": {
		     "!type": "bool"
		    },
		    "multiplier": {},
		    "relativeVelocity": {
		     "!type": "number"
		    },
		    "enabled": {
		     "!type": "bool"
		    }
		   },
		   "DEFAULT_STIFFNESS": {
		    "!type": "number"
		   },
		   "DEFAULT_RELAXATION": {
		    "!type": "number"
		   }
		  },
		  "<anonymous>~FrictionEquation": {
		   "prototype": {
		    "contactPointA": {},
		    "contactPointB": {},
		    "t": {},
		    "contactEquations": {},
		    "shapeA": {},
		    "shapeB": {},
		    "frictionCoefficient": {}
		   }
		  },
		  "<anonymous>~RotationalLockEquation": {
		   "prototype": {
		    "angle": {
		     "!type": "number"
		    }
		   }
		  },
		  "<anonymous>~ContactMaterial": {
		   "prototype": {
		    "id": {},
		    "materialA": {},
		    "materialB": {},
		    "friction": {},
		    "restitution": {},
		    "stiffness": {},
		    "relaxation": {},
		    "frictionStiffness": {},
		    "frictionRelaxation": {},
		    "surfaceVelocity": {
		     "!type": "number"
		    },
		    "contactSkinSize": {}
		   }
		  },
		  "<anonymous>~Material": {
		   "prototype": {
		    "id": {}
		   }
		  },
		  "<anonymous>~Body": {
		   "prototype": {
		    "id": {},
		    "world": {},
		    "shapes": {},
		    "mass": {},
		    "invMass": {},
		    "inertia": {},
		    "invInertia": {},
		    "fixedRotation": {},
		    "fixedX": {
		     "!type": "bool"
		    },
		    "fixedY": {
		     "!type": "bool"
		    },
		    "position": {},
		    "interpolatedPosition": {},
		    "interpolatedAngle": {},
		    "previousPosition": {},
		    "previousAngle": {},
		    "velocity": {},
		    "vlambda": {},
		    "wlambda": {},
		    "angle": {},
		    "angularVelocity": {},
		    "force": {},
		    "angularForce": {},
		    "damping": {},
		    "angularDamping": {},
		    "type": {},
		    "boundingRadius": {},
		    "aabb": {},
		    "aabbNeedsUpdate": {},
		    "allowSleep": {},
		    "sleepState": {},
		    "sleepSpeedLimit": {},
		    "sleepTimeLimit": {},
		    "gravityScale": {
		     "!type": "number"
		    },
		    "collisionResponse": {
		     "!type": "bool"
		    },
		    "idleTime": {
		     "!type": "number"
		    },
		    "ccdSpeedThreshold": {
		     "!type": "number"
		    },
		    "ccdIterations": {
		     "!type": "number"
		    }
		   },
		   "DYNAMIC": {},
		   "STATIC": {},
		   "KINEMATIC": {},
		   "AWAKE": {},
		   "SLEEPY": {},
		   "SLEEPING": {}
		  },
		  "<anonymous>~LinearSpring": {
		   "prototype": {
		    "localAnchorA": {},
		    "localAnchorB": {},
		    "restLength": {}
		   }
		  },
		  "<anonymous>~RotationalSpring": {
		   "prototype": {
		    "restAngle": {}
		   }
		  },
		  "<anonymous>~Spring": {
		   "prototype": {
		    "stiffness": {},
		    "damping": {},
		    "bodyA": {},
		    "bodyB": {}
		   }
		  },
		  "<anonymous>~TopDownVehicle": {
		   "prototype": {
		    "chassisBody": {
		     "!type": "+Body"
		    },
		    "wheels": {
		     "!type": "[?]"
		    }
		   }
		  },
		  "<anonymous>~WheelConstraint": {
		   "prototype": {
		    "steerValue": {
		     "!type": "number"
		    },
		    "engineForce": {
		     "!type": "number"
		    },
		    "localForwardVector": {
		     "!type": "[?]"
		    },
		    "localPosition": {
		     "!type": "[?]"
		    }
		   }
		  },
		  "<anonymous>~Capsule": {
		   "prototype": {
		    "length": {
		     "!type": "number"
		    },
		    "radius": {
		     "!type": "number"
		    }
		   }
		  },
		  "<anonymous>~Circle": {
		   "prototype": {
		    "radius": {}
		   }
		  },
		  "<anonymous>~Convex": {
		   "prototype": {
		    "vertices": {},
		    "axes": {},
		    "centerOfMass": {},
		    "triangles": {},
		    "boundingRadius": {}
		   }
		  },
		  "<anonymous>~Heightfield": {
		   "prototype": {
		    "heights": {
		     "!type": "+array"
		    },
		    "maxValue": {
		     "!type": "number"
		    },
		    "minValue": {
		     "!type": "number"
		    },
		    "elementWidth": {
		     "!type": "number"
		    }
		   }
		  },
		  "<anonymous>~Line": {
		   "prototype": {
		    "length": {
		     "!type": "number"
		    }
		   }
		  },
		  "<anonymous>~Shape": {
		   "prototype": {
		    "body": {
		     "!type": "+Body"
		    },
		    "position": {
		     "!type": "[?]"
		    },
		    "angle": {
		     "!type": "number"
		    },
		    "type": {
		     "!type": "number"
		    },
		    "id": {},
		    "boundingRadius": {},
		    "collisionGroup": {},
		    "collisionResponse": {
		     "!type": "bool"
		    },
		    "collisionMask": {},
		    "material": {},
		    "area": {},
		    "sensor": {
		     "!type": "bool"
		    }
		   },
		   "CIRCLE": {
		    "!type": "number"
		   },
		   "PARTICLE": {
		    "!type": "number"
		   },
		   "PLANE": {
		    "!type": "number"
		   },
		   "CONVEX": {
		    "!type": "number"
		   },
		   "LINE": {
		    "!type": "number"
		   },
		   "BOX": {
		    "!type": "number"
		   },
		   "CAPSULE": {
		    "!type": "number"
		   },
		   "HEIGHTFIELD": {
		    "!type": "number"
		   }
		  },
		  "<anonymous>~GSSolver": {
		   "prototype": {
		    "iterations": {},
		    "tolerance": {},
		    "useZeroRHS": {},
		    "frictionIterations": {},
		    "usedIterations": {
		     "!type": "number"
		    }
		   }
		  },
		  "<anonymous>~Solver": {
		   "prototype": {
		    "equations": {},
		    "equationSortFunction": {}
		   }
		  },
		  "<anonymous>~OverlapKeeperRecord": {
		   "prototype": {
		    "shapeA": {
		     "!type": "+Shape"
		    },
		    "shapeB": {
		     "!type": "+Shape"
		    },
		    "bodyA": {
		     "!type": "+Body"
		    },
		    "bodyB": {
		     "!type": "+Body"
		    }
		   }
		  },
		  "<anonymous>~Pool": {
		   "prototype": {
		    "objects": {
		     "!type": "[?]"
		    }
		   }
		  },
		  "<anonymous>~TupleDictionary": {
		   "prototype": {
		    "data": {},
		    "keys": {
		     "!type": "[?]"
		    }
		   }
		  },
		  "<anonymous>~Island": {
		   "prototype": {
		    "equations": {},
		    "bodies": {}
		   }
		  },
		  "<anonymous>~IslandManager": {
		   "prototype": {
		    "nodePool": {},
		    "islandPool": {},
		    "equations": {
		     "!type": "[?]"
		    },
		    "islands": {
		     "!type": "[?]"
		    },
		    "nodes": {
		     "!type": "[?]"
		    }
		   }
		  },
		  "<anonymous>~IslandNode": {
		   "prototype": {
		    "body": {
		     "!type": "+Body"
		    },
		    "neighbors": {
		     "!type": "[?]"
		    },
		    "equations": {
		     "!type": "[?]"
		    },
		    "visited": {}
		   }
		  },
		  "<anonymous>~World": {
		   "prototype": {
		    "springs": {},
		    "bodies": {
		     "!type": "[?]"
		    },
		    "solver": {
		     "!type": "+Solver"
		    },
		    "narrowphase": {},
		    "islandManager": {
		     "!type": "+IslandManager"
		    },
		    "gravity": {},
		    "frictionGravity": {
		     "!type": "number"
		    },
		    "useWorldGravityAsFrictionGravity": {
		     "!type": "bool"
		    },
		    "useFrictionGravityOnZeroGravity": {
		     "!type": "bool"
		    },
		    "broadphase": {},
		    "constraints": {},
		    "defaultMaterial": {
		     "!type": "+Material"
		    },
		    "defaultContactMaterial": {
		     "!type": "+ContactMaterial"
		    },
		    "lastTimeStep": {},
		    "applySpringForces": {},
		    "applyDamping": {},
		    "applyGravity": {},
		    "solveConstraints": {},
		    "contactMaterials": {},
		    "time": {},
		    "stepping": {
		     "!type": "bool"
		    },
		    "islandSplit": {
		     "!type": "bool"
		    },
		    "emitImpactEvent": {},
		    "sleepMode": {},
		    "overlapKeeper": {
		     "!type": "+OverlapKeeper"
		    }
		   },
		   "NO_SLEEPING": {
		    "!type": "number"
		   },
		   "BODY_SLEEPING": {
		    "!type": "number"
		   },
		   "ISLAND_SLEEPING": {
		    "!type": "number"
		   }
		  },
		  "p2": {
		   "Body": {
		    "prototype": {
		     "parent": {}
		    }
		   }
		  },
		  "PIXI": {
		   "DisplayObject": {
		    "!type": "fn()",
		    "prototype": {
		     "position": {},
		     "scale": {},
		     "transformCallback": {},
		     "transformCallbackContext": {},
		     "pivot": {},
		     "rotation": {},
		     "alpha": {},
		     "visible": {},
		     "hitArea": {},
		     "renderable": {},
		     "parent": {},
		     "stage": {},
		     "worldAlpha": {},
		     "worldPosition": {},
		     "worldScale": {},
		     "worldRotation": {},
		     "filterArea": {}
		    }
		   },
		   "DisplayObjectContainer": {
		    "!type": "fn()",
		    "prototype": {
		     "children": {}
		    }
		   },
		   "Sprite": {
		    "!type": "fn(texture: +Texture)",
		    "prototype": {
		     "anchor": {},
		     "texture": {},
		     "tint": {},
		     "tintedTexture": {},
		     "blendMode": {},
		     "shader": {}
		    }
		   },
		   "SpriteBatch": {
		    "!type": "fn(texture: +Texture)"
		   },
		   "Stage": {
		    "!type": "fn(backgroundColor: number)"
		   },
		   "Rope": {
		    "!type": "fn(texture: +Texture, points: [?])"
		   },
		   "Strip": {
		    "!type": "fn(texture: +Texture, width: number, height: number)",
		    "prototype": {
		     "texture": {},
		     "dirty": {},
		     "blendMode": {},
		     "canvasPadding": {}
		    },
		    "DrawModes": {}
		   },
		   "TilingSprite": {
		    "!type": "fn(texture: +Texture, width: number, height: number)",
		    "prototype": {
		     "_width": {},
		     "_height": {},
		     "tileScale": {},
		     "tileScaleOffset": {},
		     "tilePosition": {},
		     "renderable": {},
		     "tint": {},
		     "textureDebug": {},
		     "blendMode": {},
		     "canvasBuffer": {},
		     "tilingTexture": {},
		     "tilePattern": {},
		     "refreshTexture": {}
		    }
		   },
		   "AbstractFilter": {
		    "!type": "fn(fragmentSrc: [?], uniforms: ?)",
		    "prototype": {
		     "dirty": {},
		     "padding": {}
		    }
		   },
		   "GraphicsData": {
		    "!type": "fn(lineWidth: number, lineColor: number, lineAlpha: number, fillColor: number, fillAlpha: number, fill: bool, shape: +Circle|+Rectangle|+Ellipse|+Line|+Polygon)"
		   }
		  },
		  "module:PIXI": {
		   "PIXI": {
		    "!type": "fn()"
		   }
		  },
		  "module:PIXI~PIXI": {
		   "WEBGL_RENDERER": {
		    "!type": "number"
		   },
		   "CANVAS_RENDERER": {
		    "!type": "number"
		   },
		   "VERSION": {
		    "!type": "string"
		   },
		   "PI_2": {
		    "!type": "number"
		   },
		   "RAD_TO_DEG": {
		    "!type": "number"
		   },
		   "DEG_TO_RAD": {
		    "!type": "number"
		   },
		   "RETINA_PREFIX": {
		    "!type": "string"
		   },
		   "defaultRenderOptions": {},
		   "Graphics": {
		    "!type": "fn()",
		    "prototype": {
		     "fillAlpha": {},
		     "lineWidth": {},
		     "lineColor": {},
		     "tint": {},
		     "blendMode": {},
		     "isMask": {},
		     "boundsPadding": {}
		    }
		   },
		   "Graphics#containsPoint": {
		    "!type": "fn(point: +Point) -> bool"
		   },
		   "GraphicsData#clone": {
		    "!type": "fn() -> +GraphicsData"
		   },
		   "CanvasRenderer": {
		    "!type": "fn(width: number, height: number, options: ?)",
		    "prototype": {
		     "type": {},
		     "resolution": {},
		     "clearBeforeRender": {},
		     "transparent": {},
		     "autoResize": {},
		     "width": {},
		     "height": {},
		     "view": {},
		     "context": {},
		     "refresh": {},
		     "count": {},
		     "maskManager": {},
		     "renderSession": {}
		    }
		   },
		   "CanvasRenderer#renderSession": {
		    "roundPixels": {}
		   },
		   "CanvasBuffer": {
		    "!type": "fn(width: number, height: number)",
		    "prototype": {
		     "width": {},
		     "height": {},
		     "canvas": {},
		     "context": {}
		    }
		   },
		   "CanvasMaskManager": {
		    "!type": "fn()"
		   },
		   "CanvasTinter": {
		    "canHandleAlpha": {},
		    "canUseMultiply": {}
		   },
		   "ComplexPrimitiveShader": {
		    "!type": "fn(gl: +WebGLContext)",
		    "prototype": {
		     "gl": {},
		     "program": {},
		     "fragmentSrc": {},
		     "vertexSrc": {}
		    }
		   },
		   "PixiFastShader": {
		    "!type": "fn(gl: +WebGLContext)",
		    "prototype": {
		     "gl": {},
		     "program": {},
		     "fragmentSrc": {},
		     "vertexSrc": {},
		     "textureCount": {}
		    }
		   },
		   "PixiShader": {
		    "!type": "fn(gl: +WebGLContext)",
		    "prototype": {
		     "gl": {},
		     "program": {},
		     "fragmentSrc": {},
		     "textureCount": {},
		     "dirty": {}
		    }
		   },
		   "PixiShader.defaultVertexSrc": {},
		   "PrimitiveShader": {
		    "!type": "fn(gl: +WebGLContext)",
		    "prototype": {
		     "gl": {},
		     "program": {},
		     "fragmentSrc": {},
		     "vertexSrc": {}
		    }
		   },
		   "StripShader": {
		    "!type": "fn(gl: +WebGLContext)",
		    "prototype": {
		     "gl": {},
		     "program": {},
		     "fragmentSrc": {},
		     "vertexSrc": {}
		    }
		   },
		   "FilterTexture": {
		    "!type": "fn(gl: +WebGLContext, width: number, height: number, scaleMode: number)",
		    "prototype": {
		     "gl": {},
		     "frameBuffer": {},
		     "texture": {}
		    }
		   },
		   "WebGLBlendModeManager": {
		    "!type": "fn(gl: +WebGLContext)",
		    "prototype": {
		     "currentBlendMode": {}
		    }
		   },
		   "WebGLFastSpriteBatch": {
		    "!type": "fn()",
		    "prototype": {
		     "vertSize": {},
		     "maxSize": {},
		     "size": {},
		     "vertices": {},
		     "indices": {},
		     "vertexBuffer": {},
		     "indexBuffer": {},
		     "lastIndexCount": {},
		     "drawing": {},
		     "currentBatchSize": {},
		     "currentBaseTexture": {},
		     "currentBlendMode": {},
		     "renderSession": {},
		     "shader": {},
		     "matrix": {}
		    }
		   },
		   "WebGLFilterManager": {
		    "!type": "fn()",
		    "prototype": {
		     "filterStack": {},
		     "offsetX": {},
		     "offsetY": {}
		    }
		   },
		   "WebGLShaderManager": {
		    "prototype": {
		     "maxAttibs": {},
		     "attribState": {},
		     "tempAttribState": {},
		     "stack": {}
		    }
		   },
		   "WebGLSpriteBatch": {
		    "prototype": {
		     "vertSize": {},
		     "size": {},
		     "vertices": {},
		     "positions": {},
		     "colors": {},
		     "indices": {},
		     "lastIndexCount": {},
		     "drawing": {},
		     "currentBatchSize": {},
		     "currentBaseTexture": {},
		     "dirty": {},
		     "textures": {},
		     "blendModes": {},
		     "shaders": {},
		     "sprites": {},
		     "defaultShader": {}
		    }
		   },
		   "glContexts": {},
		   "WebGLRenderer": {
		    "!type": "fn(width: number, height: number, options: ?)",
		    "prototype": {
		     "type": {},
		     "resolution": {},
		     "transparent": {},
		     "autoResize": {},
		     "preserveDrawingBuffer": {},
		     "clearBeforeRender": {},
		     "width": {},
		     "height": {},
		     "view": {},
		     "projection": {},
		     "offset": {},
		     "shaderManager": {},
		     "spriteBatch": {},
		     "maskManager": {},
		     "filterManager": {},
		     "stencilManager": {},
		     "blendModeManager": {},
		     "renderSession": {}
		    }
		   },
		   "BaseTextureCache": {},
		   "BaseTexture": {
		    "!type": "fn(source: string, scaleMode: number)",
		    "prototype": {
		     "resolution": {},
		     "width": {},
		     "height": {},
		     "scaleMode": {},
		     "hasLoaded": {},
		     "source": {},
		     "premultipliedAlpha": {},
		     "mipmap": {},
		     "imageUrl": {}
		    }
		   },
		   "RenderTexture": {
		    "!type": "fn(width: number, height: number, renderer: +CanvasRenderer|+WebGLRenderer, scaleMode: number, resolution: number)",
		    "prototype": {
		     "width": {},
		     "height": {},
		     "resolution": {},
		     "frame": {},
		     "crop": {},
		     "baseTexture": {},
		     "renderer": {},
		     "valid": {}
		    }
		   },
		   "TextureCache": {},
		   "TextureSilentFail": {},
		   "Texture": {
		    "!type": "fn(baseTexture: +BaseTexture, frame: +Rectangle, crop: +Rectangle, trim: +Rectangle)",
		    "prototype": {
		     "noFrame": {},
		     "baseTexture": {},
		     "frame": {},
		     "trim": {},
		     "valid": {},
		     "isTiling": {},
		     "requiresUpdate": {},
		     "requiresReTint": {},
		     "width": {},
		     "height": {},
		     "crop": {}
		    }
		   },
		   "CanvasPool": {
		    "pool": {}
		   },
		   "EventTarget": {
		    "call": {
		     "!type": "fn()"
		    }
		   },
		   "Event": {
		    "!type": "fn(target: ?, name: string, data: ?)",
		    "prototype": {
		     "target": {},
		     "type": {},
		     "data": {},
		     "timeStamp": {}
		    }
		   }
		  }
		 }
});
