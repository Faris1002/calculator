let input=document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');
let string="";
let arr=Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else if(e.target.innerHTML=='√'){
            string=Math.sqrt(string)
            input.value=string;
        }
        else if(e.target.innerHTML=='log'){
            string=Math.log10(string);
            input.value=string;
        }
        else if(e.target.innerHTML=='sin'){
            string=Math.sin(string);
            input.value=string;
        }
        else if(e.target.innerHTML=='cos'){
            string=Math.cos(string);
            input.value=string;
        }
        else if(e.target.innerHTML=='tan'){
            string=Math.tan(string);
            input.value=string;
        }
        else if(e.target.innerHTML=='^2'){
            string=Math.pow(string,2);
            input.value=string;
        }
        else if(e.target.innerHTML=='e^'){
            string=Math.exp(string);
            input.value=string;
        }
        else{
            string+=e.target.innerHTML;
            input.value=string;
        }

    })
})