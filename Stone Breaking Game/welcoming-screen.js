class WelcomingScreen {
    constructor(node) {
        this.playButton = node;
        this.addPlayingListener = this.addPlayingListener.bind(this);
    }

    addPlayingListener(startGame){
        this.playButton.addEventListener('click', function () {
            //Hide the welcoming screen
            let welcomeScreen = document.getElementById('welcome');
            welcomeScreen.classList.add('hide');

            //Show the main
            let mainScreen = document.getElementById('main');
            mainScreen.classList.remove('hide');

            startGame();
        });
    }
}