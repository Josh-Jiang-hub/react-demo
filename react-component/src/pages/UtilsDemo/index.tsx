import { Tabs, Typography } from '@arco-design/web-react';
import TabPane from '@arco-design/web-react/es/Tabs/tab-pane';

export default function UtilsDemo() {
  return (
    <Tabs defaultActiveTab="1">
      <TabPane key="1" title="Tab 1">
        <Typography.Paragraph>Content of Tab Panel 1</Typography.Paragraph>
      </TabPane>
      <TabPane key="2" title="Tab 2">
        <Typography.Paragraph>Content of Tab Panel 2</Typography.Paragraph>
      </TabPane>
      <TabPane key="3" title="Tab 3">
        <Typography.Paragraph>Content of Tab Panel 3</Typography.Paragraph>
      </TabPane>
    </Tabs>
  );
}
