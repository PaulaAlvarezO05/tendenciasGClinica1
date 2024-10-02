from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from .serializers import *

class PatientViewset(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer  


    filter_backends = [
        DjangoFilterBackend,
        filters.SearchFilter,
        filters.OrderingFilter,
    ]
    
    filterset_fields = ('__all__')  # Mantiene todos los campos para el filtrado
    search_fields = ('__all__')  # Mantiene todos los campos para la búsqueda
    ordering_fields = ('__all__')  # Mantiene todos los campos para ordenar
