mkdir templates
npx create-graphback templates/ts-apollo-mongodb-backend --templateName apollo-mongo-server-ts
npx create-graphback templates/ts-apollo-postgres-backend --templateName apollo-postgres-server-ts
cd templates/ts-apollo-mongodb-backend
npm install
podman-compose down
podman-compose up -d
cd ../ts-apollo-postgres-backend
npm install
podman-compose down
podman-compose up -d
