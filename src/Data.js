import React, { Component } from "react";
import propTypes from "prop-types";

class Data extends Component {
    render() {
        return (
            <div>
                <ul list-style-type="decimal" start="1">
                    <li>
                        <strong>Id:</strong> {this.props.id}
                    </li>
                    <li>
                        <strong>Paterno:</strong> {this.props.paterno}
                    </li>
                    <li>
                        <strong>Materno:</strong> {this.props.materno}
                    </li>
                    <li>
                        <strong>Nombres:</strong> {this.props.nombres}
                    </li>
                    <li>
                        <strong>CI:</strong> {this.props.ci}
                    </li>
                </ul>
            </div>
        );
    }
}

Data.propTypes = {
    id: propTypes.string.isRequired,
    paterno: propTypes.string.isRequired,
    materno: propTypes.string.isRequired,
    nombres: propTypes.string.isRequired,
    ci: propTypes.string.isRequired,
};

export default Data;