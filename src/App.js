import logo from './logo.svg';
import './App.css';
import Form from './component/Form';
import Weather from './component/Weather';
import React,{Component} from 'react';

const apiKey = '9a2047ff078b4f61b3221713213009';
class App extends Component {
  state ={
    city:'',
    country:'',
    temp_c:'',
    temp_f:'',
    condition:'',
    error:''
  };
 
  getWeather = async (e)=>{
    e.preventDefault()
    // console.log('Weather');
    const city = e.target.city.value;
    const country = e.target.country.value;
    // console.log(city,country);
    const api = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&country=${country}&aqi=no&alerts=no`)
    const data = await api.json();
    console.log(data);
    if(city && country)
    {
      this.setState({
        city:data.location.name,
        country:data.location.country,
        temp_c:data.current.temp_c,
        temp_f:data.current.temp_f,
        condition:data.current.condition.text,
        error:''
      })
    }else{
      this.setState({
        city:'',
        country:'',
        temp_c:'',
        temp_f:'',
        condition:'',
        error:'No Data Found'
      })
    }
    
  }  
  render()
  {
    return (
      <div className="wrapper">
        <div className='form-container'>
            <Form getWeather={this.getWeather}/>
            <Weather city={this.state.city} temp_f={this.state.temp_f} temp_c={this.state.temp_c}  country={this.state.country} condition={this.state.condition}  error={this.state.error}/>
        </div>
      </div>
    );
  }
  
}

export default App;
