/*!
 * MediaElement.js
 * http://www.mediaelementjs.com/
 *
 * Wrapper that mimics native HTML5 MediaElement (audio and video)
 * using a variety of technologies (pure JavaScript, Flash, iframe)
 *
 * Copyright 2010-2017, John Dyer (http://j.hn/)
 * License: MIT
 *
 */(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){

},{}],2:[function(_dereq_,module,exports){
(function (global){
var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = _dereq_(1);

if (typeof document !== 'undefined') {
    module.exports = document;
} else {
    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }

    module.exports = doccy;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"1":1}],3:[function(_dereq_,module,exports){
(function (global){
if (typeof window !== "undefined") {
    module.exports = window;
} else if (typeof global !== "undefined") {
    module.exports = global;
} else if (typeof self !== "undefined"){
    module.exports = self;
} else {
    module.exports = {};
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mejs = _dereq_(6);

var _mejs2 = _interopRequireDefault(_mejs);

var _en = _dereq_(8);

var _general = _dereq_(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var i18n = { lang: 'en', en: _en.EN };

i18n.language = function () {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	if (args !== null && args !== undefined && args.length) {

		if (typeof args[0] !== 'string') {
			throw new TypeError('Language code must be a string value');
		}

		if (!/^[a-z]{2}(\-[a-z]{2})?$/i.test(args[0])) {
			throw new TypeError('Language code must have format `xx` or `xx-xx`');
		}

		i18n.lang = args[0];

		if (i18n[args[0]] === undefined) {
			args[1] = args[1] !== null && args[1] !== undefined && _typeof(args[1]) === 'object' ? args[1] : {};
			i18n[args[0]] = !(0, _general.isObjectEmpty)(args[1]) ? args[1] : _en.EN;
		} else if (args[1] !== null && args[1] !== undefined && _typeof(args[1]) === 'object') {
			i18n[args[0]] = args[1];
		}
	}

	return i18n.lang;
};

i18n.t = function (message) {
	var pluralParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


	if (typeof message === 'string' && message.length) {

		var str = void 0,
		    pluralForm = void 0;

		var language = i18n.language();

		var _plural = function _plural(input, number, form) {

			if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object' || typeof number !== 'number' || typeof form !== 'number') {
				return input;
			}

			var _pluralForms = function () {
				return [function () {
					return arguments.length <= 1 ? undefined : arguments[1];
				}, function () {
					return (arguments.length <= 0 ? undefined : arguments[0]) === 1 ? arguments.length <= 1 ? undefined : arguments[1] : arguments.length <= 2 ? undefined : arguments[2];
				}, function () {
					return (arguments.length <= 0 ? undefined : arguments[0]) === 0 || (arguments.length <= 0 ? undefined : arguments[0]) === 1 ? arguments.length <= 1 ? undefined : arguments[1] : arguments.length <= 2 ? undefined : arguments[2];
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) % 10 === 1 && (arguments.length <= 0 ? undefined : arguments[0]) % 100 !== 11) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) !== 0) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else {
						return arguments.length <= 3 ? undefined : arguments[3];
					}
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) === 1 || (arguments.length <= 0 ? undefined : arguments[0]) === 11) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) === 2 || (arguments.length <= 0 ? undefined : arguments[0]) === 12) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) > 2 && (arguments.length <= 0 ? undefined : arguments[0]) < 20) {
						return arguments.length <= 3 ? undefined : arguments[3];
					} else {
						return arguments.length <= 4 ? undefined : arguments[4];
					}
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) === 1) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) === 0 || (arguments.length <= 0 ? undefined : arguments[0]) % 100 > 0 && (arguments.length <= 0 ? undefined : arguments[0]) % 100 < 20) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else {
						return arguments.length <= 3 ? undefined : arguments[3];
					}
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) % 10 === 1 && (arguments.length <= 0 ? undefined : arguments[0]) % 100 !== 11) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) % 10 >= 2 && ((arguments.length <= 0 ? undefined : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? undefined : arguments[0]) % 100 >= 20)) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else {
						return [3];
					}
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) % 10 === 1 && (arguments.length <= 0 ? undefined : arguments[0]) % 100 !== 11) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? undefined : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? undefined : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? undefined : arguments[0]) % 100 >= 20)) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else {
						return arguments.length <= 3 ? undefined : arguments[3];
					}
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) === 1) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) >= 2 && (arguments.length <= 0 ? undefined : arguments[0]) <= 4) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else {
						return arguments.length <= 3 ? undefined : arguments[3];
					}
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) === 1) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? undefined : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? undefined : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? undefined : arguments[0]) % 100 >= 20)) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else {
						return arguments.length <= 3 ? undefined : arguments[3];
					}
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) % 100 === 1) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) % 100 === 2) {
						return arguments.length <= 3 ? undefined : arguments[3];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) % 100 === 3 || (arguments.length <= 0 ? undefined : arguments[0]) % 100 === 4) {
						return arguments.length <= 4 ? undefined : arguments[4];
					} else {
						return arguments.length <= 1 ? undefined : arguments[1];
					}
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) === 1) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) === 2) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) > 2 && (arguments.length <= 0 ? undefined : arguments[0]) < 7) {
						return arguments.length <= 3 ? undefined : arguments[3];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) > 6 && (arguments.length <= 0 ? undefined : arguments[0]) < 11) {
						return arguments.length <= 4 ? undefined : arguments[4];
					} else {
						return arguments.length <= 5 ? undefined : arguments[5];
					}
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) === 0) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) === 1) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) === 2) {
						return arguments.length <= 3 ? undefined : arguments[3];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) % 100 >= 3 && (arguments.length <= 0 ? undefined : arguments[0]) % 100 <= 10) {
						return arguments.length <= 4 ? undefined : arguments[4];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) % 100 >= 11) {
						return arguments.length <= 5 ? undefined : arguments[5];
					} else {
						return arguments.length <= 6 ? undefined : arguments[6];
					}
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) === 1) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) === 0 || (arguments.length <= 0 ? undefined : arguments[0]) % 100 > 1 && (arguments.length <= 0 ? undefined : arguments[0]) % 100 < 11) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) % 100 > 10 && (arguments.length <= 0 ? undefined : arguments[0]) % 100 < 20) {
						return arguments.length <= 3 ? undefined : arguments[3];
					} else {
						return arguments.length <= 4 ? undefined : arguments[4];
					}
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) % 10 === 1) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) % 10 === 2) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else {
						return arguments.length <= 3 ? undefined : arguments[3];
					}
				}, function () {
					return (arguments.length <= 0 ? undefined : arguments[0]) !== 11 && (arguments.length <= 0 ? undefined : arguments[0]) % 10 === 1 ? arguments.length <= 1 ? undefined : arguments[1] : arguments.length <= 2 ? undefined : arguments[2];
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) === 1) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? undefined : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? undefined : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? undefined : arguments[0]) % 100 >= 20)) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else {
						return arguments.length <= 3 ? undefined : arguments[3];
					}
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) === 1) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) === 2) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) !== 8 && (arguments.length <= 0 ? undefined : arguments[0]) !== 11) {
						return arguments.length <= 3 ? undefined : arguments[3];
					} else {
						return arguments.length <= 4 ? undefined : arguments[4];
					}
				}, function () {
					return (arguments.length <= 0 ? undefined : arguments[0]) === 0 ? arguments.length <= 1 ? undefined : arguments[1] : arguments.length <= 2 ? undefined : arguments[2];
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) === 1) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) === 2) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) === 3) {
						return arguments.length <= 3 ? undefined : arguments[3];
					} else {
						return arguments.length <= 4 ? undefined : arguments[4];
					}
				}, function () {
					if ((arguments.length <= 0 ? undefined : arguments[0]) === 0) {
						return arguments.length <= 1 ? undefined : arguments[1];
					} else if ((arguments.length <= 0 ? undefined : arguments[0]) === 1) {
						return arguments.length <= 2 ? undefined : arguments[2];
					} else {
						return arguments.length <= 3 ? undefined : arguments[3];
					}
				}];
			}();

			return _pluralForms[form].apply(null, [number].concat(input));
		};

		if (i18n[language] !== undefined) {
			str = i18n[language][message];
			if (pluralParam !== null && typeof pluralParam === 'number') {
				pluralForm = i18n[language]['mejs.plural-form'];
				str = _plural.apply(null, [str, pluralParam, pluralForm]);
			}
		}

		if (!str && i18n.en) {
			str = i18n.en[message];
			if (pluralParam !== null && typeof pluralParam === 'number') {
				pluralForm = i18n.en['mejs.plural-form'];
				str = _plural.apply(null, [str, pluralParam, pluralForm]);
			}
		}

		str = str || message;

		if (pluralParam !== null && typeof pluralParam === 'number') {
			str = str.replace('%1', pluralParam);
		}

		return (0, _general.escapeHTML)(str);
	}

	return message;
};

_mejs2.default.i18n = i18n;

if (typeof mejsL10n !== 'undefined') {
	_mejs2.default.i18n.language(mejsL10n.language, mejsL10n.strings);
}

exports.default = i18n;

},{"17":17,"6":6,"8":8}],5:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _window = _dereq_(3);

var _window2 = _interopRequireDefault(_window);

var _document = _dereq_(2);

var _document2 = _interopRequireDefault(_document);

var _mejs = _dereq_(6);

var _mejs2 = _interopRequireDefault(_mejs);

var _general = _dereq_(17);

var _media = _dereq_(18);

var _renderer = _dereq_(7);

