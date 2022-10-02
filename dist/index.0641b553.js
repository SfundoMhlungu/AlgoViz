// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2Ah9o":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bNKaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _atomicus = require("atomicus");
var _octopus = require("./Octopus");
var _octopusDefault = parcelHelpers.interopDefault(_octopus);
// views 
var _views = require("./Views");
const app = document.getElementById("app");
const cache = new Map();
// initial setup
// clearEl(head)
(0, _atomicus.clearEl)(app);
// data.route, data.data
const router = (data)=>{
    console.log(data);
    console.log(cache);
    (0, _atomicus.clearEl)(app);
    console.log("cache", cache.get(data.route));
    if (cache.get(data.route)) {
        if (data.route === "views/sort" && cache.get("views/graphs")) // console.log("pauseing GRAPH")
        (0, _octopusDefault.default).notify("pauseGraph");
        else (0, _octopusDefault.default).notify("graphs");
        app.appendChild(cache.get(data.route));
        console.log("return early");
        return;
    }
    switch(data.route){
        case "views/sort":
            (0, _octopusDefault.default).notify("sort");
            const sortV = (0, _views.SortView)();
            app.appendChild(sortV);
            cache.set(data.route, sortV);
            break;
        case "views/graphs":
            (0, _octopusDefault.default).notify("graphs");
            const searchV = (0, _views.SearchView)();
            // console.log(searchV, "search view")
            app.appendChild(searchV);
            cache.set(data.route, searchV);
            break;
        default:
            break;
    }
};
router({
    route: "views/graphs"
});
// Pub.notify("graphs")
(0, _octopusDefault.default).subscribe("view", (data)=>{
    // console.log("da", data)
    //    Pub.notify("pauseGraph")
    router(data);
});

},{"atomicus":"9iIp8","./Octopus":"2DffO","./Views":"cJpDI","@parcel/transformer-js/src/esmodule-helpers.js":"2mdku"}],"9iIp8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clearEl", ()=>clearEl);
parcelHelpers.export(exports, "createElement", ()=>createElement);
parcelHelpers.export(exports, "PubSub", ()=>PubSub);
function IsDom(element) {
    return element instanceof Element;
}
function clearEl(el) {
    while(el.firstChild)el.removeChild(el.firstChild);
}
function SetAttribs(node, attrs) {
    for (const [key, val] of Object.entries(attrs)){
        // for some weird reason set attribute set attribute sometimes fails events
        if (key === "onclick" || key === "onselect") node.addEventListener("click", val);
        else if (key === "onchange") node.addEventListener("input", val);
        else node.setAttribute(key, val);
    }
}
function createElement(node) {
    if (typeof node == "string") return document.createTextNode(node);
    if (IsDom(node)) return node;
    const p = document.createElement(node.tag);
    if (node.attrs) SetAttribs(p, node.attrs);
    node && node.children && node.children.map(createElement).forEach(p.appendChild.bind(p));
    return p;
}
class PubSub {
    constructor(){
        this.subscribers = {};
    }
    subscribe(channel, fn) {
        if (!this.subscribers[channel]) this.subscribers[channel] = [];
        this.subscribers[channel].push(fn);
        return ()=>{
            this.subscribers[channel] = this.subscribers[channel].filter((sf)=>sf !== fn);
        };
    }
    notify(channel, ...data) {
        if (!this.subscribers[channel]) throw new Error(`${channel} does not exist`);
        this.subscribers[channel].forEach((fn)=>fn(...data));
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2mdku"}],"2mdku":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2DffO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _atomicus = require("atomicus");
const Pub = new (0, _atomicus.PubSub)();
exports.default = Pub;

},{"atomicus":"9iIp8","@parcel/transformer-js/src/esmodule-helpers.js":"2mdku"}],"cJpDI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SortView", ()=>SortView);
parcelHelpers.export(exports, "SearchView", ()=>SearchView);
var _atomicus = require("atomicus");
var _header = require("./views/Header");
var _headerDefault = parcelHelpers.interopDefault(_header);
var _sort = require("./views/Sort");
var _sortDefault = parcelHelpers.interopDefault(_sort);
var _search = require("./views/Search");
var _searchDefault = parcelHelpers.interopDefault(_search);
var _graphs = require("./views/Graphs");
var _graphsDefault = parcelHelpers.interopDefault(_graphs);
// models
var _model = require("./Model");
const head = document.getElementById("header");
head.appendChild((0, _atomicus.createElement)((0, _headerDefault.default)((0, _model.headerData))));
function SortView() {
    return (0, _atomicus.createElement)((0, _sortDefault.default)());
}
function SearchView() {
    return (0, _atomicus.createElement)((0, _graphsDefault.default)());
}

},{"atomicus":"9iIp8","./views/Header":"aJcVK","./views/Sort":"5hlOc","./views/Search":"8D5wM","./views/Graphs":"jpEkV","./Model":"b3SZR","@parcel/transformer-js/src/esmodule-helpers.js":"2mdku"}],"aJcVK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _octopus = require("../Octopus");
var _octopusDefault = parcelHelpers.interopDefault(_octopus);
class Createlink {
    constructor(a){
        this.tag = "a", this.attrs = a.attrs, this.children = a.children;
    }
}
exports.default = Header = (data)=>{
    let { links , icon  } = data;
    const con = {
        tag: "div",
        attrs: {
            class: "grid-ish header"
        },
        children: [
            {
                tag: "div",
                attrs: {
                    class: "icon fl fl-ai-c"
                },
                children: [
                    {
                        tag: "div",
                        attrs: {},
                        children: [
                            {
                                tag: "h1",
                                children: [
                                    "AlgoViz"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                tag: "div",
                attrs: {
                    class: "links fl fl-ai-c"
                },
                children: links.map((link, i)=>{
                    let a = {
                        attrs: {
                            class: "link",
                            onclick: ()=>(0, _octopusDefault.default).notify("view", {
                                    route: link.route,
                                    data: null
                                }),
                            href: "#"
                        },
                        children: [
                            link.state.name
                        ]
                    };
                    return new Createlink(a);
                })
            }
        ]
    };
    return con;
};

},{"../Octopus":"2DffO","@parcel/transformer-js/src/esmodule-helpers.js":"2mdku"}],"5hlOc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _canvas = require("../components/Canvas");
var _canvasDefault = parcelHelpers.interopDefault(_canvas);
var _esm = require("atomicus/lib/esm");
var _comlink = require("comlink");
var _octopus = require("../Octopus");
var _octopusDefault = parcelHelpers.interopDefault(_octopus);
const wh = {
    width: "300px",
    height: "300px"
};
/**
 * @type {HTMLCanvasElement}
 */ const bubbleSort = (0, _esm.createElement)((0, _canvasDefault.default)(wh));
/**
 * @type {HTMLCanvasElement}
 */ const insertionSort = (0, _esm.createElement)((0, _canvasDefault.default)(wh));
const mergeSort = (0, _esm.createElement)((0, _canvasDefault.default)(wh));
let firstinsertionPass = true;
let insertionBarWidth = 0;
const insertionCtx = insertionSort.getContext("2d");
const bubbleCtx = bubbleSort.getContext("2d");
// insertionCtx.fillRect(10, 10, 100, 100)
insertionCtx.fillStyle = "#00001e";
bubbleCtx.fillStyle = "#00001e";
async function draw(s) {}
async function init() {
    let inte = null;
    let insertionDone = false;
    const s = _comlink.wrap(new Worker(require("ef3b80f7c5a715e5")));
    // console.log(s.insertion, "s")
    //  console.log(await new s())
    //      const instance = await new s()
    //      console.log(instance)
    //      return;
    //    console.log(s.initial(), "initial array")
    /**
    * @type {IteratorResult}
    */ let v = await s.sorter.next();
    if (firstinsertionPass) {
        insertionBarWidth = insertionSort.clientWidth / v.value.length;
        console.log("each bar width", insertionBarWidth);
    }
    async function update(int) {
        if (!v.done) {
            // console.log(v.value)
            if (v.value == true) {
                insertionDone = true;
                //    one = one();
                clearInterval(int);
                return;
            }
            insertionCtx.clearRect(0, 0, insertionSort.clientWidth, insertionSort.clientHeight);
            v.value.forEach((val, i)=>{
                insertionCtx.fillRect(i * insertionBarWidth, insertionSort.clientHeight, insertionBarWidth - insertionBarWidth / 4, -(val * 13));
            });
            v = await s.sorter.next();
        }
    }
    // on second reload it does not stop
    const i = setInterval(()=>{
        console.log("interval called am craxt");
        if (insertionDone) {
            console.log("insertion done");
            clearInterval(i);
        }
        update(i);
    }, 1);
}
let firstBubble = true;
let bubbleW = 0;
let BubbleDone = false;
async function initBubble() {
    let insertionDone = false;
    const s = _comlink.wrap(new Worker(require("75c298847eda8e64")));
    // console.log(s, "s")
    //  console.log(await new s())
    //      const instance = await new s()
    //      console.log(instance)
    //      return;
    //    console.log(s.initial(), "initial array")
    /**
    * @type {IteratorResult}
    */ let v = await s.sorter.next();
    // console.log(v, "v bubble")
    if (firstBubble) {
        bubbleW = bubbleSort.clientWidth / v.value.length;
        firstBubble = false;
        console.log("each bar width", bubbleW);
    }
    async function update(int) {
        if (!v.done) {
            // console.log(v.value)
            if (v.value == true) {
                BubbleDone = true;
                //    one = one();
                console.log("yield is true bubble should be done");
                clearInterval(int);
                return;
            }
            bubbleCtx.fillRect(10, 10, 100, 100);
            bubbleCtx.clearRect(0, 0, insertionSort.clientWidth, insertionSort.clientHeight);
            v.value.forEach((val, i)=>{
                bubbleCtx.fillRect(i * bubbleW, bubbleSort.clientHeight, bubbleW - bubbleW / 4, -(val * 13));
            });
            v = await s.sorter.next();
        }
    }
    const b = setInterval(()=>{
        //    console.log("bubble", b)
        // 
        if (insertionDone) {
            console.log("insertion done");
            clearInterval(b);
        }
        update(b);
    }, 1);
}
(0, _octopusDefault.default).subscribe("sort", ()=>{
    init();
    initBubble();
});
function eachCanvasParent(canvas, title) {
    return {
        tag: "div",
        attrs: {},
        children: [
            {
                tag: "h3",
                children: [
                    title
                ]
            },
            canvas
        ]
    };
}
function canvasWrapper(canvas, title) {
    return {
        tag: "div",
        attrs: {
            class: "fl fl-ai-c fl-jc-c sortCanvas"
        },
        children: [
            eachCanvasParent(canvas, title)
        ]
    };
}
function Sort(data) {
    return {
        tag: "div",
        attrs: {
            class: "grid-ish"
        },
        children: [
            canvasWrapper(bubbleSort, "Bubble Sort - O**n"),
            canvasWrapper(insertionSort, "Insertion Sort O**n")
        ]
    };
}
exports.default = Sort;

},{"../components/Canvas":"eE5PI","atomicus/lib/esm":"9iIp8","comlink":"jUFlY","ef3b80f7c5a715e5":"635VY","75c298847eda8e64":"l1lKa","@parcel/transformer-js/src/esmodule-helpers.js":"2mdku","../Octopus":"2DffO"}],"eE5PI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function Canvas(data) {
    return {
        tag: "canvas",
        attrs: {
            width: data.width,
            height: data.height
        }
    };
}
exports.default = Canvas;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2mdku"}],"jUFlY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createEndpoint", ()=>createEndpoint);
parcelHelpers.export(exports, "expose", ()=>expose);
parcelHelpers.export(exports, "proxy", ()=>proxy);
parcelHelpers.export(exports, "proxyMarker", ()=>proxyMarker);
parcelHelpers.export(exports, "releaseProxy", ()=>releaseProxy);
parcelHelpers.export(exports, "transfer", ()=>transfer);
parcelHelpers.export(exports, "transferHandlers", ()=>transferHandlers);
parcelHelpers.export(exports, "windowEndpoint", ()=>windowEndpoint);
parcelHelpers.export(exports, "wrap", ()=>wrap);
/**
 * Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const proxyMarker = Symbol("Comlink.proxy");
const createEndpoint = Symbol("Comlink.endpoint");
const releaseProxy = Symbol("Comlink.releaseProxy");
const throwMarker = Symbol("Comlink.thrown");
const isObject = (val)=>typeof val === "object" && val !== null || typeof val === "function";
/**
 * Internal transfer handle to handle objects marked to proxy.
 */ const proxyTransferHandler = {
    canHandle: (val)=>isObject(val) && val[proxyMarker],
    serialize (obj) {
        const { port1 , port2  } = new MessageChannel();
        expose(obj, port1);
        return [
            port2,
            [
                port2
            ]
        ];
    },
    deserialize (port) {
        port.start();
        return wrap(port);
    }
};
/**
 * Internal transfer handler to handle thrown exceptions.
 */ const throwTransferHandler = {
    canHandle: (value)=>isObject(value) && throwMarker in value,
    serialize ({ value  }) {
        let serialized;
        if (value instanceof Error) serialized = {
            isError: true,
            value: {
                message: value.message,
                name: value.name,
                stack: value.stack
            }
        };
        else serialized = {
            isError: false,
            value
        };
        return [
            serialized,
            []
        ];
    },
    deserialize (serialized) {
        if (serialized.isError) throw Object.assign(new Error(serialized.value.message), serialized.value);
        throw serialized.value;
    }
};
/**
 * Allows customizing the serialization of certain values.
 */ const transferHandlers = new Map([
    [
        "proxy",
        proxyTransferHandler
    ],
    [
        "throw",
        throwTransferHandler
    ], 
]);
function expose(obj, ep = self) {
    ep.addEventListener("message", function callback(ev) {
        if (!ev || !ev.data) return;
        const { id , type , path  } = Object.assign({
            path: []
        }, ev.data);
        const argumentList = (ev.data.argumentList || []).map(fromWireValue);
        let returnValue;
        try {
            const parent = path.slice(0, -1).reduce((obj, prop)=>obj[prop], obj);
            const rawValue = path.reduce((obj, prop)=>obj[prop], obj);
            switch(type){
                case "GET" /* GET */ :
                    returnValue = rawValue;
                    break;
                case "SET" /* SET */ :
                    parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);
                    returnValue = true;
                    break;
                case "APPLY" /* APPLY */ :
                    returnValue = rawValue.apply(parent, argumentList);
                    break;
                case "CONSTRUCT" /* CONSTRUCT */ :
                    {
                        const value = new rawValue(...argumentList);
                        returnValue = proxy(value);
                    }
                    break;
                case "ENDPOINT" /* ENDPOINT */ :
                    {
                        const { port1 , port2  } = new MessageChannel();
                        expose(obj, port2);
                        returnValue = transfer(port1, [
                            port1
                        ]);
                    }
                    break;
                case "RELEASE" /* RELEASE */ :
                    returnValue = undefined;
                    break;
                default:
                    return;
            }
        } catch (value1) {
            returnValue = {
                value: value1,
                [throwMarker]: 0
            };
        }
        Promise.resolve(returnValue).catch((value)=>{
            return {
                value,
                [throwMarker]: 0
            };
        }).then((returnValue)=>{
            const [wireValue, transferables] = toWireValue(returnValue);
            ep.postMessage(Object.assign(Object.assign({}, wireValue), {
                id
            }), transferables);
            if (type === "RELEASE" /* RELEASE */ ) {
                // detach and deactive after sending release response above.
                ep.removeEventListener("message", callback);
                closeEndPoint(ep);
            }
        });
    });
    if (ep.start) ep.start();
}
function isMessagePort(endpoint) {
    return endpoint.constructor.name === "MessagePort";
}
function closeEndPoint(endpoint) {
    if (isMessagePort(endpoint)) endpoint.close();
}
function wrap(ep, target) {
    return createProxy(ep, [], target);
}
function throwIfProxyReleased(isReleased) {
    if (isReleased) throw new Error("Proxy has been released and is not useable");
}
function createProxy(ep, path = [], target = function() {}) {
    let isProxyReleased = false;
    const proxy = new Proxy(target, {
        get (_target, prop) {
            throwIfProxyReleased(isProxyReleased);
            if (prop === releaseProxy) return ()=>{
                return requestResponseMessage(ep, {
                    type: "RELEASE" /* RELEASE */ ,
                    path: path.map((p)=>p.toString())
                }).then(()=>{
                    closeEndPoint(ep);
                    isProxyReleased = true;
                });
            };
            if (prop === "then") {
                if (path.length === 0) return {
                    then: ()=>proxy
                };
                const r = requestResponseMessage(ep, {
                    type: "GET" /* GET */ ,
                    path: path.map((p)=>p.toString())
                }).then(fromWireValue);
                return r.then.bind(r);
            }
            return createProxy(ep, [
                ...path,
                prop
            ]);
        },
        set (_target, prop, rawValue) {
            throwIfProxyReleased(isProxyReleased);
            // FIXME: ES6 Proxy Handler `set` methods are supposed to return a
            // boolean. To show good will, we return true asynchronously ¯\_(ツ)_/¯
            const [value, transferables] = toWireValue(rawValue);
            return requestResponseMessage(ep, {
                type: "SET" /* SET */ ,
                path: [
                    ...path,
                    prop
                ].map((p)=>p.toString()),
                value
            }, transferables).then(fromWireValue);
        },
        apply (_target, _thisArg, rawArgumentList) {
            throwIfProxyReleased(isProxyReleased);
            const last = path[path.length - 1];
            if (last === createEndpoint) return requestResponseMessage(ep, {
                type: "ENDPOINT" /* ENDPOINT */ 
            }).then(fromWireValue);
            // We just pretend that `bind()` didn’t happen.
            if (last === "bind") return createProxy(ep, path.slice(0, -1));
            const [argumentList, transferables] = processArguments(rawArgumentList);
            return requestResponseMessage(ep, {
                type: "APPLY" /* APPLY */ ,
                path: path.map((p)=>p.toString()),
                argumentList
            }, transferables).then(fromWireValue);
        },
        construct (_target, rawArgumentList) {
            throwIfProxyReleased(isProxyReleased);
            const [argumentList, transferables] = processArguments(rawArgumentList);
            return requestResponseMessage(ep, {
                type: "CONSTRUCT" /* CONSTRUCT */ ,
                path: path.map((p)=>p.toString()),
                argumentList
            }, transferables).then(fromWireValue);
        }
    });
    return proxy;
}
function myFlat(arr) {
    return Array.prototype.concat.apply([], arr);
}
function processArguments(argumentList) {
    const processed = argumentList.map(toWireValue);
    return [
        processed.map((v)=>v[0]),
        myFlat(processed.map((v)=>v[1]))
    ];
}
const transferCache = new WeakMap();
function transfer(obj, transfers) {
    transferCache.set(obj, transfers);
    return obj;
}
function proxy(obj) {
    return Object.assign(obj, {
        [proxyMarker]: true
    });
}
function windowEndpoint(w, context = self, targetOrigin = "*") {
    return {
        postMessage: (msg, transferables)=>w.postMessage(msg, targetOrigin, transferables),
        addEventListener: context.addEventListener.bind(context),
        removeEventListener: context.removeEventListener.bind(context)
    };
}
function toWireValue(value) {
    for (const [name, handler] of transferHandlers)if (handler.canHandle(value)) {
        const [serializedValue, transferables] = handler.serialize(value);
        return [
            {
                type: "HANDLER" /* HANDLER */ ,
                name,
                value: serializedValue
            },
            transferables, 
        ];
    }
    return [
        {
            type: "RAW" /* RAW */ ,
            value
        },
        transferCache.get(value) || [], 
    ];
}
function fromWireValue(value) {
    switch(value.type){
        case "HANDLER" /* HANDLER */ :
            return transferHandlers.get(value.name).deserialize(value.value);
        case "RAW" /* RAW */ :
            return value.value;
    }
}
function requestResponseMessage(ep, msg, transfers) {
    return new Promise((resolve)=>{
        const id = generateUUID();
        ep.addEventListener("message", function l(ev) {
            if (!ev.data || !ev.data.id || ev.data.id !== id) return;
            ep.removeEventListener("message", l);
            resolve(ev.data);
        });
        if (ep.start) ep.start();
        ep.postMessage(Object.assign({
            id
        }, msg), transfers);
    });
}
function generateUUID() {
    return new Array(4).fill(0).map(()=>Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2mdku"}],"635VY":[function(require,module,exports) {
let workerURL = require("./helpers/get-worker-url");
let bundleURL = require("./helpers/bundle-url");
let url = bundleURL.getBundleURL("lPpKD") + "sel-insertSort.84efd6e9.js" + "?" + Date.now();
module.exports = workerURL(url, bundleURL.getOrigin(url), false);

},{"./helpers/get-worker-url":"lwj1n","./helpers/bundle-url":"28iTF"}],"lwj1n":[function(require,module,exports) {
"use strict";
module.exports = function(workerUrl, origin, isESM) {
    if (origin === self.location.origin) // If the worker bundle's url is on the same origin as the document,
    // use the worker bundle's own url.
    return workerUrl;
    else {
        // Otherwise, create a blob URL which loads the worker bundle with `importScripts`.
        var source = isESM ? "import " + JSON.stringify(workerUrl) + ";" : "importScripts(" + JSON.stringify(workerUrl) + ");";
        return URL.createObjectURL(new Blob([
            source
        ], {
            type: "application/javascript"
        }));
    }
};

},{}],"28iTF":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"l1lKa":[function(require,module,exports) {
let workerURL = require("./helpers/get-worker-url");
let bundleURL = require("./helpers/bundle-url");
let url = bundleURL.getBundleURL("lPpKD") + "bubble.53346764.js" + "?" + Date.now();
module.exports = workerURL(url, bundleURL.getOrigin(url), false);

},{"./helpers/get-worker-url":"lwj1n","./helpers/bundle-url":"28iTF"}],"8D5wM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function Search(data) {
    return {
        tag: "div",
        children: [
            {
                tag: "h1",
                children: [
                    "hello search"
                ]
            }
        ]
    };
}
exports.default = Search;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2mdku"}],"jpEkV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _canvas = require("../components/Canvas");
var _canvasDefault = parcelHelpers.interopDefault(_canvas);
var _esm = require("atomicus/lib/esm");
var _comlink = require("comlink");
var _waitforSecs = require("../utils/waitforSecs");
var _octopus = require("../Octopus");
var _octopusDefault = parcelHelpers.interopDefault(_octopus);
const wh = {
    width: "300px",
    height: "300px"
};
let pause = false;
/**
 * @type {HTMLCanvasElement}
 */ const BFS = (0, _esm.createElement)((0, _canvasDefault.default)(wh));
