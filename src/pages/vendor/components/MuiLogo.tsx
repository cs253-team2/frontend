import * as React from 'react';
import AspectRatio, { AspectRatioProps } from '@mui/joy/AspectRatio';

export default function MuiLogo({ sx, ...props }: AspectRatioProps) {
  return (
    <AspectRatio
      ratio="1"
      variant="plain"
      {...props}
      sx={[
        {
          width: 36,
          borderRadius: 'sm',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <div>
        <svg
          xmlns="https://www.shutterstock.com/image-vector/initial-letter-cp-linked-circle-260nw-463344173.jpg"
          width="24"
          height="20"
          viewBox="0 0 36 32"
          fill="none"
        >
          
        </svg>
      </div>
    </AspectRatio>
  );
}
