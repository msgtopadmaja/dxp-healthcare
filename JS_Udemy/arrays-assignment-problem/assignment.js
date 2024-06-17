const number = [1, -22, 3, 4, 5, 6, 7];
const filterArray = number.filter(num => {
    return num > 5;
});

console.log(filterArray);

const mappedArray = number.map(num => ({ val: num }));
console.log(mappedArray);

const mul = number.reduce((prev, current) => prev * current, 1);
console.log(mul);

function findMax(...nums) {
    let curMax = nums[0];
    for (const num of nums) {
        if (num > curMax) {
            curMax = num;
        }
    }
    return curMax;
}

console.log(findMax(...number));

function findMinMax(...nums) {
    let curMax = nums[0];
    let curMin = nums[0];
    for (const num of nums) {
        if (num > curMax) {
            curMax = num;
        }
        if (num < curMin) {
            curMin = num;
        }
    }
    return [curMin, curMax];
}

const [min, max] = findMinMax(...number);
console.log(min, 'Min and Max', max);

const userId = new Set();
userId.add(10);
userId.add(9);
userId.add(10);
console.log(userId);