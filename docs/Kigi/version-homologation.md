---
id: version-homologation
title: Versão Homologação
---

### Versão Homologação

### **Suas tarefas**

1. Após o desenvolvimento da tarefa, deve ser lançado a tarefa para teste (Homologação).

2. Analisar os arquivos que foram alterados, conferir se não existem sujeiras.

Exemplo:

```
console.log
debbuger
códigos que não precisavam ser alterados
```

3. Fazer o git commit no padrão que o time escolheu.

4. Ir na pagina do Github, abrir o Pull Request para develop.

**OBS:** Usar o template adiquirido pela equipe.

5. Mover sua tarefa para review. Time de desenvolvimento irá fazer o review e caso esteja tudo certo quem fizer o review já irá fazer o merge.

---

### **Tarefas do time**

1. Fazer o review com cautela, sem pressa. Se estiver tudo certo, apenas faça o Merge Pull Request (Botão verde). Uma action será acionada. Só aguardar ela acabar.

:::important Importante

Tarefas de Back-end:

Após a action ser executada corretamente deve rodar o sync no ArgoCD de homologação, verifique com quem tem acesso e peça para fazer a sincronização.

:::

**OBS:** Front-end não é necessário rodar o ArgoCD.

2. Caso necessite alterações no código, coloque os comentários no Pull Request das alterações que precisam ser feitas, e coloque a tarefa para Correção review.

3. Se estiver tudo certo, apenas mova a tarefa para teste pendente.
