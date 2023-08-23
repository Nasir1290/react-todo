import React, { useEffect, useRef, useState } from "react";

const Todo = () => {
  const inputRef = useRef(null);
  const [activityDataList, setActivityDataList] = useState([]);
  const [activityValue, setActivityValue] = useState("");
  const handleChange = (e) => {
    setActivityValue(e.target.value);
  };
  const handleAddButton = (activityValue) => {
    activityValue !== "" &&
      setActivityDataList([...activityDataList, activityValue]);
    console.log(activityDataList);
    setActivityValue("");
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleRemoveItem = (i) => {
    const activityDataListAfterRemove = activityDataList.filter((_, index) => {
      index !== i;
    });
    setActivityDataList(activityDataListAfterRemove);
  };

  const handleRemoveAll = () => {
    setActivityDataList([]);
  };

  return (
    <div className="flex justify-center items-center">
      <div className=" mt-10 p-10 text-white">
        <div className=" xs:bg-green-600 xs:px-15 xs:py-2 md:px-40 md:py-4 md:bg-blue-600  mb-10 items-center flex justify-center text-lg font-bold rounded-lg">
          <h2><i class="fa-solid fa-check-double fa-sm"></i> To Do List <i class="fa-solid fa-check-double fa-sm"></i></h2>
        </div>
        <div className="  bg-[#2d76a1] xs:px-4 px-10 pb-20 pt-8 flex flex-col justify-center items-center rounded-lg">
          <div className=" mb-6">
            <input
              className=" xs:w-2/3 bg-red-500 border-4 mr-3 p-1 font-bold rounded-lg text-black placeholder-black"
              ref={inputRef}
              type="text"
              placeholder="Activity........."
              value={activityValue}
              onChange={handleChange}
            />
            <button
              className=" px-5 py-2 bg-black rounded-md font-bold"
              onClick={() => handleAddButton(activityValue)}
            >
              <i class="fa-solid fa-plus fa-sm"></i>Add
            </button>
          </div>
          <div>
            {activityDataList.map((activityData, i) => {
              return (
                <div className=" bg-red-600 rounded-md p-2 mb-2 ">
                <div key={i} className=" flex justify-between ">
                  <h4 className=" mr-6 px-4 py-1 rounded-md bg-black"> {activityData} </h4>
                  <button className=" bg-white rounded-lg p-1 text-red-600 font-medium"  onClick={() => handleRemoveItem(i)}><i class="fa-solid fa-trash fa-xs"></i> Remove</button>
                </div>
                </div>
              );
            })}
          </div>
          {activityDataList.length >= 2 ? (
            <button className="bg-red-500 rounded-lg p-1" onClick={() => handleRemoveAll()}> <i class="fa-solid fa-trash fa-xs"></i> Remove All <i class="fa-solid fa-trash fa-xs"></i> </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
