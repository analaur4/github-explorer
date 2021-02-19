import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../pages/home';

describe('Home app', () => {
    it('Find repo', () => {
        const { debug } = render(<Home />)
        debug();
    })
})