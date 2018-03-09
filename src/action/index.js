export const next = (id) => ({
  type: 'NEXT',
  id: nextId++
})

export const preview = (id) => ({
  type: 'PREVIEW',
  id: nextId--
})

export const increase = () => ({
    type: 'INCREASE',
})

export const decreases = () => ({
    type: 'DECREASE',
  })

export const Play = (id) => ({
    type: 'PLAY',
    id
})
