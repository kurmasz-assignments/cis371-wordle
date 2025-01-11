/*********************************************************************************
 * 
 * Express server to serve Wordle.
 *
 * 1. This server sets up one route: Any route that begins with "wordle" 
 *    will render the corresponding .ejs file contained in the "views" directory. 
 *    For example, the route "wordle_v1" will render "view/wordle_v1.ejs"
 * 
 * 2. Query string parameters "maxAttempts", "answer", and "guesses" will be
 *    passed to the .ejs file as local variables. If "guesses" is a 
 *    comma-separated list, it will be passed as an array of strings.
 * 
 *    NOTE: You cannot pass both "answer" and "guesses". ("guesses" is for 
 *    part 2, "answer" is for part 3.)
 * 
 * 3. The js directory is set up as "static".  That means that any file in 
 *    "js" will be served "as-is".
 * 
 ******************************************************************************/

/* Import the express npm module */
const express = require('express')

/* Import the file system module */
const fs = require('fs')

/* Instantiate a server object*/
const app = express()
const port = 3000

/* Tell the server to use EJS by default */
app.set('view engine', 'ejs')

app.use(express.static('js'))
app.use(express.static('css'))

/* If the route/path begins with "wordle", then look for an .ejs file of the same name */ 
app.get(/^\/wordle(.*)$/, (req, res) => {
    console.log(`Requested path: ${req.path}`)

    /* Use a default maxAttempts of 6 unless the query string contains a different, valid value */
    let maxAttempts = 6
    if (req.query.maxAttempts !== undefined && parseInt(req.query.maxAttempts)) {
        maxAttempts = parseInt(req.query.maxAttempts)
    }

    let qParams = {maxAttempts}   // short-cut for {maxAttempts: maxAttempts}
    if (req.query.answer !== undefined) {
        qParams.answer = req.query.answer
    } else if (req.query.guesses !== undefined) {
    /* Use the list of guesses, if present. There are two ways we can 
       enter this array of values in the query string:
       1. A single string with the words separated by commas
           http://localhost:3000/wordle2?guesses=first,quiet,water
       2. Multiple guesses parameters
           http://localhost:3000/wordle2?guesses=first&guesses=quiet&guesses=water 
    */
        if (Array.isArray(req.query.guesses)) {
            // If the parameter is an array, just use that array.
            qParams.guesses = req.query.guesses 
        } else if (typeof req.query.guesses === 'string') {
            // If the parameter is a string, split it at the commas into an array
            qParams.guesses = req.query.guesses.split(',')
        }
    } else {
        /* Use the default of "guess" if neither answer nor guesses given. */
        qParams.guesses = ['guess']
    }

    // remove the leading slash
    const path = req.path.slice(1)
    const ejsFile = `views/${path}.ejs`
    if (fs.existsSync(ejsFile)) {
        console.log(qParams)
        res.render(`${path}`, qParams)
    } else {
        res.send(`Unknown Wordle version: ${req.path}`)
    }    
})

/* Launch the server */
app.listen(port, () => console.log(`Example app listening on port ${port}!`))