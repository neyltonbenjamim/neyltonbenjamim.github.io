$nome = true;
window.addEventListener('load',function(){
	document.getElementById('btn').addEventListener('click', Dialog);
	document.getElementById('btn-move').addEventListener('click',Move);
	document.getElementById('tela').firstElementChild.addEventListener('click', Dialog);
});
function Dialog(){
	
	if($nome){
	 	document.getElementById('tela').style.animation = 'tela-entrar 1s forwards';
	 	document.getElementById('tela').lastElementChild.style.animation = 'aviso-entrar 2s ease 1s forwards';
	 	document.getElementById('tela').firstElementChild.style.animation = 'x-entrar 0.5s ease 1s forwards';
	 	$nome = false
	}else{
		document.getElementById('tela').style.animation = 'tela-sair 1s';
		document.getElementById('tela').lastElementChild.style.animation = 'aviso-sair 2s';
	 	document.getElementById('tela').firstElementChild.style.animation = 'x-sair 2s';
		$nome = true;
	}

}

function Move(){
	if(document.getElementById('move').firstElementChild.style.display == 'block'){
		document.getElementById('move').firstElementChild.style.display = 'none';
		document.getElementById('move').lastElementChild.style.display = 'none';
		document.getElementById('btn-move').value = 'Ligar';
	}else{
		document.getElementById('move').firstElementChild.style.display = 'block';
		document.getElementById('move').lastElementChild.style.display = 'block';
		document.getElementById('btn-move').value = 'Desligar';
	}
	
}