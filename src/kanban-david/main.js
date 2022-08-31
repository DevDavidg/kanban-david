(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dguil\OneDrive\Desktop\Kanban David\kanban-david\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false
};


/***/ }),

/***/ "H6Li":
/*!*****************************************!*\
  !*** ./src/app/header/header.module.ts ***!
  \*****************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "S2wL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _components_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/dialog/dialog.module */ "NGqd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class HeaderModule {
}
HeaderModule.ɵfac = function HeaderModule_Factory(t) { return new (t || HeaderModule)(); };
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _components_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_5__["DialogModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _components_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_5__["DialogModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]] }); })();


/***/ }),

/***/ "JxZD":
/*!************************************************************!*\
  !*** ./src/app/board/color-panel/color-panel.component.ts ***!
  \************************************************************/
/*! exports provided: ColorPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPanelComponent", function() { return ColorPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { background: a0 }; };
function ColorPanelComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorPanelComponent_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const color_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onColorEmit(color_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, color_r1));
} }
var colors;
(function (colors) {
    colors["RED"] = "linear-gradient(90deg, rgba(159,0,156,1) 0%, rgba(239,0,255,1) 50%, rgba(239,0,255,1) 100%)";
    colors["GREEN"] = "linear-gradient(90deg, rgba(255,89,0,1) 0%, rgba(255,149,0,1) 50%, rgba(255,164,4,1) 100%)";
    colors["BLUE"] = "linear-gradient(90deg, rgba(0,78,255,1) 0%, rgba(0,129,255,1) 50%, rgba(4,182,255,1) 100%)";
    colors["VIOLET"] = "linear-gradient(90deg, rgba(0,206,255,1) 0%, rgba(0,215,255,1) 50%, rgba(4,255,197,1) 100%)";
    colors["YELLOW"] = "linear-gradient(90deg, rgba(116,255,0,1) 0%, rgba(0,255,4,1) 50%, rgba(4,255,147,1) 100%)";
    colors["PINK"] = "linear-gradient(90deg, rgba(222,0,255,1) 0%, rgba(255,0,189,1) 50%, rgba(255,4,140,1) 100%)";
})(colors || (colors = {}));
class ColorPanelComponent {
    constructor() {
        this.emitColor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.colorsData = Object.values(colors);
    }
    ngOnInit() {
    }
    onColorEmit(color) {
        this.emitColor.emit(color);
    }
}
ColorPanelComponent.ɵfac = function ColorPanelComponent_Factory(t) { return new (t || ColorPanelComponent)(); };
ColorPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorPanelComponent, selectors: [["app-color-panel"]], outputs: { emitColor: "emitColor" }, decls: 2, vars: 1, consts: [[1, "d-flex", "align-items-center"], [4, "ngFor", "ngForOf"], [1, "color-panel-item", "shadow-sm", 3, "ngStyle", "click"]], template: function ColorPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColorPanelComponent_div_1_Template, 2, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colorsData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".color-panel-item[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: ease-in-out opacity 0.1s;\n  margin: 3px;\n}\n\n.color-panel-item[_ngcontent-%COMP%]:hover {\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb2xvci1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoiY29sb3ItcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3ItcGFuZWwtaXRlbSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCBvcGFjaXR5IDAuMXM7XG4gIG1hcmdpbjogM3B4O1xufVxuXG4uY29sb3ItcGFuZWwtaXRlbTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "NGqd":
/*!****************************************************!*\
  !*** ./src/app/components/dialog/dialog.module.ts ***!
  \****************************************************/
/*! exports provided: DialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogModule", function() { return DialogModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dialog_body_dialog_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog-body/dialog-body.component */ "hy6C");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog/dialog.component */ "PJZV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class DialogModule {
}
DialogModule.ɵfac = function DialogModule_Factory(t) { return new (t || DialogModule)(); };
DialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: DialogModule });
DialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](DialogModule, { declarations: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"],
        _dialog_body_dialog_body_component__WEBPACK_IMPORTED_MODULE_1__["DialogBodyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"]], exports: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"]] }); })();


/***/ }),

