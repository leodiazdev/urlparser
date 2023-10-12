const urlParse = (format, url) => {
    const formatsKeys = format.split('/');
    const urlParts = url.split('/');
    const query = url.split('?')[1];

    const output = {};

    formatsKeys.forEach((element, idx) => {
        const key = element;
        const value = urlParts[idx];

        if(isParameter(key)) {
            const keyString = key.slice(1);
            output[keyString] = value.split('?')[0];
        }

        if(query) {
            const quyeryParts = query.split('&');
            quyeryParts.forEach(e => {
                const mapParams = e.split('=');
                const key = mapParams[0];
                const value = mapParams[1];
                output[key] = value;
            })
        }

    });
    return output;
}

const isParameter = (string) => {
    return string.startsWith(':');
}

const urlFormat = '/:version/api/:collection/:id';
const urlInstance = '/6/api/listings/3?sort=desc&limit=10';

const parsedData = urlParse(urlFormat, urlInstance);

module.exports = {
    urlParse
}
