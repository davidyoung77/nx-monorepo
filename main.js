(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!*********************************************!*\
  !*** multi ./apps/address-book/src/main.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/davidyoung/Development/demos/nx-monorepo/apps/address-book/src/main.ts */"IB4M");


/***/ }),

/***/ "5Ic5":
/*!********************************************!*\
  !*** ./libs/address-book-lib/src/index.ts ***!
  \********************************************/
/*! exports provided: AddressBookLibModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_address_book_lib_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/address-book-lib.module */ "TbRI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddressBookLibModule", function() { return _lib_address_book_lib_module__WEBPACK_IMPORTED_MODULE_0__["AddressBookLibModule"]; });




/***/ }),

/***/ "BI/1":
/*!****************************************************!*\
  !*** ./apps/address-book/src/app/app.component.ts ***!
  \****************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");


class AppComponent {
    constructor() {
        this.title = 'Address Book';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["nx-monorepo-root"]], decls: 5, vars: 2, consts: [[1, "flex", 3, "routerLink"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome to ", ctx.title, "!");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  font-family: sans-serif;\n  min-width: 300px;\n  max-width: 600px;\n  margin: 50px auto;\n}\n.gutter-left[_ngcontent-%COMP%] {\n  margin-left: 9px;\n}\n.col-span-2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nheader[_ngcontent-%COMP%] {\n  background-color: #143055;\n  color: white;\n  padding: 5px;\n  border-radius: 3px;\n  cursor: pointer;\n}\nmain[_ngcontent-%COMP%] {\n  padding: 0 36px;\n}\np[_ngcontent-%COMP%] {\n  text-align: center;\n}\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-left: 18px;\n  font-size: 24px;\n}\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 20px;\n  margin: 40px 0 10px 0;\n}\n.resources[_ngcontent-%COMP%] {\n  text-align: center;\n  list-style: none;\n  padding: 0;\n  display: grid;\n  grid-gap: 9px;\n  grid-template-columns: 1fr 1fr;\n}\n.resource[_ngcontent-%COMP%] {\n  color: #0094ba;\n  height: 36px;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  padding: 3px 9px;\n  text-decoration: none;\n}\n.resource[_ngcontent-%COMP%]:hover {\n  background-color: rgba(68, 138, 255, 0.04);\n}\npre[_ngcontent-%COMP%] {\n  padding: 9px;\n  border-radius: 4px;\n  background-color: black;\n  color: #eee;\n}\ndetails[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  color: #333;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  padding: 3px 9px;\n  margin-bottom: 9px;\n}\nsummary[_ngcontent-%COMP%] {\n  cursor: pointer;\n  outline: none;\n  height: 36px;\n  line-height: 36px;\n}\n.github-star-container[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  line-height: 20px;\n}\n.github-star-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: #333;\n}\n.github-star-badge[_ngcontent-%COMP%] {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n}\n.github-star-badge[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -0.5em;\n}\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFBQTtBQUdBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDRjtBQUVBO0VBQ0UsZUFBQTtBQUNGO0FBRUE7RUFDRSxrQkFBQTtBQUNGO0FBRUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNGO0FBRUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUNGO0FBRUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFDRjtBQUVBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7QUFFQTtFQUNFLDBDQUFBO0FBQ0Y7QUFFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNGO0FBRUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBRUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGO0FBRUE7RUFDRSxnRUFBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7QUFDRjtBQUNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUVGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBSZW1vdmUgdGVtcGxhdGUgY29kZSBiZWxvd1xuICovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG5cbi5ndXR0ZXItbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG59XG5cbi5jb2wtc3Bhbi0yIHtcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MzA1NTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5tYWluIHtcbiAgcGFkZGluZzogMCAzNnB4O1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiA0MHB4IDAgMTBweCAwO1xufVxuXG4ucmVzb3VyY2VzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogOXB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG59XG5cbi5yZXNvdXJjZSB7XG4gIGNvbG9yOiAjMDA5NGJhO1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogM3B4IDlweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucmVzb3VyY2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY4LCAxMzgsIDI1NSwgMC4wNCk7XG59XG5cbnByZSB7XG4gIHBhZGRpbmc6IDlweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6ICNlZWU7XG59XG5cbmRldGFpbHMge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBwYWRkaW5nOiAzcHggOXB4O1xuICBtYXJnaW4tYm90dG9tOiA5cHg7XG59XG5cbnN1bW1hcnkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGhlaWdodDogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG59XG5cbi5naXRodWItc3Rhci1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmdpdGh1Yi1zdGFyLWNvbnRhaW5lciBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzMzMztcbn1cblxuLmdpdGh1Yi1zdGFyLWJhZGdlIHtcbiAgY29sb3I6ICMyNDI5MmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI2ZhZmJmYywgI2VmZjNmNiA5MCUpO1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI2YwZjNmNiwgI2U2ZWJmMSA5MCUpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjcsIDMxLCAzNSwgMC4zNSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0wLjVlbTtcbn1cbi5naXRodWItc3Rhci1iYWRnZSAubWF0ZXJpYWwtaWNvbnMge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "BRv1":
/*!*********************************************************************************************!*\
  !*** ./libs/address-book-lib/src/lib/address-book-service/addresss-book.service.adapter.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddressBookServiceAdapter, ADDRESS_BOOK_API_CONFIGURATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressBookServiceAdapter", function() { return AddressBookServiceAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDRESS_BOOK_API_CONFIGURATION", function() { return ADDRESS_BOOK_API_CONFIGURATION; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");

class AddressBookServiceAdapter {
}
const ADDRESS_BOOK_API_CONFIGURATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('AddressBookApiConfiguration');


/***/ }),

