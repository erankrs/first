
import axios, { AxiosResponse } from 'axios';

export function fetchSprintData():void{
    // Define the Jira API endpoint for fetching all sprints data
const apiUrl = 'https://eran-karisi.atlassian.net/rest/agile/1.0/board/{boardId}/sprint';

// Define your Jira API credentials (replace with your actual credentials)
const username = 'eran.karisi@gmail.com';
const apiToken = 'ATATT3xFfGF0QdkAIUAcrJF8ezPQiqe1oa-2-fF8d3jvLBKub4W_JcHxWTq0cldRRpSaLUslzI5EQpGZHZvpNKgre31PsMS4rLOV0lCSFm13TOV-U_2poCn09HZB05Yza3CamATTIuRD-Ht96pnaib85KIGXp5njBa_OZ4Gv4OzErqxZ2pT-_9s=42278A67';

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
    console.log("CCDDD ",response.headers);
    console.log('All sprints data:', response.data.values);
  })
  .catch((error) => {
    console.error('Error fetching all sprints data:', error.message);
  });

}
//export fetchSprintData;


// Call the function to fetch and process sprint data
fetchSprintData();
