import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Components/Header.jsx'
import Emails from './Components/EmailsContainer/Emails.jsx';
import Filter from './Components/Filter';
import './App.css';


class App extends Component {
  constructor({ data }) {
    super();
    this.state = {
      data,
      selected: 'Inbox',
    };
    this.filterBy = this.filterBy.bind(this);
    this.changeFolder = this.changeFolder.bind(this);
    this.checkBox = this.checkBox.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  componentWillMount() {
    this.setState({ categories: [...new Set(this.state.data.map(entry => entry.folder))] });
  }

  filterBy(e) {
    this.setState({ selected: e.target.value });
  }

  changeFolder(e, i) {
    const data = this.state.data;
    data[i].folder = e.target.value
    this.setState({ data });
  }

  checkBox(i) {
    const data = this.state.data;
    data[i].organize = !data[i].organize;
    this.setState({ data });
  }

  onSearch(e) {
    let changed = this.props.data.filter(entry =>
      entry.sender.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({
      data: changed
    })
  }

  stringToColor(str) {
    let hash = 0;
    Array.from(str).forEach((v, i) => {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    });
    let color = '#';
    for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 0xFF;
      color += (`00${value.toString(16)}`).substr(-2);
    }
    return color;
  }

  render() {
    const { selected, categories, data } = this.state;

    return (
      <div className="App">
        <Header />
        <Filter
          categories={ categories }
          selected={ selected }
          filterBy={ this.filterBy }
          onSearch={ this.onSearch }
        />
        <Emails
          data={ data }
          stringToColor={ this.stringToColor }
          categories={ categories }
          onChange={ this.changeFolder }
          onCheck={ this.checkBox }
          selected={ selected }
        />
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.array
};

export default App;
