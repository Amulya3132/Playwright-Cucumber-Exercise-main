const reporter = require('multiple-cucumber-html-reporter');
const path = require('path');

reporter.generate({
  jsonDir: path.join(__dirname, 'report-json'),
  reportPath: path.join(__dirname, 'cucumber_report'),
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest',
    },
    device: 'Local test machine',
    platform: {
      name: process.platform,
      version: process.version,
    },
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Playwright Cucumber Exercise' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Execution Start Time', value: new Date().toLocaleString() },
    ],
  },
});
