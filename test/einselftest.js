var einsElf = require('../index');
// tests go here
var assert = require("assert"); // node.js core module

describe('einsElffUpperCase', function(){
  describe('validate', function(){
    it('should return false for an empty string', function(){
      var res = einsElf.validate("");
      assert.equal(res, false); 
    })
    it('the lengths of input string at least 3 characters',function(){
      var res = einsElf.validate('ab');
      assert.equal(res,false);
    })
  })
})
