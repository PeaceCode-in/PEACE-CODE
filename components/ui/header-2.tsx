'use client';

import React from 'react';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';

// Logo component with fallback
function LogoImage({ size }: { size: number }) {
	const [logoError, setLogoError] = React.useState(false);
	
	if (logoError) {
		return null;
	}
	
	return (
		<img
			src="/logo.png.png"
			alt="Peace Code Logo"
			className="object-contain"
			style={{ height: size, width: 'auto', maxWidth: '400px', minHeight: size }}
			onError={() => setLogoError(true)}
		/>
	);
}

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	const navItems = [
		{
			label: 'About Us',
			href: '/about/about-peace-code',
			sections: [
				{
					title: 'About Peace Code',
					items: [
						{ label: 'About Peace Code', href: '/about/about-peace-code' },
						{ label: 'Our Team', href: '/about/team' },
						{ label: 'Careers', href: '/about/careers' },
						{ label: 'Media', href: '/about/media' },
						{ label: 'Contact', href: '/about/contact' },
						{ label: 'FAQs', href: '/about/faqs' },
					],
				},
			],
		},
		{
			label: 'Services',
			href: '/services',
			sections: [
				{
					title: 'Core Care',
					items: [
						{ label: 'Counseling', href: '/counseling' },
						{ label: 'Experts', href: '/experts' },
						{ label: 'Screening', href: '/screening' },
						{ label: 'AI Support', href: '/ai-support' },
					],
				},
				{
					title: 'Wellness Tools',
					items: [
						{ label: 'Breathe', href: '/breathe' },
						{ label: 'Focus', href: '/focus' },
						{ label: 'Gratitude', href: '/gratitude' },
						{ label: 'Journal', href: '/journal' },
						{ label: 'Community', href: '/community' },
					],
				},
			],
		},
		{
			label: 'Resources',
			href: '/resources',
			sections: [
				{
					title: 'Resources',
					items: [
						{ label: 'Resource Hub', href: '/resources' },
						{ label: 'Partners', href: '/partners' },
						{ label: 'Pricing', href: '/pricing' },
					],
				},
			],
		},
	];

	React.useEffect(() => {
		if (open) document.body.style.overflow = 'hidden';
		else document.body.style.overflow = '';

		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn(
				'sticky top-0 z-50 mx-auto w-full max-w-7xl border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out',
				{
					'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg md:top-4 md:max-w-6xl md:shadow-lg':
						scrolled && !open,
					'bg-background/90': open,
				},
			)}
		>
			<nav
				className={cn('flex h-20 w-full items-center justify-between px-4 md:h-16 md:transition-all md:ease-out', {
					'md:px-6': scrolled,
					'md:px-8': !scrolled,
				})}
			>
				<Link href="/" className="flex items-center">
					<LogoImage size={scrolled ? 56 : 72} />
				</Link>
				<div className="hidden flex-1 items-center justify-center md:flex">
					<div className="flex items-center gap-4">
						<Link className={buttonVariants({ variant: 'ghost' })} href="/announcements">
							Announcements
						</Link>
						{navItems.map((link) => (
							<div key={link.label} className="group relative">
								<Link className={buttonVariants({ variant: 'ghost' })} href={link.href}>
									{link.label}
								</Link>
								<div
									className={cn(
										'pointer-events-none absolute left-0 top-full z-50 mt-3 w-[36rem] origin-top-left rounded-2xl border border-slate-200/60 bg-white/70 p-4 shadow-xl backdrop-blur-lg',
										'dark:border-slate-700/60 dark:bg-slate-900/60',
										'opacity-0 translate-y-2 transition-all duration-200 ease-out',
										'group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-y-0',
										'group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0',
										'before:absolute before:-top-3 before:left-0 before:h-3 before:w-full before:content-[\'\']',
									)}
								>
									<div
										className={cn(
											'grid gap-6 rounded-xl border border-white/40 bg-white/40 p-5 shadow-inner',
											'dark:border-white/10 dark:bg-slate-900/40',
											link.label === 'Services' ? 'md:grid-cols-2' : 'md:grid-cols-1',
										)}
									>
										{link.sections.map((section) => (
											<div key={section.title} className="grid gap-2">
												<span className="px-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
													{section.title}
												</span>
												<div className="grid gap-1">
													{section.items.map((item) => (
														<Link
															key={item.label}
															href={item.href}
															className={cn(
																'rounded-lg px-2 py-1.5 text-sm font-medium text-slate-800 transition-all',
																'hover:bg-white/70 hover:pl-3 hover:text-slate-900',
																'focus:bg-white/70 focus:pl-3 focus:text-slate-900',
																'dark:text-slate-100 dark:hover:bg-slate-900/60 dark:focus:bg-slate-900/60',
															)}
														>
															{item.label}
														</Link>
													))}
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="hidden items-center gap-3 md:flex">
					<Link
						href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:3001/dashboard"}/login`}
						className={buttonVariants({ variant: "default" })}
					>
						Sign In
					</Link>
				</div>
				<div className="flex items-center gap-2 md:hidden">
					<Button size="icon" variant="outline" onClick={() => setOpen(!open)}>
						<MenuToggleIcon open={open} className="size-5" duration={300} />
					</Button>
				</div>
			</nav>

			<div
				className={cn(
					'bg-background/90 fixed top-20 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y md:hidden',
					open ? 'block' : 'hidden',
				)}
			>
				<div
					data-slot={open ? 'open' : 'closed'}
					className={cn(
						'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
						'flex h-full w-full flex-col justify-between gap-y-2 p-4',
					)}
				>
					<div className="grid gap-y-3">
						<Link
							className={buttonVariants({ variant: 'ghost', className: 'justify-start' })}
							href="/announcements"
							onClick={() => setOpen(false)}
						>
							Announcements
						</Link>
						{navItems.map((link) => (
							<div key={link.label} className="grid gap-y-1">
								<Link
									className={buttonVariants({ variant: 'ghost', className: 'justify-start' })}
									href={link.href}
									onClick={() => setOpen(false)}
								>
									{link.label}
								</Link>
								<div className="grid gap-1 pl-3">
									{link.sections.flatMap((section) => section.items).map((item) => (
										<Link
											key={item.label}
											href={item.href}
											onClick={() => setOpen(false)}
											className="rounded-md px-2 py-1.5 text-sm text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
										>
											{item.label}
										</Link>
									))}
								</div>
							</div>
						))}
					</div>
					<div className="flex flex-col gap-2">
						<Link
							href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:3001/dashboard"}/login`}
							className={buttonVariants({ variant: "default", className: "w-full text-center" })}
							onClick={() => setOpen(false)}
						>
							Sign In
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}



