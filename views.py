# -*- coding: utf-8 -*-

import random
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

food = ["Pizza", "Big Mac", "Tonkotsu Ramen", "Tempura", "Bulgolgi", "Bibimbap", "Green Curry", "Durian Fried Rice", "Meatball Pasta", "Fish and Chips", "Filet Mignon", "Truffle Oil Seaweed"]

# Create your views here.
def index(request):
    return render(request, 'sample_app/index.html', {"data": ""})

def send_request(request):
    count = int(request.POST["count"])
    random.shuffle(food)
    return HttpResponse(", ".join(food[0:count]))
