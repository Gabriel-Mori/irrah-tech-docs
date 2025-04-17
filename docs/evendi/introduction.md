---
id: introduction
title: Introdução
---

## Conceituação

Este guia contém as instruções para configurar e executar os repositórios do Evendi, tanto para o back-end quanto para o front-end. Siga os passos abaixo para garantir que tudo esteja configurado corretamente.

## Primeiros passos

### **Baixar repositórios**

- Front: https://github.com/irrahgroup/newjersey-elizabeth
- Back: https://github.com/fourpixelit/evendi-web

---

### **Para rodar a aplicação local**

**Front-end**

1. **Instale o Firebase Tools**:

   ```bash
   npm install -g firebase-tools

   ```

   Isso é necessário para rodar tanto o backend quanto o frontend.

2. **Configure o arquivo `.env.local`**:

   Crie um arquivo `.env.local` na raiz do projeto com o seguinte conteúdo:

   ```
   DB_USER=evendi
   DB_HOST=e-vendi-production.ckufj7q0vlbi.sa-east-1.rds.amazonaws.com
   DB_DATABASE=evendi
   DB_PASS="297db6d1c5b8489b87979014f07f4257"
   DB_PORT=5432
   CURRENT_HOST=staging.kigi.store
   DB_REDIS_URL=redis://:prAr48o37ogr4643X285qizsLek8WQ@186.251.26.40:6379
   ```

   3. **Selecione a versão correta do Node.js e instale as dependências**:

   ```
   nvm use 22
   npm install
   npm run dev
   ```

   4. **Configure a URL da API**:

   No arquivo `constants.ts` (ou equivalente), configure a URL da API para apontar para o backend local:

   ```tsx
   EVENDI_API: '<http://localhost:5002/zaap-admin/us-central1/api/api>';
   ```

---

### Testes

Para testar a aplicação, utilize o ambiente de homologação:

- URL da loja de homologação: http://testestore.staging.kigi.store.localhost:3000/

### Batendo em produção

É possível subir o back-end do e-vendi para subir debugar produção.

No front:

1. No arquivo `environments.ts` altere o retorno da função IsProduction para true;
2. No Kigi em `api-locations.js`, altere os seguintes atributos para bater em prod.
   1. apiLocation
   2. exportApi
   3. importApi
   4. apiFinanceLocation
3. Ainda no `api-locations.js` altere a variável eVendiApi para o endereço da aplicação local

---

### **Back end**

1. **Entre na branch v2 e pasta de funções, selecione a versão correta do Node.js e instale as dependências**:

   ```bash
   git checkout v2
   cd functions
   nvm use 16
   npm install
   npm run serve
   ```

---

### **Duvidas**

Seu ambiente está pronto, é só desenvolver, mas caso haja duvidas ou não conseguir executar os passo a passo chame alguém do time.
