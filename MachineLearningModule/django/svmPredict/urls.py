# SJSU CS 218 Spring 2021 TEAM3

from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from svmPredict import views

urlpatterns = [
    #re_path(r'^svmPredict/(?P<pk>[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/$', views.DiabetesPredictDetail),
    path('svmPredict/', views.DiabetesPredictDetail),
]

urlpatterns = format_suffix_patterns(urlpatterns)
