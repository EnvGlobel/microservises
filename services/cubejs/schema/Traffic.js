cube(`Traffic`, {
  sql: `SELECT * FROM \`EnvGlobel\`.traffic`,
  
  joins: {
    PollutionStation: {
      sql: `${CUBE}.pollutionStation = ${PollutionStation}.id`,
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
    darkred: {
      sql: `darkred`,
      type: `string`
    },
    
    green: {
      sql: `green`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    orange: {
      sql: `orange`,
      type: `string`
    },
    
    red: {
      sql: `red`,
      type: `string`
    },
    
    measuredate: {
      sql: `${CUBE}.\`measureDate\``,
      type: `time`
    }
  }
});
