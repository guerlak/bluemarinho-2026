'use client';

import { useActionState, useRef, useEffect } from 'react';
import { createPresentationAction } from '@/actions/presentation-actions';
import { MONTHS } from '@/lib/constants';
import { Venue } from '@/lib/types';

interface PresentationFormProps {
	venues: Venue[];
}

export default function AdminPresentationForm({ venues }: PresentationFormProps) {
	const [state, formAction, isPending] = useActionState(createPresentationAction, null);
	const formRef = useRef<HTMLFormElement>(null);

	useEffect(() => {
		if (state?.success) {
			formRef.current?.reset();
		}
	}, [state]);

	const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'));

	return (
		<form ref={formRef} action={formAction} className="space-y-4">
			{state?.error && (
				<div className="rounded-lg bg-red-500/10 border border-red-500/30 p-3 text-sm text-red-400">
					{state.error}
				</div>
			)}

			{state?.success && (
				<div className="rounded-lg bg-green-500/10 border border-green-500/30 p-3 text-sm text-green-400">
					Show adicionado com sucesso e publicado no site!
				</div>
			)}

			{/* Seleção da Casa de Show Relacionada */}
			<div>
				<label className="block text-xs font-medium text-neutral-400 mb-1">
					Casa de Show
				</label>
				<select
					name="venue_id"
					required
					defaultValue=""
					className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-blue-400 font-medium focus:border-blue-500 focus:outline-none"
				>
					<option value="" disabled>-- Selecione uma casa cadastrada --</option>
					{venues.map((venue) => (
						<option key={venue.id} value={venue.id}>
							{venue.name} — {venue.location}
						</option>
					))}
				</select>
				{venues.length === 0 && (
					<p className="text-xs text-yellow-500 mt-1">
						Nenhuma casa cadastrada. Cadastre uma no formulário abaixo.
					</p>
				)}
			</div>

			{/* Seleção de Data e Horário */}
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
				<div>
					<label className="block text-xs font-medium text-neutral-400 mb-1">Dia</label>
					<select
						name="day"
						required
						defaultValue="15"
						className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
					>
						{days.map((d) => (
							<option key={d} value={d}>
								{d}
							</option>
						))}
					</select>
				</div>

				<div>
					<label className="block text-xs font-medium text-neutral-400 mb-1">Mês</label>
					<select
						name="month"
						required
						defaultValue="OUT"
						className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
					>
						{MONTHS.map((m) => (
							<option key={m} value={m}>
								{m}
							</option>
						))}
					</select>
				</div>

				<div>
					<label className="block text-xs font-medium text-neutral-400 mb-1">Ano</label>
					<input
						type="text"
						name="year"
						required
						maxLength={4}
						defaultValue="2026"
						className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
					/>
				</div>

				<div>
					<label className="block text-xs font-medium text-neutral-400 mb-1">Horário</label>
					<input
						type="text"
						name="time"
						required
						defaultValue="21:00"
						className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
					/>
				</div>
			</div>

			<button
				type="submit"
				disabled={isPending || venues.length === 0}
				className="w-full sm:w-auto rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 disabled:opacity-50 transition"
			>
				{isPending ? 'Salvando...' : '+ Agendar Show'}
			</button>
		</form>
	);
}
