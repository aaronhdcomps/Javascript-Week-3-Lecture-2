let myGrade = -2;
/*if(myGrade >= 90) {
    console.log("You're Winner!");
} else if(myGrade >= 80) {
    console.log("Great Job! You get an B!");
} else if(myGrade >= 70) {
    console.log("Its C. You can do better.");
} else if(myGrade >= 60) {
    console.log("Y U NO STUDY MOR?");
} else {
    console.log("You're Failed!");
}
*/

switch (true) {
    case (myGrade == 100):
        console.log("Perfect");
        break;
    case (myGrade >= 90):
        console.log("Excellent");
        break;    
    case (myGrade >= 80):
        console.log("Very Good");
        break;
    case (myGrade >= 70):
        console.log("Good");
        break;
    case (myGrade >= 60):
        console.log("Not Good");
        break;
    default:
        console.log("Fail");
}