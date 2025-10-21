data = [
    {
      "id": 5402805,
      "name": "Berserker of the Tenyi",
      "typeline": [
        "Wyrm",
        "Link"
      ],
      "type": "Link Monster",
      "humanReadableCardType": "Link Monster",
      "frameType": "link",
      "desc": "2+ monsters, including a Link Monster",
      "race": "Wyrm",
      "atk": 3000,
      "attribute": "DARK",
      "archetype": "Tenyi",
      "linkval": 3,
      "linkmarkers": [
        "Top",
        "Top-Right",
        "Bottom-Right"
      ],
      "ygoprodeck_url": "https://ygoprodeck.com/card/berserker-of-the-tenyi-10206",
      "card_sets": [
        {
          "set_name": "2020 Tin of Lost Memories Mega Pack",
          "set_code": "MP20-EN123",
          "set_rarity": "Common",
          "set_rarity_code": "(C)",
          "set_price": "1.09"
        },
        {
          "set_name": "Rising Rampage",
          "set_code": "RIRA-EN045",
          "set_rarity": "Rare",
          "set_rarity_code": "(R)",
          "set_price": "0"
        }
      ],
      "card_images": [
        {
          "id": 5402805,
          "image_url": "https://images.ygoprodeck.com/images/cards/5402805.jpg",
          "image_url_small": "https://images.ygoprodeck.com/images/cards_small/5402805.jpg",
          "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/5402805.jpg"
        }
      ],
      "card_prices": [
        {
          "cardmarket_price": "0.07",
          "tcgplayer_price": "0.19",
          "ebay_price": "0.99",
          "amazon_price": "0.20",
          "coolstuffinc_price": "0.25"
        }
      ]
    },
    {
      "id": 76352503,
      "name": "Changshi the Spiridao",
      "typeline": [
        "Zombie",
        "Effect"
      ],
      "type": "Effect Monster",
      "humanReadableCardType": "Effect Monster",
      "frameType": "effect",
      "desc": "During your Main Phase: You can send 1 Zombie monster from your hand or Deck to the GY. If this card is banished: You can banish 1 Zombie monster in your GY; Special Summon this card, but place it on the bottom of the Deck when it leaves the field. You can only use each effect of \"Changshi the Spiridao\" once per turn.",
      "race": "Zombie",
      "level": 6,
      "attribute": "DARK",
      "ygoprodeck_url": "https://ygoprodeck.com/card/changshi-the-spiridao-13054",
      "card_sets": [
        {
          "set_name": "Dimension Force",
          "set_code": "DIFO-EN096",
          "set_rarity": "Super Rare",
          "set_rarity_code": "(SR)",
          "set_price": "0"
        }
      ],
      "card_images": [
        {
          "id": 76352503,
          "image_url": "https://images.ygoprodeck.com/images/cards/76352503.jpg",
          "image_url_small": "https://images.ygoprodeck.com/images/cards_small/76352503.jpg",
          "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/76352503.jpg"
        }
      ],
      "card_prices": [
        {
          "cardmarket_price": "0.29",
          "tcgplayer_price": "0.99",
          "ebay_price": "0.99",
          "amazon_price": "0.74",
          "coolstuffinc_price": "0.39"
        }
      ]
    },
    {
      "id": 14625090,
      "name": "Dragonmaid Welcome",
      "type": "Spell Card",
      "humanReadableCardType": "Continuous Spell",
      "frameType": "spell",
      "desc": "All monsters you control gain 100 ATK/DEF for each \"Dragonmaid\" monster you control. If you control 2 or more \"Dragonmaid\" monsters: You can target 1 \"Dragonmaid\" card in your GY, except \"Dragonmaid Welcome\"; add it to your hand. You can only use this effect of \"Dragonmaid Welcome\" once per turn. If this card is sent to the GY: Your opponent cannot target \"Dragonmaid\" monsters you control with card effects this turn.",
      "race": "Continuous",
      "archetype": "Dragonmaid",
      "ygoprodeck_url": "https://ygoprodeck.com/card/dragonmaid-welcome-10537",
      "card_sets": [
        {
          "set_name": "Mystic Fighters",
          "set_code": "MYFI-EN024",
          "set_rarity": "Secret Rare",
          "set_rarity_code": "(ScR)",
          "set_price": "5.83"
        }
      ],
      "card_images": [
        {
          "id": 14625090,
          "image_url": "https://images.ygoprodeck.com/images/cards/14625090.jpg",
          "image_url_small": "https://images.ygoprodeck.com/images/cards_small/14625090.jpg",
          "image_url_cropped": "https://images.ygoprodeck.com/images/cards_cropped/14625090.jpg"
        }
      ],
      "card_prices": [
        {
          "cardmarket_price": "1.00",
          "tcgplayer_price": "8.01",
          "ebay_price": "6.50",
          "amazon_price": "7.79",
          "coolstuffinc_price": "4.99"
        }
      ]
    }
]

# Sort by 'age' in ascending order
sorted_by_name = sorted(data, key=lambda x: x['name'], reverse=True)
print(f"Sorted by name (des): {sorted_by_name}")