// Suppress known Supabase webpack warnings
const originalWarn = console.warn;
console.warn = (...args) => {
  if (args[0]?.includes?.('Critical dependency: the request of a dependency is an expression')) {
    return;
  }
  originalWarn.apply(console, args);
};
