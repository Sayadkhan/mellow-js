import React from "react";

const About = () => {
  return (
    <div className="about container mx-auto">
      <div className="introdection flex items-center justify-center px-8 flex-col text-justify">
        <h1 className="text-2xl text-slate-800 p-12">About Our Laibary</h1>
        <p className="p-8">
          Introducing my new JavaScript library! This innovative tool is
          designed to make web development faster, more efficient, and more
          enjoyable for developers of all skill levels. With its intuitive
          interface and comprehensive set of functions, this library is a
          must-have for anyone looking to streamline their coding process and
          create high-quality websites with ease. Whether you're a seasoned pro
          or just starting out in the world of web development, this library has
          something to offer. From basic functions like event handling and DOM
          manipulation to more advanced features like animation and AJAX
          requests, this tool has everything you need to create stunning web
          pages that will impress your clients and users. One of the key
          benefits of this library is its flexibility. It can be easily
          integrated into any project, regardless of its size or complexity.
          Plus, it is fully customizable, so you can tailor it to your specific
          needs and preferences. And with its robust documentation and extensive
          community support, you can be confident that you'll always have the
          resources you need to get the most out of this powerful tool. In
          short, if you're looking to take your web development skills to the
          next level, this JavaScript library is the perfect solution. Whether
          you're building a simple blog or a complex web application, this tool
          will help you achieve your goals faster and more efficiently than ever
          before. So why wait? Try it out today and see the difference for
          yourself!
        </p>
      </div>
      <div className="grid grid-cols-3 mx-auto gap-5 text-justify">
        <div className="declarative col-span-1">
          <h2 className="text-gray-400 px-3 font-medium">Declarative</h2>
          <p>
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application, <br />
            and React will efficiently update and render just the right
            components when your data changes.
          </p>
        </div>
        <div className="">
          <h2 className="text-gray-400 px-3">Component-Based</h2>
          <p>
            Build encapsulated components that manage their own state, then
            compose them to make complex UIs. Since component logic is written
            in JavaScript instead of templates <br /> you can easily pass rich
            data through your app and keep state out of the DOM.
          </p>
        </div>
        <div className="">
          <h2 className="text-gray-400 px-3">Learn Once, Write Anywhere</h2>
          <p>
            We don’t make assumptions about the rest of your technology stack,
            so you can develop new features in React without rewriting existing
            code. <br /> React can also render on the server using Node and
            power mobile apps using React Native.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
