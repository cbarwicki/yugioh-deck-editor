from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/exportPdf/', export_pdf),
    path('api/card-info/', card_info, name="card_info")
]
# ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
