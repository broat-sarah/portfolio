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

/***/ "./src/app/app.browser.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.browser.module.ts ***!
  \***************************************/
/*! exports provided: HttpLoaderFactory, AppBrowserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBrowserModule", function() { return AppBrowserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http);
}
var AppBrowserModule = /** @class */ (function () {
    function AppBrowserModule() {
    }
    AppBrowserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({
                    appId: 'app-root'
                }),
                _app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('/ngsw-worker.js'),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                    loader: { provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"], useFactory: HttpLoaderFactory, deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]] }
                }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserTransferStateModule"]
            ]
        })
    ], AppBrowserModule);
    return AppBrowserModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header-view *ngIf=\"router.url != '/' == 1\"></header-view>\n<div class=\"content\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header h1 {\n  color: darkorange;\n  font-size: 32px !important;\n  width: 100%;\n  margin: 16px 0 7px !important; }\n\nheader {\n  background-color: #ffffff;\n  text-align: center;\n  position: fixed;\n  width: 100%;\n  z-index: 100; }\n\nh2 {\n  font-size: 20px; }\n\n:host {\n  display: flex;\n  flex-direction: column; }\n\nmenu.contextual {\n  float: left; }\n\n@media (max-width: 768px) {\n  .content {\n    padding-top: 100px; } }\n\n@media (min-width: 768px) {\n  header {\n    height: 105px; }\n  .content {\n    padding-top: 136px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJhaGJyb2F0L0RvY3VtZW50cy9XZWIgRGVzaWduL215QXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWlCO0VBQ2pCLDJCQUEwQjtFQUMxQixZQUFXO0VBQ1gsOEJBQTZCLEVBQzlCOztBQUVEO0VBQ0UsMEJBQXlCO0VBQ3pCLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLFlBQVc7RUFDWCxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLGNBQWE7RUFDYix1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRTtJQUNFLG1CQUFrQixFQUNuQixFQUFBOztBQUdIO0VBQ0U7SUFDRSxjQUFhLEVBQ2Q7RUFFRDtJQUNFLG1CQUFrQixFQUNuQixFQUFBIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIgaDEge1xuICBjb2xvcjogZGFya29yYW5nZTtcbiAgZm9udC1zaXplOiAzMnB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDE2cHggMCA3cHggIWltcG9ydGFudDtcbn1cblxuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbm1lbnUuY29udGV4dHVhbCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDEwNXB4O1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiAxMzZweDtcbiAgfVxufVxuIl19 */"

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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_snack_bar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/snack-bar.service */ "./src/app/services/snack-bar.service.ts");
/* harmony import */ var _window_ref_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./window-ref.service */ "./src/app/window-ref.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var AppComponent = /** @class */ (function () {
    function AppComponent(document, platformId, snackBarService, windowRef, swUpdate, translate, titleService, metaService, router) {
        this.document = document;
        this.platformId = platformId;
        this.snackBarService = snackBarService;
        this.windowRef = windowRef;
        this.swUpdate = swUpdate;
        this.translate = translate;
        this.titleService = titleService;
        this.metaService = metaService;
        this.router = router;
        this.title = this.titleService.getTitle();
        this.metaDescription = this.metaService.getTag('name=description').content;
        this.translate.setDefaultLang(this.translate.getBrowserLang());
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__["NavigationEnd"]; })).subscribe(function (event) {
            var snapshot = _this.router.routerState.snapshot.root.firstChild;
            var title = snapshot.data['title'];
            _this.titleService.setTitle(_this.title + ' | ' + title);
            var description = snapshot.data['description'];
            _this.metaService.updateTag({ name: 'description', content: _this.metaDescription + ' ' + description }, 'name=description');
        });
        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            return;
        }
        if (this.swUpdate.isEnabled) {
            // this.swUpdate.activated.filter(() => !localStorage.getItem('cached')).subscribe(() => {
            //     localStorage.setItem('cached', 'displayed');
            //     this.snackBarService.displayNotification({
            //         message: 'Content is cached', action: 'Ok'
            //     } as SnackBarNotification);
            // });
            this.swUpdate.available.subscribe(function (evt) {
                _this.snackBarService.displayNotification({
                    message: 'New version of app is available!',
                    action: 'Launch',
                    force: true,
                    callback: function () {
                        _this.windowRef.nativeWindow.location.reload(true);
                    }
                });
            });
            this.swUpdate.checkForUpdate().then(function () {
                // noop
            }).catch(function (err) {
                console.error('error when checking for update', err);
            });
        }
        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            var bases = this.document.getElementsByTagName('base');
            if (bases.length > 0) {
                bases[0].setAttribute('href', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseHref);
            }
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [Object, Object, _services_snack_bar_service__WEBPACK_IMPORTED_MODULE_4__["SnackBar"],
            _window_ref_service__WEBPACK_IMPORTED_MODULE_5__["WindowRef"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Meta"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _transfer_state_transfer_state_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transfer-state/transfer-state.component */ "./src/app/transfer-state/transfer-state.component.ts");
/* harmony import */ var _services_snack_bar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/snack-bar.service */ "./src/app/services/snack-bar.service.ts");
/* harmony import */ var _window_ref_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./window-ref.service */ "./src/app/window-ref.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/notifications.service */ "./src/app/services/notifications.service.ts");
/* harmony import */ var _web_web_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./web/web.component */ "./src/app/web/web.component.ts");
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./print/print.component */ "./src/app/print/print.component.ts");
/* harmony import */ var _transfer_state_with_transfer_state_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./transfer-state/with-transfer-state.component */ "./src/app/transfer-state/with-transfer-state.component.ts");
/* harmony import */ var _transfer_state_without_transfer_state_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./transfer-state/without-transfer-state.component */ "./src/app/transfer-state/without-transfer-state.component.ts");
/* harmony import */ var _services_resolvers_hitWithTransferState_resolver__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/resolvers/hitWithTransferState.resolver */ "./src/app/services/resolvers/hitWithTransferState.resolver.ts");
/* harmony import */ var _services_resolvers_hitWithoutTransferState_resolver__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/resolvers/hitWithoutTransferState.resolver */ "./src/app/services/resolvers/hitWithoutTransferState.resolver.ts");
/* harmony import */ var _services_exampleApi_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/exampleApi.service */ "./src/app/services/exampleApi.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angular_typing_animation__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular-typing-animation */ "./node_modules/angular-typing-animation/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_25__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























