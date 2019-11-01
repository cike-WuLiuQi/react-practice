class Modal extends Component {
    modalContainer = document.getElementById("modal-container");
    render() {
      return ReactDOM.createPortal(
        <div id="modal" className="modal">
          <div className="modal-content" id="modal-content">
            {this.props.children}
          </div>
        </div>,
        this.modalContainer
      );
    }
  }