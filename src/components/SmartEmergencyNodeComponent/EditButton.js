class EditButton extends React.Component {
    render() {
      return (
        <button type="button" onClick={this.props.onClick} className="edit btn btn-default" ><span className="glyphicon glyphicon-pencil"></span></button>
      );
    }
  }
  