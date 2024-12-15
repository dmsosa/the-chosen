// type TBaffleObject = {
//     once: () => void;
//     start: () => void;
//     stop: () => void;
//     reveal: (duration: number=0, delay: number=0) => void;
//     set: (options: TBaffleOptions) => void;
//     text: (fn: (text: string) => string) => void;
// }
// type TBaffleOptions = {
//     characters: string;
//     exclude: string[];
//     speed: number;

// }

// const defaultOptions: TBaffleOptions = {
//     characters: 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz~!@#$%^&*()-+=[]{}|;:,./<>?',
//     exclude: [' '],
//     speed: 50,
// }

// declare module 'baffle' {
//     export function baffle(selector: string, options?: TBaffleOptions | null = defaultOptions) : TBaffleObject;
// }