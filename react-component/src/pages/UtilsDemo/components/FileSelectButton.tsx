/* eslint-disable react/display-name */
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Loader2, Upload } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { formatBytes } from '@/utils/base';
import { Input } from '@arco-design/web-react';
import type { RefInputType } from '@arco-design/web-react/es/Input';

const MAX_FILE_SIZE = 1 * 1024 * 1024;

interface FileSelectButtonProps {
  className?: string;
  title?: React.ReactNode;
  desc?: React.ReactNode;
  onChange: (file: File[]) => void;
  accept?: string;
  maxSize?: number;
  multiple?: boolean;
  loading?: boolean;
  warpClassName?: string;
}

export const FileSelectButton = forwardRef(
  (
    props: FileSelectButtonProps,
    ref: React.RefObject<{ upload: () => void } | null>
  ) => {
    const loading = props.loading || false;
    const [isDragging, setIsDragging] = useState(false);

    const inputRef = useRef<RefInputType | null>(null);
    const formRef = useRef<HTMLFormElement | null>(null);

    const maxSize = props.maxSize ?? MAX_FILE_SIZE;
    const maxSizeText = formatBytes(maxSize);

    const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const files: FileList = event.target.files;
      if (files.length === 0) {
        toast.error('请选择文件');
        formRef.current.reset();

        return;
      }

      const filterFiles = Array.from(files).filter(
        (file) => file.size <= maxSize
      );

      if (filterFiles.length === 0) {
        toast.error(`选中的文件大小不能超过 ${maxSizeText}`);
        formRef.current.reset();

        return;
      }

      if (filterFiles.length !== files.length) {
        toast.warning(`已过滤掉大于 ${maxSizeText} 的文件`);
      }

      props.onChange(filterFiles);

      formRef.current.reset();
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      setIsDragging(true);
    };

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      setIsDragging(false);
    };

    const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      setIsDragging(false);

      const files = Array.from(event.dataTransfer.files);
      if (files.length === 0) {
        toast.error('请选择文件');

        return;
      }

      const filterFiles = files.filter((file) => file.size <= maxSize);

      if (filterFiles.length === 0) {
        toast.error(`选中的文件大小不能超过 ${maxSizeText}`);

        return;
      }

      if (filterFiles.length !== files.length) {
        toast.warning(`已过滤掉大于 ${maxSizeText} 的文件`);
      }

      props.onChange(filterFiles);
      formRef.current.reset();
    };

    useImperativeHandle(ref, () => ({
      upload: () => formRef.current.querySelector('input').click(),
    }));

    return (
      <div className={cn('w-full', props?.warpClassName)}>
        <form
          className="flex h-full w-full flex-1 space-y-4 overflow-hidden"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <div
            className={cn(
              'flex h-20 w-20 cursor-pointer flex-col items-center justify-center gap-2 rounded-md border-1 border-dashed border-primary bg-primary/10 text-sm text-primary transition-all hover:bg-primary/20',
              loading &&
                'pointer-events-none cursor-not-allowed hover:bg-primary/10',
              isDragging && 'border-2 bg-primary/20',
              props?.className
            )}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();

              const fileInput = inputRef.current;
              if (!fileInput) {
                return;
              }

              const listenChange = (event: Event) => {
                handleUpload(event);
                fileInput.removeEventListener('change', listenChange);
              };

              fileInput.addEventListener('change', listenChange);

              fileInput.click();
            }}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="flex items-center gap-1">
              {props?.title || (
                <div className="flex items-center gap-1">
                  {loading ? (
                    <>
                      <Loader2 className="mr-0.5 h-4 w-4 animate-spin" />
                      上传中...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-0.5 h-4 w-4" />
                      上传
                    </>
                  )}
                </div>
              )}
            </div>
            <div className="w-full text-center text-xs text-primary/50">
              {props?.desc}
            </div>
          </div>

          <Input
            accept={props.accept ?? 'image/jpeg,image/png,image/webp'}
            className="hidden"
            multiple={props.multiple ?? false}
            name="file"
            ref={inputRef}
            type="file"
          />
        </form>
      </div>
    );
  }
);
