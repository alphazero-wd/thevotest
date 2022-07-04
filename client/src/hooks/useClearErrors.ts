import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../features/hooks";
import { clearErrors } from "../features/reducers/auth";

export const useClearErrors = () => {
  const { errors } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  useEffect(() => {
    if (errors.length > 0) {
      const hideErrors = setTimeout(() => dispatch(clearErrors()), 3000);
      return () => clearTimeout(hideErrors);
    }
  }, [errors]);

  useEffect(() => {
    dispatch(clearErrors());
  }, [pathname]);
};
