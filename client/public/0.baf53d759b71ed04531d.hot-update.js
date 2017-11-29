webpackHotUpdate(0,{

/***/ "./client/components/Form.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(\"./node_modules/react/react.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_formsy_react_2__ = __webpack_require__(\"./node_modules/formsy-react-2/lib/main.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_formsy_react_2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_formsy_react_2__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui__ = __webpack_require__(\"./node_modules/material-ui/index.es.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_formsy_mui__ = __webpack_require__(\"./node_modules/formsy-mui/index.es.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_formsy_mui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_formsy_mui__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_formsy_react_2_lib_validationRules__ = __webpack_require__(\"./node_modules/formsy-react-2/lib/validationRules.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_formsy_react_2_lib_validationRules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_formsy_react_2_lib_validationRules__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\n\nvar styles = {\n\tpaperStyle: {\n\t\twidth: 300,\n\t\tmargin: 'auto',\n\t\tpadding: 20,\n\t\tdisplay: 'inline-block'\n\t},\n\tswitchStyle: {\n\t\tmarginBottom: 16\n\t},\n\tsubmitStyle: {\n\t\tmarginTop: 32,\n\t\tdisplay: 'block'\n\t},\n\tunderlineStyle: {\n\t\tborderColor: orange500\n\t},\n\tfloatingLabelStyle: {\n\t\tcolor: orange500\n\t},\n\tfloatingLabelFocusStyle: {\n\t\tcolor: blue500\n\t}\n};\nvar countries = ['United States', 'Canada', 'United Kingdom', 'Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and/or Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil', 'British lndian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Cook Islands', 'Costa Rica', 'Croatia (Hrvatska)', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecudaor', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'France, Metropolitan', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and Mc Donald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran (Islamic Republic of)', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', \"Korea, Democratic People's Republic of\", 'Korea, Republic of', 'Kuwait', 'Kyrgyzstan', \"Lao People's Democratic Republic\", 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libyan Arab Jamahiriya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia, Federated States of', 'Moldova, Republic of', 'Monaco', 'Mongolia', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfork Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia South Sandwich Islands', 'Spain', 'Sri Lanka', 'St. Helena', 'St. Pierre and Miquelon', 'Sudan', 'Suriname', 'Svalbarn and Jan Mayen Islands', 'Swaziland', 'Sweden', 'Switzerland', 'Syrian Arab Republic', 'Taiwan', 'Tajikistan', 'Tanzania, United Republic of', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'USA', 'United States minor outlying islands', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City State', 'Venezuela', 'Vietnam', 'Virigan Islands (British)', 'Virgin Islands (U.S.)', 'Wallis and Futuna Islands', 'Western Sahara', 'Yemen', 'Yugoslavia', 'Zaire', 'Zambia', 'Zimbabwe'];\nvar errorMessages = {\n\twordsError: 'Please only use letters',\n\tnumericError: 'Please provide a number',\n\temailError: 'Please provide a valid email',\n\taddressError: 'Please provide a valid address',\n\tzipcodeError: 'Please provide a valid zipcode',\n\tphonenumberError: 'Please provide a valid phone number',\n\tcountryError: 'Please provide a valid country'\n};\n\n__WEBPACK_IMPORTED_MODULE_1_formsy_react_2___default.a.addValidationRule('isAddress', function (values, value) {\n\treturn __WEBPACK_IMPORTED_MODULE_4_formsy_react_2_lib_validationRules___default.a.matchRegexp(values, value, /\\d+(\\s+\\w+){1,}\\s+(?:st(?:\\.|reet)?|dr(?:\\.|ive)?|pl(?:\\.|ace)?|ave(?:\\.|nue)?|rd|road|lane|drive|way|court|plaza|square|run|parkway|point|pike|square|driveway|trace|park|terrace|blvd|Rd|Road|Lane|Drive|Way|Court|Plaza|Square|Run|Parkway|Point|Pike|Square|Driveway|Trace|Park|Terrace|Blvd| ?:St(?:\\.|reet)?|Dr(?:\\.|ive)?|Pl(?:\\.|ace)?|Ave(?:\\.|nue)?|)/);\n});\n__WEBPACK_IMPORTED_MODULE_1_formsy_react_2___default.a.addValidationRule('isZipcode', function (values, value) {\n\treturn __WEBPACK_IMPORTED_MODULE_4_formsy_react_2_lib_validationRules___default.a.matchRegexp(values, value, /^[0-9]{5}(?:-[0-9]{4})?$/);\n});\n__WEBPACK_IMPORTED_MODULE_1_formsy_react_2___default.a.addValidationRule('isPhoneNumber', function (values, value) {\n\treturn __WEBPACK_IMPORTED_MODULE_4_formsy_react_2_lib_validationRules___default.a.matchRegexp(values, value, /^(?:(?:\\(?(?:00|\\+)([1-4]\\d\\d|[1-9]\\d?)\\)?)?[\\-\\.\\ \\\\\\/]?)?((?:\\(?\\d{1,}\\)?[\\-\\.\\ \\\\\\/]?){0,})(?:[\\-\\.\\ \\\\\\/]?(?:#|ext\\.?|extension|x)[\\-\\.\\ \\\\\\/]?(\\d+))?$/i);\n});\n__WEBPACK_IMPORTED_MODULE_1_formsy_react_2___default.a.addValidationRule('isCountry', function (values, value) {\n\treturn __WEBPACK_IMPORTED_MODULE_4_formsy_react_2_lib_validationRules___default.a.matchRegexp(values, value, /^[a-z\\u00C0-\\u02AB'´`]+\\.?\\s([a-z\\u00C0-\\u02AB'´`]+\\.?\\s?)+$/i);\n});\n\nvar Form = function (_Component) {\n\t_inherits(Form, _Component);\n\n\tfunction Form() {\n\t\tvar _temp, _this, _ret;\n\n\t\t_classCallCheck(this, Form);\n\n\t\tfor (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n\t\t\targs[_key] = arguments[_key];\n\t\t}\n\n\t\treturn _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {\n\t\t\tformData: {\n\t\t\t\tname: '',\n\t\t\t\taddress: '',\n\t\t\t\tcity: '',\n\t\t\t\tstate: '',\n\t\t\t\tzipcode: '',\n\t\t\t\tcountry: '',\n\t\t\t\tphoneNumber: '',\n\t\t\t\temail: ''\n\t\t\t},\n\t\t\tcanSubmit: false\n\t\t}, _this.enableButton = function () {\n\t\t\tvar _this2;\n\n\t\t\treturn (_this2 = _this).__enableButton__REACT_HOT_LOADER__.apply(_this2, arguments);\n\t\t}, _this.disableButton = function () {\n\t\t\tvar _this3;\n\n\t\t\treturn (_this3 = _this).__disableButton__REACT_HOT_LOADER__.apply(_this3, arguments);\n\t\t}, _this.submitForm = function () {\n\t\t\tvar _this4;\n\n\t\t\treturn (_this4 = _this).__submitForm__REACT_HOT_LOADER__.apply(_this4, arguments);\n\t\t}, _this.notifyFormError = function () {\n\t\t\tvar _this5;\n\n\t\t\treturn (_this5 = _this).__notifyFormError__REACT_HOT_LOADER__.apply(_this5, arguments);\n\t\t}, _temp), _possibleConstructorReturn(_this, _ret);\n\t}\n\t/**\n  * As an alternative to `MuiThemeProvider` you can add a theme directly into context.\n  * See the [Material-UI themes](http://www.material-ui.com/#/customization/themes) docs for details.\n  *\n  * childContextTypes: {\n  *   muiTheme: PropTypes.object,\n  * },\n  * getChildContext(){\n  *   return {\n  *     muiTheme: getMuiTheme(),\n  *   }\n  * },\n  */\n\n\tForm.prototype.__enableButton__REACT_HOT_LOADER__ = function __enableButton__REACT_HOT_LOADER__() {\n\t\tthis.setState({\n\t\t\tcanSubmit: true\n\t\t});\n\t};\n\n\tForm.prototype.__disableButton__REACT_HOT_LOADER__ = function __disableButton__REACT_HOT_LOADER__() {\n\t\tthis.setState({\n\t\t\tcanSubmit: false\n\t\t});\n\t};\n\n\tForm.prototype.__submitForm__REACT_HOT_LOADER__ = function __submitForm__REACT_HOT_LOADER__(data) {\n\t\tconsole.log('submission success! with this object', data);\n\t};\n\n\tForm.prototype.__notifyFormError__REACT_HOT_LOADER__ = function __notifyFormError__REACT_HOT_LOADER__(data) {\n\t\tconsole.error('Form error:', data);\n\t};\n\n\tForm.prototype.render = function render() {\n\t\tvar submitStyle = styles.submitStyle;\n\t\tvar wordsError = errorMessages.wordsError,\n\t\t    emailError = errorMessages.emailError,\n\t\t    addressError = errorMessages.addressError,\n\t\t    zipcodeError = errorMessages.zipcodeError,\n\t\t    phonenumberError = errorMessages.phonenumberError;\n\n\n\t\treturn __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t__WEBPACK_IMPORTED_MODULE_2_material_ui__[\"a\" /* Paper */],\n\t\t\t{ className: 'form', zDepth: 3 },\n\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t'h1',\n\t\t\t\tnull,\n\t\t\t\t'Sample Header'\n\t\t\t),\n\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_1_formsy_react_2___default.a.Form,\n\t\t\t\t{\n\t\t\t\t\tonValid: this.enableButton,\n\t\t\t\t\tonInvalid: this.disableButton,\n\t\t\t\t\tonValidSubmit: this.submitForm,\n\t\t\t\t\tonInvalidSubmit: this.notifyFormError\n\t\t\t\t},\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_formsy_mui__[\"FormsyText\"], {\n\t\t\t\t\tname: 'name',\n\t\t\t\t\tvalidations: 'isWords',\n\t\t\t\t\tvalidationError: wordsError,\n\t\t\t\t\trequired: true,\n\t\t\t\t\thintText: 'What is your Gurdwara\\'s name?',\n\t\t\t\t\tfloatingLabelText: 'Gurdwara name'\n\t\t\t\t}),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_formsy_mui__[\"FormsyText\"], {\n\t\t\t\t\tname: 'addressLine1',\n\t\t\t\t\tvalidations: 'isAddress',\n\t\t\t\t\tvalidationError: addressError,\n\t\t\t\t\trequired: true,\n\t\t\t\t\thintText: 'What is your Gurdwara\\'s address?',\n\t\t\t\t\tfloatingLabelText: 'Address Line 1'\n\t\t\t\t}),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_formsy_mui__[\"FormsyText\"], {\n\t\t\t\t\tname: 'addressLine2',\n\t\t\t\t\tvalidations: 'isAddress',\n\t\t\t\t\tvalidationError: addressError,\n\t\t\t\t\thintText: 'What is your Gurdwara\\'s address?',\n\t\t\t\t\tfloatingLabelText: 'Address Line 2 (if needed)'\n\t\t\t\t}),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_formsy_mui__[\"FormsyText\"], {\n\t\t\t\t\tname: 'city',\n\t\t\t\t\tvalidations: 'isWords',\n\t\t\t\t\tvalidationError: wordsError,\n\t\t\t\t\trequired: true,\n\t\t\t\t\thintText: 'What is your Gurdwara\\'s city?',\n\t\t\t\t\tfloatingLabelText: 'City'\n\t\t\t\t}),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_formsy_mui__[\"FormsyText\"], {\n\t\t\t\t\tname: 'state',\n\t\t\t\t\tvalidations: 'isWords',\n\t\t\t\t\tvalidationError: wordsError,\n\t\t\t\t\trequired: true,\n\t\t\t\t\thintText: 'What is your Gurdwara\\'s state?',\n\t\t\t\t\tfloatingLabelText: 'State'\n\t\t\t\t}),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__[\"b\" /* AutoComplete */], {\n\t\t\t\t\tfloatingLabelText: 'Country',\n\t\t\t\t\tfilter: __WEBPACK_IMPORTED_MODULE_2_material_ui__[\"b\" /* AutoComplete */].caseInsensitiveFilter,\n\t\t\t\t\tdataSource: countries,\n\t\t\t\t\thintText: 'What is your Gurdwara\\'s country?'\n\t\t\t\t}),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_formsy_mui__[\"FormsyText\"], {\n\t\t\t\t\tname: 'zipcode',\n\t\t\t\t\tvalidations: 'isZipcode',\n\t\t\t\t\tvalidationError: zipcodeError,\n\t\t\t\t\trequired: true,\n\t\t\t\t\thintText: 'What is your Gurdwara\\'s zipcode?',\n\t\t\t\t\tfloatingLabelText: 'Zipcode'\n\t\t\t\t}),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_formsy_mui__[\"FormsyText\"], {\n\t\t\t\t\tname: 'phoneNumber',\n\t\t\t\t\tvalidations: 'isPhoneNumber',\n\t\t\t\t\tvalidationError: phonenumberError,\n\t\t\t\t\trequired: true,\n\t\t\t\t\thintText: 'What is your Gurdwara\\'s number?',\n\t\t\t\t\tfloatingLabelText: 'Phone number'\n\t\t\t\t}),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_formsy_mui__[\"FormsyText\"], {\n\t\t\t\t\tname: 'email',\n\t\t\t\t\tvalidations: 'isEmail',\n\t\t\t\t\tvalidationError: emailError,\n\t\t\t\t\thintText: 'What is your Gurdwara\\'s email?',\n\t\t\t\t\tfloatingLabelText: 'Email'\n\t\t\t\t}),\n\t\t\t\t__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui__[\"c\" /* RaisedButton */], { style: submitStyle, type: 'submit', label: 'Submit', disabled: !this.state.canSubmit })\n\t\t\t)\n\t\t);\n\t};\n\n\treturn Form;\n}(__WEBPACK_IMPORTED_MODULE_0_react__[\"Component\"]);\n\nvar _default = Form;\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (_default);\n/*\n\n\tprops: {\n\t\tcountries: Array<Country>\n\t};\n\n\t\t\t\t\t\t<FormsySelect name=\"country\" required floatingLabelText=\"Country\">\n\t\t\t\t\t\t{this.props.countries.map((country, index) => (\n\t\t\t\t\t\t\t<MenuItem value={country.value} primaryText={country.value} />\n\t\t\t\t\t\t))}\n\t\t\t\t\t</FormsySelect>\n*/\n\n// <pre>\n// \t<code>{JSON.stringify(preload, null, 4)}</code>\n// </pre>\n\n;\n\nvar _temp2 = function () {\n\tif (typeof __REACT_HOT_LOADER__ === 'undefined') {\n\t\treturn;\n\t}\n\n\t__REACT_HOT_LOADER__.register(styles, 'styles', '/Users/jackiethind/gdb-frontend/create-react-app-with-flow/client/components/Form.jsx');\n\n\t__REACT_HOT_LOADER__.register(countries, 'countries', '/Users/jackiethind/gdb-frontend/create-react-app-with-flow/client/components/Form.jsx');\n\n\t__REACT_HOT_LOADER__.register(errorMessages, 'errorMessages', '/Users/jackiethind/gdb-frontend/create-react-app-with-flow/client/components/Form.jsx');\n\n\t__REACT_HOT_LOADER__.register(Form, 'Form', '/Users/jackiethind/gdb-frontend/create-react-app-with-flow/client/components/Form.jsx');\n\n\t__REACT_HOT_LOADER__.register(_default, 'default', '/Users/jackiethind/gdb-frontend/create-react-app-with-flow/client/components/Form.jsx');\n}();\n\n;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50cy9Gb3JtLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0Zvcm0uanN4PzU2MjciXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvcm1zeSBmcm9tICdmb3Jtc3ktcmVhY3QtMic7XG5pbXBvcnQgeyBQYXBlciwgUmFpc2VkQnV0dG9uLCBNZW51SXRlbSwgQXV0b0NvbXBsZXRlIH0gZnJvbSAnbWF0ZXJpYWwtdWknO1xuaW1wb3J0IHsgRm9ybXN5U2VsZWN0LCBGb3Jtc3lUZXh0LCBGb3Jtc3lBdXRvQ29tcGxldGUgfSBmcm9tICdmb3Jtc3ktbXVpJztcbmltcG9ydCB2YWxpZGF0aW9uUnVsZXMgZnJvbSAnZm9ybXN5LXJlYWN0LTIvbGliL3ZhbGlkYXRpb25SdWxlcyc7XG5cbnZhciBzdHlsZXMgPSB7XG5cdHBhcGVyU3R5bGU6IHtcblx0XHR3aWR0aDogMzAwLFxuXHRcdG1hcmdpbjogJ2F1dG8nLFxuXHRcdHBhZGRpbmc6IDIwLFxuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG5cdH0sXG5cdHN3aXRjaFN0eWxlOiB7XG5cdFx0bWFyZ2luQm90dG9tOiAxNlxuXHR9LFxuXHRzdWJtaXRTdHlsZToge1xuXHRcdG1hcmdpblRvcDogMzIsXG5cdFx0ZGlzcGxheTogJ2Jsb2NrJ1xuXHR9LFxuXHR1bmRlcmxpbmVTdHlsZToge1xuXHRcdGJvcmRlckNvbG9yOiBvcmFuZ2U1MDBcblx0fSxcblx0ZmxvYXRpbmdMYWJlbFN0eWxlOiB7XG5cdFx0Y29sb3I6IG9yYW5nZTUwMFxuXHR9LFxuXHRmbG9hdGluZ0xhYmVsRm9jdXNTdHlsZToge1xuXHRcdGNvbG9yOiBibHVlNTAwXG5cdH1cbn07XG52YXIgY291bnRyaWVzID0gWydVbml0ZWQgU3RhdGVzJywgJ0NhbmFkYScsICdVbml0ZWQgS2luZ2RvbScsICdBZmdoYW5pc3RhbicsICdBbGJhbmlhJywgJ0FsZ2VyaWEnLCAnQW1lcmljYW4gU2Ftb2EnLCAnQW5kb3JyYScsICdBbmdvbGEnLCAnQW5ndWlsbGEnLCAnQW50YXJjdGljYScsICdBbnRpZ3VhIGFuZC9vciBCYXJidWRhJywgJ0FyZ2VudGluYScsICdBcm1lbmlhJywgJ0FydWJhJywgJ0F1c3RyYWxpYScsICdBdXN0cmlhJywgJ0F6ZXJiYWlqYW4nLCAnQmFoYW1hcycsICdCYWhyYWluJywgJ0JhbmdsYWRlc2gnLCAnQmFyYmFkb3MnLCAnQmVsYXJ1cycsICdCZWxnaXVtJywgJ0JlbGl6ZScsICdCZW5pbicsICdCZXJtdWRhJywgJ0JodXRhbicsICdCb2xpdmlhJywgJ0Jvc25pYSBhbmQgSGVyemVnb3ZpbmEnLCAnQm90c3dhbmEnLCAnQm91dmV0IElzbGFuZCcsICdCcmF6aWwnLCAnQnJpdGlzaCBsbmRpYW4gT2NlYW4gVGVycml0b3J5JywgJ0JydW5laSBEYXJ1c3NhbGFtJywgJ0J1bGdhcmlhJywgJ0J1cmtpbmEgRmFzbycsICdCdXJ1bmRpJywgJ0NhbWJvZGlhJywgJ0NhbWVyb29uJywgJ0NhcGUgVmVyZGUnLCAnQ2F5bWFuIElzbGFuZHMnLCAnQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljJywgJ0NoYWQnLCAnQ2hpbGUnLCAnQ2hpbmEnLCAnQ2hyaXN0bWFzIElzbGFuZCcsICdDb2NvcyAoS2VlbGluZykgSXNsYW5kcycsICdDb2xvbWJpYScsICdDb21vcm9zJywgJ0NvbmdvJywgJ0Nvb2sgSXNsYW5kcycsICdDb3N0YSBSaWNhJywgJ0Nyb2F0aWEgKEhydmF0c2thKScsICdDdWJhJywgJ0N5cHJ1cycsICdDemVjaCBSZXB1YmxpYycsICdEZW5tYXJrJywgJ0RqaWJvdXRpJywgJ0RvbWluaWNhJywgJ0RvbWluaWNhbiBSZXB1YmxpYycsICdFYXN0IFRpbW9yJywgJ0VjdWRhb3InLCAnRWd5cHQnLCAnRWwgU2FsdmFkb3InLCAnRXF1YXRvcmlhbCBHdWluZWEnLCAnRXJpdHJlYScsICdFc3RvbmlhJywgJ0V0aGlvcGlhJywgJ0ZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKScsICdGYXJvZSBJc2xhbmRzJywgJ0ZpamknLCAnRmlubGFuZCcsICdGcmFuY2UnLCAnRnJhbmNlLCBNZXRyb3BvbGl0YW4nLCAnRnJlbmNoIEd1aWFuYScsICdGcmVuY2ggUG9seW5lc2lhJywgJ0ZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllcycsICdHYWJvbicsICdHYW1iaWEnLCAnR2VvcmdpYScsICdHZXJtYW55JywgJ0doYW5hJywgJ0dpYnJhbHRhcicsICdHcmVlY2UnLCAnR3JlZW5sYW5kJywgJ0dyZW5hZGEnLCAnR3VhZGVsb3VwZScsICdHdWFtJywgJ0d1YXRlbWFsYScsICdHdWluZWEnLCAnR3VpbmVhLUJpc3NhdScsICdHdXlhbmEnLCAnSGFpdGknLCAnSGVhcmQgYW5kIE1jIERvbmFsZCBJc2xhbmRzJywgJ0hvbmR1cmFzJywgJ0hvbmcgS29uZycsICdIdW5nYXJ5JywgJ0ljZWxhbmQnLCAnSW5kaWEnLCAnSW5kb25lc2lhJywgJ0lyYW4gKElzbGFtaWMgUmVwdWJsaWMgb2YpJywgJ0lyYXEnLCAnSXJlbGFuZCcsICdJc3JhZWwnLCAnSXRhbHknLCAnSXZvcnkgQ29hc3QnLCAnSmFtYWljYScsICdKYXBhbicsICdKb3JkYW4nLCAnS2F6YWtoc3RhbicsICdLZW55YScsICdLaXJpYmF0aScsIFwiS29yZWEsIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2ZcIiwgJ0tvcmVhLCBSZXB1YmxpYyBvZicsICdLdXdhaXQnLCAnS3lyZ3l6c3RhbicsIFwiTGFvIFBlb3BsZSdzIERlbW9jcmF0aWMgUmVwdWJsaWNcIiwgJ0xhdHZpYScsICdMZWJhbm9uJywgJ0xlc290aG8nLCAnTGliZXJpYScsICdMaWJ5YW4gQXJhYiBKYW1haGlyaXlhJywgJ0xpZWNodGVuc3RlaW4nLCAnTGl0aHVhbmlhJywgJ0x1eGVtYm91cmcnLCAnTWFjYXUnLCAnTWFjZWRvbmlhJywgJ01hZGFnYXNjYXInLCAnTWFsYXdpJywgJ01hbGF5c2lhJywgJ01hbGRpdmVzJywgJ01hbGknLCAnTWFsdGEnLCAnTWFyc2hhbGwgSXNsYW5kcycsICdNYXJ0aW5pcXVlJywgJ01hdXJpdGFuaWEnLCAnTWF1cml0aXVzJywgJ01heW90dGUnLCAnTWV4aWNvJywgJ01pY3JvbmVzaWEsIEZlZGVyYXRlZCBTdGF0ZXMgb2YnLCAnTW9sZG92YSwgUmVwdWJsaWMgb2YnLCAnTW9uYWNvJywgJ01vbmdvbGlhJywgJ01vbnRzZXJyYXQnLCAnTW9yb2NjbycsICdNb3phbWJpcXVlJywgJ015YW5tYXInLCAnTmFtaWJpYScsICdOYXVydScsICdOZXBhbCcsICdOZXRoZXJsYW5kcycsICdOZXRoZXJsYW5kcyBBbnRpbGxlcycsICdOZXcgQ2FsZWRvbmlhJywgJ05ldyBaZWFsYW5kJywgJ05pY2FyYWd1YScsICdOaWdlcicsICdOaWdlcmlhJywgJ05pdWUnLCAnTm9yZm9yayBJc2xhbmQnLCAnTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzJywgJ05vcndheScsICdPbWFuJywgJ1Bha2lzdGFuJywgJ1BhbGF1JywgJ1BhbmFtYScsICdQYXB1YSBOZXcgR3VpbmVhJywgJ1BhcmFndWF5JywgJ1BlcnUnLCAnUGhpbGlwcGluZXMnLCAnUGl0Y2Fpcm4nLCAnUG9sYW5kJywgJ1BvcnR1Z2FsJywgJ1B1ZXJ0byBSaWNvJywgJ1FhdGFyJywgJ1JldW5pb24nLCAnUm9tYW5pYScsICdSdXNzaWFuIEZlZGVyYXRpb24nLCAnUndhbmRhJywgJ1NhaW50IEtpdHRzIGFuZCBOZXZpcycsICdTYWludCBMdWNpYScsICdTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lcycsICdTYW1vYScsICdTYW4gTWFyaW5vJywgJ1NhbyBUb21lIGFuZCBQcmluY2lwZScsICdTYXVkaSBBcmFiaWEnLCAnU2VuZWdhbCcsICdTZXljaGVsbGVzJywgJ1NpZXJyYSBMZW9uZScsICdTaW5nYXBvcmUnLCAnU2xvdmFraWEnLCAnU2xvdmVuaWEnLCAnU29sb21vbiBJc2xhbmRzJywgJ1NvbWFsaWEnLCAnU291dGggQWZyaWNhJywgJ1NvdXRoIEdlb3JnaWEgU291dGggU2FuZHdpY2ggSXNsYW5kcycsICdTcGFpbicsICdTcmkgTGFua2EnLCAnU3QuIEhlbGVuYScsICdTdC4gUGllcnJlIGFuZCBNaXF1ZWxvbicsICdTdWRhbicsICdTdXJpbmFtZScsICdTdmFsYmFybiBhbmQgSmFuIE1heWVuIElzbGFuZHMnLCAnU3dhemlsYW5kJywgJ1N3ZWRlbicsICdTd2l0emVybGFuZCcsICdTeXJpYW4gQXJhYiBSZXB1YmxpYycsICdUYWl3YW4nLCAnVGFqaWtpc3RhbicsICdUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mJywgJ1RoYWlsYW5kJywgJ1RvZ28nLCAnVG9rZWxhdScsICdUb25nYScsICdUcmluaWRhZCBhbmQgVG9iYWdvJywgJ1R1bmlzaWEnLCAnVHVya2V5JywgJ1R1cmttZW5pc3RhbicsICdUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHMnLCAnVHV2YWx1JywgJ1VnYW5kYScsICdVa3JhaW5lJywgJ1VuaXRlZCBBcmFiIEVtaXJhdGVzJywgJ1VTQScsICdVbml0ZWQgU3RhdGVzIG1pbm9yIG91dGx5aW5nIGlzbGFuZHMnLCAnVXJ1Z3VheScsICdVemJla2lzdGFuJywgJ1ZhbnVhdHUnLCAnVmF0aWNhbiBDaXR5IFN0YXRlJywgJ1ZlbmV6dWVsYScsICdWaWV0bmFtJywgJ1ZpcmlnYW4gSXNsYW5kcyAoQnJpdGlzaCknLCAnVmlyZ2luIElzbGFuZHMgKFUuUy4pJywgJ1dhbGxpcyBhbmQgRnV0dW5hIElzbGFuZHMnLCAnV2VzdGVybiBTYWhhcmEnLCAnWWVtZW4nLCAnWXVnb3NsYXZpYScsICdaYWlyZScsICdaYW1iaWEnLCAnWmltYmFid2UnXTtcbnZhciBlcnJvck1lc3NhZ2VzID0ge1xuXHR3b3Jkc0Vycm9yOiAnUGxlYXNlIG9ubHkgdXNlIGxldHRlcnMnLFxuXHRudW1lcmljRXJyb3I6ICdQbGVhc2UgcHJvdmlkZSBhIG51bWJlcicsXG5cdGVtYWlsRXJyb3I6ICdQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIGVtYWlsJyxcblx0YWRkcmVzc0Vycm9yOiAnUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBhZGRyZXNzJyxcblx0emlwY29kZUVycm9yOiAnUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCB6aXBjb2RlJyxcblx0cGhvbmVudW1iZXJFcnJvcjogJ1BsZWFzZSBwcm92aWRlIGEgdmFsaWQgcGhvbmUgbnVtYmVyJyxcblx0Y291bnRyeUVycm9yOiAnUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBjb3VudHJ5J1xufTtcblxuRm9ybXN5LmFkZFZhbGlkYXRpb25SdWxlKCdpc0FkZHJlc3MnLCBmdW5jdGlvbiAodmFsdWVzLCB2YWx1ZSkge1xuXHRyZXR1cm4gdmFsaWRhdGlvblJ1bGVzLm1hdGNoUmVnZXhwKHZhbHVlcywgdmFsdWUsIC9cXGQrKFxccytcXHcrKXsxLH1cXHMrKD86c3QoPzpcXC58cmVldCk/fGRyKD86XFwufGl2ZSk/fHBsKD86XFwufGFjZSk/fGF2ZSg/OlxcLnxudWUpP3xyZHxyb2FkfGxhbmV8ZHJpdmV8d2F5fGNvdXJ0fHBsYXphfHNxdWFyZXxydW58cGFya3dheXxwb2ludHxwaWtlfHNxdWFyZXxkcml2ZXdheXx0cmFjZXxwYXJrfHRlcnJhY2V8Ymx2ZHxSZHxSb2FkfExhbmV8RHJpdmV8V2F5fENvdXJ0fFBsYXphfFNxdWFyZXxSdW58UGFya3dheXxQb2ludHxQaWtlfFNxdWFyZXxEcml2ZXdheXxUcmFjZXxQYXJrfFRlcnJhY2V8Qmx2ZHwgPzpTdCg/OlxcLnxyZWV0KT98RHIoPzpcXC58aXZlKT98UGwoPzpcXC58YWNlKT98QXZlKD86XFwufG51ZSk/fCkvKTtcbn0pO1xuRm9ybXN5LmFkZFZhbGlkYXRpb25SdWxlKCdpc1ppcGNvZGUnLCBmdW5jdGlvbiAodmFsdWVzLCB2YWx1ZSkge1xuXHRyZXR1cm4gdmFsaWRhdGlvblJ1bGVzLm1hdGNoUmVnZXhwKHZhbHVlcywgdmFsdWUsIC9eWzAtOV17NX0oPzotWzAtOV17NH0pPyQvKTtcbn0pO1xuRm9ybXN5LmFkZFZhbGlkYXRpb25SdWxlKCdpc1Bob25lTnVtYmVyJywgZnVuY3Rpb24gKHZhbHVlcywgdmFsdWUpIHtcblx0cmV0dXJuIHZhbGlkYXRpb25SdWxlcy5tYXRjaFJlZ2V4cCh2YWx1ZXMsIHZhbHVlLCAvXig/Oig/OlxcKD8oPzowMHxcXCspKFsxLTRdXFxkXFxkfFsxLTldXFxkPylcXCk/KT9bXFwtXFwuXFwgXFxcXFxcL10/KT8oKD86XFwoP1xcZHsxLH1cXCk/W1xcLVxcLlxcIFxcXFxcXC9dPyl7MCx9KSg/OltcXC1cXC5cXCBcXFxcXFwvXT8oPzojfGV4dFxcLj98ZXh0ZW5zaW9ufHgpW1xcLVxcLlxcIFxcXFxcXC9dPyhcXGQrKSk/JC9pKTtcbn0pO1xuRm9ybXN5LmFkZFZhbGlkYXRpb25SdWxlKCdpc0NvdW50cnknLCBmdW5jdGlvbiAodmFsdWVzLCB2YWx1ZSkge1xuXHRyZXR1cm4gdmFsaWRhdGlvblJ1bGVzLm1hdGNoUmVnZXhwKHZhbHVlcywgdmFsdWUsIC9eW2EtelxcdTAwQzAtXFx1MDJBQifCtGBdK1xcLj9cXHMoW2EtelxcdTAwQzAtXFx1MDJBQifCtGBdK1xcLj9cXHM/KSskL2kpO1xufSk7XG5cbnZhciBGb3JtID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcblx0X2luaGVyaXRzKEZvcm0sIF9Db21wb25lbnQpO1xuXG5cdGZ1bmN0aW9uIEZvcm0oKSB7XG5cdFx0dmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGb3JtKTtcblxuXHRcdGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG5cdFx0XHRhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuXHRcdH1cblxuXHRcdHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcblx0XHRcdGZvcm1EYXRhOiB7XG5cdFx0XHRcdG5hbWU6ICcnLFxuXHRcdFx0XHRhZGRyZXNzOiAnJyxcblx0XHRcdFx0Y2l0eTogJycsXG5cdFx0XHRcdHN0YXRlOiAnJyxcblx0XHRcdFx0emlwY29kZTogJycsXG5cdFx0XHRcdGNvdW50cnk6ICcnLFxuXHRcdFx0XHRwaG9uZU51bWJlcjogJycsXG5cdFx0XHRcdGVtYWlsOiAnJ1xuXHRcdFx0fSxcblx0XHRcdGNhblN1Ym1pdDogZmFsc2Vcblx0XHR9LCBfdGhpcy5lbmFibGVCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgX3RoaXMyO1xuXG5cdFx0XHRyZXR1cm4gKF90aGlzMiA9IF90aGlzKS5fX2VuYWJsZUJ1dHRvbl9fUkVBQ1RfSE9UX0xPQURFUl9fLmFwcGx5KF90aGlzMiwgYXJndW1lbnRzKTtcblx0XHR9LCBfdGhpcy5kaXNhYmxlQnV0dG9uID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIF90aGlzMztcblxuXHRcdFx0cmV0dXJuIChfdGhpczMgPSBfdGhpcykuX19kaXNhYmxlQnV0dG9uX19SRUFDVF9IT1RfTE9BREVSX18uYXBwbHkoX3RoaXMzLCBhcmd1bWVudHMpO1xuXHRcdH0sIF90aGlzLnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgX3RoaXM0O1xuXG5cdFx0XHRyZXR1cm4gKF90aGlzNCA9IF90aGlzKS5fX3N1Ym1pdEZvcm1fX1JFQUNUX0hPVF9MT0FERVJfXy5hcHBseShfdGhpczQsIGFyZ3VtZW50cyk7XG5cdFx0fSwgX3RoaXMubm90aWZ5Rm9ybUVycm9yID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIF90aGlzNTtcblxuXHRcdFx0cmV0dXJuIChfdGhpczUgPSBfdGhpcykuX19ub3RpZnlGb3JtRXJyb3JfX1JFQUNUX0hPVF9MT0FERVJfXy5hcHBseShfdGhpczUsIGFyZ3VtZW50cyk7XG5cdFx0fSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG5cdH1cblx0LyoqXG4gICogQXMgYW4gYWx0ZXJuYXRpdmUgdG8gYE11aVRoZW1lUHJvdmlkZXJgIHlvdSBjYW4gYWRkIGEgdGhlbWUgZGlyZWN0bHkgaW50byBjb250ZXh0LlxuICAqIFNlZSB0aGUgW01hdGVyaWFsLVVJIHRoZW1lc10oaHR0cDovL3d3dy5tYXRlcmlhbC11aS5jb20vIy9jdXN0b21pemF0aW9uL3RoZW1lcykgZG9jcyBmb3IgZGV0YWlscy5cbiAgKlxuICAqIGNoaWxkQ29udGV4dFR5cGVzOiB7XG4gICogICBtdWlUaGVtZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgKiB9LFxuICAqIGdldENoaWxkQ29udGV4dCgpe1xuICAqICAgcmV0dXJuIHtcbiAgKiAgICAgbXVpVGhlbWU6IGdldE11aVRoZW1lKCksXG4gICogICB9XG4gICogfSxcbiAgKi9cblxuXHRGb3JtLnByb3RvdHlwZS5fX2VuYWJsZUJ1dHRvbl9fUkVBQ1RfSE9UX0xPQURFUl9fID0gZnVuY3Rpb24gX19lbmFibGVCdXR0b25fX1JFQUNUX0hPVF9MT0FERVJfXygpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGNhblN1Ym1pdDogdHJ1ZVxuXHRcdH0pO1xuXHR9O1xuXG5cdEZvcm0ucHJvdG90eXBlLl9fZGlzYWJsZUJ1dHRvbl9fUkVBQ1RfSE9UX0xPQURFUl9fID0gZnVuY3Rpb24gX19kaXNhYmxlQnV0dG9uX19SRUFDVF9IT1RfTE9BREVSX18oKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjYW5TdWJtaXQ6IGZhbHNlXG5cdFx0fSk7XG5cdH07XG5cblx0Rm9ybS5wcm90b3R5cGUuX19zdWJtaXRGb3JtX19SRUFDVF9IT1RfTE9BREVSX18gPSBmdW5jdGlvbiBfX3N1Ym1pdEZvcm1fX1JFQUNUX0hPVF9MT0FERVJfXyhkYXRhKSB7XG5cdFx0Y29uc29sZS5sb2coJ3N1Ym1pc3Npb24gc3VjY2VzcyEgd2l0aCB0aGlzIG9iamVjdCcsIGRhdGEpO1xuXHR9O1xuXG5cdEZvcm0ucHJvdG90eXBlLl9fbm90aWZ5Rm9ybUVycm9yX19SRUFDVF9IT1RfTE9BREVSX18gPSBmdW5jdGlvbiBfX25vdGlmeUZvcm1FcnJvcl9fUkVBQ1RfSE9UX0xPQURFUl9fKGRhdGEpIHtcblx0XHRjb25zb2xlLmVycm9yKCdGb3JtIGVycm9yOicsIGRhdGEpO1xuXHR9O1xuXG5cdEZvcm0ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0XHR2YXIgc3VibWl0U3R5bGUgPSBzdHlsZXMuc3VibWl0U3R5bGU7XG5cdFx0dmFyIHdvcmRzRXJyb3IgPSBlcnJvck1lc3NhZ2VzLndvcmRzRXJyb3IsXG5cdFx0ICAgIGVtYWlsRXJyb3IgPSBlcnJvck1lc3NhZ2VzLmVtYWlsRXJyb3IsXG5cdFx0ICAgIGFkZHJlc3NFcnJvciA9IGVycm9yTWVzc2FnZXMuYWRkcmVzc0Vycm9yLFxuXHRcdCAgICB6aXBjb2RlRXJyb3IgPSBlcnJvck1lc3NhZ2VzLnppcGNvZGVFcnJvcixcblx0XHQgICAgcGhvbmVudW1iZXJFcnJvciA9IGVycm9yTWVzc2FnZXMucGhvbmVudW1iZXJFcnJvcjtcblxuXG5cdFx0cmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRQYXBlcixcblx0XHRcdHsgY2xhc3NOYW1lOiAnZm9ybScsIHpEZXB0aDogMyB9LFxuXHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2gxJyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0J1NhbXBsZSBIZWFkZXInXG5cdFx0XHQpLFxuXHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0Rm9ybXN5LkZvcm0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRvblZhbGlkOiB0aGlzLmVuYWJsZUJ1dHRvbixcblx0XHRcdFx0XHRvbkludmFsaWQ6IHRoaXMuZGlzYWJsZUJ1dHRvbixcblx0XHRcdFx0XHRvblZhbGlkU3VibWl0OiB0aGlzLnN1Ym1pdEZvcm0sXG5cdFx0XHRcdFx0b25JbnZhbGlkU3VibWl0OiB0aGlzLm5vdGlmeUZvcm1FcnJvclxuXHRcdFx0XHR9LFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1zeVRleHQsIHtcblx0XHRcdFx0XHRuYW1lOiAnbmFtZScsXG5cdFx0XHRcdFx0dmFsaWRhdGlvbnM6ICdpc1dvcmRzJyxcblx0XHRcdFx0XHR2YWxpZGF0aW9uRXJyb3I6IHdvcmRzRXJyb3IsXG5cdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHRcdFx0aGludFRleHQ6ICdXaGF0IGlzIHlvdXIgR3VyZHdhcmFcXCdzIG5hbWU/Jyxcblx0XHRcdFx0XHRmbG9hdGluZ0xhYmVsVGV4dDogJ0d1cmR3YXJhIG5hbWUnXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1zeVRleHQsIHtcblx0XHRcdFx0XHRuYW1lOiAnYWRkcmVzc0xpbmUxJyxcblx0XHRcdFx0XHR2YWxpZGF0aW9uczogJ2lzQWRkcmVzcycsXG5cdFx0XHRcdFx0dmFsaWRhdGlvbkVycm9yOiBhZGRyZXNzRXJyb3IsXG5cdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHRcdFx0aGludFRleHQ6ICdXaGF0IGlzIHlvdXIgR3VyZHdhcmFcXCdzIGFkZHJlc3M/Jyxcblx0XHRcdFx0XHRmbG9hdGluZ0xhYmVsVGV4dDogJ0FkZHJlc3MgTGluZSAxJ1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChGb3Jtc3lUZXh0LCB7XG5cdFx0XHRcdFx0bmFtZTogJ2FkZHJlc3NMaW5lMicsXG5cdFx0XHRcdFx0dmFsaWRhdGlvbnM6ICdpc0FkZHJlc3MnLFxuXHRcdFx0XHRcdHZhbGlkYXRpb25FcnJvcjogYWRkcmVzc0Vycm9yLFxuXHRcdFx0XHRcdGhpbnRUZXh0OiAnV2hhdCBpcyB5b3VyIEd1cmR3YXJhXFwncyBhZGRyZXNzPycsXG5cdFx0XHRcdFx0ZmxvYXRpbmdMYWJlbFRleHQ6ICdBZGRyZXNzIExpbmUgMiAoaWYgbmVlZGVkKSdcblx0XHRcdFx0fSksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybXN5VGV4dCwge1xuXHRcdFx0XHRcdG5hbWU6ICdjaXR5Jyxcblx0XHRcdFx0XHR2YWxpZGF0aW9uczogJ2lzV29yZHMnLFxuXHRcdFx0XHRcdHZhbGlkYXRpb25FcnJvcjogd29yZHNFcnJvcixcblx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHRcdFx0XHRoaW50VGV4dDogJ1doYXQgaXMgeW91ciBHdXJkd2FyYVxcJ3MgY2l0eT8nLFxuXHRcdFx0XHRcdGZsb2F0aW5nTGFiZWxUZXh0OiAnQ2l0eSdcblx0XHRcdFx0fSksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybXN5VGV4dCwge1xuXHRcdFx0XHRcdG5hbWU6ICdzdGF0ZScsXG5cdFx0XHRcdFx0dmFsaWRhdGlvbnM6ICdpc1dvcmRzJyxcblx0XHRcdFx0XHR2YWxpZGF0aW9uRXJyb3I6IHdvcmRzRXJyb3IsXG5cdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHRcdFx0aGludFRleHQ6ICdXaGF0IGlzIHlvdXIgR3VyZHdhcmFcXCdzIHN0YXRlPycsXG5cdFx0XHRcdFx0ZmxvYXRpbmdMYWJlbFRleHQ6ICdTdGF0ZSdcblx0XHRcdFx0fSksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXV0b0NvbXBsZXRlLCB7XG5cdFx0XHRcdFx0ZmxvYXRpbmdMYWJlbFRleHQ6ICdDb3VudHJ5Jyxcblx0XHRcdFx0XHRmaWx0ZXI6IEF1dG9Db21wbGV0ZS5jYXNlSW5zZW5zaXRpdmVGaWx0ZXIsXG5cdFx0XHRcdFx0ZGF0YVNvdXJjZTogY291bnRyaWVzLFxuXHRcdFx0XHRcdGhpbnRUZXh0OiAnV2hhdCBpcyB5b3VyIEd1cmR3YXJhXFwncyBjb3VudHJ5Pydcblx0XHRcdFx0fSksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybXN5VGV4dCwge1xuXHRcdFx0XHRcdG5hbWU6ICd6aXBjb2RlJyxcblx0XHRcdFx0XHR2YWxpZGF0aW9uczogJ2lzWmlwY29kZScsXG5cdFx0XHRcdFx0dmFsaWRhdGlvbkVycm9yOiB6aXBjb2RlRXJyb3IsXG5cdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHRcdFx0aGludFRleHQ6ICdXaGF0IGlzIHlvdXIgR3VyZHdhcmFcXCdzIHppcGNvZGU/Jyxcblx0XHRcdFx0XHRmbG9hdGluZ0xhYmVsVGV4dDogJ1ppcGNvZGUnXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1zeVRleHQsIHtcblx0XHRcdFx0XHRuYW1lOiAncGhvbmVOdW1iZXInLFxuXHRcdFx0XHRcdHZhbGlkYXRpb25zOiAnaXNQaG9uZU51bWJlcicsXG5cdFx0XHRcdFx0dmFsaWRhdGlvbkVycm9yOiBwaG9uZW51bWJlckVycm9yLFxuXHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0XHRcdGhpbnRUZXh0OiAnV2hhdCBpcyB5b3VyIEd1cmR3YXJhXFwncyBudW1iZXI/Jyxcblx0XHRcdFx0XHRmbG9hdGluZ0xhYmVsVGV4dDogJ1Bob25lIG51bWJlcidcblx0XHRcdFx0fSksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybXN5VGV4dCwge1xuXHRcdFx0XHRcdG5hbWU6ICdlbWFpbCcsXG5cdFx0XHRcdFx0dmFsaWRhdGlvbnM6ICdpc0VtYWlsJyxcblx0XHRcdFx0XHR2YWxpZGF0aW9uRXJyb3I6IGVtYWlsRXJyb3IsXG5cdFx0XHRcdFx0aGludFRleHQ6ICdXaGF0IGlzIHlvdXIgR3VyZHdhcmFcXCdzIGVtYWlsPycsXG5cdFx0XHRcdFx0ZmxvYXRpbmdMYWJlbFRleHQ6ICdFbWFpbCdcblx0XHRcdFx0fSksXG5cdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmFpc2VkQnV0dG9uLCB7IHN0eWxlOiBzdWJtaXRTdHlsZSwgdHlwZTogJ3N1Ym1pdCcsIGxhYmVsOiAnU3VibWl0JywgZGlzYWJsZWQ6ICF0aGlzLnN0YXRlLmNhblN1Ym1pdCB9KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH07XG5cblx0cmV0dXJuIEZvcm07XG59KENvbXBvbmVudCk7XG5cbnZhciBfZGVmYXVsdCA9IEZvcm07XG5cblxuZXhwb3J0IGRlZmF1bHQgX2RlZmF1bHQ7XG4vKlxuXG5cdHByb3BzOiB7XG5cdFx0Y291bnRyaWVzOiBBcnJheTxDb3VudHJ5PlxuXHR9O1xuXG5cdFx0XHRcdFx0XHQ8Rm9ybXN5U2VsZWN0IG5hbWU9XCJjb3VudHJ5XCIgcmVxdWlyZWQgZmxvYXRpbmdMYWJlbFRleHQ9XCJDb3VudHJ5XCI+XG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jb3VudHJpZXMubWFwKChjb3VudHJ5LCBpbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8TWVudUl0ZW0gdmFsdWU9e2NvdW50cnkudmFsdWV9IHByaW1hcnlUZXh0PXtjb3VudHJ5LnZhbHVlfSAvPlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PC9Gb3Jtc3lTZWxlY3Q+XG4qL1xuXG4vLyA8cHJlPlxuLy8gXHQ8Y29kZT57SlNPTi5zdHJpbmdpZnkocHJlbG9hZCwgbnVsbCwgNCl9PC9jb2RlPlxuLy8gPC9wcmU+XG5cbjtcblxudmFyIF90ZW1wMiA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHR5cGVvZiBfX1JFQUNUX0hPVF9MT0FERVJfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihzdHlsZXMsICdzdHlsZXMnLCAnL1VzZXJzL2phY2tpZXRoaW5kL2dkYi1mcm9udGVuZC9jcmVhdGUtcmVhY3QtYXBwLXdpdGgtZmxvdy9jbGllbnQvY29tcG9uZW50cy9Gb3JtLmpzeCcpO1xuXG5cdF9fUkVBQ1RfSE9UX0xPQURFUl9fLnJlZ2lzdGVyKGNvdW50cmllcywgJ2NvdW50cmllcycsICcvVXNlcnMvamFja2lldGhpbmQvZ2RiLWZyb250ZW5kL2NyZWF0ZS1yZWFjdC1hcHAtd2l0aC1mbG93L2NsaWVudC9jb21wb25lbnRzL0Zvcm0uanN4Jyk7XG5cblx0X19SRUFDVF9IT1RfTE9BREVSX18ucmVnaXN0ZXIoZXJyb3JNZXNzYWdlcywgJ2Vycm9yTWVzc2FnZXMnLCAnL1VzZXJzL2phY2tpZXRoaW5kL2dkYi1mcm9udGVuZC9jcmVhdGUtcmVhY3QtYXBwLXdpdGgtZmxvdy9jbGllbnQvY29tcG9uZW50cy9Gb3JtLmpzeCcpO1xuXG5cdF9fUkVBQ1RfSE9UX0xPQURFUl9fLnJlZ2lzdGVyKEZvcm0sICdGb3JtJywgJy9Vc2Vycy9qYWNraWV0aGluZC9nZGItZnJvbnRlbmQvY3JlYXRlLXJlYWN0LWFwcC13aXRoLWZsb3cvY2xpZW50L2NvbXBvbmVudHMvRm9ybS5qc3gnKTtcblxuXHRfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihfZGVmYXVsdCwgJ2RlZmF1bHQnLCAnL1VzZXJzL2phY2tpZXRoaW5kL2dkYi1mcm9udGVuZC9jcmVhdGUtcmVhY3QtYXBwLXdpdGgtZmxvdy9jbGllbnQvY29tcG9uZW50cy9Gb3JtLmpzeCcpO1xufSgpO1xuXG47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jbGllbnQvY29tcG9uZW50cy9Gb3JtLmpzeFxuLy8gbW9kdWxlIGlkID0gLi9jbGllbnQvY29tcG9uZW50cy9Gb3JtLmpzeFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})