let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quetos = [
    '"Be yourself; everyone else is already taken.― Oscar Wilde"',
    '"So many books, so little time -  Frank Zappa"',
   '"You only live once, but if you do it right, once is enough. - Mae West"' 
    
   
]

btn.addEventListener('click', ()=>{
    let ranQuetos = quetos[Math.floor(Math.random() * quetos.length)]
    output.innerHTML = ranQuetos;
})