<h1 align="center">Trivago (QA Case Study Challenge)</h1>
<h3 align="center">Solution by Syeda Bariya Haq</h3>

<div align="center">
  
[![Task1](https://img.shields.io/badge/Task1-Done-green.svg)](https://github.com/s-bariya-h/SyedaBariya-Haq/tree/testing/Home-Challenge/Task1)
[![Task2](https://img.shields.io/badge/Task2.1-Half%20Done-red.svg)](https://github.com/s-bariya-h/SyedaBariya-Haq/tree/testing/Home-Challenge/Task2)
[![Task3](https://img.shields.io/badge/Task2.2-Done-green.svg)](https://github.com/s-bariya-h/SyedaBariya-Haq/tree/testing/Home-Challenge/Task3)
</div>

## 📦 Tech Stack

[![Made withJupyter](https://img.shields.io/badge/Made%20with-Cypress-058a5e?style=for-the-badge&logo=cypress&logoColor=white)](https://jupyter.org/try)
[![Made with Docker](https://img.shields.io/badge/Made%20with-Docker-blue?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
<br><br>

<img align="left" src="https://user-images.githubusercontent.com/65415371/124739629-f43cde80-df11-11eb-9033-c5d1d7194f03.png" width="50px" />

## Quick Start

This repository is for the submission of the **Case Study for QA Engineer** carried out by **Trivago**. The repository contains test automation framework for the 2 tasks using Cypress.io. The test environment was setup using Docker for ease of reproduction.

#### 📦 Folder Structure

          │
          ├── cypress
          |   ├──  config
          │   |    |__ config.js
          |   |
          │   ├──  integration
          |   |    |__ specs.js
          |   |
          │   ├──  screenshots
          │   |__  videos
          │
          ├── cypress.json
          ├── docker-compose.yml
          ├── images => {Irrelevant to the project}
          |__ README.md

> * The work environment is based on Volume-Bind workflow using Docker meaning that all the data on local machine is persistent with the data inside the Docker Container
> * The `cypress/config/config.js` file contains all the configurations for a better code architecture
> * All the tests are contained inside the `cypress/integration/specs.js` file
---

<br><br>

<h1 align="center">Task 1</h1>

<img align="left" src="https://user-images.githubusercontent.com/65415371/124740290-8e048b80-df12-11eb-9c29-654c9cb4561b.png" width="50px" />

## Problem Statement


#### Search for “Texas” using the search functionality<br>
  1. Verify that the displayed number of search results is correct

<br/>

<img align="left" src="https://user-images.githubusercontent.com/65415371/124740340-9eb50180-df12-11eb-9295-e33ac2752c57.png" width="50px" />

## Solution

<br>

### 📋 Test Case:
#### CaseID_1

``` {.sourceCode .gherkin}
Feature: Search functionality of trivago Magazine
    In order to verify that the displayed number of search results is correct

Scenario: Search for a specific city
    Given I am a trivago Magazine user using URL https://magazine.trivago.com/
      And I click on search icon
      And The search menu is visible
     When I enter 'Texas' in the search field
      And I hit enter
     Then I should see search menu populating with search results
      And Search result count on top should be equal to the number of displayed results on the page

```

<br><br>


<h1 align="center">Task 2</h1>

<img align="left" src="https://user-images.githubusercontent.com/65415371/124740290-8e048b80-df12-11eb-9c29-654c9cb4561b.png" width="50px" />

## Problem Statement


#### From the displayed results open “Mom Knows Best: Family Vacations in Texas”<br>
  1. Verify that the list of “Featured hotels and resorts” displays all hotels featured in the article
  2. Verify that there are no broken links in the article

<br>

<img align="left" src="https://user-images.githubusercontent.com/65415371/124740340-9eb50180-df12-11eb-9295-e33ac2752c57.png" width="50px" />

## Solution

<br>

### 📋 Test Cases:


``` {.sourceCode .gherkin}
Feature: Article Content
```
#### CaseID_2.1
``` {.sourceCode .gherkin}
Scenario: Verify that the list of 'Featured hotels and resorts' displays all hotels featured in the article
    Given I am a trivago Magazine user using URL https://magazine.trivago.com/
      And I click on search icon
      And The search menu is visible
     When I enter 'Texas' in the search field
      And I hit enter
     Then I should see search menu populating with search results
     When I click to select 'Mom Knows Best: Family Vacations in Texas'
     Then I should be redirected to the 'Mom Knows Best: 10 Family Vacations in Texas 
        to Inspire Your Next Trip' article page
     And 'Featured hotels and resorts' title should be displayed on the right side of the article
     And: All hotels title which are in the article should be listed under 'Featured hotels and resorts'
```
> #### 💡 Observation in Task 2.1
> * The above task could not be completed because of code inconsistency. 
> * There were multiple elements with the same class name but inconsistent content and hence a loop traversal could not be executed for checking the featured hotels. 
> * This cannot be worked around by accessing each element specifically but that is against the best practices as well as not very scalable.
> * Below image may help achieve clarity of the problem. 
<blockquote>
<p align="center">Screen Shot Placeholder</p>
<p align="center"><img src="images/screenshot.JPG"/></p>
</blockquote>

#### CaseID_2.2

``` {.sourceCode .gherkin}
Scenario: Verify that there are no broken links in the article
    Given I am a trivago Magazine user using URL https://magazine.trivago.com/
      And I click on search icon
      And The search menu is visible
     When I enter 'Texas' in the search field
      And I hit enter
     Then I should see search menu populating with search results
     When I click to select 'Mom Knows Best: Family Vacations in Texas'
     Then I should be redirected to the 'Mom Knows Best: 10 Family Vacations in Texas 
        to Inspire Your Next Trip' article page
      And None of the links should have an href as "#undefined" 
```

<br><br>

### :wrench: Usage

#### Pre-requisites:

- Docker and docker-compose must be installed
- An account on hub.docker.com would save you from unforeseen errors

#### Steps:

- Clone the repository
- Once inside the directory, Run `docker-compose up` in the terminal.

<blockquote>
<p align="center"><img src="images/Animation.gif"/></p>
</blockquote>

- You will see the test cases running.
- If you want to see/edit the content of the test file, go to `~/cypress/integration/specs.js`
- `specs.js` files follows the generic content in the `~/cypress/config/config.js` file.
- If you edit the tests and run again, change the content of the `specs.js` file and run `docker-compose up` again from the terminal.

---

<h1 align="center"> 🥳🎉🎆🎈That's all Folks! 🎈🎆🎉🥳 </h1>
<p align="center"><img src="https://media.giphy.com/media/26hiubgNAC4Enzd1S/giphy.gif"/></p>
