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

        logResults(`Log file for the test case to test the login page`); 
        await driver.get("https://biblio-track.onrender.com/");
        const pageTitle = await driver.getTitle();
        const currentUrl = await driver.getCurrentUrl();
        logResults(`Page title is: ${pageTitle} and the URL is:${currentUrl}`);
        await driver.sleep(2000);
        
        const clickLogin = await driver.findElement(By.xpath('//*[@id="basic-navbar-nav"]/div[2]/a')).click();
        const loginPageUrl = await driver.getCurrentUrl();
        logResults(`entered login page and URL is ${loginPageUrl}`);
        await driver.sleep(2000);

        const emailId = await driver.findElement(By.id('username'));
        await emailId.sendKeys('admin');
        const password = await driver.findElement(By.id('password'));
        await password.sendKeys('password');
        
        const clickSubmit = await driver.findElement(By.xpath('//*[@id="root"]/div[2]/div/div/div/form/button')).click();
        logResults(`entered admin email ID and password`);
        await driver.sleep(2000);
        const postLoginUrl = await driver.getCurrentUrl();
        logResults(`admin logged in and URL is ${postLoginUrl}`);


        // Click on the dashboard button
        const dashboardButton = await driver.findElement(By.xpath('//*[@id="basic-navbar-nav"]/div[1]/a[2]')).click('');
        const dashboardUrl = await driver.getCurrentUrl();
        logResults(`clicked dashboard button and the URL is:${dashboardUrl}`);
        await driver.sleep(2000);

        // Click on an issueRequest
        const dashboardIssueRequest = await driver.findElement(By.xpath('//*[@id="root"]/div[2]/div[1]/div/table/tbody/tr[1]/td[2]/a')).click('');
        const issueRequestUrl = await driver.getCurrentUrl();
        logResults(`clicked one of the issue requests and the URL is:${issueRequestUrl}`);
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

        logResults('Dashboard page and Dropdown filter test passed.');
    } catch (error) {
        // Log the error if the test fails
        logResults(`Test failed. Error: ${error.message}`);
    } finally {
        // await driver.quit();
    }
}

dashboardPageTest();
