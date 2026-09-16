# Benchmark e Graph — Carlos

## 1. Identificação e responsabilidade

**Responsável atual:** Carlos Miguel Alves de Sousa
**Área:** Benchmark e Graph
**Etapa:** Etapa 0 — Fundação
**Arquivo:** `docs/decisoes-tecnicas.md`

Durante a organização das responsabilidades da equipe, houve uma troca de funções entre Carlos e Kauã.

A responsabilidade inicialmente atribuída a Carlos foi assumida por Kauã, enquanto Carlos passou a assumir a frente de **Benchmark e Graph**, por alinhamento com a organização definida para a equipe.

Esta documentação registra as decisões técnicas e de produto relacionadas ao Benchmark e ao Graph. A implementação do frontend e do backend não faz parte desta entrega da Etapa 0.

---

## 2. Objetivo da documentação

Esta documentação tem como objetivo registrar as referências utilizadas como benchmark e transformar os aprendizados dessas referências em decisões aplicáveis ao Radar de Talentos.

O benchmark não tem como objetivo reproduzir as ferramentas analisadas. As referências são utilizadas para identificar padrões de organização, versionamento, conexão entre etapas e evolução de prompts que possam orientar o produto.

As decisões registradas aqui deverão servir como orientação para a implementação posterior do Graph e dos pipelines.

---

# 3. Benchmark

Foram analisadas três referências:

1. Langfuse
2. Langflow
3. LangSmith

As consultas foram realizadas em **16/09/2026**, utilizando as documentações oficiais das respectivas ferramentas.

---

## 3.1 Langfuse

**Referência oficial:** https://langfuse.com/

### O que foi observado

O Langfuse apresenta recursos voltados à organização e gerenciamento de prompts, incluindo versionamento, histórico de alterações e identificação de versões.

A documentação oficial descreve versões imutáveis e mecanismos de identificação de versões por meio de labels. Também apresenta recursos para acompanhar a evolução de prompts e comparar alterações entre versões.

### O que será aproveitado

Para o Radar de Talentos, será aproveitada a ideia de manter o histórico e a evolução dos prompts de forma identificável.

Isso contribui para que uma alteração em um prompt possa ser relacionada à sua versão anterior, permitindo compreender sua evolução.

### Por que essa referência foi escolhida

O Langfuse foi escolhido por apresentar uma abordagem clara para **organização, histórico e versionamento de prompts**, aspectos diretamente relacionados ao requisito do projeto de registrar versões e ciclos de melhoria.

### O que não será reproduzido

O projeto não utilizará a infraestrutura, APIs, SDKs ou mecanismos de implantação do Langfuse.

A referência será utilizada apenas como inspiração para decisões de organização e versionamento dentro do MVP.

---

## 3.2 Langflow

**Referência oficial:** https://www.langflow.org/

### O que foi observado

O Langflow utiliza um editor visual para representar workflows por meio de componentes conectados.

A estrutura permite visualizar etapas e suas conexões, tornando o fluxo de um processo mais compreensível visualmente.

### O que será aproveitado

Será aproveitado o conceito de representar relações entre elementos de maneira compreensível e navegável.

No Radar de Talentos, o Graph deverá permitir identificar como um prompt se relaciona com outros prompts e como eles participam de um pipeline.

### Por que essa referência foi escolhida

O Langflow foi escolhido por ser a referência mais diretamente relacionada à ideia de **Graph visual, workflows e conexão entre etapas**.

A referência ajuda a orientar a organização das relações sem exigir que o MVP replique um editor visual completo.

### O que não será reproduzido

O MVP não terá como requisito reproduzir um editor visual completo de workflows.

A visualização gráfica poderá ser implementada posteriormente como evolução da interface. Nesta etapa, o requisito principal é que as relações e a navegação entre os elementos estejam claramente definidas.

---

## 3.3 LangSmith

**Referência oficial:** https://docs.langchain.com/langsmith/

### O que foi observado

O LangSmith oferece recursos para criação, teste, versionamento e evolução de prompts.

A documentação apresenta histórico de versões, commits, comparação entre versões e recursos para testar diferentes prompts e resultados.

### O que será aproveitado

Será aproveitada a ideia de relacionar a evolução de um prompt com suas versões e testes.

Isso será utilizado como referência para a estrutura de evolução dos prompts dentro do Radar de Talentos.

### Por que essa referência foi escolhida

