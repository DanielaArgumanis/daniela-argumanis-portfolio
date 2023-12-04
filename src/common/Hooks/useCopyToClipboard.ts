import { useTheme } from '@emotion/react';
import { toast } from 'react-toastify';

export const useCopyToClipboard = () => {
  const theme = useTheme();

  return async (text: string) => {
    if (!navigator?.clipboard) {
      toast.error('Clipboard not supported', {
        theme: theme.colorMode,
      });
      return false;
    }
    try {
      await navigator.clipboard.writeText(text);
      toast('Email copied to clipboard!', {
        theme: theme.colorMode,
        progressStyle: {
          backgroundColor: theme.palette.accent,
          backgroundImage: 'none',
        },
      });
      return true;
    } catch (error) {
      toast.error('Error copying email to clipboard', {
        theme: theme.colorMode,
      });
    }
  };
};
