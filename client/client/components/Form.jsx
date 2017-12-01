// @flow

import React, { Component } from 'react';
import Formsy from 'formsy-react-2';
import { Paper, RaisedButton, MenuItem, AutoComplete } from 'material-ui';
import { FormsySelect, FormsyText, FormsyAutoComplete } from 'formsy-mui';
import validationRules from 'formsy-react-2/lib/validationRules';

const styles = {
	paperStyle: {
		width: 300,
		margin: 'auto',
		padding: 20,
		display: 'inline-block'
	},
	switchStyle: {
		marginBottom: 16
	},
	submitStyle: {
		marginTop: 32,
		display: 'block'
	},
	underlineStyle: {
		borderColor: '#5BADDE'
	},
	floatingLabelFocusStyle: {
		color: '#5BADDE'
	},
	formInputStyle: {
		width: '100%',
		fontSize: '14px',
		lineHeight: '14px'
	}
};
const countries = [
	'United States',
	'Canada',
	'United Kingdom',
	'Australia',
	'India',
	'Pakistan',
	'Afghanistan',
	'Albania',
	'Algeria',
	'American Samoa',
	'Andorra',
	'Angola',
	'Anguilla',
	'Antarctica',
	'Antigua and/or Barbuda',
	'Argentina',
	'Armenia',
	'Aruba',
	'Austria',
	'Azerbaijan',
	'Bahamas',
	'Bahrain',
	'Bangladesh',
	'Barbados',
	'Belarus',
	'Belgium',
	'Belize',
	'Benin',
	'Bermuda',
	'Bhutan',
	'Bolivia',
	'Bosnia and Herzegovina',
	'Botswana',
	'Bouvet Island',
	'Brazil',
	'British lndian Ocean Territory',
	'Brunei Darussalam',
	'Bulgaria',
	'Burkina Faso',
	'Burundi',
	'Cambodia',
	'Cameroon',
	'Cape Verde',
	'Cayman Islands',
	'Central African Republic',
	'Chad',
	'Chile',
	'China',
	'Christmas Island',
	'Cocos (Keeling) Islands',
	'Colombia',
	'Comoros',
	'Congo',
	'Cook Islands',
	'Costa Rica',
	'Croatia (Hrvatska)',
	'Cuba',
	'Cyprus',
	'Czech Republic',
	'Denmark',
	'Djibouti',
	'Dominica',
	'Dominican Republic',
	'East Timor',
	'Ecudaor',
	'Egypt',
	'El Salvador',
	'Equatorial Guinea',
	'Eritrea',
	'Estonia',
	'Ethiopia',
	'Falkland Islands (Malvinas)',
	'Faroe Islands',
	'Fiji',
	'Finland',
	'France',
	'France, Metropolitan',
	'French Guiana',
	'French Polynesia',
	'French Southern Territories',
	'Gabon',
	'Gambia',
	'Georgia',
	'Germany',
	'Ghana',
	'Gibraltar',
	'Greece',
	'Greenland',
	'Grenada',
	'Guadeloupe',
	'Guam',
	'Guatemala',
	'Guinea',
	'Guinea-Bissau',
	'Guyana',
	'Haiti',
	'Heard and Mc Donald Islands',
	'Honduras',
	'Hong Kong',
	'Hungary',
	'Iceland',
	'Indonesia',
	'Iran (Islamic Republic of)',
	'Iraq',
	'Ireland',
	'Israel',
	'Italy',
	'Ivory Coast',
	'Jamaica',
	'Japan',
	'Jordan',
	'Kazakhstan',
	'Kenya',
	'Kiribati',
	"Korea, Democratic People's Republic of",
	'Korea, Republic of',
	'Kuwait',
	'Kyrgyzstan',
	"Lao People's Democratic Republic",
	'Latvia',
	'Lebanon',
	'Lesotho',
	'Liberia',
	'Libyan Arab Jamahiriya',
	'Liechtenstein',
	'Lithuania',
	'Luxembourg',
	'Macau',
	'Macedonia',
	'Madagascar',
	'Malawi',
	'Malaysia',
	'Maldives',
	'Mali',
	'Malta',
	'Marshall Islands',
	'Martinique',
	'Mauritania',
	'Mauritius',
	'Mayotte',
	'Mexico',
	'Micronesia, Federated States of',
	'Moldova, Republic of',
	'Monaco',
	'Mongolia',
	'Montserrat',
	'Morocco',
	'Mozambique',
	'Myanmar',
	'Namibia',
	'Nauru',
	'Nepal',
	'Netherlands',
	'Netherlands Antilles',
	'New Caledonia',
	'New Zealand',
	'Nicaragua',
	'Niger',
	'Nigeria',
	'Niue',
	'Norfork Island',
	'Northern Mariana Islands',
	'Norway',
	'Oman',
	'Palau',
	'Panama',
	'Papua New Guinea',
	'Paraguay',
	'Peru',
	'Philippines',
	'Pitcairn',
	'Poland',
	'Portugal',
	'Puerto Rico',
	'Qatar',
	'Reunion',
	'Romania',
	'Russian Federation',
	'Rwanda',
	'Saint Kitts and Nevis',
	'Saint Lucia',
	'Saint Vincent and the Grenadines',
	'Samoa',
	'San Marino',
	'Sao Tome and Principe',
	'Saudi Arabia',
	'Senegal',
	'Seychelles',
	'Sierra Leone',
	'Singapore',
	'Slovakia',
	'Slovenia',
	'Solomon Islands',
	'Somalia',
	'South Africa',
	'South Georgia South Sandwich Islands',
	'Spain',
	'Sri Lanka',
	'St. Helena',
	'St. Pierre and Miquelon',
	'Sudan',
	'Suriname',
	'Svalbarn and Jan Mayen Islands',
	'Swaziland',
	'Sweden',
	'Switzerland',
	'Syrian Arab Republic',
	'Taiwan',
	'Tajikistan',
	'Tanzania, United Republic of',
	'Thailand',
	'Togo',
	'Tokelau',
	'Tonga',
	'Trinidad and Tobago',
	'Tunisia',
	'Turkey',
	'Turkmenistan',
	'Turks and Caicos Islands',
	'Tuvalu',
	'Uganda',
	'Ukraine',
	'United Arab Emirates',
	'USA',
	'United States minor outlying islands',
	'Uruguay',
	'Uzbekistan',
	'Vanuatu',
	'Vatican City State',
	'Venezuela',
	'Vietnam',
	'Virigan Islands (British)',
	'Virgin Islands (U.S.)',
	'Wallis and Futuna Islands',
	'Western Sahara',
	'Yemen',
	'Yugoslavia',
	'Zaire',
	'Zambia',
	'Zimbabwe'
];
const errorMessages = {
	wordsError: 'Please only use letters',
	numericError: 'Please provide a number',
	emailError: 'Please provide a valid email',
	addressError: 'Please provide a valid address',
	zipcodeError: 'Please provide a valid zipcode',
	phonenumberError: 'Please provide a valid phone number',
	countryError: 'Please provide a valid country'
};

