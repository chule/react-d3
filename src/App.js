import React, { Component } from 'react';
import moment from 'moment';
import CampaignChart from './CampaignChart';



class App extends Component {
  constructor() {
    super();
    this.state = {
      campaignChart: this.generateCampaignChart()
    }
  }



  generateCampaignChart() {

    return function (start, end) {
        let cur = start;
        let result = [];
        while(cur <= end) {
          result.push({
            date: cur.format('YYYY-MM-DD'),
            value: Math.random() * 1000
          });
          cur.add(1,'days')
        }
        return result;
      }(moment('2016-07-10', 'YYYY-MM-DD'), moment('2016-07-17', 'YYYY-MM-DD'));

  }





  handleTransition = () => {
    this.setState({
      campaignChart: this.generateCampaignChart()
    });
  }

  render() {

    return (
      <div>
        <button onClick={this.handleTransition}>test transition</button>


        <div>
          <CampaignChart
            title="Impressions"
            data={this.state.campaignChart}
          />
        </div>      

      </div>      
    );
  }
}

export default App;