import { useState } from 'react'; 

export const SearchForm = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('')

    // const handleSubmit = (evt) => {
    //     evt.preventDefault();
    //     const form = evt.target;
    //     const planet = form.elements.planet.value;

    //     if(form.elements.planet.value.trim() === "") {
    //         alert("Please enter search term!")
    //         return;
    //     }
        
    //     onSearch(planet);
    //     form.reset();
    // }

    const handleChange = evt => {
        evt.preventDefault();
        setInputValue(evt.target.value);
    }

    onSearch(inputValue);

    return (
        <form onChange={handleChange}>
            <input 
            type="text" 
            name="planet" 
            placeholder="Search planets..." 
            value={inputValue}
            />
            <button>Search Planet</button>
        </form>
    );
};