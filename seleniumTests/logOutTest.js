// This file enters the existing user's login page, redirects to the dropdown to logout of the profile

const { Builder, By, Key,} = require("selenium-webdriver");
const fs = require('fs');

// Function to log results to a text file
function logResults(result) {
    const timestamp = new Date().toLocaleString();
    const logEntry = `[${timestamp}] ${result}\n`;

    fs.appendFile('logOutLog.txt', logEntry, (err) => {
        if (err) throw err;
    });
}

async function testLogOut() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        logResults(`Log file for the test case to test logout functionality using the dropdown`); 
        await driver.get("http://localhost:3000/");
        const pageTitle = await driver.getTitle();
        const currentUrl = await driver.getCurrentUrl();
        logResults(`Page title is: ${pageTitle} and the URL is:${currentUrl}`);
        await driver.sleep(2000);

        const selectDropdown = await driver.findElement(By.xpath('//*[@id="basic-nav-dropdown"]')).click('');
        await driver.sleep(2000);

        const clickLogout = await driver.findElement(By.xpath('//*[@id="basic-navbar-nav"]/div[2]/div/div/a')).click('');
        const postLogoutUrl = await driver.getCurrentUrl();
        logResults(`user logged out successfully and URL is ${postLogoutUrl}`);
        await driver.sleep(2000);
        logResults('user log out functionality tested');



    } catch (error) {
        // Log the error if the test fails
        logResults(`Test failed. Error: ${error.message}`);
    } finally {
        // await driver.quit();
    }
}

testLogOut();