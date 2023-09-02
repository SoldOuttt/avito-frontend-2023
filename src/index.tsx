import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { gameApi } from './api/game/gameApi';
import { ConfigProvider } from 'antd';
import './index.css';
import '@fontsource-variable/jura';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ConfigProvider theme={{
    token: {
      fontFamily: 'Jura Variable',
    }
  }}>
    <ApiProvider api={gameApi}>
      <RouterProvider router={router}/>
    </ApiProvider>
  </ConfigProvider>
);
