import '../scss/blog.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useFooterAccordion } from './footer_accordion.js';
import { useNewsSlider } from './components/slider.js';
import { useTabsNews } from './components/tabs.js';
import { useArticlesSlider } from './components/slider.js';

useTheme();
useBurger();
useFooterAccordion();
useNewsSlider();
useTabsNews();
useArticlesSlider();
