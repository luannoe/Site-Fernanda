export const Theme = {
  colors: {
    primary: '#f89949',
    primaryAccent: '#f3726e',
    secondary: '#a1cea1',
    secondaryAccent: '#87ad87',
    secondaryAccentDarker: '#719171',
    offWhite: '#f7f6f6',
    offWhiteAccent: '#ebeded',
    transparency: {
      primary: value => `rgba(248, 153, 73, ${value})`,
      primaryAccent: value => `rgba(243, 114, 110, ${value})`,
      secondary: value => `rgba(161, 206, 161, ${value})`,
      secondaryAccent: value => `rgba(135, 173, 135, ${value})`,
      secondaryAccentDarker: value => `rgba(113, 145, 113, ${value})`
    }
  }
};

export default Theme;
