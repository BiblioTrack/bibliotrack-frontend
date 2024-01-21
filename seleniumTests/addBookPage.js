// Selenium UI tests
// This file redirects the addBook page and enters the book details

const { Builder, By } = require("selenium-webdriver");
const fs = require('fs');

// Function to log results to a text file
function logResults(result) {
    const timestamp = new Date().toLocaleString();
    const logEntry = `[${timestamp}] ${result}\n`;

    fs.appendFile('addBookTestLog.txt', logEntry, (err) => {
        if (err) throw err;
    });
}
async function addBookPageTest() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        logResults(`Log file for the test which redirects the addBook page and enters the book details`); 

        await driver.get("http://localhost:3000/");
        const pageTitle = await driver.getTitle();
        const currentUrl = await driver.getCurrentUrl();
        logResults(`Page title is: ${pageTitle} and the URL is:${currentUrl}`);

        // Click on the dashboard button
        const addBookButton = await driver.findElement(By.xpath('//*[@id="basic-navbar-nav"]/div/a[3]')).click('');
        const addBookUrl = await driver.getCurrentUrl();
        logResults(`redirected to addBook button and the URL is:${addBookUrl}`);
        await driver.sleep(2000);
        
        const addTitle = await driver.findElement(By.id('title'));
        await addTitle.sendKeys('A Brief History Of Time'); 
        await driver.sleep(1000);

        const addAuthor = await driver.findElement(By.id('author'));
        await addAuthor.sendKeys('Stephen Hawking'); 
        await driver.sleep(1000);

        const addISBN = await driver.findElement(By.id('isbn'));
        await addISBN.sendKeys('978-0-553-17521-9'); 
        await driver.sleep(1000);

        const addCategory = await driver.findElement(By.id('category'));
        await addCategory.sendKeys('Astrophysics'); 
        await driver.sleep(1000);

        const addEdition = await driver.findElement(By.id('edition'));
        await addEdition.sendKeys('first edition'); 
        await driver.sleep(1000);

        const addpublishYear = await driver.findElement(By.id('publishYear'));
        await addpublishYear.sendKeys('1988'); 
        await driver.sleep(1000);

        const addEditorName = await driver.findElement(By.id('editor'));
        await addEditorName.sendKeys('editorName'); 
        await driver.sleep(1000);

        const addPublisherName = await driver.findElement(By.id('publisher'));
        await addPublisherName.sendKeys('Batom press'); 
        await driver.sleep(1000);

        const addCopies = await driver.findElement(By.id('copies'));
        await addCopies.sendKeys('1'); 
        await driver.sleep(1000);

        const addPageCount = await driver.findElement(By.id('pageCount'));
        await addPageCount.sendKeys('200'); 
        await driver.sleep(1000);

        const addShelf = await driver.findElement(By.id('shelf'));
        await addShelf.sendKeys('NA'); 
        await driver.sleep(1000);

        const addFloor = await driver.findElement(By.id('floor'));
        await addFloor.sendKeys('NA'); 
        await driver.sleep(1000);

        const addDescription = await driver.findElement(By.id('description'));
        await addDescription.sendKeys('A Brief History of Time by Stephen Hawking is a popular science book that explores complex concepts like cosmology, black holes, and the nature of the universe, making them accessible to a general audience'); 
        await driver.sleep(1000);
        logResults('Entered new book details');

        // const clickAddBookButton = await driver.findElement(By.xpath('//*[@id="root"]/div[2]/div/div/div/form/div[8]/button')).click('');
        // await driver.sleep(2000);
        // logResults('AddBook page test passed');

        //currently "addBook Button" is not redirecting to any URL
 
    //   const postAddBookUrl = await driver.getCurrentUrl();
    //   logResults(`User successfully added required Book details and URL is ${postAddBookUrl}`);
    //   await driver.sleep(2000);
    //   logResults('User AddBook functionality tested');

    } catch (error) {
        // Log the error if the test fails
        logResults(`Test failed. Error: ${error.message}`);
    } finally {
        // await driver.quit();
    }
}

addBookPageTest();

