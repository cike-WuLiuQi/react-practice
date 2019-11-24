import actions from "../actions/home";
import { TypeAction } from "../../typings/common";
interface TypeHome {

}
let initialState = {

}
export default (state: TypeHome = initialState, action: TypeAction) => {
    switch (action.type) {

        default:
            return state;
    }
}