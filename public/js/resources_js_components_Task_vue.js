"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Task_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    this.getTask();
  },
  data: function data() {
    return {
      filBqTask: {
        task: ""
      },
      listTask: [],
      fullscreenLoading: false,
      pageNumber: 0,
      perPage: 5
    };
  },
  computed: {
    //Obtener el número de paginas
    pageCount: function pageCount() {
      var a = this.listTask.length,
          b = this.perPage;
      return Math.ceil(a / b);
    },
    listTaskPaginate: function listTaskPaginate() {
      var inicio = this.pageNumber * this.perPage,
          fin = inicio + this.perPage;
      return this.listTask.slice(inicio, fin);
    },
    pagesList: function pagesList() {
      var a = this.listTask.length,
          b = this.perPage;
      var pageCount = Math.ceil(a / b);
      var count = 0,
          pagesArray = [];

      while (count < pageCount) {
        pagesArray.push(count);
        count++;
      }

      return pagesArray;
    }
  },
  methods: {
    limpiarCriteriosBsq: function limpiarCriteriosBsq() {
      this.filBqTask.task = "";
    },
    limpiarBandejaUsuarios: function limpiarBandejaUsuarios() {
      this.listTask = [];
    },
    getTask: function getTask() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var url;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.fullscreenLoading = true;
                url = "api/dailytask";
                _context.next = 4;
                return axios.get(url, {
                  params: {
                    task: _this.filBqTask.task
                  }
                }).then(function (response) {
                  _this.inicializarPaginacion();

                  _this.listTask = response.data;
                  _this.fullscreenLoading = false;
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    netxPage: function netxPage() {
      this.pageNumber++;
    },
    prevPage: function prevPage() {
      this.pageNumber--;
    },
    selectPage: function selectPage(page) {
      this.pageNumber = page;
    },
    inicializarPaginacion: function inicializarPaginacion() {
      this.pageNumber = 0;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Task.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Task.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Task_vue_vue_type_template_id_e9a53c20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.vue?vue&type=template&id=e9a53c20& */ "./resources/js/components/Task.vue?vue&type=template&id=e9a53c20&");
/* harmony import */ var _Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.vue?vue&type=script&lang=js& */ "./resources/js/components/Task.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Task_vue_vue_type_template_id_e9a53c20___WEBPACK_IMPORTED_MODULE_0__.render,
  _Task_vue_vue_type_template_id_e9a53c20___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Task.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Task.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Task.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Task.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Task.vue?vue&type=template&id=e9a53c20&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Task.vue?vue&type=template&id=e9a53c20& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_e9a53c20___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_e9a53c20___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_e9a53c20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Task.vue?vue&type=template&id=e9a53c20& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task.vue?vue&type=template&id=e9a53c20&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task.vue?vue&type=template&id=e9a53c20&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task.vue?vue&type=template&id=e9a53c20& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container-fluid" },
    [
      _c("br"),
      _vm._v(" "),
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-body" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "label",
            { staticClass: "form-label", attrs: { for: "inputPassword5" } },
            [_vm._v("Buscar")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "row g-3" }, [
            _c("div", { staticClass: "col" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.filBqTask.task,
                    expression: "filBqTask.task",
                  },
                ],
                staticClass: "form-control",
                attrs: { type: "text", placeholder: "Buscar tarea" },
                domProps: { value: _vm.filBqTask.task },
                on: {
                  keyup: function ($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.getTask.apply(null, arguments)
                  },
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.filBqTask, "task", $event.target.value)
                  },
                },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col" }, [
              _c(
                "button",
                {
                  directives: [
                    {
                      name: "loading",
                      rawName: "v-loading.fullscreen.lock",
                      value: _vm.fullscreenLoading,
                      expression: "fullscreenLoading",
                      modifiers: { fullscreen: true, lock: true },
                    },
                  ],
                  staticClass: "form-control btn btn-danger",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.getTask.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("i", { staticClass: "fa fa-search" }),
                  _vm._v(
                    "\n                        Buscar\n                    "
                  ),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col" }, [
              _c(
                "button",
                {
                  staticClass: "form-control btn btn-outline-secondary",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.limpiarCriteriosBsq.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("i", { staticClass: "fa fa-eraser" }),
                  _vm._v(
                    "\n                        Limpiar\n                    "
                  ),
                ]
              ),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-outline-danger",
                    attrs: { to: { name: "home" } },
                  },
                  [
                    _c("i", { staticClass: "fas fa-plus-circle" }),
                    _vm._v(
                      "\n                        Agregar tarea\n                    "
                    ),
                  ]
                ),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-text", attrs: { id: "passwordHelpBlock" } },
            [
              _vm._v(
                "\n                Debes ingresar la información del documento el cual deseas\n                buscar, el sistema te arrojará resultados con las\n                coincidencias mas exactas.\n            "
              ),
            ]
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _vm.listTaskPaginate.length
        ? [
            _c(
              "table",
              {
                ref: "tableUsers",
                staticClass: "table table-striped table-hover text-center",
              },
              [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.listTaskPaginate, function (item, index) {
                    return _c("tr", { key: index }, [
                      _c("td", { domProps: { textContent: _vm._s(item.id) } }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { textContent: _vm._s(item.task) },
                      }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { textContent: _vm._s(item.status) },
                      }),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { textContent: _vm._s(item.description) },
                      }),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "btn btn-outline-danger",
                              attrs: {
                                to: {
                                  name: "editTask",
                                  params: { id: item.id },
                                },
                              },
                            },
                            [_c("i", { staticClass: "fas fa-edit" })]
                          ),
                        ],
                        1
                      ),
                    ])
                  }),
                  0
                ),
              ]
            ),
            _vm._v(" "),
            _c("nav", { attrs: { "aria-label": "Page navigation example" } }, [
              _c(
                "ul",
                {
                  staticClass:
                    "pagination pagination-sm justify-content-center",
                },
                [
                  _vm.pageNumber > 0
                    ? _c("li", { staticClass: "page-item" }, [
                        _c(
                          "a",
                          {
                            staticClass: "page-link",
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.prevPage.apply(null, arguments)
                              },
                            },
                          },
                          [_vm._v("Anterior")]
                        ),
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.pagesList, function (page, index) {
                    return _c(
                      "li",
                      {
                        key: index,
                        staticClass: "page-item",
                        class: [page == _vm.pageNumber ? "active" : ""],
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "page-link",
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.selectPage(page)
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(page + 1) +
                                "\n                    "
                            ),
                          ]
                        ),
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _vm.pageNumber < _vm.pageCount - 1
                    ? _c("li", { staticClass: "page-item" }, [
                        _c(
                          "a",
                          {
                            staticClass: "page-link",
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.nextPage.apply(null, arguments)
                              },
                            },
                          },
                          [_vm._v("Siguiente")]
                        ),
                      ])
                    : _vm._e(),
                ],
                2
              ),
            ]),
          ]
        : [
            _c("el-alert", {
              attrs: {
                title: "Lo sentimos, no encontramos información",
                type: "warning",
                "show-icon": "",
                closable: false,
              },
            }),
          ],
    ],
    2
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", { staticClass: "card-title" }, [
      _c("h4", [
        _vm._v("\n                    Registro total\n                    "),
        _c("span", { staticClass: "badge bg-secondary" }, [_vm._v("TAREAS")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("TAREA")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("STATUS")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("DESCRIPCION")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Acciones")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);