(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-bar/app-bar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-bar/app-bar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <mat-toolbar class=\"mat-elevation-z2\">REACH</mat-toolbar>\n</header>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-app-bar *ngIf=\"_router.url != '/login'\"></app-app-bar>\n<div id=\"content\">\n  <app-home *ngIf=\"_router.url != '/login'\"></app-home>\n  <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard-team-members/dashboard-team-members.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard-team-members/dashboard-team-members.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>{{team.name}}</h3>\n\n<mat-card *ngFor=\"let member of team.crew\">\n  <div>\n    <img id=\"image\" src={{member.image}}>\n  </div>\n  <div id=\"nameIcons\">\n    <h4>{{member.lName}}, {{member.fName}}</h4>\n    <br>\n    <mat-icon>signal_wifi_4_bar</mat-icon>\n    <mat-icon>battery_full</mat-icon>\n    <span>{{member.battery}}%</span>\n    <br>\n    <mat-icon>timer</mat-icon>\n    <span class=\"time\">{{member.time1}}</span>\n    <span class=\"time\">{{member.time2}}</span>\n  </div>\n  <mat-icon *ngIf=\"member.inDanger\" style=\"color: #B00020;\">warning</mat-icon>\n  <div id=\"stats\">\n    <mat-table [dataSource]=\"memberStats\">\n        <ng-container matColumnDef=\"hr\">\n          <mat-header-cell *matHeaderCellDef> HR </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.hr}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"bp\">\n          <mat-header-cell *matHeaderCellDef> BP </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.bp}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"heatIndex\">\n          <mat-header-cell *matHeaderCellDef> HI </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.heatIndex}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"spO2\">\n          <mat-header-cell *matHeaderCellDef> SpO2 </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.spO2}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"resp\">\n          <mat-header-cell *matHeaderCellDef> Resp </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.resp}} </mat-cell>\n        </ng-container>\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n  </div>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard-teams/dashboard-teams.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard-teams/dashboard-teams.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div>\n    <mat-chip-list>\n      <mat-chip class=\"chipClass\" *ngFor=\"let element of elements; let index = index\" [selectable]=\"true\"\n        [selected]=\"index === 0\" (click)=\"chip.select(); getSelectedChip(element)\" #chip=\"matChip\" value=element.value>\n        {{element.state}}\n      </mat-chip>\n    </mat-chip-list>\n  </div>\n  <mat-card style=\"margin-top: 12px;\" *ngFor=\"let member of members; let index = index\" (click)=\"onSelect(member)\" [style.background-color]=\"member===selectedTeam ? 'rgba(98, 0, 238, 0.12)' : ''\">\n    <mat-card-header>\n      <h4>{{member.name}}</h4>\n    </mat-card-header>\n    <mat-card-content>\n      <div id=\"members\">\n        <mat-grid-list [cols]=\"breakpoint\" (window:resize)=\"onResize($event)\" rowHeight=\"1.5:1\">\n          <mat-grid-tile *ngFor=\"let crew of member.crew\" id=\"tile\">\n            <div style=\"width: 85px; height: 85px;\">\n              <mat-icon>person</mat-icon>\n              <mat-icon *ngIf=\"crew.inDanger\" style=\"color: #B00020;\">warning</mat-icon>\n              <mat-checkbox color=\"primary\"></mat-checkbox>\n              <p id=\"name\">{{crew.lName}}, {{crew.fName}}</p>\n            </div>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </div>\n    </mat-card-content>\n  </mat-card>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"content\">\n  <div id=\"members\">\n    <app-dashboard-team-members></app-dashboard-team-members>\n  </div>\n  <mat-divider [vertical]=\"true\"></mat-divider>\n  <div id=\"team\">\n    <app-dashboard-teams></app-dashboard-teams>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/device-assignment/device-assignment.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/device-assignment/device-assignment.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Device Assignment</h3>\n\n<div>\n  <mat-chip-list>\n    <mat-chip class=\"chipClass\" *ngFor=\"let element of elements; let index = index\" [selectable]=\"true\"\n      [selected]=\"index === 0\" (click)=\"chip.select(); getSelectedChip(element)\" #chip=\"matChip\" value=element.value>\n      {{element.state}}\n    </mat-chip>\n  </mat-chip-list>\n</div>\n\n<div class=\"mat-elevation-z8\" id=\"table\">\n\n  <mat-form-field>\n    <mat-label>Filter</mat-label>\n    <input matInput (keyup)=\"applyFilter($event)\">\n    <mat-icon matSuffix>search</mat-icon>\n  </mat-form-field>\n\n  <table mat-table matSort [dataSource]=\"deviceAssignmentData\">\n\n    <ng-container matColumnDef=\"ImageUrl\">\n      <th mat-header-cell *matHeaderCellDef>Photo</th>\n      <td mat-cell *matCellDef=\"let row\">\n        <img height=\"120px\" width=\"160px\" src=\"{{row.ImageUrl}}\">\n        <!-- {{row.ImageUrl}} -->\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"FirstName\">\n      <th mat-header-cell *matHeaderCellDef>First name</th>\n      <td mat-cell *matCellDef=\"let row\">\n        {{row.FirstName}}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"LastName\">\n      <th mat-header-cell *matHeaderCellDef>Last name</th>\n      <td mat-cell *matCellDef=\"let row\">\n        {{row.LastName}}\n      </td>\n    </ng-container>\n\n    <!-- <ng-container matColumnDef=\"AssignedDeviceID\">\n      <th mat-header-cell *matHeaderCellDef>Assigned device ID</th>\n      <td mat-cell *matCellDef=\"let row\">\n        {{row.AssignedDeviceID}}\n      </td>\n    </ng-container> -->\n\n    <ng-container matColumnDef=\"AssignedDeviceID\">\n      <th mat-header-cell *matHeaderCellDef>Assigned device ID</th>\n      <td mat-cell *matCellDef=\"let row\">\n        <form [formGroup]=\"deviceForm\">\n          <!-- <mat-form-field deviceFormEditGroup>\n            <mat-select [(value)]=\"selectedDevice\" formControlName=\"AssignedDeviceID\">\n              <mat-option *ngFor=\"let device of devices\" [value]=\"device.value\"\n                (click)=\"onChangeDevice(device.viewValue)\">\n                {{device.viewValue}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field> -->\n          <mat-form-field>\n            <mat-select [(value)]=\"selectedDevice\" formControlName=\"AssignedDeviceID\">\n              <mat-option *ngFor=\"let device of devices\" [value]=\"device.value\" (click)=\"onChangeDevice(device.viewValue)\">\n                {{device.viewValue}}\n              </mat-option> \n            </mat-select>\n          </mat-form-field>\n        </form>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Description\">\n      <th mat-header-cell *matHeaderCellDef>Device description</th>\n      <td mat-cell *matCellDef=\"let row\">\n        {{row.Description}}\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/devices/devices-add/devices-add.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/devices/devices-add/devices-add.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n  <span class=\"fill-remaining-space\"></span>\n  <span class=\"header\" *ngIf=\"action=='New'\">New Device</span>\n  <span class=\"header\" *ngIf=\"action=='Edit'\">Update Device</span>\n  <span class=\"fill-remaining-space\"></span>\n</mat-toolbar>\n<form [formGroup]=\"devicesFormGroup\" class=\"normal-form\">\n  <large *ngFor=\"let error of serverErrors\" class=\"error-message\">\n    {{error}}\n  </large>\n\n  <mat-grid-list cols=\"2\" rowHeight=\"300px\">\n    <mat-grid-tile class=\"mat-grid-tile\">\n      <div class=\"controls-container\">\n        <mat-form-field devicesFormGroup class=\"common-mat-input\" id=\"DeviceID\">\n          <mat-label>Device ID*</mat-label>\n          <input matInput placeholder=\"Enter Device ID*\" formControlName=\"DeviceID\" ng-ip-address>\n          <mat-error *ngIf=\"devicesFormGroup.controls['DeviceID'].errors?.required\">This field is mandatory.</mat-error>\n          <mat-error *ngIf=\"devicesFormGroup.controls['DeviceID'].errors?.fieldError\">{{devicesFormGroup.controls['DeviceID'].errors?.fieldError}}</mat-error>\n        </mat-form-field>\n        <mat-form-field devicesFormGroup class=\"common-mat-input\" id=\"IP\">\n          <mat-label>Device IP*</mat-label>\n          <input matInput placeholder=\"Enter Device IP*\" formControlName=\"IP\">\n          <mat-error *ngIf=\"devicesFormGroup.controls['IP'].errors?.required\">This field is mandatory.</mat-error>\n          <mat-error *ngIf=\"devicesFormGroup.controls['IP'].errors?.fieldError\">{{devicesFormGroup.controls['IP'].errors?.fieldError}}</mat-error>\n        </mat-form-field>\n        <mat-form-field devicesFormGroup class=\"common-mat-input\" id=\"Description\">\n          <mat-label>Device description*</mat-label>\n          <input matInput placeholder=\"Enter Device description*\" formControlName=\"Description\">\n          <mat-error *ngIf=\"devicesFormGroup.controls['Description'].errors?.required\">This field is mandatory.</mat-error>\n          <mat-error *ngIf=\"devicesFormGroup.controls['Description'].errors?.fieldError\">{{devicesFormGroup.controls['Description'].errors?.fieldError}}</mat-error>\n        </mat-form-field>\n      </div>\n    </mat-grid-tile>\n    <mat-grid-tile class=\"mat-grid-tile\">\n      <div class=\"controls-container\">\n\n        <mat-form-field devicesFormGroup class=\"common-mat-input\" id=\"Person\">\n          <mat-label>Assign To</mat-label>\n            <mat-select placeholder=\"Choose person\" [(value)]=\"selectedPerson\" formControlName=\"PersonID\">\n              <mat-option  [value]=\"null\" >\n                -None-\n              </mat-option>\n              <mat-option *ngFor=\"let person of persons\" [value]=\"person.value\" >\n                {{person.viewValue}}\n              </mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"devicesFormGroup.controls['PersonID'].errors?.fieldError\">{{devicesFormGroup.controls['PersonID'].errors?.fieldError}}</mat-error>\n        </mat-form-field>\n\n        <mat-form-field devicesFormGroup class=\"common-mat-input\" id=\"Type\">\n          <mat-label>Device type*</mat-label>\n            <mat-select placeholder=\"Choose type*\" [(value)]=\"selectedType\" formControlName=\"Type\">\n              <mat-option *ngFor=\"let type of Types\" [value]=\"type.value\">\n                {{type.viewValue}}\n              </mat-option>\n            </mat-select>\n          <mat-error *ngIf=\"devicesFormGroup.controls['Type'].errors?.required\">This field is mandatory.</mat-error>\n          <mat-error *ngIf=\"devicesFormGroup.controls['Type'].errors?.fieldError\">{{devicesFormGroup.controls['Type'].errors?.fieldError}}</mat-error>\n        </mat-form-field>\n\n        <mat-form-field devicesFormGroup class=\"common-mat-input\" id=\"Status\">\n          <mat-label>Device Status*</mat-label>\n          <mat-select placeholder=\"Unassigned\" [(value)]=\"selectedStauts\" formControlName=\"Status\">\n            <mat-option *ngFor=\"let Status of STATUS_CHOICES\" [value]=\"Status.value\">\n              {{Status.viewValue}}\n            </mat-option>\n          </mat-select>\n          <mat-error *ngIf=\"devicesFormGroup.controls['Status'].errors?.required\">This field is mandatory.</mat-error>\n          <mat-error *ngIf=\"devicesFormGroup.controls['Status'].errors?.fieldError\">{{devicesFormGroup.controls['Status'].errors?.fieldError}}</mat-error>\n        </mat-form-field>\n      <div class=\"button-row\">\n          <button mat-raised-button color=\"primary\" (click)=\"saveDevice(devicesFormGroup.value)\">Submit</button>\n          <button mat-stroked-button color=\"Basic\" (click)=\"cancelDevice()\">Cancel</button>\n        </div>\n      </div>\n    </mat-grid-tile>\n    </mat-grid-list>\n\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/devices/devices.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/devices/devices.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Devices</h3>\n\n<button mat-icon-button>\n  <mat-icon class=\"addIcons\" style=\"color: green;\" (click)=\"addDevice()\">add</mat-icon>\n</button>\n<div class=\"mat-elevation-z8\">\n\n  <table mat-table matSort style=\"width: 100%;\" [dataSource]=\"dataSource\" multiTemplateDataRows>\n\n    <ng-container matColumnDef=\"DeviceID\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Device ID</th>\n      <td mat-cell *matCellDef=\"let element\">\n         {{element.DeviceID}}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"IP\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Device IP</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{element.IP}}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Description\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Device Description</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{element.Description}}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Type\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Device Type</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{element.Type}}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Person\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Assigned To </th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{element.Person}}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Status\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Device Status</th>\n      <td mat-cell *matCellDef=\"let element\">\n        {{element.Status}}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Actions\">\n      <th mat-header-cell *matHeaderCellDef>Actions</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button>\n          <mat-icon (click)=\"updateDevice(element)\" style=\"color: green;\">edit</mat-icon>\n        </button>\n\n        <button mat-icon-button>\n            <mat-icon (click)=\"deleteDevice(element)\" style=\"color: red;\">delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n\n  <mat-card-content style=\"margin-top: 1rem\">\n        <p style=\"font-size: 1.2rem\">\n          {{data.message}}\n        </p>\n    <div mat-dialog-actions>\n      <button mat-stroked-button color=\"Basic\" id=\"u_dialog\" (click)=\"onOk()\" cdkFocusInitial>Remove</button>\n      <button mat-raised-button color=\"Primary\" id=\"u_dialog\" (click)=\"onCancel()\" cdkFocusInitial>Cancel</button>\n    </div>\n\n</mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <mat-drawer-container class=\"navigation-rail-page\" autosize>\n    <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\" opened>\n      <button routerLink=\"/dashboard\" mat-icon-button class=\"nav-button\"\n        [ngClass]=\"{ selected: selected === 'Dashboard' }\" (click)=\"setSelected('Dashboard')\">\n        <mat-icon class=\"nav-icon\">dashboard</mat-icon>\n        <div class=\"nav-button-text\">Dashboard</div>\n      </button>\n      <button routerLink=\"/people\" mat-icon-button class=\"nav-button\" [ngClass]=\"{ selected: selected === 'People' }\"\n        (click)=\"setSelected('People')\">\n        <mat-icon class=\"nav-icon\">person</mat-icon>\n        <div class=\"nav-button-text\">People</div>\n      </button>\n      <button routerLink=\"/teams\" mat-icon-button class=\"nav-button\" [ngClass]=\"{ selected: selected === 'Teams' }\"\n        (click)=\"setSelected('Teams')\">\n        <mat-icon class=\"nav-icon\">group</mat-icon>\n        <div class=\"nav-button-text\">Teams</div>\n      </button>\n      <button routerLink=\"/devices\" mat-icon-button class=\"nav-button\" [ngClass]=\"{ selected: selected === 'Devices' }\"\n        (click)=\"setSelected('Devices')\">\n        <mat-icon class=\"nav-icon\">phonelink</mat-icon>\n        <div class=\"nav-button-text\">Devices</div>\n      </button>\n      <!-- <button routerLink=\"/device-assignment\" mat-icon-button class=\"nav-button\"\n        [ngClass]=\"{ selected: selected === 'Device Assignment' }\" (click)=\"setSelected('Device Assignment')\">\n        <mat-icon class=\"nav-icon\">how_to_reg</mat-icon>\n        <div class=\"nav-button-text\">\n          Device\n          <br>\n          Assignment\n        </div>\n      </button> -->\n      <button routerLink=\"/thresholds\" mat-icon-button class=\"nav-button\"\n        [ngClass]=\"{ selected: selected === 'Thresholds' }\" (click)=\"setSelected('Thresholds')\">\n        <mat-icon class=\"nav-icon\" id=\"thresholds\">vertical_align_center</mat-icon>\n        <div class=\"nav-button-text\">Thresholds</div>\n      </button>\n    </mat-drawer>\n    <div class=\"example-sidenav-content\">\n    </div>\n  </mat-drawer-container>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"login-form\" [formGroup]=\"loginFormGroup\" >\n  <div class=\"loginContainer\">\n    <mat-card>\n      <mat-card-header>\n          <mat-card-title>Login</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <div class=\"login-field-wrapper\">\n          <mat-form-field class=\"login-form-field\">\n           \n\n              <input matInput placeholder=\"User Name\"  id=\"username\" formControlName=\"userName\">\n                <mat-error *ngIf=\" loginFormGroup.controls.userName.touched && loginFormGroup.controls.userName.errors\">\n                  UserName is required\n                </mat-error>\n            \n          </mat-form-field>\n        </div>\n        <div class=\"login-field-wrapper\">\n          <mat-form-field class=\"login-form-field\">\n            <input matInput placeholder=\"Password\" id=\"password\"  [type]=\"hide ? 'password' : 'text'\"  formControlName=\"password\" required>\n            <mat-error *ngIf=\"loginFormGroup.controls.password.touched && loginFormGroup.controls.password.errors && loginFormGroup.controls.password.errors.required\">\n              Password is required\n            </mat-error>\n            <!-- <mat-error *ngIf=\"loginFormGroup.controls.password.touched && loginFormGroup.controls.password.errors\">\n              Invalid Password format\n            </mat-error> -->\n        </mat-form-field>\n        </div>\n        <div class=\"loginButton-Error\"> \n          <button class= \"login-button\" mat-raised-button color=\"primary\" type=\"submit\" [disabled]='loginFormGroup.invalid' id=\"signin\" (click)=\"Login()\">Login</button>\n\n          <mat-error class= \"login-button\" *ngIf=\"loginError\">\n              Authentication failed\n          </mat-error>\n          \n        </div>\n        \n          \n        \n\n          \n          \n      </mat-card-content>\n  </mat-card> \n  </div>   \n\n  </form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/people/people-add/people-add.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/people/people-add/people-add.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n  <span class=\"fill-remaining-space\"></span>\n  <span class=\"header\" *ngIf=\"action=='New'\">New Person</span>\n  <span class=\"header\" *ngIf=\"action=='Edit'\">Update Person</span>\n  <span class=\"fill-remaining-space\"></span>\n</mat-toolbar>\n<form [formGroup]=\"peopleFormGroup\" class=\"normal-form\">\n  <large *ngFor=\"let error of serverErrors\" class=\"error-message\">\n    {{error}}\n  </large>\n\n  <mat-grid-list cols=\"2\" rowHeight=\"400px\">\n    <mat-grid-tile class=\"mat-grid-tile\">\n      <div class=\"controls-container\">\n\n          <!-- <h4>Upload Image for Person</h4>\n          <label>\n            Image:\n            <matinput type=\"file\" (change)=\"onImageChanged($evnet)\")>\n          </label>\n          <button (click=\"newimage()\" )>Upload</button> -->\n\n        <mat-form-field appearance=\"standard\" peopleFormGroup class=\"common-mat-input\" id=\"ImageUrl\">\n          <mat-label>Upload Person Image</mat-label>\n          <ngx-mat-file-input formControlName=\"ImageUrl\" placeholder=\"Upload Image\" (change)=\"onImagesChanged($event)\" ></ngx-mat-file-input>\n          <mat-icon matSuffix>add_photo_alternate</mat-icon>\n        </mat-form-field>\n\n        <!-- <mat-label>Upload Person Image</mat-label>\n        <input type=\"file\" formControlName=\"ImageUrl\" placeholder=\"Upload Image\" (change)=\"onImageChanged($event)\"  >\n         -->\n\n        \n        <!-- <input  type = \"file\" formControlName=\"ImageUrl\" placeholder=\"Upload Image\" (change)=\"onImageChanged($event)\"> -->\n          \n        <mat-form-field peopleFormGroup class=\"common-mat-input\" id=\"FirstName\">\n          <mat-label>First Name*</mat-label>\n          <input matInput placeholder=\"Enter First Name*\" formControlName=\"FirstName\" ng-ip-address>\n          <mat-error *ngIf=\"peopleFormGroup.controls['FirstName'].errors?.required\">This field is mandatory.</mat-error>\n          <mat-error *ngIf=\"peopleFormGroup.controls['FirstName'].errors?.fieldError\">\n            {{peopleFormGroup.controls['FirstName'].errors?.fieldError}}</mat-error>\n        </mat-form-field>\n\n        <mat-form-field peopleFormGroup class=\"common-mat-input\" id=\"LastName\">\n          <mat-label>Last Name*</mat-label>\n          <input matInput placeholder=\"Enter Last Name*\" formControlName=\"LastName\">\n          <mat-error *ngIf=\"peopleFormGroup.controls['LastName'].errors?.required\">This field is mandatory.</mat-error>\n          <mat-error *ngIf=\"peopleFormGroup.controls['LastName'].errors?.fieldError\">\n            {{peopleFormGroup.controls['LastName'].errors?.fieldError}}</mat-error>\n        </mat-form-field>\n\n        <mat-form-field peopleFormGroup class=\"common-mat-input\" id=\"RoleID\">\n          <mat-label>Role</mat-label>\n          <mat-select placeholder=\"Choose Role*\" [(value)]=\"selectedRole\" formControlName=\"RoleID\">\n            <mat-option *ngFor=\"let role of roles\" [value]=\"role.value\">\n              {{role.viewValue}}\n            </mat-option>\n          </mat-select>\n          <mat-error *ngIf=\"peopleFormGroup.controls['RoleID'].errors?.required\">This field is mandatory.</mat-error>\n          <mat-error *ngIf=\"peopleFormGroup.controls['RoleID'].errors?.fieldError\">\n            {{peopleFormGroup.controls['RoleID'].errors?.fieldError}}</mat-error>\n        </mat-form-field>\n\n        <mat-form-field peopleFormGroup class=\"common-mat-input\" id=\"CrewID\">\n          <mat-label>Crew</mat-label>\n          <mat-select placeholder=\"Choose Crew*\" [(value)]=\"selectedCrew\" formControlName=\"CrewID\">\n            <mat-option *ngFor=\"let crew of crews\" [value]=\"crew.value\">\n              {{crew.viewValue}}\n            </mat-option>\n          </mat-select>\n          <mat-error *ngIf=\"peopleFormGroup.controls['CrewID'].errors?.required\">This field is mandatory.</mat-error>\n          <mat-error *ngIf=\"peopleFormGroup.controls['CrewID'].errors?.fieldError\">\n            {{peopleFormGroup.controls['CrweID'].errors?.fieldError}}</mat-error>\n        </mat-form-field>\n\n      </div>\n    </mat-grid-tile>\n    <mat-grid-tile class=\"mat-grid-tile\">\n      <div class=\"controls-container\">\n        <mat-form-field peopleFormGroup class=\"common-mat-input\" id=\"HeartRateID\">\n          <mat-label>HR Threshold</mat-label>\n          <mat-select placeholder=\"Choose HR*\" [(value)]=\"selectedHR\" formControlName=\"HeartRateID\">\n            <mat-option [value]=\"null\">\n              -None-\n            </mat-option>\n            <mat-option *ngFor=\"let hr of HRIndexes\" [value]=\"hr.value\">\n              {{hr.viewValue}}\n            </mat-option>\n          </mat-select>\n          <mat-error *ngIf=\"peopleFormGroup.controls['HeartRateID'].errors?.required\">This field is mandatory.\n          </mat-error>\n          <mat-error *ngIf=\"peopleFormGroup.controls['HeartRateID'].errors?.fieldError\">\n            {{peopleFormGroup.controls['HeartRateID'].errors?.fieldError}}</mat-error>\n        </mat-form-field>\n        <mat-form-field peopleFormGroup class=\"common-mat-input\" id=\"BloodPressureID\">\n          <mat-label>BP Threshold</mat-label>\n          <mat-select placeholder=\"Choose BP*\" [(value)]=\"selectedBP\" formControlName=\"BloodPressureID\">\n            <mat-option [value]=\"null\">\n              -None-\n            </mat-option>\n            <mat-option *ngFor=\"let bp of BPIndexes\" [value]=\"bp.value\">\n              {{bp.viewValue}}\n            </mat-option>\n          </mat-select>\n          <mat-error *ngIf=\"peopleFormGroup.controls['BloodPressureID'].errors?.required\">This field is mandatory.\n          </mat-error>\n          <mat-error *ngIf=\"peopleFormGroup.controls['BloodPressureID'].errors?.fieldError\">\n            {{peopleFormGroup.controls['BloodPressureID'].errors?.fieldError}}</mat-error>\n        </mat-form-field>\n        <mat-form-field peopleFormGroup class=\"common-mat-input\" id=\"HeatIndexID\">\n          <mat-label>HI Threshold</mat-label>\n          <mat-select placeholder=\"Choose HI\" [(value)]=\"selectedHI\" formControlName=\"HeatIndexID\">\n            <mat-option [value]=\"null\">\n              -None-\n            </mat-option>\n            <mat-option *ngFor=\"let hi of HIIndexes\" [value]=\"hi.value\">\n              {{hi.viewValue}}\n            </mat-option>\n          </mat-select>\n          <mat-error *ngIf=\"peopleFormGroup.controls['HeatIndexID'].errors?.required\">This field is mandatory.\n          </mat-error>\n          <mat-error *ngIf=\"peopleFormGroup.controls['HeatIndexID'].errors?.fieldError\">\n            {{peopleFormGroup.controls['HeatIndexID'].errors?.fieldError}}</mat-error>\n        </mat-form-field>\n        <mat-form-field peopleFormGroup class=\"common-mat-input\" id=\"SpO2ID\">\n          <mat-label>SpO2 Threshold</mat-label>\n          <mat-select placeholder=\"Choose SPO2\" [(value)]=\"selectedSpO2\" formControlName=\"SpO2ID\">\n            <mat-option [value]=\"null\">\n              -None-\n            </mat-option>\n            <mat-option *ngFor=\"let sp of SPIndexes\" [value]=\"sp.value\">\n              {{sp.viewValue}}\n            </mat-option>\n          </mat-select>\n          <mat-error *ngIf=\"peopleFormGroup.controls['SpO2ID'].errors?.required\">This field is mandatory.</mat-error>\n          <mat-error *ngIf=\"peopleFormGroup.controls['SpO2ID'].errors?.fieldError\">\n            {{peopleFormGroup.controls['SpO2ID'].errors?.fieldError}}</mat-error>\n        </mat-form-field>\n\n        <div class=\"button-row\">\n          <button mat-raised-button color=\"primary\" (click)=\"savePerson(peopleFormGroup.value)\">Submit</button>\n          <button mat-stroked-button color=\"Basic\" (click)=\"cancelPerson()\">Cancel</button>\n        </div>\n      </div>\n    </mat-grid-tile>\n  </mat-grid-list>\n\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/people/people.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/people/people.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>People</h3>\n<mat-form-field>\n    <div style=\"display: flex; flex-direction: row;\">\n        <div>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </div>\n        <div>\n            <mat-icon class=\"personIcons\">search</mat-icon>\n        </div>\n        <div>\n        <span>\n            <mat-icon class=\"addIcons\" style=\"color: green;\" (click)=\"addPerson()\">add</mat-icon>\n        </span>\n        </div>\n        \n    </div>\n    \n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows matSort style=\"width: 100%;\">\n\n        <ng-container matColumnDef=\"ImageUrl\">\n            <th [ngStyle]=\"{'display': 'none'}\" mat-header-cell mat-sort-header *matHeaderCellDef [attr.rowspan]=\"2\">\n                Photo\n            </th>\n            <td mat-cell *matCellDef=\"let row\">\n                <img src=\"{{row.ImageUrl}}\" class=\"personImage\" alt=\"image\"> </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"FirstName\">\n            <th [ngStyle]=\"{'display': 'none'}\" mat-header-cell mat-sort-header *matHeaderCellDef [attr.rowspan]=\"2\">\n                First Name\n            </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.FirstName}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"LastName\">\n            <th [ngStyle]=\"{'display': 'none'}\" mat-header-cell mat-sort-header *matHeaderCellDef [attr.rowspan]=\"2\">\n                Last Name\n            </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.LastName}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Crew\">\n            <th [ngStyle]=\"{'display': 'none'}\" mat-header-cell mat-sort-header *matHeaderCellDef [attr.rowspan]=\"2\">\n                Team Name\n            </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.Crew}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Devices\">\n            <th [ngStyle]=\"{'display': 'none'}\" mat-header-cell mat-sort-header *matHeaderCellDef [attr.rowspan]=\"2\">\n                Device\n            </th>\n            <td mat-cell *matCellDef=\"let row\"> \n                <output *ngFor=\"let item of row.Devices\">{{item}}<br></output>\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Role\">\n            <th [ngStyle]=\"{'display': 'none'}\" mat-header-cell mat-sort-header *matHeaderCellDef [attr.rowspan]=\"2\">\n                Role\n            </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.Role}}</td>\n        </ng-container>\n\n        <button routerLink=\"/thresholds\" mat-icon-button class=\"nav-button\"\n            [ngClass]=\"{ selected: selected === 'Thresholds' }\" (click)=\"setSelected('Thresholds')\">\n            <mat-icon class=\"nav-icon\" id=\"thresholds\">vertical_align_center</mat-icon>\n\n\n            <ng-container matColumnDef=\"HeartRate\">\n                <th mat-header-cell *matHeaderCellDef> HR </th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.HeartRate}}</td>\n            </ng-container>\n        </button>\n\n        <ng-container matColumnDef=\"BloodPressure\">\n            <th mat-header-cell *matHeaderCellDef> BP </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.BloodPressure}}</td>\n        </ng-container>\n\n\n        <ng-container matColumnDef=\"HeatIndex\">\n            <th mat-header-cell *matHeaderCellDef> HI </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.HeatIndex}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"SpO2\">\n            <th mat-header-cell *matHeaderCellDef> SPO2 </th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.SpO2}}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Actions\">\n            <th [ngStyle]=\"{'display': 'none'}\" mat-header-cell mat-sort-header *matHeaderCellDef [attr.rowspan]=\"2\">\n                Actions\n            </th>\n            <!-- style=\"display:flex; padding-left: -1rem;\" -->\n            <td mat-cell *matCellDef=\"let element\" tyle=\"display:flex; padding-left: -1rem;\">\n                <button mat-icon-button>\n                <mat-icon style=\"color: green;\" (click)=\"updatePerson(element)\">\n                    edit\n                </mat-icon></button>\n                <button mat-icon-button>\n                <mat-icon  style=\"color: red;\" (click)=\"deletePerson(element)\">\n                    delete\n                </mat-icon></button>\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"expandedDetail\">\n            <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"displayedColumns.length\"\n                style=\"border-top: rgba(0,0,0,.12) solid 1px;padding-left:0rem;padding-right: 0rem;\">\n                <app-people-edit [peopleDetails]=\"element\" (personedit)=\"saveEditPerson($event)\"\n                    (goToPeoplePage)=\"expandedElement = undefined\"\n                    [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\"> </app-people-edit>\n            </td>\n        </ng-container>\n        <ng-container matColumnDef=\"header-row-first-group\">\n            <th mat-header-cell *matHeaderCellDef [attr.rowspan]=\"2\">Photo</th>\n        </ng-container>\n        <ng-container matColumnDef=\"header-row-sec-group\">\n            <th mat-header-cell *matHeaderCellDef [attr.rowspan]=\"2\">First Name</th>\n        </ng-container>\n        <ng-container matColumnDef=\"header-row-third-group\">\n            <th mat-header-cell *matHeaderCellDef [attr.rowspan]=\"2\">Last Name </th>\n        </ng-container>\n        <ng-container matColumnDef=\"header-row-fourth-group\">\n            <th mat-header-cell *matHeaderCellDef [attr.rowspan]=\"2\">Crew Name</th>\n        </ng-container>\n        <ng-container matColumnDef=\"header-row-fifth-group\">\n            <th mat-header-cell *matHeaderCellDef [attr.rowspan]=\"2\">Role</th>\n        </ng-container>\n\n        <ng-container matColumnDef=\"header-row-sixth-group\">\n            <th mat-header-cell *matHeaderCellDef [attr.rowspan]=\"2\">Device</th>\n        </ng-container>\n\n        <ng-container matColumnDef=\"header-row-seventh-group\">\n            <th mat-header-cell *matHeaderCellDef style=\"text-align: center;\" [attr.colspan]=\"4\">Person Threshold</th>\n        </ng-container>\n\n        <ng-container matColumnDef=\"header-row-eighth-group\">\n            <th mat-header-cell *matHeaderCellDef style=\"text-align: center;\" [attr.rowspan]=\"2\"> Actions</th>\n        </ng-container>\n\n        <tr mat-header-row\n            *matHeaderRowDef=\"['header-row-first-group','header-row-sec-group','header-row-third-group'\n        ,'header-row-fourth-group', 'header-row-fifth-group','header-row-sixth-group','header-row-seventh-group','header-row-eighth-group']\">\n        </tr>\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"example-element-row\"\n            [class.example-expanded-row]=\"expandedElement === element\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n    </table>\n\n    <app-people-add *ngIf=\"display1 == 'personAdd'\" (display)='savePerson($event)' (goBack)='cancelPerson($event)'>\n    </app-people-add>\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/team/team.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/team/team.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Teams</h3>\n<span>\n  <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n</span>\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"teamDetails\" matSort>\n\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"Name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Team Name </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.Name}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"Description\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.Description}} </td>\n    </ng-container>\n\n\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/blood-pressure/blood-pressure-dialog/blood-pressure-dialog.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/blood-pressure/blood-pressure-dialog/blood-pressure-dialog.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n    <span class=\"fill-remaining-space\"></span>\n    <span class=\"header\" *ngIf=\"action=='New'\">New Mean Arterial Pressure</span>\n    <span class=\"header\" *ngIf=\"action=='Edit'\">Update Mean Arterial Pressure</span>\n    <span class=\"fill-remaining-space\"></span>\n  </mat-toolbar>\n  <form [formGroup]=\"bloodPressureFormGroup\" class=\"normal-form\">\n    <large *ngFor=\"let error of errormessages\" class=\"error-message\">\n      {{error}}\n    </large>\n  \n    <mat-grid-list cols=\"2\" rowHeight=\"300px\">\n      <mat-grid-tile class=\"mat-grid-tile\">\n        <div class=\"controls-container\">\n            <input type=\"hidden\" formControlName=\"BloodPressureID\">\n          <mat-form-field bloodPressureFormGroup class=\"common-mat-input\" id=\"LowMap\">\n            <mat-label>Critical Low MAP</mat-label>\n            <input matInput placeholder=\"Enter Critical Low MAP*\" formControlName=\"LowMap\" ng-ip-address>\n            <mat-error *ngIf=\"bloodPressureFormGroup.controls['LowMap'].errors?.required\">This field is mandatory.</mat-error>\n            <mat-error *ngIf=\"bloodPressureFormGroup.controls['LowMap'].errors?.min\">Must be a positive integer.</mat-error>            \n            <mat-error *ngIf=\"bloodPressureFormGroup.controls['LowMap'].errors?.serverError\">{{bloodPressureFormGroup.controls['LowMap'].errors?.serverError}}</mat-error>\n          </mat-form-field>\n          <mat-form-field bloodPressureFormGroup class=\"common-mat-input\" id=\"NormalLowMAP\">\n            <mat-label>Low MAP</mat-label>\n            <input matInput placeholder=\"Enter Low MAP*\" formControlName=\"NormalLowMAP\">\n            <mat-error *ngIf=\"bloodPressureFormGroup.controls['NormalLowMAP'].errors?.required\">This field is mandatory.</mat-error>\n            <mat-error *ngIf=\"bloodPressureFormGroup.controls['NormalLowMAP'].errors?.min\">Must be a positive integer.</mat-error>\n            <mat-error *ngIf=\"bloodPressureFormGroup.controls['NormalLowMAP'].errors?.serverError\">{{bloodPressureFormGroup.controls['NormalLowMAP'].errors?.serverError}}</mat-error>\n          </mat-form-field>\n          <mat-form-field bloodPressureFormGroup class=\"common-mat-input\" id=\"NormalHighMAP\">\n            <mat-label>High MAP</mat-label>\n            <input matInput placeholder=\"Enter High MAP*\" formControlName=\"NormalHighMAP\">\n            <mat-error *ngIf=\"bloodPressureFormGroup.controls['NormalHighMAP'].errors?.required\">This field is mandatory.</mat-error>\n            <mat-error *ngIf=\"bloodPressureFormGroup.controls['NormalHighMAP'].errors?.min\">Must be a positive integer.</mat-error>\n            <mat-error *ngIf=\"bloodPressureFormGroup.controls['NormalHighMAP'].errors?.serverError\">{{bloodPressureFormGroup.controls['NormalHighMAP'].errors?.serverError}}</mat-error>\n          </mat-form-field>\n        </div>\n      </mat-grid-tile>\n      <mat-grid-tile class=\"mat-grid-tile\">\n        <div class=\"controls-container\">  \n          <mat-form-field bloodPressureFormGroup class=\"common-mat-input\" id=\"HighMap\">\n            <mat-label>Critical High MAP</mat-label>\n            <input matInput placeholder=\"Enter Critical High MAP*\" formControlName=\"HighMap\">\n            <mat-error *ngIf=\"bloodPressureFormGroup.controls['HighMap'].errors?.required\">This field is mandatory.</mat-error>\n            <mat-error *ngIf=\"bloodPressureFormGroup.controls['HighMap'].errors?.min\">Must be a positive integer.</mat-error>\n            <mat-error *ngIf=\"bloodPressureFormGroup.controls['HighMap'].errors?.serverError\">{{bloodPressureFormGroup.controls['HighMap'].errors?.serverError}}</mat-error>\n          </mat-form-field>    \n          <mat-form-field bloodPressureFormGroup class=\"common-mat-input\" id=\"BPIndex\">\n            <mat-label>BP Index</mat-label>\n            <input matInput placeholder=\"Enter Unique BP Index*\" formControlName=\"BPIndex\">\n            <mat-error *ngIf=\"bloodPressureFormGroup.controls['BPIndex'].errors?.required\">This field is mandatory.</mat-error>\n            <mat-error *ngIf=\"bloodPressureFormGroup.controls['BPIndex'].errors?.serverError\">{{bloodPressureFormGroup.controls['BPIndex'].errors?.serverError}}</mat-error>\n          </mat-form-field>\n          \n          <div class=\"button-row\">\n            <button mat-raised-button color=\"primary\" (click)=\"saveBloodPressure(bloodPressureFormGroup.value)\">Submit</button>\n            <button mat-stroked-button color=\"Basic\" (click)=\"cancelBloodPressure()\">Cancel</button>\n          </div>\n        </div>\n      </mat-grid-tile>\n      </mat-grid-list>\n  \n  </form>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/blood-pressure/blood-pressure.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/blood-pressure/blood-pressure.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-elevation-z8\">\n  <button mat-icon-button>\n    <mat-icon class=\"addIcons\" style=\"color: green;\" (click)=\"addBloodPressure()\">add</mat-icon>\n  </button>\n\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- BPIndex Column -->\n    <ng-container matColumnDef=\"BPIndex\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> BP Index </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.BPIndex}} </td>\n    </ng-container>\n\n    <!-- Normal Low MAP Column -->\n    <ng-container matColumnDef=\"LowMAP\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Critical Low MAP </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.LowMAP}} </td>\n    </ng-container>\n\n    <!-- HighRisk Column -->\n    <ng-container matColumnDef=\"NormalLowMAP\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Low MAP </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.NormalLowMAP}} </td>\n    </ng-container>\n    \n    <!-- NormalHighMAP Column -->\n    <ng-container matColumnDef=\"NormalHighMAP\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> High MAP </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.NormalHighMAP}} </td>\n    </ng-container>\n\n    <!-- HighMAP Column -->\n    <ng-container matColumnDef=\"HighMAP\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Critical High MAP </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.HighMAP}} </td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"Actions\">\n      <th mat-header-cell *matHeaderCellDef>Actions</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button>\n          <mat-icon (click)=\"updateBloodPressure(element)\" style=\"color: green;\">edit</mat-icon>\n        </button>\n\n        <button mat-icon-button>\n          <mat-icon (click)=\"deleteBloodPressure(element)\" style=\"color: red;\">delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  <div>\n    <a href=\"https://www.healthline.com/health/mean-arterial-pressure#normal-map\" target=\"_blank\">Learn more about MAP</a>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/heart-rate/heart-rate-add/heart-rate-add.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/heart-rate/heart-rate-add/heart-rate-add.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n    <span class=\"fill-remaining-space\"></span>\n    <span class=\"header\" *ngIf=\"action=='New'\">New Heart Rate</span>\n    <span class=\"header\" *ngIf=\"action=='Edit'\">Update Heart Rate</span>\n    <span class=\"fill-remaining-space\"></span>\n  </mat-toolbar>\n  <form [formGroup]=\"heartRateFormGroup\" class=\"normal-form\">\n    <large *ngFor=\"let error of errormessages\" class=\"error-message\">\n      {{error}}\n    </large>\n  \n    <mat-grid-list cols=\"2\" rowHeight=\"300px\">\n      <mat-grid-tile class=\"mat-grid-tile\">\n        <div class=\"controls-container\">\n            <input type=\"hidden\" formControlName=\"HeartRateID\">\n          <mat-form-field heartRateFormGroup class=\"common-mat-input\" id=\"AgeGroup\">\n            <mat-label>Age Group</mat-label>\n            <input matInput placeholder=\"Enter Age Group*\" formControlName=\"AgeGroup\" ng-ip-address>\n            <mat-error *ngIf=\"heartRateFormGroup.controls['AgeGroup'].errors?.required\">This field is mandatory.</mat-error>\n            <mat-error *ngIf=\"heartRateFormGroup.controls['AgeGroup'].errors?.serverError\">{{heartRateFormGroup.controls['AgeGroup'].errors?.serverError}}</mat-error>\n          </mat-form-field>\n          <mat-form-field heartRateFormGroup class=\"common-mat-input\" id=\"LowCritical\">\n            <mat-label>Low Critical Heart Rate</mat-label>\n            <input matInput placeholder=\"Enter Low Critical HR Threshold*\" formControlName=\"LowCritical\">\n            <mat-error *ngIf=\"heartRateFormGroup.controls['LowCritical'].errors?.required\">This field is mandatory.</mat-error>\n            <mat-error *ngIf=\"heartRateFormGroup.controls['LowCritical'].errors?.min\">Must be a positive integer.</mat-error>\n            <mat-error *ngIf=\"heartRateFormGroup.hasError('lowCriticalGreaterThanLowTarget')\">Value must be less than Low Target Heart Rate.</mat-error>\n            <mat-error *ngIf=\"heartRateFormGroup.controls['LowCritical'].errors?.serverError\">{{heartRateFormGroup.controls['LowCritical'].errors?.serverError}}</mat-error>\n          </mat-form-field>\n          <mat-form-field heartRateFormGroup class=\"common-mat-input\" id=\"LowTargetHR\">\n            <mat-label>Low Target Heart Rate</mat-label>\n            <input matInput placeholder=\"Enter Low Target HR Threshold*\" formControlName=\"LowTargetHR\">\n            <mat-error *ngIf=\"heartRateFormGroup.controls['LowTargetHR'].errors?.required\">This field is mandatory.</mat-error>\n            <mat-error *ngIf=\"heartRateFormGroup.controls['LowTargetHR'].errors?.min\">Must be a positive integer.</mat-error>\n            <mat-error *ngIf=\"heartRateFormGroup.controls['LowTargetHR'].errors?.serverError\">{{heartRateFormGroup.controls['LowTargetHR'].errors?.serverError}}</mat-error>\n          </mat-form-field>\n        </div>\n      </mat-grid-tile>\n      <mat-grid-tile class=\"mat-grid-tile\">\n        <div class=\"controls-container\">  \n          <mat-form-field heartRateFormGroup class=\"common-mat-input\" id=\"HighTargetHR\">\n            <mat-label>High Target Heart Rate</mat-label>\n            <input matInput placeholder=\"Enter High Target HR Threshold*\" formControlName=\"HighTargetHR\">\n            <mat-error *ngIf=\"heartRateFormGroup.controls['HighTargetHR'].errors?.required\">This field is mandatory.</mat-error>\n            <mat-error *ngIf=\"heartRateFormGroup.controls['HighTargetHR'].errors?.min\">Must be a positive integer.</mat-error>\n            <mat-error *ngIf=\"heartRateFormGroup.controls['HighTargetHR'].errors?.serverError\">{{heartRateFormGroup.controls['HighTargetHR'].errors?.serverError}}</mat-error>\n          </mat-form-field>    \n          <mat-form-field heartRateFormGroup class=\"common-mat-input\" id=\"HighCritical\">\n            <mat-label>High Critical Heart Rate</mat-label>\n            <input matInput placeholder=\"Enter High Critical HR Threshold*\" formControlName=\"HighCritical\">\n            <mat-error *ngIf=\"heartRateFormGroup.controls['HighCritical'].errors?.required\">This field is mandatory.</mat-error>\n            <mat-error *ngIf=\"heartRateFormGroup.controls['HighCritical'].errors?.min\">Must be a positive integer.</mat-error>\n            <mat-error *ngIf=\"heartRateFormGroup.controls['HighCritical'].errors?.serverError\">{{heartRateFormGroup.controls['HighCritical'].errors?.serverError}}</mat-error>\n          </mat-form-field>\n          <mat-form-field heartRateFormGroup class=\"common-mat-input\" id=\"HRIndex\">\n            <mat-label>HR Index</mat-label>\n            <input matInput placeholder=\"Enter Unique HR Index*\" formControlName=\"HRIndex\">\n            <mat-error *ngIf=\"heartRateFormGroup.controls['HRIndex'].errors?.required\">This field is mandatory.</mat-error>\n            <mat-error *ngIf=\"heartRateFormGroup.controls['HRIndex'].errors?.serverError\">{{heartRateFormGroup.controls['HRIndex'].errors?.serverError}}</mat-error>\n          </mat-form-field>\n          \n          <div class=\"button-row\">\n            <button mat-raised-button color=\"primary\" (click)=\"saveHeartRate(heartRateFormGroup.value)\">Submit</button>\n            <button mat-stroked-button color=\"Basic\" (click)=\"cancelHeartRate()\">Cancel</button>\n          </div>\n        </div>\n      </mat-grid-tile>\n      </mat-grid-list>\n  \n  </form>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/heart-rate/heart-rate.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/heart-rate/heart-rate.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-elevation-z8\">\n  <button mat-icon-button>\n    <mat-icon class=\"addIcons\" style=\"color: green;\" (click)=\"addHeartRate()\">add</mat-icon>\n  </button>\n\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- AgeGroup Column -->\n    <ng-container matColumnDef=\"AgeGroup\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Age Group</th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.AgeGroup}} </td>\n    </ng-container>\n    <!-- LowCritical Column -->\n    <ng-container matColumnDef=\"LowCritical\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Low Critical </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.LowCritical}} </td>\n    </ng-container>\n    <!-- LowTargetHR Column -->\n    <ng-container matColumnDef=\"LowTargetHR\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Low Target Heart Rate </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.LowTargetHR}} </td>\n    </ng-container>\n    <!-- HighTargetHR Column -->\n    <ng-container matColumnDef=\"HighTargetHR\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> High Target Heart Rate </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.HighTargetHR}} </td>\n    </ng-container>    \n    <!-- HighCritical Column -->\n    <ng-container matColumnDef=\"HighCritical\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> High Critical </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.HighCritical}} </td>\n    </ng-container>\n    <!-- HRIndex Column -->\n    <ng-container matColumnDef=\"HRIndex\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> HR Index </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.HRIndex}} </td>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"Actions\">\n      <th mat-header-cell *matHeaderCellDef>Actions</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button>\n          <mat-icon (click)=\"updateHeartRate(element)\" style=\"color: green;\">edit</mat-icon>\n        </button>\n\n        <button mat-icon-button>\n            <mat-icon (click)=\"deleteHeartRate(element)\" style=\"color: red;\">delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/heat-index/heat-index-dialog/heat-index-dialog.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/heat-index/heat-index-dialog/heat-index-dialog.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n    <span class=\"fill-remaining-space\"></span>\n    <span class=\"header\" *ngIf=\"action=='New'\">New Heat Index</span>\n    <span class=\"header\" *ngIf=\"action=='Edit'\">Update Heat Index</span>\n    <span class=\"fill-remaining-space\"></span>\n  </mat-toolbar>\n  <form [formGroup]=\"heatIndexFormGroup\" class=\"normal-form\">\n    <large *ngFor=\"let error of errormessages\" class=\"error-message\">\n      {{error}}\n    </large>\n    <mat-error *ngIf=\"heatIndexFormGroup.errors?.numberOutOfRange\">Please check numbers</mat-error>\n    <mat-grid-list cols=\"1\" rowHeight=\"300px\">\n      <mat-grid-tile class=\"mat-grid-tile\">\n        <div class=\"controls-container\">\n            <input type=\"hidden\" formControlName=\"HeatIndexID\">\n          <mat-form-field heatIndexFormGroup class=\"common-mat-input\" id=\"ModerateRisk\">\n            <mat-label>Moderate Risk</mat-label>\n            <input matInput placeholder=\"Enter Moderate Risk Threshold*\" formControlName=\"ModerateRisk\">\n            <mat-error *ngIf=\"heatIndexFormGroup.controls['ModerateRisk'].errors?.required\">This field is mandatory.</mat-error>\n            <mat-error *ngIf=\"heatIndexFormGroup.controls['ModerateRisk'].errors?.min\">Must be a greater than zero.</mat-error>\n            <mat-error *ngIf=\"heatIndexFormGroup.controls['ModerateRisk'].errors?.serverError\">{{heatIndexFormGroup.controls['ModerateRisk'].errors?.serverError}}</mat-error>\n            <mat-error *ngIf=\"heatIndexFormGroup.controls.ModerateRisk.errors?.greaterThan\">{{heatIndexFormGroup.controls.ModerateRisk.errors.greaterThan.message}}</mat-error>\n          </mat-form-field>\n          <mat-form-field heatIndexFormGroup class=\"common-mat-input\" id=\"HighRisk\">\n            <mat-label>High Risk</mat-label>\n            <input matInput placeholder=\"Enter High Risk Threshold*\" formControlName=\"HighRisk\">\n            <mat-error *ngIf=\"heatIndexFormGroup.controls['HighRisk'].errors?.required\">This field is mandatory.</mat-error>\n            <mat-error *ngIf=\"heatIndexFormGroup.controls['HighRisk'].errors?.min\">Must be a greater than zero.</mat-error>\n            <mat-error *ngIf=\"heatIndexFormGroup.controls['HighRisk'].errors?.serverError\">{{heatIndexFormGroup.controls['HighRisk'].errors?.serverError}}</mat-error>\n            <mat-error *ngIf=\"heatIndexFormGroup.controls.HighRisk.errors?.greaterThan\">{{heatIndexFormGroup.controls.HighRisk.errors.greaterThan.message}}</mat-error>\n          </mat-form-field>\n          <mat-form-field heatIndexFormGroup class=\"common-mat-input\" id=\"HIIndex\">\n            <mat-label>HI Index</mat-label>\n            <input matInput placeholder=\"Enter Unique Heat Index*\" formControlName=\"HIIndex\">\n            <mat-error *ngIf=\"heatIndexFormGroup.controls['HIIndex'].errors?.required\">This field is mandatory.</mat-error>\n            <mat-error *ngIf=\"heatIndexFormGroup.controls['HIIndex'].errors?.serverError\">{{heatIndexFormGroup.controls['HIIndex'].errors?.serverError}}</mat-error>\n          </mat-form-field>\n          \n          <div class=\"button-row\">\n            <button mat-raised-button color=\"primary\" (click)=\"saveHeatIndex(heatIndexFormGroup.value)\" [disabled]=\"!heatIndexFormGroup.valid\">Submit</button>\n            <button mat-stroked-button color=\"Basic\" (click)=\"cancelHeatIndex()\">Cancel</button>\n          </div>\n        </div>\n      </mat-grid-tile>\n      </mat-grid-list>\n  \n  </form>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/heat-index/heat-index.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/heat-index/heat-index.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-elevation-z8\">\n  <button mat-icon-button>\n    <mat-icon class=\"addIcons\" style=\"color: green;\" (click)=\"addHeatIndex()\">add</mat-icon>\n  </button>\n\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- HI Index Column -->\n    <ng-container matColumnDef=\"HIIndex\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> HI Index </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.HIIndex}} </td>\n    </ng-container>\n\n    <!-- Moderate Risk Column -->\n    <ng-container matColumnDef=\"ModerateRisk\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Moderate Risk </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.ModerateRisk}} </td>\n    </ng-container>\n\n    <!-- HighRisk Column -->\n    <ng-container matColumnDef=\"HighRisk\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> High Risk </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.HighRisk}} </td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"Actions\">\n      <th mat-header-cell *matHeaderCellDef>Actions</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button>\n          <mat-icon (click)=\"updateHeatIndex(element)\" style=\"color: green;\">edit</mat-icon>\n        </button>\n\n        <button mat-icon-button>\n          <mat-icon (click)=\"deleteHeatIndex(element)\" style=\"color: red;\">delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/oxygen/oxygen-dialog/oxygen-dialog.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/oxygen/oxygen-dialog/oxygen-dialog.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n    <span class=\"fill-remaining-space\"></span>\n    <span class=\"header\" *ngIf=\"action=='New'\">New Blood Oxygen</span>\n    <span class=\"header\" *ngIf=\"action=='Edit'\">Update Blood Oxygen</span>\n    <span class=\"fill-remaining-space\"></span>\n  </mat-toolbar>\n  <form [formGroup]=\"oxygenFormGroup\" class=\"normal-form\">\n    <large *ngFor=\"let error of errormessages\" class=\"error-message\">\n      {{error}}\n    </large>\n    <mat-error *ngIf=\"oxygenFormGroup.errors?.numberOutOfRange\">Please check numbers</mat-error>\n    <mat-grid-list cols=\"1\" rowHeight=\"300px\">\n      <mat-grid-tile class=\"mat-grid-tile\">\n        <div class=\"controls-container\">\n            <input type=\"hidden\" formControlName=\"SpO2ID\">\n          <mat-form-field oxygenFormGroup class=\"common-mat-input\" id=\"Low\">\n            <mat-label>Low SpO2</mat-label>\n            <input matInput placeholder=\"Enter Low SpO2 Threshold*\" formControlName=\"Low\">\n            <mat-error *ngIf=\"oxygenFormGroup.controls['Low'].errors?.required\">This field is mandatory.</mat-error>\n            <mat-error *ngIf=\"oxygenFormGroup.controls['Low'].errors?.min\">Must be a greater than zero.</mat-error>\n            <mat-error *ngIf=\"oxygenFormGroup.controls['Low'].errors?.serverError\">{{oxygenFormGroup.controls['Low'].errors?.serverError}}</mat-error>\n            <mat-error *ngIf=\"oxygenFormGroup.controls.Low.errors?.greaterThan\">{{oxygenFormGroup.controls.Low.errors.greaterThan.message}}</mat-error>\n          </mat-form-field>\n          <mat-form-field oxygenFormGroup class=\"common-mat-input\" id=\"Normal\">\n            <mat-label>Normal SpO2</mat-label>\n            <input matInput placeholder=\"Enter Normal SpO2 Threshold*\" formControlName=\"Normal\">\n            <mat-error *ngIf=\"oxygenFormGroup.controls['Normal'].errors?.required\">This field is mandatory.</mat-error>\n            <mat-error *ngIf=\"oxygenFormGroup.controls['Normal'].errors?.min\">Must be a greater than zero.</mat-error>\n            <mat-error *ngIf=\"oxygenFormGroup.controls['Normal'].errors?.serverError\">{{oxygenFormGroup.controls['Normal'].errors?.serverError}}</mat-error>\n            <mat-error *ngIf=\"oxygenFormGroup.controls.Normal.errors?.greaterThan\">{{oxygenFormGroup.controls.Normal.errors.greaterThan.message}}</mat-error>\n          </mat-form-field>\n          <mat-form-field oxygenFormGroup class=\"common-mat-input\" id=\"SpO2Index\">\n            <mat-label>SpO2 Index</mat-label>\n            <input matInput placeholder=\"Enter Unique SpO2 Index*\" formControlName=\"SpO2Index\">\n            <mat-error *ngIf=\"oxygenFormGroup.controls['SpO2Index'].errors?.required\">This field is mandatory.</mat-error>\n            <mat-error *ngIf=\"oxygenFormGroup.controls['SpO2Index'].errors?.serverError\">{{oxygenFormGroup.controls['SpO2Index'].errors?.serverError}}</mat-error>\n          </mat-form-field>\n          \n          <div class=\"button-row\">\n            <button mat-raised-button color=\"primary\" (click)=\"saveOxygen(oxygenFormGroup.value)\" [disabled]=\"!oxygenFormGroup.valid\">Submit</button>\n            <button mat-stroked-button color=\"Basic\" (click)=\"cancelOxygen()\">Cancel</button>\n          </div>\n        </div>\n      </mat-grid-tile>\n      </mat-grid-list>\n  \n  </form>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/oxygen/oxygen.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/oxygen/oxygen.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-elevation-z8\">\n\n  <button mat-icon-button>\n    <mat-icon class=\"addIcons\" style=\"color: green;\" (click)=\"addOxygen()\">add</mat-icon>\n  </button>\n  \n  <table mat-table [dataSource]=\"dataSource\" matSort>\n    \n    <!-- SpO2Index Column -->\n    <ng-container matColumnDef=\"SpO2Index\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> SpO2 Index </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.SpO2Index}} </td>\n    </ng-container>\n    \n    <!-- Low Column -->\n    <ng-container matColumnDef=\"Low\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Low SpO2 (%) </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.Low}} </td>\n    </ng-container>\n\n    <!-- Normal Column -->\n    <ng-container matColumnDef=\"Normal\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Normal SpO2 (%) </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.Normal}} </td>\n    </ng-container>\n\n    <!-- Actions -->\n    <ng-container matColumnDef=\"Actions\">\n      <th mat-header-cell *matHeaderCellDef>Actions</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button>\n          <mat-icon (click)=\"updateOxygen(element)\" style=\"color: green;\">edit</mat-icon>\n        </button>\n\n        <button mat-icon-button>\n          <mat-icon (click)=\"deleteOxygen(element)\" style=\"color: red;\">delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/threshold.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/threshold.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Thresholds</h3>\n<mat-tab-group dynamicHeight>\n  <mat-tab label=\"Heart Rate\">\n    <div class=\"example-small-box mat-elevation-z4\">\n      <app-heart-rate></app-heart-rate>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Heat Index\">\n    <div class=\"example-large-box mat-elevation-z4\">\n     <app-heat-index></app-heat-index>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Blood Pressure (Mean Arterial Pressure MAP)\">\n    <div class=\"example-large-box mat-elevation-z4\">\n     <app-blood-pressure></app-blood-pressure>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Oxygen (SpO2)\">\n    <div class=\"example-large-box mat-elevation-z4\">\n     <app-oxygen></app-oxygen>\n    </div>\n  </mat-tab>\n</mat-tab-group>");

