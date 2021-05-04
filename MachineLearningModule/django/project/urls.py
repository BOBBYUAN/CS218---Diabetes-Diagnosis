# SJSU CS 218 Spring 2021 TEAM3

from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('svmPredict.urls')),
]
