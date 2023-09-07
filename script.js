function add(){
    x=parseInt(document.getElementById("val_1").value);
    y=parseInt(document.getElementById("val_2").value);

    document.getElementById("result").innerHTML=x+y;
   
}

function sub(){
    x=document.getElementById("val_1").value;
    y=document.getElementById("val_2").value;

    document.getElementById("result").innerHTML=x-y;
}

function mul(){
    x=document.getElementById("val_1").value;
    y=document.getElementById("val_2").value;

    document.getElementById("result").innerHTML=x*y;
}

function div(){
    x=document.getElementById("val_1").value;
    y=document.getElementById("val_2").value;

    document.getElementById("result").innerHTML=x/y;
}