function Player(name) {
    this.name = name;
    this.score = 0;
    this.shots = 0;
    this.status = "";

    this.shoot = () => {
        this.status = "shoot";
        if (this.shots > 0) {
            this.shots -= 1;
            return true;
        }
        else
            return false;
    }

    this.load = () => {
        this.status = "load";
        this.shots += 1;
    }

    this.block = () => {
        this.status = "block";
    }

    this.shotgun = () => {
        this.status="shotgun";
        if (this.shots > 2) {
            this.shots -= 3;
            return true;
        }
        else
            return false;
    }

}