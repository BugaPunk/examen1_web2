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
                paterno: "Choque",
                materno: "Sillo",
                nombres: "Ronald",
                ci: "8446917",
            },
            {
                paterno: "Choque",
                materno: "Sillo",
                nombres: "Ronald",
                ci: "8446917",
            },
            {
                paterno: "Choque",
                materno: "Sillo",
                nombres: "Ronald",
                ci: "8446917",
            },
            {
                paterno: "Choque",
                materno: "Sillo",
                nombres: "Ronald",
                ci: "8446917",
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