# TempTunes

é um serviço revolucionário que combina dados meteorológicos e preferências musicais para oferecer sugestões de músicas personalizadas aos usuários. Baseado em um estudo pioneiro que revelou a relação entre gêneros musicais e temperatura ambiente, TempTunes utiliza algoritmos avançados para sugerir trilhas sonoras perfeitas para cada clima.

## Tecnologias Utilizadas
<img src="https://i.ibb.co/dtx6Td0/DOCKERZADA.png" width="100px"> <img src="https://i.ibb.co/1zJs410/REDIS.png" width="100px">  <img src="https://marcoantdeveloper.netlify.app/assets/img/icons/NESTJS.png" width="100px">

- NestJS
- Redis
- Docker
---
## Integrações

Além das funcionalidades básicas, o projeto oferece integrações com outros sistemas e serviços. As seguintes integrações estão disponíveis:

- **API Spotify**:
  
  Esta integração permite acessar recursos da API do Spotify para obter informações sobre playlists e músicas com base nas preferências do usuário.

   <img src="https://i.ibb.co/8mX89Rk/spotify-logo-4-FFDEEE153-seeklogo-com.png" style="width:100px">

   #

- **API Open Weather**:
  
  Esta integração permite acessar recursos da API Open Weather para obter informações meteorológicas precisas de diferentes cidades em todo o mundo.

   <img src="https://i.ibb.co/LZXWyWy/images.png" style="width:100px">
---
### Pré-requisitos

- Docker instalado na máquina
- Node.js instalado na máquina (caso esteja executando o projeto localmente)
---
### Passos para Iniciar
1. **Configurar a Conexão com o Redis**
   Configure a variável de ambiente `REDIS_HOST` com o IP da máquina onde o Redis está rodando.
   Exemplo de configuração no arquivo `.env-example`:

  <img style="margin-left:20%" src="https://i.ibb.co/3dCf3Hp/image.png">

   Certifique-se de que o arquivo `.env-example` esteja configurado corretamente e esteja sendo carregado pelo seu aplicativo NestJS.

2. **Execução do Docker**
Para rodar todo o projeto execute um unico comando no terminal: 
    ```
    > docker compose up 
    ```

3. **Redis Comander**
Caso queira consultar as keys do redis que estão sendo salvas acesse através do link:
    ```
    > http://127.0.0.1:8081/
    ```
---
### Como Fazer Requisições

Para utilizar as funcionalidades do projeto, siga os seguintes passos:

### 1. Requisição de Estatísticas

- **Endpoint**: `localhost:3000/statistics`
- **Método**: GET
- **Descrição**: Este endpoint retorna as estatísticas de todas as cidades consultadas no projeto.
- **Exemplo de Uso**:
  ```
  GET localhost:3000/statistics
  ```

### 2. Requisição de Playlist

- **Endpoint**: `localhost:3000/playlist`
- **Método**: GET
- **Parâmetros de Consulta**:
- `city`: Nome da cidade desejada (sem acentos)
- **Descrição**: Este endpoint retorna uma playlist com base na cidade fornecida via parâmetro de consulta. A temperatura da cidade é consultada e com base nela uma playlist adequada é selecionada de acordo com o gênero.

- **Exemplo de Uso**:
  ```
  GET localhost:3000/playlist?city=texas
  ```
