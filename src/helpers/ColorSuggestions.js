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

    let H1 = H + 120;
    if(H1 > 360) { H1 -= 360}
    
    let H2 = H + 260;
    if(H2 < 0) { H2 += 360}
    
    let H3 = H + 320;
    if(H3 < 0) { H3 += 360}

    let H4 = H + 90;
    if(H4 > 360) { H4 -= 360}

    let L1;
    let L2;

    if(L >= 30 && L < 50) {
        const Ls = findMidRangeComplements(hex);
        L1 = Ls[0];
        L2 = Ls[1];
    }
    else if(L < 10) {
        L1 = L + 70;
        L2 = L + 80;
    } else if(L < 20 ) {
        L1 = L + 60;
        L2 = L + 70;
    } else if (L < 30 ) {
        L1 = L + 58;
        L2 = L + 66;
    }else if (L < 60) {
        L1 = L - 33;
        L2 = L - 42;
    } else if (L < 70) {
        L1 = L - 40;
        L2 = L - 50;
    } else if (L < 80) {
        L1 = L - 45;
        L2 = L - 60;
    } else if (L < 90) {
        L1 = L - 60;
        L2 = L - 75;
    } else {
        L1 = L - 65;
        L2 = L - 80;
    }

    if(S < 15) {S += 50}
    if(S > 85) {S -= 75}
    complements.push([H, S, L1], [H, S, L2]);
    complements.push([H4, S, L1], [H4, S, L2]);
    complements.push([H1, S, L1], [H1, S, L2]);
    complements.push([H2, S, L1], [H2, S, L2]);
    complements.push([H3, S, L1], [H3, S, L2]);

    return complements.map((HSL) => `#${convert.hsl.hex(HSL)}`);
}

const findMidRangeComplements = (hex) => {
    const whiteHexContrast = wcagContrast.hex('#fff', hex);
    const blackHexContrast = wcagContrast.hex('#000', hex);
    return whiteHexContrast > blackHexContrast ? [80, 90] : [10, 25];
};
