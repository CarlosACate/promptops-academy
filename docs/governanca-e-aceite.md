# PROMPTOPS ACADEMY

## ETAPA 0 — PLANEJAMENTO E VALIDAÇÃO

**Responsável:** Isaac  
**Função:** Governança e Aceite  
**Orientação:** Rogério Alencar Filho  
**Data:** Setembro de 2026

---

## 1. Objetivo

A Etapa 0 tem como objetivo organizar e validar o projeto antes do início da implementação.

Nesta etapa serão definidos os critérios de qualidade, regras de privacidade, modelo de avaliação, responsabilidades, dependências e referências que deverão ser seguidas durante o desenvolvimento.

A implementação deve começar somente após a validação dos pontos necessários pela equipe.

---

## 2. O que será validado

Na Etapa 0, serão revisados:

- **Fluxo do sistema:** como o usuário encontra, testa, melhora e reutiliza os prompts;
- **Wireframes:** organização e funcionamento das principais telas;
- **Modelo de dados:** entidades, campos, relacionamentos, status e persistência utilizados pelo sistema;
- **Backlog:** atividades necessárias para o desenvolvimento;
- **Responsabilidades:** responsáveis por cada parte da implementação;
- **Dependências:** o que precisa estar definido ou implementado antes de cada atividade;
- **Critérios de aceite:** como verificar se uma entrega está adequada;
- **Documentação:** se as decisões e regras do projeto estão registradas e atualizadas.

---

## 3. Governança e modelo de dados

A Governança e Aceite deve trabalhar em conjunto com o modelo de dados utilizado pelo projeto.

O **modelo de dados canônico não deve ser apagado ou substituído sem que a alteração seja documentada e validada pela equipe**.

Caso exista mais de uma versão ou documento relacionado ao modelo de dados, deverá ser definida uma única referência oficial para evitar divergências.

A referência oficial deverá concentrar ou apontar claramente:

- entidades utilizadas pelo sistema;
- campos e relacionamentos;
- status;
- regras de versionamento;
- informações que precisam ser persistidas;
- alterações aprovadas no modelo.

Qualquer mudança posterior no modelo deverá ser registrada e comunicada antes de ser utilizada na implementação.

---

## 4. Inconsistências entre documentos

Antes do desenvolvimento, os documentos do projeto devem ser comparados para identificar possíveis diferenças relacionadas a:

- **Entidades;**
- **Status;**
- **Versionamento dos prompts;**
- **Persistência dos dados;**
- **Fluxos do sistema;**
- **Responsabilidades.**

Quando houver informações diferentes, a equipe deverá definir qual é a versão válida e registrar essa decisão na documentação.

O objetivo é evitar que diferentes integrantes implementem partes do sistema seguindo regras diferentes.

---

## 5. Minha função no projeto

Como responsável por **Governança e Aceite**, minha função será acompanhar a qualidade dos resultados e ajudar a equipe a definir critérios objetivos para avaliar os prompts, testes e entregas.

Minha parte envolve:

- criar e manter a rubrica de qualidade;
- definir regras para evitar informações inventadas;
- acompanhar os status dos testes;
- verificar questões de privacidade;
- revisar resultados e evidências;
- acompanhar a evolução das versões dos prompts;
- registrar riscos e decisões;
- verificar os critérios de aceite;
- sinalizar inconsistências encontradas na documentação.

---

## 6. Critérios de qualidade e aceite

As entregas serão avaliadas por critérios verificáveis:

| Critério | O que será verificado |
|---|---|
| **Clareza** | O objetivo e o funcionamento estão compreensíveis? |
| **Consistência** | A implementação segue as definições oficiais do projeto? |
| **Evidência** | Existe registro que comprove o resultado do teste? |
| **Anti-invenção** | Foram evitadas informações que não foram fornecidas ou comprovadas? |
| **Privacidade** | Foram utilizados apenas dados adequados para os testes? |
| **Utilidade** | O resultado atende ao objetivo definido? |
| **Frontend** | A interface segue o fluxo e os wireframes definidos? |
| **Backend** | As regras, entidades e operações seguem o modelo definido? |
| **Persistência** | Os dados são armazenados e recuperados conforme as regras do projeto? |
| **Documentação** | A entrega está documentada e coerente com a implementação? |
| **Versionamento** | As alterações de prompts e versões podem ser identificadas e acompanhadas? |

Uma entrega somente poderá ser considerada aceita quando os critérios aplicáveis forem verificados e houver evidência do resultado.

---

## 7. Regras importantes

Durante os testes e desenvolvimento:

