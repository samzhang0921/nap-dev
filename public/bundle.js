webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(83);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('main'));

/***/ }),

/***/ 102:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wraper":"App__wraper___2xg1l"};

/***/ }),

/***/ 103:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"CatFilterList":"CategoryFilter__CatFilterList___3RMlI DesignerFilter__DesignerFilter___3IC8T"};

/***/ }),

/***/ 104:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"filterItem":"Category__filterItem___2E4dv"};

/***/ }),

/***/ 105:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"ColorFilter":"ColorFilter__ColorFilter___3lCD3 DesignerFilter__DesignerFilter___3IC8T","clearFilter":"ColorFilter__clearFilter___3jByB DesignerFilter__clearFilter___2CByy","filterCheckbox":"ColorFilter__filterCheckbox___pAjmx Designer__filterCheckbox___3oABo","colorName":"ColorFilter__colorName___3o1dV Designer__designer___3M014"};

/***/ }),

/***/ 106:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"DesignerFilter":"DesignerFilter__DesignerFilter___3IC8T","clearFilter":"DesignerFilter__clearFilter___2CByy","scrollPanel":"DesignerFilter__scrollPanel___2QwvQ"};

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"noSelected":"Designer__noSelected___3_VMm","filterCheckbox":"Designer__filterCheckbox___3oABo","filterCheckedbox":"Designer__filterCheckedbox___2wSfG Designer__filterCheckbox___3oABo","checkBox":"Designer__checkBox___wh5vk","designer":"Designer__designer___3M014"};

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"headerContainer":"header__headerContainer___1-Y0z"};

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"pagenationBox":"ListPagination__pagenationBox___lAVm6","pagenationBoxUl":"ListPagination__pagenationBoxUl___2Y-wV"};

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"sortBy":"ListSort__sortBy___2CWgv"};

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"ListTitleAndTotal":"ListTitleAndTotal__ListTitleAndTotal___1o1Zg","resultsBox":"ListTitleAndTotal__resultsBox___9SwZV"};

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"ListViewAndSort":"ListViewAndSort__ListViewAndSort___n9G35"};

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"ListView":"ListView__ListView___16-Qf"};

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"MainBlock":"MainBlock__MainBlock___1qRL8","clear":"MainBlock__clear___1vuT9"};

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"pagenationBoxLi":"PageNumber__pagenationBoxLi___2v3AQ","pagenationBoxCurrentPage":"PageNumber__pagenationBoxCurrentPage___azGUJ","pagination-dot":"PageNumber__pagination-dot___2Yuzd","pagination--1":"PageNumber__pagination--1___3M6qH","pagination-0":"PageNumber__pagination-0___13NEa"};

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"listItem":"Product__listItem___15U1D","productImage":"Product__productImage___3KNF6","productInfo":"Product__productInfo___3nx8b","designer":"Product__designer___KwTQY"};

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"productsList":"ProductsList__productsList___21Jwk","loading":"ProductsList__loading___21UkL"};

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"sideFilter":"SideFilter__sideFilter___1NJoG"};

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(219);
module.exports = self.fetch.bind(self);


/***/ }),

/***/ 219:
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _isomorphicFetch = __webpack_require__(133);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _Header = __webpack_require__(89);

var _Header2 = _interopRequireDefault(_Header);

var _MainBlock = __webpack_require__(95);

var _MainBlock2 = _interopRequireDefault(_MainBlock);

