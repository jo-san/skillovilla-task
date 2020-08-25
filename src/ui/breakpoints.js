const size = {
    xxs: '376px',
    xs: '767px', // 767px & below is mobile
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xlg: '1440px'
};

export const xxs = () => `@media (max-width: ${size.xxs})`;
export const xs = () => `@media (max-width: ${size.xs})`;
export const sm = () => `@media (min-width: ${size.sm})`;
export const md = () => `@media (min-width: ${size.md})`;
export const lg = () => `@media (min-width: ${size.lg})`;
export const xlg = () => `@media (min-width: ${size.xlg})`;
