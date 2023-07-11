var currentLocations = [1, 1, 1, 1];
var totalStations = 40;
var currentSubwayIndex = 0;
var intervalId;

function moveSubways() {
  intervalId = setInterval(function() {
    currentLocations[currentSubwayIndex]++;
    if (currentLocations[currentSubwayIndex] > totalStations) {
      currentLocations[currentSubwayIndex] = 1;
    }
    updateSubwayLocations();
    currentSubwayIndex = (currentSubwayIndex + 1) % 4;
  }, 4000);
}

function updateSubwayLocations() {
  for (var i = 1; i <= 4; i++) {
    var subway = document.getElementById('subway' + i);
    subway.innerText = 'Subway ' + i + ': Station ' + currentLocations[i-1];
  }
}

function showNearestSubwayStops(stationIndex) {
  var nearestStops = [];
  var minStops = Number.MAX_SAFE_INTEGER;
  
  for (var i = 0; i < 4; i++) {
    var stops = Math.abs(currentLocations[i] - stationIndex);
    if (stops < minStops) {
      nearestStops = [i + 1];
      minStops = stops;
    } else if (stops === minStops) {
      nearestStops.push(i + 1);
    }
  }

  var outputDiv = document.getElementById('output');
  outputDiv.innerText = 'Nearest subway(s) to Station ' + stationIndex + ': ' + nearestStops.join(', ');
}

moveSubways();