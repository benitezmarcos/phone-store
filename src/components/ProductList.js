import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
   
    render() {

        return (
            <React.Fragment>
                <div className="py-4">
                    <section id="productSection">
                        <div className="container">
                        <Title name="our" title="products" />
                        
                        <div className="row">
                        <ProductConsumer>
                            {value => {
                                return value.products.map( product => {
                                    return <Product key={product.id}product={product}/>
                                })
                            }}
                        </ProductConsumer>
                        </div>
                    </div>
                    </section>
                    
                </div>
            </React.Fragment>
            
        )
    }
}
