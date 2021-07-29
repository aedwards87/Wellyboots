// Imported packages
import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'

// Imported components
import ReviewsPreview from './ReviewsPreview'

const ReviewsPreviewIndex = () => {

  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <ReviewsPreview bgColor="dark purple">
      <ReviewsPreview.SVGDividerTop />
      <ReviewsPreview.Frame yPad={8}>
        <ReviewsPreview.Row>
          <ReviewsPreview.Column xAlign="center">
            <ReviewsPreview.Title
              heading="h2"
              lineColor="purple"
              color="light"
              textAlign="center"
            >
              What parents say about us
            </ReviewsPreview.Title>
          </ReviewsPreview.Column>
        </ReviewsPreview.Row>
        <ReviewsPreview.Row>
          <ReviewsPreview.Column xAlign="center" xItemsAlign="center" yGap={9}>
            <ReviewsPreview.QuoteMarkSVG />

            <ReviewsPreview.Row>

              <AnimatePresence initial={false} custom={direction}>
                <ReviewsPreview.Column xAlign="center" xItemsAlign="center" yGap={6}>

                  <ReviewsPreview.Text color="light" text="center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac mattis nullam tortor, viverra pulvinar vitae nisl facilisi egestas. In sed mauris massa in. Nulla nec tellus, nunc, sed risus, dui, convallis sed. Mattis nunc neque morbi cum bibendum justo ultrices commodo.
                  </ReviewsPreview.Text>
                  <ReviewsPreview.Line />
                  <ReviewsPreview.Text color="light" spacing="3px" casing="upper">
                    danielle watson
                  </ReviewsPreview.Text>

                </ReviewsPreview.Column>
              </AnimatePresence>

            </ReviewsPreview.Row>

            <ReviewsPreview.ButtonContainer>
              <ReviewsPreview.Button model="left" color="purple" yPad={3} xPad={5}>
                <ReviewsPreview.ArrowSVG direction="left" />
              </ReviewsPreview.Button>
              <ReviewsPreview.Button model="right" color="purple" yPad={3} xPad={5}>
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