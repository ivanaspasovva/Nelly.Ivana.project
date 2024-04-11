/************
 DATASET TITLE: Worldwide Box Office
 DATA SOURCE: The Numbers
 Link to data: https://www.the-numbers.com/box-office-records/worldwide/all-movies/cumulative/all-time 
 HEADERS: Rank, Year, Movie, Worldwide
 ************/

let dataset; 

let barWidth = 70; //Bar Width
let margin = 30; //Margin size
let scaling = 2; 

let infoParagraph;
let infoHeader;

function preload() {
    dataset = loadTable("boxoffice.csv", "header");
}

//Run once when our index.html file is loaded first
function setup() {
    let visualisation = createCanvas(560, 600); //Width and height in pixels
    visualisation.parent = ("canvas-tag"); //Look at index.html

    infoHeader = createP("Click chart to display further information"); //Information on the chart
    infoHeader.parent("context-tag");
    infoHeader.class("date");

    infoParagraph = createP();
    infoParagraph.parent("context-tag"); //Look at index.html
}

//Drawing in run in a loop
function draw() {
    background (0, 38, 77); //Background color - Dark Blue
    fill (245);
    textSize (18);
    textAlign (LEFT);
    //text("Box Office results by year", 2009 to 2023" 25, 45);
    cursor(ARROW);
    noStroke();

    for (let row = 0; row < dataset.getRowCount (); row ++) {
        let abbrRank = dataset.getString(row, 0);
        let infoYear = dataset.getString(row, 1);
        let Movie = dataset.getNum(row, 2);

        let barX = row * (barWidth + 5);
        let barY = height - 100;
        let barHeight = Movie * scaling; 

        if (
            mouseX > barX &&
            mouseX < barX + barWidth &&
            mouseY > barY - barHeight &&
            mouseY < barY
        ) {
            fill (255, 26, 26);
            cursor ("pointer");
            if (MousePressed) {
                let infoText = dataset.getString(row, 3);
                infoHeader.html(infoYear);
                infoParagraph.html(infoText);
            }
        } else {
            fill (245);
        }

        rect (barX, barY, barWidth, -barHeight);

        textSize (16);
        textAlign (CENTER);
        text (abbrRank, barX + barWidth / 2, barY + 25);
        fill (255, 26, 26);
        textSize(20);
        text(Movie, barX + barWidth / 2, barY - barHeight - 10);

    }
}

