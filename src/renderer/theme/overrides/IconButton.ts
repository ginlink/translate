import { MyTheme } from '../types'

export default function IconButton(theme: MyTheme) {
  return {
    MuiIconButton: {
      variants: [
        {
          props: { color: 'default' },
          style: {
            '&:hover': { backgroundColor: theme.palette.action.hover },
          },
        },
        {
          props: { color: 'inherit' },
          style: {
            '&:hover': { backgroundColor: theme.palette.action.hover },
          },
        },
      ],
    },
  }
}
