import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      filter: ''
    };
    this.startSearch = this.startSearch.bind(this);
    this.startFilter = this.startFilter.bind(this);
  }

  startSearch(event) {
    // console.log(this.state.search);
    const search = event.target.value;
    this.setState({
      search
    });
    this.props.search(search);
  }

  startFilter(event) {
    const filter = event.target.value;
    this.setState({
      filter
    });
    this.props.filter(filter);
  }

  render() {
    return (
      <div className="search-box mb-5 mt-5 d-flex">
        <form className="col-8">
          <input
            type="search"
            name="search"
            value={this.state.search}
            onChange={this.startSearch}
            placeholder="Search by Business Name or Industry"
            autoComplete="off"
          />
        </form>
        <select name="filter" className="col-4 filter" onChange={this.startFilter}>
          <option value="">--Filter by--</option>
          <option value="ascendingEquality">&uarr; Equality</option>
          <option value="descendingEquality">&darr; Equality</option>
          <option value="ascendingEmployees">&uarr; Employees</option>
          <option value="descendingEmployees">&darr; Employees</option>
        </select>
      </div>
    );
  }
}

export default Search;
