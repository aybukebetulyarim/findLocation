import React from 'react';
import ReactDOM from 'react-dom';
import './decideSport.css';
import Loader from './loader.js';
//Componentleri oluşturuyorum. Burada class base component oluşturuyorum.
class DecideSport extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      latitude: null,
      error: ''
    }
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);              //position döner.
        this.setState ({
          latitude: position.coords.latitude,
        })
      },
      (err) => {                         //hata döner.
        console.log(err);
        this.setState({
          error: 'kullanıcı lokasyon bilgisi alınamadı'
        })
      }
    );
  }
    componentDidMount () {
    console.log("componentDidMount");
  }

  componentDidUpdate () {
    console.log("componentDidUpdate");
  }
  componentWillUnmount () {
    this.setState({
      latitude: null
    })
  }
decideSport(lat) {
  let currentMonth = new Date().getMonth()
  const summer = {
    text: 'Swimming Time!',
    iconName:'sun'
  };
  const winter = {
    text: 'Snowboard Session',
    iconName:'snowflake'
  };
  if (lat < 0) {
    //Güney yarımküre
      if (currentMonth > 3 && currentMonth < 8) {
        return winter;
      } else {
        return summer;
      }
  }
  else {
    //Kuzey yarımküre
      if (currentMonth > 8 || currentMonth < 3) {
        return winter;
      } else {
        return summer;
      }
  }
}
  render () {
    const { latitude, error } = this.state;
    const sport = this.decideSport(latitude);
    if (latitude && !error) {
        return(
          <div className= {`${sport.iconName}-wrapper decide-sport-container`}>
            <h2 className="ui header">
              <i className= {`${sport.iconName} outline icon`}></i>
                <div className="content">
                  {sport.text}
                </div>
              </h2>
            </div>
        );
    } else if (!latitude && error) {
      return(
        <div>
          Error: {error}
        </div>
      );
    }
    return(
      <div>
        <Loader text= 'Loading..'/>
      </div>
    );
  };
}
export default DecideSport;
