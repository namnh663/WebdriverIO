import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'

import OptionData from '../data/expect/opt.data.json' assert { type: "json" };
import LoginPage from '../features/pageobjects/login.page.js';
import InventoryPage from '../features/pageobjects/inventory.page.js';

const InventoryListData = [
    'Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt',
    'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)'
]

const PriceListData = [7.99, 9.99, 15.99, 15.99, 29.99, 49.99]

const pages = {
    login: LoginPage,
    inventory: InventoryPage
}

Given(/^I am on the (.+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with valid credentials$/, async () => {
    await LoginPage.login('standard_user', 'secret_sauce')
});

When(/^I login with (.+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

When(/^I login with only (.+)$/, async (password) => {
    await LoginPage.loginWithoutUsername(password)
});

When(/^I login only have (.+)$/, async (username) => {
    await LoginPage.loginWithoutPassword(username)
});

When(/^I login without username and password$/, async () => {
    await LoginPage.loginWithoutUsernameAndPassword()
});

When(/^I add items to the cart$/, async () => {
    await InventoryPage.add()
    await InventoryPage.getInventoryList()
});

When(/^I select (.+) option in filter$/, async (option) => {
    await InventoryPage.sort(option)
});

Then(/^I should see (.+) title$/, async (message) => {
    await expect(InventoryPage.title).toBeExisting()
    await expect(InventoryPage.title).toHaveTextContaining(message)
});

Then(/^I should see an (.+)$/, async (message) => {
    await expect(LoginPage.errMessage).toBeExisting()
    await expect(LoginPage.errMessage).toHaveTextContaining(message)
});

Then(/^the cart badge should equal (\d)$/, async (number) => {
    await expect(InventoryPage.shoppingCartBadge).toBeExisting()
    await expect(InventoryPage.shoppingCartBadge).toHaveText(number)
});

Then(/^the inventory should be displayed in ascending order of name$/, async () => {
    const inventoryList = await InventoryPage.getInventoryList();
    await expect(InventoryPage.optionActive).toHaveText(OptionData.NAME_AZ)
    await expect(inventoryList).toEqual(InventoryListData)
});

Then(/^the inventory should be displayed in descending order of name$/, async () => {
    const inventoryList = await InventoryPage.getInventoryList()
    const sortedList = await InventoryPage.sortInventoriesDesc(InventoryListData)
    await expect(InventoryPage.optionActive).toHaveText(OptionData.NAME_ZA)
    await expect(inventoryList).toEqual(sortedList)
});

Then(/^the inventory should be displayed in ascending order of price$/, async () => {
    const priceList = await InventoryPage.getPriceList()
    await expect(InventoryPage.optionActive).toHaveText(OptionData.PRICE_LOW_HIGH)
    await expect(priceList).toEqual(PriceListData)
});

Then(/^the inventory should be displayed in descending order of price$/, async () => {
    const priceList = await InventoryPage.getPriceList()
    const sortedList = await InventoryPage.sortInventoriesDesc(PriceListData)
    await expect(InventoryPage.optionActive).toHaveText(OptionData.PRICE_HIGH_LOW)
    await expect(priceList).toEqual(sortedList)
});

Then(/^href twitter should be (.+)$/, async (link) => {
    await expect(InventoryPage.linkTwitter).toHaveHref(link)
});

Then(/^href linkedin should be (.+)$/, async (link) => {
    await expect(InventoryPage.linkLinkedin).toHaveHref(link)
})

Then(/^href facebook should be (.+)$/, async (link) => {
    await expect(InventoryPage.linkFacebook).toHaveHref(link)
})