/***/ }),

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

/***/ "./src/app/app-bar/app-bar.component.scss":
/*!************************************************!*\
  !*** ./src/app/app-bar/app-bar.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-toolbar {\n  background-color: #0000A0;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXdlaWxpL0Rlc2t0b3AvUkVBQ0gvcmVhY2gvSGF6bWF0LWNsaWVudC9zcmMvYXBwL2FwcC1iYXIvYXBwLWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLWJhci9hcHAtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAtYmFyL2FwcC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwQTA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiIsIm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDBBMDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app-bar/app-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/app-bar/app-bar.component.ts ***!
  \**********************************************/
/*! exports provided: AppBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBarComponent", function() { return AppBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AppBarComponent = /** @class */ (function () {
    function AppBarComponent() {
    }
    AppBarComponent.prototype.ngOnInit = function () {
    };
    AppBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-bar',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-bar/app-bar.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app-bar.component.scss */ "./src/app/app-bar/app-bar.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AppBarComponent);
    return AppBarComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./people/people.component */ "./src/app/people/people.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _devices_devices_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./devices/devices.component */ "./src/app/devices/devices.component.ts");
/* harmony import */ var _device_assignment_device_assignment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./device-assignment/device-assignment.component */ "./src/app/device-assignment/device-assignment.component.ts");
/* harmony import */ var _threshold_threshold_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./threshold/threshold.component */ "./src/app/threshold/threshold.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");










