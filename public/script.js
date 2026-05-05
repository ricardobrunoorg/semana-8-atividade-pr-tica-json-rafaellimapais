const catalogo = [
    { id: 1, titulo: "interstellar", tipo: "filme", ano: 2014, generos: ["ficcao cientifica", "drama"], nota: 8.7, assistido: true },
    { id: 2, titulo: "the bear", tipo: "serie", ano: 2022, generos: ["drama", "culinaria"], nota: 9.1, assistido: false },
    { id: 3, titulo: "breaking bad", tipo: "serie", ano: 2008, generos: ["crime", "drama"], nota: 9.5, assistido: true },
    { id: 4, titulo: "matrix", tipo: "filme", ano: 1999, generos: ["acao", "ficcao cientifica"], nota: 8.7, assistido: false },
    { id: 5, titulo: "oppenheimer", tipo: "filme", ano: 2023, generos: ["biografia", "drama"], nota: 8.4, assistido: true },
    { id: 6, titulo: "severance", tipo: "serie", ano: 2022, generos: ["suspense"], nota: 8.7, assistido: false }
];

console.log(catalogo);
console.log("titulo do primeiro item:", catalogo[0].titulo);
console.log("ano do ultimo item:", catalogo[catalogo.length - 1].ano);

const terceiroitem = catalogo[2];
if (terceiroitem.generos.length >= 2) {
    console.log("segundo genero do terceiro item:", terceiroitem.generos[1]);
} else {
    console.log("o terceiro item so tem um genero.");
}

catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

const titulosmaiusculos = catalogo.map(item => item.titulo.toUpperCase());
console.log(titulosmaiusculos);

const naoassistidos = catalogo.filter(item => item.assistido === false);
console.log(`itens nao assistidos: ${naoassistidos.length}`);

const topitem = catalogo.find(item => item.nota >= 9);
if (topitem) {
    console.log(`encontrado: ${topitem.titulo} - nota: ${topitem.nota}`);
} else {
    console.log("nenhum item com nota maior ou igual a 9.");
}

const mediageral = catalogo.reduce((acc, item) => acc + item.nota, 0) / catalogo.length;
const assistidos = catalogo.filter(item => item.assistido);
const mediaassistidos = assistidos.reduce((acc, item) => acc + item.nota, 0) / assistidos.length;

console.log(`media geral: ${mediageral.toFixed(2)}`);
console.log(`media dos assistidos: ${mediaassistidos.toFixed(2)}`);

const temantigo = catalogo.some(item => item.ano < 2000);
const todoscomgenero = catalogo.every(item => item.generos.length >= 1);
console.log(`existe item antes de 2000? ${temantigo}`);
console.log(`todos tem pelo menos 1 genero? ${todoscomgenero}`);

const divoutput = document.getElementById("output");
const qtnfilmes = catalogo.filter(item => item.tipo === "filme").length;
const qtnseries = catalogo.filter(item => item.tipo === "serie").length;

const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

let rankinghtml = "<ul>";
ranking.forEach(item => {
    rankinghtml += `<li>${item.titulo} (nota: ${item.nota})</li>`;
});
rankinghtml += "</ul>";

divoutput.innerHTML = `
    <h3>resumo do catalogo</h3>
    <p>total de itens: ${catalogo.length}</p>
    <p>filmes: ${qtnfilmes} | series: ${qtnseries}</p>
    <p>nao assistidos: ${naoassistidos.length}</p>
    <p>media geral de notas: ${mediageral.toFixed(2)}</p>
    <h4>top 3 ranking:</h4>
    ${rankinghtml}
`;