from django.db import models

class User(models.Model):
    name = models.CharField(max_length=20)

class Todo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_todos", to_field="id")
    content = models.CharField(max_length=50)