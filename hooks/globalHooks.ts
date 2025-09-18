import { After, Before, setDefaultTimeout } from "@cucumber/cucumber";
import { closeBrowser, initializeBrowser, initializePage } from "../playwrightUtilities";

import { AfterStep } from "@cucumber/cucumber";
import fs from 'fs';
import path from 'path';

setDefaultTimeout(15000);

Before( async () => {
    await initializeBrowser();
    await initializePage();
})

After( async () => {
    await closeBrowser();
})

// Take screenshot after every step and attach to report
AfterStep(async function (step) {
    const page = require('../playwrightUtilities').getPage();
    if (page) {
        const screenshot = await page.screenshot();
        // Save screenshot to disk
        const fs = require('fs');
        const path = require('path');
        const dir = path.join(process.cwd(), 'screenshots');
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        const filePath = path.join(dir, `step-${Date.now()}.png`);
        fs.writeFileSync(filePath, screenshot);
        // Attach to report
        await this.attach(screenshot, 'image/png');
    }
});
