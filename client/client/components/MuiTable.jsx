// @flow

import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { Paper } from 'material-ui';

const styles = {
	wrapperStyle: {
		borderRadius: 5
	}
};

class MuiTable extends Component {
	state = {
		showCheckboxes: false,
		selected: [0]
	};
	props: {
		gurdwaras: Array<Gurdwara>,
		tableHeaders: Array<TableHeader>
	};

	isSelected = (index: number) => {
		return this.state.selected.indexOf(index) !== -1;
	};

	handleRowSelection = (selectedRows: Array<mixed>) => {
		this.setState({
			selected: selectedRows
		});
	};

	render() {
		const { wrapperStyle } = styles;
		return (
			<Paper className="table" zDepth={5}>
				<Table wrapperStyle={wrapperStyle} onRowSelection={this.handleRowSelection}>
					<TableHeader
						displaySelectAll={this.state.showCheckboxes}
						adjustForCheckbox={this.state.showCheckboxes}
					>
						<TableRow>
							{this.props.tableHeaders.map(tableHeader => (
								<TableHeaderColumn key={tableHeader.header}>{tableHeader.header}</TableHeaderColumn>
							))}
						</TableRow>
					</TableHeader>
					<TableBody displayRowCheckbox={this.state.showCheckboxes}>
						{this.props.gurdwaras.map((gurdwara, index) => (
							<TableRow key={gurdwara.ID} selected={this.isSelected(index)}>
								<TableRowColumn>{gurdwara.name}</TableRowColumn>
								<TableRowColumn>{gurdwara.address}</TableRowColumn>
								<TableRowColumn>{gurdwara.city}</TableRowColumn>
								<TableRowColumn>{gurdwara.state}</TableRowColumn>
								<TableRowColumn>{gurdwara.country}</TableRowColumn>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Paper>
		);
	}
}

export default MuiTable;

// <pre>
// 	<code>{JSON.stringify(preload, null, 4)}</code>
// </pre>
