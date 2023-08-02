import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import uuid from 'react-uuid';

import type { RootState } from "store";
import { WindowTypesEnum } from "types/Enums";

interface OpenWindow {
    id: string;
    type: WindowTypesEnum
}

interface WindowState {
    windows: OpenWindow[];
}

const initialState: WindowState = {windows: []};

export const windowSlice = createSlice({
    name: 'window',
    initialState,
    reducers: {
        open: (state, action: PayloadAction<WindowTypesEnum>) => {
            let newWindow: OpenWindow = {
                id: uuid(),
                type: action.payload
            };
            state.windows = state.windows.concat(newWindow);
        },
        close: (state, action: PayloadAction<string>) => {
            let index: number = state.windows.findIndex(x => x.id === action.payload);
            state.windows.splice(index, 1);
        }
    }
})

export const {open, close} = windowSlice.actions;

export const selectWindow = (state: RootState) => state.window.windows;

export default windowSlice.reducer; 