export type Skill = string;

type SkillItemProps = {
  skill: Skill;
};

const SkillItem = ({ skill }: SkillItemProps) => {
  return <li> {skill} </li>;
};

export default SkillItem;
