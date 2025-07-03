import { Button } from '@arco-design/web-react';
import NiceModal, { create, show, useModal } from '@ebay/nice-modal-react';
import { getInputNumber } from './util';
const TestModal1 = create((props: { title: string }) => {
  const modal = useModal();

  return (
    <div
      onClick={() => {
        modal.resolve();
        modal.hide();
      }}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
        display: modal.visible ? 'block' : 'none',
      }}
    >
      hide modal{props.title}
    </div>
  );
});

const TestModal2 = create((props: { title: string }) => {
  const modal = useModal();
  return (
    <div
      onClick={() => {
        modal.resolve(); //先hide resolve不执行
        modal.hide();
      }}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
        display: modal.visible ? 'block' : 'none',
      }}
    >
      hide modal{props.title}
    </div>
  );
});

export default function TestEbayModal() {
  getInputNumber();
  return (
    <NiceModal.Provider>
      <div style={{ display: 'flex', gap: 10, margin: 'auto' }}>
        <Button
          onClick={() => {
            show(TestModal1, { title: '123' }).then(() => {
              console.log('modal1 closed');
            });
          }}
          type="primary"
        >
          Open Modal1
        </Button>
        <Button
          onClick={() => {
            show(TestModal2, { title: '456' }).then(() => {
              console.log('modal2 closed');
            });
          }}
          type="primary"
        >
          Open Modal2
        </Button>
      </div>
    </NiceModal.Provider>
  );
}
