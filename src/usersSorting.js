//eslint-disable


function sortByName(cnt, array) {
    const newArray = array.slice();
    const sortByFirstName = newArray.sort(function(a, b)){ // eslint-disable-line no-control-regex
        const nameA = a.name.toLowerCase(); //eslint-disable
        const nameB = b.name.toLowerCase();
        if (cnt === 0) {
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        } else if (cnt === 1) {
            if (nameA > nameB) {
                return -1;
            }
            if (nameA < nameB) {
                return 1;
            }
            return 0;
        }
    }); // eslint-disable-line no-control-regex
    return sortByFirstName;
    // console.log("sortByFirstName");
    // console.log(sortByFirstName);
}; // eslint-disable-line no-control-regex

export default sortByName;
