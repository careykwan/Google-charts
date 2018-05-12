google.charts.load('current', {'packages':['geochart'],'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'});
google.charts.setOnLoadCallback(drawRegionsMap);


function drawRegionsMap(){
	$.ajax({
		url: 'js/data.json',
		dataType: 'json',
		success: function(dataFromServer){
			console.log("hello");

			var countries = []

			var data = new google.visualization.DataTable();
			data.addColumn('string', 'country');
			data.addColumn('string', 'currency');
			// data.addColumn('string', 'race');
			// data.addColumn('string', 'time_zone');

			for (var i = 0; i < dataFromServer.length; i++) {
				data.addRow([dataFromServer[i].country, dataFromServer[i].currency]);
			}

			var options = {
				title: "Where in the world",
			};
				

        	var chart = new google.visualization.GeoChart(document.getElementById('showGraph'));
			google.visualization.events.addListener(chart, 'select', clickEvent);
        	chart.draw(data, options);

        	function clickEvent(){
        		console.log("country has been selected")
        		var tableRow = chart.getSelection()[0].row;
        		var countryData = dataFromServer[tableRow];
        		if (countryData){
        			document.getElementById('race').innerText = countryData.race;
        			document.getElementById('time_zone').innerText = countryData.time_zone;
        		}
        	}

        },
        error:function(error){
        	console.log("error");
        }
    })
}