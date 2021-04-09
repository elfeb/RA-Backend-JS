// get the individual note ID
function getNoteID () {
    // assign the return value of getExistingNotes - a JSONString value - to noteObject variable
    let noteObject = getExistingNotes();

    // if the noteObject doesn't exist, return number 1 - setting the first number on the list
    if(!noteObject) return 1;

     // assign an array properties of noteObject object
    const keysArray = Object.keys(noteObject);
    // creates a new array of keys with Number data type
    const numberKeys = keysArray.map((key) => Number(key));
    // display numberKeys array
    console.log(numberKeys);
    // Find the highest number of the array then add 1 to it
    return Math.max(...numberKeys) + 1;
    
}

// get the existing notes from the localStorage
function getExistingNotes () {
    // get the value of 'notes' property and then assign it to variable 'notes'
    let notes = localStorage.getItem('notes');

    // if can't find notes, return null
    if(!notes) return null;
    // else return it as an object {}
    return JSON.parse(notes);
}

