'use strict';


/**
 * Get the details of a R.U
 * 
 *
 * id String The RU id.
 * returns List
 **/
exports.getRUDetails = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "estLeDernierBac" : true,
  "name" : "poulet",
  "ingredients" : [ {
    "alergen" : [ "lactose", "fruits à coques" ],
    "name" : "name"
  }, {
    "alergen" : [ "lactose", "fruits à coques" ],
    "name" : "name"
  } ],
  "type" : "Viande",
  "accompagnements" : [ {
    "name" : "name",
    "ingredients" : [ {
      "alergen" : [ "lactose", "fruits à coques" ],
      "name" : "name"
    }, {
      "alergen" : [ "lactose", "fruits à coques" ],
      "name" : "name"
    } ]
  }, {
    "name" : "name",
    "ingredients" : [ {
      "alergen" : [ "lactose", "fruits à coques" ],
      "name" : "name"
    }, {
      "alergen" : [ "lactose", "fruits à coques" ],
      "name" : "name"
    } ]
  } ]
}, {
  "estLeDernierBac" : true,
  "name" : "poulet",
  "ingredients" : [ {
    "alergen" : [ "lactose", "fruits à coques" ],
    "name" : "name"
  }, {
    "alergen" : [ "lactose", "fruits à coques" ],
    "name" : "name"
  } ],
  "type" : "Viande",
  "accompagnements" : [ {
    "name" : "name",
    "ingredients" : [ {
      "alergen" : [ "lactose", "fruits à coques" ],
      "name" : "name"
    }, {
      "alergen" : [ "lactose", "fruits à coques" ],
      "name" : "name"
    } ]
  }, {
    "name" : "name",
    "ingredients" : [ {
      "alergen" : [ "lactose", "fruits à coques" ],
      "name" : "name"
    }, {
      "alergen" : [ "lactose", "fruits à coques" ],
      "name" : "name"
    } ]
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all the R.U
 * 
 *
 * returns List
 **/
exports.getRUS = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "RU 1",
  "plats" : [ {
    "estLeDernierBac" : true,
    "name" : "poulet",
    "ingredients" : [ {
      "alergen" : [ "lactose", "fruits à coques" ],
      "name" : "name"
    }, {
      "alergen" : [ "lactose", "fruits à coques" ],
      "name" : "name"
    } ],
    "type" : "Viande",
    "accompagnements" : [ {
      "name" : "name",
      "ingredients" : [ {
        "alergen" : [ "lactose", "fruits à coques" ],
        "name" : "name"
      }, {
        "alergen" : [ "lactose", "fruits à coques" ],
        "name" : "name"
      } ]
    }, {
      "name" : "name",
      "ingredients" : [ {
        "alergen" : [ "lactose", "fruits à coques" ],
        "name" : "name"
      }, {
        "alergen" : [ "lactose", "fruits à coques" ],
        "name" : "name"
      } ]
    } ]
  }, {
    "estLeDernierBac" : true,
    "name" : "poulet",
    "ingredients" : [ {
      "alergen" : [ "lactose", "fruits à coques" ],
      "name" : "name"
    }, {
      "alergen" : [ "lactose", "fruits à coques" ],
      "name" : "name"
    } ],
    "type" : "Viande",
    "accompagnements" : [ {
      "name" : "name",
      "ingredients" : [ {
        "alergen" : [ "lactose", "fruits à coques" ],
        "name" : "name"
      }, {
        "alergen" : [ "lactose", "fruits à coques" ],
        "name" : "name"
      } ]
    }, {
      "name" : "name",
      "ingredients" : [ {
        "alergen" : [ "lactose", "fruits à coques" ],
        "name" : "name"
      }, {
        "alergen" : [ "lactose", "fruits à coques" ],
        "name" : "name"
      } ]
    } ]
  } ],
  "position_gps" : "position_gps",
  "taux_occup" : 51,
  "id" : 1,
  "sound_level" : "low"
}, {
  "name" : "RU 1",
  "plats" : [ {
    "estLeDernierBac" : true,
    "name" : "poulet",
    "ingredients" : [ {
      "alergen" : [ "lactose", "fruits à coques" ],
      "name" : "name"
    }, {
      "alergen" : [ "lactose", "fruits à coques" ],
      "name" : "name"
    } ],
    "type" : "Viande",
    "accompagnements" : [ {
      "name" : "name",
      "ingredients" : [ {
        "alergen" : [ "lactose", "fruits à coques" ],
        "name" : "name"
      }, {
        "alergen" : [ "lactose", "fruits à coques" ],
        "name" : "name"
      } ]
    }, {
      "name" : "name",
      "ingredients" : [ {
        "alergen" : [ "lactose", "fruits à coques" ],
        "name" : "name"
      }, {
        "alergen" : [ "lactose", "fruits à coques" ],
        "name" : "name"
      } ]
    } ]
  }, {
    "estLeDernierBac" : true,
    "name" : "poulet",
    "ingredients" : [ {
      "alergen" : [ "lactose", "fruits à coques" ],
      "name" : "name"
    }, {
      "alergen" : [ "lactose", "fruits à coques" ],
      "name" : "name"
    } ],
    "type" : "Viande",
    "accompagnements" : [ {
      "name" : "name",
      "ingredients" : [ {
        "alergen" : [ "lactose", "fruits à coques" ],
        "name" : "name"
      }, {
        "alergen" : [ "lactose", "fruits à coques" ],
        "name" : "name"
      } ]
    }, {
      "name" : "name",
      "ingredients" : [ {
        "alergen" : [ "lactose", "fruits à coques" ],
        "name" : "name"
      }, {
        "alergen" : [ "lactose", "fruits à coques" ],
        "name" : "name"
      } ]
    } ]
  } ],
  "position_gps" : "position_gps",
  "taux_occup" : 51,
  "id" : 1,
  "sound_level" : "low"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

