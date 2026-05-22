class MyCalendar {
    constructor() {
       this.arr = []  
    }

    /**
     * @param {number} startTime
     * @param {number} endTime
     * @return {boolean}
     */
    book(startTime, endTime) {
       for(const [s,e] of this.arr){
         if(s <endTime && startTime <e){
          return false
         } 
       }
    this.arr.push([startTime,endTime])
       return true
    }
}
