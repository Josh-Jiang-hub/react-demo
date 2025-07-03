import { useState } from 'react';

export default function FileButton() {
  const [loading, setLoading] = useState(false);
  return (
    <FileSelectButton
      accept="*"
      className="flex h-[300px] flex-1 shrink-0"
      desc={
        <div className="flex flex-col gap-1 text-sm">
          <div className="text-primary">
            拖拽任意文件到此或点击上传，可批量上传
          </div>
          <div>文件大小限制 500 MB</div>
        </div>
      }
      loading={loading}
      maxSize={500 * 1024 * 1024}
      multiple
      onChange={async (files) => {
        setLoading(true);

        for (const file of files) {
          const fileUrl = await uploadFile({
            file,
            business: 'public',
            // 如果文件名包含点，则使用文件名后缀，否则使用文件类型后缀
            extName: file.name.includes('.')
              ? file.name.split('.').pop()
              : getMimeTypeExtension(file.type)?.slice(1),
          });

          useFileUploaderStore.getState().addFile({
            id: Math.random().toString(36).substring(2, 15),
            name: file.name,
            size: file.size,
            type: file.type,
            url: fileUrl,
            created_at: Date.now(),
          });
        }
        setLoading(false);

        toast.success('上传成功');
      }}
      title={<div>{loading ? loading : '上传'}</div>}
      warpClassName="w-full"
    />
  );
}
