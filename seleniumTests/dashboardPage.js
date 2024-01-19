// Selenium UI tests
// This file enters the dashboard page and tests book issue history

const { Builder, By } = require("selenium-webdriver");
const fs = require('fs');

// Function to log results to a text file
function logResults(result) {
    const timestamp = new Date().toLocaleString();
    const logEntry = `[${timestamp}] ${result}\n`;

    fs.appendFile('dbTestLog.txt', logEntry, (err) => {
        if (err) throw err;
    });
}

async function dashboardPageTest() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        logResults(`Log file for the test which enters the dashboard page and tests book issue history`); 

        await driver.get("http://localhost:3000/");
        const pageTitle = await driver.getTitle();
        const currentUrl = await driver.getCurrentUrl();
        logResults(`Page title is: ${pageTitle} and the URL is:${currentUrl}`);

        // Click on the dashboard button
        const dashboardButton = await driver.findElement(By.xpath('//*[@id="basic-navbar-nav"]/div/a[2]')).click('');
        const dashboardUrl = await driver.getCurrentUrl();
        logResults(`clicked dashboard button and the URL is:${dashboardUrl}`);
        await driver.sleep(2000);

        // Click on an issueRequest
        const dashboardIssueRequest = await driver.findElement(By.xpath('//*[@id="root"]/div[2]/div[1]/div/table/tbody/tr[2]/td[1]/a')).click('');
        const issueRequestUrl = await driver.getCurrentUrl();
        logResults(`clicked the 2nd issue request and the URL is:${issueRequestUrl}`);
        await driver.sleep(2000);

        await driver.navigate().back();        
        const Back2dbURL = await driver.getCurrentUrl();
        logResults(`back to the dashboard page  and the URL is:${Back2dbURL}`);
        await driver.sleep(2000);

        // Testing dropdown filter
        // Locate the filter dropdown
        const filterDropdown = await driver.findElement(By.id('filterCriteria'));

        // Test with 'Returned'
        await filterDropdown.sendKeys('Returned');
        await driver.sleep(2000);
        logResults('Selected option: Returned');

        // Test with 'Overdue'
        await filterDropdown.sendKeys('Overdue');
        await driver.sleep(2000);
        logResults('Selected option: Overdue');

        // Test with 'In Progress'
        await filterDropdown.sendKeys('In Progress');
        await driver.sleep(2000);
        logResults('Selected option: In Progress');

        // Test with 'All'
        await filterDropdown.sendKeys('All');
        await driver.sleep(2000);
        logResults('Selected option: All');

        // Testing issueHistory search bar
        const issueHistory = await driver.findElement(By.className('form-control'));
        await issueHistory.sendKeys("123");
        await driver.sleep(2000);
        logResults('type 123 and observation done');

        logResults('Dashboard page and Dropdown filter test passed.');
    } catch (error) {
        // Log the error if the test fails
        logResults(`Test failed. Error: ${error.message}`);
    } finally {
        // await driver.quit();
    }
}

dashboardPageTest();
