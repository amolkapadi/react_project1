import React from 'react';
const Food = (props)=>{
    const {recipes} =props;
    return (
        <div className='row mt-5 py-3'>
            {
                recipes.map((result)=>(
                    <div className='col-md-3'>
                        <div className='card py-2'>
                            <img src={result.recipe.image} className='img-fluid' />
                        <div className='card-body'>
                            <h5>{result.recipe.label}</h5>
                        </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Food;