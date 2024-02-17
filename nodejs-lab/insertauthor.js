var mysql = require('mysql');

var con=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'library'
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected to library Database!");
    var values=[
        [1,'nandan',2,'hubli'],
        [2,'neel',1,'bengaluru'],
        [3,'rohan',1,'delhi'],
        [4,'sush',0,'dharwad'],
        [5,'ssum',1,'mumbai'],
        [23,'ss',1,'ahu']

    ];
    con.query("INSERT INTO author (authorid,authorname,totalbook,address) values ?" , [values],function(err,result){
        if (err) throw err;
        console.log("Records inserted in author Table");
    });
});