// import { PrebootModule } from 'preboot';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _transfer_state_transfer_state_component__WEBPACK_IMPORTED_MODULE_5__["TransferStateComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"],
                _web_web_component__WEBPACK_IMPORTED_MODULE_13__["WebComponent"],
                _print_print_component__WEBPACK_IMPORTED_MODULE_14__["PrintComponent"],
                _transfer_state_with_transfer_state_component__WEBPACK_IMPORTED_MODULE_15__["WithTransferStateComponent"],
                _transfer_state_without_transfer_state_component__WEBPACK_IMPORTED_MODULE_16__["WithoutTransferStateComponent"]
            ],
            imports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild(),
                _angular_common__WEBPACK_IMPORTED_MODULE_20__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["BrowserModule"],
                angular_typing_animation__WEBPACK_IMPORTED_MODULE_23__["TypingAnimationModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"],
                ngx_lightbox__WEBPACK_IMPORTED_MODULE_25__["LightboxModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { title: 'Home', description: 'Homepage - quick overview.' } },
                    { path: 'web', component: _web_web_component__WEBPACK_IMPORTED_MODULE_13__["WebComponent"], data: { title: 'Web', description: 'Examples of web and UX/UI design.' } },
                    { path: 'print', component: _print_print_component__WEBPACK_IMPORTED_MODULE_14__["PrintComponent"], data: { title: 'Print', description: 'Examples of print design.' } },
                    // { path: 'external', loadChildren: '@angular-universal-serverless/external-module/release#ExternalModule', data: {title: 'External module', description: 'External module example.'}}, not works because of https://github.com/angular/angular-cli/issues/8284
                    { path: 'transferState', data: { title: 'Transfer state (API)', description: 'Angular TransferState example.' }, children: [
                            { path: '', component: _transfer_state_transfer_state_component__WEBPACK_IMPORTED_MODULE_5__["TransferStateComponent"], },
                            { path: 'with', component: _transfer_state_with_transfer_state_component__WEBPACK_IMPORTED_MODULE_15__["WithTransferStateComponent"], resolve: { hits: _services_resolvers_hitWithTransferState_resolver__WEBPACK_IMPORTED_MODULE_17__["HitWithTransferStateResolver"] } },
                            { path: 'without', component: _transfer_state_without_transfer_state_component__WEBPACK_IMPORTED_MODULE_16__["WithoutTransferStateComponent"], resolve: { hits: _services_resolvers_hitWithoutTransferState_resolver__WEBPACK_IMPORTED_MODULE_18__["HitWithoutTransferStateResolver"] } }
                        ] }
                ]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"]
                // PrebootModule.withConfig({appRoot: 'app-root'})
            ],
            providers: [_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_6__["SnackBar"], _window_ref_service__WEBPACK_IMPORTED_MODULE_7__["WindowRef"], _services_notifications_service__WEBPACK_IMPORTED_MODULE_12__["Notifications"], _services_resolvers_hitWithTransferState_resolver__WEBPACK_IMPORTED_MODULE_17__["HitWithTransferStateResolver"], _services_resolvers_hitWithoutTransferState_resolver__WEBPACK_IMPORTED_MODULE_18__["HitWithoutTransferStateResolver"], _services_exampleApi_service__WEBPACK_IMPORTED_MODULE_19__["ExampleApi"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["Title"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__["Meta"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"z-depth-0 black\">\n    <a href=\"#\" class=\"brand-logo\"><img src=\"./assets/img/essbee.png\" style=\"height: 55px; margin: 7px 20px;\"></a>\n      <menu [contextual]=\"true\"></menu>\n\n    <menu [contextual]=\"false\"></menu>\n    </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  position: relative;\n  top: -6px; }\n\n.logo-header {\n  width: 15%;\n  max-width: 100px; }\n\n@media only screen and (max-width: 992px) {\n  nav .brand-logo {\n    left: 5% !important; } }\n\n@media (max-width: 768px) {\n  nav .brand-logo {\n    left: 50% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJhaGJyb2F0L0RvY3VtZW50cy9XZWIgRGVzaWduL215QXBwL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFrQjtFQUNsQixVQUFTLEVBQ1Y7O0FBQ0Q7RUFDRSxXQUFVO0VBQ1YsaUJBQWdCLEVBR2pCOztBQUVEO0VBQ0E7SUFFSSxvQkFBbUIsRUFDcEIsRUFBQTs7QUFJSDtFQUNFO0lBRUkscUJBQW9CLEVBQ3JCLEVBQUEiLCJmaWxlIjoiYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNnB4O1xufVxuLmxvZ28taGVhZGVye1xuICB3aWR0aDogMTUlO1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICAvL2Rpc3BsYXk6IGJsb2NrO1xuICAvL21hcmdpbjogLTEydmggYXV0byAwIGF1dG87XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbm5hdiB7XG4gIC5icmFuZC1sb2dvIHtcbiAgICBsZWZ0OiA1JSAhaW1wb3J0YW50O1xuICB9XG59XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICBuYXYge1xuICAgIC5icmFuZC1sb2dvIHtcbiAgICAgIGxlZnQ6IDUwJSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'header-view',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col l3\"></div>\n  <div class=\"col l6 m12 s12\">\n    <div [@clearOpaque]=\"isClear ? 'clear' : 'opaque'\">\n    <img src=\"./assets/img/hexagonbee3.gif\" class=\"logo-main\">\n    </div>\n    <h1 typingAnimation [typeSpeed]=\"110\" [condition]=\"start\" [startDelay]=\"0\" [hideCursorOnComplete]=\"true\" (complete)=\"onTypingAnimationComplete()\" class=\"center\">\n        Sarah Broat\n      </h1>\n    <!--<h1 class=\"center\">Sarah Broat</h1>-->\n    <ul>\n      <li><a [routerLink]=\"['/web']\"><span typingAnimation [typeSpeed]=\"150\" [condition]=\"start\" [startDelay]=\"1500\" [hideCursorOnComplete]=\"true\" (complete)=\"onTypingAnimationComplete()\">Web</span></a></li>\n      <li><a [routerLink]=\"['/print']\"><span typingAnimation [typeSpeed]=\"150\" [condition]=\"start\" [startDelay]=\"2500\" [hideCursorOnComplete]=\"true\" (complete)=\"onTypingAnimationComplete()\">Print</span></a></li>\n      <li><a [routerLink]=\"['/contact']\"><span typingAnimation [typeSpeed]=\"150\" [condition]=\"start\" [startDelay]=\"3600\" [hideCursorOnComplete]=\"true\" (complete)=\"onTypingAnimationComplete()\">Contact</span></a></li>\n    </ul>\n  </div>\n  <div class=\"col l3\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Libre+Baskerville\");\n.logo-main {\n  width: 75%;\n  max-width: 450px;\n  display: block;\n  margin: -12vh auto 0 auto; }\nh1 {\n  font-family: 'Libre Baskerville', serif !important;\n  margin-top: 0rem; }\nul {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center; }\nli {\n  display: inline-flex;\n  padding: 10px 20px;\n  font-size: 1.25em !important; }\nli a {\n  color: #333 !important;\n  font-weight: 400;\n  padding: 5px; }\nli a:after {\n    display: block;\n    content: '';\n    border-bottom: 1px solid #333;\n    -webkit-transform: scaleX(0);\n            transform: scaleX(0);\n    transition: .3s transform ease; }\nli a:hover, li a:active, li a:focus {\n    text-decoration: none; }\nli a:hover:after, li a:active:after, li a:focus:after {\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1); }\nli a:not(:hover) {\n    color: #888 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJhaGJyb2F0L0RvY3VtZW50cy9XZWIgRGVzaWduL215QXBwL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlFQUFZO0FBQ1o7RUFDRSxXQUFVO0VBQ1YsaUJBQWdCO0VBQ2hCLGVBQWM7RUFDZCwwQkFBeUIsRUFDMUI7QUFDRDtFQUNFLG1EQUFrRDtFQUNsRCxpQkFBZ0IsRUFDakI7QUFDRDtFQUNFLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsb0JBQW1CO0VBQ25CLHdCQUF1QixFQUN4QjtBQUNEO0VBQ0UscUJBQW9CO0VBQ3BCLG1CQUFrQjtFQUNsQiw2QkFBNEIsRUFDN0I7QUFDRDtFQUVFLHVCQUFzQjtFQUN0QixpQkFBZ0I7RUFDaEIsYUFBWSxFQWlCYjtBQXJCRDtJQU1JLGVBQWM7SUFDZCxZQUFXO0lBQ1gsOEJBQTZCO0lBQzdCLDZCQUFvQjtZQUFwQixxQkFBb0I7SUFDcEIsK0JBQ0YsRUFBQztBQVhIO0lBYUksc0JBQXFCLEVBQ3RCO0FBZEg7SUFnQkksNkJBQW9CO1lBQXBCLHFCQUFvQixFQUN2QjtBQWpCRDtJQW1CSSx1QkFBc0IsRUFDdkIiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGlicmUrQmFza2VydmlsbGUnKTtcbi5sb2dvLW1haW57XG4gIHdpZHRoOiA3NSU7XG4gIG1heC13aWR0aDogNDUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IC0xMnZoIGF1dG8gMCBhdXRvO1xufVxuaDF7XG4gIGZvbnQtZmFtaWx5OiAnTGlicmUgQmFza2VydmlsbGUnLCBzZXJpZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcmVtO1xufVxudWx7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxubGl7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS4yNWVtICFpbXBvcnRhbnQ7XG59XG5saXtcbiAgYSB7XG4gIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgJjphZnRlcntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OiAnJztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICB0cmFuc2l0aW9uOiAuM3MgdHJhbnNmb3JtIGVhc2VcbiAgfVxuICAmOmhvdmVyLCAmOmFjdGl2ZSwgJjpmb2N1c3tcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgJjpob3ZlcjphZnRlciwgJjphY3RpdmU6YWZ0ZXIsICY6Zm9jdXM6YWZ0ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG59XG4gICY6bm90KDpob3Zlcil7XG4gICAgY29sb3I6ICM4ODggIWltcG9ydGFudDtcbiAgfVxufVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.start = false;
        this.stringInterpolation = "Sarah Broat";
        this.hideCursorOnComplete = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Start after 1 second + 1 second of startDelay
        setTimeout(function () { return _this.start = true; }, 1000);
    };
    HomeComponent.prototype.onTypingAnimationComplete = function () {
        console.log('#TYPING ANIMATION COMPLETE');
        // ...
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-view',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")],
            animations: [
                // the fade-in/fade-out animation.
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('clearOpaque', [
                    // the "in" style determines the "resting" state of the element when it is visible.
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('opaque', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                    // fade in when created. this could also be written as transition('void => *')
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(600)
                    ]),
                    // fade out when destroyed. this could also be written as transition('void => *')
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(600, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })))
                ])
            ]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-wrapper\">\n  <ng-container *ngIf=\"contextual; else horizontal\">\n  <mat-sidenav-container class=\"example-container\">\n        <mat-sidenav #sidenav class=\"example-sidenav\" mode=\"over\">\n          <ng-container *ngFor=\"let element of menuElements\">\n              <a *ngIf=\"element.link.startsWith('http'); else standard\" mat-button target=\"_blank\" routerLinkActive=\"active-link\" rel=\"noopener\" href=\"{{element.link}}\">\n                  {{element.text}}\n              </a>\n              <ng-template #standard>\n                  <a mat-raised-button routerLink=\"{{element.link}}\" routerLinkActive=\"active-link\">{{element.text}}</a>\n              </ng-template>\n          </ng-container>\n        </mat-sidenav>\n\n        <div class=\"example-sidenav-content\">\n          <button type=\"button\" mat-button (click)=\"sidenav.open()\">\n            <i class=\"material-icons\">menu</i>\n          </button>\n        </div>\n\n      </mat-sidenav-container>\n      </ng-container>\n\n\n  <!--<ng-container *ngIf=\"contextual; else horizontal\">\n      <button mat-mini-fab [matMenuTriggerFor]=\"appMenu\" class=\"menu-button open-nav\">\n          <i class=\"material-icons\">menu</i>\n      </button>\n      <mat-menu #appMenu=\"matMenu\">\n          <ng-container *ngFor=\"let element of menuElements\">\n              <a *ngIf=\"element.link.startsWith('http'); else standard\" mat-button target=\"_blank\" routerLinkActive=\"active-link\" rel=\"noopener\" href=\"{{element.link}}\">\n                  {{element.text}}\n              </a>\n              <ng-template #standard>\n                  <a mat-raised-button routerLink=\"{{element.link}}\" routerLinkActive=\"active-link\">{{element.text}}</a>\n              </ng-template>\n          </ng-container>\n\n      </mat-menu>\n  </ng-container>-->\n\n  <ng-template #horizontal>\n      <ul class=\"right hide-on-sm-and-down\">\n          <li *ngFor=\"let element of menuElements\">\n              <a *ngIf=\"element.link.startsWith('http'); else standard\" btn-flat yellow lighten-5 target=\"_blank\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:\ntrue}\" rel=\"noopener\" href=\"{{element.link}}\">\n                  {{element.text}}\n              </a>\n              <ng-template #standard>\n                  <a btn-flat yellow lighten-5 routerLink=\"{{element.link}}\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:\ntrue}\">{{element.text}}</a>\n              </ng-template>\n          </li>\n\n      </ul>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  width: 100vw;\n  height: 100vh;\n  z-index: 50;\n  background: transparent; }\n\n.example-sidenav-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  align-items: center;\n  justify-content: center; }\n\n.example-sidenav {\n  padding: 20px; }\n\n.demo-panel {\n  margin: 10px; }\n\n:host(.contextual) button {\n  position: absolute;\n  top: 0;\n  left: 20px;\n  color: white; }\n\n::ng-deep .mat-menu-content {\n  padding: 0 !important; }\n\n::ng-deep .mat-menu-content a {\n    display: block;\n    text-align: left;\n    padding: 10px;\n    box-shadow: none !important; }\n\n:host {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0 6px;\n  padding: 0; }\n\nul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: inline;\n  position: relative;\n  left: 0px; }\n\nli {\n  display: inline-block; }\n\nli a {\n    margin: 0 3px;\n    font-size: 1.25em !important;\n    font-weight: 400 !important; }\n\nli a.active-link {\n      color: #fff; }\n\nli a:not(.active-link) {\n      color: #ffecb3; }\n\na:hover {\n  color: #ffd54f !important;\n  background-color: #323232 !important;\n  text-decoration: none; }\n\nspan:hover {\n  cursor: pointer; }\n\n::ng-deep .mat-menu-panel {\n  background: #fff !important; }\n\n.mat-raised-button {\n  color: inherit;\n  background: #2a2f3e !important; }\n\n@media (max-width: 768px) {\n  :host(.contextual) {\n    display: block !important; }\n  :host {\n    display: none; } }\n\n@media (min-width: 768px) {\n  :host(.contextual) {\n    display: none; }\n  :host {\n    display: block; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJhaGJyb2F0L0RvY3VtZW50cy9XZWIgRGVzaWduL215QXBwL3NyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLGNBQWE7RUFDYixZQUFXO0VBQ1gsd0JBQXVCLEVBRTFCOztBQUVEO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQjtFQUV0QixhQUFZO0VBQ1osb0JBQW1CO0VBQ25CLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLGNBQWEsRUFDaEI7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2Y7O0FBR0Q7RUFFSSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFdBQVU7RUFDVixhQUFZLEVBR2I7O0FBR0g7RUFDRSxzQkFBb0IsRUFPckI7O0FBUkQ7SUFHSSxlQUFjO0lBQ2QsaUJBQWdCO0lBQ2hCLGNBQWE7SUFDYiw0QkFBMkIsRUFDNUI7O0FBR0g7RUFDRSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLHdCQUF1QjtFQUN2QixnQkFBZTtFQUNmLFdBQVUsRUFDWDs7QUFFRDtFQUNFLFdBQVU7RUFDVixVQUFTO0VBQ1QsaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLFVBQVMsRUFDVjs7QUFFRDtFQUNFLHNCQUFxQixFQVl0Qjs7QUFiRDtJQUdJLGNBQWE7SUFDYiw2QkFBNEI7SUFDNUIsNEJBQTJCLEVBTzVCOztBQVpIO01BT00sWUFBVyxFQUNaOztBQVJMO01BVU0sZUFBYyxFQUNmOztBQVlMO0VBQ0UsMEJBQXlCO0VBQ3pCLHFDQUFvQztFQUNwQyxzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSxnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLDRCQUEyQixFQUM1Qjs7QUFFRDtFQUNFLGVBQWM7RUFDZCwrQkFBOEIsRUFDL0I7O0FBR0Q7RUFDRTtJQUNFLDBCQUF5QixFQUMxQjtFQUVEO0lBQ0UsY0FBYSxFQUNkLEVBQUE7O0FBRUg7RUFDRTtJQUNFLGNBQWEsRUFDZDtFQUVEO0lBQ0UsZUFBYyxFQUNmLEVBQUEiLCJmaWxlIjoiYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgei1pbmRleDogNTA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbn1cblxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5leGFtcGxlLXNpZGVuYXYge1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG4uZGVtby1wYW5lbCB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG5cbjpob3N0KC5jb250ZXh0dWFsKSB7XG4gIGJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLy9tYXJnaW46IDVweCAwIDAgOHB4O1xuICB9XG59XG5cbjo6bmctZGVlcCAubWF0LW1lbnUtY29udGVudCB7XG4gIHBhZGRpbmc6IDAhaW1wb3J0YW50O1xuICBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMCAwIDZweDtcbiAgcGFkZGluZzogMDtcbn1cblxudWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwcHg7XG59XG5cbmxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBhIHtcbiAgICBtYXJnaW46IDAgM3B4O1xuICAgIGZvbnQtc2l6ZTogMS4yNWVtICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICAgICYuYWN0aXZlLWxpbmsge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICAgICY6bm90KC5hY3RpdmUtbGluayl7XG4gICAgICBjb2xvcjogI2ZmZWNiMztcbiAgICB9XG4gIH1cbn1cblxuLy9hIHtcbiAgLy8uYWN0aXZlLWxpbmsge1xuICAgIC8vY29sb3I6ICM2NGRkMTc7XG4gIC8vfVxuICAvLyY6bm90KC5hY3RpdmUtbGluaykge1xuICAgIC8vY29sb3I6ICNmZmY7XG4gIC8vfVxuLy99XG5hOmhvdmVyIHtcbiAgY29sb3I6ICNmZmQ1NGYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMiAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnNwYW46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbjo6bmctZGVlcCAubWF0LW1lbnUtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiAjMmEyZjNlICFpbXBvcnRhbnQ7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIDpob3N0KC5jb250ZXh0dWFsKSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgOmhvc3QoLmNvbnRleHR1YWwpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.menuElements = [
            { link: '/', text: 'Home' },
            { link: '/web', text: 'Web' },
            { link: '/print', text: 'Print' },
            // {link: '/external', icon: 'call_merge', text: 'External module'}, //not works because of https://github.com/angular/angular-cli/issues/8284
            { link: '/about', text: 'About' },
        ];
        this.contextual = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('contextual'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.contextual'),
        __metadata("design:type", Boolean)
    ], MenuComponent.prototype, "contextual", void 0);
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/print/print.component.html":
/*!********************************************!*\
  !*** ./src/app/print/print.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h1 typingAnimation [typeSpeed]=\"150\" [condition]=\"start\" [startDelay]=\"500\" [hideCursorOnComplete]=\"true\" (complete)=\"onTypingAnimationComplete()\" class=\"center\">\n      Print\n    </h1>\n  <h2 typingAnimation [typeSpeed]=\"80\" [condition]=\"start\" [startDelay]=\"1500\" [hideCursorOnComplete]=\"true\" (complete)=\"onTypingAnimationComplete()\" class=\"center\">Examples of print design</h2>\n  <div class=\"row\">\n    <ng-container *ngFor=\"let element of webElements\">\n    <div class=\"col l6 m12 s12\" style=\"padding: 20px 80px;\">\n      <h3>{{element.title}}</h3>\n      <div *ngFor=\"let image of _albums; let i=index\">\n        <img [src]=\"image.thumb\" (click)=\"open(i)\"/>\n      </div>\n    </div>\n      <h4>{{element.subheader}}</h4>\n      <p>{{element.text}}</p>\n      <a href=\"{{element.link}}\" target=\"_blank\">{{element.linkname}}</a>\n    </ng-container>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/print/print.component.scss":
/*!********************************************!*\
  !*** ./src/app/print/print.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Libre+Baskerville\");\n.logo-main {\n  width: 75%;\n  max-width: 450px;\n  display: block;\n  margin: -12vh auto 0 auto; }\nh1 {\n  font-family: 'Libre Baskerville', serif !important;\n  margin-top: 0rem; }\nh2 {\n  font-size: 2.5rem; }\nh3 {\n  font-family: 'Libre Baskerville', serif !important;\n  font-size: 2.25rem;\n  margin-bottom: 1.5rem;\n  color: #333; }\nh4 {\n  font-family: 'Libre Baskerville', serif !important;\n  font-size: 1.5rem;\n  margin-bottom: 0.5rem;\n  color: #333; }\np {\n  font-size: 1.25rem;\n  margin-top: 0.25rem; }\na {\n  color: #ff8f00;\n  font-weight: 400;\n  padding: 5px;\n  font-size: 1.5rem;\n  position: relative;\n  width: auto;\n  max-width: auto; }\na:after {\n    display: block;\n    content: '';\n    border-bottom: 1px solid #333;\n    -webkit-transform: scaleX(0);\n            transform: scaleX(0);\n    transition: .3s transform ease;\n    width: 6.5rem; }\na:hover, a:active, a:focus {\n    text-decoration: none;\n    font-weight: 600;\n    color: #333; }\na:hover:after, a:active:after, a:focus:after {\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJhaGJyb2F0L0RvY3VtZW50cy9XZWIgRGVzaWduL215QXBwL3NyYy9hcHAvcHJpbnQvcHJpbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUVBQVk7QUFDWjtFQUNFLFdBQVU7RUFDVixpQkFBZ0I7RUFDaEIsZUFBYztFQUNkLDBCQUF5QixFQUMxQjtBQUNEO0VBQ0UsbURBQWtEO0VBQ2xELGlCQUFnQixFQUNqQjtBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCO0FBQ0Q7RUFDRSxtREFBa0Q7RUFDbEQsbUJBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQixZQUFXLEVBQ1o7QUFDRDtFQUNFLG1EQUFrRDtFQUNsRCxrQkFBaUI7RUFDakIsc0JBQXFCO0VBQ3JCLFlBQVcsRUFDWjtBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUNwQjtBQUNEO0VBQ0EsZUFBYztFQUNkLGlCQUFnQjtFQUNoQixhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsZ0JBQWUsRUFpQmQ7QUF4QkQ7SUFTRSxlQUFjO0lBQ2QsWUFBVztJQUNYLDhCQUE2QjtJQUM3Qiw2QkFBb0I7WUFBcEIscUJBQW9CO0lBQ3BCLCtCQUE4QjtJQUM5QixjQUFhLEVBQ2Q7QUFmRDtJQWlCRSxzQkFBcUI7SUFDckIsaUJBQWdCO0lBQ2hCLFlBQVcsRUFDWjtBQXBCRDtJQXNCRSw2QkFBb0I7WUFBcEIscUJBQW9CLEVBQ3JCIiwiZmlsZSI6ImFwcC9wcmludC9wcmludC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGlicmUrQmFza2VydmlsbGUnKTtcbi5sb2dvLW1haW57XG4gIHdpZHRoOiA3NSU7XG4gIG1heC13aWR0aDogNDUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IC0xMnZoIGF1dG8gMCBhdXRvO1xufVxuaDF7XG4gIGZvbnQtZmFtaWx5OiAnTGlicmUgQmFza2VydmlsbGUnLCBzZXJpZiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcmVtO1xufVxuaDIge1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cbmgzIHtcbiAgZm9udC1mYW1pbHk6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIHNlcmlmICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICBjb2xvcjogIzMzMztcbn1cbmg0IHtcbiAgZm9udC1mYW1pbHk6ICdMaWJyZSBCYXNrZXJ2aWxsZScsIHNlcmlmICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGNvbG9yOiAjMzMzO1xufVxucHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xufVxuYSB7XG5jb2xvcjogI2ZmOGYwMDtcbmZvbnQtd2VpZ2h0OiA0MDA7XG5wYWRkaW5nOiA1cHg7XG5mb250LXNpemU6IDEuNXJlbTtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbndpZHRoOiBhdXRvO1xubWF4LXdpZHRoOiBhdXRvO1xuJjphZnRlcntcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbnRlbnQ6ICcnO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIHRyYW5zaXRpb246IC4zcyB0cmFuc2Zvcm0gZWFzZTtcbiAgd2lkdGg6IDYuNXJlbTtcbn1cbiY6aG92ZXIsICY6YWN0aXZlLCAmOmZvY3Vze1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzMzO1xufVxuJjpob3ZlcjphZnRlciwgJjphY3RpdmU6YWZ0ZXIsICY6Zm9jdXM6YWZ0ZXJ7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xufVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/print/print.component.ts":
/*!******************************************!*\
  !*** ./src/app/print/print.component.ts ***!
  \******************************************/
