/*  Regular Expressions 
    Starts with  / (code) /(flags)    
    ------------------------------ 
    /ninja/                     (Searchs for ninja , case sensitive, only the first match)
    / ninja /g                  (searchs for ninja, case sensitive, multiple matches )
    / ninja /gi                 (searchs for ninja, case insesitive, multiple matches) 
    
    / [CHARACTER SET] /         (Searching for anything inside [X], counts as 1 character only )
    / [ng]inja /gi              (searchs for N or G before inja,  ninja - ginja)
    / [^CHARACTER SET] /        (^ = not include this characters)
    / [^p]000 /i                (Not including Character P before 000)
*/    
/*  ..Ranges..
    / [a-z] /                   (Includes from a to z , with - we set a range from left to right "a-z" )
    / [0-9] /                   (Range works the same for numbers)
    / [A-Z] /                   (From A to Z , in capital if we don't want to include insenstive flag for all expression)
    / [a-zA-Z] /                (From a to z OR A to Z , if we don't want to use insensitive flag for all expression)   
*/
/*  ..Repeating..
    / [0-9]+ /                  (Matches between ONE and UNLIMITED times characters inside the CHARACTER SET []) + Quantifier
    / [0-9]{11} /               (Matches EXACTLY the amount of times inside {x} the characters inside the CHARACTER SET)
    / [a-z]{11} /               (Matches EXACTLY the amount of times inside {x} the characters inside the CHARACTER SET)
    / [a-z]{5,8} /              (Matches the character set between 5 to 8 times)
    / [a-z]{5,}  /              (Matches ATLEAST from 5 characters to UNLIMITED)
*/
/*  ..Meta Characters..
    \d                          (Match any digit character (same as [0-9]))
    \w                          (Match any word character,(a-z , A-Z , 0-9 , _'s ))
    \s                          (Match a whitespace character, space - tabs etc)
    \t                          (Match only Tab character)

    d       -- matches the literal character 'D'
    /d      -- Matches any digit character

    / \d\s\w /      =   (Searching a Digit (/d) first , then whitespace/tab (/s) and last any word character(/w) )
    1 R , 8  0      =   (both are correct with the expression above)

    / \w{1,16}\s\d{11}  =         (Matches between 1 to 16 word character , then Space , then exact 11 digit characters)
*/    
/*  ..Special Characters..

    +       The one-or-more quantifier
    \       The escape character        (\+ , \[], \?, \., \*)
    []      The Character Set      
    [^]     The negate Character set
    ?       The zero-or-one quantifier (makes a preciding character option)    Using ? after () means everything after the outcome of ()    
    .       Any character whatsoever (not new line character)
    *       The 0-or-more quantifier (a bit like +, but can be Zero)
    |       Means OR , we should use () if we want a specific match / (p|t)yte /

    / hello? /      O is optional because it's before "?",  both "hello" and "hell" are correct
    / he?llo? /     Both e and o are optional , "Hello" "hell" "hll" "hllo" are all correct
    / a[a-z]? /     After "a" there is no need for character because of "?", it can be any character from range a to z

    / car. /        With "." being any character means that it has to be something , can't be zero .  car"s" - car"b" car"d".
    / a[a-z]* /     As many characters (even zero) after the first a (not a number)

    / .+ /      =   Any Character (but can't be zero) matches
*/
/*  .. Starting & Ending pattern ..

    / ^[a-z]{5} /      Expression after ^ means that it has to be at the START of the string to match


    / [a-z]{5}$ /      Expression before $ means that it has to be at the END of the string to match
    / ^[a-z]{5}$ /     It has to be 5 letters at the start of the string and it ends right after it to match.

    */

/* Code Below */

const inputs = document.querySelectorAll('input'); // Select all our input fields

const patterns = {
    phone: /^\d{11}$/, 
    username : /^[a-z\d]{5,12}$/i,
    email: /^[a-z\d]*@[a-z]*\.com$/i,
    password: /^[a-z\d@\-_]{8,20}$/i,
    slug: /^[a-z\d\-]{8,20}$/
}
/*
const username    = / ^[a-z0-9]{5,12}$ /i;
const email       = / ^[a-z0-9]*@[a-z]*\.com$ /i;
const password    = / ^[a-z0-9@\-_]{8,20}$/i;
const phone       = / ^\d{11}$ /;
const slug        = / ^[a-z0-9\-]{8,20}$/;  */

// Validation Fuction
function Validation(field,regex){ // Create Function to check our Regex
   if(regex.test(field.value)){  // Test the regex pattern
        field.className = 'valid'
   }  else {
        field.className = 'invalid'
   }

}

inputs.forEach((input) => {         // circle around inputs
    input.addEventListener('keyup',(e) => { // e = event
        //console.log(e.target.attributes.name.value);    // select our input values when type
        Validation(e.target , patterns[e.target.attributes.name.value])
    });
});