var btn_Alga = document.getElementById("algarismo")
var btn_Nun = document.getElementById("numero")
var parametro = 'b'


function algarismos(){
    btn_Alga.style.borderColor = 'black';
    btn_Alga.style.fontWeight = '800';
    btn_Nun.style.borderColor = 'white';
    btn_Nun.style.fontWeight = '500';
    parametro = 0
}

function numeros(){
    parametro = 1
    btn_Nun.style.borderColor = 'black';
    btn_Nun.style.fontWeight = '800';
    btn_Alga.style.borderColor = 'white';
    btn_Alga.style.fontWeight = '500';
}

function converter(){
    if(parametro === 'b'){
        alert('Favor selecionar uma das opções')
        throw new Error('nenhuma opção selecionada')
    }
    if(parametro === 0){
        calc_ALGA()
    }
    else if(parametro === 1){
        calc_NUM()
    }
}


function calc_ALGA(){
    let entrada_USER = document.getElementById("entradaDados").value
    
    let Letra_Maius = entrada_USER.toUpperCase()

    let ENTRA_vetor = Letra_Maius.split("")
    
    //------------------------------------------- RESTRIÇÕES ------------------------------------------- 
    // confere caracteres
    let erro = []
    
    for (var i = 0; i < ENTRA_vetor.length; i++){
        var aprova = ''
        if(ENTRA_vetor[i] == 'I' || ENTRA_vetor[i] == "V" || ENTRA_vetor[i] == "X" || ENTRA_vetor[i] == "L"
        || ENTRA_vetor[i] == "C" || ENTRA_vetor[i] == "D" || ENTRA_vetor[i] == "M"){
        aprova = "ok"
    }
else{
    erro.push(ENTRA_vetor[i]) 

}
    }
    if(erro.length > 0){
        alert(`caracter(es) "${erro}" não são algarismos romanos romanos`)
        throw new Error('valor(es) inválidos')
    }
        console.log("passou aceitação de caracteres")
    
    // repetição

    let AVA_repeticoes = ENTRA_vetor.toString()
    let TiraVirgula = AVA_repeticoes.replace(/,/g, "")
    let achaREP_X = TiraVirgula.replace(/XXXX/g, ",repeticaoX ,")
    let achaREP_V = achaREP_X.replace(/VV/g, ",repeticaoV ,")
    let achaREP_I = achaREP_V.replace(/IIII/g, ",repeticaoI ,")
    let achaREP_L = achaREP_I.replace(/LL/g, ",repeticaoL ,")
    let achaREP_C = achaREP_L.replace(/CCCC/g, ",repeticaoC ,")
    let achaREP_D = achaREP_C.replace(/DDDD/g, ",repeticaoD ,")
    let achaREP_M = achaREP_D.replace(/MMMM/g, ",repeticaoM ,")
    let VetorRepet = achaREP_M.split(",")

    let Armaze_Repet = []
    
    for (var a = 0; a < VetorRepet.length; a++){
        if(VetorRepet[a] == 'repeticaoX '){
            Armaze_Repet.push("XXXX")
        }
        if(VetorRepet[a] == 'repeticaoV '){
            Armaze_Repet.push("VV")
        }
        if(VetorRepet[a] == 'repeticaoI '){
            Armaze_Repet.push("VVVV")
        }
        if(VetorRepet[a] == 'repeticaoL '){
            Armaze_Repet.push("LL")
        }
        if(VetorRepet[a] == 'repeticaoC '){
            Armaze_Repet.push("CCCC")
        }
        if(VetorRepet[a] == 'repeticaoD '){
            Armaze_Repet.push("DD")
        }
        if(VetorRepet[a] == 'repeticaoM '){
            Armaze_Repet.push("MMMM")
        }

    }

    if(Armaze_Repet.length > 0){
        alert(`As seguintes repetições de caracteres não estão nas regras dos algarismos romanos: "${Armaze_Repet}" `)
        throw new Error('repetições fora da regra')
    }
        console.log("passou conferencia de repetição")
        console.log(ENTRA_vetor)

    // conbinação
    let AVA_combinacoes = ENTRA_vetor.toString()
    let TiraVirg_Comb = AVA_combinacoes.replace(/,/g, "")
    // combinação I
    let achaCOMB_IL = TiraVirg_Comb.replace(/IL/g, ",erro-IL ,")
    let achaCOMB_IC = achaCOMB_IL.replace(/IC/g, ",erro-IC ,")
    let achaCOMB_ID = achaCOMB_IC.replace(/ID/g, ",erro-ID ,")
    let achaCOMB_IM = achaCOMB_ID.replace(/IM/g, ",erro-IM ,")
    // combinação X
    let achaCOMB_XD = achaCOMB_IM.replace(/XD/g, ",erro-XD ,")
    let achaCOMB_XM = achaCOMB_XD.replace(/XM/g, ",erro-XM ,")
    // combinação C
    let VetorComb = achaCOMB_XM.split(",")

    let Armaze_Comb = []

    for(var b = 0; b < VetorComb.length; b++){
        if(VetorComb[b] == 'erro-IL '){
            Armaze_Comb.push('IL')
        }
        if(VetorComb[b] == 'erro-IC '){
            Armaze_Comb.push('IC')
        }
        if(VetorComb[b] == 'erro-ID '){
            Armaze_Comb.push('ID')
        }
        if(VetorComb[b] == 'erro-IM '){
            Armaze_Comb.push('IM')
        }
        if(VetorComb[b] == 'erro-XD '){
            Armaze_Comb.push('XD')
        }
        if(VetorComb[b] == 'erro-XM '){
            Armaze_Comb.push('XM')
        }

    }
    
    if(Armaze_Comb.length > 0){
        alert(`As seguintes combinações de caracteres não estão de acordo com as regras: "${Armaze_Comb}" `)
        throw new Error('combinações fora da regra')
    }
        console.log("passou conferencia de combinação")
        console.log(ENTRA_vetor)

    //----------------------------------------------- CALCULO --------------------------------------------------

    let Ava_Comb_Certas = ENTRA_vetor.toString()
    let Tira_Virg_Comb = Ava_Comb_Certas.replace(/,/g, "")
    let achaComb_IV = Tira_Virg_Comb.replace(/IV/g, ",4,")
    let achaComb_IX = achaComb_IV.replace(/IX/g, ",9,")
    let achaComb_XL = achaComb_IX.replace(/XL/g, ",40,")
    let achaComb_XC = achaComb_XL.replace(/XC/g, ",90,")
    let achaComb_CD = achaComb_XC.replace(/CD/g, ",400,")
    let achaComb_CM = achaComb_CD.replace(/CM/g, ",900,")
    let VetorComb_Certa = achaComb_CM.split(",")

    let Ava_Comb_C_Sec = VetorComb_Certa.toString()
    let Tira_Virg_C_Sec = Ava_Comb_C_Sec.replace(/,/g, "")
    let VetorComb_C_S = Tira_Virg_C_Sec.split("")

    let Armaz_SOMA = []
    for(var x = 0; x < VetorComb_C_S.length; x++){
        
        if(VetorComb_C_S[x] == 'I'){
            Armaz_SOMA.push(1)
        }
        if(VetorComb_C_S[x] == 'V'){
            Armaz_SOMA.push(5)
        }
        if(VetorComb_C_S[x] == 'X'){
            Armaz_SOMA.push(10)
        }
        if(VetorComb_C_S[x] == 'L'){
            Armaz_SOMA.push(50)
        }
        if(VetorComb_C_S[x] == 'C'){
            Armaz_SOMA.push(100)
        }
        if(VetorComb_C_S[x] == 'D'){
            Armaz_SOMA.push(500)
        }
        if(VetorComb_C_S[x] == 'M'){
            Armaz_SOMA.push(1000)
        }

    }

    for(var y = 0; y < VetorComb_Certa.length; y++){
        
        if(VetorComb_Certa[y] == '4'){
            Armaz_SOMA.push(4)
        }
        if(VetorComb_Certa[y] == '9'){
            Armaz_SOMA.push(9)
        }
        if(VetorComb_Certa[y] == '40'){
            Armaz_SOMA.push(40)
        }
        if(VetorComb_Certa[y] == '90'){
            Armaz_SOMA.push(90)
        }
        if(VetorComb_Certa[y] == '400'){
            Armaz_SOMA.push(400)
        }
        if(VetorComb_Certa[y] == '900'){
            Armaz_SOMA.push(900)
        }

    }


    console.log('acumulo para soma: '+Armaz_SOMA)
    
    var soma = 0
    for(var o = 0; o < Armaz_SOMA.length; o++){
        soma+=Armaz_SOMA[o];
     }

     console.log('resultado final: '+soma)
 
     var criaVAR_RES = document.createElement("li")
     criaVAR_RES.innerText = Letra_Maius + " = " + soma
     
     /*------------------------------ MOSTRA RESULTADO FINAL ----------------------------------*/
     document.querySelector("ul").appendChild(criaVAR_RES)

     
}

