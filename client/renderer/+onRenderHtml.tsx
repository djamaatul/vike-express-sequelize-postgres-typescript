export { onRenderHtml }

import React from 'react'
import { renderToString } from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import './global.css'

async function onRenderHtml(pageContext) {
  const { Page } = pageContext
  const viewHtml = dangerouslySkipEscape(
    renderToString(
        <Page />,
    )
  )

  return escapeInject`<!DOCTYPE html>
    <html>
      <body class='max-w-screen-sm mx-auto border-x min-h-screen'>
        <div id="page-view">${viewHtml}</div>
      </body>
    </html>`
}
