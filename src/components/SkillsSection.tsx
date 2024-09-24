const skills = [
  'HTML', 'CSS', 'Javascript', 'TypeScript', 'Node.js', 'ExpressJs',
  'MongoDb', 'MySql', 'Nestjs', 'React', 'NextJs', 'AWS'
];

interface SkillsSectionProps {
  custom: { [key: string]: string };
}



const SkillsSection: React.FC<SkillsSectionProps> =  ({custom}) => {
  return (
    <div className={custom.right}>
      <h2>My Skills</h2>
      <ul className={`${custom.skills} ${custom.tools}`}>
        {skills.map((skill, index) => (
          <li key={index} className={custom.toolItem}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsSection;
