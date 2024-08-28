import '../scss/contacts.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useFooterAccordion } from './footer_accordion.js';
import { usePhone } from './contacts/phone.js';

useTheme();
useBurger();
useFooterAccordion();
usePhone();