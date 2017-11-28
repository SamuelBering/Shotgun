function Shotgun(graphics, userPlayer, computerPlayer, funcEndGame) {

    this.graphics = graphics;
    this.userPlayer = userPlayer;
    this.computerPlayer = computerPlayer;
    this.funcEndGame = funcEndGame;

    this.executeGameRound = () => {
        this.computerPlayer.makeMove();

        if (this.userPlayer.status == "shoot" && this.computerPlayer.status == "load") {
            this.userPlayer.score += 1;
            this.funcEndGame(true, this);
        }
        else if (this.computerPlayer.status == "shoot" && this.userPlayer.status == "load") {
            this.computerPlayer.score += 1;
            this.funcEndGame(false, this);
        }
        else if (this.userPlayer.status == "shotgun" && this.computerPlayer.status != "shotgun") {
            this.userPlayer.score += 1;
            this.funcEndGame(true, this);
        }
        else if (this.computerPlayer.status == "shotgun" && this.userPlayer.status != "shotgun") {
            this.computerPlayer.score += 1;
            this.funcEndGame(false, this);
        }

        this.graphics.update();
    }

    this.load = () => {
        this.userPlayer.load();
        this.executeGameRound();
    }

    this.block = () => {
        this.userPlayer.block();
        this.executeGameRound();
    }

    this.shoot = () => {
        this.userPlayer.shoot();
        this.executeGameRound();
    }

    this.shotgun = () => {
        this.userPlayer.shotgun();
        this.executeGameRound();
    }

    $(this.graphics.userPlayerLoadButton).click(this.load);
    $(this.graphics.userPlayerBlockButton).click(this.block);
    $(this.graphics.userPlayerShootButton).click(this.shoot);
    $(this.graphics.userPlayerShotgunButton).click(this.shotgun);

    this.run = () => {
        this.graphics.show();
    }

    this.quit = () => {
        this.graphics.hide();
    }
}