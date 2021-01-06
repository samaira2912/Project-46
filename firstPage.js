var database, listNode;
var allBooks;


function setup(){
    createCanvas(windowWidth,windowHeight);
    database =  firebase.database();
    listNode = database.ref("users");
    listNode.on("value",(data)=>{
    allBooks = data.val();
    console.log(allBooks);

    });

}