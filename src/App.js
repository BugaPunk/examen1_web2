import React, { Component } from "react";
import "./App.css";
import Data from "./Data";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
        };
    }

    render() {
        const data = [
            {
                paterno: "Perez",
                materno: "Robles",
                nombres: "Jhon Doe",
                ci: "123456",
            },
            {
                paterno: "Gomez",
                materno: "Suarez",
                nombres: "Maria Lopez",
                ci: "789012",
            },
            {
                paterno: "Rodriguez",
                materno: "Martinez",
                nombres: "Pedro Sanchez",
                ci: "345678",
            },
            {
                paterno: "Diaz",
                materno: "Fernandez",
                nombres: "Ana Garcia",
                ci: "901234",
            },
        ];

        const dataList = data.map((item, index) => (
            <Data
                key={index}
                id={this.state.id + index}
                paterno={item.paterno}
                materno={item.materno}
                nombres={item.nombres}
                ci={item.ci}
            />
        ));

        return (
            <div>
                <h1>DATOS DEL ESTUDIANTE WEB II</h1>
                <hr className={"rojo"} />
                {dataList}
                <hr className={"rojo"} />
            </div>
        );
    }
}

export default App;