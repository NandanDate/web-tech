var mysql=require('mysql')

var con = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    port:3306
});
 con.connect(function(err){
    if(err) throw err;
    console.log("connected")
    con.query("create database library",function(err,result){
        if(err) throw err;
    console.log("database created");
    });
 });

 