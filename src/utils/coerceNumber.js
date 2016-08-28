// Attempt to convert a string value to a Number.
// Otherwise, return 0.
export default (val) => {
    if (typeof val === 'number') {
        return val;
    }
    return val === undefined || val === null || isNaN(Number(val)) ? 0 : Number(val);
}
