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
    bp: {
      sql: `bp`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
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
