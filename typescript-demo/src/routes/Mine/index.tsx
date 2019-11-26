import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import actions from "../../store/actions/mine"
import { TypeRootState } from "../../store/reducers";
import { TypeMine } from '../../store/reducers/mine';

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = typeof actions;
interface IParams {

}
type RouteProps = RouteComponentProps<IParams>
type Props = StateProps & DispatchProps & RouteProps & {
    children?: any
}
export interface HomeProps {

}

export interface HomeState {

}

class Mine extends React.Component<HomeProps, HomeState> {
    state = { : }
    render() {
        return (
            <div>
                home
            </div>
        );
    }
}
const mapStateToProps = (state: TypeRootState): TypeMine => state.home;

export default connect(mapStateToProps, actions)(Mine);