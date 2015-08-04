/*globals describe, before, it*/
var chai = require('chai');
var StyleStats = require('stylestats');
var path = require('path');
var _ = require('lodash');
var expect = chai.expect;

describe('CSS', function () {

  var statsUIKit = new StyleStats(path.join(__dirname, '../', 'dist/css/availity-uikit.css'));
  var statsExtras = new StyleStats(path.join(__dirname, '../', 'dist/css/availity-uikit-extras.css'));

  var statsUIKitResult;
  var statsExtrasResult;

  before(function(done) {

    var finished = _.after(2, function() {
      done();
    });

    statsUIKit.parse(function(error, result) {
      if (error) {
        throw error;
      }
      statsUIKitResult = result;
      finished();
    });

    statsExtras.parse(function(error, result) {
      if (error) {
        throw error;
      }
      statsExtrasResult = result;
      finished();
    });
  });

  it('should have selector count < 4095', function () {
    expect(statsUIKitResult.selectors).to.be.below(4095);
    expect(statsExtrasResult.selectors).to.be.below(4095);
  });

});
