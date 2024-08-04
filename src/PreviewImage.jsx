import { useRef } from "react";

export const PreviewImage = () => {
  const ref = useRef(null);

  useEffect(() => {
    /**
     * 如果出现在视图里，开始懒加载
     **/

    fetch(attachmentId)
      .then((res) => {
        ref.current.src = "image url";
      })
      .catch((err) => {
        console.error("failed to fetch image url", err);
      });
  }, []);

  return (
    <div>
      <img data-attachment-id={attachmentId} ref={ref} />
    </div>
  );
};
