import React, { Component } from 'react'
import { Chart } from 'react-d3-core';
import { PieTooltip } from 'react-d3-tooltip';
import {
  randomColor,
  populationFormatConverter,
  getPlanets
} from '../utilities/planet-utilities.js';
import SearchBox from './search-box-component';
class PlanetListing extends React.Component {
    constructor() {
      super();
      this.state = {
        planets: [],
        maxPopulation: 0,
        searchKeyword: '',
      }
      this.pieChartDetails = {
        title: "Planets",
        width: 1200,
        height: 600,
      }
    }

    search = (searchTerm) => {
      this.setState({ searchKeyword: searchTerm });
    }

    async fetchPlanets() {
      let max = 0, pageNo = 1;
      let results = await getPlanets(pageNo);
     // this.setState({ planets: [ ...this.state.planets, ...results.data.results ] });
      while(results && results.data && results.data.next != null) {
        this.setState({ planets: [ ...this.state.planets, ...results.data.results ] });
        results = await getPlanets(++pageNo);
      }

      this.state.planets.forEach(function (planet) {
        if (planet.population != "unknown") {
          console.log('max----',max);
          if (parseInt(planet.population, 10) > max) {
            max = parseInt(planet.population, 10);
          }
        }
      });
      this.setState({ maxPopulation: max });
    }

    componentDidMount() {
      this.fetchPlanets();
    }

    render() {
      let state = this.state;
     
       return (
        <div className="col-md-12 col-sm-12 no-padding planets-component">
            <SearchBox search={this.search} />
         <div className="col-md-12 col-sm-12 planets-container">
            {
              this.state.planets.map(function (planet, index) {
                if (planet.name.toLowerCase().indexOf(state.searchKeyword.toLowerCase()) != -1) {
                  return (
                    <div
                      style={{
                        width: planet.population === 'unknown' ? 100 : 100 + ( 350 * ( parseInt(planet.population, 10)  / state.maxPopulation ) ) + 'px',
                        background: randomColor(),
                      }}
                      className="planets"
                      title={ 'Planet Name: ' + planet.name + '; Planet Population: ' + planet.population }
                      key={index}
                    >
                      <span className="planet-name">
                        { planet.name }
                      </span>
                      <span className="planet-population">
                        { populationFormatConverter(planet.population) }
                      </span>
                    </div>
                  );
                } else {
                  return null;
                }
              }).filter(function (updatedPlanet) {
                if (updatedPlanet !== null) {
                  return true;
                }

                return false;
              })
            }
          </div>
          <div className="col-md-12 col-sm-12">
            <PieTooltip
              title= {this.pieChartDetails.title}
              data= {this.state.planets}
              width= {this.pieChartDetails.width}
              height= {this.pieChartDetails.height}
              chartSeries= {
                [
                  ...this.state.planets.map(function (planet) {
                    return { field: planet.name, name: planet.name };
                  })
                ]
              }
              value = {(d) => { return d.population }}
              name = {(d) => { return d.name }}
            />
          </div>
        </div>
      )
    }
};
export default PlanetListing;