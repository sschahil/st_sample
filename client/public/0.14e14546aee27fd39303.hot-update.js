webpackHotUpdate(0,{

/***/ "./client/components/Form.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(\"./node_modules/react/react.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_formsy_react_2__ = __webpack_require__(\"./node_modules/formsy-react-2/lib/main.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_formsy_react_2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_formsy_react_2__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui__ = __webpack_require__(\"./node_modules/material-ui/index.es.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_formsy_mui__ = __webpack_require__(\"./node_modules/formsy-mui/index.es.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_formsy_mui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_formsy_mui__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_formsy_react_2_lib_validationRules__ = __webpack_require__(\"./node_modules/formsy-react-2/lib/validationRules.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_formsy_react_2_lib_validationRules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_formsy_react_2_lib_validationRules__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\nvar styles = {\n\tpaperStyle: {\n\t\twidth: 300,\n\t\tmargin: 'auto',\n\t\tpadding: 20\n\t},\n\tswitchStyle: {\n\t\tmarginBottom: 16\n\t},\n\tsubmitStyle: {\n\t\tmarginTop: 32\n\t}\n};\nvar countries = ['United States', 'Canada', 'United Kingdom', 'Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and/or Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil', 'British lndian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Cook Islands', 'Costa Rica', 'Croatia (Hrvatska)', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecudaor', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'France, Metropolitan', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and Mc Donald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran (Islamic Republic of)', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', \"Korea, Democratic People's Republic of\", 'Korea, Republic of', 'Kuwait', 'Kyrgyzstan', \"Lao People's Democratic Republic\", 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libyan Arab Jamahiriya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia, Federated States of', 'Moldova, Republic of', 'Monaco', 'Mongolia', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfork Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia South Sandwich Islands', 'Spain', 'Sri Lanka', 'St. Helena', 'St. Pierre and Miquelon', 'Sudan', 'Suriname', 'Svalbarn and Jan Mayen Islands', 'Swaziland', 'Sweden', 'Switzerland', 'Syrian Arab Republic', 'Taiwan', 'Tajikistan', 'Tanzania, United Republic of', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'USA', 'United States minor outlying islands', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City State', 'Venezuela', 'Vietnam', 'Virigan Islands (British)', 'Virgin Islands (U.S.)', 'Wallis and Futuna Islands', 'Western Sahara', 'Yemen', 'Yugoslavia', 'Zaire', 'Zambia', 'Zimbabwe'];\nvar errorMessages = {\n\twordsError: 'Please only use letters',\n\tnumericError: 'Please provide a number',\n\temailError: 'Please provide a valid email',\n\taddressError: 'Please provide a valid address',\n\tzipcodeError: 'Please provide a valid zipcode',\n\tphonenumberError: 'Please provide a valid phone number',\n\tcountryError: 'Please provide a valid country'\n};\n\n__WEBPACK_IMPORTED_MODULE_1_formsy_react_2___default.a.addValidationRule('isAddress', function (values, value) {\n\treturn __WEBPACK_IMPORTED_MODULE_4_formsy_react_2_lib_validationRules___default.a.matchRegexp(values, value, /\\d+(\\s+\\w+){1,}\\s+(?:st(?:\\.|reet)?|dr(?:\\.|ive)?|pl(?:\\.|ace)?|ave(?:\\.|nue)?|rd|road|lane|drive|way|court|plaza|square|run|parkway|point|pike|square|driveway|trace|park|terrace|blvd)/);\n});\n__WEBPACK_IMPORTED_MODULE_1_formsy_react_2___default.a.addValidationRule('isZipcode', function (values, value) {\n\treturn __WEBPACK_IMPORTED_MODULE_4_formsy_react_2_lib_validationRules___default.a.matchRegexp(values, value, /^[0-9]{5}(?:-[0-9]{4})?$/);\n});\n__WEBPACK_IMPORTED_MODULE_1_formsy_react_2___default.a.addValidationRule('isPhoneNumber', function (values, value) {\n\treturn __WEBPACK_IMPORTED_MODULE_4_formsy_react_2_lib_validationRules___default.a.matchRegexp(values, value, /^(?:(?:\\(?(?:00|\\+)([1-4]\\d\\d|[1-9]\\d?)\\)?)?[\\-\\.\\ \\\\\\/]?)?((?:\\(?\\d{1,}\\)?[\\-\\.\\ \\\\\\/]?){0,})(?:[\\-\\.\\ \\\\\\/]?(?:#|ext\\.?|extension|x)[\\-\\.\\ \\\\\\/]?(\\d+))?$/i);\n});\n__WEBPACK_IMPORTED_MODULE_1_formsy_react_2___default.a.addValidationRule('isCountry', function (values, value) {\n\treturn __WEBPACK_IMPORTED_MODULE_4_formsy_react_2_lib_validationRules___default.a.matchRegexp(values, value, /^[a-z\\u00C0-\\u02AB'´`]+\\.?\\s([a-z\\u00C0-\\u02AB'´`]+\\.?\\s?)+$/i);\n});\n\nvar Form = function (_Component) {\n\t_inherits(Form, _Component);\n\n\tfunction Form() {\n\t\tvar _temp, _this, _ret;\n\n\t\t_classCallCheck(this, Form);\n\n\t\tfor (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n\t\t\targs[_key] = arguments[_key];\n\t\t}\n\n\t\treturn _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {\n\t\t\tformData: {\n\t\t\t\tname: '',\n\t\t\t\taddress: '',\n\t\t\t\tcity: '',\n\t\t\t\tstate: '',\n\t\t\t\tzipcode: '',\n\t\t\t\tcountry: '',\n\t\t\t\tphoneNumber: '',\n\t\t\t\temail: ''\n\t\t\t},\n\t\t\tcanSubmit: false\n\t\t}, _this.enableButton = function () {\n\t\t\tvar _this2;\n\n\t\t\treturn (_this2 = _this).__enableButton__REACT_HOT_LOADER__.apply(_this2, arguments);\n\t\t}, _this.disableButton = function () {\n\t\t\tvar _this3;\n\n\t\t\treturn (_this3 = _this).__disableButton__REACT_HOT_LOADER__.apply(_this3, arguments);\n\t\t}, _this.submitForm = function () {\n\t\t\tvar _this4;\n\n\t\t\treturn (_this4 = _this).__submitForm__REACT_HOT_LOADER__.apply(_this4, arguments);\n\t\t}, _this.notifyFormError = function () {\n\t\t\tvar _this5;\n\n\t\t\treturn (_this5 = _this).__notifyFormError__REACT_HOT_LOADER__.apply(_this5, arguments);\n\t\t}, _temp), _possibleConstructorReturn(_this, _ret);\n\t}\n\t/**\n  * As an alternative to `MuiThemeProvider` you can add a theme directly into context.\n  * See the [Material-UI themes](http://www.material-ui.com/#/customization/themes) docs for details.\n  *\n  * childContextTypes: {\n  *   muiTheme: PropTypes.object,\n  * },\n  * getChildContext(){\n  *   return {\n  *     muiTheme: getMuiTheme(),\n  *   }\n  * },\n  */\n\n\tForm.prototype.__enableButton__REACT_HOT_LOADER__ = function __enableButton__REACT_HOT_LOADER__() {\n\t\tthis.setState({\n\t\t\tcanSubmit: true\n\t\t});\n\t};\n\n\tForm.prototype.__disableButton__REACT_HOT_LOADER__ = function __disableButton__REACT_HOT_LOADER__() {\n\t\tthis.setState({\n\t\t\tcanSubmit: false\n\t\t});\n\t};\n\n\tForm.prototype.__submitForm__REACT_HOT_LOADER__ = function __submitForm__REACT_HOT_LOADER__(data) {\n\t\tconsole.log('user submitted data');\n\t\talert(JSON.stringify(data, null, 4));\n\t};\n\n\tForm.prototype.__notifyFormError__REACT_HOT_LOADER__ = function __notifyFormError__REACT_HOT_LOADER__(data) {\n\t\tconsole.error('Form error:', data);\n\t};\n\n\tForm.prototype.render = function render() {\n\t\tvar paperStyle = styles.paperStyle,\n\t\t    switchStyle = styles.switchStyle,\n\t\t    submitStyle = styles.submitStyle;\n\t\tvar wordsError = errorMessages.wordsError,\n\t\t    numericError = errorMessages.numericError,\n\t\t    emailError = errorMessages.emailError,\n\t\t    addressError = errorMessages.addressError,\n\t\t    zipcodeError = errorMessages.zipcodeError,\n\t\t    phonenumberError = errorMessages.phonenumberError;\n\n\n\t\treturn __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t__WEBPACK_IMPORTED_MODULE_2_material_ui__[\"a\" /* Paper */],\n\t\t\t{ style: paperStyle },\n\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_1_formsy_react_2___default.a.Form,\n\t\t\t\t{\n\t\t\t\t\tonValid: this.enableButton,\n\t\t\t\t\tonInvalid: this.disableButton,\n\t\t\t\t\tonValidSubmit: this.submitForm,\n\t\t\t\t\tonInvalidSubmit: this.notifyFormError\n\t\t\t\t},\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_formsy_mui__[\"FormsyText\"], {\n\t\t\t\t\tname: 'name',\n\t\t\t\t\tvalidations: 'isWords',\n\t\t\t\t\tvalidationError: wordsError,\n\t\t\t\t\trequired: true,\n\t\t\t\t\thintText: 'What is your Gurdwara\\'s name?',\n\t\t\t\t\tfloatingLabelText: 'Gurdwara name'\n\t\t\t\t}),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_formsy_mui__[\"FormsyText\"], {\n\t\t\t\t\tname: 'addressLine1',\n\t\t\t\t\tvalidations: 'isAddress',\n\t\t\t\t\tvalidationError: addressError,\n\t\t\t\t\trequired: true,\n\t\t\t\t\thintText: 'What is your Gurdwara\\'s address?',\n\t\t\t\t\tfloatingLabelText: 'Address Line 1'\n\t\t\t\t}),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_formsy_mui__[\"FormsyText\"], {\n\t\t\t\t\tname: 'addressLine2',\n\t\t\t\t\tvalidations: 'isAddress',\n\t\t\t\t\tvalidationError: addressError,\n\t\t\t\t\thintText: 'What is your Gurdwara\\'s address?',\n\t\t\t\t\tfloatingLabelText: 'Address Line 2 (if needed)'\n\t\t\t\t}),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_formsy_mui__[\"FormsyText\"], {\n\t\t\t\t\tname: 'city',\n\t\t\t\t\tvalidations: 'isWords',\n\t\t\t\t\tvalidationError: wordsError,\n\t\t\t\t\trequired: true,\n\t\t\t\t\thintText: 'What is your Gurdwara\\'s city?',\n\t\t\t\t\tfloatingLabelText: 'City'\n\t\t\t\t}),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_formsy_mui__[\"FormsyText\"], {\n\t\t\t\t\tname: 'state',\n\t\t\t\t\tvalidations: 'isWords',\n\t\t\t\t\tvalidationError: wordsError,\n\t\t\t\t\trequired: true,\n\t\t\t\t\thintText: 'What is your Gurdwara\\'s state?',\n\t\t\t\t\tfloatingLabelText: 'State'\n\t\t\t\t}),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__[\"b\" /* AutoComplete */], {\n\t\t\t\t\tfloatingLabelText: 'Country',\n\t\t\t\t\tfilter: __WEBPACK_IMPORTED_MODULE_2_material_ui__[\"b\" /* AutoComplete */].caseInsensitiveFilter,\n\t\t\t\t\tdataSource: countries,\n\t\t\t\t\thintText: 'What is your Gurdwara\\'s country?'\n\t\t\t\t}),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_formsy_mui__[\"FormsyText\"], {\n\t\t\t\t\tname: 'zipcode',\n\t\t\t\t\tvalidations: 'isZipcode',\n\t\t\t\t\tvalidationError: zipcodeError,\n\t\t\t\t\trequired: true,\n\t\t\t\t\thintText: 'What is your Gurdwara\\'s zipcode?',\n\t\t\t\t\tfloatingLabelText: 'Zipcode'\n\t\t\t\t}),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_formsy_mui__[\"FormsyText\"], {\n\t\t\t\t\tname: 'phoneNumber',\n\t\t\t\t\tvalidations: 'isPhoneNumber',\n\t\t\t\t\tvalidationError: phonenumberError,\n\t\t\t\t\trequired: true,\n\t\t\t\t\thintText: 'What is your Gurdwara\\'s number?',\n\t\t\t\t\tfloatingLabelText: 'Phone number'\n\t\t\t\t}),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_formsy_mui__[\"FormsyText\"], {\n\t\t\t\t\tname: 'email',\n\t\t\t\t\tvalidations: 'isEmail',\n\t\t\t\t\tvalidationError: emailError,\n\t\t\t\t\thintText: 'What is your Gurdwara\\'s email?',\n\t\t\t\t\tfloatingLabelText: 'Email'\n\t\t\t\t}),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__[\"c\" /* RaisedButton */], { style: submitStyle, type: 'submit', label: 'Submit', disabled: !this.state.canSubmit })\n\t\t\t)\n\t\t);\n\t};\n\n\treturn Form;\n}(__WEBPACK_IMPORTED_MODULE_0_react__[\"Component\"]);\n\nvar _default = Form;\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (_default);\n/*\n\n\tprops: {\n\t\tcountries: Array<Country>\n\t};\n\n\t\t\t\t\t\t<FormsySelect name=\"country\" required floatingLabelText=\"Country\">\n\t\t\t\t\t\t{this.props.countries.map((country, index) => (\n\t\t\t\t\t\t\t<MenuItem value={country.value} primaryText={country.value} />\n\t\t\t\t\t\t))}\n\t\t\t\t\t</FormsySelect>\n*/\n\n// <pre>\n// \t<code>{JSON.stringify(preload, null, 4)}</code>\n// </pre>\n\n;\n\nvar _temp2 = function () {\n\tif (typeof __REACT_HOT_LOADER__ === 'undefined') {\n\t\treturn;\n\t}\n\n\t__REACT_HOT_LOADER__.register(styles, 'styles', '/Users/jackiethind/gdb-frontend/create-react-app-with-flow/client/components/Form.jsx');\n\n\t__REACT_HOT_LOADER__.register(countries, 'countries', '/Users/jackiethind/gdb-frontend/create-react-app-with-flow/client/components/Form.jsx');\n\n\t__REACT_HOT_LOADER__.register(errorMessages, 'errorMessages', '/Users/jackiethind/gdb-frontend/create-react-app-with-flow/client/components/Form.jsx');\n\n\t__REACT_HOT_LOADER__.register(Form, 'Form', '/Users/jackiethind/gdb-frontend/create-react-app-with-flow/client/components/Form.jsx');\n\n\t__REACT_HOT_LOADER__.register(_default, 'default', '/Users/jackiethind/gdb-frontend/create-react-app-with-flow/client/components/Form.jsx');\n}();\n\n;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50cy9Gb3JtLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0Zvcm0uanN4PzU2MjciXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm1zeSBmcm9tICdmb3Jtc3ktcmVhY3QtMic7XG5pbXBvcnQgeyBQYXBlciwgUmFpc2VkQnV0dG9uLCBNZW51SXRlbSwgQXV0b0NvbXBsZXRlIH0gZnJvbSAnbWF0ZXJpYWwtdWknO1xuaW1wb3J0IHsgRm9ybXN5U2VsZWN0LCBGb3Jtc3lUZXh0LCBGb3Jtc3lBdXRvQ29tcGxldGUgfSBmcm9tICdmb3Jtc3ktbXVpJztcbmltcG9ydCB2YWxpZGF0aW9uUnVsZXMgZnJvbSAnZm9ybXN5LXJlYWN0LTIvbGliL3ZhbGlkYXRpb25SdWxlcyc7XG5cbnZhciBzdHlsZXMgPSB7XG5cdHBhcGVyU3R5bGU6IHtcblx0XHR3aWR0aDogMzAwLFxuXHRcdG1hcmdpbjogJ2F1dG8nLFxuXHRcdHBhZGRpbmc6IDIwXG5cdH0sXG5cdHN3aXRjaFN0eWxlOiB7XG5cdFx0bWFyZ2luQm90dG9tOiAxNlxuXHR9LFxuXHRzdWJtaXRTdHlsZToge1xuXHRcdG1hcmdpblRvcDogMzJcblx0fVxufTtcbnZhciBjb3VudHJpZXMgPSBbJ1VuaXRlZCBTdGF0ZXMnLCAnQ2FuYWRhJywgJ1VuaXRlZCBLaW5nZG9tJywgJ0FmZ2hhbmlzdGFuJywgJ0FsYmFuaWEnLCAnQWxnZXJpYScsICdBbWVyaWNhbiBTYW1vYScsICdBbmRvcnJhJywgJ0FuZ29sYScsICdBbmd1aWxsYScsICdBbnRhcmN0aWNhJywgJ0FudGlndWEgYW5kL29yIEJhcmJ1ZGEnLCAnQXJnZW50aW5hJywgJ0FybWVuaWEnLCAnQXJ1YmEnLCAnQXVzdHJhbGlhJywgJ0F1c3RyaWEnLCAnQXplcmJhaWphbicsICdCYWhhbWFzJywgJ0JhaHJhaW4nLCAnQmFuZ2xhZGVzaCcsICdCYXJiYWRvcycsICdCZWxhcnVzJywgJ0JlbGdpdW0nLCAnQmVsaXplJywgJ0JlbmluJywgJ0Jlcm11ZGEnLCAnQmh1dGFuJywgJ0JvbGl2aWEnLCAnQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYScsICdCb3Rzd2FuYScsICdCb3V2ZXQgSXNsYW5kJywgJ0JyYXppbCcsICdCcml0aXNoIGxuZGlhbiBPY2VhbiBUZXJyaXRvcnknLCAnQnJ1bmVpIERhcnVzc2FsYW0nLCAnQnVsZ2FyaWEnLCAnQnVya2luYSBGYXNvJywgJ0J1cnVuZGknLCAnQ2FtYm9kaWEnLCAnQ2FtZXJvb24nLCAnQ2FwZSBWZXJkZScsICdDYXltYW4gSXNsYW5kcycsICdDZW50cmFsIEFmcmljYW4gUmVwdWJsaWMnLCAnQ2hhZCcsICdDaGlsZScsICdDaGluYScsICdDaHJpc3RtYXMgSXNsYW5kJywgJ0NvY29zIChLZWVsaW5nKSBJc2xhbmRzJywgJ0NvbG9tYmlhJywgJ0NvbW9yb3MnLCAnQ29uZ28nLCAnQ29vayBJc2xhbmRzJywgJ0Nvc3RhIFJpY2EnLCAnQ3JvYXRpYSAoSHJ2YXRza2EpJywgJ0N1YmEnLCAnQ3lwcnVzJywgJ0N6ZWNoIFJlcHVibGljJywgJ0Rlbm1hcmsnLCAnRGppYm91dGknLCAnRG9taW5pY2EnLCAnRG9taW5pY2FuIFJlcHVibGljJywgJ0Vhc3QgVGltb3InLCAnRWN1ZGFvcicsICdFZ3lwdCcsICdFbCBTYWx2YWRvcicsICdFcXVhdG9yaWFsIEd1aW5lYScsICdFcml0cmVhJywgJ0VzdG9uaWEnLCAnRXRoaW9waWEnLCAnRmFsa2xhbmQgSXNsYW5kcyAoTWFsdmluYXMpJywgJ0Zhcm9lIElzbGFuZHMnLCAnRmlqaScsICdGaW5sYW5kJywgJ0ZyYW5jZScsICdGcmFuY2UsIE1ldHJvcG9saXRhbicsICdGcmVuY2ggR3VpYW5hJywgJ0ZyZW5jaCBQb2x5bmVzaWEnLCAnRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzJywgJ0dhYm9uJywgJ0dhbWJpYScsICdHZW9yZ2lhJywgJ0dlcm1hbnknLCAnR2hhbmEnLCAnR2licmFsdGFyJywgJ0dyZWVjZScsICdHcmVlbmxhbmQnLCAnR3JlbmFkYScsICdHdWFkZWxvdXBlJywgJ0d1YW0nLCAnR3VhdGVtYWxhJywgJ0d1aW5lYScsICdHdWluZWEtQmlzc2F1JywgJ0d1eWFuYScsICdIYWl0aScsICdIZWFyZCBhbmQgTWMgRG9uYWxkIElzbGFuZHMnLCAnSG9uZHVyYXMnLCAnSG9uZyBLb25nJywgJ0h1bmdhcnknLCAnSWNlbGFuZCcsICdJbmRpYScsICdJbmRvbmVzaWEnLCAnSXJhbiAoSXNsYW1pYyBSZXB1YmxpYyBvZiknLCAnSXJhcScsICdJcmVsYW5kJywgJ0lzcmFlbCcsICdJdGFseScsICdJdm9yeSBDb2FzdCcsICdKYW1haWNhJywgJ0phcGFuJywgJ0pvcmRhbicsICdLYXpha2hzdGFuJywgJ0tlbnlhJywgJ0tpcmliYXRpJywgXCJLb3JlYSwgRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZlwiLCAnS29yZWEsIFJlcHVibGljIG9mJywgJ0t1d2FpdCcsICdLeXJneXpzdGFuJywgXCJMYW8gUGVvcGxlJ3MgRGVtb2NyYXRpYyBSZXB1YmxpY1wiLCAnTGF0dmlhJywgJ0xlYmFub24nLCAnTGVzb3RobycsICdMaWJlcmlhJywgJ0xpYnlhbiBBcmFiIEphbWFoaXJpeWEnLCAnTGllY2h0ZW5zdGVpbicsICdMaXRodWFuaWEnLCAnTHV4ZW1ib3VyZycsICdNYWNhdScsICdNYWNlZG9uaWEnLCAnTWFkYWdhc2NhcicsICdNYWxhd2knLCAnTWFsYXlzaWEnLCAnTWFsZGl2ZXMnLCAnTWFsaScsICdNYWx0YScsICdNYXJzaGFsbCBJc2xhbmRzJywgJ01hcnRpbmlxdWUnLCAnTWF1cml0YW5pYScsICdNYXVyaXRpdXMnLCAnTWF5b3R0ZScsICdNZXhpY28nLCAnTWljcm9uZXNpYSwgRmVkZXJhdGVkIFN0YXRlcyBvZicsICdNb2xkb3ZhLCBSZXB1YmxpYyBvZicsICdNb25hY28nLCAnTW9uZ29saWEnLCAnTW9udHNlcnJhdCcsICdNb3JvY2NvJywgJ01vemFtYmlxdWUnLCAnTXlhbm1hcicsICdOYW1pYmlhJywgJ05hdXJ1JywgJ05lcGFsJywgJ05ldGhlcmxhbmRzJywgJ05ldGhlcmxhbmRzIEFudGlsbGVzJywgJ05ldyBDYWxlZG9uaWEnLCAnTmV3IFplYWxhbmQnLCAnTmljYXJhZ3VhJywgJ05pZ2VyJywgJ05pZ2VyaWEnLCAnTml1ZScsICdOb3Jmb3JrIElzbGFuZCcsICdOb3J0aGVybiBNYXJpYW5hIElzbGFuZHMnLCAnTm9yd2F5JywgJ09tYW4nLCAnUGFraXN0YW4nLCAnUGFsYXUnLCAnUGFuYW1hJywgJ1BhcHVhIE5ldyBHdWluZWEnLCAnUGFyYWd1YXknLCAnUGVydScsICdQaGlsaXBwaW5lcycsICdQaXRjYWlybicsICdQb2xhbmQnLCAnUG9ydHVnYWwnLCAnUHVlcnRvIFJpY28nLCAnUWF0YXInLCAnUmV1bmlvbicsICdSb21hbmlhJywgJ1J1c3NpYW4gRmVkZXJhdGlvbicsICdSd2FuZGEnLCAnU2FpbnQgS2l0dHMgYW5kIE5ldmlzJywgJ1NhaW50IEx1Y2lhJywgJ1NhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzJywgJ1NhbW9hJywgJ1NhbiBNYXJpbm8nLCAnU2FvIFRvbWUgYW5kIFByaW5jaXBlJywgJ1NhdWRpIEFyYWJpYScsICdTZW5lZ2FsJywgJ1NleWNoZWxsZXMnLCAnU2llcnJhIExlb25lJywgJ1NpbmdhcG9yZScsICdTbG92YWtpYScsICdTbG92ZW5pYScsICdTb2xvbW9uIElzbGFuZHMnLCAnU29tYWxpYScsICdTb3V0aCBBZnJpY2EnLCAnU291dGggR2VvcmdpYSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzJywgJ1NwYWluJywgJ1NyaSBMYW5rYScsICdTdC4gSGVsZW5hJywgJ1N0LiBQaWVycmUgYW5kIE1pcXVlbG9uJywgJ1N1ZGFuJywgJ1N1cmluYW1lJywgJ1N2YWxiYXJuIGFuZCBKYW4gTWF5ZW4gSXNsYW5kcycsICdTd2F6aWxhbmQnLCAnU3dlZGVuJywgJ1N3aXR6ZXJsYW5kJywgJ1N5cmlhbiBBcmFiIFJlcHVibGljJywgJ1RhaXdhbicsICdUYWppa2lzdGFuJywgJ1RhbnphbmlhLCBVbml0ZWQgUmVwdWJsaWMgb2YnLCAnVGhhaWxhbmQnLCAnVG9nbycsICdUb2tlbGF1JywgJ1RvbmdhJywgJ1RyaW5pZGFkIGFuZCBUb2JhZ28nLCAnVHVuaXNpYScsICdUdXJrZXknLCAnVHVya21lbmlzdGFuJywgJ1R1cmtzIGFuZCBDYWljb3MgSXNsYW5kcycsICdUdXZhbHUnLCAnVWdhbmRhJywgJ1VrcmFpbmUnLCAnVW5pdGVkIEFyYWIgRW1pcmF0ZXMnLCAnVVNBJywgJ1VuaXRlZCBTdGF0ZXMgbWlub3Igb3V0bHlpbmcgaXNsYW5kcycsICdVcnVndWF5JywgJ1V6YmVraXN0YW4nLCAnVmFudWF0dScsICdWYXRpY2FuIENpdHkgU3RhdGUnLCAnVmVuZXp1ZWxhJywgJ1ZpZXRuYW0nLCAnVmlyaWdhbiBJc2xhbmRzIChCcml0aXNoKScsICdWaXJnaW4gSXNsYW5kcyAoVS5TLiknLCAnV2FsbGlzIGFuZCBGdXR1bmEgSXNsYW5kcycsICdXZXN0ZXJuIFNhaGFyYScsICdZZW1lbicsICdZdWdvc2xhdmlhJywgJ1phaXJlJywgJ1phbWJpYScsICdaaW1iYWJ3ZSddO1xudmFyIGVycm9yTWVzc2FnZXMgPSB7XG5cdHdvcmRzRXJyb3I6ICdQbGVhc2Ugb25seSB1c2UgbGV0dGVycycsXG5cdG51bWVyaWNFcnJvcjogJ1BsZWFzZSBwcm92aWRlIGEgbnVtYmVyJyxcblx0ZW1haWxFcnJvcjogJ1BsZWFzZSBwcm92aWRlIGEgdmFsaWQgZW1haWwnLFxuXHRhZGRyZXNzRXJyb3I6ICdQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIGFkZHJlc3MnLFxuXHR6aXBjb2RlRXJyb3I6ICdQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIHppcGNvZGUnLFxuXHRwaG9uZW51bWJlckVycm9yOiAnUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBwaG9uZSBudW1iZXInLFxuXHRjb3VudHJ5RXJyb3I6ICdQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIGNvdW50cnknXG59O1xuXG5Gb3Jtc3kuYWRkVmFsaWRhdGlvblJ1bGUoJ2lzQWRkcmVzcycsIGZ1bmN0aW9uICh2YWx1ZXMsIHZhbHVlKSB7XG5cdHJldHVybiB2YWxpZGF0aW9uUnVsZXMubWF0Y2hSZWdleHAodmFsdWVzLCB2YWx1ZSwgL1xcZCsoXFxzK1xcdyspezEsfVxccysoPzpzdCg/OlxcLnxyZWV0KT98ZHIoPzpcXC58aXZlKT98cGwoPzpcXC58YWNlKT98YXZlKD86XFwufG51ZSk/fHJkfHJvYWR8bGFuZXxkcml2ZXx3YXl8Y291cnR8cGxhemF8c3F1YXJlfHJ1bnxwYXJrd2F5fHBvaW50fHBpa2V8c3F1YXJlfGRyaXZld2F5fHRyYWNlfHBhcmt8dGVycmFjZXxibHZkKS8pO1xufSk7XG5Gb3Jtc3kuYWRkVmFsaWRhdGlvblJ1bGUoJ2lzWmlwY29kZScsIGZ1bmN0aW9uICh2YWx1ZXMsIHZhbHVlKSB7XG5cdHJldHVybiB2YWxpZGF0aW9uUnVsZXMubWF0Y2hSZWdleHAodmFsdWVzLCB2YWx1ZSwgL15bMC05XXs1fSg/Oi1bMC05XXs0fSk/JC8pO1xufSk7XG5Gb3Jtc3kuYWRkVmFsaWRhdGlvblJ1bGUoJ2lzUGhvbmVOdW1iZXInLCBmdW5jdGlvbiAodmFsdWVzLCB2YWx1ZSkge1xuXHRyZXR1cm4gdmFsaWRhdGlvblJ1bGVzLm1hdGNoUmVnZXhwKHZhbHVlcywgdmFsdWUsIC9eKD86KD86XFwoPyg/OjAwfFxcKykoWzEtNF1cXGRcXGR8WzEtOV1cXGQ/KVxcKT8pP1tcXC1cXC5cXCBcXFxcXFwvXT8pPygoPzpcXCg/XFxkezEsfVxcKT9bXFwtXFwuXFwgXFxcXFxcL10/KXswLH0pKD86W1xcLVxcLlxcIFxcXFxcXC9dPyg/OiN8ZXh0XFwuP3xleHRlbnNpb258eClbXFwtXFwuXFwgXFxcXFxcL10/KFxcZCspKT8kL2kpO1xufSk7XG5Gb3Jtc3kuYWRkVmFsaWRhdGlvblJ1bGUoJ2lzQ291bnRyeScsIGZ1bmN0aW9uICh2YWx1ZXMsIHZhbHVlKSB7XG5cdHJldHVybiB2YWxpZGF0aW9uUnVsZXMubWF0Y2hSZWdleHAodmFsdWVzLCB2YWx1ZSwgL15bYS16XFx1MDBDMC1cXHUwMkFCJ8K0YF0rXFwuP1xccyhbYS16XFx1MDBDMC1cXHUwMkFCJ8K0YF0rXFwuP1xccz8pKyQvaSk7XG59KTtcblxudmFyIEZvcm0gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoRm9ybSwgX0NvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gRm9ybSgpIHtcblx0XHR2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZvcm0pO1xuXG5cdFx0Zm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcblx0XHRcdGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmNhbGwuYXBwbHkoX0NvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuXHRcdFx0Zm9ybURhdGE6IHtcblx0XHRcdFx0bmFtZTogJycsXG5cdFx0XHRcdGFkZHJlc3M6ICcnLFxuXHRcdFx0XHRjaXR5OiAnJyxcblx0XHRcdFx0c3RhdGU6ICcnLFxuXHRcdFx0XHR6aXBjb2RlOiAnJyxcblx0XHRcdFx0Y291bnRyeTogJycsXG5cdFx0XHRcdHBob25lTnVtYmVyOiAnJyxcblx0XHRcdFx0ZW1haWw6ICcnXG5cdFx0XHR9LFxuXHRcdFx0Y2FuU3VibWl0OiBmYWxzZVxuXHRcdH0sIF90aGlzLmVuYWJsZUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBfdGhpczI7XG5cblx0XHRcdHJldHVybiAoX3RoaXMyID0gX3RoaXMpLl9fZW5hYmxlQnV0dG9uX19SRUFDVF9IT1RfTE9BREVSX18uYXBwbHkoX3RoaXMyLCBhcmd1bWVudHMpO1xuXHRcdH0sIF90aGlzLmRpc2FibGVCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgX3RoaXMzO1xuXG5cdFx0XHRyZXR1cm4gKF90aGlzMyA9IF90aGlzKS5fX2Rpc2FibGVCdXR0b25fX1JFQUNUX0hPVF9MT0FERVJfXy5hcHBseShfdGhpczMsIGFyZ3VtZW50cyk7XG5cdFx0fSwgX3RoaXMuc3VibWl0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBfdGhpczQ7XG5cblx0XHRcdHJldHVybiAoX3RoaXM0ID0gX3RoaXMpLl9fc3VibWl0Rm9ybV9fUkVBQ1RfSE9UX0xPQURFUl9fLmFwcGx5KF90aGlzNCwgYXJndW1lbnRzKTtcblx0XHR9LCBfdGhpcy5ub3RpZnlGb3JtRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgX3RoaXM1O1xuXG5cdFx0XHRyZXR1cm4gKF90aGlzNSA9IF90aGlzKS5fX25vdGlmeUZvcm1FcnJvcl9fUkVBQ1RfSE9UX0xPQURFUl9fLmFwcGx5KF90aGlzNSwgYXJndW1lbnRzKTtcblx0XHR9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcblx0fVxuXHQvKipcbiAgKiBBcyBhbiBhbHRlcm5hdGl2ZSB0byBgTXVpVGhlbWVQcm92aWRlcmAgeW91IGNhbiBhZGQgYSB0aGVtZSBkaXJlY3RseSBpbnRvIGNvbnRleHQuXG4gICogU2VlIHRoZSBbTWF0ZXJpYWwtVUkgdGhlbWVzXShodHRwOi8vd3d3Lm1hdGVyaWFsLXVpLmNvbS8jL2N1c3RvbWl6YXRpb24vdGhlbWVzKSBkb2NzIGZvciBkZXRhaWxzLlxuICAqXG4gICogY2hpbGRDb250ZXh0VHlwZXM6IHtcbiAgKiAgIG11aVRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LFxuICAqIH0sXG4gICogZ2V0Q2hpbGRDb250ZXh0KCl7XG4gICogICByZXR1cm4ge1xuICAqICAgICBtdWlUaGVtZTogZ2V0TXVpVGhlbWUoKSxcbiAgKiAgIH1cbiAgKiB9LFxuICAqL1xuXG5cdEZvcm0ucHJvdG90eXBlLl9fZW5hYmxlQnV0dG9uX19SRUFDVF9IT1RfTE9BREVSX18gPSBmdW5jdGlvbiBfX2VuYWJsZUJ1dHRvbl9fUkVBQ1RfSE9UX0xPQURFUl9fKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y2FuU3VibWl0OiB0cnVlXG5cdFx0fSk7XG5cdH07XG5cblx0Rm9ybS5wcm90b3R5cGUuX19kaXNhYmxlQnV0dG9uX19SRUFDVF9IT1RfTE9BREVSX18gPSBmdW5jdGlvbiBfX2Rpc2FibGVCdXR0b25fX1JFQUNUX0hPVF9MT0FERVJfXygpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGNhblN1Ym1pdDogZmFsc2Vcblx0XHR9KTtcblx0fTtcblxuXHRGb3JtLnByb3RvdHlwZS5fX3N1Ym1pdEZvcm1fX1JFQUNUX0hPVF9MT0FERVJfXyA9IGZ1bmN0aW9uIF9fc3VibWl0Rm9ybV9fUkVBQ1RfSE9UX0xPQURFUl9fKGRhdGEpIHtcblx0XHRjb25zb2xlLmxvZygndXNlciBzdWJtaXR0ZWQgZGF0YScpO1xuXHRcdGFsZXJ0KEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDQpKTtcblx0fTtcblxuXHRGb3JtLnByb3RvdHlwZS5fX25vdGlmeUZvcm1FcnJvcl9fUkVBQ1RfSE9UX0xPQURFUl9fID0gZnVuY3Rpb24gX19ub3RpZnlGb3JtRXJyb3JfX1JFQUNUX0hPVF9MT0FERVJfXyhkYXRhKSB7XG5cdFx0Y29uc29sZS5lcnJvcignRm9ybSBlcnJvcjonLCBkYXRhKTtcblx0fTtcblxuXHRGb3JtLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0dmFyIHBhcGVyU3R5bGUgPSBzdHlsZXMucGFwZXJTdHlsZSxcblx0XHQgICAgc3dpdGNoU3R5bGUgPSBzdHlsZXMuc3dpdGNoU3R5bGUsXG5cdFx0ICAgIHN1Ym1pdFN0eWxlID0gc3R5bGVzLnN1Ym1pdFN0eWxlO1xuXHRcdHZhciB3b3Jkc0Vycm9yID0gZXJyb3JNZXNzYWdlcy53b3Jkc0Vycm9yLFxuXHRcdCAgICBudW1lcmljRXJyb3IgPSBlcnJvck1lc3NhZ2VzLm51bWVyaWNFcnJvcixcblx0XHQgICAgZW1haWxFcnJvciA9IGVycm9yTWVzc2FnZXMuZW1haWxFcnJvcixcblx0XHQgICAgYWRkcmVzc0Vycm9yID0gZXJyb3JNZXNzYWdlcy5hZGRyZXNzRXJyb3IsXG5cdFx0ICAgIHppcGNvZGVFcnJvciA9IGVycm9yTWVzc2FnZXMuemlwY29kZUVycm9yLFxuXHRcdCAgICBwaG9uZW51bWJlckVycm9yID0gZXJyb3JNZXNzYWdlcy5waG9uZW51bWJlckVycm9yO1xuXG5cblx0XHRyZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFBhcGVyLFxuXHRcdFx0eyBzdHlsZTogcGFwZXJTdHlsZSB9LFxuXHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0Rm9ybXN5LkZvcm0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRvblZhbGlkOiB0aGlzLmVuYWJsZUJ1dHRvbixcblx0XHRcdFx0XHRvbkludmFsaWQ6IHRoaXMuZGlzYWJsZUJ1dHRvbixcblx0XHRcdFx0XHRvblZhbGlkU3VibWl0OiB0aGlzLnN1Ym1pdEZvcm0sXG5cdFx0XHRcdFx0b25JbnZhbGlkU3VibWl0OiB0aGlzLm5vdGlmeUZvcm1FcnJvclxuXHRcdFx0XHR9LFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1zeVRleHQsIHtcblx0XHRcdFx0XHRuYW1lOiAnbmFtZScsXG5cdFx0XHRcdFx0dmFsaWRhdGlvbnM6ICdpc1dvcmRzJyxcblx0XHRcdFx0XHR2YWxpZGF0aW9uRXJyb3I6IHdvcmRzRXJyb3IsXG5cdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHRcdFx0aGludFRleHQ6ICdXaGF0IGlzIHlvdXIgR3VyZHdhcmFcXCdzIG5hbWU/Jyxcblx0XHRcdFx0XHRmbG9hdGluZ0xhYmVsVGV4dDogJ0d1cmR3YXJhIG5hbWUnXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1zeVRleHQsIHtcblx0XHRcdFx0XHRuYW1lOiAnYWRkcmVzc0xpbmUxJyxcblx0XHRcdFx0XHR2YWxpZGF0aW9uczogJ2lzQWRkcmVzcycsXG5cdFx0XHRcdFx0dmFsaWRhdGlvbkVycm9yOiBhZGRyZXNzRXJyb3IsXG5cdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHRcdFx0aGludFRleHQ6ICdXaGF0IGlzIHlvdXIgR3VyZHdhcmFcXCdzIGFkZHJlc3M/Jyxcblx0XHRcdFx0XHRmbG9hdGluZ0xhYmVsVGV4dDogJ0FkZHJlc3MgTGluZSAxJ1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChGb3Jtc3lUZXh0LCB7XG5cdFx0XHRcdFx0bmFtZTogJ2FkZHJlc3NMaW5lMicsXG5cdFx0XHRcdFx0dmFsaWRhdGlvbnM6ICdpc0FkZHJlc3MnLFxuXHRcdFx0XHRcdHZhbGlkYXRpb25FcnJvcjogYWRkcmVzc0Vycm9yLFxuXHRcdFx0XHRcdGhpbnRUZXh0OiAnV2hhdCBpcyB5b3VyIEd1cmR3YXJhXFwncyBhZGRyZXNzPycsXG5cdFx0XHRcdFx0ZmxvYXRpbmdMYWJlbFRleHQ6ICdBZGRyZXNzIExpbmUgMiAoaWYgbmVlZGVkKSdcblx0XHRcdFx0fSksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybXN5VGV4dCwge1xuXHRcdFx0XHRcdG5hbWU6ICdjaXR5Jyxcblx0XHRcdFx0XHR2YWxpZGF0aW9uczogJ2lzV29yZHMnLFxuXHRcdFx0XHRcdHZhbGlkYXRpb25FcnJvcjogd29yZHNFcnJvcixcblx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHRcdFx0XHRoaW50VGV4dDogJ1doYXQgaXMgeW91ciBHdXJkd2FyYVxcJ3MgY2l0eT8nLFxuXHRcdFx0XHRcdGZsb2F0aW5nTGFiZWxUZXh0OiAnQ2l0eSdcblx0XHRcdFx0fSksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybXN5VGV4dCwge1xuXHRcdFx0XHRcdG5hbWU6ICdzdGF0ZScsXG5cdFx0XHRcdFx0dmFsaWRhdGlvbnM6ICdpc1dvcmRzJyxcblx0XHRcdFx0XHR2YWxpZGF0aW9uRXJyb3I6IHdvcmRzRXJyb3IsXG5cdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHRcdFx0aGludFRleHQ6ICdXaGF0IGlzIHlvdXIgR3VyZHdhcmFcXCdzIHN0YXRlPycsXG5cdFx0XHRcdFx0ZmxvYXRpbmdMYWJlbFRleHQ6ICdTdGF0ZSdcblx0XHRcdFx0fSksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXV0b0NvbXBsZXRlLCB7XG5cdFx0XHRcdFx0ZmxvYXRpbmdMYWJlbFRleHQ6ICdDb3VudHJ5Jyxcblx0XHRcdFx0XHRmaWx0ZXI6IEF1dG9Db21wbGV0ZS5jYXNlSW5zZW5zaXRpdmVGaWx0ZXIsXG5cdFx0XHRcdFx0ZGF0YVNvdXJjZTogY291bnRyaWVzLFxuXHRcdFx0XHRcdGhpbnRUZXh0OiAnV2hhdCBpcyB5b3VyIEd1cmR3YXJhXFwncyBjb3VudHJ5Pydcblx0XHRcdFx0fSksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybXN5VGV4dCwge1xuXHRcdFx0XHRcdG5hbWU6ICd6aXBjb2RlJyxcblx0XHRcdFx0XHR2YWxpZGF0aW9uczogJ2lzWmlwY29kZScsXG5cdFx0XHRcdFx0dmFsaWRhdGlvbkVycm9yOiB6aXBjb2RlRXJyb3IsXG5cdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHRcdFx0aGludFRleHQ6ICdXaGF0IGlzIHlvdXIgR3VyZHdhcmFcXCdzIHppcGNvZGU/Jyxcblx0XHRcdFx0XHRmbG9hdGluZ0xhYmVsVGV4dDogJ1ppcGNvZGUnXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1zeVRleHQsIHtcblx0XHRcdFx0XHRuYW1lOiAncGhvbmVOdW1iZXInLFxuXHRcdFx0XHRcdHZhbGlkYXRpb25zOiAnaXNQaG9uZU51bWJlcicsXG5cdFx0XHRcdFx0dmFsaWRhdGlvbkVycm9yOiBwaG9uZW51bWJlckVycm9yLFxuXHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0XHRcdGhpbnRUZXh0OiAnV2hhdCBpcyB5b3VyIEd1cmR3YXJhXFwncyBudW1iZXI/Jyxcblx0XHRcdFx0XHRmbG9hdGluZ0xhYmVsVGV4dDogJ1Bob25lIG51bWJlcidcblx0XHRcdFx0fSksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybXN5VGV4dCwge1xuXHRcdFx0XHRcdG5hbWU6ICdlbWFpbCcsXG5cdFx0XHRcdFx0dmFsaWRhdGlvbnM6ICdpc0VtYWlsJyxcblx0XHRcdFx0XHR2YWxpZGF0aW9uRXJyb3I6IGVtYWlsRXJyb3IsXG5cdFx0XHRcdFx0aGludFRleHQ6ICdXaGF0IGlzIHlvdXIgR3VyZHdhcmFcXCdzIGVtYWlsPycsXG5cdFx0XHRcdFx0ZmxvYXRpbmdMYWJlbFRleHQ6ICdFbWFpbCdcblx0XHRcdFx0fSksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmFpc2VkQnV0dG9uLCB7IHN0eWxlOiBzdWJtaXRTdHlsZSwgdHlwZTogJ3N1Ym1pdCcsIGxhYmVsOiAnU3VibWl0JywgZGlzYWJsZWQ6ICF0aGlzLnN0YXRlLmNhblN1Ym1pdCB9KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH07XG5cblx0cmV0dXJuIEZvcm07XG59KENvbXBvbmVudCk7XG5cbnZhciBfZGVmYXVsdCA9IEZvcm07XG5cblxuZXhwb3J0IGRlZmF1bHQgX2RlZmF1bHQ7XG4vKlxuXG5cdHByb3BzOiB7XG5cdFx0Y291bnRyaWVzOiBBcnJheTxDb3VudHJ5PlxuXHR9O1xuXG5cdFx0XHRcdFx0XHQ8Rm9ybXN5U2VsZWN0IG5hbWU9XCJjb3VudHJ5XCIgcmVxdWlyZWQgZmxvYXRpbmdMYWJlbFRleHQ9XCJDb3VudHJ5XCI+XG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jb3VudHJpZXMubWFwKChjb3VudHJ5LCBpbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9e2NvdW50cnkudmFsdWV9IHByaW1hcnlUZXh0PXtjb3VudHJ5LnZhbHVlfSAvPlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PC9Gb3Jtc3lTZWxlY3Q+XG4qL1xuXG4vLyA8cHJlPlxuLy8gXHQ8Y29kZT57SlNPTi5zdHJpbmdpZnkocHJlbG9hZCwgbnVsbCwgNCl9PC9jb2RlPlxuLy8gPC9wcmU+XG5cbjtcblxudmFyIF90ZW1wMiA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHR5cGVvZiBfX1JFQUNUX0hPVF9MT0FERVJfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihzdHlsZXMsICdzdHlsZXMnLCAnL1VzZXJzL2phY2tpZXRoaW5kL2dkYi1mcm9udGVuZC9jcmVhdGUtcmVhY3QtYXBwLXdpdGgtZmxvdy9jbGllbnQvY29tcG9uZW50cy9Gb3JtLmpzeCcpO1xuXG5cdF9fUkVBQ1RfSE9UX0xPQURFUl9fLnJlZ2lzdGVyKGNvdW50cmllcywgJ2NvdW50cmllcycsICcvVXNlcnMvamFja2lldGhpbmQvZ2RiLWZyb250ZW5kL2NyZWF0ZS1yZWFjdC1hcHAtd2l0aC1mbG93L2NsaWVudC9jb21wb25lbnRzL0Zvcm0uanN4Jyk7XG5cblx0X19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIoZXJyb3JNZXNzYWdlcywgJ2Vycm9yTWVzc2FnZXMnLCAnL1VzZXJzL2phY2tpZXRoaW5kL2dkYi1mcm9udGVuZC9jcmVhdGUtcmVhY3QtYXBwLXdpdGgtZmxvdy9jbGllbnQvY29tcG9uZW50cy9Gb3JtLmpzeCcpO1xuXG5cdF9fUkVBQ1RfSE9UX0xPQURFUl9fLnJlZ2lzdGVyKEZvcm0sICdGb3JtJywgJy9Vc2Vycy9qYWNraWV0aGluZC9nZGItZnJvbnRlbmQvY3JlYXRlLXJlYWN0LWFwcC13aXRoLWZsb3cvY2xpZW50L2NvbXBvbmVudHMvRm9ybS5qc3gnKTtcblxuXHRfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihfZGVmYXVsdCwgJ2RlZmF1bHQnLCAnL1VzZXJzL2phY2tpZXRoaW5kL2dkYi1mcm9udGVuZC9jcmVhdGUtcmVhY3QtYXBwLXdpdGgtZmxvdy9jbGllbnQvY29tcG9uZW50cy9Gb3JtLmpzeCcpO1xufSgpO1xuXG47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Gb3JtLmpzeFxuLy8gbW9kdWxlIGlkID0gLi9jbGllbnQvY29tcG9uZW50cy9Gb3JtLmpzeFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})