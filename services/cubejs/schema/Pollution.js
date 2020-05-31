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
    },
    averageTemp: {
      sql: `${temp}`,
      type: `avg`
    },
    minTemp: {
      sql: `${temp}`,
      type: `min`
    },
    maxTemp: {
      sql: `${temp}`,
      type: `max`
    },
    averageBp: {
      sql: `${bp}`,
      type: `avg`
    },
    minBp: {
      sql: `${bp}`,
      type: `min`
    },
    maxBp: {
      sql: `${bp}`,
      type: `max`
    },
    averageO3: {
      sql: `${o3}`,
      type: `avg`
    },
    minO3: {
      sql: `${o3}`,
      type: `min`
    },
    maxO3: {
      sql: `${o3}`,
      type: `max`
    },
    averageRh: {
      sql: `${rh}`,
      type: `avg`
    },
    minRh: {
      sql: `${rh}`,
      type: `min`
    },
    maxRh: {
      sql: `${rh}`,
      type: `max`
    },
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    bp: {
      sql: `bp`,
      type: `number`
    },
    
    station: {
      sql: `${PollutionStation}.name`,
      type: `string`
    },
    
    o3: {
      sql: `o3`,
      type: `number`
    },
    
    rh: {
      sql: `rh`,
      type: `number`
    },
    
    vehicleCount: {
      sql: `vehicleCount`,
      type: `number`
    },
    
    temp: {
      sql: `temp`,
      type: `number`
    },
    
    measuredate: {
      sql: `${CUBE}.\`measureDate\``,
      type: `time`
    }
  }
});
