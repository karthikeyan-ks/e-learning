from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse

def get_data(request):
    data = {
        "message": "Hello from Django!",
        "status": "success"
    }
    return JsonResponse(data)
