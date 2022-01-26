from rest_framework import generics
from measurements.models import BloodPressure, Weight, Sugar
from .serializers import BloodPressureSerializer, SugarSerializer, WeightSerializer
from users.models import CustomUser
from users.serializers import CustomUserSerializer
from rest_framework.permissions import BasePermission
from rest_framework.response import Response
from rest_framework import status
from core.helpers import get_user_id
from rest_framework.views import APIView
from datetime import date


def custom_post(self, request, serializer_class):
    request_data = {'user': get_user_id(self.request)}
    request_data.update(request.data)
    serializer = serializer_class(data=request_data)
    if serializer.is_valid():
        serializer.save()
        return Response('Dodano pomiar')
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def custom_get_queryset(self, model):
    if get_user_id(self.request):
        return model.objects.filter(user_id=get_user_id(self.request))
    else:
        return []


def custom_senior_list_queryset(self, model):
    try:
        # sprawdzenie, czy użytkownik ma jakichkolwiek podopiecznych
        CustomUser.objects.get(
            pk=self.kwargs['pk'], supervisor_id=get_user_id(self.request))
    except CustomUser.DoesNotExist:
        return [] # jeśli nie, zwracana jest pusta tablica
    # jeśli tak, zwracana jest lista podopiecznych
    return model.objects.filter(user_id=self.kwargs['pk'])


class MeasurementPermission(BasePermission):
    message = 'Tylko autorzy pomiarów mają do nich dostęp.'

    def has_permission(self, request, view):
        if get_user_id(request):
            return True

    def has_object_permission(self, request, view, obj):
        return obj.user.pk == get_user_id(request)


class BloodPressureList(generics.ListCreateAPIView):
    permission_classes = [MeasurementPermission]
    serializer_class = BloodPressureSerializer

    def get_queryset(self):
        return custom_get_queryset(self, BloodPressure)

    def post(self, request):
        return custom_post(self=self, request=request, serializer_class=BloodPressureSerializer)


class BloodPressureDetail(generics.RetrieveDestroyAPIView, MeasurementPermission):
    permission_classes = [MeasurementPermission]
    queryset = BloodPressure.objects.all()
    serializer_class = BloodPressureSerializer


class WeightList(generics.ListCreateAPIView):
    permission_classes = [MeasurementPermission]
    serializer_class = WeightSerializer

    def get_queryset(self):
        return custom_get_queryset(self, Weight)

    def post(self, request):
        return custom_post(self=self, request=request, serializer_class=WeightSerializer)


class WeightDetail(generics.RetrieveDestroyAPIView, MeasurementPermission):
    permission_classes = [MeasurementPermission]
    queryset = Weight.objects.all()
    serializer_class = WeightSerializer


class SugarList(generics.ListCreateAPIView):
    permission_classes = [MeasurementPermission]
    serializer_class = SugarSerializer

    def get_queryset(self):
        return custom_get_queryset(self, Sugar)

    def post(self, request):
        return custom_post(self=self, request=request, serializer_class=SugarSerializer)


class SugarDetail(generics.RetrieveDestroyAPIView, MeasurementPermission):
    permission_classes = [MeasurementPermission]
    queryset = Sugar.objects.all()
    serializer_class = SugarSerializer


class SeniorsList(generics.ListAPIView):
    serializer_class = CustomUserSerializer

    def get_queryset(self):
        if get_user_id(self.request):
            return CustomUser.objects.filter(supervisor_id=get_user_id(self.request))
        else:
            return []


class SeniorsListBloodPressure(generics.ListAPIView):
    permission_classes = [MeasurementPermission]
    serializer_class = BloodPressureSerializer

    def get_queryset(self):
        return custom_senior_list_queryset(self, BloodPressure)


class SeniorsListSugar(generics.ListAPIView):
    permission_classes = [MeasurementPermission]
    serializer_class = SugarSerializer

    def get_queryset(self):
        return custom_senior_list_queryset(self, Sugar)


class SeniorsListWeight(generics.ListAPIView):
    permission_classes = [MeasurementPermission]
    serializer_class = WeightSerializer

    def get_queryset(self):
        return custom_senior_list_queryset(self, Weight)


class CurrentData(APIView):
    permission_classes = [MeasurementPermission]

    def get(self, request, format=None):
        user = CustomUser.objects.get(pk=get_user_id(self.request))
        is_supervisor = len(CustomUser.objects.filter(supervisor_id=user)) > 0
        return Response({'name': user.name, 'supervisor': is_supervisor})
