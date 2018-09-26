function itemCount(items) {
    if (items.length === 0) {
        return 0;
    } else {
        return 1 + itemCount(items.slice(1))
    }
}

console.log(itemCount([1, 2, 3, 4, 5, 9, 11, 34, 87,9]));
