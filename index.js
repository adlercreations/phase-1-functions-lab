// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    return Math.abs(42 - blocks)
 }

function distanceFromHqInFeet(blocks) {
    let distanceAndFeet
    distanceAndFeet = distanceFromHqInBlocks(blocks) * 264;
    return distanceAndFeet;
 }

function distanceTravelledInFeet(start, destination) {
    let distanceTravelled
    distanceTravelled = Math.abs(start - destination) *264;
    return distanceTravelled;
 }

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
    return 25;
    } else {
    return `cannot travel that far`;
    }
 }