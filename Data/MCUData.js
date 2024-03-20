import {Movie, MovieName, g, sp} from "./DataObjects.js";

const lang = "English";

const color = {
    ironMan:"#980606",hulk:"#006200",thor:"#721212",capA:"darkblue",avengers:"#5f5f5f",gotg:"purple",antman:"#af163c",drSt:"#8b6401",spiderMan:"darkred",
    blackPanther:"black",capM:"#942d4c",wandaVision:"#a50f0f",fws:"#424242",loki:"#0a8a26",blackWidow:"#520e43",whatIf:"#9c19a8",shangChi:"#0d0dc2",
    eternals:"#755a13",hawk:"#781767",moonKnight:"#5f5f5f",msMarvel:"#af7f25",groot:"#765b2b",sheHulk:"green",warewolf:"#6e6e6e",invasion:"#045604",echo:"#3d0479"
};

export const order = [];
order[1] = new Movie("Iron Man", 2008, [2,6], lang, g.aas, color.ironMan, "Images/IronMan1.jpg");
order[2] = new Movie("The Incredible Hulk", 2008, [1,52], lang, g.as+sp+g.t, color.hulk, "Images/TheIncredibleHulk1.jpg");
order[3] = new Movie("Iron Man 2", 2010, [2,5], lang, g.aas, color.ironMan, "Images/IronMan2.jpg");
order[4] = new Movie("Thor", 2011, [1,54], lang, g.a+sp+g.f, color.thor, "Images/Thor1.jpg");
order[5] = new Movie("Captain America: The First Avenger", 2011, [2,4], lang, g.a+sp+g.w, color.capA, "Images/CaptainAmerica1.jpg");
order[6] = new Movie("The Avengers", 2012, [2,23], lang, g.as+sp+g.f, color.avengers, "Images/Avengers1.jpg");
order[7] = new Movie("Iron Man 3", 2013, [2,10], lang, g.aas, color.ironMan, "Images/IronMan3.jpg");
order[8] = new Movie("Thor: The Dark World", 2013, [1,52], lang, g.aaf, color.thor, "Images/Thor2.webp");
order[9] = new Movie("Captain America: The Winter Soldier", 2014, [2,16], lang, g.aas, color.capA, "Images/CaptainAmerica2.webp");
order[10] = new Movie("Guardians of the Galaxy Vol. 1", 2014, [2,1], lang, g.aac, color.gotg, "Images/GuardiansOfTheGalaxy1.jpg");

order[11] = new Movie("Avengers: Age of Ultron", 2015, [2,21], lang, g.aas, color.avengers, "Images/Avengers2.jpg");
order[12] = new Movie("Ant-Man", 2015, [1,57], lang, g.as+sp+g.c, color.antman, "Images/AntMan1.jfif");
order[13] = new Movie("Captain America: Civil War", 2016, [2,27], lang, g.as, color.capA, "Images/CaptainAmerica3.webp");
order[14] = new Movie("Doctor Strange", 2016, [1,55], lang, g.aaf, color.drSt, "Images/DrStrange1.jpg");
order[15] = new Movie("Guardians of the Galaxy Vol. 2", 2017, [2,16], lang, g.aac, color.gotg, "Images/GuardiansOfTheGalaxy2.jpg");
order[16] = new Movie("Spider-Man: Homecoming", 2017, [2,13], lang, g.aas, color.spiderMan, "Images/SpiderManMCU1.jpg");
order[17] = new Movie("Thor: Ragnarok", 2017, [2,10], lang, g.aac, color.thor, "Images/Thor3.jpg");
order[18] = new Movie("Black Panther", 2018, [2,14], lang, g.aas, color.blackPanther, "Images/BlackPanther1.jpg");
order[19] = new Movie("Avengers: Infinity War", 2018, [2,29], lang, g.aas, color.avengers, "Images/Avengers3.webp");
order[20] = new Movie("Ant-Man and the Wasp", 2018, [1,58], lang, g.aac, color.antman, "Images/AntMan2.jfif");

