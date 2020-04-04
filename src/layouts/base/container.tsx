import React, {useReducer} from 'react';

import { BaseLayoutComponent } from './view';
import { reducer, initialValue, toggleBottomSider } from './actions';

const BaseLayoutContainer: React.FC = ({ children })=>{
  const [{siderIsOpen}, dispatch] = useReducer(reducer, initialValue);
  const toggleSider = ()=>dispatch(toggleBottomSider() as any);

  return <BaseLayoutComponent
    siderIsOpen={siderIsOpen}
    toggleSider={toggleSider}
  >{children}</BaseLayoutComponent>
};

export { BaseLayoutContainer };