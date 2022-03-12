import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Fragment } from "react";
import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>QuoteDetail</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
          <Comments></Comments>
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
