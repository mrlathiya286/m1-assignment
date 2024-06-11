const petNames = [
  "Buddy",
  "Max",
  "Whiskers",
  "Luna",
  "Charlie",
  "Milo",
  "Bella",
  "Lucy",
  "Daisy",
  "Molly",
];
const petBreeds = [
  "Golden Retriever",
  "Labrador Retriever",
  "Maine Coon",
  "Siamese",
  "Poodle",
  "Bulldog",
  "Beagle",
  "Pug",
  "Rottweiler",
  "German Shepherd",
];
const descTexts = [
  "Buddy is a friendly and energetic Golden Retriever who loves to play fetch.",
  "Max is a loyal Labrador Retriever who enjoys swimming and outdoor activities.",
  "Whiskers is a majestic Maine Coon with a gentle temperament and loves being brushed.",
  "Luna is a curious Siamese cat with striking blue eyes and a love for climbing.",
  "Charlie is a smart and active Poodle who excels in agility training.",
  "Milo is a gentle Bulldog who loves lounging and being pampered.",
  "Bella is an inquisitive Beagle who enjoys exploring and sniffing around.",
  "Lucy is a charming Pug with a playful personality and a love for cuddles.",
  "Daisy is a protective Rottweiler with a heart of gold.",
  "Molly is a brave German Shepherd who is always ready for an adventure.",
];

const gallery = document.getElementById("gallery");

for (let i = 0; i < petNames.length; i++) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = `images/animal${i + 1}.jpg`;
  img.alt = `Cute animal ${i + 1}`;
  img.className = "lightbox-toggle";
  card.appendChild(img);

  const info = document.createElement("div");
  info.className = "info";
  info.innerHTML = `<div class="caption">${petNames[i]}</div><p>Breed: ${petBreeds[i]}</p>`;
  info.addEventListener("click", () => {
    alert(descTexts[i]); // Display description in an alert (or any other desired behavior)
  });
  card.appendChild(info);

  gallery.appendChild(card);
}
