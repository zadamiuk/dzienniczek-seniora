from django.urls import path
from django.views.generic import TemplateView

app_name = 'measurements'

urlpatterns = [
    path('', TemplateView.as_view(template_name="measurements/index.html")),
]