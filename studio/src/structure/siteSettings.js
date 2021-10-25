import S from '@sanity/desk-tool/structure-builder'

import { RiSettings2Line, RiPagesLine } from 'react-icons/ri'
import { BiCommentDots, BiBookHeart } from 'react-icons/bi'
import { FiBox } from 'react-icons/fi'
import { GrContactInfo } from 'react-icons/gr'
import { AiOutlineBgColors } from 'react-icons/Ai'

const siteSettings = S.listItem()
  .title('Settings')
  .icon(RiSettings2Line)
  .child(
    S.list()
      .id('settings')
      .title('Settings')
      .items([
        S.listItem()
          .title('Front page')
          .icon(RiPagesLine)
          .child(
            S.editor()
              .id('frontPage')
              .title('Front page')
              .schemaType('frontPage')
              .documentId('frontPage')
          ),
        S.listItem()
          .title('Site details')
          .icon(GrContactInfo)
          .child(
            S.editor()
              .id('siteDetails')
              .title('Site details')
              .schemaType('siteDetails')
              .documentId('siteDetails')
          ),
        S.listItem()
          .title('Brand')
          .icon(FiBox)
          .child(
            S.editor()
              .id('brand')
              .title('Brand')
              .schemaType('brand')
              .documentId('brand')
          ),
        S.listItem()
          .title('Company Logo')
          .icon(FiBox)
          .child(
            S.editor()
              .id('companyLogo')
              .title('Company Logo')
              .schemaType('companyLogo')
              .documentId('companyLogo')
          ),
        S.listItem()
          .title('Brand colours')
          .icon(AiOutlineBgColors)
          .schemaType('brandColors')
          .child(S.documentTypeList('brandColors').title('Brand colours')),
        S.listItem()
          .title('Social Media')
          .icon(BiCommentDots)
          .schemaType('socialMedia')
          .child(
            S.editor()
              .id('socialMedia')
              .title('Social Media')
              .schemaType('socialMedia')
              .documentId('socialMedia')
          ),
        S.listItem()
          .title('Prospectus')
          .icon(BiBookHeart)
          .child(
            S.editor()
              .id('prospectus')
              .title('Prospectus')
              .schemaType('prospectus')
              .documentId('prospectus')
          ),
      ])
  )

export default siteSettings
