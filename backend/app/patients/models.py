from django.db import models

# Create your models here.
class Patient(models.Model):
    
    GENDER_CHOICES = [
        ('M', 'Masculino'),
        ('F', 'Femenino'),
        ('O', 'Otro'),
    ]

    POLIZA_STATUS_CHOICES = [
        ('A', 'Activa'),
        ('I', 'Inactiva'),
        ('E', 'Expirada'),
    ]
    
    nombres=models.CharField('Nombres', max_length=100)
    apellidos=models.CharField('Apellidos', max_length=100)
    fecha_nacimiento=models.DateField('Fecha de Nacimiento')
    genero = models.CharField('Género', max_length=1, choices=GENDER_CHOICES)
    direccion=models.CharField('Dirección', max_length=100)
    telefono=models.IntegerField('Teléfono')
    email=models.EmailField('Email', max_length=100)
    contacto_emergencia=models.IntegerField('Contacto de Emergencia')
    numero_poliza=models.IntegerField('Número de Poliza')
    estado_poliza = models.CharField('Estado de Póliza', max_length=1, choices=POLIZA_STATUS_CHOICES)  # Usar opciones definidas
    vigencia_poliza=models.DateField('Vigencia de Poliza')
    
    def __str__(self):
        return f"{self.nombres} {self.apellidos}"