var _constants = _dereq_(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MediaElement = function MediaElement(idOrNode, options, sources) {
	var _this = this;

	_classCallCheck(this, MediaElement);

	var t = this;

	sources = Array.isArray(sources) ? sources : null;

	t.defaults = {
		renderers: [],

		fakeNodeName: 'mediaelementwrapper',

		pluginPath: 'build/',

		shimScriptAccess: 'sameDomain',

		customError: ''
	};

	options = Object.assign(t.defaults, options);

	t.mediaElement = _document2.default.createElement(options.fakeNodeName);
	t.mediaElement.options = options;

	var id = idOrNode,
	    error = false;

	if (typeof idOrNode === 'string') {
		t.mediaElement.originalNode = _document2.default.getElementById(idOrNode);
	} else {
		t.mediaElement.originalNode = idOrNode;
		id = idOrNode.id;
	}

	id = id || 'mejs_' + Math.random().toString().slice(2);

	if (t.mediaElement.originalNode !== undefined && t.mediaElement.originalNode !== null && t.mediaElement.appendChild) {
		t.mediaElement.originalNode.setAttribute('id', id + '_from_mejs');

		var tagName = t.mediaElement.originalNode.tagName.toLowerCase();
		if (['video', 'audio'].indexOf(tagName) > -1 && !t.mediaElement.originalNode.getAttribute('preload')) {
			t.mediaElement.originalNode.setAttribute('preload', 'none');
		}

		t.mediaElement.originalNode.parentNode.insertBefore(t.mediaElement, t.mediaElement.originalNode);

		t.mediaElement.appendChild(t.mediaElement.originalNode);
	} else {}

	t.mediaElement.id = id;
	t.mediaElement.renderers = {};
	t.mediaElement.renderer = null;
	t.mediaElement.rendererName = null;

	t.mediaElement.changeRenderer = function (rendererName, mediaFiles) {

		var t = _this;

		if (t.mediaElement.renderer !== undefined && t.mediaElement.renderer !== null && t.mediaElement.renderer.name === rendererName) {
			t.mediaElement.renderer.pause();
			if (t.mediaElement.renderer.stop) {
				t.mediaElement.renderer.stop();
			}
			t.mediaElement.renderer.show();
			t.mediaElement.renderer.setSrc(mediaFiles[0].src);
			return true;
		}

		if (t.mediaElement.renderer !== undefined && t.mediaElement.renderer !== null) {
			t.mediaElement.renderer.pause();
			if (t.mediaElement.renderer.stop) {
				t.mediaElement.renderer.stop();
			}
			t.mediaElement.renderer.hide();
		}

		var newRenderer = t.mediaElement.renderers[rendererName],
		    newRendererType = null;

		if (newRenderer !== undefined && newRenderer !== null) {
			newRenderer.show();
			newRenderer.setSrc(mediaFiles[0].src);
			t.mediaElement.renderer = newRenderer;
			t.mediaElement.rendererName = rendererName;
			return true;
		}

		var rendererArray = t.mediaElement.options.renderers.length ? t.mediaElement.options.renderers : _renderer.renderer.order;

		for (var i = 0, total = rendererArray.length; i < total; i++) {

			var index = rendererArray[i];

			if (index === rendererName) {
				var rendererList = _renderer.renderer.renderers;
				newRendererType = rendererList[index];

				var renderOptions = Object.assign(newRendererType.options, t.mediaElement.options);
				newRenderer = newRendererType.create(t.mediaElement, renderOptions, mediaFiles);
				newRenderer.name = rendererName;

				t.mediaElement.renderers[newRendererType.name] = newRenderer;
				t.mediaElement.renderer = newRenderer;
				t.mediaElement.rendererName = rendererName;

				newRenderer.show();

				return true;
			}
		}

		return false;
	};

	t.mediaElement.setSize = function (width, height) {
		if (t.mediaElement.renderer !== undefined && t.mediaElement.renderer !== null) {
			t.mediaElement.renderer.setSize(width, height);
		}
	};

	t.mediaElement.createErrorMessage = function (urlList) {

		urlList = Array.isArray(urlList) ? urlList : [];

		var errorContainer = _document2.default.createElement('div');
		errorContainer.className = 'me_cannotplay';
		errorContainer.style.width = '100%';
		errorContainer.style.height = '100%';

		var errorContent = t.mediaElement.options.customError;

		if (!errorContent) {

			var poster = t.mediaElement.originalNode.getAttribute('poster');
			if (poster) {
				errorContent += '<img src="' + poster + '" width="100%" height="100%" alt="' + _mejs2.default.i18n.t('mejs.download-file') + '">';
			}

			for (var i = 0, total = urlList.length; i < total; i++) {
				var url = urlList[i];
				errorContent += '<a href="' + url.src + '" data-type="' + url.type + '"><span>' + _mejs2.default.i18n.t('mejs.download-file') + ': ' + url.src + '</span></a>';
			}
		}

		errorContainer.innerHTML = errorContent;

		t.mediaElement.originalNode.parentNode.insertBefore(errorContainer, t.mediaElement.originalNode);
		t.mediaElement.originalNode.style.display = 'none';
		error = true;
	};

	var props = _mejs2.default.html5media.properties,
	    methods = _mejs2.default.html5media.methods,
	    addProperty = function addProperty(obj, name, onGet, onSet) {
		var oldValue = obj[name];
		var getFn = function getFn() {
			return onGet.apply(obj, [oldValue]);
		},
		    setFn = function setFn(newValue) {
			oldValue = onSet.apply(obj, [newValue]);
			return oldValue;
		};

		Object.defineProperty(obj, name, {
			get: getFn,
			set: setFn
		});
	},
	    assignGettersSetters = function assignGettersSetters(propName) {
		if (propName !== 'src') {

			var capName = '' + propName.substring(0, 1).toUpperCase() + propName.substring(1),
			    getFn = function getFn() {
				return t.mediaElement.renderer !== undefined && t.mediaElement.renderer !== null ? t.mediaElement.renderer['get' + capName]() : null;
			},
			    setFn = function setFn(value) {
				if (t.mediaElement.renderer !== undefined && t.mediaElement.renderer !== null) {
					t.mediaElement.renderer['set' + capName](value);
				}
			};

			addProperty(t.mediaElement, propName, getFn, setFn);
			t.mediaElement['get' + capName] = getFn;
			t.mediaElement['set' + capName] = setFn;
		}
	},
	    getSrc = function getSrc() {
		return t.mediaElement.renderer !== undefined && t.mediaElement.renderer !== null ? t.mediaElement.renderer.getSrc() : null;
	},
	    setSrc = function setSrc(value) {
		var mediaFiles = [];

		if (typeof value === 'string') {
			mediaFiles.push({
				src: value,
				type: value ? (0, _media.getTypeFromFile)(value) : ''
			});
		} else {
			for (var i = 0, total = value.length; i < total; i++) {

				var src = (0, _media.absolutizeUrl)(value[i].src),
				    type = value[i].type;

				mediaFiles.push({
					src: src,
					type: (type === '' || type === null || type === undefined) && src ? (0, _media.getTypeFromFile)(src) : type
				});
			}
		}

		var renderInfo = _renderer.renderer.select(mediaFiles, t.mediaElement.options.renderers.length ? t.mediaElement.options.renderers : []),
		    event = void 0;

		if (!t.mediaElement.paused) {
			t.mediaElement.pause();
			event = (0, _general.createEvent)('pause', t.mediaElement);
			t.mediaElement.dispatchEvent(event);
		}

		t.mediaElement.originalNode.setAttribute('src', mediaFiles[0].src || '');

		if (t.mediaElement.querySelector('.me_cannotplay')) {
			t.mediaElement.querySelector('.me_cannotplay').remove();
		}

		if (renderInfo === null) {
			t.mediaElement.createErrorMessage(mediaFiles);
			event = (0, _general.createEvent)('error', t.mediaElement);
			event.message = 'No renderer found';
			t.mediaElement.dispatchEvent(event);
			return;
		}

		t.mediaElement.changeRenderer(renderInfo.rendererName, mediaFiles);

		if (t.mediaElement.renderer === undefined || t.mediaElement.renderer === null) {
			event = (0, _general.createEvent)('error', t.mediaElement);
			event.message = 'Error creating renderer';
			t.mediaElement.dispatchEvent(event);
			t.mediaElement.createErrorMessage(mediaFiles);
		}
	},
	    assignMethods = function assignMethods(methodName) {
		t.mediaElement[methodName] = function () {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			if (t.mediaElement.renderer !== undefined && t.mediaElement.renderer !== null && typeof t.mediaElement.renderer[methodName] === 'function') {
				try {
					t.mediaElement.renderer[methodName](args);
				} catch (e) {
					t.mediaElement.createErrorMessage();
				}
			}
			return null;
		};
	};

	addProperty(t.mediaElement, 'src', getSrc, setSrc);
	t.mediaElement.getSrc = getSrc;
	t.mediaElement.setSrc = setSrc;

	for (var i = 0, total = props.length; i < total; i++) {
		assignGettersSetters(props[i]);
	}

	for (var _i = 0, _total = methods.length; _i < _total; _i++) {
		assignMethods(methods[_i]);
	}

	t.mediaElement.events = {};

	t.mediaElement.addEventListener = function (eventName, callback) {
		t.mediaElement.events[eventName] = t.mediaElement.events[eventName] || [];

		t.mediaElement.events[eventName].push(callback);
	};
	t.mediaElement.removeEventListener = function (eventName, callback) {
		if (!eventName) {
			t.mediaElement.events = {};
			return true;
		}

		var callbacks = t.mediaElement.events[eventName];

		if (!callbacks) {
			return true;
		}

		if (!callback) {
			t.mediaElement.events[eventName] = [];
			return true;
		}

		for (var _i2 = 0; _i2 < callbacks.length; _i2++) {
			if (callbacks[_i2] === callback) {
				t.mediaElement.events[eventName].splice(_i2, 1);
				return true;
			}
		}
		return false;
	};

	t.mediaElement.dispatchEvent = function (event) {

		var callbacks = t.mediaElement.events[event.type];

		if (callbacks) {
			for (var _i3 = 0; _i3 < callbacks.length; _i3++) {
				callbacks[_i3].apply(null, [event]);
			}
		}
	};

	var processURL = function processURL(url, type) {

		if (_mejs2.default.html5media.mediaTypes.indexOf(type) > -1 && _window2.default.location.protocol === 'https:' && _constants.IS_IOS && !_window2.default.MSStream) {
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function () {
				if (this.readyState === 4 && this.status === 200) {
					var _url = _window2.default.URL || _window2.default.webkitURL,
					    blobUrl = _url.createObjectURL(this.response);
					t.mediaElement.originalNode.setAttribute('src', blobUrl);
					return blobUrl;
				}
				return url;
			};
			xhr.open('GET', url);
			xhr.responseType = 'blob';
			xhr.send();
		}

		return url;
	};

	var mediaFiles = void 0;

	if (sources !== null) {
		mediaFiles = sources;
	} else if (t.mediaElement.originalNode !== null) {

		mediaFiles = [];

		switch (t.mediaElement.originalNode.nodeName.toLowerCase()) {
			case 'iframe':
				mediaFiles.push({
					type: '',
					src: t.mediaElement.originalNode.getAttribute('src')
				});

				break;
			case 'audio':
			case 'video':
				var _sources = t.mediaElement.originalNode.childNodes.length,
				    nodeSource = t.mediaElement.originalNode.getAttribute('src');

				if (nodeSource) {
					var node = t.mediaElement.originalNode,
					    type = (0, _media.formatType)(nodeSource, node.getAttribute('type'));
					mediaFiles.push({
						type: type,
						src: processURL(nodeSource, type)
					});
				}

				for (var _i4 = 0; _i4 < _sources; _i4++) {
					var n = t.mediaElement.originalNode.childNodes[_i4];
					if (n.nodeType === Node.ELEMENT_NODE && n.tagName.toLowerCase() === 'source') {
						var src = n.getAttribute('src'),
						    _type = (0, _media.formatType)(src, n.getAttribute('type'));
						mediaFiles.push({ type: _type, src: processURL(src, _type) });
					}
				}
				break;
		}
	}

	if (mediaFiles.length) {
		t.mediaElement.src = mediaFiles;
	}

	if (t.mediaElement.options.success) {
		t.mediaElement.options.success(t.mediaElement, t.mediaElement.originalNode);
	}

	if (error && t.mediaElement.options.error) {
		t.mediaElement.options.error(t.mediaElement, t.mediaElement.originalNode);
	}

	return t.mediaElement;
};

_window2.default.MediaElement = MediaElement;

exports.default = MediaElement;

},{"15":15,"17":17,"18":18,"2":2,"3":3,"6":6,"7":7}],6:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _window = _dereq_(3);

var _window2 = _interopRequireDefault(_window);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mejs = {};

mejs.version = '4.1.1';

mejs.html5media = {
	properties: ['volume', 'src', 'currentTime', 'muted', 'duration', 'paused', 'ended', 'buffered', 'error', 'networkState', 'readyState', 'seeking', 'seekable', 'currentSrc', 'preload', 'bufferedBytes', 'bufferedTime', 'initialTime', 'startOffsetTime', 'defaultPlaybackRate', 'playbackRate', 'played', 'autoplay', 'loop', 'controls'],
	readOnlyProperties: ['duration', 'paused', 'ended', 'buffered', 'error', 'networkState', 'readyState', 'seeking', 'seekable'],

	methods: ['load', 'play', 'pause', 'canPlayType'],

	events: ['loadstart', 'progress', 'suspend', 'abort', 'error', 'emptied', 'stalled', 'play', 'pause', 'loadedmetadata', 'loadeddata', 'waiting', 'playing', 'canplay', 'canplaythrough', 'seeking', 'seeked', 'timeupdate', 'ended', 'ratechange', 'durationchange', 'volumechange'],

	mediaTypes: ['audio/mp3', 'audio/ogg', 'audio/oga', 'audio/wav', 'audio/x-wav', 'audio/wave', 'audio/x-pn-wav', 'audio/mpeg', 'audio/mp4', 'video/mp4', 'video/webm', 'video/ogg', 'video/ogv']
};

_window2.default.mejs = mejs;

exports.default = mejs;

},{"3":3}],7:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.renderer = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mejs = _dereq_(6);

