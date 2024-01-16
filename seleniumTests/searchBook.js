const { Builder, By, Key, until } = require("selenium-webdriver");

async function searchBook() {
  let driver = await new Builder().forBrowser('chrome').build();

  await driver.get("http://localhost:3000/");

  const searchInput = await driver.findElement(By.className('searchInput form-control'))

  await searchInput.sendKeys("", Key.RETURN);

  await driver.sleep(2000);

  //for specific book
  await searchInput.sendKeys("1984", Key.RETURN);

  await driver.sleep(2000);

  const selectBook = await driver.findElement(By.css('img[alt="1984"]')).click('');

  await driver.sleep(5000);

 // Issue History 
 const issueHistory = await driver.findElement(By.className('form-control'));

 await issueHistory.sendKeys("", Key.RETURN);

 await driver.sleep(2000);

 const issueHistoryAgain = await driver.findElement(By.className('form-control'));

 await issueHistoryAgain.sendKeys("123", Key.RETURN);

 await driver.sleep(2000);

 // Re-find the element before clicking
 const searchQueryInput = await driver.findElement(By.xpath('//*[@id="searchQuery"]'));

 await driver.wait(until.elementIsVisible(searchQueryInput), 10000);

 await driver.wait(until.elementIsEnabled(searchQueryInput), 10000);

 await searchQueryInput.click();

 const userIdElement = await driver.findElement(By.xpath('//*[contains(text(), "123")]'));
 await driver.wait(until.elementIsVisible(userIdElement), 10000);


 await userIdElement.click();

 // Select only "Returned" userid from the filter dropdown
 const filterDropdown = await driver.findElement(By.id('filterCriteria'));
 await filterDropdown.sendKeys('Returned', Key.RETURN);

 const userDetailsElement = await driver.findElement(By.className('form-control')); 

 // Get the text content of the user details
 const userDetailsText = await userDetailsElement.getText();

 // Log or print the user details
 console.log(userDetailsText);

// } finally {

// await driver.quit();
}

searchBook();


