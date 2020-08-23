

// imported modules

const https = require("https");
const fs = require('fs')
const url = "https://coderbyte.com/api/challenges/json/json-cleaning";

// making a https request

https.get(url, res => {
  res.setEncoding("utf8");
  let body = '';
  res.on("data", data => {
    body += data;
    body = JSON.parse(body);

    // json cleaning

    delete body.name.middle;
    delete body.DOB;
    delete body.hobbies[2];
    delete body.education.highschool;
    body.hobbies.pop()

    // This ensures that the code is clean before creating to a new file

    if(body.hobbies.length == 2){
        fs.writeFileSync('api.json' , JSON.stringify(body) , (err) =>{
            console.log(err)
        })
    }else{
        console.log('this is not working')
    }
  });

  //error handling

  res.on("error" , () =>{
      console.log(error)
  })

  //end message

  res.on("end", () => {
    console.log('sucessfully cleaned');
    
  });
});
