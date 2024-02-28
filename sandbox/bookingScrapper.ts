

import { ApifyClient } from 'apify-client';

// Initialize the ApifyClient with your Apify API token
const client = new ApifyClient({
    token: 'apify_api_hmetBnc6Z8HvZXmfe8JKMVOlnPtBRT0ZiWzf',
});

// Prepare Actor input
const input = {
    "search": "New York",
    "maxItems": 10,
    "sortBy": "distance_from_search",
    "starsCountFilter": "any",
    "currency": "USD",
    "language": "en-gb",
    "minMaxPrice": "0-999999"
};

(async () => {
    // Run the Actor and wait for it to finish
    const run = await client.actor("voyager/booking-scraper").call(input);

    // Fetch and print Actor results from the run's dataset (if any)
    console.log('Results from dataset');
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    items.forEach((item) => {
        console.dir(item);
    });
})();