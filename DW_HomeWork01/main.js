let inputs = document.getElementsByClassName("formulario__input");
for(let i = 0; i< inputs.length; i++){
    inputs[i].addEventListener("keyup", function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add("fijar");
        }else{
            this.nextElementSibling.classList.remove("fijar");
        }
    });
}

function calcularIMC(){
    let altura = document.querySelector(".inputAltura").value;
    let peso = document.querySelector(".inputPeso").value;
    console.log(altura);
    console.log(peso);
    let imc = peso/((altura/100)**2);
    console.log(imc);

    
    let contRes = document.querySelector(".container__labelRes");
    let labelRes = document.querySelector(".labelRes");
    let imgRes = document.querySelector(".imgResultado");
    let h2Res = document.querySelector(".resultado__h2");
    h2Res.textContent = "RESULTADO: "+imc.toFixed(1);
    //intervalos
    if(imc<18.5){
        estiloResultado(contRes, 1);
        labelRes.textContent = "POR DEBAJO";
        labelRes.nextElementSibling.textContent = "< 18.5";
        console.log(imgRes);
        imgRes.setAttribute("src", "resultado1.png");

    }else if(18.5<=imc&&imc<25){
        estiloResultado(contRes, 2);
        labelRes.textContent = "SALUDABLE";
        labelRes.nextElementSibling.textContent = "18.5 - 24.9";
        imgRes.setAttribute("src", "resultado2.png");

    }else if(25<=imc&&imc<30){
        estiloResultado(contRes, 3);
        labelRes.textContent = "SOBREPESO";
        labelRes.nextElementSibling.textContent = "25 - 29.9";
        imgRes.setAttribute("src", "resultado3.png");

    }else if(30<=imc&&imc<35){
        estiloResultado(contRes, 4);
        labelRes.textContent = "OBESIDAD I";
        labelRes.nextElementSibling.textContent = "30 - 34.9.5";
        imgRes.setAttribute("src", "resultado4.png");

    }else if(35<=imc&&imc<40){
        estiloResultado(contRes, 5);
        labelRes.textContent = "OBESIDAD II";
        labelRes.nextElementSibling.textContent = "35 - 39.9";
        imgRes.setAttribute("src", "resultado5.png");

    }else if(40<=imc){
        estiloResultado(contRes, 6);
        labelRes.textContent = "OBESIDAD III";
        labelRes.nextElementSibling.textContent = "> 40";
        imgRes.setAttribute("src", "resultado6.png");

    }else{
        alert("Error");
    }
}

function estiloResultado(contRes, num){
    for(let i=1; i<=6; i++){
        if(num == i){
            contRes.classList.add("resultado"+i);
        }else{
            contRes.classList.remove("resultado"+i);
        }
    }
}

let btnCalcular = document.querySelector(".calcular");
console.log(btnCalcular);
btnCalcular.addEventListener("click", calcularIMC);