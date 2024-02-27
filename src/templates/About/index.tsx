import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
        officiis aut possimus dicta earum laborum facilis explicabo hic illum
        ipsam a fugiat atque ad dolores asperiores tempora soluta velit et?
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
