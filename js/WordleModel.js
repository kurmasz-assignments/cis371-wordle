/**********************************************************************
 * 
 * Model for a game of Wordle
 *
 **********************************************************************/
export default class WordleModel {

    #answer
    #maxAttempts
    #keyStatus

    constructor(answer_in, maxAttempts_in) {
        this.#answer = answer_in?.toUpperCase()
        this.#maxAttempts = maxAttempts_in

        // One idea for keeping track of which letters are used.
        this.#keyStatus = []
        'abcdefghijklmnopqrstuvwxyz'.split('').forEach((letter) => {
            this.#keyStatus[letter] = 'unused'
        })
    }

    enterClicked() {
        console.log('In WordleModel#enterClicked')
    }

    letterClicked(letter) {
        console.log(`In WordleModel#enterClicked(${letter})`)
        this.#keyStatus[letter] = 'clicked'
    }

    status() {
        return this.#keyStatus
    } // end status
}