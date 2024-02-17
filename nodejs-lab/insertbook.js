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
        [201,1,'harrypotter',250,'novel'],
        [202,2,'traveller',230,'novel'],
        [203,3,'pythoncoding',500,'journal'],
        [204,4,'sallar',1000,'poetry'],
        [205,5,'kgff',300,'novel']
    ];
    con.query("INSERT INTO book (bookid,authorid,bookname,price,typeofbook) values ?" , [values],function(err,result){
        if (err) throw err;
        console.log("Records inserted in book Table");
    });
});

