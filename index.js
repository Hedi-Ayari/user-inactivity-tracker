class UserInactivityTracker {
    constructor(timeout, callback) {
        this.timeout = timeout;
        this.callback = callback;
        this.inactivityTimer = null;
        this.events = ['mousemove', 'keydown', 'scroll', 'touchstart'];
        this.startTracking();
    }

    resetTimer() {
        clearTimeout(this.inactivityTimer);
        this.inactivityTimer = setTimeout(this.callback, this.timeout);
    }

    startTracking() {
        this.events.forEach(event => {
            window.addEventListener(event, this.resetTimer.bind(this));
        });
        this.resetTimer();
    }

    stopTracking() {
        this.events.forEach(event => {
            window.removeEventListener(event, this.resetTimer.bind(this));
        });
        clearTimeout(this.inactivityTimer);
    }
}

module.exports = UserInactivityTracker;
