const middleware = {}

middleware['i18n'] = require('../middleware/i18n.js')
middleware['i18n'] = middleware['i18n'].default || middleware['i18n']

middleware['state'] = require('../middleware/state.js')
middleware['state'] = middleware['state'].default || middleware['state']

middleware['webMiddle'] = require('../middleware/webMiddle.js')
middleware['webMiddle'] = middleware['webMiddle'].default || middleware['webMiddle']

export default middleware
