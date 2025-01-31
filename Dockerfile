# Utiliser docker-compose pour lancer les services
FROM docker/compose:latest

WORKDIR /app

# Copier les fichiers nécessaires
COPY docker-compose.yml /app/docker-compose.yml
COPY backend /app/backend
COPY frontend /app/frontend

# Exécuter docker-compose
CMD ["docker-compose", "up"]