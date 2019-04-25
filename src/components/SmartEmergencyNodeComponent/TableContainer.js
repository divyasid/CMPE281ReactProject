class TableContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        addMode: false,
        childlinks: this.props.data.childlinks
      };
      this.handleAddClick = this.handleAddClick.bind(this);
      this.setChildlinks = this.setChildlinks.bind(this);
      this.getData();
    }
  
    handleAddClick() {
      this.setState({ addMode: true });
    }
  
    getData() {
      console.log("AJAX GET");
    }
    
    setChildlinks(childlinks) {
      this.setState({childlinks: childlinks});
      // This is too slow - we need to call
      // a method to update directly on childlinks as passed, which is correct
      console.log(this.state.childlinks);
    }
  
    render() {
      if (this.state.addMode) {
        var instance = {};
        this.props.data.fielddata.forEach(function(fd) {
          instance[fd.name] = "";
        });
        var dataout = this.props.data;
        dataout.instances.push(instance);
      }
      else {
        dataout = this.props.data;
      }
      if (dataout.instances.length > 0) {
        
      }
      return (
        <div>
          <div className="table-responsive">
            <legend>{this.props.title}</legend>
            <Table data={dataout} onSelect={this.setChildlinks}/>
            <br/>
            <FullWidthButton buttontext={"Add Case"} onClick={this.handleAddClick} />
        </div>
        <hr/>
        <ChildLinks childlinks={this.state.childlinks}/>
        <hr/>
       </div>
      );
    }
  }

  var data = {
    "api_uri": "https://www.benhoyle.co.uk/attass/oar/cases/data/",
    "childlinks":[
      {"name": "Office Actions", "uri":""},
      {"name": "Application States", "uri":""},
      {"name": "Cited Art", "uri":""}
    ],
    "fielddata": [{
      "header": "Case Ref.",
      "inputfield": true,
      "length": 10,
      "name": "caseref",
      "placeholder": "e.g. E1234.EP"
    }, {
      "header": "Application No.",
      "inputfield": true,
      "length": 10,
      "name": "appln_no",
      "placeholder": "e.g. XX...X.X"
    }, {
      "header": "Country",
      "inputfield": true,
      "length": 7,
      "name": "countrycode",
      "placeholder": "e.g. EP"
    }, {
      "header": "Last Modified",
      "inputfield": false,
      "length": 10,
      "name": "date_modified",
      "placeholder": ""
    }],
    "instances": [{
      "appln_no": "12881603.0",
      "caseref": "R1234.W#",
      "childlinks": [{
        "name": "Office Actions",
        "uri": "https://www.benhoyle.co.uk/attass/oar/officeactions/?parent_id=2"
      }, {
        "name": "Application States",
        "uri": "https://www.benhoyle.co.uk/attass/oar/applnstates/?parent_id=2"
      }, {
        "name": "Cited Art",
        "uri": "https://www.benhoyle.co.uk/attass/oar/citedart/?parent_id=2"
      }],
      "countrycode": "EP",
      "date_created": "04 July 2016",
      "date_modified": "04 July 2016",
      "filing_date": null,
      "id": 2,
      "pub_date": "03 June 2015",
      "pub_no": "EP2877953",
      "uri": "https://www.benhoyle.co.uk/attass/oar/cases/data/2"
    }, {
      "appln_no": "79300903.6",
      "caseref": "E1234.EP#",
      "childlinks": [{
        "name": "Office Actions",
        "uri": "https://www.benhoyle.co.uk/attass/oar/officeactions/?parent_id=1"
      }, {
        "name": "Application States",
        "uri": "https://www.benhoyle.co.uk/attass/oar/applnstates/?parent_id=1"
      }, {
        "name": "Cited Art",
        "uri": "https://www.benhoyle.co.uk/attass/oar/citedart/?parent_id=1"
      }],
      "countrycode": "EP",
      "date_created": "01 June 2016",
      "date_modified": "11 July 2016",
      "filing_date": null,
      "id": 1,
      "pub_date": null,
      "pub_no": null,
      "uri": "https://www.benhoyle.co.uk/attass/oar/cases/data/1"
    }, {
      "appln_no": "1324250.1",
      "caseref": "Exxxxx.EP",
      "childlinks": [{
        "name": "Office Actions",
        "uri": "https://www.benhoyle.co.uk/attass/oar/officeactions/?parent_id=3"
      }, {
        "name": "Application States",
        "uri": "https://www.benhoyle.co.uk/attass/oar/applnstates/?parent_id=3"
      }, {
        "name": "Cited Art",
        "uri": "https://www.benhoyle.co.uk/attass/oar/citedart/?parent_id=3"
      }],
      "countrycode": "EP",
      "date_created": "11 November 2016",
      "date_modified": "11 November 2016",
      "filing_date": null,
      "id": 3,
      "pub_date": null,
      "pub_no": null,
      "uri": "https://www.benhoyle.co.uk/attass/oar/cases/data/3"
    }]
  };
  
  ReactDOM.render(
    <TableContainer title="Case View" data={data}/>,
    document.getElementById("container")
  );