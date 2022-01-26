from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CustomUserSerializer, CustomTokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import CustomUser
from core.helpers import get_user_id


class CustomUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        try:
            if CustomUser.objects.get(email=request.data['email']):
                return Response('Użytkownik z podanym adresem email już istnieje.', status=status.HTTP_406_NOT_ACCEPTABLE)
        except CustomUser.DoesNotExist:
            serializer = CustomUserSerializer(data=request.data)
            if serializer.is_valid():
                user = serializer.save()
                if user:
                    json = serializer.data
                    return Response(json, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class YourSupervisor(APIView):
    permission_classes = [AllowAny]

    def get(self, request, format=None):
        user = CustomUser.objects.get(pk=get_user_id(self.request))
        if user.supervisor_id:
            supervisor = CustomUser.objects.get(pk=user.supervisor_id.pk)
            serializer = CustomUserSerializer(supervisor, many=False)
            return Response(serializer.data)
        else:
            return Response({'name': 'Brak opiekuna', 'email': ''})

    def patch(self, request, format=None):
        user = CustomUser.objects.get(pk=get_user_id(self.request))
        try:
            supervisor = CustomUser.objects.get(
                email=request.data['supervisor_email'])
            data = {'supervisor_id': supervisor.pk}
        except CustomUser.DoesNotExist:
            return Response('Nie znaleziono opiekuna z podanym adresem email', status=status.HTTP_400_BAD_REQUEST)
        serializer = CustomUserSerializer(user, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AddSchedule(APIView):
    permission_classes = [AllowAny]

    def patch(self, request, format=None):
        user = CustomUser.objects.get(pk=get_user_id(self.request))
        serializer = CustomUserSerializer(
            user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CustomTokenObtainPairView(TokenObtainPairView):
    permission_classes = [AllowAny]
    serializer_class = CustomTokenObtainPairSerializer


class BlacklistTokenUpdateView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = ()

    def post(self, request):
        try:
            token = RefreshToken(request.data["refresh_token"])
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            print(e)
            return Response(status=status.HTTP_400_BAD_REQUEST)

