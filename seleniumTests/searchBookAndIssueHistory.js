// Selenium UI tests
// This file visits the URL and tests the search navigation bar and the book issue history

const { Builder, By, Key, until } = require("selenium-webdriver");
const fs = require('fs');

// Function to log results to a text file
function logResults(result) {
    const timestamp = new Date().toLocaleString();
    const logEntry = `[${timestamp}] ${result}\n`;

    fs.appendFile('BookSearchLog.txt', logEntry, (err) => {
        if (err) throw err;
    });
}

async function searchBook() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    logResults(`Log file for the test case to test the search navigation bar and the book issue history`); 
    await driver.get("http://localhost:3000/");
    const pageTitle = await driver.getTitle();
    const currentUrl = await driver.getCurrentUrl();
    logResults(`Page title is: ${pageTitle} and the URL is:${currentUrl}`);
    await driver.sleep(2000);

    //search for specific book: in this case it is book-1984 
    const searchInput = await driver.findElement(By.className('searchInput form-control'))
    await searchInput.sendKeys("1984", Key.RETURN);
    await driver.sleep(2000);

    const selectBook = await driver.findElement(By.css('img[alt="1984"]')).click('');
    logResults('searched and selected on the book 1984');
    await driver.sleep(1000);
    const bookURL = await driver.getCurrentUrl();
    logResults(`Redirected to: ${bookURL}`);
    await driver.sleep(1000);



    //******************************//
    //****** Issue history *********//
    //******************************//
    logResults('Checking dropdown in book issue history');
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

    logResults('Search bar on Home page and book issue history tested');
    } catch (error) {
    // Log the error if the test fails
    logResults(`Test failed. Error: ${error.message}`);
    } finally {
    // await driver.quit();
    }
  }

searchBook();


