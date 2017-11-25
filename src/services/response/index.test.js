import * as response from '.'

// let res;

let supertest = require('supertest');
let chai = require('chai');
let should = chai.should();

let server = supertest.agent("http://localhost:9000");



describe('Buses', function() {

  describe('/GET buses', function() {
    it('it should GET all the buses', function(done) {
      server
      .get('/buses')
      .expect(200)
      .end(function(err, res) {
        res.body.content.should.be.a('array');
        done();
      });
    });
  });

  describe('/POST bus', function() {
    it('it should POST a bus', function(done) {
      let bus = {
        id : 1001,
        bus_id : 1001,
        provider_id : 2001,
        bus_number : "WP NA - 4235",
        bus_type : "AC",
        driver_name : "Test Name 223",
        number_of_seats : 50,
        route_id : 3001
      };
      server
        .post('/buses')
        .send(bus)
        .expect(201)
        .end(function(err, res) {
          res.body.should.be.a('object');
          res.body.content.should.have.property('bus_id');
          res.body.content.should.have.property('provider_id');
          res.body.content.should.have.property('bus_number');
          res.body.content.should.have.property('bus_type');
          res.body.content.should.have.property('driver_name');
          res.body.content.should.have.property('number_of_seats');
          res.body.content.should.have.property('route_id');
          done();
        });
    });

  });

  describe('/GET:id bus', function() {
    it('it should GET a bus by given id', function(done) {
      let bus = {
        id : 3,
        bus_id : 1001,
        provider_id : 2001,
        bus_number : "WP NA - 4235",
        bus_type : "AC",
        driver_name : "Test Name 223",
        number_of_seats : 50,
        route_id : 3001
      };
      server
        .get('/buses/' + bus.id)
        .expect(200)
        .end(function(err, res) {
          res.body.content.should.be.a('array');
          res.body.content.should.be.a('array').with.lengthOf(1);
          res.body.content[0].should.have.property('id').eql(bus.id);
          done();
        });
      });

  });

});

describe('Routes', function() {

      describe('/GET route', function() {
        it('it should GET all the routes', function(done) {
          server
            .get('/routes')
            .expect(200)
            .end(function(err, res) {
              res.body.content.should.be.a('array');
              done();
            });
        });
      });

      describe('/POST route', function() {
        it('it should POST a route', function(done) {
          let route = {
            id : 1001,
            route_id : 1001,
            route_name : "Kandy - Colombo",
            stopping_count : 30,
            start : "Kandy-Colombo Intercity Bus Station",
            end : "Colombo Central Bus Stand"
          }
          server
            .post('/routes')
            .send(route)
            .expect(201)
            .end(function(err, res) {
              res.body.should.be.a('object');
              res.body.content.should.have.property('route_id');
              res.body.content.should.have.property('route_name');
              res.body.content.should.have.property('stopping_count');
              res.body.content.should.have.property('start');
              res.body.content.should.have.property('end');
              done();
            });
        });

      });

      describe('/GET:id route', function() {
        it('it should GET a route by given id', function(done) {
          let route = {
            id : 3,
            route_id : 1001,
            route_name : "Kandy - Colombo",
            stopping_count : 30,
            start : "Kandy-Colombo Intercity Bus Station",
            end : "Colombo Central Bus Stand"
          }
          server
            .get('/routes/' + route.id)
            .expect(200)
            .end(function(err, res) {
              res.body.content.should.be.a('array');
              res.body.content.should.be.a('array').with.lengthOf(1);
              done();
            });
          });

      });

});