/***/ "PJZV":
/*!**************************************************************!*\
  !*** ./src/app/components/dialog/dialog/dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dialog_body_dialog_body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialog-body/dialog-body.component */ "hy6C");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");




const _c0 = ["*"];
class DialogComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.emitText = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    openDialog() {
        const dialogRef = this.dialog.open(_dialog_body_dialog_body_component__WEBPACK_IMPORTED_MODULE_1__["DialogBodyComponent"], {
            width: '400px',
            data: { question: this.question }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.emitText.emit(result);
        });
    }
}
DialogComponent.ɵfac = function DialogComponent_Factory(t) { return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogComponent, selectors: [["app-dialog"]], inputs: { question: "question" }, outputs: { emitText: "emitText" }, ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[3, "click"]], template: function DialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogComponent_Template_div_click_0_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "S2wL":
/*!***************************************************!*\
  !*** ./src/app/header/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_board_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/board.service */ "wFLl");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _components_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/dialog/dialog/dialog.component */ "PJZV");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class HeaderComponent {
    constructor(boardService) {
        this.boardService = boardService;
    }
    ngOnInit() {
    }
    addColumn(event) {
        if (event) {
            this.boardService.addColumn(event);
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_board_service__WEBPACK_IMPORTED_MODULE_1__["BoardService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 14, vars: 0, consts: [[1, "position-fixed", "shadow", "justify-content-between", "px-5", "mb-4", "header-main"], [1, "mat-h2"], ["href", "#", 2, "color", "#fff"], ["question", "Add new column", 3, "emitText"], ["mat-fab", "", 1, "btn-p"], ["href", "#", 1, "profile_info"], [1, "name_sec"], [1, "image_profile_sec"], ["src", "../../../assets/img/David Guillen.png", "alt", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Kanban David");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-dialog", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("emitText", function HeaderComponent_Template_app_dialog_emitText_6_listener($event) { return ctx.addColumn($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " David Guillen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _components_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".header-main[_ngcontent-%COMP%] {\n  background-color: #98acfc;\n  color: white;\n}\n.header-main[_ngcontent-%COMP%]   app-dialog[_ngcontent-%COMP%]   button.btn-p[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2%;\n  right: 1%;\n  font-size: 40px;\n  font-weight: normal;\n  background-color: #98acfc;\n}\n.header-main[_ngcontent-%COMP%]   .profile_info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-left: 2px solid #abc6ff;\n  border-right: 2px solid #abc6ff;\n  height: 100%;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  transition: 0.5s;\n}\n.header-main[_ngcontent-%COMP%]   .profile_info[_ngcontent-%COMP%]:hover {\n  background-color: #888cdc;\n  border-radius: 20px;\n}\n.header-main[_ngcontent-%COMP%]   .profile_info[_ngcontent-%COMP%]:active {\n  transform: scale(0.9);\n  border-radius: 20px;\n  background-color: #888cdc;\n}\n.header-main[_ngcontent-%COMP%]   .profile_info[_ngcontent-%COMP%]   .name_sec[_ngcontent-%COMP%] {\n  padding: 20px;\n  font-weight: normal;\n  color: #fff;\n}\n.header-main[_ngcontent-%COMP%]   .profile_info[_ngcontent-%COMP%]   .image_profile_sec[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n.header-main[_ngcontent-%COMP%]   .profile_info[_ngcontent-%COMP%]   .image_profile_sec[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 50px;\n  border-radius: 50%;\n  width: 50px;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx5QkNJTztFREhQLFlBQUE7QUFBRjtBQUVJO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJDTEc7QURLVDtBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREo7QUFFSTtFQUNFLHlCQ2pCRztFRGtCSCxtQkFBQTtBQUFOO0FBRUk7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJDdkJHO0FEdUJUO0FBRUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQU47QUFFSTtFQUNFLG1CQUFBO0FBQU47QUFDTTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNSIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuLmhlYWRlci1tYWluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBhcHAtZGlhbG9nIHtcclxuICAgIGJ1dHRvbi5idG4tcCB7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgYm90dG9tOiAyJTtcclxuICAgICAgcmlnaHQ6IDElO1xyXG4gICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wcm9maWxlX2luZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNhYmM2ZmY7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjYWJjNmZmO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yNDtcclxuICAgIH1cclxuICAgIC5uYW1lX3NlYyB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLmltYWdlX3Byb2ZpbGVfc2VjIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRsaW5rLWNvbG9yOiAjM2Y1MWI1O1xuJGxpbmstaG92ZXItY29sb3I6IGN1cnJlbnRDb2xvcjtcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246IG5vbmU7XG4kbGFiZWwtbWFyZ2luLWJvdHRvbTogMDtcbiRjb2xvcjE6ICNmMGY0ZmM7XG4kY29sb3IyOiAjZjhmY2ZjO1xuJGNvbG9yMzogIzk4YWNmYztcbiRjb2xvcjQ6ICM4ODhjZGM7XG4kY29sb3I1OiAjYjRiY2M1O1xuIl19 */"] });


/***/ }),

/***/ "S8DO":
/*!**********************************************************!*\
  !*** ./src/app/board/board-item/board-item.component.ts ***!
  \**********************************************************/
/*! exports provided: BoardItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardItemComponent", function() { return BoardItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function BoardItemComponent_div_20_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardItemComponent_div_20_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r2.onCommentTextEmit(ctx_r2.item.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BoardItemComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Leave a comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardItemComponent_div_20_Template_textarea_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.commentInput = $event; })("mousedown", function BoardItemComponent_div_20_Template_textarea_mousedown_4_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BoardItemComponent_div_20_button_5_Template, 3, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.commentInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.commentInput);
} }
const _c0 = ["*"];
class BoardItemComponent {
    constructor() {
        this.emitText = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.emitCardItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.emitDeleteCard = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.commentInput = '';
        this.open = false;
    }
    ngOnInit() { }
    onOpenComment() {
        this.open = !this.open;
    }
    onCommentTextEmit(id) {
        this.emitText.emit({ id, text: this.commentInput });
        this.commentInput = '';
    }
    onCardItemEmit(card, increase) {
        this.emitCardItem.emit({ card, increase });
    }
    onCardDelete(id) {
        this.emitDeleteCard.emit(id);
    }
}
BoardItemComponent.ɵfac = function BoardItemComponent_Factory(t) { return new (t || BoardItemComponent)(); };
BoardItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardItemComponent, selectors: [["app-board-item"]], inputs: { item: "item" }, outputs: { emitText: "emitText", emitCardItem: "emitCardItem", emitDeleteCard: "emitDeleteCard" }, ngContentSelectors: _c0, decls: 21, vars: 4, consts: [[1, "d-flex", "justify-content-between", "align-items-start", "mb-2", "text-dark"], [1, "mt-1"], ["mat-icon-button", "", 1, "icon-delete", 3, "click"], [2, "font-size", "18px"], [1, "d-flex", "justify-content-end", "align-items-center", "mb-2", "text-dark"], ["mat-icon-button", "", 1, "mt-1", 3, "click"], [1, "icon"], ["mat-icon-button", "", "disableRipple", "", 3, "click"], ["mat-icon-button", "", "disableRipple", "", 1, "ml-2", 3, "click"], [4, "ngIf"], [1, "w-100", "mb-2"], ["matInput", "", 3, "ngModel", "ngModelChange", "mousedown"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "color", "primary", "class", "icon-confirm", 3, "click", 4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "color", "primary", 1, "icon-confirm", 3, "click"]], template: function BoardItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardItemComponent_Template_button_click_3_listener() { return ctx.onCardDelete(ctx.item.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardItemComponent_Template_button_click_7_listener() { return ctx.onCardItemEmit(ctx.item, false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "thumb_down_off_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardItemComponent_Template_button_click_10_listener() { return ctx.onCardItemEmit(ctx.item, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "thumb_up_off_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardItemComponent_Template_button_click_15_listener() { return ctx.onOpenComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "chat_bubble_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BoardItemComponent_div_20_Template, 7, 2, "div", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.like);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.comments.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.open);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"]], styles: [".icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.mat-icon-button[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: color ease 0.2s;\n}\n\n.mat-icon-button[_ngcontent-%COMP%]:active {\n  color: black;\n  transform: scale(1.1);\n  transition: 0.3s;\n}\n\n.mat-icon-button[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  vertical-align: none !important;\n}\n\nmat-form-field.mat-form-field[_ngcontent-%COMP%] {\n  background-color: #d4d4d4;\n  padding: 10px 10px 0 10px;\n}\n\n  .mat-form-field.mat-focused .mat-form-field-required-marker {\n  color: #000000;\n}\n\n  .mat-form-field.mat-focused .mat-input-element {\n  color: #000000;\n}\n\n.icon-confirm[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib2FyZC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFHRTtFQUNFLGNBQUE7QUFBSjs7QUFFRTtFQUNFLGNBQUE7QUFBSjs7QUFJQTtFQUNFLDBCQUFBO0FBREYiLCJmaWxlIjoiYm9hcmQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubWF0LWljb24tYnV0dG9uIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGNvbG9yIGVhc2UgMC4ycztcbn1cblxuLm1hdC1pY29uLWJ1dHRvbjphY3RpdmUge1xuICBjb2xvcjogYmxhY2s7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLm1hdC1pY29uLWJ1dHRvbiAubWF0LWJ1dHRvbi13cmFwcGVyID4gKiB7XG4gIHZlcnRpY2FsLWFsaWduOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMiwgMjEyLCAyMTIpO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMCAxMHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIHtcbiAgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cbiAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgfVxufVxuXG4uaWNvbi1jb25maXJtIHtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header/header.component */ "S2wL");
/* harmony import */ var _board_board_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board/board/board.component */ "kjd/");



