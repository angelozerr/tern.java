(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  tern.registerPlugin("dojotoolkit_1_6", function(server, options) {
    server._dojo = {};
    return {
      defs : defs
    };
  });

  var defs = {
      "!name": "dojo",
      "!define": {
       "dijit": {
        "CheckedMenuItem": {
         "_setCheckedAttr": {
          "!type": "fn()"
         },
         "onChange": {
          "!type": "fn()"
         },
         "_onClick": {
          "!type": "fn()"
         }
        },
        "ColorPalette": {
         "postCreate": {
          "!type": "fn()"
         },
         "focus": {
          "!type": "fn()"
         },
         "onChange": {
          "!type": "fn()"
         },
         "_focusFirst": {
          "!type": "fn()"
         },
         "_onDivNodeFocus": {
          "!type": "fn()"
         },
         "_onFocus": {
          "!type": "fn()"
         },
         "_onBlur": {
          "!type": "fn()"
         },
         "_onCellDijitclick": {
          "!type": "fn()"
         },
         "_onCellMouseEnter": {
          "!type": "fn()"
         },
         "_onCellFocus": {
          "!type": "fn()"
         },
         "_setCurrent": {
          "!type": "fn()"
         },
         "_onCellBlur": {
          "!type": "fn()"
         },
         "_removeCellHighlight": {
          "!type": "fn()"
         },
         "_selectColor": {
          "!type": "fn()"
         },
         "_navigateByKey": {
          "!type": "fn()"
         },
         "_palettes": {},
         "_imagePaths": {},
         "_paletteCoords": {},
         "_paletteDims": {
          "7x10": {},
          "3x4": {}
         }
        },
        "Declaration": {
         "buildRendering": {
          "!type": "fn()"
         }
        },
        "Dialog": {
         "postMixInProperties": {
          "!type": "fn()"
         },
         "postCreate": {
          "!type": "fn()"
         },
         "onLoad": {
          "!type": "fn()"
         },
         "_endDrag": {
          "!type": "fn()"
         },
         "_setup": {
          "!type": "fn()"
         },
         "uninitialize": {
          "!type": "fn()"
         },
         "_size": {
          "!type": "fn()"
         },
         "_position": {
          "!type": "fn()"
         },
         "_onKey": {
          "!type": "fn()"
         },
         "show": {
          "!type": "fn()"
         },
         "hide": {
          "!type": "fn()"
         },
         "layout": {
          "!type": "fn()"
         },
         "destroy": {
          "!type": "fn()"
         },
         "_onCloseEnter": {
          "!type": "fn()"
         },
         "_onCloseLeave": {
          "!type": "fn()"
         }
        },
        "DialogUnderlay": {
         "_setDialogIdAttr": {
          "!type": "fn()"
         },
         "_setClassAttr": {
          "!type": "fn()"
         },
         "postCreate": {
          "!type": "fn()"
         },
         "layout": {
          "!type": "fn()"
         },
         "show": {
          "!type": "fn()"
         },
         "hide": {
          "!type": "fn()"
         },
         "uninitialize": {
          "!type": "fn()"
         },
         "attributeMap": {}
        },
        "Editor": {
         "constructor": {
          "!type": "fn()"
         },
         "postCreate": {
          "!type": "fn()"
         },
         "destroy": {
          "!type": "fn()"
         },
         "addPlugin": {
          "!type": "fn()"
         },
         "startup": {
          "!type": "fn()"
         },
         "resize": {
          "!type": "fn()"
         },
         "layout": {
          "!type": "fn()"
         },
         "_onIEMouseDown": {
          "!type": "fn()"
         },
         "onBeforeDeactivate": {
          "!type": "fn()"
         },
         "beginEditing": {
          "!type": "fn()"
         },
         "execCommand": {
          "!type": "fn()"
         },
         "queryCommandEnabled": {
          "!type": "fn()"
         },
         "focus": {
          "!type": "fn()"
         },
         "_moveToBookmark": {
          "!type": "fn()"
         },
         "_changeToStep": {
          "!type": "fn()"
         },
         "undo": {
          "!type": "fn()"
         },
         "redo": {
          "!type": "fn()"
         },
         "endEditing": {
          "!type": "fn()"
         },
         "_getBookmark": {
          "!type": "fn()"
         },
         "_beginEditing": {
          "!type": "fn()"
         },
         "_endEditing": {
          "!type": "fn()"
         },
         "onKeyDown": {
          "!type": "fn()"
         },
         "_onBlur": {
          "!type": "fn()"
         },
         "_saveSelection": {
          "!type": "fn()"
         },
         "_restoreSelection": {
          "!type": "fn()"
         },
         "_onFocus": {
          "!type": "fn()"
         },
         "onClick": {
          "!type": "fn()"
         }
        },
        "_editor": {
         "escapeXml": {
          "!type": "fn()"
         },
         "getNodeHtml": {
          "!type": "fn()"
         },
         "getChildrenHtml": {
          "!type": "fn()"
         },
         "_Plugin": {
          "constructor": {
           "!type": "fn()"
          },
          "getLabel": {
           "!type": "fn()"
          },
          "_initButton": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "connect": {
           "!type": "fn()"
          },
          "updateState": {
           "!type": "fn()"
          },
          "setEditor": {
           "!type": "fn()"
          },
          "setToolbar": {
           "!type": "fn()"
          }
         },
         "RichText": {
          "constructor": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "setupDefaultShortcuts": {
           "!type": "fn()"
          },
          "_localizeEditorCommands": {
           "!type": "fn()"
          },
          "open": {
           "!type": "fn()"
          },
          "_getIframeDocTxt": {
           "!type": "fn()"
          },
          "_drawIframe": {
           "!type": "fn()"
          },
          "_applyEditingAreaStyleSheets": {
           "!type": "fn()"
          },
          "addStyleSheet": {
           "!type": "fn()"
          },
          "removeStyleSheet": {
           "!type": "fn()"
          },
          "_setDisabledAttr": {
           "!type": "fn()"
          },
          "onLoad": {
           "!type": "fn()"
          },
          "onKeyDown": {
           "!type": "fn()"
          },
          "onKeyUp": {
           "!type": "fn()"
          },
          "setDisabled": {
           "!type": "fn()"
          },
          "_setValueAttr": {
           "!type": "fn()"
          },
          "_getDisableSpellCheckAttr": {
           "!type": "fn()"
          },
          "_setDisableSpellCheckAttr": {
           "!type": "fn()"
          },
          "onKeyPress": {
           "!type": "fn()"
          },
          "addKeyHandler": {
           "!type": "fn()"
          },
          "onKeyPressed": {
           "!type": "fn()"
          },
          "onClick": {
           "!type": "fn()"
          },
          "_onIEMouseDown": {
           "!type": "fn()"
          },
          "_onBlur": {
           "!type": "fn()"
          },
          "_onFocus": {
           "!type": "fn()"
          },
          "blur": {
           "!type": "fn()"
          },
          "focus": {
           "!type": "fn()"
          },
          "onDisplayChanged": {
           "!type": "fn()"
          },
          "onNormalizedDisplayChanged": {
           "!type": "fn()"
          },
          "onChange": {
           "!type": "fn()"
          },
          "_normalizeCommand": {
           "!type": "fn()"
          },
          "queryCommandAvailable": {
           "!type": "fn()"
          },
          "_queryCommandAvailable": {
           "!type": "fn()"
          },
          "execCommand": {
           "!type": "fn()"
          },
          "queryCommandEnabled": {
           "!type": "fn()"
          },
          "queryCommandState": {
           "!type": "fn()"
          },
          "queryCommandValue": {
           "!type": "fn()"
          },
          "_sCall": {
           "!type": "fn()"
          },
          "placeCursorAtStart": {
           "!type": "fn()"
          },
          "placeCursorAtEnd": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "_getValueAttr": {
           "!type": "fn()"
          },
          "setValue": {
           "!type": "fn()"
          },
          "replaceValue": {
           "!type": "fn()"
          },
          "_preFilterContent": {
           "!type": "fn()"
          },
          "_preDomFilterContent": {
           "!type": "fn()"
          },
          "_postFilterContent": {
           "!type": "fn()"
          },
          "_saveContent": {
           "!type": "fn()"
          },
          "escapeXml": {
           "!type": "fn()"
          },
          "getNodeHtml": {
           "!type": "fn()"
          },
          "getNodeChildrenHtml": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          },
          "destroyRendering": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "_removeMozBogus": {
           "!type": "fn()"
          },
          "_removeSafariBogus": {
           "!type": "fn()"
          },
          "_fixContentForMoz": {
           "!type": "fn()"
          },
          "_preFixUrlAttributes": {
           "!type": "fn()"
          }
         },
         "plugins": {
          "AlwaysShowToolbar": {
           "setEditor": {
            "!type": "fn()"
           },
           "enable": {
            "!type": "fn()"
           },
           "_updateHeight": {
            "!type": "fn()"
           },
           "globalOnScrollHandler": {
            "!type": "fn()"
           },
           "destroy": {
            "!type": "fn()"
           }
          },
          "EnterKeyHandling": {
           "constructor": {
            "!type": "fn()"
           },
           "setEditor": {
            "!type": "fn()"
           },
           "onKeyPressed": {
            "!type": "fn()"
           },
           "handleEnterKey": {
            "!type": "fn()"
           },
           "removeTrailingBr": {
            "!type": "fn()"
           },
           "_fixNewLineBehaviorForIE": {
            "!type": "fn()"
           },
           "regularPsToSingleLinePs": {
            "!type": "fn()"
           },
           "singleLinePsToRegularPs": {
            "!type": "fn()"
           }
          },
          "FontChoice": {
           "_initButton": {
            "!type": "fn()"
           },
           "updateState": {
            "!type": "fn()"
           },
           "setToolbar": {
            "!type": "fn()"
           }
          },
          "LinkDialog": {
           "_initButton": {
            "!type": "fn()"
           },
           "_setContent": {
            "!type": "fn()"
           },
           "setValue": {
            "!type": "fn()"
           },
           "_onCloseDialog": {
            "!type": "fn()"
           },
           "_onOpenDialog": {
            "!type": "fn()"
           }
          },
          "TabIndent": {
           "_initButton": {
            "!type": "fn()"
           },
           "updateState": {
            "!type": "fn()"
           }
          },
          "TextColor": {
           "constructor": {
            "!type": "fn()"
           }
          },
          "ToggleDir": {
           "_initButton": {
            "!type": "fn()"
           },
           "updateState": {
            "!type": "fn()"
           },
           "_toggleDir": {
            "!type": "fn()"
           }
          }
         },
         "selection": {
          "getType": {
           "!type": "fn()"
          },
          "getSelectedText": {
           "!type": "fn()"
          },
          "getSelectedHtml": {
           "!type": "fn()"
          },
          "getSelectedElement": {
           "!type": "fn()"
          },
          "getParentElement": {
           "!type": "fn()"
          },
          "hasAncestorElement": {
           "!type": "fn()"
          },
          "getAncestorElement": {
           "!type": "fn()"
          },
          "isTag": {
           "!type": "fn()"
          },
          "getParentOfType": {
           "!type": "fn()"
          },
          "collapse": {
           "!type": "fn()"
          },
          "remove": {
           "!type": "fn()"
          },
          "selectElementChildren": {
           "!type": "fn()"
          },
          "selectElement": {
           "!type": "fn()"
          }
         }
        },
        "InlineEditBox": {
         "onChange": {
          "!type": "fn()"
         },
         "onCancel": {
          "!type": "fn()"
         },
         "constructor": {
          "!type": "fn()"
         },
         "postMixInProperties": {
          "!type": "fn()"
         },
         "setDisabled": {
          "!type": "fn()"
         },
         "_setDisabledAttr": {
          "!type": "fn()"
         },
         "_onMouseOver": {
          "!type": "fn()"
         },
         "_onMouseOut": {
          "!type": "fn()"
         },
         "_onClick": {
          "!type": "fn()"
         },
         "edit": {
          "!type": "fn()"
         },
         "_showText": {
          "!type": "fn()"
         },
         "save": {
          "!type": "fn()"
         },
         "setValue": {
          "!type": "fn()"
         },
         "_setValueAttr": {
          "!type": "fn()"
         },
         "getValue": {
          "!type": "fn()"
         },
         "cancel": {
          "!type": "fn()"
         }
        },
        "_InlineEditor": {
         "postMixInProperties": {
          "!type": "fn()"
         },
         "postCreate": {
          "!type": "fn()"
         },
         "destroy": {
          "!type": "fn()"
         },
         "getValue": {
          "!type": "fn()"
         },
         "_onKeyPress": {
          "!type": "fn()"
         },
         "_onBlur": {
          "!type": "fn()"
         },
         "_onChange": {
          "!type": "fn()"
         },
         "enableSave": {
          "!type": "fn()"
         },
         "focus": {
          "!type": "fn()"
         }
        },
        "_MenuBase": {
         "startup": {
          "!type": "fn()"
         },
         "onExecute": {
          "!type": "fn()"
         },
         "onCancel": {
          "!type": "fn()"
         },
         "_moveToPopup": {
          "!type": "fn()"
         },
         "onItemHover": {
          "!type": "fn()"
         },
         "_onChildBlur": {
          "!type": "fn()"
         },
         "onItemUnhover": {
          "!type": "fn()"
         },
         "_stopPopupTimer": {
          "!type": "fn()"
         },
         "_getTopMenu": {
          "!type": "fn()"
         },
         "onItemClick": {
          "!type": "fn()"
         },
         "_openPopup": {
          "!type": "fn()"
         },
         "onOpen": {
          "!type": "fn()"
         },
         "onClose": {
          "!type": "fn()"
         },
         "_onFocus": {
          "!type": "fn()"
         },
         "_onBlur": {
          "!type": "fn()"
         },
         "_onDescendantExecute": {
          "!type": "fn()"
         }
        },
        "Menu": {
         "constructor": {
          "!type": "fn()"
         },
         "postCreate": {
          "!type": "fn()"
         },
         "_onKeyPress": {
          "!type": "fn()"
         },
         "_iframeContentWindow": {
          "!type": "fn()"
         },
         "_iframeContentDocument": {
          "!type": "fn()"
         },
         "bindDomNode": {
          "!type": "fn()"
         },
         "unBindDomNode": {
          "!type": "fn()"
         },
         "_contextKey": {
          "!type": "fn()"
         },
         "_contextMouse": {
          "!type": "fn()"
         },
         "_openMyself": {
          "!type": "fn()"
         },
         "uninitialize": {
          "!type": "fn()"
         },
         "getPlaceholders": {
          "!type": "fn()"
         }
        },
        "MenuBar": {
         "constructor": {
          "!type": "fn()"
         },
         "postCreate": {
          "!type": "fn()"
         },
         "focusChild": {
          "!type": "fn()"
         },
         "_onKeyPress": {
          "!type": "fn()"
         }
        },
        "_MenuBarItemMixin": {},
        "MenuBarItem": {},
        "MenuItem": {
         "_fillContent": {
          "!type": "fn()"
         },
         "postCreate": {
          "!type": "fn()"
         },
         "_onHover": {
          "!type": "fn()"
         },
         "_onUnhover": {
          "!type": "fn()"
         },
         "_onClick": {
          "!type": "fn()"
         },
         "onClick": {
          "!type": "fn()"
         },
         "focus": {
          "!type": "fn()"
         },
         "_onFocus": {
          "!type": "fn()"
         },
         "_setSelected": {
          "!type": "fn()"
         },
         "setLabel": {
          "!type": "fn()"
         },
         "setDisabled": {
          "!type": "fn()"
         },
         "_setDisabledAttr": {
          "!type": "fn()"
         },
         "_setAccelKeyAttr": {
          "!type": "fn()"
         }
        },
        "MenuSeparator": {
         "postCreate": {
          "!type": "fn()"
         },
         "isFocusable": {
          "!type": "fn()"
         }
        },
        "PopupMenuBarItem": {},
        "PopupMenuItem": {
         "_fillContent": {
          "!type": "fn()"
         },
         "startup": {
          "!type": "fn()"
         },
         "destroyDescendants": {
          "!type": "fn()"
         }
        },
        "ProgressBar": {
         "postCreate": {
          "!type": "fn()"
         },
         "update": {
          "!type": "fn()"
         },
         "report": {
          "!type": "fn()"
         },
         "onChange": {
          "!type": "fn()"
         }
        },
        "TitlePane": {
         "postCreate": {
          "!type": "fn()"
         },
         "_setOpenAttr": {
          "!type": "fn()"
         },
         "_setContentAttr": {
          "!type": "fn()"
         },
         "toggle": {
          "!type": "fn()"
         },
         "_setCss": {
          "!type": "fn()"
         },
         "_onTitleKey": {
          "!type": "fn()"
         },
         "_onTitleEnter": {
          "!type": "fn()"
         },
         "_onTitleLeave": {
          "!type": "fn()"
         },
         "_handleFocus": {
          "!type": "fn()"
         },
         "setTitle": {
          "!type": "fn()"
         }
        },
        "Toolbar": {
         "postCreate": {
          "!type": "fn()"
         },
         "startup": {
          "!type": "fn()"
         }
        },
        "ToolbarSeparator": {
         "postCreate": {
          "!type": "fn()"
         },
         "isFocusable": {
          "!type": "fn()"
         }
        },
        "_MasterTooltip": {
         "postCreate": {
          "!type": "fn()"
         },
         "show": {
          "!type": "fn()"
         },
         "orient": {
          "!type": "fn()"
         },
         "_onShow": {
          "!type": "fn()"
         },
         "hide": {
          "!type": "fn()"
         },
         "_onHide": {
          "!type": "fn()"
         }
        },
        "Tooltip": {
         "_setConnectIdAttr": {
          "!type": "fn()"
         },
         "postCreate": {
          "!type": "fn()"
         },
         "_onTargetMouseEnter": {
          "!type": "fn()"
         },
         "_onTargetMouseLeave": {
          "!type": "fn()"
         },
         "_onTargetFocus": {
          "!type": "fn()"
         },
         "_onTargetBlur": {
          "!type": "fn()"
         },
         "_onHover": {
          "!type": "fn()"
         },
         "_onUnHover": {
          "!type": "fn()"
         },
         "open": {
          "!type": "fn()"
         },
         "close": {
          "!type": "fn()"
         },
         "uninitialize": {
          "!type": "fn()"
         }
        },
        "TooltipDialog": {
         "postCreate": {
          "!type": "fn()"
         },
         "orient": {
          "!type": "fn()"
         },
         "onOpen": {
          "!type": "fn()"
         },
         "onClose": {
          "!type": "fn()"
         },
         "_onKey": {
          "!type": "fn()"
         }
        },
        "_TreeNode": {
         "postCreate": {
          "!type": "fn()"
         },
         "_setIndentAttr": {
          "!type": "fn()"
         },
         "markProcessing": {
          "!type": "fn()"
         },
         "unmarkProcessing": {
          "!type": "fn()"
         },
         "_updateItemClasses": {
          "!type": "fn()"
         },
         "_updateLayout": {
          "!type": "fn()"
         },
         "_setExpando": {
          "!type": "fn()"
         },
         "expand": {
          "!type": "fn()"
         },
         "collapse": {
          "!type": "fn()"
         },
         "setLabelNode": {
          "!type": "fn()"
         },
         "setChildItems": {
          "!type": "fn()"
         },
         "removeChild": {
          "!type": "fn()"
         },
         "makeExpandable": {
          "!type": "fn()"
         },
         "_onLabelFocus": {
          "!type": "fn()"
         },
         "_onLabelBlur": {
          "!type": "fn()"
         },
         "setSelected": {
          "!type": "fn()"
         },
         "_onMouseEnter": {
          "!type": "fn()"
         },
         "_onMouseLeave": {
          "!type": "fn()"
         }
        },
        "Tree": {
         "onDndDrop": {
          "!type": "fn()"
         },
         "itemCreator": {
          "!type": "fn()"
         },
         "onDndCancel": {
          "!type": "fn()"
         },
         "checkAcceptance": {
          "!type": "fn()"
         },
         "checkItemAcceptance": {
          "!type": "fn()"
         },
         "_publish": {
          "!type": "fn()"
         },
         "postMixInProperties": {
          "!type": "fn()"
         },
         "postCreate": {
          "!type": "fn()"
         },
         "_store2model": {
          "!type": "fn()"
         },
         "_load": {
          "!type": "fn()"
         },
         "mayHaveChildren": {
          "!type": "fn()"
         },
         "getItemChildren": {
          "!type": "fn()"
         },
         "getLabel": {
          "!type": "fn()"
         },
         "getIconClass": {
          "!type": "fn()"
         },
         "getLabelClass": {
          "!type": "fn()"
         },
         "getIconStyle": {
          "!type": "fn()"
         },
         "getLabelStyle": {
          "!type": "fn()"
         },
         "_onKeyPress": {
          "!type": "fn()"
         },
         "_onEnterKey": {
          "!type": "fn()"
         },
         "_onDownArrow": {
          "!type": "fn()"
         },
         "_onUpArrow": {
          "!type": "fn()"
         },
         "_onRightArrow": {
          "!type": "fn()"
         },
         "_onLeftArrow": {
          "!type": "fn()"
         },
         "_onHomeKey": {
          "!type": "fn()"
         },
         "_onEndKey": {
          "!type": "fn()"
         },
         "_onLetterKeyNav": {
          "!type": "fn()"
         },
         "_onClick": {
          "!type": "fn()"
         },
         "_onDblClick": {
          "!type": "fn()"
         },
         "_onExpandoClick": {
          "!type": "fn()"
         },
         "onClick": {
          "!type": "fn()"
         },
         "onDblClick": {
          "!type": "fn()"
         },
         "onOpen": {
          "!type": "fn()"
         },
         "onClose": {
          "!type": "fn()"
         },
         "_getNextNode": {
          "!type": "fn()"
         },
         "_getRootOrFirstNode": {
          "!type": "fn()"
         },
         "_collapseNode": {
          "!type": "fn()"
         },
         "_expandNode": {
          "!type": "fn()"
         },
         "focusNode": {
          "!type": "fn()"
         },
         "_onNodeFocus": {
          "!type": "fn()"
         },
         "_onNodeMouseEnter": {
          "!type": "fn()"
         },
         "_onNodeMouseLeave": {
          "!type": "fn()"
         },
         "_onItemChange": {
          "!type": "fn()"
         },
         "_onItemChildrenChange": {
          "!type": "fn()"
         },
         "_onItemDelete": {
          "!type": "fn()"
         },
         "_initState": {
          "!type": "fn()"
         },
         "_state": {
          "!type": "fn()"
         },
         "_saveState": {
          "!type": "fn()"
         },
         "destroy": {
          "!type": "fn()"
         },
         "destroyRecursive": {
          "!type": "fn()"
         },
         "_createTreeNode": {
          "!type": "fn()"
         }
        },
        "Calendar": {
         "setValue": {
          "!type": "fn()"
         },
         "_getValueAttr": {
          "!type": "fn()"
         },
         "_setValueAttr": {
          "!type": "fn()"
         },
         "_setText": {
          "!type": "fn()"
         },
         "_populateGrid": {
          "!type": "fn()"
         },
         "goToToday": {
          "!type": "fn()"
         },
         "constructor": {
          "!type": "fn()"
         },
         "postCreate": {
          "!type": "fn()"
         },
         "_adjustDisplay": {
          "!type": "fn()"
         },
         "_onDayClick": {
          "!type": "fn()"
         },
         "_onDayMouseOver": {
          "!type": "fn()"
         },
         "_onDayMouseOut": {
          "!type": "fn()"
         },
         "onValueSelected": {
          "!type": "fn()"
         },
         "onChange": {
          "!type": "fn()"
         },
         "isDisabledDate": {
          "!type": "fn()"
         },
         "getClassForDate": {
          "!type": "fn()"
         }
        },
        "_Contained": {
         "getParent": {
          "!type": "fn()"
         },
         "_getSibling": {
          "!type": "fn()"
         },
         "getPreviousSibling": {
          "!type": "fn()"
         },
         "getNextSibling": {
          "!type": "fn()"
         },
         "getIndexInParent": {
          "!type": "fn()"
         }
        },
        "_Container": {
         "buildRendering": {
          "!type": "fn()"
         },
         "addChild": {
          "!type": "fn()"
         },
         "removeChild": {
          "!type": "fn()"
         },
         "_nextElement": {
          "!type": "fn()"
         },
         "_firstElement": {
          "!type": "fn()"
         },
         "getChildren": {
          "!type": "fn()"
         },
         "hasChildren": {
          "!type": "fn()"
         },
         "destroyDescendants": {
          "!type": "fn()"
         },
         "_getSiblingOfChild": {
          "!type": "fn()"
         },
         "getIndexOfChild": {
          "!type": "fn()"
         }
        },
        "_DialogMixin": {
         "execute": {
          "!type": "fn()"
         },
         "onCancel": {
          "!type": "fn()"
         },
         "onExecute": {
          "!type": "fn()"
         },
         "_onSubmit": {
          "!type": "fn()"
         },
         "_getFocusItems": {
          "!type": "fn()"
         }
        },
        "_KeyNavContainer": {
         "connectKeyNavHandlers": {
          "!type": "fn()"
         },
         "startupKeyNavChildren": {
          "!type": "fn()"
         },
         "addChild": {
          "!type": "fn()"
         },
         "focus": {
          "!type": "fn()"
         },
         "focusFirstChild": {
          "!type": "fn()"
         },
         "focusNext": {
          "!type": "fn()"
         },
         "focusPrev": {
          "!type": "fn()"
         },
         "focusChild": {
          "!type": "fn()"
         },
         "_startupChild": {
          "!type": "fn()"
         },
         "_connectNode": {
          "!type": "fn()"
         },
         "_onContainerFocus": {
          "!type": "fn()"
         },
         "_onBlur": {
          "!type": "fn()"
         },
         "_onContainerKeypress": {
          "!type": "fn()"
         },
         "_onNodeFocus": {
          "!type": "fn()"
         },
         "_onNodeBlur": {
          "!type": "fn()"
         },
         "_onChildBlur": {
          "!type": "fn()"
         },
         "_getFirstFocusableChild": {
          "!type": "fn()"
         },
         "_getNextFocusableChild": {
          "!type": "fn()"
         }
        },
        "_Widget": {
         "onClick": {
          "!type": "fn()"
         },
         "onDblClick": {
          "!type": "fn()"
         },
         "onKeyDown": {
          "!type": "fn()"
         },
         "onKeyPress": {
          "!type": "fn()"
         },
         "onKeyUp": {
          "!type": "fn()"
         },
         "onMouseDown": {
          "!type": "fn()"
         },
         "onMouseMove": {
          "!type": "fn()"
         },
         "onMouseOut": {
          "!type": "fn()"
         },
         "onMouseOver": {
          "!type": "fn()"
         },
         "onMouseLeave": {
          "!type": "fn()"
         },
         "onMouseEnter": {
          "!type": "fn()"
         },
         "onMouseUp": {
          "!type": "fn()"
         },
         "postscript": {
          "!type": "fn()"
         },
         "create": {
          "!type": "fn()"
         },
         "_applyAttributes": {
          "!type": "fn()"
         },
         "postMixInProperties": {
          "!type": "fn()"
         },
         "buildRendering": {
          "!type": "fn()"
         },
         "postCreate": {
          "!type": "fn()"
         },
         "startup": {
          "!type": "fn()"
         },
         "destroyRecursive": {
          "!type": "fn()"
         },
         "destroy": {
          "!type": "fn()"
         },
         "destroyRendering": {
          "!type": "fn()"
         },
         "destroyDescendants": {
          "!type": "fn()"
         },
         "uninitialize": {
          "!type": "fn()"
         },
         "onFocus": {
          "!type": "fn()"
         },
         "onBlur": {
          "!type": "fn()"
         },
         "_onFocus": {
          "!type": "fn()"
         },
         "_onBlur": {
          "!type": "fn()"
         },
         "_onConnect": {
          "!type": "fn()"
         },
         "_setClassAttr": {
          "!type": "fn()"
         },
         "_setStyleAttr": {
          "!type": "fn()"
         },
         "setAttribute": {
          "!type": "fn()"
         },
         "_attrToDom": {
          "!type": "fn()"
         },
         "attr": {
          "!type": "fn()"
         },
         "_getAttrNames": {
          "!type": "fn()"
         },
         "toString": {
          "!type": "fn()"
         },
         "getDescendants": {
          "!type": "fn()"
         },
         "getChildren": {
          "!type": "fn()"
         },
         "connect": {
          "!type": "fn()"
         },
         "disconnect": {
          "!type": "fn()"
         },
         "isLeftToRight": {
          "!type": "fn()"
         },
         "isFocusable": {
          "!type": "fn()"
         },
         "placeAt": {
          "!type": "fn()"
         },
         "_onShow": {
          "!type": "fn()"
         },
         "onShow": {
          "!type": "fn()"
         },
         "onHide": {
          "!type": "fn()"
         },
         "onClose": {
          "!type": "fn()"
         },
         "attributeMap": {},
         "_deferredConnects": {},
         "prototype": {}
        },
        "_Templated": {
         "_stringRepl": {
          "!type": "fn()"
         },
         "buildRendering": {
          "!type": "fn()"
         },
         "_fillContent": {
          "!type": "fn()"
         },
         "_attachTemplateNodes": {
          "!type": "fn()"
         },
         "getCachedTemplate": {
          "!type": "fn()"
         },
         "_sanitizeTemplateString": {
          "!type": "fn()"
         }
        },
        "_TimePicker": {
         "serialize": {
          "!type": "fn()"
         },
         "setValue": {
          "!type": "fn()"
         },
         "_setValueAttr": {
          "!type": "fn()"
         },
         "onOpen": {
          "!type": "fn()"
         },
         "isDisabledDate": {
          "!type": "fn()"
         },
         "_getFilteredNodes": {
          "!type": "fn()"
         },
         "_showText": {
          "!type": "fn()"
         },
         "postCreate": {
          "!type": "fn()"
         },
         "_buttonMouse": {
          "!type": "fn()"
         },
         "_createOption": {
          "!type": "fn()"
         },
         "_onOptionSelected": {
          "!type": "fn()"
         },
         "onValueSelected": {
          "!type": "fn()"
         },
         "_highlightOption": {
          "!type": "fn()"
         },
         "onmouseover": {
          "!type": "fn()"
         },
         "onmouseout": {
          "!type": "fn()"
         },
         "_mouseWheeled": {
          "!type": "fn()"
         },
         "_onArrowUp": {
          "!type": "fn()"
         },
         "_onArrowDown": {
          "!type": "fn()"
         },
         "handleKey": {
          "!type": "fn()"
         },
         "__Constraints": {}
        },
        "_base": {},
        "WidgetSet": {
         "constructor": {
          "!type": "fn()"
         },
         "add": {
          "!type": "fn()"
         },
         "remove": {
          "!type": "fn()"
         },
         "forEach": {
          "!type": "fn()"
         },
         "filter": {
          "!type": "fn()"
         },
         "byId": {
          "!type": "fn()"
         },
         "byClass": {
          "!type": "fn()"
         }
        },
        "_tabElements": {},
        "BackgroundIframe": {
         "destroy": {
          "!type": "fn()"
         }
        },
        "popup": {
         "__OpenArgs": {
          "!type": "fn()"
         }
        },
        "typematic": {
         "_fireEventAndReload": {
          "!type": "fn()"
         },
         "trigger": {
          "!type": "fn()"
         },
         "stop": {
          "!type": "fn()"
         },
         "addKeyListener": {
          "!type": "fn()"
         },
         "addMouseListener": {
          "!type": "fn()"
         },
         "addListener": {
          "!type": "fn()"
         }
        },
        "wai": {
         "onload": {
          "!type": "fn()"
         }
        },
        "range": {
         "getIndex": {
          "!type": "fn()"
         },
         "getNode": {
          "!type": "fn()"
         },
         "getCommonAncestor": {
          "!type": "fn()"
         },
         "getAncestor": {
          "!type": "fn()"
         },
         "getBlockAncestor": {
          "!type": "fn()"
         },
         "atBeginningOfContainer": {
          "!type": "fn()"
         },
         "atEndOfContainer": {
          "!type": "fn()"
         },
         "adjacentNoneTextNode": {
          "!type": "fn()"
         },
         "create": {
          "!type": "fn()"
         },
         "getSelection": {
          "!type": "fn()"
         },
         "W3CRange": {
          "constructor": {
           "!type": "fn()"
          },
          "_updateInternal": {
           "!type": "fn()"
          },
          "setStart": {
           "!type": "fn()"
          },
          "setEnd": {
           "!type": "fn()"
          },
          "setStartAfter": {
           "!type": "fn()"
          },
          "setStartBefore": {
           "!type": "fn()"
          },
          "setEndAfter": {
           "!type": "fn()"
          },
          "setEndBefore": {
           "!type": "fn()"
          },
          "_setPoint": {
           "!type": "fn()"
          },
          "_getIERange": {
           "!type": "fn()"
          },
          "getBookmark": {
           "!type": "fn()"
          },
          "_select": {
           "!type": "fn()"
          },
          "deleteContents": {
           "!type": "fn()"
          },
          "cloneRange": {
           "!type": "fn()"
          },
          "detach": {
           "!type": "fn()"
          }
         },
         "ie": {
          "selection": {
           "!type": "fn()"
          },
          "decomposeControlRange": {
           "!type": "fn()"
          },
          "getEndPoint": {
           "!type": "fn()"
          },
          "setEndPoint": {
           "!type": "fn()"
          },
          "decomposeTextRange": {
           "!type": "fn()"
          },
          "setRange": {
           "!type": "fn()"
          }
         }
        },
        "_tree": {},
        "form": {
         "Button": {
          "_onClick": {
           "!type": "fn()"
          },
          "_onButtonClick": {
           "!type": "fn()"
          },
          "_setValueAttr": {
           "!type": "fn()"
          },
          "_fillContent": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "_setShowLabelAttr": {
           "!type": "fn()"
          },
          "onClick": {
           "!type": "fn()"
          },
          "_clicked": {
           "!type": "fn()"
          },
          "setLabel": {
           "!type": "fn()"
          },
          "_setLabelAttr": {
           "!type": "fn()"
          }
         },
         "DropDownButton": {
          "_fillContent": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "destroyDescendants": {
           "!type": "fn()"
          },
          "_onArrowClick": {
           "!type": "fn()"
          },
          "_onDropDownClick": {
           "!type": "fn()"
          },
          "_onDropDownKeydown": {
           "!type": "fn()"
          },
          "_onDropDownBlur": {
           "!type": "fn()"
          },
          "_onKey": {
           "!type": "fn()"
          },
          "_onBlur": {
           "!type": "fn()"
          },
          "_toggleDropDown": {
           "!type": "fn()"
          },
          "_openDropDown": {
           "!type": "fn()"
          },
          "_closeDropDown": {
           "!type": "fn()"
          }
         },
         "ComboButton": {
          "postCreate": {
           "!type": "fn()"
          },
          "focusFocalNode": {
           "!type": "fn()"
          },
          "hasNextFocalNode": {
           "!type": "fn()"
          },
          "focusNext": {
           "!type": "fn()"
          },
          "hasPrevFocalNode": {
           "!type": "fn()"
          },
          "focusPrev": {
           "!type": "fn()"
          },
          "getFocalNodes": {
           "!type": "fn()"
          },
          "_onNodeFocus": {
           "!type": "fn()"
          },
          "_onNodeBlur": {
           "!type": "fn()"
          },
          "_onBlur": {
           "!type": "fn()"
          }
         },
         "ToggleButton": {
          "_clicked": {
           "!type": "fn()"
          },
          "_setCheckedAttr": {
           "!type": "fn()"
          },
          "setChecked": {
           "!type": "fn()"
          },
          "reset": {
           "!type": "fn()"
          }
         },
         "CheckBox": {
          "_setValueAttr": {
           "!type": "fn()"
          },
          "_getValueAttr": {
           "!type": "fn()"
          },
          "postMixInProperties": {
           "!type": "fn()"
          },
          "_fillContent": {
           "!type": "fn()"
          },
          "reset": {
           "!type": "fn()"
          },
          "_onFocus": {
           "!type": "fn()"
          },
          "_onBlur": {
           "!type": "fn()"
          }
         },
         "RadioButton": {
          "_setCheckedAttr": {
           "!type": "fn()"
          },
          "_clicked": {
           "!type": "fn()"
          }
         },
         "_ComboBoxDataStore": {
          "constructor": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "isItemLoaded": {
           "!type": "fn()"
          },
          "getFeatures": {
           "!type": "fn()"
          },
          "_fetchItems": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          },
          "getLabel": {
           "!type": "fn()"
          },
          "getIdentity": {
           "!type": "fn()"
          },
          "fetchItemByIdentity": {
           "!type": "fn()"
          },
          "fetchSelectedItem": {
           "!type": "fn()"
          }
         },
         "ComboBoxMixin": {
          "_getCaretPos": {
           "!type": "fn()"
          },
          "_setCaretPos": {
           "!type": "fn()"
          },
          "_setDisabledAttr": {
           "!type": "fn()"
          },
          "_onKeyPress": {
           "!type": "fn()"
          },
          "_autoCompleteText": {
           "!type": "fn()"
          },
          "_openResultList": {
           "!type": "fn()"
          },
          "_showResultList": {
           "!type": "fn()"
          },
          "_hideResultList": {
           "!type": "fn()"
          },
          "_setBlurValue": {
           "!type": "fn()"
          },
          "_onBlur": {
           "!type": "fn()"
          },
          "_announceOption": {
           "!type": "fn()"
          },
          "_selectOption": {
           "!type": "fn()"
          },
          "_doSelect": {
           "!type": "fn()"
          },
          "_onArrowMouseDown": {
           "!type": "fn()"
          },
          "_startSearchFromInput": {
           "!type": "fn()"
          },
          "_getQueryString": {
           "!type": "fn()"
          },
          "_startSearch": {
           "!type": "fn()"
          },
          "_setMaxOptions": {
           "!type": "fn()"
          },
          "_getValueField": {
           "!type": "fn()"
          },
          "_arrowPressed": {
           "!type": "fn()"
          },
          "_arrowIdle": {
           "!type": "fn()"
          },
          "compositionend": {
           "!type": "fn()"
          },
          "constructor": {
           "!type": "fn()"
          },
          "postMixInProperties": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "uninitialize": {
           "!type": "fn()"
          },
          "_getMenuLabelFromItem": {
           "!type": "fn()"
          },
          "doHighlight": {
           "!type": "fn()"
          },
          "_escapeHtml": {
           "!type": "fn()"
          },
          "open": {
           "!type": "fn()"
          },
          "reset": {
           "!type": "fn()"
          }
         },
         "_ComboBoxMenu": {
          "postMixInProperties": {
           "!type": "fn()"
          },
          "_setValueAttr": {
           "!type": "fn()"
          },
          "onChange": {
           "!type": "fn()"
          },
          "onPage": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "onClose": {
           "!type": "fn()"
          },
          "_createOption": {
           "!type": "fn()"
          },
          "createOptions": {
           "!type": "fn()"
          },
          "clearResultList": {
           "!type": "fn()"
          },
          "_onMouseDown": {
           "!type": "fn()"
          },
          "_onMouseUp": {
           "!type": "fn()"
          },
          "_onMouseOver": {
           "!type": "fn()"
          },
          "_onMouseOut": {
           "!type": "fn()"
          },
          "_focusOptionNode": {
           "!type": "fn()"
          },
          "_blurOptionNode": {
           "!type": "fn()"
          },
          "_highlightNextOption": {
           "!type": "fn()"
          },
          "highlightFirstOption": {
           "!type": "fn()"
          },
          "highlightLastOption": {
           "!type": "fn()"
          },
          "_highlightPrevOption": {
           "!type": "fn()"
          },
          "_page": {
           "!type": "fn()"
          },
          "pageUp": {
           "!type": "fn()"
          },
          "pageDown": {
           "!type": "fn()"
          },
          "getHighlightedOption": {
           "!type": "fn()"
          },
          "handleKey": {
           "!type": "fn()"
          }
         },
         "ComboBox": {
          "_setValueAttr": {
           "!type": "fn()"
          }
         },
         "CurrencyTextBox": {
          "parse": {
           "!type": "fn()"
          },
          "postMixInProperties": {
           "!type": "fn()"
          },
          "__Constraints": {}
         },
         "DateTextBox": {},
         "FilteringSelect": {
          "isValid": {
           "!type": "fn()"
          },
          "_callbackSetLabel": {
           "!type": "fn()"
          },
          "_openResultList": {
           "!type": "fn()"
          },
          "_getValueAttr": {
           "!type": "fn()"
          },
          "_getValueField": {
           "!type": "fn()"
          },
          "_setValue": {
           "!type": "fn()"
          },
          "_setValueAttr": {
           "!type": "fn()"
          },
          "_setValueFromItem": {
           "!type": "fn()"
          },
          "labelFunc": {
           "!type": "fn()"
          },
          "_doSelect": {
           "!type": "fn()"
          },
          "_getDisplayQueryString": {
           "!type": "fn()"
          },
          "_setDisplayedValueAttr": {
           "!type": "fn()"
          },
          "postMixInProperties": {
           "!type": "fn()"
          },
          "undo": {
           "!type": "fn()"
          }
         },
         "Form": {
          "postMixInProperties": {
           "!type": "fn()"
          },
          "execute": {
           "!type": "fn()"
          },
          "onExecute": {
           "!type": "fn()"
          },
          "_setEncTypeAttr": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "onReset": {
           "!type": "fn()"
          },
          "_onReset": {
           "!type": "fn()"
          },
          "_onSubmit": {
           "!type": "fn()"
          },
          "onSubmit": {
           "!type": "fn()"
          },
          "submit": {
           "!type": "fn()"
          }
         },
         "HorizontalRule": {
          "_genHTML": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          }
         },
         "HorizontalRuleLabels": {
          "_calcPosition": {
           "!type": "fn()"
          },
          "_genHTML": {
           "!type": "fn()"
          },
          "getLabels": {
           "!type": "fn()"
          },
          "postMixInProperties": {
           "!type": "fn()"
          },
          "constraints": {}
         },
         "HorizontalSlider": {
          "_onKeyPress": {
           "!type": "fn()"
          },
          "_onHandleClick": {
           "!type": "fn()"
          },
          "_isReversed": {
           "!type": "fn()"
          },
          "_onBarClick": {
           "!type": "fn()"
          },
          "_setPixelValue": {
           "!type": "fn()"
          },
          "_setValueAttr": {
           "!type": "fn()"
          },
          "_bumpValue": {
           "!type": "fn()"
          },
          "_onClkBumper": {
           "!type": "fn()"
          },
          "_onClkIncBumper": {
           "!type": "fn()"
          },
          "_onClkDecBumper": {
           "!type": "fn()"
          },
          "decrement": {
           "!type": "fn()"
          },
          "increment": {
           "!type": "fn()"
          },
          "_mouseWheeled": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "_typematicCallback": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          }
         },
         "_SliderMover": {
          "onMouseMove": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          }
         },
         "MappedTextBox": {
          "postMixInProperties": {
           "!type": "fn()"
          },
          "serialize": {
           "!type": "fn()"
          },
          "toString": {
           "!type": "fn()"
          },
          "validate": {
           "!type": "fn()"
          },
          "buildRendering": {
           "!type": "fn()"
          },
          "_setDisabledAttr": {
           "!type": "fn()"
          },
          "reset": {
           "!type": "fn()"
          }
         },
         "MultiSelect": {
          "reset": {
           "!type": "fn()"
          },
          "addSelected": {
           "!type": "fn()"
          },
          "getSelected": {
           "!type": "fn()"
          },
          "_getValueAttr": {
           "!type": "fn()"
          },
          "_setValueAttr": {
           "!type": "fn()"
          },
          "invertSelection": {
           "!type": "fn()"
          },
          "_onChange": {
           "!type": "fn()"
          },
          "resize": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          }
         },
         "NumberSpinner": {
          "adjust": {
           "!type": "fn()"
          },
          "_onKeyPress": {
           "!type": "fn()"
          }
         },
         "NumberTextBox": {
          "__Constraints": {}
         },
         "NumberTextBoxMixin": {
          "_formatter": {
           "!type": "fn()"
          },
          "postMixInProperties": {
           "!type": "fn()"
          },
          "_onFocus": {
           "!type": "fn()"
          },
          "format": {
           "!type": "fn()"
          },
          "parse": {
           "!type": "fn()"
          },
          "_getDisplayedValueAttr": {
           "!type": "fn()"
          },
          "filter": {
           "!type": "fn()"
          },
          "serialize": {
           "!type": "fn()"
          },
          "_setValueAttr": {
           "!type": "fn()"
          },
          "_getValueAttr": {
           "!type": "fn()"
          },
          "editOptions": {}
         },
         "RangeBoundTextBox": {
          "rangeCheck": {
           "!type": "fn()"
          },
          "isInRange": {
           "!type": "fn()"
          },
          "_isDefinitelyOutOfRange": {
           "!type": "fn()"
          },
          "_isValidSubset": {
           "!type": "fn()"
          },
          "isValid": {
           "!type": "fn()"
          },
          "getErrorMessage": {
           "!type": "fn()"
          },
          "postMixInProperties": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "_setValueAttr": {
           "!type": "fn()"
          },
          "__Constraints": {
           "!type": "fn()"
          }
         },
         "SimpleTextarea": {
          "postMixInProperties": {
           "!type": "fn()"
          },
          "filter": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "_onInput": {
           "!type": "fn()"
          }
         },
         "TextBox": {
          "_getValueAttr": {
           "!type": "fn()"
          },
          "_setValueAttr": {
           "!type": "fn()"
          },
          "getDisplayedValue": {
           "!type": "fn()"
          },
          "_getDisplayedValueAttr": {
           "!type": "fn()"
          },
          "setDisplayedValue": {
           "!type": "fn()"
          },
          "_setDisplayedValueAttr": {
           "!type": "fn()"
          },
          "format": {
           "!type": "fn()"
          },
          "parse": {
           "!type": "fn()"
          },
          "_refreshState": {
           "!type": "fn()"
          },
          "_onInput": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "filter": {
           "!type": "fn()"
          },
          "_setBlurValue": {
           "!type": "fn()"
          },
          "_onBlur": {
           "!type": "fn()"
          },
          "_onFocus": {
           "!type": "fn()"
          },
          "reset": {
           "!type": "fn()"
          }
         },
         "Textarea": {
          "_getHeight": {
           "!type": "fn()"
          },
          "_onInput": {
           "!type": "fn()"
          },
          "_shrink": {
           "!type": "fn()"
          },
          "resize": {
           "!type": "fn()"
          },
          "_setValueAttr": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          }
         },
         "TimeTextBox": {
          "__Constraints": {}
         },
         "ValidationTextBox": {
          "regExpGen": {
           "!type": "fn()"
          },
          "_setValueAttr": {
           "!type": "fn()"
          },
          "validator": {
           "!type": "fn()"
          },
          "_isValidSubset": {
           "!type": "fn()"
          },
          "isValid": {
           "!type": "fn()"
          },
          "_isEmpty": {
           "!type": "fn()"
          },
          "getErrorMessage": {
           "!type": "fn()"
          },
          "getPromptMessage": {
           "!type": "fn()"
          },
          "validate": {
           "!type": "fn()"
          },
          "displayMessage": {
           "!type": "fn()"
          },
          "_refreshState": {
           "!type": "fn()"
          },
          "constructor": {
           "!type": "fn()"
          },
          "postMixInProperties": {
           "!type": "fn()"
          },
          "_setDisabledAttr": {
           "!type": "fn()"
          },
          "_setRequiredAttr": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "reset": {
           "!type": "fn()"
          },
          "__Constraints": {
           "!type": "fn()"
          }
         },
         "VerticalRule": {},
         "VerticalRuleLabels": {
          "_calcPosition": {
           "!type": "fn()"
          }
         },
         "VerticalSlider": {
          "startup": {
           "!type": "fn()"
          },
          "_isReversed": {
           "!type": "fn()"
          },
          "_rtlRectify": {
           "!type": "fn()"
          }
         },
         "_DateTimeTextBox": {
          "format": {
           "!type": "fn()"
          },
          "parse": {
           "!type": "fn()"
          },
          "serialize": {
           "!type": "fn()"
          },
          "constructor": {
           "!type": "fn()"
          },
          "postMixInProperties": {
           "!type": "fn()"
          },
          "_onFocus": {
           "!type": "fn()"
          },
          "_setValueAttr": {
           "!type": "fn()"
          },
          "_open": {
           "!type": "fn()"
          },
          "_close": {
           "!type": "fn()"
          },
          "_onBlur": {
           "!type": "fn()"
          },
          "_getDisplayedValueAttr": {
           "!type": "fn()"
          },
          "_setDisplayedValueAttr": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "_onKeyPress": {
           "!type": "fn()"
          },
          "__Constraints": {}
         },
         "_FormMixin": {
          "reset": {
           "!type": "fn()"
          },
          "validate": {
           "!type": "fn()"
          },
          "setValues": {
           "!type": "fn()"
          },
          "_setValueAttr": {
           "!type": "fn()"
          },
          "getValues": {
           "!type": "fn()"
          },
          "_getValueAttr": {
           "!type": "fn()"
          },
          "isValid": {
           "!type": "fn()"
          },
          "onValidStateChange": {
           "!type": "fn()"
          },
          "_widgetChange": {
           "!type": "fn()"
          },
          "connectChildren": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          }
         },
         "_FormWidget": {
          "postMixInProperties": {
           "!type": "fn()"
          },
          "_setDisabledAttr": {
           "!type": "fn()"
          },
          "setDisabled": {
           "!type": "fn()"
          },
          "_onFocus": {
           "!type": "fn()"
          },
          "_onMouse": {
           "!type": "fn()"
          },
          "isFocusable": {
           "!type": "fn()"
          },
          "focus": {
           "!type": "fn()"
          },
          "_setStateClass": {
           "!type": "fn()"
          },
          "compare": {
           "!type": "fn()"
          },
          "onChange": {
           "!type": "fn()"
          },
          "_handleOnChange": {
           "!type": "fn()"
          },
          "create": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "setValue": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "_layoutHack": {
           "!type": "fn()"
          }
         },
         "_FormValueWidget": {
          "_setReadOnlyAttr": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "_setValueAttr": {
           "!type": "fn()"
          },
          "_getValueAttr": {
           "!type": "fn()"
          },
          "undo": {
           "!type": "fn()"
          },
          "reset": {
           "!type": "fn()"
          },
          "_onKeyDown": {
           "!type": "fn()"
          },
          "_layoutHackIE7": {
           "!type": "fn()"
          }
         },
         "_Spinner": {
          "adjust": {
           "!type": "fn()"
          },
          "_arrowState": {
           "!type": "fn()"
          },
          "_arrowPressed": {
           "!type": "fn()"
          },
          "_arrowReleased": {
           "!type": "fn()"
          },
          "_typematicCallback": {
           "!type": "fn()"
          },
          "_mouseWheeled": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          }
         },
         "_SliderMoverMax": {
          "onMouseMove": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          }
         },
         "_SliderBarMover": {
          "onMouseMove": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          }
         }
        },
        "layout": {
         "marginBox2contentBox": {
          "!type": "fn()"
         },
         "layoutChildren": {
          "!type": "fn()"
         },
         "AccordionContainer": {
          "postCreate": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "_getTargetHeight": {
           "!type": "fn()"
          },
          "layout": {
           "!type": "fn()"
          },
          "_setupChild": {
           "!type": "fn()"
          },
          "removeChild": {
           "!type": "fn()"
          },
          "getChildren": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "_transition": {
           "!type": "fn()"
          },
          "_onKeyPress": {
           "!type": "fn()"
          }
         },
         "_AccordionButton": {
          "getParent": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "getTitleHeight": {
           "!type": "fn()"
          },
          "_onTitleClick": {
           "!type": "fn()"
          },
          "_onTitleEnter": {
           "!type": "fn()"
          },
          "_onTitleLeave": {
           "!type": "fn()"
          },
          "_onTitleKeyPress": {
           "!type": "fn()"
          },
          "_setSelectedState": {
           "!type": "fn()"
          },
          "_handleFocus": {
           "!type": "fn()"
          },
          "setSelected": {
           "!type": "fn()"
          }
         },
         "AccordionPane": {
          "constructor": {
           "!type": "fn()"
          },
          "onSelected": {
           "!type": "fn()"
          }
         },
         "BorderContainer": {
          "postMixInProperties": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "_setupChild": {
           "!type": "fn()"
          },
          "_computeSplitterThickness": {
           "!type": "fn()"
          },
          "layout": {
           "!type": "fn()"
          },
          "addChild": {
           "!type": "fn()"
          },
          "removeChild": {
           "!type": "fn()"
          },
          "getChildren": {
           "!type": "fn()"
          },
          "getSplitter": {
           "!type": "fn()"
          },
          "resize": {
           "!type": "fn()"
          },
          "_layoutChildren": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          }
         },
         "_Splitter": {
          "postCreate": {
           "!type": "fn()"
          },
          "_computeMaxSize": {
           "!type": "fn()"
          },
          "_startDrag": {
           "!type": "fn()"
          },
          "_stopDrag": {
           "!type": "fn()"
          },
          "_cleanupHandlers": {
           "!type": "fn()"
          },
          "_onKeyPress": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          }
         },
         "_Gutter": {
          "postCreate": {
           "!type": "fn()"
          }
         },
         "ContentPane": {
          "postMixInProperties": {
           "!type": "fn()"
          },
          "buildRendering": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "_checkIfSingleChild": {
           "!type": "fn()"
          },
          "setHref": {
           "!type": "fn()"
          },
          "_setHrefAttr": {
           "!type": "fn()"
          },
          "setContent": {
           "!type": "fn()"
          },
          "_setContentAttr": {
           "!type": "fn()"
          },
          "_getContentAttr": {
           "!type": "fn()"
          },
          "cancel": {
           "!type": "fn()"
          },
          "uninitialize": {
           "!type": "fn()"
          },
          "destroyRecursive": {
           "!type": "fn()"
          },
          "resize": {
           "!type": "fn()"
          },
          "_isShown": {
           "!type": "fn()"
          },
          "_onShow": {
           "!type": "fn()"
          },
          "_loadCheck": {
           "!type": "fn()"
          },
          "refresh": {
           "!type": "fn()"
          },
          "_onLoadHandler": {
           "!type": "fn()"
          },
          "_onUnloadHandler": {
           "!type": "fn()"
          },
          "destroyDescendants": {
           "!type": "fn()"
          },
          "_setContent": {
           "!type": "fn()"
          },
          "_onError": {
           "!type": "fn()"
          },
          "_scheduleLayout": {
           "!type": "fn()"
          },
          "_layoutChildren": {
           "!type": "fn()"
          },
          "onLoad": {
           "!type": "fn()"
          },
          "onUnload": {
           "!type": "fn()"
          },
          "onDownloadStart": {
           "!type": "fn()"
          },
          "onContentError": {
           "!type": "fn()"
          },
          "onDownloadError": {
           "!type": "fn()"
          },
          "onDownloadEnd": {
           "!type": "fn()"
          }
         },
         "LayoutContainer": {
          "constructor": {
           "!type": "fn()"
          },
          "layout": {
           "!type": "fn()"
          },
          "addChild": {
           "!type": "fn()"
          },
          "removeChild": {
           "!type": "fn()"
          }
         },
         "LinkPane": {
          "postMixInProperties": {
           "!type": "fn()"
          },
          "_fillContent": {
           "!type": "fn()"
          }
         },
         "SplitContainer": {
          "constructor": {
           "!type": "fn()"
          },
          "postMixInProperties": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "_setupChild": {
           "!type": "fn()"
          },
          "_onSizerMouseDown": {
           "!type": "fn()"
          },
          "_addSizer": {
           "!type": "fn()"
          },
          "removeChild": {
           "!type": "fn()"
          },
          "addChild": {
           "!type": "fn()"
          },
          "layout": {
           "!type": "fn()"
          },
          "_movePanel": {
           "!type": "fn()"
          },
          "_moveSlider": {
           "!type": "fn()"
          },
          "_growPane": {
           "!type": "fn()"
          },
          "_checkSizes": {
           "!type": "fn()"
          },
          "beginSizing": {
           "!type": "fn()"
          },
          "changeSizing": {
           "!type": "fn()"
          },
          "endSizing": {
           "!type": "fn()"
          },
          "movePoint": {
           "!type": "fn()"
          },
          "legaliseSplitPoint": {
           "!type": "fn()"
          },
          "_updateSize": {
           "!type": "fn()"
          },
          "_showSizingLine": {
           "!type": "fn()"
          },
          "_hideSizingLine": {
           "!type": "fn()"
          },
          "_moveSizingLine": {
           "!type": "fn()"
          },
          "_getCookieName": {
           "!type": "fn()"
          },
          "_restoreState": {
           "!type": "fn()"
          },
          "_saveState": {
           "!type": "fn()"
          }
         },
         "StackContainer": {
          "postCreate": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "_setupChild": {
           "!type": "fn()"
          },
          "addChild": {
           "!type": "fn()"
          },
          "removeChild": {
           "!type": "fn()"
          },
          "selectChild": {
           "!type": "fn()"
          },
          "_transition": {
           "!type": "fn()"
          },
          "_adjacent": {
           "!type": "fn()"
          },
          "forward": {
           "!type": "fn()"
          },
          "back": {
           "!type": "fn()"
          },
          "_onKeyPress": {
           "!type": "fn()"
          },
          "layout": {
           "!type": "fn()"
          },
          "_showChild": {
           "!type": "fn()"
          },
          "_hideChild": {
           "!type": "fn()"
          },
          "closeChild": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          }
         },
         "StackController": {
          "postCreate": {
           "!type": "fn()"
          },
          "onStartup": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "onAddChild": {
           "!type": "fn()"
          },
          "onRemoveChild": {
           "!type": "fn()"
          },
          "onSelectChild": {
           "!type": "fn()"
          },
          "onButtonClick": {
           "!type": "fn()"
          },
          "onCloseButtonClick": {
           "!type": "fn()"
          },
          "adjacent": {
           "!type": "fn()"
          },
          "onkeypress": {
           "!type": "fn()"
          },
          "onContainerKeyPress": {
           "!type": "fn()"
          }
         },
         "_StackButton": {
          "postCreate": {
           "!type": "fn()"
          },
          "onClick": {
           "!type": "fn()"
          },
          "onClickCloseButton": {
           "!type": "fn()"
          }
         },
         "TabContainer": {
          "postMixInProperties": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "_setupChild": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "layout": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          }
         },
         "TabController": {
          "_rectifyRtlTabList": {
           "!type": "fn()"
          }
         },
         "_TabButton": {
          "postCreate": {
           "!type": "fn()"
          },
          "_onCloseButtonEnter": {
           "!type": "fn()"
          },
          "_onCloseButtonLeave": {
           "!type": "fn()"
          }
         },
         "_LayoutWidget": {
          "postCreate": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "resize": {
           "!type": "fn()"
          },
          "layout": {
           "!type": "fn()"
          },
          "_setupChild": {
           "!type": "fn()"
          },
          "addChild": {
           "!type": "fn()"
          },
          "removeChild": {
           "!type": "fn()"
          }
         }
        },
        "tree": {
         "__SourceArgs": {
          "!type": "fn()"
         },
         "ForestStoreModel": {
          "constructor": {
           "!type": "fn()"
          },
          "mayHaveChildren": {
           "!type": "fn()"
          },
          "getChildren": {
           "!type": "fn()"
          },
          "getIdentity": {
           "!type": "fn()"
          },
          "getLabel": {
           "!type": "fn()"
          },
          "newItem": {
           "!type": "fn()"
          },
          "onNewRootItem": {
           "!type": "fn()"
          },
          "pasteItem": {
           "!type": "fn()"
          },
          "onAddToRoot": {
           "!type": "fn()"
          },
          "onLeaveRoot": {
           "!type": "fn()"
          },
          "_requeryTop": {
           "!type": "fn()"
          },
          "_onNewItem": {
           "!type": "fn()"
          },
          "_onDeleteItem": {
           "!type": "fn()"
          }
         },
         "TreeStoreModel": {
          "constructor": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "getRoot": {
           "!type": "fn()"
          },
          "mayHaveChildren": {
           "!type": "fn()"
          },
          "getChildren": {
           "!type": "fn()"
          },
          "getIdentity": {
           "!type": "fn()"
          },
          "getLabel": {
           "!type": "fn()"
          },
          "newItem": {
           "!type": "fn()"
          },
          "pasteItem": {
           "!type": "fn()"
          },
          "onChange": {
           "!type": "fn()"
          },
          "onChildrenChange": {
           "!type": "fn()"
          },
          "onDelete": {
           "!type": "fn()"
          },
          "_onNewItem": {
           "!type": "fn()"
          },
          "_onDeleteItem": {
           "!type": "fn()"
          },
          "_onSetItem": {
           "!type": "fn()"
          }
         },
         "_dndContainer": {
          "constructor": {
           "!type": "fn()"
          },
          "getItem": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "onMouseOver": {
           "!type": "fn()"
          },
          "onMouseOut": {
           "!type": "fn()"
          },
          "_changeState": {
           "!type": "fn()"
          },
          "_addItemClass": {
           "!type": "fn()"
          },
          "_removeItemClass": {
           "!type": "fn()"
          },
          "onOverEvent": {
           "!type": "fn()"
          },
          "onOutEvent": {
           "!type": "fn()"
          }
         },
         "_dndSelector": {
          "constructor": {
           "!type": "fn()"
          },
          "getSelectedNodes": {
           "!type": "fn()"
          },
          "selectNone": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "onMouseDown": {
           "!type": "fn()"
          },
          "onMouseUp": {
           "!type": "fn()"
          },
          "_removeSelection": {
           "!type": "fn()"
          },
          "_removeAnchor": {
           "!type": "fn()"
          }
         },
         "dndSource": {
          "constructor": {
           "!type": "fn()"
          },
          "checkAcceptance": {
           "!type": "fn()"
          },
          "copyState": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "_onDragMouse": {
           "!type": "fn()"
          },
          "onMouseMove": {
           "!type": "fn()"
          },
          "onMouseDown": {
           "!type": "fn()"
          },
          "onMouseUp": {
           "!type": "fn()"
          },
          "onMouseOver": {
           "!type": "fn()"
          },
          "onMouseOut": {
           "!type": "fn()"
          },
          "checkItemAcceptance": {
           "!type": "fn()"
          },
          "onDndSourceOver": {
           "!type": "fn()"
          },
          "onDndStart": {
           "!type": "fn()"
          },
          "itemCreator": {
           "!type": "fn()"
          },
          "onDndDrop": {
           "!type": "fn()"
          },
          "onDndCancel": {
           "!type": "fn()"
          },
          "onOverEvent": {
           "!type": "fn()"
          },
          "onOutEvent": {
           "!type": "fn()"
          },
          "_unmarkTargetAnchor": {
           "!type": "fn()"
          },
          "_markDndStatus": {
           "!type": "fn()"
          }
         },
         "model": {
          "destroy": {
           "!type": "fn()"
          },
          "getRoot": {
           "!type": "fn()"
          },
          "mayHaveChildren": {
           "!type": "fn()"
          },
          "getChildren": {
           "!type": "fn()"
          },
          "getIdentity": {
           "!type": "fn()"
          },
          "getLabel": {
           "!type": "fn()"
          },
          "newItem": {
           "!type": "fn()"
          },
          "pasteItem": {
           "!type": "fn()"
          },
          "onChange": {
           "!type": "fn()"
          },
          "onChildrenChange": {
           "!type": "fn()"
          }
         }
        }
       },
       "dojo": {
        "string": {
         "substitute": {
          "!type": "fn()"
         },
         "rep": {
          "!type": "fn()"
         },
         "pad": {
          "!type": "fn()"
         },
         "trim": {
          "!type": "fn()"
         }
        },
        "date": {
         "stamp": {
          "fromISOString": {
           "!type": "fn()"
          },
          "__Options": {
           "!type": "fn()"
          },
          "toISOString": {
           "!type": "fn()"
          }
         },
         "compare": {
          "!type": "fn()"
         },
         "getDaysInMonth": {
          "!type": "fn()"
         },
         "isLeapYear": {
          "!type": "fn()"
         },
         "getTimezoneName": {
          "!type": "fn()"
         },
         "add": {
          "!type": "fn()"
         },
         "difference": {
          "!type": "fn()"
         },
         "locale": {
          "__FormatOptions": {
           "!type": "fn()"
          },
          "format": {
           "!type": "fn()"
          },
          "regexp": {
           "!type": "fn()"
          },
          "_parseInfo": {
           "!type": "fn()"
          },
          "parse": {
           "!type": "fn()"
          },
          "addCustomFormats": {
           "!type": "fn()"
          },
          "_getGregorianBundle": {
           "!type": "fn()"
          },
          "getNames": {
           "!type": "fn()"
          },
          "displayPattern": {
           "!type": "fn()"
          },
          "isWeekend": {
           "!type": "fn()"
          },
          "_getDayOfYear": {
           "!type": "fn()"
          },
          "_getWeekOfYear": {
           "!type": "fn()"
          }
         }
        },
        "doc": {
         "documentElement": {
          "style": {}
         }
        },
        "dnd": {
         "_createNode": {
          "!type": "fn()"
         },
         "_createTrTd": {
          "!type": "fn()"
         },
         "_createSpan": {
          "!type": "fn()"
         },
         "_defaultCreator": {
          "!type": "fn()"
         },
         "manager": {
          "!type": "fn()"
         },
         "__SourceArgs": {
          "!type": "fn()"
         },
         "getViewport": {
          "!type": "fn()"
         },
         "autoScroll": {
          "!type": "fn()"
         },
         "autoScrollNodes": {
          "!type": "fn()"
         },
         "getCopyKeyState": {
          "!type": "fn()"
         },
         "getUniqueId": {
          "!type": "fn()"
         },
         "isFormElement": {
          "!type": "fn()"
         },
         "_isLmbPressed": {
          "!type": "fn()"
         },
         "Avatar": {
          "constructor": {
           "!type": "fn()"
          },
          "construct": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "update": {
           "!type": "fn()"
          },
          "_generateText": {
           "!type": "fn()"
          }
         },
         "Container": {
          "constructor": {
           "!type": "fn()"
          },
          "getItem": {
           "!type": "fn()"
          },
          "setItem": {
           "!type": "fn()"
          },
          "delItem": {
           "!type": "fn()"
          },
          "forInItems": {
           "!type": "fn()"
          },
          "clearItems": {
           "!type": "fn()"
          },
          "getAllNodes": {
           "!type": "fn()"
          },
          "sync": {
           "!type": "fn()"
          },
          "insertNodes": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "markupFactory": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "onMouseOver": {
           "!type": "fn()"
          },
          "onMouseOut": {
           "!type": "fn()"
          },
          "onSelectStart": {
           "!type": "fn()"
          },
          "onOverEvent": {
           "!type": "fn()"
          },
          "onOutEvent": {
           "!type": "fn()"
          },
          "_changeState": {
           "!type": "fn()"
          },
          "_addItemClass": {
           "!type": "fn()"
          },
          "_removeItemClass": {
           "!type": "fn()"
          },
          "_getChildByEvent": {
           "!type": "fn()"
          },
          "_normalizedCreator": {
           "!type": "fn()"
          }
         },
         "_defaultCreatorNodes": {},
         "Manager": {
          "constructor": {
           "!type": "fn()"
          },
          "overSource": {
           "!type": "fn()"
          },
          "outSource": {
           "!type": "fn()"
          },
          "startDrag": {
           "!type": "fn()"
          },
          "canDrop": {
           "!type": "fn()"
          },
          "stopDrag": {
           "!type": "fn()"
          },
          "makeAvatar": {
           "!type": "fn()"
          },
          "updateAvatar": {
           "!type": "fn()"
          },
          "onMouseMove": {
           "!type": "fn()"
          },
          "onMouseUp": {
           "!type": "fn()"
          },
          "onKeyDown": {
           "!type": "fn()"
          },
          "onKeyUp": {
           "!type": "fn()"
          },
          "_setCopyStatus": {
           "!type": "fn()"
          }
         },
         "Moveable": {
          "constructor": {
           "!type": "fn()"
          },
          "markupFactory": {
           "!type": "fn()"
          },
          "destroy": {
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
          "onSelectStart": {
           "!type": "fn()"
          },
          "onDragDetected": {
           "!type": "fn()"
          },
          "onMoveStart": {
           "!type": "fn()"
          },
          "onMoveStop": {
           "!type": "fn()"
          },
          "onFirstMove": {
           "!type": "fn()"
          },
          "onMove": {
           "!type": "fn()"
          },
          "onMoving": {
           "!type": "fn()"
          },
          "onMoved": {
           "!type": "fn()"
          }
         },
         "Mover": {
          "constructor": {
           "!type": "fn()"
          },
          "onMouseMove": {
           "!type": "fn()"
          },
          "onMouseUp": {
           "!type": "fn()"
          },
          "onFirstMove": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          }
         },
         "Selector": {
          "constructor": {
           "!type": "fn()"
          },
          "getSelectedNodes": {
           "!type": "fn()"
          },
          "selectNone": {
           "!type": "fn()"
          },
          "selectAll": {
           "!type": "fn()"
          },
          "deleteSelectedNodes": {
           "!type": "fn()"
          },
          "forInSelectedItems": {
           "!type": "fn()"
          },
          "sync": {
           "!type": "fn()"
          },
          "insertNodes": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "markupFactory": {
           "!type": "fn()"
          },
          "onMouseDown": {
           "!type": "fn()"
          },
          "onMouseUp": {
           "!type": "fn()"
          },
          "onMouseMove": {
           "!type": "fn()"
          },
          "onOverEvent": {
           "!type": "fn()"
          },
          "onOutEvent": {
           "!type": "fn()"
          },
          "_removeSelection": {
           "!type": "fn()"
          },
          "_removeAnchor": {
           "!type": "fn()"
          }
         },
         "Source": {
          "constructor": {
           "!type": "fn()"
          },
          "checkAcceptance": {
           "!type": "fn()"
          },
          "copyState": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "markupFactory": {
           "!type": "fn()"
          },
          "onMouseMove": {
           "!type": "fn()"
          },
          "onMouseDown": {
           "!type": "fn()"
          },
          "onMouseUp": {
           "!type": "fn()"
          },
          "onDndSourceOver": {
           "!type": "fn()"
          },
          "onDndStart": {
           "!type": "fn()"
          },
          "onDndDrop": {
           "!type": "fn()"
          },
          "onDndCancel": {
           "!type": "fn()"
          },
          "onDrop": {
           "!type": "fn()"
          },
          "onDropExternal": {
           "!type": "fn()"
          },
          "onDropInternal": {
           "!type": "fn()"
          },
          "onDraggingOver": {
           "!type": "fn()"
          },
          "onDraggingOut": {
           "!type": "fn()"
          },
          "onOverEvent": {
           "!type": "fn()"
          },
          "onOutEvent": {
           "!type": "fn()"
          },
          "_markTargetAnchor": {
           "!type": "fn()"
          },
          "_unmarkTargetAnchor": {
           "!type": "fn()"
          },
          "_markDndStatus": {
           "!type": "fn()"
          },
          "_legalMouseDown": {
           "!type": "fn()"
          }
         },
         "Target": {
          "constructor": {
           "!type": "fn()"
          },
          "markupFactory": {
           "!type": "fn()"
          }
         },
         "AutoSource": {
          "constructor": {
           "!type": "fn()"
          },
          "markupFactory": {
           "!type": "fn()"
          }
         },
         "TimedMoveable": {
          "constructor": {
           "!type": "fn()"
          },
          "markupFactory": {
           "!type": "fn()"
          },
          "onMoveStop": {
           "!type": "fn()"
          },
          "onMove": {
           "!type": "fn()"
          }
         },
         "_validNodes": {},
         "_validOverflow": {},
         "move": {
          "constrainedMover": {
           "!type": "fn()"
          },
          "boxConstrainedMover": {
           "!type": "fn()"
          },
          "parentConstrainedMover": {
           "!type": "fn()"
          },
          "constrainedMoveable": {
           "markupFactory": {
            "!type": "fn()"
           },
           "constructor": {
            "!type": "fn()"
           },
           "onFirstMove": {
            "!type": "fn()"
           },
           "onMove": {
            "!type": "fn()"
           }
          },
          "boxConstrainedMoveable": {
           "markupFactory": {
            "!type": "fn()"
           },
           "constructor": {
            "!type": "fn()"
           }
          },
          "parentConstrainedMoveable": {
           "markupFactory": {
            "!type": "fn()"
           },
           "constructor": {
            "!type": "fn()"
           }
          }
         }
        },
        "AdapterRegistry": {
         "register": {
          "!type": "fn()"
         },
         "match": {
          "!type": "fn()"
         },
         "unregister": {
          "!type": "fn()"
         }
        },
        "DeferredList": {
         "constructor": {
          "!type": "fn()"
         },
         "_cbDeferred": {
          "!type": "fn()"
         },
         "gatherResults": {
          "!type": "fn()"
         }
        },
        "NodeList": {
         "_anim": {
          "!type": "fn()"
         },
         "wipeIn": {
          "!type": "fn()"
         },
         "wipeOut": {
          "!type": "fn()"
         },
         "slideTo": {
          "!type": "fn()"
         },
         "fadeIn": {
          "!type": "fn()"
         },
         "fadeOut": {
          "!type": "fn()"
         },
         "animateProperty": {
          "!type": "fn()"
         },
         "anim": {
          "!type": "fn()"
         },
         "html": {
          "!type": "fn()"
         },
         "slice": {
          "!type": "fn()"
         },
         "splice": {
          "!type": "fn()"
         },
         "indexOf": {
          "!type": "fn()"
         },
         "lastIndexOf": {
          "!type": "fn()"
         },
         "every": {
          "!type": "fn()"
         },
         "some": {
          "!type": "fn()"
         },
         "concat": {
          "!type": "fn()"
         },
         "map": {
          "!type": "fn()"
         },
         "forEach": {
          "!type": "fn()"
         },
         "coords": {
          "!type": "fn()"
         },
         "addClass": {
          "!type": "fn()"
         },
         "removeClass": {
          "!type": "fn()"
         },
         "toggleClass": {
          "!type": "fn()"
         },
         "connect": {
          "!type": "fn()"
         },
         "empty": {
          "!type": "fn()"
         },
         "place": {
          "!type": "fn()"
         },
         "orphan": {
          "!type": "fn()"
         },
         "adopt": {
          "!type": "fn()"
         },
         "query": {
          "!type": "fn()"
         },
         "filter": {
          "!type": "fn()"
         },
         "instantiate": {
          "!type": "fn()"
         },
         "at": {
          "!type": "fn()"
         },
         "dtl": {
          "!type": "fn()"
         },
         "addClassFx": {
          "!type": "fn()"
         },
         "removeClassFx": {
          "!type": "fn()"
         },
         "toggleClassFx": {
          "!type": "fn()"
         },
         "sizeTo": {
          "!type": "fn()"
         },
         "slideBy": {
          "!type": "fn()"
         },
         "highlight": {
          "!type": "fn()"
         },
         "fadeTo": {
          "!type": "fn()"
         },
         "wipeTo": {
          "!type": "fn()"
         },
         "attr": {
          "safetyCheck": {
           "!type": "fn()"
          }
         },
         "style": {
          "safetyCheck": {
           "!type": "fn()"
          }
         },
         "addContent": {
          "safetyCheck": {
           "!type": "fn()"
          }
         }
        },
        "Color": {
         "_set": {
          "!type": "fn()"
         },
         "setColor": {
          "!type": "fn()"
         },
         "sanitize": {
          "!type": "fn()"
         },
         "toRgb": {
          "!type": "fn()"
         },
         "toRgba": {
          "!type": "fn()"
         },
         "toHex": {
          "!type": "fn()"
         },
         "toCss": {
          "!type": "fn()"
         },
         "toString": {
          "!type": "fn()"
         },
         "named": {}
        },
        "_base": {
         "_loader": {}
        },
        "Deferred": {
         "cancel": {
          "!type": "fn()"
         },
         "_resback": {
          "!type": "fn()"
         },
         "_check": {
          "!type": "fn()"
         },
         "callback": {
          "!type": "fn()"
         },
         "errback": {
          "!type": "fn()"
         },
         "addBoth": {
          "!type": "fn()"
         },
         "addCallback": {
          "!type": "fn()"
         },
         "addErrback": {
          "!type": "fn()"
         },
         "addCallbacks": {
          "!type": "fn()"
         },
         "_fire": {
          "!type": "fn()"
         }
        },
        "version": {
         "toString": {
          "!type": "fn()"
         }
        },
        "config": {},
        "_modulePrefixes": {
         "dojo": {},
         "doh": {},
         "tests": {}
        },
        "_Url": {
         "toString": {
          "!type": "fn()"
         }
        },
        "_listener": {
         "getDispatcher": {
          "!type": "fn()"
         },
         "add": {
          "!type": "fn()"
         },
         "remove": {
          "!type": "fn()"
         }
        },
        "declare": {
         "_delegate": {
          "!type": "fn()"
         },
         "_extend": {
          "!type": "fn()"
         },
         "_makeCtor": {
          "!type": "fn()"
         },
         "_core": {
          "_construct": {
           "!type": "fn()"
          },
          "_findMixin": {
           "!type": "fn()"
          },
          "_findMethod": {
           "!type": "fn()"
          },
          "inherited": {
           "!type": "fn()"
          }
         }
        },
        "_event_listener": {
         "add": {
          "!type": "fn()"
         },
         "remove": {
          "!type": "fn()"
         },
         "_normalizeEventName": {
          "!type": "fn()"
         },
         "_fixCallback": {
          "!type": "fn()"
         },
         "_fixEvent": {
          "!type": "fn()"
         },
         "_setKeyChar": {
          "!type": "fn()"
         },
         "_punctMap": {}
        },
        "keys": {},
        "_ie_listener": {
         "add": {
          "!type": "fn()"
         },
         "remove": {
          "!type": "fn()"
         }
        },
        "Animation": {
         "_fire": {
          "!type": "fn()"
         },
         "play": {
          "!type": "fn()"
         },
         "_play": {
          "!type": "fn()"
         },
         "pause": {
          "!type": "fn()"
         },
         "gotoPercent": {
          "!type": "fn()"
         },
         "stop": {
          "!type": "fn()"
         },
         "status": {
          "!type": "fn()"
         },
         "_cycle": {
          "!type": "fn()"
         },
         "_clearTimer": {
          "!type": "fn()"
         },
         "_startTimer": {
          "!type": "fn()"
         },
         "_stopTimer": {
          "!type": "fn()"
         }
        },
        "__AnimArgs": {},
        "_Line": {
         "getValue": {
          "!type": "fn()"
         }
        },
        "__XhrArgs": {
         "constructor": {
          "!type": "fn()"
         }
        },
        "_contentHandlers": {
         "text": {
          "!type": "fn()"
         },
         "json": {
          "!type": "fn()"
         },
         "json-comment-filtered": {
          "!type": "fn()"
         },
         "javascript": {
          "!type": "fn()"
         },
         "xml": {
          "!type": "fn()"
         },
         "json-comment-optional": {
          "!type": "fn()"
         },
         "auto": {
          "!type": "fn()"
         }
        },
        "_firebug": {},
        "back": {
         "init": {
          "!type": "fn()"
         },
         "setInitialState": {
          "!type": "fn()"
         },
         "addToHistory": {
          "!type": "fn()"
         },
         "_iframeLoaded": {
          "!type": "fn()"
         }
        },
        "cldr": {
         "monetary": {
          "getData": {
           "!type": "fn()"
          }
         },
         "supplemental": {
          "getFirstDayOfWeek": {
           "!type": "fn()"
          },
          "_region": {
           "!type": "fn()"
          },
          "getWeekend": {
           "!type": "fn()"
          }
         }
        },
        "colors": {
         "makeGrey": {
          "!type": "fn()"
         }
        },
        "cookie": {
         "isSupported": {
          "!type": "fn()"
         }
        },
        "currency": {
         "_mixInDefaults": {
          "!type": "fn()"
         },
         "format": {
          "!type": "fn()"
         },
         "regexp": {
          "!type": "fn()"
         },
         "parse": {
          "!type": "fn()"
         },
         "__ParseOptions": {}
        },
        "data": {
         "ItemFileReadStore": {
          "constructor": {
           "!type": "fn()"
          },
          "_assertIsItem": {
           "!type": "fn()"
          },
          "_assertIsAttribute": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "getValues": {
           "!type": "fn()"
          },
          "getAttributes": {
           "!type": "fn()"
          },
          "hasAttribute": {
           "!type": "fn()"
          },
          "containsValue": {
           "!type": "fn()"
          },
          "_containsValue": {
           "!type": "fn()"
          },
          "isItem": {
           "!type": "fn()"
          },
          "isItemLoaded": {
           "!type": "fn()"
          },
          "loadItem": {
           "!type": "fn()"
          },
          "getFeatures": {
           "!type": "fn()"
          },
          "getLabel": {
           "!type": "fn()"
          },
          "getLabelAttributes": {
           "!type": "fn()"
          },
          "_fetchItems": {
           "!type": "fn()"
          },
          "_handleQueuedFetches": {
           "!type": "fn()"
          },
          "_getItemsArray": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          },
          "_getItemsFromLoadedData": {
           "!type": "fn()"
          },
          "_addReferenceToMap": {
           "!type": "fn()"
          },
          "getIdentity": {
           "!type": "fn()"
          },
          "fetchItemByIdentity": {
           "!type": "fn()"
          },
          "_getItemByIdentity": {
           "!type": "fn()"
          },
          "getIdentityAttributes": {
           "!type": "fn()"
          },
          "_forceLoad": {
           "!type": "fn()"
          }
         },
         "ItemFileWriteStore": {
          "constructor": {
           "!type": "fn()"
          },
          "_assert": {
           "!type": "fn()"
          },
          "_getIdentifierAttribute": {
           "!type": "fn()"
          },
          "newItem": {
           "!type": "fn()"
          },
          "_removeArrayElement": {
           "!type": "fn()"
          },
          "deleteItem": {
           "!type": "fn()"
          },
          "setValue": {
           "!type": "fn()"
          },
          "setValues": {
           "!type": "fn()"
          },
          "unsetAttribute": {
           "!type": "fn()"
          },
          "_setValueOrValues": {
           "!type": "fn()"
          },
          "_addReferenceToMap": {
           "!type": "fn()"
          },
          "_removeReferenceFromMap": {
           "!type": "fn()"
          },
          "_dumpReferenceMap": {
           "!type": "fn()"
          },
          "_getValueOrValues": {
           "!type": "fn()"
          },
          "_flatten": {
           "!type": "fn()"
          },
          "_getNewFileContentString": {
           "!type": "fn()"
          },
          "_isEmpty": {
           "!type": "fn()"
          },
          "save": {
           "!type": "fn()"
          },
          "revert": {
           "!type": "fn()"
          },
          "isDirty": {
           "!type": "fn()"
          },
          "onSet": {
           "!type": "fn()"
          },
          "onNew": {
           "!type": "fn()"
          },
          "onDelete": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          }
         },
         "api": {
          "Identity": {
           "getFeatures": {
            "!type": "fn()"
           },
           "getIdentity": {
            "!type": "fn()"
           },
           "getIdentityAttributes": {
            "!type": "fn()"
           },
           "fetchItemByIdentity": {
            "!type": "fn()"
           }
          },
          "Notification": {
           "getFeatures": {
            "!type": "fn()"
           },
           "onSet": {
            "!type": "fn()"
           },
           "onNew": {
            "!type": "fn()"
           },
           "onDelete": {
            "!type": "fn()"
           }
          },
          "Read": {
           "getValue": {
            "!type": "fn()"
           },
           "getValues": {
            "!type": "fn()"
           },
           "getAttributes": {
            "!type": "fn()"
           },
           "hasAttribute": {
            "!type": "fn()"
           },
           "containsValue": {
            "!type": "fn()"
           },
           "isItem": {
            "!type": "fn()"
           },
           "isItemLoaded": {
            "!type": "fn()"
           },
           "loadItem": {
            "!type": "fn()"
           },
           "fetch": {
            "!type": "fn()"
           },
           "getFeatures": {
            "!type": "fn()"
           },
           "close": {
            "!type": "fn()"
           },
           "getLabel": {
            "!type": "fn()"
           },
           "getLabelAttributes": {
            "!type": "fn()"
           }
          },
          "Request": {
           "abort": {
            "!type": "fn()"
           }
          },
          "Write": {
           "getFeatures": {
            "!type": "fn()"
           },
           "newItem": {
            "!type": "fn()"
           },
           "deleteItem": {
            "!type": "fn()"
           },
           "setValue": {
            "!type": "fn()"
           },
           "setValues": {
            "!type": "fn()"
           },
           "unsetAttribute": {
            "!type": "fn()"
           },
           "save": {
            "!type": "fn()"
           },
           "revert": {
            "!type": "fn()"
           },
           "isDirty": {
            "!type": "fn()"
           }
          }
         },
         "util": {
          "filter": {
           "patternToRegExp": {
            "!type": "fn()"
           }
          },
          "simpleFetch": {
           "fetch": {
            "!type": "fn()"
           }
          },
          "sorter": {
           "basicComparator": {
            "!type": "fn()"
           },
           "createSortFunction": {
            "!type": "fn()"
           }
          }
         }
        },
        "fx": {
         "chain": {
          "!type": "fn()"
         },
         "combine": {
          "!type": "fn()"
         },
         "wipeIn": {
          "!type": "fn()"
         },
         "wipeOut": {
          "!type": "fn()"
         },
         "slideTo": {
          "!type": "fn()"
         },
         "Toggler": {
          "constructor": {
           "!type": "fn()"
          },
          "showFunc": {
           "!type": "fn()"
          },
          "hideFunc": {
           "!type": "fn()"
          },
          "show": {
           "!type": "fn()"
          },
          "hide": {
           "!type": "fn()"
          }
         },
         "easing": {
          "linear": {
           "!type": "fn()"
          },
          "quadIn": {
           "!type": "fn()"
          },
          "quadOut": {
           "!type": "fn()"
          },
          "quadInOut": {
           "!type": "fn()"
          },
          "cubicIn": {
           "!type": "fn()"
          },
          "cubicOut": {
           "!type": "fn()"
          },
          "cubicInOut": {
           "!type": "fn()"
          },
          "quartIn": {
           "!type": "fn()"
          },
          "quartOut": {
           "!type": "fn()"
          },
          "quartInOut": {
           "!type": "fn()"
          },
          "quintIn": {
           "!type": "fn()"
          },
          "quintOut": {
           "!type": "fn()"
          },
          "quintInOut": {
           "!type": "fn()"
          },
          "sineIn": {
           "!type": "fn()"
          },
          "sineOut": {
           "!type": "fn()"
          },
          "sineInOut": {
           "!type": "fn()"
          },
          "expoIn": {
           "!type": "fn()"
          },
          "expoOut": {
           "!type": "fn()"
          },
          "expoInOut": {
           "!type": "fn()"
          },
          "circIn": {
           "!type": "fn()"
          },
          "circOut": {
           "!type": "fn()"
          },
          "circInOut": {
           "!type": "fn()"
          },
          "backIn": {
           "!type": "fn()"
          },
          "backOut": {
           "!type": "fn()"
          },
          "backInOut": {
           "!type": "fn()"
          },
          "elasticIn": {
           "!type": "fn()"
          },
          "elasticOut": {
           "!type": "fn()"
          },
          "elasticInOut": {
           "!type": "fn()"
          },
          "bounceIn": {
           "!type": "fn()"
          },
          "bounceOut": {
           "!type": "fn()"
          },
          "bounceInOut": {
           "!type": "fn()"
          }
         }
        },
        "gears": {
         "_gearsObject": {
          "!type": "fn()"
         }
        },
        "html": {
         "_secureForInnerHtml": {
          "!type": "fn()"
         },
         "_emptyNode": {
          "!type": "fn()"
         },
         "_setNodeContent": {
          "!type": "fn()"
         },
         "set": {
          "!type": "fn()"
         },
         "_ContentSetter": {
          "constructor": {
           "!type": "fn()"
          },
          "set": {
           "!type": "fn()"
          },
          "setContent": {
           "!type": "fn()"
          },
          "empty": {
           "!type": "fn()"
          },
          "onBegin": {
           "!type": "fn()"
          },
          "onEnd": {
           "!type": "fn()"
          },
          "tearDown": {
           "!type": "fn()"
          },
          "onContentError": {
           "!type": "fn()"
          },
          "_mixin": {
           "!type": "fn()"
          },
          "_parse": {
           "!type": "fn()"
          },
          "_onError": {
           "!type": "fn()"
          }
         }
        },
        "i18n": {
         "getLocalization": {
          "!type": "fn()"
         },
         "normalizeLocale": {
          "!type": "fn()"
         },
         "_requireLocalization": {
          "!type": "fn()"
         },
         "_searchLocalePath": {
          "!type": "fn()"
         },
         "_preloadLocalizations": {
          "!type": "fn()"
         }
        },
        "io": {
         "iframe": {
          "create": {
           "!type": "fn()"
          },
          "setSrc": {
           "!type": "fn()"
          },
          "doc": {
           "!type": "fn()"
          },
          "send": {
           "!type": "fn()"
          },
          "_fireNextRequest": {
           "!type": "fn()"
          },
          "_iframeOnload": {
           "!type": "fn()"
          },
          "__ioArgs": {
           "constructor": {
            "!type": "fn()"
           }
          }
         },
         "script": {
          "get": {
           "!type": "fn()"
          },
          "attach": {
           "!type": "fn()"
          },
          "remove": {
           "!type": "fn()"
          },
          "_makeScriptDeferred": {
           "!type": "fn()"
          },
          "_deferredCancel": {
           "!type": "fn()"
          },
          "_deferredOk": {
           "!type": "fn()"
          },
          "_deferredError": {
           "!type": "fn()"
          },
          "_addDeadScript": {
           "!type": "fn()"
          },
          "_validCheck": {
           "!type": "fn()"
          },
          "_ioCheck": {
           "!type": "fn()"
          },
          "_resHandle": {
           "!type": "fn()"
          },
          "_canAttach": {
           "!type": "fn()"
          },
          "_jsonpCallback": {
           "!type": "fn()"
          },
          "__ioArgs": {
           "constructor": {
            "!type": "fn()"
           }
          }
         }
        },
        "number": {
         "__FormatOptions": {
          "!type": "fn()"
         },
         "format": {
          "!type": "fn()"
         },
         "_applyPattern": {
          "!type": "fn()"
         },
         "round": {
          "!type": "fn()"
         },
         "__FormatAbsoluteOptions": {
          "!type": "fn()"
         },
         "_formatAbsolute": {
          "!type": "fn()"
         },
         "__RegexpOptions": {
          "!type": "fn()"
         },
         "regexp": {
          "!type": "fn()"
         },
         "_parseInfo": {
          "!type": "fn()"
         },
         "__ParseOptions": {
          "!type": "fn()"
         },
         "parse": {
          "!type": "fn()"
         },
         "__RealNumberRegexpFlags": {
          "!type": "fn()"
         },
         "_realNumberRegexp": {
          "!type": "fn()"
         },
         "__IntegerRegexpFlags": {
          "!type": "fn()"
         },
         "_integerRegexp": {
          "!type": "fn()"
         }
        },
        "regexp": {
         "escapeString": {
          "!type": "fn()"
         },
         "buildGroupRE": {
          "!type": "fn()"
         },
         "group": {
          "!type": "fn()"
         }
        },
        "rpc": {
         "JsonService": {
          "callRemote": {
           "!type": "fn()"
          },
          "bind": {
           "!type": "fn()"
          },
          "createRequest": {
           "!type": "fn()"
          },
          "parseResults": {
           "!type": "fn()"
          }
         },
         "JsonpService": {
          "constructor": {
           "!type": "fn()"
          },
          "bind": {
           "!type": "fn()"
          },
          "createRequest": {
           "!type": "fn()"
          }
         },
         "RpcService": {
          "constructor": {
           "!type": "fn()"
          },
          "parseResults": {
           "!type": "fn()"
          },
          "errorCallback": {
           "!type": "fn()"
          },
          "resultCallback": {
           "!type": "fn()"
          },
          "generateMethod": {
           "!type": "fn()"
          },
          "processSmd": {
           "!type": "fn()"
          }
         }
        }
       },
       "doh": {
        "robot": {
         "_scrollIntoView": {
          "!type": "fn()"
         },
         "_updateDocument": {
          "!type": "fn()"
         },
         "scrollIntoView": {
          "!type": "fn()"
         },
         "mouseMoveAt": {
          "!type": "fn()"
         },
         "initRobot": {
          "!type": "fn()"
         },
         "waitForPageToLoad": {
          "!type": "fn()"
         }
        }
       },
       "Expr": {
        "order": {}
       },
       "window": {
        "console": {
         "log": {
          "!type": "fn()"
         },
         "debug": {
          "!type": "fn()"
         },
         "info": {
          "!type": "fn()"
         },
         "warn": {
          "!type": "fn()"
         },
         "error": {
          "!type": "fn()"
         },
         "assert": {
          "!type": "fn()"
         },
         "dir": {
          "!type": "fn()"
         },
         "dirxml": {
          "!type": "fn()"
         },
         "group": {
          "!type": "fn()"
         },
         "groupEnd": {
          "!type": "fn()"
         },
         "time": {
          "!type": "fn()"
         },
         "timeEnd": {
          "!type": "fn()"
         },
         "count": {
          "!type": "fn()"
         },
         "trace": {
          "!type": "fn()"
         },
         "profile": {
          "!type": "fn()"
         },
         "profileEnd": {
          "!type": "fn()"
         },
         "clear": {
          "!type": "fn()"
         },
         "open": {
          "!type": "fn()"
         },
         "close": {
          "!type": "fn()"
         },
         "_restoreBorder": {
          "!type": "fn()"
         },
         "openDomInspector": {
          "!type": "fn()"
         },
         "_closeDomInspector": {
          "!type": "fn()"
         },
         "openConsole": {
          "!type": "fn()"
         },
         "openObjectInspector": {
          "!type": "fn()"
         },
         "recss": {
          "!type": "fn()"
         }
        },
        "location": {},
        "frames": {
         "dj_history": {}
        },
        "event": {
         "srcElement": {}
        }
       },
       "document": {
        "body": {
         "style": {},
         "onselectstart": {
          "!type": "fn()"
         }
        }
       },
       "dojox": {
        "analytics": {
         "schedulePusher": {
          "!type": "fn()"
         },
         "addData": {
          "!type": "fn()"
         },
         "checkData": {
          "!type": "fn()"
         },
         "pushData": {
          "!type": "fn()"
         },
         "getQueryPacket": {
          "!type": "fn()"
         },
         "onPushComplete": {
          "!type": "fn()"
         },
         "Urchin": {
          "constructor": {
           "!type": "fn()"
          },
          "_gotGA": {
           "!type": "fn()"
          },
          "GAonLoad": {
           "!type": "fn()"
          },
          "trackPageView": {
           "!type": "fn()"
          }
         },
         "plugins": {}
        },
        "atom": {
         "io": {
          "Connection": {
           "constructor": {
            "!type": "fn()"
           },
           "getFeed": {
            "!type": "fn()"
           },
           "getService": {
            "!type": "fn()"
           },
           "getEntry": {
            "!type": "fn()"
           },
           "_getXmlDoc": {
            "!type": "fn()"
           },
           "updateEntry": {
            "!type": "fn()"
           },
           "addEntry": {
            "!type": "fn()"
           },
           "deleteEntry": {
            "!type": "fn()"
           }
          },
          "model": {
           "Node": {
            "constructor": {
             "!type": "fn()"
            },
            "buildFromDom": {
             "!type": "fn()"
            },
            "_saveAttributes": {
             "!type": "fn()"
            },
            "addAttribute": {
             "!type": "fn()"
            },
            "getAttribute": {
             "!type": "fn()"
            },
            "_getAttributeNames": {
             "!type": "fn()"
            },
            "toString": {
             "!type": "fn()"
            },
            "addContent": {
             "!type": "fn()"
            }
           },
           "AtomItem": {
            "constructor": {
             "!type": "fn()"
            },
            "_getAttributeNames": {
             "!type": "fn()"
            },
            "accept": {
             "!type": "fn()"
            },
            "_postBuild": {
             "!type": "fn()"
            },
            "buildFromDom": {
             "!type": "fn()"
            },
            "addNamespace": {
             "!type": "fn()"
            },
            "addAuthor": {
             "!type": "fn()"
            },
            "addContributor": {
             "!type": "fn()"
            },
            "addLink": {
             "!type": "fn()"
            },
            "removeLink": {
             "!type": "fn()"
            },
            "removeBasicLinks": {
             "!type": "fn()"
            },
            "addCategory": {
             "!type": "fn()"
            },
            "getCategories": {
             "!type": "fn()"
            },
            "removeCategories": {
             "!type": "fn()"
            },
            "setTitle": {
             "!type": "fn()"
            },
            "addExtension": {
             "!type": "fn()"
            },
            "getExtensions": {
             "!type": "fn()"
            },
            "removeExtensions": {
             "!type": "fn()"
            },
            "destroy": {
             "!type": "fn()"
            }
           },
           "Category": {
            "constructor": {
             "!type": "fn()"
            },
            "_postBuild": {
             "!type": "fn()"
            },
            "_getAttributeNames": {
             "!type": "fn()"
            },
            "toString": {
             "!type": "fn()"
            },
            "buildFromDom": {
             "!type": "fn()"
            }
           },
           "Content": {
            "constructor": {
             "!type": "fn()"
            },
            "_getAttributeNames": {
             "!type": "fn()"
            },
            "_postBuild": {
             "!type": "fn()"
            },
            "buildFromDom": {
             "!type": "fn()"
            },
            "toString": {
             "!type": "fn()"
            }
           },
           "Link": {
            "constructor": {
             "!type": "fn()"
            },
            "_getAttributeNames": {
             "!type": "fn()"
            },
            "_postBuild": {
             "!type": "fn()"
            },
            "buildFromDom": {
             "!type": "fn()"
            },
            "toString": {
             "!type": "fn()"
            }
           },
           "Person": {
            "constructor": {
             "!type": "fn()"
            },
            "_getAttributeNames": {
             "!type": "fn()"
            },
            "_postBuild": {
             "!type": "fn()"
            },
            "accept": {
             "!type": "fn()"
            },
            "buildFromDom": {
             "!type": "fn()"
            },
            "toString": {
             "!type": "fn()"
            },
            "_accepts": {}
           },
           "Generator": {
            "constructor": {
             "!type": "fn()"
            },
            "_postBuild": {
             "!type": "fn()"
            },
            "buildFromDom": {
             "!type": "fn()"
            },
            "toString": {
             "!type": "fn()"
            }
           },
           "Entry": {
            "constructor": {
             "!type": "fn()"
            },
            "_getAttributeNames": {
             "!type": "fn()"
            },
            "toString": {
             "!type": "fn()"
            },
            "getEditHref": {
             "!type": "fn()"
            },
            "setEditHref": {
             "!type": "fn()"
            },
            "_accepts": {}
           },
           "Feed": {
            "addEntry": {
             "!type": "fn()"
            },
            "getFirstEntry": {
             "!type": "fn()"
            },
            "getEntry": {
             "!type": "fn()"
            },
            "removeEntry": {
             "!type": "fn()"
            },
            "setEntries": {
             "!type": "fn()"
            },
            "toString": {
             "!type": "fn()"
            },
            "createEntry": {
             "!type": "fn()"
            },
            "getSelfHref": {
             "!type": "fn()"
            },
            "_accepts": {}
           },
           "Service": {
            "constructor": {
             "!type": "fn()"
            },
            "buildFromDom": {
             "!type": "fn()"
            },
            "getCollection": {
             "!type": "fn()"
            }
           },
           "Workspace": {
            "constructor": {
             "!type": "fn()"
            },
            "buildFromDom": {
             "!type": "fn()"
            }
           },
           "Collection": {
            "constructor": {
             "!type": "fn()"
            },
            "buildFromDom": {
             "!type": "fn()"
            }
           },
           "_Constants": {},
           "_actions": {
            "link": {
             "!type": "fn()"
            },
            "author": {
             "!type": "fn()"
            },
            "contributor": {
             "!type": "fn()"
            },
            "category": {
             "!type": "fn()"
            },
            "icon": {
             "!type": "fn()"
            },
            "id": {
             "!type": "fn()"
            },
            "rights": {
             "!type": "fn()"
            },
            "subtitle": {
             "!type": "fn()"
            },
            "title": {
             "!type": "fn()"
            },
            "updated": {
             "!type": "fn()"
            },
            "issued": {
             "!type": "fn()"
            },
            "modified": {
             "!type": "fn()"
            },
            "published": {
             "!type": "fn()"
            },
            "entry": {
             "!type": "fn()"
            },
            "content": {
             "!type": "fn()"
            },
            "summary": {
             "!type": "fn()"
            },
            "name": {
             "!type": "fn()"
            },
            "email": {
             "!type": "fn()"
            },
            "uri": {
             "!type": "fn()"
            },
            "generator": {
             "!type": "fn()"
            }
           },
           "util": {
            "createDate": {
             "!type": "fn()"
            },
            "escapeHtml": {
             "!type": "fn()"
            },
            "unEscapeHtml": {
             "!type": "fn()"
            },
            "getNodename": {
             "!type": "fn()"
            }
           }
          }
         },
         "widget": {
          "FeedEntryEditor": {
           "postCreate": {
            "!type": "fn()"
           },
           "setEntry": {
            "!type": "fn()"
           },
           "_toggleEdit": {
            "!type": "fn()"
           },
           "_handleEvent": {
            "!type": "fn()"
           },
           "_isEditable": {
            "!type": "fn()"
           },
           "setTitle": {
            "!type": "fn()"
           },
           "setAuthors": {
            "!type": "fn()"
           },
           "setContributors": {
            "!type": "fn()"
           },
           "setId": {
            "!type": "fn()"
           },
           "setUpdated": {
            "!type": "fn()"
           },
           "setSummary": {
            "!type": "fn()"
           },
           "setContent": {
            "!type": "fn()"
           },
           "_createEditor": {
            "!type": "fn()"
           },
           "_switchEditor": {
            "!type": "fn()"
           },
           "_createPeopleEditor": {
            "!type": "fn()"
           },
           "saveEdits": {
            "!type": "fn()"
           },
           "_handleSave": {
            "!type": "fn()"
           },
           "cancelEdits": {
            "!type": "fn()"
           },
           "clear": {
            "!type": "fn()"
           },
           "clearEditors": {
            "!type": "fn()"
           },
           "_enforceXhtml": {
            "!type": "fn()"
           },
           "_closeTag": {
            "!type": "fn()"
           },
           "_toggleNew": {
            "!type": "fn()"
           },
           "_displaySections": {
            "!type": "fn()"
           }
          },
          "PeopleEditor": {
           "postCreate": {
            "!type": "fn()"
           },
           "destroy": {
            "!type": "fn()"
           },
           "_createEditors": {
            "!type": "fn()"
           },
           "_createEditor": {
            "!type": "fn()"
           },
           "_removeEditor": {
            "!type": "fn()"
           },
           "_add": {
            "!type": "fn()"
           },
           "getValues": {
            "!type": "fn()"
           }
          },
          "FeedEntryViewer": {
           "postCreate": {
            "!type": "fn()"
           },
           "startup": {
            "!type": "fn()"
           },
           "clear": {
            "!type": "fn()"
           },
           "clearNodes": {
            "!type": "fn()"
           },
           "setEntry": {
            "!type": "fn()"
           },
           "setTitleHeader": {
            "!type": "fn()"
           },
           "setTitle": {
            "!type": "fn()"
           },
           "setAuthorsHeader": {
            "!type": "fn()"
           },
           "setAuthors": {
            "!type": "fn()"
           },
           "setContributorsHeader": {
            "!type": "fn()"
           },
           "setContributors": {
            "!type": "fn()"
           },
           "setIdHeader": {
            "!type": "fn()"
           },
           "setId": {
            "!type": "fn()"
           },
           "setUpdatedHeader": {
            "!type": "fn()"
           },
           "setUpdated": {
            "!type": "fn()"
           },
           "setSummaryHeader": {
            "!type": "fn()"
           },
           "setSummary": {
            "!type": "fn()"
           },
           "setContentHeader": {
            "!type": "fn()"
           },
           "setContent": {
            "!type": "fn()"
           },
           "_displaySections": {
            "!type": "fn()"
           },
           "setDisplaySections": {
            "!type": "fn()"
           },
           "_setDisplaySectionsCheckboxes": {
            "!type": "fn()"
           },
           "_readDisplaySections": {
            "!type": "fn()"
           },
           "_toggleCheckbox": {
            "!type": "fn()"
           },
           "_toggleOptions": {
            "!type": "fn()"
           },
           "_handleEvent": {
            "!type": "fn()"
           },
           "setFieldValidity": {
            "!type": "fn()"
           },
           "isFieldValid": {
            "!type": "fn()"
           },
           "getEntry": {
            "!type": "fn()"
           },
           "getFeed": {
            "!type": "fn()"
           },
           "destroy": {
            "!type": "fn()"
           }
          },
          "EntryHeader": {
           "postCreate": {
            "!type": "fn()"
           },
           "setListHeader": {
            "!type": "fn()"
           },
           "clear": {
            "!type": "fn()"
           },
           "destroy": {
            "!type": "fn()"
           }
          },
          "FeedViewer": {
           "postCreate": {
            "!type": "fn()"
           },
           "startup": {
            "!type": "fn()"
           },
           "clear": {
            "!type": "fn()"
           },
           "setFeedFromUrl": {
            "!type": "fn()"
           },
           "setFeed": {
            "!type": "fn()"
           },
           "_displayDateForEntry": {
            "!type": "fn()"
           },
           "appendGrouping": {
            "!type": "fn()"
           },
           "appendEntry": {
            "!type": "fn()"
           },
           "deleteEntry": {
            "!type": "fn()"
           },
           "_removeEntry": {
            "!type": "fn()"
           },
           "_rowSelected": {
            "!type": "fn()"
           },
           "_deselectCurrentSelection": {
            "!type": "fn()"
           },
           "_isEditable": {
            "!type": "fn()"
           },
           "onEntrySelected": {
            "!type": "fn()"
           },
           "_isRelativeURL": {
            "!type": "fn()"
           },
           "_calculateBaseURL": {
            "!type": "fn()"
           },
           "_isFilterAccepted": {
            "!type": "fn()"
           },
           "addCategoryIncludeFilter": {
            "!type": "fn()"
           },
           "removeCategoryIncludeFilter": {
            "!type": "fn()"
           },
           "_handleEvent": {
            "!type": "fn()"
           },
           "_addEntry": {
            "!type": "fn()"
           },
           "destroy": {
            "!type": "fn()"
           },
           "CategoryIncludeFilter": {
            "constructor": {
             "!type": "fn()"
            },
            "match": {
             "!type": "fn()"
            }
           }
          },
          "FeedViewerEntry": {
           "postCreate": {
            "!type": "fn()"
           },
           "setTitle": {
            "!type": "fn()"
           },
           "setTime": {
            "!type": "fn()"
           },
           "enableDelete": {
            "!type": "fn()"
           },
           "disableDelete": {
            "!type": "fn()"
           },
           "deleteEntry": {
            "!type": "fn()"
           },
           "onClick": {
            "!type": "fn()"
           }
          },
          "FeedViewerGrouping": {
           "setText": {
            "!type": "fn()"
           }
          },
          "AtomEntryCategoryFilter": {}
         }
        },
        "av": {
         "FLAudio": {
          "constructor": {
           "!type": "fn()"
          },
          "init": {
           "!type": "fn()"
          },
          "load": {
           "!type": "fn()"
          },
          "doPlay": {
           "!type": "fn()"
          },
          "pause": {
           "!type": "fn()"
          },
          "stop": {
           "!type": "fn()"
          },
          "setVolume": {
           "!type": "fn()"
          },
          "setPan": {
           "!type": "fn()"
          },
          "getVolume": {
           "!type": "fn()"
          },
          "getPan": {
           "!type": "fn()"
          },
          "onError": {
           "!type": "fn()"
          },
          "onLoadStatus": {
           "!type": "fn()"
          },
          "onAllLoaded": {
           "!type": "fn()"
          },
          "onPlayStatus": {
           "!type": "fn()"
          },
          "onLoad": {
           "!type": "fn()"
          },
          "onID3": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "_sub": {
           "!type": "fn()"
          },
          "_normalizeVolume": {
           "!type": "fn()"
          },
          "_normalizeUrl": {
           "!type": "fn()"
          }
         },
         "FLVideo": {
          "postCreate": {
           "!type": "fn()"
          },
          "play": {
           "!type": "fn()"
          },
          "pause": {
           "!type": "fn()"
          },
          "seek": {
           "!type": "fn()"
          },
          "volume": {
           "!type": "fn()"
          },
          "onLoad": {
           "!type": "fn()"
          },
          "onDownloaded": {
           "!type": "fn()"
          },
          "onClick": {
           "!type": "fn()"
          },
          "onSwfSized": {
           "!type": "fn()"
          },
          "onMetaData": {
           "!type": "fn()"
          },
          "onPosition": {
           "!type": "fn()"
          },
          "onStart": {
           "!type": "fn()"
          },
          "onPlay": {
           "!type": "fn()"
          },
          "onPause": {
           "!type": "fn()"
          },
          "onEnd": {
           "!type": "fn()"
          },
          "onStop": {
           "!type": "fn()"
          },
          "onBuffer": {
           "!type": "fn()"
          },
          "onError": {
           "!type": "fn()"
          },
          "onStatus": {
           "!type": "fn()"
          },
          "onPlayerStatus": {
           "!type": "fn()"
          },
          "onResize": {
           "!type": "fn()"
          },
          "_checkBuffer": {
           "!type": "fn()"
          },
          "_update": {
           "!type": "fn()"
          }
         },
         "_Media": {
          "_initStatus": {
           "!type": "fn()"
          },
          "getTime": {
           "!type": "fn()"
          },
          "onLoad": {
           "!type": "fn()"
          },
          "onDownloaded": {
           "!type": "fn()"
          },
          "onClick": {
           "!type": "fn()"
          },
          "onSwfSized": {
           "!type": "fn()"
          },
          "onMetaData": {
           "!type": "fn()"
          },
          "onPosition": {
           "!type": "fn()"
          },
          "onStart": {
           "!type": "fn()"
          },
          "onPlay": {
           "!type": "fn()"
          },
          "onPause": {
           "!type": "fn()"
          },
          "onEnd": {
           "!type": "fn()"
          },
          "onStop": {
           "!type": "fn()"
          },
          "onBuffer": {
           "!type": "fn()"
          },
          "onError": {
           "!type": "fn()"
          },
          "onStatus": {
           "!type": "fn()"
          },
          "onPlayerStatus": {
           "!type": "fn()"
          },
          "onResize": {
           "!type": "fn()"
          },
          "_figureStatus": {
           "!type": "fn()"
          },
          "_eventFactory": {
           "!type": "fn()"
          },
          "_sub": {
           "!type": "fn()"
          },
          "_normalizeVolume": {
           "!type": "fn()"
          },
          "_normalizeUrl": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          }
         },
         "widget": {
          "PlayButton": {
           "postCreate": {
            "!type": "fn()"
           },
           "setMedia": {
            "!type": "fn()"
           },
           "onClick": {
            "!type": "fn()"
           },
           "onPlay": {
            "!type": "fn()"
           },
           "onPause": {
            "!type": "fn()"
           },
           "showPlay": {
            "!type": "fn()"
           },
           "showPause": {
            "!type": "fn()"
           }
          },
          "Player": {
           "_fillContent": {
            "!type": "fn()"
           },
           "postCreate": {
            "!type": "fn()"
           },
           "startup": {
            "!type": "fn()"
           },
           "onResize": {
            "!type": "fn()"
           }
          },
          "ProgressSlider": {
           "postCreate": {
            "!type": "fn()"
           },
           "setMedia": {
            "!type": "fn()"
           },
           "onDrag": {
            "!type": "fn()"
           },
           "startDrag": {
            "!type": "fn()"
           },
           "endDrag": {
            "!type": "fn()"
           },
           "setHandle": {
            "!type": "fn()"
           },
           "setLoadedPosition": {
            "!type": "fn()"
           },
           "handleOver": {
            "!type": "fn()"
           },
           "handleOut": {
            "!type": "fn()"
           },
           "onResize": {
            "!type": "fn()"
           }
          },
          "Status": {
           "postCreate": {
            "!type": "fn()"
           },
           "setMedia": {
            "!type": "fn()"
           },
           "onMetaData": {
            "!type": "fn()"
           },
           "onBuffer": {
            "!type": "fn()"
           },
           "onPosition": {
            "!type": "fn()"
           },
           "onStart": {
            "!type": "fn()"
           },
           "onPlay": {
            "!type": "fn()"
           },
           "onPause": {
            "!type": "fn()"
           },
           "onStop": {
            "!type": "fn()"
           },
           "onEnd": {
            "!type": "fn()"
           },
           "onError": {
            "!type": "fn()"
           },
           "onLoad": {
            "!type": "fn()"
           },
           "setStatus": {
            "!type": "fn()"
           },
           "toSeconds": {
            "!type": "fn()"
           }
          },
          "VolumeButton": {
           "postCreate": {
            "!type": "fn()"
           },
           "setMedia": {
            "!type": "fn()"
           },
           "updateIcon": {
            "!type": "fn()"
           },
           "onShowVolume": {
            "!type": "fn()"
           },
           "onDocClick": {
            "!type": "fn()"
           },
           "onHideVolume": {
            "!type": "fn()"
           },
           "onDrag": {
            "!type": "fn()"
           },
           "startDrag": {
            "!type": "fn()"
           },
           "endDrag": {
            "!type": "fn()"
           },
           "handleOver": {
            "!type": "fn()"
           },
           "handleOut": {
            "!type": "fn()"
           },
           "_getVolumeDim": {
            "!type": "fn()"
           },
           "_getHandleDim": {
            "!type": "fn()"
           },
           "onResize": {
            "!type": "fn()"
           }
          }
         }
        },
        "charting": {
         "Chart2D": {
          "constructor": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "getCoords": {
           "!type": "fn()"
          },
          "setTheme": {
           "!type": "fn()"
          },
          "addAxis": {
           "!type": "fn()"
          },
          "getAxis": {
           "!type": "fn()"
          },
          "removeAxis": {
           "!type": "fn()"
          },
          "addPlot": {
           "!type": "fn()"
          },
          "removePlot": {
           "!type": "fn()"
          },
          "addSeries": {
           "!type": "fn()"
          },
          "removeSeries": {
           "!type": "fn()"
          },
          "updateSeries": {
           "!type": "fn()"
          },
          "resize": {
           "!type": "fn()"
          },
          "getGeometry": {
           "!type": "fn()"
          },
          "setAxisWindow": {
           "!type": "fn()"
          },
          "setWindow": {
           "!type": "fn()"
          },
          "calculateGeometry": {
           "!type": "fn()"
          },
          "fullGeometry": {
           "!type": "fn()"
          },
          "render": {
           "!type": "fn()"
          },
          "fullRender": {
           "!type": "fn()"
          },
          "connectToPlot": {
           "!type": "fn()"
          },
          "_makeClean": {
           "!type": "fn()"
          },
          "_makeDirty": {
           "!type": "fn()"
          },
          "_invalidateDependentPlots": {
           "!type": "fn()"
          }
         },
         "Chart3D": {
          "constructor": {
           "!type": "fn()"
          },
          "generate": {
           "!type": "fn()"
          },
          "invalidate": {
           "!type": "fn()"
          },
          "render": {
           "!type": "fn()"
          },
          "addPlot": {
           "!type": "fn()"
          },
          "removePlot": {
           "!type": "fn()"
          },
          "addWall": {
           "!type": "fn()"
          },
          "removeWall": {
           "!type": "fn()"
          },
          "_add": {
           "!type": "fn()"
          },
          "_remove": {
           "!type": "fn()"
          },
          "_generateWalls": {
           "!type": "fn()"
          },
          "_generatePlots": {
           "!type": "fn()"
          }
         },
         "DataChart": {
          "constructor": {
           "!type": "fn()"
          },
          "setStore": {
           "!type": "fn()"
          },
          "show": {
           "!type": "fn()"
          },
          "hide": {
           "!type": "fn()"
          },
          "onSet": {
           "!type": "fn()"
          },
          "onError": {
           "!type": "fn()"
          },
          "onDataReceived": {
           "!type": "fn()"
          },
          "getProperty": {
           "!type": "fn()"
          },
          "onData": {
           "!type": "fn()"
          },
          "fetch": {
           "!type": "fn()"
          },
          "convertLabels": {
           "!type": "fn()"
          },
          "seriesLabels": {
           "!type": "fn()"
          },
          "resizeChart": {
           "!type": "fn()"
          }
         },
         "Element": {
          "constructor": {
           "!type": "fn()"
          },
          "createGroup": {
           "!type": "fn()"
          },
          "purgeGroup": {
           "!type": "fn()"
          },
          "cleanGroup": {
           "!type": "fn()"
          },
          "destroyHtmlElements": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          }
         },
         "Series": {
          "constructor": {
           "!type": "fn()"
          },
          "clear": {
           "!type": "fn()"
          }
         },
         "Theme": {
          "defineColors": {
           "!type": "fn()"
          },
          "_buildMarkerArray": {
           "!type": "fn()"
          },
          "_clone": {
           "!type": "fn()"
          },
          "addMarker": {
           "!type": "fn()"
          },
          "setMarkers": {
           "!type": "fn()"
          },
          "next": {
           "!type": "fn()"
          },
          "clear": {
           "!type": "fn()"
          },
          "Markers": {},
          "_def": {
           "chart": {},
           "plotarea": {},
           "axis": {
            "stroke": {},
            "majorTick": {},
            "minorTick": {}
           },
           "series": {
            "outline": {},
            "stroke": {}
           },
           "marker": {
            "stroke": {}
           }
          }
         },
         "action2d": {
          "Base": {
           "constructor": {
            "!type": "fn()"
           },
           "connect": {
            "!type": "fn()"
           },
           "disconnect": {
            "!type": "fn()"
           },
           "reset": {
            "!type": "fn()"
           },
           "destroy": {
            "!type": "fn()"
           },
           "overOutEvents": {}
          },
          "Highlight": {
           "constructor": {
            "!type": "fn()"
           },
           "process": {
            "!type": "fn()"
           },
           "defaultParams": {},
           "optionalParams": {}
          },
          "Magnify": {
           "constructor": {
            "!type": "fn()"
           },
           "process": {
            "!type": "fn()"
           },
           "defaultParams": {}
          },
          "MoveSlice": {
           "constructor": {
            "!type": "fn()"
           },
           "process": {
            "!type": "fn()"
           },
           "reset": {
            "!type": "fn()"
           },
           "defaultParams": {}
          },
          "Shake": {
           "constructor": {
            "!type": "fn()"
           },
           "process": {
            "!type": "fn()"
           },
           "defaultParams": {}
          },
          "Tooltip": {
           "constructor": {
            "!type": "fn()"
           },
           "process": {
            "!type": "fn()"
           },
           "defaultParams": {}
          }
         },
         "axis2d": {
          "Base": {
           "constructor": {
            "!type": "fn()"
           },
           "clear": {
            "!type": "fn()"
           },
           "initialized": {
            "!type": "fn()"
           },
           "calculate": {
            "!type": "fn()"
           },
           "getScaler": {
            "!type": "fn()"
           },
           "getTicks": {
            "!type": "fn()"
           },
           "getOffsets": {
            "!type": "fn()"
           },
           "render": {
            "!type": "fn()"
           }
          },
          "Default": {
           "constructor": {
            "!type": "fn()"
           },
           "dependOnData": {
            "!type": "fn()"
           },
           "clear": {
            "!type": "fn()"
           },
           "initialized": {
            "!type": "fn()"
           },
           "setWindow": {
            "!type": "fn()"
           },
           "getWindowScale": {
            "!type": "fn()"
           },
           "getWindowOffset": {
            "!type": "fn()"
           },
           "_groupLabelWidth": {
            "!type": "fn()"
           },
           "calculate": {
            "!type": "fn()"
           },
           "getScaler": {
            "!type": "fn()"
           },
           "getTicks": {
            "!type": "fn()"
           },
           "getOffsets": {
            "!type": "fn()"
           },
           "render": {
            "!type": "fn()"
           },
           "defaultParams": {},
           "optionalParams": {}
          },
          "common": {
           "createText": {
            "gfx": {
             "!type": "fn()"
            },
            "html": {
             "!type": "fn()"
            }
           }
          }
         },
         "scaler": {
          "common": {
           "getNumericLabel": {
            "!type": "fn()"
           },
           "findString": {
            "!type": "fn()"
           }
          },
          "linear": {
           "buildScaler": {
            "!type": "fn()"
           },
           "buildTicks": {
            "!type": "fn()"
           },
           "getTransformerFromModel": {
            "!type": "fn()"
           },
           "getTransformerFromPlot": {
            "!type": "fn()"
           }
          },
          "primitive": {
           "buildScaler": {
            "!type": "fn()"
           },
           "buildTicks": {
            "!type": "fn()"
           },
           "getTransformerFromModel": {
            "!type": "fn()"
           },
           "getTransformerFromPlot": {
            "!type": "fn()"
           }
          }
         },
         "plot2d": {
          "Areas": {
           "constructor": {
            "!type": "fn()"
           }
          },
          "Bars": {
           "constructor": {
            "!type": "fn()"
           },
           "calculateAxes": {
            "!type": "fn()"
           },
           "render": {
            "!type": "fn()"
           },
           "defaultParams": {},
           "optionalParams": {}
          },
          "Base": {
           "destroy": {
            "!type": "fn()"
           },
           "clear": {
            "!type": "fn()"
           },
           "setAxis": {
            "!type": "fn()"
           },
           "addSeries": {
            "!type": "fn()"
           },
           "calculateAxes": {
            "!type": "fn()"
           },
           "isDirty": {
            "!type": "fn()"
           },
           "render": {
            "!type": "fn()"
           },
           "getRequiredColors": {
            "!type": "fn()"
           },
           "plotEvent": {
            "!type": "fn()"
           },
           "connect": {
            "!type": "fn()"
           },
           "events": {
            "!type": "fn()"
           },
           "resetEvents": {
            "!type": "fn()"
           },
           "_calc": {
            "!type": "fn()"
           },
           "_connectEvents": {
            "!type": "fn()"
           }
          },
          "Bubble": {
           "constructor": {
            "!type": "fn()"
           },
           "calculateAxes": {
            "!type": "fn()"
           },
           "render": {
            "!type": "fn()"
           },
           "defaultParams": {}
          },
          "Candlesticks": {
           "constructor": {
            "!type": "fn()"
           },
           "collectStats": {
            "!type": "fn()"
           },
           "calculateAxes": {
            "!type": "fn()"
           },
           "render": {
            "!type": "fn()"
           },
           "defaultParams": {},
           "optionalParams": {}
          },
          "ClusteredBars": {
           "render": {
            "!type": "fn()"
           }
          },
          "ClusteredColumns": {
           "render": {
            "!type": "fn()"
           }
          },
          "Columns": {
           "constructor": {
            "!type": "fn()"
           },
           "calculateAxes": {
            "!type": "fn()"
           },
           "render": {
            "!type": "fn()"
           },
           "defaultParams": {},
           "optionalParams": {}
          },
          "Default": {
           "constructor": {
            "!type": "fn()"
           },
           "calculateAxes": {
            "!type": "fn()"
           },
           "render": {
            "!type": "fn()"
           },
           "defaultParams": {}
          },
          "Grid": {
           "constructor": {
            "!type": "fn()"
           },
           "clear": {
            "!type": "fn()"
           },
           "setAxis": {
            "!type": "fn()"
           },
           "addSeries": {
            "!type": "fn()"
           },
           "calculateAxes": {
            "!type": "fn()"
           },
           "isDirty": {
            "!type": "fn()"
           },
           "getRequiredColors": {
            "!type": "fn()"
           },
           "render": {
            "!type": "fn()"
           },
           "defaultParams": {}
          },
          "Lines": {
           "constructor": {
            "!type": "fn()"
           }
          },
          "Markers": {
           "constructor": {
            "!type": "fn()"
           }
          },
          "MarkersOnly": {
           "constructor": {
            "!type": "fn()"
           }
          },
          "OHLC": {
           "constructor": {
            "!type": "fn()"
           },
           "collectStats": {
            "!type": "fn()"
           },
           "calculateAxes": {
            "!type": "fn()"
           },
           "render": {
            "!type": "fn()"
           },
           "defaultParams": {},
           "optionalParams": {}
          },
          "Pie": {
           "constructor": {
            "!type": "fn()"
           },
           "destroy": {
            "!type": "fn()"
           },
           "clear": {
            "!type": "fn()"
           },
           "setAxis": {
            "!type": "fn()"
           },
           "addSeries": {
            "!type": "fn()"
           },
           "calculateAxes": {
            "!type": "fn()"
           },
           "getRequiredColors": {
            "!type": "fn()"
           },
           "plotEvent": {
            "!type": "fn()"
           },
           "connect": {
            "!type": "fn()"
           },
           "events": {
            "!type": "fn()"
           },
           "resetEvents": {
            "!type": "fn()"
           },
           "_connectEvents": {
            "!type": "fn()"
           },
           "render": {
            "!type": "fn()"
           },
           "_getLabel": {
            "!type": "fn()"
           },
           "defaultParams": {},
           "optionalParams": {}
          },
          "Scatter": {
           "constructor": {
            "!type": "fn()"
           }
          },
          "Stacked": {
           "calculateAxes": {
            "!type": "fn()"
           },
           "render": {
            "!type": "fn()"
           }
          },
          "StackedAreas": {
           "constructor": {
            "!type": "fn()"
           }
          },
          "StackedBars": {
           "calculateAxes": {
            "!type": "fn()"
           },
           "render": {
            "!type": "fn()"
           }
          },
          "StackedColumns": {
           "calculateAxes": {
            "!type": "fn()"
           },
           "render": {
            "!type": "fn()"
           }
          },
          "StackedLines": {
           "constructor": {
            "!type": "fn()"
           }
          },
          "common": {
           "makeStroke": {
            "!type": "fn()"
           },
           "augmentColor": {
            "!type": "fn()"
           },
           "augmentStroke": {
            "!type": "fn()"
           },
           "augmentFill": {
            "!type": "fn()"
           },
           "collectSimpleStats": {
            "!type": "fn()"
           },
           "calculateBarSize": {
            "!type": "fn()"
           },
           "collectStackedStats": {
            "!type": "fn()"
           },
           "curve": {
            "!type": "fn()"
           },
           "defaultStats": {}
          }
         },
         "plot3d": {
          "Bars": {
           "constructor": {
            "!type": "fn()"
           },
           "getDepth": {
            "!type": "fn()"
           },
           "generate": {
            "!type": "fn()"
           }
          },
          "Base": {
           "constructor": {
            "!type": "fn()"
           },
           "setData": {
            "!type": "fn()"
           },
           "getDepth": {
            "!type": "fn()"
           },
           "generate": {
            "!type": "fn()"
           }
          },
          "Cylinders": {
           "constructor": {
            "!type": "fn()"
           },
           "getDepth": {
            "!type": "fn()"
           },
           "generate": {
            "!type": "fn()"
           }
          }
         },
         "themes": {
          "ET": {},
          "PlotKit": {}
         },
         "widget": {
          "Chart2D": {
           "buildRendering": {
            "!type": "fn()"
           },
           "destroy": {
            "!type": "fn()"
           },
           "resize": {
            "!type": "fn()"
           }
          },
          "Legend": {
           "postCreate": {
            "!type": "fn()"
           },
           "refresh": {
            "!type": "fn()"
           },
           "_addLabel": {
            "!type": "fn()"
           },
           "_makeIcon": {
            "!type": "fn()"
           }
          },
          "Sparkline": {
           "buildRendering": {
            "!type": "fn()"
           },
           "margins": {}
          }
         }
        },
        "lang": {
         "observable": {
          "!type": "fn()"
         },
         "makeObservable": {
          "!type": "fn()"
         },
         "aspect": {
          "cflow": {
           "!type": "fn()"
          },
          "counter": {
           "!type": "fn()"
          },
          "memoizer": {
           "!type": "fn()"
          },
          "memoizerGuard": {
           "!type": "fn()"
          },
          "profiler": {
           "!type": "fn()"
          },
          "timer": {
           "!type": "fn()"
          },
          "tracer": {
           "!type": "fn()"
          },
          "advise": {
           "!type": "fn()"
          },
          "adviseRaw": {
           "!type": "fn()"
          },
          "unadvise": {
           "!type": "fn()"
          },
          "getContext": {
           "!type": "fn()"
          },
          "getContextStack": {
           "!type": "fn()"
          },
          "proceed": {
           "!type": "fn()"
          }
         },
         "docs": {
          "init": {
           "!type": "fn()"
          }
         },
         "functional": {
          "filter": {
           "!type": "fn()"
          },
          "forEach": {
           "!type": "fn()"
          },
          "map": {
           "!type": "fn()"
          },
          "every": {
           "!type": "fn()"
          },
          "some": {
           "!type": "fn()"
          },
          "inlineLambda": {
           "!type": "fn()"
          },
          "binrec": {
           "!type": "fn()"
          },
          "curry": {
           "!type": "fn()"
          },
          "partial": {
           "!type": "fn()"
          },
          "mixer": {
           "!type": "fn()"
          },
          "flip": {
           "!type": "fn()"
          },
          "foldl": {
           "!type": "fn()"
          },
          "foldl1": {
           "!type": "fn()"
          },
          "foldr": {
           "!type": "fn()"
          },
          "foldr1": {
           "!type": "fn()"
          },
          "reduce": {
           "!type": "fn()"
          },
          "reduceRight": {
           "!type": "fn()"
          },
          "unfold": {
           "!type": "fn()"
          },
          "rawLambda": {
           "!type": "fn()"
          },
          "buildLambda": {
           "!type": "fn()"
          },
          "lambda": {
           "!type": "fn()"
          },
          "clearLambdaCache": {
           "!type": "fn()"
          },
          "linrec": {
           "!type": "fn()"
          },
          "buildListcomp": {
           "!type": "fn()"
          },
          "compileListcomp": {
           "!type": "fn()"
          },
          "listcomp": {
           "!type": "fn()"
          },
          "multirec": {
           "!type": "fn()"
          },
          "numrec": {
           "!type": "fn()"
          },
          "keys": {
           "!type": "fn()"
          },
          "values": {
           "!type": "fn()"
          },
          "filterIn": {
           "!type": "fn()"
          },
          "forIn": {
           "!type": "fn()"
          },
          "mapIn": {
           "!type": "fn()"
          },
          "filterRev": {
           "!type": "fn()"
          },
          "forEachRev": {
           "!type": "fn()"
          },
          "mapRev": {
           "!type": "fn()"
          },
          "everyRev": {
           "!type": "fn()"
          },
          "someRev": {
           "!type": "fn()"
          },
          "scanl": {
           "!type": "fn()"
          },
          "scanl1": {
           "!type": "fn()"
          },
          "scanr": {
           "!type": "fn()"
          },
          "scanr1": {
           "!type": "fn()"
          },
          "repeat": {
           "!type": "fn()"
          },
          "until": {
           "!type": "fn()"
          },
          "tailrec": {
           "!type": "fn()"
          },
          "zip": {
           "!type": "fn()"
          },
          "unzip": {
           "!type": "fn()"
          }
         },
         "oo": {
          "Decorator": {
           "!type": "fn()"
          },
          "makeDecorator": {
           "!type": "fn()"
          },
          "Filter": {
           "!type": "fn()"
          },
          "filter": {
           "!type": "fn()"
          },
          "makeDeclare": {
           "!type": "fn()"
          },
          "applyDecorator": {
           "!type": "fn()"
          },
          "__MixinDefaults": {
           "!type": "fn()"
          },
          "__mixin": {
           "!type": "fn()"
          },
          "mixin": {
           "!type": "fn()"
          },
          "rearrange": {
           "!type": "fn()"
          },
          "aop": {},
          "general": {}
         },
         "utils": {
          "coerceType": {
           "!type": "fn()"
          },
          "updateWithObject": {
           "!type": "fn()"
          },
          "updateWithPattern": {
           "!type": "fn()"
          }
         }
        },
        "gfx3d": {
         "gradient": {
          "!type": "fn()"
         },
         "defaultEdges": {},
         "defaultTriangles": {},
         "defaultQuads": {},
         "defaultOrbit": {
          "center": {}
         },
         "defaultPath3d": {},
         "defaultPolygon": {},
         "defaultCube": {
          "bottom": {},
          "top": {}
         },
         "defaultCylinder": {
          "center": {}
         },
         "lighting": {
          "black": {
           "!type": "fn()"
          },
          "white": {
           "!type": "fn()"
          },
          "toStdColor": {
           "!type": "fn()"
          },
          "fromStdColor": {
           "!type": "fn()"
          },
          "scaleColor": {
           "!type": "fn()"
          },
          "addColor": {
           "!type": "fn()"
          },
          "multiplyColor": {
           "!type": "fn()"
          },
          "saturateColor": {
           "!type": "fn()"
          },
          "mixColor": {
           "!type": "fn()"
          },
          "diff2Color": {
           "!type": "fn()"
          },
          "length2Color": {
           "!type": "fn()"
          },
          "dot": {
           "!type": "fn()"
          },
          "scale": {
           "!type": "fn()"
          },
          "add": {
           "!type": "fn()"
          },
          "saturate": {
           "!type": "fn()"
          },
          "length": {
           "!type": "fn()"
          },
          "normalize": {
           "!type": "fn()"
          },
          "faceforward": {
           "!type": "fn()"
          },
          "reflect": {
           "!type": "fn()"
          },
          "diffuse": {
           "!type": "fn()"
          },
          "specular": {
           "!type": "fn()"
          },
          "phong": {
           "!type": "fn()"
          },
          "Model": {
           "constructor": {
            "!type": "fn()"
           },
           "constant": {
            "!type": "fn()"
           },
           "matte": {
            "!type": "fn()"
           },
           "metal": {
            "!type": "fn()"
           },
           "plastic": {
            "!type": "fn()"
           },
           "npr": {
            "!type": "fn()"
           }
          },
          "finish": {
           "defaults": {},
           "dull": {},
           "shiny": {},
           "glossy": {},
           "phong_dull": {},
           "phong_shiny": {},
           "phong_glossy": {},
           "luminous": {},
           "metalA": {},
           "metalB": {},
           "metalC": {},
           "metalD": {},
           "metalE": {}
          }
         },
         "matrix": {
          "translate": {
           "!type": "fn()"
          },
          "scale": {
           "!type": "fn()"
          },
          "rotateX": {
           "!type": "fn()"
          },
          "rotateXg": {
           "!type": "fn()"
          },
          "rotateY": {
           "!type": "fn()"
          },
          "rotateYg": {
           "!type": "fn()"
          },
          "rotateZ": {
           "!type": "fn()"
          },
          "rotateZg": {
           "!type": "fn()"
          },
          "cameraTranslate": {
           "!type": "fn()"
          },
          "cameraRotateX": {
           "!type": "fn()"
          },
          "cameraRotateXg": {
           "!type": "fn()"
          },
          "cameraRotateY": {
           "!type": "fn()"
          },
          "cameraRotateYg": {
           "!type": "fn()"
          },
          "cameraRotateZ": {
           "!type": "fn()"
          },
          "cameraRotateZg": {
           "!type": "fn()"
          },
          "normalize": {
           "!type": "fn()"
          },
          "clone": {
           "!type": "fn()"
          },
          "invert": {
           "!type": "fn()"
          },
          "_multiplyPoint": {
           "!type": "fn()"
          },
          "multiplyPoint": {
           "!type": "fn()"
          },
          "multiply": {
           "!type": "fn()"
          },
          "_project": {
           "!type": "fn()"
          },
          "project": {
           "!type": "fn()"
          },
          "_degToRad": {
           "!type": "fn()"
          },
          "_radToDeg": {
           "!type": "fn()"
          },
          "Matrix3D": {
           "!type": "fn()"
          }
         },
         "Viewport": {
          "constructor": {
           "!type": "fn()"
          },
          "setCameraTransform": {
           "!type": "fn()"
          },
          "applyCameraRightTransform": {
           "!type": "fn()"
          },
          "applyCameraLeftTransform": {
           "!type": "fn()"
          },
          "applyCameraTransform": {
           "!type": "fn()"
          },
          "setLights": {
           "!type": "fn()"
          },
          "addLights": {
           "!type": "fn()"
          },
          "addTodo": {
           "!type": "fn()"
          },
          "invalidate": {
           "!type": "fn()"
          },
          "setDimensions": {
           "!type": "fn()"
          },
          "render": {
           "!type": "fn()"
          }
         },
         "Scene": {
          "constructor": {
           "!type": "fn()"
          },
          "setFill": {
           "!type": "fn()"
          },
          "setStroke": {
           "!type": "fn()"
          },
          "render": {
           "!type": "fn()"
          },
          "draw": {
           "!type": "fn()"
          },
          "addTodo": {
           "!type": "fn()"
          },
          "invalidate": {
           "!type": "fn()"
          },
          "getZOrder": {
           "!type": "fn()"
          }
         },
         "Object": {
          "constructor": {
           "!type": "fn()"
          },
          "setObject": {
           "!type": "fn()"
          },
          "setTransform": {
           "!type": "fn()"
          },
          "applyRightTransform": {
           "!type": "fn()"
          },
          "applyLeftTransform": {
           "!type": "fn()"
          },
          "applyTransform": {
           "!type": "fn()"
          },
          "setFill": {
           "!type": "fn()"
          },
          "setStroke": {
           "!type": "fn()"
          },
          "toStdFill": {
           "!type": "fn()"
          },
          "invalidate": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "render": {
           "!type": "fn()"
          },
          "draw": {
           "!type": "fn()"
          },
          "getZOrder": {
           "!type": "fn()"
          },
          "getOutline": {
           "!type": "fn()"
          }
         },
         "Edges": {
          "constructor": {
           "!type": "fn()"
          },
          "setObject": {
           "!type": "fn()"
          },
          "getZOrder": {
           "!type": "fn()"
          },
          "render": {
           "!type": "fn()"
          },
          "draw": {
           "!type": "fn()"
          }
         },
         "Orbit": {
          "constructor": {
           "!type": "fn()"
          },
          "render": {
           "!type": "fn()"
          },
          "draw": {
           "!type": "fn()"
          }
         },
         "Path3d": {
          "constructor": {
           "!type": "fn()"
          },
          "_collectArgs": {
           "!type": "fn()"
          },
          "_pushSegment": {
           "!type": "fn()"
          },
          "moveTo": {
           "!type": "fn()"
          },
          "lineTo": {
           "!type": "fn()"
          },
          "closePath": {
           "!type": "fn()"
          },
          "render": {
           "!type": "fn()"
          },
          "_draw": {
           "!type": "fn()"
          },
          "_validSegments": {}
         },
         "Triangles": {
          "constructor": {
           "!type": "fn()"
          },
          "setObject": {
           "!type": "fn()"
          },
          "render": {
           "!type": "fn()"
          },
          "draw": {
           "!type": "fn()"
          },
          "getZOrder": {
           "!type": "fn()"
          }
         },
         "Quads": {
          "constructor": {
           "!type": "fn()"
          },
          "setObject": {
           "!type": "fn()"
          },
          "render": {
           "!type": "fn()"
          },
          "draw": {
           "!type": "fn()"
          },
          "getZOrder": {
           "!type": "fn()"
          }
         },
         "Polygon": {
          "constructor": {
           "!type": "fn()"
          },
          "setObject": {
           "!type": "fn()"
          },
          "render": {
           "!type": "fn()"
          },
          "draw": {
           "!type": "fn()"
          },
          "getZOrder": {
           "!type": "fn()"
          },
          "getOutline": {
           "!type": "fn()"
          }
         },
         "Cube": {
          "constructor": {
           "!type": "fn()"
          },
          "setObject": {
           "!type": "fn()"
          },
          "render": {
           "!type": "fn()"
          },
          "draw": {
           "!type": "fn()"
          },
          "getZOrder": {
           "!type": "fn()"
          }
         },
         "Cylinder": {
          "constructor": {
           "!type": "fn()"
          },
          "render": {
           "!type": "fn()"
          },
          "draw": {
           "!type": "fn()"
          }
         },
         "_creators": {
          "createEdges": {
           "!type": "fn()"
          },
          "createTriangles": {
           "!type": "fn()"
          },
          "createQuads": {
           "!type": "fn()"
          },
          "createPolygon": {
           "!type": "fn()"
          },
          "createOrbit": {
           "!type": "fn()"
          },
          "createCube": {
           "!type": "fn()"
          },
          "createCylinder": {
           "!type": "fn()"
          },
          "createPath3d": {
           "!type": "fn()"
          },
          "createScene": {
           "!type": "fn()"
          },
          "create3DObject": {
           "!type": "fn()"
          },
          "adopt": {
           "!type": "fn()"
          },
          "abandon": {
           "!type": "fn()"
          },
          "setScheduler": {
           "!type": "fn()"
          },
          "setDrawer": {
           "!type": "fn()"
          }
         },
         "scheduler": {
          "zOrder": {
           "!type": "fn()"
          },
          "bsp": {
           "!type": "fn()"
          },
          "order": {
           "!type": "fn()"
          },
          "outline": {
           "!type": "fn()"
          },
          "BinarySearchTree": {
           "constructor": {
            "!type": "fn()"
           },
           "add": {
            "!type": "fn()"
           },
           "iterate": {
            "!type": "fn()"
           }
          }
         },
         "drawer": {
          "conservative": {
           "!type": "fn()"
          },
          "chart": {
           "!type": "fn()"
          }
         },
         "vector": {
          "sum": {
           "!type": "fn()"
          },
          "center": {
           "!type": "fn()"
          },
          "substract": {
           "!type": "fn()"
          },
          "_crossProduct": {
           "!type": "fn()"
          },
          "crossProduct": {
           "!type": "fn()"
          },
          "_dotProduct": {
           "!type": "fn()"
          },
          "dotProduct": {
           "!type": "fn()"
          },
          "normalize": {
           "!type": "fn()"
          }
         }
        },
        "gfx": {
         "normalizedLength": {
          "!type": "fn()"
         },
         "getVectorFont": {
          "!type": "fn()"
         },
         "normalizeColor": {
          "!type": "fn()"
         },
         "normalizeParameters": {
          "!type": "fn()"
         },
         "makeParameters": {
          "!type": "fn()"
         },
         "formatNumber": {
          "!type": "fn()"
         },
         "makeFontString": {
          "!type": "fn()"
         },
         "splitFontString": {
          "!type": "fn()"
         },
         "px_in_pt": {
          "!type": "fn()"
         },
         "pt2px": {
          "!type": "fn()"
         },
         "px2pt": {
          "!type": "fn()"
         },
         "equalSources": {
          "!type": "fn()"
         },
         "_hasClass": {
          "!type": "fn()"
         },
         "_addClass": {
          "!type": "fn()"
         },
         "_removeClass": {
          "!type": "fn()"
         },
         "createSurface": {
          "!type": "fn()"
         },
         "attachNode": {
          "!type": "fn()"
         },
         "decompose": {
          "!type": "fn()"
         },
         "attachSurface": {
          "!type": "fn()"
         },
         "matrix": {
          "multiplyPoint": {
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
          "rotateg": {
           "!type": "fn()"
          },
          "skewX": {
           "!type": "fn()"
          },
          "skewXg": {
           "!type": "fn()"
          },
          "skewY": {
           "!type": "fn()"
          },
          "skewYg": {
           "!type": "fn()"
          },
          "reflect": {
           "!type": "fn()"
          },
          "project": {
           "!type": "fn()"
          },
          "normalize": {
           "!type": "fn()"
          },
          "clone": {
           "!type": "fn()"
          },
          "invert": {
           "!type": "fn()"
          },
          "_multiplyPoint": {
           "!type": "fn()"
          },
          "multiply": {
           "!type": "fn()"
          },
          "_sandwich": {
           "!type": "fn()"
          },
          "scaleAt": {
           "!type": "fn()"
          },
          "rotateAt": {
           "!type": "fn()"
          },
          "rotategAt": {
           "!type": "fn()"
          },
          "skewXAt": {
           "!type": "fn()"
          },
          "skewXgAt": {
           "!type": "fn()"
          },
          "skewYAt": {
           "!type": "fn()"
          },
          "skewYgAt": {
           "!type": "fn()"
          },
          "_degToRad": {
           "!type": "fn()"
          },
          "_radToDeg": {
           "!type": "fn()"
          },
          "Matrix2D": {
           "!type": "fn()"
          }
         },
         "Moveable": {
          "constructor": {
           "!type": "fn()"
          },
          "destroy": {
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
          "onMoveStart": {
           "!type": "fn()"
          },
          "onMoveStop": {
           "!type": "fn()"
          },
          "onFirstMove": {
           "!type": "fn()"
          },
          "onMove": {
           "!type": "fn()"
          },
          "onMoving": {
           "!type": "fn()"
          },
          "onMoved": {
           "!type": "fn()"
          }
         },
         "Mover": {
          "constructor": {
           "!type": "fn()"
          },
          "onMouseMove": {
           "!type": "fn()"
          },
          "onFirstMove": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          }
         },
         "vectorFontFitting": {},
         "defaultVectorText": {},
         "defaultVectorFont": {},
         "VectorFont": {
          "_decodeEntitySequence": {
           "!type": "fn()"
          },
          "_parse": {
           "!type": "fn()"
          },
          "_clean": {
           "!type": "fn()"
          },
          "constructor": {
           "!type": "fn()"
          },
          "load": {
           "!type": "fn()"
          },
          "initialized": {
           "!type": "fn()"
          },
          "_round": {
           "!type": "fn()"
          },
          "_leading": {
           "!type": "fn()"
          },
          "_normalize": {
           "!type": "fn()"
          },
          "_getWidth": {
           "!type": "fn()"
          },
          "_getLongestLine": {
           "!type": "fn()"
          },
          "_trim": {
           "!type": "fn()"
          },
          "_split": {
           "!type": "fn()"
          },
          "_getSizeFactor": {
           "!type": "fn()"
          },
          "_getFitFactor": {
           "!type": "fn()"
          },
          "_getBestFit": {
           "!type": "fn()"
          },
          "_getBestFlow": {
           "!type": "fn()"
          },
          "getWidth": {
           "!type": "fn()"
          },
          "getLineHeight": {
           "!type": "fn()"
          },
          "getCenterline": {
           "!type": "fn()"
          },
          "getBaseline": {
           "!type": "fn()"
          },
          "draw": {
           "!type": "fn()"
          },
          "onLoadBegin": {
           "!type": "fn()"
          },
          "onLoad": {
           "!type": "fn()"
          }
         },
         "defaultPath": {},
         "defaultPolyline": {},
         "defaultRect": {},
         "defaultEllipse": {},
         "defaultCircle": {},
         "defaultLine": {},
         "defaultImage": {},
         "defaultText": {},
         "defaultTextPath": {},
         "defaultStroke": {},
         "defaultLinearGradient": {},
         "defaultRadialGradient": {},
         "defaultPattern": {},
         "defaultFont": {},
         "_base": {
          "_getFontMeasurements": {
           "!type": "fn()"
          },
          "_getCachedFontMeasurements": {
           "!type": "fn()"
          },
          "_getTextBox": {
           "!type": "fn()"
          },
          "_getUniqueId": {
           "!type": "fn()"
          }
         },
         "arc": {
          "arcAsBezier": {
           "!type": "fn()"
          }
         },
         "shape": {
          "Creator": {
           "createObject": {
            "!type": "fn()"
           },
           "createShape": {
            "!type": "fn()"
           },
           "createGroup": {
            "!type": "fn()"
           },
           "createRect": {
            "!type": "fn()"
           },
           "createEllipse": {
            "!type": "fn()"
           },
           "createCircle": {
            "!type": "fn()"
           },
           "createLine": {
            "!type": "fn()"
           },
           "createPolyline": {
            "!type": "fn()"
           },
           "createImage": {
            "!type": "fn()"
           },
           "createText": {
            "!type": "fn()"
           },
           "createPath": {
            "!type": "fn()"
           },
           "createTextPath": {
            "!type": "fn()"
           },
           "_overrideSize": {
            "!type": "fn()"
           }
          },
          "Surface": {
           "constructor": {
            "!type": "fn()"
           },
           "destroy": {
            "!type": "fn()"
           },
           "getEventSource": {
            "!type": "fn()"
           },
           "_getRealMatrix": {
            "!type": "fn()"
           },
           "onLoad": {
            "!type": "fn()"
           },
           "whenLoaded": {
            "!type": "fn()"
           }
          },
          "Rect": {
           "constructor": {
            "!type": "fn()"
           },
           "getBoundingBox": {
            "!type": "fn()"
           }
          },
          "Ellipse": {
           "constructor": {
            "!type": "fn()"
           },
           "getBoundingBox": {
            "!type": "fn()"
           }
          },
          "Circle": {
           "constructor": {
            "!type": "fn()"
           },
           "getBoundingBox": {
            "!type": "fn()"
           }
          },
          "Line": {
           "constructor": {
            "!type": "fn()"
           },
           "getBoundingBox": {
            "!type": "fn()"
           }
          },
          "Polyline": {
           "constructor": {
            "!type": "fn()"
           },
           "setShape": {
            "!type": "fn()"
           },
           "getBoundingBox": {
            "!type": "fn()"
           }
          },
          "Image": {
           "constructor": {
            "!type": "fn()"
           },
           "getBoundingBox": {
            "!type": "fn()"
           },
           "setStroke": {
            "!type": "fn()"
           },
           "setFill": {
            "!type": "fn()"
           }
          },
          "Text": {
           "constructor": {
            "!type": "fn()"
           },
           "getFont": {
            "!type": "fn()"
           },
           "setFont": {
            "!type": "fn()"
           }
          },
          "_eventsProcessing": {
           "connect": {
            "!type": "fn()"
           },
           "disconnect": {
            "!type": "fn()"
           }
          },
          "Container": {
           "_init": {
            "!type": "fn()"
           },
           "add": {
            "!type": "fn()"
           },
           "remove": {
            "!type": "fn()"
           },
           "clear": {
            "!type": "fn()"
           },
           "_moveChildToFront": {
            "!type": "fn()"
           },
           "_moveChildToBack": {
            "!type": "fn()"
           }
          }
         },
         "Shape": {
          "_render": {
           "!type": "fn()"
          },
          "_renderTransform": {
           "!type": "fn()"
          },
          "_renderShape": {
           "!type": "fn()"
          },
          "_renderFill": {
           "!type": "fn()"
          },
          "_renderStroke": {
           "!type": "fn()"
          },
          "getEventSource": {
           "!type": "fn()"
          },
          "connect": {
           "!type": "fn()"
          },
          "disconnect": {
           "!type": "fn()"
          },
          "constructor": {
           "!type": "fn()"
          },
          "getNode": {
           "!type": "fn()"
          },
          "getShape": {
           "!type": "fn()"
          },
          "getTransform": {
           "!type": "fn()"
          },
          "getFill": {
           "!type": "fn()"
          },
          "getStroke": {
           "!type": "fn()"
          },
          "getParent": {
           "!type": "fn()"
          },
          "getBoundingBox": {
           "!type": "fn()"
          },
          "getTransformedBoundingBox": {
           "!type": "fn()"
          },
          "setShape": {
           "!type": "fn()"
          },
          "setFill": {
           "!type": "fn()"
          },
          "setStroke": {
           "!type": "fn()"
          },
          "setTransform": {
           "!type": "fn()"
          },
          "_applyTransform": {
           "!type": "fn()"
          },
          "moveToFront": {
           "!type": "fn()"
          },
          "moveToBack": {
           "!type": "fn()"
          },
          "_moveToFront": {
           "!type": "fn()"
          },
          "_moveToBack": {
           "!type": "fn()"
          },
          "applyRightTransform": {
           "!type": "fn()"
          },
          "applyLeftTransform": {
           "!type": "fn()"
          },
          "applyTransform": {
           "!type": "fn()"
          },
          "removeShape": {
           "!type": "fn()"
          },
          "_setParent": {
           "!type": "fn()"
          },
          "_updateParentMatrix": {
           "!type": "fn()"
          },
          "_getRealMatrix": {
           "!type": "fn()"
          },
          "_setFillAttr": {
           "!type": "fn()"
          },
          "_getParentSurface": {
           "!type": "fn()"
          },
          "setRawNode": {
           "!type": "fn()"
          },
          "_getAdjustedMatrix": {
           "!type": "fn()"
          },
          "_setFillObject": {
           "!type": "fn()"
          },
          "_translate": {
           "!type": "fn()"
          },
          "_setDimensions": {
           "!type": "fn()"
          },
          "_capMap": {},
          "_capMapReversed": {}
         },
         "Group": {
          "constructor": {
           "!type": "fn()"
          },
          "_render": {
           "!type": "fn()"
          },
          "setRawNode": {
           "!type": "fn()"
          },
          "_applyTransform": {
           "!type": "fn()"
          },
          "_setDimensions": {
           "!type": "fn()"
          }
         },
         "Surface": {
          "constructor": {
           "!type": "fn()"
          },
          "setDimensions": {
           "!type": "fn()"
          },
          "getDimensions": {
           "!type": "fn()"
          },
          "_render": {
           "!type": "fn()"
          },
          "makeDirty": {
           "!type": "fn()"
          },
          "downloadImage": {
           "!type": "fn()"
          },
          "onImageLoad": {
           "!type": "fn()"
          },
          "getEventSource": {
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
          "createViewport": {
           "!type": "fn()"
          }
         },
         "Rect": {
          "_renderShape": {
           "!type": "fn()"
          },
          "setShape": {
           "!type": "fn()"
          },
          "_getAdjustedMatrix": {
           "!type": "fn()"
          }
         },
         "Ellipse": {
          "setShape": {
           "!type": "fn()"
          },
          "_renderShape": {
           "!type": "fn()"
          },
          "_getAdjustedMatrix": {
           "!type": "fn()"
          }
         },
         "Circle": {
          "_renderShape": {
           "!type": "fn()"
          },
          "setShape": {
           "!type": "fn()"
          },
          "_getAdjustedMatrix": {
           "!type": "fn()"
          }
         },
         "Line": {
          "_renderShape": {
           "!type": "fn()"
          },
          "setShape": {
           "!type": "fn()"
          },
          "constructor": {
           "!type": "fn()"
          }
         },
         "Polyline": {
          "setShape": {
           "!type": "fn()"
          },
          "_renderShape": {
           "!type": "fn()"
          },
          "constructor": {
           "!type": "fn()"
          }
         },
         "Image": {
          "setShape": {
           "!type": "fn()"
          },
          "_renderShape": {
           "!type": "fn()"
          },
          "_getAdjustedMatrix": {
           "!type": "fn()"
          },
          "setRawNode": {
           "!type": "fn()"
          },
          "_applyTransform": {
           "!type": "fn()"
          },
          "_setDimensions": {
           "!type": "fn()"
          }
         },
         "Text": {
          "_renderShape": {
           "!type": "fn()"
          },
          "setShape": {
           "!type": "fn()"
          },
          "_delayAlignment": {
           "!type": "fn()"
          },
          "_getAdjustedMatrix": {
           "!type": "fn()"
          },
          "setStroke": {
           "!type": "fn()"
          },
          "_setFillAttr": {
           "!type": "fn()"
          },
          "setRawNode": {
           "!type": "fn()"
          },
          "getTextWidth": {
           "!type": "fn()"
          },
          "constructor": {
           "!type": "fn()"
          },
          "_setFont": {
           "!type": "fn()"
          },
          "_getRealMatrix": {
           "!type": "fn()"
          },
          "_alignment": {}
         },
         "Path": {
          "constructor": {
           "!type": "fn()"
          },
          "setShape": {
           "!type": "fn()"
          },
          "_updateWithSegment": {
           "!type": "fn()"
          },
          "_renderShape": {
           "!type": "fn()"
          },
          "_moveToA": {
           "!type": "fn()"
          },
          "_moveToR": {
           "!type": "fn()"
          },
          "_lineToA": {
           "!type": "fn()"
          },
          "_lineToR": {
           "!type": "fn()"
          },
          "_hLineToA": {
           "!type": "fn()"
          },
          "_hLineToR": {
           "!type": "fn()"
          },
          "_vLineToA": {
           "!type": "fn()"
          },
          "_vLineToR": {
           "!type": "fn()"
          },
          "_curveToA": {
           "!type": "fn()"
          },
          "_curveToR": {
           "!type": "fn()"
          },
          "_smoothCurveToA": {
           "!type": "fn()"
          },
          "_smoothCurveToR": {
           "!type": "fn()"
          },
          "_qCurveToA": {
           "!type": "fn()"
          },
          "_qCurveToR": {
           "!type": "fn()"
          },
          "_qSmoothCurveToA": {
           "!type": "fn()"
          },
          "_qSmoothCurveToR": {
           "!type": "fn()"
          },
          "_arcTo": {
           "!type": "fn()"
          },
          "_closePath": {
           "!type": "fn()"
          },
          "_addArgs": {
           "!type": "fn()"
          },
          "_adjustRelCrd": {
           "!type": "fn()"
          },
          "_adjustRelPos": {
           "!type": "fn()"
          },
          "_pathVmlToSvgMap": {},
          "renderers": {}
         },
         "TextPath": {
          "_renderShape": {
           "!type": "fn()"
          },
          "_updateWithSegment": {
           "!type": "fn()"
          },
          "setShape": {
           "!type": "fn()"
          },
          "_setText": {
           "!type": "fn()"
          },
          "_setTextPath": {
           "!type": "fn()"
          },
          "constructor": {
           "!type": "fn()"
          },
          "setText": {
           "!type": "fn()"
          },
          "setFont": {
           "!type": "fn()"
          },
          "_setFont": {
           "!type": "fn()"
          }
         },
         "fx": {
          "animateStroke": {
           "!type": "fn()"
          },
          "animateFill": {
           "!type": "fn()"
          },
          "animateFont": {
           "!type": "fn()"
          },
          "animateTransform": {
           "!type": "fn()"
          }
         },
         "path": {
          "_calcArc": {
           "!type": "fn()"
          },
          "Path": {
           "constructor": {
            "!type": "fn()"
           },
           "setAbsoluteMode": {
            "!type": "fn()"
           },
           "getAbsoluteMode": {
            "!type": "fn()"
           },
           "getBoundingBox": {
            "!type": "fn()"
           },
           "getLastPosition": {
            "!type": "fn()"
           },
           "_updateBBox": {
            "!type": "fn()"
           },
           "_updateWithSegment": {
            "!type": "fn()"
           },
           "_pushSegment": {
            "!type": "fn()"
           },
           "_collectArgs": {
            "!type": "fn()"
           },
           "moveTo": {
            "!type": "fn()"
           },
           "lineTo": {
            "!type": "fn()"
           },
           "hLineTo": {
            "!type": "fn()"
           },
           "vLineTo": {
            "!type": "fn()"
           },
           "curveTo": {
            "!type": "fn()"
           },
           "smoothCurveTo": {
            "!type": "fn()"
           },
           "qCurveTo": {
            "!type": "fn()"
           },
           "qSmoothCurveTo": {
            "!type": "fn()"
           },
           "arcTo": {
            "!type": "fn()"
           },
           "closePath": {
            "!type": "fn()"
           },
           "_setPath": {
            "!type": "fn()"
           },
           "setShape": {
            "!type": "fn()"
           },
           "_validSegments": {}
          },
          "TextPath": {
           "constructor": {
            "!type": "fn()"
           },
           "getText": {
            "!type": "fn()"
           },
           "setText": {
            "!type": "fn()"
           },
           "getFont": {
            "!type": "fn()"
           },
           "setFont": {
            "!type": "fn()"
           }
          }
         },
         "Point": {},
         "Rectangle": {},
         "silverlight": {
          "hexColor": {
           "!type": "fn()"
          },
          "nullFunc": {
           "!type": "fn()"
          },
          "dasharray": {},
          "fontweight": {},
          "caps": {},
          "joins": {},
          "fonts": {},
          "Font": {
           "_setFont": {
            "!type": "fn()"
           }
          },
          "Container": {
           "_init": {
            "!type": "fn()"
           },
           "add": {
            "!type": "fn()"
           },
           "remove": {
            "!type": "fn()"
           },
           "clear": {
            "!type": "fn()"
           }
          }
         },
         "svg": {
          "getRef": {
           "!type": "fn()"
          },
          "xmlns": {},
          "dasharray": {},
          "Font": {
           "_setFont": {
            "!type": "fn()"
           }
          },
          "Container": {
           "_init": {
            "!type": "fn()"
           },
           "add": {
            "!type": "fn()"
           },
           "remove": {
            "!type": "fn()"
           },
           "clear": {
            "!type": "fn()"
           }
          }
         },
         "utils": {
          "forEach": {
           "!type": "fn()"
          },
          "serialize": {
           "!type": "fn()"
          },
          "toJson": {
           "!type": "fn()"
          },
          "deserialize": {
           "!type": "fn()"
          },
          "fromJson": {
           "!type": "fn()"
          }
         },
         "vml": {
          "_parseFloat": {
           "!type": "fn()"
          },
          "text_alignment": {},
          "_bool": {},
          "Container": {
           "_init": {
            "!type": "fn()"
           },
           "add": {
            "!type": "fn()"
           },
           "remove": {
            "!type": "fn()"
           },
           "clear": {
            "!type": "fn()"
           }
          }
         }
        },
        "collections": {
         "ArrayList": {
          "!type": "fn()"
         },
         "Dictionary": {
          "!type": "fn()"
         },
         "Queue": {
          "!type": "fn()"
         },
         "SortedList": {
          "!type": "fn()"
         },
         "Stack": {
          "!type": "fn()"
         },
         "DictionaryEntry": {
          "!type": "fn()"
         },
         "Iterator": {
          "!type": "fn()"
         },
         "DictionaryIterator": {
          "!type": "fn()"
         },
         "BinaryTree": {
          "TraversalMethods": {}
         }
        },
        "color": {
         "fromXYZ": {
          "!type": "fn()"
         },
         "fromCmy": {
          "!type": "fn()"
         },
         "fromCmyk": {
          "!type": "fn()"
         },
         "fromHsl": {
          "!type": "fn()"
         },
         "fromHsv": {
          "!type": "fn()"
         },
         "Color": {
          "toXYZ": {
           "!type": "fn()"
          },
          "toCmy": {
           "!type": "fn()"
          },
          "toCmyk": {
           "!type": "fn()"
          },
          "toHsl": {
           "!type": "fn()"
          },
          "toHsv": {
           "!type": "fn()"
          }
         },
         "Palette": {
          "generate": {
           "!type": "fn()"
          },
          "transform": {
           "!type": "fn()"
          },
          "clone": {
           "!type": "fn()"
          },
          "generators": {
           "analogous": {
            "!type": "fn()"
           },
           "monochromatic": {
            "!type": "fn()"
           },
           "triadic": {
            "!type": "fn()"
           },
           "complementary": {
            "!type": "fn()"
           },
           "splitComplementary": {
            "!type": "fn()"
           },
           "compound": {
            "!type": "fn()"
           },
           "shades": {
            "!type": "fn()"
           }
          }
         }
        },
        "math": {
         "degreesToRadians": {
          "!type": "fn()"
         },
         "radiansToDegrees": {
          "!type": "fn()"
         },
         "factorial": {
          "!type": "fn()"
         },
         "permutations": {
          "!type": "fn()"
         },
         "combinations": {
          "!type": "fn()"
         },
         "bernstein": {
          "!type": "fn()"
         },
         "gaussian": {
          "!type": "fn()"
         },
         "sd": {
          "!type": "fn()"
         },
         "variance": {
          "!type": "fn()"
         },
         "bestFit": {
          "!type": "fn()"
         },
         "mean": {
          "!type": "fn()"
         },
         "min": {
          "!type": "fn()"
         },
         "max": {
          "!type": "fn()"
         },
         "median": {
          "!type": "fn()"
         },
         "mode": {
          "!type": "fn()"
         },
         "approxLin": {
          "!type": "fn()"
         },
         "getSummary": {
          "!type": "fn()"
         },
         "range": {
          "!type": "fn()"
         },
         "distance": {
          "!type": "fn()"
         },
         "midpoint": {
          "!type": "fn()"
         },
         "round": {
          "!type": "fn()"
         },
         "curves": {
          "Line": {
           "!type": "fn()"
          },
          "Bezier": {
           "!type": "fn()"
          },
          "CatmullRom": {
           "!type": "fn()"
          },
          "Arc": {
           "!type": "fn()"
          },
          "CenteredArc": {
           "!type": "fn()"
          },
          "Circle": {
           "!type": "fn()"
          },
          "Path": {
           "!type": "fn()"
          }
         },
         "matrix": {
          "multiply": {
           "!type": "fn()"
          },
          "product": {
           "!type": "fn()"
          },
          "sum": {
           "!type": "fn()"
          },
          "inverse": {
           "!type": "fn()"
          },
          "determinant": {
           "!type": "fn()"
          },
          "upperTriangle": {
           "!type": "fn()"
          },
          "create": {
           "!type": "fn()"
          },
          "ones": {
           "!type": "fn()"
          },
          "zeros": {
           "!type": "fn()"
          },
          "identity": {
           "!type": "fn()"
          },
          "adjoint": {
           "!type": "fn()"
          },
          "transpose": {
           "!type": "fn()"
          },
          "format": {
           "!type": "fn()"
          },
          "copy": {
           "!type": "fn()"
          },
          "scale": {
           "!type": "fn()"
          }
         }
        },
        "cometd": {
         "Connection": {
          "!type": "fn()"
         },
         "_ack": {
          "!type": "fn()"
         },
         "callbackPollTransport": {
          "!type": "fn()"
         },
         "longPollTransportFormEncoded": {
          "!type": "fn()"
         },
         "longPollTransportJsonEncoded": {
          "!type": "fn()"
         },
         "timesync": {
          "!type": "fn()"
         },
         "RestChannels": {
          "constructor": {
           "!type": "fn()"
          },
          "absoluteUrl": {
           "!type": "fn()"
          },
          "open": {
           "!type": "fn()"
          },
          "_send": {
           "!type": "fn()"
          },
          "subscribe": {
           "!type": "fn()"
          },
          "publish": {
           "!type": "fn()"
          },
          "_processMessage": {
           "!type": "fn()"
          },
          "onprogress": {
           "!type": "fn()"
          },
          "get": {
           "!type": "fn()"
          },
          "receive": {
           "!type": "fn()"
          },
          "disconnected": {
           "!type": "fn()"
          },
          "unsubscribe": {
           "!type": "fn()"
          },
          "disconnect": {
           "!type": "fn()"
          }
         }
        },
        "rpc": {
         "Rest": {
          "_get": {
           "!type": "fn()"
          },
          "_change": {
           "!type": "fn()"
          }
         },
         "JsonRest": {
          "commit": {
           "!type": "fn()"
          },
          "sendToServer": {
           "!type": "fn()"
          },
          "getDirtyObjects": {
           "!type": "fn()"
          },
          "revert": {
           "!type": "fn()"
          },
          "changing": {
           "!type": "fn()"
          },
          "deleteObject": {
           "!type": "fn()"
          },
          "getConstructor": {
           "!type": "fn()"
          },
          "fetch": {
           "!type": "fn()"
          },
          "getIdAttribute": {
           "!type": "fn()"
          },
          "getServiceAndId": {
           "!type": "fn()"
          },
          "registerService": {
           "!type": "fn()"
          },
          "byId": {
           "!type": "fn()"
          },
          "query": {
           "!type": "fn()"
          },
          "_loader": {
           "!type": "fn()"
          },
          "isDirty": {
           "!type": "fn()"
          }
         },
         "getTarget": {
          "!type": "fn()"
         },
         "toOrdered": {
          "!type": "fn()"
         },
         "Client": {},
         "OfflineRest": {
          "turnOffAutoSync": {
           "!type": "fn()"
          },
          "downloadChanges": {
           "!type": "fn()"
          },
          "addStore": {
           "!type": "fn()"
          }
         },
         "Service": {
          "constructor": {
           "!type": "fn()"
          },
          "_generateService": {
           "!type": "fn()"
          },
          "_getRequest": {
           "!type": "fn()"
          },
          "_executeMethod": {
           "!type": "fn()"
          }
         }
        },
        "data": {
         "_getStoreForItem": {
          "!type": "fn()"
         },
         "restListener": {
          "!type": "fn()"
         },
         "AndOrReadStore": {
          "constructor": {
           "!type": "fn()"
          },
          "_assertIsItem": {
           "!type": "fn()"
          },
          "_assertIsAttribute": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "getValues": {
           "!type": "fn()"
          },
          "getAttributes": {
           "!type": "fn()"
          },
          "hasAttribute": {
           "!type": "fn()"
          },
          "containsValue": {
           "!type": "fn()"
          },
          "_containsValue": {
           "!type": "fn()"
          },
          "isItem": {
           "!type": "fn()"
          },
          "isItemLoaded": {
           "!type": "fn()"
          },
          "loadItem": {
           "!type": "fn()"
          },
          "getFeatures": {
           "!type": "fn()"
          },
          "getLabel": {
           "!type": "fn()"
          },
          "getLabelAttributes": {
           "!type": "fn()"
          },
          "_fetchItems": {
           "!type": "fn()"
          },
          "_handleQueuedFetches": {
           "!type": "fn()"
          },
          "_getItemsArray": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          },
          "_getItemsFromLoadedData": {
           "!type": "fn()"
          },
          "_addReferenceToMap": {
           "!type": "fn()"
          },
          "getIdentity": {
           "!type": "fn()"
          },
          "fetchItemByIdentity": {
           "!type": "fn()"
          },
          "_getItemByIdentity": {
           "!type": "fn()"
          },
          "getIdentityAttributes": {
           "!type": "fn()"
          },
          "_forceLoad": {
           "!type": "fn()"
          }
         },
         "AndOrWriteStore": {
          "constructor": {
           "!type": "fn()"
          },
          "_assert": {
           "!type": "fn()"
          },
          "_getIdentifierAttribute": {
           "!type": "fn()"
          },
          "newItem": {
           "!type": "fn()"
          },
          "_removeArrayElement": {
           "!type": "fn()"
          },
          "deleteItem": {
           "!type": "fn()"
          },
          "setValue": {
           "!type": "fn()"
          },
          "setValues": {
           "!type": "fn()"
          },
          "unsetAttribute": {
           "!type": "fn()"
          },
          "_setValueOrValues": {
           "!type": "fn()"
          },
          "_addReferenceToMap": {
           "!type": "fn()"
          },
          "_removeReferenceFromMap": {
           "!type": "fn()"
          },
          "_dumpReferenceMap": {
           "!type": "fn()"
          },
          "_getValueOrValues": {
           "!type": "fn()"
          },
          "_flatten": {
           "!type": "fn()"
          },
          "_getNewFileContentString": {
           "!type": "fn()"
          },
          "_isEmpty": {
           "!type": "fn()"
          },
          "save": {
           "!type": "fn()"
          },
          "revert": {
           "!type": "fn()"
          },
          "isDirty": {
           "!type": "fn()"
          },
          "onSet": {
           "!type": "fn()"
          },
          "onNew": {
           "!type": "fn()"
          },
          "onDelete": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          }
         },
         "AppStore": {
          "constructor": {
           "!type": "fn()"
          },
          "_setFeed": {
           "!type": "fn()"
          },
          "_getAllItems": {
           "!type": "fn()"
          },
          "_assertIsItem": {
           "!type": "fn()"
          },
          "_assertIsAttribute": {
           "!type": "fn()"
          },
          "_addUpdate": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "getValues": {
           "!type": "fn()"
          },
          "getAttributes": {
           "!type": "fn()"
          },
          "hasAttribute": {
           "!type": "fn()"
          },
          "containsValue": {
           "!type": "fn()"
          },
          "_containsValue": {
           "!type": "fn()"
          },
          "isItem": {
           "!type": "fn()"
          },
          "isItemLoaded": {
           "!type": "fn()"
          },
          "loadItem": {
           "!type": "fn()"
          },
          "_fetchItems": {
           "!type": "fn()"
          },
          "_finishFetchItems": {
           "!type": "fn()"
          },
          "getFeatures": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          },
          "getLabel": {
           "!type": "fn()"
          },
          "getLabelAttributes": {
           "!type": "fn()"
          },
          "getIdentity": {
           "!type": "fn()"
          },
          "getIdentityAttributes": {
           "!type": "fn()"
          },
          "fetchItemByIdentity": {
           "!type": "fn()"
          },
          "newItem": {
           "!type": "fn()"
          },
          "deleteItem": {
           "!type": "fn()"
          },
          "setValue": {
           "!type": "fn()"
          },
          "setValues": {
           "!type": "fn()"
          },
          "unsetAttribute": {
           "!type": "fn()"
          },
          "save": {
           "!type": "fn()"
          },
          "revert": {
           "!type": "fn()"
          },
          "isDirty": {
           "!type": "fn()"
          }
         },
         "AtomReadStore": {
          "constructor": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "getValues": {
           "!type": "fn()"
          },
          "getAttributes": {
           "!type": "fn()"
          },
          "hasAttribute": {
           "!type": "fn()"
          },
          "containsValue": {
           "!type": "fn()"
          },
          "isItem": {
           "!type": "fn()"
          },
          "isItemLoaded": {
           "!type": "fn()"
          },
          "loadItem": {
           "!type": "fn()"
          },
          "getFeatures": {
           "!type": "fn()"
          },
          "getLabel": {
           "!type": "fn()"
          },
          "getLabelAttributes": {
           "!type": "fn()"
          },
          "getFeedValue": {
           "!type": "fn()"
          },
          "getFeedValues": {
           "!type": "fn()"
          },
          "_initItem": {
           "!type": "fn()"
          },
          "_fetchItems": {
           "!type": "fn()"
          },
          "_getFetchUrl": {
           "!type": "fn()"
          },
          "_getItems": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          },
          "_getItem": {
           "!type": "fn()"
          },
          "_parseItem": {
           "!type": "fn()"
          },
          "_unescapeHTML": {
           "!type": "fn()"
          },
          "_assertIsItem": {
           "!type": "fn()"
          },
          "_assertIsAttribute": {
           "!type": "fn()"
          }
         },
         "CdfStore": {
          "constructor": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "getValues": {
           "!type": "fn()"
          },
          "getAttributes": {
           "!type": "fn()"
          },
          "hasAttribute": {
           "!type": "fn()"
          },
          "hasProperty": {
           "!type": "fn()"
          },
          "containsValue": {
           "!type": "fn()"
          },
          "isItem": {
           "!type": "fn()"
          },
          "isItemLoaded": {
           "!type": "fn()"
          },
          "loadItem": {
           "!type": "fn()"
          },
          "getFeatures": {
           "!type": "fn()"
          },
          "getLabel": {
           "!type": "fn()"
          },
          "getLabelAttributes": {
           "!type": "fn()"
          },
          "fetch": {
           "!type": "fn()"
          },
          "_loadCDF": {
           "!type": "fn()"
          },
          "_getItems": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          },
          "newItem": {
           "!type": "fn()"
          },
          "deleteItem": {
           "!type": "fn()"
          },
          "setValue": {
           "!type": "fn()"
          },
          "setValues": {
           "!type": "fn()"
          },
          "unsetAttribute": {
           "!type": "fn()"
          },
          "revert": {
           "!type": "fn()"
          },
          "isDirty": {
           "!type": "fn()"
          },
          "_makeDirty": {
           "!type": "fn()"
          },
          "_makeXmlString": {
           "!type": "fn()"
          },
          "getIdentity": {
           "!type": "fn()"
          },
          "getIdentityAttributes": {
           "!type": "fn()"
          },
          "fetchItemByIdentity": {
           "!type": "fn()"
          },
          "byId": {
           "!type": "fn()"
          }
         },
         "ClientFilter": {
          "constructor": {
           "!type": "fn()"
          },
          "clearCache": {
           "!type": "fn()"
          },
          "updateResultSet": {
           "!type": "fn()"
          },
          "querySuperSet": {
           "!type": "fn()"
          },
          "cachingFetch": {
           "!type": "fn()"
          },
          "isUpdateable": {
           "!type": "fn()"
          },
          "clientSideFetch": {
           "!type": "fn()"
          },
          "clientSidePaging": {
           "!type": "fn()"
          },
          "matchesQuery": {
           "!type": "fn()"
          },
          "makeComparator": {
           "!type": "fn()"
          }
         },
         "CouchDBRestStore": {
          "save": {
           "!type": "fn()"
          },
          "fetch": {
           "!type": "fn()"
          },
          "_processResults": {
           "!type": "fn()"
          },
          "getStores": {
           "!type": "fn()"
          }
         },
         "CssClassStore": {
          "getFeatures": {
           "!type": "fn()"
          },
          "getAttributes": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "getValues": {
           "!type": "fn()"
          },
          "_handleRule": {
           "!type": "fn()"
          },
          "_handleReturn": {
           "!type": "fn()"
          },
          "_handleFetchByIdentityReturn": {
           "!type": "fn()"
          },
          "getIdentity": {
           "!type": "fn()"
          },
          "getIdentityAttributes": {
           "!type": "fn()"
          },
          "fetchItemByIdentity": {
           "!type": "fn()"
          }
         },
         "CssRuleStore": {
          "constructor": {
           "!type": "fn()"
          },
          "setContext": {
           "!type": "fn()"
          },
          "getFeatures": {
           "!type": "fn()"
          },
          "isItem": {
           "!type": "fn()"
          },
          "hasAttribute": {
           "!type": "fn()"
          },
          "getAttributes": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "getValues": {
           "!type": "fn()"
          },
          "getLabel": {
           "!type": "fn()"
          },
          "getLabelAttributes": {
           "!type": "fn()"
          },
          "containsValue": {
           "!type": "fn()"
          },
          "isItemLoaded": {
           "!type": "fn()"
          },
          "loadItem": {
           "!type": "fn()"
          },
          "fetch": {
           "!type": "fn()"
          },
          "_fetch": {
           "!type": "fn()"
          },
          "_handleRule": {
           "!type": "fn()"
          },
          "_handleReturn": {
           "!type": "fn()"
          },
          "_handleFetchReturn": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          },
          "_assertIsItem": {
           "!type": "fn()"
          },
          "_assertIsAttribute": {
           "!type": "fn()"
          },
          "_containsValue": {
           "!type": "fn()"
          }
         },
         "CsvStore": {
          "constructor": {
           "!type": "fn()"
          },
          "_assertIsItem": {
           "!type": "fn()"
          },
          "_assertIsAttribute": {
           "!type": "fn()"
          },
          "_getIndex": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "getValues": {
           "!type": "fn()"
          },
          "getAttributes": {
           "!type": "fn()"
          },
          "hasAttribute": {
           "!type": "fn()"
          },
          "containsValue": {
           "!type": "fn()"
          },
          "_containsValue": {
           "!type": "fn()"
          },
          "isItem": {
           "!type": "fn()"
          },
          "isItemLoaded": {
           "!type": "fn()"
          },
          "loadItem": {
           "!type": "fn()"
          },
          "getFeatures": {
           "!type": "fn()"
          },
          "getLabel": {
           "!type": "fn()"
          },
          "getLabelAttributes": {
           "!type": "fn()"
          },
          "_fetchItems": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          },
          "_splitLines": {
           "!type": "fn()"
          },
          "_processData": {
           "!type": "fn()"
          },
          "_createItemFromIdentity": {
           "!type": "fn()"
          },
          "getIdentity": {
           "!type": "fn()"
          },
          "fetchItemByIdentity": {
           "!type": "fn()"
          },
          "getIdentityAttributes": {
           "!type": "fn()"
          },
          "_handleQueuedFetches": {
           "!type": "fn()"
          }
         },
         "FileStore": {
          "constructor": {
           "!type": "fn()"
          },
          "_assertIsItem": {
           "!type": "fn()"
          },
          "_assertIsAttribute": {
           "!type": "fn()"
          },
          "getFeatures": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "getAttributes": {
           "!type": "fn()"
          },
          "hasAttribute": {
           "!type": "fn()"
          },
          "getIdentity": {
           "!type": "fn()"
          },
          "getIdentityAttributes": {
           "!type": "fn()"
          },
          "isItemLoaded": {
           "!type": "fn()"
          },
          "loadItem": {
           "!type": "fn()"
          },
          "getLabel": {
           "!type": "fn()"
          },
          "getLabelAttributes": {
           "!type": "fn()"
          },
          "containsValue": {
           "!type": "fn()"
          },
          "getValues": {
           "!type": "fn()"
          },
          "isItem": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          },
          "fetch": {
           "!type": "fn()"
          },
          "fetchItemByIdentity": {
           "!type": "fn()"
          },
          "_processResult": {
           "!type": "fn()"
          },
          "_processItemArray": {
           "!type": "fn()"
          },
          "_processItem": {
           "!type": "fn()"
          }
         },
         "FlickrRestStore": {
          "constructor": {
           "!type": "fn()"
          },
          "_fetchItems": {
           "!type": "fn()"
          },
          "getAttributes": {
           "!type": "fn()"
          },
          "getValues": {
           "!type": "fn()"
          },
          "_processFlickrData": {
           "!type": "fn()"
          },
          "_checkPrevRanges": {
           "!type": "fn()"
          },
          "_sortAttributes": {}
         },
         "FlickrStore": {
          "constructor": {
           "!type": "fn()"
          },
          "_assertIsItem": {
           "!type": "fn()"
          },
          "_assertIsAttribute": {
           "!type": "fn()"
          },
          "getFeatures": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "getAttributes": {
           "!type": "fn()"
          },
          "hasAttribute": {
           "!type": "fn()"
          },
          "isItemLoaded": {
           "!type": "fn()"
          },
          "loadItem": {
           "!type": "fn()"
          },
          "getLabel": {
           "!type": "fn()"
          },
          "getLabelAttributes": {
           "!type": "fn()"
          },
          "containsValue": {
           "!type": "fn()"
          },
          "getValues": {
           "!type": "fn()"
          },
          "isItem": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          },
          "_fetchItems": {
           "!type": "fn()"
          },
          "_processFlickrData": {
           "!type": "fn()"
          },
          "_unescapeHtml": {
           "!type": "fn()"
          }
         },
         "GoogleFeedStore": {
          "_processItem": {
           "!type": "fn()"
          },
          "_getItems": {
           "!type": "fn()"
          },
          "_createContent": {
           "!type": "fn()"
          }
         },
         "GoogleSearchStore": {
          "constructor": {
           "!type": "fn()"
          },
          "_assertIsItem": {
           "!type": "fn()"
          },
          "_assertIsAttribute": {
           "!type": "fn()"
          },
          "getFeatures": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "getAttributes": {
           "!type": "fn()"
          },
          "hasAttribute": {
           "!type": "fn()"
          },
          "isItemLoaded": {
           "!type": "fn()"
          },
          "loadItem": {
           "!type": "fn()"
          },
          "getLabel": {
           "!type": "fn()"
          },
          "getLabelAttributes": {
           "!type": "fn()"
          },
          "containsValue": {
           "!type": "fn()"
          },
          "getValues": {
           "!type": "fn()"
          },
          "isItem": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          },
          "_format": {
           "!type": "fn()"
          },
          "fetch": {
           "!type": "fn()"
          },
          "_processItem": {
           "!type": "fn()"
          },
          "_getItems": {
           "!type": "fn()"
          },
          "_createContent": {
           "!type": "fn()"
          }
         },
         "GoogleWebSearchStore": {},
         "GoogleBlogSearchStore": {},
         "GoogleLocalSearchStore": {},
         "GoogleVideoSearchStore": {},
         "GoogleNewsSearchStore": {},
         "GoogleBookSearchStore": {},
         "GoogleImageSearchStore": {},
         "HtmlStore": {
          "constructor": {
           "!type": "fn()"
          },
          "_indexItems": {
           "!type": "fn()"
          },
          "_getHeadings": {
           "!type": "fn()"
          },
          "_getAllItems": {
           "!type": "fn()"
          },
          "_assertIsItem": {
           "!type": "fn()"
          },
          "_assertIsAttribute": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "getValues": {
           "!type": "fn()"
          },
          "getAttributes": {
           "!type": "fn()"
          },
          "hasAttribute": {
           "!type": "fn()"
          },
          "containsValue": {
           "!type": "fn()"
          },
          "_containsValue": {
           "!type": "fn()"
          },
          "isItem": {
           "!type": "fn()"
          },
          "isItemLoaded": {
           "!type": "fn()"
          },
          "loadItem": {
           "!type": "fn()"
          },
          "_fetchItems": {
           "!type": "fn()"
          },
          "_finishFetchItems": {
           "!type": "fn()"
          },
          "getFeatures": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          },
          "getLabel": {
           "!type": "fn()"
          },
          "getLabelAttributes": {
           "!type": "fn()"
          },
          "getIdentity": {
           "!type": "fn()"
          },
          "getIdentityAttributes": {
           "!type": "fn()"
          },
          "fetchItemByIdentity": {
           "!type": "fn()"
          }
         },
         "HtmlTableStore": {
          "constructor": {
           "!type": "fn()"
          },
          "_getHeadings": {
           "!type": "fn()"
          },
          "_getAllItems": {
           "!type": "fn()"
          },
          "_assertIsItem": {
           "!type": "fn()"
          },
          "_assertIsAttribute": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "getValues": {
           "!type": "fn()"
          },
          "getAttributes": {
           "!type": "fn()"
          },
          "hasAttribute": {
           "!type": "fn()"
          },
          "containsValue": {
           "!type": "fn()"
          },
          "_containsValue": {
           "!type": "fn()"
          },
          "isItem": {
           "!type": "fn()"
          },
          "isItemLoaded": {
           "!type": "fn()"
          },
          "loadItem": {
           "!type": "fn()"
          },
          "_fetchItems": {
           "!type": "fn()"
          },
          "_finishFetchItems": {
           "!type": "fn()"
          },
          "getFeatures": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          },
          "getLabel": {
           "!type": "fn()"
          },
          "getLabelAttributes": {
           "!type": "fn()"
          },
          "getIdentity": {
           "!type": "fn()"
          },
          "getIdentityAttributes": {
           "!type": "fn()"
          },
          "fetchItemByIdentity": {
           "!type": "fn()"
          }
         },
         "ItemExplorer": {
          "constructor": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "setStore": {
           "!type": "fn()"
          },
          "setItem": {
           "!type": "fn()"
          },
          "refreshItem": {
           "!type": "fn()"
          },
          "_createEditDialog": {
           "!type": "fn()"
          },
          "_enableFields": {
           "!type": "fn()"
          },
          "_updateItem": {
           "!type": "fn()"
          },
          "_editProperty": {
           "!type": "fn()"
          },
          "_destroyProperty": {
           "!type": "fn()"
          },
          "_addProperty": {
           "!type": "fn()"
          }
         },
         "JsonQueryRestStore": {
          "matchesQuery": {
           "!type": "fn()"
          }
         },
         "JsonRestStore": {
          "constructor": {
           "!type": "fn()"
          },
          "newItem": {
           "!type": "fn()"
          },
          "deleteItem": {
           "!type": "fn()"
          },
          "changing": {
           "!type": "fn()"
          },
          "setValue": {
           "!type": "fn()"
          },
          "setValues": {
           "!type": "fn()"
          },
          "unsetAttribute": {
           "!type": "fn()"
          },
          "save": {
           "!type": "fn()"
          },
          "revert": {
           "!type": "fn()"
          },
          "isDirty": {
           "!type": "fn()"
          },
          "isItem": {
           "!type": "fn()"
          },
          "_doQuery": {
           "!type": "fn()"
          },
          "_processResults": {
           "!type": "fn()"
          },
          "getConstructor": {
           "!type": "fn()"
          },
          "getIdentity": {
           "!type": "fn()"
          },
          "fetchItemByIdentity": {
           "!type": "fn()"
          },
          "onSet": {
           "!type": "fn()"
          },
          "onNew": {
           "!type": "fn()"
          },
          "onDelete": {
           "!type": "fn()"
          },
          "getFeatures": {
           "!type": "fn()"
          }
         },
         "KeyValueStore": {
          "constructor": {
           "!type": "fn()"
          },
          "_assertIsItem": {
           "!type": "fn()"
          },
          "_assertIsAttribute": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "getValues": {
           "!type": "fn()"
          },
          "getAttributes": {
           "!type": "fn()"
          },
          "hasAttribute": {
           "!type": "fn()"
          },
          "containsValue": {
           "!type": "fn()"
          },
          "_containsValue": {
           "!type": "fn()"
          },
          "isItem": {
           "!type": "fn()"
          },
          "isItemLoaded": {
           "!type": "fn()"
          },
          "loadItem": {
           "!type": "fn()"
          },
          "getFeatures": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          },
          "getLabel": {
           "!type": "fn()"
          },
          "getLabelAttributes": {
           "!type": "fn()"
          },
          "_fetchItems": {
           "!type": "fn()"
          },
          "_handleQueuedFetches": {
           "!type": "fn()"
          },
          "_processData": {
           "!type": "fn()"
          },
          "_createItem": {
           "!type": "fn()"
          },
          "getIdentity": {
           "!type": "fn()"
          },
          "getIdentityAttributes": {
           "!type": "fn()"
          },
          "fetchItemByIdentity": {
           "!type": "fn()"
          },
          "_finishFetchItemByIdentity": {
           "!type": "fn()"
          }
         },
         "OpenSearchStore": {
          "constructor": {
           "!type": "fn()"
          },
          "_assertIsItem": {
           "!type": "fn()"
          },
          "_assertIsAttribute": {
           "!type": "fn()"
          },
          "getFeatures": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "getAttributes": {
           "!type": "fn()"
          },
          "hasAttribute": {
           "!type": "fn()"
          },
          "isItemLoaded": {
           "!type": "fn()"
          },
          "loadItem": {
           "!type": "fn()"
          },
          "getLabel": {
           "!type": "fn()"
          },
          "getLabelAttributes": {
           "!type": "fn()"
          },
          "containsValue": {
           "!type": "fn()"
          },
          "getValues": {
           "!type": "fn()"
          },
          "isItem": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          },
          "process": {
           "!type": "fn()"
          },
          "processItem": {
           "!type": "fn()"
          },
          "_createSearchUrl": {
           "!type": "fn()"
          },
          "_fetchItems": {
           "!type": "fn()"
          },
          "_processOSDxml": {
           "!type": "fn()"
          },
          "_processItemxml": {
           "!type": "fn()"
          },
          "_processOSDatom": {
           "!type": "fn()"
          },
          "_processItematom": {
           "!type": "fn()"
          },
          "_processOSDrss": {
           "!type": "fn()"
          },
          "_processItemrss": {
           "!type": "fn()"
          },
          "_processOSDfeed": {
           "!type": "fn()"
          },
          "_processItemfeed": {
           "!type": "fn()"
          },
          "_getNodeXml": {
           "!type": "fn()"
          },
          "_processOsdd": {
           "!type": "fn()"
          }
         },
         "OpmlStore": {
          "constructor": {
           "!type": "fn()"
          },
          "_assertIsItem": {
           "!type": "fn()"
          },
          "_assertIsAttribute": {
           "!type": "fn()"
          },
          "_removeChildNodesThatAreNotElementNodes": {
           "!type": "fn()"
          },
          "_processRawXmlTree": {
           "!type": "fn()"
          },
          "_checkChildNodes": {
           "!type": "fn()"
          },
          "_getItemsArray": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "getValues": {
           "!type": "fn()"
          },
          "getAttributes": {
           "!type": "fn()"
          },
          "hasAttribute": {
           "!type": "fn()"
          },
          "containsValue": {
           "!type": "fn()"
          },
          "_containsValue": {
           "!type": "fn()"
          },
          "isItem": {
           "!type": "fn()"
          },
          "isItemLoaded": {
           "!type": "fn()"
          },
          "loadItem": {
           "!type": "fn()"
          },
          "getLabel": {
           "!type": "fn()"
          },
          "getLabelAttributes": {
           "!type": "fn()"
          },
          "_fetchItems": {
           "!type": "fn()"
          },
          "getFeatures": {
           "!type": "fn()"
          },
          "getIdentity": {
           "!type": "fn()"
          },
          "fetchItemByIdentity": {
           "!type": "fn()"
          },
          "getIdentityAttributes": {
           "!type": "fn()"
          },
          "_handleQueuedFetches": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          }
         },
         "PersevereStore": {
          "getStores": {
           "!type": "fn()"
          },
          "addProxy": {
           "!type": "fn()"
          }
         },
         "PicasaStore": {
          "constructor": {
           "!type": "fn()"
          },
          "_assertIsItem": {
           "!type": "fn()"
          },
          "_assertIsAttribute": {
           "!type": "fn()"
          },
          "getFeatures": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "getAttributes": {
           "!type": "fn()"
          },
          "hasAttribute": {
           "!type": "fn()"
          },
          "isItemLoaded": {
           "!type": "fn()"
          },
          "loadItem": {
           "!type": "fn()"
          },
          "getLabel": {
           "!type": "fn()"
          },
          "getLabelAttributes": {
           "!type": "fn()"
          },
          "containsValue": {
           "!type": "fn()"
          },
          "getValues": {
           "!type": "fn()"
          },
          "isItem": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          },
          "_fetchItems": {
           "!type": "fn()"
          },
          "_processPicasaData": {
           "!type": "fn()"
          },
          "_unescapeHtml": {
           "!type": "fn()"
          }
         },
         "QueryReadStore": {
          "constructor": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "getValues": {
           "!type": "fn()"
          },
          "getAttributes": {
           "!type": "fn()"
          },
          "hasAttribute": {
           "!type": "fn()"
          },
          "containsValue": {
           "!type": "fn()"
          },
          "isItem": {
           "!type": "fn()"
          },
          "isItemLoaded": {
           "!type": "fn()"
          },
          "loadItem": {
           "!type": "fn()"
          },
          "fetch": {
           "!type": "fn()"
          },
          "getFeatures": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          },
          "getLabel": {
           "!type": "fn()"
          },
          "getLabelAttributes": {
           "!type": "fn()"
          },
          "_xhrFetchHandler": {
           "!type": "fn()"
          },
          "_fetchItems": {
           "!type": "fn()"
          },
          "_filterResponse": {
           "!type": "fn()"
          },
          "_assertIsItem": {
           "!type": "fn()"
          },
          "_assertIsAttribute": {
           "!type": "fn()"
          },
          "fetchItemByIdentity": {
           "!type": "fn()"
          },
          "getIdentity": {
           "!type": "fn()"
          },
          "getIdentityAttributes": {
           "!type": "fn()"
          },
          "_features": {
           "dojo": {
            "data": {
             "api": {}
            }
           }
          }
         },
         "RailsStore": {
          "constructor": {
           "!type": "fn()"
          },
          "preamble": {
           "!type": "fn()"
          },
          "fetch": {
           "!type": "fn()"
          },
          "_processResults": {
           "!type": "fn()"
          }
         },
         "S3Store": {
          "_processResults": {
           "!type": "fn()"
          }
         },
         "ServiceStore": {
          "constructor": {
           "!type": "fn()"
          },
          "getSchema": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "getValues": {
           "!type": "fn()"
          },
          "getAttributes": {
           "!type": "fn()"
          },
          "hasAttribute": {
           "!type": "fn()"
          },
          "containsValue": {
           "!type": "fn()"
          },
          "isItem": {
           "!type": "fn()"
          },
          "isItemLoaded": {
           "!type": "fn()"
          },
          "loadItem": {
           "!type": "fn()"
          },
          "_processResults": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          },
          "fetch": {
           "!type": "fn()"
          },
          "_doQuery": {
           "!type": "fn()"
          },
          "getFeatures": {
           "!type": "fn()"
          },
          "getLabel": {
           "!type": "fn()"
          },
          "getLabelAttributes": {
           "!type": "fn()"
          },
          "getIdentity": {
           "!type": "fn()"
          },
          "getIdentityAttributes": {
           "!type": "fn()"
          },
          "fetchItemByIdentity": {
           "!type": "fn()"
          }
         },
         "SnapLogicStore": {
          "constructor": {
           "!type": "fn()"
          },
          "_assertIsItem": {
           "!type": "fn()"
          },
          "_assertIsAttribute": {
           "!type": "fn()"
          },
          "getFeatures": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "getAttributes": {
           "!type": "fn()"
          },
          "hasAttribute": {
           "!type": "fn()"
          },
          "isItemLoaded": {
           "!type": "fn()"
          },
          "loadItem": {
           "!type": "fn()"
          },
          "getLabel": {
           "!type": "fn()"
          },
          "getLabelAttributes": {
           "!type": "fn()"
          },
          "containsValue": {
           "!type": "fn()"
          },
          "getValues": {
           "!type": "fn()"
          },
          "isItem": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          },
          "_fetchHandler": {
           "!type": "fn()"
          },
          "_partHandler": {
           "!type": "fn()"
          },
          "fetch": {
           "!type": "fn()"
          },
          "Parts": {}
         },
         "StoreExplorer": {
          "constructor": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "setQuery": {
           "!type": "fn()"
          },
          "_formatCell": {
           "!type": "fn()"
          },
          "setStore": {
           "!type": "fn()"
          },
          "createNew": {
           "!type": "fn()"
          }
         },
         "WikipediaStore": {
          "constructor": {
           "!type": "fn()"
          },
          "fetch": {
           "!type": "fn()"
          },
          "_processResults": {
           "!type": "fn()"
          }
         },
         "XmlStore": {
          "constructor": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "getValues": {
           "!type": "fn()"
          },
          "getAttributes": {
           "!type": "fn()"
          },
          "hasAttribute": {
           "!type": "fn()"
          },
          "containsValue": {
           "!type": "fn()"
          },
          "isItem": {
           "!type": "fn()"
          },
          "isItemLoaded": {
           "!type": "fn()"
          },
          "loadItem": {
           "!type": "fn()"
          },
          "getFeatures": {
           "!type": "fn()"
          },
          "getLabel": {
           "!type": "fn()"
          },
          "getLabelAttributes": {
           "!type": "fn()"
          },
          "_fetchItems": {
           "!type": "fn()"
          },
          "_getFetchUrl": {
           "!type": "fn()"
          },
          "_getItems": {
           "!type": "fn()"
          },
          "_flattenNodes": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          },
          "newItem": {
           "!type": "fn()"
          },
          "deleteItem": {
           "!type": "fn()"
          },
          "setValue": {
           "!type": "fn()"
          },
          "setValues": {
           "!type": "fn()"
          },
          "unsetAttribute": {
           "!type": "fn()"
          },
          "save": {
           "!type": "fn()"
          },
          "revert": {
           "!type": "fn()"
          },
          "isDirty": {
           "!type": "fn()"
          },
          "_saveItem": {
           "!type": "fn()"
          },
          "_getPostUrl": {
           "!type": "fn()"
          },
          "_getPutUrl": {
           "!type": "fn()"
          },
          "_getDeleteUrl": {
           "!type": "fn()"
          },
          "_getPostContent": {
           "!type": "fn()"
          },
          "_getPutContent": {
           "!type": "fn()"
          },
          "_getAttribute": {
           "!type": "fn()"
          },
          "_getItem": {
           "!type": "fn()"
          },
          "_getItemIndex": {
           "!type": "fn()"
          },
          "_backupItem": {
           "!type": "fn()"
          },
          "_restoreItems": {
           "!type": "fn()"
          },
          "_forgetItem": {
           "!type": "fn()"
          },
          "_getDocument": {
           "!type": "fn()"
          },
          "_getRootElement": {
           "!type": "fn()"
          },
          "_getXPath": {
           "!type": "fn()"
          },
          "getIdentity": {
           "!type": "fn()"
          },
          "getIdentityAttributes": {
           "!type": "fn()"
          },
          "fetchItemByIdentity": {
           "!type": "fn()"
          }
         },
         "XmlItem": {
          "constructor": {
           "!type": "fn()"
          },
          "toString": {
           "!type": "fn()"
          }
         },
         "css": {
          "rules": {
           "forEach": {
            "!type": "fn()"
           }
          },
          "findStyleSheets": {
           "!type": "fn()"
          },
          "findStyleSheet": {
           "!type": "fn()"
          },
          "determineContext": {
           "!type": "fn()"
          }
         },
         "dom": {
          "createDocument": {
           "!type": "fn()"
          },
          "textContent": {
           "!type": "fn()"
          },
          "replaceChildren": {
           "!type": "fn()"
          },
          "removeChildren": {
           "!type": "fn()"
          },
          "innerXML": {
           "!type": "fn()"
          }
         },
         "jsonPathStore": {
          "constructor": {
           "!type": "fn()"
          },
          "_loadData": {
           "!type": "fn()"
          },
          "onLoadData": {
           "!type": "fn()"
          },
          "setData": {
           "!type": "fn()"
          },
          "buildIndex": {
           "!type": "fn()"
          },
          "_correctReference": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "getValues": {
           "!type": "fn()"
          },
          "getAttributes": {
           "!type": "fn()"
          },
          "hasAttribute": {
           "!type": "fn()"
          },
          "containsValue": {
           "!type": "fn()"
          },
          "_shallowCompare": {
           "!type": "fn()"
          },
          "isItem": {
           "!type": "fn()"
          },
          "isItemLoaded": {
           "!type": "fn()"
          },
          "loadItem": {
           "!type": "fn()"
          },
          "_updateMeta": {
           "!type": "fn()"
          },
          "cleanMeta": {
           "!type": "fn()"
          },
          "fetch": {
           "!type": "fn()"
          },
          "dump": {
           "!type": "fn()"
          },
          "getFeatures": {
           "!type": "fn()"
          },
          "getLabel": {
           "!type": "fn()"
          },
          "getLabelAttributes": {
           "!type": "fn()"
          },
          "sort": {
           "!type": "fn()"
          },
          "getIdentity": {
           "!type": "fn()"
          },
          "getIdentityAttributes": {
           "!type": "fn()"
          },
          "fetchItemByIdentity": {
           "!type": "fn()"
          },
          "_makeItAnItem": {
           "!type": "fn()"
          },
          "newItem": {
           "!type": "fn()"
          },
          "_addReference": {
           "!type": "fn()"
          },
          "deleteItem": {
           "!type": "fn()"
          },
          "_setDirty": {
           "!type": "fn()"
          },
          "setValue": {
           "!type": "fn()"
          },
          "setValues": {
           "!type": "fn()"
          },
          "unsetAttribute": {
           "!type": "fn()"
          },
          "save": {
           "!type": "fn()"
          },
          "_markClean": {
           "!type": "fn()"
          },
          "revert": {
           "!type": "fn()"
          },
          "_mixin": {
           "!type": "fn()"
          },
          "isDirty": {
           "!type": "fn()"
          },
          "_createReference": {
           "!type": "fn()"
          },
          "_trimItem": {
           "!type": "fn()"
          },
          "onSet": {
           "!type": "fn()"
          },
          "onNew": {
           "!type": "fn()"
          },
          "onDelete": {
           "!type": "fn()"
          },
          "onSave": {
           "!type": "fn()"
          },
          "onRevert": {
           "!type": "fn()"
          }
         },
         "util": {
          "JsonQuery": {
           "_toJsonQuery": {
            "!type": "fn()"
           },
           "fetch": {
            "!type": "fn()"
           },
           "isUpdateable": {
            "!type": "fn()"
           },
           "matchesQuery": {
            "!type": "fn()"
           },
           "clientSideFetch": {
            "!type": "fn()"
           },
           "querySuperSet": {
            "!type": "fn()"
           }
          }
         }
        },
        "json": {
         "ref": {
          "resolveJson": {
           "!type": "fn()"
          },
          "fromJson": {
           "!type": "fn()"
          },
          "toJson": {
           "!type": "fn()"
          },
          "_addProp": {
           "!type": "fn()"
          }
         },
         "query": {
          "!type": "fn()"
         },
         "schema": {
          "validate": {
           "!type": "fn()"
          },
          "checkPropertyChange": {
           "!type": "fn()"
          },
          "mustBeValid": {
           "!type": "fn()"
          },
          "_validate": {
           "!type": "fn()"
          }
         }
        },
        "date": {
         "IslamicDate": {
          "constructor": {
           "!type": "fn()"
          },
          "getDate": {
           "!type": "fn()"
          },
          "getMonth": {
           "!type": "fn()"
          },
          "getFullYear": {
           "!type": "fn()"
          },
          "getDay": {
           "!type": "fn()"
          },
          "getHours": {
           "!type": "fn()"
          },
          "getMinutes": {
           "!type": "fn()"
          },
          "getSeconds": {
           "!type": "fn()"
          },
          "getMilliseconds": {
           "!type": "fn()"
          },
          "setDate": {
           "!type": "fn()"
          },
          "setYear": {
           "!type": "fn()"
          },
          "setMonth": {
           "!type": "fn()"
          },
          "setHours": {
           "!type": "fn()"
          },
          "setMinutes": {
           "!type": "fn()"
          },
          "setSeconds": {
           "!type": "fn()"
          },
          "setMilliseconds": {
           "!type": "fn()"
          },
          "toString": {
           "!type": "fn()"
          },
          "toGregorian": {
           "!type": "fn()"
          },
          "fromGregorian": {
           "!type": "fn()"
          },
          "parse": {
           "!type": "fn()"
          },
          "valueOf": {
           "!type": "fn()"
          },
          "_yearStart": {
           "!type": "fn()"
          },
          "_monthStart": {
           "!type": "fn()"
          },
          "_civilLeapYear": {
           "!type": "fn()"
          },
          "getDaysInIslamicMonth": {
           "!type": "fn()"
          },
          "_mod": {
           "!type": "fn()"
          },
          "_getNames": {
           "!type": "fn()"
          }
         },
         "hebrew": {
          "getDaysInMonth": {
           "!type": "fn()"
          },
          "compare": {
           "!type": "fn()"
          },
          "add": {
           "!type": "fn()"
          },
          "difference": {
           "!type": "fn()"
          },
          "Date": {
           "constructor": {
            "!type": "fn()"
           },
           "getDate": {
            "!type": "fn()"
           },
           "getMonth": {
            "!type": "fn()"
           },
           "getFullYear": {
            "!type": "fn()"
           },
           "getHours": {
            "!type": "fn()"
           },
           "getMinutes": {
            "!type": "fn()"
           },
           "getSeconds": {
            "!type": "fn()"
           },
           "getMilliseconds": {
            "!type": "fn()"
           },
           "setDate": {
            "!type": "fn()"
           },
           "setFullYear": {
            "!type": "fn()"
           },
           "setMonth": {
            "!type": "fn()"
           },
           "setHours": {
            "!type": "fn()"
           },
           "setMinutes": {
            "!type": "fn()"
           },
           "setSeconds": {
            "!type": "fn()"
           },
           "setMilliseconds": {
            "!type": "fn()"
           },
           "toString": {
            "!type": "fn()"
           },
           "getDaysInHebrewMonth": {
            "!type": "fn()"
           },
           "_yearType": {
            "!type": "fn()"
           },
           "_handleGetYearLength": {
            "!type": "fn()"
           },
           "_startOfYear": {
            "!type": "fn()"
           },
           "isLeapYear": {
            "!type": "fn()"
           },
           "fromGregorian": {
            "!type": "fn()"
           },
           "_computeHebrewFields": {
            "!type": "fn()"
           },
           "toGregorian": {
            "!type": "fn()"
           },
           "_floorDivide": {
            "!type": "fn()"
           },
           "getDay": {
            "!type": "fn()"
           },
           "_getJulianDayFromGregorianDate": {
            "!type": "fn()"
           },
           "valueOf": {
            "!type": "fn()"
           }
          },
          "locale": {
           "format": {
            "!type": "fn()"
           },
           "regexp": {
            "!type": "fn()"
           },
           "_parseInfo": {
            "!type": "fn()"
           },
           "parse": {
            "!type": "fn()"
           },
           "addCustomFormats": {
            "!type": "fn()"
           },
           "_getHebrewBundle": {
            "!type": "fn()"
           },
           "getNames": {
            "!type": "fn()"
           }
          },
          "numerals": {
           "getYearHebrewLetters": {
            "!type": "fn()"
           },
           "parseYearHebrewLetters": {
            "!type": "fn()"
           },
           "getDayHebrewLetters": {
            "!type": "fn()"
           },
           "parseDayHebrewLetters": {
            "!type": "fn()"
           },
           "getMonthHebrewLetters": {
            "!type": "fn()"
           },
           "parseMonthHebrewLetters": {
            "!type": "fn()"
           }
          }
         },
         "php": {
          "DateFormat": {
           "format": {
            "!type": "fn()"
           },
           "d": {
            "!type": "fn()"
           },
           "D": {
            "!type": "fn()"
           },
           "j": {
            "!type": "fn()"
           },
           "l": {
            "!type": "fn()"
           },
           "N": {
            "!type": "fn()"
           },
           "S": {
            "!type": "fn()"
           },
           "w": {
            "!type": "fn()"
           },
           "z": {
            "!type": "fn()"
           },
           "W": {
            "!type": "fn()"
           },
           "F": {
            "!type": "fn()"
           },
           "m": {
            "!type": "fn()"
           },
           "M": {
            "!type": "fn()"
           },
           "n": {
            "!type": "fn()"
           },
           "t": {
            "!type": "fn()"
           },
           "L": {
            "!type": "fn()"
           },
           "o": {
            "!type": "fn()"
           },
           "Y": {
            "!type": "fn()"
           },
           "y": {
            "!type": "fn()"
           },
           "a": {
            "!type": "fn()"
           },
           "b": {
            "!type": "fn()"
           },
           "B": {
            "!type": "fn()"
           },
           "g": {
            "!type": "fn()"
           },
           "G": {
            "!type": "fn()"
           },
           "h": {
            "!type": "fn()"
           },
           "H": {
            "!type": "fn()"
           },
           "i": {
            "!type": "fn()"
           },
           "s": {
            "!type": "fn()"
           },
           "e": {
            "!type": "fn()"
           },
           "I": {
            "!type": "fn()"
           },
           "O": {
            "!type": "fn()"
           },
           "P": {
            "!type": "fn()"
           },
           "T": {
            "!type": "fn()"
           },
           "Z": {
            "!type": "fn()"
           },
           "c": {
            "!type": "fn()"
           },
           "r": {
            "!type": "fn()"
           },
           "U": {
            "!type": "fn()"
           }
          },
          "format": {
           "!type": "fn()"
          }
         },
         "posix": {
          "strftime": {
           "!type": "fn()"
          },
          "getStartOfWeek": {
           "!type": "fn()"
          },
          "setIsoWeekOfYear": {
           "!type": "fn()"
          },
          "getIsoWeekOfYear": {
           "!type": "fn()"
          },
          "getIsoWeeksInYear": {
           "!type": "fn()"
          }
         }
        },
        "dtl": {
         "quickFilter": {
          "!type": "fn()"
         },
         "_noOpNode": {
          "!type": "fn()"
         },
         "Context": {
          "getKeys": {
           "!type": "fn()"
          },
          "extend": {
           "!type": "fn()"
          },
          "filter": {
           "!type": "fn()"
          },
          "setThis": {
           "!type": "fn()"
          },
          "getThis": {
           "!type": "fn()"
          },
          "hasKey": {
           "!type": "fn()"
          }
         },
         "DomInline": {
          "render": {
           "!type": "fn()"
          },
          "buildRendering": {
           "!type": "fn()"
          },
          "postMixInProperties": {
           "!type": "fn()"
          }
         },
         "HtmlInline": {},
         "Inline": {
          "render": {
           "!type": "fn()"
          },
          "buildRendering": {
           "!type": "fn()"
          },
          "postMixInProperties": {
           "!type": "fn()"
          }
         },
         "_DomTemplated": {
          "prototype": {
           "buildRendering": {
            "!type": "fn()"
           },
           "setTemplate": {
            "!type": "fn()"
           },
           "render": {
            "!type": "fn()"
           },
           "_getContext": {
            "!type": "fn()"
           },
           "_getCachedTemplate": {
            "!type": "fn()"
           }
          }
         },
         "contrib": {
          "dijit": {
           "dojoAttachPoint": {
            "!type": "fn()"
           },
           "dojoAttachEvent": {
            "!type": "fn()"
           },
           "dojoType": {
            "!type": "fn()"
           },
           "on": {
            "!type": "fn()"
           }
          },
          "data": {
           "_get": {
            "!type": "fn()"
           },
           "bind_data": {
            "!type": "fn()"
           },
           "bind_query": {
            "!type": "fn()"
           },
           "_BoundItem": {
            "get": {}
           }
          },
          "dom": {
           "buffer": {
            "!type": "fn()"
           },
           "html": {
            "!type": "fn()"
           },
           "style_": {
            "!type": "fn()"
           }
          },
          "objects": {
           "key": {
            "!type": "fn()"
           }
          }
         },
         "_HtmlTemplated": {},
         "_Templated": {
          "buildRendering": {
           "!type": "fn()"
          },
          "getCachedTemplate": {
           "!type": "fn()"
          },
          "render": {
           "!type": "fn()"
          }
         },
         "Token": {
          "split_contents": {
           "!type": "fn()"
          }
         },
         "text": {
          "_get": {
           "!type": "fn()"
          },
          "getTag": {
           "!type": "fn()"
          },
          "getFilter": {
           "!type": "fn()"
          },
          "getTemplate": {
           "!type": "fn()"
          },
          "getTemplateString": {
           "!type": "fn()"
          },
          "_resolveLazy": {
           "!type": "fn()"
          },
          "_resolveTemplateArg": {
           "!type": "fn()"
          },
          "_isTemplate": {
           "!type": "fn()"
          },
          "_resolveContextArg": {
           "!type": "fn()"
          },
          "tokenize": {
           "!type": "fn()"
          },
          "_parseDelims": {
           "!type": "fn()"
          }
         },
         "register": {
          "get": {
           "!type": "fn()"
          },
          "getAttributeTags": {
           "!type": "fn()"
          },
          "_any": {
           "!type": "fn()"
          },
          "tags": {
           "!type": "fn()"
          },
          "filters": {
           "!type": "fn()"
          },
          "_registry": {}
         },
         "_base": {
          "escape": {
           "!type": "fn()"
          },
          "safe": {
           "!type": "fn()"
          }
         },
         "BOOLS": {},
         "dom": {
          "getTemplate": {
           "!type": "fn()"
          },
          "tokenize": {
           "!type": "fn()"
          },
          "_tokenize": {
           "!type": "fn()"
          },
          "__tokenize": {
           "!type": "fn()"
          }
         },
         "ext-dojo": {},
         "filter": {
          "dates": {
           "_toDate": {
            "!type": "fn()"
           },
           "date": {
            "!type": "fn()"
           },
           "time": {
            "!type": "fn()"
           },
           "timesince": {
            "!type": "fn()"
           },
           "timeuntil": {
            "!type": "fn()"
           }
          },
          "htmlstrings": {
           "linebreaks": {
            "!type": "fn()"
           },
           "linebreaksbr": {
            "!type": "fn()"
           },
           "removetags": {
            "!type": "fn()"
           },
           "striptags": {
            "!type": "fn()"
           }
          },
          "integers": {
           "add": {
            "!type": "fn()"
           },
           "get_digit": {
            "!type": "fn()"
           }
          },
          "lists": {
           "_dictsort": {
            "!type": "fn()"
           },
           "dictsort": {
            "!type": "fn()"
           },
           "dictsortreversed": {
            "!type": "fn()"
           },
           "first": {
            "!type": "fn()"
           },
           "join": {
            "!type": "fn()"
           },
           "length": {
            "!type": "fn()"
           },
           "length_is": {
            "!type": "fn()"
           },
           "random": {
            "!type": "fn()"
           },
           "slice": {
            "!type": "fn()"
           },
           "_unordered_list": {
            "!type": "fn()"
           },
           "unordered_list": {
            "!type": "fn()"
           }
          },
          "logic": {
           "default_": {
            "!type": "fn()"
           },
           "default_if_none": {
            "!type": "fn()"
           },
           "divisibleby": {
            "!type": "fn()"
           },
           "yesno": {
            "!type": "fn()"
           }
          },
          "misc": {
           "filesizeformat": {
            "!type": "fn()"
           },
           "pluralize": {
            "!type": "fn()"
           },
           "phone2numeric": {
            "!type": "fn()"
           },
           "pprint": {
            "!type": "fn()"
           },
           "_phone2numeric": {}
          },
          "strings": {
           "_urlquote": {
            "!type": "fn()"
           },
           "addslashes": {
            "!type": "fn()"
           },
           "capfirst": {
            "!type": "fn()"
           },
           "center": {
            "!type": "fn()"
           },
           "cut": {
            "!type": "fn()"
           },
           "fix_ampersands": {
            "!type": "fn()"
           },
           "floatformat": {
            "!type": "fn()"
           },
           "iriencode": {
            "!type": "fn()"
           },
           "linenumbers": {
            "!type": "fn()"
           },
           "ljust": {
            "!type": "fn()"
           },
           "lower": {
            "!type": "fn()"
           },
           "make_list": {
            "!type": "fn()"
           },
           "rjust": {
            "!type": "fn()"
           },
           "slugify": {
            "!type": "fn()"
           },
           "stringformat": {
            "!type": "fn()"
           },
           "title": {
            "!type": "fn()"
           },
           "truncatewords": {
            "!type": "fn()"
           },
           "truncatewords_html": {
            "!type": "fn()"
           },
           "upper": {
            "!type": "fn()"
           },
           "urlencode": {
            "!type": "fn()"
           },
           "urlize": {
            "!type": "fn()"
           },
           "urlizetrunc": {
            "!type": "fn()"
           },
           "wordcount": {
            "!type": "fn()"
           },
           "wordwrap": {
            "!type": "fn()"
           },
           "_truncate_singlets": {}
          }
         },
         "utils": {
          "date": {
           "timesince": {
            "!type": "fn()"
           },
           "format": {
            "!type": "fn()"
           },
           "DateFormat": {
            "f": {
             "!type": "fn()"
            },
            "N": {
             "!type": "fn()"
            },
            "P": {
             "!type": "fn()"
            }
           }
          }
         },
         "render": {
          "dom": {
           "Render": {
            "setAttachPoint": {
             "!type": "fn()"
            },
            "render": {
             "!type": "fn()"
            }
           }
          },
          "html": {}
         },
         "tag": {
          "date": {
           "NowNode": {
            "render": {
             "!type": "fn()"
            },
            "unrender": {
             "!type": "fn()"
            },
            "clone": {
             "!type": "fn()"
            }
           },
           "now": {
            "!type": "fn()"
           }
          },
          "loader": {
           "block": {
            "!type": "fn()"
           },
           "extends_": {
            "!type": "fn()"
           },
           "include": {
            "!type": "fn()"
           },
           "ssi": {
            "!type": "fn()"
           }
          },
          "logic": {
           "if_": {
            "!type": "fn()"
           },
           "_ifequal": {
            "!type": "fn()"
           },
           "ifequal": {
            "!type": "fn()"
           },
           "ifnotequal": {
            "!type": "fn()"
           },
           "for_": {
            "!type": "fn()"
           }
          },
          "loop": {
           "cycle": {
            "!type": "fn()"
           },
           "ifchanged": {
            "!type": "fn()"
           },
           "regroup": {
            "!type": "fn()"
           }
          },
          "misc": {
           "comment": {
            "!type": "fn()"
           },
           "debug": {
            "!type": "fn()"
           },
           "filter": {
            "!type": "fn()"
           },
           "firstof": {
            "!type": "fn()"
           },
           "spaceless": {
            "!type": "fn()"
           },
           "templatetag": {
            "!type": "fn()"
           },
           "widthratio": {
            "!type": "fn()"
           },
           "with_": {
            "!type": "fn()"
           },
           "TemplateTagNode": {}
          }
         }
        },
        "editor": {
         "plugins": {
          "GlobalTableHandler": {
           "doMixins": {
            "!type": "fn()"
           },
           "initialize": {
            "!type": "fn()"
           },
           "getTableInfo": {
            "!type": "fn()"
           },
           "connectDraggable": {
            "!type": "fn()"
           },
           "onDragStart": {
            "!type": "fn()"
           },
           "onDragEnd": {
            "!type": "fn()"
           },
           "checkAvailable": {
            "!type": "fn()"
           },
           "_prepareTable": {
            "!type": "fn()"
           },
           "getTimeStamp": {
            "!type": "fn()"
           },
           "_tempStoreTableData": {
            "!type": "fn()"
           },
           "_tempAvailability": {
            "!type": "fn()"
           },
           "connectTableKeys": {
            "!type": "fn()"
           },
           "disconnectTableKeys": {
            "!type": "fn()"
           },
           "onKeyDown": {
            "!type": "fn()"
           },
           "onKeyUp": {
            "!type": "fn()"
           },
           "onDisplayChanged": {
            "!type": "fn()"
           }
          },
          "TablePlugins": {
           "constructor": {
            "!type": "fn()"
           },
           "onDisplayChanged": {
            "!type": "fn()"
           },
           "setEditor": {
            "!type": "fn()"
           },
           "onEditorLoaded": {
            "!type": "fn()"
           },
           "_createContextMenu": {
            "!type": "fn()"
           },
           "selectTable": {
            "!type": "fn()"
           },
           "launchInsertDialog": {
            "!type": "fn()"
           },
           "launchModifyDialog": {
            "!type": "fn()"
           },
           "_initButton": {
            "!type": "fn()"
           },
           "modTable": {
            "!type": "fn()"
           },
           "begEdit": {
            "!type": "fn()"
           },
           "endEdit": {
            "!type": "fn()"
           },
           "makeColumnsEven": {
            "!type": "fn()"
           },
           "getTableInfo": {
            "!type": "fn()"
           },
           "_makeTitle": {
            "!type": "fn()"
           },
           "getSelectedCells": {
            "!type": "fn()"
           }
          },
          "EditorTableDialog": {
           "postMixInProperties": {
            "!type": "fn()"
           },
           "postCreate": {
            "!type": "fn()"
           },
           "onInsert": {
            "!type": "fn()"
           },
           "onBuildTable": {
            "!type": "fn()"
           }
          },
          "EditorModifyTableDialog": {
           "postMixInProperties": {
            "!type": "fn()"
           },
           "postCreate": {
            "!type": "fn()"
           },
           "setBrdColor": {
            "!type": "fn()"
           },
           "setBkColor": {
            "!type": "fn()"
           },
           "onSet": {
            "!type": "fn()"
           },
           "onSetTable": {
            "!type": "fn()"
           }
          },
          "UploadImage": {
           "_initButton": {
            "!type": "fn()"
           },
           "createFileInput": {
            "!type": "fn()"
           },
           "onComplete": {
            "!type": "fn()"
           },
           "insertTempImage": {
            "!type": "fn()"
           }
          }
         }
        },
        "embed": {
         "Flash": {
          "onInitialize": {
           "!type": "fn()"
          },
          "__ie_markup__": {
           "!type": "fn()"
          },
          "proxy": {
           "!type": "fn()"
          },
          "onReady": {
           "!type": "fn()"
          },
          "onLoad": {
           "!type": "fn()"
          },
          "onError": {
           "!type": "fn()"
          },
          "_onload": {
           "!type": "fn()"
          },
          "init": {
           "!type": "fn()"
          },
          "_destroy": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "byId": {
           "!type": "fn()"
          },
          "place": {
           "!type": "fn()"
          }
         },
         "__flashArgs": {
          "!type": "fn()"
         },
         "__QTArgs": {
          "!type": "fn()"
         },
         "Object": {
          "postCreate": {
           "!type": "fn()"
          }
         },
         "Quicktime": {
          "onInitialize": {
           "!type": "fn()"
          },
          "place": {
           "!type": "fn()"
          },
          "version": {}
         }
        },
        "encoding": {
         "ascii85": {
          "encode": {
           "!type": "fn()"
          },
          "decode": {
           "!type": "fn()"
          }
         },
         "base64": {
          "encode": {
           "!type": "fn()"
          },
          "decode": {
           "!type": "fn()"
          }
         },
         "bits": {
          "OutputStream": {
           "reset": {
            "!type": "fn()"
           },
           "putBits": {
            "!type": "fn()"
           },
           "getWidth": {
            "!type": "fn()"
           },
           "getBuffer": {
            "!type": "fn()"
           }
          },
          "InputStream": {
           "getBits": {
            "!type": "fn()"
           },
           "getWidth": {
            "!type": "fn()"
           }
          }
         },
         "compression": {
          "lzw": {
           "Encoder": {
            "init": {
             "!type": "fn()"
            },
            "encode": {
             "!type": "fn()"
            },
            "flush": {
             "!type": "fn()"
            }
           },
           "Decoder": {
            "init": {
             "!type": "fn()"
            },
            "decode": {
             "!type": "fn()"
            }
           }
          },
          "Splay": {
           "reset": {
            "!type": "fn()"
           },
           "splay": {
            "!type": "fn()"
           },
           "encode": {
            "!type": "fn()"
           },
           "decode": {
            "!type": "fn()"
           }
          }
         },
         "crypto": {
          "cipherModes": {},
          "outputTypes": {}
         },
         "digests": {
          "addWords": {
           "!type": "fn()"
          },
          "stringToWord": {
           "!type": "fn()"
          },
          "wordToString": {
           "!type": "fn()"
          },
          "wordToHex": {
           "!type": "fn()"
          },
          "wordToBase64": {
           "!type": "fn()"
          },
          "MD5": {
           "_hmac": {
            "!type": "fn()"
           }
          },
          "SHA1": {
           "_hmac": {
            "!type": "fn()"
           }
          },
          "outputTypes": {}
         },
         "easy64": {
          "encode": {
           "!type": "fn()"
          },
          "decode": {
           "!type": "fn()"
          }
         }
        },
        "flash": {
         "setSwf": {
          "!type": "fn()"
         },
         "addLoadedListener": {
          "!type": "fn()"
         },
         "addInstallingListener": {
          "!type": "fn()"
         },
         "loaded": {
          "!type": "fn()"
         },
         "installing": {
          "!type": "fn()"
         },
         "_initialize": {
          "!type": "fn()"
         },
         "Info": {
          "isVersionOrAbove": {
           "!type": "fn()"
          },
          "_detectVersion": {
           "!type": "fn()"
          },
          "_JSFlashInfo": {
           "!type": "fn()"
          }
         },
         "Embed": {
          "protocol": {
           "!type": "fn()"
          },
          "write": {
           "!type": "fn()"
          },
          "get": {
           "!type": "fn()"
          },
          "setVisible": {
           "!type": "fn()"
          },
          "center": {
           "!type": "fn()"
          }
         },
         "Communicator": {
          "_addExternalInterfaceCallback": {
           "!type": "fn()"
          },
          "_encodeData": {
           "!type": "fn()"
          },
          "_decodeData": {
           "!type": "fn()"
          },
          "_execFlash": {
           "!type": "fn()"
          }
         },
         "Install": {
          "needed": {
           "!type": "fn()"
          },
          "install": {
           "!type": "fn()"
          },
          "_onInstallStatus": {
           "!type": "fn()"
          }
         },
         "info": {}
        },
        "form": {
         "__SelectOption": {
          "!type": "fn()"
         },
         "_BusyButtonMixin": {
          "postMixInProperties": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "makeBusy": {
           "!type": "fn()"
          },
          "cancel": {
           "!type": "fn()"
          },
          "resetTimeout": {
           "!type": "fn()"
          },
          "setLabel": {
           "!type": "fn()"
          },
          "_clicked": {
           "!type": "fn()"
          }
         },
         "BusyButton": {},
         "BusyComboButton": {},
         "BusyDropDownButton": {},
         "_CheckedMultiSelectItem": {
          "postMixInProperties": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "_changeBox": {
           "!type": "fn()"
          },
          "_onMouse": {
           "!type": "fn()"
          },
          "_onClick": {
           "!type": "fn()"
          },
          "_updateBox": {
           "!type": "fn()"
          },
          "_setDisabledAttr": {
           "!type": "fn()"
          },
          "_setReadOnlyAttr": {
           "!type": "fn()"
          }
         },
         "CheckedMultiSelect": {
          "_mouseDown": {
           "!type": "fn()"
          },
          "_addOptionItem": {
           "!type": "fn()"
          },
          "_updateSelection": {
           "!type": "fn()"
          },
          "_getChildren": {
           "!type": "fn()"
          },
          "invertSelection": {
           "!type": "fn()"
          },
          "_setDisabledAttr": {
           "!type": "fn()"
          },
          "_setReadOnlyAttr": {
           "!type": "fn()"
          },
          "uninitialize": {
           "!type": "fn()"
          }
         },
         "DateTextBox": {
          "_open": {
           "!type": "fn()"
          }
         },
         "DayTextBox": {
          "format": {
           "!type": "fn()"
          },
          "validator": {
           "!type": "fn()"
          },
          "_open": {
           "!type": "fn()"
          }
         },
         "MonthTextBox": {
          "format": {
           "!type": "fn()"
          },
          "validator": {
           "!type": "fn()"
          },
          "_open": {
           "!type": "fn()"
          }
         },
         "YearTextBox": {
          "format": {
           "!type": "fn()"
          },
          "validator": {
           "!type": "fn()"
          },
          "_open": {
           "!type": "fn()"
          }
         },
         "_DropDownSelectMenu": {
          "buildRendering": {
           "!type": "fn()"
          },
          "resize": {
           "!type": "fn()"
          }
         },
         "DropDownSelect": {
          "_fillContent": {
           "!type": "fn()"
          },
          "_getMenuItemForOption": {
           "!type": "fn()"
          },
          "_addOptionItem": {
           "!type": "fn()"
          },
          "_getChildren": {
           "!type": "fn()"
          },
          "_loadChildren": {
           "!type": "fn()"
          },
          "_setValueAttr": {
           "!type": "fn()"
          },
          "_setDisplay": {
           "!type": "fn()"
          },
          "validate": {
           "!type": "fn()"
          },
          "isValid": {
           "!type": "fn()"
          },
          "reset": {
           "!type": "fn()"
          },
          "postMixInProperties": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "_onMenuMouseup": {
           "!type": "fn()"
          },
          "isLoaded": {
           "!type": "fn()"
          },
          "loadDropDown": {
           "!type": "fn()"
          },
          "_setReadOnlyAttr": {
           "!type": "fn()"
          },
          "_setDisabledAttr": {
           "!type": "fn()"
          },
          "uninitialize": {
           "!type": "fn()"
          }
         },
         "DropDownStack": {},
         "FileInput": {
          "startup": {
           "!type": "fn()"
          },
          "_matchValue": {
           "!type": "fn()"
          },
          "setLabel": {
           "!type": "fn()"
          },
          "reset": {
           "!type": "fn()"
          }
         },
         "FileInputAuto": {
          "startup": {
           "!type": "fn()"
          },
          "_onFocus": {
           "!type": "fn()"
          },
          "_onBlur": {
           "!type": "fn()"
          },
          "setMessage": {
           "!type": "fn()"
          },
          "_sendFile": {
           "!type": "fn()"
          },
          "_handleSend": {
           "!type": "fn()"
          },
          "reset": {
           "!type": "fn()"
          },
          "onComplete": {
           "!type": "fn()"
          }
         },
         "FileInputBlind": {
          "startup": {
           "!type": "fn()"
          },
          "_fixPosition": {
           "!type": "fn()"
          },
          "reset": {
           "!type": "fn()"
          }
         },
         "FilePickerTextBox": {
          "postMixInProperties": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "_setValueAttr": {
           "!type": "fn()"
          },
          "_onWidgetChange": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "openDropDown": {
           "!type": "fn()"
          },
          "toggleDropDown": {
           "!type": "fn()"
          },
          "_focusBlur": {
           "!type": "fn()"
          },
          "_focusFocus": {
           "!type": "fn()"
          },
          "_onBlur": {
           "!type": "fn()"
          },
          "_setBlurValue": {
           "!type": "fn()"
          },
          "parse": {
           "!type": "fn()"
          },
          "_startSearchFromInput": {
           "!type": "fn()"
          },
          "_onKey": {
           "!type": "fn()"
          }
         },
         "FileUploader": {
          "flashMovie": {
           "!type": "fn()"
          },
          "constructor": {
           "!type": "fn()"
          },
          "log": {
           "!type": "fn()"
          },
          "init": {
           "!type": "fn()"
          },
          "onMouseDown": {
           "!type": "fn()"
          },
          "onMouseUp": {
           "!type": "fn()"
          },
          "onMouseOver": {
           "!type": "fn()"
          },
          "onMouseOut": {
           "!type": "fn()"
          },
          "onChange": {
           "!type": "fn()"
          },
          "onProgress": {
           "!type": "fn()"
          },
          "onComplete": {
           "!type": "fn()"
          },
          "onCancel": {
           "!type": "fn()"
          },
          "onError": {
           "!type": "fn()"
          },
          "upload": {
           "!type": "fn()"
          },
          "setPosition": {
           "!type": "fn()"
          },
          "hide": {
           "!type": "fn()"
          },
          "show": {
           "!type": "fn()"
          },
          "disable": {
           "!type": "fn()"
          },
          "destroyAll": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "createFlashUploader": {
           "!type": "fn()"
          },
          "setFlashVars": {
           "!type": "fn()"
          },
          "createHtmlUploader": {
           "!type": "fn()"
          },
          "setFlashPosition": {
           "!type": "fn()"
          },
          "setHtmlPosition": {
           "!type": "fn()"
          },
          "_connectFlash": {
           "!type": "fn()"
          },
          "_doSub": {
           "!type": "fn()"
          },
          "_connectInput": {
           "!type": "fn()"
          },
          "_connectCommon": {
           "!type": "fn()"
          },
          "_checkHtmlCancel": {
           "!type": "fn()"
          },
          "_error": {
           "!type": "fn()"
          },
          "_change": {
           "!type": "fn()"
          },
          "_complete": {
           "!type": "fn()"
          },
          "_progress": {
           "!type": "fn()"
          },
          "_dialogParent": {
           "!type": "fn()"
          },
          "_disconnect": {
           "!type": "fn()"
          },
          "_buildFileInput": {
           "!type": "fn()"
          },
          "_removeFileInput": {
           "!type": "fn()"
          },
          "_buildForm": {
           "!type": "fn()"
          },
          "_setHtmlPostData": {
           "!type": "fn()"
          },
          "_setFormStyle": {
           "!type": "fn()"
          },
          "getFakeButtonSize": {
           "!type": "fn()"
          }
         },
         "Manager": {
          "buildRendering": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          }
         },
         "MultiComboBox": {
          "_setValueAttr": {
           "!type": "fn()"
          },
          "_addPreviousMatches": {
           "!type": "fn()"
          },
          "_cleanupDelimiters": {
           "!type": "fn()"
          },
          "_autoCompleteText": {
           "!type": "fn()"
          },
          "_startSearch": {
           "!type": "fn()"
          }
         },
         "_ChildTextBox": {
          "reset": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          }
         },
         "_OldPWBox": {
          "_setValueAttr": {
           "!type": "fn()"
          },
          "isValid": {
           "!type": "fn()"
          },
          "_update": {
           "!type": "fn()"
          },
          "_getValueAttr": {
           "!type": "fn()"
          },
          "_setBlurValue": {
           "!type": "fn()"
          }
         },
         "_NewPWBox": {
          "onChange": {
           "!type": "fn()"
          }
         },
         "_VerifyPWBox": {
          "isValid": {
           "!type": "fn()"
          }
         },
         "PasswordValidator": {
          "isValid": {
           "!type": "fn()"
          },
          "validate": {
           "!type": "fn()"
          },
          "reset": {
           "!type": "fn()"
          },
          "_createSubWidgets": {
           "!type": "fn()"
          },
          "pwCheck": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "_childValueAttr": {
           "!type": "fn()"
          },
          "_setDisabledAttr": {
           "!type": "fn()"
          },
          "_setRequiredAttribute": {
           "!type": "fn()"
          },
          "_setValueAttr": {
           "!type": "fn()"
          },
          "_getValueAttr": {
           "!type": "fn()"
          },
          "focus": {
           "!type": "fn()"
          }
         },
         "RadioStack": {},
         "_RangeSliderMixin": {
          "postMixInProperties": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "_onKeyPress": {
           "!type": "fn()"
          },
          "_onHandleClickMax": {
           "!type": "fn()"
          },
          "_onClkIncBumper": {
           "!type": "fn()"
          },
          "_bumpValue": {
           "!type": "fn()"
          },
          "_getBumpValue": {
           "!type": "fn()"
          },
          "_onBarClick": {
           "!type": "fn()"
          },
          "_onRemainingBarClick": {
           "!type": "fn()"
          },
          "_setPixelValue": {
           "!type": "fn()"
          },
          "_getValueByPixelValue": {
           "!type": "fn()"
          },
          "_setValueAttr": {
           "!type": "fn()"
          },
          "_printSliderBar": {
           "!type": "fn()"
          }
         },
         "HorizontalRangeSlider": {},
         "VerticalRangeSlider": {},
         "Rating": {
          "constructor": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "_onMouse": {
           "!type": "fn()"
          },
          "_renderStars": {
           "!type": "fn()"
          },
          "onStarClick": {
           "!type": "fn()"
          },
          "onMouseOver": {
           "!type": "fn()"
          },
          "setAttribute": {
           "!type": "fn()"
          }
         },
         "TimeSpinner": {
          "adjust": {
           "!type": "fn()"
          },
          "isValid": {
           "!type": "fn()"
          },
          "parse": {
           "!type": "fn()"
          },
          "format": {
           "!type": "fn()"
          }
         },
         "_FormSelectWidget": {
          "getOptions": {
           "!type": "fn()"
          },
          "addOption": {
           "!type": "fn()"
          },
          "removeOption": {
           "!type": "fn()"
          },
          "updateOption": {
           "!type": "fn()"
          },
          "_setValueAttr": {
           "!type": "fn()"
          },
          "_getDisplayedValueAttr": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "undo": {
           "!type": "fn()"
          },
          "_loadChildren": {
           "!type": "fn()"
          },
          "_updateSelection": {
           "!type": "fn()"
          },
          "_getValueFromOpts": {
           "!type": "fn()"
          },
          "postMixInProperties": {
           "!type": "fn()"
          },
          "_fillContent": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "_addOptionItem": {
           "!type": "fn()"
          },
          "_removeOptionItem": {
           "!type": "fn()"
          },
          "_setDisplay": {
           "!type": "fn()"
          },
          "_getChildren": {
           "!type": "fn()"
          },
          "_getSelectedOptionsAttr": {
           "!type": "fn()"
          }
         },
         "_HasDropDown": {
          "_onMenuMouseup": {
           "!type": "fn()"
          },
          "_onDropDownMouse": {
           "!type": "fn()"
          },
          "_onDropDownMouseup": {
           "!type": "fn()"
          },
          "_setupDropdown": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "destroyDescendants": {
           "!type": "fn()"
          },
          "_onDropDownKeydown": {
           "!type": "fn()"
          },
          "_onKeyPress": {
           "!type": "fn()"
          },
          "_onDropDownBlur": {
           "!type": "fn()"
          },
          "_onKey": {
           "!type": "fn()"
          },
          "_onBlur": {
           "!type": "fn()"
          },
          "isLoaded": {
           "!type": "fn()"
          },
          "loadDropDown": {
           "!type": "fn()"
          },
          "toggleDropDown": {
           "!type": "fn()"
          },
          "openDropDown": {
           "!type": "fn()"
          },
          "closeDropDown": {
           "!type": "fn()"
          }
         },
         "_SelectStackMixin": {
          "_paneIdFromOption": {
           "!type": "fn()"
          },
          "_optionValFromPane": {
           "!type": "fn()"
          },
          "_togglePane": {
           "!type": "fn()"
          },
          "onAddChild": {
           "!type": "fn()"
          },
          "onRemoveChild": {
           "!type": "fn()"
          },
          "onSelectChild": {
           "!type": "fn()"
          },
          "onStartup": {
           "!type": "fn()"
          },
          "postMixInProperties": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "_handleSelfOnChange": {
           "!type": "fn()"
          }
         },
         "manager": {
          "actionAdapter": {
           "!type": "fn()"
          },
          "inspectorAdapter": {
           "!type": "fn()"
          },
          "_keys": {
           "!type": "fn()"
          },
          "changeEvent": {
           "!type": "fn()"
          },
          "_ClassMixin": {
           "gatherClassState": {
            "!type": "fn()"
           },
           "addClass": {
            "!type": "fn()"
           },
           "removeClass": {
            "!type": "fn()"
           }
          },
          "_DisplayMixin": {
           "gatherDisplayState": {
            "!type": "fn()"
           },
           "show": {
            "!type": "fn()"
           },
           "hide": {
            "!type": "fn()"
           }
          },
          "_EnableMixin": {
           "gatherEnableState": {
            "!type": "fn()"
           },
           "enable": {
            "!type": "fn()"
           },
           "disable": {
            "!type": "fn()"
           }
          },
          "_FormMixin": {
           "startup": {
            "!type": "fn()"
           },
           "_onReset": {
            "!type": "fn()"
           },
           "onReset": {
            "!type": "fn()"
           },
           "reset": {
            "!type": "fn()"
           },
           "_onSubmit": {
            "!type": "fn()"
           },
           "onSubmit": {
            "!type": "fn()"
           },
           "submit": {
            "!type": "fn()"
           },
           "isValid": {
            "!type": "fn()"
           }
          },
          "_Mixin": {
           "startup": {
            "!type": "fn()"
           },
           "destroy": {
            "!type": "fn()"
           },
           "registerWidget": {
            "!type": "fn()"
           },
           "unregisterWidget": {
            "!type": "fn()"
           },
           "registerWidgetDescendants": {
            "!type": "fn()"
           },
           "unregisterWidgetDescendants": {
            "!type": "fn()"
           },
           "formWidgetValue": {
            "!type": "fn()"
           },
           "formPointValue": {
            "!type": "fn()"
           },
           "inspectFormWidgets": {
            "!type": "fn()"
           },
           "inspectAttachedPoints": {
            "!type": "fn()"
           },
           "inspect": {
            "!type": "fn()"
           }
          },
          "_NodeMixin": {
           "destroy": {
            "!type": "fn()"
           },
           "registerNode": {
            "!type": "fn()"
           },
           "unregisterNode": {
            "!type": "fn()"
           },
           "registerNodeDescendants": {
            "!type": "fn()"
           },
           "unregisterNodeDescendants": {
            "!type": "fn()"
           },
           "formNodeValue": {
            "!type": "fn()"
           },
           "inspectFormNodes": {
            "!type": "fn()"
           }
          },
          "_ValueMixin": {
           "elementValue": {
            "!type": "fn()"
           },
           "gatherFormValues": {
            "!type": "fn()"
           },
           "setFormValues": {
            "!type": "fn()"
           }
          }
         }
        },
        "fx": {
         "sizeTo": {
          "!type": "fn()"
         },
         "slideBy": {
          "!type": "fn()"
         },
         "crossFade": {
          "!type": "fn()"
         },
         "highlight": {
          "!type": "fn()"
         },
         "wipeTo": {
          "!type": "fn()"
         },
         "_Line": {
          "!type": "fn()"
         },
         "flip": {
          "!type": "fn()"
         },
         "flipCube": {
          "!type": "fn()"
         },
         "flipPage": {
          "!type": "fn()"
         },
         "flipGrid": {
          "!type": "fn()"
         },
         "smoothScroll": {
          "!type": "fn()"
         },
         "_split": {
          "!type": "fn()"
         },
         "explode": {
          "!type": "fn()"
         },
         "converge": {
          "!type": "fn()"
         },
         "disintegrate": {
          "!type": "fn()"
         },
         "build": {
          "!type": "fn()"
         },
         "shear": {
          "!type": "fn()"
         },
         "unShear": {
          "!type": "fn()"
         },
         "pinwheel": {
          "!type": "fn()"
         },
         "unPinwheel": {
          "!type": "fn()"
         },
         "blockFadeOut": {
          "!type": "fn()"
         },
         "blockFadeIn": {
          "!type": "fn()"
         },
         "addClass": {
          "!type": "fn()"
         },
         "removeClass": {
          "!type": "fn()"
         },
         "toggleClass": {
          "!type": "fn()"
         },
         "Shadow": {
          "startup": {
           "!type": "fn()"
          },
          "_makePiece": {
           "!type": "fn()"
          },
          "setOpacity": {
           "!type": "fn()"
          },
          "setDisabled": {
           "!type": "fn()"
          },
          "resize": {
           "!type": "fn()"
          }
         },
         "_arg": {
          "StyleArgs": {
           "!type": "fn()"
          },
          "ShadowResizeArgs": {
           "!type": "fn()"
          }
         },
         "ext-dojo": {},
         "text": {
          "_split": {
           "!type": "fn()"
          },
          "explode": {
           "!type": "fn()"
          },
          "converge": {
           "!type": "fn()"
          },
          "disintegrate": {
           "!type": "fn()"
          },
          "build": {
           "!type": "fn()"
          },
          "blockFadeOut": {
           "!type": "fn()"
          },
          "blockFadeIn": {
           "!type": "fn()"
          },
          "backspace": {
           "!type": "fn()"
          },
          "type": {
           "!type": "fn()"
          }
         }
        },
        "grid": {
         "__CellDef": {
          "!type": "fn()"
         },
         "__ViewDef": {
          "!type": "fn()"
         },
         "nop": {
          "!type": "fn()"
         },
         "getTdIndex": {
          "!type": "fn()"
         },
         "getTrIndex": {
          "!type": "fn()"
         },
         "getTr": {
          "!type": "fn()"
         },
         "getTd": {
          "!type": "fn()"
         },
         "findTable": {
          "!type": "fn()"
         },
         "ascendDom": {
          "!type": "fn()"
         },
         "makeNotTagName": {
          "!type": "fn()"
         },
         "fire": {
          "!type": "fn()"
         },
         "setStyleText": {
          "!type": "fn()"
         },
         "getStyleText": {
          "!type": "fn()"
         },
         "setStyle": {
          "!type": "fn()"
         },
         "setStyleHeightPx": {
          "!type": "fn()"
         },
         "funnelEvents": {
          "!type": "fn()"
         },
         "removeNode": {
          "!type": "fn()"
         },
         "getScrollbarWidth": {
          "!type": "fn()"
         },
         "getRef": {
          "!type": "fn()"
         },
         "getProp": {
          "!type": "fn()"
         },
         "indexInParent": {
          "!type": "fn()"
         },
         "cleanNode": {
          "!type": "fn()"
         },
         "getTagName": {
          "!type": "fn()"
         },
         "nodeKids": {
          "!type": "fn()"
         },
         "divkids": {
          "!type": "fn()"
         },
         "focusSelectNode": {
          "!type": "fn()"
         },
         "whenIdle": {
          "!type": "fn()"
         },
         "arrayCompare": {
          "!type": "fn()"
         },
         "arrayInsert": {
          "!type": "fn()"
         },
         "arrayRemove": {
          "!type": "fn()"
         },
         "arraySwap": {
          "!type": "fn()"
         },
         "initTextSizePoll": {
          "!type": "fn()"
         },
         "textSizeChanged": {
          "!type": "fn()"
         },
         "__DataCellDef": {
          "constructor": {
           "!type": "fn()"
          }
         },
         "__DataViewDef": {
          "constructor": {
           "!type": "fn()"
          }
         },
         "DataGrid": {
          "postCreate": {
           "!type": "fn()"
          },
          "createSelection": {
           "!type": "fn()"
          },
          "get": {
           "!type": "fn()"
          },
          "_onSet": {
           "!type": "fn()"
          },
          "_addItem": {
           "!type": "fn()"
          },
          "_onNew": {
           "!type": "fn()"
          },
          "_onDelete": {
           "!type": "fn()"
          },
          "_onRevert": {
           "!type": "fn()"
          },
          "setStore": {
           "!type": "fn()"
          },
          "setQuery": {
           "!type": "fn()"
          },
          "setItems": {
           "!type": "fn()"
          },
          "_setQuery": {
           "!type": "fn()"
          },
          "_setStore": {
           "!type": "fn()"
          },
          "_onFetchBegin": {
           "!type": "fn()"
          },
          "_onFetchComplete": {
           "!type": "fn()"
          },
          "_onFetchError": {
           "!type": "fn()"
          },
          "onFetchError": {
           "!type": "fn()"
          },
          "_fetch": {
           "!type": "fn()"
          },
          "_clearData": {
           "!type": "fn()"
          },
          "getItem": {
           "!type": "fn()"
          },
          "getItemIndex": {
           "!type": "fn()"
          },
          "_getItemIndex": {
           "!type": "fn()"
          },
          "filter": {
           "!type": "fn()"
          },
          "_getItemAttr": {
           "!type": "fn()"
          },
          "_render": {
           "!type": "fn()"
          },
          "_requestsPending": {
           "!type": "fn()"
          },
          "_rowToPage": {
           "!type": "fn()"
          },
          "_pageToRow": {
           "!type": "fn()"
          },
          "_preparePage": {
           "!type": "fn()"
          },
          "_needPage": {
           "!type": "fn()"
          },
          "_requestPage": {
           "!type": "fn()"
          },
          "getCellName": {
           "!type": "fn()"
          },
          "_refresh": {
           "!type": "fn()"
          },
          "sort": {
           "!type": "fn()"
          },
          "canSort": {
           "!type": "fn()"
          },
          "getSortProps": {
           "!type": "fn()"
          },
          "styleRowState": {
           "!type": "fn()"
          },
          "onStyleRow": {
           "!type": "fn()"
          },
          "canEdit": {
           "!type": "fn()"
          },
          "_copyAttr": {
           "!type": "fn()"
          },
          "doStartEdit": {
           "!type": "fn()"
          },
          "doApplyCellEdit": {
           "!type": "fn()"
          },
          "doCancelEdit": {
           "!type": "fn()"
          },
          "doApplyEdit": {
           "!type": "fn()"
          },
          "removeSelectedRows": {
           "!type": "fn()"
          },
          "markupFactory": {
           "!type": "fn()"
          }
         },
         "DataSelection": {
          "getFirstSelected": {
           "!type": "fn()"
          },
          "getNextSelected": {
           "!type": "fn()"
          },
          "getSelected": {
           "!type": "fn()"
          },
          "addToSelection": {
           "!type": "fn()"
          },
          "deselect": {
           "!type": "fn()"
          },
          "deselectAll": {
           "!type": "fn()"
          }
         },
         "Selection": {
          "constructor": {
           "!type": "fn()"
          },
          "setMode": {
           "!type": "fn()"
          },
          "onCanSelect": {
           "!type": "fn()"
          },
          "onCanDeselect": {
           "!type": "fn()"
          },
          "onSelected": {
           "!type": "fn()"
          },
          "onDeselected": {
           "!type": "fn()"
          },
          "onChanging": {
           "!type": "fn()"
          },
          "onChanged": {
           "!type": "fn()"
          },
          "isSelected": {
           "!type": "fn()"
          },
          "getFirstSelected": {
           "!type": "fn()"
          },
          "getNextSelected": {
           "!type": "fn()"
          },
          "getSelected": {
           "!type": "fn()"
          },
          "getSelectedCount": {
           "!type": "fn()"
          },
          "_beginUpdate": {
           "!type": "fn()"
          },
          "_endUpdate": {
           "!type": "fn()"
          },
          "select": {
           "!type": "fn()"
          },
          "addToSelection": {
           "!type": "fn()"
          },
          "deselect": {
           "!type": "fn()"
          },
          "setSelected": {
           "!type": "fn()"
          },
          "toggleSelect": {
           "!type": "fn()"
          },
          "_range": {
           "!type": "fn()"
          },
          "selectRange": {
           "!type": "fn()"
          },
          "deselectRange": {
           "!type": "fn()"
          },
          "insert": {
           "!type": "fn()"
          },
          "remove": {
           "!type": "fn()"
          },
          "deselectAll": {
           "!type": "fn()"
          },
          "clickSelect": {
           "!type": "fn()"
          },
          "clickSelectEvent": {
           "!type": "fn()"
          },
          "clear": {
           "!type": "fn()"
          }
         },
         "util": {
          "fire": {
           "!type": "fn()"
          },
          "setStyleHeightPx": {
           "!type": "fn()"
          },
          "funnelEvents": {
           "!type": "fn()"
          },
          "removeNode": {
           "!type": "fn()"
          },
          "arrayCompare": {
           "!type": "fn()"
          },
          "arrayInsert": {
           "!type": "fn()"
          },
          "arrayRemove": {
           "!type": "fn()"
          },
          "arraySwap": {
           "!type": "fn()"
          }
         },
         "_EditManager": {
          "constructor": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "cellFocus": {
           "!type": "fn()"
          },
          "rowClick": {
           "!type": "fn()"
          },
          "styleRow": {
           "!type": "fn()"
          },
          "dispatchEvent": {
           "!type": "fn()"
          },
          "isEditing": {
           "!type": "fn()"
          },
          "isEditCell": {
           "!type": "fn()"
          },
          "isEditRow": {
           "!type": "fn()"
          },
          "setEditCell": {
           "!type": "fn()"
          },
          "_focusEditor": {
           "!type": "fn()"
          },
          "focusEditor": {
           "!type": "fn()"
          },
          "_shouldCatchBoomerang": {
           "!type": "fn()"
          },
          "_boomerangFocus": {
           "!type": "fn()"
          },
          "_doCatchBoomerang": {
           "!type": "fn()"
          },
          "start": {
           "!type": "fn()"
          },
          "_editorDo": {
           "!type": "fn()"
          },
          "editorApply": {
           "!type": "fn()"
          },
          "editorCancel": {
           "!type": "fn()"
          },
          "applyCellEdit": {
           "!type": "fn()"
          },
          "applyRowEdit": {
           "!type": "fn()"
          },
          "apply": {
           "!type": "fn()"
          },
          "cancel": {
           "!type": "fn()"
          },
          "save": {
           "!type": "fn()"
          },
          "restore": {
           "!type": "fn()"
          }
         },
         "_Events": {
          "onKeyEvent": {
           "!type": "fn()"
          },
          "onContentEvent": {
           "!type": "fn()"
          },
          "onHeaderEvent": {
           "!type": "fn()"
          },
          "onStyleRow": {
           "!type": "fn()"
          },
          "onKeyDown": {
           "!type": "fn()"
          },
          "onMouseOver": {
           "!type": "fn()"
          },
          "onMouseOut": {
           "!type": "fn()"
          },
          "onMouseDown": {
           "!type": "fn()"
          },
          "onMouseOverRow": {
           "!type": "fn()"
          },
          "onMouseOutRow": {
           "!type": "fn()"
          },
          "onMouseDownRow": {
           "!type": "fn()"
          },
          "onCellMouseOver": {
           "!type": "fn()"
          },
          "onCellMouseOut": {
           "!type": "fn()"
          },
          "onCellMouseDown": {
           "!type": "fn()"
          },
          "onCellClick": {
           "!type": "fn()"
          },
          "onCellDblClick": {
           "!type": "fn()"
          },
          "onCellContextMenu": {
           "!type": "fn()"
          },
          "onCellFocus": {
           "!type": "fn()"
          },
          "onRowClick": {
           "!type": "fn()"
          },
          "onRowDblClick": {
           "!type": "fn()"
          },
          "onRowMouseOver": {
           "!type": "fn()"
          },
          "onRowMouseOut": {
           "!type": "fn()"
          },
          "onRowMouseDown": {
           "!type": "fn()"
          },
          "onRowContextMenu": {
           "!type": "fn()"
          },
          "onHeaderMouseOver": {
           "!type": "fn()"
          },
          "onHeaderMouseOut": {
           "!type": "fn()"
          },
          "onHeaderCellMouseOver": {
           "!type": "fn()"
          },
          "onHeaderCellMouseOut": {
           "!type": "fn()"
          },
          "onHeaderCellMouseDown": {
           "!type": "fn()"
          },
          "onHeaderClick": {
           "!type": "fn()"
          },
          "onHeaderCellClick": {
           "!type": "fn()"
          },
          "onHeaderDblClick": {
           "!type": "fn()"
          },
          "onHeaderCellDblClick": {
           "!type": "fn()"
          },
          "onHeaderCellContextMenu": {
           "!type": "fn()"
          },
          "onHeaderContextMenu": {
           "!type": "fn()"
          },
          "onStartEdit": {
           "!type": "fn()"
          },
          "onApplyCellEdit": {
           "!type": "fn()"
          },
          "onCancelEdit": {
           "!type": "fn()"
          },
          "onApplyEdit": {
           "!type": "fn()"
          },
          "onCanSelect": {
           "!type": "fn()"
          },
          "onCanDeselect": {
           "!type": "fn()"
          },
          "onSelected": {
           "!type": "fn()"
          },
          "onDeselected": {
           "!type": "fn()"
          },
          "onSelectionChanged": {
           "!type": "fn()"
          }
         },
         "_FocusManager": {
          "constructor": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "initFocusView": {
           "!type": "fn()"
          },
          "isFocusCell": {
           "!type": "fn()"
          },
          "isLastFocusCell": {
           "!type": "fn()"
          },
          "isFirstFocusCell": {
           "!type": "fn()"
          },
          "isNoFocusCell": {
           "!type": "fn()"
          },
          "isNavHeader": {
           "!type": "fn()"
          },
          "getHeaderIndex": {
           "!type": "fn()"
          },
          "_focusifyCellNode": {
           "!type": "fn()"
          },
          "_delayedCellFocus": {
           "!type": "fn()"
          },
          "_delayedHeaderFocus": {
           "!type": "fn()"
          },
          "_initColumnHeaders": {
           "!type": "fn()"
          },
          "_findHeaderCells": {
           "!type": "fn()"
          },
          "scrollIntoView": {
           "!type": "fn()"
          },
          "_scrollInfo": {
           "!type": "fn()"
          },
          "_scrollHeader": {
           "!type": "fn()"
          },
          "_isHeaderHidden": {
           "!type": "fn()"
          },
          "colSizeAdjust": {
           "!type": "fn()"
          },
          "styleRow": {
           "!type": "fn()"
          },
          "setFocusIndex": {
           "!type": "fn()"
          },
          "setFocusCell": {
           "!type": "fn()"
          },
          "next": {
           "!type": "fn()"
          },
          "previous": {
           "!type": "fn()"
          },
          "move": {
           "!type": "fn()"
          },
          "previousKey": {
           "!type": "fn()"
          },
          "nextKey": {
           "!type": "fn()"
          },
          "tabOut": {
           "!type": "fn()"
          },
          "focusGridView": {
           "!type": "fn()"
          },
          "focusGrid": {
           "!type": "fn()"
          },
          "findAndFocusGridCell": {
           "!type": "fn()"
          },
          "focusHeader": {
           "!type": "fn()"
          },
          "doFocus": {
           "!type": "fn()"
          },
          "doBlur": {
           "!type": "fn()"
          },
          "doBlurHeader": {
           "!type": "fn()"
          },
          "doLastNodeFocus": {
           "!type": "fn()"
          },
          "doLastNodeBlur": {
           "!type": "fn()"
          },
          "doColHeaderFocus": {
           "!type": "fn()"
          },
          "doColHeaderBlur": {
           "!type": "fn()"
          }
         },
         "_Grid": {
          "get": {
           "!type": "fn()"
          },
          "buildRendering": {
           "!type": "fn()"
          },
          "postMixInProperties": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "_setAutoHeightAttr": {
           "!type": "fn()"
          },
          "_getRowCountAttr": {
           "!type": "fn()"
          },
          "textSizeChanged": {
           "!type": "fn()"
          },
          "sizeChange": {
           "!type": "fn()"
          },
          "createManagers": {
           "!type": "fn()"
          },
          "createSelection": {
           "!type": "fn()"
          },
          "createScroller": {
           "!type": "fn()"
          },
          "createLayout": {
           "!type": "fn()"
          },
          "onMoveColumn": {
           "!type": "fn()"
          },
          "createViews": {
           "!type": "fn()"
          },
          "createView": {
           "!type": "fn()"
          },
          "buildViews": {
           "!type": "fn()"
          },
          "_setStructureAttr": {
           "!type": "fn()"
          },
          "setStructure": {
           "!type": "fn()"
          },
          "getColumnTogglingItems": {
           "!type": "fn()"
          },
          "_setHeaderMenuAttr": {
           "!type": "fn()"
          },
          "setHeaderMenu": {
           "!type": "fn()"
          },
          "setupHeaderMenu": {
           "!type": "fn()"
          },
          "_fetch": {
           "!type": "fn()"
          },
          "getItem": {
           "!type": "fn()"
          },
          "showMessage": {
           "!type": "fn()"
          },
          "_structureChanged": {
           "!type": "fn()"
          },
          "hasLayout": {
           "!type": "fn()"
          },
          "resize": {
           "!type": "fn()"
          },
          "_getPadBorder": {
           "!type": "fn()"
          },
          "_getHeaderHeight": {
           "!type": "fn()"
          },
          "_resize": {
           "!type": "fn()"
          },
          "adaptWidth": {
           "!type": "fn()"
          },
          "adaptHeight": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "render": {
           "!type": "fn()"
          },
          "_render": {
           "!type": "fn()"
          },
          "prerender": {
           "!type": "fn()"
          },
          "postrender": {
           "!type": "fn()"
          },
          "postresize": {
           "!type": "fn()"
          },
          "renderRow": {
           "!type": "fn()"
          },
          "rowRemoved": {
           "!type": "fn()"
          },
          "beginUpdate": {
           "!type": "fn()"
          },
          "endUpdate": {
           "!type": "fn()"
          },
          "defaultUpdate": {
           "!type": "fn()"
          },
          "update": {
           "!type": "fn()"
          },
          "updateRow": {
           "!type": "fn()"
          },
          "updateRows": {
           "!type": "fn()"
          },
          "updateRowCount": {
           "!type": "fn()"
          },
          "updateRowStyles": {
           "!type": "fn()"
          },
          "rowHeightChanged": {
           "!type": "fn()"
          },
          "scrollTo": {
           "!type": "fn()"
          },
          "finishScrollJob": {
           "!type": "fn()"
          },
          "setScrollTop": {
           "!type": "fn()"
          },
          "scrollToRow": {
           "!type": "fn()"
          },
          "styleRowNode": {
           "!type": "fn()"
          },
          "_mouseOut": {
           "!type": "fn()"
          },
          "getCell": {
           "!type": "fn()"
          },
          "setCellWidth": {
           "!type": "fn()"
          },
          "getCellName": {
           "!type": "fn()"
          },
          "canSort": {
           "!type": "fn()"
          },
          "sort": {
           "!type": "fn()"
          },
          "getSortAsc": {
           "!type": "fn()"
          },
          "getSortIndex": {
           "!type": "fn()"
          },
          "setSortIndex": {
           "!type": "fn()"
          },
          "setSortInfo": {
           "!type": "fn()"
          },
          "doKeyEvent": {
           "!type": "fn()"
          },
          "_dispatch": {
           "!type": "fn()"
          },
          "dispatchKeyEvent": {
           "!type": "fn()"
          },
          "dispatchContentEvent": {
           "!type": "fn()"
          },
          "dispatchHeaderEvent": {
           "!type": "fn()"
          },
          "dokeydown": {
           "!type": "fn()"
          },
          "doclick": {
           "!type": "fn()"
          },
          "dodblclick": {
           "!type": "fn()"
          },
          "docontextmenu": {
           "!type": "fn()"
          },
          "doheaderclick": {
           "!type": "fn()"
          },
          "doheaderdblclick": {
           "!type": "fn()"
          },
          "doheadercontextmenu": {
           "!type": "fn()"
          },
          "doStartEdit": {
           "!type": "fn()"
          },
          "doApplyCellEdit": {
           "!type": "fn()"
          },
          "doCancelEdit": {
           "!type": "fn()"
          },
          "doApplyEdit": {
           "!type": "fn()"
          },
          "addRow": {
           "!type": "fn()"
          },
          "removeSelectedRows": {
           "!type": "fn()"
          },
          "markupFactory": {
           "!type": "fn()"
          }
         },
         "_Layout": {
          "constructor": {
           "!type": "fn()"
          },
          "moveColumn": {
           "!type": "fn()"
          },
          "setColumnVisibility": {
           "!type": "fn()"
          },
          "addCellDef": {
           "!type": "fn()"
          },
          "addRowDef": {
           "!type": "fn()"
          },
          "addRowsDef": {
           "!type": "fn()"
          },
          "addViewDef": {
           "!type": "fn()"
          },
          "setStructure": {
           "!type": "fn()"
          }
         },
         "_RowManager": {
          "constructor": {
           "!type": "fn()"
          },
          "prepareStylingRow": {
           "!type": "fn()"
          },
          "styleRowNode": {
           "!type": "fn()"
          },
          "applyStyles": {
           "!type": "fn()"
          },
          "updateStyles": {
           "!type": "fn()"
          },
          "setOverRow": {
           "!type": "fn()"
          },
          "isOver": {
           "!type": "fn()"
          }
         },
         "_RowSelector": {
          "buildRendering": {
           "!type": "fn()"
          },
          "getWidth": {
           "!type": "fn()"
          },
          "buildRowContent": {
           "!type": "fn()"
          },
          "renderHeader": {
           "!type": "fn()"
          },
          "resize": {
           "!type": "fn()"
          },
          "adaptWidth": {
           "!type": "fn()"
          },
          "doStyleRowNode": {
           "!type": "fn()"
          },
          "domouseover": {
           "!type": "fn()"
          },
          "domouseout": {
           "!type": "fn()"
          }
         },
         "_Scroller": {
          "constructor": {
           "!type": "fn()"
          },
          "init": {
           "!type": "fn()"
          },
          "_getPageCount": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "setKeepInfo": {
           "!type": "fn()"
          },
          "setContentNodes": {
           "!type": "fn()"
          },
          "getDefaultNodes": {
           "!type": "fn()"
          },
          "invalidate": {
           "!type": "fn()"
          },
          "updateRowCount": {
           "!type": "fn()"
          },
          "pageExists": {
           "!type": "fn()"
          },
          "measurePage": {
           "!type": "fn()"
          },
          "positionPage": {
           "!type": "fn()"
          },
          "repositionPages": {
           "!type": "fn()"
          },
          "installPage": {
           "!type": "fn()"
          },
          "preparePage": {
           "!type": "fn()"
          },
          "renderPage": {
           "!type": "fn()"
          },
          "removePage": {
           "!type": "fn()"
          },
          "destroyPage": {
           "!type": "fn()"
          },
          "pacify": {
           "!type": "fn()"
          },
          "setPacifying": {
           "!type": "fn()"
          },
          "startPacify": {
           "!type": "fn()"
          },
          "doPacify": {
           "!type": "fn()"
          },
          "endPacify": {
           "!type": "fn()"
          },
          "resize": {
           "!type": "fn()"
          },
          "calcLastPageHeight": {
           "!type": "fn()"
          },
          "updateContentHeight": {
           "!type": "fn()"
          },
          "updatePageHeight": {
           "!type": "fn()"
          },
          "rowHeightChanged": {
           "!type": "fn()"
          },
          "invalidateNodes": {
           "!type": "fn()"
          },
          "createPageNode": {
           "!type": "fn()"
          },
          "getPageHeight": {
           "!type": "fn()"
          },
          "pushPage": {
           "!type": "fn()"
          },
          "popPage": {
           "!type": "fn()"
          },
          "findPage": {
           "!type": "fn()"
          },
          "buildPage": {
           "!type": "fn()"
          },
          "needPage": {
           "!type": "fn()"
          },
          "onscroll": {
           "!type": "fn()"
          },
          "scroll": {
           "!type": "fn()"
          },
          "getScrollBottom": {
           "!type": "fn()"
          },
          "processNodeEvent": {
           "!type": "fn()"
          },
          "processEvent": {
           "!type": "fn()"
          },
          "renderRow": {
           "!type": "fn()"
          },
          "removeRow": {
           "!type": "fn()"
          },
          "getDefaultPageNode": {
           "!type": "fn()"
          },
          "positionPageNode": {
           "!type": "fn()"
          },
          "getPageNodePosition": {
           "!type": "fn()"
          },
          "invalidatePageNode": {
           "!type": "fn()"
          },
          "getPageRow": {
           "!type": "fn()"
          },
          "getLastPageRow": {
           "!type": "fn()"
          },
          "getFirstVisibleRow": {
           "!type": "fn()"
          },
          "getLastVisibleRow": {
           "!type": "fn()"
          },
          "findTopRow": {
           "!type": "fn()"
          },
          "findScrollTop": {
           "!type": "fn()"
          }
         },
         "_View": {
          "postMixInProperties": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "focus": {
           "!type": "fn()"
          },
          "setStructure": {
           "!type": "fn()"
          },
          "onBeforeRow": {
           "!type": "fn()"
          },
          "onAfterRow": {
           "!type": "fn()"
          },
          "testFlexCells": {
           "!type": "fn()"
          },
          "updateStructure": {
           "!type": "fn()"
          },
          "getScrollbarWidth": {
           "!type": "fn()"
          },
          "getColumnsWidth": {
           "!type": "fn()"
          },
          "setColumnsWidth": {
           "!type": "fn()"
          },
          "getWidth": {
           "!type": "fn()"
          },
          "getContentWidth": {
           "!type": "fn()"
          },
          "render": {
           "!type": "fn()"
          },
          "_hide": {
           "!type": "fn()"
          },
          "_onDndDropBefore": {
           "!type": "fn()"
          },
          "_onDndDrop": {
           "!type": "fn()"
          },
          "renderHeader": {
           "!type": "fn()"
          },
          "_getHeaderContent": {
           "!type": "fn()"
          },
          "resize": {
           "!type": "fn()"
          },
          "hasHScrollbar": {
           "!type": "fn()"
          },
          "hasVScrollbar": {
           "!type": "fn()"
          },
          "convertColPctToFixed": {
           "!type": "fn()"
          },
          "adaptHeight": {
           "!type": "fn()"
          },
          "adaptWidth": {
           "!type": "fn()"
          },
          "setSize": {
           "!type": "fn()"
          },
          "renderRow": {
           "!type": "fn()"
          },
          "createRowNode": {
           "!type": "fn()"
          },
          "buildRow": {
           "!type": "fn()"
          },
          "buildRowContent": {
           "!type": "fn()"
          },
          "rowRemoved": {
           "!type": "fn()"
          },
          "getRowNode": {
           "!type": "fn()"
          },
          "getCellNode": {
           "!type": "fn()"
          },
          "getHeaderCellNode": {
           "!type": "fn()"
          },
          "styleRow": {
           "!type": "fn()"
          },
          "styleRowNode": {
           "!type": "fn()"
          },
          "doStyleRowNode": {
           "!type": "fn()"
          },
          "updateRow": {
           "!type": "fn()"
          },
          "updateRowStyles": {
           "!type": "fn()"
          },
          "doscroll": {
           "!type": "fn()"
          },
          "setScrollTop": {
           "!type": "fn()"
          },
          "doContentEvent": {
           "!type": "fn()"
          },
          "doHeaderEvent": {
           "!type": "fn()"
          },
          "dispatchContentEvent": {
           "!type": "fn()"
          },
          "dispatchHeaderEvent": {
           "!type": "fn()"
          },
          "setColWidth": {
           "!type": "fn()"
          },
          "update": {
           "!type": "fn()"
          }
         },
         "_GridAvatar": {
          "construct": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          }
         },
         "_ViewManager": {
          "constructor": {
           "!type": "fn()"
          },
          "resize": {
           "!type": "fn()"
          },
          "render": {
           "!type": "fn()"
          },
          "addView": {
           "!type": "fn()"
          },
          "destroyViews": {
           "!type": "fn()"
          },
          "getContentNodes": {
           "!type": "fn()"
          },
          "forEach": {
           "!type": "fn()"
          },
          "onEach": {
           "!type": "fn()"
          },
          "normalizeHeaderNodeHeight": {
           "!type": "fn()"
          },
          "normalizeRowNodeHeights": {
           "!type": "fn()"
          },
          "resetHeaderNodeHeight": {
           "!type": "fn()"
          },
          "renormalizeRow": {
           "!type": "fn()"
          },
          "getViewWidth": {
           "!type": "fn()"
          },
          "measureHeader": {
           "!type": "fn()"
          },
          "measureContent": {
           "!type": "fn()"
          },
          "findClient": {
           "!type": "fn()"
          },
          "arrange": {
           "!type": "fn()"
          },
          "renderRow": {
           "!type": "fn()"
          },
          "rowRemoved": {
           "!type": "fn()"
          },
          "updateRow": {
           "!type": "fn()"
          },
          "updateRowStyles": {
           "!type": "fn()"
          },
          "setScrollTop": {
           "!type": "fn()"
          },
          "getFirstScrollingView": {
           "!type": "fn()"
          }
         },
         "cells": {
          "_Base": {
           "constructor": {
            "!type": "fn()"
           },
           "format": {
            "!type": "fn()"
           },
           "formatEditing": {
            "!type": "fn()"
           },
           "getNode": {
            "!type": "fn()"
           },
           "getHeaderNode": {
            "!type": "fn()"
           },
           "getEditNode": {
            "!type": "fn()"
           },
           "canResize": {
            "!type": "fn()"
           },
           "isFlex": {
            "!type": "fn()"
           },
           "applyEdit": {
            "!type": "fn()"
           },
           "cancelEdit": {
            "!type": "fn()"
           },
           "_onEditBlur": {
            "!type": "fn()"
           },
           "registerOnBlur": {
            "!type": "fn()"
           },
           "needFormatNode": {
            "!type": "fn()"
           },
           "cancelFormatNode": {
            "!type": "fn()"
           },
           "_formatNode": {
            "!type": "fn()"
           },
           "formatNode": {
            "!type": "fn()"
           },
           "dispatchEvent": {
            "!type": "fn()"
           },
           "getValue": {
            "!type": "fn()"
           },
           "setValue": {
            "!type": "fn()"
           },
           "focus": {
            "!type": "fn()"
           },
           "save": {
            "!type": "fn()"
           },
           "restore": {
            "!type": "fn()"
           },
           "_finish": {
            "!type": "fn()"
           },
           "apply": {
            "!type": "fn()"
           },
           "cancel": {
            "!type": "fn()"
           },
           "markupFactory": {
            "!type": "fn()"
           }
          },
          "Cell": {
           "constructor": {
            "!type": "fn()"
           },
           "formatEditing": {
            "!type": "fn()"
           },
           "formatNode": {
            "!type": "fn()"
           },
           "doKey": {
            "!type": "fn()"
           },
           "_finish": {
            "!type": "fn()"
           },
           "markupFactory": {
            "!type": "fn()"
           }
          },
          "RowIndex": {
           "postscript": {
            "!type": "fn()"
           },
           "get": {
            "!type": "fn()"
           },
           "markupFactory": {
            "!type": "fn()"
           }
          },
          "Select": {
           "constructor": {
            "!type": "fn()"
           },
           "formatEditing": {
            "!type": "fn()"
           },
           "getValue": {
            "!type": "fn()"
           },
           "markupFactory": {
            "!type": "fn()"
           }
          },
          "AlwaysEdit": {
           "_formatNode": {
            "!type": "fn()"
           },
           "applyStaticValue": {
            "!type": "fn()"
           },
           "markupFactory": {
            "!type": "fn()"
           }
          },
          "Bool": {
           "formatEditing": {
            "!type": "fn()"
           },
           "doclick": {
            "!type": "fn()"
           },
           "markupFactory": {
            "!type": "fn()"
           }
          },
          "_Widget": {
           "constructor": {
            "!type": "fn()"
           },
           "formatEditing": {
            "!type": "fn()"
           },
           "getValue": {
            "!type": "fn()"
           },
           "setValue": {
            "!type": "fn()"
           },
           "getWidgetProps": {
            "!type": "fn()"
           },
           "createWidget": {
            "!type": "fn()"
           },
           "attachWidget": {
            "!type": "fn()"
           },
           "formatNode": {
            "!type": "fn()"
           },
           "sizeWidget": {
            "!type": "fn()"
           },
           "focus": {
            "!type": "fn()"
           },
           "_finish": {
            "!type": "fn()"
           },
           "markupFactory": {
            "!type": "fn()"
           }
          },
          "ComboBox": {
           "getWidgetProps": {
            "!type": "fn()"
           },
           "getValue": {
            "!type": "fn()"
           },
           "markupFactory": {
            "!type": "fn()"
           }
          },
          "DateTextBox": {
           "setValue": {
            "!type": "fn()"
           },
           "getWidgetProps": {
            "!type": "fn()"
           },
           "markupFactory": {
            "!type": "fn()"
           }
          },
          "CheckBox": {
           "getValue": {
            "!type": "fn()"
           },
           "setValue": {
            "!type": "fn()"
           },
           "sizeWidget": {
            "!type": "fn()"
           },
           "markupFactory": {
            "!type": "fn()"
           }
          },
          "Editor": {
           "getWidgetProps": {
            "!type": "fn()"
           },
           "createWidget": {
            "!type": "fn()"
           },
           "formatNode": {
            "!type": "fn()"
           },
           "populateEditor": {
            "!type": "fn()"
           },
           "markupFactory": {
            "!type": "fn()"
           }
          }
         },
         "compat": {
          "_data": {},
          "_grid": {}
         },
         "editors": {
          "Dijit": {
           "constructor": {
            "!type": "fn()"
           },
           "format": {
            "!type": "fn()"
           },
           "getValue": {
            "!type": "fn()"
           },
           "setValue": {
            "!type": "fn()"
           },
           "getEditorProps": {
            "!type": "fn()"
           },
           "createEditor": {
            "!type": "fn()"
           },
           "attachEditor": {
            "!type": "fn()"
           },
           "formatNode": {
            "!type": "fn()"
           },
           "sizeEditor": {
            "!type": "fn()"
           },
           "focus": {
            "!type": "fn()"
           },
           "_finish": {
            "!type": "fn()"
           }
          },
          "ComboBox": {
           "getEditorProps": {
            "!type": "fn()"
           },
           "getValue": {
            "!type": "fn()"
           }
          },
          "DateTextBox": {
           "setValue": {
            "!type": "fn()"
           },
           "getEditorProps": {
            "!type": "fn()"
           }
          },
          "CheckBox": {
           "getValue": {
            "!type": "fn()"
           },
           "setValue": {
            "!type": "fn()"
           },
           "sizeEditor": {
            "!type": "fn()"
           }
          },
          "Editor": {
           "getEditorProps": {
            "!type": "fn()"
           },
           "createEditor": {
            "!type": "fn()"
           },
           "formatNode": {
            "!type": "fn()"
           },
           "populateEditor": {
            "!type": "fn()"
           }
          },
          "Base": {
           "constructor": {
            "!type": "fn()"
           },
           "format": {
            "!type": "fn()"
           },
           "needFormatNode": {
            "!type": "fn()"
           },
           "cancelFormatNode": {
            "!type": "fn()"
           },
           "_formatNode": {
            "!type": "fn()"
           },
           "getNode": {
            "!type": "fn()"
           },
           "formatNode": {
            "!type": "fn()"
           },
           "dispatchEvent": {
            "!type": "fn()"
           },
           "getValue": {
            "!type": "fn()"
           },
           "setValue": {
            "!type": "fn()"
           },
           "focus": {
            "!type": "fn()"
           },
           "save": {
            "!type": "fn()"
           },
           "restore": {
            "!type": "fn()"
           },
           "_finish": {
            "!type": "fn()"
           },
           "apply": {
            "!type": "fn()"
           },
           "cancel": {
            "!type": "fn()"
           }
          },
          "Input": {
           "constructor": {
            "!type": "fn()"
           },
           "format": {
            "!type": "fn()"
           },
           "formatNode": {
            "!type": "fn()"
           },
           "doKey": {
            "!type": "fn()"
           },
           "_finish": {
            "!type": "fn()"
           }
          },
          "Select": {
           "constructor": {
            "!type": "fn()"
           },
           "format": {
            "!type": "fn()"
           },
           "getValue": {
            "!type": "fn()"
           }
          },
          "AlwaysOn": {
           "_formatNode": {
            "!type": "fn()"
           },
           "applyStaticValue": {
            "!type": "fn()"
           }
          },
          "Bool": {
           "format": {
            "!type": "fn()"
           },
           "doclick": {
            "!type": "fn()"
           }
          }
         },
         "data": {
          "compare": {
           "!type": "fn()"
          },
          "Mixer": {
           "constructor": {
            "!type": "fn()"
           },
           "count": {
            "!type": "fn()"
           },
           "clear": {
            "!type": "fn()"
           },
           "build": {
            "!type": "fn()"
           },
           "getDefault": {
            "!type": "fn()"
           },
           "setDefault": {
            "!type": "fn()"
           },
           "get": {
            "!type": "fn()"
           },
           "_set": {
            "!type": "fn()"
           },
           "set": {
            "!type": "fn()"
           },
           "insert": {
            "!type": "fn()"
           },
           "remove": {
            "!type": "fn()"
           },
           "swap": {
            "!type": "fn()"
           },
           "move": {
            "!type": "fn()"
           }
          },
          "Field": {
           "constructor": {
            "!type": "fn()"
           }
          },
          "Fields": {
           "constructor": {
            "!type": "fn()"
           },
           "indexOf": {
            "!type": "fn()"
           }
          },
          "Model": {
           "constructor": {
            "!type": "fn()"
           },
           "observer": {
            "!type": "fn()"
           },
           "notObserver": {
            "!type": "fn()"
           },
           "notify": {
            "!type": "fn()"
           },
           "clear": {
            "!type": "fn()"
           },
           "beginUpdate": {
            "!type": "fn()"
           },
           "endUpdate": {
            "!type": "fn()"
           },
           "clearData": {
            "!type": "fn()"
           },
           "change": {
            "!type": "fn()"
           },
           "insertion": {
            "!type": "fn()"
           },
           "removal": {
            "!type": "fn()"
           },
           "insert": {
            "!type": "fn()"
           },
           "remove": {
            "!type": "fn()"
           },
           "canSort": {
            "!type": "fn()"
           },
           "generateComparator": {
            "!type": "fn()"
           },
           "makeComparator": {
            "!type": "fn()"
           }
          },
          "Rows": {
           "allChange": {
            "!type": "fn()"
           },
           "rowChange": {
            "!type": "fn()"
           },
           "datumChange": {
            "!type": "fn()"
           },
           "beginModifyRow": {
            "!type": "fn()"
           },
           "endModifyRow": {
            "!type": "fn()"
           },
           "cancelModifyRow": {
            "!type": "fn()"
           }
          },
          "Table": {
           "constructor": {
            "!type": "fn()"
           },
           "measure": {
            "!type": "fn()"
           },
           "getRowCount": {
            "!type": "fn()"
           },
           "getColCount": {
            "!type": "fn()"
           },
           "badIndex": {
            "!type": "fn()"
           },
           "isGoodIndex": {
            "!type": "fn()"
           },
           "getRow": {
            "!type": "fn()"
           },
           "copyRow": {
            "!type": "fn()"
           },
           "getDatum": {
            "!type": "fn()"
           },
           "get": {
            "!type": "fn()"
           },
           "setData": {
            "!type": "fn()"
           },
           "setRow": {
            "!type": "fn()"
           },
           "setDatum": {
            "!type": "fn()"
           },
           "set": {
            "!type": "fn()"
           },
           "setRows": {
            "!type": "fn()"
           },
           "update": {
            "!type": "fn()"
           },
           "_insert": {
            "!type": "fn()"
           },
           "_remove": {
            "!type": "fn()"
           },
           "sort": {
            "!type": "fn()"
           },
           "swap": {
            "!type": "fn()"
           }
          },
          "Objects": {
           "constructor": {
            "!type": "fn()"
           },
           "allChange": {
            "!type": "fn()"
           },
           "autoAssignFields": {
            "!type": "fn()"
           },
           "setData": {
            "!type": "fn()"
           },
           "getDatum": {
            "!type": "fn()"
           }
          },
          "Dynamic": {
           "constructor": {
            "!type": "fn()"
           },
           "clearData": {
            "!type": "fn()"
           },
           "getRowCount": {
            "!type": "fn()"
           },
           "getColCount": {
            "!type": "fn()"
           },
           "setRowCount": {
            "!type": "fn()"
           },
           "requestsPending": {
            "!type": "fn()"
           },
           "rowToPage": {
            "!type": "fn()"
           },
           "pageToRow": {
            "!type": "fn()"
           },
           "requestRows": {
            "!type": "fn()"
           },
           "rowsProvided": {
            "!type": "fn()"
           },
           "requestPage": {
            "!type": "fn()"
           },
           "needPage": {
            "!type": "fn()"
           },
           "preparePage": {
            "!type": "fn()"
           },
           "isRowLoaded": {
            "!type": "fn()"
           },
           "removePages": {
            "!type": "fn()"
           },
           "remove": {
            "!type": "fn()"
           },
           "getRow": {
            "!type": "fn()"
           },
           "getDatum": {
            "!type": "fn()"
           },
           "setDatum": {
            "!type": "fn()"
           },
           "canSort": {
            "!type": "fn()"
           }
          },
          "DojoData": {
           "constructor": {
            "!type": "fn()"
           },
           "markupFactory": {
            "!type": "fn()"
           },
           "setData": {
            "!type": "fn()"
           },
           "setRowCount": {
            "!type": "fn()"
           },
           "beginReturn": {
            "!type": "fn()"
           },
           "_setupFields": {
            "!type": "fn()"
           },
           "_getRowFromItem": {
            "!type": "fn()"
           },
           "_createRow": {
            "!type": "fn()"
           },
           "processRows": {
            "!type": "fn()"
           },
           "requestRows": {
            "!type": "fn()"
           },
           "getDatum": {
            "!type": "fn()"
           },
           "setDatum": {
            "!type": "fn()"
           },
           "copyRow": {
            "!type": "fn()"
           },
           "_attrCompare": {
            "!type": "fn()"
           },
           "endModifyRow": {
            "!type": "fn()"
           },
           "cancelModifyRow": {
            "!type": "fn()"
           },
           "_setRowId": {
            "!type": "fn()"
           },
           "_getRowId": {
            "!type": "fn()"
           },
           "_storeDatumChange": {
            "!type": "fn()"
           },
           "_storeDatumDelete": {
            "!type": "fn()"
           },
           "_storeDatumNew": {
            "!type": "fn()"
           },
           "insert": {
            "!type": "fn()"
           },
           "_insertItem": {
            "!type": "fn()"
           },
           "datumChange": {
            "!type": "fn()"
           },
           "insertion": {
            "!type": "fn()"
           },
           "removal": {
            "!type": "fn()"
           },
           "remove": {
            "!type": "fn()"
           },
           "_removeItems": {
            "!type": "fn()"
           },
           "canSort": {
            "!type": "fn()"
           },
           "sort": {
            "!type": "fn()"
           },
           "refresh": {
            "!type": "fn()"
           },
           "clearData": {
            "!type": "fn()"
           },
           "processError": {
            "!type": "fn()"
           },
           "query": {}
          }
         },
         "Builder": {
          "constructor": {
           "!type": "fn()"
          },
          "generateCellMarkup": {
           "!type": "fn()"
          },
          "isCellNode": {
           "!type": "fn()"
          },
          "getCellNodeIndex": {
           "!type": "fn()"
          },
          "getCellNode": {
           "!type": "fn()"
          },
          "findCellTarget": {
           "!type": "fn()"
          },
          "baseDecorateEvent": {
           "!type": "fn()"
          },
          "findTarget": {
           "!type": "fn()"
          },
          "findRowTarget": {
           "!type": "fn()"
          },
          "isIntraNodeEvent": {
           "!type": "fn()"
          },
          "isIntraRowEvent": {
           "!type": "fn()"
          },
          "dispatchEvent": {
           "!type": "fn()"
          },
          "domouseover": {
           "!type": "fn()"
          },
          "domouseout": {
           "!type": "fn()"
          },
          "domousedown": {
           "!type": "fn()"
          }
         },
         "contentBuilder": {
          "update": {
           "!type": "fn()"
          },
          "prepareHtml": {
           "!type": "fn()"
          },
          "generateHtml": {
           "!type": "fn()"
          },
          "decorateEvent": {
           "!type": "fn()"
          }
         },
         "headerBuilder": {
          "update": {
           "!type": "fn()"
          },
          "generateHtml": {
           "!type": "fn()"
          },
          "getCellX": {
           "!type": "fn()"
          },
          "decorateEvent": {
           "!type": "fn()"
          },
          "prepareResize": {
           "!type": "fn()"
          },
          "canResize": {
           "!type": "fn()"
          },
          "overLeftResizeArea": {
           "!type": "fn()"
          },
          "overRightResizeArea": {
           "!type": "fn()"
          },
          "domousemove": {
           "!type": "fn()"
          },
          "domousedown": {
           "!type": "fn()"
          },
          "doclick": {
           "!type": "fn()"
          },
          "beginColumnResize": {
           "!type": "fn()"
          },
          "doResizeColumn": {
           "!type": "fn()"
          },
          "endResizeColumn": {
           "!type": "fn()"
          }
         },
         "tableMap": {
          "constructor": {
           "!type": "fn()"
          },
          "mapRows": {
           "!type": "fn()"
          },
          "dumpMap": {
           "!type": "fn()"
          },
          "getMapCoords": {
           "!type": "fn()"
          },
          "getNode": {
           "!type": "fn()"
          },
          "_findOverlappingNodes": {
           "!type": "fn()"
          },
          "findOverlappingNodes": {
           "!type": "fn()"
          }
         },
         "cell": {
          "constructor": {
           "!type": "fn()"
          },
          "format": {
           "!type": "fn()"
          },
          "getNode": {
           "!type": "fn()"
          },
          "isFlex": {
           "!type": "fn()"
          },
          "applyEdit": {
           "!type": "fn()"
          },
          "cancelEdit": {
           "!type": "fn()"
          },
          "_onEditBlur": {
           "!type": "fn()"
          },
          "registerOnBlur": {
           "!type": "fn()"
          }
         },
         "edit": {
          "constructor": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "cellFocus": {
           "!type": "fn()"
          },
          "rowClick": {
           "!type": "fn()"
          },
          "styleRow": {
           "!type": "fn()"
          },
          "dispatchEvent": {
           "!type": "fn()"
          },
          "isEditing": {
           "!type": "fn()"
          },
          "isEditCell": {
           "!type": "fn()"
          },
          "isEditRow": {
           "!type": "fn()"
          },
          "setEditCell": {
           "!type": "fn()"
          },
          "_focusEditor": {
           "!type": "fn()"
          },
          "focusEditor": {
           "!type": "fn()"
          },
          "_shouldCatchBoomerang": {
           "!type": "fn()"
          },
          "_boomerangFocus": {
           "!type": "fn()"
          },
          "_doCatchBoomerang": {
           "!type": "fn()"
          },
          "start": {
           "!type": "fn()"
          },
          "_editorDo": {
           "!type": "fn()"
          },
          "editorApply": {
           "!type": "fn()"
          },
          "editorCancel": {
           "!type": "fn()"
          },
          "applyCellEdit": {
           "!type": "fn()"
          },
          "applyRowEdit": {
           "!type": "fn()"
          },
          "apply": {
           "!type": "fn()"
          },
          "cancel": {
           "!type": "fn()"
          },
          "save": {
           "!type": "fn()"
          },
          "restore": {
           "!type": "fn()"
          }
         },
         "focus": {
          "constructor": {
           "!type": "fn()"
          },
          "initFocusView": {
           "!type": "fn()"
          },
          "isFocusCell": {
           "!type": "fn()"
          },
          "isLastFocusCell": {
           "!type": "fn()"
          },
          "isFirstFocusCell": {
           "!type": "fn()"
          },
          "isNoFocusCell": {
           "!type": "fn()"
          },
          "_focusifyCellNode": {
           "!type": "fn()"
          },
          "scrollIntoView": {
           "!type": "fn()"
          },
          "styleRow": {
           "!type": "fn()"
          },
          "setFocusIndex": {
           "!type": "fn()"
          },
          "setFocusCell": {
           "!type": "fn()"
          },
          "next": {
           "!type": "fn()"
          },
          "previous": {
           "!type": "fn()"
          },
          "move": {
           "!type": "fn()"
          },
          "previousKey": {
           "!type": "fn()"
          },
          "nextKey": {
           "!type": "fn()"
          },
          "tabOut": {
           "!type": "fn()"
          },
          "focusGridView": {
           "!type": "fn()"
          },
          "focusGrid": {
           "!type": "fn()"
          },
          "doFocus": {
           "!type": "fn()"
          }
         },
         "layout": {
          "constructor": {
           "!type": "fn()"
          },
          "setStructure": {
           "!type": "fn()"
          },
          "addViewDef": {
           "!type": "fn()"
          },
          "addRowsDef": {
           "!type": "fn()"
          },
          "addRowDef": {
           "!type": "fn()"
          },
          "addCellDef": {
           "!type": "fn()"
          }
         },
         "jobs": {
          "cancel": {
           "!type": "fn()"
          },
          "job": {
           "!type": "fn()"
          },
          "cancelJob": {
           "!type": "fn()"
          }
         },
         "publicEvents": {
          "onKeyEvent": {
           "!type": "fn()"
          },
          "onContentEvent": {
           "!type": "fn()"
          },
          "onHeaderEvent": {
           "!type": "fn()"
          },
          "onStyleRow": {
           "!type": "fn()"
          },
          "onKeyDown": {
           "!type": "fn()"
          },
          "onMouseOver": {
           "!type": "fn()"
          },
          "onMouseOut": {
           "!type": "fn()"
          },
          "onMouseDown": {
           "!type": "fn()"
          },
          "onMouseOverRow": {
           "!type": "fn()"
          },
          "onMouseOutRow": {
           "!type": "fn()"
          },
          "onMouseDownRow": {
           "!type": "fn()"
          },
          "onCellMouseOver": {
           "!type": "fn()"
          },
          "onCellMouseOut": {
           "!type": "fn()"
          },
          "onCellMouseDown": {
           "!type": "fn()"
          },
          "onCellClick": {
           "!type": "fn()"
          },
          "onCellDblClick": {
           "!type": "fn()"
          },
          "onCellContextMenu": {
           "!type": "fn()"
          },
          "onCellFocus": {
           "!type": "fn()"
          },
          "onRowClick": {
           "!type": "fn()"
          },
          "onRowDblClick": {
           "!type": "fn()"
          },
          "onRowMouseOver": {
           "!type": "fn()"
          },
          "onRowMouseOut": {
           "!type": "fn()"
          },
          "onRowMouseDown": {
           "!type": "fn()"
          },
          "onRowContextMenu": {
           "!type": "fn()"
          },
          "onHeaderMouseOver": {
           "!type": "fn()"
          },
          "onHeaderMouseOut": {
           "!type": "fn()"
          },
          "onHeaderCellMouseOver": {
           "!type": "fn()"
          },
          "onHeaderCellMouseOut": {
           "!type": "fn()"
          },
          "onHeaderCellMouseDown": {
           "!type": "fn()"
          },
          "onHeaderClick": {
           "!type": "fn()"
          },
          "onHeaderCellClick": {
           "!type": "fn()"
          },
          "onHeaderDblClick": {
           "!type": "fn()"
          },
          "onHeaderCellDblClick": {
           "!type": "fn()"
          },
          "onHeaderCellContextMenu": {
           "!type": "fn()"
          },
          "onHeaderContextMenu": {
           "!type": "fn()"
          },
          "onStartEdit": {
           "!type": "fn()"
          },
          "onApplyCellEdit": {
           "!type": "fn()"
          },
          "onCancelEdit": {
           "!type": "fn()"
          },
          "onApplyEdit": {
           "!type": "fn()"
          },
          "onCanSelect": {
           "!type": "fn()"
          },
          "onCanDeselect": {
           "!type": "fn()"
          },
          "onSelected": {
           "!type": "fn()"
          },
          "onDeselected": {
           "!type": "fn()"
          },
          "onSelectionChanged": {
           "!type": "fn()"
          }
         },
         "rows": {
          "constructor": {
           "!type": "fn()"
          },
          "getHeight": {
           "!type": "fn()"
          },
          "getDefaultHeightPx": {
           "!type": "fn()"
          },
          "prepareStylingRow": {
           "!type": "fn()"
          },
          "styleRowNode": {
           "!type": "fn()"
          },
          "applyStyles": {
           "!type": "fn()"
          },
          "updateStyles": {
           "!type": "fn()"
          },
          "setOverRow": {
           "!type": "fn()"
          },
          "isOver": {
           "!type": "fn()"
          }
         },
         "scroller": {
          "constructor": {
           "!type": "fn()"
          },
          "renderRow": {
           "!type": "fn()"
          },
          "removeRow": {
           "!type": "fn()"
          },
          "getDefaultNodes": {
           "!type": "fn()"
          },
          "getDefaultPageNode": {
           "!type": "fn()"
          },
          "positionPageNode": {
           "!type": "fn()"
          },
          "getPageNodePosition": {
           "!type": "fn()"
          },
          "repositionPageNodes": {
           "!type": "fn()"
          },
          "invalidatePageNode": {
           "!type": "fn()"
          },
          "preparePageNode": {
           "!type": "fn()"
          },
          "pageExists": {
           "!type": "fn()"
          },
          "measurePage": {
           "!type": "fn()"
          },
          "positionPage": {
           "!type": "fn()"
          },
          "repositionPages": {
           "!type": "fn()"
          },
          "preparePage": {
           "!type": "fn()"
          },
          "installPage": {
           "!type": "fn()"
          },
          "destroyPage": {
           "!type": "fn()"
          },
          "renderPage": {
           "!type": "fn()"
          },
          "removePage": {
           "!type": "fn()"
          },
          "getPageRow": {
           "!type": "fn()"
          },
          "getLastPageRow": {
           "!type": "fn()"
          },
          "getFirstVisibleRowNodes": {
           "!type": "fn()"
          },
          "getFirstVisibleRow": {
           "!type": "fn()"
          },
          "getLastVisibleRowNodes": {
           "!type": "fn()"
          },
          "getLastVisibleRow": {
           "!type": "fn()"
          },
          "findTopRowForNodes": {
           "!type": "fn()"
          },
          "findScrollTopForNodes": {
           "!type": "fn()"
          },
          "findTopRow": {
           "!type": "fn()"
          },
          "findScrollTop": {
           "!type": "fn()"
          },
          "base": {
           "constructor": {
            "!type": "fn()"
           },
           "init": {
            "!type": "fn()"
           },
           "setKeepInfo": {
            "!type": "fn()"
           },
           "invalidate": {
            "!type": "fn()"
           },
           "updateRowCount": {
            "!type": "fn()"
           },
           "pageExists": {
            "!type": "fn()"
           },
           "measurePage": {
            "!type": "fn()"
           },
           "positionPage": {
            "!type": "fn()"
           },
           "repositionPages": {
            "!type": "fn()"
           },
           "installPage": {
            "!type": "fn()"
           },
           "preparePage": {
            "!type": "fn()"
           },
           "renderPage": {
            "!type": "fn()"
           },
           "removePage": {
            "!type": "fn()"
           },
           "pacify": {
            "!type": "fn()"
           },
           "setPacifying": {
            "!type": "fn()"
           },
           "startPacify": {
            "!type": "fn()"
           },
           "doPacify": {
            "!type": "fn()"
           },
           "endPacify": {
            "!type": "fn()"
           },
           "resize": {
            "!type": "fn()"
           },
           "calcLastPageHeight": {
            "!type": "fn()"
           },
           "updateContentHeight": {
            "!type": "fn()"
           },
           "updatePageHeight": {
            "!type": "fn()"
           },
           "rowHeightChanged": {
            "!type": "fn()"
           },
           "invalidateNodes": {
            "!type": "fn()"
           },
           "createPageNode": {
            "!type": "fn()"
           },
           "getPageHeight": {
            "!type": "fn()"
           },
           "pushPage": {
            "!type": "fn()"
           },
           "popPage": {
            "!type": "fn()"
           },
           "findPage": {
            "!type": "fn()"
           },
           "buildPage": {
            "!type": "fn()"
           },
           "needPage": {
            "!type": "fn()"
           },
           "onscroll": {
            "!type": "fn()"
           },
           "scroll": {
            "!type": "fn()"
           },
           "getScrollBottom": {
            "!type": "fn()"
           },
           "processNodeEvent": {
            "!type": "fn()"
           },
           "processEvent": {
            "!type": "fn()"
           }
          },
          "columns": {
           "constructor": {
            "!type": "fn()"
           },
           "setContentNodes": {
            "!type": "fn()"
           },
           "getDefaultNodes": {
            "!type": "fn()"
           },
           "scroll": {
            "!type": "fn()"
           },
           "resize": {
            "!type": "fn()"
           },
           "positionPage": {
            "!type": "fn()"
           },
           "preparePage": {
            "!type": "fn()"
           },
           "installPage": {
            "!type": "fn()"
           },
           "destroyPage": {
            "!type": "fn()"
           },
           "renderPage": {
            "!type": "fn()"
           }
          }
         },
         "selection": {
          "constructor": {
           "!type": "fn()"
          },
          "onCanSelect": {
           "!type": "fn()"
          },
          "onCanDeselect": {
           "!type": "fn()"
          },
          "onSelected": {
           "!type": "fn()"
          },
          "onDeselected": {
           "!type": "fn()"
          },
          "onChanging": {
           "!type": "fn()"
          },
          "onChanged": {
           "!type": "fn()"
          },
          "isSelected": {
           "!type": "fn()"
          },
          "getFirstSelected": {
           "!type": "fn()"
          },
          "getNextSelected": {
           "!type": "fn()"
          },
          "getSelected": {
           "!type": "fn()"
          },
          "getSelectedCount": {
           "!type": "fn()"
          },
          "beginUpdate": {
           "!type": "fn()"
          },
          "endUpdate": {
           "!type": "fn()"
          },
          "select": {
           "!type": "fn()"
          },
          "addToSelection": {
           "!type": "fn()"
          },
          "deselect": {
           "!type": "fn()"
          },
          "setSelected": {
           "!type": "fn()"
          },
          "toggleSelect": {
           "!type": "fn()"
          },
          "insert": {
           "!type": "fn()"
          },
          "remove": {
           "!type": "fn()"
          },
          "unselectAll": {
           "!type": "fn()"
          },
          "shiftSelect": {
           "!type": "fn()"
          },
          "clickSelect": {
           "!type": "fn()"
          },
          "clickSelectEvent": {
           "!type": "fn()"
          },
          "clear": {
           "!type": "fn()"
          }
         },
         "views": {
          "constructor": {
           "!type": "fn()"
          },
          "resize": {
           "!type": "fn()"
          },
          "render": {
           "!type": "fn()"
          },
          "addView": {
           "!type": "fn()"
          },
          "destroyViews": {
           "!type": "fn()"
          },
          "getContentNodes": {
           "!type": "fn()"
          },
          "forEach": {
           "!type": "fn()"
          },
          "onEach": {
           "!type": "fn()"
          },
          "normalizeHeaderNodeHeight": {
           "!type": "fn()"
          },
          "normalizeRowNodeHeights": {
           "!type": "fn()"
          },
          "resetHeaderNodeHeight": {
           "!type": "fn()"
          },
          "renormalizeRow": {
           "!type": "fn()"
          },
          "getViewWidth": {
           "!type": "fn()"
          },
          "measureHeader": {
           "!type": "fn()"
          },
          "measureContent": {
           "!type": "fn()"
          },
          "findClient": {
           "!type": "fn()"
          },
          "arrange": {
           "!type": "fn()"
          },
          "renderRow": {
           "!type": "fn()"
          },
          "rowRemoved": {
           "!type": "fn()"
          },
          "updateRow": {
           "!type": "fn()"
          },
          "updateRowStyles": {
           "!type": "fn()"
          },
          "setScrollTop": {
           "!type": "fn()"
          },
          "getFirstScrollingView": {
           "!type": "fn()"
          }
         }
        },
        "Grid": {
         "postCreate": {
          "!type": "fn()"
         },
         "destroy": {
          "!type": "fn()"
         },
         "_structureChanged": {
          "!type": "fn()"
         },
         "_setModel": {
          "!type": "fn()"
         },
         "setModel": {
          "!type": "fn()"
         },
         "get": {
          "!type": "fn()"
         },
         "modelAllChange": {
          "!type": "fn()"
         },
         "modelBeginUpdate": {
          "!type": "fn()"
         },
         "modelEndUpdate": {
          "!type": "fn()"
         },
         "modelRowChange": {
          "!type": "fn()"
         },
         "modelDatumChange": {
          "!type": "fn()"
         },
         "modelFieldsChange": {
          "!type": "fn()"
         },
         "modelInsertion": {
          "!type": "fn()"
         },
         "modelRemoval": {
          "!type": "fn()"
         },
         "getCellName": {
          "!type": "fn()"
         },
         "indexCellFields": {
          "!type": "fn()"
         },
         "refresh": {
          "!type": "fn()"
         },
         "canSort": {
          "!type": "fn()"
         },
         "getSortField": {
          "!type": "fn()"
         },
         "sort": {
          "!type": "fn()"
         },
         "addRow": {
          "!type": "fn()"
         },
         "removeSelectedRows": {
          "!type": "fn()"
         },
         "canEdit": {
          "!type": "fn()"
         },
         "doStartEdit": {
          "!type": "fn()"
         },
         "doApplyCellEdit": {
          "!type": "fn()"
         },
         "doCancelEdit": {
          "!type": "fn()"
         },
         "doApplyEdit": {
          "!type": "fn()"
         },
         "styleRowState": {
          "!type": "fn()"
         },
         "onStyleRow": {
          "!type": "fn()"
         },
         "markupFactory": {
          "!type": "fn()"
         }
        },
        "VirtualGrid": {
         "get": {
          "!type": "fn()"
         },
         "buildRendering": {
          "!type": "fn()"
         },
         "postCreate": {
          "!type": "fn()"
         },
         "destroy": {
          "!type": "fn()"
         },
         "styleChanged": {
          "!type": "fn()"
         },
         "_styleChanged": {
          "!type": "fn()"
         },
         "textSizeChanged": {
          "!type": "fn()"
         },
         "_textSizeChanged": {
          "!type": "fn()"
         },
         "sizeChange": {
          "!type": "fn()"
         },
         "renderOnIdle": {
          "!type": "fn()"
         },
         "createManagers": {
          "!type": "fn()"
         },
         "createScroller": {
          "!type": "fn()"
         },
         "createLayout": {
          "!type": "fn()"
         },
         "createViews": {
          "!type": "fn()"
         },
         "createView": {
          "!type": "fn()"
         },
         "buildViews": {
          "!type": "fn()"
         },
         "setStructure": {
          "!type": "fn()"
         },
         "_structureChanged": {
          "!type": "fn()"
         },
         "hasLayout": {
          "!type": "fn()"
         },
         "resize": {
          "!type": "fn()"
         },
         "_getPadBorder": {
          "!type": "fn()"
         },
         "_resize": {
          "!type": "fn()"
         },
         "adaptWidth": {
          "!type": "fn()"
         },
         "adaptHeight": {
          "!type": "fn()"
         },
         "render": {
          "!type": "fn()"
         },
         "prerender": {
          "!type": "fn()"
         },
         "postrender": {
          "!type": "fn()"
         },
         "postresize": {
          "!type": "fn()"
         },
         "renderRow": {
          "!type": "fn()"
         },
         "rowRemoved": {
          "!type": "fn()"
         },
         "beginUpdate": {
          "!type": "fn()"
         },
         "endUpdate": {
          "!type": "fn()"
         },
         "defaultUpdate": {
          "!type": "fn()"
         },
         "update": {
          "!type": "fn()"
         },
         "updateRow": {
          "!type": "fn()"
         },
         "updateRowCount": {
          "!type": "fn()"
         },
         "updateRowStyles": {
          "!type": "fn()"
         },
         "rowHeightChanged": {
          "!type": "fn()"
         },
         "scrollTo": {
          "!type": "fn()"
         },
         "finishScrollJob": {
          "!type": "fn()"
         },
         "setScrollTop": {
          "!type": "fn()"
         },
         "scrollToRow": {
          "!type": "fn()"
         },
         "styleRowNode": {
          "!type": "fn()"
         },
         "getCell": {
          "!type": "fn()"
         },
         "setCellWidth": {
          "!type": "fn()"
         },
         "getCellName": {
          "!type": "fn()"
         },
         "canSort": {
          "!type": "fn()"
         },
         "sort": {
          "!type": "fn()"
         },
         "getSortAsc": {
          "!type": "fn()"
         },
         "getSortIndex": {
          "!type": "fn()"
         },
         "setSortIndex": {
          "!type": "fn()"
         },
         "setSortInfo": {
          "!type": "fn()"
         },
         "doKeyEvent": {
          "!type": "fn()"
         },
         "_dispatch": {
          "!type": "fn()"
         },
         "dispatchKeyEvent": {
          "!type": "fn()"
         },
         "dispatchContentEvent": {
          "!type": "fn()"
         },
         "dispatchHeaderEvent": {
          "!type": "fn()"
         },
         "dokeydown": {
          "!type": "fn()"
         },
         "doclick": {
          "!type": "fn()"
         },
         "dodblclick": {
          "!type": "fn()"
         },
         "docontextmenu": {
          "!type": "fn()"
         },
         "doheaderclick": {
          "!type": "fn()"
         },
         "doheaderdblclick": {
          "!type": "fn()"
         },
         "doheadercontextmenu": {
          "!type": "fn()"
         },
         "doStartEdit": {
          "!type": "fn()"
         },
         "doApplyCellEdit": {
          "!type": "fn()"
         },
         "doCancelEdit": {
          "!type": "fn()"
         },
         "doApplyEdit": {
          "!type": "fn()"
         },
         "addRow": {
          "!type": "fn()"
         },
         "removeSelectedRows": {
          "!type": "fn()"
         }
        },
        "GridRowView": {
         "buildRendering": {
          "!type": "fn()"
         },
         "getWidth": {
          "!type": "fn()"
         },
         "buildRowContent": {
          "!type": "fn()"
         },
         "renderHeader": {
          "!type": "fn()"
         },
         "resize": {
          "!type": "fn()"
         },
         "adaptWidth": {
          "!type": "fn()"
         },
         "doStyleRowNode": {
          "!type": "fn()"
         },
         "domouseover": {
          "!type": "fn()"
         },
         "domouseout": {
          "!type": "fn()"
         }
        },
        "GridView": {
         "postMixInProperties": {
          "!type": "fn()"
         },
         "postCreate": {
          "!type": "fn()"
         },
         "destroy": {
          "!type": "fn()"
         },
         "focus": {
          "!type": "fn()"
         },
         "setStructure": {
          "!type": "fn()"
         },
         "testFlexCells": {
          "!type": "fn()"
         },
         "updateStructure": {
          "!type": "fn()"
         },
         "getScrollbarWidth": {
          "!type": "fn()"
         },
         "getColumnsWidth": {
          "!type": "fn()"
         },
         "getWidth": {
          "!type": "fn()"
         },
         "getContentWidth": {
          "!type": "fn()"
         },
         "render": {
          "!type": "fn()"
         },
         "renderHeader": {
          "!type": "fn()"
         },
         "_getHeaderContent": {
          "!type": "fn()"
         },
         "resize": {
          "!type": "fn()"
         },
         "hasScrollbar": {
          "!type": "fn()"
         },
         "adaptHeight": {
          "!type": "fn()"
         },
         "adaptWidth": {
          "!type": "fn()"
         },
         "setSize": {
          "!type": "fn()"
         },
         "renderRow": {
          "!type": "fn()"
         },
         "createRowNode": {
          "!type": "fn()"
         },
         "buildRow": {
          "!type": "fn()"
         },
         "buildRowContent": {
          "!type": "fn()"
         },
         "rowRemoved": {
          "!type": "fn()"
         },
         "getRowNode": {
          "!type": "fn()"
         },
         "getCellNode": {
          "!type": "fn()"
         },
         "styleRow": {
          "!type": "fn()"
         },
         "styleRowNode": {
          "!type": "fn()"
         },
         "doStyleRowNode": {
          "!type": "fn()"
         },
         "updateRow": {
          "!type": "fn()"
         },
         "updateRowStyles": {
          "!type": "fn()"
         },
         "doscroll": {
          "!type": "fn()"
         },
         "setScrollTop": {
          "!type": "fn()"
         },
         "doContentEvent": {
          "!type": "fn()"
         },
         "doHeaderEvent": {
          "!type": "fn()"
         },
         "dispatchContentEvent": {
          "!type": "fn()"
         },
         "dispatchHeaderEvent": {
          "!type": "fn()"
         },
         "setColWidth": {
          "!type": "fn()"
         },
         "update": {
          "!type": "fn()"
         }
        },
        "help": {
         "locate": {
          "!type": "fn()"
         },
         "refresh": {
          "!type": "fn()"
         },
         "noConflict": {
          "!type": "fn()"
         },
         "init": {
          "!type": "fn()"
         },
         "_noConflict": {
          "!type": "fn()"
         },
         "_clean": {
          "!type": "fn()"
         },
         "_displayLocated": {
          "!type": "fn()"
         },
         "_displayHelp": {
          "!type": "fn()"
         },
         "_addVersion": {
          "!type": "fn()"
         },
         "_stripPrototype": {
          "!type": "fn()"
         },
         "_help": {
          "!type": "fn()"
         },
         "_parse": {
          "!type": "fn()"
         },
         "_toString": {
          "!type": "fn()"
         },
         "__toString": {
          "!type": "fn()"
         },
         "_recurse": {
          "!type": "fn()"
         },
         "__recurse": {
          "!type": "fn()"
         },
         "_plainText": {
          "!type": "fn()"
         }
        },
        "highlight": {
         "processString": {
          "!type": "fn()"
         },
         "init": {
          "!type": "fn()"
         },
         "Code": {
          "!type": "fn()"
         },
         "constants": {
          "APOS_STRING_MODE": {},
          "QUOTE_STRING_MODE": {},
          "BACKSLASH_ESCAPE": {},
          "C_LINE_COMMENT_MODE": {},
          "C_BLOCK_COMMENT_MODE": {},
          "HASH_COMMENT_MODE": {},
          "C_NUMBER_MODE": {}
         },
         "languages": {
          "cpp": {
           "defaultMode": {
            "keywords": {}
           }
          },
          "css": {
           "defaultMode": {
            "keywords": {
             "keyword": {}
            }
           }
          },
          "delphi": {
           "defaultMode": {}
          },
          "django": {
           "defaultMode": {}
          },
          "html": {
           "defaultMode": {}
          },
          "javascript": {
           "defaultMode": {
            "keywords": {
             "keyword": {},
             "literal": {},
             "keyword constant": {},
             "name builtin": {},
             "name builtin pseudo": {}
            }
           }
          },
          "pygments": {
           "_html": {
            "tags": {}
           },
           "xml": {}
          },
          "xml": {
           "defaultMode": {}
          },
          "python": {
           "defaultMode": {
            "keywords": {}
           }
          },
          "sql": {
           "defaultMode": {
            "keywords": {
             "aggregate": {}
            }
           }
          }
         }
        },
        "html": {
         "_adjustCssPaths": {
          "!type": "fn()"
         },
         "_adjustHtmlPaths": {
          "!type": "fn()"
         },
         "_snarfStyles": {
          "!type": "fn()"
         },
         "_snarfScripts": {
          "!type": "fn()"
         },
         "evalInGlobal": {
          "!type": "fn()"
         },
         "set": {
          "!type": "fn()"
         },
         "insertCssRule": {
          "!type": "fn()"
         },
         "removeCssRule": {
          "!type": "fn()"
         },
         "getStyleSheet": {
          "!type": "fn()"
         },
         "getDynamicStyleSheet": {
          "!type": "fn()"
         },
         "enableStyleSheet": {
          "!type": "fn()"
         },
         "disableStyleSheet": {
          "!type": "fn()"
         },
         "activeStyleSheet": {
          "!type": "fn()"
         },
         "getPreferredStyleSheet": {
          "!type": "fn()"
         },
         "getToggledStyleSheets": {
          "!type": "fn()"
         },
         "getStyleSheets": {
          "!type": "fn()"
         },
         "_ContentSetter": {
          "_renderStyles": {
           "!type": "fn()"
          },
          "empty": {
           "!type": "fn()"
          },
          "onBegin": {
           "!type": "fn()"
          },
          "onEnd": {
           "!type": "fn()"
          },
          "tearDown": {
           "!type": "fn()"
          }
         },
         "metrics": {
          "getFontMeasurements": {
           "!type": "fn()"
          },
          "getCachedFontMeasurements": {
           "!type": "fn()"
          },
          "getTextBox": {
           "!type": "fn()"
          },
          "getScrollbar": {
           "!type": "fn()"
          },
          "initOnFontResize": {
           "!type": "fn()"
          },
          "onFontResize": {
           "!type": "fn()"
          },
          "_fontresize": {
           "!type": "fn()"
          },
          "_fontResizeNode": {
           "contentWindow": {}
          }
         }
        },
        "image": {
         "preload": {
          "!type": "fn()"
         },
         "Badge": {
          "startup": {
           "!type": "fn()"
          },
          "_init": {
           "!type": "fn()"
          },
          "_getCell": {
           "!type": "fn()"
          },
          "_getImage": {
           "!type": "fn()"
          },
          "_enbiggen": {
           "!type": "fn()"
          },
          "_loadUnder": {
           "!type": "fn()"
          },
          "_disenbiggen": {
           "!type": "fn()"
          },
          "_cycle": {
           "!type": "fn()"
          }
         },
         "FlickrBadge": {
          "postCreate": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          }
         },
         "Gallery": {
          "postCreate": {
           "!type": "fn()"
          },
          "setDataStore": {
           "!type": "fn()"
          },
          "reset": {
           "!type": "fn()"
          },
          "showNextImage": {
           "!type": "fn()"
          },
          "toggleSlideshow": {
           "!type": "fn()"
          },
          "showImage": {
           "!type": "fn()"
          },
          "_centerChildren": {
           "!type": "fn()"
          }
         },
         "Lightbox": {
          "startup": {
           "!type": "fn()"
          },
          "_addSelf": {
           "!type": "fn()"
          },
          "_handleClick": {
           "!type": "fn()"
          },
          "show": {
           "!type": "fn()"
          },
          "hide": {
           "!type": "fn()"
          },
          "disable": {
           "!type": "fn()"
          },
          "enable": {
           "!type": "fn()"
          },
          "onClick": {
           "!type": "fn()"
          }
         },
         "LightboxDialog": {
          "startup": {
           "!type": "fn()"
          },
          "show": {
           "!type": "fn()"
          },
          "_ready": {
           "!type": "fn()"
          },
          "_nextImage": {
           "!type": "fn()"
          },
          "_prevImage": {
           "!type": "fn()"
          },
          "_loadImage": {
           "!type": "fn()"
          },
          "_prepNodes": {
           "!type": "fn()"
          },
          "resizeTo": {
           "!type": "fn()"
          },
          "_scaleToFit": {
           "!type": "fn()"
          },
          "_setImageSize": {
           "!type": "fn()"
          },
          "_size": {
           "!type": "fn()"
          },
          "_position": {
           "!type": "fn()"
          },
          "_showImage": {
           "!type": "fn()"
          },
          "_showNav": {
           "!type": "fn()"
          },
          "hide": {
           "!type": "fn()"
          },
          "addImage": {
           "!type": "fn()"
          },
          "_handleKey": {
           "!type": "fn()"
          },
          "_makeAnims": {
           "!type": "fn()"
          },
          "onClick": {
           "!type": "fn()"
          },
          "_onImageClick": {
           "!type": "fn()"
          },
          "_groups": {}
         },
         "LightboxNano": {
          "constructor": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "_createDiv": {
           "!type": "fn()"
          },
          "_load": {
           "!type": "fn()"
          },
          "_hideLoading": {
           "!type": "fn()"
          },
          "_show": {
           "!type": "fn()"
          },
          "_sizeBg": {
           "!type": "fn()"
          },
          "_key": {
           "!type": "fn()"
          },
          "_coords": {
           "!type": "fn()"
          },
          "_hide": {
           "!type": "fn()"
          },
          "_reset": {
           "!type": "fn()"
          },
          "_anim": {
           "!type": "fn()"
          }
         },
         "Magnifier": {
          "_createGlass": {
           "!type": "fn()"
          },
          "_placeGlass": {
           "!type": "fn()"
          },
          "_setImage": {
           "!type": "fn()"
          }
         },
         "MagnifierLite": {
          "postCreate": {
           "!type": "fn()"
          },
          "_createGlass": {
           "!type": "fn()"
          },
          "_adjustScale": {
           "!type": "fn()"
          },
          "_showGlass": {
           "!type": "fn()"
          },
          "_hideGlass": {
           "!type": "fn()"
          },
          "_placeGlass": {
           "!type": "fn()"
          },
          "_setImage": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          }
         },
         "SlideShow": {
          "postCreate": {
           "!type": "fn()"
          },
          "setDataStore": {
           "!type": "fn()"
          },
          "reset": {
           "!type": "fn()"
          },
          "isImageLoaded": {
           "!type": "fn()"
          },
          "moveImageLoadingPointer": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "showNextImage": {
           "!type": "fn()"
          },
          "toggleSlideShow": {
           "!type": "fn()"
          },
          "getShowTopicName": {
           "!type": "fn()"
          },
          "getLoadTopicName": {
           "!type": "fn()"
          },
          "showImage": {
           "!type": "fn()"
          },
          "_fitSize": {
           "!type": "fn()"
          },
          "_getTopPadding": {
           "!type": "fn()"
          },
          "_loadNextImage": {
           "!type": "fn()"
          },
          "_loadImage": {
           "!type": "fn()"
          },
          "_stop": {
           "!type": "fn()"
          },
          "_prev": {
           "!type": "fn()"
          },
          "_next": {
           "!type": "fn()"
          },
          "_startTimer": {
           "!type": "fn()"
          },
          "_calcNavDimensions": {
           "!type": "fn()"
          },
          "_setTitle": {
           "!type": "fn()"
          },
          "_fitImage": {
           "!type": "fn()"
          },
          "_handleClick": {
           "!type": "fn()"
          },
          "_showNav": {
           "!type": "fn()"
          },
          "_hideNav": {
           "!type": "fn()"
          },
          "_overElement": {
           "!type": "fn()"
          }
         },
         "ThumbnailPicker": {
          "postCreate": {
           "!type": "fn()"
          },
          "init": {
           "!type": "fn()"
          },
          "getClickTopicName": {
           "!type": "fn()"
          },
          "getShowTopicName": {
           "!type": "fn()"
          },
          "setDataStore": {
           "!type": "fn()"
          },
          "reset": {
           "!type": "fn()"
          },
          "isVisible": {
           "!type": "fn()"
          },
          "_next": {
           "!type": "fn()"
          },
          "_prev": {
           "!type": "fn()"
          },
          "_checkLoad": {
           "!type": "fn()"
          },
          "_showThumbs": {
           "!type": "fn()"
          },
          "markImageLoaded": {
           "!type": "fn()"
          },
          "_setThumbClass": {
           "!type": "fn()"
          },
          "_loadNextPage": {
           "!type": "fn()"
          },
          "_loadImage": {
           "!type": "fn()"
          },
          "_updateNavControls": {
           "!type": "fn()"
          }
         }
        },
        "io": {
         "httpParse": {
          "!type": "fn()"
         },
         "__xhrContentArgs": {
          "!type": "fn()"
         },
         "__xhrMultiArgs": {
          "!type": "fn()"
         },
         "xhrMultiPart": {
          "!type": "fn()"
         },
         "xhrScriptPlugin": {
          "!type": "fn()"
         },
         "xhrWindowNamePlugin": {
          "!type": "fn()"
         },
         "OAuth": {
          "__AccessorArgs": {
           "!type": "fn()"
          },
          "__OAuthArgs": {
           "!type": "fn()"
          }
         },
         "proxy": {
          "xip": {
           "XhrIframeFacade": {
            "open": {
             "!type": "fn()"
            },
            "setRequestHeader": {
             "!type": "fn()"
            },
            "send": {
             "!type": "fn()"
            },
            "abort": {
             "!type": "fn()"
            },
            "getAllResponseHeaders": {
             "!type": "fn()"
            },
            "getResponseHeader": {
             "!type": "fn()"
            },
            "_setResponseHeaders": {
             "!type": "fn()"
            }
           },
           "send": {
            "!type": "fn()"
           },
           "_realSend": {
            "!type": "fn()"
           },
           "receive": {
            "!type": "fn()"
           },
           "frameLoaded": {
            "!type": "fn()"
           },
           "destroyState": {
            "!type": "fn()"
           },
           "createFacade": {
            "!type": "fn()"
           },
           "sendRequest": {
            "!type": "fn()"
           },
           "sendRequestStart": {
            "!type": "fn()"
           },
           "sendRequestPart": {
            "!type": "fn()"
           },
           "setServerUrl": {
            "!type": "fn()"
           },
           "makeServerUrl": {
            "!type": "fn()"
           },
           "fragmentReceivedEvent": {
            "!type": "fn()"
           },
           "fragmentReceived": {
            "!type": "fn()"
           },
           "unpackMessage": {
            "!type": "fn()"
           }
          }
         },
         "scriptFrame": {
          "_getWaiters": {
           "!type": "fn()"
          },
          "_fixAttachUrl": {
           "!type": "fn()"
          },
          "_loaded": {
           "!type": "fn()"
          }
         },
         "windowName": {
          "send": {
           "!type": "fn()"
          },
          "_send": {
           "!type": "fn()"
          }
         },
         "xhrPlugins": {
          "register": {
           "!type": "fn()"
          },
          "addProxy": {
           "!type": "fn()"
          },
          "addCrossSiteXhr": {
           "!type": "fn()"
          },
          "fullHttpAdapter": {
           "!type": "fn()"
          }
         }
        },
        "jsonPath": {
         "query": {
          "!type": "fn()"
         }
        },
        "layout": {
         "ContentPane": {
          "setHref": {
           "!type": "fn()"
          },
          "refresh": {
           "!type": "fn()"
          },
          "constructor": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "onExecError": {
           "!type": "fn()"
          },
          "_setContentAttr": {
           "!type": "fn()"
          },
          "cancel": {
           "!type": "fn()"
          },
          "_setUpDeferreds": {
           "!type": "fn()"
          },
          "_onLoadHandler": {
           "!type": "fn()"
          },
          "_onUnloadHandler": {
           "!type": "fn()"
          },
          "_onError": {
           "!type": "fn()"
          },
          "_setContent": {
           "!type": "fn()"
          },
          "DeferredHandle": {
           "cancel": {
            "!type": "fn()"
           },
           "addOnLoad": {
            "!type": "fn()"
           },
           "addOnUnload": {
            "!type": "fn()"
           }
          }
         },
         "DragPane": {
          "postCreate": {
           "!type": "fn()"
          },
          "_down": {
           "!type": "fn()"
          },
          "_up": {
           "!type": "fn()"
          },
          "_move": {
           "!type": "fn()"
          }
         },
         "ExpandoPane": {
          "postCreate": {
           "!type": "fn()"
          },
          "_startupSizes": {
           "!type": "fn()"
          },
          "_afterResize": {
           "!type": "fn()"
          },
          "_setupAnims": {
           "!type": "fn()"
          },
          "toggle": {
           "!type": "fn()"
          },
          "_hideWrapper": {
           "!type": "fn()"
          },
          "_showEnd": {
           "!type": "fn()"
          },
          "_hideEnd": {
           "!type": "fn()"
          },
          "resize": {
           "!type": "fn()"
          },
          "_trap": {
           "!type": "fn()"
          }
         },
         "FloatingPane": {
          "postCreate": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "setTitle": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          },
          "hide": {
           "!type": "fn()"
          },
          "show": {
           "!type": "fn()"
          },
          "minimize": {
           "!type": "fn()"
          },
          "maximize": {
           "!type": "fn()"
          },
          "_restore": {
           "!type": "fn()"
          },
          "_dock": {
           "!type": "fn()"
          },
          "resize": {
           "!type": "fn()"
          },
          "bringToTop": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          }
         },
         "Dock": {
          "addNode": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "_positionDock": {
           "!type": "fn()"
          }
         },
         "_DockNode": {
          "restore": {
           "!type": "fn()"
          }
         },
         "GridContainer": {
          "constructor": {
           "!type": "fn()"
          },
          "postMixInProperties": {
           "!type": "fn()"
          },
          "_createCells": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "init": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "onResized": {
           "!type": "fn()"
          },
          "_organizeServices": {
           "!type": "fn()"
          },
          "_organizeServicesManually": {
           "!type": "fn()"
          },
          "_insertService": {
           "!type": "fn()"
          },
          "addService": {
           "!type": "fn()"
          },
          "_createGrid": {
           "!type": "fn()"
          },
          "_disconnectDnd": {
           "!type": "fn()"
          },
          "_createZone": {
           "!type": "fn()"
          },
          "_createGrip": {
           "!type": "fn()"
          },
          "_initPlaceGrips": {
           "!type": "fn()"
          },
          "_placeGrips": {
           "!type": "fn()"
          },
          "_getZoneByIndex": {
           "!type": "fn()"
          },
          "getIndexZone": {
           "!type": "fn()"
          },
          "resizeColumnOn": {
           "!type": "fn()"
          },
          "resizeColumnMove": {
           "!type": "fn()"
          },
          "resizeColumnOff": {
           "!type": "fn()"
          },
          "setColumns": {
           "!type": "fn()"
          },
          "_addColumn": {
           "!type": "fn()"
          },
          "_deleteColumn": {
           "!type": "fn()"
          },
          "_updateColumnsWidth": {
           "!type": "fn()"
          },
          "_selectFocus": {
           "!type": "fn()"
          },
          "_displayPopup": {
           "!type": "fn()"
          }
         },
         "RadioGroup": {
          "startup": {
           "!type": "fn()"
          },
          "_setupChild": {
           "!type": "fn()"
          },
          "removeChild": {
           "!type": "fn()"
          },
          "_transition": {
           "!type": "fn()"
          },
          "_showChild": {
           "!type": "fn()"
          },
          "_hideChild": {
           "!type": "fn()"
          }
         },
         "RadioGroupFade": {
          "_hideChild": {
           "!type": "fn()"
          },
          "_showChild": {
           "!type": "fn()"
          }
         },
         "RadioGroupSlide": {
          "easing": {
           "!type": "fn()"
          },
          "constructor": {
           "!type": "fn()"
          },
          "_positionChild": {
           "!type": "fn()"
          },
          "_showChild": {
           "!type": "fn()"
          },
          "_hideChild": {
           "!type": "fn()"
          }
         },
         "_RadioButton": {
          "startup": {
           "!type": "fn()"
          },
          "_onMouse": {
           "!type": "fn()"
          },
          "_clearSelected": {
           "!type": "fn()"
          }
         },
         "ResizeHandle": {
          "postCreate": {
           "!type": "fn()"
          },
          "_beginSizing": {
           "!type": "fn()"
          },
          "_updateSizing": {
           "!type": "fn()"
          },
          "_getNewCoords": {
           "!type": "fn()"
          },
          "_checkConstraints": {
           "!type": "fn()"
          },
          "_changeSizing": {
           "!type": "fn()"
          },
          "_endSizing": {
           "!type": "fn()"
          },
          "onResize": {
           "!type": "fn()"
          }
         },
         "_ResizeHelper": {
          "show": {
           "!type": "fn()"
          },
          "hide": {
           "!type": "fn()"
          },
          "resize": {
           "!type": "fn()"
          }
         },
         "RotatorContainer": {
          "postCreate": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "setAttribute": {
           "!type": "fn()"
          },
          "_updatePager": {
           "!type": "fn()"
          },
          "_onMouseOver": {
           "!type": "fn()"
          },
          "_onMouseOut": {
           "!type": "fn()"
          },
          "_resetTimer": {
           "!type": "fn()"
          },
          "_cycle": {
           "!type": "fn()"
          },
          "_manualChange": {
           "!type": "fn()"
          },
          "_play": {
           "!type": "fn()"
          },
          "_pause": {
           "!type": "fn()"
          },
          "_state": {
           "!type": "fn()"
          },
          "_transition": {
           "!type": "fn()"
          },
          "_transitionEnd": {
           "!type": "fn()"
          },
          "_fade": {
           "!type": "fn()"
          },
          "_styleNode": {
           "!type": "fn()"
          }
         },
         "RotatorPager": {
          "postMixInProperties": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "_state": {
           "!type": "fn()"
          },
          "_update": {
           "!type": "fn()"
          }
         },
         "ScrollPane": {
          "resize": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "_set": {
           "!type": "fn()"
          },
          "_calc": {
           "!type": "fn()"
          },
          "_enter": {
           "!type": "fn()"
          },
          "_leave": {
           "!type": "fn()"
          }
         },
         "ToggleSplitter": {
          "postCreate": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "_onMouseUp": {
           "!type": "fn()"
          },
          "_onPrelimMouseMove": {
           "!type": "fn()"
          },
          "_onMouseDown": {
           "!type": "fn()"
          },
          "_handleOnChange": {
           "!type": "fn()"
          },
          "_getStyleProps": {
           "!type": "fn()"
          },
          "_setStateClass": {
           "!type": "fn()"
          },
          "_setOpenAttr": {
           "!type": "fn()"
          },
          "onOpen": {
           "!type": "fn()"
          },
          "onClose": {
           "!type": "fn()"
          },
          "_toggleMe": {
           "!type": "fn()"
          },
          "_onKeyPress": {
           "!type": "fn()"
          }
         },
         "dnd": {
          "Avatar": {
           "construct": {
            "!type": "fn()"
           },
           "destroy": {
            "!type": "fn()"
           },
           "update": {
            "!type": "fn()"
           },
           "_generateText": {
            "!type": "fn()"
           }
          },
          "_setGcDndHandle": {
           "!type": "fn()"
          },
          "PlottedDnd": {
           "constructor": {
            "!type": "fn()"
           },
           "_calculateCoords": {
            "!type": "fn()"
           },
           "_legalMouseDown": {
            "!type": "fn()"
           },
           "setDndItemSelectable": {
            "!type": "fn()"
           },
           "getDraggedWidget": {
            "!type": "fn()"
           },
           "isAccepted": {
            "!type": "fn()"
           },
           "onDndStart": {
            "!type": "fn()"
           },
           "onDndCancel": {
            "!type": "fn()"
           },
           "onDndDrop": {
            "!type": "fn()"
           },
           "onMouseDown": {
            "!type": "fn()"
           },
           "onMouseUp": {
            "!type": "fn()"
           },
           "onMouseMove": {
            "!type": "fn()"
           },
           "_markTargetAnchor": {
            "!type": "fn()"
           },
           "_unmarkTargetAnchor": {
            "!type": "fn()"
           },
           "setIndicatorPosition": {
            "!type": "fn()"
           },
           "onOverEvent": {
            "!type": "fn()"
           },
           "onOutEvent": {
            "!type": "fn()"
           },
           "deleteDashedZone": {
            "!type": "fn()"
           },
           "insertDashedZone": {
            "!type": "fn()"
           },
           "insertNodes": {
            "!type": "fn()"
           },
           "_checkAutoScroll": {
            "!type": "fn()"
           },
           "_autoScrollUp": {
            "!type": "fn()"
           },
           "_autoScrollDown": {
            "!type": "fn()"
           },
           "_stopAutoScroll": {
            "!type": "fn()"
           },
           "_sumAncestorProperties": {
            "!type": "fn()"
           }
          },
          "DropIndicator": {
           "constructor": {
            "!type": "fn()"
           },
           "isInserted": {
            "!type": "fn()"
           },
           "create": {
            "!type": "fn()"
           },
           "destroy": {
            "!type": "fn()"
           }
          }
         },
         "ext-dijit": {
          "layout": {}
         }
        },
        "off": {
         "onLoad": {
          "!type": "fn()"
         },
         "onNetwork": {
          "!type": "fn()"
         },
         "initialize": {
          "!type": "fn()"
         },
         "goOffline": {
          "!type": "fn()"
         },
         "goOnline": {
          "!type": "fn()"
         },
         "onFrameworkEvent": {
          "!type": "fn()"
         },
         "_checkOfflineCacheAvailable": {
          "!type": "fn()"
         },
         "_onLoad": {
          "!type": "fn()"
         },
         "_onOfflineCacheChecked": {
          "!type": "fn()"
         },
         "_keepCheckingUntilInstalled": {
          "!type": "fn()"
         },
         "_finishStartingUp": {
          "!type": "fn()"
         },
         "_onPageLoad": {
          "!type": "fn()"
         },
         "_onStorageLoad": {
          "!type": "fn()"
         },
         "_isSiteAvailable": {
          "!type": "fn()"
         },
         "_startNetworkThread": {
          "!type": "fn()"
         },
         "_getAvailabilityURL": {
          "!type": "fn()"
         },
         "_onOfflineCacheInstalled": {
          "!type": "fn()"
         },
         "_cacheDojoResources": {
          "!type": "fn()"
         },
         "_save": {
          "!type": "fn()"
         },
         "_load": {
          "!type": "fn()"
         },
         "sync": {
          "onSync": {
           "!type": "fn()"
          },
          "synchronize": {
           "!type": "fn()"
          },
          "cancel": {
           "!type": "fn()"
          },
          "finishedDownloading": {
           "!type": "fn()"
          },
          "start": {
           "!type": "fn()"
          },
          "refreshFiles": {
           "!type": "fn()"
          },
          "upload": {
           "!type": "fn()"
          },
          "download": {
           "!type": "fn()"
          },
          "finished": {
           "!type": "fn()"
          },
          "_save": {
           "!type": "fn()"
          },
          "_load": {
           "!type": "fn()"
          },
          "ActionLog": {
           "add": {
            "!type": "fn()"
           },
           "onReplay": {
            "!type": "fn()"
           },
           "length": {
            "!type": "fn()"
           },
           "haltReplay": {
            "!type": "fn()"
           },
           "continueReplay": {
            "!type": "fn()"
           },
           "clear": {
            "!type": "fn()"
           },
           "replay": {
            "!type": "fn()"
           },
           "onReplayFinished": {
            "!type": "fn()"
           },
           "toString": {
            "!type": "fn()"
           },
           "_save": {
            "!type": "fn()"
           },
           "_load": {
            "!type": "fn()"
           }
          }
         },
         "files": {
          "slurp": {
           "!type": "fn()"
          },
          "cache": {
           "!type": "fn()"
          },
          "printURLs": {
           "!type": "fn()"
          },
          "remove": {
           "!type": "fn()"
          },
          "isAvailable": {
           "!type": "fn()"
          },
          "refresh": {
           "!type": "fn()"
          },
          "abortRefresh": {
           "!type": "fn()"
          },
          "_slurp": {
           "!type": "fn()"
          },
          "_sameLocation": {
           "!type": "fn()"
          },
          "_trimAnchor": {
           "!type": "fn()"
          },
          "_doRefresh": {
           "!type": "fn()"
          },
          "_getVersionInfo": {
           "!type": "fn()"
          }
         },
         "ui": {
          "onLoad": {
           "!type": "fn()"
          },
          "_initialize": {
           "!type": "fn()"
          },
          "_doAutoEmbed": {
           "!type": "fn()"
          },
          "_templateLoaded": {
           "!type": "fn()"
          },
          "_testNet": {
           "!type": "fn()"
          },
          "_updateNetIndicator": {
           "!type": "fn()"
          },
          "_initLearnHow": {
           "!type": "fn()"
          },
          "_validateAppName": {
           "!type": "fn()"
          },
          "_updateSyncUI": {
           "!type": "fn()"
          },
          "_setSyncMessage": {
           "!type": "fn()"
          },
          "_clearSyncMessage": {
           "!type": "fn()"
          },
          "_initImages": {
           "!type": "fn()"
          },
          "_showDetails": {
           "!type": "fn()"
          },
          "_cancel": {
           "!type": "fn()"
          },
          "_needsBrowserRestart": {
           "!type": "fn()"
          },
          "_showNeedsOfflineCache": {
           "!type": "fn()"
          },
          "_hideNeedsOfflineCache": {
           "!type": "fn()"
          },
          "_initMainEvtHandlers": {
           "!type": "fn()"
          },
          "_setOfflineEnabled": {
           "!type": "fn()"
          },
          "_syncFinished": {
           "!type": "fn()"
          },
          "_onFrameworkEvent": {
           "!type": "fn()"
          },
          "_onSync": {
           "!type": "fn()"
          },
          "_onNetwork": {
           "!type": "fn()"
          }
         }
        },
        "robot": {},
        "secure": {
         "DOM": {
          "!type": "fn()"
         },
         "unwrap": {
          "!type": "fn()"
         },
         "sandbox": {
          "!type": "fn()"
         },
         "_safeDojoFunctions": {
          "!type": "fn()"
         },
         "capability": {
          "validate": {
           "!type": "fn()"
          }
         }
        },
        "sketch": {
         "Anchor": {
          "!type": "fn()"
         },
         "registerTool": {
          "!type": "fn()"
         },
         "makeToolbar": {
          "!type": "fn()"
         },
         "AnnotationTool": {
          "onMouseDown": {
           "!type": "fn()"
          },
          "onMouseMove": {
           "!type": "fn()"
          },
          "onMouseUp": {
           "!type": "fn()"
          },
          "_create": {
           "!type": "fn()"
          }
         },
         "Annotation": {
          "type": {
           "!type": "fn()"
          },
          "getType": {
           "!type": "fn()"
          },
          "onRemove": {
           "!type": "fn()"
          },
          "property": {
           "!type": "fn()"
          },
          "onPropertyChange": {
           "!type": "fn()"
          },
          "onCreate": {
           "!type": "fn()"
          },
          "onDblClick": {
           "!type": "fn()"
          },
          "initialize": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "draw": {
           "!type": "fn()"
          },
          "apply": {
           "!type": "fn()"
          },
          "serialize": {
           "!type": "fn()"
          },
          "getBBox": {
           "!type": "fn()"
          },
          "beginEdit": {
           "!type": "fn()"
          },
          "endEdit": {
           "!type": "fn()"
          },
          "drawBBox": {
           "!type": "fn()"
          },
          "setBinding": {
           "!type": "fn()"
          },
          "getTextBox": {
           "!type": "fn()"
          },
          "setMode": {
           "!type": "fn()"
          },
          "zoom": {
           "!type": "fn()"
          },
          "writeCommonAttrs": {
           "!type": "fn()"
          },
          "readCommonAttrs": {
           "!type": "fn()"
          },
          "register": {
           "!type": "fn()"
          },
          "calculate": {
           "slope": {
            "!type": "fn()"
           },
           "dx": {
            "!type": "fn()"
           },
           "dy": {
            "!type": "fn()"
           }
          },
          "Modes": {}
         },
         "DoubleArrowAnnotation": {
          "type": {
           "!type": "fn()"
          },
          "getType": {
           "!type": "fn()"
          },
          "_rot": {
           "!type": "fn()"
          },
          "_pos": {
           "!type": "fn()"
          },
          "apply": {
           "!type": "fn()"
          },
          "initialize": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "draw": {
           "!type": "fn()"
          },
          "zoom": {
           "!type": "fn()"
          },
          "getBBox": {
           "!type": "fn()"
          },
          "serialize": {
           "!type": "fn()"
          }
         },
         "Figure": {
          "initUndoStack": {
           "!type": "fn()"
          },
          "setTool": {
           "!type": "fn()"
          },
          "_delete": {
           "!type": "fn()"
          },
          "onDblClickShape": {
           "!type": "fn()"
          },
          "onCreateShape": {
           "!type": "fn()"
          },
          "onBeforeCreateShape": {
           "!type": "fn()"
          },
          "initialize": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "nextKey": {
           "!type": "fn()"
          },
          "draw": {
           "!type": "fn()"
          },
          "zoom": {
           "!type": "fn()"
          },
          "getFit": {
           "!type": "fn()"
          },
          "unzoom": {
           "!type": "fn()"
          },
          "_add": {
           "!type": "fn()"
          },
          "_remove": {
           "!type": "fn()"
          },
          "_get": {
           "!type": "fn()"
          },
          "_keyFromEvt": {
           "!type": "fn()"
          },
          "_fromEvt": {
           "!type": "fn()"
          },
          "add": {
           "!type": "fn()"
          },
          "remove": {
           "!type": "fn()"
          },
          "get": {
           "!type": "fn()"
          },
          "convert": {
           "!type": "fn()"
          },
          "setValue": {
           "!type": "fn()"
          },
          "load": {
           "!type": "fn()"
          },
          "onLoad": {
           "!type": "fn()"
          },
          "onClick": {
           "!type": "fn()"
          },
          "_loadAnnotation": {
           "!type": "fn()"
          },
          "onUndo": {
           "!type": "fn()"
          },
          "onBeforeUndo": {
           "!type": "fn()"
          },
          "onRedo": {
           "!type": "fn()"
          },
          "onBeforeRedo": {
           "!type": "fn()"
          },
          "undo": {
           "!type": "fn()"
          },
          "redo": {
           "!type": "fn()"
          },
          "serialize": {
           "!type": "fn()"
          }
         },
         "LeadAnnotation": {
          "type": {
           "!type": "fn()"
          },
          "getType": {
           "!type": "fn()"
          },
          "_pos": {
           "!type": "fn()"
          },
          "apply": {
           "!type": "fn()"
          },
          "initialize": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "getBBox": {
           "!type": "fn()"
          },
          "draw": {
           "!type": "fn()"
          },
          "serialize": {
           "!type": "fn()"
          }
         },
         "PreexistingAnnotation": {
          "type": {
           "!type": "fn()"
          },
          "getType": {
           "!type": "fn()"
          },
          "_pos": {
           "!type": "fn()"
          },
          "apply": {
           "!type": "fn()"
          },
          "initialize": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "getBBox": {
           "!type": "fn()"
          },
          "draw": {
           "!type": "fn()"
          },
          "zoom": {
           "!type": "fn()"
          },
          "serialize": {
           "!type": "fn()"
          }
         },
         "SingleArrowAnnotation": {
          "type": {
           "!type": "fn()"
          },
          "getType": {
           "!type": "fn()"
          },
          "_rot": {
           "!type": "fn()"
          },
          "_pos": {
           "!type": "fn()"
          },
          "apply": {
           "!type": "fn()"
          },
          "initialize": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "draw": {
           "!type": "fn()"
          },
          "zoom": {
           "!type": "fn()"
          },
          "getBBox": {
           "!type": "fn()"
          },
          "serialize": {
           "!type": "fn()"
          }
         },
         "Slider": {
          "_initButton": {
           "!type": "fn()"
          },
          "_zoomToFit": {
           "!type": "fn()"
          },
          "_setZoom": {
           "!type": "fn()"
          },
          "setToolbar": {
           "!type": "fn()"
          }
         },
         "ButtonGroup": {
          "constructor": {
           "!type": "fn()"
          },
          "add": {
           "!type": "fn()"
          },
          "_resetGroup": {
           "!type": "fn()"
          }
         },
         "Toolbar": {
          "postCreate": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "addGroupItem": {
           "!type": "fn()"
          },
          "reset": {
           "!type": "fn()"
          },
          "_setShape": {
           "!type": "fn()"
          }
         },
         "UnderlineAnnotation": {
          "type": {
           "!type": "fn()"
          },
          "getType": {
           "!type": "fn()"
          },
          "apply": {
           "!type": "fn()"
          },
          "initialize": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "getBBox": {
           "!type": "fn()"
          },
          "draw": {
           "!type": "fn()"
          },
          "zoom": {
           "!type": "fn()"
          },
          "serialize": {
           "!type": "fn()"
          }
         },
         "UndoStack": {
          "constructor": {
           "!type": "fn()"
          },
          "apply": {
           "!type": "fn()"
          },
          "add": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          },
          "undo": {
           "!type": "fn()"
          },
          "redo": {
           "!type": "fn()"
          }
         },
         "CommandTypes": {},
         "_Plugin": {
          "constructor": {
           "!type": "fn()"
          },
          "_initButton": {
           "!type": "fn()"
          },
          "attr": {
           "!type": "fn()"
          },
          "onActivate": {
           "!type": "fn()"
          },
          "activate": {
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
          "destroy": {
           "!type": "fn()"
          },
          "connect": {
           "!type": "fn()"
          },
          "setFigure": {
           "!type": "fn()"
          },
          "setToolbar": {
           "!type": "fn()"
          }
         }
        },
        "sql": {
         "open": {
          "!type": "fn()"
         },
         "close": {
          "!type": "fn()"
         },
         "_exec": {
          "!type": "fn()"
         },
         "_initDb": {
          "!type": "fn()"
         },
         "_printDebugSQL": {
          "!type": "fn()"
         },
         "_normalizeResults": {
          "!type": "fn()"
         },
         "_needsEncrypt": {
          "!type": "fn()"
         },
         "_needsDecrypt": {
          "!type": "fn()"
         },
         "_SQLCrypto": {
          "constructor": {
           "!type": "fn()"
          },
          "_execEncryptSQL": {
           "!type": "fn()"
          },
          "_execDecryptSQL": {
           "!type": "fn()"
          },
          "_encrypt": {
           "!type": "fn()"
          },
          "_decrypt": {
           "!type": "fn()"
          },
          "_stripCryptoSQL": {
           "!type": "fn()"
          },
          "_flagEncryptedArgs": {
           "!type": "fn()"
          },
          "_determineDecryptedColumns": {
           "!type": "fn()"
          },
          "_decryptSingleColumn": {
           "!type": "fn()"
          }
         },
         "_crypto": {
          "encrypt": {
           "!type": "fn()"
          },
          "decrypt": {
           "!type": "fn()"
          },
          "_initWorkerPool": {
           "!type": "fn()"
          },
          "_assignWork": {
           "!type": "fn()"
          },
          "_workerHandler": {
           "!type": "fn()"
          }
         }
        },
        "storage": {
         "manager": {
          "!type": "fn()"
         },
         "AirDBStorageProvider": {
          "initialize": {
           "!type": "fn()"
          },
          "_sql": {
           "!type": "fn()"
          },
          "_beginTransaction": {
           "!type": "fn()"
          },
          "_commitTransaction": {
           "!type": "fn()"
          },
          "isAvailable": {
           "!type": "fn()"
          },
          "put": {
           "!type": "fn()"
          },
          "get": {
           "!type": "fn()"
          },
          "getNamespaces": {
           "!type": "fn()"
          },
          "getKeys": {
           "!type": "fn()"
          },
          "clear": {
           "!type": "fn()"
          },
          "remove": {
           "!type": "fn()"
          },
          "putMultiple": {
           "!type": "fn()"
          },
          "getMultiple": {
           "!type": "fn()"
          },
          "removeMultiple": {
           "!type": "fn()"
          },
          "isPermanent": {
           "!type": "fn()"
          },
          "getMaximumSize": {
           "!type": "fn()"
          },
          "hasSettingsUI": {
           "!type": "fn()"
          },
          "showSettingsUI": {
           "!type": "fn()"
          },
          "hideSettingsUI": {
           "!type": "fn()"
          }
         },
         "AirEncryptedLocalStorageProvider": {
          "initialize": {
           "!type": "fn()"
          },
          "isAvailable": {
           "!type": "fn()"
          },
          "_getItem": {
           "!type": "fn()"
          },
          "_setItem": {
           "!type": "fn()"
          },
          "_removeItem": {
           "!type": "fn()"
          },
          "put": {
           "!type": "fn()"
          },
          "get": {
           "!type": "fn()"
          },
          "getNamespaces": {
           "!type": "fn()"
          },
          "getKeys": {
           "!type": "fn()"
          },
          "clear": {
           "!type": "fn()"
          },
          "remove": {
           "!type": "fn()"
          },
          "putMultiple": {
           "!type": "fn()"
          },
          "getMultiple": {
           "!type": "fn()"
          },
          "removeMultiple": {
           "!type": "fn()"
          },
          "isPermanent": {
           "!type": "fn()"
          },
          "getMaximumSize": {
           "!type": "fn()"
          },
          "hasSettingsUI": {
           "!type": "fn()"
          },
          "showSettingsUI": {
           "!type": "fn()"
          },
          "hideSettingsUI": {
           "!type": "fn()"
          }
         },
         "AirFileStorageProvider": {
          "initialize": {
           "!type": "fn()"
          },
          "isAvailable": {
           "!type": "fn()"
          },
          "put": {
           "!type": "fn()"
          },
          "get": {
           "!type": "fn()"
          },
          "getNamespaces": {
           "!type": "fn()"
          },
          "getKeys": {
           "!type": "fn()"
          },
          "clear": {
           "!type": "fn()"
          },
          "remove": {
           "!type": "fn()"
          },
          "putMultiple": {
           "!type": "fn()"
          },
          "getMultiple": {
           "!type": "fn()"
          },
          "removeMultiple": {
           "!type": "fn()"
          },
          "isPermanent": {
           "!type": "fn()"
          },
          "getMaximumSize": {
           "!type": "fn()"
          },
          "hasSettingsUI": {
           "!type": "fn()"
          },
          "showSettingsUI": {
           "!type": "fn()"
          },
          "hideSettingsUI": {
           "!type": "fn()"
          }
         },
         "FlashStorageProvider": {
          "initialize": {
           "!type": "fn()"
          },
          "setFlushDelay": {
           "!type": "fn()"
          },
          "getFlushDelay": {
           "!type": "fn()"
          },
          "flush": {
           "!type": "fn()"
          },
          "isAvailable": {
           "!type": "fn()"
          },
          "put": {
           "!type": "fn()"
          },
          "putMultiple": {
           "!type": "fn()"
          },
          "get": {
           "!type": "fn()"
          },
          "getMultiple": {
           "!type": "fn()"
          },
          "_destringify": {
           "!type": "fn()"
          },
          "getKeys": {
           "!type": "fn()"
          },
          "getNamespaces": {
           "!type": "fn()"
          },
          "clear": {
           "!type": "fn()"
          },
          "remove": {
           "!type": "fn()"
          },
          "removeMultiple": {
           "!type": "fn()"
          },
          "isPermanent": {
           "!type": "fn()"
          },
          "getMaximumSize": {
           "!type": "fn()"
          },
          "hasSettingsUI": {
           "!type": "fn()"
          },
          "showSettingsUI": {
           "!type": "fn()"
          },
          "hideSettingsUI": {
           "!type": "fn()"
          },
          "getResourceList": {
           "!type": "fn()"
          },
          "_loaded": {
           "!type": "fn()"
          },
          "_onStatus": {
           "!type": "fn()"
          }
         },
         "GearsStorageProvider": {
          "constructor": {
           "!type": "fn()"
          },
          "initialize": {
           "!type": "fn()"
          },
          "isAvailable": {
           "!type": "fn()"
          },
          "put": {
           "!type": "fn()"
          },
          "get": {
           "!type": "fn()"
          },
          "getNamespaces": {
           "!type": "fn()"
          },
          "getKeys": {
           "!type": "fn()"
          },
          "clear": {
           "!type": "fn()"
          },
          "remove": {
           "!type": "fn()"
          },
          "putMultiple": {
           "!type": "fn()"
          },
          "getMultiple": {
           "!type": "fn()"
          },
          "removeMultiple": {
           "!type": "fn()"
          },
          "isPermanent": {
           "!type": "fn()"
          },
          "getMaximumSize": {
           "!type": "fn()"
          },
          "hasSettingsUI": {
           "!type": "fn()"
          },
          "showSettingsUI": {
           "!type": "fn()"
          },
          "hideSettingsUI": {
           "!type": "fn()"
          },
          "_initStorage": {
           "!type": "fn()"
          }
         },
         "Provider": {
          "constructor": {
           "!type": "fn()"
          },
          "onHideSettingsUI": {
           "!type": "fn()"
          },
          "initialize": {
           "!type": "fn()"
          },
          "isAvailable": {
           "!type": "fn()"
          },
          "put": {
           "!type": "fn()"
          },
          "get": {
           "!type": "fn()"
          },
          "hasKey": {
           "!type": "fn()"
          },
          "getKeys": {
           "!type": "fn()"
          },
          "clear": {
           "!type": "fn()"
          },
          "remove": {
           "!type": "fn()"
          },
          "getNamespaces": {
           "!type": "fn()"
          },
          "isPermanent": {
           "!type": "fn()"
          },
          "getMaximumSize": {
           "!type": "fn()"
          },
          "putMultiple": {
           "!type": "fn()"
          },
          "getMultiple": {
           "!type": "fn()"
          },
          "removeMultiple": {
           "!type": "fn()"
          },
          "isValidKeyArray": {
           "!type": "fn()"
          },
          "hasSettingsUI": {
           "!type": "fn()"
          },
          "showSettingsUI": {
           "!type": "fn()"
          },
          "hideSettingsUI": {
           "!type": "fn()"
          },
          "isValidKey": {
           "!type": "fn()"
          },
          "getResourceList": {
           "!type": "fn()"
          }
         },
         "WhatWGStorageProvider": {
          "initialize": {
           "!type": "fn()"
          },
          "isAvailable": {
           "!type": "fn()"
          },
          "put": {
           "!type": "fn()"
          },
          "get": {
           "!type": "fn()"
          },
          "getNamespaces": {
           "!type": "fn()"
          },
          "getKeys": {
           "!type": "fn()"
          },
          "clear": {
           "!type": "fn()"
          },
          "remove": {
           "!type": "fn()"
          },
          "isPermanent": {
           "!type": "fn()"
          },
          "getMaximumSize": {
           "!type": "fn()"
          },
          "hasSettingsUI": {
           "!type": "fn()"
          },
          "showSettingsUI": {
           "!type": "fn()"
          },
          "hideSettingsUI": {
           "!type": "fn()"
          },
          "getFullKey": {
           "!type": "fn()"
          },
          "_getDomain": {
           "!type": "fn()"
          }
         }
        },
        "string": {
         "BidiComplex": {
          "attachInput": {
           "!type": "fn()"
          },
          "createDisplayString": {
           "!type": "fn()"
          },
          "stripSpecialCharacters": {
           "!type": "fn()"
          },
          "_ceKeyDown": {
           "!type": "fn()"
          },
          "_ceKeyUp": {
           "!type": "fn()"
          },
          "_processCopy": {
           "!type": "fn()"
          },
          "_ceCopyText": {
           "!type": "fn()"
          },
          "_ceCutText": {
           "!type": "fn()"
          },
          "_getCaretPos": {
           "!type": "fn()"
          },
          "_setSelectedRange": {
           "!type": "fn()"
          },
          "_parse": {
           "!type": "fn()"
          }
         },
         "Builder": {
          "!type": "fn()"
         },
         "tokenize": {
          "!type": "fn()"
         },
         "sprintf": {
          "Formatter": {
           "_parseDelim": {
            "!type": "fn()"
           },
           "format": {
            "!type": "fn()"
           },
           "formatInt": {
            "!type": "fn()"
           },
           "formatDouble": {
            "!type": "fn()"
           },
           "zeroPad": {
            "!type": "fn()"
           },
           "fitField": {
            "!type": "fn()"
           },
           "spacePad": {
            "!type": "fn()"
           },
           "_specifiers": {
            "b": {},
            "o": {},
            "x": {},
            "X": {},
            "d": {},
            "i": {},
            "u": {},
            "c": {
             "setArg": {
              "!type": "fn()"
             }
            },
            "s": {
             "setMaxWidth": {
              "!type": "fn()"
             }
            },
            "e": {},
            "E": {},
            "f": {},
            "F": {},
            "g": {},
            "G": {}
           }
          }
         }
        },
        "testing": {
         "DocTest": {
          "getTests": {
           "!type": "fn()"
          },
          "getTestsFromString": {
           "!type": "fn()"
          },
          "_getTestsFromString": {
           "!type": "fn()"
          },
          "run": {
           "!type": "fn()"
          },
          "_run": {
           "!type": "fn()"
          },
          "runTest": {
           "!type": "fn()"
          }
         }
        },
        "timing": {
         "Streamer": {
          "!type": "fn()"
         },
         "Thread": {
          "!type": "fn()"
         },
         "Sequence": {
          "constructor": {
           "!type": "fn()"
          },
          "go": {
           "!type": "fn()"
          },
          "_go": {
           "!type": "fn()"
          },
          "goOn": {
           "!type": "fn()"
          },
          "stop": {
           "!type": "fn()"
          }
         },
         "threadStates": {},
         "threadPriorities": {},
         "Timer": {
          "onTick": {
           "!type": "fn()"
          },
          "setInterval": {
           "!type": "fn()"
          },
          "start": {
           "!type": "fn()"
          },
          "stop": {
           "!type": "fn()"
          }
         },
         "doLater": {
          "caller": {}
         }
        },
        "uuid": {
         "assert": {
          "!type": "fn()"
         },
         "generateNilUuid": {
          "!type": "fn()"
         },
         "isValid": {
          "!type": "fn()"
         },
         "getVariant": {
          "!type": "fn()"
         },
         "getVersion": {
          "!type": "fn()"
         },
         "getNode": {
          "!type": "fn()"
         },
         "getTimestamp": {
          "!type": "fn()"
         },
         "generateRandomUuid": {
          "!type": "fn()"
         },
         "Uuid": {
          "compare": {
           "!type": "fn()"
          },
          "setGenerator": {
           "!type": "fn()"
          },
          "getGenerator": {
           "!type": "fn()"
          },
          "toString": {
           "!type": "fn()"
          },
          "isEqual": {
           "!type": "fn()"
          },
          "isValid": {
           "!type": "fn()"
          },
          "getVariant": {
           "!type": "fn()"
          },
          "getVersion": {
           "!type": "fn()"
          },
          "getNode": {
           "!type": "fn()"
          },
          "getTimestamp": {
           "!type": "fn()"
          }
         },
         "version": {},
         "variant": {},
         "generateTimeBasedUuid": {
          "isValidNode": {
           "!type": "fn()"
          },
          "setNode": {
           "!type": "fn()"
          },
          "getNode": {
           "!type": "fn()"
          }
         }
        },
        "validate": {
         "isText": {
          "!type": "fn()"
         },
         "isInRange": {
          "!type": "fn()"
         },
         "isNumberFormat": {
          "!type": "fn()"
         },
         "isValidLuhn": {
          "!type": "fn()"
         },
         "check": {
          "!type": "fn()"
         },
         "evaluateConstraint": {
          "!type": "fn()"
         },
         "isValidCreditCard": {
          "!type": "fn()"
         },
         "isValidCreditCardNumber": {
          "!type": "fn()"
         },
         "isValidCvv": {
          "!type": "fn()"
         },
         "isValidIsbn": {
          "!type": "fn()"
         },
         "isIpAddress": {
          "!type": "fn()"
         },
         "isUrl": {
          "!type": "fn()"
         },
         "isEmailAddress": {
          "!type": "fn()"
         },
         "getEmailAddressList": {
          "!type": "fn()"
         },
         "ca": {
          "isPhoneNumber": {
           "!type": "fn()"
          },
          "isProvince": {
           "!type": "fn()"
          },
          "isSocialInsuranceNumber": {
           "!type": "fn()"
          },
          "isPostalCode": {
           "!type": "fn()"
          }
         },
         "_cardInfo": {},
         "regexp": {
          "ipAddress": {
           "!type": "fn()"
          },
          "host": {
           "!type": "fn()"
          },
          "url": {
           "!type": "fn()"
          },
          "emailAddress": {
           "!type": "fn()"
          },
          "numberFormat": {
           "!type": "fn()"
          },
          "ca": {
           "postalCode": {
            "!type": "fn()"
           },
           "province": {
            "!type": "fn()"
           }
          },
          "us": {
           "state": {
            "!type": "fn()"
           }
          }
         },
         "us": {
          "isState": {
           "!type": "fn()"
          },
          "isPhoneNumber": {
           "!type": "fn()"
          },
          "isSocialSecurityNumber": {
           "!type": "fn()"
          },
          "isZipCode": {
           "!type": "fn()"
          }
         }
        },
        "widget": {
         "gauge": {
          "AnalogLineIndicator": {
           "_getShapes": {
            "!type": "fn()"
           },
           "draw": {
            "!type": "fn()"
           },
           "_move": {
            "!type": "fn()"
           }
          },
          "BarLineIndicator": {
           "_getShapes": {
            "!type": "fn()"
           },
           "draw": {
            "!type": "fn()"
           },
           "_move": {
            "!type": "fn()"
           }
          },
          "AnalogArcIndicator": {
           "_createArc": {
            "!type": "fn()"
           },
           "draw": {
            "!type": "fn()"
           }
          },
          "AnalogArrowIndicator": {
           "_getShapes": {
            "!type": "fn()"
           }
          },
          "AnalogNeedleIndicator": {
           "_getShapes": {
            "!type": "fn()"
           }
          },
          "BarIndicator": {
           "_getShapes": {
            "!type": "fn()"
           },
           "_createShapes": {
            "!type": "fn()"
           },
           "_move": {
            "!type": "fn()"
           }
          },
          "_Gauge": {
           "startup": {
            "!type": "fn()"
           },
           "_setTicks": {
            "!type": "fn()"
           },
           "setMinorTicks": {
            "!type": "fn()"
           },
           "setMajorTicks": {
            "!type": "fn()"
           },
           "postCreate": {
            "!type": "fn()"
           },
           "createSurface": {
            "!type": "fn()"
           },
           "setBackground": {
            "!type": "fn()"
           },
           "addRange": {
            "!type": "fn()"
           },
           "addRanges": {
            "!type": "fn()"
           },
           "addIndicator": {
            "!type": "fn()"
           },
           "removeIndicator": {
            "!type": "fn()"
           },
           "moveIndicatorToFront": {
            "!type": "fn()"
           },
           "drawText": {
            "!type": "fn()"
           },
           "removeText": {
            "!type": "fn()"
           },
           "updateTooltip": {
            "!type": "fn()"
           },
           "handleMouseOver": {
            "!type": "fn()"
           },
           "handleMouseOut": {
            "!type": "fn()"
           },
           "handleMouseDown": {
            "!type": "fn()"
           },
           "handleMouseUp": {
            "!type": "fn()"
           },
           "handleMouseMove": {
            "!type": "fn()"
           },
           "_backgroundDefault": {}
          },
          "Range": {
           "startup": {
            "!type": "fn()"
           }
          },
          "_Indicator": {
           "startup": {
            "!type": "fn()"
           },
           "postCreate": {
            "!type": "fn()"
           },
           "_update": {
            "!type": "fn()"
           },
           "update": {
            "!type": "fn()"
           },
           "onDragMove": {
            "!type": "fn()"
           },
           "draw": {
            "!type": "fn()"
           },
           "remove": {
            "!type": "fn()"
           },
           "font": {}
          }
         },
         "AnalogGauge": {
          "startup": {
           "!type": "fn()"
          },
          "_getAngle": {
           "!type": "fn()"
          },
          "_getValueForAngle": {
           "!type": "fn()"
          },
          "_getRadians": {
           "!type": "fn()"
          },
          "_getDegrees": {
           "!type": "fn()"
          },
          "draw": {
           "!type": "fn()"
          },
          "drawRange": {
           "!type": "fn()"
          },
          "getRangeUnderMouse": {
           "!type": "fn()"
          },
          "_dragIndicator": {
           "!type": "fn()"
          }
         },
         "BarGauge": {
          "startup": {
           "!type": "fn()"
          },
          "_getPosition": {
           "!type": "fn()"
          },
          "_getValueForPosition": {
           "!type": "fn()"
          },
          "draw": {
           "!type": "fn()"
          },
          "drawRange": {
           "!type": "fn()"
          },
          "getRangeUnderMouse": {
           "!type": "fn()"
          },
          "_dragIndicator": {
           "!type": "fn()"
          }
         },
         "_CalendarBase": {
          "constructor": {
           "!type": "fn()"
          },
          "postMixInProperties": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "addFx": {
           "!type": "fn()"
          },
          "_setValueAttr": {
           "!type": "fn()"
          },
          "isDisabledDate": {
           "!type": "fn()"
          },
          "onValueSelected": {
           "!type": "fn()"
          },
          "_onDateSelected": {
           "!type": "fn()"
          },
          "onChange": {
           "!type": "fn()"
          },
          "onHeaderClick": {
           "!type": "fn()"
          },
          "goToToday": {
           "!type": "fn()"
          },
          "_transitionVert": {
           "!type": "fn()"
          },
          "_updateTitleStyle": {
           "!type": "fn()"
          },
          "_slideTable": {
           "!type": "fn()"
          },
          "_addView": {
           "!type": "fn()"
          },
          "getClassForDate": {
           "!type": "fn()"
          },
          "_adjustDisplay": {
           "!type": "fn()"
          }
         },
         "_CalendarView": {
          "cloneClass": {
           "!type": "fn()"
          },
          "_setText": {
           "!type": "fn()"
          },
          "getHeader": {
           "!type": "fn()"
          },
          "onValueSelected": {
           "!type": "fn()"
          },
          "adjustDate": {
           "!type": "fn()"
          },
          "onDisplay": {
           "!type": "fn()"
          },
          "onBeforeDisplay": {
           "!type": "fn()"
          },
          "onBeforeUnDisplay": {
           "!type": "fn()"
          }
         },
         "_CalendarDay": {
          "constructor": {
           "!type": "fn()"
          }
         },
         "_CalendarDayView": {
          "postCreate": {
           "!type": "fn()"
          },
          "onDisplay": {
           "!type": "fn()"
          },
          "_onDayClick": {
           "!type": "fn()"
          },
          "_setValueAttr": {
           "!type": "fn()"
          },
          "_populateDays": {
           "!type": "fn()"
          }
         },
         "_CalendarMonthYear": {
          "constructor": {
           "!type": "fn()"
          }
         },
         "_CalendarMonthYearView": {
          "postCreate": {
           "!type": "fn()"
          },
          "_setValueAttr": {
           "!type": "fn()"
          },
          "getHeader": {
           "!type": "fn()"
          },
          "_getMonthNames": {
           "!type": "fn()"
          },
          "_populateMonths": {
           "!type": "fn()"
          },
          "_populateYears": {
           "!type": "fn()"
          },
          "_updateSelectedYear": {
           "!type": "fn()"
          },
          "_updateSelectedMonth": {
           "!type": "fn()"
          },
          "_updateSelectedNode": {
           "!type": "fn()"
          },
          "onClick": {
           "!type": "fn()"
          },
          "onOk": {
           "!type": "fn()"
          },
          "onCancel": {
           "!type": "fn()"
          }
         },
         "Calendar2Pane": {},
         "Calendar": {},
         "DailyCalendar": {},
         "MonthAndYearlyCalendar": {},
         "_FisheyeFX": {
          "addFx": {
           "!type": "fn()"
          }
         },
         "CalendarFisheye": {},
         "_CalendarMonth": {
          "constructor": {
           "!type": "fn()"
          }
         },
         "_CalendarMonthView": {
          "postCreate": {
           "!type": "fn()"
          },
          "_setValueAttr": {
           "!type": "fn()"
          },
          "onClick": {
           "!type": "fn()"
          }
         },
         "_CalendarYear": {
          "constructor": {
           "!type": "fn()"
          }
         },
         "_CalendarYearView": {
          "postCreate": {
           "!type": "fn()"
          },
          "_setValueAttr": {
           "!type": "fn()"
          },
          "adjustDate": {
           "!type": "fn()"
          },
          "onClick": {
           "!type": "fn()"
          }
         },
         "Calendar3Pane": {},
         "MonthlyCalendar": {},
         "YearlyCalendar": {},
         "ColorPicker": {
          "postCreate": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "_setValueAttr": {
           "!type": "fn()"
          },
          "setColor": {
           "!type": "fn()"
          },
          "_setTimer": {
           "!type": "fn()"
          },
          "_clearTimer": {
           "!type": "fn()"
          },
          "_setHue": {
           "!type": "fn()"
          },
          "_updateColor": {
           "!type": "fn()"
          },
          "_colorInputChange": {
           "!type": "fn()"
          },
          "_updateValue": {
           "!type": "fn()"
          },
          "_updatePickerLocations": {
           "!type": "fn()"
          },
          "_updateColorInputs": {
           "!type": "fn()"
          },
          "_setHuePoint": {
           "!type": "fn()"
          },
          "_setPoint": {
           "!type": "fn()"
          },
          "_handleKey": {
           "!type": "fn()"
          }
         },
         "Dialog": {
          "constructor": {
           "!type": "fn()"
          },
          "_setup": {
           "!type": "fn()"
          },
          "layout": {
           "!type": "fn()"
          },
          "_setSize": {
           "!type": "fn()"
          },
          "show": {
           "!type": "fn()"
          },
          "_handleNav": {
           "!type": "fn()"
          },
          "_position": {
           "!type": "fn()"
          },
          "_showContent": {
           "!type": "fn()"
          }
         },
         "DocTester": {
          "_fillContent": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "runTests": {
           "!type": "fn()"
          },
          "reset": {
           "!type": "fn()"
          },
          "_unescapeHtml": {
           "!type": "fn()"
          }
         },
         "_FileInfoPane": {
          "postMixInProperties": {
           "!type": "fn()"
          },
          "onItems": {
           "!type": "fn()"
          }
         },
         "FilePicker": {
          "_itemsMatch": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "getChildItems": {
           "!type": "fn()"
          },
          "getMenuItemForItem": {
           "!type": "fn()"
          },
          "getPaneForItem": {
           "!type": "fn()"
          },
          "_setPathValueAttr": {
           "!type": "fn()"
          },
          "_getPathValueAttr": {
           "!type": "fn()"
          },
          "_setValue": {
           "!type": "fn()"
          }
         },
         "FisheyeList": {
          "constructor": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "_initializePositioning": {
           "!type": "fn()"
          },
          "_overElement": {
           "!type": "fn()"
          },
          "_onBodyOut": {
           "!type": "fn()"
          },
          "_setDormant": {
           "!type": "fn()"
          },
          "_setActive": {
           "!type": "fn()"
          },
          "_onMouseMove": {
           "!type": "fn()"
          },
          "_onScroll": {
           "!type": "fn()"
          },
          "onResized": {
           "!type": "fn()"
          },
          "_onGridMouseMove": {
           "!type": "fn()"
          },
          "_paint": {
           "!type": "fn()"
          },
          "_weighAt": {
           "!type": "fn()"
          },
          "_setItemSize": {
           "!type": "fn()"
          },
          "_positionElementsFrom": {
           "!type": "fn()"
          },
          "_positionLabel": {
           "!type": "fn()"
          },
          "_calcHitGrid": {
           "!type": "fn()"
          },
          "_toEdge": {
           "!type": "fn()"
          },
          "_expandSlowly": {
           "!type": "fn()"
          },
          "destroyRecursive": {
           "!type": "fn()"
          },
          "EDGE": {}
         },
         "FisheyeListItem": {
          "_isNode": {
           "!type": "fn()"
          },
          "_hasParent": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "onMouseOver": {
           "!type": "fn()"
          },
          "onMouseOut": {
           "!type": "fn()"
          },
          "onClick": {
           "!type": "fn()"
          }
         },
         "FisheyeLite": {
          "easeIn": {
           "!type": "fn()"
          },
          "easeOut": {
           "!type": "fn()"
          },
          "constructor": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "show": {
           "!type": "fn()"
          },
          "hide": {
           "!type": "fn()"
          },
          "_makeAnims": {
           "!type": "fn()"
          },
          "onClick": {
           "!type": "fn()"
          },
          "onSelected": {
           "!type": "fn()"
          }
         },
         "Iterator": {
          "_setSrcIndex": {
           "!type": "fn()"
          },
          "postscript": {
           "!type": "fn()"
          },
          "clear": {
           "!type": "fn()"
          },
          "update": {
           "!type": "fn()"
          },
          "_addItem": {
           "!type": "fn()"
          },
          "getAttrValuesObj": {
           "!type": "fn()"
          },
          "onDataAvailable": {
           "!type": "fn()"
          },
          "fetch": {
           "!type": "fn()"
          },
          "query": {}
         },
         "Loader": {
          "postCreate": {
           "!type": "fn()"
          },
          "_setMessage": {
           "!type": "fn()"
          },
          "_putLoader": {
           "!type": "fn()"
          },
          "_show": {
           "!type": "fn()"
          },
          "_hide": {
           "!type": "fn()"
          }
         },
         "Pager": {
          "postMixInProperties": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "_a11yStyle": {
           "!type": "fn()"
          },
          "_handleKey": {
           "!type": "fn()"
          },
          "_init": {
           "!type": "fn()"
          },
          "_renderPages": {
           "!type": "fn()"
          },
          "_renderPager": {
           "!type": "fn()"
          },
          "_renderStatus": {
           "!type": "fn()"
          },
          "_pagerSkip": {
           "!type": "fn()"
          },
          "_pagerNext": {
           "!type": "fn()"
          },
          "_pagerPrevious": {
           "!type": "fn()"
          },
          "onScrollEnd": {
           "!type": "fn()"
          }
         },
         "_PagerItem": {
          "resizeChildren": {
           "!type": "fn()"
          },
          "parseChildren": {
           "!type": "fn()"
          }
         },
         "PlaceholderMenuItem": {
          "postCreate": {
           "!type": "fn()"
          },
          "replace": {
           "!type": "fn()"
          },
          "unReplace": {
           "!type": "fn()"
          }
         },
         "Roller": {
          "postCreate": {
           "!type": "fn()"
          },
          "makeAnims": {
           "!type": "fn()"
          },
          "_setupConnects": {
           "!type": "fn()"
          },
          "start": {
           "!type": "fn()"
          },
          "_run": {
           "!type": "fn()"
          },
          "stop": {
           "!type": "fn()"
          },
          "_set": {
           "!type": "fn()"
          }
         },
         "RollerSlide": {
          "makeAnims": {
           "!type": "fn()"
          }
         },
         "_RollerHover": {
          "postCreate": {
           "!type": "fn()"
          }
         },
         "_RollingListPane": {
          "_setContentAndScroll": {
           "!type": "fn()"
          },
          "_updateNodeWidth": {
           "!type": "fn()"
          },
          "_onMinWidthChange": {
           "!type": "fn()"
          },
          "_setMinWidthAttr": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "_focusKey": {
           "!type": "fn()"
          },
          "focus": {
           "!type": "fn()"
          },
          "_loadCheck": {
           "!type": "fn()"
          },
          "_loadQuery": {
           "!type": "fn()"
          },
          "_doLoadItems": {
           "!type": "fn()"
          },
          "_doQuery": {
           "!type": "fn()"
          },
          "_hasItem": {
           "!type": "fn()"
          },
          "_onSetItem": {
           "!type": "fn()"
          },
          "_onNewItem": {
           "!type": "fn()"
          },
          "_onDeleteItem": {
           "!type": "fn()"
          },
          "onFetchStart": {
           "!type": "fn()"
          },
          "onFetchError": {
           "!type": "fn()"
          },
          "onLoadStart": {
           "!type": "fn()"
          },
          "onLoadError": {
           "!type": "fn()"
          },
          "onItems": {
           "!type": "fn()"
          }
         },
         "_RollingListGroupPane": {
          "_loadCheck": {
           "!type": "fn()"
          },
          "_setContent": {
           "!type": "fn()"
          },
          "_onMinWidthChange": {
           "!type": "fn()"
          },
          "onItems": {
           "!type": "fn()"
          },
          "_checkScrollConnection": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "focus": {
           "!type": "fn()"
          },
          "_getMenu": {
           "!type": "fn()"
          },
          "_onScrollPane": {
           "!type": "fn()"
          },
          "_layoutHack": {
           "!type": "fn()"
          },
          "_loadVisibleItems": {
           "!type": "fn()"
          },
          "_getSelected": {
           "!type": "fn()"
          },
          "_setSelected": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          }
         },
         "RollingList": {
          "postMixInProperties": {
           "!type": "fn()"
          },
          "_setShowButtonsAttr": {
           "!type": "fn()"
          },
          "_itemsMatch": {
           "!type": "fn()"
          },
          "_removeAfter": {
           "!type": "fn()"
          },
          "addChild": {
           "!type": "fn()"
          },
          "_setMinPaneWidthAttr": {
           "!type": "fn()"
          },
          "_updateClass": {
           "!type": "fn()"
          },
          "scrollIntoView": {
           "!type": "fn()"
          },
          "resize": {
           "!type": "fn()"
          },
          "layout": {
           "!type": "fn()"
          },
          "_onChange": {
           "!type": "fn()"
          },
          "_setValue": {
           "!type": "fn()"
          },
          "_setValueAttr": {
           "!type": "fn()"
          },
          "_onItemClick": {
           "!type": "fn()"
          },
          "_getPaneForItem": {
           "!type": "fn()"
          },
          "_getMenuItemForItem": {
           "!type": "fn()"
          },
          "_setStore": {
           "!type": "fn()"
          },
          "_onKey": {
           "!type": "fn()"
          },
          "_resetValue": {
           "!type": "fn()"
          },
          "_onCancel": {
           "!type": "fn()"
          },
          "_onExecute": {
           "!type": "fn()"
          },
          "focus": {
           "!type": "fn()"
          },
          "handleKey": {
           "!type": "fn()"
          },
          "_updateChildClasses": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "getChildItems": {
           "!type": "fn()"
          },
          "getMenuItemForItem": {
           "!type": "fn()"
          },
          "getPaneForItem": {
           "!type": "fn()"
          },
          "onItemClick": {
           "!type": "fn()"
          },
          "onExecute": {
           "!type": "fn()"
          },
          "onCancel": {
           "!type": "fn()"
          },
          "onChange": {
           "!type": "fn()"
          }
         },
         "SortList": {
          "_addItem": {
           "!type": "fn()"
          },
          "postCreate": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "resize": {
           "!type": "fn()"
          },
          "onSort": {
           "!type": "fn()"
          },
          "_set": {
           "!type": "fn()"
          },
          "_unset": {
           "!type": "fn()"
          },
          "_handleClick": {
           "!type": "fn()"
          },
          "_updateValues": {
           "!type": "fn()"
          },
          "_sorter": {
           "!type": "fn()"
          },
          "setTitle": {
           "!type": "fn()"
          },
          "onChanged": {
           "!type": "fn()"
          }
         },
         "Standby": {
          "startup": {
           "!type": "fn()"
          },
          "show": {
           "!type": "fn()"
          },
          "hide": {
           "!type": "fn()"
          },
          "_size": {
           "!type": "fn()"
          },
          "_fadeIn": {
           "!type": "fn()"
          },
          "_fadeOut": {
           "!type": "fn()"
          },
          "_ignore": {
           "!type": "fn()"
          },
          "uninitialize": {
           "!type": "fn()"
          }
         },
         "Toaster": {
          "postCreate": {
           "!type": "fn()"
          },
          "_handleMessage": {
           "!type": "fn()"
          },
          "_capitalize": {
           "!type": "fn()"
          },
          "setContent": {
           "!type": "fn()"
          },
          "_setContent": {
           "!type": "fn()"
          },
          "_cancelHideTimer": {
           "!type": "fn()"
          },
          "_setHideTimer": {
           "!type": "fn()"
          },
          "_placeClip": {
           "!type": "fn()"
          },
          "onSelect": {
           "!type": "fn()"
          },
          "show": {
           "!type": "fn()"
          },
          "hide": {
           "!type": "fn()"
          },
          "messageTypes": {}
         },
         "Wizard": {
          "postMixInProperties": {
           "!type": "fn()"
          },
          "startup": {
           "!type": "fn()"
          },
          "_checkButtons": {
           "!type": "fn()"
          },
          "_setButtonClass": {
           "!type": "fn()"
          },
          "_forward": {
           "!type": "fn()"
          },
          "done": {
           "!type": "fn()"
          },
          "destroy": {
           "!type": "fn()"
          }
         },
         "WizardPane": {
          "startup": {
           "!type": "fn()"
          },
          "_onShow": {
           "!type": "fn()"
          },
          "_checkPass": {
           "!type": "fn()"
          },
          "done": {
           "!type": "fn()"
          }
         }
        },
        "wire": {
         "register": {
          "!type": "fn()"
         },
         "_getClass": {
          "!type": "fn()"
         },
         "create": {
          "!type": "fn()"
         },
         "isWire": {
          "!type": "fn()"
         },
         "transfer": {
          "!type": "fn()"
         },
         "connect": {
          "!type": "fn()"
         },
         "disconnect": {
          "!type": "fn()"
         },
         "CompositeWire": {
          "constructor": {
           "!type": "fn()"
          },
          "_getValue": {
           "!type": "fn()"
          },
          "_setValue": {
           "!type": "fn()"
          },
          "_initializeChildren": {
           "!type": "fn()"
          }
         },
         "DataWire": {
          "constructor": {
           "!type": "fn()"
          },
          "_getValue": {
           "!type": "fn()"
          },
          "_setValue": {
           "!type": "fn()"
          },
          "_getAttributeValue": {
           "!type": "fn()"
          },
          "_setAttributeValue": {
           "!type": "fn()"
          }
         },
         "TableAdapter": {
          "constructor": {
           "!type": "fn()"
          },
          "_getValue": {
           "!type": "fn()"
          },
          "_setValue": {
           "!type": "fn()"
          },
          "_getRow": {
           "!type": "fn()"
          }
         },
         "TextAdapter": {
          "constructor": {
           "!type": "fn()"
          },
          "_getValue": {
           "!type": "fn()"
          },
          "_setValue": {
           "!type": "fn()"
          },
          "_addSegment": {
           "!type": "fn()"
          }
         },
         "TreeAdapter": {
          "constructor": {
           "!type": "fn()"
          },
          "_getValue": {
           "!type": "fn()"
          },
          "_setValue": {
           "!type": "fn()"
          },
          "_initializeChildren": {
           "!type": "fn()"
          },
          "_getNodes": {
           "!type": "fn()"
          }
         },
         "Wire": {
          "constructor": {
           "!type": "fn()"
          },
          "getValue": {
           "!type": "fn()"
          },
          "setValue": {
           "!type": "fn()"
          },
          "_getPropertyValue": {
           "!type": "fn()"
          },
          "_setPropertyValue": {
           "!type": "fn()"
          },
          "_useAttr": {
           "!type": "fn()"
          }
         },
         "XmlWire": {
          "constructor": {
           "!type": "fn()"
          },
          "_getValue": {
           "!type": "fn()"
          },
          "_setValue": {
           "!type": "fn()"
          },
          "_getNodeValue": {
           "!type": "fn()"
          },
          "_setNodeValue": {
           "!type": "fn()"
          },
          "_getChildNode": {
           "!type": "fn()"
          },
          "_getDocument": {
           "!type": "fn()"
          }
         },
         "_wireClasses": {},
         "ml": {
          "_getValue": {
           "!type": "fn()"
          },
          "_setValue": {
           "!type": "fn()"
          },
          "Action": {
           "postCreate": {
            "!type": "fn()"
           },
           "_connect": {
            "!type": "fn()"
           },
           "_disconnect": {
            "!type": "fn()"
           },
           "run": {
            "!type": "fn()"
           },
           "_run": {
            "!type": "fn()"
           },
           "uninitialize": {
            "!type": "fn()"
           }
          },
          "ActionFilter": {
           "filter": {
            "!type": "fn()"
           }
          },
          "Data": {
           "startup": {
            "!type": "fn()"
           },
           "_initializeProperties": {
            "!type": "fn()"
           },
           "getPropertyValue": {
            "!type": "fn()"
           },
           "setPropertyValue": {
            "!type": "fn()"
           }
          },
          "DataProperty": {
           "_getValueAttr": {
            "!type": "fn()"
           },
           "getValue": {
            "!type": "fn()"
           }
          },
          "DataStore": {
           "postCreate": {
            "!type": "fn()"
           },
           "_createStore": {
            "!type": "fn()"
           },
           "getFeatures": {
            "!type": "fn()"
           },
           "fetch": {
            "!type": "fn()"
           },
           "save": {
            "!type": "fn()"
           },
           "newItem": {
            "!type": "fn()"
           },
           "deleteItem": {
            "!type": "fn()"
           },
           "revert": {
            "!type": "fn()"
           }
          },
          "Invocation": {
           "_run": {
            "!type": "fn()"
           },
           "onComplete": {
            "!type": "fn()"
           },
           "onError": {
            "!type": "fn()"
           },
           "_getParameters": {
            "!type": "fn()"
           }
          },
          "Service": {
           "postCreate": {
            "!type": "fn()"
           },
           "_createHandler": {
            "!type": "fn()"
           },
           "callMethod": {
            "!type": "fn()"
           },
           "_handlerClasses": {}
          },
          "RestHandler": {
           "bind": {
            "!type": "fn()"
           },
           "_getUrl": {
            "!type": "fn()"
           },
           "_getContent": {
            "!type": "fn()"
           },
           "_getResult": {
            "!type": "fn()"
           }
          },
          "XmlHandler": {
           "_getContent": {
            "!type": "fn()"
           },
           "_getResult": {
            "!type": "fn()"
           }
          },
          "JsonHandler": {
           "_getContent": {
            "!type": "fn()"
           },
           "headers": {}
          },
          "Transfer": {
           "_run": {
            "!type": "fn()"
           },
           "_getWire": {
            "!type": "fn()"
           }
          },
          "ChildWire": {
           "_addWire": {
            "!type": "fn()"
           },
           "_getWire": {
            "!type": "fn()"
           }
          },
          "ColumnWire": {
           "_addWire": {
            "!type": "fn()"
           }
          },
          "NodeWire": {
           "_addWire": {
            "!type": "fn()"
           },
           "_getWires": {
            "!type": "fn()"
           }
          },
          "SegmentWire": {
           "_addWire": {
            "!type": "fn()"
           }
          },
          "XmlElement": {
           "constructor": {
            "!type": "fn()"
           },
           "getPropertyValue": {
            "!type": "fn()"
           },
           "setPropertyValue": {
            "!type": "fn()"
           },
           "toString": {
            "!type": "fn()"
           },
           "toObject": {
            "!type": "fn()"
           },
           "_getDocument": {
            "!type": "fn()"
           }
          }
         }
        },
        "xml": {
         "Script": {
          "constructor": {
           "!type": "fn()"
          }
         },
         "parser": {
          "parse": {
           "!type": "fn()"
          },
          "textContent": {
           "!type": "fn()"
          },
          "replaceChildren": {
           "!type": "fn()"
          },
          "removeChildren": {
           "!type": "fn()"
          },
          "innerXML": {
           "!type": "fn()"
          }
         }
        },
        "xmpp": {
         "ChatService": {
          "constructor": {
           "!type": "fn()"
          },
          "recieveMessage": {
           "!type": "fn()"
          },
          "setSession": {
           "!type": "fn()"
          },
          "setState": {
           "!type": "fn()"
          },
          "invite": {
           "!type": "fn()"
          },
          "sendMessage": {
           "!type": "fn()"
          },
          "sendChatState": {
           "!type": "fn()"
          },
          "onNewMessage": {
           "!type": "fn()"
          },
          "onInvite": {
           "!type": "fn()"
          }
         },
         "chat": {},
         "PresenceService": {
          "constructor": {
           "!type": "fn()"
          },
          "publish": {
           "!type": "fn()"
          },
          "sendAvatarHash": {
           "!type": "fn()"
          },
          "_setPresence": {
           "!type": "fn()"
          },
          "toggleBlockContact": {
           "!type": "fn()"
          },
          "toggleContactInvisiblity": {
           "!type": "fn()"
          },
          "_createRestrictedJid": {
           "!type": "fn()"
          },
          "_updateRestricted": {
           "!type": "fn()"
          },
          "_setVisible": {
           "!type": "fn()"
          },
          "_setInvisible": {
           "!type": "fn()"
          },
          "_manageSubscriptions": {
           "!type": "fn()"
          },
          "subscribe": {
           "!type": "fn()"
          },
          "approveSubscription": {
           "!type": "fn()"
          },
          "unsubscribe": {
           "!type": "fn()"
          },
          "declineSubscription": {
           "!type": "fn()"
          },
          "cancelSubscription": {
           "!type": "fn()"
          }
         },
         "presence": {},
         "RosterService": {
          "constructor": {
           "!type": "fn()"
          },
          "addRosterItem": {
           "!type": "fn()"
          },
          "updateRosterItem": {
           "!type": "fn()"
          },
          "verifyRoster": {
           "!type": "fn()"
          },
          "addRosterItemToGroup": {
           "!type": "fn()"
          },
          "removeRosterGroup": {
           "!type": "fn()"
          },
          "renameRosterGroup": {
           "!type": "fn()"
          },
          "removeRosterItemFromGroup": {
           "!type": "fn()"
          },
          "rosterItemRenameGroup": {
           "!type": "fn()"
          },
          "renameRosterItem": {
           "!type": "fn()"
          },
          "removeRosterItem": {
           "!type": "fn()"
          },
          "getAvatar": {
           "!type": "fn()"
          },
          "publishAvatar": {
           "!type": "fn()"
          },
          "onVerifyRoster": {
           "!type": "fn()"
          },
          "onVerifyRosterFailed": {
           "!type": "fn()"
          }
         },
         "roster": {},
         "TransportSession": {
          "open": {
           "!type": "fn()"
          },
          "_sendLogin": {
           "!type": "fn()"
          },
          "processScriptSrc": {
           "!type": "fn()"
          },
          "_keepAlive": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          },
          "dispatchPacket": {
           "!type": "fn()"
          },
          "_dispatchPacket": {
           "!type": "fn()"
          },
          "redispatchPacket": {
           "!type": "fn()"
          },
          "addToOutboundQueue": {
           "!type": "fn()"
          },
          "removeFromOutboundQueue": {
           "!type": "fn()"
          },
          "processProtocolPacketQueue": {
           "!type": "fn()"
          },
          "findOpenIframe": {
           "!type": "fn()"
          },
          "sendXml": {
           "!type": "fn()"
          },
          "processDocument": {
           "!type": "fn()"
          },
          "processInboundQueue": {
           "!type": "fn()"
          },
          "addToInboundQueue": {
           "!type": "fn()"
          },
          "processResponse": {
           "!type": "fn()"
          },
          "processProtocolResponse": {
           "!type": "fn()"
          },
          "setState": {
           "!type": "fn()"
          },
          "isTerminated": {
           "!type": "fn()"
          },
          "processError": {
           "!type": "fn()"
          },
          "onTerminate": {
           "!type": "fn()"
          },
          "onProcessProtocolResponse": {
           "!type": "fn()"
          },
          "onReady": {
           "!type": "fn()"
          },
          "_iframeOnload": {
           "!type": "fn()"
          },
          "handleBOSH": {
           "!type": "fn()"
          }
         },
         "UserService": {
          "constructor": {
           "!type": "fn()"
          },
          "getPersonalProfile": {
           "!type": "fn()"
          },
          "setPersonalProfile": {
           "!type": "fn()"
          },
          "_onSetPersonalProfile": {
           "!type": "fn()"
          },
          "onSetPersonalProfile": {
           "!type": "fn()"
          },
          "onSetPersonalProfileFailure": {
           "!type": "fn()"
          },
          "_onGetPersonalProfile": {
           "!type": "fn()"
          },
          "onGetPersonalProfile": {
           "!type": "fn()"
          },
          "onGetPersonalProfileFailure": {
           "!type": "fn()"
          }
         },
         "sasl": {
          "SunWebClientAuth": {
           "!type": "fn()"
          },
          "SaslPlain": {
           "!type": "fn()"
          }
         },
         "util": {
          "xmlEncode": {
           "!type": "fn()"
          },
          "encodeJid": {
           "!type": "fn()"
          },
          "decodeJid": {
           "!type": "fn()"
          },
          "createElement": {
           "!type": "fn()"
          },
          "stripHtml": {
           "!type": "fn()"
          },
          "decodeHtmlEntities": {
           "!type": "fn()"
          },
          "htmlToPlain": {
           "!type": "fn()"
          },
          "Base64": {
           "encode": {
            "!type": "fn()"
           },
           "decode": {
            "!type": "fn()"
           }
          }
         },
         "widget": {
          "ChatSession": {
           "postCreate": {
            "!type": "fn()"
           },
           "displayMessage": {
            "!type": "fn()"
           },
           "goToLastMessage": {
            "!type": "fn()"
           },
           "onKeyPress": {
            "!type": "fn()"
           }
          }
         },
         "xmppSession": {
          "open": {
           "!type": "fn()"
          },
          "close": {
           "!type": "fn()"
          },
          "processProtocolResponse": {
           "!type": "fn()"
          },
          "messageHandler": {
           "!type": "fn()"
          },
          "iqHandler": {
           "!type": "fn()"
          },
          "presenceHandler": {
           "!type": "fn()"
          },
          "featuresHandler": {
           "!type": "fn()"
          },
          "saslHandler": {
           "!type": "fn()"
          },
          "chatHandler": {
           "!type": "fn()"
          },
          "simpleMessageHandler": {
           "!type": "fn()"
          },
          "registerChatInstance": {
           "!type": "fn()"
          },
          "iqSetHandler": {
           "!type": "fn()"
          },
          "sendIqResult": {
           "!type": "fn()"
          },
          "rosterSetHandler": {
           "!type": "fn()"
          },
          "presenceUpdate": {
           "!type": "fn()"
          },
          "retrieveRoster": {
           "!type": "fn()"
          },
          "getRosterIndex": {
           "!type": "fn()"
          },
          "createRosterEntry": {
           "!type": "fn()"
          },
          "bindResource": {
           "!type": "fn()"
          },
          "getNextIqId": {
           "!type": "fn()"
          },
          "presenceSubscriptionRequest": {
           "!type": "fn()"
          },
          "dispatchPacket": {
           "!type": "fn()"
          },
          "setState": {
           "!type": "fn()"
          },
          "search": {
           "!type": "fn()"
          },
          "_onSearchResults": {
           "!type": "fn()"
          },
          "onLogin": {
           "!type": "fn()"
          },
          "onLoginFailure": {
           "!type": "fn()"
          },
          "onBindResource": {
           "!type": "fn()"
          },
          "onSearchResults": {
           "!type": "fn()"
          },
          "onRetrieveRoster": {
           "!type": "fn()"
          },
          "onRosterUpdated": {
           "!type": "fn()"
          },
          "onSubscriptionRequest": {
           "!type": "fn()"
          },
          "onPresenceUpdate": {
           "!type": "fn()"
          },
          "onTransportReady": {
           "!type": "fn()"
          },
          "onTransportTerminate": {
           "!type": "fn()"
          },
          "onConnected": {
           "!type": "fn()"
          },
          "onTerminate": {
           "!type": "fn()"
          },
          "onActive": {
           "!type": "fn()"
          },
          "onRegisterChatInstance": {
           "!type": "fn()"
          },
          "onRosterAdded": {
           "!type": "fn()"
          },
          "onRosterRemoved": {
           "!type": "fn()"
          },
          "onRosterChanged": {
           "!type": "fn()"
          },
          "processXmppError": {
           "!type": "fn()"
          },
          "sendStanzaError": {
           "!type": "fn()"
          },
          "getBareJid": {
           "!type": "fn()"
          },
          "getResourceFromJid": {
           "!type": "fn()"
          }
         },
         "xmpp": {
          "error": {}
         }
        }
       },
       "navigator": {
        "plugins": {}
       },
       "l": {
        "style": {}
       },
       "r": {
        "style": {}
       },
       "b": {
        "style": {}
       },
       "bl": {
        "style": {}
       },
       "br": {
        "style": {}
       },
       "tr": {
        "style": {}
       },
       "node": {
        "style": {}
       },
       "dfd": {
        "ioArgs": {
         "frame": {
          "contentWindow": {}
         }
        }
       },
       "frame": {
        "style": {},
        "contentWindow": {}
       }
      },
      "dijit": {
       "_underlay": {
        "!type": "fn()"
       },
       "showTooltip": {
        "!type": "fn()"
       },
       "hideTooltip": {
        "!type": "fn()"
       },
       "_connectOnUseEventHandler": {
        "!type": "fn()"
       },
       "isCollapsed": {
        "!type": "fn()"
       },
       "getBookmark": {
        "!type": "fn()"
       },
       "moveToBookmark": {
        "!type": "fn()"
       },
       "getFocus": {
        "!type": "fn()"
       },
       "focus": {
        "!type": "fn()"
       },
       "registerIframe": {
        "!type": "fn()"
       },
       "registerWin": {
        "!type": "fn()"
       },
       "_onBlurNode": {
        "!type": "fn()"
       },
       "_onTouchNode": {
        "!type": "fn()"
       },
       "_onFocusNode": {
        "!type": "fn()"
       },
       "_setStack": {
        "!type": "fn()"
       },
       "getUniqueId": {
        "!type": "fn()"
       },
       "findWidgets": {
        "!type": "fn()"
       },
       "byId": {
        "!type": "fn()"
       },
       "byNode": {
        "!type": "fn()"
       },
       "getEnclosingWidget": {
        "!type": "fn()"
       },
       "_isElementShown": {
        "!type": "fn()"
       },
       "isTabNavigable": {
        "!type": "fn()"
       },
       "_getTabNavigable": {
        "!type": "fn()"
       },
       "getFirstInTabbingOrder": {
        "!type": "fn()"
       },
       "getLastInTabbingOrder": {
        "!type": "fn()"
       },
       "getViewport": {
        "!type": "fn()"
       },
       "__Position": {
        "!type": "fn()"
       },
       "placeOnScreen": {
        "!type": "fn()"
       },
       "_place": {
        "!type": "fn()"
       },
       "placeOnScreenAroundNode": {
        "!type": "fn()"
       },
       "__Rectangle": {
        "!type": "fn()"
       },
       "placeOnScreenAroundRectangle": {
        "!type": "fn()"
       },
       "_placeOnScreenAroundRect": {
        "!type": "fn()"
       },
       "placeOnScreenAroundElement": {
        "!type": "fn()"
       },
       "scrollIntoView": {
        "!type": "fn()"
       },
       "hasWaiRole": {
        "!type": "fn()"
       },
       "getWaiRole": {
        "!type": "fn()"
       },
       "setWaiRole": {
        "!type": "fn()"
       },
       "removeWaiRole": {
        "!type": "fn()"
       },
       "hasWaiState": {
        "!type": "fn()"
       },
       "getWaiState": {
        "!type": "fn()"
       },
       "setWaiState": {
        "!type": "fn()"
       },
       "removeWaiState": {
        "!type": "fn()"
       },
       "getDocumentWindow": {
        "!type": "fn()"
       },
       "selectInputText": {
        "!type": "fn()"
       }
      },
      "dojo": {
       "trim": {
        "!type": "fn()"
       },
       "_connect": {
        "!type": "fn()"
       },
       "connect": {
        "!type": "fn()"
       },
       "body": {
        "!type": "fn()"
       },
       "blendColors": {
        "!type": "fn()"
       },
       "colorFromRgb": {
        "!type": "fn()"
       },
       "colorFromHex": {
        "!type": "fn()"
       },
       "colorFromArray": {
        "!type": "fn()"
       },
       "colorFromString": {
        "!type": "fn()"
       },
       "_mixin": {
        "!type": "fn()"
       },
       "mixin": {
        "!type": "fn()"
       },
       "_getProp": {
        "!type": "fn()"
       },
       "setObject": {
        "!type": "fn()"
       },
       "getObject": {
        "!type": "fn()"
       },
       "exists": {
        "!type": "fn()"
       },
       "eval": {
        "!type": "fn()"
       },
       "deprecated": {
        "!type": "fn()"
       },
       "experimental": {
        "!type": "fn()"
       },
       "_xhrObj": {
        "!type": "fn()"
       },
       "_isDocumentOk": {
        "!type": "fn()"
       },
       "_getText": {
        "!type": "fn()"
       },
       "windowUnloaded": {
        "!type": "fn()"
       },
       "addOnWindowUnload": {
        "!type": "fn()"
       },
       "addOnUnload": {
        "!type": "fn()"
       },
       "_loadUri": {
        "!type": "fn()"
       },
       "pushContext": {
        "!type": "fn()"
       },
       "popContext": {
        "!type": "fn()"
       },
       "_inContext": {
        "!type": "fn()"
       },
       "_loadInit": {
        "!type": "fn()"
       },
       "byId": {
        "!type": "fn()"
       },
       "exit": {
        "!type": "fn()"
       },
       "_rhinoCurrentScriptViaJava": {
        "!type": "fn()"
       },
       "_spidermonkeyCurrentFile": {
        "!type": "fn()"
       },
       "_moduleHasPrefix": {
        "!type": "fn()"
       },
       "_getModulePrefix": {
        "!type": "fn()"
       },
       "_loadPath": {
        "!type": "fn()"
       },
       "_loadUriAndCheck": {
        "!type": "fn()"
       },
       "loaded": {
        "!type": "fn()"
       },
       "unloaded": {
        "!type": "fn()"
       },
       "_onto": {
        "!type": "fn()"
       },
       "addOnLoad": {
        "!type": "fn()"
       },
       "_modulesLoaded": {
        "!type": "fn()"
       },
       "_callLoaded": {
        "!type": "fn()"
       },
       "_getModuleSymbols": {
        "!type": "fn()"
       },
       "loadInit": {
        "!type": "fn()"
       },
       "_loadModule": {
        "!type": "fn()"
       },
       "require": {
        "!type": "fn()"
       },
       "provide": {
        "!type": "fn()"
       },
       "platformRequire": {
        "!type": "fn()"
       },
       "requireIf": {
        "!type": "fn()"
       },
       "registerModulePath": {
        "!type": "fn()"
       },
       "requireLocalization": {
        "!type": "fn()"
       },
       "moduleUrl": {
        "!type": "fn()"
       },
       "_xdDebugFileLoaded": {
        "!type": "fn()"
       },
       "_xdReset": {
        "!type": "fn()"
       },
       "_xdCreateResource": {
        "!type": "fn()"
       },
       "_xdExtractLoadInits": {
        "!type": "fn()"
       },
       "_xdIsXDomainPath": {
        "!type": "fn()"
       },
       "_xdResourceLoaded": {
        "!type": "fn()"
       },
       "_xdLoadFlattenedBundle": {
        "!type": "fn()"
       },
       "_xdInitExtraLocales": {
        "!type": "fn()"
       },
       "xdRequireLocalization": {
        "!type": "fn()"
       },
       "_xdUnpackDependency": {
        "!type": "fn()"
       },
       "_xdWalkReqs": {
        "!type": "fn()"
       },
       "_xdEvalReqs": {
        "!type": "fn()"
       },
       "_xdClearInterval": {
        "!type": "fn()"
       },
       "_xdWatchInFlight": {
        "!type": "fn()"
       },
       "_xdNotifyLoaded": {
        "!type": "fn()"
       },
       "indexOf": {
        "!type": "fn()"
       },
       "lastIndexOf": {
        "!type": "fn()"
       },
       "forEach": {
        "!type": "fn()"
       },
       "_everyOrSome": {
        "!type": "fn()"
       },
       "every": {
        "!type": "fn()"
       },
       "some": {
        "!type": "fn()"
       },
       "map": {
        "!type": "fn()"
       },
       "filter": {
        "!type": "fn()"
       },
       "disconnect": {
        "!type": "fn()"
       },
       "_disconnect": {
        "!type": "fn()"
       },
       "connectPublisher": {
        "!type": "fn()"
       },
       "fixEvent": {
        "!type": "fn()"
       },
       "stopEvent": {
        "!type": "fn()"
       },
       "_ieDispatcher": {
        "!type": "fn()"
       },
       "_getIeDispatcher": {
        "!type": "fn()"
       },
       "_fade": {
        "!type": "fn()"
       },
       "__FadeArgs": {
        "!type": "fn()"
       },
       "fadeIn": {
        "!type": "fn()"
       },
       "fadeOut": {
        "!type": "fn()"
       },
       "_defaultEasing": {
        "!type": "fn()"
       },
       "animateProperty": {
        "!type": "fn()"
       },
       "anim": {
        "!type": "fn()"
       },
       "isString": {
        "!type": "fn()"
       },
       "_destroyElement": {
        "!type": "fn()"
       },
       "destroy": {
        "!type": "fn()"
       },
       "isDescendant": {
        "!type": "fn()"
       },
       "setSelectable": {
        "!type": "fn()"
       },
       "place": {
        "!type": "fn()"
       },
       "getComputedStyle": {
        "!type": "fn()"
       },
       "_toPixelValue": {
        "!type": "fn()"
       },
       "_getOpacity": {
        "!type": "fn()"
       },
       "_setOpacity": {
        "!type": "fn()"
       },
       "style": {
        "!type": "fn()"
       },
       "_getPadExtents": {
        "!type": "fn()"
       },
       "_getBorderExtents": {
        "!type": "fn()"
       },
       "_getPadBorderExtents": {
        "!type": "fn()"
       },
       "_getMarginExtents": {
        "!type": "fn()"
       },
       "_getMarginBox": {
        "!type": "fn()"
       },
       "_getContentBox": {
        "!type": "fn()"
       },
       "_getBorderBox": {
        "!type": "fn()"
       },
       "_setBox": {
        "!type": "fn()"
       },
       "_isButtonTag": {
        "!type": "fn()"
       },
       "_usesBorderBox": {
        "!type": "fn()"
       },
       "_setContentSize": {
        "!type": "fn()"
       },
       "_setMarginBox": {
        "!type": "fn()"
       },
       "marginBox": {
        "!type": "fn()"
       },
       "contentBox": {
        "!type": "fn()"
       },
       "_docScroll": {
        "!type": "fn()"
       },
       "_isBodyLtr": {
        "!type": "fn()"
       },
       "_getIeDocumentElementOffset": {
        "!type": "fn()"
       },
       "_fixIeBiDiScrollLeft": {
        "!type": "fn()"
       },
       "_abs": {
        "!type": "fn()"
       },
       "coords": {
        "!type": "fn()"
       },
       "hasAttr": {
        "!type": "fn()"
       },
       "attr": {
        "!type": "fn()"
       },
       "removeAttr": {
        "!type": "fn()"
       },
       "create": {
        "!type": "fn()"
       },
       "empty": {
        "!type": "fn()"
       },
       "_toDom": {
        "!type": "fn()"
       },
       "hasClass": {
        "!type": "fn()"
       },
       "addClass": {
        "!type": "fn()"
       },
       "removeClass": {
        "!type": "fn()"
       },
       "toggleClass": {
        "!type": "fn()"
       },
       "fromJson": {
        "!type": "fn()"
       },
       "_escapeString": {
        "!type": "fn()"
       },
       "toJson": {
        "!type": "fn()"
       },
       "isArray": {
        "!type": "fn()"
       },
       "isFunction": {
        "!type": "fn()"
       },
       "isObject": {
        "!type": "fn()"
       },
       "isArrayLike": {
        "!type": "fn()"
       },
       "isAlien": {
        "!type": "fn()"
       },
       "extend": {
        "!type": "fn()"
       },
       "_hitchArgs": {
        "!type": "fn()"
       },
       "hitch": {
        "!type": "fn()"
       },
       "delegate": {
        "!type": "fn()"
       },
       "_toArray": {
        "!type": "fn()"
       },
       "partial": {
        "!type": "fn()"
       },
       "clone": {
        "!type": "fn()"
       },
       "query": {
        "!type": "fn()"
       },
       "_filterQueryResult": {
        "!type": "fn()"
       },
       "setContext": {
        "!type": "fn()"
       },
       "withGlobal": {
        "!type": "fn()"
       },
       "withDoc": {
        "!type": "fn()"
       },
       "formToObject": {
        "!type": "fn()"
       },
       "objectToQuery": {
        "!type": "fn()"
       },
       "formToQuery": {
        "!type": "fn()"
       },
       "formToJson": {
        "!type": "fn()"
       },
       "queryToObject": {
        "!type": "fn()"
       },
       "__IoArgs": {
        "!type": "fn()"
       },
       "__IoCallbackArgs": {
        "!type": "fn()"
       },
       "_ioSetArgs": {
        "!type": "fn()"
       },
       "_ioCancelAll": {
        "!type": "fn()"
       },
       "_ioWatch": {
        "!type": "fn()"
       },
       "_ioAddQueryToUrl": {
        "!type": "fn()"
       },
       "xhr": {
        "!type": "fn()"
       },
       "xhrGet": {
        "!type": "fn()"
       },
       "rawXhrPost": {
        "!type": "fn()"
       },
       "xhrPost": {
        "!type": "fn()"
       },
       "rawXhrPut": {
        "!type": "fn()"
       },
       "xhrPut": {
        "!type": "fn()"
       },
       "xhrDelete": {
        "!type": "fn()"
       },
       "__backArgs": {
        "!type": "fn()"
       },
       "behavior": {
        "!type": "fn()"
       },
       "__cookieProps": {
        "!type": "fn()"
       }
      },
      "thix": {},
      "Math": {},
      "Array": {
       "_wrap": {
        "!type": "fn()"
       }
      },
      "djConfig": {},
      "navigator": {},
      "document": {},
      "console": {
       "log": {
        "!type": "fn()"
       },
       "debug": {
        "!type": "fn()"
       }
      },
      "e": {},
      "window": {
       "onFirebugResize": {
        "!type": "fn()"
       },
       "passthrough": {
        "!type": "fn()"
       },
       "onload": {
        "!type": "fn()"
       }
      },
      "style": {},
      "runtimeStyle": {},
      "Object": {},
      "RegExp": {},
      "acme": {
       "trim": {
        "!type": "fn()"
       },
       "forEach": {
        "!type": "fn()"
       },
       "byId": {
        "!type": "fn()"
       },
       "isString": {
        "!type": "fn()"
       }
      },
      "history": {},
      "n": {},
      "dojox": {},
      "dependencies": {},
      "value": {},
      "token": {},
      "pixelValues": {},
      "node": {},
      "Number": {},
      "wrap": {}
     }

});
