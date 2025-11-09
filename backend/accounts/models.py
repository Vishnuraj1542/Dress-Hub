from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class UserAccount(AbstractUser):
    phone = models.CharField(max_length=12,unique=True)
    email=models.EmailField(unique=True)


class UserDetails(models.Model):
    name = models.CharField(max_length=22,null=True,blank=True)
    address=models.TextField(null=True,blank=True)
    gender=models.CharField(max_length=10,null=True,blank=True)
    dob=models.DateField(null=True,blank=True)
    pincode=models.IntegerField(null=True,blank=True)
    