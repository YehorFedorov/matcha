import React from 'react';
import Title from './entryTitle.jsx';
import EntryTabs from '../containers/entryTabs.jsx';

const EntryPage = React.createClass ({
    render() {
        return <div>
                    <Title />
                        <div id="entryForm">
                            <EntryTabs />
                        </div>
                </div>
    }
});

export default EntryPage;