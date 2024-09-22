from django.db import models
from ..users.models import User

class MedicalSpecialtie(models.Model):
    
    nombre = models.CharField("Nombre", max_length=100)
    
    medico = models.ForeignKey(
        User,
        verbose_name="Médico", 
        on_delete=models.CASCADE,
        limit_choices_to={'rol__nombre': 'Médico'}, #Filtro para que solo los usuarios con el rol de "Médico" puedan ser seleccionados
        null=True, 
        blank=True
    )
    
    def __str__(self):
        return f"{self.nombre}"