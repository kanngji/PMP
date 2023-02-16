import React, { useEffect, useState } from "react";

export default function Crawl() {
  // 크롤링 한거 보여주기
  const [crawls, setCrawls] = useState([]);
  useEffect(() => {
    const fetchCrawls = async () => {
      const response = await fetch("/api/crawls");

      const json = await response.json();
      console.log(json);
      if (response.ok) {
        setCrawls(json);
      }
    };
    fetchCrawls();
  }, []);
  return (
    <div className="crawling">
      <h3>IT뉴스 헤드라인</h3>
      {crawls.map((value, index) => (
        <div className="news_title" key={index}>
          {value.title}
        </div>
      ))}
    </div>
  );
}
