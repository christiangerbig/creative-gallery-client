export type Skill = string;

interface Props {
  skill: Skill;
}

const SkillItem = ({ skill }: Props) => {
  return <li> {skill} </li>;
};

export default SkillItem;
