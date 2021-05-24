// Import react rendering modules.
import React from 'react'
import ReactDOM from 'react-dom'

/**
 * @name Data
 * @memberof React.Component
 */

class Data extends React.Component {

    /**
     * Render notification popup.
     * 
     * @name render
     * @return HTML code with special functions.
     */

    render() {

        // Init viewable notif.
        this.unHide()

        // Return initial viewable data.
        return (
            <div id="noif">

                {/* Copied! text class. */}
                <div className="item">Copied!</div>

                {/* Show which link was copied. */}
                <div className="link"></div>

                {/* Notification spacing. */}
                <div className="space"></div>

                {/* Countdown to notification close. */}
                <div className="timer"></div>

                {/* Force close before countdown ends. */}
                <div
                    onClick={_ => this.reHide()}
                    className="exit"> X </div>
            </div>

        )
    }

    /**
     * Show notification popup.
     * 
     * @name unHide
     * @return {Null}.
     */

    unHide() {
        // If user clicks 'copy' on the same page, return.
        if (document.getElementById('noif') && document.getElementById('noif').getElementsByClassName('link')[0].innerHTML === this.props.data) return

        // If user clicks 'copy' on another page, hide current notif, show new notif.
        if (document.getElementsByClassName('noif')[0].style.animation === `0.5s linear 0s 1 normal forwards running fade-in`) {
            this.reHide()
            return setTimeout(_ => this.unHide(), 500)
        }

        // Set notification animation.
        document.getElementsByClassName('noif')[0].style.animation = `0.5s fade-in linear forwards`

        // Set the link data once loaded.
        setTimeout(_ => document.getElementsByClassName('noif')[0].getElementsByClassName('link')[0].innerHTML = this.props.data, 500)

        // Hide after 7 seconds.
        this.timeout = setTimeout(_ => this.reHide(), 7 * 1000)

        // Countdown max start.
        let i = 5

        // Interval countdown (Set globally to force stop).
        this.countdown = setInterval(_ => {
            //  Get the timer class and replace the data.
            document.getElementsByClassName('noif')[0].getElementsByClassName('timer')[0].innerHTML = `${i} second(s)`

            // Countdown logic.
            if (i === 0) stopit()
            else i--
        }, 1000)

        // Hide if countdown ends.
        function stopit() { try { clearInterval(this.countdown) } catch (e) { } }
    }

    /**
     * Hide notification popup.
     * 
     * @name reHide
     * @return {Null}.
     */

    reHide() {
        // Try to stop countdown (so it does not interfere with future countdowns) and catch any issues.
        try { clearInterval(this.countdown) } catch (e) { }

        // Try to stop timeout (so it does not interfere with future timeouts) and catch any issues.
        try { clearTimeout(this.timeout) } catch (e) { }

        // Set animation to notification hide.
        document.getElementsByClassName('noif')[0].style.animation = `0.5s fade-out linear forwards`

        // Clear dynamic fields (Timeout so it does not interfere with element creation).
        setTimeout(_ => {
            document.getElementsByClassName('noif')[0].getElementsByClassName('timer')[0].innerHTML = ``
            document.getElementsByClassName('noif')[0].getElementsByClassName('link')[0].innerHTML = ``
        }, 500)
    }
}

// Render the 'Data' class where index 0 of the class element 'menu' exists on the webpage.
let Notif = url => ReactDOM.render(<Data data={url} />, document.getElementsByClassName('noif')[0])

// Export only the 'Menu' function (All other data has to be locally called).
export default Notif