var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    // { path: '', redirectTo:'/dashboard', pathMatch: 'full'},
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'people', component: _people_people_component__WEBPACK_IMPORTED_MODULE_4__["PeopleComponent"] },
    { path: 'teams', component: _team_team_component__WEBPACK_IMPORTED_MODULE_5__["TeamComponent"] },
    { path: 'devices', component: _devices_devices_component__WEBPACK_IMPORTED_MODULE_6__["DevicesComponent"] },
    { path: 'device-assignment', component: _device_assignment_device_assignment_component__WEBPACK_IMPORTED_MODULE_7__["DeviceAssignmentComponent"] },
    { path: 'thresholds', component: _threshold_threshold_component__WEBPACK_IMPORTED_MODULE_8__["ThresholdComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#content {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXdlaWxpL0Rlc2t0b3AvUkVBQ0gvcmVhY2gvSGF6bWF0LWNsaWVudC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csYUFBQTtBQ0NIIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRlbnQge1xuICAgZGlzcGxheTogZmxleDtcbn0iLCIjY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'REACH';
    }
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _demo_material_module_demo_material_module_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo-material-module/demo-material-module.module */ "./src/app/demo-material-module/demo-material-module.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _people_people_add_people_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./people/people-add/people-add.component */ "./src/app/people/people-add/people-add.component.ts");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./people/people.component */ "./src/app/people/people.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _threshold_heart_rate_heart_rate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./threshold/heart-rate/heart-rate.component */ "./src/app/threshold/heart-rate/heart-rate.component.ts");
/* harmony import */ var _threshold_heat_index_heat_index_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./threshold/heat-index/heat-index.component */ "./src/app/threshold/heat-index/heat-index.component.ts");
/* harmony import */ var _threshold_threshold_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./threshold/threshold.component */ "./src/app/threshold/threshold.component.ts");
/* harmony import */ var _devices_devices_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./devices/devices.component */ "./src/app/devices/devices.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _device_assignment_device_assignment_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./device-assignment/device-assignment.component */ "./src/app/device-assignment/device-assignment.component.ts");
/* harmony import */ var _app_bar_app_bar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app-bar/app-bar.component */ "./src/app/app-bar/app-bar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _threshold_blood_pressure_blood_pressure_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./threshold/blood-pressure/blood-pressure.component */ "./src/app/threshold/blood-pressure/blood-pressure.component.ts");
/* harmony import */ var _threshold_oxygen_oxygen_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./threshold/oxygen/oxygen.component */ "./src/app/threshold/oxygen/oxygen.component.ts");
/* harmony import */ var _dashboard_dashboard_teams_dashboard_teams_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dashboard/dashboard-teams/dashboard-teams.component */ "./src/app/dashboard/dashboard-teams/dashboard-teams.component.ts");
/* harmony import */ var _dashboard_dashboard_team_members_dashboard_team_members_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dashboard/dashboard-team-members/dashboard-team-members.component */ "./src/app/dashboard/dashboard-team-members/dashboard-team-members.component.ts");
/* harmony import */ var _devices_devices_add_devices_add_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./devices/devices-add/devices-add.component */ "./src/app/devices/devices-add/devices-add.component.ts");
/* harmony import */ var _threshold_heart_rate_heart_rate_add_heart_rate_add_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./threshold/heart-rate/heart-rate-add/heart-rate-add.component */ "./src/app/threshold/heart-rate/heart-rate-add/heart-rate-add.component.ts");
/* harmony import */ var _threshold_oxygen_oxygen_dialog_oxygen_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./threshold/oxygen/oxygen-dialog/oxygen-dialog.component */ "./src/app/threshold/oxygen/oxygen-dialog/oxygen-dialog.component.ts");
/* harmony import */ var _threshold_heat_index_heat_index_dialog_heat_index_dialog_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./threshold/heat-index/heat-index-dialog/heat-index-dialog.component */ "./src/app/threshold/heat-index/heat-index-dialog/heat-index-dialog.component.ts");
/* harmony import */ var _threshold_blood_pressure_blood_pressure_dialog_blood_pressure_dialog_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./threshold/blood-pressure/blood-pressure-dialog/blood-pressure-dialog.component */ "./src/app/threshold/blood-pressure/blood-pressure-dialog/blood-pressure-dialog.component.ts");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/__ivy_ngcc__/fesm5/rxweb-reactive-form-validators.js");
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-material-file-input */ "./node_modules/ngx-material-file-input/__ivy_ngcc__/fesm5/ngx-material-file-input.js");


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _people_people_add_people_add_component__WEBPACK_IMPORTED_MODULE_12__["PeopleAddComponent"],
                _people_people_component__WEBPACK_IMPORTED_MODULE_13__["PeopleComponent"],
                _team_team_component__WEBPACK_IMPORTED_MODULE_14__["TeamComponent"],
                _threshold_heart_rate_heart_rate_component__WEBPACK_IMPORTED_MODULE_15__["HeartRateComponent"],
                _threshold_heat_index_heat_index_component__WEBPACK_IMPORTED_MODULE_16__["HeatIndexComponent"],
                _threshold_threshold_component__WEBPACK_IMPORTED_MODULE_17__["ThresholdComponent"],
                _devices_devices_component__WEBPACK_IMPORTED_MODULE_18__["DevicesComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"],
                _device_assignment_device_assignment_component__WEBPACK_IMPORTED_MODULE_20__["DeviceAssignmentComponent"],
                _app_bar_app_bar_component__WEBPACK_IMPORTED_MODULE_21__["AppBarComponent"],
                _threshold_blood_pressure_blood_pressure_component__WEBPACK_IMPORTED_MODULE_23__["BloodPressureComponent"],
                _threshold_oxygen_oxygen_component__WEBPACK_IMPORTED_MODULE_24__["OxygenComponent"],
                _dashboard_dashboard_teams_dashboard_teams_component__WEBPACK_IMPORTED_MODULE_25__["DashboardTeamsComponent"],
                _dashboard_dashboard_team_members_dashboard_team_members_component__WEBPACK_IMPORTED_MODULE_26__["DashboardTeamMembersComponent"],
                _devices_devices_add_devices_add_component__WEBPACK_IMPORTED_MODULE_27__["DevicesAddComponent"],
                _threshold_heart_rate_heart_rate_add_heart_rate_add_component__WEBPACK_IMPORTED_MODULE_28__["HeartRateAddComponent"],
                _threshold_oxygen_oxygen_dialog_oxygen_dialog_component__WEBPACK_IMPORTED_MODULE_29__["OxygenDialogComponent"],
                _threshold_heat_index_heat_index_dialog_heat_index_dialog_component__WEBPACK_IMPORTED_MODULE_30__["HeatIndexDialogComponent"],
                _threshold_blood_pressure_blood_pressure_dialog_blood_pressure_dialog_component__WEBPACK_IMPORTED_MODULE_31__["BloodPressureDialogComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _demo_material_module_demo_material_module_module__WEBPACK_IMPORTED_MODULE_7__["DemoMaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_32__["RxReactiveFormsModule"],
                ngx_material_file_input__WEBPACK_IMPORTED_MODULE_33__["MaterialFileInputModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-data.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/dashboard-data.service.ts ***!
  \*****************************************************/
/*! exports provided: DashboardDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDataService", function() { return DashboardDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DashboardDataService = /** @class */ (function () {
    function DashboardDataService() {
        this.dashboardObj = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dashboardObj$ = this.dashboardObj.asObservable();
    }
    DashboardDataService.prototype.publishDashboardObj = function (dashboardObj) {
        this.dashboardObj.next(dashboardObj);
    };
    DashboardDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DashboardDataService);
    return DashboardDataService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-team-members/dashboard-team-members.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-team-members/dashboard-team-members.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#image {\n  width: 160px;\n  height: 120px;\n  border-radius: 10%;\n}\n\nmat-card {\n  display: flex;\n  margin-top: 12px;\n}\n\n#nameIcons {\n  width: 40%;\n  margin: 0px 24px;\n}\n\nmat-icon {\n  margin: 0px 6px;\n}\n\n.time {\n  border: 1px solid black;\n  border-radius: 10%;\n  margin: 0px 2px;\n}\n\ntable {\n  width: 100%;\n}\n\n#stats {\n  margin: 0px 24px;\n  width: 55%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXdlaWxpL0Rlc2t0b3AvUkVBQ0gvcmVhY2gvSGF6bWF0LWNsaWVudC9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQtdGVhbS1tZW1iZXJzL2Rhc2hib2FyZC10ZWFtLW1lbWJlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQtdGVhbS1tZW1iZXJzL2Rhc2hib2FyZC10ZWFtLW1lbWJlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC10ZWFtLW1lbWJlcnMvZGFzaGJvYXJkLXRlYW0tbWVtYmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpbWFnZSB7XG4gICAgd2lkdGg6IDE2MHB4OyBcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cblxubWF0LWNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuI25hbWVJY29ucyB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBtYXJnaW46IDBweCAyNHB4O1xufVxuXG5tYXQtaWNvbiB7XG4gICAgbWFyZ2luOiAwcHggNnB4O1xufVxuXG4udGltZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xuICAgIG1hcmdpbjogMHB4IDJweDtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jc3RhdHMge1xuICAgIG1hcmdpbjogMHB4IDI0cHg7XG4gICAgd2lkdGg6IDU1JTtcbn1cblxuLy8gI2ljb25zIHtcblxuLy8gfSIsIiNpbWFnZSB7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xufVxuXG5tYXQtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbiNuYW1lSWNvbnMge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW46IDBweCAyNHB4O1xufVxuXG5tYXQtaWNvbiB7XG4gIG1hcmdpbjogMHB4IDZweDtcbn1cblxuLnRpbWUge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xuICBtYXJnaW46IDBweCAycHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNzdGF0cyB7XG4gIG1hcmdpbjogMHB4IDI0cHg7XG4gIHdpZHRoOiA1NSU7XG59Il19 */");

/***/ }),

/***/ "./src/app/dashboard/dashboard-team-members/dashboard-team-members.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-team-members/dashboard-team-members.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DashboardTeamMembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardTeamMembersComponent", function() { return DashboardTeamMembersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/table.js");
/* harmony import */ var _dashboard_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard-data.service */ "./src/app/dashboard/dashboard-data.service.ts");




var MEMBER_DATA = [
    { hr: 60, bp: '143/89', heatIndex: 89, spO2: 99, resp: 40 }
];
var DashboardTeamMembersComponent = /** @class */ (function () {
    function DashboardTeamMembersComponent(dashboardDataService) {
        var _this = this;
        this.dashboardDataService = dashboardDataService;
        this.displayedColumns = ['hr', 'bp', 'heatIndex', 'spO2', 'resp'];
        this.memberStats = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](MEMBER_DATA);
        this.team = {};
        this.dashboardDataService.dashboardObj$.subscribe(function (data) {
            _this.team = data;
        });
    }
    DashboardTeamMembersComponent.prototype.ngOnInit = function () {
    };
    DashboardTeamMembersComponent.ctorParameters = function () { return [
        { type: _dashboard_data_service__WEBPACK_IMPORTED_MODULE_3__["DashboardDataService"] }
    ]; };
    DashboardTeamMembersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-team-members',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard-team-members.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard-team-members/dashboard-team-members.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard-team-members.component.scss */ "./src/app/dashboard/dashboard-team-members/dashboard-team-members.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_dashboard_data_service__WEBPACK_IMPORTED_MODULE_3__["DashboardDataService"]])
    ], DashboardTeamMembersComponent);
    return DashboardTeamMembersComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-teams/dashboard-teams.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-teams/dashboard-teams.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#members {\n  width: 100%;\n}\n\nmat-card {\n  width: 100%;\n  cursor: pointer;\n}\n\n#name {\n  margin-left: 6px;\n}\n\nmat-chip {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXdlaWxpL0Rlc2t0b3AvUkVBQ0gvcmVhY2gvSGF6bWF0LWNsaWVudC9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQtdGVhbXMvZGFzaGJvYXJkLXRlYW1zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLXRlYW1zL2Rhc2hib2FyZC10ZWFtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC10ZWFtcy9kYXNoYm9hcmQtdGVhbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWVtYmVycyB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNuYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG5tYXQtY2hpcCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSIsIiNtZW1iZXJzIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI25hbWUge1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG5tYXQtY2hpcCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/dashboard/dashboard-teams/dashboard-teams.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-teams/dashboard-teams.component.ts ***!
  \************************************************************************/
/*! exports provided: DashboardTeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardTeamsComponent", function() { return DashboardTeamsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _dashboard_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard-data.service */ "./src/app/dashboard/dashboard-data.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/snack-bar.js");




var DashboardTeamsComponent = /** @class */ (function () {
    function DashboardTeamsComponent(dashboardDataService, _snackBar) {
        this.dashboardDataService = dashboardDataService;
        this._snackBar = _snackBar;
        this.elements = [
            { state: "Danger", value: "danger" },
            { state: "Teams", value: "teams" },
            { state: "All", value: "all" }
        ];
        this.members = [
            {
                name: 'Truck 1',
                crew: [
                    { lName: 'Tomson', fName: 'Dave', battery: 100, time1: '00:33', time2: '00.00', image: "https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2018/03/13/5aa71f038457f845c97ed1f3_Matt-Parziale.jpg.rend.hgtvcom.1850.1321.suffix/1573238222231.jpeg", inDanger: false },
                    { lName: 'Smith', fName: 'Tim', battery: 75, time1: '00:28', time2: '00.01', image: "https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2018/03/13/5aa71f038457f845c97ed1f3_Matt-Parziale.jpg.rend.hgtvcom.1850.1321.suffix/1573238222231.jpeg", inDanger: false },
                    { lName: 'Adams', fName: 'Herold', battery: 50, time1: '00:00', time2: '00.22', image: "https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2018/03/13/5aa71f038457f845c97ed1f3_Matt-Parziale.jpg.rend.hgtvcom.1850.1321.suffix/1573238222231.jpeg", inDanger: false },
                    { lName: 'Olsen', fName: 'Benito', battery: 100, time1: '00:33', time2: '00.00', image: "https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2018/03/13/5aa71f038457f845c97ed1f3_Matt-Parziale.jpg.rend.hgtvcom.1850.1321.suffix/1573238222231.jpeg", inDanger: false },
                ]
            },
            {
                name: 'Engine 1',
                crew: [
                    { lName: 'Beil', fName: 'Nel', battery: 100, time1: '00:33', time2: '00.00', image: "https://www.providentins.com/wp-content/plugins/phastpress/phast.php?service=images&src=https%3A%2F%2Fwww.providentins.com%2Fwp-content%2Fuploads%2F2018%2F11%2FThe-Benefits-of-Becoming-a-Volunteer-Firefighter-e1542385706799.jpg&cacheMarker=1542385706-110224&token=0e83c21d87ae5120", inDanger: true },
                    { lName: 'Church', fName: 'Carl', battery: 100, time1: '00:33', time2: '00.00', image: "https://www.providentins.com/wp-content/plugins/phastpress/phast.php?service=images&src=https%3A%2F%2Fwww.providentins.com%2Fwp-content%2Fuploads%2F2018%2F11%2FThe-Benefits-of-Becoming-a-Volunteer-Firefighter-e1542385706799.jpg&cacheMarker=1542385706-110224&token=0e83c21d87ae5120", inDanger: true },
                    { lName: 'Churchil', fName: 'Jaxx', battery: 100, time1: '00:33', time2: '00.00', image: "https://www.providentins.com/wp-content/plugins/phastpress/phast.php?service=images&src=https%3A%2F%2Fwww.providentins.com%2Fwp-content%2Fuploads%2F2018%2F11%2FThe-Benefits-of-Becoming-a-Volunteer-Firefighter-e1542385706799.jpg&cacheMarker=1542385706-110224&token=0e83c21d87ae5120", inDanger: false },
                    { lName: 'Wickens', fName: 'Rajan', battery: 100, time1: '00:33', time2: '00.00', image: "https://www.providentins.com/wp-content/plugins/phastpress/phast.php?service=images&src=https%3A%2F%2Fwww.providentins.com%2Fwp-content%2Fuploads%2F2018%2F11%2FThe-Benefits-of-Becoming-a-Volunteer-Firefighter-e1542385706799.jpg&cacheMarker=1542385706-110224&token=0e83c21d87ae5120", inDanger: false },
                    { lName: 'Bate', fName: 'Jaxon', battery: 100, time1: '00:33', time2: '00.00', image: "https://www.providentins.com/wp-content/plugins/phastpress/phast.php?service=images&src=https%3A%2F%2Fwww.providentins.com%2Fwp-content%2Fuploads%2F2018%2F11%2FThe-Benefits-of-Becoming-a-Volunteer-Firefighter-e1542385706799.jpg&cacheMarker=1542385706-110224&token=0e83c21d87ae5120", inDanger: false },
                    { lName: 'May', fName: 'Rehan', battery: 100, time1: '00:33', time2: '00.00', image: "https://www.providentins.com/wp-content/plugins/phastpress/phast.php?service=images&src=https%3A%2F%2Fwww.providentins.com%2Fwp-content%2Fuploads%2F2018%2F11%2FThe-Benefits-of-Becoming-a-Volunteer-Firefighter-e1542385706799.jpg&cacheMarker=1542385706-110224&token=0e83c21d87ae5120", inDanger: false },
                    { lName: 'Tang', fName: 'Luna', battery: 100, time1: '00:33', time2: '00.00', image: "https://www.providentins.com/wp-content/plugins/phastpress/phast.php?service=images&src=https%3A%2F%2Fwww.providentins.com%2Fwp-content%2Fuploads%2F2018%2F11%2FThe-Benefits-of-Becoming-a-Volunteer-Firefighter-e1542385706799.jpg&cacheMarker=1542385706-110224&token=0e83c21d87ae5120", inDanger: false },
                ]
            },
            {
                name: 'Medic 1',
                crew: [
                    { lName: 'Ramon', fName: 'Don', battery: 100, time1: '00:33', time2: '00.00', image: "https://www.safetybydesigninc.com/wp-content/uploads/2019/01/emt-paramedic-medic-staffing-texas.jpg", inDanger: false },
                    { lName: 'Notham', fName: 'Troy', battery: 100, time1: '00:33', time2: '00.00', image: "https://www.safetybydesigninc.com/wp-content/uploads/2019/01/emt-paramedic-medic-staffing-texas.jpg", inDanger: false },
                    { lName: 'West', fName: 'Mitch', battery: 100, time1: '00:33', time2: '00.00', image: "https://www.safetybydesigninc.com/wp-content/uploads/2019/01/emt-paramedic-medic-staffing-texas.jpg", inDanger: false },
                    { lName: 'East', fName: 'Nigel', battery: 100, time1: '00:33', time2: '00.00', image: "https://www.safetybydesigninc.com/wp-content/uploads/2019/01/emt-paramedic-medic-staffing-texas.jpg", inDanger: false }
                ]
            },
            {
                name: 'Rescue 1',
                crew: [
                    { lName: 'Drao', fName: 'Talor', battery: 100, time1: '00:33', time2: '00.00', image: "https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.nj.com/home/njo-media/width2048/img/centraljersey_impact/photo/michael-kenwoodjpg-75320f07ebf1a3d6.jpg", inDanger: false },
                    { lName: 'Zhang', fName: 'Rui', battery: 100, time1: '00:33', time2: '00.00', image: "https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.nj.com/home/njo-media/width2048/img/centraljersey_impact/photo/michael-kenwoodjpg-75320f07ebf1a3d6.jpg", inDanger: false },
                    { lName: 'Lafel', fName: 'Tony', battery: 100, time1: '00:33', time2: '00.00', image: "https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.nj.com/home/njo-media/width2048/img/centraljersey_impact/photo/michael-kenwoodjpg-75320f07ebf1a3d6.jpg", inDanger: false },
                    { lName: 'Raynold', fName: 'Luke', battery: 100, time1: '00:33', time2: '00.00', image: "https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.nj.com/home/njo-media/width2048/img/centraljersey_impact/photo/michael-kenwoodjpg-75320f07ebf1a3d6.jpg", inDanger: false }
                ]
            }
        ];
    }
    DashboardTeamsComponent.prototype.ngOnInit = function () {
        if ((window.innerWidth <= 1550 && window.innerWidth >= 1201)) {
            this.breakpoint = 3;
        }
        else if ((window.innerWidth <= 1200)) {
            this.breakpoint = 2;
        }
        else {
            this.breakpoint = 4;
        }
        // let all = this.members.reduce((prev, next) => prev.concat(next.crew), []);
        // let result = all.filter(obj => obj.inDanger === true);
        // this.dashboardDataService.publishDashboardObj(result);
        // console.log(result);
    };
    DashboardTeamsComponent.prototype.onResize = function (event) {
        if ((event.target.innerWidth <= 1550 && event.target.innerWidth >= 1201)) {
            this.breakpoint = 3;
        }
        else if ((event.target.innerWidth <= 1200)) {
            this.breakpoint = 2;
        }
        else {
            this.breakpoint = 4;
        }
    };
    DashboardTeamsComponent.prototype.getSelectedChip = function (element) {
        this.selectedChip = element;
        // if (element.value === "all") {
        //   this.deviceAssignment.filter ="";
        // }
        // else {
        //   this.deviceAssignment.filter = element.value.trim().toLowerCase();
        // }
    };
    DashboardTeamsComponent.prototype.onSelect = function (member) {
        this.selectedTeam = member;
        this.dashboardDataService.publishDashboardObj(this.selectedTeam);
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    };
    DashboardTeamsComponent.ctorParameters = function () { return [
        { type: _dashboard_data_service__WEBPACK_IMPORTED_MODULE_2__["DashboardDataService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
    ]; };
    DashboardTeamsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-teams',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard-teams.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard-teams/dashboard-teams.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard-teams.component.scss */ "./src/app/dashboard/dashboard-teams/dashboard-teams.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_dashboard_data_service__WEBPACK_IMPORTED_MODULE_2__["DashboardDataService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], DashboardTeamsComponent);
    return DashboardTeamsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#content {\n  display: flex;\n  width: 100%;\n}\n\n#members {\n  width: 65%;\n  margin: 0px 24px 0px 0px;\n}\n\n#team {\n  width: 35%;\n  margin: 0px 24px 0px 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXdlaWxpL0Rlc2t0b3AvUkVBQ0gvcmVhY2gvSGF6bWF0LWNsaWVudC9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLHdCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI21lbWJlcnMge1xuICAgIHdpZHRoOiA2NSU7XG4gICAgbWFyZ2luOiAwcHggMjRweCAwcHggMHB4O1xufVxuXG4jdGVhbSB7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBtYXJnaW46IDBweCAyNHB4IDBweCAyNHB4O1xufSIsIiNjb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNtZW1iZXJzIHtcbiAgd2lkdGg6IDY1JTtcbiAgbWFyZ2luOiAwcHggMjRweCAwcHggMHB4O1xufVxuXG4jdGVhbSB7XG4gIHdpZHRoOiAzNSU7XG4gIG1hcmdpbjogMHB4IDI0cHggMHB4IDI0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/demo-material-module/demo-material-module.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/demo-material-module/demo-material-module.module.ts ***!
  \*********************************************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/tree.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");












































var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_43__["MatFormFieldModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());



/***/ }),

/***/ "./src/app/device-assignment/device-assignment.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/device-assignment/device-assignment.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .chipClass.mat-chip-selected {\n  border: 1px solid rgba(0, 0, 160, 0.8) !important;\n  background: rgba(0, 0, 160, 0.7) !important;\n  color: white !important;\n}\n\n.personImage {\n  width: 4.5rem;\n  height: 4.5rem;\n  border: lightgrey solid 2px;\n  border-radius: 50%;\n  margin-top: 0.2rem;\n  margin-bottom: 0.2rem;\n}\n\n.personIcons {\n  width: 2rem;\n  height: 2rem;\n  padding-left: 0rem;\n}\n\n::ng-deep .personIcons > svg {\n  width: 2rem !important;\n  height: 3rem !important;\n  padding-left: 0rem;\n}\n\n.addIcons {\n  width: 2rem;\n  height: 2rem;\n  padding-left: 0rem;\n}\n\n::ng-deep .addIcons > svg {\n  width: 2rem !important;\n  height: 3rem !important;\n  padding-left: 4rem;\n}\n\nth.mat-header-cell {\n  text-align: center !important;\n  border: 0.5px solid #CCC;\n  padding: 0 !important;\n  background-color: #0000A0;\n  color: white;\n}\n\ntd.mat-cell {\n  text-align: center !important;\n  border: 0.5px solid #CCC;\n  padding: 0 !important;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #f5f5f5;\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\ntr.mat-header-row {\n  height: 30px;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  font-weight: lighter;\n  height: 104px;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n\n#table {\n  margin-top: 24px;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 25%;\n  margin-left: 8px;\n}\n\ntable {\n  width: 100%;\n}\n\nmat-chip {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXdlaWxpL0Rlc2t0b3AvUkVBQ0gvcmVhY2gvSGF6bWF0LWNsaWVudC9zcmMvYXBwL2RldmljZS1hc3NpZ25tZW50L2RldmljZS1hc3NpZ25tZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZXZpY2UtYXNzaWdubWVudC9kZXZpY2UtYXNzaWdubWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlEQUFBO0VBQ0EsMkNBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREdBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURJQTtFQUNFLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRE1BO0VBQ0UsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FDSEY7O0FETUE7RUFDRSxTQUFBO0FDSEY7O0FETUE7RUFDRSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0UsbUJBQUE7QUNIRjs7QURNQTtFQUNFLFlBQUE7QUNIRjs7QURNQTtFQUNFLHNCQUFBO0FDSEY7O0FETUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUVBLG9CQUFBO0VBRUEsYUFBQTtBQ0xGOztBRFFBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7QUNMRjs7QURRQTtFQUNFLFlBQUE7QUNMRjs7QURRQTtFQUNFLGdCQUFBO0FDTEY7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDTEY7O0FEUUE7RUFDRSxXQUFBO0FDTEY7O0FEUUE7RUFDRSxlQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9kZXZpY2UtYXNzaWdubWVudC9kZXZpY2UtYXNzaWdubWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAuY2hpcENsYXNzLm1hdC1jaGlwLXNlbGVjdGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAxNjAsIC44KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDE2MCwgLjcpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ucGVyc29uSW1hZ2Uge1xuICB3aWR0aDogNC41cmVtO1xuICBoZWlnaHQ6IDQuNXJlbTtcbiAgYm9yZGVyOiBsaWdodGdyZXkgc29saWQgMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xufVxuXG4ucGVyc29uSWNvbnMge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBwYWRkaW5nLWxlZnQ6IDByZW07XG5cbn1cblxuOjpuZy1kZWVwIC5wZXJzb25JY29ucz5zdmcge1xuICB3aWR0aDogMnJlbSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwcmVtO1xufVxuXG4uYWRkSWNvbnMge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBwYWRkaW5nLWxlZnQ6IDByZW07XG59XG5cbjo6bmctZGVlcCAuYWRkSWNvbnM+c3ZnIHtcbiAgd2lkdGg6IDJyZW0gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogNHJlbTtcbn1cblxuXG50aC5tYXQtaGVhZGVyLWNlbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjQ0NDO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwQTA7XG4gIGNvbG9yOiB3aGl0ZTtcblxuXG59XG5cbnRkLm1hdC1jZWxsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMC41cHggc29saWQgI0NDQztcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xuICBoZWlnaHQ6IDA7XG59XG5cbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbnRyLm1hdC1oZWFkZXItcm93IHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kaWFncmFtIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgLy8gcGFkZGluZzogOHB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgLy8gbWFyZ2luOiA4cHggMDtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuI3RhYmxlIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMjUlO1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtY2hpcCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iLCI6Om5nLWRlZXAgLmNoaXBDbGFzcy5tYXQtY2hpcC1zZWxlY3RlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMTYwLCAwLjgpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMTYwLCAwLjcpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ucGVyc29uSW1hZ2Uge1xuICB3aWR0aDogNC41cmVtO1xuICBoZWlnaHQ6IDQuNXJlbTtcbiAgYm9yZGVyOiBsaWdodGdyZXkgc29saWQgMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xufVxuXG4ucGVyc29uSWNvbnMge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBwYWRkaW5nLWxlZnQ6IDByZW07XG59XG5cbjo6bmctZGVlcCAucGVyc29uSWNvbnMgPiBzdmcge1xuICB3aWR0aDogMnJlbSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwcmVtO1xufVxuXG4uYWRkSWNvbnMge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBwYWRkaW5nLWxlZnQ6IDByZW07XG59XG5cbjo6bmctZGVlcCAuYWRkSWNvbnMgPiBzdmcge1xuICB3aWR0aDogMnJlbSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiA0cmVtO1xufVxuXG50aC5tYXQtaGVhZGVyLWNlbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjQ0NDO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwQTA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxudGQubWF0LWNlbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjQ0NDO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XG4gIGhlaWdodDogMDtcbn1cblxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5cbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxudHIubWF0LWhlYWRlci1yb3cge1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRpYWdyYW0ge1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuI3RhYmxlIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMjUlO1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtY2hpcCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/device-assignment/device-assignment.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/device-assignment/device-assignment.component.ts ***!
  \******************************************************************/
/*! exports provided: DeviceAssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceAssignmentComponent", function() { return DeviceAssignmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sort.js");
/* harmony import */ var _device_assignment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./device-assignment */ "./src/app/device-assignment/device-assignment.ts");
/* harmony import */ var _device_assignment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-assignment.service */ "./src/app/device-assignment/device-assignment.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");









var DeviceAssignmentComponent = /** @class */ (function () {
    function DeviceAssignmentComponent(deviceAssignmentService) {
        this.deviceAssignmentService = deviceAssignmentService;
        this.elements = [
            { state: "Unassigned", value: "false" },
            { state: "Assigned", value: "true" },
            { state: "All", value: "all" }
        ];
        this.devices = [];
        this.descriptions = [];
        this.displayedColumns = ['ImageUrl', 'FirstName', 'LastName', 'AssignedDeviceID', 'Description'];
        this.deviceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            AssignedDeviceID: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required)
        });
    }
    DeviceAssignmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('==============> deviceAssignmentComponent ngOnInit');
        this.deviceAssignmentService.getDevicesData().subscribe(function (data) {
            _this.devices = data.reduce(function (a, b) {
                var t = { "value": b.DeviceID, "viewValue": b.DeviceID };
                a.push(t);
                return a;
            }, []);
        });
        this.deviceAssignmentService.getDevicesData().subscribe(function (data) {
            _this.descriptions = data.reduce(function (a, b) {
                var h = { "value": b.Description, "viewValue": b.Description };
                a.push(h);
                return a;
            }, []);
        });
        this.getDeviceAssignmentData();
        this.getSelectedChip({ state: "Unassigned", value: "false" });
        this.deviceAssignmentData.paginator = this.paginator;
        this.deviceAssignmentData.sort = this.sort;
    };
    DeviceAssignmentComponent.prototype.getDeviceAssignmentData = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])([this.deviceAssignmentService.getPerson(), this.deviceAssignmentService.getDevicesData()]).subscribe(function (data) {
            if (data.length > 0) {
                var people = data[0];
                var devices = data[1];
                _this.deviceInformation = _this.deviceAssignmentThreshold(people, devices);
                _this.deviceAssignmentData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](Array.from(_this.deviceInformation.values()));
                _this.deviceAssignmentData.paginator = _this.paginator;
                _this.deviceAssignmentData.sort = _this.sort;
                _this.getSelectedChip({ state: "Unassigned", value: "false" });
            }
        }, function (error) {
            console.log('Device Assignment component is not working', error);
        });
    };
    DeviceAssignmentComponent.prototype.deviceAssignmentThreshold = function (people, devices) {
        return people.reduce(function (a, p) {
            var deviceList = devices.filter(function (d) { return d.PersonID == p.PersonID; });
            var deviceName = deviceList.length > 0 ? deviceList[0] : null;
            var device = new _device_assignment__WEBPACK_IMPORTED_MODULE_5__["DeviceAssignmentData"]();
            if (p.isDelete == false) {
                device.ImageUrl = p.ImageUrl;
                device.FirstName = p.FirstName;
                device.LastName = p.LastName;
                // device.AssignedDeviceID = deviceName ? deviceName.DeviceID : null;
                device.Description = deviceName ? deviceName.Description : null;
                device.IsAssigned = false;
                a.push(device);
            }
            return a;
        }, []);
    };
    DeviceAssignmentComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.deviceAssignmentData.filter = filterValue.trim().toLowerCase();
    };
    DeviceAssignmentComponent.prototype.getSelectedChip = function (element) {
        this.selectedChip = element;
        if (element.value === "all") {
            this.deviceAssignmentData.filter = "";
        }
        else {
            this.deviceAssignmentData.filter = element.value.trim().toLowerCase();
        }
    };
    DeviceAssignmentComponent.prototype.onChangeDevice = function (AssignedDeviceID) {
        this.deviceForm.value['AssignedDeviceID'] = AssignedDeviceID;
    };
    DeviceAssignmentComponent.ctorParameters = function () { return [
        { type: _device_assignment_service__WEBPACK_IMPORTED_MODULE_6__["DeviceAssignmentService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], DeviceAssignmentComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], DeviceAssignmentComponent.prototype, "sort", void 0);
    DeviceAssignmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-assignment',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./device-assignment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/device-assignment/device-assignment.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./device-assignment.component.scss */ "./src/app/device-assignment/device-assignment.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_device_assignment_service__WEBPACK_IMPORTED_MODULE_6__["DeviceAssignmentService"]])
    ], DeviceAssignmentComponent);
    return DeviceAssignmentComponent;
}());



