export function calcFuelMetric(
    capcity: number,
    stintLength: number,
    fullBurnLaps: number,
    fullBurnCons: number,
    buffer: number,
): number {
    const saveLaps = stintLength - fullBurnLaps;
    const burndown = fullBurnLaps * fullBurnCons;
    const targetConsumption = (capcity - buffer - burndown) / saveLaps;

    return targetConsumption;
}

// Convert miles/gallon to gallons/lap
//   miles/lap / miles/gal = miles/lap * gal/mile = gal/lap
// Calculate gallons/lap save consumption
// Convert gallons/lap to miles/gallon
//   miles

export function calcFuelImperial(
    capacity: number,
    stintLength: number, // miles / lap
    trackLength: number,
    fullBurnLaps: number,
    fullBurnMileage: number, // miles / gallon
    buffer: number,
): number {
    const fullBurnCons = trackLength / fullBurnMileage; // gallon / lap

    const saveCons = calcFuelMetric(
        capacity,
        stintLength,
        fullBurnLaps,
        fullBurnCons,
        buffer,
    ); // gallon / lap

    const saveMileage = trackLength / saveCons; // miles / gallon

    return saveMileage;
}
