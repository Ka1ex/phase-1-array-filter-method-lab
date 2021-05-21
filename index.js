// Code your solution here
function findMatching(driversArray, driversName){

let correctDriver = driversArray.filter(function(seltectedDriver){
return seltectedDriver.toLowerCase() === driversName.toLowerCase()
}) 
return correctDriver
}

function fuzzyMatch (driverArr, driversName2){

    let correctDriver2 = driverArr.filter((seltectedDriver2) => [...seltectedDriver2][0] === [...driversName2][0]
    )
    return correctDriver2
}
const matchName = (arrayOfDrivers, driversName3) =>{
    let correctDriver3 = arrayOfDrivers.filter(chosenDriver => chosenDriver.name === driversName3)
    return correctDriver3

}