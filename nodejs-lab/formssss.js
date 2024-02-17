var http=require('http');
var express=require('express');
var app=express();
var bodyParser = require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended:true});
var mysql=require('mysql');
const { write } = require('fs');
app.use(express.static(__dirname));
var con = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:'library1'
});
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
});
app.get('/send', (req, res) => {
    const htmlContent = `
        <html>
        <head>
        <body>
            <h1>Welcom to library</h1>
            <form method='post' action='retrival'>
            <h1>check for book</h1>
            <input type='submit' name = 't1' value='booka'>
            </input>

            </form>
            <form method='post' action='addbook'>
                <h1>add book</h1>
                <b>enter bid<br></br>

</b>
                <input type='text' name = 'b_id'>

                </input>
                <b>Enter aid</b><br></br>
                <input type='text' name='a_id'>

                </input>
                
                <input type='submit' value='add book'>
                </input>

            </form>
        </body>
       </head>
        </html>
`;

    res.send(htmlContent);
});
app.post('/retrival',urlencodedParser,function(req,res){
    var sql = "select * from book";
    con.query(sql,function(err,result){
        if(err) throw err;
        res.write("<html><body><h1>list</h1></body></html>");
        result.forEach(function(row){
            res.write("<h3><li>book list : "+row.bid+"| aid "+row.aid+"</li></h3>");
        });
           con.query("select * from book",function(err,result){
            if(err) throw err;
            result.forEach(function(row){
                res.write("<h3><li>"+row.bid+"</li></h3>");
            });
           
           res.end(); 
        });
        });
    });
app.post('/addbook',urlencodedParser,function(req,res){
    bbid=req.body.b_id;
    aaid=req.body.a_id;
    var r='';
    var p='';
    var sql1="SELECT aid FROM book ORDER BY aid DESC LIMIT 1";
    con.query(sql1,function(err,result){
        if(err) throw err;
        result.forEach(function(row){
              r=row.aid;
        })
        var sql2="insert into book(bid,aid) values("+(bbid)+","+(r+1)+")";
        con.query(sql2,function(err,result){
            if(err) throw err;
        });
        con.query("SELECT AVG(bid) AS aver FROM book",function(err,result){
            if(err) throw err;
            result.forEach(function(row){
                p=row.aver;
            });
        
        res.write("avg"+(p)+"");
        res.write("aid alloted");
        res.end();
    });
    });
});
app.listen(9000);


       
