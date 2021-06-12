import React from "react";

class City extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            city:{}
        }
    }
    componentDidMount(){
        const apiKey = '320f5fa25ef8a520ca0ae532bd5adb26';
        const id= this.props.match.params.cityId;
        fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}`)
        .then(r => r.json())
        .then((resource) => {
            console.log(resource)
            if (resource.main !== undefined){
              const city = {
            min: Math.round(resource.main.temp_min),
            max: Math.round(resource.main.temp_max),
            img: resource.weather[0].icon,
            id: resource.id,
            wind: resource.wind.speed,
            temp: resource.main.temp,
            name: resource.name,
            weather: resource.weather[0].main,
            clouds: resource.clouds.all,
            latitud: resource.coord.lat,
            longitud: resource.coord.lon
                };
                this.setState({city});
            } else {
                alert("City not found");
            }
        });
    }
    render(){
        const city = this.state.city;
        if(!city.temp) return <h1> Search any city</h1>;
    return (
        city.temp && 
        <div className="city">
            <div className="container">
                <h2>{city.name}</h2>
                <div className="info">
                    <div>Feels like: {city.temp} ºC</div>  
                    <div>Weather: {city.weather} </div>
                    <div>Wind: {city.wind} km/h </div>
                    <div>Cloud amount: {city.clouds} </div>
                    <div>Latitude: {city.latitud} º</div>
                    <div>Longitude: {city.longitud} º</div>
                </div>
            </div>
        </div>
        )
    }
}
export default City