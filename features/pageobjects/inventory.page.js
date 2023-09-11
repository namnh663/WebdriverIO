import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get title() {
        return $('span.title');
    }

    get linkTwitter() {
        return $('li.social_twitter > a');
    }

    get linkFacebook() {
        return $('li.social_facebook > a');
    }

    get linkLinkedin() {
        return $('li.social_linkedin > a');
    }

    get firstItemName() {
        return $('#item_4_title_link > div.inventory_item_name');
    }

    get btnFirstItem() {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get secondItemName() {
        return $('#item_0_title_link > div.inventory_item_name');
    }

    get btnSecondItem() {
        return $('#add-to-cart-sauce-labs-bike-light');
    }

    get shoppingCartBadge() {
        return $('#shopping_cart_container > a > span.shopping_cart_badge');
    }

    get optionActive() {
        return $('span.select_container > span.active_option');
    }

    get btnSort() {
        return $('span.select_container > select.product_sort_container');
    }

    get inventories() {
        return $$('div.inventory_list > div > div.inventory_item_description > div > a > div.inventory_item_name');
    }

    get prices() {
        return $$('div.inventory_list > div > div.inventory_item_description > div.pricebar > div.inventory_item_price');
    }

    get buttons() {
        return $$('div.inventory_list > div > div.inventory_item_description > div.pricebar > button');
    }

    /**
     * Add all the item present in the inventory list.
     */
    async add() {
        const countBtn = await this.buttons.length;
        for (let i = 0; i < countBtn; i++) {
            const btnAdd = await $$('div.inventory_list > div > div.inventory_item_description > div.pricebar > button')[i];
            await btnAdd.click();
        }
    }

    /**
     * Sorts the elements in the dropdown list based on the given option.
     * 
     * @param {string} option - The value of the option to sort by.
     */
    async sort(option) {
        // Find the option element with the specified value
        const opts = await $('option[value="' + option + '"]');

        // Click the sort button
        await this.btnSort.click();

        // Click the option element to select it
        await opts.click();
    }

    /**
    * Retrieves the list of inventory items.
    * @returns {Promise<Array<string>>} The list of inventory items.
    */
    async getInventoryList() {
        const countInventory = await this.inventories.length;
        const inventoryItems = []
        for (let i = 0; i < countInventory; i++) {
            const inventoryElments = await $$('div.inventory_list > div > div.inventory_item_description > div > a > div.inventory_item_name')[i];
            inventoryItems.push(await inventoryElments.getText());
        }
        return inventoryItems;
    }

    /**
     * Retrieves the price list from the inventory items
     * @returns The list of prices
     */
    async getPriceList() {
        // Get the count of prices
        const countPrice = await this.prices.length;

        // Initialize arrays to store inventory items and prices
        const inventoryItems = [];
        const priceItems = [];

        // Loop through each price
        for (let i = 0; i < countPrice; i++) {
            // Get the inventory element
            const inventoryElments = await $$('div.inventory_list > div > div.inventory_item_description > div.pricebar > div.inventory_item_price')[i];

            // Get the text of the inventory element and remove the dollar sign
            inventoryItems.push(await inventoryElments.getText());
            inventoryItems[i] = inventoryItems[i].replace('$', '');

            // Convert the price to a number and add it to the priceItems array
            const numberArr = Number(inventoryItems[i]);
            priceItems.push(numberArr);
        }

        // Return the list of prices
        return priceItems;
    }

    /**
    * Sorts the given list of inventories in descending order.
    * @param {Array} list - The list of inventories to be sorted.
    * @returns The sorted list of inventories in descending order.
    */
    async sortInventoriesDesc(list) {
        const sortedList = [];
        for (let i = list.length - 1; i >= 0; i--) {
            sortedList.push(list[i]);
        }
        return sortedList;
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('inventory.html');
    }
}

export default new InventoryPage();
