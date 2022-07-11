const sleep = ms => new Promise(r => setTimeout(r, ms));
function regexsearch(regexp){
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
    if(document.body.innerHTML.match("#andrew|#tate").length>0){
        regexsearch("arrow-right").click()
        await sleep(1000)
    }
    requestAnimationFrame(loop())
}
loop()
