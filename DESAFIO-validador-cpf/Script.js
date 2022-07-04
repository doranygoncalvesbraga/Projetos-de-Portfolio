//
console.log ('javaScript carregado')

function validarCPF(cpf){
    //return true;
    //return false;
    //console.log(cpf.length);
    if(cpf.length != 11){
        return false;
    }
    else{
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);

        //console.log ("numeros do cpf" + numeros);
        //console.log ("digito do cpf" + digitos);

        //criar laço de repetição
        var soma = 0;
        for(var i = 10; i > 1; i--){
            soma += numeros.charat(10 - i) * i;
        }
        //console.log(soma)
        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11); //operador ternário
        //validação do primeiro digito
        if(resultado != digitos.charat(0)){
            return false;
            //console.log(digitos.toString.charAt(0) + "é a primeira posiçaõ da variavel soma")
        }
        //resetar soma
        soma = 0;
        numeros = cpf.subString (0, 10);

        for (var k =11; k > 1; k--){
            soma += numeros.charAt(11 -k) * k;
        }

        resultado = soma % 11 > 2 ? 0 : 11 - {soma % 11};
        if (resultado != digitos.charAt(1)){
            return false;
        }
        
        return true;
    }    
}

function validacao () {
    console.log ('iniciando validação de CPF');
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';

// captura e armazenamento do cpf
    var cpf = document.getElementById ('cpf_digitado').value;

//validação de cpf
    var resultadoValidacao = validaCPF (cpf);

    if (resultadoValidacao){
        document.getElementById ('success').style.display = 'block';
    } else {
        Document.getElementById('error').style.display = 'block';
    }

}  
