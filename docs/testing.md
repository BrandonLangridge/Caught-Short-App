# Testing

Functional requirements:

- FR1: The system shall pull data from the Bristol Open Data database, to be queried by specific criterias given by the user. UC1, UC2.
- FR2: The system shall provide a list of all facilities, including their addresses, that fit a users criteria (eg. unisex toilets, baby changing facilities).UC1, UC2.
- FR3: The system should provide a list of facilities near a given user's location. UC1, UC2.
- FR4: The system could show users the locations of facilities on an interactive map. UC1, UC2.
- FR5: The system could allow restaurant and pub owners to add information about their facilities to the app. UC3
- FR6: The system won't allow users to create a profile to save their preferences for future use. UC1, UC2.

Non-Functional Requirements:

- NFR1: Ths system shall have simplistic usability when filtering individual needs to select the right facility for the user. UC1, UC2.
- NFR2: The system shall make sure lists presented to the user can be easily read by a person of average vision. UC1, UC2.
- NFR3: The system shall be operable on the most common PC browsers and on android. UC1, UC2.
- NFR4: The system shall provide resutls from user criteria without delay. UC1, UC2.

## Test Plan

Test Case: FR1 – Pull data from Bristol Open Data
Use Case: UC1, UC2
Description: Test if the system pulls data from the Bristol Open Data database based on the user’s specified criteria.
Prerequisites: The Bristol Open Data database should be accessible and contain relevant data.
Test Data: User provides filtering criteria for specific facilities (e.g. unisex toilets, baby changing).
Manual Test Steps: 
-Input criteria for specific facilities.
-Verify that the system queries Bristol Open Data and retrieves relevant facilities.
Expected Outcome: Data from the Bristol Open Data database is correctly pulled and matches the filtering criteria.

Test Case: FR2 – Provide a list of facilities based on criteria
Use Case: UC1, UC2
Description: Verify that the system provides a list of facilities matching the user's specified criteria (e.g. unisex toilets, baby changing).
Prerequisites: The system has access to the database and filtering criteria.
Test Data: User specifies facility requirements.
Manual Test Steps: 
-Input filtering criteria (e.g. unisex toilets).
-Check that the list of facilities is returned and is accurate according to the criteria.
Expected Outcome: The list of facilities matches the user's filtering criteria.

Test Case: FR3 – Provide a list of facilities near the user’s location
Use Case: UC1, UC2
Description: Test the system's ability to return facilities based on the user’s current location.
Prerequisites: User's location data is accessible.
Test Data: User’s location data.
Manual Test Steps: 
-Allow the system to access the user’s location.
-Verify that the system returns a list of nearby facilities that match the user's criteria.
Expected Outcome: The system provides a list of facilities near the user’s location.

Test Case: FR4 – Show locations on an interactive map
Use Case: UC1, UC2
Description: Test the system’s ability to display facility locations on an interactive map.
Prerequisites: The interactive map must be integrated with the app.
Test Data: Data of facility locations with latitude and longitude.
Manual Test Steps: 
-Query for facilities and check if the interactive map is displayed.
-Validate that facility locations are correctly marked on the map.
Expected Outcome: Facility locations are displayed on the map.

Test Case: FR5 – Allow restaurant and pub owners to add information
Use Case: UC3
Description: Verify that restaurant and pub owners can successfully add facility information to the app.
Prerequisites: Owners must have access to the update.add page.
Test Data: Restaurant and pub information (facility type, address, description).
Manual Test Steps: 
-Verify the owner can enter facility details through the app interface.
-Ensure the entered data is successfully saved.
Expected Outcome: Restaurant and pub owners can add their facility information successfully.

Test Case: FR6 – No profile creation for users
Use Case: UC1, UC2
Description: Verify that users cannot create profiles to save preferences.
Prerequisites: Profile creation feature is disabled.
Test Data: User input attempt for profile creation.
Manual Test Steps: 
-Attempt to create a profile and verify that the system prevents it.
Expected Outcome: Users cannot create profiles.

Test Case: NFR1 – Simplistic usability for filtering
Use Case: UC1, UC2
Description: Ensure the system allows users to filter individual needs easily.
Prerequisites: Functional filtering interface is available.
Test Data: Various filtering criteria.
Manual Test Steps: 
-Test filtering features for ease of use.
-Verify that filtering options are easy to navigate and understand.
Automated Test Steps: 
-Automate the testing of filtering options, ensuring all filters work as intended.
Expected Outcome: Filtering is intuitive and easy for users to use.

Test Case: NFR2 – Readability of lists
Use Case: UC1, UC2
Description: Verify that the list of facilities is easy to read by a person with average vision.
Prerequisites: The UI should have readable font and color contrasts.
Test Data: A variety of facilities listed.
Manual Test Steps: 
-Display the list of facilities on the system.
-Check readability by a user with average vision.
 Expected Outcome: The list is easily readable.

Test Case: NFR3 – Cross-browser compatibility
Use Case: UC1, UC2
Description: Verify that the system works on all common PC browsers (Chrome, Firefox, etc.) and on Android.
Prerequisites: The system should be designed for cross-browser compatibility.
Test Data: Test on different browsers (Chrome, Firefox, Edge) and Android devices.
Manual Test Steps: 
-Open the system on different browsers and an Android device.
-Check for any display or functionality issues.
Expected Outcome: The system works as expected across all common browsers and on Android.

Test Case: NFR4 – System response time
Use Case: UC1, UC2
Description: Ensure that the system provides results based on user criteria without delay.
Prerequisites: The system should be optimized for speed.
Test Data: User queries for facilities.
Manual Test Steps: 
-Input search criteria and measure the time it takes to display results.
Automated Test Steps: 
-Automate queries and measure the response time.
Expected Outcome: Results are provided promptly, within an acceptable delay.


Test Runs
TODO: For each test described above, indicate the current status. 
Create a requirements traceability matrix to validate the completeness of the product.

| Use-Case ID | Requirement ID |              Test Case                               |   Status  |
| UC1, UC2    | FR1            | Pull data from Bristol Open Data                     |    Pass   |
| UC1, UC2    | FR2            | Provide a list of facilities based on criteria       |    Pass   |
| UC1, UC2    | FR3            | Provide a list of facilities near the user’s location|    Pass   |
| UC1, UC2    | FR4            | Show locations on an interactive map                 |    Pass   |
| UC3         | FR5            | Allow restaurant/pub owners to add information       |    Fail   |
| UC1, UC2    | FR6            | No profile creation for users                        |    Pass   |
| UC1, UC2    | NFR1           | Simplistic usability for filtering                   |    Pass   |
| UC1, UC2    | NFR2           | Readability of lists                                 |    Pass   |
| UC1, UC2    | NFR3           | Cross-browser compatibility                          |    Fail   |
| UC1, UC2    | NFR4           | System response time                                 |    Pass   |

TODO: Add rows for each test, current status is eg. pass/fail
