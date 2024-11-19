from django.db import models

class Program(models.Model):
    name = models.CharField(max_length=100)

# Create your models here.
class Event(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='images/')
    program = models.ForeignKey(Program, on_delete=models.CASCADE, default=1)

class Registration(models.Model):
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    email = models.EmailField()
    age = models.IntegerField()
    date = models.DateField()
    phone = models.IntegerField()
    sem = models.CharField(max_length=2)
    department = models.CharField(max_length=100)
    college = models.CharField(max_length=100)