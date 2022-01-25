from django.urls import path
from .views import CustomUserCreate, BlacklistTokenUpdateView, CustomTokenObtainPairView, YourSupervisor, AddSchedule

app_name = 'users'

urlpatterns = [
    path('create/', CustomUserCreate.as_view(), name="create_user"),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(),
         name='blacklist'),
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('your-supervisor/', YourSupervisor.as_view(), name='add_supervisor'),
    path('add-schedule/', AddSchedule.as_view(), name='add_schedule'),
]
