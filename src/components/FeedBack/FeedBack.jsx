import data from "../../utils/feedbackData";
import SingleFeedBack from "./SingleFeedBack";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const FeedBack = () => {
  return (
    <div className="flex px-10 py-10 gap-10 flex-col w-full">
      <header className=" flex flex-col gap-1.5">
        <h1 className=" text-2xl md:text-4xl font-semibold space-x-2">
          What do our customers say?
        </h1>
        <p className=" text-blue-600 text-xs">
          We're the highest rated mock interview platform out there
        </p>
      </header>

      <main className=" w-full flex items-center">
        <IoIosArrowBack
          size={28}
          className=" bg-blue-500 text-white rounded-full cursor-pointer"
        />
        <div className=" w-full flex gap-10 overflow-x-scroll">
          {data.map((obj, i) => (
            <SingleFeedBack obj={obj} />
          ))}
        </div>
        <IoIosArrowForward
          size={28}
          className=" bg-blue-500 text-white rounded-full cursor-pointer"
        />
      </main>
    </div>
  );
};

export default FeedBack;
