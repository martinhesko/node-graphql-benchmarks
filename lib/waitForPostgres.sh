RETRIES=5
until podman exec -ti ts-apollo-postgres-backend_postgres_1 sh -c "pg_isready" > /dev/null 2>&1 || [ $RETRIES -eq 0 ]; do
  sleep 2
done
