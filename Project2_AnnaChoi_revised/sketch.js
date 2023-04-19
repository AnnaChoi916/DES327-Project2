let bgColor, capColor, eyeColor, clothesColor, skinColor, pantsColor, shoesColor;
let skinColors = [
  "#ffdbac",
  "#f1c27d",
  "#e0ac69",
  "#c68642",
  "#8d5524",
  "#1f1101"
];

let hatStyle = 0;

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('sketch-holder')
    //createCanvas(400, 400);
    bgColor = color("#ace7ff");
    capColor = color(0);
    eyeColor = color(0);
    topclothesColor = color(0);
    pantsColor = color(255);
    skinColor = color(255);
    shoesColor = color(0);

    document.getElementById('change-bg-color').addEventListener('click', changeBgColor);
    select('#change-cap-color').mousePressed(() => capColor = randomColor());
    select('#change-eye-color').mousePressed(() => eyeColor = randomColor());
    select('#change-skin-color').mousePressed(() => skinColor = randomSkinColor());
    select('#change-topclothes-color').mousePressed(() => topclothesColor = randomColor());
    select('#change-pants-color').mousePressed(() => pantsColor = randomColor());
    select('#change-shoes-color').mousePressed(() => shoesColor = randomColor());
    select('#change-hat-style').mousePressed(() => hatStyle = (hatStyle + 1) % 3);
}

function draw() {
    background(bgColor);

    noStroke();

    // Draw face
    fill(skinColor);
    ellipse(width / 2, height / 3, 100, 100);

    // Draw eyes
    fill(eyeColor);
    ellipse(width / 2 - 25, height / 3 - -5, 20, 20);
    ellipse(width / 2 + 25, height / 3 - -5, 20, 20);

    // Draw pants
   fill(pantsColor);
   rect(width / 2 - 50, height / 3 + 110, 100, 100);
   stroke("#A9A9A9");
   line(width / 2, height / 3 + 150, width / 2, height / 2 + 141);

   noStroke();
    // Draw topclothes
    fill(topclothesColor);
    rect(width / 3, height / 3 + 50, 130, 70, 10);
    rect(width / 2 - 50, height / 3 + 50, 100, 100);

    stroke("#A9A9A9");
    line(width / 2 - 50, height / 3 + 120, width / 2 - 50, height / 3 + 120 - 30);
    line(width / 2 + 50, height / 3 + 120, width / 2 + 50, height / 3 + 120 - 30);

    noStroke();
   // Draw hands
   fill(skinColor);
   ellipse(width / 2 - 60, height / 3 + 120, 30, 30);
   ellipse(width / 2 + 60, height / 3 + 120, 30, 30);
    
    //Draw cap
    fill(capColor);
    if (hatStyle === 0) {
        arc(width / 2, height / 3 - 15, 100, 100, PI, 0);
        ellipse(width / 2.3, height / 3 - 15, 150, 10);
        
    } else if (hatStyle === 1) {
        arc(width / 2, height / 3 - 15, 100, 100, PI, 0);
        rect(width / 3.2, height / 3 - 20, 150, 10);

    } else if (hatStyle === 2) {
        arc(width / 2, height / 3 - 15, 100, 100, PI, 0);
        circle(width / 2, height / 3 - 70, 30, 30, PI, 0);
    }

   // Draw shoes
   fill(shoesColor);
   arc(width / 2 - 25, height / 3 + 210, 50, 50, PI, 0);
   arc(width / 2 + 25, height / 3 + 210, 50, 50, PI, 0);

}

function changeBgColor() {
  bgColor = color(random(255), random(255), random(255));
}

function randomColor() {
    return color(random(255), random(255), random(255));
}

function randomSkinColor() {
    return color(random(skinColors));
}
