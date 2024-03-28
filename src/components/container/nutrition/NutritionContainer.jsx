import styled from 'styled-components'
import useGlobalContext from '../../../hooks/useGlobalContext';
import Nutrition from './Nutrition';

const NutritionParagraph = styled.p`
  margin: 20px 0;
  font-family: var(--font-outfit);
  font-weight: 500;
  color: var(--color-wenge-brown);
`

const NutritionTable = styled.div`
  font-family: var(--font-outfit);
  font-weight: 500;
`

const NutritionContainer = () => {
  const { nutrition } = useGlobalContext()

  if(nutrition === undefined){
    return null
  }

  return (
    <article className="nutrition">
      <h2 className="title">Nutrition</h2>
      <NutritionParagraph>
        The table below shows nutritional values per serving without the
        additional fillings.
      </NutritionParagraph>

      <NutritionTable>
        {  nutrition.map((info, index) => (
          <Nutrition info={info} key={index} />
        )) }
      </NutritionTable>
    </article>
  );
};

export default NutritionContainer;
