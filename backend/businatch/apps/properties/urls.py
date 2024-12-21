from rest_framework import routers
from django.urls import path, include
from .views import PropertyViewSet

router = routers.DefaultRouter()
router.register(r'properties', PropertyViewSet, basename='property')

urlpatterns = [
    path('', include(router.urls)),
]