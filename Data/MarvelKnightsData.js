import {Movie, MovieName, sp, g} from "./DataObjects.js";

const lang = "English";
const color = {
    dd:"#930303",jj:"#7316b5",lc:"#8b7005",iFist:"#a68a00",pnshr:"#433333",dfndr:"#944426"
};

export const order = [];
order[1] = new Movie("Daredevil S01 (E_13)", 2015, [11, 59], lang, g.acd, color.dd, "Images/Daredevil1.jpg");
order[2] = new Movie("Jessica Jones S01 (E_13)", 2015, [10, 20], lang, g.acd, color.jj, "Images/JessicaJones1.jpg");
order[3] = new Movie("Daredevil S02 (E_13)", 2016, [11, 57], lang, g.acd, color.dd, "Images/Daredevil2.jpg");
order[4] = new Movie("Luke Cage S01 (E_13)", 2016, [11, 5], lang, g.acd, color.lc, "Images/LukeCage1.jfif");
order[5] = new Movie("Iron Fist S01 (E_13)", 2017, [9, 35], lang, g.aa+sp+g.cr, color.iFist, "Images/IronFist1.webp");

order[6] = new Movie("The Defenders (E_8)", 2017, [8, 35], lang, g.aa+sp+g.cr, color.dfndr, "Images/TheDefenders1.jpg");
order[7] = new Movie("The Punisher S01 (E_13)", 2017, [12, 28], lang, g.acd, color.pnshr, "Images/ThePunisher1.webp");
order[8] = new Movie("Jessica Jones S02 (E_13)", 2018, [11, 27], lang, g.acd, color.jj, "Images/JessicaJones2.jpg");
order[9] = new Movie("Luke Cage S02 (E_13)", 2018, [10, 6], lang, g.acd, color.lc, "Images/LukeCage2.jpg");

order[10] = new Movie("Iron Fist S02 (E_10)", 2018, [10, 17], lang, g.aa+sp+g.cr, color.iFist, "Images/IronFist2.jpg");
order[11] = new Movie("Daredevil S03 (E_13)", 2018, [13, 30], lang, g.acd, color.dd, "Images/Daredevil3.jpg");
order[12] = new Movie("The Punisher S02 (E_13)", 2019, [12, 39], lang, g.acd, color.pnshr, "Images/ThePunisher2.webp");
order[13] = new Movie("Jessica Jones S03 (E_13)", 2019, [11, 32], lang, g.acd, color.jj, "Images/JessicaJones3.jpg");


export const series = [];
series[0] = new MovieName("Daredevil", "2015 - 2018", [1,3,11], "Images/Daredevil.jpg");
series[1] = new MovieName("Jessica Jones", "2015 - 2019", [2,8,13], "Images/JessicaJones.webp", "#1b8cc1");
series[2] = new MovieName("LukeCage", "2016 - 2018", [4,9], "Images/LukeCage.jfif");
series[3] = new MovieName("Iron Fist", "2017 - 2018", [5,10], "Images/IronFist.jpg");
series[4] = new MovieName("The Punisher", "2017 - 2019", [7,12], "Images/ThePunisher.jpg", "#e93131");
series[5] = new MovieName("The Defenders", 2017, [6], "Images/TheDefenders.jpg", "#fcb418");