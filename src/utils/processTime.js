// Takes a time in 24 hour format and returns a 12 hour format string 
// in form of XX:YY am/pm.

export function processTime (hours, minutes) {

    const minutesString = (minutes < 10)? "0"+minutes: ""+minutes;
    if( hours === 0 ){
        return ("12:"+minutesString+" am");
    } else if ( hours < 12 ) {
        return ( hours+":"+minutesString+" am");
    } else if ( hours > 12 ) {
        return ( (hours - 12)+":" +  minutesString + " pm");
    } else {
        return (hours+":" + minutesString+ " pm");
    }
}