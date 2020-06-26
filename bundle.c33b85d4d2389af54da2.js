!function(e){function t(t){for(var o,r,a=t[0],i=t[1],l=t[2],u=0,c=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(N,r)&&N[r]&&c.push(N[r][0]),N[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(L&&L(t);c.length;)c.shift()();return I.push.apply(I,l||[]),n()}function n(){for(var e,t=0;t<I.length;t++){for(var n=I[t],o=!0,r=1;r<n.length;r++){var a=n[r];0!==N[a]&&(o=!1)}o&&(I.splice(t--,1),e=R(R.s=n[0]))}return e}var o=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!x[e])return;for(var n in x[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(b[n]=t[n]);0==--m&&0===g&&j()}(e,t),o&&o(e,t)};var r,a=!0,i="c33b85d4d2389af54da2",l={},u=[],c=[];function s(t){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:r!==t,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var o=0;o<e.length;o++)n._acceptedDependencies[e[o]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,f){case"idle":(b={})[t]=e[t],p("ready");break;case"ready":M(t);break;case"prepare":case"check":case"dispose":case"apply":(y=y||[]).push(t)}},check:E,apply:P,status:function(e){if(!e)return f;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:l[t]};return r=void 0,n}var d=[],f="idle";function p(e){f=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var h,b,v,y,m=0,g=0,k={},x={},w={};function _(e){return+e+""===e?+e:e}function E(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,p("check"),(t=1e4,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var o=new XMLHttpRequest,r=R.p+""+i+".hot-update.json";o.open("GET",r,!0),o.timeout=t,o.send(null)}catch(e){return n(e)}o.onreadystatechange=function(){if(4===o.readyState)if(0===o.status)n(new Error("Manifest request to "+r+" timed out."));else if(404===o.status)e();else if(200!==o.status&&304!==o.status)n(new Error("Manifest request to "+r+" failed."));else{try{var t=JSON.parse(o.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return p(S()?"ready":"idle"),null;x={},k={},w=e.c,v=e.h,p("prepare");var t=new Promise((function(e,t){h={resolve:e,reject:t}}));for(var n in b={},N)O(n);return"prepare"===f&&0===g&&0===m&&j(),t}));var t}function O(e){w[e]?(x[e]=!0,m++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=R.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):k[e]=!0}function j(){p("ready");var e=h;if(h=null,e)if(a)Promise.resolve().then((function(){return P(a)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in b)Object.prototype.hasOwnProperty.call(b,n)&&t.push(_(n));e.resolve(t)}}function P(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");return function t(n){var o,a,c,s,d;function f(e){for(var t=[e],n={},o=t.map((function(e){return{chain:[e],id:e}}));o.length>0;){var r=o.pop(),a=r.id,i=r.chain;if((s=T[a])&&(!s.hot._selfAccepted||s.hot._selfInvalidated)){if(s.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:a};if(s.hot._main)return{type:"unaccepted",chain:i,moduleId:a};for(var l=0;l<s.parents.length;l++){var u=s.parents[l],c=T[u];if(c){if(c.hot._declinedDependencies[a])return{type:"declined",chain:i.concat([u]),moduleId:a,parentId:u};-1===t.indexOf(u)&&(c.hot._acceptedDependencies[a]?(n[u]||(n[u]=[]),h(n[u],[a])):(delete n[u],t.push(u),o.push({chain:i.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];-1===e.indexOf(o)&&e.push(o)}}S();var m={},g=[],k={},x=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var E in b)if(Object.prototype.hasOwnProperty.call(b,E)){var O;d=_(E),O=b[E]?f(d):{type:"disposed",moduleId:E};var j=!1,P=!1,M=!1,I="";switch(O.chain&&(I="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(j=new Error("Aborted because of self decline: "+O.moduleId+I));break;case"declined":n.onDeclined&&n.onDeclined(O),n.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+I));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(O),n.ignoreUnaccepted||(j=new Error("Aborted because "+d+" is not accepted"+I));break;case"accepted":n.onAccepted&&n.onAccepted(O),P=!0;break;case"disposed":n.onDisposed&&n.onDisposed(O),M=!0;break;default:throw new Error("Unexception type "+O.type)}if(j)return p("abort"),Promise.reject(j);if(P)for(d in k[d]=b[d],h(g,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,d)&&(m[d]||(m[d]=[]),h(m[d],O.outdatedDependencies[d]));M&&(h(g,[O.moduleId]),k[d]=x)}var D,U=[];for(a=0;a<g.length;a++)d=g[a],T[d]&&T[d].hot._selfAccepted&&k[d]!==x&&!T[d].hot._selfInvalidated&&U.push({module:d,parents:T[d].parents.slice(),errorHandler:T[d].hot._selfAccepted});p("dispose"),Object.keys(w).forEach((function(e){!1===w[e]&&function(e){delete N[e]}(e)}));var A,L,H=g.slice();for(;H.length>0;)if(d=H.pop(),s=T[d]){var C={},q=s.hot._disposeHandlers;for(c=0;c<q.length;c++)(o=q[c])(C);for(l[d]=C,s.hot.active=!1,delete T[d],delete m[d],c=0;c<s.children.length;c++){var B=T[s.children[c]];B&&((D=B.parents.indexOf(d))>=0&&B.parents.splice(D,1))}}for(d in m)if(Object.prototype.hasOwnProperty.call(m,d)&&(s=T[d]))for(L=m[d],c=0;c<L.length;c++)A=L[c],(D=s.children.indexOf(A))>=0&&s.children.splice(D,1);p("apply"),void 0!==v&&(i=v,v=void 0);for(d in b=void 0,k)Object.prototype.hasOwnProperty.call(k,d)&&(e[d]=k[d]);var z=null;for(d in m)if(Object.prototype.hasOwnProperty.call(m,d)&&(s=T[d])){L=m[d];var J=[];for(a=0;a<L.length;a++)if(A=L[a],o=s.hot._acceptedDependencies[A]){if(-1!==J.indexOf(o))continue;J.push(o)}for(a=0;a<J.length;a++){o=J[a];try{o(L)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:L[a],error:e}),n.ignoreErrored||z||(z=e)}}}for(a=0;a<U.length;a++){var F=U[a];d=F.module,u=F.parents,r=d;try{R(d)}catch(e){if("function"==typeof F.errorHandler)try{F.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:t,originalError:e}),n.ignoreErrored||z||(z=t),z||(z=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:e}),n.ignoreErrored||z||(z=e)}}if(z)return p("fail"),Promise.reject(z);if(y)return t(n).then((function(e){return g.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}));return p("idle"),new Promise((function(e){e(g)}))}(t=t||{})}function S(){if(y)return b||(b={}),y.forEach(M),y=void 0,!0}function M(t){Object.prototype.hasOwnProperty.call(b,t)||(b[t]=e[t])}var T={},N={0:0},I=[];function R(t){if(T[t])return T[t].exports;var n=T[t]={i:t,l:!1,exports:{},hot:s(t),parents:(c=u,u=[],c),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=T[e];if(!t)return R;var n=function(n){return t.hot.active?(T[n]?-1===T[n].parents.indexOf(e)&&T[n].parents.push(e):(u=[e],r=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),u=[]),R(n)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return R[e]},set:function(t){R[e]=t}}};for(var a in R)Object.prototype.hasOwnProperty.call(R,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,o(a));return n.e=function(e){return"ready"===f&&p("prepare"),g++,R.e(e).then(t,(function(e){throw t(),e}));function t(){g--,"prepare"===f&&(k[e]||O(e),0===g&&0===m&&j())}},n.t=function(e,t){return 1&t&&(e=n(e)),R.t(e,-2&t)},n}(t)),n.l=!0,n.exports}R.e=function(e){var t=[],n=N[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=N[e]=[t,o]}));t.push(n[2]=o);var r,a=document.createElement("script");a.charset="utf-8",a.timeout=120,R.nc&&a.setAttribute("nonce",R.nc),a.src=function(e){return R.p+""+({}[e]||e)+"."+i+".js"}(e);var l=new Error;r=function(t){a.onerror=a.onload=null,clearTimeout(u);var n=N[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}N[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:a})}),12e4);a.onerror=a.onload=r,document.head.appendChild(a)}return Promise.all(t)},R.m=e,R.c=T,R.d=function(e,t,n){R.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},R.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},R.t=function(e,t){if(1&t&&(e=R(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(R.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)R.d(n,o,function(t){return e[t]}.bind(null,o));return n},R.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return R.d(t,"a",t),t},R.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},R.p="/",R.oe=function(e){throw console.error(e),e},R.h=function(){return i};var D=window.webpackJsonp=window.webpackJsonp||[],U=D.push.bind(D);D.push=t,D=D.slice();for(var A=0;A<D.length;A++)t(D[A]);var L=U;I.push([18,1]),n()}([,,,,,,function(e,t,n){(t=n(15)(!1)).push([e.i,"html {\n  box-sizing: border-box;\n}\n*, *:before, *:after {\n  box-sizing: inherit;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: 'Roboto', sans-serif;\n}\n",""]),e.exports=t},function(e,t,n){var o=n(15),r=n(48),a=n(49),i=n(50),l=n(51);t=o(!1);var u=r(a),c=r(i),s=r(l);t.push([e.i,"html, body, .root {\n  height: 100%;\n}\nbody {\n  line-height: 1.5;\n}\nbody, .app {\n  background: white;\n}\n\n/* main page */\n\n.list-books-title {\n  padding: 10px 0;\n  background: #2e7c31;\n  text-align: center;\n}\n.list-books-title h1 {\n  font-weight: 400;\n  margin: 0;\n  color: white;\n}\n\n.list-books-content {\n  padding: 0 0 80px;\n  flex: 1;\n}\n\n.bookshelf {\n  padding: 0 10px 20px;\n}\n\n@media (min-width: 600px) {\n  .bookshelf {\n    padding: 0 20px 40px;\n  }\n}\n\n.bookshelf-title {\n  border-bottom: 1px solid #dedede;\n}\n.bookshelf-books {\n  text-align: center;\n}\n\n.open-search {\n  position: fixed;\n  right: 25px;\n  bottom: 25px;\n}\n.open-search a {\n  display: block;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: #2e7d32;\n  background-image: url("+u+");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 28px;\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n  font-size: 0;\n}\n\n/* search page */\n\n.search-books-bar {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 5;\n  display: flex;\n  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 0 6px rgba(0,0,0,0.23);\n  background-color: #FFF;\n}\n.search-books-input-wrapper {\n  flex: 1;\n  background: #e9e;\n}\n.search-books-bar input {\n  width: 100%;\n  padding: 15px 10px;\n  font-size: 1.25em;\n  border: none;\n  outline: none;\n}\n\n.close-search {\n  display: block;\n  top: 20px;\n  left: 15px;\n  width: 50px;\n  height: 53px;\n  background: white;\n  background-image: url("+c+");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 28px;\n  font-size: 0;\n}\n\n.search-books-results {\n  padding: 80px 10px 20px;\n}\n\n/* books grid */\n\n.books-grid {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.books-grid li {\n  padding: 10px 15px;\n  text-align: left;\n}\n\n.book {\n  width: 140px;\n}\n.book-title,\n.book-authors {\n  font-size: 0.8em;\n}\n.book-title {\n  margin-top: 10px;\n}\n.book-authors {\n  color: #999;\n}\n\n.book-top {\n  position: relative;\n  height: 200px;\n  display: flex;\n  align-items: flex-end;\n}\n\n.book-shelf-changer {\n  position: absolute;\n  right: 0;\n  bottom: -10px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #60ac5d;\n  background-image: url("+s+");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 20px;\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n}\n.book-shelf-changer select {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n}\n\n/* book cover */\n\n.book-cover {\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n  background: #eee;\n}\n.book-cover-title {\n  padding: 20px 10px 0;\n  text-align: center;\n  font-size: 0.8em;\n}\n",""]),e.exports=t},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="https://reactnd-books-api.udacity.com",a=localStorage.token;a||(a=localStorage.token=Math.random().toString(36).substr(-8));var i={Accept:"application/json",Authorization:a};t.get=function(e){return fetch(r+"/books/"+e,{headers:i}).then((function(e){return e.json()})).then((function(e){return e.book}))},t.getAll=function(){return fetch(r+"/books",{headers:i}).then((function(e){return e.json()})).then((function(e){return e.books}))},t.update=function(e,t){return fetch(r+"/books/"+e.id,{method:"PUT",headers:o({},i,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then((function(e){return e.json()}))},t.search=function(e,t){return fetch(r+"/search",{method:"POST",headers:o({},i,{"Content-Type":"application/json"}),body:JSON.stringify({query:e,maxResults:t})}).then((function(e){return e.json()})).then((function(e){return e.books}))}},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=l(n(0)),a=l(n(3)),i=l(n(17));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=e.bookShelfTitle,n=e.books,a=e.handleStatusUpdate;return r.default.createElement("div",{className:"bookshelf"},r.default.createElement("h2",{className:"bookshelf-title"},t),r.default.createElement("div",{className:"bookshelf-books"},r.default.createElement("ol",{className:"books-grid"},n.length>0&&n.map((function(e){return r.default.createElement("li",{key:e.id},r.default.createElement(i.default,o({shelf:e.shelf,bookId:e.id,bookCoverImage:e.imageLinks.thumbnail,bookTitle:e.title,bookAuthors:e.authors,handleStatusUpdate:a},e)))})))))};u.propTypes={bookShelfTitle:a.default.string,books:a.default.array,handleStatusUpdate:a.default.func.isRequired},u.defaultProps={bookShelfTitle:"No title set",books:[]},t.default=u},,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(0)),r=i(n(3)),a=n(2);function i(e){return e&&e.__esModule?e:{default:e}}var l=function(e){var t=e.bookId,n=e.shelf,r=e.bookCoverImage,i=e.bookTitle,l=e.bookAuthors,u=e.handleStatusUpdate;return o.default.createElement("div",{className:"book"},o.default.createElement("div",{className:"book-top"},o.default.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:'url("'+r+'")'}}),o.default.createElement("div",{className:"book-shelf-changer"},o.default.createElement("select",{defaultValue:n,onChange:function(e){u({id:t},e.target.value)}},o.default.createElement("option",{value:"none",disabled:!0},"Move to..."),o.default.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.default.createElement("option",{value:"wantToRead"},"Want to Read"),o.default.createElement("option",{value:"read"},"Read"),o.default.createElement("option",{value:"none"},"None")))),o.default.createElement("div",{className:"book-title"},i),o.default.createElement("div",{className:"book-authors"},l.map((function(e){return o.default.createElement("span",{key:e},e,o.default.createElement("br",null))}))),o.default.createElement("div",{className:"book-authors"},o.default.createElement(a.Link,{className:"more",to:"/details/"+t},"More...")))};l.propTypes={bookId:r.default.string.isRequired,shelf:r.default.string,bookCoverImage:r.default.string,bookTitle:r.default.string,bookAuthors:r.default.array,handleStatusUpdate:r.default.func.isRequired},l.defaultProps={shelf:"none",bookCoverImage:"",bookTitle:"Title",bookAuthors:["No Authors"]},t.default=l},function(e,t,n){"use strict";var o=l(n(0)),r=l(n(20)),a=n(2),i=l(n(32));function l(e){return e&&e.__esModule?e:{default:e}}n(46),n(47),r.default.render(o.default.createElement(a.BrowserRouter,null,o.default.createElement(i.default,null)),document.getElementById("root"))},,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=d(n(0)),a=n(2),i=d(n(33)),l=(d(n(37)),function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(10))),u=d(n(39)),c=d(n(44)),s=d(n(45));function d(e){return e&&e.__esModule?e:{default:e}}var f=(0,i.default)({loader:function(){return n.e(2).then(n.t.bind(null,52,7))},loading:s.default}),p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={bookList:[]},n.loadList=n.loadList.bind(n),n.handleBookStatusUpdate=n.handleBookStatusUpdate.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.loadList()}},{key:"loadList",value:function(){var e=this;l.getAll().then((function(t){return e.setState({bookList:t})}))}},{key:"handleBookStatusUpdate",value:function(e,t){var n=this;l.update(e,t).then((function(e){return e&&n.loadList()}))}},{key:"render",value:function(){var e=this;return r.default.createElement("div",{className:"app"},r.default.createElement(a.Route,{path:"/search",render:function(){return r.default.createElement(c.default,{handleBookStatusUpdate:e.handleBookStatusUpdate,books:e.state.bookList})}}),r.default.createElement(a.Route,{path:"/details/:bookId",component:f}),r.default.createElement(a.Route,{path:"/",exact:!0,render:function(){return r.default.createElement(u.default,{handleBookStatusUpdate:e.handleBookStatusUpdate,books:e.state.bookList})}}))}}]),t}(r.default.Component);t.default=p},,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=l(n(0)),r=l(n(3)),a=n(2),i=l(n(13));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=e.books,n=e.handleBookStatusUpdate;return o.default.createElement("div",{className:"list-books"},o.default.createElement("div",{className:"list-books-title"},o.default.createElement("h1",null,"MyReads app")),o.default.createElement("div",{className:"list-books-content"},[{name:"Currently Reading",slug:"currentlyReading"},{name:"Want to Read",slug:"wantToRead"},{name:"Read",slug:"read"}].map((function(e){return o.default.createElement(i.default,{key:e.slug,bookShelfTitle:e.name,books:t.filter((function(t){return t.shelf===e.slug})),handleStatusUpdate:n})}))),o.default.createElement("div",{className:"open-search"},o.default.createElement(a.Link,{to:"/search"},"Add a book")))};u.propTypes={books:r.default.array,handleBookStatusUpdate:r.default.func.isRequired},u.defaultProps={books:[]},t.default=u},,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),a=s(r),i=s(n(3)),l=n(2),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(10)),c=s(n(13));function s(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){var e,n,o;d(this,t);for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=o=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o.state={searchedList:[],query:""},f(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"handleSearchUpdate",value:function(e){var t=this,n=e.target.value;this.setState({query:n}),u.search(n,20).then((function(e){for(var n=e,o=t.props.books,r=0;r<n.length;r++)for(var a=0;a<o.length;a++){if(n[r].id===o[a].id){n[r].shelf=o[a].shelf;break}n[r].shelf="none"}t.setState({searchedList:n})}))}},{key:"render",value:function(){var e=this;return a.default.createElement("div",{className:"search-books"},a.default.createElement("div",{className:"search-books-bar"},a.default.createElement(l.Link,{className:"close-search",to:"/"},"Back"),a.default.createElement("div",{className:"search-books-input-wrapper"},a.default.createElement("input",{type:"text",name:"searchTerm",placeholder:"Search by title or author",onChange:function(t){e.handleSearchUpdate(t)},value:this.state.query}))),a.default.createElement("div",{className:"search-books-results"},a.default.createElement(c.default,{bookShelfTitle:"Search Results",books:this.state.searchedList,handleStatusUpdate:this.props.handleBookStatusUpdate}),a.default.createElement("ol",{className:"books-grid"})))}}]),t}(r.Component);p.propTypes={books:i.default.array,handleBookStatusUpdate:i.default.func.isRequired},p.defaultProps={books:[]},t.default=p},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.isLoading,n=e.pastDelay,o=e.error;return t&&n?a.default.createElement("p",null,"Loading..."):o&&!t?a.default.createElement("p",null,"Error!"):null};var o,r=n(0),a=(o=r)&&o.__esModule?o:{default:o}},function(e,t,n){var o=n(14),r=n(6);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1},i=o(r,a);if(!r.locals||e.hot.invalidate){var l=r.locals;e.hot.accept(6,(function(){"string"==typeof(r=(r=n(6)).__esModule?r.default:r)&&(r=[[e.i,r,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(l,r.locals)?(l=r.locals,i(r)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=r.locals||{}},function(e,t,n){var o=n(14),r=n(7);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1},i=o(r,a);if(!r.locals||e.hot.invalidate){var l=r.locals;e.hot.accept(7,(function(){"string"==typeof(r=(r=n(7)).__esModule?r.default:r)&&(r=[[e.i,r,""]]),function(e,t){if(!e&&t||e&&!t)return!1;var n;for(n in e)if(e[n]!==t[n])return!1;for(n in t)if(!e[n])return!1;return!0}(l,r.locals)?(l=r.locals,i(r)):e.hot.invalidate()}))}e.hot.dispose((function(){i()})),e.exports=r.locals||{}},,function(e,t,n){"use strict";n.r(t),t.default=n.p+"1b5d9b6afb5557f7992cc85713ca0faf.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"cd079cab42defead9875f9270c5ad67c.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"4378492a3a09dbfc31ff4b858fccb74a.svg"}]);