var _mejs2 = _interopRequireDefault(_mejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer = function () {
	function Renderer() {
		_classCallCheck(this, Renderer);

		this.renderers = {};
		this.order = [];
	}

	_createClass(Renderer, [{
		key: 'add',
		value: function add(renderer) {
			if (renderer.name === undefined) {
				throw new TypeError('renderer must contain at least `name` property');
			}

			this.renderers[renderer.name] = renderer;
			this.order.push(renderer.name);
		}
	}, {
		key: 'select',
		value: function select(mediaFiles) {
			var renderers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

			var renderersLength = renderers.length;

			renderers = renderers.length ? renderers : this.order;

			if (!renderersLength) {
				var rendererIndicator = [/^(html5|native)/i, /^flash/i, /iframe$/i],
				    rendererRanking = function rendererRanking(renderer) {
					for (var i = 0, total = rendererIndicator.length; i < total; i++) {
						if (rendererIndicator[i].test(renderer)) {
							return i;
						}
					}
					return rendererIndicator.length;
				};

				renderers.sort(function (a, b) {
					return rendererRanking(a) - rendererRanking(b);
				});
			}

			for (var i = 0, total = renderers.length; i < total; i++) {
				var key = renderers[i],
				    _renderer = this.renderers[key];

				if (_renderer !== null && _renderer !== undefined) {
					for (var j = 0, jl = mediaFiles.length; j < jl; j++) {
						if (typeof _renderer.canPlayType === 'function' && typeof mediaFiles[j].type === 'string' && _renderer.canPlayType(mediaFiles[j].type)) {
							return {
								rendererName: _renderer.name,
								src: mediaFiles[j].src
							};
						}
					}
				}
			}

			return null;
		}
	}, {
		key: 'order',
		set: function set(order) {
			if (!Array.isArray(order)) {
				throw new TypeError('order must be an array of strings.');
			}

			this._order = order;
		},
		get: function get() {
			return this._order;
		}
	}, {
		key: 'renderers',
		set: function set(renderers) {
			if (renderers !== null && (typeof renderers === 'undefined' ? 'undefined' : _typeof(renderers)) !== 'object') {
				throw new TypeError('renderers must be an array of objects.');
			}

			this._renderers = renderers;
		},
		get: function get() {
			return this._renderers;
		}
	}]);

	return Renderer;
}();

var renderer = exports.renderer = new Renderer();

_mejs2.default.Renderers = renderer;

},{"6":6}],8:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var EN = exports.EN = {
	"mejs.plural-form": 1,

	"mejs.download-file": "Download File",

	"mejs.install-flash": "You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/",

	"mejs.fullscreen": "Fullscreen",

	"mejs.play": "Play",
	"mejs.pause": "Pause",

	"mejs.time-slider": "Time Slider",
	"mejs.time-help-text": "Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.",
	"mejs.live-broadcast": "Live Broadcast",

	"mejs.volume-help-text": "Use Up/Down Arrow keys to increase or decrease volume.",
	"mejs.unmute": "Unmute",
	"mejs.mute": "Mute",
	"mejs.volume-slider": "Volume Slider",

	"mejs.video-player": "Video Player",
	"mejs.audio-player": "Audio Player",

	"mejs.captions-subtitles": "Captions/Subtitles",
	"mejs.captions-chapters": "Chapters",
	"mejs.none": "None",
	"mejs.afrikaans": "Afrikaans",
	"mejs.albanian": "Albanian",
	"mejs.arabic": "Arabic",
	"mejs.belarusian": "Belarusian",
	"mejs.bulgarian": "Bulgarian",
	"mejs.catalan": "Catalan",
	"mejs.chinese": "Chinese",
	"mejs.chinese-simplified": "Chinese (Simplified)",
	"mejs.chinese-traditional": "Chinese (Traditional)",
	"mejs.croatian": "Croatian",
	"mejs.czech": "Czech",
	"mejs.danish": "Danish",
	"mejs.dutch": "Dutch",
	"mejs.english": "English",
	"mejs.estonian": "Estonian",
	"mejs.filipino": "Filipino",
	"mejs.finnish": "Finnish",
	"mejs.french": "French",
	"mejs.galician": "Galician",
	"mejs.german": "German",
	"mejs.greek": "Greek",
	"mejs.haitian-creole": "Haitian Creole",
	"mejs.hebrew": "Hebrew",
	"mejs.hindi": "Hindi",
	"mejs.hungarian": "Hungarian",
	"mejs.icelandic": "Icelandic",
	"mejs.indonesian": "Indonesian",
	"mejs.irish": "Irish",
	"mejs.italian": "Italian",
	"mejs.japanese": "Japanese",
	"mejs.korean": "Korean",
	"mejs.latvian": "Latvian",
	"mejs.lithuanian": "Lithuanian",
	"mejs.macedonian": "Macedonian",
	"mejs.malay": "Malay",
	"mejs.maltese": "Maltese",
	"mejs.norwegian": "Norwegian",
	"mejs.persian": "Persian",
	"mejs.polish": "Polish",
	"mejs.portuguese": "Portuguese",
	"mejs.romanian": "Romanian",
	"mejs.russian": "Russian",
	"mejs.serbian": "Serbian",
	"mejs.slovak": "Slovak",
	"mejs.slovenian": "Slovenian",
	"mejs.spanish": "Spanish",
	"mejs.swahili": "Swahili",
	"mejs.swedish": "Swedish",
	"mejs.tagalog": "Tagalog",
	"mejs.thai": "Thai",
	"mejs.turkish": "Turkish",
	"mejs.ukrainian": "Ukrainian",
	"mejs.vietnamese": "Vietnamese",
	"mejs.welsh": "Welsh",
	"mejs.yiddish": "Yiddish"
};

},{}],9:[function(_dereq_,module,exports){
'use strict';

var _window = _dereq_(3);

var _window2 = _interopRequireDefault(_window);

var _mejs = _dereq_(6);

var _mejs2 = _interopRequireDefault(_mejs);

var _renderer = _dereq_(7);

var _general = _dereq_(17);

var _media = _dereq_(18);

var _constants = _dereq_(15);

var _dom = _dereq_(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NativeDash = {

	promise: null,

	load: function load(settings) {
		if (typeof dashjs !== 'undefined') {
			NativeDash._createPlayer(settings);
		} else {
			settings.options.path = typeof settings.options.path === 'string' ? settings.options.path : 'https://cdn.dashjs.org/latest/dash.mediaplayer.min.js';

			NativeDash.promise = NativeDash.promise || (0, _dom.loadScript)(settings.options.path);
			NativeDash.promise.then(function () {
				NativeDash._createPlayer(settings);
			});
		}
	},

	_createPlayer: function _createPlayer(settings) {
		var player = dashjs.MediaPlayer().create();
		_window2.default['__ready__' + settings.id](player);
	}
};

var DashNativeRenderer = {
	name: 'native_dash',
	options: {
		prefix: 'native_dash',
		dash: {
			path: 'https://cdn.dashjs.org/latest/dash.mediaplayer.min.js',
			debug: false
		}
	},

	canPlayType: function canPlayType(type) {
		return _constants.HAS_MSE && ['application/dash+xml'].indexOf(type.toLowerCase()) > -1;
	},

	create: function create(mediaElement, options, mediaFiles) {

		var originalNode = mediaElement.originalNode,
		    id = mediaElement.id + '_' + options.prefix,
		    preload = originalNode.getAttribute('preload'),
		    autoplay = originalNode.autoplay;

		var node = null,
		    dashPlayer = null;

		node = originalNode.cloneNode(true);
		options = Object.assign(options, mediaElement.options);

		var props = _mejs2.default.html5media.properties,
		    assignGettersSetters = function assignGettersSetters(propName) {
			var capName = '' + propName.substring(0, 1).toUpperCase() + propName.substring(1);

			node['get' + capName] = function () {
				return dashPlayer !== null ? node[propName] : null;
			};

			node['set' + capName] = function (value) {
				if (_mejs2.default.html5media.readOnlyProperties.indexOf(propName) === -1) {
					if (dashPlayer !== null) {
						if (propName === 'src') {
							dashPlayer.attachSource(value);
							if (autoplay) {
								node.play();
							}
						}

						node[propName] = value;
					}
				}
			};
		};

		for (var i = 0, total = props.length; i < total; i++) {
			assignGettersSetters(props[i]);
		}

		_window2.default['__ready__' + id] = function (_dashPlayer) {

			mediaElement.dashPlayer = dashPlayer = _dashPlayer;

			dashPlayer.getDebug().setLogToBrowserConsole(options.dash.debug);
			dashPlayer.setAutoPlay(preload && preload === 'auto' || autoplay);
			dashPlayer.setScheduleWhilePaused(preload && preload === 'auto' || autoplay);

			var events = _mejs2.default.html5media.events.concat(['click', 'mouseover', 'mouseout']),
			    dashEvents = dashjs.MediaPlayer.events,
			    assignEvents = function assignEvents(eventName) {
				if (eventName === 'loadedmetadata') {
					dashPlayer.initialize(node, node.src, false);
				}

				node.addEventListener(eventName, function (e) {
					var event = (0, _general.createEvent)(e.type, mediaElement);
					mediaElement.dispatchEvent(event);
				});
			};

			for (var _i = 0, _total = events.length; _i < _total; _i++) {
				assignEvents(events[_i]);
			}

			var assignMdashEvents = function assignMdashEvents(e) {
				var event = (0, _general.createEvent)(e.type, node);
				event.data = e;
				mediaElement.dispatchEvent(event);

				if (e.type.toLowerCase() === 'error') {
					console.error(e);
				}
			};

			for (var eventType in dashEvents) {
				if (dashEvents.hasOwnProperty(eventType)) {
					dashPlayer.on(dashEvents[eventType], assignMdashEvents);
				}
			}
		};

		if (mediaFiles && mediaFiles.length > 0) {
			for (var _i2 = 0, _total2 = mediaFiles.length; _i2 < _total2; _i2++) {
				if (_renderer.renderer.renderers[options.prefix].canPlayType(mediaFiles[_i2].type)) {
					node.setAttribute('src', mediaFiles[_i2].src);
					break;
				}
			}
		}

		node.setAttribute('id', id);

		originalNode.parentNode.insertBefore(node, originalNode);
		originalNode.autoplay = false;
		originalNode.style.display = 'none';

		NativeDash.load({
			options: options.dash,
			id: id
		});

		node.setSize = function (width, height) {
			node.style.width = width + 'px';
			node.style.height = height + 'px';
			return node;
		};

		node.hide = function () {
			node.pause();
			node.style.display = 'none';
			return node;
		};

		node.show = function () {
			node.style.display = '';
			return node;
		};

		var event = (0, _general.createEvent)('rendererready', node);
		mediaElement.dispatchEvent(event);

		return node;
	}
};

_media.typeChecks.push(function (url) {
	return ~url.toLowerCase().indexOf('.mpd') ? 'application/dash+xml' : null;
});

_renderer.renderer.add(DashNativeRenderer);

},{"15":15,"16":16,"17":17,"18":18,"3":3,"6":6,"7":7}],10:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PluginDetector = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _window = _dereq_(3);

var _window2 = _interopRequireDefault(_window);

var _document = _dereq_(2);

var _document2 = _interopRequireDefault(_document);

var _mejs = _dereq_(6);

var _mejs2 = _interopRequireDefault(_mejs);

var _i18n = _dereq_(4);

var _i18n2 = _interopRequireDefault(_i18n);

var _renderer = _dereq_(7);

var _general = _dereq_(17);

var _constants = _dereq_(15);

var _media = _dereq_(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PluginDetector = exports.PluginDetector = {
	plugins: [],

	hasPluginVersion: function hasPluginVersion(plugin, v) {
		var pv = PluginDetector.plugins[plugin];
		v[1] = v[1] || 0;
		v[2] = v[2] || 0;
		return pv[0] > v[0] || pv[0] === v[0] && pv[1] > v[1] || pv[0] === v[0] && pv[1] === v[1] && pv[2] >= v[2];
	},

	addPlugin: function addPlugin(p, pluginName, mimeType, activeX, axDetect) {
		PluginDetector.plugins[p] = PluginDetector.detectPlugin(pluginName, mimeType, activeX, axDetect);
	},

	detectPlugin: function detectPlugin(pluginName, mimeType, activeX, axDetect) {

		var version = [0, 0, 0],
		    description = void 0,
		    ax = void 0;

		if (_constants.NAV.plugins !== null && _constants.NAV.plugins !== undefined && _typeof(_constants.NAV.plugins[pluginName]) === 'object') {
			description = _constants.NAV.plugins[pluginName].description;
			if (description && !(typeof _constants.NAV.mimeTypes !== 'undefined' && _constants.NAV.mimeTypes[mimeType] && !_constants.NAV.mimeTypes[mimeType].enabledPlugin)) {
				version = description.replace(pluginName, '').replace(/^\s+/, '').replace(/\sr/gi, '.').split('.');
				for (var i = 0, total = version.length; i < total; i++) {
					version[i] = parseInt(version[i].match(/\d+/), 10);
				}
			}
		} else if (_window2.default.ActiveXObject !== undefined) {
			try {
				ax = new ActiveXObject(activeX);
				if (ax) {
					version = axDetect(ax);
				}
			} catch (e) {
				
			}
		}
		return version;
	}
};

PluginDetector.addPlugin('flash', 'Shockwave Flash', 'application/x-shockwave-flash', 'ShockwaveFlash.ShockwaveFlash', function (ax) {
	var version = [],
	    d = ax.GetVariable("$version");

	if (d) {
		d = d.split(" ")[1].split(",");
		version = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
	}
	return version;
});

var FlashMediaElementRenderer = {
	create: function create(mediaElement, options, mediaFiles) {

		var flash = {};

		flash.options = options;
		flash.id = mediaElement.id + '_' + flash.options.prefix;
		flash.mediaElement = mediaElement;
		flash.flashState = {};
		flash.flashApi = null;
		flash.flashApiStack = [];

		var props = _mejs2.default.html5media.properties,
		    assignGettersSetters = function assignGettersSetters(propName) {
			flash.flashState[propName] = null;

			var capName = '' + propName.substring(0, 1).toUpperCase() + propName.substring(1);

			flash['get' + capName] = function () {

				if (flash.flashApi !== null) {

					if (flash.flashApi['get_' + propName] !== undefined) {
						var value = flash.flashApi['get_' + propName]();

						if (propName === 'buffered') {
							return {
								start: function start() {
									return 0;
								},
								end: function end() {
									return value;
								},
								length: 1
							};
						}

						return value;
					} else {
						return null;
					}
				} else {
					return null;
				}
			};

			flash['set' + capName] = function (value) {
				if (propName === 'src') {
					value = (0, _media.absolutizeUrl)(value);
				}

				if (flash.flashApi !== null && flash.flashApi['set_' + propName] !== undefined) {
					flash.flashApi['set_' + propName](value);
				} else {
					flash.flashApiStack.push({
						type: 'set',
						propName: propName,
						value: value
					});
				}
			};
		};

		for (var i = 0, total = props.length; i < total; i++) {
			assignGettersSetters(props[i]);
		}

		var methods = _mejs2.default.html5media.methods,
		    assignMethods = function assignMethods(methodName) {
			flash[methodName] = function () {
				if (flash.flashApi !== null) {
					if (flash.flashApi['fire_' + methodName]) {
						try {
							flash.flashApi['fire_' + methodName]();
						} catch (e) {
							
						}
					} else {
						
					}
				} else {
					flash.flashApiStack.push({
						type: 'call',
						methodName: methodName
					});
				}
			};
		};
		methods.push('stop');
		for (var _i = 0, _total = methods.length; _i < _total; _i++) {
			assignMethods(methods[_i]);
		}

		var initEvents = ['rendererready'];

		for (var _i2 = 0, _total2 = initEvents.length; _i2 < _total2; _i2++) {
			var event = (0, _general.createEvent)(initEvents[_i2], flash);
			mediaElement.dispatchEvent(event);
		}

		_window2.default['__ready__' + flash.id] = function () {

			flash.flashReady = true;
			flash.flashApi = _document2.default.getElementById('__' + flash.id);

			if (flash.flashApiStack.length) {
				for (var _i3 = 0, _total3 = flash.flashApiStack.length; _i3 < _total3; _i3++) {
					var stackItem = flash.flashApiStack[_i3];

					if (stackItem.type === 'set') {
						var propName = stackItem.propName,
						    capName = '' + propName.substring(0, 1).toUpperCase() + propName.substring(1);

						flash['set' + capName](stackItem.value);
					} else if (stackItem.type === 'call') {
						flash[stackItem.methodName]();
					}
				}
			}
		};

		_window2.default['__event__' + flash.id] = function (eventName, message) {
			var event = (0, _general.createEvent)(eventName, flash);
			event.message = message || '';

			flash.mediaElement.dispatchEvent(event);
		};

		flash.flashWrapper = _document2.default.createElement('div');

		if (['always', 'sameDomain'].indexOf(flash.options.shimScriptAccess) === -1) {
			flash.options.shimScriptAccess = 'sameDomain';
		}

		var autoplay = mediaElement.originalNode.autoplay,
		    flashVars = ['uid=' + flash.id, 'autoplay=' + autoplay, 'allowScriptAccess=' + flash.options.shimScriptAccess],
		    isVideo = mediaElement.originalNode !== null && mediaElement.originalNode.tagName.toLowerCase() === 'video',
		    flashHeight = isVideo ? mediaElement.originalNode.height : 1,
		    flashWidth = isVideo ? mediaElement.originalNode.width : 1;

		if (mediaElement.originalNode.getAttribute('src')) {
			flashVars.push('src=' + mediaElement.originalNode.getAttribute('src'));
		}

		if (flash.options.enablePseudoStreaming === true) {
			flashVars.push('pseudostreamstart=' + flash.options.pseudoStreamingStartQueryParam);
			flashVars.push('pseudostreamtype=' + flash.options.pseudoStreamingType);
		}

		mediaElement.appendChild(flash.flashWrapper);

		if (mediaElement.originalNode !== null) {
			mediaElement.originalNode.style.display = 'none';
		}

		var settings = [];

		if (_constants.IS_IE) {
			var specialIEContainer = _document2.default.createElement('div');
			flash.flashWrapper.appendChild(specialIEContainer);

			settings = ['classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"', 'codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"', 'id="__' + flash.id + '"', 'width="' + flashWidth + '"', 'height="' + flashHeight + '"'];

			if (!isVideo) {
				settings.push('style="clip: rect(0 0 0 0); position: absolute;"');
			}

			specialIEContainer.outerHTML = '<object ' + settings.join(' ') + '>' + ('<param name="movie" value="' + flash.options.pluginPath + flash.options.filename + '?x=' + new Date() + '" />') + ('<param name="flashvars" value="' + flashVars.join('&amp;') + '" />') + '<param name="quality" value="high" />' + '<param name="bgcolor" value="#000000" />' + '<param name="wmode" value="transparent" />' + ('<param name="allowScriptAccess" value="' + flash.options.shimScriptAccess + '" />') + '<param name="allowFullScreen" value="true" />' + ('<div>' + _i18n2.default.t('mejs.install-flash') + '</div>') + '</object>';
		} else {

			settings = ['id="__' + flash.id + '"', 'name="__' + flash.id + '"', 'play="true"', 'loop="false"', 'quality="high"', 'bgcolor="#000000"', 'wmode="transparent"', 'allowScriptAccess="' + flash.options.shimScriptAccess + '"', 'allowFullScreen="true"', 'type="application/x-shockwave-flash"', 'pluginspage="//www.macromedia.com/go/getflashplayer"', 'src="' + flash.options.pluginPath + flash.options.filename + '"', 'flashvars="' + flashVars.join('&') + '"', 'width="' + flashWidth + '"', 'height="' + flashHeight + '"'];

			if (!isVideo) {
				settings.push('style="clip: rect(0 0 0 0); position: absolute;"');
			}

			flash.flashWrapper.innerHTML = '<embed ' + settings.join(' ') + '>';
		}

		flash.flashNode = flash.flashWrapper.lastChild;

		flash.hide = function () {
			if (isVideo) {
				flash.flashNode.style.display = 'none';
			}
		};
		flash.show = function () {
			if (isVideo) {
				flash.flashNode.style.display = '';
			}
		};
		flash.setSize = function (width, height) {
			flash.flashNode.style.width = width + 'px';
			flash.flashNode.style.height = height + 'px';

			if (flash.flashApi !== null && typeof flash.flashApi.fire_setSize === 'function') {
				flash.flashApi.fire_setSize(width, height);
			}
		};

		flash.destroy = function () {
			flash.flashNode.remove();
		};

		if (mediaFiles && mediaFiles.length > 0) {
			for (var _i4 = 0, _total4 = mediaFiles.length; _i4 < _total4; _i4++) {
				if (_renderer.renderer.renderers[options.prefix].canPlayType(mediaFiles[_i4].type)) {
					flash.setSrc(mediaFiles[_i4].src);
					break;
				}
			}
		}

		return flash;
	}
};

var hasFlash = PluginDetector.hasPluginVersion('flash', [10, 0, 0]);

if (hasFlash) {
	_media.typeChecks.push(function (url) {
		url = url.toLowerCase();

		if (url.startsWith('rtmp')) {
			if (~url.indexOf('.mp3')) {
				return 'audio/rtmp';
			} else {
				return 'video/rtmp';
			}
		} else if (/\.og(a|g)/i.test(url)) {
			return 'audio/ogg';
		} else if (~url.indexOf('.m3u8')) {
			return 'application/x-mpegURL';
		} else if (~url.indexOf('.mpd')) {
			return 'application/dash+xml';
		} else if (~url.indexOf('.flv')) {
			return 'video/flv';
		} else {
			return null;
		}
	});

	var FlashMediaElementVideoRenderer = {
		name: 'flash_video',
		options: {
			prefix: 'flash_video',
			filename: 'mediaelement-flash-video.swf',
			enablePseudoStreaming: false,

			pseudoStreamingStartQueryParam: 'start',

			pseudoStreamingType: 'byte'
		},

		canPlayType: function canPlayType(type) {
			return ~['video/mp4', 'video/rtmp', 'audio/rtmp', 'rtmp/mp4', 'audio/mp4', 'video/flv', 'video/x-flv'].indexOf(type.toLowerCase());
		},

		create: FlashMediaElementRenderer.create

	};
	_renderer.renderer.add(FlashMediaElementVideoRenderer);

	var FlashMediaElementHlsVideoRenderer = {
		name: 'flash_hls',
		options: {
			prefix: 'flash_hls',
			filename: 'mediaelement-flash-video-hls.swf'
		},

		canPlayType: function canPlayType(type) {
			return ~['application/x-mpegurl', 'vnd.apple.mpegurl', 'audio/mpegurl', 'audio/hls', 'video/hls'].indexOf(type.toLowerCase());
		},

		create: FlashMediaElementRenderer.create
	};
	_renderer.renderer.add(FlashMediaElementHlsVideoRenderer);

	var FlashMediaElementMdashVideoRenderer = {
		name: 'flash_dash',
		options: {
			prefix: 'flash_dash',
			filename: 'mediaelement-flash-video-mdash.swf'
		},

		canPlayType: function canPlayType(type) {
			return ~['application/dash+xml'].indexOf(type.toLowerCase());
		},

		create: FlashMediaElementRenderer.create
	};
	_renderer.renderer.add(FlashMediaElementMdashVideoRenderer);

	var FlashMediaElementAudioRenderer = {
		name: 'flash_audio',
		options: {
			prefix: 'flash_audio',
			filename: 'mediaelement-flash-audio.swf'
		},

		canPlayType: function canPlayType(type) {
			return ~['audio/mp3'].indexOf(type.toLowerCase());
		},

		create: FlashMediaElementRenderer.create
	};
	_renderer.renderer.add(FlashMediaElementAudioRenderer);

	var FlashMediaElementAudioOggRenderer = {
		name: 'flash_audio_ogg',
		options: {
			prefix: 'flash_audio_ogg',
			filename: 'mediaelement-flash-audio-ogg.swf'
		},

		canPlayType: function canPlayType(type) {
			return ~['audio/ogg', 'audio/oga', 'audio/ogv'].indexOf(type.toLowerCase());
		},

		create: FlashMediaElementRenderer.create
	};
	_renderer.renderer.add(FlashMediaElementAudioOggRenderer);
}

},{"15":15,"17":17,"18":18,"2":2,"3":3,"4":4,"6":6,"7":7}],11:[function(_dereq_,module,exports){
'use strict';

var _window = _dereq_(3);

var _window2 = _interopRequireDefault(_window);

var _mejs = _dereq_(6);

var _mejs2 = _interopRequireDefault(_mejs);

var _renderer = _dereq_(7);

var _general = _dereq_(17);

var _constants = _dereq_(15);

var _media = _dereq_(18);

var _dom = _dereq_(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NativeFlv = {

	promise: null,

	load: function load(settings) {
		if (typeof flvjs !== 'undefined') {
			NativeFlv._createPlayer(settings);
		} else {
			settings.options.path = typeof settings.options.path === 'string' ? settings.options.path : 'https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.2.0/flv.min.js';

			NativeFlv.promise = NativeFlv.promise || (0, _dom.loadScript)(settings.options.path);
			NativeFlv.promise.then(function () {
				NativeFlv._createPlayer(settings);
			});
		}
	},

	_createPlayer: function _createPlayer(settings) {
		var player = flvjs.createPlayer(settings.options);
		_window2.default['__ready__' + settings.id](player);
	}
};

var FlvNativeRenderer = {
	name: 'native_flv',
	options: {
		prefix: 'native_flv',
		flv: {
			path: 'https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.2.0/flv.min.js',

			cors: true
		}
	},

	canPlayType: function canPlayType(type) {
		return _constants.HAS_MSE && ['video/x-flv', 'video/flv'].indexOf(type.toLowerCase()) > -1;
	},

	create: function create(mediaElement, options, mediaFiles) {

		var originalNode = mediaElement.originalNode,
		    id = mediaElement.id + '_' + options.prefix;

		var node = null,
		    flvPlayer = null;

		node = originalNode.cloneNode(true);
		options = Object.assign(options, mediaElement.options);

		var props = _mejs2.default.html5media.properties,
		    assignGettersSetters = function assignGettersSetters(propName) {
			var capName = '' + propName.substring(0, 1).toUpperCase() + propName.substring(1);

			node['get' + capName] = function () {
				return flvPlayer !== null ? node[propName] : null;
			};

			node['set' + capName] = function (value) {
				if (_mejs2.default.html5media.readOnlyProperties.indexOf(propName) === -1) {
					if (flvPlayer !== null) {
						node[propName] = value;

						if (propName === 'src') {
							flvPlayer.unload();
							flvPlayer.detachMediaElement();
							flvPlayer.attachMediaElement(node);
							flvPlayer.load();
						}
					}
				}
			};
		};

		for (var i = 0, total = props.length; i < total; i++) {
			assignGettersSetters(props[i]);
		}

		_window2.default['__ready__' + id] = function (_flvPlayer) {

			mediaElement.flvPlayer = flvPlayer = _flvPlayer;

			var events = _mejs2.default.html5media.events.concat(['click', 'mouseover', 'mouseout']),
			    assignEvents = function assignEvents(eventName) {
				if (eventName === 'loadedmetadata') {
					flvPlayer.unload();
					flvPlayer.detachMediaElement();
					flvPlayer.attachMediaElement(node);
					flvPlayer.load();
				}

				node.addEventListener(eventName, function (e) {
					var event = (0, _general.createEvent)(e.type, mediaElement);
					mediaElement.dispatchEvent(event);
				});
			};

			for (var _i = 0, _total = events.length; _i < _total; _i++) {
				assignEvents(events[_i]);
			}
		};

		if (mediaFiles && mediaFiles.length > 0) {
			for (var _i2 = 0, _total2 = mediaFiles.length; _i2 < _total2; _i2++) {
				if (_renderer.renderer.renderers[options.prefix].canPlayType(mediaFiles[_i2].type)) {
					node.setAttribute('src', mediaFiles[_i2].src);
					break;
				}
			}
		}

		node.setAttribute('id', id);

		originalNode.parentNode.insertBefore(node, originalNode);
		originalNode.autoplay = false;
		originalNode.style.display = 'none';

		options.flv.type = 'flv';
		options.flv.url = node.getAttribute('src');

		NativeFlv.load({
			options: options.flv,
			id: id
		});

		node.setSize = function (width, height) {
			node.style.width = width + 'px';
			node.style.height = height + 'px';
			return node;
		};

		node.hide = function () {
			if (flvPlayer !== null) {
				flvPlayer.pause();
			}
			node.style.display = 'none';
			return node;
		};

		node.show = function () {
			node.style.display = '';
			return node;
		};

		node.destroy = function () {
			if (flvPlayer !== null) {
				flvPlayer.destroy();
			}
		};

		var event = (0, _general.createEvent)('rendererready', node);
		mediaElement.dispatchEvent(event);

		return node;
	}
};

_media.typeChecks.push(function (url) {
	return ~url.toLowerCase().indexOf('.flv') ? 'video/flv' : null;
});

_renderer.renderer.add(FlvNativeRenderer);

},{"15":15,"16":16,"17":17,"18":18,"3":3,"6":6,"7":7}],12:[function(_dereq_,module,exports){
'use strict';

var _window = _dereq_(3);

var _window2 = _interopRequireDefault(_window);

var _mejs = _dereq_(6);

var _mejs2 = _interopRequireDefault(_mejs);

var _renderer = _dereq_(7);

var _general = _dereq_(17);

var _constants = _dereq_(15);

var _media = _dereq_(18);

var _dom = _dereq_(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NativeHls = {

	promise: null,

	load: function load(settings) {
		if (typeof Hls !== 'undefined') {
			NativeHls._createPlayer(settings);
		} else {
			settings.options.path = typeof settings.options.path === 'string' ? settings.options.path : 'https://cdn.jsdelivr.net/hls.js/latest/hls.min.js';

			NativeHls.promise = NativeHls.promise || (0, _dom.loadScript)(settings.options.path);
			NativeHls.promise.then(function () {
				NativeHls._createPlayer(settings);
			});
		}
	},

	_createPlayer: function _createPlayer(settings) {
		var player = new Hls(settings.options);
		_window2.default['__ready__' + settings.id](player);
		return player;
	}
};

var HlsNativeRenderer = {
	name: 'native_hls',
	options: {
		prefix: 'native_hls',
		hls: {
			path: 'https://cdn.jsdelivr.net/hls.js/latest/hls.min.js',

			autoStartLoad: false,
			debug: false
		}
	},

	canPlayType: function canPlayType(type) {
		return _constants.HAS_MSE && ['application/x-mpegurl', 'vnd.apple.mpegurl', 'audio/mpegurl', 'audio/hls', 'video/hls'].indexOf(type.toLowerCase()) > -1;
	},

	create: function create(mediaElement, options, mediaFiles) {

		var originalNode = mediaElement.originalNode,
		    id = mediaElement.id + '_' + options.prefix,
		    preload = originalNode.getAttribute('preload'),
		    autoplay = originalNode.autoplay;

		var hlsPlayer = null,
		    node = null;

		node = originalNode.cloneNode(true);
		options = Object.assign(options, mediaElement.options);
		options.hls.autoStartLoad = preload && preload !== 'none' || autoplay;

		var props = _mejs2.default.html5media.properties,
		    assignGettersSetters = function assignGettersSetters(propName) {
			var capName = '' + propName.substring(0, 1).toUpperCase() + propName.substring(1);

			node['get' + capName] = function () {
				return hlsPlayer !== null ? node[propName] : null;
			};

			node['set' + capName] = function (value) {
				if (_mejs2.default.html5media.readOnlyProperties.indexOf(propName) === -1) {
					if (hlsPlayer !== null) {
						node[propName] = value;

						if (propName === 'src') {

							hlsPlayer.destroy();
							hlsPlayer = NativeHls._createPlayer({
								options: options.hls,
								id: id
							});

							hlsPlayer.loadSource(value);
							hlsPlayer.attachMedia(node);
						}
					}
				}
			};
		};

		for (var i = 0, total = props.length; i < total; i++) {
			assignGettersSetters(props[i]);
		}

		_window2.default['__ready__' + id] = function (_hlsPlayer) {

			mediaElement.hlsPlayer = hlsPlayer = _hlsPlayer;

			var events = _mejs2.default.html5media.events.concat(['click', 'mouseover', 'mouseout']),
			    hlsEvents = Hls.Events,
			    assignEvents = function assignEvents(eventName) {
				if (eventName === 'loadedmetadata') {
					var url = mediaElement.originalNode.src;
					hlsPlayer.detachMedia();
					hlsPlayer.loadSource(url);
					hlsPlayer.attachMedia(node);
				}

				node.addEventListener(eventName, function (e) {
					var event = (0, _general.createEvent)(e.type, mediaElement);
					mediaElement.dispatchEvent(event);
				});
			};

			for (var _i = 0, _total = events.length; _i < _total; _i++) {
				assignEvents(events[_i]);
			}

			var recoverDecodingErrorDate = void 0,
			    recoverSwapAudioCodecDate = void 0;
			var assignHlsEvents = function assignHlsEvents(e, data) {
				var event = (0, _general.createEvent)(e, node);
				event.data = data;
				mediaElement.dispatchEvent(event);

				if (e === 'hlsError') {
					console.warn(e, data);

					if (data.fatal) {
						switch (data.type) {
							case 'mediaError':
								var now = new Date().getTime();
								if (!recoverDecodingErrorDate || now - recoverDecodingErrorDate > 3000) {
									recoverDecodingErrorDate = new Date().getTime();
									hlsPlayer.recoverMediaError();
								} else if (!recoverSwapAudioCodecDate || now - recoverSwapAudioCodecDate > 3000) {
									recoverSwapAudioCodecDate = new Date().getTime();
									console.warn('Attempting to swap Audio Codec and recover from media error');
									hlsPlayer.swapAudioCodec();
									hlsPlayer.recoverMediaError();
								} else {
									console.error('Cannot recover, last media error recovery failed');
								}
								break;
							case 'networkError':
								console.error('Network error');
								break;
							default:
								hlsPlayer.destroy();
								break;
						}
					}
				}
			};

			for (var eventType in hlsEvents) {
				if (hlsEvents.hasOwnProperty(eventType)) {
					hlsPlayer.on(hlsEvents[eventType], assignHlsEvents);
				}
			}
		};

		if (mediaFiles && mediaFiles.length > 0) {
			for (var _i2 = 0, _total2 = mediaFiles.length; _i2 < _total2; _i2++) {
				if (_renderer.renderer.renderers[options.prefix].canPlayType(mediaFiles[_i2].type)) {
					node.setAttribute('src', mediaFiles[_i2].src);
					break;
				}
			}
		}

		if (preload !== 'auto' && !autoplay) {
			node.addEventListener('play', function () {
				if (hlsPlayer !== null) {
					hlsPlayer.startLoad();
				}
			});

			node.addEventListener('pause', function () {
				if (hlsPlayer !== null) {
					hlsPlayer.stopLoad();
				}
			});
		}

		node.setAttribute('id', id);

		originalNode.parentNode.insertBefore(node, originalNode);
		originalNode.autoplay = false;
		originalNode.style.display = 'none';

		NativeHls.load({
			options: options.hls,
			id: id
		});

		node.setSize = function (width, height) {
			node.style.width = width + 'px';
			node.style.height = height + 'px';
			return node;
		};

		node.hide = function () {
			node.pause();
			node.style.display = 'none';
			return node;
		};

		node.show = function () {
			node.style.display = '';
			return node;
		};

		node.destroy = function () {
			if (hlsPlayer !== null) {
				hlsPlayer.destroy();
			}
		};

		node.stop = function () {
			if (hlsPlayer !== null) {
				hlsPlayer.stopLoad();
			}
		};

		var event = (0, _general.createEvent)('rendererready', node);
		mediaElement.dispatchEvent(event);

		return node;
	}
};

_media.typeChecks.push(function (url) {
	return ~url.toLowerCase().indexOf('.m3u8') ? 'application/x-mpegURL' : null;
});

_renderer.renderer.add(HlsNativeRenderer);

},{"15":15,"16":16,"17":17,"18":18,"3":3,"6":6,"7":7}],13:[function(_dereq_,module,exports){
'use strict';

var _window = _dereq_(3);

var _window2 = _interopRequireDefault(_window);

var _document = _dereq_(2);

var _document2 = _interopRequireDefault(_document);

var _mejs = _dereq_(6);

var _mejs2 = _interopRequireDefault(_mejs);

var _renderer = _dereq_(7);

var _general = _dereq_(17);

var _constants = _dereq_(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HtmlMediaElement = {
	name: 'html5',
	options: {
		prefix: 'html5'
	},

	canPlayType: function canPlayType(type) {

		var mediaElement = _document2.default.createElement('video');

		if (_constants.IS_ANDROID && /\/mp(3|4)$/i.test(type) || ~['application/x-mpegurl', 'vnd.apple.mpegurl', 'audio/mpegurl', 'audio/hls', 'video/hls'].indexOf(type.toLowerCase()) && _constants.SUPPORTS_NATIVE_HLS) {
			return 'yes';
		} else if (mediaElement.canPlayType) {
			return mediaElement.canPlayType(type.toLowerCase()).replace(/no/, '');
		} else {
			return '';
		}
	},

	create: function create(mediaElement, options, mediaFiles) {

		var id = mediaElement.id + '_' + options.prefix;

		var node = null;

		if (mediaElement.originalNode === undefined || mediaElement.originalNode === null) {
			node = _document2.default.createElement('audio');
			mediaElement.appendChild(node);
		} else {
			node = mediaElement.originalNode;
		}

		node.setAttribute('id', id);

		var props = _mejs2.default.html5media.properties,
		    assignGettersSetters = function assignGettersSetters(propName) {
			var capName = '' + propName.substring(0, 1).toUpperCase() + propName.substring(1);

			node['get' + capName] = function () {
				return node[propName];
			};

			node['set' + capName] = function (value) {
				if (_mejs2.default.html5media.readOnlyProperties.indexOf(propName) === -1) {
					node[propName] = value;
				}
			};
		};

		for (var i = 0, total = props.length; i < total; i++) {
			assignGettersSetters(props[i]);
		}

		var events = _mejs2.default.html5media.events.concat(['click', 'mouseover', 'mouseout']),
		    assignEvents = function assignEvents(eventName) {
			node.addEventListener(eventName, function (e) {
				var event = (0, _general.createEvent)(e.type, mediaElement);
				mediaElement.dispatchEvent(event);
			});
		};

		for (var _i = 0, _total = events.length; _i < _total; _i++) {
			assignEvents(events[_i]);
		}

		node.setSize = function (width, height) {
			node.style.width = width + 'px';
			node.style.height = height + 'px';
			return node;
		};

		node.hide = function () {
			node.style.display = 'none';

			return node;
		};

		node.show = function () {
			node.style.display = '';

			return node;
		};

		if (mediaFiles && mediaFiles.length > 0) {
			for (var _i2 = 0, _total2 = mediaFiles.length; _i2 < _total2; _i2++) {
				if (_renderer.renderer.renderers[options.prefix].canPlayType(mediaFiles[_i2].type)) {
					node.setAttribute('src', mediaFiles[_i2].src);
					break;
				}
			}
		}

		var event = (0, _general.createEvent)('rendererready', node);
		mediaElement.dispatchEvent(event);

		return node;
	}
};

_window2.default.HtmlMediaElement = _mejs2.default.HtmlMediaElement = HtmlMediaElement;

_renderer.renderer.add(HtmlMediaElement);

},{"15":15,"17":17,"2":2,"3":3,"6":6,"7":7}],14:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _window = _dereq_(3);

var _window2 = _interopRequireDefault(_window);

var _document = _dereq_(2);

var _document2 = _interopRequireDefault(_document);

var _mejs = _dereq_(6);

var _mejs2 = _interopRequireDefault(_mejs);

var _renderer = _dereq_(7);

var _general = _dereq_(17);

var _media = _dereq_(18);

var _dom = _dereq_(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YouTubeApi = {
	isIframeStarted: false,

	isIframeLoaded: false,

	iframeQueue: [],

	enqueueIframe: function enqueueIframe(settings) {
		YouTubeApi.isLoaded = typeof YT !== 'undefined' && YT.loaded;

		if (YouTubeApi.isLoaded) {
			YouTubeApi.createIframe(settings);
		} else {
			YouTubeApi.loadIframeApi();
			YouTubeApi.iframeQueue.push(settings);
		}
	},

	loadIframeApi: function loadIframeApi() {
		if (!YouTubeApi.isIframeStarted) {
			(0, _dom.loadScript)('https://www.youtube.com/player_api');
			YouTubeApi.isIframeStarted = true;
		}
	},

	iFrameReady: function iFrameReady() {

		YouTubeApi.isLoaded = true;
		YouTubeApi.isIframeLoaded = true;

		while (YouTubeApi.iframeQueue.length > 0) {
			var settings = YouTubeApi.iframeQueue.pop();
			YouTubeApi.createIframe(settings);
		}
	},

	createIframe: function createIframe(settings) {
		return new YT.Player(settings.containerId, settings);
	},

	getYouTubeId: function getYouTubeId(url) {

		var youTubeId = '';

		if (url.indexOf('?') > 0) {
			youTubeId = YouTubeApi.getYouTubeIdFromParam(url);

			if (youTubeId === '') {
				youTubeId = YouTubeApi.getYouTubeIdFromUrl(url);
			}
		} else {
			youTubeId = YouTubeApi.getYouTubeIdFromUrl(url);
		}

		return youTubeId;
	},

	getYouTubeIdFromParam: function getYouTubeIdFromParam(url) {

		if (url === undefined || url === null || !url.trim().length) {
			return null;
		}

		var parts = url.split('?'),
		    parameters = parts[1].split('&');

		var youTubeId = '';

		for (var i = 0, total = parameters.length; i < total; i++) {
			var paramParts = parameters[i].split('=');
			if (paramParts[0] === 'v') {
				youTubeId = paramParts[1];
				break;
			}
		}

		return youTubeId;
	},

	getYouTubeIdFromUrl: function getYouTubeIdFromUrl(url) {

		if (url === undefined || url === null || !url.trim().length) {
			return null;
		}

		var parts = url.split('?');
		url = parts[0];
		return url.substring(url.lastIndexOf('/') + 1);
	},

	getYouTubeNoCookieUrl: function getYouTubeNoCookieUrl(url) {
		if (url === undefined || url === null || !url.trim().length || url.indexOf('//www.youtube') === -1) {
			return url;
		}

		var parts = url.split('/');
		parts[2] = parts[2].replace('.com', '-nocookie.com');
		return parts.join('/');
	}
};

var YouTubeIframeRenderer = {
	name: 'youtube_iframe',

	options: {
		prefix: 'youtube_iframe',

		youtube: {
			autoplay: 0,
			controls: 0,
			disablekb: 1,
			end: 0,
			loop: 0,
			modestbranding: 0,
			playsinline: 0,
			rel: 0,
			showinfo: 0,
			start: 0,
			iv_load_policy: 3,

			nocookie: false
		}
	},

	canPlayType: function canPlayType(type) {
		return ~['video/youtube', 'video/x-youtube'].indexOf(type.toLowerCase());
	},

	create: function create(mediaElement, options, mediaFiles) {

		var youtube = {},
		    apiStack = [],
		    readyState = 4;

		var youTubeApi = null,
		    paused = true,
		    ended = false,
		    youTubeIframe = null,
		    volume = 1;

		youtube.options = options;
		youtube.id = mediaElement.id + '_' + options.prefix;
		youtube.mediaElement = mediaElement;

		var props = _mejs2.default.html5media.properties,
		    assignGettersSetters = function assignGettersSetters(propName) {

			var capName = '' + propName.substring(0, 1).toUpperCase() + propName.substring(1);

			youtube['get' + capName] = function () {
				if (youTubeApi !== null) {
					var value = null;

					switch (propName) {
						case 'currentTime':
							return youTubeApi.getCurrentTime();
						case 'duration':
							return youTubeApi.getDuration();
						case 'volume':
							volume = youTubeApi.getVolume() / 100;
							return volume;
						case 'paused':
							return paused;
						case 'ended':
							return ended;
						case 'muted':
							return youTubeApi.isMuted();
						case 'buffered':
							var percentLoaded = youTubeApi.getVideoLoadedFraction(),
							    duration = youTubeApi.getDuration();
							return {
								start: function start() {
									return 0;
								},
								end: function end() {
									return percentLoaded * duration;
								},
								length: 1
							};
						case 'src':
							return youTubeApi.getVideoUrl();
						case 'readyState':
							return readyState;
					}

					return value;
				} else {
					return null;
				}
			};

			youtube['set' + capName] = function (value) {
				if (youTubeApi !== null) {
					switch (propName) {
						case 'src':
							var url = typeof value === 'string' ? value : value[0].src,
							    _videoId = YouTubeApi.getYouTubeId(url);

							if (mediaElement.originalNode.autoplay) {
								youTubeApi.loadVideoById(_videoId);
							} else {
								youTubeApi.cueVideoById(_videoId);
							}
							break;
						case 'currentTime':
							youTubeApi.seekTo(value);
							break;
						case 'muted':
							if (value) {
								youTubeApi.mute();
							} else {
								youTubeApi.unMute();
							}
							setTimeout(function () {
								var event = (0, _general.createEvent)('volumechange', youtube);
								mediaElement.dispatchEvent(event);
							}, 50);
							break;
						case 'volume':
							volume = value;
							youTubeApi.setVolume(value * 100);
							setTimeout(function () {
								var event = (0, _general.createEvent)('volumechange', youtube);
								mediaElement.dispatchEvent(event);
							}, 50);
							break;
						case 'readyState':
							var event = (0, _general.createEvent)('canplay', youtube);
							mediaElement.dispatchEvent(event);
							break;
						default:
							
							break;
					}
				} else {
					apiStack.push({ type: 'set', propName: propName, value: value });
				}
			};
		};

		for (var i = 0, total = props.length; i < total; i++) {
			assignGettersSetters(props[i]);
		}

		var methods = _mejs2.default.html5media.methods,
		    assignMethods = function assignMethods(methodName) {
			youtube[methodName] = function () {
				if (youTubeApi !== null) {
					switch (methodName) {
						case 'play':
							paused = false;
							return youTubeApi.playVideo();
						case 'pause':
							paused = true;
							return youTubeApi.pauseVideo();
						case 'load':
							return null;
					}
				} else {
					apiStack.push({ type: 'call', methodName: methodName });
				}
			};
		};

		for (var _i = 0, _total = methods.length; _i < _total; _i++) {
			assignMethods(methods[_i]);
		}

		var youtubeContainer = _document2.default.createElement('div');
		youtubeContainer.id = youtube.id;

		if (youtube.options.youtube.nocookie) {
			mediaElement.originalNode.setAttribute('src', YouTubeApi.getYouTubeNoCookieUrl(mediaFiles[0].src));
		}

		mediaElement.originalNode.parentNode.insertBefore(youtubeContainer, mediaElement.originalNode);
		mediaElement.originalNode.style.display = 'none';

		var isAudio = mediaElement.originalNode.tagName.toLowerCase() === 'audio',
		    height = isAudio ? '1' : mediaElement.originalNode.height,
		    width = isAudio ? '1' : mediaElement.originalNode.width,
		    videoId = YouTubeApi.getYouTubeId(mediaFiles[0].src),
		    youtubeSettings = {
			id: youtube.id,
			containerId: youtubeContainer.id,
			videoId: videoId,
			height: height,
			width: width,
			playerVars: Object.assign({
				controls: 0,
				rel: 0,
				disablekb: 1,
				showinfo: 0,
				modestbranding: 0,
				html5: 1,
				playsinline: 0,
				start: 0,
				end: 0,
				iv_load_policy: 3
			}, youtube.options.youtube),
			origin: _window2.default.location.host,
			events: {
				onReady: function onReady(e) {
					mediaElement.youTubeApi = youTubeApi = e.target;
					mediaElement.youTubeState = {
						paused: true,
						ended: false
					};

					if (apiStack.length) {
						for (var _i2 = 0, _total2 = apiStack.length; _i2 < _total2; _i2++) {

							var stackItem = apiStack[_i2];

							if (stackItem.type === 'set') {
								var propName = stackItem.propName,
								    capName = '' + propName.substring(0, 1).toUpperCase() + propName.substring(1);

								youtube['set' + capName](stackItem.value);
							} else if (stackItem.type === 'call') {
								youtube[stackItem.methodName]();
							}
						}
					}

					youTubeIframe = youTubeApi.getIframe();

					var events = ['mouseover', 'mouseout'],
					    assignEvents = function assignEvents(e) {

						var newEvent = (0, _general.createEvent)(e.type, youtube);
						mediaElement.dispatchEvent(newEvent);
					};

					for (var _i3 = 0, _total3 = events.length; _i3 < _total3; _i3++) {
						youTubeIframe.addEventListener(events[_i3], assignEvents, false);
					}

					var initEvents = ['rendererready', 'loadeddata', 'loadedmetadata', 'canplay'];

					for (var _i4 = 0, _total4 = initEvents.length; _i4 < _total4; _i4++) {
						var event = (0, _general.createEvent)(initEvents[_i4], youtube);
						mediaElement.dispatchEvent(event);
					}
				},
				onStateChange: function onStateChange(e) {
					var events = [];

					switch (e.data) {
						case -1:
							events = ['loadedmetadata'];
							paused = true;
							ended = false;
							break;
						case 0:
							events = ['ended'];
							paused = false;
							ended = true;
							youtube.stopInterval();
							break;
						case 1:
							events = ['play', 'playing'];
							paused = false;
							ended = false;
							youtube.startInterval();
							break;
						case 2:
							events = ['pause'];
							paused = true;
							ended = false;
							youtube.stopInterval();
							break;
						case 3:
							events = ['progress'];
							ended = false;
							break;
						case 5:
							events = ['loadeddata', 'loadedmetadata', 'canplay'];
							paused = true;
							ended = false;
							break;
					}

					for (var _i5 = 0, _total5 = events.length; _i5 < _total5; _i5++) {
						var event = (0, _general.createEvent)(events[_i5], youtube);
						mediaElement.dispatchEvent(event);
					}
				},
				onError: function onError(e) {
					var event = (0, _general.createEvent)('error', youtube);
					event.data = e.data;
					mediaElement.dispatchEvent(event);
				}
			}
		};

		if (isAudio) {
			youtubeSettings.playerVars.playsinline = 1;
		}

		YouTubeApi.enqueueIframe(youtubeSettings);

		youtube.onEvent = function (eventName, player, _youTubeState) {
			if (_youTubeState !== null && _youTubeState !== undefined) {
				mediaElement.youTubeState = _youTubeState;
			}
		};

		youtube.setSize = function (width, height) {
			if (youTubeApi !== null) {
				youTubeApi.setSize(width, height);
			}
		};
		youtube.hide = function () {
			youtube.stopInterval();
			youtube.pause();
			if (youTubeIframe) {
				youTubeIframe.style.display = 'none';
			}
		};
		youtube.show = function () {
			if (youTubeIframe) {
				youTubeIframe.style.display = '';
			}
		};
		youtube.destroy = function () {
			youTubeApi.destroy();
		};
		youtube.interval = null;

		youtube.startInterval = function () {
			youtube.interval = setInterval(function () {

				var event = (0, _general.createEvent)('timeupdate', youtube);
				mediaElement.dispatchEvent(event);
			}, 250);
		};
		youtube.stopInterval = function () {
			if (youtube.interval) {
				clearInterval(youtube.interval);
			}
		};

		return youtube;
	}
};

if (_window2.default.postMessage && _typeof(_window2.default.addEventListener)) {

	_window2.default.onYouTubePlayerAPIReady = function () {
		YouTubeApi.iFrameReady();
	};

	_media.typeChecks.push(function (url) {
		return (/\/\/(www\.youtube|youtu\.be)/i.test(url) ? 'video/x-youtube' : null
		);
	});

	_renderer.renderer.add(YouTubeIframeRenderer);
}

},{"16":16,"17":17,"18":18,"2":2,"3":3,"6":6,"7":7}],15:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.cancelFullScreen = exports.requestFullScreen = exports.isFullScreen = exports.FULLSCREEN_EVENT_NAME = exports.HAS_NATIVE_FULLSCREEN_ENABLED = exports.HAS_TRUE_NATIVE_FULLSCREEN = exports.HAS_IOS_FULLSCREEN = exports.HAS_MS_NATIVE_FULLSCREEN = exports.HAS_MOZ_NATIVE_FULLSCREEN = exports.HAS_WEBKIT_NATIVE_FULLSCREEN = exports.HAS_NATIVE_FULLSCREEN = exports.SUPPORTS_NATIVE_HLS = exports.SUPPORT_POINTER_EVENTS = exports.HAS_MSE = exports.IS_STOCK_ANDROID = exports.IS_SAFARI = exports.IS_FIREFOX = exports.IS_CHROME = exports.IS_EDGE = exports.IS_IE = exports.IS_ANDROID = exports.IS_IOS = exports.IS_IPHONE = exports.IS_IPAD = exports.UA = exports.NAV = undefined;

var _window = _dereq_(3);

var _window2 = _interopRequireDefault(_window);

var _document = _dereq_(2);

var _document2 = _interopRequireDefault(_document);

var _mejs = _dereq_(6);

var _mejs2 = _interopRequireDefault(_mejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAV = exports.NAV = _window2.default.navigator;
var UA = exports.UA = NAV.userAgent.toLowerCase();
var IS_IPAD = exports.IS_IPAD = /ipad/i.test(UA);
var IS_IPHONE = exports.IS_IPHONE = /iphone/i.test(UA);
var IS_IOS = exports.IS_IOS = IS_IPHONE || IS_IPAD;
var IS_ANDROID = exports.IS_ANDROID = /android/i.test(UA);
var IS_IE = exports.IS_IE = /(trident|microsoft)/i.test(NAV.appName);
var IS_EDGE = exports.IS_EDGE = 'msLaunchUri' in NAV && !('documentMode' in _document2.default);
var IS_CHROME = exports.IS_CHROME = /chrome/i.test(UA);
var IS_FIREFOX = exports.IS_FIREFOX = /firefox/i.test(UA);
var IS_SAFARI = exports.IS_SAFARI = /safari/i.test(UA) && !IS_CHROME;
var IS_STOCK_ANDROID = exports.IS_STOCK_ANDROID = /^mozilla\/\d+\.\d+\s\(linux;\su;/i.test(UA);
var HAS_MSE = exports.HAS_MSE = 'MediaSource' in _window2.default;
var SUPPORT_POINTER_EVENTS = exports.SUPPORT_POINTER_EVENTS = function () {
	var element = _document2.default.createElement('x'),
	    documentElement = _document2.default.documentElement,
	    getComputedStyle = _window2.default.getComputedStyle;

	if (!('pointerEvents' in element.style)) {
		return false;
	}

	element.style.pointerEvents = 'auto';
	element.style.pointerEvents = 'x';
	documentElement.appendChild(element);
	var supports = getComputedStyle && getComputedStyle(element, '').pointerEvents === 'auto';
	element.remove();
	return !!supports;
}();

var html5Elements = ['source', 'track', 'audio', 'video'];
var video = void 0;

for (var i = 0, total = html5Elements.length; i < total; i++) {
	video = _document2.default.createElement(html5Elements[i]);
}

var SUPPORTS_NATIVE_HLS = exports.SUPPORTS_NATIVE_HLS = IS_SAFARI || IS_ANDROID && (IS_CHROME || IS_STOCK_ANDROID) || IS_IE && /edge/i.test(UA);

var hasiOSFullScreen = video.webkitEnterFullscreen !== undefined;

var hasNativeFullscreen = video.requestFullscreen !== undefined;

if (hasiOSFullScreen && /mac os x 10_5/i.test(UA)) {
	hasNativeFullscreen = false;
	hasiOSFullScreen = false;
}

var hasWebkitNativeFullScreen = video.webkitRequestFullScreen !== undefined;
var hasMozNativeFullScreen = video.mozRequestFullScreen !== undefined;
var hasMsNativeFullScreen = video.msRequestFullscreen !== undefined;
var hasTrueNativeFullScreen = hasWebkitNativeFullScreen || hasMozNativeFullScreen || hasMsNativeFullScreen;
var nativeFullScreenEnabled = hasTrueNativeFullScreen;
var fullScreenEventName = '';
var isFullScreen = void 0,
    requestFullScreen = void 0,
    cancelFullScreen = void 0;

if (hasMozNativeFullScreen) {
	nativeFullScreenEnabled = _document2.default.mozFullScreenEnabled;
} else if (hasMsNativeFullScreen) {
	nativeFullScreenEnabled = _document2.default.msFullscreenEnabled;
}

if (IS_CHROME) {
	hasiOSFullScreen = false;
}

if (hasTrueNativeFullScreen) {
	if (hasWebkitNativeFullScreen) {
		fullScreenEventName = 'webkitfullscreenchange';
	} else if (hasMozNativeFullScreen) {
		fullScreenEventName = 'mozfullscreenchange';
	} else if (hasMsNativeFullScreen) {
		fullScreenEventName = 'MSFullscreenChange';
	}

	exports.isFullScreen = isFullScreen = function isFullScreen() {
		if (hasMozNativeFullScreen) {
			return _document2.default.mozFullScreen;
		} else if (hasWebkitNativeFullScreen) {
			return _document2.default.webkitIsFullScreen;
		} else if (hasMsNativeFullScreen) {
			return _document2.default.msFullscreenElement !== null;
		}
	};

	exports.requestFullScreen = requestFullScreen = function requestFullScreen(el) {
		if (hasWebkitNativeFullScreen) {
			el.webkitRequestFullScreen();
		} else if (hasMozNativeFullScreen) {
			el.mozRequestFullScreen();
		} else if (hasMsNativeFullScreen) {
			el.msRequestFullscreen();
		}
	};

	exports.cancelFullScreen = cancelFullScreen = function cancelFullScreen() {
		if (hasWebkitNativeFullScreen) {
			_document2.default.webkitCancelFullScreen();
		} else if (hasMozNativeFullScreen) {
			_document2.default.mozCancelFullScreen();
		} else if (hasMsNativeFullScreen) {
			_document2.default.msExitFullscreen();
		}
	};
}

var HAS_NATIVE_FULLSCREEN = exports.HAS_NATIVE_FULLSCREEN = hasNativeFullscreen;
var HAS_WEBKIT_NATIVE_FULLSCREEN = exports.HAS_WEBKIT_NATIVE_FULLSCREEN = hasWebkitNativeFullScreen;
var HAS_MOZ_NATIVE_FULLSCREEN = exports.HAS_MOZ_NATIVE_FULLSCREEN = hasMozNativeFullScreen;
var HAS_MS_NATIVE_FULLSCREEN = exports.HAS_MS_NATIVE_FULLSCREEN = hasMsNativeFullScreen;
var HAS_IOS_FULLSCREEN = exports.HAS_IOS_FULLSCREEN = hasiOSFullScreen;
var HAS_TRUE_NATIVE_FULLSCREEN = exports.HAS_TRUE_NATIVE_FULLSCREEN = hasTrueNativeFullScreen;
var HAS_NATIVE_FULLSCREEN_ENABLED = exports.HAS_NATIVE_FULLSCREEN_ENABLED = nativeFullScreenEnabled;
var FULLSCREEN_EVENT_NAME = exports.FULLSCREEN_EVENT_NAME = fullScreenEventName;
exports.isFullScreen = isFullScreen;
exports.requestFullScreen = requestFullScreen;
exports.cancelFullScreen = cancelFullScreen;


_mejs2.default.Features = _mejs2.default.Features || {};
_mejs2.default.Features.isiPad = IS_IPAD;
_mejs2.default.Features.isiPhone = IS_IPHONE;
_mejs2.default.Features.isiOS = _mejs2.default.Features.isiPhone || _mejs2.default.Features.isiPad;
_mejs2.default.Features.isAndroid = IS_ANDROID;
_mejs2.default.Features.isIE = IS_IE;
_mejs2.default.Features.isEdge = IS_EDGE;
_mejs2.default.Features.isChrome = IS_CHROME;
_mejs2.default.Features.isFirefox = IS_FIREFOX;
_mejs2.default.Features.isSafari = IS_SAFARI;
_mejs2.default.Features.isStockAndroid = IS_STOCK_ANDROID;
_mejs2.default.Features.hasMSE = HAS_MSE;
_mejs2.default.Features.supportsNativeHLS = SUPPORTS_NATIVE_HLS;
_mejs2.default.Features.supportsPointerEvents = SUPPORT_POINTER_EVENTS;
_mejs2.default.Features.hasiOSFullScreen = HAS_IOS_FULLSCREEN;
_mejs2.default.Features.hasNativeFullscreen = HAS_NATIVE_FULLSCREEN;
_mejs2.default.Features.hasWebkitNativeFullScreen = HAS_WEBKIT_NATIVE_FULLSCREEN;
_mejs2.default.Features.hasMozNativeFullScreen = HAS_MOZ_NATIVE_FULLSCREEN;
_mejs2.default.Features.hasMsNativeFullScreen = HAS_MS_NATIVE_FULLSCREEN;
_mejs2.default.Features.hasTrueNativeFullScreen = HAS_TRUE_NATIVE_FULLSCREEN;
_mejs2.default.Features.nativeFullScreenEnabled = HAS_NATIVE_FULLSCREEN_ENABLED;
_mejs2.default.Features.fullScreenEventName = FULLSCREEN_EVENT_NAME;
_mejs2.default.Features.isFullScreen = isFullScreen;
_mejs2.default.Features.requestFullScreen = requestFullScreen;
_mejs2.default.Features.cancelFullScreen = cancelFullScreen;

},{"2":2,"3":3,"6":6}],16:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.removeClass = exports.addClass = exports.hasClass = undefined;
exports.loadScript = loadScript;
exports.offset = offset;
exports.toggleClass = toggleClass;
exports.fadeOut = fadeOut;
exports.fadeIn = fadeIn;
exports.siblings = siblings;
exports.visible = visible;
exports.ajax = ajax;

var _window = _dereq_(3);

var _window2 = _interopRequireDefault(_window);

var _document = _dereq_(2);

var _document2 = _interopRequireDefault(_document);

var _mejs = _dereq_(6);

var _mejs2 = _interopRequireDefault(_mejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TinyPromise(handler) {
	var thens = [];
	var state = -1;
	var result = void 0;
	var then = void 0;

	function done(value) {
		for (result = value; then = thens.shift();) {
			then[state] && then[state](result);
		}
	}

	handler(function (value) {
		return done(value, state = 0);
	}, function (value) {
		return done(value, state = 1);
	});

	return {
		then: function then() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			~state ? args[state] && args[state](result) : thens.push(args);
		}
	};
}

function loadScript(url) {
	return TinyPromise(function (resolve, reject) {
		var script = _document2.default.createElement('script');
		script.src = url;
		script.async = true;
		script.onload = function () {
			script.remove();
			resolve();
		};
		script.onerror = function () {
			script.remove();
			reject();
		};
		_document2.default.head.appendChild(script);
	});
}

function offset(el) {
	var rect = el.getBoundingClientRect(),
	    scrollLeft = _window2.default.pageXOffset || _document2.default.documentElement.scrollLeft,
	    scrollTop = _window2.default.pageYOffset || _document2.default.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

var hasClassMethod = void 0,
    addClassMethod = void 0,
    removeClassMethod = void 0;

if ('classList' in _document2.default.documentElement) {
	hasClassMethod = function hasClassMethod(el, className) {
		return el.classList !== undefined && el.classList.contains(className);
	};
	addClassMethod = function addClassMethod(el, className) {
		return el.classList.add(className);
	};
	removeClassMethod = function removeClassMethod(el, className) {
		return el.classList.remove(className);
	};
} else {
	hasClassMethod = function hasClassMethod(el, className) {
		return new RegExp('\\b' + className + '\\b').test(el.className);
	};
	addClassMethod = function addClassMethod(el, className) {
		if (!hasClass(el, className)) {
			el.className += ' ' + className;
		}
	};
	removeClassMethod = function removeClassMethod(el, className) {
		el.className = el.className.replace(new RegExp('\\b' + className + '\\b', 'g'), '');
	};
}

var hasClass = exports.hasClass = hasClassMethod;
var addClass = exports.addClass = addClassMethod;
var removeClass = exports.removeClass = removeClassMethod;

function toggleClass(el, className) {
	hasClass(el, className) ? removeClass(el, className) : addClass(el, className);
}

function fadeOut(el) {
	var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 400;
	var callback = arguments[2];

	if (!el.style.opacity) {
		el.style.opacity = 1;
	}

	var start = null;
	_window2.default.requestAnimationFrame(function animate(timestamp) {
		start = start || timestamp;
		var progress = timestamp - start;
		var opacity = parseFloat(1 - progress / duration, 2);
		el.style.opacity = opacity < 0 ? 0 : opacity;
		if (progress > duration) {
			if (callback && typeof callback === 'function') {
				callback();
			}
		} else {
			_window2.default.requestAnimationFrame(animate);
		}
	});
}

function fadeIn(el) {
	var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 400;
	var callback = arguments[2];

	if (!el.style.opacity) {
		el.style.opacity = 0;
	}

	var start = null;
	_window2.default.requestAnimationFrame(function animate(timestamp) {
		start = start || timestamp;
		var progress = timestamp - start;
		var opacity = parseFloat(progress / duration, 2);
		el.style.opacity = opacity > 1 ? 1 : opacity;
		if (progress > duration) {
			if (callback && typeof callback === 'function') {
				callback();
			}
		} else {
			_window2.default.requestAnimationFrame(animate);
		}
	});
}

function siblings(el, filter) {
	var siblings = [];
	el = el.parentNode.firstChild;
	do {
		if (!filter || filter(el)) {
			siblings.push(el);
		}
	} while (el = el.nextSibling);
	return siblings;
}

function visible(elem) {
	return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
}

function ajax(url, dataType, success, error) {
	var xhr = _window2.default.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

	var type = 'application/x-www-form-urlencoded; charset=UTF-8',
	    completed = false,
	    accept = '*/'.concat('*');

	switch (dataType) {
		case 'text':
			type = 'text/plain';
			break;
		case 'json':
			type = 'application/json, text/javascript';
			break;
		case 'html':
			type = 'text/html';
			break;
		case 'xml':
			type = 'application/xml, text/xml';
			break;
	}

	if (type !== 'application/x-www-form-urlencoded') {
		accept = type + ', */*; q=0.01';
	}

	if (xhr) {
		xhr.open('GET', url, true);
		xhr.setRequestHeader('Accept', accept);
		xhr.onreadystatechange = function () {
			if (completed) {
				return;
			}

			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					completed = true;
					var data = void 0;
					switch (dataType) {
						case 'json':
							data = JSON.parse(xhr.responseText);
							break;
						case 'xml':
							data = xhr.responseXML;
							break;
						default:
							data = xhr.responseText;
							break;
					}
					success(data);
				} else if (typeof error === 'function') {
					error(xhr.status);
				}
			}
		};

		xhr.send();
	}
}

_mejs2.default.Utils = _mejs2.default.Utils || {};
_mejs2.default.Utils.offset = offset;
_mejs2.default.Utils.hasClass = hasClass;
_mejs2.default.Utils.addClass = addClass;
_mejs2.default.Utils.removeClass = removeClass;
_mejs2.default.Utils.toggleClass = toggleClass;
_mejs2.default.Utils.fadeIn = fadeIn;
_mejs2.default.Utils.fadeOut = fadeOut;
_mejs2.default.Utils.siblings = siblings;
_mejs2.default.Utils.visible = visible;
_mejs2.default.Utils.ajax = ajax;
_mejs2.default.Utils.loadScript = loadScript;

},{"2":2,"3":3,"6":6}],17:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.escapeHTML = escapeHTML;
exports.debounce = debounce;
exports.isObjectEmpty = isObjectEmpty;
exports.splitEvents = splitEvents;
exports.createEvent = createEvent;
exports.isNodeAfter = isNodeAfter;
exports.isString = isString;

