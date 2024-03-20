import {Movie, MovieName, g, sp} from "./DataObjects.js";

const lang = "English";
const color = {
    xmen:"#0004dc",wolverine:"#8f6701",xmenPre:"#504545",deadpool:"#840909",newMut:"#1c92b9"
};

export const order = [];
order[1] = new Movie("X-Men", 2000, [1, 44], lang, g.aas, color.xmen, "Images/XMen1.jpg");
order[2] = new Movie("X2: X-Men United", 2003, [2, 14], lang, g.as+sp+g.t, color.xmen, "Images/XMen2.jpg");
order[3] = new Movie("X-Men: The Last Stand", 2006, [1, 44], lang, g.aas, color.xmen, "Images/XMen3.webp");
order[4] = new Movie("X-Men Origins: Wolverine", 2009, [1, 47], lang, g.as, color.wolverine, "Images/Wolverine1.jpg");
order[5] = new Movie("X-Men: First Class", 2011, [2, 11], lang, g.as, color.xmenPre, "Images/XMenPrequel1.webp");

order[6] = new Movie("The Wolverine", 2013, [2, 6], lang, g.as, color.wolverine, "Images/Wolverine2.webp");
order[7] = new Movie("X-Men: Days of Future Past", 2014, [2, 12], lang, g.aas, color.xmenPre, "Images/XMenPrequel2.webp");
order[8] = new Movie("Deadpool", 2016, [1, 48], lang, g.ac, color.deadpool, "Images/Deadpool1.jpg");
order[9] = new Movie("X-Men: Apocalypse", 2016, [2, 24], lang, g.aas, color.xmenPre, "Images/XMenPrequel3.webp");
order[10] = new Movie("Logan", 2017, [2, 17], lang, g.as+sp+g.d, color.wolverine, "Images/Wolverine3.jpg");

order[11] = new Movie("Deadpool 2", 2018, [2, 14], lang, g.aac, color.deadpool, "Images/Deadpool2.jpg");
order[12] = new Movie("Dark Phoenix", 2019, [1, 53], lang, g.aas, color.xmenPre, "Images/XMenPrequel4.jpeg");
order[13] = new Movie("The New Mutants", 2020, [1, 34], lang, g.a+sp+g.h+sp+g.m, color.newMut, "Images/TheNewMutants1.webp");
// order[14] = new Movie("Deadpool & Wolverine", 2024, [0,0], lang, g.a, color.deadpool, "Images/Deadpool3.jpg");
// order[] = new Movie("", 202, [,], lang, g., "", "Images/.jpg");


export const movies = [];
movies[0] = new MovieName("X-Men", "2000 - 2006", [1,2,3], "Images/XMen.webp");
movies[1] = new MovieName("Wolverine", "2009 - 2017", [4,6,10], "Images/Wolverine.jpg");
movies[2] = new MovieName("X-Men Prequel", "2011 - 2019", [5,7,9,12], "Images/XMenPrequel.jpg");
movies[3] = new MovieName("Deadpool", "2016 - 2018", [8,11], "Images/Deadpool.jpg");
movies[4] = new MovieName("New Mutants", 2020, [13], "Images/TheNewMutants.webp");
// movies[] = new MovieName("", "", [], "Images/.jpg");