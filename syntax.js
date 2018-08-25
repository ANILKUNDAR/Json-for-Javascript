var jsonobject={ 
    "sammy" : {
      "username"  : "SammyShark",
      "location"  : "Indian Ocean",
      "online"    : true,
      "followers" : 987
    },
    "jesse" : {
      "username"  : "JesseOctopus",
      "location"  : "Pacific Ocean",
      "online"    : false,
      "followers" : 432
    },
    "drew" : {
      "username"  : "DrewSquid",
      "location"  : "Atlantic Ocean",
      "online"    : false,
      "followers" : 321
    },
    "jamie" : {
      "username"  : "JamieMantisShrimp",
      "location"  : "Pacific Ocean",
      "online"    : true,
      "followers" : 654
    }
  }
  console.log(jsonobject)//entire json 
  console.log(jsonobject["jesse"])// detail of jesse 
  console.log(jsonobject["jesse"].followers)//followers of jesse

  //run using node (node syntax.js)