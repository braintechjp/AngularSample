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
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.key = 'username';
        this.reverse = false;
        this.pagSize = 5;
        this.ShowDetails = false;
        this.CountryName = "";
        this.p = 1;
        this.Name = "";
        this.Gender = "";
        this.templist = [{ gender: 1, name: "Kumar Arpit", userid: 1, username: "Kumar_Arpit" }];
        this.userListArray = [{ gender: 1, name: "Kumar Arpit", userid: 1, username: "Kumar_Arpit" }, { gender: 2, name: "Shanu Tripathi", userid: 2, username: "Shanu_Tripathi" }, { gender: 2, name: "Nidhi Nagar", userid: 3, username: "Nidhi_Nagar" }];
        this.isListReady = true;
        this.showIcon = false;
        this.ShowMsg = false;
    }
    AppComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    AppComponent.prototype.ChooseMe = function (id) {
        this.templist = this.userListArray.filter(function (data) { return data.userid == id; });
        this.ShowDetails = true;
        this.ShowMsg = false;
    };
    AppComponent.prototype.RemoveMe = function (id) {
        this.userListArray = this.userListArray.filter(function (data) { return data.userid != id; });
        this.ShowDetails = false;
        this.ShowMsg = true;
        //this.ShowDetails = true;				 
    };
    AppComponent.prototype.ToggleFilterSection = function () {
        this.isListReady = !this.isListReady;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html'
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map