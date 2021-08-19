import React from 'react';

import Footer from './Footer';

export default function FooterComponent({ scrollToIndex, index, data, name }) {
  return (
    <>
    {index === 49 ?
      <Footer scrollToIndex={scrollToIndex} index={index} finish={true} data={data} name={name} /> 
      :
      <Footer scrollToIndex={scrollToIndex} index={index} />
    }
    </>
  );
}