'use client';

import { useActionState, useRef, useEffect } from 'react';
import { createVenueAction } from '@/actions/venue-actions';

export default function AdminVenueForm() {
    const [state, formAction, isPending] = useActionState(createVenueAction, null);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state?.success) {
            formRef.current?.reset();
        }
    }, [state]);

    return (
        <form ref={formRef} action={formAction} className="space-y-4">
            {state?.error && (
                <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-3 text-xs text-red-400">
                    {state.error}
                </div>
            )}

            {state?.success && (
                <div className="rounded-lg bg-green-500/10 border border-green-500/30 p-3 text-xs text-green-400">
                    Casa de show cadastrada com sucesso!
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-1">Nome da Casa</label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Ex: CIRCO VOADOR"
                        className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-white uppercase focus:border-blue-500 focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-1">Bairro / Cidade</label>
                    <input
                        type="text"
                        name="location"
                        required
                        placeholder="Ex: Lapa, RJ"
                        className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block text-xs font-medium text-neutral-400 mb-1">Instagram / Link</label>
                    <input
                        type="url"
                        name="socialLink"
                        placeholder="https://instagram.com/..."
                        className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
                    />
                </div>
            </div>

            <button
                type="submit"
                disabled={isPending}
                className="rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-2 text-xs font-semibold text-white hover:bg-neutral-700 disabled:opacity-50 transition"
            >
                {isPending ? 'Salvando...' : '+ Cadastrar Nova Casa'}
            </button>
        </form>
    );
}
