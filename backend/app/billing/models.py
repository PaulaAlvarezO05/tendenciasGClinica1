from django.db import models
from ..patients.models import Patient
# Create your models here.

class Billing(models.Model):
    paciente = models.ForeignKey(
     Patient, 
     verbose_name="Paciente", 
     on_delete=models.CASCADE,
     null=True, 
     blank=True
  )
    fecha=models.DateField('Fecha')
    monto = models.DecimalField('Monto', max_digits=15, decimal_places=2)  
    detalles = models.TextField('Detalles', blank=True) 
    estado_pago = models.CharField(
        'Estado de Pago', 
        max_length=20, 
        choices=[
            ('P', 'Pagado'),
            ('N', 'No Pagado'),
            ('C', 'Cancelado')
        ],
        
    )

    def __str__(self):
        return f"{self.paciente.nombres} {self.paciente.apellidos} - {self.fecha} - {self.estado_pago}"