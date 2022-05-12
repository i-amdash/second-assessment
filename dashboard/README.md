For this project i used HTML, CSS and Javascript to solve the problem which stated that i should create a Sidebar that navigates to a Dashboard page and a Product List page.

I created the necessary files and folders for this project; html, css, js, the pages and images folders, then began with the HTML markup for the page, after creating the html doctype, i inputed the title of my project; "Junior Developer Assessment". I linked my external files; css file and js files, to the page then i wrapped the entire body in a div of container, i set the container to a grid of two columns that seperated the sidebar; on the left from the main section of the page; on the right, which includes the content of the page.

I created a div of top that contained both the logo and a close button icon for the navigation bar on mobile devices, then i created the sidebar that contained links to the Dashboard and Products pages respectively, i put all these in the aside tag as it is not part of the main content of the page. I also added a div of menu outside the tag which i style to only display as a top navigation bar on mobile devices which opens the sidebar on mobile.

Facing the problem, i continued to the main section which is the content of the dashboard page as it is the first page that will appear on load of the application. I created an H1, and set the content to counter as it was explicitly stated in the question and created a div for the counter section which displayed the following information:
- The number of products
- the number of orders
- the number of sales 
- the sales value in naira

for real life semantics i added a duration span at the bottom of these boxes and also a percentage svg depicting the level of sale accomplished in the time frame as dashboards are normally used to analyse data.

below the counter div i created the order table div with an H1 and the table displayed the following information:
- a serial number
- product name
- quantity
- order id 
- order value 
- customer email

To fill in the data in this table, i initially hard coded it into the html file then i recollected from the previous challenge were i was requested to fetch data to be inputed in a table so i went with that instead and created a js file of data which i used to store an array of data with the corresponding information and i fetched the data from the array through my script.js folder which had already been linked to the main html file.

For the design of the page i browsed through landmark's official website and got the blue and orange color codes from there and also the logo which i used in the sidebar of the application. I gave the page a white background cause simplicity is really key in designing and i used variable declarations to style the boxes for the counters and the table which also have a box shadow that is set to none on hover. I also styled the navbar links on hover and when active.

On the second page i created another html file in my pages folder for the product page and i reused the sidebar from my dashboard page, only thing i changed was the href cause the links will had to be different on a different page. I also reused the style sheet from the index page to save time. Then i went on to working on the table which has the following headers:
- a serial number
- product name
- product price
- product SKU
- product quantity

initially i did not know what an SKU meant so i had to google it and i found out that its either a bunch of numbers used by stock keepers to keep track of an item, so i decided to use a nine letter SKU for all the products, the first three letters were gotten from their name, the second three letters were from their descriptions and the last three numbers are just random numbers cause the products arent really real. I used the same system of fetching data from an array for this section and also the same styling for the table as the table in the previous page.

As the initial objective was completed, i began working on the mobile responsiveness of the pages on the stylesheet by using media queries. On big tablets and smaller laptops with a viewport of 1300px, i reduced the width of the sidebar and removed the description of the items on the sidebar, i left just the icons and set the grid template for the counters to display one counter on each row, i also reduced the width of the order table but i was unable to get it fully mobile responsive due to the amount of content on the table, if i tried reducing the font it will make the content nearly unreadable so i reduced the width to a measurable size that wont clearly break the page.

On mobile devices and smaller tablets i removed the display of the sidebar completely and i used the click event handler in javascript to display the sidebar and remove it when its not needed. I also increased the size of the tables to take the full width of the page but the same issue of too many content on the order table page made it difficult to be responsive, I contemplated removing some content from the page on mobile devices but for the purpose of the assessment i really dont want to lose marks for that so i went against that initial thought.

Thank you for giving me this oppurtunity to assess my skills, I used a different framework for this exercise as discussed at the previous interview, this project actually did not require a lot of js functions so i just went with the basic HTML and CSS approach, i'm currently learning Vue framework and in time i'll be able to write in vue.