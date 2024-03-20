import {Movie, MovieName, g, sp} from "./DataObjects.js";

const lang = "English";
const color = {
    sm:"darkred",vnm:"black",spv:"#a90475",mrb:"darkcyan",mWeb:"#ad3131"
};

export const order = [];
order[1] = new Movie("Spider-Man", 2002, [2, 1], lang, g.aaf, color.sm, "Images/SpiderMan1.jpg");
order[2] = new Movie("Spider-Man 2", 2004, [2, 7], lang, g.aaf, color.sm, "Images/SpiderMan2.jpg");
order[3] = new Movie("Spider-Man 3", 2007, [2, 19], lang, g.aaf, color.sm, "Images/SpiderMan3.jpg");
order[4] = new Movie("The Amazing Spider-Man", 2012, [2, 16], lang, g.aas, color.sm, "Images/AmazingSpiderMan1.jpg");
order[5] = new Movie("The Amazing Spider-Man 2", 2014, [2, 22], lang, g.aas, color.sm, "Images/AmazingSpiderMan2.jpg");

order[6] = new Movie("Spider-Man: Homecoming", 2017, [2,13], lang, g.aas, color.sm, "Images/SpiderManMCU1.jpg");
order[7] = new Movie("Venom", 2018, [1, 52], lang, g.a+sp+g.f+sp+g.h, color.vnm, "Images/Venom1.jpg");
order[8] = new Movie("Spider-Man: Into the Spider-Verse", 2018, [1, 57], lang, g.aas, color.spv, "Images/SpiderVerse1.jpg");
order[9] = new Movie("Spider-Man: Far From Home", 2019, [2,9], lang, g.aac, color.sm, "Images/SpiderManMCU2.jpeg");
order[10] = new Movie("Venom: Let There Be Carnage", 2021, [1,37], lang, g.a+sp+g.t+sp+g.c, color.vnm, "Images/Venom2.jpg");

order[11] = new Movie("Spider-Man: No Way Home", 2021, [2,28], lang, g.aaf, color.sm, "Images/SpiderManMCU3.jpg");
order[12] = new Movie("Morbius", 2022, [1,44], lang, g.aa+sp+g.h, color.mrb, "Images/Morbius1.jpg");
order[13] = new Movie("Spider-Man: Across the Spider-Verse", 2023, [2,20], lang, g.aas, color.spv, "Images/SpiderVerse2.jpg");
order[14] = new Movie("Madame Web", 2024, [1,56], lang, g.aaf, color.mWeb, "Images/MadameWeb1.jpg");
// order[] = new Movie("", 202, [,], lang, g., "", "Images/.jpg");


export const movies = [];
movies[0] = new MovieName("Spider-Man", "2002 - 2007", [1,2,3], "Images/SpiderMan.webp", "#3bc3cf");
movies[1] = new MovieName("The Amazing Spider-Man", "2012 - 2014", [4,5], "Images/AmazingSpiderMan.webp");
movies[2] = new MovieName("Marvel's Spider-Man", "2017 - 2021", [6,9,11], "Images/SpiderManMCU.webp");
movies[3] = new MovieName("Venom", "2018 - 2021", [7,10], "Images/Venom.jpg");
movies[4] = new MovieName("Spider-Verse: SpiderMan", "2018 - 2023", [8,13], "Images/SpiderVerse.jpg");
movies[5] = new MovieName("Morbius", 2022, [12], "Images/Morbius.jpg");
movies[6] = new MovieName("Madame Web", 2024, [14], "Images/MadameWeb.jpg", "#db41c7");
// movies[] = new MovieName("", "", [], "Images/.jpg");