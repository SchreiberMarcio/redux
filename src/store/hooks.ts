import { useDispatch, useSelector } from "react-redux";

import { Store } from "@reduxjs/toolkit";
import { AppDispatch } from ".";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<Store>();
