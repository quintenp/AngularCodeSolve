# Angular Code Solve
Site hosted via github project hosting : http://quintenp.github.io/AngularCodeSolve/#/employees

_I will give a brief summary of some of the problems I spotted and how I addressed them.  I might now have listed everything here I fixed quite a bit while working on the main principals_

# Analysis

_While refactoring I realized on the EmployeeCtrl we are defining state by using $routeparams.  While this works for an application as small as this the next step to implement better practices should be to implement
a proper state structure using angulars built in $stateProvider._

#### Folder structure
**Description**: Folder structure and file placement not following best practices

**Solution**: I had to restructure the application into a more meaningful modular style as defined in numerous best practices guidelines.

#### Overall application structure was lacking best practices
**Description**: If you have a look at app.js you can see all the major modular functionality of the application was set here.  

**Solution**: What I need to do is decouple the factories / controllers / functions / data into their own files and place them into their relevant folder structures which were defined previously. Because the app is so small I decided to keep the factories as well as the directives in a single js file to reduce app load time if however the app grows it needs to be refactored into seperate files immediately.

#### Routing configuration always defaulted to genericRT
**Description**: Regardless of the route the app always refers the user to the default container not leveraging the power of the routing module angular provides.  Because of this the app not using routing properly a lot of conditionals were implemented to switch views based on current view state in the html.  

**Solution**: As we are not allowed to introduce new modules I kept with ngRoute instead of state. I implemented proper routes based on current url giving us the ability to extract and break the view down into multiple views templates making it more maintainable and modular.

#### Factories using data / functions from app.js
**Description**: The factories were using data and functions declared in the app.js, this is very bad practice. 

**Solution**: I implemented a decoupled SRP service which handled all the data retrieval operations.  I updated the factories to use the new service hence giving us more control over the flow of data and overall maintainability.

#### Navigation Buttons and Navigation Links were linked to controller specific code
**Description**: This is not bad practice per se but in the case and scope of the current app it is better for us to extract the navigation link and navigation button functionality into their own directives.

**Solution**: One of the many reason for the directive here would be that decoupling navigation and $window logic from the controllers into a more common reusable directive.  Also if we ever change the paths or logic around how the app has to navigate I would have to go and update numerous places in the html which will be a really slow process.  We also gain the ability to be able to wrap our navigation in a unit test allowing us to ensure consistency and stability in the app. 

#### Url paths were string coded into html
**Description**: Everywhere we used a link or button to navigate with ng-click we also passed a path as a parameter. 

**Solution**: I moved the url paths into a common static class which we could reference from our newly created directives.  Once again this allows us to only have to change paths in one place instead of a multitude of paths and again gives us a easy platform to test against.

#### EmployeeCntrl was comparing routeParameters to undefined
**Description**: While this works for the specific case of the params being undefined there could be cases where it came through as nulls or empty which would case our validation logic to fall over.

**Solution**: I changed the validation into  a simple java-script object valid check using the ! operator.

#### In the views we bound data using the angular binding {{}}
**Description**: This works however will case a slight flicker on the page while the application is initializing. 

**Solution**: I changed all the bindings to use ng-bind instead which will only bind after angular is fully initialized.

#### Duplicate html found
**Solution**: In employees.html i found quite a bit of html which could be extracted into a separate partial to be reused.

#### Html was insufficient and over bloated 
**Solution**: I broke the html down into logical separate views and partials. 

#### Scripts in header of page
**Description**: All the scripts were loaded from the index.html header. 

**Solution**: I moved them down to the bottom of the body, because we are now using ng-bind no flickering will occur from this change.

#### No Lint 
**Solution**: I ran and applied a basic lint over all the java script

#### Inline style found on html
**Solution**: I found a few inline style rules here and there which I extracted into css classes

 