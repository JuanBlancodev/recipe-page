import styled from "styled-components";
import PropTypes from 'prop-types'

const InstructionItemContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  font-family: var(--font-outfit);
`;

const InstructionNumber = styled.span`
  color: var(--color-nutmeg);
  font-weight: bold;
`;

const InstructionInfo = styled.div`
  color: var(--color-wenge-brown);
`;

const InstructionSpan = styled.span`
  font-weight: bold;
`;

const InstructionItem = ({ instruction: { id, title, text } }) => {
  return (
    <InstructionItemContainer>
      <InstructionNumber>{id}.</InstructionNumber>
      <InstructionInfo>
        <InstructionSpan>{title}: </InstructionSpan>
        { text }
      </InstructionInfo>
    </InstructionItemContainer>
  );
};

InstructionItem.propTypes = { instruction: PropTypes.object }

export default InstructionItem;
