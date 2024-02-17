var http=require('http');
var express=require ('express');
var app=express();
var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended:true});
var mysql=require('mysql');

var con=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'library'
})


app.get('/send',function(req,res){
    var rr="<html>";
    rr=rr+"<body>";
    rr=rr+"<form method='post' action='retrieve'>";
    rr=rr+"<input type='submit' name='t1' value='retrieve'>";
    rr=rr+"</form>";
    rr=rr+"</form method='post' action='update'>";
    rr=rr+"<input type='submit' name='t1' value='update'>";
    rr=rr+"</form>";
    rr=rr+"</body>";
    res.send(rr);

})

// app.put('/update', urlencodedParser, function (req, res) {
//     con.connect(function (err) {
//         if (err) throw err;
//         console.log("Connected!");

//         var sql = "UPDATE book SET qty = 15 WHERE id = 1";

//         con.query(sql, function (err, result) {
//             if (err) throw err;
//             // console.log('Updated successfully');
//             // res.send('Update successful');
//             res.write("Update Successful");
//             res.end();
//         });
        
//     });
// });

app.post('/retrieve', urlencodedParser, function (req, res) {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Database Connected");

        var sql = "SELECT id, title, aid, year, qty, name FROM book LEFT OUTER JOIN author on aid = aaid";
        con.query(sql, function (err, result) {
            if (err) throw err;

            // Send the initial HTML content
            res.write("<html><body><h1>List of Books in Inventory</h1><ul>");

            // Loop through the result and send each book entry
            result.forEach(function (row) {
                res.write("<li>ID: " + row.id + ", Title: " + row.title + ", Author: " + row.name + "</li>");
            });

            // Complete the HTML content and send the response
            res.write("</ul></body></html>");

            // Close the database connection
            con.end();
            
            // Send the response
            res.end();
        });
    });
});

app.listen(9000, function () {
    console.log('Server is running on port 9000');
});
