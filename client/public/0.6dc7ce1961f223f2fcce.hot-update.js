webpackHotUpdate(0,{

/***/ "./js/Form.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(\"./node_modules/react/react.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Paper__ = __webpack_require__(\"./node_modules/material-ui/Paper/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_Paper__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_RaisedButton__ = __webpack_require__(\"./node_modules/material-ui/RaisedButton/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_RaisedButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_RaisedButton__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_MenuItem__ = __webpack_require__(\"./node_modules/material-ui/MenuItem/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_MenuItem__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n// import Formsy from 'formsy-react';\n// import getMuiTheme from 'material-ui/styles/getMuiTheme';\n// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';\n\n\n\n// import { FormsySelect, FormsyText, FormsyToggle, FormsyAutoComplete } from 'formsy-material-ui/lib';\n// import validationRules from 'formsy-react/lib/validationRules';\n\nvar styles = {\n\tpaperStyle: {\n\t\twidth: 300,\n\t\tmargin: 'auto',\n\t\tpadding: 20\n\t},\n\tswitchStyle: {\n\t\tmarginBottom: 16\n\t},\n\tsubmitStyle: {\n\t\tmarginTop: 32\n\t}\n};\n\nvar errorMessages = {\n\twordsError: 'Please only use letters',\n\tnumericError: 'Please provide a number',\n\temailError: 'Please provide a valid email',\n\taddressError: 'Please provide a valid address',\n\tzipcodeError: 'Please provide a valid zipcode',\n\tphonenumberError: 'Please provide a valid phone number'\n};\n\nvar Form = function (_Component) {\n\t_inherits(Form, _Component);\n\n\tfunction Form() {\n\t\tvar _temp, _this, _ret;\n\n\t\t_classCallCheck(this, Form);\n\n\t\tfor (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n\t\t\targs[_key] = arguments[_key];\n\t\t}\n\n\t\treturn _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {\n\t\t\tcanSubmit: false\n\t\t}, _this.enableButton = function () {\n\t\t\tvar _this2;\n\n\t\t\treturn (_this2 = _this).__enableButton__REACT_HOT_LOADER__.apply(_this2, arguments);\n\t\t}, _this.disableButton = function () {\n\t\t\tvar _this3;\n\n\t\t\treturn (_this3 = _this).__disableButton__REACT_HOT_LOADER__.apply(_this3, arguments);\n\t\t}, _this.submitForm = function () {\n\t\t\tvar _this4;\n\n\t\t\treturn (_this4 = _this).__submitForm__REACT_HOT_LOADER__.apply(_this4, arguments);\n\t\t}, _this.notifyFormError = function () {\n\t\t\tvar _this5;\n\n\t\t\treturn (_this5 = _this).__notifyFormError__REACT_HOT_LOADER__.apply(_this5, arguments);\n\t\t}, _temp), _possibleConstructorReturn(_this, _ret);\n\t}\n\t/**\n  * As an alternative to `MuiThemeProvider` you can add a theme directly into context.\n  * See the [Material-UI themes](http://www.material-ui.com/#/customization/themes) docs for details.\n  *\n  * childContextTypes: {\n  *   muiTheme: PropTypes.object,\n  * },\n  * getChildContext(){\n  *   return {\n  *     muiTheme: getMuiTheme(),\n  *   }\n  * },\n  */\n\n\tForm.prototype.__enableButton__REACT_HOT_LOADER__ = function __enableButton__REACT_HOT_LOADER__() {\n\t\tthis.setState({\n\t\t\tcanSubmit: true\n\t\t});\n\t};\n\n\tForm.prototype.__disableButton__REACT_HOT_LOADER__ = function __disableButton__REACT_HOT_LOADER__() {\n\t\tthis.setState({\n\t\t\tcanSubmit: false\n\t\t});\n\t};\n\n\tForm.prototype.__submitForm__REACT_HOT_LOADER__ = function __submitForm__REACT_HOT_LOADER__(data) {\n\t\talert(JSON.stringify(data, null, 4));\n\t};\n\n\tForm.prototype.__notifyFormError__REACT_HOT_LOADER__ = function __notifyFormError__REACT_HOT_LOADER__(data) {\n\t\tconsole.error('Form error:', data);\n\t};\n\n\tForm.prototype.render = function render() {\n\t\tvar paperStyle = styles.paperStyle,\n\t\t    switchStyle = styles.switchStyle,\n\t\t    submitStyle = styles.submitStyle;\n\t\tvar wordsError = errorMessages.wordsError,\n\t\t    numericError = errorMessages.numericError,\n\t\t    emailError = errorMessages.emailError,\n\t\t    addressError = errorMessages.addressError,\n\t\t    zipcodeError = errorMessages.zipcodeError,\n\t\t    phonenumberError = errorMessages.phonenumberError;\n\n\n\t\treturn __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t__WEBPACK_IMPORTED_MODULE_1_material_ui_Paper___default.a,\n\t\t\t{ style: paperStyle },\n\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\tFormsy.Form,\n\t\t\t\t{\n\t\t\t\t\tonValid: this.enableButton,\n\t\t\t\t\tonInvalid: this.disableButton,\n\t\t\t\t\tonValidSubmit: this.submitForm,\n\t\t\t\t\tonInvalidSubmit: this.notifyFormError\n\t\t\t\t},\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FormsyText, {\n\t\t\t\t\tname: 'name',\n\t\t\t\t\tvalidations: 'isWords',\n\t\t\t\t\tvalidationError: wordsError,\n\t\t\t\t\trequired: true,\n\t\t\t\t\thintText: 'What is your Gurdwara\\'s name?',\n\t\t\t\t\tfloatingLabelText: 'Gurdwara name'\n\t\t\t\t}),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FormsyText, {\n\t\t\t\t\tname: 'addressLine1',\n\t\t\t\t\tvalidations: 'isAddress',\n\t\t\t\t\tvalidationError: addressError,\n\t\t\t\t\trequired: true,\n\t\t\t\t\thintText: 'What is your Gurdwara\\'s address?',\n\t\t\t\t\tfloatingLabelText: 'Address Line 1'\n\t\t\t\t}),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FormsyText, {\n\t\t\t\t\tname: 'addressLine2',\n\t\t\t\t\tvalidations: 'isAddress',\n\t\t\t\t\tvalidationError: addressError,\n\t\t\t\t\thintText: 'What is your Gurdwara\\'s address?',\n\t\t\t\t\tfloatingLabelText: 'Address Line 2 (if needed)'\n\t\t\t\t}),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FormsyText, {\n\t\t\t\t\tname: 'city',\n\t\t\t\t\tvalidations: 'isWords',\n\t\t\t\t\tvalidationError: wordsError,\n\t\t\t\t\trequired: true,\n\t\t\t\t\thintText: 'What is your Gurdwara\\'s city?',\n\t\t\t\t\tfloatingLabelText: 'City'\n\t\t\t\t}),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FormsyText, {\n\t\t\t\t\tname: 'state',\n\t\t\t\t\tvalidations: 'isWords',\n\t\t\t\t\tvalidationError: wordsError,\n\t\t\t\t\trequired: true,\n\t\t\t\t\thintText: 'What is your Gurdwara\\'s state?',\n\t\t\t\t\tfloatingLabelText: 'State'\n\t\t\t\t}),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t\tFormsySelect,\n\t\t\t\t\t{ name: 'country', required: true, floatingLabelText: 'Country' },\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_MenuItem___default.a, { value: 'United States', primaryText: 'United States' }),\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_MenuItem___default.a, { value: 'Canada', primaryText: 'Canada' }),\n\t\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_MenuItem___default.a, { value: 'United Kingdom', primaryText: 'United Kingdom' })\n\t\t\t\t),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FormsyText, {\n\t\t\t\t\tname: 'zipcode',\n\t\t\t\t\tvalidations: 'isZipcode',\n\t\t\t\t\tvalidationError: zipcodeError,\n\t\t\t\t\trequired: true,\n\t\t\t\t\thintText: 'What is your Gurdwara\\'s zipcode?',\n\t\t\t\t\tfloatingLabelText: 'Zipcode'\n\t\t\t\t}),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FormsyText, {\n\t\t\t\t\tname: 'phoneNumber',\n\t\t\t\t\tvalidations: 'isPhoneNumber',\n\t\t\t\t\tvalidationError: phonenumberError,\n\t\t\t\t\trequired: true,\n\t\t\t\t\thintText: 'What is your Gurdwara\\'s number?',\n\t\t\t\t\tfloatingLabelText: 'Phone number'\n\t\t\t\t}),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FormsyText, {\n\t\t\t\t\tname: 'email',\n\t\t\t\t\tvalidations: 'isEmail',\n\t\t\t\t\tvalidationError: emailError,\n\t\t\t\t\thintText: 'What is your Gurdwara\\'s email?',\n\t\t\t\t\tfloatingLabelText: 'Email'\n\t\t\t\t}),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_RaisedButton___default.a, { style: submitStyle, type: 'submit', label: 'Submit', disabled: !this.state.canSubmit })\n\t\t\t)\n\t\t);\n\t};\n\n\treturn Form;\n}(__WEBPACK_IMPORTED_MODULE_0_react__[\"Component\"]);\n\nvar _default = Form;\n\n\n/* unused harmony default export */ var _unused_webpack_default_export = (_default);\n/*\nFormsy.addValidationRule('isAddress', (values, value) => {\n\treturn validationRules.matchRegexp(\n\t\tvalues,\n\t\tvalue,\n\t\t/\\d+(\\s+\\w+){1,}\\s+(?:st(?:\\.|reet)?|dr(?:\\.|ive)?|pl(?:\\.|ace)?|ave(?:\\.|nue)?|rd|road|lane|drive|way|court|plaza|square|run|parkway|point|pike|square|driveway|trace|park|terrace|blvd)/\n\t);\n});\nFormsy.addValidationRule('isZipcode', (values, value) => {\n\treturn validationRules.matchRegexp(values, value, /^[0-9]{5}(?:-[0-9]{4})?$/);\n});\nFormsy.addValidationRule('isPhoneNumber', (values, value) => {\n\treturn validationRules.matchRegexp(\n\t\tvalues,\n\t\tvalue,\n\t\t/^(?:(?:\\(?(?:00|\\+)([1-4]\\d\\d|[1-9]\\d?)\\)?)?[\\-\\.\\ \\\\\\/]?)?((?:\\(?\\d{1,}\\)?[\\-\\.\\ \\\\\\/]?){0,})(?:[\\-\\.\\ \\\\\\/]?(?:#|ext\\.?|extension|x)[\\-\\.\\ \\\\\\/]?(\\d+))?$/i\n\t);\n});*/\n\n// <pre>\n// \t<code>{JSON.stringify(preload, null, 4)}</code>\n// </pre>\n\n;\n\nvar _temp2 = function () {\n\tif (typeof __REACT_HOT_LOADER__ === 'undefined') {\n\t\treturn;\n\t}\n\n\t__REACT_HOT_LOADER__.register(styles, 'styles', '/Users/jackiethind/gdb-frontend/create-react-app-with-flow/js/Form.jsx');\n\n\t__REACT_HOT_LOADER__.register(errorMessages, 'errorMessages', '/Users/jackiethind/gdb-frontend/create-react-app-with-flow/js/Form.jsx');\n\n\t__REACT_HOT_LOADER__.register(Form, 'Form', '/Users/jackiethind/gdb-frontend/create-react-app-with-flow/js/Form.jsx');\n\n\t__REACT_HOT_LOADER__.register(_default, 'default', '/Users/jackiethind/gdb-frontend/create-react-app-with-flow/js/Form.jsx');\n}();\n\n;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9Gb3JtLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL0Zvcm0uanN4P2I0NDciXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IEZvcm1zeSBmcm9tICdmb3Jtc3ktcmVhY3QnO1xuLy8gaW1wb3J0IGdldE11aVRoZW1lIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9nZXRNdWlUaGVtZSc7XG4vLyBpbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgUGFwZXIgZnJvbSAnbWF0ZXJpYWwtdWkvUGFwZXInO1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ21hdGVyaWFsLXVpL01lbnVJdGVtJztcbi8vIGltcG9ydCB7IEZvcm1zeVNlbGVjdCwgRm9ybXN5VGV4dCwgRm9ybXN5VG9nZ2xlLCBGb3Jtc3lBdXRvQ29tcGxldGUgfSBmcm9tICdmb3Jtc3ktbWF0ZXJpYWwtdWkvbGliJztcbi8vIGltcG9ydCB2YWxpZGF0aW9uUnVsZXMgZnJvbSAnZm9ybXN5LXJlYWN0L2xpYi92YWxpZGF0aW9uUnVsZXMnO1xuXG52YXIgc3R5bGVzID0ge1xuXHRwYXBlclN0eWxlOiB7XG5cdFx0d2lkdGg6IDMwMCxcblx0XHRtYXJnaW46ICdhdXRvJyxcblx0XHRwYWRkaW5nOiAyMFxuXHR9LFxuXHRzd2l0Y2hTdHlsZToge1xuXHRcdG1hcmdpbkJvdHRvbTogMTZcblx0fSxcblx0c3VibWl0U3R5bGU6IHtcblx0XHRtYXJnaW5Ub3A6IDMyXG5cdH1cbn07XG5cbnZhciBlcnJvck1lc3NhZ2VzID0ge1xuXHR3b3Jkc0Vycm9yOiAnUGxlYXNlIG9ubHkgdXNlIGxldHRlcnMnLFxuXHRudW1lcmljRXJyb3I6ICdQbGVhc2UgcHJvdmlkZSBhIG51bWJlcicsXG5cdGVtYWlsRXJyb3I6ICdQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIGVtYWlsJyxcblx0YWRkcmVzc0Vycm9yOiAnUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBhZGRyZXNzJyxcblx0emlwY29kZUVycm9yOiAnUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCB6aXBjb2RlJyxcblx0cGhvbmVudW1iZXJFcnJvcjogJ1BsZWFzZSBwcm92aWRlIGEgdmFsaWQgcGhvbmUgbnVtYmVyJ1xufTtcblxudmFyIEZvcm0gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoRm9ybSwgX0NvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gRm9ybSgpIHtcblx0XHR2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZvcm0pO1xuXG5cdFx0Zm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcblx0XHRcdGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmNhbGwuYXBwbHkoX0NvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuXHRcdFx0Y2FuU3VibWl0OiBmYWxzZVxuXHRcdH0sIF90aGlzLmVuYWJsZUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBfdGhpczI7XG5cblx0XHRcdHJldHVybiAoX3RoaXMyID0gX3RoaXMpLl9fZW5hYmxlQnV0dG9uX19SRUFDVF9IT1RfTE9BREVSX18uYXBwbHkoX3RoaXMyLCBhcmd1bWVudHMpO1xuXHRcdH0sIF90aGlzLmRpc2FibGVCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgX3RoaXMzO1xuXG5cdFx0XHRyZXR1cm4gKF90aGlzMyA9IF90aGlzKS5fX2Rpc2FibGVCdXR0b25fX1JFQUNUX0hPVF9MT0FERVJfXy5hcHBseShfdGhpczMsIGFyZ3VtZW50cyk7XG5cdFx0fSwgX3RoaXMuc3VibWl0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBfdGhpczQ7XG5cblx0XHRcdHJldHVybiAoX3RoaXM0ID0gX3RoaXMpLl9fc3VibWl0Rm9ybV9fUkVBQ1RfSE9UX0xPQURFUl9fLmFwcGx5KF90aGlzNCwgYXJndW1lbnRzKTtcblx0XHR9LCBfdGhpcy5ub3RpZnlGb3JtRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgX3RoaXM1O1xuXG5cdFx0XHRyZXR1cm4gKF90aGlzNSA9IF90aGlzKS5fX25vdGlmeUZvcm1FcnJvcl9fUkVBQ1RfSE9UX0xPQURFUl9fLmFwcGx5KF90aGlzNSwgYXJndW1lbnRzKTtcblx0XHR9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcblx0fVxuXHQvKipcbiAgKiBBcyBhbiBhbHRlcm5hdGl2ZSB0byBgTXVpVGhlbWVQcm92aWRlcmAgeW91IGNhbiBhZGQgYSB0aGVtZSBkaXJlY3RseSBpbnRvIGNvbnRleHQuXG4gICogU2VlIHRoZSBbTWF0ZXJpYWwtVUkgdGhlbWVzXShodHRwOi8vd3d3Lm1hdGVyaWFsLXVpLmNvbS8jL2N1c3RvbWl6YXRpb24vdGhlbWVzKSBkb2NzIGZvciBkZXRhaWxzLlxuICAqXG4gICogY2hpbGRDb250ZXh0VHlwZXM6IHtcbiAgKiAgIG11aVRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LFxuICAqIH0sXG4gICogZ2V0Q2hpbGRDb250ZXh0KCl7XG4gICogICByZXR1cm4ge1xuICAqICAgICBtdWlUaGVtZTogZ2V0TXVpVGhlbWUoKSxcbiAgKiAgIH1cbiAgKiB9LFxuICAqL1xuXG5cdEZvcm0ucHJvdG90eXBlLl9fZW5hYmxlQnV0dG9uX19SRUFDVF9IT1RfTE9BREVSX18gPSBmdW5jdGlvbiBfX2VuYWJsZUJ1dHRvbl9fUkVBQ1RfSE9UX0xPQURFUl9fKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y2FuU3VibWl0OiB0cnVlXG5cdFx0fSk7XG5cdH07XG5cblx0Rm9ybS5wcm90b3R5cGUuX19kaXNhYmxlQnV0dG9uX19SRUFDVF9IT1RfTE9BREVSX18gPSBmdW5jdGlvbiBfX2Rpc2FibGVCdXR0b25fX1JFQUNUX0hPVF9MT0FERVJfXygpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGNhblN1Ym1pdDogZmFsc2Vcblx0XHR9KTtcblx0fTtcblxuXHRGb3JtLnByb3RvdHlwZS5fX3N1Ym1pdEZvcm1fX1JFQUNUX0hPVF9MT0FERVJfXyA9IGZ1bmN0aW9uIF9fc3VibWl0Rm9ybV9fUkVBQ1RfSE9UX0xPQURFUl9fKGRhdGEpIHtcblx0XHRhbGVydChKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCA0KSk7XG5cdH07XG5cblx0Rm9ybS5wcm90b3R5cGUuX19ub3RpZnlGb3JtRXJyb3JfX1JFQUNUX0hPVF9MT0FERVJfXyA9IGZ1bmN0aW9uIF9fbm90aWZ5Rm9ybUVycm9yX19SRUFDVF9IT1RfTE9BREVSX18oZGF0YSkge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ0Zvcm0gZXJyb3I6JywgZGF0YSk7XG5cdH07XG5cblx0Rm9ybS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdHZhciBwYXBlclN0eWxlID0gc3R5bGVzLnBhcGVyU3R5bGUsXG5cdFx0ICAgIHN3aXRjaFN0eWxlID0gc3R5bGVzLnN3aXRjaFN0eWxlLFxuXHRcdCAgICBzdWJtaXRTdHlsZSA9IHN0eWxlcy5zdWJtaXRTdHlsZTtcblx0XHR2YXIgd29yZHNFcnJvciA9IGVycm9yTWVzc2FnZXMud29yZHNFcnJvcixcblx0XHQgICAgbnVtZXJpY0Vycm9yID0gZXJyb3JNZXNzYWdlcy5udW1lcmljRXJyb3IsXG5cdFx0ICAgIGVtYWlsRXJyb3IgPSBlcnJvck1lc3NhZ2VzLmVtYWlsRXJyb3IsXG5cdFx0ICAgIGFkZHJlc3NFcnJvciA9IGVycm9yTWVzc2FnZXMuYWRkcmVzc0Vycm9yLFxuXHRcdCAgICB6aXBjb2RlRXJyb3IgPSBlcnJvck1lc3NhZ2VzLnppcGNvZGVFcnJvcixcblx0XHQgICAgcGhvbmVudW1iZXJFcnJvciA9IGVycm9yTWVzc2FnZXMucGhvbmVudW1iZXJFcnJvcjtcblxuXG5cdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRQYXBlcixcblx0XHRcdHsgc3R5bGU6IHBhcGVyU3R5bGUgfSxcblx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdEZvcm1zeS5Gb3JtLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0b25WYWxpZDogdGhpcy5lbmFibGVCdXR0b24sXG5cdFx0XHRcdFx0b25JbnZhbGlkOiB0aGlzLmRpc2FibGVCdXR0b24sXG5cdFx0XHRcdFx0b25WYWxpZFN1Ym1pdDogdGhpcy5zdWJtaXRGb3JtLFxuXHRcdFx0XHRcdG9uSW52YWxpZFN1Ym1pdDogdGhpcy5ub3RpZnlGb3JtRXJyb3Jcblx0XHRcdFx0fSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChGb3Jtc3lUZXh0LCB7XG5cdFx0XHRcdFx0bmFtZTogJ25hbWUnLFxuXHRcdFx0XHRcdHZhbGlkYXRpb25zOiAnaXNXb3JkcycsXG5cdFx0XHRcdFx0dmFsaWRhdGlvbkVycm9yOiB3b3Jkc0Vycm9yLFxuXHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0XHRcdGhpbnRUZXh0OiAnV2hhdCBpcyB5b3VyIEd1cmR3YXJhXFwncyBuYW1lPycsXG5cdFx0XHRcdFx0ZmxvYXRpbmdMYWJlbFRleHQ6ICdHdXJkd2FyYSBuYW1lJ1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChGb3Jtc3lUZXh0LCB7XG5cdFx0XHRcdFx0bmFtZTogJ2FkZHJlc3NMaW5lMScsXG5cdFx0XHRcdFx0dmFsaWRhdGlvbnM6ICdpc0FkZHJlc3MnLFxuXHRcdFx0XHRcdHZhbGlkYXRpb25FcnJvcjogYWRkcmVzc0Vycm9yLFxuXHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0XHRcdGhpbnRUZXh0OiAnV2hhdCBpcyB5b3VyIEd1cmR3YXJhXFwncyBhZGRyZXNzPycsXG5cdFx0XHRcdFx0ZmxvYXRpbmdMYWJlbFRleHQ6ICdBZGRyZXNzIExpbmUgMSdcblx0XHRcdFx0fSksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybXN5VGV4dCwge1xuXHRcdFx0XHRcdG5hbWU6ICdhZGRyZXNzTGluZTInLFxuXHRcdFx0XHRcdHZhbGlkYXRpb25zOiAnaXNBZGRyZXNzJyxcblx0XHRcdFx0XHR2YWxpZGF0aW9uRXJyb3I6IGFkZHJlc3NFcnJvcixcblx0XHRcdFx0XHRoaW50VGV4dDogJ1doYXQgaXMgeW91ciBHdXJkd2FyYVxcJ3MgYWRkcmVzcz8nLFxuXHRcdFx0XHRcdGZsb2F0aW5nTGFiZWxUZXh0OiAnQWRkcmVzcyBMaW5lIDIgKGlmIG5lZWRlZCknXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1zeVRleHQsIHtcblx0XHRcdFx0XHRuYW1lOiAnY2l0eScsXG5cdFx0XHRcdFx0dmFsaWRhdGlvbnM6ICdpc1dvcmRzJyxcblx0XHRcdFx0XHR2YWxpZGF0aW9uRXJyb3I6IHdvcmRzRXJyb3IsXG5cdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHRcdFx0aGludFRleHQ6ICdXaGF0IGlzIHlvdXIgR3VyZHdhcmFcXCdzIGNpdHk/Jyxcblx0XHRcdFx0XHRmbG9hdGluZ0xhYmVsVGV4dDogJ0NpdHknXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1zeVRleHQsIHtcblx0XHRcdFx0XHRuYW1lOiAnc3RhdGUnLFxuXHRcdFx0XHRcdHZhbGlkYXRpb25zOiAnaXNXb3JkcycsXG5cdFx0XHRcdFx0dmFsaWRhdGlvbkVycm9yOiB3b3Jkc0Vycm9yLFxuXHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0XHRcdGhpbnRUZXh0OiAnV2hhdCBpcyB5b3VyIEd1cmR3YXJhXFwncyBzdGF0ZT8nLFxuXHRcdFx0XHRcdGZsb2F0aW5nTGFiZWxUZXh0OiAnU3RhdGUnXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdEZvcm1zeVNlbGVjdCxcblx0XHRcdFx0XHR7IG5hbWU6ICdjb3VudHJ5JywgcmVxdWlyZWQ6IHRydWUsIGZsb2F0aW5nTGFiZWxUZXh0OiAnQ291bnRyeScgfSxcblx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7IHZhbHVlOiAnVW5pdGVkIFN0YXRlcycsIHByaW1hcnlUZXh0OiAnVW5pdGVkIFN0YXRlcycgfSksXG5cdFx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChNZW51SXRlbSwgeyB2YWx1ZTogJ0NhbmFkYScsIHByaW1hcnlUZXh0OiAnQ2FuYWRhJyB9KSxcblx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KE1lbnVJdGVtLCB7IHZhbHVlOiAnVW5pdGVkIEtpbmdkb20nLCBwcmltYXJ5VGV4dDogJ1VuaXRlZCBLaW5nZG9tJyB9KVxuXHRcdFx0XHQpLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1zeVRleHQsIHtcblx0XHRcdFx0XHRuYW1lOiAnemlwY29kZScsXG5cdFx0XHRcdFx0dmFsaWRhdGlvbnM6ICdpc1ppcGNvZGUnLFxuXHRcdFx0XHRcdHZhbGlkYXRpb25FcnJvcjogemlwY29kZUVycm9yLFxuXHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0XHRcdGhpbnRUZXh0OiAnV2hhdCBpcyB5b3VyIEd1cmR3YXJhXFwncyB6aXBjb2RlPycsXG5cdFx0XHRcdFx0ZmxvYXRpbmdMYWJlbFRleHQ6ICdaaXBjb2RlJ1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChGb3Jtc3lUZXh0LCB7XG5cdFx0XHRcdFx0bmFtZTogJ3Bob25lTnVtYmVyJyxcblx0XHRcdFx0XHR2YWxpZGF0aW9uczogJ2lzUGhvbmVOdW1iZXInLFxuXHRcdFx0XHRcdHZhbGlkYXRpb25FcnJvcjogcGhvbmVudW1iZXJFcnJvcixcblx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHRcdFx0XHRoaW50VGV4dDogJ1doYXQgaXMgeW91ciBHdXJkd2FyYVxcJ3MgbnVtYmVyPycsXG5cdFx0XHRcdFx0ZmxvYXRpbmdMYWJlbFRleHQ6ICdQaG9uZSBudW1iZXInXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1zeVRleHQsIHtcblx0XHRcdFx0XHRuYW1lOiAnZW1haWwnLFxuXHRcdFx0XHRcdHZhbGlkYXRpb25zOiAnaXNFbWFpbCcsXG5cdFx0XHRcdFx0dmFsaWRhdGlvbkVycm9yOiBlbWFpbEVycm9yLFxuXHRcdFx0XHRcdGhpbnRUZXh0OiAnV2hhdCBpcyB5b3VyIEd1cmR3YXJhXFwncyBlbWFpbD8nLFxuXHRcdFx0XHRcdGZsb2F0aW5nTGFiZWxUZXh0OiAnRW1haWwnXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFJhaXNlZEJ1dHRvbiwgeyBzdHlsZTogc3VibWl0U3R5bGUsIHR5cGU6ICdzdWJtaXQnLCBsYWJlbDogJ1N1Ym1pdCcsIGRpc2FibGVkOiAhdGhpcy5zdGF0ZS5jYW5TdWJtaXQgfSlcblx0XHRcdClcblx0XHQpO1xuXHR9O1xuXG5cdHJldHVybiBGb3JtO1xufShDb21wb25lbnQpO1xuXG52YXIgX2RlZmF1bHQgPSBGb3JtO1xuXG5cbmV4cG9ydCBkZWZhdWx0IF9kZWZhdWx0O1xuLypcbkZvcm1zeS5hZGRWYWxpZGF0aW9uUnVsZSgnaXNBZGRyZXNzJywgKHZhbHVlcywgdmFsdWUpID0+IHtcblx0cmV0dXJuIHZhbGlkYXRpb25SdWxlcy5tYXRjaFJlZ2V4cChcblx0XHR2YWx1ZXMsXG5cdFx0dmFsdWUsXG5cdFx0L1xcZCsoXFxzK1xcdyspezEsfVxccysoPzpzdCg/OlxcLnxyZWV0KT98ZHIoPzpcXC58aXZlKT98cGwoPzpcXC58YWNlKT98YXZlKD86XFwufG51ZSk/fHJkfHJvYWR8bGFuZXxkcml2ZXx3YXl8Y291cnR8cGxhemF8c3F1YXJlfHJ1bnxwYXJrd2F5fHBvaW50fHBpa2V8c3F1YXJlfGRyaXZld2F5fHRyYWNlfHBhcmt8dGVycmFjZXxibHZkKS9cblx0KTtcbn0pO1xuRm9ybXN5LmFkZFZhbGlkYXRpb25SdWxlKCdpc1ppcGNvZGUnLCAodmFsdWVzLCB2YWx1ZSkgPT4ge1xuXHRyZXR1cm4gdmFsaWRhdGlvblJ1bGVzLm1hdGNoUmVnZXhwKHZhbHVlcywgdmFsdWUsIC9eWzAtOV17NX0oPzotWzAtOV17NH0pPyQvKTtcbn0pO1xuRm9ybXN5LmFkZFZhbGlkYXRpb25SdWxlKCdpc1Bob25lTnVtYmVyJywgKHZhbHVlcywgdmFsdWUpID0+IHtcblx0cmV0dXJuIHZhbGlkYXRpb25SdWxlcy5tYXRjaFJlZ2V4cChcblx0XHR2YWx1ZXMsXG5cdFx0dmFsdWUsXG5cdFx0L14oPzooPzpcXCg/KD86MDB8XFwrKShbMS00XVxcZFxcZHxbMS05XVxcZD8pXFwpPyk/W1xcLVxcLlxcIFxcXFxcXC9dPyk/KCg/OlxcKD9cXGR7MSx9XFwpP1tcXC1cXC5cXCBcXFxcXFwvXT8pezAsfSkoPzpbXFwtXFwuXFwgXFxcXFxcL10/KD86I3xleHRcXC4/fGV4dGVuc2lvbnx4KVtcXC1cXC5cXCBcXFxcXFwvXT8oXFxkKykpPyQvaVxuXHQpO1xufSk7Ki9cblxuLy8gPHByZT5cbi8vIFx0PGNvZGU+e0pTT04uc3RyaW5naWZ5KHByZWxvYWQsIG51bGwsIDQpfTwvY29kZT5cbi8vIDwvcHJlPlxuXG47XG5cbnZhciBfdGVtcDIgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh0eXBlb2YgX19SRUFDVF9IT1RfTE9BREVSX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0X19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIoc3R5bGVzLCAnc3R5bGVzJywgJy9Vc2Vycy9qYWNraWV0aGluZC9nZGItZnJvbnRlbmQvY3JlYXRlLXJlYWN0LWFwcC13aXRoLWZsb3cvanMvRm9ybS5qc3gnKTtcblxuXHRfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihlcnJvck1lc3NhZ2VzLCAnZXJyb3JNZXNzYWdlcycsICcvVXNlcnMvamFja2lldGhpbmQvZ2RiLWZyb250ZW5kL2NyZWF0ZS1yZWFjdC1hcHAtd2l0aC1mbG93L2pzL0Zvcm0uanN4Jyk7XG5cblx0X19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIoRm9ybSwgJ0Zvcm0nLCAnL1VzZXJzL2phY2tpZXRoaW5kL2dkYi1mcm9udGVuZC9jcmVhdGUtcmVhY3QtYXBwLXdpdGgtZmxvdy9qcy9Gb3JtLmpzeCcpO1xuXG5cdF9fUkVBQ1RfSE9UX0xPQURFUl9fLnJlZ2lzdGVyKF9kZWZhdWx0LCAnZGVmYXVsdCcsICcvVXNlcnMvamFja2lldGhpbmQvZ2RiLWZyb250ZW5kL2NyZWF0ZS1yZWFjdC1hcHAtd2l0aC1mbG93L2pzL0Zvcm0uanN4Jyk7XG59KCk7XG5cbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL0Zvcm0uanN4XG4vLyBtb2R1bGUgaWQgPSAuL2pzL0Zvcm0uanN4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})