import React from 'react';
import * as Symbols from '@brightlayer-ui/symbols-mui';

export const App = (): JSX.Element => (
    <div data-testid="symbolContainer">
        {Object.keys(Symbols).map((key: any) => {
            //@ts-ignore
            const Component = Symbols[key];
            return <Component key={key} />;
        })}
    </div>
);
