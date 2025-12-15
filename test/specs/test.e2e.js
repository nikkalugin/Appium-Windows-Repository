import { browser } from '@wdio/globals'

describe('ShareX Testing', () => {
    it('should print application title', async () => {
        console.log('Hello', await browser.pause(20000), 'opened ShareX!')
    });
})

