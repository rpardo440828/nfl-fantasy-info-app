import React from "react";


const Card = (props) => {
  let str = "";
  if((props?.story?.title).length > 200) {
    str = (props?.story?.title).substring(0, 199);
    str += ' ......';
  } else {
    str = props?.story?.title;
  }

  return (
    <div className=" bg-green-600 rounded-xl text-white hover:cursor-pointer hover:scale-105 hover:border-white hover:border-[5px] hover:duration-300" onClick={() => window.open(props.story.link, '_blank')}>
      <article className="rounded-lg shadow-2xl h-full">
        <div className="w-full mt-1">
            <img src={props.story.image} alt="" className="w-full" />
        </div>

        <div className="flex items-center justify-between leading-tight p-4">
          <h1 className="text-3xl sm:text-3xl md:text-2xl">
            {str}
          </h1>
        </div>
      </article>
    </div>
  );
};

export default Card;