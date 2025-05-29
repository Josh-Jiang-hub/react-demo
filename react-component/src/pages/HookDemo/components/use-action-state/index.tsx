import { useActionState } from 'react';
import { loadingData } from '../../../../utils';

const increment = async (v: number) => {
  await loadingData();
  return v + 1;
};
export default function UserActionState() {
  const [state, formAction, isPending] = useActionState(increment, 0);
  return (
    <form>
      {isPending ? 'isPending' : state}
      <button disabled={isPending} formAction={formAction}>
        +1
      </button>
    </form>
  );
}