O LangSmith foi escolhido por apresentar uma relação clara entre **organização, comparação, testes e evolução de versões**, conceitos que se relacionam diretamente ao fluxo de melhoria contínua previsto para o projeto.

### O que não será reproduzido

O Radar de Talentos não utilizará a infraestrutura, APIs ou recursos proprietários do LangSmith.

A referência será utilizada somente para orientar decisões de organização e evolução de prompts.

---

# 4. Síntese das decisões do benchmark

| Referência | Principal contribuição observada       | Decisão para o Radar de Talentos                       |
| ---------- | -------------------------------------- | ------------------------------------------------------ |
| Langfuse   | Organização, histórico e versionamento | Manter histórico identificável das versões dos prompts |
| Langflow   | Graph visual e conexão entre etapas    | Representar relações entre prompts e pipelines         |
| LangSmith  | Comparação, testes e evolução          | Relacionar versões, testes e ciclos de melhoria        |

O benchmark, portanto, resulta em três decisões principais:

* **Versionar:** cada evolução relevante de um prompt deve poder ser identificada.
* **Relacionar:** prompts devem possuir relações que permitam compreender sua posição e função dentro do sistema.
* **Evoluir:** testes e resultados devem poder orientar alterações futuras nos prompts.

---

# 5. Decisão técnica do Graph

O Graph será utilizado como uma representação das relações entre prompts dentro do Radar de Talentos.

A finalidade principal do Graph é permitir que o usuário compreenda **como um prompt se relaciona com outros prompts e qual é sua posição dentro de um fluxo**.

O Graph não será tratado como um sistema independente nem como uma ferramenta externa.

A estrutura deverá permanecer compatível com:

* HTML5;
* CSS3;
* JavaScript puro;
* JSON;
* `localStorage`.

Não será introduzido framework ou biblioteca externa para tornar o Graph funcional no MVP.

---

## 5.1 Relações definidas

Foram definidas as seguintes relações:

| Relação         | Significado                                                           |
| --------------- | --------------------------------------------------------------------- |
| **anterior**    | Indica o prompt que precede o prompt atual em determinado fluxo       |
| **próximo**     | Indica o prompt que sucede o prompt atual                             |
| **depende de**  | Indica que um prompt necessita de outro como referência ou entrada    |
| **alimenta**    | Indica que o resultado de um prompt pode servir de entrada para outro |
| **alternativa** | Indica uma opção diferente para uma mesma finalidade ou etapa         |
| **revisão**     | Indica uma relação de revisão ou melhoria entre prompts               |
| **relacionado** | Indica uma relação temática ou funcional sem dependência direta       |

Essas relações devem ser utilizadas de maneira consistente com o modelo de dados oficial do projeto.

O Graph não deverá criar uma estrutura paralela de dados que entre em conflito com o modelo de dados canônico definido pela equipe.

---

# 6. Pipelines definidos

Foram definidos três pipelines principais para o produto:

## 6.1 Diagnóstico Operacional

Fluxo destinado à análise de situações, problemas ou necessidades operacionais.

A sequência deve permitir que o usuário percorra prompts relacionados ao diagnóstico e à organização das informações necessárias para compreender o problema.

**Objetivo:** apoiar a identificação e organização de problemas operacionais.

---

## 6.2 Conteúdo Educativo

Fluxo destinado à produção e organização de conteúdo com finalidade educativa.

A sequência deve permitir que o usuário percorra prompts relacionados à definição, elaboração, revisão e melhoria do conteúdo.

**Objetivo:** apoiar a criação estruturada de conteúdos educativos.

---

## 6.3 QA de Produto

Fluxo destinado à análise e revisão de um produto ou entrega.

A sequência deve permitir que o usuário percorra prompts relacionados à verificação, identificação de problemas, revisão e melhoria.

**Objetivo:** apoiar a identificação de problemas e a revisão de qualidade do produto.

---

# 7. Estrutura dos pipelines

Cada pipeline deverá possuir, no mínimo, quatro prompts relacionados entre si.

A navegação deverá permitir:

* acessar o prompt atual;
* identificar o prompt anterior;
* identificar o próximo prompt;
* visualizar relações relevantes;
* acessar prompts relacionados;
* compreender a posição do prompt dentro do pipeline.

A existência dos pipelines não significa que cada fluxo precise ser uma tela independente. O importante para o MVP é que a relação entre os prompts e a navegação entre as etapas esteja definida e seja implementável posteriormente.

