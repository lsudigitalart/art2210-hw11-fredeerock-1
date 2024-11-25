let citizenTable;
let tallGrass;
let potholes;


let minlat = 30.32379644486961
let maxlat = 30.559260561666104
let minlon = -91.22161341694176
let maxlon = -91.00110703360933

function preload() {
  citizenTable = loadTable('311.csv', 'header');
  print("Done Loading Data");
}

function setup() {
  createCanvas(800, 800);
  background(125)
  noStroke();

  tallGrass = citizenTable.findRows('TALL GRASS', 'TYPE');
  potholes = citizenTable.findRows('POTHOLE', 'TYPE');

  for (let i = 0; i < tallGrass.length; i++) {
    let x = map(tallGrass[i].getNum('LONGITUDE'), minlon, maxlon, 0, width);
    let y = map(tallGrass[i].getNum('LATITUDE'), minlat, maxlat, 0, height);
    fill(0, 255, 0, 100);
    ellipse(x, y, 10, 10);
  }

  for (let i = 0; i < potholes.length; i++) {
    let x = map(potholes[i].getNum('LONGITUDE'), minlon, maxlon, 0, width);
    let y = map(potholes[i].getNum('LATITUDE'), minlat, maxlat, 0, height);
    fill(255, 0, 0, 100);
    ellipse(x, y, 10, 10);
  }

}