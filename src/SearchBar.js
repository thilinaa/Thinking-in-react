import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockOnlyChange = this.handleInStockOnlyChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockOnlyChange(e) {
        this.props.onInStockOnlyChange(e.target.value)
    }

    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        return(
            <div className="searchBar">
                <input type="text" className="searchText" placeholder="Search..."
                    value={filterText} 
                    onChange={this.handleFilterTextChange}
                />
                <p>
                    <input type="checkbox"
                        checked={inStockOnly}
                        onChange={this.handleInStockOnlyChange}
                    /> 
                    Only show products in stock
                </p>
            </div>
        );
    }
}

export default SearchBar;