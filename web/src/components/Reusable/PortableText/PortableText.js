import React from 'react';
import BasePortableText from '@sanity/block-content-to-react';
import clientConfig from '../../../../client-config';
import Serializers from './Serializers';
import styled from 'styled-components';

const PortableText = ({ className, blocks, ...props }) => (
  <Container className={className} {...props}>
    <BasePortableText
      blocks={blocks}
      serializers={Serializers}
      {...clientConfig.sanity}
    />
  </Container>
);

const Container = styled.div``

export default PortableText;
