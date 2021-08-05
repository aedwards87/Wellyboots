// Imported dependencies
import React, { useState } from 'react'
import { wrap } from "popmotion";

// Imported components
import ReviewsPreview from './ReviewsPreview'
import { Car, Crown, Girl, Heart } from '../../../assets/svg';



const data = [
  {
    name: 'danielle watson',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mattis nullam tortor, viverra pulvinar vitae nisl facilisi egestas. In sed mauris massa in. Nulla nec tellus, nunc, sed risus, dui, convallis sed. Mattis nunc neque morbi cum bibendum justo ultrices commodo.'
  },
  {
    name: 'Bob sinclair',
    content: `We have worked with Steve at SW for around 10 years on maintenance, refurbishment and small development projects, and we have found him honest, reliable and fun to work with. We cannot provide a better recommendation than to hand over the keys to our home and to go away whilst he did some work for us, and on completion everything was impeccable. 5 star plus review from us over 10 years!
    `
  }
]

const ReviewsPreviewIndex = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const carouselIndex = wrap(0, data.length, page);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  const heading = 'What parents say about us'
  return (
    <ReviewsPreview bgColor="dark purple">
      <ReviewsPreview.SVGDividerTop />
      <ReviewsPreview.Frame yPad={8} yGap={6}>
        <ReviewsPreview.Row>
          <ReviewsPreview.Column xAlign="center">
            <ReviewsPreview.Title heading="h2" lineColor="purple" color="light" textAlign="center">
              {heading}
            </ReviewsPreview.Title>
          </ReviewsPreview.Column>
        </ReviewsPreview.Row>
        <ReviewsPreview.Row>
          <ReviewsPreview.Column xAlign="center" xItemsAlign="center" yGap={6} custom>
            <ReviewsPreview.QuoteMarkSVG />

            <ReviewsPreview.Row custom>
              <ReviewsPreview.SliderAnimation direction={direction} page={page} paginate={paginate}>
                <ReviewsPreview.Column xAlign="center" xItemsAlign="center" yGap={4}>
                  <ReviewsPreview.Text color="light" text="center">
                    {data[carouselIndex].content}
                  </ReviewsPreview.Text>
                  <ReviewsPreview.Line />
                  <ReviewsPreview.Text color="light" spacing="3px" casing="upper">
                    {data[carouselIndex].name}
                  </ReviewsPreview.Text>
                </ReviewsPreview.Column>
              </ReviewsPreview.SliderAnimation>
            </ReviewsPreview.Row>

            <ReviewsPreview.ButtonContainer>
              <ReviewsPreview.Button onClick={() => paginate(-1)} model="left" color="purple" yPad={3} xPad={5}>
                <ReviewsPreview.ArrowSVG direction="left" />
              </ReviewsPreview.Button>
              <ReviewsPreview.Button onClick={() => paginate(1)} model="right" color="purple" yPad={3} xPad={5}>
                <ReviewsPreview.ArrowSVG />
              </ReviewsPreview.Button>
            </ReviewsPreview.ButtonContainer>

          </ReviewsPreview.Column>
        </ReviewsPreview.Row>
      </ReviewsPreview.Frame>
      <ReviewsPreview.SVGDividerBottom />
    </ReviewsPreview>
  )
}

export default ReviewsPreviewIndex