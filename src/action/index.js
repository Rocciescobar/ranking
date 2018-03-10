export const next = () => ({
  type: 'NEXT',
})

export const preview = () => ({
  type: 'PREVIEW',
})

export const increase = (id) => ({
    type: 'INCREASE',
    id
})

export const decreases = (id) => ({
    type: 'DECREASE',
    id
  })

export const Play = (id) => ({
    type: 'PLAY',
    id
})
