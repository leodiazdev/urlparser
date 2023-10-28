const urlParse = (format, url) => {
    const formatsKeys = format.split('/');
    const urlParts = url.split('/');
    const query = url.split('?')[1];

    const output = {};

    for(let idx=0; idx<formatsKeys.length; idx++) {
        const key = formatsKeys[idx];
        const value = urlParts[idx];

        if(isParameter(key)) {
            const keyString = key.slice(1);
            output[keyString] = value.split('?')[0];
        }
    }

    if (query) {
        const quyeryParts = query.split('&');
        for(let i=0; i<quyeryParts.length; i++) {
            const mapParams = quyeryParts[i].split('=');
            const key = mapParams[0];
            const value = mapParams[1];
            output[key] = value;
        }
    }

    return output;
}

const isParameter = (string) => {
    return string.startsWith(':');
}

module.exports = {
    urlParse
}
