
# FULL-CYCLE-2.0 - Docker - DESAFIO 2 


Este projeto cria uma aplicação node.js usando nginx como proxy reverso  que retorna:

```
<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.
```

Além disso, toda vez que a página é acessada a aplicação adiciona um registro no banco de dados mysql

## Para levantar a aplicação:

``docker-compose up -d``

## Para acessar aplicação:

Após levantar os serviços, acessar: ``localhost:8080`` 

> O nome ``Martin Harano`` será adicionado ao registro do banco de dados mysql

## EXTRA!!

Ao acessar ``localhost:8080/outro_nome``  
 ``outro_nome`` será adicionado ao registro ao invés do padrão ``Martin Harano``