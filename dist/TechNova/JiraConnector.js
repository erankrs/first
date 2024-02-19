"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSprintData = void 0;
var axios_1 = require("axios");
function fetchSprintData() {
    // Define the Jira API endpoint for fetching all sprints data
    var apiUrl = 'https://eran-karisi.atlassian.net/rest/agile/1.0/board/{boardId}/sprint';
    // Define your Jira API credentials (replace with your actual credentials)
    var username = 'eran.karisi@gmail.com';
    var apiToken = 'ATATT3xFfGF0QdkAIUAcrJF8ezPQiqe1oa-2-fF8d3jvLBKub4W_JcHxWTq0cldRRpSaLUslzI5EQpGZHZvpNKgre31PsMS4rLOV0lCSFm13TOV-U_2poCn09HZB05Yza3CamATTIuRD-Ht96pnaib85KIGXp5njBa_OZ4Gv4OzErqxZ2pT-_9s=42278A67';
    // Define the board ID of the Jira board containing the sprints (replace with your actual board ID)
    var boardId = '1';
    // Define the headers for authentication
    var headers = {
        'Authorization': "Basic ".concat(Buffer.from("".concat(username, ":").concat(apiToken)).toString('base64')),
        'Content-Type': 'application/json'
    };
    // Make the API call to fetch all sprints data
    axios_1.default.get(apiUrl.replace('{boardId}', boardId), { headers: headers })
        .then(function (response) {
        console.log("CCDDD ", response.headers);
        console.log('All sprints data:', response.data.values);
    })
        .catch(function (error) {
        console.error('Error fetching all sprints data:', error.message);
    });
}
exports.fetchSprintData = fetchSprintData;
//export fetchSprintData;
// Call the function to fetch and process sprint data
fetchSprintData();
