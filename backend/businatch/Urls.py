from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('businatch.apps.services.urls')),
    path('api/', include('businatch.apps.properties.urls')),
    path('api/', include('businatch.apps.blog.urls')),
    path('api/auth/', include('businatch.apps.users.urls')),
]