/*! exports provided: PrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintComponent", function() { return PrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrintComponent = /** @class */ (function () {
    function PrintComponent(_lightbox, _lightboxEvent, _lighboxConfig) {
        this._lightbox = _lightbox;
        this._lightboxEvent = _lightboxEvent;
        this._lighboxConfig = _lighboxConfig;
        this.webElements = [
            {
                asset: './assets/img/guntastolzl.png',
                title: 'Critical Outlook',
                subheader: 'HTML5, SASS, Angular 6, MaterializeCSS',
                text: "This is a redesign of the previous Critical Outlook site for Critical Illness Awareness Month in October, 2018. As part of this project I completed a content audit on the available assets, reconfigured my original wireframe to accomodate and highlight new assets, integrated new copy and calls to action, and revamped the site's color scheme and images to meet the new brand standards.",
                link: "http://criticaloutlook.assurity.com",
                linkname: "Visit Site"
            },
            {
                asset: './assets/img/guntastolzl.png',
                title: 'Disability Income Quoter',
                subheader: 'HTML5, SASS, Angular 4, MaterializeCSS',
                text: 'I created the wireframing, layout, and much of the user interface for this disability income quoter, which has now become a repeatable web app template. It went through several iterations over a period of roughly six months, including user interface testing in various browsers. The form layouts and pagination kept the best practices of user experience research in mind.',
                link: "http://diquoter.assurity.com",
                linkname: "Visit Site"
            },
            {
                asset: './assets/img/guntastolzl.png',
                title: 'Annual Report 2017',
                subheader: 'HTML5, SASS, MaterializeCSS, ScrollMagic',
                text: 'This is a digital version of the printed 2017 Annual Report. To create this site I worked with the creative manager and copywriter to choose images and edit down the copy for the web. Next, I presented a sketch and a more detailed wireframe. Following that I perfected the smaller details like the slide movements and sent it to the marketing and sales teams for approval.',
                link: "http://annualreport17.assurity.com",
                linkname: "Visit Site"
            },
            // {link: '/external', icon: 'call_merge', text: 'External module'}, //not works because of https://github.com/angular/angular-cli/issues/8284
            {
                asset: './assets/img/guntastolzl.png',
                title: 'Worksite Benefits', subheader: 'HTML5, SASS, Angular 4, MaterializeCSS',
                text: 'After I created the initial wireframe for this site, another developer made a template out of it. I then updated the template for the purposes of this website, including laying out and creating new sections, altering user experience paths, and updating the responsiveness on mobile devices.',
                link: "http://benefits.assurity.com",
                linkname: "Visit Site"
            },
        ];
        this.start = false;
        this.stringInterpolation = "Web";
        this.hideCursorOnComplete = true;
        this.albums = [];
        for (var i = 1; i <= 3; i++) {
            var src = '.assets/img/img' + i + '.png';
            var thumb = '.assets/img/img' + i + '-thumb.png';
            var album = {
                src: src,
                thumb: thumb
            };
            this.albums.push(album);
        }
        // set default config
        this._lighboxConfig.fadeDuration = 1;
    }
    PrintComponent.prototype.open = function (index) {
        var _this = this;
        this._subscription = this._lightboxEvent.lightboxEvent$.subscribe(function (event) { return _this._onReceivedEvent(event); });
        // override the default config
        this._lightbox.open(this.albums, index, { wrapAround: true, showImageNumberLabel: true });
    };
    PrintComponent.prototype._onReceivedEvent = function (event) {
        if (event.id === ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["LIGHTBOX_EVENT"].CLOSE) {
            this._subscription.unsubscribe();
        }
    };
    PrintComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Start after 1 second + 1 second of startDelay
        setTimeout(function () { return _this.start = true; }, 1000);
    };
    PrintComponent.prototype.onTypingAnimationComplete = function () {
        console.log('#TYPING ANIMATION COMPLETE');
        // ...
    };
    PrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./print.component.html */ "./src/app/print/print.component.html"),
            styles: [__webpack_require__(/*! ./print.component.scss */ "./src/app/print/print.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["Lightbox"],
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["LightboxEvent"],
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["LightboxConfig"]])
    ], PrintComponent);
    return PrintComponent;
}());



