import '../scss/main.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {
  useInsightSlider,
  useTestimonialsSlider,
} from './components/slider.js';
import { useFooterAccordion } from './footer_accordion.js';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();
useFooterAccordion();