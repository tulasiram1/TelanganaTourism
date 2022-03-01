const mongoose = require('mongoose');
const tourModel = require('./../model/tourModel');
const dotenv = require('dotenv');


const data = {
    "1": {
        "Ranking": 14,
        "Name": "Ramoji Film City",
        "Image": "Ramoji_Film_City_Hyderabad.jpg",
        "Location": "Hyderabad",
        "OCTime": "9:00 AM - 8:00 PM",
        "Description": "A place that is perfect for all the lovers of cinema and Bollywood! Set up by Ramoji Rao, the head of Ramoji group in 1991, Ramoji Film City is a spectacular getaway a little outside the city of Hyderabad. It is spread over 2500 acres and has been certified as the World's largest Film Studio Complex by the Guinness Book of World Records. Ramoji Film City can accommodate 20 film units at one go and has various shooting locations including London Street, Hollywood signage, Japanese gardens, airport, hospital, landscapes and buildings as well as laboratories. Being one of the most popular places to visit in Hyderabad, one can reach Ramoji Film City through a number of packaged tours and buses that leave regularly from the city.Ramoji Film City is a fun and diverse venue where you can indulge in a number of activities ranging from film city tours to adventure sports and toy train rides to a number of gardens. Smaller renditions of famous monuments in the country such as the Amer Palace are also present here. What's more, you can also stroll through a number of other sets and settings such as royal courts and other locations that have drawn inspiration from different architectures throughout the world. If you decide to visit this destination, after all, be sure to keep aside an entire day for this fun-filled location!",
        "Caption": "Children"
    },
    "2": {
        "Ranking": 13,
        "Name": "Charminar",
        "Image": "Charminar.jpg",
        "Location": "Hyderabad",
        "OCTime": "9:00 AM - 5:30 PM",
        "Description": "An identifying feature of the city, Charminar is the most prominent landmark located right in the heart of Hyderabad. The monument was erected by Quli Qutub Shah to signify the founding of Hyderabad. As is evident from the structure, it was so named as it consists of four minarets. Although it lies right in the centre of the city with traffic and crowds milling all about it, Charminar certainly manages to hold the gaze. It is also famous for the market that sprawls around it and is called 'Laad' or 'Chudi' Bazaar.Since the construction of the monument in 1591, Charminar has been synonymous with the culture of Hyderabad standing tall as a reminder of the glorious days of the past era. It is a massive structure which has four minarets which many believe stand for the first four 'khalifas' (Prophets) of Islam. Towards the north of the monument, there are four gateways known as Char Kaman which have been constructed in the cardinal directions. The structure was intended to serve as a Madrasa or a Mosque. In its present form, Charminar, along with Qutub Shahi Tombs and the Golconda Fort, has been added to the 'tentative list' of UNESCO World Heritage Sites.",
        "Caption": "History"
    },
    "3": {
        "Ranking": 12,
        "Name": "Golconda Fort",
        "Image": "GolcondaFort.jpg",
        "Location": "Hyderabad",
        "OCTime": "8:00 AM - 5:30 PM",
        "Description": "Situated in the Western part of the beautiful city of Hyderabad at a distance of approximately 9 km from Hussain Sagar Lake, Golconda Fort is one of the region's best-preserved monuments. The construction of this fort was completed in the 1600s and it is reputed for being the area where once, the mighty Koh-I-Noor diamond was stored. It is said that if you clap your hands at the bottom of the fort, the echoes of it can be heard right to the top! The architecture, the legends, the history, and the mystery of Golconda Fort add to its allure and make it one of the must-visit places in Hyderabad. The mines here are known to produce some of the most coveted and popular gems ever known in the world such as Idol's Eye, the Hope Diamond, Darya-i-noor and the famous Koo-i-noor.In the evening, Golconda Fort comes to life with the light and sound show which showcases snippets from its regal past. The grandeur, the rise, and the fall of the fort are all spectacular in their own right. With its fascinating history, the place is definitely worth a visit.",
        "Caption": "History"
    },
    "4": {
        "Ranking": 11,
        "Name": "Hussain Sagar",
        "Image": "HusainSagar",
        "Location": "Hyderabad",
        "OCTime": " 8:00 AM - 10:00 PM",
        "Description": "Renowned as Asia's largest artificial lake, Hussain Sagar Lake is one of the most popular tourist attractions located in Hyderabad. The lake itself was commissioned by Ibrahim Quli Qutub Shah in 1563 and is renowned for its monolith of Lord Buddha that stands right in its centre. Incidentally, this monolith structure is the tallest of its kind in the world! Hussain Sagar lake is also Called Tank Bund and lies on a tributary of River Musi. The attraction also has 3 km long dam wall and connects the twin cities of Hyderabad and Secunderabad. It is bordered by Indira Park, Sanjeevaiah Park, and Lumbini Park on 3 sides and is truly a relaxing and calming getaway from the city.Although the Hussain Sagar Lake is popular for activities such as fish culture, water sports and boat rides, the major attraction of the lake is a monolithic Buddha statue situated right at the heart of the lake. The statue of Buddha was installed in the year 1992 and was inaugurated by His Holiness Dalai Lama himself. Standing at the Tank Bund, you can see the whole lake shimmering around you as the lights sparkle on the shore. Thus, the road is also known as the 'Necklace Road'. Owing to its unique heart-shaped outline, the Hussain Sagar Lake has been declared as the 'Heart of the World' by the United Nations World Tourism Organization (UNWTO).",
        "Caption": "Boating"
    },
    "5": {
        "Ranking": 10,
        "Name": "Pakhal Lake",
        "Image": "attr_wiki_3335.jpg",
        "Location": "Warangal",
        "OCTime": " 6:00 AM - 6:00 PM",
        "Description": "Around 50 km away from Warangal city is the beautiful Pakhal Lake which is spread over an area of 30 sq km. Set amidst the lush green forests and hills, the human-made lake forms a highly picturesque location.The lake also borders a wildlife sanctuary located at its shore. The chirping of birds mingled with rejuvenating breeze and tranquillity makes it a favourite spot for picnics and nature enthusiasts.A man-made lake built during the Kakatiya Dynasty by the King Ganapati Deva in 1213 AD, it was made to serve the farmland activities. The creation of ancient times, even today, is seen performing its duty of providing water for irrigation. Approximately 3 Lakh acres of land is surviving over its waters. Located next to the Pakhal Wildlife Sanctuary, established in the year 1952 by the makers of this lake, the Pakhal Lake also provides natural heaven to the wild animals amongst the range of low hills and a plateau with safe ambience. This is the reason; one even spots a wide range of species of flora and fauna near the lake.",
        "Caption": "Aqua Life"
    },
    "6": {
        "Ranking": 9,
        "Name": "Thousand Pillar Temple",
        "Image": "4550939627_bcf3f04b76_b_20170616150107.jpg",
        "Location": "Warangal",
        "OCTime": "5:00 AM - 9:00 PM",
        "Description": "The Thousand Pillar Temple is an ancient temple that is tucked away in a small town named Hanamakonda in the vibrant state of Telangana. As the name suggests, the temple has over one thousand pillars, some of which are a part or extension of adjacent pillars! These pillars are so tightly knit, they practically form the walls of the temple. Constructed in a star-shaped architecture, the Thousand Pillars Temple is a popular pilgrimage centre which welcomes more than 1000 devotees almost every day. The temple also contains a huge monolith Nandi, made up of black basalt stone. The three shrines located in the temple are together known as Trikootalayam.The mighty temple is a true specimen of Kakatiya architecture and Chalukyan architecture both, and this does a great job of enhancing its already overwhelming beauty.  There are three presiding deities in this temple- Lord Shiva, Lord Vishnu and Lord Surya. According to the Hindu traditions, Lord Vishnu is the preserver of the universe- the one who ensures that elements of vitality are preserved to strike the balance, Lord Shiva is the destroyer of the universe- the one who destroys negative elements of the universe and give way to the birth of a new beginning, and Lord Surya- the sun god, the one who sustains the whole universe by his warmth; without whom the whole universe would be just an enormous pit of darkness. And to think that this temple houses the shrines of all the three mighty lords under one roof, a compelling reason to witness this powerhouse of positive vibes and uplifting energy. The temple was built by Rudra Deva and hence houses a deity in his name too.",
        "Caption": "Devotional"
    },
    "7": {
        "Ranking": 8,
        "Name": "Ramappa Temple",
        "Image": "r1_20171004214449.png",
        "Location": "Warangal",
        "OCTime": "6:00 AM - 6:00 PM",
        "Description": "The magnificent structure of Ramappa Temple is situated about 77 kilometres away from the main city of Warangal, right in the heart of the ancient capital of the Kakatiya Dynasty. Dedicated to Lord Shiva, the temple is believed to have been constructed over a period of 40 years. It was built by General Recherla Rudra during the period of the Kakatiya ruler Ganapati Deva. The edifice of Ramappa Temple is an exquisite example of Kakatiya style of design and is covered in detailed carvings that depict the life in the olden times. The intricate architecture and mighty foundation has stood the test of time and is a wonderful look into the culture and history of Hyderabad.Also known as the Ramalingeswara temple, it derives its name from the sculptor Ramappa who built the statue of Shiva and started the worship of the deity here. As you enter the premises, you are welcomed by two delicate statues of dancers striking graceful poses. A massive 9 feet Shivalinga is enshrined in the temple and is the main deity here as well. Two other smaller Shiva shrines can also be found on either side of the main temple, although both are in ruins. The Nandi inside the temple appears to be alert, ready to follow the order of the lord and has survived the test of time.",
        "Caption": "Devotional"
    },
    "8": {
        "Ranking": 7,
        "Name": "Warangal Fort",
        "Image": "Warangal_fort_pillars_01_20171120120831.jpg",
        "Location": "Warangal",
        "OCTime": "10:00 AM - 7:00 PM",
        "Description": "A prominent landmark of the Telangana state and an apt example of architectural excellence and historical richness of the yore, the Warangal fort is situated in Warangal. The city is also known as Oru Kallu, which means 'a single stone'. Locals believe the city was built on a single rock in the medieval era. Sprawlingly spread across a stretch of 19 km between Warangal & Hanamkonda, this 12th-century fort is a prominent historical attraction in Telangana. Every year thousands of enthusiastic tourists flock in to witness the historical and architectural marvel of this region. The major highlights of Warangal fort are the four ornamental gates, which are now the official emblem of the Telangana state. The fort is in ruins today, still refelecting the historical grandeur and architectural preeminence of the Kakatiya Dynasty. The ruins hardly resemble any fort as the typical grand walls, cannons, the Darbaar Halls of the rulers are missing. However, what you can witness is the remnants of one of the most invincible fortifications of the medieval era. ",
        "Caption": "History"
    },
    "9": {
        "Ranking": 6,
        "Name": "Eturnagaram Sanctuary",
        "Image": "5108.jpg",
        "Location": "Warangal",
        "OCTime": "8:00 AM - 5:00 PM",
        "Description": "The Eturnagaram Wildlife Sanctuary is one of the oldest wildlife sanctuaries in the Telangana region located about 110 kilometres from Warangal. It was declared as a wildlife sanctuary due to its rich biodiversity by the former Hyderabad Government in 1953. The sanctuary has unique features spread across its length and breadth which one cannot stop praising.The Dayyum Vagu River flows through the sanctuary making it appear even more beautiful and separating it into two parts. Natural vegetation covers the sanctuary and enhances the scenic beauty of the place to a different level altogether. People from all over visit this exquisite location to unwind and spend a fun day away from the fast-moving and hectic life. There are steeps and some gentle slopes in the wildlife park along with a historical significance dating back to the existence of the tree fossils in this Sarvai area and caves. This natural park is spread over an area of 806 square kilometres and is believed to be one of the rarest eco-regions around the world. Three-fourth of the sanctuary is covered in rising and falling plains and dense forest formation while the remaining one-fourth comprises of springs and streams. Eturnagaram Wildlife Sanctuary is also very famous for the largest tribal jahtra of Asia known as Sammakkka Sarakka Jathra which takes place once in every two years.",
        "Caption": "Wildlife"
    },
    "10": {
        "Ranking": 1,
        "Name": "Kunthala Waterfalls",
        "Image": "KunthalaWaterfalls_20200405131304_20200405133408.jpg",
        "Location": "Adilabad",
        "OCTime": "-",
        "Description": "Regarded as one of the most scenic waterfalls in Telangana, the Kunthala Waterfalls is situated in amid of gorgeous Sahyadri Mountain Range. Kuntala waterfall is the highest waterfall in the state that plunges from a height of 150 feet. The waterfall originates from the Kadam river which is known for its picturesque forests.As per the legend, the waterfall is named after Shakuntala, who was believed to have fallen in love with king Dushyanta, at the very site. Also, it is said that Shakuntala used to take bath in this Kuntala Falls. Since Gond tribes mostly live here, the waterfall’s name is derived from the world ‘Kunta’ which means pond in both Gondi and Tamil. The word ‘Kuntalu’ stands for multiple ponds, and this waterfall is created by the confluence of several ponds which drains from the river.",
        "Caption": "Beautiful"
    },
    "11": {
        "Ranking": 5,
        "Name": "Kawal Sanctuary",
        "Image": "Kawal_20200403152937_20200403154212.jpg",
        "Location": "Adilabad",
        "OCTime": "6:00 AM - 6:00 PM",
        "Description": "Situated in old Adilabad, Kawal Wildlife Sanctuary is famous for its enormous variety of flora and fauna. The smell of the wilderness, untouched and uninhabited regions where animals thrive in harmony is precisely what Kawal Wildlife Sanctuary is all about. Kawal wildlife sanctuary tiger reserve also has a rich and varied population of Cheetahs.Established in 1965, Kawal Wildlife Sanctuary was declared as a protected area in the region. Before being recognized as a reserve, the sanctuary was the hunting grounds of the Nizams who ruled the region. In order to protect the population of Tigers, the sanctuary was later recognized as a Tiger Reserve. Kawal Wildlife Reserve also serves as a catchment area for River Kadam, which is a tributary of River Godavari.",
        "Caption": "Wildlife"
    },
    "12": {
        "Ranking": 4,
        "Name": "Laknavaram Lake",
        "Image": "View_of_Laknavaram_lake%2C_from_suspension_bridge_20190116143959.jpg",
        "Location": "Warangal",
        "OCTime": "8:00 AM - 5:30 PM",
        "Description": "Warangal is prominent for the several remarkable lakes it has incorporated in its topography, it was also the former capital of Kakatiya dynasty. Laknavaram Cheruvu or Laknavaram Lake is a man-made wonder tucked away from civilisation in the Govindaraopet just 80 kilometres from Warangal, cradled by lush green dense forest cover and glorious hills. Laknavaram lake in the Bhupalpally district in the state of Telangana is locally famous by the name of Laknavaram Cheruvu. The lake amasses an area of over a whopping 10,000 acres. and was built by the Kakatiya clan when Warangal served as their capital.",
        "Caption": "Beautiful/Boating"
    },
    "13": {
        "Ranking": 15,
        "Name": "Bogatha Falls",
        "Image": "800px-Bogatha_Waterfall_top_view_20180930005815.jpg",
        "Location": "Warangal",
        "OCTime": "-",
        "Description": "Also called the “Niagara of Telangana”, Bogatha Waterfalls is an eye pleasing and the second largest waterfall located in the state of Telangana. This is an offbeat place which proffers mesmerizing and picturesque views of the colourful and rich landscape that circumscribes it. The variegated hills from where the water bubbles and cascades down in a tortuous manner is simply beautiful. Falling from an elevation of 30 feet, many small gushing water streams coalesce to form a large magical pool at the bottom. The water of the Bogatha Waterfall later on merges with the Godavari river. Bogatha Waterfalls is a hidden gem that will prove to be a great getaway from the hustle bustle of the city and give you an opportunity to spend some time in the lap of nature and enjoy the pleasant sound and touch of bountiful water drops.",
        "Caption": "Beautiful"
    },
    "14": {
        "Ranking": 3,
        "Name": "Gayatri Waterfalls",
        "Image": "2018052618-nqquuynysnqedbo19q4ldnjr11m0uhrihdd2cody8a_20190108025113.jpg",
        "Location": "Adilabad",
        "OCTime": "-",
        "Description": "Gayatri Falls is a beautiful cascading waterfall over River Kadem in the Adilabad district of Telangana. Colloquially known as Gadidha Gundam or Mukti Gundam, the waterfalls are secretly tucked in between the deep woods of the Tarnam Khurd Village.Popular for beautiful scenic views and panoramic vistas, the spot also offers moderate to challenging trekking opportunities and is best visited during monsoons. The lesser-known Gayatri waterfalls is usually visited with the Pochera and Kuntala Falls situated in close vicinity. ",
        "Caption": "Beautiful"
    },
    "15": {
        "Ranking": 2,
        "Name": "Medaram",
        "Image": "dc-Cover-p0vvoo4n1mgv6upv5u02a1cdu1-20160221063620.Medi_20190412142119.jpg",
        "Location": "Warangal",
        "OCTime": "-",
        "Description": "Located in the district of Warangal in Telangana, Medaram is a tiny village. With a scanty population of approximately 3000 people, the most noticeable thing about the dainty village is it's rich and vibrant aesthetics. Medaram is popular not only in India, but is a name known in the world due to its 'Sammakka Sarakka Jatara', which is Asia's biggest biennial tribal fair. It is a grand and pompous fair that attracts millions of pilgrims to the village. You can taste peculiar and true village life, even in the 21st century only at this magnificent village. Besides, If there is one other thing that makes Medaram the next destination on your bucket list- it is the sheer scenic beauty of nature.",
        "Caption": "Festival"
    },
}

dotenv.config({ path: './../config.env' });

const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD)
mongoose.connect(DB).then(() => {
    console.log('DATABASE Connected successfully');
}).catch((err) => {
    console.log("Problem in connecting DataBase", err);
});

const insert = async () => {
    try {
        for (i = 1; i <= 15; i++)
            tour = await tourModel.create(data["" + i]);
        console.log("Insertion done :)");
    }
    catch (err) {
        console.log(err);
    }
    process.exit(0);
}

insert();



