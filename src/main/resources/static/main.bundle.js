webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\" class=\"alert alert-info alert-dismissible\" role=\"alert\" data-auto-dismiss=\"1000\">\n  {{alert}}\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\n</div>\n"

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__("./src/app/services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by yana on 28.03.18.
 */


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getAlert().subscribe(function (alert) {
            if (!alert) {
                _this.alerts = [];
                return;
            }
            _this.alerts.push(alert);
        });
    };
    AlertComponent.prototype.removeAlert = function (alert) {
        this.alerts = this.alerts.filter(function (x) { return x !== alert; });
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'alert',
            template: __webpack_require__("./src/app/alert/alert.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patients_components_patient_create_patient_create_component__ = __webpack_require__("./src/app/patients/components/patient-create/patient-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patients_components_patient_details_patient_details_component__ = __webpack_require__("./src/app/patients/components/patient-details/patient-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__patients_components_patient_list_patient_list_component__ = __webpack_require__("./src/app/patients/components/patient-list/patient-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: 'patients', pathMatch: 'full' },
    { path: 'patient/create', component: __WEBPACK_IMPORTED_MODULE_2__patients_components_patient_create_patient_create_component__["a" /* PatientCreateComponent */] },
    { path: 'patients/', component: __WEBPACK_IMPORTED_MODULE_4__patients_components_patient_list_patient_list_component__["a" /* PatientListComponent */] },
    { path: 'patient/:patientId', component: __WEBPACK_IMPORTED_MODULE_3__patients_components_patient_details_patient_details_component__["a" /* PatientDetailsComponent */] },
    { path: 'patient/edit/:patientId', component: __WEBPACK_IMPORTED_MODULE_2__patients_components_patient_create_patient_create_component__["a" /* PatientCreateComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: 100%;\n}\n\n.side {\n  height: 100%;\n  -webkit-box-flex: 30%;\n      -ms-flex: 30%;\n          flex: 30%;\n}\n\n.vl{\n  margin-top: 10px;\n  margin-bottom: 10px;\n  -webkit-box-flex: 1%;\n      -ms-flex: 1%;\n          flex: 1%;\n  border-left: 3px solid black;\n\n}\n\n.main {\n  height: 100%;\n  -webkit-box-flex: 69%;\n      -ms-flex: 69%;\n          flex: 69%;\n}\n\nmain{\n  height: 100%;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n\n  <div class=\"row\">\n    <div class=\"side\">\n      <app-patient-list></app-patient-list>\n    </div>\n\n    <div class=\"vl\"></div>\n\n    <div class=\"main\">\n      <router-outlet></router-outlet>\n    </div>\n\n  </div>\n\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Medical Base';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__patients_components_index__ = __webpack_require__("./src/app/patients/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__patients_services_patient_service__ = __webpack_require__("./src/app/patients/services/patient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__comments_services_comment_service__ = __webpack_require__("./src/app/comments/services/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__comments_components_index__ = __webpack_require__("./src/app/comments/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__patients_pipes_filter_pipe__ = __webpack_require__("./src/app/patients/pipes/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__alert_alert_component__ = __webpack_require__("./src/app/alert/alert.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__patients_components_index__["e" /* PatientListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__patients_components_index__["f" /* PatientListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_5__patients_components_index__["c" /* PatientDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__patients_components_index__["d" /* PatientDetailsHeader */],
                __WEBPACK_IMPORTED_MODULE_5__patients_components_index__["b" /* PatientCreateHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__patients_components_index__["a" /* PatientCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_9__comments_components_index__["c" /* CommentsListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__comments_components_index__["a" /* CommentListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_9__comments_components_index__["b" /* CommentsBlockComponent */],
                __WEBPACK_IMPORTED_MODULE_9__comments_components_index__["d" /* CreateCommentBlockComponent */],
                __WEBPACK_IMPORTED_MODULE_10__patients_pipes_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_11__alert_alert_component__["a" /* AlertComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__patients_services_patient_service__["a" /* PatientService */], __WEBPACK_IMPORTED_MODULE_8__comments_services_comment_service__["a" /* CommentService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/base.behavior.subject.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseBehaviorSubject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/**
 * Created by yana on 29.03.18.
 */

var BaseBehaviorSubject = /** @class */ (function () {
    function BaseBehaviorSubject() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"]([]);
    }
    BaseBehaviorSubject.prototype.subscribe = function (next) {
        return this.subject.subscribe(next);
    };
    BaseBehaviorSubject.prototype.notifySubjectChanged = function (items) {
        this.subject.next(items);
    };
    BaseBehaviorSubject.prototype.add = function (item) {
        if (!item) {
            return;
        }
        var currentValue = this.subject.getValue();
        currentValue.push(item);
        this.subject.next(currentValue);
    };
    BaseBehaviorSubject.prototype.remove = function (item) {
        var currentValue = this.subject.getValue();
        var positionInTheList = this.findIndexOf(item, currentValue);
        if (positionInTheList > -1) {
            currentValue.splice(positionInTheList, 1);
        }
        this.notifySubjectChanged(currentValue);
    };
    BaseBehaviorSubject.prototype.replace = function (item) {
        if (!item) {
            return;
        }
        var currentValue = this.subject.getValue();
        var positionInTheList = this.findIndexOf(item, currentValue);
        if (positionInTheList > -1) {
            currentValue[positionInTheList] = item;
        }
        this.notifySubjectChanged(currentValue);
    };
    BaseBehaviorSubject.prototype.findIndexOf = function (item, items) {
        var _this = this;
        var positionInTheList = -1;
        items.forEach(function (element, index) {
            if (_this.equal(item, element)) {
                positionInTheList = index;
                return;
            }
        });
        return positionInTheList;
    };
    return BaseBehaviorSubject;
}());



/***/ }),

/***/ "./src/app/comments/components/comment-list-item/comment-list-item.component.css":
/***/ (function(module, exports) {

module.exports = "strong{\n  padding: 0 15px 0 15px;\n}\n"

/***/ }),

/***/ "./src/app/comments/components/comment-list-item/comment-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"comment-list-item\">\n\n  <small>{{comment.createDate | date}}</small>\n  <br/>\n  <p><strong>{{comment.text}}</strong></p>\n\n</div>\n"

/***/ }),

/***/ "./src/app/comments/components/comment-list-item/comment-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Comment__ = __webpack_require__("./src/app/comments/models/Comment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by yana on 26.03.18.
 */


