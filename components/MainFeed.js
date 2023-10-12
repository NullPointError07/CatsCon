"use client";

import { useEffect, useState } from "react";

import VideoCard from "./VideoCard";

const VideoCardList = ({ data, handleTagClick }) => {
  return (
    <div className="my-16 grid lg:grid-cols-4 md:grid-cols-2 gap-4 cursor-pointer xl:px-[105px] lg:px-[93.33px] md:px-[30px] px-[22px]">
      {data.map((post) => (
        <VideoCard key={post._id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const MainFeed = () => {
  const [allPosts, setAllPosts] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/video");
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className="feed mt-8">
      <form className="border-2 rounded-lg py-4 px-6 lg:mx-28 mx-6 md:mx-8 shadow-lg flex items-center justify-between ">
        <div className="flex-1 pr-2">
          <input
            type="text"
            placeholder="Search by Title or Tags"
            value={searchText}
            onChange={handleSearchChange}
            required
            className="px-3 py-4 block w-full rounded-lg bg-[#d4e8ff] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="btn-primary text-center w-1/4 sm:w-1/6">Search</div>
      </form>

      {/* All Video */}
      {searchText ? (
        <VideoCardList data={searchedResults} handleTagClick={handleTagClick} />
      ) : (
        <VideoCardList data={allPosts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default MainFeed;
