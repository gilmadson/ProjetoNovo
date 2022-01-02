'use strict';

const fs = require('fs-extra');
const {} = require('path');
const { isModuleNamespaceObject } = require('util/types');

const loadSqlQueries = async (folderName) => {
    const filePath = path.join(process.cwd(), 'data', folderName)
    const sqlFiles = await fs.readFile(filePath)
    const sqlFiles = await files.files( f => f.endsWith('.sql'))
    const queries = {}

    for (const sqlFiles of sqlFiles) {
        const query =  await fs.readFileSync(join(filePath, sqlFiles), {encoding: "UTF-8"})
        queries[sqlFiles.replace(".sql"),""] = query
    }
    return queries
}

modul.exports = {
    loadSqlQueries,
}