var CommentListItemComponent = /** @class */ (function () {
    function CommentListItemComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_Comment__["a" /* Comment */])
    ], CommentListItemComponent.prototype, "comment", void 0);
    CommentListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comment-list-item',
            template: __webpack_require__("./src/app/comments/components/comment-list-item/comment-list-item.component.html"),
            styles: [__webpack_require__("./src/app/comments/components/comment-list-item/comment-list-item.component.css")]
        })
    ], CommentListItemComponent);
    return CommentListItemComponent;
}());



/***/ }),

/***/ "./src/app/comments/components/comments-block/comments-block.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\n  background-color: #d5d5d5;\n  border: 2px solid;\n  padding: 15px;\n  height: 100%;\n  position: relative;\n}\n\n.title{\n  padding: 0 15px 0 15px;\n  height: 10%;\n}\n\n.comments-list{\n  margin-bottom: 15px;\n  overflow-y: auto;\n  height: 75%;\n}\n\n.input-block{\n  height: 15%;\n  padding-left: 10px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\nstrong{\n  font-size: x-large;\n}\n"

/***/ }),

/***/ "./src/app/comments/components/comments-block/comments-block.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <strong class=\"title\">Comments:</strong>\n\n  <div class=\"comments-list\">\n    <app-comments-list></app-comments-list>\n  </div>\n\n  <div class=\"input-block\">\n    <app-create-comment-block></app-create-comment-block>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/comments/components/comments-block/comments-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_interaction_service_comment_edit_interaction_service__ = __webpack_require__("./src/app/component-interaction-service/comment-edit-interaction-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by yana on 26.03.18.
 */


var CommentsBlockComponent = /** @class */ (function () {
    function CommentsBlockComponent() {
    }
    CommentsBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comments-block',
            template: __webpack_require__("./src/app/comments/components/comments-block/comments-block.component.html"),
            styles: [__webpack_require__("./src/app/comments/components/comments-block/comments-block.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__component_interaction_service_comment_edit_interaction_service__["a" /* CommentEditInteractionService */]]
        })
    ], CommentsBlockComponent);
    return CommentsBlockComponent;
}());



/***/ }),

/***/ "./src/app/comments/components/comments-list/comments-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/comments/components/comments-list/comments-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-comment-list-item *ngFor=\"let comment of comments\" [comment]=\"comment\" (click)=\"onCommentClick(comment)\"></app-comment-list-item>\n\n  <small  *ngIf=\"comments.length==0\">No comments yet</small>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/comments/components/comments-list/comments-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_comment_service__ = __webpack_require__("./src/app/comments/services/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_interaction_service_comment_edit_interaction_service__ = __webpack_require__("./src/app/component-interaction-service/comment-edit-interaction-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lifecycle_component__ = __webpack_require__("./src/app/lifecycle.component.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by yana on 26.03.18.
 */





var CommentsListComponent = /** @class */ (function (_super) {
    __extends(CommentsListComponent, _super);
    function CommentsListComponent(route, commentService, commentsIntercationService) {
        var _this = _super.call(this) || this;
        _this.route = route;
        _this.commentService = commentService;
        _this.commentsIntercationService = commentsIntercationService;
        return _this;
    }
    CommentsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.loadComments(params['patientId']);
        });
    };
    CommentsListComponent.prototype.loadComments = function (patientId) {
        var _this = this;
        this.subscription = this.commentService.commentsBehaviorSubject.subscribe(function (comments) {
            _this.comments = comments;
        });
        this.commentService.findAll(patientId);
    };
    CommentsListComponent.prototype.onCommentClick = function (comment) {
        this.commentsIntercationService.onCommentItemClick(comment);
    };
    CommentsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-comments-list',
            template: __webpack_require__("./src/app/comments/components/comments-list/comments-list.component.html"),
            styles: [__webpack_require__("./src/app/comments/components/comments-list/comments-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__services_comment_service__["a" /* CommentService */],
            __WEBPACK_IMPORTED_MODULE_3__component_interaction_service_comment_edit_interaction_service__["a" /* CommentEditInteractionService */]])
    ], CommentsListComponent);
    return CommentsListComponent;
}(__WEBPACK_IMPORTED_MODULE_4__lifecycle_component__["a" /* LifecycleComponent */]));



/***/ }),

/***/ "./src/app/comments/components/create-comment-block/create-comment-block.component.css":
/***/ (function(module, exports) {

module.exports = "input{\n  background-color: transparent;\n  border: 2px solid black;\n  border-radius: 0;\n}\n\n.btn{\n  margin-right: 5%;\n}\n"

/***/ }),

