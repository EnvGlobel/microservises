cube(`Weather`, {
  sql: `SELECT * FROM \`EnvGlobel\`.weather`,
  
  joins: {
    
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
    
    temperature: {
      sql: `temperature`,
      type: `string`
    },
    
    winddirection: {
      sql: `${CUBE}.\`windDirection\``,
      type: `string`
    },
    
    windspeed: {
      sql: `${CUBE}.\`windSpeed\``,
      type: `string`
    },
    
    measuredate: {
      sql: `${CUBE}.\`measureDate\``,
      type: `time`
    }
  }
});
