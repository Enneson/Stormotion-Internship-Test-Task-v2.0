function turnAlgorithm(totalCounter, playerCounter, computerCounter, max) {
  let totalEven = (totalCounter % 2 == 0);
  let playerEven = (playerCounter % 2 == 0);
  let computerEven = (computerCounter % 2 == 0);
  
  //test
  //console.log('totalCounter='+totalCounter+' playerCounter='+playerCounter+' computerCounter'+computerCounter+' totalEven='+totalEven+' playerEven='+playerEven+' computerEven='+computerEven);
  //test

  //total == max + max + 1

  if( (totalCounter ==  (2 * max + 1)) ) { return 1 }; 

  //total == max + max

  if( (totalCounter == (2 * max)) &&
      !playerEven ) { return 1 }; 

  //total == max + max - 1

  if( (totalCounter == (2 * max - 1)) && 
      computerEven && playerEven ) { return 1 }; 

  // total > max + 1

  if( (totalCounter > (max + 1)) &&
      totalEven && playerEven ) { return 1 }; 
  
  if( (totalCounter > (max + 1)) &&
      totalEven && !playerEven ) { return 2 }; 
  
  if( (totalCounter > (max + 1)) &&
      !totalEven && playerEven ) { return 2 }; 
  
  if( (totalCounter > (max + 1)) &&
      !totalEven && !playerEven ) { return 1 }; 

  // total == max + 1

  if( (totalCounter == (max + 1)) &&
      playerEven ) { return max }; 
      
  if( (totalCounter == (max + 1)) &&
      !playerEven ) { return 2 }; 

  // total == max

  if( (totalCounter == max) &&
      computerEven ) { return (max - 1) }; 
      
  if( (totalCounter == max) &&
      !computerEven ) { return max }; 

  // total < max

  if( (totalCounter < max) &&
      totalEven && computerEven ) { return totalCounter }; 
      
  if( (totalCounter < max) &&
      !totalEven && !computerEven ) { return totalCounter }; 

  if( (totalCounter < max) &&
      !totalEven && computerEven ) { return (totalCounter - 1) }; 
          
  if( (totalCounter < max) &&
      totalEven && !computerEven ) { return (totalCounter - 1) }; 
  
  // total == 1

  if( totalCounter == 1 ) { return 1 };

  // total == 0

  if( totalCounter == 0 ) { return };
}

