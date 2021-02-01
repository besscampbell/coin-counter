export default function Counter(monies){
    return monies / .25;
}


((Math.floor(Counter(m))*.25)-m).toFixed(2);

