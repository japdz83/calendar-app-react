import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  // const [dateRange, setDateRange] = useState([null, null]);
  // const [setStartDate, setStartDate] = dateRange;
  const [column, setColumn] = useState();
  console.log(setStartDate);
  console.log(setEndDate);

  const handleColumn = (e) => {
    setColumn(e.target.value);

    console.log(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (setEndDate) {
      // setEndDate >= setStartDate;
      console.log(setEndDate);
    }
  };

  return (
    <>
      <form className="formContainer" onSubmit={handleSubmit}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="MM/yyyy"
          showMonthYearPicker
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={setStartDate}
          dateFormat="MM/yyyy"
          showMonthYearPicker
        />
        <select name="Columna" value={column} onChange={handleColumn}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="2">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <button className="btn" type="submit">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Form;
