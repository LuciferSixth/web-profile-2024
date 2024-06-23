import React from "react";
import Card from "./common/Card";
import Badge from "./common/Badge";

type Props = {};

const Personality = (props: Props) => {
  return (
    <Card title="Personality">
      <div>
        <p className="text-lg">Commander (ENTJ)</p>
        <p className="pb-2">
        personality type with the Extraverted, Intuitive, Thinking, and Judging traits. They are decisive people who love momentum and accomplishment. They gather information to construct their creative visions but rarely hesitate for long before acting on them.
        </p>
        <div className="flex gap-1">
          <Badge>INTROVERTED</Badge>
          <Badge>OBSERVANT</Badge>
          <Badge>FEELING</Badge>
          <Badge>PROSPECTING</Badge>
          <Badge>Sensitive</Badge>
        </div>
      </div>
    </Card>
  );
};

export default Personality;
