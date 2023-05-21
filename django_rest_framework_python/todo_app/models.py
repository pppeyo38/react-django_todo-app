from django.db import models

class User(models.Model):
    name = models.CharField(max_length=20)

class Todo(models.Model):
    user = models.ForeignKey(User, related_name='todos', on_delete=models.CASCADE)
    content = models.CharField(max_length=50)