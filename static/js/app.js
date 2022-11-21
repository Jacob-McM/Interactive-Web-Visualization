// Code largely based on Instructor Dom's tutorial on homework 14


// Define global variable for URL
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";


function drawBar(sampleId)
{
    console.log(`drawBar(${sampleId})`);

    d3.json(url).then(data => {
        console.log(data);

        let samples = data.samples;
        let resultsArray = samples.filter(s => s.id == sampleId);
        let result = resultsArray[0];

        let otu_ids = result.otu_ids;
        let otu_labels = result.otu_labels;
        let sample_values = result.sample_values;

        let yticks = otu_ids.slice(0,10).map(otuId => `OTU ${otuId}`).reverse();
        // Trace Object
        let barData = {
            x: sample_values.slice(0,10).reverse(),
            y: yticks,
            type: 'bar',
            text: otu_labels.slice(0,10).reverse(),
            orientation:`h`
        };

        // Trace into Array
        
        let barArray = [barData];

        // Create Layout Object

        let barLayout = {
            title: "Top 10 Bacteria Cultures Found",
            margin: {t: 30,l: 150}
        }

        // Call Plotly
        Plotly.newPlot("bar", barArray, barLayout);
    });

}

function drawBubble(sampleId)
{
    console.log(`drawBubble(${sampleId})`);

    d3.json(url).then(data => {

        let samples= data.samples;
        let resultArray = samples.filter(s => s.id == sampleId);
        let result = resultArray[0];

        let otu_ids = result.otu_ids;
        let otu_labels = result.otu_labels;
        let sample_values = result.sample_values;

        // Create a Trace Object
        let bubbleData = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Earth"
            }
        };

        // Insert Trace Object into an array
        let bubbleArray = [bubbleData];

        // Create Layout Object
        let bubbleLayout = {
            title: "Bacteria Cultures Per Sample",
            margin: {t:30},
            hovermode: "closest",
            xaxis: {title:"OTU ID"},
        }
        // Call Plotly
        Plotly.newPlot("bubble", bubbleArray, bubbleLayout)
   })
}

function showMeta(sampleId)
// For populating  the div ID 'sample-metadata'
{ 
    console.log(`showMeta(${sampleId})`);

    d3.json(url).then(data => {

        let metadata = data.metadata;
        let resultArray = metadata.filter(s => s.id == sampleId);
        let result = resultArray[0];

        let m_id =result.id;
        let m_ethnicity = result.ethnicity;
        let m_gender = result.gender;
        let m_age = result.age;
        let m_location = result.location;
        let m_bbtype = result.bbtype;
        let m_wfreq = result.wfreq;

        document.getElementById("sample-metadata").innerHTML = (
            `<font size ="2"> ID: ${m_id} <br /> Ethnicity: ${m_ethnicity} <br /> Gender: ${m_gender} <br /> Age: ${m_age} \n
            <br /> Location: ${m_location} <br /> bbtype: ${m_bbtype} <br /> wfreq: ${m_wfreq} </font>` 
            );
        
        
    });
}


function optionChanged(sampleId)
{
    console.log(`optionChanged, new value: ${sampleId}`);

    drawBar(sampleId);

    drawBubble(sampleId);

    showMeta(sampleId);
        

}


function initDashboard()
{
    console.log('initDashboard()');

    //Get handle to dropdown
    let selector = d3.select("#selDataset");

    d3.json(url).then(data => {
        console.log("Data Check:", data);

        let sampleNames = data.names;
        console.log(sampleNames);

        // Populate Dropdown
        for (let i = 0; i< sampleNames.length; i++) {
            let sampleId = sampleNames[i];
            selector.append("option").text(sampleId).property("value", sampleId);
        }
        
        // Read the current value from the dropdown

        let initialId = selector.property("value");
        console.log(`initialID = ${initialId}`);

        drawBar(initialId);

        drawBubble(initialId);

        showMeta(initialId);
    });

   
    
    
    
};

initDashboard();
