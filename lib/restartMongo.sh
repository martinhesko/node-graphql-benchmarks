cd templates/ts-apollo-mongodb-backend
podman-compose down
podman-compose up -d
cd ../ts-apollo-postgres-backend
podman-compose down
podman-compose up -d

