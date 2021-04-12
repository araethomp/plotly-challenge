
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
  optionChanged(names[0]);

});

function optionChanged(idSelect) {
  //console.log(idSelect);
  d3.json("revisedSamples.json").then((data) => {
    let samples = data.samples;
    let filteredSamples = samples.filter(sampleObj => sampleObj.id == idSelect);
    //console.log(samples);
    //console.log(filteredSamples);
    let filteredSample = filteredSamples[0];
    //console.log(filteredSample);

    let otuIDs = filteredSample.otu_ids;
    let otuLabels = filteredSample.otu_labels;
    let sampleValues = filteredSample.sample_values;
    // console.log(otuIDs)
    // console.log(otuLabels)
    // console.log(sampleValues)
    let yLabel = otuIDs.slice(0, 10).map(otuIDs => `OTU ${otuIDs}`).reverse();
    //console.log(yLabel)
// Horizontal Bar Chart Setup
    let trace1 = {
      y: yLabel,
      x: sampleValues.slice(0, 10).reverse(),
      text: otuLabels.slice(0, 10).reverse(),
      type: "bar",
      orientation: "h"
    }
    let data1 = [trace1];

    let layout1 = {
      margin: { t: 30, l: 150 }
    }
    Plotly.newPlot("bar", data1, layout1);

// Bubble Chart Setup
    let trace2 = {
      x: otuIDs,
      y: sampleValues,
      text: otuLabels,
      mode: "markers",
      marker: {
        size: sampleValues,
        color: otuIDs,
        colorscale: "Earth"
      }
    };
    let data2 = [trace2];
    let layout2 = {
      margin: { t: 30 }
    };
    Plotly.newPlot("bubble", data2, layout2);
  })

// Demographic Info Changes
    d3.json("revisedSamples.json").then((data) => {
      let demoInfo = data.metadata;
      //console.log(demoInfo);
      let filteredDemoInfo = demoInfo.filter(demoObj => demoObj.id == idSelect);
      let filteredDemoInfos = filteredDemoInfo[0];
      //console.log(filteredDemoInfos);
      let demoSelect = d3.select("#sample-metadata");
      demoSelect.html("");
      Object.entries(filteredDemoInfo[0]).forEach(([key, value]) => {
        demoSelect.append("h5").text(`${key}: ${value}`);
      });
    });
}
