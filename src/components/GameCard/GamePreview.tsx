import React from 'react';
import { Image } from 'antd';

interface IGamePreviewProps {
  url: string
}
export const GamePreview: React.FC<IGamePreviewProps> = ({url}) => {
  return(
    <Image
      width={'100%'}
      preview={false}
      src={url}
    />
  )
}