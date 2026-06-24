let student = {
    name: "Sueda",
    midterm: 70,
    final: 80,
}

function calculateAverage(studentObj) {
    let average = studentObj.midterm * 0.4 + studentObj.final * 0.6;
    return average;
}

function checkPassStatus(studentObj, avg){
    if (avg >= 50) {
        console.log(studentObj.name + " passed the course with an average of " + avg + "!");
    }else {
        console.log(studentObj.name + " failed the course with an average of " + avg + ".");
    }
}
let myAverage = calculateAverage(student);
checkPassStatus(student, myAverage);