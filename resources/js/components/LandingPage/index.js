import React, { Component } from 'react';
import TextSection from '../TextSection';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

class LandingPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <TextSection
                        title={
                            'Dealing with death is hard. \n We’re here to make the planning a little bit easier.'
                        }
                    />
                    {/* <a
                        href="javascript:void(0);"
                        onClick={olark('api.box.expand')}
                    >
                        Click here to chat!
                    </a> */}
                </div>
                {/* How It Works */}
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
                                <h1 className="text-center text-dark font-weight-bold mb-4">
                                    How It Works:
                                </h1>
                                <ol>
                                    <li className="lead text-dark">
                                        <p>
                                            Have a real conversation with a real
                                            person. Just click the chat button
                                            below.
                                        </p>
                                    </li>
                                    <li className="lead">
                                        <p>
                                            We’ll ask you a couple of basic
                                            questions to figure out where you
                                            are in the process. It’ll take about
                                            5 minutes.
                                        </p>
                                    </li>
                                    <li className="lead">
                                        <p>
                                            Using the information you provide,
                                            we’ll immediately create a
                                            customized checklist to guide you
                                            through your next steps of planning.{' '}
                                            <span className="font-italic">
                                                Hint: it’s also a really great
                                                tool for answering “how can I
                                                help?”
                                            </span>{' '}
                                        </p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  Why we are here */}
                <TextSection
                    title={'Why We’re Here'}
                    body={
                        'We’ve been there. Our team started in your shoes having lost parents and grandparents, and having been totally overwhelmed by all of the work that came with it.  So we made it our mission to ensure every grieving person has a simple, trustworthy, and comprehensive place to turn. We’ve sifted through the hundreds of websites, funeral services, and books so you don’t have to and we’ve got some of the most knowledgeable people in the game advising us. Think of us as part knowledgeable friend who’s been there before and part assistant to help you wade through the tough stuff.  Click below to chat with us now and  we’ll set you up with a free roadmap for what’s to come.'
                    }
                />
                {/* Not ready */}
                <div className="container-fluid border-bottom bg-light-gray">
                    <div className="container">
                        <div className="row no-gutters py-4">
                            <div className="col">
                                <h1 className="text-center text-dark font-weight-bold mb-4">
                                    Not quite ready to chat?
                                </h1>
                                <p className="text-center text-dark">
                                    Enter your email address below to stay in
                                    the loop on content and updates.
                                </p>
                                <div className="mailchimp-form">
                                    <MailchimpSubscribe
                                        url={
                                            'https://goodgrief.us19.list-manage.com/subscribe/post?u=07235aa8ad2f334b610249099&amp;id=bd3ad2cd01'
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <img
                                    src="https://images.squarespace-cdn.com/content/v1/5ba2aefab27e39a66cabcaf3/1558542393577-2PR6546M5AFFUG1FKUFZ/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/mathyas-kurmann-102977-unsplash.jpg?format=1500w"
                                    className="rounded mx-auto d-block"
                                    alt="..."
                                    width="500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
