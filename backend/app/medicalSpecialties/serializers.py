from rest_framework import serializers 
from .models import * 

class MedicalSpecialtieSerializer(serializers.ModelSerializer): 

    class Meta: 
        model = MedicalSpecialtie
        fields = ('__all__')