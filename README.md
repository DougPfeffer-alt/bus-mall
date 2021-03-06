# Bus Mall

## Problem Domain

You’ve been hired by a startup called BusMall, whose product is similar to the SkyMall catalog found in the seatback pockets on airplanes: a catalog of assorted high-markup products provided to a captive audience seeking a mental escape from the drudgery of travel. The difference with BusMall is that instead of their catalog being placed in airplanes, they are placed on local busses while commuting through traffic.

Since catalogs are expensive to print and distribute, and the products cost money to make and warehouse, and BusMall is a lean startup that needs to carefully watch its expenditures, BusMall wants to feature only the items in its catalog that are the most likely to sell.

This means that BusMall wants to do market analysis on proposed products to test their potential customer interest… before actually putting them into the catalog and getting the manufacturing wheels in motion.

To make this market analysis maximally effective, BusMall wants you to build an app that displays potential products to individuals in focus groups (three products at a time, side-by-side-by-side) so you’ll need to manage the size and the aspect ratio of the images.

The app’s purpose is to have the group members choose which product, of the three displayed images, that they would be most likely to purchase, and then store, calculate, and visually display the resulting data.

To keep the product selection process as untainted as possible, you have been instructed to not allow any results to be shown to users until there have been a total of 25 selections made.

The marketing team is not only interested in the total number of clicks, but also the percentage of times that an item was clicked when it was shown. So, you’ll also need to keep track of how many times each image is displayed and do the calculations.

You are also responsible for the look and feel of the app, so don’t forget a custom font, color palette, layout with semantic HTML, and so on.

## User Stories

User stories are a device commonly used in software development to identify what the functionality and design of a product should be by considering the interests and motivations of people with varied multiple points of view. They are presented in the manner of

As a __, I want __, so that __

This layout allows a client to communicate to a team what type of behavior they are looking for and allow the developer team to think up a solution that best fits the clients need.

The development team will then create sub-bullets called Feature Tasks which are individual tasks that must be completed by the developer to accomplish the user story. Once all of the feature tasks for an individual user story is completed, so is the story.

Below are your lab requirements in this format. Try and think up what the feature tasks would be for each story, once your done, or you get stuck, review the provided feature tasks to see what the actual tasks are for each story.

### August 22, 2020

1. Created a constructor function that created an object associated with each product, and had the following properties:
   (Name of the product and File path of image)
1. Created an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.
1. Attached an event listener to the section of the HTML page where the images are going to be displayed.
1. Once the user ‘clicks’ a product, generated three new products for the user to pick from.
1. In the constructor function, defined a property to hold the number of times a product has been clicked.
1. After every selection by the viewer, updated the newly added property to reflect if it was clicked.
1. Kept the number of rounds in a variable to allow the number to be easily changed for debugging and testing purposes.
1. Created a property attached to the constructor function itself that keeps track of all the products that are currently being considered.
1. Display the list of all the products followed by the votes received and number of times seen for each. Example: Banana Slicer had 3 votes and was shown 5 times
1. Also added a bus GIF to the landing page for added fun

### August 23, 2020

1. Added a piece outling the "WHY" behind the project.

### August 26, 2020

1. Updated the algorithm to randomly generate three unique product images from the images directory.
1. Updated the algorithm so that new products are generated, confirming that these products are not duplicates from the immediate previous set.
1. Added an additional property to the constructor function that tracks the number of times the product has been shown.
1. Updated this new property every time the product is shown as one of the three options on the screen for the viewer to choose.
1. Using ChartJS (imported from CDN), displayed the vote totals and the number of times a product was viewed in a bar chart format. 
1. Placed the bar chart in the section located beneath the three product images
1. Ensured that the bar chart only appeas after all voting data has been collected.

### August 27, 2020

1. Added some additional styling to the site, particularly around the chart. Centered it and applied some background color.

### August 29, 2020

1. Implemented local storage into the current application
1. Made sure the data persisted across both browser refreshes and resets

### September 1, 2020

1. Code Reviewed

### September 3, 2020

1. Deploy and Final Submission