/***/ }),

/***/ "./src/app/device-assignment/device-assignment.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/device-assignment/device-assignment.service.ts ***!
  \****************************************************************/
/*! exports provided: DeviceAssignmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceAssignmentService", function() { return DeviceAssignmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _restheader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../restheader.service */ "./src/app/restheader.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var DeviceAssignmentService = /** @class */ (function () {
    function DeviceAssignmentService(httpClient, restheaderService) {
        this.httpClient = httpClient;
        this.restheaderService = restheaderService;
    }
    // getDeviceAssignmentData(): Observable<DeviceAssignmentData[]> {
    //   return this.httpClient.get<any>(environment.host + 'deviceassignment_json', this.restheaderService.httpheader);
    // }
    DeviceAssignmentService.prototype.getDevicesData = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'device', this.restheaderService.httpheader);
    };
    DeviceAssignmentService.prototype.getPerson = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'person', this.restheaderService.httpheader);
    };
    DeviceAssignmentService.prototype.getPersonById = function (id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'person/' + id + '/', this.restheaderService.httpheader);
    };
    DeviceAssignmentService.prototype.assignDevice = function (personID, deviceAssignment) {
        var requestBody = {
            ImageUrl: deviceAssignment.ImageUrl,
            FirstName: deviceAssignment.FirstName,
            LastName: deviceAssignment.LastName,
            AssignedDeviceID: deviceAssignment.AssignedDeviceID,
            Description: deviceAssignment.Description,
            PersonID: personID
        };
    };
    DeviceAssignmentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _restheader_service__WEBPACK_IMPORTED_MODULE_3__["RestheaderService"] }
    ]; };
    DeviceAssignmentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _restheader_service__WEBPACK_IMPORTED_MODULE_3__["RestheaderService"]])
    ], DeviceAssignmentService);
    return DeviceAssignmentService;
}());



/***/ }),

/***/ "./src/app/device-assignment/device-assignment.ts":
/*!********************************************************!*\
  !*** ./src/app/device-assignment/device-assignment.ts ***!
  \********************************************************/
/*! exports provided: DeviceAssignmentData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceAssignmentData", function() { return DeviceAssignmentData; });
var DeviceAssignmentData = /** @class */ (function () {
    function DeviceAssignmentData() {
    }
    return DeviceAssignmentData;
}());



/***/ }),

/***/ "./src/app/devices/devices-add/devices-add.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/devices/devices-add/devices-add.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  width: 100%;\n}\n\n.mat-toolbar {\n  background: #0000A0;\n  color: white;\n}\n\nform.normal-form {\n  margin: 10px;\n}\n\n.controls-container {\n  width: 100%;\n  padding: 5%;\n}\n\n.controls-container > * {\n  width: 100%;\n}\n\n.mat-grid-tile {\n  padding-top: 0px !important;\n}\n\n.error-message {\n  text-align: center;\n  color: red;\n}\n\n.mat-raised-button {\n  margin: 10px 15px;\n}\n\n.mat-stroked-button {\n  margin: 10px 15px;\n}\n\n.mat-stroked-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n  background-color: #1003a0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXdlaWxpL0Rlc2t0b3AvUkVBQ0gvcmVhY2gvSGF6bWF0LWNsaWVudC9zcmMvYXBwL2RldmljZXMvZGV2aWNlcy1hZGQvZGV2aWNlcy1hZGQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RldmljZXMvZGV2aWNlcy1hZGQvZGV2aWNlcy1hZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUNFSjs7QURDQTtFQUNJLFlBQUE7QUNFSjs7QURBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FDR0o7O0FEREE7RUFDSSxXQUFBO0FDSUo7O0FEREE7RUFDSSwyQkFBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDS0o7O0FERkE7RUFDRSxpQkFBQTtBQ0tGOztBREhBO0VBQ0UsaUJBQUE7QUNNRjs7QURKQTtFQUNFLHlCQUFBO0FDT0YiLCJmaWxlIjoic3JjL2FwcC9kZXZpY2VzL2RldmljZXMtYWRkL2RldmljZXMtYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ubWF0LXRvb2xiYXJ7XG4gICAgYmFja2dyb3VuZDogIzAwMDBBMDtcbiAgICBjb2xvcjogd2hpdGU7XG5cbn1cbmZvcm0ubm9ybWFsLWZvcm17XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuLmNvbnRyb2xzLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1JTtcbn1cbi5jb250cm9scy1jb250YWluZXIgPiAqIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbi5tYXQtZ3JpZC10aWxlIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG4uZXJyb3ItbWVzc2FnZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbntcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XG59XG4ubWF0LXN0cm9rZWQtYnV0dG9ue1xuICBtYXJnaW46IDEwcHggMTVweDtcbn1cbi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1mYWIubWF0LXByaW1hcnksIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnl7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDAzYTA7XG59XG4iLCJmb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6ICMwMDAwQTA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuZm9ybS5ub3JtYWwtZm9ybSB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmNvbnRyb2xzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1JTtcbn1cblxuLmNvbnRyb2xzLWNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1ncmlkLXRpbGUge1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmVkO1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b24ge1xuICBtYXJnaW46IDEwcHggMTVweDtcbn1cblxuLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gIG1hcmdpbjogMTBweCAxNXB4O1xufVxuXG4ubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtZmFiLm1hdC1wcmltYXJ5LCAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMDNhMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/devices/devices-add/devices-add.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/devices/devices-add/devices-add.component.ts ***!
  \**************************************************************/
/*! exports provided: DevicesAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesAddComponent", function() { return DevicesAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_restheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/restheader.service */ "./src/app/restheader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _devices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../devices.service */ "./src/app/devices/devices.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _people_people_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../people/people.service */ "./src/app/people/people.service.ts");









var DevicesAddComponent = /** @class */ (function () {
    function DevicesAddComponent(devicesService, httpClient, restHeaderService, dialogRef, notificationService, peopleService, data) {
        this.devicesService = devicesService;
        this.httpClient = httpClient;
        this.restHeaderService = restHeaderService;
        this.dialogRef = dialogRef;
        this.notificationService = notificationService;
        this.peopleService = peopleService;
        this.data = data;
        this.persons = [];
        this.serverErrors = [];
        this.Types = [
            { value: 'General', viewValue: "General" },
            { value: 'Type 1', viewValue: "Type 1" },
            { value: 'Type 2', viewValue: "Type 2" },
        ];
        this.STATUS_CHOICES = [
            { value: 'Available', viewValue: "Available" },
            { value: 'Not Available', viewValue: "Not Available" },
            { value: 'Under Repair', viewValue: "Under Repair" },
        ];
        this.editDevice = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, data);
        if (this.editDevice.DevicePK == null) {
            this.action = 'New';
        }
        else {
            this.action = 'Edit';
        }
    }
    DevicesAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.action == 'Edit') {
            this.devicesFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                DevicePK: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editDevice.DevicePK),
                DeviceID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editDevice.DeviceID, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
                IP: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editDevice.IP, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
                Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editDevice.Description, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
                Type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editDevice.Type, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
                Status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editDevice.Status, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
                PersonID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editDevice.Person)
            });
            this.devicesFormGroup.controls.PersonID.setValue(this.editDevice.PersonID);
        }
        else {
            this.devicesFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                DeviceID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
                IP: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
                Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
                Type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
                Status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
                PersonID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
            });
        }
        this.peopleService.getPerson().subscribe(function (data) {
            _this.persons = data.reduce(function (a, b) {
                var t = { "value": b.PersonID, "viewValue": b.FirstName + ' ' + b.LastName };
                a.push(t);
                return a;
            }, []);
        });
    };
    DevicesAddComponent.prototype.saveDevice = function (device) {
        var _this = this;
        if (device.Status !== 'Available' && device.PersonID) {
            var formControl = this.devicesFormGroup.get('PersonID');
            formControl.setErrors({
                fieldError: 'Person can be assigned only when the device status is Available'
            });
        }
        else if (this.action == 'Edit') {
            this.devicesService.editDevice(device)
                .subscribe(function (data) {
                var devicedata = data;
                if (devicedata.PersonID) {
                    var person = _this.persons.find(function (person) { return (person.value === devicedata.PersonID); });
                    if (person)
                        devicedata.Person = person.viewValue;
                }
                _this.notificationService.success(' Device updated successfully');
                _this.dialogRef.close({ event: _this.action, data: devicedata });
            }, function (error) {
                _this.throwErrors(error);
            });
        }
        else {
            this.devicesService.addDevice(device)
                .subscribe(function (data) {
                var devicedata = data;
                if (devicedata.PersonID) {
                    var person = _this.persons.find(function (person) { return (person.value === devicedata.PersonID); });
                    if (person)
                        devicedata.Person = person.viewValue;
                }
                _this.notificationService.success(' Device added successfully');
                _this.dialogRef.close({ event: _this.action, data: devicedata });
            }, function (error) {
                _this.throwErrors(error);
            });
        }
    };
    DevicesAddComponent.prototype.throwErrors = function (error) {
        this.serverErrors = [];
        var errors = [];
        var frmGroup = this.devicesFormGroup;
        Object.keys(error).map(function (key) {
            if (key == 'error') {
                var err_1 = error[key];
                Object.keys(err_1).map(function (key) {
                    var formControl = frmGroup.get(key);
                    if (formControl) {
                        // activate the error message
                        var msg_1 = '';
                        if (key == 'IP') {
                            err_1[key].forEach(function (element) {
                                // console.log('error message==='+element);
                                if (element.includes('valid'))
                                    msg_1 = 'Please enter a valid IPv4 or IPv6 address';
                                if (element.includes('already'))
                                    msg_1 = 'IP address already exists. Please enter a unique IP address';
                            });
                        }
                        if (key == 'DeviceID') {
                            err_1[key].forEach(function (element) {
                                if (element.includes('valid'))
                                    msg_1 = 'Enter valid DeviceID.';
                                if (element.includes('already'))
                                    msg_1 = 'Device ID already exists. Please enter a unique Device ID';
                            });
                        }
                        if (!msg_1) {
                            err_1[key].forEach(function (element) {
                                msg_1 = element;
                            });
                        }
                        formControl.setErrors({
                            fieldError: msg_1
                        });
                    }
                    else {
                        err_1[key].forEach(function (element) {
                            errors.push(element);
                        });
                    }
                });
            }
        });
        this.serverErrors = this.serverErrors.concat(errors);
    };
    DevicesAddComponent.prototype.cancelDevice = function () {
        this.notificationService.warn('Operation Cancelled');
        this.dialogRef.close({ event: '' });
    };
    DevicesAddComponent.ctorParameters = function () { return [
        { type: _devices_service__WEBPACK_IMPORTED_MODULE_5__["DevicesService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: src_app_restheader_service__WEBPACK_IMPORTED_MODULE_2__["RestheaderService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] },
        { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
        { type: _people_people_service__WEBPACK_IMPORTED_MODULE_8__["PeopleService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DevicesAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-devices-add',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./devices-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/devices/devices-add/devices-add.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./devices-add.component.scss */ "./src/app/devices/devices-add/devices-add.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_devices_service__WEBPACK_IMPORTED_MODULE_5__["DevicesService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            src_app_restheader_service__WEBPACK_IMPORTED_MODULE_2__["RestheaderService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"],
            _shared_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"],
            _people_people_service__WEBPACK_IMPORTED_MODULE_8__["PeopleService"], Object])
    ], DevicesAddComponent);
    return DevicesAddComponent;
}());



/***/ }),

/***/ "./src/app/devices/devices.component.scss":
/*!************************************************!*\
  !*** ./src/app/devices/devices.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".personImage {\n  width: 4.5rem;\n  height: 4.5rem;\n  border: lightgrey solid 2px;\n  border-radius: 50%;\n  margin-top: 0.2rem;\n  margin-bottom: 0.2rem;\n}\n\n.personIcons {\n  width: 2rem;\n  height: 2rem;\n  padding-left: 0rem;\n}\n\n::ng-deep .personIcons > svg {\n  width: 2rem !important;\n  height: 3rem !important;\n  padding-left: 0rem;\n}\n\n.addIcons {\n  width: 2rem;\n  height: 2rem;\n  padding-left: 0rem;\n}\n\n::ng-deep .addIcons > svg {\n  width: 2rem !important;\n  height: 3rem !important;\n  padding-left: 4rem;\n}\n\nth.mat-header-cell {\n  text-align: center !important;\n  border: 0.5px solid #CCC;\n  padding: 0 !important;\n  background-color: #0000A0;\n  color: white;\n}\n\ntd.mat-cell {\n  text-align: center !important;\n  border: 0.5px solid #CCC;\n  padding: 0 !important;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #f5f5f5;\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\ntr.mat-header-row {\n  height: 30px;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  font-weight: lighter;\n  height: 104px;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXdlaWxpL0Rlc2t0b3AvUkVBQ0gvcmVhY2gvSGF6bWF0LWNsaWVudC9zcmMvYXBwL2RldmljZXMvZGV2aWNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGV2aWNlcy9kZXZpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREdBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURJQTtFQUNFLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRE1BO0VBQ0UsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FDSEY7O0FETUE7RUFDRSxTQUFBO0FDSEY7O0FETUE7RUFDRSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0UsbUJBQUE7QUNIRjs7QURNQTtFQUNFLFlBQUE7QUNIRjs7QURNQTtFQUNFLHNCQUFBO0FDSEY7O0FETUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUVBLG9CQUFBO0VBRUEsYUFBQTtBQ0xGOztBRFFBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7QUNMRjs7QURRQTtFQUNFLFlBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL2RldmljZXMvZGV2aWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZXJzb25JbWFnZSB7XG4gIHdpZHRoOiA0LjVyZW07XG4gIGhlaWdodDogNC41cmVtO1xuICBib3JkZXI6IGxpZ2h0Z3JleSBzb2xpZCAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XG59XG5cbi5wZXJzb25JY29ucyB7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIHBhZGRpbmctbGVmdDogMHJlbTtcblxufVxuXG46Om5nLWRlZXAgLnBlcnNvbkljb25zPnN2ZyB7XG4gIHdpZHRoOiAycmVtICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDByZW07XG59XG5cbi5hZGRJY29ucyB7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIHBhZGRpbmctbGVmdDogMHJlbTtcbn1cblxuOjpuZy1kZWVwIC5hZGRJY29ucz5zdmcge1xuICB3aWR0aDogMnJlbSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiA0cmVtO1xufVxuXG5cbnRoLm1hdC1oZWFkZXItY2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNDQ0M7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDBBMDtcbiAgY29sb3I6IHdoaXRlO1xuXG5cbn1cblxudGQubWF0LWNlbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjQ0NDO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XG4gIGhlaWdodDogMDtcbn1cblxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5cbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxudHIubWF0LWhlYWRlci1yb3cge1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRpYWdyYW0ge1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAvLyBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAvLyBtYXJnaW46IDhweCAwO1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LXN5bWJvbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcbiAgb3BhY2l0eTogMC41O1xufVxuIiwiLnBlcnNvbkltYWdlIHtcbiAgd2lkdGg6IDQuNXJlbTtcbiAgaGVpZ2h0OiA0LjVyZW07XG4gIGJvcmRlcjogbGlnaHRncmV5IHNvbGlkIDJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tdG9wOiAwLjJyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcbn1cblxuLnBlcnNvbkljb25zIHtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwcmVtO1xufVxuXG46Om5nLWRlZXAgLnBlcnNvbkljb25zID4gc3ZnIHtcbiAgd2lkdGg6IDJyZW0gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMHJlbTtcbn1cblxuLmFkZEljb25zIHtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwcmVtO1xufVxuXG46Om5nLWRlZXAgLmFkZEljb25zID4gc3ZnIHtcbiAgd2lkdGg6IDJyZW0gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogNHJlbTtcbn1cblxudGgubWF0LWhlYWRlci1jZWxsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMC41cHggc29saWQgI0NDQztcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMEEwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbnRkLm1hdC1jZWxsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMC41cHggc29saWQgI0NDQztcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xuICBoZWlnaHQ6IDA7XG59XG5cbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbnRyLm1hdC1oZWFkZXItcm93IHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kaWFncmFtIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGhlaWdodDogMTA0cHg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtc3ltYm9sIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb24ge1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */");

/***/ }),

/***/ "./src/app/devices/devices.component.ts":
/*!**********************************************!*\
  !*** ./src/app/devices/devices.component.ts ***!
  \**********************************************/
/*! exports provided: DevicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesComponent", function() { return DevicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sort.js");
/* harmony import */ var _devices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./devices.service */ "./src/app/devices/devices.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var _devices_add_devices_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./devices-add/devices-add.component */ "./src/app/devices/devices-add/devices-add.component.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _people_people_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../people/people.service */ "./src/app/people/people.service.ts");












var DevicesComponent = /** @class */ (function () {
    function DevicesComponent(devicesService, dialog, changeDetectorRefs, notificationService, personService) {
        this.devicesService = devicesService;
        this.dialog = dialog;
        this.changeDetectorRefs = changeDetectorRefs;
        this.notificationService = notificationService;
        this.personService = personService;
        this.displayedColumns = ['DeviceID', 'IP', 'Description', 'Type', 'Person', 'Status', 'Actions'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.Types = [
            { value: 'General', viewValue: "General" },
            { value: 'Type 1', viewValue: "Type 1" },
            { value: 'Type 2', viewValue: "Type 2" }
        ];
    }
    DevicesComponent.prototype.ngOnInit = function () {
        this.getDevicesData();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    DevicesComponent.prototype.getDevicesData = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["forkJoin"])([
            this.devicesService.getDevicesData(),
            this.personService.getPerson()
        ]).subscribe(function (data) {
            if (data.length > 0) {
                var deviceInfoData_1 = [];
                var devices = data[0];
                var persons_1 = data[1];
                devices.map(function (device) {
                    deviceInfoData_1.push({
                        DeviceID: device.DeviceID ? device.DeviceID : '',
                        DevicePK: device.DevicePK ? device.DevicePK : '',
                        IP: device.IP ? device.IP : '',
                        Description: device.Description ? device.Description : '',
                        Type: device.Type ? device.Type : '',
                        Status: device.Status ? device.Status : '',
                        PersonID: device.PersonID ? device.PersonID : '',
                        Person: _this.getPersonName(persons_1, device.PersonID)
                    });
                    _this.dataSource.data = deviceInfoData_1;
                });
            }
        }, function (error) {
            console.log('Devices component is not working', error);
        });
    };
    DevicesComponent.prototype.getPersonName = function (persons, personID) {
        var person = persons.find(function (person) { return (person.PersonID === personID); });
        if (person)
            return person.FirstName + ' ' + person.LastName;
        return '';
    };
    DevicesComponent.prototype.addDevice = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        var dialogRef = this.dialog.open(_devices_add_devices_add_component__WEBPACK_IMPORTED_MODULE_8__["DevicesAddComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.event === 'New') {
                var device = void 0;
                device = result.data;
                _this.dataSource.data.push(device);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
        });
    };
    DevicesComponent.prototype.updateDevice = function (device) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        dialogConfig.data = device;
        var dialogRef = this.dialog.open(_devices_add_devices_add_component__WEBPACK_IMPORTED_MODULE_8__["DevicesAddComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.event === 'Edit') {
                var device_1;
                device_1 = result.data;
                var index = _this.dataSource.data.findIndex(function (e) { return e.DevicePK === device_1.DevicePK; });
                _this.dataSource.data[index] = device_1;
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
        });
    };
    DevicesComponent.prototype.deleteDevice = function (id) {
        var displaymessage = 'Are you sure you want to remove this device?';
        this.openDialog(displaymessage, id);
    };
    DevicesComponent.prototype.openDialog = function (message, id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], {
            width: '50rem',
            data: { message: message }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result.event);
            if (result.event === 'Remove') {
                _this.devicesService.deleteDevice(id).subscribe(function (data) {
                    _this.dataSource.data = _this.dataSource.data.filter(function (item) { return item.DevicePK != id.DevicePK; });
                    _this.notificationService.success('Successfully Deleted');
                }, function (error) {
                    console.log('error', error);
                    _this.notificationService.error('Error occurred while deleting the device');
                });
            }
            else if (result.event === 'Cancel') {
                _this.notificationService.warn('Operation Cancelled');
            }
        });
    };
    DevicesComponent.ctorParameters = function () { return [
        { type: _devices_service__WEBPACK_IMPORTED_MODULE_5__["DevicesService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
        { type: _people_people_service__WEBPACK_IMPORTED_MODULE_11__["PeopleService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], DevicesComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], DevicesComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"])
    ], DevicesComponent.prototype, "table", void 0);
    DevicesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-devices',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./devices.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/devices/devices.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./devices.component.scss */ "./src/app/devices/devices.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_devices_service__WEBPACK_IMPORTED_MODULE_5__["DevicesService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _shared_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"],
            _people_people_service__WEBPACK_IMPORTED_MODULE_11__["PeopleService"]])
    ], DevicesComponent);
    return DevicesComponent;
}());



/***/ }),

/***/ "./src/app/devices/devices.service.ts":
/*!********************************************!*\
  !*** ./src/app/devices/devices.service.ts ***!
  \********************************************/
/*! exports provided: DevicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesService", function() { return DevicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_app_restheader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/restheader.service */ "./src/app/restheader.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var DevicesService = /** @class */ (function () {
    function DevicesService(httpClient, restheaderService) {
        this.httpClient = httpClient;
        this.restheaderService = restheaderService;
    }
    DevicesService.prototype.getDevicesData = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'device', this.restheaderService.httpheader);
    };
    DevicesService.prototype.addDevice = function (device) {
        var requestBody = {
            DevicePK: device.DevicePK,
            DeviceID: device.DeviceID,
            IP: device.IP,
            Description: device.Description,
            Type: device.Type,
            Status: device.Status,
            BatteryStatus: 100,
            isDelete: false,
            PersonID: device.PersonID
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'device', requestBody, this.restheaderService.httpheader);
    };
    DevicesService.prototype.editDevice = function (device) {
        var requestBody = {
            DeviceID: device.DeviceID,
            DevicePK: device.DevicePK,
            IP: device.IP,
            Description: device.Description,
            Type: device.Type,
            Status: device.Status,
            // BatteryStatus: 100,
            isDelete: false,
            PersonID: device.PersonID
        };
        var id = device.DevicePK;
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'device/' + id + '/', requestBody, this.restheaderService.httpheader);
    };
    DevicesService.prototype.deleteDevice = function (device) {
        var requestBody = {
            DeviceID: device.DeviceID,
            IP: device.IP,
            Description: device.Description,
            Type: device.Type,
            Status: device.Status,
            isDelete: true
        };
        var id = device.DevicePK;
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'device/' + id + '/', this.restheaderService.httpheader);
    };
    DevicesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_restheader_service__WEBPACK_IMPORTED_MODULE_3__["RestheaderService"] }
    ]; };
    DevicesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_restheader_service__WEBPACK_IMPORTED_MODULE_3__["RestheaderService"]])
    ], DevicesService);
    return DevicesService;
}());



