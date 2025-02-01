from django.http import JsonResponse
from django.http import HttpResponse
from rest_framework.decorators import api_view

username = "Eric"
password = "Pass"

@api_view(['POST'])
def login_redirect(request):
    username_input = request.POST.get('username')
    password_input = request.POST.get('password')
    if username == username_input and password == password_input:
        print("Successfully logged in")
        return JsonResponse({}, status=200)

