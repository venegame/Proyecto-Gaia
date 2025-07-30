function addDarkmodeWidget() {
    const options = {
        bottom: '64px',
        right: '32px',
        time: '0.5s',
        label: '🌓',
    }
    const darkmode = new Darkmode(options)
    darkmode.showWidget()
}
window.addEventListener('load', addDarkmodeWidget);