/***/ "./src/app/comments/components/create-comment-block/create-comment-block.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-between\">\n\n  <div [ngClass]=\"{'col-7': edit, 'col-10': !edit}\">\n    <section>\n      <form novalidate [formGroup]=\"commentForm\">\n        <fieldset>\n\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"text\"\n                   aria-describedby=\"inputGroup-sizing-default\" placeholder=\"Enter comment...\">\n          </div>\n\n        </fieldset>\n\n      </form>\n    </section>\n  </div>\n\n\n  <div class=\"col-5\" *ngIf=\"edit; else create\">\n    <div class=\"row justify-content-between\">\n      <button class=\"col btn btn-primary btn-outline-dark\" type=\"button\" (click)=\"saveChanges()\">Save</button>\n      <button class=\"col btn btn-primary btn-outline-dark\" type=\"button\" (click)=\"cancel()\">Cancel</button>\n    </div>\n  </div>\n\n  <ng-template #create>\n    <div class=\"col-2\">\n      <button class=\"btn btn-primary btn-outline-dark\" type=\"button\" (click)=\"addComment()\">Add</button>\n    </div>\n  </ng-template>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/comments/components/create-comment-block/create-comment-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCommentBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Comment__ = __webpack_require__("./src/app/comments/models/Comment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_comment_service__ = __webpack_require__("./src/app/comments/services/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_interaction_service_comment_edit_interaction_service__ = __webpack_require__("./src/app/component-interaction-service/comment-edit-interaction-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lifecycle_component__ = __webpack_require__("./src/app/lifecycle.component.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * Created by yana on 26.03.18.
 */







var CreateCommentBlockComponent = /** @class */ (function (_super) {
    __extends(CreateCommentBlockComponent, _super);
    function CreateCommentBlockComponent(route, commentService, commentEditInteracrionService) {
        var _this = _super.call(this) || this;
        _this.route = route;
        _this.commentService = commentService;
        _this.commentEditInteracrionService = commentEditInteracrionService;
        _this.commentForm = _this.buildFormGroup();
        _this.commentSubscription = commentEditInteracrionService.onEditCommentClicked$.subscribe(function (comment) {
            _this.edit = true;
            _this.comment = comment;
            _this.commentForm.patchValue({
                text: comment.text
            });
        });
        return _this;
    }
    CreateCommentBlockComponent.prototype.ngOnInit = function () {
        this.parseRoute();
    };
    CreateCommentBlockComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.commentSubscription.unsubscribe();
    };
    CreateCommentBlockComponent.prototype.parseRoute = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.patientId = params['patientId'];
        });
    };
    CreateCommentBlockComponent.prototype.buildFormGroup = function () {
        return new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            text: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required)
        });
    };
    CreateCommentBlockComponent.prototype.addComment = function () {
        if (this.commentForm.valid) {
            var comment = new __WEBPACK_IMPORTED_MODULE_3__models_Comment__["a" /* Comment */]();
            comment.createDate = new Date();
            comment.text = this.commentForm.controls['text'].value;
            this.postComment(this.patientId, comment);
        }
    };
    CreateCommentBlockComponent.prototype.postComment = function (patientId, comment) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commentService.addComment(patientId, comment)];
                    case 1:
                        _a.sent();
                        this.updateUIAfterCommentCreated();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateCommentBlockComponent.prototype.updateComment = function (patientId, comment) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commentService.updateComment(patientId, comment)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateCommentBlockComponent.prototype.cancel = function () {
        this.updateUIAfterCommentCreated();
    };
    CreateCommentBlockComponent.prototype.saveChanges = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.comment.createDate = new Date();
                        this.comment.text = this.commentForm.controls['text'].value;
                        return [4 /*yield*/, this.commentService.updateComment(this.patientId, this.comment)];
                    case 1:
                        _a.sent();
                        this.updateUIAfterCommentCreated();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateCommentBlockComponent.prototype.updateUIAfterCommentCreated = function () {
        this.commentForm.reset();
        this.comment = null;
        this.edit = false;
    };
    CreateCommentBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-comment-block',
            template: __webpack_require__("./src/app/comments/components/create-comment-block/create-comment-block.component.html"),
            styles: [__webpack_require__("./src/app/comments/components/create-comment-block/create-comment-block.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_comment_service__["a" /* CommentService */],
            __WEBPACK_IMPORTED_MODULE_5__component_interaction_service_comment_edit_interaction_service__["a" /* CommentEditInteractionService */]])
    ], CreateCommentBlockComponent);
    return CreateCommentBlockComponent;
}(__WEBPACK_IMPORTED_MODULE_6__lifecycle_component__["a" /* LifecycleComponent */]));



/***/ }),

/***/ "./src/app/comments/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__comment_list_item_comment_list_item_component__ = __webpack_require__("./src/app/comments/components/comment-list-item/comment-list-item.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__comment_list_item_comment_list_item_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comments_block_comments_block_component__ = __webpack_require__("./src/app/comments/components/comments-block/comments-block.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__comments_block_comments_block_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comments_list_comments_list_component__ = __webpack_require__("./src/app/comments/components/comments-list/comments-list.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__comments_list_comments_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_comment_block_create_comment_block_component__ = __webpack_require__("./src/app/comments/components/create-comment-block/create-comment-block.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__create_comment_block_create_comment_block_component__["a"]; });
/**
 * Created by yana on 28.03.18.
 */






/***/ }),

/***/ "./src/app/comments/models/Comment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
/**
 * Created by yana on 23.03.18.
 */
var Comment = /** @class */ (function () {
    function Comment() {
    }
    return Comment;
}());



/***/ }),

/***/ "./src/app/comments/services/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_base_service__ = __webpack_require__("./src/app/services/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comments_behavior_subject__ = __webpack_require__("./src/app/comments/services/comments.behavior.subject.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * Created by yana on 26.03.18.
 */






var CommentService = /** @class */ (function (_super) {
    __extends(CommentService, _super);
    function CommentService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.commentsBehaviorSubject = new __WEBPACK_IMPORTED_MODULE_5__comments_behavior_subject__["a" /* CommentsBehaviorSubject */]();
        return _this;
    }
    CommentService.prototype.findAll = function (patientId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var currentCommentsList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.buildApiUrl(patientId))
                            .toPromise()
                            .catch(function (error) { return _this.handleError(error); })];
                    case 1:
                        currentCommentsList = _a.sent();
                        this.commentsBehaviorSubject.notifySubjectChanged(currentCommentsList);
                        return [2 /*return*/];
                }
            });
        });
    };
    CommentService.prototype.addComment = function (patientId, comment) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.post(this.buildApiUrl(patientId), comment)
                            .toPromise()
                            .catch(function (error) { return _this.handleError(error); })];
                    case 1:
                        res = _a.sent();
                        this.commentsBehaviorSubject.add(res);
                        return [2 /*return*/, res];
                }
            });
        });
    };
    CommentService.prototype.updateComment = function (patientId, comment) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.put(this.buildApiUrl(patientId), comment)
                            .toPromise()
                            .catch(function (error) { return _this.handleError(error); })];
                    case 1:
                        res = _a.sent();
                        this.commentsBehaviorSubject.replace(res);
                        return [2 /*return*/, res];
                }
            });
        });
    };
    CommentService.prototype.buildApiUrl = function (patientId) {
        return "" + this.apiUrl + patientId + "/comments";
    };
    CommentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], CommentService);
    return CommentService;
}(__WEBPACK_IMPORTED_MODULE_4__services_base_service__["a" /* BaseService */]));



/***/ }),

/***/ "./src/app/comments/services/comments.behavior.subject.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsBehaviorSubject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_behavior_subject__ = __webpack_require__("./src/app/base.behavior.subject.ts");
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

/**
 * Created by yana on 29.03.18.
 */
var CommentsBehaviorSubject = /** @class */ (function (_super) {
    __extends(CommentsBehaviorSubject, _super);
    function CommentsBehaviorSubject() {
        return _super.call(this) || this;
    }
    CommentsBehaviorSubject.prototype.equal = function (comment1, comment2) {
        return comment1.id == comment2.id;
    };
    return CommentsBehaviorSubject;
}(__WEBPACK_IMPORTED_MODULE_0__base_behavior_subject__["a" /* BaseBehaviorSubject */]));



