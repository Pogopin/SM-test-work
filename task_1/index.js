import {encoded, translations} from './data.js'

console.log("Let's rock")
// console.log(encoded, translations)


function decodeData(data, translations) {
    const decodedData = [];

    data.forEach((item) => {
        const decodedItem = {};

        Object.keys(item).forEach((key) => {
            if(key.endsWith('Id') && !['groupId', 'service', 'formatSize', 'ca'].includes(key)) {
                const value = item[key];

                const decodedValue = translations[value] || value;
                decodedItem[key] = decodedValue;
            } else {                
                decodedItem[key] = item[key];
            }
        })
        decodedData.push(decodedItem);
       
    })
    return decodedData;
}

const decoded = decodeData(encoded, translations);
console.log(decoded)
