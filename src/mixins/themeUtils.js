function toRgb(color){
    // Remove the hash if it exists
    color = color.replace(/^#/, '');

    // Parse the hex components
    const bigint = parseInt(color, 16);

    // Extract RGB components
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

   return {r, g, b}
}

export function toGradient(color, degree){
    const result  = toRgb(color)

    return `linear-gradient(${degree}deg, ${color} 26.44%, rgba(${result.r}, ${result.g}, ${result.b}, 0.1) 26.97%, rgba(${result.r}, ${result.g}, ${result.b}, 0.1) 26.28%, rgba(${result.r}, ${result.g}, ${result.b}, 0.1) 26.44%)`
}


export function lightenColor(color, factor = 0.7) {
    // Remove the hash if it exists
    color = color.replace(/^#/, '');

    // Parse the hex components
    const bigint = parseInt(color, 16);

    // Extract RGB components
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    // Calculate the adjustment
    const adjust = (component) => Math.round(component + (255 - component) * factor);

    // Adjust RGB components
    r = adjust(r);
    g = adjust(g);
    b = adjust(b);

    // Convert back to hex and return
    return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
}
