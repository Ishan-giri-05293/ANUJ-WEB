import { workshopConfig } from '@/config/workshop';

/**
 * Builds a wa.me link with a pre-filled registration message
 * for the workshop.
 */
export function buildWhatsAppLink(): string {
  const { registration } = workshopConfig;
  const text = encodeURIComponent(
    'Hi Anuj, I want to join the Live Digital Marketing Workshop on 23 August. Please share the registration and payment details.'
  );
  return `https://wa.me/${registration.whatsappNumber}?text=${text}`;
}

export function openWhatsAppRegistration(): void {
  window.open(buildWhatsAppLink(), '_blank', 'noopener,noreferrer');
}
