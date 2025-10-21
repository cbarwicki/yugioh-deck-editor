from django.conf import settings
import json
import os
from django.http import HttpResponse, JsonResponse

def get_cards(request):
    file_path = os.path.join(settings.BASE_DIR, 'api', 'cardinfo', 'cardinfo.json')
    with open(file_path, 'r') as f:
        data = json.load(f)
    return JsonResponse(data)