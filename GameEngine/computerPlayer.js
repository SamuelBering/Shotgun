function ComputerPlayer(name) {

    this.__proto__ = new Player(name);

    this.makeMove = () => {

        let choice;

        if (this.shots > 2)
            choice = 3;
        else if (this.shots > 0)
            choice = Math.floor(Math.random() * 3);
        else
            choice = Math.floor(Math.random() * 2);

        if (choice == 0)
            this.load();
        else if (choice == 1)
            this.block();
        else if (choice == 2)
            this.shoot();
        else if (choice == 3)
            this.shotgun();

        return this.status;
    }

}