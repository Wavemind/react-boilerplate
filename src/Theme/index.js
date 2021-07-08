import DarkTheme from './Palettes/Dark'
import LightTheme from './Palettes/Light'

const Theme = palletType => (palletType === 'light' ? LightTheme : DarkTheme)
export default Theme
