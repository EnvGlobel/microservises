cube(`PollutionStation`, {
  sql: `SELECT * FROM \`EnvGlobel\`.\`pollutionStation\``,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name]
    }
  },
  
  dimensions: {
    latitude: {
      sql: `latitude`,
      type: `string`
    },
    
    longitude: {
      sql: `longitude`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    }
  }
});
