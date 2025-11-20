import { Dish } from './types';

export const DISHES: Dish[] = [
  // Breakfast
  {
    item_name: "Mandazi + Chai",
    image_filename: "mandazi-chai.jpg",
    ai_prompt: "Freshly fried mandazi with a cup of spiced Kenyan chai, on a wooden table, morning light",
    description: "Sweet, fluffy Swahili doughnuts served with a cup of rich, spiced Kenyan tea.",
    category: "Breakfast"
  },
  {
    item_name: "Boiled Eggs + Bread",
    image_filename: "boiled-eggs-bread.jpg",
    ai_prompt: "Two boiled eggs with buttered brown bread slices, simple plate, Nairobi cafe breakfast",
    description: "A simple, protein-packed breakfast featuring boiled eggs and buttered toast.",
    category: "Breakfast"
  },
  {
    item_name: "Chapati + Beans",
    image_filename: "chapati-beans.jpg",
    ai_prompt: "Flaky Kenyan chapati with red kidney beans stew, served in a steel bowl, authentic Nairobi breakfast",
    description: "Soft, layered flatbread served with a hearty bowl of red kidney bean stew.",
    category: "Breakfast"
  },

  // Mains
  {
    item_name: "Beef Stew + Rice",
    image_filename: "beef-stew-rice.jpg",
    ai_prompt: "Authentic Kenyan beef stew with tomato gravy and white rice, served on a white plate, natural lighting, Nairobi restaurant style",
    description: "Tender chunks of beef slow-cooked in a rich tomato and onion gravy, served with steamed rice.",
    category: "Mains"
  },
  {
    item_name: "Pilau (Beef)",
    image_filename: "pilau.jpg",
    ai_prompt: "Kenyan beef pilau with aromatic spices, garnished with fried onions, served in a metal tray, steam rising, warm tones",
    description: "Aromatic rice cooked with beef and Swahili spices like cardamom, cinnamon, and cloves.",
    category: "Mains"
  },
  {
    item_name: "Fish Curry + Chapati",
    image_filename: "fish-curry-chapati.jpg",
    ai_prompt: "Tilapia fish curry in coconut sauce with golden chapati on the side, Kenyan coastal style, vibrant colors",
    description: "Fresh tilapia fillets simmered in a creamy coconut curry sauce, paired with chapati.",
    category: "Mains"
  },
  {
    item_name: "Goat Chops",
    image_filename: "goat-chops.jpg",
    ai_prompt: "Two grilled goat chops with char marks, served with kachumbari, Nyama Choma style",
    description: "Juicy, char-grilled goat chops served with a side of fresh kachumbari salsa.",
    category: "Mains"
  },
   {
    item_name: "Ugali + Sukuma",
    image_filename: "ugali-sukuma.jpg",
    ai_prompt: "White ugali next to sautéed sukuma wiki (collard greens), served on a banana leaf, Kenyan home-style plating",
    description: "The national staple: stiff maize meal porridge served with sautéed collard greens.",
    category: "Mains"
  },
  {
    item_name: "Githeri",
    image_filename: "githeri.jpg",
    ai_prompt: "Traditional Kenyan githeri (maize and beans) in a stainless steel bowl, with fresh onions and tomatoes on top, rustic background",
    description: "A simple, nutritious traditional stew of boiled maize and beans.",
    category: "Mains"
  },
  {
    item_name: "Maharagwe",
    image_filename: "maharagwe.jpg",
    ai_prompt: "Kenyan maharagwe (stewed red beans) in tomato sauce, in a steel bowl, with chapati in background",
    description: "A hearty, protein-rich stew of red kidney beans cooked in a rich coconut and tomato base.",
    category: "Mains"
  },
  {
    item_name: "Vegetable Pilau",
    image_filename: "vegetable-pilau.jpg",
    ai_prompt: "Vegetable pilau with carrots, peas, and potatoes, aromatic steam, colorful spices",
    description: "Fragrant rice cooked with aromatic spices and mixed garden vegetables.",
    category: "Mains"
  },
  {
    item_name: "Ugali + Pumpkin Leaves",
    image_filename: "ugali-pumpkin-leaves.jpg",
    ai_prompt: "Ugali with sautéed pumpkin leaves (seveve), traditional Kenyan vegetarian meal",
    description: "The staple cornmeal dish of Kenya served with tender, sautéed pumpkin leaves (Seveve).",
    category: "Mains"
  },
  {
    item_name: "Ndengu Stew",
    image_filename: "ndengu-stew.jpg",
    ai_prompt: "Kenyan ndengu (green grams) stew with tomatoes and onions, served in a steel pot, rustic",
    description: "Creamy green gram (mung bean) stew, a wholesome comfort food classic.",
    category: "Mains"
  },

  // Sides
  {
    item_name: "Beef Sambusa",
    image_filename: "beef-sambusa.jpg",
    ai_prompt: "Three golden-brown beef sambusas on a plate with green chili dip, Kenyan snack",
    description: "Crispy triangular pastry pockets filled with spiced minced beef and onions.",
    category: "Sides"
  },
  {
    item_name: "Chips",
    image_filename: "chips.jpg",
    ai_prompt: "Crispy golden french fries in a paper cone with ketchup dip, Nairobi street food style",
    description: "Freshly fried potato chips, served Nairobi street style.",
    category: "Sides"
  },
  {
    item_name: "Kachumbari",
    image_filename: "kachumbari.jpg",
    ai_prompt: "Fresh Kenyan kachumbari salad with tomatoes, onions, and chili, in a small bowl, bright colors",
    description: "A refreshing fresh tomato and onion salad with chili and coriander.",
    category: "Sides"
  },
  {
    item_name: "Extra Ugali",
    image_filename: "extra-ugali.jpg",
    ai_prompt: "White ugali mound on a plate, smooth texture, steam rising, simple presentation",
    description: "An extra serving of hot, fresh ugali.",
    category: "Sides"
  },

  // Drinks
  {
    item_name: "Chai (Tea)",
    image_filename: "chai.jpg",
    ai_prompt: "Hot Kenyan spiced tea with milk in a small glass cup, steam rising, traditional breakfast setting",
    description: "Rich, milky tea brewed with ginger and tea masala.",
    category: "Drinks"
  },
  {
    item_name: "Fresh Mango Juice",
    image_filename: "mango-juice.jpg",
    ai_prompt: "Fresh yellow mango juice in a tall glass with ice and a slice of mango, natural light",
    description: "Chilled, thick juice made from sweet, ripe mangoes.",
    category: "Drinks"
  },
  {
    item_name: "Stoney Tangawizi",
    image_filename: "stoney-tangawizi.jpg",
    ai_prompt: "Chilled Stoney Tangawizi ginger beer in green bottle with frost, on a bar counter",
    description: "The iconic strong ginger beer soda.",
    category: "Drinks"
  },
  {
    item_name: "Coca-Cola 500ml",
    image_filename: "coke-500ml.jpg",
    ai_prompt: "Chilled Coca-Cola in 500ml glass bottle with condensation, on a restaurant table",
    description: "Ice-cold soda in a glass bottle.",
    category: "Drinks"
  }
];