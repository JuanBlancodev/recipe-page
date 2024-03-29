import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const Banner = styled.div`
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  background: url('image-omelette.jpeg') no-repeat center center/contain;

  @media (width < 700px){
    height: 200px;
    background-position-y: top;
    margin-bottom: 5px;
  }
`

const HeaderTitle = styled.h1`
  font-family: var(--font-young);
  font-size: 2.5em;
  color: var(--color-dark-charcoal);

  @media (width < 700px){
    font-size: 2rem;
    margin: 0 30px;
  }
`

const HeaderParagraph = styled.p`
  color: var(--color-wenge-brown);
  font-family: var(--font-outfit);
  font-weight: 600;

  @media (width < 700px){
    margin: 0 30px;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <Banner />
      <HeaderTitle>Simple Omelette Recipe</HeaderTitle>
      <HeaderParagraph>
        An easy and quick dish, perfect for any meal. This classNameic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
      </HeaderParagraph>
    </HeaderContainer>
  )
}

export default Header