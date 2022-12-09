function addition(){
    let x;// creating a new variable x
    x=document.getElementById('x_value').value;
    console.log(typeof(x));
    x=Number(x); 
    let y;//assigning a 4 value to y
    y=document.getElementById('y_value').value; 
    console.log(typeof(y));
    y=Number(y); 
    let z=x+y;//creating a variable z and addition is done
    document.getElementById('add').innerHTML=z;
}
function subtraction(){
    let x;// creating a new variable x
    x=document.getElementById('x_value').value;
    console.log(typeof(x));
    x=Number(x); 
    let y;//assigning a 4 value to y
    y=document.getElementById('y_value').value; 
    console.log(typeof(y));
    y=Number(y); 
    let z=x-y;//creating a variable z and addition is done
    document.getElementById('sub').innerHTML=z;
}
function multiplication(){
    let x;// creating a new variable x
    x=document.getElementById('x_value').value;
    console.log(typeof(x));
    x=Number(x); 
    let y;//assigning a 4 value to y
    y=document.getElementById('y_value').value; 
    console.log(typeof(y));
    y=Number(y); 
    let z=x*y;//creating a variable z and addition is done
    document.getElementById('mul').innerHTML=z;
}
function division(){
    let x;// creating a new variable x
    x=document.getElementById('x_value').value;
    console.log(typeof(x));
    x=Number(x); 
    let y;//assigning a 4 value to y
    y=document.getElementById('y_value').value; 
    console.log(typeof(y));
    y=Number(y); 
    let z=x/y;//creating a variable z and addition is done
    document.getElementById('div').innerHTML=z;
}