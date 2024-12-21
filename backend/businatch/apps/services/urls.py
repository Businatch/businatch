from rest_framework import routers
from django.urls import path, include
from .views import ServiceViewSet

router = routers.DefaultRouter()
router.register(r'services', ServiceViewSet, basename='service')

urlpatterns = [
    path('', include(router.urls)),
]