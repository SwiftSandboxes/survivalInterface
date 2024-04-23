$('#tileset').html('Hello this is fancy JS.');

$(function() {
    var mapArray = [];
    var mapSizeX = 32;
    var mapSizeY = 16;

    var mapContainer = $("<div></div>");

    for(let y = 0; y < mapSizeY; y++) {
        var mapRow = $("<div></div>");
        for(let x = 0; x < mapSizeX; x++) {
            var mapCell = $("<div>" + "y: " + y + ", x:" + x + "</div>");
            
            var cellSettings = {
                "tileType": "grass"
            };
            mapArray[y,x] = cellSettings;
            
            mapRow.append(mapCell);
        }
        mapContainer.append(mapRow);
    }
    $('#tileset').append(mapContainer);
});