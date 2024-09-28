from django.db import models
from ..patients.models import Patient
from ..users.models import User

class Appointment(models.Model):
  paciente = models.ForeignKey(
     Patient, 
     verbose_name="Paciente", 
     on_delete=models.CASCADE,
     null=True, 
     blank=True
  )
  medico = models.ForeignKey(
     User,
     verbose_name="Médico", 
     on_delete=models.CASCADE,
     limit_choices_to={'rol__nombre': 'Médico'}, #Filtro para que solo los usuarios con el rol de "Médico" puedan ser seleccionados
     null=True, 
     blank=True
  ) 
  fecha_hora = models.DateTimeField("Fecha y hora")
  motivo_consulta = models.TextField("Motivo de la consulta") #Tipo consulta
  estado = models.CharField(max_length=20, default='Programada', editable=False)

  def __str__(self):
    #return f"{self.paciente.nombres} {self.paciente.apellidos} - {self.fecha_hora} ({self.estado})"
    return f"Médico: {self.medico.nombres} {self.medico.apellidos} Fecha: {self.fecha_hora}"