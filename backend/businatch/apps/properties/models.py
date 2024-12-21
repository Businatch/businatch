from django.db import models

class Property(models.Model):
    address = models.CharField(max_length=200)
    owner = models.ForeignKey("users.User", on_delete=models.CASCADE)
    monthly_rent = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)