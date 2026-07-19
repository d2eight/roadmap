import { useContext } from 'react';
import { GuideContext } from '../../../context/GuideContext';

export default function GuideComponent() {
  const guide = useContext(GuideContext);

  return (
    <div>
      <h1>{guide.title}</h1>
      <div>
        {guide.steps.map((item) => {
          return <p>{item.title}</p>;
        })}
      </div>
    </div>
  );
}
