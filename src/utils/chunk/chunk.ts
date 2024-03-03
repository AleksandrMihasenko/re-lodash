export function chunk<T>(arg: Array<T>, size = 1): Array<T> {
    if (size === 1) return arg;

    const arrayLength = arg.length;

    if (!arrayLength) return [];

    let index = 0;
    let result: Array<T> = [];

    while (index < arrayLength) {
        index++;
    }

    return result;
}

chunk(['a', 'b', 'c', 'd'], 2);
