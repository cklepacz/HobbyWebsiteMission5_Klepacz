$('#calculate').click(function () {
    let hours = $('#hours').val();
    let output = 0;

    if (hours <= 0) {
        alert("Error: Input a positive number greater than 0 only");
        $('#totalCost').text("Total Cost:");
        $('#hours').val('0');
        return;
    }
    else {
        if (hours > 0 && hours <= 2) {
            output = hours * 15;
        }
        else if (hours > 2 && hours <= 4) {
            output = hours * 30;
        }
        else if (hours > 4 && hours <= 8) {
            output = hours * 45;
        }
        else if (hours > 8) {
            let extraHours = hours - 8;
            output = ((hours - extraHours) * 45) + (extraHours * 50);
        }
    }

    $('#totalCost').text("Total Cost: $" + output);
});

$('#calculate2').click(function () {
    let hours = $('#hours2').val();
    let output = 0;

    if (hours <= 0) {
        alert("Error: Input a positive number greater than 0 only");
        $('#totalCost2').text("Total Cost:");
        $('#hours2').val('0');
        return;
    }
    else {
        if (hours > 0 && hours <= 2) {
            output = "FREE!";
        }
        else if (hours > 2 && hours <= 4) {
            output = "STILL FREE!";
        }
        else if (hours > 4 && hours <= 8) {
            output = "ABSOLUTELY FREE!";
        }
        else if (hours > 8) {
            output = "FREE! (though if you provided me dinner that'd be cool)";
        }
    }

    $('#totalCost2').text("Total Cost: " + output);
})