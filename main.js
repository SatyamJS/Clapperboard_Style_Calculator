console.log("file linked")
let inputVal;
let result;

function getInput(event){
    inputVal=event.path[0].innerText;
    screen()

}
function screen(){
    result= document.querySelector('.calcScreen').innerText+=inputVal;

}
document.getElementById('clear').addEventListener('click',e=>{
    result= document.querySelector('.calcScreen').innerText="";

})
document.querySelector('#del').addEventListener('click',e=>{
    let formatedValue=document.querySelector('.calcScreen').innerText.slice(0,-1)
    document.querySelector('.calcScreen').innerText=formatedValue;
})

document.getElementById('equate').addEventListener('click',e=>{
    let result=document.querySelector('.calcScreen').innerText
    result=String(result).replace('x','*')
    result=String(result).replace('^','**')

    try{
    result= eval(result);
    if (result==="NaN"){
        document.querySelector('.calcScreen').innerHTML="Invalid equation";
    }
    document.querySelector('.calcScreen').innerHTML+=`<br><p>=${result}</p>`
    }catch(error){
        document.querySelector('.calcScreen').innerText="Invalid equation"
    }

})