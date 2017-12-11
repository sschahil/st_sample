let mongoose = require("mongoose");
let Gurdwara = require("../server/api/gurdwara/gurdwaraModel");

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server/server");
let should = chai.should();

chai.use(chaiHttp);

describe("Gurdwaras", () => {
	beforeEach(done => {
		//Before each test we empty the database
		Gurdwara.remove({}, err => {
			done();
		});
	});

	// Test the /GET route
	describe("/GET Gurdwara", () => {
		it("should GET all the books", done => {
			chai
				.request(server)
				.get("/api/gurdwaras")
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a("array");
					res.body.length.should.be.eql(0);
					done();
				});
		});
	});

	// Test the /POST route
	describe("/POST Gurdwara", () => {
		it("Should Post a Gurdwara", done => {
			let gurdwara = {
				name: "Test Gurdwara",
				address: "Test Address",
				city: "Test City",
				state: "Test State",
				zipcode: 12345,
				country: "Test Country",
				phoneNumber: 1234567789,
				email: "test@email.com"
			};
			chai
				.request(server)
				.post("/api/gurdwaras")
				.send(gurdwara)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a("object");
					res.body.should.have
						.property("message")
						.eql("Gurdwara successfully added!");
					res.body.gurdwara.should.have.property("name");
					res.body.gurdwara.should.have.property("address");
					res.body.gurdwara.should.have.property("city");
					res.body.gurdwara.should.have.property("state");
					res.body.gurdwara.should.have.property("zipcode");
					res.body.gurdwara.should.have.property("country");
					res.body.gurdwara.should.have.property("phoneNumber");
					res.body.gurdwara.should.have.property("email");
					done();
				});
		});
	});

	// Test the /Get/:id rout
	describe("/GET/:id Gurdwara", () => {
		it("Should Get a gurdwara by the given id", done => {
			let gurdwara = new Gurdwara({
				name: "Test Gurdwara 0",
				address: "Test Address 0",
				city: "Test City 0",
				state: "Test State 0",
				zipcode: 12345,
				country: "Test Country 0",
				phoneNumber: 1234567789,
				email: "test0@email.com"
			});
			gurdwara.save((err, gurdwara) => {
				chai
					.request(server)
					.get("/api/gurdwaras/" + gurdwara.id)
					.send(gurdwara)
					.end((err, res) => {
						res.should.have.status(200);
						res.body.should.be.a("object");
						res.body.should.have.property("name");
						res.body.should.have.property("address");
						res.body.should.have.property("city");
						res.body.should.have.property("state");
						res.body.should.have.property("zipcode");
						res.body.should.have.property("country");
						res.body.should.have.property("phoneNumber");
						res.body.should.have.property("email");
						res.body.should.have.property("_id").eql(gurdwara.id);
						done();
					});
			});
		});
	});

	// Test the /PUT/:id route
	describe("/PUT/:id Gurdwara", () => {
		it("Should UPDATE a Gurdwara given the id", done => {
			let gurdwara = new Gurdwara({
				name: "Test Gurdwara 1",
				address: "Test Address 1",
				city: "Test City 1",
				state: "Test State 1",
				zipcode: 12345,
				country: "Test Country 1",
				phoneNumber: 1234567789,
				email: "test1@email.com"
			});
			gurdwara.save((err, gurdwara) => {
				chai
					.request(server)
					.put("/api/gurdwaras/" + gurdwara.id)
					.send({
						name: "Test Gurdwara 1",
						address: "Test Address 1",
						city: "Test City 1",
						state: "Test State 1",
						zipcode: 12345,
						country: "USA",
						phoneNumber: 1234567789,
						email: "test1@email.com"
					})
					.end((err, res) => {
						res.should.have.status(200);
						res.body.should.be.a("object");
						res.body.should.have
							.property("message")
							.eql("Gurdwara updated!");
						res.body.gurdwara.should.have
							.property("country")
							.eql("USA");
						done();
					});
			});
		});
	});

	// Test the /DELETE/:id route
	describe("/DELETE/:id Gurdwara", () => {
		it("Should DELETE a Gurdwara given the id", done => {
			let gurdwara = new Gurdwara({
				name: "Test Gurdwara 1",
				address: "Test Address 1",
				city: "Test City 1",
				state: "Test State 1",
				zipcode: 12345,
				country: "Test Country 1",
				phoneNumber: 1234567789,
				email: "test1@email.com"
			});
			gurdwara.save((err, gurdwara) => {
				chai
					.request(server)
					.delete("/api/gurdwaras/" + gurdwara.id)
					.end((err, res) => {
						res.should.have.status(200);
						res.body.should.have
							.property("message")
							.eql("Gurdwara successfully deleted!");
						done();
					});
			});
		});
	});
});
