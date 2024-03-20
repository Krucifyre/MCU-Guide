export class Movie {
    constructor(title, year, duration, language, genres, color, imgLink) {
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.language = language;
        this.genres = genres;
        this.imgLink = imgLink;
        this.color = color;
    }
}

export class MovieName {
    constructor(title, years, parts, imgLink, color) {
        this.title = title;
        this.years = years;
        this.parts = parts;
        this.imgLink = imgLink;
        this.color = color;
    }
}

export const sp = " | ";
export const g = {         // genre
    a:"Action",ad:"Adventure",s:"Sci-fi",f:"Fantasy",t:"Thriller",c:"Comedy",w:"War",d:"Drama",cr:"Crime",h:"Horror",m:"Mystery"
};
g.aa = g.a+sp+g.ad;
g.as = g.a+sp+g.s;
g.aas = g.aa+sp+g.s;
g.aac = g.aa+sp+g.c;
g.aaf = g.aa+sp+g.f;
g.aad = g.aa+sp+g.d;
g.acd = g.a+sp+g.cr+sp+g.d;