
$(document).ready(function() {


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
      async function wait() {
        await sleep(1500);
    }
      
    wait().then(function(){
        var water_points = {
            draw: function(){
				
				var center_001={lat: 32.795778, lng:  -98.354972} 
                var dam_001 = new google.maps.Marker({
                    position: center_001,
					icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                    title: "centerpoint of dam for Reservoir 3 impounds 683.28 acre-feet of water and is located on Wolf Branch, tributary of Eagle Creek, Brazos River Basin"
                });
                dam_001.setMap(map);  
				var center_001={lat: 32.786306, lng:  -98.356167} 
                var dam_001 = new google.maps.Marker({
                    position: center_001,
					icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                    title: "centerpoint of dam for Reservoir 2 impounds 1,069.4 acre-feet of water and is located on Wolf Branch, tributary of Eagle Creek, Brazos River Basin"
                });
                dam_001.setMap(map);  
								var center_001={lat: 32.768304, lng:  -98.396754} 
                var dam_001 = new google.maps.Marker({
                    position: center_001,
					icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                    title: "centerpoint of dam for Reservoir 1 impounds 1,963.3 acre-feet of water and is located on Harris Branch, tributary of Ioni Creek, Brazos River Basin"
                });
                dam_001.setMap(map);  
				

				var right_001={lat: 32.77, lng:  -98.40} 
                var water_001 = new google.maps.Marker({
                    position: right_001,
					icon:'http://maps.google.com/mapfiles/ms/icons/purple-dot.png',
                    title: "TCEQ ID 61,204,052,301.00 T&P RR Co A-725 Block 2 number 21  Type: On-channel Reservoir"
                });
                water_001.setMap(map);  
				var right_001={lat: 32.79, lng:  -98.36} 
                var water_001 = new google.maps.Marker({
                    position: right_001,
					icon:'http://maps.google.com/mapfiles/ms/icons/purple-dot.png',
                    title: "TCEQ ID 61,204,052,302.00 T&P RR Co A-1396 Block 2 number 13 Type: On-channel Reservoir"
                });
                water_001.setMap(map); 
				var right_001={lat: 32.80, lng:  -98.35} 
                var water_001 = new google.maps.Marker({
                    position: right_001,
					icon:'http://maps.google.com/mapfiles/ms/icons/purple-dot.png',
                    title: "TCEQ ID 61,204,052,303.00 T&P RR Co A-2009 Block 2 number 12 2nd name Watson W Type: On-channel Reservoir"
                });
                water_001.setMap(map); 				
					
				
				
                var location_001={lat: 32.767212, lng:  -98.379550} 
                var point_001 = new google.maps.Marker({
                    position: location_001,
                    title: "BEGINING at the Southeast corner of Section 22, Block 2, T. & P. RR. Co. Survey;"
                });
                point_001.setMap(map);             
                
                 var location_002={lat: 32.765967, lng: -98.396916} 
                 var point_002 = new google.maps.Marker({
                     position: location_002,
                     title: "THENCE with the South line of Section 22, South 84 deg. West 5,280 feet to its Southwest corner "
                 });
                 point_002.setMap(map); 

                 var location_003={lat: 32.770689, lng:-98.397506}  
                 var point_003 = new google.maps.Marker({
                     position: location_003,
                     title: "THENCE North 6 deg. West with the West Line of Section 22, 1733 feet to a stake for corner "
                 });
                 point_003.setMap(map); 
                
                 var location_004={lat: 32.769175, lng:-98.414626}  
                 var point_004 = new google.maps.Marker({
                     position: location_004,
                     title: "THENCE South 84 deg. West and parallel with the South line of Section 21 , 5280 feet to its West line;"
                });
                 point_004.setMap(map); 
                
                var location_005={lat: 32.793299, lng:-98.416774}

                var point_005 = new google.maps.Marker({
                    position: location_005,
                    title: "THENCE North 6 deg. West with the West line of Section 21, at 3547 feet passing the Northwest corner of Section 21 and the Southwest corner of Section 16, and continuing same course Nortb 6 deg. West an additional 5280 feet to the Northwest corner of Section l6;"
                });
                point_005.setMap(map); 
                
                var location_006={lat: 32.794836, lng:-98.399881}

                var point_006 = new google.maps.Marker({
                    position: location_006,
                    title: "THENCE North 84 deg. East with the North lin e of Sectiou 16, 5280 feet to its Northeast corner;"
                });
                point_006.setMap(map); 
                
                var location_007={lat: 32.800234, lng:-98.399206 }

                var point_007 = new google.maps.Marker({
                    position: location_007,
                    title: "THENCE North 6 deg. East with the East line of Section 16, 1980 feet to a corner set for the Northwest corner of tbe South 400 acres of Section 15;"
                });
                point_007.setMap(map); 
                
                var location_008={lat:  32.802053, lng:-98.378603}

                var point_008 = new google.maps.Marker({
                    position: location_008,
                    title: "THENCE North 84 deg. East and parallel with tbe North line of Section 15 across Section 15 a distance of 5280 feet crossing its East line and continuing the same course of North 84 deg. East an additional 1072 feet, more or less, to the Soutbeast corner of Monte Watson Cone's property out of Section 14;"
                });
                point_008.setMap(map); 

                
                var location_009={lat: 32.792879, lng:-98.377934 }

                var point_009 = new google.maps.Marker({
                    position: location_009,
                    title: "THENCE South 4 deg. East 15 at 3300 feet crossing the South line of Section 14 and the North line of Section 23 and continuing the same course "
                });
                point_009.setMap(map); 

                
                var location_010={lat: 32.785681, lng:-98.377034}

                var point_010 = new google.maps.Marker({
                    position: location_010,
                    title: "South 6 deg. East as additional 2640 feet to a corner on the South line of the N/2 of Section 23;"
                });
                point_010.setMap(map); 


                var location_011={lat: 32.785374, lng:-98.380510}
				
                var point_011 = new google.maps.Marker({
                    position: location_011,
                    title: "THENCE South 84 d eg. West with the South line of the N /2 of Section 23 a distance of 1072 feet, more or less, to the Southwest corner of the N/2 of Section 23;"
                });
                point_011.setMap(map); 
                
                var location_012={lat: 32.7781761, lng:  -98.379610} 

                var point_012 = new google.maps.Marker({
                    position: location_012,
                    title: "THENCE with the East line of Section 22 South 6 deg. East 2640 feet to the place of beginning;"
                });
                point_012.setMap(map);
				
				
				var location_013={lat: 32.782143, lng: -98.381603}
                var point_013 = new google.maps.Marker({
                    position: location_013,
					icon:'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
                    title: "Southeast corner of no 15"
                });
                point_013.setMap(map);
				var location_014={lat: 32.782395, lng: -98.378034}
                var point_014 = new google.maps.Marker({
                    position: location_014,
					icon:'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
                    title: "South 85 deg. 12 min. 24 sec. West 1099.00 feet."
                });
                point_014.setMap(map);
				var location_015={lat: 32.791353, lng:-98.378929}
                var point_015 = new google.maps.Marker({
                    position: location_015,
					icon:'http://maps.google.com/mapfiles/ms/icons/pink-dot.png',
                    title: "BEGINING at a spike set at a fence corner at the Northeast corner of said tract fot· the Northeast and beginning corner of this tract. Whence the Southeast corner of said Section No. 15 is called to bear South 04 deg. 47 min. 36 sec. East 3280.00 feet"
                });
                point_015.setMap(map);
				var location_016={lat: 32.775255, lng:-98.377321}
                var point_016 = new google.maps.Marker({
                    position: location_016,
					icon:'http://maps.google.com/mapfiles/ms/icons/pink-dot.png',
                    title: "THENCE South 04 d eg. 47 min. 36 sec. East 5893.12 feet with the East line of said tract set a spike at a fence corner for the Southeast corner of this tract."
                });
				point_016.setMap(map);
				
				var location_017={lat:32.774987 , lng:-98.380853}
                var point_017 = new google.maps.Marker({
                    position: location_017,
					icon:'http://maps.google.com/mapfiles/ms/icons/pink-dot.png',
                    title: "THENCE South 84 deg. 50 min. 58 sec. West 1088.34 feet along a fence, set a spike in the East line of said Section No. 22 for a corner of this tract."
                });
                point_017.setMap(map);
				var location_018={lat: 32.774362, lng:-98.381972}
                var point_018 = new google.maps.Marker({
                    position: location_018,
					icon:'http://maps.google.com/mapfiles/ms/icons/pink-dot.png',
                    title: "THENCE South 56 d eg. 25 min. 06 sec. West 415.79 feet set a s pike for a corner of this tract."
                });
                point_018.setMap(map);
				var location_019={lat: 32.763245, lng:-98.423723}
                var point_019 = new google.maps.Marker({
                    position: location_019,
					icon:'http://maps.google.com/mapfiles/ms/icons/pink-dot.png',
                    title: "THENCE South 72 deg. 26 min. 30 sec. West 13436.54 feet set a spike for the Southwest corner of this tract."
                });
                point_019.setMap(map);
				
				// var location_021={lat: 31.700339, lng:-104.237233}
                // var point_021 = new google.maps.Marker({
                    // position: location_021,
					// icon:'http://maps.google.com/mapfiles/ms/icons/pink-dot.png',
                    // title: "MF120243 Section 2, Abstract 6379"
                // });
                // point_021.setMap(map);
				// var location_022={lat: 31.700336, lng:-104.219295}
                // var point_022 = new google.maps.Marker({
                    // position: location_022,
					// icon:'http://maps.google.com/mapfiles/ms/icons/pink-dot.png',
                    // title: "MF120243 Section 2, Abstract 6379"
                // });
                // point_022.setMap(map);

				
				var roll_Line01=[location_001, location_002, location_003, location_004, location_005, location_006, location_007, location_008, location_009, location_010, location_011, location_012,];
			    var roll_Line02=[location_013, location_014, location_015];
			    var roll_Line03=[ location_015, location_016, location_017, location_018, location_019];

				var line01 = new google.maps.Polyline({
                    path: roll_Line01,
                    geodesic: true,
                    strokeColor: '#0000FF',
                    strokeOpacity: .7,
                    strokeWeight: 1
                  });
                  line01.setMap(map);
				  
				var line02 = new google.maps.Polyline({
                    path: roll_Line02,
                    geodesic: true,
                    strokeColor: '#76483E',
                    strokeOpacity: .7,
                    strokeWeight: 1
                  });
                  line02.setMap(map);
				  
				var line03 = new google.maps.Polyline({
                    path: roll_Line03,
                    geodesic: true,
                    strokeColor: '#D82121',
                    strokeOpacity: .7,
                    strokeWeight: 1
                  });
                  line03.setMap(map);
				  
			
            } 
        }
        water_points.draw();

       

    });
    


});