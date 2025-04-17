---
id: introduction-kigi
title: Introdução
---

## Conceituação

Esse guia tem como objetivo orientar a configuração do ambiente local de desenvolvimento do projeto Kigi. Ele foi criado para facilitar o onboarding de novos devs e padronizar os passos necessários para rodar a aplicação localmente, tanto no front quanto no back.

Ao seguir esse passo a passo, você vai:

Instalar as ferramentas essenciais (como Docker, NVM, Git, JetBrains etc.).

Clonar os repositórios necessários.

Configurar o banco de dados local com uma base limpa.

Subir a API e garantir que o projeto back-end esteja com a SDK e .yml corretos.

Rodar o front-end com a versão correta do Node e dependências ajustadas.

Além disso, o documento inclui detalhes importantes de configuração e dicas que podem evitar bugs e perda de tempo. A ideia é deixar tudo mastigado pra você começar a desenvolver sem dor de cabeça.

Se travar em algum ponto, só chamar alguém do time.

## Pré-requisitos

- Brew - https://brew.sh/
- JetBrains Toolbox - https://www.jetbrains.com/toolbox-app
  - IntelliJ
  - WebStorm
  - DataGrip
- Docker - recomendo baixar o desktop, mesmo se for usar só via CLI https://www.docker.com/
- Nvm - https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating
- Git - https://git-scm.com/downloads/mac

**OBS:** Caso deseje usar o VSCODE, fique avontade.

---

## Primeiros passos

### **Baixar repositórios**

- Front: https://github.com/kigisistemas/kigi-front
- Back: https://github.com/kigisistemas/kigi-api

---

### **Para rodar a aplicação local**

No clone do projeto (Backend) tem um arquivo chamado settings.xml, tem que colocar na pasta .m2 na home (pasta oculta);

---

### **Banco**

1. Baixar o arquivo de banco limpo (acho que seria interessante colocar isso no git)
2. Na pasta home criar o diretório: docker_volumes/kigi-postgres
3. Rodar a imagem docker do postgres (Está localizada no docker-compose.yml dentro do projeto do back)

   1.Executar o container do banco docker exec -it "idContainer" bash

   ```bash
    docker exec -it <idContainer> bash
   ```

   2.Acessar pasta teste e executar o postgres

   ```bash
   cd teste && psql -U mobiage postgres
   ```

   3.Apagar o database mobiage e recriar-lo

   ```sql
   --Apagar o database
   drop database mobiage;
   --Reacriar
   create database mobiage;

   --Para sair da execução execute o comando abaixo
   \q
   ```

   4.Ainda dentro da pasta teste, execute o backup limpo

   ```bash
   psql -U mobiage mobiage < backup.sql
   ```

---

### **Back-End**

1 - Abrir repositório do back

2 - No IntelliJ, em Project Structures baixar a versão da SDK 21 da Amazon Corretto

3 - (Tem uma alteração do .yml que eu não sei se vai subir no código, o Alan fez na minha máquina e falou para fazer um stash ontem, mas não sei o que vai ser feito)

4 - Abra o arquivo application.yml dentro da pasta mobiage-boot e verifique se os valores vão estar igual os valores abaixo:

```yaml
{

#Não commite essas alterações...
datasource:
	user: mobiage

security:
  host: https://api.kigisistemas.com.br
}
```

5 - Criar um runner do Spring conforme o print

![Minha imagem legal](/img/config-spring.png)

---

### **Front-End**

1 - Selecionar a versão do Node descrita no arquivo .npmrc do projeto - nvm install <VERSÃO>

2 - Instalar as dependências - npm i

3 - Executar o projeto - npm run dev

4 - Para roda o projeto local, é importante garantir duas informações em codigo. verifique o arquivo `api-location.json`, e garanta que os valores estejam igual o as chaves abaixo.

```json
{
  "apiLocation": "http://localhost:8080/mobiage-api",
  "apiFinanceLocation": "http://localhost:8080/mobiage-api"
}
```

---

### **Duvidas**

Seu ambiente está pronto, é só desenvolver, mas caso haja duvidas ou não conseguir executar os passo a passo chame alguém do time.