function calc_NUM(){
    
    let entrada = document.getElementById("entradaDados").value
    
    let vetorEntrada = entrada.split("")

    let paraString = vetorEntrada.toString()
    
    let ConvNummero = paraString.replace(/,/g, "")

    let numero = Number(ConvNummero)

//----------------------------- RESTRIÇÕES ----------------------------------

// TIPOS
for (percorre of vetorEntrada){
    if(Number(percorre) >= 0 && Number(percorre) <= 9){
        console.log(percorre+" é numero")
    }
    else{
        console.log(percorre+" não é numero")
        alert(`caracter "${percorre}" não é número inteiro`)
        throw new Error('valor(es) inválidos')
    }   
}
    
// ACIMA DO VALOR PERMITIDO
    if(numero >= 4000){
        alert('valor acima do permitido')
        throw new Error('valor acima do permitido')
    }
    if(numero === 0){
        alert('"0" não é um valor válido')
        throw new Error('"0" não é um valor válido')
    }

//---------------------------------------- CALCULO ---------------------------------------\\
    let valorResultado = []
    if(numero >= 1000 && numero < 4000){
        if(numero >= 1000 && numero < 2000){
            valorResultado.push('M')
            numero = numero - 1000
        }
        else if(numero >= 2000 && numero < 3000){
            valorResultado.push('MM')
            numero = numero - 2000
        }
        else if(numero >= 3000 && numero < 4000){
            valorResultado.push('MMM')
            numero = numero - 3000
        }
        
    }
    
    if(numero >= 900 && numero < 1000){
        valorResultado.push('CM')
        numero = numero - 900
    }
    if(numero >= 500 && numero < 900){
        if(numero >= 500 && numero < 600){
            valorResultado.push('D')
            numero = numero - 500
        }
        else if(numero >= 600 && numero < 700){
            valorResultado.push('DC')
            numero = numero - 600
        }
        else if(numero >= 700 && numero < 800){
            valorResultado.push('DCC')
            numero = numero - 700
        }
        else if(numero >= 800 && numero < 900){
            valorResultado.push('DCCC')
            numero = numero - 800
        }
    }

    if(numero >= 400 && numero < 500){
        valorResultado.push('CD')
        numero = numero - 400
    }
    if(numero >= 100 && numero < 400){
        if(numero >= 100 && numero < 200){
            valorResultado.push('C')
            numero = numero - 100
        }
        else if(numero >= 200 && numero < 300){
            valorResultado.push('CC')
            numero = numero - 200
        }
        else if(numero >= 300 && numero < 400){
            valorResultado.push('CCC')
            numero = numero - 300
        }
    }
    if(numero >= 90 && numero < 100){
        valorResultado.push('XC')
        numero = numero - 90
    }
    if(numero >= 50 && numero < 90){
        if(numero >= 50 && numero < 60){
            valorResultado.push('L')
            numero = numero - 50
        }
        else if(numero >= 60 && numero < 70){
            valorResultado.push('LX')
            numero = numero - 60
        }
        else if(numero >= 70 && numero < 80){
            valorResultado.push('LXX')
            numero = numero - 70
        }
        else if(numero >= 80 && numero < 90){
            valorResultado.push('LXXX')
            numero = numero - 80
        }
    }
    if(numero >= 40 && numero < 50){
        valorResultado.push('XL')
        numero = numero - 40
    }
    if(numero >= 10 && numero < 40){
        if(numero >= 10 && numero < 20){
            valorResultado.push('X')
            numero = numero - 10
        }
        else if(numero >= 20 && numero < 30){
            valorResultado.push('XX')
            numero = numero - 20
        }
        else if(numero >= 30 && numero < 40){
            valorResultado.push('XXX')
            numero = numero - 30
        }
    }
    if(numero == 9){
        valorResultado.push('IX')
        numero = numero - 9
    }
    if(numero >= 5 && numero < 9){
        if(numero == 5){
            valorResultado.push('V')
            numero = numero - 5
        }
        else if(numero == 6){
            valorResultado.push('VI')
            numero = numero - 6
        }
        else if(numero == 7){
            valorResultado.push('VII')
            numero = numero - 7
        }
        else if(numero == 8){
            valorResultado.push('VIII')
            numero = numero - 8
        }
    }
    if(numero == 4){
        valorResultado.push('IV')
        numero = numero - 4
    }
    if(numero >= 1 && numero < 4){
        if(numero == 1){
            valorResultado.push('I')
            numero = numero - 1
        }
        else if(numero == 2){
            valorResultado.push('II')
            numero = numero - 2
        }
        else if(numero == 3){
            valorResultado.push('III')
            numero = numero - 3
        }
    }
    else{
        console.log('valor imprevisto')
    }
//---------------------------------------- RESULTADO FINAL ---------------------------------------\\
    let string_FINAL = valorResultado.toString()
    let ConverString_F = string_FINAL.replace(/,/g, "")

    console.log(`RESULTADO FINAL: ${ConverString_F}`)

    var criaVAR = document.createElement("li")
    criaVAR.innerText = entrada + " = " + ConverString_F
    
    /*------------------------------ MOSTRA RESULTADO FINAL ----------------------------------*/
    document.querySelector("ul").appendChild(criaVAR)

}