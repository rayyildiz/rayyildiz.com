const TURKISH_CHAR_MAP: Record<string, string> = {
  'ı': 'i',
  'İ': 'i',
  'ş': 's',
  'Ş': 's',
  'ğ': 'g',
  'Ğ': 'g',
  'ü': 'u',
  'Ü': 'u',
  'ö': 'o',
  'Ö': 'o',
  'ç': 'c',
  'Ç': 'c'
};

export function slugifyTerm(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) return '';

  const mapped = Array.from(trimmed)
    .map((ch) => TURKISH_CHAR_MAP[ch] ?? ch)
    .join('');

  return mapped
    .normalize('NFKD')
    .replace(/\p{Diacritic}+/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/(^-|-$)/g, '');
}
