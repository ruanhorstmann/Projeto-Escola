var main = document.getElementsByTagName('main')[0];
var btnAlunos = document.getElementById('btnAlunos');

function criarLista(alunos){
    const lista = document.createElement('ul');
    for (const aluno of alunos) {
        const item = document.createElement('li');
        item.innerText = aluno.nome;   
        lista.appendChild(item);                                     
    }
    main.appendChild(lista);
}

function gerarLista(url){
    fetch(url)
    .then((resposta)=> {
        return resposta.json();
    })
    .then((json)=>{
        criarLista(json);
    })
}

function enviar(aluno, url, method, json){
    fetch(url, {
        method: method,
        body: JSON.stringify(json),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(()=> {
        gerarTabela('http://localhost:3000/alunos');
    });
}

function carregarHtml(url, elemento, aluno){
    fetch(url)
    .then((resposta)=> {
        return resposta.text();
    })
    .then((html)=>{
        elemento.innerHTML = html;
    })
    .then(()=>{
        var txtNome = document.getElementById('nome');
        var txtDesc = document.getElementById('nota');

        if (produto != null){
            txtNome.value = aluno.nome;
            txtDesc.value = aluno.nota;
        }

        var btnSalvar = document.getElementById('btnSalvar');
        btnSalvar.onclick = ()=>{

            var txtNome = document.getElementById('nome');
            var txtNota = document.getElementById('nota');
            var nomeForm = txtNome.value;
            var notaForm = txtNota.value;

            var json = {
                "nome": nomeForm,
                "nota": notaForm
            }

            var url = 'http://localhost:3000/alunos'

            if (aluno != null){
              enviar(aluno, url + '/' + aluno.id, 'PUT', json);                
            } else {
               enviar(aluno, url, 'POST', json);                
            }
        }
    });
}

function configurarForm(aluno){
    carregarHtml('html/form.html', main, aluno);
}

function gerarTabela(url){
    main.innerHTML = '';

    var btnIncluir = document.createElement('button');
    btnIncluir.innerText = "Incluir";
    btnIncluir.onclick = ()=> {
        configurarForm();
    }

    main.appendChild(btnIncluir);

    fetch(url)
    .then((resposta)=> {
        return resposta.json();
    })
    .then((produtos)=>{
        //Código de geração da tabela
        var table = document.createElement('table');
        var tbody = document.createElement('tbody');
        
        var qtdeLinhas = produtos.length;

        for(var i = 0; i < qtdeLinhas; i++){
            var produto = produtos[i];

            //Linha
            var tr = document.createElement('tr');

            //1a coluna
            var td = document.createElement('td');
            var txt = document.createTextNode(produto.id);            
            td.appendChild(txt);
            tr.appendChild(td);

            //2a coluna
            var td = document.createElement('td');
            var txt = document.createTextNode(produto.nome);            
            td.appendChild(txt);
            tr.appendChild(td);

            //3a coluna
            var td = document.createElement('td');
            var txt = document.createTextNode(produto.desc);            
            td.appendChild(txt);
            tr.appendChild(td);

            //4a coluna
            var td = document.createElement('td');

            //Link editar
            var linkEditar = document.createElement('a');
            var txt = document.createTextNode('Editar');
            linkEditar.appendChild(txt);
            linkEditar.href = '#';
            linkEditar.onclick = ()=> {
                configurarForm(produto);
            }
            td.appendChild(linkEditar);

            //Link excluir
            var linkExcluir = document.createElement('a');
            var txt = document.createTextNode('Excluir');
            linkExcluir.appendChild(txt);
            linkExcluir.href = '#';
            linkExcluir.onclick = ()=> {
                if (confirm('Tem certeza que deseja excluir o produto?')) {
                    fetch('http://localhost:3000/alunos/' + produto.id, {
                        method: "DELETE"                        
                    })
                    .then(()=> {
                        gerarTabela('http://localhost:3000/alunos');
                    });
                }
            }
            td.appendChild(linkExcluir);

            tr.appendChild(td);            
            tbody.appendChild(tr);
            
        }

        table.appendChild(tbody);

        
        main.appendChild(table);        

    })
}




function enviar(aluno, url, method, json){
    fetch(url, {
        method: method,
        body: JSON.stringify(json),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(()=> {
        gerarTabela('http://localhost:3000/produtos');
    });
}

function carregarHtml(url, elemento, produto){
    fetch(url)
    .then((resposta)=> {
        return resposta.text();
    })
    .then((html)=>{
        elemento.innerHTML = html;
    })
    .then(()=>{
        var txtNome = document.getElementById('nome');
        var txtDesc = document.getElementById('desc');

        if (produto != null){
            txtNome.value = produto.nome;
            txtDesc.value = produto.desc;
        }

        var btnSalvar = document.getElementById('btnSalvar');
        btnSalvar.onclick = ()=>{

            var txtNome = document.getElementById('nome');
            var txtDesc = document.getElementById('desc');
            var nomeForm = txtNome.value;
            var descForm = txtDesc.value;

            var json = {
                "nome": nomeForm,
                "desc": descForm
            }

            var url = 'http://localhost:3000/alunos'

            if (aluno != null){
              enviar(aluno, url + '/' +aluno.id, 'PUT', json);                
            } else {
               enviar(aluno, url, 'POST', json);                
            }
        }
    });
}

function configurarForm(aluno){
    carregarHtml('html/form.html', main, aluno);
}



btnAlunos.onclick = ()=>{
    main.innerHTML = '';
    gerarTabela('http://localhost:3000/alunos');
}

