class ButtonGroup extends React.Component {
    render() {
      return (
          <div className="btn-group btn-group-sm">
            {this.props.buttons}
          </div>
      );
    }
  }