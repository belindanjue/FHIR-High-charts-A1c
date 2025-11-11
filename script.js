//// https://r3.smarthealthit.org/...
//// Observation?code=http://loinc.org|38483-4&_sort=date&patient=2e4de32d-cb49-4f71-b02b-9a1b09cce6a3

/*
TARGET DATA STRUCTURE:
Categories: [date, date, date]
[{
    data: [5, 3, 7],
}]
      var dt = entry.resource.effectiveDateTime.substring(0,10);
      var value = entry.resource.valueQuantity.value;
*/



function handleData(data) {
  var c = [];
  var d = [];
  for (var i=0;i<data.entry.length;i++) {
    console.log(data.entry[i].resource.effectiveDateTime.substring(0,10));
    console.log(data.entry[i].resource.valueQuantity.value);
    c.push(data.entry[i].resource.effectiveDateTime.substring(0,10));
    d.push(data.entry[i].resource.valueQuantity.value);
  }

  
  var myChartOptions = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Hemoglobin A1c'
    },
    xAxis: {
      categories: c
    },
    yAxis: {
      title: {
        text: 'percentage %'
      }
    },
    // 2 dimensions: 
    series: [{
      data: d,
    }]
  }

  Highcharts.chart('container', myChartOptions);
}

const client = FHIR.client("https://r3.smarthealthit.org");
client.request("Observation?code=http://loinc.org|4548-4&_sort=date&patient=d2fd4a58-b2c1-4078-ae3f-8ccdc5430bea")
  .then(handleData)
  .catch(console.error)
  ;

