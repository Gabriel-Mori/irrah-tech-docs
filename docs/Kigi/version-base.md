---
id: version-base
title: Versão Base
---

## Conceituação

Esse fluxo descreve o processo de desenvolvimento e lançamento de versões do pacote @kigi/base, garantindo que todas as alterações feitas no código-base do projeto sejam corretamente versionadas, testadas e disponibilizadas para os ambientes de desenvolvimento e produção. O objetivo é manter o código consistente, facilitar a colaboração e garantir que qualquer modificação no base esteja sincronizada com as demais partes do projeto

## Base

### **Desenvolvimento no Base**

Se você precisar desenvolver ou fazer alterações no base do projeto, o fluxo a ser seguido é o seguinte:

Localização do base: O código dos base está localizado dentro da pasta do projeto em: app/node_modules/@kigi/base/src.

Aqui é onde você deve realizar todas as alterações. Lembre-se de não modificar os base diretamente na pasta node_modules após a instalação, pois essas alterações podem ser sobrescritas quando o repositório for atualizado ou o pacote for reinstalado.

Desenvolvimento: Faça as alterações necessárias, Certifique-se de testar localmente dentro desse contexto.

Sincronização com o MBG: Depois de realizar as mudanças no Base, você precisa sincronizar as alterações feitas com o diretório de Base na raiz do projeto. Para isso, é necessário copiar ou mover as modificações que você fez dentro de app/node_modules/@kigi/base/src para a pasta base que está na raiz do projeto.

---

### **Versão do Base**

Lançar uma versão do @kigi/base no npm: Antes de fazer qualquer outra coisa, é necessário lançar a nova versão do pacote @kigi/base no npm, para que as modificações fiquem disponíveis para todos os ambientes que utilizam esse pacote. Para isso:

1. Na raiz do projeto, acesse a pasta components no terminal.

```
cd base
```

2. Em seguida, verifique a versão atual, atualize a versão do package:

Neste [link] você encontra as ultimas versões do base.

[link]: https://www.npmjs.com/package/@kigi/base

```json
{
  "version": "1.16.0-beta.1"
}
```

Versão beta deve ser sempre para teste.

3. Lançar a versão no npm.

:::important Importante

Se ainda não estiver logado no npm, peça a alguem da equipe que já tenha acesso para ajudar com o acesso ou até mesmo o lançamento da versão.

:::

```
Se já estiver logado no npm.

Digitar o comando: npm publish

Copiar a versão gerada:  @kigi/base@1.16.0-beta.1
```

4. Instalar o pacote dentro do kigi.

Após a geração da versão e ter copiado a versão, você irá instalar o pacote dentro do kigi.

```
cd ../app

Digitar o comando:  npm i  --save @kigi/base@1.16.0-beta.1

```

5. Rode o projeto novamente e teste suas alterações.

---

### **Versão do Base produção**

Para subir a versão do Base, você seguirá os mesmos passos acima, porém oque mudara é a versão do package do Base.

verifique a versão atual, atualize a versão do package.

```json
{
  "version": "1.16.0"
}
```

:::important Importante

Obeserve que agora não tera o -beta.1, Versões release (produção sempre será 1.xx.xx).

:::
