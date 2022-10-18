# README
## Overview:
Our project is an application for couples to share entertainment-platform accounts. Our research found that most couples share accounts on platforms such as movies and music with each other. The main reason is trust, followed by saving money. However, through our in-depth investigation, we found that many couples face the problem of difficult account management and cumbersome sharing steps when sharing accounts. Therefore, we designed an application to share accounts based on user needs. It integrates with various entertainment and social platforms to make it easier to share accounts and help users manage their accounts better.

## Prototype:
Our prototype was implemented in Adobe XD. In the user test, we showed two screens simultaneously, representing the user's and his partner's mobile phone status, so they could easily understand how the interaction and information synchronisation took place.

In the login interface, the user has to enter his partner's name or ID to find her. Once they have confirmed their relationship, the system will bind them as a couple.

On the Home Page, users can see the shared information of their accounts and their partner accounts. When the user adds his video or music platform, his partner can also see the synchronised account information in the account library. This way, couples can easily use each other's media accounts without sharing passwords, ensuring account security.

Memory Page is a couple's space. When users click to use their account, our application automatically jumps to the appropriate media platform. If the user sees something of interest that they would like to share with their partner, they can share it with the "Memory" page using the share button. The Memoir button helps couples to create a poster of the content they have shared, enhancing their relationship.

The User Page allows users to see their personal information, account information and relationship status. They can click on the 'end relationship' button if they want to end the relationship. However, as this is a serious decision, a 24-hour freeze period is allowed, and the relationship will be automatically terminated once the user has reconfirmed. After that, the app's history and partner's account information will be cleared.

## Code:
For the code part, we used HTML, CSS and JavaScript for the web development with Visual Studio Code. As our project is designed as an app, we used a mobile phone background to simulate it on the web page.

The project contains nine HTML files, namely index.html, home.html, newHome.html, addPartner.html, memory.html, memoryBefore.html, memoir.html, music.html and person.html. We have used CSS for rendering and JavaScript for basic interaction. Based on the prototype, the website further implements login and registration and content sharing and commenting between couples. However, as no back-end is used, most of the interaction is done in hard code, with all clickable areas already indicated by "pointer". To use our website, users first need to open the index.html file, and the basic process is the same as the prototype.
