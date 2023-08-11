export default function Form({ input, setInput, handleSearch, handleFetch }) {
  function handleChange(name) {
    setInput(name);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (handleSearch() === true) {
      handleFetch();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <div>
          <label htmlFor="city">City Name:</label>
          <input
            type="text"
            name="city"
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        <button>Search</button>
      </div>
    </form>
  );
}
