var nestedarray={ 
    "first_name" : "Sammy",
    "last_name" : "Shark",
    "location" : "example",
    "websites" : [ 
      {
        "description" : "work",
        "URL" : "https://www.example.com/"
      },
      {
        "desciption" : "tutorials",
        "URL" : "https://www.example.com/tutorials"
      }
    ],
    "social_media" : [
      {
        "description" : "twitter",
        "link" : "https://twitter.com/example"
      },
      {
        "description" : "facebook",
        "link" : "https://www.facebook.com/example"
      },
      {
        "description" : "github",
        "link" : "https://github.com/example"
      }
    ]
  }
  console.log(nestedarray)//entire json

  console.log(nestedarray["first_name"])//sammy

  console.log(nestedarray["websites"][0])//work

  console.log(nestedarray["websites"][1])//tutorial with description

  console.log(nestedarray["websites"][0].description)//work
  
  console.log(nestedarray["websites"][1].desciption)//tutorials
