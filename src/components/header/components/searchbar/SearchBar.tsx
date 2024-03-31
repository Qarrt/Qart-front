export default function SearchBar() {
  return (
    <div className="max-w-lg mx-auto">
      <div className="flex items-center w-[326px] rounded-full bg-#F7F7F7 shadow ">
        <img
          src="/search.svg"
          alt="검색"
          className="w-6 h-6 text-gray-600 ml-3 -mr-3 z-50"
        />
        <div className="w-inherit h-inherit">
          <input
            className="w-full rounded-full py-3 px-6 text-black placeholder-mid-gray  bg-#F7F7F7 leading-tight focus:outline-none "
            id="search"
            type="text"
            placeholder="찾으시는 작품이 있으신가요?"
          />
        </div>
      </div>
    </div>
  );
}
