import React from 'react';
import { Image } from 'antd';

interface IDetailedGamePreviewProps {
  url: string
}
export const DetailedGamePreview: React.FC<IDetailedGamePreviewProps> = ({url}) => {
  return(
    <Image
      width={'100%'}
      style={{borderRadius: 10}}
      preview={false}
      src={url}
    />
  )
}