/***/ }),

/***/ "./src/app/dialog/dialog.component.scss":
/*!**********************************************!*\
  !*** ./src/app/dialog/dialog.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-raised-button {\n  margin: 10px 15px;\n}\n\n.mat-stroked-button {\n  margin: 10px 15px;\n}\n\n.mat-stroked-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n  background-color: #1003a0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXdlaWxpL0Rlc2t0b3AvUkVBQ0gvcmVhY2gvSGF6bWF0LWNsaWVudC9zcmMvYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UsaUJBQUE7QUNFRjs7QURBQTtFQUNFLHlCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1yYWlzZWQtYnV0dG9ue1xuICBtYXJnaW46IDEwcHggMTVweDtcbn1cbi5tYXQtc3Ryb2tlZC1idXR0b257XG4gIG1hcmdpbjogMTBweCAxNXB4O1xufVxuLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LWZhYi5tYXQtcHJpbWFyeSwgLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMDNhMDtcbn1cbiIsIi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIG1hcmdpbjogMTBweCAxNXB4O1xufVxuXG4ubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XG59XG5cbi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1mYWIubWF0LXByaW1hcnksIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwM2EwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/dialog/dialog.component.ts":
/*!********************************************!*\
  !*** ./src/app/dialog/dialog.component.ts ***!
  \********************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");



var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogComponent.prototype.onOk = function () {
        this.dialogRef.close({ event: 'Remove' });
    };
    DialogComponent.prototype.onCancel = function () {
        this.dialogRef.close({ event: 'Cancel' });
    };
    DialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/dialog.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dialog.component.scss */ "./src/app/dialog/dialog.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navigation-rail-page br {\n  display: block;\n  margin: -25px 0;\n  content: \"\";\n}\n.navigation-rail-page #thresholds {\n  margin-top: 24px;\n}\n.navigation-rail-page .example-sidenav-content {\n  display: flex;\n  height: 100vh;\n  align-items: baseline;\n  justify-content: center;\n}\n.navigation-rail-page .example-sidenav {\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.navigation-rail-page .nav-button {\n  width: 72px;\n  height: 72px;\n  border-radius: none;\n  margin-bottom: 16px;\n  display: block;\n}\n.navigation-rail-page .nav-button:hover {\n  color: #003399;\n}\n.navigation-rail-page .nav-icon {\n  margin-top: -4px;\n}\n.navigation-rail-page .nav-button-text {\n  font-size: 10px;\n  text-transform: none;\n}\n.navigation-rail-page .selected {\n  color: #003399;\n}\n.navigation-rail-page .selected:hover {\n  color: #003399;\n}\n.navigation-rail-page .fade {\n  -webkit-animation: fade-in 300ms forwards;\n          animation: fade-in 300ms forwards;\n}\n@-webkit-keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.navigation-rail-page .header {\n  text-align: center;\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXdlaWxpL0Rlc2t0b3AvUkVBQ0gvcmVhY2gvSGF6bWF0LWNsaWVudC9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQUo7QURHRTtFQUNFLGdCQUFBO0FDREo7QURJRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQ0ZKO0FES0U7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FDSEo7QURNRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNKSjtBRE9FO0VBQ0UsY0FBQTtBQ0xKO0FEUUU7RUFDRSxnQkFBQTtBQ05KO0FEU0U7RUFDRSxlQUFBO0VBRUEsb0JBQUE7QUNSSjtBRFdFO0VBQ0UsY0FBQTtBQ1RKO0FEWUU7RUFDRSxjQUFBO0FDVko7QURhRTtFQUNFLHlDQUFBO1VBQUEsaUNBQUE7QUNYSjtBRGNFO0VBQ0U7SUFDRSxVQUFBO0VDWko7RURlRTtJQUNFLFVBQUE7RUNiSjtBQUNGO0FETUU7RUFDRTtJQUNFLFVBQUE7RUNaSjtFRGVFO0lBQ0UsVUFBQTtFQ2JKO0FBQ0Y7QURnQkU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDZEoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2aWdhdGlvbi1yYWlsLXBhZ2Uge1xuICBiciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAtMjVweCAwO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gIH1cblxuICAjdGhyZXNob2xkcyB7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgfVxuXG4gIC5leGFtcGxlLXNpZGVuYXYtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5leGFtcGxlLXNpZGVuYXYge1xuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICB9XG5cbiAgLm5hdi1idXR0b24ge1xuICAgIHdpZHRoOiA3MnB4O1xuICAgIGhlaWdodDogNzJweDtcbiAgICBib3JkZXItcmFkaXVzOiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAubmF2LWJ1dHRvbjpob3ZlciB7XG4gICAgY29sb3I6ICMwMDMzOTk7XG4gIH1cblxuICAubmF2LWljb24ge1xuICAgIG1hcmdpbi10b3A6IC00cHg7XG4gIH1cblxuICAubmF2LWJ1dHRvbi10ZXh0IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogLThweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gIC5zZWxlY3RlZCB7XG4gICAgY29sb3I6ICMwMDMzOTk7XG4gIH1cblxuICAuc2VsZWN0ZWQ6aG92ZXIge1xuICAgIGNvbG9yOiAjMDAzMzk5O1xuICB9XG5cbiAgLmZhZGUge1xuICAgIGFuaW1hdGlvbjogZmFkZS1pbiAzMDBtcyBmb3J3YXJkcztcbiAgfVxuXG4gIEBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG5cbiAgLmhlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cbn1cbiIsIi5uYXZpZ2F0aW9uLXJhaWwtcGFnZSBiciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IC0yNXB4IDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG4ubmF2aWdhdGlvbi1yYWlsLXBhZ2UgI3RocmVzaG9sZHMge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuLm5hdmlnYXRpb24tcmFpbC1wYWdlIC5leGFtcGxlLXNpZGVuYXYtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubmF2aWdhdGlvbi1yYWlsLXBhZ2UgLmV4YW1wbGUtc2lkZW5hdiB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbn1cbi5uYXZpZ2F0aW9uLXJhaWwtcGFnZSAubmF2LWJ1dHRvbiB7XG4gIHdpZHRoOiA3MnB4O1xuICBoZWlnaHQ6IDcycHg7XG4gIGJvcmRlci1yYWRpdXM6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm5hdmlnYXRpb24tcmFpbC1wYWdlIC5uYXYtYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICMwMDMzOTk7XG59XG4ubmF2aWdhdGlvbi1yYWlsLXBhZ2UgLm5hdi1pY29uIHtcbiAgbWFyZ2luLXRvcDogLTRweDtcbn1cbi5uYXZpZ2F0aW9uLXJhaWwtcGFnZSAubmF2LWJ1dHRvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbi5uYXZpZ2F0aW9uLXJhaWwtcGFnZSAuc2VsZWN0ZWQge1xuICBjb2xvcjogIzAwMzM5OTtcbn1cbi5uYXZpZ2F0aW9uLXJhaWwtcGFnZSAuc2VsZWN0ZWQ6aG92ZXIge1xuICBjb2xvcjogIzAwMzM5OTtcbn1cbi5uYXZpZ2F0aW9uLXJhaWwtcGFnZSAuZmFkZSB7XG4gIGFuaW1hdGlvbjogZmFkZS1pbiAzMDBtcyBmb3J3YXJkcztcbn1cbkBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5uYXZpZ2F0aW9uLXJhaWwtcGFnZSAuaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufSJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.setSelected = function (select) {
        this.selected = select;
    };
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loginContainer {\n  display: flex;\n  justify-content: center;\n  margin-top: 30vh;\n}\n\n.login-field-wrapper {\n  display: flex;\n  padding-bottom: 1.5rem;\n}\n\n.login-form-field {\n  width: 100%;\n}\n\n.loginButton-Error {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.login-button {\n  display: flex;\n  flex-direction: column;\n}\n\n.mat-card-header {\n  background-color: #0000A0;\n  padding-top: 1rem;\n  padding-bottom: 0.5rem;\n}\n\n.mat-card-title {\n  color: white !important;\n}\n\n.formField {\n  width: 25rem;\n}\n\n.mat-card {\n  padding: 0rem;\n  width: 27rem;\n}\n\n.mat-card-content {\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXdlaWxpL0Rlc2t0b3AvUkVBQ0gvcmVhY2gvSGF6bWF0LWNsaWVudC9zcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUE7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7QUNBRjs7QURJQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ0RGOztBRElBO0VBQ0UsdUJBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbkNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwdmg7XG59XG5cbi5sb2dpbi1maWVsZC13cmFwcGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xufVxuXG4ubG9naW4tZm9ybS1maWVsZHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dpbkJ1dHRvbi1FcnJvcntcbiAgZGlzcGxheTpmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjpyb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4ubG9naW4tYnV0dG9ue1xuXG4gIGRpc3BsYXk6ZmxleDtcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xufVxuXG5cbi5tYXQtY2FyZC1oZWFkZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IzAwMDBBMDtcbiAgcGFkZGluZy10b3A6MXJlbTtcbiAgcGFkZGluZy1ib3R0b206MC41cmVtO1xufVxuXG4ubWF0LWNhcmQtdGl0bGUge1xuICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uZm9ybUZpZWxkIHtcbiAgd2lkdGg6IDI1cmVtO1xufVxuXG4ubWF0LWNhcmQge1xuICBwYWRkaW5nOiAwcmVtO1xuICB3aWR0aDoyN3JlbTtcbn1cblxuLm1hdC1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxcmVtO1xufSIsIi5sb2dpbkNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMHZoO1xufVxuXG4ubG9naW4tZmllbGQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG59XG5cbi5sb2dpbi1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dpbkJ1dHRvbi1FcnJvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4ubG9naW4tYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm1hdC1jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwQTA7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xufVxuXG4ubWF0LWNhcmQtdGl0bGUge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmZvcm1GaWVsZCB7XG4gIHdpZHRoOiAyNXJlbTtcbn1cblxuLm1hdC1jYXJkIHtcbiAgcGFkZGluZzogMHJlbTtcbiAgd2lkdGg6IDI3cmVtO1xufVxuXG4ubWF0LWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDFyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent, jwtUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtUser", function() { return jwtUser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _restheader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../restheader.service */ "./src/app/restheader.service.ts");
/* harmony import */ var _people_people_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../people/people.service */ "./src/app/people/people.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router, restheaderService, peopleService) {
        this.loginService = loginService;
        this.router = router;
        this.restheaderService = restheaderService;
        this.peopleService = peopleService;
        this.loginError = false;
        this.hide = true;
        this.loginFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        // this.router.navigate(['/home']);//remove this just for local dev
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Login = function () {
        var _this = this;
        console.log(this.loginFormGroup);
        this.loginService.login(this.loginFormGroup.get('userName').value, this.loginFormGroup.get('password').value).subscribe(function (data) {
            console.log('data from the service ', data);
            if (data && data.token) {
                _this.restheaderService.setHttpHeaders(data.token);
                var jwtUser_1 = JSON.parse(atob(data.token.split('.')[1]));
                var email = jwtUser_1.email;
                var user_id = jwtUser_1.user_id;
                console.log('------------------> ', jwtUser_1.username);
                console.log('------------------> ', data.token);
                _this.router.navigate(['/dashboard']);
            }
        }, function (error) {
            _this.loginError = true;
            console.log('error', _this.loginError);
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _restheader_service__WEBPACK_IMPORTED_MODULE_5__["RestheaderService"] },
        { type: _people_people_service__WEBPACK_IMPORTED_MODULE_6__["PeopleService"] }
    ]; };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _restheader_service__WEBPACK_IMPORTED_MODULE_5__["RestheaderService"], _people_people_service__WEBPACK_IMPORTED_MODULE_6__["PeopleService"]])
    ], LoginComponent);
    return LoginComponent;
}());

var jwtUser = /** @class */ (function () {
    function jwtUser() {
    }
    return jwtUser;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService, jwtResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtResponse", function() { return jwtResponse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var LoginService = /** @class */ (function () {
    function LoginService(httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    LoginService.prototype.login = function (userName, password) {
        var requestBody = {
            "username": userName,
            "password": password
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].host + 'api-token-auth/', requestBody, this.httpOptions);
        //     return this.httpClient.post<jwtResponse>('https://hazmat-reach-cat.herokuapp.com/api-token-auth/', requestBody, this.httpOptions);
    };
    LoginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());

var jwtResponse = /** @class */ (function () {
    function jwtResponse() {
    }
    return jwtResponse;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/table.js");






var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
            ],
            exports: [
                _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/people/people-add/people-add.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/people/people-add/people-add.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  width: 100%;\n}\n\n.mat-toolbar {\n  background: #0000A0;\n  color: white;\n}\n\nform.normal-form {\n  margin: 10px;\n}\n\n.controls-container {\n  width: 100%;\n  padding: 5%;\n}\n\n.controls-container > * {\n  width: 100%;\n}\n\n.mat-grid-tile {\n  padding-top: 0px !important;\n}\n\n.error-message {\n  text-align: center;\n  color: red;\n}\n\n.mat-raised-button {\n  margin: 10px 15px;\n}\n\n.mat-stroked-button {\n  margin: 10px 15px;\n}\n\n.mat-stroked-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n  background-color: #1003a0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXdlaWxpL0Rlc2t0b3AvUkVBQ0gvcmVhY2gvSGF6bWF0LWNsaWVudC9zcmMvYXBwL3Blb3BsZS9wZW9wbGUtYWRkL3Blb3BsZS1hZGQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Blb3BsZS9wZW9wbGUtYWRkL3Blb3BsZS1hZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUNFSjs7QURDQTtFQUNJLFlBQUE7QUNFSjs7QURBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FDR0o7O0FEREE7RUFDSSxXQUFBO0FDSUo7O0FEREE7RUFDSSwyQkFBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDS0o7O0FERkE7RUFDRSxpQkFBQTtBQ0tGOztBREhBO0VBQ0UsaUJBQUE7QUNNRjs7QURKQTtFQUNFLHlCQUFBO0FDT0YiLCJmaWxlIjoic3JjL2FwcC9wZW9wbGUvcGVvcGxlLWFkZC9wZW9wbGUtYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ubWF0LXRvb2xiYXJ7XG4gICAgYmFja2dyb3VuZDogIzAwMDBBMDtcbiAgICBjb2xvcjogd2hpdGU7XG5cbn1cbmZvcm0ubm9ybWFsLWZvcm17XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuLmNvbnRyb2xzLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1JTtcbn1cbi5jb250cm9scy1jb250YWluZXIgPiAqIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbi5tYXQtZ3JpZC10aWxlIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG4uZXJyb3ItbWVzc2FnZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbntcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XG59XG4ubWF0LXN0cm9rZWQtYnV0dG9ue1xuICBtYXJnaW46IDEwcHggMTVweDtcbn1cbi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1mYWIubWF0LXByaW1hcnksIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnl7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDAzYTA7XG59XG4iLCJmb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6ICMwMDAwQTA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuZm9ybS5ub3JtYWwtZm9ybSB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmNvbnRyb2xzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1JTtcbn1cblxuLmNvbnRyb2xzLWNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1ncmlkLXRpbGUge1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmVkO1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b24ge1xuICBtYXJnaW46IDEwcHggMTVweDtcbn1cblxuLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gIG1hcmdpbjogMTBweCAxNXB4O1xufVxuXG4ubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtZmFiLm1hdC1wcmltYXJ5LCAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMDNhMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/people/people-add/people-add.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/people/people-add/people-add.component.ts ***!
  \***********************************************************/
/*! exports provided: PeopleAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleAddComponent", function() { return PeopleAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _people_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../people.service */ "./src/app/people/people.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _people_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../people.model */ "./src/app/people/people.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_app_restheader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/restheader.service */ "./src/app/restheader.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _devices_devices_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../devices/devices.service */ "./src/app/devices/devices.service.ts");
/* harmony import */ var _threshold_blood_pressure_blood_pressure_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../threshold/blood-pressure/blood-pressure.service */ "./src/app/threshold/blood-pressure/blood-pressure.service.ts");
/* harmony import */ var _threshold_heart_rate_heart_rate_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../threshold/heart-rate/heart-rate.service */ "./src/app/threshold/heart-rate/heart-rate.service.ts");
/* harmony import */ var _threshold_heat_index_heat_index_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../threshold/heat-index/heat-index.service */ "./src/app/threshold/heat-index/heat-index.service.ts");
/* harmony import */ var _threshold_oxygen_oxygen_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../threshold/oxygen/oxygen.service */ "./src/app/threshold/oxygen/oxygen.service.ts");














var PeopleAddComponent = /** @class */ (function () {
    function PeopleAddComponent(peopleService, httpClient, restHeaderService, dialogRef, notificationService, devicesService, bloodpressureService, heartrateService, heatindexService, oxygenService, data) {
        this.peopleService = peopleService;
        this.httpClient = httpClient;
        this.restHeaderService = restHeaderService;
        this.dialogRef = dialogRef;
        this.notificationService = notificationService;
        this.devicesService = devicesService;
        this.bloodpressureService = bloodpressureService;
        this.heartrateService = heartrateService;
        this.heatindexService = heatindexService;
        this.oxygenService = oxygenService;
        this.data = data;
        this.roles = [];
        this.crews = [];
        this.devices = [];
        this.serverErrors = [];
        // Role: Select[] = [
        //   { value: 'SEMS Operator', viewValue: "SEMS Operator" },
        //   { value: 'First Responder', viewValue: "First Responder" },
        //   { value: 'Team Leader', viewValue: "Team Leader" },
        //   { value: 'User', viewValue: "User" },
        //   { value: 'Medic', viewValue: "Medic" },
        // ];
        this.HRIndexes = [];
        this.BPIndexes = [];
        this.SPIndexes = [];
        this.HIIndexes = [];
        this.editPeople = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, data);
        if (this.editPeople.PersonID == null) {
            this.action = 'New';
        }
        else {
            this.action = 'Edit';
        }
        console.log('data===' + data);
    }
    PeopleAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.action == 'Edit') {
            this.peopleFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                PersonID: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.editPeople.PersonID),
                CrewID: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.editPeople.CrewID),
                FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.editPeople.FirstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.editPeople.LastName, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                RoleID: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.editPeople.RoleID),
                ImageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.editPeople.ImageUrl),
                // ImageUrlsource: new FormControl(''),
                HeartRateID: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.editPeople.HeartRateID),
                BloodPressureID: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.editPeople.BloodPressureID),
                HeatIndexID: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.editPeople.HeatIndexID),
                SpO2ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.editPeople.SpO2ID),
            });
            this.peopleFormGroup.controls.CrewID.setValue(this.editPeople.CrewID);
            this.peopleFormGroup.controls.HeartRateID.setValue(this.editPeople.HeartRateID);
            this.peopleFormGroup.controls.BloodPressureID.setValue(this.editPeople.BloodPressureID);
            this.peopleFormGroup.controls.HeatIndexID.setValue(this.editPeople.HeatIndexID);
            this.peopleFormGroup.controls.SpO2ID.setValue(this.editPeople.SpO2ID);
        }
        else {
            this.peopleFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                PersonID: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                CrewID: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                LastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
                RoleID: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                ImageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                // ImageUrlsource: new FormControl(''),
                HeartRateID: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                BloodPressureID: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                HeatIndexID: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                SpO2ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            });
            console.log(this.peopleFormGroup);
        }
        this.peopleService.getCrew().subscribe(function (data) {
            _this.crews = data.reduce(function (a, b) {
                var t = { "value": b.CrewID, "viewValue": b.Name };
                a.push(t);
                return a;
            }, []);
        });
        this.peopleService.getRole().subscribe(function (data) {
            _this.roles = data.reduce(function (a, b) {
                var t = { "value": b.RoleID, "viewValue": b.Name };
                a.push(t);
                return a;
            }, []);
        });
        this.devicesService.getDevicesData().subscribe(function (data) {
            _this.devices = data.reduce(function (a, b) {
                var t = { "value": b.DevicePK, "viewValue": b.DeviceID };
                a.push(t);
                return a;
            }, []);
        });
        this.heartrateService.getHeartRate().subscribe(function (data) {
            _this.HRIndexes = data.reduce(function (a, b) {
                var t = { "value": b.HeartRateID, "viewValue": b.HRIndex };
                a.push(t);
                return a;
            }, []);
        });
        this.bloodpressureService.getBloodPressure().subscribe(function (data) {
            _this.BPIndexes = data.reduce(function (a, b) {
                var t = { "value": b.BloodPressureID, "viewValue": b.BPIndex };
                a.push(t);
                return a;
            }, []);
        });
        this.oxygenService.getOxygenData().subscribe(function (data) {
            _this.SPIndexes = data.reduce(function (a, b) {
                var t = { "value": b.SpO2ID, "viewValue": b.SpO2Index };
                a.push(t);
                return a;
            }, []);
        });
        this.heatindexService.getHeatIndex().subscribe(function (data) {
            _this.HIIndexes = data.reduce(function (a, b) {
                var t = { "value": b.HeatIndexID, "viewValue": b.HIIndex };
                a.push(t);
                return a;
            }, []);
        });
    };
    PeopleAddComponent.prototype.onImageChanged = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.peopleFormGroup.patchValue({
                ImageUrl: file
            });
            //this.editPeople.ImageUrl = file;
            //this.peopleFormGroup.controls.ImageUrlsource.setValue(file);
        }
    };
    PeopleAddComponent.prototype.onImagesChanged = function (event) {
        if (event._files.File.length > 0) {
            var file = event._files.File[0];
            this.peopleFormGroup.patchValue({
                ImageUrl: file
            });
            //this.editPeople.ImageUrl = file;
            //this.peopleFormGroup.controls.ImageUrlsource.setValue(file);
        }
    };
    PeopleAddComponent.prototype.savePerson = function (person) {
        var _this = this;
        if (this.action == 'Edit') {
            this.peopleService.editPerson(person)
                .subscribe(function (data) {
                var personData = _this.getPersonData(data, person);
                _this.notificationService.success(' People updated successfully');
                _this.dialogRef.close({ event: _this.action, data: personData });
            }, function (error) {
                _this.throwErrors(error);
            });
        }
        else {
            this.peopleService.addPerson(person)
                .subscribe(function (data) {
                var personData = _this.getPersonData(data, person);
                _this.notificationService.success(' People added successfully');
                _this.dialogRef.close({ event: _this.action, data: personData });
            }, function (error) {
                _this.throwErrors(error);
            });
        }
    };
    PeopleAddComponent.prototype.getPersonData = function (data, person) {
        var personData = data;
        if (person.CrewID) {
            var crew = this.crews.find(function (crew) { return (crew.value === data.CrewID); });
            if (crew)
                personData.Crew = crew.viewValue;
        }
        if (person.RoleID) {
            var role = this.roles.find(function (role) { return (role.value === data.RoleID); });
            if (role)
                personData.Role = role.viewValue;
        }
        if (person.HeartRateID) {
            var hr = this.HRIndexes.find(function (hr) { return (hr.value === data.HeartRateID); });
            if (hr)
                personData.HeartRate = hr.viewValue;
        }
        if (person.BloodPressureID) {
            var bp = this.BPIndexes.find(function (bp) { return (bp.value === data.BloodPressureID); });
            if (bp)
                personData.BloodPressure = bp.viewValue;
        }
        if (person.HeatIndexID) {
            var hi = this.HIIndexes.find(function (hi) { return (hi.value === data.HeatIndexID); });
            if (hi)
                personData.HeatIndex = hi.viewValue;
        }
        if (person.SpO2ID) {
            var sp = this.SPIndexes.find(function (sp) { return (sp.value === data.SpO2ID); });
            if (sp)
                personData.SpO2 = sp.viewValue;
        }
        return personData;
    };
    PeopleAddComponent.prototype.throwErrors = function (error) {
        this.serverErrors = [];
        var errors = [];
        var frmGroup = this.peopleFormGroup;
        Object.keys(error).map(function (key) {
            if (key == 'error') {
                var err_1 = error[key];
                Object.keys(err_1).map(function (key) {
                    var formControl = frmGroup.get(key);
                    if (formControl) {
                        var msg_1 = '';
                        if (!msg_1) {
                            err_1[key].forEach(function (element) {
                                msg_1 = element;
                            });
                        }
                        formControl.setErrors({
                            fieldError: msg_1
                        });
                    }
                    else {
                        err_1[key].forEach(function (element) {
                            errors.push(element);
                        });
                    }
                });
            }
        });
        this.serverErrors = this.serverErrors.concat(errors);
    };
    PeopleAddComponent.prototype.cancelPerson = function () {
        this.notificationService.warn('Operation Cancelled');
        this.dialogRef.close({ event: '' });
    };
    PeopleAddComponent.ctorParameters = function () { return [
        { type: _people_service__WEBPACK_IMPORTED_MODULE_2__["PeopleService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: src_app_restheader_service__WEBPACK_IMPORTED_MODULE_6__["RestheaderService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
        { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
        { type: _devices_devices_service__WEBPACK_IMPORTED_MODULE_9__["DevicesService"] },
        { type: _threshold_blood_pressure_blood_pressure_service__WEBPACK_IMPORTED_MODULE_10__["BloodPressureService"] },
        { type: _threshold_heart_rate_heart_rate_service__WEBPACK_IMPORTED_MODULE_11__["HeartRateService"] },
        { type: _threshold_heat_index_heat_index_service__WEBPACK_IMPORTED_MODULE_12__["HeatIndexService"] },
        { type: _threshold_oxygen_oxygen_service__WEBPACK_IMPORTED_MODULE_13__["OxygenService"] },
        { type: _people_model__WEBPACK_IMPORTED_MODULE_4__["PeopleInfo"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"],] }] }
    ]; };
    PeopleAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-people-add',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./people-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/people/people-add/people-add.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./people-add.component.scss */ "./src/app/people/people-add/people-add.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(10, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(10, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_people_service__WEBPACK_IMPORTED_MODULE_2__["PeopleService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            src_app_restheader_service__WEBPACK_IMPORTED_MODULE_6__["RestheaderService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"],
            _shared_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"],
            _devices_devices_service__WEBPACK_IMPORTED_MODULE_9__["DevicesService"],
            _threshold_blood_pressure_blood_pressure_service__WEBPACK_IMPORTED_MODULE_10__["BloodPressureService"],
            _threshold_heart_rate_heart_rate_service__WEBPACK_IMPORTED_MODULE_11__["HeartRateService"],
            _threshold_heat_index_heat_index_service__WEBPACK_IMPORTED_MODULE_12__["HeatIndexService"],
            _threshold_oxygen_oxygen_service__WEBPACK_IMPORTED_MODULE_13__["OxygenService"],
            _people_model__WEBPACK_IMPORTED_MODULE_4__["PeopleInfo"]])
    ], PeopleAddComponent);
    return PeopleAddComponent;
}());



/***/ }),

