import { Given, When, Then } from '@wdio/cucumber-framework';
import chai from "chai"


Given(/^Google page is opened$/, async function () {
    console.log(`Before opening browser...`);
    await browser.url('https://www.google.com')
    await browser.pause(7000)
    console.log(`After opening browser...`);
})

When(/^Search with (.*)$/, async function (SearchItem) {
    console.log(`>> SearchItem: ${SearchItem}`);
    let ele = await $(`[name=q]`)
    await ele.setValue(SearchItem)
    await browser.keys("Enter")
})

Then(/^Click on the first search result$/, async function () {
    let ele = await $(`<h3>`)
    await ele.click()
})

Then(/^URL should match (.*)$/, async function (expectedURL) {
    console.log(`>> expectedURL: ${expectedURL} `);
    let url = await browser.getUrl();
    chai.expect(url).to.equal(expectedURL);
})
/**
 * Web Interactions
 */
Given(/^A web page is opened$/, async function () {
    await browser.url("")
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 })
    await browser.maximizeWindow()
})