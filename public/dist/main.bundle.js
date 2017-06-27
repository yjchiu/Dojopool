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

module.exports = "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/ng2-bootstrap/x.x.x/ng2-bootstrap.min.js\"></script>\n<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" rel=\"stylesheet\">\n\n\n<div class=\"container\">\n   <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











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
exports.push([module.i, "#map {\n        height: 300px;\n        width: 50%;\n}\n\n.inpit_container{\n        width: 50%;\n        margin-bottom: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"dashboard_container\">\n  <h1>Hello, {{ name }}</h1>\n{{ start }}{{ end }}\n    <div class=\"inpit_container\">\n          <div class=\"form-group\">\n            <input placeholder=\"start\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #startsearch [formControl]=\"searchControl\">\n          </div>\n          <div class=\"form-group\">\n            <input placeholder=\"destination\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #endsearch [formControl]=\"searchControl\">\n          </div>\n          <!--<agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\n            <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n          </agm-map>-->\n          <button class=\"btn btn-primary\" (click)=\"route()\">route</button>\n    </div>\n\n    <div id=\"map\"></div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function DashboardComponent(mapsAPILoader, ngZone, _cookieService, _route) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this._cookieService = _cookieService;
        this._route = _route;
        this.name = '';
        this.cur_latitude = 0.0;
        this.cur_lonitute = 0.0;
        this.start = '';
        this.end = '';
        if (!this._cookieService.get("loginuserName")) {
            this._route.navigate(['/']);
        }
        this.name = this._cookieService.get("loginuserName");
    }
    DashboardComponent.prototype.ngOnInit = function () {
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
                    console.log("place", place);
                    _this.start = place.formatted_address;
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
                    console.log("place", place);
                    _this.end = place.formatted_address;
                });
            });
        });
    };
    DashboardComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (data) {
                console.log("current location:", data);
                _this.cur_latitude = data.coords.latitude;
                _this.cur_lonitute = data.coords.longitude;
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 15,
                    center: { lat: data.coords.latitude, lng: data.coords.longitude }
                });
                var marker = new google.maps.Marker({
                    position: { lat: data.coords.latitude, lng: data.coords.longitude },
                    map: map
                });
            });
        }
    };
    DashboardComponent.prototype.route = function () {
        // console.log(this.start, this.end);
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
            console.log("response", res);
            directionsDisplay.setDirections(res);
        });
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
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _f || Object])
], DashboardComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
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
    }
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

