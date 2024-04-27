/* Pegando a opção selecionada na Select-option (Equipamento)*/
const selectEqto = document.querySelector('#eqto');
const eqto = document.getElementById('txtModelo');
const selectModelo = document.getElementById('modelo');

/* Criando uma função para capturar a caixa selectEqto*/
function alterarEqto(){
    eqto.value = selectEqto.value;
    carregarModelo(eqto.value);
}

/* Criando uma função para capturar a caixa selectModelo*/
function alterarModelo(){
    eqto.value = selectModelo.value;
}

/* Atribuindo uma função a caixa de seleção*/
selectEqto.addEventListener("change", alterarEqto);
selectModelo.addEventListener("change", alterarModelo);

/* Criando uma função para alterar a caixa selectModelo*/
function carregarModelo(tipo){
    /*Limpando o que esta na lista primeiro*/
    limparOption();

   /* Criando um if com as opções de Equipamentos */
   if (tipo == "Impressora") {
        var arr = ["Selecione", "MP-4200 TH", "MP-4200 TH ADV", "MP-4200 HS", "Impresora I8", "Impresora I9"];
    } else if (tipo == "Etiqueta") {
        var arr = ["Selecione", "L42", "L42 DT", "L42 PRO", "L42 PRO FULL"];
    } else if (tipo == "SAT") {
        var arr = ["Selecione", "RB-1000", "RB-2000", "Sat Go", "Sat Smart", "Linker I", "Linker II"];
    } else if (tipo == "MFE") {
        var arr = ["Selecione", "Mfe Smart", "Mfe Linker I", "Mfe Linker II"];
    } else if (tipo == "Leitor") {
        var arr = ["Selecione", "Br-400i", "Br-520", "Br-3200", "EL-250", "EL-8600"];
    } else {
        var arr = ["Selecione"];
    }

    for (var i= 0; i < arr.length; i++) {
        const option = document.createElement("option");
        txt = document.createTextNode(arr[i]);
        option.appendChild(txt);
        selectModelo.insertBefore(option, selectModelo.lastChild);
    } 
}

function limparOption() {
    nrlist = selectModelo.options.length;
    for (x=0; x <= nrlist; x++) {
        selectModelo.remove(0);
    }
}

/* Funções para a parte debaixo do sistema */

/* Puxando todos os valores para variavel */
const num = document.getElementById('num');
const ticket = document.getElementById('txtTicket');
const nome = document.getElementById('txtNome');
const telefone = document.getElementById('txtTel');
const cnpj = document.getElementById('txtCNPJ');
const nserie = document.getElementById('txtNSerie');
const erro = document.getElementById('txtErro');
const email = document.getElementById('txtEmail');
const btn_processar = document.getElementById('btn_processar');

var _num = 0;
function alterarNum(){
    _num = _num + 1
    num.innerHTML = _num;
}

function processarDados() {

    if (ticket.value == "" || nome.value == "" || telefone.value == "" 
    || cnpj.value == "" || email.value == "") {
        alert ("Falta preencher algum campo");
    }

    /* Validar ticket */
    if (ticket.value.length !== 7) {
        alert ("Campo ticket preenchido incorretamente, #xxxxxx");
    }

    /* Validar nome-cnpj-telefone */
    if (nome.value.length < 3 || telefone.value.length <= 11  || cnpj.value.length < 11 ) {
        alert ("Campo com caracter abaixo do permitido");
    }

    /* Validar e-mail */
    if (email.value.indexOf("@") == -1 ) {
        alert ("e-mail invalido");
    }
    alterarNum();

    /* Gerar um arquivo txt */
    
}
/* Cada vez que clicar no processar dados adiciona um número do ticket */
btn_processar.addEventListener("click", processarDados);