/***/ "./src/app/people/people.component.scss":
/*!**********************************************!*\
  !*** ./src/app/people/people.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".personImage {\n  width: 4.5rem;\n  height: 4.5rem;\n  border: lightgrey solid 2px;\n  border-radius: 50%;\n  margin-top: 0.2rem;\n  margin-bottom: 0.2rem;\n}\n\n.personIcons {\n  width: 2rem;\n  height: 2rem;\n  padding-left: 0rem;\n}\n\n::ng-deep .personIcons > svg {\n  width: 2rem !important;\n  height: 3rem !important;\n  padding-left: 0rem;\n}\n\n.addIcons {\n  width: 2rem;\n  height: 2rem;\n  padding-left: 0rem;\n  cursor: pointer;\n}\n\n::ng-deep .addIcons > svg {\n  width: 2rem !important;\n  height: 3rem !important;\n  padding-left: 4rem;\n}\n\nth.mat-header-cell {\n  text-align: center !important;\n  border: 0.5px solid #CCC;\n  padding: 0 !important;\n  background-color: #0000A0;\n  color: white;\n}\n\ntd.mat-cell {\n  text-align: center !important;\n  border: 0.5px solid #CCC;\n  padding: 0 !important;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #f5f5f5;\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\ntr.mat-header-row {\n  height: 30px;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  font-weight: lighter;\n  height: 104px;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXdlaWxpL0Rlc2t0b3AvUkVBQ0gvcmVhY2gvSGF6bWF0LWNsaWVudC9zcmMvYXBwL3Blb3BsZS9wZW9wbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Blb3BsZS9wZW9wbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FER0E7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURJQTtFQUNFLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRFFBO0VBQ0UsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FDTEY7O0FEUUE7RUFDRSxTQUFBO0FDTEY7O0FEUUE7RUFDRSxtQkFBQTtBQ0xGOztBRFFBO0VBQ0UsbUJBQUE7QUNMRjs7QURRQTtFQUNFLFlBQUE7QUNMRjs7QURRQTtFQUNFLHNCQUFBO0FDTEY7O0FEUUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNMRjs7QURRQTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUVBLG9CQUFBO0VBRUEsYUFBQTtBQ1BGOztBRFVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNQRjs7QURVQTtFQUNFLGFBQUE7QUNQRjs7QURVQTtFQUNFLFlBQUE7QUNQRiIsImZpbGUiOiJzcmMvYXBwL3Blb3BsZS9wZW9wbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGVyc29uSW1hZ2Uge1xuICB3aWR0aDogNC41cmVtO1xuICBoZWlnaHQ6IDQuNXJlbTtcbiAgYm9yZGVyOiBsaWdodGdyZXkgc29saWQgMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi10b3A6IDAuMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xufVxuXG4ucGVyc29uSWNvbnMge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBwYWRkaW5nLWxlZnQ6IDByZW07XG5cbn1cblxuOjpuZy1kZWVwIC5wZXJzb25JY29ucz5zdmcge1xuICB3aWR0aDogMnJlbSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwcmVtO1xufVxuXG4uYWRkSWNvbnMge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOjpuZy1kZWVwIC5hZGRJY29ucz5zdmcge1xuICB3aWR0aDogMnJlbSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiA0cmVtO1xufVxuXG5cbnRoLm1hdC1oZWFkZXItY2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNDQ0M7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDBBMDtcbiAgY29sb3I6IHdoaXRlO1xuXG5cbn1cblxuXG5cbnRkLm1hdC1jZWxsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMC41cHggc29saWQgI0NDQztcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xuICBoZWlnaHQ6IDA7XG59XG5cbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbnRyLm1hdC1oZWFkZXItcm93IHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kaWFncmFtIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgLy8gcGFkZGluZzogOHB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgLy8gbWFyZ2luOiA4cHggMDtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbiIsIi5wZXJzb25JbWFnZSB7XG4gIHdpZHRoOiA0LjVyZW07XG4gIGhlaWdodDogNC41cmVtO1xuICBib3JkZXI6IGxpZ2h0Z3JleSBzb2xpZCAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XG59XG5cbi5wZXJzb25JY29ucyB7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIHBhZGRpbmctbGVmdDogMHJlbTtcbn1cblxuOjpuZy1kZWVwIC5wZXJzb25JY29ucyA+IHN2ZyB7XG4gIHdpZHRoOiAycmVtICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDByZW07XG59XG5cbi5hZGRJY29ucyB7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIHBhZGRpbmctbGVmdDogMHJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG46Om5nLWRlZXAgLmFkZEljb25zID4gc3ZnIHtcbiAgd2lkdGg6IDJyZW0gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogNHJlbTtcbn1cblxudGgubWF0LWhlYWRlci1jZWxsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMC41cHggc29saWQgI0NDQztcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMEEwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbnRkLm1hdC1jZWxsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMC41cHggc29saWQgI0NDQztcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xuICBoZWlnaHQ6IDA7XG59XG5cbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbnRyLm1hdC1oZWFkZXItcm93IHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kaWFncmFtIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGhlaWdodDogMTA0cHg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtc3ltYm9sIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb24ge1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */");

/***/ }),

/***/ "./src/app/people/people.component.ts":
/*!********************************************!*\
  !*** ./src/app/people/people.component.ts ***!
  \********************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sort.js");
/* harmony import */ var _people_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./people.service */ "./src/app/people/people.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _people_add_people_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./people-add/people-add.component */ "./src/app/people/people-add/people-add.component.ts");













var PeopleComponent = /** @class */ (function () {
    function PeopleComponent(peopleService, dialog, notificationService) {
        this.peopleService = peopleService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.displayedColumns = ['ImageUrl', 'FirstName', 'LastName', 'Crew', 'Role', 'Devices', 'HeartRate', 'BloodPressure', 'HeatIndex', 'SpO2', 'Actions'];
        this.display = 'deviceDetails';
        this.goBack = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PeopleComponent.prototype.ngOnInit = function () {
        this.getPeople();
    };
    PeopleComponent.prototype.getPeople = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])([
            this.peopleService.getCrew(),
            this.peopleService.getPerson(),
            this.peopleService.getPersonHeartrate(),
            this.peopleService.getPersonBloodpressure(),
            this.peopleService.getPersonHeatIndex(),
            this.peopleService.getPersonOxygenData(),
            this.peopleService.getDevicesData(),
            this.peopleService.getRole(),
        ]).subscribe(function (data) {
            if (data.length > 0) {
                var Crew_1 = data[0];
                var People = data[1];
                var HeartRate_1 = data[2];
                var BloodPressure_1 = data[3];
                var HeatIndexDetails = data[4];
                var OxygenData_1 = data[5];
                var DevicesData_1 = data[6];
                var Role_1 = data[7];
                _this.peopleInformation = _this.getPeopleDetails(Crew_1, People, HeartRate_1, BloodPressure_1, HeatIndexDetails, OxygenData_1, DevicesData_1, Role_1);
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.peopleInformation);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
        }, function (error) { console.log('error', error); });
    };
    PeopleComponent.prototype.addPerson = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        var dialogRef = this.dialog.open(_people_add_people_add_component__WEBPACK_IMPORTED_MODULE_12__["PeopleAddComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.event === 'New') {
                var person = void 0;
                person = result.data;
                _this.dataSource.data.push(person);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
        });
    };
    PeopleComponent.prototype.updatePerson = function (person) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        dialogConfig.data = person;
        var dialogRef = this.dialog.open(_people_add_people_add_component__WEBPACK_IMPORTED_MODULE_12__["PeopleAddComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.event === 'Edit') {
                var person_1;
                person_1 = result.data;
                var index = _this.dataSource.data.findIndex(function (e) { return e.PersonID === person_1.PersonID; });
                person_1.Devices = _this.dataSource.data[index].Devices;
                _this.dataSource.data[index] = person_1;
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
        });
    };
    PeopleComponent.prototype.deletePerson = function (id) {
        this.openDialog('Are you sure want to remove the person?', id);
    };
    PeopleComponent.prototype.openDialog = function (message, id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__["DialogComponent"], {
            width: '50rem',
            data: { message: message }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.event === 'Remove') {
                _this.peopleService.deletePerson(id).subscribe(function (data) {
                    _this.dataSource.data = _this.dataSource.data.filter(function (item) { return item.PersonID != id.PersonID; });
                    _this.notificationService.success('Successfully Deleted');
                }, function (error) {
                    _this.notificationService.error('Error occurred while deleting the device');
                });
            }
            else if (result.event === 'Cancel') {
                _this.notificationService.warn('Operation Cancelled');
            }
        });
    };
    PeopleComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    PeopleComponent.prototype.getPeopleDetails = function (Crew, People, HeartRate, BloodPressure, HeatIndexDetails, OxygenData, DevicesData, Role) {
        var _this = this;
        var data = [];
        People.map(function (item, index) {
            var imageurl = '';
            if (item.ImageUrl)
                if (item.ImageUrl.charAt(0) === '/')
                    imageurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].host + item.ImageUrl.substring(1);
                else
                    imageurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].host + item.ImageUrl;
            data.push({
                PersonID: item.PersonID ? item.PersonID : '',
                FirstName: item.FirstName ? item.FirstName : '',
                LastName: item.LastName ? item.LastName : '',
                ImageUrl: imageurl,
                RoleID: item.RoleID ? item.RoleID : '',
                CrewID: item.CrewID ? item.CrewID : '',
                HeartRateID: item.HeartRateID ? item.HeartRateID : '',
                BloodPressureID: item.BloodPressureID ? item.BloodPressureID : '',
                HeatIndexID: item.HeatIndexID ? item.HeatIndexID : '',
                SpO2ID: item.SpO2ID ? item.SpO2ID : '',
                Role: _this.getRoleDetails(Role, item.RoleID),
                Crew: _this.getCrewDetails(Crew, item.CrewID),
                HeartRate: _this.getHeartRateDetails(HeartRate, item.HeartRateID),
                BloodPressure: _this.getBPDetails(BloodPressure, item.BloodPressureID),
                HeatIndex: _this.getHeatIndexDetails(HeatIndexDetails, item.HeatIndexID),
                SpO2: _this.getOxygenDetails(OxygenData, item.SpO2ID),
                Devices: _this.getDevices(DevicesData, item.PersonID),
            });
        });
        return data;
    };
    PeopleComponent.prototype.getRoleDetails = function (Role, RoleID) {
        var role = Role.find(function (role) { return (role.RoleID === RoleID); });
        if (role)
            return role.Name;
        return '';
    };
    PeopleComponent.prototype.getCrewDetails = function (Crew, CrewID) {
        var crew = Crew.find(function (crew) { return (crew.CrewID === CrewID); });
        if (crew)
            return crew.Name;
        return '';
    };
    PeopleComponent.prototype.getHeartRateDetails = function (HeartRate, HeartRateID) {
        console.log(HeartRateID);
        var HR = HeartRate.find(function (heartrate) { return (heartrate.HeartRateID === HeartRateID); });
        if (HR)
            return HR.HRIndex;
        return '';
    };
    PeopleComponent.prototype.getBPDetails = function (BloodPressure, BloodPressureID) {
        var BP = BloodPressure.find(function (bloodpressure) { return (bloodpressure.BloodPressureID === BloodPressureID); });
        if (BP)
            return BP.BPIndex;
        return '';
    };
    PeopleComponent.prototype.getHeatIndexDetails = function (HeatIndexDetails, HeatIndexID) {
        var HI = HeatIndexDetails.find(function (heatindex) { return (heatindex.HeatIndexID === HeatIndexID); });
        if (HI)
            return HI.HIIndex;
        return '';
    };
    PeopleComponent.prototype.getOxygenDetails = function (oxygenData, SpO2ID) {
        var oxy = oxygenData.find(function (spo2) { return (spo2.SpO2ID === SpO2ID); });
        if (oxy)
            return oxy.SpO2Index;
        return '';
    };
    PeopleComponent.prototype.getDevices = function (devices, personID) {
        var devicelist = devices.filter(function (person) { return (person.PersonID === personID); }).map(function (dev) { return dev.DeviceID; });
        console.log(devicelist);
        return devicelist;
    };
    PeopleComponent.ctorParameters = function () { return [
        { type: _people_service__WEBPACK_IMPORTED_MODULE_5__["PeopleService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
        { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], PeopleComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], PeopleComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], PeopleComponent.prototype, "goBack", void 0);
    PeopleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-people',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./people.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/people/people.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('325ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./people.component.scss */ "./src/app/people/people.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_people_service__WEBPACK_IMPORTED_MODULE_5__["PeopleService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], _shared_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"]])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/people/people.model.ts":
/*!****************************************!*\
  !*** ./src/app/people/people.model.ts ***!
  \****************************************/
/*! exports provided: PeopleInfo, PeopleData, BloodPressure, HeartRate, OxygenData, Crew, DevicesData, Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleInfo", function() { return PeopleInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleData", function() { return PeopleData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloodPressure", function() { return BloodPressure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartRate", function() { return HeartRate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OxygenData", function() { return OxygenData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Crew", function() { return Crew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesData", function() { return DevicesData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var PeopleInfo = /** @class */ (function () {
    function PeopleInfo() {
    }
    return PeopleInfo;
}());

var PeopleData = /** @class */ (function () {
    function PeopleData() {
    }
    return PeopleData;
}());

var BloodPressure = /** @class */ (function () {
    function BloodPressure() {
    }
    return BloodPressure;
}());

var HeartRate = /** @class */ (function () {
    function HeartRate() {
    }
    return HeartRate;
}());

var OxygenData = /** @class */ (function () {
    function OxygenData() {
    }
    return OxygenData;
}());

var Crew = /** @class */ (function () {
    function Crew() {
    }
    return Crew;
}());

var DevicesData = /** @class */ (function () {
    function DevicesData() {
    }
    return DevicesData;
}());

var Role = /** @class */ (function () {
    function Role() {
    }
    return Role;
}());



/***/ }),

/***/ "./src/app/people/people.service.ts":
/*!******************************************!*\
  !*** ./src/app/people/people.service.ts ***!
  \******************************************/
/*! exports provided: PeopleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleService", function() { return PeopleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _restheader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../restheader.service */ "./src/app/restheader.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var PeopleService = /** @class */ (function () {
    function PeopleService(httpClient, restheaderService) {
        this.httpClient = httpClient;
        this.restheaderService = restheaderService;
    }
    PeopleService.prototype.getPerson = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'person', this.restheaderService.httpheader);
    };
    PeopleService.prototype.getPersonHeartrate = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'heartrate_json', this.restheaderService.httpheader);
    };
    PeopleService.prototype.getPersonBloodpressure = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'bloodpressure_json', this.restheaderService.httpheader);
    };
    PeopleService.prototype.getPersonHeatIndex = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'heatindex_json/', this.restheaderService.httpheader);
    };
    PeopleService.prototype.getPersonOxygenData = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'spo2_json/', this.restheaderService.httpheader);
    };
    PeopleService.prototype.getPersonById = function (id) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'person/' + id + '/', this.restheaderService.httpheader);
    };
    PeopleService.prototype.getCrew = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'crew_json', this.restheaderService.httpheader);
        [];
    };
    PeopleService.prototype.getRole = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'role_json', this.restheaderService.httpheader);
        [];
    };
    PeopleService.prototype.getDevicesData = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'device', this.restheaderService.httpheader);
    };
    PeopleService.prototype.addPerson = function (person) {
        var requestBody = {
            FirstName: person.FirstName,
            LastName: person.LastName,
            RoleID: person.RoleID,
            ImageUrl: person.ImageUrl,
            isDelete: false,
            CrewID: person.CrewID,
            HeartRateID: person.HeartRateID,
            BloodPressureID: person.BloodPressureID,
            HeatIndexID: person.HeatIndexID,
            SpO2ID: person.SpO2ID
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'person', requestBody, this.restheaderService.httpheader);
    };
    PeopleService.prototype.addCrew = function (person, crew) {
        var requestBody = {
            Name: person.CrewID,
            Description: crew.Description
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'crew_json', requestBody, this.restheaderService.httpheader);
    };
    PeopleService.prototype.addDevice = function (device, PersonID) {
        var requestBody = {
            DeviceID: device.DeviceID,
            IP: device.IP,
            Description: device.Description,
            Type: device.Type,
            Status: false,
            BatteryStatus: 100,
            isDelete: false,
            PersonID: PersonID
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'device', requestBody, this.restheaderService.httpheader);
    };
    PeopleService.prototype.addPersonHeartrate = function (HeartRate, HRIndex) {
        var requestBody = {
            HRIndex: HeartRate.HRIndex
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'heatindex_json/', requestBody, this.restheaderService.httpheader);
    };
    PeopleService.prototype.editPerson = function (person) {
        var requestBody = {
            FirstName: person.FirstName,
            LastName: person.LastName,
            RoleID: person.RoleID,
            isDelete: false,
            CrewID: person.CrewID,
            ImageUrl: person.ImageUrl,
            HeartRateID: person.HeartRateID,
            BloodPressureID: person.BloodPressureID,
            HeatIndexID: person.HeatIndexID,
            SpO2ID: person.SpO2ID
        };
        var id = person.PersonID;
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'person/' + id + '/', requestBody, this.restheaderService.httpheader);
    };
    PeopleService.prototype.deletePerson = function (person) {
        var requestBody = {
            FirstName: person.FirstName,
            LastName: person.LastName,
        };
        var id = person.PersonID;
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'person/' + id + '/', this.restheaderService.httpheader);
    };
    PeopleService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _restheader_service__WEBPACK_IMPORTED_MODULE_3__["RestheaderService"] }
    ]; };
    PeopleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _restheader_service__WEBPACK_IMPORTED_MODULE_3__["RestheaderService"]])
    ], PeopleService);
    return PeopleService;
}());



/***/ }),

/***/ "./src/app/restheader.service.ts":
/*!***************************************!*\
  !*** ./src/app/restheader.service.ts ***!
  \***************************************/
/*! exports provided: RestheaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestheaderService", function() { return RestheaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");



var RestheaderService = /** @class */ (function () {
    function RestheaderService() {
        this.httpheader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    RestheaderService.prototype.setHttpHeaders = function (jwt) {
        this.httpheader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "JWT " + jwt
            })
        };
    };
    RestheaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], RestheaderService);
    return RestheaderService;
}());



/***/ }),

/***/ "./src/app/shared/notification.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/notification.service.ts ***!
  \************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/snack-bar.js");


// import { MatSnackBar, MatSnackBarConfig } from '@angular/material/matsnack';

// import {MatSnackBarConfig} from '@angular/material/snack-bar';
var NotificationService = /** @class */ (function () {
    function NotificationService(snackBar) {
        this.snackBar = snackBar;
        this.config = {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
        };
    }
    NotificationService.prototype.success = function (msg) {
        this.config['panelClass'] = ['notification', 'success'];
        this.snackBar.open(msg, '', this.config);
    };
    NotificationService.prototype.warn = function (msg) {
        this.config['panelClass'] = ['notification', 'warn'];
        this.snackBar.open(msg, '', this.config);
    };
    NotificationService.prototype.error = function (msg) {
        this.config['panelClass'] = ['notification', 'error'];
        this.snackBar.open(msg, 'Error!', this.config);
    };
    NotificationService.ctorParameters = function () { return [
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
    ]; };
    NotificationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/team/team.component.scss":
/*!******************************************!*\
  !*** ./src/app/team/team.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYW0vdGVhbS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team.service */ "./src/app/team/team.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sort.js");






var TeamComponent = /** @class */ (function () {
    function TeamComponent(teamService) {
        this.teamService = teamService;
        this.displayedColumns = ['Name', 'Description'];
        this.display = 'teamDetails';
    }
    TeamComponent.prototype.ngOnInit = function () {
        console.log('================> teamComponent ngOnInit');
        this.getTeam();
    };
    TeamComponent.prototype.getTeam = function () {
        var _this = this;
        this.teamService.getTeam().subscribe(function (data) {
            if (data.length > 0) {
                console.log('teamList ', data);
                _this.teamDetails = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](Array.from(data.values()));
                _this.teamDetails.paginator = _this.paginator;
                _this.teamDetails.sort = _this.sort;
            }
        }, function (error) {
            console.log('error', error);
        });
    };
    TeamComponent.prototype.applyFilter = function (filterValue) {
        this.teamDetails.filter = filterValue.trim().toLowerCase();
        if (this.teamDetails.paginator) {
            this.teamDetails.paginator.firstPage();
        }
    };
    TeamComponent.ctorParameters = function () { return [
        { type: _team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], TeamComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], TeamComponent.prototype, "sort", void 0);
    TeamComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./team.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/team/team.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./team.component.scss */ "./src/app/team/team.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"]])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/team/team.service.ts":
/*!**************************************!*\
  !*** ./src/app/team/team.service.ts ***!
  \**************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _restheader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../restheader.service */ "./src/app/restheader.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var TeamService = /** @class */ (function () {
    function TeamService(httpClient, restheaderService) {
        this.httpClient = httpClient;
        this.restheaderService = restheaderService;
    }
    TeamService.prototype.getTeam = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'team_json', this.restheaderService.httpheader);
    };
    TeamService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _restheader_service__WEBPACK_IMPORTED_MODULE_3__["RestheaderService"] }
    ]; };
    TeamService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _restheader_service__WEBPACK_IMPORTED_MODULE_3__["RestheaderService"]])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ "./src/app/threshold/blood-pressure/blood-pressure-dialog/blood-pressure-dialog.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/threshold/blood-pressure/blood-pressure-dialog/blood-pressure-dialog.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  width: 100%;\n}\n\n.mat-toolbar {\n  background: #0000A0;\n  color: white;\n}\n\nform.normal-form {\n  margin: 10px;\n}\n\n.controls-container {\n  width: 100%;\n  padding: 5%;\n}\n\n.controls-container > * {\n  width: 100%;\n}\n\n.mat-grid-tile {\n  padding-top: 0px !important;\n}\n\n.error-message {\n  text-align: center;\n  color: red;\n}\n\n.mat-raised-button {\n  margin: 10px 15px;\n}\n\n.mat-stroked-button {\n  margin: 10px 15px;\n}\n\n.mat-stroked-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n  background-color: #1003a0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXdlaWxpL0Rlc2t0b3AvUkVBQ0gvcmVhY2gvSGF6bWF0LWNsaWVudC9zcmMvYXBwL3RocmVzaG9sZC9ibG9vZC1wcmVzc3VyZS9ibG9vZC1wcmVzc3VyZS1kaWFsb2cvYmxvb2QtcHJlc3N1cmUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aHJlc2hvbGQvYmxvb2QtcHJlc3N1cmUvYmxvb2QtcHJlc3N1cmUtZGlhbG9nL2Jsb29kLXByZXNzdXJlLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURDQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ0VGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNHRjs7QUREQTtFQUNFLFdBQUE7QUNJRjs7QUREQTtFQUNFLDJCQUFBO0FDSUY7O0FERkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNLRjs7QURGQTtFQUNBLGlCQUFBO0FDS0E7O0FESEE7RUFDQSxpQkFBQTtBQ01BOztBREpBO0VBQ0EseUJBQUE7QUNPQSIsImZpbGUiOiJzcmMvYXBwL3RocmVzaG9sZC9ibG9vZC1wcmVzc3VyZS9ibG9vZC1wcmVzc3VyZS1kaWFsb2cvYmxvb2QtcHJlc3N1cmUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1hdC10b29sYmFye1xuICBiYWNrZ3JvdW5kOiAjMDAwMEEwO1xuICBjb2xvcjogd2hpdGU7XG5cbn1cbmZvcm0ubm9ybWFsLWZvcm17XG4gIG1hcmdpbjogMTBweDtcbn1cbi5jb250cm9scy1jb250YWluZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1JTtcbn1cbi5jb250cm9scy1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG4gIH1cblxuLm1hdC1ncmlkLXRpbGUge1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG4uZXJyb3ItbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJlZDtcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9ue1xubWFyZ2luOiAxMHB4IDE1cHg7XG59XG4ubWF0LXN0cm9rZWQtYnV0dG9ue1xubWFyZ2luOiAxMHB4IDE1cHg7XG59XG4ubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtZmFiLm1hdC1wcmltYXJ5LCAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5e1xuYmFja2dyb3VuZC1jb2xvcjogIzEwMDNhMDtcbn1cbiIsImZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogIzAwMDBBMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5mb3JtLm5vcm1hbC1mb3JtIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uY29udHJvbHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4uY29udHJvbHMtY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWdyaWQtdGlsZSB7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIG1hcmdpbjogMTBweCAxNXB4O1xufVxuXG4ubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XG59XG5cbi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1mYWIubWF0LXByaW1hcnksIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwM2EwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/threshold/blood-pressure/blood-pressure-dialog/blood-pressure-dialog.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/threshold/blood-pressure/blood-pressure-dialog/blood-pressure-dialog.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: BloodPressureDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloodPressureDialogComponent", function() { return BloodPressureDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_restheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/restheader.service */ "./src/app/restheader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _blood_pressure_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blood-pressure.service */ "./src/app/threshold/blood-pressure/blood-pressure.service.ts");








var BloodPressureDialogComponent = /** @class */ (function () {
    function BloodPressureDialogComponent(bloodPressureService, httpClient, restHeaderService, dialogRef, notificationService, data) {
        this.bloodPressureService = bloodPressureService;
        this.httpClient = httpClient;
        this.restHeaderService = restHeaderService;
        this.dialogRef = dialogRef;
        this.notificationService = notificationService;
        this.data = data;
        this.errormessages = [];
        this.editBloodPressure = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, data);
        if (this.editBloodPressure.BloodPressureID == null) {
            this.action = 'New';
        }
        else {
            this.action = 'Edit';
        }
    }
    BloodPressureDialogComponent.prototype.ngOnInit = function () {
        if (this.action == 'Edit') {
            this.bloodPressureFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                BloodPressureID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editBloodPressure.BloodPressureID),
                LowMap: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editBloodPressure.LowMAP, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
                NormalLowMAP: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editBloodPressure.NormalLowMAP, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
                NormalHighMAP: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editBloodPressure.NormalHighMAP, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
                HighMap: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editBloodPressure.HighMAP, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
                BPIndex: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editBloodPressure.BPIndex, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            });
        }
        else {
            this.bloodPressureFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                BloodPressureID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
                LowMap: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
                NormalLowMAP: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
                NormalHighMAP: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
                HighMap: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
                BPIndex: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            });
        }
    };
    BloodPressureDialogComponent.prototype.saveBloodPressure = function (bloodPressure) {
        var _this = this;
        if (this.action == 'Edit') {
            console.log();
            this.bloodPressureService.editBloodPressure(bloodPressure)
                .subscribe(function (data) {
                // console.log(data)
                _this.notificationService.success(' Blood Pressure MAP updated successfully');
                _this.dialogRef.close({ event: _this.action, data: data });
            }, function (error) {
                _this.throwErrors(error);
            });
        }
        else {
            this.bloodPressureService.addBloodPressure(bloodPressure)
                .subscribe(function (data) {
                _this.notificationService.success(' Blood Pressure MAP added successfully');
                _this.dialogRef.close({ event: _this.action, data: data });
            }, function (error) {
                _this.throwErrors(error);
            });
        }
    };
    BloodPressureDialogComponent.prototype.throwErrors = function (error) {
        this.errormessages = [];
        var errors = [];
        var frmGroup = this.bloodPressureFormGroup;
        Object.keys(error).map(function (key) {
            if (key == 'error') {
                var err_1 = error[key];
                Object.keys(err_1).map(function (key) {
                    var formControl = frmGroup.get(key);
                    if (formControl) {
                        var msg_1 = '';
                        if (key == 'BPIndex') {
                            err_1[key].forEach(function (element) {
                                if (element.includes('already'))
                                    msg_1 = 'BP Index already exists. Please enter a unique BP Index';
                            });
                        }
                        if (!msg_1) {
                            err_1[key].forEach(function (element) {
                                msg_1 = element;
                            });
                        }
                        formControl.setErrors({
                            serverError: msg_1
                        });
                    }
                    else {
                        err_1[key].forEach(function (element) {
                            errors.push(element);
                        });
                    }
                });
            }
        });
        this.errormessages = this.errormessages.concat(errors);
    };
    BloodPressureDialogComponent.prototype.cancelBloodPressure = function () {
        this.notificationService.warn('Operation Cancelled');
        this.dialogRef.close({ event: '' });
    };
    BloodPressureDialogComponent.ctorParameters = function () { return [
        { type: _blood_pressure_service__WEBPACK_IMPORTED_MODULE_7__["BloodPressureService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: src_app_restheader_service__WEBPACK_IMPORTED_MODULE_2__["RestheaderService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
    ]; };
    BloodPressureDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blood-pressure-dialog',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./blood-pressure-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/blood-pressure/blood-pressure-dialog/blood-pressure-dialog.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./blood-pressure-dialog.component.scss */ "./src/app/threshold/blood-pressure/blood-pressure-dialog/blood-pressure-dialog.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_blood_pressure_service__WEBPACK_IMPORTED_MODULE_7__["BloodPressureService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            src_app_restheader_service__WEBPACK_IMPORTED_MODULE_2__["RestheaderService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
            _shared_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"], Object])
    ], BloodPressureDialogComponent);
    return BloodPressureDialogComponent;
}());



/***/ }),

/***/ "./src/app/threshold/blood-pressure/blood-pressure.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/threshold/blood-pressure/blood-pressure.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th.mat-header-cell {\n  text-align: center !important;\n  border: 0.5px solid #CCC;\n  padding: 0 !important;\n  background-color: #0000A0;\n  color: white;\n}\n\ntd.mat-cell {\n  text-align: center !important;\n  border: 0.5px solid #CCC;\n  padding: 0 !important;\n}\n\ntr.mat-header-row {\n  height: 30px;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  font-weight: lighter;\n  height: 104px;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXdlaWxpL0Rlc2t0b3AvUkVBQ0gvcmVhY2gvSGF6bWF0LWNsaWVudC9zcmMvYXBwL3RocmVzaG9sZC9ibG9vZC1wcmVzc3VyZS9ibG9vZC1wcmVzc3VyZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhyZXNob2xkL2Jsb29kLXByZXNzdXJlL2Jsb29kLXByZXNzdXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFO0VBQ0UsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FESUU7RUFDRSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUNESjs7QURJRTtFQUNFLFlBQUE7QUNESjs7QURJRTtFQUNFLHNCQUFBO0FDREo7O0FESUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNESjs7QURJRTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUVBLG9CQUFBO0VBRUEsYUFBQTtBQ0hKOztBRE1FO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNISjs7QURNRTtFQUNFLGFBQUE7QUNISjs7QURNRTtFQUNFLFlBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3RocmVzaG9sZC9ibG9vZC1wcmVzc3VyZS9ibG9vZC1wcmVzc3VyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgdGgubWF0LWhlYWRlci1jZWxsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNDQ0M7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwQTA7XG4gICAgY29sb3I6IHdoaXRlO1xuICBcbiAgXG4gIH1cbiAgXG4gIHRkLm1hdC1jZWxsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNDQ0M7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB9XG4gICAgXG4gIHRyLm1hdC1oZWFkZXItcm93IHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuICB9XG4gIFxuICAuZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1lbGVtZW50LWRpYWdyYW0ge1xuICAgIG1pbi13aWR0aDogODBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICAvLyBwYWRkaW5nOiA4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgLy8gbWFyZ2luOiA4cHggMDtcbiAgICBoZWlnaHQ6IDEwNHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1lbGVtZW50LXN5bWJvbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24ge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb24ge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICAiLCJ0aC5tYXQtaGVhZGVyLWNlbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjQ0NDO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwQTA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxudGQubWF0LWNlbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjQ0NDO1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbnRyLm1hdC1oZWFkZXItcm93IHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kaWFncmFtIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGhlaWdodDogMTA0cHg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtc3ltYm9sIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb24ge1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */");

