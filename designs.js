
//Appends new rows and columns to pixel_canvas table

function makeGrid(totalHeight, totalWidth) {
    for(let i = 0; i < totalHeight; i++) {
        $("#pixel_canvas").append("<tr></tr>");
    }
    for(let i = 0; i < totalWidth; i++) {
        $("#pixel_canvas").find("tr").append("<td></td>");
    }
}

//Global variables

let totalHeight = $("#input_height");
let totalWidth = $("#input_width");

// When size is submitted by the user, call makeGrid and listen for clicks...
    
$("#sizePicker").submit(function(event) {
    event.preventDefault();
    $("#pixel_canvas").empty();
    makeGrid(Number(totalHeight.val()), Number(totalWidth.val()));
    $("td").click(function(event) {
        var color = $("#colorPicker").val();
        $(this).css("background-color", color); 
    });
});
