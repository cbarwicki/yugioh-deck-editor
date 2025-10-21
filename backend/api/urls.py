from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/hello/', hello),
    path('api/cardinfo/', card_info, name="card_info")
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
