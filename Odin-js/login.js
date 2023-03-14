let question = prompt("Who's there")

if  (question == "Admin") {
    let password = prompt("Password?")
    if (password == "TheMaster")
        alert("Welcome!")
    else if (password == null  || password == "") {
        alert("Canceled")
    }
    else{
        alert("Wrong password")
    }
}

else if (question == null  || question == "") {
    alert("Canceled")
}

else {
    alert("I don't know you")
}