/***/ }),

/***/ "./src/app/threshold/blood-pressure/blood-pressure.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/threshold/blood-pressure/blood-pressure.component.ts ***!
  \**********************************************************************/
/*! exports provided: BloodPressureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloodPressureComponent", function() { return BloodPressureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _blood_pressure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blood-pressure.service */ "./src/app/threshold/blood-pressure/blood-pressure.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sort.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _blood_pressure_dialog_blood_pressure_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blood-pressure-dialog/blood-pressure-dialog.component */ "./src/app/threshold/blood-pressure/blood-pressure-dialog/blood-pressure-dialog.component.ts");










var BloodPressureComponent = /** @class */ (function () {
    function BloodPressureComponent(bloodPressureService, notificationService, dialog, changeDetectorRefs) {
        this.bloodPressureService = bloodPressureService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.changeDetectorRefs = changeDetectorRefs;
        this.displayedColumns = [
            'BPIndex', 'LowMAP', 'NormalLowMAP', 'NormalHighMAP', 'HighMAP', 'Actions'
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
    }
    BloodPressureComponent.prototype.ngOnInit = function () {
        console.log('================> bloodPressureComponent ngOnInit');
        this.getBloodPressure();
    };
    BloodPressureComponent.prototype.getBloodPressure = function () {
        var _this = this;
        this.bloodPressureService.getBloodPressure().subscribe(function (data) {
            if (data.length > 0) {
                console.log('BloodPressureList ', data);
                _this.dataSource.data = data;
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
                _this.changeDetectorRefs.detectChanges();
            }
        }, function (error) {
            console.log('Blood Pressure component is not working', error);
        });
    };
    BloodPressureComponent.prototype.addBloodPressure = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        var dialogRef = this.dialog.open(_blood_pressure_dialog_blood_pressure_dialog_component__WEBPACK_IMPORTED_MODULE_9__["BloodPressureDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.event === 'New') {
                var bloodPressure = void 0;
                bloodPressure = result.data;
                _this.dataSource.data.push(bloodPressure);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
        });
    };
    BloodPressureComponent.prototype.updateBloodPressure = function (bloodPressure) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        dialogConfig.data = bloodPressure;
        var dialogRef = this.dialog.open(_blood_pressure_dialog_blood_pressure_dialog_component__WEBPACK_IMPORTED_MODULE_9__["BloodPressureDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.event === 'Edit') {
                var bloodPressure_1;
                bloodPressure_1 = result.data;
                var index = _this.dataSource.data.findIndex(function (e) { return e.BloodPressureID === bloodPressure_1.BloodPressureID; });
                _this.dataSource.data[index] = bloodPressure_1;
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
        });
    };
    BloodPressureComponent.prototype.deleteBloodPressure = function (id) {
        var displaymessage = 'Are you sure you want to remove this MAP?';
        this.openDialog(displaymessage, id);
    };
    BloodPressureComponent.prototype.openDialog = function (message, id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], {
            width: '50rem',
            data: { message: message }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result.event);
            if (result.event === 'Remove') {
                _this.bloodPressureService.deleteBloodPressure(id).subscribe(function (data) {
                    _this.dataSource.data = _this.dataSource.data.filter(function (item) { return item.BloodPressureID != id.BloodPressureID; });
                    _this.notificationService.success('Successfully Deleted');
                }, function (error) {
                    console.log('error', error);
                    _this.notificationService.error('Error occurred while deleting the MAP');
                });
            }
            else if (result.event === 'Cancel') {
                _this.notificationService.warn('Operation Cancelled');
            }
        });
    };
    BloodPressureComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    BloodPressureComponent.ctorParameters = function () { return [
        { type: _blood_pressure_service__WEBPACK_IMPORTED_MODULE_2__["BloodPressureService"] },
        { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], BloodPressureComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], BloodPressureComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"])
    ], BloodPressureComponent.prototype, "table", void 0);
    BloodPressureComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blood-pressure',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./blood-pressure.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/blood-pressure/blood-pressure.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./blood-pressure.component.scss */ "./src/app/threshold/blood-pressure/blood-pressure.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_blood_pressure_service__WEBPACK_IMPORTED_MODULE_2__["BloodPressureService"],
            _shared_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], BloodPressureComponent);
    return BloodPressureComponent;
}());



/***/ }),

/***/ "./src/app/threshold/blood-pressure/blood-pressure.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/threshold/blood-pressure/blood-pressure.service.ts ***!
  \********************************************************************/
/*! exports provided: BloodPressureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloodPressureService", function() { return BloodPressureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_app_restheader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/restheader.service */ "./src/app/restheader.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var BloodPressureService = /** @class */ (function () {
    function BloodPressureService(httpClient, restheaderService) {
        this.httpClient = httpClient;
        this.restheaderService = restheaderService;
    }
    BloodPressureService.prototype.getBloodPressure = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'bloodpressure_json/', this.restheaderService.httpheader);
    };
    BloodPressureService.prototype.addBloodPressure = function (bloodPressure) {
        var requestBody = {
            BloodPressureID: bloodPressure.BloodPressureID,
            LowMAP: bloodPressure.LowMAP,
            NormalLowMAP: bloodPressure.NormalLowMAP,
            NormalHighMAP: bloodPressure.NormalHighMAP,
            HighMAP: bloodPressure.HighMAP,
            BPIndex: bloodPressure.BPIndex
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'bloodpressure_json/', requestBody, this.restheaderService.httpheader);
    };
    BloodPressureService.prototype.editBloodPressure = function (bloodPressure) {
        var requestBody = {
            LowMAP: bloodPressure.LowMAP,
            NormalLowMAP: bloodPressure.NormalLowMAP,
            NormalHighMAP: bloodPressure.NormalHighMAP,
            HighMAP: bloodPressure.HighMAP,
            BPIndex: bloodPressure.BPIndex
        };
        var id = bloodPressure.BloodPressureID;
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'bloodpressure_json/' + id + '/', requestBody, this.restheaderService.httpheader);
    };
    BloodPressureService.prototype.deleteBloodPressure = function (bloodPressure) {
        var requestBody = {
            LowMAP: bloodPressure.LowMAP,
            NormalLowMAP: bloodPressure.NormalLowMAP,
            NormalHighMAP: bloodPressure.NormalHighMAP,
            HighMAP: bloodPressure.HighMAP,
            BPIndex: bloodPressure.BPIndex
        };
        var id = bloodPressure.BloodPressureID;
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'bloodpressure_json/' + id + '/', this.restheaderService.httpheader);
    };
    BloodPressureService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_restheader_service__WEBPACK_IMPORTED_MODULE_3__["RestheaderService"] }
    ]; };
    BloodPressureService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_restheader_service__WEBPACK_IMPORTED_MODULE_3__["RestheaderService"]])
    ], BloodPressureService);
    return BloodPressureService;
}());



/***/ }),

/***/ "./src/app/threshold/heart-rate/heart-rate-add/heart-rate-add.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/threshold/heart-rate/heart-rate-add/heart-rate-add.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  width: 100%;\n}\n\n.mat-toolbar {\n  background: #0000A0;\n  color: white;\n}\n\nform.normal-form {\n  margin: 10px;\n}\n\n.controls-container {\n  width: 100%;\n  padding: 5%;\n}\n\n.controls-container > * {\n  width: 100%;\n}\n\n.mat-grid-tile {\n  padding-top: 0px !important;\n}\n\n.error-message {\n  text-align: center;\n  color: red;\n}\n\n.mat-raised-button {\n  margin: 10px 15px;\n}\n\n.mat-stroked-button {\n  margin: 10px 15px;\n}\n\n.mat-stroked-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n  background-color: #1003a0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXdlaWxpL0Rlc2t0b3AvUkVBQ0gvcmVhY2gvSGF6bWF0LWNsaWVudC9zcmMvYXBwL3RocmVzaG9sZC9oZWFydC1yYXRlL2hlYXJ0LXJhdGUtYWRkL2hlYXJ0LXJhdGUtYWRkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aHJlc2hvbGQvaGVhcnQtcmF0ZS9oZWFydC1yYXRlLWFkZC9oZWFydC1yYXRlLWFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURDQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ0VKOztBRENBO0VBQ0ksWUFBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7QUNJSjs7QUREQTtFQUNJLDJCQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNLSjs7QURGQTtFQUNFLGlCQUFBO0FDS0Y7O0FESEE7RUFDRSxpQkFBQTtBQ01GOztBREpBO0VBQ0UseUJBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL3RocmVzaG9sZC9oZWFydC1yYXRlL2hlYXJ0LXJhdGUtYWRkL2hlYXJ0LXJhdGUtYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ubWF0LXRvb2xiYXJ7XG4gICAgYmFja2dyb3VuZDogIzAwMDBBMDtcbiAgICBjb2xvcjogd2hpdGU7XG5cbn1cbmZvcm0ubm9ybWFsLWZvcm17XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuLmNvbnRyb2xzLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1JTtcbn1cbi5jb250cm9scy1jb250YWluZXIgPiAqIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbi5tYXQtZ3JpZC10aWxlIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG4uZXJyb3ItbWVzc2FnZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbntcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XG59XG4ubWF0LXN0cm9rZWQtYnV0dG9ue1xuICBtYXJnaW46IDEwcHggMTVweDtcbn1cbi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1mYWIubWF0LXByaW1hcnksIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnl7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDAzYTA7XG59XG4iLCJmb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6ICMwMDAwQTA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuZm9ybS5ub3JtYWwtZm9ybSB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmNvbnRyb2xzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1JTtcbn1cblxuLmNvbnRyb2xzLWNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1ncmlkLXRpbGUge1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmVkO1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b24ge1xuICBtYXJnaW46IDEwcHggMTVweDtcbn1cblxuLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gIG1hcmdpbjogMTBweCAxNXB4O1xufVxuXG4ubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtZmFiLm1hdC1wcmltYXJ5LCAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMDNhMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/threshold/heart-rate/heart-rate-add/heart-rate-add.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/threshold/heart-rate/heart-rate-add/heart-rate-add.component.ts ***!
  \*********************************************************************************/
/*! exports provided: HeartRateAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartRateAddComponent", function() { return HeartRateAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_restheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/restheader.service */ "./src/app/restheader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _heart_rate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../heart-rate.service */ "./src/app/threshold/heart-rate/heart-rate.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/notification.service */ "./src/app/shared/notification.service.ts");








var HeartRateAddComponent = /** @class */ (function () {
    function HeartRateAddComponent(heartRateService, httpClient, restHeaderService, dialogRef, notificationService, data) {
        this.heartRateService = heartRateService;
        this.httpClient = httpClient;
        this.restHeaderService = restHeaderService;
        this.dialogRef = dialogRef;
        this.notificationService = notificationService;
        this.data = data;
        this.errormessages = [];
        this.editHeartRate = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, data);
        if (this.editHeartRate.HeartRateID == null) {
            this.action = 'New';
        }
        else {
            this.action = 'Edit';
        }
    }
    HeartRateAddComponent.prototype.ngOnInit = function () {
        if (this.action == 'Edit') {
            this.heartRateFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                HeartRateID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editHeartRate.HeartRateID),
                AgeGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editHeartRate.AgeGroup, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
                LowCritical: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editHeartRate.LowCritical, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
                LowTargetHR: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editHeartRate.LowTargetHR, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
                HighTargetHR: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editHeartRate.HighTargetHR, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
                HighCritical: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editHeartRate.HighCritical, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
                HRIndex: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editHeartRate.HRIndex, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            });
        }
        else {
            this.heartRateFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                HeartRateID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
                AgeGroup: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
                LowCritical: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
                LowTargetHR: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
                HighTargetHR: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
                HighCritical: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
                HRIndex: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            });
        }
    };
    HeartRateAddComponent.prototype.saveHeartRate = function (heartRate) {
        var _this = this;
        if (this.action == 'Edit') {
            console.log();
            this.heartRateService.editHeartRate(heartRate)
                .subscribe(function (data) {
                // console.log(data)
                _this.notificationService.success(' Heart Rate updated successfully');
                _this.dialogRef.close({ event: _this.action, data: data });
            }, function (error) {
                _this.throwErrors(error);
            });
        }
        else {
            this.heartRateService.addHeartRate(heartRate)
                .subscribe(function (data) {
                _this.notificationService.success(' Heart Rate added successfully');
                _this.dialogRef.close({ event: _this.action, data: data });
            }, function (error) {
                // console.log(error);
                _this.throwErrors(error);
            });
        }
    };
    HeartRateAddComponent.prototype.checkLowCritical = function (group) {
        if (group.controls.LowCritical.value > group.controls.LowTargetHR) {
            return { lowCriticalGreaterThanLowTarget: true };
        }
        return null;
    };
    HeartRateAddComponent.prototype.throwErrors = function (error) {
        this.errormessages = [];
        var errors = [];
        var frmGroup = this.heartRateFormGroup;
        Object.keys(error).map(function (key) {
            if (key == 'error') {
                var err_1 = error[key];
                Object.keys(err_1).map(function (key) {
                    var formControl = frmGroup.get(key);
                    if (formControl) {
                        var msg_1 = '';
                        if (key == 'HRIndex') {
                            err_1[key].forEach(function (element) {
                                if (element.includes('already'))
                                    msg_1 = 'HR Index already exists. Please enter a unique HR Index';
                            });
                        }
                        if (!msg_1) {
                            err_1[key].forEach(function (element) {
                                msg_1 = element;
                            });
                        }
                        formControl.setErrors({
                            serverError: msg_1
                        });
                    }
                    else {
                        err_1[key].forEach(function (element) {
                            errors.push(element);
                        });
                    }
                });
            }
        });
        this.errormessages = this.errormessages.concat(errors);
    };
    HeartRateAddComponent.prototype.cancelHeartRate = function () {
        this.notificationService.warn('Operation Cancelled');
        this.dialogRef.close({ event: '' });
    };
    HeartRateAddComponent.ctorParameters = function () { return [
        { type: _heart_rate_service__WEBPACK_IMPORTED_MODULE_5__["HeartRateService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: src_app_restheader_service__WEBPACK_IMPORTED_MODULE_2__["RestheaderService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] },
        { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"],] }] }
    ]; };
    HeartRateAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-heart-rate-add',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./heart-rate-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/heart-rate/heart-rate-add/heart-rate-add.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./heart-rate-add.component.scss */ "./src/app/threshold/heart-rate/heart-rate-add/heart-rate-add.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_heart_rate_service__WEBPACK_IMPORTED_MODULE_5__["HeartRateService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            src_app_restheader_service__WEBPACK_IMPORTED_MODULE_2__["RestheaderService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"],
            _shared_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"], Object])
    ], HeartRateAddComponent);
    return HeartRateAddComponent;
}());



/***/ }),

/***/ "./src/app/threshold/heart-rate/heart-rate.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/threshold/heart-rate/heart-rate.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th.mat-header-cell {\n  text-align: center !important;\n  border: 0.5px solid #CCC;\n  padding: 0 !important;\n  background-color: #0000A0;\n  color: white;\n}\n\ntd.mat-cell {\n  text-align: center !important;\n  border: 0.5px solid #CCC;\n  padding: 0 !important;\n}\n\ntr.mat-header-row {\n  height: 30px;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  font-weight: lighter;\n  height: 104px;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXdlaWxpL0Rlc2t0b3AvUkVBQ0gvcmVhY2gvSGF6bWF0LWNsaWVudC9zcmMvYXBwL3RocmVzaG9sZC9oZWFydC1yYXRlL2hlYXJ0LXJhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RocmVzaG9sZC9oZWFydC1yYXRlL2hlYXJ0LXJhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNBSjs7QURLRTtFQUNFLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBQ0ZKOztBREtFO0VBQ0UsWUFBQTtBQ0ZKOztBREtFO0VBQ0Usc0JBQUE7QUNGSjs7QURLRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQ0ZKOztBREtFO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBRUEsb0JBQUE7RUFFQSxhQUFBO0FDSko7O0FET0U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0pKOztBRE9FO0VBQ0UsYUFBQTtBQ0pKOztBRE9FO0VBQ0UsWUFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvdGhyZXNob2xkL2hlYXJ0LXJhdGUvaGVhcnQtcmF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICB0aC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMC41cHggc29saWQgI0NDQztcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDBBMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIFxuICBcbiAgfVxuICBcbiAgdGQubWF0LWNlbGwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMC41cHggc29saWQgI0NDQztcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgICBcbiAgdHIubWF0LWhlYWRlci1yb3cge1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWVsZW1lbnQtZGlhZ3JhbSB7XG4gICAgbWluLXdpZHRoOiA4MHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIC8vIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAvLyBtYXJnaW46IDhweCAwO1xuICAgIGhlaWdodDogMTA0cHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWVsZW1lbnQtc3ltYm9sIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gICIsInRoLm1hdC1oZWFkZXItY2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNDQ0M7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDBBMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG50ZC5tYXQtY2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNDQ0M7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxudHIubWF0LWhlYWRlci1yb3cge1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRpYWdyYW0ge1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XG4gIG9wYWNpdHk6IDAuNTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/threshold/heart-rate/heart-rate.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/threshold/heart-rate/heart-rate.component.ts ***!
  \**************************************************************/
/*! exports provided: HeartRateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartRateComponent", function() { return HeartRateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _heart_rate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heart-rate.service */ "./src/app/threshold/heart-rate/heart-rate.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sort.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var _heart_rate_add_heart_rate_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./heart-rate-add/heart-rate-add.component */ "./src/app/threshold/heart-rate/heart-rate-add/heart-rate-add.component.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/notification.service */ "./src/app/shared/notification.service.ts");










var HeartRateComponent = /** @class */ (function () {
    function HeartRateComponent(heartRateService, notificationService, dialog, changeDetectorRefs) {
        this.heartRateService = heartRateService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.changeDetectorRefs = changeDetectorRefs;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.displayedColumns = ['HRIndex', 'AgeGroup', 'LowCritical', 'LowTargetHR', 'HighTargetHR', 'HighCritical', 'Actions'];
    }
    HeartRateComponent.prototype.ngOnInit = function () {
        console.log('================> heartrateComponent ngOnInit');
        this.getHeartRate();
    };
    HeartRateComponent.prototype.getHeartRate = function () {
        var _this = this;
        this.heartRateService.getHeartRate().subscribe(function (data) {
            if (data.length > 0) {
                console.log('HeartRateList ', data);
                _this.dataSource.data = data;
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
                _this.changeDetectorRefs.detectChanges();
            }
        }, function (error) {
            console.log('Heart rate component not working', error);
        });
    };
    HeartRateComponent.prototype.addHeartRate = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        var dialogRef = this.dialog.open(_heart_rate_add_heart_rate_add_component__WEBPACK_IMPORTED_MODULE_8__["HeartRateAddComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.event === 'New') {
                var heartRate = void 0;
                heartRate = result.data;
                _this.dataSource.data.push(heartRate);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
        });
    };
    HeartRateComponent.prototype.updateHeartRate = function (heartRate) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        dialogConfig.data = heartRate;
        var dialogRef = this.dialog.open(_heart_rate_add_heart_rate_add_component__WEBPACK_IMPORTED_MODULE_8__["HeartRateAddComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.event === 'Edit') {
                var heartRate_1;
                heartRate_1 = result.data;
                var index = _this.dataSource.data.findIndex(function (e) { return e.HeartRateID === heartRate_1.HeartRateID; });
                _this.dataSource.data[index] = heartRate_1;
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
        });
    };
    HeartRateComponent.prototype.deleteHeartRate = function (id) {
        var displaymessage = 'Are you sure you want to remove this Heart Rate?';
        this.openDialog(displaymessage, id);
    };
    HeartRateComponent.prototype.openDialog = function (message, id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], {
            width: '50rem',
            data: { message: message }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result.event);
            if (result.event === 'Remove') {
                _this.heartRateService.deleteHeartRate(id).subscribe(function (data) {
                    _this.dataSource.data = _this.dataSource.data.filter(function (item) { return item.HeartRateID != id.HeartRateID; });
                    _this.notificationService.success('Successfully Deleted');
                }, function (error) {
                    console.log('error', error);
                    _this.notificationService.error('Error occurred while deleting the Heart Rate');
                });
            }
            else if (result.event === 'Cancel') {
                _this.notificationService.warn('Operation Cancelled');
            }
        });
    };
    HeartRateComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    HeartRateComponent.ctorParameters = function () { return [
        { type: _heart_rate_service__WEBPACK_IMPORTED_MODULE_2__["HeartRateService"] },
        { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], HeartRateComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], HeartRateComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"])
    ], HeartRateComponent.prototype, "table", void 0);
    HeartRateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-heart-rate',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./heart-rate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/heart-rate/heart-rate.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./heart-rate.component.scss */ "./src/app/threshold/heart-rate/heart-rate.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_heart_rate_service__WEBPACK_IMPORTED_MODULE_2__["HeartRateService"],
            _shared_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], HeartRateComponent);
    return HeartRateComponent;
}());



/***/ }),

/***/ "./src/app/threshold/heart-rate/heart-rate.service.ts":
/*!************************************************************!*\
  !*** ./src/app/threshold/heart-rate/heart-rate.service.ts ***!
  \************************************************************/
/*! exports provided: HeartRateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartRateService", function() { return HeartRateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_app_restheader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/restheader.service */ "./src/app/restheader.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var HeartRateService = /** @class */ (function () {
    function HeartRateService(httpClient, restheaderService) {
        this.httpClient = httpClient;
        this.restheaderService = restheaderService;
    }
    HeartRateService.prototype.getHeartRate = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'heartrate_json', this.restheaderService.httpheader);
    };
    HeartRateService.prototype.addHeartRate = function (heartRate) {
        var requestBody = {
            AgeGroup: heartRate.AgeGroup,
            LowCritical: heartRate.LowCritical,
            LowTargetHR: heartRate.LowTargetHR,
            HighTargetHR: heartRate.HighTargetHR,
            HighCritical: heartRate.HighCritical,
            HRIndex: heartRate.HRIndex
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'heartrate_json/', requestBody, this.restheaderService.httpheader);
    };
    HeartRateService.prototype.editHeartRate = function (heartRate) {
        var requestBody = {
            AgeGroup: heartRate.AgeGroup,
            LowCritical: heartRate.LowCritical,
            LowTargetHR: heartRate.LowTargetHR,
            HighTargetHR: heartRate.HighTargetHR,
            HighCritical: heartRate.HighCritical,
            HRIndex: heartRate.HRIndex
        };
        var id = heartRate.HeartRateID;
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'heartrate_json/' + id + '/', requestBody, this.restheaderService.httpheader);
    };
    HeartRateService.prototype.deleteHeartRate = function (heartRate) {
        var requestBody = {
            HeartRateID: heartRate.HeartRateID,
            AgeGroup: heartRate.AgeGroup,
            LowCritical: heartRate.LowCritical,
            LowTargetHR: heartRate.LowTargetHR,
            HighTargetHR: heartRate.HighTargetHR,
            HighCritical: heartRate.HighCritical,
            HRIndex: heartRate.HRIndex
        };
        var id = heartRate.HeartRateID;
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'heartrate_json/' + id + '/', this.restheaderService.httpheader);
    };
    HeartRateService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_restheader_service__WEBPACK_IMPORTED_MODULE_3__["RestheaderService"] }
    ]; };
    HeartRateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_restheader_service__WEBPACK_IMPORTED_MODULE_3__["RestheaderService"]])
    ], HeartRateService);
    return HeartRateService;
}());



/***/ }),

/***/ "./src/app/threshold/heat-index/heat-index-dialog/heat-index-dialog.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/threshold/heat-index/heat-index-dialog/heat-index-dialog.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  width: 100%;\n}\n\n.mat-toolbar {\n  background: #0000A0;\n  color: white;\n}\n\nform.normal-form {\n  margin: 10px;\n}\n\n.controls-container {\n  width: 100%;\n  padding: 5%;\n}\n\n.controls-container > * {\n  width: 100%;\n}\n\n.mat-grid-tile {\n  padding-top: 0px !important;\n}\n\n.error-message {\n  text-align: center;\n  color: red;\n}\n\n.mat-raised-button {\n  margin: 10px 15px;\n}\n\n.mat-stroked-button {\n  margin: 10px 15px;\n}\n\n.mat-stroked-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n  background-color: #1003a0;\n}\n\n.mat-raised-button[disabled] {\n  color: rgba(0, 0, 0, 0.26);\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXdlaWxpL0Rlc2t0b3AvUkVBQ0gvcmVhY2gvSGF6bWF0LWNsaWVudC9zcmMvYXBwL3RocmVzaG9sZC9oZWF0LWluZGV4L2hlYXQtaW5kZXgtZGlhbG9nL2hlYXQtaW5kZXgtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aHJlc2hvbGQvaGVhdC1pbmRleC9oZWF0LWluZGV4LWRpYWxvZy9oZWF0LWluZGV4LWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURDQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ0VKOztBRENBO0VBQ0ksWUFBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7QUNJSjs7QUREQTtFQUNJLDJCQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNLSjs7QURGQTtFQUNFLGlCQUFBO0FDS0Y7O0FESEE7RUFDRSxpQkFBQTtBQ01GOztBREpBO0VBQ0UseUJBQUE7QUNPRjs7QURKQTtFQUNFLDBCQUFBO0VBQ0EsNkJBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL3RocmVzaG9sZC9oZWF0LWluZGV4L2hlYXQtaW5kZXgtZGlhbG9nL2hlYXQtaW5kZXgtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ubWF0LXRvb2xiYXJ7XG4gICAgYmFja2dyb3VuZDogIzAwMDBBMDtcbiAgICBjb2xvcjogd2hpdGU7XG5cbn1cbmZvcm0ubm9ybWFsLWZvcm17XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuLmNvbnRyb2xzLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1JTtcbn1cbi5jb250cm9scy1jb250YWluZXIgPiAqIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbi5tYXQtZ3JpZC10aWxlIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG4uZXJyb3ItbWVzc2FnZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbntcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XG59XG4ubWF0LXN0cm9rZWQtYnV0dG9ue1xuICBtYXJnaW46IDEwcHggMTVweDtcbn1cbi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1mYWIubWF0LXByaW1hcnksIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnl7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDAzYTA7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbltkaXNhYmxlZF0ge1xuICBjb2xvciA6IHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuIiwiZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjMDAwMEEwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmZvcm0ubm9ybWFsLWZvcm0ge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5jb250cm9scy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNSU7XG59XG5cbi5jb250cm9scy1jb250YWluZXIgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZ3JpZC10aWxlIHtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJlZDtcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XG59XG5cbi5tYXQtc3Ryb2tlZC1idXR0b24ge1xuICBtYXJnaW46IDEwcHggMTVweDtcbn1cblxuLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LWZhYi5tYXQtcHJpbWFyeSwgLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDAzYTA7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbltkaXNhYmxlZF0ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/threshold/heat-index/heat-index-dialog/heat-index-dialog.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/threshold/heat-index/heat-index-dialog/heat-index-dialog.component.ts ***!
  \***************************************************************************************/
/*! exports provided: HeatIndexDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatIndexDialogComponent", function() { return HeatIndexDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_restheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/restheader.service */ "./src/app/restheader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _heat_index_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../heat-index.service */ "./src/app/threshold/heat-index/heat-index.service.ts");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/__ivy_ngcc__/fesm5/rxweb-reactive-form-validators.js");









