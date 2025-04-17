---
id: report
title: Report
---

### **Conceituação**

O Report é o módulo responsável por gerar relatórios, PDFs, documentos e também por enviar esses arquivos por canais como WhatsApp e outros. Toda vez que o sistema precisar gerar ou enviar algum documento, é esse módulo que entra em ação.

Como o Report não passa por QA, o deploy é feito direto em produção. Então, ao finalizar uma alteração, é só seguir os comandos listados abaixo para subir a nova versão.

---

## **Rodar o report**

Na raiz do projeto tem uma pasta report

```
cd report

nvm use 12

npm run dev
```

Atualize a pagina para que o kigi front rode o report.

---

## **Versão do report**

1. O report não tem QA, então o deploy é realizado direto em produção
2. npm run prod
3. firebase deploy --only hosting
