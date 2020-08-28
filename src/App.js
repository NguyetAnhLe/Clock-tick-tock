import React, {Component} from 'react';
import TodayTime from "./TodayTime.js";
import { setInterval, clearInterval } from 'timers';


class App extends Component {
    state = {}

    styleDiv = {
        border: "solid black 3px",
        width : "20%"
    }

    styleInput = {
        border: "none",
        width : "20px",
        textAlign: "center"
    }

    timer;

    constructor(props){
        super(props);
        this.state = {
            hour : TodayTime.hour, 
            min  : TodayTime.min, 
            sec  : TodayTime.sec,
            daylight: TodayTime.daylight,
            pause: "false"
        }
    }
    componentDidMount(){

        this.timer = setInterval(()=>{
            if(this.state.sec === 59) {
                this.setState({
                    sec : 0,
                    min: this.state.min+1
                });
            }
            else { 
                this.setState({
                    sec : this.state.sec +1
                });
            }

            if (this.state.min === 60){
                if (this.state.hour === 11 && this.state.daylight === "AM" ){
                    this.setState({
                        min: 0,
                        hour: this.state.hour + 1,
                        daylight: "PM"
                    });
                }

                else if (this.state.hour === 11 && this.state.daylight === "PM" ){
                    this.setState({
                        min: 0,
                        hour: 0,
                        daylight: "AM"
                    });
                }
                
                else if (this.state.hour === 12 && this.state.daylight === "PM" ){
                    this.setState({
                        min: 0,
                        hour:  1,
                    });
                }
                else {
                    this.setState({
                        min : 0,
                        hour: this.state.hour+1
                    });
    
                }
            }
            
        },1000)
    }



    clickMe = (e) => {
        clearInterval(this.timer)
        this.setState({ pause: "true" });
          console.log(this.state.pause);

      }

    startMe = (e) => {
        if(this.state.pause === "true"){
            this.setState({ pause: "false" });

            this.timer = setInterval(()=>{
                if(this.state.sec === 59) {
                    this.setState({
                        sec : 0,
                        min: this.state.min+1
                    });
                }
                else { 
                    this.setState({
                        sec : this.state.sec +1
                    });
                }

                if (this.state.min === 60){
                    if (this.state.hour === 11 && this.state.daylight === "AM" ){
                        this.setState({
                            min: 0,
                            hour: this.state.hour + 1,
                            daylight: "PM"
                        });
                    }

                    else if (this.state.hour === 11 && this.state.daylight === "PM" ){
                        this.setState({
                            min: 0,
                            hour: 0,
                            daylight: "AM"
                        });
                    }
                    
                    else if (this.state.hour === 12 && this.state.daylight === "PM" ){
                        this.setState({
                            min: 0,
                            hour:  1,
                        });
                    }
                    else {
                        this.setState({
                            min : 0,
                            hour: this.state.hour+1
                        });
        
                    }
                }
                
            },1000)
        }

    }

    changeHour(e){
        this.setState({
            hour: Number(e.target.value)
        });
    }
    changeMin(e){
        this.setState({
            min: Number(e.target.value)
        });
    }
    changeSec(e){
        this.setState({
            sec: Number(e.target.value)
        });
    }
    changeDaylight(e){
        this.setState({
            daylight: (e.target.value).toUpperCase()
        });
    }

    render(){
        return( 
        <div align = "center"  >
        <h1> Imagine this is a clock </h1>
        <p> tick tock... tick... tock...</p>

            <div  style = {this.styleDiv} >
            <p >  <span onClick= {this.clickMe}>
                <input
                style = {this.styleInput}
                type = "text"
                value = {this.state.hour}
                onChange = {this.changeHour.bind(this)}
                />
                 </span> 
            : 
            <span onClick= {this.clickMe} >
            <input
                style = {this.styleInput}
                type = "text"
                value = {this.state.min}
                onChange = {this.changeMin.bind(this)}
                />
            </span> 
            : 
            <span onClick= {this.clickMe} >
            <input
                style = {this.styleInput}
                type = "text"
                value = {this.state.sec}
                onChange = {this.changeSec.bind(this)}
                />
            </span>
            &nbsp;
            <span onClick= {this.clickMe} >
            <input
                style = {this.styleInput}
                type = "text"
                value = {this.state.daylight}
                onChange = {this.changeDaylight.bind(this)}
                />
            </span>  </p>
            </div>
            <br/>
            <button onClick = {this.startMe}>Start</button>
            
        </div> 
        );
    }
}



export default App;