/***/ }),

/***/ "./src/app/services/exampleApi.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/exampleApi.service.ts ***!
  \************************************************/
/*! exports provided: ExampleApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleApi", function() { return ExampleApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExampleApi = /** @class */ (function () {
    function ExampleApi(http) {
        this.http = http;
        this.host = 'https://2tvdln9i91.execute-api.eu-central-1.amazonaws.com/production';
    }
    ExampleApi.prototype.hit = function () {
        return this.http.get(this.host + '/hit', { responseType: 'text' });
    };
    ExampleApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ExampleApi);
    return ExampleApi;
}());



/***/ }),

/***/ "./src/app/services/notifications.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/notifications.service.ts ***!
  \***************************************************/
/*! exports provided: Notifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notifications", function() { return Notifications; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _window_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../window-ref.service */ "./src/app/window-ref.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var Notifications = /** @class */ (function () {
    function Notifications(window, platformId, http, appRef, injector) {
        this.window = window;
        this.platformId = platformId;
        this.http = http;
        this.appRef = appRef;
        this.injector = injector;
        this.endpoint = 'https://api.angular-universal-pwa.maciejtreder.com/webpush';
        this.vapidSubscriptionEndpoint = this.endpoint + '/vapid';
        this.safariSubscriptionEndpoint = this.endpoint + '/safari';
        this.applicationServerKey = 'BKxp6BwVzRWy1Qbe63rHNbG46uwPTrl1RoeTJuyVBm42kvlUk0RuSkYk8NKoO0QK2GNV7eRhOLyV1KfmZhwU9Sc';
        try {
            this.swPush = injector.get(_angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwPush"]);
            this.swPush.messages.subscribe(function (message) { return console.log(message); });
        }
        catch (err) {
            // workaround for https://github.com/angular/angular/issues/20407
        }
    }
    Notifications.prototype.isPushAvailable = function () {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId) && (this.isVapidPushAvaialable() || this.isSafariPushAvailable());
    };
    Notifications.prototype.isSubscribed = function () {
        var _this = this;
        if (this.isVapidPushAvaialable()) {
            return this.swPush.subscription.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (subscription) { return !!subscription; }));
        }
        else if (this.isSafariPushAvailable()) {
            return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].create(function (observer) {
                observer.next(_this.window.nativeWindow['safari'].pushNotification.permission('web.com.maciejtreder.angular-universal-pwa').permission === 'granted');
            });
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(false);
        }
    };
    Notifications.prototype.subscribeToPush = function () {
        if (!this.isPushAvailable()) {
            throw new Error('Push is not available for this browser!');
        }
        if (this.isVapidPushAvaialable()) {
            return this.registerVapid();
        }
        else {
            return this.registerSafari();
        }
    };
    Notifications.prototype.unsubscribeFromPush = function () {
        var _this = this;
        if (!this.isVapidPushAvaialable()) {
            throw new Error('Only VAPID push support programaticaly!');
        }
        var subscription;
        return this.swPush.subscription.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (result) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(subscription.unsubscribe());
        })).pipe(function () {
            return _this.http.post(_this.vapidSubscriptionEndpoint + '/unsubscribe', subscription, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('content-type', 'application/json'), observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (resp) { return resp.status === 202; }, function (err) { return err.status === 202; }));
        });
    };
    Notifications.prototype.registerVapid = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].create(function (subscriber) {
            _this.swPush.requestSubscription({ serverPublicKey: _this.applicationServerKey }).then(function (pushSubscription) {
                _this.http.post(_this.vapidSubscriptionEndpoint + '/subscribe', JSON.stringify(pushSubscription), { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('content-type', 'application/json'), observe: 'response' })
                    .subscribe(function (response) {
                    if (response.status !== 202) {
                        pushSubscription.unsubscribe();
                        subscriber.next(false);
                    }
                    else {
                        subscriber.next(true);
                    }
                }, function (err) {
                    if (err.status !== 202) { // workaround for  https://github.com/angular/angular/issues/19555
                        pushSubscription.unsubscribe();
                        subscriber.next(false);
                    }
                    else {
                        subscriber.next(true);
                    }
                });
            });
        });
    };
    Notifications.prototype.registerSafari = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].create(function (subscriber) {
            _this.window.nativeWindow['safari'].pushNotification.requestPermission(_this.safariSubscriptionEndpoint, 'web.com.maciejtreder.angular-universal-pwa', null, function (permission) {
                if (permission.permission === 'granted') {
                    subscriber.next(true);
                }
                else {
                    subscriber.next(false);
                }
                _this.appRef.tick();
            });
        });
    };
    Notifications.prototype.isVapidPushAvaialable = function () {
        return !this.window.nativeWindow['safari'] && !!this.window.nativeWindow['navigator'] && !!this.window.nativeWindow.navigator['serviceWorker'];
    };
    Notifications.prototype.isSafariPushAvailable = function () {
        return !!this.window.nativeWindow['safari'] && !!this.window.nativeWindow['safari'].pushNotification;
    };
    Notifications = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_window_ref_service__WEBPACK_IMPORTED_MODULE_1__["WindowRef"], Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], Notifications);
    return Notifications;
}());



