import { shallow } from 'enzyme';
import * as React from 'react';

import EmptyList from '../../../components/printers-list/empty-list';

describe('=== PRINTERS === COMPONENTS === PrinterList --- EmptyList', () => {
    // #region Configurations

    const wrapper = shallow(<EmptyList />);

    // #endregion

    // #region should render and is equal

    it('should render and is equal', () => {
        expect(wrapper).toMatchSnapshot();
    });

    // #endregion
});
