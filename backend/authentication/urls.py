from django.urls import path
from . views import LoginUserView, CreateUserView, LogoutUserView


urlpatterns = [
    path('auth/login', LoginUserView.as_view(), name='login_user_view'),
    path('auth/register', CreateUserView.as_view(), name='create_user_view'),
    path('auth/logout', LogoutUserView.as_view(), name='logout_user_view')
]