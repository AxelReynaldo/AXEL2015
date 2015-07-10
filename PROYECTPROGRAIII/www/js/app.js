var Latitude;
var Longitude;
var onSuccess = function(position) {

        Latitude=position.coords.latitude;
        Longitude=position.coords.longitude;     
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

