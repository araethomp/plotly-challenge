
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
    //console.log(samples);
    //console.log(filteredSamples);
    let filteredSample = filteredSamples[0];
    //console.log(filteredSample);

    let otuIDs = filteredSample.otu_ids;
    let otuLabels = filteredSample.otu_labels;
    let sampleValues = filteredSample.sample_values;
    console.log(otuIDs)
    console.log(otuLabels)
    console.log(sampleValues)
  })
}
