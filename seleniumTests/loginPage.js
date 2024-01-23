// Selenium UI tests
// This file visits the login URL and tests the login functionality

const { Builder, By, Key, until } = require("selenium-webdriver");
const fs = require('fs');

// Function to log results to a text file
function logResults(result) {
    const timestamp = new Date().toLocaleString();
    const logEntry = `[${timestamp}] ${result}\n`;

    fs.appendFile('addBookPageLog.txt', logEntry, (err) => {
        if (err) throw err;
    });
}

async function loginPage() {
    let driver = await new Builder().forBrowser('chrome').build();
  
    try {
      logResults(`Log file for the test case to test the login page`); 
      await driver.get("http://localhost:3000/login");
      const pageTitle = await driver.getTitle();
      const currentUrl = await driver.getCurrentUrl();
      logResults(`Page title is: ${pageTitle} and the URL is:${currentUrl}`);
      await driver.sleep(2000);
    
      const emailId = await driver.findElement(By.id('email'));
      await emailId.sendKeys('user@user.com');
      const password = await driver.findElement(By.id('password'));
      await password.sendKeys('pass@123');
      logResults(`entered user email ID and password`);
      await driver.sleep(2000);

      const clickLogin = await driver.findElement(By.xpath('//*[@id="root"]/div[2]/div/div/div/form/button')).click();
      const postLoginUrl = await driver.getCurrentUrl();
      logResults(`user logged in successfully and URL is ${postLoginUrl}`);
      await driver.sleep(2000);
      logResults('user login functionality tested');


    } catch (error) {
    // Log the error if the test fails
    logResults(`Test failed. Error: ${error.message}`);
    } finally {
    // await driver.quit();
    }
  }

  loginPage();