from django.shortcuts import render
from .models import Event
# Create your views here.
from django.http import JsonResponse

def get_data(request):
    events = Event.objects.all()

    data = [
        {
        "name" : event.name,
        "description" : event.description,
        "image" : event.image.url
        }
        for event in events
    ]
    return JsonResponse(data, safe=False)
