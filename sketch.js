let model;

let strokePath = null;

let x, y;
let pen = "down";


const allModels = ['cat', 'yoga', 'pineapple', 'crab', 'flamingo', 'truck', 'face', 'spider', 'bird', 'bicyle', 'angel', 'the mona lisa', 'butterfly', 'mosquito', 'garden', 'octopus', 'windmill', 'pig', 'helicopter', 'calendar', 'sea', 'toothbrush', 'duck', 'toothpaste', 'flower', 'postcard', 'peas', 'trombone', 'barn', 'owl', 'paintbrush', 'palm tree', 'diving board', 'power outlet', 'bridge', 'floweryoga', 'couch'];

setup = () => {
    createCanvas(windowWidth, windowHeight);
    x = windowWidth / 2;
    y = windowHeight / 2;

    // Pick random sketch from array list
    let rnd = Math.floor(Math.random() * allModels.length);
    console.log('Drawing: ', allModels[rnd]);
    model = ml5.SketchRNN(allModels[rnd], modelReady);
    background(0);
}
modelReady = () => {
    console.log("model ready");
    model.reset();
    model.generate(gotSketch);
}

draw = () => {
    if (strokePath !== null) {
        let newX = x + strokePath.dx;
        let newY = y + strokePath.dy;

        if (pen == "down") {
            stroke(255);
            strokeWeight(3);
            line(x, y, newX, newY);
        }
        pen = strokePath.pen;
        strokePath = null;
        x = newX;
        y = newY;

        if (pen !== "end") {
            model.generate(gotSketch);
        } else {
            console.log("drawing complete");
        }
    }
}

gotSketch = (err, s) => {
    if (err) {
        console.error(err);
    } else {
        strokePath = s;
        //console.log(strokePath);
    }
}