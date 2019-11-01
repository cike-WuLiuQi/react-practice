import React, { Component } from "react";
import ReduxContext from "./Context";
import { bindActionCreators } from "../redux";

export default function connect(mapStateToProps, mapDispatchToProps) {
  return function(InnerComponent) {
    return class extends Component {
      static contextType = ReduxContext; // this.context = {store: store}
      constructor(props, context) {
        super(props);
        this.state = this.mapState = mapStateToProps(context.store.getState());
        if (typeof mapDispatchToProps === "function") {
          this.actions = mapDispatchToProps(context.store.dispatch);
        } else if (typeof mapDispatchToProps === "object") {
          this.actions = bindActionCreators(
            mapDispatchToProps,
            context.store.dispatch
          );
        }
      }
      componentDidMount() {
        this.unsubscribe = this.context.store.subscribe(() => {
          let newState = mapStateToProps(this.context.store.getState());
          if (this.mapState !== newState) {
            this.mapState = newState
            this.setState(newState);
          }
        });
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        return (
          <InnerComponent {...this.props} {...this.state} {...this.actions} />
        );
      }
    };
  };
}
