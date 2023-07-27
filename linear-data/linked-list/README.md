## LinkedList

Uma LinkedList é uma estrutura de dados linear, na qual os elementos não são armazenados em locais de memória contíguos. Os elementos em uma lista vinculada são vinculados usando ponteiros, conforme mostrado na imagem abaixo:

<img src="../../assets/Linked-List-Data-Structure.png">

- Node struct: um nó em uma lista encadeada geralmente consiste em dois componentes:
    - Next Pointer: Armazena o endereço de memória (referência) do próximo nó na sequência.
    - Head and Tail: A lista vinculada é acessada por meio do nó principal, que aponta para o primeiro nó da lista. O último nó da lista aponta para NULL ou nullptr, indicando o fim da lista. Este nó é conhecido como nó de cauda.

### Por que a estrutura de dados da lista vinculada é necessária?

- Estrutura de dados dinâmicos: o tamanho da memória pode ser alocado ou desalocado em tempo de execução com base na inserção ou exclusão da operação.
- Facilidade de Inserção/Exclusão: A inserção e exclusão de elementos são mais simples do que os arrays, pois nenhum elemento precisa ser deslocado após a inserção e exclusão, apenas o endereço precisa ser atualizado.
- Utilização eficiente da memória: como sabemos, a lista encadeada é uma estrutura de dados dinâmica que aumenta ou diminui de tamanho conforme a necessidade, evitando assim o desperdício de memória.
- Implementação: várias estruturas de dados avançadas podem ser implementadas usando uma lista vinculada, como uma pilha, fila, gráfico, mapas de hash, etc.

### Tipos de LinkedList

Existem basicamente três tipos de listas encadeadas: 
- Lista de ligação única 
- Lista encadeada dupla 
- lista ligada circular

#### 1 Lista de ligação única 

Em uma lista encadeada individualmente, cada nó contém uma referência ao próximo nó na sequência. Percorrer uma lista encadeada individualmente é feito na direção direta.

<img src="../../assets/Singlelinkedlist.png">



#### 2 Lista de ligação dupla 

Em uma lista duplamente encadeada, cada nó contém referências aos nós seguintes e anteriores. Isso permite a travessia nas direções para frente e para trás, mas requer memória adicional para a referência para trás.

<img src="../../assets/Doublylinkedlist.png">

#### 3 LIsta de ligação circular

Em uma lista encadeada circular, o último nó aponta de volta para o nó principal, criando uma estrutura circular. Pode ser simples ou duplamente ligado.

<img src="../../assets/Circularlinkedlist.png">
