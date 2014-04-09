(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("../lib/infer"), require("../lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define([ "../lib/infer", "../lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  tern.registerPlugin("liferay", function(server, options) {

    return {
      defs: defs
    };
  });
  
  var defs = {
      "!name": "liferay",
      "!define": {
    	 Notices: {
    	  content: "string",
          node: "string",
          toggleText: "bool"
        }
      },
      Liferay: {
    	  "!doc": "TODO",
    	  "!url": "TODO",
    	  Browser: {
        	  "!doc": "TODO",
        	  "!url": "TODO",
    		  acceptsGzip: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getMajorVersion: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getRevision: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getVersion: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isAir: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isChrome: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isFirefox: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isGecko: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isIe: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isIphone: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isLinux: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isMac: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isMobile: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isMozilla: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isOpera: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isRtf: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isSafari: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isSun: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isWap: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isWapXhtml: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isWebKit: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isWindows: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isWml: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    	  },
    	  Data: {
    		  "!doc": "TODO",
        	  "!url": "TODO",
    		  NAV_SELECTOR: "string",
    		  isCustomizationView: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  notices: {
    			  "!type": "[+Notices]",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  }    		  
    	  },
    	  ThemeDisplay: {
    		  "!doc": "TODO",
        	  "!url": "TODO",
        	  getLayoutId: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getLayoutURL: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getParentLayoutId: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isPrivateLayout: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isVirtualLayout: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getBCP47LanguageId: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getCDNBaseURL: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getCDNDynamicResourcesHost: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getCDNHost: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getCompanyId: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getCompanyGroupId: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getDefaultLanguageId: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getDoAsUserIdEncoded: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getLanguageId: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getParentGroupId: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getPathContext: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getPathImage: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getPathJavaScript: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getPathMain: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getPathThemeImages: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getPathThemeRoot: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getPlid: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getPortalURL: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getPortletSetupShowBordersDefault: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getScopeGroupId: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getScopeGroupIdOrLiveGroupId: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getSessionId: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getSiteGroupId: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getURLControlPanel: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getURLHome: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getUserId: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getUserName: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isAddSessionIdToURL: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isFreeformLayout: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isImpersonated: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isSignedIn: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isStateExclusive: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isStateMaximized: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  isStatePopUp: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  PropsValues: {
		    	  "!doc": "TODO",
		    	  "!url": "TODO",
		    	  NTLM_AUTH_ENABLED: {
	    			  "!type": "bool",
			    	  "!doc": "TODO",
			    	  "!url": "TODO"
		    	  }
    		  }
    	  },
    	  AUI: {
    		  "!doc": "TODO",
	    	  "!url": "TODO",
	    	  getAvailableLangPath: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getCombine: {
    			  "!type": "fn() -> bool",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getComboPath: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getFilter: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getJavaScriptRootPath: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    		  getLangPath: {
    			  "!type": "fn() -> string",
		    	  "!doc": "TODO",
		    	  "!url": "TODO"
    		  },
    	  },
          authToken: {
    		  "!type": "string",
        	  "!doc": "TODO",
        	  "!url": "TODO"
    	  },
    	  currentURL: {
    		  "!type": "string",
        	  "!doc": "TODO",
        	  "!url": "TODO"
    	  },
    	  currentURLEncoded: {
    		  "!type": "string",
        	  "!doc": "TODO",
        	  "!url": "TODO"
    	  },
    	  Portlet: {
    		  "!doc": "TODO",
        	  "!url": "TODO",
        	  list: {
        	    "!type": "[string]",
        	    "!doc": "TODO",
            	    "!url": "TODO"
        	  },
        	  isStatic: {
                    "!type": "fn() -> bool",
                    "!doc": "TODO",
                    "!url": "TODO"
                  },
                  refreshLayout: {
                    "!type": "fn(portletBoundary: ?)",
                    "!doc": "TODO",
                    "!url": "TODO"
                  },
    	  },
    	  _editControlsState: {
    	      "!type": "string",
    	      "!doc": "TODO",
              "!url": "TODO",
        }
      },
	  themeDisplay : "Liferay.ThemeDisplay"
  }

});