const parseXml = async (str) => {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(str);
        }, 0);
    });
};

parseXml('ok').then((r) => console.log(r));
