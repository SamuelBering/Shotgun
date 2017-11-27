function Graphics(container, userPlayer, computerPlayer) {

    this.container = container;
    this.userPlayer = userPlayer;
    this.computerPlayer = computerPlayer;

    let rowDiv = document.createElement("div");
    rowDiv.className = "row";
    this.rowDiv = rowDiv;

    let computerPlayerDiv = document.createElement("div");
    let userPlayerDiv = document.createElement("div");
    computerPlayerDiv.className = "col-sm-6";
    userPlayerDiv.className = "col-sm-6";

    let computerPlayerH3 = document.createElement("h3");
    let userPlayerH3 = document.createElement("h3");

    let computerPlayerTextNode = document.createTextNode("Computer player");
    let userPlayerTextNode = document.createTextNode("User player");
    computerPlayerH3.appendChild(computerPlayerTextNode);
    userPlayerH3.appendChild(userPlayerTextNode);

    computerPlayerDiv.appendChild(computerPlayerH3);
    userPlayerDiv.appendChild(userPlayerH3);

    let computerPlayerPanel = document.createElement("div");
    computerPlayerPanel.className = "panel panel-info";
    let userPlayerPanel = document.createElement("div");
    userPlayerPanel.className = "panel panel-info";

    let computerPlayerPanelHeading = document.createElement("div");
    computerPlayerPanelHeading.className = "panel-heading";
    computerPlayerPanelHeading.textContent = computerPlayer.name;
    let userPlayerPanelHeading = document.createElement("div");
    userPlayerPanelHeading.className = "panel-heading";
    userPlayerPanelHeading.textContent = userPlayer.name;

    let computerPlayerPanelBody = document.createElement("div");
    computerPlayerPanelBody.className = "panel-body";
    computerPlayerPanelBody.textContent = "Score: " + computerPlayer.score + "\u00A0\u00A0\u00A0\u00A0Shots: " + computerPlayer.shots
        + "\u00A0\u00A0\u00A0\u00A0Status: " + computerPlayer.status;
    this.computerPlayerPanelBody = computerPlayerPanelBody;

    let userPlayerPanelBody = document.createElement("div");
    userPlayerPanelBody.className = "panel-body";
    userPlayerPanelBody.textContent = "Score: " + userPlayer.score + "\u00A0\u00A0\u00A0\u00A0Shots: " + userPlayer.shots
        + "\u00A0\u00A0\u00A0\u00A0Status: " + userPlayer.status;
    this.userPlayerPanelBody = userPlayerPanelBody;

    computerPlayerPanel.appendChild(computerPlayerPanelHeading);
    computerPlayerPanel.appendChild(computerPlayerPanelBody);
    userPlayerPanel.appendChild(userPlayerPanelHeading);
    userPlayerPanel.appendChild(userPlayerPanelBody);


    let userPlayerLoadButton = document.createElement("button");
    userPlayerLoadButton.className = "btn btn-info gamebutton";
    userPlayerLoadButton.textContent = "Load";
    this.userPlayerLoadButton = userPlayerLoadButton;

    let userPlayerBlockButton = document.createElement("button");
    userPlayerBlockButton.className = "btn btn-warning gamebutton";
    userPlayerBlockButton.textContent = "Block";
    this.userPlayerBlockButton = userPlayerBlockButton;

    let userPlayerShootButton = document.createElement("button");
    userPlayerShootButton.className = "btn btn-success gamebutton";
    userPlayerShootButton.textContent = "Shoot";
    this.userPlayerShootButton = userPlayerShootButton;

    let userPlayerShotgunButton = document.createElement("button");
    userPlayerShotgunButton.className = "btn btn-danger gamebutton";
    userPlayerShotgunButton.textContent = "Shotgun";
    this.userPlayerShotgunButton = userPlayerShotgunButton;

    computerPlayerDiv.appendChild(computerPlayerPanel);
    userPlayerDiv.appendChild(userPlayerPanel);
    userPlayerDiv.appendChild(userPlayerLoadButton);
    userPlayerDiv.appendChild(userPlayerBlockButton);
    userPlayerDiv.appendChild(userPlayerShootButton);
    userPlayerDiv.appendChild(userPlayerShotgunButton);

    rowDiv.appendChild(computerPlayerDiv);
    rowDiv.appendChild(userPlayerDiv);

    this.show = () => {
        this.container.appendChild(this.rowDiv);
    }

    this.hide = () => {
        this.container.removeChild(this.rowDiv);
    }

    this.update = () => {
        this.computerPlayerPanelBody.textContent = "Score: " + this.computerPlayer.score + "\u00A0\u00A0\u00A0\u00A0Shots: "
            + this.computerPlayer.shots + "\u00A0\u00A0\u00A0\u00A0Status: " + this.computerPlayer.status;
        this.userPlayerPanelBody.textContent = "Score: " + this.userPlayer.score + "\u00A0\u00A0\u00A0\u00A0Shots: " + this.userPlayer.shots
            + "\u00A0\u00A0\u00A0\u00A0Status: " + this.userPlayer.status;

        if (this.userPlayer.shots > 2) {
            this.userPlayerShotgunButton.className = "btn btn-danger gamebutton";
            this.userPlayerShotgunButton.disabled = false;
        }
        else {
            this.userPlayerShotgunButton.className = "btn btn-danger gamebutton disabled";
            this.userPlayerShotgunButton.disabled = true;
        }

        if (this.userPlayer.shots > 0) {
            this.userPlayerShootButton.className = "btn btn-success gamebutton";
            this.userPlayerShootButton.disabled = false;
        }
        else {
            this.userPlayerShootButton.className = "btn btn-success gamebutton disabled";
            this.userPlayerShootButton.disabled = true;
        }


    }

    this.update();

    this.showMessage = (caption, message) => {

    }

}