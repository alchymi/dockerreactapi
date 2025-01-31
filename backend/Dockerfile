# Étape 1 : Utilisation d'une image Node.js légère
FROM node:18-alpine

# Définition du dossier de travail
WORKDIR /app

# Copier uniquement les fichiers package.json et package-lock.json pour installer les dépendances
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier le code du backend
COPY . .

# Exposer le port 5000
EXPOSE 5000

# Lancer le serveur backend
CMD ["node", "server.js"]