function makeLoadedDie() {
    var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    /* your code here */
    // return Math.floor(1 + Math.random() * 6);
    var currentRoll = 0;
 

  
    return function() {
      /* your code here */
        currentRoll++
        return list[currentRoll -1]
    
      // console.log(currentRoll);
    }
      console.log(list[i]);
    }
  
  
  var rollLoadedDie = makeLoadedDie();
  
  console.log(rollLoadedDie());  // 5
  console.log(rollLoadedDie());  // 4
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());
  console.log(rollLoadedDie());
  console.log(rollLoadedDie());
  console.log(rollLoadedDie());
  console.log(rollLoadedDie());
  console.log(rollLoadedDie());
  console.log(rollLoadedDie());
  