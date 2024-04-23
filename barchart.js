/************
 DATASET TITLE: Worldwide Box Office
 DATA SOURCE: The Numbers
 Link to data: https://www.the-numbers.com/box-office-records/worldwide/all-movies/cumulative/all-time 
 HEADERS: Rank, Year, Movie, Worldwide
 TYPE OF VISUALISATION: Table Chart Visualisation
 ************/

 let dataset;

let barWidth = 150; // Bar Width
let margin = 85; // Margin size
let scaling = 25; // Bar chart scaling

let infoParagraph;
let infoHeader;

function preload() {
    dataset = loadTable("boxoffice.csv", "header"); // Load the CSV file with header
}

function setup() {
    createCanvas(1250, 150); // Adjusted canvas height to accommodate more bars
    background(255); // Set background color

    infoHeader = createP("Click on a bar to display further information."); // Create header paragraph
    infoHeader.class("info-header");

    infoParagraph = createP(); // Create paragraph for additional information
    infoParagraph.class("info-paragraph");
}

function draw() {
    background(255); // Refresh background to clear previous bars

    let y = 100; // Starting y-position for bars
    textAlign(LEFT, CENTER); // Set text alignment

    // Loop through each row in the dataset
    for (let i = 0; i < dataset.getRowCount(); i++) {
        let rank = dataset.getNum(i, "Rank"); // Get rank from dataset
        let year = dataset.getNum(i, "Year"); // Get year from dataset
        let movie = dataset.getString(i, "Movie"); // Get movie title from dataset
        let worldwideBoxOffice = dataset.getString(i, "Worldwide Box Office"); // Get worldwide box office earnings from dataset
        let description = dataset.getString(i, "Description"); // Get description from dataset

        let barHeight = worldwideBoxOffice.replace(/\D/g, "") / 100000000; // Convert box office earnings to bar height
        let x = margin + i * (barWidth + margin); // Calculate x-position for bar

        // Draw the bar
        fill(103, 22, 22); // Set fill color
        rect(x, height - barHeight, barWidth, barHeight); // Draw rectangle representing the bar

        // Display rank, year, and movie title above the bar
        fill(0); // Set fill color to black
        text(rank + ": " + year + ": " + movie, x, height - barHeight - 75); // Display rank, year, and movie title
        textAlign(CENTER, CENTER); // Set text alignment to center
        text(worldwideBoxOffice, x + barWidth / 2, height - barHeight - 35); // Display worldwide box office earnings

        // Check if the mouse is over the current bar
        if (mouseX > x && mouseX < x + barWidth && mouseY < height && mouseY > height - barHeight) {
            // If mouse is over the bar, display additional information
            infoHeader.html(description);
            infoParagraph.html(description);
        }
    }
}
