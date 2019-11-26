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
export interface MineProps {

}

export interface MineState {

}

class Mine extends React.Component<Props, MineState> {
    // state = { : }
    render() {
        return (
            <div>
                Mine
            </div>
        );
    }
}
const mapStateToProps = (state: TypeRootState): TypeMine => state.mine;

export default connect(mapStateToProps, actions)(Mine);