/***/ }),

/***/ "./src/app/services/resolvers/hitWithTransferState.resolver.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/resolvers/hitWithTransferState.resolver.ts ***!
  \*********************************************************************/
/*! exports provided: HitWithTransferStateResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HitWithTransferStateResolver", function() { return HitWithTransferStateResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _exampleApi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../exampleApi.service */ "./src/app/services/exampleApi.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var HitWithTransferStateResolver = /** @class */ (function () {
    function HitWithTransferStateResolver(api, transferState, platformId) {
        this.api = api;
        this.transferState = transferState;
        this.platformId = platformId;
        this.key = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["makeStateKey"])('response');
    }
    HitWithTransferStateResolver.prototype.resolve = function (snapshot, state) {
        var _this = this;
        if (!this.transferState.hasKey(this.key)) {
            return this.api.hit().pipe(function (response) {
                response.subscribe(function (resp) {
                    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformServer"])(_this.platformId)) {
                        _this.transferState.set(_this.key, resp);
                    }
                });
                return response;
            });
        }
        else {
            var value = this.transferState.get(this.key, 'error');
            this.transferState.remove(this.key);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(value);
        }
    };
    HitWithTransferStateResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_exampleApi_service__WEBPACK_IMPORTED_MODULE_1__["ExampleApi"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["TransferState"], Object])
    ], HitWithTransferStateResolver);
    return HitWithTransferStateResolver;
}());



/***/ }),

/***/ "./src/app/services/resolvers/hitWithoutTransferState.resolver.ts":
/*!************************************************************************!*\
  !*** ./src/app/services/resolvers/hitWithoutTransferState.resolver.ts ***!
  \************************************************************************/
/*! exports provided: HitWithoutTransferStateResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HitWithoutTransferStateResolver", function() { return HitWithoutTransferStateResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _exampleApi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../exampleApi.service */ "./src/app/services/exampleApi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HitWithoutTransferStateResolver = /** @class */ (function () {
    function HitWithoutTransferStateResolver(api) {
        this.api = api;
    }
    HitWithoutTransferStateResolver.prototype.resolve = function (snapshot, state) {
        return this.api.hit();
    };
    HitWithoutTransferStateResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_exampleApi_service__WEBPACK_IMPORTED_MODULE_1__["ExampleApi"]])
    ], HitWithoutTransferStateResolver);
    return HitWithoutTransferStateResolver;
}());



/***/ }),

/***/ "./src/app/services/snack-bar.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/snack-bar.service.ts ***!
  \***********************************************/
