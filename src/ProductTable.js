import React, { Component } from "react";

import ProductCategory from './ProductCategory';
import ProductRow from './ProductRow';

class ProductTable extends Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;    

        const rows = [];
        let lastCategory = null;

        this.props.products.forEach(product => {
            if(product.name.indexOf(filterText) === -1) {
                return;
            }
            if(inStockOnly && !product.stocked) {
                return;
            }
              
            if(product.category !== lastCategory) {
                rows.push(
                    <ProductCategory category={product.category} key={product.category} />
                );
            }
            rows.push(
                <ProductRow product={product} key={product.name} />
            );
            lastCategory = product.category;
        });

        return(
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default ProductTable;
