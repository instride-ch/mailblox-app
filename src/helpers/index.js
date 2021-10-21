export const upsert = (resources, resource) => {
  const index = resources.findIndex(p => p.id === resource.id)

  if (resource.id && index !== -1) {
    resources[index] = resource
  } else {
    resources.push(resource)
  }
}

export const docToResource = (doc) => {
  if (typeof doc?.data !== 'function') {
    return doc
  }

  return { id: doc.id, ...doc.data() }
}
