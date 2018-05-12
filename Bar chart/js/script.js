	var statData = [
	{
		Year: "2017",
		Births: 14589,
		Deaths: 14789,
		Marriages: 14785

	},
	{
		Year: "2016",
		Births: 14589,
		Deaths: 14563,
		Marriages: 14587
	},
	{
		Year: "2014",
		Births: 58965,
		Deaths: 56987,
		Marriages: 54126
	},
	{
		Year: "2013",
		Births: 14526,
		Deaths: 12456,
		Marriages: 47856
	}

];


google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
	console.log("packages loaded");




	// var data = google.visualization.arrayToDataTable([
	// 	['Year', 'Birth', 'Deaths', 'Marriages'],
	// 	['2013', 58719, 29568, 19237],
	// 	['2014', 52123, 25648, 12565],
	// 	['2015', 12356, 21356, 12568],
	// 	['2016', 12565, 14562, 14585],

	// ]);

	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Year');
	data.addColumn('number', 'Births');
	data.addColumn('number', 'Deaths');
	data.addColumn('number', 'Marriages');

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
	
}