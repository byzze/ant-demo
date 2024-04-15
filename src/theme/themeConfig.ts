import type { ThemeConfig } from 'antd';
import { Button, ConfigProvider, Input, Space, theme } from 'antd';
const themeconfig: ThemeConfig = {
    algorithm: theme.darkAlgorithm,
    token: {
        // Seed Token，影响范围大
        colorPrimary: '#00b96b',
        borderRadius: 10,

        // 派生变量，影响范围小
        colorBgContainer: '#f6ffed',
    },
};

export default theme;