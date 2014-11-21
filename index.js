// code goes here


var einsElf = {
  validate: function(input) {
    
    if (typeof input == 'undefined'){
        return false;
    }

    if (input == ""){
      return false;
    };
    
    if (input.length < 3){
      return false; 
    };


    
    return true;
  },
  upperCaseEinsElf: function() {}
};

module.exports = einsElf;
  