from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from rest_framework import viewsets
from .serializers import PostSerializer, SearchSerializer
from .models import Post, Search

class PostView(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()[:4]

class SearchView(viewsets.ModelViewSet):
    serializer_class = SearchSerializer
    queryset = Search.objects.all()


def home(request):
    return HttpResponse('Hello World')

def Account(request):
    # get current users information
    return JsonResponse({'username': 'pickle', 'photo': 'https://plus.unsplash.com/premium_photo-1673448391005-d65e815bd026?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})