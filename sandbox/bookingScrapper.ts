

import { ApifyClient } from 'apify-client';

// Initialize the ApifyClient with your Apify API token
const client = new ApifyClient({
    token: 'apify_api_hmetBnc6Z8HvZXmfe8JKMVOlnPtBRT0ZiWzf',
});

// Prepare Actor input
const input = {
    "search": "New York",
    "maxItems": 30,
    //"sortBy": "price",
    "starsCountFilter": "any",
    "currency": "USD",
    "language": "en-gb",
    "minMaxPrice": "200-500"
};

(async () => {
    const fs = require('fs').promises; // Import the promises-based File System module
    // Run the Actor and wait for it to finish
    const run = await client.actor("voyager/booking-scraper").call(input);

    // Fetch and print Actor results from the run's dataset (if any)
    console.log('Results from dataset');
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    items.forEach((item) => {
        console.dir(item);
    });

    // Write the output to a JSON file
    try {
        await fs.writeFile('booking-hotels.json', JSON.stringify(items, null, 2));
        console.log('Output written to booking-hotels.json');
    } catch (error) {
        console.error('Error writing output to file:', error);
    }
})();
