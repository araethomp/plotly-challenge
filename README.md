<header><b>Plot.ly Homework - Belly Button Biodiversity</b></header>
<p>In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.</p>
<p>The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.</p>

<ul>
  <li>Use the D3 library to read in samples.json.</li>
  <li>Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    <ul>
      <li>Use sample_values as the values for the bar chart.</li>
      <li>Use otu_ids as the labels for the bar chart.</li>
      <li>Use otu_labels as the hovertext for the chart.</li>
    </ul>
  </li>
  <li>Create a bubble chart that displays each sample.
    <ul>
      <li>Use otu_ids for the x values.</li>
      <li>Use sample_values for the y values.</li>
      <li>Use sample_values for the marker size.</li>
      <li>Use otu_ids for the marker colors.</li>
      <li>Use otu_labels for the text values.</li>
    </ul>
  </li>
  <li>Display the sample metadata, i.e., an individual's demographic information.</li>
  <li>Display each key-value pair from the metadata JSON object somewhere on the page.</li>
  <li>Update all of the plots any time that a new sample is selected.</li>
</ul>
<h2>Dataset:</h2>
<p>Hulcr, J. et al.(2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. 
  <br><b>Retrieved from:</b> <i>http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/</i>
</p>
