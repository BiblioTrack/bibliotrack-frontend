// Selenium UI tests
// This file visits the login URL and tests the login functionality

const { Builder, By, Key, until } = require("selenium-webdriver");
const fs = require('fs');

// Function to log results to a text file
function logResults(result) {
    const timestamp = new Date().toLocaleString();
    const logEntry = `[${timestamp}] ${result}\n`;

    fs.appendFile('signUpPageLog.txt', logEntry, (err) => {
        if (err) throw err;
    });
}

async function signUpPage() {
    let driver = await new Builder().forBrowser('chrome').build();
  
    try {
      logResults(`Log file for the test case to test the login page`); 
      await driver.get("http://localhost:3000/login");
      const pageTitle = await driver.getTitle();
      const currentUrl = await driver.getCurrentUrl();
      logResults(`Page title is: ${pageTitle} and the URL is:${currentUrl}`);
      await driver.sleep(2000);

      const clickSignUp = await driver.findElement(By.xpath('//*[@id="root"]/div[2]/div/div/div/form/div[3]/p[2]/a')).click('');
      const SignUpUrl = await driver.getCurrentUrl();
      logResults(`redirected to signUp page and URL is ${SignUpUrl}`);
      await driver.sleep(2000);

      const firstName = await driver.findElement(By.id('firstname'));
      await firstName.sendKeys('John'); 
      await driver.sleep(1000);

      const lastName = await driver.findElement(By.id('lastname'));
      await lastName.sendKeys('Doe');  
      await driver.sleep(1000);

      const emailId = await driver.findElement(By.id('email'));
      await emailId.sendKeys('user@user.com'); 
      await driver.sleep(1000);

      const password = await driver.findElement(By.id('password'));
      await password.sendKeys('pass@123'); 
      await driver.sleep(1000);

      const repeatPassword = await driver.findElement(By.id('repeatPassword'));
      await repeatPassword.sendKeys('pass@123');
      logResults(`entered user's personal details`);

    //   const clickSignUpButton = await driver.findElement(By.xpath('//*[@id="root"]/div[2]/div/div/div/form/button')).click('');
    //   await driver.sleep(2000);

 //currently signup functionality is not redirecting to any URL

    //   const postsignUpUrl = await driver.getCurrentUrl();
    //   logResults(`new user signed up successfully and URL is ${postsignUpUrl}`);
    //   await driver.sleep(2000);
    //   logResults('user signUp functionality tested');


    } catch (error) {
    // Log the error if the test fails
    logResults(`Test failed. Error: ${error.message}`);
    } finally {
    // await driver.quit();
    }
  }

  signUpPage();