class AppComponent {
    constructor() {
        this.title = 'retro-board';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-board");
    } }, directives: [_header_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _board_board_board_component__WEBPACK_IMPORTED_MODULE_2__["BoardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.module */ "H6Li");
/* harmony import */ var _board_board_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./board/board.module */ "pax7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
            _board_board_module__WEBPACK_IMPORTED_MODULE_5__["BoardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
        _board_board_module__WEBPACK_IMPORTED_MODULE_5__["BoardModule"]] }); })();


/***/ }),

/***/ "hy6C":
/*!************************************************************************!*\
  !*** ./src/app/components/dialog/dialog-body/dialog-body.component.ts ***!
  \************************************************************************/
/*! exports provided: DialogBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBodyComponent", function() { return DialogBodyComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







class DialogBodyComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
    }
}
DialogBodyComponent.ɵfac = function DialogBodyComponent_Factory(t) { return new (t || DialogBodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
DialogBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DialogBodyComponent, selectors: [["app-dialog-body"]], decls: 12, vars: 3, consts: [["mat-dialog-content", ""], [1, "w-100"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-raised-button", "", "cdkFocusInitial", "", "color", "primary", 3, "mat-dialog-close"], ["mat-button", "", 3, "click"]], template: function DialogBodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Add Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DialogBodyComponent_Template_input_ngModelChange_6_listener($event) { return ctx.data.text = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogBodyComponent_Template_button_click_10_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.question);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.data.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", ctx.data.text);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2ctYm9keS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "kjd/":
/*!************************************************!*\
  !*** ./src/app/board/board/board.component.ts ***!
  \************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_board_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/board.service */ "wFLl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _color_panel_color_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../color-panel/color-panel.component */ "JxZD");
