let citizenTable;
let tallGrass;
let minlat = 30.32379644486961
let maxlat = 30.559260561666104
let minlon = -91.22161341694176
let maxlon = -91.00110703360933

function preload() {
  citizenTable = loadTable('311short.csv', 'header');
}

function setup() {
  createCanvas(800, 800);
  tallGrass = citizenTable.findRows('TALL GRASS', 'TYPE');
  print(tallGrass);

  for (let i = 0; i < tallGrass.length; i++) {
    print(tallGrass[i].getNum('LATITUDE'));
    print(tallGrass[i].getNum('LONGITUDE'));
    // ellipse(x, y, 10, 10);
  }

}