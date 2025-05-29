import { useId } from 'react';

export default function UseId() {
  const passwordHintId = useId();
  console.log(passwordHintId);
  return <div>{passwordHintId}</div>;
}
