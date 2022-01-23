from rest_framework import serializers
from measurements.models import BloodPressure, Weight, Sugar
from django.conf import settings
from users.models import CustomUser


class BloodPressureSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(
        allow_null=False, 
        required=True,
        slug_field="id",
        queryset=CustomUser.objects.all(),
    )
    class Meta:
        model = BloodPressure
        fields = ['id', 'user', 'date', 'systolic', 'diastolic', 'pulse']
        read_onlyfields = ['id', 'user']


class SugarSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(
        allow_null=False, 
        required=True,
        slug_field="id",
        queryset=CustomUser.objects.all(),
    )
    class Meta:
        model = Sugar
        fields = ('id', 'user', 'date', 'level')


class WeightSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(
        allow_null=False, 
        required=True,
        slug_field="id",
        queryset=CustomUser.objects.all(),
    )
    class Meta:
        model = Weight
        fields = ('id', 'user', 'date', 'weight_value')


class UserRegisterSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(required=True)
    name = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = settings.AUTH_USER_MODEL
        fields = ('email', 'name', 'birth_date')
        extra_kwargs = {'password': {'write_only': True}}
