# AI Article Summary Generator

![MIT License](https://img.shields.io/github/license/CcMong/ai-article-summary-generator)  ![No Open Issues](https://img.shields.io/github/issues/CcMong/ai-article-summary-generator)

## Description

The objective of this project was to create OppSumm, an AI-based web application that generates a summary for any article or content page, given its URL.

It utilises the Article Extractor and Summarizer API, which extracts page content from a given URL and summarises it using GPT. The summary is displayed for the user, as well as a list of the most recently searched URLs (up to a maximum of 5).

The application was built to run in the browser, and was built using React, Redux Toolkit, Vite and Tailwind CSS. 

## Installation

The application, linked below, was deployed on Netlify.

Ensure that you install Vite with React using the `npm create vite@latest` command, and then install the required dependencies using `npm install @reduxjs/toolkit` for Redux Toolkit and `npm install react-redux` for React-Redux. 

Once you have installed Tailwind CSS, simply upload the index.html file along with the contents of the public and src folders to the desired webserver.

## Usage

[Link to the Deployed Article Summariser Application](https://spiffy-cassata-e4acef.netlify.app/)

[Link to the Github Code Repository](https://github.com/CcMong/ai-article-summary-generator)

![Article Summariser Screenshot](./src/assets/screenshot-home2.PNG)

The article summariser has an input field. When the user types in a URL, then a summary is displayed below along with the URL of the current search and the most recent searches before.  

![URL with History and Summary](./src/assets/history-and-summary.PNG)

The search history will persist even after the page is refreshed, and the summary can be called up quickly by clicking on a particular URL.

## Credits

[Article Extractor and Summarizer API on Rapid API](https://rapidapi.com/restyler/api/article-extractor-and-summarizer)

## License

MIT License. 

Please refer to the LICENSE in the repo.