module.exports = "<div id=\"sign_up_component\">\n  <!--{{ name | json }}-->\n  <h2>Welcome to Dojo Pool</h2>\n  <br>\n  {{ reg_user | json }}\n  <div class=\"row\">\n    <div *ngIf=\"!isMember\" class=\"col-md-4 col-md-offset-4\">\n      <h1>Sign Up</h1>\n      <form #signupForm=\"ngForm\" (submit)=\"newUser(signupForm)\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label class=\"sr-only\" for=\"first_name\">First Name</label>\n              <input type=\"text\" name=\"first_name\" placeholder=\"First Name\" class=\"form-control\"\n              [(ngModel)] = \"reg_user.first_name\"\n              required\n              minlength=\"3\"\n              #firstname=\"ngModel\"\n              >\n            </div>\n            <div class=\"red\" *ngIf='firstname.errors && ( firstname.touched || signupForm.submitted)'>\n                <p *ngIf='firstname.errors.required'>First name is required</p>\n                <p *ngIf='firstname.errors.minlength'>First name must be at least 3 characters.</p>\n            </div>\n          </div>\n\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label class=\"sr-only\" for=\"last_name\">Last Name</label>\n              <input type=\"text\" name=\"last_name\" placeholder=\"Last Name\" class=\"form-control\"\n              [(ngModel)] = \"reg_user.last_name\"\n              required\n              minlength=\"3\"\n              #lastname=\"ngModel\"\n              >\n            </div>\n            <div class=\"red\" *ngIf='lastname.errors && ( lastname.touched || signupForm.submitted)'>\n                <p *ngIf='lastname.errors.required'>Last name is required</p>\n                <p *ngIf='lastname.errors.minlength'>Last name must be at least 3 characters.</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"sr-only\" for=\"phone_number\">Phone Number</label>\n          <input type=\"text\" name=\"phone_number\"  placeholder=\"(555) 555-5555\" class=\"form-control\"\n          [(ngModel)]=\"reg_user.phone_number\"\n          required\n          #phone=\"ngModel\"\n          >\n        </div>\n        <div class=\"red\" *ngIf='phone.errors && ( phone.touched || signupForm.submitted)'>\n                <p *ngIf='phone.errors.required'>Phone is required</p>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"sr-only\" for=\"email\">Email</label>\n          <input type=\"text\" name=\"email\"  placeholder=\"Email\" class=\"form-control\"\n          [(ngModel)]=\"reg_user.email\"\n          required\n          pattern='^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z]+$'\n          #email=\"ngModel\"\n          >\n        </div>\n        <div class=\"red\" *ngIf='email.errors && ( email.touched || signupForm.submitted)'>\n                <p *ngIf='email.errors.required'>Email is required</p>\n                <p *ngIf='email.errors.pattern'>Email must be valid</p>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"sr-only\" for=\"pwd\">Password</label>\n          <input type=\"password\" name=\"password\"  placeholder=\"Password\" class=\"form-control\"\n          [(ngModel)]=\"reg_user.password\"\n          required\n          minlength=\"8\"\n          pattern=\"^([a-zA-Z0-9@*#]{8,15})$\" \n          #pwd=\"ngModel\"\n          >\n        </div>\n        <p>*Password must be at least 8 characters</p>\n        <div class=\"red\" *ngIf='pwd.errors && ( pwd.touched || signupForm.submitted)'>\n                <p *ngIf='pwd.errors.required'>Password is required</p>\n                <p *ngIf='pwd.errors.pattern'>Password must be valid</p>\n                <p *ngIf='pwd.errors.minlength'>Password must be at least 8 characters</p>\n        </div>\n\n        <button [disabled]=\"!signupForm.valid\" type=\"submit\" class=\"btn btn-success\">Sign Up</button>\n      </form>\n    </div>\n    <div *ngIf=\"isMember\" class=\"col-md-4 col-md-offset-4\">\n      <h1>Sign In</h1>\n      <form #loginForm=\"ngForm\" (submit)=\"getUser(loginForm)\">\n        <div class=\"form-group\">\n          <label class=\"sr-only\" for=\"email\">Email</label>\n          <input type=\"text\" name=\"email\"  placeholder=\"Email\" class=\"form-control\"\n          [(ngModel)]=\"login_user.email\"\n          required\n          pattern='^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z]+$'\n          #loginemail=\"ngModel\"\n          >\n        </div>\n        <div class=\"red\" *ngIf='loginemail.errors && ( loginemail.touched || loginForm.submitted)'>\n                <p *ngIf='loginemail.errors.required'>Email is required</p>\n                <p *ngIf='loginemail.errors.pattern'>Email must be valid</p>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"sr-only\" for=\"pwd\">Password</label>\n          <input type=\"password\" name=\"password\"  placeholder=\"Password\" class=\"form-control\"\n          [(ngModel)]=\"login_user.password\"\n          required\n          minlength=\"8\"\n          pattern=\"^([a-zA-Z0-9@*#]{8,15})$\" \n          #loginpwd=\"ngModel\"\n          >\n        </div>\n\n        <div class=\"red\" *ngIf='loginpwd.errors && ( loginpwd.touched || loginForm.submitted)'>\n                <p *ngIf='loginpwd.errors.required'>Password is required</p>\n                <p *ngIf='loginpwd.errors.pattern'>Password must be valid</p>\n                <p *ngIf='loginpwd.errors.minlength'>Password must be at least 8 characters</p>\n        </div>\n\n        <p>Don't have an account? <a (click)=\"notMember()\">Sign up</a></p>\n\n        <button [disabled]=\"!loginForm.valid\" type=\"submit\" class=\"btn btn-success\">Login</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

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
    function LoginComponent(_httpServide, _cookieService, _router) {
        this._httpServide = _httpServide;
        this._cookieService = _cookieService;
        this._router = _router;
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
            console.log("Login user: ", user);
            _this._cookieService.put("loginuserName", user.first_name);
            _this._router.navigate(['/dashboard']);
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
            console.log("created user: ", usercreated);
            _this._cookieService.put("loginuserName", usercreated.first_name);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

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