import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getSearch, getSearchMovie, getSearchTv, ISearch } from "../api/api";
import { Loader } from "../components/Loader";
import SearchResults from "../components/SearchResult";

const Wrapper = styled.div`
  padding: 100px 60px;
  height: max-content;
`;


function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  const { data: search } = useQuery<ISearch>(
    ["search", keyword], () => getSearch(keyword)
  );

  const { data: searchMovie } = useQuery<ISearch>(
    ["searchMovie", keyword], () => getSearchMovie(keyword)
  );

  const { isLoading, data: searchTv } = useQuery<ISearch>(
    ["searchTv", keyword], () => getSearchTv(keyword)
  );


  return (
    <Wrapper>
      {isLoading ? <Loader /> :
        <>
          <SearchResults data={search} category="movie" url="search" type={keyword} />
          {/* <SearchResults data={searchTv} category="tv" url="search" type={keyword} /> */}
        </>
      }
    </Wrapper>
  );
}

export default Search;