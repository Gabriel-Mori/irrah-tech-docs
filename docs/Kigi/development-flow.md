---
id: development-flow
title: Fluxo desenvolvimento
---

## Conceituação

Esse fluxo de desenvolvimento tem como objetivo garantir que o trabalho de desenvolvimento seja feito de forma estruturada e sem causar conflitos nas branches principais do repositório. Ele organiza o processo de criação de novas funcionalidades, revisão de código, testes e deploy, desde o momento em que a tarefa é iniciada até o lançamento em produção.

### **ATUALIZAR A MAIN**

Mudar para a branch main: git checkout main

1. git checkout main

Atualizar a branch main com as últimas mudanças:

1. git pull

---

### **CRIAÇÃO DE BRANCH**

**OBS:** Sempre criar uma branch nova a partir da main.

1. Verifique o número da tarefa (exemplo: KG-2552).

Criar uma nova branch com o nome da tarefa: git checkout -b KG-2552

1. git checkout -b KG-2552
2. Realizar o desenvolvimento.

---

### **PULL REQUEST**

Após finalizar o desenvolvimento da tarefa, criar o Pull Request (**PR**) sempre para a branch develop.

**OBS:** Se houver desenvolvimento em **components (mbg)** ou no **base** veja a documentação sobre lançamento de versão dos respectivos. <br/>

:::tip Documentações

👉 [Ver documentação de versão dos Components](version-components)

👉 [Ver documentação de versão do base](version-base)

:::

:::important Importante

NUNCA EM HIPÓTESE NENHUMA, FAÇA O MERGE DA DEVELOP NA SUA BRANCH

:::

- **BASE:** develop
- **COMPARE:** sua branch

Em caso de conflitos, vá até seu editor de código, entre na branch develop, atualize ela (git pull) e faça o merge da sua tarefa (git merge origin/sua branch) na develop para resolver o conflito.

---

### **ESPERAR O REVIEW**

1. Após abrir o **Pull Request**, solicite que um membro da equipe realize o **Code Review**.
2. Se a PR receber **duas aprovações**, o último revisor deve realizar o **merge pull request**.

###

---

### **TAREFA EM TESTE**

Após o **merge pull request**, sua tarefa será testada pela equipe de **QA**.

---

### **CASO DE CORREÇÃO**

Se a equipe de **QA** identificar problemas e a tarefa precisar de ajustes:

Retorne para sua branch original (exemplo: KG-2552). git checkout KG-2552

1. **OBS:** **NÃO CRIAR** outra branch, utilize a mesma.
2. Realize as correções necessárias.
3. Siga novamente o fluxo:
   - Abrir **Pull Request** para develop
   - Pedir revisão
   - Aguardar a liberação da tarefa para testes novamente

---

### **TAREFA APROVADA**

Se a tarefa for aprovada diretamente ou após correções, a equipe de **QA** moverá a tarefa para a coluna **AGUARDANDO DEPLOY**.

---
