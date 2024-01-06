'use client'

import {Debug} from '../system/Debug/Debug';
import {WebsiteBuilder, WebsiteBuilderVM} from '../website-builder';
import {PageEditor} from '../page-editor';
import {standard} from '../diamond-ui/typography';
import './app.css';

import {observer} from 'mobx-react';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const TypoStyle = createGlobalStyle(standard);

export const App = observer(() => {
    const websiteBuilderVM = new WebsiteBuilderVM();

    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <WebsiteBuilder
                    vm={websiteBuilderVM}
                />
            ),
        },
        {
            path: '/editor',
            element: (
                <>
                    <PageEditor
                        vm={websiteBuilderVM.pageEditor}
                    />
                    <Debug
                        page={websiteBuilderVM.pageEditor}
                    />
                </>
            ),
        }
    ]);

    return (
        <>
            <TypoStyle />
            <RouterProvider router={router} />
        </>
    );
});
