import React from "react";

export const Jumbotron = () => {
  return (
    <>
      <div className="container p-5 text-center bg-body-tertiary rounded-3 d-flex flex-wrap align-content-start">
        <h1 className="text-body-emphasis f-1">A Warm Welcome!</h1>
        <p className="text-start fs-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="btn btn-primary px-5 mb-5" type="button">
          Call to action
        </button>
      </div>
    </>
  );
};
