/**********************************************************************
 * 
 * Model for a game of Wordle
 *
 **********************************************************************/

import WordleModel from './WordleModel.js'
import WordleView from './WordleView.js'
import WordleController from './WordleController.js'

// Grab game parameters from the query string
let params = (new URLSearchParams(new URL(window.location).search))
let maxAttempts = params.get('maxAttempts')
let answer = params.get('answer')

// Set up MVC
let model = new WordleModel(answer, maxAttempts)
let view = new WordleView()
new WordleController(model, view)