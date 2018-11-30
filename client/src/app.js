import EventMgr from './event-mgr'

class App {
    constructor() {
        this.eventMgr = new EventMgr()
    }

    start() {
        window.app = this
    }

}

export default App