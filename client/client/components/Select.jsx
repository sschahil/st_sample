import React, { Component } from 'react';
import SuperSelectField from 'material-ui-superselectfield';
import FlatButton from 'material-ui/FlatButton/FlatButton';
import Chip from 'material-ui/Chip/Chip';
import countries from '../assets/countries';
import flagIconCSSCountryCodes from '../assets/flagIconCSSCountryCodes';
import FontIcon from 'material-ui/FontIcon/FontIcon';
import Avatar from 'material-ui/Avatar/Avatar';
import { teal500, pink500, teal200, pink200, yellow500, yellow200, deepPurple500 } from 'material-ui/styles/colors';
import '../assets/flag-icon.css';

const containerStyle = {
	padding: 40,
	paddingBottom: 0,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	flex: 1
};
const menuItemStyle = {
	whiteSpace: 'normal',
	display: 'flex',
	justifyContent: 'space-between',
	lineHeight: 'normal'
};

const displayState = state =>
	state.length ? [...state].map(({ value, label }) => label || value).join(', ') : 'empty state';

class CodeExample extends Component {
	state = {
		state31: [
			{
				label: 'France',
				value: {
					'English short name': 'France',
					'French short name': 'France (la)',
					'Alpha-2 code': 'FR',
					'Alpha-3 code': 'FRA',
					Numeric: 250,
					Capital: 'Paris',
					Continent: 4
				}
			}
		]
	};

	handleSelection = (values, name) => {
		this.setState({
			[name]: values
		});
	};

	// advice: use one of <option>s' default height as min-height

	render() {
		const { state31 } = this.state;
		const countriesNodeList = countries.map(country => {
			const countryCode = country['Alpha-2 code'].toLowerCase();
			const countryLabel = country['English short name'];
			if (!flagIconCSSCountryCodes.includes(countryCode)) return null;

			return (
				<div key={countryCode} value={country} label={countryLabel} style={menuItemStyle}>
					<div style={{ marginRight: 10 }}>
						<span style={{ fontWeight: 'bold' }}>{countryLabel}</span>
						<br />
						<span style={{ fontSize: 12 }}>{country.Capital}</span>
					</div>
					<FontIcon className={`flag-icon flag-icon-${countryCode}`} />
				</div>
			);
		});

		return (
			<section style={containerStyle}>
				<fieldset style={{ marginBottom: 40 }}>
					<legend>Selected values</legend>
					<div>State 31: {displayState(state31)}</div>
				</fieldset>

				<div style={{ display: 'flex', alignItems: 'flex-end' }}>
					<SuperSelectField
						name="state31"
						multiple
						hintText="Complex example"
						onChange={this.handleSelection}
						elementHeight={58}
						style={{ width: 300, marginTop: 20, marginRight: 40 }}
					>
						{countriesNodeList}
					</SuperSelectField>
				</div>
			</section>
		);
	}
}

export default CodeExample;
/*
    const CustomFloatingLabel = (
      <span>
        Custom floatingLabel<br />
        <span style={{ color: deepPurple500, fontWeight: 'bold', fontStyle: 'italic' }}>state32</span>
      </span>
    );


*/