/* harmony import */ var _components_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/dialog/dialog/dialog.component */ "PJZV");
/* harmony import */ var _board_item_board_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../board-item/board-item.component */ "S8DO");
/* harmony import */ var _comment_item_comment_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../comment-item/comment-item.component */ "orDf");











function BoardComponent_div_2_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-comment-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("emitComment", function BoardComponent_div_2_div_20_div_2_Template_app_comment_item_emitComment_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const column_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.onDeleteComment($event, column_r1.id, item_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("comment", comment_r7);
} }
function BoardComponent_div_2_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-board-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("emitText", function BoardComponent_div_2_div_20_Template_app_board_item_emitText_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const column_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.onAddComment($event, column_r1.id); })("emitCardItem", function BoardComponent_div_2_div_20_Template_app_board_item_emitCardItem_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const column_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.onChangeLike($event, column_r1.id); })("emitDeleteCard", function BoardComponent_div_2_div_20_Template_app_board_item_emitDeleteCard_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const column_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.onDeleteCard($event, column_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BoardComponent_div_2_div_20_div_2_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", item_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r5.comments);
} }
const _c0 = function (a0) { return { background: a0 }; };
function BoardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "more_vert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-menu", null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BoardComponent_div_2_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const column_r1 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.onDeleteColumn(column_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Del Task ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Colors");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-menu", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "app-color-panel", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("emitColor", function BoardComponent_div_2_Template_app_color_panel_emitColor_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const column_r1 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.onColorChange($event, column_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function BoardComponent_div_2_Template_div_cdkDropListDropped_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, BoardComponent_div_2_div_20_Template, 3, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "app-dialog", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("emitText", function BoardComponent_div_2_Template_app_dialog_emitText_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const column_r1 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.onAddCard($event, column_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Add Task +");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, column_r1.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](column_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDropListData", column_r1.list);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", column_r1.list);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("question", "Add new card in " + column_r1.title + " column");
} }
class BoardComponent {
    constructor(boardService) {
        this.boardService = boardService;
        this.scrollContainer = undefined;
    }
    ngOnInit() {
        this.scrollContainer = document.getElementById('scroll-container');
    }
    onColorChange(color, columnId) {
        this.boardService.changeColumnColor(color, columnId);
    }
    onAddCard(text, columnId) {
        if (text) {
            this.boardService.addCard(text, columnId);
        }
    }
    onDeleteColumn(columnId) {
        this.boardService.deleteColumn(columnId);
    }
    onDeleteCard(cardId, columnId) {
        this.boardService.deleteCard(cardId, columnId);
    }
    onChangeLike(event, columnId) {
        const { card: { id }, increase } = event;
        this.boardService.changeLike(id, columnId, increase);
    }
    onAddComment(event, columnId) {
        this.boardService.addComment(columnId, event.id, event.text);
    }
    onDeleteComment(comment, columnId, item) {
        this.boardService.deleteComment(columnId, item.id, comment.id);
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    scrollLeft(event) {
        event.preventDefault();
        this.scrollContainer.scrollLeft += event.deltaY * 5;
    }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"])); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["app-board"]], decls: 4, vars: 3, consts: [["id", "scroll-container", 1, "container-fluid", "containercolor", 3, "mousewheel"], ["cdkDropListGroup", "", 1, "cardslist"], ["class", "master-card", 4, "ngFor", "ngForOf"], [1, "master-card"], [1, "col-header"], [1, "color-sec", 3, "ngStyle"], [1, "icon-sec"], [1, "m-0"], [1, "d-flex", "justify-content-end", 2, "cursor", "pointer", 3, "matMenuTriggerFor"], ["menuKbn", "matMenu"], ["mat-menu-item", "", 1, "icon-delete", "del-task", 3, "click"], [2, "font-size", "20px"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], [1, "d-flex", "align-items-center"], ["Colors", "matMenu"], [3, "emitColor"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListData", "cdkDropListDropped"], ["cdkDrag", "", "class", "example-box", 4, "ngFor", "ngForOf"], [3, "question", "emitText"], [1, "addtask"], ["cdkDrag", "", 1, "example-box"], [3, "item", "emitText", "emitCardItem", "emitDeleteCard"], [4, "ngFor", "ngForOf"], [3, "comment", "emitComment"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousewheel", function BoardComponent_Template_div_mousewheel_0_listener($event) { return ctx.scrollLeft($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BoardComponent_div_2_Template, 24, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx.boardService.getBoard$()));
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropListGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"], _color_panel_color_panel_component__WEBPACK_IMPORTED_MODULE_6__["ColorPanelComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], _components_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"], _board_item_board_item_component__WEBPACK_IMPORTED_MODULE_8__["BoardItemComponent"], _comment_item_comment_item_component__WEBPACK_IMPORTED_MODULE_9__["CommentItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["#scroll-container[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\n\n.cardslist[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.containercolor[_ngcontent-%COMP%] {\n  height: calc(100vh);\n  overflow-x: scroll;\n}\n\n.containercolor[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 7px;\n}\n\n.containercolor[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #fff;\n}\n\n.containercolor[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #888888;\n  border-radius: 10px;\n}\n\n.example-list[_ngcontent-%COMP%] {\n  min-height: 20px;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n  background-color: #f0f4fc;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 10px 10px 5px 10px;\n  border: solid 1px #d6d6d6;\n  color: rgba(236, 236, 236, 0.87);\n  border-radius: 5px;\n  cursor: move;\n  font-size: 14px;\n  margin: 10px;\n  background-color: #f8fcfc;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  background-color: #f8fcfc;\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drop-list-dragging[_ngcontent-%COMP%] {\n  background-image: linear-gradient(45deg, #ffffff 25%, #d1d1d1 25%, #d1d1d1 50%, #ffffff 50%, #ffffff 75%, #d1d1d1 75%, #d1d1d1 100%);\n  background-size: 56.57px 56.57px;\n  border: solid 2px #999;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.btn-add[_ngcontent-%COMP%] {\n  background-color: #cecece;\n}\n\n.column-header[_ngcontent-%COMP%] {\n  border: 1px solid #cfcfcf;\n}\n\n.master-card[_ngcontent-%COMP%] {\n  background-color: #f0f4fc;\n  min-width: 300px;\n  margin: 0 1%;\n  border-radius: 5px 5px 5px 5px;\n  box-shadow: 0px 0px 5px #7a7a7a;\n  margin-top: 100px;\n}\n\n.col-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.col-header[_ngcontent-%COMP%]   .color-sec[_ngcontent-%COMP%] {\n  height: 5px;\n  border-radius: 20px 20px 0 0;\n}\n\n.col-header[_ngcontent-%COMP%]   .icon-sec[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 15px;\n}\n\n.addtask[_ngcontent-%COMP%] {\n  padding: 15px;\n  text-align: center;\n  font-weight: 500;\n  color: #929292;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib2FyZC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHVCQUFBO0FBQUY7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFERTtFQUNFLFdBQUE7QUFHSjs7QUFERTtFQUNFLGdCQUFBO0FBR0o7O0FBREU7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJDdkJPO0FEMEJUOztBQUFBO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkNqQ087QURvQ1Q7O0FBREE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7RUFFQSx5QkN4Q087QUQyQ1Q7O0FBQUE7RUFDRSxVQUFBO0FBR0Y7O0FBREE7RUFDRSxvSUFBQTtFQVVBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxzREFBQTtBQUxGOztBQU9BO0VBQ0Usc0RBQUE7QUFKRjs7QUFPQTtFQUNFLHNEQUFBO0FBSkY7O0FBT0E7RUFDRSx5QkFBQTtBQUpGOztBQU9BO0VBQ0UseUJBQUE7QUFKRjs7QUFPQTtFQUNFLHlCQy9FTztFRGdGUCxnQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUpGOztBQUtFO0VBQ0UsV0FBQTtFQUNBLDRCQUFBO0FBSEo7O0FBS0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBSEo7O0FBT0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSkYiLCJmaWxlIjoiYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL192YXJpYWJsZXMuc2Nzc1wiO1xuI3Njcm9sbC1jb250YWluZXIge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cbi5jYXJkc2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmNvbnRhaW5lcmNvbG9yIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoKTtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgaGVpZ2h0OiA3cHg7XG4gIH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gIH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6IHJnYigxMzYsIDEzNiwgMTM2KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG59XG4uZXhhbXBsZS1saXN0IHtcbiAgbWluLWhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcbn1cblxuLmV4YW1wbGUtYm94IHtcbiAgcGFkZGluZzogMTBweCAxMHB4IDVweCAxMHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCByZ2IoMjE0LCAyMTQsIDIxNCk7XG4gIGNvbG9yOiByZ2JhKDIzNiwgMjM2LCAyMzYsIDAuODcpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogbW92ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjI7XG59XG4uY2RrLWRyYWctcHJldmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjI7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG4uY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICA0NWRlZyxcbiAgICAjZmZmZmZmIDI1JSxcbiAgICAjZDFkMWQxIDI1JSxcbiAgICAjZDFkMWQxIDUwJSxcbiAgICAjZmZmZmZmIDUwJSxcbiAgICAjZmZmZmZmIDc1JSxcbiAgICAjZDFkMWQxIDc1JSxcbiAgICAjZDFkMWQxIDEwMCVcbiAgKTtcbiAgYmFja2dyb3VuZC1zaXplOiA1Ni41N3B4IDU2LjU3cHg7XG4gIGJvcmRlcjogc29saWQgMnB4ICM5OTk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5idG4tYWRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNiwgMjA2LCAyMDYpO1xufVxuXG4uY29sdW1uLWhlYWRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDcsIDIwNywgMjA3KTtcbn1cblxuLm1hc3Rlci1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMTtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAwIDElO1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYigxMjIsIDEyMiwgMTIyKTtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbi5jb2wtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLmNvbG9yLXNlYyB7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcbiAgfVxuICAuaWNvbi1zZWMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG4gIH1cbn1cblxuLmFkZHRhc2sge1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiByZ2IoMTQ2LCAxNDYsIDE0Nik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsIiRsaW5rLWNvbG9yOiAjM2Y1MWI1O1xuJGxpbmstaG92ZXItY29sb3I6IGN1cnJlbnRDb2xvcjtcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246IG5vbmU7XG4kbGFiZWwtbWFyZ2luLWJvdHRvbTogMDtcbiRjb2xvcjE6ICNmMGY0ZmM7XG4kY29sb3IyOiAjZjhmY2ZjO1xuJGNvbG9yMzogIzk4YWNmYztcbiRjb2xvcjQ6ICM4ODhjZGM7XG4kY29sb3I1OiAjYjRiY2M1O1xuIl19 */"] });


/***/ }),

