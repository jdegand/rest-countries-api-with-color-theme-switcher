import "../SubHeader.css";

function SubHeader() {
  const handleInputChange = (e) => {
    let countryNames = document.querySelectorAll(".countryName");

    countryNames.forEach((item) => {
      if (item.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
        item.parentElement.parentElement.style.display = "block";
      } else {
        item.parentElement.parentElement.style.display = "none";
      }
    });
  };

  const handleSelectChange = (e) => {
    let regionNames = document.querySelectorAll(".region");

    regionNames.forEach((item) => {
      if (
        item.innerText.toLowerCase().includes(e.target.value.toLowerCase()) ||
        e.target.value === "Filter by region"
      ) {
        item.parentElement.parentElement.parentElement.style.display = "block";
      } else {
        item.parentElement.parentElement.parentElement.style.display = "none";
      }
    });
  };

  return (
    <>
      <form id="form">
        <div>
          <i className="fas fa-search"></i>
          <input
            type="search"
            name="search"
            placeholder="Search for a country..."
            onChange={handleInputChange}
          />
        </div>
        <div>
          <select
            name="select"
            className="select"
            onChange={handleSelectChange}
          >
            <option value="Filter by region">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </form>
    </>
  );
}

export default SubHeader;
