function theBeatlesPlay(musicians, instruments) {
  var array = [];

  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);

  }
  return array
}


function johnLennonFacts(more_facts) {
  let new_array = [];
  let i = 0;
  while (i < more_facts.length) {
  new_array.push(more_facts[i] + "!!!");
    i++;
  }
  return new_array;
}


function iLoveTheBeatles(number){
  let i = number;
  var array = [];
   do {
     array.push("I love the Beatles!");
     i++;
   } while (i < 15);

   return array
}
