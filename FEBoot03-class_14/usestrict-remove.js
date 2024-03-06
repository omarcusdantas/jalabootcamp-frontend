const fs = require('fs');
const path = require('path');

const directoryPath = './dist';

fs.readdir(directoryPath, handleDirectoryRead);

function handleDirectoryRead(err, files) {
    if (err) {
        console.error(`Error reading directory ${directoryPath}:`, err);
        return;
    }

    files.forEach(file => {
        const filePath = path.join(directoryPath, file);

        if (path.extname(filePath) === '.js') {
            fs.readFile(filePath, 'utf8', handleFileRead.bind(null, filePath));
        }
    });
}

function handleFileRead(filePath, err, data) {
    if (err) {
        console.error(`Error reading file ${filePath}:`, err);
        return;
    }

    const modifiedData = data.replace(/"use strict";/g, '');

    fs.writeFile(filePath, modifiedData, 'utf8', handleFileWrite.bind(null, filePath));
}

function handleFileWrite(filePath, err) {
    if (err) {
        console.error(`Error writing file ${filePath}:`, err);
    } else {
        console.log(`Removal complete for file: ${filePath}`);
    }
}