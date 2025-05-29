import { Tabs } from '@arco-design/web-react';
import UseTransition from './components/use-transition';
import UseDeferredValue from './components/use-deferred-value';
import UseId from './components/use-id';
import UserActionState from './components/use-action-state';
import UseOptimistic from './components/use-optimisitc';
import UserFormStatus from './components/use-form-status';
import Use from './components/use/use';
const TabPane = Tabs.TabPane;

// useDeferredValue的作用和useTransition一致，都是用于在不阻塞UI的情况下更新状态。但是使用场景不同。
// useTransition是让你能够完全控制哪个更新操作应该以一个比较低的优先级被调度。但是，在某些情况下，可能无法访问实际的更新操作（例如，状态是从父组件上传下来的）。
// 这时候，就可以使用useDeferredValue来代替。

export default function HookDemo() {
  console.log(3);
  return (
    <Tabs defaultActiveTab="1" destroyOnHide>
      <TabPane key="2" title="useTransition(18)">
        <UseTransition />
      </TabPane>
      <TabPane key="4" title="useDeferredValue(18)">
        <UseDeferredValue />
      </TabPane>
      <TabPane key="3" title="useId(18)">
        <UseId />
      </TabPane>
      <TabPane key="5" title="useActionState">
        <UserActionState />
      </TabPane>
      <TabPane key="6" title="useOptimistic">
        <UseOptimistic />
      </TabPane>
      <TabPane key="7" title="useFormStatus">
        <UserFormStatus />
      </TabPane>
      <TabPane key="1" title="use">
        <Use />
      </TabPane>
      <TabPane key="8" title="startTransition">
        3
      </TabPane>
      <TabPane key="9" title="Cleanup functions for refs">
        3
      </TabPane>
    </Tabs>
  );
}