var _App = __webpack_require__(102);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      data: {},
      productViewChecked: false,
      designerListRefresh: false,
      offset: 0,
      sort: 'sort',
      cat: 0,
      designerList: [],
      colorList: []

    };
    _this.changeProductsView = _this.changeProductsView.bind(_this);
    _this.updateOffset = _this.updateOffset.bind(_this);
    _this.updateCategory = _this.updateCategory.bind(_this);
    _this.updateSort = _this.updateSort.bind(_this);
    _this.updateDesignerList = _this.updateDesignerList.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      console.log('componentDidMount');
      var url = 'http://127.0.0.1:3000/api/en/shop';
      (0, _isomorphicFetch2.default)(url).then(function (res) {
        return res.json();
      }).then(function (res) {
        _this2.setState({
          data: res
        });
      });
    }
  }, {
    key: 'updateSort',
    value: function updateSort(newSort) {
      var _this3 = this;

      this.setState({
        sort: newSort
      });
      console.log(newSort);
      var sort = newSort === 'sort' ? '' : 'sort=' + newSort + '&';
      var cat = this.state.cat === 0 ? '' : 'cat=' + this.state.cat + '&';
      var designerList = this.state.designerList.length === 0 ? '' : 'brand=' + this.state.designerList.toString() + '&';
      var colorList = this.state.colorList.length === 0 ? '' : 'color=' + this.state.colorList.toString() + '&';
      var offset = this.state.offset === 0 ? '' : 'offset=' + this.state.offset;
      var url = "http://127.0.0.1:3000/api/en/shop?" + sort + cat + designerList + colorList + offset;
      console.log(url);
      (0, _isomorphicFetch2.default)(url).then(function (res) {
        return res.json();
      }).then(function (res) {
        _this3.setState({
          data: res
        });
      });
    }
  }, {
    key: 'updateCategory',
    value: function updateCategory(newCategory) {
      var _this4 = this;

      this.setState({
        sort: 'sort',
        cat: newCategory,
        offset: 0,
        designerList: [],
        colorList: []
      });
      var cat = newCategory === 0 ? '' : 'cat=' + newCategory + '&';
      var url = "http://127.0.0.1:3000/api/en/shop?" + cat;
      console.log(url);
      (0, _isomorphicFetch2.default)(url).then(function (res) {
        return res.json();
      }).then(function (res) {
        _this4.setState({
          data: res,
          designerListRefresh: !_this4.state.designerListRefresh
        });
      });
    }
  }, {
    key: 'updateDesignerList',
    value: function updateDesignerList(updateDesigner) {
      var _this5 = this;

      var updateDesignerList = [];
      if (updateDesigner === 0) {
        this.setState({
          designerList: []
        });
      } else {
        var index = this.state.designerList.indexOf(updateDesigner);
        if (index > -1) {
          this.state.designerList.splice(index, 1);
          updateDesignerList = this.state.designerList;
          this.setState({
            designerList: updateDesignerList
          });
        } else {
          console.log("this.state.designerList", this.state.designerList);
          console.log("push", updateDesigner);
          this.state.designerList.push(updateDesigner);
          updateDesignerList = this.state.designerList;
          this.setState({
            designerList: updateDesignerList
          });
        }
      }
      var sort = this.state.sort === 'sort' ? '' : 'sort=' + this.state.sort + '&';
      var cat = this.state.cat === 0 ? '' : 'cat=' + this.state.cat + '&';
      var designerList = updateDesignerList.length === 0 ? '' : 'brand=' + updateDesignerList.toString() + '&';
      var colorList = this.state.colorList.length === 0 ? '' : 'color=' + this.state.colorList.toString() + '&';
      var offset = this.state.offset === 0 ? '' : 'offset=' + this.state.offset;
      var url = "http://127.0.0.1:3000/api/en/shop?" + sort + cat + designerList + colorList + offset;
      console.log(url);
      (0, _isomorphicFetch2.default)(url).then(function (res) {
        return res.json();
      }).then(function (res) {
        _this5.setState({
          data: res
        });
      });
    }
  }, {
    key: 'updateOffset',
    value: function updateOffset(newOffset) {
      var _this6 = this;

      this.setState({
        offset: newOffset
      });
      var offset = newOffset === 0 ? '' : 'offset=' + newOffset;
      var sort = this.state.sort === 'sort' ? '' : 'sort=' + this.state.sort + '&';
      var cat = this.state.cat === 0 ? '' : 'cat=' + this.state.cat + '&';
      var designerList = this.state.designerList.length === 0 ? '' : 'brand=' + this.state.designerList.toString() + '&';
      var colorList = this.state.colorList.length === 0 ? '' : 'color=' + this.state.colorList.toString() + '&';
      var url = "http://127.0.0.1:3000/api/en/shop?" + sort + cat + designerList + colorList + offset;
      console.log(url);
      (0, _isomorphicFetch2.default)(url).then(function (res) {
        return res.json();
      }).then(function (res) {
        _this6.setState({
          data: res
        });
      });
    }
  }, {
    key: 'changeProductsView',
    value: function changeProductsView(productViewChecked) {
      this.setState({ productViewChecked: productViewChecked });
    }
  }, {
    key: 'render',
    value: function render() {
      var totalPage = Math.ceil(this.state.data.total / this.state.data.limit);
      var currentPage = parseInt(Math.floor(this.state.data.offset / this.state.data.limit)) + 1;
      return _react2.default.createElement(
        'div',
        { className: _App2.default.wraper },
        _react2.default.createElement(_Header2.default, {
          offset: this.state.data.offset,
          limit: this.state.data.limit,
          total: this.state.data.total,
          totalPage: totalPage,
          currentPage: currentPage,
          changeProductsView: this.changeProductsView,
          updateOffset: this.updateOffset,
          updateSort: this.updateSort
        }),
        _react2.default.createElement(_MainBlock2.default, {
          data: this.state.data,
          productViewChecked: this.state.productViewChecked,
          updateCategory: this.updateCategory,
          updateDesignerList: this.updateDesignerList,
          designerListRefresh: this.state.designerListRefresh
        })
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _CategoryFilter = __webpack_require__(103);

var _CategoryFilter2 = _interopRequireDefault(_CategoryFilter);

var _Category = __webpack_require__(85);

var _Category2 = _interopRequireDefault(_Category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CategoryFilter = function (_React$Component) {
  _inherits(CategoryFilter, _React$Component);

  function CategoryFilter(props) {
    _classCallCheck(this, CategoryFilter);

    var _this = _possibleConstructorReturn(this, (CategoryFilter.__proto__ || Object.getPrototypeOf(CategoryFilter)).call(this, props));

    _this.state = {
      categoryList: [{
        id: 0,
        name: 'Clothing'
      }, {
        id: 40,
        name: 'Beachwear'
      }, {
        id: 48,
        name: 'Coat'
      }, {
        id: 46,
        name: 'Dress'
      }, {
        id: 44,
        name: 'Jackets'
      }, {
        id: 55,
        name: 'Jeans'
      }, {
        id: 42,
        name: 'Pants'
      }, {
        id: 39,
        name: 'Top'
      }, {
        id: 49,
        name: 'Wrap'
      }]

    };
    return _this;
  }

  _createClass(CategoryFilter, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: _CategoryFilter2.default.CatFilterList },
        this.state.categoryList.map(function (cat) {
          return _react2.default.createElement(_Category2.default, { key: cat.id, Category: cat, updateCategory: _this2.props.updateCategory });
        })
      );
    }
  }]);

  return CategoryFilter;
}(_react2.default.Component);

