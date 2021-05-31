// Import SCSS files.
import './scss/_main.scss'
import './scss/_view.scss'

// Import webpage files.
import Menu from './Menu'
import View from './View'
import Nav from './Nav'
import Load from './Load'
import Notif from './Notif'

// Import 'axios' for web requests.
import fetch from 'node-fetch'

// Init preloader.
Load()

/**
 * This function merges multiple objects into one.
 * 
 * @name mergify
 * @param {Object} [main] Master object (All other objects merge into this).
 * @param {Array} [subs] Array of objects to merge into `main`.
 * @return {Object} Master object (`main`) with `subs` merged.
 */

Object.mergify = (main, ...subs) => {
    if (typeof main !== `object` || main === null) throw new Error(`Must pass an object type data`)
    for (let obj of subs) if (typeof obj !== `object` || obj === null) throw new Error(`Must pass an object type data`)
    for (let obj of subs) for (let attrname in obj) main[attrname] = obj[attrname]
    return main
}

/**
 * This function checks if the passed param is an array and if it has at least 1 element.
 * 
 * @name exists
 * @param {array} input Likely an array but possible for other data types, the data that needs to be checked.
 * @return {boolean} true: input param is an array and has at least 1 element, false: input param is not an array or is an array but with no elements.
 */

Array.exists = input => Array.isArray(input) && input.some(e => e)

// Merging 'global' + SVG data.
Object.mergify(global, {

    // Record website load times.
    Load: { init: new Date().getTime() },

    // Link icon SVG data.
    Link: {
        p1: `M476.853,35.148c-46.864-46.864-122.842-46.864-169.706-0.001L206.853,135.441c-48.475,48.477-43.987,125.717,0,169.706c7.366,7.366,15.516,13.372,24.122,18.305l18.305-18.305c12.006-12.008,7.78-26.045,7.564-36.174c-2.635-1.868-5.198-3.887-7.564-6.253c-22.573-22.571-23.588-61.265,0-84.853c3.503-3.503,98.166-98.166,100.292-100.292c23.399-23.399,61.454-23.399,84.853,0c23.399,23.399,23.399,61.454,0,84.853l-66.293,66.293c1.917,10.607,13.422,35.733,7.504,77.181c0.289-0.284,0.635-0.467,0.923-0.754l100.294-100.294C523.715,157.99,523.715,82.012,476.853,35.148z`,
        p2: `M312.918,199.081c-7.365-7.366-15.516-13.372-24.12-18.305l-18.305,18.305c-12.008,12.006-7.782,26.043-7.566,36.172c2.637,1.868,5.2,3.887,7.566,6.253c22.573,22.573,23.588,61.265,0,84.853c-3.511,3.511-106.015,106.015-108.066,108.066c-23.399,23.399-61.454,23.399-84.853,0c-23.399-23.399-23.399-61.454,0-84.853l74.067-74.067c-1.917-10.607-13.423-35.733-7.504-77.181c-0.289,0.284-0.637,0.469-0.925,0.756L35.147,307.147c-46.862,46.864-46.862,122.842,0,169.706c46.864,46.862,122.841,46.862,169.705,0l108.066-108.066C360.494,321.211,357.894,244.056,312.918,199.081z`
    },

    // New icon SVG data.
    New: {
        p1: `M181.333,309.333c-3.357,0-6.519-1.581-8.533-4.267L128,245.333v53.333c0,5.891-4.776,10.667-10.667,10.667s-10.667-4.776-10.667-10.667v-85.333c0-5.891,4.776-10.667,10.667-10.667c3.357,0,6.519,1.581,8.533,4.267l44.8,59.733v-53.333c0-5.891,4.776-10.667,10.667-10.667c5.891,0,10.667,4.776,10.667,10.667v85.333c-0.003,4.589-2.942,8.662-7.296,10.112C183.618,309.146,182.48,309.333,181.333,309.333z`,
        p2: `M266.667,309.333H224c-5.891,0-10.667-4.776-10.667-10.667v-85.333c0-5.891,4.776-10.667,10.667-10.667h42.667c5.891,0,10.667,4.776,10.667,10.667c0,5.891-4.776,10.667-10.667,10.667h-32v64h32c5.891,0,10.667,4.776,10.667,10.667C277.333,304.558,272.558,309.333,266.667,309.333z`,
        p3: `M266.667,266.667H224c-5.891,0-10.667-4.776-10.667-10.667c0-5.891,4.776-10.667,10.667-10.667h42.667c5.891,0,10.667,4.776,10.667,10.667C277.333,261.891,272.558,266.667,266.667,266.667z`,
        p4: `M373.333,309.333c-4.597,0.006-8.681-2.934-10.133-7.296L352,268.395l-11.2,33.643c-1.283,4.66-5.726,7.727-10.539,7.275c-4.738-0.18-8.788-3.465-9.941-8.064l-21.333-85.333c-1.426-5.72,2.056-11.513,7.776-12.939c5.72-1.426,11.513,2.056,12.939,7.776l12.437,49.792l9.749-29.248c2.535-5.591,9.122-8.068,14.713-5.533c2.454,1.113,4.42,3.079,5.533,5.533l9.749,29.248l12.437-49.792c1.426-5.72,7.218-9.202,12.939-7.776c5.72,1.426,9.202,7.218,7.776,12.939l-21.333,85.333c-1.153,4.599-5.204,7.884-9.941,8.064L373.333,309.333z`
    },

    // External Icon SVG data.
    External: {
        p1: `M254.812,140.713h-20c-4.142,0-7.5,3.358-7.5,7.5v91.186c0,4.84-3.939,8.778-8.779,8.778H43.776c-4.839,0-8.775-3.938-8.775-8.778V64.645c0-4.841,3.936-8.78,8.775-8.78h95.855c4.142,0,7.5-3.358,7.5-7.5v-20c0-4.142-3.358-7.5-7.5-7.5H43.776c-24.138,0-43.775,19.64-43.775,43.78v174.755c0,24.14,19.638,43.778,43.775,43.778h174.756c24.14,0,43.779-19.639,43.779-43.778v-91.186C262.312,144.071,258.954,140.713,254.812,140.713z`,
        p2: `M275.677,0h-79.553c-4.142,0-7.5,3.358-7.5,7.5v20c0,4.142,3.358,7.5,7.5,7.5h27.304L120.683,137.743c-2.929,2.929-2.929,7.677,0,10.607l14.142,14.143c1.407,1.407,3.314,2.197,5.304,2.197c1.989,0,3.897-0.79,5.303-2.197L248.177,59.748v27.303c0,4.142,3.358,7.5,7.5,7.5h20c4.142,0,7.5-3.358,7.5-7.5V7.5C283.177,3.358,279.819,0,275.677,0z`
    },

    /**
     * Globally access notification and copy to clipboard.
     * 
     * @name Notif
     * @return {Null}.
     * @usage global.Notif()
     */

    Notif: url => {
        navigator.clipboard.writeText(url)
        Notif(url)
    },

    /**
     * Get the status message given by the API.
     * 
     * @name statusFormat
     * @return {String} Modified API data for status message.
     * @usage global.StatusFormat()
     */

    StatusFormat: _ => {
        // If API shows offline, return offline.
        if (global.Data?.presence?.status === `offline`) return `Currently offline.`

        // Else return the status and platform.
        else return `Currently ${global.Data?.presence?.status} on ${platform()}.`

        /**
         * Get the platform active from the API.
         * 
         * @name platform
         * @return {String} The platform active from the API data, favoring in this order (Desktop, Mobile, Website).
         */

        function platform() {
            if (global.Data?.presence?.client?.desktop) return `desktop` // If desktop.
            else if (global.Data?.presence?.client?.mobile) return `mobile` // If mobile.
            else return `web` // Fallback to web, since the user is online somwhere.
        }
    }
})

