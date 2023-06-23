var btn_Alga = getElementById("algarismo")
var btn_Nun = getElementById("numero")
var parametro = ''


function algarismos(){
    parametro = 0
    alert('algarismos')
}


function numeros(){
    parametro = 1
    alert('numeros')
}


function converter(){
    if(parametro === 0){
        alert("converte algarismo")
        calc_ALGA()
    }
    else if(parametro === 1){
        alert("converte numero")
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
 
     var criaVAR_RES = document.createElement("var")
     var QuebraLinha_LONA = document.createElement("br")
     criaVAR_RES.innerText = Letra_Maius + "=" + soma
     
     /*------------------------------ MOSTRA RESULTADO FINAL ----------------------------------*/
     document.getElementById("mostraRESUL").appendChild(criaVAR_RES).appendChild(QuebraLinha_LONA)
     
}