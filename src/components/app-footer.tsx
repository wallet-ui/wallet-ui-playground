export function AppFooter() {
  return (
    <footer className="flex justify-center items-center gap-1 p-2 bg-card/50 text-xs">
      Powered by{' '}
      <a
        href="https://github.com/wallet-ui/wallet-ui"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 font-bold hover:underline"
      >
        <img src="/wallet-ui.png" alt="Wallet UI Logo" className="size-4" />
        <span>wallet-ui</span>
      </a>
    </footer>
  )
}
