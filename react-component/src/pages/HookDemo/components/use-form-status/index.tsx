import { useFormStatus } from 'react-dom';
import { loadingData } from '../../../../utils';

function SubmitButton() {
  const { pending, data, action } = useFormStatus(); // 检查提交状态
  console.log('data', data?.get('name'));
  console.log('action', action);
  return (
    <button disabled={pending} type="submit">
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}

export default function UserFormStatus() {
  return (
    <form
      action={async () => {
        'use server';
        await loadingData();
      }}
    >
      <input
        className="border p-2"
        name="name"
        placeholder="Enter your name"
        required
        type="text"
      />
      <SubmitButton />
    </form>
  );
}
