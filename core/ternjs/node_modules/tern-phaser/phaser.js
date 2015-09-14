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
		  "!name": "delite",
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
		     "_parent": {
		      "!type": "+Phaser.Sprite"
		     },
		     "_frameData": {
		      "!type": "+Phaser.FrameData"
		     },
		     "name": {
		      "!type": "string"
		     },
		     "_frames": {
		      "!type": "+array"
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
		     "_pauseStartTime": {
		      "!type": "bool"
		     },
		     "_frameIndex": {
		      "!type": "number"
		     },
		     "_frameDiff": {
		      "!type": "number"
		     },
		     "_frameSkip": {
		      "!type": "number"
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
		      "!type": "fn()"
		     },
		     "restart": {
		      "!type": "fn()"
		     },
		     "setFrame": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
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
		     "updateCurrentFrame": {
		      "!type": "fn()"
		     },
		     "next": {
		      "!type": "fn()"
		     },
		     "previous": {
		      "!type": "fn()"
		     },
		     "updateFrameData": {
		      "!type": "fn()"
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
		     "!type": "fn()"
		    }
		   },
		   "Animation#play": {
		    "prototype": {
		     "delay": {},
		     "loop": {},
		     "killOnComplete": {},
		     "isPlaying": {},
		     "isFinished": {},
		     "paused": {},
		     "loopCount": {},
		     "_timeLastFrame": {},
		     "_timeNextFrame": {},
		     "_frameIndex": {}
		    }
		   },
		   "Animation#play#_parent": {
		    "animations": {
		     "currentAnim": {},
		     "currentFrame": {}
		    }
		   },
		   "Animation#restart": {
		    "prototype": {
		     "isPlaying": {},
		     "isFinished": {},
		     "paused": {},
		     "loopCount": {},
		     "_timeLastFrame": {},
		     "_timeNextFrame": {},
		     "_frameIndex": {},
		     "currentFrame": {}
		    }
		   },
		   "Animation#restart#_parent": {
		    "animations": {
		     "currentAnim": {},
		     "currentFrame": {}
		    }
		   },
		   "Animation#setFrame": {
		    "prototype": {
		     "_frameIndex": {},
		     "_timeNextFrame": {}
		    }
		   },
		   "Animation#stop": {
		    "prototype": {
		     "isPlaying": {},
		     "isFinished": {},
		     "paused": {},
		     "currentFrame": {}
		    }
		   },
		   "Animation#onPause": {
		    "prototype": {
		     "_frameDiff": {}
		    }
		   },
		   "Animation#onResume": {
		    "prototype": {
		     "_timeNextFrame": {}
		    }
		   },
		   "Animation#update": {
		    "prototype": {
		     "_frameSkip": {},
		     "_frameDiff": {},
		     "_timeLastFrame": {},
		     "_timeNextFrame": {},
		     "_frameIndex": {},
		     "currentFrame": {}
		    }
		   },
		   "Animation#updateCurrentFrame": {
		    "prototype": {
		     "currentFrame": {}
		    }
		   },
		   "Animation#next": {
		    "prototype": {
		     "_frameIndex": {}
		    }
		   },
		   "Animation#previous": {
		    "prototype": {
		     "_frameIndex": {}
		    }
		   },
		   "Animation#updateFrameData": {
		    "prototype": {
		     "_frameData": {},
		     "currentFrame": {}
		    }
		   },
		   "Animation#destroy": {
		    "prototype": {
		     "game": {},
		     "_parent": {},
		     "_frames": {},
		     "_frameData": {},
		     "currentFrame": {},
		     "isPlaying": {}
		    }
		   },
		   "Animation#complete": {
		    "prototype": {
		     "_frameIndex": {},
		     "currentFrame": {},
		     "isPlaying": {},
		     "isFinished": {},
		     "paused": {}
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
		     "_frameData": {
		      "!type": "+Phaser.FrameData"
		     },
		     "_anims": {},
		     "_outputFrames": {},
		     "loadFrameData": {
		      "!type": "fn()"
		     },
		     "copyFrameData": {
		      "!type": "fn()"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "validateFrames": {
		      "!type": "fn()"
		     },
		     "play": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "next": {
		      "!type": "fn()"
		     },
		     "previous": {
		      "!type": "fn()"
		     },
		     "getAnimation": {
		      "!type": "fn()"
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
		   "AnimationManager#loadFrameData": {
		    "prototype": {
		     "_frameData": {},
		     "frame": {},
		     "frameName": {},
		     "isLoaded": {}
		    }
		   },
		   "AnimationManager#copyFrameData": {
		    "prototype": {
		     "_frameData": {},
		     "frame": {},
		     "frameName": {},
		     "isLoaded": {}
		    }
		   },
		   "AnimationManager#add": {
		    "prototype": {
		     "_outputFrames": {},
		     "_anims[undefined]": {},
		     "currentAnim": {}
		    }
		   },
		   "AnimationManager#add#sprite": {
		    "refreshTexture": {}
		   },
		   "AnimationManager#play#currentAnim": {
		    "paused": {}
		   },
		   "AnimationManager#play": {
		    "prototype": {
		     "currentAnim": {},
		     "currentFrame": {}
		    }
		   },
		   "AnimationManager#stop": {
		    "prototype": {
		     "currentAnim": {}
		    }
		   },
		   "AnimationManager#update": {
		    "prototype": {
		     "currentFrame": {}
		    }
		   },
		   "AnimationManager#next": {
		    "prototype": {
		     "currentFrame": {}
		    }
		   },
		   "AnimationManager#previous": {
		    "prototype": {
		     "currentFrame": {}
		    }
		   },
		   "AnimationManager#destroy": {
		    "prototype": {
		     "_anims": {},
		     "_outputFrames": {},
		     "_frameData": {},
		     "currentAnim": {},
		     "currentFrame": {},
		     "sprite": {},
		     "game": {}
		    }
		   },
		   "AnimationParser": {
		    "!type": "fn()",
		    "spriteSheet": {
		     "!type": "fn()"
		    },
		    "JSONData": {
		     "!type": "fn()"
		    },
		    "JSONDataHash": {
		     "!type": "fn()"
		    },
		    "XMLData": {
		     "!type": "fn()"
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
		      "!type": "fn()"
		     },
		     "setTrim": {
		      "!type": "fn()"
		     },
		     "clone": {
		      "!type": "fn()"
		     },
		     "getRect": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Frame#resize": {
		    "prototype": {
		     "width": {},
		     "height": {},
		     "centerX": {},
		     "centerY": {},
		     "distance": {},
		     "sourceSizeW": {},
		     "sourceSizeH": {},
		     "right": {},
		     "bottom": {}
		    }
		   },
		   "Frame#setTrim": {
		    "prototype": {
		     "trimmed": {},
		     "sourceSizeW": {},
		     "sourceSizeH": {},
		     "centerX": {},
		     "centerY": {},
		     "spriteSourceSizeX": {},
		     "spriteSourceSizeY": {},
		     "spriteSourceSizeW": {},
		     "spriteSourceSizeH": {}
		    }
		   },
		   "Frame#clone~output": {
		    "undefined]": {}
		   },
		   "FrameData": {
		    "!type": "fn()",
		    "prototype": {
		     "_frames": {
		      "!type": "[?]"
		     },
		     "_frameNames": {
		      "!type": "[?]"
		     },
		     "addFrame": {
		      "!type": "fn()"
		     },
		     "getFrame": {
		      "!type": "fn()"
		     },
		     "getFrameByName": {
		      "!type": "fn()"
		     },
		     "checkFrameName": {
		      "!type": "fn()"
		     },
		     "clone": {
		      "!type": "fn()"
		     },
		     "getFrameRange": {
		      "!type": "fn()"
		     },
		     "getFrames": {
		      "!type": "fn()"
		     },
		     "getFrameIndexes": {
		      "!type": "fn()"
		     },
		     "total": {
		      "!type": "number"
		     }
		    }
		   },
		   "FrameData#addFrame": {
		    "prototype": {
		     "_frameNames[undefined]": {}
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
		     "_targetPosition": {
		      "!type": "+Phaser.Point"
		     },
		     "_edge": {
		      "!type": "number"
		     },
		     "_position": {
		      "!type": "+Phaser.Point"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "follow": {
		      "!type": "fn()"
		     },
		     "unfollow": {
		      "!type": "fn()"
		     },
		     "focusOn": {
		      "!type": "fn()"
		     },
		     "focusOnXY": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "updateTarget": {
		      "!type": "fn()"
		     },
		     "setBoundsToWorld": {
		      "!type": "fn()"
		     },
		     "checkBounds": {
		      "!type": "fn()"
		     },
		     "setPosition": {
		      "!type": "fn()"
		     },
		     "setSize": {
		      "!type": "fn()"
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
		   "Camera#atLimit": {
		    "x": {},
		    "y": {}
		   },
		   "Camera#preUpdate": {
		    "prototype": {
		     "totalInView": {}
		    }
		   },
		   "Camera#follow": {
		    "prototype": {
		     "target": {},
		     "deadzone": {}
		    }
		   },
		   "Camera#unfollow": {
		    "prototype": {
		     "target": {}
		    }
		   },
		   "Camera#update#displayObject": {
		    "position": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Camera#updateTarget": {
		    "prototype": {
		     "_edge": {}
		    }
		   },
		   "Camera#updateTarget#view": {
		    "x": {},
		    "y": {}
		   },
		   "Camera#checkBounds#atLimit": {
		    "x": {},
		    "y": {}
		   },
		   "Camera#checkBounds#view": {
		    "x": {},
		    "y": {}
		   },
		   "Camera#setPosition#view": {
		    "x": {},
		    "y": {}
		   },
		   "Camera#setSize#view": {
		    "width": {},
		    "height": {}
		   },
		   "Camera#reset": {
		    "prototype": {
		     "target": {}
		    }
		   },
		   "Camera#reset#view": {
		    "x": {},
		    "y": {}
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
		      "!type": "fn()"
		     },
		     "grid": {
		      "!type": "fn()"
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
		   "Create#texture#ctx": {
		    "fillStyle": {}
		   },
		   "Create#grid#ctx": {
		    "fillStyle": {}
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
		     "passes": {
		      "!type": "+array"
		     },
		     "shaders": {
		      "!type": "+array"
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
		     "uniforms[undefined]": {},
		     "fragmentSrc": {
		      "!type": "+array|string"
		     },
		     "init": {
		      "!type": "fn()"
		     },
		     "setResolution": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
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
		   "Filter#uniforms": {
		    "resolution": {
		     "type": {},
		     "value": {
		      "x": {},
		      "y": {}
		     }
		    },
		    "time": {
		     "type": {},
		     "value": {}
		    },
		    "mouse": {
		     "type": {},
		     "value": {
		      "x": {},
		      "y": {}
		     }
		    },
		    "date": {
		     "type": {},
		     "value": {}
		    },
		    "sampleRate": {
		     "type": {},
		     "value": {}
		    },
		    "iChannel0": {
		     "type": {},
		     "value": {},
		     "textureData": {
		      "repeat": {}
		     }
		    },
		    "iChannel1": {
		     "type": {},
		     "value": {},
		     "textureData": {
		      "repeat": {}
		     }
		    },
		    "iChannel2": {
		     "type": {},
		     "value": {},
		     "textureData": {
		      "repeat": {}
		     }
		    },
		    "iChannel3": {
		     "type": {},
		     "value": {},
		     "textureData": {
		      "repeat": {}
		     }
		    }
		   },
		   "Filter#setResolution#uniforms": {
		    "resolution": {
		     "value": {
		      "x": {},
		      "y": {}
		     }
		    }
		   },
		   "Filter#update#uniforms": {
		    "mouse": {
		     "value": {
		      "x": {},
		      "y": {}
		     }
		    },
		    "time": {
		     "value": {}
		    }
		   },
		   "Filter#destroy": {
		    "prototype": {
		     "game": {}
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
		     "width": {},
		     "height": {},
		     "boundsCustom": {},
		     "boundsFluid": {},
		     "boundsFull": {},
		     "boundsNone": {},
		     "positionCustom": {
		      "!type": "+Phaser.Point"
		     },
		     "positionFluid": {},
		     "positionFull": {},
		     "positionNone": {},
		     "scaleCustom": {
		      "!type": "+Phaser.Point"
		     },
		     "scaleFluid": {},
		     "scaleFluidInversed": {},
		     "scaleFull": {},
		     "scaleNone": {},
		     "customWidth": {},
		     "customHeight": {},
		     "customOffsetX": {},
		     "customOffsetY": {},
		     "ratioH": {},
		     "ratioV": {},
		     "multiplier": {},
		     "layers": {},
		     "setSize": {
		      "!type": "fn()"
		     },
		     "createCustomLayer": {
		      "!type": "fn()"
		     },
		     "createFluidLayer": {
		      "!type": "fn()"
		     },
		     "createFullLayer": {
		      "!type": "fn()"
		     },
		     "createFixedLayer": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "onResize": {
		      "!type": "fn()"
		     },
		     "refresh": {
		      "!type": "fn()"
		     },
		     "fitSprite": {
		      "!type": "fn()"
		     },
		     "debug": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "FlexGrid#setSize": {
		    "prototype": {
		     "width": {},
		     "height": {},
		     "ratioH": {},
		     "ratioV": {},
		     "scaleNone": {}
		    }
		   },
		   "FlexGrid#setSize#boundsNone": {
		    "width": {},
		    "height": {}
		   },
		   "FlexGrid#createCustomLayer": {
		    "prototype": {
		     "customWidth": {},
		     "customHeight": {}
		    }
		   },
		   "FlexGrid#createCustomLayer#boundsCustom": {
		    "width": {},
		    "height": {}
		   },
		   "FlexGrid#reset#layers[undefined]": {
		    "position": {},
		    "scale": {}
		   },
		   "FlexGrid#onResize": {
		    "prototype": {
		     "ratioH": {},
		     "ratioV": {}
		    }
		   },
		   "FlexGrid#refresh": {
		    "prototype": {
		     "multiplier": {}
		    }
		   },
		   "FlexGrid#refresh#boundsFluid": {
		    "width": {},
		    "height": {}
		   },
		   "FlexGrid#refresh#boundsFull": {
		    "width": {},
		    "height": {}
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
		     "_sortProperty": {
		      "!type": "string"
		     },
		     "add": {
		      "!type": "fn(child: +DisplayObject, silent: bool) -> ?"
		     },
		     "addToHash": {
		      "!type": "fn(child: +DisplayObject) -> ?"
		     },
		     "removeFromHash": {
		      "!type": "fn(child: +DisplayObject) -> ?"
		     },
		     "addMultiple": {
		      "!type": "fn(children: [?]|+Phaser.Group, silent: bool) -> ?"
		     },
		     "addAt": {
		      "!type": "fn(child: +DisplayObject, index: number, silent: bool) -> ?"
		     },
		     "getAt": {
		      "!type": "fn(index: number) -> ?"
		     },
		     "create": {
		      "!type": "fn(x: number, y: number, key: string, frame: number|string, exists: bool) -> ?"
		     },
		     "createMultiple": {
		      "!type": "fn(quantity: number, key: string, frame: number|string, exists: bool)"
		     },
		     "updateZ": {
		      "!type": "fn()"
		     },
		     "resetCursor": {
		      "!type": "fn(index: number) -> ?"
		     },
		     "next": {
		      "!type": "fn() -> ?"
		     },
		     "previous": {
		      "!type": "fn() -> ?"
		     },
		     "swap": {
		      "!type": "fn(child1: +any, child2: +any)"
		     },
		     "bringToTop": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "sendToBack": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "moveUp": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "moveDown": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "xy": {
		      "!type": "fn(index: number, x: number, y: number)"
		     },
		     "reverse": {
		      "!type": "fn()"
		     },
		     "getIndex": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "replace": {
		      "!type": "fn(oldChild: +any, newChild: +any) -> ?"
		     },
		     "hasProperty": {
		      "!type": "fn(child: +any, key: [?]) -> ?"
		     },
		     "setProperty": {
		      "!type": "fn(child: +any, key: +array, value: +any, operation: number, force: bool) -> ?"
		     },
		     "checkProperty": {
		      "!type": "fn(child: +any, key: +array, value: +any, force: bool) -> ?"
		     },
		     "set": {
		      "!type": "fn(child: +Phaser.Sprite, key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool) -> ?"
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
		      "!type": "fn(predicate: +function, checkExists: bool) -> ?"
		     },
		     "forEach": {
		      "!type": "fn(callback: +function, callbackContext: ?, checkExists: bool, args: +any)"
		     },
		     "forEachExists": {
		      "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		     },
		     "forEachAlive": {
		      "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		     },
		     "forEachDead": {
		      "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		     },
		     "sort": {
		      "!type": "fn(key: string, order: number)"
		     },
		     "customSort": {
		      "!type": "fn(sortHandler: +function, context: ?)"
		     },
		     "ascendingSortHandler": {
		      "!type": "fn(a: ?, b: ?)"
		     },
		     "descendingSortHandler": {
		      "!type": "fn(a: ?, b: ?)"
		     },
		     "iterate": {
		      "!type": "fn(key: string, value: +any, returnType: number, callback: +function, callbackContext: ?, args: [?]) -> ?"
		     },
		     "getFirstExists": {
		      "!type": "fn(exists: bool) -> ?"
		     },
		     "getFirstAlive": {
		      "!type": "fn() -> ?"
		     },
		     "getFirstDead": {
		      "!type": "fn() -> ?"
		     },
		     "getTop": {
		      "!type": "fn() -> ?"
		     },
		     "getBottom": {
		      "!type": "fn() -> ?"
		     },
		     "countLiving": {
		      "!type": "fn() -> ?"
		     },
		     "countDead": {
		      "!type": "fn() -> ?"
		     },
		     "getRandom": {
		      "!type": "fn(startIndex: number, length: number) -> ?"
		     },
		     "remove": {
		      "!type": "fn(child: +any, destroy: bool, silent: bool) -> ?"
		     },
		     "moveAll": {
		      "!type": "fn(group: +Phaser.Group, silent: bool) -> ?"
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
		     "_width": {
		      "!type": "number"
		     },
		     "_height": {
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
		     "_paused": {
		      "!type": "bool"
		     },
		     "_codePaused": {
		      "!type": "bool"
		     },
		     "currentUpdateID": {
		      "!type": "number"
		     },
		     "updatesThisFrame": {
		      "!type": "number"
		     },
		     "_deltaTime": {
		      "!type": "number"
		     },
		     "_lastCount": {
		      "!type": "number"
		     },
		     "_spiraling": {
		      "!type": "number"
		     },
		     "_kickstart": {
		      "!type": "bool"
		     },
		     "fpsProblemNotifier": {
		      "!type": "+Phaser.Signal"
		     },
		     "forceSingleUpdate": {
		      "!type": "bool"
		     },
		     "_nextFpsNotification": {
		      "!type": "number"
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
		     "contextLost": {
		      "!type": "fn()"
		     },
		     "contextRestored": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "updateLogic": {
		      "!type": "fn()"
		     },
		     "updateRender": {
		      "!type": "fn()"
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
		      "!type": "fn()"
		     },
		     "gameResumed": {
		      "!type": "fn()"
		     },
		     "focusLoss": {
		      "!type": "fn()"
		     },
		     "focusGain": {
		      "!type": "fn()"
		     },
		     "paused": {
		      "!type": "bool"
		     }
		    }
		   },
		   "Game#config": {
		    "enableDebug": {}
		   },
		   "Game#parseConfig": {
		    "prototype": {
		     "config": {},
		     "_width": {},
		     "_height": {},
		     "renderType": {},
		     "parent": {},
		     "transparent": {},
		     "antialias": {},
		     "resolution": {},
		     "preserveDrawingBuffer": {},
		     "physicsConfig": {},
		     "rnd": {},
		     "state": {}
		    }
		   },
		   "Game#parseConfig#config": {
		    "enableDebug": {}
		   },
		   "Game#boot": {
		    "prototype": {
		     "onPause": {},
		     "onResume": {},
		     "onBlur": {},
		     "onFocus": {},
		     "isBooted": {},
		     "math": {},
		     "scale": {},
		     "stage": {},
		     "world": {},
		     "add": {},
		     "make": {},
		     "cache": {},
		     "load": {},
		     "time": {},
		     "tweens": {},
		     "input": {},
		     "sound": {},
		     "physics": {},
		     "particles": {},
		     "create": {},
		     "plugins": {},
		     "net": {},
		     "debug": {},
		     "isRunning": {},
		     "raf": {},
		     "_kickstart": {}
		    }
		   },
		   "Game#boot#debug": {
		    "preUpdate": {
		     "!type": "fn()"
		    },
		    "update": {
		     "!type": "fn()"
		    },
		    "reset": {
		     "!type": "fn()"
		    }
		   },
		   "Game#setUpRenderer": {
		    "prototype": {
		     "canvas": {},
		     "renderType": {},
		     "renderer": {},
		     "context": {}
		    }
		   },
		   "Game#setUpRenderer#canvas": {
		    "style": {
		     "'-webkit-full-screen'": {}
		    },
		    "screencanvas": {}
		   },
		   "Game#setUpRenderer#stage": {
		    "smoothed": {}
		   },
		   "Game#contextLost#renderer": {
		    "contextLost": {}
		   },
		   "Game#contextRestored#renderer": {
		    "contextLost": {}
		   },
		   "Game#update": {
		    "prototype": {
		     "_kickstart": {},
		     "_nextFpsNotification": {},
		     "_deltaTime": {},
		     "_spiraling": {},
		     "updatesThisFrame": {},
		     "currentUpdateID": {},
		     "_lastCount": {}
		    }
		   },
		   "Game#updateLogic": {
		    "prototype": {
		     "pendingStep": {}
		    }
		   },
		   "Game#enableStep": {
		    "prototype": {
		     "stepping": {},
		     "pendingStep": {},
		     "stepCount": {}
		    }
		   },
		   "Game#disableStep": {
		    "prototype": {
		     "stepping": {},
		     "pendingStep": {}
		    }
		   },
		   "Game#step": {
		    "prototype": {
		     "pendingStep": {}
		    }
		   },
		   "Game#destroy": {
		    "prototype": {
		     "state": {},
		     "cache": {},
		     "input": {},
		     "load": {},
		     "sound": {},
		     "stage": {},
		     "time": {},
		     "world": {},
		     "isBooted": {}
		    }
		   },
		   "GAMES[undefined]": {},
		   "Game#gamePaused": {
		    "prototype": {
		     "_paused": {},
		     "lockRender": {}
		    }
		   },
		   "Game#gameResumed": {
		    "prototype": {
		     "_paused": {},
		     "lockRender": {}
		    }
		   },
		   "Group": {
		    "!type": "fn()",
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
		     "_sortProperty": {
		      "!type": "string"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "addToHash": {
		      "!type": "fn()"
		     },
		     "removeFromHash": {
		      "!type": "fn()"
		     },
		     "addMultiple": {
		      "!type": "fn()"
		     },
		     "addAt": {
		      "!type": "fn()"
		     },
		     "getAt": {
		      "!type": "fn()"
		     },
		     "create": {
		      "!type": "fn()"
		     },
		     "createMultiple": {
		      "!type": "fn()"
		     },
		     "updateZ": {
		      "!type": "fn()"
		     },
		     "resetCursor": {
		      "!type": "fn()"
		     },
		     "next": {
		      "!type": "fn()"
		     },
		     "previous": {
		      "!type": "fn()"
		     },
		     "swap": {
		      "!type": "fn()"
		     },
		     "bringToTop": {
		      "!type": "fn()"
		     },
		     "sendToBack": {
		      "!type": "fn()"
		     },
		     "moveUp": {
		      "!type": "fn()"
		     },
		     "moveDown": {
		      "!type": "fn()"
		     },
		     "xy": {
		      "!type": "fn()"
		     },
		     "reverse": {
		      "!type": "fn()"
		     },
		     "getIndex": {
		      "!type": "fn()"
		     },
		     "replace": {
		      "!type": "fn()"
		     },
		     "hasProperty": {
		      "!type": "fn()"
		     },
		     "setProperty": {
		      "!type": "fn()"
		     },
		     "checkProperty": {
		      "!type": "fn()"
		     },
		     "set": {
		      "!type": "fn()"
		     },
		     "setAll": {
		      "!type": "fn()"
		     },
		     "setAllChildren": {
		      "!type": "fn()"
		     },
		     "checkAll": {
		      "!type": "fn()"
		     },
		     "addAll": {
		      "!type": "fn()"
		     },
		     "subAll": {
		      "!type": "fn()"
		     },
		     "multiplyAll": {
		      "!type": "fn()"
		     },
		     "divideAll": {
		      "!type": "fn()"
		     },
		     "callAllExists": {
		      "!type": "fn()"
		     },
		     "callbackFromArray": {
		      "!type": "fn()"
		     },
		     "callAll": {
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
		     "filter": {
		      "!type": "fn()"
		     },
		     "forEach": {
		      "!type": "fn()"
		     },
		     "forEachExists": {
		      "!type": "fn()"
		     },
		     "forEachAlive": {
		      "!type": "fn()"
		     },
		     "forEachDead": {
		      "!type": "fn()"
		     },
		     "sort": {
		      "!type": "fn()"
		     },
		     "customSort": {
		      "!type": "fn()"
		     },
		     "ascendingSortHandler": {
		      "!type": "fn()"
		     },
		     "descendingSortHandler": {
		      "!type": "fn()"
		     },
		     "iterate": {
		      "!type": "fn()"
		     },
		     "getFirstExists": {
		      "!type": "fn()"
		     },
		     "getFirstAlive": {
		      "!type": "fn()"
		     },
		     "getFirstDead": {
		      "!type": "fn()"
		     },
		     "getTop": {
		      "!type": "fn()"
		     },
		     "getBottom": {
		      "!type": "fn()"
		     },
		     "countLiving": {
		      "!type": "fn()"
		     },
		     "countDead": {
		      "!type": "fn()"
		     },
		     "getRandom": {
		      "!type": "fn()"
		     },
		     "remove": {
		      "!type": "fn()"
		     },
		     "moveAll": {
		      "!type": "fn()"
		     },
		     "removeAll": {
		      "!type": "fn()"
		     },
		     "removeBetween": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
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
		   "Group#add": {
		    "prototype": {
		     "cursor": {}
		    }
		   },
		   "Group#addAt": {
		    "prototype": {
		     "cursor": {}
		    }
		   },
		   "Group#create~child": {
		    "exists": {},
		    "visible": {},
		    "alive": {},
		    "z": {}
		   },
		   "Group#create": {
		    "prototype": {
		     "cursor": {}
		    }
		   },
		   "Group#updateZ#children[undefined]": {
		    "z": {}
		   },
		   "Group#resetCursor": {
		    "prototype": {
		     "cursorIndex": {},
		     "cursor": {}
		    }
		   },
		   "Group#next": {
		    "prototype": {
		     "cursorIndex": {},
		     "cursor": {}
		    }
		   },
		   "Group#previous": {
		    "prototype": {
		     "cursorIndex": {},
		     "cursor": {}
		    }
		   },
		   "Group#xy~": {
		    "x": {},
		    "y": {}
		   },
		   "Group#preUpdate": {
		    "prototype": {
		     "renderOrderID": {}
		    }
		   },
		   "Group#postUpdate": {
		    "prototype": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Group#forEach~args": {
		    "0]": {}
		   },
		   "Group#sort": {
		    "prototype": {
		     "_sortProperty": {}
		    }
		   },
		   "Group#moveAll": {
		    "prototype": {
		     "hash": {},
		     "cursor": {}
		    }
		   },
		   "Group#removeAll": {
		    "prototype": {
		     "hash": {},
		     "cursor": {}
		    }
		   },
		   "Group#removeBetween": {
		    "prototype": {
		     "cursor": {}
		    }
		   },
		   "Group#destroy": {
		    "prototype": {
		     "cursor": {},
		     "filters": {},
		     "pendingDestroy": {},
		     "game": {},
		     "exists": {}
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
		   "Plugin#destroy": {
		    "prototype": {
		     "game": {},
		     "parent": {},
		     "active": {},
		     "visible": {}
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
		     "_len": {
		      "!type": "number"
		     },
		     "_i": {
		      "!type": "number"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "remove": {
		      "!type": "fn()"
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
		   "PluginManager#add~plugin": {
		    "game": {},
		    "parent": {},
		    "hasPreUpdate": {},
		    "hasUpdate": {},
		    "hasPostUpdate": {},
		    "hasRender": {},
		    "hasPostRender": {},
		    "active": {},
		    "visible": {}
		   },
		   "PluginManager#add": {
		    "prototype": {
		     "_len": {}
		    }
		   },
		   "PluginManager#remove": {
		    "prototype": {
		     "_i": {}
		    }
		   },
		   "PluginManager#removeAll": {
		    "prototype": {
		     "_i": {},
		     "_len": {}
		    }
		   },
		   "PluginManager#removeAll#plugins": {
		    "length": {}
		   },
		   "PluginManager#preUpdate": {
		    "prototype": {
		     "_i": {}
		    }
		   },
		   "PluginManager#update": {
		    "prototype": {
		     "_i": {}
		    }
		   },
		   "PluginManager#postUpdate": {
		    "prototype": {
		     "_i": {}
		    }
		   },
		   "PluginManager#render": {
		    "prototype": {
		     "_i": {}
		    }
		   },
		   "PluginManager#postRender": {
		    "prototype": {
		     "_i": {}
		    }
		   },
		   "PluginManager#destroy": {
		    "prototype": {
		     "game": {}
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
		     "_pageAlignHorizontally": {
		      "!type": "bool"
		     },
		     "_pageAlignVertically": {
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
		     "_createdFullScreenTarget": {
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
		     "event": {
		      "!type": "+any"
		     },
		     "windowConstraints": {
		      "!type": "string"
		     },
		     "compatibility": {
		      "!type": "bool"
		     },
		     "_scaleMode": {
		      "!type": "number"
		     },
		     "_fullScreenScaleMode": {},
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
		     "onResize": {
		      "!type": "+function"
		     },
		     "onResizeContext": {},
		     "_pendingScaleMode": {
		      "!type": "number"
		     },
		     "_fullScreenRestore": {},
		     "_gameSize": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_userScaleFactor": {
		      "!type": "+Phaser.Point"
		     },
		     "_userScaleTrim": {
		      "!type": "+Phaser.Point"
		     },
		     "_lastUpdate": {
		      "!type": "number"
		     },
		     "_updateThrottle": {
		      "!type": "number"
		     },
		     "_updateThrottleReset": {
		      "!type": "number"
		     },
		     "_parentBounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_tempBounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_lastReportedCanvasSize": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_lastReportedGameSize": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_booted": {
		      "!type": "bool"
		     },
		     "boot": {
		      "!type": "fn()"
		     },
		     "parseConfig": {
		      "!type": "fn()"
		     },
		     "setupScale": {
		      "!type": "fn()"
		     },
		     "_gameResumed": {
		      "!type": "fn()"
		     },
		     "setGameSize": {
		      "!type": "fn()"
		     },
		     "setUserScale": {
		      "!type": "fn()"
		     },
		     "setResizeCallback": {
		      "!type": "fn()"
		     },
		     "signalSizeChange": {
		      "!type": "fn()"
		     },
		     "setMinMax": {
		      "!type": "fn()"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "pauseUpdate": {
		      "!type": "fn()"
		     },
		     "updateDimensions": {
		      "!type": "fn()"
		     },
		     "updateScalingAndBounds": {
		      "!type": "fn()"
		     },
		     "forceOrientation": {
		      "!type": "fn()"
		     },
		     "classifyOrientation": {
		      "!type": "fn()"
		     },
		     "updateOrientationState": {
		      "!type": "fn()"
		     },
		     "orientationChange": {
		      "!type": "fn()"
		     },
		     "windowResize": {
		      "!type": "fn()"
		     },
		     "scrollTop": {
		      "!type": "fn()"
		     },
		     "refresh": {
		      "!type": "fn()"
		     },
		     "updateLayout": {
		      "!type": "fn()"
		     },
		     "getParentBounds": {
		      "!type": "fn()"
		     },
		     "alignCanvas": {
		      "!type": "fn()"
		     },
		     "reflowGame": {
		      "!type": "fn()"
		     },
		     "reflowCanvas": {
		      "!type": "fn()"
		     },
		     "resetCanvas": {
		      "!type": "fn()"
		     },
		     "queueUpdate": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "setMaximum": {
		      "!type": "fn()"
		     },
		     "setShowAll": {
		      "!type": "fn()"
		     },
		     "setExactFit": {
		      "!type": "fn()"
		     },
		     "createFullScreenTarget": {
		      "!type": "fn()"
		     },
		     "startFullScreen": {
		      "!type": "fn()"
		     },
		     "stopFullScreen": {
		      "!type": "fn()"
		     },
		     "cleanupCreatedTarget": {
		      "!type": "fn()"
		     },
		     "prepScreenMode": {
		      "!type": "fn()"
		     },
		     "fullScreenChange": {
		      "!type": "fn()"
		     },
		     "fullScreenError": {
		      "!type": "fn()"
		     },
		     "scaleSprite": {
		      "!type": "fn()"
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
		   "ScaleManager#margin": {
		    "left": {},
		    "top": {},
		    "right": {},
		    "bottom": {},
		    "x": {},
		    "y": {}
		   },
		   "ScaleManager#windowConstraints": {
		    "right": {},
		    "bottom": {}
		   },
		   "ScaleManager#compatibility": {
		    "supportsFullScreen": {},
		    "orientationFallback": {},
		    "noMargins": {},
		    "scrollTo": {},
		    "forceMinimumDocumentHeight": {},
		    "canExpandParent": {},
		    "clickTrampoline": {}
		   },
		   "ScaleManager#boot~compat": {
		    "supportsFullScreen": {},
		    "scrollTo": {},
		    "orientationFallback": {},
		    "clickTrampoline": {}
		   },
		   "ScaleManager#boot": {
		    "prototype": {
		     "_orientationChange": {
		      "!type": "fn()"
		     },
		     "_windowResize": {
		      "!type": "fn()"
		     },
		     "_fullScreenChange": {
		      "!type": "fn()"
		     },
		     "_fullScreenError": {
		      "!type": "fn()"
		     },
		     "screenOrientation": {},
		     "grid": {},
		     "_booted": {},
		     "scaleMode": {},
		     "_pendingScaleMode": {}
		    }
		   },
		   "ScaleManager#parseConfig": {
		    "prototype": {
		     "scaleMode": {},
		     "_pendingScaleMode": {},
		     "fullScreenScaleMode": {},
		     "fullScreenTarget": {}
		    }
		   },
		   "ScaleManager#setupScale": {
		    "prototype": {
		     "parentNode": {},
		     "parentIsWindow": {}
		    }
		   },
		   "ScaleManager#setupScale~rect": {
		    "width": {},
		    "height": {}
		   },
		   "ScaleManager#setupScale#parentScaleFactor": {
		    "x": {},
		    "y": {}
		   },
		   "ScaleManager#setResizeCallback": {
		    "prototype": {
		     "onResize": {},
		     "onResizeContext": {}
		    }
		   },
		   "ScaleManager#setMinMax": {
		    "prototype": {
		     "minWidth": {},
		     "minHeight": {},
		     "maxWidth": {},
		     "maxHeight": {}
		    }
		   },
		   "ScaleManager#preUpdate": {
		    "prototype": {
		     "_updateThrottleReset": {},
		     "_updateThrottle": {},
		     "_lastUpdate": {}
		    }
		   },
		   "ScaleManager#pauseUpdate": {
		    "prototype": {
		     "_updateThrottle": {}
		    }
		   },
		   "ScaleManager#updateDimensions": {
		    "prototype": {
		     "width": {},
		     "height": {},
		     "sourceAspectRatio": {}
		    }
		   },
		   "ScaleManager#updateDimensions#game": {
		    "width": {},
		    "height": {}
		   },
		   "ScaleManager#updateScalingAndBounds#scaleFactor": {
		    "x": {},
		    "y": {}
		   },
		   "ScaleManager#updateScalingAndBounds#scaleFactorInversed": {
		    "x": {},
		    "y": {}
		   },
		   "ScaleManager#updateScalingAndBounds": {
		    "prototype": {
		     "aspectRatio": {}
		    }
		   },
		   "ScaleManager#forceOrientation": {
		    "prototype": {
		     "forceLandscape": {},
		     "forcePortrait": {}
		    }
		   },
		   "ScaleManager#updateOrientationState": {
		    "prototype": {
		     "screenOrientation": {},
		     "incorrectOrientation": {}
		    }
		   },
		   "ScaleManager#orientationChange": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "ScaleManager#windowResize": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "ScaleManager#updateLayout": {
		    "prototype": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "ScaleManager#getParentBounds~bounds": {
		    "right": {},
		    "bottom": {}
		   },
		   "ScaleManager#alignCanvas~margin": {
		    "left": {},
		    "right": {},
		    "top": {},
		    "bottom": {},
		    "x": {},
		    "y": {}
		   },
		   "ScaleManager#alignCanvas~canvas": {
		    "style.marginLeft": {},
		    "style.marginRight": {},
		    "style.marginTop": {},
		    "style.marginBottom": {}
		   },
		   "ScaleManager#reflowCanvas": {
		    "prototype": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "ScaleManager#resetCanvas~canvas": {
		    "style.marginLeft": {},
		    "style.marginTop": {},
		    "style.marginRight": {},
		    "style.marginBottom": {},
		    "style.width": {},
		    "style.height": {}
		   },
		   "ScaleManager#queueUpdate#_parentBounds": {
		    "width": {},
		    "height": {}
		   },
		   "ScaleManager#queueUpdate": {
		    "prototype": {
		     "_updateThrottle": {}
		    }
		   },
		   "ScaleManager#setMaximum": {
		    "prototype": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "ScaleManager#setShowAll": {
		    "prototype": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "ScaleManager#setExactFit": {
		    "prototype": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "ScaleManager#createFullScreenTarget~fsTarget": {
		    "style.margin": {},
		    "style.padding": {},
		    "style.background": {}
		   },
		   "ScaleManager#startFullScreen#game": {
		    "stage": {
		     "smoothed": {}
		    }
		   },
		   "ScaleManager#startFullScreen": {
		    "prototype": {
		     "_createdFullScreenTarget": {}
		    }
		   },
		   "ScaleManager#startFullScreen~initData": {
		    "targetElement": {}
		   },
		   "ScaleManager#cleanupCreatedTarget": {
		    "prototype": {
		     "_createdFullScreenTarget": {}
		    }
		   },
		   "ScaleManager#prepScreenMode": {
		    "prototype": {
		     "_fullScreenRestore": {}
		    }
		   },
		   "ScaleManager#prepScreenMode#_fullScreenRestore": {
		    "targetWidth": {},
		    "targetHeight": {}
		   },
		   "ScaleManager#prepScreenMode~fsTarget": {
		    "style.width": {},
		    "style.height": {}
		   },
		   "ScaleManager#fullScreenChange": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "ScaleManager#fullScreenError": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "Signal": {
		    "!type": "fn()",
		    "prototype": {
		     "_bindings": {
		      "!type": "[?]"
		     },
		     "_prevParams": {
		      "!type": "+any"
		     },
		     "memorize": {
		      "!type": "bool"
		     },
		     "_shouldPropagate": {
		      "!type": "bool"
		     },
		     "active": {
		      "!type": "bool"
		     },
		     "_boundDispatch": {
		      "!type": "+function"
		     },
		     "validateListener": {
		      "!type": "fn()"
		     },
		     "_registerListener": {
		      "!type": "fn()"
		     },
		     "_addBinding": {
		      "!type": "fn()"
		     },
		     "_indexOfListener": {
		      "!type": "fn()"
		     },
		     "has": {
		      "!type": "fn()"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "addOnce": {
		      "!type": "fn()"
		     },
		     "remove": {
		      "!type": "fn()"
		     },
		     "removeAll": {
		      "!type": "fn()"
		     },
		     "getNumListeners": {
		      "!type": "fn()"
		     },
		     "halt": {
		      "!type": "fn()"
		     },
		     "dispatch": {
		      "!type": "fn()"
		     },
		     "forget": {
		      "!type": "fn()"
		     },
		     "dispose": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Signal#_addBinding": {
		    "prototype": {
		     "_bindings": {}
		    }
		   },
		   "Signal#removeAll#_bindings": {
		    "length": {}
		   },
		   "Signal#halt": {
		    "prototype": {
		     "_shouldPropagate": {}
		    }
		   },
		   "Signal#dispatch": {
		    "prototype": {
		     "_prevParams": {},
		     "_shouldPropagate": {}
		    }
		   },
		   "Signal#forget": {
		    "prototype": {
		     "_prevParams": {}
		    }
		   },
		   "Signal#dispose": {
		    "prototype": {
		     "_bindings": {},
		     "_prevParams": {}
		    }
		   },
		   "SignalBinding": {
		    "!type": "fn(signal: +Phaser.Signal, listener: +function, isOnce: bool, listenerContext: ?, priority: number, args: +any)",
		    "prototype": {
		     "_listener": {
		      "!type": "+Phaser.Game"
		     },
		     "_isOnce": {
		      "!type": "bool"
		     },
		     "context": {},
		     "_signal": {
		      "!type": "+Phaser.Signal"
		     },
		     "_priority": {
		      "!type": "number"
		     },
		     "_args": {
		      "!type": "+array"
		     },
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
		      "!type": "fn()"
		     },
		     "detach": {
		      "!type": "fn()"
		     },
		     "isBound": {
		      "!type": "fn()"
		     },
		     "isOnce": {
		      "!type": "fn()"
		     },
		     "getListener": {
		      "!type": "fn()"
		     },
		     "getSignal": {
		      "!type": "fn()"
		     },
		     "_destroy": {
		      "!type": "fn()"
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
		     "_hiddenVar": {
		      "!type": "string"
		     },
		     "_onChange": {
		      "!type": "+function"
		     },
		     "_backgroundColor": {
		      "!type": "number"
		     },
		     "parseConfig": {
		      "!type": "fn()"
		     },
		     "boot": {
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
		     "updateTransform": {
		      "!type": "fn()"
		     },
		     "checkVisibility": {
		      "!type": "fn()"
		     },
		     "visibilityChange": {
		      "!type": "fn()"
		     },
		     "setBackgroundColor": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "backgroundColor": {
		      "!type": "number|string"
		     },
		     "smoothed": {
		      "!type": "bool"
		     },
		     "worldTransform": {}
		    }
		   },
		   "Stage#parseConfig": {
		    "prototype": {
		     "disableVisibilityChange": {},
		     "backgroundColor": {}
		    }
		   },
		   "Stage#preUpdate": {
		    "prototype": {
		     "currentRenderOrderID": {}
		    }
		   },
		   "Stage#updateTransform": {
		    "prototype": {
		     "worldAlpha": {}
		    }
		   },
		   "Stage#checkVisibility": {
		    "prototype": {
		     "_hiddenVar": {},
		     "_onChange": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Stage#setBackgroundColor": {
		    "prototype": {
		     "_backgroundColor": {},
		     "backgroundColorSplit": {},
		     "backgroundColorString": {}
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
		     "_pendingState": {
		      "!type": "+Phaser.State"
		     },
		     "_clearWorld": {
		      "!type": "bool"
		     },
		     "_clearCache": {
		      "!type": "bool"
		     },
		     "_created": {
		      "!type": "bool"
		     },
		     "_args": {
		      "!type": "[?]"
		     },
		     "current": {
		      "!type": "string"
		     },
		     "onStateChange": {
		      "!type": "+Phaser.Signal"
		     },
		     "onInitCallback": {
		      "!type": "+function"
		     },
		     "onPreloadCallback": {
		      "!type": "+function"
		     },
		     "onCreateCallback": {
		      "!type": "+function"
		     },
		     "onUpdateCallback": {
		      "!type": "+function"
		     },
		     "onRenderCallback": {
		      "!type": "+function"
		     },
		     "onResizeCallback": {
		      "!type": "+function"
		     },
		     "onPreRenderCallback": {
		      "!type": "+function"
		     },
		     "onLoadUpdateCallback": {
		      "!type": "+function"
		     },
		     "onLoadRenderCallback": {
		      "!type": "+function"
		     },
		     "onPausedCallback": {
		      "!type": "+function"
		     },
		     "onResumedCallback": {
		      "!type": "+function"
		     },
		     "onPauseUpdateCallback": {
		      "!type": "+function"
		     },
		     "onShutDownCallback": {
		      "!type": "+function"
		     },
		     "boot": {
		      "!type": "fn()"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "remove": {
		      "!type": "fn()"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "restart": {
		      "!type": "fn()"
		     },
		     "dummy": {
		      "!type": "fn()"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "clearCurrentState": {
		      "!type": "fn()"
		     },
		     "checkState": {
		      "!type": "fn()"
		     },
		     "link": {
		      "!type": "fn()"
		     },
		     "unlink": {
		      "!type": "fn()"
		     },
		     "setCurrentState": {
		      "!type": "fn()"
		     },
		     "getCurrentState": {
		      "!type": "fn()"
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
		      "!type": "fn()"
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
		   "StateManager#add~newState": {
		    "game": {}
		   },
		   "StateManager#add": {
		    "prototype": {
		     "states[undefined]": {},
		     "_pendingState": {}
		    }
		   },
		   "StateManager#remove": {
		    "prototype": {
		     "callbackContext": {},
		     "onInitCallback": {},
		     "onShutDownCallback": {},
		     "onPreloadCallback": {},
		     "onLoadRenderCallback": {},
		     "onLoadUpdateCallback": {},
		     "onCreateCallback": {},
		     "onUpdateCallback": {},
		     "onPreRenderCallback": {},
		     "onRenderCallback": {},
		     "onResizeCallback": {},
		     "onPausedCallback": {},
		     "onResumedCallback": {},
		     "onPauseUpdateCallback": {}
		    }
		   },
		   "StateManager#start": {
		    "prototype": {
		     "_pendingState": {},
		     "_clearWorld": {},
		     "_clearCache": {},
		     "_args": {}
		    }
		   },
		   "StateManager#restart": {
		    "prototype": {
		     "_pendingState": {},
		     "_clearWorld": {},
		     "_clearCache": {},
		     "_args": {}
		    }
		   },
		   "StateManager#preUpdate": {
		    "prototype": {
		     "_pendingState": {}
		    }
		   },
		   "StateManager#link#states[undefined]": {
		    "game": {},
		    "add": {},
		    "make": {},
		    "camera": {},
		    "cache": {},
		    "input": {},
		    "load": {},
		    "math": {},
		    "sound": {},
		    "scale": {},
		    "state": {},
		    "stage": {},
		    "time": {},
		    "tweens": {},
		    "world": {},
		    "particles": {},
		    "rnd": {},
		    "physics": {},
		    "key": {}
		   },
		   "StateManager#unlink#states[undefined]": {
		    "game": {},
		    "add": {},
		    "make": {},
		    "camera": {},
		    "cache": {},
		    "input": {},
		    "load": {},
		    "math": {},
		    "sound": {},
		    "scale": {},
		    "state": {},
		    "stage": {},
		    "time": {},
		    "tweens": {},
		    "world": {},
		    "particles": {},
		    "rnd": {},
		    "physics": {}
		   },
		   "StateManager#setCurrentState": {
		    "prototype": {
		     "callbackContext": {},
		     "onInitCallback": {},
		     "onPreloadCallback": {},
		     "onLoadRenderCallback": {},
		     "onLoadUpdateCallback": {},
		     "onCreateCallback": {},
		     "onUpdateCallback": {},
		     "onPreRenderCallback": {},
		     "onRenderCallback": {},
		     "onResizeCallback": {},
		     "onPausedCallback": {},
		     "onResumedCallback": {},
		     "onPauseUpdateCallback": {},
		     "onShutDownCallback": {},
		     "current": {},
		     "_created": {},
		     "_args": {}
		    }
		   },
		   "StateManager#setCurrentState#game": {
		    "_kickstart": {}
		   },
		   "StateManager#loadComplete": {
		    "prototype": {
		     "_created": {}
		    }
		   },
		   "StateManager#destroy": {
		    "prototype": {
		     "callbackContext": {},
		     "onInitCallback": {},
		     "onShutDownCallback": {},
		     "onPreloadCallback": {},
		     "onLoadRenderCallback": {},
		     "onLoadUpdateCallback": {},
		     "onCreateCallback": {},
		     "onUpdateCallback": {},
		     "onRenderCallback": {},
		     "onPausedCallback": {},
		     "onResumedCallback": {},
		     "onPauseUpdateCallback": {},
		     "game": {},
		     "states": {},
		     "_pendingState": {},
		     "current": {}
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
		      "!type": "fn()"
		     },
		     "resize": {
		      "!type": "fn()"
		     },
		     "shutdown": {
		      "!type": "fn()"
		     },
		     "wrap": {
		      "!type": "fn()"
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
		     "_sortProperty": {
		      "!type": "string"
		     },
		     "add": {
		      "!type": "fn(child: +DisplayObject, silent: bool) -> ?"
		     },
		     "addToHash": {
		      "!type": "fn(child: +DisplayObject) -> ?"
		     },
		     "removeFromHash": {
		      "!type": "fn(child: +DisplayObject) -> ?"
		     },
		     "addMultiple": {
		      "!type": "fn(children: [?]|+Phaser.Group, silent: bool) -> ?"
		     },
		     "addAt": {
		      "!type": "fn(child: +DisplayObject, index: number, silent: bool) -> ?"
		     },
		     "getAt": {
		      "!type": "fn(index: number) -> ?"
		     },
		     "create": {
		      "!type": "fn(x: number, y: number, key: string, frame: number|string, exists: bool) -> ?"
		     },
		     "createMultiple": {
		      "!type": "fn(quantity: number, key: string, frame: number|string, exists: bool)"
		     },
		     "updateZ": {
		      "!type": "fn()"
		     },
		     "resetCursor": {
		      "!type": "fn(index: number) -> ?"
		     },
		     "next": {
		      "!type": "fn() -> ?"
		     },
		     "previous": {
		      "!type": "fn() -> ?"
		     },
		     "swap": {
		      "!type": "fn(child1: +any, child2: +any)"
		     },
		     "bringToTop": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "sendToBack": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "moveUp": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "moveDown": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "xy": {
		      "!type": "fn(index: number, x: number, y: number)"
		     },
		     "reverse": {
		      "!type": "fn()"
		     },
		     "getIndex": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "replace": {
		      "!type": "fn(oldChild: +any, newChild: +any) -> ?"
		     },
		     "hasProperty": {
		      "!type": "fn(child: +any, key: [?]) -> ?"
		     },
		     "setProperty": {
		      "!type": "fn(child: +any, key: +array, value: +any, operation: number, force: bool) -> ?"
		     },
		     "checkProperty": {
		      "!type": "fn(child: +any, key: +array, value: +any, force: bool) -> ?"
		     },
		     "set": {
		      "!type": "fn(child: +Phaser.Sprite, key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool) -> ?"
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
		      "!type": "fn(predicate: +function, checkExists: bool) -> ?"
		     },
		     "forEach": {
		      "!type": "fn(callback: +function, callbackContext: ?, checkExists: bool, args: +any)"
		     },
		     "forEachExists": {
		      "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		     },
		     "forEachAlive": {
		      "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		     },
		     "forEachDead": {
		      "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		     },
		     "sort": {
		      "!type": "fn(key: string, order: number)"
		     },
		     "customSort": {
		      "!type": "fn(sortHandler: +function, context: ?)"
		     },
		     "ascendingSortHandler": {
		      "!type": "fn(a: ?, b: ?)"
		     },
		     "descendingSortHandler": {
		      "!type": "fn(a: ?, b: ?)"
		     },
		     "iterate": {
		      "!type": "fn(key: string, value: +any, returnType: number, callback: +function, callbackContext: ?, args: [?]) -> ?"
		     },
		     "getFirstExists": {
		      "!type": "fn(exists: bool) -> ?"
		     },
		     "getFirstAlive": {
		      "!type": "fn() -> ?"
		     },
		     "getFirstDead": {
		      "!type": "fn() -> ?"
		     },
		     "getTop": {
		      "!type": "fn() -> ?"
		     },
		     "getBottom": {
		      "!type": "fn() -> ?"
		     },
		     "countLiving": {
		      "!type": "fn() -> ?"
		     },
		     "countDead": {
		      "!type": "fn() -> ?"
		     },
		     "getRandom": {
		      "!type": "fn(startIndex: number, length: number) -> ?"
		     },
		     "remove": {
		      "!type": "fn(child: +any, destroy: bool, silent: bool) -> ?"
		     },
		     "moveAll": {
		      "!type": "fn(group: +Phaser.Group, silent: bool) -> ?"
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
		   "World#boot": {
		    "prototype": {
		     "camera": {}
		    }
		   },
		   "World#boot#camera": {
		    "displayObject": {},
		    "scale": {}
		   },
		   "World#boot#game": {
		    "camera": {}
		   },
		   "World#stateChange": {
		    "prototype": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "World#setBounds": {
		    "prototype": {
		     "_definedSize": {},
		     "_width": {},
		     "_height": {},
		     "x": {},
		     "y": {}
		    }
		   },
		   "World#resize#bounds": {
		    "width": {},
		    "height": {}
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
		     "buffer": {},
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
		     "cls": {
		      "!type": "fn()"
		     },
		     "_image": {
		      "!type": "number"
		     },
		     "_pos": {
		      "!type": "+Phaser.Point"
		     },
		     "_size": {
		      "!type": "+Phaser.Point"
		     },
		     "_scale": {
		      "!type": "+Phaser.Point"
		     },
		     "_rotate": {
		      "!type": "number"
		     },
		     "_alpha": {},
		     "_anchor": {
		      "!type": "+Phaser.Point"
		     },
		     "_tempR": {
		      "!type": "number"
		     },
		     "_tempG": {
		      "!type": "number"
		     },
		     "_tempB": {
		      "!type": "number"
		     },
		     "_circle": {
		      "!type": "+Phaser.Circle"
		     },
		     "_swapCanvas": {
		      "!type": "+HTMLCanvasElement"
		     },
		     "move": {
		      "!type": "fn()"
		     },
		     "moveH": {
		      "!type": "fn()"
		     },
		     "moveV": {
		      "!type": "fn()"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "load": {
		      "!type": "fn()"
		     },
		     "clear": {
		      "!type": "fn()"
		     },
		     "fill": {
		      "!type": "fn()"
		     },
		     "generateTexture": {
		      "!type": "fn()"
		     },
		     "resize": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "processPixelRGB": {
		      "!type": "fn()"
		     },
		     "processPixel": {
		      "!type": "fn()"
		     },
		     "replaceRGB": {
		      "!type": "fn()"
		     },
		     "setHSL": {
		      "!type": "fn()"
		     },
		     "shiftHSL": {
		      "!type": "fn()"
		     },
		     "setPixel32": {
		      "!type": "fn()"
		     },
		     "setPixel": {
		      "!type": "fn()"
		     },
		     "getPixel": {
		      "!type": "fn()"
		     },
		     "getPixel32": {
		      "!type": "fn()"
		     },
		     "getPixelRGB": {
		      "!type": "fn()"
		     },
		     "getPixels": {
		      "!type": "fn()"
		     },
		     "getFirstPixel": {
		      "!type": "fn()"
		     },
		     "getBounds": {
		      "!type": "fn()"
		     },
		     "addToWorld": {
		      "!type": "fn()"
		     },
		     "copy": {
		      "!type": "fn()"
		     },
		     "copyRect": {
		      "!type": "fn()"
		     },
		     "draw": {
		      "!type": "fn()"
		     },
		     "drawGroup": {
		      "!type": "fn()"
		     },
		     "drawFull": {
		      "!type": "fn()"
		     },
		     "shadow": {
		      "!type": "fn()"
		     },
		     "alphaMask": {
		      "!type": "fn()"
		     },
		     "extract": {
		      "!type": "fn()"
		     },
		     "rect": {
		      "!type": "fn()"
		     },
		     "text": {
		      "!type": "fn()"
		     },
		     "circle": {
		      "!type": "fn()"
		     },
		     "line": {
		      "!type": "fn()"
		     },
		     "textureLine": {
		      "!type": "fn()"
		     },
		     "render": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "blendReset": {
		      "!type": "fn()"
		     },
		     "blendSourceOver": {
		      "!type": "fn()"
		     },
		     "blendSourceIn": {
		      "!type": "fn()"
		     },
		     "blendSourceOut": {
		      "!type": "fn()"
		     },
		     "blendSourceAtop": {
		      "!type": "fn()"
		     },
		     "blendDestinationOver": {
		      "!type": "fn()"
		     },
		     "blendDestinationIn": {
		      "!type": "fn()"
		     },
		     "blendDestinationOut": {
		      "!type": "fn()"
		     },
		     "blendDestinationAtop": {
		      "!type": "fn()"
		     },
		     "blendXor": {
		      "!type": "fn()"
		     },
		     "blendAdd": {
		      "!type": "fn()"
		     },
		     "blendMultiply": {
		      "!type": "fn()"
		     },
		     "blendScreen": {
		      "!type": "fn()"
		     },
		     "blendOverlay": {
		      "!type": "fn()"
		     },
		     "blendDarken": {
		      "!type": "fn()"
		     },
		     "blendLighten": {
		      "!type": "fn()"
		     },
		     "blendColorDodge": {
		      "!type": "fn()"
		     },
		     "blendColorBurn": {
		      "!type": "fn()"
		     },
		     "blendHardLight": {
		      "!type": "fn()"
		     },
		     "blendSoftLight": {
		      "!type": "fn()"
		     },
		     "blendDifference": {
		      "!type": "fn()"
		     },
		     "blendExclusion": {
		      "!type": "fn()"
		     },
		     "blendHue": {
		      "!type": "fn()"
		     },
		     "blendSaturation": {
		      "!type": "fn()"
		     },
		     "blendColor": {
		      "!type": "fn()"
		     },
		     "blendLuminosity": {
		      "!type": "fn()"
		     }
		    },
		    "getTransform": {
		     "!type": "fn()"
		    }
		   },
		   "BitmapData#texture": {
		    "frame": {}
		   },
		   "BitmapData#_alpha": {
		    "prev": {},
		    "current": {}
		   },
		   "BitmapData#clear": {
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "BitmapData#fill#context": {
		    "fillStyle": {}
		   },
		   "BitmapData#fill": {
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "BitmapData#generateTexture~image": {
		    "src": {}
		   },
		   "BitmapData#resize": {
		    "prototype": {
		     "width": {},
		     "height": {},
		     "dirty": {}
		    }
		   },
		   "BitmapData#resize#canvas": {
		    "width": {},
		    "height": {}
		   },
		   "BitmapData#resize#_swapCanvas": {
		    "width": {},
		    "height": {}
		   },
		   "BitmapData#resize#baseTexture": {
		    "width": {},
		    "height": {}
		   },
		   "BitmapData#resize#textureFrame": {
		    "width": {},
		    "height": {}
		   },
		   "BitmapData#resize#texture": {
		    "width": {},
		    "height": {},
		    "crop": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "BitmapData#update": {
		    "prototype": {
		     "imageData": {},
		     "data": {},
		     "buffer": {},
		     "pixels": {}
		    }
		   },
		   "BitmapData#processPixelRGB~result": {
		    "r": {},
		    "g": {},
		    "b": {},
		    "a": {}
		   },
		   "BitmapData#processPixelRGB": {
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "BitmapData#processPixel": {
		    "prototype": {
		     "pixels[undefined]": {},
		     "dirty": {}
		    }
		   },
		   "BitmapData#replaceRGB": {
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "BitmapData#setHSL~pixel": {
		    "h": {},
		    "s": {},
		    "l": {}
		   },
		   "BitmapData#setHSL": {
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "BitmapData#shiftHSL~pixel": {
		    "h": {},
		    "s": {},
		    "l": {}
		   },
		   "BitmapData#shiftHSL": {
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "BitmapData#setPixel32": {
		    "prototype": {
		     "pixels[undefined]": {},
		     "dirty": {}
		    }
		   },
		   "BitmapData#getPixel~out": {
		    "r": {},
		    "g": {},
		    "b": {},
		    "a": {}
		   },
		   "BitmapData#getFirstPixel~pixel": {
		    "x": {},
		    "y": {}
		   },
		   "BitmapData#getBounds~rect": {
		    "x": {},
		    "y": {},
		    "width": {},
		    "height": {}
		   },
		   "BitmapData#copy": {
		    "prototype": {
		     "_image": {},
		     "_rotate": {},
		     "op": {},
		     "dirty": {}
		    }
		   },
		   "BitmapData#copy#_alpha": {
		    "current": {},
		    "prev": {}
		   },
		   "BitmapData#copy~source": {
		    "cachedTint": {},
		    "tintedTexture": {}
		   },
		   "BitmapData#copy#_size": {
		    "x": {},
		    "y": {}
		   },
		   "BitmapData#copy#_anchor": {
		    "x": {},
		    "y": {}
		   },
		   "BitmapData#copy#_scale": {
		    "x": {},
		    "y": {}
		   },
		   "BitmapData#copy~ctx": {
		    "globalAlpha": {}
		   },
		   "BitmapData#shadow~ctx": {
		    "shadowColor": {},
		    "shadowBlur": {},
		    "shadowOffsetX": {},
		    "shadowOffsetY": {}
		   },
		   "BitmapData#rect#context": {
		    "fillStyle": {}
		   },
		   "BitmapData#text~ctx": {
		    "font": {},
		    "fillStyle": {}
		   },
		   "BitmapData#circle~ctx": {
		    "fillStyle": {}
		   },
		   "BitmapData#line~ctx": {
		    "lineWidth": {},
		    "strokeStyle": {}
		   },
		   "BitmapData#textureLine~ctx": {
		    "fillStyle": {}
		   },
		   "BitmapData#textureLine": {
		    "prototype": {
		     "_circle": {},
		     "dirty": {}
		    }
		   },
		   "BitmapData#render": {
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "BitmapData#blendReset": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendSourceOver": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendSourceIn": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendSourceOut": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendSourceAtop": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendDestinationOver": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendDestinationIn": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendDestinationOut": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendDestinationAtop": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendXor": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendAdd": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendMultiply": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendScreen": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendOverlay": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendDarken": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendLighten": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendColorDodge": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendColorBurn": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendHardLight": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendSoftLight": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendDifference": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendExclusion": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendHue": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendSaturation": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendColor": {
		    "prototype": {
		     "op": {}
		    }
		   },
		   "BitmapData#blendLuminosity": {
		    "prototype": {
		     "op": {}
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
		     "_prevAnchor": {
		      "!type": "+Phaser.Point"
		     },
		     "_glyphs": {
		      "!type": "+array"
		     },
		     "_maxWidth": {
		      "!type": "number"
		     },
		     "_text": {
		      "!type": "string"
		     },
		     "_data": {
		      "!type": "string"
		     },
		     "_font": {
		      "!type": "string"
		     },
		     "_fontSize": {
		      "!type": "number"
		     },
		     "_align": {
		      "!type": "string"
		     },
		     "_tint": {
		      "!type": "number"
		     },
		     "dirty": {
		      "!type": "bool"
		     },
		     "preUpdatePhysics": {},
		     "preUpdateLifeSpan": {},
		     "preUpdateInWorld": {},
		     "preUpdateCore": {},
		     "preUpdate": {
		      "!type": "fn() -> ?"
		     },
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "setText": {
		      "!type": "fn()"
		     },
		     "scanLine": {
		      "!type": "fn()"
		     },
		     "updateText": {
		      "!type": "fn()"
		     },
		     "purgeGlyphs": {
		      "!type": "fn()"
		     },
		     "updateTransform": {
		      "!type": "fn()"
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
		     "_bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_exists": {
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
		     "_fixedToCamera": {
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
		     "_outOfBoundsFired": {
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
		      "!type": "fn(health: number) -> ?"
		     },
		     "kill": {
		      "!type": "fn() -> ?"
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
		      "!type": "fn(x: number, y: number, health: number) -> ?"
		     }
		    }
		   },
		   "BitmapText#setText": {
		    "prototype": {
		     "text": {}
		    }
		   },
		   "BitmapText#updateText": {
		    "prototype": {
		     "textWidth": {},
		     "textHeight": {}
		    }
		   },
		   "BitmapText#updateText~line": {
		    "y": {}
		   },
		   "BitmapText#updateText~g": {
		    "texture": {},
		    "name": {},
		    "position.x": {},
		    "position.y": {},
		    "tint": {},
		    "texture.requiresReTint": {}
		   },
		   "BitmapText#purgeGlyphs": {
		    "prototype": {
		     "_glyphs": {}
		    }
		   },
		   "BitmapText#updateTransform": {
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "Button": {
		    "!type": "fn(game: +Phaser.Game, x: number, y: number, key: string, callback: +function, callbackContext: ?, overFrame: string|number, outFrame: string|number, downFrame: string|number, upFrame: string|number)",
		    "prototype": {
		     "type": {
		      "!type": "number"
		     },
		     "physicsType": {
		      "!type": "number"
		     },
		     "_onOverFrame": {
		      "!type": "string|number"
		     },
		     "_onOutFrame": {
		      "!type": "string|number"
		     },
		     "_onDownFrame": {
		      "!type": "string|number"
		     },
		     "_onUpFrame": {
		      "!type": "string|number"
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
		     "inputEnabled": {
		      "!type": "bool"
		     },
		     "clearFrames": {
		      "!type": "fn()"
		     },
		     "removedFromWorld": {
		      "!type": "fn()"
		     },
		     "setStateFrame": {
		      "!type": "fn()"
		     },
		     "changeStateFrame": {
		      "!type": "fn()"
		     },
		     "setFrames": {
		      "!type": "fn()"
		     },
		     "setStateSound": {
		      "!type": "fn()"
		     },
		     "playStateSound": {
		      "!type": "fn()"
		     },
		     "setSounds": {
		      "!type": "fn()"
		     },
		     "setOverSound": {
		      "!type": "fn()"
		     },
		     "setOutSound": {
		      "!type": "fn()"
		     },
		     "setDownSound": {
		      "!type": "fn()"
		     },
		     "setUpSound": {
		      "!type": "fn()"
		     },
		     "onInputOverHandler": {
		      "!type": "fn()"
		     },
		     "onInputOutHandler": {
		      "!type": "fn()"
		     },
		     "onInputDownHandler": {
		      "!type": "fn()"
		     },
		     "onInputUpHandler": {
		      "!type": "fn()"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "anchor": {},
		     "texture": {},
		     "_width": {},
		     "_height": {},
		     "tint": {},
		     "cachedTint": {},
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
		     "_bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_exists": {
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
		      "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> ?"
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
		      "!type": "fn() -> ?"
		     },
		     "sendToBack": {
		      "!type": "fn() -> ?"
		     },
		     "moveUp": {
		      "!type": "fn() -> ?"
		     },
		     "moveDown": {
		      "!type": "fn() -> ?"
		     },
		     "cropRect": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_crop": {
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
		     "_fixedToCamera": {
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
		     "alive": {
		      "!type": "bool"
		     },
		     "lifespan": {
		      "!type": "number"
		     },
		     "revive": {
		      "!type": "fn(health: number) -> ?"
		     },
		     "kill": {
		      "!type": "fn() -> ?"
		     },
		     "customRender": {
		      "!type": "bool"
		     },
		     "_frame": {
		      "!type": "+Phaser.Rectangle"
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
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> ?"
		     },
		     "reset": {
		      "!type": "fn(x: number, y: number, health: number) -> ?"
		     },
		     "smoothed": {
		      "!type": "bool"
		     }
		    }
		   },
		   "Button#input": {
		    "useHandCursor": {}
		   },
		   "Button#removedFromWorld": {
		    "prototype": {
		     "inputEnabled": {}
		    }
		   },
		   "Button#changeStateFrame": {
		    "prototype": {
		     "frameName": {},
		     "frame": {}
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
		    "Angle#angle": {
		     "get": {
		      "!type": "fn()"
		     },
		     "set": {
		      "!type": "fn()",
		      "prototype": {
		       "rotation": {}
		      }
		     }
		    },
		    "Animation": {
		     "!type": "fn()",
		     "prototype": {
		      "play": {
		       "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> ?"
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
		    "AutoCull#inCamera": {
		     "get": {
		      "!type": "fn()"
		     },
		     "get#_bounds": {
		      "x": {},
		      "y": {}
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
		    "Bounds#offsetX": {
		     "get": {
		      "!type": "fn()"
		     }
		    },
		    "Bounds#offsetY": {
		     "get": {
		      "!type": "fn()"
		     }
		    },
		    "Bounds#left": {
		     "get": {
		      "!type": "fn()"
		     }
		    },
		    "Bounds#right": {
		     "get": {
		      "!type": "fn()"
		     }
		    },
		    "Bounds#top": {
		     "get": {
		      "!type": "fn()"
		     }
		    },
		    "Bounds#bottom": {
		     "get": {
		      "!type": "fn()"
		     }
		    },
		    "BringToTop": {
		     "!type": "fn()",
		     "prototype": {
		      "bringToTop": {
		       "!type": "fn() -> ?"
		      },
		      "sendToBack": {
		       "!type": "fn() -> ?"
		      },
		      "moveUp": {
		       "!type": "fn() -> ?"
		      },
		      "moveDown": {
		       "!type": "fn() -> ?"
		      }
		     }
		    },
		    "!type": "fn()",
		    "Core": {
		     "!type": "fn()",
		     "install": {
		      "!type": "fn()",
		      "prototype": {
		       "components": {},
		       "components[undefined]": {}
		      }
		     },
		     "init": {
		      "!type": "fn()",
		      "prototype": {
		       "game": {},
		       "key": {},
		       "world": {},
		       "previousPosition": {},
		       "events": {},
		       "_bounds": {},
		       "body": {},
		       "animations": {},
		       "cameraOffset": {}
		      }
		     },
		     "preUpdate": {
		      "!type": "fn()",
		      "prototype": {
		       "previousRotation": {},
		       "renderOrderID": {}
		      }
		     },
		     "preUpdate#texture": {
		      "requiresReTint": {}
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
		      "_bounds": {
		       "!type": "+Phaser.Rectangle"
		      },
		      "_exists": {
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
		    "Core#exists": {
		     "get": {
		      "!type": "fn()"
		     },
		     "set": {
		      "!type": "fn()",
		      "prototype": {
		       "_exists": {},
		       "visible": {}
		      }
		     }
		    },
		    "Crop": {
		     "!type": "fn()",
		     "prototype": {
		      "cropRect": {
		       "!type": "+Phaser.Rectangle"
		      },
		      "_crop": {
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
		    "Crop#crop": {
		     "prototype": {
		      "cropRect": {},
		      "_crop": {}
		     }
		    },
		    "Crop#updateCrop": {
		     "prototype": {
		      "_crop": {}
		     }
		    },
		    "Crop#updateCrop#_crop": {
		     "x": {},
		     "y": {}
		    },
		    "Crop#updateCrop#texture": {
		     "crop": {
		      "x": {},
		      "y": {},
		      "width": {},
		      "height": {}
		     },
		     "frame": {
		      "width": {},
		      "height": {}
		     },
		     "width": {},
		     "height": {}
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
		    "Delta#deltaX": {
		     "get": {
		      "!type": "fn()"
		     }
		    },
		    "Delta#deltaY": {
		     "get": {
		      "!type": "fn()"
		     }
		    },
		    "Delta#deltaZ": {
		     "get": {
		      "!type": "fn()"
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
		    "Destroy#destroy": {
		     "prototype": {
		      "destroyPhase": {},
		      "_crop": {},
		      "_frame": {},
		      "_glyphs": {},
		      "alive": {},
		      "exists": {},
		      "visible": {},
		      "filters": {},
		      "mask": {},
		      "game": {},
		      "renderable": {},
		      "transformCallback": {},
		      "transformCallbackContext": {},
		      "hitArea": {},
		      "parent": {},
		      "stage": {},
		      "worldTransform": {},
		      "filterArea": {},
		      "_bounds": {},
		      "_currentBounds": {},
		      "_mask": {},
		      "pendingDestroy": {}
		     }
		    },
		    "FixedToCamera": {
		     "!type": "fn()",
		     "postUpdate": {
		      "!type": "fn()"
		     },
		     "postUpdate#position": {
		      "x": {},
		      "y": {}
		     },
		     "prototype": {
		      "_fixedToCamera": {
		       "!type": "bool"
		      },
		      "fixedToCamera": {
		       "!type": "bool"
		      },
		      "cameraOffset": {
		       "!type": "+Phaser.Point"
		      }
		     }
		    },
		    "FixedToCamera#fixedToCamera": {
		     "get": {
		      "!type": "fn()"
		     },
		     "set": {
		      "!type": "fn()",
		      "prototype": {
		       "_fixedToCamera": {}
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
		    "Health#damage": {
		     "prototype": {
		      "health": {}
		     }
		    },
		    "Health#heal": {
		     "prototype": {
		      "health": {}
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
		    "InCamera#inCamera": {
		     "get": {
		      "!type": "fn()"
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
		    "InputEnabled#inputEnabled": {
		     "get": {
		      "!type": "fn()"
		     },
		     "set": {
		      "!type": "fn()",
		      "prototype": {
		       "input": {}
		      }
		     }
		    },
		    "InWorld": {
		     "!type": "fn()",
		     "preUpdate": {
		      "!type": "fn()",
		      "prototype": {
		       "renderable": {},
		       "_outOfBoundsFired": {}
		      }
		     },
		     "preUpdate#_bounds": {
		      "x": {},
		      "y": {}
		     },
		     "prototype": {
		      "checkWorldBounds": {
		       "!type": "bool"
		      },
		      "outOfBoundsKill": {
		       "!type": "bool"
		      },
		      "_outOfBoundsFired": {
		       "!type": "bool"
		      },
		      "inWorld": {
		       "!type": "bool"
		      }
		     }
		    },
		    "InWorld#inWorld": {
		     "get": {
		      "!type": "fn()"
		     }
		    },
		    "LifeSpan": {
		     "!type": "fn()",
		     "preUpdate": {
		      "!type": "fn()",
		      "prototype": {
		       "lifespan": {}
		      }
		     },
		     "prototype": {
		      "alive": {
		       "!type": "bool"
		      },
		      "lifespan": {
		       "!type": "number"
		      },
		      "revive": {
		       "!type": "fn(health: number) -> ?"
		      },
		      "kill": {
		       "!type": "fn() -> ?"
		      }
		     }
		    },
		    "LifeSpan#revive": {
		     "prototype": {
		      "alive": {},
		      "exists": {},
		      "visible": {},
		      "health": {}
		     }
		    },
		    "LifeSpan#kill": {
		     "prototype": {
		      "alive": {},
		      "exists": {},
		      "visible": {}
		     }
		    },
		    "LoadTexture": {
		     "!type": "fn()",
		     "prototype": {
		      "customRender": {
		       "!type": "bool"
		      },
		      "_frame": {
		       "!type": "+Phaser.Rectangle"
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
		      }
		     }
		    },
		    "LoadTexture#loadTexture": {
		     "prototype": {
		      "key": {},
		      "customRender": {},
		      "_frame": {}
		     }
		    },
		    "LoadTexture#loadTexture#texture": {
		     "valid": {},
		     "baseTexture": {
		      "scaleMode": {}
		     }
		    },
		    "LoadTexture#setFrame": {
		     "prototype": {
		      "_frame": {},
		      "refreshTexture": {}
		     }
		    },
		    "LoadTexture#setFrame#texture": {
		     "frame": {
		      "x": {},
		      "y": {},
		      "width": {},
		      "height": {}
		     },
		     "crop": {
		      "x": {},
		      "y": {},
		      "width": {},
		      "height": {}
		     },
		     "trim": {
		      "x": {},
		      "y": {},
		      "width": {},
		      "height": {}
		     },
		     "width": {},
		     "height": {},
		     "requiresReTint": {}
		    },
		    "LoadTexture#frame": {
		     "get": {
		      "!type": "fn()"
		     },
		     "set": {
		      "!type": "fn()"
		     },
		     "set#animations": {
		      "frame": {}
		     }
		    },
		    "LoadTexture#frameName": {
		     "get": {
		      "!type": "fn()"
		     },
		     "set": {
		      "!type": "fn()"
		     },
		     "set#animations": {
		      "frameName": {}
		     }
		    },
		    "Overlap": {
		     "!type": "fn()",
		     "prototype": {
		      "overlap": {
		       "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> ?"
		      }
		     }
		    },
		    "PhysicsBody": {
		     "!type": "fn()",
		     "preUpdate": {
		      "!type": "fn()",
		      "prototype": {
		       "previousRotation": {},
		       "fresh": {},
		       "renderOrderID": {}
		      }
		     },
		     "preUpdate#worldTransform": {
		      "tx": {},
		      "ty": {}
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
		    "PhysicsBody#x": {
		     "get": {
		      "!type": "fn()"
		     },
		     "set": {
		      "!type": "fn()"
		     },
		     "set#position": {
		      "x": {}
		     },
		     "set#body": {
		      "_reset": {}
		     }
		    },
		    "PhysicsBody#y": {
		     "get": {
		      "!type": "fn()"
		     },
		     "set": {
		      "!type": "fn()"
		     },
		     "set#position": {
		      "y": {}
		     },
		     "set#body": {
		      "_reset": {}
		     }
		    },
		    "Reset": {
		     "!type": "fn()",
		     "prototype": {
		      "reset": {
		       "!type": "fn(x: number, y: number, health: number) -> ?"
		      }
		     }
		    },
		    "Reset#reset": {
		     "prototype": {
		      "fresh": {},
		      "exists": {},
		      "visible": {},
		      "renderable": {},
		      "_outOfBoundsFired": {},
		      "alive": {},
		      "health": {}
		     }
		    },
		    "ScaleMinMax": {
		     "!type": "fn()",
		     "prototype": {
		      "transformCallback": {
		       "!type": "+function"
		      },
		      "transformCallbackContext": {},
		      "scaleMin": {
		       "!type": "+Phaser.Point"
		      },
		      "scaleMax": {
		       "!type": "+Phaser.Point"
		      },
		      "checkTransform": {
		       "!type": "fn(wt: +PIXI.Matrix)"
		      },
		      "setScaleMinMax": {
		       "!type": "fn(minX: number|+null, minY: number|+null, maxX: number|+null, maxY: number|+null)"
		      }
		     }
		    },
		    "ScaleMinMax#setScaleMinMax~minY": {
		     "maxY": {}
		    },
		    "ScaleMinMax#setScaleMinMax": {
		     "prototype": {
		      "scaleMin": {},
		      "scaleMax": {}
		     }
		    },
		    "Smoothed": {
		     "!type": "fn()",
		     "prototype": {
		      "smoothed": {
		       "!type": "bool"
		      }
		     }
		    },
		    "Smoothed#smoothed": {
		     "get": {
		      "!type": "fn()"
		     },
		     "set": {
		      "!type": "fn()"
		     },
		     "set#texture": {
		      "baseTexture": {
		       "scaleMode": {}
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
		     },
		     "[undefined]": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Events#destroy": {
		    "prototype": {
		     "_parent": {}
		    }
		   },
		   "Creature": {
		    "!type": "fn(game: +Phaser.Game, x: number, y: number, key: string|+PIXI.Texture, mesh: string, animation: string)",
		    "prototype": {
		     "type": {
		      "!type": "number"
		     },
		     "_creature": {
		      "!type": "+Creature"
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
		     "dirty": {},
		     "blendMode": {},
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
		     "indices[undefined]": {},
		     "colors": {
		      "!type": "+PIXI.Uint16Array"
		     },
		     "preUpdateInWorld": {},
		     "preUpdateCore": {},
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "_initWebGL": {
		      "!type": "fn()"
		     },
		     "_renderWebGL": {
		      "!type": "fn()"
		     },
		     "_renderCreature": {
		      "!type": "fn()"
		     },
		     "updateCreatureBounds": {
		      "!type": "fn()"
		     },
		     "updateData": {
		      "!type": "fn()"
		     },
		     "updateRenderData": {
		      "!type": "fn()"
		     },
		     "setAnimation": {
		      "!type": "fn()"
		     },
		     "play": {
		      "!type": "fn()"
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
		     "_bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_exists": {
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
		      "!type": "fn() -> ?"
		     },
		     "sendToBack": {
		      "!type": "fn() -> ?"
		     },
		     "moveUp": {
		      "!type": "fn() -> ?"
		     },
		     "moveDown": {
		      "!type": "fn() -> ?"
		     },
		     "destroyPhase": {
		      "!type": "bool"
		     },
		     "destroy": {
		      "!type": "fn(destroyChildren: bool)"
		     },
		     "_fixedToCamera": {
		      "!type": "bool"
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
		      "!type": "fn(health: number) -> ?"
		     },
		     "kill": {
		      "!type": "fn() -> ?"
		     },
		     "reset": {
		      "!type": "fn(x: number, y: number, health: number) -> ?"
		     }
		    }
		   },
		   "Creature#_initWebGL": {
		    "prototype": {
		     "_vertexBuffer": {},
		     "_indexBuffer": {},
		     "_uvBuffer": {},
		     "_colorBuffer": {}
		    }
		   },
		   "Creature#_renderCreature": {
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "Creature#updateData": {
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "Creature#updateRenderData": {
		    "prototype": {
		     "vertices[undefined]": {},
		     "uvs[undefined]": {}
		    }
		   },
		   "Creature#play": {
		    "prototype": {
		     "loop": {}
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
		      "!type": "fn()"
		     },
		     "sprite": {
		      "!type": "fn()"
		     },
		     "tween": {
		      "!type": "fn()"
		     },
		     "group": {
		      "!type": "fn()"
		     },
		     "spriteBatch": {
		      "!type": "fn()"
		     },
		     "audio": {
		      "!type": "fn()"
		     },
		     "audioSprite": {
		      "!type": "fn()"
		     },
		     "sound": {
		      "!type": "fn()"
		     },
		     "tileSprite": {
		      "!type": "fn()"
		     },
		     "rope": {
		      "!type": "fn()"
		     },
		     "text": {
		      "!type": "fn()"
		     },
		     "button": {
		      "!type": "fn()"
		     },
		     "graphics": {
		      "!type": "fn()"
		     },
		     "emitter": {
		      "!type": "fn()"
		     },
		     "retroFont": {
		      "!type": "fn()"
		     },
		     "bitmapText": {
		      "!type": "fn()"
		     },
		     "tilemap": {
		      "!type": "fn()"
		     },
		     "renderTexture": {
		      "!type": "fn()"
		     },
		     "bitmapData": {
		      "!type": "fn()"
		     },
		     "filter": {
		      "!type": "fn()"
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
		      "!type": "fn()"
		     },
		     "image": {
		      "!type": "fn()"
		     },
		     "sprite": {
		      "!type": "fn()"
		     },
		     "creature": {
		      "!type": "fn()"
		     },
		     "tween": {
		      "!type": "fn()"
		     },
		     "group": {
		      "!type": "fn()"
		     },
		     "physicsGroup": {
		      "!type": "fn()"
		     },
		     "spriteBatch": {
		      "!type": "fn()"
		     },
		     "audio": {
		      "!type": "fn()"
		     },
		     "sound": {
		      "!type": "fn()"
		     },
		     "audioSprite": {
		      "!type": "fn()"
		     },
		     "tileSprite": {
		      "!type": "fn()"
		     },
		     "rope": {
		      "!type": "fn()"
		     },
		     "text": {
		      "!type": "fn()"
		     },
		     "button": {
		      "!type": "fn()"
		     },
		     "graphics": {
		      "!type": "fn()"
		     },
		     "emitter": {
		      "!type": "fn()"
		     },
		     "retroFont": {
		      "!type": "fn()"
		     },
		     "bitmapText": {
		      "!type": "fn()"
		     },
		     "tilemap": {
		      "!type": "fn()"
		     },
		     "renderTexture": {
		      "!type": "fn()"
		     },
		     "video": {
		      "!type": "fn()"
		     },
		     "bitmapData": {
		      "!type": "fn()"
		     },
		     "filter": {
		      "!type": "fn()"
		     },
		     "plugin": {
		      "!type": "fn()"
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
		     "preUpdatePhysics": {},
		     "preUpdateLifeSpan": {},
		     "preUpdateInWorld": {},
		     "preUpdateCore": {},
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "drawTriangle": {
		      "!type": "fn()"
		     },
		     "drawTriangles": {
		      "!type": "fn()"
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
		     "_bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_exists": {
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
		     "_fixedToCamera": {
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
		     "_outOfBoundsFired": {
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
		      "!type": "fn(health: number) -> ?"
		     },
		     "kill": {
		      "!type": "fn() -> ?"
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
		      "!type": "fn(x: number, y: number, health: number) -> ?"
		     }
		    }
		   },
		   "Graphics#drawTriangles~point1": {
		    "x": {},
		    "y": {}
		   },
		   "Graphics#drawTriangles~point2": {
		    "x": {},
		    "y": {}
		   },
		   "Graphics#drawTriangles~point3": {
		    "x": {},
		    "y": {}
		   },
		   "Image": {
		    "!type": "fn(game: +Phaser.Game, x: number, y: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+PIXI.Texture, frame: string|number)",
		    "prototype": {
		     "type": {
		      "!type": "number"
		     },
		     "preUpdateInWorld": {},
		     "preUpdateCore": {},
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "anchor": {},
		     "texture": {},
		     "_width": {},
		     "_height": {},
		     "tint": {},
		     "cachedTint": {},
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
		     "_bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_exists": {
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
		      "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> ?"
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
		      "!type": "fn() -> ?"
		     },
		     "sendToBack": {
		      "!type": "fn() -> ?"
		     },
		     "moveUp": {
		      "!type": "fn() -> ?"
		     },
		     "moveDown": {
		      "!type": "fn() -> ?"
		     },
		     "cropRect": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_crop": {
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
		     "_fixedToCamera": {
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
		     "alive": {
		      "!type": "bool"
		     },
		     "lifespan": {
		      "!type": "number"
		     },
		     "revive": {
		      "!type": "fn(health: number) -> ?"
		     },
		     "kill": {
		      "!type": "fn() -> ?"
		     },
		     "customRender": {
		      "!type": "bool"
		     },
		     "_frame": {
		      "!type": "+Phaser.Rectangle"
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
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> ?"
		     },
		     "reset": {
		      "!type": "fn(x: number, y: number, health: number) -> ?"
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
		     "_s": {
		      "!type": "number"
		     },
		     "autoAlpha": {
		      "!type": "bool"
		     },
		     "alphaData": {
		      "!type": "+array"
		     },
		     "_a": {
		      "!type": "number"
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
		      "!type": "fn()"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "physicsType": {
		      "!type": "number"
		     },
		     "preUpdate": {
		      "!type": "fn() -> ?"
		     },
		     "anchor": {},
		     "texture": {},
		     "_width": {},
		     "_height": {},
		     "tint": {},
		     "cachedTint": {},
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
		     "_bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_exists": {
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
		      "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> ?"
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
		      "!type": "fn() -> ?"
		     },
		     "sendToBack": {
		      "!type": "fn() -> ?"
		     },
		     "moveUp": {
		      "!type": "fn() -> ?"
		     },
		     "moveDown": {
		      "!type": "fn() -> ?"
		     },
		     "cropRect": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_crop": {
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
		     "_fixedToCamera": {
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
		     "_outOfBoundsFired": {
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
		      "!type": "fn(health: number) -> ?"
		     },
		     "kill": {
		      "!type": "fn() -> ?"
		     },
		     "customRender": {
		      "!type": "bool"
		     },
		     "_frame": {
		      "!type": "+Phaser.Rectangle"
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
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> ?"
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
		      "!type": "+function"
		     },
		     "transformCallbackContext": {},
		     "scaleMin": {
		      "!type": "+Phaser.Point"
		     },
		     "scaleMax": {
		      "!type": "+Phaser.Point"
		     },
		     "checkTransform": {
		      "!type": "fn(wt: +PIXI.Matrix)"
		     },
		     "setScaleMinMax": {
		      "!type": "fn(minX: number|+null, minY: number|+null, maxX: number|+null, maxY: number|+null)"
		     },
		     "smoothed": {
		      "!type": "bool"
		     }
		    }
		   },
		   "Particle#update": {
		    "prototype": {
		     "autoScale": {},
		     "alpha": {},
		     "autoAlpha": {}
		    }
		   },
		   "Particle#setAlphaData": {
		    "prototype": {
		     "alphaData": {},
		     "_a": {},
		     "alpha": {},
		     "autoAlpha": {}
		    }
		   },
		   "Particle#setScaleData": {
		    "prototype": {
		     "scaleData": {},
		     "_s": {},
		     "autoScale": {}
		    }
		   },
		   "Particle#reset": {
		    "prototype": {
		     "alpha": {},
		     "autoScale": {},
		     "autoAlpha": {}
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
		     "_tempMatrix": {
		      "!type": "+PIXI.Matrix"
		     },
		     "render": {
		      "!type": "fn()"
		     },
		     "renderXY": {
		      "!type": "fn()"
		     },
		     "renderRawXY": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "RenderTexture#renderXY#_tempMatrix": {
		    "tx": {},
		    "ty": {}
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
		     "_text": {
		      "!type": "string"
		     },
		     "grabData": {
		      "!type": "+array"
		     },
		     "frameData": {
		      "!type": "+Phaser.FrameData"
		     },
		     "grabData[undefined]": {},
		     "stamp": {
		      "!type": "+Phaser.Image"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "setFixedWidth": {
		      "!type": "fn()"
		     },
		     "setText": {
		      "!type": "fn()"
		     },
		     "buildRetroFontText": {
		      "!type": "fn()"
		     },
		     "pasteLine": {
		      "!type": "fn()"
		     },
		     "getLongestLine": {
		      "!type": "fn()"
		     },
		     "removeUnsupportedCharacters": {
		      "!type": "fn()"
		     },
		     "updateOffset": {
		      "!type": "fn()"
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
		     "_tempMatrix": {
		      "!type": "+PIXI.Matrix"
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
		   "RetroFont#setFixedWidth": {
		    "prototype": {
		     "fixedWidth": {},
		     "align": {}
		    }
		   },
		   "RetroFont#setText": {
		    "prototype": {
		     "multiLine": {},
		     "customSpacingX": {},
		     "customSpacingY": {},
		     "align": {},
		     "autoUpperCase": {},
		     "text": {}
		    }
		   },
		   "RetroFont#buildRetroFontText": {
		    "prototype": {
		     "requiresReTint": {}
		    }
		   },
		   "RetroFont#pasteLine#stamp": {
		    "frame": {}
		   },
		   "RetroFont#updateOffset~frames": {
		    "undefined].x": {},
		    "undefined].y": {}
		   },
		   "Rope": {
		    "!type": "fn(game: +Phaser.Game, x: number, y: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+PIXI.Texture, frame: string|number, points: [?])",
		    "prototype": {
		     "points": {},
		     "_hasUpdateAnimation": {},
		     "_updateAnimationCallback": {},
		     "type": {
		      "!type": "number"
		     },
		     "_scroll": {
		      "!type": "+Phaser.Point"
		     },
		     "preUpdatePhysics": {},
		     "preUpdateLifeSpan": {},
		     "preUpdateInWorld": {},
		     "preUpdateCore": {},
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "updateAnimation": {
		      "!type": "+function"
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
		     "_bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_exists": {
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
		      "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> ?"
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
		      "!type": "fn() -> ?"
		     },
		     "sendToBack": {
		      "!type": "fn() -> ?"
		     },
		     "moveUp": {
		      "!type": "fn() -> ?"
		     },
		     "moveDown": {
		      "!type": "fn() -> ?"
		     },
		     "cropRect": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_crop": {
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
		     "_fixedToCamera": {
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
		     "_outOfBoundsFired": {
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
		      "!type": "fn(health: number) -> ?"
		     },
		     "kill": {
		      "!type": "fn() -> ?"
		     },
		     "customRender": {
		      "!type": "bool"
		     },
		     "_frame": {
		      "!type": "+Phaser.Rectangle"
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
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> ?"
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
		      "!type": "+function"
		     },
		     "transformCallbackContext": {},
		     "scaleMin": {
		      "!type": "+Phaser.Point"
		     },
		     "scaleMax": {
		      "!type": "+Phaser.Point"
		     },
		     "checkTransform": {
		      "!type": "fn(wt: +PIXI.Matrix)"
		     },
		     "setScaleMinMax": {
		      "!type": "fn(minX: number|+null, minY: number|+null, maxX: number|+null, maxY: number|+null)"
		     },
		     "smoothed": {
		      "!type": "bool"
		     }
		    }
		   },
		   "Rope#preUpdate#tilePosition": {
		    "x": {},
		    "y": {}
		   },
		   "Rope#reset#tilePosition": {
		    "x": {},
		    "y": {}
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
		     "preUpdatePhysics": {},
		     "preUpdateLifeSpan": {},
		     "preUpdateInWorld": {},
		     "preUpdateCore": {},
		     "preUpdate": {
		      "!type": "fn() -> ?"
		     },
		     "anchor": {},
		     "texture": {},
		     "_width": {},
		     "_height": {},
		     "tint": {},
		     "cachedTint": {},
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
		     "_bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_exists": {
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
		      "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> ?"
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
		      "!type": "fn() -> ?"
		     },
		     "sendToBack": {
		      "!type": "fn() -> ?"
		     },
		     "moveUp": {
		      "!type": "fn() -> ?"
		     },
		     "moveDown": {
		      "!type": "fn() -> ?"
		     },
		     "cropRect": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_crop": {
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
		     "_fixedToCamera": {
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
		     "_outOfBoundsFired": {
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
		      "!type": "fn(health: number) -> ?"
		     },
		     "kill": {
		      "!type": "fn() -> ?"
		     },
		     "customRender": {
		      "!type": "bool"
		     },
		     "_frame": {
		      "!type": "+Phaser.Rectangle"
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
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> ?"
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
		      "!type": "fn(x: number, y: number, health: number) -> ?"
		     },
		     "transformCallback": {
		      "!type": "+function"
		     },
		     "transformCallbackContext": {},
		     "scaleMin": {
		      "!type": "+Phaser.Point"
		     },
		     "scaleMax": {
		      "!type": "+Phaser.Point"
		     },
		     "checkTransform": {
		      "!type": "fn(wt: +PIXI.Matrix)"
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
		     "_sortProperty": {
		      "!type": "string"
		     },
		     "add": {
		      "!type": "fn(child: +DisplayObject, silent: bool) -> ?"
		     },
		     "addToHash": {
		      "!type": "fn(child: +DisplayObject) -> ?"
		     },
		     "removeFromHash": {
		      "!type": "fn(child: +DisplayObject) -> ?"
		     },
		     "addMultiple": {
		      "!type": "fn(children: [?]|+Phaser.Group, silent: bool) -> ?"
		     },
		     "addAt": {
		      "!type": "fn(child: +DisplayObject, index: number, silent: bool) -> ?"
		     },
		     "getAt": {
		      "!type": "fn(index: number) -> ?"
		     },
		     "create": {
		      "!type": "fn(x: number, y: number, key: string, frame: number|string, exists: bool) -> ?"
		     },
		     "createMultiple": {
		      "!type": "fn(quantity: number, key: string, frame: number|string, exists: bool)"
		     },
		     "updateZ": {
		      "!type": "fn()"
		     },
		     "resetCursor": {
		      "!type": "fn(index: number) -> ?"
		     },
		     "next": {
		      "!type": "fn() -> ?"
		     },
		     "previous": {
		      "!type": "fn() -> ?"
		     },
		     "swap": {
		      "!type": "fn(child1: +any, child2: +any)"
		     },
		     "bringToTop": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "sendToBack": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "moveUp": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "moveDown": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "xy": {
		      "!type": "fn(index: number, x: number, y: number)"
		     },
		     "reverse": {
		      "!type": "fn()"
		     },
		     "getIndex": {
		      "!type": "fn(child: +any) -> ?"
		     },
		     "replace": {
		      "!type": "fn(oldChild: +any, newChild: +any) -> ?"
		     },
		     "hasProperty": {
		      "!type": "fn(child: +any, key: [?]) -> ?"
		     },
		     "setProperty": {
		      "!type": "fn(child: +any, key: +array, value: +any, operation: number, force: bool) -> ?"
		     },
		     "checkProperty": {
		      "!type": "fn(child: +any, key: +array, value: +any, force: bool) -> ?"
		     },
		     "set": {
		      "!type": "fn(child: +Phaser.Sprite, key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool) -> ?"
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
		      "!type": "fn(predicate: +function, checkExists: bool) -> ?"
		     },
		     "forEach": {
		      "!type": "fn(callback: +function, callbackContext: ?, checkExists: bool, args: +any)"
		     },
		     "forEachExists": {
		      "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		     },
		     "forEachAlive": {
		      "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		     },
		     "forEachDead": {
		      "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		     },
		     "sort": {
		      "!type": "fn(key: string, order: number)"
		     },
		     "customSort": {
		      "!type": "fn(sortHandler: +function, context: ?)"
		     },
		     "ascendingSortHandler": {
		      "!type": "fn(a: ?, b: ?)"
		     },
		     "descendingSortHandler": {
		      "!type": "fn(a: ?, b: ?)"
		     },
		     "iterate": {
		      "!type": "fn(key: string, value: +any, returnType: number, callback: +function, callbackContext: ?, args: [?]) -> ?"
		     },
		     "getFirstExists": {
		      "!type": "fn(exists: bool) -> ?"
		     },
		     "getFirstAlive": {
		      "!type": "fn() -> ?"
		     },
		     "getFirstDead": {
		      "!type": "fn() -> ?"
		     },
		     "getTop": {
		      "!type": "fn() -> ?"
		     },
		     "getBottom": {
		      "!type": "fn() -> ?"
		     },
		     "countLiving": {
		      "!type": "fn() -> ?"
		     },
		     "countDead": {
		      "!type": "fn() -> ?"
		     },
		     "getRandom": {
		      "!type": "fn(startIndex: number, length: number) -> ?"
		     },
		     "remove": {
		      "!type": "fn(child: +any, destroy: bool, silent: bool) -> ?"
		     },
		     "moveAll": {
		      "!type": "fn(group: +Phaser.Group, silent: bool) -> ?"
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
		     "_res": {
		      "!type": "number"
		     },
		     "_text": {
		      "!type": "string"
		     },
		     "_fontComponents": {},
		     "_lineSpacing": {
		      "!type": "number"
		     },
		     "_charCount": {
		      "!type": "number"
		     },
		     "_width": {
		      "!type": "number"
		     },
		     "_height": {
		      "!type": "number"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "setShadow": {
		      "!type": "fn()"
		     },
		     "setStyle": {
		      "!type": "fn()"
		     },
		     "updateText": {
		      "!type": "fn()"
		     },
		     "renderTabLine": {
		      "!type": "fn()"
		     },
		     "updateShadow": {
		      "!type": "fn()"
		     },
		     "updateLine": {
		      "!type": "fn()"
		     },
		     "clearColors": {
		      "!type": "fn()"
		     },
		     "clearFontValues": {
		      "!type": "fn()"
		     },
		     "addColor": {
		      "!type": "fn()"
		     },
		     "addStrokeColor": {
		      "!type": "fn()"
		     },
		     "addFontStyle": {
		      "!type": "fn()"
		     },
		     "addFontWeight": {
		      "!type": "fn()"
		     },
		     "runWordWrap": {
		      "!type": "fn()"
		     },
		     "updateFont": {
		      "!type": "fn()"
		     },
		     "fontToComponents": {
		      "!type": "fn()"
		     },
		     "componentsToFont": {
		      "!type": "fn()"
		     },
		     "setText": {
		      "!type": "fn()"
		     },
		     "parseList": {
		      "!type": "fn()"
		     },
		     "setTextBounds": {
		      "!type": "fn()"
		     },
		     "updateTexture": {
		      "!type": "fn()"
		     },
		     "_renderWebGL": {
		      "!type": "fn()"
		     },
		     "_renderCanvas": {
		      "!type": "fn()"
		     },
		     "determineFontProperties": {
		      "!type": "fn()"
		     },
		     "getBounds": {
		      "!type": "fn()"
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
		     "cachedTint": {},
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
		     "_bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_exists": {
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
		      "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> ?"
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
		      "!type": "fn() -> ?"
		     },
		     "sendToBack": {
		      "!type": "fn() -> ?"
		     },
		     "moveUp": {
		      "!type": "fn() -> ?"
		     },
		     "moveDown": {
		      "!type": "fn() -> ?"
		     },
		     "cropRect": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_crop": {
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
		     "_fixedToCamera": {
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
		     "_outOfBoundsFired": {
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
		      "!type": "fn(health: number) -> ?"
		     },
		     "kill": {
		      "!type": "fn() -> ?"
		     },
		     "customRender": {
		      "!type": "bool"
		     },
		     "_frame": {
		      "!type": "+Phaser.Rectangle"
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
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> ?"
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
		      "!type": "fn(x: number, y: number, health: number) -> ?"
		     },
		     "transformCallback": {
		      "!type": "+function"
		     },
		     "transformCallbackContext": {},
		     "scaleMin": {
		      "!type": "+Phaser.Point"
		     },
		     "scaleMax": {
		      "!type": "+Phaser.Point"
		     },
		     "checkTransform": {
		      "!type": "fn(wt: +PIXI.Matrix)"
		     },
		     "setScaleMinMax": {
		      "!type": "fn(minX: number|+null, minY: number|+null, maxX: number|+null, maxY: number|+null)"
		     },
		     "smoothed": {
		      "!type": "bool"
		     }
		    },
		    "fontPropertiesCache[undefined]": {},
		    "fontPropertiesCache": {},
		    "fontPropertiesCanvas": {},
		    "fontPropertiesContext": {}
		   },
		   "Text#setShadow#style": {
		    "shadowOffsetX": {},
		    "shadowOffsetY": {},
		    "shadowColor": {},
		    "shadowBlur": {},
		    "shadowStroke": {},
		    "shadowFill": {}
		   },
		   "Text#setShadow": {
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "Text#setStyle~style": {
		    "font": {},
		    "backgroundColor": {},
		    "fill": {},
		    "align": {},
		    "boundsAlignH": {},
		    "boundsAlignV": {},
		    "stroke": {},
		    "strokeThickness": {},
		    "wordWrap": {},
		    "wordWrapWidth": {},
		    "shadowOffsetX": {},
		    "shadowOffsetY": {},
		    "shadowColor": {},
		    "shadowBlur": {},
		    "tabs": {},
		    "fontSize": {}
		   },
		   "Text#setStyle~components": {
		    "fontStyle": {},
		    "fontVariant": {},
		    "fontWeight": {},
		    "fontSize": {}
		   },
		   "Text#setStyle": {
		    "prototype": {
		     "_fontComponents": {},
		     "style": {},
		     "dirty": {}
		    }
		   },
		   "Text#updateText#texture": {
		    "baseTexture": {
		     "resolution": {}
		    }
		   },
		   "Text#updateText#context": {
		    "font": {},
		    "fillStyle": {},
		    "strokeStyle": {},
		    "textBaseline": {},
		    "lineWidth": {},
		    "lineCap": {},
		    "lineJoin": {}
		   },
		   "Text#updateText~lineWidths": {
		    "undefined]": {}
		   },
		   "Text#updateText#canvas": {
		    "width": {},
		    "height": {}
		   },
		   "Text#updateText": {
		    "prototype": {
		     "_charCount": {}
		    }
		   },
		   "Text#updateShadow#context": {
		    "shadowOffsetX": {},
		    "shadowOffsetY": {},
		    "shadowColor": {},
		    "shadowBlur": {}
		   },
		   "Text#updateLine~components": {
		    "fontStyle": {},
		    "fontWeight": {}
		   },
		   "Text#updateLine#context": {
		    "font": {},
		    "strokeStyle": {},
		    "fillStyle": {}
		   },
		   "Text#clearColors": {
		    "prototype": {
		     "colors": {},
		     "strokeColors": {},
		     "dirty": {}
		    }
		   },
		   "Text#clearFontValues": {
		    "prototype": {
		     "fontStyles": {},
		     "fontWeights": {},
		     "dirty": {}
		    }
		   },
		   "Text#addColor": {
		    "prototype": {
		     "colors[undefined]": {},
		     "dirty": {}
		    }
		   },
		   "Text#addStrokeColor": {
		    "prototype": {
		     "strokeColors[undefined]": {},
		     "dirty": {}
		    }
		   },
		   "Text#addFontStyle": {
		    "prototype": {
		     "fontStyles[undefined]": {},
		     "dirty": {}
		    }
		   },
		   "Text#addFontWeight": {
		    "prototype": {
		     "fontWeights[undefined]": {},
		     "dirty": {}
		    }
		   },
		   "Text#updateFont#style": {
		    "font": {}
		   },
		   "Text#updateFont": {
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "Text#setText": {
		    "prototype": {
		     "text": {},
		     "dirty": {}
		    }
		   },
		   "Text#parseList": {
		    "prototype": {
		     "text": {},
		     "dirty": {}
		    }
		   },
		   "Text#setTextBounds": {
		    "prototype": {
		     "textBounds": {}
		    }
		   },
		   "Text#setTextBounds#style": {
		    "wordWrapWidth": {}
		   },
		   "Text#updateTexture~base": {
		    "width": {},
		    "height": {}
		   },
		   "Text#updateTexture~crop": {
		    "width": {},
		    "height": {}
		   },
		   "Text#updateTexture~frame": {
		    "width": {},
		    "height": {}
		   },
		   "Text#updateTexture#texture": {
		    "width": {},
		    "height": {},
		    "requiresReTint": {}
		   },
		   "Text#updateTexture": {
		    "prototype": {
		     "_width": {},
		     "_height": {},
		     "renderable": {}
		    }
		   },
		   "Text#updateTexture#pivot": {
		    "x": {},
		    "y": {}
		   },
		   "Text#_renderWebGL": {
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "Text#_renderCanvas": {
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "Text#determineFontProperties~context": {
		    "font": {},
		    "fillStyle": {},
		    "textBaseline": {}
		   },
		   "Text#determineFontProperties~canvas": {
		    "width": {},
		    "height": {}
		   },
		   "Text#determineFontProperties~properties": {
		    "ascent": {},
		    "descent": {},
		    "fontSize": {}
		   },
		   "Text#getBounds": {
		    "prototype": {
		     "dirty": {}
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
		     "_scroll": {
		      "!type": "+Phaser.Point"
		     },
		     "preUpdatePhysics": {},
		     "preUpdateLifeSpan": {},
		     "preUpdateInWorld": {},
		     "preUpdateCore": {},
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "autoScroll": {
		      "!type": "fn()"
		     },
		     "stopScroll": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
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
		     "_bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_exists": {
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
		      "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> ?"
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
		      "!type": "fn() -> ?"
		     },
		     "sendToBack": {
		      "!type": "fn() -> ?"
		     },
		     "moveUp": {
		      "!type": "fn() -> ?"
		     },
		     "moveDown": {
		      "!type": "fn() -> ?"
		     },
		     "destroyPhase": {
		      "!type": "bool"
		     },
		     "_fixedToCamera": {
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
		     "_outOfBoundsFired": {
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
		      "!type": "fn(health: number) -> ?"
		     },
		     "kill": {
		      "!type": "fn() -> ?"
		     },
		     "customRender": {
		      "!type": "bool"
		     },
		     "_frame": {
		      "!type": "+Phaser.Rectangle"
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
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> ?"
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
		   "TileSprite#preUpdate#tilePosition": {
		    "x": {},
		    "y": {}
		   },
		   "TileSprite#reset#tilePosition": {
		    "x": {},
		    "y": {}
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
		     "_timeOutID": {
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
		     "_retryID": {
		      "!type": "number"
		     },
		     "_codeMuted": {
		      "!type": "bool"
		     },
		     "_muted": {
		      "!type": "bool"
		     },
		     "_codePaused": {
		      "!type": "bool"
		     },
		     "_paused": {
		      "!type": "bool"
		     },
		     "_pending": {
		      "!type": "bool"
		     },
		     "_autoplay": {
		      "!type": "bool"
		     },
		     "baseTexture": {},
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
		      "!type": "fn()"
		     },
		     "startMediaStream": {
		      "!type": "fn()"
		     },
		     "getUserMediaTimeout": {
		      "!type": "fn()"
		     },
		     "getUserMediaError": {
		      "!type": "fn()"
		     },
		     "getUserMediaSuccess": {
		      "!type": "fn()"
		     },
		     "createVideoFromBlob": {
		      "!type": "fn()"
		     },
		     "createVideoFromURL": {
		      "!type": "fn()"
		     },
		     "updateTexture": {
		      "!type": "fn()"
		     },
		     "complete": {
		      "!type": "fn()"
		     },
		     "play": {
		      "!type": "fn()"
		     },
		     "playHandler": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "addToWorld": {
		      "!type": "fn()"
		     },
		     "render": {
		      "!type": "fn()"
		     },
		     "setMute": {
		      "!type": "fn()"
		     },
		     "unsetMute": {
		      "!type": "fn()"
		     },
		     "setPause": {
		      "!type": "fn()"
		     },
		     "setResume": {
		      "!type": "fn()"
		     },
		     "changeSource": {
		      "!type": "fn()"
		     },
		     "checkVideoProgress": {
		      "!type": "fn()"
		     },
		     "setTouchLock": {
		      "!type": "fn()"
		     },
		     "unlock": {
		      "!type": "fn()"
		     },
		     "grab": {
		      "!type": "fn()"
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
		   "Video#texture": {
		    "valid": {}
		   },
		   "Video~_video": {
		    "locked": {}
		   },
		   "Video#connectToMediaStream": {
		    "prototype": {
		     "video": {},
		     "videoStream": {},
		     "isStreaming": {}
		    }
		   },
		   "Video#connectToMediaStream#baseTexture": {
		    "source": {}
		   },
		   "Video#startMediaStream#videoStream": {
		    "active": {}
		   },
		   "Video#startMediaStream": {
		    "prototype": {
		     "video": {},
		     "_timeOutID": {}
		    }
		   },
		   "Video#startMediaStream#video": {
		    "width": {},
		    "height": {}
		   },
		   "Video#getUserMediaSuccess": {
		    "prototype": {
		     "videoStream": {}
		    }
		   },
		   "Video#getUserMediaSuccess#video": {
		    "mozSrcObject": {},
		    "src": {},
		    "onloadeddata": {
		     "!type": "fn()",
		     "checkStream": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Video#getUserMediaSuccess~self": {
		    "isStreaming": {},
		    "baseTexture.source": {}
		   },
		   "Video#createVideoFromBlob": {
		    "prototype": {
		     "video": {}
		    }
		   },
		   "Video#createVideoFromBlob#video": {
		    "controls": {},
		    "src": {},
		    "canplay": {}
		   },
		   "Video#createVideoFromURL#texture": {
		    "valid": {}
		   },
		   "Video#createVideoFromURL": {
		    "prototype": {
		     "video": {},
		     "retry": {},
		     "_retryID": {},
		     "key": {}
		    }
		   },
		   "Video#createVideoFromURL#video": {
		    "controls": {},
		    "src": {},
		    "canplay": {}
		   },
		   "Video#updateTexture": {
		    "prototype": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "Video#updateTexture#baseTexture": {
		    "source": {}
		   },
		   "Video#updateTexture#texture": {
		    "width": {},
		    "height": {},
		    "valid": {}
		   },
		   "Video#play#video": {
		    "loop": {},
		    "playbackRate": {}
		   },
		   "Video#play": {
		    "prototype": {
		     "_pending": {},
		     "retry": {},
		     "_retryID": {}
		    }
		   },
		   "Video#stop#video": {
		    "src": {}
		   },
		   "Video#stop#videoStream": {
		    "active": {}
		   },
		   "Video#stop": {
		    "prototype": {
		     "videoStream": {},
		     "isStreaming": {},
		     "_pending": {}
		    }
		   },
		   "Video#setMute": {
		    "prototype": {
		     "_muted": {}
		    }
		   },
		   "Video#setMute#video": {
		    "muted": {}
		   },
		   "Video#unsetMute": {
		    "prototype": {
		     "_muted": {}
		    }
		   },
		   "Video#unsetMute#video": {
		    "muted": {}
		   },
		   "Video#setPause": {
		    "prototype": {
		     "_paused": {}
		    }
		   },
		   "Video#setResume": {
		    "prototype": {
		     "_paused": {}
		    }
		   },
		   "Video#changeSource#texture": {
		    "valid": {}
		   },
		   "Video#changeSource": {
		    "prototype": {
		     "retry": {},
		     "_retryID": {},
		     "_autoplay": {},
		     "paused": {}
		    }
		   },
		   "Video#changeSource#video": {
		    "src": {}
		   },
		   "Video#checkVideoProgress": {
		    "prototype": {
		     "_retryID": {}
		    }
		   },
		   "Video#setTouchLock": {
		    "prototype": {
		     "touchLocked": {}
		    }
		   },
		   "Video#unlock": {
		    "prototype": {
		     "touchLocked": {}
		    }
		   },
		   "Video#unlock~_video": {
		    "locked": {}
		   },
		   "Video#removeVideoElement": {
		    "prototype": {
		     "video": {}
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
		     "_diameter": {
		      "!type": "number"
		     },
		     "_radius": {
		      "!type": "number"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "circumference": {
		      "!type": "fn()"
		     },
		     "random": {
		      "!type": "fn()"
		     },
		     "getBounds": {
		      "!type": "fn()"
		     },
		     "setTo": {
		      "!type": "fn()"
		     },
		     "copyFrom": {
		      "!type": "fn()"
		     },
		     "copyTo": {
		      "!type": "fn()"
		     },
		     "distance": {
		      "!type": "fn()"
		     },
		     "clone": {
		      "!type": "fn()"
		     },
		     "contains": {
		      "!type": "fn()"
		     },
		     "circumferencePoint": {
		      "!type": "fn()"
		     },
		     "offset": {
		      "!type": "fn()"
		     },
		     "offsetPoint": {
		      "!type": "fn()"
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
		     "!type": "fn()"
		    },
		    "equals": {
		     "!type": "fn()"
		    },
		    "intersects": {
		     "!type": "fn()"
		    },
		    "circumferencePoint": {
		     "!type": "fn()"
		    },
		    "circumferencePoint~out": {
		     "x": {},
		     "y": {}
		    },
		    "intersectsRectangle": {
		     "!type": "fn()"
		    }
		   },
		   "Circle#random~out": {
		    "x": {},
		    "y": {}
		   },
		   "Circle#setTo": {
		    "prototype": {
		     "x": {},
		     "y": {},
		     "_diameter": {},
		     "_radius": {}
		    }
		   },
		   "Circle#offset": {
		    "prototype": {
		     "x": {},
		     "y": {}
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
		      "!type": "fn()"
		     },
		     "getBounds": {
		      "!type": "fn()"
		     },
		     "copyFrom": {
		      "!type": "fn()"
		     },
		     "copyTo": {
		      "!type": "fn()"
		     },
		     "clone": {
		      "!type": "fn()"
		     },
		     "contains": {
		      "!type": "fn()"
		     },
		     "random": {
		      "!type": "fn()"
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
		     "!type": "fn()"
		    }
		   },
		   "Ellipse#setTo": {
		    "prototype": {
		     "x": {},
		     "y": {},
		     "width": {},
		     "height": {}
		    }
		   },
		   "Ellipse#random~out": {
		    "x": {},
		    "y": {}
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
		      "!type": "fn()"
		     },
		     "fromSprite": {
		      "!type": "fn()"
		     },
		     "fromAngle": {
		      "!type": "fn()"
		     },
		     "rotate": {
		      "!type": "fn()"
		     },
		     "rotateAround": {
		      "!type": "fn()"
		     },
		     "intersects": {
		      "!type": "fn()"
		     },
		     "reflect": {
		      "!type": "fn()"
		     },
		     "midPoint": {
		      "!type": "fn()"
		     },
		     "centerOn": {
		      "!type": "fn()"
		     },
		     "pointOnLine": {
		      "!type": "fn()"
		     },
		     "pointOnSegment": {
		      "!type": "fn()"
		     },
		     "random": {
		      "!type": "fn()"
		     },
		     "coordinatesOnLine": {
		      "!type": "fn()"
		     },
		     "clone": {
		      "!type": "fn()"
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
		     "!type": "fn()"
		    },
		    "intersectsPoints~result": {
		     "x": {},
		     "y": {}
		    },
		    "intersects": {
		     "!type": "fn()"
		    },
		    "reflect": {
		     "!type": "fn()"
		    }
		   },
		   "Line#midPoint~out": {
		    "x": {},
		    "y": {}
		   },
		   "Line#random~out": {
		    "x": {},
		    "y": {}
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
		      "!type": "fn()"
		     },
		     "setTo": {
		      "!type": "fn()"
		     },
		     "clone": {
		      "!type": "fn()"
		     },
		     "copyTo": {
		      "!type": "fn()"
		     },
		     "copyFrom": {
		      "!type": "fn()"
		     },
		     "toArray": {
		      "!type": "fn()"
		     },
		     "apply": {
		      "!type": "fn()"
		     },
		     "applyInverse": {
		      "!type": "fn()"
		     },
		     "translate": {
		      "!type": "fn()"
		     },
		     "scale": {
		      "!type": "fn()"
		     },
		     "rotate": {
		      "!type": "fn()"
		     },
		     "append": {
		      "!type": "fn()"
		     },
		     "identity": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Matrix#setTo": {
		    "prototype": {
		     "a": {},
		     "b": {},
		     "c": {},
		     "d": {},
		     "tx": {},
		     "ty": {}
		    }
		   },
		   "Matrix#clone~output": {
		    "a": {},
		    "b": {},
		    "c": {},
		    "d": {},
		    "tx": {},
		    "ty": {}
		   },
		   "Matrix#copyFrom": {
		    "prototype": {
		     "a": {},
		     "b": {},
		     "c": {},
		     "d": {},
		     "tx": {},
		     "ty": {}
		    }
		   },
		   "Matrix#toArray~array": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {},
		    "4]": {},
		    "5]": {},
		    "6]": {},
		    "7]": {},
		    "8]": {}
		   },
		   "Matrix#apply~newPos": {
		    "x": {},
		    "y": {}
		   },
		   "Matrix#applyInverse~newPos": {
		    "x": {},
		    "y": {}
		   },
		   "Matrix#translate": {
		    "prototype": {
		     "tx": {},
		     "ty": {}
		    }
		   },
		   "Matrix#scale": {
		    "prototype": {
		     "a": {},
		     "d": {},
		     "c": {},
		     "b": {},
		     "tx": {},
		     "ty": {}
		    }
		   },
		   "Matrix#rotate": {
		    "prototype": {
		     "a": {},
		     "b": {},
		     "c": {},
		     "d": {},
		     "tx": {},
		     "ty": {}
		    }
		   },
		   "Matrix#append": {
		    "prototype": {
		     "a": {},
		     "b": {},
		     "c": {},
		     "d": {},
		     "tx": {},
		     "ty": {}
		    }
		   },
		   "identityMatrix": {},
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
		      "!type": "fn()"
		     },
		     "invert": {
		      "!type": "fn()"
		     },
		     "setTo": {
		      "!type": "fn()"
		     },
		     "set": {
		      "!type": "fn()"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "subtract": {
		      "!type": "fn()"
		     },
		     "multiply": {
		      "!type": "fn()"
		     },
		     "divide": {
		      "!type": "fn()"
		     },
		     "clampX": {
		      "!type": "fn()"
		     },
		     "clampY": {
		      "!type": "fn()"
		     },
		     "clamp": {
		      "!type": "fn()"
		     },
		     "clone": {
		      "!type": "fn()"
		     },
		     "copyTo": {
		      "!type": "fn()"
		     },
		     "distance": {
		      "!type": "fn()"
		     },
		     "equals": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "fn()"
		     },
		     "rotate": {
		      "!type": "fn()"
		     },
		     "getMagnitude": {
		      "!type": "fn()"
		     },
		     "getMagnitudeSq": {
		      "!type": "fn()"
		     },
		     "setMagnitude": {
		      "!type": "fn()"
		     },
		     "normalize": {
		      "!type": "fn()"
		     },
		     "isZero": {
		      "!type": "fn()"
		     },
		     "dot": {
		      "!type": "fn()"
		     },
		     "cross": {
		      "!type": "fn()"
		     },
		     "perp": {
		      "!type": "fn()"
		     },
		     "rperp": {
		      "!type": "fn()"
		     },
		     "normalRightHand": {
		      "!type": "fn()"
		     },
		     "floor": {
		      "!type": "fn()"
		     },
		     "ceil": {
		      "!type": "fn()"
		     }
		    },
		    "add": {
		     "!type": "fn()"
		    },
		    "add~out": {
		     "x": {},
		     "y": {}
		    },
		    "subtract": {
		     "!type": "fn()"
		    },
		    "subtract~out": {
		     "x": {},
		     "y": {}
		    },
		    "multiply": {
		     "!type": "fn()"
		    },
		    "multiply~out": {
		     "x": {},
		     "y": {}
		    },
		    "divide": {
		     "!type": "fn()"
		    },
		    "divide~out": {
		     "x": {},
		     "y": {}
		    },
		    "equals": {
		     "!type": "fn()"
		    },
		    "angle": {
		     "!type": "fn()"
		    },
		    "negative": {
		     "!type": "fn()"
		    },
		    "multiplyAdd": {
		     "!type": "fn()"
		    },
		    "interpolate": {
		     "!type": "fn()"
		    },
		    "perp": {
		     "!type": "fn()"
		    },
		    "rperp": {
		     "!type": "fn()"
		    },
		    "distance": {
		     "!type": "fn()"
		    },
		    "project": {
		     "!type": "fn()"
		    },
		    "projectUnit": {
		     "!type": "fn()"
		    },
		    "normalRightHand": {
		     "!type": "fn()"
		    },
		    "normalize": {
		     "!type": "fn()"
		    },
		    "rotate": {
		     "!type": "fn()"
		    },
		    "centroid": {
		     "!type": "fn()"
		    },
		    "parse": {
		     "!type": "fn()"
		    },
		    "parse~point": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Point#setTo": {
		    "prototype": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Point#set": {
		    "prototype": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Point#add": {
		    "prototype": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Point#subtract": {
		    "prototype": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Point#multiply": {
		    "prototype": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Point#divide": {
		    "prototype": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Point#clampX": {
		    "prototype": {
		     "x": {}
		    }
		   },
		   "Point#clampY": {
		    "prototype": {
		     "y": {}
		    }
		   },
		   "Point#clamp": {
		    "prototype": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Point#normalize": {
		    "prototype": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Polygon": {
		    "!type": "fn(points: [?]|[?]|+Phaser.Point|number)",
		    "prototype": {
		     "area": {
		      "!type": "number"
		     },
		     "_points": {
		      "!type": "+array"
		     },
		     "closed": {
		      "!type": "bool"
		     },
		     "type": {
		      "!type": "number"
		     },
		     "toNumberArray": {
		      "!type": "fn()"
		     },
		     "flatten": {
		      "!type": "fn()"
		     },
		     "clone": {
		      "!type": "fn()"
		     },
		     "contains": {
		      "!type": "fn()"
		     },
		     "setTo": {
		      "!type": "fn()"
		     },
		     "calculateArea": {
		      "!type": "fn()"
		     },
		     "points": {
		      "!type": "[?]"
		     }
		    }
		   },
		   "Polygon#flatten": {
		    "prototype": {
		     "_points": {}
		    }
		   },
		   "Polygon#setTo": {
		    "prototype": {
		     "area": {},
		     "_points": {}
		    }
		   },
		   "Polygon#calculateArea": {
		    "prototype": {
		     "area": {}
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
		      "!type": "fn()"
		     },
		     "offsetPoint": {
		      "!type": "fn()"
		     },
		     "setTo": {
		      "!type": "fn()"
		     },
		     "scale": {
		      "!type": "fn()"
		     },
		     "centerOn": {
		      "!type": "fn()"
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
		      "!type": "fn()"
		     },
		     "copyTo": {
		      "!type": "fn()"
		     },
		     "inflate": {
		      "!type": "fn()"
		     },
		     "size": {
		      "!type": "fn()"
		     },
		     "resize": {
		      "!type": "fn()"
		     },
		     "clone": {
		      "!type": "fn()"
		     },
		     "contains": {
		      "!type": "fn()"
		     },
		     "containsRect": {
		      "!type": "fn()"
		     },
		     "equals": {
		      "!type": "fn()"
		     },
		     "intersection": {
		      "!type": "fn()"
		     },
		     "intersects": {
		      "!type": "fn()"
		     },
		     "intersectsRaw": {
		      "!type": "fn()"
		     },
		     "union": {
		      "!type": "fn()"
		     },
		     "random": {
		      "!type": "fn()"
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
		      "!type": "fn(points: [?], out: +Phaser.Rectangle) -> ?"
		     }
		    },
		    "inflate": {
		     "!type": "fn()"
		    },
		    "inflatePoint": {
		     "!type": "fn()"
		    },
		    "size": {
		     "!type": "fn()"
		    },
		    "clone": {
		     "!type": "fn()"
		    },
		    "contains": {
		     "!type": "fn()"
		    },
		    "containsRaw": {
		     "!type": "fn()"
		    },
		    "containsPoint": {
		     "!type": "fn()"
		    },
		    "containsRect": {
		     "!type": "fn()"
		    },
		    "equals": {
		     "!type": "fn()"
		    },
		    "sameDimensions": {
		     "!type": "fn()"
		    },
		    "intersection": {
		     "!type": "fn()"
		    },
		    "intersection~output": {
		     "x": {},
		     "y": {},
		     "width": {},
		     "height": {}
		    },
		    "intersects": {
		     "!type": "fn()"
		    },
		    "intersectsRaw": {
		     "!type": "fn()"
		    },
		    "union": {
		     "!type": "fn()"
		    },
		    "aabb": {
		     "!type": "fn()"
		    }
		   },
		   "Rectangle#offset": {
		    "prototype": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Rectangle#setTo": {
		    "prototype": {
		     "x": {},
		     "y": {},
		     "width": {},
		     "height": {}
		    }
		   },
		   "Rectangle#scale": {
		    "prototype": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "Rectangle#centerOn": {
		    "prototype": {
		     "centerX": {},
		     "centerY": {}
		    }
		   },
		   "Rectangle#floor": {
		    "prototype": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Rectangle#floorAll": {
		    "prototype": {
		     "x": {},
		     "y": {},
		     "width": {},
		     "height": {}
		    }
		   },
		   "Rectangle#ceil": {
		    "prototype": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Rectangle#ceilAll": {
		    "prototype": {
		     "x": {},
		     "y": {},
		     "width": {},
		     "height": {}
		    }
		   },
		   "Rectangle#resize": {
		    "prototype": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "Rectangle#random~out": {
		    "x": {},
		    "y": {}
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
		      "!type": "fn()"
		     },
		     "contains": {
		      "!type": "fn()"
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
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "padFloat": {
		      "!type": "fn()"
		     },
		     "justPressed": {
		      "!type": "fn()"
		     },
		     "justReleased": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "DeviceButton#start": {
		    "prototype": {
		     "isDown": {},
		     "isUp": {},
		     "timeDown": {},
		     "duration": {},
		     "repeats": {},
		     "event": {},
		     "value": {},
		     "altKey": {},
		     "shiftKey": {},
		     "ctrlKey": {}
		    }
		   },
		   "DeviceButton#stop": {
		    "prototype": {
		     "isDown": {},
		     "isUp": {},
		     "timeUp": {},
		     "event": {},
		     "value": {},
		     "altKey": {},
		     "shiftKey": {},
		     "ctrlKey": {}
		    }
		   },
		   "DeviceButton#padFloat": {
		    "prototype": {
		     "value": {}
		    }
		   },
		   "DeviceButton#reset": {
		    "prototype": {
		     "isDown": {},
		     "isUp": {},
		     "timeDown": {},
		     "duration": {},
		     "repeats": {},
		     "altKey": {},
		     "shiftKey": {},
		     "ctrlKey": {}
		    }
		   },
		   "DeviceButton#destroy": {
		    "prototype": {
		     "parent": {},
		     "game": {}
		    }
		   },
		   "Gamepad": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "_gamepadIndexMap": {},
		     "_rawPads": {
		      "!type": "[?]"
		     },
		     "_active": {
		      "!type": "bool"
		     },
		     "enabled": {
		      "!type": "bool"
		     },
		     "_gamepadSupportAvailable": {
		      "!type": "bool"
		     },
		     "_prevRawGamepadTypes": {
		      "!type": "[?]"
		     },
		     "_prevTimestamps": {
		      "!type": "[?]"
		     },
		     "callbackContext": {},
		     "onConnectCallback": {
		      "!type": "+function"
		     },
		     "onDisconnectCallback": {
		      "!type": "+function"
		     },
		     "onDownCallback": {
		      "!type": "+function"
		     },
		     "onUpCallback": {
		      "!type": "+function"
		     },
		     "onAxisCallback": {
		      "!type": "+function"
		     },
		     "onFloatCallback": {
		      "!type": "+function"
		     },
		     "_ongamepadconnected": {
		      "!type": "+function"
		     },
		     "_gamepaddisconnected": {
		      "!type": "+function"
		     },
		     "_gamepads": {
		      "!type": "[?]"
		     },
		     "addCallbacks": {
		      "!type": "fn()"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "onGamepadConnected": {
		      "!type": "fn()"
		     },
		     "onGamepadDisconnected": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "_pollGamepads": {
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
		      "!type": "fn(buttonCode: number, duration: number) -> ?"
		     },
		     "justReleased": {
		      "!type": "fn()"
		     },
		     "isDown": {
		      "!type": "fn()"
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
		    },
		    "BUTTON_0": {},
		    "BUTTON_1": {},
		    "BUTTON_2": {},
		    "BUTTON_3": {},
		    "BUTTON_4": {},
		    "BUTTON_5": {},
		    "BUTTON_6": {},
		    "BUTTON_7": {},
		    "BUTTON_8": {},
		    "BUTTON_9": {},
		    "BUTTON_10": {},
		    "BUTTON_11": {},
		    "BUTTON_12": {},
		    "BUTTON_13": {},
		    "BUTTON_14": {},
		    "BUTTON_15": {},
		    "AXIS_0": {},
		    "AXIS_1": {},
		    "AXIS_2": {},
		    "AXIS_3": {},
		    "AXIS_4": {},
		    "AXIS_5": {},
		    "AXIS_6": {},
		    "AXIS_7": {},
		    "AXIS_8": {},
		    "AXIS_9": {},
		    "XBOX360_A": {},
		    "XBOX360_B": {},
		    "XBOX360_X": {},
		    "XBOX360_Y": {},
		    "XBOX360_LEFT_BUMPER": {},
		    "XBOX360_RIGHT_BUMPER": {},
		    "XBOX360_LEFT_TRIGGER": {},
		    "XBOX360_RIGHT_TRIGGER": {},
		    "XBOX360_BACK": {},
		    "XBOX360_START": {},
		    "XBOX360_STICK_LEFT_BUTTON": {},
		    "XBOX360_STICK_RIGHT_BUTTON": {},
		    "XBOX360_DPAD_LEFT": {},
		    "XBOX360_DPAD_RIGHT": {},
		    "XBOX360_DPAD_UP": {},
		    "XBOX360_DPAD_DOWN": {},
		    "XBOX360_STICK_LEFT_X": {},
		    "XBOX360_STICK_LEFT_Y": {},
		    "XBOX360_STICK_RIGHT_X": {},
		    "XBOX360_STICK_RIGHT_Y": {},
		    "PS3XC_X": {},
		    "PS3XC_CIRCLE": {},
		    "PS3XC_SQUARE": {},
		    "PS3XC_TRIANGLE": {},
		    "PS3XC_L1": {},
		    "PS3XC_R1": {},
		    "PS3XC_L2": {},
		    "PS3XC_R2": {},
		    "PS3XC_SELECT": {},
		    "PS3XC_START": {},
		    "PS3XC_STICK_LEFT_BUTTON": {},
		    "PS3XC_STICK_RIGHT_BUTTON": {},
		    "PS3XC_DPAD_UP": {},
		    "PS3XC_DPAD_DOWN": {},
		    "PS3XC_DPAD_LEFT": {},
		    "PS3XC_DPAD_RIGHT": {},
		    "PS3XC_STICK_LEFT_X": {},
		    "PS3XC_STICK_LEFT_Y": {},
		    "PS3XC_STICK_RIGHT_X": {},
		    "PS3XC_STICK_RIGHT_Y": {}
		   },
		   "Gamepad#addCallbacks": {
		    "prototype": {
		     "onConnectCallback": {},
		     "onDisconnectCallback": {},
		     "onDownCallback": {},
		     "onUpCallback": {},
		     "onAxisCallback": {},
		     "onFloatCallback": {},
		     "callbackContext": {}
		    }
		   },
		   "Gamepad#start": {
		    "prototype": {
		     "_active": {},
		     "_onGamepadConnected": {
		      "!type": "fn()"
		     },
		     "_onGamepadDisconnected": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Gamepad#_pollGamepads": {
		    "prototype": {
		     "_rawPads": {},
		     "_prevRawGamepadTypes[undefined]": {}
		    }
		   },
		   "Gamepad#_pollGamepads~validConnections": {
		    "rawIndices": {},
		    "padIndices": {},
		    "rawIndices[undefined]": {},
		    "padIndices[undefined]": {}
		   },
		   "Gamepad#setDeadZones#_gamepads[undefined]": {
		    "deadZone": {}
		   },
		   "Gamepad#stop": {
		    "prototype": {
		     "_active": {}
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
		     "_localPoint": {
		      "!type": "+Phaser.Point"
		     },
		     "_pollCounter": {
		      "!type": "number"
		     },
		     "_oldPosition": {
		      "!type": "+Phaser.Point"
		     },
		     "_x": {
		      "!type": "number"
		     },
		     "_y": {
		      "!type": "number"
		     },
		     "boot": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "addMoveCallback": {
		      "!type": "fn()"
		     },
		     "deleteMoveCallback": {
		      "!type": "fn()"
		     },
		     "addPointer": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "resetSpeed": {
		      "!type": "fn()"
		     },
		     "startPointer": {
		      "!type": "fn()"
		     },
		     "updatePointer": {
		      "!type": "fn()"
		     },
		     "stopPointer": {
		      "!type": "fn()"
		     },
		     "countActivePointers": {
		      "!type": "fn()"
		     },
		     "getPointer": {
		      "!type": "fn()"
		     },
		     "getPointerFromIdentifier": {
		      "!type": "fn()"
		     },
		     "getPointerFromId": {
		      "!type": "fn()"
		     },
		     "getLocalPosition": {
		      "!type": "fn()"
		     },
		     "hitTest": {
		      "!type": "fn()"
		     },
		     "onClickTrampoline": {
		      "!type": "fn()"
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
		   "Input#boot": {
		    "prototype": {
		     "mousePointer": {},
		     "mouse": {},
		     "touch": {},
		     "mspointer": {},
		     "keyboard": {},
		     "gamepad": {},
		     "onDown": {},
		     "onUp": {},
		     "onTap": {},
		     "onHold": {},
		     "scale": {},
		     "speed": {},
		     "position": {},
		     "_oldPosition": {},
		     "circle": {},
		     "activePointer": {},
		     "hitCanvas": {},
		     "hitContext": {},
		     "_onClickTrampoline": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Input#boot#mousePointer": {
		    "active": {}
		   },
		   "Input#destroy": {
		    "prototype": {
		     "moveCallbacks": {}
		    }
		   },
		   "Input#update#speed": {
		    "x": {},
		    "y": {}
		   },
		   "Input#update": {
		    "prototype": {
		     "_pollCounter": {}
		    }
		   },
		   "Input#reset#game": {
		    "canvas": {
		     "style": {
		      "cursor": {}
		     }
		    }
		   },
		   "Input#reset": {
		    "prototype": {
		     "onDown": {},
		     "onUp": {},
		     "onTap": {},
		     "onHold": {},
		     "moveCallbacks": {},
		     "_pollCounter": {}
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
		     "_setHandCursor": {
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
		     "_dragPoint": {
		      "!type": "+Phaser.Point"
		     },
		     "_dragPhase": {
		      "!type": "bool"
		     },
		     "_wasEnabled": {
		      "!type": "bool"
		     },
		     "_tempPoint": {
		      "!type": "+Phaser.Point"
		     },
		     "_pointerData": {
		      "!type": "+array"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "addedToGroup": {
		      "!type": "fn()"
		     },
		     "removedFromGroup": {
		      "!type": "fn()"
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
		      "!type": "fn()"
		     },
		     "isPixelPerfect": {
		      "!type": "fn()"
		     },
		     "pointerX": {
		      "!type": "fn()"
		     },
		     "pointerY": {
		      "!type": "fn()"
		     },
		     "pointerDown": {
		      "!type": "fn()"
		     },
		     "pointerUp": {
		      "!type": "fn()"
		     },
		     "pointerTimeDown": {
		      "!type": "fn()"
		     },
		     "pointerTimeUp": {
		      "!type": "fn()"
		     },
		     "pointerOver": {
		      "!type": "fn()"
		     },
		     "pointerOut": {
		      "!type": "fn()"
		     },
		     "pointerTimeOver": {
		      "!type": "fn()"
		     },
		     "pointerTimeOut": {
		      "!type": "fn()"
		     },
		     "pointerDragged": {
		      "!type": "fn()"
		     },
		     "checkPointerDown": {
		      "!type": "fn()"
		     },
		     "checkPointerOver": {
		      "!type": "fn()"
		     },
		     "checkPixel": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "_pointerOverHandler": {
		      "!type": "fn()"
		     },
		     "_pointerOutHandler": {
		      "!type": "fn()"
		     },
		     "_touchedHandler": {
		      "!type": "fn()"
		     },
		     "_releasedHandler": {
		      "!type": "fn()"
		     },
		     "updateDrag": {
		      "!type": "fn()"
		     },
		     "justOver": {
		      "!type": "fn()"
		     },
		     "justOut": {
		      "!type": "fn()"
		     },
		     "justPressed": {
		      "!type": "fn()"
		     },
		     "justReleased": {
		      "!type": "fn()"
		     },
		     "overDuration": {
		      "!type": "fn()"
		     },
		     "downDuration": {
		      "!type": "fn()"
		     },
		     "enableDrag": {
		      "!type": "fn()"
		     },
		     "disableDrag": {
		      "!type": "fn()"
		     },
		     "startDrag": {
		      "!type": "fn()"
		     },
		     "globalToLocalX": {
		      "!type": "fn()"
		     },
		     "globalToLocalY": {
		      "!type": "fn()"
		     },
		     "stopDrag": {
		      "!type": "fn()"
		     },
		     "setDragLock": {
		      "!type": "fn()"
		     },
		     "enableSnap": {
		      "!type": "fn()"
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
		   "InputHandler#start": {
		    "prototype": {
		     "useHandCursor": {},
		     "priorityID": {},
		     "_pointerData[undefined]": {},
		     "snapOffset": {},
		     "enabled": {},
		     "_wasEnabled": {},
		     "flagged": {}
		    }
		   },
		   "InputHandler#start#_pointerData[undefined]": {
		    "id": {},
		    "x": {},
		    "y": {},
		    "isDown": {},
		    "isUp": {},
		    "isOver": {},
		    "isOut": {},
		    "timeOver": {},
		    "timeOut": {},
		    "timeDown": {},
		    "timeUp": {},
		    "downDuration": {},
		    "isDragged": {}
		   },
		   "InputHandler#removedFromGroup": {
		    "prototype": {
		     "_wasEnabled": {}
		    }
		   },
		   "InputHandler#reset": {
		    "prototype": {
		     "enabled": {},
		     "flagged": {},
		     "_pointerData[undefined]": {}
		    }
		   },
		   "InputHandler#reset#_pointerData[undefined]": {
		    "id": {},
		    "x": {},
		    "y": {},
		    "isDown": {},
		    "isUp": {},
		    "isOver": {},
		    "isOut": {},
		    "timeOver": {},
		    "timeOut": {},
		    "timeDown": {},
		    "timeUp": {},
		    "downDuration": {},
		    "isDragged": {}
		   },
		   "InputHandler#stop": {
		    "prototype": {
		     "enabled": {}
		    }
		   },
		   "InputHandler#destroy#game": {
		    "canvas": {
		     "style": {
		      "cursor": {}
		     }
		    }
		   },
		   "InputHandler#destroy": {
		    "prototype": {
		     "_setHandCursor": {},
		     "enabled": {},
		     "boundsRect": {},
		     "boundsSprite": {},
		     "sprite": {}
		    }
		   },
		   "InputHandler#destroy#_pointerData": {
		    "length": {}
		   },
		   "InputHandler#checkPixel": {
		    "prototype": {
		     "_dx": {},
		     "_dy": {}
		    }
		   },
		   "InputHandler#update#_pointerData[undefined]": {
		    "x": {},
		    "y": {}
		   },
		   "InputHandler#_pointerOverHandler~data": {
		    "isOver": {},
		    "isOut": {},
		    "timeOver": {},
		    "x": {},
		    "y": {}
		   },
		   "InputHandler#_pointerOverHandler#game": {
		    "canvas": {
		     "style": {
		      "cursor": {}
		     }
		    }
		   },
		   "InputHandler#_pointerOverHandler": {
		    "prototype": {
		     "_setHandCursor": {}
		    }
		   },
		   "InputHandler#_pointerOutHandler~data": {
		    "isOver": {},
		    "isOut": {},
		    "timeOut": {}
		   },
		   "InputHandler#_pointerOutHandler#game": {
		    "canvas": {
		     "style": {
		      "cursor": {}
		     }
		    }
		   },
		   "InputHandler#_pointerOutHandler": {
		    "prototype": {
		     "_setHandCursor": {}
		    }
		   },
		   "InputHandler#_touchedHandler~data": {
		    "isDown": {},
		    "isUp": {},
		    "timeDown": {}
		   },
		   "InputHandler#_releasedHandler~data": {
		    "isDown": {},
		    "isUp": {},
		    "timeUp": {},
		    "downDuration": {},
		    "isOver": {}
		   },
		   "InputHandler#_releasedHandler#game": {
		    "canvas": {
		     "style": {
		      "cursor": {}
		     }
		    }
		   },
		   "InputHandler#_releasedHandler": {
		    "prototype": {
		     "_setHandCursor": {}
		    }
		   },
		   "InputHandler#updateDrag#sprite": {
		    "cameraOffset": {
		     "x": {},
		     "y": {}
		    },
		    "x": {},
		    "y": {}
		   },
		   "InputHandler#enableDrag": {
		    "prototype": {
		     "_dragPoint": {},
		     "draggable": {},
		     "bringToTop": {},
		     "dragOffset": {},
		     "dragFromCenter": {},
		     "pixelPerfectClick": {},
		     "pixelPerfectAlpha": {},
		     "boundsRect": {},
		     "boundsSprite": {}
		    }
		   },
		   "InputHandler#disableDrag#_pointerData[undefined]": {
		    "isDragged": {}
		   },
		   "InputHandler#disableDrag": {
		    "prototype": {
		     "draggable": {},
		     "isDragged": {},
		     "_draggedPointerID": {}
		    }
		   },
		   "InputHandler#startDrag": {
		    "prototype": {
		     "isDragged": {},
		     "_draggedPointerID": {},
		     "_dragPhase": {}
		    }
		   },
		   "InputHandler#startDrag#_pointerData[undefined]": {
		    "isDragged": {}
		   },
		   "InputHandler#startDrag#sprite": {
		    "x": {},
		    "y": {}
		   },
		   "InputHandler#stopDrag": {
		    "prototype": {
		     "isDragged": {},
		     "_draggedPointerID": {},
		     "_dragPhase": {}
		    }
		   },
		   "InputHandler#stopDrag#_pointerData[undefined]": {
		    "isDragged": {}
		   },
		   "InputHandler#stopDrag#sprite": {
		    "cameraOffset": {
		     "x": {},
		     "y": {}
		    },
		    "x": {},
		    "y": {}
		   },
		   "InputHandler#setDragLock": {
		    "prototype": {
		     "allowHorizontalDrag": {},
		     "allowVerticalDrag": {}
		    }
		   },
		   "InputHandler#enableSnap": {
		    "prototype": {
		     "snapX": {},
		     "snapY": {},
		     "snapOffsetX": {},
		     "snapOffsetY": {},
		     "snapOnDrag": {},
		     "snapOnRelease": {}
		    }
		   },
		   "InputHandler#disableSnap": {
		    "prototype": {
		     "snapOnDrag": {},
		     "snapOnRelease": {}
		    }
		   },
		   "InputHandler#checkBoundsRect#sprite": {
		    "cameraOffset": {
		     "x": {},
		     "y": {}
		    },
		    "x": {},
		    "y": {}
		   },
		   "InputHandler#checkBoundsSprite#sprite": {
		    "cameraOffset": {
		     "x": {},
		     "y": {}
		    },
		    "x": {},
		    "y": {}
		   },
		   "Key": {
		    "!type": "fn(game: +Phaser.Game, keycode: number)",
		    "prototype": {
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "_enabled": {
		      "!type": "bool"
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
		      "!type": "+function"
		     },
		     "onHoldContext": {},
		     "onUp": {
		      "!type": "+Phaser.Signal"
		     },
		     "_justDown": {
		      "!type": "bool"
		     },
		     "_justUp": {
		      "!type": "bool"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "processKeyDown": {
		      "!type": "fn()"
		     },
		     "processKeyUp": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "downDuration": {
		      "!type": "fn()"
		     },
		     "upDuration": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Key#update": {
		    "prototype": {
		     "duration": {}
		    }
		   },
		   "Key#processKeyDown": {
		    "prototype": {
		     "event": {},
		     "altKey": {},
		     "ctrlKey": {},
		     "shiftKey": {},
		     "isDown": {},
		     "isUp": {},
		     "timeDown": {},
		     "duration": {},
		     "repeats": {},
		     "_justDown": {}
		    }
		   },
		   "Key#processKeyUp": {
		    "prototype": {
		     "event": {},
		     "isDown": {},
		     "isUp": {},
		     "timeUp": {},
		     "duration": {},
		     "_justUp": {}
		    }
		   },
		   "Key#reset": {
		    "prototype": {
		     "isDown": {},
		     "isUp": {},
		     "timeUp": {},
		     "duration": {},
		     "_enabled": {},
		     "_justDown": {},
		     "_justUp": {},
		     "onHoldCallback": {},
		     "onHoldContext": {}
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
		      "!type": "+function"
		     },
		     "onPressCallback": {
		      "!type": "+function"
		     },
		     "onUpCallback": {
		      "!type": "+function"
		     },
		     "_keys": {
		      "!type": "+array.<Phaser.Key>"
		     },
		     "_capture": {
		      "!type": "+array"
		     },
		     "_onKeyDown": {
		      "!type": "+function"
		     },
		     "_onKeyPress": {
		      "!type": "+function"
		     },
		     "_onKeyUp": {
		      "!type": "+function"
		     },
		     "_i": {
		      "!type": "number"
		     },
		     "_k": {
		      "!type": "number"
		     },
		     "addCallbacks": {
		      "!type": "fn()"
		     },
		     "addKey": {
		      "!type": "fn()"
		     },
		     "addKeys": {
		      "!type": "fn()"
		     },
		     "removeKey": {
		      "!type": "fn()"
		     },
		     "createCursorKeys": {
		      "!type": "fn()"
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
		      "!type": "fn()"
		     },
		     "removeKeyCapture": {
		      "!type": "fn()"
		     },
		     "clearCaptures": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "processKeyDown": {
		      "!type": "fn()"
		     },
		     "processKeyPress": {
		      "!type": "fn()"
		     },
		     "processKeyUp": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "downDuration": {
		      "!type": "fn()"
		     },
		     "upDuration": {
		      "!type": "fn()"
		     },
		     "isDown": {
		      "!type": "fn()"
		     },
		     "lastChar": {
		      "!type": "string"
		     },
		     "lastKey": {
		      "!type": "+Phaser.Key"
		     }
		    },
		    "A": {},
		    "B": {},
		    "C": {},
		    "D": {},
		    "E": {},
		    "F": {},
		    "G": {},
		    "H": {},
		    "I": {},
		    "J": {},
		    "K": {},
		    "L": {},
		    "M": {},
		    "N": {},
		    "O": {},
		    "P": {},
		    "Q": {},
		    "R": {},
		    "S": {},
		    "T": {},
		    "U": {},
		    "V": {},
		    "W": {},
		    "X": {},
		    "Y": {},
		    "Z": {},
		    "ZERO": {},
		    "ONE": {},
		    "TWO": {},
		    "THREE": {},
		    "FOUR": {},
		    "FIVE": {},
		    "SIX": {},
		    "SEVEN": {},
		    "EIGHT": {},
		    "NINE": {},
		    "NUMPAD_0": {},
		    "NUMPAD_1": {},
		    "NUMPAD_2": {},
		    "NUMPAD_3": {},
		    "NUMPAD_4": {},
		    "NUMPAD_5": {},
		    "NUMPAD_6": {},
		    "NUMPAD_7": {},
		    "NUMPAD_8": {},
		    "NUMPAD_9": {},
		    "NUMPAD_MULTIPLY": {},
		    "NUMPAD_ADD": {},
		    "NUMPAD_ENTER": {},
		    "NUMPAD_SUBTRACT": {},
		    "NUMPAD_DECIMAL": {},
		    "NUMPAD_DIVIDE": {},
		    "F1": {},
		    "F2": {},
		    "F3": {},
		    "F4": {},
		    "F5": {},
		    "F6": {},
		    "F7": {},
		    "F8": {},
		    "F9": {},
		    "F10": {},
		    "F11": {},
		    "F12": {},
		    "F13": {},
		    "F14": {},
		    "F15": {},
		    "COLON": {},
		    "EQUALS": {},
		    "COMMA": {},
		    "UNDERSCORE": {},
		    "PERIOD": {},
		    "QUESTION_MARK": {},
		    "TILDE": {},
		    "OPEN_BRACKET": {},
		    "BACKWARD_SLASH": {},
		    "CLOSED_BRACKET": {},
		    "QUOTES": {},
		    "BACKSPACE": {},
		    "TAB": {},
		    "CLEAR": {},
		    "ENTER": {},
		    "SHIFT": {},
		    "CONTROL": {},
		    "ALT": {},
		    "CAPS_LOCK": {},
		    "ESC": {},
		    "SPACEBAR": {},
		    "PAGE_UP": {},
		    "PAGE_DOWN": {},
		    "END": {},
		    "HOME": {},
		    "LEFT": {},
		    "UP": {},
		    "RIGHT": {},
		    "DOWN": {},
		    "PLUS": {},
		    "MINUS": {},
		    "INSERT": {},
		    "DELETE": {},
		    "HELP": {},
		    "NUM_LOCK": {}
		   },
		   "Keyboard#addCallbacks": {
		    "prototype": {
		     "callbackContext": {},
		     "onDownCallback": {},
		     "onUpCallback": {},
		     "onPressCallback": {}
		    }
		   },
		   "Keyboard#addKey": {
		    "prototype": {
		     "_keys[undefined]": {}
		    }
		   },
		   "Keyboard#addKeys~output": {
		    "undefined]": {}
		   },
		   "Keyboard#removeKey": {
		    "prototype": {
		     "_keys[undefined]": {}
		    }
		   },
		   "Keyboard#start": {
		    "prototype": {
		     "_onKeyDown": {
		      "!type": "fn()"
		     },
		     "_onKeyUp": {
		      "!type": "fn()"
		     },
		     "_onKeyPress": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Keyboard#stop": {
		    "prototype": {
		     "_onKeyDown": {},
		     "_onKeyUp": {},
		     "_onKeyPress": {}
		    }
		   },
		   "Keyboard#destroy#_keys": {
		    "length": {}
		   },
		   "Keyboard#destroy": {
		    "prototype": {
		     "_i": {}
		    }
		   },
		   "Keyboard#addKeyCapture": {
		    "prototype": {
		     "_capture[undefined]": {}
		    }
		   },
		   "Keyboard#clearCaptures": {
		    "prototype": {
		     "_capture": {}
		    }
		   },
		   "Keyboard#update": {
		    "prototype": {
		     "_i": {}
		    }
		   },
		   "Keyboard#processKeyDown": {
		    "prototype": {
		     "event": {},
		     "_keys[undefined]": {},
		     "_k": {}
		    }
		   },
		   "Keyboard#processKeyPress": {
		    "prototype": {
		     "pressEvent": {}
		    }
		   },
		   "Keyboard#processKeyUp": {
		    "prototype": {
		     "event": {},
		     "_keys[undefined]": {}
		    }
		   },
		   "Keyboard#reset": {
		    "prototype": {
		     "event": {}
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
		      "!type": "+function"
		     },
		     "mouseUpCallback": {
		      "!type": "+function"
		     },
		     "mouseOutCallback": {
		      "!type": "+function"
		     },
		     "mouseOverCallback": {
		      "!type": "+function"
		     },
		     "mouseWheelCallback": {
		      "!type": "+function"
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
		     "_onMouseDown": {
		      "!type": "+function"
		     },
		     "_onMouseMove": {
		      "!type": "+function"
		     },
		     "_onMouseUp": {
		      "!type": "+function"
		     },
		     "_onMouseOut": {
		      "!type": "+function"
		     },
		     "_onMouseOver": {
		      "!type": "+function"
		     },
		     "_onMouseWheel": {
		      "!type": "+function"
		     },
		     "_wheelEvent": {
		      "!type": "+Phaser.Mouse~WheelEventProxy"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "onMouseDown": {
		      "!type": "fn()"
		     },
		     "onMouseMove": {
		      "!type": "fn()"
		     },
		     "onMouseUp": {
		      "!type": "fn()"
		     },
		     "onMouseUpGlobal": {
		      "!type": "fn()"
		     },
		     "onMouseOut": {
		      "!type": "fn()"
		     },
		     "onMouseOver": {
		      "!type": "fn()"
		     },
		     "onMouseWheel": {
		      "!type": "fn()"
		     },
		     "requestPointerLock": {
		      "!type": "fn()"
		     },
		     "pointerLockChange": {
		      "!type": "fn()"
		     },
		     "releasePointerLock": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "WheelEventProxy": {
		      "!type": "fn(scaleFactor: number, deltaMode: number)"
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
		   "Mouse#start": {
		    "prototype": {
		     "_onMouseDown": {
		      "!type": "fn()"
		     },
		     "_onMouseMove": {
		      "!type": "fn()"
		     },
		     "_onMouseUp": {
		      "!type": "fn()"
		     },
		     "_onMouseUpGlobal": {
		      "!type": "fn()"
		     },
		     "_onMouseOut": {
		      "!type": "fn()"
		     },
		     "_onMouseOver": {
		      "!type": "fn()"
		     },
		     "_onMouseWheel": {
		      "!type": "fn()"
		     },
		     "_wheelEvent": {}
		    }
		   },
		   "Mouse#onMouseDown": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "Mouse#onMouseMove": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "Mouse#onMouseUp": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "Mouse#onMouseOut": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "Mouse#onMouseOut#input": {
		    "mousePointer": {
		     "withinGame": {}
		    }
		   },
		   "Mouse#onMouseOver": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "Mouse#onMouseOver#input": {
		    "mousePointer": {
		     "withinGame": {}
		    }
		   },
		   "Mouse#onMouseWheel": {
		    "prototype": {
		     "event": {},
		     "wheelDelta": {}
		    }
		   },
		   "Mouse#requestPointerLock~element": {
		    "requestPointerLock": {}
		   },
		   "Mouse#requestPointerLock": {
		    "prototype": {
		     "_pointerLockChange": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Mouse#pointerLockChange": {
		    "prototype": {
		     "locked": {}
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
		      "!type": "+function"
		     },
		     "pointerMoveCallback": {
		      "!type": "+function"
		     },
		     "pointerUpCallback": {
		      "!type": "+function"
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
		     "_onMSPointerDown": {
		      "!type": "+function"
		     },
		     "_onMSPointerMove": {
		      "!type": "+function"
		     },
		     "_onMSPointerUp": {
		      "!type": "+function"
		     },
		     "_onMSPointerUpGlobal": {
		      "!type": "+function"
		     },
		     "_onMSPointerOut": {
		      "!type": "+function"
		     },
		     "_onMSPointerOver": {
		      "!type": "+function"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "onPointerDown": {
		      "!type": "fn()"
		     },
		     "onPointerMove": {
		      "!type": "fn()"
		     },
		     "onPointerUp": {
		      "!type": "fn()"
		     },
		     "onPointerUpGlobal": {
		      "!type": "fn()"
		     },
		     "onPointerOut": {
		      "!type": "fn(event: +PointerEvent)"
		     },
		     "onPointerOver": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "MSPointer#start": {
		    "prototype": {
		     "_onMSPointerDown": {
		      "!type": "fn()"
		     },
		     "_onMSPointerMove": {
		      "!type": "fn()"
		     },
		     "_onMSPointerUp": {
		      "!type": "fn()"
		     },
		     "_onMSPointerUpGlobal": {
		      "!type": "fn()"
		     },
		     "_onMSPointerOut": {
		      "!type": "fn()"
		     },
		     "_onMSPointerOver": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "MSPointer#start~canvas": {
		    "style['-ms-content-zooming']": {},
		    "style['-ms-touch-action']": {}
		   },
		   "MSPointer#onPointerDown": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "MSPointer#onPointerMove": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "MSPointer#onPointerUp": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "MSPointer#onPointerOut": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "MSPointer#onPointerOut#input": {
		    "mousePointer": {
		     "withinGame": {}
		    }
		   },
		   "MSPointer#onPointerOut~pointer": {
		    "withinGame": {}
		   },
		   "MSPointer#onPointerOver": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "MSPointer#onPointerOver#input": {
		    "mousePointer": {
		     "withinGame": {}
		    }
		   },
		   "MSPointer#onPointerOver~pointer": {
		    "withinGame": {}
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
		     "_holdSent": {
		      "!type": "bool"
		     },
		     "_history": {
		      "!type": "+array"
		     },
		     "_nextDrop": {
		      "!type": "number"
		     },
		     "_stateReset": {
		      "!type": "bool"
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
		     "_clickTrampolines": {
		      "!type": "[?]|+null"
		     },
		     "_trampolineTargetObject": {},
		     "resetButtons": {
		      "!type": "fn()"
		     },
		     "processButtonsDown": {
		      "!type": "fn()"
		     },
		     "processButtonsUp": {
		      "!type": "fn()"
		     },
		     "updateButtons": {
		      "!type": "fn()"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "move": {
		      "!type": "fn()"
		     },
		     "processInteractiveObjects": {
		      "!type": "fn()"
		     },
		     "leave": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "justPressed": {
		      "!type": "fn()"
		     },
		     "justReleased": {
		      "!type": "fn()"
		     },
		     "addClickTrampoline": {
		      "!type": "fn()"
		     },
		     "processClickTrampolines": {
		      "!type": "fn()"
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
		   "Pointer#resetButtons": {
		    "prototype": {
		     "isDown": {},
		     "isUp": {}
		    }
		   },
		   "Pointer#updateButtons": {
		    "prototype": {
		     "button": {},
		     "isUp": {},
		     "isDown": {}
		    }
		   },
		   "Pointer#start": {
		    "prototype": {
		     "pointerId": {},
		     "identifier": {},
		     "target": {},
		     "isDown": {},
		     "isUp": {},
		     "active": {},
		     "withinGame": {},
		     "dirty": {},
		     "_history": {},
		     "_clickTrampolines": {},
		     "_trampolineTargetObject": {},
		     "msSinceLastClick": {},
		     "timeDown": {},
		     "_holdSent": {},
		     "_stateReset": {}
		    }
		   },
		   "Pointer#start#game": {
		    "input": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "Pointer#update": {
		    "prototype": {
		     "dirty": {},
		     "_holdSent": {},
		     "_nextDrop": {}
		    }
		   },
		   "Pointer#move": {
		    "prototype": {
		     "button": {},
		     "clientX": {},
		     "clientY": {},
		     "pageX": {},
		     "pageY": {},
		     "screenX": {},
		     "screenY": {},
		     "rawMovementX": {},
		     "rawMovementY": {},
		     "movementX": {},
		     "movementY": {},
		     "x": {},
		     "y": {},
		     "withinGame": {},
		     "targetObject": {}
		    }
		   },
		   "Pointer#move#circle": {
		    "x": {},
		    "y": {}
		   },
		   "Pointer#move~input": {
		    "activePointer": {},
		    "x": {},
		    "y": {},
		    "circle.x": {},
		    "circle.y": {}
		   },
		   "Pointer#processInteractiveObjects~currentNode": {
		    "checked": {}
		   },
		   "Pointer#processInteractiveObjects": {
		    "prototype": {
		     "targetObject": {}
		    }
		   },
		   "Pointer#leave": {
		    "prototype": {
		     "withinGame": {}
		    }
		   },
		   "Pointer#stop": {
		    "prototype": {
		     "timeUp": {},
		     "previousTapTime": {},
		     "isDown": {},
		     "isUp": {},
		     "active": {},
		     "withinGame": {},
		     "pointerId": {},
		     "identifier": {},
		     "_trampolineTargetObject": {},
		     "targetObject": {}
		    }
		   },
		   "Pointer#addClickTrampoline": {
		    "prototype": {
		     "_clickTrampolines": {}
		    }
		   },
		   "Pointer#processClickTrampolines": {
		    "prototype": {
		     "_clickTrampolines": {},
		     "_trampolineTargetObject": {}
		    }
		   },
		   "Pointer#reset": {
		    "prototype": {
		     "active": {},
		     "pointerId": {},
		     "identifier": {},
		     "dirty": {},
		     "totalTouches": {},
		     "_holdSent": {},
		     "_stateReset": {},
		     "targetObject": {}
		    }
		   },
		   "Pointer#reset#_history": {
		    "length": {}
		   },
		   "Pointer#resetMovement": {
		    "prototype": {
		     "movementX": {},
		     "movementY": {}
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
		      "!type": "+function"
		     },
		     "onDisconnectCallback": {
		      "!type": "+function"
		     },
		     "onDownCallback": {
		      "!type": "+function"
		     },
		     "onUpCallback": {
		      "!type": "+function"
		     },
		     "onAxisCallback": {
		      "!type": "+function"
		     },
		     "onFloatCallback": {
		      "!type": "+function"
		     },
		     "deadZone": {
		      "!type": "number"
		     },
		     "_padParent": {
		      "!type": "+Phaser.Gamepad"
		     },
		     "_rawPad": {},
		     "_prevTimestamp": {
		      "!type": "number"
		     },
		     "_buttons": {
		      "!type": "[?]"
		     },
		     "_buttonsLen": {
		      "!type": "number"
		     },
		     "_axes": {
		      "!type": "[?]"
		     },
		     "_axesLen": {
		      "!type": "number"
		     },
		     "addCallbacks": {
		      "!type": "fn()"
		     },
		     "getButton": {
		      "!type": "fn()"
		     },
		     "pollStatus": {
		      "!type": "fn()"
		     },
		     "connect": {
		      "!type": "fn()"
		     },
		     "disconnect": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "processAxisChange": {
		      "!type": "fn()"
		     },
		     "processButtonDown": {
		      "!type": "fn()"
		     },
		     "processButtonUp": {
		      "!type": "fn()"
		     },
		     "processButtonFloat": {
		      "!type": "fn()"
		     },
		     "axis": {
		      "!type": "fn()"
		     },
		     "isDown": {
		      "!type": "fn()"
		     },
		     "isUp": {
		      "!type": "fn()"
		     },
		     "justReleased": {
		      "!type": "fn()"
		     },
		     "justPressed": {
		      "!type": "fn()"
		     },
		     "buttonValue": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "SinglePad#addCallbacks": {
		    "prototype": {
		     "onConnectCallback": {},
		     "onDisconnectCallback": {},
		     "onDownCallback": {},
		     "onUpCallback": {},
		     "onAxisCallback": {},
		     "onFloatCallback": {}
		    }
		   },
		   "SinglePad#pollStatus": {
		    "prototype": {
		     "_prevTimestamp": {}
		    }
		   },
		   "SinglePad#connect": {
		    "prototype": {
		     "connected": {},
		     "index": {},
		     "_rawPad": {},
		     "_buttons": {},
		     "_buttonsLen": {},
		     "_axes": {},
		     "_axesLen": {},
		     "_axes[undefined]": {},
		     "_buttons[undefined]": {}
		    }
		   },
		   "SinglePad#disconnect": {
		    "prototype": {
		     "connected": {},
		     "index": {},
		     "_rawPad": {},
		     "_buttons": {},
		     "_buttonsLen": {},
		     "_axes": {},
		     "_axesLen": {}
		    }
		   },
		   "SinglePad#destroy": {
		    "prototype": {
		     "_rawPad": {},
		     "_buttons": {},
		     "_buttonsLen": {},
		     "_axes": {},
		     "_axesLen": {},
		     "onConnectCallback": {},
		     "onDisconnectCallback": {},
		     "onDownCallback": {},
		     "onUpCallback": {},
		     "onAxisCallback": {},
		     "onFloatCallback": {}
		    }
		   },
		   "SinglePad#processAxisChange": {
		    "prototype": {
		     "_axes[undefined]": {}
		    }
		   },
		   "SinglePad#reset": {
		    "prototype": {
		     "_axes[undefined]": {}
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
		      "!type": "+function"
		     },
		     "touchMoveCallback": {
		      "!type": "+function"
		     },
		     "touchEndCallback": {
		      "!type": "+function"
		     },
		     "touchEnterCallback": {
		      "!type": "+function"
		     },
		     "touchLeaveCallback": {
		      "!type": "+function"
		     },
		     "touchCancelCallback": {
		      "!type": "+function"
		     },
		     "preventDefault": {
		      "!type": "bool"
		     },
		     "event": {
		      "!type": "+TouchEvent"
		     },
		     "_onTouchStart": {
		      "!type": "+function"
		     },
		     "_onTouchMove": {
		      "!type": "+function"
		     },
		     "_onTouchEnd": {
		      "!type": "+function"
		     },
		     "_onTouchEnter": {
		      "!type": "+function"
		     },
		     "_onTouchLeave": {
		      "!type": "+function"
		     },
		     "_onTouchCancel": {
		      "!type": "+function"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "consumeTouchMove": {
		      "!type": "fn()"
		     },
		     "consumeDocumentTouches": {
		      "!type": "fn()"
		     },
		     "addTouchLockCallback": {
		      "!type": "fn()"
		     },
		     "removeTouchLockCallback": {
		      "!type": "fn()"
		     },
		     "onTouchStart": {
		      "!type": "fn()"
		     },
		     "onTouchCancel": {
		      "!type": "fn()"
		     },
		     "onTouchEnter": {
		      "!type": "fn()"
		     },
		     "onTouchLeave": {
		      "!type": "fn()"
		     },
		     "onTouchMove": {
		      "!type": "fn()"
		     },
		     "onTouchEnd": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Touch#start": {
		    "prototype": {
		     "_onTouchStart": {
		      "!type": "fn()"
		     },
		     "_onTouchMove": {
		      "!type": "fn()"
		     },
		     "_onTouchEnd": {
		      "!type": "fn()"
		     },
		     "_onTouchEnter": {
		      "!type": "fn()"
		     },
		     "_onTouchLeave": {
		      "!type": "fn()"
		     },
		     "_onTouchCancel": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Touch#consumeDocumentTouches": {
		    "prototype": {
		     "_documentTouchMove": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Touch#onTouchStart": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "Touch#onTouchCancel": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "Touch#onTouchEnter": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "Touch#onTouchLeave": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "Touch#onTouchMove": {
		    "prototype": {
		     "event": {}
		    }
		   },
		   "Touch#onTouchEnd": {
		    "prototype": {
		     "event": {}
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
		     "_cache": {},
		     "_urlMap": {},
		     "_urlResolver": {
		      "!type": "+Image"
		     },
		     "_urlTemp": {
		      "!type": "string"
		     },
		     "onSoundUnlock": {
		      "!type": "+Phaser.Signal"
		     },
		     "_cacheMap": {
		      "!type": "+array"
		     },
		     "_cacheMap[undefined]": {},
		     "addCanvas": {
		      "!type": "fn()"
		     },
		     "addImage": {
		      "!type": "fn()"
		     },
		     "addDefaultImage": {
		      "!type": "fn()"
		     },
		     "addMissingImage": {
		      "!type": "fn()"
		     },
		     "addSound": {
		      "!type": "fn()"
		     },
		     "addText": {
		      "!type": "fn()"
		     },
		     "addPhysicsData": {
		      "!type": "fn()"
		     },
		     "addTilemap": {
		      "!type": "fn()"
		     },
		     "addBinary": {
		      "!type": "fn()"
		     },
		     "addBitmapData": {
		      "!type": "fn()"
		     },
		     "addBitmapFont": {
		      "!type": "fn()"
		     },
		     "addJSON": {
		      "!type": "fn()"
		     },
		     "addXML": {
		      "!type": "fn()"
		     },
		     "addVideo": {
		      "!type": "fn()"
		     },
		     "addShader": {
		      "!type": "fn()"
		     },
		     "addRenderTexture": {
		      "!type": "fn()"
		     },
		     "addSpriteSheet": {
		      "!type": "fn()"
		     },
		     "addTextureAtlas": {
		      "!type": "fn()"
		     },
		     "reloadSound": {
		      "!type": "fn()"
		     },
		     "reloadSoundComplete": {
		      "!type": "fn()"
		     },
		     "updateSound": {
		      "!type": "fn()"
		     },
		     "decodedSound": {
		      "!type": "fn()"
		     },
		     "isSoundDecoded": {
		      "!type": "fn()"
		     },
		     "isSoundReady": {
		      "!type": "fn()"
		     },
		     "checkKey": {
		      "!type": "fn()"
		     },
		     "checkURL": {
		      "!type": "fn()"
		     },
		     "checkCanvasKey": {
		      "!type": "fn()"
		     },
		     "checkImageKey": {
		      "!type": "fn()"
		     },
		     "checkTextureKey": {
		      "!type": "fn()"
		     },
		     "checkSoundKey": {
		      "!type": "fn()"
		     },
		     "checkTextKey": {
		      "!type": "fn()"
		     },
		     "checkPhysicsKey": {
		      "!type": "fn()"
		     },
		     "checkTilemapKey": {
		      "!type": "fn()"
		     },
		     "checkBinaryKey": {
		      "!type": "fn()"
		     },
		     "checkBitmapDataKey": {
		      "!type": "fn()"
		     },
		     "checkBitmapFontKey": {
		      "!type": "fn()"
		     },
		     "checkJSONKey": {
		      "!type": "fn()"
		     },
		     "checkXMLKey": {
		      "!type": "fn()"
		     },
		     "checkVideoKey": {
		      "!type": "fn()"
		     },
		     "checkShaderKey": {
		      "!type": "fn()"
		     },
		     "checkRenderTextureKey": {
		      "!type": "fn()"
		     },
		     "getItem": {
		      "!type": "fn()"
		     },
		     "getCanvas": {
		      "!type": "fn()"
		     },
		     "getImage": {
		      "!type": "fn()"
		     },
		     "getTextureFrame": {
		      "!type": "fn()"
		     },
		     "getSound": {
		      "!type": "fn()"
		     },
		     "getSoundData": {
		      "!type": "fn()"
		     },
		     "getText": {
		      "!type": "fn()"
		     },
		     "getPhysicsData": {
		      "!type": "fn()"
		     },
		     "getTilemapData": {
		      "!type": "fn()"
		     },
		     "getBinary": {
		      "!type": "fn()"
		     },
		     "getBitmapData": {
		      "!type": "fn()"
		     },
		     "getBitmapFont": {
		      "!type": "fn()"
		     },
		     "getJSON": {
		      "!type": "fn()"
		     },
		     "getXML": {
		      "!type": "fn()"
		     },
		     "getVideo": {
		      "!type": "fn()"
		     },
		     "getShader": {
		      "!type": "fn()"
		     },
		     "getRenderTexture": {
		      "!type": "fn()"
		     },
		     "getBaseTexture": {
		      "!type": "fn()"
		     },
		     "getFrame": {
		      "!type": "fn()"
		     },
		     "getFrameCount": {
		      "!type": "fn()"
		     },
		     "getFrameData": {
		      "!type": "fn()"
		     },
		     "hasFrameData": {
		      "!type": "fn()"
		     },
		     "updateFrameData": {
		      "!type": "fn()"
		     },
		     "getFrameByIndex": {
		      "!type": "fn()"
		     },
		     "getFrameByName": {
		      "!type": "fn()"
		     },
		     "getPixiTexture": {
		      "!type": "fn()"
		     },
		     "getPixiBaseTexture": {
		      "!type": "fn()"
		     },
		     "getURL": {
		      "!type": "fn()"
		     },
		     "getKeys": {
		      "!type": "fn()"
		     },
		     "removeCanvas": {
		      "!type": "fn()"
		     },
		     "removeImage": {
		      "!type": "fn()"
		     },
		     "removeSound": {
		      "!type": "fn()"
		     },
		     "removeText": {
		      "!type": "fn()"
		     },
		     "removePhysics": {
		      "!type": "fn()"
		     },
		     "removeTilemap": {
		      "!type": "fn()"
		     },
		     "removeBinary": {
		      "!type": "fn()"
		     },
		     "removeBitmapData": {
		      "!type": "fn()"
		     },
		     "removeBitmapFont": {
		      "!type": "fn()"
		     },
		     "removeJSON": {
		      "!type": "fn()"
		     },
		     "removeXML": {
		      "!type": "fn()"
		     },
		     "removeVideo": {
		      "!type": "fn()"
		     },
		     "removeShader": {
		      "!type": "fn()"
		     },
		     "removeRenderTexture": {
		      "!type": "fn()"
		     },
		     "removeSpriteSheet": {
		      "!type": "fn()"
		     },
		     "removeTextureAtlas": {
		      "!type": "fn()"
		     },
		     "clearGLTextures": {
		      "!type": "fn()"
		     },
		     "_resolveURL": {
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
		   "Cache#_cache": {
		    "canvas": {},
		    "image": {},
		    "texture": {},
		    "sound": {},
		    "video": {},
		    "text": {},
		    "json": {},
		    "xml": {},
		    "physics": {},
		    "tilemap": {},
		    "binary": {},
		    "bitmapData": {},
		    "bitmapFont": {},
		    "shader": {},
		    "renderTexture": {}
		   },
		   "Cache#addCanvas#_cache": {
		    "canvas[undefined]": {
		     "canvas": {},
		     "context": {}
		    }
		   },
		   "Cache#addImage~img": {
		    "key": {},
		    "url": {},
		    "data": {},
		    "base": {},
		    "frame": {},
		    "frameData": {}
		   },
		   "Cache#addImage#_cache": {
		    "image[undefined]": {}
		   },
		   "Cache#addDefaultImage~img": {
		    "src": {}
		   },
		   "Cache#addMissingImage~img": {
		    "src": {}
		   },
		   "Cache#addSound#_cache": {
		    "sound[undefined]": {
		     "url": {},
		     "data": {},
		     "isDecoding": {},
		     "decoded": {},
		     "webAudio": {},
		     "audioTag": {},
		     "locked": {}
		    }
		   },
		   "Cache#addText#_cache": {
		    "text[undefined]": {
		     "url": {},
		     "data": {}
		    }
		   },
		   "Cache#addPhysicsData#_cache": {
		    "physics[undefined]": {
		     "url": {},
		     "data": {},
		     "format": {}
		    }
		   },
		   "Cache#addTilemap#_cache": {
		    "tilemap[undefined]": {
		     "url": {},
		     "data": {},
		     "format": {}
		    }
		   },
		   "Cache#addBinary#_cache": {
		    "binary[undefined]": {}
		   },
		   "Cache#addBitmapData#_cache": {
		    "bitmapData[undefined]": {
		     "data": {},
		     "frameData": {}
		    }
		   },
		   "Cache#addBitmapFont~obj": {
		    "url": {},
		    "data": {},
		    "font": {},
		    "base": {}
		   },
		   "Cache#addBitmapFont#_cache": {
		    "bitmapFont[undefined]": {}
		   },
		   "Cache#addJSON#_cache": {
		    "json[undefined]": {
		     "url": {},
		     "data": {}
		    }
		   },
		   "Cache#addXML#_cache": {
		    "xml[undefined]": {
		     "url": {},
		     "data": {}
		    }
		   },
		   "Cache#addVideo#_cache": {
		    "video[undefined]": {
		     "url": {},
		     "data": {},
		     "isBlob": {},
		     "locked": {}
		    }
		   },
		   "Cache#addShader#_cache": {
		    "shader[undefined]": {
		     "url": {},
		     "data": {}
		    }
		   },
		   "Cache#addRenderTexture#_cache": {
		    "renderTexture[undefined]": {
		     "texture": {},
		     "frame": {}
		    }
		   },
		   "Cache#addSpriteSheet~obj": {
		    "key": {},
		    "url": {},
		    "data": {},
		    "frameWidth": {},
		    "frameHeight": {},
		    "margin": {},
		    "spacing": {},
		    "base": {},
		    "frameData": {}
		   },
		   "Cache#addSpriteSheet#_cache": {
		    "image[undefined]": {}
		   },
		   "Cache#addTextureAtlas~obj": {
		    "key": {},
		    "url": {},
		    "data": {},
		    "base": {},
		    "frameData": {}
		   },
		   "Cache#addTextureAtlas#_cache": {
		    "image[undefined]": {}
		   },
		   "Cache#reloadSound~sound": {
		    "data.src": {}
		   },
		   "Cache#reloadSoundComplete~sound": {
		    "locked": {}
		   },
		   "Cache#updateSound~sound": {
		    "undefined]": {}
		   },
		   "Cache#decodedSound~sound": {
		    "data": {},
		    "decoded": {},
		    "isDecoding": {}
		   },
		   "Cache#updateFrameData#_cacheMap[undefined][undefined]": {
		    "frameData": {}
		   },
		   "Cache#clearGLTextures#cache": {
		    "image[undefined]": {
		     "base": {
		      "_glTextures": {}
		     }
		    }
		   },
		   "Cache#_resolveURL#_urlResolver": {
		    "src": {}
		   },
		   "Cache#_resolveURL": {
		    "prototype": {
		     "_urlTemp": {},
		     "_urlMap[undefined]": {}
		    }
		   },
		   "Cache#destroy": {
		    "prototype": {
		     "_urlMap": {},
		     "_urlResolver": {},
		     "_urlTemp": {}
		    }
		   },
		   "Loader": {
		    "!type": "fn()",
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
		     "_warnedAboutXDomainRequest": {
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
		     "_fileList": {
		      "!type": "[?]"
		     },
		     "_flightQueue": {
		      "!type": "[?]"
		     },
		     "_processingHead": {
		      "!type": "number"
		     },
		     "_fileLoadStarted": {
		      "!type": "bool"
		     },
		     "_totalPackCount": {
		      "!type": "number"
		     },
		     "_totalFileCount": {
		      "!type": "number"
		     },
		     "_loadedPackCount": {
		      "!type": "number"
		     },
		     "_loadedFileCount": {
		      "!type": "number"
		     },
		     "setPreloadSprite": {
		      "!type": "fn()"
		     },
		     "resize": {
		      "!type": "fn()"
		     },
		     "checkKeyExists": {
		      "!type": "fn()"
		     },
		     "getAssetIndex": {
		      "!type": "fn()"
		     },
		     "getAsset": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "addToFileList": {
		      "!type": "fn()"
		     },
		     "replaceInFileList": {
		      "!type": "fn()"
		     },
		     "pack": {
		      "!type": "fn()"
		     },
		     "image": {
		      "!type": "fn()"
		     },
		     "images": {
		      "!type": "fn()"
		     },
		     "text": {
		      "!type": "fn()"
		     },
		     "json": {
		      "!type": "fn()"
		     },
		     "shader": {
		      "!type": "fn()"
		     },
		     "xml": {
		      "!type": "fn()"
		     },
		     "script": {
		      "!type": "fn()"
		     },
		     "binary": {
		      "!type": "fn()"
		     },
		     "spritesheet": {
		      "!type": "fn()"
		     },
		     "audio": {
		      "!type": "fn()"
		     },
		     "audiosprite": {
		      "!type": "fn()"
		     },
		     "video": {
		      "!type": "fn()"
		     },
		     "tilemap": {
		      "!type": "fn()"
		     },
		     "physics": {
		      "!type": "fn()"
		     },
		     "bitmapFont": {
		      "!type": "fn()"
		     },
		     "atlasJSONArray": {
		      "!type": "fn()"
		     },
		     "atlasJSONHash": {
		      "!type": "fn()"
		     },
		     "atlasXML": {
		      "!type": "fn()"
		     },
		     "atlas": {
		      "!type": "fn()"
		     },
		     "withSyncPoints": {
		      "!type": "fn(callback: +function, callbackContext: ?) -> ?"
		     },
		     "withSyncPoint": {
		      "!type": "fn()"
		     },
		     "addSyncPoint": {
		      "!type": "fn()"
		     },
		     "removeFile": {
		      "!type": "fn()"
		     },
		     "removeAll": {
		      "!type": "fn()"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "processLoadQueue": {
		      "!type": "fn()"
		     },
		     "finishedLoading": {
		      "!type": "fn()"
		     },
		     "asyncComplete": {
		      "!type": "fn()"
		     },
		     "processPack": {
		      "!type": "fn()"
		     },
		     "transformUrl": {
		      "!type": "fn()"
		     },
		     "loadFile": {
		      "!type": "fn()"
		     },
		     "loadImageTag": {
		      "!type": "fn()"
		     },
		     "loadVideoTag": {
		      "!type": "fn()"
		     },
		     "loadAudioTag": {
		      "!type": "fn()"
		     },
		     "xhrLoad": {
		      "!type": "fn(file: ?, url: string, type: string, onload: +function, onerror: +function)"
		     },
		     "xhrLoadWithXDR": {
		      "!type": "fn()"
		     },
		     "getVideoURL": {
		      "!type": "fn()"
		     },
		     "getAudioURL": {
		      "!type": "fn()"
		     },
		     "fileError": {
		      "!type": "fn()"
		     },
		     "fileComplete": {
		      "!type": "fn()"
		     },
		     "jsonLoadComplete": {
		      "!type": "fn()"
		     },
		     "csvLoadComplete": {
		      "!type": "fn()"
		     },
		     "xmlLoadComplete": {
		      "!type": "fn()"
		     },
		     "parseXml": {
		      "!type": "fn()"
		     },
		     "nextFile": {
		      "!type": "fn(previousFile: ?, success: bool)"
		     },
		     "updateProgress": {
		      "!type": "fn()"
		     },
		     "totalLoadedFiles": {
		      "!type": "fn()"
		     },
		     "totalQueuedFiles": {
		      "!type": "fn()"
		     },
		     "totalLoadedPacks": {
		      "!type": "fn()"
		     },
		     "totalQueuedPacks": {
		      "!type": "fn()"
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
		   "Loader#setPreloadSprite": {
		    "prototype": {
		     "preloadSprite": {}
		    }
		   },
		   "Loader#setPreloadSprite#preloadSprite": {
		    "sprite": {},
		    "direction": {},
		    "width": {},
		    "height": {},
		    "rect": {}
		   },
		   "Loader#resize#preloadSprite": {
		    "rect": {
		     "height": {}
		    }
		   },
		   "Loader#reset": {
		    "prototype": {
		     "preloadSprite": {},
		     "isLoading": {},
		     "_processingHead": {},
		     "_fileLoadStarted": {},
		     "_totalFileCount": {},
		     "_totalPackCount": {},
		     "_loadedPackCount": {},
		     "_loadedFileCount": {}
		    }
		   },
		   "Loader#reset#_fileList": {
		    "length": {}
		   },
		   "Loader#reset#_flightQueue": {
		    "length": {}
		   },
		   "Loader#addToFileList~file": {
		    "type": {},
		    "key": {},
		    "path": {},
		    "url": {},
		    "syncPoint": {},
		    "data": {},
		    "loading": {},
		    "loaded": {},
		    "error": {},
		    "undefined]": {}
		   },
		   "Loader#addToFileList": {
		    "prototype": {
		     "_fileList[undefined]": {}
		    }
		   },
		   "Loader#pack~pack": {
		    "type": {},
		    "key": {},
		    "url": {},
		    "path": {},
		    "syncPoint": {},
		    "data": {},
		    "loading": {},
		    "loaded": {},
		    "error": {},
		    "callbackContext": {}
		   },
		   "Loader#addSyncPoint~asset": {
		    "file.syncPoint": {}
		   },
		   "Loader#removeAll#_fileList": {
		    "length": {}
		   },
		   "Loader#removeAll#_flightQueue": {
		    "length": {}
		   },
		   "Loader#start": {
		    "prototype": {
		     "hasLoaded": {},
		     "isLoading": {}
		    }
		   },
		   "Loader#processLoadQueue~file": {
		    "loading": {},
		    "requestUrl": {},
		    "requestObject": {}
		   },
		   "Loader#processLoadQueue": {
		    "prototype": {
		     "_processingHead": {},
		     "_fileLoadStarted": {}
		    }
		   },
		   "Loader#finishedLoading": {
		    "prototype": {
		     "hasLoaded": {},
		     "isLoading": {},
		     "_fileLoadStarted": {}
		    }
		   },
		   "Loader#loadVideoTag": {
		    "videoLoadEvent": {
		     "!type": "fn()"
		    }
		   },
		   "Loader#loadAudioTag": {
		    "playThroughEvent": {
		     "!type": "fn()"
		    }
		   },
		   "Loader#xhrLoad~xhr": {
		    "responseType": {},
		    "onload": {
		     "!type": "fn()"
		    },
		    "onerror": {
		     "!type": "fn()"
		    }
		   },
		   "Loader#xhrLoadWithXDR": {
		    "prototype": {
		     "_warnedAboutXDomainRequest": {}
		    }
		   },
		   "Loader#xhrLoadWithXDR~xhr": {
		    "responseType": {},
		    "timeout": {},
		    "onerror": {
		     "!type": "fn()"
		    },
		    "ontimeout": {
		     "!type": "fn()"
		    },
		    "onprogress": {
		     "!type": "fn()"
		    },
		    "onload": {
		     "!type": "fn()"
		    }
		   },
		   "Loader#parseXml~xml": {
		    "async": {}
		   },
		   "Loader#updateProgress#preloadSprite": {
		    "rect": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "Loader#updateProgress": {
		    "prototype": {
		     "preloadSprite": {}
		    }
		   },
		   "LoaderParser": {
		    "!type": "fn()",
		    "bitmapFont": {
		     "!type": "fn()"
		    },
		    "xmlBitmapFont": {
		     "!type": "fn()"
		    },
		    "xmlBitmapFont~data": {
		     "font": {},
		     "size": {},
		     "lineHeight": {},
		     "chars": {},
		     "chars[undefined]": {
		      "x": {},
		      "y": {},
		      "width": {},
		      "height": {},
		      "xOffset": {},
		      "yOffset": {},
		      "xAdvance": {},
		      "kerning": {}
		     },
		     "chars[undefined].kerning[undefined]": {}
		    },
		    "jsonBitmapFont": {
		     "!type": "fn()"
		    },
		    "jsonBitmapFont~data": {
		     "font": {},
		     "size": {},
		     "lineHeight": {},
		     "chars": {},
		     "chars[undefined]": {
		      "x": {},
		      "y": {},
		      "width": {},
		      "height": {},
		      "xOffset": {},
		      "yOffset": {},
		      "xAdvance": {},
		      "kerning": {}
		     },
		     "chars[undefined].kerning[undefined]": {}
		    },
		    "finalizeBitmapFont": {
		     "!type": "fn()"
		    }
		   },
		   "Math": {
		    "!type": "fn()",
		    "PI2": {
		     "!type": "number"
		    },
		    "prototype": {
		     "fuzzyEqual": {
		      "!type": "fn(a: number, b: number, epsilon: number) -> ?"
		     },
		     "fuzzyLessThan": {
		      "!type": "fn(a: number, b: number, epsilon: number) -> ?"
		     },
		     "fuzzyGreaterThan": {
		      "!type": "fn(a: number, b: number, epsilon: number) -> ?"
		     },
		     "fuzzyCeil": {
		      "!type": "fn(val: number, epsilon: number) -> ?"
		     },
		     "fuzzyFloor": {
		      "!type": "fn(val: number, epsilon: number) -> ?"
		     },
		     "average": {
		      "!type": "fn() -> ?"
		     },
		     "shear": {
		      "!type": "fn(n: number) -> ?"
		     },
		     "snapTo": {
		      "!type": "fn(input: number, gap: number, start: number) -> ?"
		     },
		     "snapToFloor": {
		      "!type": "fn(input: number, gap: number, start: number) -> ?"
		     },
		     "snapToCeil": {
		      "!type": "fn(input: number, gap: number, start: number) -> ?"
		     },
		     "roundTo": {
		      "!type": "fn(value: number, place: number, base: number) -> ?"
		     },
		     "floorTo": {
		      "!type": "fn(value: number, place: number, base: number) -> ?"
		     },
		     "ceilTo": {
		      "!type": "fn(value: number, place: number, base: number) -> ?"
		     },
		     "angleBetween": {
		      "!type": "fn(x1: number, y1: number, x2: number, y2: number) -> ?"
		     },
		     "angleBetweenY": {
		      "!type": "fn(x1: number, y1: number, x2: number, y2: number) -> ?"
		     },
		     "angleBetweenPoints": {
		      "!type": "fn(point1: +Phaser.Point, point2: +Phaser.Point) -> ?"
		     },
		     "angleBetweenPointsY": {
		      "!type": "fn(point1: +Phaser.Point, point2: +Phaser.Point) -> ?"
		     },
		     "reverseAngle": {
		      "!type": "fn(angleRad: number) -> ?"
		     },
		     "normalizeAngle": {
		      "!type": "fn(angleRad: number) -> ?"
		     },
		     "maxAdd": {
		      "!type": "fn(value: number, amount: number, max: number) -> ?"
		     },
		     "minSub": {
		      "!type": "fn(value: number, amount: number, min: number) -> ?"
		     },
		     "wrap": {
		      "!type": "fn(value: number, min: number, max: number) -> ?"
		     },
		     "wrapValue": {
		      "!type": "fn(value: number, amount: number, max: number) -> ?"
		     },
		     "isOdd": {
		      "!type": "fn(n: number) -> ?"
		     },
		     "isEven": {
		      "!type": "fn(n: number) -> ?"
		     },
		     "min": {
		      "!type": "fn() -> ?"
		     },
		     "max": {
		      "!type": "fn() -> ?"
		     },
		     "minProperty": {
		      "!type": "fn() -> ?"
		     },
		     "maxProperty": {
		      "!type": "fn() -> ?"
		     },
		     "wrapAngle": {
		      "!type": "fn(angle: number, radians: bool) -> ?"
		     },
		     "linearInterpolation": {
		      "!type": "fn(v: [?], k: number) -> ?"
		     },
		     "bezierInterpolation": {
		      "!type": "fn(v: [?], k: number) -> ?"
		     },
		     "catmullRomInterpolation": {
		      "!type": "fn(v: [?], k: number) -> ?"
		     },
		     "linear": {
		      "!type": "fn(p0: number, p1: number, t: number) -> ?"
		     },
		     "bernstein": {
		      "!type": "fn(n: number, i: number) -> ?"
		     },
		     "factorial": {
		      "!type": "fn(value: number) -> ?"
		     },
		     "catmullRom": {
		      "!type": "fn(p0: number, p1: number, p2: number, p3: number, t: number) -> ?"
		     },
		     "difference": {
		      "!type": "fn(a: number, b: number) -> ?"
		     },
		     "roundAwayFromZero": {
		      "!type": "fn(value: number) -> ?"
		     },
		     "sinCosGenerator": {
		      "!type": "fn(length: number, sinAmplitude: number, cosAmplitude: number, frequency: number) -> ?"
		     },
		     "distance": {
		      "!type": "fn(x1: number, y1: number, x2: number, y2: number) -> ?"
		     },
		     "distanceSq": {
		      "!type": "fn(x1: number, y1: number, x2: number, y2: number) -> ?"
		     },
		     "distancePow": {
		      "!type": "fn(x1: number, y1: number, x2: number, y2: number, pow: number) -> ?"
		     },
		     "clamp": {
		      "!type": "fn(x: number, a: number, b: number) -> ?"
		     },
		     "clampBottom": {
		      "!type": "fn(x: number, a: number) -> ?"
		     },
		     "within": {
		      "!type": "fn(a: number, b: number, tolerance: number) -> ?"
		     },
		     "mapLinear": {
		      "!type": "fn(x: number, a1: number, a2: number, b1: number, b2: number) -> ?"
		     },
		     "smoothstep": {
		      "!type": "fn(x: number, min: number, max: number) -> ?"
		     },
		     "smootherstep": {
		      "!type": "fn(x: number, min: number, max: number) -> ?"
		     },
		     "sign": {
		      "!type": "fn(x: number) -> ?"
		     },
		     "percent": {
		      "!type": "fn(a: number, b: number, base: number) -> ?"
		     },
		     "degToRad": {
		      "!type": "fn(degrees: number) -> ?"
		     },
		     "radToDeg": {
		      "!type": "fn(radians: number) -> ?"
		     },
		     "chanceRoll": {
		      "!type": "fn(chance: number) -> ?"
		     }
		    },
		    "fuzzyEqual": {
		     "!type": "fn()"
		    },
		    "fuzzyLessThan": {
		     "!type": "fn()"
		    },
		    "fuzzyGreaterThan": {
		     "!type": "fn()"
		    },
		    "fuzzyCeil": {
		     "!type": "fn()"
		    },
		    "fuzzyFloor": {
		     "!type": "fn()"
		    },
		    "average": {
		     "!type": "fn()"
		    },
		    "shear": {
		     "!type": "fn()"
		    },
		    "snapTo": {
		     "!type": "fn()"
		    },
		    "snapToFloor": {
		     "!type": "fn()"
		    },
		    "snapToCeil": {
		     "!type": "fn()"
		    },
		    "roundTo": {
		     "!type": "fn()"
		    },
		    "floorTo": {
		     "!type": "fn()"
		    },
		    "ceilTo": {
		     "!type": "fn()"
		    },
		    "angleBetween": {
		     "!type": "fn()"
		    },
		    "angleBetweenY": {
		     "!type": "fn()"
		    },
		    "angleBetweenPoints": {
		     "!type": "fn()"
		    },
		    "angleBetweenPointsY": {
		     "!type": "fn()"
		    },
		    "reverseAngle": {
		     "!type": "fn()"
		    },
		    "normalizeAngle": {
		     "!type": "fn()"
		    },
		    "maxAdd": {
		     "!type": "fn()"
		    },
		    "minSub": {
		     "!type": "fn()"
		    },
		    "wrap": {
		     "!type": "fn()"
		    },
		    "wrapValue": {
		     "!type": "fn()"
		    },
		    "isOdd": {
		     "!type": "fn()"
		    },
		    "isEven": {
		     "!type": "fn()"
		    },
		    "min": {
		     "!type": "fn()"
		    },
		    "max": {
		     "!type": "fn()"
		    },
		    "minProperty": {
		     "!type": "fn()"
		    },
		    "maxProperty": {
		     "!type": "fn()"
		    },
		    "wrapAngle": {
		     "!type": "fn()"
		    },
		    "linearInterpolation": {
		     "!type": "fn()"
		    },
		    "bezierInterpolation": {
		     "!type": "fn()"
		    },
		    "catmullRomInterpolation": {
		     "!type": "fn()"
		    },
		    "catmullRomInterpolation~i": {
		     "f": {}
		    },
		    "linear": {
		     "!type": "fn()"
		    },
		    "bernstein": {
		     "!type": "fn()"
		    },
		    "factorial": {
		     "!type": "fn()"
		    },
		    "catmullRom": {
		     "!type": "fn()"
		    },
		    "difference": {
		     "!type": "fn()"
		    },
		    "roundAwayFromZero": {
		     "!type": "fn()"
		    },
		    "sinCosGenerator": {
		     "!type": "fn()"
		    },
		    "sinCosGenerator~cosTable": {
		     "undefined]": {}
		    },
		    "sinCosGenerator~sinTable": {
		     "undefined]": {}
		    },
		    "distance": {
		     "!type": "fn()"
		    },
		    "distanceSq": {
		     "!type": "fn()"
		    },
		    "distancePow": {
		     "!type": "fn()"
		    },
		    "clamp": {
		     "!type": "fn()"
		    },
		    "clampBottom": {
		     "!type": "fn()"
		    },
		    "within": {
		     "!type": "fn()"
		    },
		    "mapLinear": {
		     "!type": "fn()"
		    },
		    "smoothstep": {
		     "!type": "fn()"
		    },
		    "smootherstep": {
		     "!type": "fn()"
		    },
		    "sign": {
		     "!type": "fn()"
		    },
		    "percent": {
		     "!type": "fn()"
		    },
		    "degToRad": {
		     "!type": "fn()"
		    },
		    "radToDeg": {
		     "!type": "fn()"
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
		     "_empty": {
		      "!type": "+array"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "populate": {
		      "!type": "fn()"
		     },
		     "populateHandler": {
		      "!type": "fn()"
		     },
		     "split": {
		      "!type": "fn()"
		     },
		     "insert": {
		      "!type": "fn()"
		     },
		     "getIndex": {
		      "!type": "fn()"
		     },
		     "retrieve": {
		      "!type": "fn()"
		     },
		     "clear": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "QuadTree#reset": {
		    "prototype": {
		     "maxObjects": {},
		     "maxLevels": {},
		     "level": {},
		     "bounds": {}
		    }
		   },
		   "QuadTree#reset#bounds": {
		    "x": {},
		    "y": {},
		    "width": {},
		    "height": {},
		    "subWidth": {},
		    "subHeight": {},
		    "right": {},
		    "bottom": {}
		   },
		   "QuadTree#reset#objects": {
		    "length": {}
		   },
		   "QuadTree#reset#nodes": {
		    "length": {}
		   },
		   "QuadTree#split": {
		    "prototype": {
		     "nodes[0]": {},
		     "nodes[1]": {},
		     "nodes[2]": {},
		     "nodes[3]": {}
		    }
		   },
		   "QuadTree#clear#objects": {
		    "length": {}
		   },
		   "QuadTree#clear#nodes": {
		    "length": {}
		   },
		   "RandomDataGenerator": {
		    "!type": "fn(seeds: [?])",
		    "prototype": {
		     "c": {
		      "!type": "number"
		     },
		     "s0": {
		      "!type": "number"
		     },
		     "s1": {
		      "!type": "number"
		     },
		     "s2": {
		      "!type": "number"
		     },
		     "rnd": {
		      "!type": "fn()"
		     },
		     "sow": {
		      "!type": "fn()"
		     },
		     "hash": {
		      "!type": "fn()"
		     },
		     "integer": {
		      "!type": "fn()"
		     },
		     "frac": {
		      "!type": "fn()"
		     },
		     "real": {
		      "!type": "fn()"
		     },
		     "integerInRange": {
		      "!type": "fn()"
		     },
		     "between": {
		      "!type": "fn()"
		     },
		     "realInRange": {
		      "!type": "fn()"
		     },
		     "normal": {
		      "!type": "fn()"
		     },
		     "uuid": {
		      "!type": "fn()"
		     },
		     "pick": {
		      "!type": "fn()"
		     },
		     "weightedPick": {
		      "!type": "fn()"
		     },
		     "timestamp": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "RandomDataGenerator#rnd": {
		    "prototype": {
		     "c": {},
		     "s0": {},
		     "s1": {},
		     "s2": {}
		    }
		   },
		   "RandomDataGenerator#sow": {
		    "prototype": {
		     "s0": {},
		     "s1": {},
		     "s2": {},
		     "c": {}
		    }
		   },
		   "Net": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "game": {},
		     "getHostName": {
		      "!type": "fn()"
		     },
		     "checkDomainName": {
		      "!type": "fn()"
		     },
		     "updateQueryString": {
		      "!type": "fn()"
		     },
		     "getQueryString": {
		      "!type": "fn()"
		     },
		     "decodeURI": {
		      "!type": "fn()"
		     },
		     "isDisabled": {}
		    }
		   },
		   "Net#getQueryString~output": {
		    "undefined]": {}
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
		       "_minParticleScale": {
		        "!type": "+Phaser.Point"
		       },
		       "_maxParticleScale": {
		        "!type": "+Phaser.Point"
		       },
		       "_quantity": {
		        "!type": "number"
		       },
		       "_timer": {
		        "!type": "number"
		       },
		       "_counter": {
		        "!type": "number"
		       },
		       "_flowQuantity": {
		        "!type": "number"
		       },
		       "_flowTotal": {
		        "!type": "number"
		       },
		       "_explode": {
		        "!type": "bool"
		       },
		       "_frames": {
		        "!type": "+any"
		       },
		       "update": {
		        "!type": "fn()"
		       },
		       "makeParticles": {
		        "!type": "fn()"
		       },
		       "kill": {
		        "!type": "fn()"
		       },
		       "revive": {
		        "!type": "fn()"
		       },
		       "explode": {
		        "!type": "fn()"
		       },
		       "flow": {
		        "!type": "fn()"
		       },
		       "start": {
		        "!type": "fn()"
		       },
		       "emitParticle": {
		        "!type": "fn()"
		       },
		       "destroy": {
		        "!type": "fn()"
		       },
		       "setSize": {
		        "!type": "fn()"
		       },
		       "setXSpeed": {
		        "!type": "fn()"
		       },
		       "setYSpeed": {
		        "!type": "fn()"
		       },
		       "setRotation": {
		        "!type": "fn()"
		       },
		       "setAlpha": {
		        "!type": "fn()"
		       },
		       "setScale": {
		        "!type": "fn()"
		       },
		       "at": {
		        "!type": "fn()"
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
		       "_sortProperty": {
		        "!type": "string"
		       },
		       "add": {
		        "!type": "fn(child: +DisplayObject, silent: bool) -> ?"
		       },
		       "addToHash": {
		        "!type": "fn(child: +DisplayObject) -> ?"
		       },
		       "removeFromHash": {
		        "!type": "fn(child: +DisplayObject) -> ?"
		       },
		       "addMultiple": {
		        "!type": "fn(children: [?]|+Phaser.Group, silent: bool) -> ?"
		       },
		       "addAt": {
		        "!type": "fn(child: +DisplayObject, index: number, silent: bool) -> ?"
		       },
		       "getAt": {
		        "!type": "fn(index: number) -> ?"
		       },
		       "create": {
		        "!type": "fn(x: number, y: number, key: string, frame: number|string, exists: bool) -> ?"
		       },
		       "createMultiple": {
		        "!type": "fn(quantity: number, key: string, frame: number|string, exists: bool)"
		       },
		       "updateZ": {
		        "!type": "fn()"
		       },
		       "resetCursor": {
		        "!type": "fn(index: number) -> ?"
		       },
		       "next": {
		        "!type": "fn() -> ?"
		       },
		       "previous": {
		        "!type": "fn() -> ?"
		       },
		       "swap": {
		        "!type": "fn(child1: +any, child2: +any)"
		       },
		       "bringToTop": {
		        "!type": "fn(child: +any) -> ?"
		       },
		       "sendToBack": {
		        "!type": "fn(child: +any) -> ?"
		       },
		       "moveUp": {
		        "!type": "fn(child: +any) -> ?"
		       },
		       "moveDown": {
		        "!type": "fn(child: +any) -> ?"
		       },
		       "xy": {
		        "!type": "fn(index: number, x: number, y: number)"
		       },
		       "reverse": {
		        "!type": "fn()"
		       },
		       "getIndex": {
		        "!type": "fn(child: +any) -> ?"
		       },
		       "replace": {
		        "!type": "fn(oldChild: +any, newChild: +any) -> ?"
		       },
		       "hasProperty": {
		        "!type": "fn(child: +any, key: [?]) -> ?"
		       },
		       "setProperty": {
		        "!type": "fn(child: +any, key: +array, value: +any, operation: number, force: bool) -> ?"
		       },
		       "checkProperty": {
		        "!type": "fn(child: +any, key: +array, value: +any, force: bool) -> ?"
		       },
		       "set": {
		        "!type": "fn(child: +Phaser.Sprite, key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool) -> ?"
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
		        "!type": "fn(predicate: +function, checkExists: bool) -> ?"
		       },
		       "forEach": {
		        "!type": "fn(callback: +function, callbackContext: ?, checkExists: bool, args: +any)"
		       },
		       "forEachExists": {
		        "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		       },
		       "forEachAlive": {
		        "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		       },
		       "forEachDead": {
		        "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		       },
		       "sort": {
		        "!type": "fn(key: string, order: number)"
		       },
		       "customSort": {
		        "!type": "fn(sortHandler: +function, context: ?)"
		       },
		       "ascendingSortHandler": {
		        "!type": "fn(a: ?, b: ?)"
		       },
		       "descendingSortHandler": {
		        "!type": "fn(a: ?, b: ?)"
		       },
		       "iterate": {
		        "!type": "fn(key: string, value: +any, returnType: number, callback: +function, callbackContext: ?, args: [?]) -> ?"
		       },
		       "getFirstExists": {
		        "!type": "fn(exists: bool) -> ?"
		       },
		       "getFirstAlive": {
		        "!type": "fn() -> ?"
		       },
		       "getFirstDead": {
		        "!type": "fn() -> ?"
		       },
		       "getTop": {
		        "!type": "fn() -> ?"
		       },
		       "getBottom": {
		        "!type": "fn() -> ?"
		       },
		       "countLiving": {
		        "!type": "fn() -> ?"
		       },
		       "countDead": {
		        "!type": "fn() -> ?"
		       },
		       "getRandom": {
		        "!type": "fn(startIndex: number, length: number) -> ?"
		       },
		       "remove": {
		        "!type": "fn(child: +any, destroy: bool, silent: bool) -> ?"
		       },
		       "moveAll": {
		        "!type": "fn(group: +Phaser.Group, silent: bool) -> ?"
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
		     },
		     "Emitter#update": {
		      "prototype": {
		       "_timer": {},
		       "on": {}
		      }
		     },
		     "Emitter#makeParticles": {
		      "prototype": {
		       "_frames": {},
		       "maxParticles": {}
		      }
		     },
		     "Emitter#makeParticles~particle": {
		      "body.checkCollision.any": {},
		      "body.checkCollision.none": {},
		      "body.collideWorldBounds": {},
		      "body.skipQuadTree": {},
		      "exists": {},
		      "visible": {}
		     },
		     "Emitter#kill": {
		      "prototype": {
		       "on": {},
		       "alive": {},
		       "exists": {}
		      }
		     },
		     "Emitter#revive": {
		      "prototype": {
		       "alive": {},
		       "exists": {}
		      }
		     },
		     "Emitter#explode": {
		      "prototype": {
		       "_flowTotal": {}
		      }
		     },
		     "Emitter#flow": {
		      "prototype": {
		       "_counter": {},
		       "_flowQuantity": {},
		       "_flowTotal": {},
		       "on": {},
		       "_timer": {}
		      }
		     },
		     "Emitter#start": {
		      "prototype": {
		       "visible": {},
		       "lifespan": {},
		       "frequency": {},
		       "on": {},
		       "_quantity": {},
		       "_counter": {},
		       "_timer": {}
		      }
		     },
		     "Emitter#emitParticle~particle": {
		      "angle": {},
		      "lifespan": {},
		      "frame": {},
		      "alpha": {},
		      "blendMode": {},
		      "body.velocity.x": {},
		      "body.velocity.y": {},
		      "body.angularVelocity": {},
		      "body.gravity.y": {},
		      "body.drag.x": {},
		      "body.drag.y": {},
		      "body.angularDrag": {}
		     },
		     "Emitter#setSize#area": {
		      "width": {},
		      "height": {}
		     },
		     "Emitter#setXSpeed#minParticleSpeed": {
		      "x": {}
		     },
		     "Emitter#setXSpeed#maxParticleSpeed": {
		      "x": {}
		     },
		     "Emitter#setYSpeed#minParticleSpeed": {
		      "y": {}
		     },
		     "Emitter#setYSpeed#maxParticleSpeed": {
		      "y": {}
		     },
		     "Emitter#setRotation": {
		      "prototype": {
		       "minRotation": {},
		       "maxRotation": {}
		      }
		     },
		     "Emitter#setAlpha": {
		      "prototype": {
		       "minParticleAlpha": {},
		       "maxParticleAlpha": {},
		       "autoAlpha": {},
		       "alphaData": {}
		      }
		     },
		     "Emitter#setAlpha~tweenData": {
		      "v": {}
		     },
		     "Emitter#setScale": {
		      "prototype": {
		       "minParticleScale": {},
		       "maxParticleScale": {},
		       "autoScale": {},
		       "scaleData": {}
		      }
		     },
		     "Emitter#setScale~tweenData": {
		      "x": {},
		      "y": {}
		     },
		     "Emitter#at": {
		      "prototype": {
		       "emitX": {},
		       "emitY": {}
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
		      "!type": "fn()"
		     },
		     "remove": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Particles#add": {
		    "prototype": {
		     "emitters[undefined]": {}
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
		       "_reset": {
		        "!type": "bool"
		       },
		       "_sx": {
		        "!type": "number"
		       },
		       "_sy": {
		        "!type": "number"
		       },
		       "_dx": {
		        "!type": "number"
		       },
		       "_dy": {
		        "!type": "number"
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
		        "!type": "fn()"
		       },
		       "reset": {
		        "!type": "fn()"
		       },
		       "hitTest": {
		        "!type": "fn()"
		       },
		       "onFloor": {
		        "!type": "fn()"
		       },
		       "onWall": {
		        "!type": "fn()"
		       },
		       "deltaAbsX": {
		        "!type": "fn()"
		       },
		       "deltaAbsY": {
		        "!type": "fn()"
		       },
		       "deltaX": {
		        "!type": "fn()"
		       },
		       "deltaY": {
		        "!type": "fn()"
		       },
		       "deltaZ": {
		        "!type": "fn()"
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
		      },
		      "render": {
		       "!type": "fn()"
		      },
		      "renderBodyInfo": {
		       "!type": "fn()"
		      }
		     },
		     "Body#checkCollision": {
		      "none": {},
		      "any": {},
		      "up": {},
		      "down": {},
		      "left": {},
		      "right": {}
		     },
		     "Body#touching": {
		      "none": {},
		      "up": {},
		      "down": {},
		      "left": {},
		      "right": {}
		     },
		     "Body#wasTouching": {
		      "none": {},
		      "up": {},
		      "down": {},
		      "left": {},
		      "right": {}
		     },
		     "Body#blocked": {
		      "up": {},
		      "down": {},
		      "left": {},
		      "right": {}
		     },
		     "Body#updateBounds": {
		      "prototype": {
		       "width": {},
		       "height": {},
		       "_reset": {},
		       "_sx": {},
		       "_sy": {},
		       "halfWidth": {},
		       "halfHeight": {}
		      }
		     },
		     "Body#preUpdate": {
		      "prototype": {
		       "dirty": {},
		       "embedded": {},
		       "rotation": {},
		       "preRotation": {},
		       "speed": {},
		       "angle": {},
		       "_dx": {},
		       "_dy": {},
		       "_reset": {}
		      }
		     },
		     "Body#preUpdate#wasTouching": {
		      "none": {},
		      "up": {},
		      "down": {},
		      "left": {},
		      "right": {}
		     },
		     "Body#preUpdate#touching": {
		      "none": {},
		      "up": {},
		      "down": {},
		      "left": {},
		      "right": {}
		     },
		     "Body#preUpdate#blocked": {
		      "up": {},
		      "down": {},
		      "left": {},
		      "right": {}
		     },
		     "Body#preUpdate#position": {
		      "x": {},
		      "y": {}
		     },
		     "Body#preUpdate#prev": {
		      "x": {},
		      "y": {}
		     },
		     "Body#postUpdate": {
		      "prototype": {
		       "dirty": {},
		       "facing": {},
		       "_dx": {},
		       "_dy": {},
		       "_reset": {}
		      }
		     },
		     "Body#postUpdate#sprite": {
		      "position": {
		       "x": {},
		       "y": {}
		      },
		      "angle": {}
		     },
		     "Body#postUpdate#prev": {
		      "x": {},
		      "y": {}
		     },
		     "Body#destroy#sprite": {
		      "body": {}
		     },
		     "Body#destroy": {
		      "prototype": {
		       "sprite": {}
		      }
		     },
		     "Body#checkWorldBounds~pos": {
		      "x": {},
		      "y": {}
		     },
		     "Body#checkWorldBounds#velocity": {
		      "x": {},
		      "y": {}
		     },
		     "Body#checkWorldBounds#blocked": {
		      "left": {},
		      "right": {},
		      "up": {},
		      "down": {}
		     },
		     "Body#setSize": {
		      "prototype": {
		       "sourceWidth": {},
		       "sourceHeight": {},
		       "width": {},
		       "height": {},
		       "halfWidth": {},
		       "halfHeight": {}
		      }
		     },
		     "Body#reset": {
		      "prototype": {
		       "speed": {},
		       "angularVelocity": {},
		       "angularAcceleration": {},
		       "rotation": {},
		       "preRotation": {},
		       "_sx": {},
		       "_sy": {}
		      }
		     },
		     "Body#reset#position": {
		      "x": {},
		      "y": {}
		     },
		     "Body#reset#prev": {
		      "x": {},
		      "y": {}
		     },
		     "TilemapCollision": {
		      "!type": "fn()",
		      "prototype": {
		       "TILE_BIAS": {
		        "!type": "number"
		       },
		       "collideSpriteVsTilemapLayer": {
		        "!type": "fn()"
		       },
		       "collideGroupVsTilemapLayer": {
		        "!type": "fn()"
		       },
		       "separateTile": {
		        "!type": "fn()"
		       },
		       "tileCheckX": {
		        "!type": "fn()"
		       },
		       "tileCheckY": {
		        "!type": "fn()"
		       },
		       "processTileSeparationX": {
		        "!type": "fn()"
		       },
		       "processTileSeparationY": {
		        "!type": "fn()"
		       }
		      }
		     },
		     "prototype": {
		      "collideSpriteVsTilemapLayer": {
		       "!type": "fn(sprite: +Phaser.Sprite, tilemapLayer: +Phaser.TilemapLayer, collideCallback: +function, processCallback: +function, callbackContext: ?, overlapOnly: bool)"
		      },
		      "collideGroupVsTilemapLayer": {
		       "!type": "fn(group: +Phaser.Group, tilemapLayer: +Phaser.TilemapLayer, collideCallback: +function, processCallback: +function, callbackContext: ?, overlapOnly: bool)"
		      },
		      "separateTile": {
		       "!type": "fn(body: +Phaser.Physics.Arcade.Body, tile: +Phaser.Tile) -> ?"
		      },
		      "tileCheckX": {
		       "!type": "fn(body: +Phaser.Physics.Arcade.Body, tile: +Phaser.Tile) -> ?"
		      },
		      "tileCheckY": {
		       "!type": "fn(body: +Phaser.Physics.Arcade.Body, tile: +Phaser.Tile) -> ?"
		      },
		      "processTileSeparationX": {
		       "!type": "fn(body: +Phaser.Physics.Arcade.Body, x: number)"
		      },
		      "processTileSeparationY": {
		       "!type": "fn(body: +Phaser.Physics.Arcade.Body, y: number)"
		      },
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
		      "_total": {
		       "!type": "number"
		      },
		      "setBounds": {
		       "!type": "fn()"
		      },
		      "setBoundsToWorld": {
		       "!type": "fn()"
		      },
		      "enable": {
		       "!type": "fn()"
		      },
		      "enableBody": {
		       "!type": "fn()"
		      },
		      "updateMotion": {
		       "!type": "fn()"
		      },
		      "computeVelocity": {
		       "!type": "fn()"
		      },
		      "overlap": {
		       "!type": "fn()"
		      },
		      "collide": {
		       "!type": "fn()"
		      },
		      "sortLeftRight": {
		       "!type": "fn()"
		      },
		      "sortRightLeft": {
		       "!type": "fn()"
		      },
		      "sortTopBottom": {
		       "!type": "fn()"
		      },
		      "sortBottomTop": {
		       "!type": "fn()"
		      },
		      "sort": {
		       "!type": "fn()"
		      },
		      "collideHandler": {
		       "!type": "fn()"
		      },
		      "collideSpriteVsSprite": {
		       "!type": "fn()"
		      },
		      "collideSpriteVsGroup": {
		       "!type": "fn()"
		      },
		      "collideGroupVsSelf": {
		       "!type": "fn()"
		      },
		      "collideGroupVsGroup": {
		       "!type": "fn()"
		      },
		      "separate": {
		       "!type": "fn()"
		      },
		      "intersects": {
		       "!type": "fn()"
		      },
		      "separateX": {
		       "!type": "fn()"
		      },
		      "separateY": {
		       "!type": "fn()"
		      },
		      "getObjectsUnderPointer": {
		       "!type": "fn()"
		      },
		      "getObjectsAtLocation": {
		       "!type": "fn()"
		      },
		      "moveToObject": {
		       "!type": "fn()"
		      },
		      "moveToPointer": {
		       "!type": "fn()"
		      },
		      "moveToXY": {
		       "!type": "fn()"
		      },
		      "velocityFromAngle": {
		       "!type": "fn()"
		      },
		      "velocityFromRotation": {
		       "!type": "fn()"
		      },
		      "accelerationFromRotation": {
		       "!type": "fn()"
		      },
		      "accelerateToObject": {
		       "!type": "fn()"
		      },
		      "accelerateToPointer": {
		       "!type": "fn()"
		      },
		      "accelerateToXY": {
		       "!type": "fn()"
		      },
		      "distanceBetween": {
		       "!type": "fn()"
		      },
		      "distanceToXY": {
		       "!type": "fn()"
		      },
		      "distanceToPointer": {
		       "!type": "fn()"
		      },
		      "angleBetween": {
		       "!type": "fn()"
		      },
		      "angleToXY": {
		       "!type": "fn()"
		      },
		      "angleToPointer": {
		       "!type": "fn()"
		      }
		     },
		     "!type": "fn(game: +Phaser.Game)",
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
		    "Arcade#checkCollision": {
		     "up": {},
		     "down": {},
		     "left": {},
		     "right": {}
		    },
		    "Arcade#overlap": {
		     "prototype": {
		      "_total": {}
		     }
		    },
		    "Arcade#collide": {
		     "prototype": {
		      "_total": {}
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
		       "oH": {
		        "!type": "number"
		       },
		       "oV": {
		        "!type": "number"
		       },
		       "velocity": {
		        "!type": "+Phaser.Point"
		       },
		       "aabbTileProjections": {},
		       "aabbTileProjections[undefined]": {},
		       "integrate": {
		        "!type": "fn()"
		       },
		       "reportCollision": {
		        "!type": "fn()"
		       },
		       "reportCollisionVsWorld": {
		        "!type": "fn()"
		       },
		       "reverse": {
		        "!type": "fn()"
		       },
		       "reportCollisionVsBody": {
		        "!type": "fn()"
		       },
		       "collideWorldBounds": {
		        "!type": "fn()"
		       },
		       "collideAABBVsAABB": {
		        "!type": "fn()"
		       },
		       "collideAABBVsTile": {
		        "!type": "fn()"
		       },
		       "resolveTile": {
		        "!type": "fn()"
		       },
		       "projAABB_Full": {
		        "!type": "fn()"
		       },
		       "projAABB_Half": {
		        "!type": "fn()"
		       },
		       "projAABB_45Deg": {
		        "!type": "fn()"
		       },
		       "projAABB_22DegS": {
		        "!type": "fn()"
		       },
		       "projAABB_22DegB": {
		        "!type": "fn()"
		       },
		       "projAABB_67DegS": {
		        "!type": "fn()"
		       },
		       "projAABB_67DegB": {
		        "!type": "fn()"
		       },
		       "projAABB_Convex": {
		        "!type": "fn()"
		       },
		       "projAABB_Concave": {
		        "!type": "fn()"
		       },
		       "destroy": {
		        "!type": "fn()"
		       },
		       "render": {
		        "!type": "fn()"
		       }
		      },
		      "COL_NONE": {},
		      "COL_AXIS": {},
		      "COL_OTHER": {}
		     },
		     "AABB#integrate#pos": {
		      "x": {},
		      "y": {}
		     },
		     "AABB#reportCollision#body": {
		      "touching": {
		       "left": {},
		       "right": {},
		       "up": {},
		       "down": {}
		      }
		     },
		     "AABB#reportCollision~bx": {
		      "fx": {}
		     },
		     "AABB#reportCollision~by": {
		      "fy": {}
		     },
		     "AABB#reportCollision~p": {
		      "x": {},
		      "y": {}
		     },
		     "AABB#reportCollision~o": {
		      "x": {},
		      "y": {}
		     },
		     "AABB#reverse#oldpos": {
		      "x": {},
		      "y": {}
		     },
		     "AABB#destroy": {
		      "prototype": {
		       "body": {},
		       "system": {}
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
		       "moveTo": {
		        "!type": "fn()"
		       },
		       "moveFrom": {
		        "!type": "fn()"
		       },
		       "moveLeft": {
		        "!type": "fn()"
		       },
		       "moveRight": {
		        "!type": "fn()"
		       },
		       "moveUp": {
		        "!type": "fn()"
		       },
		       "moveDown": {
		        "!type": "fn()"
		       },
		       "reset": {
		        "!type": "fn()"
		       },
		       "deltaAbsX": {
		        "!type": "fn()"
		       },
		       "deltaAbsY": {
		        "!type": "fn()"
		       },
		       "deltaX": {
		        "!type": "fn()"
		       },
		       "deltaY": {
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
		      },
		      "render": {
		       "!type": "fn()"
		      }
		     },
		     "Body#checkCollision": {
		      "none": {},
		      "any": {},
		      "up": {},
		      "down": {},
		      "left": {},
		      "right": {}
		     },
		     "Body#touching": {
		      "none": {},
		      "up": {},
		      "down": {},
		      "left": {},
		      "right": {}
		     },
		     "Body#wasTouching": {
		      "none": {},
		      "up": {},
		      "down": {},
		      "left": {},
		      "right": {}
		     },
		     "Body#preUpdate#wasTouching": {
		      "none": {},
		      "up": {},
		      "down": {},
		      "left": {},
		      "right": {}
		     },
		     "Body#preUpdate#touching": {
		      "none": {},
		      "up": {},
		      "down": {},
		      "left": {},
		      "right": {}
		     },
		     "Body#postUpdate#sprite": {
		      "x": {},
		      "y": {}
		     },
		     "Body#postUpdate": {
		      "prototype": {
		       "facing": {}
		      }
		     },
		     "Body#setZeroVelocity#shape": {
		      "oldpos": {
		       "x": {},
		       "y": {}
		      }
		     },
		     "Body#moveTo#shape": {
		      "pos": {
		       "x": {},
		       "y": {}
		      }
		     },
		     "Body#moveFrom#shape": {
		      "pos": {
		       "x": {},
		       "y": {}
		      }
		     },
		     "Body#moveLeft#shape": {
		      "pos": {
		       "x": {}
		      }
		     },
		     "Body#moveRight#shape": {
		      "pos": {
		       "x": {}
		      }
		     },
		     "Body#moveUp#shape": {
		      "pos": {
		       "y": {}
		      }
		     },
		     "Body#moveDown#shape": {
		      "pos": {
		       "y": {}
		      }
		     },
		     "Body#reset#shape": {
		      "pos": {
		       "x": {},
		       "y": {}
		      }
		     },
		     "Body#destroy": {
		      "prototype": {
		       "sprite": {},
		       "system": {},
		       "aabb": {},
		       "tile": {},
		       "circle": {},
		       "shape": {}
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
		       "oH": {
		        "!type": "number"
		       },
		       "oV": {
		        "!type": "number"
		       },
		       "velocity": {
		        "!type": "+Phaser.Point"
		       },
		       "circleTileProjections": {},
		       "circleTileProjections[undefined]": {},
		       "integrate": {
		        "!type": "fn()"
		       },
		       "reportCollisionVsWorld": {
		        "!type": "fn()"
		       },
		       "collideWorldBounds": {
		        "!type": "fn()"
		       },
		       "collideCircleVsTile": {
		        "!type": "fn()"
		       },
		       "resolveCircleTile": {
		        "!type": "fn()"
		       },
		       "projCircle_Full": {
		        "!type": "fn()"
		       },
		       "projCircle_45Deg": {
		        "!type": "fn()"
		       },
		       "projCircle_Concave": {
		        "!type": "fn()"
		       },
		       "projCircle_Convex": {
		        "!type": "fn()"
		       },
		       "projCircle_Half": {
		        "!type": "fn()"
		       },
		       "projCircle_22DegS": {
		        "!type": "fn()"
		       },
		       "projCircle_22DegB": {
		        "!type": "fn()"
		       },
		       "projCircle_67DegS": {
		        "!type": "fn()"
		       },
		       "projCircle_67DegB": {
		        "!type": "fn()"
		       },
		       "destroy": {
		        "!type": "fn()"
		       },
		       "render": {
		        "!type": "fn()"
		       }
		      },
		      "COL_NONE": {},
		      "COL_AXIS": {},
		      "COL_OTHER": {}
		     },
		     "Circle#integrate#pos": {
		      "x": {},
		      "y": {}
		     },
		     "Circle#reportCollisionVsWorld#body": {
		      "touching": {
		       "left": {},
		       "right": {},
		       "up": {},
		       "down": {}
		      }
		     },
		     "Circle#reportCollisionVsWorld~bx": {
		      "fx": {}
		     },
		     "Circle#reportCollisionVsWorld~by": {
		      "fy": {}
		     },
		     "Circle#reportCollisionVsWorld~p": {
		      "x": {},
		      "y": {}
		     },
		     "Circle#reportCollisionVsWorld~o": {
		      "x": {},
		      "y": {}
		     },
		     "Circle#collideCircleVsTile": {
		      "prototype": {
		       "oH": {},
		       "oV": {}
		      }
		     },
		     "Circle#destroy": {
		      "prototype": {
		       "body": {},
		       "system": {}
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
		       "signx": {
		        "!type": "number"
		       },
		       "signy": {
		        "!type": "number"
		       },
		       "sx": {
		        "!type": "number"
		       },
		       "sy": {
		        "!type": "number"
		       },
		       "integrate": {
		        "!type": "fn()"
		       },
		       "collideWorldBounds": {
		        "!type": "fn()"
		       },
		       "reportCollisionVsWorld": {
		        "!type": "fn()"
		       },
		       "setType": {
		        "!type": "fn()"
		       },
		       "clear": {
		        "!type": "fn()"
		       },
		       "destroy": {
		        "!type": "fn()"
		       },
		       "updateType": {
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
		      },
		      "EMPTY": {},
		      "FULL": {},
		      "SLOPE_45DEGpn": {},
		      "SLOPE_45DEGnn": {},
		      "SLOPE_45DEGnp": {},
		      "SLOPE_45DEGpp": {},
		      "CONCAVEpn": {},
		      "CONCAVEnn": {},
		      "CONCAVEnp": {},
		      "CONCAVEpp": {},
		      "CONVEXpn": {},
		      "CONVEXnn": {},
		      "CONVEXnp": {},
		      "CONVEXpp": {},
		      "SLOPE_22DEGpnS": {},
		      "SLOPE_22DEGnnS": {},
		      "SLOPE_22DEGnpS": {},
		      "SLOPE_22DEGppS": {},
		      "SLOPE_22DEGpnB": {},
		      "SLOPE_22DEGnnB": {},
		      "SLOPE_22DEGnpB": {},
		      "SLOPE_22DEGppB": {},
		      "SLOPE_67DEGpnS": {},
		      "SLOPE_67DEGnnS": {},
		      "SLOPE_67DEGnpS": {},
		      "SLOPE_67DEGppS": {},
		      "SLOPE_67DEGpnB": {},
		      "SLOPE_67DEGnnB": {},
		      "SLOPE_67DEGnpB": {},
		      "SLOPE_67DEGppB": {},
		      "HALFd": {},
		      "HALFr": {},
		      "HALFu": {},
		      "HALFl": {},
		      "TYPE_EMPTY": {},
		      "TYPE_FULL": {},
		      "TYPE_45DEG": {},
		      "TYPE_CONCAVE": {},
		      "TYPE_CONVEX": {},
		      "TYPE_22DEGs": {},
		      "TYPE_22DEGb": {},
		      "TYPE_67DEGs": {},
		      "TYPE_67DEGb": {},
		      "TYPE_HALF": {}
		     },
		     "Tile#body": {
		      "gravityScale": {},
		      "collideWorldBounds": {}
		     },
		     "Tile#integrate#pos": {
		      "x": {},
		      "y": {}
		     },
		     "Tile#reportCollisionVsWorld#body": {
		      "touching": {
		       "left": {},
		       "right": {},
		       "up": {},
		       "down": {}
		      }
		     },
		     "Tile#reportCollisionVsWorld~bx": {
		      "fx": {}
		     },
		     "Tile#reportCollisionVsWorld~by": {
		      "fy": {}
		     },
		     "Tile#reportCollisionVsWorld~p": {
		      "x": {},
		      "y": {}
		     },
		     "Tile#reportCollisionVsWorld~o": {
		      "x": {},
		      "y": {}
		     },
		     "Tile#setType": {
		      "prototype": {
		       "id": {}
		      }
		     },
		     "Tile#clear": {
		      "prototype": {
		       "id": {}
		      }
		     },
		     "Tile#destroy": {
		      "prototype": {
		       "body": {},
		       "system": {}
		      }
		     },
		     "Tile#updateType": {
		      "prototype": {
		       "type": {},
		       "signx": {},
		       "signy": {},
		       "sx": {},
		       "sy": {}
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
		       "!type": "fn()"
		      },
		      "enableCircle": {
		       "!type": "fn()"
		      },
		      "enableTile": {
		       "!type": "fn()"
		      },
		      "enable": {
		       "!type": "fn()"
		      },
		      "enableBody": {
		       "!type": "fn()"
		      },
		      "setBounds": {
		       "!type": "fn()"
		      },
		      "setBoundsToWorld": {
		       "!type": "fn()"
		      },
		      "clearTilemapLayerBodies": {
		       "!type": "fn()"
		      },
		      "convertTilemap": {
		       "!type": "fn()"
		      },
		      "overlap": {
		       "!type": "fn()"
		      },
		      "collide": {
		       "!type": "fn()"
		      },
		      "collideHandler": {
		       "!type": "fn()"
		      },
		      "collideSpriteVsSprite": {
		       "!type": "fn()"
		      },
		      "collideSpriteVsGroup": {
		       "!type": "fn()"
		      },
		      "collideGroupVsSelf": {
		       "!type": "fn()"
		      },
		      "collideGroupVsGroup": {
		       "!type": "fn()"
		      },
		      "separate": {
		       "!type": "fn()"
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
		    "Ninja#overlap": {
		     "prototype": {
		      "_result": {},
		      "_total": {}
		     }
		    },
		    "Ninja#collide": {
		     "prototype": {
		      "_result": {},
		      "_total": {}
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
		       "_collideWorldBounds": {
		        "!type": "bool"
		       },
		       "_bodyCallbacks": {},
		       "_bodyCallbackContext": {},
		       "_groupCallbacks": {},
		       "_groupCallbackContext": {},
		       "_reset": {
		        "!type": "bool"
		       },
		       "createBodyCallback": {
		        "!type": "fn()"
		       },
		       "createGroupCallback": {
		        "!type": "fn()"
		       },
		       "getCollisionMask": {
		        "!type": "fn()"
		       },
		       "updateCollisionMask": {
		        "!type": "fn()"
		       },
		       "setCollisionGroup": {
		        "!type": "fn()"
		       },
		       "clearCollision": {
		        "!type": "fn()"
		       },
		       "collides": {
		        "!type": "fn()"
		       },
		       "adjustCenterOfMass": {
		        "!type": "fn()"
		       },
		       "getVelocityAtPoint": {
		        "!type": "fn()"
		       },
		       "applyDamping": {
		        "!type": "fn()"
		       },
		       "applyImpulse": {
		        "!type": "fn()"
		       },
		       "applyImpulseLocal": {
		        "!type": "fn()"
		       },
		       "applyForce": {
		        "!type": "fn()"
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
		        "!type": "fn()"
		       },
		       "toWorldFrame": {
		        "!type": "fn()"
		       },
		       "rotateLeft": {
		        "!type": "fn()"
		       },
		       "rotateRight": {
		        "!type": "fn()"
		       },
		       "moveForward": {
		        "!type": "fn()"
		       },
		       "moveBackward": {
		        "!type": "fn()"
		       },
		       "thrust": {
		        "!type": "fn()"
		       },
		       "reverse": {
		        "!type": "fn()"
		       },
		       "moveLeft": {
		        "!type": "fn()"
		       },
		       "moveRight": {
		        "!type": "fn()"
		       },
		       "moveUp": {
		        "!type": "fn()"
		       },
		       "moveDown": {
		        "!type": "fn()"
		       },
		       "preUpdate": {
		        "!type": "fn()"
		       },
		       "postUpdate": {
		        "!type": "fn()"
		       },
		       "reset": {
		        "!type": "fn()"
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
		        "!type": "fn()"
		       },
		       "addCircle": {
		        "!type": "fn()"
		       },
		       "addRectangle": {
		        "!type": "fn()"
		       },
		       "addPlane": {
		        "!type": "fn()"
		       },
		       "addParticle": {
		        "!type": "fn()"
		       },
		       "addLine": {
		        "!type": "fn()"
		       },
		       "addCapsule": {
		        "!type": "fn()"
		       },
		       "addPolygon": {
		        "!type": "fn()"
		       },
		       "removeShape": {
		        "!type": "fn()"
		       },
		       "setCircle": {
		        "!type": "fn()"
		       },
		       "setRectangle": {
		        "!type": "fn()"
		       },
		       "setRectangleFromSprite": {
		        "!type": "fn()"
		       },
		       "setMaterial": {
		        "!type": "fn()"
		       },
		       "shapeChanged": {
		        "!type": "fn()"
		       },
		       "addPhaserPolygon": {
		        "!type": "fn()"
		       },
		       "addFixture": {
		        "!type": "fn()"
		       },
		       "loadPolygon": {
		        "!type": "fn()"
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
		     "Body#data": {
		      "parent": {}
		     },
		     "Body#createBodyCallback": {
		      "prototype": {
		       "_bodyCallbacks[undefined]": {},
		       "_bodyCallbackContext[undefined]": {}
		      }
		     },
		     "Body#createGroupCallback": {
		      "prototype": {
		       "_groupCallbacks[undefined]": {},
		       "_groupCallbackContext[undefined]": {}
		      }
		     },
		     "Body#updateCollisionMask#data": {
		      "shapes[undefined]": {
		       "collisionMask": {}
		      }
		     },
		     "Body#setCollisionGroup#data": {
		      "shapes[undefined]": {
		       "collisionGroup": {},
		       "collisionMask": {}
		      }
		     },
		     "Body#clearCollision#data": {
		      "shapes[undefined]": {
		       "collisionGroup": {},
		       "collisionMask": {}
		      }
		     },
		     "Body#clearCollision#collidesWith": {
		      "length": {}
		     },
		     "Body#collides#data": {
		      "shapes[undefined]": {
		       "collisionMask": {}
		      }
		     },
		     "Body#setZeroRotation#data": {
		      "angularVelocity": {}
		     },
		     "Body#setZeroVelocity#data": {
		      "velocity[0]": {},
		      "velocity[1]": {}
		     },
		     "Body#setZeroDamping#data": {
		      "damping": {},
		      "angularDamping": {}
		     },
		     "Body#rotateLeft#data": {
		      "angularVelocity": {}
		     },
		     "Body#rotateRight#data": {
		      "angularVelocity": {}
		     },
		     "Body#moveForward#data": {
		      "velocity[0]": {},
		      "velocity[1]": {}
		     },
		     "Body#moveBackward#data": {
		      "velocity[0]": {},
		      "velocity[1]": {}
		     },
		     "Body#thrust#data": {
		      "force[0]": {},
		      "force[1]": {}
		     },
		     "Body#reverse#data": {
		      "force[0]": {},
		      "force[1]": {}
		     },
		     "Body#moveLeft#data": {
		      "velocity[0]": {}
		     },
		     "Body#moveRight#data": {
		      "velocity[0]": {}
		     },
		     "Body#moveUp#data": {
		      "velocity[1]": {}
		     },
		     "Body#moveDown#data": {
		      "velocity[1]": {}
		     },
		     "Body#preUpdate": {
		      "prototype": {
		       "dirty": {},
		       "removeNextStep": {}
		      }
		     },
		     "Body#postUpdate#sprite": {
		      "x": {},
		      "y": {},
		      "rotation": {}
		     },
		     "Body#postUpdate": {
		      "prototype": {
		       "dirty": {}
		      }
		     },
		     "Body#reset": {
		      "prototype": {
		       "mass": {},
		       "x": {},
		       "y": {}
		      }
		     },
		     "Body#destroy": {
		      "prototype": {
		       "_bodyCallbacks": {},
		       "_bodyCallbackContext": {},
		       "_groupCallbacks": {},
		       "_groupCallbackContext": {},
		       "debugBody": {},
		       "sprite": {}
		      }
		     },
		     "Body#destroy#sprite": {
		      "body": {}
		     },
		     "Body#addPolygon~path": {
		      "undefined][0]": {},
		      "undefined][1]": {}
		     },
		     "Body#setMaterial#data": {
		      "shapes[undefined]": {
		       "material": {}
		      }
		     },
		     "Body#addPhaserPolygon~createdFixtures": {
		      "undefined]": {}
		     },
		     "Body#addPhaserPolygon#data": {
		      "aabbNeedsUpdate": {}
		     },
		     "Body#addFixture~shape": {
		      "collisionGroup": {},
		      "collisionMask": {},
		      "sensor": {}
		     },
		     "Body#addFixture~offset": {
		      "0]": {},
		      "1]": {}
		     },
		     "Body#addFixture~cm": {
		      "0]": {},
		      "1]": {}
		     },
		     "Body#loadPolygon~cm": {
		      "0]": {},
		      "1]": {}
		     },
		     "Body#loadPolygon#data": {
		      "aabbNeedsUpdate": {}
		     },
		     "BodyDebug": {
		      "!type": "fn(game: +Phaser.Game, body: +Phaser.Physics.P2.Body, settings: ?)",
		      "prototype": {
		       "settings": {},
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
		       "drawRectangle": {
		        "!type": "fn()"
		       },
		       "drawCircle": {
		        "!type": "fn()"
		       },
		       "drawLine": {
		        "!type": "fn()"
		       },
		       "drawConvex": {
		        "!type": "fn()"
		       },
		       "drawPath": {
		        "!type": "fn()"
		       },
		       "drawPlane": {
		        "!type": "fn()"
		       },
		       "drawCapsule": {
		        "!type": "fn()"
		       },
		       "randomPastelHex": {
		        "!type": "fn()"
		       },
		       "rgbToHex": {
		        "!type": "fn()"
		       },
		       "componentToHex": {
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
		       "_sortProperty": {
		        "!type": "string"
		       },
		       "add": {
		        "!type": "fn(child: +DisplayObject, silent: bool) -> ?"
		       },
		       "addToHash": {
		        "!type": "fn(child: +DisplayObject) -> ?"
		       },
		       "removeFromHash": {
		        "!type": "fn(child: +DisplayObject) -> ?"
		       },
		       "addMultiple": {
		        "!type": "fn(children: [?]|+Phaser.Group, silent: bool) -> ?"
		       },
		       "addAt": {
		        "!type": "fn(child: +DisplayObject, index: number, silent: bool) -> ?"
		       },
		       "getAt": {
		        "!type": "fn(index: number) -> ?"
		       },
		       "create": {
		        "!type": "fn(x: number, y: number, key: string, frame: number|string, exists: bool) -> ?"
		       },
		       "createMultiple": {
		        "!type": "fn(quantity: number, key: string, frame: number|string, exists: bool)"
		       },
		       "updateZ": {
		        "!type": "fn()"
		       },
		       "resetCursor": {
		        "!type": "fn(index: number) -> ?"
		       },
		       "next": {
		        "!type": "fn() -> ?"
		       },
		       "previous": {
		        "!type": "fn() -> ?"
		       },
		       "swap": {
		        "!type": "fn(child1: +any, child2: +any)"
		       },
		       "bringToTop": {
		        "!type": "fn(child: +any) -> ?"
		       },
		       "sendToBack": {
		        "!type": "fn(child: +any) -> ?"
		       },
		       "moveUp": {
		        "!type": "fn(child: +any) -> ?"
		       },
		       "moveDown": {
		        "!type": "fn(child: +any) -> ?"
		       },
		       "xy": {
		        "!type": "fn(index: number, x: number, y: number)"
		       },
		       "reverse": {
		        "!type": "fn()"
		       },
		       "getIndex": {
		        "!type": "fn(child: +any) -> ?"
		       },
		       "replace": {
		        "!type": "fn(oldChild: +any, newChild: +any) -> ?"
		       },
		       "hasProperty": {
		        "!type": "fn(child: +any, key: [?]) -> ?"
		       },
		       "setProperty": {
		        "!type": "fn(child: +any, key: +array, value: +any, operation: number, force: bool) -> ?"
		       },
		       "checkProperty": {
		        "!type": "fn(child: +any, key: +array, value: +any, force: bool) -> ?"
		       },
		       "set": {
		        "!type": "fn(child: +Phaser.Sprite, key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool) -> ?"
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
		        "!type": "fn(predicate: +function, checkExists: bool) -> ?"
		       },
		       "forEach": {
		        "!type": "fn(callback: +function, callbackContext: ?, checkExists: bool, args: +any)"
		       },
		       "forEachExists": {
		        "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		       },
		       "forEachAlive": {
		        "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		       },
		       "forEachDead": {
		        "!type": "fn(callback: +function, callbackContext: ?, args: +any)"
		       },
		       "sort": {
		        "!type": "fn(key: string, order: number)"
		       },
		       "customSort": {
		        "!type": "fn(sortHandler: +function, context: ?)"
		       },
		       "ascendingSortHandler": {
		        "!type": "fn(a: ?, b: ?)"
		       },
		       "descendingSortHandler": {
		        "!type": "fn(a: ?, b: ?)"
		       },
		       "iterate": {
		        "!type": "fn(key: string, value: +any, returnType: number, callback: +function, callbackContext: ?, args: [?]) -> ?"
		       },
		       "getFirstExists": {
		        "!type": "fn(exists: bool) -> ?"
		       },
		       "getFirstAlive": {
		        "!type": "fn() -> ?"
		       },
		       "getFirstDead": {
		        "!type": "fn() -> ?"
		       },
		       "getTop": {
		        "!type": "fn() -> ?"
		       },
		       "getBottom": {
		        "!type": "fn() -> ?"
		       },
		       "countLiving": {
		        "!type": "fn() -> ?"
		       },
		       "countDead": {
		        "!type": "fn() -> ?"
		       },
		       "getRandom": {
		        "!type": "fn(startIndex: number, length: number) -> ?"
		       },
		       "remove": {
		        "!type": "fn(child: +any, destroy: bool, silent: bool) -> ?"
		       },
		       "moveAll": {
		        "!type": "fn(group: +Phaser.Group, silent: bool) -> ?"
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
		     "BodyDebug~defaultSettings": {
		      "pixelsPerLengthUnit": {},
		      "debugPolygons": {},
		      "lineWidth": {},
		      "alpha": {}
		     },
		     "BodyDebug#canvas": {
		      "alpha": {}
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
		      "!type": "fn(materialA: +Phaser.Physics.P2.Material, materialB: +Phaser.Physics.P2.Material, options: ?)",
		      "prototype": {}
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
		     "DistanceConstraint~options": {
		      "distance": {},
		      "localAnchorA": {},
		      "localAnchorB": {},
		      "maxForce": {}
		     },
		     "FixtureList": {
		      "!type": "fn(list: [?])",
		      "prototype": {
		       "rawList": {},
		       "init": {
		        "!type": "fn()"
		       },
		       "setCategory": {
		        "!type": "fn()"
		       },
		       "setMask": {
		        "!type": "fn()"
		       },
		       "setSensor": {
		        "!type": "fn()"
		       },
		       "setMaterial": {
		        "!type": "fn()"
		       },
		       "getFixtures": {
		        "!type": "fn()"
		       },
		       "getFixtureByKey": {
		        "!type": "fn()"
		       },
		       "getGroup": {
		        "!type": "fn()"
		       },
		       "parse": {
		        "!type": "fn()"
		       },
		       "flatten": {
		        "!type": "fn()"
		       }
		      }
		     },
		     "FixtureList#init": {
		      "prototype": {
		       "namedFixtures": {},
		       "groupedFixtures": {
		        "!type": "[?]"
		       },
		       "allFixtures": {
		        "!type": "[?]"
		       }
		      }
		     },
		     "FixtureList#setCategory": {
		      "setter": {
		       "!type": "fn()"
		      }
		     },
		     "FixtureList#setMask": {
		      "setter": {
		       "!type": "fn()"
		      }
		     },
		     "FixtureList#setSensor": {
		      "setter": {
		       "!type": "fn()"
		      }
		     },
		     "FixtureList#setMaterial": {
		      "setter": {
		       "!type": "fn()"
		      }
		     },
		     "FixtureList#parse": {
		      "prototype": {
		       "groupedFixtures[undefined]": {},
		       "namedFixtures[undefined]": {},
		       "allFixtures": {}
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
		     "GearConstraint~options": {
		      "angle": {},
		      "ratio": {}
		     },
		     "InversePointProxy": {
		      "!type": "fn(world: +Phaser.Physics.P2, destination: +any)",
		      "prototype": {
		       "world": {},
		       "destination": {},
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
		     "LockConstraint~options": {
		      "localOffsetB": {},
		      "localAngleB": {},
		      "maxForce": {}
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
		       "world": {},
		       "destination": {},
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
		     "PrismaticConstraint~options": {
		      "localAnchorA": {},
		      "localAnchorB": {},
		      "localAxisA": {},
		      "maxForce": {},
		      "disableRotationalLock": {}
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
		     "RevoluteConstraint~options": {
		      "worldPivot": {},
		      "localPivotA": {},
		      "localPivotB": {},
		      "maxForce": {}
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
		     "RotationalSpring~options": {
		      "restAngle": {},
		      "stiffness": {},
		      "damping": {}
		     },
		     "RotationalSpring#data": {
		      "parent": {}
		     },
		     "Spring": {
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
		      },
		      "!type": "fn(world: +Phaser.Physics.P2, bodyA: +p2.Body, bodyB: +p2.Body, restLength: number, stiffness: number, damping: number, worldA: [?], worldB: [?], localA: [?], localB: [?])"
		     },
		     "Spring~options": {
		      "restLength": {},
		      "stiffness": {},
		      "damping": {},
		      "worldAnchorA": {},
		      "worldAnchorB": {},
		      "localAnchorA": {},
		      "localAnchorB": {}
		     },
		     "Spring#data": {
		      "parent": {}
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
		       "!type": "+function"
		      },
		      "callbackContext": {},
		      "onBeginContact": {
		       "!type": "+Phaser.Signal"
		      },
		      "onEndContact": {
		       "!type": "+Phaser.Signal"
		      },
		      "mpx": {
		       "!type": "fn()"
		      },
		      "mpxi": {
		       "!type": "fn()"
		      },
		      "pxm": {
		       "!type": "fn()"
		      },
		      "pxmi": {
		       "!type": "fn()"
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
		      "_toRemove": {
		       "!type": "+array"
		      },
		      "_collisionGroupID": {
		       "!type": "number"
		      },
		      "_boundsLeft": {
		       "!type": "bool"
		      },
		      "_boundsRight": {
		       "!type": "bool"
		      },
		      "_boundsTop": {
		       "!type": "bool"
		      },
		      "_boundsBottom": {
		       "!type": "bool"
		      },
		      "_boundsOwnGroup": {
		       "!type": "bool"
		      },
		      "removeBodyNextStep": {
		       "!type": "fn()"
		      },
		      "preUpdate": {
		       "!type": "fn()"
		      },
		      "enable": {
		       "!type": "fn()"
		      },
		      "enableBody": {
		       "!type": "fn()"
		      },
		      "setImpactEvents": {
		       "!type": "fn()"
		      },
		      "setPostBroadphaseCallback": {
		       "!type": "fn()"
		      },
		      "postBroadphaseHandler": {
		       "!type": "fn()"
		      },
		      "impactHandler": {
		       "!type": "fn()"
		      },
		      "beginContactHandler": {
		       "!type": "fn()"
		      },
		      "endContactHandler": {
		       "!type": "fn()"
		      },
		      "setBoundsToWorld": {
		       "!type": "fn()"
		      },
		      "setWorldMaterial": {
		       "!type": "fn()"
		      },
		      "updateBoundsCollisionGroup": {
		       "!type": "fn()"
		      },
		      "setBounds": {
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
		       "!type": "fn()"
		      },
		      "removeBody": {
		       "!type": "fn()"
		      },
		      "addSpring": {
		       "!type": "fn()"
		      },
		      "removeSpring": {
		       "!type": "fn()"
		      },
		      "createDistanceConstraint": {
		       "!type": "fn()"
		      },
		      "createGearConstraint": {
		       "!type": "fn()"
		      },
		      "createRevoluteConstraint": {
		       "!type": "fn()"
		      },
		      "createLockConstraint": {
		       "!type": "fn()"
		      },
		      "createPrismaticConstraint": {
		       "!type": "fn()"
		      },
		      "addConstraint": {
		       "!type": "fn()"
		      },
		      "removeConstraint": {
		       "!type": "fn()"
		      },
		      "addContactMaterial": {
		       "!type": "fn()"
		      },
		      "removeContactMaterial": {
		       "!type": "fn()"
		      },
		      "getContactMaterial": {
		       "!type": "fn()"
		      },
		      "setMaterial": {
		       "!type": "fn()"
		      },
		      "createMaterial": {
		       "!type": "fn()"
		      },
		      "createContactMaterial": {
		       "!type": "fn()"
		      },
		      "getBodies": {
		       "!type": "fn()"
		      },
		      "getBody": {
		       "!type": "fn()"
		      },
		      "getSprings": {
		       "!type": "fn()"
		      },
		      "getConstraints": {
		       "!type": "fn()"
		      },
		      "hitTest": {
		       "!type": "fn()"
		      },
		      "toJSON": {
		       "!type": "fn()"
		      },
		      "createCollisionGroup": {
		       "!type": "fn()"
		      },
		      "setCollisionGroup": {
		       "!type": "fn()"
		      },
		      "createSpring": {
		       "!type": "fn()"
		      },
		      "createRotationalSpring": {
		       "!type": "fn()"
		      },
		      "createBody": {
		       "!type": "fn()"
		      },
		      "createParticle": {
		       "!type": "fn()"
		      },
		      "convertCollisionObjects": {
		       "!type": "fn()"
		      },
		      "clearTilemapLayerBodies": {
		       "!type": "fn()"
		      },
		      "convertTilemap": {
		       "!type": "fn()"
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
		    "P2~config": {
		     "gravity": {},
		     "broadphase": {}
		    },
		    "P2#walls": {
		     "left": {},
		     "right": {},
		     "top": {},
		     "bottom": {}
		    },
		    "P2#preUpdate#_toRemove": {
		     "length": {}
		    },
		    "P2#setPostBroadphaseCallback": {
		     "prototype": {
		      "postBroadphaseCallback": {},
		      "callbackContext": {}
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
		      "!type": "fn()"
		     },
		     "enable": {
		      "!type": "fn()"
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
		    "P2#setWorldMaterial#walls": {
		     "left": {
		      "shapes[0]": {
		       "material": {}
		      }
		     },
		     "right": {
		      "shapes[0]": {
		       "material": {}
		      }
		     },
		     "top": {
		      "shapes[0]": {
		       "material": {}
		      }
		     },
		     "bottom": {
		      "shapes[0]": {
		       "material": {}
		      }
		     }
		    },
		    "P2#updateBoundsCollisionGroup#walls": {
		     "left": {
		      "shapes[0]": {
		       "collisionGroup": {}
		      }
		     },
		     "right": {
		      "shapes[0]": {
		       "collisionGroup": {}
		      }
		     },
		     "top": {
		      "shapes[0]": {
		       "collisionGroup": {}
		      }
		     },
		     "bottom": {
		      "shapes[0]": {
		       "collisionGroup": {}
		      }
		     }
		    },
		    "P2#setBounds#walls": {
		     "left": {
		      "shapes[0]": {
		       "collisionGroup": {}
		      }
		     },
		     "right": {
		      "shapes[0]": {
		       "collisionGroup": {}
		      }
		     },
		     "top": {
		      "shapes[0]": {
		       "collisionGroup": {}
		      }
		     },
		     "bottom": {
		      "shapes[0]": {
		       "collisionGroup": {}
		      }
		     }
		    },
		    "P2#setBounds": {
		     "prototype": {
		      "_boundsLeft": {},
		      "_boundsRight": {},
		      "_boundsTop": {},
		      "_boundsBottom": {},
		      "_boundsOwnGroup": {}
		     }
		    },
		    "P2#pause": {
		     "prototype": {
		      "paused": {}
		     }
		    },
		    "P2#resume": {
		     "prototype": {
		      "paused": {}
		     }
		    },
		    "P2#reset": {
		     "prototype": {
		      "nothingCollisionGroup": {},
		      "boundsCollisionGroup": {},
		      "everythingCollisionGroup": {},
		      "_collisionGroupID": {}
		     }
		    },
		    "P2#clear#world": {
		     "time": {},
		     "fixedStepTime": {}
		    },
		    "P2#clear": {
		     "prototype": {
		      "postBroadphaseCallback": {},
		      "callbackContext": {},
		      "impactCallback": {},
		      "collisionGroups": {},
		      "_toRemove": {},
		      "boundsCollidesWith": {}
		     }
		    },
		    "P2#destroy": {
		     "prototype": {
		      "game": {}
		     }
		    },
		    "P2#createCollisionGroup#walls": {
		     "left": {
		      "shapes[0]": {
		       "collisionMask": {}
		      }
		     },
		     "right": {
		      "shapes[0]": {
		       "collisionMask": {}
		      }
		     },
		     "top": {
		      "shapes[0]": {
		       "collisionMask": {}
		      }
		     },
		     "bottom": {
		      "shapes[0]": {
		       "collisionMask": {}
		      }
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
		   "Physics#parseConfig": {
		    "prototype": {
		     "arcade": {},
		     "ninja": {},
		     "p2": {},
		     "box2d": {},
		     "matter": {}
		    }
		   },
		   "Physics#startSystem": {
		    "prototype": {
		     "arcade": {},
		     "p2": {},
		     "ninja": {},
		     "box2d": {},
		     "matter": {}
		    }
		   },
		   "Physics#destroy": {
		    "prototype": {
		     "arcade": {},
		     "ninja": {},
		     "p2": {},
		     "box2d": {},
		     "matter": {}
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
		     "sounds[undefined]": {},
		     "play": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "get": {
		      "!type": "fn()"
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
		     "_sound": {},
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
		     "_volume": {
		      "!type": "number"
		     },
		     "_buffer": {
		      "!type": "+any"
		     },
		     "_muted": {
		      "!type": "bool"
		     },
		     "_tempMarker": {
		      "!type": "number"
		     },
		     "_tempPosition": {
		      "!type": "number"
		     },
		     "_tempVolume": {
		      "!type": "number"
		     },
		     "_muteVolume": {
		      "!type": "number"
		     },
		     "_tempLoop": {
		      "!type": "bool"
		     },
		     "_paused": {
		      "!type": "bool"
		     },
		     "_onDecodedEventDispatched": {
		      "!type": "bool"
		     },
		     "soundHasUnlocked": {
		      "!type": "fn()"
		     },
		     "addMarker": {
		      "!type": "fn()"
		     },
		     "removeMarker": {
		      "!type": "fn()"
		     },
		     "onEndedHandler": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "loopFull": {
		      "!type": "fn()"
		     },
		     "play": {
		      "!type": "fn()"
		     },
		     "restart": {
		      "!type": "fn()"
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
		      "!type": "fn()"
		     },
		     "fadeOut": {
		      "!type": "fn()"
		     },
		     "fadeTo": {
		      "!type": "fn()"
		     },
		     "fadeComplete": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
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
		   "Sound#gainNode": {
		    "gain": {
		     "value": {}
		    }
		   },
		   "Sound#soundHasUnlocked": {
		    "prototype": {
		     "_sound": {},
		     "totalDuration": {}
		    }
		   },
		   "Sound#addMarker": {
		    "prototype": {
		     "markers[undefined]": {}
		    }
		   },
		   "Sound#addMarker#markers[undefined]": {
		    "name": {},
		    "start": {},
		    "stop": {},
		    "volume": {},
		    "duration": {},
		    "durationMS": {},
		    "loop": {}
		   },
		   "Sound#onEndedHandler": {
		    "prototype": {
		     "isPlaying": {}
		    }
		   },
		   "Sound#update": {
		    "prototype": {
		     "_onDecodedEventDispatched": {},
		     "pendingPlayback": {},
		     "currentTime": {},
		     "startTime": {}
		    }
		   },
		   "Sound#play#_sound": {
		    "currentTime": {},
		    "buffer": {},
		    "loop": {},
		    "onended": {},
		    "muted": {},
		    "volume": {}
		   },
		   "Sound#play": {
		    "prototype": {
		     "currentMarker": {},
		     "position": {},
		     "volume": {},
		     "loop": {},
		     "duration": {},
		     "durationMS": {},
		     "_tempMarker": {},
		     "_tempPosition": {},
		     "_tempVolume": {},
		     "_tempLoop": {},
		     "_sound": {},
		     "_buffer": {},
		     "totalDuration": {},
		     "isPlaying": {},
		     "startTime": {},
		     "currentTime": {},
		     "stopTime": {},
		     "pendingPlayback": {}
		    }
		   },
		   "Sound#pause": {
		    "prototype": {
		     "paused": {},
		     "pausedPosition": {},
		     "pausedTime": {}
		    }
		   },
		   "Sound#resume": {
		    "prototype": {
		     "_sound": {},
		     "isPlaying": {},
		     "paused": {},
		     "startTime": {}
		    }
		   },
		   "Sound#resume#_sound": {
		    "buffer": {},
		    "loop": {},
		    "onended": {}
		   },
		   "Sound#stop#_sound": {
		    "currentTime": {}
		   },
		   "Sound#stop": {
		    "prototype": {
		     "pendingPlayback": {},
		     "isPlaying": {},
		     "currentMarker": {}
		    }
		   },
		   "Sound#fadeTo": {
		    "prototype": {
		     "fadeTween": {}
		    }
		   },
		   "Sound#destroy": {
		    "prototype": {
		     "markers": {},
		     "context": {},
		     "_buffer": {},
		     "externalNode": {}
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
		     "_codeMuted": {
		      "!type": "bool"
		     },
		     "_muted": {
		      "!type": "bool"
		     },
		     "_unlockSource": {
		      "!type": "+AudioContext"
		     },
		     "_volume": {
		      "!type": "number"
		     },
		     "_sounds": {
		      "!type": "+array"
		     },
		     "_watchList": {
		      "!type": "+Phaser.ArraySet"
		     },
		     "_watching": {
		      "!type": "bool"
		     },
		     "_watchCallback": {
		      "!type": "+function"
		     },
		     "_watchContext": {},
		     "boot": {
		      "!type": "fn()"
		     },
		     "setTouchLock": {
		      "!type": "fn()"
		     },
		     "unlock": {
		      "!type": "fn()"
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
		      "!type": "fn()"
		     },
		     "setDecodedCallback": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "addSprite": {
		      "!type": "fn()"
		     },
		     "remove": {
		      "!type": "fn()"
		     },
		     "removeByKey": {
		      "!type": "fn()"
		     },
		     "play": {
		      "!type": "fn()"
		     },
		     "setMute": {
		      "!type": "fn()"
		     },
		     "unsetMute": {
		      "!type": "fn()"
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
		   "SoundManager#boot": {
		    "prototype": {
		     "channels": {},
		     "noAudio": {},
		     "touchLocked": {},
		     "usingAudioTag": {},
		     "context": {},
		     "usingWebAudio": {},
		     "masterGain": {}
		    }
		   },
		   "SoundManager#boot#masterGain": {
		    "gain": {
		     "value": {}
		    }
		   },
		   "SoundManager#setTouchLock": {
		    "prototype": {
		     "touchLocked": {}
		    }
		   },
		   "SoundManager#unlock": {
		    "prototype": {
		     "touchLocked": {},
		     "_unlockSource": {}
		    }
		   },
		   "SoundManager#unlock#_unlockSource": {
		    "buffer": {}
		   },
		   "SoundManager#setDecodedCallback": {
		    "prototype": {
		     "_watching": {},
		     "_watchCallback": {},
		     "_watchContext": {}
		    }
		   },
		   "SoundManager#update": {
		    "prototype": {
		     "touchLocked": {},
		     "_unlockSource": {},
		     "_watching": {}
		    }
		   },
		   "SoundManager#setMute": {
		    "prototype": {
		     "_muted": {},
		     "_muteVolume": {}
		    }
		   },
		   "SoundManager#setMute#masterGain": {
		    "gain": {
		     "value": {}
		    }
		   },
		   "SoundManager#setMute#_sounds[undefined]": {
		    "mute": {}
		   },
		   "SoundManager#unsetMute": {
		    "prototype": {
		     "_muted": {}
		    }
		   },
		   "SoundManager#unsetMute#masterGain": {
		    "gain": {
		     "value": {}
		    }
		   },
		   "SoundManager#unsetMute#_sounds[undefined]": {
		    "mute": {}
		   },
		   "SoundManager#destroy": {
		    "prototype": {
		     "_sounds": {}
		    }
		   },
		   "Utils": {
		    "Debug": {
		     "prototype": {
		      "isDisabled": {},
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
		       "!type": "fn()"
		      },
		      "stop": {
		       "!type": "fn()"
		      },
		      "line": {
		       "!type": "fn()"
		      },
		      "soundInfo": {
		       "!type": "fn()"
		      },
		      "cameraInfo": {
		       "!type": "fn()"
		      },
		      "timer": {
		       "!type": "fn()"
		      },
		      "pointer": {
		       "!type": "fn()"
		      },
		      "spriteInputInfo": {
		       "!type": "fn()"
		      },
		      "key": {
		       "!type": "fn()"
		      },
		      "inputInfo": {
		       "!type": "fn()"
		      },
		      "spriteBounds": {
		       "!type": "fn()"
		      },
		      "ropeSegments": {
		       "!type": "fn()"
		      },
		      "spriteInfo": {
		       "!type": "fn()"
		      },
		      "spriteCoords": {
		       "!type": "fn()"
		      },
		      "lineInfo": {
		       "!type": "fn()"
		      },
		      "pixel": {
		       "!type": "fn()"
		      },
		      "geom": {
		       "!type": "fn(object: +Phaser.Rectangle|?, color: string, filled: bool)"
		      },
		      "rectangle": {
		       "!type": "fn()"
		      },
		      "text": {
		       "!type": "fn()"
		      },
		      "quadTree": {
		       "!type": "fn()"
		      },
		      "body": {
		       "!type": "fn()"
		      },
		      "bodyInfo": {
		       "!type": "fn()"
		      },
		      "box2dWorld": {
		       "!type": "fn()"
		      },
		      "box2dBody": {
		       "!type": "fn()"
		      },
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
		      "destroy": {
		       "!type": "fn()"
		      }
		     },
		     "!type": "fn(game: +Phaser.Game)"
		    },
		    "Debug#boot": {
		     "prototype": {
		      "context": {},
		      "bmd": {},
		      "sprite": {},
		      "canvas": {}
		     }
		    },
		    "Debug#preUpdate": {
		     "prototype": {
		      "dirty": {}
		     }
		    },
		    "Debug#start": {
		     "prototype": {
		      "currentX": {},
		      "currentY": {},
		      "currentColor": {},
		      "columnWidth": {},
		      "dirty": {}
		     }
		    },
		    "Debug#start#context": {
		     "strokeStyle": {},
		     "fillStyle": {},
		     "font": {},
		     "globalAlpha": {}
		    },
		    "Debug#line#context": {
		     "fillStyle": {}
		    },
		    "Debug#line": {
		     "prototype": {
		      "currentY": {}
		     }
		    },
		    "Debug#pointer#context": {
		     "fillStyle": {},
		     "lineWidth": {}
		    },
		    "Debug#spriteBounds~bounds": {
		     "x": {},
		     "y": {}
		    },
		    "Debug#pixel#context": {
		     "fillStyle": {}
		    },
		    "Debug#geom#context": {
		     "fillStyle": {},
		     "strokeStyle": {},
		     "lineWidth": {}
		    },
		    "Debug#rectangle#context": {
		     "fillStyle": {},
		     "strokeStyle": {}
		    },
		    "Debug#text#context": {
		     "font": {},
		     "fillStyle": {}
		    },
		    "Debug#quadTree#context": {
		     "strokeStyle": {}
		    },
		    "!type": "fn()",
		    "getProperty": {
		     "!type": "fn()"
		    },
		    "setProperty": {
		     "!type": "fn()"
		    },
		    "setProperty~obj": {
		     "undefined]": {}
		    },
		    "chanceRoll": {
		     "!type": "fn()"
		    },
		    "prototype": {
		     "randomChoice": {
		      "!type": "fn(choice1: +any, choice2: +any) -> ?"
		     }
		    },
		    "randomChoice": {
		     "!type": "fn()"
		    },
		    "parseDimension": {
		     "!type": "fn()"
		    },
		    "pad": {
		     "!type": "fn()"
		    },
		    "isPlainObject": {
		     "!type": "fn()"
		    },
		    "extend": {
		     "!type": "fn()"
		    },
		    "extend~target": {
		     "undefined]": {}
		    },
		    "mixinPrototype": {
		     "!type": "fn()"
		    },
		    "mixin": {
		     "!type": "fn()"
		    }
		   },
		   "TweenManager": {
		    "!type": "fn(game: +Phaser.Game)",
		    "prototype": {
		     "update": {
		      "!type": "fn()"
		     },
		     "game": {
		      "!type": "+Phaser.Game"
		     },
		     "frameBased": {
		      "!type": "bool"
		     },
		     "_tweens": {
		      "!type": "+array.<Phaser.Tween>"
		     },
		     "_add": {
		      "!type": "+array.<Phaser.Tween>"
		     },
		     "easeMap": {},
		     "getAll": {
		      "!type": "fn()"
		     },
		     "removeAll": {
		      "!type": "fn()"
		     },
		     "removeFrom": {
		      "!type": "fn()"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "create": {
		      "!type": "fn()"
		     },
		     "remove": {
		      "!type": "fn()"
		     },
		     "isTweening": {
		      "!type": "fn()"
		     },
		     "_pauseAll": {
		      "!type": "fn()"
		     },
		     "_resumeAll": {
		      "!type": "fn()"
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
		     "!type": "fn()"
		    },
		    "create~canvas": {
		     "id": {},
		     "width": {},
		     "height": {},
		     "style.display": {}
		    },
		    "setBackgroundColor": {
		     "!type": "fn()"
		    },
		    "setTouchAction": {
		     "!type": "fn()"
		    },
		    "setUserSelect": {
		     "!type": "fn()"
		    },
		    "addToDOM": {
		     "!type": "fn()"
		    },
		    "addToDOM~target": {
		     "style.overflow": {}
		    },
		    "removeFromDOM": {
		     "!type": "fn()"
		    },
		    "setTransform": {
		     "!type": "fn()"
		    },
		    "setSmoothingEnabled": {
		     "!type": "fn()"
		    },
		    "getSmoothingEnabled": {
		     "!type": "fn()"
		    },
		    "setImageRenderingCrisp": {
		     "!type": "fn()"
		    },
		    "setImageRenderingBicubic": {
		     "!type": "fn()"
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
		      "!type": "fn(type: string) -> ?"
		     },
		     "canPlayVideo": {
		      "!type": "fn(type: string) -> ?"
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
		     "!type": "fn(handler: +function, context: ?, nonPrimer: bool)"
		    },
		    "whenReady~readyCheck": {
		     "_queue": {},
		     "_monitor": {}
		    },
		    "_readyCheck": {
		     "!type": "fn()",
		     "prototype": {
		      "deviceReadyAt": {},
		      "initialized": {},
		      "_readyCheck": {},
		      "_initialize": {},
		      "onInitialized": {}
		     }
		    },
		    "_initialize": {
		     "!type": "fn()",
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
		    },
		    "_initialize~device": {
		     "vita": {},
		     "kindle": {},
		     "android": {},
		     "chromeOS": {},
		     "iOS": {},
		     "linux": {},
		     "macOS": {},
		     "windows": {},
		     "windowsPhone": {},
		     "desktop": {},
		     "canvas": {},
		     "localStorage": {},
		     "file": {},
		     "fileSystem": {},
		     "webGL": {},
		     "worker": {},
		     "pointerLock": {},
		     "quirksMode": {},
		     "getUserMedia": {},
		     "canvasBitBltShift": {},
		     "touch": {},
		     "mspointer": {},
		     "wheelEvent": {},
		     "fullscreen": {},
		     "requestFullscreen": {},
		     "cancelFullscreen": {},
		     "fullscreenKeyboard": {},
		     "arora": {},
		     "chrome": {},
		     "chromeVersion": {},
		     "epiphany": {},
		     "firefox": {},
		     "firefoxVersion": {},
		     "mobileSafari": {},
		     "ie": {},
		     "ieVersion": {},
		     "midori": {},
		     "opera": {},
		     "safari": {},
		     "trident": {},
		     "tridentVersion": {},
		     "silk": {},
		     "webApp": {},
		     "cordova": {},
		     "node": {},
		     "nodeWebkit": {},
		     "electron": {},
		     "cocoonJS": {},
		     "cocoonJSApp": {},
		     "ejecta": {},
		     "crosswalk": {},
		     "oggVideo": {},
		     "h264Video": {},
		     "mp4Video": {},
		     "webmVideo": {},
		     "vp9Video": {},
		     "hlsVideo": {},
		     "audioData": {},
		     "webAudio": {},
		     "ogg": {},
		     "opus": {},
		     "mp3": {},
		     "wav": {},
		     "m4a": {},
		     "webm": {},
		     "pixelRatio": {},
		     "iPhone": {},
		     "iPhone4": {},
		     "iPad": {},
		     "typedArray": {},
		     "littleEndian": {},
		     "LITTLE_ENDIAN": {},
		     "support32bit": {},
		     "vibration": {},
		     "css3D": {}
		    },
		    "_initialize~_checkIsLittleEndian~b": {
		     "0]": {},
		     "1]": {},
		     "2]": {},
		     "3]": {}
		    },
		    "_initialize~_checkCSS3D~transforms": {
		     "webkitTransform": {},
		     "OTransform": {},
		     "msTransform": {},
		     "MozTransform": {},
		     "transform": {}
		    },
		    "_initialize~_checkCSS3D~el": {
		     "style[undefined]": {}
		    },
		    "canPlayAudio": {
		     "!type": "fn()"
		    },
		    "canPlayVideo": {
		     "!type": "fn()"
		    },
		    "isConsoleOpen": {
		     "!type": "fn()"
		    },
		    "isAndroidStockBrowser": {
		     "!type": "fn()"
		    }
		   },
		   "DOM": {
		    "!type": "fn()",
		    "getOffset": {
		     "!type": "fn()"
		    },
		    "getOffset~point": {
		     "x": {},
		     "y": {}
		    },
		    "getBounds": {
		     "!type": "fn()"
		    },
		    "calibrate": {
		     "!type": "fn()"
		    },
		    "calibrate~output": {
		     "width": {
		      "output.right": {},
		      "output.left": {}
		     },
		     "height": {
		      "output.bottom": {},
		      "output.top": {}
		     },
		     "left": {},
		     "right": {},
		     "top": {},
		     "bottom": {}
		    },
		    "getAspectRatio": {
		     "!type": "fn()"
		    },
		    "inLayoutViewport": {
		     "!type": "fn()"
		    },
		    "getScreenOrientation": {
		     "!type": "fn()"
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
		     "_isSetTimeOut": {
		      "!type": "bool"
		     },
		     "_onLoop": {
		      "!type": "+function"
		     },
		     "_timeOutID": {
		      "!type": "number"
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
		      "!type": "fn()"
		     },
		     "isRAF": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "RequestAnimationFrame#start": {
		    "prototype": {
		     "isRunning": {},
		     "_isSetTimeOut": {},
		     "_onLoop": {
		      "!type": "fn()"
		     },
		     "_timeOutID": {}
		    }
		   },
		   "RequestAnimationFrame#updateRAF": {
		    "prototype": {
		     "_timeOutID": {}
		    }
		   },
		   "RequestAnimationFrame#updateSetTimeout": {
		    "prototype": {
		     "_timeOutID": {}
		    }
		   },
		   "RequestAnimationFrame#stop": {
		    "prototype": {
		     "isRunning": {}
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
		      "!type": "fn()"
		     },
		     "addImage": {
		      "!type": "fn()"
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
		      "!type": "+function"
		     },
		     "collisionCallbackContext": {},
		     "containsPoint": {
		      "!type": "fn()"
		     },
		     "intersects": {
		      "!type": "fn()"
		     },
		     "setCollisionCallback": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     },
		     "setCollision": {
		      "!type": "fn()"
		     },
		     "resetCollision": {
		      "!type": "fn()"
		     },
		     "isInteresting": {
		      "!type": "fn()"
		     },
		     "copy": {
		      "!type": "fn()"
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
		   "Tile#setCollisionCallback": {
		    "prototype": {
		     "collisionCallback": {},
		     "collisionCallbackContext": {}
		    }
		   },
		   "Tile#destroy": {
		    "prototype": {
		     "collisionCallback": {},
		     "collisionCallbackContext": {},
		     "properties": {}
		    }
		   },
		   "Tile#setCollision": {
		    "prototype": {
		     "collideLeft": {},
		     "collideRight": {},
		     "collideUp": {},
		     "collideDown": {},
		     "faceLeft": {},
		     "faceRight": {},
		     "faceTop": {},
		     "faceBottom": {}
		    }
		   },
		   "Tile#resetCollision": {
		    "prototype": {
		     "collideLeft": {},
		     "collideRight": {},
		     "collideUp": {},
		     "collideDown": {},
		     "faceTop": {},
		     "faceBottom": {},
		     "faceLeft": {},
		     "faceRight": {}
		    }
		   },
		   "Tile#copy": {
		    "prototype": {
		     "index": {},
		     "alpha": {},
		     "properties": {},
		     "collideUp": {},
		     "collideDown": {},
		     "collideLeft": {},
		     "collideRight": {},
		     "collisionCallback": {},
		     "collisionCallbackContext": {}
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
		     "_results": {
		      "!type": "+array"
		     },
		     "_tempA": {
		      "!type": "number"
		     },
		     "_tempB": {
		      "!type": "number"
		     },
		     "create": {
		      "!type": "fn()"
		     },
		     "setTileSize": {
		      "!type": "fn()"
		     },
		     "addTilesetImage": {
		      "!type": "fn()"
		     },
		     "createFromObjects": {
		      "!type": "fn()"
		     },
		     "createFromTiles": {
		      "!type": "fn()"
		     },
		     "createLayer": {
		      "!type": "fn()"
		     },
		     "createBlankLayer": {
		      "!type": "fn()"
		     },
		     "getIndex": {
		      "!type": "fn()"
		     },
		     "getLayerIndex": {
		      "!type": "fn()"
		     },
		     "getTilesetIndex": {
		      "!type": "fn()"
		     },
		     "getImageIndex": {
		      "!type": "fn()"
		     },
		     "getObjectIndex": {
		      "!type": "fn()"
		     },
		     "setTileIndexCallback": {
		      "!type": "fn()"
		     },
		     "setTileLocationCallback": {
		      "!type": "fn()"
		     },
		     "setCollision": {
		      "!type": "fn()"
		     },
		     "setCollisionBetween": {
		      "!type": "fn()"
		     },
		     "setCollisionByExclusion": {
		      "!type": "fn()"
		     },
		     "setCollisionByIndex": {
		      "!type": "fn()"
		     },
		     "getLayer": {
		      "!type": "fn()"
		     },
		     "setPreventRecalculate": {
		      "!type": "fn()"
		     },
		     "calculateFaces": {
		      "!type": "fn()"
		     },
		     "getTileAbove": {
		      "!type": "fn()"
		     },
		     "getTileBelow": {
		      "!type": "fn()"
		     },
		     "getTileLeft": {
		      "!type": "fn()"
		     },
		     "getTileRight": {
		      "!type": "fn()"
		     },
		     "setLayer": {
		      "!type": "fn()"
		     },
		     "hasTile": {
		      "!type": "fn()"
		     },
		     "removeTile": {
		      "!type": "fn()"
		     },
		     "removeTileWorldXY": {
		      "!type": "fn()"
		     },
		     "putTile": {
		      "!type": "fn()"
		     },
		     "putTileWorldXY": {
		      "!type": "fn()"
		     },
		     "searchTileIndex": {
		      "!type": "fn()"
		     },
		     "getTile": {
		      "!type": "fn()"
		     },
		     "getTileWorldXY": {
		      "!type": "fn()"
		     },
		     "copy": {
		      "!type": "fn()"
		     },
		     "paste": {
		      "!type": "fn()"
		     },
		     "swap": {
		      "!type": "fn()"
		     },
		     "swapHandler": {
		      "!type": "fn()"
		     },
		     "forEach": {
		      "!type": "fn()"
		     },
		     "replace": {
		      "!type": "fn()"
		     },
		     "random": {
		      "!type": "fn()"
		     },
		     "shuffle": {
		      "!type": "fn()"
		     },
		     "fill": {
		      "!type": "fn()"
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
		   "Tilemap#create": {
		    "prototype": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "Tilemap#create#layers": {
		    "length": {}
		   },
		   "Tilemap#setTileSize": {
		    "prototype": {
		     "tileWidth": {},
		     "tileHeight": {},
		     "widthInPixels": {},
		     "heightInPixels": {}
		    }
		   },
		   "Tilemap#addTilesetImage": {
		    "prototype": {
		     "tiles[undefined]": {}
		    }
		   },
		   "Tilemap#createFromObjects~sprite": {
		    "name": {},
		    "visible": {},
		    "autoCull": {},
		    "exists": {},
		    "width": {},
		    "height": {},
		    "angle": {},
		    "y": {}
		   },
		   "Tilemap#createFromTiles~properties": {
		    "customClass": {},
		    "adjustY": {}
		   },
		   "Tilemap#createFromTiles~sprite": {
		    "undefined]": {}
		   },
		   "Tilemap#createBlankLayer~layer": {
		    "name": {},
		    "x": {},
		    "y": {},
		    "width": {},
		    "height": {},
		    "widthInPixels": {},
		    "heightInPixels": {},
		    "alpha": {},
		    "visible": {},
		    "properties": {},
		    "indexes": {},
		    "callbacks": {},
		    "bodies": {},
		    "data": {}
		   },
		   "Tilemap#createBlankLayer": {
		    "prototype": {
		     "currentLayer": {}
		    }
		   },
		   "Tilemap#createBlankLayer~output": {
		    "name": {}
		   },
		   "Tilemap#setTileIndexCallback#layers[undefined]": {
		    "callbacks[undefined]": {
		     "callback": {},
		     "callbackContext": {}
		    }
		   },
		   "Tilemap#setCollisionByIndex~tile": {
		    "faceTop": {},
		    "faceBottom": {},
		    "faceLeft": {},
		    "faceRight": {}
		   },
		   "Tilemap#setPreventRecalculate": {
		    "prototype": {
		     "preventingRecalculate": {},
		     "needToRecalculate": {}
		    }
		   },
		   "Tilemap#calculateFaces": {
		    "prototype": {
		     "needToRecalculate[undefined]": {}
		    }
		   },
		   "Tilemap#calculateFaces~tile": {
		    "faceTop": {},
		    "faceBottom": {},
		    "faceLeft": {},
		    "faceRight": {}
		   },
		   "Tilemap#setLayer": {
		    "prototype": {
		     "currentLayer": {}
		    }
		   },
		   "Tilemap#removeTile#layers[undefined]": {
		    "data[undefined][undefined]": {},
		    "dirty": {}
		   },
		   "Tilemap#putTile#layers[undefined]": {
		    "data[undefined][undefined]": {
		     "index": {}
		    },
		    "dirty": {}
		   },
		   "Tilemap#copy#_results": {
		    "length": {}
		   },
		   "Tilemap#paste#layers[undefined]": {
		    "dirty": {}
		   },
		   "Tilemap#swap": {
		    "prototype": {
		     "_tempA": {},
		     "_tempB": {}
		    }
		   },
		   "Tilemap#replace#_results[undefined]": {
		    "index": {}
		   },
		   "Tilemap#random#_results[undefined]": {
		    "index": {}
		   },
		   "Tilemap#shuffle#_results[undefined]": {
		    "index": {}
		   },
		   "Tilemap#fill#_results[undefined]": {
		    "index": {}
		   },
		   "Tilemap#removeAllLayers#layers": {
		    "length": {}
		   },
		   "Tilemap#removeAllLayers": {
		    "prototype": {
		     "currentLayer": {}
		    }
		   },
		   "Tilemap#dump~args": {
		    "0]": {}
		   },
		   "Tilemap#destroy": {
		    "prototype": {
		     "data": {},
		     "game": {}
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
		     "context": {
		      "!type": "+CanvasRenderingContext2D"
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
		     "_wrap": {
		      "!type": "bool"
		     },
		     "_mc": {},
		     "_scrollX": {
		      "!type": "number"
		     },
		     "_scrollY": {},
		     "_results": {
		      "!type": "[?]"
		     },
		     "fixedToCamera": {
		      "!type": "bool"
		     },
		     "preUpdateCore": {},
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
		      "!type": "fn()"
		     },
		     "resizeWorld": {
		      "!type": "fn()"
		     },
		     "_fixX": {
		      "!type": "fn()"
		     },
		     "_unfixX": {
		      "!type": "fn()"
		     },
		     "_fixY": {
		      "!type": "fn()"
		     },
		     "_unfixY": {
		      "!type": "fn()"
		     },
		     "getTileX": {
		      "!type": "fn()"
		     },
		     "getTileY": {
		      "!type": "fn()"
		     },
		     "getTileXY": {
		      "!type": "fn()"
		     },
		     "getRayCastTiles": {
		      "!type": "fn()"
		     },
		     "getTiles": {
		      "!type": "fn()"
		     },
		     "resolveTileset": {
		      "!type": "fn()"
		     },
		     "resetTilesetCache": {
		      "!type": "fn()"
		     },
		     "setScale": {
		      "!type": "fn()"
		     },
		     "shiftCanvas": {
		      "!type": "fn()"
		     },
		     "renderRegion": {
		      "!type": "fn()"
		     },
		     "renderDeltaScroll": {
		      "!type": "fn()"
		     },
		     "renderFull": {
		      "!type": "fn()"
		     },
		     "render": {
		      "!type": "fn()"
		     },
		     "renderDebug": {
		      "!type": "fn()"
		     },
		     "anchor": {},
		     "texture": {},
		     "_width": {},
		     "_height": {},
		     "tint": {},
		     "cachedTint": {},
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
		     "_bounds": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_exists": {
		      "!type": "bool"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "angle": {
		      "!type": "number"
		     },
		     "play": {
		      "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> ?"
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
		      "!type": "fn() -> ?"
		     },
		     "sendToBack": {
		      "!type": "fn() -> ?"
		     },
		     "moveUp": {
		      "!type": "fn() -> ?"
		     },
		     "moveDown": {
		      "!type": "fn() -> ?"
		     },
		     "cropRect": {
		      "!type": "+Phaser.Rectangle"
		     },
		     "_crop": {
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
		     "_fixedToCamera": {
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
		     "_outOfBoundsFired": {
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
		      "!type": "fn(health: number) -> ?"
		     },
		     "kill": {
		      "!type": "fn() -> ?"
		     },
		     "customRender": {
		      "!type": "bool"
		     },
		     "_frame": {
		      "!type": "+Phaser.Rectangle"
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
		      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> ?"
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
		      "!type": "fn(x: number, y: number, health: number) -> ?"
		     },
		     "transformCallback": {
		      "!type": "+function"
		     },
		     "transformCallbackContext": {},
		     "scaleMin": {
		      "!type": "+Phaser.Point"
		     },
		     "scaleMax": {
		      "!type": "+Phaser.Point"
		     },
		     "checkTransform": {
		      "!type": "fn(wt: +PIXI.Matrix)"
		     },
		     "setScaleMinMax": {
		      "!type": "fn(minX: number|+null, minY: number|+null, maxX: number|+null, maxY: number|+null)"
		     },
		     "smoothed": {
		      "!type": "bool"
		     }
		    },
		    "sharedCopyCanvas": {},
		    "ensureSharedCopyCanvas": {
		     "!type": "fn()",
		     "prototype": {
		      "sharedCopyCanvas": {}
		     }
		    }
		   },
		   "TilemapLayer#renderSettings": {
		    "enableScrollDelta": {},
		    "overdrawRatio": {},
		    "copyCanvas": {}
		   },
		   "TilemapLayer#debugSettings": {
		    "missingImageFill": {},
		    "debuggedTileOverfill": {},
		    "forceFullRedraw": {},
		    "debugAlpha": {},
		    "facingEdgeStroke": {},
		    "collidingTileOverfill": {}
		   },
		   "TilemapLayer#_mc": {
		    "scrollX": {},
		    "scrollY": {},
		    "renderWidth": {},
		    "renderHeight": {},
		    "tileWidth": {},
		    "tileHeight": {},
		    "cw": {},
		    "ch": {},
		    "tilesets": {}
		   },
		   "TilemapLayer#postUpdate": {
		    "prototype": {
		     "scrollX": {},
		     "scrollY": {}
		    }
		   },
		   "TilemapLayer#resize#canvas": {
		    "width": {},
		    "height": {}
		   },
		   "TilemapLayer#resize#texture": {
		    "width": {},
		    "height": {},
		    "crop": {
		     "width": {},
		     "height": {}
		    },
		    "baseTexture": {
		     "width": {},
		     "height": {}
		    },
		    "requiresUpdate": {}
		   },
		   "TilemapLayer#resize": {
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "TilemapLayer#resolveTileset~tilesets": {
		    "undefined]": {}
		   },
		   "TilemapLayer#setScale~tile": {
		    "width": {},
		    "height": {},
		    "worldX": {},
		    "worldY": {}
		   },
		   "TilemapLayer#shiftCanvas~copyCanvas": {
		    "width": {},
		    "height": {}
		   },
		   "TilemapLayer#renderRegion~context": {
		    "fillStyle": {},
		    "globalAlpha": {}
		   },
		   "TilemapLayer#render#layer": {
		    "dirty": {}
		   },
		   "TilemapLayer#render~mc": {
		    "scrollX": {},
		    "scrollY": {},
		    "renderWidth": {},
		    "renderHeight": {}
		   },
		   "TilemapLayer#render#context": {
		    "globalAlpha": {}
		   },
		   "TilemapLayer#render": {
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "TilemapLayer#renderDebug~context": {
		    "strokeStyle": {},
		    "fillStyle": {}
		   },
		   "TilemapParser": {
		    "!type": "fn()",
		    "INSERT_NULL": {
		     "!type": "bool"
		    },
		    "parse": {
		     "!type": "fn()"
		    },
		    "parseCSV": {
		     "!type": "fn()"
		    },
		    "parseCSV~output": {
		     "undefined]": {},
		     "undefined][undefined]": {}
		    },
		    "parseCSV~map": {
		     "format": {},
		     "name": {},
		     "width": {},
		     "height": {},
		     "tileWidth": {},
		     "tileHeight": {},
		     "widthInPixels": {},
		     "heightInPixels": {},
		     "layers[0].width": {},
		     "layers[0].height": {},
		     "layers[0].widthInPixels": {},
		     "layers[0].heightInPixels": {},
		     "layers[0].data": {}
		    },
		    "getEmptyData": {
		     "!type": "fn()"
		    },
		    "getEmptyData~map": {
		     "width": {},
		     "height": {},
		     "tileWidth": {},
		     "tileHeight": {},
		     "orientation": {},
		     "version": {},
		     "properties": {},
		     "widthInPixels": {},
		     "heightInPixels": {},
		     "layers": {},
		     "images": {},
		     "objects": {},
		     "collision": {},
		     "tilesets": {},
		     "tiles": {}
		    },
		    "getEmptyData~layer": {
		     "name": {},
		     "x": {},
		     "y": {},
		     "width": {},
		     "height": {},
		     "widthInPixels": {},
		     "heightInPixels": {},
		     "alpha": {},
		     "visible": {},
		     "properties": {},
		     "indexes": {},
		     "callbacks": {},
		     "bodies": {},
		     "data": {}
		    },
		    "parseJSON": {
		     "!type": "fn(json: ?) -> ?"
		    },
		    "parseTiledJSON": {
		     "!type": "fn()",
		     "slice": {
		      "!type": "fn()"
		     }
		    },
		    "parseTiledJSON~map": {
		     "width": {},
		     "height": {},
		     "tileWidth": {},
		     "tileHeight": {},
		     "orientation": {},
		     "format": {},
		     "version": {},
		     "properties": {},
		     "widthInPixels": {},
		     "heightInPixels": {},
		     "layers": {},
		     "images": {},
		     "tilesets": {},
		     "imagecollections": {},
		     "objects": {},
		     "collision": {},
		     "tiles": {},
		     "tiles[undefined]": {}
		    },
		    "parseTiledJSON~layer": {
		     "name": {},
		     "x": {},
		     "y": {},
		     "width": {},
		     "height": {},
		     "widthInPixels": {},
		     "heightInPixels": {},
		     "alpha": {},
		     "visible": {},
		     "properties": {},
		     "indexes": {},
		     "callbacks": {},
		     "bodies": {},
		     "data": {}
		    },
		    "parseTiledJSON~row": {
		     "undefined].rotation": {},
		     "undefined].flipped": {}
		    },
		    "parseTiledJSON~image": {
		     "name": {},
		     "image": {},
		     "x": {},
		     "y": {},
		     "alpha": {},
		     "visible": {},
		     "properties": {}
		    },
		    "parseTiledJSON~newSet": {
		     "tileProperties": {}
		    },
		    "parseTiledJSON~slice~sliced": {
		     "undefined]": {}
		    },
		    "parseTiledJSON~objects": {
		     "undefined]": {}
		    },
		    "parseTiledJSON~collision": {
		     "undefined]": {}
		    },
		    "parseTiledJSON~object": {
		     "gid": {},
		     "name": {},
		     "type": {},
		     "x": {},
		     "y": {},
		     "visible": {},
		     "properties": {},
		     "rotation": {},
		     "width": {},
		     "height": {},
		     "polyline": {},
		     "polygon": {},
		     "rectangle": {}
		    },
		    "parseTiledJSON~tile": {
		     "properties": {}
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
		     "drawCoords": {
		      "!type": "[?]"
		     },
		     "draw": {
		      "!type": "fn()"
		     },
		     "containsTileIndex": {
		      "!type": "fn()"
		     },
		     "setImage": {
		      "!type": "fn()"
		     },
		     "setSpacing": {
		      "!type": "fn()"
		     },
		     "updateTileData": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Tileset#setImage": {
		    "prototype": {
		     "image": {}
		    }
		   },
		   "Tileset#setSpacing": {
		    "prototype": {
		     "tileMargin": {},
		     "tileSpacing": {}
		    }
		   },
		   "Tileset#updateTileData": {
		    "prototype": {
		     "rows": {},
		     "columns": {},
		     "total": {}
		    }
		   },
		   "Tileset#updateTileData#drawCoords": {
		    "length": {}
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
		     "_frameCount": {
		      "!type": "number"
		     },
		     "_elapsedAccumulator": {
		      "!type": "number"
		     },
		     "_started": {
		      "!type": "number"
		     },
		     "_timeLastSecond": {
		      "!type": "number"
		     },
		     "_pauseStarted": {
		      "!type": "number"
		     },
		     "_justResumed": {
		      "!type": "bool"
		     },
		     "_timers": {
		      "!type": "[?]"
		     },
		     "boot": {
		      "!type": "fn()"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "create": {
		      "!type": "fn()"
		     },
		     "removeAll": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "updateSetTimeout": {
		      "!type": "fn()"
		     },
		     "updateRAF": {
		      "!type": "fn()"
		     },
		     "updateTimers": {
		      "!type": "fn()"
		     },
		     "updateAdvancedTiming": {
		      "!type": "fn()"
		     },
		     "gamePaused": {
		      "!type": "fn()"
		     },
		     "gameResumed": {
		      "!type": "fn()"
		     },
		     "totalElapsedSeconds": {
		      "!type": "fn()"
		     },
		     "elapsedSince": {
		      "!type": "fn()"
		     },
		     "elapsedSecondsSince": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Time#boot": {
		    "prototype": {
		     "_started": {},
		     "time": {}
		    }
		   },
		   "Time#removeAll": {
		    "prototype": {
		     "_timers": {}
		    }
		   },
		   "Time#updateSetTimeout": {
		    "prototype": {
		     "time": {},
		     "elapsedMS": {},
		     "prevTime": {},
		     "now": {},
		     "elapsed": {},
		     "timeToCall": {},
		     "timeCallExpected": {},
		     "physicsElapsed": {},
		     "physicsElapsedMS": {}
		    }
		   },
		   "Time#updateRAF": {
		    "prototype": {
		     "time": {},
		     "elapsedMS": {},
		     "prevTime": {},
		     "now": {},
		     "elapsed": {},
		     "physicsElapsed": {},
		     "physicsElapsedMS": {}
		    }
		   },
		   "Time#updateAdvancedTiming": {
		    "prototype": {
		     "_elapsedAccumulator": {},
		     "suggestedFps": {},
		     "_frameCount": {},
		     "msMin": {},
		     "msMax": {},
		     "fps": {},
		     "fpsMin": {},
		     "fpsMax": {},
		     "_timeLastSecond": {},
		     "frames": {}
		    }
		   },
		   "Time#gamePaused": {
		    "prototype": {
		     "_pauseStarted": {}
		    }
		   },
		   "Time#gameResumed": {
		    "prototype": {
		     "time": {},
		     "pauseDuration": {}
		    }
		   },
		   "Time#reset": {
		    "prototype": {
		     "_started": {}
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
		     "_codePaused": {
		      "!type": "bool"
		     },
		     "_started": {
		      "!type": "number"
		     },
		     "_pauseStarted": {
		      "!type": "number"
		     },
		     "_pauseTotal": {
		      "!type": "number"
		     },
		     "_now": {
		      "!type": "number"
		     },
		     "_len": {
		      "!type": "number"
		     },
		     "_marked": {
		      "!type": "number"
		     },
		     "_i": {
		      "!type": "number"
		     },
		     "_diff": {
		      "!type": "number"
		     },
		     "_newTick": {
		      "!type": "number"
		     },
		     "create": {
		      "!type": "fn()"
		     },
		     "add": {
		      "!type": "fn()"
		     },
		     "repeat": {
		      "!type": "fn()"
		     },
		     "loop": {
		      "!type": "fn()"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "remove": {
		      "!type": "fn()"
		     },
		     "order": {
		      "!type": "fn()"
		     },
		     "sortHandler": {
		      "!type": "fn()"
		     },
		     "clearPendingEvents": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "pause": {
		      "!type": "fn()"
		     },
		     "_pause": {
		      "!type": "fn()"
		     },
		     "adjustEvents": {
		      "!type": "fn()"
		     },
		     "resume": {
		      "!type": "fn()"
		     },
		     "_resume": {
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
		   "Timer#create": {
		    "prototype": {
		     "expired": {}
		    }
		   },
		   "Timer#start": {
		    "prototype": {
		     "_started": {},
		     "running": {}
		    }
		   },
		   "Timer#start#events[undefined]": {
		    "tick": {}
		   },
		   "Timer#stop": {
		    "prototype": {
		     "running": {}
		    }
		   },
		   "Timer#stop#events": {
		    "length": {}
		   },
		   "Timer#remove#events[undefined]": {
		    "pendingDelete": {}
		   },
		   "Timer#order": {
		    "prototype": {
		     "nextTick": {}
		    }
		   },
		   "Timer#clearPendingEvents": {
		    "prototype": {
		     "_i": {},
		     "_len": {}
		    }
		   },
		   "Timer#update": {
		    "prototype": {
		     "elapsed": {},
		     "_now": {},
		     "_marked": {},
		     "_newTick": {},
		     "expired": {}
		    }
		   },
		   "Timer#update#events[undefined]": {
		    "tick": {},
		    "pendingDelete": {}
		   },
		   "Timer#pause": {
		    "prototype": {
		     "_codePaused": {},
		     "_pauseStarted": {},
		     "paused": {}
		    }
		   },
		   "Timer#_pause": {
		    "prototype": {
		     "_pauseStarted": {},
		     "paused": {}
		    }
		   },
		   "Timer#adjustEvents#events[undefined]": {
		    "tick": {}
		   },
		   "Timer#adjustEvents": {
		    "prototype": {
		     "nextTick": {}
		    }
		   },
		   "Timer#resume": {
		    "prototype": {
		     "_pauseTotal": {},
		     "_now": {},
		     "paused": {},
		     "_codePaused": {}
		    }
		   },
		   "Timer#removeAll#events": {
		    "length": {}
		   },
		   "Timer#removeAll": {
		    "prototype": {
		     "_len": {},
		     "_i": {}
		    }
		   },
		   "Timer#destroy": {
		    "prototype": {
		     "running": {},
		     "events": {},
		     "_len": {},
		     "_i": {}
		    }
		   },
		   "TimerEvent": {
		    "!type": "fn(timer: +Phaser.Timer, delay: number, tick: number, repeatCount: number, loop: bool, callback: +function, callbackContext: ?, arguments: [?])",
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
		      "!type": "+function"
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
		       "!type": "fn(k: number) -> ?"
		      }
		     },
		     "None": {
		      "!type": "fn()"
		     }
		    },
		    "Quadratic": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> ?"
		      }
		     },
		     "In": {
		      "!type": "fn()"
		     },
		     "Out": {
		      "!type": "fn()"
		     },
		     "InOut": {
		      "!type": "fn()"
		     }
		    },
		    "Cubic": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> ?"
		      }
		     },
		     "In": {
		      "!type": "fn()"
		     },
		     "Out": {
		      "!type": "fn()"
		     },
		     "InOut": {
		      "!type": "fn()"
		     }
		    },
		    "Quartic": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> ?"
		      }
		     },
		     "In": {
		      "!type": "fn()"
		     },
		     "Out": {
		      "!type": "fn()"
		     },
		     "InOut": {
		      "!type": "fn()"
		     }
		    },
		    "Quintic": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> ?"
		      }
		     },
		     "In": {
		      "!type": "fn()"
		     },
		     "Out": {
		      "!type": "fn()"
		     },
		     "InOut": {
		      "!type": "fn()"
		     }
		    },
		    "Sinusoidal": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> ?"
		      }
		     },
		     "In": {
		      "!type": "fn()"
		     },
		     "Out": {
		      "!type": "fn()"
		     },
		     "InOut": {
		      "!type": "fn()"
		     }
		    },
		    "Exponential": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> ?"
		      }
		     },
		     "In": {
		      "!type": "fn()"
		     },
		     "Out": {
		      "!type": "fn()"
		     },
		     "InOut": {
		      "!type": "fn()"
		     }
		    },
		    "Circular": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> ?"
		      }
		     },
		     "In": {
		      "!type": "fn()"
		     },
		     "Out": {
		      "!type": "fn()"
		     },
		     "InOut": {
		      "!type": "fn()"
		     }
		    },
		    "Elastic": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> ?"
		      }
		     },
		     "In": {
		      "!type": "fn()"
		     },
		     "Out": {
		      "!type": "fn()"
		     },
		     "InOut": {
		      "!type": "fn()"
		     }
		    },
		    "Back": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> ?"
		      }
		     },
		     "In": {
		      "!type": "fn()"
		     },
		     "Out": {
		      "!type": "fn()"
		     },
		     "InOut": {
		      "!type": "fn()"
		     }
		    },
		    "Bounce": {
		     "!type": "fn()",
		     "prototype": {
		      "In": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "Out": {
		       "!type": "fn(k: number) -> ?"
		      },
		      "InOut": {
		       "!type": "fn(k: number) -> ?"
		      }
		     },
		     "In": {
		      "!type": "fn()"
		     },
		     "Out": {
		      "!type": "fn()"
		     },
		     "InOut": {
		      "!type": "fn()"
		     }
		    },
		    "Default": {},
		    "Power0": {},
		    "Power1": {},
		    "Power2": {},
		    "Power3": {},
		    "Power4": {}
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
		     "_onUpdateCallback": {
		      "!type": "+function"
		     },
		     "_onUpdateCallbackContext": {},
		     "_pausedTime": {
		      "!type": "number"
		     },
		     "_codePaused": {
		      "!type": "bool"
		     },
		     "_hasStarted": {
		      "!type": "bool"
		     },
		     "to": {
		      "!type": "fn()"
		     },
		     "from": {
		      "!type": "fn()"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "stop": {
		      "!type": "fn()"
		     },
		     "updateTweenData": {
		      "!type": "fn()"
		     },
		     "delay": {
		      "!type": "fn()"
		     },
		     "repeat": {
		      "!type": "fn(total: number) -> ?"
		     },
		     "repeatDelay": {
		      "!type": "fn()"
		     },
		     "yoyo": {
		      "!type": "fn()"
		     },
		     "yoyoDelay": {
		      "!type": "fn()"
		     },
		     "easing": {
		      "!type": "fn()"
		     },
		     "interpolation": {
		      "!type": "fn()"
		     },
		     "repeatAll": {
		      "!type": "fn()"
		     },
		     "chain": {
		      "!type": "fn()"
		     },
		     "loop": {
		      "!type": "fn()"
		     },
		     "onUpdateCallback": {
		      "!type": "fn()"
		     },
		     "pause": {
		      "!type": "fn()"
		     },
		     "_pause": {
		      "!type": "fn()"
		     },
		     "resume": {
		      "!type": "fn()"
		     },
		     "_resume": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "generateData": {
		      "!type": "fn()"
		     },
		     "totalDuration": {
		      "!type": "+Phaser.TweenData"
		     }
		    }
		   },
		   "Tween#start": {
		    "prototype": {
		     "properties[undefined]": {},
		     "isRunning": {},
		     "current": {}
		    }
		   },
		   "Tween#stop": {
		    "prototype": {
		     "isRunning": {},
		     "_onUpdateCallback": {},
		     "_onUpdateCallbackContext": {}
		    }
		   },
		   "Tween#updateTweenData": {
		    "prototype": {
		     "timeline[undefined][undefined]": {}
		    }
		   },
		   "Tween#repeatAll": {
		    "prototype": {
		     "repeatCounter": {}
		    }
		   },
		   "Tween#chain": {
		    "prototype": {
		     "chainedTween": {}
		    }
		   },
		   "Tween#loop": {
		    "prototype": {
		     "repeatCounter": {}
		    }
		   },
		   "Tween#onUpdateCallback": {
		    "prototype": {
		     "_onUpdateCallback": {},
		     "_onUpdateCallbackContext": {}
		    }
		   },
		   "Tween#pause": {
		    "prototype": {
		     "isPaused": {},
		     "_codePaused": {},
		     "_pausedTime": {}
		    }
		   },
		   "Tween#_pause": {
		    "prototype": {
		     "isPaused": {},
		     "_pausedTime": {}
		    }
		   },
		   "Tween#resume": {
		    "prototype": {
		     "isPaused": {},
		     "_codePaused": {}
		    }
		   },
		   "Tween#resume#timeline[undefined]": {
		    "startTime": {}
		   },
		   "Tween#update": {
		    "prototype": {
		     "_hasStarted": {},
		     "current": {},
		     "isRunning": {}
		    }
		   },
		   "Tween#generateData": {
		    "prototype": {
		     "properties[undefined]": {}
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
		     "vStart": {},
		     "vStartCache": {},
		     "vEnd": {},
		     "vEndCache": {},
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
		      "!type": "+function"
		     },
		     "interpolationFunction": {
		      "!type": "+function"
		     },
		     "interpolationContext": {},
		     "isRunning": {
		      "!type": "bool"
		     },
		     "isFrom": {
		      "!type": "bool"
		     },
		     "to": {
		      "!type": "fn()"
		     },
		     "from": {
		      "!type": "fn()"
		     },
		     "start": {
		      "!type": "fn()"
		     },
		     "loadValues": {
		      "!type": "fn()"
		     },
		     "update": {
		      "!type": "fn()"
		     },
		     "generateData": {
		      "!type": "fn()"
		     },
		     "repeat": {
		      "!type": "fn()"
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
		   "TweenData#to": {
		    "prototype": {
		     "vEnd": {},
		     "duration": {},
		     "easingFunction": {},
		     "delay": {},
		     "repeatCounter": {},
		     "yoyo": {},
		     "isFrom": {}
		    }
		   },
		   "TweenData#from": {
		    "prototype": {
		     "vEnd": {},
		     "duration": {},
		     "easingFunction": {},
		     "delay": {},
		     "repeatCounter": {},
		     "yoyo": {},
		     "isFrom": {}
		    }
		   },
		   "TweenData#start": {
		    "prototype": {
		     "startTime": {},
		     "dt": {},
		     "isRunning": {},
		     "vStart[undefined]": {},
		     "vEnd[undefined]": {},
		     "value": {},
		     "yoyoCounter": {}
		    }
		   },
		   "TweenData#start#parent": {
		    "target[undefined]": {}
		   },
		   "TweenData#loadValues": {
		    "prototype": {
		     "vStart[undefined]": {},
		     "vEnd[undefined]": {},
		     "vStartCache[undefined]": {},
		     "vEndCache[undefined]": {}
		    }
		   },
		   "TweenData#loadValues#parent": {
		    "properties[undefined]": {}
		   },
		   "TweenData#update": {
		    "prototype": {
		     "isRunning": {},
		     "dt": {},
		     "percent": {},
		     "value": {}
		    }
		   },
		   "TweenData#update#parent": {
		    "target[undefined]": {}
		   },
		   "TweenData#generateData": {
		    "prototype": {
		     "dt": {},
		     "percent": {},
		     "value": {}
		    }
		   },
		   "TweenData#generateData~blob": {
		    "undefined]": {}
		   },
		   "TweenData#repeat": {
		    "prototype": {
		     "inReverse": {},
		     "vStart[undefined]": {},
		     "vEnd[undefined]": {},
		     "startTime": {},
		     "dt": {}
		    }
		   },
		   "TweenManager#easeMap": {
		    "Power0": {},
		    "Power1": {},
		    "Power2": {},
		    "Power3": {},
		    "Power4": {},
		    "Linear": {},
		    "Quad": {},
		    "Cubic": {},
		    "Quart": {},
		    "Quint": {},
		    "Sine": {},
		    "Expo": {},
		    "Circ": {},
		    "Elastic": {},
		    "Back": {},
		    "Bounce": {},
		    "\"Quad.easeIn\"": {},
		    "\"Cubic.easeIn\"": {},
		    "\"Quart.easeIn\"": {},
		    "\"Quint.easeIn\"": {},
		    "\"Sine.easeIn\"": {},
		    "\"Expo.easeIn\"": {},
		    "\"Circ.easeIn\"": {},
		    "\"Elastic.easeIn\"": {},
		    "\"Back.easeIn\"": {},
		    "\"Bounce.easeIn\"": {},
		    "\"Quad.easeOut\"": {},
		    "\"Cubic.easeOut\"": {},
		    "\"Quart.easeOut\"": {},
		    "\"Quint.easeOut\"": {},
		    "\"Sine.easeOut\"": {},
		    "\"Expo.easeOut\"": {},
		    "\"Circ.easeOut\"": {},
		    "\"Elastic.easeOut\"": {},
		    "\"Back.easeOut\"": {},
		    "\"Bounce.easeOut\"": {},
		    "\"Quad.easeInOut\"": {},
		    "\"Cubic.easeInOut\"": {},
		    "\"Quart.easeInOut\"": {},
		    "\"Quint.easeInOut\"": {},
		    "\"Sine.easeInOut\"": {},
		    "\"Expo.easeInOut\"": {},
		    "\"Circ.easeInOut\"": {},
		    "\"Elastic.easeInOut\"": {},
		    "\"Back.easeInOut\"": {},
		    "\"Bounce.easeInOut\"": {}
		   },
		   "TweenManager#removeAll#_tweens[undefined]": {
		    "pendingDelete": {}
		   },
		   "TweenManager#removeAll": {
		    "prototype": {
		     "_add": {}
		    }
		   },
		   "TweenManager#remove#_tweens[undefined]": {
		    "pendingDelete": {}
		   },
		   "TweenManager#remove#_add[undefined]": {
		    "pendingDelete": {}
		   },
		   "TweenManager#update": {
		    "prototype": {
		     "_tweens": {}
		    }
		   },
		   "TweenManager#update#_add": {
		    "length": {}
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
		      "!type": "fn()"
		     },
		     "getIndex": {
		      "!type": "fn()"
		     },
		     "getByKey": {
		      "!type": "fn()"
		     },
		     "exists": {
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "remove": {
		      "!type": "fn()"
		     },
		     "setAll": {
		      "!type": "fn()"
		     },
		     "callAll": {
		      "!type": "fn()"
		     },
		     "removeAll": {
		      "!type": "fn()"
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
		   "ArraySet#reset#list": {
		    "length": {}
		   },
		   "ArraySet#setAll": {
		    "prototype": {
		     "list[undefined][undefined]": {}
		    }
		   },
		   "ArraySet#removeAll": {
		    "prototype": {
		     "position": {},
		     "list": {}
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
		     "!type": "fn(array: [?]) -> ?"
		    },
		    "transposeMatrix": {
		     "!type": "fn(array: [?]) -> ?"
		    },
		    "transposeMatrix~result": {
		     "undefined]": {},
		     "undefined][undefined]": {}
		    },
		    "rotateMatrix": {
		     "!type": "fn(matrix: [?], direction: number|string) -> ?"
		    },
		    "findClosest": {
		     "!type": "fn(value: number, arr: [?]) -> ?"
		    },
		    "rotate": {
		     "!type": "fn()"
		    },
		    "prototype": {
		     "numberArray": {
		      "!type": "fn(start: number, end: number) -> ?"
		     },
		     "numberArrayStep": {
		      "!type": "fn(start: number, end: number, step: number) -> ?"
		     }
		    },
		    "numberArray": {
		     "!type": "fn()"
		    },
		    "numberArrayStep": {
		     "!type": "fn()"
		    }
		   },
		   "Color": {
		    "!type": "fn()",
		    "packPixel": {
		     "!type": "fn()"
		    },
		    "unpackPixel": {
		     "!type": "fn()"
		    },
		    "unpackPixel~out": {
		     "a": {},
		     "b": {},
		     "g": {},
		     "r": {},
		     "color": {},
		     "rgba": {}
		    },
		    "fromRGBA": {
		     "!type": "fn()"
		    },
		    "fromRGBA~out": {
		     "r": {},
		     "g": {},
		     "b": {},
		     "a": {},
		     "rgba": {}
		    },
		    "toRGBA": {
		     "!type": "fn()"
		    },
		    "RGBtoHSL": {
		     "!type": "fn()"
		    },
		    "RGBtoHSL~out": {
		     "h": {},
		     "s": {},
		     "l": {}
		    },
		    "HSLtoRGB": {
		     "!type": "fn()"
		    },
		    "HSLtoRGB~out": {
		     "r": {},
		     "g": {},
		     "b": {}
		    },
		    "RGBtoHSV": {
		     "!type": "fn()"
		    },
		    "RGBtoHSV~out": {
		     "h": {},
		     "s": {},
		     "v": {}
		    },
		    "HSVtoRGB": {
		     "!type": "fn()"
		    },
		    "HSVtoRGB~out": {
		     "r": {},
		     "g": {},
		     "b": {}
		    },
		    "hueToColor": {
		     "!type": "fn()"
		    },
		    "createColor": {
		     "!type": "fn()"
		    },
		    "createColor~out": {
		     "r": {},
		     "g": {},
		     "b": {},
		     "a": {},
		     "h": {},
		     "s": {},
		     "l": {},
		     "v": {},
		     "color": {},
		     "color32": {},
		     "rgba": {}
		    },
		    "updateColor": {
		     "!type": "fn()"
		    },
		    "getColor32": {
		     "!type": "fn()"
		    },
		    "getColor": {
		     "!type": "fn()"
		    },
		    "RGBtoString": {
		     "!type": "fn()"
		    },
		    "hexToRGB": {
		     "!type": "fn()"
		    },
		    "hexToColor": {
		     "!type": "fn()"
		    },
		    "hexToColor~out": {
		     "r": {},
		     "g": {},
		     "b": {}
		    },
		    "webToColor": {
		     "!type": "fn()"
		    },
		    "webToColor~out": {
		     "r": {},
		     "g": {},
		     "b": {},
		     "a": {}
		    },
		    "valueToColor": {
		     "!type": "fn()"
		    },
		    "valueToColor~out": {
		     "a": {},
		     "r": {},
		     "g": {},
		     "b": {}
		    },
		    "componentToHex": {
		     "!type": "fn()"
		    },
		    "HSVColorWheel": {
		     "!type": "fn()"
		    },
		    "HSLColorWheel": {
		     "!type": "fn()"
		    },
		    "interpolateColor": {
		     "!type": "fn()"
		    },
		    "interpolateColorWithRGB": {
		     "!type": "fn()"
		    },
		    "interpolateRGB": {
		     "!type": "fn()"
		    },
		    "getRandomColor": {
		     "!type": "fn()"
		    },
		    "getRGB": {
		     "!type": "fn()"
		    },
		    "getWebRGB": {
		     "!type": "fn()"
		    },
		    "getAlpha": {
		     "!type": "fn()"
		    },
		    "getAlphaFloat": {
		     "!type": "fn()"
		    },
		    "getRed": {
		     "!type": "fn()"
		    },
		    "getGreen": {
		     "!type": "fn()"
		    },
		    "getBlue": {
		     "!type": "fn()"
		    },
		    "blendNormal": {
		     "!type": "fn()"
		    },
		    "blendLighten": {
		     "!type": "fn()"
		    },
		    "blendDarken": {
		     "!type": "fn()"
		    },
		    "blendMultiply": {
		     "!type": "fn()"
		    },
		    "blendAverage": {
		     "!type": "fn()"
		    },
		    "blendAdd": {
		     "!type": "fn()"
		    },
		    "blendSubtract": {
		     "!type": "fn()"
		    },
		    "blendDifference": {
		     "!type": "fn()"
		    },
		    "blendNegation": {
		     "!type": "fn()"
		    },
		    "blendScreen": {
		     "!type": "fn()"
		    },
		    "blendExclusion": {
		     "!type": "fn()"
		    },
		    "blendOverlay": {
		     "!type": "fn()"
		    },
		    "blendSoftLight": {
		     "!type": "fn()"
		    },
		    "blendHardLight": {
		     "!type": "fn()"
		    },
		    "blendColorDodge": {
		     "!type": "fn()"
		    },
		    "blendColorBurn": {
		     "!type": "fn()"
		    },
		    "blendLinearDodge": {
		     "!type": "fn()"
		    },
		    "blendLinearBurn": {
		     "!type": "fn()"
		    },
		    "blendLinearLight": {
		     "!type": "fn()"
		    },
		    "blendVividLight": {
		     "!type": "fn()"
		    },
		    "blendPinLight": {
		     "!type": "fn()"
		    },
		    "blendHardMix": {
		     "!type": "fn()"
		    },
		    "blendReflect": {
		     "!type": "fn()"
		    },
		    "blendGlow": {
		     "!type": "fn()"
		    },
		    "blendPhoenix": {
		     "!type": "fn()"
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
		      "!type": "fn()"
		     },
		     "reset": {
		      "!type": "fn()"
		     },
		     "remove": {
		      "!type": "fn()"
		     },
		     "callAll": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "LinkedList#add": {
		    "prototype": {
		     "first": {},
		     "last": {},
		     "next": {}
		    }
		   },
		   "LinkedList#add#last": {
		    "next": {}
		   },
		   "LinkedList#reset": {
		    "prototype": {
		     "first": {},
		     "last": {},
		     "next": {},
		     "prev": {},
		     "total": {}
		    }
		   },
		   "LinkedList#remove": {
		    "prototype": {
		     "first": {},
		     "last": {}
		    }
		   }
		  },
		  "!type": "fn()",
		  "currentAnim": {
		   "paused": {}
		  },
		  "dualQuat": {
		   "prototype": {
		    "reset": {
		     "!type": "fn()"
		    },
		    "createFromData": {
		     "!type": "fn()"
		    },
		    "add": {
		     "!type": "fn()"
		    },
		    "normalize": {
		     "!type": "fn()"
		    },
		    "transform": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "dualQuat#reset": {
		   "prototype": {
		    "real[undefined]": {},
		    "imaginary[undefined]": {}
		   }
		  },
		  "dualQuat#createFromData": {
		   "prototype": {
		    "real": {},
		    "imaginary": {},
		    "imaginary[undefined]": {}
		   }
		  },
		  "dualQuat#normalize": {
		   "prototype": {
		    "real": {},
		    "imaginary": {}
		   }
		  },
		  "Utils": {
		   "setAxisMatrix": {
		    "!type": "fn()"
		   },
		   "setAxisMatrix~retMat": {
		    "undefined]": {}
		   },
		   "matrixToQuat": {
		    "!type": "fn()"
		   },
		   "matrixToQuat~retQuat": {
		    "undefined]": {}
		   },
		   "rotateVec_90": {
		    "!type": "fn()"
		   },
		   "calcRotateMat": {
		    "!type": "fn()"
		   },
		   "getMatTranslate": {
		    "!type": "fn()"
		   },
		   "getMatTranslate~ret_pos": {
		    "undefined]": {}
		   },
		   "addMat": {
		    "!type": "fn()"
		   },
		   "addMat~retMat": {
		    "undefined]": {}
		   },
		   "mulMat": {
		    "!type": "fn()"
		   },
		   "mulMat~retMat": {
		    "undefined]": {}
		   },
		   "clamp": {
		    "!type": "fn()"
		   },
		   "vecInterp": {
		    "!type": "fn()"
		   },
		   "vec2Interp": {
		    "!type": "fn()"
		   }
		  },
		  "MeshBone": {
		   "prototype": {
		    "setRestParentMat": {
		     "!type": "fn()"
		    },
		    "setParentWorldMat": {
		     "!type": "fn()"
		    },
		    "setParentWorldInvMat": {
		     "!type": "fn()"
		    },
		    "getLocalRestStartPt": {
		     "!type": "fn()"
		    },
		    "getLocalRestEndPt": {
		     "!type": "fn()"
		    },
		    "setLocalRestStartPt": {
		     "!type": "fn()"
		    },
		    "setLocalRestEndPt": {
		     "!type": "fn()"
		    },
		    "calcRestData": {
		     "!type": "fn()"
		    },
		    "setWorldStartPt": {
		     "!type": "fn()"
		    },
		    "setWorldEndPt": {
		     "!type": "fn()"
		    },
		    "fixDQs": {
		     "!type": "fn()"
		    },
		    "initWorldPts": {
		     "!type": "fn()"
		    },
		    "getWorldRestStartPt": {
		     "!type": "fn()"
		    },
		    "getWorldRestEndPt": {
		     "!type": "fn()"
		    },
		    "getWorldRestAngle": {
		     "!type": "fn()"
		    },
		    "getWorldRestPos": {
		     "!type": "fn()"
		    },
		    "getWorldStartPt": {
		     "!type": "fn()"
		    },
		    "getWorldEndPt": {
		     "!type": "fn()"
		    },
		    "getRestParentMat": {
		     "!type": "fn()"
		    },
		    "getRestWorldMat": {
		     "!type": "fn()"
		    },
		    "getWorldDeltaMat": {
		     "!type": "fn()"
		    },
		    "getParentWorldMat": {
		     "!type": "fn()"
		    },
		    "getParentWorldInvMat": {
		     "!type": "fn()"
		    },
		    "getWorldDq": {
		     "!type": "fn()"
		    },
		    "computeRestParentTransforms": {
		     "!type": "fn()"
		    },
		    "computeParentTransforms": {
		     "!type": "fn()"
		    },
		    "computeWorldDeltaTransforms": {
		     "!type": "fn()"
		    },
		    "addChild": {
		     "!type": "fn()"
		    },
		    "getChildren": {
		     "!type": "fn()"
		    },
		    "hasBone": {
		     "!type": "fn()"
		    },
		    "getChildByKey": {
		     "!type": "fn()"
		    },
		    "getKey": {
		     "!type": "fn()"
		    },
		    "getAllBoneKeys": {
		     "!type": "fn()"
		    },
		    "getAllChildren": {
		     "!type": "fn()"
		    },
		    "getBoneDepth": {
		     "!type": "fn()"
		    },
		    "isLeaf": {
		     "!type": "fn()"
		    },
		    "deleteChildren": {
		     "!type": "fn()"
		    },
		    "setTagId": {
		     "!type": "fn()"
		    },
		    "getTagId": {
		     "!type": "fn()"
		    },
		    "computeDirs": {
		     "!type": "fn()"
		    },
		    "computeRestLength": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "MeshBone#setRestParentMat": {
		   "prototype": {
		    "rest_parent_mat": {},
		    "rest_parent_inv_mat": {}
		   }
		  },
		  "MeshBone#setParentWorldMat": {
		   "prototype": {
		    "parent_world_mat": {}
		   }
		  },
		  "MeshBone#setParentWorldInvMat": {
		   "prototype": {
		    "parent_world_inv_mat": {}
		   }
		  },
		  "MeshBone#setLocalRestStartPt": {
		   "prototype": {
		    "local_rest_start_pt": {}
		   }
		  },
		  "MeshBone#setLocalRestEndPt": {
		   "prototype": {
		    "local_rest_end_pt": {}
		   }
		  },
		  "MeshBone#calcRestData": {
		   "prototype": {
		    "local_rest_dir": {},
		    "local_rest_normal_dir": {}
		   }
		  },
		  "MeshBone#setWorldStartPt": {
		   "prototype": {
		    "world_start_pt": {}
		   }
		  },
		  "MeshBone#setWorldEndPt": {
		   "prototype": {
		    "world_end_pt": {}
		   }
		  },
		  "MeshBone#fixDQs#world_dq": {
		   "real": {},
		   "imaginary": {}
		  },
		  "MeshBone#computeRestParentTransforms": {
		   "prototype": {
		    "rest_world_mat": {},
		    "rest_world_inv_mat": {},
		    "world_rest_pos": {},
		    "bind_world_mat": {},
		    "bind_world_inv_mat": {}
		   }
		  },
		  "MeshBone#computeWorldDeltaTransforms": {
		   "prototype": {
		    "world_delta_mat": {},
		    "world_dq": {}
		   }
		  },
		  "MeshBone#deleteChildren": {
		   "prototype": {
		    "children": {}
		   }
		  },
		  "MeshBone#setTagId": {
		   "prototype": {
		    "tag_id": {}
		   }
		  },
		  "MeshBone#computeDirs~retData": {
		   "\"first\"]": {},
		   "\"second\"]": {}
		  },
		  "MeshBone#computeRestLength": {
		   "prototype": {
		    "rest_length": {}
		   }
		  },
		  "MeshRenderRegion": {
		   "prototype": {
		    "getIndicesIndex": {
		     "!type": "fn()"
		    },
		    "getRestPtsIndex": {
		     "!type": "fn()"
		    },
		    "getUVsIndex": {
		     "!type": "fn()"
		    },
		    "getNumPts": {
		     "!type": "fn()"
		    },
		    "getStartPtIndex": {
		     "!type": "fn()"
		    },
		    "getEndPtIndex": {
		     "!type": "fn()"
		    },
		    "getNumIndices": {
		     "!type": "fn()"
		    },
		    "getStartIndex": {
		     "!type": "fn()"
		    },
		    "getEndIndex": {
		     "!type": "fn()"
		    },
		    "poseFinalPts": {
		     "!type": "fn()"
		    },
		    "setMainBoneKey": {
		     "!type": "fn()"
		    },
		    "determineMainBone": {
		     "!type": "fn()"
		    },
		    "setUseDq": {
		     "!type": "fn()"
		    },
		    "setName": {
		     "!type": "fn()"
		    },
		    "getName": {
		     "!type": "fn()"
		    },
		    "setUseLocalDisplacements": {
		     "!type": "fn()"
		    },
		    "getUseLocalDisplacements": {
		     "!type": "fn()"
		    },
		    "setUsePostDisplacements": {
		     "!type": "fn()"
		    },
		    "getUsePostDisplacements": {
		     "!type": "fn()"
		    },
		    "getRestLocalPt": {
		     "!type": "fn()"
		    },
		    "getLocalIndex": {
		     "!type": "fn()"
		    },
		    "clearLocalDisplacements": {
		     "!type": "fn()"
		    },
		    "clearPostDisplacements": {
		     "!type": "fn()"
		    },
		    "setUseUvWarp": {
		     "!type": "fn()"
		    },
		    "getUseUvWarp": {
		     "!type": "fn()"
		    },
		    "setUvWarpLocalOffset": {
		     "!type": "fn()"
		    },
		    "setUvWarpGlobalOffset": {
		     "!type": "fn()"
		    },
		    "setUvWarpScale": {
		     "!type": "fn()"
		    },
		    "getUvWarpLocalOffset": {
		     "!type": "fn()"
		    },
		    "getUvWarpGlobalOffset": {
		     "!type": "fn()"
		    },
		    "getUvWarpScale": {
		     "!type": "fn()"
		    },
		    "runUvWarp": {
		     "!type": "fn()"
		    },
		    "restoreRefUv": {
		     "!type": "fn()"
		    },
		    "getTagId": {
		     "!type": "fn()"
		    },
		    "setTagId": {
		     "!type": "fn()"
		    },
		    "initFastNormalWeightMap": {
		     "!type": "fn()"
		    },
		    "initUvWarp": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "MeshRenderRegion#poseFinalPts~cur_rest_pt": {
		   "undefined]": {}
		  },
		  "MeshRenderRegion#setMainBoneKey": {
		   "prototype": {
		    "main_bone_key": {}
		   }
		  },
		  "MeshRenderRegion#determineMainBone": {
		   "prototype": {
		    "main_bone": {}
		   }
		  },
		  "MeshRenderRegion#setUseDq": {
		   "prototype": {
		    "use_dq": {}
		   }
		  },
		  "MeshRenderRegion#setName": {
		   "prototype": {
		    "name": {}
		   }
		  },
		  "MeshRenderRegion#setUseLocalDisplacements": {
		   "prototype": {
		    "use_local_displacements": {},
		    "local_displacements": {}
		   }
		  },
		  "MeshRenderRegion#setUsePostDisplacements": {
		   "prototype": {
		    "use_post_displacements": {},
		    "post_displacements": {}
		   }
		  },
		  "MeshRenderRegion#clearLocalDisplacements": {
		   "prototype": {
		    "local_displacements[undefined]": {}
		   }
		  },
		  "MeshRenderRegion#clearPostDisplacements": {
		   "prototype": {
		    "post_displacements[undefined]": {}
		   }
		  },
		  "MeshRenderRegion#setUseUvWarp": {
		   "prototype": {
		    "use_uv_warp": {}
		   }
		  },
		  "MeshRenderRegion#setUvWarpLocalOffset": {
		   "prototype": {
		    "uv_warp_local_offset": {}
		   }
		  },
		  "MeshRenderRegion#setUvWarpGlobalOffset": {
		   "prototype": {
		    "uv_warp_global_offset": {}
		   }
		  },
		  "MeshRenderRegion#setUvWarpScale": {
		   "prototype": {
		    "uv_warp_scale": {}
		   }
		  },
		  "MeshRenderRegion#runUvWarp~set_uv": {
		   "undefined]": {}
		  },
		  "MeshRenderRegion#runUvWarp": {
		   "prototype": {
		    "store_uvs[undefined]": {}
		   }
		  },
		  "MeshRenderRegion#restoreRefUv": {
		   "prototype": {
		    "store_uvs[undefined]": {}
		   }
		  },
		  "MeshRenderRegion#setTagId": {
		   "prototype": {
		    "tag_id": {}
		   }
		  },
		  "MeshRenderRegion#initFastNormalWeightMap": {
		   "prototype": {
		    "relevant_bones_indices": {}
		   }
		  },
		  "MeshRenderRegion#initUvWarp": {
		   "prototype": {
		    "uv_warp_ref_uvs": {},
		    "uv_warp_ref_uvs[undefined]": {}
		   }
		  },
		  "MeshRenderBoneComposition": {
		   "prototype": {
		    "addRegion": {
		     "!type": "fn()"
		    },
		    "setRootBone": {
		     "!type": "fn()"
		    },
		    "getRootBone": {
		     "!type": "fn()"
		    },
		    "initBoneMap": {
		     "!type": "fn()"
		    },
		    "initRegionsMap": {
		     "!type": "fn()"
		    },
		    "getBonesMap": {
		     "!type": "fn()"
		    },
		    "getRegionsMap": {
		     "!type": "fn()"
		    },
		    "getRegions": {
		     "!type": "fn()"
		    },
		    "getRegionWithId": {
		     "!type": "fn()"
		    },
		    "resetToWorldRestPts": {
		     "!type": "fn()"
		    },
		    "updateAllTransforms": {
		     "!type": "fn()"
		    }
		   },
		   "genBoneMap": {
		    "!type": "fn()"
		   },
		   "genBoneMap~ret_map": {
		    "undefined]": {}
		   }
		  },
		  "MeshRenderBoneComposition#setRootBone": {
		   "prototype": {
		    "root_bone": {}
		   }
		  },
		  "MeshRenderBoneComposition#initBoneMap": {
		   "prototype": {
		    "bones_map": {}
		   }
		  },
		  "MeshRenderBoneComposition#initRegionsMap": {
		   "prototype": {
		    "regions_map": {},
		    "regions_map[undefined]": {}
		   }
		  },
		  "MeshBoneCache": {
		   "prototype": {
		    "setWorldStartPt": {
		     "!type": "fn()"
		    },
		    "setWorldEndPt": {
		     "!type": "fn()"
		    },
		    "getWorldStartPt": {
		     "!type": "fn()"
		    },
		    "getWorldEndPt": {
		     "!type": "fn()"
		    },
		    "getKey": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "MeshBoneCache#setWorldStartPt": {
		   "prototype": {
		    "world_start_pt": {}
		   }
		  },
		  "MeshBoneCache#setWorldEndPt": {
		   "prototype": {
		    "world_end_pt": {}
		   }
		  },
		  "MeshDisplacementCache": {
		   "prototype": {
		    "setLocalDisplacements": {
		     "!type": "fn()"
		    },
		    "setPostDisplacements": {
		     "!type": "fn()"
		    },
		    "getKey": {
		     "!type": "fn()"
		    },
		    "getLocalDisplacements": {
		     "!type": "fn()"
		    },
		    "getPostDisplacements": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "MeshDisplacementCache#setLocalDisplacements": {
		   "prototype": {
		    "local_displacements": {}
		   }
		  },
		  "MeshDisplacementCache#setPostDisplacements": {
		   "prototype": {
		    "post_displacements": {}
		   }
		  },
		  "MeshUVWarpCache": {
		   "prototype": {
		    "setUvWarpLocalOffset": {
		     "!type": "fn()"
		    },
		    "setUvWarpGlobalOffset": {
		     "!type": "fn()"
		    },
		    "setUvWarpScale": {
		     "!type": "fn()"
		    },
		    "getUvWarpLocalOffset": {
		     "!type": "fn()"
		    },
		    "getUvWarpGlobalOffset": {
		     "!type": "fn()"
		    },
		    "getUvWarpScale": {
		     "!type": "fn()"
		    },
		    "getKey": {
		     "!type": "fn()"
		    },
		    "setEnabled": {
		     "!type": "fn()"
		    },
		    "getEnabled": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "MeshUVWarpCache#setUvWarpLocalOffset": {
		   "prototype": {
		    "uv_warp_local_offset": {}
		   }
		  },
		  "MeshUVWarpCache#setUvWarpGlobalOffset": {
		   "prototype": {
		    "uv_warp_global_offset": {}
		   }
		  },
		  "MeshUVWarpCache#setUvWarpScale": {
		   "prototype": {
		    "uv_warp_scale": {}
		   }
		  },
		  "MeshUVWarpCache#setEnabled": {
		   "prototype": {
		    "enabled": {}
		   }
		  },
		  "MeshBoneCacheManager": {
		   "prototype": {
		    "init": {
		     "!type": "fn()"
		    },
		    "getStartTime": {
		     "!type": "fn()"
		    },
		    "getEndime": {
		     "!type": "fn()"
		    },
		    "getIndexByTime": {
		     "!type": "fn()"
		    },
		    "retrieveValuesAtTime": {
		     "!type": "fn()"
		    },
		    "allReady": {
		     "!type": "fn()"
		    },
		    "makeAllReady": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "MeshBoneCacheManager#init": {
		   "prototype": {
		    "start_time": {},
		    "end_time": {},
		    "bone_cache_table": {},
		    "bone_cache_data_ready": {},
		    "is_ready": {}
		   }
		  },
		  "MeshBoneCacheManager#allReady": {
		   "prototype": {
		    "is_ready": {}
		   }
		  },
		  "MeshBoneCacheManager#makeAllReady": {
		   "prototype": {
		    "bone_cache_data_ready[undefined]": {}
		   }
		  },
		  "MeshDisplacementCacheManager": {
		   "prototype": {
		    "init": {
		     "!type": "fn()"
		    },
		    "getStartTime": {
		     "!type": "fn()"
		    },
		    "getEndime": {
		     "!type": "fn()"
		    },
		    "getIndexByTime": {
		     "!type": "fn()"
		    },
		    "retrieveValuesAtTime": {
		     "!type": "fn()"
		    },
		    "allReady": {
		     "!type": "fn()"
		    },
		    "makeAllReady": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "MeshDisplacementCacheManager#init": {
		   "prototype": {
		    "start_time": {},
		    "end_time": {},
		    "displacement_cache_table": {},
		    "displacement_cache_data_ready": {},
		    "is_ready": {}
		   }
		  },
		  "MeshDisplacementCacheManager#retrieveValuesAtTime~displacements": {
		   "undefined]": {},
		   "set[undefined]": {}
		  },
		  "MeshDisplacementCacheManager#allReady": {
		   "prototype": {
		    "is_ready": {}
		   }
		  },
		  "MeshDisplacementCacheManager#makeAllReady": {
		   "prototype": {
		    "displacement_cache_data_ready[undefined]": {}
		   }
		  },
		  "MeshUVWarpCacheManager": {
		   "prototype": {
		    "init": {
		     "!type": "fn()"
		    },
		    "getStartTime": {
		     "!type": "fn()"
		    },
		    "getEndime": {
		     "!type": "fn()"
		    },
		    "getIndexByTime": {
		     "!type": "fn()"
		    },
		    "retrieveValuesAtTime": {
		     "!type": "fn()"
		    },
		    "allReady": {
		     "!type": "fn()"
		    },
		    "makeAllReady": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "MeshUVWarpCacheManager#init": {
		   "prototype": {
		    "start_time": {},
		    "end_time": {},
		    "uv_cache_table": {},
		    "uv_cache_data_ready": {},
		    "is_ready": {}
		   }
		  },
		  "MeshUVWarpCacheManager#allReady": {
		   "prototype": {
		    "is_ready": {}
		   }
		  },
		  "MeshUVWarpCacheManager#makeAllReady": {
		   "prototype": {
		    "uv_cache_data_ready[undefined]": {}
		   }
		  },
		  "CreatureModuleUtils": {
		   "GetAllAnimationNames": {
		    "!type": "fn()"
		   },
		   "getFloatArray": {
		    "!type": "fn()"
		   },
		   "getIntArray": {
		    "!type": "fn()"
		   },
		   "ReadPointsArray2DJSON": {
		    "!type": "fn()"
		   },
		   "ReadFloatArray3DJSON": {
		    "!type": "fn()"
		   },
		   "ReadBoolJSON": {
		    "!type": "fn()"
		   },
		   "ReadFloatArrayJSON": {
		    "!type": "fn()"
		   },
		   "ReadIntArrayJSON": {
		    "!type": "fn()"
		   },
		   "ReadMatrixJSON": {
		    "!type": "fn()"
		   },
		   "ReadMatrixJSON~retMat": {
		    "undefined]": {}
		   },
		   "ReadVector2JSON": {
		    "!type": "fn()"
		   },
		   "ReadVector3JSON": {
		    "!type": "fn()"
		   },
		   "CreateBones": {
		    "!type": "fn()"
		   },
		   "CreateBones~new_bone": {
		    "local_rest_start_pt": {},
		    "local_rest_end_pt": {}
		   },
		   "CreateBones~bone_data": {
		    "undefined]": {
		     "first": {},
		     "second": {}
		    }
		   },
		   "CreateBones~child_set": {
		    "undefined]": {}
		   },
		   "CreateRegions": {
		    "!type": "fn()"
		   },
		   "CreateRegions~weight_map": {
		    "undefined]": {}
		   },
		   "GetStartEndTimes": {
		    "!type": "fn()"
		   },
		   "FillBoneCache": {
		    "!type": "fn()"
		   },
		   "FillDeformationCache": {
		    "!type": "fn()"
		   },
		   "FillUVSwapCache": {
		    "!type": "fn()"
		   }
		  },
		  "cache_manager": {
		   "bone_cache_table[undefined]": {},
		   "displacement_cache_table[undefined]": {},
		   "uv_cache_table[undefined]": {}
		  },
		  "Creature": {
		   "prototype": {
		    "FillRenderColours": {
		     "!type": "fn()"
		    },
		    "ComputeBoundaryIndices": {
		     "!type": "fn()"
		    },
		    "ComputeBoundaryMinMax": {
		     "!type": "fn()"
		    },
		    "LoadFromData": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "Creature#FillRenderColours": {
		   "prototype": {
		    "render_colours[undefined]": {}
		   }
		  },
		  "Creature#ComputeBoundaryIndices~freq_table": {
		   "undefined]": {}
		  },
		  "Creature#ComputeBoundaryIndices": {
		   "prototype": {
		    "boundary_indices": {}
		   }
		  },
		  "Creature#ComputeBoundaryMinMax~minPt": {
		   "0]": {},
		   "1]": {}
		  },
		  "Creature#ComputeBoundaryMinMax~maxPt": {
		   "0]": {},
		   "1]": {}
		  },
		  "Creature#ComputeBoundaryMinMax": {
		   "prototype": {
		    "boundary_min": {},
		    "boundary_max": {}
		   }
		  },
		  "Creature#LoadFromData": {
		   "prototype": {
		    "global_pts": {},
		    "total_num_pts": {},
		    "global_indices": {},
		    "total_num_indices": {},
		    "global_uvs": {},
		    "render_colours": {},
		    "render_pts": {},
		    "render_composition": {}
		   }
		  },
		  "CreatureAnimation": {
		   "prototype": {
		    "LoadFromData": {
		     "!type": "fn()"
		    },
		    "getIndexByTime": {
		     "!type": "fn()"
		    },
		    "verifyFillCache": {
		     "!type": "fn()"
		    },
		    "poseFromCachePts": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "CreatureAnimation#LoadFromData": {
		   "prototype": {
		    "start_time": {},
		    "end_time": {}
		   }
		  },
		  "CreatureAnimation#verifyFillCache": {
		   "prototype": {
		    "cache_pts": {}
		   }
		  },
		  "CreatureAnimation#poseFromCachePts~set_pt": {
		   "undefined]": {}
		  },
		  "CreatureManager": {
		   "prototype": {
		    "CreateAnimation": {
		     "!type": "fn()"
		    },
		    "CreateAllAnimations": {
		     "!type": "fn()"
		    },
		    "AddAnimation": {
		     "!type": "fn()"
		    },
		    "GetAnimation": {
		     "!type": "fn()"
		    },
		    "GetCreature": {
		     "!type": "fn()"
		    },
		    "GetAnimationNames": {
		     "!type": "fn()"
		    },
		    "SetActiveAnimationName": {
		     "!type": "fn()"
		    },
		    "GetActiveAnimationName": {
		     "!type": "fn()"
		    },
		    "GetAllAnimations": {
		     "!type": "fn()"
		    },
		    "MakePointCache": {
		     "!type": "fn()"
		    },
		    "FillSinglePointCacheFrame": {
		     "!type": "fn()"
		    },
		    "GetIsPlaying": {
		     "!type": "fn()"
		    },
		    "SetShouldLoop": {
		     "!type": "fn()"
		    },
		    "SetUseCustomTimeRange": {
		     "!type": "fn()"
		    },
		    "SetCustomTimeRange": {
		     "!type": "fn()"
		    },
		    "SetIsPlaying": {
		     "!type": "fn()"
		    },
		    "ResetToStartTimes": {
		     "!type": "fn()"
		    },
		    "setRunTime": {
		     "!type": "fn()"
		    },
		    "increRunTime": {
		     "!type": "fn()"
		    },
		    "correctTime": {
		     "!type": "fn()"
		    },
		    "getRunTime": {
		     "!type": "fn()"
		    },
		    "Update": {
		     "!type": "fn()"
		    },
		    "RunAtTime": {
		     "!type": "fn()"
		    },
		    "RunCreature": {
		     "!type": "fn()"
		    },
		    "SetTimeScale": {
		     "!type": "fn()"
		    },
		    "SetBlending": {
		     "!type": "fn()"
		    },
		    "SetBlendingAnimations": {
		     "!type": "fn()"
		    },
		    "SetBlendingFactor": {
		     "!type": "fn()"
		    },
		    "IsContactBone": {
		     "!type": "fn()"
		    },
		    "PoseCreature": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "CreatureManager#AddAnimation": {
		   "prototype": {
		    "animations[undefined]": {}
		   }
		  },
		  "CreatureManager#SetActiveAnimationName": {
		   "prototype": {
		    "active_animation_name": {},
		    "run_time": {}
		   }
		  },
		  "CreatureManager#MakePointCache~new_pts": {
		   "undefined]": {}
		  },
		  "CreatureManager#FillSinglePointCacheFrame~new_pts": {
		   "undefined]": {}
		  },
		  "CreatureManager#SetShouldLoop": {
		   "prototype": {
		    "should_loop": {}
		   }
		  },
		  "CreatureManager#SetUseCustomTimeRange": {
		   "prototype": {
		    "use_custom_time_range": {}
		   }
		  },
		  "CreatureManager#SetCustomTimeRange": {
		   "prototype": {
		    "custom_start_time": {},
		    "custom_end_time": {}
		   }
		  },
		  "CreatureManager#SetIsPlaying": {
		   "prototype": {
		    "is_playing": {}
		   }
		  },
		  "CreatureManager#ResetToStartTimes": {
		   "prototype": {
		    "run_time": {}
		   }
		  },
		  "CreatureManager#setRunTime": {
		   "prototype": {
		    "run_time": {}
		   }
		  },
		  "CreatureManager#increRunTime": {
		   "prototype": {
		    "run_time": {}
		   }
		  },
		  "CreatureManager#correctTime": {
		   "prototype": {
		    "run_time": {}
		   }
		  },
		  "CreatureManager#SetTimeScale": {
		   "prototype": {
		    "time_scale": {}
		   }
		  },
		  "CreatureManager#SetBlending": {
		   "prototype": {
		    "do_blending": {},
		    "blend_render_pts[1]": {}
		   }
		  },
		  "CreatureManager#SetBlendingAnimations": {
		   "prototype": {
		    "active_blend_animation_names[0]": {},
		    "active_blend_animation_names[1]": {}
		   }
		  },
		  "CreatureManager#SetBlendingFactor": {
		   "prototype": {
		    "blending_factor": {}
		   }
		  },
		  "<anonymous>~shim": {
		   "exports": {}
		  },
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
		    "!type": "fn()"
		   },
		   "create~out": {
		    "0]": {},
		    "1]": {}
		   },
		   "clone": {
		    "!type": "fn()"
		   },
		   "clone~out": {
		    "0]": {},
		    "1]": {}
		   },
		   "fromValues": {
		    "!type": "fn()"
		   },
		   "fromValues~out": {
		    "0]": {},
		    "1]": {}
		   },
		   "copy": {
		    "!type": "fn()"
		   },
		   "set": {
		    "!type": "fn()"
		   },
		   "add": {
		    "!type": "fn()"
		   },
		   "subtract": {
		    "!type": "fn()"
		   },
		   "sub": {
		    "!type": "fn()"
		   },
		   "multiply": {
		    "!type": "fn()"
		   },
		   "mul": {
		    "!type": "fn()"
		   },
		   "divide": {
		    "!type": "fn()"
		   },
		   "div": {
		    "!type": "fn()"
		   },
		   "min": {
		    "!type": "fn(out: +vec2, a: +vec2, b: +vec2) -> ?"
		   },
		   "max": {
		    "!type": "fn(out: +vec2, a: +vec2, b: +vec2) -> ?"
		   },
		   "scale": {
		    "!type": "fn()"
		   },
		   "scaleAndAdd": {
		    "!type": "fn(out: +vec2, a: +vec2, b: +vec2, scale: number) -> ?"
		   },
		   "distance": {
		    "!type": "fn()"
		   },
		   "dist": {
		    "!type": "fn()"
		   },
		   "squaredDistance": {
		    "!type": "fn()"
		   },
		   "sqrDist": {
		    "!type": "fn()"
		   },
		   "length": {
		    "!type": "fn()"
		   },
		   "len": {
		    "!type": "fn()"
		   },
		   "squaredLength": {
		    "!type": "fn()"
		   },
		   "sqrLen": {
		    "!type": "fn()"
		   },
		   "negate": {
		    "!type": "fn()"
		   },
		   "inverse": {
		    "!type": "fn(out: +vec2, a: +vec2) -> ?"
		   },
		   "normalize": {
		    "!type": "fn()"
		   },
		   "dot": {
		    "!type": "fn()"
		   },
		   "cross": {
		    "!type": "fn(out: +vec3, a: +vec2, b: +vec2) -> ?"
		   },
		   "lerp": {
		    "!type": "fn()"
		   },
		   "random": {
		    "!type": "fn(out: +vec2, scale: number) -> ?"
		   },
		   "transformMat2": {
		    "!type": "fn(out: +vec2, a: +vec2, m: +mat2) -> ?"
		   },
		   "transformMat2d": {
		    "!type": "fn(out: +vec2, a: +vec2, m: +mat2d) -> ?"
		   },
		   "transformMat3": {
		    "!type": "fn(out: +vec2, a: +vec2, m: +mat3) -> ?"
		   },
		   "transformMat4": {
		    "!type": "fn(out: +vec2, a: +vec2, m: +mat4) -> ?"
		   },
		   "forEach": {
		    "!type": "fn(a: [?], stride: number, offset: number, count: number, fn: +function, arg: ?) -> ?"
		   },
		   "str": {
		    "!type": "fn()"
		   },
		   "crossLength": {
		    "!type": "fn()"
		   },
		   "crossVZ": {
		    "!type": "fn()"
		   },
		   "crossZV": {
		    "!type": "fn()"
		   },
		   "rotate": {
		    "!type": "fn()"
		   },
		   "rotate90cw": {
		    "!type": "fn()"
		   },
		   "toLocalFrame": {
		    "!type": "fn()"
		   },
		   "toGlobalFrame": {
		    "!type": "fn()"
		   },
		   "vectorToLocalFrame": {
		    "!type": "fn()"
		   },
		   "vectorToGlobalFrame": {
		    "!type": "fn()"
		   },
		   "centroid": {
		    "!type": "fn()"
		   },
		   "reflect": {
		    "!type": "fn()"
		   },
		   "getLineSegmentsIntersection": {
		    "!type": "fn()"
		   },
		   "getLineSegmentsIntersectionFraction": {
		    "!type": "fn()"
		   }
		  },
		  "<anonymous>~vec": {
		   "0]": {},
		   "1]": {},
		   "2]": {},
		   "3]": {}
		  },
		  "<anonymous>~vec3": {
		   "create": {
		    "!type": "fn() -> ?"
		   },
		   "create~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {}
		   },
		   "clone": {
		    "!type": "fn(a: +vec3) -> ?"
		   },
		   "clone~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {}
		   },
		   "fromValues": {
		    "!type": "fn(x: number, y: number, z: number) -> ?"
		   },
		   "fromValues~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {}
		   },
		   "copy": {
		    "!type": "fn(out: +vec3, a: +vec3) -> ?"
		   },
		   "set": {
		    "!type": "fn(out: +vec3, x: number, y: number, z: number) -> ?"
		   },
		   "add": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> ?"
		   },
		   "subtract": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> ?"
		   },
		   "sub": {
		    "!type": "fn()"
		   },
		   "multiply": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> ?"
		   },
		   "mul": {
		    "!type": "fn()"
		   },
		   "divide": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> ?"
		   },
		   "div": {
		    "!type": "fn()"
		   },
		   "min": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> ?"
		   },
		   "max": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> ?"
		   },
		   "scale": {
		    "!type": "fn(out: +vec3, a: +vec3, b: number) -> ?"
		   },
		   "scaleAndAdd": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3, scale: number) -> ?"
		   },
		   "distance": {
		    "!type": "fn(a: +vec3, b: +vec3) -> ?"
		   },
		   "dist": {
		    "!type": "fn()"
		   },
		   "squaredDistance": {
		    "!type": "fn(a: +vec3, b: +vec3) -> ?"
		   },
		   "sqrDist": {
		    "!type": "fn()"
		   },
		   "length": {
		    "!type": "fn(a: +vec3) -> ?"
		   },
		   "len": {
		    "!type": "fn()"
		   },
		   "squaredLength": {
		    "!type": "fn(a: +vec3) -> ?"
		   },
		   "sqrLen": {
		    "!type": "fn()"
		   },
		   "negate": {
		    "!type": "fn(out: +vec3, a: +vec3) -> ?"
		   },
		   "inverse": {
		    "!type": "fn(out: +vec3, a: +vec3) -> ?"
		   },
		   "normalize": {
		    "!type": "fn(out: +vec3, a: +vec3) -> ?"
		   },
		   "dot": {
		    "!type": "fn(a: +vec3, b: +vec3) -> ?"
		   },
		   "cross": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> ?"
		   },
		   "lerp": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3, t: number) -> ?"
		   },
		   "random": {
		    "!type": "fn(out: +vec3, scale: number) -> ?"
		   },
		   "transformMat4": {
		    "!type": "fn(out: +vec3, a: +vec3, m: +mat4) -> ?"
		   },
		   "transformMat3": {
		    "!type": "fn(out: +vec3, a: +vec3, m: +mat4) -> ?"
		   },
		   "transformQuat": {
		    "!type": "fn(out: +vec3, a: +vec3, q: +quat) -> ?"
		   },
		   "rotateX": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3, c: number) -> ?"
		   },
		   "rotateX~p": {
		    "0]": {},
		    "1]": {},
		    "2]": {}
		   },
		   "rotateX~r": {
		    "0]": {},
		    "1]": {},
		    "2]": {}
		   },
		   "rotateY": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3, c: number) -> ?"
		   },
		   "rotateY~p": {
		    "0]": {},
		    "1]": {},
		    "2]": {}
		   },
		   "rotateY~r": {
		    "0]": {},
		    "1]": {},
		    "2]": {}
		   },
		   "rotateZ": {
		    "!type": "fn(out: +vec3, a: +vec3, b: +vec3, c: number) -> ?"
		   },
		   "rotateZ~p": {
		    "0]": {},
		    "1]": {},
		    "2]": {}
		   },
		   "rotateZ~r": {
		    "0]": {},
		    "1]": {},
		    "2]": {}
		   },
		   "forEach": {
		    "!type": "fn(a: [?], stride: number, offset: number, count: number, fn: +function, arg: ?) -> ?"
		   },
		   "str": {
		    "!type": "fn(vec: +vec3) -> ?"
		   }
		  },
		  "<anonymous>~vec4": {
		   "create": {
		    "!type": "fn() -> ?"
		   },
		   "create~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {}
		   },
		   "clone": {
		    "!type": "fn(a: +vec4) -> ?"
		   },
		   "clone~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {}
		   },
		   "fromValues": {
		    "!type": "fn(x: number, y: number, z: number, w: number) -> ?"
		   },
		   "fromValues~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {}
		   },
		   "copy": {
		    "!type": "fn(out: +vec4, a: +vec4) -> ?"
		   },
		   "set": {
		    "!type": "fn(out: +vec4, x: number, y: number, z: number, w: number) -> ?"
		   },
		   "add": {
		    "!type": "fn(out: +vec4, a: +vec4, b: +vec4) -> ?"
		   },
		   "subtract": {
		    "!type": "fn(out: +vec4, a: +vec4, b: +vec4) -> ?"
		   },
		   "sub": {
		    "!type": "fn()"
		   },
		   "multiply": {
		    "!type": "fn(out: +vec4, a: +vec4, b: +vec4) -> ?"
		   },
		   "mul": {
		    "!type": "fn()"
		   },
		   "divide": {
		    "!type": "fn(out: +vec4, a: +vec4, b: +vec4) -> ?"
		   },
		   "div": {
		    "!type": "fn()"
		   },
		   "min": {
		    "!type": "fn(out: +vec4, a: +vec4, b: +vec4) -> ?"
		   },
		   "max": {
		    "!type": "fn(out: +vec4, a: +vec4, b: +vec4) -> ?"
		   },
		   "scale": {
		    "!type": "fn(out: +vec4, a: +vec4, b: number) -> ?"
		   },
		   "scaleAndAdd": {
		    "!type": "fn(out: +vec4, a: +vec4, b: +vec4, scale: number) -> ?"
		   },
		   "distance": {
		    "!type": "fn(a: +vec4, b: +vec4) -> ?"
		   },
		   "dist": {
		    "!type": "fn()"
		   },
		   "squaredDistance": {
		    "!type": "fn(a: +vec4, b: +vec4) -> ?"
		   },
		   "sqrDist": {
		    "!type": "fn()"
		   },
		   "length": {
		    "!type": "fn(a: +vec4) -> ?"
		   },
		   "len": {
		    "!type": "fn()"
		   },
		   "squaredLength": {
		    "!type": "fn(a: +vec4) -> ?"
		   },
		   "sqrLen": {
		    "!type": "fn()"
		   },
		   "negate": {
		    "!type": "fn(out: +vec4, a: +vec4) -> ?"
		   },
		   "inverse": {
		    "!type": "fn(out: +vec4, a: +vec4) -> ?"
		   },
		   "normalize": {
		    "!type": "fn(out: +vec4, a: +vec4) -> ?"
		   },
		   "dot": {
		    "!type": "fn(a: +vec4, b: +vec4) -> ?"
		   },
		   "lerp": {
		    "!type": "fn(out: +vec4, a: +vec4, b: +vec4, t: number) -> ?"
		   },
		   "random": {
		    "!type": "fn(out: +vec4, scale: number) -> ?"
		   },
		   "transformMat4": {
		    "!type": "fn(out: +vec4, a: +vec4, m: +mat4) -> ?"
		   },
		   "transformQuat": {
		    "!type": "fn(out: +vec4, a: +vec4, q: +quat) -> ?"
		   },
		   "forEach": {
		    "!type": "fn(a: [?], stride: number, offset: number, count: number, fn: +function, arg: ?) -> ?"
		   },
		   "str": {
		    "!type": "fn(vec: +vec4) -> ?"
		   }
		  },
		  "<anonymous>~mat2": {
		   "create": {
		    "!type": "fn() -> ?"
		   },
		   "create~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {}
		   },
		   "clone": {
		    "!type": "fn(a: +mat2) -> ?"
		   },
		   "clone~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {}
		   },
		   "copy": {
		    "!type": "fn(out: +mat2, a: +mat2) -> ?"
		   },
		   "identity": {
		    "!type": "fn(out: +mat2) -> ?"
		   },
		   "transpose": {
		    "!type": "fn(out: +mat2, a: +mat2) -> ?"
		   },
		   "invert": {
		    "!type": "fn(out: +mat2, a: +mat2) -> ?"
		   },
		   "adjoint": {
		    "!type": "fn(out: +mat2, a: +mat2) -> ?"
		   },
		   "determinant": {
		    "!type": "fn(a: +mat2) -> ?"
		   },
		   "multiply": {
		    "!type": "fn(out: +mat2, a: +mat2, b: +mat2) -> ?"
		   },
		   "mul": {
		    "!type": "fn()"
		   },
		   "rotate": {
		    "!type": "fn(out: +mat2, a: +mat2, rad: number) -> ?"
		   },
		   "scale": {
		    "!type": "fn(out: +mat2, a: +mat2, v: +vec2) -> ?"
		   },
		   "str": {
		    "!type": "fn(mat: +mat2) -> ?"
		   },
		   "frob": {
		    "!type": "fn(a: +mat2) -> ?"
		   },
		   "LDU": {
		    "!type": "fn(L: +mat2, D: +mat2, U: +mat2, a: +mat2)"
		   }
		  },
		  "<anonymous>~mat2d": {
		   "create": {
		    "!type": "fn() -> ?"
		   },
		   "create~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {},
		    "4]": {},
		    "5]": {}
		   },
		   "clone": {
		    "!type": "fn(a: +mat2d) -> ?"
		   },
		   "clone~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {},
		    "4]": {},
		    "5]": {}
		   },
		   "copy": {
		    "!type": "fn(out: +mat2d, a: +mat2d) -> ?"
		   },
		   "identity": {
		    "!type": "fn(out: +mat2d) -> ?"
		   },
		   "invert": {
		    "!type": "fn(out: +mat2d, a: +mat2d) -> ?"
		   },
		   "determinant": {
		    "!type": "fn(a: +mat2d) -> ?"
		   },
		   "multiply": {
		    "!type": "fn(out: +mat2d, a: +mat2d, b: +mat2d) -> ?"
		   },
		   "mul": {
		    "!type": "fn()"
		   },
		   "rotate": {
		    "!type": "fn(out: +mat2d, a: +mat2d, rad: number) -> ?"
		   },
		   "scale": {
		    "!type": "fn(out: +mat2d, a: +mat2d, v: +vec2) -> ?"
		   },
		   "translate": {
		    "!type": "fn(out: +mat2d, a: +mat2d, v: +vec2) -> ?"
		   },
		   "str": {
		    "!type": "fn(a: +mat2d) -> ?"
		   },
		   "frob": {
		    "!type": "fn(a: +mat2d) -> ?"
		   }
		  },
		  "<anonymous>~mat3": {
		   "create": {
		    "!type": "fn() -> ?"
		   },
		   "create~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {},
		    "4]": {},
		    "5]": {},
		    "6]": {},
		    "7]": {},
		    "8]": {}
		   },
		   "fromMat4": {
		    "!type": "fn(out: +mat3, a: +mat4) -> ?"
		   },
		   "clone": {
		    "!type": "fn(a: +mat3) -> ?"
		   },
		   "clone~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {},
		    "4]": {},
		    "5]": {},
		    "6]": {},
		    "7]": {},
		    "8]": {}
		   },
		   "copy": {
		    "!type": "fn(out: +mat3, a: +mat3) -> ?"
		   },
		   "identity": {
		    "!type": "fn(out: +mat3) -> ?"
		   },
		   "transpose": {
		    "!type": "fn(out: +mat3, a: +mat3) -> ?"
		   },
		   "invert": {
		    "!type": "fn(out: +mat3, a: +mat3) -> ?"
		   },
		   "adjoint": {
		    "!type": "fn(out: +mat3, a: +mat3) -> ?"
		   },
		   "determinant": {
		    "!type": "fn(a: +mat3) -> ?"
		   },
		   "multiply": {
		    "!type": "fn(out: +mat3, a: +mat3, b: +mat3) -> ?"
		   },
		   "mul": {
		    "!type": "fn()"
		   },
		   "translate": {
		    "!type": "fn(out: +mat3, a: +mat3, v: +vec2) -> ?"
		   },
		   "rotate": {
		    "!type": "fn(out: +mat3, a: +mat3, rad: number) -> ?"
		   },
		   "scale": {
		    "!type": "fn(out: +mat3, a: +mat3, v: +vec2) -> ?"
		   },
		   "fromMat2d": {
		    "!type": "fn(out: +mat3, a: +mat2d) -> ?"
		   },
		   "fromQuat": {
		    "!type": "fn(out: +mat3, q: +quat) -> ?"
		   },
		   "normalFromMat4": {
		    "!type": "fn(out: +mat3, a: +mat4) -> ?"
		   },
		   "str": {
		    "!type": "fn(mat: +mat3) -> ?"
		   },
		   "frob": {
		    "!type": "fn(a: +mat3) -> ?"
		   }
		  },
		  "<anonymous>~mat4": {
		   "create": {
		    "!type": "fn() -> ?"
		   },
		   "create~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {},
		    "4]": {},
		    "5]": {},
		    "6]": {},
		    "7]": {},
		    "8]": {},
		    "9]": {},
		    "10]": {},
		    "11]": {},
		    "12]": {},
		    "13]": {},
		    "14]": {},
		    "15]": {}
		   },
		   "clone": {
		    "!type": "fn(a: +mat4) -> ?"
		   },
		   "clone~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {},
		    "4]": {},
		    "5]": {},
		    "6]": {},
		    "7]": {},
		    "8]": {},
		    "9]": {},
		    "10]": {},
		    "11]": {},
		    "12]": {},
		    "13]": {},
		    "14]": {},
		    "15]": {}
		   },
		   "copy": {
		    "!type": "fn(out: +mat4, a: +mat4) -> ?"
		   },
		   "identity": {
		    "!type": "fn(out: +mat4) -> ?"
		   },
		   "transpose": {
		    "!type": "fn(out: +mat4, a: +mat4) -> ?"
		   },
		   "invert": {
		    "!type": "fn(out: +mat4, a: +mat4) -> ?"
		   },
		   "adjoint": {
		    "!type": "fn(out: +mat4, a: +mat4) -> ?"
		   },
		   "determinant": {
		    "!type": "fn(a: +mat4) -> ?"
		   },
		   "multiply": {
		    "!type": "fn(out: +mat4, a: +mat4, b: +mat4) -> ?"
		   },
		   "mul": {
		    "!type": "fn()"
		   },
		   "translate": {
		    "!type": "fn(out: +mat4, a: +mat4, v: +vec3) -> ?"
		   },
		   "scale": {
		    "!type": "fn(out: +mat4, a: +mat4, v: +vec3) -> ?"
		   },
		   "rotate": {
		    "!type": "fn(out: +mat4, a: +mat4, rad: number, axis: +vec3) -> ?"
		   },
		   "rotateX": {
		    "!type": "fn(out: +mat4, a: +mat4, rad: number) -> ?"
		   },
		   "rotateY": {
		    "!type": "fn(out: +mat4, a: +mat4, rad: number) -> ?"
		   },
		   "rotateZ": {
		    "!type": "fn(out: +mat4, a: +mat4, rad: number) -> ?"
		   },
		   "fromRotationTranslation": {
		    "!type": "fn(out: +mat4, q: +quat4, v: +vec3) -> ?"
		   },
		   "fromQuat": {
		    "!type": "fn()"
		   },
		   "frustum": {
		    "!type": "fn(out: +mat4, left: number, right: number, bottom: number, top: number, near: number, far: number) -> ?"
		   },
		   "perspective": {
		    "!type": "fn(out: +mat4, fovy: number, aspect: number, near: number, far: number) -> ?"
		   },
		   "ortho": {
		    "!type": "fn(out: +mat4, left: number, right: number, bottom: number, top: number, near: number, far: number) -> ?"
		   },
		   "lookAt": {
		    "!type": "fn(out: +mat4, eye: +vec3, center: +vec3, up: +vec3) -> ?"
		   },
		   "str": {
		    "!type": "fn(mat: +mat4) -> ?"
		   },
		   "frob": {
		    "!type": "fn(a: +mat4) -> ?"
		   }
		  },
		  "<anonymous>~quat": {
		   "create": {
		    "!type": "fn() -> ?"
		   },
		   "create~out": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {}
		   },
		   "rotationTo": {},
		   "setAxes": {},
		   "clone": {
		    "!type": "fn(a: +quat) -> ?"
		   },
		   "fromValues": {
		    "!type": "fn(x: number, y: number, z: number, w: number) -> ?"
		   },
		   "copy": {
		    "!type": "fn(out: +quat, a: +quat) -> ?"
		   },
		   "set": {
		    "!type": "fn(out: +quat, x: number, y: number, z: number, w: number) -> ?"
		   },
		   "identity": {
		    "!type": "fn(out: +quat) -> ?"
		   },
		   "setAxisAngle": {
		    "!type": "fn(out: +quat, axis: +vec3, rad: number) -> ?"
		   },
		   "add": {
		    "!type": "fn(out: +quat, a: +quat, b: +quat) -> ?"
		   },
		   "multiply": {
		    "!type": "fn(out: +quat, a: +quat, b: +quat) -> ?"
		   },
		   "mul": {
		    "!type": "fn()"
		   },
		   "scale": {
		    "!type": "fn(out: +quat, a: +quat, b: number) -> ?"
		   },
		   "rotateX": {
		    "!type": "fn(out: +quat, a: +quat, rad: number) -> ?"
		   },
		   "rotateY": {
		    "!type": "fn(out: +quat, a: +quat, rad: number) -> ?"
		   },
		   "rotateZ": {
		    "!type": "fn(out: +quat, a: +quat, rad: number) -> ?"
		   },
		   "calculateW": {
		    "!type": "fn(out: +quat, a: +quat) -> ?"
		   },
		   "dot": {
		    "!type": "fn(a: +quat, b: +quat) -> ?"
		   },
		   "lerp": {
		    "!type": "fn(out: +quat, a: +quat, b: +quat, t: number) -> ?"
		   },
		   "slerp": {
		    "!type": "fn(out: +quat, a: +quat, b: +quat, t: number) -> ?"
		   },
		   "invert": {
		    "!type": "fn(out: +quat, a: +quat) -> ?"
		   },
		   "conjugate": {
		    "!type": "fn(out: +quat, a: +quat) -> ?"
		   },
		   "length": {
		    "!type": "fn(a: +quat) -> ?"
		   },
		   "len": {
		    "!type": "fn()"
		   },
		   "squaredLength": {
		    "!type": "fn(a: +quat) -> ?"
		   },
		   "sqrLen": {
		    "!type": "fn()"
		   },
		   "normalize": {
		    "!type": "fn(out: +quat, a: +quat) -> ?"
		   },
		   "fromMat3": {
		    "!type": "fn(out: +quat, m: +mat3) -> ?"
		   },
		   "str": {
		    "!type": "fn(vec: +quat) -> ?"
		   }
		  },
		  "<anonymous>~matr": {
		   "0]": {},
		   "3]": {},
		   "6]": {},
		   "1]": {},
		   "4]": {},
		   "7]": {},
		   "2]": {},
		   "5]": {},
		   "8]": {}
		  },
		  "frame": {
		   "index": {}
		  },
		  "view": {
		   "x": {},
		   "y": {},
		   "width": {},
		   "height": {}
		  },
		  "uniforms": {
		   "resolution": {
		    "value": {
		     "x": {},
		     "y": {}
		    }
		   }
		  },
		  "sprite": {
		   "x": {},
		   "y": {},
		   "scale": {
		    "x": {},
		    "y": {}
		   },
		   "width": {},
		   "height": {},
		   "visible": {},
		   "_uvs": {},
		   "tilePosition": {
		    "x": {},
		    "y": {}
		   }
		  },
		  "child": {
		   "z": {},
		   "parent": {}
		  },
		  "document": {
		   "documentElement": {
		    "style": {
		     "minHeight": {}
		    }
		   },
		   "exitPointerLock": {}
		  },
		  "window": {
		   "onblur": {},
		   "onfocus": {},
		   "onpagehide": {},
		   "onpageshow": {},
		   "location": {
		    "href": {}
		   },
		   "console": {
		    "log": {},
		    "assert": {
		     "!type": "fn()"
		    },
		    "warn": {}
		   },
		   "'PhaserGlobal'": {
		    "audioContext": {}
		   },
		   "URL": {},
		   "requestAnimationFrame": {},
		   "cancelAnimationFrame": {}
		  },
		  "PIXI": {
		   "scaleModes": {
		    "DEFAULT": {}
		   },
		   "Circle": {},
		   "Ellipse": {},
		   "Matrix": {},
		   "identityMatrix": {},
		   "Point": {},
		   "Polygon": {},
		   "Rectangle": {},
		   "EmptyRectangle": {},
		   "RoundedRectangle": {},
		   "TextureCache": {
		    "'__default'": {},
		    "'__missing'": {}
		   },
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
		     "worldTransform": {},
		     "worldPosition": {},
		     "worldScale": {},
		     "worldRotation": {},
		     "_sr": {},
		     "_cr": {},
		     "filterArea": {},
		     "_bounds": {},
		     "_currentBounds": {},
		     "_mask": {},
		     "_cacheAsBitmap": {},
		     "_cacheIsDirty": {},
		     "destroy": {
		      "!type": "fn()"
		     },
		     "updateTransform": {
		      "!type": "fn()"
		     },
		     "displayObjectUpdateTransform": {},
		     "getBounds": {
		      "!type": "fn()"
		     },
		     "getLocalBounds": {
		      "!type": "fn()"
		     },
		     "setStageReference": {
		      "!type": "fn()"
		     },
		     "preUpdate": {
		      "!type": "fn()"
		     },
		     "generateTexture": {
		      "!type": "fn()"
		     },
		     "updateCache": {
		      "!type": "fn()"
		     },
		     "toGlobal": {
		      "!type": "fn()"
		     },
		     "toLocal": {
		      "!type": "fn()"
		     },
		     "_renderCachedSprite": {
		      "!type": "fn()"
		     },
		     "_generateCachedSprite": {
		      "!type": "fn()"
		     },
		     "_destroyCachedSprite": {
		      "!type": "fn()"
		     },
		     "_renderWebGL": {
		      "!type": "fn()"
		     },
		     "_renderCanvas": {
		      "!type": "fn()"
		     }
		    },
		    "_tempMatrix": {
		     "tx": {},
		     "ty": {}
		    }
		   },
		   "DisplayObject#destroy": {
		    "prototype": {
		     "children": {},
		     "transformCallback": {},
		     "transformCallbackContext": {},
		     "hitArea": {},
		     "parent": {},
		     "stage": {},
		     "worldTransform": {},
		     "filterArea": {},
		     "_bounds": {},
		     "_currentBounds": {},
		     "_mask": {},
		     "renderable": {}
		    }
		   },
		   "DisplayObject#updateTransform": {
		    "prototype": {
		     "rotationCache": {},
		     "_sr": {},
		     "_cr": {},
		     "worldAlpha": {},
		     "worldRotation": {},
		     "_currentBounds": {}
		    }
		   },
		   "DisplayObject#updateTransform~wt": {
		    "a": {},
		    "b": {},
		    "c": {},
		    "d": {},
		    "tx": {},
		    "ty": {}
		   },
		   "DisplayObject#setStageReference": {
		    "prototype": {
		     "stage": {}
		    }
		   },
		   "DisplayObject#_renderCachedSprite#_cachedSprite": {
		    "worldAlpha": {}
		   },
		   "DisplayObject#_generateCachedSprite": {
		    "prototype": {
		     "_cacheAsBitmap": {},
		     "_cachedSprite": {},
		     "_filters": {}
		    }
		   },
		   "DisplayObject#_generateCachedSprite#_cachedSprite": {
		    "worldTransform": {},
		    "filters": {},
		    "anchor": {
		     "x": {},
		     "y": {}
		    }
		   },
		   "DisplayObject#_destroyCachedSprite": {
		    "prototype": {
		     "_cachedSprite": {}
		    }
		   },
		   "DisplayObjectContainer": {
		    "!type": "fn()",
		    "prototype": {
		     "children": {},
		     "addChild": {
		      "!type": "fn()"
		     },
		     "addChildAt": {
		      "!type": "fn()"
		     },
		     "swapChildren": {
		      "!type": "fn()"
		     },
		     "getChildIndex": {
		      "!type": "fn()"
		     },
		     "setChildIndex": {
		      "!type": "fn()"
		     },
		     "getChildAt": {
		      "!type": "fn()"
		     },
		     "removeChild": {
		      "!type": "fn()"
		     },
		     "removeChildAt": {
		      "!type": "fn()"
		     },
		     "removeChildren": {
		      "!type": "fn()"
		     },
		     "updateTransform": {
		      "!type": "fn()"
		     },
		     "displayObjectContainerUpdateTransform": {},
		     "getBounds": {
		      "!type": "fn()"
		     },
		     "getLocalBounds": {
		      "!type": "fn()"
		     },
		     "setStageReference": {
		      "!type": "fn()"
		     },
		     "removeStageReference": {
		      "!type": "fn()"
		     },
		     "_renderWebGL": {
		      "!type": "fn()"
		     },
		     "_renderCanvas": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "DisplayObjectContainer#swapChildren": {
		    "prototype": {
		     "children[undefined]": {}
		    }
		   },
		   "DisplayObjectContainer#removeChildAt~child": {
		    "parent": {}
		   },
		   "DisplayObjectContainer#removeChildren~child": {
		    "parent": {}
		   },
		   "DisplayObjectContainer#getBounds~bounds": {
		    "x": {},
		    "y": {},
		    "width": {},
		    "height": {}
		   },
		   "DisplayObjectContainer#getLocalBounds": {
		    "prototype": {
		     "worldTransform": {}
		    }
		   },
		   "DisplayObjectContainer#setStageReference": {
		    "prototype": {
		     "stage": {}
		    }
		   },
		   "DisplayObjectContainer#removeStageReference": {
		    "prototype": {
		     "stage": {}
		    }
		   },
		   "Sprite": {
		    "!type": "fn(texture: +Texture)",
		    "prototype": {
		     "anchor": {},
		     "texture": {},
		     "_width": {},
		     "_height": {},
		     "tint": {},
		     "cachedTint": {},
		     "tintedTexture": {},
		     "blendMode": {},
		     "shader": {},
		     "renderable": {},
		     "setTexture": {
		      "!type": "fn()"
		     },
		     "onTextureUpdate": {
		      "!type": "fn()"
		     },
		     "getBounds": {
		      "!type": "fn()"
		     },
		     "_renderWebGL": {
		      "!type": "fn()"
		     },
		     "_renderCanvas": {
		      "!type": "fn()"
		     }
		    },
		    "fromFrame": {
		     "!type": "fn()"
		    },
		    "fromImage": {
		     "!type": "fn()"
		    }
		   },
		   "Sprite#setTexture": {
		    "prototype": {
		     "texture": {}
		    }
		   },
		   "Sprite#setTexture#texture": {
		    "valid": {}
		   },
		   "Sprite#onTextureUpdate#scale": {
		    "x": {},
		    "y": {}
		   },
		   "Sprite#getBounds~bounds": {
		    "x": {},
		    "width": {},
		    "y": {},
		    "height": {}
		   },
		   "Sprite#getBounds": {
		    "prototype": {
		     "_currentBounds": {}
		    }
		   },
		   "Sprite#_renderCanvas": {
		    "prototype": {
		     "tintedTexture": {},
		     "cachedTint": {}
		    }
		   },
		   "SpriteBatch": {
		    "!type": "fn(texture: +Texture)",
		    "prototype": {
		     "textureThing": {},
		     "ready": {},
		     "initWebGL": {
		      "!type": "fn()"
		     },
		     "updateTransform": {
		      "!type": "fn()"
		     },
		     "_renderWebGL": {
		      "!type": "fn()"
		     },
		     "_renderCanvas": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "SpriteBatch#initWebGL": {
		    "prototype": {
		     "fastSpriteBatch": {},
		     "ready": {}
		    }
		   },
		   "SpriteBatch#_renderCanvas~context": {
		    "globalAlpha": {}
		   },
		   "Stage": {
		    "!type": "fn(backgroundColor: number)",
		    "prototype": {
		     "worldTransform": {},
		     "stage": {},
		     "updateTransform": {
		      "!type": "fn()"
		     },
		     "setBackgroundColor": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Stage#updateTransform": {
		    "prototype": {
		     "worldAlpha": {}
		    }
		   },
		   "Stage#setBackgroundColor": {
		    "prototype": {
		     "backgroundColor": {},
		     "backgroundColorSplit": {},
		     "backgroundColorString": {}
		    }
		   },
		   "Rope": {
		    "!type": "fn(texture: +Texture, points: [?])",
		    "prototype": {
		     "points": {},
		     "vertices": {},
		     "uvs": {},
		     "colors": {},
		     "indices": {},
		     "refresh": {
		      "!type": "fn()"
		     },
		     "updateTransform": {
		      "!type": "fn()"
		     },
		     "setTexture": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "Rope#refresh": {
		    "prototype": {
		     "count": {}
		    }
		   },
		   "Rope#refresh~uvs": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {},
		    "undefined]": {}
		   },
		   "Rope#refresh~colors": {
		    "0]": {},
		    "1]": {},
		    "undefined]": {}
		   },
		   "Rope#refresh~indices": {
		    "0]": {},
		    "1]": {},
		    "undefined]": {}
		   },
		   "Rope#updateTransform~perp": {
		    "x": {},
		    "y": {}
		   },
		   "Rope#updateTransform": {
		    "prototype": {
		     "count": {}
		    }
		   },
		   "Rope#updateTransform~vertices": {
		    "undefined]": {}
		   },
		   "Rope#setTexture": {
		    "prototype": {
		     "texture": {}
		    }
		   },
		   "Strip": {
		    "!type": "fn(texture: +Texture, width: number, height: number)",
		    "prototype": {
		     "texture": {},
		     "uvs": {},
		     "vertices": {},
		     "colors": {},
		     "indices": {},
		     "dirty": {},
		     "blendMode": {},
		     "canvasPadding": {},
		     "drawMode": {},
		     "_renderWebGL": {
		      "!type": "fn()"
		     },
		     "_initWebGL": {
		      "!type": "fn()"
		     },
		     "_renderStrip": {
		      "!type": "fn()"
		     },
		     "_renderCanvas": {
		      "!type": "fn()"
		     },
		     "_renderCanvasTriangleStrip": {
		      "!type": "fn()"
		     },
		     "_renderCanvasTriangles": {
		      "!type": "fn()"
		     },
		     "_renderCanvasDrawTriangle": {
		      "!type": "fn()"
		     },
		     "renderStripFlat": {
		      "!type": "fn()"
		     },
		     "onTextureUpdate": {
		      "!type": "fn()"
		     },
		     "getBounds": {
		      "!type": "fn()"
		     }
		    },
		    "DrawModes": {
		     "TRIANGLE_STRIP": {},
		     "TRIANGLES": {}
		    }
		   },
		   "Strip#_initWebGL": {
		    "prototype": {
		     "_vertexBuffer": {},
		     "_indexBuffer": {},
		     "_uvBuffer": {},
		     "_colorBuffer": {}
		    }
		   },
		   "Strip#_renderStrip": {
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "Strip#renderStripFlat~context": {
		    "fillStyle": {}
		   },
		   "Strip#onTextureUpdate": {
		    "prototype": {
		     "updateFrame": {}
		    }
		   },
		   "Strip#getBounds~bounds": {
		    "x": {},
		    "width": {},
		    "y": {},
		    "height": {}
		   },
		   "Strip#getBounds": {
		    "prototype": {
		     "_currentBounds": {}
		    }
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
		     "refreshTexture": {},
		     "frameWidth": {},
		     "frameHeight": {},
		     "setTexture": {
		      "!type": "fn()"
		     },
		     "_renderWebGL": {
		      "!type": "fn()"
		     },
		     "_renderCanvas": {
		      "!type": "fn()"
		     },
		     "onTextureUpdate": {
		      "!type": "fn()"
		     },
		     "generateTilingTexture": {
		      "!type": "fn()"
		     },
		     "getBounds": {
		      "!type": "fn()"
		     },
		     "destroy": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "TilingSprite#setTexture": {
		    "prototype": {
		     "texture": {},
		     "refreshTexture": {},
		     "cachedTint": {}
		    }
		   },
		   "TilingSprite#_renderWebGL#tilingTexture": {
		    "needsUpdate": {}
		   },
		   "TilingSprite#_renderCanvas~context": {
		    "globalAlpha": {},
		    "globalCompositeOperation": {},
		    "fillStyle": {}
		   },
		   "TilingSprite#_renderCanvas": {
		    "prototype": {
		     "tilePattern": {}
		    }
		   },
		   "TilingSprite#_renderCanvas~tilePosition": {
		    "x": {},
		    "y": {}
		   },
		   "TilingSprite#generateTilingTexture#tilingTexture": {
		    "baseTexture": {
		     "width": {},
		     "height": {},
		     "_powerOf2": {}
		    },
		    "needsUpdate": {},
		    "isTiling": {}
		   },
		   "TilingSprite#generateTilingTexture": {
		    "prototype": {
		     "canvasBuffer": {},
		     "tilingTexture": {},
		     "refreshTexture": {}
		    }
		   },
		   "TilingSprite#generateTilingTexture#canvasBuffer": {
		    "context": {
		     "strokeStyle": {}
		    }
		   },
		   "TilingSprite#generateTilingTexture#tileScaleOffset": {
		    "x": {},
		    "y": {}
		   },
		   "TilingSprite#getBounds~bounds": {
		    "x": {},
		    "width": {},
		    "y": {},
		    "height": {}
		   },
		   "TilingSprite#getBounds": {
		    "prototype": {
		     "_currentBounds": {}
		    }
		   },
		   "TilingSprite#destroy": {
		    "prototype": {
		     "tileScale": {},
		     "tileScaleOffset": {},
		     "tilePosition": {},
		     "tilingTexture": {}
		    }
		   },
		   "AbstractFilter": {
		    "!type": "fn(fragmentSrc: [?], uniforms: ?)",
		    "prototype": {
		     "passes": {},
		     "shaders": {},
		     "dirty": {},
		     "padding": {},
		     "uniforms": {},
		     "fragmentSrc": {},
		     "syncUniforms": {
		      "!type": "fn()"
		     }
		    }
		   },
		   "AbstractFilter#syncUniforms#shaders[undefined]": {
		    "dirty": {}
		   },
		   "GraphicsData": {
		    "!type": "fn(lineWidth: number, lineColor: number, lineAlpha: number, fillColor: number, fillAlpha: number, fill: bool, shape: +Circle|+Rectangle|+Ellipse|+Line|+Polygon)",
		    "prototype": {
		     "lineWidth": {},
		     "lineColor": {},
		     "lineAlpha": {},
		     "_lineTint": {},
		     "fillColor": {},
		     "fillAlpha": {},
		     "_fillTint": {},
		     "fill": {},
		     "shape": {},
		     "type": {}
		    }
		   }
		  },
		  "bounds": {
		   "width": {},
		   "height": {}
		  },
		  "destination": {
		   "dirty": {}
		  },
		  "context": {
		   "globalCompositeOperation": {},
		   "fillStyle": {},
		   "strokeStyle": {},
		   "lineWidth": {},
		   "globalAlpha": {}
		  },
		  "_data": {
		   "base": {
		    "scaleMode": {}
		   }
		  },
		  "wt": {
		   "a": {},
		   "d": {}
		  },
		  "stamp": {
		   "smoothed": {}
		  },
		  "_fontComponents": {
		   "fontFamily": {},
		   "fontSize": {},
		   "fontWeight": {},
		   "fontStyle": {},
		   "fontVariant": {}
		  },
		  "style": {
		   "fill": {},
		   "align": {},
		   "tabs": {},
		   "boundsAlignH": {},
		   "boundsAlignV": {},
		   "stroke": {},
		   "strokeThickness": {},
		   "wordWrap": {},
		   "wordWrapWidth": {},
		   "shadowOffsetX": {},
		   "shadowOffsetY": {},
		   "shadowColor": {},
		   "shadowBlur": {},
		   "shadowStroke": {},
		   "shadowFill": {}
		  },
		  "scale": {
		   "x": {},
		   "y": {}
		  },
		  "video": {
		   "currentTime": {},
		   "volume": {},
		   "playbackRate": {},
		   "loop": {}
		  },
		  "dest": {
		   "x": {},
		   "y": {},
		   "diameter": {},
		   "width": {},
		   "height": {}
		  },
		  "a": {
		   "x": {},
		   "y": {},
		   "width": {},
		   "height": {}
		  },
		  "pointer": {
		   "dirty": {}
		  },
		  "event": {
		   "'identifier'": {},
		   "identifier": {},
		   "target": {}
		  },
		  "WheelEventProxy": {
		   "prototype": {
		    "bindEvent": {
		     "!type": "fn()"
		    }
		   },
		   "_stubsGenerated": {}
		  },
		  "WheelEventProxy#bindEvent": {
		   "makeBinder": {
		    "!type": "fn()"
		   },
		   "prototype": {
		    "originalEvent": {}
		   }
		  },
		  "type": {
		   "value": {}
		  },
		  "deltaMode": {
		   "get": {
		    "!type": "fn()"
		   }
		  },
		  "deltaY": {
		   "get": {
		    "!type": "fn()"
		   }
		  },
		  "deltaX": {
		   "get": {
		    "!type": "fn()"
		   }
		  },
		  "deltaZ": {
		   "value": {}
		  },
		  "bitmapData": {
		   "key": {}
		  },
		  "file": {
		   "loaded": {},
		   "error": {},
		   "errorMessage": {},
		   "url": {},
		   "data": {
		    "name": {},
		    "crossOrigin": {},
		    "onload": {
		     "!type": "fn()"
		    },
		    "onerror": {
		     "!type": "fn()"
		    },
		    "src": {},
		    "controls": {},
		    "autoplay": {},
		    "canplay": {},
		    "preload": {},
		    "language": {},
		    "type": {},
		    "defer": {},
		    "text": {}
		   },
		   "requestObject": {},
		   "requestUrl": {},
		   "atlasType": {}
		  },
		  "<anonymous>~letter": {
		   "texture": {}
		  },
		  "area": {
		   "width": {},
		   "height": {}
		  },
		  "blendModes": {
		   "NORMAL": {},
		   "ADD": {},
		   "MULTIPLY": {},
		   "SCREEN": {},
		   "OVERLAY": {},
		   "DARKEN": {},
		   "LIGHTEN": {},
		   "COLOR_DODGE": {},
		   "COLOR_BURN": {},
		   "HARD_LIGHT": {},
		   "SOFT_LIGHT": {},
		   "DIFFERENCE": {},
		   "EXCLUSION": {},
		   "HUE": {},
		   "SATURATION": {},
		   "COLOR": {},
		   "LUMINOSITY": {}
		  },
		  "scaleModes": {
		   "DEFAULT": {},
		   "LINEAR": {},
		   "NEAREST": {}
		  },
		  "position": {
		   "x": {},
		   "y": {}
		  },
		  "body": {
		   "overlapX": {},
		   "overlapY": {},
		   "blocked": {
		    "left": {},
		    "right": {},
		    "up": {},
		    "down": {}
		   },
		   "position": {
		    "x": {},
		    "y": {}
		   },
		   "velocity": {
		    "x": {},
		    "y": {}
		   },
		   "angularVelocity": {},
		   "rotation": {},
		   "world": {}
		  },
		  "object": {
		   "body": {
		    "debug": {}
		   }
		  },
		  "body1": {
		   "embedded": {},
		   "touching": {
		    "none": {},
		    "right": {},
		    "left": {},
		    "down": {},
		    "up": {}
		   },
		   "overlapX": {},
		   "x": {},
		   "velocity": {
		    "x": {},
		    "y": {}
		   },
		   "y": {},
		   "overlapY": {}
		  },
		  "body2": {
		   "embedded": {},
		   "touching": {
		    "none": {},
		    "left": {},
		    "right": {},
		    "up": {},
		    "down": {}
		   },
		   "overlapX": {},
		   "x": {},
		   "velocity": {
		    "x": {},
		    "y": {}
		   },
		   "y": {},
		   "overlapY": {}
		  },
		  "displayObject": {
		   "body": {
		    "velocity": {
		     "x": {},
		     "y": {}
		    }
		   }
		  },
		  "shape": {
		   "pos": {
		    "x": {},
		    "y": {}
		   },
		   "collisionMask": {},
		   "collisionGroup": {},
		   "material": {},
		   "body": {},
		   "angle": {}
		  },
		  "pos": {
		   "x": {},
		   "y": {}
		  },
		  "map": {
		   "layers[undefined]": {
		    "bodies": {
		     "length": {}
		    }
		   }
		  },
		  "data": {
		   "type": {},
		   "allowSleep": {},
		   "angle": {},
		   "angularDamping": {},
		   "angularForce": {},
		   "angularVelocity": {},
		   "damping": {},
		   "fixedRotation": {},
		   "inertia": {},
		   "mass": {},
		   "sleepSpeedLimit": {},
		   "position[0]": {},
		   "position[1]": {}
		  },
		  "fixture": {
		   "collisionGroup": {},
		   "collisionMask": {},
		   "sensor": {},
		   "material": {}
		  },
		  "module": {
		   "exports": {}
		  },
		  "<anonymous>~f": {
		   "p2": {}
		  },
		  "<anonymous>": {
		   "s": {
		    "!type": "fn()"
		   },
		   "Line": {
		    "!type": "fn(options: +anonymousLineOptions)"
		   },
		   "Point": {
		    "!type": "fn()"
		   },
		   "Polygon": {
		    "!type": "fn()"
		   },
		   "getIntersectionPoint": {
		    "!type": "fn()"
		   },
		   "Scalar": {
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
		   "setConvexToCapsuleShapeMiddle": {
		    "!type": "fn()"
		   },
		   "pointInConvex": {
		    "!type": "fn()"
		   },
		   "Ray": {
		    "!type": "fn(options: +anonymousRayOptions)"
		   },
		   "distanceFromIntersectionSquared": {
		    "!type": "fn()"
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
		   "getLineSegmentsIntersection": {
		    "!type": "fn()"
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
		   "setArrayZero": {
		    "!type": "fn()"
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
		   },
		   "bound": {
		    "!type": "fn()"
		   },
		   "clientWidth": {
		    "!type": "fn()"
		   },
		   "clientHeight": {
		    "!type": "fn()"
		   }
		  },
		  "n[undefined]": {
		   "n[undefined]": {}
		  },
		  "<anonymous>~module": {
		   "exports": {
		    "Polygon": {},
		    "Point": {},
		    "name": {},
		    "version": {},
		    "description": {},
		    "author": {},
		    "keywords": {},
		    "main": {},
		    "engines": {
		     "node": {}
		    },
		    "repository": {
		     "type": {},
		     "url": {}
		    },
		    "bugs": {
		     "url": {}
		    },
		    "licenses": {},
		    "devDependencies": {
		     "grunt": {},
		     "\"grunt-contrib-jshint\"": {},
		     "\"grunt-contrib-nodeunit\"": {},
		     "\"grunt-contrib-uglify\"": {},
		     "\"grunt-contrib-watch\"": {},
		     "\"grunt-browserify\"": {},
		     "\"grunt-contrib-concat\"": {}
		    },
		    "dependencies": {
		     "\"poly-decomp\"": {}
		    },
		    "AABB": {},
		    "AngleLockEquation": {},
		    "Body": {},
		    "Broadphase": {},
		    "Capsule": {},
		    "Circle": {},
		    "Constraint": {},
		    "ContactEquation": {},
		    "ContactEquationPool": {},
		    "ContactMaterial": {},
		    "Convex": {},
		    "DistanceConstraint": {},
		    "Equation": {},
		    "EventEmitter": {},
		    "FrictionEquation": {},
		    "FrictionEquationPool": {},
		    "GearConstraint": {},
		    "GSSolver": {},
		    "Heightfield": {},
		    "Line": {},
		    "LockConstraint": {},
		    "Material": {},
		    "Narrowphase": {},
		    "NaiveBroadphase": {},
		    "Particle": {},
		    "Plane": {},
		    "Pool": {},
		    "RevoluteConstraint": {},
		    "PrismaticConstraint": {},
		    "Ray": {},
		    "RaycastResult": {},
		    "Box": {},
		    "RotationalVelocityEquation": {},
		    "SAPBroadphase": {},
		    "Shape": {},
		    "Solver": {},
		    "Spring": {},
		    "TopDownVehicle": {},
		    "LinearSpring": {},
		    "RotationalSpring": {},
		    "Utils": {},
		    "World": {},
		    "vec2": {}
		   }
		  },
		  "<anonymous>~Line": {
		   "lineInt": {
		    "!type": "fn()"
		   },
		   "lineInt~i": {
		    "0]": {},
		    "1]": {}
		   },
		   "segmentsIntersect": {
		    "!type": "fn()"
		   },
		   "prototype": {
		    "length": {
		     "!type": "number"
		    },
		    "computeMomentOfInertia": {
		     "!type": "fn()"
		    },
		    "updateBoundingRadius": {
		     "!type": "fn()"
		    },
		    "computeAABB": {
		     "!type": "fn()"
		    },
		    "raycast": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~Point": {
		   "area": {
		    "!type": "fn()"
		   },
		   "left": {
		    "!type": "fn()"
		   },
		   "leftOn": {
		    "!type": "fn()"
		   },
		   "right": {
		    "!type": "fn()"
		   },
		   "rightOn": {
		    "!type": "fn()"
		   },
		   "collinear": {
		    "!type": "fn()"
		   },
		   "collinear~ab": {
		    "0]": {},
		    "1]": {}
		   },
		   "collinear~bc": {
		    "0]": {},
		    "1]": {}
		   },
		   "sqdist": {
		    "!type": "fn()"
		   }
		  },
		  "<anonymous>~Polygon": {
		   "prototype": {
		    "vertices": {},
		    "at": {
		     "!type": "fn()"
		    },
		    "first": {
		     "!type": "fn()"
		    },
		    "last": {
		     "!type": "fn()"
		    },
		    "clear": {
		     "!type": "fn()"
		    },
		    "append": {
		     "!type": "fn()"
		    },
		    "makeCCW": {
		     "!type": "fn()"
		    },
		    "reverse": {
		     "!type": "fn()"
		    },
		    "isReflex": {
		     "!type": "fn()"
		    },
		    "canSee": {
		     "!type": "fn()"
		    },
		    "copy": {
		     "!type": "fn()"
		    },
		    "getCutEdges": {
		     "!type": "fn()"
		    },
		    "decomp": {
		     "!type": "fn()"
		    },
		    "slice": {
		     "!type": "fn()"
		    },
		    "isSimple": {
		     "!type": "fn()"
		    },
		    "quickDecomp": {
		     "!type": "fn()"
		    },
		    "removeCollinearPoints": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~Polygon#clear#vertices": {
		   "length": {}
		  },
		  "<anonymous>~Polygon#reverse": {
		   "prototype": {
		    "vertices": {}
		   }
		  },
		  "<anonymous>~Polygon#canSee~l1": {
		   "0]": {},
		   "1]": {}
		  },
		  "<anonymous>~Polygon#canSee~l2": {
		   "0]": {},
		   "1]": {}
		  },
		  "<anonymous>~Polygon#quickDecomp~p": {
		   "0]": {},
		   "1]": {}
		  },
		  "<anonymous>~Scalar": {
		   "eq": {
		    "!type": "fn()"
		   }
		  },
		  "<anonymous>~AABB": {
		   "prototype": {
		    "lowerBound": {},
		    "upperBound": {},
		    "setFromPoints": {
		     "!type": "fn()"
		    },
		    "copy": {
		     "!type": "fn()"
		    },
		    "extend": {
		     "!type": "fn()"
		    },
		    "overlaps": {
		     "!type": "fn()"
		    },
		    "containsPoint": {
		     "!type": "fn()"
		    },
		    "overlapsRay": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~tmp": {
		   "0]": {},
		   "1]": {}
		  },
		  "<anonymous>~AABB#setFromPoints~u": {
		   "undefined]": {}
		  },
		  "<anonymous>~AABB#setFromPoints~l": {
		   "undefined]": {}
		  },
		  "<anonymous>~AABB#setFromPoints": {
		   "prototype": {
		    "lowerBound[0]": {},
		    "lowerBound[1]": {},
		    "upperBound[0]": {},
		    "upperBound[1]": {}
		   }
		  },
		  "<anonymous>~AABB#extend": {
		   "prototype": {
		    "lowerBound[undefined]": {},
		    "upperBound[undefined]": {}
		   }
		  },
		  "<anonymous>~Broadphase": {
		   "prototype": {
		    "type": {},
		    "result": {},
		    "world": {},
		    "boundingVolumeType": {
		     "!type": "number"
		    },
		    "setWorld": {
		     "!type": "fn()"
		    },
		    "getCollisionPairs": {
		     "!type": "fn()"
		    },
		    "boundingVolumeCheck": {
		     "!type": "fn()"
		    }
		   },
		   "AABB": {
		    "!type": "number"
		   },
		   "BOUNDING_CIRCLE": {
		    "!type": "number"
		   },
		   "boundingRadiusCheck": {
		    "!type": "fn()"
		   },
		   "aabbCheck": {
		    "!type": "fn()"
		   },
		   "canCollide": {
		    "!type": "fn()"
		   },
		   "NAIVE": {},
		   "SAP": {}
		  },
		  "<anonymous>~Broadphase#setWorld": {
		   "prototype": {
		    "world": {}
		   }
		  },
		  "<anonymous>~NaiveBroadphase": {
		   "prototype": {
		    "getCollisionPairs": {
		     "!type": "fn()"
		    },
		    "aabbQuery": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~NaiveBroadphase#getCollisionPairs~result": {
		   "length": {}
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
		    "collidingBodiesLastStep": {},
		    "contactSkinSize": {
		     "!type": "number"
		    },
		    "bodiesOverlap": {
		     "!type": "fn()"
		    },
		    "collidedLastStep": {
		     "!type": "fn()"
		    },
		    "reset": {
		     "!type": "fn()"
		    },
		    "createContactEquation": {
		     "!type": "fn()"
		    },
		    "createFrictionEquation": {
		     "!type": "fn()"
		    },
		    "createFrictionFromContact": {
		     "!type": "fn()"
		    },
		    "createFrictionFromAverage": {
		     "!type": "fn()"
		    },
		    "[undefined]": {},
		    "convexLine": {
		     "!type": "fn()"
		    },
		    "lineBox": {
		     "!type": "fn()"
		    },
		    "lineCapsule": {
		     "!type": "fn()"
		    },
		    "capsuleCapsule": {
		     "!type": "fn()"
		    },
		    "lineLine": {
		     "!type": "fn()"
		    },
		    "planeLine": {
		     "!type": "fn()"
		    },
		    "particleCapsule": {
		     "!type": "fn()"
		    },
		    "circleLine": {
		     "!type": "fn()"
		    },
		    "circleCapsule": {
		     "!type": "fn()"
		    },
		    "circleCircle": {
		     "!type": "fn()"
		    },
		    "particlePlane": {
		     "!type": "fn()"
		    },
		    "circleParticle": {
		     "!type": "fn()"
		    },
		    "planeCapsule": {
		     "!type": "fn()"
		    },
		    "circlePlane": {
		     "!type": "fn()"
		    },
		    "circleHeightfield": {
		     "!type": "fn()"
		    }
		   },
		   "projectConvexOntoAxis": {
		    "!type": "fn()"
		   },
		   "findSeparatingAxis": {
		    "!type": "fn()"
		   },
		   "getClosestEdge": {
		    "!type": "fn()"
		   }
		  },
		  "<anonymous>~Narrowphase#reset#contactEquations": {
		   "length": {}
		  },
		  "<anonymous>~Narrowphase#reset#frictionEquations": {
		   "length": {}
		  },
		  "<anonymous>~Narrowphase#createContactEquation~c": {
		   "bodyA": {},
		   "bodyB": {},
		   "shapeA": {},
		   "shapeB": {},
		   "restitution": {},
		   "firstImpact": {},
		   "stiffness": {},
		   "relaxation": {},
		   "needsUpdate": {},
		   "enabled": {},
		   "offset": {}
		  },
		  "<anonymous>~Narrowphase#createFrictionEquation~c": {
		   "bodyA": {},
		   "bodyB": {},
		   "shapeA": {},
		   "shapeB": {},
		   "frictionCoefficient": {},
		   "relativeVelocity": {},
		   "enabled": {},
		   "needsUpdate": {},
		   "stiffness": {},
		   "relaxation": {},
		   "contactEquations.length": {}
		  },
		  "<anonymous>~Narrowphase#[undefined]": {
		   "Narrowphase#convexCapsule": {
		    "!type": "fn()"
		   },
		   "Narrowphase#circleConvex": {
		    "!type": "fn()"
		   },
		   "Narrowphase#particleConvex": {
		    "!type": "fn()"
		   },
		   "Narrowphase#planeConvex": {
		    "!type": "fn()"
		   },
		   "Narrowphase#[undefined]": {},
		   "Narrowphase#convexConvex": {
		    "!type": "fn()"
		   },
		   "Narrowphase#convexHeightfield": {
		    "!type": "fn()"
		   },
		   "Narrowphase#convexHeightfield~tileConvex": {
		    "vertices[2][1]": {},
		    "vertices[3][1]": {}
		   }
		  },
		  "<anonymous>~Narrowphase#capsuleCapsule": {
		   "prototype": {
		    "enableFriction": {}
		   }
		  },
		  "<anonymous>~Narrowphase#planeLine~verts": {
		   "0]": {},
		   "1]": {}
		  },
		  "<anonymous>~Narrowphase#circleLine~verts": {
		   "0]": {},
		   "1]": {}
		  },
		  "<anonymous>~Narrowphase#planeCapsule~circle": {
		   "radius": {}
		  },
		  "<anonymous>~Narrowphase#planeCapsule": {
		   "prototype": {
		    "enableFriction": {}
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
		     "!type": "+function"
		    },
		    "direction": {
		     "!type": "+array"
		    },
		    "length": {
		     "!type": "number"
		    },
		    "update": {
		     "!type": "fn()"
		    },
		    "intersectBodies": {
		     "!type": "fn()"
		    },
		    "intersectBody": {
		     "!type": "fn()"
		    },
		    "intersectShape": {
		     "!type": "fn()"
		    },
		    "getAABB": {
		     "!type": "fn()"
		    },
		    "reportIntersection": {
		     "!type": "fn()"
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
		  "<anonymous>~Ray#update": {
		   "prototype": {
		    "length": {}
		   }
		  },
		  "<anonymous>~Ray#intersectShape": {
		   "prototype": {
		    "_currentBody": {},
		    "_currentShape": {}
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
		    },
		    "reset": {
		     "!type": "fn()"
		    },
		    "getHitDistance": {
		     "!type": "fn()"
		    },
		    "hasHit": {
		     "!type": "fn()"
		    },
		    "getHitPoint": {
		     "!type": "fn()"
		    },
		    "stop": {
		     "!type": "fn()"
		    },
		    "shouldStop": {
		     "!type": "fn()"
		    },
		    "set": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~RaycastResult#reset": {
		   "prototype": {
		    "shape": {},
		    "body": {},
		    "faceIndex": {},
		    "fraction": {},
		    "isStopped": {}
		   }
		  },
		  "<anonymous>~RaycastResult#stop": {
		   "prototype": {
		    "isStopped": {}
		   }
		  },
		  "<anonymous>~RaycastResult#set": {
		   "prototype": {
		    "shape": {},
		    "body": {},
		    "fraction": {},
		    "faceIndex": {}
		   }
		  },
		  "<anonymous>~SAPBroadphase": {
		   "prototype": {
		    "axisList": {},
		    "axisIndex": {},
		    "_addBodyHandler": {
		     "!type": "fn()"
		    },
		    "_removeBodyHandler": {
		     "!type": "fn()"
		    },
		    "setWorld": {
		     "!type": "fn()"
		    },
		    "sortList": {
		     "!type": "fn()"
		    },
		    "getCollisionPairs": {
		     "!type": "fn()"
		    },
		    "aabbQuery": {
		     "!type": "fn()"
		    }
		   },
		   "sortAxisList": {
		    "!type": "fn()"
		   }
		  },
		  "<anonymous>~SAPBroadphase#setWorld#axisList": {
		   "length": {}
		  },
		  "<anonymous>~SAPBroadphase#setWorld": {
		   "prototype": {
		    "world": {}
		   }
		  },
		  "<anonymous>~SAPBroadphase#getCollisionPairs~result": {
		   "length": {}
		  },
		  "<anonymous>~Constraint": {
		   "prototype": {
		    "type": {
		     "!type": "number"
		    },
		    "equations": {},
		    "bodyA": {},
		    "bodyB": {},
		    "collideConnected": {},
		    "update": {
		     "!type": "fn()"
		    },
		    "setStiffness": {
		     "!type": "fn()"
		    },
		    "setRelaxation": {
		     "!type": "fn()"
		    }
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
		  "<anonymous>~Constraint#setStiffness~eq": {
		   "stiffness": {},
		   "needsUpdate": {}
		  },
		  "<anonymous>~Constraint#setRelaxation~eq": {
		   "relaxation": {},
		   "needsUpdate": {}
		  },
		  "<anonymous>~DistanceConstraint": {
		   "prototype": {
		    "localAnchorA": {},
		    "localAnchorB": {},
		    "distance": {},
		    "equations": {},
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
		    },
		    "update": {
		     "!type": "fn()"
		    },
		    "setMaxForce": {
		     "!type": "fn()"
		    },
		    "getMaxForce": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~DistanceConstraint~normal": {
		   "computeGq": {
		    "!type": "fn()"
		   }
		  },
		  "<anonymous>~DistanceConstraint#update": {
		   "prototype": {
		    "position": {},
		    "distance": {}
		   }
		  },
		  "<anonymous>~DistanceConstraint#update~normalEquation": {
		   "maxForce": {},
		   "minForce": {},
		   "enabled": {}
		  },
		  "<anonymous>~DistanceConstraint#update~G": {
		   "0]": {},
		   "1]": {},
		   "2]": {},
		   "3]": {},
		   "4]": {},
		   "5]": {}
		  },
		  "<anonymous>~DistanceConstraint#setMaxForce~normal": {
		   "minForce": {},
		   "maxForce": {}
		  },
		  "<anonymous>~GearConstraint": {
		   "prototype": {
		    "ratio": {},
		    "angle": {},
		    "equations": {},
		    "update": {
		     "!type": "fn()"
		    },
		    "setMaxTorque": {
		     "!type": "fn()"
		    },
		    "getMaxTorque": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~GearConstraint~options": {
		   "angle": {},
		   "ratio": {}
		  },
		  "<anonymous>~GearConstraint#update~eq": {
		   "angle": {}
		  },
		  "<anonymous>~LockConstraint~x": {
		   "computeGq": {
		    "!type": "fn()"
		   }
		  },
		  "<anonymous>~LockConstraint~y": {
		   "computeGq": {
		    "!type": "fn()"
		   }
		  },
		  "<anonymous>~LockConstraint~rot": {
		   "computeGq": {
		    "!type": "fn()"
		   }
		  },
		  "<anonymous>~LockConstraint": {
		   "prototype": {
		    "localOffsetB": {
		     "!type": "[?]"
		    },
		    "localAngleB": {
		     "!type": "number"
		    },
		    "setMaxForce": {
		     "!type": "fn()"
		    },
		    "getMaxForce": {
		     "!type": "fn()"
		    },
		    "update": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~LockConstraint#setMaxForce~eqs": {
		   "undefined].maxForce": {},
		   "undefined].minForce": {}
		  },
		  "<anonymous>~LockConstraint#update~x": {
		   "G[0]": {},
		   "G[1]": {},
		   "G[2]": {},
		   "G[3]": {}
		  },
		  "<anonymous>~LockConstraint#update~y": {
		   "G[0]": {},
		   "G[1]": {},
		   "G[2]": {},
		   "G[4]": {}
		  },
		  "<anonymous>~LockConstraint#update~rot": {
		   "G[0]": {},
		   "G[1]": {},
		   "G[3]": {},
		   "G[4]": {},
		   "G[5]": {}
		  },
		  "<anonymous>~PrismaticConstraint": {
		   "prototype": {
		    "localAnchorA": {},
		    "localAnchorB": {},
		    "localAxisA": {},
		    "maxForce": {},
		    "position": {},
		    "velocity": {},
		    "lowerLimitEnabled": {},
		    "upperLimitEnabled": {},
		    "lowerLimit": {},
		    "upperLimit": {},
		    "upperLimitEquation": {},
		    "lowerLimitEquation": {},
		    "motorEquation": {},
		    "motorEnabled": {},
		    "motorSpeed": {},
		    "update": {
		     "!type": "fn()"
		    },
		    "enableMotor": {
		     "!type": "fn()"
		    },
		    "disableMotor": {
		     "!type": "fn()"
		    },
		    "setLimits": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~PrismaticConstraint~trans": {
		   "computeGq": {
		    "!type": "fn()"
		   },
		   "updateJacobian": {
		    "!type": "fn()"
		   },
		   "updateJacobian~G": {
		    "0]": {},
		    "1]": {},
		    "2]": {},
		    "3]": {},
		    "4]": {},
		    "5]": {}
		   }
		  },
		  "<anonymous>~PrismaticConstraint#upperLimitEquation": {
		   "minForce": {},
		   "maxForce": {}
		  },
		  "<anonymous>~PrismaticConstraint#lowerLimitEquation": {
		   "minForce": {},
		   "maxForce": {}
		  },
		  "<anonymous>~PrismaticConstraint~motorEquation": {
		   "computeGq": {
		    "!type": "fn()"
		   },
		   "computeGW": {
		    "!type": "fn()"
		   }
		  },
		  "<anonymous>~PrismaticConstraint#update": {
		   "prototype": {
		    "position": {}
		   }
		  },
		  "<anonymous>~PrismaticConstraint#update~G": {
		   "0]": {},
		   "1]": {},
		   "2]": {},
		   "3]": {},
		   "4]": {},
		   "5]": {}
		  },
		  "<anonymous>~PrismaticConstraint#enableMotor": {
		   "prototype": {
		    "motorEnabled": {}
		   }
		  },
		  "<anonymous>~PrismaticConstraint#disableMotor": {
		   "prototype": {
		    "motorEnabled": {}
		   }
		  },
		  "<anonymous>~PrismaticConstraint#setLimits": {
		   "prototype": {
		    "lowerLimit": {},
		    "lowerLimitEnabled": {},
		    "upperLimit": {},
		    "upperLimitEnabled": {}
		   }
		  },
		  "<anonymous>~RevoluteConstraint": {
		   "prototype": {
		    "maxForce": {},
		    "pivotA": {
		     "!type": "[?]"
		    },
		    "pivotB": {
		     "!type": "[?]"
		    },
		    "equations": {},
		    "motorEquation": {},
		    "motorEnabled": {
		     "!type": "bool"
		    },
		    "angle": {},
		    "lowerLimitEnabled": {},
		    "upperLimitEnabled": {},
		    "lowerLimit": {},
		    "upperLimit": {},
		    "upperLimitEquation": {},
		    "lowerLimitEquation": {},
		    "setLimits": {
		     "!type": "fn()"
		    },
		    "update": {
		     "!type": "fn()"
		    },
		    "enableMotor": {
		     "!type": "fn()"
		    },
		    "disableMotor": {
		     "!type": "fn()"
		    },
		    "motorIsEnabled": {
		     "!type": "fn()"
		    },
		    "setMotorSpeed": {
		     "!type": "fn()"
		    },
		    "getMotorSpeed": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~RevoluteConstraint~x": {
		   "computeGq": {
		    "!type": "fn()"
		   },
		   "minForce": {},
		   "maxForce": {}
		  },
		  "<anonymous>~RevoluteConstraint~y": {
		   "computeGq": {
		    "!type": "fn()"
		   },
		   "minForce": {},
		   "maxForce": {}
		  },
		  "<anonymous>~RevoluteConstraint#upperLimitEquation": {
		   "minForce": {}
		  },
		  "<anonymous>~RevoluteConstraint#lowerLimitEquation": {
		   "maxForce": {}
		  },
		  "<anonymous>~RevoluteConstraint#setLimits": {
		   "prototype": {
		    "lowerLimit": {},
		    "lowerLimitEnabled": {},
		    "upperLimit": {},
		    "upperLimitEnabled": {}
		   }
		  },
		  "<anonymous>~RevoluteConstraint#update": {
		   "prototype": {
		    "angle": {}
		   }
		  },
		  "<anonymous>~RevoluteConstraint#update~upperLimitEquation": {
		   "angle": {}
		  },
		  "<anonymous>~RevoluteConstraint#update~lowerLimitEquation": {
		   "angle": {}
		  },
		  "<anonymous>~RevoluteConstraint#update~x": {
		   "G[0]": {},
		   "G[1]": {},
		   "G[2]": {},
		   "G[3]": {},
		   "G[4]": {},
		   "G[5]": {}
		  },
		  "<anonymous>~RevoluteConstraint#update~y": {
		   "G[0]": {},
		   "G[1]": {},
		   "G[2]": {},
		   "G[3]": {},
		   "G[4]": {},
		   "G[5]": {}
		  },
		  "<anonymous>~RevoluteConstraint#enableMotor": {
		   "prototype": {
		    "motorEnabled": {}
		   }
		  },
		  "<anonymous>~RevoluteConstraint#disableMotor": {
		   "prototype": {
		    "motorEnabled": {}
		   }
		  },
		  "<anonymous>~RevoluteConstraint#setMotorSpeed#equations[undefined]": {
		   "relativeVelocity": {}
		  },
		  "<anonymous>~AngleLockEquation": {
		   "prototype": {
		    "angle": {},
		    "ratio": {
		     "!type": "number"
		    },
		    "computeGq": {
		     "!type": "fn()"
		    },
		    "setRatio": {
		     "!type": "fn()"
		    },
		    "setMaxTorque": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~AngleLockEquation#setRatio~G": {
		   "2]": {},
		   "5]": {}
		  },
		  "<anonymous>~AngleLockEquation#setRatio": {
		   "prototype": {
		    "ratio": {}
		   }
		  },
		  "<anonymous>~AngleLockEquation#setMaxTorque": {
		   "prototype": {
		    "maxForce": {},
		    "minForce": {}
		   }
		  },
		  "<anonymous>~ContactEquation": {
		   "prototype": {
		    "contactPointA": {},
		    "penetrationVec": {},
		    "contactPointB": {},
		    "normalA": {},
		    "restitution": {},
		    "firstImpact": {},
		    "shapeA": {},
		    "shapeB": {},
		    "computeB": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~ContactEquation#computeB~G": {
		   "0]": {},
		   "1]": {},
		   "2]": {},
		   "3]": {},
		   "4]": {},
		   "5]": {}
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
		    "G[undefined]": {},
		    "offset": {},
		    "a": {},
		    "b": {},
		    "epsilon": {},
		    "timeStep": {},
		    "needsUpdate": {
		     "!type": "bool"
		    },
		    "multiplier": {},
		    "relativeVelocity": {
		     "!type": "number"
		    },
		    "enabled": {
		     "!type": "bool"
		    },
		    "update": {
		     "!type": "fn()"
		    },
		    "gmult": {
		     "!type": "fn()"
		    },
		    "computeB": {
		     "!type": "fn()"
		    },
		    "computeGq": {
		     "!type": "fn()"
		    },
		    "computeGW": {
		     "!type": "fn()"
		    },
		    "computeGWlambda": {
		     "!type": "fn()"
		    },
		    "computeGiMf": {
		     "!type": "fn()"
		    },
		    "computeGiMGt": {
		     "!type": "fn()"
		    },
		    "addToWlambda": {
		     "!type": "fn()"
		    },
		    "computeInvC": {
		     "!type": "fn()"
		    }
		   },
		   "DEFAULT_STIFFNESS": {
		    "!type": "number"
		   },
		   "DEFAULT_RELAXATION": {
		    "!type": "number"
		   }
		  },
		  "<anonymous>~Equation#update": {
		   "prototype": {
		    "a": {},
		    "b": {},
		    "epsilon": {},
		    "needsUpdate": {}
		   }
		  },
		  "<anonymous>~Equation#addToWlambda~Gi": {
		   "0]": {},
		   "1]": {}
		  },
		  "<anonymous>~Equation#addToWlambda~Gj": {
		   "0]": {},
		   "1]": {}
		  },
		  "<anonymous>~Equation#addToWlambda~bi": {
		   "wlambda": {}
		  },
		  "<anonymous>~Equation#addToWlambda~bj": {
		   "wlambda": {}
		  },
		  "<anonymous>~FrictionEquation": {
		   "prototype": {
		    "contactPointA": {},
		    "contactPointB": {},
		    "t": {},
		    "contactEquations": {},
		    "shapeA": {},
		    "shapeB": {},
		    "frictionCoefficient": {},
		    "setSlipForce": {
		     "!type": "fn()"
		    },
		    "getSlipForce": {
		     "!type": "fn()"
		    },
		    "computeB": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~FrictionEquation#setSlipForce": {
		   "prototype": {
		    "maxForce": {},
		    "minForce": {}
		   }
		  },
		  "<anonymous>~FrictionEquation#computeB~G": {
		   "0]": {},
		   "1]": {},
		   "2]": {},
		   "3]": {},
		   "4]": {},
		   "5]": {}
		  },
		  "<anonymous>~RotationalLockEquation": {
		   "prototype": {
		    "angle": {
		     "!type": "number"
		    },
		    "computeGq": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~RotationalLockEquation~G": {
		   "2]": {},
		   "5]": {}
		  },
		  "<anonymous>~RotationalVelocityEquation": {
		   "prototype": {
		    "relativeVelocity": {},
		    "ratio": {},
		    "computeB": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~RotationalVelocityEquation#computeB~G": {
		   "2]": {},
		   "5]": {}
		  },
		  "<anonymous>~EventEmitter": {
		   "prototype": {
		    "on": {
		     "!type": "fn()"
		    },
		    "has": {
		     "!type": "fn()"
		    },
		    "off": {
		     "!type": "fn()"
		    },
		    "emit": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "listener": {
		   "context": {}
		  },
		  "<anonymous>~EventEmitter#on": {
		   "prototype": {
		    "_listeners": {}
		   }
		  },
		  "<anonymous>~EventEmitter#on~listeners": {
		   "undefined]": {}
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
		   },
		   "idCounter": {}
		  },
		  "<anonymous>~Material": {
		   "prototype": {
		    "id": {}
		   },
		   "idCounter": {}
		  },
		  "<anonymous>~PolyK": {
		   "GetArea": {
		    "!type": "fn()"
		   },
		   "Triangulate": {
		    "!type": "fn()"
		   },
		   "_PointInTriangle": {
		    "!type": "fn()"
		   },
		   "_convex": {
		    "!type": "fn()"
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
		    "invMassSolve": {},
		    "invInertiaSolve": {},
		    "fixedRotation": {},
		    "fixedX": {
		     "!type": "bool"
		    },
		    "fixedY": {
		     "!type": "bool"
		    },
		    "massMultiplier": {
		     "!type": "+array"
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
		    "wantsToSleep": {},
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
		    "timeLastSleepy": {
		     "!type": "number"
		    },
		    "ccdSpeedThreshold": {
		     "!type": "number"
		    },
		    "ccdIterations": {
		     "!type": "number"
		    },
		    "concavePath": {},
		    "_wakeUpAfterNarrowphase": {},
		    "updateSolveMassProperties": {
		     "!type": "fn()"
		    },
		    "setDensity": {
		     "!type": "fn()"
		    },
		    "getArea": {
		     "!type": "fn()"
		    },
		    "getAABB": {
		     "!type": "fn()"
		    },
		    "updateAABB": {
		     "!type": "fn()"
		    },
		    "updateBoundingRadius": {
		     "!type": "fn()"
		    },
		    "addShape": {
		     "!type": "fn()"
		    },
		    "removeShape": {
		     "!type": "fn()"
		    },
		    "updateMassProperties": {
		     "!type": "fn()"
		    },
		    "applyForce": {
		     "!type": "fn()"
		    },
		    "applyForceLocal": {
		     "!type": "fn()"
		    },
		    "applyImpulse": {
		     "!type": "fn()"
		    },
		    "applyImpulseLocal": {
		     "!type": "fn()"
		    },
		    "toLocalFrame": {
		     "!type": "fn()"
		    },
		    "toWorldFrame": {
		     "!type": "fn()"
		    },
		    "vectorToLocalFrame": {
		     "!type": "fn()"
		    },
		    "vectorToWorldFrame": {
		     "!type": "fn()"
		    },
		    "fromPolygon": {
		     "!type": "fn()"
		    },
		    "adjustCenterOfMass": {
		     "!type": "fn()"
		    },
		    "setZeroForce": {
		     "!type": "fn()"
		    },
		    "resetConstraintVelocity": {
		     "!type": "fn()"
		    },
		    "addConstraintVelocity": {
		     "!type": "fn()"
		    },
		    "applyDamping": {
		     "!type": "fn()"
		    },
		    "wakeUp": {
		     "!type": "fn()"
		    },
		    "sleep": {
		     "!type": "fn()"
		    },
		    "sleepTick": {
		     "!type": "fn()"
		    },
		    "overlaps": {
		     "!type": "fn()"
		    },
		    "integrate": {
		     "!type": "fn()"
		    },
		    "integrateToTimeOfImpact": {
		     "!type": "fn()"
		    },
		    "getVelocityAtPoint": {
		     "!type": "fn()"
		    }
		   },
		   "_idCounter": {},
		   "sleepyEvent": {
		    "type": {}
		   },
		   "sleepEvent": {
		    "type": {}
		   },
		   "wakeUpEvent": {
		    "type": {}
		   },
		   "DYNAMIC": {},
		   "STATIC": {},
		   "KINEMATIC": {},
		   "AWAKE": {},
		   "SLEEPY": {},
		   "SLEEPING": {}
		  },
		  "<anonymous>~Body#updateSolveMassProperties": {
		   "prototype": {
		    "invMassSolve": {},
		    "invInertiaSolve": {}
		   }
		  },
		  "<anonymous>~Body#setDensity": {
		   "prototype": {
		    "mass": {}
		   }
		  },
		  "<anonymous>~Body#updateAABB": {
		   "prototype": {
		    "aabbNeedsUpdate": {}
		   }
		  },
		  "<anonymous>~Body#updateBoundingRadius": {
		   "prototype": {
		    "boundingRadius": {}
		   }
		  },
		  "<anonymous>~Body#addShape": {
		   "prototype": {
		    "aabbNeedsUpdate": {}
		   }
		  },
		  "<anonymous>~Body#removeShape": {
		   "prototype": {
		    "aabbNeedsUpdate": {}
		   }
		  },
		  "<anonymous>~Body#updateMassProperties": {
		   "prototype": {
		    "mass": {},
		    "invMass": {},
		    "inertia": {},
		    "invInertia": {}
		   }
		  },
		  "<anonymous>~Body#applyForce": {
		   "prototype": {
		    "angularForce": {}
		   }
		  },
		  "<anonymous>~Body#applyImpulse": {
		   "prototype": {
		    "angularVelocity": {}
		   }
		  },
		  "<anonymous>~Body#fromPolygon~p": {
		   "vertices": {}
		  },
		  "<anonymous>~Body#fromPolygon": {
		   "prototype": {
		    "concavePath": {},
		    "concavePath[undefined]": {},
		    "aabbNeedsUpdate": {}
		   }
		  },
		  "<anonymous>~Body#setZeroForce": {
		   "prototype": {
		    "angularForce": {}
		   }
		  },
		  "<anonymous>~Body#resetConstraintVelocity~b": {
		   "wlambda": {}
		  },
		  "<anonymous>~Body#addConstraintVelocity~b": {
		   "angularVelocity": {}
		  },
		  "<anonymous>~Body#applyDamping": {
		   "prototype": {
		    "angularVelocity": {}
		   }
		  },
		  "<anonymous>~Body#wakeUp": {
		   "prototype": {
		    "sleepState": {},
		    "idleTime": {}
		   }
		  },
		  "<anonymous>~Body#sleep": {
		   "prototype": {
		    "sleepState": {},
		    "angularVelocity": {},
		    "angularForce": {}
		   }
		  },
		  "<anonymous>~Body#sleepTick": {
		   "prototype": {
		    "wantsToSleep": {},
		    "idleTime": {},
		    "sleepState": {}
		   }
		  },
		  "<anonymous>~Body#integrate": {
		   "prototype": {
		    "previousAngle": {},
		    "angularVelocity": {},
		    "angle": {},
		    "aabbNeedsUpdate": {}
		   }
		  },
		  "<anonymous>~ray": {
		   "callback": {
		    "!type": "fn()"
		   }
		  },
		  "<anonymous>~Body#integrateToTimeOfImpact": {
		   "prototype": {
		    "angle": {}
		   }
		  },
		  "<anonymous>~LinearSpring": {
		   "prototype": {
		    "localAnchorA": {},
		    "localAnchorB": {},
		    "restLength": {},
		    "setWorldAnchorA": {
		     "!type": "fn()"
		    },
		    "setWorldAnchorB": {
		     "!type": "fn()"
		    },
		    "getWorldAnchorA": {
		     "!type": "fn()"
		    },
		    "getWorldAnchorB": {
		     "!type": "fn()"
		    },
		    "applyForce": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~LinearSpring#applyForce~bodyA": {
		   "angularForce": {}
		  },
		  "<anonymous>~LinearSpring#applyForce~bodyB": {
		   "angularForce": {}
		  },
		  "<anonymous>~RotationalSpring": {
		   "prototype": {
		    "restAngle": {},
		    "applyForce": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~RotationalSpring#applyForce~bodyA": {
		   "angularForce": {}
		  },
		  "<anonymous>~RotationalSpring#applyForce~bodyB": {
		   "angularForce": {}
		  },
		  "<anonymous>~Spring": {
		   "prototype": {
		    "stiffness": {},
		    "damping": {},
		    "bodyA": {},
		    "bodyB": {},
		    "applyForce": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~TopDownVehicle": {
		   "prototype": {
		    "chassisBody": {
		     "!type": "+Body"
		    },
		    "wheels": {
		     "!type": "[?]"
		    },
		    "groundBody": {},
		    "world": {},
		    "preStepCallback": {
		     "!type": "fn()"
		    },
		    "addToWorld": {
		     "!type": "fn()"
		    },
		    "removeFromWorld": {
		     "!type": "fn()"
		    },
		    "addWheel": {
		     "!type": "fn()"
		    },
		    "update": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~TopDownVehicle#addToWorld": {
		   "prototype": {
		    "world": {}
		   }
		  },
		  "<anonymous>~TopDownVehicle#removeFromWorld": {
		   "prototype": {
		    "world": {}
		   }
		  },
		  "<anonymous>~WheelConstraint": {
		   "prototype": {
		    "vehicle": {},
		    "forwardEquation": {},
		    "sideEquation": {},
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
		    },
		    "setBrakeForce": {
		     "!type": "fn()"
		    },
		    "setSideFriction": {
		     "!type": "fn()"
		    },
		    "getSpeed": {
		     "!type": "fn()"
		    },
		    "update": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~Box~options": {
		   "width": {},
		   "height": {},
		   "vertices": {},
		   "axes": {},
		   "type": {}
		  },
		  "<anonymous>~Box": {
		   "prototype": {
		    "width": {},
		    "height": {},
		    "computeMomentOfInertia": {
		     "!type": "fn()"
		    },
		    "updateBoundingRadius": {
		     "!type": "fn()"
		    },
		    "computeAABB": {
		     "!type": "fn()"
		    },
		    "updateArea": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~Box#updateBoundingRadius": {
		   "prototype": {
		    "boundingRadius": {}
		   }
		  },
		  "<anonymous>~Box#updateArea": {
		   "prototype": {
		    "area": {}
		   }
		  },
		  "<anonymous>~Capsule~options": {
		   "length": {},
		   "radius": {},
		   "type": {}
		  },
		  "<anonymous>~Capsule": {
		   "prototype": {
		    "length": {
		     "!type": "number"
		    },
		    "radius": {
		     "!type": "number"
		    },
		    "computeMomentOfInertia": {
		     "!type": "fn()"
		    },
		    "updateBoundingRadius": {
		     "!type": "fn()"
		    },
		    "updateArea": {
		     "!type": "fn()"
		    },
		    "computeAABB": {
		     "!type": "fn()"
		    },
		    "raycast": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~Capsule#updateBoundingRadius": {
		   "prototype": {
		    "boundingRadius": {}
		   }
		  },
		  "<anonymous>~Capsule#updateArea": {
		   "prototype": {
		    "area": {}
		   }
		  },
		  "<anonymous>~Circle~options": {
		   "radius": {},
		   "type": {}
		  },
		  "<anonymous>~Circle": {
		   "prototype": {
		    "radius": {},
		    "computeMomentOfInertia": {
		     "!type": "fn()"
		    },
		    "updateBoundingRadius": {
		     "!type": "fn()"
		    },
		    "updateArea": {
		     "!type": "fn()"
		    },
		    "computeAABB": {
		     "!type": "fn()"
		    },
		    "raycast": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~Circle#updateBoundingRadius": {
		   "prototype": {
		    "boundingRadius": {}
		   }
		  },
		  "<anonymous>~Circle#updateArea": {
		   "prototype": {
		    "area": {}
		   }
		  },
		  "<anonymous>~Convex~options": {
		   "vertices": {},
		   "axes": {},
		   "type": {}
		  },
		  "<anonymous>~Convex": {
		   "prototype": {
		    "vertices": {},
		    "axes": {},
		    "centerOfMass": {},
		    "triangles": {},
		    "boundingRadius": {},
		    "projectOntoLocalAxis": {
		     "!type": "fn()"
		    },
		    "projectOntoWorldAxis": {
		     "!type": "fn()"
		    },
		    "updateTriangles": {
		     "!type": "fn()"
		    },
		    "updateCenterOfMass": {
		     "!type": "fn()"
		    },
		    "computeMomentOfInertia": {
		     "!type": "fn()"
		    },
		    "updateBoundingRadius": {
		     "!type": "fn()"
		    },
		    "updateArea": {
		     "!type": "fn()"
		    },
		    "computeAABB": {
		     "!type": "fn()"
		    },
		    "raycast": {
		     "!type": "fn()"
		    }
		   },
		   "triangleArea": {
		    "!type": "fn()"
		   }
		  },
		  "<anonymous>~Convex#updateTriangles#triangles": {
		   "length": {}
		  },
		  "<anonymous>~Convex#updateBoundingRadius": {
		   "prototype": {
		    "boundingRadius": {}
		   }
		  },
		  "<anonymous>~Convex#updateArea": {
		   "prototype": {
		    "area": {}
		   }
		  },
		  "<anonymous>~Heightfield~options": {
		   "heights": {},
		   "undefined]": {},
		   "type": {}
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
		    },
		    "updateMaxMinValues": {
		     "!type": "fn()"
		    },
		    "computeMomentOfInertia": {
		     "!type": "fn()"
		    },
		    "updateBoundingRadius": {
		     "!type": "fn()"
		    },
		    "updateArea": {
		     "!type": "fn()"
		    },
		    "computeAABB": {
		     "!type": "fn()"
		    },
		    "getLineSegment": {
		     "!type": "fn()"
		    },
		    "getSegmentIndex": {
		     "!type": "fn()"
		    },
		    "getClampedSegmentIndex": {
		     "!type": "fn()"
		    },
		    "raycast": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~Heightfield#updateMaxMinValues": {
		   "prototype": {
		    "maxValue": {},
		    "minValue": {}
		   }
		  },
		  "<anonymous>~Heightfield#updateBoundingRadius": {
		   "prototype": {
		    "boundingRadius": {}
		   }
		  },
		  "<anonymous>~Heightfield#updateArea": {
		   "prototype": {
		    "area": {}
		   }
		  },
		  "<anonymous>~Line~options": {
		   "length": {},
		   "type": {}
		  },
		  "<anonymous>~Line#updateBoundingRadius": {
		   "prototype": {
		    "boundingRadius": {}
		   }
		  },
		  "<anonymous>~Particle~options": {
		   "type": {}
		  },
		  "<anonymous>~Particle": {
		   "prototype": {
		    "computeMomentOfInertia": {
		     "!type": "fn()"
		    },
		    "updateBoundingRadius": {
		     "!type": "fn()"
		    },
		    "computeAABB": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~Particle#updateBoundingRadius": {
		   "prototype": {
		    "boundingRadius": {}
		   }
		  },
		  "<anonymous>~Plane~options": {
		   "type": {}
		  },
		  "<anonymous>~Plane": {
		   "prototype": {
		    "computeMomentOfInertia": {
		     "!type": "fn()"
		    },
		    "updateBoundingRadius": {
		     "!type": "fn()"
		    },
		    "computeAABB": {
		     "!type": "fn()"
		    },
		    "updateArea": {
		     "!type": "fn()"
		    },
		    "raycast": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~Plane#updateBoundingRadius": {
		   "prototype": {
		    "boundingRadius": {}
		   }
		  },
		  "<anonymous>~Plane#updateArea": {
		   "prototype": {
		    "area": {}
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
		    },
		    "computeMomentOfInertia": {
		     "!type": "fn()"
		    },
		    "updateBoundingRadius": {
		     "!type": "fn()"
		    },
		    "updateArea": {
		     "!type": "fn()"
		    },
		    "computeAABB": {
		     "!type": "fn()"
		    },
		    "raycast": {
		     "!type": "fn()"
		    }
		   },
		   "idCounter": {},
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
		    "arrayStep": {},
		    "lambda": {},
		    "Bs": {},
		    "invCs": {},
		    "useZeroRHS": {},
		    "frictionIterations": {},
		    "usedIterations": {
		     "!type": "number"
		    },
		    "solve": {
		     "!type": "fn()"
		    }
		   },
		   "updateMultipliers": {
		    "!type": "fn()"
		   },
		   "iterateEquation": {
		    "!type": "fn()"
		   }
		  },
		  "<anonymous>~GSSolver#solve": {
		   "prototype": {
		    "usedIterations": {},
		    "lambda": {},
		    "Bs": {},
		    "invCs": {}
		   }
		  },
		  "<anonymous>~GSSolver#solve~c": {
		   "timeStep": {}
		  },
		  "<anonymous>~GSSolver#solve~Bs": {
		   "undefined]": {}
		  },
		  "<anonymous>~GSSolver#solve~invCs": {
		   "undefined]": {}
		  },
		  "<anonymous>~GSSolver#solve~eq": {
		   "maxForce": {},
		   "minForce": {}
		  },
		  "equations[undefined]": {
		   "multiplier": {}
		  },
		  "<anonymous>~Solver": {
		   "prototype": {
		    "type": {},
		    "equations": {},
		    "equationSortFunction": {},
		    "solve": {
		     "!type": "fn()"
		    },
		    "solveIsland": {
		     "!type": "fn()"
		    },
		    "sortEquations": {
		     "!type": "fn()"
		    },
		    "addEquation": {
		     "!type": "fn()"
		    },
		    "addEquations": {
		     "!type": "fn()"
		    },
		    "removeEquation": {
		     "!type": "fn()"
		    },
		    "removeAllEquations": {
		     "!type": "fn()"
		    }
		   },
		   "GS": {},
		   "ISLAND": {}
		  },
		  "<anonymous>~mockWorld": {
		   "bodies": {},
		   "bodies.length": {}
		  },
		  "<anonymous>~Solver#removeAllEquations#equations": {
		   "length": {}
		  },
		  "<anonymous>~ContactEquationPool": {
		   "prototype": {
		    "create": {
		     "!type": "fn()"
		    },
		    "destroy": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "equation": {
		   "bodyA": {},
		   "bodyB": {}
		  },
		  "<anonymous>~FrictionEquationPool": {
		   "prototype": {
		    "create": {
		     "!type": "fn()"
		    },
		    "destroy": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~IslandNodePool": {
		   "prototype": {
		    "create": {
		     "!type": "fn()"
		    },
		    "destroy": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~IslandPool": {
		   "prototype": {
		    "create": {
		     "!type": "fn()"
		    },
		    "destroy": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~OverlapKeeper": {
		   "prototype": {
		    "overlappingShapesLastState": {},
		    "overlappingShapesCurrentState": {},
		    "recordPool": {},
		    "tmpDict": {},
		    "tmpArray1": {},
		    "tick": {
		     "!type": "fn()"
		    },
		    "setOverlapping": {
		     "!type": "fn()"
		    },
		    "getNewOverlaps": {
		     "!type": "fn()"
		    },
		    "getEndOverlaps": {
		     "!type": "fn()"
		    },
		    "bodiesAreOverlapping": {
		     "!type": "fn()"
		    },
		    "getDiff": {
		     "!type": "fn()"
		    },
		    "isNewOverlap": {
		     "!type": "fn()"
		    },
		    "getNewBodyOverlaps": {
		     "!type": "fn()"
		    },
		    "getEndBodyOverlaps": {
		     "!type": "fn()"
		    },
		    "getBodyDiff": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~OverlapKeeper#getDiff~result": {
		   "length": {}
		  },
		  "<anonymous>~OverlapKeeper#getNewBodyOverlaps#tmpArray1": {
		   "length": {}
		  },
		  "<anonymous>~OverlapKeeper#getEndBodyOverlaps#tmpArray1": {
		   "length": {}
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
		    },
		    "set": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~OverlapKeeperRecordPool": {
		   "prototype": {
		    "create": {
		     "!type": "fn()"
		    },
		    "destroy": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "record": {
		   "bodyA": {
		    "record.shapeA": {}
		   },
		   "bodyB": {
		    "record.shapeB": {}
		   }
		  },
		  "<anonymous>~Pool": {
		   "prototype": {
		    "objects": {
		     "!type": "[?]"
		    },
		    "resize": {
		     "!type": "fn()"
		    },
		    "get": {
		     "!type": "fn()"
		    },
		    "release": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~TupleDictionary": {
		   "prototype": {
		    "data": {},
		    "keys": {
		     "!type": "[?]"
		    },
		    "getKey": {
		     "!type": "fn()"
		    },
		    "getByKey": {
		     "!type": "fn()"
		    },
		    "get": {
		     "!type": "fn()"
		    },
		    "set": {
		     "!type": "fn()"
		    },
		    "reset": {
		     "!type": "fn()"
		    },
		    "copy": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~TupleDictionary#set": {
		   "prototype": {
		    "data[undefined]": {}
		   }
		  },
		  "<anonymous>~TupleDictionary#reset~keys": {
		   "length": {}
		  },
		  "<anonymous>~TupleDictionary#copy": {
		   "prototype": {
		    "data[undefined]": {}
		   }
		  },
		  "<anonymous>~Utils": {
		   "appendArray": {
		    "!type": "fn()"
		   },
		   "splice": {
		    "!type": "fn()"
		   },
		   "ARRAY_TYPE": {},
		   "extend": {
		    "!type": "fn()"
		   },
		   "defaults": {
		    "!type": "fn()"
		   },
		   "defaults~options": {
		    "undefined]": {}
		   }
		  },
		  "array": {
		   "length": {}
		  },
		  "<anonymous>~Island": {
		   "prototype": {
		    "equations": {},
		    "bodies": {},
		    "reset": {
		     "!type": "fn()"
		    },
		    "getBodies": {
		     "!type": "fn()"
		    },
		    "wantsToSleep": {
		     "!type": "fn()"
		    },
		    "sleep": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~Island#reset#equations": {
		   "length": {}
		  },
		  "<anonymous>~Island#reset#bodies": {
		   "length": {}
		  },
		  "<anonymous>~bodyIds": {
		   "length": {}
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
		    },
		    "queue": {
		     "!type": "[?]"
		    },
		    "visit": {
		     "!type": "fn()"
		    },
		    "bfs": {
		     "!type": "fn()"
		    },
		    "split": {
		     "!type": "fn()"
		    }
		   },
		   "getUnvisitedNode": {
		    "!type": "fn()"
		   }
		  },
		  "<anonymous>~IslandManager#bfs~queue": {
		   "length": {}
		  },
		  "root": {
		   "visited": {}
		  },
		  "<anonymous>~IslandManager#bfs~child": {
		   "visited": {}
		  },
		  "<anonymous>~IslandManager#split~node": {
		   "body": {}
		  },
		  "<anonymous>~IslandManager#split~islands": {
		   "length": {}
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
		    "visited": {},
		    "reset": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "<anonymous>~IslandNode#reset#equations": {
		   "length": {}
		  },
		  "<anonymous>~IslandNode#reset#neighbors": {
		   "length": {}
		  },
		  "<anonymous>~IslandNode#reset": {
		   "prototype": {
		    "visited": {},
		    "body": {}
		   }
		  },
		  "<anonymous>~World": {
		   "prototype": {
		    "springs": {},
		    "bodies": {
		     "!type": "[?]"
		    },
		    "disabledBodyCollisionPairs": {
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
		    "accumulator": {},
		    "stepping": {
		     "!type": "bool"
		    },
		    "bodiesToBeRemoved": {
		     "!type": "[?]"
		    },
		    "islandSplit": {
		     "!type": "bool"
		    },
		    "emitImpactEvent": {},
		    "_constraintIdCounter": {},
		    "_bodyIdCounter": {},
		    "postStepEvent": {},
		    "addBodyEvent": {},
		    "removeBodyEvent": {},
		    "addSpringEvent": {},
		    "impactEvent": {},
		    "postBroadphaseEvent": {},
		    "sleepMode": {},
		    "beginContactEvent": {},
		    "endContactEvent": {},
		    "preSolveEvent": {},
		    "overlappingShapesLastState": {},
		    "overlappingShapesCurrentState": {},
		    "overlapKeeper": {
		     "!type": "+OverlapKeeper"
		    },
		    "addConstraint": {
		     "!type": "fn()"
		    },
		    "addContactMaterial": {
		     "!type": "fn()"
		    },
		    "removeContactMaterial": {
		     "!type": "fn()"
		    },
		    "getContactMaterial": {
		     "!type": "fn()"
		    },
		    "removeConstraint": {
		     "!type": "fn()"
		    },
		    "step": {
		     "!type": "fn()"
		    },
		    "internalStep": {
		     "!type": "fn()"
		    },
		    "runNarrowphase": {
		     "!type": "fn()"
		    },
		    "addSpring": {
		     "!type": "fn()"
		    },
		    "removeSpring": {
		     "!type": "fn()"
		    },
		    "addBody": {
		     "!type": "fn()"
		    },
		    "removeBody": {
		     "!type": "fn()"
		    },
		    "getBodyById": {
		     "!type": "fn()"
		    },
		    "disableBodyCollision": {
		     "!type": "fn()"
		    },
		    "enableBodyCollision": {
		     "!type": "fn()"
		    },
		    "clear": {
		     "!type": "fn()"
		    },
		    "hitTest": {
		     "!type": "fn()"
		    },
		    "setGlobalStiffness": {
		     "!type": "fn()"
		    },
		    "setGlobalRelaxation": {
		     "!type": "fn()"
		    },
		    "raycast": {
		     "!type": "fn()"
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
		  "<anonymous>~World#postStepEvent": {
		   "type": {}
		  },
		  "<anonymous>~World#addBodyEvent": {
		   "type": {},
		   "body": {}
		  },
		  "<anonymous>~World#removeBodyEvent": {
		   "type": {},
		   "body": {}
		  },
		  "<anonymous>~World#addSpringEvent": {
		   "type": {},
		   "spring": {}
		  },
		  "<anonymous>~World#impactEvent": {
		   "type": {},
		   "bodyA": {},
		   "bodyB": {},
		   "shapeA": {},
		   "shapeB": {},
		   "contactEquation": {}
		  },
		  "<anonymous>~World#postBroadphaseEvent": {
		   "type": {},
		   "pairs": {}
		  },
		  "<anonymous>~World#beginContactEvent": {
		   "type": {},
		   "shapeA": {},
		   "shapeB": {},
		   "bodyA": {},
		   "bodyB": {},
		   "contactEquations": {}
		  },
		  "<anonymous>~World#endContactEvent": {
		   "type": {},
		   "shapeA": {},
		   "shapeB": {},
		   "bodyA": {},
		   "bodyB": {}
		  },
		  "<anonymous>~World#preSolveEvent": {
		   "type": {},
		   "contactEquations": {},
		   "frictionEquations": {}
		  },
		  "<anonymous>~World#overlappingShapesLastState": {
		   "keys": {}
		  },
		  "<anonymous>~World#overlappingShapesCurrentState": {
		   "keys": {}
		  },
		  "<anonymous>~World#step": {
		   "prototype": {
		    "time": {},
		    "accumulator": {}
		   }
		  },
		  "<anonymous>~World#step~b": {
		   "interpolatedAngle": {}
		  },
		  "<anonymous>~World#internalStep": {
		   "prototype": {
		    "stepping": {},
		    "lastTimeStep": {},
		    "frictionGravity": {}
		   }
		  },
		  "<anonymous>~World#internalStep#postBroadphaseEvent": {
		   "pairs": {}
		  },
		  "<anonymous>~World#internalStep~body": {
		   "_wakeUpAfterNarrowphase": {}
		  },
		  "<anonymous>~World#internalStep~e": {
		   "shapeA": {},
		   "shapeB": {},
		   "bodyA": {},
		   "bodyB": {}
		  },
		  "<anonymous>~endOverlaps": {
		   "length": {}
		  },
		  "<anonymous>~World#internalStep~preSolveEvent": {
		   "contactEquations": {},
		   "frictionEquations": {}
		  },
		  "<anonymous>~World#internalStep~islandManager": {
		   "equations.length": {}
		  },
		  "<anonymous>~World#internalStep~ev": {
		   "bodyA": {},
		   "bodyB": {},
		   "shapeA": {},
		   "shapeB": {},
		   "contactEquation": {}
		  },
		  "<anonymous>~World#internalStep~bodiesToBeRemoved": {
		   "length": {}
		  },
		  "np": {
		   "enableFriction": {},
		   "frictionCoefficient": {},
		   "slipForce": {},
		   "restitution": {},
		   "surfaceVelocity": {},
		   "frictionStiffness": {},
		   "frictionRelaxation": {},
		   "stiffness": {},
		   "relaxation": {},
		   "contactSkinSize": {},
		   "enabledEquations": {}
		  },
		  "bi": {
		   "_wakeUpAfterNarrowphase": {}
		  },
		  "bj": {
		   "_wakeUpAfterNarrowphase": {}
		  },
		  "<anonymous>~World#runNarrowphase~e": {
		   "shapeA": {},
		   "shapeB": {},
		   "bodyA": {},
		   "bodyB": {},
		   "contactEquations.length": {}
		  },
		  "<anonymous>~World#addSpring~evt": {
		   "spring": {}
		  },
		  "<anonymous>~World#addBody~evt": {
		   "body": {}
		  },
		  "<anonymous>~World#removeBody#removeBodyEvent": {
		   "body": {}
		  },
		  "<anonymous>~World#clear": {
		   "prototype": {
		    "time": {}
		   }
		  },
		  "<anonymous>~World#setGlobalStiffness~eq": {
		   "stiffness": {},
		   "needsUpdate": {}
		  },
		  "<anonymous>~World#setGlobalStiffness~c": {
		   "stiffness": {},
		   "frictionStiffness": {}
		  },
		  "<anonymous>~World#setGlobalRelaxation~eq": {
		   "relaxation": {},
		   "needsUpdate": {}
		  },
		  "<anonymous>~World#setGlobalRelaxation~c": {
		   "relaxation": {},
		   "frictionRelaxation": {}
		  },
		  "<anonymous>~tmpArray": {
		   "length": {}
		  },
		  "p2": {
		   "Body": {
		    "prototype": {
		     "parent": {}
		    }
		   },
		   "Spring": {
		    "prototype": {
		     "parent": {}
		    }
		   }
		  },
		  "world": {
		   "defaultContactMaterial": {
		    "friction": {},
		    "restitution": {}
		   },
		   "applySpringForces": {},
		   "applyDamping": {},
		   "applyGravity": {},
		   "solveConstraints": {},
		   "emitImpactEvent": {},
		   "sleepMode": {}
		  },
		  "_mask": {
		   "isMask": {}
		  },
		  "_filterBlock": {
		   "target": {},
		   "filterPasses": {}
		  },
		  "renderSession": {
		   "currentBlendMode": {},
		   "context": {
		    "globalCompositeOperation": {},
		    "globalAlpha": {}
		   },
		   "scaleMode": {},
		   "context[undefined]": {},
		   "spriteBatch": {
		    "currentBlendMode": {}
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
		   "_UID": {},
		   "Float32Array": {},
		   "Uint16Array": {},
		   "Uint32Array": {},
		   "ArrayBuffer": {},
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
		   "defaultRenderOptions": {
		    "view": {},
		    "transparent": {},
		    "antialias": {},
		    "preserveDrawingBuffer": {},
		    "resolution": {},
		    "clearBeforeRender": {},
		    "autoResize": {}
		   },
		   "Graphics": {
		    "!type": "fn()",
		    "prototype": {
		     "renderable": {},
		     "fillAlpha": {},
		     "lineWidth": {},
		     "lineColor": {},
		     "graphicsData": {},
		     "tint": {},
		     "blendMode": {},
		     "currentPath": {},
		     "_webGL": {},
		     "isMask": {},
		     "boundsPadding": {},
		     "_localBounds": {},
		     "dirty": {},
		     "webGLDirty": {},
		     "cachedSpriteDirty": {}
		    }
		   },
		   "Graphics#constructor": {},
		   "Graphics#lineStyle": {
		    "!type": "fn()",
		    "prototype": {
		     "lineWidth": {},
		     "lineColor": {},
		     "lineAlpha": {}
		    }
		   },
		   "Graphics#lineStyle#currentPath": {
		    "lineWidth": {},
		    "lineColor": {},
		    "lineAlpha": {}
		   },
		   "Graphics#moveTo": {
		    "!type": "fn()"
		   },
		   "Graphics#lineTo": {
		    "!type": "fn()",
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "Graphics#quadraticCurveTo": {
		    "!type": "fn()",
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "Graphics#quadraticCurveTo#currentPath": {
		    "shape": {
		     "points": {}
		    }
		   },
		   "Graphics#bezierCurveTo": {
		    "!type": "fn()",
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "Graphics#bezierCurveTo#currentPath": {
		    "shape": {
		     "points": {}
		    }
		   },
		   "Graphics#arcTo": {
		    "!type": "fn()",
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "Graphics#arc": {
		    "!type": "fn()",
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "Graphics#beginFill": {
		    "!type": "fn()",
		    "prototype": {
		     "filling": {},
		     "fillColor": {},
		     "fillAlpha": {}
		    }
		   },
		   "Graphics#beginFill#currentPath": {
		    "fill": {},
		    "fillColor": {},
		    "fillAlpha": {}
		   },
		   "Graphics#endFill": {
		    "!type": "fn()",
		    "prototype": {
		     "filling": {},
		     "fillColor": {},
		     "fillAlpha": {}
		    }
		   },
		   "Graphics#drawRect": {
		    "!type": "fn()"
		   },
		   "Graphics#drawRoundedRect": {
		    "!type": "fn()"
		   },
		   "Graphics#drawCircle": {
		    "!type": "fn()"
		   },
		   "Graphics#drawEllipse": {
		    "!type": "fn()"
		   },
		   "Graphics#drawPolygon": {
		    "!type": "fn()"
		   },
		   "Graphics#drawPolygon~points": {
		    "undefined]": {}
		   },
		   "Graphics#clear": {
		    "!type": "fn()",
		    "prototype": {
		     "lineWidth": {},
		     "filling": {},
		     "dirty": {},
		     "clearDirty": {},
		     "graphicsData": {}
		    }
		   },
		   "Graphics#generateTexture": {
		    "!type": "fn()"
		   },
		   "Graphics#generateTexture~texture": {
		    "baseTexture.resolution": {}
		   },
		   "Graphics#_renderWebGL": {
		    "!type": "fn()",
		    "prototype": {
		     "cachedSpriteDirty": {},
		     "dirty": {},
		     "webGLDirty": {}
		    }
		   },
		   "Graphics#_renderWebGL#_cachedSprite": {
		    "worldAlpha": {}
		   },
		   "Graphics#_renderCanvas": {
		    "!type": "fn()",
		    "prototype": {
		     "dirty": {},
		     "_prevTint": {},
		     "cachedSpriteDirty": {}
		    }
		   },
		   "Graphics#_renderCanvas#_cachedSprite": {
		    "alpha": {}
		   },
		   "Graphics#_renderCanvas~context": {
		    "globalCompositeOperation": {}
		   },
		   "Graphics#getBounds": {
		    "!type": "fn()",
		    "prototype": {
		     "webGLDirty": {},
		     "cachedSpriteDirty": {},
		     "dirty": {},
		     "_currentBounds": {}
		    }
		   },
		   "Graphics#getBounds#_bounds": {
		    "x": {},
		    "width": {},
		    "y": {},
		    "height": {}
		   },
		   "Graphics#containsPoint": {
		    "!type": "fn(point: +Point) -> ?"
		   },
		   "Graphics#updateLocalBounds": {
		    "!type": "fn()"
		   },
		   "Graphics#updateLocalBounds#_localBounds": {
		    "x": {},
		    "width": {},
		    "y": {},
		    "height": {}
		   },
		   "Graphics#_generateCachedSprite": {
		    "!type": "fn()",
		    "prototype": {
		     "_cachedSprite": {},
		     "worldAlpha": {}
		    }
		   },
		   "Graphics#_generateCachedSprite#_cachedSprite": {
		    "buffer": {},
		    "worldTransform": {},
		    "anchor": {
		     "x": {},
		     "y": {}
		    },
		    "alpha": {}
		   },
		   "Graphics#updateCachedSpriteTexture": {
		    "!type": "fn()"
		   },
		   "Graphics#updateCachedSpriteTexture~texture": {
		    "baseTexture.width": {},
		    "baseTexture.height": {},
		    "crop.width": {},
		    "frame.width": {},
		    "crop.height": {},
		    "frame.height": {}
		   },
		   "Graphics#updateCachedSpriteTexture~cachedSprite": {
		    "_width": {},
		    "_height": {}
		   },
		   "Graphics#destroyCachedSprite": {
		    "!type": "fn()",
		    "prototype": {
		     "_cachedSprite": {}
		    }
		   },
		   "Graphics#drawShape": {
		    "!type": "fn()",
		    "prototype": {
		     "currentPath": {},
		     "dirty": {}
		    }
		   },
		   "Graphics#drawShape~data": {
		    "shape.closed": {}
		   },
		   "GraphicsData#constructor": {},
		   "GraphicsData#clone": {
		    "!type": "fn() -> ?"
		   },
		   "CanvasGraphics": {
		    "!type": "fn()",
		    "updateGraphicsTint~data": {
		     "_fillTint": {},
		     "_lineTint": {}
		    }
		   },
		   "CanvasGraphics.renderGraphics": {
		    "!type": "fn()"
		   },
		   "CanvasGraphics.renderGraphicsMask": {
		    "!type": "fn()"
		   },
		   "CanvasGraphics.updateGraphicsTint": {
		    "!type": "fn()"
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
		   "defaultRenderer": {},
		   "CanvasRenderer#view": {
		    "width": {},
		    "height": {}
		   },
		   "CanvasRenderer#renderSession": {
		    "context": {},
		    "maskManager": {},
		    "scaleMode": {},
		    "smoothProperty": {},
		    "roundPixels": {}
		   },
		   "CanvasRenderer#constructor": {},
		   "CanvasRenderer#render": {
		    "!type": "fn()"
		   },
		   "CanvasRenderer#render#context": {
		    "globalAlpha": {},
		    "globalCompositeOperation": {},
		    "fillStyle": {}
		   },
		   "CanvasRenderer#render#renderSession": {
		    "currentBlendMode": {}
		   },
		   "CanvasRenderer#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "view": {},
		     "context": {},
		     "maskManager": {},
		     "renderSession": {}
		    }
		   },
		   "CanvasRenderer#resize": {
		    "!type": "fn()",
		    "prototype": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "CanvasRenderer#resize#view": {
		    "width": {},
		    "height": {},
		    "style": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "CanvasRenderer#renderDisplayObject": {
		    "!type": "fn()"
		   },
		   "CanvasRenderer#renderDisplayObject#renderSession": {
		    "context": {},
		    "resolution": {}
		   },
		   "CanvasRenderer#mapBlendModes": {
		    "!type": "fn()"
		   },
		   "blendModesCanvas": {},
		   "blendModesCanvas[undefined]": {},
		   "CanvasBuffer": {
		    "!type": "fn(width: number, height: number)",
		    "prototype": {
		     "width": {},
		     "height": {},
		     "canvas": {},
		     "context": {}
		    }
		   },
		   "CanvasBuffer#canvas": {
		    "width": {},
		    "height": {}
		   },
		   "CanvasBuffer#constructor": {},
		   "CanvasBuffer#clear": {
		    "!type": "fn()"
		   },
		   "CanvasBuffer#resize": {
		    "!type": "fn()",
		    "prototype": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "CanvasBuffer#resize#canvas": {
		    "width": {},
		    "height": {}
		   },
		   "CanvasBuffer#destroy": {
		    "!type": "fn()"
		   },
		   "CanvasMaskManager": {
		    "!type": "fn()"
		   },
		   "CanvasMaskManager#constructor": {},
		   "CanvasMaskManager#pushMask": {
		    "!type": "fn()"
		   },
		   "CanvasMaskManager#popMask": {
		    "!type": "fn()"
		   },
		   "CanvasTinter": {
		    "!type": "fn()",
		    "tintWithMultiply~context": {
		     "fillStyle": {},
		     "globalCompositeOperation": {}
		    },
		    "tintWithPerPixel~context": {
		     "globalCompositeOperation": {}
		    },
		    "tintWithPerPixel~pixels": {
		     "undefined]": {}
		    },
		    "checkInverseAlpha~canvas": {
		     "context.fillStyle": {}
		    },
		    "canHandleAlpha": {},
		    "canUseMultiply": {}
		   },
		   "CanvasTinter.getTintedTexture": {
		    "!type": "fn()"
		   },
		   "CanvasTinter.tintWithMultiply": {
		    "!type": "fn()"
		   },
		   "CanvasTinter.tintWithPerPixel": {
		    "!type": "fn()"
		   },
		   "CanvasTinter.checkInverseAlpha": {
		    "!type": "fn()"
		   },
		   "CanvasTinter.tintMethod": {},
		   "ComplexPrimitiveShader": {
		    "!type": "fn(gl: +WebGLContext)",
		    "prototype": {
		     "_UID": {},
		     "gl": {},
		     "program": {},
		     "fragmentSrc": {},
		     "vertexSrc": {}
		    }
		   },
		   "ComplexPrimitiveShader#constructor": {},
		   "ComplexPrimitiveShader#init": {
		    "!type": "fn()",
		    "prototype": {
		     "projectionVector": {},
		     "offsetVector": {},
		     "tintColor": {},
		     "color": {},
		     "flipY": {},
		     "aVertexPosition": {},
		     "attributes": {},
		     "translationMatrix": {},
		     "alpha": {},
		     "program": {}
		    }
		   },
		   "ComplexPrimitiveShader#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "uniforms": {},
		     "gl": {},
		     "attribute": {}
		    }
		   },
		   "PixiFastShader": {
		    "!type": "fn(gl: +WebGLContext)",
		    "prototype": {
		     "_UID": {},
		     "gl": {},
		     "program": {},
		     "fragmentSrc": {},
		     "vertexSrc": {},
		     "textureCount": {}
		    }
		   },
		   "PixiFastShader#constructor": {},
		   "PixiFastShader#init": {
		    "!type": "fn()",
		    "prototype": {
		     "uSampler": {},
		     "projectionVector": {},
		     "offsetVector": {},
		     "dimensions": {},
		     "uMatrix": {},
		     "aVertexPosition": {},
		     "aPositionCoord": {},
		     "aScale": {},
		     "aRotation": {},
		     "aTextureCoord": {},
		     "colorAttribute": {},
		     "attributes": {},
		     "program": {}
		    }
		   },
		   "PixiFastShader#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "uniforms": {},
		     "gl": {},
		     "attributes": {}
		    }
		   },
		   "PixiShader": {
		    "!type": "fn(gl: +WebGLContext)",
		    "prototype": {
		     "_UID": {},
		     "gl": {},
		     "program": {},
		     "fragmentSrc": {},
		     "textureCount": {},
		     "firstRun": {},
		     "dirty": {},
		     "attributes": {}
		    }
		   },
		   "PixiShader#constructor": {},
		   "PixiShader#init": {
		    "!type": "fn()",
		    "prototype": {
		     "uSampler": {},
		     "projectionVector": {},
		     "offsetVector": {},
		     "dimensions": {},
		     "aVertexPosition": {},
		     "aTextureCoord": {},
		     "colorAttribute": {},
		     "attributes": {},
		     "program": {}
		    }
		   },
		   "PixiShader#init#uniforms[undefined]": {
		    "uniformLocation": {}
		   },
		   "PixiShader#initUniforms": {
		    "!type": "fn()",
		    "prototype": {
		     "textureCount": {}
		    }
		   },
		   "PixiShader#initUniforms~uniform": {
		    "_init": {},
		    "glMatrix": {},
		    "glValueLength": {},
		    "glFunc": {}
		   },
		   "PixiShader#initSampler2D": {
		    "!type": "fn()"
		   },
		   "PixiShader#syncUniforms": {
		    "!type": "fn()",
		    "prototype": {
		     "textureCount": {}
		    }
		   },
		   "PixiShader#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "uniforms": {},
		     "gl": {},
		     "attributes": {}
		    }
		   },
		   "PixiShader.defaultVertexSrc": {},
		   "PrimitiveShader": {
		    "!type": "fn(gl: +WebGLContext)",
		    "prototype": {
		     "_UID": {},
		     "gl": {},
		     "program": {},
		     "fragmentSrc": {},
		     "vertexSrc": {}
		    }
		   },
		   "PrimitiveShader#constructor": {},
		   "PrimitiveShader#init": {
		    "!type": "fn()",
		    "prototype": {
		     "projectionVector": {},
		     "offsetVector": {},
		     "tintColor": {},
		     "flipY": {},
		     "aVertexPosition": {},
		     "colorAttribute": {},
		     "attributes": {},
		     "translationMatrix": {},
		     "alpha": {},
		     "program": {}
		    }
		   },
		   "PrimitiveShader#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "uniforms": {},
		     "gl": {},
		     "attributes": {}
		    }
		   },
		   "StripShader": {
		    "!type": "fn(gl: +WebGLContext)",
		    "prototype": {
		     "_UID": {},
		     "gl": {},
		     "program": {},
		     "fragmentSrc": {},
		     "vertexSrc": {}
		    }
		   },
		   "StripShader#constructor": {},
		   "StripShader#init": {
		    "!type": "fn()",
		    "prototype": {
		     "uSampler": {},
		     "projectionVector": {},
		     "offsetVector": {},
		     "colorAttribute": {},
		     "aVertexPosition": {},
		     "aTextureCoord": {},
		     "attributes": {},
		     "translationMatrix": {},
		     "alpha": {},
		     "program": {}
		    }
		   },
		   "StripShader#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "uniforms": {},
		     "gl": {},
		     "attribute": {}
		    }
		   },
		   "FilterTexture": {
		    "!type": "fn(gl: +WebGLContext, width: number, height: number, scaleMode: number)",
		    "prototype": {
		     "gl": {},
		     "frameBuffer": {},
		     "texture": {},
		     "renderBuffer": {}
		    }
		   },
		   "FilterTexture#constructor": {},
		   "FilterTexture#clear": {
		    "!type": "fn()"
		   },
		   "FilterTexture#resize": {
		    "!type": "fn()",
		    "prototype": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "FilterTexture#destroy": {
		    "!type": "fn()",
		    "prototype": {
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
		   "WebGLBlendModeManager#constructor": {},
		   "WebGLBlendModeManager#setContext": {
		    "!type": "fn()",
		    "prototype": {
		     "gl": {}
		    }
		   },
		   "WebGLBlendModeManager#setBlendMode": {
		    "!type": "fn()",
		    "prototype": {
		     "currentBlendMode": {}
		    }
		   },
		   "WebGLBlendModeManager#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "gl": {}
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
		     "indices[undefined]": {},
		     "drawing": {},
		     "currentBatchSize": {},
		     "currentBaseTexture": {},
		     "currentBlendMode": {},
		     "renderSession": {},
		     "shader": {},
		     "matrix": {}
		    }
		   },
		   "WebGLFastSpriteBatch#constructor": {},
		   "WebGLFastSpriteBatch#setContext": {
		    "!type": "fn()",
		    "prototype": {
		     "gl": {},
		     "vertexBuffer": {},
		     "indexBuffer": {}
		    }
		   },
		   "WebGLFastSpriteBatch#begin": {
		    "!type": "fn()",
		    "prototype": {
		     "renderSession": {},
		     "shader": {},
		     "matrix": {}
		    }
		   },
		   "WebGLFastSpriteBatch#end": {
		    "!type": "fn()"
		   },
		   "WebGLFastSpriteBatch#render": {
		    "!type": "fn()",
		    "prototype": {
		     "currentBaseTexture": {}
		    }
		   },
		   "WebGLFastSpriteBatch#renderSprite": {
		    "!type": "fn()",
		    "prototype": {
		     "currentBaseTexture": {}
		    }
		   },
		   "WebGLFastSpriteBatch#renderSprite~vertices": {
		    "undefined]": {}
		   },
		   "WebGLFastSpriteBatch#flush": {
		    "!type": "fn()",
		    "prototype": {
		     "currentBatchSize": {}
		    }
		   },
		   "WebGLFastSpriteBatch#stop": {
		    "!type": "fn()"
		   },
		   "WebGLFastSpriteBatch#start": {
		    "!type": "fn()"
		   },
		   "WebGLFilterManager": {
		    "!type": "fn()",
		    "prototype": {
		     "filterStack": {},
		     "offsetX": {},
		     "offsetY": {}
		    }
		   },
		   "WebGLFilterManager#constructor": {},
		   "WebGLFilterManager#setContext": {
		    "!type": "fn()",
		    "prototype": {
		     "gl": {},
		     "texturePool": {}
		    }
		   },
		   "WebGLFilterManager#begin": {
		    "!type": "fn()",
		    "prototype": {
		     "renderSession": {},
		     "defaultShader": {},
		     "width": {},
		     "height": {},
		     "buffer": {}
		    }
		   },
		   "WebGLFilterManager#pushFilter": {
		    "!type": "fn()",
		    "prototype": {
		     "offsetX": {},
		     "offsetY": {}
		    }
		   },
		   "WebGLFilterManager#pushFilter~filterArea": {
		    "x": {},
		    "y": {},
		    "width": {},
		    "height": {}
		   },
		   "WebGLFilterManager#pushFilter~projection": {
		    "x": {},
		    "y": {}
		   },
		   "WebGLFilterManager#pushFilter~offset": {
		    "x": {},
		    "y": {}
		   },
		   "WebGLFilterManager#popFilter": {
		    "!type": "fn()",
		    "prototype": {
		     "vertexArray[0]": {},
		     "vertexArray[1]": {},
		     "vertexArray[2]": {},
		     "vertexArray[3]": {},
		     "vertexArray[4]": {},
		     "vertexArray[5]": {},
		     "vertexArray[6]": {},
		     "vertexArray[7]": {},
		     "uvArray[2]": {},
		     "uvArray[5]": {},
		     "uvArray[6]": {},
		     "uvArray[7]": {},
		     "offsetX": {},
		     "offsetY": {}
		    }
		   },
		   "WebGLFilterManager#popFilter~projection": {
		    "x": {},
		    "y": {}
		   },
		   "WebGLFilterManager#popFilter~offset": {
		    "x": {},
		    "y": {}
		   },
		   "WebGLFilterManager#popFilter~filterBlock": {
		    "_glFilterTexture": {}
		   },
		   "WebGLFilterManager#applyFilterPass": {
		    "!type": "fn()"
		   },
		   "WebGLFilterManager#applyFilterPass~shader": {
		    "fragmentSrc": {},
		    "uniforms": {}
		   },
		   "WebGLFilterManager#initShaderBuffers": {
		    "!type": "fn()",
		    "prototype": {
		     "vertexBuffer": {},
		     "uvBuffer": {},
		     "colorBuffer": {},
		     "indexBuffer": {},
		     "vertexArray": {},
		     "uvArray": {},
		     "colorArray": {}
		    }
		   },
		   "WebGLFilterManager#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "filterStack": {},
		     "offsetX": {},
		     "offsetY": {},
		     "texturePool": {}
		    }
		   },
		   "WebGLGraphics": {
		    "!type": "fn()",
		    "updateGraphics~webGL": {
		     "data": {},
		     "lastIndex": {}
		    },
		    "updateGraphics~data": {
		     "points": {}
		    },
		    "switchMode~webGLData": {
		     "mode": {},
		     "dirty": {}
		    },
		    "quadraticBezierCurve": {
		     "getPt": {
		      "!type": "fn()"
		     }
		    },
		    "buildLine~points": {
		     "undefined]": {}
		    }
		   },
		   "WebGLGraphics.renderGraphics": {
		    "!type": "fn()"
		   },
		   "WebGLGraphics.updateGraphics": {
		    "!type": "fn()"
		   },
		   "WebGLGraphics.switchMode": {
		    "!type": "fn()"
		   },
		   "WebGLGraphics.buildRectangle": {
		    "!type": "fn()"
		   },
		   "WebGLGraphics.buildRoundedRectangle": {
		    "!type": "fn()"
		   },
		   "WebGLGraphics.quadraticBezierCurve": {
		    "!type": "fn()"
		   },
		   "WebGLGraphics.buildCircle": {
		    "!type": "fn()"
		   },
		   "WebGLGraphics.buildLine": {
		    "!type": "fn()"
		   },
		   "WebGLGraphics.buildComplexPoly": {
		    "!type": "fn()"
		   },
		   "WebGLGraphics.buildPoly": {
		    "!type": "fn()"
		   },
		   "WebGLGraphics.graphicsDataPool": {},
		   "WebGLGraphicsData": {
		    "!type": "fn()",
		    "prototype": {
		     "gl": {},
		     "color": {},
		     "points": {},
		     "indices": {},
		     "buffer": {},
		     "indexBuffer": {},
		     "mode": {},
		     "alpha": {},
		     "dirty": {}
		    }
		   },
		   "WebGLGraphicsData#reset": {
		    "!type": "fn()",
		    "prototype": {
		     "points": {},
		     "indices": {}
		    }
		   },
		   "WebGLGraphicsData#upload": {
		    "!type": "fn()",
		    "prototype": {
		     "glPoints": {},
		     "glIndicies": {},
		     "dirty": {}
		    }
		   },
		   "WebGLMaskManager": {
		    "!type": "fn()"
		   },
		   "WebGLMaskManager#constructor": {},
		   "WebGLMaskManager#setContext": {
		    "!type": "fn()",
		    "prototype": {
		     "gl": {}
		    }
		   },
		   "WebGLMaskManager#pushMask": {
		    "!type": "fn()"
		   },
		   "WebGLMaskManager#popMask": {
		    "!type": "fn()"
		   },
		   "WebGLMaskManager#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "gl": {}
		    }
		   },
		   "WebGLShaderManager": {
		    "!type": "fn()",
		    "prototype": {
		     "maxAttibs": {},
		     "attribState": {},
		     "tempAttribState": {},
		     "attribState[undefined]": {},
		     "stack": {}
		    }
		   },
		   "WebGLShaderManager#constructor": {},
		   "WebGLShaderManager#setContext": {
		    "!type": "fn()",
		    "prototype": {
		     "gl": {},
		     "primitiveShader": {},
		     "complexPrimitiveShader": {},
		     "defaultShader": {},
		     "fastShader": {},
		     "stripShader": {}
		    }
		   },
		   "WebGLShaderManager#setAttribs": {
		    "!type": "fn()",
		    "prototype": {
		     "tempAttribState[undefined]": {},
		     "attribState[undefined]": {}
		    }
		   },
		   "WebGLShaderManager#setShader": {
		    "!type": "fn()",
		    "prototype": {
		     "_currentId": {},
		     "currentShader": {}
		    }
		   },
		   "WebGLShaderManager#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "attribState": {},
		     "tempAttribState": {},
		     "gl": {}
		    }
		   },
		   "initDefaultShaders": {
		    "!type": "fn()"
		   },
		   "CompileVertexShader": {
		    "!type": "fn()"
		   },
		   "CompileFragmentShader": {
		    "!type": "fn()"
		   },
		   "_CompileShader": {
		    "!type": "fn()"
		   },
		   "compileProgram": {
		    "!type": "fn()"
		   },
		   "WebGLSpriteBatch": {
		    "!type": "fn()",
		    "prototype": {
		     "vertSize": {},
		     "size": {},
		     "vertices": {},
		     "positions": {},
		     "colors": {},
		     "indices": {},
		     "lastIndexCount": {},
		     "indices[undefined]": {},
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
		   "WebGLSpriteBatch#setContext": {
		    "!type": "fn()",
		    "prototype": {
		     "gl": {},
		     "vertexBuffer": {},
		     "indexBuffer": {},
		     "currentBlendMode": {}
		    }
		   },
		   "WebGLSpriteBatch#setContext~shader": {
		    "fragmentSrc": {},
		    "uniforms": {}
		   },
		   "WebGLSpriteBatch#setContext#defaultShader": {
		    "shaders[undefined]": {}
		   },
		   "WebGLSpriteBatch#begin": {
		    "!type": "fn()",
		    "prototype": {
		     "renderSession": {},
		     "shader": {}
		    }
		   },
		   "WebGLSpriteBatch#end": {
		    "!type": "fn()"
		   },
		   "WebGLSpriteBatch#render": {
		    "!type": "fn()",
		    "prototype": {
		     "currentBaseTexture": {},
		     "sprites[undefined]": {}
		    }
		   },
		   "WebGLSpriteBatch#render~positions": {
		    "undefined]": {}
		   },
		   "WebGLSpriteBatch#render~colors": {
		    "undefined]": {
		     "colors[undefined]": {}
		    }
		   },
		   "WebGLSpriteBatch#renderTilingSprite": {
		    "!type": "fn()",
		    "prototype": {
		     "currentBaseTexture": {},
		     "sprites[undefined]": {}
		    }
		   },
		   "WebGLSpriteBatch#renderTilingSprite~uvs": {
		    "x0": {},
		    "y0": {},
		    "x1": {},
		    "y1": {},
		    "x2": {},
		    "y2": {},
		    "x3": {},
		    "y3": {}
		   },
		   "WebGLSpriteBatch#renderTilingSprite~positions": {
		    "undefined]": {}
		   },
		   "WebGLSpriteBatch#renderTilingSprite~colors": {
		    "undefined]": {}
		   },
		   "WebGLSpriteBatch#flush": {
		    "!type": "fn()",
		    "prototype": {
		     "dirty": {},
		     "currentBatchSize": {}
		    }
		   },
		   "WebGLSpriteBatch#flush~shader": {
		    "fragmentSrc": {},
		    "uniforms": {}
		   },
		   "WebGLSpriteBatch#flush~currentShader": {
		    "shaders[undefined]": {}
		   },
		   "WebGLSpriteBatch#renderBatch": {
		    "!type": "fn()"
		   },
		   "WebGLSpriteBatch#stop": {
		    "!type": "fn()",
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "WebGLSpriteBatch#start": {
		    "!type": "fn()",
		    "prototype": {
		     "dirty": {}
		    }
		   },
		   "WebGLSpriteBatch#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "vertices": {},
		     "indices": {},
		     "currentBaseTexture": {},
		     "gl": {}
		    }
		   },
		   "WebGLStencilManager": {
		    "!type": "fn()",
		    "prototype": {
		     "stencilStack": {},
		     "reverse": {},
		     "count": {}
		    }
		   },
		   "WebGLStencilManager#setContext": {
		    "!type": "fn()",
		    "prototype": {
		     "gl": {}
		    }
		   },
		   "WebGLStencilManager#pushStencil": {
		    "!type": "fn()",
		    "prototype": {
		     "reverse": {},
		     "count": {}
		    }
		   },
		   "WebGLStencilManager#bindGraphics": {
		    "!type": "fn()",
		    "prototype": {
		     "_currentGraphics": {}
		    }
		   },
		   "WebGLStencilManager#popStencil": {
		    "!type": "fn()",
		    "prototype": {
		     "reverse": {}
		    }
		   },
		   "WebGLStencilManager#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "stencilStack": {},
		     "gl": {}
		    }
		   },
		   "glContexts": {},
		   "instances": {},
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
		     "_contextOptions": {},
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
		   "WebGLRenderer#_contextOptions": {
		    "alpha": {},
		    "antialias": {},
		    "premultipliedAlpha": {},
		    "stencil": {},
		    "preserveDrawingBuffer": {}
		   },
		   "WebGLRenderer#renderSession": {
		    "gl": {},
		    "drawCount": {},
		    "shaderManager": {},
		    "maskManager": {},
		    "filterManager": {},
		    "blendModeManager": {},
		    "spriteBatch": {},
		    "stencilManager": {},
		    "renderer": {},
		    "resolution": {}
		   },
		   "WebGLRenderer#constructor": {},
		   "WebGLRenderer#initContext": {
		    "!type": "fn()",
		    "prototype": {
		     "gl": {},
		     "glContextId": {}
		    }
		   },
		   "WebGLRenderer#initContext~gl": {
		    "id": {}
		   },
		   "glContexts[undefined]": {},
		   "instances[undefined]": {},
		   "WebGLRenderer#initContext#renderSession": {
		    "gl": {}
		   },
		   "WebGLRenderer#render": {
		    "!type": "fn()",
		    "prototype": {
		     "__stage": {}
		    }
		   },
		   "WebGLRenderer#renderDisplayObject": {
		    "!type": "fn()"
		   },
		   "WebGLRenderer#renderDisplayObject#renderSession": {
		    "drawCount": {},
		    "flipY": {},
		    "projection": {},
		    "offset": {}
		   },
		   "WebGLRenderer#resize": {
		    "!type": "fn()",
		    "prototype": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "WebGLRenderer#resize#view": {
		    "width": {},
		    "height": {},
		    "style": {
		     "width": {},
		     "height": {}
		    }
		   },
		   "WebGLRenderer#resize#projection": {
		    "x": {},
		    "y": {}
		   },
		   "WebGLRenderer#updateTexture": {
		    "!type": "fn()"
		   },
		   "WebGLRenderer#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "projection": {},
		     "offset": {},
		     "shaderManager": {},
		     "spriteBatch": {},
		     "maskManager": {},
		     "filterManager": {},
		     "gl": {},
		     "renderSession": {}
		    }
		   },
		   "WebGLRenderer#mapBlendModes": {
		    "!type": "fn()"
		   },
		   "blendModesWebGL": {},
		   "blendModesWebGL[undefined]": {},
		   "WebGLRenderer.glContextId": {},
		   "BaseTextureCache": {},
		   "BaseTextureCacheIdGenerator": {},
		   "BaseTexture": {
		    "!type": "fn(source: string, scaleMode: number)",
		    "prototype": {
		     "resolution": {},
		     "width": {},
		     "height": {},
		     "scaleMode": {},
		     "hasLoaded": {},
		     "source": {},
		     "_UID": {},
		     "premultipliedAlpha": {},
		     "_glTextures": {},
		     "mipmap": {},
		     "_dirty": {},
		     "imageUrl": {},
		     "_powerOf2": {}
		    },
		    "fromImage~image": {
		     "crossOrigin": {},
		     "src": {}
		    },
		    "fromImage~baseTexture": {
		     "imageUrl": {},
		     "resolution": {}
		    }
		   },
		   "BaseTexture#constructor": {},
		   "BaseTexture#forceLoaded": {
		    "!type": "fn()",
		    "prototype": {
		     "hasLoaded": {},
		     "width": {},
		     "height": {}
		    }
		   },
		   "BaseTexture#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "imageUrl": {},
		     "source": {}
		    }
		   },
		   "BaseTexture#destroy#source": {
		    "src": {}
		   },
		   "BaseTexture#updateSourceImage": {
		    "!type": "fn()",
		    "prototype": {
		     "hasLoaded": {}
		    }
		   },
		   "BaseTexture#updateSourceImage#source": {
		    "src": {}
		   },
		   "BaseTexture#dirty": {
		    "!type": "fn()",
		    "prototype": {
		     "_dirty[undefined]": {}
		    }
		   },
		   "BaseTexture#unloadFromGPU": {
		    "!type": "fn()"
		   },
		   "BaseTexture#unloadFromGPU#_glTextures": {
		    "length": {}
		   },
		   "BaseTexture.fromImage": {
		    "!type": "fn()"
		   },
		   "BaseTextureCache[undefined]": {},
		   "BaseTexture.fromCanvas": {
		    "!type": "fn()"
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
		     "textureBuffer": {},
		     "render": {},
		     "projection": {},
		     "valid": {},
		     "tempMatrix": {}
		    }
		   },
		   "RenderTexture#baseTexture": {
		    "width": {},
		    "height": {},
		    "_glTextures": {},
		    "resolution": {},
		    "scaleMode": {},
		    "hasLoaded": {},
		    "_dirty[undefined]": {},
		    "_glTextures[undefined]": {},
		    "source": {}
		   },
		   "RenderTexture#constructor": {},
		   "RenderTexture#resize": {
		    "!type": "fn()",
		    "prototype": {
		     "valid": {},
		     "width": {},
		     "height": {}
		    }
		   },
		   "RenderTexture#resize#frame": {
		    "width": {},
		    "height": {}
		   },
		   "RenderTexture#resize#crop": {
		    "width": {},
		    "height": {}
		   },
		   "RenderTexture#resize#baseTexture": {
		    "width": {},
		    "height": {}
		   },
		   "RenderTexture#resize#projection": {
		    "x": {},
		    "y": {}
		   },
		   "RenderTexture#clear": {
		    "!type": "fn()"
		   },
		   "RenderTexture#renderWebGL": {
		    "!type": "fn()"
		   },
		   "RenderTexture#renderWebGL#renderer": {
		    "spriteBatch": {
		     "dirty": {}
		    }
		   },
		   "RenderTexture#renderCanvas": {
		    "!type": "fn()"
		   },
		   "RenderTexture#renderCanvas#renderer": {
		    "resolution": {}
		   },
		   "RenderTexture#getImage": {
		    "!type": "fn()"
		   },
		   "RenderTexture#getImage~image": {
		    "src": {}
		   },
		   "RenderTexture#getBase64": {
		    "!type": "fn()"
		   },
		   "RenderTexture#getCanvas": {
		    "!type": "fn()"
		   },
		   "TextureCache": {},
		   "FrameCache": {},
		   "TextureSilentFail": {},
		   "TextureCacheIdGenerator": {},
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
		     "_uvs": {},
		     "width": {},
		     "height": {},
		     "crop": {}
		    }
		   },
		   "Texture#constructor": {},
		   "Texture#onBaseTextureLoaded": {
		    "!type": "fn()",
		    "prototype": {
		     "frame": {}
		    }
		   },
		   "Texture#destroy": {
		    "!type": "fn()",
		    "prototype": {
		     "valid": {}
		    }
		   },
		   "Texture#setFrame": {
		    "!type": "fn()",
		    "prototype": {
		     "noFrame": {},
		     "frame": {},
		     "width": {},
		     "height": {},
		     "valid": {}
		    }
		   },
		   "Texture#setFrame#crop": {
		    "x": {},
		    "y": {},
		    "width": {},
		    "height": {}
		   },
		   "Texture#setFrame#frame": {
		    "width": {},
		    "height": {}
		   },
		   "Texture#_updateUvs": {
		    "!type": "fn()",
		    "prototype": {
		     "_uvs": {}
		    }
		   },
		   "Texture#_updateUvs#_uvs": {
		    "x0": {},
		    "y0": {},
		    "x1": {},
		    "y1": {},
		    "x2": {},
		    "y2": {},
		    "x3": {},
		    "y3": {}
		   },
		   "Texture.fromImage": {
		    "!type": "fn()"
		   },
		   "TextureCache[undefined]": {},
		   "Texture.fromFrame": {
		    "!type": "fn()"
		   },
		   "Texture.fromCanvas": {
		    "!type": "fn()"
		   },
		   "Texture.addTextureToCache": {
		    "!type": "fn()"
		   },
		   "Texture.removeTextureFromCache": {
		    "!type": "fn()"
		   },
		   "TextureUvs": {
		    "!type": "fn()",
		    "prototype": {
		     "x0": {},
		     "y0": {},
		     "x1": {},
		     "y1": {},
		     "x2": {},
		     "y2": {},
		     "x3": {},
		     "y3": {}
		    }
		   },
		   "CanvasPool": {
		    "create": {
		     "!type": "fn()"
		    },
		    "create~container": {
		     "parent": {},
		     "canvas": {}
		    },
		    "create~canvas": {
		     "width": {},
		     "height": {}
		    },
		    "getFirst": {
		     "!type": "fn()"
		    },
		    "remove": {
		     "!type": "fn()"
		    },
		    "remove~pool": {
		     "undefined].parent": {}
		    },
		    "removeByCanvas": {
		     "!type": "fn()"
		    },
		    "removeByCanvas~pool": {
		     "undefined].parent": {}
		    },
		    "getTotal": {
		     "!type": "fn()"
		    },
		    "getFree": {
		     "!type": "fn()"
		    },
		    "pool": {}
		   },
		   "CanvasPool.pool[undefined].parent": {},
		   "EventTarget": {
		    "call": {
		     "!type": "fn()"
		    },
		    "mixin": {
		     "!type": "fn()"
		    }
		   },
		   "Event": {
		    "!type": "fn(target: ?, name: string, data: ?)",
		    "prototype": {
		     "__isEventObject": {},
		     "stopped": {},
		     "stoppedImmediate": {},
		     "target": {},
		     "type": {},
		     "data": {},
		     "content": {},
		     "timeStamp": {}
		    }
		   },
		   "Event#stopPropagation": {
		    "!type": "fn()",
		    "prototype": {
		     "stopped": {}
		    }
		   },
		   "Event#stopImmediatePropagation": {
		    "!type": "fn()",
		    "prototype": {
		     "stoppedImmediate": {}
		    }
		   },
		   "PolyK": {},
		   "PolyK.Triangulate": {
		    "!type": "fn()"
		   },
		   "PolyK._PointInTriangle": {
		    "!type": "fn()"
		   },
		   "PolyK._convex": {
		    "!type": "fn()"
		   },
		   "hex2rgb": {
		    "!type": "fn()"
		   },
		   "rgb2hex": {
		    "!type": "fn()"
		   },
		   "canUseNewCanvasBlendModes": {
		    "!type": "fn()"
		   },
		   "canUseNewCanvasBlendModes~magenta": {
		    "src": {}
		   },
		   "canUseNewCanvasBlendModes~yellow": {
		    "src": {}
		   },
		   "canUseNewCanvasBlendModes~context": {
		    "globalCompositeOperation": {}
		   },
		   "getNextPowerOfTwo": {
		    "!type": "fn()"
		   },
		   "isPowerOfTwo": {
		    "!type": "fn()"
		   },
		   "blendModes": {},
		   "scaleModes": {},
		   "Texture.emptyTexture": {},
		   "DisplayObject._tempMatrix": {},
		   "RenderTexture.tempMatrix": {},
		   "Graphics.POLY": {},
		   "Graphics.RECT": {},
		   "Graphics.CIRC": {},
		   "Graphics.ELIP": {},
		   "Graphics.RREC": {}
		  },
		  "graphics": {
		   "dirty": {},
		   "_webGL[undefined]": {
		    "lastIndex": {},
		    "data": {},
		    "gl": {}
		   },
		   "clearDirty": {}
		  },
		  "maskData": {
		   "worldAlpha": {}
		  },
		  "canvas": {
		   "width": {},
		   "height": {},
		   "_pixiId": {},
		   "style": {
		    "backgroundColor": {},
		    "msTouchAction": {},
		    "'ms-touch-action'": {},
		    "'touch-action'": {},
		    "'-webkit-touch-callout'": {},
		    "'-webkit-user-select'": {},
		    "'-khtml-user-select'": {},
		    "'-moz-user-select'": {},
		    "'-ms-user-select'": {},
		    "'user-select'": {},
		    "'-webkit-tap-highlight-color'": {},
		    "'image-rendering'": {},
		    "msInterpolationMode": {}
		   }
		  },
		  "uniform": {
		   "_init": {}
		  },
		  "filterBlock": {
		   "_filterArea": {},
		   "_glFilterTexture": {}
		  },
		  "filter": {
		   "shaders[undefined]": {},
		   "uniforms": {
		    "dimensions": {
		     "value[0]": {},
		     "value[1]": {},
		     "value[2]": {},
		     "value[3]": {}
		    }
		   }
		  },
		  "graphicsData": {
		   "points": {}
		  },
		  "webGLData": {
		   "points": {},
		   "alpha": {},
		   "color": {}
		  },
		  "texture": {
		   "_glTextures[undefined]": {},
		   "_dirty[undefined]": {}
		  },
		  "obj": {
		   "listeners": {
		    "!type": "fn()",
		    "prototype": {
		     "_listeners": {}
		    }
		   },
		   "emit": {},
		   "dispatchEvent": {
		    "!type": "fn()",
		    "prototype": {
		     "_listeners": {}
		    }
		   },
		   "on": {},
		   "addEventListener": {
		    "!type": "fn()",
		    "prototype": {
		     "_listeners": {},
		     "_listeners[undefined]": {}
		    }
		   },
		   "once": {
		    "!type": "fn()",
		    "prototype": {
		     "_listeners": {}
		    },
		    "onceHandlerWrapper": {
		     "!type": "fn()"
		    }
		   },
		   "once~onceHandlerWrapper": {
		    "_originalHandler": {}
		   },
		   "off": {},
		   "removeEventListener": {
		    "!type": "fn()",
		    "prototype": {
		     "_listeners": {}
		    }
		   },
		   "removeAllListeners": {
		    "!type": "fn()",
		    "prototype": {
		     "_listeners": {}
		    }
		   }
		  },
		  "Math": {
		   "trunc": {
		    "!type": "fn()"
		   }
		  },
		  "Function": {
		   "prototype": {
		    "bind": {}
		   }
		  },
		  "Array": {
		   "isArray": {
		    "!type": "fn()"
		   },
		   "prototype": {
		    "forEach": {
		     "!type": "fn()"
		    }
		   }
		  },
		  "window[undefined]": {},
		  "gainNode": {
		   "gain": {
		    "value": {}
		   }
		  },
		  "_sound": {
		   "volume": {}
		  },
		  "masterGain": {
		   "gain": {
		    "value": {}
		   }
		  },
		  "_sounds[undefined]": {
		   "volume": {}
		  },
		  "<anonymous>~canvas": {
		   "screencanvas": {}
		  },
		  "navigator": {
		   "getUserMedia": {},
		   "vibrate": {}
		  },
		  "value": {
		   "index": {}
		  },
		  "point": {
		   "x": {},
		   "y": {}
		  },
		  "_mc": {
		   "cw": {},
		   "ch": {}
		  },
		  "arguments[undefined]": {
		   "chainedTween": {}
		  },
		  "tween": {
		   "_manager": {}
		  },
		  "out": {
		   "rgba": {},
		   "color": {},
		   "color32": {}
		  },
		  "item": {
		   "prev": {
		    "next": {}
		   },
		   "next": {
		    "prev": {}
		   }
		  }
		 };
});