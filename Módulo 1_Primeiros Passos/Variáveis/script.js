let nome = "Alex";
let idade = 41;

console.log(`Meu nome é ${nome} e minha idade é ${idade}`)


// Variáveis
/* 
VAR => Variáveis de var podem ser atualizadas e declaradas novamente dentro de seu escopo (região do código). Esse tipo de variável existe desde o começo na linguagem JavaScript.
LET => As variáveis de let podem ser atualizadas, mas não podem ser declaradas novamente.

CONST => As variáveis de const não podem ser atualizadas nem declaradas novamente (são utilizadas para valores constantes, como o valor de pi, por exemplo).


Enquanto var e let podem ser declarados sem serem inicializadas, variáveis declaradas com const devem ser inicializadas no momento da declaração.

Atualmente, let tem sido preferida pois em um código muito extenso, criado por um grupo de pessoas, por exemplo, evita que ocorra de duas variáveis distintas serem declaradas com o mesmo nome, o que causaria conflito e um retorno totalmente diferente do esperado, entre outros possíveis problemas. Ela foi criada posteriormente, na linguagem JavaScript (e também const), justamente para evitar confusão.

var (escopo global) - escopo fora do bloco.

let (escopo local) - escopo restrito ao bloco.

const (não permitindo reatribuição e nem redeclaração) - constante.

var

a variável var é declarada e iniciada no escopo da função
não respeitando bloco e permitindo a redeclaração e reatribuição.
let

a variável let é declarada no escopo da função, mas só é inicializada posteriormente
respeitando bloco e permitindo reatribuição, mas não permite a redeclaração.
const

a variável const é declarada no escopo da função, mas só é inicializada posteriormente
respeitando bloco e não permitindo reatribuição nem redeclaração.
OBS 1:

Ao declarar uma variável sem o var, sem o let ou sem o const, ela é criada no escopo global.
OBS 2:

Nunca declare variáveis sem var, let e const e evite a utilização de var.

*/

