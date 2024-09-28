from django.db import models


class Patient(models.Model):
    
    GENDER_CHOICES = [
        ('M', 'Masculino'),
        ('F', 'Femenino'),
        ('O', 'Otro'),
    ]

    POLIZA_STATUS_CHOICES = [
        ('A', 'Activa'),
        ('I', 'Inactiva')
    ]
    
    nombre_completo=models.CharField('Nombres Completo', max_length=200)
    fecha_nacimiento=models.DateField('Fecha de Nacimiento')
    # Cambiar al front el choices
    genero = models.CharField('Género', max_length=1, choices=GENDER_CHOICES)
    direccion=models.CharField('Dirección', max_length=100)
    telefono=models.IntegerField('Teléfono')
    email=models.EmailField('Email', max_length=100)
    nombre_emergencia=models.CharField('Nombre Contacto de Emergencia', max_length=200)
    telefono_emergencia=models.IntegerField('Teléfono de Emergencia')
    compañia_Seguros=models.CharField('Compañia de Seguros', max_length=100)
    numero_poliza=models.IntegerField('Número de Poliza')
    # Condicional 
    estado_poliza = models.CharField('Estado de Póliza', max_length=1, choices=POLIZA_STATUS_CHOICES)  # Usar opciones definidas
    vigencia_poliza=models.DateField('Vigencia de Poliza')
    
    def __str__(self):
        return f"{self.nombre_completo} "