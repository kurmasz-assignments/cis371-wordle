import WordleModel from '../js/WordleModel.js'

describe('WordleModel', () => {
    describe('#letterClicked', () => {

        it('sets status of clicked letter to "clicked"', () => {
            const model = new WordleModel()
            model.letterClicked('k')
            const status = model.status()

            for (const letter in status) {
                if (letter === 'k') {
                    expect(status[letter]).toEqual('clicked')
                } else {
                    expect(status[letter]).toEqual('unused')
                }
            }
        })
    })
})