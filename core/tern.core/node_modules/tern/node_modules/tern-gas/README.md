# What's this?

This is a plugin of ![tern](https://github.com/marijnh/tern) for completing Google Apps Script.  

# Install

```sh
$ git clone https://github.com/aki2o/tern-gas.git
$ cd tern-gas
$ npm install -g
```

# Configuration

A following config is put in `.tern-project` to enable this plugin.  

```js
{
    "plugins": {
        "gas": {}
    }
}
```

# Update definition

The definition of Google Apps Script is put as hard code in this plugin.  
Therefore, The update of Google Apps Script is not reflected into this plugin.  

I'm going to make an effort to follow that, but it might not be done.  
In this case, you are able to update this plugin by using the script under `contrib` directory like a following steps.  

```sh
$ git clone https://github.com/aki2o/tern-gas.git
$ cd tern-gas
$ npm install opts
$ npm install request
$ npm install jsdom
$ npm install node.extend
$ node contrib/make_plugin.js
$ mv gas.new.js gas.js
$ npm install -g
```
-   `make_plugin.js` &#x2026; A wrapper for `fetch_script_reference.js`, `build_reference.js`
-   `fetch_script_reference.js` &#x2026; Fetch the reference of Google Apps Script from the site of Google and store that into `contrib/refs` directory
-   `build_reference.js` &#x2026; Collect the reference in `contrib/refs` directory and convert that to the code for tern

For detail, run they having `--help` option.  

**Enjoy!!!**
