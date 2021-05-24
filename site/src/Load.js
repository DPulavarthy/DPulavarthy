// Import react rendering modules.
import React from 'react'
import ReactDOM from 'react-dom'

/**
 * @name Data
 * @memberof React.Component
 */

class Data extends React.Component {

    /**
     * Render preloader.
     * 
     * @name render
     * @return HTML code with preloader data.
     */

    render() {

        // If param 'true' then hide preloader.
        if (this.props.data) this.hide()

        // Return HTML data for preloader view.
        return (
            <div id="load">
                <div id="image"></div>
                <div id="logo"></div>
            </div>
        )
    }

    /**
     * Hide preloader.
     * 
     * @name render
     * @return {Null}.
     */

    hide() {
        Object.mergify(document.getElementsByClassName(`load`)[0].style, { opacity: 0, pointerEvents: `none`, transitionDuration: `1s`, zIndex: -1 })
    }
}

// Render the 'Data' class where index 0 of the class element 'load' exists on the webpage.
let Load = load => ReactDOM.render(<Data data={load} />, document.getElementsByClassName('load')[0])

// Export only the 'Load' function (All other data has to be locally called).
export default Load
