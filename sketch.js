let citizenRequestTable, potholes = [];
const lsuCoords = { latitude: 30.4133, longitude: -91.1800 };
const cityBounds = { minLat: 30.3290, maxLat: 30.5838, minLon: -91.2805, maxLon: -91.0025 };
const aspectRatio = (cityBounds.maxLon - cityBounds.minLon) / (cityBounds.maxLat - cityBounds.minLat);

function preload() {
  citizenRequestTable = loadTable("https://data.brla.gov/resource/7ixm-mnvx.csv", "header");
}

function setup() {
  createCanvas(800, 800 / aspectRatio);
  potholes = citizenRequestTable.findRows("POTHOLE", "typename");
}

function draw() {
  background(0);
  noStroke();

  fill(255, 255, 255, 100);
  
  for (let i = 0; i < potholes.length; i++) {
    let x = map(potholes[i].obj.longitude, cityBounds.minLon, cityBounds.maxLon, 0, width);
    let y = map(potholes[i].obj.latitude, cityBounds.minLat, cityBounds.maxLat, height, 0);
    circle(x, y, 25);
  }

  let lsuX = map(lsuCoords.longitude, cityBounds.minLon, cityBounds.maxLon, 0, width);
  let lsuY = map(lsuCoords.latitude, cityBounds.minLat, cityBounds.maxLat, height, 0);
  fill(128, 0, 128);
  circle(lsuX, lsuY, 25);
}
