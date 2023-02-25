import React from "react";

const HowToInstall = () => {
  return (
    <div className="howtoinstall container mx-auto">
      <div className="text flex flex-col text-center">
        <h1 className="text-4xl p-5">How To Install</h1>
        <p className="text-justify p-10">
          Installing my new library is a quick and straightforward process that
          can be completed in just a few easy steps. First, you'll need to
          download the library files from the source, which can typically be
          found on my website or a popular code repository platform like GitHub.
          Once you've downloaded the files, you can simply copy them into your
          project directory. you need to go your project folder then and your
          tarminal and type the blew code
        </p>
        <div className="bg-slate-800 h-24 min-w-full items-center justify-items-center  text-center">
          <p className="text-white p-8">
            <samp className="text-orange-400">npm</samp> install mellow
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToInstall;
