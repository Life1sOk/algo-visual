export const createdTime = () => {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${day}.${month}.${year}`;

    return currentDate;
};

export const reFormatTime = (time) => {
    let check = [...time];

    let day = '';
    let month = '';
    let year = '';

    for (let i = 0; i < check.length; i++) {
        if (i < 4) {
            year += check[i];
        } else if (i === 5 || i === 6) {
            month += check[i];
        } else if (i === 8 || i === 9) {
            day += check[i];
        }
    }

    const one = `${day}.${month}.${year}`;

    return one;
}