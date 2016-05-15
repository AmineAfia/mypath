"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var toolbar_1 = require('@angular2-material/toolbar');
var button_1 = require('@angular2-material/button');
var sidenav_1 = require('@angular2-material/sidenav');
var list_1 = require('@angular2-material/list');
var card_1 = require('@angular2-material/card');
var input_1 = require('@angular2-material/input');
var checkbox_1 = require('@angular2-material/checkbox');
var radio_1 = require('@angular2-material/radio');
var icon_1 = require('@angular2-material/icon');
var _paths_1 = require('./+paths');
var _about_1 = require('./+about');
var _path_graph_1 = require('./+path-graph');
var Angularattack2016MypathAppComponent = (function () {
    function Angularattack2016MypathAppComponent() {
    }
    Angularattack2016MypathAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'angularattack2016-mypath-app',
            templateUrl: 'angularattack2016-mypath.component.html',
            styleUrls: ['angularattack2016-mypath.component.css'],
            directives: [
                sidenav_1.MD_SIDENAV_DIRECTIVES,
                list_1.MD_LIST_DIRECTIVES,
                card_1.MD_CARD_DIRECTIVES,
                toolbar_1.MdToolbar,
                button_1.MdButton,
                input_1.MdInput,
                checkbox_1.MdCheckbox,
                radio_1.MdRadioGroup,
                radio_1.MdRadioButton,
                icon_1.MdIcon,
                router_1.ROUTER_DIRECTIVES
            ],
            providers: [icon_1.MdIconRegistry, radio_1.MdRadioDispatcher, router_1.ROUTER_PROVIDERS],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        router_1.Routes([
            { path: '/paths', component: _paths_1.PathsComponent },
            { path: '/about', component: _about_1.AboutComponent },
            { path: '/path-graph', component: _path_graph_1.PathGraphComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], Angularattack2016MypathAppComponent);
    return Angularattack2016MypathAppComponent;
}());
exports.Angularattack2016MypathAppComponent = Angularattack2016MypathAppComponent;
//# sourceMappingURL=angularattack2016-mypath.component.js.map