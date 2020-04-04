import {IAction} from "../../types/actions";
import { IProps } from "./types";

export const initialValue: any = {
    siderIsOpen: false
};

enum Types {
    'TOGGLE_SIDER' = 'TOGGLE_SIDER'
}

export const toggleBottomSider = ()=>({
   type: Types.TOGGLE_SIDER
});

export const reducer = (state: IProps=initialValue, {type, payload}: IAction)=>{
    const actions: {[k: string]: (state: IProps)=>IProps} = {
        [Types.TOGGLE_SIDER]: (state)=>({
            ...state,
            siderIsOpen: !state.siderIsOpen
        })
    };

    return actions[type](state) || state;
};