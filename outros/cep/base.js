//https://viacep.com.br/ws/mg/ipatinga/sabedoria/json/
window.addEventListener('load',function(){
	
	var form = document.getElementById('form');
	form.cep.addEventListener('blur',function(){
		var url = 'https://viacep.com.br/ws/'+this.value+'/json/';
		address(url,true);
	});
	form.cidade.addEventListener('blur',function(){
		var url = 'https://viacep.com.br/ws/'+form.estado.value+'/'+this.value+'/'+form.rua.value+'/json/';
		address(url,false);
	});
	form.rua.addEventListener('blur',function(){
		var url = 'https://viacep.com.br/ws/'+form.estado.value+'/'+form.cidade.value+'/'+this.value+'/json/';
		address(url,false);
	});
});

function address(url,a){

	var xhr = new XMLHttpRequest();
	xhr.open('GET',url);
	xhr.response = 'json';
	xhr.onload = function(){
		if(!!xhr.responseType){
			xhr.responseType = 'json';
			var json = xhr.response;
		}else{
			var json = JSON.parse(xhr.responseText);
		}
		preencher(json,a);
	}
	xhr.send();
}

function preencher(json,a){
	if(a){
		form.rua.value = (json.logradouro?json.logradouro:form.rua.value);
		form.bairro.value =  (json.bairro?json.bairro:form.bairro.value);
		form.cep.value = (json.cep?json.cep:form.cep.value);
		form.estado.value = (json.uf?json.uf:form.estado.value);
		form.cidade.value = (json.localidade?json.localidade:form.cidade.value);
	}else{
		var p = document.getElementById('ceps');
		p.innerHTML = '';
		for(var i in json){
			var option = document.createElement('option');
			option.setAttribute('value',json[i].cep);
			var text = document.createTextNode(json[i].cep+' - '+json[i].logradouro+' - '+json[i].bairro);
			option.appendChild(text);
			p.appendChild(option);
		}
	}
}