/***/ "IB4M":
/*!***************************************!*\
  !*** ./apps/address-book/src/main.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "OEFS");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "pcHy");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "OEFS":
/*!*************************************************!*\
  !*** ./apps/address-book/src/app/app.module.ts ***!
  \*************************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "BI/1");
/* harmony import */ var _yandc_address_book_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @yandc/address-book-lib */ "5Ic5");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "pcHy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _libs_address_book_lib_src_lib_address_book_lib_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../libs/address-book-lib/src/lib/address-book-lib.module */ "TbRI");









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _yandc_address_book_lib__WEBPACK_IMPORTED_MODULE_3__["AddressBookLibModule"].forRoot({
                addressBookListUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].randomUserApiUrl,
                randomUserApiSeed: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].randomUserApiSeed,
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _libs_address_book_lib_src_lib_address_book_lib_module__WEBPACK_IMPORTED_MODULE_7__["AddressBookLibModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();


/***/ }),

/***/ "TDb+":
/*!************************************************************************************!*\
  !*** ./libs/address-book-lib/src/lib/address-book-service/address-book.service.ts ***!
  \************************************************************************************/
/*! exports provided: AddressBookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressBookService", function() { return AddressBookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _adapters_random_user_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adapters/random-user.adapter */ "UdFA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");






class AddressBookService {
    constructor(_http, _adapter) {
        this._http = _http;
        this._adapter = _adapter;
    }
    get addressBookList$() {
        return this._adapter.addressBookList$;
    }
    getRecords() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this._adapter.getRecords();
        });
    }
    getUserDetails(userId) {
        return this._adapter.getUserDetails(userId);
    }
}
AddressBookService.ɵfac = function AddressBookService_Factory(t) { return new (t || AddressBookService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_adapters_random_user_adapter__WEBPACK_IMPORTED_MODULE_2__["RandomUserAdapter"])); };
AddressBookService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AddressBookService, factory: AddressBookService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "TbRI":
/*!******************************************************************!*\
  !*** ./libs/address-book-lib/src/lib/address-book-lib.module.ts ***!
  \******************************************************************/
/*! exports provided: AddressBookLibModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressBookLibModule", function() { return AddressBookLibModule; });
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/table */ "GXRp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _address_book_list_address_book_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./address-book-list/address-book-list.component */ "wX7L");
/* harmony import */ var _address_book_detail_address_book_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./address-book-detail/address-book-detail.component */ "rPOf");
/* harmony import */ var _address_book_service_address_book_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./address-book-service/address-book.service */ "TDb+");
/* harmony import */ var _address_book_service_addresss_book_service_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./address-book-service/addresss-book.service.adapter */ "BRv1");











class AddressBookLibModule {
    static forRoot(configuration) {
        return {
            ngModule: AddressBookLibModule,
            providers: [
                _address_book_service_address_book_service__WEBPACK_IMPORTED_MODULE_7__["AddressBookService"],
                {
                    provide: _address_book_service_addresss_book_service_adapter__WEBPACK_IMPORTED_MODULE_8__["ADDRESS_BOOK_API_CONFIGURATION"],
                    useValue: configuration
                }
            ]
        };
    }
}
AddressBookLibModule.ɵfac = function AddressBookLibModule_Factory(t) { return new (t || AddressBookLibModule)(); };
AddressBookLibModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AddressBookLibModule });
AddressBookLibModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkTableModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                { path: 'list', pathMatch: 'full', component: _address_book_list_address_book_list_component__WEBPACK_IMPORTED_MODULE_5__["AddressBookListComponent"] },
                { path: 'detail/:userId', pathMatch: 'full', component: _address_book_detail_address_book_detail_component__WEBPACK_IMPORTED_MODULE_6__["AddressBookDetailComponent"] },
                { path: '**', redirectTo: 'list', pathMatch: 'full' },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AddressBookLibModule, { declarations: [_address_book_list_address_book_list_component__WEBPACK_IMPORTED_MODULE_5__["AddressBookListComponent"],
        _address_book_detail_address_book_detail_component__WEBPACK_IMPORTED_MODULE_6__["AddressBookDetailComponent"]], imports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkTableModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_address_book_list_address_book_list_component__WEBPACK_IMPORTED_MODULE_5__["AddressBookListComponent"]] }); })();


