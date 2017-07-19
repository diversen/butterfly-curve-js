var butterflyCurve = require ('./index.js');

// Use: require('butterfly-curve') if you have used npm install --save sinewave

var s = new butterflyCurve();

        for(t = -1 * Math.PI; t < 1 * Math.PI; t=t+0.001) {
            var cords = s.getXY(t);
            console.log(cords)
            // drawCartesianPoint(ctx, cords.x*50, cords.y*50);
        }
