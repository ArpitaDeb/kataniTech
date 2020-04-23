This is wrong
function myInitials(first, middle, last){
    let initials = '';

    initials += first.toUpperCase();
    initials += middle.toUpperCase();

    if (last !== undefined) {
        initials += last.toUpperCase();
    }
    
    return(initials);
}