var _mejs = _dereq_(6);

var _mejs2 = _interopRequireDefault(_mejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function escapeHTML(input) {

	if (typeof input !== 'string') {
		throw new Error('Argument passed must be a string');
	}

	var map = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;'
	};

	return input.replace(/[&<>"]/g, function (c) {
		return map[c];
	});
}

function debounce(func, wait) {
	var _this = this,
	    _arguments = arguments;

	var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


	if (typeof func !== 'function') {
		throw new Error('First argument must be a function');
	}

	if (typeof wait !== 'number') {
		throw new Error('Second argument must be a numeric value');
	}

	var timeout = void 0;
	return function () {
		var context = _this,
		    args = _arguments;
		var later = function later() {
			timeout = null;
			if (!immediate) {
				func.apply(context, args);
			}
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);

		if (callNow) {
			func.apply(context, args);
		}
	};
}

function isObjectEmpty(instance) {
	return Object.getOwnPropertyNames(instance).length <= 0;
}

function splitEvents(events, id) {
	var rwindow = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;

	var ret = { d: [], w: [] };
	(events || '').split(' ').forEach(function (v) {
		var eventName = '' + v + (id ? '.' + id : '');

		if (eventName.startsWith('.')) {
			ret.d.push(eventName);
			ret.w.push(eventName);
		} else {
			ret[rwindow.test(v) ? 'w' : 'd'].push(eventName);
		}
	});

	ret.d = ret.d.join(' ');
	ret.w = ret.w.join(' ');
	return ret;
}

