const sleep = ms => new Promise(r => setTimeout(r, ms));
function buttonfinder(regexp){
    let buttons=document.querySelectorAll("button")
    let found;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].attributes.forEach(x=>{
            if(x.value==regexp)
                found=i
        })
    }
    return buttons[found]
}
async function loop() {
    while(true){
        if(document.body.innerHTML.match("#andrew|#tate")!=undefined){
            buttonfinder("arrow-right").click()
            await sleep(1000)
        }
        await sleep(10)
    }
}
loop()
