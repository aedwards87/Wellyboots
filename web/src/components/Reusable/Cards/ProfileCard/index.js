import React from 'react'
import { capitilise } from '../../../../utils/helpers';
import ProfileCard from './ProfileCard'

const ProfileCardIndex = ({ person, bgColor = "dark" }) => {
  return (
    <ProfileCard bgColor={capitilise(bgColor)}>
      <ProfileCard.Body>
        <ProfileCard.ImageContainer>
          <ProfileCard.Image
            image={person.staffPhoto.image.asset.gatsbyImageData}
            alt={person.staffPhoto.alt}
          />
        </ProfileCard.ImageContainer>
        <ProfileCard.NamePlateContainer>
          <ProfileCard.Title heading="h3">
            {person.firstName} {person.lastName}
          </ProfileCard.Title>
          <ProfileCard.Text>{person.role}</ProfileCard.Text>
        </ProfileCard.NamePlateContainer>
        <ProfileCard.PortableText blocks={person.description} />
      </ProfileCard.Body>
    </ProfileCard>
  )
}

export default ProfileCardIndex
