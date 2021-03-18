import React, { useEffect } from 'react';
import Axios from 'axios';

const DetailProductPage = () => {
    const productId =  props.match.params.productId

    useEffect(() => {
        Axios.get(`${product.id}&type=single`)

    }, []) 

    return (
        <div>
            DetailProductPage
        </div>
    )
}

export default DetailProductPage
