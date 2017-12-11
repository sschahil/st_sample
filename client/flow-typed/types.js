// @flow
export type Gurdwara = {
	ID: string,
	name: string,
	addressLine1: string,
	addressLine2: string,
	city: string,
	state: string,
	country: string,
	zipcode: string,
	phoneNumber: string,
	email: string
};

export type Header = {
	Name: string,
	Address: string,
	City: string,
	State: string,
	Country: string
};

export type Country = { key: string, value: string };

declare var module: {
	hot: {
		accept(path: string, callback: () => void): void
	}
};
