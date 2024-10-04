from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from .serializers import *

class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    def get_serializer_class(self):
        if self.action in ['update', 'partial_update']:  # Permite actualizaciones parciales
            return UserUpdateSerializer # Usa el serializer de actualización
        return super().get_serializer_class()