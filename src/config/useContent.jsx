import { useLanguage } from './useLanguage';
import content from './content';

export function useContent() {
  const { lang } = useLanguage();
  return content[lang];
}