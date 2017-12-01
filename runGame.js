function endGame(won, shotgunGame) {
    let title = "";
    if (won)
        title = "Congratulations, you have WON!!";
    else
        title = "Sorry, you have lost...";

    showBSModal({
        title: title,
        body: "Do you want to continue playing?, click 'Continue' or 'Quit'",
        size: "small",
        actions: [{
            label: 'Continue',
            cssClass: 'btn-success',
            onClick: function (e) {
                $(e.target).parents('.modal').modal('hide');
            }
        }, {
            label: 'Quit',
            cssClass: 'btn-danger',
            onClick: function (e) {
                $(e.target).parents('.modal').modal('hide');
                shotgunGame.quit();
                gameContainer.textContent = "Thanks for playing Shotgun by Samuel Bering.";
            }
        }]
    });
}

function getUserName(funcStartGame) {
    showBSModal({
        title: "Welcome to Shotgun!",
        body: "Enter your name: <br/><input type='text' id='userName' />",
        size: "small",
        actions: [{
            label: 'Ok',
            cssClass: 'btn-success',
            onClick: function (e) {
                let userName = $(e.target).closest('.modal-content').find('#userName')[0].value;
                $(e.target).parents('.modal').modal('hide');
                funcStartGame(userName);
            }
        }]
    });
}

function startGame(userName) {

    let userPlayer = new Player(userName);

    let computerPlayer = new ComputerPlayer("Simone");

    let gameContainer = document.getElementById("gameContainer");

    let graphics = new Graphics(gameContainer, userPlayer, computerPlayer);

    let shotgunGame = new Shotgun(graphics, userPlayer, computerPlayer, endGame)

    shotgunGame.run();
}

getUserName(startGame);

