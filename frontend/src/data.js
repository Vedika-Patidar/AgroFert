// src/data/fertilizerData.js

export const fertilizers = [
  {
    id: 1,
    name: "Urea",
    requirement: 1200,
    availability: 1000,
    state: "Maharashtra",
    usage:
      "Apply in split doses; mix with soil or use as top dressing during crop growth.",
    crops: ["Wheat", "Rice", "Maize", "Sugarcane"],
    description:
      "Urea is a nitrogen-rich fertilizer that promotes vegetative growth and increases crop yield. Excess use can cause soil acidification.",
    image: "https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg",
    type: "Chemical",
  },
  {
    id: 2,
    name: "DAP (Diammonium Phosphate)",
    requirement: 800,
    availability: 900,
    state: "Madhya Pradesh",
    usage:
      "Apply at sowing or during early crop growth; mix with soil for even distribution.",
    crops: ["Wheat", "Rice", "Maize", "Soybean"],
    description:
      "DAP is rich in nitrogen and phosphorus. It enhances root development and boosts early growth stages of crops.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFBlNwKnaNKE3q-jl-8bcCAiGLt6D8eCxDUg&s",
    type: "Chemical",
  },
  {
    id: 3,
    name: "MOP (Muriate of Potash)",
    requirement: 500,
    availability: 300,
    state: "Madhya Pradesh",
    usage:
      "Apply as basal dose during soil preparation; avoid direct contact with seeds.",
    crops: ["Potato", "Sugarcane", "Tomato", "Cotton"],
    description:
      "MOP is a potassium-rich fertilizer that improves crop quality, drought resistance, and disease resistance.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKuPI8zCb8h27f5TGhAqRQbYD2F0F6sj6rIQ&s",
    type: "Chemical",
  },
  {
    id: 4,
    name: "Nitrogen",
    requirement: 1100,
    availability: 1200,
    state: "Madhya Pradesh",
    usage:
      "Apply in multiple splits during crop growth; avoid excessive doses.",
    crops: ["Maize", "Wheat", "Rice"],
    description:
      "Nitrogen promotes leafy growth and overall crop vigor. It is essential for chlorophyll production.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt-298X8tVg-JbvdA5XgWZaNSxCIRK-0eXwQ&s",
    type: "Chemical",
  },
  {
    id: 5,
    name: "Phosphate",
    requirement: 700,
    availability: 600,
    state: "Maharashtra",
    usage:
      "Apply at the time of sowing; can also be used as foliar spray in certain crops.",
    crops: ["Legumes", "Maize", "Rice"],
    description:
      "Phosphate fertilizer supports root development, flowering, and fruiting. It enhances energy transfer in plants.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7ePzbBPcopX6kN9VBtWlGgjg-WguxwUZFg&s",
    type: "Chemical",
  },
  {
    id: 6,
    name: "Potassium",
    requirement: 400,
    availability: 200,
    state: "Andhra Pradesh",
    usage:
      "Apply as basal dose; can be mixed with irrigation water for fertigation.",
    crops: ["Potato", "Tomato", "Sugarcane", "Citrus"],
    description:
      "Potassium enhances water retention, improves crop quality, and increases resistance to stress and diseases.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeHlBoyIuZ1F1goeDXEgUgO1wHCSQTrwRRuQ&s",
    type: "Chemical",
  },
  {
    id: 7,
    name: "Ammonium Sulfate",
    requirement: 350,
    availability: 400,
    state: "Andhra Pradesh",
    usage:
      "Apply at sowing or as top dressing; incorporate into soil for best results.",
    crops: ["Rice", "Wheat", "Cotton"],
    description:
      "Ammonium sulfate provides nitrogen and sulfur, essential for protein synthesis and chlorophyll formation.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdRfRZVtzgLFJU-wIkuxtgxbzO319gIb5FdQ&s",
    type: "Chemical",
  },
  {
    id: 8,
    name: "Zinc Sulfate",
    requirement: 150,
    availability: 180,
    state: "Maharashtra",
    usage:
      "Apply to soil or as foliar spray; useful for correcting zinc deficiency.",
    crops: ["Rice", "Wheat", "Maize"],
    description:
      "Zinc sulfate corrects zinc deficiencies in soil, improving enzyme function and crop yield.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbE1U6a0g-pCIm41lHSe7-4PONcoNc1RQHRA&s",
    type: "Bio",
  },
  {
    id: 9,
    name: "Bio Fertilizer A",
    requirement: 200,
    availability: 150,
    state: "Punjab",
    usage: "Mix with soil during preparation; helps in nitrogen fixation.",
    crops: ["Legumes", "Soybean", "Groundnut"],
    description:
      "Bio Fertilizer A contains beneficial microbes to enhance soil fertility and crop growth naturally.",
    image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    type: "Bio",
  },
  {
    id: 10,
    name: "Organic Fertilizer B",
    requirement: 180,
    availability: 120,
    state: "Karnataka",
    usage: "Apply as compost or manure; improves soil structure.",
    crops: ["Vegetables", "Fruits", "Rice"],
    description:
      "Organic Fertilizer B enriches soil with organic matter, promoting sustainable crop production.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    type: "Organic",
  },
  {
    id: 11,
    name: "Bio Fertilizer C",
    requirement: 120,
    availability: 100,
    state: "Karnataka",

    usage: "Use during seed sowing; enhances nutrient uptake.",
    crops: ["Rice", "Wheat", "Maize"],
    description:
      "Bio Fertilizer C is rich in beneficial bacteria that fix nitrogen and improve soil health.",
    image: "https://images.pexels.com/photos/257658/pexels-photo-257658.jpeg",
    type: "Bio",
  },
  {
    id: 12,
    name: "Organic Fertilizer D",
    requirement: 150,
    availability: 90,
    state: "Punjab",
    usage: "Spread evenly on soil; mix well before planting.",
    crops: ["Vegetables", "Citrus", "Tomato"],
    description:
      "Organic Fertilizer D improves soil moisture retention, enhances microbial activity, and increases yield.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqXOv2BkjdktakeVMhLnwW56mMnwbi8aHYKQ&s",
    type: "Organic",
  },
  {
    id: 13,
    name: "Compost Mix",
    requirement: 500,
    availability: 450,
    state: "Maharashtra",
    usage: "Apply as top dressing; enriches soil organically.",
    crops: ["Vegetables", "Fruits", "Rice", "Wheat"],
    description:
      "Compost Mix is organic matter that improves soil fertility and structure naturally.",
    image: "https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg",
    type: "Organic",
  },
];
