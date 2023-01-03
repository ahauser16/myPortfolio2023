import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//https://www.codingdeft.com/posts/react-router-tutorial/#query-parameters
//QueryParams_Step1-> You might encounter scenarios where you need to extract the query parameters. This can be done by using the useLocation hook provided by react router.

function useQuery() {
  // QueryParams_Step2->
  //   a-> Here we are using yet another hook called 'useLocation', which will return the URL details.
  //   b-> The 'search' property within it will contain the query string.
  //   c-> We can use the URLSearchParams API (https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) to extract the query parameters.
  //   d-> We have included all this code in a custom hook called 'useQuery', which is later used to extract the search term using the query.get("term") call inside 'Search' component.

  return new URLSearchParams(useLocation().search);
}

const Search = () => {
  const query = useQuery();

  const term = query.get("term");

  const inputRef = useRef(null);
  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    //prevent the default form submission
    e.preventDefault();

    //extract search term using refs.
    const searchValue = inputRef.current.value;
    navigate(`?term=${searchValue}`);
  };

  return (
    <div>
      <form action="" onSubmit={formSubmitHandler}>
        <input type="text" name="term" ref={inputRef} />
        <input type="submit" value="Search" />
        {/* Display the search term if it is present */}
        {term && <h2>Results for '{term}'</h2>}
      </form>
    </div>
  );
};

export default Search;
