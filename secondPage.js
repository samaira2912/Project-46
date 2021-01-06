var input, email,bookName;
var checkBox;
var username;
var mail;
var title;
var database;
var returnToHomePage;
var index = 0;

function setup(){
    createCanvas(windowWidth,windowHeight);

    database = firebase.database();
    input =  createInput();
    input.position(windowWidth/2-400,windowHeight/2);

    email = createInput();
    email.position(windowWidth/2-400,windowHeight/2+70);
    bookName = createInput();
    bookName.position(windowWidth/2-400,windowHeight/2+140)
    
    checkBox =  createA('#','Confirm');

    checkBox.position(windowWidth/2-400,windowHeight/2+240);

    returnToHomePage = createA('index.html','Return To HomePage')
    returnToHomePage.position(windowWidth/2-200,windowHeight/2+240);

    user = new Users();
}

function draw(){
    checkBox.mousePressed(()=>{
        index = index+1;
        user.index = index;
        user.name = input.value();
        user.email = email.value();
        user.title = bookName.value();
        user.update();
    });


}

class Users{
    constructor(){
        this.index = 0;
        this.name = null;
        this.email = null;
        this.title = null;
    }
    update(){
        var userIndex = "users/user"+this.index;
        database.ref(userIndex).set({
            name:this.name,
            email:this.email,
            title:this.title
        });
    }
}