function turmas(){
const turma = [
    {
    
            nome:  "Ana Laura Alburqueque",
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
            atividade: "Basquete",
            valor_Ativ: "R$380,00",
            mensalidade: "R$1.454,60",
            total:"R$1.834,60",
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
        
           
            
            
    },
    {

            nome: "Pedro Rezende",
            idade: 9,
            responsavel: "Bruna Rezende",
            email: "brunarezene@gmail.com",
            serie: "5º B",
            periodo: "manhã",
            faltas:5,
            materias: "História, Matemática, Português",
            notas: [80,60,70],
            atividade: "Natação",
            valor_Ativ: "R$450,00",
            mensalidade: "R$1.454,60",
            total:"R$1.904,60",
            data: 7
    
         
            
            

    }
];


const turmaJson = JSON.stringify(turma); //Transforme um objeto JS em Json

// const objetoJavaScript = JSON.parse(turmaJson); // Transformar um Json em objeto JS

// console.log(turmaJson);
// console.log(objetoJavaScript);

const objTurma = JSON.parse(turmaJson); 

let conteudo= "<tr><td>Nome do aluno(a):</td><td>Idade do aluno(a):</td><td>Responsável:</td><td>E-mail do responsável:</td><td>Série do aluno(a):</td><td>Período:</td><td>Total de faltas:</td><td>Disciplinas:</td><td>Notas:</td><td>Atividade extra:</td></tr>";



objTurma.map(function(item, idex){//mapeando 
        conteudo += "<tr>";
        conteudo += "<td>"+item.nome+"</td>";
        conteudo += "<td>"+item.idade+"</td>";
        conteudo += "<td>"+item.responsavel+"</td>";
        conteudo += "<td>"+item.email+"</td>"
        conteudo += "<td>"+item.serie+"</td>";
        conteudo += "<td>"+item.periodo+"</td>";
        conteudo += "<td>"+item.faltas+"</td>";
        conteudo += "<td>"+item.materias+"</td>";
        conteudo += "<td>"+item.notas+"</td>";
        conteudo += "<td>"+item.atividade+"</td>";
        
        
        conteudo += "</tr>";



})

document.querySelector("#tabelaA").innerHTML = conteudo;
}