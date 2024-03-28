import styled from 'styled-components'
import useGlobalContext from '../../../hooks/useGlobalContext';
import InstructionItem from './InstructionItem';

const InstructionsList = styled.div`
  margin-top: 20px;
`

const Instructions = () => {
  const { instructions } = useGlobalContext()

  if(instructions === undefined){
    return null
  }

  return (
    <article>
      <h2 className="title">Instructions</h2>
      <InstructionsList>
        { instructions.map((instruction) => (
          <InstructionItem instruction={instruction} key={instruction.id} />
        )) }
      </InstructionsList>

      <hr />
    </article>
  );
};

export default Instructions;
