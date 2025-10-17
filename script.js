const travelData = {
  singapore: {
    name: "🇸🇬 Singapore",
    categories: {
      "🍴 Food & Local Cuisine": [
        "Try local hawker centers like <a href='https://goo.gl/maps/eqP1XgT8v1WvZLhV9' target='_blank'>Maxwell Food Centre</a> and <a href='https://goo.gl/maps/dJwSshqqPZcHn5hh7' target='_blank'>Lau Pa Sat</a>.",
        "Popular dishes: Hainanese Chicken Rice, Chili Crab, Laksa."
      ],
      "🚕 Local Transport": [
        "Use the <a href='https://www.smrt.com.sg/' target='_blank'>MRT</a> — cheap and clean.",
        "Grab app is popular for taxis."
      ],
      "💳 Currency & Exchange": [
        "Currency: Singapore Dollar (SGD).",
        "Exchange counters at <a href='https://goo.gl/maps/yGZrG6RGQwpQkJbW7' target='_blank'>The Arcade, Raffles Place</a>."
      ],
      "🛬 Airport Info": [
        "Changi Airport – voted best in the world.",
        "Check <a href='https://www.changiairport.com/' target='_blank'>Changi Official Site</a>."
      ],
      "🗺️ Sightseeing (Day 1 - 3)": [
        "Day 1: Marina Bay Sands, Gardens by the Bay, Merlion Park.",
        "Day 2: Sentosa Island, Universal Studios, S.E.A Aquarium.",
        "Day 3: Chinatown, Little India, Clarke Quay nightlife."
      ],
      "🏨 Hotels & Hostels": [
        "Budget: <a href='https://goo.gl/maps/p3xARuyfZ6kN5WrD8' target='_blank'>The Pod Boutique Capsule</a>.",
        "Mid-range: <a href='https://goo.gl/maps/Er7z5ySgA8u5JbYF9' target='_blank'>Hotel G Singapore</a>."
      ],
      "💡 Local Tips": [
        "Carry an umbrella – rain showers common.",
        "Chewing gum is banned."
      ]
    }
  },
  bangkok: {
    name: "🇹🇭 Bangkok",
    categories: {
      "🍴 Food & Local Cuisine": [
        "Try <a href='https://goo.gl/maps/h7nKu4nmwJpYcE5B7' target='_blank'>Yaowarat Chinatown</a> and street food at Sukhumvit Soi 38.",
        "Must try: Pad Thai, Mango Sticky Rice, Tom Yum Soup."
      ],
      "🚕 Local Transport": [
        "Use BTS Skytrain and MRT for convenience.",
        "Tuk-tuks are fun but negotiate the fare!"
      ],
      "💳 Currency & Exchange": [
        "Currency: Thai Baht (THB).",
        "Exchange at <a href='https://goo.gl/maps/YcFZL3Q8r9EMuQkY7' target='_blank'>SuperRich Thailand</a> for good rates."
      ],
      "🛬 Airport Info": [
        "Suvarnabhumi (BKK) and Don Mueang (DMK) airports.",
        "Official site: <a href='https://suvarnabhumi.airportthai.co.th/' target='_blank'>AOT Thailand</a>."
      ],
      "🗺️ Sightseeing (Day 1 - 3)": [
        "Day 1: Grand Palace, Wat Pho, Wat Arun.",
        "Day 2: Chatuchak Market, Siam Paragon, MBK Mall.",
        "Day 3: Floating Market, Asiatique Riverfront, Rooftop Bars."
      ],
      "🏨 Hotels & Hostels": [
        "Budget: <a href='https://goo.gl/maps/kuhzxdr2jMKo5s4c9' target='_blank'>NapPark Hostel</a>.",
        "Luxury: <a href='https://goo.gl/maps/mPoLjV6eqrP2' target='_blank'>Mandarin Oriental Bangkok</a>."
      ],
      "💡 Local Tips": [
        "Dress modestly at temples (no shorts).",
        "Carry small notes for taxis and food stalls."
      ]
    }
  }
};

function showCity(cityKey) {
  const city = travelData[cityKey];
  document.querySelector('.city-grid').classList.add('hidden');
  document.getElementById('cityDetails').classList.remove('hidden');
  document.getElementById('cityName').textContent = city.name;

  const categoryList = document.getElementById('categoryList');
  categoryList.innerHTML = '';
  for (const [category, tips] of Object.entries(city.categories)) {
    const div = document.createElement('div');
    div.className = 'category-card';
    div.innerHTML = `<h3>${category}</h3><ul>${tips.map(t => `<li>${t}</li>`).join('')}</ul>`;
    categoryList.appendChild(div);
  }
}

function goBack() {
  document.querySelector('.city-grid').classList.remove('hidden');
  document.getElementById('cityDetails').classList.add('hidden');
}
