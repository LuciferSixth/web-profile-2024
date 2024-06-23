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
        I am a person who speaks little, listens a lot, understands problems, I am a actives listening. I am a calm person, smiles easily. I am a person who is determined, responsible for the assigned duties. I can communicate well for teamwork. I can manage work.
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
