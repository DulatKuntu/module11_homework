function getInfo(persons){
    let avgAge=0
    let count=0
    for(let val of persons){
        if(val.age>=0&&val.age<=140){
            avgAge += val.age
            count++
        }else{
            return "age cannot be less than 0 or bigger than 140"
        }
    }
    if(count==0){
        return "0 elements in the array"
    }
    return avgAge/count
}

module.exports = getInfo;