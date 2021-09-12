import React from "react";

export type Skill = string;

interface Props {
  skill: Skill;
}

const SkillItem: React.FC<Props> = ({ skill }) => {
  return <li> {skill} </li>;
};

export default SkillItem;
