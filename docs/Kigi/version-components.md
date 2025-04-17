---
id: version-components
title: Versão components
---

## Conceituação

Esse fluxo descreve o processo de desenvolvimento e lançamento de versões do pacote @kigi/components, garantindo que todas as alterações feitas no código-base do projeto sejam corretamente versionadas, testadas e disponibilizadas para os ambientes de desenvolvimento e produção. O objetivo é manter o código consistente, facilitar a colaboração e garantir que qualquer modificação no components esteja sincronizada com as demais partes do projeto.

## Componente

### **Desenvolvimento nos Componentes (MBG)**

Se você precisar desenvolver ou fazer alterações em algum componente MBG, o fluxo a ser seguido é o seguinte:

Localização dos Componentes: O código dos componentes MBG está localizado dentro da pasta do projeto em: app/node_modules/@kigi/components/src/components.

Aqui é onde você deve realizar todas as alterações ou desenvolver novos componentes. Lembre-se de não modificar os componentes diretamente na pasta node_modules após a instalação, pois essas alterações podem ser sobrescritas quando o repositório for atualizado ou o pacote for reinstalado.

Desenvolvimento: Após encontrar o componente adequado, faça as alterações necessárias, crie novos componentes ou modifique os existentes. Certifique-se de testar o componente localmente dentro desse contexto.

Sincronização com o MBG: Depois de realizar as mudanças no componente, você precisa sincronizar as alterações feitas com o diretório de components na raiz do projeto. Para isso, é necessário copiar ou mover as modificações que você fez dentro de app/node_modules/@kigi/components/src/components para a pasta components que está na raiz do projeto.

---

### **Versão dos Componentes (MBG)**

Lançar uma versão do @kigi/components no npm: Antes de fazer qualquer outra coisa, é necessário lançar a nova versão do pacote @kigi/components no npm, para que as modificações fiquem disponíveis para todos os ambientes que utilizam esse pacote. Para isso:

1. Na raiz do projeto, acesse a pasta components no terminal.

```
cd components
```

2. Em seguida, verifique a versão atual, atualize a versão do package:

Neste [link] você encontra as ultimas versões do components.

[link]: https://www.npmjs.com/package/@kigi/components

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

Copiar a versão gerada:  @kigi/components@1.16.0-beta.1
```

4. Instalar o pacote dentro do kigi.

Após a geração da versão e ter copiado a versão, você irá instalar o pacote dentro do kigi.

```
cd ../app

Digitar o comando:  npm i  --save @kigi/components@1.16.0-beta.1

```

5. Rode o projeto novamente e teste suas alterações.

---

### **Versão dos Componentes produção (MBG)**

Para subir a versão dos componentes, você seguirá os mesmos passos acima, porém oque mudara é a versão do package do components.

verifique a versão atual, atualize a versão do package.

```json
{
  "version": "1.16.0"
}
```

:::important Importante

Obeserve que agora não tera o -beta.1, Versões release (produção sempre será 1.xx.xx).

:::
