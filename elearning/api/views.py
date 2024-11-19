from django.shortcuts import render
from .models import Event, Registration
# Create your views here.
from django.middleware.csrf import get_token
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.http import require_POST
import json

@require_POST
@ensure_csrf_cookie
def registration(request):
    data = json.loads(request.body.decode('utf-8'))
    name = data.get('first')
    last = data.get('last')
    age = data.get('age')
    phone = data.get('phone')
    sem = data.get('sem')
    dept = data.get('dept')
    college = data.get('college')
    email = data.get('email')
    date = data.get('date')
    print(name,email,sem,age,dept,college,phone,last)
    if name and last and age and phone and sem and dept and college and email:
        registration = Registration()
        registration.firstName = name
        registration.lastName = last
        registration.date= date
        registration.age=age
        registration.phone=phone
        registration.sem=sem
        registration.department = dept
        registration.college=college
        registration.email=email
        registration.save()

        return JsonResponse(data={
            'status':'Successfull'
        })
    else:
        return JsonResponse(data={
            'status':'Some fields are empty'
        })
    
def csrf_token(request):
    csrf_token = get_token(request)
    return JsonResponse({'csrfToken': csrf_token})

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
