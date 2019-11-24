import * as React from "react";
import { connect } from "react-redux";
import actions from "../../store/actions/home"
import { TypeRootState } from "../../store/reducers";

export interface HomeProps {

}

export interface HomeState {

}

class Home extends React.Component<HomeProps, HomeState> {
    state = { : }
    render() {
        return (
            <div>
                home
            </div>
        );
    }
}
const mapStateToProps = (state: TypeRootState) => state.home;

export default connect(mapStateToProps, actions)(Home);