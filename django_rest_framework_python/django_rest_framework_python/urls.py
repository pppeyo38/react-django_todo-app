from django.contrib import admin
from django.urls import path, include
from todo_app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', views.UserList.as_view()),
    path('user/<int:pk>', views.UserDetail.as_view()),
    path('todos/', views.TodoList.as_view()),
    path('todo/<int:pk>', views.TodoDetail.as_view()),
]
