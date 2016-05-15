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
var http_1 = require('@angular/http');
var card_1 = require('@angular2-material/card');
var router_1 = require('@angular/router');
var _path_graph_1 = require('../+path-graph');
var PathsComponent = (function () {
    function PathsComponent(http) {
        this.http = http;
    }
    PathsComponent.prototype.ngOnInit = function () {
        this.getlink();
    };
    PathsComponent.prototype.getlink = function () {
        var _this = this;
        return this.http.get("https://www.reddit.com/.json")
            .map(function (res) { return res.json(); })
            .subscribe(function (res) { _this.link = res; });
    };
    PathsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-paths',
            templateUrl: 'paths.component.html',
            styleUrls: ['paths.component.css'],
            directives: [card_1.MD_CARD_DIRECTIVES, router_1.ROUTER_DIRECTIVES, _path_graph_1.PathGraphComponent],
            providers: [router_1.ROUTER_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PathsComponent);
    return PathsComponent;
}());
exports.PathsComponent = PathsComponent;
//# sourceMappingURL=paths.component.js.map