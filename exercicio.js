// Este codigo faz a leitura de dados para apps coletadas do Google Play

const fs = require('fs');
const csvparse = require('csv-parse/lib/sync');

// Le cada linha do arquivo csv como um objeto e armazena no array 'app'
let apps = csvparse(fs.readFileSync('./gplaydata.csv', 'utf-8'), {
    columns: true,
    delimiter: ',',
    skip_empty_lines: true
});
// converte alguns atributos que sao inicialmente lidos com strings
apps = apps.map(elem => {
    elem.score = parseFloat(elem.score);
    elem.installs = parseInt(elem.installs);
    elem.androidVersion = parseFloat(elem.androidVersion);
    return elem;
});

console.log('Total de objetos deste array:', apps.length);
console.log('A estrutura do 1.o objeto:');
console.log(apps[0]);

// EXERCICIO 1: use reduce() para calcular o numero total de installs para todas as apps.

const contador = apps.length;
let total = 0;

const aux = apps.reduce((ant, atual) => {
/*apps[0].installs*/

    if(contador > ant){
        total = total + atual.installs;
        return contador-1;
    }
    else
        return ant;
}, 0);

console.log('O total de installs de todas as apps são de:',total);

// EXERCICIO 2: use filter() para selecionar somente apps com score maior que quatro (> 4) 


// EXERCICIO 3: use map() para mudar o atributo appname para lowerCase

