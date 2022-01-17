import React from 'react';
const Header = (props) => {
    const { search, onInputChange, onSearch } = props;
    return (
        <div className='container-fluid'>
            <h2 className='display-1'><i class="bi bi-cart-check-fill"></i>Food<span> App</span> </h2>
            <div class="input-group w-50 mx-auto">
                <input type="text" class="form-control"
                    placeholder="Search your favorite Food.."
                    value={search}
                    onChange={onInputChange}
                />

            </div>
            <div className='mt-3'>
                <button className='btn btn-success' onClick={onSearch}>
                    <i class="bi bi-search"></i>   Search Food</button>
            </div>


        </div>

    )
}
export default Header;