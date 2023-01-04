import React from "react"; 
import {NavBar} from "./component/NavBar"; 
import {Header} from "./component/Header"; 
import {Footer} from "./component/Footer";   

export default class App extends React.Component {
    constructor(props){
        super(props); 
        // this.state={

        // }
    }

    render(){
        return(
            <div id="app">
                <NavBar />
                <Header name="Dang Tran" />
                <Footer /> 
            </div>
        ); 
    } 
}