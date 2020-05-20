function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

requireAll(require.context('Blocks', true, /\.js$/)); 
requireAll(require.context('Layouts', true, /\.js$/)); 