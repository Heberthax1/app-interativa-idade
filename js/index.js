var div = document.getElementById("root").style.display = "none";
var idade = document.querySelector("input[type=number]");
console.log(idade.value);
var imagens = 
["<img src='./img/teste1.jpg' alt='Imagem Teste'>", 
"<img src='./img/teste2.jpg' alt='Imagem Teste'>"];

function mudaIdade(div){
    if(idade.value < 18){
        div.style.display = "inline";
        div.innerHTML = imagens[0];
    }else{
        div.style.display = "inline";
        div.innerHTML = imagens[1];
    }
}

mudaIdade();
