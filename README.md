# **Clock JS** 
 >"What’s The Time?"" - DOOPEE TIME <img src:>

### O QUE É ESSE PROJETO 
***Clock Js*** é um simples programa que tenta representar duas formas de relógio, digital e de "parede"

O grande diferencial desse programa é, em primeiro ponto, o display funcional de ambos os relógios, e em segundo, usar diferentes coordenadas, as quais são selecionadas pelo cliente, e entregar o horario daquela região em tempo real

### COMO USAR
Para conseguir usar o programa basta:
1. Fazer o download do repositório
2. Iniciar o arquivo HTML no navegador 
3. Selecionar a região escrita (Está no campo escrito "select")    

As regioẽs disponíveis são:
+  EU-LO → Europe/London
+  AM-SP → America/Sao_Paulo
+  AM-NW → America/New_York
+  AS-HK → Asia/Hong_Kong
+ AF-NRB → Africa/Nairobi

### COMO FOI FEITO
Pode-se dizer que o funcionamento é algo simples e prático. Para tornar a explicação mais descretiva, ela é separada por linguagens usadas

Cada parte do projeto foi feita inteiramente a mãos


> ### <font color="#DC4D25">HTML</font>

As marcações HTML foram definidas a partir da necessidade dos itens para a criação da forma dos relógios

O primeiro relógio é constituído com duas tags, select e span. O select é utilizado para definir a região escolida pelo cliente, já o span, para criar o display do horário

O segundo relógio é basicamente 3 spans e 3 divs. As divs estão englobando cada ponteiro, os quais são representandos pelos 3 spans mencionados

Para separar os relóogios, cada um foi adicionado em seu container respectivo
> ### <font color="#254CDD">CSS</font>

Com o decorrer do projeto, foi definido que a apresentação dos relógios deveria ser voltada pela estética minimalista

Já no prejeto em si, as cores claras foram escolidas para demonstrar simplicidade, mas, ao mesmo tempo, resaltar os detalhes de cada relógio

As tags mais usadas nesse projeto em CSS foram a de dimensão dos itens, como min-width, max-width e entre outros
> ### <font color="#E9B824">JAVASCRIPT</font>

O princípio para coletar os horários foi o objeto Date (obviamente). Com ele foi possível definir a localidade, o formato, e entre outros detalhes do projeto

As funções dos relógios foram definidas para que, quando uma região for definifada pelo usuário, elas serão acionadas, recebendo o valor da região

Os valores estão armazenados no atributo 'value' de cada 'tag option'. Quando um usuário seleciona o local, o JAVASCRIPT vai coletar o 'value' e então usar ele de refêrencia para a localidade 


#### Relógio Digital (<font color='green'>digitalClock( )</font> )
Para passar as horas ao display da página, foram criados duas váriaveis, "hours" e  "minutes", que recebem as horas.
Para o relógio se manter atualizado com a hora em tempo real, ele foi setado para ser atualizada a cada 1000 milissegundos

#### Relógio De Parede(<font color='green'> clock( )</font> )
Esse relógio também passa pelo processo de atualização, porém, é atualizado a cada 1 segundo

Para que o relógio faça os ponteiros girarem de acordo com as horas, o programa vai receber os segundos, minutos e horas,(sendo: segundos *6, minutos *6 e segundos *30) e então, vai realizar um cálculo para saber quantos degraus deve virar a div dos ponteiros

Por exemplo: 12:12:20

Segundos = 20 * 6 = 120deg

Minutos = 12 * 6 = 72deg

Horas = 12 * 3 = 360deg

### POR QUE UM RELÓGIO
Desde que inicie meus estudos, fiquei muito impressionado pela capacidade de coisas possíveis de se criar, desde lá percebi que o limite era minha imaginação

Quando decidi que iria adrentar a ideia do relógio, estava com a ideia de desafiar tudo o que já tinha feito antes em meus estudos. Um programa funcional, que poderia não só ser atualizado sem carregar a página novamente, mas, também, simular algo que nem imaginava ser possível apenas com algumas linhas de códigos 

### CONSIDERAÇÕES FINAIS
Se você chegou até aqui saiba que sou muito agradecido pela sua atenção

Caso queira compartilhar alguma opnião sobre o projeto, ou qualquer tipo que seja, ficarei muito feliz em ler ( ˶ˆᗜˆ˵ )

(*ˊᗜˋ*)/ ᵗᑋᵃᐢᵏ ᵞᵒᵘ* ✧˚ ༘ ⋆｡♡˚
