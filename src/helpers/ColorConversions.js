export const getRGB = (color)=> {
    console.log('should not call', color)
//     let r 
//     let g 
//     let b

//     if(color.length === 7){
//         r = parseInt(color[2].toString(), 16) + (parseInt(color[1].toString(), 16) * 16);
//         g = parseInt(color[4].toString(), 16) + (parseInt(color[3].toString(), 16) * 16);
//         b = parseInt(color[6].toString(), 16) + (parseInt(color[5].toString(), 16) * 16);
//     }
    
//     if(color.length === 4){
//         r = (parseInt(color[1].toString(), 16) * 16) + parseInt(color[1].toString(), 16)
//         g = (parseInt(color[2].toString(), 16) * 16) + parseInt(color[2].toString(), 16)
//         b = (parseInt(color[3].toString(), 16) * 16) + parseInt(color[3].toString(), 16)
//     }

//     return ([r,g,b])
// }

// export const getLuminacity = (rgb) => {
//     return (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)
// }

// export const getHSL = (rgb) => {
//     let r = rgb[0] / 255 
//     let g = rgb[1] / 255
//     let b = rgb[2] / 255 

//     let min = Math.min(r,g,b)
//     let max = Math.max(r,g,b)

//     let lum = Math.round(((min + max)/2) * 100);
//     let l = lum
//     // +"%";
    
//     let s; 
//     if(min ===  max){
//         s = 0;
//     } else {
//         s = lum < 50 ? (max-min)/(max+min) : ( max-min)/(2.0-max-min);
//     }
//     s = Math.round( s * 100 ) 
//     // +"%÷"

//     let h
//     if(min ===  max){
//         h = 0; 
//     }else if (max === r){
//         h = (g-b)/(max-min)
//     }else if(max === g){
//         h = 2.0 + (b-r)/(max-min)
//     }else {
//         h = 4.0 + (r-g)/(max-min)
//     }
//     h = Math.round(h*60)
//     if(h < 0 ){
//         h += 360
//     }

//     return([h, s, l])
}