import '../scss/pricing.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { usePriceSwitcher } from './pricing/priceSwticher.js';
import { useFooterAccordion } from './footer_accordion.js';

useTheme();
useBurger();
usePriceSwitcher();
useFooterAccordion();