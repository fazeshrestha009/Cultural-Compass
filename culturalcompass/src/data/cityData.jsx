export const projectData = [
  {
    id: 1,
    city: "Kathmandu",
    des: "Kathmandu, the capital city of Nepal, is rich in history, culture, and natural beauty.",
    des2: "sdsaidugasdgsaiuydgsiagdiusahgdi",
    image: "/kathmandu.png", // Featured image for Kathmandu
    lat: 27.7172,  // Latitude for Kathmandu
    lon: 85.3240, // Longitude for Kathmandu
    images: [
      { title: "Kathmandu Durbar Square", image: "/pokhara.png" },
      { title: "Swayambhunath Stupa", image: "/pokhara.png" },
      { title: "Boudhanath Stupa", image: "/pokhara.png" },
    ],
    attractions: [
      { name: "Pashupatinath Temple", description: "A sacred Hindu temple located on the banks of the Bagmati River." },
      { name: "Garden of Dreams", description: "A historic garden with neoclassical architecture." },
    ],
    nearby: [
      { name: "Nagarkot", description: "A scenic hill station offering breathtaking views of the Himalayas." },
      { name: "Bhaktapur", description: "A UNESCO World Heritage Site known for its medieval art and architecture." },
    ],
    food: [
      { name: "Burger", description: "A popular fast food item with a variety of toppings.", image: "/images/burger.jpg" },
      { name: "MOMO", description: "Steamed dumplings filled with meat or vegetables.", image: "/images/momo.jpg" },
      { name: "Chowmein", description: "Stir-fried noodles with vegetables and meat.", image: "/images/chowmein.jpg" },
      { name: "Dal Bhat", description: "A traditional meal of lentils, rice, and vegetables.", image: "/images/dalbhat.jpg" },
    ]
  },
  {
    id: 2,
    city: "Pokhara",
    des: "Pokhara, a city known for its natural beauty, offers serene lakes, mountains, and a vibrant culture.",
    image: "/pokhara.png", // Featured image for Pokhara
    lat: 28.2096,  // Latitude for Pokhara
    lon: 83.9856, // Longitude for Pokhara
    images: [
      { title: "Phewa Lake", image: "/pokhara.png" },
      { title: "Sarangkot Viewpoint", image: "/pokhara.png" },
      { title: "World Peace Pagoda", image: "/pokhara.png" },
    ],
    attractions: [
      { name: "Phewa Lake", description: "A beautiful freshwater lake surrounded by lush hills." },
      { name: "Devi's Fall", description: "A famous waterfall located in the south of Pokhara." },
    ],
    food: [
      { name: "Burger", description: "A popular fast food item with a variety of toppings.", image: "/images/burger.jpg" },
      { name: "MOMO", description: "Steamed dumplings filled with meat or vegetables.", image: "/images/momo.jpg" },
      { name: "Thukpa", description: "A noodle soup with vegetables and meat.", image: "/images/thukpa.jpg" },
      { name: "Aloo Paratha", description: "Flatbread stuffed with spiced potatoes.", image: "/images/alooparatha.jpg" },
    ],
    nearby: [
      { name: "Annapurna Base Camp", description: "A popular trekking destination for stunning views of the Annapurna mountain range." },
      { name: "Jomsom", description: "A popular destination for trekking and the gateway to the Mustang region." },
    ]
  },
  {
    id: 3,
    city: "Lalitpur",
    des: "Lalitpur, also known as Patan, is famous for its ancient temples, historical monuments, and vibrant culture.",
    image: "/kathmandu.png",  // Featured image for Lalitpur
    lat: 27.6628,  // Latitude for Lalitpur
    lon: 85.3240, // Longitude for Lalitpur
    images: [
      { title: "Hiranya Varna Mahavihar", image: "/lalitpur.png" },
      { title: "Mahabouddha Temple", image: "/lalitpur.png" },
      { title: "Patan Durbar Square", image: "/lalitpur.png" },
    ],
    attractions: [
      { name: "Golden Temple", description: "A historical Buddhist monastery with exquisite architecture." },
      { name: "Patan Museum", description: "A museum featuring Nepalese art, culture, and history." },
    ],
    food: [
      { name: "Momo", description: "Steamed dumplings filled with meat or vegetables.", image: "/momo.png" },
      { name: "Sel Roti", description: "A traditional Nepali sweet ring-shaped rice donut.", image: "/selroti.png" },
      { name: "Chatamari", description: "A rice crepe with meat, vegetables, or eggs.", image: "/chatamari.jpg" },
      { name: "Sukuti", description: "Spicy dried meat, usually served with vegetables.", image: "/sukuti.jpg" },
    ],
    nearby: [
      { name: "Bhaktapur", description: "A UNESCO World Heritage Site known for its medieval art and architecture." },
      { name: "Kirtipur", description: "A historic city with ancient temples and narrow streets." },
    ]
  },
  // Add more cities and expand data as needed
];
