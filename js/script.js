import ScrollSuave from './modules/scroll-suave.js';

import initAccordion from './modules/accordion.js';

import initTabNav from './modules/tab.js';

import initModal from './modules/modal.js';

import initTooltip from './modules/tooltip.js';

import initDropdownMenu from './modules/dropdown-menu.js';

import initMenuMobile from './modules/menu-mobile.js';

import initFuncionamento from './modules/funcionamento.js';

import initAnimaisFetch from './modules/fetch-animais.js'

import initFetchBitcoin from './modules/fetch-bitcoin.js'

import initAnimacaoScroll from './modules/animacao-scroll.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initAnimaisFetch();
initFetchBitcoin();
initAnimacaoScroll();