import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

export default function VisibilityComponent(props) {

  const [visible, setVisible] = useState(false)

  return (
    <VisibilitySensor
    partialVisibility
      onChange={(isVisible) => {
        setVisible(isVisible)
      }}
    >
<div style={{
          display: 'block',
          maxWidth: '100%',
          opacity: visible ? 1 : 0.00,
          transition: 'opacity 2500ms linear',
        }} >

{props.children}

</div>
    </VisibilitySensor>
  )
}
