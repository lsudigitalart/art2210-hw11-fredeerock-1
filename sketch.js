let table;
let bananaNumber, strawberryNumber, appleNumber;

function preload() {
  table = loadTable("fruit.csv", "header");
}

function setup() {
  createCanvas(400, 400);
  print("fuit table has this many rows: " + table.getRowCount());
  appleNumber = table.get(0, "Consumed");
  bananaNumber = table.get(1, "Consumed");
  strawberryNumber = table.get(2, "Consumed");

  print(bananaNumber);
}

function draw() {
  background(220);
  fill("green");
  circle(width/5, height/2, appleNumber * 5);
  fill("yellow");
  circle(width/2, height/2, bananaNumber * 5);
  fill("red");
  circle(width/1.25, height/2, strawberryNumber * 5);
}
