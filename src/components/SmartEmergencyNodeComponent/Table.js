class Table extends React.Component {
    constructor(props) {
        super(props);
        // Set state variable for selected row
        this.state = {
          selected: 0
        };
        this.setSelectedRow = this.setSelectedRow.bind(this);
      }
    
    setSelectedRow(id) {
      this.setState({selected:id});
      console.log(id);
      this.props.data.instances.forEach(function(instance) {
        if (instance.id == id) {
          console.log(instance.childlinks);
          this.props.onSelect(instance.childlinks);
        }
      }, this);
    }
    
    render() {
      var rows = [];
      const fielddata = this.props.data.fielddata;
      this.props.data.instances.forEach(function(instance) {
        if (instance.id == this.state.selected) {
          instance.selected = true;
        } else {
          instance.selected = false;
        }
        rows.push(<TableRow setSelectedRow={this.setSelectedRow} instance={instance} fielddata={fielddata} key={instance.id} />);
      }, this);
      return (
        <table className="table table-striped">
          <thead><TableHeader fielddata={fielddata}/></thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }