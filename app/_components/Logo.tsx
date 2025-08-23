import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.png';

export default function Logo() {
	return (
		<Link href="/" className="flex items-center gap-2 md:gap-4 z-10">
			<Image src={logo} quality={100} priority width={40} height={40} alt="The Wild Oasis Logo" />
			<span className="text-lg md:text-xl text-primary-100 font-semibold">The Wild Oasis</span>
		</Link>
	);
}