Formsy.addValidationRule('isAddress', (values, value) => {
	return validationRules.matchRegexp(
		values,
		value,
		/\d+(\s+\w+){1,}\s+(?:st(?:\.|reet)?|dr(?:\.|ive)?|pl(?:\.|ace)?|ave(?:\.|nue)?|rd|road|lane|drive|way|court|plaza|square|run|parkway|point|pike|square|driveway|trace|park|terrace|blvd)/
	);
});
Formsy.addValidationRule('isZipcode', (values, value) => {
	return validationRules.matchRegexp(values, value, /^[0-9]{5}(?:-[0-9]{4})?$/);
});
Formsy.addValidationRule('isPhoneNumber', (values, value) => {
	return validationRules.matchRegexp(
		values,
		value,
		/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i
	);
});
Formsy.addValidationRule('isCountry', (values, value) => {
	return validationRules.matchRegexp(values, value, /^[a-z\u00C0-\u02AB'´`]+\.?\s([a-z\u00C0-\u02AB'´`]+\.?\s?)+$/i);
});

class Form extends Component {
	state = {
		formData: {
			name: '',
			addressLine1: '',
			addressLine2: '',
			city: '',
			state: '',
			zipcode: '',
			country: '',
			phoneNumber: '',
			email: ''
		},
		canSubmit: false
	};

	enableButton = () => {
		this.setState({
			canSubmit: true
		});
	};

	disableButton = () => {
		this.setState({
			canSubmit: false
		});
	};

	submitForm = (data: Object, resetForm: Function) => {
		console.log('submission success! with this object', data);
		this.setState({
			formData: {
				name: data.name,
				addressLine1: data.addressLine1,
				addressLine2: data.addressLine2,
				city: data.city,
				state: data.state,
				zipcode: data.zipcode,
				country: data.country,
				phoneNumber: data.phoneNumber,
				email: data.email
			}
		});

		resetForm();
	};

	notifyFormError = (data: JSON) => {
		console.error('Form error:', data);
	};

	render() {
		const { submitStyle, underlineStyle, floatingLabelFocusStyle, formInputStyle } = styles;
		const { wordsError, emailError, addressError, zipcodeError, phonenumberError } = errorMessages;

		return (
			<Paper className="form" zDepth={5}>
				<h1 className="headerTitle ">Gurdwara Database</h1>
				<Formsy.Form
					onValid={this.enableButton}
					onInvalid={this.disableButton}
					onValidSubmit={this.submitForm}
					onInvalidSubmit={this.notifyFormError}
				>
					<FormsyText
						style={formInputStyle}
						name="name"
						validations="isWords"
						validationError={wordsError}
						required
						hintText="What is your Gurdwara's name?"
						floatingLabelText="Gurdwara name"
						underlineFocusStyle={underlineStyle}
						floatingLabelFocusStyle={floatingLabelFocusStyle}
					/>

					<FormsyText
						style={formInputStyle}
						name="addressLine1"
						validations="isAddress"
						validationError={addressError}
						required
						hintText="What is your Gurdwara's address?"
						floatingLabelText="Address Line 1"
						underlineFocusStyle={underlineStyle}
						floatingLabelFocusStyle={floatingLabelFocusStyle}
					/>
					<FormsyText
						style={formInputStyle}
						name="addressLine2"
						validations="isAddress"
						validationError={addressError}
						hintText="What is your Gurdwara's address?"
						floatingLabelText="Address Line 2 (if needed)"
						underlineFocusStyle={underlineStyle}
						floatingLabelFocusStyle={floatingLabelFocusStyle}
					/>
					<FormsyText
						style={formInputStyle}
						name="city"
						validations="isWords"
						validationError={wordsError}
						required
						hintText="What is your Gurdwara's city?"
						floatingLabelText="City"
						underlineFocusStyle={underlineStyle}
						floatingLabelFocusStyle={floatingLabelFocusStyle}
					/>
					<FormsyText
						style={formInputStyle}
						name="state"
						validations="isWords"
						validationError={wordsError}
						required
						hintText="What is your Gurdwara's state?"
						floatingLabelText="State"
						underlineFocusStyle={underlineStyle}
						floatingLabelFocusStyle={floatingLabelFocusStyle}
					/>
					<AutoComplete
						openOnFocus={true}
						maxSearchResults={6}
						textFieldStyle={formInputStyle}
						style={formInputStyle}
						floatingLabelText="Country"
						filter={AutoComplete.caseInsensitiveFilter}
						dataSource={countries}
						hintText="What is your Gurdwara's country?"
						underlineFocusStyle={underlineStyle}
						floatingLabelFocusStyle={floatingLabelFocusStyle}
					/>
					<FormsyText
						style={formInputStyle}
						name="zipcode"
						validations="isZipcode"
						validationError={zipcodeError}
						required
						hintText="What is your Gurdwara's zipcode?"
						floatingLabelText="Zipcode"
						underlineFocusStyle={underlineStyle}
						floatingLabelFocusStyle={floatingLabelFocusStyle}
					/>
					<FormsyText
						style={formInputStyle}
						name="phoneNumber"
						validations="isPhoneNumber"
						validationError={phonenumberError}
						required
						hintText="What is your Gurdwara's number?"
						floatingLabelText="Phone number"
						underlineFocusStyle={underlineStyle}
						floatingLabelFocusStyle={floatingLabelFocusStyle}
					/>
					<FormsyText
						style={formInputStyle}
						name="email"
						validations="isEmail"
						validationError={emailError}
						hintText="What is your Gurdwara's email?"
						floatingLabelText="Email (optional)"
						underlineFocusStyle={underlineStyle}
						floatingLabelFocusStyle={floatingLabelFocusStyle}
					/>
					<RaisedButton style={submitStyle} type="submit" label="Submit" disabled={!this.state.canSubmit} />
				</Formsy.Form>
			</Paper>
		);
	}
}

export default Form;
/*
console.log('setting json to state', this.state.formData);
	props: {
		countries: Array<Country>
	};

						<FormsySelect name="country" required floatingLabelText="Country">
						{this.props.countries.map((country, index) => (
							<MenuItem value={country.value} primaryText={country.value} />
						))}
					</FormsySelect>
*/

// <pre>
// 	<code>{JSON.stringify(preload, null, 4)}</code>
// </pre>
