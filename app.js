
let selectTag = d3.select("#selDataset");

d3.json("revisedSamples.json").then((jsonData) => {
//  console.log(jsonData);

  let names = jsonData.names
  //console.log(names);
  names.map((id) => {
    selectTag
    .append("option")
    .property("value", id)
    .text(id);
  });
  pageChange(names[0]);

});

function pageChange(idSelect) {
  //console.log(idSelect);
  d3.json("revisedSamples.json").then((data) => {
    let samples = data.samples;
    let filteredSamples = samples.filter(sampleObj => sampleObj.id == idSelect);
    console.log(samples);
    console.log(filteredSamples);
    let filteredSample = filteredSamples[0];
    console.log(filteredSample);
  })
}

//
// function demoInfo(data) {
//   d3.json('revisedSamples.json').then((data) => {
//       //console.log(data);
//   let demoGrab = d3.select("#sample-metadata");
//   demoGrab.html("");
//   Object.entries(data).forEach(([key, value]) => {
//     demoGrab.append("h5").text(`${key}: ${value}`);
//     })
//   })
// }
// demoInfo();
// // Horizontal Bar Chart
// function barChart(data) {
//   d3.json('revisedSamples.json').then((data) => {
//       //console.log(data);
//       const otuIds = data.otu_ids;
//       const otuLabels = data.otu_labels;
//       const sampleValues = data.sample_values;
//
//   let trace1 = {
//     type: 'bar',
//     x: otuIds,
//     y: sampleValues,
//     orientation: 'h'
//   };
//   let data2 = [trace1];
//
//   Plotly.newPlot('bar', data2);
//   })
// }
// barChart();
// // d3.selectAll("#selDataset").on("change", init);
