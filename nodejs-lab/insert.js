var mysql = require('mysql');

var con=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'library1'
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected to Hotel_Booking Database!");
    var values=[
        [201,45,23],
        // [202,'Shreya','Mysore,Karnataka',21],
        [203,89,19],
        // [204,'Ritesh','Ooty,Karnataka',25],
        [205,44,27]
    ];
    con.query("insert into book (bid,aid,price) values?",[values],function(err,result){
        if (err) throw err;
    console.log("inserted to Hotel_Booking Database!");
    });
});

