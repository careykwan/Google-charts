google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){

	$.ajax({
		url: "js/data.json",
		dataType: "json",
		success: function(statData){

			var data = new google.visualization.DataTable();
			data.addColumn('string', 'Location');
			data.addColumn('string', 'Gender');
			data.addColumn('string', 'Occupation');
			data.addColumn('string', 'Favourite Movies');
			for (var i = 0; i < statData.length; i++) {
			data.addRow([statData[i].Year, statData[i].Births, statData[i].Deaths, statData[i].Marriages]);
		}

			var options = {
				title: 'Births, Deaths and Marriages in NZ',
				subtitle: 'over the last 4 years',
				hAxis: {
					title: 'Number',
					minValue: 0
				},

				vAxis: {
					title: 'year',
				}, 

				animation: {
					startup: true,
					duration: 1000,
					easing: 'out',
				}
			};

			var chart = new google.visualization.BarChart(document.getElementById('chartLocation'));
			chart.draw(data, options);

		},
		error: function(){
			alert("Something went wrong, can't connect to server.");
		} 
	});
}



	