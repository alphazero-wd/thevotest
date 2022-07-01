import { useEffect } from "react";

export const useUpdateTitle = (title: string, dep: any[] = []) => {
  useEffect(() => {
    document.title = title;
  }, dep);
};
