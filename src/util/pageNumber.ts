const getPageNumber = (page: string | number | undefined) : number => {
    let number = 1;
    if (page && typeof page === 'string') {
        number = parseInt(page, 10);
    }

    return number;
};

export default getPageNumber;
