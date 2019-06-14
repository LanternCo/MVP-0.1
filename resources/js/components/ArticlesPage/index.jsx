import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import ReactRouterPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import TextSection from '../TextSection';
import { fetchArticleDetails } from '../../actions';

class ArticlesPage extends Component {
    componentDidMount() {
        /* eslint-disable no-shadow */
        const { fetchArticleDetails } = this.props;
        fetchArticleDetails();
    }

    render() {
        const { articles } = this.props;
        // const { match, articles } = this.props;
        // const { id } = match;

        return (
            <div>
                <div>
                    <TextSection title="ARTICLES" />
                </div>
                <div className="container">
                    <ul className="list-group">
                        {articles &&
                            articles.map(article => (
                                <li
                                    className="list-group-item"
                                    key={article.id}
                                >
                                    {article.title}
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        );
    }
}

ArticlesPage.propTypes = {
    // match: ReactRouterPropTypes.match.isRequired,
    fetchArticleDetails: PropTypes.func.isRequired,
    articles: PropTypes.arrayOf(PropTypes.object),
};

ArticlesPage.defaultProps = {
    articles: [],
};

const mapStateToProps = ({ articles = {} }) => articles;

export default connect(
    mapStateToProps,
    {
        fetchArticleDetails,
    },
)(ArticlesPage);
