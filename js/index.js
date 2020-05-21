function resultado(){
    let data = new Date();
    let anoAtual = data.getFullYear();
    let valorAno = document.getElementById("ano").value;
    let genero;
    let pResultado = document.getElementById("res");
    let divFoto = document.getElementById("foto");
    if(valorAno == 0 || valorAno > anoAtual){
        alert("[Erro] - Digite um valor válido!");
    }else{
        let sexo = document.getElementsByName("sexo");
        let idade = anoAtual - valorAno;
        let genero;
        pResultado.style.textAlign = "center";
        divFoto.style.textAlign = "center";
        if(sexo[0].checked){
            genero = "MASCULINO";
            if(idade <= 3){
                divFoto.innerHTML = "<img src='./img/masculino-bebe.jpg'>";
            }else if((idade > 3) && (idade <= 12)){
                divFoto.innerHTML = "<img src='./img/masculino-crianca.jpg'>";
            }else if((idade > 12) && (idade <= 18)){
                divFoto.innerHTML = "<img src='./img/masculino-adolescente.jpg'>";
            }else if((idade > 18) && (idade <= 63)){
                divFoto.innerHTML = "<img src='./img/masculino-adulto.jpg'>";
            }else{
                divFoto.innerHTML = "<img src='./img/masculino-idoso.jpg'>";
            }
        }else if(sexo[1].checked){
            genero = "FEMININO";
            if(idade <= 3){
                divFoto.innerHTML = "<img src='./img/feminino-bebe.jpg'>";
            }else if((idade > 3) && (idade <= 12)){
                divFoto.innerHTML = "<img src='./img/feminino-crianca.jpg'>";
            }else if((idade > 12) && (idade <= 18)){
                divFoto.innerHTML = "<img src='./img/feminino-adolescente.jpg'>";
            }else if((idade > 18) && (idade <= 63)){
                divFoto.innerHTML = "<img src='./img/feminino-adulto.jpg'>";
            }else{
                divFoto.innerHTML = "<img src='./img/feminino-idoso.jpg'>";
            }
        }
        divFoto.style.display = "block";
        pResultado.innerText = `Verificamos gênero ${genero} com ${idade} anos`;
    }
}   