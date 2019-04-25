class TableRow extends React.Component {
    constructor(props) {
      super(props);
      
      this.handleSelectRow = this.handleSelectRow.bind(this);
      this.handleEditModeClick = this.handleEditModeClick.bind(this);
      this.handleExitEditModeClick = this.handleExitEditModeClick.bind(this);
      this.handleDeleteClick = this.handleDeleteClick.bind(this);
      this.handleConfirmEditClick = this.handleConfirmEditClick.bind(this);
      this.updateValues = this.updateValues.bind(this);
      
      var editMode = false;
      var added = false;
      // If no created date then row is a newly added row
      if (!this.props.instance.date_created) {
        editMode = true;
        added = true;
      }
      var instance = {};
      this.props.fielddata.forEach(function(fd) {
        instance[fd.name] = this.props.instance[fd.name];
      }, this);
      instance.id = this.props.instance.id;
      this.state = {
        editMode: editMode,
        instance: instance,
        revised_instance: instance,
        deleted: false,
        added: added,
        selected: false
      };
    }
  
    handleSelectRow() {
      // Need a call to parent as only one row may be selected?
      if (!this.state.selected) {
        this.setState({ selected: true });
      } else {
        this.setState({ selected: false });
      }
      this.props.setSelectedRow(this.props.instance.id);
    }
    
    handleEditModeClick() {
      this.setState({ editMode: true });
    }
  
    handleExitEditModeClick() {
      this.setState({ editMode: false });
      this.setState({
        revised_instance: this.state.instance
      });
      if (this.state.added) {
        this.setState({deleted: true});
      }
    }
  
    handleDeleteClick() {
      this.setState({deleted:true});
      console.log("AJAX DELETE");
      console.log(this.state.instance.id);
    }
  
    handleConfirmEditClick() {
      // CONFIRM revised_instance
      this.setState({
        editMode: false,
        instance: this.state.revised_instance
      });
      if (this.state.added) {
        console.log("AJAX POST");
        console.log(revised_instance);
      }
      else {
        console.log("AJAX PATCH");
        console.log(revised_instance);
        // Reset added flag
        this.setState({added:false});
      }
    }
  
    updateValues(key, value) {
      // Method to update values passed from EditField
      var temp_revised_instance = this.state.revised_instance;
      temp_revised_instance[key] = value;
      this.setState({
        revised_instance: temp_revised_instance
      });
    }
  
    render() {
      let row = [];
      let buttons = null;
      if (this.state.deleted) {
        return <tr></tr>;
      }
      if (this.state.editMode) {
        // In edit mode - set buttons for edit 
        buttons = [<ConfirmButton onClick={this.handleConfirmEditClick}/>, <CancelButton onClick={this.handleExitEditModeClick}/>];
        // In edit mode - set field values and placeholders
        this.props.fielddata.forEach(function(fd) {
          var field = {
            name : fd.name,
            placeholder : fd.placeholder,
            value : this.state.instance[fd.name]
          };
          // In edit mode - add EditFields for editable fields
          if (fd.inputfield) {
            row.push(<EditField field={field} key={field.name} sendValueToParent={this.updateValues}/>);
          } else {
            row.push(<DisplayField onClick={""} field={""} key={field.name}/>)
          }
        }, this);
      } else {
        // In display mode - add edit/delete buttons
        buttons = [<EditButton onClick={this.handleEditModeClick}/>, <DeleteButton onClick={this.handleDeleteClick}/>];
        // In display mode - add DisplayField
        this.props.fielddata.forEach(function(fd) {
          var field = {
            name: fd.name, 
            value: this.state.instance[fd.name]
          };
          row.push(<DisplayField onClick={this.handleSelectRow} field={field} key={field.value}/>);
        }, this);
      }
      // Set selected status
      if (this.props.instance.selected) {
        return (
          <tr className="success">{row}<ButtonGroup buttons={buttons}/></tr>
        ); 
      } else {
        return (
          <tr>{row}<ButtonGroup buttons={buttons}/></tr>
        ); 
      }
    }
  
  }