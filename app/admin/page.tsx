import { getPresentations } from '@/actions/get-presentations';
import { getVenues } from '@/actions/venue-actions';
import { logoutAction } from '@/actions/auth-actions';
import { deletePresentationAction } from '@/actions/presentation-actions';
import AdminPresentationForm from './presentation-form';
import AdminVenueForm from './venue-form';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
	const [presentations, venues] = await Promise.all([
		getPresentations(),
		getVenues(),
	]);

	return (
		<div className="min-h-screen bg-neutral-950 text-white p-6 md:p-12">
			<div className="mx-auto max-w-5xl space-y-10">


				<header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-neutral-800 pb-6">
					<div>
						<h1 className="text-3xl font-extrabold tracking-tight">
							Painel de <span className="text-blue-500">Shows</span>
						</h1>
						<p className="text-sm text-neutral-400 mt-1">
							Gerencie as casas e a agenda de apresentações da Blue Marinho
						</p>
					</div>

					<div className="flex items-center gap-3">
						<Link
							href="/"
							target="_blank"
							className="rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-medium hover:bg-neutral-800 transition"
						>
							Ver Site ↗
						</Link>

						<form action={logoutAction}>
							<button
								type="submit"
								className="rounded-lg bg-red-600/20 border border-red-500/40 px-4 py-2 text-sm font-medium text-red-300 hover:bg-red-600 hover:text-white transition"
							>
								Sair
							</button>
						</form>
					</div>
				</header>

				<section className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-8 backdrop-blur-sm space-y-4">
					<h2 className="text-xl font-bold text-neutral-200">Cadastrar Nova Casa de Show</h2>
					<p className="text-xs text-neutral-400">
						Cadastre um novo bar, pub ou casa de evento. Ele ficará disponível imediatamente para agendamento acima.
					</p>
					<AdminVenueForm />
				</section>


				<section className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 md:p-8 backdrop-blur-sm space-y-4">
					<h2 className="text-xl font-bold text-neutral-200">Agendar Apresentação</h2>
					<AdminPresentationForm venues={venues} />
				</section>


				<section className="space-y-4">
					<h2 className="text-xl font-bold text-neutral-200">
						Apresentações Agendadas ({presentations.length})
					</h2>

					{presentations.length === 0 ? (
						<p className="text-neutral-500 italic">Nenhum show agendado no banco de dados.</p>
					) : (
						<div className="grid gap-4 sm:grid-cols-2">
							{presentations.map((item) => (
								<div
									key={item.id}
									className="flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/80 p-5 hover:border-neutral-700 transition"
								>
									<div className="space-y-1">
										<div className="flex items-center gap-2">
											<span className="font-mono text-lg font-black text-blue-400">
												{item.day} {item.month} {item.year}
											</span>
											<span className="text-xs bg-neutral-800 px-2 py-0.5 rounded text-neutral-300">
												{item.time}
											</span>
										</div>
										<div className="font-bold text-white text-base">{item.venue}</div>
										<div className="text-xs text-neutral-400">{item.location}</div>
									</div>

									{item.id && (
										<form
											action={async () => {
												'use server';
												await deletePresentationAction(item.id!);
											}}
										>
											<button
												type="submit"
												className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-400 hover:bg-red-500 hover:text-white transition"
											>
												Excluir
											</button>
										</form>
									)}
								</div>
							))}
						</div>
					)}
				</section>

			</div>
		</div>
	);
}
