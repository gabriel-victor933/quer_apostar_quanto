# busca imagem base do node
FROM node:alpine

# usa essa pasta como diretório de trabalho (tipo um CD)
# a escolha da pasta fica ao seu critério
WORKDIR /usr/src

# copia o diretório atual para o workdir
COPY . .

# "expõe" a porta 3000
EXPOSE 3000

# baixa as dependências
RUN npm i

# faz a compilação do TS para JS
RUN npm run build

# só roda quando darmos docker run
CMD ["npm", "start"]