/***/ }),

/***/ "./src/app/component-interaction-service/comment-edit-interaction-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentEditInteractionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by yana on 25.03.18.
 */


var CommentEditInteractionService = /** @class */ (function () {
    function CommentEditInteractionService() {
        this.onEditCommentClickedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.onEditCommentClicked$ = this.onEditCommentClickedSource.asObservable();
    }
    CommentEditInteractionService.prototype.onCommentItemClick = function (comment) {
        this.onEditCommentClickedSource.next(comment);
    };
    CommentEditInteractionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CommentEditInteractionService);
    return CommentEditInteractionService;
}());



/***/ }),

/***/ "./src/app/component-interaction-service/patient-create-interaction-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientCreateInteractionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by yana on 25.03.18.
 */


var PatientCreateInteractionService = /** @class */ (function () {
    function PatientCreateInteractionService() {
        this.onSavePatientClickedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.onSavePatientClicked$ = this.onSavePatientClickedSource.asObservable();
    }
    PatientCreateInteractionService.prototype.savePatientClicked = function () {
        this.onSavePatientClickedSource.next();
    };
    PatientCreateInteractionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], PatientCreateInteractionService);
    return PatientCreateInteractionService;
}());



/***/ }),

/***/ "./src/app/component-interaction-service/patient-detail-interaction-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientDetailInteractionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by yana on 25.03.18.
 */


var PatientDetailInteractionService = /** @class */ (function () {
    function PatientDetailInteractionService() {
        this.onSavePatientClickedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.onDeletePatientClickedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.onDeletePatientClicked$ = this.onDeletePatientClickedSource.asObservable();
    }
    PatientDetailInteractionService.prototype.deletePatientClicked = function (patient) {
        this.onDeletePatientClickedSource.next(patient);
    };
    PatientDetailInteractionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], PatientDetailInteractionService);
    return PatientDetailInteractionService;
}());



/***/ }),

/***/ "./src/app/lifecycle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LifecycleComponent; });
/**
 * Created by yana on 29.03.18.
 */
var LifecycleComponent = /** @class */ (function () {
    function LifecycleComponent() {
    }
    LifecycleComponent.prototype.ngOnInit = function () { };
    LifecycleComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return LifecycleComponent;
}());



/***/ }),

/***/ "./src/app/patients/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__patient_create_patient_create_component__ = __webpack_require__("./src/app/patients/components/patient-create/patient-create.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__patient_create_patient_create_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__patient_create_header_patient_create_header_component__ = __webpack_require__("./src/app/patients/components/patient-create-header/patient-create-header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__patient_create_header_patient_create_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patient_details_patient_details_component__ = __webpack_require__("./src/app/patients/components/patient-details/patient-details.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__patient_details_patient_details_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patient_details_header_patient_details_header_component__ = __webpack_require__("./src/app/patients/components/patient-details-header/patient-details-header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__patient_details_header_patient_details_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__patient_list_patient_list_component__ = __webpack_require__("./src/app/patients/components/patient-list/patient-list.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__patient_list_patient_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__patient_list_item_patient_list_item_component__ = __webpack_require__("./src/app/patients/components/patient-list-item/patient-list-item.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__patient_list_item_patient_list_item_component__["a"]; });
/**
 * Created by yana on 28.03.18.
 */








/***/ }),

/***/ "./src/app/patients/components/patient-create-header/patient-create-header.component.css":
/***/ (function(module, exports) {

module.exports = ".sticky-top{\n  padding: 0 30px 0 15px;\n}\n\n.header{\n  padding: 20px 15px 35px 15px;\n  background-color: white;\n  border-bottom: 2px solid black;\n}\n\n.btn{\n  margin-left:5%;\n}\n\nstrong{\n  font-weight: bolder;\n  font-size: x-large;\n}\n\n\n"

/***/ }),

/***/ "./src/app/patients/components/patient-create-header/patient-create-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-top\">\n\n<div class=\"row align-items-center justify-content-between header\">\n\n\n  <div class=\"row col-4 justify-content-start\">\n\n    <div *ngIf=\"patient; else newPatient\">\n      <strong>{{patient.firstName}} {{patient.lastName}}</strong>\n    </div>\n\n    <ng-template #newPatient>\n      <strong>New Patient</strong>\n    </ng-template>\n  </div>\n\n  <div class=\"row col-4 justify-content-end\">\n\n    <button class=\"col-4 btn btn-outline-dark\" type=\"button\" (click)=\"onSavePatientClick()\">Save</button>\n\n    <button class=\"col-4 btn btn-outline-dark\" role=\"button\" (click)=\"goBack()\">Cancel</button>\n  </div>\n\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/patients/components/patient-create-header/patient-create-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientCreateHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_Patient__ = __webpack_require__("./src/app/patients/models/Patient.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_interaction_service_patient_create_interaction_service__ = __webpack_require__("./src/app/component-interaction-service/patient-create-interaction-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by yana on 25.03.18.
 */




var PatientCreateHeaderComponent = /** @class */ (function () {
    function PatientCreateHeaderComponent(location, patientCreateInteractionService) {
        this.location = location;
        this.patientCreateInteractionService = patientCreateInteractionService;
    }
    PatientCreateHeaderComponent.prototype.onSavePatientClick = function () {
        this.patientCreateInteractionService.savePatientClicked();
    };
    PatientCreateHeaderComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_Patient__["a" /* Patient */])
    ], PatientCreateHeaderComponent.prototype, "patient", void 0);
    PatientCreateHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-patient-create-header',
            template: __webpack_require__("./src/app/patients/components/patient-create-header/patient-create-header.component.html"),
            styles: [__webpack_require__("./src/app/patients/components/patient-create-header/patient-create-header.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["g" /* Location */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["g" /* Location */],
            __WEBPACK_IMPORTED_MODULE_3__component_interaction_service_patient_create_interaction_service__["a" /* PatientCreateInteractionService */]])
    ], PatientCreateHeaderComponent);
    return PatientCreateHeaderComponent;
}());



/***/ }),

