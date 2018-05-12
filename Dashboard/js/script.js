google.charts.load('current', {'packages':['corechart', 'controls']});
google.charts.setOnLoadCallback(drawDashboard);

function drawDashboard(){

	$.ajax({
		url: 'js/data.json',
		dataType: 'json',
		success: function(dataFromJSON){
			console.log(dataFromJSON);
			var data = new google.visualization.DataTable();
			data.addColumn('string', 'Name');
			data.addColumn('number', 'Age');
			data.addColumn('number', 'Income');
			data.addColumn('string', 'Gender');
			data.addColumn('string','country')

			for (var i = 0; i < dataFromJSON.length; i++) {
				data.addRow([
					dataFromJSON[i].first_name + " " + dataFromJSON[i].last_name,
					dataFromJSON[i].age,
					dataFromJSON[i].annual_income,
					dataFromJSON[i].gender, 
					dataFromJSON[i].country, 
			]);

		}

		var dashboard = new google.visualization.Dashboard(
			document.getElementById('dashboard'));

		var scatterChart = new google.visualization.ChartWrapper({
			chartType: 'ScatterChart',
			containerId: 'chart1',
			options: {
				width: '100%',
				height: '100%',
				legend: 'none',
				title: 'Age vs Annual Income',
				colors: ['white'],
				pointShape: 'star',
				backgroundColor: {
					fill: 'transparent'
				},
				ui: {
					labelStacking: 'vertical'
				},
			animation: {
			      duration: 200,
			      easing: 'inAndOut',
			    }
			},
			view: {
				columns: [1,2]
			}
		});

		var geo = new google.visualization.ChartWrapper({
			chartType: "GeoChart",
			containerId: "chart3",
			view: {
				columns: [4]
			}
			
		});

		var table = new google.visualization.ChartWrapper({
			chartType: "Table",
			containerId: "chart2",
			options: {
				colors: ['black'],
			}
		});

		var incomeRangeSlider = new google.visualization.ControlWrapper({
			controlType: 'NumberRangeFilter',
			containerId: 'control1',
			options: {
				filterColumnLabel: 'Income'
			} 
		});

		var optionPicker = new google.visualization.ControlWrapper({
			controlType: 'CategoryFilter',
			containerId: 'control2',
			options: {
				filterColumnLabel: 'Gender',
				ui: {
					allowMultiple: false,
					allowTyping: false,
					labelStacking: 'vertical'
				}
			}
		});

		dashboard.bind([incomeRangeSlider, optionPicker], [scatterChart, table, geo]);
		// dashboard.bind(optionPicker, scatterChart);
		dashboard.draw(data);

		},
		error: function(errorFromJson){
			console.log(errorFromJson);
			alert("error");
		}

	});
};