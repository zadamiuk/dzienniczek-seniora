from django.urls import path
from .views import (
    BloodPressureList,
    BloodPressureDetail,
    CurrentData,
    SugarDetail,
    SugarList,
    WeightDetail,
    WeightList,
    SeniorsList,
    SeniorsListBloodPressure,
    SeniorsListSugar,
    SeniorsListWeight
)

app_name = 'api'

urlpatterns = [
    path('measurements/blood-pressure/<int:pk>/', BloodPressureDetail.as_view(), name='blood-pressure-detail'),
    path('measurements/blood-pressure/', BloodPressureList.as_view(), name='blood-pressure-list'),
    path('measurements/sugar/<int:pk>/', SugarDetail.as_view(), name='sugar-detail'),
    path('measurements/sugar/', SugarList.as_view(), name='sugar'),
    path('measurements/weight/<int:pk>/', WeightDetail.as_view(), name='weight-detail'),
    path('measurements/weight/', WeightList.as_view(), name='weight-list'),

    path('home-page/', CurrentData.as_view(), name='home-page'),
    
    path('supervisor/users/', SeniorsList.as_view(), name='senior-list'),
    path('supervisor/users/<int:pk>/blood-pressure', SeniorsListBloodPressure.as_view(), name='senior-bp-list'),
    path('supervisor/users/<int:pk>/weight', SeniorsListWeight.as_view(), name='senior-weight-list'),
    path('supervisor/users/<int:pk>/sugar', SeniorsListSugar.as_view(), name='senior-sugar-list')
]