/***/ "orDf":
/*!**************************************************************!*\
  !*** ./src/app/board/comment-item/comment-item.component.ts ***!
  \**************************************************************/
/*! exports provided: CommentItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentItemComponent", function() { return CommentItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




class CommentItemComponent {
    constructor() {
        this.emitComment = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onCommentEmit(comment) {
        this.emitComment.emit(comment);
    }
}
CommentItemComponent.ɵfac = function CommentItemComponent_Factory(t) { return new (t || CommentItemComponent)(); };
CommentItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentItemComponent, selectors: [["app-comment-item"]], inputs: { comment: "comment" }, outputs: { emitComment: "emitComment" }, decls: 5, vars: 1, consts: [[1, "shadow-sm", "p-3", "mb-2", "comment-item", "position-relative"], ["mat-icon-button", "", 1, "icon-delete", 3, "click"], [2, "font-size", "18px"]], template: function CommentItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentItemComponent_Template_button_click_2_listener() { return ctx.onCommentEmit(ctx.comment); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.comment.text, " ");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: [".comment-item[_ngcontent-%COMP%] {\n  border: 1px solid rgba(117, 117, 117, 0.37);\n  color: black;\n  border-radius: 5px;\n}\n\n.icon-delete[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb21tZW50LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJjb21tZW50LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWVudC1pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMTcsIDExNywgMTE3LCAwLjM3KTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pY29uLWRlbGV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"] });


/***/ }),

