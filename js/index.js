var div = document.getElementById("root");
var idade = document.querySelector("input[type=number]");
console.log(idade);
var imagens = 
["<img src='../img/teste1.jpg' alt='Imagem Teste'>", 
"<img src='../img/teste2.jpg' alt='Imagem Teste'>"];

function mudaIdade(){
    if(idade.value < 18){
        div.style.display = "block";
        div.innerHTML = imagens[0];
    }else{
        div.style.display = "block";
        div.innerHTML = imagens[1];
    }
}

mudaIdade();
