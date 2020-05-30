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
    
    o3: {
      sql: `o3`,
      type: `string`
    },
    
    pm10: {
      sql: `pm10`,
      type: `string`
    },
    
    pm25: {
      sql: `pm25`,
      type: `string`
    },
    
    measuredate: {
      sql: `${CUBE}.\`measureDate\``,
      type: `time`
    }
  }
});
