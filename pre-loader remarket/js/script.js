let block = document.querySelector('.block');
let box = document.querySelector('.box');
let r1 = document.querySelector('.r1')
let e = document.querySelector('.e')
let m = document.querySelector('.m')
let a = document.querySelector('.a')
let r = document.querySelector('.r')
let k = document.querySelector('.k')
let e2 = document.querySelector('.e2')
let t = document.querySelector('.t')

window.addEventListener('DOMContentLoaded', delay)
function delay(){
    setTimeout(()=>{
        setTimeout(()=>{
            r1.classList.add('word_anim')
        }, 100)
        setTimeout(()=>{
            e.classList.add('word_anim')
        }, 300)
        setTimeout(()=>{
            m.classList.add('word_anim')
            document.getElementById('a1').classList.add('word_anim')
            document.querySelector('.outer').classList.add('xxx')
        }, 500)
        setTimeout(()=>{
            a.classList.add('word_anim')
        }, 700)
        setTimeout(()=>{
            r.classList.add('word_anim')
        }, 900)
        setTimeout(()=>{
            k.classList.add('word_anim')
        }, 1100)
        setTimeout(()=>{
            e2.classList.add('word_anim')
        }, 1300)
        setTimeout(()=>{
            t.classList.add('word_anim')
            document.getElementById('a1').classList.add('spin')
        }, 1500)

        if(document.readyState === 'complete'){
            setTimeout(()=>{
                block.classList.add('opa')
                setTimeout(()=>{
                    box.classList.add('invise')
                }, 1000)
                setTimeout(()=>{
                    box.remove()
                }, 5000)
            }, 2000)
        }
    }, 1000)
}



