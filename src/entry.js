function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

import 'Fonts/fonts.scss';
requireAll(require.context('Blocks', true, /\.js$/)); 
requireAll(require.context('Pages', true, /\.js$/)); 