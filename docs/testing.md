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

<br> Test Case: FR1 – Pull data from Bristol Open Data
<br> Use Case: UC1, UC2
<br> Description: Test if the system pulls data from the Bristol Open Data database based on the user’s specified criteria.
<br> Prerequisites: The Bristol Open Data database should be accessible and contain relevant data.
<br> Test Data: User provides filtering criteria for specific facilities (e.g. unisex toilets, baby changing).
<br> Manual Test Steps: 
<br> -Input criteria for specific facilities.
<br> -Verify that the system queries Bristol Open Data and retrieves relevant facilities.
<br> Expected Outcome: Data from the Bristol Open Data database is correctly pulled and matches the filtering criteria.

<br> Test Case: FR2 – Provide a list of facilities based on criteria
<br> Use Case: UC1, UC2
<br> Description: Verify that the system provides a list of facilities matching the user's specified criteria (e.g. unisex toilets, baby changing).
<br> Prerequisites: The system has access to the database and filtering criteria.
<br> Test Data: User specifies facility requirements.
<br> Manual Test Steps: 
<br> -Input filtering criteria (e.g. unisex toilets).
<br> -Check that the list of facilities is returned and is accurate according to the criteria.
<br> Expected Outcome: The list of facilities matches the user's filtering criteria.

<br> Test Case: FR3 – Provide a list of facilities near the user’s location
<br> Use Case: UC1, UC2
<br> Description: Test the system's ability to return facilities based on the user’s current location.
<br> Prerequisites: User's location data is accessible.
<br> Test Data: User’s location data.
<br> Manual Test Steps: 
<br> -Allow the system to access the user’s location.
<br> -Verify that the system returns a list of nearby facilities that match the user's criteria.
<br> Expected Outcome: The system provides a list of facilities near the user’s location.

<br> Test Case: FR4 – Show locations on an interactive map
<br> Use Case: UC1, UC2
<br> Description: Test the system’s ability to display facility locations on an interactive map.
<br> Prerequisites: The interactive map must be integrated with the app.
<br> Test Data: Data of facility locations with latitude and longitude.
<br> Manual Test Steps: 
<br> -Query for facilities and check if the interactive map is displayed.
<br> -Validate that facility locations are correctly marked on the map.
<br> Expected Outcome: Facility locations are displayed on the map.

<br> Test Case: FR5 – Allow restaurant and pub owners to add information
<br> Use Case: UC3
<br> Description: Verify that restaurant and pub owners can successfully add facility information to the app.
<br> Prerequisites: Owners must have access to the update.add page.
<br> Test Data: Restaurant and pub information (facility type, address, description).
<br> Manual Test Steps: 
<br> -Verify the owner can enter facility details through the app interface.
<br> -Ensure the entered data is successfully saved.
<br> Expected Outcome: Restaurant and pub owners can add their facility information successfully.

<br> Test Case: FR6 – No profile creation for users
<br> Use Case: UC1, UC2
<br> Description: Verify that users cannot create profiles to save preferences.
<br> Prerequisites: Profile creation feature is disabled.
<br> Test Data: User input attempt for profile creation.
<br> Manual Test Steps: 
<br> -Attempt to create a profile and verify that the system prevents it.
<br> Expected Outcome: Users cannot create profiles.

<br> Test Case: NFR1 – Simplistic usability for filtering
<br> Use Case: UC1, UC2
<br> Description: Ensure the system allows users to filter individual needs easily.
<br> Prerequisites: Functional filtering interface is available.
<br> Test Data: Various filtering criteria.
<br> Manual Test Steps: 
<br> -Test filtering features for ease of use.
<br> -Verify that filtering options are easy to navigate and understand.
<br> Automated Test Steps: 
<br> -Automate the testing of filtering options, ensuring all filters work as intended.
<br> Expected Outcome: Filtering is intuitive and easy for users to use.

<br> Test Case: NFR2 – Readability of lists
<br> Use Case: UC1, UC2
<br> Description: Verify that the list of facilities is easy to read by a person with average vision.
<br> Prerequisites: The UI should have readable font and color contrasts.
<br> Test Data: A variety of facilities listed.
<br> Manual Test Steps: 
<br> -Display the list of facilities on the system.
<br> -Check readability by a user with average vision.
<br> Expected Outcome: The list is easily readable.

<br> Test Case: NFR3 – Cross-browser compatibility
<br> Use Case: UC1, UC2
<br> Description: Verify that the system works on all common PC browsers (Chrome, Firefox, etc.) and on Android.
<br> Prerequisites: The system should be designed for cross-browser compatibility.
<br> Test Data: Test on different browsers (Chrome, Firefox, Edge) and Android devices.
<br> Manual Test Steps: 
<br> -Open the system on different browsers and an Android device.
<br> -Check for any display or functionality issues.
<br> Expected Outcome: The system works as expected across all common browsers and on Android.

<br> Test Case: NFR4 – System response time
<br> Use Case: UC1, UC2
<br> Description: Ensure that the system provides results based on user criteria without delay.
<br> Prerequisites: The system should be optimized for speed.
<br> Test Data: User queries for facilities.
<br> Manual Test Steps: 
<br> -Input search criteria and measure the time it takes to display results.
<br> Automated Test Steps: 
<br> -Automate queries and measure the response time.
<br> Expected Outcome: Results are provided promptly, within an acceptable delay.


Test Runs

| Use-Case ID | Requirement ID | Test Case                                            | Status |
|-------------|----------------|------------------------------------------------------|--------|
| UC1, UC2    | FR1            | Pull data from Bristol Open Data                     | Pass   |
| UC1, UC2    | FR2            | Provide a list of facilities based on criteria       | Pass   |
| UC1, UC2    | FR3            | Provide a list of facilities near the user’s location| Pass   |
| UC1, UC2    | FR4            | Show locations on an interactive map                 | Pass   |
| UC3         | FR5            | Allow restaurant/pub owners to add information       | Fail   |
| UC1, UC2    | FR6            | No profile creation for users                        | Pass   |
| UC1, UC2    | NFR1           | Simplistic usability for filtering                   | Pass   |
| UC1, UC2    | NFR2           | Readability of lists                                 | Pass   |
| UC1, UC2    | NFR3           | Cross-browser compatibility                          | Pass   |
| UC1, UC2    | NFR4           | System response time                                 | Pass   |


