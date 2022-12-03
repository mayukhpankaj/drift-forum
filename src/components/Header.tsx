import Link from 'next/link'
import HeaderLink from './HeaderLink'
import ConnectWallet from './ConnectWallet'
import RefractLogo from './Icons/RefractLogo'

const Header = () => {
	return (
		<header className="flex items-center justify-between px-6 h-16">
			<Link href="/">
				<a className="flex items-center space-x-2">
					<RefractLogo className="w-6 h-6" />
					<span className="font-bold">Drift</span>
				</a>
			</Link>
			<div className="hidden md:flex items-center space-x-4">
				<HeaderLink href="/newest">Forum</HeaderLink>
				<HeaderLink href="/create">Post</HeaderLink>
			</div>
			<ConnectWallet />
		</header>
	)
}

export default Header
