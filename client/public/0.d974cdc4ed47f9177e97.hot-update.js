webpackHotUpdate(0,{

/***/ "./js/Form.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(\"./node_modules/react/react.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Paper__ = __webpack_require__(\"./node_modules/material-ui/Paper/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_Paper__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_RaisedButton__ = __webpack_require__(\"./node_modules/material-ui/RaisedButton/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_RaisedButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_RaisedButton__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_MenuItem__ = __webpack_require__(\"./node_modules/material-ui/MenuItem/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_MenuItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_MenuItem__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_form_validator_core__ = __webpack_require__(\"./node_modules/react-form-validator-core/lib/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_form_validator_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_form_validator_core__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_material_ui_form_validator__ = __webpack_require__(\"./node_modules/react-material-ui-form-validator/lib/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_material_ui_form_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_material_ui_form_validator__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n// import Formsy from 'formsy-react';\n// import getMuiTheme from 'material-ui/styles/getMuiTheme';\n// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';\n\n\n\n\n\n// import { FormsySelect, FormsyText, FormsyToggle, FormsyAutoComplete } from 'formsy-material-ui/lib';\n// import validationRules from 'formsy-react/lib/validationRules';\n\nvar styles = {\n\tpaperStyle: {\n\t\twidth: 300,\n\t\tmargin: 'auto',\n\t\tpadding: 20\n\t},\n\tswitchStyle: {\n\t\tmarginBottom: 16\n\t},\n\tsubmitStyle: {\n\t\tmarginTop: 32\n\t}\n};\n\nvar errorMessages = {\n\twordsError: 'Please only use letters',\n\tnumericError: 'Please provide a number',\n\temailError: 'Please provide a valid email',\n\taddressError: 'Please provide a valid address',\n\tzipcodeError: 'Please provide a valid zipcode',\n\tphonenumberError: 'Please provide a valid phone number'\n};\n\nvar Form = function (_Component) {\n\t_inherits(Form, _Component);\n\n\tfunction Form() {\n\t\tvar _temp, _this, _ret;\n\n\t\t_classCallCheck(this, Form);\n\n\t\tfor (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n\t\t\targs[_key] = arguments[_key];\n\t\t}\n\n\t\treturn _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {\n\t\t\tformData: {\n\t\t\t\tname: '',\n\t\t\t\taddress: '',\n\t\t\t\tcity: '',\n\t\t\t\tstate: '',\n\t\t\t\tzipcode: '',\n\t\t\t\tcountry: '',\n\t\t\t\tphoneNumber: '',\n\t\t\t\temail: ''\n\t\t\t},\n\t\t\tcanSubmit: false\n\t\t}, _this.enableButton = function () {\n\t\t\tvar _this2;\n\n\t\t\treturn (_this2 = _this).__enableButton__REACT_HOT_LOADER__.apply(_this2, arguments);\n\t\t}, _this.disableButton = function () {\n\t\t\tvar _this3;\n\n\t\t\treturn (_this3 = _this).__disableButton__REACT_HOT_LOADER__.apply(_this3, arguments);\n\t\t}, _this.submitForm = function () {\n\t\t\tvar _this4;\n\n\t\t\treturn (_this4 = _this).__submitForm__REACT_HOT_LOADER__.apply(_this4, arguments);\n\t\t}, _this.notifyFormError = function () {\n\t\t\tvar _this5;\n\n\t\t\treturn (_this5 = _this).__notifyFormError__REACT_HOT_LOADER__.apply(_this5, arguments);\n\t\t}, _this.handleChange = function () {\n\t\t\tvar _this6;\n\n\t\t\treturn (_this6 = _this).__handleChange__REACT_HOT_LOADER__.apply(_this6, arguments);\n\t\t}, _this.handleSubmit = function () {\n\t\t\tvar _this7;\n\n\t\t\treturn (_this7 = _this).__handleSubmit__REACT_HOT_LOADER__.apply(_this7, arguments);\n\t\t}, _temp), _possibleConstructorReturn(_this, _ret);\n\t}\n\t/**\n  * As an alternative to `MuiThemeProvider` you can add a theme directly into context.\n  * See the [Material-UI themes](http://www.material-ui.com/#/customization/themes) docs for details.\n  *\n  * childContextTypes: {\n  *   muiTheme: PropTypes.object,\n  * },\n  * getChildContext(){\n  *   return {\n  *     muiTheme: getMuiTheme(),\n  *   }\n  * },\n  */\n\n\tForm.prototype.__enableButton__REACT_HOT_LOADER__ = function __enableButton__REACT_HOT_LOADER__() {\n\t\tthis.setState({\n\t\t\tcanSubmit: true\n\t\t});\n\t};\n\n\tForm.prototype.__disableButton__REACT_HOT_LOADER__ = function __disableButton__REACT_HOT_LOADER__() {\n\t\tthis.setState({\n\t\t\tcanSubmit: false\n\t\t});\n\t};\n\n\tForm.prototype.__submitForm__REACT_HOT_LOADER__ = function __submitForm__REACT_HOT_LOADER__(data) {\n\t\talert(JSON.stringify(data, null, 4));\n\t};\n\n\tForm.prototype.__notifyFormError__REACT_HOT_LOADER__ = function __notifyFormError__REACT_HOT_LOADER__(data) {\n\t\tconsole.error('Form error:', data);\n\t};\n\n\tForm.prototype.__handleChange__REACT_HOT_LOADER__ = function __handleChange__REACT_HOT_LOADER__(event) {\n\t\tvar formData = this.state.formData;\n\n\t\tformData[event.target.name] = event.target.value;\n\t\tthis.setState({ formData: formData });\n\t};\n\n\tForm.prototype.__handleSubmit__REACT_HOT_LOADER__ = function __handleSubmit__REACT_HOT_LOADER__() {\n\t\tvar _this8 = this;\n\n\t\tthis.setState({ canSubmit: true }, function () {\n\t\t\tsetTimeout(function () {\n\t\t\t\treturn _this8.setState({ canSubmit: false });\n\t\t\t}, 5000);\n\t\t});\n\t};\n\n\tForm.prototype.render = function render() {\n\t\treturn __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t__WEBPACK_IMPORTED_MODULE_4_react_form_validator_core__[\"ValidatorForm\"],\n\t\t\t{ onSubmit: this.handleSubmit },\n\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t'h2',\n\t\t\t\tnull,\n\t\t\t\t'Custom rules'\n\t\t\t),\n\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_material_ui_form_validator__[\"TextValidator\"], {\n\t\t\t\tfloatingLabelText: 'Name',\n\t\t\t\tonChange: this.handleChange,\n\t\t\t\tname: 'password',\n\t\t\t\ttype: 'password',\n\t\t\t\tvalidators: ['required'],\n\t\t\t\terrorMessages: ['this field is required'],\n\t\t\t\tvalue: this.state.formData.name\n\t\t\t}),\n\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),\n\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_RaisedButton___default.a, {\n\t\t\t\ttype: 'submit',\n\t\t\t\tlabel: this.state.canSubmit && 'Your form is submitted!' || !this.state.canSubmit && 'Submit',\n\t\t\t\tdisabled: this.state.canSubmit\n\t\t\t})\n\t\t);\n\t};\n\n\treturn Form;\n}(__WEBPACK_IMPORTED_MODULE_0_react__[\"Component\"]);\n\nvar _default = Form;\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (_default);\n/*\nFormsy.addValidationRule('isAddress', (values, value) => {\n\treturn validationRules.matchRegexp(\n\t\tvalues,\n\t\tvalue,\n\t\t/\\d+(\\s+\\w+){1,}\\s+(?:st(?:\\.|reet)?|dr(?:\\.|ive)?|pl(?:\\.|ace)?|ave(?:\\.|nue)?|rd|road|lane|drive|way|court|plaza|square|run|parkway|point|pike|square|driveway|trace|park|terrace|blvd)/\n\t);\n});\nFormsy.addValidationRule('isZipcode', (values, value) => {\n\treturn validationRules.matchRegexp(values, value, /^[0-9]{5}(?:-[0-9]{4})?$/);\n});\nFormsy.addValidationRule('isPhoneNumber', (values, value) => {\n\treturn validationRules.matchRegexp(\n\t\tvalues,\n\t\tvalue,\n\t\t/^(?:(?:\\(?(?:00|\\+)([1-4]\\d\\d|[1-9]\\d?)\\)?)?[\\-\\.\\ \\\\\\/]?)?((?:\\(?\\d{1,}\\)?[\\-\\.\\ \\\\\\/]?){0,})(?:[\\-\\.\\ \\\\\\/]?(?:#|ext\\.?|extension|x)[\\-\\.\\ \\\\\\/]?(\\d+))?$/i\n\t);\n});\n\n\nlet { paperStyle, switchStyle, submitStyle } = styles;\n\t\tlet { wordsError, numericError, emailError, addressError, zipcodeError, phonenumberError } = errorMessages;\n\n<Paper style={paperStyle}>\n\t\t\t\t<Formsy.Form\n\t\t\t\t\tonValid={this.enableButton}\n\t\t\t\t\tonInvalid={this.disableButton}\n\t\t\t\t\tonValidSubmit={this.submitForm}\n\t\t\t\t\tonInvalidSubmit={this.notifyFormError}\n\t\t\t\t>\n\t\t\t\t\t<FormsyText\n\t\t\t\t\t\tname=\"name\"\n\t\t\t\t\t\tvalidations=\"isWords\"\n\t\t\t\t\t\tvalidationError={wordsError}\n\t\t\t\t\t\trequired\n\t\t\t\t\t\thintText=\"What is your Gurdwara's name?\"\n\t\t\t\t\t\tfloatingLabelText=\"Gurdwara name\"\n\t\t\t\t\t/>\n\n\t\t\t\t\t<FormsyText\n\t\t\t\t\t\tname=\"addressLine1\"\n\t\t\t\t\t\tvalidations=\"isAddress\"\n\t\t\t\t\t\tvalidationError={addressError}\n\t\t\t\t\t\trequired\n\t\t\t\t\t\thintText=\"What is your Gurdwara's address?\"\n\t\t\t\t\t\tfloatingLabelText=\"Address Line 1\"\n\t\t\t\t\t/>\n\t\t\t\t\t<FormsyText\n\t\t\t\t\t\tname=\"addressLine2\"\n\t\t\t\t\t\tvalidations=\"isAddress\"\n\t\t\t\t\t\tvalidationError={addressError}\n\t\t\t\t\t\thintText=\"What is your Gurdwara's address?\"\n\t\t\t\t\t\tfloatingLabelText=\"Address Line 2 (if needed)\"\n\t\t\t\t\t/>\n\t\t\t\t\t<FormsyText\n\t\t\t\t\t\tname=\"city\"\n\t\t\t\t\t\tvalidations=\"isWords\"\n\t\t\t\t\t\tvalidationError={wordsError}\n\t\t\t\t\t\trequired\n\t\t\t\t\t\thintText=\"What is your Gurdwara's city?\"\n\t\t\t\t\t\tfloatingLabelText=\"City\"\n\t\t\t\t\t/>\n\t\t\t\t\t<FormsyText\n\t\t\t\t\t\tname=\"state\"\n\t\t\t\t\t\tvalidations=\"isWords\"\n\t\t\t\t\t\tvalidationError={wordsError}\n\t\t\t\t\t\trequired\n\t\t\t\t\t\thintText=\"What is your Gurdwara's state?\"\n\t\t\t\t\t\tfloatingLabelText=\"State\"\n\t\t\t\t\t/>\n\t\t\t\t\t<FormsySelect name=\"country\" required floatingLabelText=\"Country\">\n\t\t\t\t\t\t<MenuItem value={'United States'} primaryText=\"United States\" />\n\t\t\t\t\t\t<MenuItem value={'Canada'} primaryText=\"Canada\" />\n\t\t\t\t\t\t<MenuItem value={'United Kingdom'} primaryText=\"United Kingdom\" />\n\t\t\t\t\t</FormsySelect>\n\t\t\t\t\t<FormsyText\n\t\t\t\t\t\tname=\"zipcode\"\n\t\t\t\t\t\tvalidations=\"isZipcode\"\n\t\t\t\t\t\tvalidationError={zipcodeError}\n\t\t\t\t\t\trequired\n\t\t\t\t\t\thintText=\"What is your Gurdwara's zipcode?\"\n\t\t\t\t\t\tfloatingLabelText=\"Zipcode\"\n\t\t\t\t\t/>\n\t\t\t\t\t<FormsyText\n\t\t\t\t\t\tname=\"phoneNumber\"\n\t\t\t\t\t\tvalidations=\"isPhoneNumber\"\n\t\t\t\t\t\tvalidationError={phonenumberError}\n\t\t\t\t\t\trequired\n\t\t\t\t\t\thintText=\"What is your Gurdwara's number?\"\n\t\t\t\t\t\tfloatingLabelText=\"Phone number\"\n\t\t\t\t\t/>\n\t\t\t\t\t<FormsyText\n\t\t\t\t\t\tname=\"email\"\n\t\t\t\t\t\tvalidations=\"isEmail\"\n\t\t\t\t\t\tvalidationError={emailError}\n\t\t\t\t\t\thintText=\"What is your Gurdwara's email?\"\n\t\t\t\t\t\tfloatingLabelText=\"Email\"\n\t\t\t\t\t/>\n\t\t\t\t\t<RaisedButton style={submitStyle} type=\"submit\" label=\"Submit\" disabled={!this.state.canSubmit} />\n\t\t\t\t</Formsy.Form>\n\t\t\t</Paper>\n\n\n\n\n\n\n\n\n\n*/\n\n// <pre>\n// \t<code>{JSON.stringify(preload, null, 4)}</code>\n// </pre>\n\n;\n\nvar _temp2 = function () {\n\tif (typeof __REACT_HOT_LOADER__ === 'undefined') {\n\t\treturn;\n\t}\n\n\t__REACT_HOT_LOADER__.register(styles, 'styles', '/Users/jackiethind/gdb-frontend/create-react-app-with-flow/js/Form.jsx');\n\n\t__REACT_HOT_LOADER__.register(errorMessages, 'errorMessages', '/Users/jackiethind/gdb-frontend/create-react-app-with-flow/js/Form.jsx');\n\n\t__REACT_HOT_LOADER__.register(Form, 'Form', '/Users/jackiethind/gdb-frontend/create-react-app-with-flow/js/Form.jsx');\n\n\t__REACT_HOT_LOADER__.register(_default, 'default', '/Users/jackiethind/gdb-frontend/create-react-app-with-flow/js/Form.jsx');\n}();\n\n;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9Gb3JtLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL0Zvcm0uanN4P2I0NDciXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IEZvcm1zeSBmcm9tICdmb3Jtc3ktcmVhY3QnO1xuLy8gaW1wb3J0IGdldE11aVRoZW1lIGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9nZXRNdWlUaGVtZSc7XG4vLyBpbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgUGFwZXIgZnJvbSAnbWF0ZXJpYWwtdWkvUGFwZXInO1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ21hdGVyaWFsLXVpL01lbnVJdGVtJztcbmltcG9ydCB7IFZhbGlkYXRvckZvcm0gfSBmcm9tICdyZWFjdC1mb3JtLXZhbGlkYXRvci1jb3JlJztcbmltcG9ydCB7IFRleHRWYWxpZGF0b3IgfSBmcm9tICdyZWFjdC1tYXRlcmlhbC11aS1mb3JtLXZhbGlkYXRvcic7XG4vLyBpbXBvcnQgeyBGb3Jtc3lTZWxlY3QsIEZvcm1zeVRleHQsIEZvcm1zeVRvZ2dsZSwgRm9ybXN5QXV0b0NvbXBsZXRlIH0gZnJvbSAnZm9ybXN5LW1hdGVyaWFsLXVpL2xpYic7XG4vLyBpbXBvcnQgdmFsaWRhdGlvblJ1bGVzIGZyb20gJ2Zvcm1zeS1yZWFjdC9saWIvdmFsaWRhdGlvblJ1bGVzJztcblxudmFyIHN0eWxlcyA9IHtcblx0cGFwZXJTdHlsZToge1xuXHRcdHdpZHRoOiAzMDAsXG5cdFx0bWFyZ2luOiAnYXV0bycsXG5cdFx0cGFkZGluZzogMjBcblx0fSxcblx0c3dpdGNoU3R5bGU6IHtcblx0XHRtYXJnaW5Cb3R0b206IDE2XG5cdH0sXG5cdHN1Ym1pdFN0eWxlOiB7XG5cdFx0bWFyZ2luVG9wOiAzMlxuXHR9XG59O1xuXG52YXIgZXJyb3JNZXNzYWdlcyA9IHtcblx0d29yZHNFcnJvcjogJ1BsZWFzZSBvbmx5IHVzZSBsZXR0ZXJzJyxcblx0bnVtZXJpY0Vycm9yOiAnUGxlYXNlIHByb3ZpZGUgYSBudW1iZXInLFxuXHRlbWFpbEVycm9yOiAnUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBlbWFpbCcsXG5cdGFkZHJlc3NFcnJvcjogJ1BsZWFzZSBwcm92aWRlIGEgdmFsaWQgYWRkcmVzcycsXG5cdHppcGNvZGVFcnJvcjogJ1BsZWFzZSBwcm92aWRlIGEgdmFsaWQgemlwY29kZScsXG5cdHBob25lbnVtYmVyRXJyb3I6ICdQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIHBob25lIG51bWJlcidcbn07XG5cbnZhciBGb3JtID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcblx0X2luaGVyaXRzKEZvcm0sIF9Db21wb25lbnQpO1xuXG5cdGZ1bmN0aW9uIEZvcm0oKSB7XG5cdFx0dmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGb3JtKTtcblxuXHRcdGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG5cdFx0XHRhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuXHRcdH1cblxuXHRcdHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcblx0XHRcdGZvcm1EYXRhOiB7XG5cdFx0XHRcdG5hbWU6ICcnLFxuXHRcdFx0XHRhZGRyZXNzOiAnJyxcblx0XHRcdFx0Y2l0eTogJycsXG5cdFx0XHRcdHN0YXRlOiAnJyxcblx0XHRcdFx0emlwY29kZTogJycsXG5cdFx0XHRcdGNvdW50cnk6ICcnLFxuXHRcdFx0XHRwaG9uZU51bWJlcjogJycsXG5cdFx0XHRcdGVtYWlsOiAnJ1xuXHRcdFx0fSxcblx0XHRcdGNhblN1Ym1pdDogZmFsc2Vcblx0XHR9LCBfdGhpcy5lbmFibGVCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgX3RoaXMyO1xuXG5cdFx0XHRyZXR1cm4gKF90aGlzMiA9IF90aGlzKS5fX2VuYWJsZUJ1dHRvbl9fUkVBQ1RfSE9UX0xPQURFUl9fLmFwcGx5KF90aGlzMiwgYXJndW1lbnRzKTtcblx0XHR9LCBfdGhpcy5kaXNhYmxlQnV0dG9uID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIF90aGlzMztcblxuXHRcdFx0cmV0dXJuIChfdGhpczMgPSBfdGhpcykuX19kaXNhYmxlQnV0dG9uX19SRUFDVF9IT1RfTE9BREVSX18uYXBwbHkoX3RoaXMzLCBhcmd1bWVudHMpO1xuXHRcdH0sIF90aGlzLnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgX3RoaXM0O1xuXG5cdFx0XHRyZXR1cm4gKF90aGlzNCA9IF90aGlzKS5fX3N1Ym1pdEZvcm1fX1JFQUNUX0hPVF9MT0FERVJfXy5hcHBseShfdGhpczQsIGFyZ3VtZW50cyk7XG5cdFx0fSwgX3RoaXMubm90aWZ5Rm9ybUVycm9yID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIF90aGlzNTtcblxuXHRcdFx0cmV0dXJuIChfdGhpczUgPSBfdGhpcykuX19ub3RpZnlGb3JtRXJyb3JfX1JFQUNUX0hPVF9MT0FERVJfXy5hcHBseShfdGhpczUsIGFyZ3VtZW50cyk7XG5cdFx0fSwgX3RoaXMuaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIF90aGlzNjtcblxuXHRcdFx0cmV0dXJuIChfdGhpczYgPSBfdGhpcykuX19oYW5kbGVDaGFuZ2VfX1JFQUNUX0hPVF9MT0FERVJfXy5hcHBseShfdGhpczYsIGFyZ3VtZW50cyk7XG5cdFx0fSwgX3RoaXMuaGFuZGxlU3VibWl0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIF90aGlzNztcblxuXHRcdFx0cmV0dXJuIChfdGhpczcgPSBfdGhpcykuX19oYW5kbGVTdWJtaXRfX1JFQUNUX0hPVF9MT0FERVJfXy5hcHBseShfdGhpczcsIGFyZ3VtZW50cyk7XG5cdFx0fSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG5cdH1cblx0LyoqXG4gICogQXMgYW4gYWx0ZXJuYXRpdmUgdG8gYE11aVRoZW1lUHJvdmlkZXJgIHlvdSBjYW4gYWRkIGEgdGhlbWUgZGlyZWN0bHkgaW50byBjb250ZXh0LlxuICAqIFNlZSB0aGUgW01hdGVyaWFsLVVJIHRoZW1lc10oaHR0cDovL3d3dy5tYXRlcmlhbC11aS5jb20vIy9jdXN0b21pemF0aW9uL3RoZW1lcykgZG9jcyBmb3IgZGV0YWlscy5cbiAgKlxuICAqIGNoaWxkQ29udGV4dFR5cGVzOiB7XG4gICogICBtdWlUaGVtZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgKiB9LFxuICAqIGdldENoaWxkQ29udGV4dCgpe1xuICAqICAgcmV0dXJuIHtcbiAgKiAgICAgbXVpVGhlbWU6IGdldE11aVRoZW1lKCksXG4gICogICB9XG4gICogfSxcbiAgKi9cblxuXHRGb3JtLnByb3RvdHlwZS5fX2VuYWJsZUJ1dHRvbl9fUkVBQ1RfSE9UX0xPQURFUl9fID0gZnVuY3Rpb24gX19lbmFibGVCdXR0b25fX1JFQUNUX0hPVF9MT0FERVJfXygpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGNhblN1Ym1pdDogdHJ1ZVxuXHRcdH0pO1xuXHR9O1xuXG5cdEZvcm0ucHJvdG90eXBlLl9fZGlzYWJsZUJ1dHRvbl9fUkVBQ1RfSE9UX0xPQURFUl9fID0gZnVuY3Rpb24gX19kaXNhYmxlQnV0dG9uX19SRUFDVF9IT1RfTE9BREVSX18oKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjYW5TdWJtaXQ6IGZhbHNlXG5cdFx0fSk7XG5cdH07XG5cblx0Rm9ybS5wcm90b3R5cGUuX19zdWJtaXRGb3JtX19SRUFDVF9IT1RfTE9BREVSX18gPSBmdW5jdGlvbiBfX3N1Ym1pdEZvcm1fX1JFQUNUX0hPVF9MT0FERVJfXyhkYXRhKSB7XG5cdFx0YWxlcnQoSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgNCkpO1xuXHR9O1xuXG5cdEZvcm0ucHJvdG90eXBlLl9fbm90aWZ5Rm9ybUVycm9yX19SRUFDVF9IT1RfTE9BREVSX18gPSBmdW5jdGlvbiBfX25vdGlmeUZvcm1FcnJvcl9fUkVBQ1RfSE9UX0xPQURFUl9fKGRhdGEpIHtcblx0XHRjb25zb2xlLmVycm9yKCdGb3JtIGVycm9yOicsIGRhdGEpO1xuXHR9O1xuXG5cdEZvcm0ucHJvdG90eXBlLl9faGFuZGxlQ2hhbmdlX19SRUFDVF9IT1RfTE9BREVSX18gPSBmdW5jdGlvbiBfX2hhbmRsZUNoYW5nZV9fUkVBQ1RfSE9UX0xPQURFUl9fKGV2ZW50KSB7XG5cdFx0dmFyIGZvcm1EYXRhID0gdGhpcy5zdGF0ZS5mb3JtRGF0YTtcblxuXHRcdGZvcm1EYXRhW2V2ZW50LnRhcmdldC5uYW1lXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHR0aGlzLnNldFN0YXRlKHsgZm9ybURhdGE6IGZvcm1EYXRhIH0pO1xuXHR9O1xuXG5cdEZvcm0ucHJvdG90eXBlLl9faGFuZGxlU3VibWl0X19SRUFDVF9IT1RfTE9BREVSX18gPSBmdW5jdGlvbiBfX2hhbmRsZVN1Ym1pdF9fUkVBQ1RfSE9UX0xPQURFUl9fKCkge1xuXHRcdHZhciBfdGhpczggPSB0aGlzO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGNhblN1Ym1pdDogdHJ1ZSB9LCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIF90aGlzOC5zZXRTdGF0ZSh7IGNhblN1Ym1pdDogZmFsc2UgfSk7XG5cdFx0XHR9LCA1MDAwKTtcblx0XHR9KTtcblx0fTtcblxuXHRGb3JtLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRWYWxpZGF0b3JGb3JtLFxuXHRcdFx0eyBvblN1Ym1pdDogdGhpcy5oYW5kbGVTdWJtaXQgfSxcblx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdoMicsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdCdDdXN0b20gcnVsZXMnXG5cdFx0XHQpLFxuXHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChUZXh0VmFsaWRhdG9yLCB7XG5cdFx0XHRcdGZsb2F0aW5nTGFiZWxUZXh0OiAnTmFtZScsXG5cdFx0XHRcdG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUNoYW5nZSxcblx0XHRcdFx0bmFtZTogJ3Bhc3N3b3JkJyxcblx0XHRcdFx0dHlwZTogJ3Bhc3N3b3JkJyxcblx0XHRcdFx0dmFsaWRhdG9yczogWydyZXF1aXJlZCddLFxuXHRcdFx0XHRlcnJvck1lc3NhZ2VzOiBbJ3RoaXMgZmllbGQgaXMgcmVxdWlyZWQnXSxcblx0XHRcdFx0dmFsdWU6IHRoaXMuc3RhdGUuZm9ybURhdGEubmFtZVxuXHRcdFx0fSksXG5cdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KCdicicsIG51bGwpLFxuXHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChSYWlzZWRCdXR0b24sIHtcblx0XHRcdFx0dHlwZTogJ3N1Ym1pdCcsXG5cdFx0XHRcdGxhYmVsOiB0aGlzLnN0YXRlLmNhblN1Ym1pdCAmJiAnWW91ciBmb3JtIGlzIHN1Ym1pdHRlZCEnIHx8ICF0aGlzLnN0YXRlLmNhblN1Ym1pdCAmJiAnU3VibWl0Jyxcblx0XHRcdFx0ZGlzYWJsZWQ6IHRoaXMuc3RhdGUuY2FuU3VibWl0XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH07XG5cblx0cmV0dXJuIEZvcm07XG59KENvbXBvbmVudCk7XG5cbnZhciBfZGVmYXVsdCA9IEZvcm07XG5cblxuZXhwb3J0IGRlZmF1bHQgX2RlZmF1bHQ7XG4vKlxuRm9ybXN5LmFkZFZhbGlkYXRpb25SdWxlKCdpc0FkZHJlc3MnLCAodmFsdWVzLCB2YWx1ZSkgPT4ge1xuXHRyZXR1cm4gdmFsaWRhdGlvblJ1bGVzLm1hdGNoUmVnZXhwKFxuXHRcdHZhbHVlcyxcblx0XHR2YWx1ZSxcblx0XHQvXFxkKyhcXHMrXFx3Kyl7MSx9XFxzKyg/OnN0KD86XFwufHJlZXQpP3xkcig/OlxcLnxpdmUpP3xwbCg/OlxcLnxhY2UpP3xhdmUoPzpcXC58bnVlKT98cmR8cm9hZHxsYW5lfGRyaXZlfHdheXxjb3VydHxwbGF6YXxzcXVhcmV8cnVufHBhcmt3YXl8cG9pbnR8cGlrZXxzcXVhcmV8ZHJpdmV3YXl8dHJhY2V8cGFya3x0ZXJyYWNlfGJsdmQpL1xuXHQpO1xufSk7XG5Gb3Jtc3kuYWRkVmFsaWRhdGlvblJ1bGUoJ2lzWmlwY29kZScsICh2YWx1ZXMsIHZhbHVlKSA9PiB7XG5cdHJldHVybiB2YWxpZGF0aW9uUnVsZXMubWF0Y2hSZWdleHAodmFsdWVzLCB2YWx1ZSwgL15bMC05XXs1fSg/Oi1bMC05XXs0fSk/JC8pO1xufSk7XG5Gb3Jtc3kuYWRkVmFsaWRhdGlvblJ1bGUoJ2lzUGhvbmVOdW1iZXInLCAodmFsdWVzLCB2YWx1ZSkgPT4ge1xuXHRyZXR1cm4gdmFsaWRhdGlvblJ1bGVzLm1hdGNoUmVnZXhwKFxuXHRcdHZhbHVlcyxcblx0XHR2YWx1ZSxcblx0XHQvXig/Oig/OlxcKD8oPzowMHxcXCspKFsxLTRdXFxkXFxkfFsxLTldXFxkPylcXCk/KT9bXFwtXFwuXFwgXFxcXFxcL10/KT8oKD86XFwoP1xcZHsxLH1cXCk/W1xcLVxcLlxcIFxcXFxcXC9dPyl7MCx9KSg/OltcXC1cXC5cXCBcXFxcXFwvXT8oPzojfGV4dFxcLj98ZXh0ZW5zaW9ufHgpW1xcLVxcLlxcIFxcXFxcXC9dPyhcXGQrKSk/JC9pXG5cdCk7XG59KTtcblxuXG5sZXQgeyBwYXBlclN0eWxlLCBzd2l0Y2hTdHlsZSwgc3VibWl0U3R5bGUgfSA9IHN0eWxlcztcblx0XHRsZXQgeyB3b3Jkc0Vycm9yLCBudW1lcmljRXJyb3IsIGVtYWlsRXJyb3IsIGFkZHJlc3NFcnJvciwgemlwY29kZUVycm9yLCBwaG9uZW51bWJlckVycm9yIH0gPSBlcnJvck1lc3NhZ2VzO1xuXG48UGFwZXIgc3R5bGU9e3BhcGVyU3R5bGV9PlxuXHRcdFx0XHQ8Rm9ybXN5LkZvcm1cblx0XHRcdFx0XHRvblZhbGlkPXt0aGlzLmVuYWJsZUJ1dHRvbn1cblx0XHRcdFx0XHRvbkludmFsaWQ9e3RoaXMuZGlzYWJsZUJ1dHRvbn1cblx0XHRcdFx0XHRvblZhbGlkU3VibWl0PXt0aGlzLnN1Ym1pdEZvcm19XG5cdFx0XHRcdFx0b25JbnZhbGlkU3VibWl0PXt0aGlzLm5vdGlmeUZvcm1FcnJvcn1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxGb3Jtc3lUZXh0XG5cdFx0XHRcdFx0XHRuYW1lPVwibmFtZVwiXG5cdFx0XHRcdFx0XHR2YWxpZGF0aW9ucz1cImlzV29yZHNcIlxuXHRcdFx0XHRcdFx0dmFsaWRhdGlvbkVycm9yPXt3b3Jkc0Vycm9yfVxuXHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdGhpbnRUZXh0PVwiV2hhdCBpcyB5b3VyIEd1cmR3YXJhJ3MgbmFtZT9cIlxuXHRcdFx0XHRcdFx0ZmxvYXRpbmdMYWJlbFRleHQ9XCJHdXJkd2FyYSBuYW1lXCJcblx0XHRcdFx0XHQvPlxuXG5cdFx0XHRcdFx0PEZvcm1zeVRleHRcblx0XHRcdFx0XHRcdG5hbWU9XCJhZGRyZXNzTGluZTFcIlxuXHRcdFx0XHRcdFx0dmFsaWRhdGlvbnM9XCJpc0FkZHJlc3NcIlxuXHRcdFx0XHRcdFx0dmFsaWRhdGlvbkVycm9yPXthZGRyZXNzRXJyb3J9XG5cdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0aGludFRleHQ9XCJXaGF0IGlzIHlvdXIgR3VyZHdhcmEncyBhZGRyZXNzP1wiXG5cdFx0XHRcdFx0XHRmbG9hdGluZ0xhYmVsVGV4dD1cIkFkZHJlc3MgTGluZSAxXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxGb3Jtc3lUZXh0XG5cdFx0XHRcdFx0XHRuYW1lPVwiYWRkcmVzc0xpbmUyXCJcblx0XHRcdFx0XHRcdHZhbGlkYXRpb25zPVwiaXNBZGRyZXNzXCJcblx0XHRcdFx0XHRcdHZhbGlkYXRpb25FcnJvcj17YWRkcmVzc0Vycm9yfVxuXHRcdFx0XHRcdFx0aGludFRleHQ9XCJXaGF0IGlzIHlvdXIgR3VyZHdhcmEncyBhZGRyZXNzP1wiXG5cdFx0XHRcdFx0XHRmbG9hdGluZ0xhYmVsVGV4dD1cIkFkZHJlc3MgTGluZSAyIChpZiBuZWVkZWQpXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxGb3Jtc3lUZXh0XG5cdFx0XHRcdFx0XHRuYW1lPVwiY2l0eVwiXG5cdFx0XHRcdFx0XHR2YWxpZGF0aW9ucz1cImlzV29yZHNcIlxuXHRcdFx0XHRcdFx0dmFsaWRhdGlvbkVycm9yPXt3b3Jkc0Vycm9yfVxuXHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdGhpbnRUZXh0PVwiV2hhdCBpcyB5b3VyIEd1cmR3YXJhJ3MgY2l0eT9cIlxuXHRcdFx0XHRcdFx0ZmxvYXRpbmdMYWJlbFRleHQ9XCJDaXR5XCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxGb3Jtc3lUZXh0XG5cdFx0XHRcdFx0XHRuYW1lPVwic3RhdGVcIlxuXHRcdFx0XHRcdFx0dmFsaWRhdGlvbnM9XCJpc1dvcmRzXCJcblx0XHRcdFx0XHRcdHZhbGlkYXRpb25FcnJvcj17d29yZHNFcnJvcn1cblx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRoaW50VGV4dD1cIldoYXQgaXMgeW91ciBHdXJkd2FyYSdzIHN0YXRlP1wiXG5cdFx0XHRcdFx0XHRmbG9hdGluZ0xhYmVsVGV4dD1cIlN0YXRlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxGb3Jtc3lTZWxlY3QgbmFtZT1cImNvdW50cnlcIiByZXF1aXJlZCBmbG9hdGluZ0xhYmVsVGV4dD1cIkNvdW50cnlcIj5cblx0XHRcdFx0XHRcdDxNZW51SXRlbSB2YWx1ZT17J1VuaXRlZCBTdGF0ZXMnfSBwcmltYXJ5VGV4dD1cIlVuaXRlZCBTdGF0ZXNcIiAvPlxuXHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPXsnQ2FuYWRhJ30gcHJpbWFyeVRleHQ9XCJDYW5hZGFcIiAvPlxuXHRcdFx0XHRcdFx0PE1lbnVJdGVtIHZhbHVlPXsnVW5pdGVkIEtpbmdkb20nfSBwcmltYXJ5VGV4dD1cIlVuaXRlZCBLaW5nZG9tXCIgLz5cblx0XHRcdFx0XHQ8L0Zvcm1zeVNlbGVjdD5cblx0XHRcdFx0XHQ8Rm9ybXN5VGV4dFxuXHRcdFx0XHRcdFx0bmFtZT1cInppcGNvZGVcIlxuXHRcdFx0XHRcdFx0dmFsaWRhdGlvbnM9XCJpc1ppcGNvZGVcIlxuXHRcdFx0XHRcdFx0dmFsaWRhdGlvbkVycm9yPXt6aXBjb2RlRXJyb3J9XG5cdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0aGludFRleHQ9XCJXaGF0IGlzIHlvdXIgR3VyZHdhcmEncyB6aXBjb2RlP1wiXG5cdFx0XHRcdFx0XHRmbG9hdGluZ0xhYmVsVGV4dD1cIlppcGNvZGVcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PEZvcm1zeVRleHRcblx0XHRcdFx0XHRcdG5hbWU9XCJwaG9uZU51bWJlclwiXG5cdFx0XHRcdFx0XHR2YWxpZGF0aW9ucz1cImlzUGhvbmVOdW1iZXJcIlxuXHRcdFx0XHRcdFx0dmFsaWRhdGlvbkVycm9yPXtwaG9uZW51bWJlckVycm9yfVxuXHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdGhpbnRUZXh0PVwiV2hhdCBpcyB5b3VyIEd1cmR3YXJhJ3MgbnVtYmVyP1wiXG5cdFx0XHRcdFx0XHRmbG9hdGluZ0xhYmVsVGV4dD1cIlBob25lIG51bWJlclwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8Rm9ybXN5VGV4dFxuXHRcdFx0XHRcdFx0bmFtZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdHZhbGlkYXRpb25zPVwiaXNFbWFpbFwiXG5cdFx0XHRcdFx0XHR2YWxpZGF0aW9uRXJyb3I9e2VtYWlsRXJyb3J9XG5cdFx0XHRcdFx0XHRoaW50VGV4dD1cIldoYXQgaXMgeW91ciBHdXJkd2FyYSdzIGVtYWlsP1wiXG5cdFx0XHRcdFx0XHRmbG9hdGluZ0xhYmVsVGV4dD1cIkVtYWlsXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxSYWlzZWRCdXR0b24gc3R5bGU9e3N1Ym1pdFN0eWxlfSB0eXBlPVwic3VibWl0XCIgbGFiZWw9XCJTdWJtaXRcIiBkaXNhYmxlZD17IXRoaXMuc3RhdGUuY2FuU3VibWl0fSAvPlxuXHRcdFx0XHQ8L0Zvcm1zeS5Gb3JtPlxuXHRcdFx0PC9QYXBlcj5cblxuXG5cblxuXG5cblxuXG5cbiovXG5cbi8vIDxwcmU+XG4vLyBcdDxjb2RlPntKU09OLnN0cmluZ2lmeShwcmVsb2FkLCBudWxsLCA0KX08L2NvZGU+XG4vLyA8L3ByZT5cblxuO1xuXG52YXIgX3RlbXAyID0gZnVuY3Rpb24gKCkge1xuXHRpZiAodHlwZW9mIF9fUkVBQ1RfSE9UX0xPQURFUl9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdF9fUkVBQ1RfSE9UX0xPQURFUl9fLnJlZ2lzdGVyKHN0eWxlcywgJ3N0eWxlcycsICcvVXNlcnMvamFja2lldGhpbmQvZ2RiLWZyb250ZW5kL2NyZWF0ZS1yZWFjdC1hcHAtd2l0aC1mbG93L2pzL0Zvcm0uanN4Jyk7XG5cblx0X19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIoZXJyb3JNZXNzYWdlcywgJ2Vycm9yTWVzc2FnZXMnLCAnL1VzZXJzL2phY2tpZXRoaW5kL2dkYi1mcm9udGVuZC9jcmVhdGUtcmVhY3QtYXBwLXdpdGgtZmxvdy9qcy9Gb3JtLmpzeCcpO1xuXG5cdF9fUkVBQ1RfSE9UX0xPQURFUl9fLnJlZ2lzdGVyKEZvcm0sICdGb3JtJywgJy9Vc2Vycy9qYWNraWV0aGluZC9nZGItZnJvbnRlbmQvY3JlYXRlLXJlYWN0LWFwcC13aXRoLWZsb3cvanMvRm9ybS5qc3gnKTtcblxuXHRfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihfZGVmYXVsdCwgJ2RlZmF1bHQnLCAnL1VzZXJzL2phY2tpZXRoaW5kL2dkYi1mcm9udGVuZC9jcmVhdGUtcmVhY3QtYXBwLXdpdGgtZmxvdy9qcy9Gb3JtLmpzeCcpO1xufSgpO1xuXG47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9Gb3JtLmpzeFxuLy8gbW9kdWxlIGlkID0gLi9qcy9Gb3JtLmpzeFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})