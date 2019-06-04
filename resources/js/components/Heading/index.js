import React from "react";

// Should we allow the user to pass in type of heading. Or is this more of a container block
const Heading = props => (
    <div className="container p-5">
        <div className="">
            <h1 className="text-center font-weight-bold">
                Dealing with death is hard.<br />We’re here to make the planning a
                little bit easier.{" "}
            </h1>
        </div>
    </div>
);

export default Heading;
