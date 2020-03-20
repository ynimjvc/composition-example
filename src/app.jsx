import React from 'react';

import './app.css';

import Layout from './components/layout';
import Card from './components/card';
import Warning from './components/warning';

const hasContent = true;
const design = 'metro'; //(metro|material)

// выбор между заглушкой и карточкой через композицию
// выбор между дизайнами через hoc

export default () => (
    <div className="content">
        <Layout hasContent={hasContent}>
            <Card design={design}>
                <h2>{design} is fresh</h2>
                <h1>New styles</h1>
                <p>
                    Check out our new designs
                </p>
                <p>
                    Fresh new crisp look!
                </p>
            </Card>
            <Warning placeholder>
                Oh no! No designs availible.
            </Warning>
        </Layout>
    </div>
);