describe('Trips', function() {

      describe('/GET trip', function() {
        it('it should GET all the trips', function(done) {
          server
            .get('/trips')
            .expect(200)
            .end(function(err, res) {
              res.body.content.should.be.a('array');
              done();
            });
        });
      });

      describe('/POST trip', function() {
        it('it should POST a trip', function(done) {
          let trip = {
            id : 1001,
            bus_id : 1001,
            route_id : 10001,
            rate_per_km : 10,
            passenger_count : 350,
            total_income : 25000
          }
          server
            .post('/trips')
            .send(trip)
            .expect(201)
            .end(function(err, res) {
              res.body.should.be.a('object');
              res.body.content.should.have.property('bus_id');
              res.body.content.should.have.property('route_id');
              res.body.content.should.have.property('rate_per_km');
              res.body.content.should.have.property('passenger_count');
              res.body.content.should.have.property('total_income');
              done();
            });
        });

      });

      describe('/GET:id trip', function() {
        it('it should GET a trip by given id', function(done) {
          let trip = {
            id : 3,
            bus_id : 1001,
            route_id : 10001,
            rate_per_km : 10,
            passenger_count : 350,
            total_income : 25000
          }
          server
            .get('/trips/' + trip.id)
            .expect(200)
            .end(function(err, res) {
              res.body.content.should.be.a('array');
              res.body.content.should.be.a('array').with.lengthOf(1);
              done();
            });
          });

      });

});




describe('Passengers', function() {

      describe('/GET passenger', function() {
        it('it should GET all the passengers', function(done) {
          server
            .get('/passengers')
            .expect(200)
            .end(function(err, res) {
              res.body.content.should.be.a('array');
              done();
            });
        });
      });

      describe('/POST passenger', function() {
        it('it should POST a passenger', function(done) {

          let passenger = {
            id : 1001,
            passenger_id: Math.random(),
            card_number: 77889465,
            name: "Ranura Dissanayake",
            dob: "1989/8/1",
            addr: "Rajagiriya,Colombo",
            contact: "071-7898768",
            type: "local",
            nic_number: "7473473864736V"
          }
          server
            .post('/passengers')
            .send(passenger)
            .expect(201)
            .end(function(err, res) {
              res.body.should.be.a('object');
              res.body.content.should.have.property('passenger_id');
              res.body.content.should.have.property('card_number');
              res.body.content.should.have.property('name');
              res.body.content.should.have.property('dob');
              res.body.content.should.have.property('addr');
              res.body.content.should.have.property('contact');
              done();
            });
        });

      });

      describe('/GET:id passenger', function() {
        it('it should GET a passenger by given id', function(done) {

          let passenger = {
            id: "5a18ed7fe1bb387c840b5bf9",
            passenger_id: Math.random(),
            card_number: 77889465,
            name: "Ranura Dissanayake",
            dob: "1989/8/1",
            addr: "Rajagiriya,Colombo",
            contact: "071-7898768",
            type: "local",
            nic_number: "7473473864736V"
          }
          server
            .get('/passengers/' + passenger.id)
            .expect(200)
            .end(function(err, res) {
              res.body.content.should.be.a('object');
              done();
            });
          });

      });

});




describe('Cards', function() {

      describe('/GET card', function() {
        it('it should GET all the cards', function(done) {
          server
            .get('/cards')
            .expect(200)
            .end(function(err, res) {
              res.body.content.should.be.a('array');
              done();
            });
        });
      });

      describe('/POST card', function() {
        it('it should POST a card', function(done) {
          let card = {
            id : 1001,
            card_number: Math.random(),
            account_number: 10001,
            activation_date: "2017/11/10",
            expiry_date: "2018/5/2",
            status: "active",
            balance: 0,
            type: "temporary"
          }
          server
            .post('/cards')
            .send(card)
            .expect(201)
            .end(function(err, res) {
              res.body.should.be.a('object');
              res.body.content.should.have.property('card_number');
              res.body.content.should.have.property('activation_date');
              done();
            });
        });

      });

      describe('/GET:id card', function() {
        it('it should GET a card by given id', function(done) {
          let card = {
            id: "5a18f153f1aee77d9ec84080",
            card_number: Math.random(),
            account_number: 10001,
            activation_date: "2017/11/10",
            expiry_date: "2018/5/2",
            status: "active",
            balance: 0,
            type: "temporary"
          }
          server
            .get('/cards/' + card.id)
            .expect(200)
            .end(function(err, res) {
              // res.body.content.should.be.a('object');
              done();
            });
          });

      });

});