function createEvent(eventName, target) {

	if (typeof eventName !== 'string') {
		throw new Error('Event name must be a string');
	}

	var eventFrags = eventName.match(/([a-z]+\.([a-z]+))/i),
	    detail = {
		target: target
	};

	if (eventFrags !== null) {
		eventName = eventFrags[1];
		detail.namespace = eventFrags[2];
	}

	return new window.CustomEvent(eventName, {
		detail: detail
	});
}

function isNodeAfter(sourceNode, targetNode) {

	return !!(sourceNode && targetNode && sourceNode.compareDocumentPosition(targetNode) & 2);
}

function isString(value) {
	return typeof value === 'string';
}

_mejs2.default.Utils = _mejs2.default.Utils || {};
_mejs2.default.Utils.escapeHTML = escapeHTML;
_mejs2.default.Utils.debounce = debounce;
_mejs2.default.Utils.isObjectEmpty = isObjectEmpty;
_mejs2.default.Utils.splitEvents = splitEvents;
_mejs2.default.Utils.createEvent = createEvent;
_mejs2.default.Utils.isNodeAfter = isNodeAfter;
_mejs2.default.Utils.isString = isString;

},{"6":6}],18:[function(_dereq_,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.typeChecks = undefined;
exports.absolutizeUrl = absolutizeUrl;
exports.formatType = formatType;
exports.getMimeFromType = getMimeFromType;
exports.getTypeFromFile = getTypeFromFile;
exports.getExtension = getExtension;
exports.normalizeExtension = normalizeExtension;

var _mejs = _dereq_(6);

var _mejs2 = _interopRequireDefault(_mejs);

var _general = _dereq_(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeChecks = exports.typeChecks = [];

function absolutizeUrl(url) {

	if (typeof url !== 'string') {
		throw new Error('`url` argument must be a string');
	}

	var el = document.createElement('div');
	el.innerHTML = '<a href="' + (0, _general.escapeHTML)(url) + '">x</a>';
	return el.firstChild.href;
}

function formatType(url) {
	var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	return url && !type ? getTypeFromFile(url) : getMimeFromType(type);
}

function getMimeFromType(type) {

	if (typeof type !== 'string') {
		throw new Error('`type` argument must be a string');
	}

	return type && type.indexOf(';') > -1 ? type.substr(0, type.indexOf(';')) : type;
}

function getTypeFromFile(url) {

	if (typeof url !== 'string') {
		throw new Error('`url` argument must be a string');
	}

	for (var i = 0, total = typeChecks.length; i < total; i++) {
		var type = typeChecks[i](url);

		if (type) {
			return type;
		}
	}

	var ext = getExtension(url),
	    normalizedExt = normalizeExtension(ext);

	var mime = 'video/mp4';

	if (normalizedExt) {
		if (~['mp4', 'm4v', 'ogg', 'ogv', 'webm', 'flv', 'mpeg', 'mov'].indexOf(normalizedExt)) {
			mime = 'video/' + normalizedExt;
		} else if (~['mp3', 'oga', 'wav', 'mid', 'midi'].indexOf(normalizedExt)) {
			mime = 'audio/' + normalizedExt;
		}
	}

	return mime;
}

function getExtension(url) {

	if (typeof url !== 'string') {
		throw new Error('`url` argument must be a string');
	}

	var baseUrl = url.split('?')[0],
	    baseName = baseUrl.split('\\').pop().split('/').pop();
	return ~baseName.indexOf('.') ? baseName.substring(baseName.lastIndexOf('.') + 1) : '';
}

function normalizeExtension(extension) {

	if (typeof extension !== 'string') {
		throw new Error('`extension` argument must be a string');
	}

	switch (extension) {
		case 'mp4':
		case 'm4v':
			return 'mp4';
		case 'webm':
		case 'webma':
		case 'webmv':
			return 'webm';
		case 'ogg':
		case 'oga':
		case 'ogv':
			return 'ogg';
		default:
			return extension;
	}
}

_mejs2.default.Utils = _mejs2.default.Utils || {};
_mejs2.default.Utils.typeChecks = typeChecks;
_mejs2.default.Utils.absolutizeUrl = absolutizeUrl;
_mejs2.default.Utils.formatType = formatType;
_mejs2.default.Utils.getMimeFromType = getMimeFromType;
_mejs2.default.Utils.getTypeFromFile = getTypeFromFile;
_mejs2.default.Utils.getExtension = getExtension;
_mejs2.default.Utils.normalizeExtension = normalizeExtension;

},{"17":17,"6":6}],19:[function(_dereq_,module,exports){
'use strict';

var _document = _dereq_(2);

var _document2 = _interopRequireDefault(_document);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (arr) {
	arr.forEach(function (item) {
		if (item.hasOwnProperty('remove')) {
			return;
		}
		Object.defineProperty(item, 'remove', {
			configurable: true,
			enumerable: true,
			writable: true,
			value: function remove() {
				this.parentNode.removeChild(this);
			}
		});
	});
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

(function () {

	if (typeof window.CustomEvent === 'function') {
		return false;
	}

	function CustomEvent(event, params) {
		params = params || { bubbles: false, cancelable: false, detail: undefined };
		var evt = _document2.default.createEvent('CustomEvent');
		evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
		return evt;
	}

	CustomEvent.prototype = window.Event.prototype;
	window.CustomEvent = CustomEvent;
})();

if (typeof Object.assign !== 'function') {
	Object.assign = function (target) {

		if (target === null || target === undefined) {
			throw new TypeError('Cannot convert undefined or null to object');
		}

		var to = Object(target);

		for (var index = 1, total = arguments.length; index < total; index++) {
			var nextSource = arguments[index];

			if (nextSource !== null) {
				for (var nextKey in nextSource) {
					if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
						to[nextKey] = nextSource[nextKey];
					}
				}
			}
		}
		return to;
	};
}

if (!String.prototype.startsWith) {
	String.prototype.startsWith = function (searchString, position) {
		position = position || 0;
		return this.substr(position, searchString.length) === searchString;
	};
}

if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
		var matches = (this.document || this.ownerDocument).querySelectorAll(s),
		    i = matches.length - 1;
		while (--i >= 0 && matches.item(i) !== this) {}
		return i > -1;
	};
}

if (window.Element && !Element.prototype.closest) {
	Element.prototype.closest = function (s) {
		var matches = (this.document || this.ownerDocument).querySelectorAll(s),
		    i = void 0,
		    el = this;
		do {
			i = matches.length;
			while (--i >= 0 && matches.item(i) !== el) {}
		} while (i < 0 && (el = el.parentElement));
		return el;
	};
}

(function () {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback) {
		var currTime = new Date().getTime();
		var timeToCall = Math.max(0, 16 - (currTime - lastTime));
		var id = window.setTimeout(function () {
			callback(currTime + timeToCall);
		}, timeToCall);
		lastTime = currTime + timeToCall;
		return id;
	};

	if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
		clearTimeout(id);
	};
})();

if (/firefox/i.test(navigator.userAgent)) {
	window.mediaElementJsOldGetComputedStyle = window.getComputedStyle;
	window.getComputedStyle = function (el, pseudoEl) {
		var t = window.mediaElementJsOldGetComputedStyle(el, pseudoEl);
		return t === null ? { getPropertyValue: function getPropertyValue() {} } : t;
	};
}

},{"2":2}]},{},[19,5,4,8,13,10,9,11,12,14]);
