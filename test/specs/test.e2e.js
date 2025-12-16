import { browser } from '@wdio/globals'

describe('Notepad Testing', () => {
    it('should open Notepad++ and verify window', async () => {
        browser.pause(5000);
        // const window = await $('Window');
        // await window.waitForDisplayed({ timeout: 15000 });
        
        // const title = await window.getAttribute('Name');
        // expect(title).toContain('Notepad++');
        
        // const menuBar = await $('MenuBar');
        // await menuBar.click();
        
        // const fileMenu = await $('name=File');
        // await fileMenu.click();
        
        // const newMenuItem = await $('name=New Ctrl+N');
        // await newMenuItem.click();
    });
})