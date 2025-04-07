import api from './api'

export const PromptPresets = () =>
    api.get('/prompt-presets')