import React from "react";
import Card from "./common/Card";

type Props = {};

const Goals = (props: Props) => {
  return (
    <Card title="Goals">
      <div>
      <div className="mb-5 ml-4">
          <div className="absolute -left-2 mt-1.5 h-3 w-3 rounded-full border border-white bg-blue-500"></div>
          <div className="rounded-lg bg-white p-2 shadow-md">
            <p className="mb-2 text-sm font-semibold">The goal of working is gain experience, a good work society for both mental and physical well-being. I hope to be an expert in the work I am doing to be able to train and teach the new generation in the future.</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Goals;
