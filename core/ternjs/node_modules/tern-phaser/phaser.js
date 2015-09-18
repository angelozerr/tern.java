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
  "emitEvent": {
   "type": {
    "!type": "string"
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
   "!doc": "An Animation instance contains a single animation and the controls to play it.\n\nIt is created by the AnimationManager, consists of Animation.Frame objects and belongs to a single Game Object such as a Sprite.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running Game."
    },
    "name": {
     "!type": "string",
     "!doc": "The user defined name given to this Animation."
    },
    "delay": {
     "!type": "number",
     "!doc": "The delay in ms between each frame of the Animation, based on the given frameRate."
    },
    "loop": {
     "!type": "bool",
     "!doc": "The loop state of the Animation."
    },
    "loopCount": {
     "!type": "number",
     "!doc": "The number of times the animation has looped since it was last started."
    },
    "killOnComplete": {
     "!type": "bool",
     "!doc": "Should the parent of this Animation be killed when the animation completes?"
    },
    "isFinished": {
     "!type": "bool",
     "!doc": "The finished state of the Animation. Set to true once playback completes, false during playback."
    },
    "isPlaying": {
     "!type": "bool",
     "!doc": "The playing state of the Animation. Set to false once playback completes, true during playback."
    },
    "isPaused": {
     "!type": "bool",
     "!doc": "The paused state of the Animation."
    },
    "currentFrame": {
     "!type": "+Phaser.Frame",
     "!doc": "The currently displayed frame of the Animation."
    },
    "onStart": {
     "!type": "+Phaser.Signal",
     "!doc": "This event is dispatched when this Animation starts playback."
    },
    "onUpdate": {
     "!type": "+Phaser.Signal|+null"
    },
    "onComplete": {
     "!type": "+Phaser.Signal",
     "!doc": "This event is dispatched when this Animation completes playback. If the animation is set to loop this is never fired, listen for onAnimationLoop instead."
    },
    "onLoop": {
     "!type": "+Phaser.Signal",
     "!doc": "This event is dispatched when this Animation loops."
    },
    "play": {
     "!type": "fn(frameRate: number, loop: bool, killOnComplete: bool) -> +Phaser.Animation",
     "!doc": "Plays this animation."
    },
    "restart": {
     "!type": "fn()",
     "!doc": "Sets this animation back to the first frame and restarts the animation."
    },
    "setFrame": {
     "!type": "fn(frameId: string|number, useLocalFrameIndex: bool)",
     "!doc": "Sets this animations playback to a given frame with the given ID."
    },
    "stop": {
     "!type": "fn(resetFrame: bool, dispatchComplete: bool)",
     "!doc": "Stops playback of this animation and set it to a finished state. If a resetFrame is provided it will stop playback and set frame to the first in the animation.\nIf `dispatchComplete` is true it will dispatch the complete events, otherwise they'll be ignored."
    },
    "onPause": {
     "!type": "fn()",
     "!doc": "Called when the Game enters a paused state."
    },
    "onResume": {
     "!type": "fn()",
     "!doc": "Called when the Game resumes from a paused state."
    },
    "update": {
     "!type": "fn()",
     "!doc": "Updates this animation. Called automatically by the AnimationManager."
    },
    "next": {
     "!type": "fn(quantity: number)",
     "!doc": "Advances by the given number of frames in the Animation, taking the loop value into consideration."
    },
    "previous": {
     "!type": "fn(quantity: number)",
     "!doc": "Moves backwards the given number of frames in the Animation, taking the loop value into consideration."
    },
    "updateFrameData": {
     "!type": "fn(frameData: +Phaser.FrameData)",
     "!doc": "Changes the FrameData object this Animation is using."
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "Cleans up this animation ready for deletion. Nulls all values and references."
    },
    "complete": {
     "!type": "fn()",
     "!doc": "Called internally when the animation finishes playback.\nSets the isPlaying and isFinished states and dispatches the onAnimationComplete event if it exists on the parent and local onComplete event."
    },
    "paused": {
     "!type": "bool",
     "!doc": "Gets and sets the paused state of this Animation."
    },
    "frameTotal": {
     "!type": "number",
     "!doc": "The total number of frames in the currently loaded FrameData, or -1 if no FrameData is loaded."
    },
    "frame": {
     "!type": "number",
     "!doc": "Gets or sets the current frame index and updates the Texture Cache for display."
    },
    "speed": {
     "!type": "number",
     "!doc": "Gets or sets the current speed of the animation in frames per second. Changing this in a playing animation will take effect from the next frame. Minimum value is 1."
    },
    "enableUpdate": {
     "!type": "bool",
     "!doc": "Gets or sets if this animation will dispatch the onUpdate events upon changing frame."
    }
   },
   "generateFrameNames": {
    "!type": "fn(prefix: string, start: number, stop: number, suffix: string, zeroPad: number) -> [?]",
    "!doc": "Really handy function for when you are creating arrays of animation data but it's using frame names and not numbers.\nFor example imagine you've got 30 frames named: 'explosion_0001-large' to 'explosion_0030-large'\nYou could use this function to generate those by doing: Phaser.Animation.generateFrameNames('explosion_', 1, 30, '-large', 4);"
   }
  },
  "AnimationManager": {
   "!type": "fn(sprite: +Phaser.Sprite)",
   "!doc": "The Animation Manager is used to add, play and update Phaser Animations.\nAny Game Object such as Phaser.Sprite that supports animation contains a single AnimationManager instance.",
   "prototype": {
    "sprite": {
     "!type": "+Phaser.Sprite",
     "!doc": "A reference to the parent Sprite that owns this AnimationManager."
    },
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running Game."
    },
    "currentFrame": {
     "!type": "+Phaser.Frame"
    },
    "currentAnim": {
     "!type": "+Phaser.Animation",
     "!doc": "The currently displayed animation, if any."
    },
    "updateIfVisible": {
     "!type": "bool",
     "!doc": "Should the animation data continue to update even if the Sprite.visible is set to false."
    },
    "isLoaded": {
     "!type": "bool",
     "!doc": "Set to true once animation data has been loaded."
    },
    "add": {
     "!type": "fn(name: string, frames: [?], frameRate: number, loop: bool, useNumericIndex: bool) -> +Phaser.Animation",
     "!doc": "Adds a new animation under the given key. Optionally set the frames, frame rate and loop.\nAnimations added in this way are played back with the play function."
    },
    "validateFrames": {
     "!type": "fn(frames: [?], useNumericIndex: bool) -> bool",
     "!doc": "Check whether the frames in the given array are valid and exist."
    },
    "play": {
     "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> +Phaser.Animation",
     "!doc": "Play an animation based on the given key. The animation should previously have been added via `animations.add`\n\nIf the requested animation is already playing this request will be ignored. \nIf you need to reset an already running animation do so directly on the Animation object itself."
    },
    "stop": {
     "!type": "fn(name: string, resetFrame: bool)",
     "!doc": "Stop playback of an animation. If a name is given that specific animation is stopped, otherwise the current animation is stopped.\nThe currentAnim property of the AnimationManager is automatically set to the animation given."
    },
    "update": {
     "!type": "fn() -> bool",
     "!doc": "The main update function is called by the Sprites update loop. It's responsible for updating animation frames and firing related events."
    },
    "next": {
     "!type": "fn(quantity: number)",
     "!doc": "Advances by the given number of frames in the current animation, taking the loop value into consideration."
    },
    "previous": {
     "!type": "fn(quantity: number)",
     "!doc": "Moves backwards the given number of frames in the current animation, taking the loop value into consideration."
    },
    "getAnimation": {
     "!type": "fn(name: string) -> +Phaser.Animation",
     "!doc": "Returns an animation that was previously added by name."
    },
    "refreshFrame": {
     "!type": "fn()",
     "!doc": "Refreshes the current frame data back to the parent Sprite and also resets the texture data."
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "Destroys all references this AnimationManager contains.\nIterates through the list of animations stored in this manager and calls destroy on each of them."
    },
    "frameData": {
     "!type": "+Phaser.FrameData",
     "!doc": "The current animations FrameData."
    },
    "frameTotal": {
     "!type": "number",
     "!doc": "The total number of frames in the currently loaded FrameData, or -1 if no FrameData is loaded."
    },
    "paused": {
     "!type": "bool",
     "!doc": "Gets and sets the paused state of the current animation."
    },
    "name": {
     "!type": "string",
     "!doc": "Gets the current animation name, if set."
    },
    "frame": {
     "!type": "number",
     "!doc": "Gets or sets the current frame index and updates the Texture Cache for display."
    },
    "frameName": {
     "!type": "string",
     "!doc": "Gets or sets the current frame name and updates the Texture Cache for display."
    }
   }
  },
  "AnimationParser": {
   "!type": "fn()",
   "!doc": "Responsible for parsing sprite sheet and JSON data into the internal FrameData format that Phaser uses for animations.",
   "spriteSheet": {
    "!type": "fn(game: +Phaser.Game, key: string|+Image, frameWidth: number, frameHeight: number, frameMax: number, margin: number, spacing: number) -> +Phaser.FrameData",
    "!doc": "Parse a Sprite Sheet and extract the animation frame data from it."
   },
   "JSONData": {
    "!type": "fn(game: +Phaser.Game, json: ?) -> +Phaser.FrameData",
    "!doc": "Parse the JSON data and extract the animation frame data from it."
   },
   "JSONDataHash": {
    "!type": "fn(game: +Phaser.Game, json: ?) -> +Phaser.FrameData",
    "!doc": "Parse the JSON data and extract the animation frame data from it."
   },
   "XMLData": {
    "!type": "fn(game: +Phaser.Game, xml: ?) -> +Phaser.FrameData",
    "!doc": "Parse the XML data and extract the animation frame data from it."
   }
  },
  "Frame": {
   "!type": "fn(index: number, x: number, y: number, width: number, height: number, name: string)",
   "!doc": "A Frame is a single frame of an animation and is part of a FrameData collection.",
   "prototype": {
    "index": {
     "!type": "number",
     "!doc": "The index of this Frame within the FrameData set it is being added to."
    },
    "x": {
     "!type": "number",
     "!doc": "X position within the image to cut from."
    },
    "y": {
     "!type": "number",
     "!doc": "Y position within the image to cut from."
    },
    "width": {
     "!type": "number",
     "!doc": "Width of the frame."
    },
    "height": {
     "!type": "number",
     "!doc": "Height of the frame."
    },
    "name": {
     "!type": "string",
     "!doc": "Useful for Texture Atlas files (is set to the filename value)."
    },
    "centerX": {
     "!type": "number",
     "!doc": "Center X position within the image to cut from."
    },
    "centerY": {
     "!type": "number",
     "!doc": "Center Y position within the image to cut from."
    },
    "distance": {
     "!type": "number",
     "!doc": "The distance from the top left to the bottom-right of this Frame."
    },
    "rotated": {
     "!type": "bool",
     "!doc": "Rotated? (not yet implemented)"
    },
    "rotationDirection": {
     "!type": "string",
     "!doc": "Either 'cw' or 'ccw', rotation is always 90 degrees."
    },
    "trimmed": {
     "!type": "bool",
     "!doc": "Was it trimmed when packed?"
    },
    "sourceSizeW": {
     "!type": "number",
     "!doc": "Width of the original sprite before it was trimmed."
    },
    "sourceSizeH": {
     "!type": "number",
     "!doc": "Height of the original sprite before it was trimmed."
    },
    "spriteSourceSizeX": {
     "!type": "number",
     "!doc": "X position of the trimmed sprite inside original sprite."
    },
    "spriteSourceSizeY": {
     "!type": "number",
     "!doc": "Y position of the trimmed sprite inside original sprite."
    },
    "spriteSourceSizeW": {
     "!type": "number",
     "!doc": "Width of the trimmed sprite."
    },
    "spriteSourceSizeH": {
     "!type": "number",
     "!doc": "Height of the trimmed sprite."
    },
    "right": {
     "!type": "number",
     "!doc": "The right of the Frame (x + width)."
    },
    "bottom": {
     "!type": "number",
     "!doc": "The bottom of the frame (y + height)."
    },
    "resize": {
     "!type": "fn(width: number, height: number)",
     "!doc": "Adjusts of all the Frame properties based on the given width and height values."
    },
    "setTrim": {
     "!type": "fn(trimmed: bool, actualWidth: number, actualHeight: number, destX: number, destY: number, destWidth: number, destHeight: number)",
     "!doc": "If the frame was trimmed when added to the Texture Atlas this records the trim and source data."
    },
    "clone": {
     "!type": "fn() -> +Phaser.Frame",
     "!doc": "Clones this Frame into a new Phaser.Frame object and returns it.\nNote that all properties are cloned, including the name, index and UUID."
    },
    "getRect": {
     "!type": "fn(out: +Phaser.Rectangle) -> +Phaser.Rectangle",
     "!doc": "Returns a Rectangle set to the dimensions of this Frame."
    }
   }
  },
  "FrameData": {
   "!type": "fn()",
   "!doc": "FrameData is a container for Frame objects, which are the internal representation of animation data in Phaser.",
   "prototype": {
    "addFrame": {
     "!type": "fn(frame: +Phaser.Frame) -> +Phaser.Frame",
     "!doc": "Adds a new Frame to this FrameData collection. Typically called by the Animation.Parser and not directly."
    },
    "getFrame": {
     "!type": "fn(index: number) -> +Phaser.Frame",
     "!doc": "Get a Frame by its numerical index."
    },
    "getFrameByName": {
     "!type": "fn(name: string) -> +Phaser.Frame",
     "!doc": "Get a Frame by its frame name."
    },
    "checkFrameName": {
     "!type": "fn(name: string) -> bool",
     "!doc": "Check if there is a Frame with the given name."
    },
    "clone": {
     "!type": "fn() -> +Phaser.FrameData",
     "!doc": "Makes a copy of this FrameData including copies (not references) to all of the Frames it contains."
    },
    "getFrameRange": {
     "!type": "fn(start: number, end: number, output: [?]) -> [?]",
     "!doc": "Returns a range of frames based on the given start and end frame indexes and returns them in an Array."
    },
    "getFrames": {
     "!type": "fn(frames: [?], useNumericIndex: bool, output: [?]) -> [?]",
     "!doc": "Returns all of the Frames in this FrameData set where the frame index is found in the input array.\nThe frames are returned in the output array, or if none is provided in a new Array object."
    },
    "getFrameIndexes": {
     "!type": "fn(frames: [?], useNumericIndex: bool, output: [?]) -> [?]",
     "!doc": "Returns all of the Frame indexes in this FrameData set.\nThe frames indexes are returned in the output array, or if none is provided in a new Array object."
    },
    "total": {
     "!type": "number",
     "!doc": "The total number of frames in this FrameData set."
    }
   }
  },
  "Camera": {
   "!type": "fn(game: +Phaser.Game, id: number, x: number, y: number, width: number, height: number)",
   "!doc": "A Camera is your view into the game world. It has a position and size and renders only those objects within its field of view.\nThe game automatically creates a single Stage sized camera on boot. Move the camera around the world with Phaser.Camera.x/y",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running Game."
    },
    "world": {
     "!type": "+Phaser.World",
     "!doc": "A reference to the game world."
    },
    "id": {
     "!type": "number",
     "!doc": "Reserved for future multiple camera set-ups."
    },
    "view": {
     "!type": "+Phaser.Rectangle"
    },
    "bounds": {
     "!type": "+Phaser.Rectangle",
     "!doc": "The Rectangle in which the Camera is bounded. Set to null to allow for movement anywhere."
    },
    "deadzone": {
     "!type": "+Phaser.Rectangle",
     "!doc": "Moving inside this Rectangle will not cause the camera to move."
    },
    "visible": {
     "!type": "bool",
     "!doc": "Whether this camera is visible or not."
    },
    "roundPx": {
     "!type": "bool",
     "!doc": "If a Camera has roundPx set to `true` it will call `view.floor` as part of its update loop, keeping its boundary to integer values. Set this to `false` to disable this from happening."
    },
    "atLimit": {
     "!type": "bool",
     "!doc": "Whether this camera is flush with the World Bounds or not."
    },
    "target": {
     "!type": "+Phaser.Sprite",
     "!doc": "If the camera is tracking a Sprite, this is a reference to it, otherwise null."
    },
    "displayObject": {
     "!type": "+PIXI.DisplayObject",
     "!doc": "The display object to which all game objects are added. Set by World.boot"
    },
    "scale": {
     "!type": "+Phaser.Point",
     "!doc": "The scale of the display object to which all game objects are added. Set by World.boot"
    },
    "totalInView": {
     "!type": "number",
     "!doc": "The total number of Sprites with `autoCull` set to `true` that are visible by this Camera."
    },
    "preUpdate": {
     "!type": "fn()",
     "!doc": "Camera preUpdate. Sets the total view counter to zero."
    },
    "follow": {
     "!type": "fn(target: +Phaser.Sprite|+Phaser.Image|+Phaser.Text, style: number)",
     "!doc": "Tell the camera which sprite to follow.\n\nIf you find you're getting a slight \"jitter\" effect when following a Sprite it's probably to do with sub-pixel rendering of the Sprite position.\nThis can be disabled by setting `game.renderer.renderSession.roundPixels = true` to force full pixel rendering."
    },
    "unfollow": {
     "!type": "fn()",
     "!doc": "Sets the Camera follow target to null, stopping it from following an object if it's doing so."
    },
    "focusOn": {
     "!type": "fn(displayObject: +any)",
     "!doc": "Move the camera focus on a display object instantly."
    },
    "focusOnXY": {
     "!type": "fn(x: number, y: number)",
     "!doc": "Move the camera focus on a location instantly."
    },
    "update": {
     "!type": "fn()",
     "!doc": "Update focusing and scrolling."
    },
    "setBoundsToWorld": {
     "!type": "fn()",
     "!doc": "Update the Camera bounds to match the game world."
    },
    "checkBounds": {
     "!type": "fn()",
     "!doc": "Method called to ensure the camera doesn't venture outside of the game world."
    },
    "setPosition": {
     "!type": "fn(x: number, y: number)",
     "!doc": "A helper function to set both the X and Y properties of the camera at once\nwithout having to use game.camera.x and game.camera.y."
    },
    "setSize": {
     "!type": "fn(width: number, height: number)",
     "!doc": "Sets the size of the view rectangle given the width and height in parameters."
    },
    "reset": {
     "!type": "fn()",
     "!doc": "Resets the camera back to 0,0 and un-follows any object it may have been tracking."
    },
    "x": {
     "!type": "number",
     "!doc": "Gets or sets the cameras x position."
    },
    "y": {
     "!type": "number",
     "!doc": "Gets or sets the cameras y position."
    },
    "position": {
     "!type": "+Phaser.Point",
     "!doc": "Gets or sets the cameras xy position using Phaser.Point object."
    },
    "width": {
     "!type": "number",
     "!doc": "Gets or sets the cameras width."
    },
    "height": {
     "!type": "number",
     "!doc": "Gets or sets the cameras height."
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
   "!doc": "The Phaser.Create class is a collection of smaller helper methods that allow you to generate game content\nquickly and easily, without the need for any external files. You can create textures for sprites and in\ncoming releases we'll add dynamic sound effect generation support as well (like sfxr).\n\nAccess this via `State.create` (or `this.create` from within a State object)",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running Game."
    },
    "bmd": {
     "!type": "+Phaser.BitmapData",
     "!doc": "The internal BitmapData Create uses to generate textures from."
    },
    "canvas": {
     "!type": "+HTMLCanvasElement",
     "!doc": "The canvas the BitmapData uses."
    },
    "ctx": {
     "!type": "+CanvasRenderingContext2D",
     "!doc": "The 2d context of the canvas."
    },
    "palettes": {
     "!type": "+array",
     "!doc": "A range of 16 color palettes for use with sprite generation."
    },
    "texture": {
     "!type": "fn(key: string, data: +array, pixelWidth: number, pixelHeight: number, palette: number) -> +PIXI.Texture",
     "!doc": "Generates a new PIXI.Texture from the given data, which can be applied to a Sprite.\n\nThis allows you to create game graphics quickly and easily, with no external files but that use actual proper images\nrather than Phaser.Graphics objects, which are expensive to render and limited in scope.\n\nEach element of the array is a string holding the pixel color values, as mapped to one of the Phaser.Create PALETTE consts.\n\nFor example:\n\n`var data = [\n  ' 333 ',\n  ' 777 ',\n  'E333E',\n  ' 333 ',\n  ' 3 3 '\n];`\n\n`game.create.texture('bob', data);`\n\nThe above will create a new texture called `bob`, which will look like a little man wearing a hat. You can then use it\nfor sprites the same way you use any other texture: `game.add.sprite(0, 0, 'bob');`"
    },
    "grid": {
     "!type": "fn(key: string, width: number, height: number, cellWidth: number, cellHeight: number, color: string) -> +PIXI.Texture",
     "!doc": "Creates a grid texture based on the given dimensions."
    }
   },
   "PALETTE_ARNE": {
    "!type": "number",
    "!doc": "A 16 color palette by [Arne](http://androidarts.com/palette/16pal.htm)"
   },
   "PALETTE_JMP": {
    "!type": "number",
    "!doc": "A 16 color JMP inspired palette."
   },
   "PALETTE_CGA": {
    "!type": "number",
    "!doc": "A 16 color CGA inspired palette."
   },
   "PALETTE_C64": {
    "!type": "number",
    "!doc": "A 16 color C64 inspired palette."
   },
   "PALETTE_JAPANESE_MACHINE": {
    "!type": "number",
    "!doc": "A 16 color palette inspired by Japanese computers like the MSX."
   }
  },
  "Filter": {
   "!type": "fn(game: +Phaser.Game, uniforms: ?, fragmentSrc: [?]|string)",
   "!doc": "This is a base Filter class to use for any Phaser filter development.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running game."
    },
    "type": {
     "!type": "number",
     "!doc": "The const type of this object, either Phaser.WEBGL_FILTER or Phaser.CANVAS_FILTER."
    },
    "dirty": {
     "!type": "bool",
     "!doc": "Internal PIXI var."
    },
    "padding": {
     "!type": "number",
     "!doc": "Internal PIXI var."
    },
    "prevPoint": {
     "!type": "+Phaser.Point",
     "!doc": "The previous position of the pointer (we don't update the uniform if the same)"
    },
    "uniforms": {
     "!type": "?",
     "!doc": "Default uniform mappings. Compatible with ShaderToy and GLSLSandbox."
    },
    "fragmentSrc": {
     "!type": "+array|string",
     "!doc": "The fragment shader code."
    },
    "init": {
     "!type": "fn()",
     "!doc": "Should be over-ridden."
    },
    "setResolution": {
     "!type": "fn(width: number, height: number)",
     "!doc": "Set the resolution uniforms on the filter."
    },
    "update": {
     "!type": "fn(pointer: +Phaser.Pointer)",
     "!doc": "Updates the filter."
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "Clear down this Filter and null out references"
    },
    "width": {
     "!type": "number",
     "!doc": "The width (resolution uniform)"
    },
    "height": {
     "!type": "number",
     "!doc": "The height (resolution uniform)"
    }
   }
  },
  "FlexGrid": {
   "!type": "fn(manager: +Phaser.ScaleManager, width: number, height: number)",
   "!doc": "WARNING: This is an EXPERIMENTAL class. The API will change significantly in the coming versions and is incomplete.\nPlease try to avoid using in production games with a long time to build.\nThis is also why the documentation is incomplete.\n\nFlexGrid is a a responsive grid manager that works in conjunction with the ScaleManager RESIZE scaling mode and FlexLayers\nto provide for game object positioning in a responsive manner.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running Game."
    },
    "manager": {
     "!type": "+Phaser.ScaleManager",
     "!doc": "A reference to the ScaleManager."
    },
    "positionCustom": {
     "!type": "+Phaser.Point",
     "!doc": "-"
    },
    "scaleCustom": {
     "!type": "+Phaser.Point",
     "!doc": "The scale factor based on the game dimensions vs. the scaled dimensions."
    },
    "setSize": {
     "!type": "fn(width: number, height: number)",
     "!doc": "Sets the core game size. This resets the w/h parameters and bounds."
    },
    "createCustomLayer": {
     "!type": "fn(width: number, height: number, children: [?]) -> +Phaser.FlexLayer",
     "!doc": "A custom layer is centered on the game and maintains its aspect ratio as it scales up and down."
    },
    "createFluidLayer": {
     "!type": "fn(children: +array) -> +Phaser.FlexLayer",
     "!doc": "A fluid layer is centered on the game and maintains its aspect ratio as it scales up and down."
    },
    "createFullLayer": {
     "!type": "fn(children: +array) -> +Phaser.FlexLayer",
     "!doc": "A full layer is placed at 0,0 and extends to the full size of the game. Children are scaled according to the fluid ratios."
    },
    "createFixedLayer": {
     "!type": "fn(children: [?]) -> +Phaser.FlexLayer",
     "!doc": "A fixed layer is centered on the game and is the size of the required dimensions and is never scaled."
    },
    "reset": {
     "!type": "fn()",
     "!doc": "Resets the layer children references"
    },
    "onResize": {
     "!type": "fn(width: number, height: number)",
     "!doc": "Called when the game container changes dimensions."
    },
    "refresh": {
     "!type": "fn()",
     "!doc": "Updates all internal vars such as the bounds and scale values."
    },
    "fitSprite": {
     "!type": "fn(sprite: +Phaser.Sprite)",
     "!doc": "Fits a sprites width to the bounds."
    },
    "debug": {
     "!type": "fn()",
     "!doc": "Call in the render function to output the bounds rects."
    }
   }
  },
  "FlexLayer": {
   "!type": "fn(manager: +Phaser.FlexGrid, position: +Phaser.Point, bounds: +Phaser.Rectangle, scale: +Phaser.Point)",
   "!doc": "WARNING: This is an EXPERIMENTAL class. The API will change significantly in the coming versions and is incomplete.\nPlease try to avoid using in production games with a long time to build.\nThis is also why the documentation is incomplete.\n\nA responsive grid layer.",
   "prototype": {
    "manager": {
     "!type": "+Phaser.ScaleManager",
     "!doc": "A reference to the ScaleManager."
    },
    "grid": {
     "!type": "+Phaser.FlexGrid",
     "!doc": "A reference to the FlexGrid that owns this layer."
    },
    "persist": {
     "!type": "bool",
     "!doc": "Should the FlexLayer remain through a State swap?"
    },
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
     "!type": "fn()",
     "!doc": "Resize."
    },
    "debug": {
     "!type": "fn()",
     "!doc": "Debug."
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
     "!type": "number",
     "!doc": "The const physics body type of this object."
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
    "classType": {
     "!type": "?"
    },
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
     "!type": "number",
     "!doc": "The current index of the Group cursor. Advance it with Group.next."
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
     "!type": "fn(child: +DisplayObject, silent: bool) -> +DisplayObject",
     "!doc": "Adds an existing object as the top child in this group.\n\nThe child is automatically added to the top of the group and is displayed on top of every previous child.\n\nIf Group.enableBody is set then a physics body will be created on the object, so long as one does not already exist.\n\nUse {@link #addAt} to control where a child is added. Use {@link #create} to create and add a new child."
    },
    "addToHash": {
     "!type": "fn(child: +DisplayObject) -> bool",
     "!doc": "Adds a child of this Group into the hash array.\nThis call will return false if the child is not a child of this Group, or is already in the hash."
    },
    "removeFromHash": {
     "!type": "fn(child: +DisplayObject) -> bool",
     "!doc": "Removes a child of this Group from the hash array.\nThis call will return false if the child is not in the hash."
    },
    "addMultiple": {
     "!type": "fn(children: [?]|+Phaser.Group, silent: bool) -> [?]|+Phaser.Group",
     "!doc": "Adds an array of existing Display Objects to this Group.\n\nThe Display Objects are automatically added to the top of this Group, and will render on-top of everything already in this Group.\n\nAs well as an array you can also pass another Group as the first argument. In this case all of the children from that\nGroup will be removed from it and added into this Group."
    },
    "addAt": {
     "!type": "fn(child: +DisplayObject, index: number, silent: bool) -> +DisplayObject",
     "!doc": "Adds an existing object to this group.\n\nThe child is added to the group at the location specified by the index value, this allows you to control child ordering."
    },
    "getAt": {
     "!type": "fn(index: number) -> +DisplayObject|number",
     "!doc": "Returns the child found at the given index within this group."
    },
    "create": {
     "!type": "fn(x: number, y: number, key: string, frame: number|string, exists: bool) -> +DisplayObject",
     "!doc": "Creates a new Phaser.Sprite object and adds it to the top of this group.\n\nUse {@link #classType} to change the type of object creaded."
    },
    "createMultiple": {
     "!type": "fn(quantity: number, key: string, frame: number|string, exists: bool)",
     "!doc": "Creates multiple Phaser.Sprite objects and adds them to the top of this group.\n\nUseful if you need to quickly generate a pool of identical sprites, such as bullets.\n\nBy default the sprites will be set to not exist and will be positioned at 0, 0 (relative to the group.x/y).\nUse {@link #classType} to change the type of object created."
    },
    "updateZ": {
     "!type": "fn()",
     "!doc": "Internal method that re-applies all of the children's Z values.\n\nThis must be called whenever children ordering is altered so that their `z` indices are correctly updated."
    },
    "resetCursor": {
     "!type": "fn(index: number) -> +any",
     "!doc": "Sets the group cursor to the first child in the group.\n\nIf the optional index parameter is given it sets the cursor to the object at that index instead."
    },
    "next": {
     "!type": "fn() -> +any",
     "!doc": "Advances the group cursor to the next (higher) object in the group.\n\nIf the cursor is at the end of the group (top child) it is moved the start of the group (bottom child)."
    },
    "previous": {
     "!type": "fn() -> +any",
     "!doc": "Moves the group cursor to the previous (lower) child in the group.\n\nIf the cursor is at the start of the group (bottom child) it is moved to the end (top child)."
    },
    "swap": {
     "!type": "fn(child1: +any, child2: +any)",
     "!doc": "Swaps the position of two children in this group.\n\nBoth children must be in this group, a child cannot be swapped with itself, and unparented children cannot be swapped."
    },
    "bringToTop": {
     "!type": "fn(child: +any) -> +any",
     "!doc": "Brings the given child to the top of this group so it renders above all other children."
    },
    "sendToBack": {
     "!type": "fn(child: +any) -> +any",
     "!doc": "Sends the given child to the bottom of this group so it renders below all other children."
    },
    "moveUp": {
     "!type": "fn(child: +any) -> +any",
     "!doc": "Moves the given child up one place in this group unless it's already at the top."
    },
    "moveDown": {
     "!type": "fn(child: +any) -> +any",
     "!doc": "Moves the given child down one place in this group unless it's already at the bottom."
    },
    "xy": {
     "!type": "fn(index: number, x: number, y: number)",
     "!doc": "Positions the child found at the given index within this group to the given x and y coordinates."
    },
    "reverse": {
     "!type": "fn()",
     "!doc": "Reverses all children in this group.\n\nThis operaation applies only to immediate children and does not propagate to subgroups."
    },
    "getIndex": {
     "!type": "fn(child: +any) -> number",
     "!doc": "Get the index position of the given child in this group, which should match the child's `z` property."
    },
    "replace": {
     "!type": "fn(oldChild: +any, newChild: +any) -> +any",
     "!doc": "Replaces a child of this group with the given newChild. The newChild cannot be a member of this group."
    },
    "hasProperty": {
     "!type": "fn(child: +any, key: [?]) -> bool",
     "!doc": "Checks if the child has the given property.\n\nWill scan up to 4 levels deep only."
    },
    "setProperty": {
     "!type": "fn(child: +any, key: +array, value: +any, operation: number, force: bool) -> bool",
     "!doc": "Sets a property to the given value on the child. The operation parameter controls how the value is set.\n\nThe operations are:\n- 0: set the existing value to the given value; if force is `true` a new property will be created if needed\n- 1: will add the given value to the value already present.\n- 2: will subtract the given value from the value already present.\n- 3: will multiply the value already present by the given value.\n- 4: will divide the value already present by the given value."
    },
    "checkProperty": {
     "!type": "fn(child: +any, key: +array, value: +any, force: bool) -> bool",
     "!doc": "Checks a property for the given value on the child."
    },
    "set": {
     "!type": "fn(child: +Phaser.Sprite, key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool) -> bool",
     "!doc": "Quickly set a property on a single child of this group to a new value.\n\nThe operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication."
    },
    "setAll": {
     "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)",
     "!doc": "Quickly set the same property across all children of this group to a new value.\n\nThis call doesn't descend down children, so if you have a Group inside of this group, the property will be set on the group but not its children.\nIf you need that ability please see `Group.setAllChildren`.\n\nThe operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication."
    },
    "setAllChildren": {
     "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)",
     "!doc": "Quickly set the same property across all children of this group, and any child Groups, to a new value.\n\nIf this group contains other Groups then the same property is set across their children as well, iterating down until it reaches the bottom.\nUnlike with `setAll` the property is NOT set on child Groups itself.\n\nThe operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication."
    },
    "checkAll": {
     "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, force: bool)",
     "!doc": "Quickly check that the same property across all children of this group is equal to the given value.\n\nThis call doesn't descend down children, so if you have a Group inside of this group, the property will be checked on the group but not its children."
    },
    "addAll": {
     "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)",
     "!doc": "Adds the amount to the given property on all children in this group.\n\n`Group.addAll('x', 10)` will add 10 to the child.x value for each child."
    },
    "subAll": {
     "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)",
     "!doc": "Subtracts the amount from the given property on all children in this group.\n\n`Group.subAll('x', 10)` will minus 10 from the child.x value for each child."
    },
    "multiplyAll": {
     "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)",
     "!doc": "Multiplies the given property by the amount on all children in this group.\n\n`Group.multiplyAll('x', 2)` will x2 the child.x value for each child."
    },
    "divideAll": {
     "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)",
     "!doc": "Divides the given property by the amount on all children in this group.\n\n`Group.divideAll('x', 2)` will half the child.x value for each child."
    },
    "callAllExists": {
     "!type": "fn(callback: string, existsValue: bool, parameter: +any)",
     "!doc": "Calls a function, specified by name, on all children in the group who exist (or do not exist).\n\nAfter the existsValue parameter you can add as many parameters as you like, which will all be passed to the child callback."
    },
    "callbackFromArray": {
     "!type": "fn(child: ?, callback: +array, length: number)",
     "!doc": "Returns a reference to a function that exists on a child of the group based on the given callback array."
    },
    "callAll": {
     "!type": "fn(method: string, context: string, args: +any)",
     "!doc": "Calls a function, specified by name, on all on children.\n\nThe function is called for all children regardless if they are dead or alive (see callAllExists for different options).\nAfter the method parameter and context you can add as many extra parameters as you like, which will all be passed to the child."
    },
    "preUpdate": {
     "!type": "fn()",
     "!doc": "The core preUpdate - as called by World."
    },
    "update": {
     "!type": "fn()",
     "!doc": "The core update - as called by World."
    },
    "postUpdate": {
     "!type": "fn()",
     "!doc": "The core postUpdate - as called by World."
    },
    "filter": {
     "!type": "fn(predicate: fn(), checkExists: bool) -> +Phaser.ArraySet",
     "!doc": "Find children matching a certain predicate.\n\nFor example:\n\n    var healthyList = Group.filter(function(child, index, children) {\n        return child.health > 10 ? true : false;\n    }, true);\n    healthyList.callAll('attack');\n\nNote: Currently this will skip any children which are Groups themselves."
    },
    "forEach": {
     "!type": "fn(callback: fn(), callbackContext: ?, checkExists: bool, args: +any)",
     "!doc": "Call a function on each child in this group.\n\nAdditional arguments for the callback can be specified after the `checkExists` parameter. For example,\n\n    Group.forEach(awardBonusGold, this, true, 100, 500)\n\nwould invoke `awardBonusGold` function with the parameters `(child, 100, 500)`.\n\nNote: This check will skip any children which are Groups themselves."
    },
    "forEachExists": {
     "!type": "fn(callback: fn(), callbackContext: ?, args: +any)",
     "!doc": "Call a function on each existing child in this group.\n\nSee {@link Phaser.Group#forEach forEach} for details."
    },
    "forEachAlive": {
     "!type": "fn(callback: fn(), callbackContext: ?, args: +any)",
     "!doc": "Call a function on each alive child in this group.\n\nSee {@link Phaser.Group#forEach forEach} for details."
    },
    "forEachDead": {
     "!type": "fn(callback: fn(), callbackContext: ?, args: +any)",
     "!doc": "Call a function on each dead child in this group.\n\nSee {@link Phaser.Group#forEach forEach} for details."
    },
    "sort": {
     "!type": "fn(key: string, order: number)",
     "!doc": "Sort the children in the group according to a particular key and ordering.\n\nCall this function to sort the group according to a particular key value and order.\nFor example to depth sort Sprites for Zelda-style game you might call `group.sort('y', Phaser.Group.SORT_ASCENDING)` at the bottom of your `State.update()`."
    },
    "customSort": {
     "!type": "fn(sortHandler: fn(), context: ?)",
     "!doc": "Sort the children in the group according to custom sort function.\n\nThe `sortHandler` is provided the two parameters: the two children involved in the comparison (a and b).\nIt should return -1 if `a > b`, 1 if `a < b` or 0 if `a === b`."
    },
    "ascendingSortHandler": {
     "!type": "fn(a: ?, b: ?)",
     "!doc": "An internal helper function for the sort process."
    },
    "descendingSortHandler": {
     "!type": "fn(a: ?, b: ?)",
     "!doc": "An internal helper function for the sort process."
    },
    "iterate": {
     "!type": "fn(key: string, value: +any, returnType: number, callback: fn(), callbackContext: ?, args: [?]) -> +any",
     "!doc": "Iterates over the children of the group performing one of several actions for matched children.\n\nA child is considered a match when it has a property, named `key`, whose value is equal to `value`\naccording to a strict equality comparison.\n\nThe result depends on the `returnType`:\n\n- {@link Phaser.Group.RETURN_TOTAL RETURN_TOTAL}:\n    The callback, if any, is applied to all matching children. The number of matched children is returned.\n- {@link Phaser.Group.RETURN_NONE RETURN_NONE}:\n    The callback, if any, is applied to all matching children. No value is returned.\n- {@link Phaser.Group.RETURN_CHILD RETURN_CHILD}:\n    The callback, if any, is applied to the *first* matching child and the *first* matched child is returned.\n    If there is no matching child then null is returned.\n\nIf `args` is specified it must be an array. The matched child will be assigned to the first\nelement and the entire array will be applied to the callback function."
    },
    "getFirstExists": {
     "!type": "fn(exists: bool) -> +any",
     "!doc": "Get the first display object that exists, or doesn't exist."
    },
    "getFirstAlive": {
     "!type": "fn() -> +any",
     "!doc": "Get the first child that is alive (`child.alive === true`).\n\nThis is handy for checking if everything has been wiped out, or choosing a squad leader, etc."
    },
    "getFirstDead": {
     "!type": "fn() -> +any",
     "!doc": "Get the first child that is dead (`child.alive === false`).\n\nThis is handy for checking if everything has been wiped out, or choosing a squad leader, etc."
    },
    "getTop": {
     "!type": "fn() -> +any",
     "!doc": "Return the child at the top of this group.\n\nThe top child is the child displayed (rendered) above every other child."
    },
    "getBottom": {
     "!type": "fn() -> +any",
     "!doc": "Returns the child at the bottom of this group.\n\nThe bottom child the child being displayed (rendered) below every other child."
    },
    "countLiving": {
     "!type": "fn() -> number",
     "!doc": "Get the number of living children in this group."
    },
    "countDead": {
     "!type": "fn() -> number",
     "!doc": "Get the number of dead children in this group."
    },
    "getRandom": {
     "!type": "fn(startIndex: number, length: number) -> +any",
     "!doc": "Returns a random child from the group."
    },
    "remove": {
     "!type": "fn(child: +any, destroy: bool, silent: bool) -> bool",
     "!doc": "Removes the given child from this group.\n\nThis will dispatch an `onRemovedFromGroup` event from the child (if it has one), and optionally destroy the child.\n\nIf the group cursor was referring to the removed child it is updated to refer to the next child."
    },
    "moveAll": {
     "!type": "fn(group: +Phaser.Group, silent: bool) -> +Phaser.Group",
     "!doc": "Moves all children from this Group to the Group given."
    },
    "removeAll": {
     "!type": "fn(destroy: bool, silent: bool)",
     "!doc": "Removes all children from this group, but does not remove the group from its parent."
    },
    "removeBetween": {
     "!type": "fn(startIndex: number, endIndex: number, destroy: bool, silent: bool)",
     "!doc": "Removes all children from this group whose index falls beteen the given startIndex and endIndex values."
    },
    "destroy": {
     "!type": "fn(destroyChildren: bool, soft: bool)",
     "!doc": "Destroys this group.\n\nRemoves all children, then removes this group from its parent and nulls references."
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
    "children": {
     "!type": "[?]"
    }
   }
  },
  "Game": {
   "!type": "fn(width: number|string, height: number|string, renderer: number, parent: string|+HTMLElement, state: ?, transparent: bool, antialias: bool, physicsConfig: ?)",
   "!doc": "This is where the magic happens. The Game object is the heart of your game,\nproviding quick access to common functions and handling the boot process.\n\n\"Hell, there are no rules here - we're trying to accomplish something.\"\n                                                      Thomas A. Edison",
   "prototype": {
    "id": {
     "!type": "number",
     "!doc": "Phaser Game ID (for when Pixi supports multiple instances)."
    },
    "config": {
     "!type": "?",
     "!doc": "The Phaser.Game configuration object."
    },
    "physicsConfig": {
     "!type": "?",
     "!doc": "The Phaser.Physics.World configuration object."
    },
    "parent": {
     "!type": "string|+HTMLElement",
     "!doc": "The Games DOM parent."
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
     "!type": "bool",
     "!doc": "Use a transparent canvas background or not."
    },
    "antialias": {
     "!type": "bool",
     "!doc": "Anti-alias graphics. By default scaled images are smoothed in Canvas and WebGL, set anti-alias to false to disable this globally."
    },
    "preserveDrawingBuffer": {
     "!type": "bool",
     "!doc": "The value of the preserveDrawingBuffer flag affects whether or not the contents of the stencil buffer is retained after rendering."
    },
    "renderer": {
     "!type": "+PIXI.CanvasRenderer|+PIXI.WebGLRenderer",
     "!doc": "The Pixi Renderer."
    },
    "renderType": {
     "!type": "number",
     "!doc": "The Renderer this game will use. Either Phaser.AUTO, Phaser.CANVAS or Phaser.WEBGL."
    },
    "state": {
     "!type": "+Phaser.StateManager",
     "!doc": "The StateManager."
    },
    "isBooted": {
     "!type": "bool",
     "!doc": "Whether the game engine is booted, aka available."
    },
    "isRunning": {
     "!type": "bool",
     "!doc": "Is game running or paused?"
    },
    "raf": {
     "!type": "+Phaser.RequestAnimationFrame",
     "!doc": "Automatically handles the core game loop via requestAnimationFrame or setTimeout"
    },
    "add": {
     "!type": "+Phaser.GameObjectFactory",
     "!doc": "Reference to the Phaser.GameObjectFactory."
    },
    "make": {
     "!type": "+Phaser.GameObjectCreator",
     "!doc": "Reference to the GameObject Creator."
    },
    "cache": {
     "!type": "+Phaser.Cache",
     "!doc": "Reference to the assets cache."
    },
    "input": {
     "!type": "+Phaser.Input",
     "!doc": "Reference to the input manager"
    },
    "load": {
     "!type": "+Phaser.Loader",
     "!doc": "Reference to the assets loader."
    },
    "math": {
     "!type": "+Phaser.Math",
     "!doc": "Reference to the math helper."
    },
    "net": {
     "!type": "+Phaser.Net",
     "!doc": "Reference to the network class."
    },
    "scale": {
     "!type": "+Phaser.ScaleManager",
     "!doc": "The game scale manager."
    },
    "sound": {
     "!type": "+Phaser.SoundManager",
     "!doc": "Reference to the sound manager."
    },
    "stage": {
     "!type": "+Phaser.Stage",
     "!doc": "Reference to the stage."
    },
    "time": {
     "!type": "+Phaser.Time",
     "!doc": "Reference to the core game clock."
    },
    "tweens": {
     "!type": "+Phaser.TweenManager",
     "!doc": "Reference to the tween manager."
    },
    "world": {
     "!type": "+Phaser.World",
     "!doc": "Reference to the world."
    },
    "physics": {
     "!type": "+Phaser.Physics",
     "!doc": "Reference to the physics manager."
    },
    "plugins": {
     "!type": "+Phaser.PluginManager",
     "!doc": "Reference to the plugin manager."
    },
    "rnd": {
     "!type": "+Phaser.RandomDataGenerator",
     "!doc": "Instance of repeatable random data generator helper."
    },
    "device": {
     "!type": "+Phaser.Device",
     "!doc": "Contains device information and capabilities."
    },
    "camera": {
     "!type": "+Phaser.Camera",
     "!doc": "A handy reference to world.camera."
    },
    "canvas": {
     "!type": "+HTMLCanvasElement",
     "!doc": "A handy reference to renderer.view, the canvas that the game is being rendered in to."
    },
    "context": {
     "!type": "+CanvasRenderingContext2D",
     "!doc": "A handy reference to renderer.context (only set for CANVAS games, not WebGL)"
    },
    "debug": {
     "!type": "+Phaser.Utils.Debug",
     "!doc": "A set of useful debug utilities."
    },
    "particles": {
     "!type": "+Phaser.Particles",
     "!doc": "The Particle Manager."
    },
    "create": {
     "!type": "+Phaser.Create",
     "!doc": "The Asset Generator."
    },
    "lockRender": {
     "!type": "bool"
    },
    "stepping": {
     "!type": "bool",
     "!doc": "Enable core loop stepping with Game.enableStep()."
    },
    "pendingStep": {
     "!type": "bool",
     "!doc": "An internal property used by enableStep, but also useful to query from your own game objects."
    },
    "stepCount": {
     "!type": "number",
     "!doc": "When stepping is enabled this contains the current step cycle."
    },
    "onPause": {
     "!type": "+Phaser.Signal",
     "!doc": "This event is fired when the game pauses."
    },
    "onResume": {
     "!type": "+Phaser.Signal",
     "!doc": "This event is fired when the game resumes from a paused state."
    },
    "onBlur": {
     "!type": "+Phaser.Signal",
     "!doc": "This event is fired when the game no longer has focus (typically on page hide)."
    },
    "onFocus": {
     "!type": "+Phaser.Signal",
     "!doc": "This event is fired when the game has focus (typically on page show)."
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
     "!type": "bool",
     "!doc": "Should the game loop force a logic update, regardless of the delta timer? Set to true if you know you need this. You can toggle it on the fly."
    },
    "parseConfig": {
     "!type": "fn()",
     "!doc": "Parses a Game configuration object."
    },
    "boot": {
     "!type": "fn()",
     "!doc": "Initialize engine sub modules and start the game."
    },
    "showDebugHeader": {
     "!type": "fn()",
     "!doc": "Displays a Phaser version debug header in the console."
    },
    "setUpRenderer": {
     "!type": "fn()",
     "!doc": "Checks if the device is capable of using the requested renderer and sets it up or an alternative if not."
    },
    "update": {
     "!type": "fn(time: number)",
     "!doc": "The core game loop."
    },
    "updateLogic": {
     "!type": "fn(timeStep: number)",
     "!doc": "Updates all logic subsystems in Phaser. Called automatically by Game.update."
    },
    "updateRender": {
     "!type": "fn(elapsedTime: number)",
     "!doc": "Runs the Render cycle.\nIt starts by calling State.preRender. In here you can do any last minute adjustments of display objects as required.\nIt then calls the renderer, which renders the entire display list, starting from the Stage object and working down.\nIt then calls plugin.render on any loaded plugins, in the order in which they were enabled.\nAfter this State.render is called. Any rendering that happens here will take place on-top of the display list.\nFinally plugin.postRender is called on any loaded plugins, in the order in which they were enabled.\nThis method is called automatically by Game.update, you don't need to call it directly.\nShould you wish to have fine-grained control over when Phaser renders then use the `Game.lockRender` boolean.\nPhaser will only render when this boolean is `false`."
    },
    "enableStep": {
     "!type": "fn()",
     "!doc": "Enable core game loop stepping. When enabled you must call game.step() directly (perhaps via a DOM button?)\nCalling step will advance the game loop by one frame. This is extremely useful for hard to track down errors!"
    },
    "disableStep": {
     "!type": "fn()",
     "!doc": "Disables core game loop stepping."
    },
    "step": {
     "!type": "fn()",
     "!doc": "When stepping is enabled you must call this function directly (perhaps via a DOM button?) to advance the game loop by one frame.\nThis is extremely useful to hard to track down errors! Use the internal stepCount property to monitor progress."
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "Nukes the entire game from orbit."
    },
    "gamePaused": {
     "!type": "fn(event: ?)",
     "!doc": "Called by the Stage visibility handler."
    },
    "gameResumed": {
     "!type": "fn(event: ?)",
     "!doc": "Called by the Stage visibility handler."
    },
    "focusLoss": {
     "!type": "fn(event: ?)",
     "!doc": "Called by the Stage visibility handler."
    },
    "focusGain": {
     "!type": "fn(event: ?)",
     "!doc": "Called by the Stage visibility handler."
    },
    "paused": {
     "!type": "bool",
     "!doc": "Gets and sets the paused state of the Game."
    }
   }
  },
  "Group": {
   "!type": "fn(game: +Phaser.Game, parent: +DisplayObject|+null, name: string, addToStage: bool, enableBody: bool, physicsBodyType: number)",
   "!doc": "A Group is a container for {@link DisplayObject display objects} including {@link Phaser.Sprite Sprites} and {@link Phaser.Image Images}.\n\nGroups form the logical tree structure of the display/scene graph where local transformations are applied to children.\nFor instance, all children are also moved/rotated/scaled when the group is moved/rotated/scaled.\n\nIn addition, Groups provides support for fast pooling and object recycling.\n\nGroups are also display objects and can be nested as children within other Groups.",
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
     "!type": "number",
     "!doc": "The const physics body type of this object."
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
    "classType": {
     "!type": "?"
    },
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
     "!type": "number",
     "!doc": "The current index of the Group cursor. Advance it with Group.next."
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
     "!type": "fn(child: +DisplayObject, silent: bool) -> +DisplayObject",
     "!doc": "Adds an existing object as the top child in this group.\n\nThe child is automatically added to the top of the group and is displayed on top of every previous child.\n\nIf Group.enableBody is set then a physics body will be created on the object, so long as one does not already exist.\n\nUse {@link #addAt} to control where a child is added. Use {@link #create} to create and add a new child."
    },
    "addToHash": {
     "!type": "fn(child: +DisplayObject) -> bool",
     "!doc": "Adds a child of this Group into the hash array.\nThis call will return false if the child is not a child of this Group, or is already in the hash."
    },
    "removeFromHash": {
     "!type": "fn(child: +DisplayObject) -> bool",
     "!doc": "Removes a child of this Group from the hash array.\nThis call will return false if the child is not in the hash."
    },
    "addMultiple": {
     "!type": "fn(children: [?]|+Phaser.Group, silent: bool) -> [?]|+Phaser.Group",
     "!doc": "Adds an array of existing Display Objects to this Group.\n\nThe Display Objects are automatically added to the top of this Group, and will render on-top of everything already in this Group.\n\nAs well as an array you can also pass another Group as the first argument. In this case all of the children from that\nGroup will be removed from it and added into this Group."
    },
    "addAt": {
     "!type": "fn(child: +DisplayObject, index: number, silent: bool) -> +DisplayObject",
     "!doc": "Adds an existing object to this group.\n\nThe child is added to the group at the location specified by the index value, this allows you to control child ordering."
    },
    "getAt": {
     "!type": "fn(index: number) -> +DisplayObject|number",
     "!doc": "Returns the child found at the given index within this group."
    },
    "create": {
     "!type": "fn(x: number, y: number, key: string, frame: number|string, exists: bool) -> +DisplayObject",
     "!doc": "Creates a new Phaser.Sprite object and adds it to the top of this group.\n\nUse {@link #classType} to change the type of object creaded."
    },
    "createMultiple": {
     "!type": "fn(quantity: number, key: string, frame: number|string, exists: bool)",
     "!doc": "Creates multiple Phaser.Sprite objects and adds them to the top of this group.\n\nUseful if you need to quickly generate a pool of identical sprites, such as bullets.\n\nBy default the sprites will be set to not exist and will be positioned at 0, 0 (relative to the group.x/y).\nUse {@link #classType} to change the type of object created."
    },
    "updateZ": {
     "!type": "fn()",
     "!doc": "Internal method that re-applies all of the children's Z values.\n\nThis must be called whenever children ordering is altered so that their `z` indices are correctly updated."
    },
    "resetCursor": {
     "!type": "fn(index: number) -> +any",
     "!doc": "Sets the group cursor to the first child in the group.\n\nIf the optional index parameter is given it sets the cursor to the object at that index instead."
    },
    "next": {
     "!type": "fn() -> +any",
     "!doc": "Advances the group cursor to the next (higher) object in the group.\n\nIf the cursor is at the end of the group (top child) it is moved the start of the group (bottom child)."
    },
    "previous": {
     "!type": "fn() -> +any",
     "!doc": "Moves the group cursor to the previous (lower) child in the group.\n\nIf the cursor is at the start of the group (bottom child) it is moved to the end (top child)."
    },
    "swap": {
     "!type": "fn(child1: +any, child2: +any)",
     "!doc": "Swaps the position of two children in this group.\n\nBoth children must be in this group, a child cannot be swapped with itself, and unparented children cannot be swapped."
    },
    "bringToTop": {
     "!type": "fn(child: +any) -> +any",
     "!doc": "Brings the given child to the top of this group so it renders above all other children."
    },
    "sendToBack": {
     "!type": "fn(child: +any) -> +any",
     "!doc": "Sends the given child to the bottom of this group so it renders below all other children."
    },
    "moveUp": {
     "!type": "fn(child: +any) -> +any",
     "!doc": "Moves the given child up one place in this group unless it's already at the top."
    },
    "moveDown": {
     "!type": "fn(child: +any) -> +any",
     "!doc": "Moves the given child down one place in this group unless it's already at the bottom."
    },
    "xy": {
     "!type": "fn(index: number, x: number, y: number)",
     "!doc": "Positions the child found at the given index within this group to the given x and y coordinates."
    },
    "reverse": {
     "!type": "fn()",
     "!doc": "Reverses all children in this group.\n\nThis operaation applies only to immediate children and does not propagate to subgroups."
    },
    "getIndex": {
     "!type": "fn(child: +any) -> number",
     "!doc": "Get the index position of the given child in this group, which should match the child's `z` property."
    },
    "replace": {
     "!type": "fn(oldChild: +any, newChild: +any) -> +any",
     "!doc": "Replaces a child of this group with the given newChild. The newChild cannot be a member of this group."
    },
    "hasProperty": {
     "!type": "fn(child: +any, key: [?]) -> bool",
     "!doc": "Checks if the child has the given property.\n\nWill scan up to 4 levels deep only."
    },
    "setProperty": {
     "!type": "fn(child: +any, key: +array, value: +any, operation: number, force: bool) -> bool",
     "!doc": "Sets a property to the given value on the child. The operation parameter controls how the value is set.\n\nThe operations are:\n- 0: set the existing value to the given value; if force is `true` a new property will be created if needed\n- 1: will add the given value to the value already present.\n- 2: will subtract the given value from the value already present.\n- 3: will multiply the value already present by the given value.\n- 4: will divide the value already present by the given value."
    },
    "checkProperty": {
     "!type": "fn(child: +any, key: +array, value: +any, force: bool) -> bool",
     "!doc": "Checks a property for the given value on the child."
    },
    "set": {
     "!type": "fn(child: +Phaser.Sprite, key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool) -> bool",
     "!doc": "Quickly set a property on a single child of this group to a new value.\n\nThe operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication."
    },
    "setAll": {
     "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)",
     "!doc": "Quickly set the same property across all children of this group to a new value.\n\nThis call doesn't descend down children, so if you have a Group inside of this group, the property will be set on the group but not its children.\nIf you need that ability please see `Group.setAllChildren`.\n\nThe operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication."
    },
    "setAllChildren": {
     "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)",
     "!doc": "Quickly set the same property across all children of this group, and any child Groups, to a new value.\n\nIf this group contains other Groups then the same property is set across their children as well, iterating down until it reaches the bottom.\nUnlike with `setAll` the property is NOT set on child Groups itself.\n\nThe operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication."
    },
    "checkAll": {
     "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, force: bool)",
     "!doc": "Quickly check that the same property across all children of this group is equal to the given value.\n\nThis call doesn't descend down children, so if you have a Group inside of this group, the property will be checked on the group but not its children."
    },
    "addAll": {
     "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)",
     "!doc": "Adds the amount to the given property on all children in this group.\n\n`Group.addAll('x', 10)` will add 10 to the child.x value for each child."
    },
    "subAll": {
     "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)",
     "!doc": "Subtracts the amount from the given property on all children in this group.\n\n`Group.subAll('x', 10)` will minus 10 from the child.x value for each child."
    },
    "multiplyAll": {
     "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)",
     "!doc": "Multiplies the given property by the amount on all children in this group.\n\n`Group.multiplyAll('x', 2)` will x2 the child.x value for each child."
    },
    "divideAll": {
     "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)",
     "!doc": "Divides the given property by the amount on all children in this group.\n\n`Group.divideAll('x', 2)` will half the child.x value for each child."
    },
    "callAllExists": {
     "!type": "fn(callback: string, existsValue: bool, parameter: +any)",
     "!doc": "Calls a function, specified by name, on all children in the group who exist (or do not exist).\n\nAfter the existsValue parameter you can add as many parameters as you like, which will all be passed to the child callback."
    },
    "callbackFromArray": {
     "!type": "fn(child: ?, callback: +array, length: number)",
     "!doc": "Returns a reference to a function that exists on a child of the group based on the given callback array."
    },
    "callAll": {
     "!type": "fn(method: string, context: string, args: +any)",
     "!doc": "Calls a function, specified by name, on all on children.\n\nThe function is called for all children regardless if they are dead or alive (see callAllExists for different options).\nAfter the method parameter and context you can add as many extra parameters as you like, which will all be passed to the child."
    },
    "preUpdate": {
     "!type": "fn()",
     "!doc": "The core preUpdate - as called by World."
    },
    "update": {
     "!type": "fn()",
     "!doc": "The core update - as called by World."
    },
    "postUpdate": {
     "!type": "fn()",
     "!doc": "The core postUpdate - as called by World."
    },
    "filter": {
     "!type": "fn(predicate: fn(), checkExists: bool) -> +Phaser.ArraySet",
     "!doc": "Find children matching a certain predicate.\n\nFor example:\n\n    var healthyList = Group.filter(function(child, index, children) {\n        return child.health > 10 ? true : false;\n    }, true);\n    healthyList.callAll('attack');\n\nNote: Currently this will skip any children which are Groups themselves."
    },
    "forEach": {
     "!type": "fn(callback: fn(), callbackContext: ?, checkExists: bool, args: +any)",
     "!doc": "Call a function on each child in this group.\n\nAdditional arguments for the callback can be specified after the `checkExists` parameter. For example,\n\n    Group.forEach(awardBonusGold, this, true, 100, 500)\n\nwould invoke `awardBonusGold` function with the parameters `(child, 100, 500)`.\n\nNote: This check will skip any children which are Groups themselves."
    },
    "forEachExists": {
     "!type": "fn(callback: fn(), callbackContext: ?, args: +any)",
     "!doc": "Call a function on each existing child in this group.\n\nSee {@link Phaser.Group#forEach forEach} for details."
    },
    "forEachAlive": {
     "!type": "fn(callback: fn(), callbackContext: ?, args: +any)",
     "!doc": "Call a function on each alive child in this group.\n\nSee {@link Phaser.Group#forEach forEach} for details."
    },
    "forEachDead": {
     "!type": "fn(callback: fn(), callbackContext: ?, args: +any)",
     "!doc": "Call a function on each dead child in this group.\n\nSee {@link Phaser.Group#forEach forEach} for details."
    },
    "sort": {
     "!type": "fn(key: string, order: number)",
     "!doc": "Sort the children in the group according to a particular key and ordering.\n\nCall this function to sort the group according to a particular key value and order.\nFor example to depth sort Sprites for Zelda-style game you might call `group.sort('y', Phaser.Group.SORT_ASCENDING)` at the bottom of your `State.update()`."
    },
    "customSort": {
     "!type": "fn(sortHandler: fn(), context: ?)",
     "!doc": "Sort the children in the group according to custom sort function.\n\nThe `sortHandler` is provided the two parameters: the two children involved in the comparison (a and b).\nIt should return -1 if `a > b`, 1 if `a < b` or 0 if `a === b`."
    },
    "ascendingSortHandler": {
     "!type": "fn(a: ?, b: ?)",
     "!doc": "An internal helper function for the sort process."
    },
    "descendingSortHandler": {
     "!type": "fn(a: ?, b: ?)",
     "!doc": "An internal helper function for the sort process."
    },
    "iterate": {
     "!type": "fn(key: string, value: +any, returnType: number, callback: fn(), callbackContext: ?, args: [?]) -> +any",
     "!doc": "Iterates over the children of the group performing one of several actions for matched children.\n\nA child is considered a match when it has a property, named `key`, whose value is equal to `value`\naccording to a strict equality comparison.\n\nThe result depends on the `returnType`:\n\n- {@link Phaser.Group.RETURN_TOTAL RETURN_TOTAL}:\n    The callback, if any, is applied to all matching children. The number of matched children is returned.\n- {@link Phaser.Group.RETURN_NONE RETURN_NONE}:\n    The callback, if any, is applied to all matching children. No value is returned.\n- {@link Phaser.Group.RETURN_CHILD RETURN_CHILD}:\n    The callback, if any, is applied to the *first* matching child and the *first* matched child is returned.\n    If there is no matching child then null is returned.\n\nIf `args` is specified it must be an array. The matched child will be assigned to the first\nelement and the entire array will be applied to the callback function."
    },
    "getFirstExists": {
     "!type": "fn(exists: bool) -> +any",
     "!doc": "Get the first display object that exists, or doesn't exist."
    },
    "getFirstAlive": {
     "!type": "fn() -> +any",
     "!doc": "Get the first child that is alive (`child.alive === true`).\n\nThis is handy for checking if everything has been wiped out, or choosing a squad leader, etc."
    },
    "getFirstDead": {
     "!type": "fn() -> +any",
     "!doc": "Get the first child that is dead (`child.alive === false`).\n\nThis is handy for checking if everything has been wiped out, or choosing a squad leader, etc."
    },
    "getTop": {
     "!type": "fn() -> +any",
     "!doc": "Return the child at the top of this group.\n\nThe top child is the child displayed (rendered) above every other child."
    },
    "getBottom": {
     "!type": "fn() -> +any",
     "!doc": "Returns the child at the bottom of this group.\n\nThe bottom child the child being displayed (rendered) below every other child."
    },
    "countLiving": {
     "!type": "fn() -> number",
     "!doc": "Get the number of living children in this group."
    },
    "countDead": {
     "!type": "fn() -> number",
     "!doc": "Get the number of dead children in this group."
    },
    "getRandom": {
     "!type": "fn(startIndex: number, length: number) -> +any",
     "!doc": "Returns a random child from the group."
    },
    "remove": {
     "!type": "fn(child: +any, destroy: bool, silent: bool) -> bool",
     "!doc": "Removes the given child from this group.\n\nThis will dispatch an `onRemovedFromGroup` event from the child (if it has one), and optionally destroy the child.\n\nIf the group cursor was referring to the removed child it is updated to refer to the next child."
    },
    "moveAll": {
     "!type": "fn(group: +Phaser.Group, silent: bool) -> +Phaser.Group",
     "!doc": "Moves all children from this Group to the Group given."
    },
    "removeAll": {
     "!type": "fn(destroy: bool, silent: bool)",
     "!doc": "Removes all children from this group, but does not remove the group from its parent."
    },
    "removeBetween": {
     "!type": "fn(startIndex: number, endIndex: number, destroy: bool, silent: bool)",
     "!doc": "Removes all children from this group whose index falls beteen the given startIndex and endIndex values."
    },
    "destroy": {
     "!type": "fn(destroyChildren: bool, soft: bool)",
     "!doc": "Destroys this group.\n\nRemoves all children, then removes this group from its parent and nulls references."
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
    "children": {
     "!type": "[?]"
    }
   },
   "RETURN_NONE": {
    "!type": "number",
    "!doc": "A returnType value, as specified in {@link #iterate} eg."
   },
   "RETURN_TOTAL": {
    "!type": "number",
    "!doc": "A returnType value, as specified in {@link #iterate} eg."
   },
   "RETURN_CHILD": {
    "!type": "number",
    "!doc": "A returnType value, as specified in {@link #iterate} eg."
   },
   "SORT_ASCENDING": {
    "!type": "number",
    "!doc": "A sort ordering value, as specified in {@link #sort} eg."
   },
   "SORT_DESCENDING": {
    "!type": "number",
    "!doc": "A sort ordering value, as specified in {@link #sort} eg."
   }
  },
  "Plugin": {
   "!type": "fn(game: +Phaser.Game, parent: +any)",
   "!doc": "This is a base Plugin template to use for any Phaser plugin development.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running game."
    },
    "parent": {
     "!type": "+any",
     "!doc": "The parent of this plugin. If added to the PluginManager the parent will be set to that, otherwise it will be null."
    },
    "active": {
     "!type": "bool",
     "!doc": "A Plugin with active=true has its preUpdate and update methods called by the parent, otherwise they are skipped."
    },
    "visible": {
     "!type": "bool",
     "!doc": "A Plugin with visible=true has its render and postRender methods called by the parent, otherwise they are skipped."
    },
    "hasPreUpdate": {
     "!type": "bool",
     "!doc": "A flag to indicate if this plugin has a preUpdate method."
    },
    "hasUpdate": {
     "!type": "bool",
     "!doc": "A flag to indicate if this plugin has an update method."
    },
    "hasPostUpdate": {
     "!type": "bool",
     "!doc": "A flag to indicate if this plugin has a postUpdate method."
    },
    "hasRender": {
     "!type": "bool",
     "!doc": "A flag to indicate if this plugin has a render method."
    },
    "hasPostRender": {
     "!type": "bool",
     "!doc": "A flag to indicate if this plugin has a postRender method."
    },
    "preUpdate": {
     "!type": "fn()",
     "!doc": "Pre-update is called at the very start of the update cycle, before any other subsystems have been updated (including Physics).\nIt is only called if active is set to true."
    },
    "update": {
     "!type": "fn()",
     "!doc": "Update is called after all the core subsystems (Input, Tweens, Sound, etc) and the State have updated, but before the render.\nIt is only called if active is set to true."
    },
    "render": {
     "!type": "fn()",
     "!doc": "Render is called right after the Game Renderer completes, but before the State.render.\nIt is only called if visible is set to true."
    },
    "postRender": {
     "!type": "fn()",
     "!doc": "Post-render is called after the Game Renderer and State.render have run.\nIt is only called if visible is set to true."
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "Clear down this Plugin and null out references"
    }
   }
  },
  "PluginManager": {
   "!type": "fn(game: +Phaser.Game)",
   "!doc": "The Plugin Manager is responsible for the loading, running and unloading of Phaser Plugins.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running game."
    },
    "plugins": {
     "!type": "[?]",
     "!doc": "An array of all the plugins being managed by this PluginManager."
    },
    "add": {
     "!type": "fn(plugin: ?|+Phaser.Plugin, parameter: ?) -> +Phaser.Plugin",
     "!doc": "Add a new Plugin into the PluginManager.\nThe Plugin must have 2 properties: game and parent. Plugin.game is set to the game reference the PluginManager uses, and parent is set to the PluginManager."
    },
    "remove": {
     "!type": "fn(plugin: +Phaser.Plugin)",
     "!doc": "Remove a Plugin from the PluginManager. It calls Plugin.destroy on the plugin before removing it from the manager."
    },
    "removeAll": {
     "!type": "fn()",
     "!doc": "Remove all Plugins from the PluginManager. It calls Plugin.destroy on every plugin before removing it from the manager."
    },
    "preUpdate": {
     "!type": "fn()",
     "!doc": "Pre-update is called at the very start of the update cycle, before any other subsystems have been updated (including Physics).\nIt only calls plugins who have active=true."
    },
    "update": {
     "!type": "fn()",
     "!doc": "Update is called after all the core subsystems (Input, Tweens, Sound, etc) and the State have updated, but before the render.\nIt only calls plugins who have active=true."
    },
    "postUpdate": {
     "!type": "fn()",
     "!doc": "PostUpdate is the last thing to be called before the world render.\nIn particular, it is called after the world postUpdate, which means the camera has been adjusted.\nIt only calls plugins who have active=true."
    },
    "render": {
     "!type": "fn()",
     "!doc": "Render is called right after the Game Renderer completes, but before the State.render.\nIt only calls plugins who have visible=true."
    },
    "postRender": {
     "!type": "fn()",
     "!doc": "Post-render is called after the Game Renderer and State.render have run.\nIt only calls plugins who have visible=true."
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "Clear down this PluginManager, calls destroy on every plugin and nulls out references."
    }
   }
  },
  "ScaleManager": {
   "!type": "fn(game: +Phaser.Game, width: number|string, height: number|string)",
   "!doc": "Create a new ScaleManager object - this is done automatically by {@link Phaser.Game}\n\nThe `width` and `height` constructor parameters can either be a number which represents pixels or a string that represents a percentage: e.g. `800` (for 800 pixels) or `\"80%\"` for 80%.",
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
     "!type": "bool",
     "!doc": "True only if fullscreen support will be used. (Changing to fullscreen still might not work.)"
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
     "!type": "fn()",
     "!doc": "Start the ScaleManager."
    },
    "parseConfig": {
     "!type": "fn(config: ?)",
     "!doc": "Load configuration settings."
    },
    "setupScale": {
     "!type": "fn(width: number|string, height: number|string)",
     "!doc": "Calculates and sets the game dimensions based on the given width and height.\n\nThis should _not_ be called when in fullscreen mode."
    },
    "setGameSize": {
     "!type": "fn(width: number, height: number)",
     "!doc": "Set the actual Game size.\nUse this instead of directly changing `game.width` or `game.height`.\n\nThe actual physical display (Canvas element size) depends on various settings including\n- Scale mode\n- Scaling factor\n- Size of Canvas's parent element or CSS rules such as min-height/max-height;\n- The size of the Window"
    },
    "setUserScale": {
     "!type": "fn(hScale: number, vScale: +numer, hTrim: number, vTrim: number)",
     "!doc": "Set a User scaling factor used in the USER_SCALE scaling mode.\n\nThe target canvas size is computed by:\n\n    canvas.width = (game.width * hScale) - hTrim\n    canvas.height = (game.height * vScale) - vTrim\n\nThis method can be used in the {@link Phaser.ScaleManager#setResizeCallback resize callback}."
    },
    "setResizeCallback": {
     "!type": "fn(callback: fn(), context: ?)",
     "!doc": "Sets the callback that will be invoked before sizing calculations.\n\nThis is the appropriate place to call {@link #setUserScale} if needing custom dynamic scaling.\n\nThe callback is supplied with two arguments `scale` and `parentBounds` where `scale` is the ScaleManager\nand `parentBounds`, a Phaser.Rectangle, is the size of the Parent element.\n\nThis callback\n- May be invoked even though the parent container or canvas sizes have not changed\n- Unlike {@link #onSizeChange}, it runs _before_ the canvas is guaranteed to be updated\n- Will be invoked from `preUpdate`, _even when_ the game is paused    \n\nSee {@link #onSizeChange} for a better way of reacting to layout updates."
    },
    "setMinMax": {
     "!type": "fn(minWidth: number, minHeight: number, maxWidth: number, maxHeight: number)",
     "!doc": "Set the min and max dimensions for the Display canvas.\n\n_Note:_ The min/max dimensions are only applied in some cases\n- When the device is not in an incorrect orientation; or\n- The scale mode is EXACT_FIT when not in fullscreen"
    },
    "preUpdate": {
     "!type": "fn()",
     "!doc": "The ScaleManager.preUpdate is called automatically by the core Game loop."
    },
    "forceOrientation": {
     "!type": "fn(forceLandscape: bool, forcePortrait: bool)",
     "!doc": "Force the game to run in only one orientation.\n\nThis enables generation of incorrect orientation signals and affects resizing but does not otherwise rotate or lock the orientation.\n\nOrientation checks are performed via the Screen Orientation API, if available in browser. This means it will check your monitor\norientation on desktop, or your device orientation on mobile, rather than comparing actual game dimensions. If you need to check the \nviewport dimensions instead and bypass the Screen Orientation API then set: `ScaleManager.compatibility.orientationFallback = 'viewport'`"
    },
    "refresh": {
     "!type": "fn()",
     "!doc": "The \"refresh\" methods informs the ScaleManager that a layout refresh is required.\n\nThe ScaleManager automatically queues a layout refresh (eg. updates the Game size or Display canvas layout)\nwhen the browser is resized, the orientation changes, or when there is a detected change\nof the Parent size. Refreshing is also done automatically when public properties,\nsuch as {@link #scaleMode}, are updated or state-changing methods are invoked.\n\nThe \"refresh\" method _may_ need to be used in a few (rare) situtations when\n\n- a device change event is not correctly detected; or\n- the Parent size changes (and an immediate reflow is desired); or\n- the ScaleManager state is updated by non-standard means; or\n- certain {@link #compatibility} properties are manually changed.\n\nThe queued layout refresh is not immediate but will run promptly in an upcoming `preRender`."
    },
    "getParentBounds": {
     "!type": "fn(target: +Phaser.Rectangle) -> +Phaser.Rectangle",
     "!doc": "Returns the computed Parent size/bounds that the Display canvas is allowed/expected to fill.\n\nIf in fullscreen mode or without parent (see {@link #parentIsWindow}),\nthis will be the bounds of the visual viewport itself.\n\nThis function takes the {@link #windowConstraints} into consideration - if the parent is partially outside\nthe viewport then this function may return a smaller than expected size.\n\nValues are rounded to the nearest pixel."
    },
    "createFullScreenTarget": {
     "!type": "fn()",
     "!doc": "Creates a fullscreen target. This is called automatically as as needed when entering\nfullscreen mode and the resulting element is supplied to {@link #onFullScreenInit}.\n\nUse {@link #onFullScreenInit} to customize the created object."
    },
    "startFullScreen": {
     "!type": "fn(antialias: bool, allowTrampoline: bool) -> bool",
     "!doc": "Start the browsers fullscreen mode - this _must_ be called from a user input Pointer or Mouse event.\n\nThe Fullscreen API must be supported by the browser for this to work - it is not the same as setting\nthe game size to fill the browser window. See {@link Phaser.ScaleManager#compatibility compatibility.supportsFullScreen} to check if the current\ndevice is reported to support fullscreen mode.\n\nThe {@link #fullScreenFailed} signal will be dispatched if the fullscreen change request failed or the game does not support the Fullscreen API."
    },
    "stopFullScreen": {
     "!type": "fn() -> bool",
     "!doc": "Stops / exits fullscreen mode, if active."
    },
    "scaleSprite": {
     "!type": "fn(sprite: +Phaser.Sprite|+Phaser.Image, width: number, height: number, letterBox: bool) -> +Phaser.Sprite|+Phaser.Image",
     "!doc": "Takes a Sprite or Image object and scales it to fit the given dimensions.\nScaling happens proportionally without distortion to the sprites texture.\nThe letterBox parameter controls if scaling will produce a letter-box effect or zoom the\nsprite until it fills the given values. Note that with letterBox set to false the scaled sprite may spill out over either\nthe horizontal or vertical sides of the target dimensions. If you wish to stop this you can crop the Sprite."
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "Destroys the ScaleManager and removes any event listeners.\nThis should probably only be called when the game is destroyed."
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
    "!type": "number",
    "!doc": "A scale mode that stretches content to fill all available space - see {@link Phaser.ScaleManager#scaleMode scaleMode}."
   },
   "NO_SCALE": {
    "!type": "number",
    "!doc": "A scale mode that prevents any scaling - see {@link Phaser.ScaleManager#scaleMode scaleMode}."
   },
   "SHOW_ALL": {
    "!type": "number",
    "!doc": "A scale mode that shows the entire game while maintaining proportions - see {@link Phaser.ScaleManager#scaleMode scaleMode}."
   },
   "RESIZE": {
    "!type": "number",
    "!doc": "A scale mode that causes the Game size to change - see {@link Phaser.ScaleManager#scaleMode scaleMode}."
   },
   "USER_SCALE": {
    "!type": "number",
    "!doc": "A scale mode that allows a custom scale factor - see {@link Phaser.ScaleManager#scaleMode scaleMode}."
   }
  },
  "Signal": {
   "!type": "fn()",
   "!doc": "A Signal is an event dispatch mechanism that supports broadcasting to multiple listeners.\n\nEvent listeners are uniquely identified by the listener/callback function and the context.",
   "prototype": {
    "memorize": {
     "!type": "bool"
    },
    "active": {
     "!type": "bool"
    },
    "has": {
     "!type": "fn(listener: fn(), context: ?) -> bool",
     "!doc": "Check if a specific listener is attached."
    },
    "add": {
     "!type": "fn(listener: fn(), listenerContext: ?, priority: number, args: +any) -> +Phaser.SignalBinding",
     "!doc": "Add an event listener for this signal.\n\nAn event listener is a callback with a related context and priority.\n\nYou can optionally provide extra arguments which will be passed to the callback after any internal parameters.\n\nFor example: `Phaser.Key.onDown` when dispatched will send the Phaser.Key object that caused the signal as the first parameter.\nAny arguments you've specified after `priority` will be sent as well:\n\n`fireButton.onDown.add(shoot, this, 0, 'lazer', 100);`\n\nWhen onDown dispatches it will call the `shoot` callback passing it: `Phaser.Key, 'lazer', 100`.\n\nWhere the first parameter is the one that Key.onDown dispatches internally and 'lazer', \nand the value 100 were the custom arguments given in the call to 'add'."
    },
    "addOnce": {
     "!type": "fn(listener: fn(), listenerContext: ?, priority: number, args: +any) -> +Phaser.SignalBinding",
     "!doc": "Add a one-time listener - the listener is automatically removed after the first execution.\n\nIf there is as {@link Phaser.Signal#memorize memorized} event then it will be dispatched and\nthe listener will be removed immediately."
    },
    "remove": {
     "!type": "fn(listener: fn(), context: ?) -> fn()",
     "!doc": "Remove a single event listener."
    },
    "removeAll": {
     "!type": "fn(context: ?)",
     "!doc": "Remove all event listeners."
    },
    "getNumListeners": {
     "!type": "fn() -> number",
     "!doc": "Gets the total number of listeners attached to this Signal."
    },
    "halt": {
     "!type": "fn()",
     "!doc": "Stop propagation of the event, blocking the dispatch to next listener on the queue.\n\nThis should be called only during event dispatch as calling it before/after dispatch won't affect another broadcast.\nSee {@link #active} to enable/disable the signal entirely."
    },
    "dispatch": {
     "!type": "fn(params: +any)",
     "!doc": "Dispatch / broadcast the event to all listeners.\n\nTo create an instance-bound dispatch for this Signal, use {@link #boundDispatch}."
    },
    "forget": {
     "!type": "fn()",
     "!doc": "Forget the currently {@link Phaser.Signal#memorize memorized} event, if any."
    },
    "dispose": {
     "!type": "fn()",
     "!doc": "Dispose the signal - no more events can be dispatched.\n\nThis removes all event listeners and clears references to external objects.\nCalling methods on a disposed objects results in undefined behavior."
    }
   }
  },
  "SignalBinding": {
   "!type": "fn(signal: +Phaser.Signal, listener: fn(), isOnce: bool, listenerContext: ?, priority: number, args: +any)",
   "!doc": "Object that represents a binding between a Signal and a listener function.\nThis is an internal constructor and shouldn't be created directly.\nInspired by Joa Ebert AS3 SignalBinding and Robert Penner's Slot classes.",
   "prototype": {
    "context": {
     "!type": "?",
     "!doc": "Context on which listener will be executed (object that should represent the `this` variable inside listener function)."
    },
    "callCount": {
     "!type": "number",
     "!doc": "The number of times the handler function has been called."
    },
    "active": {
     "!type": "bool"
    },
    "params": {
     "!type": "+array|+null"
    },
    "execute": {
     "!type": "fn(paramsArr: [?]) -> +any",
     "!doc": "Call listener passing arbitrary parameters.\nIf binding was added using `Signal.addOnce()` it will be automatically removed from signal dispatch queue, this method is used internally for the signal dispatch."
    },
    "detach": {
     "!type": "fn() -> +null|fn()",
     "!doc": "Detach binding from signal.\nalias to: @see mySignal.remove(myBinding.getListener());"
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
   "!doc": "The Stage controls root level display objects upon which everything is displayed.\nIt also handles browser visibility handling and the pausing due to loss of focus.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running Game."
    },
    "name": {
     "!type": "string",
     "!doc": "The name of this object."
    },
    "disableVisibilityChange": {
     "!type": "bool",
     "!doc": "By default if the browser tab loses focus the game will pause. You can stop that behaviour by setting this property to true."
    },
    "exists": {
     "!type": "bool",
     "!doc": "If exists is true the Stage and all children are updated, otherwise it is skipped."
    },
    "currentRenderOrderID": {
     "!type": "number",
     "!doc": "Reset each frame, keeps a count of the total number of objects updated."
    },
    "parseConfig": {
     "!type": "fn(config: ?)",
     "!doc": "Parses a Game configuration object."
    },
    "preUpdate": {
     "!type": "fn()",
     "!doc": "This is called automatically after the plugins preUpdate and before the State.update.\nMost objects have preUpdate methods and it's where initial movement and positioning is done."
    },
    "update": {
     "!type": "fn()",
     "!doc": "This is called automatically after the State.update, but before particles or plugins update."
    },
    "postUpdate": {
     "!type": "fn()",
     "!doc": "This is called automatically before the renderer runs and after the plugins have updated.\nIn postUpdate this is where all the final physics calculatations and object positioning happens.\nThe objects are processed in the order of the display list.\nThe only exception to this is if the camera is following an object, in which case that is updated first."
    },
    "updateTransform": {
     "!type": "fn()",
     "!doc": "Updates the transforms for all objects on the display list.\nThis overrides the Pixi default as we don't need the interactionManager, but do need the game property check."
    },
    "checkVisibility": {
     "!type": "fn()",
     "!doc": "Starts a page visibility event listener running, or window.onpagehide/onpageshow if not supported by the browser.\nAlso listens for window.onblur and window.onfocus."
    },
    "visibilityChange": {
     "!type": "fn(event: +Event)",
     "!doc": "This method is called when the document visibility is changed."
    },
    "setBackgroundColor": {
     "!type": "fn(backgroundColor: number|string)",
     "!doc": "Sets the background color for the Stage.\n\nThe color can be given as a hex string (`'#RRGGBB'`), a CSS color string (`'rgb(r,g,b)'`), or a numeric value (`0xRRGGBB`).\n\nAn alpha channel is _not_ supported and will be ignored."
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "Destroys the Stage and removes event listeners."
    },
    "backgroundColor": {
     "!type": "number|string",
     "!doc": "Gets and sets the background color of the stage. The color can be given as a number: 0xff0000 or a hex string: '#ff0000'"
    },
    "smoothed": {
     "!type": "bool",
     "!doc": "Set to true to smooth all sprites rendered on this Stage, or false to disable smoothing (great for pixel art)"
    }
   }
  },
  "State": {
   "!type": "fn()",
   "!doc": "This is a base State class which can be extended if you are creating your own game.\nIt provides quick access to common functions such as the camera, cache, input, match, sound and more.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "This is a reference to the currently running Game."
    },
    "key": {
     "!type": "string",
     "!doc": "The string based identifier given to the State when added into the State Manager."
    },
    "add": {
     "!type": "+Phaser.GameObjectFactory",
     "!doc": "A reference to the GameObjectFactory which can be used to add new objects to the World."
    },
    "make": {
     "!type": "+Phaser.GameObjectCreator",
     "!doc": "A reference to the GameObjectCreator which can be used to make new objects."
    },
    "camera": {
     "!type": "+Phaser.Camera",
     "!doc": "A handy reference to World.camera."
    },
    "cache": {
     "!type": "+Phaser.Cache",
     "!doc": "A reference to the game cache which contains any loaded or generated assets, such as images, sound and more."
    },
    "input": {
     "!type": "+Phaser.Input",
     "!doc": "A reference to the Input Manager."
    },
    "load": {
     "!type": "+Phaser.Loader",
     "!doc": "A reference to the Loader, which you mostly use in the preload method of your state to load external assets."
    },
    "math": {
     "!type": "+Phaser.Math",
     "!doc": "A reference to Math class with lots of helpful functions."
    },
    "sound": {
     "!type": "+Phaser.SoundManager",
     "!doc": "A reference to the Sound Manager which can create, play and stop sounds, as well as adjust global volume."
    },
    "scale": {
     "!type": "+Phaser.ScaleManager",
     "!doc": "A reference to the Scale Manager which controls the way the game scales on different displays."
    },
    "stage": {
     "!type": "+Phaser.Stage",
     "!doc": "A reference to the Stage."
    },
    "time": {
     "!type": "+Phaser.Time",
     "!doc": "A reference to the game clock and timed events system."
    },
    "tweens": {
     "!type": "+Phaser.TweenManager",
     "!doc": "A reference to the tween manager."
    },
    "world": {
     "!type": "+Phaser.World",
     "!doc": "A reference to the game world. All objects live in the Game World and its size is not bound by the display resolution."
    },
    "particles": {
     "!type": "+Phaser.Particles",
     "!doc": "The Particle Manager. It is called during the core gameloop and updates any Particle Emitters it has created."
    },
    "physics": {
     "!type": "+Phaser.Physics",
     "!doc": "A reference to the physics manager which looks after the different physics systems available within Phaser."
    },
    "rnd": {
     "!type": "+Phaser.RandomDataGenerator",
     "!doc": "A reference to the seeded and repeatable random data generator."
    },
    "init": {
     "!type": "fn()",
     "!doc": "init is the very first function called when your State starts up. It's called before preload, create or anything else.\nIf you need to route the game away to another State you could do so here, or if you need to prepare a set of variables\nor objects before the preloading starts."
    },
    "preload": {
     "!type": "fn()",
     "!doc": "preload is called first. Normally you'd use this to load your game assets (or those needed for the current State)\nYou shouldn't create any objects in this method that require assets that you're also loading in this method, as\nthey won't yet be available."
    },
    "loadUpdate": {
     "!type": "fn()",
     "!doc": "loadUpdate is called during the Loader process. This only happens if you've set one or more assets to load in the preload method."
    },
    "loadRender": {
     "!type": "fn()",
     "!doc": "loadRender is called during the Loader process. This only happens if you've set one or more assets to load in the preload method.\nThe difference between loadRender and render is that any objects you render in this method you must be sure their assets exist."
    },
    "create": {
     "!type": "fn()",
     "!doc": "create is called once preload has completed, this includes the loading of any assets from the Loader.\nIf you don't have a preload method then create is the first method called in your State."
    },
    "update": {
     "!type": "fn()",
     "!doc": "The update method is left empty for your own use.\nIt is called during the core game loop AFTER debug, physics, plugins and the Stage have had their preUpdate methods called.\nIf is called BEFORE Stage, Tweens, Sounds, Input, Physics, Particles and Plugins have had their postUpdate methods called."
    },
    "preRender": {
     "!type": "fn()",
     "!doc": "The preRender method is called after all Game Objects have been updated, but before any rendering takes place."
    },
    "render": {
     "!type": "fn()",
     "!doc": "Nearly all display objects in Phaser render automatically, you don't need to tell them to render.\nHowever the render method is called AFTER the game renderer and plugins have rendered, so you're able to do any\nfinal post-processing style effects here. Note that this happens before plugins postRender takes place."
    },
    "resize": {
     "!type": "fn()",
     "!doc": "If your game is set to Scalemode RESIZE then each time the browser resizes it will call this function, passing in the new width and height."
    },
    "paused": {
     "!type": "fn()",
     "!doc": "This method will be called if the core game loop is paused."
    },
    "resumed": {
     "!type": "fn()",
     "!doc": "This method will be called when the core game loop resumes from a paused state."
    },
    "pauseUpdate": {
     "!type": "fn()",
     "!doc": "pauseUpdate is called while the game is paused instead of preUpdate, update and postUpdate."
    },
    "shutdown": {
     "!type": "fn()",
     "!doc": "This method will be called when the State is shutdown (i.e. you switch to another state from this one)."
    }
   }
  },
  "StateManager": {
   "!type": "fn(game: +Phaser.Game, pendingState: +Phaser.State|?)",
   "!doc": "The State Manager is responsible for loading, setting up and switching game states.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running game."
    },
    "states": {
     "!type": "?",
     "!doc": "The object containing Phaser.States."
    },
    "current": {
     "!type": "string",
     "!doc": "The current active State object."
    },
    "onStateChange": {
     "!type": "+Phaser.Signal"
    },
    "onInitCallback": {
     "!type": "fn()",
     "!doc": "This is called when the state is set as the active state."
    },
    "onPreloadCallback": {
     "!type": "fn()",
     "!doc": "This is called when the state starts to load assets."
    },
    "onCreateCallback": {
     "!type": "fn()",
     "!doc": "This is called when the state preload has finished and creation begins."
    },
    "onUpdateCallback": {
     "!type": "fn()",
     "!doc": "This is called when the state is updated, every game loop. It doesn't happen during preload (@see onLoadUpdateCallback)."
    },
    "onRenderCallback": {
     "!type": "fn()",
     "!doc": "This is called post-render. It doesn't happen during preload (see onLoadRenderCallback)."
    },
    "onResizeCallback": {
     "!type": "fn()",
     "!doc": "This is called if ScaleManager.scalemode is RESIZE and a resize event occurs. It's passed the new width and height."
    },
    "onPreRenderCallback": {
     "!type": "fn()",
     "!doc": "This is called before the state is rendered and before the stage is cleared but after all game objects have had their final properties adjusted."
    },
    "onLoadUpdateCallback": {
     "!type": "fn()",
     "!doc": "This is called when the State is updated during the preload phase."
    },
    "onLoadRenderCallback": {
     "!type": "fn()",
     "!doc": "This is called when the State is rendered during the preload phase."
    },
    "onPausedCallback": {
     "!type": "fn()",
     "!doc": "This is called when the game is paused."
    },
    "onResumedCallback": {
     "!type": "fn()",
     "!doc": "This is called when the game is resumed from a paused state."
    },
    "onPauseUpdateCallback": {
     "!type": "fn()",
     "!doc": "This is called every frame while the game is paused."
    },
    "onShutDownCallback": {
     "!type": "fn()",
     "!doc": "This is called when the state is shut down (i.e. swapped to another state)."
    },
    "add": {
     "!type": "fn(key: string, state: +Phaser.State|?|fn(), autoStart: bool)",
     "!doc": "Adds a new State into the StateManager. You must give each State a unique key by which you'll identify it.\nThe State can be either a Phaser.State object (or an object that extends it), a plain JavaScript object or a function.\nIf a function is given a new state object will be created by calling it."
    },
    "remove": {
     "!type": "fn(key: string)",
     "!doc": "Delete the given state."
    },
    "start": {
     "!type": "fn(key: string, clearWorld: bool, clearCache: bool, parameter: ?)",
     "!doc": "Start the given State. If a State is already running then State.shutDown will be called (if it exists) before switching to the new State."
    },
    "restart": {
     "!type": "fn(clearWorld: bool, clearCache: bool, parameter: ?)",
     "!doc": "Restarts the current State. State.shutDown will be called (if it exists) before the State is restarted."
    },
    "preUpdate": {
     "!type": "fn()",
     "!doc": "preUpdate is called right at the start of the game loop. It is responsible for changing to a new state that was requested previously."
    },
    "clearCurrentState": {
     "!type": "fn()",
     "!doc": "This method clears the current State, calling its shutdown callback. The process also removes any active tweens,\nresets the camera, resets input, clears physics, removes timers and if set clears the world and cache too."
    },
    "checkState": {
     "!type": "fn(key: string) -> bool",
     "!doc": "Checks if a given phaser state is valid. A State is considered valid if it has at least one of the core functions: preload, create, update or render."
    },
    "link": {
     "!type": "fn(key: string)",
     "!doc": "Links game properties to the State given by the key."
    },
    "unlink": {
     "!type": "fn(key: string)",
     "!doc": "Nulls all State level Phaser properties, including a reference to Game."
    },
    "getCurrentState": {
     "!type": "fn() -> ?",
     "!doc": "Gets the current State."
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
     "!type": "fn()",
     "!doc": "Removes all StateManager callback references to the State object, nulls the game reference and clears the States object.\nYou don't recover from this without rebuilding the Phaser instance again."
    },
    "created": {
     "!type": "bool",
     "!doc": "True if the current state has had its `create` method run (if it has one, if not this is true by default)."
    }
   }
  },
  "World": {
   "!type": "fn(game: +Phaser.Game)",
   "!doc": "\"This world is but a canvas to our imagination.\" - Henry David Thoreau\n\nA game has only one world. The world is an abstract place in which all game objects live. It is not bound\nby stage limits and can be any size. You look into the world via cameras. All game objects live within\nthe world at world-based coordinates. By default a world is created the same size as your Stage.",
   "prototype": {
    "bounds": {
     "!type": "+Phaser.Rectangle",
     "!doc": "Bound of this world that objects can not escape from."
    },
    "camera": {
     "!type": "+Phaser.Camera",
     "!doc": "Camera instance."
    },
    "_definedSize": {
     "!type": "bool",
     "!doc": "True if the World has been given a specifically defined size (i.e. from a Tilemap or direct in code) or false if it's just matched to the Game dimensions."
    },
    "_width": {
     "!type": "number",
     "!doc": "The defined width of the World. Sometimes the bounds needs to grow larger than this (if you resize the game) but this retains the original requested dimension."
    },
    "_height": {
     "!type": "number",
     "!doc": "The defined height of the World. Sometimes the bounds needs to grow larger than this (if you resize the game) but this retains the original requested dimension."
    },
    "boot": {
     "!type": "fn()",
     "!doc": "Initialises the game world."
    },
    "stateChange": {
     "!type": "fn()",
     "!doc": "Called whenever the State changes or resets.\n\nIt resets the world.x and world.y coordinates back to zero,\nthen resets the Camera."
    },
    "setBounds": {
     "!type": "fn(x: number, y: number, width: number, height: number)",
     "!doc": "Updates the size of this world and sets World.x/y to the given values\nThe Camera bounds and Physics bounds (if set) are also updated to match the new World bounds."
    },
    "resize": {
     "!type": "fn(width: number, height: number)",
     "!doc": "Updates the size of this world. Note that this doesn't modify the world x/y coordinates, just the width and height."
    },
    "shutdown": {
     "!type": "fn()",
     "!doc": "Destroyer of worlds."
    },
    "wrap": {
     "!type": "fn(sprite: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Text, padding: number, useBounds: bool, horizontal: bool, vertical: bool)",
     "!doc": "This will take the given game object and check if its x/y coordinates fall outside of the world bounds.\nIf they do it will reposition the object to the opposite side of the world, creating a wrap-around effect.\nIf sprite has a P2 body then the body (sprite.body) should be passed as first parameter to the function."
    },
    "width": {
     "!type": "number",
     "!doc": "Gets or sets the current width of the game world. The world can never be smaller than the game (canvas) dimensions."
    },
    "height": {
     "!type": "number",
     "!doc": "Gets or sets the current height of the game world. The world can never be smaller than the game (canvas) dimensions."
    },
    "centerX": {
     "!type": "number",
     "!doc": "Gets the X position corresponding to the center point of the world."
    },
    "centerY": {
     "!type": "number",
     "!doc": "Gets the Y position corresponding to the center point of the world."
    },
    "randomX": {
     "!type": "number",
     "!doc": "Gets a random integer which is lesser than or equal to the current width of the game world."
    },
    "randomY": {
     "!type": "number",
     "!doc": "Gets a random integer which is lesser than or equal to the current height of the game world."
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
     "!type": "number",
     "!doc": "The const physics body type of this object."
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
    "classType": {
     "!type": "?"
    },
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
     "!type": "number",
     "!doc": "The current index of the Group cursor. Advance it with Group.next."
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
     "!type": "fn(child: +DisplayObject, silent: bool) -> +DisplayObject",
     "!doc": "Adds an existing object as the top child in this group.\n\nThe child is automatically added to the top of the group and is displayed on top of every previous child.\n\nIf Group.enableBody is set then a physics body will be created on the object, so long as one does not already exist.\n\nUse {@link #addAt} to control where a child is added. Use {@link #create} to create and add a new child."
    },
    "addToHash": {
     "!type": "fn(child: +DisplayObject) -> bool",
     "!doc": "Adds a child of this Group into the hash array.\nThis call will return false if the child is not a child of this Group, or is already in the hash."
    },
    "removeFromHash": {
     "!type": "fn(child: +DisplayObject) -> bool",
     "!doc": "Removes a child of this Group from the hash array.\nThis call will return false if the child is not in the hash."
    },
    "addMultiple": {
     "!type": "fn(children: [?]|+Phaser.Group, silent: bool) -> [?]|+Phaser.Group",
     "!doc": "Adds an array of existing Display Objects to this Group.\n\nThe Display Objects are automatically added to the top of this Group, and will render on-top of everything already in this Group.\n\nAs well as an array you can also pass another Group as the first argument. In this case all of the children from that\nGroup will be removed from it and added into this Group."
    },
    "addAt": {
     "!type": "fn(child: +DisplayObject, index: number, silent: bool) -> +DisplayObject",
     "!doc": "Adds an existing object to this group.\n\nThe child is added to the group at the location specified by the index value, this allows you to control child ordering."
    },
    "getAt": {
     "!type": "fn(index: number) -> +DisplayObject|number",
     "!doc": "Returns the child found at the given index within this group."
    },
    "create": {
     "!type": "fn(x: number, y: number, key: string, frame: number|string, exists: bool) -> +DisplayObject",
     "!doc": "Creates a new Phaser.Sprite object and adds it to the top of this group.\n\nUse {@link #classType} to change the type of object creaded."
    },
    "createMultiple": {
     "!type": "fn(quantity: number, key: string, frame: number|string, exists: bool)",
     "!doc": "Creates multiple Phaser.Sprite objects and adds them to the top of this group.\n\nUseful if you need to quickly generate a pool of identical sprites, such as bullets.\n\nBy default the sprites will be set to not exist and will be positioned at 0, 0 (relative to the group.x/y).\nUse {@link #classType} to change the type of object created."
    },
    "updateZ": {
     "!type": "fn()",
     "!doc": "Internal method that re-applies all of the children's Z values.\n\nThis must be called whenever children ordering is altered so that their `z` indices are correctly updated."
    },
    "resetCursor": {
     "!type": "fn(index: number) -> +any",
     "!doc": "Sets the group cursor to the first child in the group.\n\nIf the optional index parameter is given it sets the cursor to the object at that index instead."
    },
    "next": {
     "!type": "fn() -> +any",
     "!doc": "Advances the group cursor to the next (higher) object in the group.\n\nIf the cursor is at the end of the group (top child) it is moved the start of the group (bottom child)."
    },
    "previous": {
     "!type": "fn() -> +any",
     "!doc": "Moves the group cursor to the previous (lower) child in the group.\n\nIf the cursor is at the start of the group (bottom child) it is moved to the end (top child)."
    },
    "swap": {
     "!type": "fn(child1: +any, child2: +any)",
     "!doc": "Swaps the position of two children in this group.\n\nBoth children must be in this group, a child cannot be swapped with itself, and unparented children cannot be swapped."
    },
    "bringToTop": {
     "!type": "fn(child: +any) -> +any",
     "!doc": "Brings the given child to the top of this group so it renders above all other children."
    },
    "sendToBack": {
     "!type": "fn(child: +any) -> +any",
     "!doc": "Sends the given child to the bottom of this group so it renders below all other children."
    },
    "moveUp": {
     "!type": "fn(child: +any) -> +any",
     "!doc": "Moves the given child up one place in this group unless it's already at the top."
    },
    "moveDown": {
     "!type": "fn(child: +any) -> +any",
     "!doc": "Moves the given child down one place in this group unless it's already at the bottom."
    },
    "xy": {
     "!type": "fn(index: number, x: number, y: number)",
     "!doc": "Positions the child found at the given index within this group to the given x and y coordinates."
    },
    "reverse": {
     "!type": "fn()",
     "!doc": "Reverses all children in this group.\n\nThis operaation applies only to immediate children and does not propagate to subgroups."
    },
    "getIndex": {
     "!type": "fn(child: +any) -> number",
     "!doc": "Get the index position of the given child in this group, which should match the child's `z` property."
    },
    "replace": {
     "!type": "fn(oldChild: +any, newChild: +any) -> +any",
     "!doc": "Replaces a child of this group with the given newChild. The newChild cannot be a member of this group."
    },
    "hasProperty": {
     "!type": "fn(child: +any, key: [?]) -> bool",
     "!doc": "Checks if the child has the given property.\n\nWill scan up to 4 levels deep only."
    },
    "setProperty": {
     "!type": "fn(child: +any, key: +array, value: +any, operation: number, force: bool) -> bool",
     "!doc": "Sets a property to the given value on the child. The operation parameter controls how the value is set.\n\nThe operations are:\n- 0: set the existing value to the given value; if force is `true` a new property will be created if needed\n- 1: will add the given value to the value already present.\n- 2: will subtract the given value from the value already present.\n- 3: will multiply the value already present by the given value.\n- 4: will divide the value already present by the given value."
    },
    "checkProperty": {
     "!type": "fn(child: +any, key: +array, value: +any, force: bool) -> bool",
     "!doc": "Checks a property for the given value on the child."
    },
    "set": {
     "!type": "fn(child: +Phaser.Sprite, key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool) -> bool",
     "!doc": "Quickly set a property on a single child of this group to a new value.\n\nThe operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication."
    },
    "setAll": {
     "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)",
     "!doc": "Quickly set the same property across all children of this group to a new value.\n\nThis call doesn't descend down children, so if you have a Group inside of this group, the property will be set on the group but not its children.\nIf you need that ability please see `Group.setAllChildren`.\n\nThe operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication."
    },
    "setAllChildren": {
     "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)",
     "!doc": "Quickly set the same property across all children of this group, and any child Groups, to a new value.\n\nIf this group contains other Groups then the same property is set across their children as well, iterating down until it reaches the bottom.\nUnlike with `setAll` the property is NOT set on child Groups itself.\n\nThe operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication."
    },
    "checkAll": {
     "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, force: bool)",
     "!doc": "Quickly check that the same property across all children of this group is equal to the given value.\n\nThis call doesn't descend down children, so if you have a Group inside of this group, the property will be checked on the group but not its children."
    },
    "addAll": {
     "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)",
     "!doc": "Adds the amount to the given property on all children in this group.\n\n`Group.addAll('x', 10)` will add 10 to the child.x value for each child."
    },
    "subAll": {
     "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)",
     "!doc": "Subtracts the amount from the given property on all children in this group.\n\n`Group.subAll('x', 10)` will minus 10 from the child.x value for each child."
    },
    "multiplyAll": {
     "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)",
     "!doc": "Multiplies the given property by the amount on all children in this group.\n\n`Group.multiplyAll('x', 2)` will x2 the child.x value for each child."
    },
    "divideAll": {
     "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)",
     "!doc": "Divides the given property by the amount on all children in this group.\n\n`Group.divideAll('x', 2)` will half the child.x value for each child."
    },
    "callAllExists": {
     "!type": "fn(callback: string, existsValue: bool, parameter: +any)",
     "!doc": "Calls a function, specified by name, on all children in the group who exist (or do not exist).\n\nAfter the existsValue parameter you can add as many parameters as you like, which will all be passed to the child callback."
    },
    "callbackFromArray": {
     "!type": "fn(child: ?, callback: +array, length: number)",
     "!doc": "Returns a reference to a function that exists on a child of the group based on the given callback array."
    },
    "callAll": {
     "!type": "fn(method: string, context: string, args: +any)",
     "!doc": "Calls a function, specified by name, on all on children.\n\nThe function is called for all children regardless if they are dead or alive (see callAllExists for different options).\nAfter the method parameter and context you can add as many extra parameters as you like, which will all be passed to the child."
    },
    "preUpdate": {
     "!type": "fn()",
     "!doc": "The core preUpdate - as called by World."
    },
    "update": {
     "!type": "fn()",
     "!doc": "The core update - as called by World."
    },
    "postUpdate": {
     "!type": "fn()",
     "!doc": "The core postUpdate - as called by World."
    },
    "filter": {
     "!type": "fn(predicate: fn(), checkExists: bool) -> +Phaser.ArraySet",
     "!doc": "Find children matching a certain predicate.\n\nFor example:\n\n    var healthyList = Group.filter(function(child, index, children) {\n        return child.health > 10 ? true : false;\n    }, true);\n    healthyList.callAll('attack');\n\nNote: Currently this will skip any children which are Groups themselves."
    },
    "forEach": {
     "!type": "fn(callback: fn(), callbackContext: ?, checkExists: bool, args: +any)",
     "!doc": "Call a function on each child in this group.\n\nAdditional arguments for the callback can be specified after the `checkExists` parameter. For example,\n\n    Group.forEach(awardBonusGold, this, true, 100, 500)\n\nwould invoke `awardBonusGold` function with the parameters `(child, 100, 500)`.\n\nNote: This check will skip any children which are Groups themselves."
    },
    "forEachExists": {
     "!type": "fn(callback: fn(), callbackContext: ?, args: +any)",
     "!doc": "Call a function on each existing child in this group.\n\nSee {@link Phaser.Group#forEach forEach} for details."
    },
    "forEachAlive": {
     "!type": "fn(callback: fn(), callbackContext: ?, args: +any)",
     "!doc": "Call a function on each alive child in this group.\n\nSee {@link Phaser.Group#forEach forEach} for details."
    },
    "forEachDead": {
     "!type": "fn(callback: fn(), callbackContext: ?, args: +any)",
     "!doc": "Call a function on each dead child in this group.\n\nSee {@link Phaser.Group#forEach forEach} for details."
    },
    "sort": {
     "!type": "fn(key: string, order: number)",
     "!doc": "Sort the children in the group according to a particular key and ordering.\n\nCall this function to sort the group according to a particular key value and order.\nFor example to depth sort Sprites for Zelda-style game you might call `group.sort('y', Phaser.Group.SORT_ASCENDING)` at the bottom of your `State.update()`."
    },
    "customSort": {
     "!type": "fn(sortHandler: fn(), context: ?)",
     "!doc": "Sort the children in the group according to custom sort function.\n\nThe `sortHandler` is provided the two parameters: the two children involved in the comparison (a and b).\nIt should return -1 if `a > b`, 1 if `a < b` or 0 if `a === b`."
    },
    "ascendingSortHandler": {
     "!type": "fn(a: ?, b: ?)",
     "!doc": "An internal helper function for the sort process."
    },
    "descendingSortHandler": {
     "!type": "fn(a: ?, b: ?)",
     "!doc": "An internal helper function for the sort process."
    },
    "iterate": {
     "!type": "fn(key: string, value: +any, returnType: number, callback: fn(), callbackContext: ?, args: [?]) -> +any",
     "!doc": "Iterates over the children of the group performing one of several actions for matched children.\n\nA child is considered a match when it has a property, named `key`, whose value is equal to `value`\naccording to a strict equality comparison.\n\nThe result depends on the `returnType`:\n\n- {@link Phaser.Group.RETURN_TOTAL RETURN_TOTAL}:\n    The callback, if any, is applied to all matching children. The number of matched children is returned.\n- {@link Phaser.Group.RETURN_NONE RETURN_NONE}:\n    The callback, if any, is applied to all matching children. No value is returned.\n- {@link Phaser.Group.RETURN_CHILD RETURN_CHILD}:\n    The callback, if any, is applied to the *first* matching child and the *first* matched child is returned.\n    If there is no matching child then null is returned.\n\nIf `args` is specified it must be an array. The matched child will be assigned to the first\nelement and the entire array will be applied to the callback function."
    },
    "getFirstExists": {
     "!type": "fn(exists: bool) -> +any",
     "!doc": "Get the first display object that exists, or doesn't exist."
    },
    "getFirstAlive": {
     "!type": "fn() -> +any",
     "!doc": "Get the first child that is alive (`child.alive === true`).\n\nThis is handy for checking if everything has been wiped out, or choosing a squad leader, etc."
    },
    "getFirstDead": {
     "!type": "fn() -> +any",
     "!doc": "Get the first child that is dead (`child.alive === false`).\n\nThis is handy for checking if everything has been wiped out, or choosing a squad leader, etc."
    },
    "getTop": {
     "!type": "fn() -> +any",
     "!doc": "Return the child at the top of this group.\n\nThe top child is the child displayed (rendered) above every other child."
    },
    "getBottom": {
     "!type": "fn() -> +any",
     "!doc": "Returns the child at the bottom of this group.\n\nThe bottom child the child being displayed (rendered) below every other child."
    },
    "countLiving": {
     "!type": "fn() -> number",
     "!doc": "Get the number of living children in this group."
    },
    "countDead": {
     "!type": "fn() -> number",
     "!doc": "Get the number of dead children in this group."
    },
    "getRandom": {
     "!type": "fn(startIndex: number, length: number) -> +any",
     "!doc": "Returns a random child from the group."
    },
    "remove": {
     "!type": "fn(child: +any, destroy: bool, silent: bool) -> bool",
     "!doc": "Removes the given child from this group.\n\nThis will dispatch an `onRemovedFromGroup` event from the child (if it has one), and optionally destroy the child.\n\nIf the group cursor was referring to the removed child it is updated to refer to the next child."
    },
    "moveAll": {
     "!type": "fn(group: +Phaser.Group, silent: bool) -> +Phaser.Group",
     "!doc": "Moves all children from this Group to the Group given."
    },
    "removeAll": {
     "!type": "fn(destroy: bool, silent: bool)",
     "!doc": "Removes all children from this group, but does not remove the group from its parent."
    },
    "removeBetween": {
     "!type": "fn(startIndex: number, endIndex: number, destroy: bool, silent: bool)",
     "!doc": "Removes all children from this group whose index falls beteen the given startIndex and endIndex values."
    },
    "destroy": {
     "!type": "fn(destroyChildren: bool, soft: bool)",
     "!doc": "Destroys this group.\n\nRemoves all children, then removes this group from its parent and nulls references."
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
    "children": {
     "!type": "[?]"
    }
   }
  },
  "BitmapData": {
   "!type": "fn(game: +Phaser.Game, key: string, width: number, height: number)",
   "!doc": "A BitmapData object contains a Canvas element to which you can draw anything you like via normal Canvas context operations.\nA single BitmapData can be used as the texture for one or many Images/Sprites. \nSo if you need to dynamically create a Sprite texture then they are a good choice.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running game."
    },
    "key": {
     "!type": "string",
     "!doc": "The key of the BitmapData in the Cache, if stored there."
    },
    "width": {
     "!type": "number",
     "!doc": "The width of the BitmapData in pixels."
    },
    "height": {
     "!type": "number",
     "!doc": "The height of the BitmapData in pixels."
    },
    "canvas": {
     "!type": "+HTMLCanvasElement",
     "!doc": "The canvas to which this BitmapData draws."
    },
    "context": {
     "!type": "+CanvasRenderingContext2D",
     "!doc": "The 2d context of the canvas."
    },
    "ctx": {
     "!type": "+CanvasRenderingContext2D",
     "!doc": "A reference to BitmapData.context."
    },
    "imageData": {
     "!type": "+ImageData",
     "!doc": "The context image data.\nPlease note that a call to BitmapData.draw() or BitmapData.copy() does not update immediately this property for performance reason. Use BitmapData.update() to do so.\nThis property is updated automatically after the first game loop, according to the dirty flag property."
    },
    "data": {
     "!type": "+Uint8ClampedArray"
    },
    "pixels": {
     "!type": "+Uint32Array",
     "!doc": "An Uint32Array view into BitmapData.buffer."
    },
    "baseTexture": {
     "!type": "+PIXI.BaseTexture",
     "!doc": "The PIXI.BaseTexture."
    },
    "texture": {
     "!type": "+PIXI.Texture",
     "!doc": "The PIXI.Texture."
    },
    "textureFrame": {
     "!type": "+Phaser.Frame",
     "!doc": "The Frame this BitmapData uses for rendering."
    },
    "type": {
     "!type": "number",
     "!doc": "The const type of this object."
    },
    "disableTextureUpload": {
     "!type": "bool",
     "!doc": "If disableTextureUpload is true this BitmapData will never send its image data to the GPU when its dirty flag is true."
    },
    "dirty": {
     "!type": "bool",
     "!doc": "If dirty this BitmapData will be re-rendered."
    },
    "move": {
     "!type": "fn(x: number, y: number) -> +Phaser.BitmapData",
     "!doc": "Shifts the contents of this BitmapData by the distances given.\n\nThe image will wrap-around the edges on all sides."
    },
    "moveH": {
     "!type": "fn(distance: number) -> +Phaser.BitmapData",
     "!doc": "Shifts the contents of this BitmapData horizontally.\n\nThe image will wrap-around the sides."
    },
    "moveV": {
     "!type": "fn(distance: number) -> +Phaser.BitmapData",
     "!doc": "Shifts the contents of this BitmapData vertically.\n\nThe image will wrap-around the sides."
    },
    "add": {
     "!type": "fn(object: +Phaser.Sprite|[?]|+Phaser.Image|[?]) -> +Phaser.BitmapData",
     "!doc": "Updates the given objects so that they use this BitmapData as their texture.\nThis will replace any texture they will currently have set."
    },
    "load": {
     "!type": "fn(source: +Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapData|+Image|+HTMLCanvasElement|string) -> +Phaser.BitmapData",
     "!doc": "Takes the given Game Object, resizes this BitmapData to match it and then draws it into this BitmapDatas canvas, ready for further processing.\nThe source game object is not modified by this operation.\nIf the source object uses a texture as part of a Texture Atlas or Sprite Sheet, only the current frame will be used for sizing.\nIf a string is given it will assume it's a cache key and look in Phaser.Cache for an image key matching the string."
    },
    "clear": {
     "!type": "fn(x: number, y: number, width: number, height: number) -> +Phaser.BitmapData",
     "!doc": "Clears the BitmapData context using a clearRect.\n\nYou can optionally define the area to clear.\nIf the arguments are left empty it will clear the entire canvas."
    },
    "cls": {
     "!type": "fn()",
     "!doc": "Clears the BitmapData context using a clearRect."
    },
    "fill": {
     "!type": "fn(r: number, g: number, b: number, a: number) -> +Phaser.BitmapData",
     "!doc": "Fills the BitmapData with the given color."
    },
    "generateTexture": {
     "!type": "fn(key: string) -> +PIXI.Texture",
     "!doc": "Creates a new Image element by converting this BitmapDatas canvas into a dataURL.\n\nThe image is then stored in the image Cache using the key given.\n\nFinally a PIXI.Texture is created based on the image and returned.\n\nYou can apply the texture to a sprite or any other supporting object by using either the\nkey or the texture. First call generateTexture:\n\n`var texture = bitmapdata.generateTexture('ball');`\n\nThen you can either apply the texture to a sprite:\n\n`game.add.sprite(0, 0, texture);`\n\nor by using the string based key:\n\n`game.add.sprite(0, 0, 'ball');`"
    },
    "resize": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Resizes the BitmapData. This changes the size of the underlying canvas and refreshes the buffer."
    },
    "update": {
     "!type": "fn(x: number, y: number, width: number, height: number) -> +Phaser.BitmapData",
     "!doc": "This re-creates the BitmapData.imageData from the current context.\nIt then re-builds the ArrayBuffer, the data Uint8ClampedArray reference and the pixels Int32Array.\nIf not given the dimensions defaults to the full size of the context."
    },
    "processPixelRGB": {
     "!type": "fn(callback: fn(), callbackContext: ?, x: number, y: number, width: number, height: number) -> +Phaser.BitmapData",
     "!doc": "Scans through the area specified in this BitmapData and sends a color object for every pixel to the given callback.\nThe callback will be sent a color object with 6 properties: `{ r: number, g: number, b: number, a: number, color: number, rgba: string }`.\nWhere r, g, b and a are integers between 0 and 255 representing the color component values for red, green, blue and alpha.\nThe `color` property is an Int32 of the full color. Note the endianess of this will change per system.\nThe `rgba` property is a CSS style rgba() string which can be used with context.fillStyle calls, among others.\nThe callback will also be sent the pixels x and y coordinates respectively.\nThe callback must return either `false`, in which case no change will be made to the pixel, or a new color object.\nIf a new color object is returned the pixel will be set to the r, g, b and a color values given within it."
    },
    "processPixel": {
     "!type": "fn(callback: fn(), callbackContext: ?, x: number, y: number, width: number, height: number) -> +Phaser.BitmapData",
     "!doc": "Scans through the area specified in this BitmapData and sends the color for every pixel to the given callback along with its x and y coordinates.\nWhatever value the callback returns is set as the new color for that pixel, unless it returns the same color, in which case it's skipped.\nNote that the format of the color received will be different depending on if the system is big or little endian.\nIt is expected that your callback will deal with endianess. If you'd rather Phaser did it then use processPixelRGB instead.\nThe callback will also be sent the pixels x and y coordinates respectively."
    },
    "replaceRGB": {
     "!type": "fn(r1: number, g1: number, b1: number, a1: number, r2: number, g2: number, b2: number, a2: number, region: +Phaser.Rectangle) -> +Phaser.BitmapData",
     "!doc": "Replaces all pixels matching one color with another. The color values are given as two sets of RGBA values.\nAn optional region parameter controls if the replacement happens in just a specific area of the BitmapData or the entire thing."
    },
    "setHSL": {
     "!type": "fn(h: number, s: number, l: number, region: +Phaser.Rectangle) -> +Phaser.BitmapData",
     "!doc": "Sets the hue, saturation and lightness values on every pixel in the given region, or the whole BitmapData if no region was specified."
    },
    "shiftHSL": {
     "!type": "fn(h: number, s: number, l: number, region: +Phaser.Rectangle) -> +Phaser.BitmapData",
     "!doc": "Shifts any or all of the hue, saturation and lightness values on every pixel in the given region, or the whole BitmapData if no region was specified.\nShifting will add the given value onto the current h, s and l values, not replace them.\nThe hue is wrapped to keep it within the range 0 to 1. Saturation and lightness are clamped to not exceed 1."
    },
    "setPixel32": {
     "!type": "fn(x: number, y: number, red: number, green: number, blue: number, alpha: number, immediate: bool) -> +Phaser.BitmapData",
     "!doc": "Sets the color of the given pixel to the specified red, green, blue and alpha values."
    },
    "setPixel": {
     "!type": "fn(x: number, y: number, red: number, green: number, blue: number, immediate: bool) -> +Phaser.BitmapData",
     "!doc": "Sets the color of the given pixel to the specified red, green and blue values."
    },
    "getPixel": {
     "!type": "fn(x: number, y: number, out: ?) -> ?",
     "!doc": "Get the color of a specific pixel in the context into a color object.\nIf you have drawn anything to the BitmapData since it was created you must call BitmapData.update to refresh the array buffer,\notherwise this may return out of date color values, or worse - throw a run-time error as it tries to access an array element that doesn't exist."
    },
    "getPixel32": {
     "!type": "fn(x: number, y: number) -> number",
     "!doc": "Get the color of a specific pixel including its alpha value.\nIf you have drawn anything to the BitmapData since it was created you must call BitmapData.update to refresh the array buffer,\notherwise this may return out of date color values, or worse - throw a run-time error as it tries to access an array element that doesn't exist.\nNote that on little-endian systems the format is 0xAABBGGRR and on big-endian the format is 0xRRGGBBAA."
    },
    "getPixelRGB": {
     "!type": "fn(x: number, y: number, out: ?, hsl: bool, hsv: bool) -> ?",
     "!doc": "Get the color of a specific pixel including its alpha value as a color object containing r,g,b,a and rgba properties.\nIf you have drawn anything to the BitmapData since it was created you must call BitmapData.update to refresh the array buffer,\notherwise this may return out of date color values, or worse - throw a run-time error as it tries to access an array element that doesn't exist."
    },
    "getPixels": {
     "!type": "fn(rect: +Phaser.Rectangle) -> +ImageData",
     "!doc": "Gets all the pixels from the region specified by the given Rectangle object."
    },
    "getFirstPixel": {
     "!type": "fn(direction: number) -> ?",
     "!doc": "Scans the BitmapData, pixel by pixel, until it encounters a pixel that isn't transparent (i.e. has an alpha value > 0).\nIt then stops scanning and returns an object containing the color of the pixel in r, g and b properties and the location in the x and y properties.\n\nThe direction parameter controls from which direction it should start the scan:\n\n0 = top to bottom\n1 = bottom to top\n2 = left to right\n3 = right to left"
    },
    "getBounds": {
     "!type": "fn(rect: +Phaser.Rectangle) -> +Phaser.Rectangle",
     "!doc": "Scans the BitmapData and calculates the bounds. This is a rectangle that defines the extent of all non-transparent pixels.\nThe rectangle returned will extend from the top-left of the image to the bottom-right, excluding transparent pixels."
    },
    "addToWorld": {
     "!type": "fn(x: number, y: number, anchorX: number, anchorY: number, scaleX: number, scaleY: number) -> +Phaser.Image",
     "!doc": "Creates a new Phaser.Image object, assigns this BitmapData to be its texture, adds it to the world then returns it."
    },
    "copy": {
     "!type": "fn(source: +Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapData|+Image|+HTMLCanvasElement|string, x: number, y: number, width: number, height: number, tx: number, ty: number, newWidth: number, newHeight: number, rotate: number, anchorX: number, anchorY: number, scaleX: number, scaleY: number, alpha: number, blendMode: string, roundPx: bool) -> +Phaser.BitmapData",
     "!doc": "Copies a rectangular area from the source object to this BitmapData. If you give `null` as the source it will copy from itself.\nYou can optionally resize, translate, rotate, scale, alpha or blend as it's drawn.\nAll rotation, scaling and drawing takes place around the regions center point by default, but can be changed with the anchor parameters.\nNote that the source image can also be this BitmapData, which can create some interesting effects.\n\nThis method has a lot of parameters for maximum control.\nYou can use the more friendly methods like `copyRect` and `draw` to avoid having to remember them all."
    },
    "copyRect": {
     "!type": "fn(source: +Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapData|+Image|string, area: +Phaser.Rectangle, x: number, y: number, alpha: number, blendMode: string, roundPx: bool) -> +Phaser.BitmapData",
     "!doc": "Copies the area defined by the Rectangle parameter from the source image to this BitmapData at the given location."
    },
    "draw": {
     "!type": "fn(source: +Phaser.Sprite|+Phaser.Image|+Phaser.Text, x: number, y: number, width: number, height: number, blendMode: string, roundPx: bool) -> +Phaser.BitmapData",
     "!doc": "Draws the given Phaser.Sprite, Phaser.Image or Phaser.Text to this BitmapData at the coordinates specified.\nYou can use the optional width and height values to 'stretch' the sprite as it is drawn. This uses drawImage stretching, not scaling.\nWhen drawing it will take into account the Sprites rotation, scale and alpha values."
    },
    "drawGroup": {
     "!type": "fn(group: +Phaser.Group, blendMode: string, roundPx: bool) -> +Phaser.BitmapData",
     "!doc": "Draws the immediate children of a Phaser.Group to this BitmapData.\nChildren are only drawn if they have their `exists` property set to `true`.\nThe children will be drawn at their `x` and `y` world space coordinates. If this is outside the bounds of the BitmapData they won't be drawn.\nWhen drawing it will take into account the child's rotation, scale and alpha values.\nNo iteration takes place. Groups nested inside other Groups will not be iterated through."
    },
    "drawFull": {
     "!type": "fn(parent: +Phaser.World|+Phaser.Group|+Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapText, blendMode: string, roundPx: bool) -> +Phaser.BitmapData",
     "!doc": "Draws the Game Object or Group to this BitmapData and then recursively iterates through all of its children.\n\nIf a child has an `exists` property then it (and its children) will be only be drawn if exists is `true`.\n\nThe children will be drawn at their `x` and `y` world space coordinates. If this is outside the bounds of the BitmapData \nthey won't be drawn. Depending on your requirements you may need to resize the BitmapData in advance to match the \nbounds of the top-level Game Object.\n\nWhen drawing it will take into account the child's world rotation, scale and alpha values.\n\nIt's perfectly valid to pass in `game.world` as the parent object, and it will iterate through the entire display list.\n\nNote: If you are trying to grab your entire game at the start of a State then you should ensure that at least 1 full update\nhas taken place before doing so, otherwise all of the objects will render with incorrect positions and scales. You can \ntrigger an update yourself by calling `stage.updateTransform()` before calling `drawFull`."
    },
    "shadow": {
     "!type": "fn(color: string, blur: number, x: number, y: number) -> +Phaser.BitmapData",
     "!doc": "Sets the shadow properties of this BitmapDatas context which will affect all draw operations made to it.\nYou can cancel an existing shadow by calling this method and passing no parameters.\nNote: At the time of writing (October 2014) Chrome still doesn't support shadowBlur used with drawImage."
    },
    "alphaMask": {
     "!type": "fn(source: +Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapData|+Image|+HTMLCanvasElement|string, mask: +Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapData|+Image|+HTMLCanvasElement|string, sourceRect: +Phaser.Rectangle, maskRect: +Phaser.Rectangle) -> +Phaser.BitmapData",
     "!doc": "Draws the image onto this BitmapData using an image as an alpha mask."
    },
    "extract": {
     "!type": "fn(destination: +Phaser.BitmapData, r: number, g: number, b: number, a: number, resize: bool, r2: number, g2: number, b2: number) -> +Phaser.BitmapData",
     "!doc": "Scans this BitmapData for all pixels matching the given r,g,b values and then draws them into the given destination BitmapData.\nThe original BitmapData remains unchanged.\nThe destination BitmapData must be large enough to receive all of the pixels that are scanned unless the 'resize' parameter is true.\nAlthough the destination BitmapData is returned from this method, it's actually modified directly in place, meaning this call is perfectly valid:\n`picture.extract(mask, r, g, b)`\nYou can specify optional r2, g2, b2 color values. If given the pixel written to the destination bitmap will be of the r2, g2, b2 color.\nIf not given it will be written as the same color it was extracted. You can provide one or more alternative colors, allowing you to tint\nthe color during extraction."
    },
    "rect": {
     "!type": "fn(x: number, y: number, width: number, height: number, fillStyle: string) -> +Phaser.BitmapData",
     "!doc": "Draws a filled Rectangle to the BitmapData at the given x, y coordinates and width / height in size."
    },
    "text": {
     "!type": "fn(text: string, x: number, y: number, font: string, color: string, shadow: bool) -> +Phaser.BitmapData",
     "!doc": "Draws text to the BitmapData in the given font and color.\nThe default font is 14px Courier, so useful for quickly drawing debug text.\nIf you need to do a lot of font work to this BitmapData we'd recommend implementing your own text draw method."
    },
    "circle": {
     "!type": "fn(x: number, y: number, radius: number, fillStyle: string) -> +Phaser.BitmapData",
     "!doc": "Draws a filled Circle to the BitmapData at the given x, y coordinates and radius in size."
    },
    "line": {
     "!type": "fn(x1: number, y1: number, x2: number, y2: number, color: string, width: number) -> +Phaser.BitmapData",
     "!doc": "Draws a line between the coordinates given in the color and thickness specified."
    },
    "textureLine": {
     "!type": "fn(line: +Phaser.Line, image: string|+Image, repeat: string) -> +Phaser.BitmapData",
     "!doc": "Takes the given Line object and image and renders it to this BitmapData as a repeating texture line."
    },
    "render": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "If the game is running in WebGL this will push the texture up to the GPU if it's dirty.\nThis is called automatically if the BitmapData is being used by a Sprite, otherwise you need to remember to call it in your render function.\nIf you wish to suppress this functionality set BitmapData.disableTextureUpload to `true`."
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "Destroys this BitmapData and puts the canvas it was using back into the canvas pool for re-use."
    },
    "blendReset": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Resets the blend mode (effectively sets it to 'source-over')"
    },
    "blendSourceOver": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Sets the blend mode to 'source-over'"
    },
    "blendSourceIn": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Sets the blend mode to 'source-in'"
    },
    "blendSourceOut": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Sets the blend mode to 'source-out'"
    },
    "blendSourceAtop": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Sets the blend mode to 'source-atop'"
    },
    "blendDestinationOver": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Sets the blend mode to 'destination-over'"
    },
    "blendDestinationIn": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Sets the blend mode to 'destination-in'"
    },
    "blendDestinationOut": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Sets the blend mode to 'destination-out'"
    },
    "blendDestinationAtop": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Sets the blend mode to 'destination-atop'"
    },
    "blendXor": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Sets the blend mode to 'xor'"
    },
    "blendAdd": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Sets the blend mode to 'lighter'"
    },
    "blendMultiply": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Sets the blend mode to 'multiply'"
    },
    "blendScreen": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Sets the blend mode to 'screen'"
    },
    "blendOverlay": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Sets the blend mode to 'overlay'"
    },
    "blendDarken": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Sets the blend mode to 'darken'"
    },
    "blendLighten": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Sets the blend mode to 'lighten'"
    },
    "blendColorDodge": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Sets the blend mode to 'color-dodge'"
    },
    "blendColorBurn": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Sets the blend mode to 'color-burn'"
    },
    "blendHardLight": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Sets the blend mode to 'hard-light'"
    },
    "blendSoftLight": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Sets the blend mode to 'soft-light'"
    },
    "blendDifference": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Sets the blend mode to 'difference'"
    },
    "blendExclusion": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Sets the blend mode to 'exclusion'"
    },
    "blendHue": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Sets the blend mode to 'hue'"
    },
    "blendSaturation": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Sets the blend mode to 'saturation'"
    },
    "blendColor": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Sets the blend mode to 'color'"
    },
    "blendLuminosity": {
     "!type": "fn() -> +Phaser.BitmapData",
     "!doc": "Sets the blend mode to 'luminosity'"
    }
   },
   "getTransform": {
    "!type": "fn(translateX: number, translateY: number, scaleX: number, scaleY: number, skewX: number, skewY: number) -> ?",
    "!doc": "Gets a JavaScript object that has 6 properties set that are used by BitmapData in a transform."
   }
  },
  "BitmapText": {
   "!type": "fn(game: +Phaser.Game, x: number, y: number, font: string, text: string, size: number, align: string)",
   "!doc": "BitmapText objects work by taking a texture file and an XML or JSON file that describes the font structure.\nIt then generates a new Sprite object for each letter of the text, proportionally spaced out and aligned to \nmatch the font structure.\n\nBitmapText objects are less flexible than Text objects, in that they have less features such as shadows, fills and the ability \nto use Web Fonts, however you trade this flexibility for rendering speed. You can also create visually compelling BitmapTexts by\nprocessing the font texture in an image editor, applying fills and any other effects required.\n\nTo create multi-line text insert \\r, \\n or \\r\\n escape codes into the text string.\n\nIf you are having performance issues due to the volume of sprites being rendered, and do not require the text to be constantly\nupdating, you can use BitmapText.generateTexture to create a static texture from this BitmapText.\n\nTo create a BitmapText data files you can use:\n\nBMFont (Windows, free): http://www.angelcode.com/products/bmfont/\nGlyph Designer (OS X, commercial): http://www.71squared.com/en/glyphdesigner\nLittera (Web-based, free): http://kvazars.com/littera/\n\nFor most use cases it is recommended to use XML. If you wish to use JSON, the formatting should be equal to the result of\nconverting a valid XML file through the popular X2JS library. An online tool for conversion can be found here: http://codebeautify.org/xmltojson\n\nIf you were using an older version of Phaser (< 2.4) and using the DOMish parser hack, please remove this. It isn't required any longer.",
   "prototype": {
    "type": {
     "!type": "number",
     "!doc": "The const type of this object."
    },
    "physicsType": {
     "!type": "number",
     "!doc": "The const physics body type of this object."
    },
    "textWidth": {
     "!type": "number",
     "!doc": "The width in pixels of the overall text area, taking into consideration multi-line text."
    },
    "textHeight": {
     "!type": "number",
     "!doc": "The height in pixels of the overall text area, taking into consideration multi-line text."
    },
    "anchor": {
     "!type": "+Phaser.Point",
     "!doc": "The anchor value of this BitmapText."
    },
    "dirty": {
     "!type": "bool",
     "!doc": "The dirty state of this object."
    },
    "preUpdate": {
     "!type": "fn() -> bool",
     "!doc": "Automatically called by World.preUpdate."
    },
    "postUpdate": {
     "!type": "fn()",
     "!doc": "Automatically called by World.preUpdate."
    },
    "setText": {
     "!type": "fn(text: string)",
     "!doc": "The text to be displayed by this BitmapText object.\n\nIt's faster to use `BitmapText.text = string`, but this is kept for backwards compatibility."
    },
    "purgeGlyphs": {
     "!type": "fn() -> number",
     "!doc": "If a BitmapText changes from having a large number of characters to having very few characters it will cause lots of\nSprites to be retained in the BitmapText._glyphs array. Although they are not attached to the display list they\nstill take up memory while sat in the glyphs pool waiting to be re-used in the future.\n\nIf you know that the BitmapText will not grow any larger then you can purge out the excess glyphs from the pool \nby calling this method.\n\nCalling this doesn't prevent you from increasing the length of the text again in the future."
    },
    "align": {
     "!type": "string",
     "!doc": "Alignment for multi-line text ('left', 'center' or 'right'), does not affect single lines of text."
    },
    "tint": {
     "!type": "number",
     "!doc": "The tint applied to the BitmapText. This is a hex value. Set to white to disable (0xFFFFFF)"
    },
    "font": {
     "!type": "string",
     "!doc": "The font the text will be rendered in, i.e. 'Arial'. Must be loaded in the browser before use."
    },
    "fontSize": {
     "!type": "number",
     "!doc": "The size of the font in pixels."
    },
    "text": {
     "!type": "string",
     "!doc": "The text to be displayed by this BitmapText object."
    },
    "maxWidth": {
     "!type": "number",
     "!doc": "The maximum width of this BitmapText in pixels."
    },
    "smoothed": {
     "!type": "bool"
    },
    "children": {
     "!type": "[?]"
    },
    "game": {
     "!type": "+Phaser.Game"
    },
    "name": {
     "!type": "string"
    },
    "components": {
     "!type": "?"
    },
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
     "!type": "fn()",
     "!doc": "Override this method in your own custom objects to handle any update requirements.\nIt is called immediately after `preUpdate` and before `postUpdate`.\nRemember if this Game Object has any children you should call update on those too."
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
     "!type": "fn(destroyChildren: bool)",
     "!doc": "Destroys the Game Object. This removes it from its parent group, destroys the input, event and animation handlers if present\nand nulls its reference to `game`, freeing it up for garbage collection.\n\nIf this Game Object has the Events component it will also dispatch the `onDestroy` event."
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
     "!type": "fn(health: number) -> +PIXI.DisplayObject",
     "!doc": "Brings a 'dead' Game Object back to life, optionally resetting its health value in the process.\n\nA resurrected Game Object has its `alive`, `exists` and `visible` properties all set to true.\n\nIt will dispatch the `onRevived` event. Listen to `events.onRevived` for the signal."
    },
    "kill": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Kills a Game Object. A killed Game Object has its `alive`, `exists` and `visible` properties all set to false.\n\nIt will dispatch the `onKilled` event. You can listen to `events.onKilled` for the signal.\n\nNote that killing a Game Object is a way for you to quickly recycle it in an object pool, \nit doesn't destroy the object or free it up from memory.\n\nIf you don't need this Game Object any more you should call `destroy` instead."
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
     "!type": "fn(x: number, y: number, health: number) -> +PIXI.DisplayObject",
     "!doc": "Resets the Game Object.\n\nThis moves the Game Object to the given x/y world coordinates and sets `fresh`, `exists`, \n`visible` and `renderable` to true.\n\nIf this Game Object has the LifeSpan component it will also set `alive` to true and `health` to the given value.\n\nIf this Game Object has a Physics Body it will reset the Body."
    }
   }
  },
  "Button": {
   "!type": "fn(game: +Phaser.Game, x: number, y: number, key: string, callback: fn(), callbackContext: ?, overFrame: string|number, outFrame: string|number, downFrame: string|number, upFrame: string|number)",
   "!doc": "Create a new `Button` object. A Button is a special type of Sprite that is set-up to handle Pointer events automatically.\n\nThe four states a Button responds to are:\n\n* 'Over' - when the Pointer moves over the Button. This is also commonly known as 'hover'.\n* 'Out' - when the Pointer that was previously over the Button moves out of it.\n* 'Down' - when the Pointer is pressed down on the Button. I.e. touched on a touch enabled device or clicked with the mouse.\n* 'Up' - when the Pointer that was pressed down on the Button is released again.\n\nA different texture/frame and activation sound can be specified for any of the states.\n\nFrames can be specified as either an integer (the frame ID) or a string (the frame name); the same values that can be used with a Sprite constructor.",
   "prototype": {
    "type": {
     "!type": "number"
    },
    "physicsType": {
     "!type": "number",
     "!doc": "The const physics body type of this object."
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
     "!type": "fn()",
     "!doc": "Clears all of the frames set on this Button."
    },
    "removedFromWorld": {
     "!type": "fn()",
     "!doc": "Called when this Button is removed from the World."
    },
    "setFrames": {
     "!type": "fn(overFrame: string|number, outFrame: string|number, downFrame: string|number, upFrame: string|number)",
     "!doc": "Used to manually set the frames that will be used for the different states of the Button.\n\nFrames can be specified as either an integer (the frame ID) or a string (the frame name); these are the same values that can be used with a Sprite constructor."
    },
    "setSounds": {
     "!type": "fn(overSound: +Phaser.Sound|+Phaser.AudioSprite, overMarker: string, downSound: +Phaser.Sound|+Phaser.AudioSprite, downMarker: string, outSound: +Phaser.Sound|+Phaser.AudioSprite, outMarker: string, upSound: +Phaser.Sound|+Phaser.AudioSprite, upMarker: string)",
     "!doc": "Sets the sounds to be played whenever this Button is interacted with. Sounds can be either full Sound objects, or markers pointing to a section of a Sound object.\nThe most common forms of sounds are 'hover' effects and 'click' effects, which is why the order of the parameters is overSound then downSound.\n\nCall this function with no parameters to reset all sounds on this Button."
    },
    "setOverSound": {
     "!type": "fn(sound: +Phaser.Sound|+Phaser.AudioSprite, marker: string)",
     "!doc": "The Sound to be played when a Pointer moves over this Button."
    },
    "setOutSound": {
     "!type": "fn(sound: +Phaser.Sound|+Phaser.AudioSprite, marker: string)",
     "!doc": "The Sound to be played when a Pointer moves out of this Button."
    },
    "setDownSound": {
     "!type": "fn(sound: +Phaser.Sound|+Phaser.AudioSprite, marker: string)",
     "!doc": "The Sound to be played when a Pointer presses down on this Button."
    },
    "setUpSound": {
     "!type": "fn(sound: +Phaser.Sound|+Phaser.AudioSprite, marker: string)",
     "!doc": "The Sound to be played when a Pointer has pressed down and is released from this Button."
    },
    "onInputOverHandler": {
     "!type": "fn(sprite: +Phaser.Button, pointer: +Phaser.Pointer)",
     "!doc": "Internal function that handles input events."
    },
    "onInputOutHandler": {
     "!type": "fn(sprite: +Phaser.Button, pointer: +Phaser.Pointer)",
     "!doc": "Internal function that handles input events."
    },
    "onInputDownHandler": {
     "!type": "fn(sprite: +Phaser.Button, pointer: +Phaser.Pointer)",
     "!doc": "Internal function that handles input events."
    },
    "onInputUpHandler": {
     "!type": "fn(sprite: +Phaser.Button, pointer: +Phaser.Pointer)",
     "!doc": "Internal function that handles input events."
    },
    "preUpdate": {
     "!type": "fn()",
     "!doc": "Automatically called by World.preUpdate."
    },
    "anchor": {
     "!type": "+Phaser.Point"
    },
    "texture": {
     "!type": "+Texture"
    },
    "tint": {
     "!type": "number"
    },
    "tintedTexture": {
     "!type": "+Canvas"
    },
    "blendMode": {
     "!type": "number"
    },
    "shader": {
     "!type": "+AbstractFilter"
    },
    "game": {
     "!type": "+Phaser.Game"
    },
    "name": {
     "!type": "string"
    },
    "components": {
     "!type": "?"
    },
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
     "!type": "fn()",
     "!doc": "Override this method in your own custom objects to handle any update requirements.\nIt is called immediately after `preUpdate` and before `postUpdate`.\nRemember if this Game Object has any children you should call update on those too."
    },
    "postUpdate": {
     "!type": "fn()",
     "!doc": "Internal method called by the World postUpdate cycle."
    },
    "angle": {
     "!type": "number"
    },
    "play": {
     "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> +Phaser.Animation",
     "!doc": "Plays an Animation.\n\nThe animation should have previously been created via `animations.add`.\n\nIf the animation is already playing calling this again won't do anything.\nIf you need to reset an already running animation do so directly on the Animation object itself or via `AnimationManager.stop`."
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
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Brings this Game Object to the top of its parents display list.\nVisually this means it will render over the top of any old child in the same Group.\n\nIf this Game Object hasn't been added to a custom Group then this method will bring it to the top of the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "sendToBack": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Sends this Game Object to the bottom of its parents display list.\nVisually this means it will render below all other children in the same Group.\n\nIf this Game Object hasn't been added to a custom Group then this method will send it to the bottom of the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "moveUp": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Moves this Game Object up one place in its parents display list.\nThis call has no effect if the Game Object is already at the top of the display list.\n\nIf this Game Object hasn't been added to a custom Group then this method will move it one object up within the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "moveDown": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Moves this Game Object down one place in its parents display list.\nThis call has no effect if the Game Object is already at the bottom of the display list.\n\nIf this Game Object hasn't been added to a custom Group then this method will move it one object down within the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "cropRect": {
     "!type": "+Phaser.Rectangle"
    },
    "crop": {
     "!type": "fn(rect: +Phaser.Rectangle, copy: bool)",
     "!doc": "Crop allows you to crop the texture being used to display this Game Object.\nSetting a crop rectangle modifies the core texture frame. The Game Object width and height properties will be adjusted accordingly.\n\nCropping takes place from the top-left and can be modified in real-time either by providing an updated rectangle object to this method,\nor by modifying `cropRect` property directly and then calling `updateCrop`.\n\nThe rectangle object given to this method can be either a `Phaser.Rectangle` or any other object \nso long as it has public `x`, `y`, `width`, `height`, `right` and `bottom` properties.\n\nA reference to the rectangle is stored in `cropRect` unless the `copy` parameter is `true`, \nin which case the values are duplicated to a local object."
    },
    "updateCrop": {
     "!type": "fn()",
     "!doc": "If you have set a crop rectangle on this Game Object via `crop` and since modified the `cropRect` property,\nor the rectangle it references, then you need to update the crop frame by calling this method."
    },
    "destroyPhase": {
     "!type": "bool"
    },
    "destroy": {
     "!type": "fn(destroyChildren: bool)",
     "!doc": "Destroys the Game Object. This removes it from its parent group, destroys the input, event and animation handlers if present\nand nulls its reference to `game`, freeing it up for garbage collection.\n\nIf this Game Object has the Events component it will also dispatch the `onDestroy` event."
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
     "!type": "fn(health: number) -> +PIXI.DisplayObject",
     "!doc": "Brings a 'dead' Game Object back to life, optionally resetting its health value in the process.\n\nA resurrected Game Object has its `alive`, `exists` and `visible` properties all set to true.\n\nIt will dispatch the `onRevived` event. Listen to `events.onRevived` for the signal."
    },
    "kill": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Kills a Game Object. A killed Game Object has its `alive`, `exists` and `visible` properties all set to false.\n\nIt will dispatch the `onKilled` event. You can listen to `events.onKilled` for the signal.\n\nNote that killing a Game Object is a way for you to quickly recycle it in an object pool, \nit doesn't destroy the object or free it up from memory.\n\nIf you don't need this Game Object any more you should call `destroy` instead."
    },
    "loadTexture": {
     "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)",
     "!doc": "Changes the base texture the Game Object is using. The old texture is removed and the new one is referenced or fetched from the Cache.\n\nIf your Game Object is using a frame from a texture atlas and you just wish to change to another frame, then see the `frame` or `frameName` properties instead.\n\nYou should only use `loadTexture` if you want to replace the base texture entirely.\n\nCalling this method causes a WebGL texture update, so use sparingly or in low-intensity portions of your game, or if you know the new texture is already on the GPU."
    },
    "setFrame": {
     "!type": "fn(frame: +Phaser.Frame)",
     "!doc": "Sets the texture frame the Game Object uses for rendering.\n\nThis is primarily an internal method used by `loadTexture`, but is exposed for the use of plugins and custom classes."
    },
    "resizeFrame": {
     "!type": "fn(parent: ?, width: number, height: number)",
     "!doc": "Resizes the Frame dimensions that the Game Object uses for rendering.\n\nYou shouldn't normally need to ever call this, but in the case of special texture types such as Video or BitmapData\nit can be useful to adjust the dimensions directly in this way."
    },
    "resetFrame": {
     "!type": "fn()",
     "!doc": "Resets the texture frame dimensions that the Game Object uses for rendering."
    },
    "frame": {
     "!type": "number"
    },
    "frameName": {
     "!type": "string"
    },
    "overlap": {
     "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> bool",
     "!doc": "Checks to see if the bounds of this Game Object overlaps with the bounds of the given Display Object, \nwhich can be a Sprite, Image, TileSprite or anything that extends those such as Button or provides a `getBounds` method and result.\n\nThis check ignores the `hitArea` property if set and runs a `getBounds` comparison on both objects to determine the result.\n\nTherefore it's relatively expensive to use in large quantities, i.e. with lots of Sprites at a high frequency.\nIt should be fine for low-volume testing where physics isn't required."
    },
    "reset": {
     "!type": "fn(x: number, y: number, health: number) -> +PIXI.DisplayObject",
     "!doc": "Resets the Game Object.\n\nThis moves the Game Object to the given x/y world coordinates and sets `fresh`, `exists`, \n`visible` and `renderable` to true.\n\nIf this Game Object has the LifeSpan component it will also set `alive` to true and `health` to the given value.\n\nIf this Game Object has a Physics Body it will reset the Body."
    },
    "smoothed": {
     "!type": "bool"
    }
   }
  },
  "Component": {
   "Angle": {
    "!type": "fn()",
    "!doc": "The Angle Component provides access to an `angle` property; the rotation of a Game Object in degrees.",
    "prototype": {
     "angle": {
      "!type": "number"
     }
    }
   },
   "Animation": {
    "!type": "fn()",
    "!doc": "The Animation Component provides a `play` method, which is a proxy to the `AnimationManager.play` method.",
    "prototype": {
     "play": {
      "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> +Phaser.Animation",
      "!doc": "Plays an Animation.\n\nThe animation should have previously been created via `animations.add`.\n\nIf the animation is already playing calling this again won't do anything.\nIf you need to reset an already running animation do so directly on the Animation object itself or via `AnimationManager.stop`."
     }
    }
   },
   "AutoCull": {
    "!type": "fn()",
    "!doc": "The AutoCull Component is responsible for providing methods that check if a Game Object is within the bounds of the World Camera.\nIt is used by the InWorld component.",
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
    "!doc": "The Bounds component contains properties related to the bounds of the Game Object.",
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
    "!doc": "The BringToTop Component features quick access to Group sorting related methods.",
    "prototype": {
     "bringToTop": {
      "!type": "fn() -> +PIXI.DisplayObject",
      "!doc": "Brings this Game Object to the top of its parents display list.\nVisually this means it will render over the top of any old child in the same Group.\n\nIf this Game Object hasn't been added to a custom Group then this method will bring it to the top of the Game World, \nbecause the World is the root Group from which all Game Objects descend."
     },
     "sendToBack": {
      "!type": "fn() -> +PIXI.DisplayObject",
      "!doc": "Sends this Game Object to the bottom of its parents display list.\nVisually this means it will render below all other children in the same Group.\n\nIf this Game Object hasn't been added to a custom Group then this method will send it to the bottom of the Game World, \nbecause the World is the root Group from which all Game Objects descend."
     },
     "moveUp": {
      "!type": "fn() -> +PIXI.DisplayObject",
      "!doc": "Moves this Game Object up one place in its parents display list.\nThis call has no effect if the Game Object is already at the top of the display list.\n\nIf this Game Object hasn't been added to a custom Group then this method will move it one object up within the Game World, \nbecause the World is the root Group from which all Game Objects descend."
     },
     "moveDown": {
      "!type": "fn() -> +PIXI.DisplayObject",
      "!doc": "Moves this Game Object down one place in its parents display list.\nThis call has no effect if the Game Object is already at the bottom of the display list.\n\nIf this Game Object hasn't been added to a custom Group then this method will move it one object down within the Game World, \nbecause the World is the root Group from which all Game Objects descend."
     }
    }
   },
   "!type": "fn()",
   "Core": {
    "!type": "fn()",
    "!doc": "Core Component Features.",
    "install": {
     "!type": "fn()",
     "!doc": "Installs / registers mixin components.\n\nThe `this` context should be that of the applicable object instance or prototype."
    },
    "init": {
     "!type": "fn()",
     "!doc": "Initializes the mixin components.\n\nThe `this` context should be an instance of the component mixin target."
    },
    "prototype": {
     "game": {
      "!type": "+Phaser.Game"
     },
     "name": {
      "!type": "string"
     },
     "components": {
      "!type": "?"
     },
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
      "!type": "fn()",
      "!doc": "Override this method in your own custom objects to handle any update requirements.\nIt is called immediately after `preUpdate` and before `postUpdate`.\nRemember if this Game Object has any children you should call update on those too."
     },
     "postUpdate": {
      "!type": "fn()",
      "!doc": "Internal method called by the World postUpdate cycle."
     }
    }
   },
   "Crop": {
    "!type": "fn()",
    "!doc": "The Crop component provides the ability to crop a texture based Game Object to a defined rectangle, \nwhich can be updated in real-time.",
    "prototype": {
     "cropRect": {
      "!type": "+Phaser.Rectangle"
     },
     "crop": {
      "!type": "fn(rect: +Phaser.Rectangle, copy: bool)",
      "!doc": "Crop allows you to crop the texture being used to display this Game Object.\nSetting a crop rectangle modifies the core texture frame. The Game Object width and height properties will be adjusted accordingly.\n\nCropping takes place from the top-left and can be modified in real-time either by providing an updated rectangle object to this method,\nor by modifying `cropRect` property directly and then calling `updateCrop`.\n\nThe rectangle object given to this method can be either a `Phaser.Rectangle` or any other object \nso long as it has public `x`, `y`, `width`, `height`, `right` and `bottom` properties.\n\nA reference to the rectangle is stored in `cropRect` unless the `copy` parameter is `true`, \nin which case the values are duplicated to a local object."
     },
     "updateCrop": {
      "!type": "fn()",
      "!doc": "If you have set a crop rectangle on this Game Object via `crop` and since modified the `cropRect` property,\nor the rectangle it references, then you need to update the crop frame by calling this method."
     }
    }
   },
   "Delta": {
    "!type": "fn()",
    "!doc": "The Delta component provides access to delta values between the Game Objects current and previous position.",
    "prototype": {
     "deltaX": {
      "!type": "number"
     },
     "deltaY": {
      "!type": "number"
     },
     "deltaZ": {
      "!type": "number",
      "!doc": "The delta value."
     }
    }
   },
   "Destroy": {
    "!type": "fn()",
    "!doc": "The Destroy component is responsible for destroying a Game Object.",
    "prototype": {
     "destroyPhase": {
      "!type": "bool"
     },
     "destroy": {
      "!type": "fn(destroyChildren: bool)",
      "!doc": "Destroys the Game Object. This removes it from its parent group, destroys the input, event and animation handlers if present\nand nulls its reference to `game`, freeing it up for garbage collection.\n\nIf this Game Object has the Events component it will also dispatch the `onDestroy` event."
     }
    }
   },
   "FixedToCamera": {
    "!type": "fn()",
    "!doc": "The FixedToCamera component enables a Game Object to be rendered relative to the game camera coordinates, regardless \nof where in the world the camera is. This is used for things like sticking game UI to the camera that scrolls as it moves around the world.",
    "postUpdate": {
     "!type": "fn()",
     "!doc": "The FixedToCamera component postUpdate handler.\nCalled automatically by the Game Object."
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
    "!doc": "The Health component provides the ability for Game Objects to have a `health` property \nthat can be damaged and reset through game code.\nRequires the LifeSpan component.",
    "prototype": {
     "health": {
      "!type": "number"
     },
     "maxHealth": {
      "!type": "number"
     },
     "damage": {
      "!doc": "Damages the Game Object. This removes the given amount of health from the `health` property.\n\nIf health is taken below or is equal to zero then the `kill` method is called."
     },
     "heal": {
      "!doc": "Heal the Game Object. This adds the given amount of health to the `health` property."
     }
    }
   },
   "InCamera": {
    "!type": "fn()",
    "!doc": "The InCamera component checks if the Game Object intersects with the Game Camera.",
    "prototype": {
     "inCamera": {
      "!type": "bool"
     }
    }
   },
   "InputEnabled": {
    "!type": "fn()",
    "!doc": "The InputEnabled component allows a Game Object to have its own InputHandler and process input related events.",
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
    "!doc": "The InWorld component checks if a Game Object is within the Game World Bounds.\nAn object is considered as being \"in bounds\" so long as its own bounds intersects at any point with the World bounds.\nIf the AutoCull component is enabled on the Game Object then it will check the Game Object against the Camera bounds as well.",
    "preUpdate": {
     "!type": "fn()",
     "!doc": "The InWorld component preUpdate handler.\nCalled automatically by the Game Object."
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
    "!doc": "LifeSpan Component Features.",
    "preUpdate": {
     "!type": "fn()",
     "!doc": "The LifeSpan component preUpdate handler.\nCalled automatically by the Game Object."
    },
    "prototype": {
     "alive": {
      "!type": "bool"
     },
     "lifespan": {
      "!type": "number"
     },
     "revive": {
      "!type": "fn(health: number) -> +PIXI.DisplayObject",
      "!doc": "Brings a 'dead' Game Object back to life, optionally resetting its health value in the process.\n\nA resurrected Game Object has its `alive`, `exists` and `visible` properties all set to true.\n\nIt will dispatch the `onRevived` event. Listen to `events.onRevived` for the signal."
     },
     "kill": {
      "!type": "fn() -> +PIXI.DisplayObject",
      "!doc": "Kills a Game Object. A killed Game Object has its `alive`, `exists` and `visible` properties all set to false.\n\nIt will dispatch the `onKilled` event. You can listen to `events.onKilled` for the signal.\n\nNote that killing a Game Object is a way for you to quickly recycle it in an object pool, \nit doesn't destroy the object or free it up from memory.\n\nIf you don't need this Game Object any more you should call `destroy` instead."
     }
    }
   },
   "LoadTexture": {
    "!type": "fn()",
    "!doc": "The LoadTexture component manages the loading of a texture into the Game Object and the changing of frames.",
    "prototype": {
     "loadTexture": {
      "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)",
      "!doc": "Changes the base texture the Game Object is using. The old texture is removed and the new one is referenced or fetched from the Cache.\n\nIf your Game Object is using a frame from a texture atlas and you just wish to change to another frame, then see the `frame` or `frameName` properties instead.\n\nYou should only use `loadTexture` if you want to replace the base texture entirely.\n\nCalling this method causes a WebGL texture update, so use sparingly or in low-intensity portions of your game, or if you know the new texture is already on the GPU."
     },
     "setFrame": {
      "!type": "fn(frame: +Phaser.Frame)",
      "!doc": "Sets the texture frame the Game Object uses for rendering.\n\nThis is primarily an internal method used by `loadTexture`, but is exposed for the use of plugins and custom classes."
     },
     "resizeFrame": {
      "!type": "fn(parent: ?, width: number, height: number)",
      "!doc": "Resizes the Frame dimensions that the Game Object uses for rendering.\n\nYou shouldn't normally need to ever call this, but in the case of special texture types such as Video or BitmapData\nit can be useful to adjust the dimensions directly in this way."
     },
     "resetFrame": {
      "!type": "fn()",
      "!doc": "Resets the texture frame dimensions that the Game Object uses for rendering."
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
    "!doc": "The Overlap component allows a Game Object to check if it overlaps with the bounds of another Game Object.",
    "prototype": {
     "overlap": {
      "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> bool",
      "!doc": "Checks to see if the bounds of this Game Object overlaps with the bounds of the given Display Object, \nwhich can be a Sprite, Image, TileSprite or anything that extends those such as Button or provides a `getBounds` method and result.\n\nThis check ignores the `hitArea` property if set and runs a `getBounds` comparison on both objects to determine the result.\n\nTherefore it's relatively expensive to use in large quantities, i.e. with lots of Sprites at a high frequency.\nIt should be fine for low-volume testing where physics isn't required."
     }
    }
   },
   "PhysicsBody": {
    "!type": "fn()",
    "!doc": "The PhysicsBody component manages the Game Objects physics body and physics enabling.\nIt also overrides the x and y properties, ensuring that any manual adjustment of them is reflected in the physics body itself.",
    "preUpdate": {
     "!type": "fn()",
     "!doc": "The PhysicsBody component preUpdate handler.\nCalled automatically by the Game Object."
    },
    "postUpdate": {
     "!type": "fn()",
     "!doc": "The PhysicsBody component postUpdate handler.\nCalled automatically by the Game Object."
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
    "!doc": "The Reset component allows a Game Object to be reset and repositioned to a new location.",
    "prototype": {
     "reset": {
      "!type": "fn(x: number, y: number, health: number) -> +PIXI.DisplayObject",
      "!doc": "Resets the Game Object.\n\nThis moves the Game Object to the given x/y world coordinates and sets `fresh`, `exists`, \n`visible` and `renderable` to true.\n\nIf this Game Object has the LifeSpan component it will also set `alive` to true and `health` to the given value.\n\nIf this Game Object has a Physics Body it will reset the Body."
     }
    }
   },
   "ScaleMinMax": {
    "!type": "fn()",
    "!doc": "The ScaleMinMax component allows a Game Object to limit how far it can be scaled by its parent.",
    "prototype": {
     "transformCallback": {
      "!type": "fn()"
     },
     "transformCallbackContext": {
      "!type": "?"
     },
     "scaleMin": {
      "!type": "+Phaser.Point"
     },
     "scaleMax": {
      "!type": "+Phaser.Point"
     },
     "setScaleMinMax": {
      "!type": "fn(minX: number|+null, minY: number|+null, maxX: number|+null, maxY: number|+null)",
      "!doc": "Sets the scaleMin and scaleMax values. These values are used to limit how far this Game Object will scale based on its parent.\n\nFor example if this Game Object has a `minScale` value of 1 and its parent has a `scale` value of 0.5, the 0.5 will be ignored \nand the scale value of 1 will be used, as the parents scale is lower than the minimum scale this Game Object should adhere to.\n\nBy setting these values you can carefully control how Game Objects deal with responsive scaling.\n\nIf only one parameter is given then that value will be used for both scaleMin and scaleMax:\n`setScaleMinMax(1)` = scaleMin.x, scaleMin.y, scaleMax.x and scaleMax.y all = 1\n\nIf only two parameters are given the first is set as scaleMin.x and y and the second as scaleMax.x and y:\n`setScaleMinMax(0.5, 2)` = scaleMin.x and y = 0.5 and scaleMax.x and y = 2\n\nIf you wish to set `scaleMin` with different values for x and y then either modify Game Object.scaleMin directly, \nor pass `null` for the `maxX` and `maxY` parameters.\n\nCall `setScaleMinMax(null)` to clear all previously set values."
     }
    }
   },
   "Smoothed": {
    "!type": "fn()",
    "!doc": "The Smoothed component allows a Game Object to control anti-aliasing of an image based texture.",
    "prototype": {
     "smoothed": {
      "!type": "bool"
     }
    }
   }
  },
  "Events": {
   "!type": "fn(sprite: +Phaser.Sprite)",
   "!doc": "The Events component is a collection of events fired by the parent game object.\n\nFor example to tell when a Sprite has been added to a new group:\n\n`sprite.events.onAddedToGroup.add(yourFunction, this);`\n\nWhere `yourFunction` is the function you want called when this event occurs.\n\nThe Input-related events will only be dispatched if the Sprite has had `inputEnabled` set to `true`\nand the Animation-related events only apply to game objects with animations like {@link Phaser.Sprite}.",
   "prototype": {
    "parent": {
     "!type": "+Phaser.Sprite",
     "!doc": "The Sprite that owns these events."
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "Removes all events."
    },
    "onAddedToGroup": {
     "!type": "+Phaser.Signal",
     "!doc": "This signal is dispatched when the parent is added to a new Group."
    },
    "onRemovedFromGroup": {
     "!type": "+Phaser.Signal",
     "!doc": "This signal is dispatched when the parent is removed from a Group."
    },
    "onRemovedFromWorld": {
     "!type": "+Phaser.Signal",
     "!doc": "This signal is dispatched if this item or any of its parents are removed from the game world."
    },
    "onDestroy": {
     "!type": "+Phaser.Signal",
     "!doc": "This signal is dispatched when the parent is destroyed."
    },
    "onKilled": {
     "!type": "+Phaser.Signal",
     "!doc": "This signal is dispatched when the parent is killed."
    },
    "onRevived": {
     "!type": "+Phaser.Signal",
     "!doc": "This signal is dispatched when the parent is revived."
    },
    "onOutOfBounds": {
     "!type": "+Phaser.Signal",
     "!doc": "This signal is dispatched when the parent leaves the world bounds (only if Sprite.checkWorldBounds is true)."
    },
    "onEnterBounds": {
     "!type": "+Phaser.Signal",
     "!doc": "This signal is dispatched when the parent returns within the world bounds (only if Sprite.checkWorldBounds is true)."
    },
    "onInputOver": {
     "!type": "+Phaser.Signal",
     "!doc": "This signal is dispatched if the parent is inputEnabled and receives an over event from a Pointer."
    },
    "onInputOut": {
     "!type": "+Phaser.Signal",
     "!doc": "This signal is dispatched if the parent is inputEnabled and receives an out event from a Pointer."
    },
    "onInputDown": {
     "!type": "+Phaser.Signal",
     "!doc": "This signal is dispatched if the parent is inputEnabled and receives a down event from a Pointer."
    },
    "onInputUp": {
     "!type": "+Phaser.Signal",
     "!doc": "This signal is dispatched if the parent is inputEnabled and receives an up event from a Pointer."
    },
    "onDragStart": {
     "!type": "+Phaser.Signal",
     "!doc": "This signal is dispatched if the parent is inputEnabled and receives a drag start event from a Pointer."
    },
    "onDragUpdate": {
     "!type": "+Phaser.Signal",
     "!doc": "This signal is dispatched if the parent is inputEnabled and receives a drag update event from a Pointer."
    },
    "onDragStop": {
     "!type": "+Phaser.Signal",
     "!doc": "This signal is dispatched if the parent is inputEnabled and receives a drag stop event from a Pointer."
    },
    "onAnimationStart": {
     "!type": "+Phaser.Signal",
     "!doc": "This signal is dispatched when the parent has an animation that is played."
    },
    "onAnimationComplete": {
     "!type": "+Phaser.Signal",
     "!doc": "This signal is dispatched when the parent has an animation that finishes playing."
    },
    "onAnimationLoop": {
     "!type": "+Phaser.Signal",
     "!doc": "This signal is dispatched when the parent has an animation that loops playback."
    }
   }
  },
  "Creature": {
   "!type": "fn(game: +Phaser.Game, x: number, y: number, key: string|+PIXI.Texture, mesh: string, animation: string)",
   "!doc": "Creature is a custom Game Object used in conjunction with the Creature Runtime libraries by Kestrel Moon Studios.\n\nIt allows you to display animated Game Objects that were created with the [Creature Automated Animation Tool](http://www.kestrelmoon.com/creature/).\n\nNote 1: You can only use Phaser.Creature objects in WebGL enabled games. They do not work in Canvas mode games.\n\nNote 2: You must use a build of Phaser that includes the CreatureMeshBone.js runtime and gl-matrix.js, or have them\nloaded before your Phaser game boots.\n\nSee the Phaser custom build process for more details.\n\nBy default the Creature runtimes are NOT included in any pre-configured version of Phaser.\n\nSo you'll need to do `grunt custom` to create a build that includes them.",
   "prototype": {
    "type": {
     "!type": "number",
     "!doc": "The const type of this object."
    },
    "animation": {
     "!type": "+CreatureAnimation",
     "!doc": "The CreatureAnimation instance."
    },
    "manager": {
     "!type": "+CreatureManager",
     "!doc": "The CreatureManager instance for this object."
    },
    "timeDelta": {
     "!type": "number",
     "!doc": "How quickly the animation advances."
    },
    "texture": {
     "!type": "+PIXI.Texture",
     "!doc": "The texture the animation is using."
    },
    "creatureBoundsMin": {
     "!type": "+Phaser.Point",
     "!doc": "The minimum bounds point."
    },
    "creatureBoundsMax": {
     "!type": "+Phaser.Point",
     "!doc": "The maximum bounds point."
    },
    "vertices": {
     "!type": "+PIXI.Float32Array",
     "!doc": "The vertices data."
    },
    "uvs": {
     "!type": "+PIXI.Float32Array",
     "!doc": "The UV data."
    },
    "indices": {
     "!type": "+PIXI.Uint16Array"
    },
    "colors": {
     "!type": "+PIXI.Uint16Array",
     "!doc": "The vertices colors"
    },
    "preUpdate": {
     "!type": "fn()",
     "!doc": "Automatically called by World.preUpdate."
    },
    "setAnimation": {
     "!type": "fn(key: string)",
     "!doc": "Sets the Animation this Creature object will play, as defined in the mesh data."
    },
    "play": {
     "!type": "fn(loop: bool)",
     "!doc": "Plays the currently set animation."
    },
    "stop": {
     "!type": "fn()",
     "!doc": "Stops the currently playing animation."
    },
    "isPlaying": {
     "!type": "bool",
     "!doc": "Is the _current_ animation playing?"
    },
    "loop": {
     "!type": "bool",
     "!doc": "Should the _current_ animation loop or not?"
    },
    "children": {
     "!type": "[?]"
    },
    "game": {
     "!type": "+Phaser.Game"
    },
    "name": {
     "!type": "string"
    },
    "components": {
     "!type": "?"
    },
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
     "!type": "fn()",
     "!doc": "Override this method in your own custom objects to handle any update requirements.\nIt is called immediately after `preUpdate` and before `postUpdate`.\nRemember if this Game Object has any children you should call update on those too."
    },
    "postUpdate": {
     "!type": "fn()",
     "!doc": "Internal method called by the World postUpdate cycle."
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
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Brings this Game Object to the top of its parents display list.\nVisually this means it will render over the top of any old child in the same Group.\n\nIf this Game Object hasn't been added to a custom Group then this method will bring it to the top of the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "sendToBack": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Sends this Game Object to the bottom of its parents display list.\nVisually this means it will render below all other children in the same Group.\n\nIf this Game Object hasn't been added to a custom Group then this method will send it to the bottom of the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "moveUp": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Moves this Game Object up one place in its parents display list.\nThis call has no effect if the Game Object is already at the top of the display list.\n\nIf this Game Object hasn't been added to a custom Group then this method will move it one object up within the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "moveDown": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Moves this Game Object down one place in its parents display list.\nThis call has no effect if the Game Object is already at the bottom of the display list.\n\nIf this Game Object hasn't been added to a custom Group then this method will move it one object down within the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "destroyPhase": {
     "!type": "bool"
    },
    "destroy": {
     "!type": "fn(destroyChildren: bool)",
     "!doc": "Destroys the Game Object. This removes it from its parent group, destroys the input, event and animation handlers if present\nand nulls its reference to `game`, freeing it up for garbage collection.\n\nIf this Game Object has the Events component it will also dispatch the `onDestroy` event."
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
     "!type": "fn(health: number) -> +PIXI.DisplayObject",
     "!doc": "Brings a 'dead' Game Object back to life, optionally resetting its health value in the process.\n\nA resurrected Game Object has its `alive`, `exists` and `visible` properties all set to true.\n\nIt will dispatch the `onRevived` event. Listen to `events.onRevived` for the signal."
    },
    "kill": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Kills a Game Object. A killed Game Object has its `alive`, `exists` and `visible` properties all set to false.\n\nIt will dispatch the `onKilled` event. You can listen to `events.onKilled` for the signal.\n\nNote that killing a Game Object is a way for you to quickly recycle it in an object pool, \nit doesn't destroy the object or free it up from memory.\n\nIf you don't need this Game Object any more you should call `destroy` instead."
    },
    "reset": {
     "!type": "fn(x: number, y: number, health: number) -> +PIXI.DisplayObject",
     "!doc": "Resets the Game Object.\n\nThis moves the Game Object to the given x/y world coordinates and sets `fresh`, `exists`, \n`visible` and `renderable` to true.\n\nIf this Game Object has the LifeSpan component it will also set `alive` to true and `health` to the given value.\n\nIf this Game Object has a Physics Body it will reset the Body."
    }
   }
  },
  "GameObjectCreator": {
   "!type": "fn(game: +Phaser.Game)",
   "!doc": "The GameObjectCreator is a quick way to create common game objects _without_ adding them to the game world.\nThe object creator can be accessed with {@linkcode Phaser.Game#make `game.make`}.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running Game."
    },
    "world": {
     "!type": "+Phaser.World",
     "!doc": "A reference to the game world."
    },
    "image": {
     "!type": "fn(x: number, y: number, key: string|+Phaser.RenderTexture|+PIXI.Texture, frame: string|number) -> +Phaser.Image",
     "!doc": "Create a new Image object.\n\nAn Image is a light-weight object you can use to display anything that doesn't need physics or animation.\nIt can still rotate, scale, crop and receive input events. This makes it perfect for logos, backgrounds, simple buttons and other non-Sprite graphics."
    },
    "sprite": {
     "!type": "fn(x: number, y: number, key: string|+Phaser.RenderTexture|+PIXI.Texture, frame: string|number) -> +Phaser.Sprite",
     "!doc": "Create a new Sprite with specific position and sprite sheet key."
    },
    "tween": {
     "!type": "fn(obj: ?) -> +Phaser.Tween",
     "!doc": "Create a tween object for a specific object.\n\nThe object can be any JavaScript object or Phaser object such as Sprite."
    },
    "group": {
     "!type": "fn(parent: +any, name: string, addToStage: bool, enableBody: bool, physicsBodyType: number) -> +Phaser.Group",
     "!doc": "A Group is a container for display objects that allows for fast pooling, recycling and collision checks."
    },
    "spriteBatch": {
     "!type": "fn(parent: +any, name: string, addToStage: bool) -> +Phaser.SpriteBatch",
     "!doc": "Create a new SpriteBatch."
    },
    "audio": {
     "!type": "fn(key: string, volume: number, loop: bool, connect: bool) -> +Phaser.Sound",
     "!doc": "Creates a new Sound object."
    },
    "audioSprite": {
     "!type": "fn(key: string) -> +Phaser.AudioSprite",
     "!doc": "Creates a new AudioSprite object."
    },
    "sound": {
     "!type": "fn(key: string, volume: number, loop: bool, connect: bool) -> +Phaser.Sound",
     "!doc": "Creates a new Sound object."
    },
    "tileSprite": {
     "!type": "fn(x: number, y: number, width: number, height: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+PIXI.Texture, frame: string|number) -> +Phaser.TileSprite",
     "!doc": "Creates a new TileSprite object."
    },
    "rope": {
     "!type": "fn(x: number, y: number, width: number, height: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+PIXI.Texture, frame: string|number) -> +Phaser.Rope",
     "!doc": "Creates a new Rope object."
    },
    "text": {
     "!type": "fn(x: number, y: number, text: string, style: ?) -> +Phaser.Text",
     "!doc": "Creates a new Text object."
    },
    "button": {
     "!type": "fn(x: number, y: number, key: string, callback: fn(), callbackContext: ?, overFrame: string|number, outFrame: string|number, downFrame: string|number, upFrame: string|number) -> +Phaser.Button",
     "!doc": "Creates a new Button object."
    },
    "graphics": {
     "!type": "fn(x: number, y: number) -> +Phaser.Graphics",
     "!doc": "Creates a new Graphics object."
    },
    "emitter": {
     "!type": "fn(x: number, y: number, maxParticles: number) -> +Phaser.Emitter",
     "!doc": "Creat a new Emitter.\n\nAn Emitter is a lightweight particle emitter. It can be used for one-time explosions or for\ncontinuous effects like rain and fire. All it really does is launch Particle objects out\nat set intervals, and fixes their positions and velocities accorindgly."
    },
    "retroFont": {
     "!type": "fn(font: string, characterWidth: number, characterHeight: number, chars: string, charsPerRow: number, xSpacing: number, ySpacing: number, xOffset: number, yOffset: number) -> +Phaser.RetroFont",
     "!doc": "Create a new RetroFont object.\n\nA RetroFont can be used as a texture for an Image or Sprite and optionally add it to the Cache.\nA RetroFont uses a bitmap which contains fixed with characters for the font set. You use character spacing to define the set.\nIf you need variable width character support then use a BitmapText object instead. The main difference between a RetroFont and a BitmapText\nis that a RetroFont creates a single texture that you can apply to a game object, where-as a BitmapText creates one Sprite object per letter of text.\nThe texture can be asssigned or one or multiple images/sprites, but note that the text the RetroFont uses will be shared across them all,\ni.e. if you need each Image to have different text in it, then you need to create multiple RetroFont objects."
    },
    "bitmapText": {
     "!type": "fn(x: number, y: number, font: string, text: string, size: number, align: string) -> +Phaser.BitmapText",
     "!doc": "Create a new BitmapText object.\n\nBitmapText objects work by taking a texture file and an XML file that describes the font structure.\nIt then generates a new Sprite object for each letter of the text, proportionally spaced out and aligned to \nmatch the font structure.\n\nBitmapText objects are less flexible than Text objects, in that they have less features such as shadows, fills and the ability \nto use Web Fonts. However you trade this flexibility for pure rendering speed. You can also create visually compelling BitmapTexts by \nprocessing the font texture in an image editor first, applying fills and any other effects required.\n\nTo create multi-line text insert \\r, \\n or \\r\\n escape codes into the text string.\n\nTo create a BitmapText data files you can use:\n\nBMFont (Windows, free): http://www.angelcode.com/products/bmfont/\nGlyph Designer (OS X, commercial): http://www.71squared.com/en/glyphdesigner\nLittera (Web-based, free): http://kvazars.com/littera/"
    },
    "tilemap": {
     "!type": "fn(key: string, tileWidth: number, tileHeight: number, width: number, height: number)",
     "!doc": "Creates a new Phaser.Tilemap object.\n\nThe map can either be populated with data from a Tiled JSON file or from a CSV file.\nTo do this pass the Cache key as the first parameter. When using Tiled data you need only provide the key.\nWhen using CSV data you must provide the key and the tileWidth and tileHeight parameters.\nIf creating a blank tilemap to be populated later, you can either specify no parameters at all and then use `Tilemap.create` or pass the map and tile dimensions here.\nNote that all Tilemaps use a base tile size to calculate dimensions from, but that a TilemapLayer may have its own unique tile size that overrides it."
    },
    "renderTexture": {
     "!type": "fn(width: number, height: number, key: string, addToCache: bool) -> +Phaser.RenderTexture",
     "!doc": "A dynamic initially blank canvas to which images can be drawn."
    },
    "bitmapData": {
     "!type": "fn(width: number, height: number, key: string, addToCache: bool) -> +Phaser.BitmapData",
     "!doc": "Create a BitmpaData object.\n\nA BitmapData object can be manipulated and drawn to like a traditional Canvas object and used to texture Sprites."
    },
    "filter": {
     "!type": "fn(filter: string, arg1: +any) -> +Phaser.Filter",
     "!doc": "A WebGL shader/filter that can be applied to Sprites."
    }
   }
  },
  "GameObjectFactory": {
   "!type": "fn(game: +Phaser.Game)",
   "!doc": "The GameObjectFactory is a quick way to create many common game objects\nusing {@linkcode Phaser.Game#add `game.add`}.\n\nCreated objects are _automatically added_ to the appropriate Manager, World, or manually specified parent Group.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running Game."
    },
    "world": {
     "!type": "+Phaser.World",
     "!doc": "A reference to the game world."
    },
    "existing": {
     "!type": "fn(object: +any) -> +any",
     "!doc": "Adds an existing display object to the game world."
    },
    "image": {
     "!type": "fn(x: number, y: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, group: +Phaser.Group) -> +Phaser.Image",
     "!doc": "Create a new `Image` object.\n\nAn Image is a light-weight object you can use to display anything that doesn't need physics or animation.\n\nIt can still rotate, scale, crop and receive input events. \nThis makes it perfect for logos, backgrounds, simple buttons and other non-Sprite graphics."
    },
    "sprite": {
     "!type": "fn(x: number, y: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, group: +Phaser.Group) -> +Phaser.Sprite",
     "!doc": "Create a new Sprite with specific position and sprite sheet key.\n\nAt its most basic a Sprite consists of a set of coordinates and a texture that is used when rendered.\nThey also contain additional properties allowing for physics motion (via Sprite.body), input handling (via Sprite.input),\nevents (via Sprite.events), animation (via Sprite.animations), camera culling and more. Please see the Examples for use cases."
    },
    "creature": {
     "!type": "fn(x: number, y: number, key: string|+PIXI.Texture, group: +Phaser.Group) -> +Phaser.Creature",
     "!doc": "Create a new Creature Animation object.\n\nCreature is a custom Game Object used in conjunction with the Creature Runtime libraries by Kestrel Moon Studios.\n\nIt allows you to display animated Game Objects that were created with the [Creature Automated Animation Tool](http://www.kestrelmoon.com/creature/).\n\nNote 1: You can only use Phaser.Creature objects in WebGL enabled games. They do not work in Canvas mode games.\n\nNote 2: You must use a build of Phaser that includes the CreatureMeshBone.js runtime and gl-matrix.js, or have them\nloaded before your Phaser game boots.\n\nSee the Phaser custom build process for more details."
    },
    "tween": {
     "!type": "fn(object: ?) -> +Phaser.Tween",
     "!doc": "Create a tween on a specific object.\n\nThe object can be any JavaScript object or Phaser object such as Sprite."
    },
    "group": {
     "!type": "fn(parent: +any, name: string, addToStage: bool, enableBody: bool, physicsBodyType: number) -> +Phaser.Group",
     "!doc": "A Group is a container for display objects that allows for fast pooling, recycling and collision checks."
    },
    "physicsGroup": {
     "!type": "fn(physicsBodyType: number, parent: +any, name: string, addToStage: bool) -> +Phaser.Group",
     "!doc": "A Group is a container for display objects that allows for fast pooling, recycling and collision checks.\n\nA Physics Group is the same as an ordinary Group except that is has enableBody turned on by default, so any Sprites it creates\nare automatically given a physics body."
    },
    "spriteBatch": {
     "!type": "fn(parent: +Phaser.Group|+null, name: string, addToStage: bool) -> +Phaser.SpriteBatch",
     "!doc": "A SpriteBatch is a really fast version of a Phaser Group built solely for speed.\nUse when you need a lot of sprites or particles all sharing the same texture.\nThe speed gains are specifically for WebGL. In Canvas mode you won't see any real difference."
    },
    "audio": {
     "!type": "fn(key: string, volume: number, loop: bool, connect: bool) -> +Phaser.Sound",
     "!doc": "Creates a new Sound object."
    },
    "sound": {
     "!type": "fn(key: string, volume: number, loop: bool, connect: bool) -> +Phaser.Sound",
     "!doc": "Creates a new Sound object."
    },
    "audioSprite": {
     "!type": "fn(key: string) -> +Phaser.AudioSprite",
     "!doc": "Creates a new AudioSprite object."
    },
    "tileSprite": {
     "!type": "fn(x: number, y: number, width: number, height: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, group: +Phaser.Group) -> +Phaser.TileSprite",
     "!doc": "Creates a new TileSprite object."
    },
    "rope": {
     "!type": "fn(x: number, y: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, points: [?], group: +Phaser.Group) -> +Phaser.Rope",
     "!doc": "Creates a new Rope object.\n\nExample usage: https://github.com/codevinsky/phaser-rope-demo/blob/master/dist/demo.js"
    },
    "text": {
     "!type": "fn(x: number, y: number, text: string, style: ?, group: +Phaser.Group) -> +Phaser.Text",
     "!doc": "Creates a new Text object."
    },
    "button": {
     "!type": "fn(x: number, y: number, key: string, callback: fn(), callbackContext: ?, overFrame: string|number, outFrame: string|number, downFrame: string|number, upFrame: string|number, group: +Phaser.Group) -> +Phaser.Button",
     "!doc": "Creates a new Button object."
    },
    "graphics": {
     "!type": "fn(x: number, y: number, group: +Phaser.Group) -> +Phaser.Graphics",
     "!doc": "Creates a new Graphics object."
    },
    "emitter": {
     "!type": "fn(x: number, y: number, maxParticles: number) -> +Phaser.Particles.Arcade.Emitter",
     "!doc": "Create a new Emitter.\n\nA particle emitter can be used for one-time explosions or for\ncontinuous effects like rain and fire. All it really does is launch Particle objects out\nat set intervals, and fixes their positions and velocities accordingly."
    },
    "retroFont": {
     "!type": "fn(font: string, characterWidth: number, characterHeight: number, chars: string, charsPerRow: number, xSpacing: number, ySpacing: number, xOffset: number, yOffset: number) -> +Phaser.RetroFont",
     "!doc": "Create a new RetroFont object.\n\nA RetroFont can be used as a texture for an Image or Sprite and optionally add it to the Cache.\nA RetroFont uses a bitmap which contains fixed with characters for the font set. You use character spacing to define the set.\nIf you need variable width character support then use a BitmapText object instead. The main difference between a RetroFont and a BitmapText\nis that a RetroFont creates a single texture that you can apply to a game object, where-as a BitmapText creates one Sprite object per letter of text.\nThe texture can be asssigned or one or multiple images/sprites, but note that the text the RetroFont uses will be shared across them all,\ni.e. if you need each Image to have different text in it, then you need to create multiple RetroFont objects."
    },
    "bitmapText": {
     "!type": "fn(x: number, y: number, font: string, text: string, size: number, group: +Phaser.Group) -> +Phaser.BitmapText",
     "!doc": "Create a new BitmapText object.\n\nBitmapText objects work by taking a texture file and an XML file that describes the font structure.\nIt then generates a new Sprite object for each letter of the text, proportionally spaced out and aligned to \nmatch the font structure.\n\nBitmapText objects are less flexible than Text objects, in that they have less features such as shadows, fills and the ability \nto use Web Fonts. However you trade this flexibility for pure rendering speed. You can also create visually compelling BitmapTexts by \nprocessing the font texture in an image editor first, applying fills and any other effects required.\n\nTo create multi-line text insert \\r, \\n or \\r\\n escape codes into the text string.\n\nTo create a BitmapText data files you can use:\n\nBMFont (Windows, free): http://www.angelcode.com/products/bmfont/\nGlyph Designer (OS X, commercial): http://www.71squared.com/en/glyphdesigner\nLittera (Web-based, free): http://kvazars.com/littera/"
    },
    "tilemap": {
     "!type": "fn(key: string, tileWidth: number, tileHeight: number, width: number, height: number) -> +Phaser.Tilemap",
     "!doc": "Creates a new Phaser.Tilemap object.\n\nThe map can either be populated with data from a Tiled JSON file or from a CSV file.\nTo do this pass the Cache key as the first parameter. When using Tiled data you need only provide the key.\nWhen using CSV data you must provide the key and the tileWidth and tileHeight parameters.\nIf creating a blank tilemap to be populated later, you can either specify no parameters at all and then use `Tilemap.create` or pass the map and tile dimensions here.\nNote that all Tilemaps use a base tile size to calculate dimensions from, but that a TilemapLayer may have its own unique tile size that overrides it."
    },
    "renderTexture": {
     "!type": "fn(width: number, height: number, key: string, addToCache: bool) -> +Phaser.RenderTexture",
     "!doc": "A dynamic initially blank canvas to which images can be drawn."
    },
    "video": {
     "!type": "fn(key: string|+null, url: string|+null) -> +Phaser.Video",
     "!doc": "Create a Video object.\n\nThis will return a Phaser.Video object which you can pass to a Sprite to be used as a texture."
    },
    "bitmapData": {
     "!type": "fn(width: number, height: number, key: string, addToCache: bool) -> +Phaser.BitmapData",
     "!doc": "Create a BitmapData object.\n\nA BitmapData object can be manipulated and drawn to like a traditional Canvas object and used to texture Sprites."
    },
    "filter": {
     "!type": "fn(filter: string, arg1: +any) -> +Phaser.Filter",
     "!doc": "A WebGL shader/filter that can be applied to Sprites."
    },
    "plugin": {
     "!type": "fn(plugin: ?|+Phaser.Plugin, parameter: ?) -> +Phaser.Plugin",
     "!doc": "Add a new Plugin into the PluginManager.\n\nThe Plugin must have 2 properties: `game` and `parent`. Plugin.game is set to the game reference the PluginManager uses, and parent is set to the PluginManager."
    }
   }
  },
  "Graphics": {
   "!type": "fn(game: +Phaser.Game, x: number, y: number)",
   "!doc": "Creates a new `Graphics` object.",
   "prototype": {
    "type": {
     "!type": "number",
     "!doc": "The const type of this object."
    },
    "physicsType": {
     "!type": "number",
     "!doc": "The const physics body type of this object."
    },
    "preUpdate": {
     "!type": "fn()",
     "!doc": "Automatically called by World.preUpdate."
    },
    "destroy": {
     "!type": "fn(destroyChildren: bool)",
     "!doc": "Destroy this Graphics instance."
    },
    "game": {
     "!type": "+Phaser.Game"
    },
    "name": {
     "!type": "string"
    },
    "components": {
     "!type": "?"
    },
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
     "!type": "fn()",
     "!doc": "Override this method in your own custom objects to handle any update requirements.\nIt is called immediately after `preUpdate` and before `postUpdate`.\nRemember if this Game Object has any children you should call update on those too."
    },
    "postUpdate": {
     "!type": "fn()",
     "!doc": "Internal method called by the World postUpdate cycle."
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
     "!type": "fn(health: number) -> +PIXI.DisplayObject",
     "!doc": "Brings a 'dead' Game Object back to life, optionally resetting its health value in the process.\n\nA resurrected Game Object has its `alive`, `exists` and `visible` properties all set to true.\n\nIt will dispatch the `onRevived` event. Listen to `events.onRevived` for the signal."
    },
    "kill": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Kills a Game Object. A killed Game Object has its `alive`, `exists` and `visible` properties all set to false.\n\nIt will dispatch the `onKilled` event. You can listen to `events.onKilled` for the signal.\n\nNote that killing a Game Object is a way for you to quickly recycle it in an object pool, \nit doesn't destroy the object or free it up from memory.\n\nIf you don't need this Game Object any more you should call `destroy` instead."
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
     "!type": "fn(x: number, y: number, health: number) -> +PIXI.DisplayObject",
     "!doc": "Resets the Game Object.\n\nThis moves the Game Object to the given x/y world coordinates and sets `fresh`, `exists`, \n`visible` and `renderable` to true.\n\nIf this Game Object has the LifeSpan component it will also set `alive` to true and `health` to the given value.\n\nIf this Game Object has a Physics Body it will reset the Body."
    }
   }
  },
  "Image": {
   "!type": "fn(game: +Phaser.Game, x: number, y: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+PIXI.Texture, frame: string|number)",
   "!doc": "An Image is a light-weight object you can use to display anything that doesn't need physics or animation.\nIt can still rotate, scale, crop and receive input events. This makes it perfect for logos, backgrounds, simple buttons and other non-Sprite graphics.",
   "prototype": {
    "type": {
     "!type": "number",
     "!doc": "The const type of this object."
    },
    "preUpdate": {
     "!type": "fn()",
     "!doc": "Automatically called by World.preUpdate."
    },
    "anchor": {
     "!type": "+Phaser.Point"
    },
    "texture": {
     "!type": "+Texture"
    },
    "tint": {
     "!type": "number"
    },
    "tintedTexture": {
     "!type": "+Canvas"
    },
    "blendMode": {
     "!type": "number"
    },
    "shader": {
     "!type": "+AbstractFilter"
    },
    "game": {
     "!type": "+Phaser.Game"
    },
    "name": {
     "!type": "string"
    },
    "components": {
     "!type": "?"
    },
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
     "!type": "fn()",
     "!doc": "Override this method in your own custom objects to handle any update requirements.\nIt is called immediately after `preUpdate` and before `postUpdate`.\nRemember if this Game Object has any children you should call update on those too."
    },
    "postUpdate": {
     "!type": "fn()",
     "!doc": "Internal method called by the World postUpdate cycle."
    },
    "angle": {
     "!type": "number"
    },
    "play": {
     "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> +Phaser.Animation",
     "!doc": "Plays an Animation.\n\nThe animation should have previously been created via `animations.add`.\n\nIf the animation is already playing calling this again won't do anything.\nIf you need to reset an already running animation do so directly on the Animation object itself or via `AnimationManager.stop`."
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
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Brings this Game Object to the top of its parents display list.\nVisually this means it will render over the top of any old child in the same Group.\n\nIf this Game Object hasn't been added to a custom Group then this method will bring it to the top of the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "sendToBack": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Sends this Game Object to the bottom of its parents display list.\nVisually this means it will render below all other children in the same Group.\n\nIf this Game Object hasn't been added to a custom Group then this method will send it to the bottom of the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "moveUp": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Moves this Game Object up one place in its parents display list.\nThis call has no effect if the Game Object is already at the top of the display list.\n\nIf this Game Object hasn't been added to a custom Group then this method will move it one object up within the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "moveDown": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Moves this Game Object down one place in its parents display list.\nThis call has no effect if the Game Object is already at the bottom of the display list.\n\nIf this Game Object hasn't been added to a custom Group then this method will move it one object down within the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "cropRect": {
     "!type": "+Phaser.Rectangle"
    },
    "crop": {
     "!type": "fn(rect: +Phaser.Rectangle, copy: bool)",
     "!doc": "Crop allows you to crop the texture being used to display this Game Object.\nSetting a crop rectangle modifies the core texture frame. The Game Object width and height properties will be adjusted accordingly.\n\nCropping takes place from the top-left and can be modified in real-time either by providing an updated rectangle object to this method,\nor by modifying `cropRect` property directly and then calling `updateCrop`.\n\nThe rectangle object given to this method can be either a `Phaser.Rectangle` or any other object \nso long as it has public `x`, `y`, `width`, `height`, `right` and `bottom` properties.\n\nA reference to the rectangle is stored in `cropRect` unless the `copy` parameter is `true`, \nin which case the values are duplicated to a local object."
    },
    "updateCrop": {
     "!type": "fn()",
     "!doc": "If you have set a crop rectangle on this Game Object via `crop` and since modified the `cropRect` property,\nor the rectangle it references, then you need to update the crop frame by calling this method."
    },
    "destroyPhase": {
     "!type": "bool"
    },
    "destroy": {
     "!type": "fn(destroyChildren: bool)",
     "!doc": "Destroys the Game Object. This removes it from its parent group, destroys the input, event and animation handlers if present\nand nulls its reference to `game`, freeing it up for garbage collection.\n\nIf this Game Object has the Events component it will also dispatch the `onDestroy` event."
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
     "!type": "fn(health: number) -> +PIXI.DisplayObject",
     "!doc": "Brings a 'dead' Game Object back to life, optionally resetting its health value in the process.\n\nA resurrected Game Object has its `alive`, `exists` and `visible` properties all set to true.\n\nIt will dispatch the `onRevived` event. Listen to `events.onRevived` for the signal."
    },
    "kill": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Kills a Game Object. A killed Game Object has its `alive`, `exists` and `visible` properties all set to false.\n\nIt will dispatch the `onKilled` event. You can listen to `events.onKilled` for the signal.\n\nNote that killing a Game Object is a way for you to quickly recycle it in an object pool, \nit doesn't destroy the object or free it up from memory.\n\nIf you don't need this Game Object any more you should call `destroy` instead."
    },
    "loadTexture": {
     "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)",
     "!doc": "Changes the base texture the Game Object is using. The old texture is removed and the new one is referenced or fetched from the Cache.\n\nIf your Game Object is using a frame from a texture atlas and you just wish to change to another frame, then see the `frame` or `frameName` properties instead.\n\nYou should only use `loadTexture` if you want to replace the base texture entirely.\n\nCalling this method causes a WebGL texture update, so use sparingly or in low-intensity portions of your game, or if you know the new texture is already on the GPU."
    },
    "setFrame": {
     "!type": "fn(frame: +Phaser.Frame)",
     "!doc": "Sets the texture frame the Game Object uses for rendering.\n\nThis is primarily an internal method used by `loadTexture`, but is exposed for the use of plugins and custom classes."
    },
    "resizeFrame": {
     "!type": "fn(parent: ?, width: number, height: number)",
     "!doc": "Resizes the Frame dimensions that the Game Object uses for rendering.\n\nYou shouldn't normally need to ever call this, but in the case of special texture types such as Video or BitmapData\nit can be useful to adjust the dimensions directly in this way."
    },
    "resetFrame": {
     "!type": "fn()",
     "!doc": "Resets the texture frame dimensions that the Game Object uses for rendering."
    },
    "frame": {
     "!type": "number"
    },
    "frameName": {
     "!type": "string"
    },
    "overlap": {
     "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> bool",
     "!doc": "Checks to see if the bounds of this Game Object overlaps with the bounds of the given Display Object, \nwhich can be a Sprite, Image, TileSprite or anything that extends those such as Button or provides a `getBounds` method and result.\n\nThis check ignores the `hitArea` property if set and runs a `getBounds` comparison on both objects to determine the result.\n\nTherefore it's relatively expensive to use in large quantities, i.e. with lots of Sprites at a high frequency.\nIt should be fine for low-volume testing where physics isn't required."
    },
    "reset": {
     "!type": "fn(x: number, y: number, health: number) -> +PIXI.DisplayObject",
     "!doc": "Resets the Game Object.\n\nThis moves the Game Object to the given x/y world coordinates and sets `fresh`, `exists`, \n`visible` and `renderable` to true.\n\nIf this Game Object has the LifeSpan component it will also set `alive` to true and `health` to the given value.\n\nIf this Game Object has a Physics Body it will reset the Body."
    },
    "smoothed": {
     "!type": "bool"
    }
   }
  },
  "Particle": {
   "!type": "fn(game: +Phaser.Game, x: number, y: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+PIXI.Texture, frame: string|number)",
   "!doc": "Create a new `Particle` object. Particles are extended Sprites that are emitted by a particle emitter such as Phaser.Particles.Arcade.Emitter.",
   "prototype": {
    "autoScale": {
     "!type": "bool",
     "!doc": "If this Particle automatically scales this is set to true by Particle.setScaleData."
    },
    "scaleData": {
     "!type": "+array",
     "!doc": "A reference to the scaleData array owned by the Emitter that emitted this Particle."
    },
    "autoAlpha": {
     "!type": "bool",
     "!doc": "If this Particle automatically changes alpha this is set to true by Particle.setAlphaData."
    },
    "alphaData": {
     "!type": "+array",
     "!doc": "A reference to the alphaData array owned by the Emitter that emitted this Particle."
    },
    "update": {
     "!type": "fn()",
     "!doc": "Updates the Particle scale or alpha if autoScale and autoAlpha are set."
    },
    "onEmit": {
     "!type": "fn()",
     "!doc": "Called by the Emitter when this particle is emitted. Left empty for you to over-ride as required."
    },
    "setAlphaData": {
     "!type": "fn()",
     "!doc": "Called by the Emitter if autoAlpha has been enabled. Passes over the alpha ease data and resets the alpha counter."
    },
    "setScaleData": {
     "!type": "fn()",
     "!doc": "Called by the Emitter if autoScale has been enabled. Passes over the scale ease data and resets the scale counter."
    },
    "reset": {
     "!type": "fn(x: number, y: number, health: number) -> ?",
     "!doc": "Resets the Particle. This places the Particle at the given x/y world coordinates and then\nsets alive, exists, visible and renderable all to true. Also resets the outOfBounds state and health values.\nIf the Particle has a physics body that too is reset."
    },
    "type": {
     "!type": "number",
     "!doc": "The const type of this object."
    },
    "physicsType": {
     "!type": "number",
     "!doc": "The const physics body type of this object."
    },
    "preUpdate": {
     "!type": "fn() -> bool",
     "!doc": "Automatically called by World.preUpdate."
    },
    "anchor": {
     "!type": "+Phaser.Point"
    },
    "texture": {
     "!type": "+Texture"
    },
    "tint": {
     "!type": "number"
    },
    "tintedTexture": {
     "!type": "+Canvas"
    },
    "blendMode": {
     "!type": "number"
    },
    "shader": {
     "!type": "+AbstractFilter"
    },
    "game": {
     "!type": "+Phaser.Game"
    },
    "name": {
     "!type": "string"
    },
    "components": {
     "!type": "?"
    },
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
     "!type": "fn()",
     "!doc": "Internal method called by the World postUpdate cycle."
    },
    "angle": {
     "!type": "number"
    },
    "play": {
     "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> +Phaser.Animation",
     "!doc": "Plays an Animation.\n\nThe animation should have previously been created via `animations.add`.\n\nIf the animation is already playing calling this again won't do anything.\nIf you need to reset an already running animation do so directly on the Animation object itself or via `AnimationManager.stop`."
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
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Brings this Game Object to the top of its parents display list.\nVisually this means it will render over the top of any old child in the same Group.\n\nIf this Game Object hasn't been added to a custom Group then this method will bring it to the top of the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "sendToBack": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Sends this Game Object to the bottom of its parents display list.\nVisually this means it will render below all other children in the same Group.\n\nIf this Game Object hasn't been added to a custom Group then this method will send it to the bottom of the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "moveUp": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Moves this Game Object up one place in its parents display list.\nThis call has no effect if the Game Object is already at the top of the display list.\n\nIf this Game Object hasn't been added to a custom Group then this method will move it one object up within the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "moveDown": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Moves this Game Object down one place in its parents display list.\nThis call has no effect if the Game Object is already at the bottom of the display list.\n\nIf this Game Object hasn't been added to a custom Group then this method will move it one object down within the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "cropRect": {
     "!type": "+Phaser.Rectangle"
    },
    "crop": {
     "!type": "fn(rect: +Phaser.Rectangle, copy: bool)",
     "!doc": "Crop allows you to crop the texture being used to display this Game Object.\nSetting a crop rectangle modifies the core texture frame. The Game Object width and height properties will be adjusted accordingly.\n\nCropping takes place from the top-left and can be modified in real-time either by providing an updated rectangle object to this method,\nor by modifying `cropRect` property directly and then calling `updateCrop`.\n\nThe rectangle object given to this method can be either a `Phaser.Rectangle` or any other object \nso long as it has public `x`, `y`, `width`, `height`, `right` and `bottom` properties.\n\nA reference to the rectangle is stored in `cropRect` unless the `copy` parameter is `true`, \nin which case the values are duplicated to a local object."
    },
    "updateCrop": {
     "!type": "fn()",
     "!doc": "If you have set a crop rectangle on this Game Object via `crop` and since modified the `cropRect` property,\nor the rectangle it references, then you need to update the crop frame by calling this method."
    },
    "deltaX": {
     "!type": "number"
    },
    "deltaY": {
     "!type": "number"
    },
    "deltaZ": {
     "!type": "number",
     "!doc": "The delta value."
    },
    "destroyPhase": {
     "!type": "bool"
    },
    "destroy": {
     "!type": "fn(destroyChildren: bool)",
     "!doc": "Destroys the Game Object. This removes it from its parent group, destroys the input, event and animation handlers if present\nand nulls its reference to `game`, freeing it up for garbage collection.\n\nIf this Game Object has the Events component it will also dispatch the `onDestroy` event."
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
    "damage": {
     "!doc": "Damages the Game Object. This removes the given amount of health from the `health` property.\n\nIf health is taken below or is equal to zero then the `kill` method is called."
    },
    "heal": {
     "!doc": "Heal the Game Object. This adds the given amount of health to the `health` property."
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
     "!type": "fn(health: number) -> +PIXI.DisplayObject",
     "!doc": "Brings a 'dead' Game Object back to life, optionally resetting its health value in the process.\n\nA resurrected Game Object has its `alive`, `exists` and `visible` properties all set to true.\n\nIt will dispatch the `onRevived` event. Listen to `events.onRevived` for the signal."
    },
    "kill": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Kills a Game Object. A killed Game Object has its `alive`, `exists` and `visible` properties all set to false.\n\nIt will dispatch the `onKilled` event. You can listen to `events.onKilled` for the signal.\n\nNote that killing a Game Object is a way for you to quickly recycle it in an object pool, \nit doesn't destroy the object or free it up from memory.\n\nIf you don't need this Game Object any more you should call `destroy` instead."
    },
    "loadTexture": {
     "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)",
     "!doc": "Changes the base texture the Game Object is using. The old texture is removed and the new one is referenced or fetched from the Cache.\n\nIf your Game Object is using a frame from a texture atlas and you just wish to change to another frame, then see the `frame` or `frameName` properties instead.\n\nYou should only use `loadTexture` if you want to replace the base texture entirely.\n\nCalling this method causes a WebGL texture update, so use sparingly or in low-intensity portions of your game, or if you know the new texture is already on the GPU."
    },
    "setFrame": {
     "!type": "fn(frame: +Phaser.Frame)",
     "!doc": "Sets the texture frame the Game Object uses for rendering.\n\nThis is primarily an internal method used by `loadTexture`, but is exposed for the use of plugins and custom classes."
    },
    "resizeFrame": {
     "!type": "fn(parent: ?, width: number, height: number)",
     "!doc": "Resizes the Frame dimensions that the Game Object uses for rendering.\n\nYou shouldn't normally need to ever call this, but in the case of special texture types such as Video or BitmapData\nit can be useful to adjust the dimensions directly in this way."
    },
    "resetFrame": {
     "!type": "fn()",
     "!doc": "Resets the texture frame dimensions that the Game Object uses for rendering."
    },
    "frame": {
     "!type": "number"
    },
    "frameName": {
     "!type": "string"
    },
    "overlap": {
     "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> bool",
     "!doc": "Checks to see if the bounds of this Game Object overlaps with the bounds of the given Display Object, \nwhich can be a Sprite, Image, TileSprite or anything that extends those such as Button or provides a `getBounds` method and result.\n\nThis check ignores the `hitArea` property if set and runs a `getBounds` comparison on both objects to determine the result.\n\nTherefore it's relatively expensive to use in large quantities, i.e. with lots of Sprites at a high frequency.\nIt should be fine for low-volume testing where physics isn't required."
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
    "transformCallbackContext": {
     "!type": "?"
    },
    "scaleMin": {
     "!type": "+Phaser.Point"
    },
    "scaleMax": {
     "!type": "+Phaser.Point"
    },
    "setScaleMinMax": {
     "!type": "fn(minX: number|+null, minY: number|+null, maxX: number|+null, maxY: number|+null)",
     "!doc": "Sets the scaleMin and scaleMax values. These values are used to limit how far this Game Object will scale based on its parent.\n\nFor example if this Game Object has a `minScale` value of 1 and its parent has a `scale` value of 0.5, the 0.5 will be ignored \nand the scale value of 1 will be used, as the parents scale is lower than the minimum scale this Game Object should adhere to.\n\nBy setting these values you can carefully control how Game Objects deal with responsive scaling.\n\nIf only one parameter is given then that value will be used for both scaleMin and scaleMax:\n`setScaleMinMax(1)` = scaleMin.x, scaleMin.y, scaleMax.x and scaleMax.y all = 1\n\nIf only two parameters are given the first is set as scaleMin.x and y and the second as scaleMax.x and y:\n`setScaleMinMax(0.5, 2)` = scaleMin.x and y = 0.5 and scaleMax.x and y = 2\n\nIf you wish to set `scaleMin` with different values for x and y then either modify Game Object.scaleMin directly, \nor pass `null` for the `maxX` and `maxY` parameters.\n\nCall `setScaleMinMax(null)` to clear all previously set values."
    },
    "smoothed": {
     "!type": "bool"
    }
   }
  },
  "RenderTexture": {
   "!type": "fn(game: +Phaser.Game, key: string, width: number, height: number, key: string, scaleMode: number, resolution: number)",
   "!doc": "A RenderTexture is a special texture that allows any displayObject to be rendered to it. It allows you to take many complex objects and\nrender them down into a single quad (on WebGL) which can then be used to texture other display objects with. A way of generating textures at run-time.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running game."
    },
    "key": {
     "!type": "string",
     "!doc": "The key of the RenderTexture in the Cache, if stored there."
    },
    "type": {
     "!type": "number",
     "!doc": "Base Phaser object type."
    },
    "renderXY": {
     "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapText|+Phaser.Group, x: number, y: number, clear: bool)",
     "!doc": "This function will draw the display object to the RenderTexture at the given coordinates.\n\nWhen the display object is drawn it takes into account scale and rotation.\n\nIf you don't want those then use RenderTexture.renderRawXY instead."
    },
    "renderRawXY": {
     "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapText|+Phaser.Group, x: number, y: number, clear: bool)",
     "!doc": "This function will draw the display object to the RenderTexture at the given coordinates.\n\nWhen the display object is drawn it doesn't take into account scale, rotation or translation.\n\nIf you need those then use RenderTexture.renderXY instead."
    },
    "render": {
     "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapText|+Phaser.Group, matrix: +Phaser.Matrix, clear: bool)",
     "!doc": "This function will draw the display object to the RenderTexture.\n\nIn versions of Phaser prior to 2.4.0 the second parameter was a Phaser.Point object. \nThis is now a Matrix allowing you much more control over how the Display Object is rendered.\nIf you need to replicate the earlier behavior please use Phaser.RenderTexture.renderXY instead.\n\nIf you wish for the displayObject to be rendered taking its current scale, rotation and translation into account then either\npass `null`, leave it undefined or pass `displayObject.worldTransform` as the matrix value."
    }
   }
  },
  "RetroFont": {
   "!type": "fn(game: +Phaser.Game, key: string, characterWidth: number, characterHeight: number, chars: string, charsPerRow: number, xSpacing: number, ySpacing: number, xOffset: number, yOffset: number)",
   "!doc": "A Retro Font is similar to a BitmapFont, in that it uses a texture to render the text. However unlike a BitmapFont every character in a RetroFont\nis the same size. This makes it similar to a sprite sheet. You typically find font sheets like this from old 8/16-bit games and demos.",
   "prototype": {
    "characterWidth": {
     "!type": "number",
     "!doc": "The width of each character in the font set."
    },
    "characterHeight": {
     "!type": "number",
     "!doc": "The height of each character in the font set."
    },
    "characterSpacingX": {
     "!type": "number",
     "!doc": "If the characters in the font set have horizontal spacing between them set the required amount here."
    },
    "characterSpacingY": {
     "!type": "number",
     "!doc": "If the characters in the font set have vertical spacing between them set the required amount here."
    },
    "characterPerRow": {
     "!type": "number",
     "!doc": "The number of characters per row in the font set."
    },
    "offsetX": {
     "!type": "number",
     "!doc": "If the font set doesn't start at the top left of the given image, specify the X coordinate offset here."
    },
    "offsetY": {
     "!type": "number",
     "!doc": "If the font set doesn't start at the top left of the given image, specify the Y coordinate offset here."
    },
    "align": {
     "!type": "string",
     "!doc": "Alignment of the text when multiLine = true or a fixedWidth is set. Set to RetroFont.ALIGN_LEFT (default), RetroFont.ALIGN_RIGHT or RetroFont.ALIGN_CENTER."
    },
    "multiLine": {
     "!type": "bool",
     "!doc": "If set to true all carriage-returns in text will form new lines (see align). If false the font will only contain one single line of text (the default)"
    },
    "autoUpperCase": {
     "!type": "bool",
     "!doc": "Automatically convert any text to upper case. Lots of old bitmap fonts only contain upper-case characters, so the default is true."
    },
    "customSpacingX": {
     "!type": "number",
     "!doc": "Adds horizontal spacing between each character of the font, in pixels."
    },
    "customSpacingY": {
     "!type": "number",
     "!doc": "Adds vertical spacing between each line of multi-line text, set in pixels."
    },
    "fixedWidth": {
     "!type": "number"
    },
    "fontSet": {
     "!type": "+Image",
     "!doc": "A reference to the image stored in the Game.Cache that contains the font."
    },
    "frameData": {
     "!type": "+Phaser.FrameData",
     "!doc": "The FrameData representing this Retro Font."
    },
    "stamp": {
     "!type": "+Phaser.Image",
     "!doc": "The image that is stamped to the RenderTexture for each character in the font."
    },
    "type": {
     "!type": "number",
     "!doc": "Base Phaser object type."
    },
    "setFixedWidth": {
     "!type": "fn(width: number, lineAlignment: string)",
     "!doc": "If you need this RetroFont to have a fixed width and custom alignment you can set the width here.\nIf text is wider than the width specified it will be cropped off."
    },
    "setText": {
     "!type": "fn(content: string, multiLine: bool, characterSpacing: number, lineSpacing: number, lineAlignment: string, allowLowerCase: bool)",
     "!doc": "A helper function that quickly sets lots of variables at once, and then updates the text."
    },
    "buildRetroFontText": {
     "!type": "fn()",
     "!doc": "Updates the texture with the new text."
    },
    "pasteLine": {
     "!type": "fn(line: string, x: number, y: number, customSpacingX: number)",
     "!doc": "Internal function that takes a single line of text (2nd parameter) and pastes it into the BitmapData at the given coordinates.\nUsed by getLine and getMultiLine"
    },
    "getLongestLine": {
     "!type": "fn() -> number",
     "!doc": "Works out the longest line of text in _text and returns its length"
    },
    "removeUnsupportedCharacters": {
     "!type": "fn(stripCR: bool) -> string",
     "!doc": "Internal helper function that removes all unsupported characters from the _text String, leaving only characters contained in the font set."
    },
    "updateOffset": {
     "!type": "fn(xOffset: number, yOffset: number)",
     "!doc": "Updates the x and/or y offset that the font is rendered from. This updates all of the texture frames, so be careful how often it is called.\nNote that the values given for the x and y properties are either ADDED to or SUBTRACTED from (if negative) the existing offsetX/Y values of the characters.\nSo if the current offsetY is 8 and you want it to start rendering from y16 you would call updateOffset(0, 8) to add 8 to the current y offset."
    },
    "text": {
     "!type": "string",
     "!doc": "Set this value to update the text in this sprite. Carriage returns are automatically stripped out if multiLine is false. Text is converted to upper case if autoUpperCase is true."
    },
    "smoothed": {
     "!type": "string",
     "!doc": "Set this value to update the text in this sprite. Carriage returns are automatically stripped out if multiLine is false. Text is converted to upper case if autoUpperCase is true."
    },
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running game."
    },
    "key": {
     "!type": "string",
     "!doc": "The key of the RenderTexture in the Cache, if stored there."
    },
    "renderXY": {
     "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapText|+Phaser.Group, x: number, y: number, clear: bool)",
     "!doc": "This function will draw the display object to the RenderTexture at the given coordinates.\n\nWhen the display object is drawn it takes into account scale and rotation.\n\nIf you don't want those then use RenderTexture.renderRawXY instead."
    },
    "renderRawXY": {
     "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapText|+Phaser.Group, x: number, y: number, clear: bool)",
     "!doc": "This function will draw the display object to the RenderTexture at the given coordinates.\n\nWhen the display object is drawn it doesn't take into account scale, rotation or translation.\n\nIf you need those then use RenderTexture.renderXY instead."
    },
    "render": {
     "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.Text|+Phaser.BitmapText|+Phaser.Group, matrix: +Phaser.Matrix, clear: bool)",
     "!doc": "This function will draw the display object to the RenderTexture.\n\nIn versions of Phaser prior to 2.4.0 the second parameter was a Phaser.Point object. \nThis is now a Matrix allowing you much more control over how the Display Object is rendered.\nIf you need to replicate the earlier behavior please use Phaser.RenderTexture.renderXY instead.\n\nIf you wish for the displayObject to be rendered taking its current scale, rotation and translation into account then either\npass `null`, leave it undefined or pass `displayObject.worldTransform` as the matrix value."
    }
   },
   "ALIGN_LEFT": {
    "!type": "string",
    "!doc": "Align each line of multi-line text to the left."
   },
   "ALIGN_RIGHT": {
    "!type": "string",
    "!doc": "Align each line of multi-line text to the right."
   },
   "ALIGN_CENTER": {
    "!type": "string",
    "!doc": "Align each line of multi-line text in the center."
   },
   "TEXT_SET1": {
    "!type": "string",
    "!doc": "Text Set 1 =  !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"
   },
   "TEXT_SET2": {
    "!type": "string",
    "!doc": "Text Set 2 =  !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   },
   "TEXT_SET3": {
    "!type": "string",
    "!doc": "Text Set 3 = ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
   },
   "TEXT_SET4": {
    "!type": "string",
    "!doc": "Text Set 4 = ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789"
   },
   "TEXT_SET5": {
    "!type": "string",
    "!doc": "Text Set 5 = ABCDEFGHIJKLMNOPQRSTUVWXYZ.,/() '!?-*:0123456789"
   },
   "TEXT_SET6": {
    "!type": "string",
    "!doc": "Text Set 6 = ABCDEFGHIJKLMNOPQRSTUVWXYZ!?:;0123456789\"(),-.'"
   },
   "TEXT_SET7": {
    "!type": "string",
    "!doc": "Text Set 7 = AGMSY+:4BHNTZ!;5CIOU.?06DJPV,(17EKQW\")28FLRX-'39"
   },
   "TEXT_SET8": {
    "!type": "string",
    "!doc": "Text Set 8 = 0123456789 .ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   },
   "TEXT_SET9": {
    "!type": "string",
    "!doc": "Text Set 9 = ABCDEFGHIJKLMNOPQRSTUVWXYZ()-0123456789.:,'\"?!"
   },
   "TEXT_SET10": {
    "!type": "string",
    "!doc": "Text Set 10 = ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   },
   "TEXT_SET11": {
    "!type": "string",
    "!doc": "Text Set 11 = ABCDEFGHIJKLMNOPQRSTUVWXYZ.,\"-+!?()':;0123456789"
   }
  },
  "Rope": {
   "!type": "fn(game: +Phaser.Game, x: number, y: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+PIXI.Texture, frame: string|number, points: [?])",
   "!doc": "A Rope is a Sprite that has a repeating texture. The texture can be scrolled and scaled and will automatically wrap on the edges as it does so.\nPlease note that Ropes, as with normal Sprites, have no input handler or physics bodies by default. Both need enabling.\nExample usage: https://github.com/codevinsky/phaser-rope-demo/blob/master/dist/demo.js",
   "prototype": {
    "type": {
     "!type": "number",
     "!doc": "The const type of this object."
    },
    "preUpdate": {
     "!type": "fn()",
     "!doc": "Automatically called by World.preUpdate."
    },
    "update": {
     "!type": "fn()",
     "!doc": "Override and use this function in your own custom objects to handle any update requirements you may have."
    },
    "reset": {
     "!type": "fn(x: number, y: number) -> ?",
     "!doc": "Resets the Rope. This places the Rope at the given x/y world coordinates, resets the tilePosition and then\nsets alive, exists, visible and renderable all to true. Also resets the outOfBounds state.\nIf the Rope has a physics body that too is reset."
    },
    "updateAnimation": {
     "!type": "fn()",
     "!doc": "Set to a function if you'd like the rope to animate during the update phase. Set to false or null to remove it."
    },
    "segments": {
     "!type": "[?]",
     "!doc": "Returns an array of Phaser.Rectangles that represent the segments of the given rope"
    },
    "game": {
     "!type": "+Phaser.Game"
    },
    "name": {
     "!type": "string"
    },
    "components": {
     "!type": "?"
    },
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
     "!type": "fn()",
     "!doc": "Internal method called by the World postUpdate cycle."
    },
    "angle": {
     "!type": "number"
    },
    "play": {
     "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> +Phaser.Animation",
     "!doc": "Plays an Animation.\n\nThe animation should have previously been created via `animations.add`.\n\nIf the animation is already playing calling this again won't do anything.\nIf you need to reset an already running animation do so directly on the Animation object itself or via `AnimationManager.stop`."
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
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Brings this Game Object to the top of its parents display list.\nVisually this means it will render over the top of any old child in the same Group.\n\nIf this Game Object hasn't been added to a custom Group then this method will bring it to the top of the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "sendToBack": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Sends this Game Object to the bottom of its parents display list.\nVisually this means it will render below all other children in the same Group.\n\nIf this Game Object hasn't been added to a custom Group then this method will send it to the bottom of the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "moveUp": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Moves this Game Object up one place in its parents display list.\nThis call has no effect if the Game Object is already at the top of the display list.\n\nIf this Game Object hasn't been added to a custom Group then this method will move it one object up within the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "moveDown": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Moves this Game Object down one place in its parents display list.\nThis call has no effect if the Game Object is already at the bottom of the display list.\n\nIf this Game Object hasn't been added to a custom Group then this method will move it one object down within the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "cropRect": {
     "!type": "+Phaser.Rectangle"
    },
    "crop": {
     "!type": "fn(rect: +Phaser.Rectangle, copy: bool)",
     "!doc": "Crop allows you to crop the texture being used to display this Game Object.\nSetting a crop rectangle modifies the core texture frame. The Game Object width and height properties will be adjusted accordingly.\n\nCropping takes place from the top-left and can be modified in real-time either by providing an updated rectangle object to this method,\nor by modifying `cropRect` property directly and then calling `updateCrop`.\n\nThe rectangle object given to this method can be either a `Phaser.Rectangle` or any other object \nso long as it has public `x`, `y`, `width`, `height`, `right` and `bottom` properties.\n\nA reference to the rectangle is stored in `cropRect` unless the `copy` parameter is `true`, \nin which case the values are duplicated to a local object."
    },
    "updateCrop": {
     "!type": "fn()",
     "!doc": "If you have set a crop rectangle on this Game Object via `crop` and since modified the `cropRect` property,\nor the rectangle it references, then you need to update the crop frame by calling this method."
    },
    "deltaX": {
     "!type": "number"
    },
    "deltaY": {
     "!type": "number"
    },
    "deltaZ": {
     "!type": "number",
     "!doc": "The delta value."
    },
    "destroyPhase": {
     "!type": "bool"
    },
    "destroy": {
     "!type": "fn(destroyChildren: bool)",
     "!doc": "Destroys the Game Object. This removes it from its parent group, destroys the input, event and animation handlers if present\nand nulls its reference to `game`, freeing it up for garbage collection.\n\nIf this Game Object has the Events component it will also dispatch the `onDestroy` event."
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
     "!type": "fn(health: number) -> +PIXI.DisplayObject",
     "!doc": "Brings a 'dead' Game Object back to life, optionally resetting its health value in the process.\n\nA resurrected Game Object has its `alive`, `exists` and `visible` properties all set to true.\n\nIt will dispatch the `onRevived` event. Listen to `events.onRevived` for the signal."
    },
    "kill": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Kills a Game Object. A killed Game Object has its `alive`, `exists` and `visible` properties all set to false.\n\nIt will dispatch the `onKilled` event. You can listen to `events.onKilled` for the signal.\n\nNote that killing a Game Object is a way for you to quickly recycle it in an object pool, \nit doesn't destroy the object or free it up from memory.\n\nIf you don't need this Game Object any more you should call `destroy` instead."
    },
    "loadTexture": {
     "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)",
     "!doc": "Changes the base texture the Game Object is using. The old texture is removed and the new one is referenced or fetched from the Cache.\n\nIf your Game Object is using a frame from a texture atlas and you just wish to change to another frame, then see the `frame` or `frameName` properties instead.\n\nYou should only use `loadTexture` if you want to replace the base texture entirely.\n\nCalling this method causes a WebGL texture update, so use sparingly or in low-intensity portions of your game, or if you know the new texture is already on the GPU."
    },
    "setFrame": {
     "!type": "fn(frame: +Phaser.Frame)",
     "!doc": "Sets the texture frame the Game Object uses for rendering.\n\nThis is primarily an internal method used by `loadTexture`, but is exposed for the use of plugins and custom classes."
    },
    "resizeFrame": {
     "!type": "fn(parent: ?, width: number, height: number)",
     "!doc": "Resizes the Frame dimensions that the Game Object uses for rendering.\n\nYou shouldn't normally need to ever call this, but in the case of special texture types such as Video or BitmapData\nit can be useful to adjust the dimensions directly in this way."
    },
    "resetFrame": {
     "!type": "fn()",
     "!doc": "Resets the texture frame dimensions that the Game Object uses for rendering."
    },
    "frame": {
     "!type": "number"
    },
    "frameName": {
     "!type": "string"
    },
    "overlap": {
     "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> bool",
     "!doc": "Checks to see if the bounds of this Game Object overlaps with the bounds of the given Display Object, \nwhich can be a Sprite, Image, TileSprite or anything that extends those such as Button or provides a `getBounds` method and result.\n\nThis check ignores the `hitArea` property if set and runs a `getBounds` comparison on both objects to determine the result.\n\nTherefore it's relatively expensive to use in large quantities, i.e. with lots of Sprites at a high frequency.\nIt should be fine for low-volume testing where physics isn't required."
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
    "transformCallbackContext": {
     "!type": "?"
    },
    "scaleMin": {
     "!type": "+Phaser.Point"
    },
    "scaleMax": {
     "!type": "+Phaser.Point"
    },
    "setScaleMinMax": {
     "!type": "fn(minX: number|+null, minY: number|+null, maxX: number|+null, maxY: number|+null)",
     "!doc": "Sets the scaleMin and scaleMax values. These values are used to limit how far this Game Object will scale based on its parent.\n\nFor example if this Game Object has a `minScale` value of 1 and its parent has a `scale` value of 0.5, the 0.5 will be ignored \nand the scale value of 1 will be used, as the parents scale is lower than the minimum scale this Game Object should adhere to.\n\nBy setting these values you can carefully control how Game Objects deal with responsive scaling.\n\nIf only one parameter is given then that value will be used for both scaleMin and scaleMax:\n`setScaleMinMax(1)` = scaleMin.x, scaleMin.y, scaleMax.x and scaleMax.y all = 1\n\nIf only two parameters are given the first is set as scaleMin.x and y and the second as scaleMax.x and y:\n`setScaleMinMax(0.5, 2)` = scaleMin.x and y = 0.5 and scaleMax.x and y = 2\n\nIf you wish to set `scaleMin` with different values for x and y then either modify Game Object.scaleMin directly, \nor pass `null` for the `maxX` and `maxY` parameters.\n\nCall `setScaleMinMax(null)` to clear all previously set values."
    },
    "smoothed": {
     "!type": "bool"
    }
   }
  },
  "Sprite": {
   "!type": "fn(game: +Phaser.Game, x: number, y: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+PIXI.Texture, frame: string|number)",
   "!doc": "Sprites are the lifeblood of your game, used for nearly everything visual.\n\nAt its most basic a Sprite consists of a set of coordinates and a texture that is rendered to the canvas.\nThey also contain additional properties allowing for physics motion (via Sprite.body), input handling (via Sprite.input),\nevents (via Sprite.events), animation (via Sprite.animations), camera culling and more. Please see the Examples for use cases.",
   "prototype": {
    "type": {
     "!type": "number",
     "!doc": "The const type of this object."
    },
    "physicsType": {
     "!type": "number",
     "!doc": "The const physics body type of this object."
    },
    "preUpdate": {
     "!type": "fn() -> bool",
     "!doc": "Automatically called by World.preUpdate."
    },
    "anchor": {
     "!type": "+Phaser.Point"
    },
    "texture": {
     "!type": "+Texture"
    },
    "tint": {
     "!type": "number"
    },
    "tintedTexture": {
     "!type": "+Canvas"
    },
    "blendMode": {
     "!type": "number"
    },
    "shader": {
     "!type": "+AbstractFilter"
    },
    "game": {
     "!type": "+Phaser.Game"
    },
    "name": {
     "!type": "string"
    },
    "components": {
     "!type": "?"
    },
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
     "!type": "fn()",
     "!doc": "Override this method in your own custom objects to handle any update requirements.\nIt is called immediately after `preUpdate` and before `postUpdate`.\nRemember if this Game Object has any children you should call update on those too."
    },
    "postUpdate": {
     "!type": "fn()",
     "!doc": "Internal method called by the World postUpdate cycle."
    },
    "angle": {
     "!type": "number"
    },
    "play": {
     "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> +Phaser.Animation",
     "!doc": "Plays an Animation.\n\nThe animation should have previously been created via `animations.add`.\n\nIf the animation is already playing calling this again won't do anything.\nIf you need to reset an already running animation do so directly on the Animation object itself or via `AnimationManager.stop`."
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
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Brings this Game Object to the top of its parents display list.\nVisually this means it will render over the top of any old child in the same Group.\n\nIf this Game Object hasn't been added to a custom Group then this method will bring it to the top of the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "sendToBack": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Sends this Game Object to the bottom of its parents display list.\nVisually this means it will render below all other children in the same Group.\n\nIf this Game Object hasn't been added to a custom Group then this method will send it to the bottom of the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "moveUp": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Moves this Game Object up one place in its parents display list.\nThis call has no effect if the Game Object is already at the top of the display list.\n\nIf this Game Object hasn't been added to a custom Group then this method will move it one object up within the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "moveDown": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Moves this Game Object down one place in its parents display list.\nThis call has no effect if the Game Object is already at the bottom of the display list.\n\nIf this Game Object hasn't been added to a custom Group then this method will move it one object down within the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "cropRect": {
     "!type": "+Phaser.Rectangle"
    },
    "crop": {
     "!type": "fn(rect: +Phaser.Rectangle, copy: bool)",
     "!doc": "Crop allows you to crop the texture being used to display this Game Object.\nSetting a crop rectangle modifies the core texture frame. The Game Object width and height properties will be adjusted accordingly.\n\nCropping takes place from the top-left and can be modified in real-time either by providing an updated rectangle object to this method,\nor by modifying `cropRect` property directly and then calling `updateCrop`.\n\nThe rectangle object given to this method can be either a `Phaser.Rectangle` or any other object \nso long as it has public `x`, `y`, `width`, `height`, `right` and `bottom` properties.\n\nA reference to the rectangle is stored in `cropRect` unless the `copy` parameter is `true`, \nin which case the values are duplicated to a local object."
    },
    "updateCrop": {
     "!type": "fn()",
     "!doc": "If you have set a crop rectangle on this Game Object via `crop` and since modified the `cropRect` property,\nor the rectangle it references, then you need to update the crop frame by calling this method."
    },
    "deltaX": {
     "!type": "number"
    },
    "deltaY": {
     "!type": "number"
    },
    "deltaZ": {
     "!type": "number",
     "!doc": "The delta value."
    },
    "destroyPhase": {
     "!type": "bool"
    },
    "destroy": {
     "!type": "fn(destroyChildren: bool)",
     "!doc": "Destroys the Game Object. This removes it from its parent group, destroys the input, event and animation handlers if present\nand nulls its reference to `game`, freeing it up for garbage collection.\n\nIf this Game Object has the Events component it will also dispatch the `onDestroy` event."
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
    "damage": {
     "!doc": "Damages the Game Object. This removes the given amount of health from the `health` property.\n\nIf health is taken below or is equal to zero then the `kill` method is called."
    },
    "heal": {
     "!doc": "Heal the Game Object. This adds the given amount of health to the `health` property."
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
     "!type": "fn(health: number) -> +PIXI.DisplayObject",
     "!doc": "Brings a 'dead' Game Object back to life, optionally resetting its health value in the process.\n\nA resurrected Game Object has its `alive`, `exists` and `visible` properties all set to true.\n\nIt will dispatch the `onRevived` event. Listen to `events.onRevived` for the signal."
    },
    "kill": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Kills a Game Object. A killed Game Object has its `alive`, `exists` and `visible` properties all set to false.\n\nIt will dispatch the `onKilled` event. You can listen to `events.onKilled` for the signal.\n\nNote that killing a Game Object is a way for you to quickly recycle it in an object pool, \nit doesn't destroy the object or free it up from memory.\n\nIf you don't need this Game Object any more you should call `destroy` instead."
    },
    "loadTexture": {
     "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)",
     "!doc": "Changes the base texture the Game Object is using. The old texture is removed and the new one is referenced or fetched from the Cache.\n\nIf your Game Object is using a frame from a texture atlas and you just wish to change to another frame, then see the `frame` or `frameName` properties instead.\n\nYou should only use `loadTexture` if you want to replace the base texture entirely.\n\nCalling this method causes a WebGL texture update, so use sparingly or in low-intensity portions of your game, or if you know the new texture is already on the GPU."
    },
    "setFrame": {
     "!type": "fn(frame: +Phaser.Frame)",
     "!doc": "Sets the texture frame the Game Object uses for rendering.\n\nThis is primarily an internal method used by `loadTexture`, but is exposed for the use of plugins and custom classes."
    },
    "resizeFrame": {
     "!type": "fn(parent: ?, width: number, height: number)",
     "!doc": "Resizes the Frame dimensions that the Game Object uses for rendering.\n\nYou shouldn't normally need to ever call this, but in the case of special texture types such as Video or BitmapData\nit can be useful to adjust the dimensions directly in this way."
    },
    "resetFrame": {
     "!type": "fn()",
     "!doc": "Resets the texture frame dimensions that the Game Object uses for rendering."
    },
    "frame": {
     "!type": "number"
    },
    "frameName": {
     "!type": "string"
    },
    "overlap": {
     "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> bool",
     "!doc": "Checks to see if the bounds of this Game Object overlaps with the bounds of the given Display Object, \nwhich can be a Sprite, Image, TileSprite or anything that extends those such as Button or provides a `getBounds` method and result.\n\nThis check ignores the `hitArea` property if set and runs a `getBounds` comparison on both objects to determine the result.\n\nTherefore it's relatively expensive to use in large quantities, i.e. with lots of Sprites at a high frequency.\nIt should be fine for low-volume testing where physics isn't required."
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
     "!type": "fn(x: number, y: number, health: number) -> +PIXI.DisplayObject",
     "!doc": "Resets the Game Object.\n\nThis moves the Game Object to the given x/y world coordinates and sets `fresh`, `exists`, \n`visible` and `renderable` to true.\n\nIf this Game Object has the LifeSpan component it will also set `alive` to true and `health` to the given value.\n\nIf this Game Object has a Physics Body it will reset the Body."
    },
    "transformCallback": {
     "!type": "fn()"
    },
    "transformCallbackContext": {
     "!type": "?"
    },
    "scaleMin": {
     "!type": "+Phaser.Point"
    },
    "scaleMax": {
     "!type": "+Phaser.Point"
    },
    "setScaleMinMax": {
     "!type": "fn(minX: number|+null, minY: number|+null, maxX: number|+null, maxY: number|+null)",
     "!doc": "Sets the scaleMin and scaleMax values. These values are used to limit how far this Game Object will scale based on its parent.\n\nFor example if this Game Object has a `minScale` value of 1 and its parent has a `scale` value of 0.5, the 0.5 will be ignored \nand the scale value of 1 will be used, as the parents scale is lower than the minimum scale this Game Object should adhere to.\n\nBy setting these values you can carefully control how Game Objects deal with responsive scaling.\n\nIf only one parameter is given then that value will be used for both scaleMin and scaleMax:\n`setScaleMinMax(1)` = scaleMin.x, scaleMin.y, scaleMax.x and scaleMax.y all = 1\n\nIf only two parameters are given the first is set as scaleMin.x and y and the second as scaleMax.x and y:\n`setScaleMinMax(0.5, 2)` = scaleMin.x and y = 0.5 and scaleMax.x and y = 2\n\nIf you wish to set `scaleMin` with different values for x and y then either modify Game Object.scaleMin directly, \nor pass `null` for the `maxX` and `maxY` parameters.\n\nCall `setScaleMinMax(null)` to clear all previously set values."
    },
    "smoothed": {
     "!type": "bool"
    }
   }
  },
  "SpriteBatch": {
   "!type": "fn(game: +Phaser.Game, parent: +Phaser.Group|+Phaser.Sprite|+null, name: string, addToStage: bool)",
   "!doc": "The SpriteBatch class is a really fast version of the DisplayObjectContainer built purely for speed, so use when you need a lot of sprites or particles.\nIt's worth mentioning that by default sprite batches are used through-out the renderer, so you only really need to use a SpriteBatch if you have over\n1000 sprites that all share the same texture (or texture atlas). It's also useful if running in Canvas mode and you have a lot of un-rotated or un-scaled\nSprites as it skips all of the Canvas setTransform calls, which helps performance, especially on mobile devices.\n\nPlease note that any Sprite that is part of a SpriteBatch will not have its bounds updated, so will fail checks such as outOfBounds.",
   "prototype": {
    "type": {
     "!type": "number",
     "!doc": "Internal Phaser Type value."
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
     "!type": "number",
     "!doc": "The const physics body type of this object."
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
    "classType": {
     "!type": "?"
    },
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
     "!type": "number",
     "!doc": "The current index of the Group cursor. Advance it with Group.next."
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
     "!type": "fn(child: +DisplayObject, silent: bool) -> +DisplayObject",
     "!doc": "Adds an existing object as the top child in this group.\n\nThe child is automatically added to the top of the group and is displayed on top of every previous child.\n\nIf Group.enableBody is set then a physics body will be created on the object, so long as one does not already exist.\n\nUse {@link #addAt} to control where a child is added. Use {@link #create} to create and add a new child."
    },
    "addToHash": {
     "!type": "fn(child: +DisplayObject) -> bool",
     "!doc": "Adds a child of this Group into the hash array.\nThis call will return false if the child is not a child of this Group, or is already in the hash."
    },
    "removeFromHash": {
     "!type": "fn(child: +DisplayObject) -> bool",
     "!doc": "Removes a child of this Group from the hash array.\nThis call will return false if the child is not in the hash."
    },
    "addMultiple": {
     "!type": "fn(children: [?]|+Phaser.Group, silent: bool) -> [?]|+Phaser.Group",
     "!doc": "Adds an array of existing Display Objects to this Group.\n\nThe Display Objects are automatically added to the top of this Group, and will render on-top of everything already in this Group.\n\nAs well as an array you can also pass another Group as the first argument. In this case all of the children from that\nGroup will be removed from it and added into this Group."
    },
    "addAt": {
     "!type": "fn(child: +DisplayObject, index: number, silent: bool) -> +DisplayObject",
     "!doc": "Adds an existing object to this group.\n\nThe child is added to the group at the location specified by the index value, this allows you to control child ordering."
    },
    "getAt": {
     "!type": "fn(index: number) -> +DisplayObject|number",
     "!doc": "Returns the child found at the given index within this group."
    },
    "create": {
     "!type": "fn(x: number, y: number, key: string, frame: number|string, exists: bool) -> +DisplayObject",
     "!doc": "Creates a new Phaser.Sprite object and adds it to the top of this group.\n\nUse {@link #classType} to change the type of object creaded."
    },
    "createMultiple": {
     "!type": "fn(quantity: number, key: string, frame: number|string, exists: bool)",
     "!doc": "Creates multiple Phaser.Sprite objects and adds them to the top of this group.\n\nUseful if you need to quickly generate a pool of identical sprites, such as bullets.\n\nBy default the sprites will be set to not exist and will be positioned at 0, 0 (relative to the group.x/y).\nUse {@link #classType} to change the type of object created."
    },
    "updateZ": {
     "!type": "fn()",
     "!doc": "Internal method that re-applies all of the children's Z values.\n\nThis must be called whenever children ordering is altered so that their `z` indices are correctly updated."
    },
    "resetCursor": {
     "!type": "fn(index: number) -> +any",
     "!doc": "Sets the group cursor to the first child in the group.\n\nIf the optional index parameter is given it sets the cursor to the object at that index instead."
    },
    "next": {
     "!type": "fn() -> +any",
     "!doc": "Advances the group cursor to the next (higher) object in the group.\n\nIf the cursor is at the end of the group (top child) it is moved the start of the group (bottom child)."
    },
    "previous": {
     "!type": "fn() -> +any",
     "!doc": "Moves the group cursor to the previous (lower) child in the group.\n\nIf the cursor is at the start of the group (bottom child) it is moved to the end (top child)."
    },
    "swap": {
     "!type": "fn(child1: +any, child2: +any)",
     "!doc": "Swaps the position of two children in this group.\n\nBoth children must be in this group, a child cannot be swapped with itself, and unparented children cannot be swapped."
    },
    "bringToTop": {
     "!type": "fn(child: +any) -> +any",
     "!doc": "Brings the given child to the top of this group so it renders above all other children."
    },
    "sendToBack": {
     "!type": "fn(child: +any) -> +any",
     "!doc": "Sends the given child to the bottom of this group so it renders below all other children."
    },
    "moveUp": {
     "!type": "fn(child: +any) -> +any",
     "!doc": "Moves the given child up one place in this group unless it's already at the top."
    },
    "moveDown": {
     "!type": "fn(child: +any) -> +any",
     "!doc": "Moves the given child down one place in this group unless it's already at the bottom."
    },
    "xy": {
     "!type": "fn(index: number, x: number, y: number)",
     "!doc": "Positions the child found at the given index within this group to the given x and y coordinates."
    },
    "reverse": {
     "!type": "fn()",
     "!doc": "Reverses all children in this group.\n\nThis operaation applies only to immediate children and does not propagate to subgroups."
    },
    "getIndex": {
     "!type": "fn(child: +any) -> number",
     "!doc": "Get the index position of the given child in this group, which should match the child's `z` property."
    },
    "replace": {
     "!type": "fn(oldChild: +any, newChild: +any) -> +any",
     "!doc": "Replaces a child of this group with the given newChild. The newChild cannot be a member of this group."
    },
    "hasProperty": {
     "!type": "fn(child: +any, key: [?]) -> bool",
     "!doc": "Checks if the child has the given property.\n\nWill scan up to 4 levels deep only."
    },
    "setProperty": {
     "!type": "fn(child: +any, key: +array, value: +any, operation: number, force: bool) -> bool",
     "!doc": "Sets a property to the given value on the child. The operation parameter controls how the value is set.\n\nThe operations are:\n- 0: set the existing value to the given value; if force is `true` a new property will be created if needed\n- 1: will add the given value to the value already present.\n- 2: will subtract the given value from the value already present.\n- 3: will multiply the value already present by the given value.\n- 4: will divide the value already present by the given value."
    },
    "checkProperty": {
     "!type": "fn(child: +any, key: +array, value: +any, force: bool) -> bool",
     "!doc": "Checks a property for the given value on the child."
    },
    "set": {
     "!type": "fn(child: +Phaser.Sprite, key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool) -> bool",
     "!doc": "Quickly set a property on a single child of this group to a new value.\n\nThe operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication."
    },
    "setAll": {
     "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)",
     "!doc": "Quickly set the same property across all children of this group to a new value.\n\nThis call doesn't descend down children, so if you have a Group inside of this group, the property will be set on the group but not its children.\nIf you need that ability please see `Group.setAllChildren`.\n\nThe operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication."
    },
    "setAllChildren": {
     "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)",
     "!doc": "Quickly set the same property across all children of this group, and any child Groups, to a new value.\n\nIf this group contains other Groups then the same property is set across their children as well, iterating down until it reaches the bottom.\nUnlike with `setAll` the property is NOT set on child Groups itself.\n\nThe operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication."
    },
    "checkAll": {
     "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, force: bool)",
     "!doc": "Quickly check that the same property across all children of this group is equal to the given value.\n\nThis call doesn't descend down children, so if you have a Group inside of this group, the property will be checked on the group but not its children."
    },
    "addAll": {
     "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)",
     "!doc": "Adds the amount to the given property on all children in this group.\n\n`Group.addAll('x', 10)` will add 10 to the child.x value for each child."
    },
    "subAll": {
     "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)",
     "!doc": "Subtracts the amount from the given property on all children in this group.\n\n`Group.subAll('x', 10)` will minus 10 from the child.x value for each child."
    },
    "multiplyAll": {
     "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)",
     "!doc": "Multiplies the given property by the amount on all children in this group.\n\n`Group.multiplyAll('x', 2)` will x2 the child.x value for each child."
    },
    "divideAll": {
     "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)",
     "!doc": "Divides the given property by the amount on all children in this group.\n\n`Group.divideAll('x', 2)` will half the child.x value for each child."
    },
    "callAllExists": {
     "!type": "fn(callback: string, existsValue: bool, parameter: +any)",
     "!doc": "Calls a function, specified by name, on all children in the group who exist (or do not exist).\n\nAfter the existsValue parameter you can add as many parameters as you like, which will all be passed to the child callback."
    },
    "callbackFromArray": {
     "!type": "fn(child: ?, callback: +array, length: number)",
     "!doc": "Returns a reference to a function that exists on a child of the group based on the given callback array."
    },
    "callAll": {
     "!type": "fn(method: string, context: string, args: +any)",
     "!doc": "Calls a function, specified by name, on all on children.\n\nThe function is called for all children regardless if they are dead or alive (see callAllExists for different options).\nAfter the method parameter and context you can add as many extra parameters as you like, which will all be passed to the child."
    },
    "preUpdate": {
     "!type": "fn()",
     "!doc": "The core preUpdate - as called by World."
    },
    "update": {
     "!type": "fn()",
     "!doc": "The core update - as called by World."
    },
    "postUpdate": {
     "!type": "fn()",
     "!doc": "The core postUpdate - as called by World."
    },
    "filter": {
     "!type": "fn(predicate: fn(), checkExists: bool) -> +Phaser.ArraySet",
     "!doc": "Find children matching a certain predicate.\n\nFor example:\n\n    var healthyList = Group.filter(function(child, index, children) {\n        return child.health > 10 ? true : false;\n    }, true);\n    healthyList.callAll('attack');\n\nNote: Currently this will skip any children which are Groups themselves."
    },
    "forEach": {
     "!type": "fn(callback: fn(), callbackContext: ?, checkExists: bool, args: +any)",
     "!doc": "Call a function on each child in this group.\n\nAdditional arguments for the callback can be specified after the `checkExists` parameter. For example,\n\n    Group.forEach(awardBonusGold, this, true, 100, 500)\n\nwould invoke `awardBonusGold` function with the parameters `(child, 100, 500)`.\n\nNote: This check will skip any children which are Groups themselves."
    },
    "forEachExists": {
     "!type": "fn(callback: fn(), callbackContext: ?, args: +any)",
     "!doc": "Call a function on each existing child in this group.\n\nSee {@link Phaser.Group#forEach forEach} for details."
    },
    "forEachAlive": {
     "!type": "fn(callback: fn(), callbackContext: ?, args: +any)",
     "!doc": "Call a function on each alive child in this group.\n\nSee {@link Phaser.Group#forEach forEach} for details."
    },
    "forEachDead": {
     "!type": "fn(callback: fn(), callbackContext: ?, args: +any)",
     "!doc": "Call a function on each dead child in this group.\n\nSee {@link Phaser.Group#forEach forEach} for details."
    },
    "sort": {
     "!type": "fn(key: string, order: number)",
     "!doc": "Sort the children in the group according to a particular key and ordering.\n\nCall this function to sort the group according to a particular key value and order.\nFor example to depth sort Sprites for Zelda-style game you might call `group.sort('y', Phaser.Group.SORT_ASCENDING)` at the bottom of your `State.update()`."
    },
    "customSort": {
     "!type": "fn(sortHandler: fn(), context: ?)",
     "!doc": "Sort the children in the group according to custom sort function.\n\nThe `sortHandler` is provided the two parameters: the two children involved in the comparison (a and b).\nIt should return -1 if `a > b`, 1 if `a < b` or 0 if `a === b`."
    },
    "ascendingSortHandler": {
     "!type": "fn(a: ?, b: ?)",
     "!doc": "An internal helper function for the sort process."
    },
    "descendingSortHandler": {
     "!type": "fn(a: ?, b: ?)",
     "!doc": "An internal helper function for the sort process."
    },
    "iterate": {
     "!type": "fn(key: string, value: +any, returnType: number, callback: fn(), callbackContext: ?, args: [?]) -> +any",
     "!doc": "Iterates over the children of the group performing one of several actions for matched children.\n\nA child is considered a match when it has a property, named `key`, whose value is equal to `value`\naccording to a strict equality comparison.\n\nThe result depends on the `returnType`:\n\n- {@link Phaser.Group.RETURN_TOTAL RETURN_TOTAL}:\n    The callback, if any, is applied to all matching children. The number of matched children is returned.\n- {@link Phaser.Group.RETURN_NONE RETURN_NONE}:\n    The callback, if any, is applied to all matching children. No value is returned.\n- {@link Phaser.Group.RETURN_CHILD RETURN_CHILD}:\n    The callback, if any, is applied to the *first* matching child and the *first* matched child is returned.\n    If there is no matching child then null is returned.\n\nIf `args` is specified it must be an array. The matched child will be assigned to the first\nelement and the entire array will be applied to the callback function."
    },
    "getFirstExists": {
     "!type": "fn(exists: bool) -> +any",
     "!doc": "Get the first display object that exists, or doesn't exist."
    },
    "getFirstAlive": {
     "!type": "fn() -> +any",
     "!doc": "Get the first child that is alive (`child.alive === true`).\n\nThis is handy for checking if everything has been wiped out, or choosing a squad leader, etc."
    },
    "getFirstDead": {
     "!type": "fn() -> +any",
     "!doc": "Get the first child that is dead (`child.alive === false`).\n\nThis is handy for checking if everything has been wiped out, or choosing a squad leader, etc."
    },
    "getTop": {
     "!type": "fn() -> +any",
     "!doc": "Return the child at the top of this group.\n\nThe top child is the child displayed (rendered) above every other child."
    },
    "getBottom": {
     "!type": "fn() -> +any",
     "!doc": "Returns the child at the bottom of this group.\n\nThe bottom child the child being displayed (rendered) below every other child."
    },
    "countLiving": {
     "!type": "fn() -> number",
     "!doc": "Get the number of living children in this group."
    },
    "countDead": {
     "!type": "fn() -> number",
     "!doc": "Get the number of dead children in this group."
    },
    "getRandom": {
     "!type": "fn(startIndex: number, length: number) -> +any",
     "!doc": "Returns a random child from the group."
    },
    "remove": {
     "!type": "fn(child: +any, destroy: bool, silent: bool) -> bool",
     "!doc": "Removes the given child from this group.\n\nThis will dispatch an `onRemovedFromGroup` event from the child (if it has one), and optionally destroy the child.\n\nIf the group cursor was referring to the removed child it is updated to refer to the next child."
    },
    "moveAll": {
     "!type": "fn(group: +Phaser.Group, silent: bool) -> +Phaser.Group",
     "!doc": "Moves all children from this Group to the Group given."
    },
    "removeAll": {
     "!type": "fn(destroy: bool, silent: bool)",
     "!doc": "Removes all children from this group, but does not remove the group from its parent."
    },
    "removeBetween": {
     "!type": "fn(startIndex: number, endIndex: number, destroy: bool, silent: bool)",
     "!doc": "Removes all children from this group whose index falls beteen the given startIndex and endIndex values."
    },
    "destroy": {
     "!type": "fn(destroyChildren: bool, soft: bool)",
     "!doc": "Destroys this group.\n\nRemoves all children, then removes this group from its parent and nulls references."
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
    "children": {
     "!type": "[?]"
    }
   }
  },
  "Text": {
   "!type": "fn(game: +Phaser.Game, x: number, y: number, text: string, style: +PhaserTextStyle)",
   "!doc": "Create a new game object for displaying Text.\n\nThis uses a local hidden Canvas object and renders the type into it. It then makes a texture from this for rendering to the view.\nBecause of this you can only display fonts that are currently loaded and available to the browser: fonts must be pre-loaded.\n\nSee {@link http://www.jordanm.co.uk/tinytype this compatibility table} for the available default fonts across mobile browsers.",
   "prototype": {
    "type": {
     "!type": "number",
     "!doc": "The const type of this object."
    },
    "physicsType": {
     "!type": "number",
     "!doc": "The const physics body type of this object."
    },
    "padding": {
     "!type": "+Phaser.Point"
    },
    "textBounds": {
     "!type": "+Phaser.Rectangle"
    },
    "canvas": {
     "!type": "+HTMLCanvasElement",
     "!doc": "The canvas element that the text is rendered."
    },
    "context": {
     "!type": "+HTMLCanvasElement",
     "!doc": "The context of the canvas element that the text is rendered to."
    },
    "colors": {
     "!type": "+array",
     "!doc": "An array of the color values as specified by {@link Phaser.Text#addColor addColor}."
    },
    "strokeColors": {
     "!type": "+array",
     "!doc": "An array of the stroke color values as specified by {@link Phaser.Text#addStrokeColor addStrokeColor}."
    },
    "fontStyles": {
     "!type": "+array",
     "!doc": "An array of the font styles values as specified by {@link Phaser.Text#addFontStyle addFontStyle}."
    },
    "fontWeights": {
     "!type": "+array",
     "!doc": "An array of the font weights values as specified by {@link Phaser.Text#addFontWeight addFontWeight}."
    },
    "autoRound": {
     "!type": "bool"
    },
    "preUpdate": {
     "!type": "fn()",
     "!doc": "Automatically called by World.preUpdate."
    },
    "update": {
     "!type": "fn()",
     "!doc": "Override this function to handle any special update requirements."
    },
    "destroy": {
     "!type": "fn(destroyChildren: bool)",
     "!doc": "Destroy this Text object, removing it from the group it belongs to."
    },
    "setShadow": {
     "!type": "fn(x: number, y: number, color: string, blur: number, shadowStroke: bool, shadowFill: bool) -> +Phaser.Text",
     "!doc": "Sets a drop shadow effect on the Text. You can specify the horizontal and vertical distance of the drop shadow with the `x` and `y` parameters.\nThe color controls the shade of the shadow (default is black) and can be either an `rgba` or `hex` value.\nThe blur is the strength of the shadow. A value of zero means a hard shadow, a value of 10 means a very soft shadow.\nTo remove a shadow already in place you can call this method with no parameters set."
    },
    "setStyle": {
     "!type": "fn(style: +PhaserTextsetStyleStyle) -> +Phaser.Text",
     "!doc": "Set the style of the text by passing a single style object to it."
    },
    "updateShadow": {
     "!type": "fn(state: bool)",
     "!doc": "Sets the Shadow on the Text.context based on the Style settings, or disables it if not enabled.\nThis is called automatically by Text.updateText."
    },
    "clearColors": {
     "!type": "fn() -> +Phaser.Text",
     "!doc": "Clears any text fill or stroke colors that were set by `addColor` or `addStrokeColor`."
    },
    "clearFontValues": {
     "!type": "fn() -> +Phaser.Text",
     "!doc": "Clears any text styles or weights font that were set by `addFontStyle` or `addFontWeight`."
    },
    "addColor": {
     "!type": "fn(color: string, position: number) -> +Phaser.Text",
     "!doc": "Set specific colors for certain characters within the Text.\n\nIt works by taking a color value, which is a typical HTML string such as `#ff0000` or `rgb(255,0,0)` and a position.\nThe position value is the index of the character in the Text string to start applying this color to.\nOnce set the color remains in use until either another color or the end of the string is encountered.\nFor example if the Text was `Photon Storm` and you did `Text.addColor('#ffff00', 6)` it would color in the word `Storm` in yellow.\n\nIf you wish to change the stroke color see addStrokeColor instead."
    },
    "addStrokeColor": {
     "!type": "fn(color: string, position: number) -> +Phaser.Text",
     "!doc": "Set specific stroke colors for certain characters within the Text.\n\nIt works by taking a color value, which is a typical HTML string such as `#ff0000` or `rgb(255,0,0)` and a position.\nThe position value is the index of the character in the Text string to start applying this color to.\nOnce set the color remains in use until either another color or the end of the string is encountered.\nFor example if the Text was `Photon Storm` and you did `Text.addColor('#ffff00', 6)` it would color in the word `Storm` in yellow.\n\nThis has no effect if stroke is disabled or has a thickness of 0.\n\nIf you wish to change the text fill color see addColor instead."
    },
    "addFontStyle": {
     "!type": "fn(style: string, position: number) -> +Phaser.Text",
     "!doc": "Set specific font styles for certain characters within the Text.\n\nIt works by taking a font style value, which is a typical string such as `normal`, `italic` or `oblique`.\nThe position value is the index of the character in the Text string to start applying this font style to.\nOnce set the font style remains in use until either another font style or the end of the string is encountered.\nFor example if the Text was `Photon Storm` and you did `Text.addFontStyle('italic', 6)` it would font style in the word `Storm` in italic.\n\nIf you wish to change the text font weight see addFontWeight instead."
    },
    "addFontWeight": {
     "!type": "fn(style: string, position: number) -> +Phaser.Text",
     "!doc": "Set specific font weights for certain characters within the Text.\n\nIt works by taking a font weight value, which is a typical string such as `normal`, `bold`, `bolder`, etc.\nThe position value is the index of the character in the Text string to start applying this font weight to.\nOnce set the font weight remains in use until either another font weight or the end of the string is encountered.\nFor example if the Text was `Photon Storm` and you did `Text.addFontWeight('bold', 6)` it would font weight in the word `Storm` in bold.\n\nIf you wish to change the text font style see addFontStyle instead."
    },
    "setText": {
     "!type": "fn(text: string) -> +Phaser.Text",
     "!doc": "The text to be displayed by this Text object.\nUse a \\n to insert a carriage return and split the text.\nThe text will be rendered with any style currently set."
    },
    "parseList": {
     "!type": "fn(list: +array) -> +Phaser.Text",
     "!doc": "Converts the given array into a tab delimited string and then updates this Text object.\nThis is mostly used when you want to display external data using tab stops.\n\nThe array can be either single or multi dimensional depending on the result you need:\n\n`[ 'a', 'b', 'c' ]` would convert in to `\"a\\tb\\tc\"`.\n\nWhere as:\n\n`[\n     [ 'a', 'b', 'c' ],\n     [ 'd', 'e', 'f']\n]`\n\nwould convert in to: `\"a\\tb\\tc\\nd\\te\\tf\"`"
    },
    "setTextBounds": {
     "!type": "fn(x: number, y: number, width: number, height: number) -> +Phaser.Text",
     "!doc": "The Text Bounds is a rectangular region that you control the dimensions of into which the Text object itself is positioned,\nregardless of the number of lines in the text, the font size or any other attribute.\n\nAlignment is controlled via the properties `boundsAlignH` and `boundsAlignV` within the Text.style object, or can be directly\nset through the setters `Text.boundsAlignH` and `Text.boundsAlignV`. Bounds alignment is independent of text alignment.\n\nFor example: If your game is 800x600 in size and you set the text bounds to be 0,0,800,600 then by setting boundsAlignH to\n'center' and boundsAlignV to 'bottom' the text will render in the center and at the bottom of your game window, regardless of\nhow many lines of text there may be. Even if you adjust the text content or change the style it will remain at the bottom center\nof the text bounds.\n\nThis is especially powerful when you need to align text against specific coordinates in your game, but the actual text dimensions\nmay vary based on font (say for multi-lingual games).\n\nIf `Text.wordWrapWidth` is greater than the width of the text bounds it is clamped to match the bounds width.\n\nCall this method with no arguments given to reset an existing textBounds.\n\nIt works by calculating the final position based on the Text.canvas size, which is modified as the text is updated. Some fonts\nhave additional padding around them which you can mitigate by tweaking the Text.padding property. It then adjusts the `pivot`\nproperty based on the given bounds and canvas size. This means if you need to set the pivot property directly in your game then\nyou either cannot use `setTextBounds` or you must place the Text object inside another DisplayObject on which you set the pivot."
    },
    "getBounds": {
     "!type": "fn(matrix: +Phaser.Matrix) -> +Phaser.Rectangle",
     "!doc": "Returns the bounds of the Text as a rectangle.\nThe bounds calculation takes the worldTransform into account."
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
    "fill": {
     "!type": "?",
     "!doc": "A canvas fillstyle that will be used on the text eg 'red', '#00FF00'."
    },
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
     "!type": "string",
     "!doc": "A canvas fillstyle that will be used on the text stroke eg 'blue', '#FCFF00'."
    },
    "strokeThickness": {
     "!type": "number",
     "!doc": "A number that represents the thickness of the stroke. Default is 0 (no stroke)"
    },
    "wordWrap": {
     "!type": "bool",
     "!doc": "Indicates if word wrap should be used."
    },
    "wordWrapWidth": {
     "!type": "number",
     "!doc": "The width at which text will wrap."
    },
    "lineSpacing": {
     "!type": "number",
     "!doc": "Additional spacing (in pixels) between each line of text if multi-line."
    },
    "shadowOffsetX": {
     "!type": "number",
     "!doc": "The shadowOffsetX value in pixels. This is how far offset horizontally the shadow effect will be."
    },
    "shadowOffsetY": {
     "!type": "number",
     "!doc": "The shadowOffsetY value in pixels. This is how far offset vertically the shadow effect will be."
    },
    "shadowColor": {
     "!type": "string",
     "!doc": "The color of the shadow, as given in CSS rgba format. Set the alpha component to 0 to disable the shadow."
    },
    "shadowBlur": {
     "!type": "number",
     "!doc": "The shadowBlur value. Make the shadow softer by applying a Gaussian blur to it. A number from 0 (no blur) up to approx. 10 (depending on scene)."
    },
    "shadowStroke": {
     "!type": "bool",
     "!doc": "Sets if the drop shadow is applied to the Text stroke."
    },
    "shadowFill": {
     "!type": "bool",
     "!doc": "Sets if the drop shadow is applied to the Text fill."
    },
    "width": {
     "!type": "number",
     "!doc": "The width of the Text. Setting this will modify the scale to achieve the value requested."
    },
    "height": {
     "!type": "number",
     "!doc": "The height of the Text. Setting this will modify the scale to achieve the value requested."
    },
    "anchor": {
     "!type": "+Phaser.Point"
    },
    "texture": {
     "!type": "+Texture"
    },
    "tint": {
     "!type": "number"
    },
    "tintedTexture": {
     "!type": "+Canvas"
    },
    "blendMode": {
     "!type": "number"
    },
    "shader": {
     "!type": "+AbstractFilter"
    },
    "game": {
     "!type": "+Phaser.Game"
    },
    "name": {
     "!type": "string"
    },
    "components": {
     "!type": "?"
    },
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
     "!type": "fn()",
     "!doc": "Internal method called by the World postUpdate cycle."
    },
    "angle": {
     "!type": "number"
    },
    "play": {
     "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> +Phaser.Animation",
     "!doc": "Plays an Animation.\n\nThe animation should have previously been created via `animations.add`.\n\nIf the animation is already playing calling this again won't do anything.\nIf you need to reset an already running animation do so directly on the Animation object itself or via `AnimationManager.stop`."
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
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Brings this Game Object to the top of its parents display list.\nVisually this means it will render over the top of any old child in the same Group.\n\nIf this Game Object hasn't been added to a custom Group then this method will bring it to the top of the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "sendToBack": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Sends this Game Object to the bottom of its parents display list.\nVisually this means it will render below all other children in the same Group.\n\nIf this Game Object hasn't been added to a custom Group then this method will send it to the bottom of the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "moveUp": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Moves this Game Object up one place in its parents display list.\nThis call has no effect if the Game Object is already at the top of the display list.\n\nIf this Game Object hasn't been added to a custom Group then this method will move it one object up within the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "moveDown": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Moves this Game Object down one place in its parents display list.\nThis call has no effect if the Game Object is already at the bottom of the display list.\n\nIf this Game Object hasn't been added to a custom Group then this method will move it one object down within the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "cropRect": {
     "!type": "+Phaser.Rectangle"
    },
    "crop": {
     "!type": "fn(rect: +Phaser.Rectangle, copy: bool)",
     "!doc": "Crop allows you to crop the texture being used to display this Game Object.\nSetting a crop rectangle modifies the core texture frame. The Game Object width and height properties will be adjusted accordingly.\n\nCropping takes place from the top-left and can be modified in real-time either by providing an updated rectangle object to this method,\nor by modifying `cropRect` property directly and then calling `updateCrop`.\n\nThe rectangle object given to this method can be either a `Phaser.Rectangle` or any other object \nso long as it has public `x`, `y`, `width`, `height`, `right` and `bottom` properties.\n\nA reference to the rectangle is stored in `cropRect` unless the `copy` parameter is `true`, \nin which case the values are duplicated to a local object."
    },
    "updateCrop": {
     "!type": "fn()",
     "!doc": "If you have set a crop rectangle on this Game Object via `crop` and since modified the `cropRect` property,\nor the rectangle it references, then you need to update the crop frame by calling this method."
    },
    "deltaX": {
     "!type": "number"
    },
    "deltaY": {
     "!type": "number"
    },
    "deltaZ": {
     "!type": "number",
     "!doc": "The delta value."
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
    "damage": {
     "!doc": "Damages the Game Object. This removes the given amount of health from the `health` property.\n\nIf health is taken below or is equal to zero then the `kill` method is called."
    },
    "heal": {
     "!doc": "Heal the Game Object. This adds the given amount of health to the `health` property."
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
     "!type": "fn(health: number) -> +PIXI.DisplayObject",
     "!doc": "Brings a 'dead' Game Object back to life, optionally resetting its health value in the process.\n\nA resurrected Game Object has its `alive`, `exists` and `visible` properties all set to true.\n\nIt will dispatch the `onRevived` event. Listen to `events.onRevived` for the signal."
    },
    "kill": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Kills a Game Object. A killed Game Object has its `alive`, `exists` and `visible` properties all set to false.\n\nIt will dispatch the `onKilled` event. You can listen to `events.onKilled` for the signal.\n\nNote that killing a Game Object is a way for you to quickly recycle it in an object pool, \nit doesn't destroy the object or free it up from memory.\n\nIf you don't need this Game Object any more you should call `destroy` instead."
    },
    "loadTexture": {
     "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)",
     "!doc": "Changes the base texture the Game Object is using. The old texture is removed and the new one is referenced or fetched from the Cache.\n\nIf your Game Object is using a frame from a texture atlas and you just wish to change to another frame, then see the `frame` or `frameName` properties instead.\n\nYou should only use `loadTexture` if you want to replace the base texture entirely.\n\nCalling this method causes a WebGL texture update, so use sparingly or in low-intensity portions of your game, or if you know the new texture is already on the GPU."
    },
    "setFrame": {
     "!type": "fn(frame: +Phaser.Frame)",
     "!doc": "Sets the texture frame the Game Object uses for rendering.\n\nThis is primarily an internal method used by `loadTexture`, but is exposed for the use of plugins and custom classes."
    },
    "resizeFrame": {
     "!type": "fn(parent: ?, width: number, height: number)",
     "!doc": "Resizes the Frame dimensions that the Game Object uses for rendering.\n\nYou shouldn't normally need to ever call this, but in the case of special texture types such as Video or BitmapData\nit can be useful to adjust the dimensions directly in this way."
    },
    "resetFrame": {
     "!type": "fn()",
     "!doc": "Resets the texture frame dimensions that the Game Object uses for rendering."
    },
    "frame": {
     "!type": "number"
    },
    "frameName": {
     "!type": "string"
    },
    "overlap": {
     "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> bool",
     "!doc": "Checks to see if the bounds of this Game Object overlaps with the bounds of the given Display Object, \nwhich can be a Sprite, Image, TileSprite or anything that extends those such as Button or provides a `getBounds` method and result.\n\nThis check ignores the `hitArea` property if set and runs a `getBounds` comparison on both objects to determine the result.\n\nTherefore it's relatively expensive to use in large quantities, i.e. with lots of Sprites at a high frequency.\nIt should be fine for low-volume testing where physics isn't required."
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
     "!type": "fn(x: number, y: number, health: number) -> +PIXI.DisplayObject",
     "!doc": "Resets the Game Object.\n\nThis moves the Game Object to the given x/y world coordinates and sets `fresh`, `exists`, \n`visible` and `renderable` to true.\n\nIf this Game Object has the LifeSpan component it will also set `alive` to true and `health` to the given value.\n\nIf this Game Object has a Physics Body it will reset the Body."
    },
    "transformCallback": {
     "!type": "fn()"
    },
    "transformCallbackContext": {
     "!type": "?"
    },
    "scaleMin": {
     "!type": "+Phaser.Point"
    },
    "scaleMax": {
     "!type": "+Phaser.Point"
    },
    "setScaleMinMax": {
     "!type": "fn(minX: number|+null, minY: number|+null, maxX: number|+null, maxY: number|+null)",
     "!doc": "Sets the scaleMin and scaleMax values. These values are used to limit how far this Game Object will scale based on its parent.\n\nFor example if this Game Object has a `minScale` value of 1 and its parent has a `scale` value of 0.5, the 0.5 will be ignored \nand the scale value of 1 will be used, as the parents scale is lower than the minimum scale this Game Object should adhere to.\n\nBy setting these values you can carefully control how Game Objects deal with responsive scaling.\n\nIf only one parameter is given then that value will be used for both scaleMin and scaleMax:\n`setScaleMinMax(1)` = scaleMin.x, scaleMin.y, scaleMax.x and scaleMax.y all = 1\n\nIf only two parameters are given the first is set as scaleMin.x and y and the second as scaleMax.x and y:\n`setScaleMinMax(0.5, 2)` = scaleMin.x and y = 0.5 and scaleMax.x and y = 2\n\nIf you wish to set `scaleMin` with different values for x and y then either modify Game Object.scaleMin directly, \nor pass `null` for the `maxX` and `maxY` parameters.\n\nCall `setScaleMinMax(null)` to clear all previously set values."
    },
    "smoothed": {
     "!type": "bool"
    }
   }
  },
  "TileSprite": {
   "!type": "fn(game: +Phaser.Game, x: number, y: number, width: number, height: number, key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+PIXI.Texture, frame: string|number)",
   "!doc": "A TileSprite is a Sprite that has a repeating texture. The texture can be scrolled and scaled independently of the TileSprite itself.\nTextures will automatically wrap and are designed so that you can create game backdrops using seamless textures as a source.\n\nTileSprites have no input handler or physics bodies by default, both need enabling in the same way as for normal Sprites.\n\nYou shouldn't ever create a TileSprite any larger than your actual screen size. If you want to create a large repeating background\nthat scrolls across the whole map of your game, then you create a TileSprite that fits the screen size and then use the `tilePosition`\nproperty to scroll the texture as the player moves. If you create a TileSprite that is thousands of pixels in size then it will \nconsume huge amounts of memory and cause performance issues. Remember: use `tilePosition` to scroll your texture and `tileScale` to\nadjust the scale of the texture - don't resize the sprite itself or make it larger than it needs.\n\nAn important note about texture dimensions:\n\nWhen running under Canvas a TileSprite can use any texture size without issue. When running under WebGL the texture should ideally be\na power of two in size (i.e. 4, 8, 16, 32, 64, 128, 256, 512, etch pixels width by height). If the texture isn't a power of two\nit will be rendered to a blank canvas that is the correct size, which means you may have 'blank' areas appearing to the right and\nbottom of your frame. To avoid this ensure your textures are perfect powers of two.\n\nTileSprites support animations in the same way that Sprites do. You add and play animations using the AnimationManager. However\nif your game is running under WebGL please note that each frame of the animation must be a power of two in size, or it will receive\nadditional padding to enforce it to be so.",
   "prototype": {
    "type": {
     "!type": "number",
     "!doc": "The const type of this object."
    },
    "physicsType": {
     "!type": "number",
     "!doc": "The const physics body type of this object."
    },
    "preUpdate": {
     "!type": "fn()",
     "!doc": "Automatically called by World.preUpdate."
    },
    "autoScroll": {
     "!type": "fn(x: number, y: number)",
     "!doc": "Sets this TileSprite to automatically scroll in the given direction until stopped via TileSprite.stopScroll().\nThe scroll speed is specified in pixels per second.\nA negative x value will scroll to the left. A positive x value will scroll to the right.\nA negative y value will scroll up. A positive y value will scroll down."
    },
    "stopScroll": {
     "!type": "fn()",
     "!doc": "Stops an automatically scrolling TileSprite."
    },
    "destroy": {
     "!type": "fn(destroyChildren: bool)",
     "!doc": "Destroys the TileSprite. This removes it from its parent group, destroys the event and animation handlers if present\nand nulls its reference to game, freeing it up for garbage collection."
    },
    "reset": {
     "!type": "fn(x: number, y: number) -> ?",
     "!doc": "Resets the TileSprite. This places the TileSprite at the given x/y world coordinates, resets the tilePosition and then\nsets alive, exists, visible and renderable all to true. Also resets the outOfBounds state.\nIf the TileSprite has a physics body that too is reset."
    },
    "_width": {
     "!type": "number"
    },
    "_height": {
     "!type": "number"
    },
    "tileScale": {
     "!type": "+Phaser.Point"
    },
    "tileScaleOffset": {
     "!type": "+Phaser.Point"
    },
    "tilePosition": {
     "!type": "+Phaser.Point"
    },
    "renderable": {
     "!type": "bool"
    },
    "tint": {
     "!type": "number"
    },
    "textureDebug": {
     "!type": "bool"
    },
    "blendMode": {
     "!type": "number"
    },
    "canvasBuffer": {
     "!type": "+PIXI.CanvasBuffer"
    },
    "tilingTexture": {
     "!type": "+PIXI.Texture"
    },
    "tilePattern": {
     "!type": "+PIXI.Texture"
    },
    "refreshTexture": {
     "!type": "bool"
    },
    "game": {
     "!type": "+Phaser.Game"
    },
    "name": {
     "!type": "string"
    },
    "components": {
     "!type": "?"
    },
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
     "!type": "fn()",
     "!doc": "Override this method in your own custom objects to handle any update requirements.\nIt is called immediately after `preUpdate` and before `postUpdate`.\nRemember if this Game Object has any children you should call update on those too."
    },
    "postUpdate": {
     "!type": "fn()",
     "!doc": "Internal method called by the World postUpdate cycle."
    },
    "angle": {
     "!type": "number"
    },
    "play": {
     "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> +Phaser.Animation",
     "!doc": "Plays an Animation.\n\nThe animation should have previously been created via `animations.add`.\n\nIf the animation is already playing calling this again won't do anything.\nIf you need to reset an already running animation do so directly on the Animation object itself or via `AnimationManager.stop`."
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
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Brings this Game Object to the top of its parents display list.\nVisually this means it will render over the top of any old child in the same Group.\n\nIf this Game Object hasn't been added to a custom Group then this method will bring it to the top of the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "sendToBack": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Sends this Game Object to the bottom of its parents display list.\nVisually this means it will render below all other children in the same Group.\n\nIf this Game Object hasn't been added to a custom Group then this method will send it to the bottom of the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "moveUp": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Moves this Game Object up one place in its parents display list.\nThis call has no effect if the Game Object is already at the top of the display list.\n\nIf this Game Object hasn't been added to a custom Group then this method will move it one object up within the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "moveDown": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Moves this Game Object down one place in its parents display list.\nThis call has no effect if the Game Object is already at the bottom of the display list.\n\nIf this Game Object hasn't been added to a custom Group then this method will move it one object down within the Game World, \nbecause the World is the root Group from which all Game Objects descend."
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
    "damage": {
     "!doc": "Damages the Game Object. This removes the given amount of health from the `health` property.\n\nIf health is taken below or is equal to zero then the `kill` method is called."
    },
    "heal": {
     "!doc": "Heal the Game Object. This adds the given amount of health to the `health` property."
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
     "!type": "fn(health: number) -> +PIXI.DisplayObject",
     "!doc": "Brings a 'dead' Game Object back to life, optionally resetting its health value in the process.\n\nA resurrected Game Object has its `alive`, `exists` and `visible` properties all set to true.\n\nIt will dispatch the `onRevived` event. Listen to `events.onRevived` for the signal."
    },
    "kill": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Kills a Game Object. A killed Game Object has its `alive`, `exists` and `visible` properties all set to false.\n\nIt will dispatch the `onKilled` event. You can listen to `events.onKilled` for the signal.\n\nNote that killing a Game Object is a way for you to quickly recycle it in an object pool, \nit doesn't destroy the object or free it up from memory.\n\nIf you don't need this Game Object any more you should call `destroy` instead."
    },
    "loadTexture": {
     "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)",
     "!doc": "Changes the base texture the Game Object is using. The old texture is removed and the new one is referenced or fetched from the Cache.\n\nIf your Game Object is using a frame from a texture atlas and you just wish to change to another frame, then see the `frame` or `frameName` properties instead.\n\nYou should only use `loadTexture` if you want to replace the base texture entirely.\n\nCalling this method causes a WebGL texture update, so use sparingly or in low-intensity portions of your game, or if you know the new texture is already on the GPU."
    },
    "setFrame": {
     "!type": "fn(frame: +Phaser.Frame)",
     "!doc": "Sets the texture frame the Game Object uses for rendering.\n\nThis is primarily an internal method used by `loadTexture`, but is exposed for the use of plugins and custom classes."
    },
    "resizeFrame": {
     "!type": "fn(parent: ?, width: number, height: number)",
     "!doc": "Resizes the Frame dimensions that the Game Object uses for rendering.\n\nYou shouldn't normally need to ever call this, but in the case of special texture types such as Video or BitmapData\nit can be useful to adjust the dimensions directly in this way."
    },
    "resetFrame": {
     "!type": "fn()",
     "!doc": "Resets the texture frame dimensions that the Game Object uses for rendering."
    },
    "frame": {
     "!type": "number"
    },
    "frameName": {
     "!type": "string"
    },
    "overlap": {
     "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> bool",
     "!doc": "Checks to see if the bounds of this Game Object overlaps with the bounds of the given Display Object, \nwhich can be a Sprite, Image, TileSprite or anything that extends those such as Button or provides a `getBounds` method and result.\n\nThis check ignores the `hitArea` property if set and runs a `getBounds` comparison on both objects to determine the result.\n\nTherefore it's relatively expensive to use in large quantities, i.e. with lots of Sprites at a high frequency.\nIt should be fine for low-volume testing where physics isn't required."
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
   "!doc": "A Video object that takes a previously loaded Video from the Phaser Cache and handles playback of it.\n\nAlternatively it takes a getUserMedia feed from an active webcam and streams the contents of that to\nthe Video instead (see `startMediaStream` method)\n\nThe video can then be applied to a Sprite as a texture. If multiple Sprites share the same Video texture and playback\nchanges (i.e. you pause the video, or seek to a new time) then this change will be seen across all Sprites simultaneously.\n\nDue to a bug in IE11 you cannot play a video texture to a Sprite in WebGL. For IE11 force Canvas mode.\n\nIf you need each Sprite to be able to play a video fully independently then you will need one Video object per Sprite.\nPlease understand the obvious performance implications of doing this, and the memory required to hold videos in RAM.\n\nOn some mobile browsers such as iOS Safari, you cannot play a video until the user has explicitly touched the screen.\nThis works in the same way as audio unlocking. Phaser will handle the touch unlocking for you, however unlike with audio\nit's worth noting that every single Video needs to be touch unlocked, not just the first one. You can use the `changeSource`\nmethod to try and work around this limitation, but see the method help for details.\n\nSmall screen devices, especially iPod and iPhone will launch the video in its own native video player, \noutside of the Safari browser. There is no way to avoid this, it's a device imposed limitation.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running game."
    },
    "key": {
     "!type": "string",
     "!doc": "The key of the Video in the Cache, if stored there. Will be `null` if this Video is using the webcam instead."
    },
    "width": {
     "!type": "number",
     "!doc": "The width of the video in pixels."
    },
    "height": {
     "!type": "number",
     "!doc": "The height of the video in pixels."
    },
    "type": {
     "!type": "number",
     "!doc": "The const type of this object."
    },
    "disableTextureUpload": {
     "!type": "bool",
     "!doc": "If true this video will never send its image data to the GPU when its dirty flag is true. This only applies in WebGL."
    },
    "touchLocked": {
     "!type": "bool",
     "!doc": "true if this video is currently locked awaiting a touch event. This happens on some mobile devices, such as iOS."
    },
    "onPlay": {
     "!type": "+Phaser.Signal",
     "!doc": "This signal is dispatched when the Video starts to play. It sends 3 parameters: a reference to the Video object, if the video is set to loop or not and the playback rate."
    },
    "onChangeSource": {
     "!type": "+Phaser.Signal",
     "!doc": "This signal is dispatched if the Video source is changed. It sends 3 parameters: a reference to the Video object and the new width and height of the new video source."
    },
    "onComplete": {
     "!type": "+Phaser.Signal",
     "!doc": "This signal is dispatched when the Video completes playback, i.e. enters an 'ended' state. Videos set to loop will never dispatch this signal."
    },
    "onAccess": {
     "!type": "+Phaser.Signal",
     "!doc": "This signal is dispatched if the user allows access to their webcam."
    },
    "onError": {
     "!type": "+Phaser.Signal",
     "!doc": "This signal is dispatched if an error occurs either getting permission to use the webcam (for a Video Stream) or when trying to play back a video file."
    },
    "onTimeout": {
     "!type": "+Phaser.Signal"
    },
    "timeout": {
     "!type": "number",
     "!doc": "The amount of ms allowed to elapsed before the Video.onTimeout signal is dispatched while waiting for webcam access."
    },
    "video": {
     "!type": "+HTMLVideoElement",
     "!doc": "The HTML Video Element that is added to the document."
    },
    "videoStream": {
     "!type": "+MediaStream",
     "!doc": "The Video Stream data. Only set if this Video is streaming from the webcam via `startMediaStream`."
    },
    "isStreaming": {
     "!type": "bool",
     "!doc": "Is there a streaming video source? I.e. from a webcam."
    },
    "retryLimit": {
     "!type": "number"
    },
    "retry": {
     "!type": "number",
     "!doc": "The current retry attempt."
    },
    "retryInterval": {
     "!type": "number",
     "!doc": "The number of ms between each retry at monitoring the status of a downloading video."
    },
    "texture": {
     "!type": "+PIXI.Texture",
     "!doc": "The PIXI.Texture."
    },
    "textureFrame": {
     "!type": "+Phaser.Frame",
     "!doc": "The Frame this video uses for rendering."
    },
    "snapshot": {
     "!type": "+Phaser.BitmapData"
    },
    "connectToMediaStream": {
     "!type": "fn(video: +HTMLVideoElement, stream: +MediaStream) -> +Phaser.Video",
     "!doc": "Connects to an external media stream for the webcam, rather than using a local one."
    },
    "startMediaStream": {
     "!type": "fn(captureAudio: bool, width: number, height: number) -> +Phaser.Video",
     "!doc": "Instead of playing a video file this method allows you to stream video data from an attached webcam.\n\nAs soon as this method is called the user will be prompted by their browser to \"Allow\" access to the webcam.\nIf they allow it the webcam feed is directed to this Video. Call `Video.play` to start the stream.\n\nIf they block the webcam the onError signal will be dispatched containing the NavigatorUserMediaError\nor MediaStreamError event.\n\nYou can optionally set a width and height for the stream. If set the input will be cropped to these dimensions.\nIf not given then as soon as the stream has enough data the video dimensions will be changed to match the webcam device.\nYou can listen for this with the onChangeSource signal."
    },
    "createVideoFromBlob": {
     "!type": "fn(blob: +Blob) -> +Phaser.Video",
     "!doc": "Creates a new Video element from the given Blob. The Blob must contain the video data in the correct encoded format.\nThis method is typically called by the Phaser.Loader and Phaser.Cache for you, but is exposed publicly for convenience."
    },
    "createVideoFromURL": {
     "!type": "fn(url: string, autoplay: bool) -> +Phaser.Video",
     "!doc": "Creates a new Video element from the given URL."
    },
    "updateTexture": {
     "!type": "fn(event: ?, width: number, height: number)",
     "!doc": "Called automatically if the video source changes and updates the internal texture dimensions.\nThen dispatches the onChangeSource signal."
    },
    "complete": {
     "!type": "fn()",
     "!doc": "Called when the video completes playback (reaches and ended state).\nDispatches the Video.onComplete signal."
    },
    "play": {
     "!type": "fn(loop: bool, playbackRate: number) -> +Phaser.Video",
     "!doc": "Starts this video playing if it's not already doing so."
    },
    "stop": {
     "!type": "fn() -> +Phaser.Video",
     "!doc": "Stops the video playing.\n\nThis removes all locally set signals.\n\nIf you only wish to pause playback of the video, to resume at a later time, use `Video.paused = true` instead.\nIf the video hasn't finished downloading calling `Video.stop` will not abort the download. To do that you need to \ncall `Video.destroy` instead.\n\nIf you are using a video stream from a webcam then calling Stop will disconnect the MediaStream session and disable the webcam."
    },
    "add": {
     "!type": "fn(object: +Phaser.Sprite|[?]|+Phaser.Image|[?]) -> +Phaser.Video",
     "!doc": "Updates the given Display Objects so they use this Video as their texture.\nThis will replace any texture they will currently have set."
    },
    "addToWorld": {
     "!type": "fn(x: number, y: number, anchorX: number, anchorY: number, scaleX: number, scaleY: number) -> +Phaser.Image",
     "!doc": "Creates a new Phaser.Image object, assigns this Video to be its texture, adds it to the world then returns it."
    },
    "render": {
     "!type": "fn()",
     "!doc": "If the game is running in WebGL this will push the texture up to the GPU if it's dirty.\nThis is called automatically if the Video is being used by a Sprite, otherwise you need to remember to call it in your render function.\nIf you wish to suppress this functionality set Video.disableTextureUpload to `true`."
    },
    "changeSource": {
     "!type": "fn(src: string, autoplay: bool) -> +Phaser.Video",
     "!doc": "On some mobile browsers you cannot play a video until the user has explicitly touched the video to allow it.\nPhaser handles this via the `setTouchLock` method. However if you have 3 different videos, maybe an \"Intro\", \"Start\" and \"Game Over\"\nsplit into three different Video objects, then you will need the user to touch-unlock every single one of them.\n\nYou can avoid this by using just one Video object and simply changing the video source. Once a Video element is unlocked it remains\nunlocked, even if the source changes. So you can use this to your benefit to avoid forcing the user to 'touch' the video yet again.\n\nAs you'd expect there are limitations. So far we've found that the videos need to be in the same encoding format and bitrate.\nThis method will automatically handle a change in video dimensions, but if you try swapping to a different bitrate we've found it\ncannot render the new video on iOS (desktop browsers cope better).\n\nWhen the video source is changed the video file is requested over the network. Listen for the `onChangeSource` signal to know\nwhen the new video has downloaded enough content to be able to be played. Previous settings such as the volume and loop state\nare adopted automatically by the new video."
    },
    "setTouchLock": {
     "!type": "fn()",
     "!doc": "Sets the Input Manager touch callback to be Video.unlock.\nRequired for mobile video unlocking. Mostly just used internally."
    },
    "unlock": {
     "!type": "fn()",
     "!doc": "Enables the video on mobile devices, usually after the first touch.\nIf the SoundManager hasn't been unlocked then this will automatically unlock that as well.\nOnly one video can be pending unlock at any one time."
    },
    "grab": {
     "!type": "fn(clear: bool, alpha: number, blendMode: string) -> +Phaser.BitmapData",
     "!doc": "Grabs the current frame from the Video or Video Stream and renders it to the Video.snapshot BitmapData.\n\nYou can optionally set if the BitmapData should be cleared or not, the alpha and the blend mode of the draw.\n\nIf you need more advanced control over the grabbing them call `Video.snapshot.copy` directly with the same parameters as BitmapData.copy."
    },
    "removeVideoElement": {
     "!type": "fn()",
     "!doc": "Removes the Video element from the DOM by calling parentNode.removeChild on itself.\nAlso removes the autoplay and src attributes and nulls the reference."
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "Destroys the Video object. This calls `Video.stop` and then `Video.removeVideoElement`.\nIf any Sprites are using this Video as their texture it is up to you to manage those."
    },
    "mute": {
     "!type": "bool",
     "!doc": "Gets or sets the muted state of the Video."
    },
    "paused": {
     "!type": "bool"
    },
    "volume": {
     "!type": "number",
     "!doc": "Gets or sets the volume of the Video, a value between 0 and 1. The value given is clamped to the range 0 to 1."
    },
    "playbackRate": {
     "!type": "number",
     "!doc": "Gets or sets the playback rate of the Video. This is the speed at which the video is playing."
    },
    "loop": {
     "!type": "bool"
    },
    "playing": {
     "!type": "bool",
     "!doc": "True if the video is currently playing (and not paused or ended), otherwise false."
    }
   }
  },
  "Circle": {
   "!type": "fn(x: number, y: number, diameter: number)",
   "!doc": "Creates a new Circle object with the center coordinate specified by the x and y parameters and the diameter specified by the diameter parameter.\nIf you call this function without parameters, a circle with x, y, diameter and radius properties set to 0 is created.",
   "prototype": {
    "x": {
     "!type": "number",
     "!doc": "The x coordinate of the center of the circle."
    },
    "y": {
     "!type": "number",
     "!doc": "The y coordinate of the center of the circle."
    },
    "type": {
     "!type": "number",
     "!doc": "The const type of this object."
    },
    "circumference": {
     "!type": "fn() -> number",
     "!doc": "The circumference of the circle."
    },
    "random": {
     "!type": "fn(out: +Phaser.Point|?) -> +Phaser.Point",
     "!doc": "Returns a uniformly distributed random point from anywhere within this Circle."
    },
    "getBounds": {
     "!type": "fn() -> +Phaser.Rectangle",
     "!doc": "Returns the framing rectangle of the circle as a Phaser.Rectangle object."
    },
    "setTo": {
     "!type": "fn(x: number, y: number, diameter: number) -> +Circle",
     "!doc": "Sets the members of Circle to the specified values."
    },
    "copyFrom": {
     "!type": "fn(source: +any) -> +Circle",
     "!doc": "Copies the x, y and diameter properties from any given object to this Circle."
    },
    "copyTo": {
     "!type": "fn(dest: +any) -> ?",
     "!doc": "Copies the x, y and diameter properties from this Circle to any given object."
    },
    "distance": {
     "!type": "fn(dest: ?, round: bool) -> number",
     "!doc": "Returns the distance from the center of the Circle object to the given object\n(can be Circle, Point or anything with x/y properties)"
    },
    "clone": {
     "!type": "fn(output: +Phaser.Circle) -> +Phaser.Circle",
     "!doc": "Returns a new Circle object with the same values for the x, y, width, and height properties as this Circle object."
    },
    "contains": {
     "!type": "fn(x: number, y: number) -> bool",
     "!doc": "Return true if the given x/y coordinates are within this Circle object."
    },
    "circumferencePoint": {
     "!type": "fn(angle: number, asDegrees: bool, out: +Phaser.Point) -> +Phaser.Point",
     "!doc": "Returns a Point object containing the coordinates of a point on the circumference of the Circle based on the given angle."
    },
    "offset": {
     "!type": "fn(dx: number, dy: number) -> +Circle",
     "!doc": "Adjusts the location of the Circle object, as determined by its center coordinate, by the specified amounts."
    },
    "offsetPoint": {
     "!type": "fn(point: +Phaser.Point) -> +Circle",
     "!doc": "Adjusts the location of the Circle object using a Point object as a parameter. This method is similar to the Circle.offset() method, except that it takes a Point object as a parameter."
    },
    "diameter": {
     "!type": "number",
     "!doc": "Gets or sets the diameter of the circle."
    },
    "radius": {
     "!type": "number",
     "!doc": "Gets or sets the radius of the circle."
    },
    "left": {
     "!doc": "The x coordinate of the leftmost point of the circle. Changing the left property of a Circle object has no effect on the x and y properties. However it does affect the diameter, whereas changing the x value does not affect the diameter property."
    },
    "right": {
     "!type": "number",
     "!doc": "Gets or sets the value of the rightmost point of the circle."
    },
    "top": {
     "!type": "number",
     "!doc": "Gets or sets the top of the circle."
    },
    "bottom": {
     "!type": "number",
     "!doc": "Gets or sets the bottom of the circle."
    },
    "area": {
     "!type": "number",
     "!doc": "The area of this circle."
    },
    "empty": {
     "!type": "bool",
     "!doc": "Gets or sets the empty state of the circle."
    }
   },
   "contains": {
    "!type": "fn(a: +Phaser.Circle, x: number, y: number) -> bool",
    "!doc": "Return true if the given x/y coordinates are within the Circle object."
   },
   "equals": {
    "!type": "fn(a: +Phaser.Circle, b: +Phaser.Circle) -> bool",
    "!doc": "Determines whether the two Circle objects match. This method compares the x, y and diameter properties."
   },
   "intersects": {
    "!type": "fn(a: +Phaser.Circle, b: +Phaser.Circle) -> bool",
    "!doc": "Determines whether the two Circle objects intersect.\nThis method checks the radius distances between the two Circle objects to see if they intersect."
   },
   "circumferencePoint": {
    "!type": "fn(a: +Phaser.Circle, angle: number, asDegrees: bool, out: +Phaser.Point) -> +Phaser.Point",
    "!doc": "Returns a Point object containing the coordinates of a point on the circumference of the Circle based on the given angle."
   },
   "intersectsRectangle": {
    "!type": "fn(c: +Phaser.Circle, r: +Phaser.Rectangle) -> bool",
    "!doc": "Checks if the given Circle and Rectangle objects intersect."
   }
  },
  "Ellipse": {
   "!type": "fn(x: number, y: number, width: number, height: number)",
   "!doc": "Creates a Ellipse object. A curve on a plane surrounding two focal points.",
   "prototype": {
    "x": {
     "!type": "number",
     "!doc": "The X coordinate of the upper-left corner of the framing rectangle of this ellipse."
    },
    "y": {
     "!type": "number",
     "!doc": "The Y coordinate of the upper-left corner of the framing rectangle of this ellipse."
    },
    "width": {
     "!type": "number",
     "!doc": "The overall width of this ellipse."
    },
    "height": {
     "!type": "number",
     "!doc": "The overall height of this ellipse."
    },
    "type": {
     "!type": "number",
     "!doc": "The const type of this object."
    },
    "setTo": {
     "!type": "fn(x: number, y: number, width: number, height: number) -> +Phaser.Ellipse",
     "!doc": "Sets the members of the Ellipse to the specified values."
    },
    "getBounds": {
     "!type": "fn() -> +Phaser.Rectangle",
     "!doc": "Returns the framing rectangle of the ellipse as a Phaser.Rectangle object."
    },
    "copyFrom": {
     "!type": "fn(source: +any) -> +Phaser.Ellipse",
     "!doc": "Copies the x, y, width and height properties from any given object to this Ellipse."
    },
    "copyTo": {
     "!type": "fn(dest: +any) -> ?",
     "!doc": "Copies the x, y, width and height properties from this Ellipse to any given object."
    },
    "clone": {
     "!type": "fn(output: +Phaser.Ellipse) -> +Phaser.Ellipse",
     "!doc": "Returns a new Ellipse object with the same values for the x, y, width, and height properties as this Ellipse object."
    },
    "contains": {
     "!type": "fn(x: number, y: number) -> bool",
     "!doc": "Return true if the given x/y coordinates are within this Ellipse object."
    },
    "random": {
     "!type": "fn(out: +Phaser.Point|?) -> +Phaser.Point",
     "!doc": "Returns a uniformly distributed random point from anywhere within this Ellipse."
    },
    "left": {
     "!doc": "The left coordinate of the Ellipse. The same as the X coordinate."
    },
    "right": {
     "!type": "number",
     "!doc": "Gets or sets the value of the rightmost point of the ellipse."
    },
    "top": {
     "!type": "number",
     "!doc": "Gets or sets the top of the ellipse."
    },
    "bottom": {
     "!type": "number",
     "!doc": "Gets or sets the bottom of the ellipse."
    },
    "empty": {
     "!type": "bool",
     "!doc": "Gets or sets the empty state of the ellipse."
    }
   },
   "contains": {
    "!type": "fn(a: +Phaser.Ellipse, x: number, y: number) -> bool",
    "!doc": "Return true if the given x/y coordinates are within the Ellipse object."
   }
  },
  "Line": {
   "!type": "fn(x1: number, y1: number, x2: number, y2: number)",
   "!doc": "Creates a new Line object with a start and an end point.",
   "prototype": {
    "start": {
     "!type": "+Phaser.Point",
     "!doc": "The start point of the line."
    },
    "end": {
     "!type": "+Phaser.Point",
     "!doc": "The end point of the line."
    },
    "type": {
     "!type": "number",
     "!doc": "The const type of this object."
    },
    "setTo": {
     "!type": "fn(x1: number, y1: number, x2: number, y2: number) -> +Phaser.Line",
     "!doc": "Sets the components of the Line to the specified values."
    },
    "fromSprite": {
     "!type": "fn(startSprite: +Phaser.Sprite, endSprite: +Phaser.Sprite, useCenter: bool) -> +Phaser.Line",
     "!doc": "Sets the line to match the x/y coordinates of the two given sprites.\nCan optionally be calculated from their center coordinates."
    },
    "fromAngle": {
     "!type": "fn(x: number, y: number, angle: number, length: number) -> +Phaser.Line",
     "!doc": "Sets this line to start at the given `x` and `y` coordinates and for the segment to extend at `angle` for the given `length`."
    },
    "rotate": {
     "!type": "fn(angle: number, asDegrees: bool) -> +Phaser.Line",
     "!doc": "Rotates the line by the amount specified in `angle`.\n\nRotation takes place from the center of the line.\nIf you wish to rotate around a different point see Line.rotateAround.\n\nIf you wish to rotate the ends of the Line then see Line.start.rotate or Line.end.rotate."
    },
    "rotateAround": {
     "!type": "fn(angle: number, asDegrees: bool) -> +Phaser.Line",
     "!doc": "Rotates the line by the amount specified in `angle`.\n\nRotation takes place around the coordinates given."
    },
    "intersects": {
     "!type": "fn(line: +Phaser.Line, asSegment: bool, result: +Phaser.Point) -> +Phaser.Point",
     "!doc": "Checks for intersection between this line and another Line.\nIf asSegment is true it will check for segment intersection. If asSegment is false it will check for line intersection.\nReturns the intersection segment of AB and EF as a Point, or null if there is no intersection."
    },
    "reflect": {
     "!type": "fn(line: +Phaser.Line) -> number",
     "!doc": "Returns the reflected angle between two lines.\nThis is the outgoing angle based on the angle of this line and the normalAngle of the given line."
    },
    "midPoint": {
     "!type": "fn(out: +Phaser.Point) -> +Phaser.Point",
     "!doc": "Returns a Point object where the x and y values correspond to the center (or midpoint) of the Line segment."
    },
    "centerOn": {
     "!type": "fn(x: number, y: number) -> +Phaser.Line",
     "!doc": "Centers this Line on the given coordinates.\n\nThe line is centered by positioning the start and end points so that the lines midpoint matches\nthe coordinates given."
    },
    "pointOnLine": {
     "!type": "fn(x: number, y: number) -> bool",
     "!doc": "Tests if the given coordinates fall on this line. See pointOnSegment to test against just the line segment."
    },
    "pointOnSegment": {
     "!type": "fn(x: number, y: number) -> bool",
     "!doc": "Tests if the given coordinates fall on this line and within the segment. See pointOnLine to test against just the line."
    },
    "random": {
     "!type": "fn(out: +Phaser.Point|?) -> +Phaser.Point",
     "!doc": "Picks a random point from anywhere on the Line segment and returns it."
    },
    "coordinatesOnLine": {
     "!type": "fn(stepRate: number, results: +array) -> +array",
     "!doc": "Using Bresenham's line algorithm this will return an array of all coordinates on this line.\nThe start and end points are rounded before this runs as the algorithm works on integers."
    },
    "clone": {
     "!type": "fn(output: +Phaser.Line) -> +Phaser.Line",
     "!doc": "Returns a new Line object with the same values for the start and end properties as this Line object."
    },
    "length": {
     "!type": "number",
     "!doc": "Gets the length of the line segment."
    },
    "angle": {
     "!type": "number",
     "!doc": "Gets the angle of the line in radians."
    },
    "slope": {
     "!type": "number",
     "!doc": "Gets the slope of the line (y/x)."
    },
    "perpSlope": {
     "!type": "number",
     "!doc": "Gets the perpendicular slope of the line (x/y)."
    },
    "x": {
     "!type": "number",
     "!doc": "Gets the x coordinate of the top left of the bounds around this line."
    },
    "y": {
     "!type": "number",
     "!doc": "Gets the y coordinate of the top left of the bounds around this line."
    },
    "left": {
     "!type": "number",
     "!doc": "Gets the left-most point of this line."
    },
    "right": {
     "!type": "number",
     "!doc": "Gets the right-most point of this line."
    },
    "top": {
     "!type": "number",
     "!doc": "Gets the top-most point of this line."
    },
    "bottom": {
     "!type": "number",
     "!doc": "Gets the bottom-most point of this line."
    },
    "width": {
     "!type": "number",
     "!doc": "Gets the width of this bounds of this line."
    },
    "height": {
     "!type": "number",
     "!doc": "Gets the height of this bounds of this line."
    },
    "normalX": {
     "!type": "number",
     "!doc": "Gets the x component of the left-hand normal of this line."
    },
    "normalY": {
     "!type": "number",
     "!doc": "Gets the y component of the left-hand normal of this line."
    },
    "normalAngle": {
     "!type": "number",
     "!doc": "Gets the angle in radians of the normal of this line (line.angle - 90 degrees.)"
    }
   },
   "intersectsPoints": {
    "!type": "fn(a: +Phaser.Point, b: +Phaser.Point, e: +Phaser.Point, f: +Phaser.Point, asSegment: bool, result: +Phaser.Point|?) -> +Phaser.Point",
    "!doc": "Checks for intersection between two lines as defined by the given start and end points.\nIf asSegment is true it will check for line segment intersection. If asSegment is false it will check for line intersection.\nReturns the intersection segment of AB and EF as a Point, or null if there is no intersection.\nAdapted from code by Keith Hair"
   },
   "intersects": {
    "!type": "fn(a: +Phaser.Line, b: +Phaser.Line, asSegment: bool, result: +Phaser.Point) -> +Phaser.Point",
    "!doc": "Checks for intersection between two lines.\nIf asSegment is true it will check for segment intersection.\nIf asSegment is false it will check for line intersection.\nReturns the intersection segment of AB and EF as a Point, or null if there is no intersection.\nAdapted from code by Keith Hair"
   },
   "reflect": {
    "!type": "fn(a: +Phaser.Line, b: +Phaser.Line) -> number",
    "!doc": "Returns the reflected angle between two lines.\nThis is the outgoing angle based on the angle of Line 1 and the normalAngle of Line 2."
   }
  },
  "Matrix": {
   "!type": "fn(a: number, b: number, c: number, d: number, tx: number, ty: number)",
   "!doc": "The Matrix is a 3x3 matrix mostly used for display transforms within the renderer.\n\nIt is represented like so:\n\n| a | b | tx |\n| c | d | ty |\n| 0 | 0 | 1 |",
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
     "!type": "number",
     "!doc": "The const type of this object."
    },
    "fromArray": {
     "!type": "fn(array: [?]) -> +Phaser.Matrix",
     "!doc": "Sets the values of this Matrix to the values in the given array.\n\nThe Array elements should be set as follows:\n\na = array[0]\nb = array[1]\nc = array[3]\nd = array[4]\ntx = array[2]\nty = array[5]"
    },
    "setTo": {
     "!type": "fn(a: number, b: number, c: number, d: number, tx: number, ty: number) -> +Phaser.Matrix",
     "!doc": "Sets the values of this Matrix to the given values."
    },
    "clone": {
     "!type": "fn(output: +Phaser.Matrix) -> +Phaser.Matrix",
     "!doc": "Creates a new Matrix object based on the values of this Matrix.\nIf you provide the output parameter the values of this Matrix will be copied over to it.\nIf the output parameter is blank a new Matrix object will be created."
    },
    "copyTo": {
     "!type": "fn(matrix: +Phaser.Matrix) -> +Phaser.Matrix",
     "!doc": "Copies the properties from this Matrix to the given Matrix."
    },
    "copyFrom": {
     "!type": "fn(matrix: +Phaser.Matrix) -> +Phaser.Matrix",
     "!doc": "Copies the properties from the given Matrix into this Matrix."
    },
    "toArray": {
     "!type": "fn(transpose: bool, array: +PIXI.Float32Array) -> +PIXI.Float32Array",
     "!doc": "Creates a Float32 Array with values populated from this Matrix object."
    },
    "apply": {
     "!type": "fn(pos: +Phaser.Point, newPos: +Phaser.Point) -> +Phaser.Point",
     "!doc": "Get a new position with the current transformation applied.\n\nCan be used to go from a childs coordinate space to the world coordinate space (e.g. rendering)"
    },
    "applyInverse": {
     "!type": "fn(pos: +Phaser.Point, newPos: +Phaser.Point) -> +Phaser.Point",
     "!doc": "Get a new position with the inverse of the current transformation applied.\n\nCan be used to go from the world coordinate space to a childs coordinate space. (e.g. input)"
    },
    "translate": {
     "!type": "fn(x: number, y: number) -> +Phaser.Matrix",
     "!doc": "Translates the matrix on the x and y.\nThis is the same as Matrix.tx += x."
    },
    "scale": {
     "!type": "fn(x: number, y: number) -> +Phaser.Matrix",
     "!doc": "Applies a scale transformation to this matrix."
    },
    "rotate": {
     "!type": "fn(angle: number) -> +Phaser.Matrix",
     "!doc": "Applies a rotation transformation to this matrix."
    },
    "append": {
     "!type": "fn(matrix: +Phaser.Matrix) -> +Phaser.Matrix",
     "!doc": "Appends the given Matrix to this Matrix."
    },
    "identity": {
     "!type": "fn() -> +Phaser.Matrix",
     "!doc": "Resets this Matrix to an identity (default) matrix."
    }
   }
  },
  "Point": {
   "!type": "fn(x: number, y: number)",
   "!doc": "A Point object represents a location in a two-dimensional coordinate system, where x represents the horizontal axis and y represents the vertical axis.\nThe following code creates a point at (0,0):\n`var myPoint = new Phaser.Point();`\nYou can also use them as 2D Vectors and you'll find different vector related methods in this class.",
   "prototype": {
    "x": {
     "!type": "number",
     "!doc": "The x value of the point."
    },
    "y": {
     "!type": "number",
     "!doc": "The y value of the point."
    },
    "type": {
     "!type": "number",
     "!doc": "The const type of this object."
    },
    "copyFrom": {
     "!type": "fn(source: +any) -> +Phaser.Point",
     "!doc": "Copies the x and y properties from any given object to this Point."
    },
    "invert": {
     "!type": "fn() -> +Phaser.Point",
     "!doc": "Inverts the x and y values of this Point"
    },
    "setTo": {
     "!type": "fn(x: number, y: number) -> +Phaser.Point",
     "!doc": "Sets the `x` and `y` values of this Point object to the given values.\nIf you omit the `y` value then the `x` value will be applied to both, for example:\n`Point.setTo(2)` is the same as `Point.setTo(2, 2)`"
    },
    "set": {
     "!type": "fn(x: number, y: number) -> +Phaser.Point",
     "!doc": "Sets the `x` and `y` values of this Point object to the given values.\nIf you omit the `y` value then the `x` value will be applied to both, for example:\n`Point.set(2)` is the same as `Point.set(2, 2)`"
    },
    "add": {
     "!type": "fn(x: number, y: number) -> +Phaser.Point",
     "!doc": "Adds the given x and y values to this Point."
    },
    "subtract": {
     "!type": "fn(x: number, y: number) -> +Phaser.Point",
     "!doc": "Subtracts the given x and y values from this Point."
    },
    "multiply": {
     "!type": "fn(x: number, y: number) -> +Phaser.Point",
     "!doc": "Multiplies Point.x and Point.y by the given x and y values. Sometimes known as `Scale`."
    },
    "divide": {
     "!type": "fn(x: number, y: number) -> +Phaser.Point",
     "!doc": "Divides Point.x and Point.y by the given x and y values."
    },
    "clampX": {
     "!type": "fn(min: number, max: number) -> +Phaser.Point",
     "!doc": "Clamps the x value of this Point to be between the given min and max."
    },
    "clampY": {
     "!type": "fn(min: number, max: number) -> +Phaser.Point",
     "!doc": "Clamps the y value of this Point to be between the given min and max"
    },
    "clamp": {
     "!type": "fn(min: number, max: number) -> +Phaser.Point",
     "!doc": "Clamps this Point object values to be between the given min and max."
    },
    "clone": {
     "!type": "fn(output: +Phaser.Point) -> +Phaser.Point",
     "!doc": "Creates a copy of the given Point."
    },
    "copyTo": {
     "!type": "fn(dest: +any) -> ?",
     "!doc": "Copies the x and y properties from this Point to any given object."
    },
    "distance": {
     "!type": "fn(dest: ?, round: bool) -> number",
     "!doc": "Returns the distance of this Point object to the given object (can be a Circle, Point or anything with x/y properties)"
    },
    "equals": {
     "!type": "fn(a: +Phaser.Point|+any) -> bool",
     "!doc": "Determines whether the given objects x/y values are equal to this Point object."
    },
    "angle": {
     "!type": "fn(a: +Phaser.Point|+any, asDegrees: bool) -> number",
     "!doc": "Returns the angle between this Point object and another object with public x and y properties."
    },
    "rotate": {
     "!type": "fn(x: number, y: number, angle: number, asDegrees: bool, distance: number) -> +Phaser.Point",
     "!doc": "Rotates this Point around the x/y coordinates given to the desired angle."
    },
    "getMagnitude": {
     "!type": "fn() -> number",
     "!doc": "Calculates the length of the Point object."
    },
    "getMagnitudeSq": {
     "!type": "fn() -> number",
     "!doc": "Calculates the length squared of the Point object."
    },
    "setMagnitude": {
     "!type": "fn(magnitude: number) -> +Phaser.Point",
     "!doc": "Alters the length of the Point without changing the direction."
    },
    "normalize": {
     "!type": "fn() -> +Phaser.Point",
     "!doc": "Alters the Point object so that its length is 1, but it retains the same direction."
    },
    "isZero": {
     "!type": "fn() -> bool",
     "!doc": "Determine if this point is at 0,0."
    },
    "dot": {
     "!type": "fn(a: +Phaser.Point) -> number",
     "!doc": "The dot product of this and another Point object."
    },
    "cross": {
     "!type": "fn(a: +Phaser.Point) -> number",
     "!doc": "The cross product of this and another Point object."
    },
    "perp": {
     "!type": "fn() -> +Phaser.Point",
     "!doc": "Make this Point perpendicular (90 degrees rotation)"
    },
    "rperp": {
     "!type": "fn() -> +Phaser.Point",
     "!doc": "Make this Point perpendicular (-90 degrees rotation)"
    },
    "normalRightHand": {
     "!type": "fn() -> +Phaser.Point",
     "!doc": "Right-hand normalize (make unit length) this Point."
    },
    "floor": {
     "!type": "fn() -> +Phaser.Point",
     "!doc": "Math.floor() both the x and y properties of this Point."
    },
    "ceil": {
     "!type": "fn() -> +Phaser.Point",
     "!doc": "Math.ceil() both the x and y properties of this Point."
    }
   },
   "add": {
    "!type": "fn(a: +Phaser.Point, b: +Phaser.Point, out: +Phaser.Point) -> +Phaser.Point",
    "!doc": "Adds the coordinates of two points together to create a new point."
   },
   "subtract": {
    "!type": "fn(a: +Phaser.Point, b: +Phaser.Point, out: +Phaser.Point) -> +Phaser.Point",
    "!doc": "Subtracts the coordinates of two points to create a new point."
   },
   "multiply": {
    "!type": "fn(a: +Phaser.Point, b: +Phaser.Point, out: +Phaser.Point) -> +Phaser.Point",
    "!doc": "Multiplies the coordinates of two points to create a new point."
   },
   "divide": {
    "!type": "fn(a: +Phaser.Point, b: +Phaser.Point, out: +Phaser.Point) -> +Phaser.Point",
    "!doc": "Divides the coordinates of two points to create a new point."
   },
   "equals": {
    "!type": "fn(a: +Phaser.Point, b: +Phaser.Point) -> bool",
    "!doc": "Determines whether the two given Point objects are equal. They are considered equal if they have the same x and y values."
   },
   "angle": {
    "!type": "fn(a: +Phaser.Point, b: +Phaser.Point) -> number",
    "!doc": "Returns the angle between two Point objects."
   },
   "negative": {
    "!type": "fn(a: +Phaser.Point, out: +Phaser.Point) -> +Phaser.Point",
    "!doc": "Creates a negative Point."
   },
   "multiplyAdd": {
    "!type": "fn(a: +Phaser.Point, b: +Phaser.Point, s: number, out: +Phaser.Point) -> +Phaser.Point",
    "!doc": "Adds two 2D Points together and multiplies the result by the given scalar."
   },
   "interpolate": {
    "!type": "fn(a: +Phaser.Point, b: +Phaser.Point, f: number, out: +Phaser.Point) -> +Phaser.Point",
    "!doc": "Interpolates the two given Points, based on the `f` value (between 0 and 1) and returns a new Point."
   },
   "perp": {
    "!type": "fn(a: +Phaser.Point, out: +Phaser.Point) -> +Phaser.Point",
    "!doc": "Return a perpendicular vector (90 degrees rotation)"
   },
   "rperp": {
    "!type": "fn(a: +Phaser.Point, out: +Phaser.Point) -> +Phaser.Point",
    "!doc": "Return a perpendicular vector (-90 degrees rotation)"
   },
   "distance": {
    "!type": "fn(a: ?, b: ?, round: bool) -> number",
    "!doc": "Returns the euclidian distance of this Point object to the given object (can be a Circle, Point or anything with x/y properties)."
   },
   "project": {
    "!type": "fn(a: +Phaser.Point, b: +Phaser.Point, out: +Phaser.Point) -> +Phaser.Point",
    "!doc": "Project two Points onto another Point."
   },
   "projectUnit": {
    "!type": "fn(a: +Phaser.Point, b: +Phaser.Point, out: +Phaser.Point) -> +Phaser.Point",
    "!doc": "Project two Points onto a Point of unit length."
   },
   "normalRightHand": {
    "!type": "fn(a: +Phaser.Point, out: +Phaser.Point) -> +Phaser.Point",
    "!doc": "Right-hand normalize (make unit length) a Point."
   },
   "normalize": {
    "!type": "fn(a: +Phaser.Point, out: +Phaser.Point) -> +Phaser.Point",
    "!doc": "Normalize (make unit length) a Point."
   },
   "rotate": {
    "!type": "fn(a: +Phaser.Point, x: number, y: number, angle: number, asDegrees: bool, distance: number) -> +Phaser.Point",
    "!doc": "Rotates a Point object, or any object with exposed x/y properties, around the given coordinates by\nthe angle specified. If the angle between the point and coordinates was 45 deg and the angle argument\nis 45 deg then the resulting angle will be 90 deg, as the angle argument is added to the current angle.\n\nThe distance allows you to specify a distance constraint for the rotation between the point and the \ncoordinates. If none is given the distance between the two is calculated and used."
   },
   "centroid": {
    "!type": "fn(points: [?], out: +Phaser.Point) -> +Phaser.Point",
    "!doc": "Calculates centroid (or midpoint) from an array of points. If only one point is provided, that point is returned."
   },
   "parse": {
    "!type": "fn(obj: ?, xProp: string, yProp: string) -> +Phaser.Point",
    "!doc": "Parses an object for x and/or y properties and returns a new Phaser.Point with matching values.\nIf the object doesn't contain those properties a Point with x/y of zero will be returned."
   }
  },
  "Polygon": {
   "!type": "fn(points: [?]|[?]|+Phaser.Point|number)",
   "!doc": "Creates a new Polygon.\n\nThe points can be set from a variety of formats:\n\n- An array of Point objects: `[new Phaser.Point(x1, y1), ...]`\n- An array of objects with public x/y properties: `[obj1, obj2, ...]`\n- An array of paired numbers that represent point coordinates: `[x1,y1, x2,y2, ...]`\n- As separate Point arguments: `setTo(new Phaser.Point(x1, y1), ...)`\n- As separate objects with public x/y properties arguments: `setTo(obj1, obj2, ...)`\n- As separate arguments representing point coordinates: `setTo(x1,y1, x2,y2, ...)`",
   "prototype": {
    "area": {
     "!type": "number",
     "!doc": "The area of this Polygon."
    },
    "closed": {
     "!type": "bool",
     "!doc": "Is the Polygon closed or not?"
    },
    "type": {
     "!type": "number",
     "!doc": "The base object type."
    },
    "toNumberArray": {
     "!type": "fn(output: +array) -> +array",
     "!doc": "Export the points as an array of flat numbers, following the sequence [ x,y, x,y, x,y ]"
    },
    "flatten": {
     "!type": "fn() -> +Phaser.Polygon",
     "!doc": "Flattens this Polygon so the points are a sequence of numbers. Any Point objects found are removed and replaced with two numbers."
    },
    "clone": {
     "!type": "fn(output: +Phaser.Polygon) -> +Phaser.Polygon",
     "!doc": "Creates a copy of the given Polygon.\nThis is a deep clone, the resulting copy contains new Phaser.Point objects"
    },
    "contains": {
     "!type": "fn(x: number, y: number) -> bool",
     "!doc": "Checks whether the x and y coordinates are contained within this polygon."
    },
    "setTo": {
     "!type": "fn(points: [?]|[?]|+Phaser.Point|number) -> +Phaser.Polygon",
     "!doc": "Sets this Polygon to the given points.\n\nThe points can be set from a variety of formats:\n\n- An array of Point objects: `[new Phaser.Point(x1, y1), ...]`\n- An array of objects with public x/y properties: `[obj1, obj2, ...]`\n- An array of paired numbers that represent point coordinates: `[x1,y1, x2,y2, ...]`\n- As separate Point arguments: `setTo(new Phaser.Point(x1, y1), ...)`\n- As separate objects with public x/y properties arguments: `setTo(obj1, obj2, ...)`\n- As separate arguments representing point coordinates: `setTo(x1,y1, x2,y2, ...)`\n\n`setTo` may also be called without any arguments to remove all points."
    },
    "points": {
     "!type": "[?]",
     "!doc": "The array of vertex points."
    }
   }
  },
  "Rectangle": {
   "!type": "fn(x: number, y: number, width: number, height: number)",
   "!doc": "Creates a new Rectangle object with the top-left corner specified by the x and y parameters and with the specified width and height parameters.\nIf you call this function without parameters, a Rectangle with x, y, width, and height properties set to 0 is created.",
   "prototype": {
    "x": {
     "!type": "number",
     "!doc": "The x coordinate of the top-left corner of the Rectangle."
    },
    "y": {
     "!type": "number",
     "!doc": "The y coordinate of the top-left corner of the Rectangle."
    },
    "width": {
     "!type": "number",
     "!doc": "The width of the Rectangle. This value should never be set to a negative."
    },
    "height": {
     "!type": "number",
     "!doc": "The height of the Rectangle. This value should never be set to a negative."
    },
    "type": {
     "!type": "number",
     "!doc": "The const type of this object."
    },
    "offset": {
     "!type": "fn(dx: number, dy: number) -> +Phaser.Rectangle",
     "!doc": "Adjusts the location of the Rectangle object, as determined by its top-left corner, by the specified amounts."
    },
    "offsetPoint": {
     "!type": "fn(point: +Phaser.Point) -> +Phaser.Rectangle",
     "!doc": "Adjusts the location of the Rectangle object using a Point object as a parameter. This method is similar to the Rectangle.offset() method, except that it takes a Point object as a parameter."
    },
    "setTo": {
     "!type": "fn(x: number, y: number, width: number, height: number) -> +Phaser.Rectangle",
     "!doc": "Sets the members of Rectangle to the specified values."
    },
    "scale": {
     "!type": "fn(x: number, y: number) -> +Phaser.Rectangle",
     "!doc": "Scales the width and height of this Rectangle by the given amounts."
    },
    "centerOn": {
     "!type": "fn(x: number, y: number) -> +Phaser.Rectangle",
     "!doc": "Centers this Rectangle so that the center coordinates match the given x and y values."
    },
    "floor": {
     "!type": "fn()",
     "!doc": "Runs Math.floor() on both the x and y values of this Rectangle."
    },
    "floorAll": {
     "!type": "fn()",
     "!doc": "Runs Math.floor() on the x, y, width and height values of this Rectangle."
    },
    "ceil": {
     "!type": "fn()",
     "!doc": "Runs Math.ceil() on both the x and y values of this Rectangle."
    },
    "ceilAll": {
     "!type": "fn()",
     "!doc": "Runs Math.ceil() on the x, y, width and height values of this Rectangle."
    },
    "copyFrom": {
     "!type": "fn(source: +any) -> +Phaser.Rectangle",
     "!doc": "Copies the x, y, width and height properties from any given object to this Rectangle."
    },
    "copyTo": {
     "!type": "fn(source: +any) -> ?",
     "!doc": "Copies the x, y, width and height properties from this Rectangle to any given object."
    },
    "inflate": {
     "!type": "fn(dx: number, dy: number) -> +Phaser.Rectangle",
     "!doc": "Increases the size of the Rectangle object by the specified amounts. The center point of the Rectangle object stays the same, and its size increases to the left and right by the dx value, and to the top and the bottom by the dy value."
    },
    "size": {
     "!type": "fn(output: +Phaser.Point) -> +Phaser.Point",
     "!doc": "The size of the Rectangle object, expressed as a Point object with the values of the width and height properties."
    },
    "resize": {
     "!type": "fn(width: number, height: number) -> +Phaser.Rectangle",
     "!doc": "Resize the Rectangle by providing a new width and height.\nThe x and y positions remain unchanged."
    },
    "clone": {
     "!type": "fn(output: +Phaser.Rectangle) -> +Phaser.Rectangle",
     "!doc": "Returns a new Rectangle object with the same values for the x, y, width, and height properties as the original Rectangle object."
    },
    "contains": {
     "!type": "fn(x: number, y: number) -> bool",
     "!doc": "Determines whether the specified coordinates are contained within the region defined by this Rectangle object."
    },
    "containsRect": {
     "!type": "fn(b: +Phaser.Rectangle) -> bool",
     "!doc": "Determines whether the first Rectangle object is fully contained within the second Rectangle object.\nA Rectangle object is said to contain another if the second Rectangle object falls entirely within the boundaries of the first."
    },
    "equals": {
     "!type": "fn(b: +Phaser.Rectangle) -> bool",
     "!doc": "Determines whether the two Rectangles are equal.\nThis method compares the x, y, width and height properties of each Rectangle."
    },
    "intersection": {
     "!type": "fn(b: +Phaser.Rectangle, out: +Phaser.Rectangle) -> +Phaser.Rectangle",
     "!doc": "If the Rectangle object specified in the toIntersect parameter intersects with this Rectangle object, returns the area of intersection as a Rectangle object. If the Rectangles do not intersect, this method returns an empty Rectangle object with its properties set to 0."
    },
    "intersects": {
     "!type": "fn(b: +Phaser.Rectangle) -> bool",
     "!doc": "Determines whether this Rectangle and another given Rectangle intersect with each other.\nThis method checks the x, y, width, and height properties of the two Rectangles."
    },
    "intersectsRaw": {
     "!type": "fn(left: number, right: number, top: number, bottom: number, tolerance: number) -> bool",
     "!doc": "Determines whether the coordinates given intersects (overlaps) with this Rectangle."
    },
    "union": {
     "!type": "fn(b: +Phaser.Rectangle, out: +Phaser.Rectangle) -> +Phaser.Rectangle",
     "!doc": "Adds two Rectangles together to create a new Rectangle object, by filling in the horizontal and vertical space between the two Rectangles."
    },
    "random": {
     "!type": "fn(out: +Phaser.Point|?) -> +Phaser.Point",
     "!doc": "Returns a uniformly distributed random point from anywhere within this Rectangle."
    },
    "halfWidth": {
     "!type": "number",
     "!doc": "Half of the width of the Rectangle."
    },
    "halfHeight": {
     "!type": "number",
     "!doc": "Half of the height of the Rectangle."
    },
    "bottom": {
     "!type": "number",
     "!doc": "The sum of the y and height properties."
    },
    "bottomLeft": {
     "!type": "+Phaser.Point",
     "!doc": "Gets or sets the location of the Rectangles bottom left corner as a Point object."
    },
    "bottomRight": {
     "!type": "+Phaser.Point",
     "!doc": "Gets or sets the location of the Rectangles bottom right corner as a Point object."
    },
    "left": {
     "!type": "number",
     "!doc": "The x coordinate of the left of the Rectangle."
    },
    "right": {
     "!type": "number",
     "!doc": "The sum of the x and width properties."
    },
    "volume": {
     "!type": "number",
     "!doc": "The volume of the Rectangle derived from width * height."
    },
    "perimeter": {
     "!type": "number",
     "!doc": "The perimeter size of the Rectangle. This is the sum of all 4 sides."
    },
    "centerX": {
     "!type": "number",
     "!doc": "The x coordinate of the center of the Rectangle."
    },
    "centerY": {
     "!type": "number",
     "!doc": "The y coordinate of the center of the Rectangle."
    },
    "randomX": {
     "!type": "number",
     "!doc": "A random value between the left and right values (inclusive) of the Rectangle."
    },
    "randomY": {
     "!type": "number",
     "!doc": "A random value between the top and bottom values (inclusive) of the Rectangle."
    },
    "top": {
     "!type": "number",
     "!doc": "The y coordinate of the top of the Rectangle."
    },
    "topLeft": {
     "!type": "+Phaser.Point",
     "!doc": "The location of the Rectangles top left corner as a Point object."
    },
    "topRight": {
     "!type": "+Phaser.Point",
     "!doc": "The location of the Rectangles top left corner as a Point object."
    },
    "empty": {
     "!type": "bool",
     "!doc": "Gets or sets the Rectangles empty state."
    },
    "aabb": {
     "!type": "fn(points: [?], out: +Phaser.Rectangle) -> +Phaser.Rectangle",
     "!doc": "Calculates the Axis Aligned Bounding Box (or aabb) from an array of points."
    }
   },
   "inflate": {
    "!type": "fn(a: +Phaser.Rectangle, dx: number, dy: number) -> +Phaser.Rectangle",
    "!doc": "Increases the size of the Rectangle object by the specified amounts. The center point of the Rectangle object stays the same, and its size increases to the left and right by the dx value, and to the top and the bottom by the dy value."
   },
   "inflatePoint": {
    "!type": "fn(a: +Phaser.Rectangle, point: +Phaser.Point) -> +Phaser.Rectangle",
    "!doc": "Increases the size of the Rectangle object. This method is similar to the Rectangle.inflate() method except it takes a Point object as a parameter."
   },
   "size": {
    "!type": "fn(a: +Phaser.Rectangle, output: +Phaser.Point) -> +Phaser.Point",
    "!doc": "The size of the Rectangle object, expressed as a Point object with the values of the width and height properties."
   },
   "clone": {
    "!type": "fn(a: +Phaser.Rectangle, output: +Phaser.Rectangle) -> +Phaser.Rectangle",
    "!doc": "Returns a new Rectangle object with the same values for the x, y, width, and height properties as the original Rectangle object."
   },
   "contains": {
    "!type": "fn(a: +Phaser.Rectangle, x: number, y: number) -> bool",
    "!doc": "Determines whether the specified coordinates are contained within the region defined by this Rectangle object."
   },
   "containsRaw": {
    "!type": "fn(rx: number, ry: number, rw: number, rh: number, x: number, y: number) -> bool",
    "!doc": "Determines whether the specified coordinates are contained within the region defined by the given raw values."
   },
   "containsPoint": {
    "!type": "fn(a: +Phaser.Rectangle, point: +Phaser.Point) -> bool",
    "!doc": "Determines whether the specified point is contained within the rectangular region defined by this Rectangle object. This method is similar to the Rectangle.contains() method, except that it takes a Point object as a parameter."
   },
   "containsRect": {
    "!type": "fn(a: +Phaser.Rectangle, b: +Phaser.Rectangle) -> bool",
    "!doc": "Determines whether the first Rectangle object is fully contained within the second Rectangle object.\nA Rectangle object is said to contain another if the second Rectangle object falls entirely within the boundaries of the first."
   },
   "equals": {
    "!type": "fn(a: +Phaser.Rectangle, b: +Phaser.Rectangle) -> bool",
    "!doc": "Determines whether the two Rectangles are equal.\nThis method compares the x, y, width and height properties of each Rectangle."
   },
   "sameDimensions": {
    "!type": "fn(a: +Rectangle, b: +Rectangle) -> bool",
    "!doc": "Determines if the two objects (either Rectangles or Rectangle-like) have the same width and height values under strict equality."
   },
   "intersection": {
    "!type": "fn(a: +Phaser.Rectangle, b: +Phaser.Rectangle, output: +Phaser.Rectangle) -> +Phaser.Rectangle",
    "!doc": "If the Rectangle object specified in the toIntersect parameter intersects with this Rectangle object, returns the area of intersection as a Rectangle object. If the Rectangles do not intersect, this method returns an empty Rectangle object with its properties set to 0."
   },
   "intersects": {
    "!type": "fn(a: +Phaser.Rectangle, b: +Phaser.Rectangle) -> bool",
    "!doc": "Determines whether the two Rectangles intersect with each other.\nThis method checks the x, y, width, and height properties of the Rectangles."
   },
   "intersectsRaw": {
    "!type": "fn(left: number, right: number, top: number, bottom: number, tolerance: number) -> bool",
    "!doc": "Determines whether the object specified intersects (overlaps) with the given values."
   },
   "union": {
    "!type": "fn(a: +Phaser.Rectangle, b: +Phaser.Rectangle, output: +Phaser.Rectangle) -> +Phaser.Rectangle",
    "!doc": "Adds two Rectangles together to create a new Rectangle object, by filling in the horizontal and vertical space between the two Rectangles."
   }
  },
  "RoundedRectangle": {
   "!type": "fn(x: number, y: number, width: number, height: number, radius: number)",
   "!doc": "The Rounded Rectangle object is an area defined by its position and has nice rounded corners, \nas indicated by its top-left corner point (x, y) and by its width and its height.",
   "prototype": {
    "x": {
     "!type": "number",
     "!doc": "The x coordinate of the top-left corner of the Rectangle."
    },
    "y": {
     "!type": "number",
     "!doc": "The y coordinate of the top-left corner of the Rectangle."
    },
    "width": {
     "!type": "number",
     "!doc": "The width of the Rectangle. This value should never be set to a negative."
    },
    "height": {
     "!type": "number",
     "!doc": "The height of the Rectangle. This value should never be set to a negative."
    },
    "radius": {
     "!type": "number",
     "!doc": "The radius of the rounded corners."
    },
    "type": {
     "!type": "number",
     "!doc": "The const type of this object."
    },
    "clone": {
     "!type": "fn() -> +Phaser.RoundedRectangle",
     "!doc": "Returns a new RoundedRectangle object with the same values for the x, y, width, height and\nradius properties as this RoundedRectangle object."
    },
    "contains": {
     "!type": "fn(x: number, y: number) -> bool",
     "!doc": "Determines whether the specified coordinates are contained within the region defined by this Rounded Rectangle object."
    }
   }
  },
  "DeviceButton": {
   "!type": "fn(parent: +Phaser.Pointer|+Phaser.SinglePad, buttonCode: number)",
   "!doc": "DeviceButtons belong to both `Phaser.Pointer` and `Phaser.SinglePad` (Gamepad) instances.\n\nFor Pointers they represent the various buttons that can exist on mice and pens, such as the left button, right button,\nmiddle button and advanced buttons like back and forward.\n\nAccess them via `Pointer.leftbutton`, `Pointer.rightButton` and so on.\n\nOn Gamepads they represent all buttons on the pad: from shoulder buttons to action buttons.\n\nAt the time of writing this there are device limitations you should be aware of:\n\n- On Windows, if you install a mouse driver, and its utility software allows you to customize button actions \n  (e.g., IntelliPoint and SetPoint), the middle (wheel) button, the 4th button, and the 5th button might not be set, \n  even when they are pressed.\n- On Linux (GTK), the 4th button and the 5th button are not supported.\n- On Mac OS X 10.5 there is no platform API for implementing any advanced buttons.",
   "prototype": {
    "parent": {
     "!type": "+Phaser.Pointer|+Phaser.SinglePad",
     "!doc": "A reference to the Pointer or Gamepad that owns this button."
    },
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running game."
    },
    "event": {
     "!type": "?",
     "!doc": "The DOM event that caused the change in button state."
    },
    "isDown": {
     "!type": "bool",
     "!doc": "The \"down\" state of the button."
    },
    "isUp": {
     "!type": "bool",
     "!doc": "The \"up\" state of the button."
    },
    "timeDown": {
     "!type": "number",
     "!doc": "The timestamp when the button was last pressed down."
    },
    "duration": {
     "!type": "number"
    },
    "timeUp": {
     "!type": "number",
     "!doc": "The timestamp when the button was last released."
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
     "!type": "number",
     "!doc": "Button value. Mainly useful for checking analog buttons (like shoulder triggers) on Gamepads."
    },
    "buttonCode": {
     "!type": "number",
     "!doc": "The buttoncode of this button if a Gamepad, or the DOM button event value if a Pointer."
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
     "!type": "fn(event: ?, value: number)",
     "!doc": "Called automatically by Phaser.Pointer and Phaser.SinglePad.\nHandles the button down state."
    },
    "stop": {
     "!type": "fn(event: ?, value: number)",
     "!doc": "Called automatically by Phaser.Pointer and Phaser.SinglePad.\nHandles the button up state."
    },
    "padFloat": {
     "!type": "fn(value: number)",
     "!doc": "Called automatically by Phaser.SinglePad."
    },
    "justPressed": {
     "!type": "fn(duration: number) -> bool",
     "!doc": "Returns the \"just pressed\" state of this button.\nJust pressed is considered true if the button was pressed down within the duration given (default 250ms)."
    },
    "justReleased": {
     "!type": "fn(duration: number) -> bool",
     "!doc": "Returns the \"just released\" state of this button.\nJust released is considered as being true if the button was released within the duration given (default 250ms)."
    },
    "reset": {
     "!type": "fn()",
     "!doc": "Resets this DeviceButton, changing it to an isUp state and resetting the duration and repeats counters."
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "Destroys this DeviceButton, this disposes of the onDown, onUp and onFloat signals \nand clears the parent and game references."
    }
   }
  },
  "Gamepad": {
   "!type": "fn(game: +Phaser.Game)",
   "!doc": "The Gamepad class handles gamepad input and dispatches gamepad events.\n\nRemember to call `gamepad.start()`.\n\nHTML5 GAMEPAD API SUPPORT IS AT AN EXPERIMENTAL STAGE!\nAt moment of writing this (end of 2013) only Chrome supports parts of it out of the box. Firefox supports it\nvia prefs flags (about:config, search gamepad). The browsers map the same controllers differently.\nThis class has constants for Windows 7 Chrome mapping of XBOX 360 controller.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "Local reference to game."
    },
    "enabled": {
     "!type": "bool"
    },
    "callbackContext": {
     "!type": "?",
     "!doc": "The context under which the callbacks are run."
    },
    "onConnectCallback": {
     "!type": "fn()",
     "!doc": "This callback is invoked every time any gamepad is connected"
    },
    "onDisconnectCallback": {
     "!type": "fn()",
     "!doc": "This callback is invoked every time any gamepad is disconnected"
    },
    "onDownCallback": {
     "!type": "fn()",
     "!doc": "This callback is invoked every time any gamepad button is pressed down."
    },
    "onUpCallback": {
     "!type": "fn()",
     "!doc": "This callback is invoked every time any gamepad button is released."
    },
    "onAxisCallback": {
     "!type": "fn()",
     "!doc": "This callback is invoked every time any gamepad axis is changed."
    },
    "onFloatCallback": {
     "!type": "fn()",
     "!doc": "This callback is invoked every time any gamepad button is changed to a value where value > 0 and value < 1."
    },
    "addCallbacks": {
     "!type": "fn(context: ?, callbacks: ?)",
     "!doc": "Add callbacks to the main Gamepad handler to handle connect/disconnect/button down/button up/axis change/float value buttons."
    },
    "start": {
     "!type": "fn()",
     "!doc": "Starts the Gamepad event handling.\nThis MUST be called manually before Phaser will start polling the Gamepad API."
    },
    "update": {
     "!type": "fn()",
     "!doc": "Main gamepad update loop. Should not be called manually."
    },
    "setDeadZones": {
     "!type": "fn()",
     "!doc": "Sets the deadZone variable for all four gamepads"
    },
    "stop": {
     "!type": "fn()",
     "!doc": "Stops the Gamepad event handling."
    },
    "reset": {
     "!type": "fn()",
     "!doc": "Reset all buttons/axes of all gamepads"
    },
    "justPressed": {
     "!type": "fn(buttonCode: number, duration: number) -> bool",
     "!doc": "Returns the \"just released\" state of a button from ANY gamepad connected. Just released is considered as being true if the button was released within the duration given (default 250ms)."
    },
    "isDown": {
     "!type": "fn(buttonCode: number) -> bool",
     "!doc": "Returns true if the button is currently pressed down, on ANY gamepad."
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "Destroys this object and the associated event listeners."
    },
    "active": {
     "!type": "bool",
     "!doc": "If the gamepad input is active or not."
    },
    "supported": {
     "!type": "bool",
     "!doc": "Whether or not gamepads are supported in current browser."
    },
    "padsConnected": {
     "!type": "number",
     "!doc": "How many live gamepads are currently connected."
    },
    "pad1": {
     "!type": "+Phaser.SinglePad",
     "!doc": "Gamepad #1;"
    },
    "pad2": {
     "!type": "+Phaser.SinglePad",
     "!doc": "Gamepad #2"
    },
    "pad3": {
     "!type": "+Phaser.SinglePad",
     "!doc": "Gamepad #3"
    },
    "pad4": {
     "!type": "+Phaser.SinglePad",
     "!doc": "Gamepad #4"
    }
   }
  },
  "Input": {
   "!type": "fn(game: +Phaser.Game)",
   "!doc": "Phaser.Input is the Input Manager for all types of Input across Phaser, including mouse, keyboard, touch and MSPointer.\nThe Input manager is updated automatically by the core game loop.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running game."
    },
    "hitCanvas": {
     "!type": "+HTMLCanvasElement",
     "!doc": "The canvas to which single pixels are drawn in order to perform pixel-perfect hit detection."
    },
    "hitContext": {
     "!type": "+CanvasRenderingContext2D",
     "!doc": "The context of the pixel perfect hit canvas."
    },
    "moveCallbacks": {
     "!type": "+array"
    },
    "pollRate": {
     "!type": "number",
     "!doc": "How often should the input pointers be checked for updates? A value of 0 means every single frame (60fps); a value of 1 means every other frame (30fps) and so on."
    },
    "enabled": {
     "!type": "bool"
    },
    "multiInputOverride": {
     "!type": "number",
     "!doc": "Controls the expected behavior when using a mouse and touch together on a multi-input device."
    },
    "position": {
     "!type": "+Phaser.Point",
     "!doc": "A point object representing the current position of the Pointer."
    },
    "speed": {
     "!type": "+Phaser.Point",
     "!doc": "A point object representing the speed of the Pointer. Only really useful in single Pointer games; otherwise see the Pointer objects directly."
    },
    "circle": {
     "!type": "+Phaser.Circle"
    },
    "scale": {
     "!type": "+Phaser.Point",
     "!doc": "The scale by which all input coordinates are multiplied; calculated by the ScaleManager. In an un-scaled game the values will be x = 1 and y = 1."
    },
    "maxPointers": {
     "!type": "number",
     "!doc": "The maximum number of Pointers allowed to be active at any one time. A value of -1 is only limited by the total number of pointers. For lots of games it's useful to set this to 1."
    },
    "tapRate": {
     "!type": "number",
     "!doc": "The number of milliseconds that the Pointer has to be pressed down and then released to be considered a tap or click."
    },
    "doubleTapRate": {
     "!type": "number",
     "!doc": "The number of milliseconds between taps of the same Pointer for it to be considered a double tap / click."
    },
    "holdRate": {
     "!type": "number",
     "!doc": "The number of milliseconds that the Pointer has to be pressed down for it to fire a onHold event."
    },
    "justPressedRate": {
     "!type": "number",
     "!doc": "The number of milliseconds below which the Pointer is considered justPressed."
    },
    "justReleasedRate": {
     "!type": "number",
     "!doc": "The number of milliseconds below which the Pointer is considered justReleased ."
    },
    "recordPointerHistory": {
     "!type": "bool"
    },
    "recordRate": {
     "!type": "number",
     "!doc": "The rate in milliseconds at which the Pointer objects should update their tracking history."
    },
    "recordLimit": {
     "!type": "number"
    },
    "pointer1": {
     "!type": "+Phaser.Pointer",
     "!doc": "A Pointer object."
    },
    "pointer2": {
     "!type": "+Phaser.Pointer",
     "!doc": "A Pointer object."
    },
    "pointer3": {
     "!type": "+Phaser.Pointer",
     "!doc": "A Pointer object."
    },
    "pointer4": {
     "!type": "+Phaser.Pointer",
     "!doc": "A Pointer object."
    },
    "pointer5": {
     "!type": "+Phaser.Pointer",
     "!doc": "A Pointer object."
    },
    "pointer6": {
     "!type": "+Phaser.Pointer",
     "!doc": "A Pointer object."
    },
    "pointer7": {
     "!type": "+Phaser.Pointer",
     "!doc": "A Pointer object."
    },
    "pointer8": {
     "!type": "+Phaser.Pointer",
     "!doc": "A Pointer object."
    },
    "pointer9": {
     "!type": "+Phaser.Pointer",
     "!doc": "A Pointer object."
    },
    "pointer10": {
     "!type": "+Phaser.Pointer",
     "!doc": "A Pointer object."
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
     "!type": "fn()",
     "!doc": "Starts the Input Manager running."
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "Stops all of the Input Managers from running."
    },
    "addMoveCallback": {
     "!type": "fn(callback: fn(), context: ?)",
     "!doc": "Adds a callback that is fired every time the activePointer receives a DOM move event such as a mousemove or touchmove.\n\nThe callback will be sent 4 parameters: The Pointer that moved, the x position of the pointer, the y position and the down state.\n\nIt will be called every time the activePointer moves, which in a multi-touch game can be a lot of times, so this is best\nto only use if you've limited input to a single pointer (i.e. mouse or touch).\n\nThe callback is added to the Phaser.Input.moveCallbacks array and should be removed with Phaser.Input.deleteMoveCallback."
    },
    "deleteMoveCallback": {
     "!type": "fn(callback: fn(), context: ?)",
     "!doc": "Removes the callback from the Phaser.Input.moveCallbacks array."
    },
    "addPointer": {
     "!type": "fn() -> +Phaser.Pointer|+null",
     "!doc": "Add a new Pointer object to the Input Manager.\nBy default Input creates 3 pointer objects: `mousePointer` (not include in part of general pointer pool), `pointer1` and `pointer2`.\nThis method adds an additional pointer, up to a maximum of Phaser.Input.MAX_POINTERS (default of 10)."
    },
    "update": {
     "!type": "fn()",
     "!doc": "Updates the Input Manager. Called by the core Game loop."
    },
    "reset": {
     "!type": "fn(hard: bool)",
     "!doc": "Reset all of the Pointers and Input states.\n\nThe optional `hard` parameter will reset any events or callbacks that may be bound.\nInput.reset is called automatically during a State change or if a game loses focus / visibility.\nTo control control the reset manually set {@link Phaser.InputManager.resetLocked} to `true`."
    },
    "resetSpeed": {
     "!type": "fn(x: number, y: number)",
     "!doc": "Resets the speed and old position properties."
    },
    "startPointer": {
     "!type": "fn(event: +any) -> +Phaser.Pointer",
     "!doc": "Find the first free Pointer object and start it, passing in the event data.\nThis is called automatically by Phaser.Touch and Phaser.MSPointer."
    },
    "updatePointer": {
     "!type": "fn(event: +any) -> +Phaser.Pointer",
     "!doc": "Updates the matching Pointer object, passing in the event data.\nThis is called automatically and should not normally need to be invoked."
    },
    "stopPointer": {
     "!type": "fn(event: +any) -> +Phaser.Pointer",
     "!doc": "Stops the matching Pointer object, passing in the event data."
    },
    "getPointer": {
     "!type": "fn(isActive: bool) -> +Phaser.Pointer",
     "!doc": "Get the first Pointer with the given active state."
    },
    "getPointerFromIdentifier": {
     "!type": "fn(identifier: number) -> +Phaser.Pointer",
     "!doc": "Get the Pointer object whos `identifier` property matches the given identifier value.\n\nThe identifier property is not set until the Pointer has been used at least once, as its populated by the DOM event.\nAlso it can change every time you press the pointer down, and is not fixed once set.\nNote: Not all browsers set the identifier property and it's not part of the W3C spec, so you may need getPointerFromId instead."
    },
    "getPointerFromId": {
     "!type": "fn(pointerId: number) -> +Phaser.Pointer",
     "!doc": "Get the Pointer object whos `pointerId` property matches the given value.\n\nThe pointerId property is not set until the Pointer has been used at least once, as its populated by the DOM event.\nAlso it can change every time you press the pointer down if the browser recycles it."
    },
    "getLocalPosition": {
     "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image, pointer: +Phaser.Pointer) -> +Phaser.Point",
     "!doc": "This will return the local coordinates of the specified displayObject based on the given Pointer."
    },
    "hitTest": {
     "!type": "fn(displayObject: +DisplayObject, pointer: +Phaser.Pointer, localPoint: +Phaser.Point)",
     "!doc": "Tests if the pointer hits the given object."
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
     "!type": "number",
     "!doc": "The world X coordinate of the most recently active pointer."
    },
    "worldY": {
     "!type": "number",
     "!doc": "The world Y coordinate of the most recently active pointer."
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
    "!type": "number",
    "!doc": "The maximum number of pointers that can be added. This excludes the mouse pointer."
   }
  },
  "InputHandler": {
   "!type": "fn(sprite: +Phaser.Sprite)",
   "!doc": "The Input Handler is bound to a specific Sprite and is responsible for managing all Input events on that Sprite.",
   "prototype": {
    "sprite": {
     "!type": "+Phaser.Sprite",
     "!doc": "The Sprite object to which this Input Handler belongs."
    },
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running game."
    },
    "enabled": {
     "!type": "bool",
     "!doc": "If enabled the Input Handler will process input requests and monitor pointer activity."
    },
    "checked": {
     "!type": "bool",
     "!doc": "A disposable flag used by the Pointer class when performing priority checks."
    },
    "priorityID": {
     "!type": "number"
    },
    "useHandCursor": {
     "!type": "bool",
     "!doc": "On a desktop browser you can set the 'hand' cursor to appear when moving over the Sprite."
    },
    "isDragged": {
     "!type": "bool",
     "!doc": "true if the Sprite is being currently dragged."
    },
    "allowHorizontalDrag": {
     "!type": "bool",
     "!doc": "Controls if the Sprite is allowed to be dragged horizontally."
    },
    "allowVerticalDrag": {
     "!type": "bool",
     "!doc": "Controls if the Sprite is allowed to be dragged vertically."
    },
    "bringToTop": {
     "!type": "bool",
     "!doc": "If true when this Sprite is clicked or dragged it will automatically be bought to the top of the Group it is within."
    },
    "snapOffset": {
     "!type": "+Phaser.Point",
     "!doc": "A Point object that contains by how far the Sprite snap is offset."
    },
    "snapOnDrag": {
     "!type": "bool",
     "!doc": "When the Sprite is dragged this controls if the center of the Sprite will snap to the pointer on drag or not."
    },
    "snapOnRelease": {
     "!type": "bool",
     "!doc": "When the Sprite is dragged this controls if the Sprite will be snapped on release."
    },
    "snapX": {
     "!type": "number",
     "!doc": "When a Sprite has snapping enabled this holds the width of the snap grid."
    },
    "snapY": {
     "!type": "number",
     "!doc": "When a Sprite has snapping enabled this holds the height of the snap grid."
    },
    "snapOffsetX": {
     "!type": "number",
     "!doc": "This defines the top-left X coordinate of the snap grid."
    },
    "snapOffsetY": {
     "!type": "number",
     "!doc": "This defines the top-left Y coordinate of the snap grid.."
    },
    "pixelPerfectOver": {
     "!type": "bool",
     "!doc": "Use a pixel perfect check when testing for pointer over."
    },
    "pixelPerfectClick": {
     "!type": "bool",
     "!doc": "Use a pixel perfect check when testing for clicks or touches on the Sprite."
    },
    "pixelPerfectAlpha": {
     "!type": "number",
     "!doc": "The alpha tolerance threshold. If the alpha value of the pixel matches or is above this value, it's considered a hit."
    },
    "draggable": {
     "!type": "bool",
     "!doc": "Is this sprite allowed to be dragged by the mouse? true = yes, false = no"
    },
    "boundsRect": {
     "!type": "+Phaser.Rectangle",
     "!doc": "A region of the game world within which the sprite is restricted during drag."
    },
    "boundsSprite": {
     "!type": "+Phaser.Sprite",
     "!doc": "A Sprite the bounds of which this sprite is restricted during drag."
    },
    "consumePointerEvent": {
     "!type": "bool"
    },
    "scaleLayer": {
     "!type": "bool",
     "!doc": "EXPERIMENTAL: Please do not use this property unless you know what it does. Likely to change in the future."
    },
    "dragOffset": {
     "!type": "+Phaser.Point",
     "!doc": "The offset from the Sprites position that dragging takes place from."
    },
    "dragFromCenter": {
     "!type": "bool",
     "!doc": "Is the Sprite dragged from its center, or the point at which the Pointer was pressed down upon it?"
    },
    "dragStartPoint": {
     "!type": "+Phaser.Point",
     "!doc": "The Point from which the most recent drag started from. Useful if you need to return an object to its starting position."
    },
    "snapPoint": {
     "!type": "+Phaser.Point",
     "!doc": "If the sprite is set to snap while dragging this holds the point of the most recent 'snap' event."
    },
    "start": {
     "!type": "fn(priority: number, useHandCursor: bool) -> +Phaser.Sprite",
     "!doc": "Starts the Input Handler running. This is called automatically when you enable input on a Sprite, or can be called directly if you need to set a specific priority."
    },
    "reset": {
     "!type": "fn()",
     "!doc": "Resets the Input Handler and disables it."
    },
    "stop": {
     "!type": "fn()",
     "!doc": "Stops the Input Handler from running."
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "Clean up memory."
    },
    "validForInput": {
     "!type": "fn(highestID: number, highestRenderID: number, includePixelPerfect: bool) -> bool",
     "!doc": "Checks if the object this InputHandler is bound to is valid for consideration in the Pointer move event.\nThis is called by Phaser.Pointer and shouldn't typically be called directly."
    },
    "isPixelPerfect": {
     "!type": "fn() -> bool",
     "!doc": "Is this object using pixel perfect checking?"
    },
    "pointerX": {
     "!type": "fn(pointer: number) -> number",
     "!doc": "The x coordinate of the Input pointer, relative to the top-left of the parent Sprite.\nThis value is only set when the pointer is over this Sprite."
    },
    "pointerY": {
     "!type": "fn(pointer: number) -> number",
     "!doc": "The y coordinate of the Input pointer, relative to the top-left of the parent Sprite\nThis value is only set when the pointer is over this Sprite."
    },
    "pointerDown": {
     "!type": "fn(pointer: number) -> bool",
     "!doc": "If the Pointer is down this returns true. Please note that it only checks if the Pointer is down, not if it's down over any specific Sprite."
    },
    "pointerUp": {
     "!type": "fn(pointer: number) -> bool",
     "!doc": "If the Pointer is up this returns true. Please note that it only checks if the Pointer is up, not if it's up over any specific Sprite."
    },
    "pointerTimeDown": {
     "!type": "fn(pointer: number) -> number",
     "!doc": "A timestamp representing when the Pointer first touched the touchscreen."
    },
    "pointerTimeUp": {
     "!type": "fn(pointer: +Phaser.Pointer) -> number",
     "!doc": "A timestamp representing when the Pointer left the touchscreen."
    },
    "pointerOver": {
     "!type": "fn(index: number) -> bool",
     "!doc": "Is the Pointer over this Sprite?"
    },
    "pointerOut": {
     "!type": "fn(index: number) -> bool",
     "!doc": "Is the Pointer outside of this Sprite?"
    },
    "pointerTimeOver": {
     "!type": "fn(pointer: +Phaser.Pointer) -> number",
     "!doc": "A timestamp representing when the Pointer first touched the touchscreen."
    },
    "pointerTimeOut": {
     "!type": "fn(pointer: +Phaser.Pointer) -> number",
     "!doc": "A timestamp representing when the Pointer left the touchscreen."
    },
    "pointerDragged": {
     "!type": "fn(pointer: +Phaser.Pointer) -> bool",
     "!doc": "Is this sprite being dragged by the mouse or not?"
    },
    "checkPointerDown": {
     "!type": "fn(pointer: +Phaser.Pointer, fastTest: bool) -> bool",
     "!doc": "Checks if the given pointer is both down and over the Sprite this InputHandler belongs to.\nUse the `fastTest` flag is to quickly check just the bounding hit area even if `InputHandler.pixelPerfectOver` is `true`."
    },
    "checkPointerOver": {
     "!type": "fn(pointer: +Phaser.Pointer, fastTest: bool) -> bool",
     "!doc": "Checks if the given pointer is over the Sprite this InputHandler belongs to.\nUse the `fastTest` flag is to quickly check just the bounding hit area even if `InputHandler.pixelPerfectOver` is `true`."
    },
    "checkPixel": {
     "!type": "fn(x: number, y: number, pointer: +Phaser.Pointer) -> bool",
     "!doc": "Runs a pixel perfect check against the given x/y coordinates of the Sprite this InputHandler is bound to.\nIt compares the alpha value of the pixel and if >= InputHandler.pixelPerfectAlpha it returns true."
    },
    "update": {
     "!type": "fn(pointer: +Phaser.Pointer)",
     "!doc": "Update."
    },
    "updateDrag": {
     "!type": "fn(pointer: +Phaser.Pointer) -> bool",
     "!doc": "Updates the Pointer drag on this Sprite."
    },
    "justOver": {
     "!type": "fn(pointer: +Phaser.Pointer, delay: number) -> bool",
     "!doc": "Returns true if the pointer has entered the Sprite within the specified delay time (defaults to 500ms, half a second)"
    },
    "justOut": {
     "!type": "fn(pointer: +Phaser.Pointer, delay: number) -> bool",
     "!doc": "Returns true if the pointer has left the Sprite within the specified delay time (defaults to 500ms, half a second)"
    },
    "justPressed": {
     "!type": "fn(pointer: +Phaser.Pointer, delay: number) -> bool",
     "!doc": "Returns true if the pointer has touched or clicked on the Sprite within the specified delay time (defaults to 500ms, half a second)"
    },
    "justReleased": {
     "!type": "fn(pointer: +Phaser.Pointer, delay: number) -> bool",
     "!doc": "Returns true if the pointer was touching this Sprite, but has been released within the specified delay time (defaults to 500ms, half a second)"
    },
    "overDuration": {
     "!type": "fn(pointer: +Phaser.Pointer) -> number",
     "!doc": "If the pointer is currently over this Sprite this returns how long it has been there for in milliseconds."
    },
    "downDuration": {
     "!type": "fn(pointer: +Phaser.Pointer) -> number",
     "!doc": "If the pointer is currently over this Sprite this returns how long it has been there for in milliseconds."
    },
    "enableDrag": {
     "!type": "fn(lockCenter: bool, bringToTop: bool, pixelPerfect: bool, alphaThreshold: bool, boundsRect: +Phaser.Rectangle, boundsSprite: +Phaser.Sprite)",
     "!doc": "Allow this Sprite to be dragged by any valid pointer.\n\nWhen the drag begins the Sprite.events.onDragStart event will be dispatched.\n\nWhen the drag completes by way of the user letting go of the pointer that was dragging the sprite, the Sprite.events.onDragStop event is dispatched.\n\nFor the duration of the drag the Sprite.events.onDragUpdate event is dispatched. This event is only dispatched when the pointer actually\nchanges position and moves. The event sends 5 parameters: `sprite`, `pointer`, `dragX`, `dragY` and `snapPoint`."
    },
    "disableDrag": {
     "!type": "fn()",
     "!doc": "Stops this sprite from being able to be dragged. If it is currently the target of an active drag it will be stopped immediately. Also disables any set callbacks."
    },
    "startDrag": {
     "!type": "fn(pointer: +Phaser.Pointer)",
     "!doc": "Called by Pointer when drag starts on this Sprite. Should not usually be called directly."
    },
    "globalToLocalX": {
     "!type": "fn(x: number)",
     "!doc": "Warning: EXPERIMENTAL"
    },
    "globalToLocalY": {
     "!type": "fn(y: number)",
     "!doc": "Warning: EXPERIMENTAL"
    },
    "stopDrag": {
     "!type": "fn(pointer: +Phaser.Pointer)",
     "!doc": "Called by Pointer when drag is stopped on this Sprite. Should not usually be called directly."
    },
    "setDragLock": {
     "!type": "fn(allowHorizontal: bool, allowVertical: bool)",
     "!doc": "Restricts this sprite to drag movement only on the given axis. Note: If both are set to false the sprite will never move!"
    },
    "enableSnap": {
     "!type": "fn(snapX: number, snapY: number, onDrag: bool, onRelease: bool, snapOffsetX: number, snapOffsetY: number)",
     "!doc": "Make this Sprite snap to the given grid either during drag or when it's released.\nFor example 16x16 as the snapX and snapY would make the sprite snap to every 16 pixels."
    },
    "disableSnap": {
     "!type": "fn()",
     "!doc": "Stops the sprite from snapping to a grid during drag or release."
    },
    "checkBoundsRect": {
     "!type": "fn()",
     "!doc": "Bounds Rect check for the sprite drag"
    },
    "checkBoundsSprite": {
     "!type": "fn()",
     "!doc": "Parent Sprite Bounds check for the sprite drag."
    }
   }
  },
  "Key": {
   "!type": "fn(game: +Phaser.Game, keycode: number)",
   "!doc": "If you need more fine-grained control over the handling of specific keys you can create and use Phaser.Key objects.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running game."
    },
    "event": {
     "!type": "?",
     "!doc": "Stores the most recent DOM event."
    },
    "isDown": {
     "!type": "bool",
     "!doc": "The \"down\" state of the key. This will remain `true` for as long as the keyboard thinks this key is held down."
    },
    "isUp": {
     "!type": "bool",
     "!doc": "The \"up\" state of the key. This will remain `true` for as long as the keyboard thinks this key is up."
    },
    "altKey": {
     "!type": "bool",
     "!doc": "The down state of the ALT key, if pressed at the same time as this key."
    },
    "ctrlKey": {
     "!type": "bool",
     "!doc": "The down state of the CTRL key, if pressed at the same time as this key."
    },
    "shiftKey": {
     "!type": "bool",
     "!doc": "The down state of the SHIFT key, if pressed at the same time as this key."
    },
    "timeDown": {
     "!type": "number",
     "!doc": "The timestamp when the key was last pressed down. This is based on Game.time.now."
    },
    "duration": {
     "!type": "number",
     "!doc": "The number of milliseconds this key has been held down for."
    },
    "timeUp": {
     "!type": "number",
     "!doc": "The timestamp when the key was last released. This is based on Game.time.now."
    },
    "repeats": {
     "!type": "number",
     "!doc": "If a key is held down this holds down the number of times the key has 'repeated'."
    },
    "keyCode": {
     "!type": "number",
     "!doc": "The keycode of this key."
    },
    "onDown": {
     "!type": "+Phaser.Signal",
     "!doc": "This Signal is dispatched every time this Key is pressed down. It is only dispatched once (until the key is released again)."
    },
    "onHoldCallback": {
     "!type": "fn()",
     "!doc": "A callback that is called while this Key is held down. Warning: Depending on refresh rate that could be 60+ times per second."
    },
    "onHoldContext": {
     "!type": "?",
     "!doc": "The context under which the onHoldCallback will be called."
    },
    "onUp": {
     "!type": "+Phaser.Signal",
     "!doc": "This Signal is dispatched every time this Key is released. It is only dispatched once (until the key is pressed and released again)."
    },
    "update": {
     "!type": "fn()",
     "!doc": "Called automatically by Phaser.Keyboard."
    },
    "processKeyDown": {
     "!type": "fn(event: +KeyboardEvent)",
     "!doc": "Called automatically by Phaser.Keyboard."
    },
    "processKeyUp": {
     "!type": "fn(event: +KeyboardEvent)",
     "!doc": "Called automatically by Phaser.Keyboard."
    },
    "reset": {
     "!type": "fn(hard: bool)",
     "!doc": "Resets the state of this Key.\n\nThis sets isDown to false, isUp to true, resets the time to be the current time, and _enables_ the key.\nIn addition, if it is a \"hard reset\", it clears clears any callbacks associated with the onDown and onUp events and removes the onHoldCallback."
    },
    "downDuration": {
     "!type": "fn(duration: number) -> bool",
     "!doc": "Returns `true` if the Key was pressed down within the `duration` value given, or `false` if it either isn't down,\nor was pressed down longer ago than then given duration."
    },
    "upDuration": {
     "!type": "fn(duration: number) -> bool",
     "!doc": "Returns `true` if the Key was pressed down within the `duration` value given, or `false` if it either isn't down,\nor was pressed down longer ago than then given duration."
    }
   }
  },
  "Keyboard": {
   "!type": "fn(game: +Phaser.Game)",
   "!doc": "The Keyboard class monitors keyboard input and dispatches keyboard events.\n\n_Be aware_ that many keyboards are unable to process certain combinations of keys due to hardware\nlimitations known as ghosting. Full details here: http://www.html5gamedevs.com/topic/4876-impossible-to-use-more-than-2-keyboard-input-buttons-at-the-same-time/",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "Local reference to game."
    },
    "enabled": {
     "!type": "bool"
    },
    "event": {
     "!type": "?",
     "!doc": "The most recent DOM event from keydown or keyup. This is updated every time a new key is pressed or released."
    },
    "pressEvent": {
     "!type": "?",
     "!doc": "The most recent DOM event from keypress."
    },
    "callbackContext": {
     "!type": "?",
     "!doc": "The context under which the callbacks are run."
    },
    "onDownCallback": {
     "!type": "fn()",
     "!doc": "This callback is invoked every time a key is pressed down, including key repeats when a key is held down."
    },
    "onPressCallback": {
     "!type": "fn()",
     "!doc": "This callback is invoked every time a DOM onkeypress event is raised, which is only for printable keys."
    },
    "onUpCallback": {
     "!type": "fn()",
     "!doc": "This callback is invoked every time a key is released."
    },
    "addCallbacks": {
     "!type": "fn(context: ?, onDown: fn(), onUp: fn(), onPress: fn())",
     "!doc": "Add callbacks to the Keyboard handler so that each time a key is pressed down or released the callbacks are activated."
    },
    "addKey": {
     "!type": "fn(keycode: number) -> +Phaser.Key",
     "!doc": "If you need more fine-grained control over a Key you can create a new Phaser.Key object via this method.\nThe Key object can then be polled, have events attached to it, etc."
    },
    "addKeys": {
     "!type": "fn(keys: ?) -> ?",
     "!doc": "A practical way to create an object containing user selected hotkeys.\n\nFor example: `addKeys( { 'up': Phaser.Keyboard.W, 'down': Phaser.Keyboard.S, 'left': Phaser.Keyboard.A, 'right': Phaser.Keyboard.D } );`\n\nWould return an object containing the properties `up`, `down`, `left` and `right` that you could poll just like a Phaser.Key object."
    },
    "removeKey": {
     "!type": "fn(keycode: number)",
     "!doc": "Removes a Key object from the Keyboard manager."
    },
    "createCursorKeys": {
     "!type": "fn() -> ?",
     "!doc": "Creates and returns an object containing 4 hotkeys for Up, Down, Left and Right."
    },
    "start": {
     "!type": "fn()",
     "!doc": "Starts the Keyboard event listeners running (keydown and keyup). They are attached to the window.\nThis is called automatically by Phaser.Input and should not normally be invoked directly."
    },
    "stop": {
     "!type": "fn()",
     "!doc": "Stops the Keyboard event listeners from running (keydown, keyup and keypress). They are removed from the window."
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "Stops the Keyboard event listeners from running (keydown and keyup). They are removed from the window.\nAlso clears all key captures and currently created Key objects."
    },
    "addKeyCapture": {
     "!type": "fn(keycode: number|+array|?)",
     "!doc": "By default when a key is pressed Phaser will not stop the event from propagating up to the browser.\nThere are some keys this can be annoying for, like the arrow keys or space bar, which make the browser window scroll.\nYou can use addKeyCapture to consume the keyboard event for specific keys so it doesn't bubble up to the the browser.\nPass in either a single keycode or an array/hash of keycodes."
    },
    "removeKeyCapture": {
     "!type": "fn(keycode: number)",
     "!doc": "Removes an existing key capture."
    },
    "clearCaptures": {
     "!type": "fn()",
     "!doc": "Clear all set key captures."
    },
    "update": {
     "!type": "fn()",
     "!doc": "Updates all currently defined keys."
    },
    "processKeyDown": {
     "!type": "fn(event: +KeyboardEvent)",
     "!doc": "Process the keydown event."
    },
    "processKeyPress": {
     "!type": "fn(event: +KeyboardEvent)",
     "!doc": "Process the keypress event."
    },
    "processKeyUp": {
     "!type": "fn(event: +KeyboardEvent)",
     "!doc": "Process the keyup event."
    },
    "reset": {
     "!type": "fn(hard: bool)",
     "!doc": "Resets all Keys."
    },
    "downDuration": {
     "!type": "fn(keycode: number, duration: number) -> bool",
     "!doc": "Returns `true` if the Key was pressed down within the `duration` value given, or `false` if it either isn't down,\nor was pressed down longer ago than then given duration."
    },
    "upDuration": {
     "!type": "fn(keycode: number, duration: number) -> bool",
     "!doc": "Returns `true` if the Key was pressed down within the `duration` value given, or `false` if it either isn't down,\nor was pressed down longer ago than then given duration."
    },
    "isDown": {
     "!type": "fn(keycode: number) -> bool",
     "!doc": "Returns true of the key is currently pressed down. Note that it can only detect key presses on the web browser."
    },
    "lastChar": {
     "!type": "string",
     "!doc": "The string value of the most recently pressed key."
    },
    "lastKey": {
     "!type": "+Phaser.Key",
     "!doc": "The most recently pressed Key."
    }
   }
  },
  "Mouse": {
   "!type": "fn(game: +Phaser.Game)",
   "!doc": "The Mouse class is responsible for handling all aspects of mouse interaction with the browser.\n\nIt captures and processes mouse events that happen on the game canvas object.\nIt also adds a single `mouseup` listener to `window` which is used to capture the mouse being released \nwhen not over the game.\n\nYou should not normally access this class directly, but instead use a Phaser.Pointer object \nwhich normalises all game input for you, including accurate button handling.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running game."
    },
    "input": {
     "!type": "+Phaser.Input",
     "!doc": "A reference to the Phaser Input Manager."
    },
    "callbackContext": {
     "!type": "?",
     "!doc": "The context under which callbacks are called."
    },
    "mouseDownCallback": {
     "!type": "fn()",
     "!doc": "A callback that can be fired when the mouse is pressed down."
    },
    "mouseUpCallback": {
     "!type": "fn()",
     "!doc": "A callback that can be fired when the mouse is released from a pressed down state."
    },
    "mouseOutCallback": {
     "!type": "fn()",
     "!doc": "A callback that can be fired when the mouse is no longer over the game canvas."
    },
    "mouseOverCallback": {
     "!type": "fn()",
     "!doc": "A callback that can be fired when the mouse enters the game canvas (usually after a mouseout)."
    },
    "mouseWheelCallback": {
     "!type": "fn()",
     "!doc": "A callback that can be fired when the mousewheel is used."
    },
    "capture": {
     "!type": "bool",
     "!doc": "If true the DOM mouse events will have event.preventDefault applied to them, if false they will propagate fully."
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
     "!type": "bool",
     "!doc": "If the mouse has been Pointer Locked successfully this will be set to true."
    },
    "stopOnGameOut": {
     "!type": "bool",
     "!doc": "If true Pointer.stop will be called if the mouse leaves the game canvas."
    },
    "pointerLock": {
     "!type": "+Phaser.Signal",
     "!doc": "This event is dispatched when the browser enters or leaves pointer lock state."
    },
    "event": {
     "!type": "+MouseEvent|+null"
    },
    "start": {
     "!type": "fn()",
     "!doc": "Starts the event listeners running."
    },
    "onMouseDown": {
     "!type": "fn(event: +MouseEvent)",
     "!doc": "The internal method that handles the mouse down event from the browser."
    },
    "onMouseMove": {
     "!type": "fn(event: +MouseEvent)",
     "!doc": "The internal method that handles the mouse move event from the browser."
    },
    "onMouseUp": {
     "!type": "fn(event: +MouseEvent)",
     "!doc": "The internal method that handles the mouse up event from the browser."
    },
    "onMouseUpGlobal": {
     "!type": "fn(event: +MouseEvent)",
     "!doc": "The internal method that handles the mouse up event from the window."
    },
    "onMouseOut": {
     "!type": "fn(event: +MouseEvent)",
     "!doc": "The internal method that handles the mouse out event from the browser."
    },
    "onMouseOver": {
     "!type": "fn(event: +MouseEvent)",
     "!doc": "The internal method that handles the mouse over event from the browser."
    },
    "onMouseWheel": {
     "!type": "fn(event: +MouseEvent)",
     "!doc": "The internal method that handles the mouse wheel event from the browser."
    },
    "requestPointerLock": {
     "!type": "fn()",
     "!doc": "If the browser supports it you can request that the pointer be locked to the browser window.\nThis is classically known as 'FPS controls', where the pointer can't leave the browser until the user presses an exit key.\nIf the browser successfully enters a locked state the event Phaser.Mouse.pointerLock will be dispatched and the first parameter will be 'true'."
    },
    "pointerLockChange": {
     "!type": "fn(event: +Event)",
     "!doc": "Internal pointerLockChange handler."
    },
    "releasePointerLock": {
     "!type": "fn()",
     "!doc": "Internal release pointer lock handler."
    },
    "stop": {
     "!type": "fn()",
     "!doc": "Stop the event listeners."
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
   "!doc": "The MSPointer class handles Microsoft touch interactions with the game and the resulting Pointer objects.\n\nIt will work only in Internet Explorer 10+ and Windows Store or Windows Phone 8 apps using JavaScript.\nhttp://msdn.microsoft.com/en-us/library/ie/hh673557(v=vs.85).aspx\n\nYou should not normally access this class directly, but instead use a Phaser.Pointer object which \nnormalises all game input for you including accurate button handling.\n\nPlease note that at the current time of writing Phaser does not yet support chorded button interactions:\nhttp://www.w3.org/TR/pointerevents/#chorded-button-interactions",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running game."
    },
    "input": {
     "!type": "+Phaser.Input",
     "!doc": "A reference to the Phaser Input Manager."
    },
    "callbackContext": {
     "!type": "?",
     "!doc": "The context under which callbacks are called (defaults to game)."
    },
    "pointerDownCallback": {
     "!type": "fn()",
     "!doc": "A callback that can be fired on a MSPointerDown event."
    },
    "pointerMoveCallback": {
     "!type": "fn()",
     "!doc": "A callback that can be fired on a MSPointerMove event."
    },
    "pointerUpCallback": {
     "!type": "fn()",
     "!doc": "A callback that can be fired on a MSPointerUp event."
    },
    "capture": {
     "!type": "bool",
     "!doc": "If true the Pointer events will have event.preventDefault applied to them, if false they will propagate fully."
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
     "!type": "fn()",
     "!doc": "Starts the event listeners running."
    },
    "onPointerDown": {
     "!type": "fn(event: +PointerEvent)",
     "!doc": "The function that handles the PointerDown event."
    },
    "onPointerMove": {
     "!type": "fn(event: +PointerEvent)",
     "!doc": "The function that handles the PointerMove event."
    },
    "onPointerUp": {
     "!type": "fn(event: +PointerEvent)",
     "!doc": "The function that handles the PointerUp event."
    },
    "onPointerUpGlobal": {
     "!type": "fn(event: +PointerEvent)",
     "!doc": "The internal method that handles the mouse up event from the window."
    },
    "onPointerOut": {
     "!type": "fn(event: +PointerEvent)",
     "!doc": "The internal method that handles the pointer out event from the browser."
    },
    "stop": {
     "!type": "fn()",
     "!doc": "Stop the event listeners."
    }
   }
  },
  "Pointer": {
   "!type": "fn(game: +Phaser.Game, id: number)",
   "!doc": "A Pointer object is used by the Mouse, Touch and MSPoint managers and represents a single finger on the touch screen.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running game."
    },
    "id": {
     "!type": "number",
     "!doc": "The ID of the Pointer object within the game. Each game can have up to 10 active pointers."
    },
    "type": {
     "!type": "number",
     "!doc": "The const type of this object."
    },
    "exists": {
     "!type": "bool",
     "!doc": "A Pointer object that exists is allowed to be checked for physics collisions and overlaps."
    },
    "identifier": {
     "!type": "number",
     "!doc": "The identifier property of the Pointer as set by the DOM event when this Pointer is started."
    },
    "pointerId": {
     "!type": "number",
     "!doc": "The pointerId property of the Pointer as set by the DOM event when this Pointer is started. The browser can and will recycle this value."
    },
    "target": {
     "!type": "+any",
     "!doc": "The target property of the Pointer as set by the DOM event when this Pointer is started."
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
     "!type": "bool",
     "!doc": "true if the Pointer is over the game canvas, otherwise false."
    },
    "clientX": {
     "!type": "number",
     "!doc": "The horizontal coordinate of the Pointer within the application's client area at which the event occurred (as opposed to the coordinates within the page)."
    },
    "clientY": {
     "!type": "number",
     "!doc": "The vertical coordinate of the Pointer within the application's client area at which the event occurred (as opposed to the coordinates within the page)."
    },
    "pageX": {
     "!type": "number",
     "!doc": "The horizontal coordinate of the Pointer relative to whole document."
    },
    "pageY": {
     "!type": "number",
     "!doc": "The vertical coordinate of the Pointer relative to whole document."
    },
    "screenX": {
     "!type": "number",
     "!doc": "The horizontal coordinate of the Pointer relative to the screen."
    },
    "screenY": {
     "!type": "number",
     "!doc": "The vertical coordinate of the Pointer relative to the screen."
    },
    "rawMovementX": {
     "!type": "number",
     "!doc": "The horizontal raw relative movement of the Pointer in pixels since last event."
    },
    "rawMovementY": {
     "!type": "number",
     "!doc": "The vertical raw relative movement of the Pointer in pixels since last event."
    },
    "movementX": {
     "!type": "number",
     "!doc": "The horizontal processed relative movement of the Pointer in pixels since last event."
    },
    "movementY": {
     "!type": "number",
     "!doc": "The vertical processed relative movement of the Pointer in pixels since last event."
    },
    "x": {
     "!type": "number",
     "!doc": "The horizontal coordinate of the Pointer. This value is automatically scaled based on the game scale."
    },
    "y": {
     "!type": "number",
     "!doc": "The vertical coordinate of the Pointer. This value is automatically scaled based on the game scale."
    },
    "isMouse": {
     "!type": "bool",
     "!doc": "If the Pointer is a mouse or pen / stylus this is true, otherwise false."
    },
    "isDown": {
     "!type": "bool"
    },
    "isUp": {
     "!type": "bool"
    },
    "timeDown": {
     "!type": "number",
     "!doc": "A timestamp representing when the Pointer first touched the touchscreen."
    },
    "timeUp": {
     "!type": "number",
     "!doc": "A timestamp representing when the Pointer left the touchscreen."
    },
    "previousTapTime": {
     "!type": "number",
     "!doc": "A timestamp representing when the Pointer was last tapped or clicked."
    },
    "totalTouches": {
     "!type": "number",
     "!doc": "The total number of times this Pointer has been touched to the touchscreen."
    },
    "msSinceLastClick": {
     "!type": "number",
     "!doc": "The number of milliseconds since the last click or touch event."
    },
    "targetObject": {
     "!type": "+any",
     "!doc": "The Game Object this Pointer is currently over / touching / dragging."
    },
    "active": {
     "!type": "bool",
     "!doc": "An active pointer is one that is currently pressed down on the display. A Mouse is always active."
    },
    "dirty": {
     "!type": "bool",
     "!doc": "A dirty pointer needs to re-poll any interactive objects it may have been over, regardless if it has moved or not."
    },
    "position": {
     "!type": "+Phaser.Point",
     "!doc": "A Phaser.Point object containing the current x/y values of the pointer on the display."
    },
    "positionDown": {
     "!type": "+Phaser.Point",
     "!doc": "A Phaser.Point object containing the x/y values of the pointer when it was last in a down state on the display."
    },
    "positionUp": {
     "!type": "+Phaser.Point",
     "!doc": "A Phaser.Point object containing the x/y values of the pointer when it was last released."
    },
    "circle": {
     "!type": "+Phaser.Circle"
    },
    "resetButtons": {
     "!type": "fn()",
     "!doc": "Resets the states of all the button booleans."
    },
    "updateButtons": {
     "!type": "fn(event: +MouseEvent)",
     "!doc": "Called when the event.buttons property changes from zero.\nContains a button bitmask."
    },
    "start": {
     "!type": "fn(event: +any)",
     "!doc": "Called when the Pointer is pressed onto the touchscreen."
    },
    "update": {
     "!type": "fn()",
     "!doc": "Called by the Input Manager."
    },
    "move": {
     "!type": "fn(event: +MouseEvent|+PointerEvent|+TouchEvent, fromClick: bool)",
     "!doc": "Called when the Pointer is moved."
    },
    "processInteractiveObjects": {
     "!type": "fn(fromClick: bool) -> bool",
     "!doc": "Process all interactive objects to find out which ones were updated in the recent Pointer move."
    },
    "leave": {
     "!type": "fn(event: +MouseEvent|+PointerEvent|+TouchEvent)",
     "!doc": "Called when the Pointer leaves the target area."
    },
    "stop": {
     "!type": "fn(event: +MouseEvent|+PointerEvent|+TouchEvent)",
     "!doc": "Called when the Pointer leaves the touchscreen."
    },
    "justPressed": {
     "!type": "fn(duration: number) -> bool",
     "!doc": "The Pointer is considered justPressed if the time it was pressed onto the touchscreen or clicked is less than justPressedRate.\nNote that calling justPressed doesn't reset the pressed status of the Pointer, it will return `true` for as long as the duration is valid.\nIf you wish to check if the Pointer was pressed down just once then see the Sprite.events.onInputDown event."
    },
    "justReleased": {
     "!type": "fn(duration: number) -> bool",
     "!doc": "The Pointer is considered justReleased if the time it left the touchscreen is less than justReleasedRate.\nNote that calling justReleased doesn't reset the pressed status of the Pointer, it will return `true` for as long as the duration is valid.\nIf you wish to check if the Pointer was released just once then see the Sprite.events.onInputUp event."
    },
    "addClickTrampoline": {
     "!type": "fn(name: string, callback: fn(), callbackContext: ?, callbackArgs: [?]|+null)",
     "!doc": "Add a click trampoline to this pointer.\n\nA click trampoline is a callback that is run on the DOM 'click' event; this is primarily\nneeded with certain browsers (ie. IE11) which restrict some actions like requestFullscreen\nto the DOM 'click' event and rejects it for 'pointer*' and 'mouse*' events.\n\nThis is used internally by the ScaleManager; click trampoline usage is uncommon.\nClick trampolines can only be added to pointers that are currently down."
    },
    "reset": {
     "!type": "fn()",
     "!doc": "Resets the Pointer properties. Called by InputManager.reset when you perform a State change."
    },
    "resetMovement": {
     "!type": "fn()",
     "!doc": "Resets the movementX and movementY properties. Use in your update handler after retrieving the values."
    },
    "duration": {
     "!type": "number"
    },
    "worldX": {
     "!type": "number",
     "!doc": "The X value of this Pointer in world coordinates based on the world camera."
    },
    "worldY": {
     "!type": "number",
     "!doc": "The Y value of this Pointer in world coordinates based on the world camera."
    }
   },
   "NO_BUTTON": {
    "!type": "number",
    "!doc": "No buttons at all."
   },
   "LEFT_BUTTON": {
    "!type": "number",
    "!doc": "The Left Mouse button, or in PointerEvent devices a Touch contact or Pen contact."
   },
   "RIGHT_BUTTON": {
    "!type": "number",
    "!doc": "The Right Mouse button, or in PointerEvent devices a Pen contact with a barrel button."
   },
   "MIDDLE_BUTTON": {
    "!type": "number",
    "!doc": "The Middle Mouse button."
   },
   "BACK_BUTTON": {
    "!type": "number",
    "!doc": "The X1 button. This is typically the mouse Back button, but is often reconfigured.\nOn Linux (GTK) this is unsupported. On Windows if advanced pointer software (such as IntelliPoint) is installed this doesn't register."
   },
   "FORWARD_BUTTON": {
    "!type": "number",
    "!doc": "The X2 button. This is typically the mouse Forward button, but is often reconfigured.\nOn Linux (GTK) this is unsupported. On Windows if advanced pointer software (such as IntelliPoint) is installed this doesn't register."
   },
   "ERASER_BUTTON": {
    "!type": "number",
    "!doc": "The Eraser pen button on PointerEvent supported devices only."
   }
  },
  "SinglePad": {
   "!type": "fn(game: +Phaser.Game, padParent: ?)",
   "!doc": "A single Phaser Gamepad",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "Local reference to game."
    },
    "index": {
     "!type": "number",
     "!doc": "The gamepad index as per browsers data"
    },
    "connected": {
     "!type": "bool",
     "!doc": "Whether or not this particular gamepad is connected or not."
    },
    "callbackContext": {
     "!type": "?",
     "!doc": "The context under which the callbacks are run."
    },
    "onConnectCallback": {
     "!type": "fn()",
     "!doc": "This callback is invoked every time this gamepad is connected"
    },
    "onDisconnectCallback": {
     "!type": "fn()",
     "!doc": "This callback is invoked every time this gamepad is disconnected"
    },
    "onDownCallback": {
     "!type": "fn()",
     "!doc": "This callback is invoked every time a button is pressed down."
    },
    "onUpCallback": {
     "!type": "fn()",
     "!doc": "This callback is invoked every time a gamepad button is released."
    },
    "onAxisCallback": {
     "!type": "fn()",
     "!doc": "This callback is invoked every time an axis is changed."
    },
    "onFloatCallback": {
     "!type": "fn()",
     "!doc": "This callback is invoked every time a button is changed to a value where value > 0 and value < 1."
    },
    "deadZone": {
     "!type": "number",
     "!doc": "Dead zone for axis feedback - within this value you won't trigger updates."
    },
    "addCallbacks": {
     "!type": "fn(context: ?, callbacks: ?)",
     "!doc": "Add callbacks to this Gamepad to handle connect / disconnect / button down / button up / axis change / float value buttons."
    },
    "getButton": {
     "!type": "fn(buttonCode: number) -> +Phaser.DeviceButton",
     "!doc": "Gets a DeviceButton object from this controller to be stored and referenced locally.\nThe DeviceButton object can then be polled, have events attached to it, etc."
    },
    "pollStatus": {
     "!type": "fn()",
     "!doc": "Main update function called by Phaser.Gamepad."
    },
    "connect": {
     "!type": "fn(rawPad: ?)",
     "!doc": "Gamepad connect function, should be called by Phaser.Gamepad."
    },
    "disconnect": {
     "!type": "fn()",
     "!doc": "Gamepad disconnect function, should be called by Phaser.Gamepad."
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "Destroys this object and associated callback references."
    },
    "processAxisChange": {
     "!type": "fn(axisState: ?)",
     "!doc": "Handles changes in axis."
    },
    "processButtonDown": {
     "!type": "fn(buttonCode: number, value: ?)",
     "!doc": "Handles button down press."
    },
    "processButtonUp": {
     "!type": "fn(buttonCode: number, value: ?)",
     "!doc": "Handles button release."
    },
    "processButtonFloat": {
     "!type": "fn(buttonCode: number, value: ?)",
     "!doc": "Handles buttons with floating values (like analog buttons that acts almost like an axis but still registers like a button)"
    },
    "axis": {
     "!type": "fn(axisCode: number) -> number",
     "!doc": "Returns value of requested axis."
    },
    "isDown": {
     "!type": "fn(buttonCode: number) -> bool",
     "!doc": "Returns true if the button is pressed down."
    },
    "isUp": {
     "!type": "fn(buttonCode: number) -> bool",
     "!doc": "Returns true if the button is not currently pressed."
    },
    "justReleased": {
     "!type": "fn(buttonCode: number, duration: number) -> bool",
     "!doc": "Returns the \"just released\" state of a button from this gamepad. Just released is considered as being true if the button was released within the duration given (default 250ms)."
    },
    "justPressed": {
     "!type": "fn(buttonCode: number, duration: number) -> bool",
     "!doc": "Returns the \"just pressed\" state of a button from this gamepad. Just pressed is considered true if the button was pressed down within the duration given (default 250ms)."
    },
    "buttonValue": {
     "!type": "fn(buttonCode: number) -> number",
     "!doc": "Returns the value of a gamepad button. Intended mainly for cases when you have floating button values, for example\nanalog trigger buttons on the XBOX 360 controller."
    },
    "reset": {
     "!type": "fn()",
     "!doc": "Reset all buttons/axes of this gamepad."
    }
   }
  },
  "Touch": {
   "!type": "fn(game: +Phaser.Game)",
   "!doc": "Phaser.Touch handles touch events with your game. Note: Android 2.x only supports 1 touch event at once, no multi-touch.\n\nYou should not normally access this class directly, but instead use a Phaser.Pointer object which normalises all game input for you.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running game."
    },
    "enabled": {
     "!type": "bool"
    },
    "touchLockCallbacks": {
     "!type": "+array"
    },
    "callbackContext": {
     "!type": "?",
     "!doc": "The context under which callbacks are called."
    },
    "touchStartCallback": {
     "!type": "fn()",
     "!doc": "A callback that can be fired on a touchStart event."
    },
    "touchMoveCallback": {
     "!type": "fn()",
     "!doc": "A callback that can be fired on a touchMove event."
    },
    "touchEndCallback": {
     "!type": "fn()",
     "!doc": "A callback that can be fired on a touchEnd event."
    },
    "touchEnterCallback": {
     "!type": "fn()",
     "!doc": "A callback that can be fired on a touchEnter event."
    },
    "touchLeaveCallback": {
     "!type": "fn()",
     "!doc": "A callback that can be fired on a touchLeave event."
    },
    "touchCancelCallback": {
     "!type": "fn()",
     "!doc": "A callback that can be fired on a touchCancel event."
    },
    "preventDefault": {
     "!type": "bool",
     "!doc": "If true the TouchEvent will have prevent.default called on it."
    },
    "event": {
     "!type": "+TouchEvent",
     "!doc": "The browser touch DOM event. Will be set to null if no touch event has ever been received."
    },
    "start": {
     "!type": "fn()",
     "!doc": "Starts the event listeners running."
    },
    "consumeTouchMove": {
     "!type": "fn()",
     "!doc": "Consumes all touchmove events on the document (only enable this if you know you need it!)."
    },
    "addTouchLockCallback": {
     "!type": "fn(callback: fn(), context: ?)",
     "!doc": "Adds a callback that is fired when a browser touchstart event is received.\n\nThis is used internally to handle audio and video unlocking on mobile devices.\n\nIf the callback returns 'true' then the callback is automatically deleted once invoked.\n\nThe callback is added to the Phaser.Touch.touchLockCallbacks array and should be removed with Phaser.Touch.removeTouchLockCallback."
    },
    "removeTouchLockCallback": {
     "!type": "fn(callback: fn(), context: ?) -> bool",
     "!doc": "Removes the callback at the defined index from the Phaser.Touch.touchLockCallbacks array"
    },
    "onTouchStart": {
     "!type": "fn(event: +TouchEvent)",
     "!doc": "The internal method that handles the touchstart event from the browser."
    },
    "onTouchCancel": {
     "!type": "fn(event: +TouchEvent)",
     "!doc": "Touch cancel - touches that were disrupted (perhaps by moving into a plugin or browser chrome).\nOccurs for example on iOS when you put down 4 fingers and the app selector UI appears."
    },
    "onTouchEnter": {
     "!type": "fn(event: +TouchEvent)",
     "!doc": "For touch enter and leave its a list of the touch points that have entered or left the target.\nDoesn't appear to be supported by most browsers on a canvas element yet."
    },
    "onTouchLeave": {
     "!type": "fn(event: +TouchEvent)",
     "!doc": "For touch enter and leave its a list of the touch points that have entered or left the target.\nDoesn't appear to be supported by most browsers on a canvas element yet."
    },
    "onTouchMove": {
     "!type": "fn(event: +TouchEvent)",
     "!doc": "The handler for the touchmove events."
    },
    "onTouchEnd": {
     "!type": "fn(event: +TouchEvent)",
     "!doc": "The handler for the touchend events."
    },
    "stop": {
     "!type": "fn()",
     "!doc": "Stop the event listeners."
    }
   }
  },
  "Cache": {
   "!type": "fn(game: +Phaser.Game)",
   "!doc": "Phaser has one single cache in which it stores all assets.\n\nThe cache is split up into sections, such as images, sounds, video, json, etc. All assets are stored using\na unique string-based key as their identifier. Assets stored in different areas of the cache can have the\nsame key, for example 'playerWalking' could be used as the key for both a sprite sheet and an audio file,\nbecause they are unique data types.\n\nThe cache is automatically populated by the Phaser.Loader. When you use the loader to pull in external assets\nsuch as images they are automatically placed into their respective cache. Most common Game Objects, such as\nSprites and Videos automatically query the cache to extract the assets they need on instantiation.\n\nYou can access the cache from within a State via `this.cache`. From here you can call any public method it has,\nincluding adding new entries to it, deleting them or querying them.\n\nUnderstand that almost without exception when you get an item from the cache it will return a reference to the\nitem stored in the cache, not a copy of it. Therefore if you retrieve an item and then modify it, the original\nobject in the cache will also be updated, even if you don't put it back into the cache again.\n\nBy default when you change State the cache is _not_ cleared, although there is an option to clear it should\nyour game require it. In a typical game set-up the cache is populated once after the main game has loaded and\nthen used as an asset store.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "Local reference to game."
    },
    "autoResolveURL": {
     "!type": "bool"
    },
    "onSoundUnlock": {
     "!type": "+Phaser.Signal",
     "!doc": "This event is dispatched when the sound system is unlocked via a touch event on cellular devices."
    },
    "addCanvas": {
     "!type": "fn(key: string, canvas: +HTMLCanvasElement, context: +CanvasRenderingContext2D)",
     "!doc": "Add a new canvas object in to the cache."
    },
    "addImage": {
     "!type": "fn(key: string, url: string, data: ?) -> ?",
     "!doc": "Adds an Image file into the Cache. The file must have already been loaded, typically via Phaser.Loader, but can also have been loaded into the DOM.\nIf an image already exists in the cache with the same key then it is removed and destroyed, and the new image inserted in its place."
    },
    "addDefaultImage": {
     "!type": "fn()",
     "!doc": "Adds a default image to be used in special cases such as WebGL Filters.\nIt uses the special reserved key of `__default`.\nThis method is called automatically when the Cache is created.\nThis image is skipped when `Cache.destroy` is called due to its internal requirements."
    },
    "addMissingImage": {
     "!type": "fn()",
     "!doc": "Adds an image to be used when a key is wrong / missing.\nIt uses the special reserved key of `__missing`.\nThis method is called automatically when the Cache is created.\nThis image is skipped when `Cache.destroy` is called due to its internal requirements."
    },
    "addSound": {
     "!type": "fn(key: string, url: string, data: ?, webAudio: bool, audioTag: bool)",
     "!doc": "Adds a Sound file into the Cache. The file must have already been loaded, typically via Phaser.Loader."
    },
    "addText": {
     "!type": "fn(key: string, url: string, data: ?)",
     "!doc": "Add a new text data."
    },
    "addPhysicsData": {
     "!type": "fn(key: string, url: string, JSONData: ?, format: number)",
     "!doc": "Add a new physics data object to the Cache."
    },
    "addTilemap": {
     "!type": "fn(key: string, url: string, mapData: ?, format: number)",
     "!doc": "Add a new tilemap to the Cache."
    },
    "addBinary": {
     "!type": "fn(key: string, binaryData: ?)",
     "!doc": "Add a binary object in to the cache."
    },
    "addBitmapData": {
     "!type": "fn(key: string, bitmapData: +Phaser.BitmapData, frameData: +Phaser.FrameData|+null) -> +Phaser.BitmapData",
     "!doc": "Add a BitmapData object to the cache."
    },
    "addBitmapFont": {
     "!type": "fn(key: string, url: string, data: ?, atlasData: ?, xSpacing: number, ySpacing: number)",
     "!doc": "Add a new Bitmap Font to the Cache."
    },
    "addJSON": {
     "!type": "fn(key: string, url: string, data: ?)",
     "!doc": "Add a new json object into the cache."
    },
    "addXML": {
     "!type": "fn(key: string, url: string, data: ?)",
     "!doc": "Add a new xml object into the cache."
    },
    "addVideo": {
     "!type": "fn(key: string, url: string, data: ?, isBlob: bool)",
     "!doc": "Adds a Video file into the Cache. The file must have already been loaded, typically via Phaser.Loader."
    },
    "addShader": {
     "!type": "fn(key: string, url: string, data: ?)",
     "!doc": "Adds a Fragment Shader in to the Cache. The file must have already been loaded, typically via Phaser.Loader."
    },
    "addRenderTexture": {
     "!type": "fn(key: string, texture: +Phaser.RenderTexture)",
     "!doc": "Add a new Phaser.RenderTexture in to the cache."
    },
    "addSpriteSheet": {
     "!type": "fn(key: string, url: string, data: ?, frameWidth: number, frameHeight: number, frameMax: number, margin: number, spacing: number)",
     "!doc": "Add a new sprite sheet in to the cache."
    },
    "addTextureAtlas": {
     "!type": "fn(key: string, url: string, data: ?, atlasData: ?, format: number)",
     "!doc": "Add a new texture atlas to the Cache."
    },
    "reloadSound": {
     "!type": "fn(key: string)",
     "!doc": "Reload a Sound file from the server."
    },
    "reloadSoundComplete": {
     "!type": "fn(key: string)",
     "!doc": "Fires the onSoundUnlock event when the sound has completed reloading."
    },
    "updateSound": {
     "!type": "fn(key: string)",
     "!doc": "Updates the sound object in the cache."
    },
    "decodedSound": {
     "!type": "fn(key: string, data: ?)",
     "!doc": "Add a new decoded sound."
    },
    "isSoundDecoded": {
     "!type": "fn(key: string) -> bool",
     "!doc": "Check if the given sound has finished decoding."
    },
    "isSoundReady": {
     "!type": "fn(key: string) -> bool",
     "!doc": "Check if the given sound is ready for playback.\nA sound is considered ready when it has finished decoding and the device is no longer touch locked."
    },
    "checkKey": {
     "!type": "fn(cache: number, key: string) -> bool",
     "!doc": "Checks if a key for the given cache object type exists."
    },
    "checkURL": {
     "!type": "fn(url: string) -> bool",
     "!doc": "Checks if the given URL has been loaded into the Cache.\nThis method will only work if Cache.autoResolveURL was set to `true` before any preloading took place.\nThe method will make a DOM src call to the URL given, so please be aware of this for certain file types, such as Sound files on Firefox\nwhich may cause double-load instances."
    },
    "checkCanvasKey": {
     "!type": "fn(key: string) -> bool",
     "!doc": "Checks if the given key exists in the Canvas Cache."
    },
    "checkImageKey": {
     "!type": "fn(key: string) -> bool",
     "!doc": "Checks if the given key exists in the Image Cache. Note that this also includes Texture Atlases, Sprite Sheets and Retro Fonts."
    },
    "checkTextureKey": {
     "!type": "fn(key: string) -> bool",
     "!doc": "Checks if the given key exists in the Texture Cache."
    },
    "checkSoundKey": {
     "!type": "fn(key: string) -> bool",
     "!doc": "Checks if the given key exists in the Sound Cache."
    },
    "checkTextKey": {
     "!type": "fn(key: string) -> bool",
     "!doc": "Checks if the given key exists in the Text Cache."
    },
    "checkPhysicsKey": {
     "!type": "fn(key: string) -> bool",
     "!doc": "Checks if the given key exists in the Physics Cache."
    },
    "checkTilemapKey": {
     "!type": "fn(key: string) -> bool",
     "!doc": "Checks if the given key exists in the Tilemap Cache."
    },
    "checkBinaryKey": {
     "!type": "fn(key: string) -> bool",
     "!doc": "Checks if the given key exists in the Binary Cache."
    },
    "checkBitmapDataKey": {
     "!type": "fn(key: string) -> bool",
     "!doc": "Checks if the given key exists in the BitmapData Cache."
    },
    "checkBitmapFontKey": {
     "!type": "fn(key: string) -> bool",
     "!doc": "Checks if the given key exists in the BitmapFont Cache."
    },
    "checkJSONKey": {
     "!type": "fn(key: string) -> bool",
     "!doc": "Checks if the given key exists in the JSON Cache."
    },
    "checkXMLKey": {
     "!type": "fn(key: string) -> bool",
     "!doc": "Checks if the given key exists in the XML Cache."
    },
    "checkVideoKey": {
     "!type": "fn(key: string) -> bool",
     "!doc": "Checks if the given key exists in the Video Cache."
    },
    "checkShaderKey": {
     "!type": "fn(key: string) -> bool",
     "!doc": "Checks if the given key exists in the Fragment Shader Cache."
    },
    "checkRenderTextureKey": {
     "!type": "fn(key: string) -> bool",
     "!doc": "Checks if the given key exists in the Render Texture Cache."
    },
    "getItem": {
     "!type": "fn(key: string, cache: number, method: string, property: string) -> ?",
     "!doc": "Get an item from a cache based on the given key and property.\n\nThis method is mostly used internally by other Cache methods such as `getImage` but is exposed\npublicly for your own use as well."
    },
    "getCanvas": {
     "!type": "fn(key: string) -> ?",
     "!doc": "Gets a Canvas object from the cache.\n\nThe object is looked-up based on the key given.\n\nNote: If the object cannot be found a `console.warn` message is displayed."
    },
    "getImage": {
     "!type": "fn(key: string, full: bool) -> +Image",
     "!doc": "Gets a Image object from the cache. This returns a DOM Image object, not a Phaser.Image object.\n\nThe object is looked-up based on the key given.\n\nNote: If the object cannot be found a `console.warn` message is displayed.\n\nOnly the Image cache is searched, which covers images loaded via Loader.image, Sprite Sheets and Texture Atlases.\n\nIf you need the image used by a bitmap font or similar then please use those respective 'get' methods."
    },
    "getTextureFrame": {
     "!type": "fn(key: string) -> +Phaser.Frame",
     "!doc": "Get a single texture frame by key.\n\nYou'd only do this to get the default Frame created for a non-atlas / spritesheet image."
    },
    "getSound": {
     "!type": "fn(key: string) -> +Phaser.Sound",
     "!doc": "Gets a Phaser.Sound object from the cache.\n\nThe object is looked-up based on the key given.\n\nNote: If the object cannot be found a `console.warn` message is displayed."
    },
    "getSoundData": {
     "!type": "fn(key: string) -> ?",
     "!doc": "Gets a raw Sound data object from the cache.\n\nThe object is looked-up based on the key given.\n\nNote: If the object cannot be found a `console.warn` message is displayed."
    },
    "getText": {
     "!type": "fn(key: string) -> ?",
     "!doc": "Gets a Text object from the cache.\n\nThe object is looked-up based on the key given.\n\nNote: If the object cannot be found a `console.warn` message is displayed."
    },
    "getPhysicsData": {
     "!type": "fn(key: string, object: string, fixtureKey: string) -> ?",
     "!doc": "Gets a Physics Data object from the cache.\n\nThe object is looked-up based on the key given.\n\nNote: If the object cannot be found a `console.warn` message is displayed.\n\nYou can get either the entire data set, a single object or a single fixture of an object from it."
    },
    "getTilemapData": {
     "!type": "fn(key: string) -> ?",
     "!doc": "Gets a raw Tilemap data object from the cache. This will be in either CSV or JSON format.\n\nThe object is looked-up based on the key given.\n\nNote: If the object cannot be found a `console.warn` message is displayed."
    },
    "getBinary": {
     "!type": "fn(key: string) -> ?",
     "!doc": "Gets a binary object from the cache.\n\nThe object is looked-up based on the key given.\n\nNote: If the object cannot be found a `console.warn` message is displayed."
    },
    "getBitmapData": {
     "!type": "fn(key: string) -> +Phaser.BitmapData",
     "!doc": "Gets a BitmapData object from the cache.\n\nThe object is looked-up based on the key given.\n\nNote: If the object cannot be found a `console.warn` message is displayed."
    },
    "getBitmapFont": {
     "!type": "fn(key: string) -> +Phaser.BitmapFont",
     "!doc": "Gets a Bitmap Font object from the cache.\n\nThe object is looked-up based on the key given.\n\nNote: If the object cannot be found a `console.warn` message is displayed."
    },
    "getJSON": {
     "!type": "fn(key: string, clone: bool) -> ?",
     "!doc": "Gets a JSON object from the cache.\n\nThe object is looked-up based on the key given.\n\nNote: If the object cannot be found a `console.warn` message is displayed.\n\nYou can either return the object by reference (the default), or return a clone\nof it by setting the `clone` argument to `true`."
    },
    "getXML": {
     "!type": "fn(key: string) -> ?",
     "!doc": "Gets an XML object from the cache.\n\nThe object is looked-up based on the key given.\n\nNote: If the object cannot be found a `console.warn` message is displayed."
    },
    "getVideo": {
     "!type": "fn(key: string) -> +Phaser.Video",
     "!doc": "Gets a Phaser.Video object from the cache.\n\nThe object is looked-up based on the key given.\n\nNote: If the object cannot be found a `console.warn` message is displayed."
    },
    "getShader": {
     "!type": "fn(key: string) -> string",
     "!doc": "Gets a fragment shader object from the cache.\n\nThe object is looked-up based on the key given.\n\nNote: If the object cannot be found a `console.warn` message is displayed."
    },
    "getRenderTexture": {
     "!type": "fn(key: string) -> ?",
     "!doc": "Gets a RenderTexture object from the cache.\n\nThe object is looked-up based on the key given.\n\nNote: If the object cannot be found a `console.warn` message is displayed."
    },
    "getBaseTexture": {
     "!type": "fn(key: string, cache: number) -> +PIXI.BaseTexture",
     "!doc": "Gets a PIXI.BaseTexture by key from the given Cache."
    },
    "getFrame": {
     "!type": "fn(key: string, cache: number) -> +Phaser.Frame",
     "!doc": "Get a single frame by key. You'd only do this to get the default Frame created for a non-atlas/spritesheet image."
    },
    "getFrameCount": {
     "!type": "fn(key: string, cache: number) -> number",
     "!doc": "Get the total number of frames contained in the FrameData object specified by the given key."
    },
    "getFrameData": {
     "!type": "fn(key: string, cache: number) -> +Phaser.FrameData",
     "!doc": "Gets a Phaser.FrameData object from the Image Cache.\n\nThe object is looked-up based on the key given.\n\nNote: If the object cannot be found a `console.warn` message is displayed."
    },
    "hasFrameData": {
     "!type": "fn(key: string, cache: number) -> bool",
     "!doc": "Check if the FrameData for the given key exists in the Image Cache."
    },
    "updateFrameData": {
     "!type": "fn(key: string, frameData: number, cache: number)",
     "!doc": "Replaces a set of frameData with a new Phaser.FrameData object."
    },
    "getFrameByIndex": {
     "!type": "fn(key: string, index: number, cache: number) -> +Phaser.Frame",
     "!doc": "Get a single frame out of a frameData set by key."
    },
    "getFrameByName": {
     "!type": "fn(key: string, name: string, cache: number) -> +Phaser.Frame",
     "!doc": "Get a single frame out of a frameData set by key."
    },
    "getPixiTexture": {
     "!type": "fn(key: string) -> +PIXI.Texture",
     "!doc": "Gets a PIXI.Texture by key from the PIXI.TextureCache.\n\nIf the texture isn't found in the cache, then it searches the Phaser Image Cache and\ncreates a new PIXI.Texture object which is then returned."
    },
    "getPixiBaseTexture": {
     "!type": "fn(key: string) -> +PIXI.BaseTexture",
     "!doc": "Gets a PIXI.BaseTexture by key from the PIXI.BaseTextureCache.\n\nIf the texture isn't found in the cache, then it searches the Phaser Image Cache."
    },
    "getURL": {
     "!type": "fn(url: string) -> ?",
     "!doc": "Get a cached object by the URL.\nThis only returns a value if you set Cache.autoResolveURL to `true` *before* starting the preload of any assets.\nBe aware that every call to this function makes a DOM src query, so use carefully and double-check for implications in your target browsers/devices."
    },
    "getKeys": {
     "!type": "fn(cache: number) -> [?]",
     "!doc": "Gets all keys used in the requested Cache."
    },
    "removeCanvas": {
     "!type": "fn(key: string)",
     "!doc": "Removes a canvas from the cache.\n\nNote that this only removes it from the Phaser.Cache. If you still have references to the data elsewhere\nthen it will persist in memory."
    },
    "removeImage": {
     "!type": "fn(key: string, removeFromPixi: bool)",
     "!doc": "Removes an image from the cache.\n\nYou can optionally elect to destroy it as well. This calls BaseTexture.destroy on it.\n\nNote that this only removes it from the Phaser and PIXI Caches. If you still have references to the data elsewhere\nthen it will persist in memory."
    },
    "removeSound": {
     "!type": "fn(key: string)",
     "!doc": "Removes a sound from the cache.\n\nIf any `Phaser.Sound` objects use the audio file in the cache that you remove with this method, they will\n_automatically_ destroy themselves. If you wish to have full control over when Sounds are destroyed then\nyou must finish your house-keeping and destroy them all yourself first, before calling this method.\n\nNote that this only removes it from the Phaser.Cache. If you still have references to the data elsewhere\nthen it will persist in memory."
    },
    "removeText": {
     "!type": "fn(key: string)",
     "!doc": "Removes a text file from the cache.\n\nNote that this only removes it from the Phaser.Cache. If you still have references to the data elsewhere\nthen it will persist in memory."
    },
    "removePhysics": {
     "!type": "fn(key: string)",
     "!doc": "Removes a physics data file from the cache.\n\nNote that this only removes it from the Phaser.Cache. If you still have references to the data elsewhere\nthen it will persist in memory."
    },
    "removeTilemap": {
     "!type": "fn(key: string)",
     "!doc": "Removes a tilemap from the cache.\n\nNote that this only removes it from the Phaser.Cache. If you still have references to the data elsewhere\nthen it will persist in memory."
    },
    "removeBinary": {
     "!type": "fn(key: string)",
     "!doc": "Removes a binary file from the cache.\n\nNote that this only removes it from the Phaser.Cache. If you still have references to the data elsewhere\nthen it will persist in memory."
    },
    "removeBitmapData": {
     "!type": "fn(key: string)",
     "!doc": "Removes a bitmap data from the cache.\n\nNote that this only removes it from the Phaser.Cache. If you still have references to the data elsewhere\nthen it will persist in memory."
    },
    "removeBitmapFont": {
     "!type": "fn(key: string)",
     "!doc": "Removes a bitmap font from the cache.\n\nNote that this only removes it from the Phaser.Cache. If you still have references to the data elsewhere\nthen it will persist in memory."
    },
    "removeJSON": {
     "!type": "fn(key: string)",
     "!doc": "Removes a json object from the cache.\n\nNote that this only removes it from the Phaser.Cache. If you still have references to the data elsewhere\nthen it will persist in memory."
    },
    "removeXML": {
     "!type": "fn(key: string)",
     "!doc": "Removes a xml object from the cache.\n\nNote that this only removes it from the Phaser.Cache. If you still have references to the data elsewhere\nthen it will persist in memory."
    },
    "removeVideo": {
     "!type": "fn(key: string)",
     "!doc": "Removes a video from the cache.\n\nNote that this only removes it from the Phaser.Cache. If you still have references to the data elsewhere\nthen it will persist in memory."
    },
    "removeShader": {
     "!type": "fn(key: string)",
     "!doc": "Removes a shader from the cache.\n\nNote that this only removes it from the Phaser.Cache. If you still have references to the data elsewhere\nthen it will persist in memory."
    },
    "removeRenderTexture": {
     "!type": "fn(key: string)",
     "!doc": "Removes a Render Texture from the cache.\n\nNote that this only removes it from the Phaser.Cache. If you still have references to the data elsewhere\nthen it will persist in memory."
    },
    "removeSpriteSheet": {
     "!type": "fn(key: string)",
     "!doc": "Removes a Sprite Sheet from the cache.\n\nNote that this only removes it from the Phaser.Cache. If you still have references to the data elsewhere\nthen it will persist in memory."
    },
    "removeTextureAtlas": {
     "!type": "fn(key: string)",
     "!doc": "Removes a Texture Atlas from the cache.\n\nNote that this only removes it from the Phaser.Cache. If you still have references to the data elsewhere\nthen it will persist in memory."
    },
    "clearGLTextures": {
     "!type": "fn()",
     "!doc": "Empties out all of the GL Textures from Images stored in the cache.\nThis is called automatically when the WebGL context is lost and then restored."
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "Clears the cache. Removes every local cache object reference.\nIf an object in the cache has a `destroy` method it will also be called."
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
   "!doc": "The Loader handles loading all external content such as Images, Sounds, Texture Atlases and data files.\n\nThe loader uses a combination of tag loading (eg. Image elements) and XHR and provides progress and completion callbacks.\n\nParallel loading (see {@link #enableParallel}) is supported and enabled by default.\nLoad-before behavior of parallel resources is controlled by synchronization points as discussed in {@link #withSyncPoint}.\n\nTexture Atlases can be created with tools such as [Texture Packer](https://www.codeandweb.com/texturepacker/phaser) and\n[Shoebox](http://renderhjs.net/shoebox/)",
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
    "preloadSprite": {
     "!type": "?"
    },
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
     "!type": "fn(sprite: +Phaser.Sprite|+Phaser.Image, direction: number)",
     "!doc": "Set a Sprite to be a \"preload\" sprite by passing it to this method.\n\nA \"preload\" sprite will have its width or height crop adjusted based on the percentage of the loader in real-time.\nThis allows you to easily make loading bars for games.\n\nThe sprite will automatically be made visible when calling this."
    },
    "resize": {
     "!type": "fn()",
     "!doc": "Called automatically by ScaleManager when the game resizes in RESIZE scalemode.\n\nThis can be used to adjust the preloading sprite size, eg."
    },
    "checkKeyExists": {
     "!type": "fn(type: string, key: string) -> bool",
     "!doc": "Check whether a file/asset with a specific key is queued to be loaded.\n\nTo access a loaded asset use Phaser.Cache, eg. {@link Phaser.Cache#checkImageKey}"
    },
    "getAssetIndex": {
     "!type": "fn(type: string, key: string) -> number",
     "!doc": "Get the queue-index of the file/asset with a specific key.\n\nOnly assets in the download file queue will be found."
    },
    "getAsset": {
     "!type": "fn(type: string, key: string) -> +any",
     "!doc": "Find a file/asset with a specific key.\n\nOnly assets in the download file queue will be found."
    },
    "reset": {
     "!type": "fn(hard: bool, clearEvents: bool)",
     "!doc": "Reset the loader and clear any queued assets. If `Loader.resetLocked` is true this operation will abort.\n\nThis will abort any loading and clear any queued assets.\n\nOptionally you can clear any associated events."
    },
    "addToFileList": {
     "!type": "fn(type: string, key: string, url: string, properties: ?, overwrite: bool, extension: string) -> +Phaser.Loader",
     "!doc": "Internal function that adds a new entry to the file list. Do not call directly."
    },
    "replaceInFileList": {
     "!type": "fn(type: string, key: string, url: string, properties: ?)",
     "!doc": "Internal function that replaces an existing entry in the file list with a new one. Do not call directly."
    },
    "pack": {
     "!type": "fn(key: string, url: string, data: ?, callbackContext: ?) -> +Phaser.Loader",
     "!doc": "Add a JSON resource pack ('packfile') to the Loader.\n\nA packfile is a JSON file that contains a list of assets to the be loaded.\nPlease see the example 'loader/asset pack' in the Phaser Examples repository.\n\nPacks are always put before the first non-pack file that is not loaded / loading.\n\nThis means that all packs added before any loading has started are added to the front\nof the file queue, in the order added.\n\nThe key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.\n\nThe URL of the packfile can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it."
    },
    "image": {
     "!type": "fn(key: string, url: string, overwrite: bool) -> +Phaser.Loader",
     "!doc": "Adds an Image to the current load queue.\n\nThe file is **not** loaded immediately after calling this method. The file is added to the queue ready to be loaded when the loader starts.\n\nPhaser can load all common image types: png, jpg, gif and any other format the browser can natively handle.\n\nThe key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.\n\nRetrieve the image via `Cache.getImage(key)`\n\nThe URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.\n\nIf the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is \"alien\"\nand no URL is given then the Loader will set the URL to be \"alien.png\". It will always add `.png` as the extension.\nIf you do not desire this action then provide a URL."
    },
    "images": {
     "!type": "fn(keys: +array, urls: +array) -> +Phaser.Loader",
     "!doc": "Adds an array of images to the current load queue.\n\nIt works by passing each element of the array to the Loader.image method.\n\nThe files are **not** loaded immediately after calling this method. The files are added to the queue ready to be loaded when the loader starts.\n\nPhaser can load all common image types: png, jpg, gif and any other format the browser can natively handle.\n\nThe keys must be unique Strings. They are used to add the files to the Phaser.Cache upon successful load.\n\nRetrieve the images via `Cache.getImage(key)`\n\nThe URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.\n\nIf the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is \"alien\"\nand no URL is given then the Loader will set the URL to be \"alien.png\". It will always add `.png` as the extension.\nIf you do not desire this action then provide a URL."
    },
    "text": {
     "!type": "fn(key: string, url: string, overwrite: bool) -> +Phaser.Loader",
     "!doc": "Adds a Text file to the current load queue.\n\nThe file is **not** loaded immediately after calling this method. The file is added to the queue ready to be loaded when the loader starts.\n\nThe key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.\n\nRetrieve the file via `Cache.getText(key)`\n\nThe URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.\n\nIf the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is \"alien\"\nand no URL is given then the Loader will set the URL to be \"alien.txt\". It will always add `.txt` as the extension.\nIf you do not desire this action then provide a URL."
    },
    "json": {
     "!type": "fn(key: string, url: string, overwrite: bool) -> +Phaser.Loader",
     "!doc": "Adds a JSON file to the current load queue.\n\nThe file is **not** loaded immediately after calling this method. The file is added to the queue ready to be loaded when the loader starts.\n\nThe key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.\n\nRetrieve the file via `Cache.getJSON(key)`. JSON files are automatically parsed upon load.\nIf you need to control when the JSON is parsed then use `Loader.text` instead and parse the text file as needed.\n\nThe URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.\n\nIf the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is \"alien\"\nand no URL is given then the Loader will set the URL to be \"alien.json\". It will always add `.json` as the extension.\nIf you do not desire this action then provide a URL."
    },
    "shader": {
     "!type": "fn(key: string, url: string, overwrite: bool) -> +Phaser.Loader",
     "!doc": "Adds a fragment shader file to the current load queue.\n\nThe file is **not** loaded immediately after calling this method. The file is added to the queue ready to be loaded when the loader starts.\n\nThe key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.\n\nRetrieve the file via `Cache.getShader(key)`.\n\nThe URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.\n\nIf the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is \"blur\"\nand no URL is given then the Loader will set the URL to be \"blur.frag\". It will always add `.frag` as the extension.\nIf you do not desire this action then provide a URL."
    },
    "xml": {
     "!type": "fn(key: string, url: string, overwrite: bool) -> +Phaser.Loader",
     "!doc": "Adds an XML file to the current load queue.\n\nThe file is **not** loaded immediately after calling this method. The file is added to the queue ready to be loaded when the loader starts.\n\nThe key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.\n\nRetrieve the file via `Cache.getXML(key)`.\n\nThe URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.\n\nIf the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is \"alien\"\nand no URL is given then the Loader will set the URL to be \"alien.xml\". It will always add `.xml` as the extension.\nIf you do not desire this action then provide a URL."
    },
    "script": {
     "!type": "fn(key: string, url: string, callback: fn(), callbackContext: ?) -> +Phaser.Loader",
     "!doc": "Adds a JavaScript file to the current load queue.\n\nThe file is **not** loaded immediately after calling this method. The file is added to the queue ready to be loaded when the loader starts.\n\nThe key must be a unique String.\n\nThe URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.\n\nIf the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is \"alien\"\nand no URL is given then the Loader will set the URL to be \"alien.js\". It will always add `.js` as the extension.\nIf you do not desire this action then provide a URL.\n\nUpon successful load the JavaScript is automatically turned into a script tag and executed, so be careful what you load!\n\nA callback, which will be invoked as the script tag has been created, can also be specified.\nThe callback must return relevant `data`."
    },
    "binary": {
     "!type": "fn(key: string, url: string, callback: fn(), callbackContext: ?) -> +Phaser.Loader",
     "!doc": "Adds a binary file to the current load queue.\n\nThe file is **not** loaded immediately after calling this method. The file is added to the queue ready to be loaded when the loader starts.\n\nThe key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.\n\nRetrieve the file via `Cache.getBinary(key)`.\n\nThe URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.\n\nIf the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is \"alien\"\nand no URL is given then the Loader will set the URL to be \"alien.bin\". It will always add `.bin` as the extension.\nIf you do not desire this action then provide a URL.\n\nIt will be loaded via xhr with a responseType of \"arraybuffer\". You can specify an optional callback to process the file after load.\nWhen the callback is called it will be passed 2 parameters: the key of the file and the file data.\n\nWARNING: If a callback is specified the data will be set to whatever it returns. Always return the data object, even if you didn't modify it."
    },
    "spritesheet": {
     "!type": "fn(key: string, url: string, frameWidth: number, frameHeight: number, frameMax: number, margin: number, spacing: number) -> +Phaser.Loader",
     "!doc": "Adds a Sprite Sheet to the current load queue.\n\nThe file is **not** loaded immediately after calling this method. The file is added to the queue ready to be loaded when the loader starts.\n\nTo clarify the terminology that Phaser uses: A Sprite Sheet is an image containing frames, usually of an animation, that are all equal\ndimensions and often in sequence. For example if the frame size is 32x32 then every frame in the sprite sheet will be that size. \nSometimes (outside of Phaser) the term \"sprite sheet\" is used to refer to a texture atlas.\nA Texture Atlas works by packing together images as best it can, using whatever frame sizes it likes, often with cropping and trimming\nthe frames in the process. Software such as Texture Packer, Flash CC or Shoebox all generate texture atlases, not sprite sheets.\nIf you've got an atlas then use `Loader.atlas` instead.\n\nThe key must be a unique String. It is used to add the image to the Phaser.Cache upon successful load.\n\nRetrieve the file via `Cache.getImage(key)`. Sprite sheets, being image based, live in the same Cache as all other Images.\n\nThe URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.\n\nIf the URL isn't specified the Loader will take the key and create a filename from that. For example if the key is \"alien\"\nand no URL is given then the Loader will set the URL to be \"alien.png\". It will always add `.png` as the extension.\nIf you do not desire this action then provide a URL."
    },
    "audio": {
     "!type": "fn(key: string, urls: string|[?]|[?], autoDecode: bool) -> +Phaser.Loader",
     "!doc": "Adds an audio file to the current load queue.\n\nThe file is **not** loaded immediately after calling this method. The file is added to the queue ready to be loaded when the loader starts.\n\nThe key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.\n\nRetrieve the file via `Cache.getSound(key)`.\n\nThe URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.\n\nMobile warning: There are some mobile devices (certain iPad 2 and iPad Mini revisions) that cannot play 48000 Hz audio.\nWhen they try to play the audio becomes extremely distorted and buzzes, eventually crashing the sound system.\nThe solution is to use a lower encoding rate such as 44100 Hz."
    },
    "audiosprite": {
     "!type": "fn(key: string, urls: [?]|string, jsonURL: string, jsonData: string|?, autoDecode: bool) -> +Phaser.Loader",
     "!doc": "Adds an audio sprite file to the current load queue.\n\nThe file is **not** loaded immediately after calling this method. The file is added to the queue ready to be loaded when the loader starts.\n\nThe key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.\n\nAudio Sprites are a combination of audio files and a JSON configuration.\n\nThe JSON follows the format of that created by https://github.com/tonistiigi/audiosprite\n\nRetrieve the file via `Cache.getSoundData(key)`.\n\nThe URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it."
    },
    "video": {
     "!type": "fn(key: string, urls: string|[?]|[?], loadEvent: string, asBlob: bool) -> +Phaser.Loader",
     "!doc": "Adds a video file to the current load queue.\n\nThe file is **not** loaded immediately after calling this method. The file is added to the queue ready to be loaded when the loader starts.\n\nThe key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.\n\nRetrieve the file via `Cache.getVideo(key)`.\n\nThe URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.\n\nYou don't need to preload a video in order to play it in your game. See `Video.createVideoFromURL` for details."
    },
    "tilemap": {
     "!type": "fn(key: string, url: string, data: ?|string, format: number) -> +Phaser.Loader",
     "!doc": "Adds a Tile Map data file to the current load queue.\n\nYou can choose to either load the data externally, by providing a URL to a json file.\nOr you can pass in a JSON object or String via the `data` parameter.\nIf you pass a String the data is automatically run through `JSON.parse` and then immediately added to the Phaser.Cache.\n\nIf a URL is provided the file is **not** loaded immediately after calling this method, but is added to the load queue.\n\nThe key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.\n\nRetrieve the file via `Cache.getTilemapData(key)`. JSON files are automatically parsed upon load.\nIf you need to control when the JSON is parsed then use `Loader.text` instead and parse the text file as needed.\n\nThe URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.\n\nIf the URL isn't specified and no data is given then the Loader will take the key and create a filename from that.\nFor example if the key is \"level1\" and no URL or data is given then the Loader will set the URL to be \"level1.json\".\nIf you set the format to be Tilemap.CSV it will set the URL to be \"level1.csv\" instead.\n\nIf you do not desire this action then provide a URL or data object."
    },
    "physics": {
     "!type": "fn(key: string, url: string, data: ?|string, format: string) -> +Phaser.Loader",
     "!doc": "Adds a physics data file to the current load queue.\n\nThe data must be in `Lime + Corona` JSON format. [Physics Editor](https://www.codeandweb.com) by code'n'web exports in this format natively.\n\nYou can choose to either load the data externally, by providing a URL to a json file.\nOr you can pass in a JSON object or String via the `data` parameter.\nIf you pass a String the data is automatically run through `JSON.parse` and then immediately added to the Phaser.Cache.\n\nIf a URL is provided the file is **not** loaded immediately after calling this method, but is added to the load queue.\n\nThe key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.\n\nRetrieve the file via `Cache.getJSON(key)`. JSON files are automatically parsed upon load.\nIf you need to control when the JSON is parsed then use `Loader.text` instead and parse the text file as needed.\n\nThe URL can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.\n\nIf the URL isn't specified and no data is given then the Loader will take the key and create a filename from that.\nFor example if the key is \"alien\" and no URL or data is given then the Loader will set the URL to be \"alien.json\".\nIt will always use `.json` as the extension.\n\nIf you do not desire this action then provide a URL or data object."
    },
    "bitmapFont": {
     "!type": "fn(key: string, textureURL: string, atlasURL: string, atlasData: ?, xSpacing: number, ySpacing: number) -> +Phaser.Loader",
     "!doc": "Adds Bitmap Font files to the current load queue.\n\nTo create the Bitmap Font files you can use:\n\nBMFont (Windows, free): http://www.angelcode.com/products/bmfont/\nGlyph Designer (OS X, commercial): http://www.71squared.com/en/glyphdesigner\nLittera (Web-based, free): http://kvazars.com/littera/\n\nYou can choose to either load the data externally, by providing a URL to an xml file.\nOr you can pass in an XML object or String via the `xmlData` parameter.\nIf you pass a String the data is automatically run through `Loader.parseXML` and then immediately added to the Phaser.Cache.\n\nIf URLs are provided the files are **not** loaded immediately after calling this method, but are added to the load queue.\n\nThe key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.\n\nRetrieve the file via `Cache.getBitmapFont(key)`. XML files are automatically parsed upon load.\nIf you need to control when the XML is parsed then use `Loader.text` instead and parse the XML file as needed.\n\nThe URLs can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.\n\nIf the textureURL isn't specified then the Loader will take the key and create a filename from that.\nFor example if the key is \"megaFont\" and textureURL is null then the Loader will set the URL to be \"megaFont.png\".\nThe same is true for the xmlURL. If xmlURL isn't specified and no xmlData has been provided then the Loader will\nset the xmlURL to be the key. For example if the key is \"megaFont\" the xmlURL will be set to \"megaFont.xml\".\n\nIf you do not desire this action then provide URLs and / or a data object."
    },
    "atlasJSONArray": {
     "!type": "fn(key: string, textureURL: string, atlasURL: string, atlasData: ?) -> +Phaser.Loader",
     "!doc": "Adds a Texture Atlas file to the current load queue.\n\nUnlike `Loader.atlasJSONHash` this call expects the atlas data to be in a JSON Array format.\n\nTo create the Texture Atlas you can use tools such as:\n\n[Texture Packer](https://www.codeandweb.com/texturepacker/phaser)\n[Shoebox](http://renderhjs.net/shoebox/)\n\nIf using Texture Packer we recommend you enable \"Trim sprite names\".\nIf your atlas software has an option to \"rotate\" the resulting frames, you must disable it.\n\nYou can choose to either load the data externally, by providing a URL to a json file.\nOr you can pass in a JSON object or String via the `atlasData` parameter.\nIf you pass a String the data is automatically run through `JSON.parse` and then immediately added to the Phaser.Cache.\n\nIf URLs are provided the files are **not** loaded immediately after calling this method, but are added to the load queue.\n\nThe key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.\n\nRetrieve the file via `Cache.getImage(key)`. JSON files are automatically parsed upon load.\nIf you need to control when the JSON is parsed then use `Loader.text` instead and parse the JSON file as needed.\n\nThe URLs can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.\n\nIf the textureURL isn't specified then the Loader will take the key and create a filename from that.\nFor example if the key is \"player\" and textureURL is null then the Loader will set the URL to be \"player.png\".\nThe same is true for the atlasURL. If atlasURL isn't specified and no atlasData has been provided then the Loader will\nset the atlasURL to be the key. For example if the key is \"player\" the atlasURL will be set to \"player.json\".\n\nIf you do not desire this action then provide URLs and / or a data object."
    },
    "atlasJSONHash": {
     "!type": "fn(key: string, textureURL: string, atlasURL: string, atlasData: ?) -> +Phaser.Loader",
     "!doc": "Adds a Texture Atlas file to the current load queue.\n\nUnlike `Loader.atlas` this call expects the atlas data to be in a JSON Hash format.\n\nTo create the Texture Atlas you can use tools such as:\n\n[Texture Packer](https://www.codeandweb.com/texturepacker/phaser)\n[Shoebox](http://renderhjs.net/shoebox/)\n\nIf using Texture Packer we recommend you enable \"Trim sprite names\".\nIf your atlas software has an option to \"rotate\" the resulting frames, you must disable it.\n\nYou can choose to either load the data externally, by providing a URL to a json file.\nOr you can pass in a JSON object or String via the `atlasData` parameter.\nIf you pass a String the data is automatically run through `JSON.parse` and then immediately added to the Phaser.Cache.\n\nIf URLs are provided the files are **not** loaded immediately after calling this method, but are added to the load queue.\n\nThe key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.\n\nRetrieve the file via `Cache.getImage(key)`. JSON files are automatically parsed upon load.\nIf you need to control when the JSON is parsed then use `Loader.text` instead and parse the JSON file as needed.\n\nThe URLs can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.\n\nIf the textureURL isn't specified then the Loader will take the key and create a filename from that.\nFor example if the key is \"player\" and textureURL is null then the Loader will set the URL to be \"player.png\".\nThe same is true for the atlasURL. If atlasURL isn't specified and no atlasData has been provided then the Loader will\nset the atlasURL to be the key. For example if the key is \"player\" the atlasURL will be set to \"player.json\".\n\nIf you do not desire this action then provide URLs and / or a data object."
    },
    "atlasXML": {
     "!type": "fn(key: string, textureURL: string, atlasURL: string, atlasData: ?) -> +Phaser.Loader",
     "!doc": "Adds a Texture Atlas file to the current load queue.\n\nThis call expects the atlas data to be in the Starling XML data format.\n\nTo create the Texture Atlas you can use tools such as:\n\n[Texture Packer](https://www.codeandweb.com/texturepacker/phaser)\n[Shoebox](http://renderhjs.net/shoebox/)\n\nIf using Texture Packer we recommend you enable \"Trim sprite names\".\nIf your atlas software has an option to \"rotate\" the resulting frames, you must disable it.\n\nYou can choose to either load the data externally, by providing a URL to an xml file.\nOr you can pass in an XML object or String via the `atlasData` parameter.\nIf you pass a String the data is automatically run through `Loader.parseXML` and then immediately added to the Phaser.Cache.\n\nIf URLs are provided the files are **not** loaded immediately after calling this method, but are added to the load queue.\n\nThe key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.\n\nRetrieve the file via `Cache.getImage(key)`. XML files are automatically parsed upon load.\nIf you need to control when the XML is parsed then use `Loader.text` instead and parse the XML file as needed.\n\nThe URLs can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.\n\nIf the textureURL isn't specified then the Loader will take the key and create a filename from that.\nFor example if the key is \"player\" and textureURL is null then the Loader will set the URL to be \"player.png\".\nThe same is true for the atlasURL. If atlasURL isn't specified and no atlasData has been provided then the Loader will\nset the atlasURL to be the key. For example if the key is \"player\" the atlasURL will be set to \"player.xml\".\n\nIf you do not desire this action then provide URLs and / or a data object."
    },
    "atlas": {
     "!type": "fn(key: string, textureURL: string, atlasURL: string, atlasData: ?, format: number) -> +Phaser.Loader",
     "!doc": "Adds a Texture Atlas file to the current load queue.\n\nTo create the Texture Atlas you can use tools such as:\n\n[Texture Packer](https://www.codeandweb.com/texturepacker/phaser)\n[Shoebox](http://renderhjs.net/shoebox/)\n\nIf using Texture Packer we recommend you enable \"Trim sprite names\".\nIf your atlas software has an option to \"rotate\" the resulting frames, you must disable it.\n\nYou can choose to either load the data externally, by providing a URL to a json file.\nOr you can pass in a JSON object or String via the `atlasData` parameter.\nIf you pass a String the data is automatically run through `JSON.parse` and then immediately added to the Phaser.Cache.\n\nIf URLs are provided the files are **not** loaded immediately after calling this method, but are added to the load queue.\n\nThe key must be a unique String. It is used to add the file to the Phaser.Cache upon successful load.\n\nRetrieve the file via `Cache.getImage(key)`. JSON files are automatically parsed upon load.\nIf you need to control when the JSON is parsed then use `Loader.text` instead and parse the JSON file as needed.\n\nThe URLs can be relative or absolute. If the URL is relative the `Loader.baseURL` and `Loader.path` values will be prepended to it.\n\nIf the textureURL isn't specified then the Loader will take the key and create a filename from that.\nFor example if the key is \"player\" and textureURL is null then the Loader will set the URL to be \"player.png\".\nThe same is true for the atlasURL. If atlasURL isn't specified and no atlasData has been provided then the Loader will\nset the atlasURL to be the key. For example if the key is \"player\" the atlasURL will be set to \"player.json\".\n\nIf you do not desire this action then provide URLs and / or a data object."
    },
    "withSyncPoints": {
     "!type": "fn(callback: fn(), callbackContext: ?) -> +Phaser.Loader",
     "!doc": "Add a synchronization point to the assets/files added within the supplied callback.\n\nA synchronization point denotes that an asset _must_ be completely loaded before\nsubsequent assets can be loaded. An asset marked as a sync-point does not need to wait\nfor previous assets to load (unless they are sync-points). Resources, such as packs, may still\nbe downloaded around sync-points, as long as they do not finalize loading."
    },
    "addSyncPoint": {
     "!type": "fn(type: string, key: string) -> +Phaser.Loader",
     "!doc": "Add a synchronization point to a specific file/asset in the load queue.\n\nThis has no effect on already loaded assets."
    },
    "removeFile": {
     "!type": "fn(type: string, key: string)",
     "!doc": "Remove a file/asset from the loading queue.\n\nA file that is loaded or has started loading cannot be removed."
    },
    "removeAll": {
     "!type": "fn()",
     "!doc": "Remove all file loading requests - this is _insufficient_ to stop current loading. Use `reset` instead."
    },
    "start": {
     "!type": "fn()",
     "!doc": "Start loading the assets. Normally you don't need to call this yourself as the StateManager will do so."
    },
    "transformUrl": {
     "!type": "fn(url: string, file: ?) -> string",
     "!doc": "Transforms the asset URL.\nThe default implementation prepends the baseURL if the url doesn't being with http or //"
    },
    "totalLoadedFiles": {
     "!type": "fn() -> number",
     "!doc": "Returns the number of files that have already been loaded, even if they errored."
    },
    "totalQueuedFiles": {
     "!type": "fn() -> number",
     "!doc": "Returns the number of files still waiting to be processed in the load queue. This value decreases as each file in the queue is loaded."
    },
    "totalLoadedPacks": {
     "!type": "fn() -> number",
     "!doc": "Returns the number of asset packs that have already been loaded, even if they errored."
    },
    "totalQueuedPacks": {
     "!type": "fn() -> number",
     "!doc": "Returns the number of asset packs still waiting to be processed in the load queue. This value decreases as each pack in the queue is loaded."
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
   "!doc": "Phaser.LoaderParser parses data objects from Phaser.Loader that need more preparation before they can be inserted into the Cache.",
   "bitmapFont": {
    "!type": "fn(xml: ?, baseTexture: +PIXI.BaseTexture, xSpacing: number, ySpacing: number) -> ?",
    "!doc": "Alias for xmlBitmapFont, for backwards compatibility."
   },
   "xmlBitmapFont": {
    "!type": "fn(xml: ?, baseTexture: +PIXI.BaseTexture, xSpacing: number, ySpacing: number) -> ?",
    "!doc": "Parse a Bitmap Font from an XML file."
   },
   "jsonBitmapFont": {
    "!type": "fn(json: ?, baseTexture: +PIXI.BaseTexture, xSpacing: number, ySpacing: number) -> ?",
    "!doc": "Parse a Bitmap Font from a JSON file."
   }
  },
  "Math": {
   "!type": "fn()",
   "!doc": "A collection of useful mathematical functions.\n\nThese are normally accessed through `game.math`.",
   "PI2": {
    "!type": "number"
   },
   "prototype": {
    "fuzzyEqual": {
     "!type": "fn(a: number, b: number, epsilon: number) -> bool",
     "!doc": "Two number are fuzzyEqual if their difference is less than epsilon."
    },
    "fuzzyLessThan": {
     "!type": "fn(a: number, b: number, epsilon: number) -> bool",
     "!doc": "`a` is fuzzyLessThan `b` if it is less than b + epsilon."
    },
    "fuzzyGreaterThan": {
     "!type": "fn(a: number, b: number, epsilon: number) -> bool",
     "!doc": "`a` is fuzzyGreaterThan `b` if it is more than b - epsilon."
    },
    "fuzzyCeil": {
     "!type": "fn(val: number, epsilon: number) -> bool"
    },
    "fuzzyFloor": {
     "!type": "fn(val: number, epsilon: number) -> bool"
    },
    "average": {
     "!type": "fn() -> number",
     "!doc": "Averages all values passed to the function and returns the result."
    },
    "shear": {
     "!type": "fn(n: number) -> number"
    },
    "snapTo": {
     "!type": "fn(input: number, gap: number, start: number) -> number",
     "!doc": "Snap a value to nearest grid slice, using rounding.\n\nExample: if you have an interval gap of 5 and a position of 12... you will snap to 10 whereas 14 will snap to 15."
    },
    "snapToFloor": {
     "!type": "fn(input: number, gap: number, start: number) -> number",
     "!doc": "Snap a value to nearest grid slice, using floor.\n\nExample: if you have an interval gap of 5 and a position of 12... you will snap to 10. \nAs will 14 snap to 10... but 16 will snap to 15."
    },
    "snapToCeil": {
     "!type": "fn(input: number, gap: number, start: number) -> number",
     "!doc": "Snap a value to nearest grid slice, using ceil.\n\nExample: if you have an interval gap of 5 and a position of 12... you will snap to 15.\nAs will 14 will snap to 15... but 16 will snap to 20."
    },
    "roundTo": {
     "!type": "fn(value: number, place: number, base: number) -> number",
     "!doc": "Round to some place comparative to a `base`, default is 10 for decimal place.\nThe `place` is represented by the power applied to `base` to get that place.\n\n    e.g. 2000/7 ~= 285.714285714285714285714 ~= (bin)100011101.1011011011011011\n\n    roundTo(2000/7,3) === 0\n    roundTo(2000/7,2) == 300\n    roundTo(2000/7,1) == 290\n    roundTo(2000/7,0) == 286\n    roundTo(2000/7,-1) == 285.7\n    roundTo(2000/7,-2) == 285.71\n    roundTo(2000/7,-3) == 285.714\n    roundTo(2000/7,-4) == 285.7143\n    roundTo(2000/7,-5) == 285.71429\n\n    roundTo(2000/7,3,2)  == 288       -- 100100000\n    roundTo(2000/7,2,2)  == 284       -- 100011100\n    roundTo(2000/7,1,2)  == 286       -- 100011110\n    roundTo(2000/7,0,2)  == 286       -- 100011110\n    roundTo(2000/7,-1,2) == 285.5     -- 100011101.1\n    roundTo(2000/7,-2,2) == 285.75    -- 100011101.11\n    roundTo(2000/7,-3,2) == 285.75    -- 100011101.11\n    roundTo(2000/7,-4,2) == 285.6875  -- 100011101.1011\n    roundTo(2000/7,-5,2) == 285.71875 -- 100011101.10111\n\nNote what occurs when we round to the 3rd space (8ths place), 100100000, this is to be assumed\nbecause we are rounding 100011.1011011011011011 which rounds up."
    },
    "floorTo": {
     "!type": "fn(value: number, place: number, base: number) -> number"
    },
    "ceilTo": {
     "!type": "fn(value: number, place: number, base: number) -> number"
    },
    "angleBetween": {
     "!type": "fn(x1: number, y1: number, x2: number, y2: number) -> number",
     "!doc": "Find the angle of a segment from (x1, y1) -> (x2, y2)."
    },
    "angleBetweenY": {
     "!type": "fn(x1: number, y1: number, x2: number, y2: number) -> number",
     "!doc": "Find the angle of a segment from (x1, y1) -> (x2, y2).\nNote that the difference between this method and Math.angleBetween is that this assumes the y coordinate travels\ndown the screen."
    },
    "angleBetweenPoints": {
     "!type": "fn(point1: +Phaser.Point, point2: +Phaser.Point) -> number",
     "!doc": "Find the angle of a segment from (point1.x, point1.y) -> (point2.x, point2.y)."
    },
    "angleBetweenPointsY": {
     "!type": "fn(point1: +Phaser.Point, point2: +Phaser.Point) -> number",
     "!doc": "Find the angle of a segment from (point1.x, point1.y) -> (point2.x, point2.y)."
    },
    "reverseAngle": {
     "!type": "fn(angleRad: number) -> number",
     "!doc": "Reverses an angle."
    },
    "normalizeAngle": {
     "!type": "fn(angleRad: number) -> number",
     "!doc": "Normalizes an angle to the [0,2pi) range."
    },
    "maxAdd": {
     "!type": "fn(value: number, amount: number, max: number) -> number",
     "!doc": "Adds the given amount to the value, but never lets the value go over the specified maximum."
    },
    "minSub": {
     "!type": "fn(value: number, amount: number, min: number) -> number",
     "!doc": "Subtracts the given amount from the value, but never lets the value go below the specified minimum."
    },
    "wrap": {
     "!type": "fn(value: number, min: number, max: number) -> number",
     "!doc": "Ensures that the value always stays between min and max, by wrapping the value around.\n\nIf `max` is not larger than `min` the result is 0."
    },
    "wrapValue": {
     "!type": "fn(value: number, amount: number, max: number) -> number",
     "!doc": "Adds value to amount and ensures that the result always stays between 0 and max, by wrapping the value around.\n\nValues _must_ be positive integers, and are passed through Math.abs. See {@link Phaser.Math#wrap} for an alternative."
    },
    "isOdd": {
     "!type": "fn(n: number) -> bool",
     "!doc": "Returns true if the number given is odd."
    },
    "isEven": {
     "!type": "fn(n: number) -> bool",
     "!doc": "Returns true if the number given is even."
    },
    "min": {
     "!type": "fn() -> number",
     "!doc": "Variation of Math.min that can be passed either an array of numbers or the numbers as parameters.\n\nPrefer the standard `Math.min` function when appropriate."
    },
    "max": {
     "!type": "fn() -> number",
     "!doc": "Variation of Math.max that can be passed either an array of numbers or the numbers as parameters.\n\nPrefer the standard `Math.max` function when appropriate."
    },
    "minProperty": {
     "!type": "fn() -> number",
     "!doc": "Variation of Math.min that can be passed a property and either an array of objects or the objects as parameters.\nIt will find the lowest matching property value from the given objects."
    },
    "maxProperty": {
     "!type": "fn() -> number",
     "!doc": "Variation of Math.max that can be passed a property and either an array of objects or the objects as parameters.\nIt will find the largest matching property value from the given objects."
    },
    "wrapAngle": {
     "!type": "fn(angle: number, radians: bool) -> number",
     "!doc": "Keeps an angle value between -180 and +180; or -PI and PI if radians."
    },
    "linearInterpolation": {
     "!type": "fn(v: [?], k: number) -> number",
     "!doc": "A Linear Interpolation Method, mostly used by Phaser.Tween."
    },
    "bezierInterpolation": {
     "!type": "fn(v: [?], k: number) -> number",
     "!doc": "A Bezier Interpolation Method, mostly used by Phaser.Tween."
    },
    "catmullRomInterpolation": {
     "!type": "fn(v: [?], k: number) -> number",
     "!doc": "A Catmull Rom Interpolation Method, mostly used by Phaser.Tween."
    },
    "linear": {
     "!type": "fn(p0: number, p1: number, t: number) -> number",
     "!doc": "Calculates a linear (interpolation) value over t."
    },
    "bernstein": {
     "!type": "fn(n: number, i: number) -> number"
    },
    "factorial": {
     "!type": "fn(value: number) -> number"
    },
    "catmullRom": {
     "!type": "fn(p0: number, p1: number, p2: number, p3: number, t: number) -> number",
     "!doc": "Calculates a catmum rom value."
    },
    "difference": {
     "!type": "fn(a: number, b: number) -> number",
     "!doc": "The (absolute) difference between two values."
    },
    "roundAwayFromZero": {
     "!type": "fn(value: number) -> number",
     "!doc": "Round to the next whole number _away_ from zero."
    },
    "sinCosGenerator": {
     "!type": "fn(length: number, sinAmplitude: number, cosAmplitude: number, frequency: number) -> ?",
     "!doc": "Generate a sine and cosine table simultaneously and extremely quickly.\nThe parameters allow you to specify the length, amplitude and frequency of the wave.\nThis generator is fast enough to be used in real-time.\nCode based on research by Franky of scene.at"
    },
    "distance": {
     "!type": "fn(x1: number, y1: number, x2: number, y2: number) -> number",
     "!doc": "Returns the euclidian distance between the two given set of coordinates."
    },
    "distanceSq": {
     "!type": "fn(x1: number, y1: number, x2: number, y2: number) -> number",
     "!doc": "Returns the euclidean distance squared between the two given set of\ncoordinates (cuts out a square root operation before returning)."
    },
    "distancePow": {
     "!type": "fn(x1: number, y1: number, x2: number, y2: number, pow: number) -> number",
     "!doc": "Returns the distance between the two given set of coordinates at the power given."
    },
    "clamp": {
     "!type": "fn(x: number, a: number, b: number) -> number",
     "!doc": "Force a value within the boundaries by clamping `x` to the range `[a, b]`."
    },
    "clampBottom": {
     "!type": "fn(x: number, a: number) -> number",
     "!doc": "Clamp `x` to the range `[a, Infinity)`.\nRoughly the same as `Math.max(x, a)`, except for NaN handling."
    },
    "within": {
     "!type": "fn(a: number, b: number, tolerance: number) -> bool",
     "!doc": "Checks if two values are within the given tolerance of each other."
    },
    "mapLinear": {
     "!type": "fn(x: number, a1: number, a2: number, b1: number, b2: number) -> number",
     "!doc": "Linear mapping from range <a1, a2> to range <b1, b2>"
    },
    "smoothstep": {
     "!type": "fn(x: number, min: number, max: number) -> number",
     "!doc": "Smoothstep function as detailed at http://en.wikipedia.org/wiki/Smoothstep"
    },
    "smootherstep": {
     "!type": "fn(x: number, min: number, max: number) -> number",
     "!doc": "Smootherstep function as detailed at http://en.wikipedia.org/wiki/Smoothstep"
    },
    "sign": {
     "!type": "fn(x: number) -> number",
     "!doc": "A value representing the sign of the value: -1 for negative, +1 for positive, 0 if value is 0.\n\nThis works differently from `Math.sign` for values of NaN and -0, etc."
    },
    "percent": {
     "!type": "fn(a: number, b: number, base: number) -> number",
     "!doc": "Work out what percentage value `a` is of value `b` using the given base."
    },
    "degToRad": {
     "!type": "fn(degrees: number) -> number",
     "!doc": "Convert degrees to radians."
    },
    "radToDeg": {
     "!type": "fn(radians: number) -> number",
     "!doc": "Convert degrees to radians."
    },
    "chanceRoll": {
     "!type": "fn(chance: number) -> bool",
     "!doc": "Generate a random bool result based on the chance value.\n\nReturns true or false based on the chance value (default 50%). For example if you wanted a player to have a 30% chance\nof getting a bonus, call chanceRoll(30) - true means the chance passed, false means it failed."
    }
   }
  },
  "QuadTree": {
   "!type": "fn(x: number, y: number, width: number, height: number, maxObjects: number, maxLevels: number, level: number)",
   "!doc": "A QuadTree implementation. The original code was a conversion of the Java code posted to GameDevTuts.\nHowever I've tweaked it massively to add node indexing, removed lots of temp. var creation and significantly increased performance as a result.\nOriginal version at https://github.com/timohausmann/quadtree-js/",
   "prototype": {
    "maxObjects": {
     "!type": "number",
     "!doc": "The maximum number of objects per node."
    },
    "maxLevels": {
     "!type": "number",
     "!doc": "The maximum number of levels to break down to."
    },
    "level": {
     "!type": "number",
     "!doc": "The current level."
    },
    "bounds": {
     "!type": "?",
     "!doc": "Object that contains the quadtree bounds."
    },
    "objects": {
     "!type": "+array",
     "!doc": "Array of quadtree children."
    },
    "nodes": {
     "!type": "+array",
     "!doc": "Array of associated child nodes."
    },
    "reset": {
     "!type": "fn(x: number, y: number, width: number, height: number, maxObjects: number, maxLevels: number, level: number)",
     "!doc": "Resets the QuadTree."
    },
    "populate": {
     "!type": "fn(group: +Phaser.Group)",
     "!doc": "Populates this quadtree with the children of the given Group. In order to be added the child must exist and have a body property."
    },
    "populateHandler": {
     "!type": "fn(sprite: +Phaser.Sprite|?)",
     "!doc": "Handler for the populate method."
    },
    "split": {
     "!type": "fn()",
     "!doc": "Split the node into 4 subnodes"
    },
    "insert": {
     "!type": "fn(body: +Phaser.Physics.Arcade.Body|?)",
     "!doc": "Insert the object into the node. If the node exceeds the capacity, it will split and add all objects to their corresponding subnodes."
    },
    "getIndex": {
     "!type": "fn(rect: +Phaser.Rectangle|?) -> number",
     "!doc": "Determine which node the object belongs to."
    },
    "retrieve": {
     "!type": "fn(source: +Phaser.Sprite|+Phaser.Rectangle) -> +array",
     "!doc": "Return all objects that could collide with the given Sprite or Rectangle."
    },
    "clear": {
     "!type": "fn()",
     "!doc": "Clear the quadtree."
    }
   }
  },
  "RandomDataGenerator": {
   "!type": "fn(seeds: [?])",
   "!doc": "An extremely useful repeatable random data generator.\n\nBased on Nonsense by Josh Faul https://github.com/jocafa/Nonsense.\n\nThe random number genererator is based on the Alea PRNG, but is modified.\n - https://github.com/coverslide/node-alea\n - https://github.com/nquinlan/better-random-numbers-for-javascript-mirror\n - http://baagoe.org/en/wiki/Better_random_numbers_for_javascript (original, perm. 404)",
   "prototype": {
    "sow": {
     "!type": "fn(seeds: [?])",
     "!doc": "Reset the seed of the random data generator.\n\n_Note_: the seed array is only processed up to the first `undefined` (or `null`) value, should such be present."
    },
    "integer": {
     "!type": "fn() -> number",
     "!doc": "Returns a random integer between 0 and 2^32."
    },
    "frac": {
     "!type": "fn() -> number",
     "!doc": "Returns a random real number between 0 and 1."
    },
    "real": {
     "!type": "fn() -> number",
     "!doc": "Returns a random real number between 0 and 2^32."
    },
    "integerInRange": {
     "!type": "fn(min: number, max: number) -> number",
     "!doc": "Returns a random integer between and including min and max."
    },
    "between": {
     "!type": "fn(min: number, max: number) -> number",
     "!doc": "Returns a random integer between and including min and max.\nThis method is an alias for RandomDataGenerator.integerInRange."
    },
    "realInRange": {
     "!type": "fn(min: number, max: number) -> number",
     "!doc": "Returns a random real number between min and max."
    },
    "normal": {
     "!type": "fn() -> number",
     "!doc": "Returns a random real number between -1 and 1."
    },
    "uuid": {
     "!type": "fn() -> string",
     "!doc": "Returns a valid RFC4122 version4 ID hex string from https://gist.github.com/1308368"
    },
    "pick": {
     "!type": "fn(ary: [?]) -> +any",
     "!doc": "Returns a random member of `array`."
    },
    "weightedPick": {
     "!type": "fn(ary: [?]) -> +any",
     "!doc": "Returns a random member of `array`, favoring the earlier entries."
    },
    "timestamp": {
     "!type": "fn(min: number, max: number) -> number",
     "!doc": "Returns a random timestamp between min and max, or between the beginning of 2000 and the end of 2020 if min and max aren't specified."
    },
    "angle": {
     "!type": "fn() -> number",
     "!doc": "Returns a random angle between -180 and 180."
    }
   }
  },
  "Net": {
   "!type": "fn(game: +Phaser.Game)",
   "!doc": "Phaser.Net handles browser URL related tasks such as checking host names, domain names and query string manipulation.",
   "prototype": {
    "getHostName": {
     "!type": "fn() -> string",
     "!doc": "Returns the hostname given by the browser."
    },
    "checkDomainName": {
     "!type": "fn(domain: string) -> bool",
     "!doc": "Compares the given domain name against the hostname of the browser containing the game.\nIf the domain name is found it returns true.\nYou can specify a part of a domain, for example 'google' would match 'google.com', 'google.co.uk', etc.\nDo not include 'http://' at the start."
    },
    "updateQueryString": {
     "!type": "fn(key: string, value: string, redirect: bool, url: string) -> string",
     "!doc": "Updates a value on the Query String and returns it in full.\nIf the value doesn't already exist it is set.\nIf the value exists it is replaced with the new value given. If you don't provide a new value it is removed from the query string.\nOptionally you can redirect to the new url, or just return it as a string."
    },
    "getQueryString": {
     "!type": "fn(parameter: string) -> string|?",
     "!doc": "Returns the Query String as an object.\nIf you specify a parameter it will return just the value of that parameter, should it exist."
    },
    "decodeURI": {
     "!type": "fn(value: string) -> string",
     "!doc": "Returns the Query String as an object.\nIf you specify a parameter it will return just the value of that parameter, should it exist."
    }
   }
  },
  "Particles": {
   "Arcade": {
    "!type": "fn()",
    "!doc": "Arcade Particles is a Particle System integrated with Arcade Physics.",
    "Emitter": {
     "!type": "fn(game: +Phaser.Game, x: number, y: number, maxParticles: number)",
     "!doc": "Emitter is a lightweight particle emitter that uses Arcade Physics.\nIt can be used for one-time explosions or for continuous effects like rain and fire.\nAll it really does is launch Particle objects out at set intervals, and fixes their positions and velocities accordingly.",
     "prototype": {
      "maxParticles": {
       "!type": "number",
       "!doc": "The total number of particles in this emitter."
      },
      "name": {
       "!type": "string",
       "!doc": "A handy string name for this emitter. Can be set to anything."
      },
      "type": {
       "!type": "number",
       "!doc": "Internal Phaser Type value."
      },
      "physicsType": {
       "!type": "number",
       "!doc": "The const physics body type of this object."
      },
      "area": {
       "!type": "+Phaser.Rectangle",
       "!doc": "The area of the emitter. Particles can be randomly generated from anywhere within this rectangle."
      },
      "minParticleSpeed": {
       "!type": "+Phaser.Point",
       "!doc": "The minimum possible velocity of a particle."
      },
      "maxParticleSpeed": {
       "!type": "+Phaser.Point",
       "!doc": "The maximum possible velocity of a particle."
      },
      "minParticleScale": {
       "!type": "number",
       "!doc": "The minimum possible scale of a particle. This is applied to the X and Y axis. If you need to control each axis see minParticleScaleX."
      },
      "maxParticleScale": {
       "!type": "number",
       "!doc": "The maximum possible scale of a particle. This is applied to the X and Y axis. If you need to control each axis see maxParticleScaleX."
      },
      "scaleData": {
       "!type": "+array",
       "!doc": "An array of the calculated scale easing data applied to particles with scaleRates > 0."
      },
      "minRotation": {
       "!type": "number",
       "!doc": "The minimum possible angular velocity of a particle."
      },
      "maxRotation": {
       "!type": "number",
       "!doc": "The maximum possible angular velocity of a particle."
      },
      "minParticleAlpha": {
       "!type": "number",
       "!doc": "The minimum possible alpha value of a particle."
      },
      "maxParticleAlpha": {
       "!type": "number",
       "!doc": "The maximum possible alpha value of a particle."
      },
      "alphaData": {
       "!type": "+array",
       "!doc": "An array of the calculated alpha easing data applied to particles with alphaRates > 0."
      },
      "gravity": {
       "!type": "number",
       "!doc": "Sets the `body.gravity.y` of each particle sprite to this value on launch."
      },
      "particleClass": {
       "!type": "+any",
       "!doc": "For emitting your own particle class types. They must extend Phaser.Particle."
      },
      "particleDrag": {
       "!type": "+Phaser.Point",
       "!doc": "The X and Y drag component of particles launched from the emitter."
      },
      "angularDrag": {
       "!type": "number",
       "!doc": "The angular drag component of particles launched from the emitter if they are rotating."
      },
      "frequency": {
       "!type": "number",
       "!doc": "How often a particle is emitted in ms (if emitter is started with Explode === false)."
      },
      "lifespan": {
       "!type": "number",
       "!doc": "How long each particle lives once it is emitted in ms. Default is 2 seconds. Set lifespan to 'zero' for particles to live forever."
      },
      "bounce": {
       "!type": "+Phaser.Point",
       "!doc": "How much each particle should bounce on each axis. 1 = full bounce, 0 = no bounce."
      },
      "on": {
       "!type": "bool",
       "!doc": "Determines whether the emitter is currently emitting particles. It is totally safe to directly toggle this."
      },
      "particleAnchor": {
       "!type": "+Phaser.Point",
       "!doc": "When a particle is created its anchor will be set to match this Point object (defaults to x/y: 0.5 to aid in rotation)"
      },
      "blendMode": {
       "!type": "number",
       "!doc": "The blendMode as set on the particle when emitted from the Emitter. Defaults to NORMAL. Needs browser capable of supporting canvas blend-modes (most not available in WebGL)"
      },
      "emitX": {
       "!type": "number"
      },
      "emitY": {
       "!type": "number"
      },
      "autoScale": {
       "!type": "bool",
       "!doc": "When a new Particle is emitted this controls if it will automatically scale in size. Use Emitter.setScale to configure."
      },
      "autoAlpha": {
       "!type": "bool",
       "!doc": "When a new Particle is emitted this controls if it will automatically change alpha. Use Emitter.setAlpha to configure."
      },
      "particleBringToTop": {
       "!type": "bool",
       "!doc": "If this is `true` then when the Particle is emitted it will be bought to the top of the Emitters display list."
      },
      "particleSendToBack": {
       "!type": "bool",
       "!doc": "If this is `true` then when the Particle is emitted it will be sent to the back of the Emitters display list."
      },
      "update": {
       "!type": "fn()",
       "!doc": "Called automatically by the game loop, decides when to launch particles and when to \"die\"."
      },
      "makeParticles": {
       "!type": "fn(keys: +array|string, frames: +array|number, quantity: number, collide: bool, collideWorldBounds: bool) -> +Phaser.Particles.Arcade.Emitter",
       "!doc": "This function generates a new set of particles for use by this emitter.\nThe particles are stored internally waiting to be emitted via Emitter.start."
      },
      "kill": {
       "!type": "fn()",
       "!doc": "Call this function to turn off all the particles and the emitter."
      },
      "revive": {
       "!type": "fn()",
       "!doc": "Handy for bringing game objects \"back to life\". Just sets alive and exists back to true."
      },
      "explode": {
       "!type": "fn(lifespan: number, quantity: number)",
       "!doc": "Call this function to emit the given quantity of particles at all once (an explosion)"
      },
      "flow": {
       "!type": "fn(lifespan: number, frequency: number, quantity: number, total: number, immediate: bool)",
       "!doc": "Call this function to start emitting a flow of particles at the given frequency.\nIt will carry on going until the total given is reached.\nEach time the flow is run the quantity number of particles will be emitted together.\nIf you set the total to be 20 and quantity to be 5 then flow will emit 4 times in total (4 x 5 = 20 total)\nIf you set the total to be -1 then no quantity cap is used and it will keep emitting."
      },
      "start": {
       "!type": "fn(explode: bool, lifespan: number, frequency: number, quantity: number, forceQuantity: number)",
       "!doc": "Call this function to start emitting particles."
      },
      "emitParticle": {
       "!type": "fn() -> bool",
       "!doc": "This function can be used both internally and externally to emit the next particle in the queue."
      },
      "destroy": {
       "!type": "fn()",
       "!doc": "Destroys this Emitter, all associated child Particles and then removes itself from the Particle Manager."
      },
      "setSize": {
       "!type": "fn(width: number, height: number)",
       "!doc": "A more compact way of setting the width and height of the emitter."
      },
      "setXSpeed": {
       "!type": "fn(min: number, max: number)",
       "!doc": "A more compact way of setting the X velocity range of the emitter."
      },
      "setYSpeed": {
       "!type": "fn(min: number, max: number)",
       "!doc": "A more compact way of setting the Y velocity range of the emitter."
      },
      "setRotation": {
       "!type": "fn(min: number, max: number)",
       "!doc": "A more compact way of setting the angular velocity constraints of the particles."
      },
      "setAlpha": {
       "!type": "fn(min: number, max: number, rate: number, ease: fn(), yoyo: bool)",
       "!doc": "A more compact way of setting the alpha constraints of the particles.\nThe rate parameter, if set to a value above zero, lets you set the speed at which the Particle change in alpha from min to max.\nIf rate is zero, which is the default, the particle won't change alpha - instead it will pick a random alpha between min and max on emit."
      },
      "setScale": {
       "!type": "fn(minX: number, maxX: number, minY: number, maxY: number, rate: number, ease: fn(), yoyo: bool)",
       "!doc": "A more compact way of setting the scale constraints of the particles.\nThe rate parameter, if set to a value above zero, lets you set the speed and ease which the Particle uses to change in scale from min to max across both axis.\nIf rate is zero, which is the default, the particle won't change scale during update, instead it will pick a random scale between min and max on emit."
      },
      "at": {
       "!type": "fn(object: ?|+Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Text|+PIXI.DisplayObject)",
       "!doc": "Change the emitters center to match the center of any object with a `center` property, such as a Sprite.\nIf the object doesn't have a center property it will be set to object.x + object.width / 2"
      },
      "width": {
       "!type": "number",
       "!doc": "Gets or sets the width of the Emitter. This is the region in which a particle can be emitted."
      },
      "height": {
       "!type": "number",
       "!doc": "Gets or sets the height of the Emitter. This is the region in which a particle can be emitted."
      },
      "x": {
       "!type": "number",
       "!doc": "Gets or sets the x position of the Emitter."
      },
      "y": {
       "!type": "number",
       "!doc": "Gets or sets the y position of the Emitter."
      },
      "left": {
       "!type": "number",
       "!doc": "Gets the left position of the Emitter."
      },
      "right": {
       "!type": "number",
       "!doc": "Gets the right position of the Emitter."
      },
      "top": {
       "!type": "number",
       "!doc": "Gets the top position of the Emitter."
      },
      "bottom": {
       "!type": "number",
       "!doc": "Gets the bottom position of the Emitter."
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
      "classType": {
       "!type": "?"
      },
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
       "!type": "number",
       "!doc": "The current index of the Group cursor. Advance it with Group.next."
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
       "!type": "fn(child: +DisplayObject, silent: bool) -> +DisplayObject",
       "!doc": "Adds an existing object as the top child in this group.\n\nThe child is automatically added to the top of the group and is displayed on top of every previous child.\n\nIf Group.enableBody is set then a physics body will be created on the object, so long as one does not already exist.\n\nUse {@link #addAt} to control where a child is added. Use {@link #create} to create and add a new child."
      },
      "addToHash": {
       "!type": "fn(child: +DisplayObject) -> bool",
       "!doc": "Adds a child of this Group into the hash array.\nThis call will return false if the child is not a child of this Group, or is already in the hash."
      },
      "removeFromHash": {
       "!type": "fn(child: +DisplayObject) -> bool",
       "!doc": "Removes a child of this Group from the hash array.\nThis call will return false if the child is not in the hash."
      },
      "addMultiple": {
       "!type": "fn(children: [?]|+Phaser.Group, silent: bool) -> [?]|+Phaser.Group",
       "!doc": "Adds an array of existing Display Objects to this Group.\n\nThe Display Objects are automatically added to the top of this Group, and will render on-top of everything already in this Group.\n\nAs well as an array you can also pass another Group as the first argument. In this case all of the children from that\nGroup will be removed from it and added into this Group."
      },
      "addAt": {
       "!type": "fn(child: +DisplayObject, index: number, silent: bool) -> +DisplayObject",
       "!doc": "Adds an existing object to this group.\n\nThe child is added to the group at the location specified by the index value, this allows you to control child ordering."
      },
      "getAt": {
       "!type": "fn(index: number) -> +DisplayObject|number",
       "!doc": "Returns the child found at the given index within this group."
      },
      "create": {
       "!type": "fn(x: number, y: number, key: string, frame: number|string, exists: bool) -> +DisplayObject",
       "!doc": "Creates a new Phaser.Sprite object and adds it to the top of this group.\n\nUse {@link #classType} to change the type of object creaded."
      },
      "createMultiple": {
       "!type": "fn(quantity: number, key: string, frame: number|string, exists: bool)",
       "!doc": "Creates multiple Phaser.Sprite objects and adds them to the top of this group.\n\nUseful if you need to quickly generate a pool of identical sprites, such as bullets.\n\nBy default the sprites will be set to not exist and will be positioned at 0, 0 (relative to the group.x/y).\nUse {@link #classType} to change the type of object created."
      },
      "updateZ": {
       "!type": "fn()",
       "!doc": "Internal method that re-applies all of the children's Z values.\n\nThis must be called whenever children ordering is altered so that their `z` indices are correctly updated."
      },
      "resetCursor": {
       "!type": "fn(index: number) -> +any",
       "!doc": "Sets the group cursor to the first child in the group.\n\nIf the optional index parameter is given it sets the cursor to the object at that index instead."
      },
      "next": {
       "!type": "fn() -> +any",
       "!doc": "Advances the group cursor to the next (higher) object in the group.\n\nIf the cursor is at the end of the group (top child) it is moved the start of the group (bottom child)."
      },
      "previous": {
       "!type": "fn() -> +any",
       "!doc": "Moves the group cursor to the previous (lower) child in the group.\n\nIf the cursor is at the start of the group (bottom child) it is moved to the end (top child)."
      },
      "swap": {
       "!type": "fn(child1: +any, child2: +any)",
       "!doc": "Swaps the position of two children in this group.\n\nBoth children must be in this group, a child cannot be swapped with itself, and unparented children cannot be swapped."
      },
      "bringToTop": {
       "!type": "fn(child: +any) -> +any",
       "!doc": "Brings the given child to the top of this group so it renders above all other children."
      },
      "sendToBack": {
       "!type": "fn(child: +any) -> +any",
       "!doc": "Sends the given child to the bottom of this group so it renders below all other children."
      },
      "moveUp": {
       "!type": "fn(child: +any) -> +any",
       "!doc": "Moves the given child up one place in this group unless it's already at the top."
      },
      "moveDown": {
       "!type": "fn(child: +any) -> +any",
       "!doc": "Moves the given child down one place in this group unless it's already at the bottom."
      },
      "xy": {
       "!type": "fn(index: number, x: number, y: number)",
       "!doc": "Positions the child found at the given index within this group to the given x and y coordinates."
      },
      "reverse": {
       "!type": "fn()",
       "!doc": "Reverses all children in this group.\n\nThis operaation applies only to immediate children and does not propagate to subgroups."
      },
      "getIndex": {
       "!type": "fn(child: +any) -> number",
       "!doc": "Get the index position of the given child in this group, which should match the child's `z` property."
      },
      "replace": {
       "!type": "fn(oldChild: +any, newChild: +any) -> +any",
       "!doc": "Replaces a child of this group with the given newChild. The newChild cannot be a member of this group."
      },
      "hasProperty": {
       "!type": "fn(child: +any, key: [?]) -> bool",
       "!doc": "Checks if the child has the given property.\n\nWill scan up to 4 levels deep only."
      },
      "setProperty": {
       "!type": "fn(child: +any, key: +array, value: +any, operation: number, force: bool) -> bool",
       "!doc": "Sets a property to the given value on the child. The operation parameter controls how the value is set.\n\nThe operations are:\n- 0: set the existing value to the given value; if force is `true` a new property will be created if needed\n- 1: will add the given value to the value already present.\n- 2: will subtract the given value from the value already present.\n- 3: will multiply the value already present by the given value.\n- 4: will divide the value already present by the given value."
      },
      "checkProperty": {
       "!type": "fn(child: +any, key: +array, value: +any, force: bool) -> bool",
       "!doc": "Checks a property for the given value on the child."
      },
      "set": {
       "!type": "fn(child: +Phaser.Sprite, key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool) -> bool",
       "!doc": "Quickly set a property on a single child of this group to a new value.\n\nThe operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication."
      },
      "setAll": {
       "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)",
       "!doc": "Quickly set the same property across all children of this group to a new value.\n\nThis call doesn't descend down children, so if you have a Group inside of this group, the property will be set on the group but not its children.\nIf you need that ability please see `Group.setAllChildren`.\n\nThe operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication."
      },
      "setAllChildren": {
       "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)",
       "!doc": "Quickly set the same property across all children of this group, and any child Groups, to a new value.\n\nIf this group contains other Groups then the same property is set across their children as well, iterating down until it reaches the bottom.\nUnlike with `setAll` the property is NOT set on child Groups itself.\n\nThe operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication."
      },
      "checkAll": {
       "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, force: bool)",
       "!doc": "Quickly check that the same property across all children of this group is equal to the given value.\n\nThis call doesn't descend down children, so if you have a Group inside of this group, the property will be checked on the group but not its children."
      },
      "addAll": {
       "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)",
       "!doc": "Adds the amount to the given property on all children in this group.\n\n`Group.addAll('x', 10)` will add 10 to the child.x value for each child."
      },
      "subAll": {
       "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)",
       "!doc": "Subtracts the amount from the given property on all children in this group.\n\n`Group.subAll('x', 10)` will minus 10 from the child.x value for each child."
      },
      "multiplyAll": {
       "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)",
       "!doc": "Multiplies the given property by the amount on all children in this group.\n\n`Group.multiplyAll('x', 2)` will x2 the child.x value for each child."
      },
      "divideAll": {
       "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)",
       "!doc": "Divides the given property by the amount on all children in this group.\n\n`Group.divideAll('x', 2)` will half the child.x value for each child."
      },
      "callAllExists": {
       "!type": "fn(callback: string, existsValue: bool, parameter: +any)",
       "!doc": "Calls a function, specified by name, on all children in the group who exist (or do not exist).\n\nAfter the existsValue parameter you can add as many parameters as you like, which will all be passed to the child callback."
      },
      "callbackFromArray": {
       "!type": "fn(child: ?, callback: +array, length: number)",
       "!doc": "Returns a reference to a function that exists on a child of the group based on the given callback array."
      },
      "callAll": {
       "!type": "fn(method: string, context: string, args: +any)",
       "!doc": "Calls a function, specified by name, on all on children.\n\nThe function is called for all children regardless if they are dead or alive (see callAllExists for different options).\nAfter the method parameter and context you can add as many extra parameters as you like, which will all be passed to the child."
      },
      "preUpdate": {
       "!type": "fn()",
       "!doc": "The core preUpdate - as called by World."
      },
      "postUpdate": {
       "!type": "fn()",
       "!doc": "The core postUpdate - as called by World."
      },
      "filter": {
       "!type": "fn(predicate: fn(), checkExists: bool) -> +Phaser.ArraySet",
       "!doc": "Find children matching a certain predicate.\n\nFor example:\n\n    var healthyList = Group.filter(function(child, index, children) {\n        return child.health > 10 ? true : false;\n    }, true);\n    healthyList.callAll('attack');\n\nNote: Currently this will skip any children which are Groups themselves."
      },
      "forEach": {
       "!type": "fn(callback: fn(), callbackContext: ?, checkExists: bool, args: +any)",
       "!doc": "Call a function on each child in this group.\n\nAdditional arguments for the callback can be specified after the `checkExists` parameter. For example,\n\n    Group.forEach(awardBonusGold, this, true, 100, 500)\n\nwould invoke `awardBonusGold` function with the parameters `(child, 100, 500)`.\n\nNote: This check will skip any children which are Groups themselves."
      },
      "forEachExists": {
       "!type": "fn(callback: fn(), callbackContext: ?, args: +any)",
       "!doc": "Call a function on each existing child in this group.\n\nSee {@link Phaser.Group#forEach forEach} for details."
      },
      "forEachAlive": {
       "!type": "fn(callback: fn(), callbackContext: ?, args: +any)",
       "!doc": "Call a function on each alive child in this group.\n\nSee {@link Phaser.Group#forEach forEach} for details."
      },
      "forEachDead": {
       "!type": "fn(callback: fn(), callbackContext: ?, args: +any)",
       "!doc": "Call a function on each dead child in this group.\n\nSee {@link Phaser.Group#forEach forEach} for details."
      },
      "sort": {
       "!type": "fn(key: string, order: number)",
       "!doc": "Sort the children in the group according to a particular key and ordering.\n\nCall this function to sort the group according to a particular key value and order.\nFor example to depth sort Sprites for Zelda-style game you might call `group.sort('y', Phaser.Group.SORT_ASCENDING)` at the bottom of your `State.update()`."
      },
      "customSort": {
       "!type": "fn(sortHandler: fn(), context: ?)",
       "!doc": "Sort the children in the group according to custom sort function.\n\nThe `sortHandler` is provided the two parameters: the two children involved in the comparison (a and b).\nIt should return -1 if `a > b`, 1 if `a < b` or 0 if `a === b`."
      },
      "ascendingSortHandler": {
       "!type": "fn(a: ?, b: ?)",
       "!doc": "An internal helper function for the sort process."
      },
      "descendingSortHandler": {
       "!type": "fn(a: ?, b: ?)",
       "!doc": "An internal helper function for the sort process."
      },
      "iterate": {
       "!type": "fn(key: string, value: +any, returnType: number, callback: fn(), callbackContext: ?, args: [?]) -> +any",
       "!doc": "Iterates over the children of the group performing one of several actions for matched children.\n\nA child is considered a match when it has a property, named `key`, whose value is equal to `value`\naccording to a strict equality comparison.\n\nThe result depends on the `returnType`:\n\n- {@link Phaser.Group.RETURN_TOTAL RETURN_TOTAL}:\n    The callback, if any, is applied to all matching children. The number of matched children is returned.\n- {@link Phaser.Group.RETURN_NONE RETURN_NONE}:\n    The callback, if any, is applied to all matching children. No value is returned.\n- {@link Phaser.Group.RETURN_CHILD RETURN_CHILD}:\n    The callback, if any, is applied to the *first* matching child and the *first* matched child is returned.\n    If there is no matching child then null is returned.\n\nIf `args` is specified it must be an array. The matched child will be assigned to the first\nelement and the entire array will be applied to the callback function."
      },
      "getFirstExists": {
       "!type": "fn(exists: bool) -> +any",
       "!doc": "Get the first display object that exists, or doesn't exist."
      },
      "getFirstAlive": {
       "!type": "fn() -> +any",
       "!doc": "Get the first child that is alive (`child.alive === true`).\n\nThis is handy for checking if everything has been wiped out, or choosing a squad leader, etc."
      },
      "getFirstDead": {
       "!type": "fn() -> +any",
       "!doc": "Get the first child that is dead (`child.alive === false`).\n\nThis is handy for checking if everything has been wiped out, or choosing a squad leader, etc."
      },
      "getTop": {
       "!type": "fn() -> +any",
       "!doc": "Return the child at the top of this group.\n\nThe top child is the child displayed (rendered) above every other child."
      },
      "getBottom": {
       "!type": "fn() -> +any",
       "!doc": "Returns the child at the bottom of this group.\n\nThe bottom child the child being displayed (rendered) below every other child."
      },
      "countLiving": {
       "!type": "fn() -> number",
       "!doc": "Get the number of living children in this group."
      },
      "countDead": {
       "!type": "fn() -> number",
       "!doc": "Get the number of dead children in this group."
      },
      "getRandom": {
       "!type": "fn(startIndex: number, length: number) -> +any",
       "!doc": "Returns a random child from the group."
      },
      "remove": {
       "!type": "fn(child: +any, destroy: bool, silent: bool) -> bool",
       "!doc": "Removes the given child from this group.\n\nThis will dispatch an `onRemovedFromGroup` event from the child (if it has one), and optionally destroy the child.\n\nIf the group cursor was referring to the removed child it is updated to refer to the next child."
      },
      "moveAll": {
       "!type": "fn(group: +Phaser.Group, silent: bool) -> +Phaser.Group",
       "!doc": "Moves all children from this Group to the Group given."
      },
      "removeAll": {
       "!type": "fn(destroy: bool, silent: bool)",
       "!doc": "Removes all children from this group, but does not remove the group from its parent."
      },
      "removeBetween": {
       "!type": "fn(startIndex: number, endIndex: number, destroy: bool, silent: bool)",
       "!doc": "Removes all children from this group whose index falls beteen the given startIndex and endIndex values."
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
      "children": {
       "!type": "[?]"
      }
     }
    }
   },
   "!type": "fn(game: +Phaser.Game)",
   "!doc": "Phaser.Particles is the Particle Manager for the game. It is called during the game update loop and in turn updates any Emitters attached to it.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running Game."
    },
    "emitters": {
     "!type": "?",
     "!doc": "Internal emitters store."
    },
    "ID": {
     "!type": "number",
     "!doc": "-"
    },
    "add": {
     "!type": "fn(emitter: +Phaser.Emitter) -> +Phaser.Emitter",
     "!doc": "Adds a new Particle Emitter to the Particle Manager."
    },
    "remove": {
     "!type": "fn(emitter: +Phaser.Emitter)",
     "!doc": "Removes an existing Particle Emitter from the Particle Manager."
    },
    "update": {
     "!type": "fn()",
     "!doc": "Called by the core game loop. Updates all Emitters who have their exists value set to true."
    }
   }
  },
  "VERSION": {
   "!type": "string",
   "!doc": "The Phaser version number."
  },
  "GAMES": {
   "!type": "+array",
   "!doc": "An array of Phaser game instances."
  },
  "AUTO": {
   "!type": "number",
   "!doc": "AUTO renderer - picks between WebGL or Canvas based on device."
  },
  "CANVAS": {
   "!type": "number",
   "!doc": "Canvas Renderer."
  },
  "WEBGL": {
   "!type": "number",
   "!doc": "WebGL Renderer."
  },
  "HEADLESS": {
   "!type": "number",
   "!doc": "Headless renderer (not visual output)"
  },
  "NONE": {
   "!type": "number",
   "!doc": "Direction constant."
  },
  "LEFT": {
   "!type": "number",
   "!doc": "Direction constant."
  },
  "RIGHT": {
   "!type": "number",
   "!doc": "Direction constant."
  },
  "UP": {
   "!type": "number",
   "!doc": "Direction constant."
  },
  "DOWN": {
   "!type": "number",
   "!doc": "Direction constant."
  },
  "SPRITE": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "BUTTON": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "IMAGE": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "GRAPHICS": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "TEXT": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "TILESPRITE": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "BITMAPTEXT": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "GROUP": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "RENDERTEXTURE": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "TILEMAP": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "TILEMAPLAYER": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "EMITTER": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "POLYGON": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "BITMAPDATA": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "CANVAS_FILTER": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "WEBGL_FILTER": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "ELLIPSE": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "SPRITEBATCH": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "RETROFONT": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "POINTER": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "ROPE": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "CIRCLE": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "RECTANGLE": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "LINE": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "MATRIX": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "POINT": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "ROUNDEDRECTANGLE": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "CREATURE": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "VIDEO": {
   "!type": "number",
   "!doc": "Game Object type."
  },
  "blendModes": {
   "!type": "?",
   "!doc": "Various blend modes supported by Pixi.\n\nIMPORTANT: The WebGL renderer only supports the NORMAL, ADD, MULTIPLY and SCREEN blend modes."
  },
  "scaleModes": {
   "!type": "?",
   "!doc": "The scale modes that are supported by Pixi.\n\nThe DEFAULT scale mode affects the default scaling mode of future operations.\nIt can be re-assigned to either LINEAR or NEAREST, depending upon suitability."
  },
  "Physics": {
   "Arcade": {
    "Body": {
     "!type": "fn(sprite: +Phaser.Sprite)",
     "!doc": "The Physics Body is linked to a single Sprite. All physics operations should be performed against the body rather than\nthe Sprite itself. For example you can set the velocity, acceleration, bounce values etc all on the Body.",
     "prototype": {
      "sprite": {
       "!type": "+Phaser.Sprite",
       "!doc": "Reference to the parent Sprite."
      },
      "game": {
       "!type": "+Phaser.Game",
       "!doc": "Local reference to game."
      },
      "type": {
       "!type": "number",
       "!doc": "The type of physics system this body belongs to."
      },
      "enable": {
       "!type": "bool",
       "!doc": "A disabled body won't be checked for any form of collision or overlap or have its pre/post updates run."
      },
      "offset": {
       "!type": "+Phaser.Point",
       "!doc": "The offset of the Physics Body from the Sprite x/y position."
      },
      "position": {
       "!type": "+Phaser.Point",
       "!doc": "The position of the physics body."
      },
      "prev": {
       "!type": "+Phaser.Point",
       "!doc": "The previous position of the physics body."
      },
      "allowRotation": {
       "!type": "bool",
       "!doc": "Allow this Body to be rotated? (via angularVelocity, etc)"
      },
      "rotation": {
       "!type": "number"
      },
      "preRotation": {
       "!type": "number",
       "!doc": "The previous rotation of the physics body."
      },
      "width": {
       "!type": "number",
       "!doc": "The calculated width of the physics body."
      },
      "height": {
       "!type": "number",
       "!doc": "The calculated height of the physics body."
      },
      "sourceWidth": {
       "!type": "number",
       "!doc": "The un-scaled original size."
      },
      "sourceHeight": {
       "!type": "number",
       "!doc": "The un-scaled original size."
      },
      "halfWidth": {
       "!type": "number",
       "!doc": "The calculated width / 2 of the physics body."
      },
      "halfHeight": {
       "!type": "number",
       "!doc": "The calculated height / 2 of the physics body."
      },
      "center": {
       "!type": "+Phaser.Point",
       "!doc": "The center coordinate of the Physics Body."
      },
      "velocity": {
       "!type": "+Phaser.Point",
       "!doc": "The velocity, or rate of change in speed of the Body. Measured in pixels per second."
      },
      "newVelocity": {
       "!type": "+Phaser.Point",
       "!doc": "The new velocity. Calculated during the Body.preUpdate and applied to its position."
      },
      "deltaMax": {
       "!type": "+Phaser.Point",
       "!doc": "The Sprite position is updated based on the delta x/y values. You can set a cap on those (both +-) using deltaMax."
      },
      "acceleration": {
       "!type": "+Phaser.Point",
       "!doc": "The acceleration is the rate of change of the velocity. Measured in pixels per second squared."
      },
      "drag": {
       "!type": "+Phaser.Point",
       "!doc": "The drag applied to the motion of the Body."
      },
      "allowGravity": {
       "!type": "bool",
       "!doc": "Allow this Body to be influenced by gravity? Either world or local."
      },
      "gravity": {
       "!type": "+Phaser.Point",
       "!doc": "A local gravity applied to this Body. If non-zero this over rides any world gravity, unless Body.allowGravity is set to false."
      },
      "bounce": {
       "!type": "+Phaser.Point",
       "!doc": "The elasticity of the Body when colliding. bounce.x/y = 1 means full rebound, bounce.x/y = 0.5 means 50% rebound velocity."
      },
      "maxVelocity": {
       "!type": "+Phaser.Point",
       "!doc": "The maximum velocity in pixels per second sq. that the Body can reach."
      },
      "friction": {
       "!type": "+Phaser.Point",
       "!doc": "The amount of movement that will occur if another object 'rides' this one."
      },
      "angularVelocity": {
       "!type": "number",
       "!doc": "The angular velocity controls the rotation speed of the Body. It is measured in radians per second."
      },
      "angularAcceleration": {
       "!type": "number",
       "!doc": "The angular acceleration is the rate of change of the angular velocity. Measured in radians per second squared."
      },
      "angularDrag": {
       "!type": "number",
       "!doc": "The drag applied during the rotation of the Body."
      },
      "maxAngular": {
       "!type": "number",
       "!doc": "The maximum angular velocity in radians per second that the Body can reach."
      },
      "mass": {
       "!type": "number",
       "!doc": "The mass of the Body. When two bodies collide their mass is used in the calculation to determine the exchange of velocity."
      },
      "angle": {
       "!type": "number",
       "!doc": "The angle of the Body in radians, as calculated by its angularVelocity."
      },
      "speed": {
       "!type": "number",
       "!doc": "The speed of the Body as calculated by its velocity."
      },
      "facing": {
       "!type": "number",
       "!doc": "A const reference to the direction the Body is traveling or facing."
      },
      "immovable": {
       "!type": "bool",
       "!doc": "An immovable Body will not receive any impacts from other bodies."
      },
      "moves": {
       "!type": "bool",
       "!doc": "Set to true to allow the Physics system to move this Body, otherwise false to move it manually."
      },
      "customSeparateX": {
       "!type": "bool",
       "!doc": "Use a custom separation system or the built-in one?"
      },
      "customSeparateY": {
       "!type": "bool",
       "!doc": "Use a custom separation system or the built-in one?"
      },
      "overlapX": {
       "!type": "number",
       "!doc": "The amount of horizontal overlap during the collision."
      },
      "overlapY": {
       "!type": "number",
       "!doc": "The amount of vertical overlap during the collision."
      },
      "embedded": {
       "!type": "bool",
       "!doc": "Body embed value."
      },
      "collideWorldBounds": {
       "!type": "bool",
       "!doc": "Should the Body collide with the World bounds?"
      },
      "checkCollision": {
       "!type": "?",
       "!doc": "An object containing allowed collision."
      },
      "touching": {
       "!type": "?",
       "!doc": "An object containing touching results."
      },
      "wasTouching": {
       "!type": "?",
       "!doc": "An object containing previous touching results."
      },
      "blocked": {
       "!type": "?",
       "!doc": "An object containing on which faces this Body is blocked from moving, if any."
      },
      "tilePadding": {
       "!type": "+Phaser.Point",
       "!doc": "Extra padding to be added to this sprite's dimensions when checking for tile collision."
      },
      "dirty": {
       "!type": "bool",
       "!doc": "If this Body in a preUpdate (true) or postUpdate (false) state?"
      },
      "skipQuadTree": {
       "!type": "bool",
       "!doc": "If true and you collide this Sprite against a Group, it will disable the collision check from using a QuadTree."
      },
      "syncBounds": {
       "!type": "bool"
      },
      "updateBounds": {
       "!type": "fn()",
       "!doc": "Internal method."
      },
      "preUpdate": {
       "!type": "fn()",
       "!doc": "Internal method."
      },
      "postUpdate": {
       "!type": "fn()",
       "!doc": "Internal method."
      },
      "destroy": {
       "!type": "fn()",
       "!doc": "Removes this bodys reference to its parent sprite, freeing it up for gc."
      },
      "checkWorldBounds": {
       "!type": "fn()",
       "!doc": "Internal method."
      },
      "setSize": {
       "!type": "fn(width: number, height: number, offsetX: number, offsetY: number)",
       "!doc": "You can modify the size of the physics Body to be any dimension you need.\nSo it could be smaller or larger than the parent Sprite. You can also control the x and y offset, which\nis the position of the Body relative to the top-left of the Sprite."
      },
      "reset": {
       "!type": "fn(x: number, y: number)",
       "!doc": "Resets all Body values (velocity, acceleration, rotation, etc)"
      },
      "hitTest": {
       "!type": "fn(x: number, y: number) -> bool",
       "!doc": "Tests if a world point lies within this Body."
      },
      "onFloor": {
       "!type": "fn() -> bool",
       "!doc": "Returns true if the bottom of this Body is in contact with either the world bounds or a tile."
      },
      "onWall": {
       "!type": "fn() -> bool",
       "!doc": "Returns true if either side of this Body is in contact with either the world bounds or a tile."
      },
      "deltaAbsX": {
       "!type": "fn() -> number",
       "!doc": "Returns the absolute delta x value."
      },
      "deltaAbsY": {
       "!type": "fn() -> number",
       "!doc": "Returns the absolute delta y value."
      },
      "deltaX": {
       "!type": "fn() -> number",
       "!doc": "Returns the delta x value. The difference between Body.x now and in the previous step."
      },
      "deltaY": {
       "!type": "fn() -> number",
       "!doc": "Returns the delta y value. The difference between Body.y now and in the previous step."
      },
      "deltaZ": {
       "!type": "fn() -> number",
       "!doc": "Returns the delta z value. The difference between Body.rotation now and in the previous step."
      },
      "bottom": {
       "!type": "number",
       "!doc": "The bottom value of this Body (same as Body.y + Body.height)"
      },
      "right": {
       "!type": "number",
       "!doc": "The right value of this Body (same as Body.x + Body.width)"
      },
      "x": {
       "!type": "number",
       "!doc": "The x position."
      },
      "y": {
       "!type": "number",
       "!doc": "The y position."
      },
      "render": {
       "!type": "fn(context: ?, body: +Phaser.Physics.Arcade.Body, color: string, filled: bool)",
       "!doc": "Render Sprite Body."
      },
      "renderBodyInfo": {
       "!type": "fn(body: +Phaser.Physics.Arcade.Body, x: number, y: number, color: string)",
       "!doc": "Render Sprite Body Physics Data as text."
      }
     }
    },
    "TilemapCollision": {
     "!type": "fn()",
     "!doc": "The Arcade Physics Tile map collision methods.",
     "prototype": {
      "TILE_BIAS": {
       "!type": "number",
       "!doc": "A value added to the delta values during collision with tiles. Adjust this if you get tunneling."
      }
     }
    },
    "!type": "fn(game: +Phaser.Game)",
    "!doc": "The Arcade Physics world. Contains Arcade Physics related collision, overlap and motion methods.",
    "prototype": {
     "game": {
      "!type": "+Phaser.Game",
      "!doc": "Local reference to game."
     },
     "gravity": {
      "!type": "+Phaser.Point",
      "!doc": "The World gravity setting. Defaults to x: 0, y: 0, or no gravity."
     },
     "bounds": {
      "!type": "+Phaser.Rectangle",
      "!doc": "The bounds inside of which the physics world exists. Defaults to match the world bounds."
     },
     "checkCollision": {
      "!type": "?",
      "!doc": "An object containing allowed collision flags."
     },
     "maxObjects": {
      "!type": "number",
      "!doc": "Used by the QuadTree to set the maximum number of objects per quad."
     },
     "maxLevels": {
      "!type": "number",
      "!doc": "Used by the QuadTree to set the maximum number of iteration levels."
     },
     "OVERLAP_BIAS": {
      "!type": "number",
      "!doc": "A value added to the delta values during collision checks."
     },
     "forceX": {
      "!type": "bool",
      "!doc": "If true World.separate will always separate on the X axis before Y. Otherwise it will check gravity totals first."
     },
     "sortDirection": {
      "!type": "number",
      "!doc": "Used when colliding a Sprite vs. a Group, or a Group vs. a Group, this defines the direction the sort is based on. Default is Phaser.Physics.Arcade.LEFT_RIGHT."
     },
     "skipQuadTree": {
      "!type": "bool",
      "!doc": "If true the QuadTree will not be used for any collision. QuadTrees are great if objects are well spread out in your game, otherwise they are a performance hit. If you enable this you can disable on a per body basis via `Body.skipQuadTree`."
     },
     "isPaused": {
      "!type": "bool",
      "!doc": "If `true` the `Body.preUpdate` method will be skipped, halting all motion for all bodies. Note that other methods such as `collide` will still work, so be careful not to call them on paused bodies."
     },
     "quadTree": {
      "!type": "+Phaser.QuadTree",
      "!doc": "The world QuadTree."
     },
     "setBounds": {
      "!type": "fn(x: number, y: number, width: number, height: number)",
      "!doc": "Updates the size of this physics world."
     },
     "setBoundsToWorld": {
      "!type": "fn()",
      "!doc": "Updates the size of this physics world to match the size of the game world."
     },
     "enable": {
      "!type": "fn(object: ?|+array|+Phaser.Group, children: bool)",
      "!doc": "This will create an Arcade Physics body on the given game object or array of game objects.\nA game object can only have 1 physics body active at any one time, and it can't be changed until the object is destroyed."
     },
     "enableBody": {
      "!type": "fn(object: ?)",
      "!doc": "Creates an Arcade Physics body on the given game object.\n\nA game object can only have 1 physics body active at any one time, and it can't be changed until the body is nulled.\n\nWhen you add an Arcade Physics body to an object it will automatically add the object into its parent Groups hash array."
     },
     "updateMotion": {
      "!type": "fn(The: +Phaser.Physics.Arcade.Body)",
      "!doc": "Called automatically by a Physics body, it updates all motion related values on the Body unless `World.isPaused` is `true`."
     },
     "computeVelocity": {
      "!type": "fn(axis: number, body: +Phaser.Physics.Arcade.Body, velocity: number, acceleration: number, drag: number, max: number) -> number",
      "!doc": "A tween-like function that takes a starting velocity and some other factors and returns an altered velocity.\nBased on a function in Flixel by @ADAMATOMIC"
     },
     "overlap": {
      "!type": "fn(object1: +Phaser.Sprite|+Phaser.Group|+Phaser.Particles.Emitter|+array, object2: +Phaser.Sprite|+Phaser.Group|+Phaser.Particles.Emitter|+array, overlapCallback: fn(), processCallback: fn(), callbackContext: ?) -> bool",
      "!doc": "Checks for overlaps between two game objects. The objects can be Sprites, Groups or Emitters.\nYou can perform Sprite vs. Sprite, Sprite vs. Group and Group vs. Group overlap checks.\nUnlike collide the objects are NOT automatically separated or have any physics applied, they merely test for overlap results.\nBoth the first and second parameter can be arrays of objects, of differing types.\nIf two arrays are passed, the contents of the first parameter will be tested against all contents of the 2nd parameter.\nNOTE: This function is not recursive, and will not test against children of objects passed (i.e. Groups within Groups)."
     },
     "collide": {
      "!type": "fn(object1: +Phaser.Sprite|+Phaser.Group|+Phaser.Particles.Emitter|+Phaser.TilemapLayer|+array, object2: +Phaser.Sprite|+Phaser.Group|+Phaser.Particles.Emitter|+Phaser.TilemapLayer|+array, collideCallback: fn(), processCallback: fn(), callbackContext: ?) -> bool",
      "!doc": "Checks for collision between two game objects. You can perform Sprite vs. Sprite, Sprite vs. Group, Group vs. Group, Sprite vs. Tilemap Layer or Group vs. Tilemap Layer collisions.\nBoth the first and second parameter can be arrays of objects, of differing types.\nIf two arrays are passed, the contents of the first parameter will be tested against all contents of the 2nd parameter.\nThe objects are also automatically separated. If you don't require separation then use ArcadePhysics.overlap instead.\nAn optional processCallback can be provided. If given this function will be called when two sprites are found to be colliding. It is called before any separation takes place,\ngiving you the chance to perform additional checks. If the function returns true then the collision and separation is carried out. If it returns false it is skipped.\nThe collideCallback is an optional function that is only called if two sprites collide. If a processCallback has been set then it needs to return true for collideCallback to be called.\nNOTE: This function is not recursive, and will not test against children of objects passed (i.e. Groups or Tilemaps within other Groups)."
     },
     "sortLeftRight": {
      "!type": "fn(a: +Phaser.Sprite, b: +Phaser.Sprite) -> number",
      "!doc": "A Sort function for sorting two bodies based on a LEFT to RIGHT sort direction.\n\nThis is called automatically by World.sort"
     },
     "sortRightLeft": {
      "!type": "fn(a: +Phaser.Sprite, b: +Phaser.Sprite) -> number",
      "!doc": "A Sort function for sorting two bodies based on a RIGHT to LEFT sort direction.\n\nThis is called automatically by World.sort"
     },
     "sortTopBottom": {
      "!type": "fn(a: +Phaser.Sprite, b: +Phaser.Sprite) -> number",
      "!doc": "A Sort function for sorting two bodies based on a TOP to BOTTOM sort direction.\n\nThis is called automatically by World.sort"
     },
     "sortBottomTop": {
      "!type": "fn(a: +Phaser.Sprite, b: +Phaser.Sprite) -> number",
      "!doc": "A Sort function for sorting two bodies based on a BOTTOM to TOP sort direction.\n\nThis is called automatically by World.sort"
     },
     "sort": {
      "!type": "fn(group: +Phaser.Group, sortDirection: number)",
      "!doc": "This method will sort a Groups hash array.\n\nIf the Group has `physicsSortDirection` set it will use the sort direction defined.\n\nOtherwise if the sortDirection parameter is undefined, or Group.physicsSortDirection is null, it will use Phaser.Physics.Arcade.sortDirection.\n\nBy changing Group.physicsSortDirection you can customise each Group to sort in a different order."
     },
     "intersects": {
      "!type": "fn(body1: +Phaser.Physics.Arcade.Body, body2: +Phaser.Physics.Arcade.Body) -> bool",
      "!doc": "Check for intersection against two bodies."
     },
     "getObjectsUnderPointer": {
      "!type": "fn(pointer: +Phaser.Pointer, group: +Phaser.Group, callback: fn(), callbackContext: ?) -> [?]",
      "!doc": "Given a Group and a Pointer this will check to see which Group children overlap with the Pointer coordinates.\nEach child will be sent to the given callback for further processing.\nNote that the children are not checked for depth order, but simply if they overlap the Pointer or not."
     },
     "getObjectsAtLocation": {
      "!type": "fn(x: number, y: number, group: +Phaser.Group, callback: fn(), callbackContext: ?, callbackArg: ?) -> [?]",
      "!doc": "Given a Group and a location this will check to see which Group children overlap with the coordinates.\nEach child will be sent to the given callback for further processing.\nNote that the children are not checked for depth order, but simply if they overlap the coordinate or not."
     },
     "moveToObject": {
      "!type": "fn(displayObject: +any, destination: +any, speed: number, maxTime: number) -> number",
      "!doc": "Move the given display object towards the destination object at a steady velocity.\nIf you specify a maxTime then it will adjust the speed (overwriting what you set) so it arrives at the destination in that number of seconds.\nTimings are approximate due to the way browser timers work. Allow for a variance of +- 50ms.\nNote: The display object does not continuously track the target. If the target changes location during transit the display object will not modify its course.\nNote: The display object doesn't stop moving once it reaches the destination coordinates.\nNote: Doesn't take into account acceleration, maxVelocity or drag (if you've set drag or acceleration too high this object may not move at all)"
     },
     "moveToPointer": {
      "!type": "fn(displayObject: +any, speed: number, pointer: +Phaser.Pointer, maxTime: number) -> number",
      "!doc": "Move the given display object towards the pointer at a steady velocity. If no pointer is given it will use Phaser.Input.activePointer.\nIf you specify a maxTime then it will adjust the speed (over-writing what you set) so it arrives at the destination in that number of seconds.\nTimings are approximate due to the way browser timers work. Allow for a variance of +- 50ms.\nNote: The display object does not continuously track the target. If the target changes location during transit the display object will not modify its course.\nNote: The display object doesn't stop moving once it reaches the destination coordinates."
     },
     "moveToXY": {
      "!type": "fn(displayObject: +any, x: number, y: number, speed: number, maxTime: number) -> number",
      "!doc": "Move the given display object towards the x/y coordinates at a steady velocity.\nIf you specify a maxTime then it will adjust the speed (over-writing what you set) so it arrives at the destination in that number of seconds.\nTimings are approximate due to the way browser timers work. Allow for a variance of +- 50ms.\nNote: The display object does not continuously track the target. If the target changes location during transit the display object will not modify its course.\nNote: The display object doesn't stop moving once it reaches the destination coordinates.\nNote: Doesn't take into account acceleration, maxVelocity or drag (if you've set drag or acceleration too high this object may not move at all)"
     },
     "velocityFromAngle": {
      "!type": "fn(angle: number, speed: number, point: +Phaser.Point|?) -> +Phaser.Point",
      "!doc": "Given the angle (in degrees) and speed calculate the velocity and return it as a Point object, or set it to the given point object.\nOne way to use this is: velocityFromAngle(angle, 200, sprite.velocity) which will set the values directly to the sprites velocity and not create a new Point object."
     },
     "velocityFromRotation": {
      "!type": "fn(rotation: number, speed: number, point: +Phaser.Point|?) -> +Phaser.Point",
      "!doc": "Given the rotation (in radians) and speed calculate the velocity and return it as a Point object, or set it to the given point object.\nOne way to use this is: velocityFromRotation(rotation, 200, sprite.velocity) which will set the values directly to the sprites velocity and not create a new Point object."
     },
     "accelerationFromRotation": {
      "!type": "fn(rotation: number, speed: number, point: +Phaser.Point|?) -> +Phaser.Point",
      "!doc": "Given the rotation (in radians) and speed calculate the acceleration and return it as a Point object, or set it to the given point object.\nOne way to use this is: accelerationFromRotation(rotation, 200, sprite.acceleration) which will set the values directly to the sprites acceleration and not create a new Point object."
     },
     "accelerateToObject": {
      "!type": "fn(displayObject: +any, destination: +any, speed: number, xSpeedMax: number, ySpeedMax: number) -> number",
      "!doc": "Sets the acceleration.x/y property on the display object so it will move towards the target at the given speed (in pixels per second sq.)\nYou must give a maximum speed value, beyond which the display object won't go any faster.\nNote: The display object does not continuously track the target. If the target changes location during transit the display object will not modify its course.\nNote: The display object doesn't stop moving once it reaches the destination coordinates."
     },
     "accelerateToPointer": {
      "!type": "fn(displayObject: +any, pointer: +Phaser.Pointer, speed: number, xSpeedMax: number, ySpeedMax: number) -> number",
      "!doc": "Sets the acceleration.x/y property on the display object so it will move towards the target at the given speed (in pixels per second sq.)\nYou must give a maximum speed value, beyond which the display object won't go any faster.\nNote: The display object does not continuously track the target. If the target changes location during transit the display object will not modify its course.\nNote: The display object doesn't stop moving once it reaches the destination coordinates."
     },
     "accelerateToXY": {
      "!type": "fn(displayObject: +any, x: number, y: number, speed: number, xSpeedMax: number, ySpeedMax: number) -> number",
      "!doc": "Sets the acceleration.x/y property on the display object so it will move towards the x/y coordinates at the given speed (in pixels per second sq.)\nYou must give a maximum speed value, beyond which the display object won't go any faster.\nNote: The display object does not continuously track the target. If the target changes location during transit the display object will not modify its course.\nNote: The display object doesn't stop moving once it reaches the destination coordinates."
     },
     "distanceBetween": {
      "!type": "fn(source: +any, target: +any) -> number",
      "!doc": "Find the distance between two display objects (like Sprites)."
     },
     "distanceToXY": {
      "!type": "fn(displayObject: +any, x: number, y: number) -> number",
      "!doc": "Find the distance between a display object (like a Sprite) and the given x/y coordinates.\nThe calculation is made from the display objects x/y coordinate. This may be the top-left if its anchor hasn't been changed.\nIf you need to calculate from the center of a display object instead use the method distanceBetweenCenters()"
     },
     "distanceToPointer": {
      "!type": "fn(displayObject: +any, pointer: +Phaser.Pointer) -> number",
      "!doc": "Find the distance between a display object (like a Sprite) and a Pointer. If no Pointer is given the Input.activePointer is used.\nThe calculation is made from the display objects x/y coordinate. This may be the top-left if its anchor hasn't been changed.\nIf you need to calculate from the center of a display object instead use the method distanceBetweenCenters()\nThe distance to the Pointer is returned in screen space, not world space."
     },
     "angleBetween": {
      "!type": "fn(source: +any, target: +any) -> number",
      "!doc": "Find the angle in radians between two display objects (like Sprites)."
     },
     "angleToXY": {
      "!type": "fn(displayObject: +any, x: number, y: number) -> number",
      "!doc": "Find the angle in radians between a display object (like a Sprite) and the given x/y coordinate."
     },
     "angleToPointer": {
      "!type": "fn(displayObject: +any, pointer: +Phaser.Pointer) -> number",
      "!doc": "Find the angle in radians between a display object (like a Sprite) and a Pointer, taking their x/y and center into account."
     }
    },
    "SORT_NONE": {
     "!type": "number",
     "!doc": "A constant used for the sortDirection value.\nUse this if you don't wish to perform any pre-collision sorting at all, or will manually sort your Groups."
    },
    "LEFT_RIGHT": {
     "!type": "number",
     "!doc": "A constant used for the sortDirection value.\nUse this if your game world is wide but short and scrolls from the left to the right (i.e. Mario)"
    },
    "RIGHT_LEFT": {
     "!type": "number",
     "!doc": "A constant used for the sortDirection value.\nUse this if your game world is wide but short and scrolls from the right to the left (i.e. Mario backwards)"
    },
    "TOP_BOTTOM": {
     "!type": "number",
     "!doc": "A constant used for the sortDirection value.\nUse this if your game world is narrow but tall and scrolls from the top to the bottom (i.e. Dig Dug)"
    },
    "BOTTOM_TOP": {
     "!type": "number",
     "!doc": "A constant used for the sortDirection value.\nUse this if your game world is narrow but tall and scrolls from the bottom to the top (i.e. Commando or a vertically scrolling shoot-em-up)"
    }
   },
   "Ninja": {
    "AABB": {
     "!type": "fn(body: +Phaser.Physics.Ninja.Body, x: number, y: number, width: number, height: number)",
     "!doc": "Ninja Physics AABB constructor.\nNote: This class could be massively optimised and reduced in size. I leave that challenge up to you.",
     "prototype": {
      "body": {
       "!type": "+Phaser.Physics.Ninja.Body",
       "!doc": "A reference to the body that owns this shape."
      },
      "system": {
       "!type": "+Phaser.Physics.Ninja",
       "!doc": "A reference to the physics system."
      },
      "pos": {
       "!type": "+Phaser.Point",
       "!doc": "The position of this object."
      },
      "oldpos": {
       "!type": "+Phaser.Point",
       "!doc": "The position of this object in the previous update."
      },
      "xw": {
       "!type": "number",
       "!doc": "Half the width."
      },
      "yw": {
       "!type": "number",
       "!doc": "Half the height."
      },
      "width": {
       "!type": "number",
       "!doc": "The width."
      },
      "height": {
       "!type": "number",
       "!doc": "The height."
      },
      "velocity": {
       "!type": "+Phaser.Point",
       "!doc": "The velocity of this object."
      },
      "aabbTileProjections": {
       "!type": "?",
       "!doc": "All of the collision response handlers."
      },
      "integrate": {
       "!type": "fn()",
       "!doc": "Updates this AABBs position."
      },
      "reportCollisionVsWorld": {
       "!type": "fn(px: number, py: number, dx: number, dy: number)",
       "!doc": "Process a world collision and apply the resulting forces."
      },
      "reportCollisionVsBody": {
       "!type": "fn(px: number, py: number, dx: number, dy: number, obj: number)",
       "!doc": "Process a body collision and apply the resulting forces. Still very much WIP and doesn't work fully. Feel free to fix!"
      },
      "collideWorldBounds": {
       "!type": "fn()",
       "!doc": "Collides this AABB against the world bounds."
      },
      "collideAABBVsAABB": {
       "!type": "fn(aabb: +Phaser.Physics.Ninja.AABB)",
       "!doc": "Collides this AABB against a AABB."
      },
      "collideAABBVsTile": {
       "!type": "fn(tile: +Phaser.Physics.Ninja.Tile)",
       "!doc": "Collides this AABB against a Tile."
      },
      "resolveTile": {
       "!type": "fn(x: number, y: number, body: +Phaser.Physics.Ninja.AABB, tile: +Phaser.Physics.Ninja.Tile) -> bool",
       "!doc": "Resolves tile collision."
      },
      "projAABB_Full": {
       "!type": "fn(x: number, y: number, obj: +Phaser.Physics.Ninja.AABB, t: +Phaser.Physics.Ninja.Tile) -> number",
       "!doc": "Resolves Full tile collision."
      },
      "projAABB_Half": {
       "!type": "fn(x: number, y: number, obj: +Phaser.Physics.Ninja.AABB, t: +Phaser.Physics.Ninja.Tile) -> number",
       "!doc": "Resolves Half tile collision."
      },
      "projAABB_45Deg": {
       "!type": "fn(x: number, y: number, obj: +Phaser.Physics.Ninja.AABB, t: +Phaser.Physics.Ninja.Tile) -> number",
       "!doc": "Resolves 45 Degree tile collision."
      },
      "projAABB_22DegS": {
       "!type": "fn(x: number, y: number, obj: +Phaser.Physics.Ninja.AABB, t: +Phaser.Physics.Ninja.Tile) -> number",
       "!doc": "Resolves 22 Degree tile collision."
      },
      "projAABB_22DegB": {
       "!type": "fn(x: number, y: number, obj: +Phaser.Physics.Ninja.AABB, t: +Phaser.Physics.Ninja.Tile) -> number",
       "!doc": "Resolves 22 Degree tile collision."
      },
      "projAABB_67DegS": {
       "!type": "fn(x: number, y: number, obj: +Phaser.Physics.Ninja.AABB, t: +Phaser.Physics.Ninja.Tile) -> number",
       "!doc": "Resolves 67 Degree tile collision."
      },
      "projAABB_67DegB": {
       "!type": "fn(x: number, y: number, obj: +Phaser.Physics.Ninja.AABB, t: +Phaser.Physics.Ninja.Tile) -> number",
       "!doc": "Resolves 67 Degree tile collision."
      },
      "projAABB_Convex": {
       "!type": "fn(x: number, y: number, obj: +Phaser.Physics.Ninja.AABB, t: +Phaser.Physics.Ninja.Tile) -> number",
       "!doc": "Resolves Convex tile collision."
      },
      "projAABB_Concave": {
       "!type": "fn(x: number, y: number, obj: +Phaser.Physics.Ninja.AABB, t: +Phaser.Physics.Ninja.Tile) -> number",
       "!doc": "Resolves Concave tile collision."
      },
      "destroy": {
       "!type": "fn()",
       "!doc": "Destroys this AABB's reference to Body and System"
      },
      "render": {
       "!type": "fn(context: ?, xOffset: number, yOffset: number, color: string, filled: bool)",
       "!doc": "Render this AABB for debugging purposes."
      }
     }
    },
    "Body": {
     "!type": "fn(system: +Phaser.Physics.Ninja, sprite: +Phaser.Sprite, type: number, id: number, radius: number, x: number, y: number, width: number, height: number)",
     "!doc": "The Physics Body is linked to a single Sprite. All physics operations should be performed against the body rather than\nthe Sprite itself. For example you can set the velocity, bounce values etc all on the Body.",
     "prototype": {
      "sprite": {
       "!type": "+Phaser.Sprite",
       "!doc": "Reference to the parent Sprite."
      },
      "game": {
       "!type": "+Phaser.Game",
       "!doc": "Local reference to game."
      },
      "type": {
       "!type": "number",
       "!doc": "The type of physics system this body belongs to."
      },
      "system": {
       "!type": "+Phaser.Physics.Ninja",
       "!doc": "The parent physics system."
      },
      "aabb": {
       "!type": "+Phaser.Physics.Ninja.AABB",
       "!doc": "The AABB object this body is using for collision."
      },
      "tile": {
       "!type": "+Phaser.Physics.Ninja.Tile",
       "!doc": "The Tile object this body is using for collision."
      },
      "circle": {
       "!type": "+Phaser.Physics.Ninja.Circle",
       "!doc": "The Circle object this body is using for collision."
      },
      "shape": {
       "!type": "?",
       "!doc": "A local reference to the body shape."
      },
      "drag": {
       "!type": "number",
       "!doc": "The drag applied to this object as it moves."
      },
      "friction": {
       "!type": "number",
       "!doc": "The friction applied to this object as it moves."
      },
      "gravityScale": {
       "!type": "number",
       "!doc": "How much of the world gravity should be applied to this object? 1 = all of it, 0.5 = 50%, etc."
      },
      "bounce": {
       "!type": "number",
       "!doc": "The bounciness of this object when it collides. A value between 0 and 1. We recommend setting it to 0.999 to avoid jittering."
      },
      "velocity": {
       "!type": "+Phaser.Point",
       "!doc": "The velocity in pixels per second sq. of the Body."
      },
      "facing": {
       "!type": "number",
       "!doc": "A const reference to the direction the Body is traveling or facing."
      },
      "immovable": {
       "!type": "bool",
       "!doc": "An immovable Body will not receive any impacts from other bodies. Not fully implemented."
      },
      "collideWorldBounds": {
       "!type": "bool",
       "!doc": "Should the Body collide with the World bounds?"
      },
      "checkCollision": {
       "!type": "?",
       "!doc": "An object containing allowed collision."
      },
      "touching": {
       "!type": "?",
       "!doc": "An object containing touching results."
      },
      "wasTouching": {
       "!type": "?",
       "!doc": "An object containing previous touching results."
      },
      "maxSpeed": {
       "!type": "number",
       "!doc": "The maximum speed this body can travel at (taking drag and friction into account)"
      },
      "preUpdate": {
       "!type": "fn()",
       "!doc": "Internal method."
      },
      "postUpdate": {
       "!type": "fn()",
       "!doc": "Internal method."
      },
      "setZeroVelocity": {
       "!type": "fn()",
       "!doc": "Stops all movement of this body."
      },
      "reset": {
       "!type": "fn()",
       "!doc": "Resets all Body values and repositions on the Sprite."
      },
      "deltaAbsX": {
       "!type": "fn() -> number",
       "!doc": "Returns the absolute delta x value."
      },
      "deltaAbsY": {
       "!type": "fn() -> number",
       "!doc": "Returns the absolute delta y value."
      },
      "deltaX": {
       "!type": "fn() -> number",
       "!doc": "Returns the delta x value. The difference between Body.x now and in the previous step."
      },
      "deltaY": {
       "!type": "fn() -> number",
       "!doc": "Returns the delta y value. The difference between Body.y now and in the previous step."
      },
      "destroy": {
       "!type": "fn()",
       "!doc": "Destroys this body's reference to the sprite and system, and destroys its shape."
      },
      "x": {
       "!type": "number",
       "!doc": "The x position."
      },
      "y": {
       "!type": "number",
       "!doc": "The y position."
      },
      "width": {
       "!type": "number",
       "!doc": "The width of this Body"
      },
      "height": {
       "!type": "number",
       "!doc": "The height of this Body"
      },
      "bottom": {
       "!type": "number",
       "!doc": "The bottom value of this Body (same as Body.y + Body.height)"
      },
      "right": {
       "!type": "number",
       "!doc": "The right value of this Body (same as Body.x + Body.width)"
      },
      "speed": {
       "!type": "number",
       "!doc": "The speed of this Body"
      },
      "angle": {
       "!type": "number",
       "!doc": "The angle of this Body"
      },
      "render": {
       "!type": "fn(context: ?, body: +Phaser.Physics.Ninja.Body, color: string, filled: bool)",
       "!doc": "Render Sprite's Body."
      }
     }
    },
    "Circle": {
     "!type": "fn(body: +Phaser.Physics.Ninja.Body, x: number, y: number, radius: number)",
     "!doc": "Ninja Physics Circle constructor.\nNote: This class could be massively optimised and reduced in size. I leave that challenge up to you.",
     "prototype": {
      "body": {
       "!type": "+Phaser.Physics.Ninja.Body",
       "!doc": "A reference to the body that owns this shape."
      },
      "system": {
       "!type": "+Phaser.Physics.Ninja",
       "!doc": "A reference to the physics system."
      },
      "pos": {
       "!type": "+Phaser.Point",
       "!doc": "The position of this object."
      },
      "oldpos": {
       "!type": "+Phaser.Point",
       "!doc": "The position of this object in the previous update."
      },
      "radius": {
       "!type": "number",
       "!doc": "The radius of this circle shape."
      },
      "xw": {
       "!type": "number",
       "!doc": "Half the width."
      },
      "yw": {
       "!type": "number",
       "!doc": "Half the height."
      },
      "width": {
       "!type": "number",
       "!doc": "The width."
      },
      "height": {
       "!type": "number",
       "!doc": "The height."
      },
      "velocity": {
       "!type": "+Phaser.Point",
       "!doc": "The velocity of this object."
      },
      "circleTileProjections": {
       "!type": "?",
       "!doc": "All of the collision response handlers."
      },
      "integrate": {
       "!type": "fn()",
       "!doc": "Updates this Circles position."
      },
      "reportCollisionVsWorld": {
       "!type": "fn(px: number, py: number, dx: number, dy: number, obj: number)",
       "!doc": "Process a world collision and apply the resulting forces."
      },
      "collideWorldBounds": {
       "!type": "fn()",
       "!doc": "Collides this Circle against the world bounds."
      },
      "collideCircleVsTile": {
       "!type": "fn(t: +Phaser.Physics.Ninja.Tile) -> bool",
       "!doc": "Collides this Circle with a Tile."
      },
      "resolveCircleTile": {
       "!type": "fn(x: number, y: number, oH: number, oV: number, obj: +Phaser.Physics.Ninja.Circle, t: +Phaser.Physics.Ninja.Tile) -> number",
       "!doc": "Resolves tile collision."
      },
      "projCircle_Full": {
       "!type": "fn(x: number, y: number, oH: number, oV: number, obj: +Phaser.Physics.Ninja.Circle, t: +Phaser.Physics.Ninja.Tile) -> number",
       "!doc": "Resolves Full tile collision."
      },
      "projCircle_45Deg": {
       "!type": "fn(x: number, y: number, oH: number, oV: number, obj: +Phaser.Physics.Ninja.Circle, t: +Phaser.Physics.Ninja.Tile) -> number",
       "!doc": "Resolves 45 Degree tile collision."
      },
      "projCircle_Concave": {
       "!type": "fn(x: number, y: number, oH: number, oV: number, obj: +Phaser.Physics.Ninja.Circle, t: +Phaser.Physics.Ninja.Tile) -> number",
       "!doc": "Resolves Concave tile collision."
      },
      "projCircle_Convex": {
       "!type": "fn(x: number, y: number, oH: number, oV: number, obj: +Phaser.Physics.Ninja.Circle, t: +Phaser.Physics.Ninja.Tile) -> number",
       "!doc": "Resolves Convex tile collision."
      },
      "projCircle_Half": {
       "!type": "fn(x: number, y: number, oH: number, oV: number, obj: +Phaser.Physics.Ninja.Circle, t: +Phaser.Physics.Ninja.Tile) -> number",
       "!doc": "Resolves Half tile collision."
      },
      "projCircle_22DegS": {
       "!type": "fn(x: number, y: number, oH: number, oV: number, obj: +Phaser.Physics.Ninja.Circle, t: +Phaser.Physics.Ninja.Tile) -> number",
       "!doc": "Resolves 22 Degree tile collision."
      },
      "projCircle_22DegB": {
       "!type": "fn(x: number, y: number, oH: number, oV: number, obj: +Phaser.Physics.Ninja.Circle, t: +Phaser.Physics.Ninja.Tile) -> number",
       "!doc": "Resolves 22 Degree tile collision."
      },
      "projCircle_67DegS": {
       "!type": "fn(x: number, y: number, oH: number, oV: number, obj: +Phaser.Physics.Ninja.Circle, t: +Phaser.Physics.Ninja.Tile) -> number",
       "!doc": "Resolves 67 Degree tile collision."
      },
      "projCircle_67DegB": {
       "!type": "fn(x: number, y: number, oH: number, oV: number, obj: +Phaser.Physics.Ninja.Circle, t: +Phaser.Physics.Ninja.Tile) -> number",
       "!doc": "Resolves 67 Degree tile collision."
      },
      "destroy": {
       "!type": "fn()",
       "!doc": "Destroys this Circle's reference to Body and System"
      },
      "render": {
       "!type": "fn(context: ?, xOffset: number, yOffset: number, color: string, filled: bool)",
       "!doc": "Render this circle for debugging purposes."
      }
     }
    },
    "Tile": {
     "!type": "fn(body: +Phaser.Physics.Ninja.Body, x: number, y: number, width: number, height: number, type: number)",
     "!doc": "Ninja Physics Tile constructor.\nA Tile is defined by its width, height and type. It's type can include slope data, such as 45 degree slopes, or convex slopes.\nUnderstand that for any type including a slope (types 2 to 29) the Tile must be SQUARE, i.e. have an equal width and height.\nAlso note that as Tiles are primarily used for levels they have gravity disabled and world bounds collision disabled by default.\n\nNote: This class could be massively optimised and reduced in size. I leave that challenge up to you.",
     "prototype": {
      "body": {
       "!type": "+Phaser.Physics.Ninja.Body",
       "!doc": "A reference to the body that owns this shape."
      },
      "system": {
       "!type": "+Phaser.Physics.Ninja",
       "!doc": "A reference to the physics system."
      },
      "id": {
       "!type": "number",
       "!doc": "The ID of this Tile."
      },
      "type": {
       "!type": "number",
       "!doc": "The type of this Tile."
      },
      "pos": {
       "!type": "+Phaser.Point",
       "!doc": "The position of this object."
      },
      "oldpos": {
       "!type": "+Phaser.Point",
       "!doc": "The position of this object in the previous update."
      },
      "xw": {
       "!type": "number",
       "!doc": "Half the width."
      },
      "yw": {
       "!type": "number",
       "!doc": "Half the height."
      },
      "width": {
       "!type": "number",
       "!doc": "The width."
      },
      "height": {
       "!type": "number",
       "!doc": "The height."
      },
      "velocity": {
       "!type": "+Phaser.Point",
       "!doc": "The velocity of this object."
      },
      "integrate": {
       "!type": "fn()",
       "!doc": "Updates this objects position."
      },
      "collideWorldBounds": {
       "!type": "fn()",
       "!doc": "Tiles cannot collide with the world bounds, it's up to you to keep them where you want them. But we need this API stub to satisfy the Body."
      },
      "reportCollisionVsWorld": {
       "!type": "fn(px: number, py: number, dx: number, dy: number, obj: number)",
       "!doc": "Process a world collision and apply the resulting forces."
      },
      "setType": {
       "!type": "fn(id: number)",
       "!doc": "Tiles cannot collide with the world bounds, it's up to you to keep them where you want them. But we need this API stub to satisfy the Body."
      },
      "clear": {
       "!type": "fn()",
       "!doc": "Sets this tile to be empty."
      },
      "destroy": {
       "!type": "fn()",
       "!doc": "Destroys this Tiles reference to Body and System."
      },
      "x": {
       "!type": "number",
       "!doc": "The x position."
      },
      "y": {
       "!type": "number",
       "!doc": "The y position."
      },
      "bottom": {
       "!type": "number",
       "!doc": "The bottom value of this Body (same as Body.y + Body.height)"
      },
      "right": {
       "!type": "number",
       "!doc": "The right value of this Body (same as Body.x + Body.width)"
      }
     }
    },
    "!type": "fn(game: +Phaser.Game)",
    "!doc": "Ninja Physics. The Ninja Physics system was created in Flash by Metanet Software and ported to JavaScript by Richard Davey.\n\nIt allows for AABB and Circle to Tile collision. Tiles can be any of 34 different types, including slopes, convex and concave shapes.\n\nIt does what it does very well, but is ripe for expansion and optimisation. Here are some features that I'd love to see the community add:\n\n* AABB to AABB collision\n* AABB to Circle collision\n* AABB and Circle 'immovable' property support\n* n-way collision, so an AABB/Circle could pass through a tile from below and land upon it.\n* QuadTree or spatial grid for faster Body vs. Tile Group look-ups.\n* Optimise the internal vector math and reduce the quantity of temporary vars created.\n* Expand Gravity and Bounce to allow for separate x/y axis values.\n* Support Bodies linked to Sprites that don't have anchor set to 0.5\n\nFeel free to attempt any of the above and submit a Pull Request with your code! Be sure to include test cases proving they work.",
    "prototype": {
     "game": {
      "!type": "+Phaser.Game",
      "!doc": "Local reference to game."
     },
     "time": {
      "!type": "+Phaser.Time",
      "!doc": "Local reference to game.time."
     },
     "gravity": {
      "!type": "number",
      "!doc": "The World gravity setting."
     },
     "bounds": {
      "!type": "+Phaser.Rectangle",
      "!doc": "The bounds inside of which the physics world exists. Defaults to match the world bounds."
     },
     "maxObjects": {
      "!type": "number",
      "!doc": "Used by the QuadTree to set the maximum number of objects per quad."
     },
     "maxLevels": {
      "!type": "number",
      "!doc": "Used by the QuadTree to set the maximum number of iteration levels."
     },
     "quadTree": {
      "!type": "+Phaser.QuadTree",
      "!doc": "The world QuadTree."
     },
     "enableAABB": {
      "!type": "fn(object: ?|+array|+Phaser.Group, children: bool)",
      "!doc": "This will create a Ninja Physics AABB body on the given game object. Its dimensions will match the width and height of the object at the point it is created.\nA game object can only have 1 physics body active at any one time, and it can't be changed until the object is destroyed."
     },
     "enableCircle": {
      "!type": "fn(object: ?|+array|+Phaser.Group, radius: number, children: bool)",
      "!doc": "This will create a Ninja Physics Circle body on the given game object.\nA game object can only have 1 physics body active at any one time, and it can't be changed until the object is destroyed."
     },
     "enableTile": {
      "!type": "fn(object: ?|+array|+Phaser.Group, id: number, children: bool)",
      "!doc": "This will create a Ninja Physics Tile body on the given game object. There are 34 different types of tile you can create, including 45 degree slopes,\nconvex and concave circles and more. The id parameter controls which Tile type is created, but you can also change it at run-time.\nNote that for all degree based tile types they need to have an equal width and height. If the given object doesn't have equal width and height it will use the width.\nA game object can only have 1 physics body active at any one time, and it can't be changed until the object is destroyed."
     },
     "enable": {
      "!type": "fn(object: ?|+array|+Phaser.Group, type: number, id: number, radius: number, children: bool)",
      "!doc": "This will create a Ninja Physics body on the given game object or array of game objects.\nA game object can only have 1 physics body active at any one time, and it can't be changed until the object is destroyed."
     },
     "enableBody": {
      "!type": "fn(object: ?)",
      "!doc": "Creates a Ninja Physics body on the given game object.\nA game object can only have 1 physics body active at any one time, and it can't be changed until the body is nulled."
     },
     "setBounds": {
      "!type": "fn(x: number, y: number, width: number, height: number)",
      "!doc": "Updates the size of this physics world."
     },
     "setBoundsToWorld": {
      "!type": "fn()",
      "!doc": "Updates the size of this physics world to match the size of the game world."
     },
     "clearTilemapLayerBodies": {
      "!type": "fn(map: +Phaser.Tilemap, layer: number|string|+Phaser.TilemapLayer)",
      "!doc": "Clears all physics bodies from the given TilemapLayer that were created with `World.convertTilemap`."
     },
     "convertTilemap": {
      "!type": "fn(map: +Phaser.Tilemap, layer: number|string|+Phaser.TilemapLayer, slopeMap: ?) -> +array",
      "!doc": "Goes through all tiles in the given Tilemap and TilemapLayer and converts those set to collide into physics tiles.\nOnly call this *after* you have specified all of the tiles you wish to collide with calls like Tilemap.setCollisionBetween, etc.\nEvery time you call this method it will destroy any previously created bodies and remove them from the world.\nTherefore understand it's a very expensive operation and not to be done in a core game update loop.\n\nIn Ninja the Tiles have an ID from 0 to 33, where 0 is 'empty', 1 is a full tile, 2 is a 45-degree slope, etc. You can find the ID\nlist either at the very bottom of `Tile.js`, or in a handy visual reference in the `resources/Ninja Physics Debug Tiles` folder in the repository.\nThe slopeMap parameter is an array that controls how the indexes of the tiles in your tilemap data will map to the Ninja Tile IDs.\nFor example if you had 6 tiles in your tileset: Imagine the first 4 should be converted into fully solid Tiles and the other 2 are 45-degree slopes.\nYour slopeMap array would look like this: `[ 1, 1, 1, 1, 2, 3 ]`.\nWhere each element of the array is a tile in your tilemap and the resulting Ninja Tile it should create."
     },
     "overlap": {
      "!type": "fn(object1: +Phaser.Sprite|+Phaser.Group|+Phaser.Particles.Emitter, object2: +Phaser.Sprite|+Phaser.Group|+Phaser.Particles.Emitter|+array, overlapCallback: fn(), processCallback: fn(), callbackContext: ?) -> bool",
      "!doc": "Checks for overlaps between two game objects. The objects can be Sprites, Groups or Emitters.\nYou can perform Sprite vs. Sprite, Sprite vs. Group and Group vs. Group overlap checks.\nUnlike collide the objects are NOT automatically separated or have any physics applied, they merely test for overlap results.\nThe second parameter can be an array of objects, of differing types."
     },
     "collide": {
      "!type": "fn(object1: +Phaser.Sprite|+Phaser.Group|+Phaser.Particles.Emitter|+Phaser.TilemapLayer, object2: +Phaser.Sprite|+Phaser.Group|+Phaser.Particles.Emitter|+Phaser.TilemapLayer|+array, collideCallback: fn(), processCallback: fn(), callbackContext: ?) -> bool",
      "!doc": "Checks for collision between two game objects. You can perform Sprite vs. Sprite, Sprite vs. Group, Group vs. Group, Sprite vs. Tilemap Layer or Group vs. Tilemap Layer collisions.\nThe second parameter can be an array of objects, of differing types.\nThe objects are also automatically separated. If you don't require separation then use ArcadePhysics.overlap instead.\nAn optional processCallback can be provided. If given this function will be called when two sprites are found to be colliding. It is called before any separation takes place,\ngiving you the chance to perform additional checks. If the function returns true then the collision and separation is carried out. If it returns false it is skipped.\nThe collideCallback is an optional function that is only called if two sprites collide. If a processCallback has been set then it needs to return true for collideCallback to be called."
     },
     "separate": {
      "!type": "fn(body1: +Phaser.Physics.Ninja.Body, body2: +Phaser.Physics.Ninja.Body) -> bool",
      "!doc": "The core separation function to separate two physics bodies."
     }
    }
   },
   "Body": {
    "prototype": {
     "moveTo": {
      "!type": "fn(speed: number, angle: number)",
      "!doc": "Moves the Body forwards based on its current angle and the given speed.\nThe speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms)."
     },
     "moveBackward": {
      "!type": "fn(speed: number, angle: number)",
      "!doc": "Moves the Body backwards based on its current angle and the given speed.\nThe speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms)."
     },
     "moveLeft": {
      "!type": "fn(speed: number)",
      "!doc": "If this Body is dynamic then this will move it to the left by setting its x velocity to the given speed.\nThe speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms)."
     },
     "moveRight": {
      "!type": "fn(speed: number)",
      "!doc": "If this Body is dynamic then this will move it to the right by setting its x velocity to the given speed.\nThe speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms)."
     },
     "moveUp": {
      "!type": "fn(speed: number)",
      "!doc": "If this Body is dynamic then this will move it up by setting its y velocity to the given speed.\nThe speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms)."
     },
     "moveDown": {
      "!type": "fn(speed: number)",
      "!doc": "If this Body is dynamic then this will move it down by setting its y velocity to the given speed.\nThe speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms)."
     }
    }
   },
   "P2": {
    "Body": {
     "!type": "fn(game: +Phaser.Game, sprite: +Phaser.Sprite, x: number, y: number, mass: number)",
     "!doc": "The Physics Body is typically linked to a single Sprite and defines properties that determine how the physics body is simulated.\nThese properties affect how the body reacts to forces, what forces it generates on itself (to simulate friction), and how it reacts to collisions in the scene.\nIn most cases, the properties are used to simulate physical effects. Each body also has its own property values that determine exactly how it reacts to forces and collisions in the scene.\nBy default a single Rectangle shape is added to the Body that matches the dimensions of the parent Sprite. See addShape, removeShape, clearShapes to add extra shapes around the Body.\nNote: When bound to a Sprite to avoid single-pixel jitters on mobile devices we strongly recommend using Sprite sizes that are even on both axis, i.e. 128x128 not 127x127.\nNote: When a game object is given a P2 body it has its anchor x/y set to 0.5, so it becomes centered.",
     "prototype": {
      "game": {
       "!type": "+Phaser.Game",
       "!doc": "Local reference to game."
      },
      "world": {
       "!type": "+Phaser.Physics.P2",
       "!doc": "Local reference to the P2 World."
      },
      "sprite": {
       "!type": "+Phaser.Sprite",
       "!doc": "Reference to the parent Sprite."
      },
      "type": {
       "!type": "number",
       "!doc": "The type of physics system this body belongs to."
      },
      "offset": {
       "!type": "+Phaser.Point",
       "!doc": "The offset of the Physics Body from the Sprite x/y position."
      },
      "data": {
       "!type": "+p2.Body",
       "!doc": "The p2 Body data."
      },
      "velocity": {
       "!type": "+Phaser.Physics.P2.InversePointProxy",
       "!doc": "The velocity of the body. Set velocity.x to a negative value to move to the left, position to the right. velocity.y negative values move up, positive move down."
      },
      "force": {
       "!type": "+Phaser.Physics.P2.InversePointProxy",
       "!doc": "The force applied to the body."
      },
      "gravity": {
       "!type": "+Phaser.Point",
       "!doc": "A locally applied gravity force to the Body. Applied directly before the world step. NOTE: Not currently implemented."
      },
      "onBeginContact": {
       "!type": "+Phaser.Signal"
      },
      "onEndContact": {
       "!type": "+Phaser.Signal"
      },
      "collidesWith": {
       "!type": "+array",
       "!doc": "Array of CollisionGroups that this Bodies shapes collide with."
      },
      "removeNextStep": {
       "!type": "bool",
       "!doc": "To avoid deleting this body during a physics step, and causing all kinds of problems, set removeNextStep to true to have it removed in the next preUpdate."
      },
      "debugBody": {
       "!type": "+Phaser.Physics.P2.BodyDebug",
       "!doc": "Reference to the debug body."
      },
      "dirty": {
       "!type": "bool",
       "!doc": "Internally used by Sprite.x/y"
      },
      "createBodyCallback": {
       "!type": "fn(object: +Phaser.Sprite|+Phaser.TileSprite|+Phaser.Physics.P2.Body|+p2.Body, callback: fn(), callbackContext: ?)",
       "!doc": "Sets a callback to be fired any time a shape in this Body impacts with a shape in the given Body. The impact test is performed against body.id values.\nThe callback will be sent 4 parameters: This body, the body that impacted, the Shape in this body and the shape in the impacting body.\nNote that the impact event happens after collision resolution, so it cannot be used to prevent a collision from happening.\nIt also happens mid-step. So do not destroy a Body during this callback, instead set safeDestroy to true so it will be killed on the next preUpdate."
      },
      "createGroupCallback": {
       "!type": "fn(group: +Phaser.Physics.CollisionGroup, callback: fn(), callbackContext: ?)",
       "!doc": "Sets a callback to be fired any time this Body impacts with the given Group. The impact test is performed against shape.collisionGroup values.\nThe callback will be sent 4 parameters: This body, the body that impacted, the Shape in this body and the shape in the impacting body.\nThis callback will only fire if this Body has been assigned a collision group.\nNote that the impact event happens after collision resolution, so it cannot be used to prevent a collision from happening.\nIt also happens mid-step. So do not destroy a Body during this callback, instead set safeDestroy to true so it will be killed on the next preUpdate."
      },
      "getCollisionMask": {
       "!type": "fn() -> number",
       "!doc": "Gets the collision bitmask from the groups this body collides with."
      },
      "updateCollisionMask": {
       "!type": "fn(shape: +p2.Shape)",
       "!doc": "Updates the collisionMask."
      },
      "setCollisionGroup": {
       "!type": "fn(group: +Phaser.Physics.CollisionGroup, shape: +p2.Shape)",
       "!doc": "Sets the given CollisionGroup to be the collision group for all shapes in this Body, unless a shape is specified.\nThis also resets the collisionMask."
      },
      "clearCollision": {
       "!type": "fn(clearGroup: bool, clearMask: bool, shape: +p2.Shape)",
       "!doc": "Clears the collision data from the shapes in this Body. Optionally clears Group and/or Mask."
      },
      "collides": {
       "!type": "fn(group: +Phaser.Physics.CollisionGroup|+array, callback: fn(), callbackContext: ?, shape: +p2.Shape)",
       "!doc": "Adds the given CollisionGroup, or array of CollisionGroups, to the list of groups that this body will collide with and updates the collision masks."
      },
      "adjustCenterOfMass": {
       "!type": "fn()",
       "!doc": "Moves the shape offsets so their center of mass becomes the body center of mass."
      },
      "getVelocityAtPoint": {
       "!type": "fn(result: [?], relativePoint: [?]) -> [?]",
       "!doc": "Gets the velocity of a point in the body."
      },
      "applyDamping": {
       "!type": "fn(dt: number)",
       "!doc": "Apply damping, see http://code.google.com/p/bullet/issues/detail?id=74 for details."
      },
      "applyImpulse": {
       "!type": "fn(impulse: +Float32Array|[?], worldX: number, worldY: number)",
       "!doc": "Apply impulse to a point relative to the body.\nThis could for example be a point on the Body surface. An impulse is a force added to a body during a short \nperiod of time (impulse = force * time). Impulses will be added to Body.velocity and Body.angularVelocity."
      },
      "applyImpulseLocal": {
       "!type": "fn(impulse: +Float32Array|[?], localX: number, localY: number)",
       "!doc": "Apply impulse to a point local to the body.\n\nThis could for example be a point on the Body surface. An impulse is a force added to a body during a short \nperiod of time (impulse = force * time). Impulses will be added to Body.velocity and Body.angularVelocity."
      },
      "applyForce": {
       "!type": "fn(force: +Float32Array|[?], worldX: number, worldY: number)",
       "!doc": "Apply force to a world point.\n\nThis could for example be a point on the RigidBody surface. Applying force \nthis way will add to Body.force and Body.angularForce."
      },
      "setZeroForce": {
       "!type": "fn()",
       "!doc": "Sets the force on the body to zero."
      },
      "setZeroRotation": {
       "!type": "fn()",
       "!doc": "If this Body is dynamic then this will zero its angular velocity."
      },
      "setZeroVelocity": {
       "!type": "fn()",
       "!doc": "If this Body is dynamic then this will zero its velocity on both axis."
      },
      "setZeroDamping": {
       "!type": "fn()",
       "!doc": "Sets the Body damping and angularDamping to zero."
      },
      "toLocalFrame": {
       "!type": "fn(out: +Float32Array|[?], worldPoint: +Float32Array|[?])",
       "!doc": "Transform a world point to local body frame."
      },
      "toWorldFrame": {
       "!type": "fn(out: [?], localPoint: [?])",
       "!doc": "Transform a local point to world frame."
      },
      "rotateLeft": {
       "!type": "fn(speed: number)",
       "!doc": "This will rotate the Body by the given speed to the left (counter-clockwise)."
      },
      "rotateRight": {
       "!type": "fn(speed: number)",
       "!doc": "This will rotate the Body by the given speed to the left (clockwise)."
      },
      "moveForward": {
       "!type": "fn(speed: number)",
       "!doc": "Moves the Body forwards based on its current angle and the given speed.\nThe speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms)."
      },
      "moveBackward": {
       "!type": "fn(speed: number)",
       "!doc": "Moves the Body backwards based on its current angle and the given speed.\nThe speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms)."
      },
      "thrust": {
       "!type": "fn(speed: number)",
       "!doc": "Applies a force to the Body that causes it to 'thrust' forwards, based on its current angle and the given speed.\nThe speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms)."
      },
      "reverse": {
       "!type": "fn(speed: number)",
       "!doc": "Applies a force to the Body that causes it to 'thrust' backwards (in reverse), based on its current angle and the given speed.\nThe speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms)."
      },
      "moveLeft": {
       "!type": "fn(speed: number)",
       "!doc": "If this Body is dynamic then this will move it to the left by setting its x velocity to the given speed.\nThe speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms)."
      },
      "moveRight": {
       "!type": "fn(speed: number)",
       "!doc": "If this Body is dynamic then this will move it to the right by setting its x velocity to the given speed.\nThe speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms)."
      },
      "moveUp": {
       "!type": "fn(speed: number)",
       "!doc": "If this Body is dynamic then this will move it up by setting its y velocity to the given speed.\nThe speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms)."
      },
      "moveDown": {
       "!type": "fn(speed: number)",
       "!doc": "If this Body is dynamic then this will move it down by setting its y velocity to the given speed.\nThe speed is represented in pixels per second. So a value of 100 would move 100 pixels in 1 second (1000ms)."
      },
      "preUpdate": {
       "!type": "fn()",
       "!doc": "Internal method. This is called directly before the sprites are sent to the renderer and after the update function has finished."
      },
      "postUpdate": {
       "!type": "fn()",
       "!doc": "Internal method. This is called directly before the sprites are sent to the renderer and after the update function has finished."
      },
      "reset": {
       "!type": "fn(x: number, y: number, resetDamping: bool, resetMass: bool)",
       "!doc": "Resets the Body force, velocity (linear and angular) and rotation. Optionally resets damping and mass."
      },
      "addToWorld": {
       "!type": "fn()",
       "!doc": "Adds this physics body to the world."
      },
      "removeFromWorld": {
       "!type": "fn()",
       "!doc": "Removes this physics body from the world."
      },
      "destroy": {
       "!type": "fn()",
       "!doc": "Destroys this Body and all references it holds to other objects."
      },
      "clearShapes": {
       "!type": "fn()",
       "!doc": "Removes all Shapes from this Body."
      },
      "addShape": {
       "!type": "fn(shape: +p2.Shape, offsetX: number, offsetY: number, rotation: number) -> +p2.Shape",
       "!doc": "Add a shape to the body. You can pass a local transform when adding a shape, so that the shape gets an offset and an angle relative to the body center of mass.\nWill automatically update the mass properties and bounding radius.\nIf this Body had a previously set Collision Group you will need to re-apply it to the new Shape this creates."
      },
      "addCircle": {
       "!type": "fn(radius: number, offsetX: number, offsetY: number, rotation: number) -> +p2.Circle",
       "!doc": "Adds a Circle shape to this Body. You can control the offset from the center of the body and the rotation."
      },
      "addRectangle": {
       "!type": "fn(width: number, height: number, offsetX: number, offsetY: number, rotation: number) -> +p2.Box",
       "!doc": "Adds a Rectangle shape to this Body. You can control the offset from the center of the body and the rotation."
      },
      "addPlane": {
       "!type": "fn(offsetX: number, offsetY: number, rotation: number) -> +p2.Plane",
       "!doc": "Adds a Plane shape to this Body. The plane is facing in the Y direction. You can control the offset from the center of the body and the rotation."
      },
      "addParticle": {
       "!type": "fn(offsetX: number, offsetY: number, rotation: number) -> +p2.Particle",
       "!doc": "Adds a Particle shape to this Body. You can control the offset from the center of the body and the rotation."
      },
      "addLine": {
       "!type": "fn(length: number, offsetX: number, offsetY: number, rotation: number) -> +p2.Line",
       "!doc": "Adds a Line shape to this Body.\nThe line shape is along the x direction, and stretches from [-length/2, 0] to [length/2,0].\nYou can control the offset from the center of the body and the rotation."
      },
      "addCapsule": {
       "!type": "fn(length: number, radius: number, offsetX: number, offsetY: number, rotation: number) -> +p2.Capsule",
       "!doc": "Adds a Capsule shape to this Body.\nYou can control the offset from the center of the body and the rotation."
      },
      "addPolygon": {
       "!type": "fn(options: +PhaserPhysics.P2.BodyaddPolygonOptions, points: [?]|number) -> bool",
       "!doc": "Reads a polygon shape path, and assembles convex shapes from that and puts them at proper offset points. The shape must be simple and without holes.\nThis function expects the x.y values to be given in pixels. If you want to provide them at p2 world scales then call Body.data.fromPolygon directly."
      },
      "removeShape": {
       "!type": "fn(shape: +p2.Circle|+p2.Rectangle|+p2.Plane|+p2.Line|+p2.Particle) -> bool",
       "!doc": "Remove a shape from the body. Will automatically update the mass properties and bounding radius."
      },
      "setCircle": {
       "!type": "fn(radius: number, offsetX: number, offsetY: number, rotation: number)",
       "!doc": "Clears any previously set shapes. Then creates a new Circle shape and adds it to this Body.\nIf this Body had a previously set Collision Group you will need to re-apply it to the new Shape this creates."
      },
      "setRectangle": {
       "!type": "fn(width: number, height: number, offsetX: number, offsetY: number, rotation: number) -> +p2.Rectangle",
       "!doc": "Clears any previously set shapes. The creates a new Rectangle shape at the given size and offset, and adds it to this Body.\nIf you wish to create a Rectangle to match the size of a Sprite or Image see Body.setRectangleFromSprite.\nIf this Body had a previously set Collision Group you will need to re-apply it to the new Shape this creates."
      },
      "setRectangleFromSprite": {
       "!type": "fn(sprite: +Phaser.Sprite|+Phaser.Image) -> +p2.Rectangle",
       "!doc": "Clears any previously set shapes.\nThen creates a Rectangle shape sized to match the dimensions and orientation of the Sprite given.\nIf no Sprite is given it defaults to using the parent of this Body.\nIf this Body had a previously set Collision Group you will need to re-apply it to the new Shape this creates."
      },
      "setMaterial": {
       "!type": "fn(material: +Phaser.Physics.P2.Material, shape: +p2.Shape)",
       "!doc": "Adds the given Material to all Shapes that belong to this Body.\nIf you only wish to apply it to a specific Shape in this Body then provide that as the 2nd parameter."
      },
      "shapeChanged": {
       "!type": "fn()",
       "!doc": "Updates the debug draw if any body shapes change."
      },
      "addPhaserPolygon": {
       "!type": "fn(key: string, object: string)",
       "!doc": "Reads the shape data from a physics data file stored in the Game.Cache and adds it as a polygon to this Body.\nThe shape data format is based on the custom phaser export in."
      },
      "addFixture": {
       "!type": "fn(fixtureData: string) -> +array",
       "!doc": "Add a polygon fixture. This is used during #loadPolygon."
      },
      "loadPolygon": {
       "!type": "fn(key: string, object: string|?) -> bool",
       "!doc": "Reads the shape data from a physics data file stored in the Game.Cache and adds it as a polygon to this Body.\n\nAs well as reading the data from the Cache you can also pass `null` as the first argument and a\nphysics data object as the second. When doing this you must ensure the structure of the object is correct in advance.\n\nFor more details see the format of the Lime / Corona Physics Editor export."
      },
      "static": {
       "!type": "bool",
       "!doc": "Returns true if the Body is static. Setting Body.static to 'false' will make it dynamic."
      },
      "dynamic": {
       "!type": "bool",
       "!doc": "Returns true if the Body is dynamic. Setting Body.dynamic to 'false' will make it static."
      },
      "kinematic": {
       "!type": "bool",
       "!doc": "Returns true if the Body is kinematic. Setting Body.kinematic to 'false' will make it static."
      },
      "allowSleep": {
       "!type": "bool",
       "!doc": "-"
      },
      "angle": {
       "!type": "number",
       "!doc": "The angle of this Body in degrees."
      },
      "angularDamping": {
       "!type": "number",
       "!doc": "The angular damping acting acting on the body."
      },
      "angularForce": {
       "!type": "number",
       "!doc": "The angular force acting on the body."
      },
      "angularVelocity": {
       "!type": "number",
       "!doc": "The angular velocity of the body."
      },
      "damping": {
       "!type": "number",
       "!doc": "The linear damping acting on the body in the velocity direction."
      },
      "fixedRotation": {
       "!type": "bool",
       "!doc": "-"
      },
      "inertia": {
       "!type": "number",
       "!doc": "The inertia of the body around the Z axis.."
      },
      "mass": {
       "!type": "number",
       "!doc": "The mass of the body."
      },
      "motionState": {
       "!type": "number",
       "!doc": "The type of motion this body has. Should be one of: Body.STATIC (the body does not move), Body.DYNAMIC (body can move and respond to collisions) and Body.KINEMATIC (only moves according to its .velocity)."
      },
      "rotation": {
       "!type": "number",
       "!doc": "The angle of this Body in radians."
      },
      "sleepSpeedLimit": {
       "!type": "number",
       "!doc": "."
      },
      "x": {
       "!type": "number",
       "!doc": "The x coordinate of this Body."
      },
      "y": {
       "!type": "number",
       "!doc": "The y coordinate of this Body."
      },
      "id": {
       "!type": "number",
       "!doc": "The Body ID. Each Body that has been added to the World has a unique ID."
      },
      "debug": {
       "!type": "bool",
       "!doc": "Enable or disable debug drawing of this body"
      },
      "collideWorldBounds": {
       "!type": "bool",
       "!doc": "Should the Body collide with the World bounds?"
      }
     },
     "DYNAMIC": {
      "!type": "number"
     },
     "STATIC": {
      "!type": "number"
     },
     "KINEMATIC": {
      "!type": "number"
     }
    },
    "BodyDebug": {
     "!type": "fn(game: +Phaser.Game, body: +Phaser.Physics.P2.Body, settings: ?)",
     "!doc": "Draws a P2 Body to a Graphics instance for visual debugging.\nNeedless to say, for every body you enable debug drawing on, you are adding processor and graphical overhead.\nSo use sparingly and rarely (if ever) in production code.\n\nAlso be aware that the Debug body is only updated when the Sprite it is connected to changes position. If you\nmanipulate the sprite in any other way (such as moving it to another Group or bringToTop, etc) then you will\nneed to manually adjust its BodyDebug as well.",
     "prototype": {
      "ppu": {
       "!type": "number",
       "!doc": "Pixels per Length Unit."
      },
      "body": {
       "!type": "+Phaser.Physics.P2.Body",
       "!doc": "The P2 Body to display debug data for."
      },
      "canvas": {
       "!type": "+Phaser.Graphics",
       "!doc": "The canvas to render the debug info to."
      },
      "updateSpriteTransform": {
       "!type": "fn()",
       "!doc": "Core update."
      },
      "draw": {
       "!type": "fn()",
       "!doc": "Draws the P2 shapes to the Graphics object."
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
       "!type": "number",
       "!doc": "The const physics body type of this object."
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
      "classType": {
       "!type": "?"
      },
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
       "!type": "number",
       "!doc": "The current index of the Group cursor. Advance it with Group.next."
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
       "!type": "fn(child: +DisplayObject, silent: bool) -> +DisplayObject",
       "!doc": "Adds an existing object as the top child in this group.\n\nThe child is automatically added to the top of the group and is displayed on top of every previous child.\n\nIf Group.enableBody is set then a physics body will be created on the object, so long as one does not already exist.\n\nUse {@link #addAt} to control where a child is added. Use {@link #create} to create and add a new child."
      },
      "addToHash": {
       "!type": "fn(child: +DisplayObject) -> bool",
       "!doc": "Adds a child of this Group into the hash array.\nThis call will return false if the child is not a child of this Group, or is already in the hash."
      },
      "removeFromHash": {
       "!type": "fn(child: +DisplayObject) -> bool",
       "!doc": "Removes a child of this Group from the hash array.\nThis call will return false if the child is not in the hash."
      },
      "addMultiple": {
       "!type": "fn(children: [?]|+Phaser.Group, silent: bool) -> [?]|+Phaser.Group",
       "!doc": "Adds an array of existing Display Objects to this Group.\n\nThe Display Objects are automatically added to the top of this Group, and will render on-top of everything already in this Group.\n\nAs well as an array you can also pass another Group as the first argument. In this case all of the children from that\nGroup will be removed from it and added into this Group."
      },
      "addAt": {
       "!type": "fn(child: +DisplayObject, index: number, silent: bool) -> +DisplayObject",
       "!doc": "Adds an existing object to this group.\n\nThe child is added to the group at the location specified by the index value, this allows you to control child ordering."
      },
      "getAt": {
       "!type": "fn(index: number) -> +DisplayObject|number",
       "!doc": "Returns the child found at the given index within this group."
      },
      "create": {
       "!type": "fn(x: number, y: number, key: string, frame: number|string, exists: bool) -> +DisplayObject",
       "!doc": "Creates a new Phaser.Sprite object and adds it to the top of this group.\n\nUse {@link #classType} to change the type of object creaded."
      },
      "createMultiple": {
       "!type": "fn(quantity: number, key: string, frame: number|string, exists: bool)",
       "!doc": "Creates multiple Phaser.Sprite objects and adds them to the top of this group.\n\nUseful if you need to quickly generate a pool of identical sprites, such as bullets.\n\nBy default the sprites will be set to not exist and will be positioned at 0, 0 (relative to the group.x/y).\nUse {@link #classType} to change the type of object created."
      },
      "updateZ": {
       "!type": "fn()",
       "!doc": "Internal method that re-applies all of the children's Z values.\n\nThis must be called whenever children ordering is altered so that their `z` indices are correctly updated."
      },
      "resetCursor": {
       "!type": "fn(index: number) -> +any",
       "!doc": "Sets the group cursor to the first child in the group.\n\nIf the optional index parameter is given it sets the cursor to the object at that index instead."
      },
      "next": {
       "!type": "fn() -> +any",
       "!doc": "Advances the group cursor to the next (higher) object in the group.\n\nIf the cursor is at the end of the group (top child) it is moved the start of the group (bottom child)."
      },
      "previous": {
       "!type": "fn() -> +any",
       "!doc": "Moves the group cursor to the previous (lower) child in the group.\n\nIf the cursor is at the start of the group (bottom child) it is moved to the end (top child)."
      },
      "swap": {
       "!type": "fn(child1: +any, child2: +any)",
       "!doc": "Swaps the position of two children in this group.\n\nBoth children must be in this group, a child cannot be swapped with itself, and unparented children cannot be swapped."
      },
      "bringToTop": {
       "!type": "fn(child: +any) -> +any",
       "!doc": "Brings the given child to the top of this group so it renders above all other children."
      },
      "sendToBack": {
       "!type": "fn(child: +any) -> +any",
       "!doc": "Sends the given child to the bottom of this group so it renders below all other children."
      },
      "moveUp": {
       "!type": "fn(child: +any) -> +any",
       "!doc": "Moves the given child up one place in this group unless it's already at the top."
      },
      "moveDown": {
       "!type": "fn(child: +any) -> +any",
       "!doc": "Moves the given child down one place in this group unless it's already at the bottom."
      },
      "xy": {
       "!type": "fn(index: number, x: number, y: number)",
       "!doc": "Positions the child found at the given index within this group to the given x and y coordinates."
      },
      "reverse": {
       "!type": "fn()",
       "!doc": "Reverses all children in this group.\n\nThis operaation applies only to immediate children and does not propagate to subgroups."
      },
      "getIndex": {
       "!type": "fn(child: +any) -> number",
       "!doc": "Get the index position of the given child in this group, which should match the child's `z` property."
      },
      "replace": {
       "!type": "fn(oldChild: +any, newChild: +any) -> +any",
       "!doc": "Replaces a child of this group with the given newChild. The newChild cannot be a member of this group."
      },
      "hasProperty": {
       "!type": "fn(child: +any, key: [?]) -> bool",
       "!doc": "Checks if the child has the given property.\n\nWill scan up to 4 levels deep only."
      },
      "setProperty": {
       "!type": "fn(child: +any, key: +array, value: +any, operation: number, force: bool) -> bool",
       "!doc": "Sets a property to the given value on the child. The operation parameter controls how the value is set.\n\nThe operations are:\n- 0: set the existing value to the given value; if force is `true` a new property will be created if needed\n- 1: will add the given value to the value already present.\n- 2: will subtract the given value from the value already present.\n- 3: will multiply the value already present by the given value.\n- 4: will divide the value already present by the given value."
      },
      "checkProperty": {
       "!type": "fn(child: +any, key: +array, value: +any, force: bool) -> bool",
       "!doc": "Checks a property for the given value on the child."
      },
      "set": {
       "!type": "fn(child: +Phaser.Sprite, key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool) -> bool",
       "!doc": "Quickly set a property on a single child of this group to a new value.\n\nThe operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication."
      },
      "setAll": {
       "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)",
       "!doc": "Quickly set the same property across all children of this group to a new value.\n\nThis call doesn't descend down children, so if you have a Group inside of this group, the property will be set on the group but not its children.\nIf you need that ability please see `Group.setAllChildren`.\n\nThe operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication."
      },
      "setAllChildren": {
       "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, operation: number, force: bool)",
       "!doc": "Quickly set the same property across all children of this group, and any child Groups, to a new value.\n\nIf this group contains other Groups then the same property is set across their children as well, iterating down until it reaches the bottom.\nUnlike with `setAll` the property is NOT set on child Groups itself.\n\nThe operation parameter controls how the new value is assigned to the property, from simple replacement to addition and multiplication."
      },
      "checkAll": {
       "!type": "fn(key: string, value: +any, checkAlive: bool, checkVisible: bool, force: bool)",
       "!doc": "Quickly check that the same property across all children of this group is equal to the given value.\n\nThis call doesn't descend down children, so if you have a Group inside of this group, the property will be checked on the group but not its children."
      },
      "addAll": {
       "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)",
       "!doc": "Adds the amount to the given property on all children in this group.\n\n`Group.addAll('x', 10)` will add 10 to the child.x value for each child."
      },
      "subAll": {
       "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)",
       "!doc": "Subtracts the amount from the given property on all children in this group.\n\n`Group.subAll('x', 10)` will minus 10 from the child.x value for each child."
      },
      "multiplyAll": {
       "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)",
       "!doc": "Multiplies the given property by the amount on all children in this group.\n\n`Group.multiplyAll('x', 2)` will x2 the child.x value for each child."
      },
      "divideAll": {
       "!type": "fn(property: string, amount: number, checkAlive: bool, checkVisible: bool)",
       "!doc": "Divides the given property by the amount on all children in this group.\n\n`Group.divideAll('x', 2)` will half the child.x value for each child."
      },
      "callAllExists": {
       "!type": "fn(callback: string, existsValue: bool, parameter: +any)",
       "!doc": "Calls a function, specified by name, on all children in the group who exist (or do not exist).\n\nAfter the existsValue parameter you can add as many parameters as you like, which will all be passed to the child callback."
      },
      "callbackFromArray": {
       "!type": "fn(child: ?, callback: +array, length: number)",
       "!doc": "Returns a reference to a function that exists on a child of the group based on the given callback array."
      },
      "callAll": {
       "!type": "fn(method: string, context: string, args: +any)",
       "!doc": "Calls a function, specified by name, on all on children.\n\nThe function is called for all children regardless if they are dead or alive (see callAllExists for different options).\nAfter the method parameter and context you can add as many extra parameters as you like, which will all be passed to the child."
      },
      "preUpdate": {
       "!type": "fn()",
       "!doc": "The core preUpdate - as called by World."
      },
      "update": {
       "!type": "fn()",
       "!doc": "The core update - as called by World."
      },
      "postUpdate": {
       "!type": "fn()",
       "!doc": "The core postUpdate - as called by World."
      },
      "filter": {
       "!type": "fn(predicate: fn(), checkExists: bool) -> +Phaser.ArraySet",
       "!doc": "Find children matching a certain predicate.\n\nFor example:\n\n    var healthyList = Group.filter(function(child, index, children) {\n        return child.health > 10 ? true : false;\n    }, true);\n    healthyList.callAll('attack');\n\nNote: Currently this will skip any children which are Groups themselves."
      },
      "forEach": {
       "!type": "fn(callback: fn(), callbackContext: ?, checkExists: bool, args: +any)",
       "!doc": "Call a function on each child in this group.\n\nAdditional arguments for the callback can be specified after the `checkExists` parameter. For example,\n\n    Group.forEach(awardBonusGold, this, true, 100, 500)\n\nwould invoke `awardBonusGold` function with the parameters `(child, 100, 500)`.\n\nNote: This check will skip any children which are Groups themselves."
      },
      "forEachExists": {
       "!type": "fn(callback: fn(), callbackContext: ?, args: +any)",
       "!doc": "Call a function on each existing child in this group.\n\nSee {@link Phaser.Group#forEach forEach} for details."
      },
      "forEachAlive": {
       "!type": "fn(callback: fn(), callbackContext: ?, args: +any)",
       "!doc": "Call a function on each alive child in this group.\n\nSee {@link Phaser.Group#forEach forEach} for details."
      },
      "forEachDead": {
       "!type": "fn(callback: fn(), callbackContext: ?, args: +any)",
       "!doc": "Call a function on each dead child in this group.\n\nSee {@link Phaser.Group#forEach forEach} for details."
      },
      "sort": {
       "!type": "fn(key: string, order: number)",
       "!doc": "Sort the children in the group according to a particular key and ordering.\n\nCall this function to sort the group according to a particular key value and order.\nFor example to depth sort Sprites for Zelda-style game you might call `group.sort('y', Phaser.Group.SORT_ASCENDING)` at the bottom of your `State.update()`."
      },
      "customSort": {
       "!type": "fn(sortHandler: fn(), context: ?)",
       "!doc": "Sort the children in the group according to custom sort function.\n\nThe `sortHandler` is provided the two parameters: the two children involved in the comparison (a and b).\nIt should return -1 if `a > b`, 1 if `a < b` or 0 if `a === b`."
      },
      "ascendingSortHandler": {
       "!type": "fn(a: ?, b: ?)",
       "!doc": "An internal helper function for the sort process."
      },
      "descendingSortHandler": {
       "!type": "fn(a: ?, b: ?)",
       "!doc": "An internal helper function for the sort process."
      },
      "iterate": {
       "!type": "fn(key: string, value: +any, returnType: number, callback: fn(), callbackContext: ?, args: [?]) -> +any",
       "!doc": "Iterates over the children of the group performing one of several actions for matched children.\n\nA child is considered a match when it has a property, named `key`, whose value is equal to `value`\naccording to a strict equality comparison.\n\nThe result depends on the `returnType`:\n\n- {@link Phaser.Group.RETURN_TOTAL RETURN_TOTAL}:\n    The callback, if any, is applied to all matching children. The number of matched children is returned.\n- {@link Phaser.Group.RETURN_NONE RETURN_NONE}:\n    The callback, if any, is applied to all matching children. No value is returned.\n- {@link Phaser.Group.RETURN_CHILD RETURN_CHILD}:\n    The callback, if any, is applied to the *first* matching child and the *first* matched child is returned.\n    If there is no matching child then null is returned.\n\nIf `args` is specified it must be an array. The matched child will be assigned to the first\nelement and the entire array will be applied to the callback function."
      },
      "getFirstExists": {
       "!type": "fn(exists: bool) -> +any",
       "!doc": "Get the first display object that exists, or doesn't exist."
      },
      "getFirstAlive": {
       "!type": "fn() -> +any",
       "!doc": "Get the first child that is alive (`child.alive === true`).\n\nThis is handy for checking if everything has been wiped out, or choosing a squad leader, etc."
      },
      "getFirstDead": {
       "!type": "fn() -> +any",
       "!doc": "Get the first child that is dead (`child.alive === false`).\n\nThis is handy for checking if everything has been wiped out, or choosing a squad leader, etc."
      },
      "getTop": {
       "!type": "fn() -> +any",
       "!doc": "Return the child at the top of this group.\n\nThe top child is the child displayed (rendered) above every other child."
      },
      "getBottom": {
       "!type": "fn() -> +any",
       "!doc": "Returns the child at the bottom of this group.\n\nThe bottom child the child being displayed (rendered) below every other child."
      },
      "countLiving": {
       "!type": "fn() -> number",
       "!doc": "Get the number of living children in this group."
      },
      "countDead": {
       "!type": "fn() -> number",
       "!doc": "Get the number of dead children in this group."
      },
      "getRandom": {
       "!type": "fn(startIndex: number, length: number) -> +any",
       "!doc": "Returns a random child from the group."
      },
      "remove": {
       "!type": "fn(child: +any, destroy: bool, silent: bool) -> bool",
       "!doc": "Removes the given child from this group.\n\nThis will dispatch an `onRemovedFromGroup` event from the child (if it has one), and optionally destroy the child.\n\nIf the group cursor was referring to the removed child it is updated to refer to the next child."
      },
      "moveAll": {
       "!type": "fn(group: +Phaser.Group, silent: bool) -> +Phaser.Group",
       "!doc": "Moves all children from this Group to the Group given."
      },
      "removeAll": {
       "!type": "fn(destroy: bool, silent: bool)",
       "!doc": "Removes all children from this group, but does not remove the group from its parent."
      },
      "removeBetween": {
       "!type": "fn(startIndex: number, endIndex: number, destroy: bool, silent: bool)",
       "!doc": "Removes all children from this group whose index falls beteen the given startIndex and endIndex values."
      },
      "destroy": {
       "!type": "fn(destroyChildren: bool, soft: bool)",
       "!doc": "Destroys this group.\n\nRemoves all children, then removes this group from its parent and nulls references."
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
      "children": {
       "!type": "[?]"
      }
     }
    },
    "CollisionGroup": {
     "!type": "fn(bitmask: number)",
     "!doc": "Collision Group",
     "prototype": {
      "mask": {
       "!type": "number",
       "!doc": "The CollisionGroup bitmask."
      }
     }
    },
    "ContactMaterial": {
     "!type": "fn(materialA: +Phaser.Physics.P2.Material, materialB: +Phaser.Physics.P2.Material, options: ?)",
     "!doc": "Defines a physics material"
    },
    "DistanceConstraint": {
     "!type": "fn(world: +Phaser.Physics.P2, bodyA: +p2.Body, bodyB: +p2.Body, distance: number, localAnchorA: [?], localAnchorB: [?], maxForce: ?)",
     "!doc": "A constraint that tries to keep the distance between two bodies constant.",
     "prototype": {
      "game": {
       "!type": "+Phaser.Game",
       "!doc": "Local reference to game."
      },
      "world": {
       "!type": "+Phaser.Physics.P2",
       "!doc": "Local reference to P2 World."
      }
     }
    },
    "FixtureList": {
     "!type": "fn(list: [?])",
     "!doc": "Allow to access a list of created fixture (coming from Body#addPhaserPolygon)\nwhich itself parse the input from PhysicsEditor with the custom phaser exporter.\nYou can access fixtures of a Body by a group index or even by providing a fixture Key.\nYou can set the fixture key and also the group index for a fixture in PhysicsEditor.\nThis gives you the power to create a complex body built of many fixtures and modify them\nduring runtime (to remove parts, set masks, categories & sensor properties)",
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
       "!type": "fn(keys: +array)",
       "!doc": "Accessor to get either a list of specified fixtures by key or the whole fixture list"
      },
      "getFixtureByKey": {
       "!type": "fn(key: string)",
       "!doc": "Accessor to get either a single fixture by its key."
      },
      "getGroup": {
       "!type": "fn(groupID: number)",
       "!doc": "Accessor to get a group of fixtures by its group index."
      },
      "parse": {
       "!type": "fn()",
       "!doc": "Parser for the output of Phaser.Physics.P2.Body#addPhaserPolygon"
      },
      "flatten": {
       "!type": "fn(array: +array)",
       "!doc": "A helper to flatten arrays. This is very useful as the fixtures are nested from time to time due to the way P2 creates and splits polygons."
      }
     }
    },
    "GearConstraint": {
     "!type": "fn(world: +Phaser.Physics.P2, bodyA: +p2.Body, bodyB: +p2.Body, angle: number, ratio: number)",
     "!doc": "Connects two bodies at given offset points, letting them rotate relative to each other around this point.",
     "prototype": {
      "game": {
       "!type": "+Phaser.Game",
       "!doc": "Local reference to game."
      },
      "world": {
       "!type": "+Phaser.Physics.P2",
       "!doc": "Local reference to P2 World."
      }
     }
    },
    "InversePointProxy": {
     "!type": "fn(world: +Phaser.Physics.P2, destination: +any)",
     "!doc": "A InversePointProxy is an internal class that allows for direct getter/setter style property access to Arrays and TypedArrays but inverses the values on set.",
     "prototype": {
      "x": {
       "!type": "number",
       "!doc": "The x property of this InversePointProxy get and set in pixels."
      },
      "y": {
       "!type": "number",
       "!doc": "The y property of this InversePointProxy get and set in pixels."
      },
      "mx": {
       "!type": "number",
       "!doc": "The x property of this InversePointProxy get and set in meters."
      },
      "my": {
       "!type": "number",
       "!doc": "The y property of this InversePointProxy get and set in meters."
      }
     }
    },
    "LockConstraint": {
     "!type": "fn(world: +Phaser.Physics.P2, bodyA: +p2.Body, bodyB: +p2.Body, offset: [?], angle: number, maxForce: number)",
     "!doc": "Locks the relative position between two bodies.",
     "prototype": {
      "game": {
       "!type": "+Phaser.Game",
       "!doc": "Local reference to game."
      },
      "world": {
       "!type": "+Phaser.Physics.P2",
       "!doc": "Local reference to P2 World."
      }
     }
    },
    "Material": {
     "!type": "fn(name: string)",
     "!doc": "A P2 Material.\n\n\\o/ ~ \"Because I'm a Material girl\"",
     "prototype": {
      "name": {
       "!type": "string",
       "!doc": "The user defined name given to this Material."
      }
     }
    },
    "PointProxy": {
     "!type": "fn(world: +Phaser.Physics.P2, destination: +any)",
     "!doc": "A PointProxy is an internal class that allows for direct getter/setter style property access to Arrays and TypedArrays.",
     "prototype": {
      "x": {
       "!type": "number",
       "!doc": "The x property of this PointProxy get and set in pixels."
      },
      "y": {
       "!type": "number",
       "!doc": "The y property of this PointProxy get and set in pixels."
      },
      "mx": {
       "!type": "number",
       "!doc": "The x property of this PointProxy get and set in meters."
      },
      "my": {
       "!type": "number",
       "!doc": "The x property of this PointProxy get and set in meters."
      }
     }
    },
    "PrismaticConstraint": {
     "!type": "fn(world: +Phaser.Physics.P2, bodyA: +p2.Body, bodyB: +p2.Body, lockRotation: bool, anchorA: [?], anchorB: [?], axis: [?], maxForce: number)",
     "!doc": "Connects two bodies at given offset points, letting them rotate relative to each other around this point.",
     "prototype": {
      "game": {
       "!type": "+Phaser.Game",
       "!doc": "Local reference to game."
      },
      "world": {
       "!type": "+Phaser.Physics.P2",
       "!doc": "Local reference to P2 World."
      }
     }
    },
    "RevoluteConstraint": {
     "!type": "fn(world: +Phaser.Physics.P2, bodyA: +p2.Body, pivotA: +Float32Array, bodyB: +p2.Body, pivotB: +Float32Array, maxForce: number, worldPivot: +Float32Array)",
     "!doc": "Connects two bodies at given offset points, letting them rotate relative to each other around this point.\nThe pivot points are given in world (pixel) coordinates.",
     "prototype": {
      "game": {
       "!type": "+Phaser.Game",
       "!doc": "Local reference to game."
      },
      "world": {
       "!type": "+Phaser.Physics.P2",
       "!doc": "Local reference to P2 World."
      }
     }
    },
    "RotationalSpring": {
     "!type": "fn(world: +Phaser.Physics.P2, bodyA: +p2.Body, bodyB: +p2.Body, restAngle: number, stiffness: number, damping: number)",
     "!doc": "Creates a rotational spring, connecting two bodies. A spring can have a resting length, a stiffness and damping.",
     "prototype": {
      "game": {
       "!type": "+Phaser.Game",
       "!doc": "Local reference to game."
      },
      "world": {
       "!type": "+Phaser.Physics.P2",
       "!doc": "Local reference to P2 World."
      },
      "data": {
       "!type": "+p2.RotationalSpring",
       "!doc": "The actual p2 spring object."
      }
     }
    },
    "Spring": {
     "!type": "fn(world: +Phaser.Physics.P2, bodyA: +p2.Body, bodyB: +p2.Body, restLength: number, stiffness: number, damping: number, worldA: [?], worldB: [?], localA: [?], localB: [?])",
     "!doc": "Creates a linear spring, connecting two bodies. A spring can have a resting length, a stiffness and damping.",
     "prototype": {
      "game": {
       "!type": "+Phaser.Game",
       "!doc": "Local reference to game."
      },
      "world": {
       "!type": "+Phaser.Physics.P2",
       "!doc": "Local reference to P2 World."
      },
      "data": {
       "!type": "+p2.LinearSpring",
       "!doc": "The actual p2 spring object."
      }
     }
    },
    "!type": "fn(game: +Phaser.Game, config: ?)",
    "!doc": "This is your main access to the P2 Physics World.\nFrom here you can create materials, listen for events and add bodies into the physics simulation.",
    "prototype": {
     "game": {
      "!type": "+Phaser.Game",
      "!doc": "Local reference to game."
     },
     "config": {
      "!type": "?",
      "!doc": "The p2 World configuration object."
     },
     "world": {
      "!type": "+p2.World",
      "!doc": "The p2 World in which the simulation is run."
     },
     "frameRate": {
      "!type": "number",
      "!doc": "The frame rate the world will be stepped at. Defaults to 1 / 60, but you can change here. Also see useElapsedTime property."
     },
     "useElapsedTime": {
      "!type": "bool",
      "!doc": "If true the frameRate value will be ignored and instead p2 will step with the value of Game.Time.physicsElapsed, which is a delta time value."
     },
     "paused": {
      "!type": "bool",
      "!doc": "The paused state of the P2 World."
     },
     "materials": {
      "!type": "+array.<Phaser.Physics.P2.Material>",
      "!doc": "A local array of all created Materials."
     },
     "gravity": {
      "!type": "+Phaser.Physics.P2.InversePointProxy",
      "!doc": "The gravity applied to all bodies each step."
     },
     "walls": {
      "!type": "?",
      "!doc": "An object containing the 4 wall bodies that bound the physics world."
     },
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
      "!type": "fn()",
      "!doc": "A postBroadphase callback."
     },
     "callbackContext": {
      "!type": "?",
      "!doc": "The context under which the callbacks are fired."
     },
     "onBeginContact": {
      "!type": "+Phaser.Signal"
     },
     "onEndContact": {
      "!type": "+Phaser.Signal"
     },
     "collisionGroups": {
      "!type": "+array",
      "!doc": "An array containing the collision groups that have been defined in the World."
     },
     "nothingCollisionGroup": {
      "!type": "+Phaser.Physics.P2.CollisionGroup",
      "!doc": "A default collision group."
     },
     "boundsCollisionGroup": {
      "!type": "+Phaser.Physics.P2.CollisionGroup",
      "!doc": "A default collision group."
     },
     "everythingCollisionGroup": {
      "!type": "+Phaser.Physics.P2.CollisionGroup",
      "!doc": "A default collision group."
     },
     "boundsCollidesWith": {
      "!type": "+array",
      "!doc": "An array of the bodies the world bounds collides with."
     },
     "removeBodyNextStep": {
      "!type": "fn(body: +Phaser.Physics.P2.Body)",
      "!doc": "This will add a P2 Physics body into the removal list for the next step."
     },
     "preUpdate": {
      "!type": "fn()",
      "!doc": "Called at the start of the core update loop. Purges flagged bodies from the world."
     },
     "enable": {
      "!type": "fn(object: ?|+array|+Phaser.Group, debug: bool, children: bool)",
      "!doc": "This will create a P2 Physics body on the given game object or array of game objects.\nA game object can only have 1 physics body active at any one time, and it can't be changed until the object is destroyed.\nNote: When the game object is enabled for P2 physics it has its anchor x/y set to 0.5 so it becomes centered."
     },
     "enableBody": {
      "!type": "fn(object: ?, debug: bool)",
      "!doc": "Creates a P2 Physics body on the given game object.\nA game object can only have 1 physics body active at any one time, and it can't be changed until the body is nulled."
     },
     "setImpactEvents": {
      "!type": "fn(state: bool)",
      "!doc": "Impact event handling is disabled by default. Enable it before any impact events will be dispatched.\nIn a busy world hundreds of impact events can be generated every step, so only enable this if you cannot do what you need via beginContact or collision masks."
     },
     "setPostBroadphaseCallback": {
      "!type": "fn(callback: fn(), context: ?)",
      "!doc": "Sets a callback to be fired after the Broadphase has collected collision pairs in the world.\nJust because a pair exists it doesn't mean they *will* collide, just that they potentially could do.\nIf your calback returns `false` the pair will be removed from the narrowphase. This will stop them testing for collision this step.\nReturning `true` from the callback will ensure they are checked in the narrowphase."
     },
     "beginContactHandler": {
      "!type": "fn(event: ?)",
      "!doc": "Handles a p2 begin contact event."
     },
     "endContactHandler": {
      "!type": "fn(event: ?)",
      "!doc": "Handles a p2 end contact event."
     },
     "updateBoundsCollisionGroup": {
      "!type": "fn(setCollisionGroup: bool)",
      "!doc": "By default the World will be set to collide everything with everything. The bounds of the world is a Body with 4 shapes, one for each face.\nIf you start to use your own collision groups then your objects will no longer collide with the bounds.\nTo fix this you need to adjust the bounds to use its own collision group first BEFORE changing your Sprites collision group."
     },
     "setBounds": {
      "!type": "fn(x: number, y: number, width: number, height: number, left: bool, right: bool, top: bool, bottom: bool, setCollisionGroup: bool)",
      "!doc": "Sets the bounds of the Physics world to match the given world pixel dimensions.\nYou can optionally set which 'walls' to create: left, right, top or bottom.\nIf none of the walls are given it will default to use the walls settings it had previously.\nI.e. if you previously told it to not have the left or right walls, and you then adjust the world size\nthe newly created bounds will also not have the left and right walls.\nExplicitly state them in the parameters to override this."
     },
     "pause": {
      "!type": "fn()",
      "!doc": "Pauses the P2 World independent of the game pause state."
     },
     "resume": {
      "!type": "fn()",
      "!doc": "Resumes a paused P2 World."
     },
     "update": {
      "!type": "fn()",
      "!doc": "Internal P2 update loop."
     },
     "reset": {
      "!type": "fn()",
      "!doc": "Called by Phaser.Physics when a State swap occurs.\nStarts the begin and end Contact listeners again."
     },
     "clear": {
      "!type": "fn()",
      "!doc": "Clears all bodies from the simulation, resets callbacks and resets the collision bitmask.\n\nThe P2 world is also cleared:\n\n* Removes all solver equations\n* Removes all constraints\n* Removes all bodies\n* Removes all springs\n* Removes all contact materials\n\nThis is called automatically when you switch state."
     },
     "destroy": {
      "!type": "fn()",
      "!doc": "Clears all bodies from the simulation and unlinks World from Game. Should only be called on game shutdown. Call `clear` on a State change."
     },
     "addBody": {
      "!type": "fn(body: +Phaser.Physics.P2.Body) -> bool",
      "!doc": "Add a body to the world."
     },
     "removeBody": {
      "!type": "fn(body: +Phaser.Physics.P2.Body) -> +Phaser.Physics.P2.Body",
      "!doc": "Removes a body from the world. This will silently fail if the body wasn't part of the world to begin with."
     },
     "addSpring": {
      "!type": "fn(spring: +Phaser.Physics.P2.Spring|+p2.LinearSpring|+p2.RotationalSpring) -> +Phaser.Physics.P2.Spring",
      "!doc": "Adds a Spring to the world."
     },
     "removeSpring": {
      "!type": "fn(spring: +Phaser.Physics.P2.Spring) -> +Phaser.Physics.P2.Spring",
      "!doc": "Removes a Spring from the world."
     },
     "createDistanceConstraint": {
      "!type": "fn(bodyA: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, bodyB: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, distance: number, localAnchorA: [?], localAnchorB: [?], maxForce: number) -> +Phaser.Physics.P2.DistanceConstraint",
      "!doc": "Creates a constraint that tries to keep the distance between two bodies constant."
     },
     "createGearConstraint": {
      "!type": "fn(bodyA: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, bodyB: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, angle: number, ratio: number) -> +Phaser.Physics.P2.GearConstraint",
      "!doc": "Creates a constraint that tries to keep the distance between two bodies constant."
     },
     "createRevoluteConstraint": {
      "!type": "fn(bodyA: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, pivotA: [?], bodyB: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, pivotB: [?], maxForce: number, worldPivot: +Float32Array) -> +Phaser.Physics.P2.RevoluteConstraint",
      "!doc": "Connects two bodies at given offset points, letting them rotate relative to each other around this point.\nThe pivot points are given in world (pixel) coordinates."
     },
     "createLockConstraint": {
      "!type": "fn(bodyA: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, bodyB: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, offset: [?], angle: number, maxForce: number) -> +Phaser.Physics.P2.LockConstraint",
      "!doc": "Locks the relative position between two bodies."
     },
     "createPrismaticConstraint": {
      "!type": "fn(bodyA: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, bodyB: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, lockRotation: bool, anchorA: [?], anchorB: [?], axis: [?], maxForce: number) -> +Phaser.Physics.P2.PrismaticConstraint",
      "!doc": "Constraint that only allows bodies to move along a line, relative to each other.\nSee http://www.iforce2d.net/b2dtut/joints-prismatic"
     },
     "addConstraint": {
      "!type": "fn(constraint: +Phaser.Physics.P2.Constraint) -> +Phaser.Physics.P2.Constraint",
      "!doc": "Adds a Constraint to the world."
     },
     "removeConstraint": {
      "!type": "fn(constraint: +Phaser.Physics.P2.Constraint) -> +Phaser.Physics.P2.Constraint",
      "!doc": "Removes a Constraint from the world."
     },
     "addContactMaterial": {
      "!type": "fn(material: +Phaser.Physics.P2.ContactMaterial) -> +Phaser.Physics.P2.ContactMaterial",
      "!doc": "Adds a Contact Material to the world."
     },
     "removeContactMaterial": {
      "!type": "fn(material: +Phaser.Physics.P2.ContactMaterial) -> +Phaser.Physics.P2.ContactMaterial",
      "!doc": "Removes a Contact Material from the world."
     },
     "getContactMaterial": {
      "!type": "fn(materialA: +Phaser.Physics.P2.Material, materialB: +Phaser.Physics.P2.Material) -> +Phaser.Physics.P2.ContactMaterial|bool",
      "!doc": "Gets a Contact Material based on the two given Materials."
     },
     "setMaterial": {
      "!type": "fn(material: +Phaser.Physics.P2.Material, bodies: +array.<Phaser.Physics.P2.Body>)",
      "!doc": "Sets the given Material against all Shapes owned by all the Bodies in the given array."
     },
     "createMaterial": {
      "!type": "fn(name: string, body: +Phaser.Physics.P2.Body) -> +Phaser.Physics.P2.Material",
      "!doc": "Creates a Material. Materials are applied to Shapes owned by a Body and can be set with Body.setMaterial().\nMaterials are a way to control what happens when Shapes collide. Combine unique Materials together to create Contact Materials.\nContact Materials have properties such as friction and restitution that allow for fine-grained collision control between different Materials."
     },
     "createContactMaterial": {
      "!type": "fn(materialA: +Phaser.Physics.P2.Material, materialB: +Phaser.Physics.P2.Material, options: ?) -> +Phaser.Physics.P2.ContactMaterial",
      "!doc": "Creates a Contact Material from the two given Materials. You can then edit the properties of the Contact Material directly."
     },
     "getBodies": {
      "!type": "fn() -> +array.<Phaser.Physics.P2.Body>",
      "!doc": "Populates and returns an array with references to of all current Bodies in the world."
     },
     "getBody": {
      "!type": "fn(object: ?) -> +p2.Body",
      "!doc": "Checks the given object to see if it has a p2.Body and if so returns it."
     },
     "getSprings": {
      "!type": "fn() -> +array.<Phaser.Physics.P2.Spring>",
      "!doc": "Populates and returns an array of all current Springs in the world."
     },
     "getConstraints": {
      "!type": "fn() -> +array.<Phaser.Physics.P2.Constraint>",
      "!doc": "Populates and returns an array of all current Constraints in the world.\nYou will get an array of p2 constraints back. This can be of mixed types, for example the array may contain\nPrismaticConstraints, RevoluteConstraints or any other valid p2 constraint type."
     },
     "hitTest": {
      "!type": "fn(worldPoint: +Phaser.Point, bodies: [?], precision: number, filterStatic: bool) -> [?]",
      "!doc": "Test if a world point overlaps bodies. You will get an array of actual P2 bodies back. You can find out which Sprite a Body belongs to\n(if any) by checking the Body.parent.sprite property. Body.parent is a Phaser.Physics.P2.Body property."
     },
     "toJSON": {
      "!type": "fn() -> ?",
      "!doc": "Converts the current world into a JSON object."
     },
     "createCollisionGroup": {
      "!type": "fn(object: +Phaser.Group|+Phaser.Sprite)",
      "!doc": "Creates a new Collision Group and optionally applies it to the given object.\nCollision Groups are handled using bitmasks, therefore you have a fixed limit you can create before you need to re-use older groups."
     },
     "createSpring": {
      "!type": "fn(bodyA: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, bodyB: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, restLength: number, stiffness: number, damping: number, worldA: [?], worldB: [?], localA: [?], localB: [?]) -> +Phaser.Physics.P2.Spring",
      "!doc": "Creates a linear spring, connecting two bodies. A spring can have a resting length, a stiffness and damping."
     },
     "createRotationalSpring": {
      "!type": "fn(bodyA: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, bodyB: +Phaser.Sprite|+Phaser.Physics.P2.Body|+p2.Body, restAngle: number, stiffness: number, damping: number) -> +Phaser.Physics.P2.RotationalSpring",
      "!doc": "Creates a rotational spring, connecting two bodies. A spring can have a resting length, a stiffness and damping."
     },
     "createBody": {
      "!type": "fn(x: number, y: number, mass: number, addToWorld: bool, options: +PhaserPhysics.P2createBodyOptions, points: [?]|number) -> +Phaser.Physics.P2.Body",
      "!doc": "Creates a new Body and adds it to the World."
     },
     "createParticle": {
      "!type": "fn(x: number, y: number, mass: number, addToWorld: bool, options: +PhaserPhysics.P2createParticleOptions, points: [?]|number)",
      "!doc": "Creates a new Particle and adds it to the World."
     },
     "convertCollisionObjects": {
      "!type": "fn(map: +Phaser.Tilemap, layer: number|string|+Phaser.TilemapLayer, addToWorld: bool) -> +array",
      "!doc": "Converts all of the polylines objects inside a Tiled ObjectGroup into physics bodies that are added to the world.\nNote that the polylines must be created in such a way that they can withstand polygon decomposition."
     },
     "clearTilemapLayerBodies": {
      "!type": "fn(map: +Phaser.Tilemap, layer: number|string|+Phaser.TilemapLayer)",
      "!doc": "Clears all physics bodies from the given TilemapLayer that were created with `World.convertTilemap`."
     },
     "convertTilemap": {
      "!type": "fn(map: +Phaser.Tilemap, layer: number|string|+Phaser.TilemapLayer, addToWorld: bool, optimize: bool) -> +array",
      "!doc": "Goes through all tiles in the given Tilemap and TilemapLayer and converts those set to collide into physics bodies.\nOnly call this *after* you have specified all of the tiles you wish to collide with calls like Tilemap.setCollisionBetween, etc.\nEvery time you call this method it will destroy any previously created bodies and remove them from the world.\nTherefore understand it's a very expensive operation and not to be done in a core game update loop."
     },
     "mpx": {
      "!type": "fn(v: number) -> number",
      "!doc": "Convert p2 physics value (meters) to pixel scale.\nBy default Phaser uses a scale of 20px per meter.\nIf you need to modify this you can over-ride these functions via the Physics Configuration object."
     },
     "pxm": {
      "!type": "fn(v: number) -> number",
      "!doc": "Convert pixel value to p2 physics scale (meters).\nBy default Phaser uses a scale of 20px per meter.\nIf you need to modify this you can over-ride these functions via the Physics Configuration object."
     },
     "mpxi": {
      "!type": "fn(v: number) -> number",
      "!doc": "Convert p2 physics value (meters) to pixel scale and inverses it.\nBy default Phaser uses a scale of 20px per meter.\nIf you need to modify this you can over-ride these functions via the Physics Configuration object."
     },
     "pxmi": {
      "!type": "fn(v: number) -> number",
      "!doc": "Convert pixel value to p2 physics scale (meters) and inverses it.\nBy default Phaser uses a scale of 20px per meter.\nIf you need to modify this you can over-ride these functions via the Physics Configuration object."
     },
     "friction": {
      "!type": "number",
      "!doc": "Friction between colliding bodies. This value is used if no matching ContactMaterial is found for a Material pair."
     },
     "restitution": {
      "!type": "number",
      "!doc": "Default coefficient of restitution between colliding bodies. This value is used if no matching ContactMaterial is found for a Material pair."
     },
     "contactMaterial": {
      "!type": "+p2.ContactMaterial",
      "!doc": "The default Contact Material being used by the World."
     },
     "applySpringForces": {
      "!type": "bool",
      "!doc": "Enable to automatically apply spring forces each step."
     },
     "applyDamping": {
      "!type": "bool",
      "!doc": "Enable to automatically apply body damping each step."
     },
     "applyGravity": {
      "!type": "bool",
      "!doc": "Enable to automatically apply gravity each step."
     },
     "solveConstraints": {
      "!type": "bool",
      "!doc": "Enable/disable constraint solving in each step."
     },
     "time": {
      "!type": "bool",
      "!doc": "The World time."
     },
     "emitImpactEvent": {
      "!type": "bool",
      "!doc": "Set to true if you want to the world to emit the \"impact\" event. Turning this off could improve performance."
     },
     "sleepMode": {
      "!type": "number"
     },
     "total": {
      "!type": "number",
      "!doc": "The total number of bodies in the world."
     }
    }
   },
   "prototype": {
    "setBoundsToWorld": {
     "!type": "fn()",
     "!doc": "Updates the physics bounds to match the world dimensions."
    },
    "setWorldMaterial": {
     "!type": "fn(material: +Phaser.Physics.P2.Material, left: bool, right: bool, top: bool, bottom: bool)",
     "!doc": "Sets the given material against the 4 bounds of this World."
    },
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "Local reference to game."
    },
    "config": {
     "!type": "?",
     "!doc": "The physics configuration object as passed to the game on creation."
    },
    "arcade": {
     "!type": "+Phaser.Physics.Arcade",
     "!doc": "The Arcade Physics system."
    },
    "p2": {
     "!type": "+Phaser.Physics.P2",
     "!doc": "The P2.JS Physics system."
    },
    "ninja": {
     "!type": "+Phaser.Physics.Ninja",
     "!doc": "The N+ Ninja Physics system."
    },
    "box2d": {
     "!type": "+Phaser.Physics.Box2D",
     "!doc": "The Box2D Physics system."
    },
    "chipmunk": {
     "!type": "+Phaser.Physics.Chipmunk",
     "!doc": "The Chipmunk Physics system (to be done)."
    },
    "matter": {
     "!type": "+Phaser.Physics.Matter",
     "!doc": "The MatterJS Physics system (coming soon)."
    },
    "parseConfig": {
     "!type": "fn()",
     "!doc": "Parses the Physics Configuration object passed to the Game constructor and starts any physics systems specified within."
    },
    "startSystem": {
     "!type": "fn(system: number)",
     "!doc": "This will create an instance of the requested physics simulation.\nPhaser.Physics.Arcade is running by default, but all others need activating directly.\n\nYou can start the following physics systems:\n\nPhaser.Physics.P2JS - A full-body advanced physics system by Stefan Hedman.\nPhaser.Physics.NINJA - A port of Metanet Softwares N+ physics system.\nPhaser.Physics.BOX2D - A commercial Phaser Plugin (see http://phaser.io)\n\nBoth Ninja Physics and Box2D require their respective plugins to be loaded before you can start them.\nThey are not bundled into the core Phaser library.\n\nIf the physics world has already been created (i.e. in another state in your game) then \ncalling startSystem will reset the physics world, not re-create it. If you need to start them again from their constructors \nthen set Phaser.Physics.p2 (or whichever system you want to recreate) to `null` before calling `startSystem`."
    },
    "enable": {
     "!type": "fn(object: ?|+array, system: number, debug: bool)",
     "!doc": "This will create a default physics body on the given game object or array of objects.\nA game object can only have 1 physics body active at any one time, and it can't be changed until the object is destroyed.\nIt can be for any of the physics systems that have been started:\n\nPhaser.Physics.Arcade - A light weight AABB based collision system with basic separation.\nPhaser.Physics.P2JS - A full-body advanced physics system supporting multiple object shapes, polygon loading, contact materials, springs and constraints.\nPhaser.Physics.NINJA - A port of Metanet Softwares N+ physics system. Advanced AABB and Circle vs. Tile collision.\nPhaser.Physics.BOX2D - A port of https://code.google.com/p/box2d-html5\nPhaser.Physics.MATTER - A full-body and light-weight advanced physics system (still in development)\nPhaser.Physics.CHIPMUNK is still in development.\n\nIf you require more control over what type of body is created, for example to create a Ninja Physics Circle instead of the default AABB, then see the\nindividual physics systems `enable` methods instead of using this generic one."
    },
    "preUpdate": {
     "!type": "fn()",
     "!doc": "preUpdate checks."
    },
    "update": {
     "!type": "fn()",
     "!doc": "Updates all running physics systems."
    },
    "clear": {
     "!type": "fn()",
     "!doc": "Clears down all active physics systems. This doesn't destroy them, it just clears them of objects and is called when the State changes."
    },
    "reset": {
     "!type": "fn()",
     "!doc": "Resets the active physics system. Called automatically on a Phaser.State swap."
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "Destroys all active physics systems. Usually only called on a Game Shutdown, not on a State swap."
    }
   },
   "P2y": {
    "prototype": {
     "setCollisionGroup": {
      "!type": "fn(object: +Phaser.Group|+Phaser.Sprite, group: +Phaser.Physics.CollisionGroup)",
      "!doc": "Sets the given CollisionGroup to be the collision group for all shapes in this Body, unless a shape is specified.\nNote that this resets the collisionMask and any previously set groups. See Body.collides() for appending them."
     }
    }
   },
   "!type": "fn(game: +Phaser.Game, physicsConfig: ?)",
   "!doc": "The Physics Manager is responsible for looking after all of the running physics systems.\nPhaser supports 4 physics systems: Arcade Physics, P2, Ninja Physics and Box2D via a commercial plugin.\n\nGame Objects (such as Sprites) can only belong to 1 physics system, but you can have multiple systems active in a single game.\n\nFor example you could have P2 managing a polygon-built terrain landscape that an vehicle drives over, while it could be firing bullets that use the\nfaster (due to being much simpler) Arcade Physics system.",
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
       "!type": "fn(px: number, py: number, dx: number, dy: number)",
       "!doc": "Process a collision partner-agnostic collision response and apply the resulting forces."
      }
     }
    }
   }
  },
  "AudioSprite": {
   "!type": "fn(game: +Phaser.Game, key: string)",
   "!doc": "Audio Sprites are a combination of audio files and a JSON configuration.\nThe JSON follows the format of that created by https://github.com/tonistiigi/audiosprite",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game"
    },
    "key": {
     "!type": "string"
    },
    "config": {
     "!type": "?"
    },
    "autoplayKey": {
     "!type": "string"
    },
    "autoplay": {
     "!type": "bool"
    },
    "sounds": {
     "!type": "?"
    },
    "play": {
     "!type": "fn(marker: string, volume: number) -> +Phaser.Sound",
     "!doc": "Play a sound with the given name."
    },
    "stop": {
     "!type": "fn(marker: string)",
     "!doc": "Stop a sound with the given name."
    },
    "get": {
     "!type": "fn(marker: string) -> +Phaser.Sound",
     "!doc": "Get a sound with the given name."
    }
   }
  },
  "Sound": {
   "!type": "fn(game: +Phaser.Game, key: string, volume: number, loop: bool)",
   "!doc": "The Sound class constructor.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game"
    },
    "name": {
     "!type": "string",
     "!doc": "Name of the sound."
    },
    "key": {
     "!type": "string",
     "!doc": "Asset key for the sound."
    },
    "loop": {
     "!type": "bool",
     "!doc": "Whether or not the sound or current sound marker will loop."
    },
    "volume": {
     "!type": "number",
     "!doc": "Gets or sets the volume of this sound, a value between 0 and 1."
    },
    "markers": {
     "!type": "?",
     "!doc": "The sound markers."
    },
    "context": {
     "!type": "+AudioContext",
     "!doc": "Reference to the AudioContext instance."
    },
    "autoplay": {
     "!type": "bool",
     "!doc": "Boolean indicating whether the sound should start automatically."
    },
    "totalDuration": {
     "!type": "number",
     "!doc": "The total duration of the sound in seconds."
    },
    "startTime": {
     "!type": "number",
     "!doc": "The time the Sound starts at (typically 0 unless starting from a marker)"
    },
    "currentTime": {
     "!type": "number",
     "!doc": "The current time the sound is at."
    },
    "duration": {
     "!type": "number",
     "!doc": "The duration of the current sound marker in seconds."
    },
    "durationMS": {
     "!type": "number",
     "!doc": "The duration of the current sound marker in ms."
    },
    "position": {
     "!type": "number",
     "!doc": "The position of the current sound marker."
    },
    "stopTime": {
     "!type": "number",
     "!doc": "The time the sound stopped."
    },
    "paused": {
     "!type": "bool",
     "!doc": "true if the sound is paused, otherwise false."
    },
    "pausedPosition": {
     "!type": "number",
     "!doc": "The position the sound had reached when it was paused."
    },
    "pausedTime": {
     "!type": "number",
     "!doc": "The game time at which the sound was paused."
    },
    "isPlaying": {
     "!type": "bool",
     "!doc": "true if the sound is currently playing, otherwise false."
    },
    "currentMarker": {
     "!type": "string",
     "!doc": "The string ID of the currently playing marker, if any."
    },
    "fadeTween": {
     "!type": "+Phaser.Tween",
     "!doc": "The tween that fades the audio, set via Sound.fadeIn and Sound.fadeOut."
    },
    "pendingPlayback": {
     "!type": "bool",
     "!doc": "true if the sound file is pending playback"
    },
    "override": {
     "!type": "bool",
     "!doc": "if true when you play this sound it will always start from the beginning."
    },
    "allowMultiple": {
     "!type": "bool",
     "!doc": "This will allow you to have multiple instances of this Sound playing at once. This is only useful when running under Web Audio, and we recommend you implement a local pooling system to not flood the sound channels."
    },
    "usingWebAudio": {
     "!type": "bool",
     "!doc": "true if this sound is being played with Web Audio."
    },
    "usingAudioTag": {
     "!type": "bool",
     "!doc": "true if the sound is being played via the Audio tag."
    },
    "externalNode": {
     "!type": "?",
     "!doc": "If defined this Sound won't connect to the SoundManager master gain node, but will instead connect to externalNode."
    },
    "masterGainNode": {
     "!type": "?",
     "!doc": "The master gain node in a Web Audio system."
    },
    "gainNode": {
     "!type": "?",
     "!doc": "The gain node in a Web Audio system."
    },
    "onDecoded": {
     "!type": "+Phaser.Signal",
     "!doc": "The onDecoded event is dispatched when the sound has finished decoding (typically for mp3 files)"
    },
    "onPlay": {
     "!type": "+Phaser.Signal",
     "!doc": "The onPlay event is dispatched each time this sound is played."
    },
    "onPause": {
     "!type": "+Phaser.Signal",
     "!doc": "The onPause event is dispatched when this sound is paused."
    },
    "onResume": {
     "!type": "+Phaser.Signal",
     "!doc": "The onResume event is dispatched when this sound is resumed from a paused state."
    },
    "onLoop": {
     "!type": "+Phaser.Signal",
     "!doc": "The onLoop event is dispatched when this sound loops during playback."
    },
    "onStop": {
     "!type": "+Phaser.Signal",
     "!doc": "The onStop event is dispatched when this sound stops playback."
    },
    "onMute": {
     "!type": "+Phaser.Signal",
     "!doc": "The onMouse event is dispatched when this sound is muted."
    },
    "onMarkerComplete": {
     "!type": "+Phaser.Signal",
     "!doc": "The onMarkerComplete event is dispatched when a marker within this sound completes playback."
    },
    "onFadeComplete": {
     "!type": "+Phaser.Signal",
     "!doc": "The onFadeComplete event is dispatched when this sound finishes fading either in or out."
    },
    "soundHasUnlocked": {
     "!type": "fn(key: string)",
     "!doc": "Called automatically when this sound is unlocked."
    },
    "addMarker": {
     "!type": "fn(name: string, start: number, duration: number, volume: number, loop: bool)",
     "!doc": "Adds a marker into the current Sound. A marker is represented by a unique key and a start time and duration.\nThis allows you to bundle multiple sounds together into a single audio file and use markers to jump between them for playback."
    },
    "removeMarker": {
     "!type": "fn(name: string)",
     "!doc": "Removes a marker from the sound."
    },
    "onEndedHandler": {
     "!type": "fn()",
     "!doc": "Called automatically by the AudioContext when the sound stops playing.\nDoesn't get called if the sound is set to loop or is a section of an Audio Sprite."
    },
    "update": {
     "!type": "fn()",
     "!doc": "Called automatically by Phaser.SoundManager."
    },
    "loopFull": {
     "!type": "fn(volume: number) -> +Phaser.Sound",
     "!doc": "Loops this entire sound. If you need to loop a section of it then use Sound.play and the marker and loop parameters."
    },
    "play": {
     "!type": "fn(marker: string, position: number, volume: number, loop: bool, forceRestart: bool) -> +Phaser.Sound",
     "!doc": "Play this sound, or a marked section of it."
    },
    "restart": {
     "!type": "fn(marker: string, position: number, volume: number, loop: bool)",
     "!doc": "Restart the sound, or a marked section of it."
    },
    "pause": {
     "!type": "fn()",
     "!doc": "Pauses the sound."
    },
    "resume": {
     "!type": "fn()",
     "!doc": "Resumes the sound."
    },
    "stop": {
     "!type": "fn()",
     "!doc": "Stop playing this sound."
    },
    "fadeIn": {
     "!type": "fn(duration: number, loop: bool, marker: string)",
     "!doc": "Starts this sound playing (or restarts it if already doing so) and sets the volume to zero.\nThen increases the volume from 0 to 1 over the duration specified.\n\nAt the end of the fade Sound.onFadeComplete is dispatched with this Sound object as the first parameter,\nand the final volume (1) as the second parameter."
    },
    "fadeOut": {
     "!type": "fn(duration: number)",
     "!doc": "Decreases the volume of this Sound from its current value to 0 over the duration specified.\nAt the end of the fade Sound.onFadeComplete is dispatched with this Sound object as the first parameter,\nand the final volume (0) as the second parameter."
    },
    "fadeTo": {
     "!type": "fn(duration: number, volume: number)",
     "!doc": "Fades the volume of this Sound from its current value to the given volume over the duration specified.\nAt the end of the fade Sound.onFadeComplete is dispatched with this Sound object as the first parameter, \nand the final volume (volume) as the second parameter."
    },
    "destroy": {
     "!type": "fn(remove: bool)",
     "!doc": "Destroys this sound and all associated events and removes it from the SoundManager."
    },
    "isDecoding": {
     "!type": "bool",
     "!doc": "Returns true if the sound file is still decoding."
    },
    "isDecoded": {
     "!type": "bool",
     "!doc": "Returns true if the sound file has decoded."
    },
    "mute": {
     "!type": "bool",
     "!doc": "Gets or sets the muted state of this sound."
    }
   }
  },
  "SoundManager": {
   "!type": "fn()",
   "!doc": "This is a stub for the Phaser SoundManager.\nIt allows you to exclude the default Sound Manager from your build, without making Game crash.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "Local reference to game."
    },
    "onSoundDecode": {
     "!type": "+Phaser.Signal",
     "!doc": "The event dispatched when a sound decodes (typically only for mp3 files)"
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
     "!type": "+AudioContext",
     "!doc": "The AudioContext being used for playback."
    },
    "usingWebAudio": {
     "!type": "bool",
     "!doc": "True the SoundManager and device are both using Web Audio."
    },
    "usingAudioTag": {
     "!type": "bool",
     "!doc": "True the SoundManager and device are both using the Audio tag instead of Web Audio."
    },
    "noAudio": {
     "!type": "bool",
     "!doc": "True if audio been disabled via the PhaserGlobal (useful if you need to use a 3rd party audio library) or the device doesn't support any audio."
    },
    "connectToMaster": {
     "!type": "bool",
     "!doc": "Used in conjunction with Sound.externalNode this allows you to stop a Sound node being connected to the SoundManager master gain node."
    },
    "touchLocked": {
     "!type": "bool",
     "!doc": "true if the audio system is currently locked awaiting a touch event."
    },
    "channels": {
     "!type": "number",
     "!doc": "The number of audio channels to use in playback."
    },
    "boot": {
     "!type": "fn()",
     "!doc": "Initialises the sound manager."
    },
    "setTouchLock": {
     "!type": "fn()",
     "!doc": "Sets the Input Manager touch callback to be SoundManager.unlock.\nRequired for iOS audio device unlocking. Mostly just used internally."
    },
    "unlock": {
     "!type": "fn() -> bool",
     "!doc": "Enables the audio, usually after the first touch."
    },
    "stopAll": {
     "!type": "fn()",
     "!doc": "Stops all the sounds in the game."
    },
    "pauseAll": {
     "!type": "fn()",
     "!doc": "Pauses all the sounds in the game."
    },
    "resumeAll": {
     "!type": "fn()",
     "!doc": "Resumes every sound in the game."
    },
    "decode": {
     "!type": "fn(key: string, sound: +Phaser.Sound)",
     "!doc": "Decode a sound by its asset key."
    },
    "setDecodedCallback": {
     "!type": "fn(files: string|+array, callback: fn(), callbackContext: ?)",
     "!doc": "This method allows you to give the SoundManager a list of Sound files, or keys, and a callback.\nOnce all of the Sound files have finished decoding the callback will be invoked.\nThe amount of time spent decoding depends on the codec used and file size.\nIf all of the files given have already decoded the callback is triggered immediately."
    },
    "update": {
     "!type": "fn()",
     "!doc": "Updates every sound in the game, checks for audio unlock on mobile and monitors the decoding watch list."
    },
    "add": {
     "!type": "fn(key: string, volume: number, loop: bool, connect: bool) -> +Phaser.Sound",
     "!doc": "Adds a new Sound into the SoundManager."
    },
    "addSprite": {
     "!type": "fn(key: string) -> +Phaser.AudioSprite",
     "!doc": "Adds a new AudioSprite into the SoundManager."
    },
    "remove": {
     "!type": "fn(sound: +Phaser.Sound) -> bool",
     "!doc": "Removes a Sound from the SoundManager. The removed Sound is destroyed before removal."
    },
    "removeByKey": {
     "!type": "fn(key: string) -> number",
     "!doc": "Removes all Sounds from the SoundManager that have an asset key matching the given value.\nThe removed Sounds are destroyed before removal."
    },
    "play": {
     "!type": "fn(key: string, volume: number, loop: bool) -> +Phaser.Sound",
     "!doc": "Adds a new Sound into the SoundManager and starts it playing."
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "Stops all the sounds in the game, then destroys them and finally clears up any callbacks."
    },
    "mute": {
     "!type": "bool",
     "!doc": "Gets or sets the muted state of the SoundManager. This effects all sounds in the game."
    },
    "volume": {
     "!type": "number",
     "!doc": "Gets or sets the global volume of the SoundManager, a value between 0 and 1. The value given is clamped to the range 0 to 1."
    }
   }
  },
  "TweenManager": {
   "!type": "fn(game: +Phaser.Game)",
   "!doc": "Phaser.Game has a single instance of the TweenManager through which all Tween objects are created and updated.\nTweens are hooked into the game clock and pause system, adjusting based on the game state.\n\nTweenManager is based heavily on tween.js by http://soledadpenades.com.\nThe difference being that tweens belong to a games instance of TweenManager, rather than to a global TWEEN object.\nIt also has callbacks swapped for Signals and a few issues patched with regard to properties and completion errors.\nPlease see https://github.com/sole/tween.js for a full list of contributors.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "Local reference to game."
    },
    "frameBased": {
     "!type": "bool"
    },
    "getAll": {
     "!type": "fn() -> [?]",
     "!doc": "Get all the tween objects in an array."
    },
    "removeAll": {
     "!type": "fn()",
     "!doc": "Remove all tweens running and in the queue. Doesn't call any of the tween onComplete events."
    },
    "removeFrom": {
     "!type": "fn(obj: ?|[?]|+Phaser.Group, children: bool)",
     "!doc": "Remove all tweens from a specific object, array of objects or Group."
    },
    "add": {
     "!type": "fn(tween: +Phaser.Tween) -> +Phaser.Tween",
     "!doc": "Add a new tween into the TweenManager."
    },
    "create": {
     "!type": "fn(object: ?) -> +Phaser.Tween",
     "!doc": "Create a tween object for a specific object. The object can be any JavaScript object or Phaser object such as Sprite."
    },
    "remove": {
     "!type": "fn(tween: +Phaser.Tween)",
     "!doc": "Remove a tween from this manager."
    },
    "update": {
     "!type": "fn() -> bool",
     "!doc": "Update all the tween objects you added to this manager."
    },
    "isTweening": {
     "!type": "fn(object: ?) -> bool",
     "!doc": "Checks to see if a particular Sprite is currently being tweened."
    },
    "pauseAll": {
     "!type": "fn()",
     "!doc": "Pauses all currently running tweens."
    },
    "resumeAll": {
     "!type": "fn()",
     "!doc": "Resumes all currently paused tweens."
    }
   }
  },
  "Canvas": {
   "!type": "fn()",
   "!doc": "The Canvas class handles everything related to creating the `canvas` DOM tag that Phaser will use, \nincluding styles, offset and aspect ratio.",
   "create": {
    "!type": "fn(parent: ?, width: number, height: number, id: string, skipPool: bool) -> +HTMLCanvasElement",
    "!doc": "Creates a `canvas` DOM element. The element is not automatically added to the document."
   },
   "setBackgroundColor": {
    "!type": "fn(canvas: +HTMLCanvasElement, color: string) -> +HTMLCanvasElement",
    "!doc": "Sets the background color behind the canvas. This changes the canvas style property."
   },
   "setTouchAction": {
    "!type": "fn(canvas: +HTMLCanvasElement, value: string) -> +HTMLCanvasElement",
    "!doc": "Sets the touch-action property on the canvas style. Can be used to disable default browser touch actions."
   },
   "setUserSelect": {
    "!type": "fn(canvas: +HTMLCanvasElement, value: string) -> +HTMLCanvasElement",
    "!doc": "Sets the user-select property on the canvas style. Can be used to disable default browser selection actions."
   },
   "addToDOM": {
    "!type": "fn(canvas: +HTMLCanvasElement, parent: string|+HTMLElement, overflowHidden: bool) -> +HTMLCanvasElement",
    "!doc": "Adds the given canvas element to the DOM. The canvas will be added as a child of the given parent.\nIf no parent is given it will be added as a child of the document.body."
   },
   "removeFromDOM": {
    "!type": "fn(canvas: +HTMLCanvasElement)",
    "!doc": "Removes the given canvas element from the DOM."
   },
   "setTransform": {
    "!type": "fn(context: +CanvasRenderingContext2D, translateX: number, translateY: number, scaleX: number, scaleY: number, skewX: number, skewY: number) -> +CanvasRenderingContext2D",
    "!doc": "Sets the transform of the given canvas to the matrix values provided."
   },
   "setSmoothingEnabled": {
    "!type": "fn(context: +CanvasRenderingContext2D, value: bool) -> +CanvasRenderingContext2D",
    "!doc": "Sets the Image Smoothing property on the given context. Set to false to disable image smoothing.\nBy default browsers have image smoothing enabled, which isn't always what you visually want, especially\nwhen using pixel art in a game. Note that this sets the property on the context itself, so that any image\ndrawn to the context will be affected. This sets the property across all current browsers but support is\npatchy on earlier browsers, especially on mobile."
   },
   "getSmoothingEnabled": {
    "!type": "fn(context: +CanvasRenderingContext2D) -> bool",
    "!doc": "Returns `true` if the given context has image smoothing enabled, otherwise returns `false`."
   },
   "setImageRenderingCrisp": {
    "!type": "fn(canvas: +HTMLCanvasElement) -> +HTMLCanvasElement",
    "!doc": "Sets the CSS image-rendering property on the given canvas to be 'crisp' (aka 'optimize contrast' on webkit).\nNote that if this doesn't given the desired result then see the setSmoothingEnabled."
   },
   "setImageRenderingBicubic": {
    "!type": "fn(canvas: +HTMLCanvasElement) -> +HTMLCanvasElement",
    "!doc": "Sets the CSS image-rendering property on the given canvas to be 'bicubic' (aka 'auto').\nNote that if this doesn't given the desired result then see the CanvasUtils.setSmoothingEnabled method."
   }
  },
  "Device": {
   "!type": "fn()",
   "!doc": "It is not possible to instantiate the Device class manually.",
   "prototype": {
    "deviceReadyAt": {
     "!type": "number"
    },
    "initialized": {
     "!type": "bool"
    },
    "desktop": {
     "!type": "bool",
     "!doc": "Is running on a desktop?"
    },
    "iOS": {
     "!type": "bool",
     "!doc": "Is running on iOS?"
    },
    "cocoonJS": {
     "!type": "bool",
     "!doc": "Is the game running under CocoonJS?"
    },
    "cocoonJSApp": {
     "!type": "bool",
     "!doc": "Is this game running with CocoonJS.App?"
    },
    "cordova": {
     "!type": "bool",
     "!doc": "Is the game running under Apache Cordova?"
    },
    "node": {
     "!type": "bool",
     "!doc": "Is the game running under Node.js?"
    },
    "nodeWebkit": {
     "!type": "bool",
     "!doc": "Is the game running under Node-Webkit?"
    },
    "electron": {
     "!type": "bool",
     "!doc": "Is the game running under GitHub Electron?"
    },
    "ejecta": {
     "!type": "bool",
     "!doc": "Is the game running under Ejecta?"
    },
    "crosswalk": {
     "!type": "bool",
     "!doc": "Is the game running under the Intel Crosswalk XDK?"
    },
    "android": {
     "!type": "bool",
     "!doc": "Is running on android?"
    },
    "chromeOS": {
     "!type": "bool",
     "!doc": "Is running on chromeOS?"
    },
    "linux": {
     "!type": "bool",
     "!doc": "Is running on linux?"
    },
    "macOS": {
     "!type": "bool",
     "!doc": "Is running on macOS?"
    },
    "windows": {
     "!type": "bool",
     "!doc": "Is running on windows?"
    },
    "windowsPhone": {
     "!type": "bool",
     "!doc": "Is running on a Windows Phone?"
    },
    "canvas": {
     "!type": "bool",
     "!doc": "Is canvas available?"
    },
    "canvasBitBltShift": {
     "!type": "bool",
     "!doc": "True if canvas supports a 'copy' bitblt onto itself when the source and destination regions overlap."
    },
    "webGL": {
     "!type": "bool",
     "!doc": "Is webGL available?"
    },
    "file": {
     "!type": "bool",
     "!doc": "Is file available?"
    },
    "fileSystem": {
     "!type": "bool",
     "!doc": "Is fileSystem available?"
    },
    "localStorage": {
     "!type": "bool",
     "!doc": "Is localStorage available?"
    },
    "worker": {
     "!type": "bool",
     "!doc": "Is worker available?"
    },
    "css3D": {
     "!type": "bool",
     "!doc": "Is css3D available?"
    },
    "pointerLock": {
     "!type": "bool",
     "!doc": "Is Pointer Lock available?"
    },
    "typedArray": {
     "!type": "bool",
     "!doc": "Does the browser support TypedArrays?"
    },
    "vibration": {
     "!type": "bool",
     "!doc": "Does the device support the Vibration API?"
    },
    "getUserMedia": {
     "!type": "bool",
     "!doc": "Does the device support the getUserMedia API?"
    },
    "quirksMode": {
     "!type": "bool",
     "!doc": "Is the browser running in strict mode (false) or quirks mode? (true)"
    },
    "touch": {
     "!type": "bool",
     "!doc": "Is touch available?"
    },
    "mspointer": {
     "!type": "bool",
     "!doc": "Is mspointer available?"
    },
    "wheelEvent": {
     "!type": "string",
     "!doc": "The newest type of Wheel/Scroll event supported: 'wheel', 'mousewheel', 'DOMMouseScroll'"
    },
    "arora": {
     "!type": "bool",
     "!doc": "Set to true if running in Arora."
    },
    "chrome": {
     "!type": "bool",
     "!doc": "Set to true if running in Chrome."
    },
    "chromeVersion": {
     "!type": "number",
     "!doc": "If running in Chrome this will contain the major version number."
    },
    "epiphany": {
     "!type": "bool",
     "!doc": "Set to true if running in Epiphany."
    },
    "firefox": {
     "!type": "bool",
     "!doc": "Set to true if running in Firefox."
    },
    "firefoxVersion": {
     "!type": "number",
     "!doc": "If running in Firefox this will contain the major version number."
    },
    "ie": {
     "!type": "bool",
     "!doc": "Set to true if running in Internet Explorer."
    },
    "ieVersion": {
     "!type": "number",
     "!doc": "If running in Internet Explorer this will contain the major version number. Beyond IE10 you should use Device.trident and Device.tridentVersion."
    },
    "trident": {
     "!type": "bool",
     "!doc": "Set to true if running a Trident version of Internet Explorer (IE11+)"
    },
    "tridentVersion": {
     "!type": "number",
     "!doc": "If running in Internet Explorer 11 this will contain the major version number. See {@link http://msdn.microsoft.com/en-us/library/ie/ms537503(v=vs.85).aspx}"
    },
    "mobileSafari": {
     "!type": "bool",
     "!doc": "Set to true if running in Mobile Safari."
    },
    "midori": {
     "!type": "bool",
     "!doc": "Set to true if running in Midori."
    },
    "opera": {
     "!type": "bool",
     "!doc": "Set to true if running in Opera."
    },
    "safari": {
     "!type": "bool",
     "!doc": "Set to true if running in Safari."
    },
    "webApp": {
     "!type": "bool",
     "!doc": "Set to true if running as a WebApp, i.e. within a WebView"
    },
    "silk": {
     "!type": "bool",
     "!doc": "Set to true if running in the Silk browser (as used on the Amazon Kindle)"
    },
    "audioData": {
     "!type": "bool",
     "!doc": "Are Audio tags available?"
    },
    "webAudio": {
     "!type": "bool",
     "!doc": "Is the WebAudio API available?"
    },
    "ogg": {
     "!type": "bool",
     "!doc": "Can this device play ogg files?"
    },
    "opus": {
     "!type": "bool",
     "!doc": "Can this device play opus files?"
    },
    "mp3": {
     "!type": "bool",
     "!doc": "Can this device play mp3 files?"
    },
    "wav": {
     "!type": "bool",
     "!doc": "Can this device play wav files?"
    },
    "m4a": {
     "!type": "bool",
     "!doc": "True if this device can play m4a files."
    },
    "webm": {
     "!type": "bool",
     "!doc": "Can this device play webm files?"
    },
    "oggVideo": {
     "!type": "bool",
     "!doc": "Can this device play ogg video files?"
    },
    "h264Video": {
     "!type": "bool",
     "!doc": "Can this device play h264 mp4 video files?"
    },
    "mp4Video": {
     "!type": "bool",
     "!doc": "Can this device play h264 mp4 video files?"
    },
    "webmVideo": {
     "!type": "bool",
     "!doc": "Can this device play webm video files?"
    },
    "vp9Video": {
     "!type": "bool",
     "!doc": "Can this device play vp9 video files?"
    },
    "hlsVideo": {
     "!type": "bool",
     "!doc": "Can this device play hls video files?"
    },
    "iPhone": {
     "!type": "bool",
     "!doc": "Is running on iPhone?"
    },
    "iPhone4": {
     "!type": "bool",
     "!doc": "Is running on iPhone4?"
    },
    "iPad": {
     "!type": "bool",
     "!doc": "Is running on iPad?"
    },
    "pixelRatio": {
     "!type": "number",
     "!doc": "PixelRatio of the host device?"
    },
    "littleEndian": {
     "!type": "bool",
     "!doc": "Is the device big or little endian? (only detected if the browser supports TypedArrays)"
    },
    "LITTLE_ENDIAN": {
     "!type": "bool",
     "!doc": "Same value as `littleEndian`."
    },
    "support32bit": {
     "!type": "bool",
     "!doc": "Does the device context support 32bit pixel manipulation using array buffer views?"
    },
    "fullscreen": {
     "!type": "bool",
     "!doc": "Does the browser support the Full Screen API?"
    },
    "requestFullscreen": {
     "!type": "string",
     "!doc": "If the browser supports the Full Screen API this holds the call you need to use to activate it."
    },
    "cancelFullscreen": {
     "!type": "string",
     "!doc": "If the browser supports the Full Screen API this holds the call you need to use to cancel it."
    },
    "fullscreenKeyboard": {
     "!type": "bool",
     "!doc": "Does the browser support access to the Keyboard during Full Screen mode?"
    },
    "canPlayAudio": {
     "!type": "fn(type: string) -> bool",
     "!doc": "Check whether the host environment can play audio."
    },
    "canPlayVideo": {
     "!type": "fn(type: string) -> bool",
     "!doc": "Check whether the host environment can play video files."
    },
    "isConsoleOpen": {
     "!type": "fn()",
     "!doc": "Check whether the console is open.\nNote that this only works in Firefox with Firebug and earlier versions of Chrome.\nIt used to work in Chrome, but then they removed the ability: {@link http://src.chromium.org/viewvc/blink?view=revision&revision=151136}"
    },
    "isAndroidStockBrowser": {
     "!type": "fn()",
     "!doc": "Detect if the host is a an Android Stock browser.\nThis is available before the device \"ready\" event.\n\nAuthors might want to scale down on effects and switch to the CANVAS rendering method on those devices."
    }
   },
   "onInitialized": {
    "!type": "+Phaser.Signal",
    "!doc": "This signal is dispatched after device initialization occurs but before any of the ready\ncallbacks (see {@link Phaser.Device.whenReady whenReady}) have been invoked.\n\nLocal \"patching\" for a particular device can/should be done in this event.\n\n_Note_: This signal is removed after the device has been readied; if a handler has not been\nadded _before_ `new Phaser.Game(..)` it is probably too late."
   },
   "whenReady": {
    "!type": "fn(handler: fn(), context: ?, nonPrimer: bool)",
    "!doc": "Add a device-ready handler and ensure the device ready sequence is started.\n\nPhaser.Device will _not_ activate or initialize until at least one `whenReady` handler is added,\nwhich is normally done automatically be calling `new Phaser.Game(..)`.\n\nThe handler is invoked when the device is considered \"ready\", which may be immediately\nif the device is already \"ready\". See {@link Phaser.Device#deviceReadyAt deviceReadyAt}."
   },
   "_initialize": {
    "_checkOS": {
     "!type": "fn()",
     "!doc": "Check which OS is game running on."
    },
    "_checkFeatures": {
     "!type": "fn()",
     "!doc": "Check HTML5 features of the host environment."
    },
    "_checkInput": {
     "!type": "fn()",
     "!doc": "Checks/configures various input."
    },
    "_checkFullScreenSupport": {
     "!type": "fn()",
     "!doc": "Checks for support of the Full Screen API."
    },
    "_checkBrowser": {
     "!type": "fn()",
     "!doc": "Check what browser is game running in."
    },
    "_checkVideo": {
     "!type": "fn()",
     "!doc": "Check video support."
    },
    "_checkAudio": {
     "!type": "fn()",
     "!doc": "Check audio support."
    },
    "_checkDevice": {
     "!type": "fn()",
     "!doc": "Check PixelRatio, iOS device, Vibration API, ArrayBuffers and endianess."
    },
    "_checkIsLittleEndian": {
     "!type": "fn()",
     "!doc": "Check Little or Big Endian system."
    },
    "_checkIsUint8ClampedImageData": {
     "!type": "fn()",
     "!doc": "Test to see if ImageData uses CanvasPixelArray or Uint8ClampedArray."
    },
    "_checkCSS3D": {
     "!type": "fn()",
     "!doc": "Check whether the host environment support 3D CSS."
    }
   }
  },
  "DOM": {
   "!type": "fn()",
   "!doc": "DOM utility class.\n\nProvides a useful Window and Element functions as well as cross-browser compatibility buffer.\n\nSome code originally derived from {@link https://github.com/ryanve/verge verge}.\nSome parts were inspired by the research of Ryan Van Etten, released under MIT License 2013.",
   "getOffset": {
    "!type": "fn(element: +DOMElement, point: +Phaser.Point) -> +Phaser.Point",
    "!doc": "Get the [absolute] position of the element relative to the Document.\n\nThe value may vary slightly as the page is scrolled due to rounding errors."
   },
   "getBounds": {
    "!type": "fn(element: +DOMElement|?, cushion: number) -> ?|bool",
    "!doc": "A cross-browser element.getBoundingClientRect method with optional cushion.\n\nReturns a plain object containing the properties `top/bottom/left/right/width/height` with respect to the top-left corner of the current viewport.\nIts properties match the native rectangle.\nThe cushion parameter is an amount of pixels (+/-) to cushion the element.\nIt adjusts the measurements such that it is possible to detect when an element is near the viewport."
   },
   "getAspectRatio": {
    "!type": "fn(object: +DOMElement|?) -> number",
    "!doc": "Get the Visual viewport aspect ratio (or the aspect ratio of an object or element)"
   },
   "inLayoutViewport": {
    "!type": "fn(element: +DOMElement|?, cushion: number) -> bool",
    "!doc": "Tests if the given DOM element is within the Layout viewport.\n\nThe optional cushion parameter allows you to specify a distance.\n\ninLayoutViewport(element, 100) is `true` if the element is in the viewport or 100px near it.\ninLayoutViewport(element, -100) is `true` if the element is in the viewport or at least 100px near it."
   },
   "getScreenOrientation": {
    "!type": "fn(primaryFallback: string)",
    "!doc": "Returns the device screen orientation.\n\nOrientation values: 'portrait-primary', 'landscape-primary', 'portrait-secondary', 'landscape-secondary'.\n\nOrder of resolving:\n- Screen Orientation API, or variation of - Future track. Most desktop and mobile browsers.\n- Screen size ratio check - If fallback is 'screen', suited for desktops.\n- Viewport size ratio check - If fallback is 'viewport', suited for mobile.\n- window.orientation - If fallback is 'window.orientation', works iOS and probably most Android; non-recommended track.\n- Media query\n- Viewport size ratio check (probably only IE9 and legacy mobile gets here..)\n\nSee\n- https://w3c.github.io/screen-orientation/ (conflicts with mozOrientation/msOrientation)\n- https://developer.mozilla.org/en-US/docs/Web/API/Screen.orientation (mozOrientation)\n- http://msdn.microsoft.com/en-us/library/ie/dn342934(v=vs.85).aspx\n- https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Testing_media_queries\n- http://stackoverflow.com/questions/4917664/detect-viewport-orientation\n- http://www.matthewgifford.com/blog/2011/12/22/a-misconception-about-window-orientation"
   },
   "visualBounds": {
    "!type": "number",
    "!doc": "Scroll, left offset - eg. \"scrollX\""
   },
   "layoutBounds": {
    "!type": "number",
    "!doc": "Viewport width in pixels."
   },
   "documentBounds": {
    "!type": "number",
    "!doc": "Document width in pixels."
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
   "!doc": "Abstracts away the use of RAF or setTimeOut for the core game update loop.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "The currently running game."
    },
    "isRunning": {
     "!type": "bool",
     "!doc": "true if RequestAnimationFrame is running, otherwise false."
    },
    "forceSetTimeOut": {
     "!type": "bool",
     "!doc": "Tell Phaser to use setTimeOut even if raf is available."
    },
    "start": {
     "!type": "fn()",
     "!doc": "Starts the requestAnimationFrame running or setTimeout if unavailable in browser"
    },
    "updateRAF": {
     "!type": "fn()",
     "!doc": "The update method for the requestAnimationFrame"
    },
    "updateSetTimeout": {
     "!type": "fn()",
     "!doc": "The update method for the setTimeout."
    },
    "stop": {
     "!type": "fn()",
     "!doc": "Stops the requestAnimationFrame from running."
    },
    "isSetTimeOut": {
     "!type": "fn() -> bool",
     "!doc": "Is the browser using setTimeout?"
    },
    "isRAF": {
     "!type": "fn() -> bool",
     "!doc": "Is the browser using requestAnimationFrame?"
    }
   }
  },
  "ImageCollection": {
   "!type": "fn(name: string, firstgid: number, width: number, height: number, margin: number, spacing: number, properties: ?)",
   "!doc": "An Image Collection is a special tileset containing mulitple images, with no slicing into each image.\n\nImage Collections are normally created automatically when Tiled data is loaded.",
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
    "properties": {
     "!type": "?"
    },
    "images": {
     "!type": "+array"
    },
    "total": {
     "!type": "number"
    },
    "containsImageIndex": {
     "!type": "fn(imageIndex: number) -> bool",
     "!doc": "Returns true if and only if this image collection contains the given image index."
    },
    "addImage": {
     "!type": "fn(gid: number, image: string)",
     "!doc": "Add an image to this Image Collection."
    }
   }
  },
  "Tile": {
   "!type": "fn(layer: ?, index: number, x: number, y: number, width: number, height: number)",
   "!doc": "A Tile is a representation of a single tile within the Tilemap.",
   "prototype": {
    "layer": {
     "!type": "?",
     "!doc": "The layer in the Tilemap data that this tile belongs to."
    },
    "index": {
     "!type": "number",
     "!doc": "The index of this tile within the map data corresponding to the tileset, or -1 if this represents a blank/null tile."
    },
    "x": {
     "!type": "number",
     "!doc": "The x map coordinate of this tile."
    },
    "y": {
     "!type": "number",
     "!doc": "The y map coordinate of this tile."
    },
    "rotation": {
     "!type": "number",
     "!doc": "The rotation angle of this tile."
    },
    "flipped": {
     "!type": "bool",
     "!doc": "Whether this tile is flipped (mirrored) or not."
    },
    "worldX": {
     "!type": "number",
     "!doc": "The x map coordinate of this tile."
    },
    "worldY": {
     "!type": "number",
     "!doc": "The y map coordinate of this tile."
    },
    "width": {
     "!type": "number",
     "!doc": "The width of the tile in pixels."
    },
    "height": {
     "!type": "number",
     "!doc": "The height of the tile in pixels."
    },
    "centerX": {
     "!type": "number",
     "!doc": "The width of the tile in pixels."
    },
    "centerY": {
     "!type": "number",
     "!doc": "The height of the tile in pixels."
    },
    "alpha": {
     "!type": "number",
     "!doc": "The alpha value at which this tile is drawn to the canvas."
    },
    "properties": {
     "!type": "?",
     "!doc": "Tile specific properties."
    },
    "scanned": {
     "!type": "bool",
     "!doc": "Has this tile been walked / turned into a poly?"
    },
    "faceTop": {
     "!type": "bool",
     "!doc": "Is the top of this tile an interesting edge?"
    },
    "faceBottom": {
     "!type": "bool",
     "!doc": "Is the bottom of this tile an interesting edge?"
    },
    "faceLeft": {
     "!type": "bool",
     "!doc": "Is the left of this tile an interesting edge?"
    },
    "faceRight": {
     "!type": "bool",
     "!doc": "Is the right of this tile an interesting edge?"
    },
    "collideLeft": {
     "!type": "bool",
     "!doc": "Indicating collide with any object on the left."
    },
    "collideRight": {
     "!type": "bool",
     "!doc": "Indicating collide with any object on the right."
    },
    "collideUp": {
     "!type": "bool",
     "!doc": "Indicating collide with any object on the top."
    },
    "collideDown": {
     "!type": "bool",
     "!doc": "Indicating collide with any object on the bottom."
    },
    "collisionCallback": {
     "!type": "fn()",
     "!doc": "Tile collision callback."
    },
    "collisionCallbackContext": {
     "!type": "?",
     "!doc": "The context in which the collision callback will be called."
    },
    "containsPoint": {
     "!type": "fn(x: number, y: number) -> bool",
     "!doc": "Check if the given x and y world coordinates are within this Tile."
    },
    "intersects": {
     "!type": "fn(x: number, y: number, right: number, bottom: number)",
     "!doc": "Check for intersection with this tile."
    },
    "setCollisionCallback": {
     "!type": "fn(callback: fn(), context: ?)",
     "!doc": "Set a callback to be called when this tile is hit by an object.\nThe callback must true true for collision processing to take place."
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "Clean up memory."
    },
    "setCollision": {
     "!type": "fn(left: bool, right: bool, up: bool, down: bool)",
     "!doc": "Sets the collision flags for each side of this tile and updates the interesting faces list."
    },
    "resetCollision": {
     "!type": "fn()",
     "!doc": "Reset collision status flags."
    },
    "isInteresting": {
     "!type": "fn(collides: bool, faces: bool) -> bool",
     "!doc": "Is this tile interesting?"
    },
    "copy": {
     "!type": "fn(tile: +Phaser.Tile)",
     "!doc": "Copies the tile data and properties from the given tile to this tile."
    },
    "collides": {
     "!type": "bool",
     "!doc": "True if this tile can collide on any of its faces."
    },
    "canCollide": {
     "!type": "bool",
     "!doc": "True if this tile can collide on any of its faces or has a collision callback set."
    },
    "left": {
     "!type": "number",
     "!doc": "The x value in pixels."
    },
    "right": {
     "!type": "number",
     "!doc": "The sum of the x and width properties."
    },
    "top": {
     "!type": "number",
     "!doc": "The y value."
    },
    "bottom": {
     "!type": "number",
     "!doc": "The sum of the y and height properties."
    }
   }
  },
  "Tilemap": {
   "!type": "fn(game: +Phaser.Game, key: string, tileWidth: number, tileHeight: number, width: number, height: number)",
   "!doc": "Creates a new Phaser.Tilemap object. The map can either be populated with data from a Tiled JSON file or from a CSV file.\nTo do this pass the Cache key as the first parameter. When using Tiled data you need only provide the key.\nWhen using CSV data you must provide the key and the tileWidth and tileHeight parameters.\nIf creating a blank tilemap to be populated later, you can either specify no parameters at all and then use `Tilemap.create` or pass the map and tile dimensions here.\nNote that all Tilemaps use a base tile size to calculate dimensions from, but that a TilemapLayer may have its own unique tile size that overrides it.\nA Tile map is rendered to the display using a TilemapLayer. It is not added to the display list directly itself.\nA map may have multiple layers. You can perform operations on the map data such as copying, pasting, filling and shuffling the tiles around.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running Game."
    },
    "key": {
     "!type": "string",
     "!doc": "The key of this map data in the Phaser.Cache."
    },
    "width": {
     "!type": "number",
     "!doc": "The width of the map (in tiles)."
    },
    "height": {
     "!type": "number",
     "!doc": "The height of the map (in tiles)."
    },
    "tileWidth": {
     "!type": "number",
     "!doc": "The base width of the tiles in the map (in pixels)."
    },
    "tileHeight": {
     "!type": "number",
     "!doc": "The base height of the tiles in the map (in pixels)."
    },
    "orientation": {
     "!type": "string",
     "!doc": "The orientation of the map data (as specified in Tiled), usually 'orthogonal'."
    },
    "format": {
     "!type": "number",
     "!doc": "The format of the map data, either Phaser.Tilemap.CSV or Phaser.Tilemap.TILED_JSON."
    },
    "version": {
     "!type": "number",
     "!doc": "The version of the map data (as specified in Tiled, usually 1)."
    },
    "properties": {
     "!type": "?",
     "!doc": "Map specific properties as specified in Tiled."
    },
    "widthInPixels": {
     "!type": "number",
     "!doc": "The width of the map in pixels based on width * tileWidth."
    },
    "heightInPixels": {
     "!type": "number",
     "!doc": "The height of the map in pixels based on height * tileHeight."
    },
    "layers": {
     "!type": "+array",
     "!doc": "An array of Tilemap layer data."
    },
    "tilesets": {
     "!type": "+array",
     "!doc": "An array of Tilesets."
    },
    "imagecollections": {
     "!type": "+array",
     "!doc": "An array of Image Collections."
    },
    "tiles": {
     "!type": "+array",
     "!doc": "The super array of Tiles."
    },
    "objects": {
     "!type": "+array",
     "!doc": "An array of Tiled Object Layers."
    },
    "collideIndexes": {
     "!type": "+array",
     "!doc": "An array of tile indexes that collide."
    },
    "collision": {
     "!type": "+array",
     "!doc": "An array of collision data (polylines, etc)."
    },
    "images": {
     "!type": "+array",
     "!doc": "An array of Tiled Image Layers."
    },
    "currentLayer": {
     "!type": "number",
     "!doc": "The current layer."
    },
    "debugMap": {
     "!type": "+array",
     "!doc": "Map data used for debug values only."
    },
    "create": {
     "!type": "fn(name: string, width: number, height: number, tileWidth: number, tileHeight: number, group: +Phaser.Group) -> +Phaser.TilemapLayer",
     "!doc": "Creates an empty map of the given dimensions and one blank layer. If layers already exist they are erased."
    },
    "setTileSize": {
     "!type": "fn(tileWidth: number, tileHeight: number)",
     "!doc": "Sets the base tile size for the map."
    },
    "addTilesetImage": {
     "!type": "fn(tileset: string, key: string|+Phaser.BitmapData, tileWidth: number, tileHeight: number, tileMargin: number, tileSpacing: number, gid: number) -> +Phaser.Tileset",
     "!doc": "Adds an image to the map to be used as a tileset. A single map may use multiple tilesets.\nNote that the tileset name can be found in the JSON file exported from Tiled, or in the Tiled editor."
    },
    "createFromObjects": {
     "!type": "fn(name: string, gid: number, key: string, frame: number|string, exists: bool, autoCull: bool, group: +Phaser.Group, CustomClass: ?, adjustY: bool)",
     "!doc": "Creates a Sprite for every object matching the given gid in the map data. You can optionally specify the group that the Sprite will be created in. If none is\ngiven it will be created in the World. All properties from the map data objectgroup are copied across to the Sprite, so you can use this as an easy way to\nconfigure Sprite properties from within the map editor. For example giving an object a property of alpha: 0.5 in the map editor will duplicate that when the\nSprite is created. You could also give it a value like: body.velocity.x: 100 to set it moving automatically."
    },
    "createFromTiles": {
     "!type": "fn(tiles: number|[?], replacements: number|[?], key: string, layer: number|string|+Phaser.TilemapLayer, group: +Phaser.Group, properties: ?) -> number",
     "!doc": "Creates a Sprite for every object matching the given tile indexes in the map data.\nYou can specify the group that the Sprite will be created in. If none is given it will be created in the World.\nYou can optional specify if the tile will be replaced with another after the Sprite is created. This is useful if you want to lay down special \ntiles in a level that are converted to Sprites, but want to replace the tile itself with a floor tile or similar once converted."
    },
    "createLayer": {
     "!type": "fn(layer: number|string, width: number, height: number, group: +Phaser.Group) -> +Phaser.TilemapLayer",
     "!doc": "Creates a new TilemapLayer object. By default TilemapLayers are fixed to the camera.\nThe `layer` parameter is important. If you've created your map in Tiled then you can get this by looking in Tiled and looking at the Layer name.\nOr you can open the JSON file it exports and look at the layers[].name value. Either way it must match.\nIf you wish to create a blank layer to put your own tiles on then see Tilemap.createBlankLayer."
    },
    "createBlankLayer": {
     "!type": "fn(name: string, width: number, height: number, tileWidth: number, tileHeight: number, group: +Phaser.Group) -> +Phaser.TilemapLayer",
     "!doc": "Creates a new and empty layer on this Tilemap. By default TilemapLayers are fixed to the camera."
    },
    "getIndex": {
     "!type": "fn(location: +array, name: string) -> number",
     "!doc": "Gets the layer index based on the layers name."
    },
    "getLayerIndex": {
     "!type": "fn(name: string) -> number",
     "!doc": "Gets the layer index based on its name."
    },
    "getTilesetIndex": {
     "!type": "fn(name: string) -> number",
     "!doc": "Gets the tileset index based on its name."
    },
    "getImageIndex": {
     "!type": "fn(name: string) -> number",
     "!doc": "Gets the image index based on its name."
    },
    "getObjectIndex": {
     "!type": "fn(name: string) -> number",
     "!doc": "Gets the object index based on its name."
    },
    "setTileIndexCallback": {
     "!type": "fn(indexes: number|+array, callback: fn(), callbackContext: ?, layer: number|string|+Phaser.TilemapLayer)",
     "!doc": "Sets a global collision callback for the given tile index within the layer. This will affect all tiles on this layer that have the same index.\nIf a callback is already set for the tile index it will be replaced. Set the callback to null to remove it.\nIf you want to set a callback for a tile at a specific location on the map then see setTileLocationCallback."
    },
    "setTileLocationCallback": {
     "!type": "fn(x: number, y: number, width: number, height: number, callback: fn(), callbackContext: ?, layer: number|string|+Phaser.TilemapLayer)",
     "!doc": "Sets a global collision callback for the given map location within the layer. This will affect all tiles on this layer found in the given area.\nIf a callback is already set for the tile index it will be replaced. Set the callback to null to remove it.\nIf you want to set a callback for a tile at a specific location on the map then see setTileLocationCallback."
    },
    "setCollision": {
     "!type": "fn(indexes: number|+array, collides: bool, layer: number|string|+Phaser.TilemapLayer, recalculate: bool)",
     "!doc": "Sets collision the given tile or tiles. You can pass in either a single numeric index or an array of indexes: [ 2, 3, 15, 20].\nThe `collides` parameter controls if collision will be enabled (true) or disabled (false)."
    },
    "setCollisionBetween": {
     "!type": "fn(start: number, stop: number, collides: bool, layer: number|string|+Phaser.TilemapLayer, recalculate: bool)",
     "!doc": "Sets collision on a range of tiles where the tile IDs increment sequentially.\nCalling this with a start value of 10 and a stop value of 14 would set collision for tiles 10, 11, 12, 13 and 14.\nThe `collides` parameter controls if collision will be enabled (true) or disabled (false)."
    },
    "setCollisionByExclusion": {
     "!type": "fn(indexes: +array, collides: bool, layer: number|string|+Phaser.TilemapLayer, recalculate: bool)",
     "!doc": "Sets collision on all tiles in the given layer, except for the IDs of those in the given array.\nThe `collides` parameter controls if collision will be enabled (true) or disabled (false)."
    },
    "setCollisionByIndex": {
     "!type": "fn(index: number, collides: bool, layer: number, recalculate: bool)",
     "!doc": "Sets collision values on a tile in the set.\nYou shouldn't usually call this method directly, instead use setCollision, setCollisionBetween or setCollisionByExclusion."
    },
    "getLayer": {
     "!type": "fn(layer: number|string|+Phaser.TilemapLayer) -> number",
     "!doc": "Gets the TilemapLayer index as used in the setCollision calls."
    },
    "setPreventRecalculate": {
     "!type": "fn(value: bool)",
     "!doc": "Turn off/on the recalculation of faces for tile or collision updates. \n`setPreventRecalculate(true)` puts recalculation on hold while `setPreventRecalculate(false)` recalculates all the changed layers."
    },
    "calculateFaces": {
     "!type": "fn(layer: number)",
     "!doc": "Internal function."
    },
    "getTileAbove": {
     "!type": "fn(layer: number, x: number, y: number)",
     "!doc": "Gets the tile above the tile coordinates given.\nMostly used as an internal function by calculateFaces."
    },
    "getTileBelow": {
     "!type": "fn(layer: number, x: number, y: number)",
     "!doc": "Gets the tile below the tile coordinates given.\nMostly used as an internal function by calculateFaces."
    },
    "getTileLeft": {
     "!type": "fn(layer: number, x: number, y: number)",
     "!doc": "Gets the tile to the left of the tile coordinates given.\nMostly used as an internal function by calculateFaces."
    },
    "getTileRight": {
     "!type": "fn(layer: number, x: number, y: number)",
     "!doc": "Gets the tile to the right of the tile coordinates given.\nMostly used as an internal function by calculateFaces."
    },
    "setLayer": {
     "!type": "fn(layer: number|string|+Phaser.TilemapLayer)",
     "!doc": "Sets the current layer to the given index."
    },
    "hasTile": {
     "!type": "fn(x: number, y: number, layer: number|string|+Phaser.TilemapLayer) -> bool",
     "!doc": "Checks if there is a tile at the given location."
    },
    "removeTile": {
     "!type": "fn(x: number, y: number, layer: number|string|+Phaser.TilemapLayer) -> +Phaser.Tile",
     "!doc": "Removes the tile located at the given coordinates and updates the collision data."
    },
    "removeTileWorldXY": {
     "!type": "fn(x: number, y: number, tileWidth: number, tileHeight: number, layer: number|string|+Phaser.TilemapLayer) -> +Phaser.Tile",
     "!doc": "Removes the tile located at the given coordinates and updates the collision data. The coordinates are given in pixel values."
    },
    "putTile": {
     "!type": "fn(tile: +Phaser.Tile|number|+null, x: number, y: number, layer: number|string|+Phaser.TilemapLayer) -> +Phaser.Tile",
     "!doc": "Puts a tile of the given index value at the coordinate specified.\nIf you pass `null` as the tile it will pass your call over to Tilemap.removeTile instead."
    },
    "putTileWorldXY": {
     "!type": "fn(tile: +Phaser.Tile|number, x: number, y: number, tileWidth: number, tileHeight: number, layer: number|string|+Phaser.TilemapLayer) -> +Phaser.Tile",
     "!doc": "Puts a tile into the Tilemap layer. The coordinates are given in pixel values."
    },
    "searchTileIndex": {
     "!type": "fn(index: number, skip: number, reverse: number, layer: number|string|+Phaser.TilemapLayer) -> +Phaser.Tile",
     "!doc": "Searches the entire map layer for the first tile matching the given index, then returns that Phaser.Tile object.\nIf no match is found it returns null.\nThe search starts from the top-left tile and continues horizontally until it hits the end of the row, then it drops down to the next column.\nIf the reverse boolean is true, it scans starting from the bottom-right corner traveling up to the top-left."
    },
    "getTile": {
     "!type": "fn(x: number, y: number, layer: number|string|+Phaser.TilemapLayer, nonNull: bool) -> +Phaser.Tile",
     "!doc": "Gets a tile from the Tilemap Layer. The coordinates are given in tile values."
    },
    "getTileWorldXY": {
     "!type": "fn(x: number, y: number, tileWidth: number, tileHeight: number, layer: number|string|+Phaser.TilemapLayer, nonNull: bool) -> +Phaser.Tile",
     "!doc": "Gets a tile from the Tilemap layer. The coordinates are given in pixel values."
    },
    "copy": {
     "!type": "fn(x: number, y: number, width: number, height: number, layer: number|string|+Phaser.TilemapLayer) -> +array",
     "!doc": "Copies all of the tiles in the given rectangular block into the tilemap data buffer."
    },
    "paste": {
     "!type": "fn(x: number, y: number, tileblock: +array, layer: number|string|+Phaser.TilemapLayer)",
     "!doc": "Pastes a previously copied block of tile data into the given x/y coordinates. Data should have been prepared with Tilemap.copy."
    },
    "swap": {
     "!type": "fn(tileA: number, tileB: number, x: number, y: number, width: number, height: number, layer: number|string|+Phaser.TilemapLayer)",
     "!doc": "Scans the given area for tiles with an index matching tileA and swaps them with tileB."
    },
    "forEach": {
     "!type": "fn(callback: number, context: number, x: number, y: number, width: number, height: number, layer: number|string|+Phaser.TilemapLayer)",
     "!doc": "For each tile in the given area defined by x/y and width/height run the given callback."
    },
    "replace": {
     "!type": "fn(source: number, dest: number, x: number, y: number, width: number, height: number, layer: number|string|+Phaser.TilemapLayer)",
     "!doc": "Scans the given area for tiles with an index matching `source` and updates their index to match `dest`."
    },
    "random": {
     "!type": "fn(x: number, y: number, width: number, height: number, layer: number|string|+Phaser.TilemapLayer)",
     "!doc": "Randomises a set of tiles in a given area."
    },
    "shuffle": {
     "!type": "fn(x: number, y: number, width: number, height: number, layer: number|string|+Phaser.TilemapLayer)",
     "!doc": "Shuffles a set of tiles in a given area. It will only randomise the tiles in that area, so if they're all the same nothing will appear to have changed!"
    },
    "fill": {
     "!type": "fn(index: number, x: number, y: number, width: number, height: number, layer: number|string|+Phaser.TilemapLayer)",
     "!doc": "Fills the given area with the specified tile."
    },
    "removeAllLayers": {
     "!type": "fn()",
     "!doc": "Removes all layers from this tile map."
    },
    "dump": {
     "!type": "fn()",
     "!doc": "Dumps the tilemap data out to the console."
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "Removes all layer data from this tile map and nulls the game reference.\nNote: You are responsible for destroying any TilemapLayer objects you generated yourself, as Tilemap doesn't keep a reference to them."
    },
    "layer": {
     "!type": "number|string|+Phaser.TilemapLayer",
     "!doc": "The current layer object."
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
   "!doc": "A TilemapLayer is a Phaser.Image/Sprite that renders a specific TileLayer of a Tilemap.\n\nSince a TilemapLayer is a Sprite it can be moved around the display, added to other groups or display objects, etc.\n\nBy default TilemapLayers have fixedToCamera set to `true`. Changing this will break Camera follow and scrolling behavior.",
   "prototype": {
    "map": {
     "!type": "+Phaser.Tilemap"
    },
    "index": {
     "!type": "number"
    },
    "layer": {
     "!type": "?"
    },
    "canvas": {
     "!type": "+HTMLCanvasElement"
    },
    "type": {
     "!type": "number"
    },
    "physicsType": {
     "!type": "number",
     "!doc": "The const physics body type of this object."
    },
    "renderSettings": {
     "!type": "bool",
     "!doc": "Delta scroll rendering only draws tiles/edges as they come into view.\n    This can greatly improve scrolling rendering performance, especially when there are many small tiles.\n    It should only be disabled in rare cases."
    },
    "debug": {
     "!type": "bool"
    },
    "exists": {
     "!type": "bool",
     "!doc": "Controls if the core game loop and physics update this game object or not."
    },
    "debugSettings": {
     "!type": "string",
     "!doc": "A tile is rendered as a rectangle using the following fill if a valid tileset/image cannot be found. A value of `null` prevents additional rendering for tiles without a valid tileset image. _This takes effect even when debug rendering for the layer is not enabled._"
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
     "!type": "fn()",
     "!doc": "Create if needed (and return) a shared copy canvas that is shared across all TilemapLayers.\n\nCode that uses the canvas is responsible to ensure the dimensions and save/restore state as appropriate."
    },
    "preUpdate": {
     "!type": "fn()",
     "!doc": "Automatically called by World.preUpdate."
    },
    "postUpdate": {
     "!type": "fn()",
     "!doc": "Automatically called by World.postUpdate. Handles cache updates."
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "Destroys this TilemapLayer."
    },
    "resize": {
     "!type": "fn(width: number, height: number)",
     "!doc": "Resizes the internal canvas and texture frame used by this TilemapLayer.\n\nThis is an expensive call, so don't bind it to a window resize event! But instead call it at carefully\nselected times.\n\nBe aware that no validation of the new sizes takes place and the current map scroll coordinates are not\nmodified either. You will have to handle both of these things from your game code if required."
    },
    "resizeWorld": {
     "!type": "fn()",
     "!doc": "Sets the world size to match the size of this layer."
    },
    "getTileX": {
     "!type": "fn(x: number) -> number",
     "!doc": "Convert a pixel value to a tile coordinate."
    },
    "getTileY": {
     "!type": "fn(y: number) -> number",
     "!doc": "Convert a pixel value to a tile coordinate."
    },
    "getTileXY": {
     "!type": "fn(x: number, y: number, point: +Phaser.Point|?) -> +Phaser.Point|?",
     "!doc": "Convert a pixel coordinate to a tile coordinate."
    },
    "getRayCastTiles": {
     "!type": "fn(line: +Phaser.Line, stepRate: number, collides: bool, interestingFace: bool) -> [?]",
     "!doc": "Gets all tiles that intersect with the given line."
    },
    "getTiles": {
     "!type": "fn(x: number, y: number, width: number, height: number, collides: bool, interestingFace: bool) -> +array.<Phaser.Tile>",
     "!doc": "Get all tiles that exist within the given area, defined by the top-left corner, width and height. Values given are in pixels, not tiles."
    },
    "resetTilesetCache": {
     "!type": "fn()",
     "!doc": "The TilemapLayer caches tileset look-ups.\n\nCall this method of clear the cache if tilesets have been added or updated after the layer has been rendered."
    },
    "setScale": {
     "!type": "fn(xScale: number, yScale: number)",
     "!doc": "This method will set the scale of the tilemap as well as update the underlying block data of this layer"
    },
    "render": {
     "!type": "fn()",
     "!doc": "Renders the tiles to the layer canvas and pushes to the display."
    },
    "anchor": {
     "!type": "+Phaser.Point"
    },
    "texture": {
     "!type": "+Texture"
    },
    "tint": {
     "!type": "number"
    },
    "tintedTexture": {
     "!type": "+Canvas"
    },
    "blendMode": {
     "!type": "number"
    },
    "shader": {
     "!type": "+AbstractFilter"
    },
    "game": {
     "!type": "+Phaser.Game"
    },
    "name": {
     "!type": "string"
    },
    "components": {
     "!type": "?"
    },
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
     "!type": "fn()",
     "!doc": "Override this method in your own custom objects to handle any update requirements.\nIt is called immediately after `preUpdate` and before `postUpdate`.\nRemember if this Game Object has any children you should call update on those too."
    },
    "angle": {
     "!type": "number"
    },
    "play": {
     "!type": "fn(name: string, frameRate: number, loop: bool, killOnComplete: bool) -> +Phaser.Animation",
     "!doc": "Plays an Animation.\n\nThe animation should have previously been created via `animations.add`.\n\nIf the animation is already playing calling this again won't do anything.\nIf you need to reset an already running animation do so directly on the Animation object itself or via `AnimationManager.stop`."
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
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Brings this Game Object to the top of its parents display list.\nVisually this means it will render over the top of any old child in the same Group.\n\nIf this Game Object hasn't been added to a custom Group then this method will bring it to the top of the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "sendToBack": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Sends this Game Object to the bottom of its parents display list.\nVisually this means it will render below all other children in the same Group.\n\nIf this Game Object hasn't been added to a custom Group then this method will send it to the bottom of the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "moveUp": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Moves this Game Object up one place in its parents display list.\nThis call has no effect if the Game Object is already at the top of the display list.\n\nIf this Game Object hasn't been added to a custom Group then this method will move it one object up within the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "moveDown": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Moves this Game Object down one place in its parents display list.\nThis call has no effect if the Game Object is already at the bottom of the display list.\n\nIf this Game Object hasn't been added to a custom Group then this method will move it one object down within the Game World, \nbecause the World is the root Group from which all Game Objects descend."
    },
    "cropRect": {
     "!type": "+Phaser.Rectangle"
    },
    "crop": {
     "!type": "fn(rect: +Phaser.Rectangle, copy: bool)",
     "!doc": "Crop allows you to crop the texture being used to display this Game Object.\nSetting a crop rectangle modifies the core texture frame. The Game Object width and height properties will be adjusted accordingly.\n\nCropping takes place from the top-left and can be modified in real-time either by providing an updated rectangle object to this method,\nor by modifying `cropRect` property directly and then calling `updateCrop`.\n\nThe rectangle object given to this method can be either a `Phaser.Rectangle` or any other object \nso long as it has public `x`, `y`, `width`, `height`, `right` and `bottom` properties.\n\nA reference to the rectangle is stored in `cropRect` unless the `copy` parameter is `true`, \nin which case the values are duplicated to a local object."
    },
    "updateCrop": {
     "!type": "fn()",
     "!doc": "If you have set a crop rectangle on this Game Object via `crop` and since modified the `cropRect` property,\nor the rectangle it references, then you need to update the crop frame by calling this method."
    },
    "deltaX": {
     "!type": "number"
    },
    "deltaY": {
     "!type": "number"
    },
    "deltaZ": {
     "!type": "number",
     "!doc": "The delta value."
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
    "damage": {
     "!doc": "Damages the Game Object. This removes the given amount of health from the `health` property.\n\nIf health is taken below or is equal to zero then the `kill` method is called."
    },
    "heal": {
     "!doc": "Heal the Game Object. This adds the given amount of health to the `health` property."
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
     "!type": "fn(health: number) -> +PIXI.DisplayObject",
     "!doc": "Brings a 'dead' Game Object back to life, optionally resetting its health value in the process.\n\nA resurrected Game Object has its `alive`, `exists` and `visible` properties all set to true.\n\nIt will dispatch the `onRevived` event. Listen to `events.onRevived` for the signal."
    },
    "kill": {
     "!type": "fn() -> +PIXI.DisplayObject",
     "!doc": "Kills a Game Object. A killed Game Object has its `alive`, `exists` and `visible` properties all set to false.\n\nIt will dispatch the `onKilled` event. You can listen to `events.onKilled` for the signal.\n\nNote that killing a Game Object is a way for you to quickly recycle it in an object pool, \nit doesn't destroy the object or free it up from memory.\n\nIf you don't need this Game Object any more you should call `destroy` instead."
    },
    "loadTexture": {
     "!type": "fn(key: string|+Phaser.RenderTexture|+Phaser.BitmapData|+Phaser.Video|+PIXI.Texture, frame: string|number, stopAnimation: bool)",
     "!doc": "Changes the base texture the Game Object is using. The old texture is removed and the new one is referenced or fetched from the Cache.\n\nIf your Game Object is using a frame from a texture atlas and you just wish to change to another frame, then see the `frame` or `frameName` properties instead.\n\nYou should only use `loadTexture` if you want to replace the base texture entirely.\n\nCalling this method causes a WebGL texture update, so use sparingly or in low-intensity portions of your game, or if you know the new texture is already on the GPU."
    },
    "setFrame": {
     "!type": "fn(frame: +Phaser.Frame)",
     "!doc": "Sets the texture frame the Game Object uses for rendering.\n\nThis is primarily an internal method used by `loadTexture`, but is exposed for the use of plugins and custom classes."
    },
    "resizeFrame": {
     "!type": "fn(parent: ?, width: number, height: number)",
     "!doc": "Resizes the Frame dimensions that the Game Object uses for rendering.\n\nYou shouldn't normally need to ever call this, but in the case of special texture types such as Video or BitmapData\nit can be useful to adjust the dimensions directly in this way."
    },
    "resetFrame": {
     "!type": "fn()",
     "!doc": "Resets the texture frame dimensions that the Game Object uses for rendering."
    },
    "frame": {
     "!type": "number"
    },
    "frameName": {
     "!type": "string"
    },
    "overlap": {
     "!type": "fn(displayObject: +Phaser.Sprite|+Phaser.Image|+Phaser.TileSprite|+Phaser.Button|+PIXI.DisplayObject) -> bool",
     "!doc": "Checks to see if the bounds of this Game Object overlaps with the bounds of the given Display Object, \nwhich can be a Sprite, Image, TileSprite or anything that extends those such as Button or provides a `getBounds` method and result.\n\nThis check ignores the `hitArea` property if set and runs a `getBounds` comparison on both objects to determine the result.\n\nTherefore it's relatively expensive to use in large quantities, i.e. with lots of Sprites at a high frequency.\nIt should be fine for low-volume testing where physics isn't required."
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
     "!type": "fn(x: number, y: number, health: number) -> +PIXI.DisplayObject",
     "!doc": "Resets the Game Object.\n\nThis moves the Game Object to the given x/y world coordinates and sets `fresh`, `exists`, \n`visible` and `renderable` to true.\n\nIf this Game Object has the LifeSpan component it will also set `alive` to true and `health` to the given value.\n\nIf this Game Object has a Physics Body it will reset the Body."
    },
    "transformCallback": {
     "!type": "fn()"
    },
    "transformCallbackContext": {
     "!type": "?"
    },
    "scaleMin": {
     "!type": "+Phaser.Point"
    },
    "scaleMax": {
     "!type": "+Phaser.Point"
    },
    "setScaleMinMax": {
     "!type": "fn(minX: number|+null, minY: number|+null, maxX: number|+null, maxY: number|+null)",
     "!doc": "Sets the scaleMin and scaleMax values. These values are used to limit how far this Game Object will scale based on its parent.\n\nFor example if this Game Object has a `minScale` value of 1 and its parent has a `scale` value of 0.5, the 0.5 will be ignored \nand the scale value of 1 will be used, as the parents scale is lower than the minimum scale this Game Object should adhere to.\n\nBy setting these values you can carefully control how Game Objects deal with responsive scaling.\n\nIf only one parameter is given then that value will be used for both scaleMin and scaleMax:\n`setScaleMinMax(1)` = scaleMin.x, scaleMin.y, scaleMax.x and scaleMax.y all = 1\n\nIf only two parameters are given the first is set as scaleMin.x and y and the second as scaleMax.x and y:\n`setScaleMinMax(0.5, 2)` = scaleMin.x and y = 0.5 and scaleMax.x and y = 2\n\nIf you wish to set `scaleMin` with different values for x and y then either modify Game Object.scaleMin directly, \nor pass `null` for the `maxX` and `maxY` parameters.\n\nCall `setScaleMinMax(null)` to clear all previously set values."
    },
    "smoothed": {
     "!type": "bool"
    }
   }
  },
  "TilemapParser": {
   "!type": "fn()",
   "!doc": "Phaser.TilemapParser parses data objects from Phaser.Loader that need more preparation before they can be inserted into a Tilemap.",
   "INSERT_NULL": {
    "!type": "bool",
    "!doc": "When scanning the Tiled map data the TilemapParser can either insert a null value (true) or \na Phaser.Tile instance with an index of -1 (false, the default). Depending on your game type\ndepends how this should be configured. If you've a large sparsely populated map and the tile\ndata doesn't need to change then setting this value to `true` will help with memory consumption.\nHowever if your map is small, or you need to update the tiles (perhaps the map dynamically changes\nduring the game) then leave the default value set."
   },
   "parse": {
    "!type": "fn(game: +Phaser.Game, key: string, tileWidth: number, tileHeight: number, width: number, height: number) -> ?",
    "!doc": "Parse tilemap data from the cache and creates a Tilemap object."
   },
   "parseCSV": {
    "!type": "fn(data: string, tileWidth: number, tileHeight: number) -> ?",
    "!doc": "Parses a CSV file into valid map data."
   },
   "getEmptyData": {
    "!type": "fn() -> ?",
    "!doc": "Returns an empty map data object."
   },
   "parseJSON": {
    "!type": "fn(json: ?) -> ?",
    "!doc": "Parses a Tiled JSON file into valid map data."
   }
  },
  "Tileset": {
   "!type": "fn(name: string, firstgid: number, width: number, height: number, margin: number, spacing: number, properties: ?)",
   "!doc": "A Tile set is a combination of an image containing the tiles and collision data per tile.\n\nTilesets are normally created automatically when Tiled data is loaded.",
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
    "properties": {
     "!type": "?"
    },
    "image": {
     "!type": "?"
    },
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
     "!type": "fn(context: +CanvasRenderingContext2D, x: number, y: number, index: number)",
     "!doc": "Draws a tile from this Tileset at the given coordinates on the context."
    },
    "containsTileIndex": {
     "!type": "fn() -> bool",
     "!doc": "Returns true if and only if this tileset contains the given tile index."
    },
    "setImage": {
     "!type": "fn(image: +Image)",
     "!doc": "Set the image associated with this Tileset and update the tile data."
    },
    "setSpacing": {
     "!type": "fn(margin: number, spacing: number)",
     "!doc": "Sets tile spacing and margins."
    }
   }
  },
  "Time": {
   "!type": "fn(game: +Phaser.Game)",
   "!doc": "This is the core internal game clock.\n\nIt manages the elapsed time and calculation of elapsed values, used for game object motion and tweens,\nand also handles the standard Timer pool.\n\nTo create a general timed event, use the master {@link Phaser.Timer} accessible through {@link Phaser.Time.events events}.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "Local reference to game."
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
     "!type": "number",
     "!doc": "The value that setTimeout needs to work out when to next update"
    },
    "timeExpected": {
     "!type": "number",
     "!doc": "The time when the next call is expected when using setTimer to control the update loop"
    },
    "events": {
     "!type": "+Phaser.Timer"
    },
    "boot": {
     "!type": "fn()",
     "!doc": "Called automatically by Phaser.Game after boot. Should not be called directly."
    },
    "add": {
     "!type": "fn(timer: +Phaser.Timer) -> +Phaser.Timer",
     "!doc": "Adds an existing Phaser.Timer object to the Timer pool."
    },
    "create": {
     "!type": "fn(autoDestroy: bool) -> +Phaser.Timer",
     "!doc": "Creates a new stand-alone Phaser.Timer object."
    },
    "removeAll": {
     "!type": "fn()",
     "!doc": "Remove all Timer objects, regardless of their state and clears all Timers from the {@link Phaser.Time#events events} timer."
    },
    "update": {
     "!type": "fn(time: number)",
     "!doc": "Updates the game clock and if enabled the advanced timing data. This is called automatically by Phaser.Game."
    },
    "totalElapsedSeconds": {
     "!type": "fn() -> number",
     "!doc": "The number of seconds that have elapsed since the game was started."
    },
    "elapsedSince": {
     "!type": "fn(since: number) -> number",
     "!doc": "How long has passed since the given time."
    },
    "elapsedSecondsSince": {
     "!type": "fn(since: number) -> number",
     "!doc": "How long has passed since the given time (in seconds)."
    },
    "reset": {
     "!type": "fn()",
     "!doc": "Resets the private _started value to now and removes all currently running Timers."
    }
   }
  },
  "Timer": {
   "!type": "fn(game: +Phaser.Game, autoDestroy: bool)",
   "!doc": "A Timer is a way to create small re-usable (or disposable) objects that wait for a specific moment in time,\nand then run the specified callbacks.\n\nYou can add many events to a Timer, each with their own delays. A Timer uses milliseconds as its unit of time (there are 1000 ms in 1 second).\nSo a delay to 250 would fire the event every quarter of a second.\n\nTimers are based on real-world (not physics) time, adjusted for game pause durations.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "Local reference to game."
    },
    "running": {
     "!type": "bool"
    },
    "autoDestroy": {
     "!type": "bool"
    },
    "expired": {
     "!type": "bool",
     "!doc": "An expired Timer is one in which all of its events have been dispatched and none are pending."
    },
    "elapsed": {
     "!type": "number",
     "!doc": "Elapsed time since the last frame (in ms)."
    },
    "events": {
     "!type": "[?]",
     "!doc": "An array holding all of this timers Phaser.TimerEvent objects. Use the methods add, repeat and loop to populate it."
    },
    "onComplete": {
     "!type": "+Phaser.Signal"
    },
    "nextTick": {
     "!type": "number",
     "!doc": "The time the next tick will occur."
    },
    "timeCap": {
     "!type": "number",
     "!doc": "If the difference in time between two frame updates exceeds this value, the event times are reset to avoid catch-up situations."
    },
    "paused": {
     "!type": "bool",
     "!doc": "The paused state of the Timer. You can pause the timer by calling Timer.pause() and Timer.resume() or by the game pausing."
    },
    "add": {
     "!type": "fn(delay: number, callback: fn(), callbackContext: ?, arguments: ?) -> +Phaser.TimerEvent",
     "!doc": "Adds a new Event to this Timer.\n\nThe event will fire after the given amount of `delay` in milliseconds has passed, once the Timer has started running.\nThe delay is in relation to when the Timer starts, not the time it was added. If the Timer is already running the delay will be calculated based on the timers current time.\n\nMake sure to call {@link Phaser.Timer#start start} after adding all of the Events you require for this Timer."
    },
    "repeat": {
     "!type": "fn(delay: number, repeatCount: number, callback: fn(), callbackContext: ?, arguments: ?) -> +Phaser.TimerEvent",
     "!doc": "Adds a new TimerEvent that will always play through once and then repeat for the given number of iterations.\n\nThe event will fire after the given amount of `delay` in milliseconds has passed, once the Timer has started running.\nThe delay is in relation to when the Timer starts, not the time it was added. If the Timer is already running the delay will be calculated based on the timers current time.\n\nMake sure to call {@link Phaser.Timer#start start} after adding all of the Events you require for this Timer."
    },
    "loop": {
     "!type": "fn(delay: number, callback: fn(), callbackContext: ?, arguments: ?) -> +Phaser.TimerEvent",
     "!doc": "Adds a new looped Event to this Timer that will repeat forever or until the Timer is stopped.\n\nThe event will fire after the given amount of `delay` in milliseconds has passed, once the Timer has started running.\nThe delay is in relation to when the Timer starts, not the time it was added. If the Timer is already running the delay will be calculated based on the timers current time.\n\nMake sure to call {@link Phaser.Timer#start start} after adding all of the Events you require for this Timer."
    },
    "start": {
     "!type": "fn(delay: number)",
     "!doc": "Starts this Timer running."
    },
    "stop": {
     "!type": "fn(clearEvents: bool)",
     "!doc": "Stops this Timer from running. Does not cause it to be destroyed if autoDestroy is set to true."
    },
    "remove": {
     "!type": "fn(event: +Phaser.TimerEvent)",
     "!doc": "Removes a pending TimerEvent from the queue."
    },
    "order": {
     "!type": "fn()",
     "!doc": "Orders the events on this Timer so they are in tick order.\nThis is called automatically when new events are created."
    },
    "clearPendingEvents": {
     "!type": "fn()",
     "!doc": "Clears any events from the Timer which have pendingDelete set to true and then resets the private _len and _i values."
    },
    "update": {
     "!type": "fn(time: number) -> bool",
     "!doc": "The main Timer update event, called automatically by Phaser.Time.update."
    },
    "pause": {
     "!type": "fn()",
     "!doc": "Pauses the Timer and all events in the queue."
    },
    "adjustEvents": {
     "!type": "fn()",
     "!doc": "Adjusts the time of all pending events and the nextTick by the given baseTime."
    },
    "resume": {
     "!type": "fn()",
     "!doc": "Resumes the Timer and updates all pending events."
    },
    "removeAll": {
     "!type": "fn()",
     "!doc": "Removes all Events from this Timer and all callbacks linked to onComplete, but leaves the Timer running.    \nThe onComplete callbacks won't be called."
    },
    "destroy": {
     "!type": "fn()",
     "!doc": "Destroys this Timer. Any pending Events are not dispatched.\nThe onComplete callbacks won't be called."
    },
    "next": {
     "!type": "number",
     "!doc": "The time at which the next event will occur."
    },
    "duration": {
     "!type": "number",
     "!doc": "The duration in ms remaining until the next event will occur."
    },
    "length": {
     "!type": "number",
     "!doc": "The number of pending events in the queue."
    },
    "ms": {
     "!type": "number",
     "!doc": "The duration in milliseconds that this Timer has been running for."
    },
    "seconds": {
     "!type": "number",
     "!doc": "The duration in seconds that this Timer has been running for."
    }
   },
   "MINUTE": {
    "!type": "number",
    "!doc": "Number of milliseconds in a minute."
   },
   "SECOND": {
    "!type": "number",
    "!doc": "Number of milliseconds in a second."
   },
   "HALF": {
    "!type": "number",
    "!doc": "Number of milliseconds in half a second."
   },
   "QUARTER": {
    "!type": "number",
    "!doc": "Number of milliseconds in a quarter of a second."
   }
  },
  "TimerEvent": {
   "!type": "fn(timer: +Phaser.Timer, delay: number, tick: number, repeatCount: number, loop: bool, callback: fn(), callbackContext: ?, arguments: [?])",
   "!doc": "A TimerEvent is a single event that is processed by a Phaser.Timer.\n\nIt consists of a delay, which is a value in milliseconds after which the event will fire.\nWhen the event fires it calls a specific callback with the specified arguments.\n\nUse {@link Phaser.Timer#add}, {@link Phaser.Timer#add}, or {@link Phaser.Timer#add} methods to create a new event.",
   "prototype": {
    "timer": {
     "!type": "+Phaser.Timer",
     "!doc": "The Timer object that this TimerEvent belongs to."
    },
    "delay": {
     "!type": "number",
     "!doc": "The delay in ms at which this TimerEvent fires."
    },
    "tick": {
     "!type": "number",
     "!doc": "The tick is the next game clock time that this event will fire at."
    },
    "repeatCount": {
     "!type": "number",
     "!doc": "If this TimerEvent repeats it will do so this many times."
    },
    "loop": {
     "!type": "bool",
     "!doc": "True if this TimerEvent loops, otherwise false."
    },
    "callback": {
     "!type": "fn()",
     "!doc": "The callback that will be called when the TimerEvent occurs."
    },
    "callbackContext": {
     "!type": "?",
     "!doc": "The context in which the callback will be called."
    },
    "args": {
     "!type": "[?]",
     "!doc": "Additional arguments to be passed to the callback."
    },
    "pendingDelete": {
     "!type": "bool",
     "!doc": "A flag that controls if the TimerEvent is pending deletion."
    }
   }
  },
  "Easing": {
   "!type": "fn()",
   "!doc": "A collection of easing methods defining ease-in and ease-out curves.",
   "Linear": {
    "!type": "fn()",
    "!doc": "Linear easing.",
    "prototype": {
     "None": {
      "!type": "fn(k: number) -> number",
      "!doc": "Linear Easing (no variation)."
     }
    }
   },
   "Quadratic": {
    "!type": "fn()",
    "!doc": "Quadratic easing.",
    "prototype": {
     "In": {
      "!type": "fn(k: number) -> number",
      "!doc": "Ease-in."
     },
     "Out": {
      "!type": "fn(k: number) -> number",
      "!doc": "Ease-out."
     },
     "InOut": {
      "!type": "fn(k: number) -> number",
      "!doc": "Ease-in/out."
     }
    }
   },
   "Cubic": {
    "!type": "fn()",
    "!doc": "Cubic easing.",
    "prototype": {
     "In": {
      "!type": "fn(k: number) -> number",
      "!doc": "Cubic ease-in."
     },
     "Out": {
      "!type": "fn(k: number) -> number",
      "!doc": "Cubic ease-out."
     },
     "InOut": {
      "!type": "fn(k: number) -> number",
      "!doc": "Cubic ease-in/out."
     }
    }
   },
   "Quartic": {
    "!type": "fn()",
    "!doc": "Quartic easing.",
    "prototype": {
     "In": {
      "!type": "fn(k: number) -> number",
      "!doc": "Quartic ease-in."
     },
     "Out": {
      "!type": "fn(k: number) -> number",
      "!doc": "Quartic ease-out."
     },
     "InOut": {
      "!type": "fn(k: number) -> number",
      "!doc": "Quartic ease-in/out."
     }
    }
   },
   "Quintic": {
    "!type": "fn()",
    "!doc": "Quintic easing.",
    "prototype": {
     "In": {
      "!type": "fn(k: number) -> number",
      "!doc": "Quintic ease-in."
     },
     "Out": {
      "!type": "fn(k: number) -> number",
      "!doc": "Quintic ease-out."
     },
     "InOut": {
      "!type": "fn(k: number) -> number",
      "!doc": "Quintic ease-in/out."
     }
    }
   },
   "Sinusoidal": {
    "!type": "fn()",
    "!doc": "Sinusoidal easing.",
    "prototype": {
     "In": {
      "!type": "fn(k: number) -> number",
      "!doc": "Sinusoidal ease-in."
     },
     "Out": {
      "!type": "fn(k: number) -> number",
      "!doc": "Sinusoidal ease-out."
     },
     "InOut": {
      "!type": "fn(k: number) -> number",
      "!doc": "Sinusoidal ease-in/out."
     }
    }
   },
   "Exponential": {
    "!type": "fn()",
    "!doc": "Exponential easing.",
    "prototype": {
     "In": {
      "!type": "fn(k: number) -> number",
      "!doc": "Exponential ease-in."
     },
     "Out": {
      "!type": "fn(k: number) -> number",
      "!doc": "Exponential ease-out."
     },
     "InOut": {
      "!type": "fn(k: number) -> number",
      "!doc": "Exponential ease-in/out."
     }
    }
   },
   "Circular": {
    "!type": "fn()",
    "!doc": "Circular easing.",
    "prototype": {
     "In": {
      "!type": "fn(k: number) -> number",
      "!doc": "Circular ease-in."
     },
     "Out": {
      "!type": "fn(k: number) -> number",
      "!doc": "Circular ease-out."
     },
     "InOut": {
      "!type": "fn(k: number) -> number",
      "!doc": "Circular ease-in/out."
     }
    }
   },
   "Elastic": {
    "!type": "fn()",
    "!doc": "Elastic easing.",
    "prototype": {
     "In": {
      "!type": "fn(k: number) -> number",
      "!doc": "Elastic ease-in."
     },
     "Out": {
      "!type": "fn(k: number) -> number",
      "!doc": "Elastic ease-out."
     },
     "InOut": {
      "!type": "fn(k: number) -> number",
      "!doc": "Elastic ease-in/out."
     }
    }
   },
   "Back": {
    "!type": "fn()",
    "!doc": "Back easing.",
    "prototype": {
     "In": {
      "!type": "fn(k: number) -> number",
      "!doc": "Back ease-in."
     },
     "Out": {
      "!type": "fn(k: number) -> number",
      "!doc": "Back ease-out."
     },
     "InOut": {
      "!type": "fn(k: number) -> number",
      "!doc": "Back ease-in/out."
     }
    }
   },
   "Bounce": {
    "!type": "fn()",
    "!doc": "Bounce easing.",
    "prototype": {
     "In": {
      "!type": "fn(k: number) -> number",
      "!doc": "Bounce ease-in."
     },
     "Out": {
      "!type": "fn(k: number) -> number",
      "!doc": "Bounce ease-out."
     },
     "InOut": {
      "!type": "fn(k: number) -> number",
      "!doc": "Bounce ease-in/out."
     }
    }
   }
  },
  "Tween": {
   "!type": "fn(target: ?, game: +Phaser.Game, manager: +Phaser.TweenManager)",
   "!doc": "A Tween allows you to alter one or more properties of a target object over a defined period of time.\nThis can be used for things such as alpha fading Sprites, scaling them or motion.\nUse `Tween.to` or `Tween.from` to set-up the tween values. You can create multiple tweens on the same object\nby calling Tween.to multiple times on the same Tween. Additional tweens specified in this way become \"child\" tweens and\nare played through in sequence. You can use Tween.timeScale and Tween.reverse to control the playback of this Tween and all of its children.",
   "prototype": {
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running Game."
    },
    "target": {
     "!type": "?",
     "!doc": "The target object, such as a Phaser.Sprite or property like Phaser.Sprite.scale."
    },
    "manager": {
     "!type": "+Phaser.TweenManager",
     "!doc": "Reference to the TweenManager responsible for updating this Tween."
    },
    "timeline": {
     "!type": "[?]",
     "!doc": "An Array of TweenData objects that comprise the different parts of this Tween."
    },
    "reverse": {
     "!type": "bool"
    },
    "timeScale": {
     "!type": "number"
    },
    "repeatCounter": {
     "!type": "number",
     "!doc": "If the Tween and any child tweens are set to repeat this contains the current repeat count."
    },
    "pendingDelete": {
     "!type": "bool",
     "!doc": "True if this Tween is ready to be deleted by the TweenManager."
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
     "!type": "bool",
     "!doc": "If the tween is running this is set to true, otherwise false. Tweens that are in a delayed state or waiting to start are considered as being running."
    },
    "current": {
     "!type": "number",
     "!doc": "The current Tween child being run."
    },
    "properties": {
     "!type": "?",
     "!doc": "Target property cache used when building the child data values."
    },
    "chainedTween": {
     "!type": "+Phaser.Tween",
     "!doc": "If this Tween is chained to another this holds a reference to it."
    },
    "isPaused": {
     "!type": "bool",
     "!doc": "Is this Tween paused or not?"
    },
    "frameBased": {
     "!type": "bool"
    },
    "to": {
     "!type": "fn(properties: ?, duration: number, ease: string|fn(), autoStart: bool, delay: number, repeat: number, yoyo: bool) -> +Phaser.Tween",
     "!doc": "Sets this tween to be a `to` tween on the properties given. A `to` tween starts at the current value and tweens to the destination value given.\nFor example a Sprite with an `x` coordinate of 100 could be tweened to `x` 200 by giving a properties object of `{ x: 200 }`.\nThe ease function allows you define the rate of change. You can pass either a function such as Phaser.Easing.Circular.Out or a string such as \"Circ\".\n\".easeIn\", \".easeOut\" and \"easeInOut\" variants are all supported for all ease types."
    },
    "from": {
     "!type": "fn(properties: ?, duration: number, ease: string|fn(), autoStart: bool, delay: number, repeat: number, yoyo: bool) -> +Phaser.Tween",
     "!doc": "Sets this tween to be a `from` tween on the properties given. A `from` tween sets the target to the destination value and tweens to its current value.\nFor example a Sprite with an `x` coordinate of 100 tweened from `x` 500 would be set to `x` 500 and then tweened to `x` 100 by giving a properties object of `{ x: 500 }`.\nThe ease function allows you define the rate of change. You can pass either a function such as Phaser.Easing.Circular.Out or a string such as \"Circ\".\n\".easeIn\", \".easeOut\" and \"easeInOut\" variants are all supported for all ease types."
    },
    "start": {
     "!type": "fn(index: number) -> +Phaser.Tween",
     "!doc": "Starts the tween running. Can also be called by the autoStart parameter of `Tween.to` or `Tween.from`.\nThis sets the `Tween.isRunning` property to `true` and dispatches a `Tween.onStart` signal.\nIf the Tween has a delay set then nothing will start tweening until the delay has expired."
    },
    "stop": {
     "!type": "fn(complete: bool) -> +Phaser.Tween",
     "!doc": "Stops the tween if running and flags it for deletion from the TweenManager.\nIf called directly the `Tween.onComplete` signal is not dispatched and no chained tweens are started unless the complete parameter is set to `true`.\nIf you just wish to pause a tween then use Tween.pause instead."
    },
    "updateTweenData": {
     "!type": "fn(property: string, value: number|fn(), index: number) -> +Phaser.Tween",
     "!doc": "Updates either a single TweenData or all TweenData objects properties to the given value.\nUsed internally by methods like Tween.delay, Tween.yoyo, etc. but can also be called directly if you know which property you want to tweak.\nThe property is not checked, so if you pass an invalid one you'll generate a run-time error."
    },
    "delay": {
     "!type": "fn(duration: number, index: number) -> +Phaser.Tween",
     "!doc": "Sets the delay in milliseconds before this tween will start. If there are child tweens it sets the delay before the first child starts.\nThe delay is invoked as soon as you call `Tween.start`. If the tween is already running this method doesn't do anything for the current active tween.\nIf you have not yet called `Tween.to` or `Tween.from` at least once then this method will do nothing, as there are no tweens to delay.\nIf you have child tweens and pass -1 as the index value it sets the delay across all of them."
    },
    "repeat": {
     "!type": "fn(total: number) -> +Phaser.Tween",
     "!doc": "Set how many times this tween and all of its children will repeat.\nA tween (A) with 3 children (B,C,D) with a `repeatAll` value of 2 would play as: ABCDABCD before completing.\nWhen all child tweens have completed Tween.onLoop will be dispatched."
    },
    "repeatDelay": {
     "!type": "fn(duration: number, index: number) -> +Phaser.Tween",
     "!doc": "Sets the delay in milliseconds before this tween will repeat itself.\nThe repeatDelay is invoked as soon as you call `Tween.start`. If the tween is already running this method doesn't do anything for the current active tween.\nIf you have not yet called `Tween.to` or `Tween.from` at least once then this method will do nothing, as there are no tweens to set repeatDelay on.\nIf you have child tweens and pass -1 as the index value it sets the repeatDelay across all of them."
    },
    "yoyo": {
     "!type": "fn(enable: bool, yoyoDelay: number, index: number) -> +Phaser.Tween",
     "!doc": "A Tween that has yoyo set to true will run through from its starting values to its end values and then play back in reverse from end to start.\nUsed in combination with repeat you can create endless loops.\nIf you have not yet called `Tween.to` or `Tween.from` at least once then this method will do nothing, as there are no tweens to yoyo.\nIf you have child tweens and pass -1 as the index value it sets the yoyo property across all of them.\nIf you wish to yoyo this Tween and all of its children then see Tween.yoyoAll."
    },
    "yoyoDelay": {
     "!type": "fn(duration: number, index: number) -> +Phaser.Tween",
     "!doc": "Sets the delay in milliseconds before this tween will run a yoyo (only applies if yoyo is enabled).\nThe repeatDelay is invoked as soon as you call `Tween.start`. If the tween is already running this method doesn't do anything for the current active tween.\nIf you have not yet called `Tween.to` or `Tween.from` at least once then this method will do nothing, as there are no tweens to set repeatDelay on.\nIf you have child tweens and pass -1 as the index value it sets the repeatDelay across all of them."
    },
    "easing": {
     "!type": "fn(ease: string|fn(), index: number) -> +Phaser.Tween",
     "!doc": "Set easing function this tween will use, i.e. Phaser.Easing.Linear.None.\nThe ease function allows you define the rate of change. You can pass either a function such as Phaser.Easing.Circular.Out or a string such as \"Circ\".\n\".easeIn\", \".easeOut\" and \"easeInOut\" variants are all supported for all ease types.\nIf you have child tweens and pass -1 as the index value it sets the easing function defined here across all of them."
    },
    "interpolation": {
     "!type": "fn(interpolation: fn(), context: ?, index: number) -> +Phaser.Tween",
     "!doc": "Sets the interpolation function the tween will use. By default it uses Phaser.Math.linearInterpolation.\nAlso available: Phaser.Math.bezierInterpolation and Phaser.Math.catmullRomInterpolation.\nThe interpolation function is only used if the target properties is an array.\nIf you have child tweens and pass -1 as the index value and it will set the interpolation function across all of them."
    },
    "chain": {
     "!type": "fn(tweens: +Phaser.Tween) -> +Phaser.Tween",
     "!doc": "This method allows you to chain tweens together. Any tween chained to this tween will have its `Tween.start` method called\nas soon as this tween completes. If this tween never completes (i.e. repeatAll or loop is set) then the chain will never progress.\nNote that `Tween.onComplete` will fire when *this* tween completes, not when the whole chain completes.\nFor that you should listen to `onComplete` on the final tween in your chain.\n\nIf you pass multiple tweens to this method they will be joined into a single long chain.\nFor example if this is Tween A and you pass in B, C and D then B will be chained to A, C will be chained to B and D will be chained to C.\nAny previously chained tweens that may have been set will be overwritten."
    },
    "loop": {
     "!type": "fn(value: bool) -> +Phaser.Tween",
     "!doc": "Enables the looping of this tween and all child tweens. If this tween has no children this setting has no effect.\nIf `value` is `true` then this is the same as setting `Tween.repeatAll(-1)`.\nIf `value` is `false` it is the same as setting `Tween.repeatAll(0)` and will reset the `repeatCounter` to zero.\n\nUsage:\ngame.add.tween(p).to({ x: 700 }, 1000, Phaser.Easing.Linear.None, true)\n.to({ y: 300 }, 1000, Phaser.Easing.Linear.None)\n.to({ x: 0 }, 1000, Phaser.Easing.Linear.None)\n.to({ y: 0 }, 1000, Phaser.Easing.Linear.None)\n.loop();"
    },
    "onUpdateCallback": {
     "!type": "fn(callback: fn(), callbackContext: ?) -> +Phaser.Tween",
     "!doc": "Sets a callback to be fired each time this tween updates."
    },
    "pause": {
     "!type": "fn()",
     "!doc": "Pauses the tween. Resume playback with Tween.resume."
    },
    "resume": {
     "!type": "fn()",
     "!doc": "Resumes a paused tween."
    },
    "update": {
     "!type": "fn(time: number) -> bool",
     "!doc": "Core tween update function called by the TweenManager. Does not need to be invoked directly."
    },
    "generateData": {
     "!type": "fn(frameRate: number, data: +array) -> +array",
     "!doc": "This will generate an array populated with the tweened object values from start to end.\nIt works by running the tween simulation at the given frame rate based on the values set-up in Tween.to and Tween.from.\nIt ignores delay and repeat counts and any chained tweens, but does include child tweens.\nJust one play through of the tween data is returned, including yoyo if set."
    },
    "totalDuration": {
     "!type": "+Phaser.TweenData",
     "!doc": "Gets the total duration of this Tween, including all child tweens, in milliseconds."
    }
   }
  },
  "TweenData": {
   "!type": "fn(parent: +Phaser.Tween)",
   "!doc": "A Phaser.Tween contains at least one TweenData object. It contains all of the tween data values, such as the\nstarting and ending values, the ease function, interpolation and duration. The Tween acts as a timeline manager for\nTweenData objects and can contain multiple TweenData objects.",
   "prototype": {
    "parent": {
     "!type": "+Phaser.Tween",
     "!doc": "The Tween which owns this TweenData."
    },
    "game": {
     "!type": "+Phaser.Game",
     "!doc": "A reference to the currently running Game."
    },
    "duration": {
     "!type": "number",
     "!doc": "The duration of the tween in ms."
    },
    "percent": {
     "!type": "number",
     "!doc": "A value between 0 and 1 that represents how far through the duration this tween is."
    },
    "value": {
     "!type": "number",
     "!doc": "The current calculated value."
    },
    "repeatCounter": {
     "!type": "number",
     "!doc": "If the Tween is set to repeat this contains the current repeat count."
    },
    "repeatDelay": {
     "!type": "number",
     "!doc": "The amount of time in ms between repeats of this tween."
    },
    "interpolate": {
     "!type": "bool",
     "!doc": "True if the Tween will use interpolation (i.e. is an Array to Array tween)"
    },
    "yoyo": {
     "!type": "bool",
     "!doc": "True if the Tween is set to yoyo, otherwise false."
    },
    "yoyoDelay": {
     "!type": "number",
     "!doc": "The amount of time in ms between yoyos of this tween."
    },
    "inReverse": {
     "!type": "bool",
     "!doc": "When a Tween is yoyoing this value holds if it's currently playing forwards (false) or in reverse (true)."
    },
    "delay": {
     "!type": "number",
     "!doc": "The amount to delay by until the Tween starts (in ms). Only applies to the start, use repeatDelay to handle repeats."
    },
    "dt": {
     "!type": "number",
     "!doc": "Current time value."
    },
    "startTime": {
     "!type": "number",
     "!doc": "The time the Tween started or null if it hasn't yet started."
    },
    "easingFunction": {
     "!type": "fn()",
     "!doc": "The easing function used for the Tween."
    },
    "interpolationFunction": {
     "!type": "fn()",
     "!doc": "The interpolation function used for the Tween."
    },
    "interpolationContext": {
     "!type": "?",
     "!doc": "The interpolation function context used for the Tween."
    },
    "isRunning": {
     "!type": "bool",
     "!doc": "If the tween is running this is set to `true`. Unless Phaser.Tween a TweenData that is waiting for a delay to expire is *not* considered as running."
    },
    "isFrom": {
     "!type": "bool",
     "!doc": "Is this a from tween or a to tween?"
    },
    "to": {
     "!type": "fn(properties: ?, duration: number, ease: fn(), delay: number, repeat: number, yoyo: bool) -> +Phaser.TweenData",
     "!doc": "Sets this tween to be a `to` tween on the properties given. A `to` tween starts at the current value and tweens to the destination value given.\nFor example a Sprite with an `x` coordinate of 100 could be tweened to `x` 200 by giving a properties object of `{ x: 200 }`."
    },
    "from": {
     "!type": "fn(properties: ?, duration: number, ease: fn(), delay: number, repeat: number, yoyo: bool) -> +Phaser.TweenData",
     "!doc": "Sets this tween to be a `from` tween on the properties given. A `from` tween sets the target to the destination value and tweens to its current value.\nFor example a Sprite with an `x` coordinate of 100 tweened from `x` 500 would be set to `x` 500 and then tweened to `x` 100 by giving a properties object of `{ x: 500 }`."
    },
    "start": {
     "!type": "fn() -> +Phaser.TweenData",
     "!doc": "Starts the Tween running."
    },
    "update": {
     "!type": "fn(time: number) -> number",
     "!doc": "Updates this Tween. This is called automatically by Phaser.Tween."
    },
    "generateData": {
     "!type": "fn(frameRate: number) -> +array",
     "!doc": "This will generate an array populated with the tweened object values from start to end.\nIt works by running the tween simulation at the given frame rate based on the values set-up in Tween.to and Tween.from.\nJust one play through of the tween data is returned, including yoyo if set."
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
   "!doc": "ArraySet is a Set data structure (items must be unique within the set) that also maintains order.\nThis allows specific items to be easily added or removed from the Set.\n\nItem equality (and uniqueness) is determined by the behavior of `Array.indexOf`.\n\nThis used primarily by the Input subsystem.",
   "prototype": {
    "position": {
     "!type": "number"
    },
    "list": {
     "!type": "[?]"
    },
    "add": {
     "!type": "fn(item: +any) -> +any",
     "!doc": "Adds a new element to the end of the list.\nIf the item already exists in the list it is not moved."
    },
    "getIndex": {
     "!type": "fn(item: +any) -> number",
     "!doc": "Gets the index of the item in the list, or -1 if it isn't in the list."
    },
    "getByKey": {
     "!type": "fn(property: string, value: +any) -> +any",
     "!doc": "Gets an item from the set based on the property strictly equaling the value given.\nReturns null if not found."
    },
    "exists": {
     "!type": "fn(item: +any) -> bool",
     "!doc": "Checks for the item within this list."
    },
    "reset": {
     "!type": "fn()",
     "!doc": "Removes all the items."
    },
    "remove": {
     "!type": "fn(item: +any) -> +any",
     "!doc": "Removes the given element from this list if it exists."
    },
    "setAll": {
     "!type": "fn(key: +any, value: +any)",
     "!doc": "Sets the property `key` to the given value on all members of this list."
    },
    "callAll": {
     "!type": "fn(key: string, parameter: ?)",
     "!doc": "Calls a function on all members of this list, using the member as the context for the callback.\n\nIf the `key` property is present it must be a function.\nThe function is invoked using the item as the context."
    },
    "removeAll": {
     "!type": "fn(destroy: bool)",
     "!doc": "Removes every member from this ArraySet and optionally destroys it."
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
   "!doc": "Utility functions for dealing with Arrays.",
   "getRandomItem": {
    "!type": "fn(objects: [?], startIndex: number, length: number) -> ?",
    "!doc": "Fetch a random entry from the given array.\n\nWill return null if there are no array items that fall within the specified range\nor if there is no item for the randomly chosen index."
   },
   "removeRandomItem": {
    "!type": "fn(objects: [?], startIndex: number, length: number) -> ?",
    "!doc": "Removes a random object from the given array and returns it.\n\nWill return null if there are no array items that fall within the specified range\nor if there is no item for the randomly chosen index."
   },
   "shuffle": {
    "!type": "fn(array: [?]) -> [?]",
    "!doc": "A standard Fisher-Yates Array shuffle implementation which modifies the array in place."
   },
   "transposeMatrix": {
    "!type": "fn(array: [?]) -> [?]",
    "!doc": "Transposes the elements of the given matrix (array of arrays)."
   },
   "rotateMatrix": {
    "!type": "fn(matrix: [?], direction: number|string) -> [?]",
    "!doc": "Rotates the given matrix (array of arrays).\n\nBased on the routine from {@link http://jsfiddle.net/MrPolywhirl/NH42z/}."
   },
   "findClosest": {
    "!type": "fn(value: number, arr: [?]) -> number",
    "!doc": "Snaps a value to the nearest value in an array.\nThe result will always be in the range `[first_value, last_value]`."
   },
   "rotate": {
    "!type": "fn(array: [?]) -> +any",
    "!doc": "Moves the element from the start of the array to the end, shifting all items in the process.\nThe \"rotation\" happens to the left."
   },
   "prototype": {
    "numberArray": {
     "!type": "fn(start: number, end: number) -> [?]",
     "!doc": "Create an array representing the inclusive range of numbers (usually integers) in `[start, end]`.\nThis is equivalent to `numberArrayStep(start, end, 1)`."
    },
    "numberArrayStep": {
     "!type": "fn(start: number, end: number, step: number) -> [?]",
     "!doc": "Create an array of numbers (positive and/or negative) progressing from `start`\nup to but not including `end` by advancing by `step`.\n\nIf `start` is less than `end` a zero-length range is created unless a negative `step` is specified.\n\nCertain values for `start` and `end` (eg. NaN/undefined/null) are currently coerced to 0;\nfor forward compatibility make sure to pass in actual numbers."
    }
   }
  },
  "Color": {
   "!type": "fn()",
   "!doc": "The Phaser.Color class is a set of static methods that assist in color manipulation and conversion.",
   "packPixel": {
    "!type": "fn(r: number, g: number, b: number, a: number) -> number",
    "!doc": "Packs the r, g, b, a components into a single integer, for use with Int32Array.\nIf device is little endian then ABGR order is used. Otherwise RGBA order is used."
   },
   "unpackPixel": {
    "!type": "fn(rgba: number, out: ?, hsl: bool, hsv: bool) -> ?",
    "!doc": "Unpacks the r, g, b, a components into the specified color object, or a new\nobject, for use with Int32Array. If little endian, then ABGR order is used when\nunpacking, otherwise, RGBA order is used. The resulting color object has the\n`r, g, b, a` properties which are unrelated to endianness.\n\nNote that the integer is assumed to be packed in the correct endianness. On little-endian\nthe format is 0xAABBGGRR and on big-endian the format is 0xRRGGBBAA. If you want a\nendian-independent method, use fromRGBA(rgba) and toRGBA(r, g, b, a)."
   },
   "fromRGBA": {
    "!type": "fn(rgba: number, out: ?) -> ?",
    "!doc": "A utility to convert an integer in 0xRRGGBBAA format to a color object.\nThis does not rely on endianness."
   },
   "toRGBA": {
    "!type": "fn(r: number, g: number, b: number, a: number) -> number",
    "!doc": "A utility to convert RGBA components to a 32 bit integer in RRGGBBAA format."
   },
   "RGBtoHSL": {
    "!type": "fn(r: number, g: number, b: number, out: ?) -> ?",
    "!doc": "Converts an RGB color value to HSL (hue, saturation and lightness).\nConversion forumla from http://en.wikipedia.org/wiki/HSL_color_space.\nAssumes RGB values are contained in the set [0, 255] and returns h, s and l in the set [0, 1].\nBased on code by Michael Jackson (https://github.com/mjijackson)"
   },
   "HSLtoRGB": {
    "!type": "fn(h: number, s: number, l: number, out: ?) -> ?",
    "!doc": "Converts an HSL (hue, saturation and lightness) color value to RGB.\nConversion forumla from http://en.wikipedia.org/wiki/HSL_color_space.\nAssumes HSL values are contained in the set [0, 1] and returns r, g and b values in the set [0, 255].\nBased on code by Michael Jackson (https://github.com/mjijackson)"
   },
   "RGBtoHSV": {
    "!type": "fn(r: number, g: number, b: number, out: ?) -> ?",
    "!doc": "Converts an RGB color value to HSV (hue, saturation and value).\nConversion forumla from http://en.wikipedia.org/wiki/HSL_color_space.\nAssumes RGB values are contained in the set [0, 255] and returns h, s and v in the set [0, 1].\nBased on code by Michael Jackson (https://github.com/mjijackson)"
   },
   "HSVtoRGB": {
    "!type": "fn(h: number, s: number, v: number, out: ?) -> ?",
    "!doc": "Converts an HSV (hue, saturation and value) color value to RGB.\nConversion forumla from http://en.wikipedia.org/wiki/HSL_color_space.\nAssumes HSV values are contained in the set [0, 1] and returns r, g and b values in the set [0, 255].\nBased on code by Michael Jackson (https://github.com/mjijackson)"
   },
   "hueToColor": {
    "!type": "fn(p: number, q: number, t: number) -> number",
    "!doc": "Converts a hue to an RGB color.\nBased on code by Michael Jackson (https://github.com/mjijackson)"
   },
   "createColor": {
    "!type": "fn(r: number, g: number, b: number, a: number, h: number, s: number, l: number, v: number) -> ?",
    "!doc": "A utility function to create a lightweight 'color' object with the default components.\nAny components that are not specified will default to zero.\n\nThis is useful when you want to use a shared color object for the getPixel and getPixelAt methods."
   },
   "updateColor": {
    "!type": "fn(out: ?) -> number",
    "!doc": "Takes a color object and updates the rgba property."
   },
   "getColor32": {
    "!type": "fn(a: number, r: number, g: number, b: number) -> number",
    "!doc": "Given an alpha and 3 color values this will return an integer representation of it."
   },
   "getColor": {
    "!type": "fn(r: number, g: number, b: number) -> number",
    "!doc": "Given 3 color values this will return an integer representation of it."
   },
   "RGBtoString": {
    "!type": "fn(r: number, g: number, b: number, a: number, prefix: string) -> string",
    "!doc": "Converts the given color values into a string.\nIf prefix was '#' it will be in the format `#RRGGBB` otherwise `0xAARRGGBB`."
   },
   "hexToRGB": {
    "!type": "fn(hex: string) -> number",
    "!doc": "Converts a hex string into an integer color value."
   },
   "hexToColor": {
    "!type": "fn(hex: string, out: ?) -> ?",
    "!doc": "Converts a hex string into a Phaser Color object.\n\nThe hex string can supplied as `'#0033ff'` or the short-hand format of `'#03f'`; it can begin with an optional \"#\" or \"0x\", or be unprefixed.    \n\nAn alpha channel is _not_ supported."
   },
   "webToColor": {
    "!type": "fn(web: string, out: ?) -> ?",
    "!doc": "Converts a CSS 'web' string into a Phaser Color object.\n\nThe web string can be in the format `'rgb(r,g,b)'` or `'rgba(r,g,b,a)'` where r/g/b are in the range [0..255] and a is in the range [0..1]."
   },
   "valueToColor": {
    "!type": "fn(value: string|number, out: ?) -> ?",
    "!doc": "Converts a value - a \"hex\" string, a \"CSS 'web' string\", or a number - into red, green, blue, and alpha components.\n\nThe value can be a string (see `hexToColor` and `webToColor` for the supported formats) or a packed integer (see `getRGB`).\n\nAn alpha channel is _not_ supported when specifying a hex string."
   },
   "componentToHex": {
    "!type": "fn(color: number) -> string",
    "!doc": "Return a string containing a hex representation of the given color component."
   },
   "HSVColorWheel": {
    "!type": "fn(s: number, v: number) -> +array",
    "!doc": "Get HSV color wheel values in an array which will be 360 elements in size."
   },
   "HSLColorWheel": {
    "!type": "fn(s: number, l: number) -> +array",
    "!doc": "Get HSL color wheel values in an array which will be 360 elements in size."
   },
   "interpolateColor": {
    "!type": "fn(color1: number, color2: number, steps: number, currentStep: number, alpha: number) -> number",
    "!doc": "Interpolates the two given colours based on the supplied step and currentStep properties."
   },
   "interpolateColorWithRGB": {
    "!type": "fn(color: number, r: number, g: number, b: number, steps: number, currentStep: number) -> number",
    "!doc": "Interpolates the two given colours based on the supplied step and currentStep properties."
   },
   "interpolateRGB": {
    "!type": "fn(r1: number, g1: number, b1: number, r2: number, g2: number, b2: number, steps: number, currentStep: number) -> number",
    "!doc": "Interpolates the two given colours based on the supplied step and currentStep properties."
   },
   "getRandomColor": {
    "!type": "fn(min: number, max: number, alpha: number) -> number",
    "!doc": "Returns a random color value between black and white\nSet the min value to start each channel from the given offset.\nSet the max value to restrict the maximum color used per channel."
   },
   "getRGB": {
    "!type": "fn(color: number) -> ?",
    "!doc": "Return the component parts of a color as an Object with the properties alpha, red, green, blue.\n\nAlpha will only be set if it exist in the given color (0xAARRGGBB)"
   },
   "getWebRGB": {
    "!type": "fn(color: number|?) -> string",
    "!doc": "Returns a CSS friendly string value from the given color."
   },
   "getAlpha": {
    "!type": "fn(color: number) -> number",
    "!doc": "Given a native color value (in the format 0xAARRGGBB) this will return the Alpha component, as a value between 0 and 255."
   },
   "getAlphaFloat": {
    "!type": "fn(color: number) -> number",
    "!doc": "Given a native color value (in the format 0xAARRGGBB) this will return the Alpha component as a value between 0 and 1."
   },
   "getRed": {
    "!type": "fn(color: number) -> number",
    "!doc": "Given a native color value (in the format 0xAARRGGBB) this will return the Red component, as a value between 0 and 255."
   },
   "getGreen": {
    "!type": "fn(color: number) -> number",
    "!doc": "Given a native color value (in the format 0xAARRGGBB) this will return the Green component, as a value between 0 and 255."
   },
   "getBlue": {
    "!type": "fn(color: number) -> number",
    "!doc": "Given a native color value (in the format 0xAARRGGBB) this will return the Blue component, as a value between 0 and 255."
   },
   "blendNormal": {
    "!type": "fn(a: number, b: number) -> number",
    "!doc": "Blends the source color, ignoring the backdrop."
   },
   "blendLighten": {
    "!type": "fn(a: number, b: number) -> number",
    "!doc": "Selects the lighter of the backdrop and source colors."
   },
   "blendDarken": {
    "!type": "fn(a: number, b: number) -> number",
    "!doc": "Selects the darker of the backdrop and source colors."
   },
   "blendMultiply": {
    "!type": "fn(a: number, b: number) -> number",
    "!doc": "Multiplies the backdrop and source color values.\nThe result color is always at least as dark as either of the two constituent\ncolors. Multiplying any color with black produces black;\nmultiplying with white leaves the original color unchanged."
   },
   "blendAverage": {
    "!type": "fn(a: number, b: number) -> number",
    "!doc": "Takes the average of the source and backdrop colors."
   },
   "blendAdd": {
    "!type": "fn(a: number, b: number) -> number",
    "!doc": "Adds the source and backdrop colors together and returns the value, up to a maximum of 255."
   },
   "blendSubtract": {
    "!type": "fn(a: number, b: number) -> number",
    "!doc": "Combines the source and backdrop colors and returns their value minus 255."
   },
   "blendDifference": {
    "!type": "fn(a: number, b: number) -> number",
    "!doc": "Subtracts the darker of the two constituent colors from the lighter.\n\nPainting with white inverts the backdrop color; painting with black produces no change."
   },
   "blendNegation": {
    "!type": "fn(a: number, b: number) -> number",
    "!doc": "Negation blend mode."
   },
   "blendScreen": {
    "!type": "fn(a: number, b: number) -> number",
    "!doc": "Multiplies the complements of the backdrop and source color values, then complements the result.\nThe result color is always at least as light as either of the two constituent colors. \nScreening any color with white produces white; screening with black leaves the original color unchanged."
   },
   "blendExclusion": {
    "!type": "fn(a: number, b: number) -> number",
    "!doc": "Produces an effect similar to that of the Difference mode, but lower in contrast. \nPainting with white inverts the backdrop color; painting with black produces no change."
   },
   "blendOverlay": {
    "!type": "fn(a: number, b: number) -> number",
    "!doc": "Multiplies or screens the colors, depending on the backdrop color.\nSource colors overlay the backdrop while preserving its highlights and shadows. \nThe backdrop color is not replaced, but is mixed with the source color to reflect the lightness or darkness of the backdrop."
   },
   "blendSoftLight": {
    "!type": "fn(a: number, b: number) -> number",
    "!doc": "Darkens or lightens the colors, depending on the source color value. \n\nIf the source color is lighter than 0.5, the backdrop is lightened, as if it were dodged; \nthis is useful for adding highlights to a scene. \n\nIf the source color is darker than 0.5, the backdrop is darkened, as if it were burned in. \nThe degree of lightening or darkening is proportional to the difference between the source color and 0.5; \nif it is equal to 0.5, the backdrop is unchanged.\n\nPainting with pure black or white produces a distinctly darker or lighter area, but does not result in pure black or white. \nThe effect is similar to shining a diffused spotlight on the backdrop."
   },
   "blendHardLight": {
    "!type": "fn(a: number, b: number) -> number",
    "!doc": "Multiplies or screens the colors, depending on the source color value. \n\nIf the source color is lighter than 0.5, the backdrop is lightened, as if it were screened; \nthis is useful for adding highlights to a scene. \n\nIf the source color is darker than 0.5, the backdrop is darkened, as if it were multiplied; \nthis is useful for adding shadows to a scene. \n\nThe degree of lightening or darkening is proportional to the difference between the source color and 0.5; \nif it is equal to 0.5, the backdrop is unchanged.\n\nPainting with pure black or white produces pure black or white. The effect is similar to shining a harsh spotlight on the backdrop."
   },
   "blendColorDodge": {
    "!type": "fn(a: number, b: number) -> number",
    "!doc": "Brightens the backdrop color to reflect the source color. \nPainting with black produces no change."
   },
   "blendColorBurn": {
    "!type": "fn(a: number, b: number) -> number",
    "!doc": "Darkens the backdrop color to reflect the source color.\nPainting with white produces no change."
   },
   "blendLinearDodge": {
    "!type": "fn(a: number, b: number) -> number",
    "!doc": "An alias for blendAdd, it simply sums the values of the two colors."
   },
   "blendLinearBurn": {
    "!type": "fn(a: number, b: number) -> number",
    "!doc": "An alias for blendSubtract, it simply sums the values of the two colors and subtracts 255."
   },
   "blendLinearLight": {
    "!type": "fn(a: number, b: number) -> number",
    "!doc": "This blend mode combines Linear Dodge and Linear Burn (rescaled so that neutral colors become middle gray).\nDodge applies to values of top layer lighter than middle gray, and burn to darker values.\nThe calculation simplifies to the sum of bottom layer and twice the top layer, subtract 128. The contrast decreases."
   },
   "blendVividLight": {
    "!type": "fn(a: number, b: number) -> number",
    "!doc": "This blend mode combines Color Dodge and Color Burn (rescaled so that neutral colors become middle gray).\nDodge applies when values in the top layer are lighter than middle gray, and burn to darker values.\nThe middle gray is the neutral color. When color is lighter than this, this effectively moves the white point of the bottom \nlayer down by twice the difference; when it is darker, the black point is moved up by twice the difference. The perceived contrast increases."
   },
   "blendPinLight": {
    "!type": "fn(a: number, b: number) -> number",
    "!doc": "If the backdrop color (light source) is lighter than 50%, the blendDarken mode is used, and colors lighter than the backdrop color do not change.\nIf the backdrop color is darker than 50% gray, colors lighter than the blend color are replaced, and colors darker than the blend color do not change."
   },
   "blendHardMix": {
    "!type": "fn(a: number, b: number) -> number",
    "!doc": "Runs blendVividLight on the source and backdrop colors.\nIf the resulting color is 128 or more, it receives a value of 255; if less than 128, a value of 0.\nTherefore, all blended pixels have red, green, and blue channel values of either 0 or 255.\nThis changes all pixels to primary additive colors (red, green, or blue), white, or black."
   },
   "blendReflect": {
    "!type": "fn(a: number, b: number) -> number",
    "!doc": "Reflect blend mode. This mode is useful when adding shining objects or light zones to images."
   },
   "blendGlow": {
    "!type": "fn(a: number, b: number) -> number",
    "!doc": "Glow blend mode. This mode is a variation of reflect mode with the source and backdrop colors swapped."
   },
   "blendPhoenix": {
    "!type": "fn(a: number, b: number) -> number",
    "!doc": "Phoenix blend mode. This subtracts the lighter color from the darker color, and adds 255, giving a bright result."
   }
  },
  "Utils": {
   "Debug": {
    "!type": "fn(game: +Phaser.Game)",
    "!doc": "A collection of methods for displaying debug information about game objects.\nIf your game is running in WebGL then Debug will create a Sprite that is placed at the top of the Stage display list and bind a canvas texture\nto it, which must be uploaded every frame. Be advised: this is very expensive, especially in browsers like Firefox. So please only enable Debug\nin WebGL mode if you really need it (or your desktop can cope with it well) and disable it for production!\nIf your game is using a Canvas renderer then the debug information is literally drawn on the top of the active game canvas and no Sprite is used.",
    "prototype": {
     "game": {
      "!type": "+Phaser.Game",
      "!doc": "A reference to the currently running Game."
     },
     "sprite": {
      "!type": "+Phaser.Image",
      "!doc": "If debugging in WebGL mode we need this."
     },
     "bmd": {
      "!type": "+Phaser.BitmapData",
      "!doc": "In WebGL mode this BitmapData contains a copy of the debug canvas."
     },
     "canvas": {
      "!type": "+HTMLCanvasElement",
      "!doc": "The canvas to which Debug calls draws."
     },
     "context": {
      "!type": "+CanvasRenderingContext2D",
      "!doc": "The 2d context of the canvas."
     },
     "font": {
      "!type": "string",
      "!doc": "The font that the debug information is rendered in."
     },
     "columnWidth": {
      "!type": "number",
      "!doc": "The spacing between columns."
     },
     "lineHeight": {
      "!type": "number",
      "!doc": "The line height between the debug text."
     },
     "renderShadow": {
      "!type": "bool",
      "!doc": "Should the text be rendered with a slight shadow? Makes it easier to read on different types of background."
     },
     "currentX": {
      "!type": "number",
      "!doc": "The current X position the debug information will be rendered at."
     },
     "currentY": {
      "!type": "number",
      "!doc": "The current Y position the debug information will be rendered at."
     },
     "currentAlpha": {
      "!type": "number",
      "!doc": "The alpha of the Debug context, set before all debug information is rendered to it."
     },
     "dirty": {
      "!type": "bool",
      "!doc": "Does the canvas need re-rendering?"
     },
     "boot": {
      "!type": "fn()",
      "!doc": "Internal method that boots the debug displayer."
     },
     "preUpdate": {
      "!type": "fn()",
      "!doc": "Internal method that clears the canvas (if a Sprite) ready for a new debug session."
     },
     "reset": {
      "!type": "fn()",
      "!doc": "Clears the Debug canvas."
     },
     "start": {
      "!type": "fn(x: number, y: number, color: string, columnWidth: number)",
      "!doc": "Internal method that resets and starts the debug output values."
     },
     "stop": {
      "!type": "fn()",
      "!doc": "Internal method that stops the debug output."
     },
     "line": {
      "!type": "fn()",
      "!doc": "Internal method that outputs a single line of text split over as many columns as needed, one per parameter."
     },
     "soundInfo": {
      "!type": "fn(sound: +Phaser.Sound, x: number, y: number, color: string)",
      "!doc": "Render Sound information, including decoded state, duration, volume and more."
     },
     "cameraInfo": {
      "!type": "fn(camera: +Phaser.Camera, x: number, y: number, color: string)",
      "!doc": "Render camera information including dimensions and location."
     },
     "timer": {
      "!type": "fn(timer: +Phaser.Timer, x: number, y: number, color: string)",
      "!doc": "Render Timer information."
     },
     "pointer": {
      "!type": "fn(pointer: +Phaser.Pointer, hideIfUp: bool, downColor: string, upColor: string, color: string)",
      "!doc": "Renders the Pointer.circle object onto the stage in green if down or red if up along with debug text."
     },
     "spriteInputInfo": {
      "!type": "fn(sprite: +Phaser.Sprite|+Phaser.Image, x: number, y: number, color: string)",
      "!doc": "Render Sprite Input Debug information."
     },
     "key": {
      "!type": "fn(key: +Phaser.Key, x: number, y: number, color: string)",
      "!doc": "Renders Phaser.Key object information."
     },
     "inputInfo": {
      "!type": "fn(x: number, y: number, color: string)",
      "!doc": "Render debug information about the Input object."
     },
     "spriteBounds": {
      "!type": "fn(sprite: +Phaser.Sprite|+Phaser.Image, color: string, filled: bool)",
      "!doc": "Renders the Sprites bounds. Note: This is really expensive as it has to calculate the bounds every time you call it!"
     },
     "ropeSegments": {
      "!type": "fn(rope: +Phaser.Rope, color: string, filled: bool)",
      "!doc": "Renders the Rope's segments. Note: This is really expensive as it has to calculate new segments every time you call it"
     },
     "spriteInfo": {
      "!type": "fn(sprite: +Phaser.Sprite, x: number, y: number, color: string)",
      "!doc": "Render debug infos (including name, bounds info, position and some other properties) about the Sprite."
     },
     "spriteCoords": {
      "!type": "fn(sprite: +Phaser.Sprite|+Phaser.Image, x: number, y: number, color: string)",
      "!doc": "Renders the sprite coordinates in local, positional and world space."
     },
     "lineInfo": {
      "!type": "fn(line: +Phaser.Line, x: number, y: number, color: string)",
      "!doc": "Renders Line information in the given color."
     },
     "pixel": {
      "!type": "fn(x: number, y: number, color: string, size: number)",
      "!doc": "Renders a single pixel at the given size."
     },
     "geom": {
      "!type": "fn(object: +Phaser.Rectangle|?, color: string, filled: bool)",
      "!doc": "Renders a Rectangle."
     },
     "text": {
      "!type": "fn(text: string, x: number, y: number, color: string, font: string)",
      "!doc": "Render a string of text."
     },
     "quadTree": {
      "!type": "fn(quadtree: +Phaser.QuadTree, color: string)",
      "!doc": "Visually renders a QuadTree to the display."
     },
     "body": {
      "!type": "fn(sprite: +Phaser.Sprite, color: string, filled: bool)",
      "!doc": "Render a Sprites Physics body if it has one set. The body is rendered as a filled or stroked rectangle.\nThis only works for Arcade Physics, Ninja Physics (AABB and Circle only) and Box2D Physics bodies.\nTo display a P2 Physics body you should enable debug mode on the body when creating it."
     },
     "bodyInfo": {
      "!type": "fn(sprite: +Phaser.Sprite, x: number, y: number, color: string)",
      "!doc": "Render a Sprites Physic Body information."
     },
     "box2dWorld": {
      "!type": "fn()",
      "!doc": "Renders 'debug draw' data for the Box2D world if it exists.\nThis uses the standard debug drawing feature of Box2D, so colors will be decided by\nthe Box2D engine."
     },
     "box2dBody": {
      "!type": "fn(sprite: +Phaser.Sprite, color: string)",
      "!doc": "Renders 'debug draw' data for the given Box2D body.\nThis uses the standard debug drawing feature of Box2D, so colors will be decided by the Box2D engine."
     },
     "destroy": {
      "!type": "fn()",
      "!doc": "Destroy this object."
     }
    }
   },
   "!type": "fn()",
   "getProperty": {
    "!type": "fn(obj: ?, prop: string) -> ?",
    "!doc": "Gets an objects property by string."
   },
   "setProperty": {
    "!type": "fn(obj: ?, prop: string) -> ?",
    "!doc": "Sets an objects property by string."
   },
   "prototype": {
    "randomChoice": {
     "!type": "fn(choice1: +any, choice2: +any) -> +any",
     "!doc": "Choose between one of two values randomly."
    }
   },
   "parseDimension": {
    "!type": "fn(size: string|number, dimension: number) -> number",
    "!doc": "Get a unit dimension from a string."
   },
   "pad": {
    "!type": "fn(str: string, len: number, pad: string, dir: number) -> string",
    "!doc": "JavaScript string pad http://www.webtoolkit.info/."
   },
   "isPlainObject": {
    "!type": "fn(obj: ?) -> bool",
    "!doc": "This is a slightly modified version of jQuery.isPlainObject.\nA plain object is an object whose internal class property is [object Object]."
   },
   "extend": {
    "!type": "fn(deep: bool, target: ?) -> ?",
    "!doc": "This is a slightly modified version of http://api.jquery.com/jQuery.extend/"
   },
   "mixinPrototype": {
    "!type": "fn(target: ?, mixin: ?, replace: bool)",
    "!doc": "Mixes in an existing mixin object with the target.\n\nValues in the mixin that have either `get` or `set` functions are created as properties via `defineProperty`\n_except_ if they also define a `clone` method - if a clone method is defined that is called instead and\nthe result is assigned directly."
   },
   "mixin": {
    "!type": "fn(from: ?, to: ?) -> ?",
    "!doc": "Mixes the source object into the destination object, returning the newly modified destination object.\nBased on original code by @mudcube"
   }
  },
  "LinkedList": {
   "!type": "fn()",
   "!doc": "A basic Linked List data structure.\n\nThis implementation _modifies_ the `prev` and `next` properties of each item added:\n- The `prev` and `next` properties must be writable and should not be used for any other purpose.\n- Items _cannot_ be added to multiple LinkedLists at the same time.\n- Only objects can be added.",
   "prototype": {
    "next": {
     "!type": "?"
    },
    "prev": {
     "!type": "?"
    },
    "first": {
     "!type": "?"
    },
    "last": {
     "!type": "?"
    },
    "total": {
     "!type": "number"
    },
    "add": {
     "!type": "fn(item: ?) -> ?",
     "!doc": "Adds a new element to this linked list."
    },
    "reset": {
     "!type": "fn()",
     "!doc": "Resets the first, last, next and previous node pointers in this list."
    },
    "remove": {
     "!type": "fn(item: ?)",
     "!doc": "Removes the given element from this linked list if it exists."
    },
    "callAll": {
     "!type": "fn(callback: fn())",
     "!doc": "Calls a function on all members of this list, using the member as the context for the callback.\nThe function must exist on the member."
    }
   }
  }
 },
 "glMatrix": {
  "!type": "fn()",
  "setMatrixArrayType": {
   "!type": "fn(type: +Type)",
   "!doc": "Sets the type of array used when creating new vectors and matrices"
  },
  "toRadian": {
   "!type": "fn(Angle: number)",
   "!doc": "Convert Degree To Radian"
  }
 },
 "vec2": {
  "!type": "fn()",
  "create": {
   "!type": "fn() -> +vec2",
   "!doc": "Creates a new, empty vec2"
  },
  "clone": {
   "!type": "fn(a: +vec2) -> +vec2",
   "!doc": "Creates a new vec2 initialized with values from an existing vector"
  },
  "fromValues": {
   "!type": "fn(x: number, y: number) -> +vec2",
   "!doc": "Creates a new vec2 initialized with the given values"
  },
  "copy": {
   "!type": "fn(out: +vec2, a: +vec2) -> +vec2",
   "!doc": "Copy the values from one vec2 to another"
  },
  "set": {
   "!type": "fn(out: +vec2, x: number, y: number) -> +vec2",
   "!doc": "Set the components of a vec2 to the given values"
  },
  "add": {
   "!type": "fn(out: +vec2, a: +vec2, b: +vec2) -> +vec2",
   "!doc": "Adds two vec2's"
  },
  "subtract": {
   "!type": "fn(out: +vec2, a: +vec2, b: +vec2) -> +vec2",
   "!doc": "Subtracts vector b from vector a"
  },
  "sub": {
   "!type": "fn()",
   "!doc": "Alias for {@link vec2.subtract}"
  },
  "multiply": {
   "!type": "fn(out: +vec2, a: +vec2, b: +vec2) -> +vec2",
   "!doc": "Multiplies two vec2's"
  },
  "mul": {
   "!type": "fn()",
   "!doc": "Alias for {@link vec2.multiply}"
  },
  "divide": {
   "!type": "fn(out: +vec2, a: +vec2, b: +vec2) -> +vec2",
   "!doc": "Divides two vec2's"
  },
  "div": {
   "!type": "fn()",
   "!doc": "Alias for {@link vec2.divide}"
  },
  "min": {
   "!type": "fn(out: +vec2, a: +vec2, b: +vec2) -> +vec2",
   "!doc": "Returns the minimum of two vec2's"
  },
  "max": {
   "!type": "fn(out: +vec2, a: +vec2, b: +vec2) -> +vec2",
   "!doc": "Returns the maximum of two vec2's"
  },
  "scale": {
   "!type": "fn(out: +vec2, a: +vec2, b: number) -> +vec2",
   "!doc": "Scales a vec2 by a scalar number"
  },
  "scaleAndAdd": {
   "!type": "fn(out: +vec2, a: +vec2, b: +vec2, scale: number) -> +vec2",
   "!doc": "Adds two vec2's after scaling the second operand by a scalar value"
  },
  "distance": {
   "!type": "fn(a: +vec2, b: +vec2) -> number",
   "!doc": "Calculates the euclidian distance between two vec2's"
  },
  "dist": {
   "!type": "fn()",
   "!doc": "Alias for {@link vec2.distance}"
  },
  "squaredDistance": {
   "!type": "fn(a: +vec2, b: +vec2) -> number",
   "!doc": "Calculates the squared euclidian distance between two vec2's"
  },
  "sqrDist": {
   "!type": "fn()",
   "!doc": "Alias for {@link vec2.squaredDistance}"
  },
  "length": {
   "!type": "fn(a: +vec2) -> number",
   "!doc": "Calculates the length of a vec2"
  },
  "len": {
   "!type": "fn()",
   "!doc": "Alias for {@link vec2.length}"
  },
  "squaredLength": {
   "!type": "fn(a: +vec2) -> number",
   "!doc": "Calculates the squared length of a vec2"
  },
  "sqrLen": {
   "!type": "fn()",
   "!doc": "Alias for {@link vec2.squaredLength}"
  },
  "negate": {
   "!type": "fn(out: +vec2, a: +vec2) -> +vec2",
   "!doc": "Negates the components of a vec2"
  },
  "inverse": {
   "!type": "fn(out: +vec2, a: +vec2) -> +vec2",
   "!doc": "Returns the inverse of the components of a vec2"
  },
  "normalize": {
   "!type": "fn(out: +vec2, a: +vec2) -> +vec2",
   "!doc": "Normalize a vec2"
  },
  "dot": {
   "!type": "fn(a: +vec2, b: +vec2) -> number",
   "!doc": "Calculates the dot product of two vec2's"
  },
  "cross": {
   "!type": "fn(out: +vec3, a: +vec2, b: +vec2) -> +vec3",
   "!doc": "Computes the cross product of two vec2's\nNote that the cross product must by definition produce a 3D vector"
  },
  "lerp": {
   "!type": "fn(out: +vec2, a: +vec2, b: +vec2, t: number) -> +vec2",
   "!doc": "Performs a linear interpolation between two vec2's"
  },
  "random": {
   "!type": "fn(out: +vec2, scale: number) -> +vec2",
   "!doc": "Generates a random vector with the given scale"
  },
  "transformMat2": {
   "!type": "fn(out: +vec2, a: +vec2, m: +mat2) -> +vec2",
   "!doc": "Transforms the vec2 with a mat2"
  },
  "transformMat2d": {
   "!type": "fn(out: +vec2, a: +vec2, m: +mat2d) -> +vec2",
   "!doc": "Transforms the vec2 with a mat2d"
  },
  "transformMat3": {
   "!type": "fn(out: +vec2, a: +vec2, m: +mat3) -> +vec2",
   "!doc": "Transforms the vec2 with a mat3\n3rd vector component is implicitly '1'"
  },
  "transformMat4": {
   "!type": "fn(out: +vec2, a: +vec2, m: +mat4) -> +vec2",
   "!doc": "Transforms the vec2 with a mat4\n3rd vector component is implicitly '0'\n4th vector component is implicitly '1'"
  },
  "forEach": {
   "!type": "fn(a: [?], stride: number, offset: number, count: number, fn: fn(), arg: ?) -> [?]",
   "!doc": "Perform some operation over an array of vec2s."
  },
  "str": {
   "!type": "fn(vec: +vec2) -> string",
   "!doc": "Returns a string representation of a vector"
  },
  "!doc": "The vec2 object from glMatrix, with some extensions and some removed methods. See http://glmatrix.net."
 },
 "vec3": {
  "!type": "fn()",
  "create": {
   "!type": "fn() -> +vec3",
   "!doc": "Creates a new, empty vec3"
  },
  "clone": {
   "!type": "fn(a: +vec3) -> +vec3",
   "!doc": "Creates a new vec3 initialized with values from an existing vector"
  },
  "fromValues": {
   "!type": "fn(x: number, y: number, z: number) -> +vec3",
   "!doc": "Creates a new vec3 initialized with the given values"
  },
  "copy": {
   "!type": "fn(out: +vec3, a: +vec3) -> +vec3",
   "!doc": "Copy the values from one vec3 to another"
  },
  "set": {
   "!type": "fn(out: +vec3, x: number, y: number, z: number) -> +vec3",
   "!doc": "Set the components of a vec3 to the given values"
  },
  "add": {
   "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> +vec3",
   "!doc": "Adds two vec3's"
  },
  "subtract": {
   "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> +vec3",
   "!doc": "Subtracts vector b from vector a"
  },
  "sub": {
   "!type": "fn()",
   "!doc": "Alias for {@link vec3.subtract}"
  },
  "multiply": {
   "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> +vec3",
   "!doc": "Multiplies two vec3's"
  },
  "mul": {
   "!type": "fn()",
   "!doc": "Alias for {@link vec3.multiply}"
  },
  "divide": {
   "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> +vec3",
   "!doc": "Divides two vec3's"
  },
  "div": {
   "!type": "fn()",
   "!doc": "Alias for {@link vec3.divide}"
  },
  "min": {
   "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> +vec3",
   "!doc": "Returns the minimum of two vec3's"
  },
  "max": {
   "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> +vec3",
   "!doc": "Returns the maximum of two vec3's"
  },
  "scale": {
   "!type": "fn(out: +vec3, a: +vec3, b: number) -> +vec3",
   "!doc": "Scales a vec3 by a scalar number"
  },
  "scaleAndAdd": {
   "!type": "fn(out: +vec3, a: +vec3, b: +vec3, scale: number) -> +vec3",
   "!doc": "Adds two vec3's after scaling the second operand by a scalar value"
  },
  "distance": {
   "!type": "fn(a: +vec3, b: +vec3) -> number",
   "!doc": "Calculates the euclidian distance between two vec3's"
  },
  "dist": {
   "!type": "fn()",
   "!doc": "Alias for {@link vec3.distance}"
  },
  "squaredDistance": {
   "!type": "fn(a: +vec3, b: +vec3) -> number",
   "!doc": "Calculates the squared euclidian distance between two vec3's"
  },
  "sqrDist": {
   "!type": "fn()",
   "!doc": "Alias for {@link vec3.squaredDistance}"
  },
  "length": {
   "!type": "fn(a: +vec3) -> number",
   "!doc": "Calculates the length of a vec3"
  },
  "len": {
   "!type": "fn()",
   "!doc": "Alias for {@link vec3.length}"
  },
  "squaredLength": {
   "!type": "fn(a: +vec3) -> number",
   "!doc": "Calculates the squared length of a vec3"
  },
  "sqrLen": {
   "!type": "fn()",
   "!doc": "Alias for {@link vec3.squaredLength}"
  },
  "negate": {
   "!type": "fn(out: +vec3, a: +vec3) -> +vec3",
   "!doc": "Negates the components of a vec3"
  },
  "inverse": {
   "!type": "fn(out: +vec3, a: +vec3) -> +vec3",
   "!doc": "Returns the inverse of the components of a vec3"
  },
  "normalize": {
   "!type": "fn(out: +vec3, a: +vec3) -> +vec3",
   "!doc": "Normalize a vec3"
  },
  "dot": {
   "!type": "fn(a: +vec3, b: +vec3) -> number",
   "!doc": "Calculates the dot product of two vec3's"
  },
  "cross": {
   "!type": "fn(out: +vec3, a: +vec3, b: +vec3) -> +vec3",
   "!doc": "Computes the cross product of two vec3's"
  },
  "lerp": {
   "!type": "fn(out: +vec3, a: +vec3, b: +vec3, t: number) -> +vec3",
   "!doc": "Performs a linear interpolation between two vec3's"
  },
  "random": {
   "!type": "fn(out: +vec3, scale: number) -> +vec3",
   "!doc": "Generates a random vector with the given scale"
  },
  "transformMat4": {
   "!type": "fn(out: +vec3, a: +vec3, m: +mat4) -> +vec3",
   "!doc": "Transforms the vec3 with a mat4.\n4th vector component is implicitly '1'"
  },
  "transformMat3": {
   "!type": "fn(out: +vec3, a: +vec3, m: +mat4) -> +vec3",
   "!doc": "Transforms the vec3 with a mat3."
  },
  "transformQuat": {
   "!type": "fn(out: +vec3, a: +vec3, q: +quat) -> +vec3",
   "!doc": "Transforms the vec3 with a quat"
  },
  "rotateX": {
   "!type": "fn(out: +vec3, a: +vec3, b: +vec3, c: number) -> +vec3",
   "!doc": "Rotate a 3D vector around the x-axis"
  },
  "rotateY": {
   "!type": "fn(out: +vec3, a: +vec3, b: +vec3, c: number) -> +vec3",
   "!doc": "Rotate a 3D vector around the y-axis"
  },
  "rotateZ": {
   "!type": "fn(out: +vec3, a: +vec3, b: +vec3, c: number) -> +vec3",
   "!doc": "Rotate a 3D vector around the z-axis"
  },
  "forEach": {
   "!type": "fn(a: [?], stride: number, offset: number, count: number, fn: fn(), arg: ?) -> [?]",
   "!doc": "Perform some operation over an array of vec3s."
  },
  "str": {
   "!type": "fn(vec: +vec3) -> string",
   "!doc": "Returns a string representation of a vector"
  }
 },
 "vec4": {
  "!type": "fn()",
  "create": {
   "!type": "fn() -> +vec4",
   "!doc": "Creates a new, empty vec4"
  },
  "clone": {
   "!type": "fn(a: +vec4) -> +vec4",
   "!doc": "Creates a new vec4 initialized with values from an existing vector"
  },
  "fromValues": {
   "!type": "fn(x: number, y: number, z: number, w: number) -> +vec4",
   "!doc": "Creates a new vec4 initialized with the given values"
  },
  "copy": {
   "!type": "fn(out: +vec4, a: +vec4) -> +vec4",
   "!doc": "Copy the values from one vec4 to another"
  },
  "set": {
   "!type": "fn(out: +vec4, x: number, y: number, z: number, w: number) -> +vec4",
   "!doc": "Set the components of a vec4 to the given values"
  },
  "add": {
   "!type": "fn(out: +vec4, a: +vec4, b: +vec4) -> +vec4",
   "!doc": "Adds two vec4's"
  },
  "subtract": {
   "!type": "fn(out: +vec4, a: +vec4, b: +vec4) -> +vec4",
   "!doc": "Subtracts vector b from vector a"
  },
  "sub": {
   "!type": "fn()",
   "!doc": "Alias for {@link vec4.subtract}"
  },
  "multiply": {
   "!type": "fn(out: +vec4, a: +vec4, b: +vec4) -> +vec4",
   "!doc": "Multiplies two vec4's"
  },
  "mul": {
   "!type": "fn()",
   "!doc": "Alias for {@link vec4.multiply}"
  },
  "divide": {
   "!type": "fn(out: +vec4, a: +vec4, b: +vec4) -> +vec4",
   "!doc": "Divides two vec4's"
  },
  "div": {
   "!type": "fn()",
   "!doc": "Alias for {@link vec4.divide}"
  },
  "min": {
   "!type": "fn(out: +vec4, a: +vec4, b: +vec4) -> +vec4",
   "!doc": "Returns the minimum of two vec4's"
  },
  "max": {
   "!type": "fn(out: +vec4, a: +vec4, b: +vec4) -> +vec4",
   "!doc": "Returns the maximum of two vec4's"
  },
  "scale": {
   "!type": "fn(out: +vec4, a: +vec4, b: number) -> +vec4",
   "!doc": "Scales a vec4 by a scalar number"
  },
  "scaleAndAdd": {
   "!type": "fn(out: +vec4, a: +vec4, b: +vec4, scale: number) -> +vec4",
   "!doc": "Adds two vec4's after scaling the second operand by a scalar value"
  },
  "distance": {
   "!type": "fn(a: +vec4, b: +vec4) -> number",
   "!doc": "Calculates the euclidian distance between two vec4's"
  },
  "dist": {
   "!type": "fn()",
   "!doc": "Alias for {@link vec4.distance}"
  },
  "squaredDistance": {
   "!type": "fn(a: +vec4, b: +vec4) -> number",
   "!doc": "Calculates the squared euclidian distance between two vec4's"
  },
  "sqrDist": {
   "!type": "fn()",
   "!doc": "Alias for {@link vec4.squaredDistance}"
  },
  "length": {
   "!type": "fn(a: +vec4) -> number",
   "!doc": "Calculates the length of a vec4"
  },
  "len": {
   "!type": "fn()",
   "!doc": "Alias for {@link vec4.length}"
  },
  "squaredLength": {
   "!type": "fn(a: +vec4) -> number",
   "!doc": "Calculates the squared length of a vec4"
  },
  "sqrLen": {
   "!type": "fn()",
   "!doc": "Alias for {@link vec4.squaredLength}"
  },
  "negate": {
   "!type": "fn(out: +vec4, a: +vec4) -> +vec4",
   "!doc": "Negates the components of a vec4"
  },
  "inverse": {
   "!type": "fn(out: +vec4, a: +vec4) -> +vec4",
   "!doc": "Returns the inverse of the components of a vec4"
  },
  "normalize": {
   "!type": "fn(out: +vec4, a: +vec4) -> +vec4",
   "!doc": "Normalize a vec4"
  },
  "dot": {
   "!type": "fn(a: +vec4, b: +vec4) -> number",
   "!doc": "Calculates the dot product of two vec4's"
  },
  "lerp": {
   "!type": "fn(out: +vec4, a: +vec4, b: +vec4, t: number) -> +vec4",
   "!doc": "Performs a linear interpolation between two vec4's"
  },
  "random": {
   "!type": "fn(out: +vec4, scale: number) -> +vec4",
   "!doc": "Generates a random vector with the given scale"
  },
  "transformMat4": {
   "!type": "fn(out: +vec4, a: +vec4, m: +mat4) -> +vec4",
   "!doc": "Transforms the vec4 with a mat4."
  },
  "transformQuat": {
   "!type": "fn(out: +vec4, a: +vec4, q: +quat) -> +vec4",
   "!doc": "Transforms the vec4 with a quat"
  },
  "forEach": {
   "!type": "fn(a: [?], stride: number, offset: number, count: number, fn: fn(), arg: ?) -> [?]",
   "!doc": "Perform some operation over an array of vec4s."
  },
  "str": {
   "!type": "fn(vec: +vec4) -> string",
   "!doc": "Returns a string representation of a vector"
  }
 },
 "mat2": {
  "!type": "fn()",
  "create": {
   "!type": "fn() -> +mat2",
   "!doc": "Creates a new identity mat2"
  },
  "clone": {
   "!type": "fn(a: +mat2) -> +mat2",
   "!doc": "Creates a new mat2 initialized with values from an existing matrix"
  },
  "copy": {
   "!type": "fn(out: +mat2, a: +mat2) -> +mat2",
   "!doc": "Copy the values from one mat2 to another"
  },
  "identity": {
   "!type": "fn(out: +mat2) -> +mat2",
   "!doc": "Set a mat2 to the identity matrix"
  },
  "transpose": {
   "!type": "fn(out: +mat2, a: +mat2) -> +mat2",
   "!doc": "Transpose the values of a mat2"
  },
  "invert": {
   "!type": "fn(out: +mat2, a: +mat2) -> +mat2",
   "!doc": "Inverts a mat2"
  },
  "adjoint": {
   "!type": "fn(out: +mat2, a: +mat2) -> +mat2",
   "!doc": "Calculates the adjugate of a mat2"
  },
  "determinant": {
   "!type": "fn(a: +mat2) -> number",
   "!doc": "Calculates the determinant of a mat2"
  },
  "multiply": {
   "!type": "fn(out: +mat2, a: +mat2, b: +mat2) -> +mat2",
   "!doc": "Multiplies two mat2's"
  },
  "mul": {
   "!type": "fn()",
   "!doc": "Alias for {@link mat2.multiply}"
  },
  "rotate": {
   "!type": "fn(out: +mat2, a: +mat2, rad: number) -> +mat2",
   "!doc": "Rotates a mat2 by the given angle"
  },
  "scale": {
   "!type": "fn(out: +mat2, a: +mat2, v: +vec2) -> +mat2",
   "!doc": "Scales the mat2 by the dimensions in the given vec2"
  },
  "str": {
   "!type": "fn(mat: +mat2) -> string",
   "!doc": "Returns a string representation of a mat2"
  },
  "frob": {
   "!type": "fn(a: +mat2) -> number",
   "!doc": "Returns Frobenius norm of a mat2"
  },
  "LDU": {
   "!type": "fn(L: +mat2, D: +mat2, U: +mat2, a: +mat2)",
   "!doc": "Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix"
  }
 },
 "mat2d": {
  "!type": "fn()",
  "!doc": "A mat2d contains six elements defined as:\n<pre>\n[a, c, tx,\n b, d, ty]\n</pre>\nThis is a short form for the 3x3 matrix:\n<pre>\n[a, c, tx,\n b, d, ty,\n 0, 0, 1]\n</pre>\nThe last row is ignored so the array is shorter and operations are faster.",
  "create": {
   "!type": "fn() -> +mat2d",
   "!doc": "Creates a new identity mat2d"
  },
  "clone": {
   "!type": "fn(a: +mat2d) -> +mat2d",
   "!doc": "Creates a new mat2d initialized with values from an existing matrix"
  },
  "copy": {
   "!type": "fn(out: +mat2d, a: +mat2d) -> +mat2d",
   "!doc": "Copy the values from one mat2d to another"
  },
  "identity": {
   "!type": "fn(out: +mat2d) -> +mat2d",
   "!doc": "Set a mat2d to the identity matrix"
  },
  "invert": {
   "!type": "fn(out: +mat2d, a: +mat2d) -> +mat2d",
   "!doc": "Inverts a mat2d"
  },
  "determinant": {
   "!type": "fn(a: +mat2d) -> number",
   "!doc": "Calculates the determinant of a mat2d"
  },
  "multiply": {
   "!type": "fn(out: +mat2d, a: +mat2d, b: +mat2d) -> +mat2d",
   "!doc": "Multiplies two mat2d's"
  },
  "mul": {
   "!type": "fn()",
   "!doc": "Alias for {@link mat2d.multiply}"
  },
  "rotate": {
   "!type": "fn(out: +mat2d, a: +mat2d, rad: number) -> +mat2d",
   "!doc": "Rotates a mat2d by the given angle"
  },
  "scale": {
   "!type": "fn(out: +mat2d, a: +mat2d, v: +vec2) -> +mat2d",
   "!doc": "Scales the mat2d by the dimensions in the given vec2"
  },
  "translate": {
   "!type": "fn(out: +mat2d, a: +mat2d, v: +vec2) -> +mat2d",
   "!doc": "Translates the mat2d by the dimensions in the given vec2"
  },
  "str": {
   "!type": "fn(a: +mat2d) -> string",
   "!doc": "Returns a string representation of a mat2d"
  },
  "frob": {
   "!type": "fn(a: +mat2d) -> number",
   "!doc": "Returns Frobenius norm of a mat2d"
  }
 },
 "mat3": {
  "!type": "fn()",
  "create": {
   "!type": "fn() -> +mat3",
   "!doc": "Creates a new identity mat3"
  },
  "fromMat4": {
   "!type": "fn(out: +mat3, a: +mat4) -> +mat3",
   "!doc": "Copies the upper-left 3x3 values into the given mat3."
  },
  "clone": {
   "!type": "fn(a: +mat3) -> +mat3",
   "!doc": "Creates a new mat3 initialized with values from an existing matrix"
  },
  "copy": {
   "!type": "fn(out: +mat3, a: +mat3) -> +mat3",
   "!doc": "Copy the values from one mat3 to another"
  },
  "identity": {
   "!type": "fn(out: +mat3) -> +mat3",
   "!doc": "Set a mat3 to the identity matrix"
  },
  "transpose": {
   "!type": "fn(out: +mat3, a: +mat3) -> +mat3",
   "!doc": "Transpose the values of a mat3"
  },
  "invert": {
   "!type": "fn(out: +mat3, a: +mat3) -> +mat3",
   "!doc": "Inverts a mat3"
  },
  "adjoint": {
   "!type": "fn(out: +mat3, a: +mat3) -> +mat3",
   "!doc": "Calculates the adjugate of a mat3"
  },
  "determinant": {
   "!type": "fn(a: +mat3) -> number",
   "!doc": "Calculates the determinant of a mat3"
  },
  "multiply": {
   "!type": "fn(out: +mat3, a: +mat3, b: +mat3) -> +mat3",
   "!doc": "Multiplies two mat3's"
  },
  "mul": {
   "!type": "fn()",
   "!doc": "Alias for {@link mat3.multiply}"
  },
  "translate": {
   "!type": "fn(out: +mat3, a: +mat3, v: +vec2) -> +mat3",
   "!doc": "Translate a mat3 by the given vector"
  },
  "rotate": {
   "!type": "fn(out: +mat3, a: +mat3, rad: number) -> +mat3",
   "!doc": "Rotates a mat3 by the given angle"
  },
  "scale": {
   "!type": "fn(out: +mat3, a: +mat3, v: +vec2) -> +mat3",
   "!doc": "Scales the mat3 by the dimensions in the given vec2"
  },
  "fromMat2d": {
   "!type": "fn(out: +mat3, a: +mat2d) -> +mat3",
   "!doc": "Copies the values from a mat2d into a mat3"
  },
  "fromQuat": {
   "!type": "fn(out: +mat3, q: +quat) -> +mat3",
   "!doc": "Calculates a 3x3 matrix from the given quaternion"
  },
  "normalFromMat4": {
   "!type": "fn(out: +mat3, a: +mat4) -> +mat3",
   "!doc": "Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix"
  },
  "str": {
   "!type": "fn(mat: +mat3) -> string",
   "!doc": "Returns a string representation of a mat3"
  },
  "frob": {
   "!type": "fn(a: +mat3) -> number",
   "!doc": "Returns Frobenius norm of a mat3"
  }
 },
 "mat4": {
  "!type": "fn()",
  "create": {
   "!type": "fn() -> +mat4",
   "!doc": "Creates a new identity mat4"
  },
  "clone": {
   "!type": "fn(a: +mat4) -> +mat4",
   "!doc": "Creates a new mat4 initialized with values from an existing matrix"
  },
  "copy": {
   "!type": "fn(out: +mat4, a: +mat4) -> +mat4",
   "!doc": "Copy the values from one mat4 to another"
  },
  "identity": {
   "!type": "fn(out: +mat4) -> +mat4",
   "!doc": "Set a mat4 to the identity matrix"
  },
  "transpose": {
   "!type": "fn(out: +mat4, a: +mat4) -> +mat4",
   "!doc": "Transpose the values of a mat4"
  },
  "invert": {
   "!type": "fn(out: +mat4, a: +mat4) -> +mat4",
   "!doc": "Inverts a mat4"
  },
  "adjoint": {
   "!type": "fn(out: +mat4, a: +mat4) -> +mat4",
   "!doc": "Calculates the adjugate of a mat4"
  },
  "determinant": {
   "!type": "fn(a: +mat4) -> number",
   "!doc": "Calculates the determinant of a mat4"
  },
  "multiply": {
   "!type": "fn(out: +mat4, a: +mat4, b: +mat4) -> +mat4",
   "!doc": "Multiplies two mat4's"
  },
  "mul": {
   "!type": "fn()",
   "!doc": "Alias for {@link mat4.multiply}"
  },
  "translate": {
   "!type": "fn(out: +mat4, a: +mat4, v: +vec3) -> +mat4",
   "!doc": "Translate a mat4 by the given vector"
  },
  "scale": {
   "!type": "fn(out: +mat4, a: +mat4, v: +vec3) -> +mat4",
   "!doc": "Scales the mat4 by the dimensions in the given vec3"
  },
  "rotate": {
   "!type": "fn(out: +mat4, a: +mat4, rad: number, axis: +vec3) -> +mat4",
   "!doc": "Rotates a mat4 by the given angle"
  },
  "rotateX": {
   "!type": "fn(out: +mat4, a: +mat4, rad: number) -> +mat4",
   "!doc": "Rotates a matrix by the given angle around the X axis"
  },
  "rotateY": {
   "!type": "fn(out: +mat4, a: +mat4, rad: number) -> +mat4",
   "!doc": "Rotates a matrix by the given angle around the Y axis"
  },
  "rotateZ": {
   "!type": "fn(out: +mat4, a: +mat4, rad: number) -> +mat4",
   "!doc": "Rotates a matrix by the given angle around the Z axis"
  },
  "fromRotationTranslation": {
   "!type": "fn(out: +mat4, q: +quat4, v: +vec3) -> +mat4",
   "!doc": "Creates a matrix from a quaternion rotation and vector translation\nThis is equivalent to (but much faster than):\n\n    mat4.identity(dest);\n    mat4.translate(dest, vec);\n    var quatMat = mat4.create();\n    quat4.toMat4(quat, quatMat);\n    mat4.multiply(dest, quatMat);"
  },
  "frustum": {
   "!type": "fn(out: +mat4, left: number, right: number, bottom: number, top: number, near: number, far: number) -> +mat4",
   "!doc": "Generates a frustum matrix with the given bounds"
  },
  "perspective": {
   "!type": "fn(out: +mat4, fovy: number, aspect: number, near: number, far: number) -> +mat4",
   "!doc": "Generates a perspective projection matrix with the given bounds"
  },
  "ortho": {
   "!type": "fn(out: +mat4, left: number, right: number, bottom: number, top: number, near: number, far: number) -> +mat4",
   "!doc": "Generates a orthogonal projection matrix with the given bounds"
  },
  "lookAt": {
   "!type": "fn(out: +mat4, eye: +vec3, center: +vec3, up: +vec3) -> +mat4",
   "!doc": "Generates a look-at matrix with the given eye position, focal point, and up axis"
  },
  "str": {
   "!type": "fn(mat: +mat4) -> string",
   "!doc": "Returns a string representation of a mat4"
  },
  "frob": {
   "!type": "fn(a: +mat4) -> number",
   "!doc": "Returns Frobenius norm of a mat4"
  }
 },
 "quat": {
  "!type": "fn()",
  "create": {
   "!type": "fn() -> +quat",
   "!doc": "Creates a new identity quat"
  },
  "rotationTo": {
   "!doc": "Sets a quaternion to represent the shortest rotation from one\nvector to another.\n\nBoth vectors are assumed to be unit length."
  },
  "setAxes": {
   "!doc": "Sets the specified quaternion with values corresponding to the given\naxes. Each axis is a vec3 and is expected to be unit length and\nperpendicular to all other specified axes."
  },
  "clone": {
   "!type": "fn(a: +quat) -> +quat",
   "!doc": "Creates a new quat initialized with values from an existing quaternion"
  },
  "fromValues": {
   "!type": "fn(x: number, y: number, z: number, w: number) -> +quat",
   "!doc": "Creates a new quat initialized with the given values"
  },
  "copy": {
   "!type": "fn(out: +quat, a: +quat) -> +quat",
   "!doc": "Copy the values from one quat to another"
  },
  "set": {
   "!type": "fn(out: +quat, x: number, y: number, z: number, w: number) -> +quat",
   "!doc": "Set the components of a quat to the given values"
  },
  "identity": {
   "!type": "fn(out: +quat) -> +quat",
   "!doc": "Set a quat to the identity quaternion"
  },
  "setAxisAngle": {
   "!type": "fn(out: +quat, axis: +vec3, rad: number) -> +quat",
   "!doc": "Sets a quat from the given angle and rotation axis,\nthen returns it."
  },
  "add": {
   "!type": "fn(out: +quat, a: +quat, b: +quat) -> +quat",
   "!doc": "Adds two quat's"
  },
  "multiply": {
   "!type": "fn(out: +quat, a: +quat, b: +quat) -> +quat",
   "!doc": "Multiplies two quat's"
  },
  "mul": {
   "!type": "fn()",
   "!doc": "Alias for {@link quat.multiply}"
  },
  "scale": {
   "!type": "fn(out: +quat, a: +quat, b: number) -> +quat",
   "!doc": "Scales a quat by a scalar number"
  },
  "rotateX": {
   "!type": "fn(out: +quat, a: +quat, rad: number) -> +quat",
   "!doc": "Rotates a quaternion by the given angle about the X axis"
  },
  "rotateY": {
   "!type": "fn(out: +quat, a: +quat, rad: number) -> +quat",
   "!doc": "Rotates a quaternion by the given angle about the Y axis"
  },
  "rotateZ": {
   "!type": "fn(out: +quat, a: +quat, rad: number) -> +quat",
   "!doc": "Rotates a quaternion by the given angle about the Z axis"
  },
  "calculateW": {
   "!type": "fn(out: +quat, a: +quat) -> +quat",
   "!doc": "Calculates the W component of a quat from the X, Y, and Z components.\nAssumes that quaternion is 1 unit in length.\nAny existing W component will be ignored."
  },
  "dot": {
   "!type": "fn(a: +quat, b: +quat) -> number",
   "!doc": "Calculates the dot product of two quat's"
  },
  "lerp": {
   "!type": "fn(out: +quat, a: +quat, b: +quat, t: number) -> +quat",
   "!doc": "Performs a linear interpolation between two quat's"
  },
  "slerp": {
   "!type": "fn(out: +quat, a: +quat, b: +quat, t: number) -> +quat",
   "!doc": "Performs a spherical linear interpolation between two quat"
  },
  "invert": {
   "!type": "fn(out: +quat, a: +quat) -> +quat",
   "!doc": "Calculates the inverse of a quat"
  },
  "conjugate": {
   "!type": "fn(out: +quat, a: +quat) -> +quat",
   "!doc": "Calculates the conjugate of a quat\nIf the quaternion is normalized, this function is faster than quat.inverse and produces the same result."
  },
  "length": {
   "!type": "fn(a: +quat) -> number",
   "!doc": "Calculates the length of a quat"
  },
  "len": {
   "!type": "fn()",
   "!doc": "Alias for {@link quat.length}"
  },
  "squaredLength": {
   "!type": "fn(a: +quat) -> number",
   "!doc": "Calculates the squared length of a quat"
  },
  "sqrLen": {
   "!type": "fn()",
   "!doc": "Alias for {@link quat.squaredLength}"
  },
  "normalize": {
   "!type": "fn(out: +quat, a: +quat) -> +quat",
   "!doc": "Normalize a quat"
  },
  "fromMat3": {
   "!type": "fn(out: +quat, m: +mat3) -> +quat",
   "!doc": "Creates a quaternion from the given 3x3 rotation matrix.\n\nNOTE: The resultant quaternion is not normalized, so you should be sure\nto renormalize the quaternion yourself where necessary."
  },
  "str": {
   "!type": "fn(vec: +quat) -> string",
   "!doc": "Returns a string representation of a quatenion"
  }
 },
 "DisplayObject": {
  "!doc": "A display object is any object that can be rendered in the Phaser/pixi.js scene graph.\n\nThis includes {@link Phaser.Group} (groups are display objects!),\n{@link Phaser.Sprite}, {@link Phaser.Button}, {@link Phaser.Text}\nas well as {@link PIXI.DisplayObject} and all derived types."
 },
 "Line": {
  "!type": "fn()",
  "!doc": "Container for line-related functions",
  "prototype": {
   "length": {
    "!type": "number"
   }
  }
 },
 "lineInt": {
  "!type": "fn(l1: [?], l2: [?], precision: number) -> [?]",
  "!doc": "Compute the intersection between two lines."
 },
 "segmentsIntersect": {
  "!type": "fn(p1: [?], p2: [?], q1: [?], q2: [?]) -> bool",
  "!doc": "Checks if two line segments intersects."
 },
 "Point": {
  "!type": "fn()",
  "!doc": "Point related functions"
 },
 "area": {
  "!type": "fn(a: [?], b: [?], c: [?]) -> number",
  "!doc": "Get the area of a triangle spanned by the three given points. Note that the area will be negative if the points are not given in counter-clockwise order."
 },
 "collinear": {
  "!type": "fn(a: [?], b: [?], c: [?], thresholdAngle: number) -> bool",
  "!doc": "Check if three points are collinear"
 },
 "Polygon": {
  "prototype": {
   "vertices": {
    "!type": "[?]"
   }
  }
 },
 "at": {
  "!type": "fn(i: number) -> [?]",
  "!doc": "Get a vertex at position i. It does not matter if i is out of bounds, this function will just cycle."
 },
 "first": {
  "!type": "fn() -> [?]",
  "!doc": "Get first vertex"
 },
 "last": {
  "!type": "fn() -> [?]",
  "!doc": "Get last vertex"
 },
 "clear": {
  "!type": "fn()",
  "!doc": "Clears the RenderTexture."
 },
 "append": {
  "!type": "fn(poly: +Polygon, from: number, to: number) -> [?]",
  "!doc": "Append points \"from\" to \"to\"-1 from an other polygon \"poly\" onto this one."
 },
 "makeCCW": {
  "!type": "fn()",
  "!doc": "Make sure that the polygon vertices are ordered counter-clockwise."
 },
 "reverse": {
  "!type": "fn()",
  "!doc": "Reverse the vertices in the polygon"
 },
 "isReflex": {
  "!type": "fn(i: number) -> bool",
  "!doc": "Check if a point in the polygon is a reflex point"
 },
 "canSee": {
  "!type": "fn(a: number, b: number) -> bool",
  "!doc": "Check if two vertices in the polygon can see each other"
 },
 "copy": {
  "!type": "fn(dict: +TupleDictionary)",
  "!doc": "Copy another TupleDictionary. Note that all data in this dictionary will be removed."
 },
 "getCutEdges": {
  "!type": "fn() -> [?]",
  "!doc": "Decomposes the polygon into convex pieces. Returns a list of edges [[p1,p2],[p2,p3],...] that cuts the polygon.\nNote that this algorithm has complexity O(N^4) and will be very slow for polygons with many vertices."
 },
 "decomp": {
  "!type": "fn() -> [?]",
  "!doc": "Decomposes the polygon into one or more convex sub-Polygons."
 },
 "slice": {
  "!type": "fn(cutEdges: [?]) -> [?]",
  "!doc": "Slices the polygon given one or more cut edges. If given one, this function will return two polygons (false on failure). If many, an array of polygons."
 },
 "isSimple": {
  "!type": "fn(path: [?]) -> bool",
  "!doc": "Checks that the line segments of this polygon do not intersect each other."
 },
 "quickDecomp": {
  "!type": "fn(result: [?], reflexVertices: [?], steinerPoints: [?], delta: number, maxlevel: number, level: number) -> [?]",
  "!doc": "Quickly decompose the Polygon into convex sub-polygons."
 },
 "removeCollinearPoints": {
  "!type": "fn(precision: number) -> number",
  "!doc": "Remove collinear points in the polygon."
 },
 "Scalar": {
  "!type": "fn()",
  "!doc": "Scalar functions"
 },
 "eq": {
  "!type": "fn(a: number, b: number, precision: number) -> bool",
  "!doc": "Check if two scalars are equal"
 },
 "AABB": {
  "prototype": {
   "lowerBound": {
    "!type": "[?]"
   },
   "upperBound": {
    "!type": "[?]"
   }
  }
 },
 "setFromPoints": {
  "!type": "fn(points: [?], position: [?], angle: number, skinSize: number)",
  "!doc": "Set the AABB bounds from a set of points, transformed by the given position and angle."
 },
 "extend": {
  "!type": "fn(a: ?, b: ?)",
  "!doc": "Extend an object with the properties of another"
 },
 "overlaps": {
  "!type": "fn(body: +Body) -> bool",
  "!doc": "Check if the body is overlapping another body. Note that this method only works if the body was added to a World and if at least one step was taken."
 },
 "containsPoint": {
  "!type": "fn(point: [?]) -> bool"
 },
 "overlapsRay": {
  "!type": "fn(ray: +Ray) -> number",
  "!doc": "Check if the AABB is hit by a ray."
 },
 "Broadphase": {
  "prototype": {
   "result": {
    "!type": "[?]"
   },
   "world": {
    "!type": "+World"
   },
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
 "setWorld": {
  "!type": "fn(world: +World)",
  "!doc": "Change the world"
 },
 "getCollisionPairs": {
  "!type": "fn(world: +World) -> [?]",
  "!doc": "Get the colliding pairs"
 },
 "boundingRadiusCheck": {
  "!type": "fn(bodyA: +Body, bodyB: +Body) -> bool",
  "!doc": "Check whether the bounding radius of two bodies overlap."
 },
 "canCollide": {
  "!type": "fn(bodyA: +Body, bodyB: +Body) -> bool",
  "!doc": "Check whether two bodies are allowed to collide at all."
 },
 "aabbQuery": {
  "!type": "fn(world: +World, aabb: +AABB, result: +array) -> +array",
  "!doc": "Returns all the bodies within an AABB."
 },
 "Narrowphase": {
  "prototype": {
   "contactEquations": {
    "!type": "[?]"
   },
   "frictionEquations": {
    "!type": "[?]"
   },
   "enableFriction": {
    "!type": "bool"
   },
   "enabledEquations": {
    "!type": "bool"
   },
   "slipForce": {
    "!type": "number"
   },
   "frictionCoefficient": {
    "!type": "number"
   },
   "surfaceVelocity": {
    "!type": "number"
   },
   "contactEquationPool": {
    "!type": "+ContactEquationPool"
   },
   "frictionEquationPool": {
    "!type": "+FrictionEquationPool"
   },
   "restitution": {
    "!type": "number"
   },
   "stiffness": {
    "!type": "number"
   },
   "relaxation": {
    "!type": "number"
   },
   "frictionStiffness": {
    "!type": "number"
   },
   "frictionRelaxation": {
    "!type": "number"
   },
   "enableFrictionReduction": {
    "!type": "bool"
   },
   "contactSkinSize": {
    "!type": "number"
   }
  }
 },
 "bodiesOverlap": {
  "!type": "fn(bodyA: +Body, bodyB: +Body) -> bool"
 },
 "collidedLastStep": {
  "!type": "fn(bodyA: +Body, bodyB: +Body) -> bool",
  "!doc": "Check if the bodies were in contact since the last reset()."
 },
 "reset": {
  "!type": "fn()",
  "!doc": "Clean this node from bodies and equations."
 },
 "createContactEquation": {
  "!type": "fn(bodyA: +Body, bodyB: +Body) -> +ContactEquation",
  "!doc": "Creates a ContactEquation, either by reusing an existing object or creating a new one."
 },
 "createFrictionEquation": {
  "!type": "fn(bodyA: +Body, bodyB: +Body) -> +FrictionEquation",
  "!doc": "Creates a FrictionEquation, either by reusing an existing object or creating a new one."
 },
 "createFrictionFromContact": {
  "!type": "fn(contactEquation: +ContactEquation) -> +FrictionEquation",
  "!doc": "Creates a FrictionEquation given the data in the ContactEquation. Uses same offset vectors ri and rj, but the tangent vector will be constructed from the collision normal."
 },
 "convexLine": {
  "!type": "fn(convexBody: +Body, convexShape: +Convex, convexOffset: [?], convexAngle: number, lineBody: +Body, lineShape: +Line, lineOffset: [?], lineAngle: number, justTest: bool)",
  "!doc": "Convex/line narrowphase"
 },
 "lineBox": {
  "!type": "fn(lineBody: +Body, lineShape: +Line, lineOffset: [?], lineAngle: number, boxBody: +Body, boxShape: +Box, boxOffset: [?], boxAngle: number, justTest: bool)",
  "!doc": "Line/box narrowphase"
 },
 "convexCapsule": {
  "!type": "fn(convexBody: +Body, convexShape: +Convex, convexPosition: [?], convexAngle: number, capsuleBody: +Body, capsuleShape: +Capsule, capsulePosition: [?], capsuleAngle: number)",
  "!doc": "Convex/capsule narrowphase"
 },
 "lineCapsule": {
  "!type": "fn(lineBody: +Body, lineShape: +Line, linePosition: [?], lineAngle: number, capsuleBody: +Body, capsuleShape: +Capsule, capsulePosition: [?], capsuleAngle: number)",
  "!doc": "Capsule/line narrowphase"
 },
 "capsuleCapsule": {
  "!type": "fn(bi: +Body, si: +Capsule, xi: [?], ai: number, bj: +Body, sj: +Capsule, xj: [?], aj: number)",
  "!doc": "Capsule/capsule narrowphase"
 },
 "lineLine": {
  "!type": "fn(bodyA: +Body, shapeA: +Line, positionA: [?], angleA: number, bodyB: +Body, shapeB: +Line, positionB: [?], angleB: number)",
  "!doc": "Line/line narrowphase"
 },
 "planeLine": {
  "!type": "fn(planeBody: +Body, planeShape: +Plane, planeOffset: [?], planeAngle: number, lineBody: +Body, lineShape: +Line, lineOffset: [?], lineAngle: number)",
  "!doc": "Plane/line Narrowphase"
 },
 "circleLine": {
  "!type": "fn(circleBody: +Body, circleShape: +Circle, circleOffset: [?], circleAngle: number, lineBody: +Body, lineShape: +Line, lineOffset: [?], lineAngle: number, justTest: bool, lineRadius: number, circleRadius: number)",
  "!doc": "Circle/line Narrowphase"
 },
 "circleCapsule": {
  "!type": "fn(bi: +Body, si: +Circle, xi: [?], ai: number, bj: +Body, sj: +Line, xj: [?], aj: number)",
  "!doc": "Circle/capsule Narrowphase"
 },
 "circleConvex": {
  "!type": "fn(circleBody: +Body, circleShape: +Circle, circleOffset: [?], circleAngle: number, convexBody: +Body, convexShape: +Convex, convexOffset: [?], convexAngle: number, justTest: bool, circleRadius: number)",
  "!doc": "Circle/convex Narrowphase."
 },
 "particleConvex": {
  "!type": "fn(particleBody: +Body, particleShape: +Particle, particleOffset: [?], particleAngle: number, convexBody: +Body, convexShape: +Convex, convexOffset: [?], convexAngle: number, justTest: bool)",
  "!doc": "Particle/convex Narrowphase"
 },
 "circleCircle": {
  "!type": "fn(bodyA: +Body, shapeA: +Circle, offsetA: [?], angleA: number, bodyB: +Body, shapeB: +Circle, offsetB: [?], angleB: number, justTest: bool, radiusA: number, radiusB: number)",
  "!doc": "Circle/circle Narrowphase"
 },
 "planeConvex": {
  "!type": "fn(planeBody: +Body, planeShape: +Plane, planeOffset: [?], planeAngle: number, convexBody: +Body, convexShape: +Convex, convexOffset: [?], convexAngle: number, justTest: bool)",
  "!doc": "Plane/Convex Narrowphase"
 },
 "particlePlane": {
  "!type": "fn(particleBody: +Body, particleShape: +Particle, particleOffset: [?], particleAngle: number, planeBody: +Body, planeShape: +Plane, planeOffset: [?], planeAngle: number, justTest: bool)",
  "!doc": "Narrowphase for particle vs plane"
 },
 "circleParticle": {
  "!type": "fn(circleBody: +Body, circleShape: +Circle, circleOffset: [?], circleAngle: number, particleBody: +Body, particleShape: +Particle, particleOffset: [?], particleAngle: number, justTest: bool)",
  "!doc": "Circle/Particle Narrowphase"
 },
 "planeCapsule": {
  "!type": "fn(planeBody: +Body, planeShape: +Circle, planeOffset: [?], planeAngle: number, capsuleBody: +Body, capsuleShape: +Particle, capsuleOffset: [?], capsuleAngle: number, justTest: bool)"
 },
 "circlePlane": {
  "!type": "fn(bi: +Body, si: +Circle, xi: [?], bj: +Body, sj: +Plane, xj: [?], aj: number)",
  "!doc": "Creates ContactEquations and FrictionEquations for a collision."
 },
 "convexConvex": {
  "!type": "fn(bi: +Body, si: +Convex, xi: [?], ai: number, bj: +Body, sj: +Convex, xj: [?], aj: number)",
  "!doc": "Convex/convex Narrowphase.See <a href=\"http://www.altdevblogaday.com/2011/05/13/contact-generation-between-3d-convex-meshes/\">this article</a> for more info."
 },
 "projectConvexOntoAxis": {
  "!type": "fn(convexShape: +Convex, convexOffset: [?], convexAngle: number, worldAxis: [?], result: [?])",
  "!doc": "Project a Convex onto a world-oriented axis"
 },
 "findSeparatingAxis": {
  "!type": "fn(c1: +Convex, offset1: [?], angle1: number, c2: +Convex, offset2: [?], angle2: number, sepAxis: [?]) -> bool",
  "!doc": "Find a separating axis between the shapes, that maximizes the separating distance between them."
 },
 "getClosestEdge": {
  "!type": "fn(c: +Convex, angle: number, axis: [?], flip: bool) -> number",
  "!doc": "Get the edge that has a normal closest to an axis."
 },
 "circleHeightfield": {
  "!type": "fn(bi: +Body, si: +Circle, xi: [?], bj: +Body, sj: +Heightfield, xj: [?], aj: number)"
 },
 "Ray": {
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
 "update": {
  "!type": "fn()",
  "!doc": "Compute SPOOK parameters .a, .b and .epsilon according to the current parameters. See equations 9, 10 and 11 in the <a href=\"http://www8.cs.umu.se/kurser/5DV058/VT09/lectures/spooknotes.pdf\">SPOOK notes</a>."
 },
 "intersectBodies": {
  "!type": "fn(bodies: [?])"
 },
 "getAABB": {
  "!type": "fn() -> +AABB",
  "!doc": "Get the AABB from the body. The AABB is updated if necessary."
 },
 "RaycastResult": {
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
 "getHitDistance": {
  "!type": "fn(ray: +Ray)",
  "!doc": "Get the distance to the hit point."
 },
 "hasHit": {
  "!type": "fn()",
  "!doc": "Returns true if the ray hit something since the last reset()."
 },
 "getHitPoint": {
  "!type": "fn(out: +array, ray: +Ray)",
  "!doc": "Get world hit point."
 },
 "stop": {
  "!type": "fn()",
  "!doc": "Can be called while iterating over hits to stop searching for hit points."
 },
 "SAPBroadphase": {
  "prototype": {
   "axisList": {
    "!type": "[?]"
   },
   "axisIndex": {
    "!type": "number"
   }
  }
 },
 "sortAxisList": {
  "!type": "fn(a: [?], axisIndex: number) -> [?]",
  "!doc": "Sorts bodies along an axis."
 },
 "Constraint": {
  "prototype": {
   "type": {
    "!type": "number"
   },
   "equations": {
    "!type": "[?]"
   },
   "bodyA": {
    "!type": "+Body"
   },
   "bodyB": {
    "!type": "+Body"
   },
   "collideConnected": {
    "!type": "bool"
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
 "setStiffness": {
  "!type": "fn(stiffness: number)",
  "!doc": "Set stiffness for this constraint."
 },
 "setRelaxation": {
  "!type": "fn(relaxation: number)",
  "!doc": "Set relaxation for this constraint."
 },
 "DistanceConstraint": {
  "prototype": {
   "localAnchorA": {
    "!type": "[?]"
   },
   "localAnchorB": {
    "!type": "[?]"
   },
   "distance": {
    "!type": "number"
   },
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
 "setMaxForce": {
  "!type": "fn(force: number)",
  "!doc": "Set the maximum force to be applied."
 },
 "getMaxForce": {
  "!type": "fn() -> number",
  "!doc": "Get the max force."
 },
 "GearConstraint": {
  "prototype": {
   "ratio": {
    "!type": "number"
   },
   "angle": {
    "!type": "number"
   }
  }
 },
 "setMaxTorque": {
  "!type": "fn(torque: number)",
  "!doc": "Set the max force for the equation."
 },
 "getMaxTorque": {
  "!type": "fn() -> number",
  "!doc": "Get the max torque for the constraint."
 },
 "LockConstraint": {
  "prototype": {
   "localOffsetB": {
    "!type": "[?]"
   },
   "localAngleB": {
    "!type": "number"
   }
  }
 },
 "PrismaticConstraint": {
  "prototype": {
   "localAnchorA": {
    "!type": "[?]"
   },
   "localAnchorB": {
    "!type": "[?]"
   },
   "localAxisA": {
    "!type": "[?]"
   },
   "position": {
    "!type": "number"
   },
   "lowerLimitEnabled": {
    "!type": "bool"
   },
   "upperLimitEnabled": {
    "!type": "bool"
   },
   "lowerLimit": {
    "!type": "number"
   },
   "upperLimit": {
    "!type": "number"
   },
   "motorEquation": {
    "!type": "+Equation"
   },
   "motorEnabled": {
    "!type": "bool"
   },
   "motorSpeed": {
    "!type": "number"
   }
  }
 },
 "enableMotor": {
  "!type": "fn()",
  "!doc": "Enable the rotational motor"
 },
 "disableMotor": {
  "!type": "fn()",
  "!doc": "Disable the rotational motor"
 },
 "setLimits": {
  "!type": "fn(lower: number, upper: number)",
  "!doc": "Set the constraint angle limits."
 },
 "RevoluteConstraint": {
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
   "angle": {
    "!type": "number"
   },
   "lowerLimitEnabled": {
    "!type": "bool"
   },
   "upperLimitEnabled": {
    "!type": "bool"
   },
   "lowerLimit": {
    "!type": "bool"
   },
   "upperLimit": {
    "!type": "bool"
   }
  }
 },
 "motorIsEnabled": {
  "!type": "fn() -> bool",
  "!doc": "Check if the motor is enabled."
 },
 "setMotorSpeed": {
  "!type": "fn(speed: number)",
  "!doc": "Set the speed of the rotational constraint motor"
 },
 "getMotorSpeed": {
  "!type": "fn() -> number",
  "!doc": "Get the speed of the rotational constraint motor"
 },
 "setRatio": {
  "!type": "fn(ratio: number)",
  "!doc": "Set the gear ratio for this equation"
 },
 "ContactEquation": {
  "prototype": {
   "contactPointA": {
    "!type": "[?]"
   },
   "contactPointB": {
    "!type": "[?]"
   },
   "normalA": {
    "!type": "[?]"
   },
   "restitution": {
    "!type": "number"
   },
   "firstImpact": {
    "!type": "bool"
   },
   "shapeA": {
    "!type": "+Shape"
   },
   "shapeB": {
    "!type": "+Shape"
   }
  }
 },
 "Equation": {
  "prototype": {
   "minForce": {
    "!type": "number"
   },
   "maxForce": {
    "!type": "number"
   },
   "bodyA": {
    "!type": "+Body"
   },
   "bodyB": {
    "!type": "+Body"
   },
   "stiffness": {
    "!type": "number"
   },
   "relaxation": {
    "!type": "number"
   },
   "G": {
    "!type": "[?]"
   },
   "needsUpdate": {
    "!type": "bool"
   },
   "multiplier": {
    "!type": "number"
   },
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
 "gmult": {
  "!type": "fn() -> number",
  "!doc": "Multiply a jacobian entry with corresponding positions or velocities"
 },
 "computeB": {
  "!type": "fn() -> number",
  "!doc": "Computes the RHS of the SPOOK equation"
 },
 "computeGq": {
  "!type": "fn() -> number",
  "!doc": "Computes G\\*q, where q are the generalized body coordinates"
 },
 "computeGW": {
  "!type": "fn() -> number",
  "!doc": "Computes G\\*W, where W are the body velocities"
 },
 "computeGWlambda": {
  "!type": "fn() -> number",
  "!doc": "Computes G\\*Wlambda, where W are the body velocities"
 },
 "computeGiMf": {
  "!type": "fn() -> number",
  "!doc": "Computes G\\*inv(M)\\*f, where M is the mass matrix with diagonal blocks for each body, and f are the forces on the bodies."
 },
 "computeGiMGt": {
  "!type": "fn() -> number",
  "!doc": "Computes G\\*inv(M)\\*G'"
 },
 "addToWlambda": {
  "!type": "fn(deltalambda: number)",
  "!doc": "Add constraint velocity to the bodies."
 },
 "computeInvC": {
  "!type": "fn(eps: number) -> number",
  "!doc": "Compute the denominator part of the SPOOK equation: C = G\\*inv(M)\\*G' + eps"
 },
 "FrictionEquation": {
  "prototype": {
   "contactPointA": {
    "!type": "[?]"
   },
   "contactPointB": {
    "!type": "[?]"
   },
   "t": {
    "!type": "[?]"
   },
   "contactEquations": {
    "!type": "+ContactEquation"
   },
   "shapeA": {
    "!type": "+Shape"
   },
   "shapeB": {
    "!type": "+Shape"
   },
   "frictionCoefficient": {
    "!type": "number"
   }
  }
 },
 "setSlipForce": {
  "!type": "fn(slipForce: number)",
  "!doc": "Set the slipping condition for the constraint. The friction force cannot be\nlarger than this value."
 },
 "getSlipForce": {
  "!type": "fn() -> number",
  "!doc": "Get the max force for the constraint."
 },
 "RotationalLockEquation": {
  "prototype": {
   "angle": {
    "!type": "number"
   }
  }
 },
 "on": {
  "!type": "fn(eventName: string, callback: +Functon)",
  "!doc": "Register a new EventListener for the given event."
 },
 "has": {
  "!type": "fn(type: string, listener: fn()) -> bool",
  "!doc": "Check if an event listener is added"
 },
 "off": {
  "!type": "fn(eventName: string, callback: fn())",
  "!doc": "Remove event listeners."
 },
 "emit": {
  "!type": "fn(eventName: string) -> bool",
  "!doc": "Emit an event to all registered event listeners."
 },
 "ContactMaterial": {
  "prototype": {
   "id": {
    "!type": "number"
   },
   "materialA": {
    "!type": "+Material"
   },
   "materialB": {
    "!type": "+Material"
   },
   "friction": {
    "!type": "number"
   },
   "restitution": {
    "!type": "number"
   },
   "stiffness": {
    "!type": "number"
   },
   "relaxation": {
    "!type": "number"
   },
   "frictionStiffness": {
    "!type": "number"
   },
   "frictionRelaxation": {
    "!type": "number"
   },
   "surfaceVelocity": {
    "!type": "number"
   },
   "contactSkinSize": {
    "!type": "number"
   }
  }
 },
 "Material": {
  "prototype": {
   "id": {
    "!type": "number"
   }
  }
 },
 "crossLength": {
  "!type": "fn(a: [?], b: [?]) -> number",
  "!doc": "Make a cross product and only return the z component"
 },
 "crossVZ": {
  "!type": "fn(out: [?], vec: [?], zcomp: number) -> number",
  "!doc": "Cross product between a vector and the Z component of a vector"
 },
 "crossZV": {
  "!type": "fn(out: [?], zcomp: number, vec: [?]) -> number",
  "!doc": "Cross product between a vector and the Z component of a vector"
 },
 "rotate": {
  "!type": "fn(out: [?], a: [?], angle: number)",
  "!doc": "Rotate a vector by an angle"
 },
 "rotate90cw": {
  "!type": "fn(out: [?], a: [?], angle: number)",
  "!doc": "Rotate a vector 90 degrees clockwise"
 },
 "toLocalFrame": {
  "!type": "fn(out: [?], worldPoint: [?])",
  "!doc": "Transform a world point to local body frame."
 },
 "toGlobalFrame": {
  "!type": "fn(out: [?], localVector: [?], frameAngle: number)",
  "!doc": "Transform a point position to global frame."
 },
 "vectorToLocalFrame": {
  "!type": "fn(out: [?], worldVector: [?])",
  "!doc": "Transform a world point to local body frame."
 },
 "centroid": {
  "!type": "fn(out: [?], a: [?], b: [?], c: [?]) -> [?]",
  "!doc": "Compute centroid of a triangle spanned by vectors a,b,c. See http://easycalculation.com/analytical/learn-centroid.php"
 },
 "create": {
  "!type": "fn(parent: +any, width: number, height: number) -> +HTMLCanvasElement",
  "!doc": "Creates a new Canvas DOM element, or pulls one from the pool if free."
 },
 "clone": {
  "!type": "fn(a: [?]) -> [?]",
  "!doc": "Creates a new vec2 initialized with values from an existing vector"
 },
 "fromValues": {
  "!type": "fn(x: number, y: number) -> [?]",
  "!doc": "Creates a new vec2 initialized with the given values"
 },
 "set": {
  "!type": "fn(i: number, j: number, value: number)",
  "!doc": "Set a value."
 },
 "add": {
  "!type": "fn(out: [?], a: [?], b: [?]) -> [?]",
  "!doc": "Adds two vec2's"
 },
 "subtract": {
  "!type": "fn(out: [?], a: [?], b: [?]) -> [?]",
  "!doc": "Subtracts two vec2's"
 },
 "sub": {
  "!type": "fn()",
  "!doc": "Alias for vec2.subtract"
 },
 "multiply": {
  "!type": "fn(out: [?], a: [?], b: [?]) -> [?]",
  "!doc": "Multiplies two vec2's"
 },
 "mul": {
  "!type": "fn()",
  "!doc": "Alias for vec2.multiply"
 },
 "divide": {
  "!type": "fn(out: [?], a: [?], b: [?]) -> [?]",
  "!doc": "Divides two vec2's"
 },
 "div": {
  "!type": "fn()",
  "!doc": "Alias for vec2.divide"
 },
 "scale": {
  "!type": "fn(out: [?], a: [?], b: number) -> [?]",
  "!doc": "Scales a vec2 by a scalar number"
 },
 "distance": {
  "!type": "fn(a: [?], b: [?]) -> number",
  "!doc": "Calculates the euclidian distance between two vec2's"
 },
 "dist": {
  "!type": "fn()",
  "!doc": "Alias for vec2.distance"
 },
 "squaredDistance": {
  "!type": "fn(a: [?], b: [?]) -> number",
  "!doc": "Calculates the squared euclidian distance between two vec2's"
 },
 "sqrDist": {
  "!type": "fn()",
  "!doc": "Alias for vec2.squaredDistance"
 },
 "length": {
  "!type": "fn(a: [?]) -> number",
  "!doc": "Calculates the length of a vec2"
 },
 "len": {
  "!type": "fn()",
  "!doc": "Alias for vec2.length"
 },
 "squaredLength": {
  "!type": "fn(a: [?]) -> number",
  "!doc": "Calculates the squared length of a vec2"
 },
 "sqrLen": {
  "!type": "fn()",
  "!doc": "Alias for vec2.squaredLength"
 },
 "negate": {
  "!type": "fn(out: [?], a: [?]) -> [?]",
  "!doc": "Negates the components of a vec2"
 },
 "normalize": {
  "!type": "fn(out: [?], a: [?]) -> [?]",
  "!doc": "Normalize a vec2"
 },
 "dot": {
  "!type": "fn(a: [?], b: [?]) -> number",
  "!doc": "Calculates the dot product of two vec2's"
 },
 "str": {
  "!type": "fn(vec: [?]) -> string",
  "!doc": "Returns a string representation of a vector"
 },
 "lerp": {
  "!type": "fn(out: [?], a: [?], b: [?], t: number)",
  "!doc": "Linearly interpolate/mix two vectors."
 },
 "reflect": {
  "!type": "fn(out: [?], vector: [?], normal: [?])",
  "!doc": "Reflect a vector along a normal."
 },
 "getLineSegmentsIntersection": {
  "!type": "fn(out: [?], p0: [?], p1: [?], p2: [?], p3: [?]) -> bool",
  "!doc": "Get the intersection point between two line segments."
 },
 "getLineSegmentsIntersectionFraction": {
  "!type": "fn(p0: [?], p1: [?], p2: [?], p3: [?]) -> number",
  "!doc": "Get the intersection fraction between two line segments. If successful, the intersection is at p0 + t * (p1 - p0)"
 },
 "Body": {
  "prototype": {
   "id": {
    "!type": "number"
   },
   "world": {
    "!type": "+World"
   },
   "shapes": {
    "!type": "[?]"
   },
   "mass": {
    "!type": "number"
   },
   "invMass": {
    "!type": "number"
   },
   "inertia": {
    "!type": "number"
   },
   "invInertia": {
    "!type": "number"
   },
   "fixedRotation": {
    "!type": "bool"
   },
   "fixedX": {
    "!type": "bool"
   },
   "fixedY": {
    "!type": "bool"
   },
   "position": {
    "!type": "[?]"
   },
   "interpolatedPosition": {
    "!type": "[?]"
   },
   "interpolatedAngle": {
    "!type": "number"
   },
   "previousPosition": {
    "!type": "[?]"
   },
   "previousAngle": {
    "!type": "number"
   },
   "velocity": {
    "!type": "[?]"
   },
   "vlambda": {
    "!type": "[?]"
   },
   "wlambda": {
    "!type": "[?]"
   },
   "angle": {
    "!type": "number"
   },
   "angularVelocity": {
    "!type": "number"
   },
   "force": {
    "!type": "[?]"
   },
   "angularForce": {
    "!type": "number"
   },
   "damping": {
    "!type": "number"
   },
   "angularDamping": {
    "!type": "number"
   },
   "type": {
    "!type": "number"
   },
   "boundingRadius": {
    "!type": "number"
   },
   "aabb": {
    "!type": "+AABB"
   },
   "aabbNeedsUpdate": {
    "!type": "bool"
   },
   "allowSleep": {
    "!type": "bool"
   },
   "sleepState": {
    "!type": "number"
   },
   "sleepSpeedLimit": {
    "!type": "number"
   },
   "sleepTimeLimit": {
    "!type": "number"
   },
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
  "DYNAMIC": {
   "!type": "number"
  },
  "STATIC": {
   "!type": "number"
  },
  "KINEMATIC": {
   "!type": "number"
  },
  "AWAKE": {
   "!type": "number"
  },
  "SLEEPY": {
   "!type": "number"
  },
  "SLEEPING": {
   "!type": "number"
  }
 },
 "setDensity": {
  "!type": "fn(density: number)",
  "!doc": "Set the total density of the body"
 },
 "getArea": {
  "!type": "fn() -> number",
  "!doc": "Get the total area of all shapes in the body"
 },
 "updateAABB": {
  "!type": "fn()",
  "!doc": "Updates the AABB of the Body, and set .aabbNeedsUpdate = false."
 },
 "updateBoundingRadius": {
  "!type": "fn() -> number",
  "!doc": "Returns the bounding circle radius of this shape."
 },
 "addShape": {
  "!type": "fn(shape: +Shape, offset: [?], angle: number)",
  "!doc": "Add a shape to the body. You can pass a local transform when adding a shape,\nso that the shape gets an offset and angle relative to the body center of mass.\nWill automatically update the mass properties and bounding radius."
 },
 "removeShape": {
  "!type": "fn(shape: +Shape) -> bool",
  "!doc": "Remove a shape"
 },
 "updateMassProperties": {
  "!type": "fn()",
  "!doc": "Updates .inertia, .invMass, .invInertia for this Body. Should be called when\nchanging the structure or mass of the Body."
 },
 "applyForce": {
  "!type": "fn()",
  "!doc": "Apply the spring force to the connected bodies."
 },
 "applyForceLocal": {
  "!type": "fn(localForce: [?], localPoint: [?])",
  "!doc": "Apply force to a body-local point."
 },
 "applyImpulse": {
  "!type": "fn(impulse: [?], relativePoint: [?])",
  "!doc": "Apply impulse to a point relative to the body. This could for example be a point on the Body surface. An impulse is a force added to a body during a short period of time (impulse = force * time). Impulses will be added to Body.velocity and Body.angularVelocity."
 },
 "applyImpulseLocal": {
  "!type": "fn(impulse: [?], relativePoint: [?])",
  "!doc": "Apply impulse to a point relative to the body. This could for example be a point on the Body surface. An impulse is a force added to a body during a short period of time (impulse = force * time). Impulses will be added to Body.velocity and Body.angularVelocity."
 },
 "toWorldFrame": {
  "!type": "fn(out: [?], localPoint: [?])",
  "!doc": "Transform a local point to world frame."
 },
 "vectorToWorldFrame": {
  "!type": "fn(out: [?], localVector: [?])",
  "!doc": "Transform a local point to world frame."
 },
 "fromPolygon": {
  "!type": "fn(path: [?], options: ?) -> bool",
  "!doc": "Reads a polygon shape path, and assembles convex shapes from that and puts them at proper offset points."
 },
 "adjustCenterOfMass": {
  "!type": "fn()",
  "!doc": "Moves the shape offsets so their center of mass becomes the body center of mass."
 },
 "setZeroForce": {
  "!type": "fn()",
  "!doc": "Sets the force on the body to zero."
 },
 "applyDamping": {
  "!type": "fn(dt: number)",
  "!doc": "Apply damping, see <a href=\"http://code.google.com/p/bullet/issues/detail?id=74\">this</a> for details."
 },
 "wakeUp": {
  "!type": "fn()",
  "!doc": "Wake the body up. Normally you should not need this, as the body is automatically awoken at events such as collisions.\nSets the sleepState to {{#crossLink \"Body/AWAKE:property\"}}Body.AWAKE{{/crossLink}} and emits the wakeUp event if the body wasn't awake before."
 },
 "sleep": {
  "!type": "fn()",
  "!doc": "Make all bodies in the island sleep."
 },
 "sleepTick": {
  "!type": "fn(time: number, dontSleep: bool, dt: number)",
  "!doc": "Called every timestep to update internal sleep timer and change sleep state if needed."
 },
 "integrate": {
  "!type": "fn(dt: number)",
  "!doc": "Move the body forward in time given its current velocity."
 },
 "getVelocityAtPoint": {
  "!type": "fn(result: [?], relativePoint: [?]) -> [?]",
  "!doc": "Get velocity of a point in the body."
 },
 "sleepy": {},
 "wakeup": {},
 "LinearSpring": {
  "prototype": {
   "localAnchorA": {
    "!type": "[?]"
   },
   "localAnchorB": {
    "!type": "[?]"
   },
   "restLength": {
    "!type": "number"
   }
  }
 },
 "setWorldAnchorA": {
  "!type": "fn(worldAnchorA: [?])",
  "!doc": "Set the anchor point on body A, using world coordinates."
 },
 "setWorldAnchorB": {
  "!type": "fn(worldAnchorB: [?])",
  "!doc": "Set the anchor point on body B, using world coordinates."
 },
 "getWorldAnchorA": {
  "!type": "fn(result: [?])",
  "!doc": "Get the anchor point on body A, in world coordinates."
 },
 "getWorldAnchorB": {
  "!type": "fn(result: [?])",
  "!doc": "Get the anchor point on body B, in world coordinates."
 },
 "RotationalSpring": {
  "prototype": {
   "restAngle": {
    "!type": "number"
   }
  }
 },
 "Spring": {
  "prototype": {
   "stiffness": {
    "!type": "number"
   },
   "damping": {
    "!type": "number"
   },
   "bodyA": {
    "!type": "+Body"
   },
   "bodyB": {
    "!type": "+Body"
   }
  }
 },
 "TopDownVehicle": {
  "prototype": {
   "chassisBody": {
    "!type": "+Body"
   },
   "wheels": {
    "!type": "[?]"
   }
  }
 },
 "addToWorld": {
  "!type": "fn(world: +World)"
 },
 "removeFromWorld": {
  "!type": "fn(world: +World)"
 },
 "addWheel": {
  "!type": "fn(wheelOptions: ?) -> +WheelConstraint"
 },
 "WheelConstraint": {
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
 "setForwardFriction": {
  "!type": "fn()"
 },
 "setSideFriction": {
  "!type": "fn()"
 },
 "getSpeed": {
  "!type": "fn()"
 },
 "computeMomentOfInertia": {
  "!type": "fn(mass: number) -> number",
  "!doc": "Should return the moment of inertia around the Z axis of the body given the total mass. See <a href=\"http://en.wikipedia.org/wiki/List_of_moments_of_inertia\">Wikipedia's list of moments of inertia</a>."
 },
 "computeAABB": {
  "!type": "fn(out: +AABB, position: [?], angle: number)",
  "!doc": "Compute the world axis-aligned bounding box (AABB) of this shape."
 },
 "Capsule": {
  "prototype": {
   "length": {
    "!type": "number"
   },
   "radius": {
    "!type": "number"
   }
  }
 },
 "conputeMomentOfInertia": {
  "!type": "fn(mass: number) -> number",
  "!doc": "Compute the mass moment of inertia of the Capsule."
 },
 "updateArea": {
  "!type": "fn()",
  "!doc": "Update the .area property of the shape."
 },
 "raycast": {
  "!type": "fn(result: +RaycastResult, ray: +Ray) -> bool",
  "!doc": "Ray cast against all bodies in the world."
 },
 "Circle": {
  "prototype": {
   "radius": {
    "!type": "number"
   }
  }
 },
 "Convex": {
  "prototype": {
   "vertices": {
    "!type": "[?]"
   },
   "axes": {
    "!type": "[?]"
   },
   "centerOfMass": {
    "!type": "[?]"
   },
   "triangles": {
    "!type": "[?]"
   },
   "boundingRadius": {
    "!type": "number"
   }
  }
 },
 "projectOntoAxis": {
  "!type": "fn(offset: [?], localAxis: [?], result: [?])",
  "!doc": "Project a Convex onto a world-oriented axis"
 },
 "updateTriangles": {
  "!type": "fn()",
  "!doc": "Update the .triangles property"
 },
 "updateCenterOfMass": {
  "!type": "fn()",
  "!doc": "Update the .centerOfMass property."
 },
 "triangleArea": {
  "!type": "fn(a: [?], b: [?], c: [?]) -> number",
  "!doc": "Get the area of the triangle spanned by the three points a, b, c. The area is positive if the points are given in counter-clockwise order, otherwise negative."
 },
 "Heightfield": {
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
 "updateMaxMinValues": {
  "!type": "fn()",
  "!doc": "Update the .minValue and the .maxValue"
 },
 "getLineSegment": {
  "!type": "fn(start: +array, end: +array, i: number)",
  "!doc": "Get a line segment in the heightfield"
 },
 "Shape": {
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
   "id": {
    "!type": "number"
   },
   "boundingRadius": {
    "!type": "number"
   },
   "collisionGroup": {
    "!type": "number"
   },
   "collisionResponse": {
    "!type": "bool"
   },
   "collisionMask": {
    "!type": "number"
   },
   "material": {
    "!type": "+Material"
   },
   "area": {
    "!type": "number"
   },
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
 "GSSolver": {
  "prototype": {
   "iterations": {
    "!type": "number"
   },
   "tolerance": {
    "!type": "number"
   },
   "useZeroRHS": {
    "!type": "bool"
   },
   "frictionIterations": {
    "!type": "number"
   },
   "usedIterations": {
    "!type": "number"
   }
  }
 },
 "solve": {
  "!type": "fn(dt: number, world: +World)",
  "!doc": "Method to be implemented in each subclass"
 },
 "Solver": {
  "prototype": {
   "equations": {
    "!type": "[?]"
   },
   "equationSortFunction": {
    "!type": "bool|fn()"
   }
  }
 },
 "solveIsland": {
  "!type": "fn(dt: number, island: +Island)",
  "!doc": "Solves all constraints in an island."
 },
 "sortEquations": {
  "!type": "fn()",
  "!doc": "Sort all equations using the .equationSortFunction. Should be called by subclasses before solving."
 },
 "addEquation": {
  "!type": "fn(eq: +Equation)",
  "!doc": "Add an equation to be solved."
 },
 "addEquations": {
  "!type": "fn(eqs: [?])",
  "!doc": "Add equations. Same as .addEquation, but this time the argument is an array of Equations"
 },
 "removeEquation": {
  "!type": "fn(eq: +Equation)",
  "!doc": "Remove an equation."
 },
 "removeAllEquations": {
  "!type": "fn()",
  "!doc": "Remove all currently added equations."
 },
 "destroy": {
  "!type": "fn(destroyBase: bool)",
  "!doc": "Destroys this texture"
 },
 "tick": {
  "!type": "fn()",
  "!doc": "Ticks one step forward in time. This will move the current overlap state to the \"old\" overlap state, and create a new one as current."
 },
 "setOverlapping": {
  "!type": "fn(bodyA: +Body, shapeA: +Body, bodyB: +Body, shapeB: +Body)"
 },
 "bodiesAreOverlapping": {
  "!type": "fn(bodyA: +Body, bodyB: +Body) -> bool",
  "!doc": "Checks if two bodies are currently overlapping."
 },
 "OverlapKeeperRecord": {
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
 "Pool": {
  "prototype": {
   "objects": {
    "!type": "[?]"
   }
  }
 },
 "resize": {
  "!type": "fn(width: number, height: number, updateBase: bool)",
  "!doc": "Resizes the RenderTexture."
 },
 "get": {
  "!type": "fn(i: number, j: number) -> number",
  "!doc": "Get an object from the pool or create a new instance."
 },
 "release": {
  "!type": "fn(object: ?) -> +Pool",
  "!doc": "Clean up and put the object back into the pool for later use."
 },
 "TupleDictionary": {
  "prototype": {
   "data": {
    "!type": "?"
   },
   "keys": {
    "!type": "[?]"
   }
  }
 },
 "getKey": {
  "!type": "fn(i: number, j: number) -> string",
  "!doc": "Generate a key given two integers"
 },
 "getByKey": {
  "!type": "fn(key: number) -> ?"
 },
 "appendArray": {
  "!type": "fn(a: [?], b: [?])",
  "!doc": "Append the values in array b to the array a. See <a href=\"http://stackoverflow.com/questions/1374126/how-to-append-an-array-to-an-existing-javascript-array/1374131#1374131\">this</a> for an explanation."
 },
 "splice": {
  "!type": "fn(array: [?], index: number, howmany: number)",
  "!doc": "Garbage free Array.splice(). Does not allocate a new array."
 },
 "defaults": {
  "!type": "fn(options: ?, defaults: ?) -> ?",
  "!doc": "Extend an options object with default values."
 },
 "Island": {
  "prototype": {
   "equations": {
    "!type": "[?]"
   },
   "bodies": {
    "!type": "[?]"
   }
  }
 },
 "getBodies": {
  "!type": "fn() -> [?]",
  "!doc": "Get all unique bodies in this island."
 },
 "wantsToSleep": {
  "!type": "fn() -> bool",
  "!doc": "Check if the entire island wants to sleep."
 },
 "IslandManager": {
  "prototype": {
   "nodePool": {
    "!type": "+IslandNodePool"
   },
   "islandPool": {
    "!type": "+IslandPool"
   },
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
 "getUnvisitedNode": {
  "!type": "fn(nodes: [?]) -> +IslandNode|bool",
  "!doc": "Get an unvisited node from a list of nodes."
 },
 "visit": {
  "!type": "fn(node: +IslandNode, bds: [?], eqs: [?])",
  "!doc": "Visit a node."
 },
 "bfs": {
  "!type": "fn(root: +IslandNode, bds: [?], eqs: [?])",
  "!doc": "Runs the search algorithm, starting at a root node. The resulting bodies and equations will be stored in the provided arrays."
 },
 "split": {
  "!type": "fn(world: +World) -> [?]",
  "!doc": "Split the world into independent islands. The result is stored in .islands."
 },
 "IslandNode": {
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
   "visited": {
    "!type": "bool"
   }
  }
 },
 "World": {
  "prototype": {
   "springs": {
    "!type": "[?]"
   },
   "bodies": {
    "!type": "[?]"
   },
   "solver": {
    "!type": "+Solver"
   },
   "narrowphase": {
    "!type": "+Narrowphase"
   },
   "islandManager": {
    "!type": "+IslandManager"
   },
   "gravity": {
    "!type": "[?]"
   },
   "frictionGravity": {
    "!type": "number"
   },
   "useWorldGravityAsFrictionGravity": {
    "!type": "bool"
   },
   "useFrictionGravityOnZeroGravity": {
    "!type": "bool"
   },
   "broadphase": {
    "!type": "+Broadphase"
   },
   "constraints": {
    "!type": "[?]"
   },
   "defaultMaterial": {
    "!type": "+Material"
   },
   "defaultContactMaterial": {
    "!type": "+ContactMaterial"
   },
   "lastTimeStep": {
    "!type": "number"
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
   "contactMaterials": {
    "!type": "[?]"
   },
   "time": {
    "!type": "number"
   },
   "stepping": {
    "!type": "bool"
   },
   "islandSplit": {
    "!type": "bool"
   },
   "emitImpactEvent": {
    "!type": "bool"
   },
   "sleepMode": {
    "!type": "number"
   },
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
 "postStep": {
  "!doc": "Fired after the step()."
 },
 "addBody": {
  "!doc": "Add a body to the simulation",
  "!type": "fn(body: +Body)"
 },
 "removeBody": {
  "!doc": "Remove a body from the simulation. If this method is called during step(), the body removal is scheduled to after the step.",
  "!type": "fn(body: +Body)"
 },
 "addSpring": {
  "!doc": "Add a spring to the simulation",
  "!type": "fn(spring: +Spring)"
 },
 "impact": {
  "!doc": "Fired when a first contact is created between two bodies. This event is fired after the step has been done."
 },
 "postBroadphase": {
  "!doc": "Fired after the Broadphase has collected collision pairs in the world.\nInside the event handler, you can modify the pairs array as you like, to\nprevent collisions between objects that you don't want."
 },
 "beginContact": {
  "!doc": "Fired when two shapes starts start to overlap. Fired in the narrowphase, during step."
 },
 "endContact": {
  "!doc": "Fired when two shapes stop overlapping, after the narrowphase (during step)."
 },
 "preSolve": {
  "!doc": "Fired just before equations are added to the solver to be solved. Can be used to control what equations goes into the solver."
 },
 "addConstraint": {
  "!type": "fn(constraint: +Constraint)",
  "!doc": "Add a constraint to the simulation."
 },
 "addContactMaterial": {
  "!type": "fn(contactMaterial: +ContactMaterial)",
  "!doc": "Add a ContactMaterial to the simulation."
 },
 "removeContactMaterial": {
  "!type": "fn(cm: +ContactMaterial)",
  "!doc": "Removes a contact material"
 },
 "getContactMaterial": {
  "!type": "fn(materialA: +Material, materialB: +Material) -> +ContactMaterial",
  "!doc": "Get a contact material given two materials"
 },
 "removeConstraint": {
  "!type": "fn(constraint: +Constraint)",
  "!doc": "Removes a constraint"
 },
 "step": {
  "!type": "fn(dt: number, timeSinceLastCalled: number, maxSubSteps: number)",
  "!doc": "Step the physics world forward in time.\n\nThere are two modes. The simple mode is fixed timestepping without interpolation. In this case you only use the first argument. The second case uses interpolation. In that you also provide the time since the function was last used, as well as the maximum fixed timesteps to take."
 },
 "runNarrowphase": {
  "!type": "fn(np: +Narrowphase, bi: +Body, si: +Shape, xi: [?], ai: number, bj: +Body, sj: +Shape, xj: [?], aj: number, mu: number)",
  "!doc": "Runs narrowphase for the shape pair i and j."
 },
 "removeSpring": {
  "!type": "fn(spring: +Spring)",
  "!doc": "Remove a spring"
 },
 "getBodyById": {
  "!type": "fn(id: number) -> +Body",
  "!doc": "Get a body by its id."
 },
 "disableBodyCollision": {
  "!type": "fn(bodyA: +Body, bodyB: +Body)",
  "!doc": "Disable collision between two bodies"
 },
 "enableBodyCollision": {
  "!type": "fn(bodyA: +Body, bodyB: +Body)",
  "!doc": "Enable collisions between the given two bodies"
 },
 "hitTest": {
  "!type": "fn(worldPoint: [?], bodies: [?], precision: number) -> [?]",
  "!doc": "Test if a world point overlaps bodies"
 },
 "setGlobalStiffness": {
  "!type": "fn(stiffness: number)",
  "!doc": "Set the stiffness for all equations and contact materials."
 },
 "setGlobalRelaxation": {
  "!type": "fn(relaxation: number)",
  "!doc": "Set the relaxation for all equations and contact materials."
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
   "!doc": "The base class for all objects that are rendered on the screen.\nThis is an abstract class and should not be used on its own rather it should be extended.",
   "prototype": {
    "position": {
     "!type": "+Phaser.Point"
    },
    "scale": {
     "!type": "+Phaser.Point"
    },
    "transformCallback": {
     "!type": "fn()"
    },
    "transformCallbackContext": {
     "!type": "?"
    },
    "pivot": {
     "!type": "+Phaser.Point"
    },
    "rotation": {
     "!type": "number"
    },
    "alpha": {
     "!type": "number"
    },
    "visible": {
     "!type": "bool"
    },
    "hitArea": {
     "!type": "+Rectangle|+Circle|+Ellipse|+Polygon"
    },
    "renderable": {
     "!type": "bool"
    },
    "parent": {
     "!type": "+DisplayObjectContainer"
    },
    "stage": {
     "!type": "+Stage"
    },
    "worldAlpha": {
     "!type": "number"
    },
    "worldPosition": {
     "!type": "+Phaser.Point"
    },
    "worldScale": {
     "!type": "+Phaser.Point"
    },
    "worldRotation": {
     "!type": "number"
    },
    "filterArea": {
     "!type": "+Rectangle"
    }
   }
  },
  "DisplayObjectContainer": {
   "!type": "fn()",
   "!doc": "A DisplayObjectContainer represents a collection of display objects.\nIt is the base class of all display objects that act as a container for other objects.",
   "prototype": {
    "children": {
     "!type": "[?]"
    }
   }
  },
  "Sprite": {
   "!type": "fn(texture: +Texture)",
   "!doc": "The Sprite object is the base for all textured objects that are rendered to the screen",
   "prototype": {
    "anchor": {
     "!type": "+Phaser.Point"
    },
    "texture": {
     "!type": "+Texture"
    },
    "tint": {
     "!type": "number"
    },
    "tintedTexture": {
     "!type": "+Canvas"
    },
    "blendMode": {
     "!type": "number"
    },
    "shader": {
     "!type": "+AbstractFilter"
    }
   }
  },
  "SpriteBatch": {
   "!type": "fn(texture: +Texture)",
   "!doc": "The SpriteBatch class is a really fast version of the DisplayObjectContainer \nbuilt solely for speed, so use when you need a lot of sprites or particles.\nAnd it's extremely easy to use : \n\n    var container = new PIXI.SpriteBatch();\n \n    stage.addChild(container);\n \n    for(var i  = 0; i < 100; i++)\n    {\n        var sprite = new PIXI.Sprite.fromImage(\"myImage.png\");\n        container.addChild(sprite);\n    }\nAnd here you have a hundred sprites that will be renderer at the speed of light"
  },
  "Stage": {
   "!type": "fn(backgroundColor: number)",
   "!doc": "A Stage represents the root of the display tree. Everything connected to the stage is rendered"
  },
  "Rope": {
   "!type": "fn(texture: +Texture, points: [?])"
  },
  "Strip": {
   "!type": "fn(texture: +Texture, width: number, height: number)",
   "prototype": {
    "texture": {
     "!type": "+Texture"
    },
    "dirty": {
     "!type": "bool"
    },
    "blendMode": {
     "!type": "number"
    },
    "canvasPadding": {
     "!type": "number"
    }
   },
   "DrawModes": {
    "!type": "?",
    "!doc": "Different drawing buffer modes supported"
   }
  },
  "TilingSprite": {
   "!type": "fn(texture: +Texture, width: number, height: number)",
   "!doc": "A tiling sprite is a fast way of rendering a tiling image",
   "prototype": {
    "_width": {
     "!type": "number"
    },
    "_height": {
     "!type": "number"
    },
    "tileScale": {
     "!type": "+Phaser.Point"
    },
    "tileScaleOffset": {
     "!type": "+Phaser.Point"
    },
    "tilePosition": {
     "!type": "+Phaser.Point"
    },
    "renderable": {
     "!type": "bool"
    },
    "tint": {
     "!type": "number"
    },
    "textureDebug": {
     "!type": "bool"
    },
    "blendMode": {
     "!type": "number"
    },
    "canvasBuffer": {
     "!type": "+PIXI.CanvasBuffer"
    },
    "tilingTexture": {
     "!type": "+PIXI.Texture"
    },
    "tilePattern": {
     "!type": "+PIXI.Texture"
    },
    "refreshTexture": {
     "!type": "bool"
    }
   }
  },
  "AbstractFilter": {
   "!type": "fn(fragmentSrc: [?], uniforms: ?)",
   "!doc": "This is the base class for creating a PIXI filter. Currently only webGL supports filters.\nIf you want to make a custom filter this should be your base class.",
   "prototype": {
    "dirty": {
     "!type": "bool"
    },
    "padding": {
     "!type": "number"
    }
   }
  },
  "!doc": "The [pixi.js](http://www.pixijs.com/) module/namespace.",
  "GraphicsData": {
   "!type": "fn(lineWidth: number, lineColor: number, lineAlpha: number, fillColor: number, fillAlpha: number, fill: bool, shape: +Circle|+Rectangle|+Ellipse|+Line|+Polygon)",
   "!doc": "A GraphicsData object."
  }
 },
 "getBounds": {
  "!type": "fn() -> +Rectangle",
  "!doc": "Retrieves the bounds of the graphic shape as a rectangle object"
 },
 "getLocalBounds": {
  "!type": "fn() -> +Rectangle",
  "!doc": "Retrieves the non-global local bounds of the displayObjectContainer as a rectangle. The calculation takes all visible children into consideration."
 },
 "setStageReference": {
  "!type": "fn(stage: +Stage)",
  "!doc": "Sets the containers Stage reference. This is the Stage that this object, and all of its children, is connected to."
 },
 "preUpdate": {
  "!type": "fn()",
  "!doc": "Empty, to be overridden by classes that require it."
 },
 "generateTexture": {
  "!type": "fn(resolution: number, scaleMode: number) -> +Texture",
  "!doc": "Useful function that returns a texture of the graphics object that can then be used to create sprites\nThis can be quite useful if your geometry is complicated and needs to be reused multiple times."
 },
 "updateCache": {
  "!type": "fn()",
  "!doc": "Generates and updates the cached sprite for this object."
 },
 "toGlobal": {
  "!type": "fn(position: +Phaser.Point) -> +Phaser.Point",
  "!doc": "Calculates the global position of the display object"
 },
 "toLocal": {
  "!type": "fn(position: +Phaser.Point, from: +DisplayObject) -> +Phaser.Point",
  "!doc": "Calculates the local position of the display object relative to another point"
 },
 "addChild": {
  "!type": "fn(child: +DisplayObject) -> +DisplayObject",
  "!doc": "Adds a child to the container."
 },
 "addChildAt": {
  "!type": "fn(child: +DisplayObject, index: number) -> +DisplayObject",
  "!doc": "Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown"
 },
 "swapChildren": {
  "!type": "fn(child: +DisplayObject, child2: +DisplayObject)",
  "!doc": "Swaps the position of 2 Display Objects within this container."
 },
 "getChildIndex": {
  "!type": "fn(child: +DisplayObject) -> number",
  "!doc": "Returns the index position of a child DisplayObject instance"
 },
 "setChildIndex": {
  "!type": "fn(child: +DisplayObject, index: number)",
  "!doc": "Changes the position of an existing child in the display object container"
 },
 "getChildAt": {
  "!type": "fn(index: number) -> +DisplayObject",
  "!doc": "Returns the child at the specified index"
 },
 "removeChild": {
  "!type": "fn(child: +DisplayObject) -> +DisplayObject",
  "!doc": "Removes a child from the container."
 },
 "removeChildAt": {
  "!type": "fn(index: number) -> +DisplayObject",
  "!doc": "Removes a child from the specified index position."
 },
 "removeChildren": {
  "!type": "fn(beginIndex: number, endIndex: number)",
  "!doc": "Removes all children from this container that are within the begin and end indexes."
 },
 "removeStageReference": {
  "!type": "fn()",
  "!doc": "Removes the current stage reference from the container and all of its children."
 },
 "setTexture": {
  "!type": "fn(texture: +Texture, destroy: bool)",
  "!doc": "Sets the texture of the sprite. Be warned that this doesn't remove or destroy the previous\ntexture this Sprite was using."
 },
 "fromFrame": {
  "!type": "fn(frameId: string) -> ?",
  "!doc": "Helper function that returns a Texture objected based on the given frame id.\nIf the frame id is not in the texture cache an error will be thrown."
 },
 "fromImage": {
  "!type": "fn(imageUrl: string, crossorigin: bool, scaleMode: number) -> ?",
  "!doc": "Helper function that creates a Texture object from the given image url.\nIf the image is not in the texture cache it will be  created and loaded."
 },
 "setBackgroundColor": {
  "!type": "fn(backgroundColor: number)",
  "!doc": "Sets the background color for the stage"
 },
 "generateTilingTexture": {
  "!type": "fn(forcePowerOfTwo: bool)"
 },
 "syncUniforms": {
  "!type": "fn()",
  "!doc": "Updates the shader uniform values."
 },
 "module:PIXI": {
  "PIXI": {
   "!type": "fn()",
   "!doc": "Namespace-class for [pixi.js](http://www.pixijs.com/).\n\nContains assorted static properties and enumerations."
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
  "defaultRenderOptions": {
   "!type": "?"
  },
  "Graphics": {
   "!type": "fn()",
   "!doc": "The Graphics class contains methods used to draw primitive shapes such as lines, circles and rectangles to the display, and color and fill them.",
   "prototype": {
    "fillAlpha": {
     "!type": "number"
    },
    "lineWidth": {
     "!type": "number"
    },
    "lineColor": {
     "!type": "string"
    },
    "tint": {
     "!type": "number"
    },
    "blendMode": {
     "!type": "number"
    },
    "isMask": {
     "!type": "bool"
    },
    "boundsPadding": {
     "!type": "number"
    }
   }
  },
  "Graphics#containsPoint": {
   "!type": "fn(point: +Phaser.Point) -> bool",
   "!doc": "Tests if a point is inside this graphics object"
  },
  "GraphicsData#clone": {
   "!type": "fn() -> +GraphicsData",
   "!doc": "Creates a new GraphicsData object with the same values as this one."
  },
  "CanvasRenderer": {
   "!type": "fn(width: number, height: number, options: ?)",
   "!doc": "The CanvasRenderer draws the Stage and all its content onto a 2d canvas. This renderer should be used for browsers that do not support webGL.\nDon't forget to add the CanvasRenderer.view to your DOM or you will not see anything :)",
   "prototype": {
    "type": {
     "!type": "number"
    },
    "resolution": {
     "!type": "number"
    },
    "clearBeforeRender": {
     "!type": "bool"
    },
    "transparent": {
     "!type": "bool"
    },
    "autoResize": {
     "!type": "bool"
    },
    "width": {
     "!type": "number"
    },
    "height": {
     "!type": "number"
    },
    "view": {
     "!type": "+HTMLCanvasElement"
    },
    "context": {
     "!type": "+CanvasRenderingContext2D"
    },
    "refresh": {
     "!type": "bool"
    },
    "count": {
     "!type": "number"
    },
    "maskManager": {
     "!type": "+CanvasMaskManager"
    },
    "renderSession": {
     "!type": "?"
    }
   }
  },
  "CanvasRenderer#renderSession": {
   "roundPixels": {
    "!doc": "If true Pixi will Math.floor() x/y values when rendering, stopping pixel interpolation.\nHandy for crisp pixel art and speed on legacy devices."
   }
  },
  "CanvasBuffer": {
   "!type": "fn(width: number, height: number)",
   "!doc": "Creates a Canvas element of the given size.",
   "prototype": {
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
    }
   }
  },
  "CanvasMaskManager": {
   "!type": "fn()",
   "!doc": "A set of functions used to handle masking."
  },
  "CanvasTinter": {
   "canHandleAlpha": {
    "!type": "bool"
   },
   "canUseMultiply": {
    "!type": "bool"
   }
  },
  "ComplexPrimitiveShader": {
   "!type": "fn(gl: +WebGLContext)",
   "prototype": {
    "gl": {
     "!type": "+WebGLContext"
    },
    "program": {
     "!type": "+Any"
    },
    "fragmentSrc": {
     "!type": "[?]"
    },
    "vertexSrc": {
     "!type": "[?]"
    }
   }
  },
  "PixiFastShader": {
   "!type": "fn(gl: +WebGLContext)",
   "prototype": {
    "gl": {
     "!type": "+WebGLContext"
    },
    "program": {
     "!type": "+Any"
    },
    "fragmentSrc": {
     "!type": "[?]"
    },
    "vertexSrc": {
     "!type": "[?]"
    },
    "textureCount": {
     "!type": "number"
    }
   }
  },
  "PixiShader": {
   "!type": "fn(gl: +WebGLContext)",
   "prototype": {
    "gl": {
     "!type": "+WebGLContext"
    },
    "program": {
     "!type": "+Any"
    },
    "fragmentSrc": {
     "!type": "[?]"
    },
    "textureCount": {
     "!type": "number"
    },
    "dirty": {
     "!type": "bool"
    }
   }
  },
  "PixiShader.defaultVertexSrc": {
   "!type": "string"
  },
  "PrimitiveShader": {
   "!type": "fn(gl: +WebGLContext)",
   "prototype": {
    "gl": {
     "!type": "+WebGLContext"
    },
    "program": {
     "!type": "+Any"
    },
    "fragmentSrc": {
     "!type": "[?]"
    },
    "vertexSrc": {
     "!type": "[?]"
    }
   }
  },
  "StripShader": {
   "!type": "fn(gl: +WebGLContext)",
   "prototype": {
    "gl": {
     "!type": "+WebGLContext"
    },
    "program": {
     "!type": "+Any"
    },
    "fragmentSrc": {
     "!type": "[?]"
    },
    "vertexSrc": {
     "!type": "[?]"
    }
   }
  },
  "FilterTexture": {
   "!type": "fn(gl: +WebGLContext, width: number, height: number, scaleMode: number)",
   "prototype": {
    "gl": {
     "!type": "+WebGLContext"
    },
    "frameBuffer": {
     "!type": "+Any"
    },
    "texture": {
     "!type": "+Any"
    }
   }
  },
  "WebGLBlendModeManager": {
   "!type": "fn(gl: +WebGLContext)",
   "prototype": {
    "currentBlendMode": {
     "!type": "number"
    }
   }
  },
  "WebGLFastSpriteBatch": {
   "!type": "fn()",
   "prototype": {
    "vertSize": {
     "!type": "number"
    },
    "maxSize": {
     "!type": "number"
    },
    "size": {
     "!type": "number"
    },
    "vertices": {
     "!type": "+Float32Array"
    },
    "indices": {
     "!type": "+Uint16Array"
    },
    "vertexBuffer": {
     "!type": "?"
    },
    "indexBuffer": {
     "!type": "?"
    },
    "lastIndexCount": {
     "!type": "number"
    },
    "drawing": {
     "!type": "bool"
    },
    "currentBatchSize": {
     "!type": "number"
    },
    "currentBaseTexture": {
     "!type": "+BaseTexture"
    },
    "currentBlendMode": {
     "!type": "number"
    },
    "renderSession": {
     "!type": "?"
    },
    "shader": {
     "!type": "?"
    },
    "matrix": {
     "!type": "+Matrix"
    }
   }
  },
  "WebGLFilterManager": {
   "!type": "fn()",
   "prototype": {
    "filterStack": {
     "!type": "[?]"
    },
    "offsetX": {
     "!type": "number"
    },
    "offsetY": {
     "!type": "number"
    }
   }
  },
  "WebGLShaderManager": {
   "prototype": {
    "maxAttibs": {
     "!type": "number"
    },
    "attribState": {
     "!type": "[?]"
    },
    "tempAttribState": {
     "!type": "[?]"
    },
    "stack": {
     "!type": "[?]"
    }
   }
  },
  "WebGLSpriteBatch": {
   "prototype": {
    "vertSize": {
     "!type": "number"
    },
    "size": {
     "!type": "number"
    },
    "vertices": {
     "!type": "[?]"
    },
    "positions": {
     "!type": "+Float32Array"
    },
    "colors": {
     "!type": "+Uint32Array"
    },
    "indices": {
     "!type": "+Uint16Array"
    },
    "lastIndexCount": {
     "!type": "number"
    },
    "drawing": {
     "!type": "bool"
    },
    "currentBatchSize": {
     "!type": "number"
    },
    "currentBaseTexture": {
     "!type": "+BaseTexture"
    },
    "dirty": {
     "!type": "bool"
    },
    "textures": {
     "!type": "[?]"
    },
    "blendModes": {
     "!type": "[?]"
    },
    "shaders": {
     "!type": "[?]"
    },
    "sprites": {
     "!type": "[?]"
    },
    "defaultShader": {
     "!type": "+AbstractFilter"
    }
   }
  },
  "glContexts": {},
  "WebGLRenderer": {
   "!type": "fn(width: number, height: number, options: ?)",
   "!doc": "The WebGLRenderer draws the stage and all its content onto a webGL enabled canvas. This renderer\nshould be used for browsers that support webGL. This Render works by automatically managing webGLBatchs.\nSo no need for Sprite Batches or Sprite Clouds.\nDon't forget to add the view to your DOM or you will not see anything :)",
   "prototype": {
    "type": {
     "!type": "number"
    },
    "resolution": {
     "!type": "number"
    },
    "transparent": {
     "!type": "bool"
    },
    "autoResize": {
     "!type": "bool"
    },
    "preserveDrawingBuffer": {
     "!type": "bool"
    },
    "clearBeforeRender": {
     "!type": "bool"
    },
    "width": {
     "!type": "number"
    },
    "height": {
     "!type": "number"
    },
    "view": {
     "!type": "+HTMLCanvasElement"
    },
    "projection": {
     "!type": "+Phaser.Point"
    },
    "offset": {
     "!type": "+Phaser.Point"
    },
    "shaderManager": {
     "!type": "+WebGLShaderManager"
    },
    "spriteBatch": {
     "!type": "+WebGLSpriteBatch"
    },
    "maskManager": {
     "!type": "+WebGLMaskManager"
    },
    "filterManager": {
     "!type": "+WebGLFilterManager"
    },
    "stencilManager": {
     "!type": "+WebGLStencilManager"
    },
    "blendModeManager": {
     "!type": "+WebGLBlendModeManager"
    },
    "renderSession": {
     "!type": "?"
    }
   }
  },
  "BaseTextureCache": {},
  "BaseTexture": {
   "!type": "fn(source: string, scaleMode: number)",
   "!doc": "A texture stores the information that represents an image. All textures have a base texture.",
   "prototype": {
    "resolution": {
     "!type": "number"
    },
    "width": {
     "!type": "number"
    },
    "height": {
     "!type": "number"
    },
    "scaleMode": {
     "!type": "number"
    },
    "hasLoaded": {
     "!type": "bool"
    },
    "source": {
     "!type": "+Image"
    },
    "premultipliedAlpha": {
     "!type": "bool"
    },
    "mipmap": {
     "!type": "bool"
    },
    "imageUrl": {
     "!type": "string"
    }
   }
  },
  "RenderTexture": {
   "!type": "fn(width: number, height: number, renderer: +CanvasRenderer|+WebGLRenderer, scaleMode: number, resolution: number)",
   "!doc": "A RenderTexture is a special texture that allows any Pixi display object to be rendered to it.\n\n__Hint__: All DisplayObjects (i.e. Sprites) that render to a RenderTexture should be preloaded otherwise black rectangles will be drawn instead.\n\nA RenderTexture takes a snapshot of any Display Object given to its render method. The position and rotation of the given Display Objects is ignored. For example:\n\n   var renderTexture = new PIXI.RenderTexture(800, 600);\n   var sprite = PIXI.Sprite.fromImage(\"spinObj_01.png\");\n   sprite.position.x = 800/2;\n   sprite.position.y = 600/2;\n   sprite.anchor.x = 0.5;\n   sprite.anchor.y = 0.5;\n   renderTexture.render(sprite);\n\nThe Sprite in this case will be rendered to a position of 0,0. To render this sprite at its actual position a DisplayObjectContainer should be used:\n\n   var doc = new PIXI.DisplayObjectContainer();\n   doc.addChild(sprite);\n   renderTexture.render(doc);  // Renders to center of renderTexture",
   "prototype": {
    "width": {
     "!type": "number"
    },
    "height": {
     "!type": "number"
    },
    "resolution": {
     "!type": "number"
    },
    "frame": {
     "!type": "+Rectangle"
    },
    "crop": {
     "!type": "+Rectangle"
    },
    "baseTexture": {
     "!type": "+BaseTexture"
    },
    "renderer": {
     "!type": "+CanvasRenderer|+WebGLRenderer"
    },
    "valid": {
     "!type": "bool"
    }
   }
  },
  "TextureCache": {},
  "TextureSilentFail": {
   "!type": "bool",
   "!doc": "TextureSilentFail is a boolean that defaults to `false`. \nIf `true` then `PIXI.Texture.setFrame` will no longer throw an error if the texture dimensions are incorrect. \nInstead `Texture.valid` will be set to `false` (#1556)"
  },
  "Texture": {
   "!type": "fn(baseTexture: +BaseTexture, frame: +Rectangle, crop: +Rectangle, trim: +Rectangle)",
   "!doc": "A texture stores the information that represents an image or part of an image. It cannot be added\nto the display list directly. Instead use it as the texture for a PIXI.Sprite. If no frame is provided then the whole image is used.",
   "prototype": {
    "noFrame": {
     "!type": "bool"
    },
    "baseTexture": {
     "!type": "+BaseTexture"
    },
    "frame": {
     "!type": "+Rectangle"
    },
    "trim": {
     "!type": "+Rectangle"
    },
    "valid": {
     "!type": "bool"
    },
    "isTiling": {
     "!type": "bool"
    },
    "requiresUpdate": {
     "!type": "bool"
    },
    "requiresReTint": {
     "!type": "bool"
    },
    "width": {
     "!type": "number"
    },
    "height": {
     "!type": "number"
    },
    "crop": {
     "!type": "+Rectangle"
    }
   }
  },
  "CanvasPool": {
   "pool": {
    "!type": "[?]"
   }
  },
  "EventTarget": {
   "call": {
    "!type": "fn()",
    "!doc": "Backward compat from when this used to be a function"
   }
  },
  "Event": {
   "!type": "fn(target: ?, name: string, data: ?)",
   "!doc": "Creates an homogenous object for tracking events so users can know what to expect.",
   "prototype": {
    "target": {
     "!type": "?"
    },
    "type": {
     "!type": "string"
    },
    "data": {
     "!type": "?"
    },
    "timeStamp": {
     "!type": "number"
    }
   }
  }
 },
 "lineStyle": {
  "!type": "fn(lineWidth: number, color: number, alpha: number) -> +Graphics",
  "!doc": "Specifies the line style used for subsequent calls to Graphics methods such as the lineTo() method or the drawCircle() method."
 },
 "moveTo": {
  "!type": "fn(x: number, y: number) -> +Graphics",
  "!doc": "Moves the current drawing position to x, y."
 },
 "lineTo": {
  "!type": "fn(x: number, y: number) -> +Graphics",
  "!doc": "Draws a line using the current line style from the current drawing position to (x, y);\nThe current drawing position is then set to (x, y)."
 },
 "quadraticCurveTo": {
  "!type": "fn(cpX: number, cpY: number, toX: number, toY: number) -> +Graphics",
  "!doc": "Calculate the points for a quadratic bezier curve and then draws it.\nBased on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c"
 },
 "bezierCurveTo": {
  "!type": "fn(cpX: number, cpY: number, cpX2: number, cpY2: number, toX: number, toY: number) -> +Graphics",
  "!doc": "Calculate the points for a bezier curve and then draws it."
 },
 "arc": {
  "!type": "fn(cx: number, cy: number, radius: number, startAngle: number, endAngle: number, anticlockwise: bool) -> +Graphics",
  "!doc": "The arc method creates an arc/curve (used to create circles, or parts of circles)."
 },
 "beginFill": {
  "!type": "fn(color: number, alpha: number) -> +Graphics",
  "!doc": "Specifies a simple one-color fill that subsequent calls to other Graphics methods\n(such as lineTo() or drawCircle()) use when drawing."
 },
 "endFill": {
  "!type": "fn() -> +Graphics",
  "!doc": "Applies a fill to the lines and shapes that were added since the last call to the beginFill() method."
 },
 "drawRect": {
  "!type": "fn(x: number, y: number, width: number, height: number) -> +Graphics"
 },
 "drawRoundedRect": {
  "!type": "fn(x: number, y: number, width: number, height: number, radius: number)"
 },
 "drawCircle": {
  "!type": "fn(x: number, y: number, diameter: number) -> +Graphics",
  "!doc": "Draws a circle."
 },
 "drawEllipse": {
  "!type": "fn(x: number, y: number, width: number, height: number) -> +Graphics",
  "!doc": "Draws an ellipse."
 },
 "drawPolygon": {
  "!type": "fn(path: [?]|+Phaser.Polygon) -> +Graphics",
  "!doc": "Draws a polygon using the given path."
 },
 "updateLocalBounds": {
  "!type": "fn()",
  "!doc": "Update the bounds of the object"
 },
 "destroyCachedSprite": {
  "!type": "fn()",
  "!doc": "Destroys a previous cached sprite."
 },
 "drawShape": {
  "!type": "fn(shape: +Circle|+Rectangle|+Ellipse|+Line|+Polygon) -> +GraphicsData",
  "!doc": "Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon."
 },
 "PIXI.GraphicsData = function(lineWidth, lineColor, lineAlpha, fillColor, fillAlpha, fill, shape)\n{\n    this.lineWidth = lineWidth;\n    this.lineColor = lineColor;\n    this.lineAlpha = lineAlpha;\n    this._lineTint = lineColor;\n\n    this.fillColor = fillColor;\n    this.fillAlpha = fillAlpha;\n    this._fillTint = fillColor;\n    this.fill = fill;\n\n    this.shape = shape;\n    this.type = shape.type;\n};": {
  "!type": "fn()",
  "!doc": "A GraphicsData object."
 },
 "CanvasGraphics": {
  "!type": "fn()",
  "!doc": "A set of functions used by the canvas renderer to draw the primitive graphics data."
 },
 "render": {
  "!type": "fn(stage: +Stage)",
  "!doc": "Renders the stage to its webGL view"
 },
 "pushMask": {
  "!type": "fn(graphics: +Graphics, webGLData: [?], renderSession: ?)",
  "!doc": "Applies the Mask and adds it to the current filter stack."
 },
 "popMask": {
  "!type": "fn(maskData: [?], renderSession: ?)",
  "!doc": "Removes the last filter from the filter stack and doesn't return it."
 },
 "CanvasTinter": {
  "!type": "fn()",
  "!doc": "Utility methods for Sprite/Texture tinting."
 },
 "getTintedTexture": {
  "!type": "fn(sprite: +Sprite, color: number) -> +HTMLCanvasElement",
  "!doc": "Basically this method just needs a sprite and a color and tints the sprite with the given color."
 },
 "tintWithMultiply": {
  "!type": "fn(texture: +Texture, color: number, canvas: +HTMLCanvasElement)",
  "!doc": "Tint a texture using the \"multiply\" operation."
 },
 "tintPerPixel": {
  "!type": "fn(texture: +Texture, color: number, canvas: +HTMLCanvasElement)",
  "!doc": "Tint a texture pixel per pixel."
 },
 "checkInverseAlpha": {
  "!type": "fn()",
  "!doc": "Checks if the browser correctly supports putImageData alpha channels."
 },
 "tintMethod": {
  "!type": "fn()",
  "!doc": "The tinting method that will be used."
 },
 "init": {
  "!type": "fn()",
  "!doc": "Initialises the shader."
 },
 "initUniforms": {
  "!type": "fn()",
  "!doc": "Initialises the shader uniform values.\n\nUniforms are specified in the GLSL_ES Specification: http://www.khronos.org/registry/webgl/specs/latest/1.0/\nhttp://www.khronos.org/registry/gles/specs/2.0/GLSL_ES_Specification_1.0.17.pdf"
 },
 "initSampler2D": {
  "!type": "fn()",
  "!doc": "Initialises a Sampler2D uniform (which may only be available later on after initUniforms once the texture has loaded)"
 },
 "setContext": {
  "!type": "fn(gl: +WebGLContext)",
  "!doc": "Sets the drawing context to the one given in parameter."
 },
 "setBlendMode": {
  "!type": "fn(blendMode: number)",
  "!doc": "Sets-up the given blendMode from WebGL's point of view."
 },
 "begin": {
  "!type": "fn(renderSession: ?)"
 },
 "end": {
  "!type": "fn()"
 },
 "renderSprite": {
  "!type": "fn(sprite: +Sprite)"
 },
 "flush": {
  "!type": "fn()",
  "!doc": "Renders the content and empties the current batch."
 },
 "start": {
  "!type": "fn()"
 },
 "pushFilter": {
  "!type": "fn(filterBlock: ?)",
  "!doc": "Applies the filter and adds it to the current filter stack."
 },
 "popFilter": {
  "!type": "fn()",
  "!doc": "Removes the last filter from the filter stack and doesn't return it."
 },
 "applyFilterPass": {
  "!type": "fn(filter: +AbstractFilter, filterArea: +Texture, width: number, height: number)",
  "!doc": "Applies the filter to the specified area."
 },
 "initShaderBuffers": {
  "!type": "fn()",
  "!doc": "Initialises the shader buffers."
 },
 "upload": {
  "!type": "fn()"
 },
 "setAttribs": {
  "!type": "fn(attribs: [?])",
  "!doc": "Takes the attributes given in parameters."
 },
 "setShader": {
  "!type": "fn(shader: +Any)",
  "!doc": "Sets the current shader."
 },
 "CompileVertexShader": {
  "!type": "fn(gl: +WebGLContext, shaderSrc: [?]) -> +Any"
 },
 "CompileFragmentShader": {
  "!type": "fn(gl: +WebGLContext, shaderSrc: [?]) -> +Any"
 },
 "compileProgram": {
  "!type": "fn(gl: +WebGLContext, vertexSrc: [?], fragmentSrc: [?]) -> +Any"
 },
 "renderTilingSprite": {
  "!type": "fn(sprite: +TilingSprite)",
  "!doc": "Renders a TilingSprite using the spriteBatch."
 },
 "renderBatch": {
  "!type": "fn(texture: +Texture, size: number, startIndex: number)"
 },
 "bindGraphics": {
  "!type": "fn(graphics: +Graphics, webGLData: [?], renderSession: ?)",
  "!doc": "TODO this does not belong here!"
 },
 "popStencil": {
  "!type": "fn(graphics: +Graphics, webGLData: [?], renderSession: ?)"
 },
 "initContext": {
  "!type": "fn()"
 },
 "renderDisplayObject": {
  "!type": "fn(displayObject: +DisplayObject, projection: +Phaser.Point, buffer: [?])",
  "!doc": "Renders a Display Object."
 },
 "updateTexture": {
  "!type": "fn(texture: +Texture)",
  "!doc": "Updates and Creates a WebGL texture for the renderers context."
 },
 "mapBlendModes": {
  "!type": "fn()",
  "!doc": "Maps Pixi blend modes to WebGL blend modes."
 },
 "forceLoaded": {
  "!type": "fn(width: number, height: number)",
  "!doc": "Forces this BaseTexture to be set as loaded, with the given width and height.\nThen calls BaseTexture.dirty.\nImportant for when you don't want to modify the source object by forcing in `complete` or dimension properties it may not have."
 },
 "updateSourceImage": {
  "!type": "fn(newSrc: string)",
  "!doc": "Changes the source image of the texture"
 },
 "dirty": {
  "!type": "fn()",
  "!doc": "Sets all glTextures to be dirty."
 },
 "unloadFromGPU": {
  "!type": "fn()",
  "!doc": "Removes the base texture from the GPU, useful for managing resources on the GPU.\nAtexture is still 100% usable and will simply be reuploaded if there is a sprite on screen that is using it."
 },
 "fromCanvas": {
  "!type": "fn(canvas: +Canvas, scaleMode: number) -> ?",
  "!doc": "Helper function that creates a new a Texture based on the given canvas element."
 },
 "getImage": {
  "!type": "fn() -> +Image",
  "!doc": "Will return a HTML Image of the texture"
 },
 "getBase64": {
  "!type": "fn() -> string",
  "!doc": "Will return a base64 encoded string of this texture. It works by calling RenderTexture.getCanvas and then running toDataURL on that."
 },
 "getCanvas": {
  "!type": "fn() -> +HTMLCanvasElement",
  "!doc": "Creates a Canvas element, renders this RenderTexture to it and then returns it."
 },
 "setFrame": {
  "!type": "fn(frame: +Rectangle)",
  "!doc": "Specifies the region of the baseTexture that this texture will use."
 },
 "addTextureToCache": {
  "!type": "fn(texture: +Texture, id: string)",
  "!doc": "Adds a texture to the global PIXI.TextureCache. This cache is shared across the whole PIXI object."
 },
 "removeTextureFromCache": {
  "!type": "fn(id: string) -> +Texture",
  "!doc": "Remove a texture from the global PIXI.TextureCache."
 },
 "CanvasPool": {
  "!type": "fn()",
  "!doc": "The CanvasPool is a global static object that allows Pixi and Phaser to pool canvas DOM elements."
 },
 "getFirst": {
  "!type": "fn() -> number",
  "!doc": "Gets the first free canvas index from the pool."
 },
 "remove": {
  "!type": "fn(parent: +any)",
  "!doc": "Removes the parent from a canvas element from the pool, freeing it up for re-use."
 },
 "removeByCanvas": {
  "!type": "fn(canvas: +HTMLCanvasElement)",
  "!doc": "Removes the parent from a canvas element from the pool, freeing it up for re-use."
 },
 "getTotal": {
  "!type": "fn() -> number",
  "!doc": "Gets the total number of used canvas elements in the pool."
 },
 "getFree": {
  "!type": "fn() -> number",
  "!doc": "Gets the total number of free canvas elements in the pool."
 },
 "EventTarget": {
  "!type": "fn()",
  "!doc": "Mixins event emitter functionality to a class"
 },
 "mixin": {
  "!type": "fn(object: ?)",
  "!doc": "Mixes in the properties of the EventTarget prototype onto another object"
 },
 "listeners": {
  "!type": "fn(eventName: string) -> [?]",
  "!doc": "Return a list of assigned event listeners."
 },
 "once": {
  "!type": "fn(eventName: string, callback: fn())",
  "!doc": "Add an EventListener that's only called once."
 },
 "removeAllListeners": {
  "!type": "fn(eventName: string)",
  "!doc": "Remove all listeners or only the listeners for the specified event."
 },
 "stopPropagation": {
  "!type": "fn()",
  "!doc": "Stops the propagation of events up the scene graph (prevents bubbling)."
 },
 "stopImmediatePropagation": {
  "!type": "fn()",
  "!doc": "Stops the propagation of events to sibling listeners (no longer calls any listeners)."
 },
 "PolyK": {
  "!type": "fn()",
  "!doc": "Based on the Polyk library http://polyk.ivank.net released under MIT licence.\nThis is an amazing lib!\nSlightly modified by Mat Groves (matgroves.com);"
 },
 "Triangulate": {
  "!type": "fn()",
  "!doc": "Triangulates shapes for webGL graphic fills."
 },
 "hex2rgb": {
  "!type": "fn(hex: number)",
  "!doc": "Converts a hex color number to an [R, G, B] array"
 },
 "rgb2hex": {
  "!type": "fn(rgb: [?])",
  "!doc": "Converts a color as an [R, G, B] array to a hex number"
 },
 "canUseNewCanvasBlendModes": {
  "!type": "fn() -> bool",
  "!doc": "Checks whether the Canvas BlendModes are supported by the current browser for drawImage"
 },
 "getNextPowerOfTwo": {
  "!type": "fn(number: number) -> number",
  "!doc": "Given a number, this function returns the closest number that is a power of two\nthis function is taken from Starling Framework as its pretty neat ;)"
 },
 "isPowerOfTwo": {
  "!type": "fn(width: number, height: number) -> bool",
  "!doc": "checks if the given width and height make a power of two texture"
 },
 "debugNoop": {
  "!type": "fn()",
  "!doc": "This is a stub for the Phaser Debug Class.\nIt allows you to exclude the default Debug from your build, without making Game crash."
 },
 "netNoop": {
  "!type": "fn()",
  "!doc": "This is a stub for the Phaser Net Class.\nIt allows you to exclude the default Net from your build, without making Game crash."
 },
 "undefined": {}
};
    
})