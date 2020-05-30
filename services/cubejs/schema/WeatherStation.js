cube(`WeatherStation`, {
  sql: `SELECT * FROM \`EnvGlobel\`.\`weatherStation\``,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
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
