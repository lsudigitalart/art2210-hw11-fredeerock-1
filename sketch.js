let trafficCamTable;
let trafficCamImage;
let allTrafficCamImages = [];
let rImg;
let carCrashesTable;

function preload() {
  trafficCamTable = loadTable('https://data.brla.gov/resource/6z6u-ts44.csv', 'header');
  carCrashesTable = loadTable('https://data.brla.gov/resource/7wah-qncc.csv', 'header');
}

function setup() {
  createCanvas(400, 400);
  trafficCamImage = loadImage(trafficCamTable.get(0, "image_view"));

  for (let i = 0; i < trafficCamTable.getRowCount(); i++) {
    let trafficCamImage = loadImage(trafficCamTable.get(i, "image_view"));
    allTrafficCamImages.push(trafficCamImage);
  }

  rImg = int(random(allTrafficCamImages.length));

  print(carCrashesTable.get(0, "first_road_surface"));

}

function draw() {
  // background(220);
  // image(allTrafficCamImages[rImg], 0, 0);
  // ellipse(200, 200, 50, 50);
}
