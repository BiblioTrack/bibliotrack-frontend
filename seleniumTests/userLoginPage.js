// Selenium UI tests
// This file visits the login URL and tests the login functionality

const { Builder, By, Key, until } = require("selenium-webdriver");
const fs = require('fs');

// Function to log results to a text file
function logResults(result) {
    const timestamp = new Date().toLocaleString();
    const logEntry = `[${timestamp}] ${result}\n`;

    fs.appendFile('userLoginLog.txt', logEntry, (err) => {
        if (err) throw err;
    });
}

async function userLoginPage() {
    let driver = await new Builder().forBrowser('chrome').build();
  
    try {
      logResults(`Log file for the test case to test the login page`); 
      await driver.get("http://localhost:3000");
      const pageTitle = await driver.getTitle();
      const currentUrl = await driver.getCurrentUrl();
      logResults(`Page title is: ${pageTitle} and the URL is:${currentUrl}`);
      await driver.sleep(2000);
    
      const clickLogin = await driver.findElement(By.xpath('//*[@id="basic-navbar-nav"]/div[2]/a')).click();
      const loginPageUrl = await driver.getCurrentUrl();
      logResults(`entered login page and URL is ${loginPageUrl}`);
      await driver.sleep(2000);

      const emailId = await driver.findElement(By.id('username'));
      await emailId.sendKeys('user');
      const password = await driver.findElement(By.id('password'));
      await password.sendKeys('password');
      const clickSubmit = await driver.findElement(By.xpath('//*[@id="root"]/div[2]/div/div/div/form/button')).click();
      logResults(`entered user email ID and password`);
      await driver.sleep(2000);
      const postLoginUrl = await driver.getCurrentUrl();
      logResults(`user logged in and URL is ${postLoginUrl}`);

      //logout functionality 
      const selectDropdown = await driver.findElement(By.xpath('//*[@id="basic-nav-dropdown"]')).click('');
      await driver.sleep(2000);

      const clickLogout = await driver.findElement(By.xpath('//*[@id="basic-navbar-nav"]/div[2]/div/div/a')).click('');
      const postLogoutUrl = await driver.getCurrentUrl();
      logResults(`user logged out successfully and URL is ${postLogoutUrl}`);
      await driver.sleep(2000);
      logResults('user login and log out functionality tested');

    } catch (error) {
    // Log the error if the test fails
    logResults(`Test failed. Error: ${error.message}`);
    } finally {
    // await driver.quit();
    }
  }

  userLoginPage();