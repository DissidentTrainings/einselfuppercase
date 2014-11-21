var einsElf = require('../index');
// tests go here
var assert = require("assert"); // node.js core module

describe('einsElfUpperCase', function(){
  describe('validate', function(){
    it('should return false if input is not defined', function(){
        var res = einsElf.validate();
        assert.equal(res, false);
    })
    it('should return false for an empty string', function(){
      var res = einsElf.validate("");
      assert.equal(res, false); 
    })
    it('should return false if input.length < 3',function(){
      var res = einsElf.validate('ab');
      assert.equal(res,false);
    })
  })
  describe('upperCaseEinsElf', function(){


      it('should add !!!11einseinself to input.upperCase', function(){

          var res=einsElf.upperCaseEinsElf('hallo');
          assert.equal(res, 'HALLO!!!11einseinself');

      })
  })
})
