export const getColorSuggetions = (HSL) => {
    const H = HSL[0];
    const S = HSL[1];
    const L = HSL[2];
 
    let complements = []

    let H1 = H + 120
    if(H1 > 360){ H1 -= 360}
    
    let H2 = H - 120
    if(H2 < 0){ H2 += 360}
    
    let H3 = H - 90
    if(H3 < 0){ H3 += 360}

    let H4 = H + 90
    if(H4 > 360){ H4 -= 360}

    let S1
    let S2

    let L1
    let L2

    if(L < 10){
        L1 = L + 60;
        L2 = L + 80;
    } else if(L < 20 ){
        L1 = L + 60;
        L2 = L + 70; 
    } else if (L < 30 ){
        L1 = L + 58;
        L2 = L + 66;
    } else if (L >= 30 && L < 50){
        L1 = 88;
        L2 = 94;
    } else if (L >= 50 && L < 70){
        L1 = 20;
        L2 = 10;
    } else if (L < 80){
        L1 = L - 50;
        L2 = L - 60;
    } else if (L < 90){
        L1 = L - 60;
        L2 = L - 68;
    } else {
        L1 = L - 67;
        L2 = L - 67;
    }

complements.push([H, S, L1], [H, S, L2])
complements.push([H4, S, L1], [H4, S, L2])
complements.push([H1, S, L1], [H1, S, L2])
complements.push([H2, S, L1], [H2, S, L2])
complements.push([H3, S, L1], [H3, S, L2])


complements = complements.map((HSL) => stringifyHSL(HSL))
return complements
}

const stringifyHSL = (HSL) => {
    return `HSL(${HSL[0]}, ${HSL[1]}%, ${HSL[2]}%)`
}


