Pasos para ejecutar el proyecto:

en clinica\settings.py, revisar en la seccion DATABASES, hay dos formas de conectar la base de datos.

#1. PostgreSQL
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'TestDB',
        'USER': 'postgres',
        'PASSWORD': '####',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

#2. SQLite
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": "mydatabase",
    }
}

puedes comentar una con comillas simples para usar la otra opción. La opcion más recomendable es SQLite.

Luego, tienes que ingresar a clinica\clinica, donde se encuentra el archivo manage.py, para ejecutar los comandos python manage.py makemigrations, y luego python manage.py migrate, para que no hayan problemas con la base de datos. 

Ahora, abriras dos terminales de comandos, en las cuales vas a activar tu propio entorno. Luego, en una terminal puedes ejecutar el backend con python manage.py runserver, y en otra terminal npm run dev para ejectuar el front.