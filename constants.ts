import { Dish } from './types';

export const DISHES: Dish[] = [
  // Breakfast
  {
    item_name: "Mandazi + Chai",
    image_filename: "mandazi-chai.jpg",
    ai_prompt: "Freshly fried fluffy mandazi served on a white ceramic plate, accompanied by a cup of spiced Kenyan chai in an elegant tea cup, set on a polished mahogany table in an upscale cafe, warm morning sunlight",
    description: "Sweet, fluffy Swahili doughnuts served with a cup of rich, spiced Kenyan tea.",
    category: "Breakfast"
  },
  {
    item_name: "Boiled Eggs + Bread",
    image_filename: "boiled-eggs-bread.jpg",
    ai_prompt: "Two perfectly boiled eggs served with slices of artisanal buttered brown bread on fine china, garnished with parsley, upscale breakfast setting with silver cutlery",
    description: "A simple, protein-packed breakfast featuring boiled eggs and buttered toast.",
    category: "Breakfast"
  },
  {
    item_name: "Chapati + Beans",
    image_filename: "chapati-beans.jpg",
    ai_prompt: "Flaky gourmet chapati served alongside a rich red kidney bean stew in a ceramic serving bowl, placed on a crisp white tablecloth, soft ambient restaurant lighting",
    description: "Soft, layered flatbread served with a hearty bowl of red kidney bean stew.",
    category: "Breakfast"
  },
  {
    item_name: "Coffee (Nescafé)",
    image_filename: "coffee.jpg",
    ai_prompt: "A steaming white ceramic cup of premium coffee with a small jug of milk on the side, served on a saucer with a silver spoon, cafe ambience",
    description: "Hot, brewed coffee served black or with milk.",
    category: "Breakfast"
  },

  // Mains
  {
    item_name: "Beef Stew + Rice",
    image_filename: "beef-stew-rice.jpg",
    ai_prompt: "Slow-cooked premium beef stew with rich tomato gravy, served next to fluffy white basmati rice on a designer stoneware plate, elegant restaurant presentation with a glass of water in the background",
    description: "Tender chunks of beef slow-cooked in a rich tomato and onion gravy, served with steamed rice.",
    category: "Mains"
  },
  {
    item_name: "Ugali + Beef Stew",
    image_filename: "ugali-beef-stew.jpg",
    ai_prompt: "A perfect mound of white ugali served alongside a bowl of rich, slow-cooked beef stew with thick gravy, set on a premium stoneware plate, elegant restaurant lighting, glass of red wine",
    description: "The classic Kenyan staple. Firm maize flour cake served with savory beef stew.",
    category: "Mains"
  },
  {
    item_name: "Ugali + Kienyeji",
    image_filename: "ugali-kienyeji.jpg",
    ai_prompt: "White ugali served with traditional mashed greens (mukimo or similar) and indigenous vegetables, artisanal pottery presentation, rustic upscale dining",
    description: "Nutritious traditional greens served with ugali.",
    category: "Mains"
  },
  {
    item_name: "Maharagwe",
    image_filename: "maharagwe.jpg",
    ai_prompt: "Kenyan maharagwe (stewed red beans) in a rich coconut tomato sauce, served in a polished steel bowl, soft focus chapati in background, fine dining plating",
    description: "Stewed red beans cooked in a savory tomato and coconut base.",
    category: "Mains"
  },
  {
    item_name: "Vegetable Pilau",
    image_filename: "vegetable-pilau.jpg",
    ai_prompt: "Vegetable pilau rice with carrots, peas, and potatoes, aromatic steam rising, garnished with fresh cilantro, served on a white porcelain plate, colorful spices",
    description: "Spiced rice cooked with a medley of fresh vegetables.",
    category: "Mains"
  },
  {
    item_name: "Ugali + Pumpkin Leaves",
    image_filename: "ugali-pumpkin-leaves.jpg",
    ai_prompt: "Ugali with sautéed pumpkin leaves (seveve) in cream, plated elegantly on a dark ceramic plate, traditional Kenyan vegetarian meal with a modern twist",
    description: "Sautéed pumpkin leaves served with cornmeal mush.",
    category: "Mains"
  },
  {
    item_name: "Ndengu Stew",
    image_filename: "ndengu-stew.jpg",
    ai_prompt: "Kenyan ndengu (green grams) stew with tomatoes and onions, served in a cast iron pot on a wooden board, rustic chic presentation",
    description: "Hearty green gram stew.",
    category: "Mains"
  },
  {
    item_name: "Goat Chops (2 pcs)",
    image_filename: "goat-chops.jpg",
    ai_prompt: "Two gourmet grilled goat chops with perfect char marks, served with a side of kachumbari salsa, slate platter, Nyama Choma style high-end",
    description: "Grilled goat chops served with fresh salsa.",
    category: "Mains"
  },
  {
    item_name: "Githeri",
    image_filename: "githeri.jpg",
    ai_prompt: "Traditional Kenyan githeri (maize and beans) stewed to perfection, garnished with fresh herbs, served in a clay bowl, warm lighting",
    description: "A traditional mixture of maize and beans.",
    category: "Mains"
  },
  {
    item_name: "Pilau",
    image_filename: "pilau.jpg",
    ai_prompt: "Authentic Kenyan beef pilau with aromatic spices, garnished with caramelized onions and cashews, served in a silver dish, steam rising, warm tones",
    description: "Spiced rice cooked with beef and aromatic spices.",
    category: "Mains"
  },
  {
    item_name: "Ugali + Sukuma",
    image_filename: "ugali-sukuma.jpg",
    ai_prompt: "White ugali next to sautéed sukuma wiki (collard greens) with tomatoes, served on a white square plate, modern Kenyan plating",
    description: "Collard greens sautéed with onions and tomatoes, served with ugali.",
    category: "Mains"
  },
  {
    item_name: "Fish Curry + Chapati",
    image_filename: "fish-curry-chapati.jpg",
    ai_prompt: "Tilapia fish curry in rich coconut sauce, garnished with cilantro, served with golden chapati on the side, coastal luxury dining style",
    description: "Fresh tilapia cooked in coconut curry, served with chapati.",
    category: "Mains"
  },
  {
    item_name: "Mbaazi (Pigeon Pea) Curry",
    image_filename: "mbaazi-curry.jpg",
    ai_prompt: "Creamy pigeon peas (mbaazi) cooked in coconut milk, served in a coconut shell bowl or fine china, accompanied by mahamri, coastal luxury vibe",
    description: "Pigeon peas stewed in a rich coconut curry sauce.",
    category: "Mains"
  },
  {
    item_name: "Peanut Soup",
    image_filename: "peanut-soup.jpg",
    ai_prompt: "Rich and creamy peanut soup garnished with crushed peanuts and chili oil, served in a white soup bowl, elegant spoon, fine dining appetizer",
    description: "Locally harvested red peanuts blended with soy sauce, garlic, lime, and coconut.",
    category: "Mains"
  },
  {
    item_name: "Ox-Tail Soup",
    image_filename: "oxtail-soup.jpg",
    ai_prompt: "Rich hearty ox-tail soup with bone marrow and root vegetables, served in a deep ceramic bowl, steam rising, rustic luxury",
    description: "Slow-cooked oxtail soup with root vegetables.",
    category: "Mains"
  },

  // Sides
  {
    item_name: "Kachumbari",
    image_filename: "kachumbari.jpg",
    ai_prompt: "Fresh Kenyan kachumbari salad with diced tomatoes, onions, cilantro, and chili, in a small crystal bowl, bright colors, lime wedge on side",
    description: "Fresh onion and tomato salad with chili and coriander.",
    category: "Sides"
  },
  {
    item_name: "Extra Ugali",
    image_filename: "extra-ugali.jpg",
    ai_prompt: "A side portion of white ugali, perfectly shaped, on a small side plate, restaurant setting",
    description: "A serving of cornmeal mush.",
    category: "Sides"
  },
  {
    item_name: "Chips",
    image_filename: "chips.jpg",
    ai_prompt: "Gourmet hand-cut french fries, golden and crispy, served in a wire basket or paper cone, ketchup dip in small ramekin, wooden table",
    description: "Crispy fried potato chips.",
    category: "Sides"
  },
  {
    item_name: "Sambusa (Beef)",
    image_filename: "beef-sambusa.jpg",
    ai_prompt: "Three golden-brown crispy beef sambusas arranged on a rectangular platter, served with a lime wedge and green chili chutney",
    description: "Triangular pastry filled with spiced minced beef.",
    category: "Sides"
  },

  // Drinks
  {
    item_name: "Coca-Cola 500ml",
    image_filename: "coke-500ml.jpg",
    ai_prompt: "Chilled Coca-Cola in a glass bottle with water droplets, poured into a crystal glass with ice and lemon slice, bokeh background",
    description: "Classic refreshing cola.",
    category: "Drinks"
  },
  {
    item_name: "Fresh Mango Juice",
    image_filename: "mango-juice.jpg",
    ai_prompt: "Fresh thick yellow mango juice in a tall highball glass, garnished with a fresh mint leaf and mango slice, tropical luxury setting",
    description: "100% natural mango juice, no sugar added.",
    category: "Drinks"
  },
  {
    item_name: "Chai (Tea)",
    image_filename: "chai.jpg",
    ai_prompt: "Hot Kenyan spiced tea with milk in a glass mug, steam rising, cinnamon stick on saucer, cozy evening setting",
    description: "Traditional Kenyan spiced tea boiled with milk.",
    category: "Drinks"
  },
  {
    item_name: "Stoney Tangawizi",
    image_filename: "stoney-tangawizi.jpg",
    ai_prompt: "Chilled Stoney Tangawizi ginger beer in a brown glass bottle, condensation, served with a glass of ice and lime, bar counter",
    description: "Iconic Kenyan ginger beer.",
    category: "Drinks"
  },
  {
    item_name: "Krest Soda",
    image_filename: "krest.jpg",
    ai_prompt: "Chilled Krest Bitter Lemon soda in a glass bottle, served with a tall glass of ice and lemon twist, refreshing and crisp",
    description: "Refreshing bitter lemon soda.",
    category: "Drinks"
  },
  {
    item_name: "Mursik",
    image_filename: "mursik.jpg",
    ai_prompt: "Traditional Kalenjin mursik (fermented milk) with charcoal ash specks, served in a clear glass or traditional gourd (sotet), cultural presentation",
    description: "Traditional fermented milk delicacy.",
    category: "Drinks"
  },
  {
    item_name: "Sprite",
    image_filename: "sprite.jpg",
    ai_prompt: "Chilled Sprite in a glass bottle, bubbles rising, served with ice and lemon slices in a clear glass, bright and refreshing",
    description: "Lemon-lime refreshment.",
    category: "Drinks"
  },
  {
    item_name: "Watermelon Juice",
    image_filename: "watermelon-juice.jpg",
    ai_prompt: "Fresh red watermelon juice in a glass, garnished with a watermelon wedge and mint, ice cubes, sunny outdoor setting",
    description: "Refreshing fresh watermelon juice.",
    category: "Drinks"
  },
  {
    item_name: "Mixed Fruit Juice",
    image_filename: "mixed-fruit-juice.jpg",
    ai_prompt: "Vibrant mixed fruit juice (tropical blend) in a tall glass, garnished with pineapple and cherry, colorful and healthy",
    description: "Premium fruit blend juice.",
    category: "Drinks"
  },
  {
    item_name: "Passion Juice",
    image_filename: "passion-juice.jpg",
    ai_prompt: "Golden yellow passion fruit juice with seeds at the bottom, tall glass with ice, tropical background",
    description: "Tangy and sweet passion fruit juice.",
    category: "Drinks"
  },
  {
    item_name: "Fanta Orange",
    image_filename: "fanta-orange.jpg",
    ai_prompt: "Chilled Fanta Orange in a glass bottle, condensation, bright orange liquid poured into a glass with ice, vibrant and fun atmosphere",
    description: "Refreshing orange soda.",
    category: "Drinks"
  },

  // Beers
  {
    item_name: "Tusker Lager",
    image_filename: "tusker-lager.jpg",
    ai_prompt: "Chilled bottle of Tusker Lager next to a tall pilsner glass filled with golden beer and a frothy white head, condensation on glass, elegant bar counter, upscale Nairobi lounge",
    description: "Kenya's iconic refreshing lager, crisp and full of flavor.",
    category: "Drinks"
  },
  {
    item_name: "Tusker Lite",
    image_filename: "tusker-lite.jpg",
    ai_prompt: "Tusker Lite bottle in a bucket of ice, green glass bottle, refreshing low-carb lager, served at a sunny outdoor luxury patio",
    description: "A low-carb, crisp, and refreshing lager.",
    category: "Drinks"
  },
  {
    item_name: "Tusker Malt",
    image_filename: "tusker-malt.jpg",
    ai_prompt: "Tusker Malt green bottle next to a stemmed beer glass, rich golden color, premium quality feel, dark wood bar background, moody lighting",
    description: "Premium 100% malt brewed lager.",
    category: "Drinks"
  },
  {
    item_name: "Tusker Safari",
    image_filename: "tusker-safari.jpg",
    ai_prompt: "Tusker Safari lager bottle, adventure themed, served cold with condensation, rustic but high-end safari lodge background",
    description: "A robust lager for the adventurous spirit.",
    category: "Drinks"
  },
  {
    item_name: "Tusker Cider",
    image_filename: "tusker-cider.jpg",
    ai_prompt: "Tusker Cider bottle poured into a glass with ice cubes and apple slices, sparkling golden liquid, bright afternoon sunlight",
    description: "Refreshing alcoholic apple cider.",
    category: "Drinks"
  },
  {
    item_name: "Guinness Foreign Extra",
    image_filename: "guinness-fes.jpg",
    ai_prompt: "Guinness Foreign Extra Stout bottle poured into a branded tulip glass, dark ruby red liquid, thick creamy foam head, elegant dark setting",
    description: "A rich, full-bodied dark stout with intense flavor.",
    category: "Drinks"
  },
  {
    item_name: "Guinness Smooth",
    image_filename: "guinness-smooth.jpg",
    ai_prompt: "Guinness Smooth bottle, distinct branding, poured to reveal a velvety texture and creamy head, modern bar setting",
    description: "A smoother, distinctive stout experience.",
    category: "Drinks"
  },
  {
    item_name: "White Cap Lager",
    image_filename: "white-cap-lager.jpg",
    ai_prompt: "White Cap Lager bottle next to a clear glass, crisp pale gold beer, clean taste visual, upscale country club setting",
    description: "A distinctively crisp and refreshing lager.",
    category: "Drinks"
  },
  {
    item_name: "White Cap (Can)",
    image_filename: "white-cap-can.jpg",
    ai_prompt: "Chilled White Cap Lager can with water droplets, placed on a wooden coaster, outdoors with a view of Mount Kenya in distance",
    description: "The classic crisp lager in a convenient can.",
    category: "Drinks"
  },
  {
    item_name: "Pilsner Lager",
    image_filename: "pilsner-lager.jpg",
    ai_prompt: "Pilsner Lager bottle ('The Lion'), golden liquid poured with vigorous effervescence, strong character, masculine upscale bar aesthetic",
    description: "A strong, full-flavored lager inspired by the lion.",
    category: "Drinks"
  },
  {
    item_name: "Pilsner Ice",
    image_filename: "pilsner-ice.jpg",
    ai_prompt: "Pilsner Ice bottle, super chilled, frost on the bottle, served with lime wedge, cool blue lighting tones",
    description: "Ice-brewed for extra smoothness.",
    category: "Drinks"
  },
  {
    item_name: "Senator Cold",
    image_filename: "senator-cold.jpg",
    ai_prompt: "Senator Cold served in a tall clear glass, clean and simple presentation, refreshing barley beer, lively social setting",
    description: "A popular, crisp, and refreshing barley beer.",
    category: "Drinks"
  },
  {
    item_name: "Bell Lager",
    image_filename: "bell-lager.jpg",
    ai_prompt: "Bell Lager bottle, golden hue, poured into a glass, premium Ugandan heritage, served in a dignified dining setting",
    description: "A golden, refreshing premium lager.",
    category: "Drinks"
  },
  {
    item_name: "Heineken",
    image_filename: "heineken.jpg",
    ai_prompt: "Heineken green bottle with red star, condensation, next to a signature star-etched glass, premium international lager, club lighting",
    description: "World-renowned premium lager.",
    category: "Drinks"
  },
  {
    item_name: "Budweiser",
    image_filename: "budweiser.jpg",
    ai_prompt: "Budweiser bottle ('King of Beers'), American style lager, poured into a tall glass, crisp and clear, sports bar luxury section",
    description: "The King of Beers, a medium-bodied American-style lager.",
    category: "Drinks"
  },
  {
    item_name: "Corona",
    image_filename: "corona.jpg",
    ai_prompt: "Corona Extra bottle with a lime wedge stuck in the neck, beachside luxury resort vibe, sunset lighting, relaxation",
    description: "A pale lager served with a slice of lime.",
    category: "Drinks"
  },
  {
    item_name: "Smirnoff Ice",
    image_filename: "smirnoff-ice.jpg",
    ai_prompt: "Smirnoff Ice bottle, frosted glass, cloudy white liquid, served ice cold, vibrant party atmosphere but elegant",
    description: "A crisp citrus-flavored malt beverage.",
    category: "Drinks"
  }
];