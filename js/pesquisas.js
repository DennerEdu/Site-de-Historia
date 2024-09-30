// Declaração das variáveis de pesquisas principais 
const mainSrch1 = document.getElementById('main-srch1');
const mainSrch2 = document.getElementById('main-srch2');
const mainSrch3 = document.getElementById('main-srch3');
const mainSrch4 = document.getElementById('main-srch4');
const mainSrch5 = document.getElementById('main-srch5');

// Declaração das variáveis de resumos principais
const mainSummary1 = document.getElementById('main-summary1');
const mainSummary2 = document.getElementById('main-summary2');
const mainSummary3 = document.getElementById('main-summary3');
const mainSummary4 = document.getElementById('main-summary4');
const mainSummary5 = document.getElementById('main-summary5');

// Declaração das variáveis de pesquisas adicionais 
const extraSrch1 = document.getElementById('extra-srch1');
const extraSrch2 = document.getElementById('extra-srch2');
const extraSrch3 = document.getElementById('extra-srch3');
const extraSrch4 = document.getElementById('extra-srch4');
const extraSrch5 = document.getElementById('extra-srch5');

// Declaração das variáveis de resumos adicionais
const extraSummary1 = document.getElementById('extra-summary1');
const extraSummary2 = document.getElementById('extra-summary2');
const extraSummary3 = document.getElementById('extra-summary3');
const extraSummary4 = document.getElementById('extra-summary4');
const extraSummary5 = document.getElementById('extra-summary5');

// Funções para alternar visibilidade dos resumos principais
function showSummary1() {
    mainSummary1.classList.toggle('read');
}

function showSummary2() {
    mainSummary2.classList.toggle('read');
}

function showSummary3() {
    mainSummary3.classList.toggle('read');
}

function showSummary4() {
    mainSummary4.classList.toggle('read');
}

function showSummary5() {
    mainSummary5.classList.toggle('read');
}

// Funções para alternar visibilidade dos resumos adicionais
function showExtraSummary1() {
    extraSummary1.classList.toggle('read');
}

function showExtraSummary2() {
    extraSummary2.classList.toggle('read');
}

function showExtraSummary3() {
    extraSummary3.classList.toggle('read');
}

function showExtraSummary4() {
    extraSummary4.classList.toggle('read');
}

function showExtraSummary5() {
    extraSummary5.classList.toggle('read');
}