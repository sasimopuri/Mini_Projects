window.onload=()=>{
    let username = localStorage.getItem('username');
    if(username!=null){
        changenamedom(username);
        
    }
}

let namehtml=document.querySelector(".name");

function addname()
{
    let usernameentered=document.querySelector("#name").value;
    if(usernameentered.length==0)
    {
        alert("Please enter your name");
    }
    localStorage.setItem('username',usernameentered);
    changenamedom(usernameentered);
}

function changenamedom(username){
    console.log(namehtml)
    namehtml.innerHTML=`<span><h1>Hey!!</h1></span><span class="namels"><h1>${username.charAt(0).toUpperCase()+username.slice(1)}</h1></span>`
}