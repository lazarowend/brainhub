from rest_framework.views import APIView
from . serializers import UserLoginSerializer, UserCreateSerializer
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate, login


class LoginUserView(APIView):
    def post(self, request):
        print(request.data)
        serializer = UserLoginSerializer(data=request.data)
        if not serializer.is_valid():
            return Response('Dados inválidos', status=status.HTTP_400_BAD_REQUEST)
        
        user = authenticate(request, username=request.data['username'], password=request.data['password'])
        if user is None:
            user = authenticate(request, email=request.data['username'], password=request.data['password'])
            if user is None:
                return Response('Dados inválidos', status=status.HTTP_401_UNAUTHORIZED)

        login(request, user)
        return Response('Sucesso!', status=status.HTTP_200_OK)

class CreateUserView(APIView):
    def post(self, request, format=None):
        serializer = UserCreateSerializer(data=request.data)
        
        if serializer.is_valid():
            user = serializer.save()

            user.set_password(request.data['password'])
            user.save()

            return Response('Sucesso!', status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LogoutUserView(APIView):

    def post(self, request):
        logout(request)
        return Response({'message': 'Logout realizado com sucesso.'}, status.HTTP_200_OK)
