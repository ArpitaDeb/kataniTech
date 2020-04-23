Consider a function "myInitials". The function should take as many as three names (first, middle, and last). "myInitials" should return a string with only the first letters from each name, in upper case.

Note that, if the user doesn't define middle name, the function should return the initials of the first and last names only.

function myInitials(first, middle, last){
    let initials = '';

    initials += first[0];
    initials += middle[0];

    if (last !== undefined) {
        initials += last[0];
    }
    
    return initials.toUpperCase();
}