exports.default = CategoryFilter;

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _Category = __webpack_require__(104);

var _Category2 = _interopRequireDefault(_Category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Category = function (_React$Component) {
  _inherits(Category, _React$Component);

  function Category(props) {
    _classCallCheck(this, Category);

    var _this = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this, props));

    _this.getCategory = _this.getCategory.bind(_this);
    return _this;
  }

  _createClass(Category, [{
    key: 'getCategory',
    value: function getCategory(newCategory) {
      this.props.updateCategory(newCategory);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: _Category2.default.filterItem, 'data-category-id': this.props.Category.id, onClick: function onClick() {
            return _this2.getCategory(_this2.props.Category.id);
          } },
        this.props.Category.name
      );
    }
  }]);

  return Category;
}(_react2.default.Component);

exports.default = Category;

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _ColorFilter = __webpack_require__(105);

var _ColorFilter2 = _interopRequireDefault(_ColorFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorFilter = function ColorFilter(props) {
  return _react2.default.createElement(
    'div',
    { className: _ColorFilter2.default.ColorFilter },
    _react2.default.createElement(
      'h4',
      null,
      'COLOR'
    ),
    _react2.default.createElement(
      'a',
      { className: _ColorFilter2.default.clearFilter, href: '?' },
      'Clear'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        { 'data-colour-id': '1001', className: 'not-selected' },
        _react2.default.createElement('span', { className: _ColorFilter2.default.filterCheckbox }),
        _react2.default.createElement(
          'span',
          { className: _ColorFilter2.default.colorName },
          'Animal print'
        ),
        _react2.default.createElement('div', { className: 'clear' })
      ),
      _react2.default.createElement(
        'li',
        { 'data-colour-id': '2', className: 'not-selected' },
        _react2.default.createElement('span', { className: _ColorFilter2.default.filterCheckbox }),
        _react2.default.createElement(
          'span',
          { className: _ColorFilter2.default.colorName },
          'Black'
        ),
        _react2.default.createElement('div', { className: 'clear' })
      ),
      _react2.default.createElement(
        'li',
        { 'data-colour-id': '3', className: 'not-selected' },
        _react2.default.createElement('span', { className: _ColorFilter2.default.filterCheckbox }),
        _react2.default.createElement(
          'span',
          { className: _ColorFilter2.default.colorName },
          'Blue'
        ),
        _react2.default.createElement('div', { className: 'clear' })
      ),
      _react2.default.createElement(
        'li',
        { 'data-colour-id': '6', className: 'not-selected' },
        _react2.default.createElement('span', { className: _ColorFilter2.default.filterCheckbox }),
        _react2.default.createElement(
          'span',
          { className: _ColorFilter2.default.colorName },
          'Brown'
        ),
        _react2.default.createElement('div', { className: 'clear' })
      ),
      _react2.default.createElement(
        'li',
        { 'data-colour-id': '7', className: 'not-selected' },
        _react2.default.createElement('span', { className: _ColorFilter2.default.filterCheckbox }),
        _react2.default.createElement(
          'span',
          { className: _ColorFilter2.default.colorName },
          'Burgundy'
        ),
        _react2.default.createElement('div', { className: 'clear' })
      ),
      _react2.default.createElement(
        'li',
        { 'data-colour-id': '17', className: 'not-selected' },
        _react2.default.createElement('span', { className: _ColorFilter2.default.filterCheckbox }),
        _react2.default.createElement(
          'span',
          { className: _ColorFilter2.default.colorName },
          'Gold'
        ),
        _react2.default.createElement('div', { className: 'clear' })
      ),
      _react2.default.createElement(
        'li',
        { 'data-colour-id': '18', className: 'not-selected' },
        _react2.default.createElement('span', { className: _ColorFilter2.default.filterCheckbox }),
        _react2.default.createElement(
          'span',
          { className: _ColorFilter2.default.colorName },
          'Gray'
        ),
        _react2.default.createElement('div', { className: 'clear' })
      ),
      _react2.default.createElement(
        'li',
        { 'data-colour-id': '19', className: 'not-selected' },
        _react2.default.createElement('span', { className: _ColorFilter2.default.filterCheckbox }),
        _react2.default.createElement(
          'span',
          { className: _ColorFilter2.default.colorName },
          'Green'
        ),
        _react2.default.createElement('div', { className: 'clear' })
      ),
      _react2.default.createElement(
        'li',
        { 'data-colour-id': '104', className: 'not-selected' },
        _react2.default.createElement('span', { className: _ColorFilter2.default.filterCheckbox }),
        _react2.default.createElement(
          'span',
          { className: _ColorFilter2.default.colorName },
          'Metallic'
        ),
        _react2.default.createElement('div', { className: 'clear' })
      ),
      _react2.default.createElement(
        'li',
        { 'data-colour-id': '1002', className: 'not-selected' },
        _react2.default.createElement('span', { className: _ColorFilter2.default.filterCheckbox }),
        _react2.default.createElement(
          'span',
          { className: _ColorFilter2.default.colorName },
          'Neutrals'
        ),
        _react2.default.createElement('div', { className: 'clear' })
      ),
      _react2.default.createElement(
        'li',
        { 'data-colour-id': '31', className: 'not-selected' },
        _react2.default.createElement('span', { className: _ColorFilter2.default.filterCheckbox }),
        _react2.default.createElement(
          'span',
          { className: _ColorFilter2.default.colorName },
          'Orange'
        ),
        _react2.default.createElement('div', { className: 'clear' })
      ),
      _react2.default.createElement(
        'li',
        { 'data-colour-id': '33', className: 'not-selected' },
        _react2.default.createElement('span', { className: _ColorFilter2.default.filterCheckbox }),
        _react2.default.createElement(
          'span',
          { className: _ColorFilter2.default.colorName },
          'Pink'
        ),
        _react2.default.createElement('div', { className: 'clear' })
      ),
      _react2.default.createElement(
        'li',
        { 'data-colour-id': '36', className: 'not-selected' },
        _react2.default.createElement('span', { className: _ColorFilter2.default.filterCheckbox }),
        _react2.default.createElement(
          'span',
          { className: _ColorFilter2.default.colorName },
          'Purple'
        ),
        _react2.default.createElement('div', { className: 'clear' })
      ),
      _react2.default.createElement(
        'li',
        { 'data-colour-id': '37', className: 'not-selected' },
        _react2.default.createElement('span', { className: _ColorFilter2.default.filterCheckbox }),
        _react2.default.createElement(
          'span',
          { className: _ColorFilter2.default.colorName },
          'Red'
        ),
        _react2.default.createElement('div', { className: 'clear' })
      ),
      _react2.default.createElement(
        'li',
        { 'data-colour-id': '69', className: 'not-selected' },
        _react2.default.createElement('span', { className: _ColorFilter2.default.filterCheckbox }),
        _react2.default.createElement(
          'span',
          { className: _ColorFilter2.default.colorName },
          'Silver'
        ),
        _react2.default.createElement('div', { className: 'clear' })
      ),
      _react2.default.createElement(
        'li',
        { 'data-colour-id': '43', className: 'not-selected' },
        _react2.default.createElement('span', { className: _ColorFilter2.default.filterCheckbox }),
        _react2.default.createElement(
          'span',
          { className: _ColorFilter2.default.colorName },
          'White'
        ),
        _react2.default.createElement('div', { className: 'clear' })
      ),
      _react2.default.createElement(
        'li',
        { 'data-colour-id': '44', className: 'not-selected' },
        _react2.default.createElement('span', { className: _ColorFilter2.default.filterCheckbox }),
        _react2.default.createElement(
          'span',
          { className: _ColorFilter2.default.colorName },
          'Yellow'
        ),
        _react2.default.createElement('div', { className: 'clear' })
      )
    )
  );
};

