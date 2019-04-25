import React, { Component } from "react";
import NavbarSub from '../Common/NavbarSub';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class SmartEmergencySensor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeAddFlag1: false,
            activeDeleteFlag1: false,
            activeUpdateFlag1: false,
        }
    };
    openAddForm = () =>
        this.setState({
            activeAddFlag1: true,
            activeDeleteFlag1: false,
            activeUpdateFlag1: false
        });

    openDeleteForm = () =>
        this.setState({
            activeDeleteFlag1: true,
            activeAddFlag1: false,
            activeUpdateFlag1: false
        });

    openUpdateForm = () =>
        this.setState({
            activeUpdateFlag1: true,
            activeAddFlag1: false,
            activeDeleteFlag1: false
        });

    // home(e) {
    //     e.preventDefault();
    //     window.location = '/dashboardmain';
    // }

    submitAdd = () => {
        this.setState({ activeAddFlag1: false });
    }

    closeAdd = () => {
        this.setState({ activeAddFlag1: false });
    }

    submitDelete = () => {
        this.setState({ activeDeleteFlag1: false });
    }

    submitUpdate = () => {
        this.setState({ activeUpdateFlag1: false });
    }

    closeDelete = () => {
        this.setState({ activeDeleteFlag1: false });
    }

    closeUpdate = () => {
        this.setState({ activeUpdateFlag1: false });
    }

    render() {
        let addButtonForm = null;
        let deleteButtonForm = null;
        let updateButtonForm = null;

        if (this.state.activeAddFlag1) {
            addButtonForm = (
                <Modal
                    isOpen={this.state.activeAddFlag1}
                    onRequestClose={this.state.activeAddFlag1}
                >
                    <form>
                        <div class="form-group">
                            <label for="email">Name:</label>
                            <input type="email" class="form-control" id="email" />
                        </div>
                        <div class="form-group">
                            <label for="pwd">ID:</label>
                            <input type="password" class="form-control" id="pwd" />
                        </div>
                        <button onClick="{this.submitAdd}" type="submit" class="btn btn-default">Submit</button>
                        <button onClick="{this.closeAdd}" type="close" class="btn btn-default">Close</button>
                    </form>
                </Modal>
            )
        }
        if (this.state.activeDeleteFlag1) {
            deleteButtonForm = (
                <Modal
                    isOpen={this.state.activeDeleteFlag1}
                    onRequestClose={this.state.activeDeleteFlag1}
                >
                    <form>
                        <div class="form-group">
                            <label for="email">DeleteName:</label>
                            <input type="email" class="form-control" id="email" />
                        </div>
                        <div class="form-group">
                            <label for="pwd">ID:</label>
                            <input type="password" class="form-control" id="pwd" />
                        </div>
                        <button type="submit" class="btn btn-default">Submit</button>
                        <button onClick="{this.closeDelete}" type="close" class="btn btn-default">Close</button>
                    </form>
                </Modal>
            )
        }
        if (this.state.activeUpdateFlag1) {
            updateButtonForm = (
                <Modal
                    isOpen={this.state.activeUpdateFlag1}
                    onRequestClose={this.state.activeUpdateFlag1}
                >
                    <form>
                        <div class="form-group">
                            <label for="email">UpdateName:</label>
                            <input type="email" class="form-control" id="email" />
                        </div>
                        <div class="form-group">
                            <label for="pwd">ID:</label>
                            <input type="password" class="form-control" id="pwd" />
                        </div>
                        <button type="submit" class="btn btn-default">Submit</button>
                        <button onClick="{this.closeUpdate}" type="close" class="btn btn-default">Close</button>
                    </form>
                </Modal>
            )
        }

        return (
            <div className="SmartEmergencySensorSuper">
                <NavbarSub />
                <table style={{ borderCollapse: "collapse", borderSpacing: 0, width: "70%", border: "2px solid #ddd", padding: "5px" }}>
                    <tr className="dashboardsensor-tablemain-heading">
                        <th>Name</th>
                        <th>ID</th>
                        <th>Sensors</th>
                    </tr>
                    <tr>
                        <th scope="row">Node1</th>
                        <td>01</td>
                        <button onClick={this.home}> view info</button>
                    </tr>
                    <tr>
                        <th scope="row">Node2</th>
                        <td>02</td>
                        <button onClick={this.home}> view info</button>
                    </tr>
                    <tr>
                        <th scope="row">Node3</th>
                        <td>03</td>
                        <button onClick={this.home}> view info</button>
                    </tr>
                </table>
                {/* <table class="table" striped bordered hover>
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">ID</th>
                            <th scope="col">Sensors in Node</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Node1</th>
                            <td>01</td>
                            <button onClick={this.home}> view info</button>
                        </tr>
                        <tr>
                            <th scope="row">Node2</th>
                            <td>02</td>
                            <button onClick={this.home}> view info</button>
                        </tr>
                        <tr>
                            <th scope="row">Node3</th>
                            <td>03</td>
                            <button onClick={this.home}> view info</button>
                        </tr>
                    </tbody>
                </table> */}
                <button onClick={this.openAddForm} type="button">Add</button>
                <button onClick={this.openDeleteForm} type="button">Delete</button>
                <button onClick={this.openUpdateForm} type="button">Update</button>
                {addButtonForm}
                {deleteButtonForm}
                {updateButtonForm}

            </div>

        );


    }
}

export default SmartEmergencySensor;