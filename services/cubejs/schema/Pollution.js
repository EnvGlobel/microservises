cube(`Pollution`, {
  sql: `SELECT * FROM \`EnvGlobel\`.pollution`,
  
  joins: {
    PollutionStation: {
      sql: `${CUBE}.station = ${PollutionStation}.id`,
      relationship: `hasOne`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, measuredate]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    bp: {
      sql: `bp`,
      type: `string`
    },
    
    station: {
      sql: `${PollutionStation}.name`,
      type: `string`
    },
    
    o3: {
      sql: `o3`,
      type: `string`
    },
    
    rh: {
      sql: `rh`,
      type: `string`
    },
    
    temp: {
      sql: `temp`,
      type: `string`
    },
    
    measuredate: {
      sql: `${CUBE}.\`measureDate\``,
      type: `time`
    }
  }
});