// Functions to find out where the user is trying to go.
let [get, redir, viewPage] = [

    /**
     * Function to check if a path exists.
     * 
     * @name get
     * @param {String} [path] The path of the website URL.
     * @return {String | Null} Return a string if the path exists beyond the root '/' and return 'null' otherwise.
     */

    path => path === `/` ? null : path.slice(1),

    /**
     * Redirect webpage to proper URL.
     * 
     * @name redir
     * @param {String} [hash] The page from the path that the user wishes to go to.
     * @return {Null} No value is returned since the function redirects the web page.
     */

    hash => window.location.href = `${window.location.origin}/#${hash}`
]

/**
 * Redirect tab if user changes URL hash.
 * 
 * @name window.onhashchange
 * @return {Null}.
 */

window.onhashchange = () => View(window.location.hash?.slice(1))

/**
 * Hide preloaer when the website is loaded.
 * 
 * @name window.onload
 * @return {Null}.
 */

window.onload = () => Load(true)

// If there is no path and no hash (User goes to main website URL), direct to default tab.
if (!get(window.location.pathname) && !window.location.hash) viewPage = `profile`

// Check for path, if exists: redirect to tab, does no exist: check for hash and in the impossible case that no hash exists, go to default tab.
else if (get(window.location.pathname)) redir(get(window.location.pathname))
else viewPage = window.location.hash?.slice(1) ?? `profile`


// Use 'axios' to request data for 'Kurasad' from custom API.
fetch(`https://api.kurasad.dev/status/476812566530883604`)

    // Then get the data from the request.
    .then(res => res.json())

    // Then run functions to load the webpage.
    .then(body => {

        // Set the returned data to a global variable.
        global.Data = body.data

        // Load time calculator.
        global.Load.data = new Date().getTime()

        // Load web menu.
        Menu()

        // Load overlay nav (Not used in all cases).  
        Nav()

        // Open the page declared by the if-statements.
        View(viewPage)
    })

// 🔒 This is protected code, see https://kurasad.dev/terms for more information.
