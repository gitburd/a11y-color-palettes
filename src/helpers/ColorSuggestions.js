const convert = require('color-convert');
const wcagContrast = require("wcag-contrast");

export const getColorSuggetions = (color) => {
    let H;
    let S;
    let L; 
    let hex = color.hex;

    if(!color.hsl) {
        let converedColor = convert.hex.hsl(hex);
        H = converedColor[0];
        S = converedColor[1];
        L = converedColor[2];
    } else {
        H = color.hsl.h;
        S = color.hsl.s;
        L = color.hsl.l * 100;
    }
        
    let complements = [];

    let H1 = H + 20;
    if(H1 > 360) { H1 -= 360}

    let H2 = H + 42;
    if(H2 > 360) { H2 -= 360}
    
    let H3 = H + 70;
    if(H3 > 360) { H3 -= 360}

    let H4 = H + 105;
    if(H4 > 360) { H4 -= 360}

    let H5 = H + 150;
    if(H5 > 360) { H5 -= 360}
    
    let H6 = H + 190;
    if(H6 > 360) { H6 -= 360}

    let H7 = H + 230;
    if(H7 > 360) { H7 -= 360}
  
    let H8 = H + 273;
    if(H8 > 360) { H8 -= 360}

    let L1;
    let L2;
    let S2;
    let S3;
    // findMidRangeComplements(hex, H, L);

    // findMidRangeComplements(hex, L)
    const Ls = findMidRangeComplements(hex, L);
    L1 = Ls[0];
    L2 = Ls[1];

    if(L1 === 100){
        complements.push([H, S*100,  L-(L/3)]);
        complements.push([H, S*100,  L-(L/2.5)]);
        complements =  complements.map((HSL) => `#${convert.hsl.hex(HSL)}`);
        complements.unshift("#ffffff");

        return complements;
    }else if (L1 === 0){
        console.log('hsl', H,S, L)
        complements.push([H, S*100,  L-(L/1.75)]);
        complements.push([H, S*100,  L-(L/3)]);
        complements =  complements.map((HSL) => `#${convert.hsl.hex(HSL)}`);
        complements.unshift("#000000");

        return complements;
    } else {
        S2 = Ls[2];
        S3= Ls[3];

        if(S < 15) {S += 33}
        if(S > 85) {S -= 33}
        complements.push( [H, S2, L1]);
        // complements.push([H,S2, L1]);
        complements.push([H1,S3, L2]);
        complements.push( [H2, S3, L1]);
        // complements.push([H3,S2, L1]);
        complements.push( [H4, S3, L2]);
        complements.push( [H4, S3, L1]);
        complements.push([H5,S2, L1]);
        complements.push( [H6, S3, L2]);
        complements.push([H7,S2, L1]);
        complements.push( [H8, S2, L1]);
        complements.push( [H8, S3, L2]);

        return complements.map((HSL) => `#${convert.hsl.hex(HSL)}`);
    }
}

const findMidRangeComplements = (hex, L) => {
    const whiteHexContrast = wcagContrast.hex('#fff', hex);
    const blackHexContrast = wcagContrast.hex('#000', hex);
    let lightPair = []

    if(!lightPair || lightPair.length === 0){
        let L1;
        let L2;
        if (whiteHexContrast > 5.5 && blackHexContrast > 5.5) {
            if(whiteHexContrast >= blackHexContrast ){
                // console.log('case 1')
                lightPair = [80, 88, 90, 70]
            }
            else {
                // console.log('case 2')
                lightPair = [14, 8, 20, 30]
            }
        } else if (whiteHexContrast > blackHexContrast){
            if (whiteHexContrast > 20){
                // this is black
                // console.log('case 3')
                lightPair.push(85, 76, 70, 90)
            }
            if (whiteHexContrast > 15){
                // console.log('case 4')
                lightPair.push(78, 88, 70, 80)
            }

            else if (whiteHexContrast > 10){
                console.log('case 5')
                lightPair.push(90, 83, 80, 85)
            }
                        
            else if (whiteHexContrast > 7){
                // console.log('case 6')
                // check
                // #085A68
                lightPair.push(94, 91, 80, 85)
            }
            
            else if (whiteHexContrast > 5.5){
                // console.log('case 7')
                // #0d7081
                lightPair.push(96, 93, 88, 79)
            }

            else {
                // these will be a bad match, even for white
                // console.log('case 8')
                lightPair.push(100,100,100,100)
            }

        } else {
            // we are try to find a dark color
            if(blackHexContrast > 20){
                // this is white
                // console.log('case 9')
                lightPair.push(28,28,40,30) 
            } else if (blackHexContrast >18){
                // console.log('case 10')
                lightPair.push(26,26,40,30) 
            } else if (blackHexContrast > 15){
                // console.log('case 11')
                lightPair.push(17,21,44,30) 
            }
            else if (blackHexContrast > 10){
                // console.log('case 12')
                lightPair.push(18,20, 35, 28);
            }else if (blackHexContrast > 7.5){
                // console.log('case 13')
                // #5ead83
                lightPair.push(12, 18, 28, 30)
            }else {
                // console.log('case 15')
                lightPair.push(0, 0, 0, 0)
            }   
        }
    } 
    
    // console.log(lightPair, 'pair')
    return lightPair;
};
