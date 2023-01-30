/**********************************************************************
 * 
 * View for a game of Wordle
 *
 **********************************************************************/
export default class WordleView {

    constructor() { }

    onEnterClicked(callback) {
        let enter = document.getElementById('enterkey')
        enter.addEventListener('click', () => callback())
    }

    onLetterClicked(callback) {
        let letters = document.getElementsByClassName('letterkey')
        for (let i = 0; i < letters.length; ++i) {
            letters[i].addEventListener('click', () => {
                let regex = /key-(.)/
                let [, letter] = letters[i].id.match(regex)
                callback(letter)
            })
        } // end for
    } // end onLetterClicked

    update(status) {
        console.log('WordleView#update updating the view based on the model\'s status.')
        console.log(status)
    } // end update
} // end class