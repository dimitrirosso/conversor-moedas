let numero = document.querySelector('.numero')
let botao = document.querySelector('.botao')
let resultadoFinal = document.querySelector('.resultado-final')
let textoResultado = document.querySelector('.texto-resultado')
let paises = document.querySelector('.paises')

botao.addEventListener('click', ()=> {

    if(Number(numero.value) < 0){
        resultadoFinal.innerHTML = "Erro!"
        return;
    }

    if(paises.value === 'dolar'){
    let dolarConvertido = 5.16 * Number(numero.value);
    
    textoResultado.innerHTML = "US$ 1 = R$ 5,16"
    resultadoFinal.innerHTML = `${dolarConvertido.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})} Reais`;

    } else if(paises.value === 'peso'){
        let pesoConvertido = 0.0035 * Number(numero.value);

       textoResultado.innerHTML = "$ 1 = R$ 0,0035"

       resultadoFinal.innerHTML = `${pesoConvertido.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})} Reais`;

    } else if(paises.value === 'kwanzas'){

        let kwanzasConvertido = 0.0056 * Number(numero.value);

        textoResultado.innerHTML = "Kz 1 = R$ 0,0056"
        resultadoFinal.innerHTML = `${kwanzasConvertido.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})} Reais`;

    } else if(paises.value === 'euro'){
        
        let euroConvertido = 5.90 * Number(numero.value)

        textoResultado.innerHTML = "€ 1 = 5,90"
        resultadoFinal.innerHTML = `${euroConvertido.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})} Reais`;

    } else if(paises.value === 'libra'){
        let libraConvertido = 6.92 * Number(numero.value)

        textoResultado.innerHTML = "£ 1 = 6,92"
        resultadoFinal.innerHTML = `${libraConvertido.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})} Reais`;
    }
})


paises.addEventListener('click', ()=>{

      if(Number(numero.value) < 0){
        resultadoFinal.innerHTML = "Erro!"
        return;
    }
    
    if(paises.value === 'dolar'){
        let dolarConvertido = 5.16 * Number(numero.value)
        textoResultado.innerHTML = "US$ 1 = R$ 5,16"
        resultadoFinal.innerHTML = `${dolarConvertido.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})} Reais`;

    } else if(paises.value === "peso"){

        let pesoConvertido = 0.0035 * Number(numero.value);

       textoResultado.innerHTML = "$ 1 = R$ 0,0035"

       resultadoFinal.innerHTML = `${pesoConvertido.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})} Reais`;
    } else if(paises.value === 'kwanzas'){

        let kwanzasConvertido = 0.0056 * Number(numero.value);

        textoResultado.innerHTML = "Kz 1 = R$ 0,0056"
        resultadoFinal.innerHTML = `${kwanzasConvertido.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})} Reais`;

    } else if(paises.value === 'euro'){
        
        let euroConvertido = 5.90 * Number(numero.value)

        textoResultado.innerHTML = "€ 1 = 5,90"
        resultadoFinal.innerHTML = `${euroConvertido.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})} Reais`;

    } else if(paises.value === 'libra'){
        let libraConvertido = 6.92 * Number(numero.value)

        textoResultado.innerHTML = "£ 1 = 6,92"
        resultadoFinal.innerHTML = `${libraConvertido.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})} Reais`;
    }
})
