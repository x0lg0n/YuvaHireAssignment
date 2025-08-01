"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Briefcase, ScrollText } from "lucide-react"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar"
import { ProtectedRoute } from "@/components/protected-route"

const navigation = [
	{
		name: "Available Jobs",
		href: "/student/jobs",
		icon: Briefcase,
	},
	{
		name: "My Applications",
		href: "/student/applications",
		icon: ScrollText,
	},
]

export default function StudentLayout({ children }) {
	const pathname = usePathname()

	return (		<ProtectedRoute requiredRole="student">
			<div className="flex min-h-[calc(100vh-4rem)]">
				<div className="w-64 border-r bg-muted/10">
					<nav className="flex flex-col gap-2 p-4">
						{navigation.map((item) => {
							const Icon = item.icon
							return (
								<Link
									key={item.name}
									href={item.href}
									className={cn(
										"flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
										pathname === item.href
											? "bg-primary text-primary-foreground"
											: "hover:bg-muted"
									)}
								>
									<Icon className="h-4 w-4" />
									{item.name}
								</Link>
							)
						})}
					</nav>
				</div>
				<div className="flex-1 p-6">
					<main className="container mx-auto px-4 py-8">
						{children}
					</main>
				</div>
			</div>
		</ProtectedRoute>
	)
}
