# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

![](./rest-api-desktop-light.png)

![](./rest-api-desktop-dark.png)

![](./rest-api-desktop-dark-country-view.png)

![](./rest-api-mobile-light.png)

![](./rest-api-mobile-dark-country-view.png)

![](./rest-api-mobile-light-country-view.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org)
- [Create React App](https://github.com/facebook/create-react-app)

### Continued development

- Uses 2 fetches instead of caching data
- The search filter just searches for the character - not character as the first letter of the country name
- The select dropdown doesn't persist when using the search filter afterwards / reset it 
- Used matching object to get full names of border - if error - hard to find 
- Margin/Padding issues noticeable on dark mode
- Accessibility
- API changed and now requires an api key.  I deleted my gh-pages branch and removed the link.  

### Useful resources

- [Dev.to](https://dev.to/zenulabidin/how-not-to-deploy-a-react-site-to-github-pages-42ge) - Github Pages and React
- [Medium](https://medium.com/@bennirus/deploying-a-create-react-app-with-routing-to-github-pages-f386b6ce84c2) - Github Pages and React
- [React](https://reactjs.org/docs/hooks-effect.html) - Hooks Effect
