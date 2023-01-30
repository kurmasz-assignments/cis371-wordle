/**********************************************************************
 * 
 * Controller for a game of Wordle
 *
 **********************************************************************/
export default class WordleController {

    constructor(model, view) {
        this.model = model
        this.view = view
        this.view.onLetterClicked((l) => this.letterClicked(l))
        this.view.onEnterClicked(() => this.enterClicked())
    }

    enterClicked() {
        console.log('You clicked "Enter".')
        this.model.enterClicked()
        this.view.update(this.model.status())
    }

    letterClicked(letter) {
        console.log('You clicked on ' + letter)
    }
}