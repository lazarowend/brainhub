from rest_framework import serializers
from django.contrib.auth.models import User


class UserLoginSerializer(serializers.Serializer):
    class Meta:
        model = User
        fields = ('username', 'password')


class UserCreateSerializer(serializers.ModelSerializer):
    date_of_birth = serializers.DateField(write_only=True)

    class Meta:
        model = User
        fields = ('first_name', 'username', 'password', 'email', 'date_of_birth')

    def create(self, validated_data):
        date_of_birth = validated_data.pop('date_of_birth')
        user = User.objects.create_user(**validated_data)
        return user
