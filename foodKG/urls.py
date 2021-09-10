from django.urls import path
from . import views

urlpatterns = [
    # localhost:8000/article/
    # path('', views.login, name="login"),
    path('test/', views.test, name="test"),
    path('index/', views.index, name="index"),
    path('index/demo_data/', views.demo_data, name="data"),
    path('index/visualAnalyze/', views.visualAnalyze, name="visualAnalyze"),
    path('index/list_analyze/', views.list_analyze, name="list_analyze"),

]