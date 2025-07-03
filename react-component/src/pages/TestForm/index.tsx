import { useForm } from 'react-hook-form';
import type z from 'zod';

export default function TestForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      ...(props.defaultValues || {}),
      lesson_fulfillment: props.lessonData || [],
    },
  });
  return;
}
