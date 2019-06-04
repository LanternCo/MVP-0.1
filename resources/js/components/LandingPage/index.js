import React, { Component } from "react";

class LandingPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="container p-5 border-bottom">
                    <p className="text-center font-weight-light mb-4 lead">
                        Dealing with a Death is Hard
                    </p>
                    <p className="text-center font-weight-light mb-4">
                        We’re Here to Make the Planning a Little Easier
                    </p>
                </div>
                <div className="container p-5 border-bottom">
                    <h2 className="text-center font-weight-light mb-4">
                        How It Works:
                    </h2>
                    <div className="steps">
                        <div className="row no-gutters py-4">
                            <div className="col">
                                <h2>1. Answer a few Short Questions</h2>
                                <p>
                                    We’ll use this info to tailor your
                                    experience to your needs.
                                </p>
                            </div>
                            <div className="col">
                                <img
                                    src="https://via.placeholder.com/500x200"
                                    className="rounded mx-auto d-block"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <div className="row no-gutters py-4">
                            <div className="col">
                                <h2>2. Meet Your Dashboard</h2>
                                <p>
                                    Based on your responses, we’ll instantly
                                    create a comprehensive checklist that’ll
                                    serve as your roadmap forward.
                                </p>
                            </div>
                            <div className="col">
                                <img
                                    src="https://via.placeholder.com/500x200"
                                    className="rounded mx-auto d-block"
                                    alt="..."
                                />
                            </div>
                        </div>
                        <div className="row no-gutters py-4">
                            <div className="col">
                                <h2>3. Start Checking Things Off</h2>
                                <p>
                                    Take your tasks day by day. We’ll keep you
                                    on track, share useful resources, and assist
                                    in decision making.
                                </p>
                            </div>
                            <div className="col">
                                <img
                                    src="https://via.placeholder.com/500x200"
                                    className="rounded mx-auto d-block"
                                    alt="..."
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container p-5">
                    <h2 className="text-left font-weight-light mb-4">
                        About Us
                    </h2>
                    <p className="text-left font-weight-light mb-4">
                        We’ve been there. Our team started in your shoes having
                        lost parents and grandparents, and having been totally
                        overwhelmed by all of the work that came with it. We
                        quickly realized it’s really hard to navigate not only
                        the first few days but also the weeks and months
                        following a loss. So, we made it our mission to ensure
                        every grieving person has a simple, trustworthy, and
                        comprehensive place to turn. We’ve sifted through the
                        hundreds of websites, funeral services, and books so you
                        don’t have to and we’ve got some of the most
                        knowledgeable people in the game advising us. Think of
                        us as part knowledgeable friend who’s been there before
                        and part assistant to help you wade through the tough
                        stuff.
                    </p>
                </div>
            </div>
        );
    }
}

export default LandingPage;
