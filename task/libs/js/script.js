	$('#btnTimezone').click(function() {
		$(".resTable").empty();
		$.ajax({
			url: "libs/php/getTimezoneInfo.php",
			type: 'GET',
			dataType: 'json',
			data: {
				lat: $('#selLat').val(),
				lng: $('#selLng').val()
			},
			success: function(result) {
                
				console.log("API Result", JSON.stringify(result));

				if (result.status.name == "ok") {
					$("table .resTable").append("<tr><td colspan='4'><h3>Timezone API</h3></td></tr>"+"<tr><td  align='right'>Time:</td><td>" + result['data']['time'] +
					"</td><td>Timezone:</td><td>" + result['data']['timezoneId'] + "</td></tr>" +
					"<tr><td  align='right'>Longitude/Latitude:</td><td>" + result['data']['lng'] + "/" + result['data']['lat'] +
					"</td><td>Country:</td><td>" + result['data']['countryName'] + "</td></tr>" + "</td></tr>");
					$(".resTable").show();
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	
	});

	$('#btnAddress').click(function() {
		$(".resTable").empty();
		$.ajax({
			url: "libs/php/getAddressInfo.php",
			type: 'GET',
			dataType: 'json',
			data: {
				lat: $('#selLat').val(),
				lng: $('#selLng').val()
			},
			success: function(result) {
                
				console.log("API Result", JSON.stringify(result));

				if (result.status.name == "ok") {
					
					$("table .resTable").append("<tr><td colspan='4'><h3>Address API</h3></td></tr>"+"<tr><td  align='right'>House Number:</td><td>" + result['data']['houseNumber'] +
					"</td><td>Country Code:</td><td>" + result['data']['countryCode'] + "</td></tr>" +
					"<tr><td  align='right'>Street:</td><td>" + result['data']['street'] +
					"</td><td>Locality:</td><td>" + result['data']['locality'] + "</td></tr>" +
					"<tr><td  align='right'>Lat:</td><td>" + result['data']['lat'] +
					"</td><td>Long:</td><td>" + result['data']['lng'] + "</td></tr>");
					$(".resTable").show();

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	
	});