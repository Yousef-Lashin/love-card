
let word= document.getElementById('word');
let mark= document.getElementById('mark');
let yes = document.getElementById('yesBtn');
let noBtn = document.getElementById('noBtn');
let cont = document.querySelector('.container');
let conRec = cont.getBoundingClientRect();
let btnRec = noBtn.getBoundingClientRect();

yes.addEventListener('click', ()=>{
    word.style.color= 'red'
    word.innerHTML = 'I love you too ❤️';
    mark.innerHTML = '';
})

noBtn.addEventListener('mouseover', ()=>{
    let w=Math.floor(Math.random()*(conRec.width-btnRec.width))+1;

    let h=Math.floor(Math.random()*(conRec.height-btnRec.height))+1;
    noBtn.style.left= w+'px';
    noBtn.style.top= h+'px';
})