from rest_framework import serializers
from users.models import CustomUser
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class CustomUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    name = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)
    supervisor_id = serializers.SlugRelatedField(
        allow_null=True, 
        required=False,
        slug_field="id",
        queryset=CustomUser.objects.all(),
    )

    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'name', 'password', 'is_active', 'supervisor_id', 'measurement_hour', 'measurement_minutes')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)
        data['name'] = self.user.name
        data['hour'] = self.user.measurement_hour
        data['minutes'] = self.user.measurement_minutes
        return data

    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['name'] = user.name
        token['hour'] = user.measurement_hour
        token['minutes'] = user.measurement_minutes
        return token