//cross-field validation for ModerateRisk and HighRisk
var numberValidator = function (control) {
    var highRiskControl = control.get('HighRisk');
    var moderateRiskControl = control.get('ModerateRisk');
    var highRisk = Number(highRiskControl.value);
    var moderateRisk = Number(moderateRiskControl.value);
    if (!highRiskControl || !moderateRiskControl) {
        return null;
    }
    if (!highRisk || !moderateRisk) {
        return null;
    }
    return moderateRisk > highRisk ? { numberOutOfRange: true } : null;
};
var HeatIndexDialogComponent = /** @class */ (function () {
    function HeatIndexDialogComponent(heatIndexService, httpClient, restHeaderService, dialogRef, notificationService, data) {
        this.heatIndexService = heatIndexService;
        this.httpClient = httpClient;
        this.restHeaderService = restHeaderService;
        this.dialogRef = dialogRef;
        this.notificationService = notificationService;
        this.data = data;
        this.errormessages = [];
        this.editHeatIndex = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, data);
        if (this.editHeatIndex.HeatIndexID == null) {
            this.action = 'New';
        }
        else {
            this.action = 'Edit';
        }
    }
    HeatIndexDialogComponent.prototype.ngOnInit = function () {
        _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormConfig"].set({ "validationMessage": { "greaterThan": "High Risk should be greater than Low Risk" } });
        if (this.action == 'Edit') {
            this.heatIndexFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                HeatIndexID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editHeatIndex.HeatIndexID),
                ModerateRisk: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editHeatIndex.ModerateRisk, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
                HighRisk: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editHeatIndex.HighRisk, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__["RxwebValidators"].greaterThan({ fieldName: 'ModerateRisk' })]),
                HIIndex: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editHeatIndex.HIIndex, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            }, { validators: numberValidator });
        }
        else {
            this.heatIndexFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                HeatIndexID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
                ModerateRisk: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
                HighRisk: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__["RxwebValidators"].greaterThan({ fieldName: 'ModerateRisk' })]),
                HIIndex: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            }, { validators: numberValidator });
        }
    };
    HeatIndexDialogComponent.prototype.saveHeatIndex = function (heatIndexDetails) {
        var _this = this;
        if (this.action == 'Edit') {
            console.log();
            this.heatIndexService.editHeatIndex(heatIndexDetails)
                .subscribe(function (data) {
                // console.log(data)
                _this.notificationService.success(' Heat Index updated successfully');
                _this.dialogRef.close({ event: _this.action, data: data });
            }, function (error) {
                _this.throwErrors(error);
            });
        }
        else {
            this.heatIndexService.addHeatIndex(heatIndexDetails)
                .subscribe(function (data) {
                _this.notificationService.success(' Heat Index added successfully');
                _this.dialogRef.close({ event: _this.action, data: data });
            }, function (error) {
                _this.throwErrors(error);
            });
        }
    };
    HeatIndexDialogComponent.prototype.throwErrors = function (error) {
        this.errormessages = [];
        var errors = [];
        var frmGroup = this.heatIndexFormGroup;
        Object.keys(error).map(function (key) {
            if (key == 'error') {
                var err_1 = error[key];
                Object.keys(err_1).map(function (key) {
                    var formControl = frmGroup.get(key);
                    if (formControl) {
                        var msg_1 = '';
                        if (key == 'HIIndex') {
                            err_1[key].forEach(function (element) {
                                if (element.includes('already'))
                                    msg_1 = 'HI Index already exists. Please enter a unique HR Index';
                            });
                        }
                        if (!msg_1) {
                            err_1[key].forEach(function (element) {
                                msg_1 = element;
                            });
                        }
                        formControl.setErrors({
                            serverError: msg_1
                        });
                    }
                    else {
                        err_1[key].forEach(function (element) {
                            errors.push(element);
                        });
                    }
                });
            }
        });
        this.errormessages = this.errormessages.concat(errors);
    };
    HeatIndexDialogComponent.prototype.cancelHeatIndex = function () {
        this.notificationService.warn('Operation Cancelled');
        this.dialogRef.close({ event: '' });
    };
    HeatIndexDialogComponent.ctorParameters = function () { return [
        { type: _heat_index_service__WEBPACK_IMPORTED_MODULE_7__["HeatIndexService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: src_app_restheader_service__WEBPACK_IMPORTED_MODULE_2__["RestheaderService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
    ]; };
    HeatIndexDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-heat-index-dialog',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./heat-index-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/heat-index/heat-index-dialog/heat-index-dialog.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./heat-index-dialog.component.scss */ "./src/app/threshold/heat-index/heat-index-dialog/heat-index-dialog.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_heat_index_service__WEBPACK_IMPORTED_MODULE_7__["HeatIndexService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            src_app_restheader_service__WEBPACK_IMPORTED_MODULE_2__["RestheaderService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
            _shared_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"], Object])
    ], HeatIndexDialogComponent);
    return HeatIndexDialogComponent;
}());



/***/ }),

/***/ "./src/app/threshold/heat-index/heat-index.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/threshold/heat-index/heat-index.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th.mat-header-cell {\n  text-align: center !important;\n  border: 0.5px solid #CCC;\n  padding: 0 !important;\n  background-color: #0000A0;\n  color: white;\n}\n\ntd.mat-cell {\n  text-align: center !important;\n  border: 0.5px solid #CCC;\n  padding: 0 !important;\n}\n\ntr.mat-header-row {\n  height: 30px;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  font-weight: lighter;\n  height: 104px;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXdlaWxpL0Rlc2t0b3AvUkVBQ0gvcmVhY2gvSGF6bWF0LWNsaWVudC9zcmMvYXBwL3RocmVzaG9sZC9oZWF0LWluZGV4L2hlYXQtaW5kZXguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RocmVzaG9sZC9oZWF0LWluZGV4L2hlYXQtaW5kZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNBSjs7QURLRTtFQUNFLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBQ0ZKOztBREtFO0VBQ0UsWUFBQTtBQ0ZKOztBREtFO0VBQ0Usc0JBQUE7QUNGSjs7QURLRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQ0ZKOztBREtFO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBRUEsb0JBQUE7RUFFQSxhQUFBO0FDSko7O0FET0U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0pKOztBRE9FO0VBQ0UsYUFBQTtBQ0pKOztBRE9FO0VBQ0UsWUFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvdGhyZXNob2xkL2hlYXQtaW5kZXgvaGVhdC1pbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICB0aC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMC41cHggc29saWQgI0NDQztcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDBBMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIFxuICBcbiAgfVxuICBcbiAgdGQubWF0LWNlbGwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMC41cHggc29saWQgI0NDQztcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgICBcbiAgdHIubWF0LWhlYWRlci1yb3cge1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWVsZW1lbnQtZGlhZ3JhbSB7XG4gICAgbWluLXdpZHRoOiA4MHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIC8vIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAvLyBtYXJnaW46IDhweCAwO1xuICAgIGhlaWdodDogMTA0cHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWVsZW1lbnQtc3ltYm9sIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gICIsInRoLm1hdC1oZWFkZXItY2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNDQ0M7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDBBMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG50ZC5tYXQtY2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNDQ0M7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxudHIubWF0LWhlYWRlci1yb3cge1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRpYWdyYW0ge1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XG4gIG9wYWNpdHk6IDAuNTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/threshold/heat-index/heat-index.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/threshold/heat-index/heat-index.component.ts ***!
  \**************************************************************/
/*! exports provided: HeatIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatIndexComponent", function() { return HeatIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _heat_index_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heat-index.service */ "./src/app/threshold/heat-index/heat-index.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sort.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var _heat_index_dialog_heat_index_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./heat-index-dialog/heat-index-dialog.component */ "./src/app/threshold/heat-index/heat-index-dialog/heat-index-dialog.component.ts");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/notification.service */ "./src/app/shared/notification.service.ts");










var HeatIndexComponent = /** @class */ (function () {
    function HeatIndexComponent(heatIndexService, notificationService, dialog, changeDetectorRefs) {
        this.heatIndexService = heatIndexService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.changeDetectorRefs = changeDetectorRefs;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.displayedColumns = ['HIIndex', 'ModerateRisk', 'HighRisk', 'Actions'];
    }
    HeatIndexComponent.prototype.ngOnInit = function () {
        console.log('================> heatIndexComponent ngOnInit');
        this.getHeatIndex();
    };
    HeatIndexComponent.prototype.getHeatIndex = function () {
        var _this = this;
        this.heatIndexService.getHeatIndex().subscribe(function (data) {
            if (data.length > 0) {
                console.log('HeatIndexList ', data);
                _this.dataSource.data = data;
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
                _this.changeDetectorRefs.detectChanges();
            }
        }, function (error) {
            console.log('Heat Index component not working', error);
        });
    };
    HeatIndexComponent.prototype.addHeatIndex = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        var dialogRef = this.dialog.open(_heat_index_dialog_heat_index_dialog_component__WEBPACK_IMPORTED_MODULE_8__["HeatIndexDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.event === 'New') {
                var heatindex = void 0;
                heatindex = result.data;
                _this.dataSource.data.push(heatindex);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
        });
    };
    HeatIndexComponent.prototype.updateHeatIndex = function (heatIndex) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        dialogConfig.data = heatIndex;
        var dialogRef = this.dialog.open(_heat_index_dialog_heat_index_dialog_component__WEBPACK_IMPORTED_MODULE_8__["HeatIndexDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.event === 'Edit') {
                var heatIndex_1;
                heatIndex_1 = result.data;
                var index = _this.dataSource.data.findIndex(function (e) { return e.HeatIndexID === heatIndex_1.HeatIndexID; });
                _this.dataSource.data[index] = heatIndex_1;
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
        });
    };
    HeatIndexComponent.prototype.deleteHeatIndex = function (id) {
        var displaymessage = 'Are you sure you want to remove this Heat Index?';
        this.openDialog(displaymessage, id);
    };
    HeatIndexComponent.prototype.openDialog = function (message, id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], {
            width: '50rem',
            data: { message: message }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result.event);
            if (result.event === 'Remove') {
                _this.heatIndexService.deleteHeatIndex(id).subscribe(function (data) {
                    _this.dataSource.data = _this.dataSource.data.filter(function (item) { return item.HeatIndexID != id.HeatIndexID; });
                    _this.notificationService.success('Successfully Deleted');
                }, function (error) {
                    console.log('error', error);
                    _this.notificationService.error('Error occurred while deleting the Heat Index');
                });
            }
            else if (result.event === 'Cancel') {
                _this.notificationService.warn('Operation Cancelled');
            }
        });
    };
    HeatIndexComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    HeatIndexComponent.ctorParameters = function () { return [
        { type: _heat_index_service__WEBPACK_IMPORTED_MODULE_2__["HeatIndexService"] },
        { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], HeatIndexComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], HeatIndexComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"])
    ], HeatIndexComponent.prototype, "table", void 0);
    HeatIndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-heat-index',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./heat-index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/heat-index/heat-index.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./heat-index.component.scss */ "./src/app/threshold/heat-index/heat-index.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_heat_index_service__WEBPACK_IMPORTED_MODULE_2__["HeatIndexService"],
            _shared_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], HeatIndexComponent);
    return HeatIndexComponent;
}());



/***/ }),

/***/ "./src/app/threshold/heat-index/heat-index.service.ts":
/*!************************************************************!*\
  !*** ./src/app/threshold/heat-index/heat-index.service.ts ***!
  \************************************************************/
/*! exports provided: HeatIndexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatIndexService", function() { return HeatIndexService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_app_restheader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/restheader.service */ "./src/app/restheader.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var HeatIndexService = /** @class */ (function () {
    function HeatIndexService(httpClient, restheaderService) {
        this.httpClient = httpClient;
        this.restheaderService = restheaderService;
    }
    HeatIndexService.prototype.getHeatIndex = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'heatindex_json/', this.restheaderService.httpheader);
    };
    HeatIndexService.prototype.addHeatIndex = function (heatIndex) {
        var requestBody = {
            HeatIndexID: heatIndex.HeatIndexID,
            ModerateRisk: heatIndex.ModerateRisk,
            HighRisk: heatIndex.HighRisk,
            HIIndex: heatIndex.HIIndex
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'heatindex_json/', requestBody, this.restheaderService.httpheader);
    };
    HeatIndexService.prototype.editHeatIndex = function (heatIndex) {
        var requestBody = {
            ModerateRisk: heatIndex.ModerateRisk,
            HighRisk: heatIndex.HighRisk,
            HIIndex: heatIndex.HIIndex
        };
        var id = heatIndex.HeatIndexID;
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'heatindex_json/' + id + '/', requestBody, this.restheaderService.httpheader);
    };
    HeatIndexService.prototype.deleteHeatIndex = function (heatIndex) {
        var requestBody = {
            ModerateRisk: heatIndex.ModerateRisk,
            HighRisk: heatIndex.HighRisk,
            HIIndex: heatIndex.HIIndex
        };
        var id = heatIndex.HeatIndexID;
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'heatindex_json/' + id + '/', this.restheaderService.httpheader);
    };
    HeatIndexService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_restheader_service__WEBPACK_IMPORTED_MODULE_3__["RestheaderService"] }
    ]; };
    HeatIndexService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_restheader_service__WEBPACK_IMPORTED_MODULE_3__["RestheaderService"]])
    ], HeatIndexService);
    return HeatIndexService;
}());



/***/ }),

/***/ "./src/app/threshold/oxygen/oxygen-dialog/oxygen-dialog.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/threshold/oxygen/oxygen-dialog/oxygen-dialog.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  width: 100%;\n}\n\n.mat-toolbar {\n  background: #0000A0;\n  color: white;\n}\n\nform.normal-form {\n  margin: 10px;\n}\n\n.controls-container {\n  width: 100%;\n  padding: 5%;\n}\n\n.controls-container > * {\n  width: 100%;\n}\n\n.mat-grid-tile {\n  padding-top: 0px !important;\n}\n\n.error-message {\n  text-align: center;\n  color: red;\n}\n\n.mat-raised-button {\n  margin: 10px 15px;\n}\n\n.mat-stroked-button {\n  margin: 10px 15px;\n}\n\n.mat-stroked-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n  background-color: #1003a0;\n}\n\n.mat-raised-button[disabled] {\n  color: rgba(0, 0, 0, 0.26);\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXdlaWxpL0Rlc2t0b3AvUkVBQ0gvcmVhY2gvSGF6bWF0LWNsaWVudC9zcmMvYXBwL3RocmVzaG9sZC9veHlnZW4vb3h5Z2VuLWRpYWxvZy9veHlnZW4tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aHJlc2hvbGQvb3h5Z2VuL294eWdlbi1kaWFsb2cvb3h5Z2VuLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURDQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ0VKOztBRENBO0VBQ0ksWUFBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7QUNJSjs7QUREQTtFQUNJLDJCQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNLSjs7QURGQTtFQUNFLGlCQUFBO0FDS0Y7O0FESEE7RUFDRSxpQkFBQTtBQ01GOztBREpBO0VBQ0UseUJBQUE7QUNPRjs7QURKQTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL3RocmVzaG9sZC9veHlnZW4vb3h5Z2VuLWRpYWxvZy9veHlnZW4tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ubWF0LXRvb2xiYXJ7XG4gICAgYmFja2dyb3VuZDogIzAwMDBBMDtcbiAgICBjb2xvcjogd2hpdGU7XG5cbn1cbmZvcm0ubm9ybWFsLWZvcm17XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuLmNvbnRyb2xzLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1JTtcbn1cbi5jb250cm9scy1jb250YWluZXIgPiAqIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbi5tYXQtZ3JpZC10aWxlIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG4uZXJyb3ItbWVzc2FnZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbntcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XG59XG4ubWF0LXN0cm9rZWQtYnV0dG9ue1xuICBtYXJnaW46IDEwcHggMTVweDtcbn1cbi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1mYWIubWF0LXByaW1hcnksIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnl7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDAzYTA7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbltkaXNhYmxlZF0ge1xuICAgIGNvbG9yIDogcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfSIsImZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogIzAwMDBBMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5mb3JtLm5vcm1hbC1mb3JtIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uY29udHJvbHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4uY29udHJvbHMtY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWdyaWQtdGlsZSB7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIG1hcmdpbjogMTBweCAxNXB4O1xufVxuXG4ubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XG59XG5cbi5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1mYWIubWF0LXByaW1hcnksIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwM2EwO1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/threshold/oxygen/oxygen-dialog/oxygen-dialog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/threshold/oxygen/oxygen-dialog/oxygen-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: OxygenDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OxygenDialogComponent", function() { return OxygenDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_restheader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/restheader.service */ "./src/app/restheader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _oxygen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../oxygen.service */ "./src/app/threshold/oxygen/oxygen.service.ts");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/__ivy_ngcc__/fesm5/rxweb-reactive-form-validators.js");









//cross-field validation for Low and Normal
var numberValidator = function (control) {
    var normalControl = control.get('Normal');
    var lowControl = control.get('Low');
    var normal = Number(normalControl.value);
    var low = Number(lowControl.value);
    if (!normalControl || !lowControl) {
        return null;
    }
    if (!normal || !low) {
        return null;
    }
    return low > normal ? { numberOutOfRange: true } : null;
};
var OxygenDialogComponent = /** @class */ (function () {
    function OxygenDialogComponent(oxygenService, httpClient, restHeaderService, dialogRef, notificationService, data) {
        this.oxygenService = oxygenService;
        this.httpClient = httpClient;
        this.restHeaderService = restHeaderService;
        this.dialogRef = dialogRef;
        this.notificationService = notificationService;
        this.data = data;
        this.errormessages = [];
        this.editOxygen = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, data);
        if (this.editOxygen.SpO2ID == null) {
            this.action = 'New';
        }
        else {
            this.action = 'Edit';
        }
    }
    OxygenDialogComponent.prototype.ngOnInit = function () {
        _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormConfig"].set({ "validationMessage": { "greaterThan": "Normal SpO2 should be greater than Low SpO2" } });
        if (this.action == 'Edit') {
            this.oxygenFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                SpO2ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editOxygen.SpO2ID),
                Low: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editOxygen.Low, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
                Normal: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editOxygen.Normal, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__["RxwebValidators"].greaterThan({ fieldName: 'Low' })]),
                SpO2Index: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.editOxygen.SpO2Index, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            }, { validators: numberValidator });
        }
        else {
            this.oxygenFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                SpO2ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
                Low: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)]),
                Normal: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__["RxwebValidators"].greaterThan({ fieldName: 'Low' })]),
                SpO2Index: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            }, { validators: numberValidator });
        }
    };
    OxygenDialogComponent.prototype.saveOxygen = function (oxygen) {
        var _this = this;
        if (this.action == 'Edit') {
            console.log();
            this.oxygenService.editOxygen(oxygen)
                .subscribe(function (data) {
                _this.notificationService.success(' Blood Oxygen updated successfully');
                _this.dialogRef.close({ event: _this.action, data: data });
            }, function (error) {
                _this.throwErrors(error);
            });
        }
        else {
            this.oxygenService.addOxygen(oxygen)
                .subscribe(function (data) {
                _this.notificationService.success(' Blood Oxygen added successfully');
                _this.dialogRef.close({ event: _this.action, data: data });
            }, function (error) {
                _this.throwErrors(error);
            });
        }
    };
    OxygenDialogComponent.prototype.throwErrors = function (error) {
        this.errormessages = [];
        var errors = [];
        var frmGroup = this.oxygenFormGroup;
        Object.keys(error).map(function (key) {
            if (key == 'error') {
                var err_1 = error[key];
                Object.keys(err_1).map(function (key) {
                    var formControl = frmGroup.get(key);
                    if (formControl) {
                        var msg_1 = '';
                        if (key == 'SpO2Index') {
                            err_1[key].forEach(function (element) {
                                if (element.includes('already'))
                                    msg_1 = 'SpO2 Index already exists. Please enter a unique SpO2 Index';
                            });
                        }
                        if (!msg_1) {
                            err_1[key].forEach(function (element) {
                                msg_1 = element;
                            });
                        }
                        formControl.setErrors({
                            serverError: msg_1
                        });
                    }
                    else {
                        err_1[key].forEach(function (element) {
                            errors.push(element);
                        });
                    }
                });
            }
        });
        this.errormessages = this.errormessages.concat(errors);
    };
    OxygenDialogComponent.prototype.cancelOxygen = function () {
        this.notificationService.warn('Operation Cancelled');
        this.dialogRef.close({ event: '' });
    };
    OxygenDialogComponent.ctorParameters = function () { return [
        { type: _oxygen_service__WEBPACK_IMPORTED_MODULE_7__["OxygenService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: src_app_restheader_service__WEBPACK_IMPORTED_MODULE_2__["RestheaderService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] }
    ]; };
    OxygenDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-oxygen-dialog',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oxygen-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/oxygen/oxygen-dialog/oxygen-dialog.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oxygen-dialog.component.scss */ "./src/app/threshold/oxygen/oxygen-dialog/oxygen-dialog.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_oxygen_service__WEBPACK_IMPORTED_MODULE_7__["OxygenService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            src_app_restheader_service__WEBPACK_IMPORTED_MODULE_2__["RestheaderService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
            _shared_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"], Object])
    ], OxygenDialogComponent);
    return OxygenDialogComponent;
}());



/***/ }),

/***/ "./src/app/threshold/oxygen/oxygen.component.scss":
/*!********************************************************!*\
  !*** ./src/app/threshold/oxygen/oxygen.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("th.mat-header-cell {\n  text-align: center !important;\n  border: 0.5px solid #CCC;\n  padding: 0 !important;\n  background-color: #0000A0;\n  color: white;\n}\n\ntd.mat-cell {\n  text-align: center !important;\n  border: 0.5px solid #CCC;\n  padding: 0 !important;\n}\n\ntr.mat-header-row {\n  height: 30px;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  font-weight: lighter;\n  height: 104px;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXdlaWxpL0Rlc2t0b3AvUkVBQ0gvcmVhY2gvSGF6bWF0LWNsaWVudC9zcmMvYXBwL3RocmVzaG9sZC9veHlnZW4vb3h5Z2VuLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aHJlc2hvbGQvb3h5Z2VuL294eWdlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREtFO0VBQ0UsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FDRko7O0FES0U7RUFDRSxZQUFBO0FDRko7O0FES0U7RUFDRSxzQkFBQTtBQ0ZKOztBREtFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FDRko7O0FES0U7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFFQSxvQkFBQTtFQUVBLGFBQUE7QUNKSjs7QURPRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDSko7O0FET0U7RUFDRSxhQUFBO0FDSko7O0FET0U7RUFDRSxZQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC90aHJlc2hvbGQvb3h5Z2VuL294eWdlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICB0aC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMC41cHggc29saWQgI0NDQztcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDBBMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIFxuICBcbiAgfVxuICBcbiAgdGQubWF0LWNlbGwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMC41cHggc29saWQgI0NDQztcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgICBcbiAgdHIubWF0LWhlYWRlci1yb3cge1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWVsZW1lbnQtZGlhZ3JhbSB7XG4gICAgbWluLXdpZHRoOiA4MHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIC8vIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAvLyBtYXJnaW46IDhweCAwO1xuICAgIGhlaWdodDogMTA0cHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWVsZW1lbnQtc3ltYm9sIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gICIsInRoLm1hdC1oZWFkZXItY2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNDQ0M7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDBBMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG50ZC5tYXQtY2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNDQ0M7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxudHIubWF0LWhlYWRlci1yb3cge1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRpYWdyYW0ge1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XG4gIG9wYWNpdHk6IDAuNTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/threshold/oxygen/oxygen.component.ts":
/*!******************************************************!*\
  !*** ./src/app/threshold/oxygen/oxygen.component.ts ***!
  \******************************************************/
/*! exports provided: OxygenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OxygenComponent", function() { return OxygenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/table.js");
/* harmony import */ var _oxygen_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oxygen.service */ "./src/app/threshold/oxygen/oxygen.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _shared_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/notification.service */ "./src/app/shared/notification.service.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var _oxygen_dialog_oxygen_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./oxygen-dialog/oxygen-dialog.component */ "./src/app/threshold/oxygen/oxygen-dialog/oxygen-dialog.component.ts");










var OxygenComponent = /** @class */ (function () {
    function OxygenComponent(oxygenService, notificationService, dialog, changeDetectorRefs) {
        this.oxygenService = oxygenService;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.changeDetectorRefs = changeDetectorRefs;
        this.displayedColumns = [
            'SpO2Index', 'Low', 'Normal', 'Actions'
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    }
    OxygenComponent.prototype.ngOnInit = function () {
        console.log('================> oxygenComponent ngOnInit');
        this.getOxygenData();
    };
    OxygenComponent.prototype.getOxygenData = function () {
        var _this = this;
        this.oxygenService.getOxygenData().subscribe(function (data) {
            if (data.length > 0) {
                console.log('OxygenList ', data);
                _this.dataSource.data = data;
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
                _this.changeDetectorRefs.detectChanges();
            }
        }, function (error) {
            console.log('Oxygen component is not working', error);
        });
    };
    OxygenComponent.prototype.addOxygen = function () {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        var dialogRef = this.dialog.open(_oxygen_dialog_oxygen_dialog_component__WEBPACK_IMPORTED_MODULE_9__["OxygenDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.event === 'New') {
                var oxygen = void 0;
                oxygen = result.data;
                _this.dataSource.data.push(oxygen);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
        });
    };
    OxygenComponent.prototype.updateOxygen = function (oxygen) {
        var _this = this;
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        dialogConfig.data = oxygen;
        var dialogRef = this.dialog.open(_oxygen_dialog_oxygen_dialog_component__WEBPACK_IMPORTED_MODULE_9__["OxygenDialogComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.event === 'Edit') {
                var oxygen_1;
                oxygen_1 = result.data;
                var index = _this.dataSource.data.findIndex(function (e) { return e.SpO2ID === oxygen_1.SpO2ID; });
                _this.dataSource.data[index] = oxygen_1;
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
        });
    };
    OxygenComponent.prototype.deleteOxygen = function (id) {
        var displaymessage = 'Are you sure you want to remove this Blood Oxygen ?';
        this.openDialog(displaymessage, id);
    };
    OxygenComponent.prototype.openDialog = function (message, id) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"], {
            width: '50rem',
            data: { message: message }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result.event);
            if (result.event === 'Remove') {
                _this.oxygenService.deleteOxygen(id).subscribe(function (data) {
                    _this.dataSource.data = _this.dataSource.data.filter(function (item) { return item.SpO2ID != id.SpO2ID; });
                    _this.notificationService.success('Successfully Deleted');
                }, function (error) {
                    console.log('error', error);
                    _this.notificationService.error('Error occurred while deleting the Blood Oxygen');
                });
            }
            else if (result.event === 'Cancel') {
                _this.notificationService.warn('Operation Cancelled');
            }
        });
    };
    OxygenComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    OxygenComponent.ctorParameters = function () { return [
        { type: _oxygen_service__WEBPACK_IMPORTED_MODULE_5__["OxygenService"] },
        { type: _shared_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], OxygenComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], OxygenComponent.prototype, "sort", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"])
    ], OxygenComponent.prototype, "table", void 0);
    OxygenComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-oxygen',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oxygen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/oxygen/oxygen.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oxygen.component.scss */ "./src/app/threshold/oxygen/oxygen.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_oxygen_service__WEBPACK_IMPORTED_MODULE_5__["OxygenService"],
            _shared_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], OxygenComponent);
    return OxygenComponent;
}());



/***/ }),

/***/ "./src/app/threshold/oxygen/oxygen.service.ts":
/*!****************************************************!*\
  !*** ./src/app/threshold/oxygen/oxygen.service.ts ***!
  \****************************************************/
/*! exports provided: OxygenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OxygenService", function() { return OxygenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var src_app_restheader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/restheader.service */ "./src/app/restheader.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var OxygenService = /** @class */ (function () {
    function OxygenService(httpClient, restheaderService) {
        this.httpClient = httpClient;
        this.restheaderService = restheaderService;
    }
    OxygenService.prototype.getOxygenData = function () {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'spo2_json/', this.restheaderService.httpheader);
    };
    OxygenService.prototype.addOxygen = function (oxygen) {
        var requestBody = {
            SpO2ID: oxygen.SpO2ID,
            SpO2Index: oxygen.SpO2Index,
            Low: oxygen.Low,
            Normal: oxygen.Normal
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'spo2_json/', requestBody, this.restheaderService.httpheader);
    };
    OxygenService.prototype.editOxygen = function (oxygen) {
        var requestBody = {
            SpO2Index: oxygen.SpO2Index,
            Low: oxygen.Low,
            Normal: oxygen.Normal
        };
        var id = oxygen.SpO2ID;
        return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'spo2_json/' + id + '/', requestBody, this.restheaderService.httpheader);
    };
    OxygenService.prototype.deleteOxygen = function (oxygen) {
        var requestBody = {
            SpO2Index: oxygen.SpO2Index,
            Low: oxygen.Low,
            Normal: oxygen.Normal
        };
        var id = oxygen.SpO2ID;
        return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host + 'spo2_json/' + id + '/', this.restheaderService.httpheader);
    };
    OxygenService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_restheader_service__WEBPACK_IMPORTED_MODULE_3__["RestheaderService"] }
    ]; };
    OxygenService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_restheader_service__WEBPACK_IMPORTED_MODULE_3__["RestheaderService"]])
    ], OxygenService);
    return OxygenService;
}());



/***/ }),

/***/ "./src/app/threshold/threshold.component.scss":
/*!****************************************************!*\
  !*** ./src/app/threshold/threshold.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RocmVzaG9sZC90aHJlc2hvbGQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/threshold/threshold.component.ts":
/*!**************************************************!*\
  !*** ./src/app/threshold/threshold.component.ts ***!
  \**************************************************/
/*! exports provided: ThresholdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThresholdComponent", function() { return ThresholdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ThresholdComponent = /** @class */ (function () {
    function ThresholdComponent() {
    }
    ThresholdComponent.prototype.ngOnInit = function () {
    };
    ThresholdComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-threshold',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./threshold.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/threshold/threshold.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./threshold.component.scss */ "./src/app/threshold/threshold.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ThresholdComponent);
    return ThresholdComponent;
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
    production: false,
    // host: 'https://hazmat-reach-cat.herokuapp.com/',
    host: 'http://127.0.0.1:8000/',
    icons: 'static/front-end/assets'
    // icons:'assets'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! /Users/daweili/Desktop/REACH/reach/Hazmat-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map