/***/ "./src/app/patients/components/patient-create/patient-create.component.css":
/***/ (function(module, exports) {

module.exports = ".patient-details{\n  padding: 15px 15px 15px 15px;\n}\n\n.radio-inline{\n  margin-right: 15px;\n}\n\ninput, .btn{\n  border-color: black;\n  border-width: 2px;\n  border-radius: 0;\n}\n"

/***/ }),

/***/ "./src/app/patients/components/patient-create/patient-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <app-patient-create-header [patient]=\"patient\"></app-patient-create-header>\n\n  <section class=\"patient-details\">\n    <form novalidate [formGroup]=\"patientForm\" (ngSubmit)=\"onSubmit()\">\n      <fieldset>\n\n        <div class=\"row form-group\">\n          <strong class=\"col-2\">First Name:</strong>\n          <input type=\"text\" class=\"col-4 form-control form-control-sm\" formControlName=\"firstName\"\n                 aria-describedby=\"inputGroup-sizing-default\">\n        </div>\n\n        <div class=\"row form-group\">\n          <strong class=\"col-2\">Last Name:</strong>\n          <input type=\"text\" class=\"col-4 form-control form-control-sm\" formControlName=\"lastName\"\n                 aria-describedby=\"inputGroup-sizing-default\">\n        </div>\n\n        <div class=\"row form-group\">\n          <strong class=\"col-2\">Date of birth:</strong>\n          <input type=\"date\" class=\"col-4 form-control form-control-sm\" formControlName=\"birthDate\"\n                 aria-describedby=\"inputGroup-sizing-default\">\n        </div>\n\n        <div class=\"row form-group\">\n          <strong class=\"col-2\">Sex:</strong>\n\n          <div class=\"col-4\">\n\n            <label class=\"radio-inline\">\n              <input type=\"radio\" class=\"radio-btn\" name=\"sex\" formControlName=\"sex\" value=\"MALE\" checked>Male\n            </label>\n\n            <label class=\"radio-inline\">\n              <input type=\"radio\" class=\"radio-btn\" name=\"sex\" formControlName=\"sex\" value=\"FEMALE\">Female\n            </label>\n\n\n          </div>\n\n        </div>\n\n        <div class=\"row form-group\">\n          <strong class=\"col-2\">Country:</strong>\n          <input type=\"text\" class=\"col-4 form-control form-control-sm\" formControlName=\"country\"\n                 aria-describedby=\"inputGroup-sizing-default\">\n        </div>\n\n        <div class=\"row form-group\">\n          <strong class=\"col-2\">State:</strong>\n          <input type=\"text\" class=\"col-4 form-control form-control-sm\" formControlName=\"state\"\n                 aria-describedby=\"inputGroup-sizing-default\">\n        </div>\n\n        <div class=\"row form-group\">\n          <strong class=\"col-2\">Address:</strong>\n          <input type=\"text\" class=\"col-4 form-control form-control-sm\" formControlName=\"address\"\n                 aria-describedby=\"inputGroup-sizing-default\">\n        </div>\n\n      </fieldset>\n\n    </form>\n  </section>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/patients/components/patient-create/patient-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_patient_service__ = __webpack_require__("./src/app/patients/services/patient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_Patient__ = __webpack_require__("./src/app/patients/models/Patient.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_interaction_service_patient_create_interaction_service__ = __webpack_require__("./src/app/component-interaction-service/patient-create-interaction-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lifecycle_component__ = __webpack_require__("./src/app/lifecycle.component.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * Created by yana on 24.03.18.
 */








var PatientCreateComponent = /** @class */ (function (_super) {
    __extends(PatientCreateComponent, _super);
    function PatientCreateComponent(route, router, patientService, patientCreateInteractionService) {
        var _this = _super.call(this) || this;
        _this.route = route;
        _this.router = router;
        _this.patientService = patientService;
        _this.patientCreateInteractionService = patientCreateInteractionService;
        _this.subscribeOnControlActions();
        _this.patientForm = _this.buildFormGroup();
        return _this;
    }
    PatientCreateComponent.prototype.ngOnInit = function () {
        this.parseRoute();
    };
    PatientCreateComponent.prototype.parseRoute = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            var patientId = params['patientId'];
            if (patientId) {
                _this.edit = true;
                _this.loadPatientDetails(patientId);
            }
        });
    };
    PatientCreateComponent.prototype.subscribeOnControlActions = function () {
        var _this = this;
        this.patientCreateInteractionService.onSavePatientClicked$.subscribe(function () {
            _this.createAndSavePatient();
        });
    };
    PatientCreateComponent.prototype.buildFormGroup = function () {
        return new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            firstName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required),
            lastName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required),
            birthDate: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required),
            sex: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required),
            country: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required),
            state: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required),
            address: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required)
        });
    };
    PatientCreateComponent.prototype.loadPatientDetails = function (patientId) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.patientService.findById(patientId)];
                    case 1:
                        _a.patient = _b.sent();
                        this.patientForm.patchValue({
                            firstName: this.patient.firstName,
                            lastName: this.patient.lastName,
                            birthDate: this.formatDate(this.patient.birthDate),
                            sex: this.patient.sex,
                            country: this.patient.country,
                            state: this.patient.state,
                            address: this.patient.address
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PatientCreateComponent.prototype.createAndSavePatient = function () {
        if (this.patientForm.valid) {
            if (!this.patient) {
                this.patient = new __WEBPACK_IMPORTED_MODULE_5__models_Patient__["a" /* Patient */]();
            }
            this.patient.firstName = this.getInput('firstName');
            this.patient.lastName = this.getInput('lastName');
            this.patient.birthDate = this.getInput('birthDate');
            this.patient.sex = this.getInput('sex');
            this.patient.country = this.getInput('country');
            this.patient.state = this.getInput('state');
            this.patient.address = this.getInput('address');
            if (this.edit) {
                this.updatePatient(this.patient);
            }
            else {
                this.saveNewPatient(this.patient);
            }
        }
    };
    PatientCreateComponent.prototype.saveNewPatient = function (patient) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.patientService.savePatient(patient)];
                    case 1:
                        _a.patient = _b.sent();
                        this.router.navigate(["/patient/" + this.patient.id]);
                        return [2 /*return*/];
                }
            });
        });
    };
    PatientCreateComponent.prototype.updatePatient = function (patient) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.patientService.updatePatient(patient)];
                    case 1:
                        _a.patient = _b.sent();
                        this.redirectToPatientPage(this.patient.id);
                        return [2 /*return*/];
                }
            });
        });
    };
    PatientCreateComponent.prototype.getInput = function (inputName) {
        return this.patientForm.controls[inputName].value;
    };
    PatientCreateComponent.prototype.redirectToPatientPage = function (patientId) {
        this.router.navigate(["/patient/" + patientId]);
    };
    PatientCreateComponent.prototype.formatDate = function (date) {
        return new __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */](navigator.language)
            .transform(date, 'y-MM-dd');
    };
    PatientCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-patient-create',
            template: __webpack_require__("./src/app/patients/components/patient-create/patient-create.component.html"),
            styles: [__webpack_require__("./src/app/patients/components/patient-create/patient-create.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_6__component_interaction_service_patient_create_interaction_service__["a" /* PatientCreateInteractionService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_patient_service__["a" /* PatientService */],
            __WEBPACK_IMPORTED_MODULE_6__component_interaction_service_patient_create_interaction_service__["a" /* PatientCreateInteractionService */]])
    ], PatientCreateComponent);
    return PatientCreateComponent;
}(__WEBPACK_IMPORTED_MODULE_7__lifecycle_component__["a" /* LifecycleComponent */]));



