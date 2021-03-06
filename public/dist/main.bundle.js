webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shotgun_shotgun_component__ = __webpack_require__("../../../../../src/app/shotgun/shotgun.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__driver_driver_component__ = __webpack_require__("../../../../../src/app/driver/driver.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pickup_pickup_component__ = __webpack_require__("../../../../../src/app/pickup/pickup.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'shotgun', component: __WEBPACK_IMPORTED_MODULE_4__shotgun_shotgun_component__["a" /* ShotgunComponent */] },
    { path: 'driver', component: __WEBPACK_IMPORTED_MODULE_5__driver_driver_component__["a" /* DriverComponent */] },
    { path: 'pickup', component: __WEBPACK_IMPORTED_MODULE_6__pickup_pickup_component__["a" /* PickupComponent */] },
    { path: '**', redirectTo: '' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n    border: 2px solid black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/ng2-bootstrap/x.x.x/ng2-bootstrap.min.js\"></script>\n<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://bootswatch.com/readable/bootstrap.min.css\">\n\n<div class=\"container\">\n    <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" href=\"#\">DojoPool </a>\n            </div>\n\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n                <li><a [routerLink]=\"['/dashboard']\" *ngIf=\"logoutflag\">Dashboard</a></li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li><a  *ngIf=\"logoutflag\" (click)=\"logout()\">Logout</a></li>\n            </ul>\n            </div>\n        </div>\n        \n    </nav>\n\n   <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(_communicateService, _cookieService, _route) {
        var _this = this;
        this._communicateService = _communicateService;
        this._cookieService = _cookieService;
        this._route = _route;
        if (!this._cookieService.get("loginuserName")) {
            this._route.navigate(['/']);
        }
        else {
            this._communicateService.updateLogoutflag(true);
        }
        this._communicateService.observedLogoutflag.subscribe(function (status) { return _this.logoutflag = status; }, function (err) { console.log(err); });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    // users: Array<any> = [];
    // constructor(private _http: HttpService) {
    //   this.getUsers();
    //   console.log("content:/// refreshed!!come here again ", this.users);
    //  }
    // getUsers(){
    //   console.log("null users in parent: ", this.users);
    //   this._http.retrieveAll()
    //   .then(data=>{
    //     this.users = data.reverse();
    //   console.log("content: ", this.users);
    //   })
    //   .catch(err=>{console.log(err);})
    // }
    AppComponent.prototype.logout = function () {
        this._cookieService.remove('loginuserName');
        this._route.navigate(['/']);
        this._communicateService.updateLogoutflag(false);
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this._communicateService.observedLogoutflag.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__driver_driver_component__ = __webpack_require__("../../../../../src/app/driver/driver.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shotgun_shotgun_component__ = __webpack_require__("../../../../../src/app/shotgun/shotgun.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pickup_pickup_component__ = __webpack_require__("../../../../../src/app/pickup/pickup.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { NgbModule } from '@ng-bootstrap/ng-bootstrap'







// import { CommunicateService } from './communicate.service';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__driver_driver_component__["a" /* DriverComponent */],
            __WEBPACK_IMPORTED_MODULE_12__shotgun_shotgun_component__["a" /* ShotgunComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pickup_pickup_component__["a" /* PickupComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: "AIzaSyCPX438xuJDV6jvpC9VhPNzM5PlGtAHIWs",
                libraries: ["places"]
            }),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__["CookieService"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n#main_container{\n        margin: 0px auto;\n        width: 80%;\n        height: 400px;\n        margin-bottom: 20px;\n}\n\n#driver{\n        width: 50%;\n        height: 400px;\n        background-color: lightgreen;\n        display: inline-block;\n        vertical-align: top;\n        \n}\n#shotgun{\n        width: 50%;\n        height: 400px;\n        background-color: lightblue;\n        display: inline-block;\n\n}\n.text-center{\n        margin-top: 180px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"dashboard_container\">\n  <h1>Hello, {{ name }}</h1>\n  <!--<a (click)=\"logout()\">Log out</a>-->\n  <div id=\"main_container\">\n    <div id=\"driver\">\n      <h1 class=\"text-center\"><a (click)=\"driver()\" style=\"color: white;\">I'm a driver.</a> </h1>\n    </div><!--\n    --><div id=\"shotgun\">\n        <h1 class=\"text-center\"><a [routerLink]=\"['/shotgun']\" style=\"color: white;\">I need a driver.</a></h1>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(mapsAPILoader, ngZone, _cookieService, _route, _httpService) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this._cookieService = _cookieService;
        this._route = _route;
        this._httpService = _httpService;
        this.name = '';
        this.user_id = {
            id: '',
        };
        this.cur_latitude = 0.0;
        this.cur_lonitute = 0.0;
        this.start = '';
        this.end = '';
        this.duration = '';
        if (!this._cookieService.get("loginuserName")) {
            this._route.navigate(['/']);
        }
        this.name = this._cookieService.get("loginuserName");
        this.user_id.id = this._cookieService.get("loginuserId");
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent.prototype.driver = function () {
        var _this = this;
        this._httpService.getdriver(this.user_id)
            .then(function (driver) {
            if (driver) {
                // console.log("Have passenger already: ", driver);
                _this._route.navigate(['/pickup']);
            }
            else {
                _this._route.navigate(['/driver']);
            }
        })
            .catch();
    };
    DashboardComponent.prototype.logout = function () {
        this._cookieService.remove('loginuserName');
        this._route.navigate(['/']);
    };
    return DashboardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("startsearch"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], DashboardComponent.prototype, "startsearchElementRef", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("endsearch"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], DashboardComponent.prototype, "endsearchElementRef", void 0);
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* MapsAPILoader */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__http_service__["a" /* HttpService */]) === "function" && _g || Object])
], DashboardComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/driver/driver.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#map {\n        height: 300px;\n        \n}\n\n.input_container{\n        margin-bottom: 20px;\n}\n\n#left_container{\n    width: 48%;\n    margin-bottom: 20px;\n    display: inline-block;\n    vertical-align: top;\n}\n\n#right_container{\n    width: 48%;\n    height: 200px;\n    margin-bottom: 20px;\n    /*background-color: lightblue; */\n    display: inline-block;\n    margin-left: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/driver/driver.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"driver_container\">\n  <h1>Hello, {{ name }}</h1>\n  <h3>Passenger requests: </h3>\n  <table class=\"table table-bordered\">\n    <thead>\n    <tr>\n      <td>Name</td>\n      <td>Guest start</td>\n      <td> Guest destination</td>\n      <td></td>\n    </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let request of shotgun_requests\">\n        <td>{{request._user.first_name}} </td>\n        <td> {{request.start}} </td>\n        <td> {{request.end}} </td>\n        <td><a class=\"btn btn-primary\" (click)=\"showroute(request._id)\">See route</a>\n            <a class=\"btn btn-primary\" (click)=\"pickup(request._id)\">Pick up</a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div id=\"left_container\"> \n    <div class=\"input_container\">\n          <div class=\"form-group\">\n            <input placeholder=\"start\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #startsearch [formControl]=\"searchControl\">\n          </div>\n          <div class=\"form-group\">\n            <input placeholder=\"destination\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #endsearch [formControl]=\"searchControl\">\n          </div>\n          <!--<agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\n            <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n          </agm-map>-->\n          <button class=\"btn btn-primary\" (click)=\"route()\">Need a Passenger</button>\n    </div>\n    <div id=\"map\"></div>\n  </div>\n  <!--<div *ngIf=\"showroute_flag\" id=\"right_container\">\n    <p>Before picking up passenger: {{ driver_time }} mins </p>\n    <p>After picking up passenger: {{ carpool_time }} mins </p>\n    <p>It's {{ percentage }}% more than original.</p>\n    \n  </div>-->\n\n  <div *ngIf=\"showroute_flag\" class=\"panel panel-primary\" id=\"right_container\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Information</h3>\n    </div>\n    <div class=\"panel-body\">\n      <p>Before picking up passenger: {{ driver_time }} mins </p>\n      <p>After picking up passenger: {{ carpool_time }} mins </p>\n      <p>It's {{ percentage }}% more than original.</p>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/driver/driver.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DriverComponent = (function () {
    function DriverComponent(_httpService, _cookieService, _route, mapsAPILoader, ngZone) {
        var _this = this;
        this._httpService = _httpService;
        this._cookieService = _cookieService;
        this._route = _route;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.shotgun_requests = [];
        this.name = '';
        this.user_id = {
            id: '',
        };
        this.showroute_flag = false;
        this.cur_latitude = 0.0;
        this.cur_lonitute = 0.0;
        this.driver_start = '';
        this.driver_end = '';
        this.duration = '';
        this.driver_time = 0;
        this.carpool_time = 0;
        this.percentage = 0.0;
        if (!this._cookieService.get("loginuserName")) {
            this._route.navigate(['/']);
        }
        this.name = this._cookieService.get("loginuserName");
        this.user_id.id = this._cookieService.get("loginuserId");
        this._httpService.getallshotgun(this.user_id)
            .then(function (allshotguns) {
            _this.shotgun_requests = allshotguns;
            // console.log("SHOTGUN REQUEST: ", this.shotgun_requests);
        })
            .catch(function (err) {
            console.log("error in driver component constructor", err);
        });
    }
    DriverComponent.prototype.ngOnInit = function () {
        var _this = this;
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]();
        //set current position
        this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load()
            .then(function () {
            var startautocomplete = new google.maps.places.Autocomplete(_this.startsearchElementRef.nativeElement, {
                types: ["address"]
            });
            var endautocomplete = new google.maps.places.Autocomplete(_this.endsearchElementRef.nativeElement, {
                types: ["address"]
            });
            startautocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = startautocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // console.log("place", place);
                    if (place) {
                        _this.driver_start = place.formatted_address;
                    }
                });
            });
            endautocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = endautocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // console.log("place", place);
                    _this.driver_end = place.formatted_address;
                });
            });
        });
    };
    // private listAllDestination(){
    //   var map = new google.maps.Map(document.getElementById("map"));
    // }
    DriverComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        var self = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (data) {
                // console.log("current location:", data);
                _this.cur_latitude = data.coords.latitude;
                _this.cur_lonitute = data.coords.longitude;
                _this.start_latlng = new google.maps.LatLng(_this.cur_latitude, _this.cur_lonitute);
                var geocoder = new google.maps.Geocoder(); // create a geocoder object    // turn coordinates into an object          
                geocoder.geocode({ 'latLng': _this.start_latlng }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        self.driver_start = results[0].formatted_address;
                        // console.log("IN geocoder: ", self.start, self);       // if address found, pass to processing function
                    }
                });
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 11,
                    center: { lat: data.coords.latitude, lng: data.coords.longitude }
                });
                var marker = new google.maps.Marker({
                    position: { lat: data.coords.latitude, lng: data.coords.longitude },
                    map: map
                });
                for (var i = 0; i < self.shotgun_requests.length; i++) {
                    geocoder.geocode({ 'address': self.shotgun_requests[i].end }, function (res, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            // console.log("ALALALALAL: ", res);
                            var marker = new google.maps.Marker({
                                icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png',
                                map: map,
                                position: res[0].geometry.location,
                                title: res[0].formatted_address,
                            });
                        }
                    });
                }
            });
        }
    };
    DriverComponent.prototype.route = function () {
        var self = this;
        // console.log("AAA", self.driver_start, self.driver_end);
        // console.log(self);
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
            center: { lat: this.cur_latitude, lng: this.cur_lonitute },
        });
        directionsDisplay.setMap(map);
        directionsService.route({
            origin: this.driver_start,
            destination: this.driver_end,
            travelMode: 'DRIVING'
        }, function (res, status) {
            // console.log("response", res);
            self.driver_time = Math.floor(res.routes[0].legs[0].duration.value / 60);
            directionsDisplay.setDirections(res);
        });
    };
    DriverComponent.prototype.showroute = function (request_id) {
        var _this = this;
        var self = this;
        // console.log("show route: ",request_id);
        var request = {
            id: request_id,
        };
        this._httpService.getoneshotgun(request)
            .then(function (shotgun_req) {
            // console.log("find shotgun request: ", shotgun_req);
            // console.log(this.driver_start);
            // console.log(this.driver_end);
            var directionsService = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer;
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 7,
                center: { lat: _this.cur_latitude, lng: _this.cur_lonitute },
            });
            directionsDisplay.setMap(map);
            directionsService.route({
                origin: _this.driver_start,
                destination: _this.driver_end,
                waypoints: [
                    {
                        location: shotgun_req.start,
                        stopover: true
                    },
                    {
                        location: shotgun_req.end,
                        stopover: true
                    },
                ],
                travelMode: 'DRIVING'
            }, function (res, status) {
                // console.log("response legs", res);
                var time = 0;
                for (var i = 0; i < res.routes[0].legs.length; i++) {
                    time += res.routes[0].legs[i].duration.value;
                    // console.log("time: ", res.routes[0].legs[i].duration.value);
                }
                self.carpool_time = Math.floor(time / 60);
                directionsDisplay.setDirections(res);
                self.showroute_flag = true;
                self.percentage = Math.floor((self.carpool_time - self.driver_time) * 100 / self.driver_time);
            });
        })
            .catch();
    };
    DriverComponent.prototype.pickup = function (request_id) {
        var _this = this;
        var self = this;
        var request = {
            id: request_id,
        };
        this._httpService.getoneshotgun(request)
            .then(function (shotgun_req) {
            // console.log("PICK UP REQUEST: ", shotgun_req)
            var driver = {
                driver_start: self.driver_start,
                driver_end: self.driver_end,
                shotgun_start: shotgun_req.start,
                shotgun_end: shotgun_req.end,
                shotgun_name: shotgun_req._user.first_name,
                shotgun_phone: shotgun_req._user.phone_number,
                _user: _this._cookieService.get("loginuserId")
            };
            _this._httpService.createDriver(driver)
                .then(function (driver_created) {
                // console.log("driver created: ", driver_created);
            })
                .catch(function (err) { });
            _this._httpService.removeshotgun(shotgun_req)
                .then(function () {
                _this._route.navigate(['/pickup']);
            });
        })
            .catch(function (err) { });
    };
    return DriverComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("startsearch"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], DriverComponent.prototype, "startsearchElementRef", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("endsearch"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], DriverComponent.prototype, "endsearchElementRef", void 0);
DriverComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-driver',
        template: __webpack_require__("../../../../../src/app/driver/driver.component.html"),
        styles: [__webpack_require__("../../../../../src/app/driver/driver.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* MapsAPILoader */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _g || Object])
], DriverComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=driver.component.js.map

/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
        this.observedLogoutflag = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    }
    HttpService.prototype.updateLogoutflag = function (logoutflag) {
        this.observedLogoutflag.next(logoutflag);
    };
    HttpService.prototype.retrieveAll = function () {
        return this._http.get('/users')
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.createUser = function (user) {
        console.log("user:", user);
        return this._http.post("/newuser", user)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.getOneUser = function (user) {
        console.log("getOne", user);
        return this._http.post('/getuser', user)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.createShotGun = function (shotgun) {
        // console.log("Inside service create shotgun", shotgun);
        return this._http.post('/newshotgun', shotgun)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.getallshotgun = function (user_id) {
        return this._http.post('/shotguns', user_id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.getoneshotgun = function (request) {
        return this._http.post('/getshotgun', request)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.removeshotgun = function (request) {
        return this._http.post('/removeshotgun', request)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.createDriver = function (driver) {
        return this._http.post('/newdriver', driver)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.getdriver = function (driver_id) {
        return this._http.post('/getdriver', driver_id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.getdriverinfo = function (shotgun_name) {
        return this._http.post('/getdriverinfo', shotgun_name)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.removedriver = function (driver) {
        return this._http.post('/removedriver', driver)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".red{\n    color: red;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"sign_up_component\">\n  <!--{{ name | json }}-->\n  <h2>Welcome to Dojo Pool</h2>\n  <br>\n  <!--{{ reg_user | json }}-->\n  <div class=\"row\">\n    <div *ngIf=\"!isMember\" class=\"col-md-4 col-md-offset-4\">\n      <h1>Sign Up</h1>\n      <form #signupForm=\"ngForm\" (submit)=\"newUser(signupForm)\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label class=\"sr-only\" for=\"first_name\">First Name</label>\n              <input type=\"text\" name=\"first_name\" placeholder=\"First Name\" class=\"form-control\"\n              [(ngModel)] = \"reg_user.first_name\"\n              required\n              minlength=\"3\"\n              #firstname=\"ngModel\"\n              >\n            </div>\n            <div class=\"red\" *ngIf='firstname.errors && ( firstname.touched || signupForm.submitted)'>\n                <p *ngIf='firstname.errors.required'>First name is required</p>\n                <p *ngIf='firstname.errors.minlength'>First name must be at least 3 characters.</p>\n            </div>\n          </div>\n\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label class=\"sr-only\" for=\"last_name\">Last Name</label>\n              <input type=\"text\" name=\"last_name\" placeholder=\"Last Name\" class=\"form-control\"\n              [(ngModel)] = \"reg_user.last_name\"\n              required\n              minlength=\"3\"\n              #lastname=\"ngModel\"\n              >\n            </div>\n            <div class=\"red\" *ngIf='lastname.errors && ( lastname.touched || signupForm.submitted)'>\n                <p *ngIf='lastname.errors.required'>Last name is required</p>\n                <p *ngIf='lastname.errors.minlength'>Last name must be at least 3 characters.</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"sr-only\" for=\"phone_number\">Phone Number</label>\n          <input type=\"text\" name=\"phone_number\"  placeholder=\"(555) 555-5555\" class=\"form-control\"\n          [(ngModel)]=\"reg_user.phone_number\"\n          required\n          #phone=\"ngModel\"\n          >\n        </div>\n        <div class=\"red\" *ngIf='phone.errors && ( phone.touched || signupForm.submitted)'>\n                <p *ngIf='phone.errors.required'>Phone is required</p>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"sr-only\" for=\"email\">Email</label>\n          <input type=\"text\" name=\"email\"  placeholder=\"Email\" class=\"form-control\"\n          [(ngModel)]=\"reg_user.email\"\n          required\n          pattern='^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z]+$'\n          #email=\"ngModel\"\n          >\n        </div>\n        <div class=\"red\" *ngIf='email.errors && ( email.touched || signupForm.submitted)'>\n                <p *ngIf='email.errors.required'>Email is required</p>\n                <p *ngIf='email.errors.pattern'>Email must be valid</p>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"sr-only\" for=\"pwd\">Password</label>\n          <input type=\"password\" name=\"password\"  placeholder=\"Password\" class=\"form-control\"\n          [(ngModel)]=\"reg_user.password\"\n          required\n          minlength=\"8\"\n          pattern=\"^([a-zA-Z0-9@*#]{8,15})$\" \n          #pwd=\"ngModel\"\n          >\n        </div>\n        <p>*Password must be at least 8 characters</p>\n        <div class=\"red\" *ngIf='pwd.errors && ( pwd.touched || signupForm.submitted)'>\n                <p *ngIf='pwd.errors.required'>Password is required</p>\n                <p *ngIf='pwd.errors.pattern'>Password must be valid</p>\n                <p *ngIf='pwd.errors.minlength'>Password must be at least 8 characters</p>\n        </div>\n\n        <button [disabled]=\"!signupForm.valid\" type=\"submit\" class=\"btn btn-success\">Sign Up</button>\n      </form>\n    </div>\n    <div *ngIf=\"isMember\" class=\"col-md-4 col-md-offset-4\">\n      <h1>Sign In</h1>\n      <form #loginForm=\"ngForm\" (submit)=\"getUser(loginForm)\">\n        <div class=\"form-group\">\n          <label class=\"sr-only\" for=\"email\">Email</label>\n          <input type=\"text\" name=\"email\"  placeholder=\"Email\" class=\"form-control\"\n          [(ngModel)]=\"login_user.email\"\n          required\n          pattern='^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z]+$'\n          #loginemail=\"ngModel\"\n          >\n        </div>\n        <div class=\"red\" *ngIf='loginemail.errors && ( loginemail.touched || loginForm.submitted)'>\n                <p *ngIf='loginemail.errors.required'>Email is required</p>\n                <p *ngIf='loginemail.errors.pattern'>Email must be valid</p>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"sr-only\" for=\"pwd\">Password</label>\n          <input type=\"password\" name=\"password\"  placeholder=\"Password\" class=\"form-control\"\n          [(ngModel)]=\"login_user.password\"\n          required\n          minlength=\"8\"\n          pattern=\"^([a-zA-Z0-9@*#]{8,15})$\" \n          #loginpwd=\"ngModel\"\n          >\n        </div>\n\n        <div class=\"red\" *ngIf='loginpwd.errors && ( loginpwd.touched || loginForm.submitted)'>\n                <p *ngIf='loginpwd.errors.required'>Password is required</p>\n                <p *ngIf='loginpwd.errors.pattern'>Password must be valid</p>\n                <p *ngIf='loginpwd.errors.minlength'>Password must be at least 8 characters</p>\n        </div>\n\n        <p>Don't have an account? <a (click)=\"notMember()\">Sign up</a></p>\n\n        <button [disabled]=\"!loginForm.valid\" type=\"submit\" class=\"btn btn-success\">Login</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_communicateService, _httpServide, _cookieService, _router) {
        this._communicateService = _communicateService;
        this._httpServide = _httpServide;
        this._cookieService = _cookieService;
        this._router = _router;
        this.logoutflag = true;
        this.reg_user = {
            first_name: '',
            last_name: '',
            phone_number: '',
            email: '',
            password: '',
        };
        this.login_user = {
            email: '',
            password: '',
        };
        this.isMember = true;
        if (this._cookieService.get("loginuserName")) {
            this._router.navigate(['/dashboard']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.notMember = function () {
        this.isMember = false;
    };
    LoginComponent.prototype.getUser = function (form) {
        var _this = this;
        if (!form.valid) {
            return;
        }
        this._httpServide.getOneUser(this.login_user)
            .then(function (user) {
            // console.log("Login user: ", user);
            _this._cookieService.put("loginuserName", user.first_name);
            _this._cookieService.put("loginuserId", user._id);
            _this._router.navigate(['/dashboard']);
            _this._communicateService.updateLogoutflag(true);
        })
            .catch(function (err) {
            console.log("Login error: ", err);
        });
    };
    LoginComponent.prototype.newUser = function (form) {
        var _this = this;
        if (!form.valid) {
            return;
        }
        this._httpServide.createUser(this.reg_user)
            .then(function (usercreated) {
            // console.log("created user: ", usercreated);
            _this._cookieService.put("loginuserName", usercreated.first_name);
            _this._cookieService.put("loginuserId", usercreated._id);
            _this.reg_user = {
                first_name: '',
                last_name: '',
                phone_number: '',
                email: '',
                password: '',
            };
            form.resetForm();
            _this.isMember = true;
            _this._router.navigate(['/dashboard']);
            _this._communicateService.updateLogoutflag(true);
        })
            .catch(function (err) {
            console.log("create user error: ", err);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/pickup/pickup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#map {\n        width: 50%;\n        height: 420px;\n        display: inline-block; \n        vertical-align: top; \n        \n}\n\n#right-panel {\n        height: 420px;\n        width: 50%;\n        overflow: auto;\n        display: inline-block; \n        vertical-align: top; \n        \n}\n\n#info{\n        margin-bottom: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pickup/pickup.component.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyCPX438xuJDV6jvpC9VhPNzM5PlGtAHIWs&libraries=places\"></script>\n<div id=\"pickup_container\">\n  <h3>Pick up Info</h3>\n  <table class=\"table table-bordered\">\n    <thead>\n    <tr>\n      <td>Passenger</td>\n      <td>Phone</td>\n      <td>Pick up location</td>\n      <td>Drop off location</td>\n      <td></td>\n    </tr>\n    </thead>\n    <tr>\n      <td> {{ shotgun_info.shotgun_name }}</td>\n      <td> {{ shotgun_info.shotgun_phone }}</td>\n      <td> {{ shotgun_info.shotgun_start }}</td>\n      <td> {{ shotgun_info.shotgun_end }}</td>\n      <td><a class=\"btn btn-primary\" (click)=\"dropped_off()\">Dropped off</a></td>\n    </tr>\n  </table>\n  <h3>Pick up direction</h3>\n  <div id=\"info\">\n  <div id=\"map\"></div><!--\n  --><div id=\"right-panel\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pickup/pickup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PickupComponent = (function () {
    function PickupComponent(_httpService, _cookieService, _route, mapsAPILoader, ngZone) {
        this._httpService = _httpService;
        this._cookieService = _cookieService;
        this._route = _route;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.shotgun_info = {};
        this.driver_id = {
            id: '',
        };
        if (!this._cookieService.get("loginuserName")) {
            this._route.navigate(['/']);
        }
        this.driver_id.id = this._cookieService.get('loginuserId');
    }
    PickupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapsAPILoader.load()
            .then(function () {
            _this._httpService.getdriver(_this.driver_id)
                .then(function (driver_res) {
                // console.log("pick up info: ", driver_res);
                _this.shotgun_info = driver_res;
                var directionsService = new google.maps.DirectionsService;
                var directionsDisplay = new google.maps.DirectionsRenderer;
                var map = new google.maps.Map(document.getElementById('map'));
                directionsDisplay.setMap(map);
                directionsService.route({
                    origin: driver_res.driver_start,
                    destination: driver_res.driver_end,
                    waypoints: [{
                            location: driver_res.shotgun_start,
                            stopover: true,
                        },
                        {
                            location: driver_res.shotgun_end,
                            stopover: true,
                        }],
                    travelMode: 'DRIVING'
                }, function (res, status) {
                    // console.log("direction: ", res);
                    directionsDisplay.setDirections(res);
                    directionsDisplay.setPanel(document.getElementById('right-panel'));
                });
            });
        });
    };
    PickupComponent.prototype.dropped_off = function () {
        var _this = this;
        this._httpService.removedriver(this.driver_id)
            .then(function () {
            // console.log("remove successfully!!");
            _this._route.navigate(['/driver']);
        })
            .catch();
    };
    return PickupComponent;
}());
PickupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pickup',
        template: __webpack_require__("../../../../../src/app/pickup/pickup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pickup/pickup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__agm_core__["b" /* MapsAPILoader */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _e || Object])
], PickupComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=pickup.component.js.map

/***/ }),

/***/ "../../../../../src/app/shotgun/shotgun.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#map {\n        height: 300px;\n        width: 50%;\n}\n#resultmap {\n        height: 300px;\n        width: 50%;\n}\n\n.input_container{\n        width: 50%;\n        margin-bottom: 20px;\n}\n\n.green{\n        color: green;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shotgun/shotgun.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"dashboard_container\">\n  <h1>Hello, {{ user_name.name }}</h1>\n  <table class=\"table table-bordered\" *ngIf=\"request\">\n    <thead>\n    <tr>\n      <td> Driver name</td>\n      <td>Driver start</td>\n      <td> Meet up point</td>\n      <td>Phone number</td>\n      <td></td>\n    </tr>\n    </thead>\n    <tbody>\n      <tr *ngIf=\"request\">\n        <td>{{request._user.first_name }} </td>\n        <td> {{request.driver_start }} </td>\n        <td> {{request.shotgun_start }} </td>\n        <td>{{request._user.phone_number}} </td>\n        <td><a class=\"btn btn-primary\" (click)=\"resultroute()\">See detail</a></td>\n      </tr>\n    </tbody>\n  </table>\n    <div class=\"input_container\" *ngIf=\"!request\">\n          <div class=\"form-group\">\n            <input placeholder=\"start\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #startsearch [formControl]=\"searchControl\">\n          </div>\n          <div class=\"form-group\">\n            <input placeholder=\"destination\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #endsearch [formControl]=\"searchControl\">\n          </div>\n          <!--<agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\n            <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n          </agm-map>-->\n          <button class=\"btn btn-primary\" (click)=\"route()\">Need a Ride</button>\n          <p *ngIf=\"sent\" class=\"green\">You sent a carpool request successfully.</p>\n    </div>\n    <p *ngIf=\"duration\">Estimate time: {{ duration }}</p>\n    <div id=\"map\" *ngIf=\"!request\"></div>\n      <div>\n        <div id=\"resultmap\"></div>\n        <p *ngIf=\"result_flag\">Estimate time: {{ result_duration }}</p>\n      </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/shotgun/shotgun.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShotgunComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShotgunComponent = (function () {
    function ShotgunComponent(mapsAPILoader, ngZone, _cookieService, _route, _httpService) {
        var _this = this;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this._cookieService = _cookieService;
        this._route = _route;
        this._httpService = _httpService;
        this.result_flag = false;
        this.sent = false;
        this.user_name = {
            name: '',
        };
        this.id = '';
        this.cur_latitude = 0.0;
        this.cur_lonitute = 0.0;
        this.start = '';
        this.end = '';
        this.duration = '';
        this.result_duration = '';
        if (!this._cookieService.get("loginuserName")) {
            this._route.navigate(['/']);
        }
        this.user_name.name = this._cookieService.get("loginuserName");
        this.id = this._cookieService.get("loginuserId");
        // console.log("IDDD", this.id);
        this._httpService.getdriverinfo(this.user_name)
            .then(function (driver) {
            _this.request = driver;
            // console.log("SHOTGUN REQUEST RESULT: ", this.request);
        })
            .catch(function (err) {
            console.log("error in shotgun component constructor", err);
        });
    }
    ShotgunComponent.prototype.ngOnInit = function () {
        var _this = this;
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        //set current position
        this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load()
            .then(function () {
            var startautocomplete = new google.maps.places.Autocomplete(_this.startsearchElementRef.nativeElement, {
                types: ["address"]
            });
            var endautocomplete = new google.maps.places.Autocomplete(_this.endsearchElementRef.nativeElement, {
                types: ["address"]
            });
            startautocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = startautocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // console.log("place", place);
                    if (place) {
                        _this.start = place.formatted_address;
                    }
                });
            });
            endautocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = endautocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // console.log("place", place);
                    _this.end = place.formatted_address;
                });
            });
        });
    };
    ShotgunComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        var self = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (data) {
                // console.log("current location:", data);
                _this.cur_latitude = data.coords.latitude;
                _this.cur_lonitute = data.coords.longitude;
                _this.start_latlng = new google.maps.LatLng(_this.cur_latitude, _this.cur_lonitute);
                var geocoder = new google.maps.Geocoder(); // create a geocoder object    // turn coordinates into an object          
                geocoder.geocode({ 'latLng': _this.start_latlng }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        self.start = results[0].formatted_address;
                        // console.log("IN geocoder: ", self.start, self);       // if address found, pass to processing function
                    }
                });
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 15,
                    center: { lat: data.coords.latitude, lng: data.coords.longitude }
                });
                var marker = new google.maps.Marker({
                    position: { lat: data.coords.latitude, lng: data.coords.longitude },
                    map: map,
                    title: "Current location"
                });
            });
        }
    };
    ShotgunComponent.prototype.route = function () {
        var self = this;
        // console.log("AAA", self.start, self.end);
        self.sent = true;
        var shotgun = {
            start: self.start,
            end: self.end,
            _user: this._cookieService.get('loginuserId'),
        };
        this._httpService.createShotGun(shotgun);
        // console.log(self);
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
            center: { lat: this.cur_latitude, lng: this.cur_lonitute },
        });
        directionsDisplay.setMap(map);
        directionsService.route({
            origin: this.start,
            destination: this.end,
            travelMode: 'DRIVING'
        }, function (res, status) {
            // console.log("response", res);
            self.duration = res.routes[0].legs[0].duration.text;
            // console.log("dur", self.duration); 
            directionsDisplay.setDirections(res);
        });
    };
    ShotgunComponent.prototype.resultroute = function () {
        var self = this;
        // console.log("AAA", self.start, self.end);
        var shotgun = {
            start: self.start,
            end: self.end,
            _user: this._cookieService.get('loginuserId'),
        };
        // console.log(self);
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('resultmap'), {
            zoom: 7,
            center: { lat: this.cur_latitude, lng: this.cur_lonitute },
        });
        directionsDisplay.setMap(map);
        directionsService.route({
            origin: self.request.driver_start,
            destination: self.request.shotgun_start,
            travelMode: 'DRIVING'
        }, function (res, status) {
            // console.log("response", res);
            self.result_duration = res.routes[0].legs[0].duration.text;
            // console.log("dur", self.result_duration);
            self.result_flag = true;
            directionsDisplay.setDirections(res);
        });
    };
    ShotgunComponent.prototype.logout = function () {
        this._cookieService.remove('loginuserName');
        this._route.navigate(['/']);
    };
    return ShotgunComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("startsearch"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ShotgunComponent.prototype, "startsearchElementRef", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("endsearch"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], ShotgunComponent.prototype, "endsearchElementRef", void 0);
ShotgunComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-shotgun',
        template: __webpack_require__("../../../../../src/app/shotgun/shotgun.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shotgun/shotgun.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__http_service__["a" /* HttpService */]) === "function" && _g || Object])
], ShotgunComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=shotgun.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map