/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDom = __webpack_require__(2);
var OptionPanel_1 = __webpack_require__(4);
var SourceList_1 = __webpack_require__(8);
var grid = {
    "display": "flex",
    'flex-direction': "row",
    "justify-content": "space-between"
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(OptionPanel_1.OptionPanel, null),
            React.createElement(SourceList_1.SourceList, null)));
    };
    return App;
}(React.Component));
ReactDom.render(React.createElement(App, null), document.getElementById("app"));


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
// import * from "./node_modules/bootstrap-css";
var OptionPanel = /** @class */ (function (_super) {
    __extends(OptionPanel, _super);
    function OptionPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OptionPanel.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("a", null, "new note /"),
            React.createElement("a", null, " delete")));
    };
    return OptionPanel;
}(React.Component));
exports.OptionPanel = OptionPanel;


/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ListItem_1 = __webpack_require__(10);
var ListNotes = /** @class */ (function (_super) {
    __extends(ListNotes, _super);
    function ListNotes(props) {
        return _super.call(this, props) || this;
    }
    ListNotes.prototype.render = function () {
        var row = [];
        var list = this.props.list;
        for (var i = 0; i < list.length; i++) {
            row.push(React.createElement(ListItem_1.ListItem, { item: list[i], key: list[i].id }));
        }
        return (React.createElement("div", null,
            React.createElement("h2", null, "ListNotes"),
            React.createElement("ul", null,
                " ",
                row)));
    };
    return ListNotes;
}(React.Component));
exports.ListNotes = ListNotes;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var NoteContent = /** @class */ (function (_super) {
    __extends(NoteContent, _super);
    function NoteContent(props) {
        return _super.call(this, props) || this;
    }
    NoteContent.prototype.render = function () {
        var selectedItem = this.props.selectedItem;
        return (React.createElement("div", null,
            React.createElement("h2", null, "Note content"),
            React.createElement("div", null,
                React.createElement("label", { htmlFor: "noteTitle" }, "Title"),
                React.createElement("input", { type: "text", id: "noteTitle", value: selectedItem.name })),
            React.createElement("div", null,
                React.createElement("label", { htmlFor: "noteContent" }, "Content"),
                React.createElement("input", { type: "text", id: "noteContent", value: selectedItem.content })),
            React.createElement("div", null,
                React.createElement("label", { htmlFor: "noteTitle" }, "File"),
                React.createElement("input", { type: "file", id: "noteFile" }))));
    };
    return NoteContent;
}(React.Component));
exports.NoteContent = NoteContent;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var NotesContainer_1 = __webpack_require__(9);
var Notes = [
    {
        id: 1,
        name: "note 1",
        content: "some content in this note",
        date: new Date(),
        comments: [
            {
                author: "Lena P",
                content: "my cool comment",
                createData: new Date()
            },
            {
                author: "Andriy P",
                content: "my comment is better",
                createData: new Date()
            }
        ]
    },
    {
        id: 2,
        name: "note 2",
        content: "some content in this note, this is my secont note in this app",
        date: new Date(),
        comments: [
            {
                author: "Lena P",
                content: "my cool comment in note 2",
                createData: new Date()
            },
            {
                author: "Andriy P",
                content: "my comment is better in this note 2",
                createData: new Date()
            }
        ]
    }
];
var SourceList = /** @class */ (function (_super) {
    __extends(SourceList, _super);
    function SourceList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SourceList.prototype.render = function () {
        return (React.createElement("div", { className: "panel" },
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("a", null, "localStorage")),
                React.createElement("li", null,
                    React.createElement("a", null, "Firebase"))),
            React.createElement(NotesContainer_1.NotesContainer, { list: Notes })));
    };
    return SourceList;
}(React.Component));
exports.SourceList = SourceList;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
// import * from "./node_modules/bootstrap-css";
var ListNotes_1 = __webpack_require__(6);
var NoteContent_1 = __webpack_require__(7);
var NotesContainer = /** @class */ (function (_super) {
    __extends(NotesContainer, _super);
    /**
     *
     */
    function NotesContainer(props) {
        var _this = _super.call(this, props) || this;
        console.log(props);
        return _this;
    }
    NotesContainer.prototype.render = function () {
        var list = this.props.list;
        return (React.createElement("div", { className: "notesContainer" },
            React.createElement(ListNotes_1.ListNotes, { list: list }),
            React.createElement(NoteContent_1.NoteContent, { selectedItem: list[0] })));
    };
    return NotesContainer;
}(React.Component));
exports.NotesContainer = NotesContainer;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    /**
     *
     */
    function ListItem(props) {
        return _super.call(this, props) || this;
    }
    ListItem.prototype.render = function () {
        var item = this.props.item;
        return (React.createElement("li", null,
            React.createElement("span", null,
                item.name,
                "  "),
            React.createElement("span", null, item.date.getFullYear())));
    };
    return ListItem;
}(React.Component));
exports.ListItem = ListItem;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map