- não inventar números, métricas ou informações;
- não apresentar suposições como fatos;
- deixar informações faltantes claras;
- não aprovar um teste que não foi realmente executado;
- utilizar dados fictícios quando necessário;
- não utilizar senhas, tokens ou informações confidenciais;
- seguir o modelo de dados oficial;
- registrar alterações relevantes nas regras do projeto;
- manter a documentação atualizada após mudanças aprovadas.

---

## 8. Registro e avaliação dos testes

Para cada teste, serão registrados:

**Teste → Versão do prompt → Entrada → Resultado esperado → Resultado obtido → Falha → Ajuste → Evidência → Responsável → Data → Próximo teste**

### Avaliação

Os resultados serão classificados como:

- **Aprovado:** atende aos critérios definidos;
- **Ajustar:** apresenta problemas que podem ser corrigidos;
- **Reprovado:** não atende aos critérios definidos.

O status **A executar** será utilizado separadamente para identificar testes que ainda não foram realizados.

Um teste só poderá receber uma avaliação depois de ser executado e analisado.

---

## 9. Versionamento e melhoria dos prompts

Quando um teste encontrar um problema, o prompt poderá ser ajustado e testado novamente.

O processo será:

**v1 → teste → problema → ajuste → v2 → novo teste**

Cada alteração relevante deve permitir identificar qual versão foi utilizada, qual problema foi encontrado e qual ajuste foi realizado.

Isso permite acompanhar a evolução dos prompts e verificar se as alterações realmente resolveram os problemas identificados.

---

## 10. Responsáveis, dependências e ordem de implementação

As atividades devem seguir uma ordem que considere suas dependências.

Antes de iniciar uma implementação, devem estar definidos os documentos ou decisões necessários para aquela atividade.

O acompanhamento deverá considerar:

| Atividade | Responsável | Dependência | Ordem |
|---|---|---|---|
| Definição do modelo | Responsável definido pelo projeto | Validação das entidades e regras | Inicial |
| Definição dos critérios | Isaac | Requisitos e fluxo do projeto | Inicial |
| Wireframes | Responsável definido pelo projeto | Fluxo do sistema | Após definição do fluxo |
| Implementação | Responsáveis técnicos | Modelo, fluxo e critérios validados | Após validação |
| Testes | Governança + responsáveis pela implementação | Funcionalidade implementada | Após implementação |
| Ajustes | Responsável pela entrega | Resultado dos testes | Após identificação de falhas |
| Nova validação | Governança e Aceite | Ajustes realizados | Final |

Os responsáveis específicos devem ser mantidos de acordo com a divisão oficial de tarefas do projeto.

---

## 11. Entregas da minha parte

Na Etapa 0, serão preparados:

1. **Rubrica de qualidade**;
2. **Regras contra invenção**;
3. **Critérios de aceite**;
4. **Regras de privacidade**;
5. **Modelo para registro dos testes**;
6. **Registro de riscos e decisões**;
7. **Critérios verificáveis para documentação, frontend, backend, design e persistência**;
8. **Acompanhamento das inconsistências entre os documentos do projeto**.

---

## 12. Histórico e organização do Pull Request

Antes da solicitação de nova revisão, o Pull Request deverá apresentar somente os documentos e alterações finais relacionadas à atividade.

Alterações antigas, arquivos substituídos ou documentos que não representam mais a versão válida devem ser removidos ou claramente identificados como substituídos.

Quando um documento for substituído, a documentação deve deixar claro:

**o que foi alterado → por que foi alterado → qual versão passa a ser a referência oficial.**

O objetivo é manter o histórico do PR organizado e facilitar a análise da versão final.

---

## 13. Checklist da Etapa 0

- [ ] Fluxo revisado
- [ ] Wireframes revisados
- [ ] Modelo de dados revisado
- [ ] Referência oficial do modelo definida
- [ ] Entidades e status conferidos
- [ ] Versionamento conferido
- [ ] Persistência conferida
- [ ] Backlog revisado
- [ ] Responsabilidades definidas
- [ ] Dependências identificadas
- [ ] Ordem de implementação definida
- [ ] Critérios de aceite definidos
- [ ] Rubrica criada
- [ ] Regras de privacidade definidas
- [ ] Regras contra invenção definidas
- [ ] Critérios de frontend e backend definidos
- [ ] Critérios de documentação definidos
- [ ] Riscos e decisões registrados
- [ ] Histórico do PR organizado
- [ ] Material apresentado para nova validação

---

## 14. Resultado esperado

Ao finalizar a Etapa 0, a equipe deverá ter uma referência clara sobre:

**o que será feito, como o sistema funcionará, quais informações serão utilizadas, quem será responsável por cada parte, quais são as dependências e como cada entrega será validada.**

Após a correção das inconsistências, organização dos documentos e validação dos critérios, o material deverá ser **submetido novamente para revisão** antes do avanço para a implementação.
