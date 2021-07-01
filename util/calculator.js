export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
  hintNum: " ",
  randNum: "",
  counter: 0,
  score: 0
};


export const handleNumber = (value, state) => {
  if (state.currentValue === "0") {
    return { currentValue: `${value}` };
  }

  return {
    currentValue: `${value}`
  };
};

export const handleEqual = state => {
 
  if(state.counter <= 4){

  

  if(state.randNum == state.currentValue){


   return{
     score: state.score + 10,
     currentValue : state.currentValue =  "You are correct"
     
   }

}
else{
  return{
  currentValue : state.currentValue =  "You are wrong",
  counter : state.counter + 1
   }
  }
}

  else{
    return{
      currentValue : state.currentValue =  "you lose"
      
    }
  }
  
};

const calculator = (type, value, state,text) => {
  switch (type) {
    case "number":
      return handleNumber(value, state);
    case "operator":
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: "0"
      };


    case "equal":
      return handleEqual(state);


    case "clear":
      return{
        currentValue: "0",
        hintNum: ""
      } ;

      case "reset":
        return{
  
          currentValue: "0",
          hintNum: "",
          randNum: "",
          counter: 0,
          score: 0
        } ;

    case "gen":
      return {
        randNum: state.randNum = Math.floor(Math.random() * 10)
      };
    case "hint":
      return {
        hintNum: state.randNum - 1

      };
      case "rev":
      return {
        hintNum: state.randNum

      };

      case "count":
        return {
          hintNum: state.counter
  
        };

        
      case "show":
        return {
          hintNum : state.score
  
        };

            
        

    default:
      return state;
  }
};

export default calculator;
