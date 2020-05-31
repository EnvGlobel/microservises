# Compile Statics
`docker-compose -f docker-compose.yml run frontend npm run build`
`docker-compose -f docker-compose.yml run django python manage.py collectstatic`