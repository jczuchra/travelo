// burger menu
const burger = document.querySelector(".burger-menu");
const bars = document.querySelector(".fa-bars");
const times = document.querySelector(".fa-times");
const menu = document.querySelector(".menu-sm");

burger.addEventListener("click", () => {
    bars.classList.toggle("active");
    times.classList.toggle("active");
    menu.classList.toggle("active");
})

// gallery

function GalleryObject(parent, imagesTable, titlesTable, descriptionsTable) {
    this.image = parent.children[0].children[1];
    this.leftArrow = parent.children[0].children[0];
    this.rightArrow = parent.children[0].children[2];
    this.title = parent.children[1].children[0];
    this.description = parent.children[1].children[1];
    this.imagesTable = imagesTable;
    this.titlesTable = titlesTable;
    this.descriptionsTable = descriptionsTable;
    this.i = 0;

    this.leftArrow.addEventListener("click", () => {
        this.changeContent(-1);
    });

    this.rightArrow.addEventListener("click", () => {
        this.changeContent(1);
    });
}

GalleryObject.prototype.changeContent = function (a) {
    this.i += a;
    if (this.i >= this.imagesTable.length) {
        this.i = 0;
    } else if (this.i < 0) {
        this.i = this.imagesTable.length - 1;
    }
    this.image.src = this.imagesTable[this.i];
    this.title.textContent = this.titlesTable[this.i];
    this.description.textContent = this.descriptionsTable[this.i];
}
//buildings

const buildings = document.querySelector(".buildings");
const buildingsImages = ["images/castle.jpg", "images/acropolis.jpg", "images/colosseum.jpg"];
const buildingsTitles = ["Neuschwainsten Castle, Germany", "Acropolis, Greece", "Colosseum, Italy"];
const buildingsDecriptions = ["Today Neuschwanstein is one of the most popular of all the palaces and castles in Europe. Every year 1.4 million people visit 'the castle of the fairy-tale king'.                                In the summer around 6,000 visitors a day stream through rooms that were intended for a single inhabitant",
    "The Acropolis of Athens is an ancient citadel located on a rocky outcrop above the city of Athens and contains the remains of several ancient buildings of great architectural and historic significance, the most famous being the Parthenon. The word acropolis is from the Greek words ἄκρον (akron, 'highest point, extremity') and πόλις (polis, 'city').",
    "The Colosseum or Coliseum (/kɒləˈsiːəm/ kol-ə-SEE-əm), also known as the Flavian Amphitheatre (Latin: Amphitheatrum Flavium; Italian: Anfiteatro Flavio [aŋfiteˈaːtro ˈflaːvjo] or Colosseo [kolosˈsɛːo]), is an oval amphitheatre in the centre of the city of Rome, Italy."
];

let buildingsObj = new GalleryObject(buildings, buildingsImages, buildingsTitles, buildingsDecriptions);

//cities

const cities = document.querySelector(".cities");
const citiesImages = ["images/prague.jpg", "images/paris.jpg", "images/toronto.jpg"];
const citiesTitles = ["Prague, Czech Republic", "Paris, France", "Toronto, Canada"]
const citiesDescriptions = ["Prague has been a political, cultural and economic centre of central Europe complete with a rich history. Founded during the Romanesque and flourishing by the     Gothic, Renaissance and Baroque eras, Prague was the capital of the kingdom of Bohemia and the main residence of several Holy Roman Emperors, most notably of Charles IV (r. 1346–1378).[10] It was an important city to the Habsburg Monarchy and its Austro-Hungarian Empire.",
    "Paris (French pronunciation: ​[paʁi] (About this sound listen)) is the capital and most populous city of France, with an area of 105 square kilometres (41 square miles) and a population of 2,206,488.[5][6] With 200,000 inhabitants in 1328, Paris, then already the capital of France, was the most populous city of Europe. By comparison, London in 1300 had 80,000 inhabitants",
    "Toronto is the anchor of an urban agglomeration, known as the Golden Horseshoe in Southern Ontario, located on the northwestern shore of Lake Ontario. A global city, Toronto is a centre of business, finance, arts, and culture, and is recognized as one of the most multicultural and cosmopolitan cities in the world"
];

let citiesObj = new GalleryObject(cities, citiesImages, citiesTitles, citiesDescriptions);

//nature

const nature = document.querySelector(".nature");
const natureImages = ["images/paternity.jpg", "images/yosemite.jpg", "images/yellowstone.jpg"];
const natureTitles = ["Paternity National Park, Poland", "Yosemite National Park, USA", "Yellowstone National Park, USA"];
const natureDescriptions = ["ONP is located in southrn part of the Krakow-Częstochowa Upland, 15 kilometers north of Kraków Valleys of two streams Prądnik and Sąspówka as well as the adjacent fragments of tje Jura plateau, are part of the Park.",
    "Not just a great valley, but a shrine to human foresight, the strength of granite, the power of glaciers, the persistence of life, and the tranquility of the High Sierra First protected in 1864, Yosemite National Park is best known for its waterfalls, but within its nearly 1,200 square miles, you can find deep valleys, grand meadows, ancient giant sequoias, a vast wilderness area, and much more.",
    "Visit Yellowstone and experience the world's first national park. Marvel at a volcano’s hidden power rising up in colorful hot springs, mudpots, and geysers. Explore mountains, forests, and lakes to watch wildlife and witness the drama of the natural world unfold. Discover the history that led to the conservation of our national treasures “for the benefit and enjoyment of the people.”"
];

let natureObj = new GalleryObject(nature, natureImages, natureTitles, natureDescriptions);

//beaches

const beaches = document.querySelector(".beaches");
const beachesImages = ["images/polynesia.jpg", "images/maladives.jpg", "images/ulsan.jpg"];
const beachesTitles = ["Polynesia", "Ulsan", "Maladives"];
const beachesDescriptions = ["Polynesia (UK: /ˌpɒlɪˈniːziə/, US: /-ʒə/; from Greek: πολύς polys 'many' and Greek: νῆσος nēsos 'island'; French: Polynésie, Samoan: Polenisia, Māori: Poronēhia or Poronihia) is a subregion of Oceania, made up of more than 1,000 islands scattered over the central and southern Pacific Ocean. The indigenous people who inhabit the islands of Polynesia are termed Polynesians, and share many similar traits including language family, culture, and beliefs.[1] Historically, they had a strong tradition of sailing and using stars to navigate at night. The largest country in Polynesia is New Zealand.",
    "Ulsan (Korean pronunciation: [ul.s͈an]), officially the Ulsan Metropolitan City, is South Korea's seventh-largest metropolitan city and the eight-largest overall with a population of over 1.1 million inhabitants.[1] It is located in the south-east of the country, neighboring Busan to the south and facing Gyeongju to the north.",
    "The Maldives (/ˈmɔːldiːvz/, US: /ˈmɔːldaɪvz/ (About this sound listen); Dhivehi: ދިވެހިރާއްޖެ Dhivehi Raa'jey), officially the Republic of Maldives, is a South Asian country, located in the Indian Ocean, situated in the Arabian Sea. It lies southwest of Sri Lanka and India. The chain of 26 atolls stretches from Ihavandhippolhu Atoll in the north to the Addu City in the south. Comprising a territory spanning roughly 298 square kilometres (115 sq mi), the Maldives is one of the world's most geographically dispersed sovereign states as well as the smallest Asian country by land area and population, with around 427,756 inhabitants"
];

let beachesObj = new GalleryObject(beaches, beachesImages, beachesTitles, beachesDescriptions);