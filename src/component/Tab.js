import React, { useState } from 'react'


const Tab = () => {
const [tabs, setTabs] = useState([''])

const tabsOne = () => (
    <h1>
         The first Tab.
    </h1>

);
const tabsTwo = () => (
    <h1>
        The Second Tab.
    </h1>
);
const tabsThree = () => (
    <h1>
         The third Tab.
    </h1>
);

return(
<div className="styles">
    <button onClick={() => setTabs(tabsOne())}>Tab One</button>
    <button onClick={() => setTabs(tabsTwo())}>Tab Two</button>
    <button onClick={() => setTabs(tabsThree())}>Tab Three</button>
    {tabs}
</div>
)



}
export default Tab;