from django.conf import settings
import json
import os
from django.http import JsonResponse
from rest_framework.decorators import api_view

@api_view(['GET'])
def card_info(request):
    file_path = os.path.join(settings.BASE_DIR, 'api', 'cardinfo', 'cardinfo.json')
    with open(file_path, 'r') as f:
        data = json.load(f)
    return JsonResponse(data)