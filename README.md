# How: tried to stimulate a professional work environment for the front landing page.
1. used figma designs to emulate receiving designs from workmate designers. created pixel perfect designs.
Matching the spacing exactly as outlined by the designers. [figma design](reddit-timer-DOCS/figmaScreenShot.jpg)
2. Used a kanban board.Specifically clickUp.com. Coding was broken down to different tasks and the groups went through
phases of to do,progress, review and accomplished. [kanban use](reddit-timer-DOCS/clickUpKanban.jpg)
3. created many branches and pull requests through github. [github flow](reddit-timer-DOCS/branchesPullRequests.jpg)

For the second dynamic page, I self created the tasks to have a fuller understanding of how the page should be 
written. To ensure I grasps the components and principles, features needed in building out the page. Again, many
tasks were written with small scope.  Allows for more frequent checks of working codes.

# How to navigate

1. used css modules to avoid confusion of name overlaps in one massive master css styles page.
[css modules](reddit-timer-DOCS/cssModules.jpg)
2. used react router to go to different routing pages. Created dynamic routing pages based on user's input
of the wanted subreddit. [react router](reddit-timer-DOCS/reactRouter.jpg)
3. used Context to manage shared states across components.
[context example 1. ](reddit-timer-DOCS/context1.jpg)
[context example 2. ](reddit-timer-DOCS/context2.jpg)
[context example 3.](reddit-timer-DOCS/context3.jpg)
4. fetch data from reddit. Reddit has a 100 record limit per fetch. Needed to retrieve a marker to indicate
last record fetched to retrieve the next batch properly.  
[api fetch](reddit-timer-DOCS/apiFetch.jpg)

  
  (note: project was refractored to create a cleaner architecture and more modular design. Files were grouped into different folders and subfolders. Files were written 
  with 1 purpose in mind vs having a bloated file, performing many functions. Some of the images were from the original reddit-timer project.)

