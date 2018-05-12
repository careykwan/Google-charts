google.charts.load('current', {packages: ['treemap']});
google.charts.setOnLoadCallback(drawChart);

// function drawChart(){

// 	$.ajax({
// 		url: "js/mockData.json",
// 		dataType: "json",
// 		success: function(statData){

			// var movies = [];

			// for (var i = 0; i < mockData.length; i++) {
			// 	data.addRow([ statData[i].Movie, statData[i].Ethnicity, statData[i].Gender]);
			// }


		// {"Movie":"Comedy|Drama|Thriller","Ethnicity":"Micronesian","Gender":"Male"},

		// ['Comedy', "Ethnicity":"Micronesian","Gender":"Male"],
		// ['Drama', "Ethnicity":"Micronesian","Gender":"Male"],
		// ['Thriller', "Ethnicity":"Micronesian","Gender":"Male"]

		function drawChart() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'ID');
      data.addColumn('string', 'Parent');
      data.addColumn('number', 'Number Of Lines');
      data.addRows([
        ['Shakespeare', null, 0],

        ['Comedies', 'Shakespeare', null],
        ['Tragedies', 'Shakespeare', null],
        ['Histories', 'Shakespeare', null],

        ['As You Like It', 'Comedies', null],
        ['Adam', 'As You Like It', 10],
        ['Amiens', 'As You Like It', 10],
        ['Audrey', 'As You Like It', 12],
        ['Celia', 'As You Like It', 108],
        ['Charles', 'As You Like It', 8],
        ['Corin', 'As You Like It', 24],
        ['Dennis', 'As You Like It', 2],
        ['Duke', 'As You Like It', 32],
        ['Frederick', 'As You Like It', 20],
        ['Hymen', 'As You Like It', 1],
        ['Jaques (lord)', 'As You Like It', 57],
        ['Jaques (son)', 'As You Like It', 2],
        ['Le Beau', 'As You Like It', 14],
        ['Oliver', 'As You Like It', 37],
        ['Orlando', 'As You Like It', 120],
        ['Phebe', 'As You Like It', 23],
        ['Rosalind', 'As You Like It', 201],
        ['Silvius', 'As You Like It', 24],
        ['Sir Oliver Martext', 'As You Like It', 3],
        ['Touchstone', 'As You Like It', 74],
        ['William', 'As You Like It', 11],

        ['Comedy Of Errors', 'Comedies', null],
        ['Adriana', 'Comedy Of Errors', 79],
        ['Aegeon', 'Comedy Of Errors', 17],
        ['Aemilia', 'Comedy Of Errors', 16],
        ['Angelo', 'Comedy Of Errors', 31],
        ['Antipholus of Ephesus', 'Comedy Of Errors', 76],
        ['Antipholus of Syracuse', 'Comedy Of Errors', 103],
        ['Balthazar', 'Comedy Of Errors', 5],
        ['Courtezan', 'Comedy Of Errors', 11],
        ['Dromio of Ephesus', 'Comedy Of Errors', 63],
        ['Dromio of Syracuse', 'Comedy Of Errors', 99],
        ['Luce', 'Comedy Of Errors', 7],
        ['Luciana', 'Comedy Of Errors', 43],
        ['Pinch', 'Comedy Of Errors', 6],
        ['Solinus', 'Comedy Of Errors', 22],

        ['Merchant Of Venice', 'Comedies', null],
        ['Antonio', 'Merchant Of Venice', 47],
        ['Balthasar', 'Merchant Of Venice', 1],
        ['Bassanio', 'Merchant Of Venice', 73],
        ['Duke (of Venice)', 'Merchant Of Venice', 18],
        ['Gratiano', 'Merchant Of Venice', 48],
        ['Jessica', 'Merchant Of Venice', 26],
        ['Launcelot Gobbo', 'Merchant Of Venice', 44],
        ['Leonardo', 'Merchant Of Venice', 2],
        ['Lorenzo', 'Merchant Of Venice', 47],
        ['Nerissa', 'Merchant Of Venice', 36],
        ['Old Gobbo', 'Merchant Of Venice', 19],
        ['Portia', 'Merchant Of Venice', 117],
        ['Prince of Arragon', 'Merchant Of Venice', 4],
        ['Prince of Morocco', 'Merchant Of Venice', 7],
        ['Salanio', 'Merchant Of Venice', 18],
        ['Salarino', 'Merchant Of Venice', 27],
        ['Salerio', 'Merchant Of Venice', 6],
        ['Shylock', 'Merchant Of Venice', 79],
        ['Stephano', 'Merchant Of Venice', 3],
        ['Tubal', 'Merchant Of Venice', 8],

        ['Midsummer Night\'s Dream', 'Comedies', null],
        ['Bottom', 'Midsummer Night\'s Dream', 59],
        ['Cobweb', 'Midsummer Night\'s Dream', 4],
        ['Demetrius', 'Midsummer Night\'s Dream', 48],
        ['Egeus', 'Midsummer Night\'s Dream', 7],
        ['Fairy', 'Midsummer Night\'s Dream', 4],
        ['Flute', 'Midsummer Night\'s Dream', 18],
        ['Helena', 'Midsummer Night\'s Dream', 36],
        ['Hermia', 'Midsummer Night\'s Dream', 48],
        ['Hippolyta', 'Midsummer Night\'s Dream', 14],
        ['Lysander', 'Midsummer Night\'s Dream', 50],
        ['Moth', 'Midsummer Night\'s Dream', 2],
        ['Mustardseed', 'Midsummer Night\'s Dream', 5],
        ['Oberon', 'Midsummer Night\'s Dream', 29],
        ['Peaseblossom', 'Midsummer Night\'s Dream', 4],
        ['Philostrate', 'Midsummer Night\'s Dream', 6],
        ['Puck', 'Midsummer Night\'s Dream', 33],
        ['Quince', 'Midsummer Night\'s Dream', 40],
        ['Snout', 'Midsummer Night\'s Dream', 9],
        ['Snug', 'Midsummer Night\'s Dream', 4],
        ['Starveling', 'Midsummer Night\'s Dream', 7],
        ['Theseus', 'Midsummer Night\'s Dream', 48],
        ['Titania', 'Midsummer Night\'s Dream', 23],

        ['Taming Of The Shrew', 'Comedies', null],
        ['Baptista Minola', 'Taming Of The Shrew', 68],
        ['Bianca', 'Taming Of The Shrew', 29],
        ['Biondello', 'Taming Of The Shrew', 39],
        ['Christopher Sly', 'Taming Of The Shrew', 24],
        ['Curtis', 'Taming Of The Shrew', 20],
        ['Gremio', 'Taming Of The Shrew', 58],
        ['Grumio', 'Taming Of The Shrew', 63],
        ['Haberdasher', 'Taming Of The Shrew', 1],
        ['Hortensio', 'Taming Of The Shrew', 70],
        ['Joseph',  'Taming Of The Shrew', 1],
        ['Katherina', 'Taming Of The Shrew', 82],
        ['Lucentio',  'Taming Of The Shrew', 61],
        ['Nathaniel', 'Taming Of The Shrew', 4],
        ['Nicholas', 'Taming Of The Shrew', 1],
        ['Peter',  'Taming Of The Shrew', 2],
        ['Petruchio', 'Taming Of The Shrew', 158],
        ['Philip',  'Taming Of The Shrew', 1],
        ['Tranio', 'Taming Of The Shrew', 90],
        ['Vincentio', 'Taming Of The Shrew', 23],

        ['The Tempest', 'Comedies', null],
        ['Adrian', 'The Tempest', 9],
        ['Alonso', 'The Tempest', 40],
        ['Antonio, duke of Milan', 'The Tempest', 57],
        ['Ariel', 'The Tempest', 45],
        ['Caliban', 'The Tempest', 50],
        ['Ceres', 'The Tempest', 4],
        ['Ferdinand', 'The Tempest', 31],
        ['Francisco', 'The Tempest', 2],
        ['Gonzalo', 'The Tempest', 52],
        ['Iris', 'The Tempest', 4],
        ['Juno', 'The Tempest', 2],
        ['Master', 'The Tempest', 2],
        ['Miranda', 'The Tempest', 50],
        ['Nymphs', 'The Tempest', 0],
        ['Prospero', 'The Tempest', 114],
        ['Reapers', 'The Tempest', 0],
        ['Sebastian', 'The Tempest', 67],
        ['Stephano (Servant to Portia)', 'The Tempest', 60],
        ['Trinculo', 'The Tempest', 39],

        ['Henry VIII', 'Histories', null],
        ['Anne Bullen', 'Henry VIII', 18],
        ['Archbishop Cranmer', 'Henry VIII', 21],
        ['Bishop Lincoln', 'Henry VIII', 2],
        ['Brandon', 'Henry VIII', 6],
        ['Capucius', 'Henry VIII', 5],
        ['Cardinal Campeius', 'Henry VIII', 14],
        ['Cardinal Wolsey', 'Henry VIII', 79],
        ['Cromwell', 'Henry VIII', 21],
        ['Doctor Butts', 'Henry VIII', 4],
        ['Duke of Buckingham', 'Henry VIII', 26],
        ['Duke of Norfolk', 'Henry VIII', 48],
        ['Duke of Suffolk', 'Henry VIII', 30],
        ['Earl of Surrey', 'Henry VIII', 24],
        ['First Secretary to Wolsey', 'Henry VIII', 2],
        ['Gardiner', 'Henry VIII', 22],
        ['Garter', 'Henry VIII', 1],
        ['Griffith', 'Henry VIII', 13],
        ['King Henry VIII', 'Henry VIII', 81],
        ['Lord Abergavenny', 'Henry VIII', 5],
        ['Lord Chamberlain', 'Henry VIII', 38],
        ['Lord Chancellor', 'Henry VIII', 7],
        ['Lord Sands', 'Henry VIII', 17],
        ['Old Lady', 'Henry VIII', 14],
        ['Patience', 'Henry VIII', 3],
        ['Porter (door-keeper of the Council-chamber)', 'Henry VIII', 10],
        ['Queen Katharine', 'Henry VIII', 50],
        ['Sir Anthony Denny', 'Henry VIII', 3],
        ['Sir Henry Guildford', 'Henry VIII', 1],
        ['Sir Nicholas Vaux', 'Henry VIII', 1],
        ['Sir Thomas Lovell', 'Henry VIII', 21],
        ['Surveyor to the Duke of Buckingham', 'Henry VIII', 9],

        ['History Of King John', 'Histories', null],
        ['Arthur Duke of Bretagne', 'History Of King John', 23],
        ['Blanch', 'History Of King John', 9],
        ['Cardinal Pandulph', 'History Of King John', 23],
        ['Chatillon', 'History Of King John', 5],
        ['Constance', 'History Of King John', 36],
        ['Essex', 'History Of King John', 1],
        ['Faulconbridge', 'History Of King John', 4],
        ['Hubert de Burgh', 'History Of King John', 52],
        ['James Gurney', 'History Of King John', 1],
        ['King John', 'History Of King John', 95],
        ['King Phillip', 'History Of King John', 43],
        ['Lady Faulconbridge', 'History Of King John', 5],
        ['Lewis the Dauphin', 'History Of King John', 29],
        ['Lord Bigot', 'History Of King John', 6],
        ['Lymoges duke of Austria', 'History Of King John', 16],
        ['Melun', 'History Of King John', 3],
        ['Pembroke earl of Pembroke', 'History Of King John', 20],
        ['Peter of Pomfret', 'History Of King John', 1],
        ['Philip the Bastard', 'History Of King John', 89],
        ['Prince Henry', 'History Of King John', 8],
        ['Queen Elinor', 'History Of King John', 22],
        ['Salisbury earl of Salisbury', 'History Of King John', 36],

          ]);

        var tree = new google.visualization.TreeMap(document.getElementById('chartLocation'));

	      var options = {
	        highlightOnMouseOver: true,
	        maxDepth: 1,
	        maxPostDepth: 2,
	        minHighlightColor: '#8c6bb1',
	        midHighlightColor: '#9ebcda',
	        maxHighlightColor: '#edf8fb',
	        minColor: '#009688',
	        midColor: '#f7f7f7',
	        maxColor: '#ee8100',
	        headerHeight: 15,
	        showScale: true,
	        height: 500,
	        useWeightedAverageForAggregation: true
	      };

	        tree.draw(data, options);

	      }






// 			var data = new google.visualization.DataTable();
// 			data.addColumn('string', 'Movie');
// 			data.addColumn('string', 'Ethnicity');
// 			data.addColumn('string', 'Gender');
// 			for (var i = 0; i < 1; i++) {
// 			data.addRow([statData[i].Year, statData[i].Births, statData[i].Deaths, statData[i].Marriages]);
// 		}

// 			var options = {
// 				title: 'Favourite Movie Genres',
// 				hAxis: {
// 					title: 'Number',
// 					minValue: 0
// 				},

// 				vAxis: {
// 					title: 'year',
// 				}, 

// 				animation: {
// 					startup: true,
// 					duration: 1000,
// 					easing: 'out',
// 				}
// 			};

// 			var chart = new google.visualization.Treemap(document.getElementById('chartLocation'));
// 			chart.draw(data, options);

// 		},
// 		error: function(){
// 			alert("Something went wrong, can't connect to server.");
// 		} 
// 	});
// }



	