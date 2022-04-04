import React from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const param = useParams();
  console.log(param);
  return <div>{`Detail Halaman ${param.id}`}</div>;
}

export default Detail;
