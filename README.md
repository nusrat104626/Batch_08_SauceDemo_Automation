# Q1:
Try login with locked_out_user and verify the error message
- Navigate to the login page.
- Enter the username locked_out_user and a valid password.
- It gives one error message at a time between two error messages  1.Epic sadface: Sorry, this user has been locked 
out.. 2.Epic sadface: Username and password do not match any user in this service

# Q2:
Login with standard_user. Then from the hamburger menu Reset App State. Then Add Any three items to the cart. Then navigate up to the final checkout page and verify all the product's name and the total price. Then finish the purchase journey and verify the successful order message. Then Reset the App State again and log out.
- Log in with the standard_user and a valid password.

- Reset the app state from the hamburger menu.

- Add any three items to the cart.
   1.Sauce Labs Fleece Jacket
   2.Sauce Labs Onesie
   3.Test.allTheThings() T-Shirt (Red)

- Navigate to the checkout page and verify the product names and total price.

- Complete the purchase and verify the success message.

- Reset the app state and log out.

# Q3
Login with performance_glitch_user and Reset App State. Then filter by name (Z to A) and select the first product into the cart. Then navigate up to the final checkout page and verify all the product's name and the total price. Then finish the purchase journey and verify the successful order message. Then Reset the App State again and log out.

- Log in with the performance_glitch_user.

- Reset the app state from the hamburger menu.

- Filter products by name (Z to A).

- Add the first product to the cart.
   1.Test.allTheThings() T-Shirt (Red)

- Navigate to the checkout page and verify the product name and total price.

- Complete the purchase and verify the success message.

- Reset the app state and log out.

## PROJECT Structure
## saucedemo-automation
test
 - Question1
   - pages
     - loginActions.js #Contains functions for login actions
     - loginObjects.js #Contains all the XPaths for login page
   - specs
     - home.spec.js    #Test script for Q1 (Locked Out User Login)

  - Question2
     - pages
      - login
       - loginActions.js  # Functions for login actions
       - loginObjects.js  # Contains all the XPaths for login page
      - HumburgerMenu
       - menuActions.js   # Functions for hamburger menu actions
       - menuObjects.js   ## XPaths for hamburger menu
      - cart
       - cartActions.js    # Functions for cart actions
       - cartObjects.js    # XPaths for cart page
      - Checkout
       - checkoutActions.js  # Functions for checkout actions
       - checkoutObjectss.js # XPaths for checkout page
      - information
       - informationActions  # Functions for information actions
       - informationObjects  # XPaths for information page
      - logout
       - logoutActions       # Functions for logout actions
       - logoutObjects       # XPaths for logout
    - specs
     - home.spec.js           # Test script for Question2
    - utility
     - utilities.js           # Utility functions (Random data generation)

 - Question3
     - pages
      - login
       - loginActions.js  # Functions for login actions
       - loginObjects.js  # Contains all the XPaths for login page
      - HumburgerMenu
       - menuActions.js   # Functions for hamburger menu actions
       - menuObjects.js   # XPaths for hamburger menu
      - Dropdown
        - dropdownActions.js #Functions for dropdown Actions
        - dropdownObjects.js #Xpaths for dropdown menu
      - cart
       - cartActions.js    # Functions for cart actions
       - cartObjects.js    # XPaths for cart page
      - Checkout
       - checkoutActions.js  # Functions for checkout actions
       - checkoutObjectss.js # XPaths for checkout page
      - information
       - informationActions  # Functions for information actions
       - informationObjects  # XPaths for information page
      - logout
       - logoutActions       # Functions for logout actions
       - logoutObjects       # XPaths for logout
    - specs
     - home.spec.js           # Test script for Question3
    - utility
     - utilities.js           # Utility functions (Random data generation)
    - Allure-Results
      - Allure-Result1 #contains the test execution report of question1
      - Allure-Result2 #contains the test execution report of question2
      - Allure-Result3 #contains the test execution report of question3

## Run the project

Clone the project
 ```bash
        git clone https://github.com/nusrat104626/Batch_08_SauceDemo_Automation.git
 ```

      



