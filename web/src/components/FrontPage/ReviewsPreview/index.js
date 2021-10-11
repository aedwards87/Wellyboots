// Imported dependencies
import React from 'react'
// Imported components
import ReviewsPreview from './ReviewsPreview'
import PortableText from '../../Reusable/PortableText/PortableText';
import { Car, Crown, Girl, Heart } from '../../../assets/svg';
//Imported hooks
import { usePaginate, useReviewsQuery } from '../../../hooks/';

// The component
// This is the Reviews Preview Panel building block cocomponent, 
// showcasing all reviews singularly, in a nice carousel
const ReviewsPreviewIndex = () => {
  const { allReviews: { nodes: allReviews } } = useReviewsQuery()
  const [page, direction, paginate, carouselIndex] = usePaginate(allReviews)
  // console.log({ allReviews });
  return (
    <ReviewsPreview bgColor="dark purple">
      <ReviewsPreview.SVGDividerTop />
      <ReviewsPreview.Frame yPad={8} yGap={6}>
        <ReviewsPreview.Row>
          <ReviewsPreview.Column
            xAlign="center"
            xItemsAlign="center"
            yGap={6}
            custom
          >

            <ReviewsPreview.Row>
              <ReviewsPreview.Title
                heading="h2"
                lineColor="purple"
                color="light"
                textAlign="center"
                zIndex="1"
              >
                What parents say about us
              </ReviewsPreview.Title>
            </ReviewsPreview.Row>

            <ReviewsPreview.Row custom>
              <ReviewsPreview.SliderAnimation
                direction={direction}
                page={page}
                paginate={paginate}
              >
                <ReviewsPreview.Column xAlign="center" xItemsAlign="center" yGap={4}>
                  <ReviewsPreview.QuoteMarkSVG />
                  <ReviewsPreview.TextContainer color="light">
                    <PortableText blocks={allReviews[carouselIndex].feedback} />
                  </ReviewsPreview.TextContainer>
                  <ReviewsPreview.Line />
                  <ReviewsPreview.Text color="light" spacing="3px" casing="upper">
                    {allReviews[carouselIndex].name}
                  </ReviewsPreview.Text>
                </ReviewsPreview.Column>
              </ReviewsPreview.SliderAnimation>
            </ReviewsPreview.Row>

            <ReviewsPreview.Row>
              <ReviewsPreview.ButtonContainer>
                <ReviewsPreview.Button
                  model="left"
                  color="purple"
                  yPad={3}
                  xPad={5}
                  onClick={() => paginate(-1)}
                >
                  <ReviewsPreview.ArrowSVG direction="left" />
                </ReviewsPreview.Button>
                <ReviewsPreview.Button
                  model="right"
                  color="purple"
                  yPad={3}
                  xPad={5}
                  onClick={() => paginate(1)}
                >
                  <ReviewsPreview.ArrowSVG />
                </ReviewsPreview.Button>
              </ReviewsPreview.ButtonContainer>
            </ReviewsPreview.Row>

          </ReviewsPreview.Column>
        </ReviewsPreview.Row>
      </ReviewsPreview.Frame>
      <ReviewsPreview.SVGDividerBottom />
    </ReviewsPreview>
  )
}

export default ReviewsPreviewIndex