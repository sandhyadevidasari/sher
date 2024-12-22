from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,'home.html')

def home1(request):
    return render(request,'home1.html')

def course(request):
    return render(request,'course.html')

def signin(request):
    return render(request,'signin.html')

def requestedcallback(request):
    return render(request,'requestedcallback.html')
