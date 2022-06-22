function chats (){

    const chat = [
    
            {
    
                
                Professor:"Luiz",
                Materia: "Matematica",
                
                mensagem: "Olá, seu msg foi recebida Fernando.",            
                
            }
    
    
    ];
    
    const chatJson = JSON.stringify(chat);
    
    const objchat = JSON.parse(chatJson)
    
    let chats = "<tr><td>Professor(a):</td><td>Matéria:</td><td>mensagem:</td><td>";
    
    objchat.map(function(itemA, indexA){
        chats += "<tr>";
        chats += "<td>"+itemA.Professor+"</td>";
        chats += "<td>"+itemA.Materia+ "</td>";
        chats += "<td>"+itemA.mensagem+ "</td>";

        
        chats += "<tr>";
    })
    
    document.querySelector("#tabelaB").innerHTML = chats;
    }