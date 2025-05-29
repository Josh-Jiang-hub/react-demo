import { useState, useTransition } from 'react';

const names = Array.from({ length: 10000 }, (_, i) => `用户 ${i + 1}`);
export default function UseTransition() {
  const [input, setInput] = useState('');
  const [list, setList] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    // 使用 transition 优化大列表过滤的性能
    startTransition(() => {
      const filtered = names.filter((name) => name.includes(value));
      setList(filtered);
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <input
        onChange={handleChange}
        placeholder="输入关键词过滤用户"
        style={{ padding: 8, width: 300 }}
        type="text"
        value={input}
      />

      {isPending && <p>加载中...</p>}

      <ul>
        {list.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
