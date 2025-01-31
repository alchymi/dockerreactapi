# Étape 1 : Construction avec Node.js
FROM node:18-alpine AS build
WORKDIR /app

# Copier package.json et package-lock.json pour installer les dépendances
COPY package.json package-lock.json ./
RUN npm install

# Copier le reste du projet et builder l'application
COPY . .
RUN npm run build

# Étape 2 : Servir avec Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]