// Imported packages
import React from 'react'

// Imported components
import ReviewsPreview from './ReviewsPreview'

const ReviewsPreviewIndex = () => {
  return (
    <ReviewsPreview bgColor="dark purple">
      <ReviewsPreview.Frame yPad={11}>
        <ReviewsPreview.Row rYGap={5}>
          <ReviewsPreview.Column xAlign="center">
            <ReviewsPreview.Title heading="h1" lineColor="purple" color="white">
              What parents say about us
            </ReviewsPreview.Title>
          </ReviewsPreview.Column>
        </ReviewsPreview.Row>
        <ReviewsPreview.Row rYGap={5}>
          <ReviewsPreview.Column>
            Hello
          </ReviewsPreview.Column>
          <ReviewsPreview.Column>
            World!
          </ReviewsPreview.Column>
        </ReviewsPreview.Row>
      </ReviewsPreview.Frame>
    </ReviewsPreview>
  )
}

export default ReviewsPreviewIndex