export default function calcRequiredFuel(
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
