'use strict'
const utils = require ('./utils.js')
const config = require('./utils');
const { pool } = require('mssql');

const getEvents = async () => {
    try{
        let poll = await sql.connect(config.sql);
        const sqlQueiries = await utils.loadSqlQueries('events')
        const list = await pool.request().query(sqlQueiries.eventlist).toList();
        return list.recordsets;
    }
    catch(eer){
        ERR.isModuleNamespaceObject
    }
}
module.exports = {
    getEvents,
}