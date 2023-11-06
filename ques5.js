const obj1 = {
    name: "Uttkarsh",
    id: 129,
};

const obj2 = {
    state: "Haryaba",
    code: 121009,
};

function merge(obj1, obj2) {
    const merged = {
        ...obj1,
        ...obj2,
    };
    return merged;
}

const mergedObj = merge(obj1, obj2);

console.log(mergedObj);
