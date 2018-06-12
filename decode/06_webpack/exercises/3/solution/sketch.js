import p5 from 'p5';
import setup from './setup.js';
import renderWave from './renderwave.js';


let xspacing = 16;    // Distance between each horizontal location
let w = 726;                // Width of entire wave
let theta = 0.0;      // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 500.0;   // How many pixels before the wave repeats
let dx = (6.28 / period) * xspacing;;               // Value for incrementing x
let yvalues = new Array(Math.floor(w / xspacing));  // Using an array to store height values for the wave

function calcWave() {
    theta += 0.02;
    let x = theta;
    for (let i = 0; i < yvalues.length; i++) {
        yvalues[i] = Math.sin(x) * amplitude;
        x += dx;
    }
}

const sketch = (p5) => { 
    setup(p5);
    p5.draw = () => {
        p5.background(0);
        calcWave();
        renderWave(p5, yvalues, xspacing);
    }
}

export default sketch;