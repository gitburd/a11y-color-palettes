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
        
    const complements = [];

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

    // let H9 = H + 280;
    // if(H8 > 360) { H8 -= 360}

    
    // let H1 = H + 40;
    // if(H1 > 360) { H1 -= 360}
    
    // let H2 = H + 180;
    // if(H2 < 0) { H2 += 360}
    
    // let H3 = H + 280;
    // if(H3 < 0) { H3 += 360}

    // let H4 = H + 210;
    // if(H4 > 360) { H4 -= 360}

    let L1;
    let L2;

    // findMidRangeComplements(hex, H, L);

    // findMidRangeComplements(hex, L)
    const Ls = findMidRangeComplements(hex, L);
    L1 = Ls[0];
    L2 = Ls[1];
    // if(L >= 30 && L < 52) {
        // const Ls = findMidRangeComplements(hex);
        // L1 = Ls[0];
        // L2 = Ls[1];
    // }
    // else if(L < 10) {
    //     L1 = L + 70;
    //     L2 = L + 80;
    // } else if(L < 20 ) {
    //     L1 = L + 60;
    //     L2 = L + 70;
    // } else if (L < 30 ) {
    //     L1 = L + 58;
    //     L2 = L + 66;
    // }else if (L < 60) {
    //     L1 = L - 33;
    //     L2 = L - 42;
    // } else if (L < 70) {
    //     L1 = L - 55;
    //     L2 = L - 59;
    // } else if (L < 74) {
    //     L1 = L - 55;
    //     L2 = L - 63;
    // }else if (L < 80) {
    //     L1 = L - 56;
    //     L2 = L - 66;
    // } else if (L < 90) {
    //     L1 = L - 53;    //     L2 = L - 65;
    // } else {
    //     L1 = L - 65;
    //     L2 = L - 80;
    // }

    if(S < 15) {S += 70}
    if(S > 85) {S -= 40}
    complements.push( [H, S, L2]);
    complements.push([H1,70, L2]);
    complements.push( [H2, S, L2]);
    complements.push([H3,70, L2]);
    complements.push( [H4, S, L2]);
    complements.push([H5,70, L2]);
    complements.push( [H6, S, L2]);
    complements.push([H7,70, L2]);
    complements.push( [H8, S, L2]);
    complements.push([H,70, L2]);
    // complements.push( [H5, 95, L2]);
    // complements.push([H5,50, L2]);

    return complements.map((HSL) => `#${convert.hsl.hex(HSL)}`);
}

const findMidRangeComplements = (hex, L) => {
    const whiteHexContrast = wcagContrast.hex('#fff', hex);
    const blackHexContrast = wcagContrast.hex('#000', hex);
    
    console.log(whiteHexContrast, blackHexContrast, 'contr')
    let lightPair = []

    if(!lightPair || lightPair.length === 0){
        let L1;
        let L2;
        if (whiteHexContrast > 5.5 && blackHexContrast > 5.5) {
            if(whiteHexContrast > blackHexContrast ){
                lightPair = [88, 88]
            }
            else {
                lightPair = [8, 8]
            }
        } else if (whiteHexContrast > blackHexContrast){
            if (whiteHexContrast > 15){
                lightPair.push(88, 88)
            }

            else if (whiteHexContrast > 10){
                lightPair.push(78, 78)
            }
            
            else if (whiteHexContrast > 7){
                lightPair.push(86, 86)
            }

            else if (whiteHexContrast > 6){
                lightPair.push(92, 92)
            }

            else {
                lightPair.push(93, 93)
            }

            // L2 = Math.floor(100 - L/ 3.75);
            // L1 = Math.floor(L2 + 15);
            // if(L1 >= 99){ L1 = 94}
            // if(L2 >= 99){ L2 = 90}
            // lightPair.push(L1, L2)
        } else {
            // we are try to find a dark color
            if(blackHexContrast > 20){
                lightPair.push(24,24) 
            } else if (blackHexContrast >18){
                lightPair.push(26,26) 
            } else if (blackHexContrast > 15){
                lightPair.push(22,22) 
            }
            else if (blackHexContrast > 10){
                lightPair.push(14,14);
            }else if (blackHexContrast > 7.5){
                lightPair.push(12, 12)
            }else if (blackHexContrast > 5.5){
                lightPair.push(11, 11)
            }else {
                lightPair.push(8, 8)
            }   
        }

       
    } 
    
    console.log(lightPair, 'pair')
    return lightPair;
};
