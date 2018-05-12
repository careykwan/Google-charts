google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
	$.ajax({
		url: 'js/data.json',
		dataType: 'json',
		success: function(dataFromServer){
			
			var data = new google.visualization.DataTable();
			data.addColumn('number', 'Age');
			data.addColumn('number', 'Income');

			for (var i = 0; i < dataFromServer.length; i++) {
				data.addRow([dataFromServer[i].age, dataFromServer[i].anual_income]);
			}

			var options = {
					title: "Age vs Anual Income",
				hAxis: {
					title: "Age", 
					ticks: [20, 40, 60, 80, 100]
				},
				vAxis: {
					title: "Income",
					ticks: [10000, 12000, 14000, 16000, 18000, 20000, 22000, 24000, 26000, 28000]
				},
				legend: 'none'

			}

			var chart = new google.visualization.ScatterChart(document.getElementById('showGraph'));
			google.visualization.events.addListener(chart, 'select', clickEvent);
			chart.draw(data, options);

			function clickEvent(){ // this click event shows the information once the do is clicked.
				console.log("a dot was selected");
				var tableRow = chart.getSelection()[0].row;
				chart.setSelection();
				var personData = dataFromServer[tableRow];
				if (personData){
					document.getElementById('name').innerText = personData.first_name + " " + personData.last_name;
					document.getElementById('img').src = personData.avatar;
					document.getElementById('email').innerText = personData.email;
					document.getElementById('company').innerText = personData.company;
					document.getElementById('jobTitle').innerText = personData.Job_title;
					document.getElementById('age').innerText = personData.age;
					document.getElementById('gender').innerText = personData.gender;
				}
				console.log(dataFromServer[tableRow]); //this will bring back all the info from the data.json (dataFromServer)
			}

		},
		error: function(error){
			console.log("jackaroo");
			alert("cannot connect to server.")
		}
	});

}