/**
 * @type {HTMLCanvasElement}
 */ const DFS = (0, _esm.createElement)((0, _canvasDefault.default)(wh));
const BFSctx = BFS.getContext("2d");
// console.log(BFS)
async function init() {
    const BFSObject = _comlink.wrap(new Worker(require("a9cd42fc769a1b68")));
    const initial = await BFSObject.initial;
    let w = Math.round(300 / initial[0].length);
    console.log(w);
    console.log(initial, "initial graph"), initial.forEach((row, i)=>{
        row.forEach((cell, j)=>{
            BFSctx.fillStyle = cell.color;
            BFSctx.fillRect(j * w, i * w, w, w);
        });
    });
    async function update() {
        if (!pause) {
            // console.log("graph is paused")
            let next = await BFSObject.BFSnext.next();
            if (next.done) {
                console.log("BFS done");
                return;
            }
            //  console.log(next)
            if (Array.isArray(next.value) && !next.done) next.value.forEach((row, i)=>{
                row.forEach((cell, j)=>{
                    BFSctx.fillStyle = cell.color;
                    BFSctx.fillRect(j * w, i * w, w, w);
                });
            });
        }
        await (0, _waitforSecs.Wait)(.020);
        await update();
    }
    update();
}
(0, _octopusDefault.default).subscribe("pauseGraph", ()=>pause = true);
(0, _octopusDefault.default).subscribe("graphs", ()=>{
    // console.log("graphs called")
    if (pause) pause = false;
    else init();
});
// apply DRY same as Sort code 
function eachCanvasParent(canvas, title) {
    return {
        tag: "div",
        attrs: {},
        children: [
            {
                tag: "h3",
                children: [
                    title
                ]
            },
            canvas
        ]
    };
}
function canvasWrapper(canvas, title) {
    return {
        tag: "div",
        attrs: {
            class: "fl fl-ai-c fl-jc-c sortCanvas"
        },
        children: [
            eachCanvasParent(canvas, title)
        ]
    };
}
function Graphs(data) {
    return {
        tag: "div",
        attrs: {
            class: "grid-ish"
        },
        children: [
            canvasWrapper(BFS, "Breadth First Search"),
            canvasWrapper(DFS, "Depth First Search")
        ]
    };
}
exports.default = Graphs;

},{"../components/Canvas":"eE5PI","atomicus/lib/esm":"9iIp8","comlink":"jUFlY","../utils/waitforSecs":"kPbm5","a9cd42fc769a1b68":"aN4VI","@parcel/transformer-js/src/esmodule-helpers.js":"2mdku","../Octopus":"2DffO"}],"kPbm5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Wait", ()=>Wait);
const Wait = (seconds)=>{
    return new Promise((resolve)=>{
        const l = setTimeout(resolve, seconds * 1000);
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2mdku"}],"aN4VI":[function(require,module,exports) {
let workerURL = require("./helpers/get-worker-url");
let bundleURL = require("./helpers/bundle-url");
let url = bundleURL.getBundleURL("lPpKD") + "BFS.efd6859e.js" + "?" + Date.now();
module.exports = workerURL(url, bundleURL.getOrigin(url), false);

},{"./helpers/get-worker-url":"lwj1n","./helpers/bundle-url":"28iTF"}],"b3SZR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "headerData", ()=>headerData);
const headerData = {
    links: [
        {
            route: "views/sort",
            state: {
                name: "Sort"
            }
        },
        {
            route: "views/graphs",
            state: {
                name: "Graphs"
            }
        }
    ],
    icon: ""
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2mdku"}]},["2Ah9o","bNKaB"], "bNKaB", "parcelRequire0d09")

//# sourceMappingURL=index.0641b553.js.map
