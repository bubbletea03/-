async function CircleDynamicText(){
    while(true){
        for(let i=0 ; i<arguments.length ; i++)
        {
            DynamicText(arguments[i]);
            await Sleep(2000);
        }
    }
}

function DynamicText(text){
    let target = document.querySelector('.dynamic_text');
    target.innerHTML = "";
    for(let i=0 ; i<text.length ; i++){
        setTimeout(() => target.innerHTML += text[i], 50*i);
    }
}

function Sleep(ms){
    return new Promise((func) => setTimeout(func, ms));
}