order[21] = new Movie("Captain Marvel", 2019, [2,3], lang, g.aas, color.capM, "Images/CaptainMarvel1.webp");
order[22] = new Movie("Avengers: Endgame", 2019, [3,1], lang, g.aas+sp+g.d, color.avengers, "Images/Avengers4.jpg");
order[23] = new Movie("Spider-Man: Far From Home", 2019, [2,9], lang, g.aac, color.spiderMan, "Images/SpiderManMCU2.jpeg");
order[24] = new Movie("WandaVision S01 (E_9)", 2021, [5,20], lang, g.a+sp+g.c+sp+g.d, color.wandaVision, "Images/WandaVision1.jpg");
order[25] = new Movie("The Falcon and the Winter Soldier S01 (E_6)", 2021, [5,3], lang, g.aa+sp+g.d, color.fws, "Images/TheFalconAndTheWinterSoldier1.jpg");
order[26] = new Movie("Loki S01 (E_6)", 2021, [4,47], lang, g.aaf, color.loki, "Images/Loki1.jpg");
order[27] = new Movie("Black Widow", 2021, [2,14], lang, g.aas, color.blackWidow, "Images/BlackWidow1.jpg");
order[28] = new Movie("What If...? S01 (E_9)", 2021, [4,44], lang, g.aas, color.whatIf, "Images/WhatIf1.webp");
order[29] = new Movie("Shang-Chi and the Legend of the Ten Rings", 2021, [2,12], lang, g.aaf, color.shangChi, "Images/ShangChi1.webp");
order[30] = new Movie("Eternals", 2021, [2,36], lang, g.aaf, color.eternals, "Images/Eternals1.jpg");

order[31] = new Movie("Hawkeye S01 (E_6)", 2021, [4,39], lang, g.aa+sp+g.cr, color.hawk, "Images/Hawkeye1.jpg");
order[32] = new Movie("Spider-Man: No Way Home", 2021, [2,28], lang, g.aaf, color.spiderMan, "Images/SpiderManMCU3.jpg");
order[33] = new Movie("Moon Knight S01 (E_6)", 2022, [4,48], lang, g.aaf, color.moonKnight, "Images/MoonKnight1.jfif");
order[34] = new Movie("Doctor Strange in the Multiverse of Madness", 2022, [2,6], lang, g.aaf, color.drSt, "Images/DrStrange2.jpg");
order[35] = new Movie("Ms. Marvel S01 (E_6)", 2022, [4,31], lang, g.aac, color.msMarvel, "Images/MsMarvel1.jpeg");
order[36] = new Movie("Thor: Love and Thunder", 2022, [1,58], lang, g.aac, color.thor, "Images/Thor4.jpg");
order[37] = new Movie("I Am Groot S01 (E_5)", 2022, [0,20], lang, g.as, color.groot, "Images/IAmGroot1.webp");
order[38] = new Movie("She-Hulk: Attorney at Law S01 (E_9)", 2022, [4,45], lang, g.aac, color.sheHulk, "Images/SheHulk1.jpg");
order[39] = new Movie("Werewolf by Night", 2022, [0,52], lang, g.a+sp+g.h+sp+g.d, color.warewolf, "Images/WerewolfByNight1.jpg");
order[40] = new Movie("Black Panther: Wakanda Forever", 2022, [2,41], lang, g.as+sp+g.d, color.blackPanther, "Images/BlackPanther2.jpg");

