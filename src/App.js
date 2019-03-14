import React, { Component } from 'react';
import './App.scss';

import axios from 'axios';

import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import HeroDots from './components/hero/HeroDots'
import Feed from './components/feed/Feed'
import Footer from './components/footer/Footer'

class App extends Component {
    state = {
      feed: [],
      hero: [],
      slide: 0,
      timer: null,
      counter: 0,
      startingPoint: 0,
			endPoint: 0,
			distance: 0
    }
  

  componentWillMount() {
      axios.get('http://localhost:1337/heroposts', {
        mode: 'cors',
    }).then(res => {
        console.log(res.data)
        this.setState({
            hero: res.data
        })
    })
  }

  componentDidMount() {
      axios.get('http://localhost:1337/feedposts', {
        mode: 'cors',
    }).then(res => {
        console.log(res.data)
        this.setState({
            feed: res.data
        })
    })

    let timer = setInterval(this.tick, 5000);
    this.setState({timer});
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }


  tick =() => {
    if (this.state.counter === this.state.hero.length - 1) {
      this.setState({
        counter: -1
      })
    }
    this.setState({
      counter: this.state.counter + 1
    });
  }

  movingFinger = (e) => {
		console.log(e)
		console.log(e.touches[0].pageX, 'start')
		this.setState({
			startingPoint: e.touches[0].pageX
		})
	}
	
	touchedFinger = (e) => {
		console.log(e.touches[0].clientX, 'moving')
		
	}
	
	endFinger = (e) => {
		console.log(e.touches)
		console.log(e.changedTouches[0].pageX, 'end')
		console.log(this.state.endPoint - this.state.startingPoint, 'distance')
		this.setState({
			endPoint: e.changedTouches[0].pageX,
			distance: this.state.endPoint - this.state.startingPoint
		})
		
		if (this.state.distance > 150) {
			console.log('swipe right');
		} else if (this.state.distance < -150) {
      console.log('swipe left');
		}
	}

  goToSlide = (index) => {
    this.setState({
      counter: index
    })

  }

  render() {


    return (
      <div className="App">
        <Header />
        <Hero hero={this.state.hero} slideNumber={this.state.counter} 
          endFinger={this.endFinger} touchedFinger={this.touchedFinger} movingFinger={this.movingFinger}  />
        <HeroDots hero={this.state.hero} slideNumber={this.state.counter} goToSlide={this.goToSlide}/>
        <Feed feed={this.state.feed}/>
        <Footer />
      </div>
    
    );
  }
}

export default App;
