const middleware = {}

middleware['state'] = require('../middleware/state.js')
middleware['state'] = middleware['state'].default || middleware['state']

middleware['webMiddle'] = require('../middleware/webMiddle.js')
middleware['webMiddle'] = middleware['webMiddle'].default || middleware['webMiddle']

export default middleware
