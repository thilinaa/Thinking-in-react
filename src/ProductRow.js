import React, {Component} from 'react';

class ProductRow extends Component {
    render() {
        const product = this.props.product; 

        const name = !product.stocked ? 
            <span style={{color: 'red'}}>{product.name}</span>
            :
            product.name;

        return(
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}

export default ProductRow;