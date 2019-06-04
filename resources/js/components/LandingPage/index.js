import React, { Component } from "react";
import Heading from "../Heading";

class LandingPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Heading />
                <div className="container-fluid border-bottom bg-light-gray">
                    <div className="container">
                        <div className="row no-gutters py-4">
                            <div className="col">
                                <img
                                    src="https://images.squarespace-cdn.com/content/v1/5ba2aefab27e39a66cabcaf3/1558539984898-2RVCPT5BJ5PHATVX2JEW/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/christin-hume-505823-unsplash.jpg?format=1500w"
                                    className="rounded mx-auto d-block"
                                    alt="..."
                                    width="500"
                                />
                            </div>
                            <div className="col">
                                <h1 className="text-center font-weight-bold mb-4">
                                    How It Works:
                                </h1>
                                <ol>
                                    <li class="lead">
                                        <p>
                                            Have a real conversation with a real
                                            person. Just click the chat button
                                            below.
                                        </p>
                                    </li>
                                    <li class="lead">
                                        <p>
                                            We’ll ask you a couple of basic
                                            questions to figure out where you
                                            are in the process. It’ll take about
                                            5 minutes.
                                        </p>
                                    </li>
                                    <li class="lead">
                                        <p>
                                            Using the information you provide,
                                            we’ll immediately create a
                                            customized checklist to guide you
                                            through your next steps of planning.{" "}
                                            <span className="font-italic">
                                                Hint: it’s also a really great
                                                tool for answering “how can I
                                                help?”
                                            </span>{" "}
                                        </p>
                                    </li>
                                </ol>
                                {/* <h2>1. Answer a few Short Questions</h2>
                                <p>
                                    We’ll use this info to tailor your
                                    experience to your needs.
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
