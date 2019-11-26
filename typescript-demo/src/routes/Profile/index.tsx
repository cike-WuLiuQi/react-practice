import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import actions from "../../store/actions/profile"
import { TypeRootState } from "../../store/reducers";
import { TypeProfile } from '../../store/reducers/profile';

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = typeof actions;
interface IParams {

}
type RouteProps = RouteComponentProps<IParams>
type Props = StateProps & DispatchProps & RouteProps & {
    children?: any
}
export interface ProfileProps {

}

export interface ProfileState {

}

class Profile extends React.Component<Props, ProfileState> {
    // state = { : }
    render() {
        return (
            <div>
                Profile
            </div>
        );
    }
}
const mapStateToProps = (state: TypeRootState): TypeProfile => state.profile;

export default connect(mapStateToProps, actions)(Profile);