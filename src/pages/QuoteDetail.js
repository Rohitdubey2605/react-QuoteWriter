import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Fragment } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { getSingleQuote } from "../lib/api";
import useHttp from "../hooks/use-http";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const DUMMY_QUOTES = [
  {
    id: "1",
    author: "Rohit",
    text: "Live a little",
  },
  {
    id: "2",
    author: "Manna",
    text: "Lucknow chalo",
  },
  {
    id: "3",
    author: "Pade",
    text: "Bhandare chalo",
  },
];
const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();

  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);


  if(status==='pending')
  {
    return (<div className="centered">
      <LoadingSpinner/>
    </div>)
  }

  if(error)
  {
    return <p className="centered">{error}</p>
  }

  if(!loadedQuote.text)
  {
    return <p>No Quote Found!</p>
  }


  return (
    <Fragment>
      <HighlightedQuote
        text={loadedQuote.text}
        author={loadedQuote.author}
      ></HighlightedQuote>
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
