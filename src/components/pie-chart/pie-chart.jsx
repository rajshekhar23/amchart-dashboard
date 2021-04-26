import React, { useEffect, useRef, useState } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import axios from 'axios';

export const PieChart = () => {

    const pieChartRef = useRef();
    am4core.useTheme(am4themes_animated);    
    const [data, setData] = useState([]);
    const [title, setTitle] = useState("Entity Types Discovered");

    useEffect( () => {
        axios.get('http://ec2-18-219-51-212.us-east-2.compute.amazonaws.com:37963/vw_classifications_discovered').then(res => {
            setData(res.data)
        }).catch( error => setData([]));
    }, []);

    if(pieChartRef.current) {
        let chart = am4core.create(pieChartRef.current, am4charts.PieChart);

        // Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.legendSettings.labelText = '{classification_fam}:{total_occurrances}';
        pieSeries.legendSettings.valueText = '{classification_fam}:{total_occurrances}';;

        pieSeries.dataFields.value = "total_occurrances";
        pieSeries.dataFields.category = "classification_fam";

        // Let's cut a hole in our Pie chart the size of 30% the radius
        chart.innerRadius = am4core.percent(30);

        // Put a thick white border around each Slice
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;
        pieSeries.slices.template.cursorOverStyle = [
            {
            "property": "cursor",
            "value": "pointer"
            }
        ];

        pieSeries.alignLabels = false;
        pieSeries.labels.template.text = "{classification_fam} : {total_occurrances}";
        pieSeries.labels.template.bent = true;
        pieSeries.labels.template.radius = 3;
        pieSeries.labels.template.radius = am4core.percent(-40);
        pieSeries.labels.template.fill = am4core.color("white");
        pieSeries.labels.template.relativeRotation = 90;
        pieSeries.labels.template.padding(0,0,0,0);

        pieSeries.ticks.template.disabled = true;

        // Create a base filter effect (as if it's not there) for the hover to return to
        let shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
        shadow.opacity = 0;

        // Create hover state
        let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

        // Slightly shift the shadow and make it more prominent on hover
        let hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
        hoverShadow.opacity = 0.7;
        hoverShadow.blur = 5;

        // Add a legend
        //chart.legend = new am4charts.Legend();
        //chart.legend.labels.template.disabled = false;
        
        chart.data = data;
    }

    return (
        <div className='widget'>
            <h4>{title}</h4>
            <div className='chartdiv' ref={pieChartRef}></div>
        </div>
    )
}