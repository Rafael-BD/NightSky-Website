'use client';
import React from 'react';
import { styled } from '../../stitches.config';
import i18n from "@/i18n";

const Button = styled("button", {
    padding: "0.2rem",
    color: '$primary',
    border: 'none',
    borderRadius: '999px',
    cursor: 'pointer',
    transition: '0.3s',
    fontSize: '$1',
    fontFamily: 'var(--font-geist-mono)',
    background: '$colors$background',
    position: 'relative',
    '&::before': {
        content: `''`,
        display: 'block',
        backgroundImage: 'linear-gradient(130deg, #f6bf75, #d77185, #8766ac, #4150b1)',
        position: 'absolute',
        borderRadius: '999px',
        width: 'calc(100% + 6px)',
        height: 'calc(100% + 6px)',
        top: '-3px',
        left: '-3px',
        zIndex: -1,
    },
    '&:hover': {
        background: '$colors$surface',
    },
    '&:active': {
        background: '$colors$foreground',
        color: '$colors$background',
    },
    '&:disabled': {
        background: '$colors$background',
        color: '$colors$surface',
        cursor: 'not-allowed',
    },
});

export default function GradientButton({ children,enabled=true, ...props }) {
    return (
        <Button {...props} 
            onClick={
                () => window.open(props.href, '_blank')
            }
            disabled={!props.enabled}
        >
            {children}
            {props.enabled ? '' : ` (${i18n["soon"]})`}
        </Button>
    );
}