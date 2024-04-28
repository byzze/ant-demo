import { AntdRegistry } from '@ant-design/nextjs-registry';
import './globals.css'
import { App } from 'antd';

const RootLayout = ({ children }: React.PropsWithChildren) => (

  <html className="h-full" lang="zh-Hans-CN">
    <body className="m-0 h-full">
      <AntdRegistry>
        <App className="h-full">
          {children}
        </App>
      </AntdRegistry>
    </body>
  </html>
);

export default RootLayout;