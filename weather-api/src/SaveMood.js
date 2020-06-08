import React, {Component} from 'react'

import Mood_2 from './Mood_2'

class SaveMood extends Component {
    render() {
      const {moodData} = this.props
      return (
        <div className="save-mood">
          {
            moodData.map((data) => <Mood_2 moodData = {data.mood} weatherData = {data.weather}/>)
          }
        </div>
      );
    }
  }
  
  export default SaveMood;