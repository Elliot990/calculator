from django.urls import path
from core import views
from .views import calculator


urlpatterns=[
    path('home/',views.calculator , name="home")
]