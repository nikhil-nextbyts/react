import React from 'react'

function Card(props) {
  return (
    <>
      <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
        <div>
          <img
            src={props.cardImage}
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-10">
          <div className="flex justify-between ">
            <h1 className="font-bold ">{props.title}</h1>
            <h1>Price</h1>
          </div>
          <div className="flex  justify-between">
            <p>#{props.id}</p>
            <p>{props.price}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card
