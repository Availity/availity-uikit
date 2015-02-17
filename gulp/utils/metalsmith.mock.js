var cheerio = require('cheerio');
var extname = require('path').extname;
var _ = require('lodash');
var Identity = require('fake-identity');
var moment = require('moment');
var faker = require('faker');

var mocksCache = [];

var createIdentity = function(mock) {

  // person
  mock.fullName = mock.firstName + ' ' + mock.lastName;
  mock.fullNameReverse = mock.lastName + ', ' + mock.firstName;
  mock.sexShort = mock.sex.charAt(0).toUpperCase();
  mock.dob = moment(mock.dateOfBirth).format('DD/MM/YYYY');
  mock.memberId = faker.finance.account(9);
  mock.customerId = faker.finance.account(10);
  mock.groupNumber = faker.finance.account(12);

  // address
  mock.addressLine1 = mock.street;
  mock.addressLine2 = mock.city + ' ' + mock.state + ', ' + mock.state + ' ' + mock.zipCode;

  // text
  mock.sentence = faker.lorem.sentence();
  mock.sentences = faker.lorem.sentences();
  mock.paragraph = faker.lorem.paragraph();

  // medical
  mock.diagnosisType = faker.finance.account(7);
  mock.diagnosisCode =
  mock.procedureCode = faker.finance.account(5);

  return mock;
};

module.exports = function() {

  return function(files, metalsmith, done) {
    setImmediate(done);

    _.each(files, function(file) {

      if (extname(file.path) !== '.html') {
        return;
      }

      var contents = file.contents.toString();
      var $ = cheerio.load(contents);

      var mocked = false;

      // get mock targets
      $('[data-mock]').each(function() {

        var $this = $(this);
        var mock = $this.data('mock') || '';

        var targets = mock.split(':');

        if(targets.length === 2) {

          mocked = true;

          var mockType = targets[0];
          var mockIndex = targets[1];

          var _mock = mocksCache[mockIndex] ? mocksCache[mockIndex] : createIdentity(Identity.generate());
          mocksCache[mockIndex] = _mock;

          $this.text(_mock[mockType]);

        }

      });

      if(mocked) {
        file.contents = new Buffer($.html());
      }

    });
  };

};