/***/ }),

/***/ "./src/app/patients/components/patient-details-header/patient-details-header.component.css":
/***/ (function(module, exports) {

module.exports = ".sticky-top{\n  padding: 0 30px 0 15px;\n}\n\n.header{\n  padding: 20px 15px 35px 15px;\n  background-color: white;\n  border-bottom: 2px solid black;\n  height: 100%;\n}\n\n.btn{\n  margin-left:5%;\n}\n\nstrong{\n  font-weight: bolder;\n  font-size: x-large;\n}\n"

/***/ }),

/***/ "./src/app/patients/components/patient-details-header/patient-details-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-top\">\n\n  <div class=\"row align-items-center justify-content-between header\">\n\n\n    <strong class=\"col-4\">{{patient.firstName}} {{patient.lastName}}</strong>\n    <span class=\"col-4 align-self-center\">{{calculateAge(patient.birthDate)}} year(s) old</span>\n\n    <div class=\"row col-4 justify-content-end\">\n\n      <a class=\"col-4 btn btn-outline-dark\" role=\"button\" routerLink=\"/patient/edit/{{patient.id}}\">Edit</a>\n\n      <button class=\"col-4 btn btn-outline-dark\" type=\"button\" (click)=\"onDeletePatientClick(patient)\">Delete</button>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/patients/components/patient-details-header/patient-details-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientDetailsHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Patient__ = __webpack_require__("./src/app/patients/models/Patient.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_interaction_service_patient_detail_interaction_service__ = __webpack_require__("./src/app/component-interaction-service/patient-detail-interaction-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by yana on 24.03.18.
 */



var PatientDetailsHeader = /** @class */ (function () {
    function PatientDetailsHeader(patientDetailInteractionService) {
        this.patientDetailInteractionService = patientDetailInteractionService;
    }
    PatientDetailsHeader.prototype.calculateAge = function (birthDate) {
        var timeDiff = Math.abs(Date.now() - birthDate);
        return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    };
    PatientDetailsHeader.prototype.onDeletePatientClick = function (patient) {
        this.patientDetailInteractionService.deletePatientClicked(patient);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_Patient__["a" /* Patient */])
    ], PatientDetailsHeader.prototype, "patient", void 0);
    PatientDetailsHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-patient-details-header',
            template: __webpack_require__("./src/app/patients/components/patient-details-header/patient-details-header.component.html"),
            styles: [__webpack_require__("./src/app/patients/components/patient-details-header/patient-details-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__component_interaction_service_patient_detail_interaction_service__["a" /* PatientDetailInteractionService */]])
    ], PatientDetailsHeader);
    return PatientDetailsHeader;
}());



/***/ }),

/***/ "./src/app/patients/components/patient-details/patient-details.component.css":
/***/ (function(module, exports) {

module.exports = ".main-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 15px 30px 15px 30px;\n  height: 85%;\n}\n\n.header{\n  padding: 0 0 0 0;\n  height: 15%;\n}\n\n.patient-details{\n  -webkit-box-flex: 30%;\n      -ms-flex: 30%;\n          flex: 30%;\n  height: 100%;\n}\n\n.comments-block{\n  -webkit-box-flex: 70%;\n      -ms-flex: 70%;\n          flex: 70%;\n  height: 100%;\n}\n\n.patient-info{\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\nalert{\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n"

/***/ }),

