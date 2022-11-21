# Interactive Web Visualization

This repo contains the website files for an interactive dashboard. This interactive dashboard features javascript interactability utilizing the javascript plotly library. 

### GitHub Pages Link: [jacob-mcm.github.io/Interactive-Web-Visualization/](https://jacob-mcm.github.io/Interactive-Web-Visualization/)

In this repo you will find:

|File|Description|
|----|-----------|
|[index.html](index.html)|The base HTML file that holds the website structure that the javascript file interacts with and builds off of.|
|[app.js](/static/js/app.js)| The javascript file that enables the interactive visualizations on the website. Controls the data update functions and utilizes the plotly library to create interactive plots and visualizations.|
|[samples.json](samples.json)| The JSON file that contains patient's bacterial data that was utilized in the javascript file to create dynamic visualizations.|

# What is this?

The website built here is a demonstration of what Javascripts interactibility can accomplish in the world of data visualization. A dashboard was created in order to showcase dynamically changing plots and metadata dependant on user selection. On the dashboard, the user may select a patient ID from the dropdown menu. After a selection is made, the entire dashboard changes to display plots based on the object properties of the ID found in the dataset. For this project a dataset on bacterial cultures found in various subjects's navel. 

The dashboard contains four core elements:

|Element|Description|
|-------|-----------|
|Dropdown Menu| The dropdown menu houses all of the subject IDs each subject has information associated with them. The other 3 elements utilize the data belonging to the subject ID chosen from this drop-down menu. In short, selecting a subject ID changes the dashboard to provide information on that subject.
|Demographic Info| This element contains all of the metadata associated with the subject. Their Subject ID, Ethnicity, Gender, Age, Location, Navel Type(bbtype) and their Wash Frequency(wfreq). This data updates based on dropdown menu selection.|
|Bar Graph| Utilizing plotly, this element is a dynamically generated bar graph that shows the top 10 bacterial cultures found based on the subject selected from the drop down menu. Metadata for the bacterial sample is shown upon hovering.|
|Bubble graph| Utilizing plotly, this element is a dynamically generated bubble graph. The bubble graph shows a visualization of the colony sizes of the cultures found in the subjects navel sample. Metadata for the bubbles is shown upon hovering over a bubble. Updates each time a subject is selected.|

These four elements make up the dashboard, and all update dynamically depending on what subject is selected from the dropdown menu.

## References/Acknowledgements

#### Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/

#### © 2022 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

#### My instructor Dom, who provided an inclass demonstration of this assignment. He has been referenced within the app.js file as well.  
