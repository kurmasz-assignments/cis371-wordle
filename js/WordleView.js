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

        // Update the class list of any clicked letters
        for (const letter in status) {
            const box = document.getElementById(`key-${letter}`)      

            // For now, box may be undefined because the demo view doesn't contain all the letters.
            if (box) {
                box.className = `letterkey ${status[letter]}`            
            }
        }       
    } // end update
} // end class