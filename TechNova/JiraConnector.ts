
import axios, { AxiosResponse } from 'axios';

export function fetchSprintData():void{
    // Define the Jira API endpoint for fetching all sprints data
const apiUrl = 'https://eran-karisi.atlassian.net/rest/agile/1.0/board/{boardId}/sprint';

// Define your Jira API credentials (replace with your actual credentials)
const username = 'eran.karisi@gmail.com';
const apiToken = 'ATATT3xFfGF0onT55qMG4T5eSp2JBwS9Hhwph_gfRWYnfq4VjKxhoCZaXDgSq-dL6mGTrr5_jaD48ivfcgU9kZkv5TPGlznngJPPfJXk0MIQQX0lP0Q8BbjRzR_3Ng-ZAMJZYDtwQ9tieNqWB5YYIbdjKpFbZmsP0RVr7ytFHpZW5HwaEXt4Dfc=C89FDF55';

// Define the board ID of the Jira board containing the sprints (replace with your actual board ID)
const boardId = '1';

// Define the headers for authentication
const headers = {
  'Authorization': `Basic ${Buffer.from(`${username}:${apiToken}`).toString('base64')}`,
  'Content-Type': 'application/json'
};

// Make the API call to fetch all sprints data
axios.get(apiUrl.replace('{boardId}', boardId), { headers })
  .then((response: AxiosResponse) => {
    console.log('All sprints data:', response.data.values);
  })
  .catch((error) => {
    console.error('Error fetching all sprints data:', error.message);
  });

}
//export fetchSprintData;


// Call the function to fetch and process sprint data
fetchSprintData();
