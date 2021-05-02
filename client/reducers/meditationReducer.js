import { VIEW_MEDITATION } from '../actions/actions'

const meditations = (state = [], action) => {
  switch (action.type) {
    case VIEW_MEDITATION:
      return action.meditation

    default:
      return state
  }
}

export default meditations
