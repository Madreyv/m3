//Botões Mobile
var botaoFiltrar = document.getElementById('botaoFiltrar');
var botaoOrdenar = document.getElementById('botaoOrdenar');
var botaoAplicar = document.getElementById('botaoAplicar');

var telaFlutuante = document.getElementById('telaFlutuante');
var mobileOrdenar = document.getElementById('mobileOrdenar');
var IconeMaisMenos = document.getElementsByClassName('IconeMaisMenos');
var odernarOpcoes = document.getElementsByClassName('odernarOpcoes');
var caixaTituloFiltrar = document.getElementById('caixaTituloFiltrar');
var iconeFecharFiltrar = document.getElementById('iconeFecharFiltrar');
var iconeFecharOrdenar = document.getElementById('iconeFecharOrdenar');
var caixaTituloOrdenar = document.getElementById('caixaTituloOrdenar');


botaoOrdenar.addEventListener('click', () => mudarEstado([telaFlutuante,mobileOrdenar,vitrine,caixaTituloOrdenar,botoesMobile],'mobileHide'));
botaoAplicar.addEventListener('click', () => mudarEstado([telaFlutuante, vitrine,caixaTituloFiltrar,secaoFiltrosFlutuante],'mobileHide'));
iconeFecharOrdenar.addEventListener('click', () => mudarEstado([telaFlutuante,mobileOrdenar,vitrine,caixaTituloOrdenar,botoesMobile],'mobileHide'));
iconeFecharFiltrar.addEventListener('click', () => mudarEstado([telaFlutuante, vitrine,caixaTituloFiltrar,secaoFiltrosFlutuante], 'mobileHide'));
botaoFiltrar.addEventListener('click', () => mudarEstado([telaFlutuante, vitrine,caixaTituloFiltrar,secaoFiltrosFlutuante], 'mobileHide'));
tituloCores.addEventListener('click', () => mudarEstado([caixaCores, IconeMaisMenos[1], IconeMaisMenos[0]],'mobileHide'));
tituloTamanhos.addEventListener('click', () => mudarEstado([caixaTamanhos, IconeMaisMenos[3], IconeMaisMenos[2]],'mobileHide'));
tituloPreco.addEventListener('click', () => mudarEstado([caixaValores, IconeMaisMenos[5], IconeMaisMenos[4]],'mobileHide'));

odernarOpcoes[2].addEventListener('click', () => ordenarPreco(Jprodutos,"maior"))
	odernarOpcoes[1].addEventListener('click', () => ordenarPreco(Jprodutos,"menor"))
	odernarOpcoes[0].addEventListener('click', () => ordenarData(Jprodutos));

sacola[0].addEventListener('click', () => mudarEstado([painelSacola[0]],'mobileHide'));
