export const actionTypes = {
  more : 'more',
  less : 'less',
  activeArtist: 'activeArtist'
}

export const more = (id) => ({
  type : actionTypes.more,
  id
})

export const less = (id) => ({
  type : actionTypes.less,
  id
})

export const activeArtist = (id) => ({
  type : actionTypes.activeArtist,
  id
})