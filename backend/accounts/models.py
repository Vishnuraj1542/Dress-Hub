from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class UserAccount(AbstractUser):
    phone = models.CharField(max_length=12,unique=True)
    email=models.EmailField(unique=True)