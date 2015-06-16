/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var MainController = _interopRequire(__webpack_require__(1));

	var NavbarController = _interopRequire(__webpack_require__(5));

	var TechTreeController = _interopRequire(__webpack_require__(6));

	var _componentsArmsInfoArmsInfoController = __webpack_require__(7);

	var ArmsInfoController = _componentsArmsInfoArmsInfoController.ArmsInfoController;
	var ArmsDropdownDirective = _componentsArmsInfoArmsInfoController.ArmsDropdownDirective;

	var NewGameController = _interopRequire(__webpack_require__(8));

	var TechDetailController = _interopRequire(__webpack_require__(9));

	var Players = _interopRequire(__webpack_require__(2));

	var Tech = _interopRequire(__webpack_require__(3));

	var Firebase = _interopRequire(__webpack_require__(4));

	angular.module("civbgSupport", ["ngAnimate", "ngCookies", "ngTouch", "ngSanitize", "ngResource", "ui.router", "ui.bootstrap", "firebase"]).constant("Tech", Tech).service("Players", Players).service("FireBase", Firebase.instance).controller("MainController", MainController).controller("NavbarController", NavbarController).controller("TechTreeController", TechTreeController).controller("ArmsInfoController", ArmsInfoController).controller("NewGameController", NewGameController).controller("TechDetailController", TechDetailController).directive("armsDropdown", ArmsDropdownDirective.activate).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
	  $stateProvider.state("home", {
	    url: "/",
	    templateUrl: "app/main/main.html"
	  });

	  $urlRouterProvider.otherwise("/");
	}]);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var MainController = function MainController(Players) {
	  _classCallCheck(this, MainController);

	  this.players = Players.players;
	};

	module.exports = MainController;

	MainController.$inject = ["Players"];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var Players = (function () {
	  function Players($rootScope, $firebaseArray, Firebase) {
	    var _this = this;

	    _classCallCheck(this, Players);

	    var playersRef = new Firebase("https://civbg-support.Firebaseio.com/players");

	    this.$rootScope = $rootScope;
	    this.players = $firebaseArray(playersRef);

	    this.players.$loaded(function () {
	      return _this.installAutoSaver();
	    });
	  }

	  _createClass(Players, {
	    installAutoSaver: {
	      value: function installAutoSaver() {
	        var _this = this;

	        _.each(this.players, function (player, i) {
	          _this.$rootScope.$watch(function () {
	            return _this.players[i];
	          }, function (player) {
	            if (!_.isEmpty(player)) {
	              _this.players.$save(i);
	            }
	          }, true);
	        });
	      }
	    },
	    start: {
	      value: function start(colors) {
	        var _this = this;

	        _.each(this.players, function (player) {
	          return _this.players.$remove(player);
	        });
	        _.each(colors, function (color) {
	          _this.players.$add({
	            color: color,
	            tech: {
	              one: [], two: [], three: [], four: [], keep: true
	            }
	          });
	        });
	      }
	    }
	  });

	  return Players;
	})();

	module.exports = Players;

	Players.$inject = ["$rootScope", "$firebaseArray", "Firebase"];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Tech = [{
	  id: "1-1",
	  name: "海軍",
	  level: "one",
	  img: "https://lh5.googleusercontent.com/Pd4LAmAoMoFC1wesUZeE3-LMBhel80KHipJ0jtzVi19yr4tpJXp07bYZfl6dLO83-c655A=w1621-h783",
	  politics: null,
	  building: "造船所",
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "1-2",
	  name: "騎乗",
	  level: "one",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUVUQ0N0R4M3ZnLWM&authuser=0&v=1434296087013&sz=w1896-h875",
	  politics: null,
	  building: null,
	  arms: null,
	  moves: "3マス",
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "1-3",
	  name: "金属加工術",
	  level: "one",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUdmlIM25pYlVkYTA&authuser=0&v=1434296075547&sz=w1381-h875",
	  politics: null,
	  building: "兵舎",
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "1-4",
	  name: "航海術",
	  level: "one",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUMS1LU0tXbFFSSUU&authuser=0&v=1434296058994&sz=w1381-h875",
	  politics: null,
	  building: "港",
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "1-5",
	  name: "石工術",
	  level: "one",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUSnhlT19NRWNoZXM&authuser=0&v=1434296048145&sz=w1381-h875",
	  politics: null,
	  building: null,
	  arms: null,
	  moves: null,
	  stack: "3個",
	  coin: null,
	  culturecard: null
	}, {
	  id: "1-6",
	  name: "畜産",
	  level: "one",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUOU91OERVMWtvcU0&authuser=0&v=1434296043134&sz=w1381-h875",
	  politics: null,
	  building: null,
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "1-7",
	  name: "通貨",
	  level: "one",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUbWdia2ZRRFo2TEk&authuser=0&v=1434296069884&sz=w1381-h875",
	  politics: null,
	  building: "市場",
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "1-8",
	  name: "哲学",
	  level: "one",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUcUh2SnlqNVVwUlk&authuser=0&v=1434296031646&sz=w1381-h875",
	  politics: null,
	  building: "神殿",
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "1-9",
	  name: "陶器",
	  level: "one",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUR0V2SXR4WkEzY1E&authuser=0&v=1434296080574&sz=w1381-h875",
	  politics: null,
	  building: "穀物庫 ",
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: "上限+1" }, {
	  id: "1-10",
	  name: "農業",
	  level: "one",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkURjZtcExTN1BXbzg&authuser=0&v=1434296064404&sz=w1381-h875",
	  politics: null,
	  building: null,
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "1-11",
	  name: "筆記",
	  level: "one",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUZXk0R3MtSVh1Mms&authuser=0&v=1434296053644&sz=w1381-h875",
	  politics: null,
	  building: "図書館",
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "1-12",
	  name: "法律",
	  level: "one",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUbnN6cW1oUHpNbnM&authuser=0&v=1434296037426&sz=w1381-h875",
	  politics: "共和制",
	  building: "交易所",
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "2-1",
	  name: "活版印刷",
	  level: "two",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUVkVwUDRwU1N6TW8&authuser=0&v=1434296142855&sz=w1381-h875",
	  politics: null,
	  building: "大学",
	  arms: null,
	  moves: null,
	  stack: " 4個",
	  coin: null,
	  culturecard: null
	}, {
	  id: "2-2",
	  name: "灌漑",
	  level: "two",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUVi0xQkpzalJyOE0&authuser=0&v=1434296148287&sz=w1381-h875",
	  politics: null,
	  building: null,
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "2-3",
	  name: "官吏",
	  level: "two",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUdi1qZm5uODF3TDA&authuser=0&v=1434296098155&sz=w1381-h875",
	  politics: null,
	  building: null,
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: "コイン+1",
	  culturecard: "上限+1" }, {
	  id: "2-4",
	  name: "官僚制",
	  level: "two",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUakJXRXVTTUpTVnM&authuser=0&v=1434296103527&sz=w1381-h875",
	  politics: null,
	  building: null,
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: "コイン+1",
	  culturecard: null
	}, {
	  id: "2-5",
	  name: "騎士道",
	  level: "two",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUaVRvWGNxQXJWVGc&authuser=0&v=1434296159398&sz=w1381-h875",
	  politics: "封建制",
	  building: null,
	  arms: "騎兵2",
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "2-6",
	  name: "君主政治",
	  level: "two",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUdVhzdmhwTTE2N3c&authuser=0&v=1434296092885&sz=w1381-h875",
	  politics: "君主政治",
	  building: null,
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "2-7",
	  name: "建築学",
	  level: "two",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUWUNwWlBHbGZtNjg&authuser=0&v=1434296125603&sz=w1381-h875",
	  politics: null,
	  building: "工房",
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "2-8",
	  name: "工学",
	  level: "two",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUTXI0QzNxd1RyY1U&authuser=0&v=1434296114499&sz=w1381-h875",
	  politics: null,
	  building: "上水道",
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "2-9",
	  name: "神秘主義",
	  level: "two",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUM3llWW5OZE9aNlE&authuser=0&v=1434296153655&sz=w1381-h875",
	  politics: null,
	  building: null,
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "2-10",
	  name: "数学",
	  level: "two",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUeGFwMWN2Q3NtZXc&authuser=0&v=1434296131909&sz=w1381-h875",
	  politics: null,
	  building: null,
	  arms: "砲兵2",
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "2-11",
	  name: "帆走",
	  level: "two",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUdnFXY2c0NlJhdVE&authuser=0&v=1434296120421&sz=w1381-h875",
	  politics: null,
	  building: null,
	  arms: null,
	  moves: "4マス",
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "2-12",
	  name: "兵站学",
	  level: "two",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUUHVrekJiQjM4VjA&authuser=0&v=1434296108792&sz=w1381-h875",
	  politics: null,
	  building: null,
	  arms: "全兵2",
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "2-13",
	  name: "民主主義",
	  level: "two",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUdHkyYWN2OGRhdGc&authuser=0&v=1434296137312&sz=w1381-h875",
	  politics: "民主主義",
	  building: null,
	  arms: "歩兵2",
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "3-1",
	  name: "火薬",
	  level: "three",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUSHhtbWk0ZXlkOFE&authuser=0&v=1434296164691&sz=w1381-h875",
	  politics: null,
	  building: null,
	  arms: "歩兵3",
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "3-2",
	  name: "環境保護",
	  level: "three",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUNmQ3eVh5X1RmaXM&authuser=0&v=1434296170226&sz=w1381-h875",
	  politics: null,
	  building: null,
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "3-3",
	  name: "教育",
	  level: "three",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUNTdMTmJSeDdQY3c&authuser=0&v=1434296175642&sz=w1381-h875",
	  politics: null,
	  building: null,
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "3-4",
	  name: "共産主義",
	  level: "three",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUVHJXTmRITmdsdTA&authuser=0&v=1434296181670&sz=w1381-h875",
	  politics: "共産主義",
	  building: null,
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "3-5",
	  name: "銀行制度",
	  level: "three",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUMWVrbUNKZ0xZSTg&authuser=0&v=1434296214954&sz=w1381-h875",
	  politics: null,
	  building: "銀行",
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "3-6",
	  name: "軍事学",
	  level: "three",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUbksxa0pDQWhvZ0k&authuser=0&v=1434296203790&sz=w1381-h875",
	  politics: null,
	  building: "士官学校",
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "3-7",
	  name: "蒸気機関",
	  level: "three",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUd0tuTEFWNW1wQVU&authuser=0&v=1434296197729&sz=w1381-h875",
	  politics: null,
	  building: null,
	  arms: null,
	  moves: "5マス",
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "3-8",
	  name: "神学",
	  level: "three",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUa1JnTFMzbDQ0MDA&authuser=0&v=1434296192206&sz=w1381-h875",
	  politics: "原理主義",
	  building: "大聖堂",
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: "上限+1" }, {
	  id: "3-9",
	  name: "生物学",
	  level: "three",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUcTZnVFdzSC1WRDQ&authuser=0&v=1434296186914&sz=w1381-h875",
	  politics: null,
	  building: null,
	  arms: null,
	  moves: null,
	  stack: "5個",
	  coin: null,
	  culturecard: null
	}, {
	  id: "3-10",
	  name: "鋳金",
	  level: "three",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUUzhDTFo5Yk5Xc0k&authuser=0&v=1434296221166&sz=w1381-h875",
	  politics: null,
	  building: null,
	  arms: "砲兵3",
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "3-11",
	  name: "鉄道",
	  level: "three",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUSGFOd0hfdVMwTkE&authuser=0&v=1434296209389&sz=w1381-h875",
	  politics: null,
	  building: "鉄鉱山",
	  arms: "騎兵3",
	  moves: null,
	  stack: null,
	  coin: "コイン+1",
	  culturecard: null
	}, {
	  id: "4-1",
	  name: "共通規格",
	  level: "four",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUa1QyWk9aRUgwcms&authuser=0&v=1434296248988&sz=w1381-h875",
	  politics: null,
	  building: null,
	  arms: "歩兵4",
	  moves: null,
	  stack: "6個",
	  coin: null,
	  culturecard: null
	}, {
	  id: "4-2",
	  name: "原子理論",
	  level: "four",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkURm8zMTJ0ODFweU0&authuser=0&v=1434296232119&sz=w1381-h875",
	  politics: null,
	  building: null,
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "4-3",
	  name: "コンピューター",
	  level: "four",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUdkk4ZjhUczlCdU0&authuser=0&v=1434296237517&sz=w1381-h875",
	  politics: null,
	  building: null,
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: "コイン+1",
	  culturecard: null
	}, {
	  id: "4-4",
	  name: "弾道学",
	  level: "four",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUX1MxcUJKeGFDODA&authuser=0&v=1434296260553&sz=w1381-h875",
	  politics: null,
	  building: null,
	  arms: "砲兵4",
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "4-5",
	  name: "内燃機関",
	  level: "four",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUZXBRdFpkSkJhZlU&authuser=0&v=1434296254662&sz=w1381-h875",
	  politics: null,
	  building: null,
	  arms: "騎兵4",
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "4-6",
	  name: "飛行機",
	  level: "four",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUcVRhWXN1MEw3Y28&authuser=0&v=1434296265960&sz=w1381-h875",
	  politics: null,
	  building: null,
	  arms: "飛行機",
	  moves: "6マス",
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "4-7",
	  name: "プラスチック",
	  level: "four",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUMFR2TE1TVmt1VXM&authuser=0&v=1434296226696&sz=w1381-h875",
	  politics: null,
	  building: null,
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "4-8",
	  name: "マスメディア",
	  level: "four",
	  img: "https://drive.google.com/thumbnail?id=0B2e1_JiUspkUREdsbG1aUnRGaDQ&authuser=0&v=1434296242840&sz=w1381-h875",
	  politics: null,
	  building: null,
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "5-1",
	  name: "宇宙飛行",
	  level: "five",
	  img: "",
	  politics: null,
	  building: null,
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}, {
	  id: "newton",
	  name: "アイザック・ニュートン",
	  level: "extra",
	  politics: null,
	  building: null,
	  arms: null,
	  moves: null,
	  stack: null,
	  coin: null,
	  culturecard: null
	}];

	Tech.findById = function (techId) {
	  return _.find(Tech, function (tech) {
	    return techId === tech.id;
	  });
	};

	module.exports = Tech;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var Firebase = (function () {
	  function Firebase() {
	    _classCallCheck(this, Firebase);
	  }

	  _createClass(Firebase, null, {
	    instance: {
	      value: function instance() {
	        if (angular.isUndefined(this.firebase)) {
	          this.firebase = new Firebase("https://civbg-support.firebaseio.com/");
	        }
	        return this.firebase;
	      }
	    }
	  });

	  return Firebase;
	})();

	module.exports = Firebase;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var NavbarController = (function () {
	  function NavbarController($modal, Players) {
	    _classCallCheck(this, NavbarController);

	    this.$modal = $modal;
	    this.Players = Players;
	  }

	  _createClass(NavbarController, {
	    newGame: {
	      value: function newGame() {
	        var _this = this;

	        var modalInstance = this.$modal.open({
	          animation: true,
	          templateUrl: "app/components/dialogs/newGame.html",
	          controller: "NewGameController",
	          controllerAs: "ctrl"
	        });

	        modalInstance.result.then(function (colors) {
	          _this.Players.start(colors);
	        });
	      }
	    }
	  });

	  return NavbarController;
	})();

	NavbarController.$inject = ["$modal", "Players"];

	module.exports = NavbarController;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var TechTreeController = (function () {
	  function TechTreeController($scope, $window, $modal, Players, Tech) {
	    _classCallCheck(this, TechTreeController);

	    this.$window = $window;
	    this.$modal = $modal;
	    this.player = $scope.player;
	    this.players = Players.players;
	    this.Tech = Tech;
	    this.levels = _(["one", "two", "three", "four"]).reverse();

	    this.initPlayerTechTree();
	  }

	  _createClass(TechTreeController, {
	    initPlayerTechTree: {
	      value: function initPlayerTechTree() {
	        if (!_.isObject(this.player.tech)) {
	          this.player.tech = {};
	        }
	        this.player.tech.keep = true;
	      }
	    },
	    toName: {
	      value: function toName(techId) {
	        return _.find(this.Tech, function (tech) {
	          return tech.id === techId;
	        }).name;
	      }
	    },
	    isTechAddable: {
	      value: function isTechAddable(level) {
	        switch (level) {
	          case "four":
	            return _.keys(this.player.tech.four).length < _.keys(this.player.tech.three).length - 1;
	          case "three":
	            return _.keys(this.player.tech.three).length < _.keys(this.player.tech.two).length - 1;
	          case "two":
	            return _.keys(this.player.tech.two).length < _.keys(this.player.tech.one).length - 1;
	          default:
	            return true;
	        }
	      }
	    },
	    isNewtonUsed: {
	      value: function isNewtonUsed() {
	        var containsNewton = function (techIds) {
	          return _.contains(techIds, "newton");
	        };
	        var newtonScanner = function (player) {
	          return containsNewton(player.tech.one) || containsNewton(player.tech.two) || containsNewton(player.tech.three) || containsNewton(player.tech.four);
	        };
	        return _.find(this.players, newtonScanner);
	      }
	    },
	    remainingTechs: {
	      value: function remainingTechs(level) {
	        var _this = this;

	        var techs = _.chain(this.Tech).filter(function (tech) {
	          return tech.level === level;
	        }).filter(function (tech) {
	          return _.values(_this.player.tech[level]).indexOf(tech.id) === -1;
	        }).value();

	        // ニュートン
	        if (level !== "five" && !this.isNewtonUsed()) {
	          techs.push(this.Tech[this.Tech.length - 1]);
	        }

	        // 初期技術
	        if (level === "one" && _.isEmpty(this.player.tech.one)) {
	          return _.filter(this.Tech, function (tech) {
	            return tech.level === "one" || tech.level === "two";
	          });
	        }

	        return techs;
	      }
	    },
	    appendTech: {
	      value: function appendTech(level, techId) {
	        var length = _.max(_.chain(this.player.tech[level]).keys().map(function (k) {
	          return +k;
	        }).value().concat([-1]));
	        if (!this.player.tech[level]) {
	          this.player.tech[level] = {};
	        }
	        this.player.tech[level][length + 1] = techId;
	        this.updateArmsRank();
	      }
	    },
	    removeTech: {
	      value: function removeTech(level, techId) {
	        if (this.$window.confirm("ほんまに消すんか？")) {
	          var index = this.player.tech[level].indexOf(techId);
	          if (index >= 0) {
	            this.player.tech[level].splice(index, 1);
	            this.updateArmsRank();
	          }
	        }
	      }
	    },
	    updateArmsRank: {
	      value: function updateArmsRank() {
	        var _this = this;

	        var techArray = _.compact(_.flatten([_.values(this.player.tech.one), _.values(this.player.tech.two), _.values(this.player.tech.three), _.values(this.player.tech.four)]));

	        this.player.arms = {
	          sword: 1,
	          cannon: 1,
	          cavalry: 1,
	          airforce: 0
	        };

	        _.chain(techArray).map(this.Tech.findById).filter(function (tech) {
	          return angular.isString(tech.arms);
	        }).each(function (tech) {
	          if (tech.arms.indexOf("歩兵") === 0) {
	            _this.player.arms.sword = _.max([_this.player.arms.sword, +tech.arms.slice(-1)]);
	          }
	          if (tech.arms.indexOf("砲兵") === 0) {
	            _this.player.arms.cannon = _.max([_this.player.arms.cannon, +tech.arms.slice(-1)]);
	          }
	          if (tech.arms.indexOf("騎兵") === 0) {
	            _this.player.arms.cavalry = _.max([_this.player.arms.cavalry, +tech.arms.slice(-1)]);
	          }
	          if (tech.arms.indexOf("全兵") === 0) {
	            _this.player.arms.sword = _.max([_this.player.arms.sword, +tech.arms.slice(-1)]);
	            _this.player.arms.cannon = _.max([_this.player.arms.cannon, +tech.arms.slice(-1)]);
	            _this.player.arms.cavalry = _.max([_this.player.arms.cavalry, +tech.arms.slice(-1)]);
	          }
	          if (tech.arms.indexOf("飛行機") === 0) {
	            _this.player.arms.airforce = 1;
	          }
	        });
	      }
	    },
	    openDetail: {
	      value: function openDetail(techId) {
	        this.$modal.open({
	          animation: true,
	          templateUrl: "app/components/dialogs/techDetail.html",
	          controller: "TechDetailController",
	          controllerAs: "ctrl",
	          size: "lg",
	          resolve: {
	            techId: function () {
	              return techId;
	            }
	          }
	        });
	      }
	    }
	  });

	  return TechTreeController;
	})();

	module.exports = TechTreeController;

	TechTreeController.$inject = ["$scope", "$window", "$modal", "Players", "Tech"];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	"use strict";

	var ArmsInfoController = exports.ArmsInfoController = function ArmsInfoController($scope, Players) {
	  _classCallCheck(this, ArmsInfoController);

	  this.player = $scope.player;
	  this.players = Players.players;

	  if (!this.player.arms) {
	    this.player.arms = {
	      sword: 1,
	      cannon: 1,
	      cavalry: 1,
	      airforce: 0
	    };
	  }
	};

	var ArmsDropdownDirective = exports.ArmsDropdownDirective = (function () {
	  function ArmsDropdownDirective() {
	    _classCallCheck(this, ArmsDropdownDirective);

	    this.templateUrl = "arms-dropdown-template.html";
	    this.restrict = "EA";
	    this.scope = {
	      model: "=ngModel",
	      airforce: "@"
	    };
	  }

	  _createClass(ArmsDropdownDirective, {
	    link: {
	      value: function link(scope) {
	        scope.ranks = [1, 2, 3, 4];
	        scope.updateRank = function (rank) {
	          return scope.model = rank;
	        };
	      }
	    }
	  }, {
	    activate: {
	      value: function activate() {
	        ArmsDropdownDirective.instance = new ArmsDropdownDirective();
	        return ArmsDropdownDirective.instance;
	      }
	    }
	  });

	  return ArmsDropdownDirective;
	})();

	ArmsInfoController.$inject = ["$scope", "Players"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var NewGameController = (function () {
	  function NewGameController($modalInstance) {
	    _classCallCheck(this, NewGameController);

	    this.$modalInstance = $modalInstance;
	    this.colors = [];
	    this.COLORS = ["RED", "GREEN", "BLUE", "YELLOW", "PURPLE"];
	  }

	  _createClass(NewGameController, {
	    restColors: {
	      value: function restColors(self) {
	        var others = _.without(this.colors, this.colors[self]);
	        return _.difference(this.COLORS, others);
	      }
	    },
	    ok: {
	      value: function ok() {
	        this.$modalInstance.close(this.colors);
	      }
	    }
	  });

	  return NewGameController;
	})();

	module.exports = NewGameController;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var TechDetailController = (function () {
	  function TechDetailController($modalInstance, Tech, techId) {
	    _classCallCheck(this, TechDetailController);

	    this.$modalInstance = $modalInstance;
	    this.tech = _.find(Tech, function (tech) {
	      return techId === tech.id;
	    });
	  }

	  _createClass(TechDetailController, {
	    close: {
	      value: function close() {
	        this.$modalInstance.close();
	      }
	    }
	  });

	  return TechDetailController;
	})();

	module.exports = TechDetailController;

/***/ }
/******/ ])
angular.module("civbgSupport").run(["$templateCache", function($templateCache) {$templateCache.put("app/main/main.html","<div ng-include=\"\'app/components/navbar/navbar.html\'\"></div><div class=\"container\" ng-controller=\"MainController as ctrl\"><div ng-repeat=\"player in ctrl.players\" class=\"player-area {{player.color}}\"><span class=\"player-badge {{player.color}}\">{{player.color}}</span><ng-include src=\"\'app/components/armsInfo/armsInfo.html\'\"></ng-include><ng-include src=\"\'app/components/techTree/techTree.html\'\"></ng-include></div></div>");
$templateCache.put("app/components/armsInfo/armsInfo.html","<div ng-controller=\"ArmsInfoController as ctrl\" class=\"arms-info\"><script type=\"text/ng-template\" id=\"arms-dropdown-template.html\"><img ng-src=\"assets/images/arms_rank{{model}}.png\" ng-if=\"!airforce\"> <span class=\"airforce-none\" ng-if=\"airforce && model === 0\"></span> <img src=\"assets/images/arms_airforce.png\" ng-if=\"airforce && model === 1\"></script><div class=\"arms-wrapper sword\"><span class=\"arms-icon\">歩</span> <span class=\"arms-rank-select img-thumbnail\"><arms-dropdown player=\"player\" ng-model=\"player.arms.sword\"></arms-dropdown></span></div><div class=\"arms-wrapper cannon\"><span class=\"arms-icon\">砲</span> <span class=\"arms-rank-select img-thumbnail\"><arms-dropdown player=\"player\" ng-model=\"player.arms.cannon\"></arms-dropdown></span></div><div class=\"arms-wrapper cavalry\"><span class=\"arms-icon\">騎</span> <span class=\"arms-rank-select img-thumbnail\"><arms-dropdown player=\"player\" ng-model=\"player.arms.cavalry\"></arms-dropdown></span></div><div class=\"arms-wrapper airforce\"><span class=\"arms-icon\">航</span> <span class=\"arms-rank-select img-thumbnail\"><arms-dropdown player=\"player\" ng-model=\"player.arms.airforce\" airforce=\"true\"></arms-dropdown></span></div></div>");
$templateCache.put("app/components/dialogs/newGame.html","<form name=\"NewGameForm\" class=\"new-game-form form-horizontal\"><div class=\"form-group\"><label for=\"new-game-first-color\" class=\"col-sm-2 control-label\">1st</label><div class=\"col-sm-4\"><select name=\"first\" id=\"new-game-first-color\" class=\"form-control\" ng-model=\"ctrl.colors[0]\" ng-options=\"color for color in ctrl.restColors(0)\" required=\"\"></select></div><label for=\"new-game-second-color\" class=\"col-sm-2 control-label\">2nd</label><div class=\"col-sm-4\"><select name=\"second\" id=\"new-game-second-color\" class=\"form-control\" ng-model=\"ctrl.colors[1]\" ng-options=\"color for color in ctrl.restColors(1)\" required=\"\"></select></div></div><div class=\"form-group\"><label for=\"new-game-third-color\" class=\"col-sm-2 control-label\">3rd</label><div class=\"col-sm-4\"><select name=\"third\" id=\"new-game-third-color\" class=\"form-control\" ng-model=\"ctrl.colors[2]\" ng-options=\"color for color in ctrl.restColors(2)\" required=\"\"></select></div><label for=\"new-game-fourth-color\" class=\"col-sm-2 control-label\">4th</label><div class=\"col-sm-4\"><select name=\"fourth\" id=\"new-game-fourth-color\" class=\"form-control\" ng-model=\"ctrl.colors[3]\" ng-options=\"color for color in ctrl.restColors(3)\" required=\"\"></select></div></div><div class=\"text-center\"><p ng-if=\"NewGameForm.$invalid\">プレイヤーの色を選んでください。</p><button type=\"button\" class=\"btn btn-primary\" ng-click=\"ctrl.ok()\" ng-disabled=\"NewGameForm.$invalid\">開始する</button></div></form>");
$templateCache.put("app/components/dialogs/techDetail.html","<div class=\"tech-detail\" ng-click=\"ctrl.close()\"><img ng-src=\"{{ctrl.tech.img}}\"></div>");
$templateCache.put("app/components/navbar/navbar.html","<nav class=\"navbar navbar-static-top navbar-inverse\" ng-controller=\"NavbarController as ctrl\"><div class=\"container-fluid\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"/\"><span class=\"glyphicon glyphicon-home\"></span> CivBG Support</a></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-6\"><ul class=\"nav navbar-nav\"><li><a href=\"#\" ng-click=\"ctrl.newGame()\"><span class=\"glyphicon glyphicon-cloud\"></span> New Game</a></li></ul></div></div></nav>");
$templateCache.put("app/components/techTree/techTree.html","<div ng-controller=\"TechTreeController as ctrl\" class=\"tech-tree tech-level1-{{player.tech.one.length}}\"><div ng-repeat=\"level in ctrl.levels\" class=\"tech-row\"><ul class=\"tech-list tech-{{level}}\"><li ng-repeat=\"tech in player.tech[level]\" class=\"tech-list-item\"><a class=\"remove-icon\" ng-click=\"ctrl.removeTech(level, tech)\"><span class=\"glyphicon glyphicon-remove\"></span></a><div class=\"tech-list-item-wrapper\"><a ng-click=\"ctrl.openDetail(tech)\">{{ctrl.toName(tech)}}</a></div></li><li class=\"tech-list-item append-tech\" ng-if=\"ctrl.isTechAddable(level)\"><div class=\"tech-list-item-wrapper\"><select name=\"appendTech\" ng-options=\"tech.id as tech.name for tech in ctrl.remainingTechs(level)\" ng-model=\"selectedTechId\" ng-change=\"ctrl.appendTech(level, selectedTechId); selectedTechId = \'\'\"><option value=\"\">----</option></select></div></li></ul></div></div>");}]);