/*! exports provided: SnackBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBar", function() { return SnackBar; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var typescript_collections_dist_lib_Queue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typescript-collections/dist/lib/Queue */ "./node_modules/typescript-collections/dist/lib/Queue.js");
/* harmony import */ var typescript_collections_dist_lib_Queue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typescript_collections_dist_lib_Queue__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SnackBar = /** @class */ (function () {
    function SnackBar(snackBar) {
        this.snackBar = snackBar;
        this.snackBarNotificationsQueue = new typescript_collections_dist_lib_Queue__WEBPACK_IMPORTED_MODULE_2___default.a();
        this.snackBarNotificationsForceQueue = new typescript_collections_dist_lib_Queue__WEBPACK_IMPORTED_MODULE_2___default.a();
        this.actuallyDisplayedNotification = null;
        this.snackbarOpened = false;
    }
    SnackBar.prototype.displayNotification = function (notification) {
        if (notification.force) {
            this.snackBarNotificationsForceQueue.enqueue(notification);
        }
        else {
            this.snackBarNotificationsQueue.enqueue(notification);
        }
        this.runCarousel();
    };
    SnackBar.prototype.loadNotificationToDisplay = function () {
        if (this.snackBarNotificationsForceQueue.size() > 0) {
            this.actuallyDisplayedNotification = this.snackBarNotificationsForceQueue.dequeue();
        }
        else if (this.snackBarNotificationsQueue.size() > 0) {
            this.actuallyDisplayedNotification = this.snackBarNotificationsQueue.dequeue();
        }
        else {
            this.actuallyDisplayedNotification = null;
            return;
        }
    };
    SnackBar.prototype.runCarousel = function () {
        var _this = this;
        if (this.snackbarOpened) {
            if (!this.actuallyDisplayedNotification.force && this.snackBarNotificationsForceQueue.size() > 0) {
                this.snackBar.dismiss();
            }
            return;
        }
        this.loadNotificationToDisplay();
        if (this.actuallyDisplayedNotification == null) {
            return;
        }
        this.snackbarOpened = true;
        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarConfig"]();
        config.duration = 1000 * this.actuallyDisplayedNotification.duration;
        var callback = this.actuallyDisplayedNotification.callback;
        this.snackBar.open(this.actuallyDisplayedNotification.message, this.actuallyDisplayedNotification.action, config).afterDismissed().subscribe(function () {
            if (callback) {
                callback();
            }
            _this.snackbarOpened = false;
            _this.runCarousel();
        });
    };
    SnackBar = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], SnackBar);
    return SnackBar;
}());



/***/ }),

/***/ "./src/app/transfer-state/transfer-state.component.css":
/*!*************************************************************!*\
  !*** ./src/app/transfer-state/transfer-state.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n    padding: 10px 5px;\n    border: 1px dashed gray;\n}\ndiv div {\n    border: 0;\n    justify-content: center;\n    display: flex;\n}\ndiv a {\n    color: black;\n    margin: 0 10px;\n}\n.shake {\n    /* Start the shake animation and make the animation last for 0.5 seconds */\n    -webkit-animation: shake 0.5s;\n            animation: shake 0.5s;\n    /* When the animation is finished, start again */\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n}\na.active {\n    background-color: grey;\n    cursor: default;\n}\n@-webkit-keyframes shake {\n    0% { -webkit-transform: translate(1px, 1px) rotate(0deg); transform: translate(1px, 1px) rotate(0deg); }\n    10% { -webkit-transform: translate(-1px, -2px) rotate(-1deg); transform: translate(-1px, -2px) rotate(-1deg); }\n    20% { -webkit-transform: translate(-3px, 0px) rotate(1deg); transform: translate(-3px, 0px) rotate(1deg); }\n    30% { -webkit-transform: translate(3px, 2px) rotate(0deg); transform: translate(3px, 2px) rotate(0deg); }\n    40% { -webkit-transform: translate(1px, -1px) rotate(1deg); transform: translate(1px, -1px) rotate(1deg); }\n    50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); transform: translate(-1px, 2px) rotate(-1deg); }\n    60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); transform: translate(-3px, 1px) rotate(0deg); }\n    70% { -webkit-transform: translate(3px, 1px) rotate(-1deg); transform: translate(3px, 1px) rotate(-1deg); }\n    80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); transform: translate(-1px, -1px) rotate(1deg); }\n    90% { -webkit-transform: translate(1px, 2px) rotate(0deg); transform: translate(1px, 2px) rotate(0deg); }\n    100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); transform: translate(1px, -2px) rotate(-1deg); }\n}\n@keyframes shake {\n    0% { -webkit-transform: translate(1px, 1px) rotate(0deg); transform: translate(1px, 1px) rotate(0deg); }\n    10% { -webkit-transform: translate(-1px, -2px) rotate(-1deg); transform: translate(-1px, -2px) rotate(-1deg); }\n    20% { -webkit-transform: translate(-3px, 0px) rotate(1deg); transform: translate(-3px, 0px) rotate(1deg); }\n    30% { -webkit-transform: translate(3px, 2px) rotate(0deg); transform: translate(3px, 2px) rotate(0deg); }\n    40% { -webkit-transform: translate(1px, -1px) rotate(1deg); transform: translate(1px, -1px) rotate(1deg); }\n    50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); transform: translate(-1px, 2px) rotate(-1deg); }\n    60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); transform: translate(-3px, 1px) rotate(0deg); }\n    70% { -webkit-transform: translate(3px, 1px) rotate(-1deg); transform: translate(3px, 1px) rotate(-1deg); }\n    80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); transform: translate(-1px, -1px) rotate(1deg); }\n    90% { -webkit-transform: translate(1px, 2px) rotate(0deg); transform: translate(1px, 2px) rotate(0deg); }\n    100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); transform: translate(1px, -2px) rotate(-1deg); }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90cmFuc2Zlci1zdGF0ZS90cmFuc2Zlci1zdGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdCQUF3QjtDQUMzQjtBQUNEO0lBQ0ksVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixjQUFjO0NBQ2pCO0FBRUQ7SUFDSSxhQUFhO0lBQ2IsZUFBZTtDQUNsQjtBQUVEO0lBQ0ksMkVBQTJFO0lBQzNFLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsaURBQWlEO0lBQ2pELHFDQUE2QjtZQUE3Qiw2QkFBNkI7Q0FDaEM7QUFFRDtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7Q0FDbkI7QUFFRDtJQUNJLEtBQUssb0RBQTRDLENBQTVDLDRDQUE0QyxFQUFFO0lBQ25ELE1BQU0sdURBQStDLENBQS9DLCtDQUErQyxFQUFFO0lBQ3ZELE1BQU0scURBQTZDLENBQTdDLDZDQUE2QyxFQUFFO0lBQ3JELE1BQU0sb0RBQTRDLENBQTVDLDRDQUE0QyxFQUFFO0lBQ3BELE1BQU0scURBQTZDLENBQTdDLDZDQUE2QyxFQUFFO0lBQ3JELE1BQU0sc0RBQThDLENBQTlDLDhDQUE4QyxFQUFFO0lBQ3RELE1BQU0scURBQTZDLENBQTdDLDZDQUE2QyxFQUFFO0lBQ3JELE1BQU0scURBQTZDLENBQTdDLDZDQUE2QyxFQUFFO0lBQ3JELE1BQU0sc0RBQThDLENBQTlDLDhDQUE4QyxFQUFFO0lBQ3RELE1BQU0sb0RBQTRDLENBQTVDLDRDQUE0QyxFQUFFO0lBQ3BELE9BQU8sc0RBQThDLENBQTlDLDhDQUE4QyxFQUFFO0NBQzFEO0FBWkQ7SUFDSSxLQUFLLG9EQUE0QyxDQUE1Qyw0Q0FBNEMsRUFBRTtJQUNuRCxNQUFNLHVEQUErQyxDQUEvQywrQ0FBK0MsRUFBRTtJQUN2RCxNQUFNLHFEQUE2QyxDQUE3Qyw2Q0FBNkMsRUFBRTtJQUNyRCxNQUFNLG9EQUE0QyxDQUE1Qyw0Q0FBNEMsRUFBRTtJQUNwRCxNQUFNLHFEQUE2QyxDQUE3Qyw2Q0FBNkMsRUFBRTtJQUNyRCxNQUFNLHNEQUE4QyxDQUE5Qyw4Q0FBOEMsRUFBRTtJQUN0RCxNQUFNLHFEQUE2QyxDQUE3Qyw2Q0FBNkMsRUFBRTtJQUNyRCxNQUFNLHFEQUE2QyxDQUE3Qyw2Q0FBNkMsRUFBRTtJQUNyRCxNQUFNLHNEQUE4QyxDQUE5Qyw4Q0FBOEMsRUFBRTtJQUN0RCxNQUFNLG9EQUE0QyxDQUE1Qyw0Q0FBNEMsRUFBRTtJQUNwRCxPQUFPLHNEQUE4QyxDQUE5Qyw4Q0FBOEMsRUFBRTtDQUMxRCIsImZpbGUiOiJhcHAvdHJhbnNmZXItc3RhdGUvdHJhbnNmZXItc3RhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIGdyYXk7XG59XG5kaXYgZGl2IHtcbiAgICBib3JkZXI6IDA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuZGl2IGEge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBtYXJnaW46IDAgMTBweDtcbn1cblxuLnNoYWtlIHtcbiAgICAvKiBTdGFydCB0aGUgc2hha2UgYW5pbWF0aW9uIGFuZCBtYWtlIHRoZSBhbmltYXRpb24gbGFzdCBmb3IgMC41IHNlY29uZHMgKi9cbiAgICBhbmltYXRpb246IHNoYWtlIDAuNXM7XG4gICAgLyogV2hlbiB0aGUgYW5pbWF0aW9uIGlzIGZpbmlzaGVkLCBzdGFydCBhZ2FpbiAqL1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG59XG5cbmEuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuQGtleWZyYW1lcyBzaGFrZSB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDFweCkgcm90YXRlKDBkZWcpOyB9XG4gICAgMTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTJweCkgcm90YXRlKC0xZGVnKTsgfVxuICAgIDIwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDBweCkgcm90YXRlKDFkZWcpOyB9XG4gICAgMzAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAycHgpIHJvdGF0ZSgwZGVnKTsgfVxuICAgIDQwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTFweCkgcm90YXRlKDFkZWcpOyB9XG4gICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgMnB4KSByb3RhdGUoLTFkZWcpOyB9XG4gICAgNjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMXB4KSByb3RhdGUoMGRlZyk7IH1cbiAgICA3MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDFweCkgcm90YXRlKC0xZGVnKTsgfVxuICAgIDgwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0xcHgpIHJvdGF0ZSgxZGVnKTsgfVxuICAgIDkwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMnB4KSByb3RhdGUoMGRlZyk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMnB4KSByb3RhdGUoLTFkZWcpOyB9XG59Il19 */"

