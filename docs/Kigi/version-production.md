---
id: version-production
title: Versão Produção
---

### Versão Produção

## Kigi Produção

1. Caso for um hotfix, realizar o aceite do PR antes de tudo.
2. Caso for lançamento de versão, fazer o merge da **Sua branch** para a **stage** e o merge da **stage** para a **main**
3. Conferir se a branch **main** está atualizada.

**OBS:** Pode ser feito os merge pelo terminal, ou pela interface do github, aonde se sentir mais avontade. Lembrando que sempre terá que rodar a action da **stage** para **main**

```
    git checkout main

    git pull

```

:::important Importante

Tarefas de Back-end:

Após a action ser executada corretamente deve rodar o sync no ArgoCD de produção, verifique com quem tem acesso e peça para fazer a sincronização.

:::

**OBS:** Front-end não é necessário rodar o ArgoCD.

4. Commitar a alteração da versão lançada

   git commit -m "Lançamento de nova versão 1.53.2"

   git push

---

## Atualizar branchs

1. Atualizar a **main**

   git checkout main

   git pull

1. Ir para a **stage** e fazer o merge da **main**

   git checkout stage

   git pull

   git merge origin/main

   git push

1. Ir para **develop** e fazer o merge da **main**

   git checkout develop

   git pull

   git merge origin/main

   git push
