function timee()
{
    let date=new Date();
    let hour=date.getHours();
    let session= hour<12?'AM':'PM';
    let html=document.querySelector(".clock")
    html.innerHTML=`<span class="hr">${date.getHours()}
    </span>:<span class="min">${date.getMinutes()}</span>:
    <span class="sec">${date.getSeconds()}</span>:
    <span class="session">${session}</span>`

    setTimeout(()=>{
        timee()
    },1000)
}

timee()