import React, { Dispatch, SetStateAction } from 'react';
import { Button, Dropdown, MenuProps } from 'antd';
import { AlignLeftOutlined } from '@ant-design/icons';

interface IGameDropdownProps {
  name: string,
  items: MenuProps['items']
  setItem: Dispatch<SetStateAction<any>>
}

export const GameDropdown: React.FC<IGameDropdownProps> = (
  {
    name,
    items,
    setItem
  }
) => {
  const handleClick: MenuProps['onClick'] = (e) => {
    if (e.key === 'all')
      setItem(undefined);
    else
      setItem(e.key)
  };
  return (
    <Dropdown menu={{ items, onClick: handleClick, selectable: true, theme: 'dark' }} trigger={['click']}>
      <Button ghost={true} icon={<AlignLeftOutlined/>}>{name}</Button>
    </Dropdown>
  );
};