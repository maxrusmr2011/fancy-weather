!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r={};function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||i(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t,n){return(s=u()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&h(a,n.prototype),a}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(!(this instanceof d?this.constructor:void 0))return s(d,n);var a=n[0],i=n[1],c=n[2];if("string"==typeof a?"."===a[0]?this.native=document.querySelector(a):this.native=document.createElement(a):this.native=a.native?a.native:a,i){var u,h=i.split(" ");h=h.map((function(e){return"."===e[0]?e.slice(1):e})),(u=this.native.classList).add.apply(u,o(h))}void 0!==c&&("string"==typeof c?this.native.innerHTML=c:Array.isArray(c)?c.forEach((function(t){e.native.append(t.native?t.native:t)})):this.native.append(c.native?c.native:c))}function l(e,t){document.onclick=function(n){n.target.closest(e)||(t(document.querySelector(e)),document.onclick=null)}}n.r(r),n.d(r,"en",(function(){return A})),n.d(r,"ru",(function(){return D})),n.d(r,"be",(function(){return P})),d.prototype.attr=function(e){var t=this;return e.forEach((function(e){var n=a(e,2),r=n[0],o=n[1];t.native.setAttribute(r,o)})),this},d.prototype.prop=function(e){var t=this;return e.forEach((function(e){var n=a(e,2),r=n[0],o=n[1];t.native[r]=o})),this},d.prototype.on=function(e,t){return this.native.addEventListener(e,t),this},d.prototype.cls=function(e){var t=this;return e.split(" ").forEach((function(e){"."===e[0]?t.native.classList.add(e.slice(1)):t.native.classList.remove(e.slice(1))})),this},d.prototype.parent=function(e){return"string"==typeof e?document.querySelector(e).append(this.native):(e.native||e).append(this.native),this},d.prototype.child=function(e){var t=this;return e&&("string"==typeof e?this.native.innerHTML=e:Array.isArray(e)?e.forEach((function(e){t.native.append(e.native?e.native:e)})):this.native.append(e.native?e.native:e)),this};var p="https://ipinfo.io/json",f="720b5d732dcf97",v="https://api.opencagedata.com/geocode/v1/json",m="b7d85b0ed426411cbaba7a2d62d575dc",y="https://api.openweathermap.org/data/2.5/forecast",g="50d5c38b01dfe0b10a1a4ff714cdd3d1",_="_https://api.unsplash.com/photos/random",w="ToCg_dlprnchoDQzAFEdnUjGWwARHG_yYld-JuEYFqk",b="https://translate.yandex.net/api/v1.5/tr.json/translate",k="trnsl.1.1.20200422T111801Z.e0d39b73a715a384.a2a2b921649e23f209f29f7200aebd93340f4270",S="./src/assets/img/refresh.svg",x="./src/assets/img/microphone.png",T="./src/assets/img/patchPhoto.png",j="./src/assets/img/sound.png";function C(e){var t=document.querySelector(e);return function(e,n){var r="Error ".concat(e);"string"==typeof str?r+=": ".concat(n):n instanceof Error?r+=": ".concat(n.message):r+=": (".concat(n.status,") ").concat(n.statusText);var a=d("div",".error__text",r),o=d("button",".error__clear","✖"),i=d("div",".error",[a,o]).parent(t),c=setTimeout((function(){i.native.remove()}),1e4);o.on("click",(function(){i.native.remove(),clearTimeout(c)}))}}var A={search:"Search",input:{placeholder:"Search city"},feel:"Feel like",wind:"Wind",speed:"m/s",humid:"Humidity",lat:"Latitude",lon:"Longitude",weekday:[["Sunday","Sun"],["Monday","Mon"],["Tuesday","Tus"],["Wednesday","Wed"],["Thursday","Ths"],["Friday","Fri"],["Saturday","Sat"]],month:["January","February","March","April","May","June","July","August","September","October","November","December"],command:{louder:"sound up",quieter:"sound down",weather:"weather",photo:"photo",temperature:"temperature",language:"language"}},D={search:"Поиск",input:{placeholder:"Искать город"},feel:"Ощущается как",wind:"Ветер",speed:"м/с",humid:"Влажность",lat:"Широта",lon:"Долгота",weekday:[["Воскресенье","Вс"],["Понедельник","Пн"],["Вторник","Вт"],["Среда","Ср"],["Четверг","Чт"],["Пятница","Пт"],["Суббота","Сб"]],month:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],command:{louder:"громче",quieter:"тише",weather:"погода",photo:"фото",temperature:"температура",language:"язык"}},P={search:"Пошук",input:{placeholder:"Шукаць горад"},feel:"Адчуваецца як",wind:"Вецер",speed:"м/с",humid:"Вільготнасць",lat:"Шырата",lon:"Даўгата",weekday:[["Нядзеля","Нд"],["Панядзелак","Пн"],["Аўторак","Аў"],["Серада","Ср"],["Чацвер","Чц"],["Пятніца","Пт"],["Субота","Сб"]],month:["студзеня","лютага","сакавіка","красавіка","мая","чэрвеня","ліпеня","жніўня","верасня","кастрычніка","лістапада","снежня"],command:{louder:"гучней",quieter:"тише",weather:"надвор'е",photo:"фото",temperature:"тэмпература",language:"мова"}};function I(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.patchPhoto=new Image,this.patchPhoto.src=T,this.save={lang:"en",cel:!0,volume:1},this.speaking=!1,this.Recognition=window.SpeechRecognition||window.webkitSpeechRecognition,this.speaker=speechSynthesis,this.voiceList=this.speaker.getVoices(),this.spText=new SpeechSynthesisUtterance,this.spText.volume=1}var t,n,a;return t=e,a=[{key:"cityDate",value:function(e){var t=new Date,n=t.getTimezoneOffset()/60;t.setHours(t.getHours()+n+e),window.app.mainPage.weather.currentDate=t}},{key:"hideTimer",value:function(e){return setTimeout((function(){e.remove(),document.onclick=null}),3e3)}}],(n=[{key:"init",value:function(){this.saveStorage(!0),this.render(),this.renderCel(),this.error=C(".header__error")}},{key:"saveStorage",value:function(e){e?localStorage.getItem("save")&&(this.save=JSON.parse(localStorage.getItem("save"))):localStorage.setItem("save",JSON.stringify(this.save))}},{key:"render",value:function(){var e=this;this.bodyImage=d("img","body__image").prop([["alt","image"]]).native,document.body.prepend(this.bodyImage);var t,n,a,o,i,c,s,u=d("img").prop([["src",S],["alt","refresh"]]),h=d("button","btn btn-refresh",u).on("click",(function(){return e.refreshPhoto()})),p=(t=Object.keys(r),n=this.changeLang.bind(this),o=window.app.header.save.lang,i=t.map((function(e){return d("a","dropdown__item".concat(e===o?" dropdown__item-active":""),e).attr([["href","#"]])})),c=d("div","dropdown__menu",i).on("click",(function(e){document.querySelectorAll(".dropdown__item").forEach((function(r,o){r===e.target?(d(r).cls(".dropdown__item-active"),a.child(t[o]),n(t[o])):d(r).cls("_dropdown__item-active"),document.onclick=null})),c.cls("_dropdown__menu-active")})),a=d("button","btn btn-lang",o).on("click",(function(e){e.stopPropagation(),c.cls(".dropdown__menu-active"),l(".dropdown__menu",(function(e){return e.classList.remove("dropdown__menu-active")}))})),d("div","dropdown",[a,c])),f=d("button","btn btn-temp","°F").on("click",(function(){return e.changeCel(!1)})),v=d("button","btn btn-temp","°C").on("click",(function(){return e.changeCel(!0)})),m=d("img").prop([["src",j],["alt","sound"]]),y=d("button","btn btn-speak",m).on("click",(function(){s||(s=setTimeout((function(){e.speakWeather(),s=null}),500))})).on("dblclick",(function(){clearTimeout(s),s=null,e.changeSetupSpeak()})),g=d("div","header__buttons",[h,p,d("div",!1,[f,v]),y]);this.searchInput=d("input","header__input").attr([["i18n","input"]]).on("keydown",(function(t){"Enter"===t.code&&e.getInput()})).native;var _,w=d("button","btn-clear","✖").on("click",(function(){e.searchInput.value="",e.searchInput.focus()}));if(this.Recognition){var b=d("img").prop([["src",x],["alt","mic"]]),k=d("div","header__help","i").on("click",(function(t){t.stopPropagation(),e.showHelp()}));_=d("button","btn-mic",[b,k]).on("click",(function(){return e.speak()}))}else _=d("div");var T=d("button","btn btn-search").on("click",(function(){return e.getInput()})).attr([["i18n","search"]]),C=d("div","header__search",[this.searchInput,w,_,T]),A=d("div","header__error");d("div","header__container",[g,C,A]).parent(".header .wrapper")}},{key:"showHelp",value:function(){var e,t=this,n=Object.keys(r[this.save.lang].command).map((function(e){var n=d("div","help__cmd",e),a=d("div","help__word",'"'.concat(r[t.save.lang].command[e],'"'));return d("div","help__line",[n,a])})),a=d("div","help__title","Commands"),o=d("button","help__clear","✖").on("click",(function(){e.remove(),document.onclick=null})),i=d("div","help",[o,a].concat(I(n)));e=d("div","background",i).parent(".header__container").native,l(".help",(function(){e.remove()}))}},{key:"getInput",value:function(){this.searchInput.value&&(this.geoQuery=this.searchInput.value,this.searching())}},{key:"changeSetupSpeak",value:function(){var e,t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{timer:null},r=n,a=d("div","setup__volume-text","Volume: <span>".concat(100*this.save.volume,"</span>%")),o=d("input","setup__volume").attr([["type","range"],["min","0"],["max","1"],["step","0.1"]]).prop([["value",this.save.volume]]).on("input",(function(e){d(".setup__volume-text span",!1,String(100*e.currentTarget.value)),r.timer&&(clearTimeout(r.timer),r.timer=null)})).on("change",(function(n){t.save.volume=n.currentTarget.value,t.saveStorage(),r.timer=setTimeout((function(){e.remove(),document.onclick=null}),3e3)}));return e=d("div","setup",[a,o]).parent(".header__container").native,l(".setup",(function(e){e.remove()})),e}},{key:"searching",value:function(t){var n,r,a,o=this;this.refreshPhoto(),(n={q:this.geoQuery,language:this.save.lang},r=["q","language"].reduce((function(e,t){return t in n?"".concat(e,"&").concat(t,"=").concat(n[t]):e}),"&pretty=1&limit=1"),a="".concat(v,"?key=").concat(m).concat(r),fetch(a).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){if(!e.total_results)throw Error("Not found");return e}))).then((function(n){window.app.mainPage.weather.city=n.results[0].formatted,t?d(".weather__city",!1,window.app.mainPage.weather.city):(e.cityDate(n.results[0].annotations.timezone.offset_sec/3600),o.location=[n.results[0].geometry.lng,n.results[0].geometry.lat],window.app.mainPage.weather.getDataWeather())})).catch((function(e){o.error("geocode",e)}))}},{key:"speak",value:function(e){this.speaking=void 0===e?!this.speaking:e,d(".btn-mic").cls("".concat(this.speaking?".":"_","btn-mic-active")),this.speaking?(this.record=this.getSpeechWord(),this.record.start()):this.record&&(this.record.stop(),this.record=null)}},{key:"getSpeechWord",value:function(){var e=this,t=new this.Recognition;return t.lang=this.save.lang,t.interimResults=!1,t.continuous=!0,t.onresult=function(t){e.speakResult=t.results[t.results.length-1][0].transcript.trim(),e.sayCommand()},t.onerror=function(){e.error("speaking",Error("error1"))},t.onend=function(){e.speak(!1)},t}},{key:"sayCommand",value:function(){var t,n=r[this.save.lang].command,a={};switch(this.speakResult.toLowerCase()){case n.louder:this.save.volume=this.save.volume<1?(10*this.save.volume+1)/10:1,this.saveStorage(),t=this.changeSetupSpeak(a),a.timer=e.hideTimer(t);break;case n.quieter:this.save.volume=this.save.volume>0?(10*this.save.volume-1)/10:0,this.saveStorage(),t=this.changeSetupSpeak(a),a.timer=e.hideTimer(t);break;case n.weather:this.speakWeather();break;case n.photo:this.refreshPhoto();break;case n.temperature:this.changeCel(!this.save.cel);break;case n.language:var o=Object.keys(r),i=(o.indexOf(this.save.lang)+1)%o.length;d(".btn-lang",!1,o[i]),this.changeLang(o[i]),document.querySelectorAll(".dropdown__item").forEach((function(e,t){d(e).cls("".concat(t===i?".":"_","dropdown__item-active"))}));break;default:this.searchInput.value=this.speakResult,this.geoQuery=this.speakResult,this.searching()}}},{key:"speakWeather",value:function(){var e=r[this.save.lang].command.temperature;e+=" ".concat(d(".weather__today-temp").native.textContent),e+=" ".concat(d(".today__feel .today__text").native.textContent),e+=d(".today__feel .today__value").native.textContent,e+=", ".concat(d(".today__descr").native.textContent,","),e+=" ".concat(d(".today__wind .today__text").native.textContent),e+=d(".today__wind .today__value").native.textContent,e+="".concat(d(".today__wind span[i18n=speed]").native.textContent),e+=", ".concat(d(".today__humid .today__text").native.textContent),e+=d(".today__humid .today__value").native.textContent,this.voice(e)}},{key:"voice",value:function(e){var t=this;this.speechRec&&this.speak(!1),this.voiceList=this.speaker.getVoices();var n=this.voiceList.find((function(e){return e.lang.slice(0,2)===t.save.lang}));n||(n=this.voiceList.find((function(e){return"ru"===e.lang.slice(0,2)}))),this.spText.voice=n,this.spText.text=e,this.spText.volume=this.save.volume,this.speaker.speak(this.spText)}},{key:"refreshPhoto",value:function(){var e=this,t=window.app.mainPage.weather.currentDate||new Date,n=t.getMonth(),r="";r+=n>=2&&n<5?"+spring":n>=5&&n<8?"+summer":n>=8&&n<11?"+autumn":"+winter";var a,o,i,c,s=t.getHours();(a="weather".concat(r+=s>=6&&n<12?"+morning":n>=12&&n<16?"+afternoon":n>=16&&n<22?"+evening":"+night"),o="query=".concat(a),i="client_id=".concat(w),c="".concat(_,"?").concat("orientation=landscape","&").concat("per_page=1","&").concat(o,"&").concat(i),fetch(c).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){return fetch(e.urls.regular)})).then((function(e){return e.ok?e.blob():Promise.reject(e)}))).then((function(t){e.bodyImage.src=URL.createObjectURL(t)})).catch((function(t){e.error("find photo",t),e.bodyImage.src=e.patchPhoto.src}))}},{key:"changeLang",value:function(e){var t=this;this.save.lang!==e&&(this.save.lang=e,this.saveStorage(),this.renderLang(),this.searching(!0),window.app.mainPage.weather.renderDescr(),this.record)&&(this.speak(!1),setTimeout((function(){return t.speak(!0)}),1e3))}},{key:"renderLang",value:function(){var e=this;document.querySelectorAll("[i18n]").forEach((function(t){var n=t,a=r[e.save.lang][n.getAttribute("i18n")];a&&("string"==typeof a?n.textContent=a:Array.isArray(a)?n.dataset.index+1&&(n.dataset.index1+1?n.textContent=a[n.dataset.index][n.dataset.index1]:n.textContent=a[n.dataset.index]):Object.keys(a).forEach((function(e){n[e]=a[e]})))}))}},{key:"changeCel",value:function(e){this.save.cel!==e&&(this.save.cel=e,this.refreshPhoto(),this.renderCel(),this.saveStorage(),window.app.mainPage.weather.renderTemp())}},{key:"renderCel",value:function(){var e=this;document.querySelectorAll(".btn-temp").forEach((function(t,n){!!n===e.save.cel?d(t).cls(".btn-temp-active"):d(t).cls("_btn-temp-active")}))}},{key:"currentCoord",value:function(){var e,t=this;(e="".concat(p,"?token=").concat(f),fetch(e).then((function(e){return e.ok?e.json():Promise.reject(e)}))).then((function(e){t.location=e.loc.split(",").map((function(e){return parseFloat(e)})).reverse(),t.showCurrent()})).catch((function(e){t.error("current location",e),navigator.geolocation.getCurrentPosition((function(e){t.location=[e.coords.longitude,e.coords.latitude],t.showCurrent()}),(function(){return t.error("getCurrentPosition",Error("error position"))}))}))}},{key:"showCurrent",value:function(){this.geoQuery="".concat(this.location[1],",").concat(this.location[0]),this.searching()}}])&&O(t.prototype,n),a&&O(t,a),e}();var M=[{from:299,src_day:"./src/assets/img/weather/thunderstorm.svg",src_night:"./src/assets/img/weather/thunderstorm.svg"},{from:300,src_day:"./src/assets/img/weather/patchy-drizzle-day.svg",src_night:"./src/assets/img/weather/patchy-drizzle-night.svg"},{from:399,src_day:"./src/assets/img/weather/drizzle.svg",src_night:"./src/assets/img/weather/drizzle.svg"},{from:501,src_day:"./src/assets/img/weather/patchy-rain-day.svg",src_night:"./src/assets/img/weather/patchy-rain-night.svg"},{from:599,src_day:"./src/assets/img/weather/rain.svg",src_night:"./src/assets/img/weather/rain.svg"},{from:600,src_day:"./src/assets/img/weather/patchy-snow-day.svg",src_night:"./src/assets/img/weather/patchy-snow-night.svg"},{from:602,src_day:"./src/assets/img/weather/snow.svg",src_night:"./src/assets/img/weather/snow.svg"},{from:612,src_day:"./src/assets/img/weather/patchy-sleet-day.svg",src_night:"./src/assets/img/weather/patchy-sleet-night.svg"},{from:699,src_day:"./src/assets/img/weather/sleet.svg",src_night:"./src/assets/img/weather/sleet.svg"},{from:780,src_day:"./src/assets/img/weather/fog.svg",src_night:"./src/assets/img/weather/fog.svg"},{from:799,src_day:"./src/assets/img/weather/tornado.svg",src_night:"./src/assets/img/weather/tornado.svg"},{from:800,src_day:"./src/assets/img/weather/sunny.svg",src_night:"./src/assets/img/weather/clear-night.svg"},{from:801,src_day:"./src/assets/img/weather/partly-cloudy-day.svg",src_night:"./src/assets/img/weather/partly-cloudy-night.svg"},{from:802,src_day:"./src/assets/img/weather/few-clouds.svg",src_night:"./src/assets/img/weather/few-clouds.svg"},{from:899,src_day:"./src/assets/img/weather/dark-clouds.svg",src_night:"./src/assets/img/weather/dark-clouds.svg"}];function W(e){return function(e){if(Array.isArray(e))return z(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||R(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||R(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Q=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.currentDate=new Date}var t,n,r;return t=e,r=[{key:"render",value:function(){var e=d("div","weather__city"),t=d("span","today-week").attr([["i18n","weekday"]]),n=d("span","today-day"),r=d("span","today-month").attr([["i18n","month"]]),a=d("span","today-time"),o=d("div","weather__today-date",[t,n,r,a]),i=d("div","weather__top",[e,o]),c=d("div","weather__today-temp"),s=d("img").prop([["alt","icon"]]),u=d("div","weather__today-icon",s),h=d("div","today__descr"),l=["feel","wind","humid"].map((function(e){var t=[d("span","today__text").attr([["i18n",e]]),d("span","today__value")];return"wind"===e&&t.push(d("span").attr([["i18n","speed"]])),d("div","today__".concat(e),t)})),p=d("div","weather__today-about",[h].concat(W(l))),f=d("div","weather__today",[c,u,p]),v=[0,1,2].map((function(){var e=d("div","weather__weekday").attr([["i18n","weekday"]]),t=d("div","weather__temp"),n=d("img").prop([["alt","icon"]]),r=d("div","weather__icon",n),a=d("div","weather__day-body",[t,r]);return d("div","weather__day",[e,a])})),m=d("div","weather__next",v);d("div","weather",[i,f,m]).parent(".main__container")}},{key:"iconSrc",value:function(e,t){var n=M.find((function(t){return e<=t.from}));if(n){var r=(new Date).getHours();n=!t||r>=6&&r<18?n.src_day:n.src_night}else n="./src/assets/img/weather/few-clouds.svg";return n}},{key:"formSearchDate",value:function(e){var t=e.getMonth()+1;t=t>9?t:"0".concat(t);var n=e.getDate();return n=n>9?n:"0".concat(n),"".concat(e.getFullYear(),"-").concat(t,"-").concat(n," 12:00:00")}},{key:"deg",value:function(e){var t=Math.floor(window.app.header.save.cel?e:1.8*e+32);return"".concat(t,"°").concat(window.app.header.save.cel?"":"F")}}],(n=[{key:"init",value:function(){e.render(),this.error=C(".header__error")}},{key:"getDataWeather",value:function(){var e=this,t=window.app.header.location,n={lat:t[1],lon:t[0],lang:"en",units:"metric"};(function(e){var t="";["q","lang","units","lon","lat"].forEach((function(n){n in e&&(t+="&".concat(n,"=").concat(e[n]))}));var n="".concat(y,"?APPID=").concat(g).concat(t);return fetch(n).then((function(e){return e.ok?e.json():Promise.reject(e)}))})(n).then((function(t){e.dataWeather=t,window.app.mainPage.mapLocate.renderMap(),e.renderWeather(),window.app.header.renderLang()})).catch((function(t){e.error("weather",t)}))}},{key:"renderTemp",value:function(){var t=this;d(".weather__today-temp",!1,e.deg(this.dataWeather.list[0].main.temp)),d(".today__feel .today__value",!1,": ".concat(e.deg(this.dataWeather.list[0].main.feels_like))),document.querySelectorAll(".weather__day").forEach((function(n,r){var a=new Date;a.setDate((new Date).getDate()+r+1);var o=t.dataWeather.list.find((function(t){return t.dt_txt===e.formSearchDate(a)}));n.querySelector(".weather__temp").textContent=e.deg(o.main.temp)}))}},{key:"timerTic",value:function(){d(".today-time",!1,this.currentDate.toLocaleString("ru",{hour:"2-digit",minute:"2-digit",second:"2-digit"})),this.currentDate.setSeconds(this.currentDate.getSeconds()+1),this.currentDate.getMinutes()||this.currentDate.getSeconds()||this.renderWeather()}},{key:"renderDescr",value:function(){var e=this,t=document.querySelector(".today__descr"),n=this.dataWeather.list[0].weather[0].description;"en"===window.app.header.save.lang?t.textContent=n:function(e){var t="lang=en-".concat(window.app.header.save.lang),n="".concat(b,"?key=").concat(k,"&").concat(t,"&text=").concat(e);return fetch(n).then((function(e){return e.ok?e.json():Promise.reject(e)}))}(n).then((function(e){var n=q(e.text,1);t.textContent=n[0]})).catch((function(r){e.error("translate",r),t.textContent=n}))}},{key:"renderWeather",value:function(){var t=this;this.renderDescr(),d(".weather__city",!1,this.city),this.timerTic(),d(".weather__today-icon img","imgs").prop([["src",e.iconSrc(this.dataWeather.list[0].weather[0].id,!0)]]),d(".today__wind .today__value",!1,": ".concat(this.dataWeather.list[0].wind.speed)),d(".today__humid .today__value",!1,": ".concat(this.dataWeather.list[0].main.humidity,"%")),document.querySelectorAll(".weather__day").forEach((function(n,r){var a=new Date(t.currentDate.getTime());a.setDate(a.getDate()+r+1);var o=t.dataWeather.list.find((function(t){return t.dt_txt===e.formSearchDate(a)}));n.querySelector(".weather__icon img").src=e.iconSrc(o.weather[0].id);var i=n.querySelector(".weather__weekday");i.dataset.index=a.getDay(),i.dataset.index1=0})),this.renderTemp(),this.renderDate(),this.stopTimer&&clearTimeout(this.stopTimer),this.stopTimer=setInterval((function(){t.timerTic()}),1e3)}},{key:"renderDate",value:function(){d(".today-week").attr([["data-index",this.currentDate.getDay()],["data-index1","1"]]),d(".today-day",!1,String(this.currentDate.getDate())),d(".today-month").attr([["data-index",this.currentDate.getMonth()]])}}])&&F(t.prototype,n),r&&F(t,r),e}();function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.location=[0,0]}var t,n,r;return t=e,r=[{key:"viewCoord",value:function(){var e=window.app.header.location,t=e[0].toFixed(2).split(".");t[1]=Math.floor(t[1]/100*60),t=": ".concat(t.join("°"),"' (").concat(e[1]>0?"E":"W",")");var n=e[1].toFixed(2).split(".");n[1]=Math.floor(n[1]/100*60),d(".coord__lat .coord__value",!1,n=": ".concat(n.join("°"),"' (").concat(e[0]>0?"N":"S",")")),d(".coord__lon .coord__value",!1,t)}}],(n=[{key:"init",value:function(){this.error=C(".header__error");var e=d("div","location__map").prop([["id","map"]]),t=d("div","coord__lat",[d("span","coord__text").attr([["i18n","lat"]]),d("span","coord__value")]),n=d("div","coord__lon",[d("span","coord__text").attr([["i18n","lon"]]),d("span","coord__value")]),r=d("div","location__coord coord",[t,n]);d("div","location",[e,r]).parent(".main__container")}},{key:"renderMap",value:function(){this.viewMap(),e.viewCoord()}},{key:"viewMap",value:function(){var e=window.app.header.location,t=window.mapboxgl;t.accessToken="pk.eyJ1IjoibWF4cnVzbXIyMDExIiwiYSI6ImNrYTQwcnFmNzA5ZjYzZm12ZXQzbXFhN2QifQ.uSxrGMLSQh-0N0QECC_3iQ",this.map=new t.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:e,zoom:8}),(new t.Marker).setLngLat(e).addTo(this.map)}}])&&H(t.prototype,n),r&&H(t,r),e}();function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.weather=new Q,this.mapLocate=new N}var t,n,r;return t=e,(n=[{key:"init",value:function(){d("div","main__container").parent(".main .wrapper"),this.weather.init(),this.mapLocate.init()}}])&&J(t.prototype,n),r&&J(t,r),e}();function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.header=new L,this.mainPage=new U}var t,n,r;return t=e,(n=[{key:"init",value:function(){this.header.init(),this.mainPage.init(),this.header.currentCoord(),this.header.searchInput.focus()}}])&&Y(t.prototype,n),r&&Y(t,r),e}();window.app=new V,window.app.init()}]);