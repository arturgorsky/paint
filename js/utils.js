export function calculateRadius(pointCenter, point2) {
    let xDiff = Math.abs(pointCenter.x - point2.x);
    let yDiff = Math.abs(pointCenter.y - point2.y);
    let xSquareYSquare = Math.pow(xDiff, 2) + Math.pow(yDiff, 2);
    return Math.sqrt(xSquareYSquare);
}