/***/ "pax7":
/*!***************************************!*\
  !*** ./src/app/board/board.module.ts ***!
  \***************************************/
/*! exports provided: BoardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardModule", function() { return BoardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board/board.component */ "kjd/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _board_item_board_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./board-item/board-item.component */ "S8DO");
/* harmony import */ var _comment_item_comment_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comment-item/comment-item.component */ "orDf");
/* harmony import */ var _components_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/dialog/dialog.module */ "NGqd");
/* harmony import */ var _color_panel_color_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./color-panel/color-panel.component */ "JxZD");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class BoardModule {
}
BoardModule.ɵfac = function BoardModule_Factory(t) { return new (t || BoardModule)(); };
BoardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: BoardModule });
BoardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _components_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_10__["DialogModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](BoardModule, { declarations: [_board_board_component__WEBPACK_IMPORTED_MODULE_1__["BoardComponent"],
        _board_item_board_item_component__WEBPACK_IMPORTED_MODULE_8__["BoardItemComponent"],
        _comment_item_comment_item_component__WEBPACK_IMPORTED_MODULE_9__["CommentItemComponent"],
        _color_panel_color_panel_component__WEBPACK_IMPORTED_MODULE_11__["ColorPanelComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _components_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_10__["DialogModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"]], exports: [_board_board_component__WEBPACK_IMPORTED_MODULE_1__["BoardComponent"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wFLl":
/*!*******************************************!*\
  !*** ./src/app/services/board.service.ts ***!
  \*******************************************/
/*! exports provided: BoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardService", function() { return BoardService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BoardService {
    constructor() {
        this.initBoard = [
            {
                id: 1,
                title: 'To Do',
                color: '#009886',
                list: [
                    {
                        id: 1,
                        text: 'Example card item',
                        like: 1,
                        comments: [
                            {
                                id: 1,
                                text: 'Some comment'
                            }
                        ]
                    },
                ]
            },
        ];
        this.board = this.initBoard;
        this.board$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.initBoard);
    }
    getBoard$() {
        return this.board$.asObservable();
    }
    changeColumnColor(color, columnId) {
        this.board = this.board.map((column) => {
            if (column.id === columnId) {
                column.color = color;
            }
            return column;
        });
        this.board$.next([...this.board]);
    }
    addColumn(title) {
        const newColumn = {
            id: Date.now(),
            title: title,
            color: '#009886',
            list: [],
        };
        this.board = [...this.board, newColumn];
        this.board$.next([...this.board]);
    }
    addCard(text, columnId) {
        const newCard = {
            id: Date.now(),
            text,
            like: 0,
            comments: [],
        };
        this.board = this.board.map((column) => {
            if (column.id === columnId) {
                column.list = [newCard, ...column.list];
            }
            return column;
        });
        this.board$.next([...this.board]);
    }
    deleteColumn(columnId) {
        this.board = this.board.filter((column) => column.id !== columnId);
        this.board$.next([...this.board]);
    }
    deleteCard(cardId, columnId) {
        this.board = this.board.map((column) => {
            if (column.id === columnId) {
                column.list = column.list.filter((card) => card.id !== cardId);
            }
            return column;
        });
        this.board$.next([...this.board]);
    }
    changeLike(cardId, columnId, increase) {
        this.board = this.board.map((column) => {
            if (column.id === columnId) {
                const list = column.list.map((card) => {
                    if (card.id === cardId) {
                        if (increase) {
                            card.like++;
                        }
                        else {
                            if (card.like > 0) {
                                card.like--;
                            }
                        }
                    }
                    return card;
                });
                column.list = list;
                return column;
            }
            else {
                return column;
            }
        });
        this.board$.next([...this.board]);
    }
    addComment(columnId, cardId, text) {
        this.board = this.board.map((column) => {
            if (column.id === columnId) {
                const list = column.list.map((card) => {
                    if (card.id === cardId) {
                        const newComment = {
                            id: Date.now(),
                            text,
                        };
                        card.comments = [newComment, ...card.comments];
                    }
                    return card;
                });
                column.list = list;
            }
            return column;
        });
        this.board$.next([...this.board]);
    }
    deleteComment(columnId, itemId, commentId) {
        this.board = this.board.map((column) => {
            if (column.id === columnId) {
                const list = column.list.map((item) => {
                    if (item.id === itemId) {
                        item.comments = item.comments.filter((comment) => {
                            return comment.id !== commentId;
                        });
                    }
                    return item;
                });
                column.list = list;
            }
            return column;
        });
        this.board$.next([...this.board]);
    }
}
BoardService.ɵfac = function BoardService_Factory(t) { return new (t || BoardService)(); };
BoardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BoardService, factory: BoardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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