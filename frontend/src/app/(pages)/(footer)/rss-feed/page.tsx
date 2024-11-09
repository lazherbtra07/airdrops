import React from "react";

function RssFeed() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between ">
        <div className="lg:w-1/2">
          <h2 className="text-teal-300 text-[12px] font-mono uppercase mb-2">
            RSS Feed
          </h2>
          <h1 className="text-[35px] font-medium mb-6">
            Add the latest crypto airdrops to your feed reader
          </h1>
          <p className="text-[14px] text-gray-400 mb-6">
            RSS is a tool that lets people and apps get updates from websites in
            a simple, readable format. When you subscribe to RSS feeds, you can
            see updates from many websites in one place, called a news
            aggregator. This way, you don’t have to visit each website to check
            for new content.
          </p>
        </div>
        <div className="lg:w-1/3 bg-gray-800 p-6 rounded-lg h-fit  border border-teal-300 ">
          <p className="text-sm text-gray-300 mb-4">
            Copy the URL below and paste it in your RSS feed reader
          </p>
          <a
            href="https://airdropalert.com/feed/rssfeed"
            className="text-teal-400 text-sm font-medium "
          >
            https://airdropalert.com/feed/rssfeed
          </a>
        </div>
      </div>
    </section>
  );
}

export default RssFeed;
