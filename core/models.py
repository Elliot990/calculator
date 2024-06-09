from django.db import models

# Create your models here.
class calculator(models.Model):
    name=models.CharField(max_length=20)