/***/ "./src/app/patients/components/patient-details/patient-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"header\">\n  <app-patient-details-header [patient]=\"patient\"></app-patient-details-header>\n  </div>\n\n  <div class=\"row main-content\">\n\n    <div class=\"patient-details\">\n\n      <div class=\"row patient-info\">\n        <strong class=\"col\">Date of birth: </strong>\n        <div class=\"col\">{{patient.birthDate | date}}</div>\n      </div>\n\n      <div class=\"row patient-info\">\n        <strong class=\"col\">Sex: </strong>\n        <div class=\"col\" *ngIf=\"patient.sex=='MALE'; else female\">Male</div>\n\n        <ng-template #female>\n          <div class=\"col\">Female</div>\n        </ng-template>\n      </div>\n\n      <div class=\"row patient-info\">\n        <strong class=\"col\">Country:</strong>\n        <div class=\"col\">{{patient.country}}</div>\n      </div>\n\n      <div class=\"row patient-info\">\n        <strong class=\"col\">State:</strong>\n        <div class=\"col\">{{patient.state}}</div>\n      </div>\n\n      <div class=\"row patient-info\">\n        <strong class=\"col\">Address:</strong>\n        <div class=\"col\">{{patient.address}}</div>\n      </div>\n\n    </div>\n\n    <div class=\"comments-block\">\n      <app-comments-block></app-comments-block>\n\n      <alert></alert>\n\n    </div>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/patients/components/patient-details/patient-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_patient_service__ = __webpack_require__("./src/app/patients/services/patient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("./src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_interaction_service_patient_detail_interaction_service__ = __webpack_require__("./src/app/component-interaction-service/patient-detail-interaction-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_Patient__ = __webpack_require__("./src/app/patients/models/Patient.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lifecycle_component__ = __webpack_require__("./src/app/lifecycle.component.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * Created by yana on 24.03.18.
 */







var PatientDetailsComponent = /** @class */ (function (_super) {
    __extends(PatientDetailsComponent, _super);
    function PatientDetailsComponent(route, patientService, alertService, patientDetailInteractionService) {
        var _this = _super.call(this) || this;
        _this.route = route;
        _this.patientService = patientService;
        _this.alertService = alertService;
        _this.patientDetailInteractionService = patientDetailInteractionService;
        _this.patient = new __WEBPACK_IMPORTED_MODULE_5__models_Patient__["a" /* Patient */]();
        _this.deletePatientEventSubscription =
            patientDetailInteractionService.onDeletePatientClicked$.subscribe(function (patient) {
                _this.deletePatient(patient);
            });
        return _this;
    }
    PatientDetailsComponent.prototype.ngOnInit = function () {
        this.subscribeOnUrlChanges();
    };
    PatientDetailsComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.deletePatientEventSubscription.unsubscribe();
    };
    PatientDetailsComponent.prototype.subscribeOnUrlChanges = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.loadPatientDetails(params['patientId']);
        });
    };
    PatientDetailsComponent.prototype.loadPatientDetails = function (patientId) {
        return __awaiter(this, void 0, void 0, function () {
            var p;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.patientService.findById(patientId)];
                    case 1:
                        p = _a.sent();
                        if (p) {
                            this.patient = p;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PatientDetailsComponent.prototype.deletePatient = function (patient) {
        if (patient) {
            this.patientService.deletePatient(patient);
            this.alertService.showAlertMessage("Patient deleted successfully.");
        }
    };
    PatientDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-patient-details',
            template: __webpack_require__("./src/app/patients/components/patient-details/patient-details.component.html"),
            styles: [__webpack_require__("./src/app/patients/components/patient-details/patient-details.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_4__component_interaction_service_patient_detail_interaction_service__["a" /* PatientDetailInteractionService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__services_patient_service__["a" /* PatientService */],
            __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_4__component_interaction_service_patient_detail_interaction_service__["a" /* PatientDetailInteractionService */]])
    ], PatientDetailsComponent);
    return PatientDetailsComponent;
}(__WEBPACK_IMPORTED_MODULE_6__lifecycle_component__["a" /* LifecycleComponent */]));



/***/ }),

/***/ "./src/app/patients/components/patient-list-item/patient-list-item.component.css":
/***/ (function(module, exports) {

module.exports = ".patient-list-item{\n  padding: 10px 0px 10px 0px;\n  border-bottom: solid;\n  border-width: thin;\n  border-bottom-color: #616161;\n}\n\n.patient-list-item:hover {\n  background-color: rgba(114, 114, 114, 0.51);\n}\n\n.patient-list-item:active {\n  background-color: rgba(187, 180, 180, 0.5);\n}\n\n#patient-name{\n  font-size: larger;\n  font-weight: bolder;\n  color: black;\n}\n\nsmall{\n  color: #848484;\n\n}\n\nimg{\n  width: 24px;\n  height: 24px;\n}\n"

/***/ }),

/***/ "./src/app/patients/components/patient-list-item/patient-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-items-center patient-list-item\" (click)=\"openPatientDetails(patient)\">\n\n  <div class=\"col-8\">\n    <div id=\"patient-name\">{{patient.firstName}} {{patient.lastName}}</div>\n    <div>\n      <small>{{patient.birthDate | date}}</small>\n    </div>\n\n  </div>\n\n  <div class=\"col-4\">\n    <div *ngIf=\"patient.sex=='MALE'; else female\">\n      <img src=\"assets/images/gender-male.png\" align=\"right\" alt={{patient.sex}}>\n    </div>\n\n    <ng-template #female>\n      <img src=\"assets/images/gender-female.png\" align=\"right\" alt={{patient.sex}}>\n    </ng-template>\n  </div>\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/patients/components/patient-list-item/patient-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Patient__ = __webpack_require__("./src/app/patients/models/Patient.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by yana on 26.03.18.
 */



var PatientListItemComponent = /** @class */ (function () {
    function PatientListItemComponent(router) {
        this.router = router;
    }
    PatientListItemComponent.prototype.openPatientDetails = function (patient) {
        this.router.navigate(["/patient/" + patient.id]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('patient'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_Patient__["a" /* Patient */])
    ], PatientListItemComponent.prototype, "patient", void 0);
    PatientListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-patient-list-item',
            template: __webpack_require__("./src/app/patients/components/patient-list-item/patient-list-item.component.html"),
            styles: [__webpack_require__("./src/app/patients/components/patient-list-item/patient-list-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], PatientListItemComponent);
    return PatientListItemComponent;
}());



/***/ }),

/***/ "./src/app/patients/components/patient-list/patient-list.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n\n.row {\n  background-color: white;\n  padding: 15px 0 15px 0;\n  border-bottom: 2px solid black;\n  height: 100%;\n}\n\n.btn {\n  margin-left: auto;\n}\n\n.patients-list-block{\n  height: 85%;\n  padding: 15px 15px 0 15px;\n  overflow-y: auto;\n}\n\ninput {\n  border-color: black;\n  border-width: 2px;\n  border-radius: 0;\n}\n"

/***/ }),

