import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../css/summary.css";

const Summary = () => {
  const { id } = useParams();
  // console.log(id);

  const [summary, setSummary] = useState();

  const fetchData = async () => {
    let showSumm = await fetch(`https://api.tvmaze.com/shows/${id}`);
    let showSummData;
    if (showSumm) {
      showSummData = await showSumm.json();
      setSummary(showSummData);
      console.log(showSummData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createMarkup = () => {
    return { __html: summary?.summary };
  };
  return (
    <>
      <div className="main">
        <div className="summary_main">
        <div className="show_img">
        <img src={summary?.image?.original} alt=""/>
        </div>
          <div className="show_name">
            <h1>{summary?.name}</h1>
          <div className="show_summary">
            <div dangerouslySetInnerHTML={createMarkup()} />
            </div>
            <div>
            <h4>premiered: {summary?.premiered}</h4>
            </div>
            <div className="footer">
            <Link to={`/book/${id}`}>Book Ticket</Link>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Summary;