order[41] = new Movie("The Guardians of the Galaxy Holiday Special", 2022, [0,42], lang, g.aac, color.gotg, "Images/GuardiansOfTheGalaxyHS.webp");
order[42] = new Movie("Ant-Man and the Wasp: Quantumania", 2023, [2,4], lang, g.aas, color.antman, "Images/AntMan3.jpg");
order[43] = new Movie("Guardians of the Galaxy Vol. 3", 2023, [2,30], lang, g.aac, color.gotg, "Images/GuardiansOfTheGalaxy3.jpg");
order[44] = new Movie("Secret Invasion S01 (E_6)", 2023, [4,18], lang, g.aa+sp+g.d, color.invasion, "Images/SecretInvasion1.jpg");
order[45] = new Movie("I Am Groot S02 (E_5)", 2023, [0,20], lang, g.as, color.groot, "Images/IAmGroot2.webp");
order[46] = new Movie("Loki S02 (E_6)", 2023, [4,57], lang, g.aaf, color.loki, "Images/Loki2.webp");
order[47] = new Movie("The Marvels", 2023, [1,45], lang, g.aaf, color.capM, "Images/TheMarvels2.jpg");
order[48] = new Movie("What If...? S02 (E_9)", 2023, [4,30], lang, g.aas, color.whatIf, "Images/WhatIf2.jpg");
order[49] = new Movie("Echo S01 (E_5)", 2024, [3,23], lang, g.aa+sp+g.cr, color.echo, "Images/Echo1.jpg");
// order[5] = new Movie("", 202, [,], lang, g., color., "Images/.jpg");


export const movies = [];
movies[0] = new MovieName("Iron Man", "2008 - 2013", [1,3,7], "Images/IronMan.jpg");
movies[1] = new MovieName("Hulk", 2008, [2], "Images/Hulk.jfif", "#02a399");
movies[2] = new MovieName("Thor", "2011 - 2022", [4,8,17,36], "Images/Thor.jpg");
movies[3] = new MovieName("Captain America", "2011 - 2016", [5,9,13], "Images/CaptainAmerica.jpg");
movies[4] = new MovieName("Guardians of the Galaxy", "2014 - 2023", [10,15,41,43], "Images/GuardiansOfTheGalaxy.jpg");
movies[5] = new MovieName("Ant-Man", "2015 - 2023", [12,20,42], "Images/AntMan.jpg");
movies[6] = new MovieName("Doctor Strange", "2016 - 2022", [14,34], "Images/DrStrange.jpg");
movies[7] = new MovieName("Spider-Man", "2017 - 2021", [16,23,32], "Images/SpiderManMCU.webp");
movies[8] = new MovieName("Black Panther", "2018 - 2022", [18,40], "Images/BlackPanther.webp");
movies[9] = new MovieName("Captain Marvel", "2019 - 2023", [21,47], "Images/CaptainMarvel.jpg");
movies[10] = new MovieName("Avengers", "2012 - 2019", [6,11,19,22], "Images/Avengers.jpg");

movies[11] = new MovieName("Black Widow", 2021, [27], "Images/BlackWidow.jpg");
movies[12] = new MovieName("WandaVision", 2021, [24], "Images/WandaVision.jpg");
movies[13] = new MovieName("The Falcon and the Winter Soldier", 2021, [25], "Images/TheFalconAndTheWinterSoldier.webp");
movies[14] = new MovieName("Loki", "2021 - 2023", [26,46], "Images/Loki.jpg");
movies[15] = new MovieName("What If...?", "2021 - 2023", [28,48], "Images/WhatIf.jpg");
movies[16] = new MovieName("Shang-Chi", 2021, [29], "Images/ShangChi.jpg");
movies[17] = new MovieName("Eternals", 2021, [30], "Images/Eternals.webp");
movies[18] = new MovieName("Hawkeye", 2021, [31], "Images/Hawkeye.jpeg");
movies[19] = new MovieName("Moon Knight", 2022, [33], "Images/MoonKnight.jpg");
movies[20] = new MovieName("Ms. Marvel", 2022, [35], "Images/MsMarvel.webp");

movies[21] = new MovieName("I Am Groot", "2022 - 2023", [37,45], "Images/IAmGroot.webp");
movies[22] = new MovieName("She-Hulk", 2022, [38], "Images/SheHulk.jpg");
movies[23] = new MovieName("Werewolf by Night", 2022, [39], "Images/WerewolfByNight.jpg");
movies[24] = new MovieName("Secret Invasion", 2023, [44], "Images/SecretInvasion.jpg");
movies[25] = new MovieName("Echo", 2024, [49], "Images/Echo.webp");
// movies[2] = new MovieName("", , [], "Images/.jpg");