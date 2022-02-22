// Imported dependencies
import React, { useCallback, useEffect, useRef, useState } from 'react'
// Imported components
import ReviewsPreview from './ReviewsPreview'
import PortableText from '../../../Reusable/PortableText/PortableText';
//Imported hooks
import { usePaginate, useReviewsQuery } from '../../../../hooks/';
import useIntersection from '../../../../hooks/useIntersectionObserver';

// The component
// This is the Reviews Preview Panel building block cocomponent, 
// showcasing all reviews singularly, in a nice carousel
const ReviewsPreviewIndex = () => {
  const { allReviews: { nodes: allReviews } } = useReviewsQuery()
  const [page, direction, paginate, carouselIndex] = usePaginate(allReviews)

  // Detecting when section comes into the viewport
  // For use on contact pages when to position:fixed the image
  // const ref = useRef();
  // const inViewport = useIntersection(ref) 
  // console.log({ inViewport });

  return (
    <ReviewsPreview bgColor="dark purple" /*innerRef={ref}*/>
      <ReviewsPreview.SVGDividerTop />
      <ReviewsPreview.Frame yPad={8} yGap={6}>
        <ReviewsPreview.CrownSVG />
        <ReviewsPreview.CarSVG />
        <ReviewsPreview.Row>
          <ReviewsPreview.Column
            xAlign="center"
            xItemsAlign="center"
            yGap={6}
            custom
          >

            <ReviewsPreview.Row>
              <ReviewsPreview.Title
                id="reviews"
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
                  ariaLabel="Previous review"
                  onClick={() => paginate(-1)}
                >
                  <ReviewsPreview.ArrowSVG direction="left" />
                </ReviewsPreview.Button>
                <ReviewsPreview.Button
                  model="right"
                  color="purple"
                  yPad={3}
                  xPad={5}
                  ariaLabel="Next review"
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