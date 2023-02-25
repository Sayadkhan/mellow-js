import React from "react";

const Docs = () => {
  return (
    <div className="docs grid grid-cols-4">
      <div className="col-span-3">
        <h2 className="text-5xl font-semibold p-11 text-orange-500">
          Getting Started
        </h2>
        <div className="h-48  text-gray-700 ">
          <p className="px-14  py-5 underline">
            Try the new Mellow documentation
          </p>
          <p className="px-14 py-2">
            The new Quick Start teaches modern React and includes live examples.
            The new docs will soon replace this site,
          </p>
          <p className="px-14 py-5">
            which will be archived. Provide feedback.
          </p>
        </div>
        <p className="px-14 py-5 text-5xl font-semibold text-orange-500">
          Try Mellow
        </p>
        <p className="px-14 py-5">
          Mellow has been designed from the start for gradual adoption, and you
          can use as little or as much React as you need. Whether you want to
          get a taste of React, add some interactivity to a simple HTML page, or
          start a complex React-powered app, the links in this section will help
          you get started.
        </p>

        <p className="px-14 py-5 text-5xl font-semibold text-orange-500">
          Online Playgrounds
        </p>
        <p className="px-14 py-5">
          If you’re interested in playing around with React, you can use an
          online code playground. Try a Hello World template on CodePen,
          CodeSandbox, or Stackblitz. If you prefer to use your own text editor,
          you can also download this HTML file, edit it, and open it from the
          local filesystem in your browser. It does a slow runtime code
          transformation, so we’d only recommend using this for simple demos.
        </p>
      </div>
      <div className="bg-gray-400 min-h-screen  col-span-1 flex flex-col p-5 gap-14 uppercase">
        <p>Instaliton</p>
        <p>Main concpets</p>
        <p>Advance Guide</p>
        <p>Api referance</p>
        <p>Hooks</p>
        <p>texting</p>
        <p>Contubution</p>
        <p>fqr</p>
      </div>
    </div>
  );
};

export default Docs;
