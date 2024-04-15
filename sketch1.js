/************
 DATASET TITLE: Worldwide Box Office
 DATA SOURCE: The Numbers
 Link to data: https://www.the-numbers.com/box-office-records/worldwide/all-movies/cumulative/all-time 
 HEADERS: Rank, Year, Movie, Worldwide
 TYPE OF VISUALISATION: Table Chart Visualisation
 ************/

let dataset; 

let barWidth = 70; // Bar Width
let margin = 30; // Margin size
let scaling = 2; // Bar chart

let infoParagraph;
let infoHeader;

function preload() {
    dataset = loadTable("boxoffice.csv", "header"); // Header with the title
}

// Run once when our index.html file is loaded first
function setup() {
    let visualisation = createCanvas(560, 600); // Width and height in pixels
    visualisation.parent = ("canvas-tag"); // Look at index.html

    infoHeader = createP("Click chart to display further information"); // Information on the chart
    infoHeader.parent("context-tag");
    infoHeader.class("date");

    infoParagraph = createP(); // Create Paragraph
    infoParagraph.parent("context-tag"); // Look at index.html
}

// Drawing in run in a loop
function draw() {
    background (0, 38, 77); // Background color - Dark Blue
    fill (245); // Lighter shade of blue - prone to change
    textSize (18); 
    textAlign (LEFT);
    // text("Box Office results by year", 2009 to 2023" 25, 45);
    cursor(ARROW);
    noStroke();

    for (let row = 0; row < dataset.getRowCount (); row ++) { // Starting with our data from row 0
        let abbrRank = dataset.getString(row, 0); // Rank of the film
        let infoYear = dataset.getString(row, 1); // Year of release of the film
        let Movie = dataset.getNum(row, 2); // Name of the film

        let barX = row * (barWidth + 5); // Width of BarX
        let barY = height - 100; // Height of BarY
        let barHeight = Movie * scaling; 

        if (
            mouseX > barX &&
            mouseX < barX + barWidth &&
            mouseY > barY - barHeight &&
            mouseY < barY
        ) {
            fill (255, 26, 26); // Red 
            cursor ("pointer");
            if (MousePressed) {
                let infoText = dataset.getString(row, 3);
                infoHeader.html(infoYear);
                infoParagraph.html(infoText);
            }
        } else {
            fill (245); // Lighter shade of blue - prone to change
        }

        rect (barX, barY, barWidth, -barHeight); // Rectangle

        textSize (16);
        textAlign (CENTER);
        text (abbrRank, barX + barWidth / 2, barY + 25); // Mentions the rank of the film
        fill (255, 26, 26); //Red
        textSize(20);
        text(Movie, barX + barWidth / 2, barY - barHeight - 10); // Mentions the name of the film

    }
}

