from django.http import FileResponse
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import BaseRenderer
from django.views.decorators.csrf import csrf_exempt
from PyPDF2 import PdfReader, PdfWriter
from django.conf import settings

class PDFRenderer(BaseRenderer):
    media_type = 'application/pdf'
    format = 'pdf'

    def render(self, data, accepted_media_type=None, renderer_context=None):
        return data

@csrf_exempt
@api_view(['POST'])
@renderer_classes([PDFRenderer])
def export_pdf(request):
    data = request.data

    main_deck = sorted(data["mainDeck"], key=lambda x: x["name"])
    side_deck = sorted(data["sideDeck"], key=lambda x: x["name"])
    extra_deck = sorted(data["extraDeck"], key=lambda x: x["name"])

    result_dict = {
        'Total Monster Cards': 0,
        'Total Spell Cards': 0,
        'Total Trap Cards': 0,
        'Total Side Deck': 0,
        'Total Extra Deck': 0
    }

    # pointers for lines in monsters, spells, traps in main deck respectfully
    i = 1
    j = 1
    k = 1

    it = 0
    while it < len(main_deck):
        if "Monster" in main_deck[it]["type"]:
            result_dict[f"Monster {i}"] = main_deck[it]["name"]
            result_dict[f"Monster Card {i} Count"] = 1
            result_dict['Total Monster Cards'] += 1
            if it == len(main_deck)-1:
                break
            if main_deck[it+1] == main_deck[it]:
                result_dict[f"Monster Card {i} Count"] = 2
                result_dict['Total Monster Cards'] += 1
                if it == len(main_deck)-2:
                    break
                if main_deck[it+2] == main_deck[it]:
                    result_dict[f"Monster Card {i} Count"] = 3
                    result_dict['Total Monster Cards'] += 1
                    it += 1
                it += 1
            i += 1
        elif main_deck[it]["type"] == "Spell Card":
            result_dict[f"Spell {j}"] = main_deck[it]["name"]
            result_dict[f"Spell Card {j} Count"] = 1
            result_dict['Total Spell Cards'] += 1
            if it == len(main_deck)-1:
                break
            if main_deck[it+1] == main_deck[it]:
                result_dict[f"Spell Card {j} Count"] = 2
                result_dict['Total Spell Cards'] += 1
                if it == len(main_deck)-2:
                    break
                if main_deck[it+2] == main_deck[it]:
                    result_dict[f"Spell Card {j} Count"] = 3
                    result_dict['Total Spell Cards'] += 1
                    it += 1
                it += 1
            j += 1
        elif main_deck[it]["type"] == "Trap Card":
            result_dict[f"Trap {k}"] = main_deck[it]["name"]
            result_dict[f"Trap Card {k} Count"] = 1
            result_dict['Total Trap Cards'] += 1
            if it == len(main_deck)-1:
                break
            if main_deck[it+1] == main_deck[it]:
                result_dict[f"Trap Card {k} Count"] = 2
                result_dict['Total Trap Cards'] += 1
                if it == len(main_deck)-2:
                    break
                if main_deck[it+2] == main_deck[it]:
                    result_dict[f"Trap Card {k} Count"] = 3
                    result_dict['Total Trap Cards'] += 1
                    it += 1
                it += 1
            k += 1
        it += 1
    
    # i to keep track of current line in side deck, reset iterator
    i = 1
    it = 0
    while it < len(side_deck):
        result_dict[f"Side Deck {i}"] = side_deck[it]["name"]
        result_dict[f"Side Deck {i} Count"] = 1
        result_dict['Total Side Deck'] += 1
        if it == len(side_deck)-1:
            break
        if side_deck[it+1] == side_deck[it]:
            result_dict[f"Side Deck {i} Count"] = 2
            result_dict['Total Side Deck'] += 1
            if it == len(side_deck)-2:
                break
            if side_deck[it+2] == side_deck[it]:
                result_dict[f"Side Deck {i} Count"] = 3
                result_dict['Total Side Deck'] += 1
                it += 1
            it += 1
        i += 1
        it += 1
    
    # i to keep track of current line in extra deck, reset iterator
    i = 1
    it = 0
    while it < len(extra_deck):
        result_dict[f"Extra Deck {i}"] = extra_deck[it]["name"]
        result_dict[f"Extra Deck {i} Count"] = 1
        result_dict['Total Extra Deck'] += 1
        if it == len(extra_deck)-1:
            break
        if extra_deck[it+1] == extra_deck[it]:
            result_dict[f"Extra Deck {i} Count"] = 2
            result_dict['Total Extra Deck'] += 1
            if it == len(extra_deck)-2:
                break
            if extra_deck[it+2] == extra_deck[it]:
                result_dict[f"Extra Deck {i} Count"] = 3
                result_dict['Total Extra Deck'] += 1
                it += 1
            it += 1
        i += 1
        it += 1

    template_path = "media/KDE_DeckList.pdf"
    output_path = "media/filled_form.pdf"

    reader = PdfReader(template_path)
    writer = PdfWriter()

    # Copy over pages
    for page in reader.pages:
        writer.add_page(page)

    # Fill form fields
    writer.update_page_form_field_values(
        writer.pages[0],  # typically the first page
        result_dict
    )

    # Save output
    with open(output_path, "wb") as output_stream:
        writer.write(output_stream)
        print("Decklist filled successfully!")

    my_file = settings.BASE_DIR / output_path
    response = FileResponse(open(my_file, 'rb'), content_type="application/pdf")
    
    return(response)

# def card_info(request):
#     return get_cards(request)
