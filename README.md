        

# APPLICATION NAME : AKHAN NAME CALCULATOR
    
## CONTRIBUTORS : 

Esther Wachuka Ng'aru

## LINK : https://washucode.github.io/Akhan-Calculator/

    
## PURPOSE: 
To find the name of an individiual based on the exact day they were born.
  
## CONTRIBUTE:

To contribute:
 * Fork Repository.
 * On your terminal run the command git clone https://github.com/washucode/Akhan-Calculator
 * Again on you terminal run the command cd Akhan-Calculator.
 * atom . or code . depending on the text editor you use.
 * feel free to play around with it.
 
## BDD:
Feature: As a user I want to key in my birthdate so that i can get my Akhan Name.
Scenario: User supplies correct birthdate
Given that I am  on the page with the form
When I enter my birthdate correctly
And click ‘Submit’
Then I get an alert of my Akhan Name

Scenario: User does NOT enter any date
Given that I am  on the page with the form
When I don't enter date on the date picker
and click ‘Submit’
Then I see an alert "Your Akhan Name is undefined."

## LICENSE

This project is licensed under the MIT License - see the [license.md](license.md) file for details.

## AKNOWLEDGEMENTS

[Moringa Cirruculum.Check out Moringa here:] (https://moringaschool.com)
W3C Schools.




Talk to me: estherw8525@gmail.com
