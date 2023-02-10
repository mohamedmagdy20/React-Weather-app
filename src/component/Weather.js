import React,{Component} from "react";

const Weather = (props) =>{
    return(
        <div className="info">
            {
                props.country &&  <p className="info_key">
                    Country: <span className="info_value">{props.country}</span> 
                    </p>
            }
            {
                props.city &&  <p className="info_key">City:
                 <span className="info_value">{props.city}</span>
                 
                 </p>
            }
            {
                props.temp_c && <p className="info_key">Tempreature: <span className="info_value">{props.temp_c}</span></p> 
            }
            {
                props.temp_f && <p className="info_key">Humidity: <span className="info_value">{props.temp_f}</span></p>
            }
            {
                props.condition && <p className="info_key">Descritption: <span className="info_value">{props.condition}</span></p>
            }
        </div>
    )
}

export default Weather