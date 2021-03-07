'use strict'
//Created a xlsx using npm
var xlsx = require('xlsx');
//Creating new Work book
var wb = xlsx.readFile("parcel_details.xlsx");

//Creating new work sheet
var ws = wb.Sheets["Sheet1"];
//Creating a sheet to json variable
var data = xlsx.utils.sheet_to_json(ws);
//console.log(data);

const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors())

const port = 3000

app.post('/parcel',(req,res)=>{
    console.log(req);
   var parcelid = "P001";
   var filterdata = data.filter((e)=>{
       return e.Parcel_no === parcelid;

   });
   //console.log(filterdata);
   res.send(filterdata[0].Unload);

});

app.listen(port,()=>{
    console.log("Server at http://localhost:3000")
});

