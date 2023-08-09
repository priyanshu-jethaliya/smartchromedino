var obstacle_count;
var speed;
var auto_mode = 0;

function handleAutoSelection() {
    var autoRadio = document.getElementById("auto");
    var obstaclesRadioButtons = document.querySelectorAll('input[name="obstacles"]');
    var speedRadioButtons = document.querySelectorAll('input[name="speed"]');
    
    if (auto_mode === 1) {
        autoRadio.checked = false;
        auto_mode = 0;
        
        // Set obstacle_count to 2 and speed to 1 when "Auto" is selected
        obstacle_count = 2;
        speed = 1;
        
        // Deselect other options
        for (var i = 0; i < obstaclesRadioButtons.length; i++) {
            obstaclesRadioButtons[i].checked = false;
        }
        
        for (var i = 0; i < speedRadioButtons.length; i++) {
            speedRadioButtons[i].checked = false;
        }
    } else {
        auto_mode = 1;
        
        // Disable obstacle and speed options when "Auto" is selected
        for (var i = 0; i < obstaclesRadioButtons.length; i++) {
            obstaclesRadioButtons[i].disabled = true;
        }
        
        for (var i = 0; i < speedRadioButtons.length; i++) {
            speedRadioButtons[i].disabled = true;
        }
    }
    
    // Enable the Start button
    enableStartButton();
}

function setObstacleCount(count) {
    obstacle_count = count;
    auto_mode = 0;
    
    // Enable the Start button
    enableStartButton();
}

function setSpeed(option) {
    speed = option;
    auto_mode = 0;
    
    // Enable the Start button
    enableStartButton();
}

function enableStartButton() {
    var startButton = document.getElementById("startButton");
    var playGameRadio = document.getElementById("play");
    var obstaclesRadioButtons = document.querySelectorAll('input[name="obstacles"]');
    var speedRadioButtons = document.querySelectorAll('input[name="speed"]');
    
    if (playGameRadio.checked) {
        // Enable obstacle and speed options
        for (var i = 0; i < obstaclesRadioButtons.length; i++) {
            obstaclesRadioButtons[i].disabled = false;
        }
        
        for (var i = 0; i < speedRadioButtons.length; i++) {
            speedRadioButtons[i].disabled = false;
        }
        
        // Check if both obstacle and speed options are selected
        var isObstacleSelected = false;
        var isSpeedSelected = false;
        
        for (var i = 0; i < obstaclesRadioButtons.length; i++) {
            if (obstaclesRadioButtons[i].checked) {
                isObstacleSelected = true;
                break;
            }
        }
        
        for (var i = 0; i < speedRadioButtons.length; i++) {
            if (speedRadioButtons[i].checked) {
                isSpeedSelected = true;
                break;
            }
        }
        
        if (isObstacleSelected && isSpeedSelected) {
            startButton.disabled = false;
        } else {
            startButton.disabled = true;
        }
    } else if (auto_mode === 1) {
        // Enable the Start button for "Auto" mode
        startButton.disabled = false;
    } else {
        // Deselect and disable obstacle and speed options
        for (var i = 0; i < obstaclesRadioButtons.length; i++) {
            obstaclesRadioButtons[i].checked = false;
            obstaclesRadioButtons[i].disabled = true;
        }
        
        for (var i = 0; i < speedRadioButtons.length; i++) {
            speedRadioButtons[i].checked = false;
            speedRadioButtons[i].disabled = true;
        }
        
        startButton.disabled = true;
    }
}

function redirectToOtherPage() {
    // Redirect to the other page only if options are selected
    
    if ((obstacle_count !== undefined && speed !== undefined) || auto_mode === 1) {
        // var url = "index.html";
        var url = "index.html" + "?obstacle_count=" + obstacle_count + "&speed=" + speed + "&auto_mode=" + auto_mode;
        
        if (auto_mode === 1) {
            obstacle_count = 2;
            speed = 1;
            url = "/my-link/"
        }
        
        // url += "?obstacle_count=" + obstacle_count + "&speed=" + speed + "&auto_mode=" + auto_mode;
        
        window.open(url, "_blank");
    } else {
        alert("Please select options before starting.");
    }
}