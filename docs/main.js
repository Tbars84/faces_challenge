(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-table-conteiner></app-table-conteiner>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'faces_challenge';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _challengeLayout_challenge_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./challengeLayout/challenge.module */ "./src/app/challengeLayout/challenge.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _challengeLayout_challenge_module__WEBPACK_IMPORTED_MODULE_4__["ChallengeDashboardModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/challengeLayout/challenge.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/challengeLayout/challenge.module.ts ***!
  \*****************************************************/
/*! exports provided: ChallengeDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeDashboardModule", function() { return ChallengeDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _containers_table_conteiner_table_conteiner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/table-conteiner/table-conteiner.component */ "./src/app/challengeLayout/containers/table-conteiner/table-conteiner.component.ts");
/* harmony import */ var _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tables/tables.component */ "./src/app/challengeLayout/components/tables/tables.component.ts");





var ChallengeDashboardModule = /** @class */ (function () {
    function ChallengeDashboardModule() {
    }
    ChallengeDashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _containers_table_conteiner_table_conteiner_component__WEBPACK_IMPORTED_MODULE_3__["TableConteinerComponent"],
                _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_4__["TablesComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _containers_table_conteiner_table_conteiner_component__WEBPACK_IMPORTED_MODULE_3__["TableConteinerComponent"]
            ],
        })
    ], ChallengeDashboardModule);
    return ChallengeDashboardModule;
}());



/***/ }),

/***/ "./src/app/challengeLayout/components/tables/tables.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/challengeLayout/components/tables/tables.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">id</th>\n      <th scope=\"col\">Faces</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of arrayTables\" [ngClass]=\"{'impares': item.odd}\">\n      <th scope=\"row\">{{item.id}}</th>\n      <td>\n        <div *ngIf=\"item.contentArr.length === 0\">\n          <div class=\"container\">\n            <div class=\"multiplosTres\"> <img [src]=\"'./assets/'+item.content\" alt=\"\"></div>\n          </div>\n        </div>\n        <div *ngIf=\"item.contentArr.length > 0\">\n          <div class=\"container\">\n            <div class=\"multiplosTres\"> <img [src]=\"'./assets/'+item.contentArr[0]\" alt=\"\"></div>\n            <div class=\"multiplosCinco\"><img [src]=\"'./assets/'+item.contentArr[1]\" alt=\"\"></div>\n          </div>\n        </div>\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/challengeLayout/components/tables/tables.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/challengeLayout/components/tables/tables.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".impares {\n  background: #949494; }\n\n.container {\n  display: flex;\n  justify-content: flex-start; }\n\n.container * {\n    max-width: 85px; }\n\n.container * img {\n      max-width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYW1pbG9fdGFiYXJlcy9EZXNrdG9wL2FuZ3VsYXIvZmFjZXNfY2hhbGxlbmdlL3NyYy9hcHAvY2hhbGxlbmdlTGF5b3V0L2NvbXBvbmVudHMvdGFibGVzL3RhYmxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUE4QixFQUFBOztBQUVsQztFQUNJLGFBQWE7RUFDYiwyQkFBMkIsRUFBQTs7QUFGL0I7SUFJUSxlQUFlLEVBQUE7O0FBSnZCO01BTVksZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hhbGxlbmdlTGF5b3V0L2NvbXBvbmVudHMvdGFibGVzL3RhYmxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbXBhcmVze1xuICAgIGJhY2tncm91bmQ6IHJnYigxNDgsIDE0OCwgMTQ4KTtcbn1cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICp7XG4gICAgICAgIG1heC13aWR0aDogODVweDtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/challengeLayout/components/tables/tables.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/challengeLayout/components/tables/tables.component.ts ***!
  \***********************************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TablesComponent = /** @class */ (function () {
    function TablesComponent() {
    }
    TablesComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TablesComponent.prototype, "arrayTables", void 0);
    TablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tables',
            template: __webpack_require__(/*! ./tables.component.html */ "./src/app/challengeLayout/components/tables/tables.component.html"),
            styles: [__webpack_require__(/*! ./tables.component.scss */ "./src/app/challengeLayout/components/tables/tables.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TablesComponent);
    return TablesComponent;
}());



/***/ }),

/***/ "./src/app/challengeLayout/containers/table-conteiner/table-conteiner.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/challengeLayout/containers/table-conteiner/table-conteiner.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-tables \n    [arrayTables] = \"arr\">\n</app-tables>"

/***/ }),

/***/ "./src/app/challengeLayout/containers/table-conteiner/table-conteiner.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/challengeLayout/containers/table-conteiner/table-conteiner.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYWxsZW5nZUxheW91dC9jb250YWluZXJzL3RhYmxlLWNvbnRlaW5lci90YWJsZS1jb250ZWluZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/challengeLayout/containers/table-conteiner/table-conteiner.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/challengeLayout/containers/table-conteiner/table-conteiner.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TableConteinerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableConteinerComponent", function() { return TableConteinerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TableConteinerComponent = /** @class */ (function () {
    function TableConteinerComponent() {
        this.arr = [];
        this.limit = 100;
        this.counterMeth();
    }
    TableConteinerComponent.prototype.ngOnInit = function () {
    };
    TableConteinerComponent.prototype.counterMeth = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var index;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        index = 1;
                        _a.label = 1;
                    case 1:
                        if (!(index <= this.limit)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.checkConditions(index)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        index++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TableConteinerComponent.prototype.checkConditions = function (index) {
        var oddCheck = true;
        var content;
        var contentArr = [];
        if (index % 2 === 0) {
            oddCheck = false;
        }
        if (index % 3 === 0) {
            content = 'happy.png';
        }
        if (index % 5 === 0) {
            content = 'sad.png';
        }
        if (index % 15 === 0) {
            contentArr.push('happy.png', 'sad.png');
        }
        this.arr.push({
            'id': index,
            'odd': oddCheck,
            'content': content,
            'contentArr': contentArr
        });
    };
    TableConteinerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table-conteiner',
            template: __webpack_require__(/*! ./table-conteiner.component.html */ "./src/app/challengeLayout/containers/table-conteiner/table-conteiner.component.html"),
            styles: [__webpack_require__(/*! ./table-conteiner.component.scss */ "./src/app/challengeLayout/containers/table-conteiner/table-conteiner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TableConteinerComponent);
    return TableConteinerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/camilo_tabares/Desktop/angular/faces_challenge/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map