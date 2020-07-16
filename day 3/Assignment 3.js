function myFunction() {
    let person = prompt("Please Enter your Name");
    if (person != null) {
        document.getElementById("demo").innerHTML = "Hello" + ' ' + person;
    }
}

function myFunction1()
{
    let person = prompt("Enter your age");
    if(person<=18)
    {
        document.getElementById("demo1").innerHTML = "you can't drink alohol";
    }
    else
    {
        document.getElementById("demo1").innerHTML = "you can drink";
    }
}