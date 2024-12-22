from django.urls import path
from .views import *

app_name='app1'

urlpatterns=[
    path('',home,name='home'),
    path('home1/',home1,name='home1'),
    path('course/',course,name='course'),
    path('signin/',signin,name='signin'),
    path('requestedcallback/',requestedcallback)
]