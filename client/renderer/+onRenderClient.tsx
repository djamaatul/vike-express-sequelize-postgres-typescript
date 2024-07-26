// https://vike.dev/onRenderClient
export { onRenderClient }

import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import Root from './Root';

async function onRenderClient(pageContext) {
  const { Page } = pageContext;
  hydrateRoot(
    document.getElementById('page-view'),
    <Root>
      <Page />
    </Root>
  )
}
