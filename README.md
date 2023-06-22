ARQUITECTURA DE MICROSERVICIOS

El proyecto esta basado en la arquitectura de MICROSERVICIOS, utilizando la API de StarWars donde se trabajaron las siguientes aplicaciones, siendo cada una de ellas un microservicio:

- Microservicio de Gateway
- Microservicio de Characters
- Microservicio de Planets
- Microservicio de Films
- Microservicio de Database

Integración de los datos utilizando MongoDB, como base de datos NoSQL y MongoDB Atlas para su gestión.
Despliegue de los microservicios en diferentes contenedores utilizando Docker y Docker Compose para asegurar un funcionamiento unificado en una Máquina Virtual desplegada en Google Cloud.

Endpoints:
- http://34.27.208.115:8000/characters
- http://34.27.208.115:8000/characters/:id
- http://34.27.208.115:8000/planets
- http://34.27.208.115:8000/planets/:id
- http://34.27.208.115:8000/films
- http://34.27.208.115:8000/films/:id
