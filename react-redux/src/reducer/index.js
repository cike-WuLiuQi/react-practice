import counter1 from "./counter1";
import counter2 from "./counter2";
import counter from "./counter";

import { combineReducers } from "../redux";

let reducer = combineReducers({
  counter1,
  counter2
});

/**
 * {
 *  a: counter1,
 * b: counter2
 * }
 */

//  console.log('reducer', reducer());
 

export default counter;