/***/ "./src/app/patients/components/patient-list/patient-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"header sticky-top\">\n\n    <div class=\"row align-items-center\">\n\n      <input type=\"text\" class=\"col-7 form-control\" [(ngModel)]=\"searchPatientText\"\n             placeholder=\"Search\" aria-describedby=\"inputGroup-sizing-default\">\n\n      <a class=\"col-4 btn btn-outline-dark\" routerLink=\"/patient/create\" role=\"button\">Add patient</a>\n    </div>\n  </div>\n\n  <div class=\"patients-list-block\">\n    <app-patient-list-item *ngFor=\"let patient of patients | filter : searchPatientText\" [patient]=\"patient\">\n    </app-patient-list-item>\n\n    <small *ngIf=\"patients.length==0\">No patients</small>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/patients/components/patient-list/patient-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_patient_service__ = __webpack_require__("./src/app/patients/services/patient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lifecycle_component__ = __webpack_require__("./src/app/lifecycle.component.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PatientListComponent = /** @class */ (function (_super) {
    __extends(PatientListComponent, _super);
    function PatientListComponent(router, patientService) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.patientService = patientService;
        return _this;
    }
    PatientListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.patientService.behaviorSubject
            .subscribe(function (patients) { return _this.updatePatientsList(patients); });
        this.patientService.findAll();
    };
    PatientListComponent.prototype.updatePatientsList = function (patients) {
        var _this = this;
        this.patients = patients;
        this.patients = this.patients.sort(function (a, b) { return _this.comparePatients(a, b); });
        //I was trying to sort list with OrderByPipe,
        //but need to sort by first and last names,
        //and OrderByPipe didn't work as I expect in this case..
        //One more thing, I need to open details of first user in the list,
        //I suppose, OrderByPipe with work only with UI list representation,
        //so I need sorted list there..
        this.openPatientDetailsIfNeeded();
    };
    PatientListComponent.prototype.openPatientDetailsIfNeeded = function () {
        var patientId = this.getCurrentPatientId();
        var exist = false;
        if (patientId) {
            exist = this.exist(this.patients, patientId);
        }
        if (patientId < 0 && this.patients.length > 0) {
            this.openPatientDetails(this.patients[0]);
        }
        else if (patientId >= 0 && !exist) {
            if (this.patients.length > 0) {
                this.openPatientDetails(this.patients[0]);
            }
            else {
                this.router.navigate(['']);
            }
        }
    };
    PatientListComponent.prototype.openPatientDetails = function (patient) {
        this.router.navigate(["/patient/" + patient.id]);
    };
    PatientListComponent.prototype.comparePatients = function (patient1, patient2) {
        var compareRes = patient1.firstName.localeCompare(patient2.firstName);
        if (compareRes != 0) {
            return compareRes;
        }
        else {
            return patient1.lastName.localeCompare(patient2.lastName);
        }
    };
    PatientListComponent.prototype.getCurrentPatientId = function () {
        var segments = this.parseUrlSegments(this.router.url);
        if (segments) {
            return segments[segments.length - 1];
        }
        else {
            return -1;
        }
    };
    PatientListComponent.prototype.parseUrlSegments = function (url) {
        var urlTree = this.router.parseUrl(url);
        var urlSegmentGroup = urlTree.root.children[__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* PRIMARY_OUTLET */]];
        if (urlSegmentGroup) {
            return urlSegmentGroup.segments;
        }
    };
    PatientListComponent.prototype.exist = function (patients, patientId) {
        var exist = false;
        patients.some(function (patient) {
            exist = patient.id == patientId;
            return exist;
        });
        return exist;
    };
    PatientListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-patient-list',
            template: __webpack_require__("./src/app/patients/components/patient-list/patient-list.component.html"),
            styles: [__webpack_require__("./src/app/patients/components/patient-list/patient-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_patient_service__["a" /* PatientService */]])
    ], PatientListComponent);
    return PatientListComponent;
}(__WEBPACK_IMPORTED_MODULE_3__lifecycle_component__["a" /* LifecycleComponent */]));



/***/ }),

/***/ "./src/app/patients/models/Patient.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Patient; });
/**
 * Created by yana on 22.03.18.
 */
var Patient = /** @class */ (function () {
    function Patient() {
    }
    return Patient;
}());



/***/ }),

/***/ "./src/app/patients/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by yana on 27.03.18.
 */

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return (it.firstName + " " + it.lastName).toLowerCase().includes(searchText);
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/patients/services/patient.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_base_service__ = __webpack_require__("./src/app/services/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__patients_behavior_subject__ = __webpack_require__("./src/app/patients/services/patients.behavior.subject.ts");
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var PatientService = /** @class */ (function (_super) {
    __extends(PatientService, _super);
    function PatientService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.behaviorSubject = new __WEBPACK_IMPORTED_MODULE_5__patients_behavior_subject__["a" /* PatientsBehaviorSubject */]();
        return _this;
    }
    PatientService.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var currentPatientList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.apiUrl)
                            .toPromise()
                            .catch(function (error) { return _this.handleError(error); })];
                    case 1:
                        currentPatientList = _a.sent();
                        this.behaviorSubject.notifySubjectChanged(currentPatientList);
                        return [2 /*return*/];
                }
            });
        });
    };
    PatientService.prototype.findById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.apiUrl + "/" + id)
                            .toPromise()
                            .catch(function (error) { return _this.handleError(error); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PatientService.prototype.savePatient = function (patient) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.post(this.apiUrl, patient)
                            .toPromise()
                            .catch(function (error) { return _this.handleError(error); })];
                    case 1:
                        res = _a.sent();
                        this.behaviorSubject.add(res);
                        return [2 /*return*/, res];
                }
            });
        });
    };
    PatientService.prototype.deletePatient = function (patient) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.delete(this.apiUrl + "/" + patient.id)
                            .toPromise()
                            .then(function () {
                            _this.behaviorSubject.remove(patient);
                        })
                            .catch(function (error) { return _this.handleError(error); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PatientService.prototype.updatePatient = function (patient) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.put(this.apiUrl, patient)
                            .toPromise()
                            .catch(function (error) { return _this.handleError(error); })];
                    case 1:
                        res = _a.sent();
                        this.behaviorSubject.replace(patient);
                        return [2 /*return*/, res];
                }
            });
        });
    };
    PatientService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], PatientService);
    return PatientService;
}(__WEBPACK_IMPORTED_MODULE_4__services_base_service__["a" /* BaseService */]));



/***/ }),

/***/ "./src/app/patients/services/patients.behavior.subject.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientsBehaviorSubject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_behavior_subject__ = __webpack_require__("./src/app/base.behavior.subject.ts");
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

var PatientsBehaviorSubject = /** @class */ (function (_super) {
    __extends(PatientsBehaviorSubject, _super);
    function PatientsBehaviorSubject() {
        return _super.call(this) || this;
    }
    PatientsBehaviorSubject.prototype.equal = function (patient1, patient2) {
        return patient1.id == patient2.id;
    };
    return PatientsBehaviorSubject;
}(__WEBPACK_IMPORTED_MODULE_0__base_behavior_subject__["a" /* BaseBehaviorSubject */]));



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by yana on 28.03.18.
 */



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.showAlertMessage = function (message) {
        this.alert(message);
    };
    AlertService.prototype.alert = function (message) {
        this.subject.next(message);
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/**
 * Created by yana on 27.03.18.
 */
var BaseService = /** @class */ (function () {
    function BaseService() {
        this.apiUrl = 'https://medical-base.herokuapp.com/api/v1/patients/';
    }
    BaseService.prototype.handleError = function (error) {
        console.log(error);
        return null;
    };
    return BaseService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map