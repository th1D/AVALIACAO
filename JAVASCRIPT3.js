const area = prompt("Você quer seguir para área de Front-End ou Back-End?");

if (area === "Front-End") {
  const framework = prompt("Você quer aprender React ou Vue?");
  
  if (framework === "React") {
    const especializacao = prompt("Você quer se especializar em Front-End ou se tornar Fullstack?");
    
    if (especializacao === "Front-End") {
      console.log("Você escolheu se especializar em Front-End!");
    } else if (especializacao === "Fullstack") {
      console.log("Você escolheu se tornar um desenvolvedor Fullstack!");
    } else {
      console.log("Opção inválida!");
    }
  } else if (framework === "Vue") {
    const especializacao = prompt("Você quer se especializar em Front-End ou se tornar Fullstack?");
    
    if (especializacao === "Front-End") {
      console.log("Você escolheu se especializar em Front-End!");
    } else if (especializacao === "Fullstack") {
      console.log("Você escolheu se tornar um desenvolvedor Fullstack!");
    } else {
      console.log("Opção inválida!");
    }
  } else {
    console.log("Opção inválida!");
  }
} else if (area === "Back-End") {
  const linguagem = prompt("Você quer aprender C# ou Java?");
  
  if (linguagem === "C#") {
    const especializacao = prompt("Você quer se especializar em Back-End ou se tornar Fullstack?");
    
    if (especializacao === "Back-End") {
      console.log("Você escolheu se especializar em Back-End!");
    } else if (especializacao === "Fullstack") {
      console.log("Você escolheu se tornar um desenvolvedor Fullstack!");
    } else {
      console.log("Opção inválida!");
    }
  } else if (linguagem === "Java") {
    const especializacao = prompt("Você quer se especializar em Back-End ou se tornar Fullstack?");
    
    if (especializacao === "Back-End") {
      console.log("Você escolheu se especializar em Back-End!");
    } else if (especializacao === "Fullstack") {
      console.log("Você escolheu se tornar um desenvolvedor Fullstack!");
    } else {
      console.log("Opção inválida!");
    }
  } else {
    console.log("Opção inválida!");
  }
} else {
  console.log("Opção inválida!");
}

// Perguntar sobre tecnologias adicionais
const tecnologias = [];

let adicionarTecnologia = true;

while (adicionarTecnologia) {
  const tecnologia = prompt("Tem mais alguma tecnologia que você gostaria de aprender? (Digite 'ok' para encerrar)");
  
  if