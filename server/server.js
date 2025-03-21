
const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, function(){
  console.log(`App started on port 3000`); 
});



{
  id:123456,
  certificate_number:444444,
  business_name:"IBAW",
  date:"2021-09-01T22:00:00.000+00:00",
  result:"Pass",
  sector:"MongoDB",
  address:{
  city:"LUCERNE",
  zip:6000,
  street:"Schweizerhofquai",
  number:1
  }
  }
  