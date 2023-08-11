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
      <label htmlFor="city">City Name:</label>
      <input
        type="text"
        name="city"
        onChange={(e) => handleChange(e.target.value)}
      />

      <button>Search</button>
    </form>
  );
}