---

# 8. Decisão técnica × fluxo do usuário

Para evitar confusão entre arquitetura e experiência de uso, as decisões foram separadas em dois níveis.

## 8.1 Decisões técnicas

As decisões técnicas definidas são:

* utilizar relações identificáveis entre prompts;
* manter as relações compatíveis com o modelo de dados oficial;
* utilizar JSON e `localStorage` como base de persistência prevista para o MVP;
* manter o Graph independente de frameworks;
* permitir que cada prompt seja relacionado a outros prompts;
* estruturar três pipelines;
* manter pelo menos quatro prompts em cada pipeline;
* utilizar relações como `anterior`, `próximo`, `depende de`, `alimenta`, `alternativa`, `revisão` e `relacionado`.

## 8.2 Fluxo do usuário

Do ponto de vista do usuário, a jornada esperada é:

**Encontrar → acessar o prompt → compreender o contexto → identificar relações → seguir para outro prompt → testar/aplicar → registrar resultado → continuar a evolução.**

Nos pipelines, o usuário deverá conseguir:

1. entrar em um fluxo;
2. visualizar o prompt atual;
3. entender sua posição;
4. avançar para o próximo prompt;
5. retornar ao anterior;
6. acessar uma relação relevante;
7. continuar o fluxo sem links quebrados.

A implementação visual dessa jornada será realizada posteriormente, conforme as decisões da equipe de interface.

---

# 9. Limites do MVP

O Graph e os pipelines deverão permanecer dentro do escopo definido para o MVP.

### Incluído

* relações entre prompts;
* navegação entre prompts;
* três pipelines;
* mínimo de quatro prompts por pipeline;
* identificação de relações;
* persistência local;
* compatibilidade com o modelo de dados oficial;
* implementação futura utilizando HTML, CSS, JavaScript, JSON e `localStorage`.

### Fora do escopo

Não fazem parte desta decisão:

* backend;
* login;
* colaboração em tempo real;
* execução automática de IA;
* cobrança ou sistema de pagamentos;
* integrações externas obrigatórias;
* dependência de Langfuse;
* dependência de Langflow;
* dependência de LangSmith;
* reprodução completa das interfaces dessas ferramentas;
* editor visual avançado de workflows como requisito do MVP.

As três ferramentas analisadas são referências de benchmark, não dependências do produto.

---

# 10. Critérios objetivos de aceite

A entrega referente ao Benchmark e Graph será considerada concluída quando os seguintes critérios forem atendidos:

* [ ] As três referências utilizadas no benchmark estão identificadas.
* [ ] Cada referência possui seu respectivo link oficial.
* [ ] A data da consulta das referências está registrada.
* [ ] Cada referência possui uma justificativa objetiva para sua escolha.
* [ ] Está registrado o que foi observado em cada referência.
* [ ] Está registrado o que será aproveitado no Radar de Talentos.
* [ ] Está registrado o que ficará fora do MVP.
* [ ] Os três pipelines estão descritos.
* [ ] Cada pipeline possui objetivo definido.
* [ ] As relações do Graph estão documentadas.
* [ ] A navegação entre prompts está descrita.
* [ ] A diferença entre decisão técnica e fluxo do usuário está registrada.
* [ ] O Graph permanece compatível com HTML, CSS, JavaScript, JSON e `localStorage`.
* [ ] A documentação não cria um modelo de dados paralelo.
* [ ] A documentação não entra em conflito com o modelo de dados canônico.
* [ ] A responsabilidade atual de Carlos está registrada.
* [ ] A troca de responsabilidades com Kauã está registrada.
* [ ] O documento está restrito às decisões de Benchmark e Graph.

---

# 11. Rastreabilidade

**Responsável pela documentação:** Carlos Miguel Alves de Sousa
**Responsabilidade:** Benchmark e Graph
**Etapa:** Fundação — Etapa 0

A presente documentação registra as decisões que deverão orientar a implementação posterior do Graph e dos pipelines.

A implementação deverá ser realizada em etapa posterior, respeitando as decisões registradas neste documento e o modelo de dados oficial do projeto.

---

# 12. Referências consultadas

* Langfuse — documentação oficial: https://langfuse.com/
* Langflow — documentação oficial: https://docs.langflow.org/
* LangSmith — documentação oficial: https://docs.langchain.com/langsmith/

**Data da consulta:** 16/09/2026.
