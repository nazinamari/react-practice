export const SearchForm = ({ onSearch }) => {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const planet = form.elements.planet.value;

        if(form.elements.planet.value.trim() === "") {
            alert("Please enter search term!")
            return;
        }
        
        onSearch(planet);
        form.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="planet" placeholder="Search planets..."
            />
            <button>Search Planet</button>
        </form>
    );
};