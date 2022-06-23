function financeiros (){

    const financeiro = [
    
            {
    
                
                nome:"Ana Laura Alburqueque",
                idade: 9,
                responsavel: "Caroline Alburqueque",
                email: "carolineaburqueque@gmail.com",
                serie: "5º B",
                periodo: "manhã",
                faltas: 10,
                materias: "História, Matemática, Português",
                notas: [100,70,80],
                atividade: "Ballet",
                valor_Ativ: "R$350,00",
                mensalidade: "R$1.454,60",
                total:"R$1.804,60",
                data: 10,
            
                
        },
        {
    
                nome: "Danilo Costa",
                idade: 8,
                responsavel: "Marianna Costa",
                email: "mariannabove@gmail.com",
                serie: "5º B",
                periodo: "manhã",
                faltas: 6,
                materias: "História, Matemática, Português",
                notas: [80,70,90],
                atividade: "Futsal",
                valor_Ativ: "R$380,00",
                mensalidade: "R$1.454,60",
                total:"R$1.834,60",
                data: '5'
            
               
        },
        {
    
                nome: "Gabriel Vidal",
                idade: 8,
                responsavel: "Leticia Vidal",
                email: "leticiavidal@gmail.com",
                serie: "5º B",
                periodo: "manhã",
                faltas: 7,
                materias: "História, Matemática, Português",
                notas: [70,80,90],
                atividade: "Não matriculado",
                valor_Ativ: "----",
                mensalidade: "R$1.454,60",
                total:"R$1.454,60",
                data: 8
            
               
        },
        {
    
                nome: "Lia Napoli",
                idade: 9,
                responsavel: "Amanda Napoli",
                email: "amandanapoli@gmail.com",
                serie: "5º B",
                periodo: "manhã",
                faltas:4,
                materias: "História, Matemática, Português",
                notas: [80,90,100],
                atividade: "Vôlei",
                valor_Ativ: "R$350,00",
                mensalidade: "R$1.454,60",
                total:"R$1.804,60",
                data: 6
            
               
                
                
        }
    
    
    ];
    
    const financeiroJson = JSON.stringify(financeiro);
    
    const objFinanceiro = JSON.parse(financeiroJson)
    
    let financas = "<tr><td>Nome do Aluno(a):</td><td>Responsável:</td><td>E-mail do responsável:</td><td>Série do aluno (a):</td><td>Mensalidade:</td><td>Disciplinas:</td><td>Atividade extra:</td><td>Valor ativ. extra:</td><td>Mensalidade total:</td><td>Data de Vencimento</td></tr>";
    
    objFinanceiro.map(function(itemA, indexA){
        financas += "<tr>";
        financas += "<td>"+itemA.nome+"</td>";
        financas += "<td>"+itemA.responsavel+ "</td>";
        financas += "<td>"+itemA.email+ "</td>";
        financas += "<td>" +itemA.serie+ "</td>";
        financas += "<td>" +itemA.mensalidade+ "</td>";
        financas += "<td>"+itemA.materias+ "</td>";
        financas += "<td>" +itemA.atividade+ "</td>";
        financas += "<td>" +itemA.valor_Ativ+ "</td>";
        financas += "<td>" + itemA.total+ "</td>";
        financas += "<td>" +itemA.data+ "</td>";
        
        financas += "<tr>";
    })
    
    document.querySelector("#tabelaB").innerHTML = financas;
    }