/***/ }),

/***/ "./src/app/transfer-state/transfer-state.component.html":
/*!**************************************************************!*\
  !*** ./src/app/transfer-state/transfer-state.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>TransferState</h1>\n\n<div>\n    <h3>Choose one of the buttons below and start refreshing the page.</h3>\n    <div [ngClass]=\"{'shake': shake}\">\n        <a mat-raised-button routerLinkActive=\"active\" routerLink=\"/transferState/with\">Try with TransferState</a>\n        <a mat-raised-button routerLinkActive=\"active\" routerLink=\"/transferState/without\">Try without TransferState</a>\n    </div>\n    <p>Number of hits to the external API: <strong>{{hits}}</strong></p>\n    <a (click)=\"performRequest()\" mat-raised-button>Refresh page (perform request)</a>\n    <p><i>To see <strong>factual</strong> number of requests, you need to get rid of PWA functionality. To do that hard refresh this page (ctrl + shift + f5) or unregister Service Worker in developer tools.</i></p>\n    <p><u>Note:</u> if multiple users uses this page in the same time, hitCount may be increasing by more then 1 or 2.</p>\n\n\n</div>\n\n<h2>Code example can be found here: <a target=\"_blank\" href=\"https://github.com/maciejtreder/angular-universal-pwa/pull/136/files#diff-da58e2cab6a926f6d564978cdffb83a4\">TransferState example in Angular Universal</a></h2>\n\n<p>Most of the server-side rendered sites have one big problem. APIs are requested twice during initial load. Why? This is how user action flow looks like:</p>\n    <ol>\n    <li>Request page; i.e.: https://www.angular-universal-pwa.maciejtreder.com/transferState/without</li>\n    <li>Request reaches back-end:\n        <ol>\n            <li>Back-end launches Angular and starts rendering the view</li>\n            <li><strong>Back-end performs the request to the API to fetch data for component (https://2tvdln9i91.execute-api.eu-central-1.amazonaws.com/production/hit)</strong></li>\n        </ol>\n    </li>\n    <li>HTML is sent back to the user</li>\n    <li>The browser renders the view from the given HTML and CSS\n        <ol>\n            <li>The browser launches JavaScript -> Angular comes into the game</li>\n            <li><strong>The browser performs the request to the API to fetch data for component (https://2tvdln9i91.execute-api.eu-central-1.amazonaws.com/production/hit)</strong></li>\n        </ol>\n    </li>\n</ol>\n\n<p>\n    To avoid such repetitive requests, Angular 5 comes with <a href=\"https://angular.io/api/platform-browser/TransferState\" target=\"_blank\">TransferState</a>. This mechanism gives front-end and back-end a possibility to \"communicate\". In other words, front-end retrieves from the back-end collection of key -> value sets with the data which back-end already retrieved from external services.\n</p>\n"

/***/ }),

/***/ "./src/app/transfer-state/transfer-state.component.ts":
/*!************************************************************!*\
  !*** ./src/app/transfer-state/transfer-state.component.ts ***!
  \************************************************************/
/*! exports provided: TransferStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferStateComponent", function() { return TransferStateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TransferStateComponent = /** @class */ (function () {
    function TransferStateComponent() {
    }
    TransferStateComponent.prototype.performRequest = function () {
        var _this = this;
        this.shake = true;
        setTimeout(function () { return _this.shake = false; }, 500);
    };
    TransferStateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./transfer-state.component.html */ "./src/app/transfer-state/transfer-state.component.html"),
            styles: [__webpack_require__(/*! ./transfer-state.component.css */ "./src/app/transfer-state/transfer-state.component.css")]
        })
    ], TransferStateComponent);
    return TransferStateComponent;
}());



/***/ }),

/***/ "./src/app/transfer-state/with-transfer-state.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/transfer-state/with-transfer-state.component.ts ***!
  \*****************************************************************/
/*! exports provided: WithTransferStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithTransferStateComponent", function() { return WithTransferStateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WithTransferStateComponent = /** @class */ (function () {
    function WithTransferStateComponent(route) {
        this.route = route;
        this.shake = false;
    }
    WithTransferStateComponent.prototype.ngOnInit = function () {
        this.hits = this.route.snapshot.data.hits;
    };
    WithTransferStateComponent.prototype.performRequest = function () {
        window.location.reload();
    };
    WithTransferStateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./transfer-state.component.html */ "./src/app/transfer-state/transfer-state.component.html"),
            styles: [__webpack_require__(/*! ./transfer-state.component.css */ "./src/app/transfer-state/transfer-state.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], WithTransferStateComponent);
    return WithTransferStateComponent;
}());



/***/ }),

/***/ "./src/app/transfer-state/without-transfer-state.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/transfer-state/without-transfer-state.component.ts ***!
  \********************************************************************/
/*! exports provided: WithoutTransferStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithoutTransferStateComponent", function() { return WithoutTransferStateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WithoutTransferStateComponent = /** @class */ (function () {
    function WithoutTransferStateComponent(route) {
        this.route = route;
        this.shake = false;
    }
    WithoutTransferStateComponent.prototype.ngOnInit = function () {
        this.hits = this.route.snapshot.data.hits;
    };
    WithoutTransferStateComponent.prototype.performRequest = function () {
        window.location.reload();
    };
    WithoutTransferStateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./transfer-state.component.html */ "./src/app/transfer-state/transfer-state.component.html"),
            styles: [__webpack_require__(/*! ./transfer-state.component.css */ "./src/app/transfer-state/transfer-state.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], WithoutTransferStateComponent);
    return WithoutTransferStateComponent;
}());



/***/ }),

