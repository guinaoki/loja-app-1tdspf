import React from 'react'

export default function ProdutoSlug({params}) {
  return (
    <>
    <h1>Produto SLUG</h1>
    <p>Slug: {params.slug}</p>
    </>
  )
}