exports.default = ColorFilter;

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _DesignerFilter = __webpack_require__(106);

var _DesignerFilter2 = _interopRequireDefault(_DesignerFilter);

var _Designer = __webpack_require__(88);

var _Designer2 = _interopRequireDefault(_Designer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DesignerFilter = function (_React$Component) {
  _inherits(DesignerFilter, _React$Component);

  function DesignerFilter(props) {
    _classCallCheck(this, DesignerFilter);

    var _this = _possibleConstructorReturn(this, (DesignerFilter.__proto__ || Object.getPrototypeOf(DesignerFilter)).call(this, props));

    _this.state = {
      clearClicked: false
    };
    _this.clearDesigner = _this.clearDesigner.bind(_this);
    return _this;
  }

  _createClass(DesignerFilter, [{
    key: 'clearDesigner',
    value: function clearDesigner() {
      var clearClicked = this.state.clearClicked;

      this.setState({
        clearClicked: !clearClicked
      });
      this.props.updateDesignerList(0);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (this.props.designerListRefresh !== nextProps.designerListRefresh) {
        this.setState({
          clearClicked: !this.state.clearClicked
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.designerList) {
        return _react2.default.createElement(
          'div',
          { className: _DesignerFilter2.default.DesignerFilter },
          'Loading'
        );
      };
      var designerList = this.props.designerList;
      return _react2.default.createElement(
        'div',
        { className: _DesignerFilter2.default.DesignerFilter },
        _react2.default.createElement(
          'h4',
          null,
          'Designer'
        ),
        _react2.default.createElement(
          'a',
          { className: _DesignerFilter2.default.clearFilter, onClick: function onClick() {
              return _this2.clearDesigner();
            } },
          'Clear'
        ),
        _react2.default.createElement(
          'ul',
          { className: _DesignerFilter2.default.scrollPanel },
          designerList.map(function (designer) {
            return _react2.default.createElement(_Designer2.default, {
              key: designer.id,
              designerName: designer.name.en,
              designerId: designer.id,
              updateDesignerList: _this2.props.updateDesignerList
              // select = {this.state.select}
              , clearClicked: _this2.state.clearClicked
            });
          })
        )
      );
    }
  }]);

  return DesignerFilter;
}(_react2.default.Component);

exports.default = DesignerFilter;

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _Designer = __webpack_require__(107);

var _Designer2 = _interopRequireDefault(_Designer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Designer = function (_React$Component) {
  _inherits(Designer, _React$Component);

  function Designer(props) {
    _classCallCheck(this, Designer);

    var _this = _possibleConstructorReturn(this, (Designer.__proto__ || Object.getPrototypeOf(Designer)).call(this, props));

    _this.state = {
      selectBox: false
    };
    _this.getDesigner = _this.getDesigner.bind(_this);
    return _this;
  }

  // shouldComponentUpdate (nextProps, nextState){
  //   return nextState.selectBox !== nextProps.clearClicked ;
  // }


  _createClass(Designer, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (this.props.clearClicked !== nextProps.clearClicked) {
        this.setState({
          selectBox: false
        });
      }
    }
  }, {
    key: 'getDesigner',
    value: function getDesigner(designer) {
      var selectBox = this.state.selectBox;

      this.setState({
        selectBox: !selectBox
      });
      this.props.updateDesignerList(designer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var checkBox = this.state.selectBox ? _Designer2.default.filterCheckedbox : _Designer2.default.filterCheckbox;
      return _react2.default.createElement(
        'li',
        { 'data-designer-id': this.props.designerId, onClick: function onClick() {
            return _this2.getDesigner(_this2.props.designerId);
          } },
        _react2.default.createElement('span', { className: checkBox }),
        _react2.default.createElement(
          'div',
          { className: _Designer2.default.designer },
          _react2.default.createElement(
            'span',
            null,
            this.props.designerName
          )
        ),
        _react2.default.createElement('div', null)
      );
    }
  }]);

  return Designer;
}(_react2.default.Component);

exports.default = Designer;

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(108);

var _header2 = _interopRequireDefault(_header);

var _ListViewAndSort = __webpack_require__(93);

var _ListViewAndSort2 = _interopRequireDefault(_ListViewAndSort);

var _ListTitleAndTotal = __webpack_require__(92);

var _ListTitleAndTotal2 = _interopRequireDefault(_ListTitleAndTotal);

var _ListPagination = __webpack_require__(90);

var _ListPagination2 = _interopRequireDefault(_ListPagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {

  return _react2.default.createElement(
    'div',
    { className: _header2.default.headerContainer },
    _react2.default.createElement(_ListViewAndSort2.default, { totalPage: props.totalPage, currentPage: props.currentPage, changeProductsView: props.changeProductsView, updateSort: props.updateSort }),
    _react2.default.createElement(_ListTitleAndTotal2.default, { total: props.total }),
    _react2.default.createElement(_ListPagination2.default, { totalPage: props.totalPage, currentPage: props.currentPage, updateOffset: props.updateOffset })
  );
};

exports.default = Header;

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _ListPagination = __webpack_require__(109);

var _ListPagination2 = _interopRequireDefault(_ListPagination);

var _PageNumber = __webpack_require__(96);

var _PageNumber2 = _interopRequireDefault(_PageNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListPagination = function (_React$Component) {
  _inherits(ListPagination, _React$Component);

  function ListPagination(props) {
    _classCallCheck(this, ListPagination);

    var _this = _possibleConstructorReturn(this, (ListPagination.__proto__ || Object.getPrototypeOf(ListPagination)).call(this, props));

    _this.state = {
      data: {}
    };
    _this.getPagenation = _this.getPagenation.bind(_this);

    return _this;
  }

  _createClass(ListPagination, [{
    key: 'getPagenation',
    value: function getPagenation(currentPage, totalPage) {
      var pagenationArray = [];

      if (totalPage <= 5) {
        pagenationArray.push(-1);
        for (var i = 1; i <= totalPage; i++) {
          pagenationArray.push(i);
        }
        pagenationArray.push(0);
        0;
      } else {
        if (currentPage <= 3) {
          pagenationArray.push(-1);
          for (var _i = 1; _i <= 3; _i++) {
            pagenationArray.push(_i);
          }
          pagenationArray.push("...");
          pagenationArray.push(totalPage);
          pagenationArray.push(0);
        } else {
          if (currentPage > 3 && currentPage < totalPage - 2) {
            pagenationArray.push(-1);
            pagenationArray.push(1);
            pagenationArray.push("...");
            pagenationArray.push(currentPage - 1);
            pagenationArray.push(currentPage);
            pagenationArray.push(currentPage + 1);
            pagenationArray.push("...");
            pagenationArray.push(totalPage);
            pagenationArray.push(0);
          } else {
            pagenationArray.push(-1);
            pagenationArray.push(1);
            pagenationArray.push("...");
            for (var _i2 = totalPage - 2; _i2 <= totalPage; _i2++) {
              pagenationArray.push(_i2);
            }
            pagenationArray.push(0);
          }
        }
      }
      // console.log(pagenationArray);
      return pagenationArray;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.totalPage === 1) {
        return _react2.default.createElement('div', { className: _ListPagination2.default.pagenationBox });
      };
      var pagenations = this.getPagenation(this.props.currentPage, this.props.totalPage);
      return _react2.default.createElement(
        'div',
        { className: _ListPagination2.default.pagenationBox },
        _react2.default.createElement(
          'ul',
          { className: _ListPagination2.default.pagenationBoxUl },
          pagenations.map(function (pagenation, index) {
            return _react2.default.createElement(_PageNumber2.default, { key: index, page: pagenation, currentPage: _this2.props.currentPage, totalPage: _this2.props.totalPage, updateOffset: _this2.props.updateOffset });
          })
        )
      );
    }
  }]);

  return ListPagination;
}(_react2.default.Component);

exports.default = ListPagination;

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _ListSort = __webpack_require__(110);

var _ListSort2 = _interopRequireDefault(_ListSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListSort = function (_React$Component) {
  _inherits(ListSort, _React$Component);

  function ListSort(props) {
    _classCallCheck(this, ListSort);

    var _this = _possibleConstructorReturn(this, (ListSort.__proto__ || Object.getPrototypeOf(ListSort)).call(this, props));

    _this.getSort = _this.getSort.bind(_this);
    return _this;
  }

  _createClass(ListSort, [{
    key: 'getSort',
    value: function getSort(event) {
      this.props.updateSort(event.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _ListSort2.default.sortBy },
        _react2.default.createElement(
          'select',
          { name: 'sortOrder', onChange: this.getSort },
          _react2.default.createElement(
            'option',
            { value: 'sort' },
            'Sort by'
          ),
          _react2.default.createElement(
            'option',
            { value: 'low' },
            'Price Low to High'
          ),
          _react2.default.createElement(
            'option',
            { value: 'high' },
            'Price High to Low'
          )
        )
      );
    }
  }]);

  return ListSort;
}(_react2.default.Component);

exports.default = ListSort;

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _ListTitleAndTotal = __webpack_require__(111);

var _ListTitleAndTotal2 = _interopRequireDefault(_ListTitleAndTotal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListTitleAndTotal = function ListTitleAndTotal(props) {
  return _react2.default.createElement(
    'div',
    { className: _ListTitleAndTotal2.default.ListTitleAndTotal },
    _react2.default.createElement(
      'h1',
      null,
      'what\'s new'
    ),
    _react2.default.createElement(
      'div',
      { className: _ListTitleAndTotal2.default.resultBox },
      _react2.default.createElement(
        'div',
        { className: _ListTitleAndTotal2.default.resultsBox },
        _react2.default.createElement(
          'span',
          null,
          props.total,
          '\xA0Results'
        )
      )
    )
  );
};

exports.default = ListTitleAndTotal;

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _ListViewAndSort = __webpack_require__(112);

var _ListViewAndSort2 = _interopRequireDefault(_ListViewAndSort);

var _ListView = __webpack_require__(94);

var _ListView2 = _interopRequireDefault(_ListView);

var _ListSort = __webpack_require__(91);

var _ListSort2 = _interopRequireDefault(_ListSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListViewAndSort = function ListViewAndSort(props) {
  return _react2.default.createElement(
    'div',
    { className: _ListViewAndSort2.default.ListViewAndSort },
    _react2.default.createElement(_ListView2.default, { changeProductsView: props.changeProductsView }),
    _react2.default.createElement(_ListSort2.default, { updateSort: props.updateSort })
  );
};

exports.default = ListViewAndSort;

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _ListView = __webpack_require__(113);

var _ListView2 = _interopRequireDefault(_ListView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListView = function (_React$Component) {
  _inherits(ListView, _React$Component);

  function ListView(props) {
    _classCallCheck(this, ListView);

    var _this = _possibleConstructorReturn(this, (ListView.__proto__ || Object.getPrototypeOf(ListView)).call(this, props));

    _this.state = {
      buttonClicked: false
    };

    _this.changeListView = _this.changeListView.bind(_this);
    return _this;
  }

  _createClass(ListView, [{
    key: 'changeListView',
    value: function changeListView(buttonClicked) {
      this.setState({
        buttonClicked: !buttonClicked
      });
      this.props.changeProductsView(!buttonClicked);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var buttonText = this.state.buttonClicked ? 'Outfit View' : 'Product View';
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { className: _ListView2.default.ListView, onClick: function onClick() {
              return _this2.changeListView(_this2.state.buttonClicked);
            } },
          buttonText
        )
      );
    }
  }]);

  return ListView;
}(_react2.default.Component);

exports.default = ListView;

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _MainBlock = __webpack_require__(114);

var _MainBlock2 = _interopRequireDefault(_MainBlock);

var _SideFilter = __webpack_require__(99);

var _SideFilter2 = _interopRequireDefault(_SideFilter);

var _ProductsList = __webpack_require__(98);

var _ProductsList2 = _interopRequireDefault(_ProductsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainBlock = function MainBlock(props) {
  return _react2.default.createElement(
    'div',
    { className: _MainBlock2.default.MainBlock },
    _react2.default.createElement(_SideFilter2.default, {
      designerList: props.data.designers,
      updateCategory: props.updateCategory,
      updateDesignerList: props.updateDesignerList,
      designerListRefresh: props.designerListRefresh
    }),
    _react2.default.createElement(_ProductsList2.default, {
      productViewChecked: props.productViewChecked,
      data: props.data
    }),
    _react2.default.createElement('div', { className: _MainBlock2.default.clear })
  );
};
exports.default = MainBlock;

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _PageNumber = __webpack_require__(115);

var _PageNumber2 = _interopRequireDefault(_PageNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageNumber = function (_React$Component) {
  _inherits(PageNumber, _React$Component);

  function PageNumber(props) {
    _classCallCheck(this, PageNumber);

    var _this = _possibleConstructorReturn(this, (PageNumber.__proto__ || Object.getPrototypeOf(PageNumber)).call(this, props));

    _this.state = {};
    _this.changePage = _this.changePage.bind(_this);
    return _this;
  }

  _createClass(PageNumber, [{
    key: 'changePage',
    value: function changePage(page) {
      if (page < 0) {
        var npage = this.props.currentPage === 1 ? 0 : (this.props.currentPage - 2) * 60;
        this.props.updateOffset(npage);
      } else if (page === 0) {
        var _npage = this.props.currentPage === this.props.totalPage ? (this.props.totalPage - 1) * 60 : this.props.currentPage * 60;
        this.props.updateOffset(_npage);
      } else if (page > 0) {
        this.props.updateOffset((this.props.page - 1) * 60);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var arrow = this.props.page <= 0 ? '' : this.props.page;

      var dot = isNaN(this.props.page) ? 'dot' : this.props.page;
      return this.props.page === this.props.currentPage ? _react2.default.createElement(
        'li',
        { onClick: function onClick() {
            return _this2.changePage(_this2.props.page);
          }, className: _PageNumber2.default.pagenationBoxCurrentPage },
        _react2.default.createElement(
          'span',
          null,
          this.props.currentPage
        )
      ) : _react2.default.createElement(
        'li',
        { onClick: function onClick() {
            return _this2.changePage(_this2.props.page);
          }, className: [_PageNumber2.default['pagination-' + dot], _PageNumber2.default.pagenationBoxLi].join(" ") },
        _react2.default.createElement(
          'span',
          null,
          arrow
        )
      );
    }
  }]);

  return PageNumber;
}(_react2.default.Component);

exports.default = PageNumber;

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _Product = __webpack_require__(116);

var _Product2 = _interopRequireDefault(_Product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Product = function (_React$Component) {
  _inherits(Product, _React$Component);

  function Product(props) {
    _classCallCheck(this, Product);

    var _this = _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).call(this, props));

    _this.state = {
      mouseOver: false
    };
    _this.toggleImage = _this.toggleImage.bind(_this);
    return _this;
  }

  _createClass(Product, [{
    key: 'toggleImage',
    value: function toggleImage() {
      var mouseOver = this.state.mouseOver;

      this.setState({
        mouseOver: !mouseOver
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var pview = this.state.mouseOver ? this.props.outfit : this.props.pview;
      var outfit = this.state.mouseOver ? this.props.pview : this.props.outfit;
      var finalImageUrl = this.props.productViewChecked ? pview : outfit;
      return _react2.default.createElement(
        'li',
        { className: _Product2.default.listItem },
        _react2.default.createElement(
          'div',
          { onMouseEnter: this.toggleImage, onMouseLeave: this.toggleImage, className: _Product2.default.productImage },
          _react2.default.createElement(
            'a',
            { href: '/product/' + this.props.product.sku },
            _react2.default.createElement('img', { src: finalImageUrl })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _Product2.default.productInfo },
          _react2.default.createElement(
            'a',
            { href: '/product/' + this.props.product.sku },
            _react2.default.createElement(
              'span',
              { className: _Product2.default.designer },
              this.props.product.brand_name
            )
          ),
          _react2.default.createElement('br', null),
          this.props.product.name,
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'span',
            null,
            this.props.product.price
          ),
          _react2.default.createElement('br', null)
        )
      );
    }
  }]);

  return Product;
}(_react2.default.Component);

exports.default = Product;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _Product = __webpack_require__(97);

var _Product2 = _interopRequireDefault(_Product);

var _ProductsList = __webpack_require__(117);

var _ProductsList2 = _interopRequireDefault(_ProductsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductsList = function (_React$Component) {
  _inherits(ProductsList, _React$Component);

  function ProductsList(props) {
    _classCallCheck(this, ProductsList);

    return _possibleConstructorReturn(this, (ProductsList.__proto__ || Object.getPrototypeOf(ProductsList)).call(this, props));
  }

  _createClass(ProductsList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.data.products) {
        return _react2.default.createElement(
          'div',
          { className: _ProductsList2.default.productsList },
          ' ',
          _react2.default.createElement(
            'p',
            { className: _ProductsList2.default.loading },
            'Loading'
          )
        );
      };
      var products = this.props.data.products;
      return _react2.default.createElement(
        'div',
        { className: _ProductsList2.default.productsList },
        _react2.default.createElement(
          'ul',
          null,
          products.map(function (pid) {
            return _react2.default.createElement(_Product2.default, { productViewChecked: _this2.props.productViewChecked, key: pid.sku, product: pid, outfit: pid.image.outfit, pview: pid.image.pview });
          })
        )
      );
    }
  }]);

  return ProductsList;
}(_react2.default.Component);

exports.default = ProductsList;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _DesignerFilter = __webpack_require__(87);

var _DesignerFilter2 = _interopRequireDefault(_DesignerFilter);

var _CategoryFilter = __webpack_require__(84);

var _CategoryFilter2 = _interopRequireDefault(_CategoryFilter);

var _ColorFilter = __webpack_require__(86);

var _ColorFilter2 = _interopRequireDefault(_ColorFilter);

var _SideFilter = __webpack_require__(118);

var _SideFilter2 = _interopRequireDefault(_SideFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SideFilter = function SideFilter(props) {
      return _react2.default.createElement(
            'div',
            { className: _SideFilter2.default.sideFilter },
            _react2.default.createElement(_CategoryFilter2.default, { updateCategory: props.updateCategory }),
            _react2.default.createElement(_DesignerFilter2.default, { designerList: props.designerList, updateDesignerList: props.updateDesignerList, designerListRefresh: props.designerListRefresh }),
            _react2.default.createElement(_ColorFilter2.default, null)
      );
};

exports.default = SideFilter;

/***/ })

},[100]);