/***/ }),

/***/ "UdFA":
/*!********************************************************************************************!*\
  !*** ./libs/address-book-lib/src/lib/address-book-service/adapters/random-user.adapter.ts ***!
  \********************************************************************************************/
/*! exports provided: RandomUserAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomUserAdapter", function() { return RandomUserAdapter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _addresss_book_service_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addresss-book.service.adapter */ "BRv1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");






class RandomUserAdapter {
    constructor(_http, _environment) {
        this._http = _http;
        this._environment = _environment;
        this._url = `${this._environment.addressBookListUrl}?seed=${this._environment.randomUserApiSeed}&results=100`;
        this._addressBookList$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.addressBookList$ = this._addressBookList$.asObservable();
    }
    getRecords() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = yield this._http.get(this._url).toPromise();
            this._addressBookList$.next(response.results);
        });
    }
    getUserDetails(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this._addressBookList$.value.length) {
                yield this.getRecords();
            }
            return this._addressBookList$.value.find(user => user.id.value === userId);
        });
    }
}
RandomUserAdapter.ɵfac = function RandomUserAdapter_Factory(t) { return new (t || RandomUserAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_addresss_book_service_adapter__WEBPACK_IMPORTED_MODULE_3__["ADDRESS_BOOK_API_CONFIGURATION"])); };
RandomUserAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: RandomUserAdapter, factory: RandomUserAdapter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pcHy":
/*!***********************************************************!*\
  !*** ./apps/address-book/src/environments/environment.ts ***!
  \***********************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    randomUserApiSeed: '069d887ebb14ea32',
    randomUserApiUrl: 'https://randomuser.me/api',
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

/***/ "rPOf":
/*!********************************************************************************************!*\
  !*** ./libs/address-book-lib/src/lib/address-book-detail/address-book-detail.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AddressBookDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressBookDetailComponent", function() { return AddressBookDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _address_book_service_address_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../address-book-service/address-book.service */ "TDb+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");








function AddressBookDetailComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Contact:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Cell:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Phone:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Address:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.userDetail.picture.large, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", ctx_r0.userDetail.name.title, " ", ctx_r0.userDetail.name.first, " ", ctx_r0.userDetail.name.first, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "tel:" + ctx_r0.userDetail.cell, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.userDetail.cell);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "tel:" + ctx_r0.userDetail.phone, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.userDetail.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "mailto:" + ctx_r0.userDetail.email, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.userDetail.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r0.userDetail.location.street.number, " ", ctx_r0.userDetail.location.street.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", ctx_r0.userDetail.location.state, ", ", ctx_r0.userDetail.location.country, ", ", ctx_r0.userDetail.location.postcode, " ");
} }
class AddressBookDetailComponent {
    constructor(_changeDetectorRef, _AddressBookService, _activatedRoute) {
        this._changeDetectorRef = _changeDetectorRef;
        this._AddressBookService = _AddressBookService;
        this._activatedRoute = _activatedRoute;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._userId = this._activatedRoute.snapshot.params.userId;
            this.userDetail = yield this._AddressBookService.getUserDetails(this._userId);
            this._changeDetectorRef.markForCheck();
        });
    }
}
AddressBookDetailComponent.ɵfac = function AddressBookDetailComponent_Factory(t) { return new (t || AddressBookDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_address_book_service_address_book_service__WEBPACK_IMPORTED_MODULE_3__["AddressBookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
AddressBookDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddressBookDetailComponent, selectors: [["yandc-address-book-detail"]], decls: 1, vars: 1, consts: [[3, "ngIf"], [3, "src"], [3, "href"]], template: function AddressBookDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AddressBookDetailComponent_ng_template_0_Template, 25, 15, "ng-template", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userDetail);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  margin: 20px 0;\n  padding: 10px;\n  display: flex;\n  border: 1px solid #f9f9f9;\n  background-color: #f9f9f9;\n}\n[_nghost-%COMP%]    > span[_ngcontent-%COMP%] {\n  flex: 1;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: #000;\n  text-decoration: none;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FkZHJlc3MtYm9vay1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFDRTtFQUNFLE9BQUE7QUFDSjtBQUVFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQUFKO0FBQ0k7RUFDRSxXQUFBO0FBQ04iLCJmaWxlIjoiYWRkcmVzcy1ib29rLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOWY5Zjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG5cbiAgJiA+IHNwYW4ge1xuICAgIGZsZXg6IDE7XG4gIH1cblxuICBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "wX7L":
/*!****************************************************************************************!*\
  !*** ./libs/address-book-lib/src/lib/address-book-list/address-book-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AddressBookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressBookListComponent", function() { return AddressBookListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _address_book_service_address_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../address-book-service/address-book.service */ "TDb+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "GXRp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");






function AddressBookListComponent_cdk_header_cell_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cdk-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddressBookListComponent_cdk_cell_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cdk-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", row_r8.name.title, " ", row_r8.name.first, " ", row_r8.name.last, " ");
} }
function AddressBookListComponent_cdk_header_cell_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cdk-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddressBookListComponent_cdk_cell_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cdk-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r9.phone, " ");
} }
function AddressBookListComponent_cdk_header_cell_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cdk-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddressBookListComponent_cdk_cell_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cdk-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r10.email, " ");
} }
function AddressBookListComponent_cdk_header_row_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "cdk-header-row");
} }
function AddressBookListComponent_cdk_row_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "cdk-row", 8);
} if (rf & 2) {
    const row_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/detail/" + row_r11.id.value);
} }
const _c0 = function () { return ["name", "phone", "email"]; };
class AddressBookListComponent {
    constructor(_AddressBookService) {
        this._AddressBookService = _AddressBookService;
    }
    get addressBookList$() {
        return this._AddressBookService.addressBookList$;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._AddressBookService.getRecords();
        });
    }
}
AddressBookListComponent.ɵfac = function AddressBookListComponent_Factory(t) { return new (t || AddressBookListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_address_book_service_address_book_service__WEBPACK_IMPORTED_MODULE_1__["AddressBookService"])); };
AddressBookListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddressBookListComponent, selectors: [["yandc-address-book-list"]], decls: 12, vars: 5, consts: [[3, "dataSource"], ["cdkColumnDef", "name"], [4, "cdkHeaderCellDef"], [4, "cdkCellDef"], ["cdkColumnDef", "phone"], ["cdkColumnDef", "email"], [4, "cdkHeaderRowDef"], [3, "routerLink", 4, "cdkRowDef", "cdkRowDefColumns"], [3, "routerLink"]], template: function AddressBookListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cdk-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AddressBookListComponent_cdk_header_cell_2_Template, 2, 0, "cdk-header-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AddressBookListComponent_cdk_cell_3_Template, 2, 3, "cdk-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AddressBookListComponent_cdk_header_cell_5_Template, 2, 0, "cdk-header-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AddressBookListComponent_cdk_cell_6_Template, 2, 1, "cdk-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AddressBookListComponent_cdk_header_cell_8_Template, 2, 0, "cdk-header-cell", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AddressBookListComponent_cdk_cell_9_Template, 2, 1, "cdk-cell", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AddressBookListComponent_cdk_header_row_10_Template, 1, 0, "cdk-header-row", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AddressBookListComponent_cdk_row_11_Template, 1, 1, "cdk-row", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.addressBookList$);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTable"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkColumnDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkHeaderCellDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkCellDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkHeaderRowDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkRowDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkHeaderCell"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkCell"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkHeaderRow"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkRow"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  margin: 20px 0;\n}\n[_nghost-%COMP%]   .cdk-table[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  background: #f9f9f9;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .cdk-row[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background: #eee;\n}\n[_nghost-%COMP%]   .cdk-row[_ngcontent-%COMP%], [_nghost-%COMP%]   .cdk-header-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  padding: 5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .cdk-header-row[_ngcontent-%COMP%] {\n  background: #eee;\n}\n[_nghost-%COMP%]   .cdk-cell[_ngcontent-%COMP%], [_nghost-%COMP%]   .cdk-header-cell[_ngcontent-%COMP%] {\n  flex: 1 1 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FkZHJlc3MtYm9vay1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUFDRjtBQUNFO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUdJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBRE47QUFLRTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBSEo7QUFNRTtFQUNFLGdCQUFBO0FBSko7QUFPRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUxKIiwiZmlsZSI6ImFkZHJlc3MtYm9vay1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAyMHB4IDA7XG5cbiAgLmNkay10YWJsZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuY2RrLXJvdyB7XG4gICAgJjpob3ZlciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIH1cbiAgfVxuXG4gIC5jZGstcm93LCAuY2RrLWhlYWRlci1yb3cge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLmNkay1oZWFkZXItcm93IHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICB9XG5cbiAgLmNkay1jZWxsLCAuY2RrLWhlYWRlci1jZWxsIHtcbiAgICBmbGV4OiAxIDEgMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map