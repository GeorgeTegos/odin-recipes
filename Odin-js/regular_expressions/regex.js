/*  Regular Exprenssions 
    Starts with  / (code) /(flags)    
    ------------------------------ 
    /ninja/                     (Searchs for ninja , case sensitive, only the first match)
    / ninja /g                  (searchs for ninja, case sensitive, multiple matches )
    / ninja /gi                 (searchs for ninja, case insesitive, multiple matches) 
    
    / [CHARACTER SET] /         (Searching for anything inside [X], counts as 1 character only )
    / [ng]inja /gi              (searchs for N or G before inja,  ninja - ginja)
    / [^CHARACTER SET] /        (^ = not include this characters)
    / [^p]000 /i                (Not including Character P before 000)
    
        ..Ranges..
    / [a-z] /                   (Includes from a to z , with - we set a range from left to right "a-z" )
    / [0-9] /                   (Range works the same for numbers)
    / [A-Z] /                   (From A to Z , in capital if we don't want to include insenstive flag for all expression)
    / [a-zA-Z] /                (From a to z OR A to Z , if we don't want to use insensitive flag for all expression)   

        ..Repeating..
    / [0-9]+ /                  (Matches between ONE and UNLIMITED times characters inside the CHARACTER SET []) + Quantifier
    / [0-9]{11} /               (Matches EXACTLY the amount of times inside {x} the characters inside the CHARACTER SET)
    / [a-z]{11} /               (Matches EXACTLY the amount of times inside {x} the characters inside the CHARACTER SET)
    / [a-z]{5,8} /              (Matches the character set between 5 to 8 times)
    / [a-z]{5,}  /              (Matches ATLEAST from 5 characters to UNLIMITED)

    */