/***/ "./src/app/web/web.component.html":
/*!****************************************!*\
  !*** ./src/app/web/web.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h1 typingAnimation [typeSpeed]=\"150\" [condition]=\"start\" [startDelay]=\"500\" [hideCursorOnComplete]=\"true\" (complete)=\"onTypingAnimationComplete()\" class=\"center\">\n      Web\n    </h1>\n  <h2 typingAnimation [typeSpeed]=\"80\" [condition]=\"start\" [startDelay]=\"1500\" [hideCursorOnComplete]=\"true\" (complete)=\"onTypingAnimationComplete()\" class=\"center\">Examples of web and UX/UI design</h2>\n  <div class=\"row\">\n    <ng-container *ngFor=\"let element of webElements\">\n    <div class=\"col l6 m12 s12\" style=\"padding: 20px 80px;\">\n\n      <h3>{{element.title}}</h3>\n      <video class=\"responsive-video\" controls>\n        <source src=\"{{element.asset}}\" type=\"video/mp4\">\n      </video>\n      <h4>{{element.subheader}}</h4>\n      <p>{{element.text}}</p>\n      <a href=\"{{element.link}}\" target=\"_blank\">{{element.linkname}}</a>\n    </div>\n    </ng-container>\n    <!--<div class=\"col l5 m12 s12\" style=\"padding: 60px;\">\n    <ng-container *ngFor=\"let element of webElements2\">\n      <h2>{{element.title}}</h2>\n      <video class=\"responsive-video\" controls>\n        <source src=\"{{element.asset}}\" type=\"video/mp4\">\n      </video>\n      <h3>{{element.subheader}}</h3>\n      <p>{{element.text}}</p>\n      <a href=\"{{element.link}}\" target=\"_blank\">{{element.linkname}}</a>\n      <br><br>\n      </ng-container>\n      <br>\n      </div>-->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/web/web.component.scss":
/*!****************************************!*\
  !*** ./src/app/web/web.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Libre+Baskerville\");\n.logo-main {\n  width: 75%;\n  max-width: 450px;\n  display: block;\n  margin: -12vh auto 0 auto; }\nh1 {\n  font-family: 'Libre Baskerville', serif !important;\n  margin-top: 0rem; }\nh2 {\n  font-size: 2.5rem; }\nh3 {\n  font-family: 'Libre Baskerville', serif !important;\n  font-size: 2.25rem;\n  margin-bottom: 1.5rem;\n  color: #333; }\nh4 {\n  font-family: 'Libre Baskerville', serif !important;\n  font-size: 1.5rem;\n  margin-bottom: 0.5rem;\n  color: #333; }\np {\n  font-size: 1.25rem;\n  margin-top: 0.25rem; }\na {\n  color: #ff8f00;\n  font-weight: 400;\n  padding: 5px;\n  font-size: 1.5rem;\n  position: relative;\n  width: auto;\n  max-width: auto; }\na:after {\n    display: block;\n    content: '';\n    border-bottom: 1px solid #333;\n    -webkit-transform: scaleX(0);\n            transform: scaleX(0);\n    transition: .3s transform ease;\n    width: 6.5rem; }\na:hover, a:active, a:focus {\n    text-decoration: none;\n    font-weight: 600;\n    color: #333; }\na:hover:after, a:active:after, a:focus:after {\n    -webkit-transform: scaleX(1);\n            transform: scaleX(1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJhaGJyb2F0L0RvY3VtZW50cy9XZWIgRGVzaWduL215QXBwL3NyYy9hcHAvd2ViL3dlYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5RUFBWTtBQUNaO0VBQ0UsV0FBVTtFQUNWLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsMEJBQXlCLEVBQzFCO0FBQ0Q7RUFDRSxtREFBa0Q7RUFDbEQsaUJBQWdCLEVBQ2pCO0FBQ0Q7RUFDRSxrQkFBaUIsRUFDbEI7QUFDRDtFQUNFLG1EQUFrRDtFQUNsRCxtQkFBa0I7RUFDbEIsc0JBQXFCO0VBQ3JCLFlBQVcsRUFDWjtBQUNEO0VBQ0UsbURBQWtEO0VBQ2xELGtCQUFpQjtFQUNqQixzQkFBcUI7RUFDckIsWUFBVyxFQUNaO0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3BCO0FBQ0Q7RUFDQSxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxnQkFBZSxFQWlCZDtBQXhCRDtJQVNFLGVBQWM7SUFDZCxZQUFXO0lBQ1gsOEJBQTZCO0lBQzdCLDZCQUFvQjtZQUFwQixxQkFBb0I7SUFDcEIsK0JBQThCO0lBQzlCLGNBQWEsRUFDZDtBQWZEO0lBaUJFLHNCQUFxQjtJQUNyQixpQkFBZ0I7SUFDaEIsWUFBVyxFQUNaO0FBcEJEO0lBc0JFLDZCQUFvQjtZQUFwQixxQkFBb0IsRUFDckIiLCJmaWxlIjoiYXBwL3dlYi93ZWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlJyk7XG4ubG9nby1tYWlue1xuICB3aWR0aDogNzUlO1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAtMTJ2aCBhdXRvIDAgYXV0bztcbn1cbmgxe1xuICBmb250LWZhbWlseTogJ0xpYnJlIEJhc2tlcnZpbGxlJywgc2VyaWYgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHJlbTtcbn1cbmgyIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG5oMyB7XG4gIGZvbnQtZmFtaWx5OiAnTGlicmUgQmFza2VydmlsbGUnLCBzZXJpZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgY29sb3I6ICMzMzM7XG59XG5oNCB7XG4gIGZvbnQtZmFtaWx5OiAnTGlicmUgQmFza2VydmlsbGUnLCBzZXJpZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBjb2xvcjogIzMzMztcbn1cbnB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbn1cbmEge1xuY29sb3I6ICNmZjhmMDA7XG5mb250LXdlaWdodDogNDAwO1xucGFkZGluZzogNXB4O1xuZm9udC1zaXplOiAxLjVyZW07XG5wb3NpdGlvbjogcmVsYXRpdmU7XG53aWR0aDogYXV0bztcbm1heC13aWR0aDogYXV0bztcbiY6YWZ0ZXJ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OiAnJztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICB0cmFuc2l0aW9uOiAuM3MgdHJhbnNmb3JtIGVhc2U7XG4gIHdpZHRoOiA2LjVyZW07XG59XG4mOmhvdmVyLCAmOmFjdGl2ZSwgJjpmb2N1c3tcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMzMztcbn1cbiY6aG92ZXI6YWZ0ZXIsICY6YWN0aXZlOmFmdGVyLCAmOmZvY3VzOmFmdGVye1xuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbn1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/web/web.component.ts":
/*!**************************************!*\
  !*** ./src/app/web/web.component.ts ***!
  \**************************************/
/*! exports provided: WebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebComponent", function() { return WebComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WebComponent = /** @class */ (function () {
    function WebComponent() {
        this.webElements = [
            {
                asset: './assets/vid/CriticalOutlookvid.mp4',
                title: 'Critical Outlook',
                subheader: 'HTML5, SASS, Angular 6, MaterializeCSS',
                text: "This is a redesign of the previous Critical Outlook site for Critical Illness Awareness Month in October, 2018. As part of this project I completed a content audit on the available assets, reconfigured my original wireframe to accomodate and highlight new assets, integrated new copy and calls to action, and revamped the site's color scheme and images to meet the new brand standards.",
                link: "http://criticaloutlook.assurity.com",
                linkname: "Visit Site"
            },
            {
                asset: './assets/vid/diquoter.mp4',
                title: 'Disability Income Quoter',
                subheader: 'HTML5, SASS, Angular 4, MaterializeCSS',
                text: 'I created the wireframing, layout, and much of the user interface for this disability income quoter, which has now become a repeatable web app template. It went through several iterations over a period of roughly six months, including user interface testing in various browsers. The form layouts and pagination kept the best practices of user experience research in mind.',
                link: "http://diquoter.assurity.com",
                linkname: "Visit Site"
            },
            {
                asset: './assets/vid/annualreport.mp4',
                title: 'Annual Report 2017',
                subheader: 'HTML5, SASS, MaterializeCSS, ScrollMagic',
                text: 'This is a digital version of the printed 2017 Annual Report. To create this site I worked with the creative manager and copywriter to choose images and edit down the copy for the web. Next, I presented a sketch and a more detailed wireframe. Following that I perfected the smaller details like the slide movements and sent it to the marketing and sales teams for approval.',
                link: "http://annualreport17.assurity.com",
                linkname: "Visit Site"
            },
            // {link: '/external', icon: 'call_merge', text: 'External module'}, //not works because of https://github.com/angular/angular-cli/issues/8284
            {
                asset: './assets/vid/benefits.mp4',
                title: 'Worksite Benefits', subheader: 'HTML5, SASS, Angular 4, MaterializeCSS',
                text: 'After I created the initial wireframe for this site, another developer made a template out of it. I then updated the template for the purposes of this website, including laying out and creating new sections, altering user experience paths, and updating the responsiveness on mobile devices.',
                link: "http://benefits.assurity.com",
                linkname: "Visit Site"
            },
        ];
        this.start = false;
        this.stringInterpolation = "Web";
        this.hideCursorOnComplete = true;
    }
    WebComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Start after 1 second + 1 second of startDelay
        setTimeout(function () { return _this.start = true; }, 1000);
    };
    WebComponent.prototype.onTypingAnimationComplete = function () {
        console.log('#TYPING ANIMATION COMPLETE');
        // ...
    };
    WebComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./web.component.html */ "./src/app/web/web.component.html"),
            styles: [__webpack_require__(/*! ./web.component.scss */ "./src/app/web/web.component.scss")]
        })
    ], WebComponent);
    return WebComponent;
}());



/***/ }),

/***/ "./src/app/window-ref.service.ts":
/*!***************************************!*\
  !*** ./src/app/window-ref.service.ts ***!
  \***************************************/
/*! exports provided: WindowRef, USERAGENTTOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERAGENTTOKEN", function() { return USERAGENTTOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var WindowRef = /** @class */ (function () {
    function WindowRef(platformId, injector) {
        this.injector = injector;
        if (!Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
            // const req: any = this.injector.get(this.injector.get(USERAGENTTOKEN));
            // this._window = {navigator: {userAgent: req.get('User-Agent')}};
            this._window = { navigator: { userAgent: 'fakeAgent' } };
        }
        else {
            this._window = window;
        }
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return this._window;
        },
        enumerable: true,
        configurable: true
    });
    WindowRef = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], WindowRef);
    return WindowRef;
}());

var USERAGENTTOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('requestToken');


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
    production: false,
    baseHref: '/'
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

/***/ "./src/main.browser.ts":
/*!*****************************!*\
  !*** ./src/main.browser.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_browser_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.browser.module */ "./src/app/app.browser.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_browser_module__WEBPACK_IMPORTED_MODULE_3__["AppBrowserModule"]);


/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./src/main.browser.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sarahbroat/Documents/Web Design/myApp/src/main.browser.ts */"./src/main.browser.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map